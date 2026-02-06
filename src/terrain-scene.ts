// src/terrain-scene.ts
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TerrainLoader } from './terrain/TerrainLoader';
import { loadTerrainObjects } from './terrain/TerrainObjects';
import { TERRAIN_SCALE } from './terrain/TerrainMesh';
import { TERRAIN_SIZE } from './terrain/formats/ATTReader';
import {
    createFileFromElectronData,
    isElectron,
    openDirectoryDialog,
    readTerrainWorldFiles,
    scanWorldFolders,
} from './electron-helper';

export class TerrainScene {
    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    private controls!: OrbitControls;
    private clock = new THREE.Clock();
    private isActive = false;

    private terrainMesh: THREE.Mesh | null = null;
    private objectsGroup: THREE.Group | null = null;
    private terrainLoader = new TerrainLoader();

    /** Persistent store of all files from the Data folder (browser mode). */
    private dataFiles = new Map<string, File>();
    /** Root path to Data folder (Electron mode). */
    private dataRootPath: string | null = null;

    constructor() {
        this.initThree();
        this.initUI();
        this.animate();
    }

    setActive(active: boolean) {
        this.isActive = active;
        if (active) {
            window.dispatchEvent(new Event('resize'));
        }
    }

    private initThree() {
        const container = document.getElementById('terrain-canvas-container');
        if (!container) return;

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87CEEB); // sky blue

        const worldCenter = (TERRAIN_SIZE * TERRAIN_SCALE) / 2;

