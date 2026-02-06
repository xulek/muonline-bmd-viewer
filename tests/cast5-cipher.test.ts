import { CAST5Cipher } from '../src/crypto/cast5-cipher';

function hexToU8(hex: string): Uint8Array {
    return Uint8Array.from(Buffer.from(hex, 'hex'));
}

describe('CAST5Cipher', () => {
    test('decrypts RFC 2144 128-bit test vector', () => {
        const key = hexToU8('0123456712345678234567893456789A');
        const ciphertext = hexToU8('238B4FE5847E44B2');
        const expected = hexToU8('0123456789ABCDEF');

        const cipher = new CAST5Cipher(key);
        const out = new Uint8Array(8);
        cipher.blockDecrypt(ciphertext, ciphertext.length, out);

        expect(Buffer.from(out).toString('hex').toUpperCase()).toBe(Buffer.from(expected).toString('hex').toUpperCase());
    });

    test('decrypts 80-bit key vector (12 rounds)', () => {
        const key = hexToU8('01234567123456782345');
        const ciphertext = hexToU8('EB6A711A2C02271B');
        const expected = hexToU8('0123456789ABCDEF');

        const cipher = new CAST5Cipher(key);
        const out = new Uint8Array(8);
        cipher.blockDecrypt(ciphertext, ciphertext.length, out);

        expect(Buffer.from(out).toString('hex').toUpperCase()).toBe(Buffer.from(expected).toString('hex').toUpperCase());
    });

    test('decrypts 40-bit key vector (12 rounds)', () => {
        const key = hexToU8('0123456712');
        const ciphertext = hexToU8('7AC816D16E9B302E');
        const expected = hexToU8('0123456789ABCDEF');

        const cipher = new CAST5Cipher(key);
        const out = new Uint8Array(8);
        cipher.blockDecrypt(ciphertext, ciphertext.length, out);

        expect(Buffer.from(out).toString('hex').toUpperCase()).toBe(Buffer.from(expected).toString('hex').toUpperCase());
    });

    test('uses first 16 key bytes, like C# reference', () => {
        const key = hexToU8('0123456712345678234567893456789AFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
        const ciphertext = hexToU8('238B4FE5847E44B2');
        const expected = hexToU8('0123456789ABCDEF');

        const cipher = new CAST5Cipher(key);
        const out = new Uint8Array(8);
        cipher.blockDecrypt(ciphertext, ciphertext.length, out);

        expect(Buffer.from(out).toString('hex').toUpperCase()).toBe(Buffer.from(expected).toString('hex').toUpperCase());
    });

    test('decrypts multiple blocks in one call', () => {
        const key = hexToU8('0123456712345678234567893456789A');
        const ciphertext = hexToU8('238B4FE5847E44B2238B4FE5847E44B2');
        const expected = hexToU8('0123456789ABCDEF0123456789ABCDEF');

        const cipher = new CAST5Cipher(key);
        const out = new Uint8Array(ciphertext.length);
        cipher.blockDecrypt(ciphertext, ciphertext.length, out);

        expect(Buffer.from(out).toString('hex').toUpperCase()).toBe(Buffer.from(expected).toString('hex').toUpperCase());
    });
});
