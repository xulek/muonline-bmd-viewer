import * as THREE from 'three';
import { Disposer } from '../src/utils/Disposer';

describe('Disposer', () => {
  it('disposes shared geometries, materials and textures only once per object tree', () => {
    const geometry = new THREE.BufferGeometry();
    const texture = new THREE.Texture();
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const root = new THREE.Group();
    root.add(new THREE.Mesh(geometry, material), new THREE.Mesh(geometry, material));

    const geometrySpy = jest.spyOn(geometry, 'dispose');
    const materialSpy = jest.spyOn(material, 'dispose');
    const textureSpy = jest.spyOn(texture, 'dispose');

    Disposer.disposeObject3D(root, false);

    expect(geometrySpy).toHaveBeenCalledTimes(1);
    expect(materialSpy).toHaveBeenCalledTimes(1);
    expect(textureSpy).toHaveBeenCalledTimes(1);
  });

  it('disposes textures stored in shader uniforms', () => {
    const texture = new THREE.Texture();
    const material = new THREE.ShaderMaterial({ uniforms: { atlas: { value: texture } } });
    const root = new THREE.Mesh(new THREE.BufferGeometry(), material);
    const textureSpy = jest.spyOn(texture, 'dispose');

    Disposer.disposeObject3D(root, false);

    expect(textureSpy).toHaveBeenCalledTimes(1);
  });
});
