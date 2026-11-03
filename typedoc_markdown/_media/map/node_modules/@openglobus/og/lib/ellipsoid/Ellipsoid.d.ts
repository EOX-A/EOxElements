import { LonLat } from "../LonLat";
import { Quat } from "../math/Quat";
import { Vec3 } from "../math/Vec3";
export interface IInverseResult {
    distance: number;
    initialAzimuth: number;
    finalAzimuth: number;
}
export interface IDirectResult {
    destination: LonLat;
    finalAzimuth: number;
}
/**
 * Class represents a plant ellipsoid.
 * @class
 * @param {number} equatorialSize - Equatorial ellipsoid size.
 * @param {number} polarSize - Polar ellipsoid size.
 */
declare class Ellipsoid {
    /**
     * Equatorial size
     * @type {number}
     * @protected
     */
    protected _a: number;
    /**
     * Polar size
     * @type {number}
     * @protected
     */
    protected _b: number;
    protected _flattening: number;
    protected _f: number;
    protected _a2: number;
    protected _b2: number;
    protected _e: number;
    protected _e2: number;
    protected _e22: number;
    protected _k: number;
    protected _k2: number;
    protected _radii: Vec3;
    protected _radii2: Vec3;
    protected _invRadii: Vec3;
    _invRadii2: Vec3;
    constructor(equatorialSize?: number, polarSize?: number);
    /**
     * Returns the distance travelling from ‘this’ point to destination point along a rhumb line.
     * @param   {LonLat} startLonLat coordinates.
     * @param   {LonLat} endLonLat coordinates
     * @returns {number} Distance in m between this point and destination point (same units as radius).
     */
    rhumbDistanceTo(startLonLat: LonLat, endLonLat: LonLat): number;
    /**
     * Returns the point at given fraction between two points on the great circle.
     * @param   {LonLat} lonLat1 - Longitude/Latitude of source point.
     * @param   {LonLat} lonLat2 - Longitude/Latitude of destination point.
     * @param   {number} fraction - Fraction between the two points (0 = source point, 1 = destination point).
     * @returns {LonLat} Intermediate point between points.
     */
    getIntermediatePointOnGreatCircle(lonLat1: LonLat, lonLat2: LonLat, fraction: number): LonLat;
    /**
     * REMOVE ASAP after
     * @param lonLat1
     * @param lonLat2
     * @returns {number}
     */
    static getBearing(lonLat1: LonLat, lonLat2: LonLat): number;
    getFlattening(): number;
    /**
     * Gets ellipsoid equatorial size.
     * @public
     * @returns {number} -
     */
    getEquatorialSize(): number;
    get equatorialSize(): number;
    get equatorialSizeSqr(): number;
    /**
     * Gets ellipsoid polar size.
     * @public
     * @returns {number} -
     */
    getPolarSize(): number;
    get polarSize(): number;
    get polarSizeSqr(): number;
    /**
     * Calculate cartesian coordinates by its ECEF geodetic coordinates.
     * @public
     * @param {LonLat} lonlat - Geodetic coordinates.
     * @returns {Vec3} -
     */
    lonLatToCartesian(lonlat: LonLat): Vec3;
    /**
     * Calculate cartesian coordinates by its ECEF geodetic coordinates.
     * @public
     * @param {LonLat} lonlat - Geodetic coordinates.
     * @param {Vec3} res - Output variable reference.
     * @returns {Vec3} -
     */
    lonLatToCartesianRes(lonlat: LonLat, res: Vec3): Vec3;
    /**
     * Gets cartesian ECEF 3d coordinates from geodetic coordinates.
     * @public
     * @param {Number} lon - Longitude.
     * @param {Number} lat - Latitude.
     * @param {Number} height - Height.
     * @param {Vec3} res - Output result variable.
     * @returns {Vec3} -
     */
    geodeticToCartesian(lon: number, lat: number, height?: number, res?: Vec3): Vec3;
    /**
     * Gets Wgs84 geodetic coordinates from cartesian ECEF.
     * @public
     * @param {Vec3} p - Cartesian coordinates.
     * @returns {LonLat} -
     */
    projToSurface(p: Vec3): Vec3;
    /**
     * Converts 3d cartesian coordinates to geodetic
     * @param {Vec3} cart - Cartesian coordinates
     * @returns {LonLat} - Geodetic coordinates
     */
    cartesianToLonLat(cart: Vec3): LonLat;
    /**
     * Converts 3d cartesian coordinates to geodetic
     * @param {Vec3} cart - Cartesian coordinates
     * @param {LonLat} res - Link geodetic coordinates variable
     * @returns {LonLat} - Geodetic coordinates
     */
    cartesianToLonLatRes(cart: Vec3, res?: LonLat): LonLat;
    /**
     * Gets ellipsoid surface normal.
     * @public
     * @param {Vec3} coord - Spatial coordinates.
     * @return {Vec3} -
     */
    getSurfaceNormal3v(coord: Vec3): Vec3;
    getGreatCircleDistance(lonLat1: LonLat, lonLat2: LonLat): number;
    /**
     * Calculates the destination point given start point lat / lon, azimuth(deg) and distance (m).
     * Source: http://movable-type.co.uk/scripts/latlong-vincenty-direct.html and optimized / cleaned up by Mathias Bynens <http://mathiasbynens.be/>
     * Based on the Vincenty direct formula by T. Vincenty, “Direct and Inverse Solutions of Geodesics on the Ellipsoid with application of nested equations”, Survey Review, vol XXII no 176, 1975 <http://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf>
     * @param {LonLat} lonLat - Origin coordinates
     * @param {number} azimuth - View azimuth in degrees
     * @param {number} dist - Distance to the destination point coordinates in meters
     * @returns {LonLat} - Destination point coordinates
     */
    getGreatCircleDestination(lonLat: LonLat, azimuth: number, dist: number): LonLat;
    /**
     * Returns inverse Geodesic solution for two points
     * @param {LonLat} lonLat1 - start coordinates point
     * @param {LonLat} lonLat2 - end coordinates point
     * @returns {IInverseResult} - Contains distance, initialAzimuth, and finalAzimuth values
     */
    inverse(lonLat1: LonLat, lonLat2: LonLat): IInverseResult;
    /**
     * Calculates the destination point given start point lat / lon, azimuth(deg) and distance (m).
     * Source: http://movable-type.co.uk/scripts/latlong-vincenty-direct.html and optimized / cleaned up by Mathias Bynens <http://mathiasbynens.be/>
     * Based on the Vincenty direct formula by T. Vincenty, “Direct and Inverse Solutions of Geodesics on the Ellipsoid with application of nested equations”, Survey Review, vol XXII no 176, 1975 <http://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf>
     * @param {LonLat} lonLat - Origin coordinates
     * @param {number} azimuth - View azimuth in degrees
     * @param {number} dist - Distance to the destination point coordinates in meters
     * @returns {{destination: LonLat, finalAzimuth: number}} - Destination point coordinates
     */
    direct(lonLat: LonLat, azimuth: number, dist: number): IDirectResult;
    /**
     * Returns cartesian coordinates of the intersection of a ray and an ellipsoid.
     * If the ray doesn't hit ellipsoid returns null.
     * @public
     * @param {Vec3} origin - Ray origin point.
     * @param {Vec3} direction - Ray direction.
     * @returns {Vec3} -
     */
    hitRay(origin: Vec3, direction: Vec3): Vec3 | undefined;
    getNorthFrameRotation(cartesian: Vec3): Quat;
    /**
     * @todo this is not precise function, needs to be replaced or removed
     * @param lonLat1
     * @param bearing
     * @param distance
     * @returns {LonLat}
     */
    getBearingDestination(lonLat1: LonLat, bearing?: number, distance?: number): LonLat;
    /**
     * Returns the point at given fraction between two points on the great circle.
     * @param   {LonLat} lonLat1 - Longitude/Latitude of source point.
     * @param   {LonLat} lonLat2 - Longitude/Latitude of destination point.
     * @param   {number} fraction - Fraction between the two points (0 = source point, 1 = destination point).
     * @returns {LonLat} Intermediate point between points.
     */
    static getIntermediatePointOnGreatCircle(lonLat1: LonLat, lonLat2: LonLat, fraction: number): LonLat;
    static getRhumbBearing(lonLat1: LonLat, lonLat2: LonLat): number;
    getLonLatVisibilitySimple(eye: Vec3, lonLat: LonLat, forward?: Vec3): boolean;
}
export { Ellipsoid };
