import Graticule from "ol/layer/Graticule";
import Heatmap from "ol/layer/Heatmap";
import Layer from "ol/layer/Layer";
import VectorImage from "ol/layer/VectorImage";
import WebGLPoints from "ol/layer/WebGLPoints";
import WebGLTile from "ol/layer/WebGLTile";
import WebGLVector from "ol/layer/WebGLVector";
import STAC from "ol-stac";
import { register } from "ol/proj/proj4";
import proj4 from "proj4";

// Register proj4 with OpenLayers to support reprojection of map sources.
// This is necessary for supporting coordinate systems other than the default.
register(proj4);

// Extend the global window object to include advanced OpenLayers layers.
// This includes all standard OpenLayers layers (imported as `olLayers`) and the custom `STAC` layer.
// This setup allows for dynamic use of these layers across the application.
window.eoxMapAdvancedOlLayers = {
  ...{
    Graticule,
    Heatmap,
    Image,
    Layer,
    VectorImage,
    WebGLPoints,
    WebGLTile,
    WebGLVector,
  },
  STAC,
};
