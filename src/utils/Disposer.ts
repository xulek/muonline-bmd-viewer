import * as THREE from 'three';

/**
 * Utility class for proper disposal of Three.js resources to prevent memory leaks.
 */
export class Disposer {
  /**
   * Disposes a single texture and removes it from memory.
   */
  static disposeTexture(texture: THREE.Texture | null | undefined): void {
    if (!texture) return;
    texture.dispose();
  }

  /**
   * Disposes all textures in a cache and clears the cache.
   */
  static disposeTextureCache(cache: Map<string, THREE.Texture>): void {
    cache.forEach(texture => {
      texture.dispose();
    });
    cache.clear();
  }

  /**
   * Disposes a material and all its associated textures.
   */
  static disposeMaterial(material: THREE.Material | null | undefined): void {
    if (!material) return;

    // Dispose textures used by the material
    const mat = material as any;
    if (mat.map instanceof THREE.Texture) this.disposeTexture(mat.map);
    if (mat.normalMap instanceof THREE.Texture) this.disposeTexture(mat.normalMap);
    if (mat.alphaMap instanceof THREE.Texture) this.disposeTexture(mat.alphaMap);
    if (mat.emissiveMap instanceof THREE.Texture) this.disposeTexture(mat.emissiveMap);
    if (mat.roughnessMap instanceof THREE.Texture) this.disposeTexture(mat.roughnessMap);
    if (mat.metalnessMap instanceof THREE.Texture) this.disposeTexture(mat.metalnessMap);

    material.dispose();
  }

  /**
   * Disposes a geometry.
   */
  static disposeGeometry(geometry: THREE.BufferGeometry | null | undefined): void {
    if (!geometry) return;
    geometry.dispose();
  }

  /**
   * Recursively disposes an Object3D and all its children, including materials and geometries.
   */
  static disposeObject3D(object: THREE.Object3D): void {
    if (!object) return;

    // Traverse all children first
    object.traverse((child) => {
      // Dispose geometry
      if ((child as THREE.Mesh).geometry) {
        this.disposeGeometry((child as THREE.Mesh).geometry);
      }

      // Dispose material(s)
      if ((child as THREE.Mesh).material) {
        const material = (child as THREE.Mesh).material;
        if (Array.isArray(material)) {
          material.forEach(mat => this.disposeMaterial(mat));
        } else {
          this.disposeMaterial(material);
        }
      }
    });

    // Remove from parent
    if (object.parent) {
      object.parent.remove(object);
    }
  }

  /**
   * Disposes a set of shader materials.
   */
  static disposeShaderMaterials(materials: Set<THREE.ShaderMaterial>): void {
    materials.forEach(mat => mat.dispose());
    materials.clear();
  }

  /**
   * Properly stops and cleans up an AnimationMixer.
   */
  static disposeMixer(mixer: THREE.AnimationMixer | null): THREE.AnimationMixer | null {
    if (!mixer) return null;
    mixer.stopAllAction();
    return null;
  }

  /**
   * Disposes an array of Object3D instances.
   */
  static disposeObjectArray(objects: THREE.Object3D[]): void {
    objects.forEach(obj => this.disposeObject3D(obj));
    objects.length = 0;
  }
}
