// src/terrain-scene.ts
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TerrainLoader } from './terrain/TerrainLoader';
import { loadTerrainObjects } from './terrain/TerrainObjects';
import { TERRAIN_SCALE } from './terrain/TerrainMesh';
import { TERRAIN_SIZE } from './terrain/formats/ATTReader';

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
        const dropZone = document.getElementById('world-drop-zone');
        const folderInput = document.getElementById('world-folder-input') as HTMLInputElement | null;

        if (dropZone && folderInput) {
            dropZone.addEventListener('click', () => folderInput.click());

            folderInput.addEventListener('change', () => {
                if (folderInput.files && folderInput.files.length > 0) {
                    this.handleWorldFiles(folderInput.files);
                }
            });

            dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('drag-hover'); });
            dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-hover'));
            dropZone.addEventListener('drop', e => {
                e.preventDefault();
                dropZone.classList.remove('drag-hover');
                if (e.dataTransfer?.files) {
                    this.handleWorldFiles(e.dataTransfer.files);
                }
            });
        }

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

    private async handleWorldFiles(fileList: FileList) {
        const status = document.getElementById('terrain-status');
        if (status) status.textContent = 'Loading world...';

        const files = new Map<string, File>();
        for (let i = 0; i < fileList.length; i++) {
            const f = fileList[i];
            const path = (f as any).webkitRelativePath || f.name;
            files.set(path, f);
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
                    (loaded, total) => {
                        if (status) status.textContent = `Loading objects: ${loaded}/${total}...`;
                    },
                );
                this.scene.add(this.objectsGroup);
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

    private animate = () => {
        requestAnimationFrame(this.animate);
        if (!this.isActive) return;

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    };
}
