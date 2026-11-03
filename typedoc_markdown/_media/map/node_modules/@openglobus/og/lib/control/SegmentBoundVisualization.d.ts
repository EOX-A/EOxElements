import { EntityCollection } from "../entity/EntityCollection";
import { Control } from "./Control";
import type { IControlParams } from "./Control";
/**
 * Frame per second(FPS) display control.
 */
export declare class SegmentBoundVisualization extends Control {
    protected _boundingSphereCollection: EntityCollection;
    constructor(options: IControlParams);
    oninit(): void;
    protected _predraw(): void;
    protected _draw(): void;
}
