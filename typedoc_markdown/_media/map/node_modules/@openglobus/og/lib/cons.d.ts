/**
 * Console logging singleton object.
 * @class
 */
export declare class Cons {
    protected _container: HTMLElement;
    protected _visibility: boolean;
    constructor();
    getVisibility(): boolean;
    setVisibility(visibility: boolean): void;
    /**
     * Show console panel.
     * @public
     */
    show(): void;
    /**
     * Hide console panel.
     * @public
     */
    hide(): void;
    /**
     * Adds error text in the console.
     * @public
     * @param {string} str - Error text.
     */
    logErr(str: string): void;
    /**
     * Adds warning text in the console.
     * @public
     * @param {string} str - Warning text.
     */
    logWrn(str: string): void;
    /**
     * Adds log text in the console.
     * @public
     * @param {string} str - Log text.
     */
    log(str: string): void;
}
export declare const cons: Cons;
