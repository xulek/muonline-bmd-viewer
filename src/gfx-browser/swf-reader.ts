// Minimal SWF body parser — only what we need for the GFx browser UI.
// Input: uncompressed SWF body (everything AFTER the 8-byte SWF file header).

export interface SwfFrameInfo {
  widthPx: number;
  heightPx: number;
  fpsFixed88: number;  // frame rate as fixed 8.8, integer = fpsFixed88 >> 8
  frameCount: number;
}

export interface SwfTag {
  type: number;
  name: string;
  offset: number;
  length: number;
  data: Uint8Array;
}

export interface SwfParseResult {
  frame: SwfFrameInfo;
  tags: SwfTag[];
}

export interface SwfMatrix {
  scaleX: number;
  scaleY: number;
  skew0: number;
  skew1: number;
  translateX: number;
  translateY: number;
}

export interface SwfDisplayObject {
  depth: number;
  charId: number;
  matrix: SwfMatrix;
  sourceTagType: number;
}

export interface SwfSpriteDefinition {
  spriteId: number;
  frameCount: number;
  tags: SwfTag[];
}

export interface SwfRect {
  xMin: number;
  yMin: number;
  xMax: number;
  yMax: number;
  width: number;
  height: number;
}

export interface SwfShapeBitmapRef {
  shapeId: number;
  bitmapId: number;
  bounds: SwfRect;
  fillMatrix: SwfMatrix;
  fillStyleType: number;
}

// ─── Tag name map ─────────────────────────────────────────────────────────────

const TAG_NAME: Record<number, string> = {
  0: 'End',
  1: 'ShowFrame',
  2: 'DefineShape',
  4: 'PlaceObject',
  5: 'RemoveObject',
  6: 'DefineBits',
  7: 'DefineButton',
  8: 'JPEGTables',
  9: 'SetBackgroundColor',
  10: 'DefineFont',
  11: 'DefineText',
  12: 'DoAction',
  14: 'DefineSound',
  18: 'SoundStreamHead',
  19: 'SoundStreamBlock',
  20: 'DefineBitsLossless',
  21: 'DefineBitsJPEG2',
  22: 'DefineShape2',
  26: 'PlaceObject2',
  28: 'RemoveObject2',
  32: 'DefineShape3',
  33: 'DefineText2',
  34: 'DefineButton2',
  35: 'DefineBitsJPEG3',
  36: 'DefineBitsLossless2',
  37: 'DefineBitsJPEG4',
  39: 'DefineSprite',
  43: 'FrameLabel',
  45: 'SoundStreamHead2',
  46: 'DefineMorphShape',
  56: 'ExportAssets',
  57: 'ImportAssets',
  59: 'DoInitAction',
  60: 'DefineVideoStream',
  61: 'VideoFrame',
  62: 'DefineFontInfo2',
  65: 'ScriptLimits',
  66: 'SetTabIndex',
  69: 'FileAttributes',
  70: 'PlaceObject3',
  71: 'ImportAssets2',
  73: 'DefineFontAlignZones',
  74: 'CSMTextSettings',
  75: 'DefineFont3',
  77: 'MetaData',
  78: 'DefineScalingGrid',
  82: 'DoABC',
  83: 'DefineShape4',
  86: 'DefineSceneAndFrameLabelData',
  87: 'DefineBinaryData',
  88: 'DefineFontName',
  90: 'DefineFontAlignZones2',
  91: 'DefineFont4',
  93: 'EnableTelemetry',
  // GFx extensions
  1000: 'GFx_ExporterInfo',
  1001: 'GFx_ScriptInfo',
  1002: 'GFx_FontTextureInfo',
  1003: 'GFx_DefineExternalImage',
  1004: 'GFx_DefineSubImage',
  1006: 'GFx_ImageCreator',
  1007: 'GFx_DefineExternalImage2',
  1008: 'GFx_DefineSubImage2',
  1009: 'GFx_DefineExternalImageEx',
  1010: 'GFx_DefineExternalGradient',
  1011: 'GFx_DefineGradientMap',
  1017: 'GFx_DefineDropShadowFilter',
  1018: 'GFx_DefineBlurFilter',
  1019: 'GFx_DefineGlowFilter',
  1020: 'GFx_DefineBevelFilter',
};

