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

// Default terrain texture filenames — matches Client.Main TerrainData.GetDefaultTextureMappings().
// Full filenames with extensions so that indices 30-32 correctly load .ozt (alpha) not .ozj.
const DEFAULT_TEXTURE_FILES: Record<number, string> = {
    0: 'TileGrass01.ozj',
    1: 'TileGrass02.ozj',
    2: 'TileGround01.ozj',
    3: 'TileGround02.ozj',
    4: 'TileGround03.ozj',
    5: 'TileWater01.ozj',
    6: 'TileWood01.ozj',
    7: 'TileRock01.ozj',
    8: 'TileRock02.ozj',
    9: 'TileRock03.ozj',
    10: 'TileRock04.ozj',
    11: 'TileRock05.ozj',
    12: 'TileRock06.ozj',
    13: 'TileRock07.ozj',
    30: 'TileGrass01.ozt',
    31: 'TileGrass02.ozt',
    32: 'TileGrass03.ozt',
    100: 'leaf01.ozt',
    101: 'leaf02.ozj',
    102: 'rain01.ozt',
    103: 'rain02.ozt',
    104: 'rain03.ozt',
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

        // ── DEBUG: MAP data analysis ──
        this.debugMapData(mapData);

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

        // ── DEBUG: Atlas dump ──
        this.debugAtlas(atlas, textureMap);

        // Build geometry
        const geometry = buildTerrainGeometry(heightData, attData, lightData);

        // Build material
        const material = createTerrainMaterial(atlas, mapData, !!lightData);

        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = 'terrain';

        return { mesh, objectsData: objData, mapNumber: mapData.mapNumber };
    }

    // ── Diagnostic helpers ──

    private debugMapData(mapData: TerrainMappingData) {
        const l1 = new Set<number>();
        const l2 = new Set<number>();
        const alphaStats = { zero: 0, full: 0, partial: 0 };
        for (let i = 0; i < mapData.layer1.length; i++) {
            l1.add(mapData.layer1[i]);
            l2.add(mapData.layer2[i]);
            const a = mapData.alpha[i];
            if (a === 0) alphaStats.zero++;
            else if (a === 255) alphaStats.full++;
            else alphaStats.partial++;
        }
        console.group('[TERRAIN DEBUG] MAP data');
        console.log('version:', mapData.version, 'mapNumber:', mapData.mapNumber);
        console.log('layer1 unique indices:', [...l1].sort((a, b) => a - b));
        console.log('layer2 unique indices:', [...l2].sort((a, b) => a - b));
        console.log('alpha stats:', alphaStats);
        console.log('first 20 layer1 values:', Array.from(mapData.layer1.slice(0, 20)));
        console.log('first 20 layer2 values:', Array.from(mapData.layer2.slice(0, 20)));
        console.log('first 20 alpha values:', Array.from(mapData.alpha.slice(0, 20)));
        console.groupEnd();
    }

    private debugAtlas(atlas: ReturnType<typeof buildTextureAtlas>, textureMap: Map<number, THREE.Texture>) {
        console.group('[TERRAIN DEBUG] Atlas');
        console.log('atlas grid:', atlas.cols, 'x', atlas.rows, '=', atlas.count, 'cells');
        console.log('cellSize:', atlas.cellSize, 'tileUvScale:', atlas.tileUvScale);
        console.log('canvas:', (atlas.texture as any).image?.width, 'x', (atlas.texture as any).image?.height);

        const loaded: string[] = [];
        const missing: number[] = [];
        const allIndices = new Set<number>();
        // Collect all referenced indices
        for (const [idx, tex] of textureMap) {
            const img = tex.image as { width?: number; height?: number } | null;
            loaded.push(`  [${idx}] ${img?.width}x${img?.height}`);
            allIndices.add(idx);
        }
        console.log('loaded textures (' + textureMap.size + '):\n' + loaded.join('\n'));
        console.groupEnd();

        // Expose atlas canvas for visual inspection
        const canvas = (atlas.texture as any).image;
        if (canvas instanceof HTMLCanvasElement) {
            (window as any).__terrainAtlasCanvas = canvas;
            console.log('[TERRAIN DEBUG] Atlas canvas stored at window.__terrainAtlasCanvas');
            console.log('[TERRAIN DEBUG] To inspect: document.body.appendChild(window.__terrainAtlasCanvas)');
        }
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

        console.group('[TERRAIN DEBUG] Texture loading');
        const sortedIndices = [...usedIndices].sort((a, b) => a - b);
        console.log('Need textures for indices:', sortedIndices);

        // Try to load each texture
        for (const idx of sortedIndices) {
            const tex = await this.tryLoadTexture(files, idx);
            if (tex) {
                textureMap.set(idx, tex);
            } else {
                console.warn(`  [${idx}] ⚠ NO TEXTURE FOUND`);
            }
        }
        console.groupEnd();

        return textureMap;
    }

    private async tryLoadTexture(files: Map<string, File>, idx: number): Promise<THREE.Texture | null> {
        // Build candidate filenames in priority order.
        const candidates: string[] = [];

        // 1. Exact filename from defaults (preserves correct .ozj vs .ozt per reference).
        const defaultFile = DEFAULT_TEXTURE_FILES[idx];
        if (defaultFile) {
            candidates.push(defaultFile);
        }

        // 2. ExtTile01..16 for indices 14..29 (C# TerrainLoader: textureMapFiles[13+i]).
        if (idx >= 14 && idx <= 29) {
            const extIdx = (idx - 14 + 1).toString().padStart(2, '0');
            candidates.push(`ExtTile${extIdx}.ozj`);
        }

        // 3. Fallback: try the base name (without ext) with common extensions.
        if (defaultFile) {
            const baseName = defaultFile.replace(/\.[^.]+$/, '');
            for (const ext of ['.ozj', '.ozt', '.jpg', '.png']) {
                const name = baseName + ext;
                if (name !== defaultFile) candidates.push(name);
            }
        }

        for (const fullName of candidates) {
            const file = this.findFileByName(files, fullName);
            if (file) {
                try {
                    const tex = await this.loadTextureFile(file);
                    const img = tex.image as { width?: number; height?: number };
                    console.log(`  [${idx}] ✓ ${file.name} (${img?.width}x${img?.height})`);
                    return tex;
                } catch (e) {
                    console.error(`  [${idx}] ✗ ${file.name} DECODE ERROR:`, e);
                }
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
            dataUrl = await convertOzjToDataUrl(await file.arrayBuffer(), ext as 'ozj' | 'ozt');
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
