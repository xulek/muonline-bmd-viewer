// src/terrain/TerrainObjects.ts
import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { BMDLoader } from '../bmd-loader';
import { convertOzjToDataUrl } from '../ozj-loader';
import type { OBJData, MapObject } from './formats/OBJReader';
import { TERRAIN_WORLD_SIZE } from './TerrainMesh';
import {
    applyBlendModeToMaterial,
    detectBlendModeFromTexture,
    type BlendHeuristicResult,
} from '../utils/TextureBlendHeuristics';

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

const OBJECT_INSTANCE_CHUNK_WORLD_SIZE = 4096;
const OBJECT_INSTANCE_CHUNK_THRESHOLD = 64;

export async function loadTerrainObjects(
    objData: OBJData,
    files: Map<string, File>,
    mapNumber: number,
    onProgress?: (loaded: number, total: number) => void,
): Promise<THREE.Group> {
    const group = new THREE.Group();
    group.name = 'terrain_objects';
    group.matrixAutoUpdate = false;
    group.updateMatrix();

    const bmdLoader = new BMDLoader();
    const textureLoader = new THREE.TextureLoader();
    const textureCache = new Map<string, THREE.Texture>();
    const blendCache = new Map<string, BlendHeuristicResult>();

    // Group objects by type for instancing
    const byType = new Map<number, MapObject[]>();
    for (const obj of objData.objects) {
        const list = byType.get(obj.type) || [];
        list.push(obj);
        byType.set(obj.type, list);
    }

    console.group('[TERRAIN OBJECTS] Loading');
    console.log(`OBJ data: ${objData.objects.length} objects, ${byType.size} unique types`);
    console.log('Types:', [...byType.keys()].sort((a, b) => a - b).join(', '));

    let loaded = 0;
    const total = byType.size;
    let foundCount = 0;
    let missingCount = 0;

    // Load each unique object type once
    for (const [type, instances] of byType) {
        const bmdFile = findObjectBMD(files, type, mapNumber);
        if (!bmdFile) {
            console.warn(`  [type ${type}] missing ${buildMissingObjectHint(type, mapNumber)}`);
            missingCount++;
            loaded++;
            onProgress?.(loaded, total);
            continue;
        }
        foundCount++;

        try {
            const buf = await bmdFile.arrayBuffer();
            const { group: template, requiredTextures } = await bmdLoader.load(buf);
            const baseOrientation = template.quaternion.clone();

            // Try to load textures for this object
            for (const texName of requiredTextures) {
                await tryApplyTexture(template, texName, files, textureLoader, textureCache, blendCache);
            }

            // Place instances. Prefer GPU instancing for static meshes.
            const instanced = addInstancedStaticObjects(group, template, instances, baseOrientation);
            if (!instanced) {
                for (const inst of instances) {
                    // Skinned meshes must be cloned with SkeletonUtils to avoid
                    // sharing one skeleton across all instances.
                    const clone = SkeletonUtils.clone(template);
                    clone.position.set(inst.position.x, inst.position.z, TERRAIN_WORLD_SIZE - inst.position.y);
                    // Reference clients apply map-object rotation on top of
                    // model base orientation. Keep template orientation and
                    // multiply by OBJ rotation quaternion.
                    const objQuat = mapObjectAngleToQuaternion(inst.angle);
                    clone.quaternion.copy(objQuat.multiply(baseOrientation));
                    clone.scale.setScalar(inst.scale);
                    clone.updateMatrix();
                    clone.updateMatrixWorld(true);
                    clone.matrixAutoUpdate = false;
                    group.add(clone);
                }
            }
        } catch (e) {
            console.warn(`Failed to load object type ${type}:`, e);
        }

        loaded++;
        onProgress?.(loaded, total);
    }

    console.log(`BMDs found: ${foundCount}, missing: ${missingCount}`);
    console.groupEnd();

    return group;
}

function findObjectBMD(files: Map<string, File>, type: number, mapNumber: number): File | null {
    // Priority 1: canonical numeric file name used by many clients.
    const fileIdx = type + 1;
    const padded = fileIdx.toString().padStart(2, '0');
    const numericCandidates = [`Object${padded}`, `Object${fileIdx}`];
    const numericFile = findObjectBMDCandidate(files, mapNumber, numericCandidates);
    if (numericFile) return numericFile;

    // Priority 2: world-specific object table mapping (e.g. Lorencia names).
    const mappedName = WORLD_OBJECT_NAME_BY_TYPE[mapNumber]?.[type];
    if (mappedName) {
        const aliases = OBJECT_NAME_ALIASES[mappedName.toLowerCase()] || [];
        const mappedFile = findObjectBMDCandidate(files, mapNumber, [mappedName, ...aliases]);
        if (mappedFile) return mappedFile;
    }

    // Priority 3: global fallback for ObjectNN names outside expected folder.
    for (const [name, file] of files) {
        const lower = name.toLowerCase();
        if (lower.endsWith(`/object${padded}.bmd`) || lower.endsWith(`/object${fileIdx}.bmd`)) {
            return file;
        }
    }

    return null;
}

