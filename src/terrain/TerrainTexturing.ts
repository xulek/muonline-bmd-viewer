// src/terrain/TerrainTexturing.ts
import * as THREE from 'three';
import { TERRAIN_SIZE } from './formats/ATTReader';
import type { TerrainMappingData } from './formats/MAPReader';

// MU terrain samples use a 64x64 texel footprint per tile, regardless of source texture dimensions.
const MU_TILE_TEXEL_SIZE = 64;

export interface TerrainAtlas {
    texture: THREE.Texture;
    cols: number;
    rows: number;
    count: number;
    cellSize: number;
    /** UV repeat scale per tile = 64 / cellSize. Uniform for all textures after tiling. */
    tileUvScale: number;
}

/**
 * Build a texture atlas where every texture is TILED to fill its entire cell.
 *
 * Reference behavior (C# TerrainRenderer):
 *   - Each texture is bound individually with GL_REPEAT wrapping.
 *   - UV per tile = tilePos * (64 / textureWidth).
 *   - A 256px texture repeats every 4 tiles; a 64px texture repeats every 1 tile.
 *
 * Atlas equivalent:
 *   - Each cell is cellSize x cellSize (= max texture dimension).
 *   - Smaller textures are tiled N×N to fill the cell (e.g. 64px → 4×4 in a 256 cell).
 *   - UV per tile = tilePos * (64 / cellSize), UNIFORM for all textures.
 *   - fract() in the shader provides repeating UV within each cell.
 *   - Tiling guarantees that fract() near 0 or 1 samples valid (repeated) content,
 *     NOT empty/transparent pixels — this eliminates the blurriness from bilinear bleed.
 */
export function buildTextureAtlas(textures: Map<number, THREE.Texture>): TerrainAtlas {
    const maxIndex = Math.max(...textures.keys(), 0);
    const count = maxIndex + 1;
    const cols = Math.ceil(Math.sqrt(count));
    const rows = Math.ceil(count / cols);

    // Cell size = largest texture dimension (typically 256).
    let cellSize = MU_TILE_TEXEL_SIZE;
    for (const [, tex] of textures) {
        const img = tex.image as { width?: number; height?: number } | null;
        if (!img) continue;
        const w = img.width ?? MU_TILE_TEXEL_SIZE;
        const h = img.height ?? MU_TILE_TEXEL_SIZE;
        cellSize = Math.max(cellSize, w, h);
    }

    const canvas = document.createElement('canvas');
    canvas.width = cols * cellSize;
    canvas.height = rows * cellSize;
    const ctx = canvas.getContext('2d')!;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const [idx, tex] of textures) {
        const col = idx % cols;
        const row = Math.floor(idx / cols);
        const img = tex.image as CanvasImageSource | null;
        const size = tex.image as { width?: number; height?: number } | null;
        const w = size?.width ?? MU_TILE_TEXEL_SIZE;
        const h = size?.height ?? MU_TILE_TEXEL_SIZE;
        if (img) {
            const cx = col * cellSize;
            const cy = row * cellSize;

            // Tile the texture to fill the entire cell. This is critical:
            // a 64px texture in a 256-cell becomes 4×4 tiled, so fract()-based
            // UV wrapping always samples real texture data, never empty space.
            ctx.save();
            ctx.beginPath();
            ctx.rect(cx, cy, cellSize, cellSize);
            ctx.clip();
            for (let dy = 0; dy < cellSize; dy += h) {
                for (let dx = 0; dx < cellSize; dx += w) {
                    ctx.drawImage(img, cx + dx, cy + dy);
                }
            }
            ctx.restore();
        }
    }

    const atlasTexture = new THREE.CanvasTexture(canvas);
    atlasTexture.wrapS = THREE.ClampToEdgeWrapping;
    atlasTexture.wrapT = THREE.ClampToEdgeWrapping;
    atlasTexture.magFilter = THREE.LinearFilter;
    atlasTexture.minFilter = THREE.LinearFilter;
    atlasTexture.generateMipmaps = false;
    // flipY=false: The atlas canvas has row 0 at the top. Default flipY=true would reverse
    // the row order, making shader row 0 (low UV.y) map to the LAST canvas row instead of
    // the first — scrambling which texture index maps to which atlas cell.
    atlasTexture.flipY = false;
    // NoColorSpace: the reference (C#/XNA) does texture * vertexColor entirely in sRGB/gamma
    // space without any linearization. SRGBColorSpace would cause the GPU to decode to linear,
    // but ShaderMaterial doesn't re-encode on output → wrong brightness (overexposure/washout).
    atlasTexture.colorSpace = THREE.NoColorSpace;

    // With tiling, the UV repeat scale is uniform for ALL textures: 64 / cellSize.
    const tileUvScale = MU_TILE_TEXEL_SIZE / cellSize;

    return { texture: atlasTexture, cols, rows, count, cellSize, tileUvScale };
}

