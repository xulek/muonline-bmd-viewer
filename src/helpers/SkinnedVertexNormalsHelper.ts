import * as THREE from 'three';

/**
 * Helper that displays vertex normals for a SkinnedMesh.
 * Samples a subset of vertices to avoid performance issues with high-poly meshes.
 */
export class SkinnedVertexNormalsHelper extends THREE.LineSegments {
    public skinned: THREE.SkinnedMesh;
    public size: number;

    private _vertex = new THREE.Vector3();
    private _skinnedVertex = new THREE.Vector3();
    private _normal = new THREE.Vector3();
    private _indices: Uint32Array;

    /**
     * @param skinned - The SkinnedMesh to visualize normals for
     * @param size - Length of the normal lines
     * @param color - Color of the normal lines
     */
    constructor(skinned: THREE.SkinnedMesh, size: number, color: number) {
        const srcGeo = skinned.geometry as THREE.BufferGeometry;
        const posAttr = srcGeo.getAttribute('position') as THREE.BufferAttribute | null;

        const count = posAttr ? posAttr.count : 0;

        // Limit to 2000 lines for performance
        const maxLines = 2000;
        const sampleCount = count > 0 ? Math.min(count, maxLines) : 0;

        // Create indices for sampling vertices
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

    /**
     * Updates the vertex normal visualization.
     * Call this each frame to reflect current bone transformations.
     */
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
