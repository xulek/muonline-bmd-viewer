const fs = require('fs').promises;
const path = require('path');

const VALID_TEXTURE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.tga', '.ozj', '.ozt']);
const TEXTURE_EXTENSION_PRIORITY = ['.ozj', '.ozt', '.tga', '.png', '.jpg', '.jpeg'];
const MAX_REQUIRED_TEXTURES = 2048;

function normalizeRequiredTextureNames(requiredTextures) {
  if (!Array.isArray(requiredTextures)) {
    return [];
  }

  return [...new Set(requiredTextures
    .filter(texture => typeof texture === 'string' && texture.trim().length > 0)
    .slice(0, MAX_REQUIRED_TEXTURES)
    .map(texture => path.basename(texture, path.extname(texture)).toLowerCase()))];
}

function rankTexturePath(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const rank = TEXTURE_EXTENSION_PRIORITY.indexOf(extension);
  return rank === -1 ? TEXTURE_EXTENSION_PRIORITY.length : rank;
}

async function searchTextureFiles(startPath, requiredTextures, options = {}) {
  if (typeof startPath !== 'string' || !startPath.trim()) {
    return {};
  }

  const requiredNames = normalizeRequiredTextureNames(requiredTextures);
  if (requiredNames.length === 0) {
    return {};
  }

  const requiredNameSet = new Set(requiredNames);
  const foundTextures = {};
  const onDirectoryError = typeof options.onDirectoryError === 'function'
    ? options.onDirectoryError
    : null;
  const readDirectory = typeof options.readdir === 'function'
    ? options.readdir
    : fs.readdir.bind(fs);

  async function searchDirectory(directoryPath) {
    let entries;
    try {
      entries = await readDirectory(directoryPath, { withFileTypes: true });
    } catch (error) {
      // Discovery is deliberately best-effort. MU clients can contain stale
      // junctions, locked folders or files being replaced by a launcher. One
      // bad directory must not invalidate matches already found elsewhere.
      onDirectoryError?.(directoryPath, error);
      return;
    }

    for (const entry of entries) {
      const fullPath = path.join(directoryPath, entry.name);
      if (entry.isDirectory()) {
        await searchDirectory(fullPath);
        continue;
      }
      if (!entry.isFile()) {
        continue;
      }

      const lowerName = entry.name.toLowerCase();
      const extension = path.extname(lowerName);
      if (!VALID_TEXTURE_EXTENSIONS.has(extension)) {
        continue;
      }

      // Use the same lower-cased filename when removing the extension.
      // path.basename(name, suffix) is case-sensitive, so removing '.ozj'
      // from 'SkinClass01.OZJ' would otherwise fail and produce the invalid
      // key 'skinclass01.ozj'. MU clients commonly use upper-case extensions.
      const baseName = path.basename(lowerName, extension);
      if (!requiredNameSet.has(baseName)) {
        continue;
      }

      if (!foundTextures[baseName]) {
        foundTextures[baseName] = [];
      }
      foundTextures[baseName].push(fullPath);
    }
  }

  await searchDirectory(path.resolve(startPath));

  for (const name of Object.keys(foundTextures)) {
    foundTextures[name].sort((left, right) => {
      const rankDifference = rankTexturePath(left) - rankTexturePath(right);
      return rankDifference || left.localeCompare(right);
    });
  }

  return foundTextures;
}

module.exports = {
  normalizeRequiredTextureNames,
  searchTextureFiles,
};
