// Electron main process
const { app, BrowserWindow, dialog, ipcMain, session } = require('electron');
const path = require('path');
const fs = require('fs').promises;

let mainWindow;

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
          "default-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data:; " +
          "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
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

// Read file as ArrayBuffer
ipcMain.handle('fs:readFile', async (event, filePath) => {
  try {
    const buffer = await fs.readFile(filePath);
    return {
      name: path.basename(filePath),
      data: buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength),
    };
  } catch (error) {
    console.error('Error reading file:', error);
    throw error;
  }
});

// Search for textures in directory and subdirectories
ipcMain.handle('fs:searchTextures', async (event, startPath, requiredTextures) => {
  const foundTextures = {};
  const validExtensions = ['.jpg', '.jpeg', '.png', '.tga', '.ozj', '.ozt'];

  // Normalize required texture names (remove extension, lowercase)
  const requiredNames = requiredTextures.map(tex => {
    const basename = path.basename(tex, path.extname(tex)).toLowerCase();
    return basename;
  });

  async function searchDir(dirPath, depth = 0) {
    if (depth > 3) return;

    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
          // Recursively search subdirectories
          await searchDir(fullPath, depth + 1);
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

  console.log(`[Texture Search] Found ${Object.keys(foundTextures).length}/${requiredNames.length} texture names (${Object.values(foundTextures).reduce((sum, arr) => sum + arr.length, 0)} files total)`);

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
