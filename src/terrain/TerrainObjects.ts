// src/terrain/TerrainObjects.ts
import * as THREE from 'three';
import { BMDLoader } from '../bmd-loader';
import { convertOzjToDataUrl } from '../ozj-loader';
import type { OBJData, MapObject } from './formats/OBJReader';

export async function loadTerrainObjects(
    objData: OBJData,
    files: Map<string, File>,
    onProgress?: (loaded: number, total: number) => void,
): Promise<THREE.Group> {
    const group = new THREE.Group();
    group.name = 'terrain_objects';

    const bmdLoader = new BMDLoader();
    const textureLoader = new THREE.TextureLoader();

    // Group objects by type for instancing
    const byType = new Map<number, MapObject[]>();
    for (const obj of objData.objects) {
        const list = byType.get(obj.type) || [];
        list.push(obj);
        byType.set(obj.type, list);
    }

    let loaded = 0;
    const total = byType.size;

    // Load each unique object type once
    for (const [type, instances] of byType) {
        const bmdFile = findObjectBMD(files, type);
        if (!bmdFile) {
            loaded++;
            onProgress?.(loaded, total);
            continue;
        }

        try {
            const buf = await bmdFile.arrayBuffer();
            const { group: template, requiredTextures } = await bmdLoader.load(buf);

            // Try to load textures for this object
            for (const texName of requiredTextures) {
                await tryApplyTexture(template, texName, files, textureLoader);
            }

            // Place instances
            for (const inst of instances) {
                const clone = template.clone();
                clone.position.set(inst.position.x, inst.position.z, inst.position.y);
                clone.rotation.set(
                    THREE.MathUtils.degToRad(inst.angle.x),
                    THREE.MathUtils.degToRad(inst.angle.z),
                    THREE.MathUtils.degToRad(inst.angle.y),
                );
                clone.scale.setScalar(inst.scale);
                group.add(clone);
            }
        } catch (e) {
            console.warn(`Failed to load object type ${type}:`, e);
        }

        loaded++;
        onProgress?.(loaded, total);
    }

    return group;
}

function findObjectBMD(files: Map<string, File>, type: number): File | null {
    // Object BMDs typically named Object{type}.bmd or similar
    const patterns = [
        `Object${type}.bmd`,
        `Object${type.toString().padStart(2, '0')}.bmd`,
        `Object${type.toString().padStart(3, '0')}.bmd`,
    ];

    for (const pattern of patterns) {
        for (const [name, file] of files) {
            if (name.toLowerCase().endsWith(pattern.toLowerCase())) {
                return file;
            }
        }
    }
    return null;
}

async function tryApplyTexture(
    group: THREE.Group,
    texName: string,
    files: Map<string, File>,
    textureLoader: THREE.TextureLoader,
): Promise<void> {
    const baseName = texName.split(/[\\/]/).pop()!.replace(/\.[^.]+$/, '').toLowerCase();

    for (const [name, file] of files) {
        const fBase = name.split(/[\\/]/).pop()!.replace(/\.[^.]+$/, '').toLowerCase();
        if (fBase === baseName) {
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

                group.traverse(obj => {
                    const mesh = obj as THREE.Mesh;
                    if (mesh.isMesh && mesh.userData.texturePath) {
                        const wanted = mesh.userData.texturePath.split(/[\\/]/).pop()!.replace(/\.[^.]+$/, '').toLowerCase();
                        if (wanted === baseName) {
                            const mat = mesh.material as THREE.MeshPhongMaterial;
                            mat.map = tex;
                            mat.needsUpdate = true;
                        }
                    }
                });
                return;
            } catch { /* skip */ }
        }
    }
}
