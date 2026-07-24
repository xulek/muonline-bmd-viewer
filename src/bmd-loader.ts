// src/bmd-loader.ts

import * as THREE from 'three';
import {
    BMD, BMDTextureMesh, BMDTexCoord, BMDTextureNormal,
    BMDTextureVertex, BMDTriangle, BMDTextureAction,
    BMDTextureBone, BMDBoneMatrix, Vector3 as BMDVector3
} from './types';
import { decodeTga } from '@lunapaint/tga-codec';
import { createLea256EcbDecrypt } from './crypto/lea256';
import { decryptFileCryptor } from './crypto/file-cryptor';
import { readStructArray, StructLayout } from './BinaryStruct';
import { logger } from './utils/Logger';

//----------------------------------------------------------
//  Structure Definitions
//----------------------------------------------------------

// BMDTextureVertex: Node(2) + padding(2) + Position(12) = 16 bytes
const BMDTextureVertexLayout: StructLayout = [
  ['node', 'int16'],
  ['__padding0', 'int16'],
  ['x', 'float32'],
  ['y', 'float32'],
  ['z', 'float32'],
];

// BMDTextureNormal: Node(2) + padding(2) + Normal(12) + BindVertex(2) + padding(2) = 20 bytes
const BMDTextureNormalLayout: StructLayout = [
  ['node', 'int16'],
  ['__padding0', 'int16'],
  ['nx', 'float32'],
  ['ny', 'float32'],
  ['nz', 'float32'],
  ['bindVertex', 'int16'],
  ['__padding1', 'int16'],
];

// BMDTexCoord: U(4) + V(4) = 8 bytes
const BMDTexCoordLayout: StructLayout = [
    ['u', 'float32'],
    ['v', 'float32'],
];

//----------------------------------------------------------
//  Helpers – de/en-cryption
//----------------------------------------------------------
const LEA_KEY = new Uint8Array([
    0xcc, 0x50, 0x45, 0x13, 0xc2, 0xa6, 0x57, 0x4e,
    0xd6, 0x9a, 0x45, 0x89, 0xbf, 0x2f, 0xbc, 0xd9,
    0x39, 0xb3, 0xb3, 0xbd, 0x50, 0xbd, 0xcc, 0xb6,
    0x85, 0x46, 0xd1, 0xd6, 0x16, 0x54, 0xe0, 0x87
]);
  
const leaDecrypt = createLea256EcbDecrypt(LEA_KEY);

function decryptLea(enc: Uint8Array): Uint8Array {
  return leaDecrypt(enc);
}

//----------------------------------------------------------
//  Helpers – TGA → dataURL
//----------------------------------------------------------
export async function convertTgaToDataUrl(tgaBuffer: ArrayBuffer): Promise<string> {
    const tga = await decodeTga(new Uint8Array(tgaBuffer));
    const { width, height, data } = tga.image;
  
    const canvas = document.createElement('canvas');
    canvas.width  = width;
    canvas.height = height;
  
    const ctx = canvas.getContext('2d')!;
    const imageData = ctx.createImageData(width, height);
    imageData.data.set(data);
    ctx.putImageData(imageData, 0, 0);
  
    return canvas.toDataURL('image/png');
  }
  

//----------------------------------------------------------
//  Helpers – Quaternions
//----------------------------------------------------------
function bmdAngleToQuaternion(eulerAngles: BMDVector3): THREE.Quaternion {
    const halfX = eulerAngles.x * 0.5;
    const halfY = eulerAngles.y * 0.5;
    const halfZ = eulerAngles.z * 0.5;

    const sinX = Math.sin(halfX);
    const cosX = Math.cos(halfX);
    const sinY = Math.sin(halfY);
    const cosY = Math.cos(halfY);
    const sinZ = Math.sin(halfZ);
    const cosZ = Math.cos(halfZ);

    const w = cosX * cosY * cosZ + sinX * sinY * sinZ;
    const x = sinX * cosY * cosZ - cosX * sinY * sinZ;
    const y = cosX * sinY * cosZ + sinX * cosY * sinZ;
    const z = cosX * cosY * sinZ - sinX * sinY * cosZ;
    
    return new THREE.Quaternion(x, y, z, w).normalize();
}

