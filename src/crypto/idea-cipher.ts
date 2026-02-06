// IDEA (International Data Encryption Algorithm) block cipher - decryption only
// Reference: Xuejia Lai & James Massey (1991)

export class IDEACipher {
    private static readonly BLOCK_SIZE = 8;
    private static readonly ROUNDS = 8;
    private static readonly SUBKEYS = 52; // 8 rounds * 6 + 4 output transform

    private readonly decryptKeys: Uint16Array;

    constructor(key: Uint8Array) {
        const encKeys = expandKey(key);
        this.decryptKeys = invertKeys(encKeys);
    }

    getBlockSize(): number {
        return IDEACipher.BLOCK_SIZE;
    }

    blockDecrypt(inBuf: Uint8Array, len: number, outBuf: Uint8Array): void {
        for (let i = 0; i < len; i += IDEACipher.BLOCK_SIZE) {
            this.decryptBlock(inBuf, i, outBuf, i);
        }
    }

    /**
     * Decrypt a single 8-byte block using the IDEA algorithm with decryption subkeys.
     * Since decryption subkeys are the inverse schedule, we run the same forward
     * IDEA cipher core (8 rounds + output transform).
     */
    private decryptBlock(src: Uint8Array, srcOff: number, dst: Uint8Array, dstOff: number): void {
        const view = new DataView(src.buffer, src.byteOffset + srcOff, 8);
        const K = this.decryptKeys;

        // Read 4 x 16-bit subblocks in big-endian.
        // Naming/order follows BouncyCastle IdeaEngine (x0..x3).
        let x0 = view.getUint16(0, false);
        let x1 = view.getUint16(2, false);
        let x2 = view.getUint16(4, false);
        let x3 = view.getUint16(6, false);

        let p = 0;

        for (let round = 0; round < IDEACipher.ROUNDS; round++) {
            x0 = mulMod(x0, K[p++]);
            x1 = addMod(x1, K[p++]);
            x2 = addMod(x2, K[p++]);
            x3 = mulMod(x3, K[p++]);

            const t0 = x1;
            const t1 = x2;

            x2 = x2 ^ x0;
            x1 = x1 ^ x3;

            x2 = mulMod(x2, K[p++]);
            x1 = addMod(x1, x2);
            x1 = mulMod(x1, K[p++]);
            x2 = addMod(x2, x1);

            x0 = x0 ^ x1;
            x3 = x3 ^ x2;
            x1 = x1 ^ t1;
            x2 = x2 ^ t0;
        }

        // Output transform.
        const X1 = mulMod(x0, K[p++]);
        const X2 = addMod(x2, K[p++]);
        const X3 = addMod(x1, K[p++]);
        const X4 = mulMod(x3, K[p++]);

        // Write 4 x 16-bit subblocks in big-endian
        const out = new DataView(dst.buffer, dst.byteOffset + dstOff, 8);
        out.setUint16(0, X1, false);
        out.setUint16(2, X2, false);
        out.setUint16(4, X3, false);
        out.setUint16(6, X4, false);
    }
}

/**
 * Expand a 128-bit (16-byte) key into 52 x 16-bit encryption subkeys.
 *
 * The first 8 subkeys are the key read as 8 big-endian 16-bit words.
 * Then the 128-bit key register is cyclically rotated left by 25 bits,
 * and the next 8 subkeys are read, repeating until all 52 are generated.
 */
function expandKey(key: Uint8Array): Uint16Array {
    const Z = new Uint16Array(52);
    const kv = new DataView(key.buffer, key.byteOffset, 16);

    // First 8 subkeys: straight from the key (big-endian 16-bit words)
    for (let i = 0; i < 8; i++) {
        Z[i] = kv.getUint16(i * 2, false);
    }

    // Subsequent subkeys via 25-bit left rotation of the 128-bit key register.
    // In terms of the 16-bit subkey array, a 25-bit left shift is equivalent to
    // shifting by 1 word (16 bits) + 9 more bits. So:
    //   Z[i] = ((Z[i-7] << 9) | (Z[i-6] >>> 7)) & 0xFFFF
    // except at group boundaries (every 8 keys) where i-6 wraps around:
    //   when (i % 8) == 6: Z[i] = ((Z[i-7] << 9) | (Z[i-14] >>> 7)) & 0xFFFF
    //   when (i % 8) == 7: Z[i] = ((Z[i-7] << 9) | (Z[i-14] >>> 7)) & 0xFFFF
    for (let i = 8; i < 52; i++) {
        if ((i & 7) === 6) {
            Z[i] = ((Z[i - 7] << 9) | (Z[i - 14] >>> 7)) & 0xFFFF;
        } else if ((i & 7) === 7) {
            Z[i] = ((Z[i - 15] << 9) | (Z[i - 14] >>> 7)) & 0xFFFF;
        } else {
            Z[i] = ((Z[i - 7] << 9) | (Z[i - 6] >>> 7)) & 0xFFFF;
        }
    }

    return Z;
}