function tagName(type: number): string {
  return TAG_NAME[type] ?? `Tag_${type}`;
}

// ─── Bit reader (for RECT) ────────────────────────────────────────────────────

class BitReader {
  private buf: Uint8Array;
  byteOff = 0;
  private bitBuf = 0;
  private bitsLeft = 0;

  constructor(buf: Uint8Array) { this.buf = buf; }

  readUB(n: number): number {
    let r = 0;
    while (n > 0) {
      if (!this.bitsLeft) { this.bitBuf = this.buf[this.byteOff++]; this.bitsLeft = 8; }
      const take = Math.min(n, this.bitsLeft);
      r = (r << take) | ((this.bitBuf >> (this.bitsLeft - take)) & ((1 << take) - 1));
      this.bitsLeft -= take; n -= take;
    }
    return r;
  }

  readSB(n: number): number {
    const v = this.readUB(n);
    return n && (v & (1 << (n - 1))) ? v | (~((1 << n) - 1)) : v;
  }

  align(): void { this.bitsLeft = 0; }
}

const IDENTITY_MATRIX: SwfMatrix = {
  scaleX: 1,
  scaleY: 1,
  skew0: 0,
  skew1: 0,
  translateX: 0,
  translateY: 0,
};

function readU16(data: Uint8Array, offset: number): number {
  return data[offset] | (data[offset + 1] << 8);
}

export function readSwfMatrix(data: Uint8Array, offset = 0): { matrix: SwfMatrix; byteLength: number } {
  const br = new BitReader(data.subarray(offset));
  let scaleX = 1;
  let scaleY = 1;
  let skew0 = 0;
  let skew1 = 0;

  if (br.readUB(1)) {
    const nScaleBits = br.readUB(5);
    scaleX = br.readSB(nScaleBits) / 65536;
    scaleY = br.readSB(nScaleBits) / 65536;
  }

  if (br.readUB(1)) {
    const nRotateBits = br.readUB(5);
    skew0 = br.readSB(nRotateBits) / 65536;
    skew1 = br.readSB(nRotateBits) / 65536;
  }

  const nTranslateBits = br.readUB(5);
  const translateX = br.readSB(nTranslateBits) / 20;
  const translateY = br.readSB(nTranslateBits) / 20;
  br.align();

  return {
    matrix: { scaleX, scaleY, skew0, skew1, translateX, translateY },
    byteLength: br.byteOff,
  };
}

export function readSwfRect(data: Uint8Array, offset = 0): { rect: SwfRect; byteLength: number } {
  const br = new BitReader(data.subarray(offset));
  const nBits = br.readUB(5);
  const xMinTwips = br.readSB(nBits);
  const xMaxTwips = br.readSB(nBits);
  const yMinTwips = br.readSB(nBits);
  const yMaxTwips = br.readSB(nBits);
  br.align();

  const xMin = xMinTwips / 20;
  const xMax = xMaxTwips / 20;
  const yMin = yMinTwips / 20;
  const yMax = yMaxTwips / 20;

  return {
    rect: {
      xMin,
      yMin,
      xMax,
      yMax,
      width: xMax - xMin,
      height: yMax - yMin,
    },
    byteLength: br.byteOff,
  };
}

interface ParsedPlaceObject {
  depth: number;
  charId?: number;
  matrix?: SwfMatrix;
  sourceTagType: number;
}

