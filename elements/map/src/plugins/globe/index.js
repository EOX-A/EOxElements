import { createGlobe, refreshGlobe } from "./openglobus.js";
import { createMapPool, processLayers } from "./methods.js"; // Updated import

/** @typedef {import("./types").ExtendedOLLayer} ExtendedOLLayer */

export const create = ({ EOxMap, target }) => {
  const mapPool = createMapPool(
    navigator.hardwareConcurrency || 4,
    EOxMap,
    target,
  );
  const globe = createGlobe({ EOxMap, target, mapPool });
  EOxMap.globe = globe;

  // The local setupLayerListeners and processLayers are replaced by imports from methods.js
  // setupLayerListeners is now imported from methods.js and used in processLayers from methods.js
  // processLayers is now imported from methods.js

  processLayers(EOxMap.map.getLayers().getArray(), globe, mapPool); // Call imported processLayers

  return globe;
};

window.eoxMapGlobe = {
  create,
  refresh: refreshGlobe,
};
