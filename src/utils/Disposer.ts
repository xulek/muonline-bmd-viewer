import * as THREE from 'three';

/**
 * Centralized Three.js resource cleanup.
 *
 * Three.js does not automatically release GPU resources when an Object3D is
 * removed from a scene. This helper disposes geometries, materials, textures,
 * shader-uniform textures and skeleton bone textures exactly once.
 */
export class Disposer {
  static disposeTexture(texture: THREE.Texture | null | undefined): void {
    texture?.dispose();
  }

  static disposeTextureCache(cache: Map<string, THREE.Texture>): void {
    const disposed = new Set<THREE.Texture>();
    cache.forEach(texture => {
      if (!disposed.has(texture)) {
        texture.dispose();
        disposed.add(texture);
      }
    });
    cache.clear();
  }

  private static collectTextures(value: unknown, output: Set<THREE.Texture>, visited: Set<object>): void {
    if (value instanceof THREE.Texture) {
      output.add(value);
      return;
    }
    if (!value || typeof value !== 'object' || visited.has(value as object)) {
      return;
    }

    visited.add(value as object);

    if (Array.isArray(value)) {
      value.forEach(item => this.collectTextures(item, output, visited));
      return;
    }

    // Uniform objects commonly store their payload in a `value` property.
    const record = value as Record<string, unknown>;
    if ('value' in record) {
      this.collectTextures(record.value, output, visited);
    }
  }

  private static collectMaterialTextures(material: THREE.Material, output: Set<THREE.Texture>): void {
    const visited = new Set<object>();
    const record = material as unknown as Record<string, unknown>;

    for (const [key, value] of Object.entries(record)) {
      if (key === 'uniforms') continue;
      if (value instanceof THREE.Texture) {
        output.add(value);
      }
    }

    if (material instanceof THREE.ShaderMaterial) {
      for (const uniform of Object.values(material.uniforms)) {
        this.collectTextures(uniform, output, visited);
      }
    }
  }

  static disposeMaterial(
    material: THREE.Material | null | undefined,
    disposedMaterials: Set<THREE.Material> = new Set(),
    disposedTextures: Set<THREE.Texture> = new Set(),
  ): void {
    if (!material || disposedMaterials.has(material)) return;

    const textures = new Set<THREE.Texture>();
    this.collectMaterialTextures(material, textures);
    textures.forEach(texture => {
      if (!disposedTextures.has(texture)) {
        texture.dispose();
        disposedTextures.add(texture);
      }
    });

    material.dispose();
    disposedMaterials.add(material);
  }

  static disposeGeometry(
    geometry: THREE.BufferGeometry | null | undefined,
    disposedGeometries: Set<THREE.BufferGeometry> = new Set(),
  ): void {
    if (!geometry || disposedGeometries.has(geometry)) return;
    geometry.dispose();
    disposedGeometries.add(geometry);
  }

  static disposeObject3D(object: THREE.Object3D | null | undefined, removeFromParent = true): void {
    if (!object) return;

    const disposedGeometries = new Set<THREE.BufferGeometry>();
    const disposedMaterials = new Set<THREE.Material>();
    const disposedTextures = new Set<THREE.Texture>();
    const disposedSkeletons = new Set<THREE.Skeleton>();

    const minimapGeometry = object.userData?.minimapGeometry;
    if (minimapGeometry instanceof THREE.BufferGeometry) {
      this.disposeGeometry(minimapGeometry, disposedGeometries);
    }

    object.traverse(child => {
      const mesh = child as THREE.Mesh;
      if (mesh.geometry instanceof THREE.BufferGeometry) {
        this.disposeGeometry(mesh.geometry, disposedGeometries);
      }

      const material = mesh.material;
      if (Array.isArray(material)) {
        material.forEach(item => this.disposeMaterial(item, disposedMaterials, disposedTextures));
      } else if (material instanceof THREE.Material) {
        this.disposeMaterial(material, disposedMaterials, disposedTextures);
      }

      const skinnedMesh = child as THREE.SkinnedMesh;
      if (skinnedMesh.isSkinnedMesh && skinnedMesh.skeleton && !disposedSkeletons.has(skinnedMesh.skeleton)) {
        const boneTexture = skinnedMesh.skeleton.boneTexture;
        if (boneTexture && !disposedTextures.has(boneTexture)) {
          boneTexture.dispose();
          disposedTextures.add(boneTexture);
        }
        skinnedMesh.skeleton.dispose();
        disposedSkeletons.add(skinnedMesh.skeleton);
      }
    });

    if (removeFromParent && object.parent) {
      object.parent.remove(object);
    }
  }

  static disposeShaderMaterials(materials: Set<THREE.ShaderMaterial>, disposeTextures = false): void {
    if (disposeTextures) {
      const disposedMaterials = new Set<THREE.Material>();
      const disposedTextures = new Set<THREE.Texture>();
      materials.forEach(material => this.disposeMaterial(material, disposedMaterials, disposedTextures));
    } else {
      materials.forEach(material => material.dispose());
    }
    materials.clear();
  }

  static disposeMixer(mixer: THREE.AnimationMixer | null, root?: THREE.Object3D | null): THREE.AnimationMixer | null {
    if (!mixer) return null;
    mixer.stopAllAction();
    if (root) {
      mixer.uncacheRoot(root);
    }
    return null;
  }

  static disposeObjectArray(objects: THREE.Object3D[]): void {
    objects.forEach(object => this.disposeObject3D(object));
    objects.length = 0;
  }
}
