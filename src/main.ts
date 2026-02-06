// src/main.ts
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper.js';
import { BMDLoader, convertTgaToDataUrl } from './bmd-loader';
import { convertOzjToDataUrl } from './ozj-loader';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import GIF from 'gif.js';
import gifWorkerUrl from 'gif.js/dist/gif.worker.js?url';
import { isElectron, autoSearchTextures, readFileFromPath, createFileFromElectronData, getFilePathFromFile } from './electron-helper';
import { CharacterTestScene } from './character-test-scene';
import { TerrainScene } from './terrain-scene';
import { SkinnedVertexNormalsHelper } from './helpers/SkinnedVertexNormalsHelper';
import { Disposer } from './utils/Disposer';
import { FileValidator, FileValidationError } from './utils/FileValidator';
import { logger } from './utils/Logger';
import {
    applyBlendModeToMaterial,
    describeBlendMode,
    detectBlendModeFromTexture,
    type BlendHeuristicResult,
} from './utils/TextureBlendHeuristics';
import './style.css';

// == View ==
let skeletonHelper: THREE.SkeletonHelper | null = null;
const showSkeletonEl = document.getElementById('show-skeleton-checkbox') as HTMLInputElement;
const wireframeEl    = document.getElementById('wireframe-checkbox')    as HTMLInputElement;

class App {
    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    private controls!: OrbitControls;
    private clock: THREE.Clock = new THREE.Clock();
    private ambientLight!: THREE.AmbientLight;
    private hemisphereLight!: THREE.HemisphereLight;
    private directionalLight!: THREE.DirectionalLight;
    private rimLight!: THREE.DirectionalLight;
    private mixer: THREE.AnimationMixer | null = null;
    private isRecordingGif = false;
    private gridHelper: THREE.GridHelper | null = null;
    
    private currentAction: THREE.AnimationAction | null = null;

    // ### CHANGE ### We store the application state
    private bmdFile: File | null = null;
    private animBmdFile: File | null = null;
    private loadedGroup: THREE.Group | null = null;
    private requiredTextures: string[] = [];
    private exportBtn!: HTMLButtonElement;        // ← new button
    private gifWidthInput!: HTMLInputElement;
    private gifHeightInput!: HTMLInputElement;
    private gifDelayInput!: HTMLInputElement;
    private gifFrameMultiplierInput!: HTMLInputElement;
    private textureLoader = new THREE.TextureLoader();
    private lastBmdFilePath: string | null = null;  // For Electron auto-texture search
    private lastAttachmentFilePath: string | null = null;  // For Electron auto-texture search (attachments)

    // ### NEW ### For rotation
    private isAutoRotating = true;
    private userIsInteracting = false;
    private isActive = true;

    // ### NEW ### Diagnostic elements
    private diagActionsCountEl!: HTMLElement;      // number of clips / actions
    private diagAnimationKeysEl!: HTMLElement;     // frames in the active clip
    private diagAnimationsCountEl!: HTMLElement;
    private diagCurrentFrameEl!: HTMLElement;
    private diagBonesCountEl!: HTMLElement;
    private diagMeshesCountEl!: HTMLElement;
    private diagFpsEl!: HTMLElement;

    private lastFrameTime = 0;
    private frameCount = 0;
    private fps = 0;

    // --- Frame lock ---
    private lockFrameCheckbox!: HTMLInputElement;
    private lockFrameInput!:    HTMLInputElement;
    private lockCurrentBtn!:    HTMLButtonElement;
    private isFrameLocked = false;
    private lockedFrame   = 0;

    private readonly bmdLoader = new BMDLoader();

    private meshRefs: THREE.Mesh[] = [];
    private attachments: THREE.Group[] = [];
    private currentAttachment: THREE.Group | null = null;
    private currentAttachmentFile: File | null = null;
    private mainSkeleton: THREE.Skeleton | null = null;

    // Helpers / debug visuals
    private boundingBoxHelper: THREE.BoxHelper | null = null;
    private axesHelper: THREE.AxesHelper | null = null;
    private normalHelpers: Array<THREE.LineSegments & { update: () => void }> = [];

    private showBoundingBoxCheckbox!: HTMLInputElement;
    private showAxesCheckbox!: HTMLInputElement;
    private showNormalsCheckbox!: HTMLInputElement;
    private normalsVisible = false;
    private normalsUpdateCounter = 0;

    constructor() {
        logger.debug('%c[App] constructor', 'color:#0f0');
        this.initThree();
        this.initUI();
        this.animate(performance.now());
    }

    public setActive(active: boolean) {
        this.isActive = active;
    }

    //----------------------------------------------------------
    // THREE.JS (no changes)
    //----------------------------------------------------------
    private initThree() {
        logger.groupDebug('%c[App] initThree()', 'color:#0f0');
        const container = document.getElementById('canvas-container');
        if (!container) throw new Error('#canvas-container not found in HTML!');

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0b1322);
        this.scene.fog = new THREE.FogExp2(0x0b1322, 0.00125);

