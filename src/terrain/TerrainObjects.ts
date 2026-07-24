import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { BMDLoader, convertTgaToDataUrl } from '../bmd-loader';
import { convertOzjToDataUrl } from '../ozj-loader';
import type { SelectedWorldObjectRef } from '../explorer-types';
import { DEFAULT_ANIMATION_PLAYBACK_SPEED } from '../animation-settings';
import {
    bakeMeshGeometryToRootSpace,
    updateBakedMeshGeometryToRootSpace,
} from '../utils/SkinnedMeshBaker';
import { createWorldObjectId } from './TerrainExplorerUtils';
import {
    getTerrainObjectInstanceChunkKey,
    shouldChunkTerrainObjectInstances,
    type TerrainAnimatedInstancingMode,
} from './TerrainObjectInstancing';
import {
    canUseInstancedAnimatedObjects,
    canUseInstancedStaticObjects,
} from './TerrainAnimationUtils';
import type { OBJData, MapObject } from './formats/OBJReader';
import { TERRAIN_WORLD_SIZE } from './TerrainMesh';
import { logger } from '../utils/Logger';
import {
    applyBlendModeToMaterial,
    detectBlendModeFromTexture,
    type BlendHeuristicResult,
} from '../utils/TextureBlendHeuristics';
import { selectTerrainObjectTextureCandidates } from './TerrainObjectTextureSelection';

export interface TerrainObjectDefinition {
    type: number;
    mapNumber: number;
    modelName: string | null;
    modelFileKey: string | null;
    modelFile: File | null;
}

export interface TerrainObjectSelectionRecord {
    selection: SelectedWorldObjectRef;
    modelFile: File | null;
    approximateRadius: number;
    baseOrientation: THREE.Quaternion;
    object3D: THREE.Object3D | null;
    instancedMesh: THREE.InstancedMesh | null;
    instanceId: number | null;
}

export interface TerrainObjectLoadResult {
    group: THREE.Group;
    records: TerrainObjectSelectionRecord[];
    animatedInstances: TerrainAnimatedObjectInstance[];
}

export interface TerrainObjectLoadOptions {
    animatedInstancingMode?: TerrainAnimatedInstancingMode;
}

export interface TerrainAnimatedObjectInstance {
    object3D: THREE.Object3D;
    mixer: THREE.AnimationMixer | null;
    worldPosition: THREE.Vector3;
    ignoreDistanceCulling?: boolean;
    isVisible?: () => boolean;
    update?: (deltaSeconds: number) => void;
}