function findObjectBMDCandidate(files: Map<string, File>, mapNumber: number, candidates: string[]): File | null {
    const folder = `object${mapNumber}/`;
    const normalizedCandidates = new Set(candidates.map(normalizeObjectBaseName));

    for (const [name, file] of files) {
        const lower = name.toLowerCase();
        if (!lower.startsWith(folder) || !lower.endsWith('.bmd')) {
            continue;
        }

        const baseName = lower.split('/').pop()!.replace(/\.bmd$/i, '');
        if (normalizedCandidates.has(normalizeObjectBaseName(baseName))) {
            return file;
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

function mapObjectAngleToQuaternion(angle: { x: number; y: number; z: number }): THREE.Quaternion {
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
): boolean {
    const templateMeshes: THREE.Mesh[] = [];
    let hasSkinnedMeshes = false;
    template.traverse(obj => {
        const mesh = obj as THREE.Mesh;
        if (!mesh.isMesh) return;
        templateMeshes.push(mesh);
        if ((mesh as THREE.SkinnedMesh).isSkinnedMesh) {
            hasSkinnedMeshes = true;
        }
    });

    if (templateMeshes.length === 0 || hasSkinnedMeshes) {
        return false;
    }

    template.updateMatrixWorld(true);
    const templateWorldInverse = new THREE.Matrix4().copy(template.matrixWorld).invert();

    const useChunking = instances.length >= OBJECT_INSTANCE_CHUNK_THRESHOLD;
    const chunkedObjectMatrices = new Map<string, THREE.Matrix4[]>();
    const position = new THREE.Vector3();
    const scale = new THREE.Vector3();
    for (let i = 0; i < instances.length; i++) {
        const inst = instances[i];
        position.set(inst.position.x, inst.position.z, TERRAIN_WORLD_SIZE - inst.position.y);
        const rotation = mapObjectAngleToQuaternion(inst.angle).multiply(baseOrientation);
        scale.setScalar(inst.scale);
        const objectMatrix = new THREE.Matrix4().compose(position, rotation, scale);
        const chunkKey = useChunking
            ? getObjectChunkKey(position.x, position.z)
            : 'all';
        const chunk = chunkedObjectMatrices.get(chunkKey);
        if (chunk) {
            chunk.push(objectMatrix);
        } else {
            chunkedObjectMatrices.set(chunkKey, [objectMatrix]);
        }
    }

    const meshLocalFromTemplate = new THREE.Matrix4();
    const finalMatrix = new THREE.Matrix4();
    for (const srcMesh of templateMeshes) {
        meshLocalFromTemplate
            .copy(templateWorldInverse)
            .multiply(srcMesh.matrixWorld);

        for (const [chunkKey, objectMatrices] of chunkedObjectMatrices) {
            const instancedMesh = new THREE.InstancedMesh(
                srcMesh.geometry,
                srcMesh.material,
                objectMatrices.length,
            );
            const baseName = srcMesh.name || 'terrain_instanced_mesh';
            instancedMesh.name = `${baseName}_${chunkKey}`;
            instancedMesh.castShadow = srcMesh.castShadow;
            instancedMesh.receiveShadow = srcMesh.receiveShadow;
            instancedMesh.renderOrder = srcMesh.renderOrder;
            instancedMesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
            instancedMesh.matrixAutoUpdate = false;

            for (let i = 0; i < objectMatrices.length; i++) {
                finalMatrix.multiplyMatrices(objectMatrices[i], meshLocalFromTemplate);
                instancedMesh.setMatrixAt(i, finalMatrix);
            }

            instancedMesh.instanceMatrix.needsUpdate = true;
            instancedMesh.computeBoundingBox();
            instancedMesh.computeBoundingSphere();
            instancedMesh.updateMatrix();
            target.add(instancedMesh);
        }
    }

    return true;
}

function getObjectChunkKey(worldX: number, worldZ: number): string {
    const chunkX = Math.floor(worldX / OBJECT_INSTANCE_CHUNK_WORLD_SIZE);
    const chunkZ = Math.floor(worldZ / OBJECT_INSTANCE_CHUNK_WORLD_SIZE);
    return `${chunkX}:${chunkZ}`;
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

            const mat = mesh.material as THREE.MeshPhongMaterial;
            mat.map = texture;
            mat.color.set(0xffffff);
            applyBlendModeToMaterial(mat, blend);
        });
    };

    const cachedTexture = textureCache.get(cacheKey);
    const cachedBlend = blendCache.get(cacheKey);
    if (cachedTexture && cachedBlend) {
        applyToGroup(cachedTexture, cachedBlend);
        return;
    }

    for (const [name, file] of files) {
        const fBaseRaw = name.split(/[\\/]/).pop()!.replace(/\.[^.]+$/, '');
        if (normalizeObjectBaseName(fBaseRaw) === cacheKey) {
            try {
                const ext = file.name.split('.').pop()!.toLowerCase();
                let url: string;
                if (ext === 'ozj' || ext === 'ozt') {
                    url = await convertOzjToDataUrl(await file.arrayBuffer());
                } else {
                    url = URL.createObjectURL(file);
                }
                const tex = await textureLoader.loadAsync(url);
                tex.colorSpace = THREE.SRGBColorSpace;
                tex.wrapS = THREE.RepeatWrapping;
                tex.wrapT = THREE.RepeatWrapping;
                tex.flipY = false;

                const blendResult = detectBlendModeFromTexture(tex, `${baseNameRaw} ${name}`);
                tex.userData.blendHeuristic = blendResult;
                textureCache.set(cacheKey, tex);
                blendCache.set(cacheKey, blendResult);
                applyToGroup(tex, blendResult);
                return;
            } catch { /* skip */ }
        }
    }
}
