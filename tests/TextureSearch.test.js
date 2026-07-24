const fs = require('fs');
const fsp = fs.promises;
const os = require('os');
const path = require('path');
const { searchTextureFiles } = require('../electron/texture-search');

describe('searchTextureFiles', () => {
  let root;

  beforeEach(async () => {
    root = await fsp.mkdtemp(path.join(os.tmpdir(), 'bmd-textures-'));
    await fsp.mkdir(path.join(root, 'Player'), { recursive: true });
    await fsp.mkdir(path.join(root, 'Effects'), { recursive: true });
    await fsp.mkdir(path.join(root, 'Broken'), { recursive: true });
    await fsp.writeFile(path.join(root, 'Player', 'SkinClass01.OZJ'), Buffer.from([1]));
    await fsp.writeFile(path.join(root, 'Effects', 'SkinClass01.jpg'), Buffer.from([2]));
    await fsp.writeFile(path.join(root, 'Player', 'Unrelated.OZJ'), Buffer.from([3]));
  });

  afterEach(async () => {
    await fsp.rm(root, { recursive: true, force: true });
  });

  test('finds only requested texture names and preserves extension priority', async () => {
    const result = await searchTextureFiles(root, ['Player/SkinClass01.tga']);

    expect(Object.keys(result)).toEqual(['skinclass01']);
    expect(result.skinclass01).toHaveLength(2);
    expect(result.skinclass01[0].toLowerCase()).toMatch(/skinclass01\.ozj$/);
  });

  test('keeps matches when one nested directory cannot be read', async () => {
    const nativeReaddir = fsp.readdir.bind(fsp);
    const result = await searchTextureFiles(root, ['SkinClass01'], {
      readdir: async (directoryPath, options) => {
        if (path.basename(directoryPath) === 'Broken') {
          const error = new Error('simulated directory failure');
          error.code = 'EIO';
          throw error;
        }
        return nativeReaddir(directoryPath, options);
      },
    });

    expect(result.skinclass01).toHaveLength(2);
  });
});