function createMappingTextures(mapping: TerrainMappingData) {
    const S = TERRAIN_SIZE;

    const layer1Tex = new THREE.DataTexture(mapping.layer1, S, S, THREE.RedFormat, THREE.UnsignedByteType);
    layer1Tex.needsUpdate = true;
    layer1Tex.minFilter = THREE.NearestFilter;
    layer1Tex.magFilter = THREE.NearestFilter;
    layer1Tex.wrapS = THREE.ClampToEdgeWrapping;
    layer1Tex.wrapT = THREE.ClampToEdgeWrapping;

    const layer2Tex = new THREE.DataTexture(mapping.layer2, S, S, THREE.RedFormat, THREE.UnsignedByteType);
    layer2Tex.needsUpdate = true;
    layer2Tex.minFilter = THREE.NearestFilter;
    layer2Tex.magFilter = THREE.NearestFilter;
    layer2Tex.wrapS = THREE.ClampToEdgeWrapping;
    layer2Tex.wrapT = THREE.ClampToEdgeWrapping;

    const alphaTex = new THREE.DataTexture(mapping.alpha, S, S, THREE.RedFormat, THREE.UnsignedByteType);
    alphaTex.needsUpdate = true;
    alphaTex.minFilter = THREE.NearestFilter;
    alphaTex.magFilter = THREE.NearestFilter;
    alphaTex.wrapS = THREE.ClampToEdgeWrapping;
    alphaTex.wrapT = THREE.ClampToEdgeWrapping;

    return { layer1Tex, layer2Tex, alphaTex };
}

const vertexShader = /* glsl */ `
varying vec3 vColor;
varying vec2 vWorldXZ;

void main() {
    vColor = color;
    vWorldXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = /* glsl */ `
uniform sampler2D uAtlas;
uniform sampler2D uLayer1;
uniform sampler2D uLayer2;
uniform sampler2D uAlpha;
uniform float uAtlasCols;
uniform float uAtlasRows;
uniform float uAtlasCount;
uniform float uAtlasInset;
uniform float uTerrainSize;
uniform float uTerrainScale;
uniform float uTileUvScale;
uniform bool uUseLightmap;
uniform int uDebugMode; // 0=normal, 1=layer1 index, 2=layer2 index, 3=alpha, 4=atlas UV

varying vec3 vColor;
varying vec2 vWorldXZ;

float sampleMapIndex(sampler2D tex, vec2 tileCoord) {
    vec2 uv = (tileCoord + 0.5) / uTerrainSize;
    return floor(texture2D(tex, uv).r * 255.0 + 0.5);
}

// Convert an index 0..255 to a distinct color for debug visualization
vec3 indexToColor(float idx) {
    float h = mod(idx * 0.618033988749895, 1.0); // golden ratio for distinct hues
    float s = 0.8;
    float v = 0.9;
    // HSV to RGB
    float c = v * s;
    float x = c * (1.0 - abs(mod(h * 6.0, 2.0) - 1.0));
    float m = v - c;
    vec3 rgb;
    float hh = h * 6.0;
    if (hh < 1.0) rgb = vec3(c, x, 0.0);
    else if (hh < 2.0) rgb = vec3(x, c, 0.0);
    else if (hh < 3.0) rgb = vec3(0.0, c, x);
    else if (hh < 4.0) rgb = vec3(0.0, x, c);
    else if (hh < 5.0) rgb = vec3(x, 0.0, c);
    else rgb = vec3(c, 0.0, x);
    return rgb + m;
}

vec4 sampleAtlasTile(float tileIndex, vec2 tileUv) {
    if (tileIndex < 0.0 || tileIndex >= uAtlasCount) {
        return vec4(1.0, 0.0, 1.0, 1.0); // magenta = missing texture
    }

    float col = mod(tileIndex, uAtlasCols);
    float row = floor(tileIndex / uAtlasCols);

    // All textures are tiled to fill the full cell, so UV scale is uniform.
    // fract() provides repeating; tiled content ensures no bleed into empty space.
    vec2 localUv = fract(tileUv * uTileUvScale);

    // Clamp to prevent bilinear filtering from bleeding into adjacent atlas cells.
    localUv = clamp(localUv, vec2(uAtlasInset), vec2(1.0 - uAtlasInset));

    vec2 atlasUv = (vec2(col, row) + localUv) / vec2(uAtlasCols, uAtlasRows);
    return texture2D(uAtlas, atlasUv);
}

