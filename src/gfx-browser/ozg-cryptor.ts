// OZG/OZD file decryption using the existing ModulusCryptor from src/crypto/
import { decryptModulusCryptor } from '../crypto/modulus-cryptor';
import { logger } from '../utils/Logger';

export interface OzgResult {
  signature: string; // "FWS", "CWS", "GFX" (uncompressed GFx), or "CFX" (compressed GFx)
  swfVersion: number;
  fileLength: number;
  /** Uncompressed SWF body (after the 8-byte header, decompressed if CWS/CFX). */
  swfBody: Uint8Array;
}

export async function decodeOzg(fileBytes: Uint8Array): Promise<OzgResult> {
  const payload = decryptModulusCryptor(fileBytes);

  const sig = String.fromCharCode(payload[0], payload[1], payload[2]);
  const swfVersion = payload[3];
  const dv = new DataView(payload.buffer, payload.byteOffset);
  const fileLength = dv.getUint32(4, true);

  logger.debug(`[decodeOzg] sig="${sig}", version=${swfVersion}, fileLength=${fileLength}, payloadLen=${payload.length}`);

  let swfBody: Uint8Array;
  if (sig === 'CWS' || sig === 'CFX') {
    const zlibData = payload.slice(8);
    logger.debug(`[decodeOzg] Compressed body: ${zlibData.length} bytes, first2=[0x${zlibData[0]?.toString(16)}, 0x${zlibData[1]?.toString(16)}]`);
    swfBody = await inflateZlib(zlibData);
    logger.debug(`[decodeOzg] Decompressed body: ${swfBody.length} bytes, first4=[0x${swfBody[0]?.toString(16)}, 0x${swfBody[1]?.toString(16)}, 0x${swfBody[2]?.toString(16)}, 0x${swfBody[3]?.toString(16)}]`);
  } else if (sig === 'FWS' || sig === 'GFX') {
    swfBody = payload.slice(8);
    logger.debug(`[decodeOzg] Uncompressed body: ${swfBody.length} bytes`);
  } else {
    throw new Error(`Unexpected OZG signature: "${sig}" (expected FWS/CWS or GFX/CFX)`);
  }

  return { signature: sig, swfVersion, fileLength, swfBody };
}

export interface OzdResult {
  width: number;
  height: number;
  format: 'DXT1' | 'DXT3' | 'DXT5' | 'unknown';
  mipCount: number;
  compressedData: Uint8Array;
}

export function decodeOzd(fileBytes: Uint8Array): OzdResult {
  const payload = decryptModulusCryptor(fileBytes);

  const sig = String.fromCharCode(payload[0], payload[1], payload[2], payload[3]);
  if (sig !== 'DDS ') throw new Error(`Invalid OZD: expected "DDS " magic, got "${sig}"`);

  const dv = new DataView(payload.buffer, payload.byteOffset);
  const height   = dv.getInt32(12, true);
  const width    = dv.getInt32(16, true);
  const mipCount = dv.getInt32(28, true);
  const fmt = String.fromCharCode(payload[84], payload[85], payload[86], payload[87]);
  const format: OzdResult['format'] =
    fmt === 'DXT1' || fmt === 'DXT3' || fmt === 'DXT5' ? fmt : 'unknown';

  return { width, height, format, mipCount, compressedData: payload.slice(128) };
}

async function inflateZlib(data: Uint8Array): Promise<Uint8Array> {
  // Use 'deflate' format — handles the zlib wrapper (CMF+FLG header + Adler32 trailer) natively
  const ds = new DecompressionStream('deflate');
  const writer = ds.writable.getWriter();
  const reader = ds.readable.getReader();
  void writer.write(data.slice()).then(() => writer.close());
  const chunks: Uint8Array[] = [];
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) chunks.push(value);
  }
  const total = chunks.reduce((s, c) => s + c.length, 0);
  const out = new Uint8Array(total);
  let off = 0;
  for (const c of chunks) { out.set(c, off); off += c.length; }
  return out;
}
