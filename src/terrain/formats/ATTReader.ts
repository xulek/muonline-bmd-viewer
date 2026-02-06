// src/terrain/formats/ATTReader.ts
import { decryptFileCryptor, xorBuxMask } from '../../crypto/file-cryptor';
import { decryptModulusCryptor } from '../../crypto/modulus-cryptor';

export const TERRAIN_SIZE = 256;

export enum TWFlags {
    None        = 0x0000,
    SafeZone    = 0x0001,
    Character   = 0x0002,
    NoMove      = 0x0004,
    NoGround    = 0x0008,
    Water       = 0x0010,
    Action      = 0x0020,
    Height      = 0x0040,
    CameraUp    = 0x0080,
}

export interface TerrainAttributeData {
    version: number;
    index: number;
    width: number;
    height: number;
    terrainWall: Uint8Array; // 256*256, each byte is TWFlags
}

export function readATT(buffer: ArrayBuffer): TerrainAttributeData {
    let u8 = new Uint8Array(buffer);

    // Detect encryption type
    if (u8.length > 4 && u8[0] === 0x41 && u8[1] === 0x54 && u8[2] === 0x54 && u8[3] === 1) {
        // "ATT\x01" -> ModulusCryptor (skip 4-byte header)
        u8 = decryptModulusCryptor(u8.slice(4));
    } else {
        u8 = decryptFileCryptor(u8);
    }

    // Post-decrypt XOR with BUX mask
    u8 = xorBuxMask(u8);

    const expectedStd = TERRAIN_SIZE * TERRAIN_SIZE + 4;
    const expectedExt = TERRAIN_SIZE * TERRAIN_SIZE * 2 + 4;

    if (u8.length !== expectedStd && u8.length !== expectedExt) {
        throw new Error(`ATT: unexpected size ${u8.length} (expected ${expectedStd} or ${expectedExt})`);
    }

    const isExtended = u8.length === expectedExt;
    const version = u8[0];
    const index = u8[1];
    const width = u8[2];
    const height = u8[3];

    const terrainWall = new Uint8Array(TERRAIN_SIZE * TERRAIN_SIZE);
    let offset = 4;

    for (let i = 0; i < TERRAIN_SIZE * TERRAIN_SIZE; i++) {
        if (isExtended) {
            terrainWall[i] = u8[offset] & 0xFF; // lower byte only
            offset += 2;
        } else {
            terrainWall[i] = u8[offset];
            offset += 1;
        }
    }

    return { version, index, width, height, terrainWall };
}
