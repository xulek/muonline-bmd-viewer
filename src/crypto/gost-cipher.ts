// GOST 28147-89 block cipher - decryption only
// 64-bit block, 256-bit key, 32 rounds, little-endian byte order

// S-box: 8 rows of 16 entries (4-bit input -> 4-bit output)
// prettier-ignore
const SBOX: ReadonlyArray<ReadonlyArray<number>> = [
    [ 4, 10,  9,  2, 13,  8,  0, 14,  6, 11,  1, 12,  7, 15,  5,  3],
    [14, 11,  4, 12,  6, 13, 15, 10,  2,  3,  8,  1,  0,  7,  5,  9],
    [ 5,  8,  1, 13, 10,  3,  4,  2, 14, 15, 12,  7,  6,  0,  9, 11],
    [ 7, 13, 10,  1,  0,  8,  9, 15, 14,  4,  6, 12, 11,  2,  5,  3],
    [ 6, 12,  7,  1,  5, 15, 13,  8,  4, 10,  9, 14,  0,  3, 11,  2],
    [ 4, 11, 10,  0,  7,  2,  1, 13,  3,  6,  8,  5,  9, 12, 15, 14],
    [13, 11,  4,  1,  3, 15,  5,  9,  0, 10, 14,  7,  6,  8,  2, 12],
    [ 1, 15, 13,  0,  5,  7, 10,  4,  9,  2,  3, 14,  6, 11,  8, 12],
];

// Pre-computed lookup tables: combine pairs of 4-bit S-boxes into
// 8-bit -> 8-bit tables. 4 tables of 256 entries for the 4 bytes.
// Table k combines SBOX[2*k] (low nibble) and SBOX[2*k+1] (high nibble).
const LOOKUP = buildLookupTables();

function buildLookupTables(): Uint32Array[] {
    const tables: Uint32Array[] = [];
    for (let k = 0; k < 4; k++) {
        const table = new Uint32Array(256);
        const sLow = SBOX[2 * k];
        const sHigh = SBOX[2 * k + 1];
        for (let i = 0; i < 256; i++) {
            const lo = sLow[i & 0x0F];
            const hi = sHigh[(i >>> 4) & 0x0F];
            table[i] = (lo | (hi << 4)) << (8 * k);
        }
        tables.push(table);
    }
    return tables;
}

function sboxSubstitute(value: number): number {
    return (
        LOOKUP[0][value & 0xFF] |
        LOOKUP[1][(value >>> 8) & 0xFF] |
        LOOKUP[2][(value >>> 16) & 0xFF] |
        LOOKUP[3][(value >>> 24) & 0xFF]
    ) >>> 0;
}

function rotl11(x: number): number {
    return ((x << 11) | (x >>> 21)) >>> 0;
}

function readU32LE(buf: Uint8Array, off: number): number {
    return (buf[off] | (buf[off + 1] << 8) | (buf[off + 2] << 16) | (buf[off + 3] << 24)) >>> 0;
}

function writeU32LE(val: number, buf: Uint8Array, off: number): void {
    buf[off] = val & 0xFF;
    buf[off + 1] = (val >>> 8) & 0xFF;
    buf[off + 2] = (val >>> 16) & 0xFF;
    buf[off + 3] = (val >>> 24) & 0xFF;
}

export class GOSTCipher {
    private static readonly BLOCK_SIZE = 8;
    private static readonly ROUNDS = 32;

    private readonly K: Uint32Array;
    private readonly decryptSchedule: Uint32Array;

    constructor(key: Uint8Array) {
        // Read 8 x 32-bit key words in little-endian
        this.K = new Uint32Array(8);
        for (let i = 0; i < 8; i++) {
            this.K[i] = readU32LE(key, i * 4);
        }

        // Pre-compute decryption key schedule (32 rounds):
        // Rounds  1-8:  K[0], K[1], K[2], K[3], K[4], K[5], K[6], K[7]
        // Rounds  9-32: K[7], K[6], K[5], K[4], K[3], K[2], K[1], K[0] repeated 3 times
        this.decryptSchedule = new Uint32Array(GOSTCipher.ROUNDS);
        for (let i = 0; i < 8; i++) {
            this.decryptSchedule[i] = this.K[i];
        }
        for (let rep = 0; rep < 3; rep++) {
            for (let i = 0; i < 8; i++) {
                this.decryptSchedule[8 + rep * 8 + i] = this.K[7 - i];
            }
        }
    }

    getBlockSize(): number {
        return GOSTCipher.BLOCK_SIZE;
    }

    blockDecrypt(inBuf: Uint8Array, len: number, outBuf: Uint8Array): void {
        for (let i = 0; i < len; i += GOSTCipher.BLOCK_SIZE) {
            this.decryptBlock(inBuf, i, outBuf, i);
        }
    }

    private decryptBlock(src: Uint8Array, srcOff: number, dst: Uint8Array, dstOff: number): void {
        let n1 = readU32LE(src, srcOff);
        let n2 = readU32LE(src, srcOff + 4);

        const ks = this.decryptSchedule;

        // Rounds 1..31: swap halves
        for (let i = 0; i < 31; i++) {
            const temp = (n1 + ks[i]) >>> 0;
            const substituted = sboxSubstitute(temp);
            const rotated = rotl11(substituted);
            const newN1 = (n2 ^ rotated) >>> 0;
            n2 = n1;
            n1 = newN1;
        }

        // Round 32 (last): no swap
        {
            const temp = (n1 + ks[31]) >>> 0;
            const substituted = sboxSubstitute(temp);
            const rotated = rotl11(substituted);
            n2 = (n2 ^ rotated) >>> 0;
            // n1 stays as-is
        }

        writeU32LE(n1, dst, dstOff);
        writeU32LE(n2, dst, dstOff + 4);
    }
}
