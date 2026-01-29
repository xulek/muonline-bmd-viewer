import * as THREE from 'three';
import { Disposer } from '../src/utils/Disposer';

describe('Disposer', () => {
  describe('disposeTexture', () => {
    it('should dispose a texture', () => {
      const texture = new THREE.Texture();
      const disposeSpy = jest.spyOn(texture, 'dispose');

      Disposer.disposeTexture(texture);

      expect(disposeSpy).toHaveBeenCalled();
    });

    it('should handle null textures gracefully', () => {
      expect(() => Disposer.disposeTexture(null)).not.toThrow();
      expect(() => Disposer.disposeTexture(undefined)).not.toThrow();
    });
  });

  describe('disposeTextureCache', () => {
    it('should dispose all textures in cache', () => {
      const cache = new Map<string, THREE.Texture>();
      const texture1 = new THREE.Texture();
      const texture2 = new THREE.Texture();

      const spy1 = jest.spyOn(texture1, 'dispose');
      const spy2 = jest.spyOn(texture2, 'dispose');

      cache.set('tex1', texture1);
      cache.set('tex2', texture2);

      Disposer.disposeTextureCache(cache);

      expect(spy1).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalled();
      expect(cache.size).toBe(0);
    });
  });

  describe('disposeMaterial', () => {
    it('should dispose material and its textures', () => {
      const material = new THREE.MeshBasicMaterial();
      const texture = new THREE.Texture();
      material.map = texture;

      const materialDisposeSpy = jest.spyOn(material, 'dispose');
      const textureDisposeSpy = jest.spyOn(texture, 'dispose');

      Disposer.disposeMaterial(material);

      expect(textureDisposeSpy).toHaveBeenCalled();
      expect(materialDisposeSpy).toHaveBeenCalled();
    });

    it('should handle null materials gracefully', () => {
      expect(() => Disposer.disposeMaterial(null)).not.toThrow();
      expect(() => Disposer.disposeMaterial(undefined)).not.toThrow();
    });
  });

  describe('disposeGeometry', () => {
    it('should dispose a geometry', () => {
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const disposeSpy = jest.spyOn(geometry, 'dispose');

      Disposer.disposeGeometry(geometry);

      expect(disposeSpy).toHaveBeenCalled();
    });

    it('should handle null geometries gracefully', () => {
      expect(() => Disposer.disposeGeometry(null)).not.toThrow();
      expect(() => Disposer.disposeGeometry(undefined)).not.toThrow();
    });
  });

  describe('disposeShaderMaterials', () => {
    it('should dispose all shader materials in set', () => {
      const materials = new Set<THREE.ShaderMaterial>();
      const mat1 = new THREE.ShaderMaterial();
      const mat2 = new THREE.ShaderMaterial();

      const spy1 = jest.spyOn(mat1, 'dispose');
      const spy2 = jest.spyOn(mat2, 'dispose');

      materials.add(mat1);
      materials.add(mat2);

      Disposer.disposeShaderMaterials(materials);

      expect(spy1).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalled();
      expect(materials.size).toBe(0);
    });
  });

  describe('disposeMixer', () => {
    it('should stop all actions and return null', () => {
      const root = new THREE.Object3D();
      const mixer = new THREE.AnimationMixer(root);
      const stopSpy = jest.spyOn(mixer, 'stopAllAction');

      const result = Disposer.disposeMixer(mixer);

      expect(stopSpy).toHaveBeenCalled();
      expect(result).toBeNull();
    });

    it('should handle null mixer gracefully', () => {
      const result = Disposer.disposeMixer(null);
      expect(result).toBeNull();
    });
  });

  describe('disposeObjectArray', () => {
    it('should dispose all objects and clear array', () => {
      const obj1 = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial()
      );
      const obj2 = new THREE.Mesh(
        new THREE.SphereGeometry(1),
        new THREE.MeshBasicMaterial()
      );

      const objects = [obj1, obj2];

      const geoSpy1 = jest.spyOn(obj1.geometry, 'dispose');
      const matSpy1 = jest.spyOn((obj1.material as THREE.Material), 'dispose');

      Disposer.disposeObjectArray(objects);

      expect(geoSpy1).toHaveBeenCalled();
      expect(matSpy1).toHaveBeenCalled();
      expect(objects.length).toBe(0);
    });
  });
});
