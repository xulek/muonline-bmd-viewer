// src/main.ts
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { BMDLoader, convertTgaToDataUrl } from './bmd-loader';
import { convertOzjToDataUrl } from './ozj-loader';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import './style.css';

// == Widok ==
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

    // ### ZMIANA ### Przechowujemy stan aplikacji
    private bmdFile: File | null = null;
    private loadedGroup: THREE.Group | null = null;
    private requiredTextures: string[] = [];
    private exportBtn!: HTMLButtonElement;        // ← nowy przycisk
    private textureLoader = new THREE.TextureLoader();

    // ### NOWE ### Do obrotu
    private isAutoRotating = true;
    private userIsInteracting = false;

    // ### NOWE ### Elementy diagnostyczne
    private diagActionsCountEl!: HTMLElement;      // liczba klipów / akcji
    private diagAnimationKeysEl!: HTMLElement;     // klatki w aktywnym klipie
    private diagAnimationsCountEl!: HTMLElement;
    private diagCurrentFrameEl!: HTMLElement;
    private diagBonesCountEl!: HTMLElement;
    private diagMeshesCountEl!: HTMLElement;
    private diagFpsEl!: HTMLElement;

    private lastFrameTime = 0;
    private frameCount = 0;
    private fps = 0;

    // --- Blokada klatek ---
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
    // THREE.JS (bez zmian)
    //----------------------------------------------------------
    private initThree() {
        console.groupCollapsed('%c[App] initThree()', 'color:#0f0');
        const container = document.getElementById('canvas-container');
        if (!container) throw new Error('Brak #canvas-container w HTML!');
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

        // ### NOWE ### Pauzowanie obrotu podczas interakcji
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
    // UI - Zmodyfikowane
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
            speedLabel.textContent = `Prędkość: ${speed.toFixed(2)}x`;
            this.setAnimationSpeed(speed);
        });
        speedLabel.textContent = `Prędkość: ${parseFloat(speedSlider.value).toFixed(2)}x`;

        const status = document.getElementById('status')!;
        status.textContent = 'Oczekiwanie na plik BMD…';

        this.initScaleSlider();

        // ### NOWE ### Kontrolka obrotu
        const autoRotateCheckbox = document.getElementById('auto-rotate-checkbox') as HTMLInputElement;
        autoRotateCheckbox.addEventListener('change', (e) => {
            this.isAutoRotating = (e.target as HTMLInputElement).checked;
        });
        this.isAutoRotating = autoRotateCheckbox.checked;

        /* KOLOR TŁA */
        const bgInput = document.getElementById('bg-color-input') as HTMLInputElement;
        bgInput.addEventListener('input', e => {
            const c = (e.target as HTMLInputElement).value;
            this.scene.background = new THREE.Color(c);
            (document.getElementById('canvas-container') as HTMLElement).style.backgroundColor = c;
        });

        /* JASNOŚĆ */
        const brightSlider = document.getElementById('brightness-slider') as HTMLInputElement;
        const brightLabel  = document.getElementById('brightness-label')!;
        brightSlider.addEventListener('input', e => {
            const v = parseFloat((e.target as HTMLInputElement).value);
            brightLabel.textContent = `Jasność: ${v.toFixed(2)}×`;
            this.setBrightness(v);
        });
        brightLabel.textContent = 'Jasność: 1.00×';

        // ### NOWE ### Elementy diagnostyczne
        this.diagActionsCountEl    = document.getElementById('diag-actions-count')!;
        this.diagAnimationKeysEl   = document.getElementById('diag-animation-keys')!;
        this.diagCurrentFrameEl    = document.getElementById('diag-current-frame')!;
        this.diagBonesCountEl      = document.getElementById('diag-bones-count')!;
        this.diagMeshesCountEl     = document.getElementById('diag-meshes-count')!;
        this.diagFpsEl             = document.getElementById('diag-fps')!;        

        this.updateDiagnosticInfo(0); // Ustaw początkowe wartości

        // ---------- BLOKADA KLATEK ----------
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
            // pobierz bieżącą klatkę z diagnostyki
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

        // === Pokaż / ukryj szkielet =========================================
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
        scaleLabel.textContent = `Skala: ${scale.toFixed(2)}x`;                       
       this.setModelScale(scale);                                                     
        });                                                                               
        scaleLabel.textContent = `Skala: ${parseFloat(scaleSlider.value).toFixed(2)}x`;   
        }

       private setModelScale(scale: number) {                                                  
         if (this.loadedGroup) {                                                             
          this.loadedGroup.scale.set(scale, scale, scale);                                
          }                                                                                   
        }
    
    private handleBmdFile = (file: File) => {
        console.log(`[App] handleBmdFile("${file.name}")`);
        this.bmdFile = file;
        document.querySelector('#bmd-drop-zone p')!.textContent = `Wybrano: ${file.name}`;
        this.loadAndDisplayModel();
    }

    /** Ładuje każdą teksturę z listy */
    private handleMultipleTextureFiles = (files: FileList | File[]) => {
        Array.from(files).forEach(f => this.loadAndApplyTexture(f));
    }

    private handleTextureFile = (file: File) => {
        console.log(`[App] handleTextureFile("${file.name}")`);
        this.loadAndApplyTexture(file);
    }

    private exportToGLB() {
        if (!this.loadedGroup) {
            alert('Najpierw wczytaj model BMD.');
            return;
        }
        
        const exporter = new GLTFExporter();
        
        // Ustawienia: zapis binarny .glb, osadź obrazy, dołącz animacje
        const options = {
            binary: true,
            animations: this.loadedGroup.animations,
            embedImages: true,
            // poniższe zwykle nie trzeba zmieniać:
            // trs:false, onlyVisible:true, truncateDrawRange:false,
            // forceIndices:false, forcePowerOfTwoTextures:false
        };
        
        exporter.parse(
            this.loadedGroup,
            (result: ArrayBuffer | { [key: string]: any }) => {
            // binary:true => dostaniemy ArrayBuffer
            const glbBuffer = result as ArrayBuffer;
            const blob = new Blob([glbBuffer], { type: 'model/gltf-binary' });
        
            // Przygotuj nazwę pliku: "<nazwaModelu>_<yyyyMMdd_HHmmss>.glb"
            const nameBase =
                (this.loadedGroup!.name || 'model').replace(/[^a-z0-9_-]/gi, '_');
            const stamp = new Date()
                .toISOString()
                .replace(/[:T]/g, '')
                .split('.')[0]; // 20250702_143512
            const fileName = `${nameBase}_${stamp}.glb`;
        
            // „Sztuczny” klik w <a download> – zero zależności
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
            URL.revokeObjectURL(link.href);
        
            console.log(`✔️  Zapisano ${fileName} (${(blob.size / 1024).toFixed(1)} KB)`);
            },
            (error) => {
            console.error('❌ GLTFExporter error:', error);
            alert('Błąd podczas eksportu. Sprawdź konsolę.');
            },
            options
        );
    }

    //----------------------------------------------------------
    // ŁADOWANIE MODELU - Zmodyfikowane
    //----------------------------------------------------------
    private async loadAndDisplayModel() {
        if (!this.bmdFile) return;
        const statusEl = document.getElementById('status')!;
        statusEl.textContent = 'Ładowanie modelu…';
        console.groupCollapsed('%c[App] loadAndDisplayModel()', 'color:yellow');
        console.time('loadAndDisplayModel');
        // Reset stanu
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
            statusEl.textContent = `Załadowano: ${group.name} (animacje: ${group.animations.length})`;
            this.updateTextureUI();
            this.updateDiagnosticInfo();

            // --- skeleton helper ---
            if (skeletonHelper) {
                this.scene.remove(skeletonHelper);
                (skeletonHelper.geometry as THREE.BufferGeometry).dispose();
            }
            skeletonHelper = new THREE.SkeletonHelper(group);
            skeletonHelper.visible = showSkeletonEl.checked;
            // Opcjonalnie: skeletonHelper.material.color.set(0x00ff00);
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
            statusEl.textContent = `Błąd: ${(err as Error).message}`;
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

        // mapujemy czytelną nazwę → stała three.js
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

            // ustaw początkową wartość
            const cur = Object.entries(modes).find(([,v]) => v === (mesh.material as THREE.Material).blending);
            select.value = cur ? cur[0] : 'Normal';

            // reakcja na zmianę
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

        // pokaż sekcję dopiero gdy mamy coś do wyświetlenia
        (box as HTMLElement).style.display = this.meshRefs.length ? 'block' : 'none';
    }
    //----------------------------------------------------------
    // ### NOWA METODA ### Czyszczenie sceny
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
        if (this.exportBtn) this.exportBtn.disabled = true;  // ← zablokuj
        this.updateDiagnosticInfo(); // Aktualizuj po wyczyszczeniu sceny
    }
    
    //----------------------------------------------------------
    // ### NOWA METODA ### Aktualizacja UI tekstur
    //----------------------------------------------------------
    private updateTextureUI() {
        const textureControls = document.getElementById('texture-controls')!;
        const textureInfo = document.getElementById('texture-info-text')!;
        
        if (this.requiredTextures.length > 0 && this.requiredTextures[0]) {
            textureInfo.textContent = this.requiredTextures.join(', ');
            textureControls.style.display = 'block';
        } else {
            textureInfo.textContent = "Ten model nie wymaga tekstur.";
            textureControls.style.display = 'block';
            document.getElementById('texture-drop-zone')!.style.display = 'none';
        }
    }

  // Poprawiona funkcja loadAndApplyTexture w main.ts

    private async loadAndApplyTexture(file: File) {
        if (!this.loadedGroup) {
        console.warn('Model niezaładowany – brak tekstur.');
        return;
        }
    
        const status = document.getElementById('status')!;
        status.textContent = `Ładowanie: ${file.name}…`;
        
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
        tex.name  = file.name;                  // ← potrzebne przy zapisie
    
        // POPRAWKA: Lepsze dopasowywanie nazw plików
        let applied = false;
    
        const equivExt: Record<string,string> = { jpg:'ozj', ozj:'jpg', tga:'ozt', ozt:'tga' };

        const fileName  = file.name.toLowerCase();
        const fileBase  = fileName.replace(/\.[^.]+$/, '');        // bez kropki i rozszerzenia
        const fileExt   = fileName.split('.').pop()!;
        
        function normalizeWanted(path: string): { base:string; ext:string } {
            const name = path.split(/[\\/]/).pop()!.toLowerCase(); // “baron01.jpg”
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
            
            // Sprawdzamy różne warianty dopasowania:
            // 1. Dokładna nazwa pliku
            // 2. Nazwa bazowa (bez rozszerzenia)  
            // 3. Czy wymagana ścieżka kończy się naszą nazwą
            // 4. Czy nasza nazwa zawiera wymaganą nazwę bazową
            const { base:wantedBase, ext:wantedExt } = normalizeWanted(wantedPath);

            const extMatch =
                  wantedExt === fileExt                // identyczne
               || equivExt[wantedExt] === fileExt;     // równoważne (.jpg↔.ozj, .tga↔.ozt)
            
            const isMatch = extMatch && wantedBase === fileBase;  // baza musi być 1-do-1
                
            if (isMatch) {
                const mat = (obj as THREE.Mesh).material as THREE.MeshPhongMaterial;
                
                // Sprawdzamy czy materiał ma już teksturę
                if (mat.map) {
                console.log(`  Replacing existing texture on mesh`);
                mat.map.dispose(); // Zwolnienie starej tekstury
                }
                
                mat.map = tex;  
                mat.color.set(0xffffff);  // Resetujemy kolor do białego
                mat.needsUpdate = true;
                applied = true;
                
                console.log(`  ✓ Applied "${file.name}" to mesh with texture: "${wantedPath}"`);
            }
            }
        });
        
        // Jeśli nie znaleziono dopasowania, wyświetlmy dostępne opcje
        if (!applied) {
            console.log('❌ No matches found. Available texture paths:');
            this.loadedGroup.traverse(obj => {
            if ((obj as THREE.Mesh).isMesh && obj.userData.texturePath) {
                console.log(`  - ${obj.userData.texturePath}`);
            }
            });
        }
    
        status.textContent = applied
            ? `Tekstura „${file.name}" załadowana.`
            : `Nie znaleziono pasującego mesha dla „${file.name}". Sprawdź konsolę.`;
    
        } catch (e) {
        console.error('Texture load error:', e);
        status.textContent = `Błąd: ${(e as Error).message}`;
        }
    }

    /** Zapisuje wszystkie unikalne mapy materiałów do plików PNG */
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
      ? `Wyeksportowano ${exported.size} tekstur(y).`
      : 'Brak załadowanych tekstur do eksportu.';
}

    //----------------------------------------------------------
    // Ustawianie prędkości i animacje (bez większych zmian)
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
            animBox.textContent = 'Brak animacji w tym modelu.';
            return;
        }
    
        model.animations.forEach((clip, i) => {
            const btn = document.createElement('button');
    
            /* -------- DODAJ TĘ LINIĘ -------- */
            btn.classList.add('animation-btn');
            /* -------------------------------- */
    
            btn.textContent = `Animacja ${i}`;
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
        // pokaż blokadę tylko, jeśli klip ma klatki
        const lockBox   = document.getElementById('frame-lock-controls')!;
        lockBox.style.display =
            model.animations.length && (model.animations[0] as any).userData?.numAnimationKeys
                ? 'block' : 'none';

        this.lockFrameCheckbox.checked = false;
        this.isFrameLocked = false;
        this.updateDiagnosticInfo(); // Aktualizuj po załadowaniu animacji
    }

    private animate = (time: DOMHighResTimeStamp) => {
        requestAnimationFrame(this.animate);
        const delta = this.clock.getDelta();

        // ### NOWE ### Logika obrotu
        if (this.loadedGroup && this.isAutoRotating && !this.userIsInteracting) {
            this.loadedGroup.rotation.z += delta * 0.2;
        }

        if (this.mixer) {
            if (this.isFrameLocked) {
                this.applyLockedFrame();   // wymusza pozę i nie przesuwa czasu
            } else {
                this.mixer.update(delta);  // normalny przebieg animacji
            }
        }
        this.controls.update();
        this.renderer.render(this.scene, this.camera);

        // ### NOWE ### Aktualizacja diagnostyki w pętli
        this.updateDiagnosticInfo(time);
    };

    /** Ustaw akcję dokładnie na this.lockedFrame i odśwież pozę */
    private applyLockedFrame() {
        if (!this.currentAction) return;

        const clip = this.currentAction.getClip() as THREE.AnimationClip &
                     { userData?: { numAnimationKeys?: number } };

        const numKeys = clip.userData?.numAnimationKeys ?? 0;
        if (!numKeys) return;

        // upewnij się, że numer mieści się w zakresie
        const frame = Math.min(Math.max(this.lockedFrame, 0), numKeys - 1);

        // konwersja klatki na czas (sekundy)
        this.currentAction.time = frame / numKeys * clip.duration;
        this.mixer!.update(0);      // odśwież pozę natychmiast
    }

    // ### NOWA METODA ### Aktualizacja informacji diagnostycznych
    private updateDiagnosticInfo(time: DOMHighResTimeStamp = 0) {

        /*  A) LICZBA AKCJI  */
        this.diagActionsCountEl.textContent =
            this.loadedGroup?.animations.length.toString() || '0';
      
        /*  B) JEŚLI JEST ODTWARZANA AKCJA -> KLUCZE I AKTUALNA KLATKA  */
        if (this.currentAction) {
            /* dane z klipu */
            const clip = this.currentAction.getClip() as THREE.AnimationClip &
                         { userData?: { numAnimationKeys?: number } };
      
            const numKeys = clip.userData?.numAnimationKeys ?? 0;
            this.diagAnimationKeysEl.textContent = numKeys.toString();
            
            if (numKeys > 0) {
                const localTime  = (this.currentAction.time % clip.duration + clip.duration) % clip.duration;
                const progress   = localTime / clip.duration;      // od 0 do <1
                const currentFrame = this.isFrameLocked
                    ? this.lockedFrame
                    : Math.floor(localTime / clip.duration * numKeys);
                this.diagCurrentFrameEl.textContent = currentFrame.toString();
            } else {
                this.diagCurrentFrameEl.textContent = 'N/A';
            }
        } else {
            /* brak aktywnej animacji */
            this.diagAnimationKeysEl.textContent = '0';
            this.diagCurrentFrameEl.textContent  = 'N/A';
        }

        // Liczba kości
        let boneCount = 0;
        if (this.loadedGroup) {
            this.loadedGroup.traverse(obj => {
                if ((obj as any).isBone) {
                    boneCount++;
                }
            });
        }
        this.diagBonesCountEl.textContent = boneCount.toString();

        // Liczba meshy
        let meshCount = 0;
        if (this.loadedGroup) {
            this.loadedGroup.traverse(obj => {
                if ((obj as THREE.Mesh).isMesh) {
                    meshCount++;
                }
            });
        }
        this.diagMeshesCountEl.textContent = meshCount.toString();

        // FPS
        this.frameCount++;
        const elapsed = time - this.lastFrameTime;
        if (elapsed >= 1000) { // Aktualizuj co sekundę
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
