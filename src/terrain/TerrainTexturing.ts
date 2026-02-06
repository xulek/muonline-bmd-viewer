// src/terrain/TerrainTexturing.ts
import * as THREE from 'three';
import { TERRAIN_SIZE } from './formats/ATTReader';
import type { TerrainMappingData } from './formats/MAPReader';

const TILE_SIZE = 64;

export interface TerrainAtlas {
    texture: THREE.Texture;
    cols: number;
    rows: number;
    count: number;
}

export function buildTextureAtlas(textures: Map<number, THREE.Texture>): TerrainAtlas {
    const maxIndex = Math.max(...textures.keys(), 0);
    const count = maxIndex + 1;
    const cols = Math.ceil(Math.sqrt(count));
    const rows = Math.ceil(count / cols);

    const canvas = document.createElement('canvas');
    canvas.width = cols * TILE_SIZE;
    canvas.height = rows * TILE_SIZE;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const [idx, tex] of textures) {
        const col = idx % cols;
        const row = Math.floor(idx / cols);
        const img = tex.image as CanvasImageSource | null;
        if (img) {
            ctx.drawImage(img, col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }

    const atlasTexture = new THREE.CanvasTexture(canvas);
    atlasTexture.wrapS = THREE.RepeatWrapping;
    atlasTexture.wrapT = THREE.RepeatWrapping;
    atlasTexture.magFilter = THREE.LinearFilter;
    atlasTexture.minFilter = THREE.LinearMipMapLinearFilter;
    atlasTexture.colorSpace = THREE.SRGBColorSpace;

    return { texture: atlasTexture, cols, rows, count };
}

function createMappingTextures(mapping: TerrainMappingData) {
    const S = TERRAIN_SIZE;

    const layer1Tex = new THREE.DataTexture(mapping.layer1, S, S, THREE.RedFormat, THREE.UnsignedByteType);
    layer1Tex.needsUpdate = true;
    layer1Tex.minFilter = THREE.NearestFilter;
    layer1Tex.magFilter = THREE.NearestFilter;

    const layer2Tex = new THREE.DataTexture(mapping.layer2, S, S, THREE.RedFormat, THREE.UnsignedByteType);
    layer2Tex.needsUpdate = true;
    layer2Tex.minFilter = THREE.NearestFilter;
    layer2Tex.magFilter = THREE.NearestFilter;

    const alphaTex = new THREE.DataTexture(mapping.alpha, S, S, THREE.RedFormat, THREE.UnsignedByteType);
    alphaTex.needsUpdate = true;
    alphaTex.minFilter = THREE.NearestFilter;
    alphaTex.magFilter = THREE.NearestFilter;

    return { layer1Tex, layer2Tex, alphaTex };
}

const vertexShader = /* glsl */ `
varying vec2 vUv;
varying vec3 vColor;
varying vec2 vWorldXZ;

void main() {
    vUv = uv;
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
uniform float uTerrainSize;
uniform float uTerrainScale;
uniform float uTileRepeat;
uniform bool uUseLightmap;

varying vec2 vUv;
varying vec3 vColor;
varying vec2 vWorldXZ;

vec4 sampleAtlasTile(float tileIndex, vec2 tileUv) {
    float col = mod(tileIndex, uAtlasCols);
    float row = floor(tileIndex / uAtlasCols);
    vec2 atlasUv = (vec2(col, row) + fract(tileUv)) / vec2(uAtlasCols, uAtlasRows);
    return texture2D(uAtlas, atlasUv);
}

void main() {
    vec2 terrainUv = vUv;

    float idx1 = texture2D(uLayer1, terrainUv).r * 255.0;
    float idx2 = texture2D(uLayer2, terrainUv).r * 255.0;
    float blendAlpha = texture2D(uAlpha, terrainUv).r;

    vec2 tileUv = vWorldXZ / uTerrainScale * uTileRepeat;

    vec4 color1 = sampleAtlasTile(idx1, tileUv);
    vec4 color2 = sampleAtlasTile(idx2, tileUv);

    vec3 blended = mix(color1.rgb, color2.rgb, blendAlpha);

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
            uTerrainSize: { value: TERRAIN_SIZE },
            uTerrainScale: { value: 100.0 },
            uTileRepeat: { value: 1.0 },
            uUseLightmap: { value: useLightmap },
        },
        vertexColors: true,
        side: THREE.FrontSide,
    });
}
