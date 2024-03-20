import * as olSources from "ol/source";
import WMTSCapabilities from "../../custom/sources/WMTSCapabilities";

window.eoxMapAdvancedOlSources = {
  ...olSources,
  WMTSCapabilities,
};
