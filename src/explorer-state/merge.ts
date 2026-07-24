import type {
  BmdSessionState,
  CharacterPreset,
  CharacterSessionState,
  ExplorerBookmark,
  RecentBookmarkEntry,
  RecentModelEntry,
  RecentWorldEntry,
  TerrainSessionState,
  ViewerSessionState,
} from '../explorer-types';
import {
  MAX_RECENT_BOOKMARKS,
  MAX_RECENT_MODELS,
  MAX_RECENT_WORLDS,
  STATE_VERSION,
} from './constants';
import {
  coerceBoolean,
  coerceNumber,
  coerceString,
  mergeCollection,
  mergeSelectedObject,
  mergeVector3,
  safeObject,
} from './helpers';
import {
  createDefaultBmdSessionState,
  createDefaultCharacterSessionState,
  createDefaultTerrainSessionState,
  createDefaultViewerSessionState,
} from './defaults';

function mergeCharacterSessionState(raw: unknown): CharacterSessionState {
  const defaults = createDefaultCharacterSessionState();
  const input = safeObject<CharacterSessionState>(raw);
  const equipment = safeObject<CharacterSessionState['equipment']>(input.equipment);

  return {
    classValue: coerceNumber(input.classValue, defaults.classValue),
    equipment: {
      helm: coerceString(equipment.helm, defaults.equipment.helm),
      armor: coerceString(equipment.armor, defaults.equipment.armor),
      pants: coerceString(equipment.pants, defaults.equipment.pants),
      gloves: coerceString(equipment.gloves, defaults.equipment.gloves),
      boots: coerceString(equipment.boots, defaults.equipment.boots),
      leftWeapon: coerceString(equipment.leftWeapon, defaults.equipment.leftWeapon),
      rightWeapon: coerceString(equipment.rightWeapon, defaults.equipment.rightWeapon),
      wing: coerceString(equipment.wing, defaults.equipment.wing),
    },
    animationIndex: typeof input.animationIndex === 'number' ? input.animationIndex : null,
    autoRotate: coerceBoolean(input.autoRotate, defaults.autoRotate),
    speed: coerceNumber(input.speed, defaults.speed),
    scale: coerceNumber(input.scale, defaults.scale),
    itemLevel: coerceNumber(input.itemLevel, defaults.itemLevel),
    itemExcellent: coerceBoolean(input.itemExcellent, defaults.itemExcellent),
    itemAncient: coerceBoolean(input.itemAncient, defaults.itemAncient),
    itemExcellentIntensity: coerceNumber(input.itemExcellentIntensity, defaults.itemExcellentIntensity),
    showSkeleton: coerceBoolean(input.showSkeleton, defaults.showSkeleton),
    wireframe: coerceBoolean(input.wireframe, defaults.wireframe),
    showBoundingBox: coerceBoolean(input.showBoundingBox, defaults.showBoundingBox),
    showAxes: coerceBoolean(input.showAxes, defaults.showAxes),
    showNormals: coerceBoolean(input.showNormals, defaults.showNormals),
    backgroundColor: coerceString(input.backgroundColor, defaults.backgroundColor),
    brightness: coerceNumber(input.brightness, defaults.brightness),
  };
}

function mergeTerrainSessionState(raw: unknown): TerrainSessionState {
  const defaults = createDefaultTerrainSessionState();
  const input = safeObject<TerrainSessionState>(raw);

  return {
    rendererBackend: input.rendererBackend === 'webgpu' || input.rendererBackend === 'webgl'
      ? input.rendererBackend
      : defaults.rendererBackend,
    lastWorldNumber: typeof input.lastWorldNumber === 'number' ? input.lastWorldNumber : null,
    availableWorldNumbers: Array.isArray(input.availableWorldNumbers)
      ? input.availableWorldNumbers.filter((value): value is number => typeof value === 'number')
      : defaults.availableWorldNumbers,
    cameraPosition: input.cameraPosition && typeof input.cameraPosition === 'object'
      ? mergeVector3(input.cameraPosition)
      : null,
    cameraTarget: input.cameraTarget && typeof input.cameraTarget === 'object'
      ? mergeVector3(input.cameraTarget)
      : null,
    selectedObject: mergeSelectedObject(input.selectedObject),
    animationsEnabled: coerceBoolean(input.animationsEnabled, defaults.animationsEnabled),
    sunEnabled: coerceBoolean(input.sunEnabled, defaults.sunEnabled),
    wireframe: coerceBoolean(input.wireframe, defaults.wireframe),
    showObjects: coerceBoolean(input.showObjects, defaults.showObjects),
    brightness: coerceNumber(input.brightness, defaults.brightness),
    objectDistance: coerceNumber(input.objectDistance, defaults.objectDistance),
  };
}

