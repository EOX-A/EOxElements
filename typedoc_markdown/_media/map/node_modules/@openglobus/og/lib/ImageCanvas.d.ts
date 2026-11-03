/**
 * Usefull class for working with JS canvas object.
 * @class
 * @param {number} [width] - Canvas width. Default 256.
 * @param {number} [height] - Canvas height. Default 256.
 */
declare class ImageCanvas {
    /**
     * Canvas object.
     * @protected
     * @type {HTMLCanvasElement}
     */
    protected _canvas: HTMLCanvasElement;
    /**
     * Canvas context.
     * @protected
     * @type {CanvasRenderingContext2D}
     */
    protected _context: CanvasRenderingContext2D;
    constructor(width?: number, height?: number);
    /**
     * Returns canvas object.
     * @public
     * @returns {HTMLCanvasElement}
     */
    getCanvas(): HTMLCanvasElement;
    /**
     * Returns canvas context pointer.
     * @public
     * @returns {CanvasRenderingContext2D}
     */
    getContext(): CanvasRenderingContext2D;
    /**
     * Fills canvas RGBA with zeroes.
     * @public
     */
    fillEmpty(): void;
    /**
     * Fills canvas RGBA with color.
     * @public
     * @param {string} color - CSS string color.
     */
    fill(color: string): void;
    /**
     * Gets canvas pixels RGBA data.
     * @public
     * @returns {Uint8ClampedArray}
     */
    getData(): Uint8ClampedArray;
    /**
     * Fill the canvas by color.
     * @public
     * @param {string} color - CSS string color.
     */
    fillColor(color: string): void;
    /**
     * Sets RGBA pixel data.
     * @public
     * @param {Array.<number>} data - Array RGBA data.
     */
    setData(data: ArrayLike<number>): void;
    /**
     * Resize canvas.
     * @public
     * @param {number} width - Width.
     * @param {number} height - Height.
     */
    resize(width: number, height: number): void;
    /**
     * Draw an image on the canvas.
     * @public
     * @param {Image} img - Draw image.
     * @param {number} [x] - Left top image corner X coordinate on the canvas.
     * @param {number} [y] - Left top image corner Y coordinate on the canvas.
     * @param {number} [width] - Image width slice. Image width is default.
     * @param {number} [height] - Image height slice. Image height is default.
     */
    drawImage(img: HTMLImageElement, x: number, y: number, width: number, height: number): void;
    /**
     * Converts canvas to JS image object.
     * @public
     * @returns {Image}
     */
    getImage(): HTMLImageElement;
    /**
     * Get measured text width.
     * @public
     * @param {string} text - Measured text.
     * @returns {number}
     */
    getTextWidth(text: string): number;
    /**
     * Draw a text on the canvas.
     * @public
     * @param {string} text - Text.
     * @param {number} [x] - Canvas X - coordinate. 0 - default.
     * @param {number} [y] - Canvas Y - coordinate. 0 - default.
     * @param {string} [font] - Font style. 'normal 14px Verdana' - is default.
     * @param {string} [color] - Css font color.
     */
    drawText(text: string, x?: number, y?: number, font?: string, color?: string): void;
    /**
     * Gets canvas width.
     * @public
     * @returns {number}
     */
    getWidth(): number;
    /**
     * Gets canvas height.
     * @public
     * @returns {number}
     */
    getHeight(): number;
    /**
     * Load image to canvas.
     * @public
     * @param {string} url - Image url.
     * @param {Function} [callback] - Image onload callback.
     */
    load(url: string, callback: Function): void;
    /**
     * Open canvas image in the new window.
     * @public
     */
    openImage(): void;
    destroy(): void;
}
export { ImageCanvas };
