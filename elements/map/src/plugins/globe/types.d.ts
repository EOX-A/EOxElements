import Layer from "ol/layer/Layer";
import { Source, LayerRenderer } from "ol/layer/Layer";

export type OLLayer = Layer<Source, LayerRenderer<any>>;

export type ExtendedOLLayer = OLLayer & {
  styleVariables_?: object;
  updateStyleVariables?: (vars: object) => void;
};

/** A screen point (camera pixels) and where its ray hits the ellipsoid. */
export type ScreenHit = {
  x: number;
  y: number;
  hit: import("@openglobus/og").Vec3;
};
