import { AnyLayer, CustomLayerInterface } from "mapbox-gl";

export type MapboxLayer = Exclude<AnyLayer, CustomLayerInterface>;
