import { Control } from "./Control";
import type { IControlParams } from "./Control";
import { HeightRuler } from "./heightRuler/HeightRuler";
interface IRulerSwitcherParams extends IControlParams {
    ignoreTerrain?: boolean;
}
/**
 * Activate ruler
 */
export declare class RulerSwitcher extends Control {
    ruler: HeightRuler;
    constructor(options?: IRulerSwitcherParams);
    oninit(): void;
    onactivate(): void;
    ondeactivate(): void;
    protected _createMenuBtn(): void;
}
export {};
