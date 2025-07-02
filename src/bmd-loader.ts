// src/bmd-loader.ts

import * as THREE from 'three';
import {
    BMD, BMDTextureMesh, BMDTexCoord, BMDTextureNormal,
    BMDTextureVertex, BMDTriangle, BMDTextureAction,
    BMDTextureBone, BMDBoneMatrix, Vector3 as BMDVector3
} from './types';
import { decodeTga } from '@lunapaint/tga-codec';
import { createLea256EcbDecrypt } from './crypto/lea256';
import { readStructArray, StructLayout } from './BinaryStruct';

//----------------------------------------------------------
//  Definicje schematów struktur
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

function decryptFile(enc: Uint8Array): Uint8Array {
  const MAP_XOR_KEY = new Uint8Array([0xD1, 0x73, 0x52, 0xF6, 0xD2, 0x9A, 0xCB, 0x27,
                                      0x3E, 0xAF, 0x59, 0x31, 0x37, 0xB3, 0xE7, 0xA2]);
  const out = new Uint8Array(enc.length);
  let key = 0x5E;
  for (let i = 0; i < enc.length; i++) {
    out[i] = (enc[i] ^ MAP_XOR_KEY[i & 15]) - key;
    key = (enc[i] + 0x3D) & 0xFF;
  }
  return out;
}

function decryptLea(enc: Uint8Array): Uint8Array {
  return leaDecrypt(enc);
}

