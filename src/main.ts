// src/main.ts
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { BMDLoader, convertTgaToDataUrl } from './bmd-loader';
import { convertOzjToDataUrl } from './ozj-loader';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
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
    private directionalLight!: THREE.DirectionalLight;
    private mixer: THREE.AnimationMixer | null = null;
    
    private currentAction: THREE.AnimationAction | null = null;

    // ### CHANGE ### We store the application state
    private bmdFile: File | null = null;
    private loadedGroup: THREE.Group | null = null;
    private requiredTextures: string[] = [];
    private exportBtn!: HTMLButtonElement;        // ← new button
    private textureLoader = new THREE.TextureLoader();

    // ### NEW ### For rotation
    private isAutoRotating = true;
    private userIsInteracting = false;

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

    constructor() {
        console.log('%c[App] constructor', 'color:#0f0');
        this.initThree();
        this.initUI();
        this.animate(performance.now());
    }

    //----------------------------------------------------------
    // THREE.JS (no changes)
    //----------------------------------------------------------
    private initThree() {
        console.groupCollapsed('%c[App] initThree()', 'color:#0f0');
        const container = document.getElementById('canvas-container');
        if (!container) throw new Error('#canvas-container not found in HTML!');
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x1a1a1a);
        this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 10000);
        this.camera.position.set(0, 200, 400);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);
        window.addEventListener('resize', () => {
            this.camera.aspect = container.clientWidth / container.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(container.clientWidth, container.clientHeight);
        });
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;

        // ### NEW ### Pause rotation during interaction
        this.controls.addEventListener('start', () => { this.userIsInteracting = true; });
        this.controls.addEventListener('end', () => { this.userIsInteracting = false; });

        this.ambientLight   = new THREE.AmbientLight(0xffffff, 0.7);
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        this.directionalLight.position.set(5, 10, 7.5);

        this.scene.add(this.ambientLight);
        this.scene.add(this.directionalLight);
        this.scene.add(new THREE.GridHelper(500, 10));
        console.groupEnd();
    }

    //----------------------------------------------------------
    // UI - Modified
    //----------------------------------------------------------
    private initUI() {
        console.groupCollapsed('%c[App] initUI()', 'color:#0f0');

        const bmdZone = document.getElementById('bmd-drop-zone')!;
        const bmdInput = document.getElementById('bmd-file-input') as HTMLInputElement;
        const texZone = document.getElementById('texture-drop-zone')!;
        const texInput = document.getElementById('texture-file-input') as HTMLInputElement;
        this.exportBtn = document.getElementById('export-textures-btn') as HTMLButtonElement;
        this.exportBtn.addEventListener('click', () => this.exportTextures());
        
        const speedSlider = document.getElementById('speed-slider') as HTMLInputElement;
        const speedLabel = document.getElementById('speed-label')!;

        const exportBtn = document.getElementById('export-glb-btn') as HTMLButtonElement;
        exportBtn.addEventListener('click', () => this.exportToGLB());
        
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
            this.scene.background = new THREE.Color(c);
            (document.getElementById('canvas-container') as HTMLElement).style.backgroundColor = c;
        });

        /* BRIGHTNESS */
        const brightSlider = document.getElementById('brightness-slider') as HTMLInputElement;
        const brightLabel  = document.getElementById('brightness-label')!;
        brightSlider.addEventListener('input', e => {
            const v = parseFloat((e.target as HTMLInputElement).value);
            brightLabel.textContent = `Brightness: ${v.toFixed(2)}×`;
            this.setBrightness(v);
        });
        brightLabel.textContent = 'Brightness: 1.00×';

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

        setupDropZone(bmdZone, bmdInput, files => this.handleBmdFile(files[0]));
        setupDropZone(texZone, texInput, files => this.handleMultipleTextureFiles(files));

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

        console.groupEnd();
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
          }
        }
    
    private handleBmdFile = (file: File) => {
        console.log(`[App] handleBmdFile("${file.name}")`);
        this.bmdFile = file;
        document.querySelector('#bmd-drop-zone p')!.textContent = `Selected: ${file.name}`;
        this.loadAndDisplayModel();
    }

    /** Loads every texture from the list */
    private handleMultipleTextureFiles = (files: FileList | File[]) => {
        Array.from(files).forEach(f => this.loadAndApplyTexture(f));
    }

    private handleTextureFile = (file: File) => {
        console.log(`[App] handleTextureFile("${file.name}")`);
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
        
            console.log(`✔️  Saved ${fileName} (${(blob.size / 1024).toFixed(1)} KB)`);
            },
            (error) => {
            console.error('❌ GLTFExporter error:', error);
            alert('Error during export. Check the console.');
            },
            options
        );
    }

    //----------------------------------------------------------
    // MODEL LOADING - Modified
    //----------------------------------------------------------
    private async loadAndDisplayModel() {
        if (!this.bmdFile) return;
        const statusEl = document.getElementById('status')!;
        statusEl.textContent = 'Loading model…';
        console.groupCollapsed('%c[App] loadAndDisplayModel()', 'color:yellow');
        console.time('loadAndDisplayModel');
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
            this.setupAnimations(group);
            statusEl.textContent = `Loaded: ${group.name} (animations: ${group.animations.length})`;
            this.updateTextureUI();
            this.updateDiagnosticInfo();

            // --- skeleton helper ---
            if (skeletonHelper) {
                this.scene.remove(skeletonHelper);
                (skeletonHelper.geometry as THREE.BufferGeometry).dispose();
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

        } catch (err) {
            console.error('‼️ loader.load() ERROR', err);
            statusEl.textContent = `Error: ${(err as Error).message}`;
        } finally {
            console.timeEnd('loadAndDisplayModel');
            console.groupEnd();
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
            row.style.display = 'flex';
            row.style.alignItems = 'center';
            row.style.gap = '0.5rem';
            row.style.marginBottom = '0.75rem';

            const label = document.createElement('span');
            label.textContent = mesh.name || `Mesh ${idx}`;
            label.style.flex = '1';

            const select = document.createElement('select');
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
            this.mixer = null;
            this.currentAction = null;
            document.getElementById('animations-container')!.innerHTML = '';
        }
        if (this.exportBtn) this.exportBtn.disabled = true;
        this.updateDiagnosticInfo();
    }
    
    //----------------------------------------------------------
    // ### NEW METHOD ### Update texture UI
    //----------------------------------------------------------
    private updateTextureUI() {
        const textureControls = document.getElementById('texture-controls')!;
        const textureInfo = document.getElementById('texture-info-text')!;
        
        if (this.requiredTextures.length > 0 && this.requiredTextures[0]) {
            textureInfo.textContent = this.requiredTextures.join(', ');
            textureControls.style.display = 'block';
        } else {
            textureInfo.textContent = "This model does not require textures.";
            textureControls.style.display = 'block';
            document.getElementById('texture-drop-zone')!.style.display = 'none';
        }
    }

  // Corrected loadAndApplyTexture function in main.ts

    private async loadAndApplyTexture(file: File) {
        if (!this.loadedGroup) {
        console.warn('Model not loaded - no textures.');
        return;
        }
    
        const status = document.getElementById('status')!;
        status.textContent = `Loading: ${file.name}…`;
        
        console.log(`=== TEXTURE LOADING: ${file.name} ===`);
        console.log('Required textures:', this.requiredTextures);
    
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
    
        let applied = false;
    
        const equivExt: Record<string,string> = { jpg:'ozj', ozj:'jpg', tga:'ozt', ozt:'tga' };

        const fileName  = file.name.toLowerCase();
        const fileBase  = fileName.replace(/\.[^.]+$/, '');
        const fileExt   = fileName.split('.').pop()!;
        
        function normalizeWanted(path: string): { base:string; ext:string } {
            const name = path.split(/[\\/]/).pop()!.toLowerCase();
            const ext  = name.split('.').pop()!;
            const base = name.replace(/\.[^.]+$/, '');
            return { base, ext };
        }
            
        console.log(`Looking for matches for: "${fileName}" (base: "${fileBase}")`);
            
        this.loadedGroup.traverse(obj => {
            if ((obj as THREE.Mesh).isMesh && obj.userData.texturePath) {
            const wantedPath = obj.userData.texturePath as string;
            const wantedLower = wantedPath.toLowerCase();
            const wantedBaseName = wantedPath.split('/').pop()?.toLowerCase().split('.')[0] || '';
            
            console.log(`  Checking mesh texture: "${wantedPath}" (base: "${wantedBaseName}")`);
            
            const { base:wantedBase, ext:wantedExt } = normalizeWanted(wantedPath);

            const extMatch =
                  wantedExt === fileExt
               || equivExt[wantedExt] === fileExt;
            
            const isMatch = extMatch && wantedBase === fileBase;
                
            if (isMatch) {
                const mat = (obj as THREE.Mesh).material as THREE.MeshPhongMaterial;
                
                if (mat.map) {
                console.log(`  Replacing existing texture on mesh`);
                mat.map.dispose();
                }
                
                mat.map = tex;
                mat.color.set(0xffffff);
                mat.needsUpdate = true;
                applied = true;
                
                console.log(`  ✓ Applied "${file.name}" to mesh with texture: "${wantedPath}"`);
            }
            }
        });
        
        if (!applied) {
            console.log('❌ No matches found. Available texture paths:');
            this.loadedGroup.traverse(obj => {
            if ((obj as THREE.Mesh).isMesh && obj.userData.texturePath) {
                console.log(`  - ${obj.userData.texturePath}`);
            }
            });
        }
    
        status.textContent = applied
            ? `Texture "${file.name}" loaded.`
            : `No matching mesh found for "${file.name}". Check the console.`;
    
        } catch (e) {
        console.error('Texture load error:', e);
        status.textContent = `Error: ${(e as Error).message}`;
        }
    }

    /** Saves all unique material maps to PNG files */
