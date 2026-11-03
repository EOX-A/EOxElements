import { Control } from "./Control";
import type { IControlParams } from "./Control";
import { Vec2 } from "../math/Vec2";
interface IScaleControlParams extends IControlParams {
    isCenter?: boolean;
}
/**
 * Planet zoom buttons control.
 */
export declare class ScaleControl extends Control {
    el: HTMLElement | null;
    protected _template: string;
    protected _minWidth: number;
    protected _maxWidth: number;
    protected _isCenter: boolean;
    protected _scaleLabelEl: HTMLElement | null;
    protected _mPx: number;
    protected currWidth: number;
    protected _metersInMinSize: number;
    constructor(options?: IScaleControlParams);
    protected _renderTemplate(): HTMLElement;
    oninit(): void;
    protected _drawScreen(px: Vec2): void;
}
export {};