//----------------------------------------------------------
//  Safe Reading Helper Functions
//----------------------------------------------------------
function safeReadStruct<T>(view: DataView, layout: StructLayout, offset: number, bufferSize: number, structName: string): { data: T | null, newOffset: number } {
    const structSize = layout.reduce((acc, [, type]) => {
        const sizes = { int16: 2, uint16: 2, uint8: 1, float32: 4 };
        return acc + sizes[type];
    }, 0);

    if (offset + structSize > bufferSize) {
        console.warn(`Cannot read ${structName} at offset ${offset}: would exceed buffer bounds (${bufferSize})`);
        return { data: null, newOffset: offset };
    }

    try {
        const result: any = {};
        let currentOffset = offset;

        for (const [name, type] of layout) {
            if (!name.startsWith('__')) {
                const sizes = { int16: 2, uint16: 2, uint8: 1, float32: 4 };
                const readers = {
                    int16: (v: DataView, o: number) => v.getInt16(o, true),
                    uint16: (v: DataView, o: number) => v.getUint16(o, true),
                    uint8: (v: DataView, o: number) => v.getUint8(o),
                    float32: (v: DataView, o: number) => v.getFloat32(o, true)
                };
                result[name] = readers[type](view, currentOffset);
            }
            currentOffset += { int16: 2, uint16: 2, uint8: 1, float32: 4 }[type];
        }

        return { data: result as T, newOffset: currentOffset };
    } catch (error) {
        console.error(`Error reading ${structName} at offset ${offset}:`, error);
        return { data: null, newOffset: offset };
    }
}

