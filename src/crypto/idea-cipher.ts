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

        // Read 4 x 16-bit subblocks in big-endian
        let X1 = view.getUint16(0, false);
        let X2 = view.getUint16(2, false);
        let X3 = view.getUint16(4, false);
        let X4 = view.getUint16(6, false);

        let ki = 0;

        for (let round = 0; round < IDEACipher.ROUNDS; round++) {
            // Steps 1-4: Apply round subkeys
            X1 = mulMod(X1, K[ki++]);
            X2 = addMod(X2, K[ki++]);
            X3 = addMod(X3, K[ki++]);
            X4 = mulMod(X4, K[ki++]);

            // Steps 5-6: XOR pairs
            let t0 = X1 ^ X3;
            let t1 = X2 ^ X4;

            // Steps 7-10: MA (Multiplication-Addition) structure
            t0 = mulMod(t0, K[ki++]);
            t1 = addMod(t0, t1);
            t1 = mulMod(t1, K[ki++]);
            t0 = addMod(t0, t1);

            // Steps 11-14: XOR results back, with implicit X2/X3 swap
            X1 = X1 ^ t1;
            X3 = X3 ^ t1;
            const tmp = X2 ^ t0;
            X2 = X3 ^ t0;
            X3 = tmp;
            X4 = X4 ^ t0;
        }

        // Undo the last swap (X2 and X3 should not be swapped after the final round)
        const tmp = X2;
        X2 = X3;
        X3 = tmp;

        // Output transformation
        X1 = mulMod(X1, K[ki++]);
        X2 = addMod(X2, K[ki++]);
        X3 = addMod(X3, K[ki++]);
        X4 = mulMod(X4, K[ki++]);

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
            Z[i] = ((Z[i - 7] << 9) | (Z[i - 14] >>> 7)) & 0xFFFF;
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

    // We fill dec[] from the end backward. The encryption subkeys are read
    // from the beginning forward.
    //
    // Encryption layout:
    //   enc[0..5]   = round 1 keys: K1(mul), K2(add), K3(add), K4(mul), K5(mul-MA), K6(mul-MA)
    //   enc[6..11]  = round 2 keys
    //   ...
    //   enc[42..47] = round 8 keys
    //   enc[48..51] = output transform: K49(mul), K50(add), K51(add), K52(mul)
    //
    // Decryption layout (same structure, fed into same cipher core):
    //   dec[0..5]   = dec round 1
    //   ...
    //   dec[42..47] = dec round 8
    //   dec[48..51] = dec output transform

    let ei = 0; // encryption key read index
    let di = 48; // decryption key write index (start at output transform)

    // Decryption output transform <- inverse of encryption round 1 first 4 keys
    dec[di + 0] = mulInverse(enc[ei++]); // inv(K1)
    dec[di + 1] = addInverse(enc[ei++]); // -K2
    dec[di + 2] = addInverse(enc[ei++]); // -K3
    dec[di + 3] = mulInverse(enc[ei++]); // inv(K4)

    // Process 8 rounds in reverse
    for (let r = 7; r >= 0; r--) {
        di = r * 6;

        // MA subkeys (positions 4,5) come directly from encryption round
        dec[di + 4] = enc[ei++]; // K5 of current enc round
        dec[di + 5] = enc[ei++]; // K6 of current enc round

        // Round subkeys (positions 0-3): inverse of next enc round's first 4 keys
        dec[di + 0] = mulInverse(enc[ei++]); // inv(K1 of next enc round)

        if (r === 0) {
            // First decryption round (last to be written): no swap of add keys
            dec[di + 1] = addInverse(enc[ei++]); // -K2
            dec[di + 2] = addInverse(enc[ei++]); // -K3
        } else {
            // All other decryption rounds: swap the two addition keys
            dec[di + 2] = addInverse(enc[ei++]); // -K2 goes to position 2 (swapped)
            dec[di + 1] = addInverse(enc[ei++]); // -K3 goes to position 1 (swapped)
        }

        dec[di + 3] = mulInverse(enc[ei++]); // inv(K4 of next enc round)
    }

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
