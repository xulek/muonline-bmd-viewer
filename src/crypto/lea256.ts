/* ------------------------------------------------------------------
 *  LEA-256 ECB – czysta implementacja w TypeScripcie
 *  Port referencji KISA 1-do-1 (little-endian)
 *  Eksportuje createLea256EcbDecrypt(key) → (cipher) => plain
 * -----------------------------------------------------------------*/

const KEY_DELTA = new Uint32Array([
    0xc3efe9db, 0x44626b02, 0x79e27c8a, 0x78df30ec,
    0x715ea49e, 0xc785da0a, 0xe04ef22a, 0xe5c40957
  ]);
  
  const rol = (x: number, n: number) => ((x <<  (n & 31)) | (x >>> (32 - (n & 31)))) >>> 0;
  const ror = (x: number, n: number) => ((x >>> (n & 31)) | (x <<  (32 - (n & 31)))) >>> 0;
  
  function keySchedule256(keyWords: Uint32Array): Uint32Array {
    const rk = new Uint32Array(192);
    const T  = new Uint32Array(keyWords);
    for (let i = 0; i < 32; i++) {
      const d = KEY_DELTA[i & 7];
      const s = (i * 6) & 7;
      T[(s+0)&7] = rol((T[(s+0)&7] + rol(d,   i  )) >>> 0,  1);
      T[(s+1)&7] = rol((T[(s+1)&7] + rol(d,   i+1)) >>> 0,  3);
      T[(s+2)&7] = rol((T[(s+2)&7] + rol(d,   i+2)) >>> 0,  6);
      T[(s+3)&7] = rol((T[(s+3)&7] + rol(d,   i+3)) >>> 0, 11);
      T[(s+4)&7] = rol((T[(s+4)&7] + rol(d,   i+4)) >>> 0, 13);
      T[(s+5)&7] = rol((T[(s+5)&7] + rol(d,   i+5)) >>> 0, 17);
      rk.set([
        T[(s+0)&7], T[(s+1)&7], T[(s+2)&7],
        T[(s+3)&7], T[(s+4)&7], T[(s+5)&7]
      ], i * 6);
    }
    return rk;
  }
  
  function roundDec(s: Uint32Array, t: Uint32Array, rk6: Uint32Array): void {
    t[0] = s[3];
    t[1] = (ror(s[0],  9) - (t[0] ^ rk6[0]) ^ rk6[1]) >>> 0;
    t[2] = (rol(s[1],  5) - (t[1] ^ rk6[2]) ^ rk6[3]) >>> 0;
    t[3] = (rol(s[2],  3) - (t[2] ^ rk6[4]) ^ rk6[5]) >>> 0;
  }
  
  export function createLea256EcbDecrypt(key: Uint8Array) {
    if (key.length !== 32) throw new Error('LEA-256 key musi mieć 32 bajty');
  
    const keyWords = new Uint32Array(8);
    for (let i = 0; i < 8; i++) {
      keyWords[i] =
        (key[i*4+3] << 24) | (key[i*4+2] << 16) |
        (key[i*4+1] << 8) | key[i*4];
    }
  
    const RK = keySchedule256(keyWords);
    const state = new Uint32Array(4);
    const next = new Uint32Array(4);
    const rk6 = new Uint32Array(6);
  
    return function decryptEcb(cipher: Uint8Array): Uint8Array {
      if (cipher.length % 16 !== 0) {
        throw new Error('LEA-ECB: długość danych musi być wielokrotnością 16 B');
      }
  
      const out = cipher.slice();
      const dv = new DataView(out.buffer, out.byteOffset);
  
      for (let off = 0; off < out.length; off += 16) {
        for (let i = 0; i < 4; i++) {
          state[i] = dv.getUint32(off + i * 4, true);
        }
  
        for (let r = 0; r < 32; r++) {
          rk6.set(RK.subarray((31 - r) * 6, (32 - r) * 6));
          roundDec(state, next, rk6);
          state.set(next);
        }
  
        for (let i = 0; i < 4; i++) {
          dv.setUint32(off + i * 4, state[i], true);
        }
      }
  
      return out;
    };
  }
  