// Electron main process
const { app, BrowserWindow, dialog, ipcMain, session } = require('electron');
const path = require('path');
const fs = require('fs').promises;

let mainWindow;
const missingReadFiles = new Set();

function isMissingPathError(error) {
  return error && (error.code === 'ENOENT' || error.code === 'ENOTDIR');
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
      // Enable file path in drag & drop events
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
          // Removed 'unsafe-eval' for better security
          // Web Workers still work with blob: URLs
          "default-src 'self' 'unsafe-inline' blob: data:; " +
          "script-src 'self' 'unsafe-inline'; " +
          "worker-src 'self' blob:; " +
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
          "font-src 'self' https://fonts.gstatic.com; " +
          "img-src 'self' data: blob:;"
        ]
      }
    });
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

// Search for textures in directory and subdirectories
ipcMain.handle('fs:searchTextures', async (event, startPath, requiredTextures) => {
  const foundTextures = {};
  const validExtensions = ['.jpg', '.jpeg', '.png', '.tga', '.ozj', '.ozt'];
  const extensionPriority = ['.ozj', '.ozt', '.tga', '.png', '.jpg', '.jpeg'];

  // Normalize required texture names (remove extension, lowercase)
  const requiredNames = requiredTextures.map(tex => {
    const basename = path.basename(tex, path.extname(tex)).toLowerCase();
    return basename;
  });

  async function searchDir(dirPath) {
    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
          // Recursively search subdirectories
          await searchDir(fullPath);
        } else if (entry.isFile()) {
          const lowerName = entry.name.toLowerCase();
          const ext = path.extname(lowerName);
          if (validExtensions.includes(ext)) {
            const nameWithoutExt = path.basename(lowerName, ext);

            // Check if this texture is required
            if (requiredNames.includes(nameWithoutExt)) {
              // Add ALL files with matching base name (not just first one)
              if (!foundTextures[nameWithoutExt]) {
                foundTextures[nameWithoutExt] = [];
              }
              foundTextures[nameWithoutExt].push(fullPath);
            }
          }
        }
      }
    } catch (error) {
      // Ignore permission errors, etc.
    }
  }

  await searchDir(startPath);

  const rankExt = (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    const idx = extensionPriority.indexOf(ext);
    return idx === -1 ? extensionPriority.length : idx;
  };

  // Sort each list so the preferred extension is first.
  for (const name of Object.keys(foundTextures)) {
    foundTextures[name].sort((a, b) => {
      const rankDiff = rankExt(a) - rankExt(b);
      if (rankDiff !== 0) return rankDiff;
      return a.localeCompare(b);
    });
  }

  console.log(`[Texture Search] Found ${Object.keys(foundTextures).length}/${requiredNames.length} texture names (${Object.values(foundTextures).reduce((sum, arr) => sum + arr.length, 0)} files total)`);
  if (requiredNames.length <= 3) {
    for (const name of requiredNames) {
      const matches = foundTextures[name];
      if (matches && matches.length > 0) {
        console.log(`[Texture Search] Resolved ${name} -> ${matches[0]} (${matches.length} match${matches.length === 1 ? '' : 'es'})`);
      }
    }
  }

  return foundTextures;
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
