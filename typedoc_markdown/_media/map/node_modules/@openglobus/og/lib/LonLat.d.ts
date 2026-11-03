import type { NumberArray2 } from "./math/Vec2";
import type { NumberArray3 } from "./math/Vec3";
/**
 * Represents a geographical point with a certain latitude, longitude and height.
 * @class
 * @param {number} [lon] - Longitude.
 * @param {number} [lat] - Latitude.
 * @param {number} [height] - Height over the surface.
 */
export declare class LonLat {
    /**
     * Longitude.
     * @public
     * @type {number}
     */
    lon: number;
    /**
     * Latitude.
     * @public
     * @type {number}
     */
    lat: number;
    /**
     * Height.
     * @public
     * @type {number}
     */
    height: number;
    constructor(lon?: number, lat?: number, height?: number);
    /**
     * Check zero coordinates
     * @returns {boolean} -
     */
    isZero(): boolean;
    /**
     * Creates coordinates array.
     * @static
     * @param{Array.<Array<number>>} arr - Coordinates array data. (exactly 3 entries)
     * @return{Array.<LonLat>} the same coordinates array but each element is LonLat instance.
     */
    static join(arr: NumberArray2[] | NumberArray3[]): LonLat[];
    /**
     * Creates an object by coordinate array.
     * @static
     * @param {Array.<number>} arr - Coordinates array, where first is longitude, second is latitude and third is a height. (exactly 3 entries)
     * @returns {LonLat} -
     */
    static createFromArray(arr: [number, number, number]): LonLat;
    /**
     * Create array from lonLat
     * @param lonLat
     * @returns {number[]}
     */
    static toArray(lonLat: LonLat): [number, number, number];
    /**
     * Create array from lonLat
     * @returns {number[]}
     */
    toArray(): [number, number, number];
    /**
     * Converts degrees to mercator coordinates.
     * @static
     * @param {number} lon - Degrees longitude.
     * @param {number} lat - Degrees latitude.
     * @param {number} [height] - Height.
     * @returns {LonLat} -
     */
    static forwardMercator(lon: number, lat: number, height: number): LonLat;
    /**
     * Converts degrees to mercator coordinates.
     * @static
     * @param {LonLat} lonLat - Input geodetic degree coordinates
     * @param {LonLat} res - Output mercator coordinates
     * @returns {LonLat} - Output mercator coordinates
     */
    static forwardMercatorRes(lonLat: LonLat, res: LonLat): LonLat;
    /**
     * Converts mercator to degrees coordinates.
     * @static
     * @param {number} x - Mercator longitude.
     * @param {number} y - Mercator latitude.
     * @param {number} [height] - Height.
     * @returns {LonLat} -
     */
    static inverseMercator(x: number, y: number, height?: number): LonLat;
    /**
     * Sets coordinates.
     * @public
     * @param {number} [lon] - Longitude.
     * @param {number} [lat] - Latitude.
     * @param {number} [height] - Height.
     * @returns {LonLat} -
     */
    set(lon?: number, lat?: number, height?: number): LonLat;
    /**
     * Copy coordinates.
     * @public
     * @param {LonLat} [lonLat] - Coordinates to copy.
     * @returns {LonLat} -
     */
    copy(lonLat: LonLat): LonLat;
    /**
     * Clone the coordinates.
     * @public
     * @returns {LonLat} -
     */
    clone(): LonLat;
    /**
     * Converts to mercator coordinates.
     * @public
     * @returns {LonLat} -
     */
    forwardMercator(): LonLat;
    forwardMercatorEPS01(): LonLat;
    /**
     * Converts from mercator coordinates.
     * @public
     * @returns {LonLat} -
     */
    inverseMercator(): LonLat;
    /**
     * Compares coordinates.
     * @public
     * @param {LonLat} b - Coordinate to compare with.
     * @returns {boolean} -
     */
    equal(b: LonLat): boolean;
}
