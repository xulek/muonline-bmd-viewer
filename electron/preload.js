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

  // Read only files that exist, silently skipping missing paths
  readExistingFiles: (filePaths) => ipcRenderer.invoke('fs:readExistingFiles', filePaths),

  // Resolve a dropped file or directory to the nearest valid Data root
  resolveDataRoot: (candidatePaths) => ipcRenderer.invoke('fs:resolveDataRoot', candidatePaths),

  // Read a file below the Data root with case-insensitive path resolution
  readDataFile: (dataRootPath, relativePath) => ipcRenderer.invoke('fs:readDataFile', dataRootPath, relativePath),

  // Scan Data directory for World{N} subfolders
  scanWorldFolders: (dataRootPath) => ipcRenderer.invoke('fs:scanWorldFolders', dataRootPath),

  // Read all files from World{N} and Object{N}
  readTerrainWorldFiles: (dataRootPath, worldNumber) => ipcRenderer.invoke('fs:readTerrainWorldFiles', dataRootPath, worldNumber),

  // Search for textures in directory and subdirectories
  searchTextures: (startPath, requiredTextures) => ipcRenderer.invoke('fs:searchTextures', startPath, requiredTextures),

  // Read persisted terrain object overrides from app user data
  readTerrainObjectOverrides: () => ipcRenderer.invoke('fs:readTerrainObjectOverrides'),

  // Write persisted terrain object overrides to app user data
  writeTerrainObjectOverrides: (data) => ipcRenderer.invoke('fs:writeTerrainObjectOverrides', data),

  // Write a file below a user-selected export directory
  writeFileInDirectory: (rootPath, relativePath, data) => ipcRenderer.invoke('fs:writeFileInDirectory', rootPath, relativePath, data),

  // List sound files in a directory
  readDir: (dirPath) => ipcRenderer.invoke('fs:readDir', dirPath),

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
