// src/terrain/TerrainLoader.ts
import * as THREE from 'three';
import { readATT, type TerrainAttributeData } from './formats/ATTReader';
import { readMAP, type TerrainMappingData } from './formats/MAPReader';
import { readOZB, type OZBData } from './formats/OZBReader';
import { readOBJ, type OBJData } from './formats/OBJReader';
import { buildTerrainGeometry, TERRAIN_SCALE } from './TerrainMesh';
import { buildTextureAtlas, createTerrainMaterial } from './TerrainTexturing';
import { convertOzjToDataUrl } from '../ozj-loader';

export interface TerrainResult {
    mesh: THREE.Mesh;
    objectsData: OBJData | null;
    mapNumber: number;
}

// Default terrain texture names (indices 0-13 in original)
const DEFAULT_TEXTURE_NAMES: Record<number, string[]> = {
    0: ['TileGrass01'],
    1: ['TileGrass02'],
    2: ['TileGround01'],
    3: ['TileGround02'],
    4: ['TileGround03'],
    5: ['TileWater01'],
    6: ['TileWood01'],
    7: ['TileRock01'],
    8: ['TileRock02'],
    9: ['TileRock03'],
    10: ['TileRock04'],
    11: ['TileRock05'],
    12: ['TileRock06'],
    13: ['TileRock07'],
};

export class TerrainLoader {
    private textureLoader = new THREE.TextureLoader();

    async load(files: Map<string, File>): Promise<TerrainResult> {
        // Classify files by type
        const attFile = this.findFile(files, /EncTerrain\d*\.att$/i) ?? this.findFile(files, /\.att$/i);
        const mapFile = this.findFile(files, /EncTerrain\d*\.map$/i) ?? this.findFile(files, /\.map$/i);
        const heightFile = this.findFile(files, /TerrainHeight\.ozb$/i);
        const lightFile = this.findFile(files, /TerrainLight\.ozb$/i);
        const objFile = this.findFile(files, /EncTerrain\d*\.obj$/i) ?? this.findFile(files, /\.obj$/i);

        if (!attFile || !mapFile || !heightFile) {
            throw new Error('Missing required terrain files: .att, .map, and TerrainHeight.OZB');
        }

        // Parse terrain data
        const [attData, mapData, heightData] = await Promise.all([
            attFile.arrayBuffer().then(readATT),
            mapFile.arrayBuffer().then(readMAP),
            heightFile.arrayBuffer().then(readOZB),
        ]);

        const lightData = lightFile
            ? await lightFile.arrayBuffer().then(readOZB)
            : null;

        const objData = objFile
            ? await objFile.arrayBuffer().then(readOBJ)
            : null;

        // Load terrain textures
        const textureMap = await this.loadTerrainTextures(files, mapData);

        // Build atlas
        const atlas = buildTextureAtlas(textureMap);

        // Build geometry
        const geometry = buildTerrainGeometry(heightData, attData, lightData);

        // Build material
        const material = createTerrainMaterial(atlas, mapData, !!lightData);

        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = 'terrain';

        return { mesh, objectsData: objData, mapNumber: mapData.mapNumber };
    }

    private findFile(files: Map<string, File>, pattern: RegExp): File | undefined {
        for (const [name, file] of files) {
            if (pattern.test(name)) return file;
        }
        return undefined;
    }

    private async loadTerrainTextures(
        files: Map<string, File>,
        mapData: TerrainMappingData,
    ): Promise<Map<number, THREE.Texture>> {
        const textureMap = new Map<number, THREE.Texture>();

        // Find all unique texture indices used
        const usedIndices = new Set<number>();
        for (let i = 0; i < mapData.layer1.length; i++) {
            usedIndices.add(mapData.layer1[i]);
            usedIndices.add(mapData.layer2[i]);
        }

        // Try to load each texture
        for (const idx of usedIndices) {
            const tex = await this.tryLoadTexture(files, idx);
            if (tex) textureMap.set(idx, tex);
        }

        return textureMap;
    }

    private async tryLoadTexture(files: Map<string, File>, idx: number): Promise<THREE.Texture | null> {
        // Try default names first
        const names = DEFAULT_TEXTURE_NAMES[idx] || [];

        // Also try ExtTile naming for indices >= 14
        if (idx >= 14) {
            const extIdx = (idx - 14 + 1).toString().padStart(2, '0');
            names.push(`ExtTile${extIdx}`);
        }

        for (const baseName of names) {
            for (const ext of ['.ozj', '.ozt', '.jpg', '.png', '.tga']) {
                const fullName = baseName + ext;
                const file = this.findFileByName(files, fullName);
                if (file) {
                    return this.loadTextureFile(file);
                }
            }
        }

        // Brute force: search for any matching pattern
        for (const [name, file] of files) {
            if (/\.(ozj|ozt|jpg|png|tga)$/i.test(name) && name.toLowerCase().includes('tile')) {
                // Already handled above
            }
        }

        return null;
    }

    private findFileByName(files: Map<string, File>, name: string): File | undefined {
        const lower = name.toLowerCase();
        for (const [key, file] of files) {
            if (key.toLowerCase() === lower || key.toLowerCase().endsWith('/' + lower)) {
                return file;
            }
        }
        return undefined;
    }

    private async loadTextureFile(file: File): Promise<THREE.Texture> {
        const ext = file.name.split('.').pop()!.toLowerCase();
        let dataUrl: string;

        if (ext === 'ozj' || ext === 'ozt') {
            dataUrl = await convertOzjToDataUrl(await file.arrayBuffer());
        } else if (ext === 'jpg' || ext === 'jpeg' || ext === 'png') {
            dataUrl = URL.createObjectURL(file);
        } else {
            throw new Error(`Unsupported texture format: ${ext}`);
        }

        const tex = await this.textureLoader.loadAsync(dataUrl);
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        return tex;
    }
}
