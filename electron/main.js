// Electron main process
const { app, BrowserWindow, dialog, ipcMain, session } = require('electron');
const path = require('path');
const fs = require('fs').promises;
const { resolveDataFilePath, resolveDataRootFromPaths } = require('./data-root-resolver');
const { searchTextureFiles } = require('./texture-search');

let mainWindow;
const missingReadFiles = new Set();
const TERRAIN_OBJECT_OVERRIDES_FILE = 'terrain-object-overrides.json';

function isMissingPathError(error) {
  return error && (error.code === 'ENOENT' || error.code === 'ENOTDIR');
}

function getTerrainObjectOverridesPath() {
  return path.join(app.getPath('userData'), TERRAIN_OBJECT_OVERRIDES_FILE);
}

async function readDirectoryFilesRecursive(rootDir, keyPrefix) {
  const files = [];

  async function walk(dirPath, currentPrefix) {
    let entries;
    try {
      entries = await fs.readdir(dirPath, { withFileTypes: true });
    } catch (error) {
      if (isMissingPathError(error)) {
        return;
      }
      throw error;
    }

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath, `${currentPrefix}/${entry.name}`);
        continue;
      }
      if (!entry.isFile()) {
        continue;
      }

      try {
        const buffer = await fs.readFile(fullPath);
        files.push({
          key: `${currentPrefix}/${entry.name}`.replace(/\\/g, '/').toLowerCase(),
          name: entry.name,
          data: buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength),
        });
      } catch (error) {
        console.warn(`[fs:readTerrainWorldFiles] Failed to read file: ${fullPath}`, error);
      }
    }
  }

  await walk(rootDir, keyPrefix.toLowerCase());
  return files;
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      webSecurity: true,
    },
    title: 'MU Online BMD Viewer',
    icon: path.join(__dirname, '../public/vite.svg'),
  });

  // Set Content Security Policy
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [
          "default-src 'self'; " +
          "script-src 'self'; " +
          "worker-src 'self' blob:; " +
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
          "font-src 'self' https://fonts.gstatic.com; " +
          "img-src 'self' data: blob:; " +
          "media-src 'self' data: blob:; " +
          "connect-src 'self' http://localhost:5173 ws://localhost:5173; " +
          "object-src 'none'; base-uri 'self'; frame-src 'none';"
        ]
      }
    });
  });


  mainWindow.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  mainWindow.webContents.on('will-navigate', (event, navigationUrl) => {
    const currentUrl = mainWindow?.webContents.getURL();
    if (!currentUrl) return;
    try {
      if (new URL(navigationUrl).origin !== new URL(currentUrl).origin) {
        event.preventDefault();
      }
    } catch {
      event.preventDefault();
    }
  });

  // In development, load from Vite dev server
  // In production, load from built files
  if (!app.isPackaged) {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
    console.log('🚀 Running in DEVELOPMENT mode - loading from Vite dev server');
  } else {
    const indexPath = path.join(__dirname, '../dist/index.html');
    mainWindow.loadFile(indexPath);
    console.log('📦 Running in PRODUCTION mode - loading from:', indexPath);
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Handle file selection dialog
ipcMain.handle('dialog:openFile', async (event, options) => {
  const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: options?.filters || [],
  });

  if (canceled || !filePaths || filePaths.length === 0) {
    return null;
  }

  return filePaths[0];
});

// Handle multiple files selection
ipcMain.handle('dialog:openFiles', async (event, options) => {
  const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile', 'multiSelections'],
    filters: options?.filters || [],
  });

  if (canceled || !filePaths) {
    return [];
  }

  return filePaths;
});

// Handle directory selection
ipcMain.handle('dialog:openDirectory', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory'],
  });

  if (canceled || !filePaths || filePaths.length === 0) {
    return null;
  }

  return filePaths[0];
});

// List files in a directory (returns [{name, path}])
ipcMain.handle('fs:readDir', async (event, dirPath) => {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    return entries
      .filter(e => e.isFile())
      .map(e => ({ name: e.name, path: path.join(dirPath, e.name) }));
  } catch {
    return [];
  }
});

// Read file as ArrayBuffer
ipcMain.handle('fs:readFile', async (event, filePath) => {
  try {
    const buffer = await fs.readFile(filePath);
    return {
      name: path.basename(filePath),
      data: buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength),
    };
  } catch (error) {
    if (error && error.code === 'ENOENT') {
      if (!missingReadFiles.has(filePath)) {
        missingReadFiles.add(filePath);
        console.warn(`[fs:readFile] Missing file: ${filePath}`);
      }
      return null;
    }
    console.error('[fs:readFile] Error reading file:', error);
    throw error;
  }
});

ipcMain.handle('fs:resolveDataRoot', async (event, candidatePaths) => {
  try {
    return await resolveDataRootFromPaths(candidatePaths);
  } catch (error) {
    console.warn('[fs:resolveDataRoot] Failed to resolve dropped Data folder:', error);
    return null;
  }
});

ipcMain.handle('fs:readDataFile', async (event, dataRootPath, relativePath) => {
  try {
    const resolvedPath = await resolveDataFilePath(dataRootPath, relativePath);
    if (!resolvedPath) {
      return null;
    }

    const buffer = await fs.readFile(resolvedPath);
    return {
      name: path.basename(resolvedPath),
      data: buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength),
    };
  } catch (error) {
    if (isMissingPathError(error)) {
      return null;
    }
    console.warn('[fs:readDataFile] Failed to read Data file:', error);
    return null;
  }
});

