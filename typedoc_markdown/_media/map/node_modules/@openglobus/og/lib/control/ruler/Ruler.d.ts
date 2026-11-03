import { Control } from "../Control";
import type { IControlParams } from "../Control";
import { RulerScene } from "./RulerScene";
export interface IRulerParams extends IControlParams {
    ignoreTerrain?: boolean;
}
export declare class Ruler extends Control {
    protected _rulerScene: RulerScene;
    constructor(options?: IRulerParams);
    set ignoreTerrain(v: boolean);
    oninit(): void;
    onactivate(): void;
    ondeactivate(): void;
}
