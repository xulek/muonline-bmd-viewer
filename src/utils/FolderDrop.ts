export interface DroppedFolderFile {
  file: File;
  relativePath: string;
}

interface FileSystemEntryLike {
  readonly isFile: boolean;
  readonly isDirectory: boolean;
  readonly name: string;
  file?: (
    successCallback: (file: File) => void,
    errorCallback?: (error: DOMException) => void,
  ) => void;
  createReader?: () => FileSystemDirectoryReaderLike;
}

interface FileSystemDirectoryReaderLike {
  readEntries: (
    successCallback: (entries: FileSystemEntryLike[]) => void,
    errorCallback?: (error: DOMException) => void,
  ) => void;
}

interface DataTransferItemEntryAccessor {
  webkitGetAsEntry?: () => FileSystemEntryLike | null;
}

function getSelectedFileRelativePath(file: File): string {
  const relativePath = (file as File & { webkitRelativePath?: string }).webkitRelativePath;
  return relativePath || file.name;
}

export function mapSelectedFolderFiles(files: readonly File[]): DroppedFolderFile[] {
  return files.map(file => ({
    file,
    relativePath: getSelectedFileRelativePath(file),
  }));
}

function readFileEntry(entry: FileSystemEntryLike): Promise<File> {
  return new Promise((resolve, reject) => {
    if (!entry.file) {
      reject(new Error(`Dropped entry "${entry.name}" cannot be read as a file.`));
      return;
    }

    entry.file(resolve, reject);
  });
}

function readAllDirectoryEntries(reader: FileSystemDirectoryReaderLike): Promise<FileSystemEntryLike[]> {
  return new Promise((resolve, reject) => {
    const entries: FileSystemEntryLike[] = [];

    const readNextBatch = () => {
      reader.readEntries(batch => {
        if (batch.length === 0) {
          resolve(entries);
          return;
        }

        entries.push(...batch);
        readNextBatch();
      }, reject);
    };

    readNextBatch();
  });
}

async function collectEntryFiles(
  entry: FileSystemEntryLike,
  parentPath: string,
  output: DroppedFolderFile[],
): Promise<void> {
  const relativePath = parentPath ? `${parentPath}/${entry.name}` : entry.name;

  if (entry.isFile) {
    output.push({
      file: await readFileEntry(entry),
      relativePath,
    });
    return;
  }

  if (!entry.isDirectory || !entry.createReader) {
    return;
  }

  const children = await readAllDirectoryEntries(entry.createReader());
  for (const child of children) {
    await collectEntryFiles(child, relativePath, output);
  }
}

export async function collectDroppedFolderFiles(dataTransfer: DataTransfer): Promise<DroppedFolderFile[]> {
  const rootEntries = Array.from(dataTransfer.items || [])
    .map(item => (item as unknown as DataTransferItemEntryAccessor).webkitGetAsEntry?.() || null)
    .filter((entry): entry is FileSystemEntryLike => entry !== null);

  if (rootEntries.length > 0) {
    const files: DroppedFolderFile[] = [];
    for (const entry of rootEntries) {
      await collectEntryFiles(entry, '', files);
    }
    if (files.length > 0) {
      return files;
    }
  }

  return mapSelectedFolderFiles(Array.from(dataTransfer.files || []));
}