ipcMain.handle('fs:readExistingFiles', async (event, filePaths) => {
  if (!Array.isArray(filePaths)) {
    return [];
  }

  const files = [];
  for (const filePath of filePaths) {
    if (typeof filePath !== 'string' || !filePath) {
      continue;
    }

    try {
      const buffer = await fs.readFile(filePath);
      files.push({
        name: path.basename(filePath),
        data: buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength),
      });
    } catch (error) {
      if (!isMissingPathError(error)) {
        console.warn(`[fs:readExistingFiles] Failed to read file: ${filePath}`, error);
      }
    }
  }

  return files;
});

// Scan Data folder for World{N} directories
ipcMain.handle('fs:scanWorldFolders', async (event, dataRootPath) => {
  if (!dataRootPath) {
    return [];
  }

  try {
    const entries = await fs.readdir(dataRootPath, { withFileTypes: true });
    const worlds = [];

    for (const entry of entries) {
      if (!entry.isDirectory()) {
        continue;
      }
      const match = entry.name.match(/^world(\d+)$/i);
      if (match) {
        worlds.push(parseInt(match[1], 10));
      }
    }

    return worlds.sort((a, b) => a - b);
  } catch (error) {
    console.warn(`[fs:scanWorldFolders] Failed to scan Data folder: ${dataRootPath}`, error);
    return [];
  }
});

// Read all files from Data/World{N} and Data/Object{N}
ipcMain.handle('fs:readTerrainWorldFiles', async (event, dataRootPath, worldNumber) => {
  if (!dataRootPath || !Number.isFinite(worldNumber)) {
    return [];
  }

  const worldIndex = Math.trunc(worldNumber);
  if (worldIndex <= 0) {
    return [];
  }

  const worldFolder = `World${worldIndex}`;
  const objectFolder = `Object${worldIndex}`;

  try {
    const [worldFiles, objectFiles] = await Promise.all([
      readDirectoryFilesRecursive(path.join(dataRootPath, worldFolder), worldFolder),
      readDirectoryFilesRecursive(path.join(dataRootPath, objectFolder), objectFolder),
    ]);
    return [...worldFiles, ...objectFiles];
  } catch (error) {
    console.error(`[fs:readTerrainWorldFiles] Failed to read World ${worldIndex} files`, error);
    return [];
  }
});

// Search only for the texture names requested by the renderer. A best-effort
// targeted scan avoids the all-or-nothing failure mode of the removed full
// Data-tree cache.
ipcMain.handle('fs:searchTextures', async (event, startPath, requiredTextures) => {
  try {
    return await searchTextureFiles(startPath, requiredTextures, {
      onDirectoryError: (directoryPath, error) => {
        if (!isMissingPathError(error) && error?.code !== 'EACCES' && error?.code !== 'EPERM') {
          console.warn(`[fs:searchTextures] Skipping directory ${directoryPath}:`, error);
        }
      },
    });
  } catch (error) {
    console.warn(`[fs:searchTextures] Failed to scan ${startPath}:`, error);
    return {};
  }
});

ipcMain.handle('fs:readTerrainObjectOverrides', async () => {
  const filePath = getTerrainObjectOverridesPath();
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    return {
      path: filePath,
      data: JSON.parse(raw),
    };
  } catch (error) {
    if (isMissingPathError(error)) {
      return {
        path: filePath,
        data: null,
      };
    }

    console.error('[fs:readTerrainObjectOverrides] Error reading overrides:', error);
    return {
      path: filePath,
      data: null,
      error: error instanceof Error ? error.message : String(error),
    };
  }
});

ipcMain.handle('fs:writeTerrainObjectOverrides', async (event, data) => {
  const filePath = getTerrainObjectOverridesPath();
  try {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
    return {
      path: filePath,
    };
  } catch (error) {
    console.error('[fs:writeTerrainObjectOverrides] Error writing overrides:', error);
    return {
      path: filePath,
      error: error instanceof Error ? error.message : String(error),
    };
  }
});

ipcMain.handle('fs:writeFileInDirectory', async (event, rootPath, relativePath, data) => {
  if (typeof rootPath !== 'string' || !rootPath || typeof relativePath !== 'string' || !relativePath) {
    return {
      path: null,
      error: 'Invalid export path.',
    };
  }

  try {
    const root = path.resolve(rootPath);
    const target = path.resolve(root, relativePath);
    const isInsideRoot = target === root || target.startsWith(root + path.sep);
    if (!isInsideRoot) {
      return {
        path: null,
        error: 'Export path escapes the selected folder.',
      };
    }

    let bytes;
    if (Buffer.isBuffer(data)) {
      bytes = data;
    } else if (data instanceof ArrayBuffer) {
      bytes = Buffer.from(data);
    } else if (ArrayBuffer.isView(data)) {
      bytes = Buffer.from(data.buffer, data.byteOffset, data.byteLength);
    } else {
      return {
        path: null,
        error: 'Invalid export data.',
      };
    }

    if (bytes.byteLength > 256 * 1024 * 1024) {
      return { path: null, error: 'Export data is too large.' };
    }

    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, bytes);
    return {
      path: target,
    };
  } catch (error) {
    console.error('[fs:writeFileInDirectory] Error writing file:', error);
    return {
      path: null,
      error: error instanceof Error ? error.message : String(error),
    };
  }
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
