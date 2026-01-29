// src/character-test-scene.ts
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { BMDLoader, convertTgaToDataUrl } from './bmd-loader';
import { convertOzjToDataUrl } from './ozj-loader';
import { isElectron, openDirectoryDialog, readFileFromPath, searchTextures } from './electron-helper';
import { parseItemBmd, ItemDefinition } from './item-bmd';
import GIF from 'gif.js';
import gifWorkerUrl from 'gif.js/dist/gif.worker.js?url';

class SkinnedVertexNormalsHelper extends THREE.LineSegments {
  public skinned: THREE.SkinnedMesh;
  public size: number;

  private _vertex = new THREE.Vector3();
  private _skinnedVertex = new THREE.Vector3();
  private _normal = new THREE.Vector3();
  private _indices: Uint32Array;

  constructor(skinned: THREE.SkinnedMesh, size: number, color: number) {
    const srcGeo = skinned.geometry as THREE.BufferGeometry;
    const posAttr = srcGeo.getAttribute('position') as THREE.BufferAttribute | null;

    const count = posAttr ? posAttr.count : 0;

    const maxLines = 2000;
    const sampleCount = count > 0 ? Math.min(count, maxLines) : 0;

    const indices = new Uint32Array(sampleCount || 0);
    for (let j = 0; j < sampleCount; j++) {
      indices[j] = Math.floor((j / sampleCount) * count);
    }
    const positions = new Float32Array(indices.length * 2 * 3);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.LineBasicMaterial({ color, toneMapped: false });

    super(geometry, material);

    this.skinned = skinned;
    this.size = size;
    this._indices = indices;
    this.matrixAutoUpdate = false;
  }

  public update(): void {
    const skinned = this.skinned;
    const srcGeo = skinned.geometry as THREE.BufferGeometry;
    const posAttr = srcGeo.getAttribute('position') as THREE.BufferAttribute | null;
    const normAttr = srcGeo.getAttribute('normal') as THREE.BufferAttribute | null;

    const dstAttr = this.geometry.getAttribute('position') as THREE.BufferAttribute | null;

    if (!posAttr || !normAttr || !dstAttr || !this._indices.length) return;

    skinned.updateMatrixWorld(true);

    const matrixWorld = skinned.matrixWorld;
    const normalMatrix = new THREE.Matrix3().getNormalMatrix(matrixWorld);
    const size = this.size;

    const vertex = this._vertex;
    const skinnedVertex = this._skinnedVertex;
    const normal = this._normal;

    for (let s = 0; s < this._indices.length; s++) {
      const i = this._indices[s];

      vertex.fromBufferAttribute(posAttr, i);

      skinnedVertex.copy(vertex);
      skinned.applyBoneTransform(i, skinnedVertex);
      skinnedVertex.applyMatrix4(matrixWorld);

      normal.fromBufferAttribute(normAttr, i);
      normal.applyMatrix3(normalMatrix).normalize().multiplyScalar(size);

      const idx = s * 2;
      dstAttr.setXYZ(idx, skinnedVertex.x, skinnedVertex.y, skinnedVertex.z);
      dstAttr.setXYZ(idx + 1,
        skinnedVertex.x + normal.x,
        skinnedVertex.y + normal.y,
        skinnedVertex.z + normal.z);
    }

    dstAttr.needsUpdate = true;

    this.matrixWorld.identity();
  }
}

const TEXTURE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.tga', '.ozj', '.ozt'];

const CLASS_OPTIONS: Array<{ value: number; label: string }> = [
  { value: 1, label: 'Dark Wizard' },
  { value: 201, label: 'Soul Master' },
  { value: 301, label: 'Grand Master' },
  { value: 401, label: 'Soul Wizard' },
  { value: 2, label: 'Dark Knight' },
  { value: 202, label: 'Blade Knight' },
  { value: 302, label: 'Blade Master' },
  { value: 402, label: 'Dragon Knight' },
  { value: 3, label: 'Fairy Elf' },
  { value: 203, label: 'Muse Elf' },
  { value: 303, label: 'High Elf' },
  { value: 403, label: 'Noble Elf' },
  { value: 4, label: 'Magic Gladiator' },
  { value: 304, label: 'Duel Master' },
  { value: 404, label: 'Magic Knight' },
  { value: 5, label: 'Dark Lord' },
  { value: 305, label: 'Lord Emperor' },
  { value: 405, label: 'Empire Lord' },
  { value: 6, label: 'Summoner' },
  { value: 206, label: 'Bloody Summoner' },
  { value: 306, label: 'Dimension Master' },
  { value: 406, label: 'Dimension Summoner' },
  { value: 7, label: 'Rage Fighter' },
  { value: 307, label: 'Fist Master' },
  { value: 407, label: 'Fist Blazer' },
  { value: 8, label: 'Glow Lancer' },
  { value: 308, label: 'Mirage Lancer' },
  { value: 408, label: 'Shining Lancer' },
  { value: 9, label: 'Rune Mage' },
  { value: 209, label: 'Rune Spell Master' },
  { value: 309, label: 'Grand Rune Master' },
  { value: 409, label: 'Majestic Rune Wizard' },
  { value: 10, label: 'Slayer' },
  { value: 210, label: 'Royal Slayer' },
  { value: 310, label: 'Master Slayer' },
  { value: 410, label: 'Slaughterer' },
  { value: 11, label: 'Gun Crusher' },
  { value: 211, label: 'Gun Breaker' },
  { value: 311, label: 'Master Gun Breaker' },
  { value: 411, label: 'Heist Gun Crasher' },
  { value: 12, label: 'White Wizard' },
  { value: 212, label: 'Light Master' },
  { value: 312, label: 'Shine Wizard' },
  { value: 412, label: 'Shine Master' },
  { value: 13, label: 'Mage' },
  { value: 213, label: 'Wo Mage' },
  { value: 313, label: 'Arch Mage' },
  { value: 413, label: 'Mystic Mage' },
  { value: 14, label: 'Illusion Knight' },
  { value: 214, label: 'Mirage Knight' },
  { value: 314, label: 'Illusion Master' },
  { value: 414, label: 'Mystic Knight' },
  { value: 15, label: 'Alchemist' },
  { value: 215, label: 'Alchemic Master' },
  { value: 315, label: 'Alchemic Force' },
  { value: 415, label: 'Creator' },
];

function normalizeDataPath(path: string): string {
  let clean = path.replace(/\\/g, '/').replace(/^\/+/, '');
  if (clean.toLowerCase().startsWith('data/')) {
    clean = clean.slice(5);
  }
  return clean.toLowerCase();
}

function normalizeBaseName(path: string): string {
  const name = path.replace(/\\/g, '/').split('/').pop() || '';
  return name.toLowerCase().replace(/\.[^.]+$/, '');
}

function getExtension(path: string): string {
  const lower = path.toLowerCase();
  const idx = lower.lastIndexOf('.');
  return idx >= 0 ? lower.slice(idx) : '';
}

function resolveClassModelId(value: number): number {
  if (value >= 400) return value - 400;
  if (value >= 300) return value - 300;
  if (value >= 200) return value - 200;
  return value;
}

function formatClassId(value: number): string {
  return value.toString().padStart(2, '0');
}

export class CharacterTestScene {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private clock = new THREE.Clock();
  private ambientLight!: THREE.AmbientLight;
  private directionalLight!: THREE.DirectionalLight;

  private mixer: THREE.AnimationMixer | null = null;
  private currentAction: THREE.AnimationAction | null = null;

  private readonly bmdLoader = new BMDLoader();
  private textureLoader = new THREE.TextureLoader();

  private dataFiles = new Map<string, File>();
  private textureIndex = new Map<string, string[]>();
  private dataRootPath: string | null = null;
  private itemDefinitions: ItemDefinition[] = [];
  private itemByKey = new Map<string, ItemDefinition>();
  private textureCache = new Map<string, THREE.Texture>();
  private electronTextureMap = new Map<string, string>();
  private missingDataPaths = new Set<string>();