// World 1 object type-to-name mapping.
// Source: MU client object registry (Lorencia object table).
const WORLD1_OBJECT_NAME_BY_TYPE: Record<number, string> = {
    0: 'Tree01',
    1: 'Tree02',
    2: 'Tree03',
    3: 'Tree04',
    4: 'Tree05',
    5: 'Tree06',
    6: 'Tree07',
    7: 'Tree08',
    8: 'Tree09',
    9: 'Tree10',
    10: 'Tree11',
    11: 'Tree12',
    12: 'Tree13',
    20: 'Grass01',
    21: 'Grass02',
    22: 'Grass03',
    23: 'Grass04',
    24: 'Grass05',
    25: 'Grass06',
    26: 'Grass07',
    27: 'Grass08',
    30: 'Stone01',
    31: 'Stone02',
    32: 'Stone03',
    33: 'Stone04',
    34: 'Stone05',
    40: 'StoneStatue01',
    41: 'StoneStatue02',
    42: 'StoneStatue03',
    43: 'SteelStatue01',
    44: 'Tomb01',
    45: 'Tomb02',
    46: 'Tomb03',
    50: 'FireLight01',
    51: 'FireLight02',
    52: 'BonFire01',
    55: 'DoungeonGate01',
    56: 'MerchantAnimal01',
    57: 'MerchantAnimal02',
    58: 'TreasureDrum01',
    59: 'TreasureChest01',
    60: 'Shop01',
    65: 'SteelWall01',
    66: 'SteelWall02',
    67: 'SteelWall03',
    68: 'SteelDoor01',
    69: 'StoneWall01',
    70: 'StoneWall02',
    71: 'StoneWall03',
    72: 'StoneWall04',
    73: 'StoneWall05',
    74: 'StoneWall06',
    75: 'StoneMuWall01',
    76: 'StoneMuWall02',
    77: 'StoneMuWall03',
    78: 'StoneMuWall04',
    80: 'Bridge01',
    81: 'Fence01',
    82: 'Fence02',
    83: 'Fence03',
    84: 'Fence04',
    85: 'BridgeStone01',
    90: 'StreetLight01',
    91: 'Cannon01',
    92: 'Cannon02',
    93: 'Cannon03',
    95: 'Curtain01',
    96: 'Sign01',
    97: 'Sign02',
    98: 'Carriage01',
    99: 'Carriage02',
    100: 'Carriage03',
    101: 'Carriage04',
    102: 'Straw01',
    103: 'Straw02',
    105: 'Waterspout01',
    106: 'Well01',
    107: 'Well02',
    108: 'Well03',
    109: 'Well04',
    110: 'Hanging01',
    111: 'Stair01',
    115: 'House01',
    116: 'House02',
    117: 'House03',
    118: 'House04',
    119: 'House05',
    120: 'Tent01',
    121: 'HouseWall01',
    122: 'HouseWall02',
    123: 'HouseWall03',
    124: 'HouseWall04',
    125: 'HouseWall05',
    126: 'HouseWall06',
    127: 'HouseEtc01',
    128: 'HouseEtc02',
    129: 'HouseEtc03',
    130: 'Light01',
    131: 'Light02',
    132: 'Light03',
    133: 'PoseBox01',
    140: 'Forniture01',
    141: 'Forniture02',
    142: 'Forniture03',
    143: 'Forniture04',
    144: 'Forniture05',
    145: 'Forniture06',
    146: 'Forniture07',
    150: 'Candle01',
    151: 'Beer01',
    152: 'Beer02',
    153: 'Beer03',
};

const WORLD_OBJECT_NAME_BY_TYPE: Record<number, Record<number, string>> = {
    1: WORLD1_OBJECT_NAME_BY_TYPE,
};

const OBJECT_NAME_ALIASES: Record<string, string[]> = {
    // Many clients renamed "Forniture" -> "Furniture".
    forniture01: ['furniture01'],
    forniture02: ['furniture02'],
    forniture03: ['furniture03'],
    forniture04: ['furniture04'],
    forniture05: ['furniture05'],
    forniture06: ['furniture06'],
    forniture07: ['furniture07'],
    // Some packs use Ship01 model where old table references Shop01.
    shop01: ['ship01'],
};

const OBJECT_ANIMATED_INSTANCE_THRESHOLD = 8;