function parsePlaceObject(tag: SwfTag): ParsedPlaceObject | null {
  const data = tag.data;

  if (tag.type === 4) {
    if (data.length < 5) return null;
    const charId = readU16(data, 0);
    const depth = readU16(data, 2);
    const { matrix } = readSwfMatrix(data, 4);
    return { depth, charId, matrix, sourceTagType: tag.type };
  }

  if (tag.type === 26) {
    if (data.length < 3) return null;
    const flags = data[0];
    const depth = readU16(data, 1);
    let off = 3;
    let charId: number | undefined;
    let matrix: SwfMatrix | undefined;

    if (flags & 0x02) {
      if (off + 2 > data.length) return null;
      charId = readU16(data, off);
      off += 2;
    }

    if (flags & 0x04) {
      const parsedMatrix = readSwfMatrix(data, off);
      matrix = parsedMatrix.matrix;
    }

    return { depth, charId, matrix, sourceTagType: tag.type };
  }

  if (tag.type === 70) {
    if (data.length < 4) return null;
    const flags = data[0];
    const flags2 = data[1];
    const depth = readU16(data, 2);
    let off = 4;
    let charId: number | undefined;
    let matrix: SwfMatrix | undefined;

    // PlaceObject3 can optionally prepend a class name. It is uncommon in GFx
    // asset-only files, but skipping it keeps the matrix offset correct.
    const hasImage = (flags2 & 0x10) !== 0;
    const hasClassName = (flags2 & 0x08) !== 0;
    if ((hasClassName || (hasImage && (flags & 0x02))) && off < data.length) {
      while (off < data.length && data[off] !== 0) off++;
      if (off < data.length) off++;
    }

    if (flags & 0x02) {
      if (off + 2 > data.length) return null;
      charId = readU16(data, off);
      off += 2;
    }

    if (flags & 0x04) {
      const parsedMatrix = readSwfMatrix(data, off);
      matrix = parsedMatrix.matrix;
    }

    return { depth, charId, matrix, sourceTagType: tag.type };
  }

  return null;
}

function getRemoveDepth(tag: SwfTag): number | null {
  if (tag.type === 5) {
    return tag.data.length >= 4 ? readU16(tag.data, 2) : null;
  }
  if (tag.type === 28) {
    return tag.data.length >= 2 ? readU16(tag.data, 0) : null;
  }
  return null;
}

export function buildSwfDisplayList(tags: SwfTag[], frameIndex = 0): SwfDisplayObject[] {
  const displayList = new Map<number, SwfDisplayObject>();
  let currentFrame = 0;

  for (const tag of tags) {
    if (tag.type === 1) {
      if (currentFrame >= frameIndex) break;
      currentFrame++;
      continue;
    }

    const removeDepth = getRemoveDepth(tag);
    if (removeDepth !== null) {
      displayList.delete(removeDepth);
      continue;
    }

    const placed = parsePlaceObject(tag);
    if (!placed) continue;

    const existing = displayList.get(placed.depth);
    const charId = placed.charId ?? existing?.charId;
    if (charId === undefined) continue;

    displayList.set(placed.depth, {
      depth: placed.depth,
      charId,
      matrix: placed.matrix ?? existing?.matrix ?? { ...IDENTITY_MATRIX },
      sourceTagType: placed.sourceTagType,
    });
  }

  return [...displayList.values()].sort((a, b) => a.depth - b.depth);
}

export function parseDefineSprites(tags: SwfTag[]): Map<number, SwfSpriteDefinition> {
  const sprites = new Map<number, SwfSpriteDefinition>();

  for (const tag of tags) {
    if (tag.type !== 39 || tag.data.length < 4) continue;

    const spriteId = readU16(tag.data, 0);
    const frameCount = readU16(tag.data, 2);
    const spriteTags = parseTagRecords(tag.data, 4, tag.offset + 4);
    sprites.set(spriteId, { spriteId, frameCount, tags: spriteTags });

    const nested = parseDefineSprites(spriteTags);
    for (const [nestedId, sprite] of nested) {
      sprites.set(nestedId, sprite);
    }
  }

  return sprites;
}

function readStyleCount(data: Uint8Array, offset: number): { count: number; offset: number } | null {
  if (offset >= data.length) return null;
  let count = data[offset++];
  if (count === 0xff) {
    if (offset + 2 > data.length) return null;
    count = readU16(data, offset);
    offset += 2;
  }
  return { count, offset };
}

