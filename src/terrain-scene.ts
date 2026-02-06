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

const TERRAIN_BASE_AMBIENT_INTENSITY = 0.6;
const TERRAIN_BASE_SUN_INTENSITY = 1.0;
const TERRAIN_MAX_PIXEL_RATIO = 1.5;
const TERRAIN_BRIGHTNESS_DEFAULT = 1.5;
const TERRAIN_OBJECT_DRAW_DISTANCE_DEFAULT = 12000;
const TERRAIN_OBJECT_CULL_INTERVAL_MS = 120;
const TERRAIN_CAMERA_MOVE_SPEED = 7000;
const TERRAIN_CAMERA_SPRINT_MULTIPLIER = 2.2;
const TERRAIN_MAX_DELTA_SECONDS = 0.1;

type MovementKeyCode = 'KeyW' | 'KeyA' | 'KeyS' | 'KeyD' | 'ShiftLeft' | 'ShiftRight';
const MOVEMENT_KEYS: readonly MovementKeyCode[] = ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft', 'ShiftRight'];

export class TerrainScene {
    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    private controls!: OrbitControls;
    private clock = new THREE.Clock();
    private isActive = false;
    private ambientLight: THREE.AmbientLight | null = null;
    private sunLight: THREE.DirectionalLight | null = null;
    private objectDrawDistance = TERRAIN_OBJECT_DRAW_DISTANCE_DEFAULT;
    private objectCullLastUpdateMs = 0;
    private readonly tempCullCenter = new THREE.Vector3();
    private readonly tempCullScale = new THREE.Vector3();
    private readonly movementKeys: Record<MovementKeyCode, boolean> = {
        KeyW: false,
        KeyA: false,
        KeyS: false,
        KeyD: false,
        ShiftLeft: false,
        ShiftRight: false,
    };
    private readonly tempMoveForward = new THREE.Vector3();
    private readonly tempMoveRight = new THREE.Vector3();
    private readonly tempMoveDelta = new THREE.Vector3();

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
        this.resetMovementKeys();
        if (active) {
            this.clock.getDelta();
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

        this.renderer = new THREE.WebGLRenderer({
            antialias: false,
            powerPreference: 'high-performance',
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, TERRAIN_MAX_PIXEL_RATIO));
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.0;
        container.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(worldCenter, 0, worldCenter);
        this.controls.enableDamping = true;
        this.controls.maxDistance = 50000;
        this.controls.minDistance = 100;

        // Lights
        this.ambientLight = new THREE.AmbientLight(0xffffff, TERRAIN_BASE_AMBIENT_INTENSITY);
        this.sunLight = new THREE.DirectionalLight(0xffffff, TERRAIN_BASE_SUN_INTENSITY);
        this.sunLight.position.set(worldCenter, 10000, worldCenter);
        this.scene.add(this.ambientLight, this.sunLight);

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
                if (showObjects.checked) {
                    this.updateObjectDistanceCulling(true);
                }
            }
        });

        // Scene brightness
        const brightnessSlider = document.getElementById('terrain-brightness-slider') as HTMLInputElement | null;
        const brightnessLabel = document.getElementById('terrain-brightness-label');
        if (brightnessSlider && brightnessLabel) {
            brightnessSlider.addEventListener('input', (e) => {
                const value = parseFloat((e.target as HTMLInputElement).value);
                brightnessLabel.textContent = `Brightness: ${value.toFixed(2)}×`;
                this.setBrightness(value);
            });
            const initialBrightness = parseFloat(brightnessSlider.value) || TERRAIN_BRIGHTNESS_DEFAULT;
            brightnessLabel.textContent = `Brightness: ${initialBrightness.toFixed(2)}×`;
            this.setBrightness(initialBrightness);
        }

        // Object draw distance
        const objectDistanceSlider = document.getElementById('terrain-object-distance-slider') as HTMLInputElement | null;
        const objectDistanceLabel = document.getElementById('terrain-object-distance-label');
        if (objectDistanceSlider && objectDistanceLabel) {
            objectDistanceSlider.addEventListener('input', (e) => {
                const value = parseFloat((e.target as HTMLInputElement).value);
                this.objectDrawDistance = Math.max(500, value);
                objectDistanceLabel.textContent = `Object Distance: ${Math.round(this.objectDrawDistance)}`;
                this.updateObjectDistanceCulling(true);
            });
            const initialDistance = parseFloat(objectDistanceSlider.value) || TERRAIN_OBJECT_DRAW_DISTANCE_DEFAULT;
            this.objectDrawDistance = Math.max(500, initialDistance);
            objectDistanceLabel.textContent = `Object Distance: ${Math.round(this.objectDrawDistance)}`;
        }

        // Keyboard movement (WSAD + Shift sprint)
        window.addEventListener('keydown', (e) => this.handleMovementKey(e, true));
        window.addEventListener('keyup', (e) => this.handleMovementKey(e, false));
        window.addEventListener('blur', () => this.resetMovementKeys());
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
        this.updateStats(0, 0);

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
            this.updateStats(0, 0);
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
            this.updateStats(this.getTerrainTileCount(result.mesh), result.objectsData?.objects.length ?? 0);

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
                    if (showObjects.checked) {
                        this.updateObjectDistanceCulling(true);
                    }
                }
            }

            if (status) {
                const objCount = result.objectsData?.objects.length ?? 0;
                status.textContent = `World ${result.mapNumber} loaded. ${objCount} objects.`;
            }
        } catch (e) {
            console.error('Terrain loading error:', e);
            if (status) status.textContent = `Error: ${(e as Error).message}`;
            this.updateStats(0, 0);
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

    private getTerrainTileCount(mesh: THREE.Mesh): number {
        const geometry = mesh.geometry as THREE.BufferGeometry;
        const indexCount = geometry.getIndex()?.count ?? 0;
        if (indexCount > 0) {
            return Math.floor(indexCount / 6);
        }
        const positionCount = geometry.getAttribute('position')?.count ?? 0;
        return Math.floor(positionCount / 4);
    }

    private updateStats(tileCount: number, objectCount: number) {
        const tileEl = document.getElementById('terrain-tile-count');
        const objectEl = document.getElementById('terrain-object-count');
        if (tileEl) tileEl.textContent = Math.max(0, tileCount).toLocaleString();
        if (objectEl) objectEl.textContent = Math.max(0, objectCount).toLocaleString();
    }

    private updateObjectDistanceCulling(force = false) {
        if (!this.objectsGroup || !this.objectsGroup.visible) return;

        const now = performance.now();
        if (!force && now - this.objectCullLastUpdateMs < TERRAIN_OBJECT_CULL_INTERVAL_MS) {
            return;
        }

        if (force) {
            this.objectsGroup.updateMatrixWorld(true);
        }

        const maxDistance = this.objectDrawDistance;
        const cameraPos = this.camera.position;
        for (const child of this.objectsGroup.children) {
            child.visible = this.isWithinObjectDistance(child, cameraPos, maxDistance);
        }

        this.objectCullLastUpdateMs = now;
    }

    private isWithinObjectDistance(object: THREE.Object3D, cameraPos: THREE.Vector3, maxDistance: number): boolean {
        const mesh = object as THREE.Mesh;
        const geometry = mesh.geometry as THREE.BufferGeometry | undefined;

        if (geometry) {
            if (!geometry.boundingSphere) {
                geometry.computeBoundingSphere();
            }
            const sphere = geometry.boundingSphere;
            if (sphere) {
                this.tempCullCenter.copy(sphere.center).applyMatrix4(object.matrixWorld);
                this.tempCullScale.setFromMatrixScale(object.matrixWorld);
                const radiusScale = Math.max(this.tempCullScale.x, this.tempCullScale.y, this.tempCullScale.z);
                const radius = sphere.radius * radiusScale;
                const maxRange = maxDistance + radius;
                return this.tempCullCenter.distanceToSquared(cameraPos) <= maxRange * maxRange;
            }
        }

        object.getWorldPosition(this.tempCullCenter);
        return this.tempCullCenter.distanceToSquared(cameraPos) <= maxDistance * maxDistance;
    }

    private setBrightness(value: number) {
        const safeValue = Math.max(0.1, value);
        this.renderer.toneMappingExposure = safeValue;
        if (this.ambientLight) this.ambientLight.intensity = TERRAIN_BASE_AMBIENT_INTENSITY * safeValue;
        if (this.sunLight) this.sunLight.intensity = TERRAIN_BASE_SUN_INTENSITY * safeValue;
    }

    private handleMovementKey(event: KeyboardEvent, isDown: boolean) {
        if (!this.isActive) return;
        const code = event.code as MovementKeyCode;
        if (!MOVEMENT_KEYS.includes(code)) return;
        if (event.ctrlKey || event.metaKey || event.altKey) return;

        if (isDown && this.isTypingIntoUI(event.target)) {
            return;
        }

        this.movementKeys[code] = isDown;
        event.preventDefault();
    }

    private isTypingIntoUI(target: EventTarget | null): boolean {
        if (!(target instanceof HTMLElement)) return false;
        const tagName = target.tagName.toLowerCase();
        return (
            tagName === 'input' ||
            tagName === 'textarea' ||
            tagName === 'select' ||
            target.isContentEditable
        );
    }

    private resetMovementKeys() {
        this.movementKeys.KeyW = false;
        this.movementKeys.KeyA = false;
        this.movementKeys.KeyS = false;
        this.movementKeys.KeyD = false;
        this.movementKeys.ShiftLeft = false;
        this.movementKeys.ShiftRight = false;
    }

    private updateKeyboardMovement(deltaSeconds: number) {
        const forwardInput = (this.movementKeys.KeyW ? 1 : 0) + (this.movementKeys.KeyS ? -1 : 0);
        const rightInput = (this.movementKeys.KeyA ? 1 : 0) + (this.movementKeys.KeyD ? -1 : 0);
        if (forwardInput === 0 && rightInput === 0) return;

        this.camera.getWorldDirection(this.tempMoveForward);
        this.tempMoveForward.y = 0;
        if (this.tempMoveForward.lengthSq() < 1e-8) return;
        this.tempMoveForward.normalize();

        this.tempMoveRight.set(this.tempMoveForward.z, 0, -this.tempMoveForward.x).normalize();
        this.tempMoveDelta.set(0, 0, 0);
        this.tempMoveDelta.addScaledVector(this.tempMoveForward, forwardInput);
        this.tempMoveDelta.addScaledVector(this.tempMoveRight, rightInput);
        if (this.tempMoveDelta.lengthSq() < 1e-8) return;
        this.tempMoveDelta.normalize();

        const sprint = this.movementKeys.ShiftLeft || this.movementKeys.ShiftRight;
        const speed = TERRAIN_CAMERA_MOVE_SPEED * (sprint ? TERRAIN_CAMERA_SPRINT_MULTIPLIER : 1);
        this.tempMoveDelta.multiplyScalar(speed * deltaSeconds);

        this.camera.position.add(this.tempMoveDelta);
        this.controls.target.add(this.tempMoveDelta);
    }

    private animate = () => {
        requestAnimationFrame(this.animate);
        if (!this.isActive) return;

        const delta = Math.min(this.clock.getDelta(), TERRAIN_MAX_DELTA_SECONDS);
        this.updateKeyboardMovement(delta);
        this.controls.update();
        this.updateObjectDistanceCulling();
        this.renderer.render(this.scene, this.camera);
    };
}
