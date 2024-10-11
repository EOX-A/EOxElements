import type {
  Cartesian3,
  Cartesian2,
  NearFarScalar as CesiumNearFarScalar,
} from "cesium";

export type Position3D = Cartesian3 | { x: number; y: number; z: number };
export type Position2D = Cartesian2 | { x: number; y: number };
export type NearFarScalar =
  | CesiumNearFarScalar
  | { near?: number; nearValue?: number; far?: number; farValue?: number };

// 3D Features
export interface Vector3D {
  id?: string | number;
  positions: Position3D[];
  color: string;
}
export interface Vector3DCollection {
  id: string | number | symbol;
  type: "Vector";
  vectors: Vector3D[];
}

export interface Point3D {
  id?: string | number;
  position: Position3D;
  color: string;
  pixelSize?: number;
  outlineWidth?: number;
  scaleByDistance?: NearFarScalar;
}
export interface Point3DCollection {
  id: string | number | symbol;
  type: "Point";
  points: Point3D[];
}

export interface Billboard {
  id?: string | number;
  position: Position3D;
  image: string | HTMLCanvasElement;
  pixelOffset?: Position2D;
  eyeOffset?: Position3D;
  scale?: number;
  width?: number;
  height?: number;
  scaleByDistance?: NearFarScalar;
}

export interface BillboardCollection {
  id: string | number | symbol;
  type: "Billboard";
  billboards: Billboard[];
}

export type Collections3D =
  | Vector3DCollection
  | Point3DCollection
  | BillboardCollection;

export type CollectionsManager = ReturnType<
  typeof import("./methods/create-collections-manager").default
>;
//////
