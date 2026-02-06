export class ThreeWayCipher {
    private readonly k = new Uint32Array(3);
    private static readonly ROUNDS = 11;
    private static readonly START_D = 0xB1B1;
    private static readonly BLOCK_SIZE = 12;

    constructor(key: Uint8Array) {
        for (let i = 0; i < 3; i++) {
            this.k[i] = ((key[4 * i + 3]) |
                         (key[4 * i + 2] << 8) |
                         (key[4 * i + 1] << 16) |
                         (key[4 * i] << 24)) >>> 0;
        }
        const tk = { a0: this.k[0], a1: this.k[1], a2: this.k[2] };
        theta(tk);
        mu(tk);
        this.k[0] = reverseBytes(tk.a0);
        this.k[1] = reverseBytes(tk.a1);
        this.k[2] = reverseBytes(tk.a2);
    }

    getBlockSize(): number {
        return ThreeWayCipher.BLOCK_SIZE;
    }

    blockDecrypt(inBuf: Uint8Array, len: number, outBuf: Uint8Array): void {
        for (let i = 0; i < len; i += ThreeWayCipher.BLOCK_SIZE) {
            this.decryptBlock(inBuf, i, outBuf, i);
        }
    }

    private decryptBlock(inBuf: Uint8Array, inOff: number, outBuf: Uint8Array, outOff: number): void {
        const iv = new DataView(inBuf.buffer, inBuf.byteOffset + inOff, 12);
        const t = {
            a0: iv.getUint32(0, true),
            a1: iv.getUint32(4, true),
            a2: iv.getUint32(8, true),
        };

        let rc = ThreeWayCipher.START_D;
        mu(t);

        for (let i = 0; i < ThreeWayCipher.ROUNDS; i++) {
            t.a0 = (t.a0 ^ this.k[0] ^ (rc << 16)) >>> 0;
            t.a1 = (t.a1 ^ this.k[1]) >>> 0;
            t.a2 = (t.a2 ^ this.k[2] ^ rc) >>> 0;
            rho(t);
            rc = (rc << 1) >>> 0;
            if (rc & 0x10000) rc ^= 0x11011;
            rc &= 0xFFFF;
        }

        t.a0 = (t.a0 ^ this.k[0] ^ (rc << 16)) >>> 0;
        t.a1 = (t.a1 ^ this.k[1]) >>> 0;
        t.a2 = (t.a2 ^ this.k[2] ^ rc) >>> 0;
        theta(t);
        mu(t);

        const ov = new DataView(outBuf.buffer, outBuf.byteOffset + outOff, 12);
        ov.setUint32(0, t.a0, true);
        ov.setUint32(4, t.a1, true);
        ov.setUint32(8, t.a2, true);
    }
}

interface Triple { a0: number; a1: number; a2: number; }

function reverseBytes(x: number): number {
    return (((x & 0x000000FF) << 24) |
            ((x & 0x0000FF00) << 8) |
            ((x & 0x00FF0000) >>> 8) |
            ((x & 0xFF000000) >>> 24)) >>> 0;
}

function reverseBits(a: number): number {
    a = (((a & 0xAAAAAAAA) >>> 1) | ((a & 0x55555555) << 1)) >>> 0;
    a = (((a & 0xCCCCCCCC) >>> 2) | ((a & 0x33333333) << 2)) >>> 0;
    return (((a & 0xF0F0F0F0) >>> 4) | ((a & 0x0F0F0F0F) << 4)) >>> 0;
}

function rotl(x: number, n: number): number {
    return ((x << n) | (x >>> (32 - n))) >>> 0;
}

function theta(t: Triple): void {
    const c0 = (t.a0 ^ t.a1 ^ t.a2) >>> 0;
    const c = (rotl(c0, 16) ^ rotl(c0, 8)) >>> 0;
    const b0 = (((t.a0 << 24) ^ (t.a2 >>> 8) ^ (t.a1 << 8) ^ (t.a0 >>> 24)) >>> 0);
    const b1 = (((t.a1 << 24) ^ (t.a0 >>> 8) ^ (t.a2 << 8) ^ (t.a1 >>> 24)) >>> 0);
    t.a0 = (t.a0 ^ c ^ b0) >>> 0;
    t.a1 = (t.a1 ^ c ^ b1) >>> 0;
    t.a2 = (t.a2 ^ c ^ ((b0 >>> 16) ^ (b1 << 16))) >>> 0;
}

function mu(t: Triple): void {
    t.a1 = reverseBits(t.a1);
    const tmp = reverseBits(t.a0);
    t.a0 = reverseBits(t.a2);
    t.a2 = tmp;
}

function piGammaPi(t: Triple): void {
    const b2 = rotl(t.a2, 1);
    const b0 = rotl(t.a0, 22);
    t.a0 = rotl((b0 ^ (t.a1 | (~b2 >>> 0))) >>> 0, 1);
    t.a2 = rotl((b2 ^ (b0 | (~t.a1 >>> 0))) >>> 0, 22);
    t.a1 = (t.a1 ^ (b2 | (~b0 >>> 0))) >>> 0;
}

function rho(t: Triple): void {
    theta(t);
    piGammaPi(t);
}
