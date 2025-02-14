import BingMaps from "ol/source/BingMaps";
import CartoDB from "ol/source/CartoDB";
import Cluster from "ol/source/Cluster";
import DataTile from "ol/source/DataTile";
import GeoTIFF from "ol/source/GeoTIFF";
import Google from "ol/source/Google";
import IIIF from "ol/source/IIIF";
import Image from "ol/source/Image";
import ImageArcGISRest from "ol/source/ImageArcGISRest";
import ImageCanvas from "ol/source/ImageCanvas";
import ImageMapGuide from "ol/source/ImageMapGuide";
import ImageStatic from "ol/source/ImageStatic";
import ImageTile from "ol/source/ImageTile";
import ImageWMS from "ol/source/ImageWMS";
import OGCMapTile from "ol/source/OGCMapTile";
import OGCVectorTile from "ol/source/OGCVectorTile";
import OSM from "ol/source/OSM";
import Raster from "ol/source/Raster";
import Source from "ol/source/Source";
import StadiaMaps from "ol/source/StadiaMaps";
import Tile from "ol/source/Tile";
import TileArcGISRest from "ol/source/TileArcGISRest";
import TileDebug from "ol/source/TileDebug";
import TileImage from "ol/source/TileImage";
import TileJSON from "ol/source/TileJSON";
import TileWMS from "ol/source/TileWMS";
import UrlTile from "ol/source/UrlTile";
import UTFGrid from "ol/source/UTFGrid";
import Vector from "ol/source/Vector";
import VectorTile from "ol/source/VectorTile";
import WMTS from "ol/source/WMTS";
import XYZ from "ol/source/XYZ";
import Zoomify from "ol/source/Zoomify";

import WMTSCapabilities from "../../custom/sources/WMTSCapabilities";
import FlatGeoBuf from "../../custom/sources/FlatGeoBuf";

// Extend the global window object to include advanced OpenLayers sources.
// This includes all standard OpenLayers sources (imported as `olSources`) and a custom `WMTSCapabilities` source.
// This setup allows for dynamic use of these sources across the application.
window.eoxMapAdvancedOlSources = {
  ...{
    BingMaps,
    CartoDB,
    Cluster,
    DataTile,
    GeoTIFF,
    Google,
    IIIF,
    Image,
    ImageArcGISRest,
    ImageCanvas,
    ImageMapGuide,
    ImageStatic,
    ImageTile,
    ImageWMS,
    OGCMapTile,
    OGCVectorTile,
    OSM,
    Raster,
    Source,
    StadiaMaps,
    Tile,
    TileArcGISRest,
    TileDebug,
    TileImage,
    TileJSON,
    TileWMS,
    UrlTile,
    UTFGrid,
    Vector,
    VectorTile,
    WMTS,
    XYZ,
    Zoomify,
  },
  WMTSCapabilities,
  FlatGeoBuf,
};
