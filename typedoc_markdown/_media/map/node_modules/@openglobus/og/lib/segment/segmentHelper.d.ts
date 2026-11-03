/**
 * @module og/segment/SegmentHelper
 */
type IndexTypeArray = Uint32Array;
type IndexesTable = [IndexTypeArray[][], IndexTypeArray[][], IndexTypeArray[][], IndexTypeArray[][]];
declare class SegmentHelper {
    protected _maxGridSize: number;
    centerIndexesTable: IndexTypeArray[];
    skirtsIndexesTable: IndexesTable;
    constructor(maxGridSize?: number);
    get maxGridSize(): number;
    init(): void;
    setMaxGridSize(gridSize: number): void;
    createSegmentIndexes(size: number, sidesSizes: [number, number, number, number]): IndexTypeArray;
    initTextureCoordsTable(pow: number): Uint16Array[];
}
export declare function getInstance(): SegmentHelper;
export {};
