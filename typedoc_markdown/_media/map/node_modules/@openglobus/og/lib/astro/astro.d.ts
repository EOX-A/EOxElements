import { type JulianDate } from "./jd";
/**
 * Angle between J2000 mean equator and the ecliptic plane.
 * 23 deg 26' 21".448 (Seidelmann, _Explanatory Supplement to the
 * Astronomical Almanac_ (1992), eqn 3.222-1.
 * @const
 * @type{number}
 */
export declare const J2000_OBLIQUITY = 23.4392911;
/**
 * IAU 1976 value
 * @const
 * @type{number}
 */
export declare const AU_TO_METERS = 149597870000;
/**
 * Terrestrial and atomic time difference.
 * @const
 * @type{number}
 */
export declare const TDT_TAI = 32.184;
/**
 * Earth gravitational parameter product of gravitational constant G and the mass M of the Earth.
 * @const
 * @type{number}
 */
export declare const EARTH_GRAVITATIONAL_PARAMETER = 398600435000000;
/**
 * Sun gravitational parameter product of gravitational constant G and the mass M of the Sun.
 * @const
 * @type{number}
 */
export declare const SUN_GRAVITATIONAL_PARAMETER = 132712440018000000000;
/**
 * Converts atomic time to barycentric dynamical time.
 * @param {JulianDate} tai - Atomic time.
 * @returns {JulianDate} - returns barycentric dynamical time.
 */
export declare function TAItoTDB(tai: JulianDate): JulianDate;
