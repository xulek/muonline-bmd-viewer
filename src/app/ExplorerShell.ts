import type { CharacterTestScene } from '../character-test-scene';
import type {
    BmdSessionState,
    ExplorerBookmark,
    RecentModelEntry,
    ViewerSessionState,
    ViewerTab,
} from '../explorer-types';
import { ExplorerStateStore } from '../explorer-store';
import type { TerrainScene } from '../terrain-scene';
import { AttInspector } from '../att-inspector/AttInspector';
import { OzjBrowser } from '../ozj-browser/OzjBrowser';
import { ItemBmdBrowser } from '../item-bmd-browser/ItemBmdBrowser';
import { SkillBmdBrowser } from '../skill-bmd-browser/SkillBmdBrowser';
import { GfxBrowser } from '../gfx-browser/GfxBrowser';
import { SoundBrowser } from '../sound-browser/SoundBrowser';

interface BmdViewerController {
    onStateChanged?: (state: BmdSessionState) => void;
    onModelLoaded?: (entry: RecentModelEntry) => void;
    setActive(active: boolean): void;
    setStatusMessage(message: string): void;
    applyPresentationMode(enabled: boolean): void;
    getCurrentState(): BmdSessionState;
    restoreSessionState(state: BmdSessionState): void;
    openModelFile(
        file: File,
        options?: {
            filePath?: string | null;
            label?: string;
            modelFileKey?: string | null;
            sourceWorldNumber?: number | null;
            textureFiles?: File[];
        },
    ): Promise<void>;
}

export interface ExplorerShellOptions {
    app: BmdViewerController;
    characterScene: CharacterTestScene;
    terrainScene: TerrainScene;
    explorerStore: ExplorerStateStore;
    initialState: ViewerSessionState;
}