        this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 10000);
        this.camera.position.set(0, 200, 400);

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true, // keep frame buffer for GIF capture
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 0.95;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

        const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
        const environmentScene = new RoomEnvironment();
        this.scene.environment = pmremGenerator.fromScene(environmentScene).texture;
        environmentScene.dispose();
        pmremGenerator.dispose();

        window.addEventListener('resize', () => {
            this.camera.aspect = container.clientWidth / container.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.renderer.setSize(container.clientWidth, container.clientHeight);
        });

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.target.set(0, 90, 0);

        // ### NEW ### Pause rotation during interaction
        this.controls.addEventListener('start', () => { this.userIsInteracting = true; });
        this.controls.addEventListener('end', () => { this.userIsInteracting = false; });

        this.ambientLight = new THREE.AmbientLight(0xcde3ff, 0.42);
        this.hemisphereLight = new THREE.HemisphereLight(0x89d7ff, 0x111a27, 0.52);
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1.7);
        this.directionalLight.position.set(180, 260, 140);
        this.directionalLight.castShadow = true;
        this.directionalLight.shadow.mapSize.set(2048, 2048);
        this.directionalLight.shadow.radius = 3;
        this.directionalLight.shadow.bias = -0.0004;
        this.directionalLight.shadow.camera.near = 10;
        this.directionalLight.shadow.camera.far = 1400;
        this.directionalLight.shadow.camera.left = -360;
        this.directionalLight.shadow.camera.right = 360;
        this.directionalLight.shadow.camera.top = 360;
        this.directionalLight.shadow.camera.bottom = -360;

        this.rimLight = new THREE.DirectionalLight(0x74c9ff, 0.72);
        this.rimLight.position.set(-160, 130, -210);
        this.rimLight.castShadow = false;

        this.scene.add(this.ambientLight);
        this.scene.add(this.hemisphereLight);
        this.scene.add(this.directionalLight);
        this.scene.add(this.rimLight);
        this.scene.add(this.directionalLight.target);

        this.gridHelper = new THREE.GridHelper(600, 24, 0x3f5b84, 0x1c2f49);
        const gridMaterial = this.gridHelper.material;
        if (Array.isArray(gridMaterial)) {
            gridMaterial.forEach(mat => {
                mat.transparent = true;
                mat.opacity = 0.35;
                mat.depthWrite = false;
            });
        } else {
            gridMaterial.transparent = true;
            gridMaterial.opacity = 0.35;
            gridMaterial.depthWrite = false;
        }
        this.gridHelper.visible = true;
        this.scene.add(this.gridHelper);

        logger.groupEnd();
    }

    //----------------------------------------------------------
    // UI - Modified
    //----------------------------------------------------------
    private initUI() {
        logger.groupDebug('%c[App] initUI()', 'color:#0f0');

        const bmdZone   = document.getElementById('bmd-drop-zone')!;
        const bmdInput  = document.getElementById('bmd-file-input') as HTMLInputElement;
        const animZone  = document.getElementById('anim-bmd-drop-zone')!;
        const animInput = document.getElementById('anim-bmd-file-input') as HTMLInputElement;
        const texZone   = document.getElementById('texture-drop-zone')!;
        const texInput  = document.getElementById('texture-file-input') as HTMLInputElement;
        this.exportBtn = document.getElementById('export-textures-btn') as HTMLButtonElement;
        this.exportBtn.addEventListener('click', () => this.exportTextures());
        
        const speedSlider = document.getElementById('speed-slider') as HTMLInputElement;
        const speedLabel = document.getElementById('speed-label')!;
        this.gifWidthInput  = document.getElementById('gif-width-input')  as HTMLInputElement;
        this.gifHeightInput = document.getElementById('gif-height-input') as HTMLInputElement;
        this.gifDelayInput  = document.getElementById('gif-delay-input')  as HTMLInputElement;
        this.gifFrameMultiplierInput = document.getElementById('gif-frame-multiplier-input') as HTMLInputElement;

        const exportGifBtn = document.getElementById('export-gif-btn') as HTMLButtonElement;
        exportGifBtn.addEventListener('click', () => this.exportGif());

        const exportGlbBtn = document.getElementById('export-glb-btn') as HTMLButtonElement;
        exportGlbBtn.addEventListener('click', () => this.exportToGLB());
        
        speedSlider.addEventListener('input', (e) => {
            const speed = parseFloat((e.target as HTMLInputElement).value);
            speedLabel.textContent = `Speed: ${speed.toFixed(2)}x`;
            this.setAnimationSpeed(speed);
        });
        speedLabel.textContent = `Speed: ${parseFloat(speedSlider.value).toFixed(2)}x`;

        const status = document.getElementById('status')!;
        status.textContent = 'Waiting for BMD file…';

        this.initScaleSlider();

        // ### NEW ### Rotation control
        const autoRotateCheckbox = document.getElementById('auto-rotate-checkbox') as HTMLInputElement;
        autoRotateCheckbox.addEventListener('change', (e) => {
            this.isAutoRotating = (e.target as HTMLInputElement).checked;
        });
        this.isAutoRotating = autoRotateCheckbox.checked;

        /* BACKGROUND COLOR */
        const bgInput = document.getElementById('bg-color-input') as HTMLInputElement;
        bgInput.addEventListener('input', e => {
            const c = (e.target as HTMLInputElement).value;
            this.setSceneBackground(c);
        });
        this.setSceneBackground(bgInput.value || '#0b1322');

        /* BRIGHTNESS */
        const brightSlider = document.getElementById('brightness-slider') as HTMLInputElement;
        const brightLabel  = document.getElementById('brightness-label')!;
        brightSlider.addEventListener('input', e => {
            const v = parseFloat((e.target as HTMLInputElement).value);
            brightLabel.textContent = `Brightness: ${v.toFixed(2)}×`;
            this.setBrightness(v);
        });
        const initialBrightness = parseFloat(brightSlider.value) || 2.0;
        brightLabel.textContent = `Brightness: ${initialBrightness.toFixed(2)}×`;
        this.setBrightness(initialBrightness);

        // ### NEW ### Diagnostic elements
        this.diagActionsCountEl    = document.getElementById('diag-actions-count')!;
        this.diagAnimationKeysEl   = document.getElementById('diag-animation-keys')!;
        this.diagCurrentFrameEl    = document.getElementById('diag-current-frame')!;
        this.diagBonesCountEl      = document.getElementById('diag-bones-count')!;
        this.diagMeshesCountEl     = document.getElementById('diag-meshes-count')!;
        this.diagFpsEl             = document.getElementById('diag-fps')!;

        this.updateDiagnosticInfo(0); // Set initial values

        // ---------- FRAME LOCK ----------
        this.lockFrameCheckbox = document.getElementById('lock-frame-checkbox') as HTMLInputElement;
        this.lockFrameInput    = document.getElementById('lock-frame-input')    as HTMLInputElement;
        this.lockCurrentBtn    = document.getElementById('lock-current-btn')    as HTMLButtonElement;

        this.lockFrameCheckbox.addEventListener('change', () => {
            this.isFrameLocked = this.lockFrameCheckbox.checked;
            if (this.isFrameLocked) this.applyLockedFrame();
        });

        this.lockFrameInput.addEventListener('input', () => {
            this.lockedFrame = parseInt(this.lockFrameInput.value, 10) || 0;
            if (this.isFrameLocked) this.applyLockedFrame();
        });

        this.lockCurrentBtn.addEventListener('click', () => {
            // get the current frame from diagnostics
            const cur = parseInt(this.diagCurrentFrameEl.textContent || '0', 10) || 0;
            this.lockFrameInput.value = cur.toString();
            this.lockedFrame = cur;
            this.lockFrameCheckbox.checked = true;
            this.isFrameLocked = true;
            this.applyLockedFrame();
        });

        const setupDropZone = (zone: HTMLElement, input: HTMLInputElement, onFiles: (files: FileList) => void) => {
            zone.addEventListener('click', () => input.click());
            zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
            zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
            zone.addEventListener('drop', e => {
                e.preventDefault();
                zone.classList.remove('drag-over');
                if (e.dataTransfer?.files.length) onFiles(e.dataTransfer.files);
            });
            input.addEventListener('change', e => {
                const list = (e.target as HTMLInputElement).files;
                if (list?.length) onFiles(list);
            });
        };

        // Special handler for BMD files in Electron - use file dialog to get path
        const setupBmdDropZoneElectron = async (zone: HTMLElement, input: HTMLInputElement) => {
            const clickHandler = async () => {
                if (isElectron()) {
                    // In Electron, use native dialog to get file path
                    const { openFileDialog, readFileFromPath, createFileFromElectronData } = await import('./electron-helper');
                    const filePath = await openFileDialog([{ name: 'BMD Files', extensions: ['bmd'] }]);

                    if (filePath) {
                        const fileData = await readFileFromPath(filePath);
                        if (fileData) {
                            const file = createFileFromElectronData(fileData.name, fileData.data);
                            this.handleBmdFile(file, filePath);
                        }
                    }
                } else {
                    // In browser, use regular file input
                    input.click();
                }
            };

            zone.addEventListener('click', clickHandler);
            zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
            zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                e.stopPropagation();  // Prevent triggering input.change
                zone.classList.remove('drag-over');

                if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
                    const file = e.dataTransfer.files[0];

                    // Try to get file path using Electron API
                    let filePath: string | undefined = undefined;
                    if (isElectron()) {
                        const electronPath = getFilePathFromFile(file);
                        if (electronPath) {
                            filePath = electronPath;
                            logger.debug('[BMD drop] Got path from Electron API:', filePath);
                        } else {
                            logger.warn('[BMD drop] Could not get file path from Electron');
                        }
                    }

                    this.handleBmdFile(file, filePath);
                }
            });
            // Only handle input.change if not from drag & drop
            let isDragging = false;
            zone.addEventListener('dragenter', () => { isDragging = true; });
            zone.addEventListener('dragleave', () => { isDragging = false; });
            input.addEventListener('change', e => {
                // Skip if this was triggered by drag & drop (we already handled it)
                if (isDragging) {
                    isDragging = false;
                    return;
                }
                const list = (e.target as HTMLInputElement).files;
                if (list?.length) this.handleBmdFile(list[0]);
            });
        };

        setupBmdDropZoneElectron(bmdZone, bmdInput);
        setupDropZone(animZone, animInput, files => this.handleAnimBmdFile(files[0]));
        setupDropZone(texZone, texInput, files => this.handleMultipleTextureFiles(files));

        // Setup attachment drop zone
        const attachZone = document.getElementById('attach-drop-zone')!;
        const attachInput = document.getElementById('attach-bmd-input') as HTMLInputElement;

        // Special handler for Electron to get file path
        const setupAttachmentDropZone = async (zone: HTMLElement, input: HTMLInputElement) => {
            const clickHandler = async () => {
                if (isElectron()) {
                    // In Electron, use native dialog to get file path
                    const { openFileDialog, readFileFromPath, createFileFromElectronData } = await import('./electron-helper');
                    const filePath = await openFileDialog([{ name: 'BMD Files', extensions: ['bmd'] }]);

                    if (filePath) {
                        const fileData = await readFileFromPath(filePath);
                        if (fileData) {
                            const file = createFileFromElectronData(fileData.name, fileData.data);
                            document.querySelector('#attach-drop-zone p')!.textContent = `Selected: ${file.name}`;
                            this.currentAttachmentFile = file;
                            this.lastAttachmentFilePath = filePath;
                            this.setupAttachmentControls();
                        }
                    }
                } else {
                    // In browser, use regular file input
                    input.click();
                }
            };

            zone.addEventListener('click', clickHandler);
            zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
            zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
            zone.addEventListener('drop', e => {
                e.preventDefault();
                e.stopPropagation();  // Prevent triggering input.change
                zone.classList.remove('drag-over');
                if (e.dataTransfer?.files.length) {
                    const file = e.dataTransfer.files[0];

                    // Try to get file path using Electron API
                    let filePath: string | undefined = undefined;
                    if (isElectron()) {
                        const electronPath = getFilePathFromFile(file);
                        if (electronPath) {
                            filePath = electronPath;
                            logger.debug('[Attachment drop] Got path from Electron API:', filePath);
                        } else {
                            logger.warn('[Attachment drop] Could not get file path from Electron');
                        }
                    }

                    document.querySelector('#attach-drop-zone p')!.textContent = `Selected: ${file.name}`;
                    this.currentAttachmentFile = file;
                    this.lastAttachmentFilePath = filePath || null;
                    this.setupAttachmentControls();
                }
            });
            // Only handle input.change if not from drag & drop
            let isDragging = false;
            zone.addEventListener('dragenter', () => { isDragging = true; });
            zone.addEventListener('dragleave', () => { isDragging = false; });
            input.addEventListener('change', e => {
                // Skip if this was triggered by drag & drop (we already handled it)
                if (isDragging) {
                    isDragging = false;
                    return;
                }
                const list = (e.target as HTMLInputElement).files;
                if (list?.length) {
                    const file = list[0];
                    document.querySelector('#attach-drop-zone p')!.textContent = `Selected: ${file.name}`;
                    this.currentAttachmentFile = file;
                    this.lastAttachmentFilePath = null; // No path in browser
                    this.setupAttachmentControls();
                }
            });
        };

        setupAttachmentDropZone(attachZone, attachInput);

        // === Drag and drop on canvas (3D scene) ===========================
        const canvasContainer = document.getElementById('canvas-container')!;

        canvasContainer.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });

        canvasContainer.addEventListener('drop', async (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (!e.dataTransfer?.files || e.dataTransfer.files.length === 0) return;

            const files = Array.from(e.dataTransfer.files);

            // Separate BMD files and texture files
            const bmdFiles = files.filter(f => f.name.toLowerCase().endsWith('.bmd'));
            const textureFiles = files.filter(f => {
                const ext = f.name.toLowerCase().split('.').pop();
                return ['jpg', 'jpeg', 'png', 'tga', 'ozj', 'ozt'].includes(ext || '');
            });

            // Handle BMD files (load first one as main model)
            if (bmdFiles.length > 0) {
                const file = bmdFiles[0];

                // Try to get file path using Electron API
                let filePath: string | undefined = undefined;
                if (isElectron()) {
                    const electronPath = getFilePathFromFile(file);
                    if (electronPath) {
                        filePath = electronPath;
                        logger.debug('%c[Canvas drop] Got BMD path from Electron API:', 'color: #4CAF50', filePath);
                    }
                }

                await this.handleBmdFile(file, filePath);
                logger.debug('%c[Canvas drop] Loaded BMD:', 'color: #4CAF50', file.name);
            }

            // Handle texture files
            if (textureFiles.length > 0) {
                await this.handleMultipleTextureFiles(textureFiles as any);
                logger.debug('%c[Canvas drop] Loaded textures:', 'color: #4CAF50', textureFiles.map(f => f.name).join(', '));
            }

            if (bmdFiles.length === 0 && textureFiles.length === 0) {
                logger.warn('[Canvas drop] No BMD or texture files found in drop');
            }
        });

        // === Show / hide skeleton =========================================
        showSkeletonEl.addEventListener('change', () => {
            if (skeletonHelper) skeletonHelper.visible = showSkeletonEl.checked;
        });

        // === Wireframe on/off ===============================================
        wireframeEl.addEventListener('change', () => {
            const flag = wireframeEl.checked;
            this.scene.traverse(obj => {
                if ((obj as any).isMesh) {
                    const mat = (obj as THREE.Mesh).material as THREE.Material;
                    if ('wireframe' in mat) {
                        (mat as any).wireframe = flag;
                        mat.needsUpdate = true;
                    }
                }
            });
        });

        // === Bounding box / axes / normals ================================
        this.showBoundingBoxCheckbox = document.getElementById('show-bbox-checkbox') as HTMLInputElement;
        this.showAxesCheckbox        = document.getElementById('show-axes-checkbox') as HTMLInputElement;
        this.showNormalsCheckbox     = document.getElementById('show-normals-checkbox') as HTMLInputElement;

        this.showBoundingBoxCheckbox.addEventListener('change', () => {
            this.updateBoundingBoxHelperState();
        });

        this.showAxesCheckbox.addEventListener('change', () => {
            this.updateAxesHelperState();
        });

        this.showNormalsCheckbox.addEventListener('change', () => {
            this.updateNormalsHelpersState();
        });

        // === attach model to bone (dropdown + slider) ===============================
        const attachBoneSelect = document.getElementById('attach-bone-select') as HTMLSelectElement;
        const attachBoneSlider = document.getElementById('attach-bone-slider') as HTMLInputElement;
        const attachBoneValue = document.getElementById('attach-bone-value')!;
        const undoAttachBtn = document.getElementById('undo-attach-btn') as HTMLButtonElement;

        // Sync dropdown with slider
        attachBoneSelect.addEventListener('change', () => {
            const boneIndex = parseInt(attachBoneSelect.value);
            if (!isNaN(boneIndex)) {
                attachBoneSlider.value = boneIndex.toString();
                attachBoneValue.textContent = boneIndex.toString();
                this.changeBoneForAttachment(boneIndex);
            }
        });

        // Sync slider with dropdown
        attachBoneSlider.addEventListener('input', () => {
            const boneIndex = parseInt(attachBoneSlider.value);
            attachBoneSelect.value = boneIndex.toString();
            attachBoneValue.textContent = boneIndex.toString();
            this.changeBoneForAttachment(boneIndex);
        });

        undoAttachBtn.addEventListener('click', () => this.removeAttachment());

        logger.groupEnd();
    }

    private initScaleSlider() {                                                            
        const scaleSlider = document.getElementById('scale-slider') as HTMLInputElement;   
        const scaleLabel = document.getElementById('scale-label')!;                       
                                                                                
       scaleSlider.addEventListener('input', (e) => {                                     
       const scale = parseFloat((e.target as HTMLInputElement).value);               
        scaleLabel.textContent = `Scale: ${scale.toFixed(2)}x`;                       
       this.setModelScale(scale);                                                     
        });                                                                               
        scaleLabel.textContent = `Scale: ${parseFloat(scaleSlider.value).toFixed(2)}x`;   
        }

       private setModelScale(scale: number) {                                                  
         if (this.loadedGroup) {                                                             
          this.loadedGroup.scale.set(scale, scale, scale);                                
          this.updateStageForObject(this.loadedGroup);
          }
        }

    private setSceneBackground(hexColor: string) {
        const color = new THREE.Color(hexColor);
        this.scene.background = color;
        if (this.scene.fog) {
            this.scene.fog.color.copy(color);
        }
        const container = document.getElementById('canvas-container') as HTMLElement | null;
        if (container) {
            container.style.backgroundColor = hexColor;
        }
    }

    private applySceneMaterialTuning(root: THREE.Object3D) {
        root.traverse(obj => {
            const mesh = obj as THREE.Mesh;
            if (!mesh.isMesh) return;

            mesh.castShadow = true;
            mesh.receiveShadow = true;

            const materials = Array.isArray(mesh.material)
                ? mesh.material
                : [mesh.material];

            materials.forEach(material => {
                if (!material) return;

                if (material instanceof THREE.MeshPhongMaterial) {
                    material.shininess = Math.max(material.shininess, 12);
                    material.specular.set(0x2f4869);
                }

                if ('envMapIntensity' in material) {
                    (material as THREE.MeshStandardMaterial).envMapIntensity = 0.72;
                }

                material.needsUpdate = true;
            });
        });
    }

    private updateStageForObject(object: THREE.Object3D | null) {
        if (!object) {
            if (this.gridHelper) {
                this.gridHelper.position.y = 0;
                this.gridHelper.scale.set(1, 1, 1);
            }
            return;
        }

        const box = new THREE.Box3().setFromObject(object);
        if (!Number.isFinite(box.min.y) || !Number.isFinite(box.max.y)) {
            return;
        }

        const size = box.getSize(new THREE.Vector3());
        const radius = Math.max(120, Math.max(size.x, size.z) * 0.74 + 30);
        const stageY = box.min.y - 1.2;

        if (this.gridHelper) {
            const gridScale = Math.max(0.65, Math.min(2.4, radius / 230));
            this.gridHelper.position.y = stageY;
            this.gridHelper.scale.set(gridScale, 1, gridScale);
        }

        this.directionalLight.target.position.set(0, (box.min.y + box.max.y) * 0.5, 0);
        this.directionalLight.target.updateMatrixWorld();
    }
    
    private handleBmdFile = async (file: File, filePath?: string) => {
        logger.info(`handleBmdFile("${file.name}")`);

        try {
            // Validate file before processing
            await FileValidator.validateBMDFile(file);

            this.bmdFile = file;
            this.lastBmdFilePath = filePath || null;  // Store file path for Electron texture search
            document.querySelector('#bmd-drop-zone p')!.textContent = `Selected: ${file.name}`;
            this.loadAndDisplayModel();
        } catch (error) {
            if (error instanceof FileValidationError) {
                alert(`Invalid file: ${error.message}`);
                logger.error('File validation failed:', error.message);
            } else {
                throw error;
            }
        }
    }

    private handleAnimBmdFile = (file: File) => {
        logger.debug(`[App] handleAnimBmdFile("${file.name}")`);
        this.animBmdFile = file;
        document.querySelector('#anim-bmd-drop-zone p')!.textContent = `Selected: ${file.name}`;
        this.loadExternalAnimations();
    }

    /** Loads every texture from the list */
    private handleMultipleTextureFiles = (files: FileList | File[]) => {
        Array.from(files).forEach(f => this.loadAndApplyTexture(f));
    }

    private handleTextureFile = (file: File) => {
        logger.debug(`[App] handleTextureFile("${file.name}")`);
        this.loadAndApplyTexture(file);
    }

    private exportToGLB() {
        if (!this.loadedGroup) {
            alert('Load a BMD model first.');
            return;
        }
        
        const exporter = new GLTFExporter();
        
        // Settings: binary .glb, embed images, include animations
        const options = {
            binary: true,
            animations: this.loadedGroup.animations,
            embedImages: true,
        };
        
        exporter.parse(
            this.loadedGroup,
            (result: ArrayBuffer | { [key: string]: any }) => {
            const glbBuffer = result as ArrayBuffer;
            const blob = new Blob([glbBuffer], { type: 'model/gltf-binary' });
        
            const nameBase =
                (this.loadedGroup!.name || 'model').replace(/[^a-z0-9_-]/gi, '_');
            const stamp = new Date()
                .toISOString()
                .replace(/[:T]/g, '')
                .split('.')[0];
            const fileName = `${nameBase}_${stamp}.glb`;
        
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
            URL.revokeObjectURL(link.href);
        
            logger.debug(`✔️  Saved ${fileName} (${(blob.size / 1024).toFixed(1)} KB)`);
            },
            (error) => {
            logger.error('❌ GLTFExporter error:', error);
            alert('Error during export. Check the console.');
            },
            options
        );
    }

    private exportGif() {
        if (this.isRecordingGif) return;
        if (!this.loadedGroup) {
            alert('Load a BMD model first.');
            return;
        }

        const status = document.getElementById('status')!;
        const gifBtn = document.getElementById('export-gif-btn') as HTMLButtonElement | null;

        this.isRecordingGif = true;
        status.textContent = 'Recording GIF…';
        if (gifBtn) gifBtn.disabled = true;

        // --- dimensions ---
        const w = Math.max(16, Math.min(1024, parseInt(this.gifWidthInput?.value ?? '800', 10) || 800));
        const h = Math.max(16, Math.min(1024, parseInt(this.gifHeightInput?.value ?? '600', 10) || 600));

        // --- animation info ---
        const speedSliderEl = document.getElementById('speed-slider') as HTMLInputElement | null;
        const timeScale = parseFloat(speedSliderEl?.value ?? '1') || 1;
        const hasAnim = !!(this.currentAction && this.mixer);

        let clip: (THREE.AnimationClip & { userData?: { numAnimationKeys?: number } }) | null = null;
        let numKeys = 0;

        if (hasAnim && this.currentAction) {
            clip = this.currentAction.getClip() as THREE.AnimationClip & {
                userData?: { numAnimationKeys?: number }
            };
            numKeys = clip.userData?.numAnimationKeys ?? 0;
        }

        const requestedDelay = parseInt(this.gifDelayInput?.value ?? '', 10);
        const userDelay = !Number.isNaN(requestedDelay) && requestedDelay > 0 ? requestedDelay : null;

        const frameMultiplier = Math.max(1, Math.min(8, parseInt(this.gifFrameMultiplierInput?.value ?? '1', 10) || 1));

        // --- canvases ---
        const tmpCanvas = document.createElement('canvas');
        tmpCanvas.width = w;
        tmpCanvas.height = h;
        const tmpCtx = tmpCanvas.getContext('2d')!;

        const transparentColor = 0x00ff00;
        const trR = (transparentColor >> 16) & 0xff;
        const trG = (transparentColor >> 8) & 0xff;
        const trB = transparentColor & 0xff;

        const gif = new GIF({
            workers: 2,
            workerScript: gifWorkerUrl,
            quality: 10,
            width: w,
            height: h,
            transparent: transparentColor,
        } as any);

        const oldBg = this.scene.background
            ? (this.scene.background as THREE.Color).clone()
            : null;
        this.scene.background = null;

        const oldGridVisible = this.gridHelper?.visible ?? false;
        if (this.gridHelper) this.gridHelper.visible = false;

        gif.on('progress', (p: number) => {
            status.textContent = `Rendering GIF… ${(p * 100).toFixed(0)}%`;
        });

        gif.on('finished', (blob: Blob) => {
            if (oldBg) this.scene.background = oldBg;
            else this.scene.background = null;
            if (this.gridHelper) this.gridHelper.visible = oldGridVisible;

            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `model_${w}x${h}.gif`;
            a.click();
            URL.revokeObjectURL(url);

            this.isRecordingGif = false;
            if (gifBtn) gifBtn.disabled = false;
            status.textContent = `GIF saved (${w}×${h}).`;
        });

        gif.on('abort', () => {
            if (oldBg) this.scene.background = oldBg;
            else this.scene.background = null;
            if (this.gridHelper) this.gridHelper.visible = oldGridVisible;

            this.isRecordingGif = false;
            if (gifBtn) gifBtn.disabled = false;
            status.textContent = 'GIF recording aborted.';
        });

        if (!hasAnim || !clip || numKeys === 0) {
            this.renderer.render(this.scene, this.camera);
            tmpCtx.clearRect(0, 0, w, h);
            tmpCtx.drawImage(this.renderer.domElement, 0, 0, w, h);

            const imgData = tmpCtx.getImageData(0, 0, w, h);
            const data = imgData.data;
            const alphaThreshold = 40;
            for (let i = 0; i < data.length; i += 4) {
                if (data[i + 3] < alphaThreshold) {
                    data[i] = trR;
                    data[i + 1] = trG;
                    data[i + 2] = trB;
                    data[i + 3] = 255;
                }
            }
            tmpCtx.putImageData(imgData, 0, 0);
            gif.addFrame(tmpCtx, {
                copy: true,
                delay: Math.min(Math.max(userDelay ?? 120, 10), 1000),
            });
            gif.render();
            return;
        }

        const totalFrames = Math.max(1, numKeys * frameMultiplier);
        const effectiveTimeScale =
            (this.currentAction as any)._effectiveTimeScale ?? timeScale;
        const autoDelayMs =
            (clip.duration / Math.max(effectiveTimeScale, 0.0001)) / totalFrames * 1000;
        const frameDelay = Math.min(
            Math.max(userDelay ?? Math.round(autoDelayMs), 5),
            1000,
        );

        let frameIndex = 0;
        const captureFrame = () => {
            if (frameIndex >= totalFrames) {
                gif.render();
                return;
            }

            const t = (frameIndex / totalFrames) * clip!.duration;
            this.currentAction!.time = t;
            this.mixer!.update(0);

            this.renderer.render(this.scene, this.camera);
            tmpCtx.clearRect(0, 0, w, h);
            tmpCtx.drawImage(this.renderer.domElement, 0, 0, w, h);

            const imgData = tmpCtx.getImageData(0, 0, w, h);
            const data = imgData.data;
            const alphaThreshold = 40;
            for (let i = 0; i < data.length; i += 4) {
                if (data[i + 3] < alphaThreshold) {
                    data[i] = trR;
                    data[i + 1] = trG;
                    data[i + 2] = trB;
                    data[i + 3] = 255;
                }
            }
            tmpCtx.putImageData(imgData, 0, 0);

            gif.addFrame(tmpCtx, {
                copy: true,
                delay: frameDelay,
            });

            frameIndex++;
            requestAnimationFrame(captureFrame);
        };

        requestAnimationFrame(captureFrame);
    }

    //----------------------------------------------------------
    // MODEL LOADING - Modified
    //----------------------------------------------------------
    private async loadAndDisplayModel() {
        if (!this.bmdFile) return;
        const statusEl = document.getElementById('status')!;
        statusEl.textContent = 'Loading model…';
        logger.groupDebug('loadAndDisplayModel()');
        logger.time('loadAndDisplayModel');

        // Reset state
        this.clearScene();
        this.loadedGroup = null;
        this.requiredTextures = [];
        document.getElementById('texture-controls')!.style.display = 'none';

        try {
            const bmdBuf = await this.bmdFile.arrayBuffer();
            const { group, requiredTextures } = await this.bmdLoader.load(bmdBuf);
            group.name = 'bmd_model';
            this.scene.add(group);
            this.loadedGroup = group;
            this.requiredTextures = requiredTextures;
            this.applySceneMaterialTuning(group);
            this.updateStageForObject(group);

            // Save main model skeleton for attachments
            const mainSkinnedMesh = group.getObjectByProperty('type', 'SkinnedMesh') as THREE.SkinnedMesh | undefined;
            this.mainSkeleton = mainSkinnedMesh?.skeleton || null;

            this.setupAnimations(group);
            statusEl.textContent = `Loaded: ${group.name} (animations: ${group.animations.length})`;
            this.updateTextureUI();
            this.updateDiagnosticInfo();
            if (this.exportBtn) this.exportBtn.disabled = false;

            // Auto-search and load textures in Electron
            if (isElectron() && this.lastBmdFilePath && requiredTextures.length > 0) {
                logger.debug('%c[Electron] Auto-searching textures...', 'color: #4CAF50');
                logger.debug('[Electron] Required textures from BMD:', requiredTextures);
                logger.debug('[Electron] BMD file path:', this.lastBmdFilePath);
                statusEl.textContent = 'Searching for textures...';

                try {
                    const foundTextures = await autoSearchTextures(this.lastBmdFilePath, requiredTextures);
                    const foundCount = Object.keys(foundTextures).length;
                    logger.debug('[Electron] Search result:', foundTextures);

                    if (foundCount > 0) {
                        // Count total files (each texture name may have multiple files)
                        const totalFiles = Object.values(foundTextures).reduce((sum, paths) => sum + paths.length, 0);
                        logger.debug(`%c[Electron] Found ${foundCount} texture names (${totalFiles} files), loading...`, 'color: #4CAF50');

                        // Load each found texture file
                        for (const [textureName, texturePaths] of Object.entries(foundTextures)) {
                            for (const texturePath of texturePaths) {
                                const fileData = await readFileFromPath(texturePath);
                                if (fileData) {
                                    const file = createFileFromElectronData(fileData.name, fileData.data);
                                    await this.loadAndApplyTexture(file);
                                }
                            }
                        }

                        statusEl.textContent = `Loaded: ${group.name} | Auto-loaded ${totalFiles} texture files for ${foundCount} base names`;
                    } else {
                        statusEl.textContent = `Loaded: ${group.name} | No textures found automatically`;
                    }
                } catch (error) {
                    logger.error('[Electron] Error auto-searching textures:', error);
                    statusEl.textContent = `Loaded: ${group.name} | Texture search failed`;
                }
            }

            // --- skeleton helper ---
            if (skeletonHelper) {
                this.scene.remove(skeletonHelper);
                (skeletonHelper.geometry as THREE.BufferGeometry).dispose();
                skeletonHelper = null;
            }
            skeletonHelper = new THREE.SkeletonHelper(group);
            skeletonHelper.visible = showSkeletonEl.checked;
            this.scene.add(skeletonHelper);

            // --- wireframe init ----
            group.traverse(obj => {
                if ((obj as any).isMesh) {
                    const m = (obj as THREE.Mesh).material as THREE.Material;
                    if ('wireframe' in m) {
                        (m as any).wireframe = wireframeEl.checked;
                        m.needsUpdate = true;
                    }
                }
            });

            // --- meshRefs & blending UI ---
            this.meshRefs = [];
            group.traverse(obj => {
                if ((obj as any).isMesh) this.meshRefs.push(obj as THREE.Mesh);
            });
            this.buildBlendingUI();

            // --- helpers (bbox / axes / normals) --------------------------
            this.updateBoundingBoxHelperState();
            this.updateAxesHelperState();
            this.updateNormalsHelpersState();

        } catch (err) {
            logger.error('loader.load() ERROR', err);
            statusEl.textContent = `Error: ${(err as Error).message}`;
        } finally {
            logger.timeEnd('loadAndDisplayModel');
            logger.groupEnd();
        }
    }

    /** Load animations from an external BMD file and apply them to the current model */
    private async loadExternalAnimations() {
        if (!this.loadedGroup || !this.animBmdFile) return;

        try {
            const buffer = await this.animBmdFile.arrayBuffer();

            // Use mainSkeleton if available (more reliable when attachments are loaded)
            let skeleton: THREE.Skeleton | null = this.mainSkeleton;

            // Fallback: search in loadedGroup
            if (!skeleton) {
                logger.debug('[loadExternalAnimations] mainSkeleton not available, searching in loadedGroup...');
                this.loadedGroup.traverse(obj => {
                    if (!skeleton && (obj as THREE.SkinnedMesh).isSkinnedMesh) {
                        skeleton = (obj as THREE.SkinnedMesh).skeleton;
                    }
                });
            }

            if (!skeleton) {
                logger.warn('No skeleton found for external animations');
                return;
            }

            logger.debug('[loadExternalAnimations] Using skeleton with', skeleton.bones.length, 'bones');
            const clips = this.bmdLoader.loadAnimationsFrom(buffer, skeleton);
            if (clips.length) {
                this.loadedGroup.animations = clips;
                this.setupAnimations(this.loadedGroup);
                document.getElementById('status')!.textContent = `Animations loaded from ${this.animBmdFile.name}`;
            }
        } catch (e) {
            logger.error('Failed to load external animations', e);
        }
    }

    // --- Blending UI ---
    private buildBlendingUI() {
        const box   = document.getElementById('blending-controls')!;
        const list  = document.getElementById('blending-container')!;
        list.innerHTML = '';

        const modes: Record<string, number> = {
            'Opaque':     THREE.NoBlending,
            'Normal':     THREE.NormalBlending,
            'Additive':   THREE.AdditiveBlending,
            'Multiply':   THREE.MultiplyBlending,
            'Subtractive':THREE.SubtractiveBlending,
        };

        this.meshRefs.forEach((mesh, idx) => {
            const row   = document.createElement('div');
            row.className = 'blend-row';

            const label = document.createElement('span');
            label.textContent = mesh.name || `Mesh ${idx}`;
            label.className = 'blend-label';

            const select = document.createElement('select');
            select.className = 'animation-dropdown blend-select';
            Object.keys(modes).forEach(k => {
                const opt = document.createElement('option');
                opt.value = k;
                opt.text  = k;
                select.appendChild(opt);
            });

            const cur = Object.entries(modes).find(([,v]) => v === (mesh.material as THREE.Material).blending);
            select.value = cur ? cur[0] : 'Normal';

            select.addEventListener('change', () => {
                const mat = mesh.material as THREE.Material;
                mat.blending    = modes[select.value] as THREE.Blending;
                mat.transparent = mat.blending !== THREE.NoBlending;
                mat.depthWrite  = mat.blending === THREE.NoBlending;
                mat.needsUpdate = true;
            });

            row.append(label, select);
            list.appendChild(row);
        });

        (box as HTMLElement).style.display = this.meshRefs.length ? 'block' : 'none';
    }
    //----------------------------------------------------------
    // ### NEW METHOD ### Scene cleanup
    //----------------------------------------------------------
    private clearScene() {
        const old = this.scene.getObjectByName('bmd_model');
        if (old) {
            this.scene.remove(old);
            old.traverse((child: THREE.Object3D) => {
                if ((child as THREE.Mesh).isMesh) {
                    (child as THREE.Mesh).geometry.dispose();
                    const mat = (child as THREE.Mesh).material;
                    if (Array.isArray(mat)) {
                        mat.forEach(m => m.dispose());
                    } else if (mat) {
                        if ('map' in mat && mat.map && mat.map instanceof THREE.Texture) mat.map.dispose();
                        mat.dispose();
                    }
                }
            });
            // Properly dispose mixer before setting to null
            this.mixer = Disposer.disposeMixer(this.mixer);
            this.currentAction = null;
            document.getElementById('animations-container')!.innerHTML = '';
        }

        // Clear mesh references for blending UI
        this.meshRefs = [];

        // Clear main skeleton reference
        this.mainSkeleton = null;

        // Remove helpers for previous model
        if (this.boundingBoxHelper) {
            this.scene.remove(this.boundingBoxHelper);
            this.boundingBoxHelper.geometry.dispose();
            (this.boundingBoxHelper.material as THREE.Material).dispose();
            this.boundingBoxHelper = null;
        }
        if (this.axesHelper) {
            this.scene.remove(this.axesHelper);
            this.axesHelper.geometry.dispose();
            (this.axesHelper.material as THREE.Material).dispose();
            this.axesHelper = null;
        }
        if (this.normalHelpers.length) {
            this.normalHelpers.forEach(helper => {
                this.scene.remove(helper);
                helper.geometry.dispose();
                (helper.material as THREE.Material).dispose();
            });
            this.normalHelpers = [];
        }
        this.normalsVisible = false;

        // Clear and dispose all attachments
        Disposer.disposeObjectArray(this.attachments);

        if (this.exportBtn) this.exportBtn.disabled = true;
        this.updateStageForObject(null);
        this.updateDiagnosticInfo();
    }
    
    //----------------------------------------------------------
    // ### NEW METHOD ### Update texture UI
    //----------------------------------------------------------
    private updateTextureUI() {
        const textureControls = document.getElementById('texture-controls')!;
        const textureInfo = document.getElementById('texture-info-text')!;
        const textureDropZone = document.getElementById('texture-drop-zone') as HTMLElement;
        
        const list = Array.from(new Set(this.requiredTextures));
        if (list.length > 0 && list[0]) {
            textureInfo.textContent = list.join(', ');
            textureControls.style.display = 'block';
            textureDropZone.style.display = 'block';
        } else {
            textureInfo.textContent = "This model does not require textures.";
            textureControls.style.display = 'block';
            textureDropZone.style.display = 'none';
        }
    }

  // Corrected loadAndApplyTexture function in main.ts

    private async loadAndApplyTexture(file: File) {
        if (!this.loadedGroup) {
        logger.warn('Model not loaded - no textures.');
        return;
        }
    
        const status = document.getElementById('status')!;
        status.textContent = `Loading: ${file.name}…`;

        try {
        const ext = file.name.split('.').pop()!.toLowerCase();
        let tex: THREE.Texture;
    
        if (ext === 'tga') {
            tex = await this.textureLoader.loadAsync(
                    await convertTgaToDataUrl(await file.arrayBuffer()));
        } else if (ext === 'ozj' || ext === 'ozt') {
            tex = await this.textureLoader.loadAsync(
                    await convertOzjToDataUrl(await file.arrayBuffer()));
        } else {                              // jpg / png
            const url = URL.createObjectURL(file);
            tex = await this.textureLoader.loadAsync(url);
            URL.revokeObjectURL(url);
        }
    
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        tex.flipY = false;
        tex.name  = file.name;
        const blendResult = detectBlendModeFromTexture(tex, file.name);
        tex.userData.blendHeuristic = blendResult;
        const blendLabel = describeBlendMode(blendResult.mode);
        const confidenceLabel = Math.round(blendResult.confidence * 100);
        const blendByHint = new Map<string, BlendHeuristicResult>([
            [file.name.toLowerCase(), blendResult],
        ]);
        const getBlendForHint = (hint: string): BlendHeuristicResult => {
            const key = hint.toLowerCase();
            const cached = blendByHint.get(key);
            if (cached) return cached;
            const detected = detectBlendModeFromTexture(tex, hint);
            blendByHint.set(key, detected);
            return detected;
        };
        logger.debug(
            `[Texture blend] "${file.name}" -> ${blendLabel} (${confidenceLabel}%) ${blendResult.reason}`,
            { metrics: blendResult.metrics, scores: blendResult.scores },
        );
    
        // allow loading PNG/JPG in place of OZT/OZJ and vice versa
        const equivExt: Record<string,string[]> = {
            jpg:  ['ozj', 'jpeg'],
            jpeg: ['ozj', 'jpg'],
            ozj:  ['jpg', 'jpeg', 'png'],
            png:  ['ozj', 'ozt'],
            tga:  ['ozt', 'png'],
            ozt:  ['tga', 'png'],
        };

        const fileName  = file.name.toLowerCase();
        const fileBase  = fileName.replace(/\.[^.]+$/, '');
        const fileExt   = fileName.split('.').pop()!;

        function normalizeWanted(path: string): { base:string; ext:string } {
            const name = path.split(/[\\/]/).pop()!.toLowerCase();
            const ext  = name.split('.').pop()!;
            const base = name.replace(/\.[^.]+$/, '');
            return { base, ext };
        }

        const meshList: { mesh: THREE.Mesh; path: string; isMatch: boolean }[] = [];
        this.loadedGroup.traverse(obj => {
            if ((obj as THREE.Mesh).isMesh && obj.userData.texturePath) {
                const wantedPath = obj.userData.texturePath as string;
                const { base:wantedBase, ext:wantedExt } = normalizeWanted(wantedPath);
                const extMatch =
                    wantedExt === fileExt ||
                    (equivExt[wantedExt]?.includes(fileExt)) ||
                    (equivExt[fileExt]?.includes(wantedExt));
                const isMatch = extMatch && wantedBase === fileBase;
                meshList.push({ mesh: obj as THREE.Mesh, path: wantedPath, isMatch });
            }
        });

        if (fileExt === 'ozj' || fileExt === 'ozt') {
            let applied = false;
            let firstAppliedResult: BlendHeuristicResult | null = null;
            meshList.forEach(m => {
                if (m.isMatch) {
                    const blendForMesh = getBlendForHint(m.path);
                    const mat = m.mesh.material as THREE.MeshPhongMaterial;
                    if (mat.map) mat.map.dispose();
                    mat.map = tex;
                    mat.color.set(0xffffff);
                    applyBlendModeToMaterial(mat, blendForMesh);
                    applied = true;
                    if (!firstAppliedResult) {
                        firstAppliedResult = blendForMesh;
                    }
                    if (this.exportBtn) this.exportBtn.disabled = false;
                }
            });

            if (!applied) {
                logger.warn(`No matching mesh found for "${file.name}"`);
            }

            status.textContent = applied
                ? `Texture "${file.name}" loaded (blend: ${describeBlendMode((firstAppliedResult || blendResult).mode)}, ${Math.round((firstAppliedResult || blendResult).confidence * 100)}%).`
                : `No matching mesh found for "${file.name}". Check the console.`;
        } else {
            let promptMsg = `Apply texture "${file.name}" to which mesh?\n`;
            meshList.forEach((m, i) => {
                promptMsg += `${i}: ${m.mesh.name} (needs ${m.path})\n`;
            });

            const choiceStr = window.prompt(promptMsg, '');
            const idx = choiceStr !== null ? parseInt(choiceStr, 10) : NaN;

            if (!isNaN(idx) && meshList[idx]) {
                const target = meshList[idx].mesh;
                const targetPath = meshList[idx].path;
                const targetBlend = getBlendForHint(targetPath);
                const mat = target.material as THREE.MeshPhongMaterial;
                if (mat.map) mat.map.dispose();
                mat.map = tex;
                mat.color.set(0xffffff);
                applyBlendModeToMaterial(mat, targetBlend);
                if (this.exportBtn) this.exportBtn.disabled = false;
                status.textContent = `Texture "${file.name}" loaded (blend: ${describeBlendMode(targetBlend.mode)}, ${Math.round(targetBlend.confidence * 100)}%).`;
            } else {
                status.textContent = `Texture "${file.name}" was not applied.`;
            }
        }
    
        } catch (e) {
        logger.error('Texture load error:', e);
        status.textContent = `Error: ${(e as Error).message}`;
        }
    }

    private isDrawableTextureImage(
        source: unknown,
    ): source is CanvasImageSource & { width: number; height: number } {
        if (!source) return false;
        if (typeof source !== 'object' && typeof source !== 'function') return false;

        const candidate = source as { width?: unknown; height?: unknown };
        return typeof candidate.width === 'number' && typeof candidate.height === 'number';
    }

    /** Saves all unique material maps to PNG files */
    private exportTextures() {
        if (!this.loadedGroup) return;

        const exported = new Set<THREE.Texture>();

        this.loadedGroup.traverse(obj => {
            if ((obj as THREE.Mesh).isMesh) {
                const mat = (obj as THREE.Mesh).material as THREE.MeshPhongMaterial;
                if (!mat.map || exported.has(mat.map)) return;

                const textureImage = mat.map.image;
                if (!this.isDrawableTextureImage(textureImage)) return;

                const img = textureImage;
                const cvs = document.createElement('canvas');
                cvs.width = img.width;
                cvs.height = img.height;
                const ctx = cvs.getContext('2d');
                if (!ctx) return;

                ctx.drawImage(img, 0, 0);

                cvs.toBlob(blob => {
                    if (!blob) return;
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    const base = (mat.map?.name ? mat.map.name : 'texture').replace(/\.[^.]+$/, '');
                    a.download = `${base}.png`;
                    a.style.display = 'none';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }, 'image/png');

                exported.add(mat.map);
            }
        });

        const st = document.getElementById('status')!;
        st.textContent = exported.size
            ? `Exported ${exported.size} texture(s).`
            : 'No loaded textures to export.';
    }

    //----------------------------------------------------------
    // Helpers: bounding box, axes, normals
    //----------------------------------------------------------
    private getModelSizeHint(): number {
        if (!this.loadedGroup) return 100;
        const box = new THREE.Box3().setFromObject(this.loadedGroup);
        const size = box.getSize(new THREE.Vector3());
        const maxSide = Math.max(size.x, size.y, size.z);
        return maxSide || 100;
    }

    private updateBoundingBoxHelperState() {
        const enabled = this.showBoundingBoxCheckbox?.checked;

        if (!enabled || !this.loadedGroup) {
            if (this.boundingBoxHelper) {
                this.boundingBoxHelper.visible = false;
            }
            return;
        }

        if (!this.boundingBoxHelper) {
            this.boundingBoxHelper = new THREE.BoxHelper(this.loadedGroup, 0xffff00);
            this.boundingBoxHelper.name = 'bmd_bbox_helper';
            this.scene.add(this.boundingBoxHelper);
        }
        this.boundingBoxHelper.visible = true;
        this.updateSkinnedMeshesBoundingBoxes();
        this.boundingBoxHelper.update();
    }

    private updateSkinnedMeshesBoundingBoxes() {
        if (!this.loadedGroup) return;

        this.loadedGroup.traverse(obj => {
            const skinned = obj as THREE.SkinnedMesh;
            if (!skinned.isSkinnedMesh) return;

            const geometry = skinned.geometry as THREE.BufferGeometry;
            const positionAttr = geometry.getAttribute('position');
            if (!positionAttr) return;

            const hasSkinData =
                !!geometry.getAttribute('skinIndex') &&
                !!geometry.getAttribute('skinWeight');

            if (hasSkinData) {
                skinned.computeBoundingBox();
                return;
            }

            if (!skinned.boundingBox) {
                skinned.boundingBox = new THREE.Box3();
            }

            if (geometry.boundingBox === null) {
                geometry.computeBoundingBox();
            }

            if (geometry.boundingBox && skinned.boundingBox) {
                skinned.boundingBox.copy(geometry.boundingBox);
            }
        });
    }

    private updateAxesHelperState() {
        const enabled = this.showAxesCheckbox?.checked;

        if (!enabled || !this.loadedGroup) {
            if (this.axesHelper) {
                this.axesHelper.visible = false;
            }
            return;
        }

        const size = this.getModelSizeHint() * 0.6 || 100;

        if (!this.axesHelper) {
            this.axesHelper = new THREE.AxesHelper(size);
            this.axesHelper.name = 'bmd_axes_helper';
            this.axesHelper.matrixAutoUpdate = true;
            this.scene.add(this.axesHelper);
        }

        this.axesHelper.visible = true;
    }

    private updateNormalsHelpersState() {
        const enabled = this.showNormalsCheckbox?.checked;

        if (!enabled || !this.loadedGroup) {
            this.normalsVisible = false;
            if (this.normalHelpers.length) {
                this.normalHelpers.forEach(helper => {
                    helper.visible = false;
                });
            }
            return;
        }

        // Create helpers once per mesh
        if (!this.normalHelpers.length) {
            const size = this.getModelSizeHint() * 0.05 || 5;
            this.loadedGroup.traverse(obj => {
                const mesh = obj as THREE.Mesh;
                if ((mesh as any).isMesh && (mesh.geometry as THREE.BufferGeometry).attributes?.normal) {
                    let helper: THREE.LineSegments & { update: () => void };
                    if ((mesh as THREE.SkinnedMesh).isSkinnedMesh) {
                        helper = new SkinnedVertexNormalsHelper(mesh as THREE.SkinnedMesh, size, 0x00ffff);
                    } else {
                        helper = new VertexNormalsHelper(mesh, size, 0x00ffff) as unknown as THREE.LineSegments & { update: () => void };
                    }
                    helper.name = `bmd_normals_helper_${this.normalHelpers.length}`;
                    this.scene.add(helper);
                    this.normalHelpers.push(helper);
                }
            });
        }

        this.normalHelpers.forEach(helper => {
            helper.visible = true;
        });
        this.normalsVisible = true;
        this.normalsUpdateCounter = 0;

        // Initial update so that helpers are visible immediately
        this.normalHelpers.forEach(helper => helper.update());
    }

    //----------------------------------------------------------
    // Setting speed and animations (no major changes)
    //----------------------------------------------------------
    public setAnimationSpeed(speed: number) {
        if (this.currentAction) {
            this.currentAction.setEffectiveTimeScale(speed);
        }
    }
    
    private setupAnimations(model: THREE.Group) {
        this.mixer = new THREE.AnimationMixer(model);
        this.currentAction = null;

        const animBox = document.getElementById('animations-container')!;
        const speedSlider = document.getElementById('speed-slider') as HTMLInputElement;

        animBox.innerHTML = '';

        if (!model.animations.length) {
            animBox.textContent = 'No animations in this model.';
            return;
        }

        // Create dropdown select instead of multiple buttons
        const select = document.createElement('select');
        select.classList.add('animation-dropdown');
        select.id = 'animation-select';

        // Add placeholder option
        const placeholderOption = document.createElement('option');
        placeholderOption.textContent = 'Select Animation';
        placeholderOption.value = '';
        placeholderOption.disabled = true;
        select.appendChild(placeholderOption);

        // Add animation options
        model.animations.forEach((clip, i) => {
            const option = document.createElement('option');
            option.value = i.toString();
            option.textContent = `Animation ${i}`;
            select.appendChild(option);
        });

        // Handle animation selection
        select.onchange = () => {
            const selectedIndex = parseInt(select.value);
            if (isNaN(selectedIndex)) return;

            const clip = model.animations[selectedIndex];
            this.mixer!.stopAllAction();
            this.currentAction = this.mixer!.clipAction(clip);
            const currentSpeed = parseFloat(speedSlider.value);
            this.currentAction.setEffectiveTimeScale(currentSpeed);
            this.currentAction.reset().play();
        };

        animBox.appendChild(select);

        if (model.animations.length > 0) {
            select.value = '0';
            select.dispatchEvent(new Event('change'));
        }
        const lockBox   = document.getElementById('frame-lock-controls')!;
        lockBox.style.display =
            model.animations.length && (model.animations[0] as any).userData?.numAnimationKeys
                ? 'block' : 'none';

        this.lockFrameCheckbox.checked = false;
        this.isFrameLocked = false;
        this.updateDiagnosticInfo();
    }

    private animate = (time: DOMHighResTimeStamp) => {
        requestAnimationFrame(this.animate);
        const delta = this.clock.getDelta();
        if (!this.isActive) {
            return;
        }

        const lightOrbit = time * 0.00025;
        this.rimLight.position.x = -160 + Math.sin(lightOrbit) * 18;
        this.rimLight.position.z = -210 + Math.cos(lightOrbit) * 14;

        if (this.loadedGroup && this.isAutoRotating && !this.userIsInteracting && !this.isRecordingGif) {
            this.loadedGroup.rotation.z += delta * 0.2;
        }

        if (this.mixer) {
            if (this.isFrameLocked) {
                this.applyLockedFrame();
            } else if (!this.isRecordingGif) {
                this.mixer.update(delta);
            }
        }

        if (this.axesHelper && this.loadedGroup && this.axesHelper.visible) {
            this.axesHelper.position.copy(this.loadedGroup.position);
            this.axesHelper.quaternion.copy(this.loadedGroup.quaternion);
            this.axesHelper.scale.copy(this.loadedGroup.scale);
        }

        // Update helpers
        if (this.boundingBoxHelper && this.loadedGroup && this.boundingBoxHelper.visible) {
            this.updateSkinnedMeshesBoundingBoxes();
            this.boundingBoxHelper.update();
        }
        if (this.normalsVisible && this.normalHelpers.length) {
            this.normalsUpdateCounter = (this.normalsUpdateCounter + 1) % 3;
            if (this.normalsUpdateCounter === 0) {
                this.normalHelpers.forEach(helper => helper.update());
            }
        }

        this.controls.update();
        this.renderer.render(this.scene, this.camera);

        this.updateDiagnosticInfo(time);
    };

    /** Set the action to exactly this.lockedFrame and refresh the pose */
    private applyLockedFrame() {
        if (!this.currentAction) return;

        const clip = this.currentAction.getClip() as THREE.AnimationClip & {
            userData?: { numAnimationKeys?: number }
        };

        const numKeys = clip.userData?.numAnimationKeys ?? 0;
        if (!numKeys) return;

        const frame = Math.min(Math.max(this.lockedFrame, 0), numKeys - 1);

        this.currentAction.time = frame / numKeys * clip.duration;
        this.mixer!.update(0);
    }

    // ### NEW METHOD ### Update diagnostic information
    private updateDiagnosticInfo(time: DOMHighResTimeStamp = 0) {

        this.diagActionsCountEl.textContent =
            this.loadedGroup?.animations.length.toString() || '0';
      
        if (this.currentAction) {
            const clip = this.currentAction.getClip() as THREE.AnimationClip & {
                userData?: { numAnimationKeys?: number }
            };
      
            const numKeys = clip.userData?.numAnimationKeys ?? 0;
            this.diagAnimationKeysEl.textContent = numKeys.toString();
            
            if (numKeys > 0) {
                const localTime  = (this.currentAction.time % clip.duration + clip.duration) % clip.duration;
                const progress   = localTime / clip.duration;
                const currentFrame = this.isFrameLocked
                    ? this.lockedFrame
                    : Math.floor(localTime / clip.duration * numKeys);
                this.diagCurrentFrameEl.textContent = currentFrame.toString();
            } else {
                this.diagCurrentFrameEl.textContent = 'N/A';
            }
        } else {
            this.diagAnimationKeysEl.textContent = '0';
            this.diagCurrentFrameEl.textContent  = 'N/A';
        }

        let boneCount = 0;
        if (this.loadedGroup) {
            this.loadedGroup.traverse(obj => {
                if ((obj as any).isBone) {
                    boneCount++;
                }
            });
        }
        this.diagBonesCountEl.textContent = boneCount.toString();

        let meshCount = 0;
        if (this.loadedGroup) {
            this.loadedGroup.traverse(obj => {
                if ((obj as THREE.Mesh).isMesh) {
                    meshCount++;
                }
            });
        }
        this.diagMeshesCountEl.textContent = meshCount.toString();

        this.frameCount++;
        const elapsed = time - this.lastFrameTime;
        if (elapsed >= 1000) {
            this.fps = (this.frameCount * 1000) / elapsed;
            this.diagFpsEl.textContent = this.fps.toFixed(0);
            this.frameCount = 0;
            this.lastFrameTime = time;
        }
    }

    private setBrightness(value: number) {
      const safeValue = Math.max(0.1, value);
      this.renderer.toneMappingExposure = safeValue;
      if (this.ambientLight) this.ambientLight.intensity = 0.48 * safeValue;
      if (this.hemisphereLight) this.hemisphereLight.intensity = 0.62 * safeValue;
      if (this.directionalLight) this.directionalLight.intensity = 1.85 * safeValue;
      if (this.rimLight) this.rimLight.intensity = 0.82 * safeValue;
    }

    // ========== NEW ATTACHMENT SYSTEM ==========

    /** Setup attachment controls after file selection */
    private async setupAttachmentControls() {
        logger.debug('[setupAttachmentControls] Starting...');
        if (!this.loadedGroup || !this.currentAttachmentFile) {
            alert('First load the base character model.');
            return;
        }

        if (!this.mainSkeleton) {
            alert('The base model does not include a skeleton.');
            return;
        }

        const bones = this.mainSkeleton.bones;
        logger.debug(`[setupAttachmentControls] Main skeleton has ${bones.length} bones`);

        // Show controls
        const controls = document.getElementById('attach-controls')!;
        controls.style.display = 'block';

        // Fill dropdown with bones
        const select = document.getElementById('attach-bone-select') as HTMLSelectElement;
        const slider = document.getElementById('attach-bone-slider') as HTMLInputElement;
        const valueLabel = document.getElementById('attach-bone-value')!;

        select.innerHTML = '<option value="">-- Select Bone --</option>';

        bones.forEach((bone, index) => {
            const option = document.createElement('option');
            option.value = index.toString();
            option.textContent = `${index}: ${bone.name || 'Unnamed'}`;
            select.appendChild(option);
        });

        // Setup slider
        slider.min = '0';
        slider.max = (bones.length - 1).toString();
        slider.value = '0';
        valueLabel.textContent = '0';

        // Load attachment at bone 0
        await this.loadAttachmentAtBone(0);
        select.value = '0';
    }

    /** Load attachment model and attach to specified bone */
    private async loadAttachmentAtBone(boneIndex: number) {
        logger.debug(`[loadAttachmentAtBone] Loading attachment at bone ${boneIndex}`);
        if (!this.loadedGroup || !this.currentAttachmentFile || !this.mainSkeleton) {
            logger.warn('[loadAttachmentAtBone] Missing required objects');
            return;
        }

        const bones = this.mainSkeleton.bones;
        if (boneIndex < 0 || boneIndex >= bones.length) {
            logger.warn(`[loadAttachmentAtBone] Bone index out of range`);
            return;
        }

        const target = bones[boneIndex];
        logger.debug(`[loadAttachmentAtBone] Attaching to bone: ${target.name || 'Unnamed'}`);

        // Remove previous attachment if exists
        if (this.currentAttachment) {
            if (this.currentAttachment.parent) {
                this.currentAttachment.parent.remove(this.currentAttachment);
            }
            this.disposeAttachment(this.currentAttachment);
        }

        // Load new attachment
        const { group, requiredTextures } = await this.bmdLoader.load(
            await this.currentAttachmentFile.arrayBuffer()
        );

        group.name = `attachment_bone_${boneIndex}`;
        group.position.set(0, 0, 0);
        group.rotation.set(0, 0, 0);
        group.scale.set(1, 1, 1);
        this.applySceneMaterialTuning(group);

        target.add(group);
        this.currentAttachment = group;

        this.requiredTextures.push(...requiredTextures);
        this.updateTextureUI();

        // Auto-search and load textures in Electron
        if (isElectron() && this.lastAttachmentFilePath && requiredTextures.length > 0) {
            logger.debug('%c[Electron] Auto-searching textures for attachment...', 'color: #4CAF50');

            try {
                const foundTextures = await autoSearchTextures(this.lastAttachmentFilePath, requiredTextures);
                const foundCount = Object.keys(foundTextures).length;

                if (foundCount > 0) {
                    // Count total files (each texture name may have multiple files)
                    const totalFiles = Object.values(foundTextures).reduce((sum, paths) => sum + paths.length, 0);
                    logger.debug(`%c[Electron] Found ${foundCount} texture names (${totalFiles} files) for attachment, loading...`, 'color: #4CAF50');

                    // Load each found texture file
                    for (const [textureName, texturePaths] of Object.entries(foundTextures)) {
                        for (const texturePath of texturePaths) {
                            const fileData = await readFileFromPath(texturePath);
                            if (fileData) {
                                const file = createFileFromElectronData(fileData.name, fileData.data);
                                await this.loadAndApplyTexture(file);
                            }
                        }
                    }

                    logger.debug(`%c[Electron] Auto-loaded ${totalFiles} texture files for ${foundCount} base names`, 'color: #4CAF50');
                }
            } catch (error) {
                logger.error('[Electron] Error auto-searching textures for attachment:', error);
            }
        }

        // Update skeleton helper
        if (skeletonHelper) {
            this.scene.remove(skeletonHelper);
            (skeletonHelper.geometry as THREE.BufferGeometry).dispose();
        }
        skeletonHelper = new THREE.SkeletonHelper(this.loadedGroup);
        skeletonHelper.visible = showSkeletonEl.checked;
        this.scene.add(skeletonHelper);

        this.meshRefs = [];
        this.loadedGroup.traverse(obj => {
            if ((obj as any).isMesh) this.meshRefs.push(obj as THREE.Mesh);
        });
        this.buildBlendingUI();
        this.updateStageForObject(this.loadedGroup);
    }

    /** Change bone for current attachment (without reloading model) */
    private changeBoneForAttachment(boneIndex: number) {
        logger.debug(`[changeBoneForAttachment] Changing to bone ${boneIndex}`);
        if (!this.loadedGroup || !this.currentAttachment || !this.mainSkeleton) {
            logger.warn('[changeBoneForAttachment] Missing required objects');
            return;
        }

        const bones = this.mainSkeleton.bones;
        if (boneIndex < 0 || boneIndex >= bones.length) {
            logger.warn(`[changeBoneForAttachment] Bone index ${boneIndex} out of range (0-${bones.length - 1})`);
            return;
        }

        const target = bones[boneIndex];
        logger.debug(`[changeBoneForAttachment] Target bone: ${target.name || 'Unnamed'}`);

        // Move attachment to new bone
        if (this.currentAttachment.parent) {
            this.currentAttachment.parent.remove(this.currentAttachment);
        }

        this.currentAttachment.position.set(0, 0, 0);
        this.currentAttachment.rotation.set(0, 0, 0);
        this.currentAttachment.scale.set(1, 1, 1);

        target.add(this.currentAttachment);
        this.currentAttachment.name = `attachment_bone_${boneIndex}`;

        // Mark matrices as needing update - Three.js will update them in next render frame
        // (Avoids stack overflow from recursive updateMatrixWorld)
        this.currentAttachment.matrixWorldNeedsUpdate = true;
        if (this.currentAttachment.parent) {
            this.currentAttachment.parent.matrixWorldNeedsUpdate = true;
        }
        this.updateStageForObject(this.loadedGroup);
    }

    /** Remove current attachment and hide controls */
    private removeAttachment() {
        if (!this.currentAttachment) {
            alert('No attachment to remove.');
            return;
        }

        if (this.currentAttachment.parent) {
            this.currentAttachment.parent.remove(this.currentAttachment);
        }

        this.disposeAttachment(this.currentAttachment);
        this.currentAttachment = null;
        this.currentAttachmentFile = null;

        // Hide controls
        const controls = document.getElementById('attach-controls')!;
        controls.style.display = 'none';

        // Reset drop zone text
        document.querySelector('#attach-drop-zone p')!.textContent = 'Drop attachment .bmd';

        // Update skeleton helper
        if (skeletonHelper && this.loadedGroup) {
            this.scene.remove(skeletonHelper);
            (skeletonHelper.geometry as THREE.BufferGeometry).dispose();
            skeletonHelper = new THREE.SkeletonHelper(this.loadedGroup);
            skeletonHelper.visible = showSkeletonEl.checked;
            this.scene.add(skeletonHelper);
        }

        this.meshRefs = [];
        if (this.loadedGroup) {
            this.loadedGroup.traverse(obj => {
                if ((obj as any).isMesh) this.meshRefs.push(obj as THREE.Mesh);
            });
        }

        this.buildBlendingUI();
        this.updateTextureUI();
        this.updateStageForObject(this.loadedGroup);
    }

    /** Dispose attachment resources */
    private disposeAttachment(group: THREE.Group) {
        group.traverse(obj => {
            if ((obj as THREE.Mesh).isMesh) {
                (obj as THREE.Mesh).geometry.dispose();
                const mat = (obj as THREE.Mesh).material;
                if (Array.isArray(mat)) {
                    mat.forEach(m => m.dispose());
                } else {
                    if ((mat as any).map) (mat as any).map.dispose();
                    (mat as THREE.Material).dispose();
                }
            }
        });
    }

    // ========== OLD ATTACHMENT METHODS (kept for compatibility) ==========

    private async attachModelToBone(
        file: File,
        boneRef: number | string,
    ): Promise<void> {

        if (!this.loadedGroup) {
            alert('First load the base character model.');
            return;
        }

        const skinned = this.loadedGroup
            .getObjectByProperty('type', 'SkinnedMesh') as THREE.SkinnedMesh | undefined;

        if (!skinned) {
            alert('The base model does not include a skeleton.');
            return;
        }

        const bones = skinned.skeleton.bones;

        let target: THREE.Bone | null = null;

        if (typeof boneRef === 'number') {
            if (boneRef < 0 || boneRef >= bones.length) {
                alert(`The ${boneRef} index is out of range (0 - ${bones.length - 1}).`);
                return;
            }
            target = bones[boneRef];
        } else {
            target = this.loadedGroup.getObjectByName(boneRef) as THREE.Bone | null;
            if (!target) {
                alert(`The bone named “${boneRef}” was not found.`);
                return;
            }
        }

        const { group, requiredTextures } =
            await this.bmdLoader.load(await file.arrayBuffer());

        group.name = `attachment_${boneRef}_${this.attachments.length}`;

        group.position.set(0, 0, 0);
        group.rotation.set(0, 0, 0);
        group.scale.set(1, 1, 1);
        this.applySceneMaterialTuning(group);

        target.add(group);
        this.attachments.push(group);

        this.requiredTextures.push(...requiredTextures);
        this.updateTextureUI();

        if (skeletonHelper) {
            this.scene.remove(skeletonHelper);
            (skeletonHelper.geometry as THREE.BufferGeometry).dispose();
        }
        skeletonHelper = new THREE.SkeletonHelper(this.loadedGroup);
        skeletonHelper.visible = showSkeletonEl.checked;
        this.scene.add(skeletonHelper);

        this.meshRefs = [];
        this.loadedGroup.traverse(obj => {
            if ((obj as any).isMesh) this.meshRefs.push(obj as THREE.Mesh);
        });
        this.buildBlendingUI();
        this.updateStageForObject(this.loadedGroup);
    }

    /** Remove the most recently attached model from the scene */
    private undoLastAttachment() {
        const last = this.attachments.pop();
        if (!last) {
            alert('No attachments to remove.');
            return;
        }

        // Use Disposer utility for proper cleanup
        Disposer.disposeObject3D(last);

        if (skeletonHelper) {
            this.scene.remove(skeletonHelper);
            (skeletonHelper.geometry as THREE.BufferGeometry).dispose();
        }
        if (this.loadedGroup) {
            skeletonHelper = new THREE.SkeletonHelper(this.loadedGroup);
            skeletonHelper.visible = showSkeletonEl.checked;
            this.scene.add(skeletonHelper);

            this.meshRefs = [];
            this.loadedGroup.traverse(obj => {
                if ((obj as any).isMesh) this.meshRefs.push(obj as THREE.Mesh);
            });
        }

        this.buildBlendingUI();
        this.updateTextureUI();
        this.updateStageForObject(this.loadedGroup);
    }
}

const app = new App();
let characterScene: CharacterTestScene | null = null;
let terrainScene: TerrainScene | null = null;

if (isElectron()) {
    characterScene = new CharacterTestScene();
    characterScene.setActive(false);
} else {
    const characterTab = document.querySelector<HTMLButtonElement>('.tab-btn[data-view="character"]');
    if (characterTab) characterTab.style.display = 'none';

    const sidebarCharacter = document.getElementById('sidebar-character');
    if (sidebarCharacter) sidebarCharacter.classList.add('hidden');

    const viewCharacter = document.getElementById('view-character');
    if (viewCharacter) viewCharacter.classList.add('hidden');
}

terrainScene = new TerrainScene();
terrainScene.setActive(false);

const tabButtons = document.querySelectorAll<HTMLButtonElement>('.tab-btn');
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.view || 'bmd';
        app.setActive(target === 'bmd');
        if (characterScene) {
            characterScene.setActive(target === 'character');
        }
        if (terrainScene) {
            terrainScene.setActive(target === 'terrain');
        }
    });
});
