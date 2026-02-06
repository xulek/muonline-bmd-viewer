const MAP_XOR_KEY = new Uint8Array([
    0xD1, 0x73, 0x52, 0xF6, 0xD2, 0x9A, 0xCB, 0x27,
    0x3E, 0xAF, 0x59, 0x31, 0x37, 0xB3, 0xE7, 0xA2,
]);

export function decryptFileCryptor(src: Uint8Array): Uint8Array {
    const dst = new Uint8Array(src.length);
    let mapKey = 0x5E;
    for (let i = 0; i < src.length; i++) {
        dst[i] = ((src[i] ^ MAP_XOR_KEY[i & 15]) - mapKey) & 0xFF;
        mapKey = (src[i] + 0x3D) & 0xFF;
    }
    return dst;
}

const BUX_MASK = new Uint8Array([0xFC, 0xCF, 0xAB]);

export function xorBuxMask(buffer: Uint8Array): Uint8Array {
    const out = new Uint8Array(buffer.length);
    for (let i = 0; i < buffer.length; i++) {
        out[i] = buffer[i] ^ BUX_MASK[i % 3];
    }
    return out;
}