//----------------------------------------------------------
//  Helpers – TGA → dataURL
//----------------------------------------------------------
export async function convertTgaToDataUrl(tgaBuffer: ArrayBuffer): Promise<string> {
    // 1️⃣  await the promise
    const tga = await decodeTga(new Uint8Array(tgaBuffer));
  
    // 2️⃣  grab data from tga.image
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
//  Helpers – Kwaterniony
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
//  Pomocnicze funkcje do bezpiecznego odczytu
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
        console.groupCollapsed('%cBMDLoader.load', 'color:lime;font-weight:bold');
        console.time('BMDLoader.load total');

        const bmd = this.parse(bmdBuffer);
        console.log('Parsed BMD:', bmd);

        const requiredTextures = [...new Set(bmd.meshes.map(m => m.texturePath))];
        console.log('Required textures:', requiredTextures);
        
        const group = new THREE.Group();
        group.name  = bmd.name;

        const bones: THREE.Bone[] = [];
        bmd.bones.forEach(bmdBone => {
            const bone = new THREE.Bone();
            bone.name = bmdBone.name;
            bones.push(bone);
        });

        const rootBones: THREE.Bone[] = [];
        bones.forEach((bone, i) => {
            const parentIdx = bmd.bones[i].parent;
            if (parentIdx >= 0 && parentIdx < bones.length) {
                bones[parentIdx].add(bone);
            } else {
                rootBones.push(bone);
            }
        });
        rootBones.forEach(rootBone => group.add(rootBone));

        const skeleton = new THREE.Skeleton(bones);

        bmd.meshes.forEach(bmdMesh => {
            const geometry = new THREE.BufferGeometry();
            
            const material = new THREE.MeshPhongMaterial({
                color: 0xcccccc,
                side: THREE.DoubleSide,
                transparent: true,
                alphaTest: 0.1,
                premultipliedAlpha: true
            });

            const { positions, normals, uvs, skinIndices, skinWeights } = this.extractGeometry(bmdMesh);

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
            geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
            geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
            geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
            
            const skinnedMesh = new THREE.SkinnedMesh(geometry, material);
            skinnedMesh.userData.texturePath = bmdMesh.texturePath;
            skinnedMesh.bind(skeleton);
            group.add(skinnedMesh);
        });

        bmd.bones.forEach((bmdBone, i) => {
            if (bmdBone.isDummy || !bmdBone.matrixes?.length) return;
          
            const bind = bmdBone.matrixes[0];          // klatka 0, action 0
            const p    = bind.position[0] ?? { x:0,y:0,z:0 };
            const q    = bind.quaternion[0] ?? { x:0,y:0,z:0,w:1 };
          
            const bone = bones[i];
            bone.position.set(p.x, p.y, p.z);
            bone.quaternion.set(q.x, q.y, q.z, q.w);
          });

        const animations = this.createAnimations(bmd, bones);
        if (animations.length > 0) {
            group.animations = animations;
        }
        
        group.rotation.x = -Math.PI / 2;

        console.timeEnd('BMDLoader.load total');
        console.groupEnd();

        return { group, requiredTextures };
    }

    
    /** Parsuje bufor BMD i zwraca obiekt sceny */
    private parse(buffer: ArrayBuffer): BMD {
      console.groupCollapsed('parse()');
      console.log(`Buffer size: ${buffer.byteLength} bytes`);

      /* ── robocza kopia + widok ─────────────────────────── */
      const work = buffer.slice(0);
      const view = new DataView(work);

      /* ── nagłówek pliku ───────────────────────────────── */
      const id = new TextDecoder('ascii').decode(work.slice(0, 3));
      if (id !== 'BMD') throw new Error('Invalid BMD header');

      const version = view.getUint8(3);
      console.log(`BMD version: ${version}`);

      /* ── odszyfrowanie v12 / v15 ──────────────────────── */
      let dataOffset = 4;
      if (version === 12 || version === 15) {
        const size = view.getInt32(4, true);
        const enc  = new Uint8Array(work, 8, size);
        const dec  = version === 12 ? decryptFile(enc) : decryptLea(enc);
        new Uint8Array(work, 8, size).set(dec);          // plaintext na miejscu
        dataOffset = 8;                                  // header(3)+ver(1)+size(4)
        console.log(`Decrypted ${size} B @8`);
      }

      /* ── małe pomocnicze czytniki ─────────────────────── */
      let off = dataOffset;
      const readS16 = () => { const v = view.getInt16 (off, true); off += 2; return v; };
      const readU16 = () => { const v = view.getUint16(off, true); off += 2; return v; };
      const readF32 = () => { const v = view.getFloat32(off, true); off += 4; return v; };

      /* ── nagłówek BMD ─────────────────────────────────── */
      const name        = this.readStringFromDataView(view, off, 32); off += 32;
      const meshCount   = readU16();
      const boneCount   = readU16();
      const actionCount = readU16();
      console.log(`Counts – Meshes:${meshCount}, Bones:${boneCount}, Actions:${actionCount}`);

      const bmd: BMD = { version, name, meshes: [], bones: [], actions: [] };

      /* ── MESHE ─────────────────────────────────────────── */
      for (let m = 0; m < meshCount; m++) {
        console.log(`Reading mesh ${m + 1}/${meshCount} at offset ${off}`);

        const numVertices  = readS16();
        const numNormals   = readS16();
        const numTexCoords = readS16();
        const numTriangles = readS16();
        const textureIndex = readS16();

        console.log(`Mesh ${m}: v=${numVertices}, n=${numNormals}, t=${numTexCoords}, tri=${numTriangles}`);

        const vertsRes = readStructArray<{node:number,x:number,y:number,z:number}>(
          view, BMDTextureVertexLayout, off, numVertices);
        if (!vertsRes) {
            console.error(`Failed to read vertices for mesh ${m}`);
            continue; // Przejdź do następnego mesha
        }
        off = vertsRes.newOffset;
        const vertices = vertsRes.data.map(v => ({ node:v.node, position:{ x:v.x, y:v.y, z:v.z } }));

        const normsRes = readStructArray<{node:number,nx:number,ny:number,nz:number,bindVertex:number}>(
          view, BMDTextureNormalLayout, off, numNormals);
        if (!normsRes) {
            console.error(`Failed to read normals for mesh ${m}`);
            continue; // Przejdź do następnego mesha
        }
        off = normsRes.newOffset;
        const normals = normsRes.data.map(n => ({
          node:n.node,
          normal:{ x:n.nx, y:n.ny, z:n.nz },
          bindVertex:n.bindVertex
        }));

        const texRes = readStructArray<BMDTexCoord>(view, BMDTexCoordLayout, off, numTexCoords);
        if (!texRes) {
            console.error(`Failed to read texCoords for mesh ${m}`);
            continue; // Przejdź do następnego mesha
        }
        off = texRes.newOffset;
        const texCoords = texRes.data;

        const triangles: BMDTriangle[] = [];
        const triStride = 64;
        for (let t = 0; t < numTriangles; t++) {
          const start = off;
          triangles.push({
            polygon      : view.getUint8(start),
            vertexIndex  : [0,1,2,3].map(i => view.getInt16(start +  2 + i*2, true)),
            normalIndex  : [0,1,2,3].map(i => view.getInt16(start + 10 + i*2, true)),
            texCoordIndex: [0,1,2,3].map(i => view.getInt16(start + 18 + i*2, true)),
            lightMapCoord  : [],
            lightMapIndexes: 0
          });
          off += triStride;
        }

        const texturePath = this.readStringFromDataView(view, off, 32); off += 32;

        bmd.meshes.push({
          texture:textureIndex,
          numVertices, numNormals, numTexCoords, numTriangles,
          vertices, normals, texCoords, triangles, texturePath
        });
      }

      /* ── ACTION HEADERS ───────────────────────────────── */
      for (let a = 0; a < actionCount; a++) {
        const numKeys  = readS16();
        const lockPos  = view.getUint8(off) > 0; off += 1;
        bmd.actions.push({ numAnimationKeys:numKeys, lockPositions:lockPos, positions:[] });

        /* jeżeli lockPositions==1: na poziomie akcji jest dodatkowy tor pozycji */
        if (lockPos) {
          for (let k = 0; k < numKeys; k++) {
            const pos = { x: readF32(), y: readF32(), z: readF32() };
            bmd.actions[a].positions!.push(pos);
          }
        }
      }

      /* ── BONES ────────────────────────────────────────── */
      for (let b = 0; b < boneCount; b++) {
        const isDummy = view.getUint8(off) > 0; off += 1;

        if (isDummy) {
          bmd.bones.push({ name:`dummy_${b}`, parent:-1, isDummy:true, matrixes:[] });
          continue;
        }

        const boneName = this.readStringFromDataView(view, off, 32); off += 32;
        const parent   = readS16();
        const bone: BMDTextureBone = { name:boneName, parent, isDummy:false, matrixes:[] };

        /* ---- ścieżki animacji dla każdej akcji ----------- */
        for (let a = 0; a < actionCount; a++) {
          const act   = bmd.actions[a];
          const keys  = act.numAnimationKeys;

          /* brak klatek → nic nie czytamy z bufora */
          if (keys === 0) {
            bone.matrixes.push({
              position  : [{ x:0, y:0, z:0 }],
              rotation  : [{ x:0, y:0, z:0 }],
              quaternion: [{ x:0, y:0, z:0, w:1 }]
            });
            continue;
          }

          const mat: BMDBoneMatrix = { position:[], rotation:[], quaternion:[] };

          /* -- POZYCJE (zawsze obecne, v10/v12/v15) -------- */
          for (let k = 0; k < keys; k++) {
            mat.position.push({ x: readF32(), y: readF32(), z: readF32() });
          }

          /* -- ROTACJE ------------------------------------- */
          for (let k = 0; k < keys; k++) {
            mat.rotation.push({ x: readF32(), y: readF32(), z: readF32() });
          }

          /* -- QUATERNIONY -------------------------------- */
          mat.rotation.forEach(r => {
            const q = bmdAngleToQuaternion(r);
            mat.quaternion.push({ x:q.x, y:q.y, z:q.z, w:q.w });
          });

          bone.matrixes.push(mat);
        }

        bmd.bones.push(bone);
      }

      console.log(`Parse completed. Final offset: ${off}/${work.byteLength}`);
      console.groupEnd();
      return bmd;
    }

  


