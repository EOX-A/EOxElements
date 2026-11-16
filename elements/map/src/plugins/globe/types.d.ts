import Layer from "ol/layer/Layer";
import { Source, LayerRenderer } from "ol/layer/Layer";

export type OLLayer = Layer<Source, LayerRenderer<any>>;

export type ExtendedOLLayer = OLLayer & {
  styleVariables_?: object;
  updateStyleVariables?: (vars: object) => void;
};

/** The OL source a globe layer was built from, with its tile key. */
export type BuiltSource = {
  source: import("ol/source/Source").default | null;
  key: string | undefined;
};

/** A screen point (camera pixels) and where its ray hits the ellipsoid. */
export type ScreenHit = {
  x: number;
  y: number;
  hit: import("@openglobus/og").Vec3;
};
