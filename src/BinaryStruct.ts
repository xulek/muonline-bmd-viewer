// src/BinaryStruct.ts

const Primitives = {
    int16:   { size: 2, read: (v: DataView, o: number) => v.getInt16(o, true)   },
    uint16:  { size: 2, read: (v: DataView, o: number) => v.getUint16(o, true)  },
    uint8:   { size: 1, read: (v: DataView, o: number) => v.getUint8(o)         },
    float32: { size: 4, read: (v: DataView, o: number) => v.getFloat32(o, true) },
} as const;

type PrimitiveType = keyof typeof Primitives;
type Field = [string, PrimitiveType];
export type StructLayout = readonly Field[];

export function calculateSize(layout: StructLayout): number {
  let size = 0;
  for (const [, type] of layout) {
    size += Primitives[type].size;
  }
  return size;
}

export function readStruct<T>(view: DataView, layout: StructLayout, baseOffset: number): { data: T, newOffset: number } {
  const structSize = calculateSize(layout);
  
  // Sprawdzenie granic bufora
  if (baseOffset + structSize > view.byteLength) {
    throw new Error(`Cannot read struct at offset ${baseOffset}: would require ${structSize} bytes but only ${view.byteLength - baseOffset} bytes available`);
  }
  
  const result: any = {};
  let offset = baseOffset;

  for (const [name, type] of layout) {
    try {
      if (!name.startsWith('__')) {
        result[name] = Primitives[type].read(view, offset);
      }
      offset += Primitives[type].size;
    } catch (error) {
      throw new Error(`Error reading field '${name}' of type '${type}' at offset ${offset}: ${error}`);
    }
  }
  
  return { data: result as T, newOffset: offset };
}

/**
 * Odczytuje tablicę struktur z lepszym error handling
 */
export function readStructArray<T>(
  view: DataView, 
  layout: StructLayout, 
  baseOffset: number, 
  count: number
): { data: T[], newOffset: number } | null {
  
  if (count === 0) {
    return { data: [], newOffset: baseOffset };
  }
  
  const structSize = calculateSize(layout);
  const totalSize = structSize * count;
  
  // Sprawdzenie czy mamy wystarczająco danych
  if (baseOffset + totalSize > view.byteLength) {
    console.error(`Cannot read ${count} structs of size ${structSize} (total ${totalSize} bytes) at offset ${baseOffset}: buffer size is ${view.byteLength}`);
    return null;
  }
  
  const results: T[] = [];
  let offset = baseOffset;

  for (let i = 0; i < count; i++) {
    try {
      const { data, newOffset } = readStruct<T>(view, layout, offset);
      results.push(data);
      offset = newOffset;
    } catch (error) {
      console.error(`Error reading struct ${i}/${count} at offset ${offset}:`, error);
      return null;
    }
  }

  return { data: results, newOffset: offset };
}