function skipGradientStyle(data: Uint8Array, offset: number, hasAlpha: boolean, hasFocalPoint: boolean): number | null {
  const matrix = readSwfMatrix(data, offset);
  offset += matrix.byteLength;
  if (offset >= data.length) return null;

  const gradientHeader = data[offset++];
  const gradientCount = gradientHeader & 0x0f;
  const colorSize = hasAlpha ? 4 : 3;
  offset += gradientCount * (1 + colorSize);
  if (hasFocalPoint) offset += 2;
  return offset <= data.length ? offset : null;
}

export function parseShapeBitmapRefs(tags: SwfTag[]): Map<number, SwfShapeBitmapRef[]> {
  const refs = new Map<number, SwfShapeBitmapRef[]>();

  for (const tag of tags) {
    if (tag.type !== 2 && tag.type !== 22 && tag.type !== 32 && tag.type !== 83) continue;

    const data = tag.data;
    if (data.length < 3) continue;

    const shapeId = readU16(data, 0);
    let off = 2;

    try {
      const boundsResult = readSwfRect(data, off);
      const bounds = boundsResult.rect;
      off += boundsResult.byteLength;

      if (tag.type === 83) {
        const edgeBoundsResult = readSwfRect(data, off);
        off += edgeBoundsResult.byteLength + 1;
      }

      const fillCountResult = readStyleCount(data, off);
      if (!fillCountResult) continue;
      off = fillCountResult.offset;

      const shapeRefs: SwfShapeBitmapRef[] = [];
      const hasAlpha = tag.type === 32 || tag.type === 83;

      for (let i = 0; i < fillCountResult.count; i++) {
        if (off >= data.length) break;
        const fillStyleType = data[off++];

        if (fillStyleType === 0x00) {
          off += hasAlpha ? 4 : 3;
        } else if (fillStyleType === 0x10 || fillStyleType === 0x12 || fillStyleType === 0x13) {
          const nextOffset = skipGradientStyle(data, off, hasAlpha, fillStyleType === 0x13);
          if (nextOffset === null) break;
          off = nextOffset;
        } else if (fillStyleType >= 0x40 && fillStyleType <= 0x43) {
          if (off + 2 > data.length) break;
          const bitmapId = readU16(data, off);
          off += 2;
          const fillMatrix = readSwfMatrix(data, off);
          off += fillMatrix.byteLength;
          shapeRefs.push({
            shapeId,
            bitmapId,
            bounds,
            fillMatrix: fillMatrix.matrix,
            fillStyleType,
          });
        } else {
          break;
        }
      }

      if (shapeRefs.length) refs.set(shapeId, shapeRefs);
    } catch {
      continue;
    }
  }

  return refs;
}

// ─── Parser ───────────────────────────────────────────────────────────────────

export function parseSwfBody(body: Uint8Array): SwfParseResult {
  // RECT (variable-length bit field)
  const frameRect = readSwfRect(body);
  const widthPx  = Math.round(frameRect.rect.width);
  const heightPx = Math.round(frameRect.rect.height);

  let off = frameRect.byteLength;
  const dv = new DataView(body.buffer, body.byteOffset);
  const fpsFixed88  = dv.getUint16(off, true); off += 2;
  const frameCount  = dv.getUint16(off, true); off += 2;

  return {
    frame: { widthPx, heightPx, fpsFixed88, frameCount },
    tags: parseTagRecords(body, off, off),
  };
}

function parseTagRecords(data: Uint8Array, startOffset = 0, offsetBase = startOffset): SwfTag[] {
  let off = startOffset;
  const dv = new DataView(data.buffer, data.byteOffset);
  const tags: SwfTag[] = [];

  while (off + 2 <= data.length) {
    const recordHeader = dv.getUint16(off, true);
    const type   = (recordHeader >> 6) & 0x3FF;
    let   length = recordHeader & 0x3F;
    off += 2;

    if (length === 0x3F) {
      if (off + 4 > data.length) break;
      length = dv.getInt32(off, true);
      off += 4;
    }

    if (length < 0 || off + length > data.length) break;

    const tagOffset = offsetBase + (off - startOffset);
    const tagData = data.slice(off, off + length);
    tags.push({ type, name: tagName(type), offset: tagOffset, length, data: tagData });
    off += length;

    if (type === 0) break; // End tag
  }

  return tags;
}

