import Layer from "ol/layer/Layer";
import { Source, LayerRenderer } from "ol/layer/Layer";

export type OLLayer = Layer<Source, LayerRenderer<any>>;

export type ExtendedOLLayer = OLLayer & {
  styleVariables_?: object;
  updateStyleVariables?: (vars: object) => void;
};