export async function loadTerrainObjects(
    objData: OBJData,
    files: Map<string, File>,
    mapNumber: number,
    onProgress?: (loaded: number, total: number) => void,
    options: TerrainObjectLoadOptions = {},
): Promise<TerrainObjectLoadResult> {
    const group = new THREE.Group();
    group.name = 'terrain_objects';
    group.matrixAutoUpdate = false;
    group.updateMatrix();

    const bmdLoader = new BMDLoader();
    const textureLoader = new THREE.TextureLoader();
    const textureCache = new Map<string, THREE.Texture>();
    const blendCache = new Map<string, BlendHeuristicResult>();
    const records: TerrainObjectSelectionRecord[] = [];
    const animatedInstances: TerrainAnimatedObjectInstance[] = [];
    const animatedInstancingMode = options.animatedInstancingMode ?? 'dynamic';

    // Group objects by type for instancing
    const byType = new Map<number, MapObject[]>();
    for (const obj of objData.objects) {
        const list = byType.get(obj.type) || [];
        list.push(obj);
        byType.set(obj.type, list);
    }

    logger.groupDebug('Terrain objects loading');
    logger.debug(`OBJ data: ${objData.objects.length} objects, ${byType.size} unique types`);
    logger.debug('Types:', [...byType.keys()].sort((a, b) => a - b).join(', '));

    let loaded = 0;
    const total = byType.size;
    let foundCount = 0;
    let missingCount = 0;

    // Load each unique object type once
    for (const [type, instances] of byType) {
        const definition = resolveTerrainObjectDefinition(files, type, mapNumber);
        if (!definition.modelFile) {
            console.warn(`  [type ${type}] missing ${buildMissingObjectHint(type, mapNumber)}`);
            missingCount++;
            loaded++;
            onProgress?.(loaded, total);
            continue;
        }
        foundCount++;

        try {
            const buf = await definition.modelFile.arrayBuffer();
            const { group: template, requiredTextures } = await bmdLoader.load(buf);
            const baseOrientation = template.quaternion.clone();
            const approximateRadius = getTemplateApproximateRadius(template);
            // Try to load textures for this object
            for (const texName of requiredTextures) {
                await tryApplyTexture(template, texName, files, textureLoader, textureCache, blendCache);
            }

            // Place instances. Prefer GPU instancing. Static skinned BMDs are
            // baked once; repeated animated BMDs are baked once per frame/type.
            const instanced = template.animations.length > 0
                ? addInstancedAnimatedObjects(
                    group,
                    template,
                    instances,
                    baseOrientation,
                    definition,
                    approximateRadius,
                    records,
                    animatedInstances,
                    animatedInstancingMode,
                )
                : addInstancedStaticObjects(
                    group,
                    template,
                    instances,
                    baseOrientation,
                    definition,
                    approximateRadius,
                    records,
                );

            if (!instanced) {
                for (const inst of instances) {
                    // Skinned meshes must be cloned with SkeletonUtils to avoid
                    // sharing one skeleton across all instances.
                    const clone = SkeletonUtils.clone(template);
                    const worldPosition = mapObjectToWorldPosition(inst);
                    clone.position.copy(worldPosition);
                    // Reference clients apply map-object rotation on top of
                    // model base orientation. Keep template orientation and
                    // multiply by OBJ rotation quaternion.
                    const objQuat = mapObjectAngleToQuaternion(inst.angle);
                    clone.quaternion.copy(objQuat.multiply(baseOrientation));
                    clone.scale.setScalar(inst.scale);
                    clone.animations = template.animations;
                    clone.updateMatrix();
                    clone.matrixAutoUpdate = false;
                    clone.updateMatrixWorld(true);

                    // Pre-compute world-space bounding sphere for frustum culling.
                    const box = new THREE.Box3().setFromObject(clone);
                    const bs = new THREE.Sphere();
                    box.getBoundingSphere(bs);
                    clone.userData.cullBoundingSphere = bs;

                    group.add(clone);

                    const record = createSelectionRecord(
                        definition,
                        inst,
                        worldPosition,
                        approximateRadius,
                        baseOrientation,
                        clone,
                        null,
                        null,
                    );
                    clone.userData.terrainObjectRecord = record;
                    clone.traverse(obj => {
                        if ((obj as THREE.Mesh).isMesh) {
                            obj.userData.terrainObjectRecord = record;
                        }
                    });
                    records.push(record);

                    const defaultClip = clone.animations[0];
                    if (defaultClip) {
                        const mixer = new THREE.AnimationMixer(clone);
                        const action = mixer.clipAction(defaultClip);
                        action.setEffectiveTimeScale(DEFAULT_ANIMATION_PLAYBACK_SPEED);
                        action.reset().play();
                        animatedInstances.push({
                            object3D: clone,
                            mixer,
                            worldPosition: worldPosition.clone(),
                        });
                    }
                }
            }
        } catch (e) {
            console.warn(`Failed to load object type ${type}:`, e);
        }

        loaded++;
        onProgress?.(loaded, total);
    }

    logger.debug(`BMDs found: ${foundCount}, missing: ${missingCount}`);
    logger.groupEnd();

    return { group, records, animatedInstances };
}

