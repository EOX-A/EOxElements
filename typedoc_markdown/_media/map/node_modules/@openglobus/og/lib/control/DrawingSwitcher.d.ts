import { Control } from "./Control";
import { DrawingControl } from "./drawing/DrawingControl";
/**
 * Activate drawing control
 */
export declare class DrawingSwitcher extends Control {
    drawingControl: DrawingControl;
    constructor(options?: {});
    oninit(): void;
    onactivate(): void;
    ondeactivate(): void;
    protected _createMenu(): void;
}
