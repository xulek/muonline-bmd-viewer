// Electron helper module - provides file access in desktop mode
// This module works both in browser and Electron

// Type definitions for Electron API
interface ElectronAPI {
  isElectron: boolean;
  openFile: (options?: { filters?: Array<{ name: string; extensions: string[] }> }) => Promise<string | null>;
  openFiles: (options?: { filters?: Array<{ name: string; extensions: string[] }> }) => Promise<string[]>;
  openDirectory: () => Promise<string | null>;
  readFile: (filePath: string) => Promise<{ name: string; data: ArrayBuffer } | null>;
  searchTextures: (startPath: string, requiredTextures: string[]) => Promise<Record<string, string[]>>;
  getFilePath: (file: File) => string | null;
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI;
  }
}

/**
 * Check if running in Electron
 */
export function isElectron(): boolean {
  return window.electronAPI?.isElectron === true;
}

/**
 * Get file path from File object (for drag & drop in Electron)
 * @param file - File object from drag & drop or file input
 * @returns Full file path or null
 */
export function getFilePathFromFile(file: File): string | null {
  if (!isElectron() || !window.electronAPI) {
    return null;
  }
  return window.electronAPI.getFilePath(file);
}

/**
 * Open file dialog and get file path (Electron only)
 */
export async function openFileDialog(filters?: Array<{ name: string; extensions: string[] }>): Promise<string | null> {
  if (!isElectron() || !window.electronAPI) {
    console.warn('openFileDialog is only available in Electron');
    return null;
  }
  return window.electronAPI.openFile({ filters });
}

/**
 * Open multiple files dialog (Electron only)
 */
export async function openFilesDialog(filters?: Array<{ name: string; extensions: string[] }>): Promise<string[]> {
  if (!isElectron() || !window.electronAPI) {
    console.warn('openFilesDialog is only available in Electron');
    return [];
  }
  return window.electronAPI.openFiles({ filters });
}

/**
 * Open directory dialog (Electron only)
 */
export async function openDirectoryDialog(): Promise<string | null> {
  if (!isElectron() || !window.electronAPI) {
    console.warn('openDirectoryDialog is only available in Electron');
    return null;
  }
  return window.electronAPI.openDirectory();
}

/**
 * Read file from path (Electron only)
 */
export async function readFileFromPath(filePath: string): Promise<{ name: string; data: ArrayBuffer } | null> {
  if (!isElectron() || !window.electronAPI) {
    console.warn('readFileFromPath is only available in Electron');
    return null;
  }
  return window.electronAPI.readFile(filePath);
}

/**
 * Search for textures in a directory tree (Electron only)
 */
export async function searchTextures(
  startPath: string,
  requiredTextures: string[],
): Promise<Record<string, string[]>> {
  if (!isElectron() || !window.electronAPI) {
    console.warn('searchTextures is only available in Electron');
    return {};
  }
  return window.electronAPI.searchTextures(startPath, requiredTextures);
}

/**
 * Create a File object from Electron file data
 */
export function createFileFromElectronData(name: string, data: ArrayBuffer): File {
  const blob = new Blob([data]);
  return new File([blob], name);
}

/**
 * Show "Open from disk" button if in Electron mode
 * Returns true if button was added, false otherwise
 */
export function addElectronFileButtons(containerId: string, onFileSelected: (file: File) => void): boolean {
  if (!isElectron()) {
    return false;
  }

  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`Container ${containerId} not found`);
    return false;
  }

  // Add "Load from disk" button
  const button = document.createElement('button');
  button.textContent = '📁 Open from Disk';
  button.className = 'modern-btn';
  button.style.width = '100%';
  button.style.marginTop = '0.5rem';

  button.addEventListener('click', async () => {
    const filePath = await openFileDialog([
      { name: 'BMD Files', extensions: ['bmd'] }
    ]);

    if (filePath) {
      const fileData = await readFileFromPath(filePath);
      if (fileData) {
        const file = createFileFromElectronData(fileData.name, fileData.data);
        onFileSelected(file);
      }
    }
  });

  container.appendChild(button);
  return true;
}

/**
 * Show notification that we're running in desktop mode
 */
export function showElectronModeIndicator(): void {
  if (!isElectron()) {
    return;
  }

  console.log('%c🖥️  Running in Desktop Mode (Electron)', 'color: #4CAF50; font-weight: bold; font-size: 14px;');

  // Optional: Add visual indicator to the UI
  const indicator = document.createElement('div');
  indicator.style.cssText = `
    position: fixed;
    bottom: 10px;
    right: 10px;
    background: rgba(76, 175, 80, 0.9);
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 12px;
    z-index: 10000;
    pointer-events: none;
  `;
  indicator.textContent = '🖥️ Desktop Mode';
  document.body.appendChild(indicator);
}

/**
 * Auto-search and load textures from BMD file directory
 * @param bmdFilePath - Path to the BMD file that was loaded
 * @param requiredTextures - Array of required texture names from BMD
 * @returns Map of texture name (without extension) to file path
 */
export async function autoSearchTextures(
  bmdFilePath: string,
  requiredTextures: string[]
): Promise<Record<string, string[]>> {
  if (!isElectron() || !window.electronAPI) {
    console.warn('autoSearchTextures is only available in Electron');
    return {};
  }

  if (!bmdFilePath || requiredTextures.length === 0) {
    console.warn('autoSearchTextures: invalid params', { bmdFilePath, requiredTextures });
    return {};
  }

  // Get directory of the BMD file
  const lastSlash = Math.max(bmdFilePath.lastIndexOf('/'), bmdFilePath.lastIndexOf('\\'));
  const bmdDirectory = bmdFilePath.substring(0, lastSlash);

  // First search in the BMD's directory and subdirectories
  let foundTextures = await window.electronAPI.searchTextures(bmdDirectory, requiredTextures);

  // Count how many texture names we found
  const foundCount = Object.keys(foundTextures).length;
  const requiredCount = requiredTextures.length;

  // If not all textures found, search in parent directory and its subdirectories
  if (foundCount < requiredCount) {
    console.log(`[Texture Search] Found ${foundCount}/${requiredCount} textures in current directory, searching parent directory...`);

    const parentSlash = Math.max(bmdDirectory.lastIndexOf('/'), bmdDirectory.lastIndexOf('\\'));
    if (parentSlash > 0) {
      const parentDirectory = bmdDirectory.substring(0, parentSlash);

      // Get list of textures we still need
      const stillNeeded = requiredTextures.filter(tex => {
        const basename = tex.split(/[\\/]/).pop()!.toLowerCase().replace(/\.[^.]+$/, '');
        return !foundTextures[basename];
      });

      if (stillNeeded.length > 0) {
        const additionalTextures = await window.electronAPI.searchTextures(parentDirectory, stillNeeded);

        // Merge the results
        foundTextures = { ...foundTextures, ...additionalTextures };

        const finalCount = Object.keys(foundTextures).length;
        console.log(`[Texture Search] After parent search: ${finalCount}/${requiredCount} textures found`);
      }
    }
  }

  return foundTextures;
}