//----------------------------------------------------------
//  Main loader
//----------------------------------------------------------
export class BMDLoader {
    public async load(bmdBuffer: ArrayBuffer): Promise<{ group: THREE.Group; requiredTextures: string[] }> {
        logger.groupDebug('BMDLoader.load');
        logger.time('BMDLoader.load total');

        const bmd = this.parse(bmdBuffer);
        logger.debug('Parsed BMD summary', { name: bmd.name, meshes: bmd.meshes.length, bones: bmd.bones.length, actions: bmd.actions.length });

        const requiredTextures = [...new Set(bmd.meshes.map(m => m.texturePath))];
        logger.debug('Required textures', requiredTextures);
        
        const group = new THREE.Group();
        group.name  = bmd.name;

        // --- Build bones (bmdBones matches BMD file indices) ---
        const bmdBones: THREE.Bone[] = [];
        bmd.bones.forEach(bmdBone => {
            const bone = new THREE.Bone();
            bone.name = bmdBone.name;
            bmdBones.push(bone);
        });

        // Ensure unique bone names (fixes ANIMATION_DUPLICATE_TARGETS in glTF)
        const usedNames = new Set<string>();
        for (const bone of bmdBones) {
            const baseName = bone.name;
            if (usedNames.has(bone.name)) {
                let suffix = 1;
                while (usedNames.has(`${baseName}_${suffix}`)) suffix++;
                bone.name = `${baseName}_${suffix}`;
            }
            usedNames.add(bone.name);
        }

        // --- Build parent-child hierarchy ---
        const rootBones: THREE.Bone[] = [];
        bmdBones.forEach((bone, i) => {
            const parentIdx = bmd.bones[i].parent;
            if (parentIdx >= 0 && parentIdx < bmdBones.length) {
                bmdBones[parentIdx].add(bone);
            } else {
                rootBones.push(bone);
            }
        });

        // Ensure single skeleton root (fixes SKIN_SKELETON_INVALID in glTF).
        // GLTFExporter uses skeleton.bones[0] as the skeleton root node;
        // if there are multiple root bones, bones[0] is not a common ancestor
        // of all joints and the validator rejects it.
        let skeletonBones: THREE.Bone[];
        let boneIndexOffset = 0;
        if (rootBones.length > 1) {
            const armature = new THREE.Bone();
            armature.name = 'Armature';
            rootBones.forEach(rb => armature.add(rb));
            group.add(armature);
            skeletonBones = [armature, ...bmdBones];
            boneIndexOffset = 1;
        } else {
            rootBones.forEach(rootBone => group.add(rootBone));
            skeletonBones = bmdBones;
        }

        const skeleton = new THREE.Skeleton(skeletonBones);

        bmd.meshes.forEach(bmdMesh => {
            const geometry = new THREE.BufferGeometry();

            const material = new THREE.MeshPhongMaterial({
                color: 0xcccccc,
                side: THREE.DoubleSide,
            });

            const { positions, normals, uvs, skinIndices, skinWeights } = this.extractGeometry(bmdMesh, boneIndexOffset);

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
            geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
            geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
            geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));

            const skinnedMesh = new THREE.SkinnedMesh(geometry, material);
            skinnedMesh.name = `mesh_${group.children.length}`;
            skinnedMesh.userData.texturePath = bmdMesh.texturePath;
            skinnedMesh.bind(skeleton);
            group.add(skinnedMesh);
        });

        bmd.bones.forEach((bmdBone, i) => {
            if (bmdBone.isDummy || !bmdBone.matrixes?.length) return;

            // frame 0, action 0
            const bind = bmdBone.matrixes[0];
            const p    = bind.position[0] ?? { x:0,y:0,z:0 };
            const q    = bind.quaternion[0] ?? { x:0,y:0,z:0,w:1 };

            const bone = bmdBones[i];
            bone.position.set(p.x, p.y, p.z);
            bone.quaternion.set(q.x, q.y, q.z, q.w);
          });

        // Store bmdBones on the group so external animation loading can use
        // the correct index mapping (skipping synthetic Armature root).
        group.userData.bmdBones = bmdBones;

        const animations = this.createAnimations(bmd, bmdBones);
        if (animations.length > 0) {
            group.animations = animations;
        }
        
        group.rotation.x = -Math.PI / 2;

        logger.timeEnd('BMDLoader.load total');
        logger.groupEnd();

        return { group, requiredTextures };
    }

    
    /**
     * Load only animations from another BMD file and generate clips for the
     * provided skeleton.
     */
    public loadAnimationsFrom(buffer: ArrayBuffer, skeleton: THREE.Skeleton | THREE.Bone[], bmdBones?: THREE.Bone[]): THREE.AnimationClip[] {
        // If bmdBones are provided (from group.userData.bmdBones), use them
        // to keep indices aligned with the BMD file. Otherwise fall back to
        // the raw skeleton/bone array.
        const bones = bmdBones ?? (Array.isArray(skeleton) ? skeleton as THREE.Bone[] : skeleton.bones);
        const bmd   = this.parse(buffer);
        return this.createAnimations(bmd, bones);
    }

    /** Parse a BMD file and return its data structure.
     *  When `meshesOnly` is true the parser stops after reading mesh geometry,
     *  skipping actions and bones entirely – much faster for thumbnail generation.
     *  When `bindPoseOnly` is true the parser reads meshes + only frame 0 of action 0
     *  per bone (skipping remaining frames/actions), giving correct bind-pose positions
     *  with minimal overhead. */
    public parse(buffer: ArrayBuffer, options?: { meshesOnly?: boolean; bindPoseOnly?: boolean }): BMD {
        const MAX_FILE_SIZE = 512 * 1024 * 1024;
        const MAX_MESHES = 4096;
        const MAX_BONES = 4096;
        const MAX_ACTIONS = 4096;
        const MAX_MESH_ELEMENTS = 1_000_000;
        const MAX_ANIMATION_KEYS = 100_000;

        if (!(buffer instanceof ArrayBuffer) || buffer.byteLength < 4) {
          throw new Error('BMD file is too small.');
        }
        if (buffer.byteLength > MAX_FILE_SIZE) {
          throw new Error(`BMD file exceeds the ${MAX_FILE_SIZE / 1024 / 1024} MB safety limit.`);
        }

        const headerView = new DataView(buffer);
        const id = new TextDecoder('ascii').decode(new Uint8Array(buffer, 0, 3));
        if (id !== 'BMD') throw new Error('Invalid BMD header');

        const version = headerView.getUint8(3);
        let work = buffer;
        let dataOffset = 4;
        if (version === 12 || version === 15) {
          if (buffer.byteLength < 8) throw new Error('Encrypted BMD header is truncated.');
          const encryptedSize = headerView.getInt32(4, true);
          if (encryptedSize < 0 || encryptedSize > buffer.byteLength - 8) {
            throw new Error(`Invalid encrypted BMD payload size: ${encryptedSize}.`);
          }

          work = buffer.slice(0);
          const encrypted = new Uint8Array(work, 8, encryptedSize);
          const decrypted = version === 12 ? decryptFileCryptor(encrypted) : decryptLea(encrypted);
          if (decrypted.byteLength !== encryptedSize) {
            throw new Error('Decrypted BMD payload has an unexpected size.');
          }
          encrypted.set(decrypted);
          dataOffset = 8;
        }

        const view = new DataView(work);
        let off = dataOffset;
        const ensure = (byteCount: number, label: string) => {
          if (!Number.isSafeInteger(byteCount) || byteCount < 0 || off + byteCount > view.byteLength) {
            throw new Error(`Truncated BMD while reading ${label} at offset ${off}.`);
          }
        };
        const readS16 = () => { ensure(2, 'int16'); const value = view.getInt16(off, true); off += 2; return value; };
        const readU16 = () => { ensure(2, 'uint16'); const value = view.getUint16(off, true); off += 2; return value; };
        const readU8 = () => { ensure(1, 'uint8'); const value = view.getUint8(off); off += 1; return value; };
        const readF32 = () => { ensure(4, 'float32'); const value = view.getFloat32(off, true); off += 4; return value; };
        const readString = (length: number, label: string) => {
          ensure(length, label);
          const value = this.readStringFromDataView(view, off, length);
          off += length;
          return value;
        };
        const assertCount = (value: number, maximum: number, label: string) => {
          if (!Number.isInteger(value) || value < 0 || value > maximum) {
            throw new Error(`Invalid ${label} count: ${value}.`);
          }
          return value;
        };

        const name = readString(32, 'model name');
        const meshCount = assertCount(readU16(), MAX_MESHES, 'mesh');
        const boneCount = assertCount(readU16(), MAX_BONES, 'bone');
        const actionCount = assertCount(readU16(), MAX_ACTIONS, 'action');
        const bmd: BMD = { version, name, meshes: [], bones: [], actions: [] };

        for (let meshIndex = 0; meshIndex < meshCount; meshIndex++) {
          const numVertices = assertCount(readS16(), MAX_MESH_ELEMENTS, `mesh ${meshIndex} vertex`);
          const numNormals = assertCount(readS16(), MAX_MESH_ELEMENTS, `mesh ${meshIndex} normal`);
          const numTexCoords = assertCount(readS16(), MAX_MESH_ELEMENTS, `mesh ${meshIndex} texcoord`);
          const numTriangles = assertCount(readS16(), MAX_MESH_ELEMENTS, `mesh ${meshIndex} triangle`);
          const textureIndex = readS16();

          const verticesResult = readStructArray<{ node: number; x: number; y: number; z: number }>(
            view,
            BMDTextureVertexLayout,
            off,
            numVertices,
          );
          if (!verticesResult) throw new Error(`Invalid vertex data for mesh ${meshIndex}.`);
          off = verticesResult.newOffset;
          const vertices = verticesResult.data.map(vertex => ({
            node: vertex.node,
            position: { x: vertex.x, y: vertex.y, z: vertex.z },
          }));

          const normalsResult = readStructArray<{ node: number; nx: number; ny: number; nz: number; bindVertex: number }>(
            view,
            BMDTextureNormalLayout,
            off,
            numNormals,
          );
          if (!normalsResult) throw new Error(`Invalid normal data for mesh ${meshIndex}.`);
          off = normalsResult.newOffset;
          const normals = normalsResult.data.map(normal => ({
            node: normal.node,
            normal: { x: normal.nx, y: normal.ny, z: normal.nz },
            bindVertex: normal.bindVertex,
          }));

          const texCoordsResult = readStructArray<BMDTexCoord>(view, BMDTexCoordLayout, off, numTexCoords);
          if (!texCoordsResult) throw new Error(`Invalid texture-coordinate data for mesh ${meshIndex}.`);
          off = texCoordsResult.newOffset;

          const triangleStride = 64;
          ensure(numTriangles * triangleStride, `mesh ${meshIndex} triangles`);
          const triangles: BMDTriangle[] = [];
          for (let triangleIndex = 0; triangleIndex < numTriangles; triangleIndex++) {
            const triangleOffset = off;
            const polygon = view.getUint8(triangleOffset);
            if (polygon !== 3 && polygon !== 4) {
              throw new Error(`Invalid polygon size ${polygon} in mesh ${meshIndex}, triangle ${triangleIndex}.`);
            }
            triangles.push({
              polygon,
              vertexIndex: [0, 1, 2, 3].map(index => view.getInt16(triangleOffset + 2 + index * 2, true)),
              normalIndex: [0, 1, 2, 3].map(index => view.getInt16(triangleOffset + 10 + index * 2, true)),
              texCoordIndex: [0, 1, 2, 3].map(index => view.getInt16(triangleOffset + 18 + index * 2, true)),
              lightMapCoord: [],
              lightMapIndexes: 0,
            });
            off += triangleStride;
          }

          const texturePath = readString(32, `mesh ${meshIndex} texture path`);
          bmd.meshes.push({
            texture: textureIndex,
            numVertices,
            numNormals,
            numTexCoords,
            numTriangles,
            vertices,
            normals,
            texCoords: texCoordsResult.data,
            triangles,
            texturePath,
          });
        }

        if (options?.meshesOnly) return bmd;

        for (let actionIndex = 0; actionIndex < actionCount; actionIndex++) {
          const numKeys = assertCount(readS16(), MAX_ANIMATION_KEYS, `action ${actionIndex} key`);
          const lockPositions = readU8() > 0;
          const action: BMDTextureAction = {
            numAnimationKeys: numKeys,
            lockPositions,
            positions: [],
          };
          if (lockPositions) {
            ensure(numKeys * 12, `action ${actionIndex} locked positions`);
            for (let keyIndex = 0; keyIndex < numKeys; keyIndex++) {
              action.positions!.push({ x: readF32(), y: readF32(), z: readF32() });
            }
          }
          bmd.actions.push(action);
        }

        for (let boneIndex = 0; boneIndex < boneCount; boneIndex++) {
          const isDummy = readU8() > 0;
          if (isDummy) {
            bmd.bones.push({ name: `dummy_${boneIndex}`, parent: -1, isDummy: true, matrixes: [] });
            continue;
          }

          const boneName = readString(32, `bone ${boneIndex} name`);
          const parent = readS16();
          if (parent < -1 || parent >= boneCount) {
            throw new Error(`Invalid parent index ${parent} for bone ${boneIndex}.`);
          }
          const bone: BMDTextureBone = { name: boneName, parent, isDummy: false, matrixes: [] };

          for (let actionIndex = 0; actionIndex < actionCount; actionIndex++) {
            const keys = bmd.actions[actionIndex].numAnimationKeys;
            if (keys === 0) {
              bone.matrixes.push({
                position: [{ x: 0, y: 0, z: 0 }],
                rotation: [{ x: 0, y: 0, z: 0 }],
                quaternion: [{ x: 0, y: 0, z: 0, w: 1 }],
              });
              continue;
            }

            ensure(keys * 24, `bone ${boneIndex}, action ${actionIndex} animation data`);
            if (options?.bindPoseOnly) {
              if (actionIndex === 0) {
                const position = { x: readF32(), y: readF32(), z: readF32() };
                off += (keys - 1) * 12;
                const rotation = { x: readF32(), y: readF32(), z: readF32() };
                off += (keys - 1) * 12;
                const quaternion = bmdAngleToQuaternion(rotation);
                bone.matrixes.push({
                  position: [position],
                  rotation: [rotation],
                  quaternion: [{ x: quaternion.x, y: quaternion.y, z: quaternion.z, w: quaternion.w }],
                });
              } else {
                off += keys * 24;
              }
              continue;
            }

            const matrix: BMDBoneMatrix = { position: [], rotation: [], quaternion: [] };
            for (let keyIndex = 0; keyIndex < keys; keyIndex++) {
              matrix.position.push({ x: readF32(), y: readF32(), z: readF32() });
            }
            for (let keyIndex = 0; keyIndex < keys; keyIndex++) {
              matrix.rotation.push({ x: readF32(), y: readF32(), z: readF32() });
            }
            matrix.rotation.forEach(rotation => {
              const quaternion = bmdAngleToQuaternion(rotation);
              matrix.quaternion.push({ x: quaternion.x, y: quaternion.y, z: quaternion.z, w: quaternion.w });
            });
            bone.matrixes.push(matrix);
          }

          bmd.bones.push(bone);
        }

        return bmd;
    }

  


