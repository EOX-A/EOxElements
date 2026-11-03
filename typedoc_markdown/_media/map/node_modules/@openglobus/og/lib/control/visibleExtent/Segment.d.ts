export const MAX_NORMAL_ZOOM: 7;
/**
 * Planet segment Web Mercator tile class that stored and rendered with quad tree.
 * @class
 * @param {quadTree.Node} node - Segment node.
 * @param {Planet} planet - Current planet scene.
 * @param {Number} tileZoom - Zoom index.
 * @param {Extent} extent - Segment extent.
 */
export class Segment {
    /**
     * @param {quadTree.Node} node - Segment node.
     * @param {Planet} planet - Current planet scene.
     * @param {number} tileZoom - Zoom index.
     * @param {Extent} extent - Segment extent.
     */
    constructor(node: quadTree.Node, planet: Planet, tileZoom: number, extent: Extent);
    isPole: boolean;
    _tileGroup: number;
    _projection: import("../../proj/Proj.js").Proj;
    /**
     * Quad tree node of the segment.
     * @type {quadTree.Node}
     */
    node: quadTree.Node;
    /**
     * Planet pointer.
     * @type {Planet}
     */
    planet: Planet;
    /**
     * WebGl handler pointer.
     * @type {Handler}
     */
    handler: Handler;
    /**
     * Segment bounding sphere
     * @type {Sphere}
     */
    bsphere: Sphere;
    _plainRadius: number;
    /**
     * Segment bounding box.
     * @type {Box}
     */
    bbox: Box;
    _swNorm: any;
    _nwNorm: any;
    _seNorm: any;
    _neNorm: any;
    /**
     * Geographical extent.
     * @type {Extent}
     */
    _extent: Extent;
    _extentLonLat: Extent | null;
    /**
     * Vertices grid size.
     * @type {number}
     */
    gridSize: number;
    fileGridSize: number;
    /**
     * Tile zoom index.
     * @type {number}
     */
    tileZoom: number;
    /**
     * Horizontal tile index.
     * @type {number}
     */
    tileX: number;
    tileXE: number;
    tileXW: number;
    tileYN: number;
    tileYS: number;
    /**
     * Vertical tile index.
     * @type {number}
     */
    tileY: number;
    tileIndex: string;
    /**
     * Texture materials array.
     * @type {Array.<planetSegment.Material>}
     */
    materials: Array<planetSegment.Material>;
    /**
     * Plain segment vertices was created.
     * @type {boolean}
     */
    plainReady: boolean;
    /**
     * Segment is ready to create plain vertices.
     * @type {boolean}
     */
    initialized: boolean;
    /**
     * Normal map is allready made.
     * @type {boolean}
     */
    normalMapReady: boolean;
    /**
     * Parent normal map is made allready(optimization parameter).
     * @type {boolean}
     */
    parentNormalMapReady: boolean;
    /**
     * Terrain is allready applied flag.
     * @type {boolean}
     */
    terrainReady: boolean;
    /**
     * Terrain is loading now flag.
     * @type {boolean}
     */
    terrainIsLoading: boolean;
    /**
     * Terrain existing flag.
     * @type {boolean}
     */
    terrainExists: boolean;
    plainVertices: any;
    plainVerticesHigh: any;
    plainVerticesLow: any;
    plainNormals: any;
    terrainVertices: any;
    terrainVerticesHigh: any;
    terrainVerticesLow: any;
    noDataVertices: any;
    tempVertices: any;
    tempVerticesHigh: any;
    tempVerticesLow: any;
    normalMapTexture: any;
    normalMapTextureBias: Float32Array<ArrayBuffer>;
    normalMapVertices: any;
    normalMapVerticesHigh: any;
    normalMapVerticesLow: any;
    normalMapNormals: any;
    vertexNormalBuffer: any;
    vertexPositionBuffer: any;
    vertexPositionBufferHigh: any;
    vertexPositionBufferLow: any;
    vertexTextureCoordBuffer: any;
    _globalTextureCoordinates: Float32Array<ArrayBuffer>;
    _inTheQueue: boolean;
    _appliedNeighborsZoom: number[];
    _renderingSlices: any[];
    _indexBuffer: any;
    readyToEngage: boolean;
    plainProcessing: boolean;
    /**
     * Returns that segment good for rendering with camera by current lod ratio.
     * @public
     * @param {Camera} camera - Camera object.
     * @returns {boolean} -
     */
    public acceptForRendering(camera: Camera): boolean;
    /**
     * Returns entity terrain point.
     * @public
     * @param {Entity} entity - Entity.
     * @param {Vec3} res - Point coordinates.
     * @param {Vec3} [normal] - Terrain point normal.
     * @returns {Vec3} -
     */
    public getEntityTerrainPoint(entity: Entity, res: Vec3): Vec3;
    isEntityInside(e: any): boolean;
    /**
     * Returns distance from object to terrain coordinates and terrain point that calculates out in the res parameter.
     * @public
     * @param {Vec3} xyz - Cartesian object position.
     * @param {LonLat} insideSegmentPosition - Geodetic object position.
     * @param {Vec3} [res] - Result cartesian coordinates on the terrain.
     * @param {Vec3} [normal] - Terrain point normal.
     * @returns {number} -
     */
    public getTerrainPoint(xyz: Vec3, insideSegmentPosition: LonLat, res?: Vec3): number;
    /**
     * Project wgs86 to segment native projection.
     * @public
     * @param {LonLat} lonlat - Coordinates to project.
     * @returns {LonLat} -
     */
    public projectNative(lonLat: any): LonLat;
    /**
     *
     * @param {boolean} forceLoading
     */
    loadTerrain(forceLoading: boolean): void;
    /**
     * Terrain obtained from server.
     * @param {Float32Array} elevations - Elevation data.
     */
    elevationsExists(elevations: Float32Array): void;
    _checkEqualization(neighborSide: any, neigborNode: any): any;
    equalize(): void;
    engage(): void;
    _plainSegmentWorkerCallback(data: any): void;
    _terrainWorkerCallback(data: any): void;
    normalMapTexturePtr: any;
    /**
     * Terrain is not obtained or not exists on the server.
     */
    elevationsNotExists(): void;
    _normalMapEdgeEqualize(side: any): void;
    applyTerrain(elevations: any): void;
    /**
     * Delete segment gl buffers.
     */
    deleteBuffers(): void;
    /**
     * Delete materials.
     */
    deleteMaterials(): void;
    /**
     * Delete elevation data.
     */
    deleteElevations(): void;
    /**
     * Clear but not destroy segment data.
     */
    clearSegment(): void;
    /**
     * Removes cache records.
     */
    _freeCache(): void;
    /**
     * Clear and destroy all segment data.
     */
    destroySegment(): void;
    _setExtentLonLat(): void;
    /**
     * Creates bound volumes by segment geographical extent.
     */
    createBoundsByExtent(): void;
    createBoundsByParent(): void;
    setBoundingSphere(x: any, y: any, z: any, v: any): void;
    setBoundingVolume(xmin: any, ymin: any, zmin: any, xmax: any, ymax: any, zmax: any): void;
    setBoundingVolume3v(vmin: any, vmax: any): void;
    setBoundingVolumeArr(bounds: any): void;
    createCoordsBuffers(verticesHigh: any, verticesLow: any, gridSize: any): void;
    _addViewExtent(): void;
    _assignTileIndexes(): void;
    initialize(): void;
    _assignGlobalTextureCoordinates(): void;
    createPlainSegmentAsync(): void;
    createPlainSegment(): void;
    _createPlainVertices(): void;
    /**
     * Gets specific layer material.
     * @public
     * @param {Layer} layer - Layer object.
     * @returns {planetSegment.Material} - Segment material.
     */
    public getMaterialByLayer(layer: Layer): planetSegment.Material;
    _getLayerExtentOffset(layer: any): number[];
    screenRendering(sh: any, layerSlice: any, sliceIndex: any, defaultTexture: any, isOverlay: any): void;
    heightPickingRendering(sh: any, layerSlice: any, sliceIndex: any, defaultTexture: any, isOverlay: any): void;
    colorPickingRendering(sh: any, layerSlice: any, sliceIndex: any, defaultTexture: any, isOverlay: any): void;
    depthRendering(sh: any, layerSlice: any, sliceIndex: any, defaultTexture: any, isOverlay: any): void;
    _getIndexBuffer(): any;
    _collectVisibleNodes(): void;
    layerOverlap(layer: any): boolean;
    getDefaultTexture(): any;
    getExtentLonLat(): Extent | null;
    getExtentMerc(): Extent;
    getExtent(): Extent;
    getNodeState(): any;
    getNeighborSide(b: any): 0 | 1 | 2 | 3 | -1;
}
import { Sphere } from "../../bv/Sphere.js";
import { Box } from "../../bv/Box.js";
import { Extent } from "../../Extent";
import { Vec3 } from "../../math/Vec3";
import { LonLat } from "../../LonLat";
import { Layer } from "../../layer/Layer.js";
