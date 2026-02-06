// src/ozj-loader.ts
// Loads OZJ (JPEG in a container) and OZT (raw BGRA) -> dataURL PNG.

type OzTextureHint = 'ozj' | 'ozt';

export async function convertOzjToDataUrl(buf: ArrayBuffer, hint?: OzTextureHint): Promise<string> {
  const u8   = new Uint8Array(buf);
  const size = u8.length;

  /* ── 1️⃣  Search for JPEG marker (SOI = FF D8 FF) ─────────────── */
  let jpgStart = -1;
  for (let i = 16; i < size - 2; i++) {
    if (u8[i] === 0xff && u8[i + 1] === 0xd8 && u8[i + 2] === 0xff) {
      jpgStart = i;
      break;
    }
  }

  if (hint === 'ozj') {
    if (jpgStart === -1) throw new Error('Invalid OZJ: JPEG marker not found');
    return ozjToPng(buf, jpgStart);
  }

  if (hint === 'ozt') {
    return decodeOzt(buf);
  }

  if (jpgStart !== -1) {
    // Auto-detected JPEG payload -> OZJ
    return ozjToPng(buf, jpgStart);
  }

  /* ── 2️⃣  Try as OZT (RGBA 32 b) ──────────────────────── */
  return decodeOzt(buf);
}

function decodeOzt(buf: ArrayBuffer): string {
  const view = new DataView(buf);
  const size = view.byteLength;
  if (size < 22) throw new Error('File too small for OZT');

  // Offset 16 as in C# OZTReader (HEADER_SIZE = 16).
  const nx    = view.getInt16(16, true);
  const ny    = view.getInt16(18, true);
  const depth = view.getUint8(20);

  const expectedSize = 22 + nx * ny * 4;
  const looksLikeOzt =
      nx > 0 && ny > 0 &&
      nx <= 1024 && ny <= 1024 &&
      depth === 32 &&
      expectedSize <= size;

  if (!looksLikeOzt) throw new Error('Unsupported OZ? file');

  return oztToPng(buf, nx, ny);
}


/* ----------------------------------------------------------------
 *  OZJ  (JPEG + optional vertical flip)
 * -------------------------------------------------------------- */
async function ozjToPng(buf: ArrayBuffer, jpgStart: number): Promise<string> {
  const view     = new DataView(buf);
  const isTopDownSort = view.getUint8(17) !== 0;
  const jpegBuf  = buf.slice(jpgStart);

  try {
    // Create a Blob with the correct MIME type
    const blob = new Blob([jpegBuf], { type: 'image/jpeg' });
    const img = await createImageBitmap(blob);

    const cvs = Object.assign(document.createElement('canvas'),
                  { width: img.width, height: img.height });
    const ctx = cvs.getContext('2d')!;

    // Match Client.Data.OZJReader: flip vertically when file is not top-down sorted.
    if (!isTopDownSort) {
      ctx.translate(0, img.height);
      ctx.scale(1, -1);
    }

    ctx.drawImage(img, 0, 0);
    img.close(); // Release resources

    return cvs.toDataURL('image/png');

  } catch (error) {
    console.error('OZJ decode error:', error);
    throw new Error(`Failed to decode JPEG: ${error}`);
  }
}

/* ----------------------------------------------------------------
 *  OZT  (raw RGBA, bottom-up) → PNG
 * -------------------------------------------------------------- */
function oztToPng(buf: ArrayBuffer, nx: number, ny: number): string {
  const width = getNearestPowerOfTwo(nx);
  const height = getNearestPowerOfTwo(ny);
  const src = new Uint8Array(buf);
  let offset = 22;                   // HEADER(16) + nx/ny/depth/u1(6)

  const cvs = Object.assign(document.createElement('canvas'),
    { width, height });
  const ctx = cvs.getContext('2d')!;
  const img = ctx.createImageData(width, height);
  const dst = img.data;                // RGBA for Canvas

  for (let y = 0; y < ny; y++) {
    const rowStart = (ny - 1 - y) * width * 4;   // bottom-up
    for (let x = 0; x < nx; x++) {
      const b = src[offset++];          // 1️⃣ B
      const g = src[offset++];          // 2️⃣ G
      const r = src[offset++];          // 3️⃣ R
      const a = src[offset++];          // 4️⃣ A

      const i = rowStart + x * 4;
      dst[i] = r;                   // R
      dst[i + 1] = g;                   // G
      dst[i + 2] = b;                   // B
      dst[i + 3] = a;                   // A
    }
  }
  ctx.putImageData(img, 0, 0);
  return cvs.toDataURL('image/png');
}

function getNearestPowerOfTwo(value: number): number {
  return 2 ** Math.ceil(Math.log2(value));
}
