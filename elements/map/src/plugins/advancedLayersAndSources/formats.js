import EsriJSON from "ol/format/EsriJSON";
import GML from "ol/format/GML";
import GPX from "ol/format/GPX";
import IGC from "ol/format/IGC";
import IIIFInfo from "ol/format/IIIFInfo";
import KML from "ol/format/KML";
import OWS from "ol/format/OWS";
import Polyline from "ol/format/Polyline";
import TopoJSON from "ol/format/TopoJSON";
import WFS from "ol/format/WFS";
import WKB from "ol/format/WKB";
import WKT from "ol/format/WKT";
import WMSCapabilities from "ol/format/WMSCapabilities";
import WMSGetFeatureInfo from "ol/format/WMSGetFeatureInfo";
import WMTSCapabilities from "ol/format/WMTSCapabilities";

// Attach all OpenLayers formats to the global `window` object under `eoxMapAdvancedOlFormats`.
// This makes the formats accessible throughout the application and allows dynamic use of different OpenLayers formats.
window.eoxMapAdvancedOlFormats = {
  ...{
    EsriJSON,
    GML,
    GPX,
    IGC,
    IIIFInfo,
    KML,
    OWS,
    Polyline,
    TopoJSON,
    WFS,
    WKB,
    WKT,
    WMSCapabilities,
    WMSGetFeatureInfo,
    WMTSCapabilities,
  },
};
