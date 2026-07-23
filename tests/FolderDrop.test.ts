import {
  collectDroppedFolderFiles,
  mapSelectedFolderFiles,
} from '../src/utils/FolderDrop';

interface MockEntry {
  isFile: boolean;
  isDirectory: boolean;
  name: string;
  file?: (success: (file: File) => void, failure?: (error: DOMException) => void) => void;
  createReader?: () => {
    readEntries: (
      success: (entries: MockEntry[]) => void,
      failure?: (error: DOMException) => void,
    ) => void;
  };
}

function mockFile(name: string, relativePath = ''): File {
  return { name, webkitRelativePath: relativePath } as File;
}

function fileEntry(file: File): MockEntry {
  return {
    isFile: true,
    isDirectory: false,
    name: file.name,
    file: success => success(file),
  };
}

function directoryEntry(name: string, children: MockEntry[]): MockEntry {
  return {
    isFile: false,
    isDirectory: true,
    name,
    createReader: () => {
      let read = false;
      return {
        readEntries: success => {
          if (read) {
            success([]);
            return;
          }
          read = true;
          success(children);
        },
      };
    },
  };
}

describe('FolderDrop', () => {
  it('keeps webkitRelativePath for files selected with a directory input', () => {
    const item = mockFile('item.bmd', 'Data/Local/item.bmd');

    expect(mapSelectedFolderFiles([item])).toEqual([
      { file: item, relativePath: 'Data/Local/item.bmd' },
    ]);
  });

  it('recursively enumerates files when a browser folder is dropped', async () => {
    const item = mockFile('item.bmd');
    const player = mockFile('player.bmd');
    const root = directoryEntry('Data', [
      directoryEntry('Local', [fileEntry(item)]),
      directoryEntry('Player', [fileEntry(player)]),
    ]);

    const dataTransfer = {
      items: [{ webkitGetAsEntry: () => root }],
      files: [],
    } as unknown as DataTransfer;

    await expect(collectDroppedFolderFiles(dataTransfer)).resolves.toEqual([
      { file: item, relativePath: 'Data/Local/item.bmd' },
      { file: player, relativePath: 'Data/Player/player.bmd' },
    ]);
  });

  it('falls back to DataTransfer.files when entry APIs are unavailable', async () => {
    const item = mockFile('item.bmd', 'Data/Local/item.bmd');
    const dataTransfer = {
      items: [{}],
      files: [item],
    } as unknown as DataTransfer;

    await expect(collectDroppedFolderFiles(dataTransfer)).resolves.toEqual([
      { file: item, relativePath: 'Data/Local/item.bmd' },
    ]);
  });
});