        this.camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 10, 100000);
        this.camera.position.set(worldCenter, 5000, worldCenter + 5000);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        container.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(worldCenter, 0, worldCenter);
        this.controls.enableDamping = true;
        this.controls.maxDistance = 50000;
        this.controls.minDistance = 100;

        // Lights
        const ambient = new THREE.AmbientLight(0xffffff, 0.6);
        const sun = new THREE.DirectionalLight(0xffffff, 1.0);
        sun.position.set(worldCenter, 10000, worldCenter);
        this.scene.add(ambient, sun);

        window.addEventListener('resize', () => {
            if (!this.isActive) return;
            this.camera.aspect = container.clientWidth / container.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(container.clientWidth, container.clientHeight);
        });
    }

    private initUI() {
        // Folder drop zone
        const dropZone = document.getElementById('terrain-data-drop-zone');
        const folderInput = document.getElementById('terrain-data-folder-input') as HTMLInputElement | null;

        if (dropZone && folderInput) {
            dropZone.addEventListener('click', () => {
                if (isElectron()) {
                    this.handleDataSelectElectron();
                } else {
                    folderInput.click();
                }
            });

            folderInput.addEventListener('change', () => {
                if (folderInput.files && folderInput.files.length > 0) {
                    this.handleDataFiles(folderInput.files);
                }
            });

            dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('drag-hover'); });
            dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-hover'));
            dropZone.addEventListener('drop', e => {
                e.preventDefault();
                dropZone.classList.remove('drag-hover');
                if (e.dataTransfer?.files) {
                    this.handleDataFiles(e.dataTransfer.files);
                }
            });
        }

        // Load World button
        const loadBtn = document.getElementById('terrain-load-world-btn');
        loadBtn?.addEventListener('click', () => {
            const select = document.getElementById('terrain-world-select') as HTMLSelectElement | null;
            if (select && select.value) {
                this.loadWorld(parseInt(select.value, 10));
            }
        });

        // Wireframe toggle
        const wireframe = document.getElementById('terrain-wireframe') as HTMLInputElement | null;
        wireframe?.addEventListener('change', () => {
            if (this.terrainMesh) {
                (this.terrainMesh.material as THREE.ShaderMaterial).wireframe = wireframe.checked;
            }
        });

        // Debug mode toggle: keys 0-4 cycle terrain debug visualization
        window.addEventListener('keydown', (e) => {
            if (!this.terrainMesh || !this.isActive) return;
            const key = parseInt(e.key);
            if (key >= 0 && key <= 4) {
                const mat = this.terrainMesh.material as THREE.ShaderMaterial;
                mat.uniforms.uDebugMode.value = key;
                console.log(`[TERRAIN] Debug mode: ${key} (0=normal, 1=layer1, 2=layer2, 3=alpha, 4=atlasUV)`);
            }
        });

        // Objects toggle
        const showObjects = document.getElementById('terrain-show-objects') as HTMLInputElement | null;
        showObjects?.addEventListener('change', () => {
            if (this.objectsGroup) {
                this.objectsGroup.visible = showObjects.checked;
            }
        });
    }

    /** Electron: open native directory dialog and load */
    private async handleDataSelectElectron() {
        const folderPath = await openDirectoryDialog();
        if (folderPath) {
            this.dataRootPath = folderPath;
            this.dataFiles.clear();
            const status = document.getElementById('terrain-status');
            if (status) status.textContent = 'Scanning Data folder...';

            let worldNumbers: number[];
            try {
                worldNumbers = await scanWorldFolders(folderPath);
            } catch (error) {
                console.error('Failed to scan world folders:', error);
                const message = (error as Error)?.message || String(error);
                if (status) {
                    if (message.includes("No handler registered for 'fs:scanWorldFolders'")) {
                        status.textContent = 'Electron backend is outdated. Restart the desktop app.';
                    } else {
                        status.textContent = `Error scanning Data folder: ${message}`;
                    }
                }
                return;
            }

            if (worldNumbers.length === 0) {
                if (status) status.textContent = `No World folders found in Data: ${folderPath}`;
                return;
            }

            if (status) status.textContent = `Found ${worldNumbers.length} world(s). Select one to load.`;
            this.populateWorldSelect(worldNumbers);
            this.loadWorld(worldNumbers[0]);
        }
    }

    /** Browser: handle dropped / selected Data folder files */
    private handleDataFiles(fileList: FileList) {
        const status = document.getElementById('terrain-status');
        if (status) status.textContent = 'Scanning Data folder...';

        this.dataFiles.clear();
        this.dataRootPath = null;

        // Determine root folder name from first file's webkitRelativePath
        const firstPath = ((fileList[0] as any).webkitRelativePath as string) || fileList[0].name;
        const rootName = firstPath.split('/')[0];

        for (let i = 0; i < fileList.length; i++) {
            const f = fileList[i];
            const rel = ((f as any).webkitRelativePath as string) || f.name;
            // Strip the root folder prefix (e.g. "Data/World1/..." → "World1/...")
            const trimmed = rel.startsWith(rootName + '/') ? rel.slice(rootName.length + 1) : rel;
            this.dataFiles.set(trimmed.toLowerCase(), f);
        }

        // Scan for World{N}/ subfolders
        const worldNumbers = this.scanWorldNumbers();

        if (worldNumbers.length === 0) {
            if (status) status.textContent = 'No World folders found in Data.';
            return;
        }

        if (status) status.textContent = `Found ${worldNumbers.length} world(s). Select one to load.`;
        this.populateWorldSelect(worldNumbers);

        // Auto-load first world
        this.loadWorld(worldNumbers[0]);
    }

    /** Scan dataFiles keys for world{N}/ prefixes */
    private scanWorldNumbers(): number[] {
        const worlds = new Set<number>();
        for (const key of this.dataFiles.keys()) {
            const m = key.match(/^world(\d+)\//);
            if (m) worlds.add(parseInt(m[1], 10));
        }
        return [...worlds].sort((a, b) => a - b);
    }

    /** Populate the world dropdown and show it */
    private populateWorldSelect(worldNumbers: number[]) {
        const container = document.getElementById('terrain-world-selector');
        const select = document.getElementById('terrain-world-select') as HTMLSelectElement | null;
        if (!select || !container) return;

        select.innerHTML = '';
        for (const n of worldNumbers) {
            const opt = document.createElement('option');
            opt.value = n.toString();
            opt.textContent = `World ${n}`;
            select.appendChild(opt);
        }

        container.style.display = '';
    }

    /** Load a specific world by number */
    private async loadWorld(worldNumber: number) {
        const status = document.getElementById('terrain-status');
        if (status) status.textContent = `Loading World ${worldNumber}...`;

        // Set the select to the current world
        const select = document.getElementById('terrain-world-select') as HTMLSelectElement | null;
        if (select) select.value = worldNumber.toString();

        let files = this.buildWorldFiles(worldNumber);
        if (files.size === 0 && this.dataRootPath && isElectron()) {
            if (status) status.textContent = `Loading World ${worldNumber} files from disk...`;
            try {
                files = await this.loadWorldFilesFromElectron(worldNumber);
            } catch (error) {
                console.error('Failed to load world files from Electron:', error);
                const message = (error as Error)?.message || String(error);
                if (status) {
                    if (message.includes("No handler registered for 'fs:readTerrainWorldFiles'")) {
                        status.textContent = 'Electron backend is outdated. Restart the desktop app.';
                    } else {
                        status.textContent = `Error loading World ${worldNumber} files: ${message}`;
                    }
                }
                return;
            }
        }

        if (files.size === 0) {
            if (status) status.textContent = `No files found for World ${worldNumber}.`;
            return;
        }

        try {
            const result = await this.terrainLoader.load(files);

            // Clear previous
            if (this.terrainMesh) {
                this.scene.remove(this.terrainMesh);
                this.terrainMesh.geometry.dispose();
                (this.terrainMesh.material as THREE.Material).dispose();
            }
            if (this.objectsGroup) {
                this.scene.remove(this.objectsGroup);
            }

            this.terrainMesh = result.mesh;
            this.scene.add(this.terrainMesh);

            // Center camera
            const worldCenter = (TERRAIN_SIZE * TERRAIN_SCALE) / 2;
            this.controls.target.set(worldCenter, 0, worldCenter);
            this.camera.position.set(worldCenter, 5000, worldCenter + 5000);

            if (status) status.textContent = `World ${result.mapNumber} loaded. Loading objects...`;

            // Load objects
            if (result.objectsData) {
                this.objectsGroup = await loadTerrainObjects(
                    result.objectsData,
                    files,
                    result.mapNumber,
                    (loaded, total) => {
                        if (status) status.textContent = `Loading objects: ${loaded}/${total}...`;
                    },
                );
                this.scene.add(this.objectsGroup);

                // Respect current "Show Objects" checkbox state
                const showObjects = document.getElementById('terrain-show-objects') as HTMLInputElement | null;
                if (showObjects && this.objectsGroup) {
                    this.objectsGroup.visible = showObjects.checked;
                }
            }

            if (status) {
                const objCount = result.objectsData?.objects.length ?? 0;
                status.textContent = `World ${result.mapNumber} loaded. ${objCount} objects.`;
            }
        } catch (e) {
            console.error('Terrain loading error:', e);
            if (status) status.textContent = `Error: ${(e as Error).message}`;
        }
    }

    /** Electron: read all files from Data/World{N} and Data/Object{N}. */
    private async loadWorldFilesFromElectron(worldNumber: number): Promise<Map<string, File>> {
        if (!this.dataRootPath) return new Map();

        const entries = await readTerrainWorldFiles(this.dataRootPath, worldNumber);
        const files = new Map<string, File>();
        for (const entry of entries) {
            files.set(entry.key.toLowerCase(), createFileFromElectronData(entry.name, entry.data));
        }
        return files;
    }

    /**
     * Build a files Map for the given world number.
     * Includes files from world{N}/ and object{N}/ subfolders.
     * Keys are relative paths (e.g. "world1/EncTerrain1.att").
     */
    private buildWorldFiles(worldNumber: number): Map<string, File> {
        const worldPrefix = `world${worldNumber}/`;
        const objectPrefix = `object${worldNumber}/`;
        const files = new Map<string, File>();

        for (const [key, file] of this.dataFiles) {
            if (key.startsWith(worldPrefix) || key.startsWith(objectPrefix)) {
                files.set(key, file);
            }
        }

        return files;
    }

    private animate = () => {
        requestAnimationFrame(this.animate);
        if (!this.isActive) return;

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    };
}
