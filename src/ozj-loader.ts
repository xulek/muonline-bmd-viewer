// src/ozj-loader.ts
// Loads OZJ (JPEG in a container) and OZT (raw BGRA) -> dataURL PNG.
// Compatibility rule:
// - with explicit hint: use strict/reference decoding
// - without hint: preserve legacy behavior used by model/animation scenes

type OzTextureHint = 'ozj' | 'ozt';

export async function convertOzjToDataUrl(buf: ArrayBuffer, hint?: OzTextureHint): Promise<string> {
  const u8 = new Uint8Array(buf);

  if (hint === 'ozj') {
    const jpgStart = findJpegStart(u8, true);
    if (jpgStart === -1) throw new Error('Invalid OZJ: JPEG marker not found');
    return ozjToPng(buf, jpgStart, true);
  }

  if (hint === 'ozt') {
    return decodeOzt(buf, true);
  }

  // Legacy auto-detection path (pre-world-viewer behavior).
  const jpgStart = findJpegStart(u8, false);
  if (jpgStart !== -1) {
    return ozjToPng(buf, jpgStart, false);
  }

  return decodeOzt(buf, false);
}

function findJpegStart(u8: Uint8Array, strictScan: boolean): number {
  const size = u8.length;
  const from = strictScan ? 16 : 20;
  const to = strictScan ? size - 2 : Math.min(30, size - 2);

  for (let i = from; i < to; i++) {
    if (u8[i] === 0xff && u8[i + 1] === 0xd8 && u8[i + 2] === 0xff) {
      return i;
    }
  }

  return -1;
}

function decodeOzt(buf: ArrayBuffer, usePowerOfTwo: boolean): string {
  const view = new DataView(buf);
  const size = view.byteLength;
  if (size < 22) throw new Error('File too small for OZT');

  // Offset 16 as in C# OZTReader (HEADER_SIZE = 16).
  const nx = view.getInt16(16, true);
  const ny = view.getInt16(18, true);
  const depth = view.getUint8(20);

  const expectedSize = 22 + nx * ny * 4;
  const looksLikeOzt =
    nx > 0 && ny > 0 &&
    nx <= 1024 && ny <= 1024 &&
    depth === 32 &&
    expectedSize <= size;

  if (!looksLikeOzt) throw new Error('Unsupported OZ? file');

  const width = usePowerOfTwo ? getNearestPowerOfTwo(nx) : nx;
  const height = usePowerOfTwo ? getNearestPowerOfTwo(ny) : ny;
  return oztToPng(buf, nx, ny, width, height);
}

/* ----------------------------------------------------------------
 *  OZJ  (JPEG + optional vertical flip)
 * -------------------------------------------------------------- */
async function ozjToPng(buf: ArrayBuffer, jpgStart: number, applyTopDownSort: boolean): Promise<string> {
  const view = new DataView(buf);
  const isTopDownSort = view.getUint8(17) !== 0;
  const jpegBuf = buf.slice(jpgStart);

  try {
    const blob = new Blob([jpegBuf], { type: 'image/jpeg' });
    const img = await createImageBitmap(blob);

    const cvs = Object.assign(document.createElement('canvas'),
      { width: img.width, height: img.height });
    const ctx = cvs.getContext('2d')!;

    // Reference OZJReader behavior (enabled only for strict/hinted path).
    if (applyTopDownSort && !isTopDownSort) {
      ctx.translate(0, img.height);
      ctx.scale(1, -1);
    }

    ctx.drawImage(img, 0, 0);
    img.close();

    return cvs.toDataURL('image/png');
  } catch (error) {
    console.error('OZJ decode error:', error);
    throw new Error(`Failed to decode JPEG: ${error}`);
  }
}

/* ----------------------------------------------------------------
 *  OZT  (raw RGBA, bottom-up) -> PNG
 * -------------------------------------------------------------- */
function oztToPng(buf: ArrayBuffer, nx: number, ny: number, width: number, height: number): string {
  const src = new Uint8Array(buf);
  let offset = 22; // HEADER(16) + nx/ny/depth/u1(6)

  const cvs = Object.assign(document.createElement('canvas'),
    { width, height });
  const ctx = cvs.getContext('2d')!;
  const img = ctx.createImageData(width, height);
  const dst = img.data;

  for (let y = 0; y < ny; y++) {
    const rowStart = (ny - 1 - y) * width * 4; // bottom-up
    for (let x = 0; x < nx; x++) {
      const b = src[offset++];
      const g = src[offset++];
      const r = src[offset++];
      const a = src[offset++];

      const i = rowStart + x * 4;
      dst[i] = r;
      dst[i + 1] = g;
      dst[i + 2] = b;
      dst[i + 3] = a;
    }
  }

  ctx.putImageData(img, 0, 0);
  return cvs.toDataURL('image/png');
}

function getNearestPowerOfTwo(value: number): number {
  return 2 ** Math.ceil(Math.log2(value));
}