  private characterRoot: THREE.Group | null = null;
  private baseSkeleton: THREE.Skeleton | null = null;
  private baseBindMatrix: THREE.Matrix4 | null = null;
  private characterOffset = new THREE.Vector3();
  private readonly characterHeightOffset = 80;
  private hasFramed = false;
  private lastClassValue: number | null = null;
  private currentClassValue: number | null = null;
  private playerAnimations: THREE.AnimationClip[] | null = null;
  private animationSpeed = 0.2;
  private selectedAnimationIndex: number | null = null;
  private characterScale = 1.0;
  private itemLevel = 0;
  private readonly itemGlowColor = new THREE.Color(1.0, 1.0, 1.0);
  private itemIsExcellent = false;
  private itemIsAncient = false;
  private itemExcellentIntensity = 1.0;
  private itemShaderMaterials = new Set<THREE.ShaderMaterial>();
  private skeletonHelper: THREE.SkeletonHelper | null = null;
  private boundingBoxHelper: THREE.BoxHelper | null = null;
  private axesHelper: THREE.AxesHelper | null = null;
  private normalHelpers: Array<THREE.LineSegments & { update: () => void }> = [];
  private normalsVisible = false;
  private normalsUpdateCounter = 0;
  private isRecordingGif = false;
  private meshRefs: THREE.Mesh[] = [];
  private gridHelper: THREE.GridHelper | null = null;
  private isActive = true;
  private isAutoRotating = true;
  private userIsInteracting = false;
  private buildToken = 0;

  private containerEl!: HTMLElement;
  private dataDropZone!: HTMLElement;
  private dataInput!: HTMLInputElement;
  private dataStatus!: HTMLElement;
  private classSelect!: HTMLSelectElement;
  private helmSelect!: HTMLSelectElement;
  private armorSelect!: HTMLSelectElement;
  private pantsSelect!: HTMLSelectElement;
  private glovesSelect!: HTMLSelectElement;
  private bootsSelect!: HTMLSelectElement;
  private leftWeaponSelect!: HTMLSelectElement;
  private rightWeaponSelect!: HTMLSelectElement;
  private wingSelect!: HTMLSelectElement;
  private animationSelect!: HTMLSelectElement;
  private autoRotateCheckbox!: HTMLInputElement;
  private speedSlider!: HTMLInputElement;
  private speedValueEl!: HTMLElement;
  private scaleSlider!: HTMLInputElement;
  private scaleValueEl!: HTMLElement;
  private itemLevelSlider!: HTMLInputElement;
  private itemLevelValueEl!: HTMLElement;
  private itemExcellentCheckbox!: HTMLInputElement;
  private itemAncientCheckbox!: HTMLInputElement;
  private itemExcellentIntensitySlider!: HTMLInputElement;
  private itemExcellentIntensityValueEl!: HTMLElement;
  private exportGifBtn!: HTMLButtonElement;
  private gifWidthInput!: HTMLInputElement;
  private gifHeightInput!: HTMLInputElement;
  private gifDelayInput!: HTMLInputElement;
  private gifFrameMultiplierInput!: HTMLInputElement;
  private blendingBox!: HTMLElement;
  private blendingList!: HTMLElement;
  private showSkeletonCheckbox!: HTMLInputElement;
  private wireframeCheckbox!: HTMLInputElement;
  private showBoundingBoxCheckbox!: HTMLInputElement;
  private showAxesCheckbox!: HTMLInputElement;
  private showNormalsCheckbox!: HTMLInputElement;
  private bgColorInput!: HTMLInputElement;
  private brightnessSlider!: HTMLInputElement;
  private brightnessLabel!: HTMLElement;
  private statusEl!: HTMLElement;

  constructor() {
    this.initThree();
    this.initUI();
    this.animate();
  }

  public setActive(active: boolean) {
    this.isActive = active;
    if (active) {
      this.refreshViewport();
    }
  }

  private initThree() {
    const container = document.getElementById('character-canvas-container');
    if (!container) throw new Error('#character-canvas-container not found');
    this.containerEl = container;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x2b2f36);