export function resolveTerrainObjectDefinition(
    files: Map<string, File>,
    type: number,
    mapNumber: number,
): TerrainObjectDefinition {
    // Priority 1: canonical numeric file name used by many clients.
    const fileIdx = type + 1;
    const padded = fileIdx.toString().padStart(2, '0');
    const numericCandidates = [`Object${padded}`, `Object${fileIdx}`];
    const numericFile = findObjectBMDCandidate(files, mapNumber, numericCandidates);
    if (numericFile) {
        return {
            type,
            mapNumber,
            modelName: numericFile.baseName,
            modelFileKey: numericFile.key,
            modelFile: numericFile.file,
        };
    }

    // Priority 2: world-specific object table mapping (e.g. Lorencia names).
    const mappedName = WORLD_OBJECT_NAME_BY_TYPE[mapNumber]?.[type];
    if (mappedName) {
        const aliases = OBJECT_NAME_ALIASES[mappedName.toLowerCase()] || [];
        const mappedFile = findObjectBMDCandidate(files, mapNumber, [mappedName, ...aliases]);
        if (mappedFile) {
            return {
                type,
                mapNumber,
                modelName: mappedFile.baseName || mappedName,
                modelFileKey: mappedFile.key,
                modelFile: mappedFile.file,
            };
        }
    }

    // Priority 3: global fallback for ObjectNN names outside expected folder.
    for (const [key, file] of files) {
        const lower = key.toLowerCase();
        if (lower.endsWith(`/object${padded}.bmd`) || lower.endsWith(`/object${fileIdx}.bmd`)) {
            const baseName = lower.split('/').pop()!.replace(/\.bmd$/i, '');
            return {
                type,
                mapNumber,
                modelName: baseName,
                modelFileKey: key,
                modelFile: file,
            };
        }
    }

    return {
        type,
        mapNumber,
        modelName: mappedName || null,
        modelFileKey: null,
        modelFile: null,
    };
}

function findObjectBMDCandidate(
    files: Map<string, File>,
    mapNumber: number,
    candidates: string[],
): { key: string; file: File; baseName: string } | null {
    const folder = `object${mapNumber}/`;
    const normalizedCandidates = new Set(candidates.map(normalizeObjectBaseName));

    for (const [key, file] of files) {
        const lower = key.toLowerCase();
        if (!lower.startsWith(folder) || !lower.endsWith('.bmd')) {
            continue;
        }

        const baseName = lower.split('/').pop()!.replace(/\.bmd$/i, '');
        if (normalizedCandidates.has(normalizeObjectBaseName(baseName))) {
            return { key, file, baseName };
        }
    }

    return null;
}