// ─── Bitmap extraction ────────────────────────────────────────────────────────

export interface ExtractedBitmap {
  charId: number;
  tagType: number;
  tagName: string;
  width: number;
  height: number;
  format: string;
  draw(canvas: HTMLCanvasElement): Promise<void>;
}

async function inflateRaw(data: Uint8Array): Promise<Uint8Array> {
  const ds = new DecompressionStream('deflate-raw');
  const w = ds.writable.getWriter();
  const r = ds.readable.getReader();
  w.write(data.slice()); w.close();
  const chunks: Uint8Array[] = [];
  for (;;) {
    const { done, value } = await r.read();
    if (done) break;
    if (value) chunks.push(value);
  }
  const total = chunks.reduce((s, c) => s + c.length, 0);
  const out = new Uint8Array(total);
  let i = 0; for (const c of chunks) { out.set(c, i); i += c.length; }
  return out;
}

/** Extract renderable bitmaps from DefineBitsLossless/2 and DefineBitsJPEG tags */
export async function extractBitmaps(tags: SwfTag[]): Promise<ExtractedBitmap[]> {
  const results: ExtractedBitmap[] = [];

  for (const tag of tags) {
    if (tag.type === 20 || tag.type === 36) {
      // DefineBitsLossless (20) / DefineBitsLossless2 (36)
      const bmp = await parseBitsLossless(tag);
      if (bmp) results.push(bmp);
    } else if (tag.type === 6 || tag.type === 21 || tag.type === 35 || tag.type === 37) {
      // DefineBits, DefineBitsJPEG2, DefineBitsJPEG3, DefineBitsJPEG4
      const bmp = await parseBitsJpeg(tag);
      if (bmp) results.push(bmp);
    }
  }

  return results;
}

async function parseBitsLossless(tag: SwfTag): Promise<ExtractedBitmap | null> {
  const d = tag.data;
  if (d.length < 7) return null;
  const dv = new DataView(d.buffer, d.byteOffset);
  const charId = dv.getUint16(0, true);
  const fmt    = d[2]; // 3=8bit palette, 4=15bit RGB, 5=32bit ARGB
  const width  = dv.getUint16(3, true);
  const height = dv.getUint16(5, true);
  const hasAlpha = tag.type === 36;
  const dataStart = fmt === 3 ? 8 : 7; // palette has extra byte

  const compressedPixels = d.slice(dataStart);
  const formatStr = fmt === 3 ? '8-bit palette' : fmt === 4 ? '15-bit RGB' : '32-bit ARGB';

  return {
    charId, tagType: tag.type, tagName: tag.name, width, height, format: formatStr,
    draw: async (canvas: HTMLCanvasElement) => {
      canvas.width = width; canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      try {
        const pixels = await inflateRaw(compressedPixels);
        const img = ctx.createImageData(width, height);
        if (fmt === 5) {
          // 32-bit ARGB → RGBA; stride = width * 4 (padded to 4-byte rows)
          const stride = Math.ceil(width * 4 / 4) * 4;
          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              const src = y * stride + x * 4;
              const dst = (y * width + x) * 4;
              // SWF stores ARGB
              img.data[dst]   = pixels[src + 1]; // R
              img.data[dst+1] = pixels[src + 2]; // G
              img.data[dst+2] = pixels[src + 3]; // B
              img.data[dst+3] = hasAlpha ? pixels[src] : 255; // A
            }
          }
        } else if (fmt === 4) {
          // 15-bit RGB: 2 bytes per pixel, bits: 0RRRRRGGGGGBBBBB
          const stride = Math.ceil(width * 2 / 4) * 4;
          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              const src = y * stride + x * 2;
              const px = pixels[src] | (pixels[src + 1] << 8);
              const r = ((px >> 10) & 0x1F) << 3;
              const g = ((px >>  5) & 0x1F) << 3;
              const b = (px         & 0x1F) << 3;
              const dst = (y * width + x) * 4;
              img.data[dst] = r; img.data[dst+1] = g; img.data[dst+2] = b; img.data[dst+3] = 255;
            }
          }
        } else if (fmt === 3) {
          const colorCount = d[7] + 1;
          const palette = pixels.slice(0, colorCount * (hasAlpha ? 4 : 3));
          const indexData = pixels.slice(colorCount * (hasAlpha ? 4 : 3));
          const stride = Math.ceil(width / 4) * 4;
          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              const ci = indexData[y * stride + x];
              const dst = (y * width + x) * 4;
              const ps = hasAlpha ? ci * 4 : ci * 3;
              img.data[dst]   = palette[ps];
              img.data[dst+1] = palette[ps + 1];
              img.data[dst+2] = palette[ps + 2];
              img.data[dst+3] = hasAlpha ? palette[ps + 3] : 255;
            }
          }
        }
        ctx.putImageData(img, 0, 0);
      } catch { ctx.clearRect(0, 0, width, height); }
    },
  };
}

