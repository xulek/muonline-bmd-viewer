// src/crypto/modulus-cryptor.ts
import { TEACipher } from './tea-cipher';
import { ThreeWayCipher } from './threeway-cipher';
import { RC6Cipher } from './rc6-cipher';

interface Cipher {
    getBlockSize(): number;
    blockDecrypt(inBuf: Uint8Array, len: number, outBuf: Uint8Array): void;
}

function initCipher(algorithm: number, key: Uint8Array): Cipher {
    switch (algorithm & 7) {
        case 0: return new TEACipher(key);
        case 1: return new ThreeWayCipher(key);
        // case 2: CAST5 - add if needed
        // case 3: RC5 - add if needed
        case 4: return new RC6Cipher(key);
        // cases 5-7: MARS, IDEA, GOST - add if needed
        default:
            throw new Error(`Unsupported ModulusCryptor algorithm: ${algorithm & 7}`);
    }
}

const KEY_1 = new TextEncoder().encode('webzen#@!01webzen#@!01webzen#@!0'); // 32 bytes

export function decryptModulusCryptor(source: Uint8Array): Uint8Array {
    if (source.length < 34) {
        throw new Error('ModulusCryptor: source buffer too short');
    }

    const buf = new Uint8Array(source); // clone

    const algorithm1 = buf[1];
    const algorithm2 = buf[0];
    const size = buf.length;
    const dataSize = size - 34;

    // Stage 1: partially decrypt to recover key_2
    const cipher1 = initCipher(algorithm1, KEY_1);
    const blockSize = 1024 - (1024 % cipher1.getBlockSize());

    if (dataSize > 4 * blockSize) {
        const index = 2 + (dataSize >>> 1);
        const block = buf.slice(index, index + blockSize);
        cipher1.blockDecrypt(block, block.length, block);
        buf.set(block, index);
    }

    if (dataSize > blockSize) {
        // End block
        let index = size - blockSize;
        let block = buf.slice(index, index + blockSize);
        cipher1.blockDecrypt(block, block.length, block);
        buf.set(block, index);

        // Start block
        index = 2;
        block = buf.slice(index, index + blockSize);
        cipher1.blockDecrypt(block, block.length, block);
        buf.set(block, index);
    }

    // Extract key_2 (bytes 2..33)
    const key2 = buf.slice(2, 34);

    // Stage 2: decrypt actual data using key_2
    const cipher2 = initCipher(algorithm2, key2);
    const decryptSize = dataSize - (dataSize % cipher2.getBlockSize());

    if (decryptSize > 0) {
        const dataStart = 34;
        const block = buf.slice(dataStart, dataStart + decryptSize);
        cipher2.blockDecrypt(block, block.length, block);
        buf.set(block, dataStart);
    }

    // Return data without 34-byte header
    return buf.slice(34);
}
