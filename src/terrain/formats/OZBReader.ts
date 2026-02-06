export interface OZBData {
    width: number;
    height: number;
    data: Uint8Array; // RGBA flat array (width * height * 4)
}

export function readOZB(buffer: ArrayBuffer): OZBData {
    const view = new DataView(buffer);
    const u8 = new Uint8Array(buffer);

    const fileType = String.fromCharCode(u8[0], u8[1], u8[2]);
    const version = u8[3];

    let offset = 4;

    // BMP header (14 bytes)
    const bmpType = view.getInt16(offset, true); offset += 2;
    const bmpSize = view.getInt32(offset, true); offset += 4;
    const res1 = view.getInt16(offset, true); offset += 2;
    const res2 = view.getInt16(offset, true); offset += 2;
    const offBits = view.getInt32(offset, true); offset += 4;

    // BMP info header (40 bytes)
    const biSize = view.getInt32(offset, true); offset += 4;
    const width = view.getInt32(offset, true); offset += 4;
    const height = view.getInt32(offset, true); offset += 4;
    const planes = view.getInt16(offset, true); offset += 2;
    const bitCount = view.getInt16(offset, true); offset += 2;
    offset += 20; // skip compression, sizeImage, xpels, ypels, clrUsed, clrImportant

    if (fileType === 'BM8' || fileType === 'BM\x18') {
        offset = 4 + 14 + 40 + 1026;

        const pixelCount = width * height;
        const data = new Uint8Array(pixelCount * 4);
        for (let i = 0; i < pixelCount; i++) {
            const v = u8[offset++];
            data[i * 4]     = v;
            data[i * 4 + 1] = 0;
            data[i * 4 + 2] = 0;
            data[i * 4 + 3] = 255;
        }
        return { width, height, data };
    } else if (fileType === 'BM6') {
        const pixelCount = width * height;
        const data = new Uint8Array(pixelCount * 4);
        for (let i = 0; i < pixelCount; i++) {
            const b = u8[offset++];
            const g = u8[offset++];
            const r = u8[offset++];
            data[i * 4]     = r;
            data[i * 4 + 1] = g;
            data[i * 4 + 2] = b;
            data[i * 4 + 3] = 255;
        }
        return { width, height, data };
    } else {
        throw new Error(`Unknown OZB file type: "${fileType}"`);
    }
}
