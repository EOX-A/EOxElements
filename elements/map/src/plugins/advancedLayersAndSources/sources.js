import * as olSources from "ol/source";
import WMTSCapabilities from "../../custom/sources/WMTSCapabilities";

// Extend the global window object to include advanced OpenLayers sources.
// This includes all standard OpenLayers sources (imported as `olSources`) and a custom `WMTSCapabilities` source.
// This setup allows for dynamic use of these sources across the application.
window.eoxMapAdvancedOlSources = {
  ...olSources,
  WMTSCapabilities,
};
