import { createGlobe } from "./openglobus.js";
import { createGlobe as createGlobeCesium } from "./cesium.js";
import { createMapPool, distributeTileToIdealMap } from "./methods.js";

const create = ({ EOxMap, target }) => {
  /**
   * The maximum amount of maps to be spawned for rendering
   */
  const maxMaps = navigator.hardwareConcurrency || 4;

  /**
   * Create map pool of eox-maps for rendering in parallel
   */
  const mapPool = createMapPool(maxMaps, EOxMap, target);

  /**
   * Create the globe and render tiles, calling a callback
   * for each once done
   */
  const globe = createGlobe({
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
  const globeCesium = createGlobeCesium({
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
  window.eoxMapGlobe.globe = globe;
};

window.eoxMapGlobe = {
  create,
};
