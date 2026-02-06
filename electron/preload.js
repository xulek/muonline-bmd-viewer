// Electron preload script - secure bridge between main and renderer
const { contextBridge, ipcRenderer, webUtils } = require('electron');

// Expose safe API to renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // Check if running in Electron
  isElectron: true,

  // Open file dialog and return file path
  openFile: (options) => ipcRenderer.invoke('dialog:openFile', options),

  // Open multiple files dialog
  openFiles: (options) => ipcRenderer.invoke('dialog:openFiles', options),

  // Open directory dialog
  openDirectory: () => ipcRenderer.invoke('dialog:openDirectory'),

  // Read file from disk
  readFile: (filePath) => ipcRenderer.invoke('fs:readFile', filePath),

  // Scan Data directory for World{N} subfolders
  scanWorldFolders: (dataRootPath) => ipcRenderer.invoke('fs:scanWorldFolders', dataRootPath),

  // Read all files from World{N} and Object{N}
  readTerrainWorldFiles: (dataRootPath, worldNumber) => ipcRenderer.invoke('fs:readTerrainWorldFiles', dataRootPath, worldNumber),

  // Search for textures in directory and subdirectories
  searchTextures: (startPath, requiredTextures) => ipcRenderer.invoke('fs:searchTextures', startPath, requiredTextures),

  // Get real file path from File object (for drag & drop)
  getFilePath: (file) => {
    try {
      // webUtils.getPathForFile is available in Electron 20+
      if (webUtils && webUtils.getPathForFile) {
        return webUtils.getPathForFile(file);
      }
      // Fallback: try file.path
      return file.path || null;
    } catch (e) {
      console.error('Error getting file path:', e);
      return null;
    }
  },
});