private exportTextures() {
  if (!this.loadedGroup) return;

  const exported = new Set<THREE.Texture>();

  this.loadedGroup.traverse(obj => {
    if ((obj as THREE.Mesh).isMesh) {
      const mat = (obj as THREE.Mesh).material as THREE.MeshPhongMaterial;
      if (mat.map && !exported.has(mat.map) && (mat.map.image as any)?.width) {
        const img: HTMLImageElement|HTMLCanvasElement|ImageBitmap = mat.map.image;
        const cvs = Object.assign(document.createElement('canvas'),
                                  { width: (img as any).width, height: (img as any).height });
        cvs.getContext('2d')!.drawImage(img as any, 0, 0);

        cvs.toBlob(blob => {
          if (!blob) return;
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          const base = ((mat.map && mat.map.name) ? mat.map.name : 'texture').replace(/\.[^.]+$/, '');
          a.download = `${base}.png`;
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }, 'image/png');

        exported.add(mat.map);
      }
    }
  });

  const st = document.getElementById('status')!;
  st.textContent = exported.size
      ? `Exported ${exported.size} texture(s).`
      : 'No loaded textures to export.';
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
    
        model.animations.forEach((clip, i) => {
            const btn = document.createElement('button');
    
            btn.classList.add('animation-btn');
    
            btn.textContent = `Animation ${i}`;
            btn.onclick = () => {
                this.mixer!.stopAllAction();
                this.currentAction = this.mixer!.clipAction(clip);
                const currentSpeed = parseFloat(speedSlider.value);
                this.currentAction.setEffectiveTimeScale(currentSpeed);
                this.currentAction.reset().play();
                animBox.querySelectorAll('button').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            };
            animBox.appendChild(btn);
        });

        if (model.animations.length > 0) {
            (animBox.querySelector('button') as HTMLButtonElement)?.click();
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

        if (this.loadedGroup && this.isAutoRotating && !this.userIsInteracting) {
            this.loadedGroup.rotation.z += delta * 0.2;
        }

        if (this.mixer) {
            if (this.isFrameLocked) {
                this.applyLockedFrame();
            } else {
                this.mixer.update(delta);
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
      this.renderer.toneMappingExposure = value;
      if (this.ambientLight)    this.ambientLight.intensity   = 0.7 * value;
      if (this.directionalLight) this.directionalLight.intensity = 1.5 * value;
    }
}

new App();