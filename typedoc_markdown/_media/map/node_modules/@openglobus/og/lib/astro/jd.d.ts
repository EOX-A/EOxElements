export type JulianDate = number;
/**
 * Seconds in millisecond.
 * @const
 */
export declare const SECONDS_PER_MILLISECOND = 0.001;
/**
 * Milliseconds in second.
 * @const
 */
export declare const MILLISECONDS_PER_SECOND = 1000;
/**
 * Seconds in minute.
 * @const
 */
export declare const SECONDS_PER_MINUTE = 60;
/**
 * One by seconds in minute.
 * @const
 */
export declare const ONE_BY_SECONDS_PER_MINUTE: number;
/**
 * Minutes in hour.
 * @const
 */
export declare const MINUTES_PER_HOUR = 60;
/**
 * Hours in day.
 * @const
 */
export declare const HOURS_PER_DAY = 24;
/**
 * One by hours in day.
 * @const
 */
export declare const ONE_BY_HOURS_PER_DAY: number;
/**
 * Seconds in hour.
 * @const
 */
export declare const SECONDS_PER_HOUR = 3600;
/**
 * One by seconds in hour.
 * @const
 */
export declare const ONE_BY_SECONDS_PER_HOUR: number;
/**
 * Seconds in 12 hours.
 * @const
 */
export declare const SECONDS_PER_12_HOURS: number;
/**
 * Minutes in day.
 * @const
 */
export declare const MINUTES_PER_DAY = 1440;
/**
 * One by minutes in day.
 * @const
 */
export declare const ONE_BY_MINUTES_PER_DAY: number;
/**
 * Seconds in day.
 * @const
 */
export declare const SECONDS_PER_DAY = 86400;
/**
 * Milliseconds in day.
 * @const
 */
export declare const MILLISECONDS_PER_DAY = 86400000;
/**
 * One by milliseconds in day.
 * @const
 */
export declare const ONE_BY_MILLISECONDS_PER_DAY: number;
/**
 * One by seconds in day.
 * @const
 */
export declare const ONE_BY_SECONDS_PER_DAY: number;
/**
 * Days in julian century.
 * @const
 */
export declare const DAYS_PER_JULIAN_CENTURY = 36525;
/**
 * Days in julian year.
 * @const
 */
export declare const DAYS_PER_JULIAN_YEAR = 365.25;
/**
 * Seconds in picoseconds.
 * @const
 */
export declare const PICOSECOND = 1e-9;
/**
 * Modified julian date difference.
 * @const
 */
export declare const MODIFIED_JULIAN_DATE_DIFFERENCE = 2400000.5;
/**
 * Julian date of 2000 year. Epoch.
 * @const
 */
export declare const J2000 = 2451545;
/**
 * Returns julian days from Epoch.
 * @param {JulianDate} jd - Julian date.
 * @returns {number} Days from epoch
 */
export declare function T(jd: JulianDate): number;
/**
 * Gets the date's julian day.
 * @param {number} year - Year.
 * @param {number} month - Month.
 * @param {number} day - Day.
 * @returns {number} Day number
 */
export declare function getDayNumber(year: number, month: number, day: number): number;
/**
 * Converts javascript date to the universal(UTC) julian date.
 * @param {Date} date - Date.
 * @returns {JulianDate} UTC julian date
 */
export declare function DateToUTC(date: Date): JulianDate;
/**
 * Converts javascript date to the atomic(TAI) julian date.
 * @param {Date} date - Date.
 * @returns {JulianDate} TAI julian date
 */
export declare function DateToTAI(date: Date): JulianDate;
/**
 * Converts coordinated universal(UTC) julian date to atomic(TAI) julian date.
 * @param {JulianDate} jd - UTC julian date.
 * @returns {JulianDate} TAI julian date
 */
export declare function UTCtoTAI(jd: JulianDate): JulianDate;
/**
 * Converts atomic julian date(TAI) to the coordinated universal(UTC) julian date.
 * @param {JulianDate} tai - TAI julian date.
 * @returns {JulianDate | undefined} UTC julian date
 */
export declare function TAItoUTC(tai: JulianDate): JulianDate | undefined;
/**
 * Converts UTC julian date to the javascript date object.
 * @param {JulianDate} utc - UTC julian date.
 * @returns {Date} JavaScript Date object
 */
export declare function UTCtoDate(utc: JulianDate): Date;
/**
 * Converts TAI julian date to the javascript date object.
 * @param {JulianDate} tai - TAI julian date.
 * @returns {Date} JavaScript Date object
 */
export declare function TAItoDate(tai: JulianDate): Date;
/**
 * Adds milliseconds to the julian date.
 * @param {JulianDate} jd - Julian date.
 * @param {number} milliseconds - Milliseconds to add.
 * @returns {JulianDate} Julian date
 */
export declare function addMilliseconds(jd: JulianDate, milliseconds: number): JulianDate;
/**
 * Adds seconds to the julian date.
 * @param {JulianDate} jd - Julian date.
 * @param {number} seconds - Seconds to add.
 * @returns {JulianDate} Julian date
 */
export declare function addSeconds(jd: JulianDate, seconds: number): JulianDate;
/**
 * Adds hours to the julian date.
 * @param {JulianDate} jd - Julian date.
 * @param {number} hours - Hours to add.
 * @returns {JulianDate} Julian date
 */
export declare function addHours(jd: JulianDate, hours: number): JulianDate;
/**
 * Adds minutes to the julian date.
 * @param {JulianDate} jd - Julian date.
 * @param {number} minutes - Minutes to add.
 * @returns {JulianDate} Julian date
 */
export declare function addMinutes(jd: JulianDate, minutes: number): JulianDate;
/**
 * Adds days to the julian date.
 * @param {JulianDate} jd - Julian date.
 * @param {number} days - Days to add.
 * @returns {JulianDate} Julian date
 */
export declare function addDays(jd: JulianDate, days: number): JulianDate;
/**
 * Gets milliseconds of a julian date.
 * @param {JulianDate} jd - julian date.
 * @returns {number} Milliseconds
 */
export declare function getMilliseconds(jd: JulianDate): number;
/**
 * Gets seconds of a julian date.
 * @param {JulianDate} jd - julian date.
 * @returns {number} Seconds
 */
export declare function getSeconds(jd: JulianDate): number;
/**
 * Gets hours of a julian date.
 * @param {JulianDate} jd - julian date.
 * @returns {number} Hours
 */
export declare function getHours(jd: JulianDate): number;
/**
 * Gets minutes of a julian date.
 * @param {JulianDate} jd - julian date.
 * @returns {number} Minutes
 */
export declare function getMinutes(jd: JulianDate): number;
/**
 * Gets days of a julian date.
 * @param {JulianDate} jd - julian date.
 * @returns {number} Days
 */
export declare function getDays(jd: JulianDate): number;
/**
 * Returns days in seconds.
 * @param {number} s - Seconds.
 * @returns {number} Days
 */
export declare function secondsToDays(s: number): number;
/**
 * Returns seconds in days.
 * @param {number} d - Days.
 * @returns {number} Seconds
 */
export declare function daysToSeconds(d: number): number;
export declare const J2000TAI: number;
