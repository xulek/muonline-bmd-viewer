import { mkdtemp, mkdir, rm, writeFile } from 'fs/promises';
import { tmpdir } from 'os';
import path from 'path';

const {
  resolveDataFilePath,
  resolveDataRootFromPaths,
}: {
  resolveDataFilePath: (dataRootPath: string, relativePath: string) => Promise<string | null>;
  resolveDataRootFromPaths: (candidatePaths: string[]) => Promise<string | null>;
} = require('../electron/data-root-resolver');

describe('Data root resolver', () => {
  let workspace: string;
  let dataRoot: string;
  let itemPath: string;

  beforeEach(async () => {
    workspace = await mkdtemp(path.join(tmpdir(), 'bmd-viewer-data-root-'));
    dataRoot = path.join(workspace, 'Client', 'DaTa');
    const localDirectory = path.join(dataRoot, 'LoCaL');
    itemPath = path.join(localDirectory, 'Item.BMD');

    await mkdir(localDirectory, { recursive: true });
    await writeFile(itemPath, Buffer.from([1, 2, 3]));
  });

  afterEach(async () => {
    await rm(workspace, { recursive: true, force: true });
  });

  it('resolves the Data folder when the folder itself is dropped', async () => {
    await expect(resolveDataRootFromPaths([dataRoot])).resolves.toBe(dataRoot);
  });

  it('resolves the Data folder from a parent client directory', async () => {
    await expect(resolveDataRootFromPaths([path.dirname(dataRoot)])).resolves.toBe(dataRoot);
  });

  it('resolves the Data folder from a nested dropped file', async () => {
    await expect(resolveDataRootFromPaths([itemPath])).resolves.toBe(dataRoot);
  });

  it('reads relative Data paths case-insensitively', async () => {
    await expect(resolveDataFilePath(dataRoot, 'local/item.bmd')).resolves.toBe(itemPath);
    await expect(resolveDataFilePath(dataRoot, 'Data/LOCAL/ITEM.BMD')).resolves.toBe(itemPath);
  });

  it('rejects relative paths that escape the Data root', async () => {
    await expect(resolveDataFilePath(dataRoot, '../secret.txt')).resolves.toBeNull();
  });
});
