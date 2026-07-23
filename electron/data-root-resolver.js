const fs = require('fs').promises;
const path = require('path');

const DATA_FOLDER_NAME = 'data';
const LOCAL_FOLDER_NAME = 'local';
const ITEM_DATABASE_NAME = 'item.bmd';
const MAX_PARENT_DEPTH = 12;

function isMissingPathError(error) {
  return error && (error.code === 'ENOENT' || error.code === 'ENOTDIR');
}

async function readDirectoryEntries(directoryPath) {
  try {
    return await fs.readdir(directoryPath, { withFileTypes: true });
  } catch (error) {
    if (isMissingPathError(error) || error?.code === 'EACCES' || error?.code === 'EPERM') {
      return [];
    }
    throw error;
  }
}

async function findEntryCaseInsensitive(directoryPath, expectedName, expectedType = null) {
  const entries = await readDirectoryEntries(directoryPath);
  const expectedLower = expectedName.toLowerCase();

  const entry = entries.find(candidate => {
    if (candidate.name.toLowerCase() !== expectedLower) {
      return false;
    }
    if (expectedType === 'directory') {
      return candidate.isDirectory();
    }
    if (expectedType === 'file') {
      return candidate.isFile();
    }
    return true;
  });

  return entry ? path.join(directoryPath, entry.name) : null;
}

async function hasItemDatabase(dataRootPath) {
  const localPath = await findEntryCaseInsensitive(dataRootPath, LOCAL_FOLDER_NAME, 'directory');
  if (!localPath) {
    return false;
  }

  return Boolean(await findEntryCaseInsensitive(localPath, ITEM_DATABASE_NAME, 'file'));
}

async function normalizeSearchStart(candidatePath) {
  if (typeof candidatePath !== 'string' || !candidatePath.trim()) {
    return null;
  }

  const resolvedPath = path.resolve(candidatePath);
  try {
    const stats = await fs.stat(resolvedPath);
    return stats.isDirectory() ? resolvedPath : path.dirname(resolvedPath);
  } catch (error) {
    if (isMissingPathError(error) || error?.code === 'EACCES' || error?.code === 'EPERM') {
      return null;
    }
    throw error;
  }
}

async function resolveDataRootFromPath(candidatePath) {
  let currentPath = await normalizeSearchStart(candidatePath);
  if (!currentPath) {
    return null;
  }

  const visited = new Set();
  for (let depth = 0; depth <= MAX_PARENT_DEPTH; depth += 1) {
    const canonicalCurrent = path.resolve(currentPath);
    const comparisonKey = process.platform === 'win32'
      ? canonicalCurrent.toLowerCase()
      : canonicalCurrent;

    if (visited.has(comparisonKey)) {
      break;
    }
    visited.add(comparisonKey);

    if (await hasItemDatabase(canonicalCurrent)) {
      return canonicalCurrent;
    }

    const dataChildPath = await findEntryCaseInsensitive(canonicalCurrent, DATA_FOLDER_NAME, 'directory');
    if (dataChildPath && await hasItemDatabase(dataChildPath)) {
      return dataChildPath;
    }

    const parentPath = path.dirname(canonicalCurrent);
    if (parentPath === canonicalCurrent) {
      break;
    }
    currentPath = parentPath;
  }

  return null;
}

async function resolveDataRootFromPaths(candidatePaths) {
  if (!Array.isArray(candidatePaths)) {
    return null;
  }

  const uniquePaths = [...new Set(candidatePaths.filter(candidatePath =>
    typeof candidatePath === 'string' && candidatePath.trim().length > 0,
  ))];

  for (const candidatePath of uniquePaths) {
    const resolvedRoot = await resolveDataRootFromPath(candidatePath);
    if (resolvedRoot) {
      return resolvedRoot;
    }
  }

  return null;
}

function splitSafeRelativePath(relativePath) {
  if (typeof relativePath !== 'string' || !relativePath.trim()) {
    return null;
  }

  const normalized = relativePath.replace(/\\/g, '/').replace(/^\/+/, '');
  const segments = normalized.split('/').filter(Boolean);
  if (segments.length === 0 || segments.some(segment => segment === '.' || segment === '..')) {
    return null;
  }

  if (segments[0].toLowerCase() === DATA_FOLDER_NAME) {
    segments.shift();
  }

  return segments.length > 0 ? segments : null;
}

async function resolveDataFilePath(dataRootPath, relativePath) {
  if (typeof dataRootPath !== 'string' || !dataRootPath.trim()) {
    return null;
  }

  const segments = splitSafeRelativePath(relativePath);
  if (!segments) {
    return null;
  }

  const resolvedRootPath = path.resolve(dataRootPath);
  const directPath = path.resolve(resolvedRootPath, ...segments);
  const isInsideRoot = directPath.startsWith(resolvedRootPath + path.sep);
  if (!isInsideRoot) {
    return null;
  }

  try {
    const directStats = await fs.stat(directPath);
    if (directStats.isFile()) {
      return directPath;
    }
  } catch (error) {
    if (!isMissingPathError(error) && error?.code !== 'EACCES' && error?.code !== 'EPERM') {
      throw error;
    }
  }

  let currentPath = resolvedRootPath;
  for (let index = 0; index < segments.length; index += 1) {
    const expectedType = index === segments.length - 1 ? 'file' : 'directory';
    const nextPath = await findEntryCaseInsensitive(currentPath, segments[index], expectedType);
    if (!nextPath) {
      return null;
    }
    currentPath = nextPath;
  }

  return currentPath;
}

module.exports = {
  resolveDataFilePath,
  resolveDataRootFromPath,
  resolveDataRootFromPaths,
};
