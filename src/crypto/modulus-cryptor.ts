// src/crypto/modulus-cryptor.ts
import { TEACipher } from './tea-cipher';
import { ThreeWayCipher } from './threeway-cipher';
import { CAST5Cipher } from './cast5-cipher';
import { RC5Cipher } from './rc5-cipher';
import { RC6Cipher } from './rc6-cipher';
import { MARSCipher } from './mars-cipher';
import { IDEACipher } from './idea-cipher';
import { GOSTCipher } from './gost-cipher';

interface Cipher {
    getBlockSize(): number;
    blockDecrypt(inBuf: Uint8Array, len: number, outBuf: Uint8Array): void;
}

function initCipher(algorithm: number, key: Uint8Array): Cipher {
    switch (algorithm & 7) {
        case 0: return new TEACipher(key);
        case 1: return new ThreeWayCipher(key);
        case 2: return new CAST5Cipher(key);
        case 3: return new RC5Cipher(key);
        case 4: return new RC6Cipher(key);
        case 5: return new MARSCipher(key);
        case 6: return new IDEACipher(key);
        case 7: return new GOSTCipher(key);
        default:
            throw new Error(`Unsupported ModulusCryptor algorithm: ${algorithm & 7}`);
    }
}

const KEY_1 = new TextEncoder().encode('webzen#@!01webzen#@!01webzen#@!0'); // 32 bytes

const CIPHER_NAMES = ['TEA', 'ThreeWay', 'CAST5', 'RC5', 'RC6', 'MARS', 'IDEA', 'GOST'];

export function decryptModulusCryptor(source: Uint8Array): Uint8Array {
    if (source.length < 34) {
        throw new Error('ModulusCryptor: source buffer too short');
    }

    const buf = new Uint8Array(source); // clone

    const algorithm1 = buf[1];
    const algorithm2 = buf[0];
    const size = buf.length;
    const dataSize = size - 34;

    console.log(`[ModulusCryptor] size=${size}, dataSize=${dataSize}, algo1=${algorithm1}(${CIPHER_NAMES[algorithm1 & 7]}), algo2=${algorithm2}(${CIPHER_NAMES[algorithm2 & 7]})`);

    // Stage 1: partially decrypt to recover key_2
    const cipher1 = initCipher(algorithm1, KEY_1);
    const blockSize = 1024 - (1024 % cipher1.getBlockSize());
    console.log(`[ModulusCryptor] Stage1: cipher=${CIPHER_NAMES[algorithm1 & 7]}, blockSize=${blockSize}, cipherBlockSize=${cipher1.getBlockSize()}`);

    if (dataSize > 4 * blockSize) {
        const index = 2 + (dataSize >>> 1);
        console.log(`[ModulusCryptor] Stage1: middle block at index=${index}, len=${blockSize}`);
        const block = buf.slice(index, index + blockSize);
        cipher1.blockDecrypt(block, block.length, block);
        buf.set(block, index);
    }

    if (dataSize > blockSize) {
        // End block
        let index = size - blockSize;
        console.log(`[ModulusCryptor] Stage1: end block at index=${index}, len=${blockSize}`);
        let block = buf.slice(index, index + blockSize);
        cipher1.blockDecrypt(block, block.length, block);
        buf.set(block, index);

        // Start block
        index = 2;
        console.log(`[ModulusCryptor] Stage1: start block at index=${index}, len=${blockSize}`);
        block = buf.slice(index, index + blockSize);
        cipher1.blockDecrypt(block, block.length, block);
        buf.set(block, index);
    }

    // Extract key_2 (bytes 2..33)
    const key2 = buf.slice(2, 34);
    console.log(`[ModulusCryptor] key2 (first 16): [${Array.from(key2.slice(0, 16)).map(b => b.toString(16).padStart(2, '0')).join(' ')}]`);

    // Stage 2: decrypt actual data using key_2
    const cipher2 = initCipher(algorithm2, key2);
    const decryptSize = dataSize - (dataSize % cipher2.getBlockSize());
    console.log(`[ModulusCryptor] Stage2: cipher=${CIPHER_NAMES[algorithm2 & 7]}, decryptSize=${decryptSize}, cipherBlockSize=${cipher2.getBlockSize()}`);

    if (decryptSize > 0) {
        const dataStart = 34;
        const block = buf.slice(dataStart, dataStart + decryptSize);
        cipher2.blockDecrypt(block, block.length, block);
        buf.set(block, dataStart);
    }

    const result = buf.slice(34);
    console.log(`[ModulusCryptor] Result first 10: [${Array.from(result.slice(0, 10)).join(', ')}]`);

    // Return data without 34-byte header
    return result;
}