function mergeBmdSessionState(raw: unknown): BmdSessionState {
  const defaults = createDefaultBmdSessionState();
  const input = safeObject<BmdSessionState>(raw);

  return {
    rendererBackend: input.rendererBackend === 'webgpu' || input.rendererBackend === 'webgl'
      ? input.rendererBackend
      : defaults.rendererBackend,
    animationsEnabled: coerceBoolean(input.animationsEnabled, defaults.animationsEnabled),
    autoRotate: coerceBoolean(input.autoRotate, defaults.autoRotate),
    showSkeleton: coerceBoolean(input.showSkeleton, defaults.showSkeleton),
    wireframe: coerceBoolean(input.wireframe, defaults.wireframe),
    showBoundingBox: coerceBoolean(input.showBoundingBox, defaults.showBoundingBox),
    showAxes: coerceBoolean(input.showAxes, defaults.showAxes),
    showNormals: coerceBoolean(input.showNormals, defaults.showNormals),
    backgroundColor: coerceString(input.backgroundColor, defaults.backgroundColor),
    brightness: coerceNumber(input.brightness, defaults.brightness),
    lastModelName: typeof input.lastModelName === 'string' ? input.lastModelName : null,
  };
}

function mergeBookmark(raw: unknown): ExplorerBookmark | null {
  const input = safeObject<ExplorerBookmark>(raw);
  if (!input.id || !input.name || typeof input.worldNumber !== 'number') {
    return null;
  }

  return {
    id: input.id,
    name: input.name,
    worldNumber: input.worldNumber,
    cameraPosition: mergeVector3(input.cameraPosition),
    cameraTarget: mergeVector3(input.cameraTarget),
    selectedObject: mergeSelectedObject(input.selectedObject),
    createdAt: coerceNumber(input.createdAt, Date.now()),
    updatedAt: coerceNumber(input.updatedAt, Date.now()),
  };
}

function mergeRecentWorldEntry(raw: unknown): RecentWorldEntry | null {
  const input = safeObject<RecentWorldEntry>(raw);
  if (typeof input.worldNumber !== 'number') {
    return null;
  }

  return {
    worldNumber: input.worldNumber,
    label: coerceString(input.label, `World ${input.worldNumber}`),
    timestamp: coerceNumber(input.timestamp, Date.now()),
  };
}

function mergeRecentBookmarkEntry(raw: unknown): RecentBookmarkEntry | null {
  const input = safeObject<RecentBookmarkEntry>(raw);
  if (!input.bookmarkId) {
    return null;
  }

  return {
    bookmarkId: input.bookmarkId,
    label: coerceString(input.label, 'Bookmark'),
    timestamp: coerceNumber(input.timestamp, Date.now()),
  };
}

function mergeRecentModelEntry(raw: unknown): RecentModelEntry | null {
  const input = safeObject<RecentModelEntry>(raw);
  if (!input.label) {
    return null;
  }

  return {
    label: input.label,
    timestamp: coerceNumber(input.timestamp, Date.now()),
    modelFileKey: typeof input.modelFileKey === 'string' ? input.modelFileKey : null,
    sourceWorldNumber: typeof input.sourceWorldNumber === 'number' ? input.sourceWorldNumber : null,
  };
}

function mergeCharacterPreset(raw: unknown): CharacterPreset | null {
  const input = safeObject<CharacterPreset>(raw);
  if (!input.id || !input.name) {
    return null;
  }

  const session = mergeCharacterSessionState(raw);
  return {
    ...session,
    id: input.id,
    name: input.name,
    pinned: coerceBoolean(input.pinned, false),
    createdAt: coerceNumber(input.createdAt, Date.now()),
    updatedAt: coerceNumber(input.updatedAt, Date.now()),
  };
}

export function mergeViewerSessionState(raw: unknown): ViewerSessionState {
  const defaults = createDefaultViewerSessionState();
  const input = safeObject<ViewerSessionState>(raw);

  return {
    version: STATE_VERSION,
    activeView: (input.activeView === 'bmd' || input.activeView === 'character' || input.activeView === 'terrain'
      || input.activeView === 'att' || input.activeView === 'ozj'
      || input.activeView === 'items' || input.activeView === 'skills'
      || input.activeView === 'gfx' || input.activeView === 'sound')
      ? input.activeView
      : defaults.activeView,
    presentationMode: coerceBoolean(input.presentationMode, defaults.presentationMode),
    bookmarks: mergeCollection(input.bookmarks, mergeBookmark),
    recentWorlds: mergeCollection(input.recentWorlds, mergeRecentWorldEntry, MAX_RECENT_WORLDS),
    recentBookmarks: mergeCollection(input.recentBookmarks, mergeRecentBookmarkEntry, MAX_RECENT_BOOKMARKS),
    recentModels: mergeCollection(input.recentModels, mergeRecentModelEntry, MAX_RECENT_MODELS),
    characterPresets: mergeCollection(input.characterPresets, mergeCharacterPreset),
    terrain: mergeTerrainSessionState(input.terrain),
    character: mergeCharacterSessionState(input.character),
    bmd: mergeBmdSessionState(input.bmd),
  };
}
