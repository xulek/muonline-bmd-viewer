import { IDEACipher } from '../src/crypto/idea-cipher';

function hexToU8(hex: string): Uint8Array {
    return Uint8Array.from(Buffer.from(hex, 'hex'));
}

describe('IDEACipher', () => {
    test('decrypts BouncyCastle vector #1', () => {
        const key = hexToU8('00010002000300040005000600070008');
        const ciphertext = hexToU8('11FBED2B01986DE5');
        const expected = hexToU8('0000000100020003');

        const cipher = new IDEACipher(key);
        const out = new Uint8Array(8);
        cipher.blockDecrypt(ciphertext, ciphertext.length, out);

        expect(Buffer.from(out).toString('hex').toUpperCase()).toBe(
            Buffer.from(expected).toString('hex').toUpperCase(),
        );
    });

    test('decrypts BouncyCastle vector #2', () => {
        const key = hexToU8('2BD6459F82C5B300952C49104881FF48');
        const ciphertext = hexToU8('C8FB51D3516627A8');
        const expected = hexToU8('EA024714AD5C4D84');

        const cipher = new IDEACipher(key);
        const out = new Uint8Array(8);
        cipher.blockDecrypt(ciphertext, ciphertext.length, out);

        expect(Buffer.from(out).toString('hex').toUpperCase()).toBe(
            Buffer.from(expected).toString('hex').toUpperCase(),
        );
    });

    test('decrypts BouncyCastle vector #3', () => {
        const key = hexToU8('00112233445566778899AABBCCDDEEFF');
        const ciphertext = hexToU8('ED732271A7B39F47');
        const expected = hexToU8('0001020304050607');

        const cipher = new IDEACipher(key);
        const out = new Uint8Array(8);
        cipher.blockDecrypt(ciphertext, ciphertext.length, out);

        expect(Buffer.from(out).toString('hex').toUpperCase()).toBe(
            Buffer.from(expected).toString('hex').toUpperCase(),
        );
    });

    test('decrypts multiple blocks in one call', () => {
        const key = hexToU8('00010002000300040005000600070008');
        const ciphertext = hexToU8('11FBED2B01986DE511FBED2B01986DE5');
        const expected = hexToU8('00000001000200030000000100020003');

        const cipher = new IDEACipher(key);
        const out = new Uint8Array(ciphertext.length);
        cipher.blockDecrypt(ciphertext, ciphertext.length, out);

        expect(Buffer.from(out).toString('hex').toUpperCase()).toBe(
            Buffer.from(expected).toString('hex').toUpperCase(),
        );
    });
});
