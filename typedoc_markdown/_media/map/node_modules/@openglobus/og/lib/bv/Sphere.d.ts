import { Vec3 } from "../math/Vec3";
import { Ellipsoid } from "../ellipsoid/Ellipsoid";
import { Extent } from "../Extent";
export type NumberArray6 = [number, number, number, number, number, number];
/**
 * Bounding sphere class.
 * @class
 * @param {Number} [radius] - Bounding sphere radius.
 * @param {Vec3} [center] - Bounding sphere coordinates.
 */
declare class Sphere {
    /**
     * Sphere radius.
     * @public
     * @type {Number}
     */
    radius: number;
    /**
     * Sphere coordinates.
     * @public
     * @type {Vec3}
     */
    center: Vec3;
    constructor(radius?: number, center?: Vec3);
    /**
     * Sets bounding sphere coordinates by the bounds array.
     * @param {Array.<number>} bounds - Bounds is an array where [minX, minY, minZ, maxX, maxY, maxZ]
     */
    setFromBounds(bounds: NumberArray6): void;
    /**
     * Sets bounding sphere coordinates by ellipsoid geodetic extend.
     * @param {Ellipsoid} ellipsoid - Ellipsoid.
     * @param {Extent} extent - Geodetic extent.
     */
    setFromExtent(ellipsoid: Ellipsoid, extent: Extent): void;
}
export { Sphere };
