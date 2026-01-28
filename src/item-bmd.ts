// src/item-bmd.ts

export interface ItemDefinition {
  index: number;
  group: number;
  id: number;
  modelFolder: string;
  modelName: string;
  itemName: string;
  modelPath: string;
  width: number;
  height: number;
}

const XOR_KEY = new Uint8Array([0xfc, 0xcf, 0xab]);

function xorBuffer(data: Uint8Array): void {
  for (let i = 0; i < data.length; i++) {
    data[i] ^= XOR_KEY[i % XOR_KEY.length];
  }
}

function readFixedString(view: DataView, offset: number, length: number): string {
  if (offset + length > view.byteLength) return '';
  const bytes = new Uint8Array(view.buffer, view.byteOffset + offset, length);
  const zero = bytes.indexOf(0);
  const slice = zero >= 0 ? bytes.subarray(0, zero) : bytes;

  // Item strings can be extended ASCII. windows-1252 is a safe fallback in browsers.
  return new TextDecoder('windows-1252', { fatal: false })
    .decode(slice)
    .trim();
}

function normalizePath(input: string): string {
  return input.replace(/\\/g, '/').replace(/^\/+/, '');
}

export function buildModelPath(folder: string, name: string): string {
  const cleanFolder = normalizePath(folder.trim());
  const cleanName = normalizePath(name.trim());

  if (!cleanName) return '';
  if (!cleanFolder) return cleanName;
  if (cleanName.includes('/')) return cleanName;

  return cleanFolder.endsWith('/')
    ? `${cleanFolder}${cleanName}`
    : `${cleanFolder}/${cleanName}`;
}

export function parseItemBmd(buffer: ArrayBuffer): ItemDefinition[] {
  const view = new DataView(buffer);
  if (view.byteLength < 8) return [];

  const itemCount = view.getInt32(0, true);
  if (itemCount <= 0) return [];

  const bytesPerItem = Math.floor((view.byteLength - 8) / itemCount);
  if (bytesPerItem <= 0) return [];

  const items: ItemDefinition[] = [];
  let offset = 4;

  for (let i = 0; i < itemCount && offset + bytesPerItem <= view.byteLength - 4; i++) {
    const raw = new Uint8Array(buffer, offset, bytesPerItem);
    const copy = new Uint8Array(raw);
    xorBuffer(copy);

    const itemView = new DataView(copy.buffer, copy.byteOffset, copy.byteLength);

    const index = itemView.getInt32(0, true);
    const group = itemView.getUint16(4, true);
    const id = itemView.getUint16(6, true);

    const modelFolder = readFixedString(itemView, 8, 260);
    const modelName = readFixedString(itemView, 268, 260);
    const itemName = readFixedString(itemView, 528, 64);

    const width = itemView.getUint8(602);
    const height = itemView.getUint8(603);

    const modelPath = buildModelPath(modelFolder, modelName);

    items.push({
      index,
      group,
      id,
      modelFolder,
      modelName,
      itemName,
      modelPath,
      width,
      height,
    });

    offset += bytesPerItem;
  }

  return items;
}
