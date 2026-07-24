import { BMDLoader } from '../src/bmd-loader';

function createMinimalBmd(options?: {
  meshCount?: number;
  boneCount?: number;
  actionCount?: number;
  extraBytes?: number;
}): ArrayBuffer {
  const buffer = new ArrayBuffer(4 + 32 + 6 + (options?.extraBytes ?? 0));
  const bytes = new Uint8Array(buffer);
  bytes.set([0x42, 0x4d, 0x44, 0x0a]); // BMD, version 10
  const view = new DataView(buffer);
  view.setUint16(36, options?.meshCount ?? 0, true);
  view.setUint16(38, options?.boneCount ?? 0, true);
  view.setUint16(40, options?.actionCount ?? 0, true);
  return buffer;
}

describe('BMD parser validation', () => {
  const loader = new BMDLoader();

  it('accepts a minimal empty BMD file', () => {
    const parsed = loader.parse(createMinimalBmd());
    expect(parsed.meshes).toHaveLength(0);
    expect(parsed.bones).toHaveLength(0);
    expect(parsed.actions).toHaveLength(0);
  });

  it('rejects a truncated file', () => {
    expect(() => loader.parse(new Uint8Array([0x42, 0x4d, 0x44]).buffer))
      .toThrow(/too small/i);
  });

  it('rejects an encrypted payload that escapes the input buffer', () => {
    const buffer = new ArrayBuffer(8);
    const bytes = new Uint8Array(buffer);
    bytes.set([0x42, 0x4d, 0x44, 0x0c]);
    new DataView(buffer).setInt32(4, 1024, true);

    expect(() => loader.parse(buffer)).toThrow(/payload size/i);
  });

  it('rejects negative mesh element counts', () => {
    const buffer = createMinimalBmd({ meshCount: 1, extraBytes: 10 });
    new DataView(buffer).setInt16(42, -1, true);
    expect(() => loader.parse(buffer)).toThrow(/vertex count/i);
  });
});
