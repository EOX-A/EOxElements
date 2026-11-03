import { Control } from "./Control";
import type { IControlParams } from "./Control";
interface IToggleWireframe extends IControlParams {
    isActive?: boolean;
}
/**
 * Planet GL draw mode(TRIANGLE_STRIP/LINE_STRING) changer.
 */
export declare class ToggleWireframe extends Control {
    protected _isActive: boolean;
    constructor(options?: IToggleWireframe);
    oninit(): void;
    toogleWireframe: () => void;
}
export {};