void main() {
    vec2 worldTile = vWorldXZ / uTerrainScale;

    // Offset by a small epsilon before floor() to prevent wrong tile lookup at exact
    // tile boundaries where shared vertices sit (e.g., position exactly at 600.0).
    vec2 tileCoord = floor(worldTile + 0.0002);
    tileCoord = clamp(tileCoord, vec2(0.0), vec2(uTerrainSize - 1.0));
    vec2 fracTile = worldTile - tileCoord;

    vec2 tileCoordX  = min(tileCoord + vec2(1.0, 0.0), vec2(uTerrainSize - 1.0));
    vec2 tileCoordY  = min(tileCoord + vec2(0.0, 1.0), vec2(uTerrainSize - 1.0));
    vec2 tileCoordXY = min(tileCoord + vec2(1.0, 1.0), vec2(uTerrainSize - 1.0));

    float idx1 = sampleMapIndex(uLayer1, tileCoord);
    float idx2 = sampleMapIndex(uLayer2, tileCoord);

    float a1 = sampleMapIndex(uAlpha, tileCoord) / 255.0;
    float a2 = sampleMapIndex(uAlpha, tileCoordX) / 255.0;
    float a3 = sampleMapIndex(uAlpha, tileCoordXY) / 255.0;
    float a4 = sampleMapIndex(uAlpha, tileCoordY) / 255.0;
    float blendAlpha = mix(mix(a1, a2, fracTile.x), mix(a4, a3, fracTile.x), fracTile.y);

    // ── Debug modes ──
    if (uDebugMode == 1) { gl_FragColor = vec4(indexToColor(idx1), 1.0); return; }
    if (uDebugMode == 2) { gl_FragColor = vec4(indexToColor(idx2), 1.0); return; }
    if (uDebugMode == 3) { gl_FragColor = vec4(vec3(blendAlpha), 1.0); return; }
    if (uDebugMode == 4) {
        // Show atlas UV as red/green — useful to see if sampling lands correctly
        float col = mod(idx1, uAtlasCols);
        float row = floor(idx1 / uAtlasCols);
        vec2 localUv = fract(worldTile * uTileUvScale);
        vec2 atlasUv = (vec2(col, row) + localUv) / vec2(uAtlasCols, uAtlasRows);
        gl_FragColor = vec4(atlasUv, 0.0, 1.0); return;
    }

    vec2 tileUv = worldTile;

    bool layer2Valid = (idx2 < 255.0) && (idx2 < uAtlasCount);
    bool isOpaque = a1 >= (254.5 / 255.0) &&
                    a2 >= (254.5 / 255.0) &&
                    a3 >= (254.5 / 255.0) &&
                    a4 >= (254.5 / 255.0);

    vec3 blended;
    if (isOpaque && layer2Valid) {
        blended = sampleAtlasTile(idx2, tileUv).rgb;
    } else {
        blended = sampleAtlasTile(idx1, tileUv).rgb;
        if (blendAlpha > 0.0 && layer2Valid) {
            vec3 overlay = sampleAtlasTile(idx2, tileUv).rgb;
            blended = mix(blended, overlay, blendAlpha);
        }
    }

    if (uUseLightmap) {
        blended *= vColor;
    }

    gl_FragColor = vec4(blended, 1.0);
}
`;

export function createTerrainMaterial(
    atlas: TerrainAtlas,
    mapping: TerrainMappingData,
    useLightmap: boolean,
): THREE.ShaderMaterial {
    const { layer1Tex, layer2Tex, alphaTex } = createMappingTextures(mapping);
    const inset = 0.5 / atlas.cellSize;

    return new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
            uAtlas: { value: atlas.texture },
            uLayer1: { value: layer1Tex },
            uLayer2: { value: layer2Tex },
            uAlpha: { value: alphaTex },
            uAtlasCols: { value: atlas.cols },
            uAtlasRows: { value: atlas.rows },
            uAtlasCount: { value: atlas.count },
            uAtlasInset: { value: inset },
            uTerrainSize: { value: TERRAIN_SIZE },
            uTerrainScale: { value: 100.0 },
            uTileUvScale: { value: atlas.tileUvScale },
            uUseLightmap: { value: useLightmap },
            uDebugMode: { value: 0 },
        },
        vertexColors: true,
        side: THREE.FrontSide,
    });
}
