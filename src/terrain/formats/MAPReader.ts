// src/terrain/formats/MAPReader.ts
import { decryptFileCryptor } from '../../crypto/file-cryptor';
import { decryptModulusCryptor } from '../../crypto/modulus-cryptor';
import { TERRAIN_SIZE } from './ATTReader';

export interface TerrainMappingData {
    version: number;
    mapNumber: number;
    layer1: Uint8Array;  // 256*256 - base texture indices
    layer2: Uint8Array;  // 256*256 - overlay texture indices
    alpha: Uint8Array;   // 256*256 - blend alpha (0-255)
}

export function readMAP(buffer: ArrayBuffer): TerrainMappingData {
    let u8: Uint8Array = new Uint8Array(buffer);

    // Debug: show first bytes and which decryption path
    const header = Array.from(u8.slice(0, 8)).map(b => b.toString(16).padStart(2, '0')).join(' ');
    console.log(`[MAP] file size=${u8.length}, header: ${header}`);

    // Detect encryption type
    if (u8.length > 4 && u8[0] === 0x4D && u8[1] === 0x41 && u8[2] === 0x50 && u8[3] === 1) {
        console.log('[MAP] Detected MAP\\x01 header → ModulusCryptor');
        const payload = u8.slice(4);
        console.log(`[MAP] ModulusCryptor input: size=${payload.length}, algo bytes: [${payload[0]}, ${payload[1]}] → algo1=${payload[1] & 7}, algo2=${payload[0] & 7}`);
        u8 = decryptModulusCryptor(payload);
    } else {
        console.log('[MAP] No MAP header → FileCryptor');
        u8 = decryptFileCryptor(u8);
    }

    console.log(`[MAP] Decrypted size=${u8.length}, first 10 bytes: [${Array.from(u8.slice(0, 10)).join(', ')}]`);

    const tileCount = TERRAIN_SIZE * TERRAIN_SIZE;
    const version = u8[0];
    const mapNumber = u8[1];

    let offset = 2;
    const layer1 = u8.slice(offset, offset + tileCount); offset += tileCount;
    const layer2 = u8.slice(offset, offset + tileCount); offset += tileCount;
    const alpha  = u8.slice(offset, offset + tileCount);

    return { version, mapNumber, layer1, layer2, alpha };
}
