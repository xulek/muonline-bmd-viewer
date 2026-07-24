// src/main.ts
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper.js';
import { BMDLoader, convertTgaToDataUrl } from './bmd-loader';
import type { BMD } from './types';
import { convertOzjToDataUrl } from './ozj-loader';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import GIF from 'gif.js';
import gifWorkerUrl from 'gif.js/dist/gif.worker.js?url';
import { isElectron, autoSearchTextures, openFileDialog, readFileFromPath, createFileFromElectronData, getFilePathFromFile } from './electron-helper';
import type {
    BmdSessionState,
    RecentModelEntry,
} from './explorer-types';
import { CharacterTestScene } from './character-test-scene';
import { TerrainScene } from './terrain-scene';
import { initControlMenu } from './control-menu';
import { createExplorerStateStore, initExplorerShell } from './app/ExplorerShell';
import { SkinnedVertexNormalsHelper } from './helpers/SkinnedVertexNormalsHelper';
import {
    createPreferredRenderer,
    getActiveRendererBackend,
    isWebGLRenderer,
    type RendererBackendActive,
    type SupportedRenderer,
} from './rendering/RendererBackend';
import { Disposer } from './utils/Disposer';
import { FileValidator, FileValidationError } from './utils/FileValidator';
import { logger } from './utils/Logger';
import { bakeSkinnedModelForExport } from './utils/SkinnedMeshBaker';
import { DEFAULT_ANIMATION_PLAYBACK_SPEED } from './animation-settings';
import {
    applyBlendModeToMaterial,
    describeBlendMode,
    detectBlendModeFromTexture,
    type BlendHeuristicResult,
} from './utils/TextureBlendHeuristics';
import {
    applyThumbnailVisibilityEntries,
    getNextVisibleThumbnailIndex,
    removeThumbnailIndexFromQueue,
} from './utils/FolderThumbnailQueue';
import {
    areTextureExtensionsCompatible,
    normalizeTextureName,
    selectPreferredTextureCandidates,
    selectPreferredTexturePaths,
} from './utils/TextureMatching';
import './style.css';
import './styles/log.css';
import './styles/panels.css';
import { initPanels } from './panel-resize';

initPanels();

// == View ==
let skeletonHelper: THREE.SkeletonHelper | null = null;
const showSkeletonEl = document.getElementById('show-skeleton-checkbox') as HTMLInputElement;
const wireframeEl    = document.getElementById('wireframe-checkbox')    as HTMLInputElement;
type RendererBackendPreference = BmdSessionState['rendererBackend'];
const MODEL_VIEWER_PIXEL_RATIO_MAX = 2;

class App {
    public onStateChanged?: (state: BmdSessionState) => void;
    public onModelLoaded?: (entry: RecentModelEntry) => void;

    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: SupportedRenderer;
    private controls!: OrbitControls;
    private timer: THREE.Timer = new THREE.Timer();
    private ambientLight!: THREE.AmbientLight;
    private hemisphereLight!: THREE.HemisphereLight;
    private directionalLight!: THREE.DirectionalLight;
    private rimLight!: THREE.DirectionalLight;
    private mixer: THREE.AnimationMixer | null = null;
    private isRecordingGif = false;
    private gridHelper: THREE.GridHelper | null = null;
    
    private currentAction: THREE.AnimationAction | null = null;
    private animationsEnabled = true;

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
    private appliedTextureFiles = new Map<string, File>();

    // ### NEW ### For rotation
    private isAutoRotating = true;
    private userIsInteracting = false;
    private isActive = true;
    private animationFrameHandle: number | null = null;

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
    private lastDiagnosticDomUpdate = 0;
    private diagnosticBoneCount = 0;
    private diagnosticMeshCount = 0;

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
    private attachmentLoadToken = 0;
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
    private pendingRecentModelContext: { label: string; modelFileKey: string | null; sourceWorldNumber: number | null } | null = null;
    private presentationMode = false;
    private rendererBackendPreference: RendererBackendPreference;
    private rendererActiveBackend: RendererBackendActive = 'webgl';
    private rendererReady = false;
    private rendererSwapToken = 0;
    private modelLoadToken = 0;
    private containerEl!: HTMLElement;
    private resizeHandler: (() => void) | null = null;
    private rendererBackendSelect: HTMLSelectElement | null = null;
    private rendererBackendStatusEl: HTMLElement | null = null;
    private environmentTarget: THREE.WebGLRenderTarget | null = null;

    // Folder browser
    private folderFiles: File[] = [];
    private folderTextureFiles: File[] = [];
    private folderActiveIndex: number | null = null;
    private thumbnailRenderer: THREE.WebGLRenderer | null = null;
    private thumbnailMaterial: THREE.MeshPhongMaterial | null = null;
    private folderPanelEl: HTMLElement | null = null;
    private thumbnailGenId = 0;
    private readonly thumbnailCacheLimit = 200;
    private readonly thumbnailTextureCacheLimit = 200;
    private thumbnailCache = new Map<string, string>();
    private thumbnailTexDataUrlCache = new Map<string, string>();
    private thumbnailPending = new Set<number>();
    private thumbnailVisible = new Set<number>();
    private thumbnailProcessing = false;
    private folderObserver: IntersectionObserver | null = null;

    constructor(initialRendererBackend: RendererBackendPreference = 'auto') {
        logger.debug('%c[App] constructor', 'color:#0f0');
        this.rendererBackendPreference = initialRendererBackend;
        this.initThree();
        this.initUI();
        this.startAnimationLoop();
    }

    public setActive(active: boolean) {
        this.isActive = active;
        if (active) {
            this.timer.reset();
            this.startAnimationLoop();
        } else if (this.animationFrameHandle !== null) {
            cancelAnimationFrame(this.animationFrameHandle);
            this.animationFrameHandle = null;
        }
    }

    public setStatusMessage(message: string) {
        const status = document.getElementById('status');
        if (status) {
            status.textContent = message;
        }
    }

    public applyPresentationMode(enabled: boolean) {
        this.presentationMode = enabled;
        if (enabled) {
            if (skeletonHelper) skeletonHelper.visible = false;
            if (this.boundingBoxHelper) this.boundingBoxHelper.visible = false;
            if (this.axesHelper) this.axesHelper.visible = false;
            this.normalHelpers.forEach(helper => { helper.visible = false; });
            if (this.gridHelper) this.gridHelper.visible = false;
        } else {
            if (skeletonHelper) skeletonHelper.visible = showSkeletonEl.checked;
            this.updateBoundingBoxHelperState();
            this.updateAxesHelperState();
            this.updateNormalsHelpersState();
            if (this.gridHelper) this.gridHelper.visible = true;
        }
    }

    public getCurrentState(): BmdSessionState {
        const bgInput = document.getElementById('bg-color-input') as HTMLInputElement | null;
        const brightnessSlider = document.getElementById('brightness-slider') as HTMLInputElement | null;
        return {
            rendererBackend: this.rendererBackendPreference,
            animationsEnabled: this.animationsEnabled,
            autoRotate: this.isAutoRotating,
            showSkeleton: showSkeletonEl.checked,
            wireframe: wireframeEl.checked,
            showBoundingBox: this.showBoundingBoxCheckbox?.checked ?? false,
            showAxes: this.showAxesCheckbox?.checked ?? false,
            showNormals: this.showNormalsCheckbox?.checked ?? false,
            backgroundColor: bgInput?.value || '#0b1322',
            brightness: parseFloat(brightnessSlider?.value || '2') || 2,
            lastModelName: this.bmdFile?.name || null,
        };
    }

    public restoreSessionState(state: BmdSessionState) {
        const bgInput = document.getElementById('bg-color-input') as HTMLInputElement | null;
        const brightnessSlider = document.getElementById('brightness-slider') as HTMLInputElement | null;
        const brightnessLabel = document.getElementById('brightness-label');
        const autoRotateCheckbox = document.getElementById('auto-rotate-checkbox') as HTMLInputElement | null;
        const animationsEnabledCheckbox = document.getElementById('animations-enabled-checkbox') as HTMLInputElement | null;
        const backendSelect = this.rendererBackendSelect;

        if (backendSelect) {
            backendSelect.value = state.rendererBackend;
        }
        if (state.rendererBackend !== this.rendererBackendPreference) {
            void this.setRendererBackend(state.rendererBackend, { persistState: false });
        }

        if (autoRotateCheckbox) {
            autoRotateCheckbox.checked = state.autoRotate;
            this.isAutoRotating = state.autoRotate;
        }
        this.animationsEnabled = state.animationsEnabled;
        if (animationsEnabledCheckbox) {
            animationsEnabledCheckbox.checked = state.animationsEnabled;
        }
        if (this.currentAction) {
            this.currentAction.paused = !this.animationsEnabled;
        }
        showSkeletonEl.checked = state.showSkeleton;
        wireframeEl.checked = state.wireframe;
        if (this.showBoundingBoxCheckbox) this.showBoundingBoxCheckbox.checked = state.showBoundingBox;
        if (this.showAxesCheckbox) this.showAxesCheckbox.checked = state.showAxes;
        if (this.showNormalsCheckbox) this.showNormalsCheckbox.checked = state.showNormals;
        if (bgInput) {
            bgInput.value = state.backgroundColor;
            this.setSceneBackground(state.backgroundColor);
        }
        if (brightnessSlider && brightnessLabel) {
            brightnessSlider.value = `${state.brightness}`;
            brightnessLabel.textContent = `Brightness: ${state.brightness.toFixed(2)}×`;
            this.setBrightness(state.brightness);
        }
        if (skeletonHelper) skeletonHelper.visible = showSkeletonEl.checked;
        this.scene.traverse(obj => {
            if ((obj as THREE.Mesh).isMesh) {
                const material = (obj as THREE.Mesh).material as THREE.Material;
                if ('wireframe' in material) {
                    (material as { wireframe: boolean }).wireframe = wireframeEl.checked;
                    material.needsUpdate = true;
                }
            }
        });
        this.updateBoundingBoxHelperState();
        this.updateAxesHelperState();
        this.updateNormalsHelpersState();
        this.emitStateChanged();
    }

    public async openModelFile(
        file: File,
        options?: {
            filePath?: string | null;
            label?: string;
            modelFileKey?: string | null;
            sourceWorldNumber?: number | null;
            textureFiles?: File[];
        },
    ): Promise<void> {
        this.pendingRecentModelContext = {
            label: options?.label || file.name,
            modelFileKey: options?.modelFileKey ?? null,
            sourceWorldNumber: options?.sourceWorldNumber ?? null,
        };
        await this.handleBmdFile(file, options?.filePath ?? undefined, options?.textureFiles);
    }

