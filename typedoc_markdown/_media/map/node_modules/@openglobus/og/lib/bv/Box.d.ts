import { Vec3 } from "../math/Vec3";
import type { NumberArray6 } from "./Sphere";
import { Ellipsoid } from "../ellipsoid/Ellipsoid";
import { Extent } from "../Extent";
type Vec3Array8 = [Vec3, Vec3, Vec3, Vec3, Vec3, Vec3, Vec3, Vec3];
/**
 * Bounding box class.
 * @class
 * @param {NumberArray6} [boundsArr]
 */
declare class Box {
    /**
     * Vertices array.
     * @public
     * @type{Array.<Vec3>}
     */
    vertices: Vec3Array8;
    constructor(boundsArr?: NumberArray6);
    copy(bbox: Box): void;
    /**
     * Sets bounding box coordinates by the bounds array.
     * @param {NumberArray6} bounds - Bounds is an array where [minX, minY, minZ, maxX, maxY, maxZ]
     */
    setFromBoundsArr(bounds: NumberArray6): void;
    /**
     * Sets bounding box coordinates by ellipsoid geodetic extend.
     * @param {Ellipsoid} ellipsoid - Ellipsoid.
     * @param {Extent} extent - Geodetic extent.
     */
    setFromExtent(ellipsoid: Ellipsoid, extent: Extent): void;
}
export { Box };
