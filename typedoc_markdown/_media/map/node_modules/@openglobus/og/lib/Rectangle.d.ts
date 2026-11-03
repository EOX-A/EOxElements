/**
 * 2D Rectangle class.
 * @class
 * @param {number} [left] - Left coordinate. 0 - default.
 * @param {number} [top] - Top coordinate. 0 - default.
 * @param {number} [right] - Right coordinate. 0 - default.
 * @param {number} [bottom] - Bottom coordinate. 0 - default.
 */
declare class Rectangle {
    /**
     * Left coordinate.
     * @public
     * @type {number}
     */
    left: number;
    /**
     * Right coordinate.
     * @public
     * @type {number}
     */
    right: number;
    /**
     * Top coordinate.
     * @public
     * @type {number}
     */
    top: number;
    /**
     * Top coordinate.
     * @public
     * @type {number}
     */
    bottom: number;
    constructor(left?: number, top?: number, right?: number, bottom?: number);
    set(left?: number, top?: number, right?: number, bottom?: number): void;
    /**
     * Clone rectangle object.
     * @public
     * @returns {Rectangle}
     */
    clone(): Rectangle;
    /**
     * Returns rectangle width.
     * @public
     * @type {number}
     */
    getWidth(): number;
    /**
     * Returns rectangle height.
     * @public
     * @type {number}
     */
    getHeight(): number;
    /**
     * Returns rectangle area.
     * @public
     * @type {number}
     */
    getSquare(): number;
    /**
     * Returns rectangle diagonal size.
     * @public
     * @type {number}
     */
    getDiagonal(): number;
    /**
     * Returns true if rectangle fits their size in width and height.
     * @public
     * @param {number} width - Width.
     * @param {number} height - Height.
     * @type {boolean}
     */
    fit(width: number, height: number): boolean;
    isInside(x: number, y: number): boolean;
}
export { Rectangle };
