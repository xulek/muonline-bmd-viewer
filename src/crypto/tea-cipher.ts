export class TEACipher {
    private readonly k: Uint32Array;
    private static readonly BLOCK_SIZE = 8;
    private static readonly DELTA = 0x9E3779B9;
    private static readonly ROUNDS = 32;

    constructor(key: Uint8Array) {
        const kv = new DataView(key.buffer, key.byteOffset, 16);
        this.k = new Uint32Array(4);
        for (let i = 0; i < 4; i++) {
            this.k[i] = kv.getUint32(i * 4, false); // big-endian (matches BouncyCastle Pack.BE_To_UInt32)
        }
    }

    getBlockSize(): number {
        return TEACipher.BLOCK_SIZE;
    }

    /**
     * Standard TEA decryption matching BouncyCastle TeaEngine.
     * NOT XTEA — TEA uses 3 XOR terms and fixed key indices per half.
     */
    decryptBlock(src: Uint8Array, srcOff: number, dst: Uint8Array, dstOff: number): void {
        const view = new DataView(src.buffer, src.byteOffset + srcOff, 8);
        let v0 = view.getUint32(0, false); // big-endian
        let v1 = view.getUint32(4, false);

        const k0 = this.k[0], k1 = this.k[1], k2 = this.k[2], k3 = this.k[3];
        let sum = (TEACipher.DELTA * TEACipher.ROUNDS) >>> 0; // 0xC6EF3720

        for (let i = 0; i < TEACipher.ROUNDS; i++) {
            v1 = (v1 - ((((v0 << 4) + k2) ^ (v0 + sum) ^ ((v0 >>> 5) + k3)))) >>> 0;
            v0 = (v0 - ((((v1 << 4) + k0) ^ (v1 + sum) ^ ((v1 >>> 5) + k1)))) >>> 0;
            sum = (sum - TEACipher.DELTA) >>> 0;
        }

        const out = new DataView(dst.buffer, dst.byteOffset + dstOff, 8);
        out.setUint32(0, v0, false);
        out.setUint32(4, v1, false);
    }

    blockDecrypt(inBuf: Uint8Array, len: number, outBuf: Uint8Array): void {
        for (let i = 0; i < len; i += TEACipher.BLOCK_SIZE) {
            this.decryptBlock(inBuf, i, outBuf, i);
        }
    }
}
