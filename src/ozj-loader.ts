// src/ozj-loader.ts
//  Loads OZJ (JPEG in a container) and OZT → dataURL PNG

export async function convertOzjToDataUrl(buf: ArrayBuffer): Promise<string> {
  const u8   = new Uint8Array(buf);
  const size = u8.length;

  console.log('=== OZJ/OZT DECODE START ===');
  console.log('File size:', size, 'bytes');
  console.log('First 32 bytes:', Array.from(u8.slice(0, 32)).map(b => b.toString(16).padStart(2, '0')).join(' '));

  /* ── 1️⃣  Search for JPEG marker (SOI = FF D8 FF) ─────────────── */
  let jpgStart = -1;
  for (let i = 20; i < Math.min(30, size - 2); i++) {
    if (u8[i] === 0xff && u8[i + 1] === 0xd8 && u8[i + 2] === 0xff) {
      jpgStart = i;
      console.log('Found JPEG SOI at offset:', i);
      break;
    }
  }

  if (jpgStart !== -1) {                // ← we have a JPEG ⇒ OZJ
    console.log('Detected as OZJ format');
    return ozjToPng(buf, jpgStart);
  }

  console.log('No JPEG found, trying OZT format...');

  /* ── 2️⃣  Try as OZT (RGBA 32 b) ──────────────────────── */
  const view = new DataView(buf);
  if (size < 22) throw new Error('File too small for OZT');

  // FIX: Offset 16 as in C# (HEADER_SIZE = 16)
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
  
  console.log('=== OZJ TO PNG ===');
  console.log('JPEG starts at offset:', jpgStart);
  
  const isTopDownSort = view.getUint8(17) !== 0;
  console.log('isTopDownSort:', isTopDownSort);
  
  const jpegBuf  = buf.slice(jpgStart);
  console.log('JPEG buffer size:', jpegBuf.byteLength);

  try {
    // Create a Blob with the correct MIME type
    const blob = new Blob([jpegBuf], { type: 'image/jpeg' });
    console.log('Created JPEG blob, creating ImageBitmap...');
    
    const img = await createImageBitmap(blob);
    console.log('ImageBitmap created:', img.width, 'x', img.height);
    
    const cvs = Object.assign(document.createElement('canvas'),
                  { width: img.width, height: img.height });
    const ctx = cvs.getContext('2d')!;

    if (!isTopDownSort) {
      console.log('Flipping image vertically');
      ctx.translate(0, img.height);
      ctx.scale(1, -1);
    }
    
    ctx.drawImage(img, 0, 0);
    console.log('Image drawn to canvas');
    
    img.close(); // Release resources
    
    const dataUrl = cvs.toDataURL('image/png');
    console.log('PNG data URL created, length:', dataUrl.length);
    
    return dataUrl;
    
  } catch (error) {
    console.error('JPEG decode error:', error);
    console.log('JPEG buffer size:', jpegBuf.byteLength);
    console.log('First few bytes:', Array.from(new Uint8Array(jpegBuf.slice(0, 10))).map(b => b.toString(16).padStart(2, '0')).join(' '));
    throw new Error(`Failed to decode JPEG: ${error}`);
  }
}

/* ----------------------------------------------------------------
 *  OZT  (raw RGBA, bottom-up) → PNG
 * -------------------------------------------------------------- */
function oztToPng(buf: ArrayBuffer, nx: number, ny: number): string {
  const src = new Uint8Array(buf);
  let offset = 22;                   // HEADER(16) + nx/ny/depth/u1(6)

  const cvs = Object.assign(document.createElement('canvas'),
    { width: nx, height: ny });
  const ctx = cvs.getContext('2d')!;
  const img = ctx.createImageData(nx, ny);
  const dst = img.data;                // RGBA for Canvas

  for (let y = 0; y < ny; y++) {
    const rowStart = (ny - 1 - y) * nx * 4;   // bottom-up
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