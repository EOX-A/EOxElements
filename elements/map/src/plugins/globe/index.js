import { createGlobe, refreshGlobe } from "./openglobus.js";
import { createMapPool } from "./methods.js";

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed
 * since the last time the debounced function was invoked.
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @returns {Function} Returns the new debounced function.
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Finds a layer within an EOxMap instance by its ID.
 * @param {import("../../main").EOxMap} eoxMap
 * @param {string} id
 * @returns {import("ol/layer/Layer").default | undefined}
 */
const getOLLayerById = (eoxMap, id) => {
  if (!eoxMap.map) return undefined;
  return eoxMap.map.getLayers().getArray().find((l) => l.get("id") === id);
};

export const create = ({ EOxMap, target }) => {
  const mapPool = createMapPool(navigator.hardwareConcurrency || 4, EOxMap, target);
  const globe = createGlobe({ EOxMap, target, mapPool });
  EOxMap.globe = globe;

  /**
   * Propagates style changes from a main OL layer to all corresponding
   * layers within the tile rendering pool.
   * @param {import("ol/layer/Layer").default} changedOlLayer
   */
  const updateStyleInPool = (changedOlLayer) => {
    const layerId = changedOlLayer.get("id");
    const newStyleVariables = changedOlLayer.styleVariables_;
    if (!layerId || !newStyleVariables) return;

    mapPool.forEach((poolItem) => {
      poolItem.tileQueue.length = 0;
      const layerInTileMap = getOLLayerById(poolItem.tileMap, layerId);
      if (layerInTileMap && layerInTileMap.updateStyleVariables) {
        layerInTileMap.updateStyleVariables(newStyleVariables);
      }
    });
  };

  const getGlobusLayer = (olLayer) => {
    const id = olLayer.get("id");
    return globe.planet.getLayerByName(id);
  };

  const setupLayerListeners = (olLayer) => {
    // Create a debounced function specifically for refreshing the globe
    const debouncedRefresh = debounce(() => {
      refreshGlobe();
    }, 200);

    olLayer.on("change", () => {
      if (olLayer.styleVariables_) {
        // Update the internal state of the render pool immediately
        updateStyleInPool(olLayer);
        // Debounce the expensive globe refresh call
        debouncedRefresh();
      }
    });

    olLayer.on("propertychange", ({ key }) => {
      const globusLayer = getGlobusLayer(olLayer);
      if (!globusLayer) return;
      switch (key) {
        case "visible":
          globusLayer.setVisibility(olLayer.getVisible());
          break;
        case "opacity":
          globusLayer.opacity = olLayer.getOpacity();
          break;
      }
    });
  };

  const processLayers = (layers) => {
    layers.forEach((olLayer) => {
      if (olLayer.get("id")) {
        setupLayerListeners(olLayer);
      }
      if (olLayer.getLayers) {
        processLayers(olLayer.getLayers().getArray());
      }
    });
  };

  processLayers(EOxMap.map.getLayers().getArray());
};

window.eoxMapGlobe = {
  create,
};