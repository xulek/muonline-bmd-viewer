// src/ozj-loader.ts
//  Ładuje OZJ (JPEG w kontenerze) i OZT (surowe RGBA) → dataURL PNG

export async function convertOzjToDataUrl(buf: ArrayBuffer): Promise<string> {
  const u8   = new Uint8Array(buf);
  const size = u8.length;

  console.log('=== OZJ/OZT DECODE START ===');
  console.log('File size:', size, 'bytes');
  console.log('First 32 bytes:', Array.from(u8.slice(0, 32)).map(b => b.toString(16).padStart(2, '0')).join(' '));

  /* ── 1️⃣  Szukamy znacznika JPEG (SOI = FF D8 FF) ─────────────── */
  let jpgStart = -1;
  // POPRAWKA: Kod C# zaczyna od offsetu 24, więc szukamy od 20-30
  for (let i = 20; i < Math.min(30, size - 2); i++) {
    if (u8[i] === 0xff && u8[i + 1] === 0xd8 && u8[i + 2] === 0xff) {
      jpgStart = i;
      console.log('Found JPEG SOI at offset:', i);
      break;
    }
  }

  if (jpgStart !== -1) {                // ← mamy JPEG ⇒ OZJ
    console.log('Detected as OZJ format');
    return ozjToPng(buf, jpgStart);
  }

  console.log('No JPEG found, trying OZT format...');

  /* ── 2️⃣  Próbujemy jako OZT (RGBA 32 b) ──────────────────────── */
  const view = new DataView(buf);
  if (size < 22) throw new Error('File too small for OZT');

  // POPRAWKA: Offset 16 jak w C# (HEADER_SIZE = 16)
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
 *  OZJ  (JPEG + opcjonalne odbicie w pionie)
 * -------------------------------------------------------------- */
async function ozjToPng(buf: ArrayBuffer, jpgStart: number): Promise<string> {
  const view     = new DataView(buf);
  
  console.log('=== OZJ TO PNG ===');
  console.log('JPEG starts at offset:', jpgStart);
  
  // POPRAWKA: Sprawdzamy flag isTopDownSort na pozycji 17 (jak w C#)
  const isTopDownSort = view.getUint8(17) !== 0;
  console.log('isTopDownSort:', isTopDownSort);
  
  // POPRAWKA: Ekstraktujemy JPEG buffer od znalezionego offsetu
  const jpegBuf  = buf.slice(jpgStart);
  console.log('JPEG buffer size:', jpegBuf.byteLength);

  try {
    // Tworzymy Blob z poprawnym MIME type
    const blob = new Blob([jpegBuf], { type: 'image/jpeg' });
    console.log('Created JPEG blob, creating ImageBitmap...');
    
    const img = await createImageBitmap(blob);
    console.log('ImageBitmap created:', img.width, 'x', img.height);
    
    const cvs = Object.assign(document.createElement('canvas'),
                  { width: img.width, height: img.height });
    const ctx = cvs.getContext('2d')!;

    // POPRAWKA: Logika odbicia - jeśli NIE jest topDown, to odbijamy
    if (!isTopDownSort) {
      console.log('Flipping image vertically');
      ctx.translate(0, img.height);
      ctx.scale(1, -1);
    }
    
    ctx.drawImage(img, 0, 0);
    console.log('Image drawn to canvas');
    
    img.close(); // Zwolnienie zasobów
    
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
 *  OZT  (surowe RGBA, bottom-up) → PNG
 * -------------------------------------------------------------- */
function oztToPng(buf: ArrayBuffer, nx: number, ny: number): string {
  const src    = new Uint8Array(buf);
  let   offset = 22; // 16 (header) + 6 (nx, ny, depth, u1)

  const cvs = Object.assign(document.createElement('canvas'),
               { width: nx, height: ny });
  const ctx = cvs.getContext('2d')!;
  const img = ctx.createImageData(nx, ny);
  const dst = img.data; // RGBA dla Canvas

  // POPRAWKA: Przepisujemy piksel po pikselu zgodnie z logiką C#
  for (let y = 0; y < ny; y++) {
    // bottom-up: ostatni rząd w pliku → pierwszy w canvas
    const canvasRow = (ny - 1 - y) * nx * 4;
    
    for (let x = 0; x < nx; x++) {
      // Czytamy RGBA z pliku
      const r = src[offset++];
      const g = src[offset++]; 
      const b = src[offset++];
      const a = src[offset++];
      
      // Zapisujemy do canvas RGBA
      const pixelIndex = canvasRow + x * 4;
      dst[pixelIndex    ] = r;
      dst[pixelIndex + 1] = g;
      dst[pixelIndex + 2] = b;
      dst[pixelIndex + 3] = a;
    }
  }

  ctx.putImageData(img, 0, 0);
  return cvs.toDataURL('image/png');
}