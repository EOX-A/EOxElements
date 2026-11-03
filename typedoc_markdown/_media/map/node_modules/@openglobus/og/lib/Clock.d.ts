import { type EventsHandler } from "./Events";
import type { JulianDate } from "./astro/jd";
import { Handler } from "./webgl/Handler";
type ClockEventsList = ["tick", "end", "start", "stop"];
export interface IClockParams {
    name?: string;
    startDate?: JulianDate;
    endDate?: JulianDate;
    currentDate?: JulianDate;
    multiplier?: number;
}
/**
 * Class represents application timer that stores custom current julian datetime, and time speed multiplier.
 * @class
 * @param {Object} [params] - Clock parameters:
 * @param {JulianDate} [params.startDate=0.0] - Julian start date.
 * @param {JulianDate} [params.endDate=0.0] - Julian end date.
 * @param {JulianDate} [params.currentDate] - Julian current date. Default: current date.
 * @param {number} [params.multiplier=1.0] - Time speed multiplier.
 */
declare class Clock {
    static __counter__: number;
    protected __id: number;
    __handler: Handler | null;
    /**
     * Clock events.
     * @public
     * @type {EventsHandler<ClockEventsList>}
     */
    events: EventsHandler<ClockEventsList>;
    /**
     * Clock name.
     * @public
     * @type {string}
     */
    name: string;
    /**
     * Start julian date clock loop.
     * @public
     * @type {JulianDate}
     */
    startDate: JulianDate;
    /**
     * End julian date clock loop.
     * @public
     * @type {JulianDate}
     */
    endDate: JulianDate;
    /**
     * Current julian datetime.
     * @public
     * @type {JulianDate}
     */
    currentDate: JulianDate;
    /**
     * Animation frame delta time.
     * @public
     * @readonly
     * @type {number}
     */
    deltaTicks: number;
    /**
     * Timer activity.
     * @public
     * @type {boolean}
     */
    active: boolean;
    /**
     * Timer speed multiplier.
     * @protected
     * @type {number}
     */
    protected _multiplier: number;
    protected _running: number;
    protected _intervalDelay: number;
    protected _intervalStart: number;
    protected _intervalCallback: Function | null;
    constructor(params?: IClockParams);
    clearInterval(): void;
    setInterval(delay: number, callback: Function): void;
    /**
     * Sets current clock datetime.
     * @public
     * @param {Object} date - JavaScript Date object.
     */
    setDate(date: Date): void;
    /**
     * Returns current application date.
     * @public
     * @returns {Date} - Current date.
     */
    getDate(): Date;
    reset(): void;
    tick(dt: number): void;
    /**
     * @public
     * @param {Clock} clock - Clock instance to compare.
     * @returns {boolean} - Returns true if a clock is the same instance.
     */
    isEqual(clock: Clock): boolean;
    start(): void;
    get multiplier(): number;
    set multiplier(value: number);
    stop(): void;
}
export { Clock };
