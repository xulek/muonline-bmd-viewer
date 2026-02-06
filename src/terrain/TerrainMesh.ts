// src/terrain/TerrainMesh.ts
import * as THREE from 'three';
import { TERRAIN_SIZE, TWFlags, type TerrainAttributeData } from './formats/ATTReader';
import type { OZBData } from './formats/OZBReader';

export const TERRAIN_SCALE = 100;
const SPECIAL_HEIGHT = 1200;

export function buildTerrainGeometry(
    heightmap: OZBData,
    attributes: TerrainAttributeData,
    lightmap: OZBData | null,
): THREE.BufferGeometry {
    const S = TERRAIN_SIZE;
    const V = S + 1; // 257 vertices per side

    const positions = new Float32Array(V * V * 3);
    const normals = new Float32Array(V * V * 3);
    const uvs = new Float32Array(V * V * 2);
    const colors = new Float32Array(V * V * 3);

    function getHeight(x: number, y: number): number {
        const cx = Math.min(Math.max(x, 0), S - 1);
        const cy = Math.min(Math.max(y, 0), S - 1);
        const idx = cy * S + cx;
        let h = heightmap.data[idx * 4] * 1.5;
        if (attributes.terrainWall[idx] & TWFlags.Height) {
            h += SPECIAL_HEIGHT;
        }
        return h;
    }

    for (let vy = 0; vy < V; vy++) {
        for (let vx = 0; vx < V; vx++) {
            const vi = vy * V + vx;
            const tx = Math.min(vx, S - 1);
            const ty = Math.min(vy, S - 1);

            positions[vi * 3]     = vx * TERRAIN_SCALE;
            positions[vi * 3 + 1] = getHeight(tx, ty);
            positions[vi * 3 + 2] = vy * TERRAIN_SCALE;

            uvs[vi * 2]     = vx / S;
            uvs[vi * 2 + 1] = vy / S;

            if (lightmap) {
                const li = ty * S + tx;
                colors[vi * 3]     = lightmap.data[li * 4] / 255;
                colors[vi * 3 + 1] = lightmap.data[li * 4 + 1] / 255;
                colors[vi * 3 + 2] = lightmap.data[li * 4 + 2] / 255;
            } else {
                colors[vi * 3] = colors[vi * 3 + 1] = colors[vi * 3 + 2] = 1.0;
            }
        }
    }

    for (let vy = 0; vy < V; vy++) {
        for (let vx = 0; vx < V; vx++) {
            const vi = vy * V + vx;
            const tx = Math.min(vx, S - 1);
            const ty = Math.min(vy, S - 1);

            const hL = getHeight(tx - 1, ty);
            const hR = getHeight(tx + 1, ty);
            const hD = getHeight(tx, ty - 1);
            const hU = getHeight(tx, ty + 1);

            const nx = hL - hR;
            const ny = 2 * TERRAIN_SCALE;
            const nz = hD - hU;
            const len = Math.sqrt(nx * nx + ny * ny + nz * nz);

            normals[vi * 3]     = nx / len;
            normals[vi * 3 + 1] = ny / len;
            normals[vi * 3 + 2] = nz / len;
        }
    }

    const indices = new Uint32Array(S * S * 6);
    let idx = 0;
    for (let ty = 0; ty < S; ty++) {
        for (let tx = 0; tx < S; tx++) {
            const tileIdx = ty * S + tx;
            if (attributes.terrainWall[tileIdx] & TWFlags.NoGround) continue;

            const v0 = ty * V + tx;
            const v1 = ty * V + tx + 1;
            const v2 = (ty + 1) * V + tx + 1;
            const v3 = (ty + 1) * V + tx;

            indices[idx++] = v0;
            indices[idx++] = v3;
            indices[idx++] = v1;
            indices[idx++] = v1;
            indices[idx++] = v3;
            indices[idx++] = v2;
        }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setIndex(new THREE.BufferAttribute(indices.slice(0, idx), 1));

    return geometry;
}