function normalizeObjectBaseName(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function buildMissingObjectHint(type: number, mapNumber: number): string {
    const fileIdx = type + 1;
    const padded = fileIdx.toString().padStart(2, '0');
    const mappedName = WORLD_OBJECT_NAME_BY_TYPE[mapNumber]?.[type];
    if (mappedName) {
        return `Object${mapNumber}/${mappedName}.bmd`;
    }
    return `Object${mapNumber}/Object${padded}.bmd`;
}

function getTemplateApproximateRadius(template: THREE.Object3D): number {
    const box = new THREE.Box3().setFromObject(template);
    if (!Number.isFinite(box.min.x) || !Number.isFinite(box.max.x)) {
        return 150;
    }
    const size = box.getSize(new THREE.Vector3());
    return Math.max(120, Math.max(size.x, size.y, size.z) * 0.45);
}

function createSelectionRecord(
    definition: TerrainObjectDefinition,
    instance: MapObject,
    worldPosition: THREE.Vector3,
    approximateRadius: number,
    baseOrientation: THREE.Quaternion,
    object3D: THREE.Object3D | null,
    instancedMesh: THREE.InstancedMesh | null,
    instanceId: number | null,
): TerrainObjectSelectionRecord {
    const modelName = definition.modelName;
    const displayName = modelName ? `${modelName} · type ${definition.type}` : `Type ${definition.type}`;
    const objectId = createWorldObjectId(definition.mapNumber, definition.type, {
        x: worldPosition.x,
        z: worldPosition.z,
    });

    return {
        selection: {
            objectId,
            worldNumber: definition.mapNumber,
            type: definition.type,
            modelName,
            modelFileKey: definition.modelFileKey,
            displayName,
            position: {
                x: worldPosition.x,
                y: worldPosition.y,
                z: worldPosition.z,
            },
            rotation: {
                x: instance.angle.x,
                y: instance.angle.y,
                z: instance.angle.z,
            },
            scale: instance.scale,
        },
        modelFile: definition.modelFile,
        approximateRadius: approximateRadius * Math.max(instance.scale, 0.001),
        baseOrientation: baseOrientation.clone(),
        object3D,
        instancedMesh,
        instanceId,
    };
}

function mapObjectToWorldPosition(inst: MapObject): THREE.Vector3 {
    return new THREE.Vector3(inst.position.x, inst.position.z, TERRAIN_WORLD_SIZE - inst.position.y);
}

export function mapObjectAngleToQuaternion(angle: { x: number; y: number; z: number }): THREE.Quaternion {
    const qMu = angleQuaternion(
        THREE.MathUtils.degToRad(angle.x),
        THREE.MathUtils.degToRad(angle.y),
        THREE.MathUtils.degToRad(angle.z),
    );

    // MU basis (X,Y,Z-up) -> Three basis (X,Y-up,Z) as:
    // X' =  X
    // Y' =  Z
    // Z' = -Y
    const basis = MU_TO_THREE_BASIS;
    const basisInv = MU_TO_THREE_BASIS_INV;
    const muMatrix = new THREE.Matrix4().makeRotationFromQuaternion(qMu);
    const threeMatrix = new THREE.Matrix4()
        .copy(basis)
        .multiply(muMatrix)
        .multiply(basisInv);

    return new THREE.Quaternion().setFromRotationMatrix(threeMatrix).normalize();
}

export function mapObjectAngleToVisualQuaternion(
    angle: { x: number; y: number; z: number },
    baseOrientation: THREE.Quaternion,
): THREE.Quaternion {
    return mapObjectAngleToQuaternion(angle).multiply(baseOrientation);
}

export function visualQuaternionToMapObjectAngle(
    visualQuaternion: THREE.Quaternion,
    baseOrientation: THREE.Quaternion,
): { x: number; y: number; z: number } {
    const objectQuaternion = visualQuaternion.clone().multiply(baseOrientation.clone().invert()).normalize();
    const threeMatrix = new THREE.Matrix4().makeRotationFromQuaternion(objectQuaternion);
    const muMatrix = new THREE.Matrix4()
        .copy(MU_TO_THREE_BASIS_INV)
        .multiply(threeMatrix)
        .multiply(MU_TO_THREE_BASIS);
    const euler = new THREE.Euler().setFromRotationMatrix(muMatrix, 'XYZ');

    return {
        x: normalizeAngleDegrees(THREE.MathUtils.radToDeg(euler.x)),
        y: normalizeAngleDegrees(THREE.MathUtils.radToDeg(euler.y)),
        z: normalizeAngleDegrees(THREE.MathUtils.radToDeg(euler.z)),
    };
}

function angleQuaternion(x: number, y: number, z: number): THREE.Quaternion {
    const halfX = x * 0.5;
    const halfY = y * 0.5;
    const halfZ = z * 0.5;
    const sinX = Math.sin(halfX);
    const cosX = Math.cos(halfX);
    const sinY = Math.sin(halfY);
    const cosY = Math.cos(halfY);
    const sinZ = Math.sin(halfZ);
    const cosZ = Math.cos(halfZ);

    const qw = cosX * cosY * cosZ + sinX * sinY * sinZ;
    const qx = sinX * cosY * cosZ - cosX * sinY * sinZ;
    const qy = cosX * sinY * cosZ + sinX * cosY * sinZ;
    const qz = cosX * cosY * sinZ - sinX * sinY * cosZ;

    return new THREE.Quaternion(qx, qy, qz, qw).normalize();
}

const MU_TO_THREE_BASIS = new THREE.Matrix4().set(
    1, 0, 0, 0,
    0, 0, 1, 0,
    0, -1, 0, 0,
    0, 0, 0, 1,
);

const MU_TO_THREE_BASIS_INV = MU_TO_THREE_BASIS.clone().transpose();

function addInstancedStaticObjects(
    target: THREE.Group,
    template: THREE.Group,
    instances: MapObject[],
    baseOrientation: THREE.Quaternion,
    definition: TerrainObjectDefinition,
    approximateRadius: number,
    records: TerrainObjectSelectionRecord[],
): boolean {
    const templateInfo = collectTemplateMeshes(template);

    if (!canUseInstancedStaticObjects({
        meshCount: templateInfo.meshes.length,
        hasSkinnedMeshes: templateInfo.hasSkinnedMeshes,
        animationCount: template.animations.length,
    })) {
        return false;
    }

    const useChunking = shouldChunkTerrainObjectInstances(instances.length);
    const chunkedItems = createObjectInstanceChunks(instances, baseOrientation, definition, approximateRadius, useChunking);

    const meshLocalFromTemplate = new THREE.Matrix4();
    const finalMatrix = new THREE.Matrix4();
    template.updateMatrixWorld(true);
    const templateWorldInverse = new THREE.Matrix4().copy(template.matrixWorld).invert();
    for (const srcMesh of templateInfo.meshes) {
        meshLocalFromTemplate
            .copy(templateWorldInverse)
            .multiply(srcMesh.matrixWorld);

        for (const [chunkKey, chunkItems] of chunkedItems) {
            const instancedMesh = new THREE.InstancedMesh(
                srcMesh.geometry,
                srcMesh.material,
                chunkItems.length,
            );
            const baseName = srcMesh.name || 'terrain_instanced_mesh';
            instancedMesh.name = `${baseName}_${chunkKey}`;
            if (chunkKey !== 'all') {
                instancedMesh.userData.terrainObjectChunkKey = chunkKey;
            }
            instancedMesh.castShadow = srcMesh.castShadow;
            instancedMesh.receiveShadow = srcMesh.receiveShadow;
            instancedMesh.renderOrder = srcMesh.renderOrder;
            instancedMesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
            instancedMesh.matrixAutoUpdate = false;

            const chunkRecords: TerrainObjectSelectionRecord[] = [];
            for (let i = 0; i < chunkItems.length; i++) {
                finalMatrix.multiplyMatrices(chunkItems[i].matrix, meshLocalFromTemplate);
                instancedMesh.setMatrixAt(i, finalMatrix);
                chunkItems[i].record.instancedMesh = instancedMesh;
                chunkItems[i].record.instanceId = i;
                chunkRecords.push(chunkItems[i].record);
                records.push(chunkItems[i].record);
            }

            instancedMesh.userData.terrainObjectRecords = chunkRecords;
            instancedMesh.instanceMatrix.needsUpdate = true;
            instancedMesh.computeBoundingBox();
            instancedMesh.computeBoundingSphere();
            instancedMesh.updateMatrix();
            target.add(instancedMesh);
        }
    }

    return true;
}

function addInstancedAnimatedObjects(
    target: THREE.Group,
    template: THREE.Group,
    instances: MapObject[],
    baseOrientation: THREE.Quaternion,
    definition: TerrainObjectDefinition,
    approximateRadius: number,
    records: TerrainObjectSelectionRecord[],
    animatedInstances: TerrainAnimatedObjectInstance[],
    animatedInstancingMode: TerrainAnimatedInstancingMode,
): boolean {
    const templateInfo = collectTemplateMeshes(template);
    if (instances.length < OBJECT_ANIMATED_INSTANCE_THRESHOLD) {
        return false;
    }

    if (!canUseInstancedAnimatedObjects({
        meshCount: templateInfo.meshes.length,
        hasSkinnedMeshes: templateInfo.hasSkinnedMeshes,
        instanceCount: instances.length,
        animationCount: template.animations.length,
        canBakeAnimatedPose: true,
    })) {
        return false;
    }

    template.updateMatrixWorld(true);
    const templateWorldInverse = new THREE.Matrix4().copy(template.matrixWorld).invert();
    const clip = template.animations[0];
    const mixer = new THREE.AnimationMixer(template);
    const action = mixer.clipAction(clip);
    action.setEffectiveTimeScale(DEFAULT_ANIMATION_PLAYBACK_SPEED);
    action.reset().play();
    mixer.update(0);
    template.updateMatrixWorld(true);

    const useChunking = shouldChunkTerrainObjectInstances(instances.length);
    const chunkedItems = createObjectInstanceChunks(instances, baseOrientation, definition, approximateRadius, useChunking);
    const animatedMeshes: Array<{ sourceMesh: THREE.Mesh; bakedGeometry: THREE.BufferGeometry }> = [];
    const allInstancedMeshes: THREE.InstancedMesh[] = [];

    for (const srcMesh of templateInfo.meshes) {
        const bakedGeometry = bakeMeshGeometryToRootSpace(srcMesh, templateWorldInverse);
        for (const [chunkKey, chunkItems] of chunkedItems) {
            const instancedMesh = new THREE.InstancedMesh(
                bakedGeometry,
                srcMesh.material,
                chunkItems.length,
            );
            const baseName = srcMesh.name || 'terrain_animated_instanced_mesh';
            instancedMesh.name = `${baseName}_animated_${chunkKey}`;
            if (chunkKey !== 'all') {
                instancedMesh.userData.terrainObjectChunkKey = chunkKey;
            }
            instancedMesh.castShadow = srcMesh.castShadow;
            instancedMesh.receiveShadow = srcMesh.receiveShadow;
            instancedMesh.renderOrder = srcMesh.renderOrder;
            instancedMesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
            instancedMesh.matrixAutoUpdate = false;

            const chunkRecords: TerrainObjectSelectionRecord[] = [];
            for (let i = 0; i < chunkItems.length; i++) {
                instancedMesh.setMatrixAt(i, chunkItems[i].matrix);
                chunkItems[i].record.instancedMesh = instancedMesh;
                chunkItems[i].record.instanceId = i;
                chunkRecords.push(chunkItems[i].record);
                records.push(chunkItems[i].record);
            }

            instancedMesh.userData.terrainObjectRecords = chunkRecords;
            instancedMesh.instanceMatrix.needsUpdate = true;
            instancedMesh.computeBoundingBox();
            instancedMesh.computeBoundingSphere();
            instancedMesh.updateMatrix();
            target.add(instancedMesh);
            allInstancedMeshes.push(instancedMesh);
        }

        animatedMeshes.push({ sourceMesh: srcMesh, bakedGeometry });
    }

    const update = animatedInstancingMode === 'dynamic'
        ? (deltaSeconds: number) => {
            mixer.update(deltaSeconds);
            template.updateMatrixWorld(true);
            templateWorldInverse.copy(template.matrixWorld).invert();
            for (const animatedMesh of animatedMeshes) {
                updateBakedMeshGeometryToRootSpace(
                    animatedMesh.sourceMesh,
                    templateWorldInverse,
                    animatedMesh.bakedGeometry,
                    false,
                );
            }
        }
        : undefined;

    animatedInstances.push({
        object3D: allInstancedMeshes[0] ?? template,
        mixer: update ? mixer : null,
        worldPosition: getAverageInstanceWorldPosition(instances),
        ignoreDistanceCulling: true,
        isVisible: () => allInstancedMeshes.some(mesh => mesh.visible),
        update,
    });

    return true;
}

function collectTemplateMeshes(template: THREE.Object3D): { meshes: THREE.Mesh[]; hasSkinnedMeshes: boolean } {
    const meshes: THREE.Mesh[] = [];
    let hasSkinnedMeshes = false;
    template.traverse(obj => {
        const mesh = obj as THREE.Mesh;
        if (!mesh.isMesh) return;
        meshes.push(mesh);
        if ((mesh as THREE.SkinnedMesh).isSkinnedMesh) {
            hasSkinnedMeshes = true;
        }
    });
    return { meshes, hasSkinnedMeshes };
}

function createObjectInstanceChunks(
    instances: MapObject[],
    baseOrientation: THREE.Quaternion,
    definition: TerrainObjectDefinition,
    approximateRadius: number,
    useChunking: boolean,
): Map<string, Array<{ instance: MapObject; matrix: THREE.Matrix4; record: TerrainObjectSelectionRecord }>> {
    const chunkedItems = new Map<string, Array<{ instance: MapObject; matrix: THREE.Matrix4; record: TerrainObjectSelectionRecord }>>();
    const position = new THREE.Vector3();
    const scale = new THREE.Vector3();
    for (const inst of instances) {
        position.copy(mapObjectToWorldPosition(inst));
        const rotation = mapObjectAngleToQuaternion(inst.angle).multiply(baseOrientation);
        scale.setScalar(inst.scale);
        const objectMatrix = new THREE.Matrix4().compose(position, rotation, scale);
        const chunkKey = useChunking
            ? getTerrainObjectInstanceChunkKey(position.x, position.z)
            : 'all';
        const record = createSelectionRecord(
            definition,
            inst,
            position,
            approximateRadius,
            baseOrientation,
            null,
            null,
            null,
        );
        const chunk = chunkedItems.get(chunkKey);
        const item = { instance: inst, matrix: objectMatrix, record };
        if (chunk) {
            chunk.push(item);
        } else {
            chunkedItems.set(chunkKey, [item]);
        }
    }
    return chunkedItems;
}

function normalizeAngleDegrees(value: number): number {
    const normalized = ((value % 360) + 360) % 360;
    return Math.abs(normalized - 360) < 0.0001 ? 0 : normalized;
}

function getAverageInstanceWorldPosition(instances: MapObject[]): THREE.Vector3 {
    const result = new THREE.Vector3();
    if (instances.length === 0) {
        return result;
    }

    for (const instance of instances) {
        result.add(mapObjectToWorldPosition(instance));
    }
    return result.multiplyScalar(1 / instances.length);
}

async function tryApplyTexture(
    group: THREE.Group,
    texName: string,
    files: Map<string, File>,
    textureLoader: THREE.TextureLoader,
    textureCache: Map<string, THREE.Texture>,
    blendCache: Map<string, BlendHeuristicResult>,
): Promise<void> {
    const baseNameRaw = texName.split(/[\\/]/).pop()!.replace(/\.[^.]+$/, '');
    const baseName = baseNameRaw.toLowerCase();
    const cacheKey = normalizeObjectBaseName(baseName);

    const applyToGroup = (texture: THREE.Texture, blend: BlendHeuristicResult) => {
        group.traverse(obj => {
            const mesh = obj as THREE.Mesh;
            if (!mesh.isMesh || !mesh.userData.texturePath) return;
            const wantedBase = mesh.userData.texturePath.split(/[\\/]/).pop()!.replace(/\.[^.]+$/, '');
            if (normalizeObjectBaseName(wantedBase) !== cacheKey) return;

            const material = mesh.material;
            const applyMaterial = (mat: THREE.Material) => {
                const phongMaterial = mat as THREE.MeshPhongMaterial;
                phongMaterial.map = texture;
                phongMaterial.color.set(0xffffff);
                applyBlendModeToMaterial(phongMaterial, blend);
            };

            if (Array.isArray(material)) {
                material.forEach(applyMaterial);
            } else if (material) {
                applyMaterial(material);
            }
        });
    };

    const cachedTexture = textureCache.get(cacheKey);
    const cachedBlend = blendCache.get(cacheKey);
    if (cachedTexture && cachedBlend) {
        applyToGroup(cachedTexture, cachedBlend);
        return;
    }

    const candidates = selectTerrainObjectTextureCandidates(
        texName,
        Array.from(files, ([name, file]) => ({ name, file })),
        candidate => candidate.name,
    );

    for (const candidate of candidates) {
        try {
            const tex = await loadTerrainObjectTextureFile(candidate.file, textureLoader);
            const blendResult = detectBlendModeFromTexture(tex, `${baseNameRaw} ${candidate.name}`);
            tex.userData.blendHeuristic = blendResult;
            textureCache.set(cacheKey, tex);
            blendCache.set(cacheKey, blendResult);
            applyToGroup(tex, blendResult);
            return;
        } catch {
            // Skip and try next compatible texture candidate.
        }
    }
}

async function loadTerrainObjectTextureFile(
    file: File,
    textureLoader: THREE.TextureLoader,
): Promise<THREE.Texture> {
    const ext = file.name.split('.').pop()!.toLowerCase();
    let url: string;
    let objectUrl: string | null = null;

    if (ext === 'tga') {
        url = await convertTgaToDataUrl(await file.arrayBuffer());
    } else if (ext === 'ozj' || ext === 'ozt') {
        url = await convertOzjToDataUrl(await file.arrayBuffer());
    } else {
        objectUrl = URL.createObjectURL(file);
        url = objectUrl;
    }

    try {
        const tex = await textureLoader.loadAsync(url);
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        tex.flipY = false;
        tex.name = file.name;
        return tex;
    } finally {
        if (objectUrl) {
            URL.revokeObjectURL(objectUrl);
        }
    }
}
