// RC5 block cipher (w=32, r=16) - decryption only
// Reference: "The RC5 Encryption Algorithm" by Rivest (1994)

export class RC5Cipher {
    private static readonly BLOCK_SIZE = 8; // 2 words * 4 bytes
    private static readonly ROUNDS = 16;
    private static readonly P32 = 0xB7E15163;
    private static readonly Q32 = 0x9E3779B9;

    private readonly S: Uint32Array;

    constructor(key: Uint8Array) {
        const keyBytes = key.slice(0, 16);
        this.S = this.expandKey(keyBytes);
    }

    getBlockSize(): number {
        return RC5Cipher.BLOCK_SIZE;
    }

    blockDecrypt(inBuf: Uint8Array, len: number, outBuf: Uint8Array): void {
        for (let i = 0; i < len; i += RC5Cipher.BLOCK_SIZE) {
            this.decryptBlock(inBuf, i, outBuf, i);
        }
    }

    private expandKey(key: Uint8Array): Uint32Array {
        const r = RC5Cipher.ROUNDS;
        const c = Math.max(key.length / 4, 1);
        const L = new Uint32Array(c);

        // Load key into L[] in little-endian
        for (let i = key.length - 1; i >= 0; i--) {
            L[Math.floor(i / 4)] = ((L[Math.floor(i / 4)] << 8) + key[i]) >>> 0;
        }

        const sLen = 2 * (r + 1);
        const S = new Uint32Array(sLen);
        S[0] = RC5Cipher.P32;
        for (let i = 1; i < sLen; i++) {
            S[i] = (S[i - 1] + RC5Cipher.Q32) >>> 0;
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
        const r = RC5Cipher.ROUNDS;
        const S = this.S;
        const view = new DataView(src.buffer, src.byteOffset + srcOff, 8);

        let A = view.getUint32(0, true);
        let B = view.getUint32(4, true);

        for (let i = r; i >= 1; i--) {
            B = (rotr((B - S[2 * i + 1]) >>> 0, A & 31) ^ A) >>> 0;
            A = (rotr((A - S[2 * i]) >>> 0, B & 31) ^ B) >>> 0;
        }

        B = (B - S[1]) >>> 0;
        A = (A - S[0]) >>> 0;

        const out = new DataView(dst.buffer, dst.byteOffset + dstOff, 8);
        out.setUint32(0, A, true);
        out.setUint32(4, B, true);
    }
}

function rotl(x: number, n: number): number {
    return ((x << n) | (x >>> (32 - n))) >>> 0;
}

function rotr(x: number, n: number): number {
    return ((x >>> n) | (x << (32 - n))) >>> 0;
}
