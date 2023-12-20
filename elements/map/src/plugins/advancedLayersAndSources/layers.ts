import * as olLayers from "ol/layer";
import STAC from "ol-stac";
import { register } from "ol/proj/proj4.js";
import proj4 from "proj4";

register(proj4); // required to support source reprojection

window.eoxMapAdvancedOlLayers = {
  ...olLayers,
  STAC,
};
