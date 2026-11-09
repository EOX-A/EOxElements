import { createGlobe, refreshGlobe, processLayers } from "./openglobus.js";
import { createMapPool, syncMapPoolLayers } from "./methods.js";
import {
  setupLayerListeners,
  createGlobusLayer,
  syncGlobeLayerOrder,
  watchGlobeLayerOrder,
} from "./openglobus.js";

/** @typedef {import("./types").ExtendedOLLayer} ExtendedOLLayer */

export const create = ({ EOxMap, target }) => {
  const mapPool = createMapPool(
    navigator.hardwareConcurrency || 4,
    EOxMap,
    target,
  );
  const globe = createGlobe({ EOxMap, target, mapPool });
  EOxMap.globe = globe;

  processLayers(EOxMap.map.getLayers().getArray(), globe, mapPool); // Call imported processLayers

  // Apply the current OL layer order to the globe and keep it in sync
  // (e.g. when layers are reordered via eox-layercontrol)
  syncGlobeLayerOrder(EOxMap, globe);
  /** @type {any} */ (globe)._layerOrderKey = watchGlobeLayerOrder(
    EOxMap,
    globe,
  );

  // Sync layers when EOxMap layers change
  EOxMap.addEventListener("layerschanged", () => {
    if (!EOxMap.globeEnabled) return;

    // Make the new layers available to the offscreen tile maps used for CanvasTiles
    syncMapPoolLayers(mapPool, EOxMap);

    const currentOlLayers = EOxMap.getFlatLayersArray(
      EOxMap.map.getLayers().getArray(),
    ).filter((l) => l.get("type") !== "Group");

    // Remove globe layers that are no longer in OL map
    const globusLayers = globe.planet.layers.slice();
    globusLayers.forEach((gl) => {
      const stillExists = currentOlLayers.find(
        (ol) => ol.get("id") === gl.name,
      );
      if (!stillExists) {
        globe.planet.removeLayer(gl);
      }
    });

    // Add new OL layers to globe
    currentOlLayers.forEach((ol) => {
      const existing = globe.planet.getLayerByName(ol.get("id"));
      if (!existing) {
        const newGlLayer = createGlobusLayer(ol, mapPool);
        if (newGlLayer) {
          globe.planet.addLayer(newGlLayer);
          setupLayerListeners(ol, globe, mapPool);
        }
      } else {
        // Ensure properties like visibility and opacity are synced
        existing.setVisibility(ol.getVisible());
        existing.opacity = ol.getOpacity();
      }
    });

    syncGlobeLayerOrder(EOxMap, globe);
  });

  return globe;
};

window.eoxMapGlobe = {
  create,
  refresh: refreshGlobe,
};
