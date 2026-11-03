import { Layer } from "../layer/Layer";
import { Segment } from "./Segment";
import { Material } from "../layer/Material";
declare class Slice {
    segment: Segment;
    layers: Layer[];
    tileOffsetArr: Float32Array;
    layerOpacityArr: Float32Array;
    constructor(segment: Segment);
    clear(): void;
    append(layer: Layer, material: Material): void;
}
export { Slice };
