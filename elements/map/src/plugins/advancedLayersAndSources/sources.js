import BingMaps from "ol/source/BingMaps";
import CartoDB from "ol/source/CartoDB";
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
import OGCMapTile from "ol/source/OGCMapTile";
import OGCVectorTile from "ol/source/OGCVectorTile";
import Raster from "ol/source/Raster";
import Source from "ol/source/Source";
import StadiaMaps from "ol/source/StadiaMaps";
import TileArcGISRest from "ol/source/TileArcGISRest";
import TileDebug from "ol/source/TileDebug";
import TileImage from "ol/source/TileImage";
import TileJSON from "ol/source/TileJSON";
import UrlTile from "ol/source/UrlTile";
import UTFGrid from "ol/source/UTFGrid";
import Zoomify from "ol/source/Zoomify";

import Cluster from "../../custom/sources/Cluster";
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
    OGCMapTile,
    OGCVectorTile,
    Raster,
    Source,
    StadiaMaps,
    TileArcGISRest,
    TileDebug,
    TileImage,
    TileJSON,
    UrlTile,
    UTFGrid,
    Zoomify,
  },
  WMTSCapabilities,
  FlatGeoBuf,
};