    private rememberAppliedTextureFile(file: File) {
        this.appliedTextureFiles.set(file.name.toLowerCase(), file);
    }

    private getAppliedTextureFiles(): File[] {
        return Array.from(this.appliedTextureFiles.values());
    }

    //----------------------------------------------------------
    // THREE.JS (no changes)
    //----------------------------------------------------------
    private initThree() {
        logger.groupDebug('%c[App] initThree()', 'color:#0f0');
        const container = document.getElementById('canvas-container');
        if (!container) throw new Error('#canvas-container not found in HTML!');
        this.containerEl = container;

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0b1322);

        this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 10000);
        this.camera.position.set(0, 200, 400);
        this.timer.connect(document);
        this.bindResizeHandler();
        void this.setRendererBackend(this.rendererBackendPreference, { persistState: false, announceStatus: false });

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

    private bindResizeHandler() {
        if (this.resizeHandler) {
            return;
        }

        this.resizeHandler = () => {
            this.refreshRendererSize();
        };
        window.addEventListener('resize', this.resizeHandler);
    }

    private refreshRendererSize(renderer: SupportedRenderer | null = this.renderer ?? null) {
        if (!renderer || !this.containerEl) {
            return;
        }

        const width = this.containerEl.clientWidth;
        const height = this.containerEl.clientHeight;
        if (width <= 0 || height <= 0) {
            return;
        }

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, MODEL_VIEWER_PIXEL_RATIO_MAX));
        renderer.setSize(width, height);
    }

    private createClassicWebGLRenderer(): THREE.WebGLRenderer {
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true,
            powerPreference: 'high-performance',
        });
        renderer.debug.checkShaderErrors = false;
        return renderer;
    }

    private createPreferredRenderer(preference: RendererBackendPreference): Promise<SupportedRenderer> {
        return createPreferredRenderer(preference, () => this.createClassicWebGLRenderer(), {
            antialias: true,
            alpha: true,
        });
    }

    private configureRendererInstance(renderer: SupportedRenderer) {
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.95;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;
        this.refreshRendererSize(renderer);
    }

    private createControls(domElement: HTMLCanvasElement, target?: THREE.Vector3) {
        this.controls = new OrbitControls(this.camera, domElement);
        this.controls.enableDamping = true;
        this.controls.target.copy(target ?? new THREE.Vector3(0, 90, 0));
        this.controls.addEventListener('start', () => { this.userIsInteracting = true; });
        this.controls.addEventListener('end', () => { this.userIsInteracting = false; });
        this.controls.update();
    }

    private disposeEnvironmentTarget() {
        if (this.environmentTarget) {
            this.environmentTarget.dispose();
            this.environmentTarget = null;
        }
        this.scene.environment = null;
    }

    private updateEnvironmentForRenderer(renderer: SupportedRenderer) {
        this.disposeEnvironmentTarget();
        if (!isWebGLRenderer(renderer)) {
            return;
        }

        const pmremGenerator = new THREE.PMREMGenerator(renderer);
        const environmentScene = new RoomEnvironment();
        this.environmentTarget = pmremGenerator.fromScene(environmentScene);
        this.scene.environment = this.environmentTarget.texture;
        environmentScene.dispose();
        pmremGenerator.dispose();
    }

    private getActiveRendererBackend(renderer: SupportedRenderer): RendererBackendActive {
        return getActiveRendererBackend(renderer);
    }

    private updateRendererBackendStatus(message?: string) {
        if (!this.rendererBackendStatusEl) {
            return;
        }

        if (message) {
            this.rendererBackendStatusEl.textContent = message;
            return;
        }

        const preferred = this.rendererBackendPreference === 'auto'
            ? 'Auto'
            : this.rendererBackendPreference === 'webgpu'
                ? 'WebGPU'
                : 'WebGL';
        const active = this.rendererActiveBackend === 'webgpu' ? 'WebGPU' : 'WebGL';
        this.rendererBackendStatusEl.textContent = `Renderer: ${active} active (preferred: ${preferred})`;
    }

    private async reloadCurrentModelAfterRendererSwitchWithAssets(
        textureFiles: File[],
        attachmentFile: File | null,
        attachmentBoneIndex: number,
    ) {
        if (!this.bmdFile) {
            return;
        }

        const attachBoneSelect = document.getElementById('attach-bone-select') as HTMLSelectElement | null;
        const statusEl = document.getElementById('status');
        if (statusEl) {
            statusEl.textContent = 'Renderer changed. Rebuilding model resources…';
        }

        await this.loadAndDisplayModel({
            textureFiles,
            suppressRecent: true,
            skipClear: true,
        });

        if (attachmentFile) {
            this.currentAttachmentFile = attachmentFile;
            if (!Number.isNaN(attachmentBoneIndex) && attachmentBoneIndex >= 0) {
                await this.loadAttachmentAtBone(attachmentBoneIndex);
                if (attachBoneSelect) {
                    attachBoneSelect.value = `${attachmentBoneIndex}`;
                }
            } else {
                await this.setupAttachmentControls();
            }
        }
    }

    private async setRendererBackend(
        preference: RendererBackendPreference,
        options: { persistState?: boolean; announceStatus?: boolean } = {},
    ) {
        const persistState = options.persistState ?? true;
        const announceStatus = options.announceStatus ?? true;
        const currentRenderer = this.renderer;
        const currentBackend = currentRenderer ? this.getActiveRendererBackend(currentRenderer) : null;
        const shouldReloadModel = !!currentRenderer && !!this.bmdFile && !!this.loadedGroup;
        const reloadTextureFiles = shouldReloadModel ? this.getAppliedTextureFiles() : [];
        const attachmentFile = shouldReloadModel ? this.currentAttachmentFile : null;
        const attachBoneSelect = document.getElementById('attach-bone-select') as HTMLSelectElement | null;
        const attachmentBoneIndex = attachBoneSelect ? parseInt(attachBoneSelect.value, 10) : NaN;
        const isSameExplicitBackend =
            preference !== 'auto' &&
            currentRenderer &&
            currentBackend === preference &&
            this.rendererBackendPreference === preference &&
            this.rendererReady;

        if (isSameExplicitBackend) {
            return;
        }

        const token = ++this.rendererSwapToken;
        const previousTarget = this.controls?.target.clone() ?? new THREE.Vector3(0, 90, 0);
        const previousDomElement = currentRenderer?.domElement ?? null;

        this.rendererBackendPreference = preference;
        if (this.rendererBackendSelect && this.rendererBackendSelect.value !== preference) {
            this.rendererBackendSelect.value = preference;
        }

        this.rendererReady = false;
        this.userIsInteracting = false;
        this.updateRendererBackendStatus(`Renderer: switching to ${preference === 'auto' ? 'Auto' : preference}…`);

        if (shouldReloadModel) {
            ++this.modelLoadToken;
            this.clearScene();
            this.loadedGroup = null;
            this.requiredTextures = [];
            this.currentAttachment = null;
            this.currentAttachmentFile = attachmentFile;
        }

        let renderer = await this.createPreferredRenderer(preference);
        this.configureRendererInstance(renderer);

        let fallbackReason: string | null = null;

        if (!isWebGLRenderer(renderer)) {
            try {
                await renderer.init();
            } catch (error) {
                fallbackReason = error instanceof Error ? error.message : 'WebGPU initialization failed';
                renderer.dispose();
                renderer = this.createClassicWebGLRenderer();
                this.configureRendererInstance(renderer);
            }
        }

        if (token !== this.rendererSwapToken) {
            renderer.dispose();
            return;
        }

        if (this.controls) {
            this.controls.dispose();
        }
        if (previousDomElement?.parentElement === this.containerEl) {
            previousDomElement.parentElement.removeChild(previousDomElement);
        }

        this.containerEl.appendChild(renderer.domElement);
        this.createControls(renderer.domElement, previousTarget);
        currentRenderer?.dispose();
        this.renderer = renderer;
        this.rendererActiveBackend = this.getActiveRendererBackend(renderer);
        this.updateEnvironmentForRenderer(renderer);
        this.setBrightness(parseFloat((document.getElementById('brightness-slider') as HTMLInputElement | null)?.value || '2') || 2);
        if (shouldReloadModel) {
            await this.reloadCurrentModelAfterRendererSwitchWithAssets(reloadTextureFiles, attachmentFile, attachmentBoneIndex);
        }
        if (token !== this.rendererSwapToken) {
            return;
        }
        this.rendererReady = true;

        if (announceStatus) {
            if (fallbackReason) {
                this.setStatusMessage(`WebGPU init failed, using WebGL. ${fallbackReason}`);
            } else if (preference !== 'webgl') {
                this.setStatusMessage(`Renderer backend: ${this.rendererActiveBackend === 'webgpu' ? 'WebGPU' : 'WebGL fallback'} ready.`);
            }
        }

        this.updateRendererBackendStatus(
            fallbackReason
                ? `Renderer: WebGL fallback active (${fallbackReason})`
                : undefined,
        );

        if (persistState) {
            this.emitStateChanged();
        }
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

        const removeTexturesBtn = document.getElementById('remove-textures-btn') as HTMLButtonElement;
        removeTexturesBtn.addEventListener('click', () => this.removeTextures());

        this.initFolderBrowser();
        
        const speedSlider = document.getElementById('speed-slider') as HTMLInputElement;
        const speedLabel = document.getElementById('speed-label')!;
        const speedValue = document.getElementById('speed-value');
        const animationsEnabledCheckbox = document.getElementById('animations-enabled-checkbox') as HTMLInputElement | null;
        this.gifWidthInput  = document.getElementById('gif-width-input')  as HTMLInputElement;
        this.gifHeightInput = document.getElementById('gif-height-input') as HTMLInputElement;
        this.gifDelayInput  = document.getElementById('gif-delay-input')  as HTMLInputElement;
        this.gifFrameMultiplierInput = document.getElementById('gif-frame-multiplier-input') as HTMLInputElement;
        this.rendererBackendSelect = document.getElementById('renderer-backend-select') as HTMLSelectElement | null;
        this.rendererBackendStatusEl = document.getElementById('renderer-backend-status');

        const exportGifBtn = document.getElementById('export-gif-btn') as HTMLButtonElement;
        exportGifBtn.addEventListener('click', () => this.exportGif());

        const exportGlbBtn = document.getElementById('export-glb-btn') as HTMLButtonElement;
        exportGlbBtn.addEventListener('click', () => this.exportToGLB());

        const exportAiGlbBtn = document.getElementById('export-ai-glb-btn') as HTMLButtonElement;
        exportAiGlbBtn.addEventListener('click', () => this.exportToGLB({ bakeSkinning: true }));
        
        speedSlider.addEventListener('input', (e) => {
            const speed = parseFloat((e.target as HTMLInputElement).value);
            speedLabel.textContent = `Speed: ${speed.toFixed(2)}x`;
            if (speedValue) {
                speedValue.textContent = `${speed.toFixed(2)}x`;
            }
            this.setAnimationSpeed(speed);
            this.emitStateChanged();
        });
        const initialAnimationSpeed = parseFloat(speedSlider.value) || DEFAULT_ANIMATION_PLAYBACK_SPEED;
        speedSlider.value = `${initialAnimationSpeed}`;
        speedLabel.textContent = `Speed: ${initialAnimationSpeed.toFixed(2)}x`;
        if (speedValue) {
            speedValue.textContent = `${initialAnimationSpeed.toFixed(2)}x`;
        }

        if (animationsEnabledCheckbox) {
            animationsEnabledCheckbox.checked = this.animationsEnabled;
            animationsEnabledCheckbox.addEventListener('change', (e) => {
                this.animationsEnabled = (e.target as HTMLInputElement).checked;
                if (this.currentAction) {
                    this.currentAction.paused = !this.animationsEnabled;
                }
                this.emitStateChanged();
            });
        }

        if (this.rendererBackendSelect) {
            this.rendererBackendSelect.value = this.rendererBackendPreference;
            this.rendererBackendSelect.addEventListener('change', () => {
                const selectedValue = this.rendererBackendSelect?.value;
                const value: RendererBackendPreference = selectedValue === 'webgpu' || selectedValue === 'webgl'
                    ? selectedValue
                    : 'auto';
                void this.setRendererBackend(value, { persistState: true });
            });
        }
        this.updateRendererBackendStatus();

        const status = document.getElementById('status')!;
        status.textContent = 'Waiting for BMD file…';

        this.initScaleSlider();

        // ### NEW ### Rotation control
        const autoRotateCheckbox = document.getElementById('auto-rotate-checkbox') as HTMLInputElement;
        autoRotateCheckbox.addEventListener('change', (e) => {
            this.isAutoRotating = (e.target as HTMLInputElement).checked;
            this.emitStateChanged();
        });
        this.isAutoRotating = autoRotateCheckbox.checked;

        /* BACKGROUND COLOR */
        const bgInput = document.getElementById('bg-color-input') as HTMLInputElement;
        bgInput.addEventListener('input', e => {
            const c = (e.target as HTMLInputElement).value;
            this.setSceneBackground(c);
            this.emitStateChanged();
        });
        this.setSceneBackground(bgInput.value || '#0b1322');

        /* BRIGHTNESS */
        const brightSlider = document.getElementById('brightness-slider') as HTMLInputElement;
        const brightLabel  = document.getElementById('brightness-label')!;
        brightSlider.addEventListener('input', e => {
            const v = parseFloat((e.target as HTMLInputElement).value);
            brightLabel.textContent = `Brightness: ${v.toFixed(2)}×`;
            this.setBrightness(v);
            this.emitStateChanged();
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
            this.emitStateChanged();
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
            this.emitStateChanged();
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
            this.emitStateChanged();
        });

        // === Bounding box / axes / normals ================================
        this.showBoundingBoxCheckbox = document.getElementById('show-bbox-checkbox') as HTMLInputElement;
        this.showAxesCheckbox        = document.getElementById('show-axes-checkbox') as HTMLInputElement;
        this.showNormalsCheckbox     = document.getElementById('show-normals-checkbox') as HTMLInputElement;

        this.showBoundingBoxCheckbox.addEventListener('change', () => {
            this.updateBoundingBoxHelperState();
            this.emitStateChanged();
        });

        this.showAxesCheckbox.addEventListener('change', () => {
            this.updateAxesHelperState();
            this.emitStateChanged();
        });

        this.showNormalsCheckbox.addEventListener('change', () => {
            this.updateNormalsHelpersState();
            this.emitStateChanged();
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
        const scaleValue = document.getElementById('scale-value');
                                                                                
       scaleSlider.addEventListener('input', (e) => {                                     
       const scale = parseFloat((e.target as HTMLInputElement).value);               
        scaleLabel.textContent = `Scale: ${scale.toFixed(2)}x`;                       
        if (scaleValue) {
            scaleValue.textContent = `${scale.toFixed(2)}x`;
        }
       this.setModelScale(scale);                                                     
        });                                                                               
        scaleLabel.textContent = `Scale: ${parseFloat(scaleSlider.value).toFixed(2)}x`;   
        if (scaleValue) {
            scaleValue.textContent = `${parseFloat(scaleSlider.value).toFixed(2)}x`;
        }
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
                    this.rememberMaterialAlphaDefaults(material);
                    this.applyBlackKeyThresholdToMaterial(material);
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
    
    private handleBmdFile = async (file: File, filePath?: string, textureFiles?: File[]) => {
        logger.info(`handleBmdFile("${file.name}")`);

        try {
            // Validate file before processing
            await FileValidator.validateBMDFile(file);

            this.bmdFile = file;
            this.lastBmdFilePath = filePath || null;  // Store file path for Electron texture search
            this.appliedTextureFiles.clear();
            document.querySelector('#bmd-drop-zone p')!.textContent = `Selected: ${file.name}`;
            await this.loadAndDisplayModel({ textureFiles });
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

    private async exportToGLB(options: { bakeSkinning?: boolean } = {}) {
        if (!this.loadedGroup) {
            alert('Load a BMD model first.');
            return;
        }

        const bakeSkinning = options.bakeSkinning === true;

        // Deduplicate animation tracks (safety net for ANIMATION_DUPLICATE_TARGETS)
        const animations = bakeSkinning
            ? []
            : this.loadedGroup.animations.map(clip => {
                const seen = new Set<string>();
                const uniqueTracks = clip.tracks.filter(track => {
                    if (seen.has(track.name)) return false;
                    seen.add(track.name);
                    return true;
                });
                const deduped = new THREE.AnimationClip(clip.name, clip.duration, uniqueTracks);
                deduped.userData = clip.userData;
                return deduped;
            });

        // Temporarily swap MeshPhongMaterial → MeshStandardMaterial for glTF compliance
        // (glTF is a PBR format; the exporter only fully supports Standard/Basic materials)
        const materialSwaps: { mesh: THREE.Mesh; original: THREE.Material }[] = [];
        this.loadedGroup.traverse(obj => {
            if ((obj as THREE.Mesh).isMesh) {
                const mat = (obj as THREE.Mesh).material as THREE.MeshPhongMaterial;
                if (mat.type === 'MeshPhongMaterial') {
                    const std = new THREE.MeshStandardMaterial({
                        color: mat.color,
                        map: mat.map,
                        side: mat.side,
                        transparent: mat.transparent,
                        opacity: mat.opacity,
                        alphaTest: mat.alphaTest,
                        alphaMap: mat.alphaMap,
                        emissive: mat.emissive,
                        emissiveMap: mat.emissiveMap,
                        normalMap: mat.normalMap,
                        roughness: 0.8,
                        metalness: 0.0,
                    });
                    materialSwaps.push({ mesh: obj as THREE.Mesh, original: mat });
                    (obj as THREE.Mesh).material = std;
                }
            }
        });

        const exportRoot = bakeSkinning
            ? bakeSkinnedModelForExport(this.loadedGroup)
            : this.loadedGroup;

        const exporter = new GLTFExporter();
        const exporterOptions = {
            binary: true,
            animations,
            embedImages: true,
        };

        try {
            const result = await exporter.parseAsync(exportRoot, exporterOptions);
            const glbBuffer = result as ArrayBuffer;
            const blob = new Blob([glbBuffer], { type: 'model/gltf-binary' });

            const nameBase =
                (this.loadedGroup!.name || 'model').replace(/[^a-z0-9_-]/gi, '_');
            const stamp = new Date()
                .toISOString()
                .replace(/[:T]/g, '')
                .split('.')[0];
            const fileName = `${nameBase}${bakeSkinning ? '_ai_baked' : ''}_${stamp}.glb`;

            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
            URL.revokeObjectURL(link.href);

            logger.debug(`✔️  Saved ${fileName} (${(blob.size / 1024).toFixed(1)} KB)`);
        } catch (error) {
            logger.error('❌ GLTFExporter error:', error);
            alert('Error during export. Check the console.');
        } finally {
            // Restore original materials and dispose temporaries
            for (const { mesh, original } of materialSwaps) {
                const temp = mesh.material as THREE.MeshStandardMaterial;
                mesh.material = original;
                temp.dispose();
            }
        }
    }

    private exportGif() {
        if (this.isRecordingGif) return;
        if (!this.rendererReady) {
            this.setStatusMessage('Renderer is still initializing.');
            return;
        }
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
    private async loadAndDisplayModel(options?: { textureFiles?: File[]; suppressRecent?: boolean; skipClear?: boolean }) {
        const modelFile = this.bmdFile;
        if (!modelFile) return;

        const loadToken = ++this.modelLoadToken;
        const isCurrent = () => loadToken === this.modelLoadToken && this.bmdFile === modelFile;
        const textureFiles = options?.textureFiles;
        const suppressRecent = options?.suppressRecent ?? false;
        const skipClear = options?.skipClear ?? false;
        const recentContext = this.pendingRecentModelContext;
        const statusEl = document.getElementById('status')!;
        statusEl.textContent = 'Loading model…';
        logger.groupDebug('loadAndDisplayModel()');
        logger.time('loadAndDisplayModel');

        if (!skipClear) {
            this.clearScene();
            this.requiredTextures = [];
        }
        document.getElementById('texture-controls')!.style.display = 'none';

        let pendingGroup: THREE.Group | null = null;
        try {
            const bmdBuffer = await modelFile.arrayBuffer();
            if (!isCurrent()) return;

            const { group, requiredTextures } = await this.bmdLoader.load(bmdBuffer);
            pendingGroup = group;
            if (!isCurrent()) {
                Disposer.disposeObject3D(group, false);
                pendingGroup = null;
                return;
            }

            group.name = 'bmd_model';
            this.scene.add(group);
            this.loadedGroup = group;
            pendingGroup = null;
            this.requiredTextures = requiredTextures;
            this.applySceneMaterialTuning(group);
            this.updateStageForObject(group);

            const mainSkinnedMesh = group.getObjectByProperty('type', 'SkinnedMesh') as THREE.SkinnedMesh | undefined;
            this.mainSkeleton = mainSkinnedMesh?.skeleton || null;

            this.refreshDiagnosticModelCounts(group);
            this.setupAnimations(group);
            statusEl.textContent = `Loaded: ${group.name} (animations: ${group.animations.length})`;
            this.updateTextureUI();
            this.updateDiagnosticInfo();
            if (this.exportBtn) this.exportBtn.disabled = false;
            this.emitStateChanged();

            if (!suppressRecent && isCurrent()) {
                const recentEntry: RecentModelEntry = {
                    label: recentContext?.label || modelFile.name || 'Model',
                    timestamp: Date.now(),
                    modelFileKey: recentContext?.modelFileKey ?? null,
                    sourceWorldNumber: recentContext?.sourceWorldNumber ?? null,
                };
                this.onModelLoaded?.(recentEntry);
                if (this.pendingRecentModelContext === recentContext) {
                    this.pendingRecentModelContext = null;
                }
            }

            if (textureFiles?.length) {
                let autoAppliedCount = 0;
                const matchingTextureFiles = selectPreferredTextureCandidates(
                    textureFiles,
                    requiredTextures,
                    textureFile => textureFile.name,
                );

                for (const textureFile of matchingTextureFiles) {
                    if (!isCurrent()) return;
                    const applied = await this.loadAndApplyTexture(textureFile, {
                        promptOnUnmatched: false,
                        expectedGroup: group,
                        modelLoadToken: loadToken,
                    });
                    if (applied) autoAppliedCount++;
                }
                if (isCurrent() && autoAppliedCount > 0) {
                    statusEl.textContent = `Loaded: ${group.name} | Auto-loaded ${autoAppliedCount} matching world textures`;
                }
            }

            if (isElectron() && this.lastBmdFilePath && requiredTextures.length > 0 && isCurrent()) {
                logger.debug('%c[Electron] Auto-searching textures...', 'color: #4CAF50');
                statusEl.textContent = 'Searching for textures...';

                try {
                    const foundTextures = await autoSearchTextures(this.lastBmdFilePath, requiredTextures);
                    if (!isCurrent()) return;
                    const foundCount = Object.keys(foundTextures).length;

                    if (foundCount > 0) {
                        const texturePaths = selectPreferredTexturePaths(foundTextures, requiredTextures);
                        let loadedTextureCount = 0;
                        for (const texturePath of texturePaths) {
                            if (!isCurrent()) return;
                            const fileData = await readFileFromPath(texturePath);
                            if (!isCurrent()) return;
                            if (fileData) {
                                const file = createFileFromElectronData(fileData.name, fileData.data);
                                const applied = await this.loadAndApplyTexture(file, {
                                    promptOnUnmatched: false,
                                    expectedGroup: group,
                                    modelLoadToken: loadToken,
                                });
                                if (applied) loadedTextureCount++;
                            }
                        }

                        if (isCurrent()) {
                            statusEl.textContent = `Loaded: ${group.name} | Auto-loaded ${loadedTextureCount} texture files for ${foundCount} base names`;
                        }
                    } else if (isCurrent()) {
                        statusEl.textContent = `Loaded: ${group.name} | No textures found automatically`;
                    }
                } catch (error) {
                    if (!isCurrent()) return;
                    logger.error('[Electron] Error auto-searching textures:', error);
                    statusEl.textContent = `Loaded: ${group.name} | Texture search failed`;
                }
            }

            if (!isCurrent()) return;
            if (skeletonHelper) {
                this.scene.remove(skeletonHelper);
                skeletonHelper.geometry.dispose();
                (skeletonHelper.material as THREE.Material).dispose();
            }
            skeletonHelper = new THREE.SkeletonHelper(group);
            skeletonHelper.visible = showSkeletonEl.checked;
            this.scene.add(skeletonHelper);

            group.traverse(object => {
                if (!(object as THREE.Mesh).isMesh) return;
                const materials = Array.isArray((object as THREE.Mesh).material)
                    ? (object as THREE.Mesh).material
                    : [(object as THREE.Mesh).material];
                materials.forEach(material => {
                    if ('wireframe' in material) {
                        (material as THREE.MeshPhongMaterial).wireframe = wireframeEl.checked;
                        material.needsUpdate = true;
                    }
                });
            });

            this.meshRefs = [];
            group.traverse(object => {
                if ((object as THREE.Mesh).isMesh) this.meshRefs.push(object as THREE.Mesh);
            });
            this.buildBlendingUI();
            this.updateBoundingBoxHelperState();
            this.updateAxesHelperState();
            this.updateNormalsHelpersState();
        } catch (error) {
            if (pendingGroup) {
                Disposer.disposeObject3D(pendingGroup, false);
            }
            if (!isCurrent()) return;
            logger.error('loader.load() ERROR', error);
            statusEl.textContent = `Error: ${(error as Error).message}`;
            if (this.pendingRecentModelContext === recentContext) {
                this.pendingRecentModelContext = null;
            }
        } finally {
            logger.timeEnd('loadAndDisplayModel');
            logger.groupEnd();
        }
    }

    /** Load animations from an external BMD file and apply them to the current model */
    private async loadExternalAnimations() {
        const targetGroup = this.loadedGroup;
        const animationFile = this.animBmdFile;
        const loadToken = this.modelLoadToken;
        if (!targetGroup || !animationFile) return;

        const isCurrent = () =>
            this.loadedGroup === targetGroup &&
            this.animBmdFile === animationFile &&
            this.modelLoadToken === loadToken;

        try {
            const buffer = await animationFile.arrayBuffer();
            if (!isCurrent()) return;

            let skeleton: THREE.Skeleton | null = this.mainSkeleton;
            if (!skeleton) {
                targetGroup.traverse(object => {
                    if (!skeleton && (object as THREE.SkinnedMesh).isSkinnedMesh) {
                        skeleton = (object as THREE.SkinnedMesh).skeleton;
                    }
                });
            }

            if (!skeleton || !isCurrent()) {
                logger.warn('No skeleton found for external animations');
                return;
            }

            const bmdBones = targetGroup.userData.bmdBones as THREE.Bone[] | undefined;
            const clips = this.bmdLoader.loadAnimationsFrom(buffer, skeleton, bmdBones);
            if (!isCurrent()) return;

            if (clips.length) {
                targetGroup.animations = clips;
                this.setupAnimations(targetGroup);
                document.getElementById('status')!.textContent = `Animations loaded from ${animationFile.name}`;
            }
        } catch (error) {
            if (isCurrent()) logger.error('Failed to load external animations', error);
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
                this.rememberMaterialAlphaDefaults(mat);
                this.applyBlackKeyThresholdToMaterial(mat);
                mat.needsUpdate = true;
            });

            const thresholdWrap = document.createElement('div');
            thresholdWrap.className = 'blend-threshold';

            const thresholdLabel = document.createElement('span');
            thresholdLabel.className = 'blend-threshold-label';
            thresholdLabel.textContent = 'Black Key';

            const thresholdSlider = document.createElement('input');
            thresholdSlider.type = 'range';
            thresholdSlider.min = '0';
            thresholdSlider.max = '0.5';
            thresholdSlider.step = '0.01';
            thresholdSlider.className = 'modern-slider';
            thresholdSlider.value = this.getMeshBlackKeyThreshold(mesh).toFixed(2);

            const thresholdValue = document.createElement('span');
            thresholdValue.className = 'blend-threshold-value';
            thresholdValue.textContent = thresholdSlider.value;

            thresholdSlider.addEventListener('input', () => {
                const value = Math.max(0, Math.min(0.5, parseFloat(thresholdSlider.value) || 0));
                thresholdValue.textContent = value.toFixed(2);
                this.setMeshBlackKeyThreshold(mesh, value);
            });

            thresholdWrap.append(thresholdLabel, thresholdSlider, thresholdValue);
            row.append(label, select, thresholdWrap);
            list.appendChild(row);
        });

        (box as HTMLElement).style.display = this.meshRefs.length ? 'block' : 'none';
    }
    //----------------------------------------------------------
    // ### NEW METHOD ### Scene cleanup
    //----------------------------------------------------------
    private clearScene() {
        ++this.attachmentLoadToken;
        const old = this.loadedGroup ?? this.scene.getObjectByName('bmd_model');
        if (old) {
            this.mixer = Disposer.disposeMixer(this.mixer, old);
            this.currentAction = null;
            this.scene.remove(old);
            Disposer.disposeObject3D(old, false);
        } else {
            this.mixer = Disposer.disposeMixer(this.mixer);
            this.currentAction = null;
        }
        this.loadedGroup = null;

        if (skeletonHelper) {
            this.scene.remove(skeletonHelper);
            skeletonHelper.geometry.dispose();
            (skeletonHelper.material as THREE.Material).dispose();
            skeletonHelper = null;
        }

        const animationsContainer = document.getElementById('animations-container');
        if (animationsContainer) animationsContainer.replaceChildren();

        this.meshRefs = [];
        this.mainSkeleton = null;
        this.diagnosticBoneCount = 0;
        this.diagnosticMeshCount = 0;

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

        if (!old) {
            Disposer.disposeObjectArray(this.attachments);
        }
        this.attachments = [];
        this.currentAttachment = null;
        this.currentAttachmentFile = null;
        this.appliedTextureFiles.clear();

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

    private async loadAndApplyTexture(
        file: File,
        options?: {
            promptOnUnmatched?: boolean;
            expectedGroup?: THREE.Group;
            modelLoadToken?: number;
            isStillValid?: () => boolean;
        },
    ): Promise<boolean> {
        const targetGroup = options?.expectedGroup ?? this.loadedGroup;
        if (!targetGroup) {
            logger.warn('Model not loaded - no textures.');
            return false;
        }

        const isCurrentTarget = () =>
            this.loadedGroup === targetGroup &&
            (options?.modelLoadToken === undefined || options.modelLoadToken === this.modelLoadToken) &&
            (options?.isStillValid?.() ?? true);

        const status = document.getElementById('status')!;
        const promptOnUnmatched = options?.promptOnUnmatched ?? true;
        const { base: fileBase, ext: fileExt } = normalizeTextureName(file.name);

        const meshList: { mesh: THREE.Mesh; path: string; isMatch: boolean }[] = [];
        targetGroup.traverse(object => {
            const mesh = object as THREE.Mesh;
            if (!mesh.isMesh || !object.userData.texturePath) return;
            const wantedPath = object.userData.texturePath as string;
            const { base: wantedBase, ext: wantedExt } = normalizeTextureName(wantedPath);
            const isMatch = wantedBase === fileBase && areTextureExtensionsCompatible(wantedExt, fileExt);
            meshList.push({ mesh, path: wantedPath, isMatch });
        });

        let targets = meshList.filter(item => item.isMatch);
        if (targets.length === 0 && promptOnUnmatched && fileExt !== 'ozj' && fileExt !== 'ozt') {
            let promptMessage = `Apply texture "${file.name}" to which mesh?
`;
            meshList.forEach((item, index) => {
                promptMessage += `${index}: ${item.mesh.name} (needs ${item.path})
`;
            });

            const choice = window.prompt(promptMessage, '');
            const index = choice !== null ? parseInt(choice, 10) : Number.NaN;
            targets = !Number.isNaN(index) && meshList[index] ? [meshList[index]] : [];
        }

        if (targets.length === 0) {
            logger.warn(`No matching mesh found for "${file.name}"`);
            if (isCurrentTarget()) {
                status.textContent = promptOnUnmatched
                    ? `Texture "${file.name}" was not applied.`
                    : `No matching mesh found for "${file.name}".`;
            }
            return false;
        }

        if (isCurrentTarget()) status.textContent = `Loading: ${file.name}...`;

        try {
            const texture = await this.loadTextureForViewer(file, fileExt);
            if (!isCurrentTarget()) {
                texture.dispose();
                return false;
            }

            const blendResult = detectBlendModeFromTexture(texture, file.name);
            texture.userData.blendHeuristic = blendResult;
            const blendByHint = new Map<string, BlendHeuristicResult>([
                [file.name.toLowerCase(), blendResult],
            ]);
            const getBlendForHint = (hint: string): BlendHeuristicResult => {
                const key = hint.toLowerCase();
                const cached = blendByHint.get(key);
                if (cached) return cached;
                const detected = detectBlendModeFromTexture(texture, hint);
                blendByHint.set(key, detected);
                return detected;
            };

            // A texture object must have one clear owner. Assign a clone to each
            // distinct material so replacing one mesh texture cannot dispose a
            // texture still used by another mesh.
            const uniqueTargets: typeof targets = [];
            const seenMaterials = new Set<THREE.Material>();
            for (const target of targets) {
                const materials = Array.isArray(target.mesh.material)
                    ? target.mesh.material
                    : [target.mesh.material];
                const primaryMaterial = materials[0];
                if (!primaryMaterial || seenMaterials.has(primaryMaterial)) continue;
                seenMaterials.add(primaryMaterial);
                uniqueTargets.push(target);
            }

            uniqueTargets.forEach((target, index) => {
                const assignedTexture = index === 0 ? texture : texture.clone();
                assignedTexture.name = texture.name;
                assignedTexture.userData = { ...texture.userData };
                assignedTexture.needsUpdate = true;
                this.applyLoadedTextureToMesh(target.mesh, assignedTexture, getBlendForHint(target.path));
            });

            if (uniqueTargets.length === 0) {
                texture.dispose();
                return false;
            }

            if (this.exportBtn) this.exportBtn.disabled = false;
            const firstBlend = getBlendForHint(uniqueTargets[0].path);
            if (isCurrentTarget()) {
                status.textContent = `Texture "${file.name}" loaded (blend: ${describeBlendMode(firstBlend.mode)}, ${Math.round(firstBlend.confidence * 100)}%).`;
            }
            this.rememberAppliedTextureFile(file);
            return true;
        } catch (error) {
            logger.error('Texture load error:', error);
            if (isCurrentTarget()) status.textContent = `Error: ${(error as Error).message}`;
            return false;
        }
    }

    private async loadTextureForViewer(file: File, ext: string): Promise<THREE.Texture> {
        let tex: THREE.Texture;

        if (ext === 'tga') {
            tex = await this.textureLoader.loadAsync(await convertTgaToDataUrl(await file.arrayBuffer()));
        } else if (ext === 'ozj' || ext === 'ozt') {
            tex = await this.textureLoader.loadAsync(await convertOzjToDataUrl(await file.arrayBuffer()));
        } else {
            const url = URL.createObjectURL(file);
            try {
                tex = await this.textureLoader.loadAsync(url);
            } finally {
                URL.revokeObjectURL(url);
            }
        }

        tex.colorSpace = THREE.SRGBColorSpace;
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        tex.flipY = false;
        tex.name = file.name;
        return tex;
    }

    private applyLoadedTextureToMesh(
        mesh: THREE.Mesh,
        texture: THREE.Texture,
        blendResult: BlendHeuristicResult,
    ): void {
        const material = mesh.material as THREE.MeshPhongMaterial;
        const previousMap = material.map;
        const previousAlphaMap = material.alphaMap;
        const previousDerivedAlphaMap = previousMap?.userData?.blackKeyAlphaMap as THREE.Texture | undefined;

        material.map = texture;
        material.alphaMap = null;

        if (previousMap && !this.isTextureUsedByOtherMaterial(previousMap, material)) {
            this.disposeDerivedAlphaTexture(previousMap);
            previousMap.dispose();
        }
        if (
            previousAlphaMap &&
            previousAlphaMap !== previousMap &&
            previousAlphaMap !== previousDerivedAlphaMap &&
            !this.isTextureUsedByOtherMaterial(previousAlphaMap, material)
        ) {
            previousAlphaMap.dispose();
        }

        material.color.set(0xffffff);
        applyBlendModeToMaterial(material, blendResult);
        this.rememberMaterialAlphaDefaults(material);
        this.applyBlackKeyThresholdToMaterial(material);
    }

    private isTextureUsedByOtherMaterial(texture: THREE.Texture, ignoredMaterial: THREE.Material): boolean {
        if (!this.loadedGroup) return false;
        let used = false;
        this.loadedGroup.traverse(object => {
            if (used || !(object as THREE.Mesh).isMesh) return;
            const materials = Array.isArray((object as THREE.Mesh).material)
                ? (object as THREE.Mesh).material
                : [(object as THREE.Mesh).material];
            for (const material of materials) {
                if (!material || material === ignoredMaterial) continue;
                const record = material as THREE.Material & {
                    map?: THREE.Texture | null;
                    alphaMap?: THREE.Texture | null;
                    normalMap?: THREE.Texture | null;
                    emissiveMap?: THREE.Texture | null;
                };
                if (
                    record.map === texture ||
                    record.alphaMap === texture ||
                    record.normalMap === texture ||
                    record.emissiveMap === texture
                ) {
                    used = true;
                    break;
                }
            }
        });
        return used;
    }

    //----------------------------------------------------------
    // Folder browser  (lazy-loaded thumbnails via IntersectionObserver)
    //----------------------------------------------------------
    private initFolderBrowser() {
        this.folderPanelEl = document.getElementById('folder-browser-panel');

        const zone = document.getElementById('folder-bmd-drop-zone')!;
        const input = document.getElementById('folder-bmd-input') as HTMLInputElement;
        const closeBtn = document.getElementById('folder-browser-close')!;

        zone.addEventListener('click', () => input.click());
        zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('drag-over'); });
        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            if (e.dataTransfer?.files.length) this.loadFolderFiles(e.dataTransfer.files);
        });
        input.addEventListener('change', (e) => {
            const files = (e.target as HTMLInputElement).files;
            if (files?.length) this.loadFolderFiles(files);
            input.value = '';
        });
        closeBtn.addEventListener('click', () => this.closeFolderPanel());
    }

    // -- folder loading --------------------------------------------------

    private loadFolderFiles(files: FileList) {
        const TEXTURE_EXTS = new Set(['ozj', 'ozt', 'tga', 'png', 'jpg', 'jpeg', 'bmp']);
        const allFiles = Array.from(files);

        this.folderFiles = allFiles
            .filter(f => f.name.toLowerCase().endsWith('.bmd'))
            .sort((a, b) => a.name.localeCompare(b.name));

        this.folderTextureFiles = allFiles.filter(f => {
            const ext = f.name.toLowerCase().split('.').pop();
            return ext && TEXTURE_EXTS.has(ext);
        });

        // Invalidate any in-flight thumbnail work from a previous folder.
        ++this.thumbnailGenId;
        this.thumbnailPending.clear();
        this.thumbnailVisible.clear();
        this.thumbnailProcessing = false;
        this.folderObserver?.disconnect();
        this.thumbnailCache.clear();
        this.thumbnailTexDataUrlCache.clear();

        this.folderActiveIndex = null;
        this.renderFolderPanel();
        if (this.folderFiles.length === 0) {
            this.closeFolderPanel();
            this.setStatusMessage('The selected folder does not contain BMD models.');
            return;
        }
        this.openFolderPanel();
        this.setupFolderObserver();
    }

    // -- IntersectionObserver for lazy thumbnails -------------------------

    private setupFolderObserver() {
        const listEl = document.getElementById('folder-browser-list');
        if (!listEl) return;

        this.folderObserver = new IntersectionObserver((entries) => {
            const visibilityEntries = entries.map(entry => {
                const index = parseInt((entry.target as HTMLElement).dataset.index!, 10);

                return {
                    index,
                    isVisible: !isNaN(index) && entry.isIntersecting && entry.intersectionRatio > 0,
                    hasCachedThumbnail: !isNaN(index) && this.hasCachedThumbnail(index),
                };
            }).filter(entry => !isNaN(entry.index));

            const update = applyThumbnailVisibilityEntries({
                visibleIndexes: this.thumbnailVisible,
                pendingIndexes: this.thumbnailPending,
            }, visibilityEntries);

            this.thumbnailVisible = update.state.visibleIndexes;
            this.thumbnailPending = update.state.pendingIndexes;

            for (const entry of visibilityEntries) {
                if (entry.hasCachedThumbnail) continue;
                if (entry.isVisible) {
                    this.applyCardThumbnailLoading(entry.index);
                } else {
                    this.applyCardThumbnailPending(entry.index);
                }
            }

            for (const idx of update.cachedIndexesToApply) {
                const key = this.thumbCacheKey(idx);
                const cached = key ? this.getThumbnailCache(key) : undefined;
                if (cached !== undefined) {
                    this.applyCardThumbnail(idx, cached);
                }
            }

            this.kickThumbnailQueue();
        }, {
            root: listEl,
            rootMargin: '0px',
            threshold: 0,
        });

        listEl.querySelectorAll('.model-card').forEach(card => {
            this.folderObserver!.observe(card);
        });
    }

    // -- thumbnail render queue -------------------------------------------

    private kickThumbnailQueue() {
        if (this.thumbnailProcessing || this.thumbnailPending.size === 0) return;
        this.thumbnailProcessing = true;
        this.processThumbnailQueue();
    }

    private async processThumbnailQueue() {
        const genId = this.thumbnailGenId;

        while (genId === this.thumbnailGenId) {
            const idx = getNextVisibleThumbnailIndex({
                visibleIndexes: this.thumbnailVisible,
                pendingIndexes: this.thumbnailPending,
            });
            if (idx === null) break;

            const nextQueue = removeThumbnailIndexFromQueue({
                visibleIndexes: this.thumbnailVisible,
                pendingIndexes: this.thumbnailPending,
            }, idx);
            this.thumbnailVisible = nextQueue.visibleIndexes;
            this.thumbnailPending = nextQueue.pendingIndexes;

            const file = this.folderFiles[idx];
            if (!file) continue;

            const cacheKey = this.thumbCacheKey(idx);
            if (!cacheKey) continue;

            let thumb: string;

            const cachedThumbnail = this.getThumbnailCache(cacheKey);
            if (cachedThumbnail !== undefined) {
                thumb = cachedThumbnail;
            } else {
                if (!this.thumbnailVisible.has(idx)) continue;
                thumb = await this.generateThumbnail(file);
                if (genId !== this.thumbnailGenId) break;
                this.setThumbnailCache(cacheKey, thumb);
            }

            if (this.thumbnailVisible.has(idx)) {
                this.applyCardThumbnail(idx, thumb);
            } else {
                this.applyCardThumbnailPending(idx);
            }

            // Yield to main thread so the UI stays responsive
            await new Promise<void>(r => setTimeout(r, 0));
        }

        this.thumbnailProcessing = false;
        if (genId === this.thumbnailGenId && getNextVisibleThumbnailIndex({
            visibleIndexes: this.thumbnailVisible,
            pendingIndexes: this.thumbnailPending,
        }) !== null) {
            this.kickThumbnailQueue();
        }
    }

    private hasCachedThumbnail(index: number): boolean {
        const key = this.thumbCacheKey(index);
        return key !== null && this.thumbnailCache.has(key);
    }

    private fileCacheKey(file: File): string {
        const relativePath = (file as File & { webkitRelativePath?: string }).webkitRelativePath;
        return `${relativePath || file.name}|${file.size}|${file.lastModified}`.toLowerCase();
    }

    private thumbCacheKey(index: number): string | null {
        const file = this.folderFiles[index];
        return file ? this.fileCacheKey(file) : null;
    }

    private getThumbnailCache(key: string): string | undefined {
        const value = this.thumbnailCache.get(key);
        if (value === undefined) return undefined;
        this.thumbnailCache.delete(key);
        this.thumbnailCache.set(key, value);
        return value;
    }

    private setThumbnailCache(key: string, value: string): void {
        this.thumbnailCache.delete(key);
        this.thumbnailCache.set(key, value);
        while (this.thumbnailCache.size > this.thumbnailCacheLimit) {
            const oldestKey = this.thumbnailCache.keys().next().value as string | undefined;
            if (oldestKey === undefined) break;
            this.thumbnailCache.delete(oldestKey);
        }
    }

    private getThumbnailTextureCache(key: string): string | undefined {
        const value = this.thumbnailTexDataUrlCache.get(key);
        if (value === undefined) return undefined;
        this.thumbnailTexDataUrlCache.delete(key);
        this.thumbnailTexDataUrlCache.set(key, value);
        return value;
    }

    private setThumbnailTextureCache(key: string, value: string): void {
        this.thumbnailTexDataUrlCache.delete(key);
        this.thumbnailTexDataUrlCache.set(key, value);
        while (this.thumbnailTexDataUrlCache.size > this.thumbnailTextureCacheLimit) {
            const oldestKey = this.thumbnailTexDataUrlCache.keys().next().value as string | undefined;
            if (oldestKey === undefined) break;
            this.thumbnailTexDataUrlCache.delete(oldestKey);
        }
    }

    // -- lightweight thumbnail renderer -----------------------------------

    private getThumbnailRenderer(): THREE.WebGLRenderer {
        if (!this.thumbnailRenderer) {
            this.thumbnailRenderer = new THREE.WebGLRenderer({ antialias: false, preserveDrawingBuffer: true });
            this.thumbnailRenderer.setSize(180, 136);
            this.thumbnailRenderer.setPixelRatio(1);
        }
        return this.thumbnailRenderer;
    }

    /**
     * Build a minimal THREE.Group for thumbnail rendering.
     * Uses bind-pose bone matrices (frame 0, action 0) to bake vertex positions
     * into world space so the model renders in the correct pose.
     */
    private async buildThumbnailGroup(bmd: BMD, textureFiles: File[]): Promise<THREE.Group> {
        if (!this.thumbnailMaterial) {
            this.thumbnailMaterial = new THREE.MeshPhongMaterial({ color: 0xcccccc, side: THREE.DoubleSide });
        }

        // --- Compute world-space bone matrices from bind-pose (action 0, key 0) ---
        const boneWorldMats: THREE.Matrix4[] = [];
        for (let i = 0; i < bmd.bones.length; i++) {
            const bone = bmd.bones[i];
            const local = new THREE.Matrix4();
            if (!bone.isDummy && bone.matrixes.length > 0) {
                const m = bone.matrixes[0];
                const p = m.position[0];
                const q = m.quaternion[0];
                local.compose(
                    new THREE.Vector3(p.x, p.y, p.z),
                    new THREE.Quaternion(q.x, q.y, q.z, q.w),
                    new THREE.Vector3(1, 1, 1),
                );
            }
            const parentIdx = bone.parent;
            if (parentIdx >= 0 && parentIdx < boneWorldMats.length) {
                local.premultiply(boneWorldMats[parentIdx]);
            }
            boneWorldMats.push(local);
        }

        // --- Texture lookup: base-name (no ext) → File ---
        const texByBase = new Map<string, File>();
        for (const f of textureFiles) {
            const base = f.name.toLowerCase().replace(/\.[^.]+$/, '');
            if (!texByBase.has(base)) texByBase.set(base, f);
        }

        const loader = new THREE.TextureLoader();
        const group = new THREE.Group();
        const tmpVec = new THREE.Vector3();

        for (const bmdMesh of bmd.meshes) {
            const positions: number[] = [];
            const normals: number[] = [];
            const uvs: number[] = [];

            for (const tri of bmdMesh.triangles) {
                const vi = tri.vertexIndex;
                const ni = tri.normalIndex;
                const ti = tri.texCoordIndex;

                const push = (v: number, n: number, t: number) => {
                    if (v < 0 || v >= bmdMesh.vertices.length ||
                        n < 0 || n >= bmdMesh.normals.length) return;
                    const vert = bmdMesh.vertices[v];
                    const norm = bmdMesh.normals[n];

                    // Apply bind-pose bone transform to bake world-space position
                    const boneMat = boneWorldMats[vert.node];
                    if (boneMat) {
                        tmpVec.set(vert.position.x, vert.position.y, vert.position.z)
                               .applyMatrix4(boneMat);
                        positions.push(tmpVec.x, tmpVec.y, tmpVec.z);
                    } else {
                        positions.push(vert.position.x, vert.position.y, vert.position.z);
                    }

                    normals.push(norm.normal.x, norm.normal.y, norm.normal.z);
                    if (t >= 0 && t < bmdMesh.texCoords.length) {
                        uvs.push(bmdMesh.texCoords[t].u, bmdMesh.texCoords[t].v);
                    } else {
                        uvs.push(0, 0);
                    }
                };

                push(vi[0], ni[0], ti[0]);
                push(vi[2], ni[2], ti[2]);
                push(vi[1], ni[1], ti[1]);

                if (tri.polygon === 4) {
                    push(vi[0], ni[0], ti[0]);
                    push(vi[2], ni[2], ti[2]);
                    push(vi[3], ni[3], ti[3]);
                }
            }

            if (positions.length === 0) continue;

            const geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
            geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

            // Try to find and load a matching texture
            let material: THREE.MeshPhongMaterial = this.thumbnailMaterial;
            if (texByBase.size > 0 && bmdMesh.texturePath) {
                const wantedName = bmdMesh.texturePath.split(/[\\/]/).pop()!.toLowerCase();
                const wantedBase = wantedName.replace(/\.[^.]+$/, '');
                const texFile = texByBase.get(wantedBase);
                if (texFile) {
                    try {
                        const cacheKey = this.fileCacheKey(texFile);
                        const ext = texFile.name.toLowerCase().split('.').pop()!;
                        let dataUrl: string;
                        let objectUrl: string | null = null;

                        if (ext === 'ozj' || ext === 'ozt' || ext === 'tga') {
                            const cachedDataUrl = this.getThumbnailTextureCache(cacheKey);
                            if (cachedDataUrl) {
                                dataUrl = cachedDataUrl;
                            } else {
                                dataUrl = ext === 'tga'
                                    ? await convertTgaToDataUrl(await texFile.arrayBuffer())
                                    : await convertOzjToDataUrl(await texFile.arrayBuffer());
                                this.setThumbnailTextureCache(cacheKey, dataUrl);
                            }
                        } else {
                            objectUrl = URL.createObjectURL(texFile);
                            dataUrl = objectUrl;
                        }

                        try {
                            const tex = await loader.loadAsync(dataUrl);
                            tex.colorSpace = THREE.SRGBColorSpace;
                            tex.flipY = false;
                            tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
                            material = new THREE.MeshPhongMaterial({ map: tex, side: THREE.DoubleSide, transparent: true, alphaTest: 0.05 });
                        } finally {
                            if (objectUrl) URL.revokeObjectURL(objectUrl);
                        }
                    } catch {
                        // Fall back to the shared neutral material.
                    }
                }
            }

            group.add(new THREE.Mesh(geo, material));
        }

        group.rotation.x = -Math.PI / 2;
        return group;
    }

    private async generateThumbnail(file: File): Promise<string> {
        const renderer = this.getThumbnailRenderer();
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0c1520);
        scene.add(new THREE.AmbientLight(0x8899cc, 1.5));
        const directional = new THREE.DirectionalLight(0xffffff, 3.8);
        directional.position.set(1.2, 2.2, 1.8);
        scene.add(directional);
        const rim = new THREE.DirectionalLight(0x3377bb, 1.1);
        rim.position.set(-1.2, 0.5, -1);
        scene.add(rim);

        let group: THREE.Group | null = null;
        try {
            const buffer = await file.arrayBuffer();
            group = await this.buildThumbnailGroup(
                this.bmdLoader.parse(buffer, { bindPoseOnly: true }),
                this.folderTextureFiles,
            );
            scene.add(group);
            group.updateWorldMatrix(true, true);

            const box = new THREE.Box3().setFromObject(group);
            if (box.isEmpty()) throw new Error('Thumbnail model has no geometry.');

            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());
            const maxDimension = Math.max(size.x, size.y, size.z);
            const fov = 44;
            const distance = (maxDimension / 2) / Math.tan((fov / 2) * (Math.PI / 180)) * 1.15;

            const camera = new THREE.PerspectiveCamera(fov, 180 / 136, 0.01, Math.max(10, distance * 20));
            camera.position.set(
                center.x + distance * 0.38,
                center.y + distance * 0.32,
                center.z + distance,
            );
            camera.lookAt(center);

            renderer.render(scene, camera);
            return renderer.domElement.toDataURL('image/jpeg', 0.78);
        } catch (error) {
            logger.debug('[Thumbnail] Failed to generate preview', error);
            return '';
        } finally {
            if (group) {
                const disposedGeometries = new Set<THREE.BufferGeometry>();
                const disposedMaterials = new Set<THREE.Material>();
                const disposedTextures = new Set<THREE.Texture>();
                group.traverse(object => {
                    const mesh = object as THREE.Mesh;
                    if (!mesh.isMesh) return;
                    if (!disposedGeometries.has(mesh.geometry)) {
                        mesh.geometry.dispose();
                        disposedGeometries.add(mesh.geometry);
                    }
                    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
                    materials.forEach(material => {
                        if (!material || material === this.thumbnailMaterial || disposedMaterials.has(material)) return;
                        const map = (material as THREE.MeshPhongMaterial).map;
                        if (map && !disposedTextures.has(map)) {
                            map.dispose();
                            disposedTextures.add(map);
                        }
                        material.dispose();
                        disposedMaterials.add(material);
                    });
                });
                scene.remove(group);
            }
        }
    }

    // -- panel DOM --------------------------------------------------------

    private renderFolderPanel() {
        const listEl = document.getElementById('folder-browser-list');
        const countEl = document.getElementById('folder-browser-count');
        if (!listEl || !countEl) return;

        countEl.textContent = `${this.folderFiles.length} model${this.folderFiles.length !== 1 ? 's' : ''}`;
        listEl.replaceChildren();

        this.folderFiles.forEach((file, index) => {
            const card = document.createElement('div');
            card.className = `model-card${index === this.folderActiveIndex ? ' active' : ''}`;
            card.dataset.index = String(index);

            const thumb = document.createElement('div');
            thumb.className = 'model-card-thumb';
            const cacheKey = this.thumbCacheKey(index);
            const cached = cacheKey ? this.getThumbnailCache(cacheKey) : undefined;
            if (cached) {
                const image = document.createElement('img');
                image.src = cached;
                image.alt = file.name;
                thumb.appendChild(image);
            } else {
                const placeholder = document.createElement('span');
                placeholder.className = 'thumb-placeholder';
                placeholder.textContent = cached === '' ? 'No preview' : 'Preview on scroll';
                thumb.appendChild(placeholder);
            }

            const info = document.createElement('div');
            info.className = 'model-card-info';
            const name = document.createElement('div');
            name.className = 'model-card-name';
            name.title = file.name;
            name.textContent = file.name.replace(/\.bmd$/i, '');
            info.appendChild(name);

            card.append(thumb, info);
            card.addEventListener('click', () => this.loadFolderItem(index));
            listEl.appendChild(card);
        });
    }

    private applyCardThumbnail(index: number, dataUrl: string) {
        const listEl = document.getElementById('folder-browser-list');
        if (!listEl) return;
        const card = listEl.querySelector<HTMLElement>(`[data-index="${index}"]`);
        if (!card) return;
        const thumbEl = card.querySelector<HTMLElement>('.model-card-thumb')!;
        if (dataUrl) {
            const img = document.createElement('img');
            img.src = dataUrl;
            img.alt = this.folderFiles[index]?.name ?? '';
            thumbEl.innerHTML = '';
            thumbEl.appendChild(img);
        } else {
            thumbEl.innerHTML = '<span class="thumb-placeholder">No preview</span>';
        }
    }

    private applyCardThumbnailLoading(index: number) {
        const thumbEl = this.getCardThumbnailElement(index);
        if (!thumbEl || this.hasCachedThumbnail(index)) return;
        thumbEl.innerHTML = '<div class="thumb-spinner"></div>';
    }

    private applyCardThumbnailPending(index: number) {
        const thumbEl = this.getCardThumbnailElement(index);
        if (!thumbEl || this.hasCachedThumbnail(index)) return;
        thumbEl.innerHTML = '<span class="thumb-placeholder">Preview on scroll</span>';
    }

    private getCardThumbnailElement(index: number): HTMLElement | null {
        const listEl = document.getElementById('folder-browser-list');
        if (!listEl) return null;
        const card = listEl.querySelector<HTMLElement>(`[data-index="${index}"]`);
        return card?.querySelector<HTMLElement>('.model-card-thumb') ?? null;
    }

    private async loadFolderItem(index: number) {
        this.folderActiveIndex = index;
        const listEl = document.getElementById('folder-browser-list');
        if (listEl) {
            listEl.querySelectorAll('.model-card').forEach((card, i) => {
                card.classList.toggle('active', i === index);
            });
        }
        await this.handleBmdFile(this.folderFiles[index], undefined, this.folderTextureFiles);
    }

    private openFolderPanel() {
        this.folderPanelEl?.classList.add('open');
    }

    private closeFolderPanel() {
        this.folderPanelEl?.classList.remove('open');
        // Stop any in-flight thumbnail work when panel is closed
        ++this.thumbnailGenId;
        this.thumbnailPending.clear();
        this.thumbnailVisible.clear();
        this.thumbnailProcessing = false;
        this.folderObserver?.disconnect();
        this.thumbnailTexDataUrlCache.clear();
    }

    private removeTextures() {
        if (!this.loadedGroup) return;
        const disposedTextures = new Set<THREE.Texture>();
        const visitedMaterials = new Set<THREE.Material>();

        this.loadedGroup.traverse(object => {
            const mesh = object as THREE.Mesh;
            if (!mesh.isMesh) return;
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            materials.forEach(material => {
                if (!material || visitedMaterials.has(material)) return;
                visitedMaterials.add(material);

                const phong = material as THREE.MeshPhongMaterial;
                const map = phong.map;
                const alphaMap = phong.alphaMap;
                const derivedAlphaMap = map?.userData?.blackKeyAlphaMap as THREE.Texture | undefined;

                if (map) {
                    this.disposeDerivedAlphaTexture(map);
                    if (!disposedTextures.has(map)) {
                        map.dispose();
                        disposedTextures.add(map);
                    }
                }
                if (alphaMap && alphaMap !== map && alphaMap !== derivedAlphaMap && !disposedTextures.has(alphaMap)) {
                    alphaMap.dispose();
                    disposedTextures.add(alphaMap);
                }

                phong.map = null;
                phong.alphaMap = null;
                phong.color.set(0xcccccc);
                phong.transparent = false;
                phong.depthWrite = true;
                phong.blending = THREE.NormalBlending;
                phong.alphaTest = 0;
                phong.needsUpdate = true;
            });
        });
        this.appliedTextureFiles.clear();
        const status = document.getElementById('status');
        if (status) status.textContent = 'Textures removed.';
    }

    private isDrawableTextureImage(
        source: unknown,
    ): source is CanvasImageSource & { width: number; height: number } {
        if (!source) return false;
        if (typeof source !== 'object' && typeof source !== 'function') return false;

        const candidate = source as { width?: unknown; height?: unknown };
        return typeof candidate.width === 'number' && typeof candidate.height === 'number';
    }

    private rememberMaterialAlphaDefaults(material: THREE.Material) {
        const userData = material.userData as {
            alphaThresholdBaseAlphaTest?: number;
            alphaThresholdBaseTransparent?: boolean;
            alphaThresholdBaseDepthWrite?: boolean;
            alphaThresholdBaseBlending?: THREE.Blending;
        };

        userData.alphaThresholdBaseAlphaTest = 'alphaTest' in material
            ? (material as THREE.MeshPhongMaterial).alphaTest
            : 0;
        userData.alphaThresholdBaseTransparent = material.transparent;
        userData.alphaThresholdBaseDepthWrite = material.depthWrite;
        userData.alphaThresholdBaseBlending = material.blending;
    }

    private disposeDerivedAlphaTexture(texture: THREE.Texture) {
        const derived = texture.userData?.blackKeyAlphaMap as THREE.Texture | undefined;
        if (derived) {
            derived.dispose();
            delete texture.userData.blackKeyAlphaMap;
        }
    }

    private ensureBlackKeyAlphaMap(texture: THREE.Texture): THREE.Texture | null {
        const cached = texture.userData?.blackKeyAlphaMap as THREE.Texture | undefined;
        if (cached) {
            return cached;
        }

        const sourceImage = texture.image;
        if (!this.isDrawableTextureImage(sourceImage)) {
            return null;
        }

        const canvas = document.createElement('canvas');
        canvas.width = sourceImage.width;
        canvas.height = sourceImage.height;
        const context = canvas.getContext('2d', { willReadFrequently: true });
        if (!context) {
            return null;
        }

        context.drawImage(sourceImage, 0, 0);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        for (let index = 0; index < pixels.length; index += 4) {
            const mask = Math.max(pixels[index], pixels[index + 1], pixels[index + 2]);
            const originalAlpha = pixels[index + 3] / 255;
            const value = Math.round(mask * originalAlpha);
            pixels[index] = value;
            pixels[index + 1] = value;
            pixels[index + 2] = value;
            pixels[index + 3] = 255;
        }
        context.putImageData(imageData, 0, 0);

        const alphaMap = new THREE.CanvasTexture(canvas);
        alphaMap.colorSpace = THREE.NoColorSpace;
        alphaMap.wrapS = texture.wrapS;
        alphaMap.wrapT = texture.wrapT;
        alphaMap.flipY = texture.flipY;
        alphaMap.name = `${texture.name || 'texture'}__black_key_alpha`;
        alphaMap.needsUpdate = true;
        texture.userData.blackKeyAlphaMap = alphaMap;
        return alphaMap;
    }

    private getMeshBlackKeyThreshold(mesh: THREE.Mesh): number {
        const stored = mesh.userData.blackKeyThreshold;
        if (typeof stored === 'number') {
            return stored;
        }

        const material = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
        const materialStored = material?.userData?.blackKeyThreshold;
        return typeof materialStored === 'number' ? materialStored : 0;
    }

    private setMeshBlackKeyThreshold(mesh: THREE.Mesh, value: number) {
        mesh.userData.blackKeyThreshold = value;
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        materials.forEach(material => {
            if (!material) return;
            material.userData.blackKeyThreshold = value;
            this.applyBlackKeyThresholdToMaterial(material);
        });
        this.emitStateChanged();
    }

    private applyBlackKeyThresholdToMaterial(material: THREE.Material) {
        if (!(material instanceof THREE.MeshPhongMaterial)) {
            return;
        }

        const userData = material.userData as {
            alphaThresholdBaseAlphaTest?: number;
            alphaThresholdBaseTransparent?: boolean;
            alphaThresholdBaseDepthWrite?: boolean;
            alphaThresholdBaseBlending?: THREE.Blending;
            blackKeyThreshold?: number;
        };

        if (userData.alphaThresholdBaseAlphaTest === undefined) {
            this.rememberMaterialAlphaDefaults(material);
        }

        const baseAlphaTest = userData.alphaThresholdBaseAlphaTest ?? 0;
        const baseTransparent = userData.alphaThresholdBaseTransparent ?? material.transparent;
        const baseDepthWrite = userData.alphaThresholdBaseDepthWrite ?? material.depthWrite;
        const baseBlending = userData.alphaThresholdBaseBlending ?? material.blending;
        const blackKeyThreshold = typeof userData.blackKeyThreshold === 'number' ? userData.blackKeyThreshold : 0;

        if (!material.map || blackKeyThreshold <= 0) {
            material.alphaMap = null;
            material.alphaTest = baseAlphaTest;
            material.transparent = baseTransparent;
            material.depthWrite = baseDepthWrite;
            material.blending = baseBlending;
            material.needsUpdate = true;
            return;
        }

        const alphaMap = this.ensureBlackKeyAlphaMap(material.map);
        if (!alphaMap) {
            material.alphaMap = null;
            material.alphaTest = baseAlphaTest;
            material.transparent = baseTransparent;
            material.depthWrite = baseDepthWrite;
            material.blending = baseBlending;
            material.needsUpdate = true;
            return;
        }

        material.alphaMap = alphaMap;
        material.alphaTest = Math.max(baseAlphaTest, blackKeyThreshold);
        material.transparent = baseTransparent;
        material.depthWrite = baseDepthWrite;
        material.blending = baseBlending;
        material.needsUpdate = true;
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
                    const objectUrl = URL.createObjectURL(blob);
                    a.href = objectUrl;
                    const base = (mat.map?.name ? mat.map.name : 'texture').replace(/\.[^.]+$/, '');
                    a.download = `${base}.png`;
                    a.style.display = 'none';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
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
            this.currentAction.paused = !this.animationsEnabled;
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

    private startAnimationLoop(): void {
        if (!this.isActive || this.animationFrameHandle !== null) return;
        this.animationFrameHandle = requestAnimationFrame(this.animate);
    }

    private animate = (time: DOMHighResTimeStamp) => {
        this.animationFrameHandle = null;
        if (!this.isActive) return;
        this.startAnimationLoop();

        this.timer.update(time);
        const delta = this.timer.getDelta();
        if (!this.rendererReady) return;

        const lightOrbit = time * 0.00025;
        this.rimLight.position.x = -160 + Math.sin(lightOrbit) * 18;
        this.rimLight.position.z = -210 + Math.cos(lightOrbit) * 14;

        if (this.loadedGroup && this.isAutoRotating && !this.userIsInteracting && !this.isRecordingGif) {
            this.loadedGroup.rotation.z += delta * 0.2;
        }

        if (this.mixer) {
            if (this.isFrameLocked) {
                this.applyLockedFrame();
            } else if (this.animationsEnabled && !this.isRecordingGif) {
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

    private refreshDiagnosticModelCounts(root: THREE.Object3D | null): void {
        let boneCount = 0;
        let meshCount = 0;
        root?.traverse(object => {
            if ((object as THREE.Bone).isBone) boneCount++;
            if ((object as THREE.Mesh).isMesh) meshCount++;
        });
        this.diagnosticBoneCount = boneCount;
        this.diagnosticMeshCount = meshCount;
    }

    private updateDiagnosticInfo(time: DOMHighResTimeStamp = 0) {
        this.frameCount++;
        const elapsed = time - this.lastFrameTime;
        if (time > 0 && elapsed >= 1000) {
            this.fps = (this.frameCount * 1000) / elapsed;
            this.frameCount = 0;
            this.lastFrameTime = time;
        }

        const forceUpdate = time === 0;
        if (!forceUpdate && time - this.lastDiagnosticDomUpdate < 100) {
            return;
        }
        this.lastDiagnosticDomUpdate = time;

        this.diagActionsCountEl.textContent = this.loadedGroup?.animations.length.toString() || '0';
        this.diagBonesCountEl.textContent = this.diagnosticBoneCount.toString();
        this.diagMeshesCountEl.textContent = this.diagnosticMeshCount.toString();
        this.diagFpsEl.textContent = this.fps.toFixed(0);

        if (this.currentAction) {
            const clip = this.currentAction.getClip() as THREE.AnimationClip & {
                userData?: { numAnimationKeys?: number };
            };
            const numKeys = clip.userData?.numAnimationKeys ?? 0;
            this.diagAnimationKeysEl.textContent = numKeys.toString();

            if (numKeys > 0 && clip.duration > 0) {
                const localTime = (this.currentAction.time % clip.duration + clip.duration) % clip.duration;
                const currentFrame = this.isFrameLocked
                    ? this.lockedFrame
                    : Math.floor(localTime / clip.duration * numKeys);
                this.diagCurrentFrameEl.textContent = currentFrame.toString();
            } else {
                this.diagCurrentFrameEl.textContent = 'N/A';
            }
        } else {
            this.diagAnimationKeysEl.textContent = '0';
            this.diagCurrentFrameEl.textContent = 'N/A';
        }
    }

    private setBrightness(value: number) {
      const safeValue = Math.max(0.1, value);
      if (this.renderer) {
        this.renderer.toneMappingExposure = safeValue;
      }
      if (this.ambientLight) this.ambientLight.intensity = 0.48 * safeValue;
      if (this.hemisphereLight) this.hemisphereLight.intensity = 0.62 * safeValue;
      if (this.directionalLight) this.directionalLight.intensity = 1.85 * safeValue;
      if (this.rimLight) this.rimLight.intensity = 0.82 * safeValue;
    }

    private emitStateChanged() {
        this.onStateChanged?.(this.getCurrentState());
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
        const baseGroup = this.loadedGroup;
        const attachmentFile = this.currentAttachmentFile;
        const skeleton = this.mainSkeleton;
        if (!baseGroup || !attachmentFile || !skeleton) {
            logger.warn('[loadAttachmentAtBone] Missing required objects');
            return;
        }

        const bones = skeleton.bones;
        if (boneIndex < 0 || boneIndex >= bones.length) {
            logger.warn('[loadAttachmentAtBone] Bone index out of range');
            return;
        }

        const loadToken = ++this.attachmentLoadToken;
        const modelToken = this.modelLoadToken;
        const isCurrent = () =>
            loadToken === this.attachmentLoadToken &&
            modelToken === this.modelLoadToken &&
            this.loadedGroup === baseGroup &&
            this.currentAttachmentFile === attachmentFile;

        let pendingGroup: THREE.Group | null = null;
        try {
            const buffer = await attachmentFile.arrayBuffer();
            if (!isCurrent()) return;

            const { group, requiredTextures } = await this.bmdLoader.load(buffer);
            pendingGroup = group;
            if (!isCurrent()) {
                Disposer.disposeObject3D(group, false);
                pendingGroup = null;
                return;
            }

            group.name = `attachment_bone_${boneIndex}`;
            group.position.set(0, 0, 0);
            group.rotation.set(0, 0, 0);
            group.scale.set(1, 1, 1);
            this.applySceneMaterialTuning(group);

            const previousAttachment = this.currentAttachment;
            if (previousAttachment) {
                previousAttachment.parent?.remove(previousAttachment);
                this.disposeAttachment(previousAttachment);
            }

            bones[boneIndex].add(group);
            this.currentAttachment = group;
            pendingGroup = null;
            this.requiredTextures.push(...requiredTextures);
            this.updateTextureUI();

            if (isElectron() && this.lastAttachmentFilePath && requiredTextures.length > 0) {
                try {
                    const foundTextures = await autoSearchTextures(this.lastAttachmentFilePath, requiredTextures);
                    if (!isCurrent()) return;
                    const texturePaths = selectPreferredTexturePaths(foundTextures, requiredTextures);
                    for (const texturePath of texturePaths) {
                        if (!isCurrent()) return;
                        const fileData = await readFileFromPath(texturePath);
                        if (!isCurrent()) return;
                        if (fileData) {
                            const file = createFileFromElectronData(fileData.name, fileData.data);
                            await this.loadAndApplyTexture(file, {
                                promptOnUnmatched: false,
                                expectedGroup: baseGroup,
                                modelLoadToken: modelToken,
                                isStillValid: isCurrent,
                            });
                        }
                    }
                } catch (error) {
                    if (isCurrent()) {
                        logger.error('[Electron] Error auto-searching textures for attachment:', error);
                    }
                }
            }

            if (!isCurrent()) return;
            if (skeletonHelper) {
                this.scene.remove(skeletonHelper);
                skeletonHelper.geometry.dispose();
                (skeletonHelper.material as THREE.Material).dispose();
            }
            skeletonHelper = new THREE.SkeletonHelper(baseGroup);
            skeletonHelper.visible = showSkeletonEl.checked;
            this.scene.add(skeletonHelper);

            this.meshRefs = [];
            baseGroup.traverse(object => {
                if ((object as THREE.Mesh).isMesh) this.meshRefs.push(object as THREE.Mesh);
            });
            this.refreshDiagnosticModelCounts(baseGroup);
            this.buildBlendingUI();
            this.updateStageForObject(baseGroup);
        } catch (error) {
            if (pendingGroup) Disposer.disposeObject3D(pendingGroup, false);
            if (isCurrent()) {
                logger.error('[loadAttachmentAtBone] Failed to load attachment:', error);
                this.setStatusMessage(`Attachment error: ${(error as Error).message}`);
            }
        }
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
        ++this.attachmentLoadToken;
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
        Disposer.disposeObject3D(group);
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

const { explorerStore, initialState } = createExplorerStateStore();
const app = new App(initialState.bmd.rendererBackend);
const characterScene = new CharacterTestScene();
const terrainScene = new TerrainScene();
initControlMenu();

initExplorerShell({
    app,
    characterScene,
    terrainScene,
    explorerStore,
    initialState,
});
