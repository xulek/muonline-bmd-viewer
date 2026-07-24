// src/terrain/formats/OBJReader.ts
import { decryptFileCryptor } from '../../crypto/file-cryptor';

export interface MapObject {
    type: number;
    position: { x: number; y: number; z: number };
    angle: { x: number; y: number; z: number };
    scale: number;
    extra?: Uint8Array;
}

export interface OBJData {
    version: number;
    mapNumber: number;
    objects: MapObject[];
}

export function readOBJ(buffer: ArrayBuffer): OBJData {
    let u8: Uint8Array = new Uint8Array(buffer);
    u8 = decryptFileCryptor(u8);

    const view = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
    const version = u8[0];
    const mapNumber = u8[1];
    const count = view.getInt16(2, true);

    const baseSizes: Record<number, number> = {
        0: 30, 1: 32, 2: 33, 3: 45, 4: 46, 5: 54,
    };

    const objSize = baseSizes[version];
    if (objSize === undefined) {
        throw new Error(`OBJ: unsupported version ${version}`);
    }

    const objects: MapObject[] = [];
    let offset = 4;

    for (let i = 0; i < count; i++) {
        if (offset + objSize > u8.byteLength) {
            throw new Error(`OBJ: truncated object record ${i + 1}/${count}`);
        }

        const type = view.getInt16(offset, true); offset += 2;
        const px = view.getFloat32(offset, true); offset += 4;
        const py = view.getFloat32(offset, true); offset += 4;
        const pz = view.getFloat32(offset, true); offset += 4;
        const ax = view.getFloat32(offset, true); offset += 4;
        const ay = view.getFloat32(offset, true); offset += 4;
        const az = view.getFloat32(offset, true); offset += 4;
        const scale = view.getFloat32(offset, true); offset += 4;

        const extraBytes = objSize - 30;
        const extra = extraBytes > 0 ? u8.slice(offset, offset + extraBytes) : undefined;
        offset += extraBytes;

        objects.push({
            type,
            position: { x: px, y: py, z: pz },
            angle: { x: ax, y: ay, z: az },
            scale,
            ...(extra ? { extra } : {}),
        });
    }

    return { version, mapNumber, objects };
}
