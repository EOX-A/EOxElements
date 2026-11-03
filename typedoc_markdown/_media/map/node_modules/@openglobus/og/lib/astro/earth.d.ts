import { Vec3 } from "../math/Vec3";
import type { JulianDate } from "./jd";
/**
 * Returns Sun position in the geocentric coordinate system by the time.
 * @param {JulianDate} jDate - Julian date time.
 * @returns {Vec3} - Sun geocentric coordinates.
 */
export declare function getSunPosition(jDate: JulianDate): Vec3;