export function initExplorerShell({
    app,
    characterScene,
    terrainScene,
    explorerStore,
    initialState,
}: ExplorerShellOptions): void {
    const tabButtons = document.querySelectorAll<HTMLButtonElement>('.tab-btn');
    const explorerSearchInput = document.getElementById('explorer-search') as HTMLInputElement | null;
    const explorerWorldsList = document.getElementById('explorer-worlds-list');
    const explorerBookmarksList = document.getElementById('explorer-bookmarks-list');
    const explorerCharactersList = document.getElementById('explorer-characters-list');
    const explorerModelsList = document.getElementById('explorer-models-list');
    const presentationToggle = document.getElementById('presentation-mode-toggle') as HTMLInputElement | null;
    const presentationOverlay = document.getElementById('presentation-overlay');
    const presentationExitBtn = document.getElementById('presentation-exit-btn') as HTMLButtonElement | null;
    let explorerSearch = '';

    characterScene.setActive(false);
    terrainScene.setActive(false);

    const attInspector = new AttInspector();
    attInspector.init();

    const ozjBrowser = new OzjBrowser();
    ozjBrowser.init();

    const itemBrowser = new ItemBmdBrowser();
    itemBrowser.init();

    const skillBrowser = new SkillBmdBrowser();
    skillBrowser.init();

    const gfxBrowser = new GfxBrowser();
    gfxBrowser.init();

    const soundBrowser = new SoundBrowser();
    soundBrowser.init();

    // Seed the inspector with any data already loaded (e.g. after a hot-reload)
    const existingAtt = terrainScene.getLoadedAttData();
    if (existingAtt) {
        attInspector.setData(existingAtt, initialState.terrain.lastWorldNumber);
    }

    function formatRelativeTime(timestamp: number): string {
        const deltaMs = Math.max(0, Date.now() - timestamp);
        const deltaMinutes = Math.floor(deltaMs / 60000);
        if (deltaMinutes < 1) return 'just now';
        if (deltaMinutes < 60) return `${deltaMinutes}m ago`;
        const deltaHours = Math.floor(deltaMinutes / 60);
        if (deltaHours < 24) return `${deltaHours}h ago`;
        const deltaDays = Math.floor(deltaHours / 24);
        return `${deltaDays}d ago`;
    }

    function switchToView(target: ViewerTab): void {
        const button = document.querySelector<HTMLButtonElement>(`.tab-btn[data-view="${target}"]`);
        button?.click();
    }

    function syncPresentationMode(enabled: boolean): void {
        document.body.classList.toggle('presentation-mode', enabled);
        if (presentationToggle) {
            presentationToggle.checked = enabled;
        }
        presentationOverlay?.classList.toggle('hidden', !enabled);
        presentationExitBtn?.classList.toggle('hidden', !enabled);
        app.applyPresentationMode(enabled);
        characterScene.applyPresentationMode(enabled);
        terrainScene.applyPresentationMode(enabled);
        updatePresentationOverlay();
    }

    function updatePresentationOverlay(): void {
        if (!presentationOverlay) return;
        const state = explorerStore.getState();
        const parts: string[] = [];
        if (state.activeView === 'terrain') {
            const worldLabel = state.terrain.lastWorldNumber !== null ? `World ${state.terrain.lastWorldNumber}` : 'World Viewer';
            parts.push(worldLabel);
            if (state.terrain.selectedObject?.displayName) {
                parts.push(state.terrain.selectedObject.displayName);
            }
        } else if (state.activeView === 'character') {
            const presetLabel = state.characterPresets.find(preset =>
                preset.classValue === state.character.classValue &&
                preset.equipment.helm === state.character.equipment.helm,
            )?.name;
            parts.push(presetLabel || 'Character Preview');
        } else {
            parts.push(state.bmd.lastModelName || 'Model Viewer');
        }
        presentationOverlay.textContent = parts.join(' • ');
    }

    function createExplorerEmpty(message: string): HTMLElement {
        const empty = document.createElement('div');
        empty.className = 'explorer-item-empty';
        empty.textContent = message;
        return empty;
    }

    function createActionButton(label: string, onClick: () => void, className = ''): HTMLButtonElement {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `explorer-item-btn ${className}`.trim();
        button.textContent = label;
        button.addEventListener('click', event => {
            event.stopPropagation();
            onClick();
        });
        return button;
    }

    function createExplorerLabel(primaryText: string, metaText: string): HTMLDivElement {
        const label = document.createElement('div');
        label.className = 'explorer-item-label';
        label.appendChild(document.createTextNode(primaryText));
        const meta = document.createElement('span');
        meta.className = 'explorer-item-meta';
        meta.textContent = metaText;
        label.appendChild(meta);
        return label;
    }

    function matchesExplorerSearch(label: string, meta = ''): boolean {
        const query = explorerSearch.trim().toLowerCase();
        if (!query) return true;
        return `${label} ${meta}`.toLowerCase().includes(query);
    }

    function renderExplorerList(container: HTMLElement | null, items: HTMLElement[], emptyMessage: string): void {
        if (!container) return;
        container.innerHTML = '';
        if (items.length === 0) {
            container.appendChild(createExplorerEmpty(emptyMessage));
            return;
        }
        items.forEach(item => container.appendChild(item));
    }

    function renderWorldSelector(
        container: HTMLElement | null,
        worldNumbers: number[],
        selectedWorldNumber: number | null,
    ): void {
        if (!container) return;
        container.innerHTML = '';

        if (worldNumbers.length === 0) {
            container.appendChild(createExplorerEmpty('No worlds loaded yet.'));
            return;
        }

        const row = document.createElement('div');
        row.className = 'row-inline';

        const select = document.createElement('select');
        select.className = 'animation-dropdown full-width';
        worldNumbers.forEach(worldNumber => {
            const option = document.createElement('option');
            option.value = `${worldNumber}`;
            option.textContent = `World ${worldNumber}`;
            if (selectedWorldNumber === worldNumber) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        const openButton = createActionButton('Open', () => {
            const worldNumber = parseInt(select.value, 10);
            if (Number.isNaN(worldNumber)) return;
            switchToView('terrain');
            void terrainScene.loadWorldByNumber(worldNumber);
        });

        row.appendChild(select);
        row.appendChild(openButton);
        container.appendChild(row);
    }

    async function openRecentModel(entry: RecentModelEntry): Promise<void> {
        if (entry.modelFileKey) {
            const file = terrainScene.resolveModelFile(entry.modelFileKey);
            if (file) {
                switchToView('bmd');
                await app.openModelFile(file, {
                    label: entry.label,
                    modelFileKey: entry.modelFileKey,
                    sourceWorldNumber: entry.sourceWorldNumber,
                    textureFiles: terrainScene.getCurrentTextureFiles(),
                });
                return;
            }
        }

        switchToView('bmd');
        app.setStatusMessage(`Model "${entry.label}" is not currently available. Reload the relevant world data first.`);
    }

    async function openBookmark(bookmark: ExplorerBookmark): Promise<void> {
        switchToView('terrain');
        const opened = await terrainScene.jumpToBookmark(bookmark);
        if (opened) {
            explorerStore.pushRecentBookmark({
                bookmarkId: bookmark.id,
                label: bookmark.name,
                timestamp: Date.now(),
            });
            explorerStore.setTerrainState(terrainScene.getCurrentState());
        }
    }

    function renderExplorer(): void {
        const state = explorerStore.getState();
        const recentWorldLookup = new Map(state.recentWorlds.map((entry, index) => [entry.worldNumber, { entry, index }]));
        const worldCandidates = new Set<number>(state.recentWorlds.map(entry => entry.worldNumber));
        state.terrain.availableWorldNumbers.forEach(worldNumber => worldCandidates.add(worldNumber));

        const worldNumbers = [...worldCandidates]
            .sort((a, b) => {
                const recentA = recentWorldLookup.get(a);
                const recentB = recentWorldLookup.get(b);
                if (recentA && recentB) return recentA.index - recentB.index;
                if (recentA) return -1;
                if (recentB) return 1;
                return a - b;
            })
            .filter(worldNumber => matchesExplorerSearch(
                `World ${worldNumber}`,
                recentWorldLookup.get(worldNumber)?.entry ? `recent ${formatRelativeTime(recentWorldLookup.get(worldNumber)!.entry.timestamp)}` : '',
            ));

        const bookmarkItems = state.bookmarks
            .slice()
            .sort((a, b) => {
                const recentA = state.recentBookmarks.findIndex(entry => entry.bookmarkId === a.id);
                const recentB = state.recentBookmarks.findIndex(entry => entry.bookmarkId === b.id);
                const hasRecentA = recentA >= 0;
                const hasRecentB = recentB >= 0;
                if (hasRecentA && hasRecentB) return recentA - recentB;
                if (hasRecentA) return -1;
                if (hasRecentB) return 1;
                return b.updatedAt - a.updatedAt;
            })
            .filter(bookmark => matchesExplorerSearch(bookmark.name, `world ${bookmark.worldNumber}`))
            .map(bookmark => {
                const recentEntry = state.recentBookmarks.find(entry => entry.bookmarkId === bookmark.id);
                const item = document.createElement('div');
                item.className = 'explorer-item';
                const metaText = recentEntry
                    ? `World ${bookmark.worldNumber} • Recent ${formatRelativeTime(recentEntry.timestamp)}`
                    : `World ${bookmark.worldNumber}`;
                item.appendChild(createExplorerLabel(bookmark.name, metaText));
                item.appendChild(createActionButton('Open', () => { void openBookmark(bookmark); }));
                item.appendChild(createActionButton('Rename', () => {
                    const name = window.prompt('Rename bookmark', bookmark.name)?.trim();
                    if (!name) return;
                    explorerStore.renameBookmark(bookmark.id, name);
                }));
                item.appendChild(createActionButton('Delete', () => {
                    explorerStore.deleteBookmark(bookmark.id);
                }, 'is-danger'));
                return item;
            });

        const presetItems = state.characterPresets
            .filter(preset => matchesExplorerSearch(preset.name, `class ${preset.classValue}`))
            .map(preset => {
                const item = document.createElement('div');
                item.className = 'explorer-item';
                item.appendChild(createExplorerLabel(
                    `${preset.pinned ? '★ ' : ''}${preset.name}`,
                    `Class ${preset.classValue}`,
                ));
                item.appendChild(createActionButton('Apply', () => {
                    switchToView('character');
                    characterScene.applyCharacterPreset(preset);
                }));
                item.appendChild(createActionButton(preset.pinned ? 'Unpin' : 'Pin', () => {
                    explorerStore.toggleCharacterPresetPinned(preset.id);
                }));
                item.appendChild(createActionButton('Delete', () => {
                    explorerStore.deleteCharacterPreset(preset.id);
                }, 'is-danger'));
                return item;
            });

        const modelItems = state.recentModels
            .filter(entry => matchesExplorerSearch(entry.label, entry.modelFileKey || ''))
            .map(entry => {
                const item = document.createElement('div');
                item.className = 'explorer-item';
                item.appendChild(createExplorerLabel(
                    entry.label,
                    entry.modelFileKey || 'Transient file',
                ));
                item.appendChild(createActionButton('Open', () => { void openRecentModel(entry); }));
                return item;
            });

        renderWorldSelector(explorerWorldsList, worldNumbers, state.terrain.lastWorldNumber);
        renderExplorerList(explorerBookmarksList, bookmarkItems, 'No bookmarks saved.');
        renderExplorerList(explorerCharactersList, presetItems, 'No character presets saved.');
        renderExplorerList(explorerModelsList, modelItems, 'No recent models.');
        updatePresentationOverlay();
    }

    presentationToggle?.addEventListener('change', () => {
        explorerStore.setPresentationMode(!!presentationToggle.checked);
    });
    presentationExitBtn?.addEventListener('click', () => {
        explorerStore.setPresentationMode(false);
    });
    explorerSearchInput?.addEventListener('input', () => {
        explorerSearch = explorerSearchInput.value;
        renderExplorer();
    });

    app.onStateChanged = state => {
        explorerStore.setBmdState(state);
    };
    app.onModelLoaded = entry => {
        explorerStore.pushRecentModel(entry);
        explorerStore.setBmdState(app.getCurrentState());
    };
    characterScene.onStateChanged = state => {
        explorerStore.setCharacterState(state);
    };
    characterScene.onPresetSaveRequested = preset => {
        explorerStore.upsertCharacterPreset(preset);
    };
    terrainScene.onCameraChanged = () => {
        explorerStore.setTerrainState(terrainScene.getCurrentState());
    };
    terrainScene.onStateChanged = state => {
        explorerStore.setTerrainState(state);
    };
    terrainScene.onObjectSelected = () => {
        explorerStore.setTerrainState(terrainScene.getCurrentState());
    };
    terrainScene.onWorldLoaded = (worldNumber) => {
        explorerStore.pushRecentWorld({
            worldNumber,
            label: `World ${worldNumber}`,
            timestamp: Date.now(),
        });
        explorerStore.setTerrainState(terrainScene.getCurrentState());
    };
    terrainScene.onAttDataChanged = (data, worldNumber) => {
        attInspector.setData(data, worldNumber);
    };
    terrainScene.onBookmarkCreated = bookmark => {
        explorerStore.upsertBookmark(bookmark);
        explorerStore.pushRecentBookmark({
            bookmarkId: bookmark.id,
            label: bookmark.name,
            timestamp: Date.now(),
        });
    };
    terrainScene.onOpenModelRequest = (selection, modelFile) => {
        if (!modelFile) {
            terrainScene.setStatusMessage(`Model for "${selection.displayName}" is not available in current world files.`);
            return;
        }
        switchToView('bmd');
        void app.openModelFile(modelFile, {
            label: selection.displayName,
            modelFileKey: selection.modelFileKey,
            sourceWorldNumber: selection.worldNumber,
            textureFiles: terrainScene.getCurrentTextureFiles(),
        });
    };

    explorerStore.subscribe(() => {
        renderExplorer();
        const snapshot = explorerStore.getState();
        syncPresentationMode(snapshot.presentationMode);
    });

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = (btn.dataset.view || 'bmd') as ViewerTab;
            explorerStore.setActiveView(target);
            app.setActive(target === 'bmd');
            characterScene.setActive(target === 'character');
            terrainScene.setActive(target === 'terrain');
            updatePresentationOverlay();
        });
    });

    app.restoreSessionState(initialState.bmd);
    characterScene.restoreSessionState(initialState.character);
    terrainScene.restoreSessionState(initialState.terrain);
    syncPresentationMode(initialState.presentationMode);
    switchToView(initialState.activeView);
    renderExplorer();
}

export function createExplorerStateStore(): {
    explorerStore: ExplorerStateStore;
    initialState: ViewerSessionState;
} {
    const explorerStore = new ExplorerStateStore();
    return {
        explorerStore,
        initialState: explorerStore.getState(),
    };
}
