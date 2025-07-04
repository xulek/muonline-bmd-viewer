import * as fs from 'fs';
import * as path from 'path';
import { BMDLoader } from '../src/bmd-loader';

describe('BMDLoader', () => {
    let bmdBuffer: ArrayBuffer;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, 'Monster03.bmd');
        bmdBuffer = fs.readFileSync(filePath).buffer;
    });

    it('should parse Monster03.bmd correctly', () => {
        const loader = new BMDLoader();
        const bmd = loader.parse(bmdBuffer);
        expect(bmd.name).toBe('Data2\\Monster\\bd.smd');
        expect(bmd.version).toBe(10);
        expect(bmd.meshes.length).toBe(2);
        expect(bmd.bones.length).toBe(39);
        expect(bmd.actions.length).toBe(7);
        const mesh = bmd.meshes[0];
        expect(mesh.texturePath).toBe('p_d.jpg');
        expect(mesh.numVertices).toBe(163);
        expect(mesh.numNormals).toBe(168);
        expect(mesh.numTexCoords).toBe(111);
        expect(mesh.numTriangles).toBe(324);
    });
});