import type { NumberArray3 } from "../math/Vec3";
export interface IObjGeometryData {
    vertices: number[];
    texCoords: number[];
    normals: number[];
}
export interface IObjGeometry {
    object: string;
    groups: string[];
    material: string;
    data: IObjGeometryData;
}
export interface IObjMaterial {
    ambient?: NumberArray3;
    diffuse?: NumberArray3;
    specular?: NumberArray3;
    shininess?: number;
    color?: NumberArray3;
    opacity?: number;
    illum?: number;
    colorTexture?: string;
    normalTexture?: string;
    metallicRoughnessTexture?: string;
}
type MaterialMap = Record<string, IObjMaterial>;
export interface IObj {
    geometries: IObjGeometry[];
    materials: MaterialMap;
}
export declare class Obj {
    objPositions: number[][];
    objTexcoords: number[][];
    objNormals: number[][];
    objVertexData: [number[][], number[][], number[][]];
    vertexData: [number[], number[], number[]];
    _materialLibs: string[];
    geometries: IObjGeometry[];
    geometry: IObjGeometry | null;
    materials: MaterialMap;
    material: IObjMaterial;
    object: string;
    groups: string[];
    keywords: Record<string, (parts: string[], unparsedArgs: string) => void>;
    protected _path: string;
    constructor();
    newGeometry(): void;
    setGeometry(): void;
    addVertex(vert: string): void;
    protected _innerParser(text: string, fileName: string): void;
    get data(): IObj;
    load(src: string): Promise<IObj>;
    protected _readAndParse(file: File): Promise<void>;
    readFile(objFile: File, mtlFile?: File | null): Promise<IObj>;
    protected _cleanupGeometryArrays(): void;
}
export {};