/** Czyta łańcuch ASCII (0-terminated) z DataView */
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

    private extractGeometry(bmdMesh: BMDTextureMesh) {
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
            uvs.push(t.u, 1 - t.v);

            skinIndices.push(v.node, 0, 0, 0);
            skinWeights.push(1, 0, 0, 0);
            return true;
        };

        for (const tri of bmdMesh.triangles) {
            const v = tri.vertexIndex;
            const n = tri.normalIndex;
            const t = tri.texCoordIndex;

            pushSafe(v[0], n[0], t[0]);
            pushSafe(v[1], n[1], t[1]);
            pushSafe(v[2], n[2], t[2]);

            if (tri.polygon === 4) {
                pushSafe(v[0], n[0], t[0]);
                pushSafe(v[2], n[2], t[2]);
                pushSafe(v[3], n[3], t[3]);
            }
        }
        return { positions, normals, uvs, skinIndices, skinWeights };
    }
    
    private createAnimations(bmd: BMD, bones: THREE.Bone[]): THREE.AnimationClip[] {
        const clips: THREE.AnimationClip[] = [];
        const FPS = 24;

        for (let a = 0; a < bmd.actions.length; a++) {
            const action = bmd.actions[a];
            if (action.numAnimationKeys <= 1) continue;

            const duration = (action.numAnimationKeys - 1) / FPS;
            const tracks: THREE.KeyframeTrack[] = [];

            for (let b = 0; b < bmd.bones.length; b++) {
                const bone = bones[b];
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