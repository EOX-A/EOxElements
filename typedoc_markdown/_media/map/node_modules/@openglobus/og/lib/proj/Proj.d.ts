interface IProjParams {
    units: string;
    code: string;
}
/**
 * Projection units: 'degrees', 'ft', 'm' or 'km'.
 * @enum {string}
 * @api
 */
export declare const Units: {
    DEGREES: string;
    FEET: string;
    METERS: string;
    KILOMETERS: string;
};
/**
 * Meters per unit lookup table.
 * @const
 * @type {Record<string, number>}
 */
export declare const METERS_PER_UNIT: Record<string, number>;
declare class Proj {
    id: number;
    /**
     * @public
     * @type {string}
     */
    code: string;
    /**
     * @public
     * @type {Units}
     */
    units: string;
    constructor(options: IProjParams);
    /**
     * Compare projections.
     * @public
     * @param {Proj} proj - Projection object.
     * @returns {boolean}
     */
    equal(proj: Proj): boolean;
}
export { Proj };