/**
 * Derive 52 decryption subkeys from 52 encryption subkeys.
 *
 * The decryption key schedule reverses the round order and applies
 * multiplicative inverse (mod 65537) and additive inverse (mod 65536)
 * to the appropriate subkeys. The inner two addition subkeys are swapped
 * for rounds 2 through 8 (all except the first round of decryption).
 */
function invertKeys(enc: Uint16Array): Uint16Array {
    const dec = new Uint16Array(52);
    let p = 0;
    let q = 52;

    // Inverse of first encryption round keys goes to decryption output transform (written backward).
    let t1 = mulInverse(enc[p++]);
    let t2 = addInverse(enc[p++]);
    let t3 = addInverse(enc[p++]);
    let t4 = mulInverse(enc[p++]);
    dec[--q] = t4;
    dec[--q] = t3;
    dec[--q] = t2;
    dec[--q] = t1;

    // Middle 7 rounds.
    for (let r = 1; r < 8; r++) {
        t1 = enc[p++];
        t2 = enc[p++];
        dec[--q] = t2;
        dec[--q] = t1;

        t1 = mulInverse(enc[p++]);
        t2 = addInverse(enc[p++]);
        t3 = addInverse(enc[p++]);
        t4 = mulInverse(enc[p++]);
        dec[--q] = t4;
        dec[--q] = t2;
        dec[--q] = t3;
        dec[--q] = t1;
    }

    // Final pair + input transform inverse.
    t1 = enc[p++];
    t2 = enc[p++];
    dec[--q] = t2;
    dec[--q] = t1;

    t1 = mulInverse(enc[p++]);
    t2 = addInverse(enc[p++]);
    t3 = addInverse(enc[p++]);
    t4 = mulInverse(enc[p++]);
    dec[--q] = t4;
    dec[--q] = t3;
    dec[--q] = t2;
    dec[--q] = t1;

    return dec;
}

/**
 * Multiplication modulo 65537 (2^16 + 1).
 * In IDEA, 0 represents 2^16 (65536).
 */
function mulMod(a: number, b: number): number {
    a = a & 0xFFFF;
    b = b & 0xFFFF;

    if (a === 0) a = 0x10000;
    if (b === 0) b = 0x10000;

    const r = (a * b) % 0x10001;

    return r === 0x10000 ? 0 : r & 0xFFFF;
}

/**
 * Addition modulo 65536 (2^16).
 */
function addMod(a: number, b: number): number {
    return (a + b) & 0xFFFF;
}

/**
 * Multiplicative inverse modulo 65537 using the extended Euclidean algorithm.
 * inv(0) = 0 (since 0 represents 65536, and 65536^2 mod 65537 = 1).
 * inv(1) = 1.
 */
function mulInverse(x: number): number {
    x = x & 0xFFFF;
    if (x <= 1) return x;

    let t1 = Math.floor(0x10001 / x);
    let y = 0x10001 % x;

    if (y === 1) return (0x10001 - t1) & 0xFFFF;

    let t0 = 1;
    while (y !== 1) {
        const q = Math.floor(x / y);
        x = x % y;
        t0 = (t0 + q * t1) % 0x10001;
        if (x === 1) return t0 & 0xFFFF;
        const q2 = Math.floor(y / x);
        y = y % x;
        t1 = (t1 + q2 * t0) % 0x10001;
    }

    return (0x10001 - t1) & 0xFFFF;
}

/**
 * Additive inverse modulo 65536.
 */
function addInverse(x: number): number {
    return (0x10000 - (x & 0xFFFF)) & 0xFFFF;
}
