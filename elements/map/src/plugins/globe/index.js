import { createGlobe, refreshGlobe } from "./openglobus.js";
import { createMapPool, distributeTileToIdealMap } from "./methods.js";

let mapPool;

export const create = ({ EOxMap, target }) => {
  /**
   * The maximum amount of maps to be spawned for rendering
   */
  const maxMaps = navigator.hardwareConcurrency || 4;

  const setLayers = (layers) => {
    layers.forEach((layer) => {
      if (layer.getProperties().type === "Group") {
        setLayers(layer.getLayers().getArray());
        return
      }
      layers.forEach((layer) => {
      // layer.on("change", () => {
      //   // Assuming styleVariables update for Webgl layer
      //   doForEachLayer(layer, (targetLayer) => {
      //     if (targetLayer.getProperties().type === "WebGL") {
      //       targetLayer.updateStyleVariables(layer.styleVariables_);
      //     }
      //   });
      // });
      layer.on("propertychange", ({ key }) => {
        switch (key) {
          case "visible":
            doForEachLayer(layer, (targetLayer) => {
              targetLayer.setVisible(layer.getVisible());
            });
            break;
          case "opacity":
            doForEachLayer(layer, (targetLayer) => {
              targetLayer.setOpacity(layer.getOpacity());
            });
            break;
        }
      });
    });
    });
  };

  /**
   * Create map pool of eox-maps for rendering in parallel
   */
  mapPool = createMapPool(maxMaps, EOxMap, target);

  /**
   * Create the globe and render tiles, calling a callback
   * for each once done
   */
  const globe = createGlobe({
    map: EOxMap,
    target,
    renderTile: (tile, callback) => {
      /**
       * For each tile, distribute to ideal map
       */
      const mapPoolCandidate = distributeTileToIdealMap(
        mapPool,
        tile,
        (renderedMapCanvas) => {
          callback(renderedMapCanvas);
        },
      );

      /**
       * Start loading immediately if the map was idle
       */
      if (mapPoolCandidate.tileQueue.length === 1) {
        mapPoolCandidate.loadNextTile();
      }
    },
  });
  EOxMap.globe = globe;
  const doForEachLayer = (originalLayer, changeFunction) => {
    for (let i = 0; i < mapPool.length; i++) {
      const mapObj = mapPool[i];
      changeFunction(mapObj.tileMap.getLayerById(originalLayer.get("id")));
    }
    refreshGlobe();
  };
  const layers = EOxMap.map.getLayers().getArray()
  setLayers(layers);
};

export const refresh = (mapPoolCallback) => {
  mapPoolCallback(mapPool);
  refreshGlobe();
};

window.eoxMapGlobe = {
  create,
  refresh,
};