    this.camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      10000,
    );
    this.camera.position.set(0, 200, 400);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

    window.addEventListener('resize', () => {
      this.refreshViewport();
    });

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.addEventListener('start', () => { this.userIsInteracting = true; });
    this.controls.addEventListener('end', () => { this.userIsInteracting = false; });

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    this.directionalLight.position.set(5, 10, 7.5);
    this.scene.add(this.ambientLight, this.directionalLight);

    this.gridHelper = new THREE.GridHelper(500, 10);
    this.scene.add(this.gridHelper);
  }

  private initUI() {
    this.dataDropZone = document.getElementById('data-drop-zone') as HTMLElement;
    this.dataInput = document.getElementById('data-folder-input') as HTMLInputElement;
    this.dataStatus = document.getElementById('data-folder-status') as HTMLElement;

    this.classSelect = document.getElementById('character-class-select') as HTMLSelectElement;
    this.helmSelect = document.getElementById('character-helm-select') as HTMLSelectElement;
    this.armorSelect = document.getElementById('character-armor-select') as HTMLSelectElement;
    this.pantsSelect = document.getElementById('character-pants-select') as HTMLSelectElement;
    this.glovesSelect = document.getElementById('character-gloves-select') as HTMLSelectElement;
    this.bootsSelect = document.getElementById('character-boots-select') as HTMLSelectElement;
    this.leftWeaponSelect = document.getElementById('character-left-weapon-select') as HTMLSelectElement;
    this.rightWeaponSelect = document.getElementById('character-right-weapon-select') as HTMLSelectElement;
    this.wingSelect = document.getElementById('character-wing-select') as HTMLSelectElement;
    this.animationSelect = document.getElementById('character-animation-select') as HTMLSelectElement;
    this.autoRotateCheckbox = document.getElementById('character-auto-rotate') as HTMLInputElement;
    this.speedSlider = document.getElementById('character-speed-slider') as HTMLInputElement;
    this.speedValueEl = document.getElementById('character-speed-value') as HTMLElement;
    this.scaleSlider = document.getElementById('character-scale-slider') as HTMLInputElement;
    this.scaleValueEl = document.getElementById('character-scale-value') as HTMLElement;
    this.itemLevelSlider = document.getElementById('character-item-level') as HTMLInputElement;
    this.itemLevelValueEl = document.getElementById('character-item-level-value') as HTMLElement;
    this.itemExcellentCheckbox = document.getElementById('character-item-excellent') as HTMLInputElement;
    this.itemAncientCheckbox = document.getElementById('character-item-ancient') as HTMLInputElement;
    this.itemExcellentIntensitySlider = document.getElementById('character-excellent-intensity') as HTMLInputElement;
    this.itemExcellentIntensityValueEl = document.getElementById('character-excellent-intensity-value') as HTMLElement;
    this.exportGifBtn = document.getElementById('character-export-gif-btn') as HTMLButtonElement;
    this.gifWidthInput = document.getElementById('character-gif-width-input') as HTMLInputElement;
    this.gifHeightInput = document.getElementById('character-gif-height-input') as HTMLInputElement;
    this.gifDelayInput = document.getElementById('character-gif-delay-input') as HTMLInputElement;
    this.gifFrameMultiplierInput = document.getElementById('character-gif-frame-multiplier-input') as HTMLInputElement;
    this.blendingBox = document.getElementById('character-blending-controls') as HTMLElement;
    this.blendingList = document.getElementById('character-blending-container') as HTMLElement;
    this.showSkeletonCheckbox = document.getElementById('character-show-skeleton') as HTMLInputElement;
    this.wireframeCheckbox = document.getElementById('character-wireframe') as HTMLInputElement;
    this.showBoundingBoxCheckbox = document.getElementById('character-show-bbox') as HTMLInputElement;
    this.showAxesCheckbox = document.getElementById('character-show-axes') as HTMLInputElement;
    this.showNormalsCheckbox = document.getElementById('character-show-normals') as HTMLInputElement;
    this.bgColorInput = document.getElementById('character-bg-color') as HTMLInputElement;
    this.brightnessSlider = document.getElementById('character-brightness-slider') as HTMLInputElement;
    this.brightnessLabel = document.getElementById('character-brightness-label') as HTMLElement;
    this.statusEl = document.getElementById('character-status') as HTMLElement;

    this.autoRotateCheckbox.addEventListener('change', () => {
      this.isAutoRotating = this.autoRotateCheckbox.checked;
    });
    this.autoRotateCheckbox.checked = false;
    this.isAutoRotating = this.autoRotateCheckbox.checked;

    this.speedSlider.value = this.animationSpeed.toString();
    this.speedValueEl.textContent = `${this.animationSpeed.toFixed(2)}x`;
    this.speedSlider.addEventListener('input', e => {
      const speed = parseFloat((e.target as HTMLInputElement).value);
      this.speedValueEl.textContent = `${speed.toFixed(2)}x`;
      this.setAnimationSpeed(speed);
    });
    this.setAnimationSpeed(this.animationSpeed);

    this.scaleSlider.value = this.characterScale.toString();
    this.scaleValueEl.textContent = `${this.characterScale.toFixed(2)}x`;
    this.scaleSlider.addEventListener('input', e => {
      const scale = parseFloat((e.target as HTMLInputElement).value);
      this.scaleValueEl.textContent = `${scale.toFixed(2)}x`;
      this.setCharacterScale(scale);
    });

    this.itemLevelSlider.value = this.itemLevel.toString();
    this.itemLevelValueEl.textContent = `+${this.itemLevel}`;
    this.itemLevelSlider.addEventListener('input', e => {
      const level = parseInt((e.target as HTMLInputElement).value, 10) || 0;
      this.itemLevel = Math.min(Math.max(level, 0), 15);
      this.itemLevelValueEl.textContent = `+${this.itemLevel}`;
      this.updateItemShaderParams();
    });

    this.itemExcellentCheckbox.checked = false;
    this.itemAncientCheckbox.checked = false;
    this.itemExcellentCheckbox.addEventListener('change', () => {
      this.itemIsExcellent = this.itemExcellentCheckbox.checked;
      this.updateItemShaderParams();
    });
    this.itemAncientCheckbox.addEventListener('change', () => {
      this.itemIsAncient = this.itemAncientCheckbox.checked;
      this.updateItemShaderParams();
    });

    this.itemExcellentIntensitySlider.value = this.itemExcellentIntensity.toString();
    this.itemExcellentIntensityValueEl.textContent = `${this.itemExcellentIntensity.toFixed(2)}x`;
    this.itemExcellentIntensitySlider.addEventListener('input', e => {
      const value = parseFloat((e.target as HTMLInputElement).value);
      this.itemExcellentIntensity = Math.min(Math.max(value, 0), 2.5);
      this.itemExcellentIntensityValueEl.textContent = `${this.itemExcellentIntensity.toFixed(2)}x`;
      this.updateItemShaderParams();
    });

    this.exportGifBtn.addEventListener('click', () => this.exportGif());

    this.showSkeletonCheckbox.addEventListener('change', () => {
      this.updateSkeletonHelperState();
    });

    this.wireframeCheckbox.addEventListener('change', () => {
      this.applyWireframeState();
    });

    this.showBoundingBoxCheckbox.addEventListener('change', () => {
      this.updateBoundingBoxHelperState();
    });

    this.showAxesCheckbox.addEventListener('change', () => {
      this.updateAxesHelperState();
    });

    this.showNormalsCheckbox.addEventListener('change', () => {
      this.updateNormalsHelpersState();
    });

    this.bgColorInput.addEventListener('input', e => {
      const color = (e.target as HTMLInputElement).value;
      this.scene.background = new THREE.Color(color);
      this.containerEl.style.backgroundColor = color;
    });
    this.bgColorInput.value = '#2b2f36';
    this.scene.background = new THREE.Color(0x2b2f36);
    this.containerEl.style.backgroundColor = '#2b2f36';

    this.brightnessSlider.addEventListener('input', e => {
      const value = parseFloat((e.target as HTMLInputElement).value);
      this.brightnessLabel.textContent = `Brightness: ${value.toFixed(2)}×`;
      this.setBrightness(value);
    });
    this.brightnessSlider.value = '2.0';
    this.brightnessLabel.textContent = 'Brightness: 2.00×';
    this.setBrightness(2.0);

    this.populateClassSelect();
    this.bindSelectChanges();

    const setupDropZone = (zone: HTMLElement, input: HTMLInputElement) => {
      zone.addEventListener('click', () => this.handleDataSelectClick(input));
      zone.addEventListener('dragover', e => {
        e.preventDefault();
        zone.classList.add('drag-over');
      });
      zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
      zone.addEventListener('drop', e => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
          this.loadDataFolder(Array.from(e.dataTransfer.files));
        }
      });

      input.addEventListener('change', e => {
        const list = (e.target as HTMLInputElement).files;
        if (list?.length) {
          this.loadDataFolder(Array.from(list));
        }
      });
    };

    setupDropZone(this.dataDropZone, this.dataInput);
  }

  private populateClassSelect() {
    this.classSelect.innerHTML = '';
    for (const option of CLASS_OPTIONS) {
      const el = document.createElement('option');
      el.value = option.value.toString();
      el.textContent = option.label;
      this.classSelect.appendChild(el);
    }
    this.classSelect.value = '1';
  }

  private bindSelectChanges() {
    const onChange = () => this.scheduleRebuild();
    this.classSelect.addEventListener('change', onChange);
    this.helmSelect.addEventListener('change', onChange);
    this.armorSelect.addEventListener('change', onChange);
    this.pantsSelect.addEventListener('change', onChange);
    this.glovesSelect.addEventListener('change', onChange);
    this.bootsSelect.addEventListener('change', onChange);
    this.leftWeaponSelect.addEventListener('change', onChange);
    this.rightWeaponSelect.addEventListener('change', onChange);
    this.wingSelect.addEventListener('change', onChange);

    this.animationSelect.addEventListener('change', () => {
      const idx = parseInt(this.animationSelect.value, 10);
      if (Number.isNaN(idx) || !this.characterRoot?.animations?.length) return;
      this.playAnimation(idx);
    });
  }

  private async handleDataSelectClick(input: HTMLInputElement) {
    if (isElectron()) {
      const folderPath = await openDirectoryDialog();
      if (folderPath) {
        this.loadDataFolder(folderPath);
      }
    } else {
      input.click();
    }
  }

  private async loadDataFolder(source: string | File[]) {
    this.dataStatus.textContent = 'Loading Data folder...';
    this.statusEl.textContent = 'Loading Data folder...';

    this.dataFiles.clear();
    this.textureIndex.clear();
    this.dataRootPath = null;
    this.electronTextureMap.clear();
    this.missingDataPaths.clear();
    this.playerAnimations = null;
    this.hasFramed = false;
    this.lastClassValue = null;
    this.currentClassValue = null;
    this.characterOffset.set(0, 0, 0);

    if (typeof source === 'string') {
      this.dataRootPath = source;
      const ok = await this.loadItemDatabase();
      if (ok) {
        this.dataStatus.textContent = `Loaded Data folder: ${source}`;
        this.statusEl.textContent = 'Item database loaded.';
        this.scheduleRebuild();
      } else {
        this.dataStatus.textContent = 'Failed to load item.bmd from Data folder.';
        this.statusEl.textContent = 'Missing Data/Local/item.bmd';
      }
      return;
    }

    const files = source;
    if (!files.length) {
      this.dataStatus.textContent = 'No files selected.';
      return;
    }

    const firstPath = (files[0] as any).webkitRelativePath || files[0].name;
    const rootName = firstPath.split('/')[0];

    for (const file of files) {
      const rel = (file as any).webkitRelativePath || file.name;
      const trimmed = rel.startsWith(rootName + '/') ? rel.slice(rootName.length + 1) : rel;
      const normalized = normalizeDataPath(trimmed);
      this.dataFiles.set(normalized, file);

      const ext = getExtension(normalized);
      if (TEXTURE_EXTENSIONS.includes(ext)) {
        const base = normalizeBaseName(normalized);
        const list = this.textureIndex.get(base) || [];
        list.push(normalized);
        this.textureIndex.set(base, list);
      }
    }

    const ok = await this.loadItemDatabase();
    if (ok) {
      this.dataStatus.textContent = `Loaded Data folder (${files.length} files)`;
      this.statusEl.textContent = 'Item database loaded.';
      this.scheduleRebuild();
    } else {
      this.dataStatus.textContent = 'Failed to load item.bmd from Data folder.';
      this.statusEl.textContent = 'Missing Data/Local/item.bmd';
    }
  }

  private async loadItemDatabase(): Promise<boolean> {
    const file = await this.readDataFile('Local/item.bmd');
    if (!file) return false;

    this.itemDefinitions = parseItemBmd(file.buffer)
      .filter(item => item.modelPath);

    this.itemByKey.clear();
    this.itemDefinitions.forEach(item => {
      this.itemByKey.set(`${item.group}:${item.id}`, item);
    });

    this.populateItemSelects();
    return true;
  }

  private populateItemSelects() {
    const groups = new Map<number, ItemDefinition[]>();
    for (const item of this.itemDefinitions) {
      const list = groups.get(item.group) || [];
      list.push(item);
      groups.set(item.group, list);
    }

    const sortItems = (list?: ItemDefinition[]) =>
      (list || []).slice().sort((a, b) => a.id - b.id);

    const armorGroups = {
      helm: 7,
      armor: 8,
      pants: 9,
      gloves: 10,
      boots: 11,
    };

    this.fillSelect(this.helmSelect, sortItems(groups.get(armorGroups.helm)), 'None');
    this.fillSelect(this.armorSelect, sortItems(groups.get(armorGroups.armor)), 'None');
    this.fillSelect(this.pantsSelect, sortItems(groups.get(armorGroups.pants)), 'None');
    this.fillSelect(this.glovesSelect, sortItems(groups.get(armorGroups.gloves)), 'None');
    this.fillSelect(this.bootsSelect, sortItems(groups.get(armorGroups.boots)), 'None');

    const weapons: ItemDefinition[] = [];
    for (let g = 0; g <= 6; g++) {
      weapons.push(...(groups.get(g) || []));
    }
    weapons.sort((a, b) => a.group - b.group || a.id - b.id);
    this.fillSelect(this.leftWeaponSelect, weapons, 'None');
    this.fillSelect(this.rightWeaponSelect, weapons, 'None');

    this.fillSelect(this.wingSelect, sortItems(groups.get(12)), 'None');
  }

  private fillSelect(select: HTMLSelectElement, items: ItemDefinition[], noneLabel: string) {
    select.innerHTML = '';

    const noneOption = document.createElement('option');
    noneOption.value = '';
    noneOption.textContent = noneLabel;
    select.appendChild(noneOption);

    for (const item of items) {
      const option = document.createElement('option');
      option.value = `${item.group}:${item.id}`;
      const labelBase = item.itemName || item.modelName || `Item ${item.id}`;
      option.textContent = `${labelBase} (G${item.group} / ${item.id})`;
      select.appendChild(option);
    }

    select.value = '';
  }

  private scheduleRebuild() {
    if (!this.itemDefinitions.length) return;
    this.rebuildCharacter();
  }

  private async rebuildCharacter() {
    const token = ++this.buildToken;

    this.statusEl.textContent = 'Building character...';

    const classValue = parseInt(this.classSelect.value, 10);
    const classId = resolveClassModelId(classValue);
    const classToken = formatClassId(classId);
    const shouldReframe = this.lastClassValue !== classValue || !this.hasFramed;
    const previousOffset = this.characterOffset.clone();
    const previousRotation = this.characterRoot ? this.characterRoot.rotation.clone() : null;
    const previousAnimationIndex = this.selectedAnimationIndex;
    this.currentClassValue = classValue;
    this.lastClassValue = classValue;

    this.clearCharacter();
    this.animationSelect.innerHTML = '<option value="">No animations</option>';

    const baseArmorPath = `Player/ArmorClass${classToken}.bmd`;
    const baseGroup = await this.loadBmdGroup(baseArmorPath);
    if (!baseGroup || token !== this.buildToken) {
      this.statusEl.textContent = `Missing base model: ${baseArmorPath}`;
      return;
    }

    this.characterRoot = baseGroup.group;
    this.characterRoot.name = 'character_root';
    this.tagMeshes(this.characterRoot, `Base ArmorClass${classToken}`, 'base');
    this.characterRoot.scale.set(this.characterScale, this.characterScale, this.characterScale);
    if (!shouldReframe) {
      this.characterRoot.position.copy(previousOffset);
      if (previousRotation) {
        this.characterRoot.rotation.copy(previousRotation);
      }
    }
    this.scene.add(this.characterRoot);

    this.baseSkeleton = this.findSkeleton(this.characterRoot);
    if (!this.baseSkeleton) {
      this.statusEl.textContent = 'No skeleton found in base model.';
      return;
    }
    this.baseBindMatrix = this.findBaseBindMatrix(this.characterRoot);

    await this.applyTexturesForGroup(baseGroup.group);
    if (token !== this.buildToken) return;

    const playerAnimations = await this.ensurePlayerAnimations();
    if (playerAnimations && playerAnimations.length) {
      this.characterRoot.animations = playerAnimations;
    }

    this.mixer = this.characterRoot.animations.length
      ? new THREE.AnimationMixer(this.characterRoot)
      : null;

    if (this.mixer && this.characterRoot.animations.length > 0) {
      const desiredIndex = previousAnimationIndex ?? (this.characterRoot.animations.length > 1 ? 1 : 0);
      const safeIndex = Math.min(
        Math.max(desiredIndex, 0),
        this.characterRoot.animations.length - 1,
      );
      this.populateAnimationSelect(this.characterRoot.animations.length, safeIndex);
      this.playAnimation(safeIndex);
    }

    const baseParts = [
      { path: `Player/HelmClass${classToken}.bmd`, label: `Base HelmClass${classToken}` },
      { path: `Player/PantClass${classToken}.bmd`, label: `Base PantClass${classToken}` },
      { path: `Player/GloveClass${classToken}.bmd`, label: `Base GloveClass${classToken}` },
      { path: `Player/BootClass${classToken}.bmd`, label: `Base BootClass${classToken}` },
    ];

    for (const partEntry of baseParts) {
      const part = await this.loadBmdGroup(partEntry.path);
      if (!part) {
        console.warn(`[CharacterTestScene] Missing base part: ${partEntry.path}`);
        continue;
      }
      if (token !== this.buildToken) return;
      this.tagMeshes(part.group, partEntry.label, 'base');
      await this.applyTexturesForGroup(part.group);
      await this.attachBodyPart(part.group);
      if (token !== this.buildToken) return;
    }

    const selections = [
      { select: this.helmSelect, type: 'armor' as const, label: 'Helm' },
      { select: this.armorSelect, type: 'armor' as const, label: 'Armor' },
      { select: this.pantsSelect, type: 'armor' as const, label: 'Pants' },
      { select: this.glovesSelect, type: 'armor' as const, label: 'Gloves' },
      { select: this.bootsSelect, type: 'armor' as const, label: 'Boots' },
      { select: this.leftWeaponSelect, type: 'weapon' as const, bone: 33, label: 'Left Weapon' },
      { select: this.rightWeaponSelect, type: 'weapon' as const, bone: 42, label: 'Right Weapon' },
      { select: this.wingSelect, type: 'wing' as const, bone: 47, label: 'Wings' },
    ];

    for (const entry of selections) {
      const item = this.getSelectedItem(entry.select);
      if (!item) continue;

      const itemLabel = `${entry.label}: ${this.describeItem(item)}`;

      if (entry.type === 'armor') {
        const itemPath = this.resolveArmorPath(item.modelPath);
        const part = await this.loadBmdGroupWithFallback(itemPath);
        if (!part) {
          console.warn(`[CharacterTestScene] Missing armor model: ${item.modelPath}`);
          continue;
        }
        if (token !== this.buildToken) return;
        this.tagMeshes(part.group, itemLabel, 'equipment');
        await this.applyTexturesForGroup(part.group);
        await this.attachBodyPart(part.group);
      } else {
        const part = await this.loadBmdGroupWithFallback(item.modelPath);
        if (!part) {
          console.warn(`[CharacterTestScene] Missing attachment model: ${item.modelPath}`);
          continue;
        }
        if (token !== this.buildToken) return;
        this.tagMeshes(part.group, itemLabel, 'equipment');
        this.attachToBone(part.group, entry.bone ?? 0);
        await this.applyTexturesForGroup(part.group);
      }
    }

    if (shouldReframe) {
      this.frameCharacter();
    }
    this.meshRefs = [];
    if (this.characterRoot) {
      this.characterRoot.traverse(obj => {
        if ((obj as any).isMesh) {
          this.meshRefs.push(obj as THREE.Mesh);
        }
      });
    }
    this.buildBlendingUI();
    this.refreshRenderHelpers();
    this.statusEl.textContent = 'Character ready.';
  }

  private resolveArmorPath(path: string): string[] {
    const normalized = normalizeDataPath(path);
    if (normalized.startsWith('item/')) {
      const playerPath = `player/${normalized.slice(5)}`;
      return [playerPath, normalized];
    }
    return [normalized];
  }

  private async loadBmdGroupWithFallback(paths: string | string[]) {
    const list = Array.isArray(paths) ? paths : [paths];
    for (const candidate of list) {
      const group = await this.loadBmdGroup(this.ensureBmdExtension(candidate));
      if (group) return group;
    }
    return null;
  }

  private async loadBmdGroup(relativePath: string) {
    const file = await this.readDataFile(relativePath);
    if (!file) {
      console.warn(`[CharacterTestScene] Missing file: ${relativePath}`);
      return null;
    }

    try {
      const result = await this.bmdLoader.load(file.buffer);
      return result;
    } catch (error) {
      console.error('[CharacterTestScene] Failed to load BMD', relativePath, error);
      return null;
    }
  }

  private describeItem(item: ItemDefinition): string {
    const name = item.itemName || item.modelName || `Item ${item.id}`;
    return `${name} (G${item.group} / ${item.id})`;
  }

  private tagMeshes(group: THREE.Group, label: string, kind: 'base' | 'equipment') {
    group.traverse(obj => {
      if ((obj as THREE.Mesh).isMesh) {
        (obj as THREE.Mesh).userData.itemLabel = label;
        (obj as THREE.Mesh).userData.itemKind = kind;
      }
    });
  }

  private ensureBmdExtension(path: string): string {
    const lower = path.toLowerCase();
    if (lower.endsWith('.bmd')) return path;
    return `${path}.bmd`;
  }

  private findSkeleton(group: THREE.Group): THREE.Skeleton | null {
    let skeleton: THREE.Skeleton | null = null;
    group.traverse(obj => {
      if (!skeleton && (obj as THREE.SkinnedMesh).isSkinnedMesh) {
        skeleton = (obj as THREE.SkinnedMesh).skeleton;
      }
    });
    return skeleton;
  }

  private findBaseBindMatrix(group: THREE.Group): THREE.Matrix4 | null {
    let bindMatrix: THREE.Matrix4 | null = null;
    group.traverse(obj => {
      if (!bindMatrix && (obj as THREE.SkinnedMesh).isSkinnedMesh) {
        bindMatrix = (obj as THREE.SkinnedMesh).bindMatrix.clone();
      }
    });
    return bindMatrix;
  }

  private async attachBodyPart(partGroup: THREE.Group) {
    if (!this.characterRoot || !this.baseSkeleton) return;

    const meshes: THREE.SkinnedMesh[] = [];
    partGroup.traverse(obj => {
      if ((obj as THREE.SkinnedMesh).isSkinnedMesh) {
        meshes.push(obj as THREE.SkinnedMesh);
      }
    });

    for (const mesh of meshes) {
      mesh.position.set(0, 0, 0);
      mesh.rotation.set(0, 0, 0);
      mesh.scale.set(1, 1, 1);
      this.characterRoot.add(mesh);
      mesh.bind(this.baseSkeleton, this.baseBindMatrix ?? mesh.bindMatrix);
    }
  }

  private attachToBone(group: THREE.Group, boneIndex: number) {
    if (!this.baseSkeleton) return;
    const bone = this.baseSkeleton.bones[boneIndex];
    if (!bone) {
      console.warn(`[CharacterTestScene] Missing bone ${boneIndex}`);
      return;
    }

    group.position.set(0, 0, 0);
    group.rotation.set(0, 0, 0);
    group.scale.set(1, 1, 1);

    bone.add(group);
  }

  private async applyTexturesForGroup(group: THREE.Group) {
    const texturePaths = new Set<string>();
    const meshes: THREE.Mesh[] = [];

    group.traverse(obj => {
      if ((obj as THREE.Mesh).isMesh && (obj as any).userData?.texturePath) {
        const path = (obj as any).userData.texturePath as string;
        texturePaths.add(normalizeDataPath(path));
        meshes.push(obj as THREE.Mesh);
      }
    });

    const textures = new Map<string, THREE.Texture>();
    for (const path of texturePaths) {
      const tex = await this.getTextureForPath(path);
      if (tex) textures.set(path, tex);
    }

    meshes.forEach(mesh => {
      const path = normalizeDataPath((mesh as any).userData?.texturePath || '');
      const tex = textures.get(path);
      if (!tex) return;

      if ((mesh.userData?.itemKind as string) === 'equipment') {
        this.applyItemShader(mesh, tex);
        return;
      }

      const mat = mesh.material as THREE.MeshPhongMaterial;
      if (mat && 'map' in mat) {
        mat.map = tex;
        mat.color.set(0xffffff);
        mat.needsUpdate = true;
      }
    });
  }

  private applyItemShader(mesh: THREE.Mesh, texture: THREE.Texture) {
    const oldMaterial = mesh.material as THREE.Material | THREE.Material[] | undefined;
    if (Array.isArray(oldMaterial)) {
      oldMaterial.forEach(mat => mat.dispose());
    } else if (oldMaterial) {
      oldMaterial.dispose();
    }

    const material = this.createItemShaderMaterial(texture);
    mesh.material = material;
    this.itemShaderMaterials.add(material);
  }

  private updateItemShaderParams() {
    const lightDirection = new THREE.Vector3(0.707, -0.707, 0).normalize();
    const ambientColor = new THREE.Color(0.3, 0.3, 0.3);
    const glowColor = this.itemGlowColor;

    this.itemShaderMaterials.forEach(material => {
      material.uniforms.uItemLevel.value = this.itemLevel;
      material.uniforms.uIsExcellent.value = this.itemIsExcellent ? 1.0 : 0.0;
      material.uniforms.uIsAncient.value = this.itemIsAncient ? 1.0 : 0.0;
      material.uniforms.uExcellentIntensity.value = this.itemExcellentIntensity;
      material.uniforms.uLightDirection.value.copy(lightDirection);
      material.uniforms.uAmbientColor.value.copy(ambientColor);
      material.uniforms.uGlowColor.value.copy(glowColor);
    });
  }

  private createItemShaderMaterial(texture: THREE.Texture): THREE.ShaderMaterial {
    const vertexShader = `
      #include <common>
      #include <skinning_pars_vertex>

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vViewDir;

      void main() {
        vUv = uv;

        #include <begin_vertex>
        #include <beginnormal_vertex>
        #include <skinbase_vertex>
        #include <skinning_vertex>
        #include <skinnormal_vertex>

        vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
        vWorldPosition = worldPosition.xyz;
        vNormal = normalize(mat3(modelMatrix) * objectNormal);
        vViewDir = normalize(cameraPosition - worldPosition.xyz);

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      #include <common>

      uniform sampler2D uMap;
      uniform float uTime;
      uniform float uItemLevel;
      uniform float uIsExcellent;
      uniform float uIsAncient;
      uniform float uExcellentIntensity;
      uniform vec3 uGlowColor;
      uniform vec3 uLightDirection;
      uniform vec3 uAmbientColor;

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vViewDir;

      void main() {
        vec4 base = texture2D(uMap, vUv);
        if (base.a < 0.1) discard;

        vec3 normal = normalize(vNormal);
        float ndotl = max(0.1, dot(normal, -uLightDirection));
        vec3 color = base.rgb * (uAmbientColor + vec3(ndotl));

        float itemLevel = uItemLevel;
        float excellentEnabled = step(0.5, uIsExcellent);
        float ancientEnabled = step(0.5, uIsAncient);
        float brightness = 1.0;
        float ghostIntensity = 0.0;

        if (itemLevel < 7.0) {
          brightness = 1.0;
          ghostIntensity = 0.0;
        } else if (itemLevel < 9.0) {
          brightness = 1.6 + (itemLevel - 8.0) * 0.2;
          ghostIntensity = 0.30;
        } else if (itemLevel < 10.0) {
          brightness = 1.8 + (itemLevel - 9.0) * 0.2;
          ghostIntensity = 0.8;
        } else {
          brightness = 1.8 + (itemLevel - 10.0) * 0.2;
          ghostIntensity = 0.7 + (itemLevel / 30.0);
        }

        float subtlePulse = (1.0 + sin(uTime * 0.8)) * 0.03 + 0.97;
        float shimmer = (1.0 + sin(uTime * 8.0 + normal.x * 12.0)) * 0.15 + 0.85;

        vec2 ghostOffset1 = vec2(sin(uTime * 0.8) * 0.035, cos(uTime * 0.7) * 0.035) * ghostIntensity;
        vec2 ghostOffset2 = vec2(sin(uTime * 1.0 + 2.1) * 0.025, cos(uTime * 0.9 + 1.8) * 0.025) * ghostIntensity;
        vec2 ghostOffset3 = vec2(sin(uTime * 1.2 + 4.2) * 0.02, cos(uTime * 1.1 + 3.7) * 0.02) * ghostIntensity;
        vec2 ghostOffset4 = vec2(sin(uTime * 0.6 + 1.1) * 0.015, cos(uTime * 1.3 + 2.3) * 0.015) * ghostIntensity;

        vec3 ghost1 = texture2D(uMap, vUv + ghostOffset1).rgb;
        vec3 ghost2 = texture2D(uMap, vUv + ghostOffset2).rgb;
        vec3 ghost3 = texture2D(uMap, vUv + ghostOffset3).rgb;
        vec3 ghost4 = texture2D(uMap, vUv + ghostOffset4).rgb;

        if (itemLevel >= 7.0) {
          color = color * brightness * subtlePulse;
          color += ghost1 * (0.8 * ghostIntensity) * shimmer;
          color += ghost2 * (0.6 * ghostIntensity) * shimmer;
          color += ghost3 * (0.5 * ghostIntensity) * shimmer;
          color += ghost4 * (0.4 * ghostIntensity) * shimmer;
        } else {
          color = color * brightness;
        }

        float extraGlow = max(itemLevel - 9.0, 0.0) * 0.1;
        float glowEffect = (1.0 + sin(uTime * 1.0)) * 0.03 + 0.2;
        color += base.rgb * glowEffect * extraGlow * 0.2;

        // Ancient effect: blue sweep with long pause
        if (ancientEnabled > 0.5) {
          float cycle = fract(uTime * 0.08); // slow cycle
          float sweepDuration = 0.18;
          float sweepPhase = clamp(cycle / sweepDuration, 0.0, 1.0);
          float sweepActive = step(cycle, sweepDuration);
          float beamPos = sweepPhase;
          float dist = abs(vUv.x - beamPos);
          float beam = smoothstep(0.22, 0.0, dist);
          float wave = sin(uTime * 3.0 + vUv.y * 6.0) * 0.3 + 0.7;
          float intensity = beam * wave * sweepActive;
          vec3 ancientColor = vec3(0.25, 0.45, 1.0);
          color += ancientColor * intensity * 0.55;
          color += ghost1 * ancientColor * intensity * 0.35;
          color += ghost2 * ancientColor * intensity * 0.25;
          color += color * ancientColor * (0.05 + 0.04 * step(9.0, itemLevel));
        }

        // Excellent effect: full rainbow across the entire item
        if (excellentEnabled > 0.5) {
          float exScale = max(uExcellentIntensity, 0.0);
          float hue = fract(uTime * 0.08 + vUv.x * 0.35 + vUv.y * 0.25);
          float hue2 = fract(hue + 0.33);

          float c = 1.0;
          float x1 = c * (1.0 - abs(mod(hue * 6.0, 2.0) - 1.0));
          vec3 rgb1 = (hue < 1.0/6.0) ? vec3(c, x1, 0.0)
                     : (hue < 2.0/6.0) ? vec3(x1, c, 0.0)
                     : (hue < 3.0/6.0) ? vec3(0.0, c, x1)
                     : (hue < 4.0/6.0) ? vec3(0.0, x1, c)
                     : (hue < 5.0/6.0) ? vec3(x1, 0.0, c)
                     : vec3(c, 0.0, x1);

          float x2 = c * (1.0 - abs(mod(hue2 * 6.0, 2.0) - 1.0));
          vec3 rgb2 = (hue2 < 1.0/6.0) ? vec3(c, x2, 0.0)
                     : (hue2 < 2.0/6.0) ? vec3(x2, c, 0.0)
                     : (hue2 < 3.0/6.0) ? vec3(0.0, c, x2)
                     : (hue2 < 4.0/6.0) ? vec3(0.0, x2, c)
                     : (hue2 < 5.0/6.0) ? vec3(x2, 0.0, c)
                     : vec3(c, 0.0, x2);

          float pulse = sin(uTime * 1.1) * 0.5 + 0.5;
          float fresnel = pow(1.0 - max(dot(normalize(vViewDir), normal), 0.0), 2.0);

          vec3 rainbow = mix(rgb1, rgb2, 0.5 + 0.5 * sin(uTime * 0.6));
          vec3 rainbowTint = mix(vec3(1.0), rainbow, 0.65 * exScale);
          color *= rainbowTint;

          color += ghost1 * rgb1 * (0.26 + 0.22 * pulse) * exScale;
          color += ghost2 * rgb2 * (0.22 + 0.18 * pulse) * exScale;
          color += rgb2 * fresnel * 0.14 * exScale;
        }

        gl_FragColor = vec4(color, base.a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: texture },
        uTime: { value: 0 },
        uItemLevel: { value: this.itemLevel },
        uIsExcellent: { value: this.itemIsExcellent ? 1.0 : 0.0 },
        uIsAncient: { value: this.itemIsAncient ? 1.0 : 0.0 },
        uExcellentIntensity: { value: this.itemExcellentIntensity },
        uGlowColor: { value: this.itemGlowColor.clone() },
        uLightDirection: { value: new THREE.Vector3(0.707, -0.707, 0).normalize() },
        uAmbientColor: { value: new THREE.Color(0.3, 0.3, 0.3) },
      },
      vertexShader,
      fragmentShader,
      transparent: false,
      depthWrite: true,
      blending: THREE.NoBlending,
      toneMapped: true,
      side: THREE.DoubleSide,
    });

    (material as any).skinning = true;
    material.needsUpdate = true;

    return material;
  }

  private async getTextureForPath(path: string): Promise<THREE.Texture | null> {
    const normalized = normalizeDataPath(path);
    if (this.textureCache.has(normalized)) {
      return this.textureCache.get(normalized)!;
    }

    const base = normalizeBaseName(normalized);
    const baseCandidates = this.getTextureBaseCandidates(base);

    for (const candidate of baseCandidates) {
      const directPath = candidate === base
        ? normalized
        : this.replaceBaseName(normalized, candidate);
      if (directPath !== normalized && this.textureCache.has(directPath)) {
        return this.textureCache.get(directPath)!;
      }

      const file = await this.readDataFile(directPath);
      if (file) {
        const tex = await this.loadTexture(file.buffer, file.name);
        if (tex) {
          this.textureCache.set(directPath, tex);
          return tex;
        }
      }
    }

    for (const candidate of baseCandidates) {
      const baseKey = `base:${candidate}`;
      if (this.textureCache.has(baseKey)) {
        return this.textureCache.get(baseKey)!;
      }

      const fallbackFile = await this.findTextureByBase(candidate);
      if (!fallbackFile) continue;

      const tex = await this.loadTexture(fallbackFile.buffer, fallbackFile.name);
      if (tex) {
        this.textureCache.set(baseKey, tex);
        return tex;
      }
    }

    return null;
  }

  private getTextureBaseCandidates(base: string): string[] {
    const skinMatch = base.match(/^([a-z]*skinclass)(\d+)$/i);
    if (!skinMatch || this.currentClassValue === null) {
      return [base];
    }

    const prefix = skinMatch[1].toLowerCase();
    const classValue = this.currentClassValue;
    const classToken = classValue >= 200 ? classValue : 100 + classValue;
    const preferred = `${prefix}${classToken}`;

    if (preferred === base) {
      return [base];
    }
    return [preferred, base];
  }

  private replaceBaseName(pathValue: string, newBase: string): string {
    const ext = getExtension(pathValue);
    const normalized = pathValue.replace(/\\/g, '/');
    if (!normalized.includes('/')) {
      return `${newBase}${ext}`;
    }
    const dir = normalized.replace(/\/[^/]*$/, '');
    return `${dir}/${newBase}${ext}`;
  }

  private async findTextureByBase(base: string): Promise<{ name: string; buffer: ArrayBuffer } | null> {
    if (!base) return null;

    if (this.dataRootPath) {
      if (!this.electronTextureMap.has(base)) {
        try {
          const found = await searchTextures(this.dataRootPath, [base]);
          const paths = found[base] || [];
          if (paths.length > 0) {
            const preferred = this.pickPreferredTexture(paths);
            this.electronTextureMap.set(base, preferred);
          }
        } catch (error) {
          console.warn('[CharacterTestScene] Texture search failed', error);
        }
      }

      const resolved = this.electronTextureMap.get(base);
      if (!resolved) return null;
      const data = await readFileFromPath(resolved);
      if (!data) return null;
      return { name: data.name, buffer: data.data };
    }

    const candidates = this.textureIndex.get(base);
    if (!candidates || candidates.length === 0) return null;

    const preferred = this.pickPreferredTexture(candidates);
    const file = this.dataFiles.get(preferred);
    if (!file) return null;
    return { name: file.name, buffer: await file.arrayBuffer() };
  }

  private pickPreferredTexture(paths: string[]): string {
    const priority = ['.ozj', '.ozt', '.tga', '.png', '.jpg', '.jpeg'];
    const rank = (ext: string) => {
      const idx = priority.indexOf(ext);
      return idx === -1 ? priority.length : idx;
    };
    const sorted = paths.slice().sort((a, b) => {
      const aExt = getExtension(a);
      const bExt = getExtension(b);
      return rank(aExt) - rank(bExt);
    });
    return sorted[0];
  }

  private async loadTexture(buffer: ArrayBuffer, name: string): Promise<THREE.Texture | null> {
    const ext = getExtension(name);
    try {
      let tex: THREE.Texture;

      if (ext === '.tga') {
        tex = await this.textureLoader.loadAsync(await convertTgaToDataUrl(buffer));
      } else if (ext === '.ozj' || ext === '.ozt') {
        tex = await this.textureLoader.loadAsync(await convertOzjToDataUrl(buffer));
      } else {
        const blob = new Blob([buffer]);
        const url = URL.createObjectURL(blob);
        tex = await this.textureLoader.loadAsync(url);
        URL.revokeObjectURL(url);
      }

      tex.colorSpace = THREE.SRGBColorSpace;
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.flipY = false;
      tex.name = name;
      return tex;
    } catch (error) {
      console.warn('[CharacterTestScene] Texture load failed', name, error);
      return null;
    }
  }

  private getSelectedItem(select: HTMLSelectElement): ItemDefinition | null {
    const value = select.value;
    if (!value) return null;
    return this.itemByKey.get(value) || null;
  }

  private async readDataFile(relativePath: string): Promise<{ name: string; buffer: ArrayBuffer } | null> {
    const normalized = normalizeDataPath(relativePath);

    if (this.dataFiles.size > 0) {
      const file = this.dataFiles.get(normalized);
      if (!file) return null;
      return { name: file.name, buffer: await file.arrayBuffer() };
    }

    if (this.dataRootPath && isElectron()) {
      const fullPath = this.joinDataPath(normalized);
      if (this.missingDataPaths.has(normalized)) {
        return null;
      }
      try {
        const data = await readFileFromPath(fullPath);
        if (!data) return null;
        return { name: data.name, buffer: data.data };
      } catch (error) {
        this.missingDataPaths.add(normalized);
        return null;
      }
    }

    return null;
  }

  private joinDataPath(relativePath: string): string {
    if (!this.dataRootPath) return relativePath;
    const separator = this.dataRootPath.includes('\\') ? '\\' : '/';
    const trimmedRoot = this.dataRootPath.replace(/[\\/]+$/, '');
    const trimmedRel = relativePath.replace(/[\\/]+/g, separator);
    return `${trimmedRoot}${separator}${trimmedRel}`;
  }

  private populateAnimationSelect(count: number, selectedIndex: number | null = null) {
    this.animationSelect.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const option = document.createElement('option');
      option.value = i.toString();
      option.textContent = `Animation ${i}`;
      this.animationSelect.appendChild(option);
    }
    if (count > 0) {
      const fallbackIndex = count > 1 ? 1 : 0;
      const safeIndex = selectedIndex !== null && selectedIndex >= 0 && selectedIndex < count
        ? selectedIndex
        : fallbackIndex;
      this.animationSelect.value = safeIndex.toString();
    }
  }

  private playAnimation(index: number) {
    if (!this.mixer || !this.characterRoot?.animations?.length) return;

    const clip = this.characterRoot.animations[index];
    if (!clip) return;

    this.mixer.stopAllAction();
    this.currentAction = this.mixer.clipAction(clip);
    this.currentAction.setEffectiveTimeScale(this.animationSpeed);
    this.currentAction.reset().play();
    this.selectedAnimationIndex = index;
  }

  private setAnimationSpeed(speed: number) {
    this.animationSpeed = speed;
    if (this.currentAction) {
      this.currentAction.setEffectiveTimeScale(speed);
    }
  }

  private setCharacterScale(scale: number) {
    this.characterScale = scale;
    if (this.characterRoot) {
      this.characterRoot.scale.set(scale, scale, scale);
    }
  }

  private setBrightness(value: number) {
    this.renderer.toneMappingExposure = value;
    if (this.ambientLight) this.ambientLight.intensity = 0.7 * value;
    if (this.directionalLight) this.directionalLight.intensity = 1.5 * value;
  }

  private refreshViewport(attempt = 0) {
    if (!this.containerEl) return;
    const width = this.containerEl.clientWidth;
    const height = this.containerEl.clientHeight;

    if (width === 0 || height === 0) {
      if (attempt < 5) {
        requestAnimationFrame(() => this.refreshViewport(attempt + 1));
      }
      return;
    }

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.renderer.render(this.scene, this.camera);
  }

  private buildBlendingUI() {
    if (!this.blendingBox || !this.blendingList) return;

    this.blendingList.innerHTML = '';

    const modes: Record<string, number> = {
      'Opaque': THREE.NoBlending,
      'Normal': THREE.NormalBlending,
      'Additive': THREE.AdditiveBlending,
      'Multiply': THREE.MultiplyBlending,
      'Subtractive': THREE.SubtractiveBlending,
    };

    this.meshRefs.forEach((mesh, idx) => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = '0.5rem';
      row.style.marginBottom = '0.75rem';

      const label = document.createElement('span');
      const itemLabel = (mesh.userData?.itemLabel as string) || 'Unknown item';
      const meshLabel = mesh.name || `Mesh ${idx}`;
      label.textContent = `${itemLabel} · ${meshLabel}`;
      label.style.flex = '1';

      const select = document.createElement('select');
      Object.keys(modes).forEach(k => {
        const opt = document.createElement('option');
        opt.value = k;
        opt.text = k;
        select.appendChild(opt);
      });

      const material = mesh.material;
      const currentBlend = Array.isArray(material)
        ? material[0]?.blending
        : (material as THREE.Material).blending;
      const cur = Object.entries(modes).find(([, v]) => v === currentBlend);
      select.value = cur ? cur[0] : 'Normal';

      select.addEventListener('change', () => {
        const applyBlend = (mat: THREE.Material) => {
          mat.blending = modes[select.value] as THREE.Blending;
          mat.transparent = mat.blending !== THREE.NoBlending;
          mat.depthWrite = mat.blending === THREE.NoBlending;
          mat.needsUpdate = true;
        };
        if (Array.isArray(material)) {
          material.forEach(applyBlend);
        } else {
          applyBlend(material as THREE.Material);
        }
      });

      row.append(label, select);
      this.blendingList.appendChild(row);
    });

    this.blendingBox.style.display = this.meshRefs.length ? 'block' : 'none';
  }

  private refreshRenderHelpers() {
    this.updateSkeletonHelperState();
    this.applyWireframeState();
    this.updateBoundingBoxHelperState();
    this.updateAxesHelperState();
    this.updateNormalsHelpersState();
  }

  private updateSkeletonHelperState() {
    if (!this.characterRoot) {
      if (this.skeletonHelper) {
        this.scene.remove(this.skeletonHelper);
        (this.skeletonHelper.geometry as THREE.BufferGeometry).dispose();
        this.skeletonHelper = null;
      }
      return;
    }

    if (!this.skeletonHelper) {
      this.skeletonHelper = new THREE.SkeletonHelper(this.characterRoot);
      this.scene.add(this.skeletonHelper);
    }
    this.skeletonHelper.visible = this.showSkeletonCheckbox.checked;
  }

  private applyWireframeState() {
    if (!this.characterRoot) return;
    const flag = this.wireframeCheckbox.checked;
    this.characterRoot.traverse(obj => {
      if ((obj as any).isMesh) {
        const material = (obj as THREE.Mesh).material;
        const applyFlag = (mat: THREE.Material) => {
          if ('wireframe' in mat) {
            (mat as any).wireframe = flag;
            mat.needsUpdate = true;
          }
        };
        if (Array.isArray(material)) {
          material.forEach(applyFlag);
        } else if (material) {
          applyFlag(material);
        }
      }
    });
  }

  private updateBoundingBoxHelperState() {
    const enabled = this.showBoundingBoxCheckbox.checked;

    if (!enabled || !this.characterRoot) {
      if (this.boundingBoxHelper) {
        this.boundingBoxHelper.visible = false;
      }
      return;
    }

    if (!this.boundingBoxHelper) {
      this.boundingBoxHelper = new THREE.BoxHelper(this.characterRoot, 0xffff00);
      this.boundingBoxHelper.name = 'character_bbox_helper';
      this.scene.add(this.boundingBoxHelper);
    }

    this.boundingBoxHelper.visible = true;
    this.updateSkinnedMeshesBoundingBoxes();
    this.boundingBoxHelper.update();
  }

  private getModelSizeHint(): number {
    if (!this.characterRoot) return 100;
    const box = new THREE.Box3().setFromObject(this.characterRoot);
    const size = box.getSize(new THREE.Vector3());
    const maxSide = Math.max(size.x, size.y, size.z);
    return maxSide || 100;
  }

  private updateAxesHelperState() {
    const enabled = this.showAxesCheckbox.checked;

    if (!enabled || !this.characterRoot) {
      if (this.axesHelper) {
        this.axesHelper.visible = false;
      }
      return;
    }

    const size = this.getModelSizeHint() * 0.6 || 100;

    if (!this.axesHelper) {
      this.axesHelper = new THREE.AxesHelper(size);
      this.axesHelper.name = 'character_axes_helper';
      this.axesHelper.matrixAutoUpdate = true;
      this.scene.add(this.axesHelper);
    }

    this.axesHelper.visible = true;
  }

  private updateNormalsHelpersState() {
    const enabled = this.showNormalsCheckbox.checked;

    if (!enabled || !this.characterRoot) {
      this.normalsVisible = false;
      if (this.normalHelpers.length) {
        this.normalHelpers.forEach(helper => {
          helper.visible = false;
        });
      }
      return;
    }

    this.normalsVisible = true;

    if (!this.normalHelpers.length) {
      const size = this.getModelSizeHint() * 0.015;
      this.characterRoot.traverse(obj => {
        if ((obj as THREE.SkinnedMesh).isSkinnedMesh) {
          const helper = new SkinnedVertexNormalsHelper(obj as THREE.SkinnedMesh, size, 0x5ddcff);
          helper.visible = true;
          this.scene.add(helper);
          this.normalHelpers.push(helper);
        }
      });
    } else {
      this.normalHelpers.forEach(helper => {
        helper.visible = true;
      });
    }
  }

  private updateSkinnedMeshesBoundingBoxes() {
    if (!this.characterRoot) return;

    this.characterRoot.traverse(obj => {
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

  private exportGif() {
    if (this.isRecordingGif) return;
    if (!this.characterRoot) {
      alert('Load a character first.');
      return;
    }

    this.isRecordingGif = true;
    this.exportGifBtn.disabled = true;
    this.statusEl.textContent = 'Recording GIF…';

    const w = Math.max(16, Math.min(1024, parseInt(this.gifWidthInput?.value ?? '800', 10) || 800));
    const h = Math.max(16, Math.min(1024, parseInt(this.gifHeightInput?.value ?? '600', 10) || 600));

    const hasAnim = !!(this.currentAction && this.mixer);
    let clip: (THREE.AnimationClip & { userData?: { numAnimationKeys?: number } }) | null = null;
    let numKeys = 0;

    if (hasAnim && this.currentAction) {
      clip = this.currentAction.getClip() as THREE.AnimationClip & { userData?: { numAnimationKeys?: number } };
      numKeys = clip.userData?.numAnimationKeys ?? 0;
    }

    const requestedDelay = parseInt(this.gifDelayInput?.value ?? '', 10);
    const userDelay = !Number.isNaN(requestedDelay) && requestedDelay > 0 ? requestedDelay : null;
    const frameMultiplier = Math.max(1, Math.min(8,
      parseInt(this.gifFrameMultiplierInput?.value ?? '1', 10) || 1,
    ));

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
      this.statusEl.textContent = `Rendering GIF… ${(p * 100).toFixed(0)}%`;
    });

    const finish = (message: string) => {
      if (oldBg) this.scene.background = oldBg;
      else this.scene.background = null;
      if (this.gridHelper) this.gridHelper.visible = oldGridVisible;
      this.isRecordingGif = false;
      this.exportGifBtn.disabled = false;
      this.statusEl.textContent = message;
    };

    gif.on('finished', (blob: Blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `character_${w}x${h}.gif`;
      a.click();
      URL.revokeObjectURL(url);
      finish(`GIF saved (${w}×${h}).`);
    });

    gif.on('abort', () => finish('GIF recording aborted.'));

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
    const effectiveTimeScale = (this.currentAction as any)?._effectiveTimeScale ?? this.animationSpeed;
    const autoDelayMs = (clip.duration / Math.max(effectiveTimeScale, 0.0001)) / totalFrames * 1000;
    const frameDelay = Math.min(
      Math.max(userDelay ?? Math.round(autoDelayMs), 5),
      1000,
    );

    let frameIndex = 0;
    const captureFrame = () => {
      if (!this.mixer || !clip) return;
      if (frameIndex >= totalFrames) {
        gif.render();
        return;
      }

      const frame = frameIndex / totalFrames;
      this.currentAction!.time = frame * clip.duration;
      this.mixer.update(0);

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

      gif.addFrame(tmpCtx, { copy: true, delay: frameDelay });
      frameIndex += 1;
      requestAnimationFrame(captureFrame);
    };

    captureFrame();
  }

  private frameCharacter() {
    if (!this.characterRoot) return;
    const box = new THREE.Box3().setFromObject(this.characterRoot);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    this.characterRoot.position.sub(center);
    this.characterRoot.position.y += this.characterHeightOffset;
    this.characterOffset.copy(this.characterRoot.position);
    this.hasFramed = true;

    const maxSide = Math.max(size.x, size.y, size.z) || 200;
    this.camera.position.set(0, maxSide * 0.8, maxSide * 1.6);
    this.camera.lookAt(0, 0, 0);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }

  private clearCharacter() {
    if (!this.characterRoot) return;

    this.scene.remove(this.characterRoot);
    this.characterRoot.traverse(obj => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        mesh.geometry.dispose();
        const mat = mesh.material;
        if (Array.isArray(mat)) {
          mat.forEach(m => m.dispose());
        } else if (mat) {
          mat.dispose();
        }
      }
    });

    this.characterRoot = null;
    this.baseSkeleton = null;
    this.baseBindMatrix = null;
    this.mixer = null;
    this.currentAction = null;

    if (this.skeletonHelper) {
      this.scene.remove(this.skeletonHelper);
      (this.skeletonHelper.geometry as THREE.BufferGeometry).dispose();
      this.skeletonHelper = null;
    }
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

    this.meshRefs = [];
    if (this.blendingBox) {
      this.blendingBox.style.display = 'none';
    }
    if (this.blendingList) {
      this.blendingList.innerHTML = '';
    }

    this.itemShaderMaterials.clear();
  }

  private async ensurePlayerAnimations(): Promise<THREE.AnimationClip[] | null> {
    if (!this.baseSkeleton) return null;
    if (this.playerAnimations) return this.playerAnimations;

    const file = await this.readDataFile('Player/player.bmd');
    if (!file) {
      console.warn('[CharacterTestScene] Missing Player/player.bmd for animations');
      return null;
    }

    try {
      const clips = this.bmdLoader.loadAnimationsFrom(file.buffer, this.baseSkeleton);
      this.playerAnimations = clips;
      return clips;
    } catch (error) {
      console.warn('[CharacterTestScene] Failed to load player animations', error);
      return null;
    }
  }

  private animate = () => {
    requestAnimationFrame(this.animate);
    const delta = this.clock.getDelta();
    if (!this.isActive) return;

    if (this.characterRoot && this.isAutoRotating && !this.userIsInteracting && !this.isRecordingGif) {
      this.characterRoot.rotation.z += delta * 0.2;
    }

    if (this.mixer && !this.isRecordingGif) {
      this.mixer.update(delta);
    }

    if (this.itemShaderMaterials.size) {
      const time = performance.now() * 0.001;
      this.itemShaderMaterials.forEach(material => {
        material.uniforms.uTime.value = time;
      });
    }

    if (this.axesHelper && this.characterRoot && this.axesHelper.visible) {
      this.axesHelper.position.copy(this.characterRoot.position);
      this.axesHelper.quaternion.copy(this.characterRoot.quaternion);
      this.axesHelper.scale.copy(this.characterRoot.scale);
    }

    if (this.boundingBoxHelper && this.boundingBoxHelper.visible) {
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
  };
}
