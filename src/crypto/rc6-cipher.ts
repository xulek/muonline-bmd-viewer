// RC6 block cipher (w=32, r=20) - decryption only
// Reference: "The RC6 Block Cipher" by Rivest, Robshaw, Sidney, Yin (1998)

export class RC6Cipher {
    private static readonly BLOCK_SIZE = 16; // 4 words * 4 bytes
    private static readonly ROUNDS = 20;
    private static readonly P32 = 0xB7E15163;
    private static readonly Q32 = 0x9E3779B9;

    private readonly S: Uint32Array;

    constructor(key: Uint8Array) {
        // Use first 16 bytes of key
        const keyBytes = key.slice(0, 16);
        this.S = this.expandKey(keyBytes);
    }

    getBlockSize(): number {
        return RC6Cipher.BLOCK_SIZE;
    }

    blockDecrypt(inBuf: Uint8Array, len: number, outBuf: Uint8Array): void {
        for (let i = 0; i < len; i += RC6Cipher.BLOCK_SIZE) {
            this.decryptBlock(inBuf, i, outBuf, i);
        }
    }

    private expandKey(key: Uint8Array): Uint32Array {
        const r = RC6Cipher.ROUNDS;
        const c = Math.max(key.length / 4, 1);
        const L = new Uint32Array(c);

        // Load key into L[] in little-endian
        for (let i = key.length - 1; i >= 0; i--) {
            L[Math.floor(i / 4)] = ((L[Math.floor(i / 4)] << 8) + key[i]) >>> 0;
        }

        const sLen = 2 * r + 4;
        const S = new Uint32Array(sLen);
        S[0] = RC6Cipher.P32;
        for (let i = 1; i < sLen; i++) {
            S[i] = (S[i - 1] + RC6Cipher.Q32) >>> 0;
        }

        let A = 0, B = 0, ii = 0, jj = 0;
        const v = 3 * Math.max(sLen, c);
        for (let s = 0; s < v; s++) {
            A = S[ii] = rotl((S[ii] + A + B) >>> 0, 3);
            B = L[jj] = rotl((L[jj] + A + B) >>> 0, (A + B) & 31);
            ii = (ii + 1) % sLen;
            jj = (jj + 1) % c;
        }

        return S;
    }

    private decryptBlock(src: Uint8Array, srcOff: number, dst: Uint8Array, dstOff: number): void {
        const r = RC6Cipher.ROUNDS;
        const S = this.S;
        const view = new DataView(src.buffer, src.byteOffset + srcOff, 16);

        let A = view.getUint32(0, true);
        let B = view.getUint32(4, true);
        let C = view.getUint32(8, true);
        let D = view.getUint32(12, true);

        C = (C - S[2 * r + 3]) >>> 0;
        A = (A - S[2 * r + 2]) >>> 0;

        for (let i = r; i >= 1; i--) {
            // Rotate ABCD right: (A,B,C,D) = (D,A,B,C)
            const temp = D;
            D = C;
            C = B;
            B = A;
            A = temp;

            const u = rotl(mul32(D, (2 * D + 1) >>> 0), 5);
            const t = rotl(mul32(B, (2 * B + 1) >>> 0), 5);
            C = (rotr((C - S[2 * i + 1]) >>> 0, t & 31) ^ u) >>> 0;
            A = (rotr((A - S[2 * i]) >>> 0, u & 31) ^ t) >>> 0;
        }

        D = (D - S[1]) >>> 0;
        B = (B - S[0]) >>> 0;

        const out = new DataView(dst.buffer, dst.byteOffset + dstOff, 16);
        out.setUint32(0, A, true);
        out.setUint32(4, B, true);
        out.setUint32(8, C, true);
        out.setUint32(12, D, true);
    }
}

function rotl(x: number, n: number): number {
    return ((x << n) | (x >>> (32 - n))) >>> 0;
}

function rotr(x: number, n: number): number {
    return ((x >>> n) | (x << (32 - n))) >>> 0;
}

// 32-bit unsigned multiply (low 32 bits)
function mul32(a: number, b: number): number {
    return Math.imul(a, b) >>> 0;
}