// ─── GFx external image references ───────────────────────────────────────────

export interface ExternalImageRef {
  charId: number;
  bitmapFormat: number;
  width: number;
  height: number;
  exportName: string;
  fileName: string;
}

export function parseExternalImages(tags: SwfTag[]): ExternalImageRef[] {
  const results: ExternalImageRef[] = [];
  for (const tag of tags) {
    if (tag.type === 1003 || tag.type === 1007) {
      const ref = parseExternalImageTag(tag.data);
      if (ref) results.push(ref);
    } else if (tag.type === 1009) {
      const ref = parseExternalImageExTag(tag.data);
      if (ref) results.push(ref);
    }
  }
  return results;
}

function parseExternalImageTag(data: Uint8Array): ExternalImageRef | null {
  if (data.length < 10) return null;
  const dv = new DataView(data.buffer, data.byteOffset);
  const charId = dv.getUint16(0, true);
  const bitmapFormat = dv.getUint16(2, true);
  const width = dv.getUint16(4, true);
  const height = dv.getUint16(6, true);

  let off = 8;
  const exportName = readCString(data, off);
  off += exportName.length + 1;
  const fileName = off < data.length ? readCString(data, off) : '';

  return { charId, bitmapFormat, width, height, exportName, fileName };
}

// Tag 1009 (`GFx_DefineExternalImageEx`) — used by the GFx exporter in MU Online.
// Layout: u16 charId, u16 bitmapFormat, u16 targetWidth, u16 width, u16 height,
//         u8 reserved, u8 fileNameLen, bytes[fileNameLen] fileName, u8 null.
function parseExternalImageExTag(data: Uint8Array): ExternalImageRef | null {
  if (data.length < 14) return null;
  const dv = new DataView(data.buffer, data.byteOffset);
  const charId = dv.getUint16(0, true);
  const bitmapFormat = dv.getUint16(2, true);
  const width = dv.getUint16(6, true);
  const height = dv.getUint16(8, true);

  // Filename lives at the tail — null-terminated, possibly prefixed by a u8 length.
  // Recover it by scanning backwards from the last non-zero printable byte.
  let end = data.length;
  while (end > 0 && data[end - 1] === 0) end--;
  let start = end;
  while (start > 0 && isPrintableAscii(data[start - 1])) start--;
  if (end - start < 3) return null;

  const fileName = new TextDecoder().decode(data.subarray(start, end));
  return { charId, bitmapFormat, width, height, exportName: '', fileName };
}

function isPrintableAscii(b: number): boolean {
  return b >= 0x20 && b < 0x7f;
}

function readCString(data: Uint8Array, offset: number): string {
  let end = offset;
  while (end < data.length && data[end] !== 0) end++;
  return new TextDecoder().decode(data.subarray(offset, end));
}

