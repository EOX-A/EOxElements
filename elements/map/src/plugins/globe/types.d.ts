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

/** A colour as RGBA in 0..1, as og expects it. */
export type RGBA = [number, number, number, number];

/** og entity options read from a resolved OL style. */
export type GlobeEntityStyle = {
  geometry?: {
    fillColor?: RGBA;
    lineColor?: RGBA;
    lineWidth?: number;
  };
  billboard?: {
    src: string;
    size?: [number, number];
    scale: number;
    offset: [number, number];
    rotation: number;
    color: RGBA;
  };
  label?: {
    text: string;
    size: number;
    color: RGBA;
    outline?: number;
    outlineColor?: RGBA;
    align: string;
    offset: [number, number];
    rotation: number;
  };
};

/** A screen point (camera pixels) and where its ray hits the ellipsoid. */
export type ScreenHit = {
  x: number;
  y: number;
  hit: import("@openglobus/og").Vec3;
};