/** Reads a null-terminated ASCII string from a DataView */
private readStringFromDataView(view: DataView, offset: number, length: number): string {
  if (offset + length > view.byteLength) {
    console.warn(`Cannot read string at offset ${offset}: would exceed buffer bounds`);
    return '';
  }
  const bytes   = new Uint8Array(view.buffer, view.byteOffset + offset, length);
  const zeroPos = bytes.indexOf(0);
  return new TextDecoder('ascii').decode(
    zeroPos !== -1 ? bytes.subarray(0, zeroPos) : bytes
  );
}

    private extractGeometry(bmdMesh: BMDTextureMesh, boneIndexOffset: number = 0) {
        const positions: number[] = [];
        const normals: number[] = [];
        const uvs: number[] = [];
        const skinIndices: number[] = [];
        const skinWeights: number[] = [];

        const pushSafe = (vIdx: number, nIdx: number, tIdx: number) => {
            if (vIdx < 0 || vIdx >= bmdMesh.vertices.length ||
                nIdx < 0 || nIdx >= bmdMesh.normals.length ||
                tIdx < 0 || tIdx >= bmdMesh.texCoords.length) {
                return false;
            }
            const v = bmdMesh.vertices[vIdx];
            const n = bmdMesh.normals[nIdx];
            const t = bmdMesh.texCoords[tIdx];

            positions.push(v.position.x, v.position.y, v.position.z);
            normals.push(n.normal.x, n.normal.y, n.normal.z);
            uvs.push(t.u, t.v);

            skinIndices.push(v.node + boneIndexOffset, 0, 0, 0);
            skinWeights.push(1, 0, 0, 0);
            return true;
        };

        for (const tri of bmdMesh.triangles) {
            const v = tri.vertexIndex;
            const n = tri.normalIndex;
            const t = tri.texCoordIndex;

            pushSafe(v[0], n[0], t[0]);
            pushSafe(v[2], n[2], t[2]);
            pushSafe(v[1], n[1], t[1]);

            if (tri.polygon === 4) {
                pushSafe(v[0], n[0], t[0]);
                pushSafe(v[2], n[2], t[2]);
                pushSafe(v[3], n[3], t[3]);
            }
        }
        return { positions, normals, uvs, skinIndices, skinWeights };
    }
    
    /** Create Three.js animation clips from parsed BMD data and skeleton bones */
    public createAnimations(bmd: BMD, bones: THREE.Bone[]): THREE.AnimationClip[] {
        const clips: THREE.AnimationClip[] = [];
        const FPS = 24;

        for (let a = 0; a < bmd.actions.length; a++) {
            const action = bmd.actions[a];
            if (action.numAnimationKeys <= 1) continue;

            const duration = (action.numAnimationKeys - 1) / FPS;
            const tracks: THREE.KeyframeTrack[] = [];

            for (let b = 0; b < bmd.bones.length; b++) {
                const bone = bones[b];
                if (!bone) continue;
                const bmdBone = bmd.bones[b];
                if (bmdBone.isDummy || !bmdBone.matrixes[a]) continue;

                const matrix = bmdBone.matrixes[a];
                const times: number[] = [];
                const positions: number[] = [];
                const quats: number[] = [];

                for (let k = 0; k < action.numAnimationKeys; k++) {
                    times.push(k / FPS);
                    const p = matrix.position[k];
                    const q = matrix.quaternion[k];
                    
                    positions.push(p.x, p.y, p.z);
                    quats.push(q.x, q.y, q.z, q.w);
                }
                tracks.push(new THREE.VectorKeyframeTrack(`${bone.name}.position`, times, positions));
                tracks.push(new THREE.QuaternionKeyframeTrack(`${bone.name}.quaternion`, times, quats));
            }

            if (tracks.length) {
                const clip = new THREE.AnimationClip(`action_${a}`, duration, tracks);
                clip.userData = { numAnimationKeys: action.numAnimationKeys }; // Store numAnimationKeys here
                clips.push(clip);
            }
        }
        return clips;
    }

    private readString(view: DataView, offset: number, length: number): string {
        if (offset + length > view.byteLength) {
            console.warn(`Cannot read string at offset ${offset}: would exceed buffer bounds`);
            return '';
        }
        
        const bytes = new Uint8Array(view.buffer, offset, length);
        const nullPos = bytes.indexOf(0);
        const slice = nullPos !== -1 ? bytes.slice(0, nullPos) : bytes;
        return new TextDecoder('ascii', { fatal: false }).decode(slice);
    }
}