// ─── GFx sub-images (atlas rectangles) ───────────────────────────────────────

export interface SubImageRef {
  charId: number;
  parentId: number;
  sourceX: number;
  sourceY: number;
  sourceWidth: number;
  sourceHeight: number;
}

export function parseSubImages(tags: SwfTag[]): Map<number, SubImageRef> {
  const refs = new Map<number, SubImageRef>();
  for (const tag of tags) {
    // Tag 1004 and 1008 are both sub-image definitions across GFx versions.
    if (tag.type !== 1004 && tag.type !== 1008) continue;
    if (tag.data.length < 12) continue;
    const dv = new DataView(tag.data.buffer, tag.data.byteOffset);
    const charId = dv.getUint16(0, true);
    const parentId = dv.getUint16(2, true);
    const x0 = dv.getUint16(4, true);
    const y0 = dv.getUint16(6, true);
    const x1 = dv.getUint16(8, true);
    const y1 = dv.getUint16(10, true);
    if (x1 <= x0 || y1 <= y0) continue;
    refs.set(charId, {
      charId,
      parentId,
      sourceX: x0,
      sourceY: y0,
      sourceWidth: x1 - x0,
      sourceHeight: y1 - y0,
    });
  }
  return refs;
}

// Recursively collects sub-image refs from root tags and from nested sprites.
export function collectSubImages(
  rootTags: SwfTag[],
  sprites: Map<number, SwfSpriteDefinition>,
): Map<number, SubImageRef> {
  const refs = parseSubImages(rootTags);
  for (const sprite of sprites.values()) {
    for (const [id, ref] of parseSubImages(sprite.tags)) refs.set(id, ref);
  }
  return refs;
}

// ─── JPEG bitmap extraction ─────────────────────────────────────────────────

async function parseBitsJpeg(tag: SwfTag): Promise<ExtractedBitmap | null> {
  const d = tag.data;
  if (d.length < 4) return null;
  const charId = (d[1] << 8) | d[0];
  let jpegStart = 2;

  if (tag.type === 35) jpegStart = 6;
  if (tag.type === 37) jpegStart = 8;

  const detectedJpegStart = findJpegStart(d, jpegStart);
  if (detectedJpegStart < 0) return null;

  const jpegData = d.slice(detectedJpegStart);
  // Scaleform repurposes tag 37 as `DefineEditTextInfo` in CFX streams — the
  // payload is a short metadata blob that may contain a spurious FF D8 byte
  // pair. Require a plausible JPEG body to avoid fabricating bitmaps.
  if (jpegData.length < 10 || jpegData[0] !== 0xff || jpegData[1] !== 0xd8) return null;

  // Get JPEG dimensions from SOF0/SOF2 marker
  let w = 0, h = 0;
  for (let i = 0; i + 8 < jpegData.length; i++) {
    if (jpegData[i] === 0xFF && (jpegData[i+1] === 0xC0 || jpegData[i+1] === 0xC2)) {
      h = (jpegData[i+5] << 8) | jpegData[i+6];
      w = (jpegData[i+7] << 8) | jpegData[i+8];
      break;
    }
  }
  if (!w || !h) return null;

  return {
    charId, tagType: tag.type, tagName: tag.name, width: w, height: h, format: 'JPEG',
    draw: async (canvas: HTMLCanvasElement) => {
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const blob = new Blob([jpegData], { type: 'image/jpeg' });
      const url = URL.createObjectURL(blob);
      try {
        const img = new Image();
        await new Promise<void>((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = reject;
          img.src = url;
        });
        ctx.drawImage(img, 0, 0);
      } catch {
        // Ignore malformed embedded JPEG data.
      } finally {
        URL.revokeObjectURL(url);
      }
    },
  };
}

function findJpegStart(data: Uint8Array, offset: number): number {
  for (let i = Math.max(0, offset); i + 1 < data.length; i++) {
    if (data[i] === 0xff && data[i + 1] === 0xd8) return i;
  }
  return -1;
}
