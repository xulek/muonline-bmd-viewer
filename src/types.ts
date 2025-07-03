// src/types.ts
export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface Quaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}

export interface BMDTriangle {
  polygon: number;
  vertexIndex: number[];
  normalIndex: number[];
  texCoordIndex: number[];
  lightMapCoord: BMDTexCoord[];
  lightMapIndexes: number;
}

export interface BMDTextureVertex {
  node: number;
  position: Vector3;
}

export interface BMDTextureNormal {
  node: number;
  normal: Vector3;
  bindVertex: number;
}

export interface BMDTexCoord {
  u: number;
  v: number;
}

export interface BMDTextureMesh {
  texture: number;
  numVertices: number;
  numNormals: number;
  numTexCoords: number;
  numTriangles: number;
  vertices: BMDTextureVertex[];
  normals: BMDTextureNormal[];
  texCoords: BMDTexCoord[];
  triangles: BMDTriangle[];
  texturePath: string;
}

// New interfaces for animations
export interface BMDBoneMatrix {
  position: Vector3[];
  rotation: Vector3[];
  quaternion: Quaternion[];
}

export interface BMDTextureBone {
  name: string;
  parent: number;
  isDummy: boolean;
  matrixes: BMDBoneMatrix[];
}

export interface BMDTextureAction {
  numAnimationKeys: number;
  lockPositions: boolean;
  positions: Vector3[];
}

export interface BMD {
  version: number;
  name: string;
  meshes: BMDTextureMesh[];
  bones: BMDTextureBone[];
  actions: BMDTextureAction[];
}

// Types for BinaryStruct
export type StructPrimitive = 'int16' | 'uint16' | 'uint8' | 'float32';
export type StructField = [string, StructPrimitive];
export type StructLayout = readonly StructField[];