import { createXYZ } from "ol/tilegrid";

const tileGrid = createXYZ({
  extent: [-180, -90, 180, 90],
  tileSize: 256,
  maxResolution: 0.6,
  maxZoom: 22,
});

/**
 * Creates a map pool with a maximum number of maps,
 * each map accepting a tile queue to render
 *
 * @param {Number} maxMaps - The maximum number of parallel rendering maps to be spawned
 * @param {import("../../main").EOxMap} EOxMap - The map element containing the map instance, center, animation options, and other properties.
 * @param {HTMLElement} target - The target to attach the rendering maps to
 * @returns A map pool ready to accept jobs
 */
export const createMapPool = (maxMaps, EOxMap, target) =>
  Array.from({ length: maxMaps }, () => {
    EOxMap.addEventListener("mapmounted", () => {
      EOxMap.map.getTargetElement().style.display = "none";
    });
    const tileMap =
      /** @type {import("../../main").EOxMap} **/ document.createElement(
        "eox-map",
      );
    Object.assign(tileMap.style, {
      width: `256px`,
      height: `256px`,
      position: "absolute",
      top: `-9999px`,
      left: `-9999px`,
    });
    Object.assign(tileMap, {
      projection: "EPSG:4326",
      layers: EOxMap.layers.reverse(),
    });
    target.appendChild(tileMap);

    return {
      tileMap,
      tileQueue: [],
      loadNextTile() {
        requestTileFromMap(tileMap, this.tileQueue[0], this);
      },
    };
  });

/**
 * Request a single tile from a render map
 *
 * @param {import("../../main").EOxMap} tileMap - The map element currently rendering the tile
 * @param {{
 *  tile: {
 *   x: import("ol/coordinate").Coordinate,
 *    y: import("ol/coordinate").Coordinate,
 *    z: import("ol/coordinate").Coordinate,
 *  callback: Function
 * }}} job - The job for one single tile to be rendered
 * @param {*} mapPoolMap - The map pool object
 */
async function requestTileFromMap(tileMap, job, mapPoolMap) {
  const extent = tileGrid.getTileCoordExtent([
    job.tile.z,
    job.tile.x,
    job.tile.y,
  ]);
  const map = tileMap.map;
  map.getView().fit(extent, {
    callback: () => {
      map.once("rendercomplete", function () {
        // debugger
        const mapCanvas = document.createElement("canvas");
        const size = map.getSize();
        mapCanvas.width = size[0];
        mapCanvas.height = size[1];
        const mapContext = mapCanvas.getContext("2d");
        Array.prototype.forEach.call(
          map
            .getViewport()
            .querySelectorAll(".ol-layer canvas, canvas.ol-layer"),
          function (canvas) {
            if (canvas.width > 0) {
              const opacity =
                canvas.parentNode.style.opacity || canvas.style.opacity;
              mapContext.globalAlpha = opacity === "" ? 1 : Number(opacity);
              let matrix;
              const transform = canvas.style.transform;
              if (transform) {
                // Get the transform parameters from the style's transform matrix
                matrix = transform
                  .match(/^matrix\(([^\(]*)\)$/)[1]
                  .split(",")
                  .map(Number);
              } else {
                matrix = [
                  parseFloat(canvas.style.width) / canvas.width,
                  0,
                  0,
                  parseFloat(canvas.style.height) / canvas.height,
                  0,
                  0,
                ];
              }
              // Apply the transform to the export map context
              CanvasRenderingContext2D.prototype.setTransform.apply(
                mapContext,
                matrix,
              );
              const backgroundColor = canvas.parentNode.style.backgroundColor;
              if (backgroundColor) {
                mapContext.fillStyle = backgroundColor;
                mapContext.fillRect(0, 0, canvas.width, canvas.height);
              }
              mapContext.drawImage(canvas, 0, 0);
            }
          },
        );
        mapContext.globalAlpha = 1;
        mapContext.setTransform(1, 0, 0, 1, 0, 0);
        job.callback(mapCanvas);
        mapPoolMap.tileQueue.shift();
        if (mapPoolMap.tileQueue.length) {
          // load next tile in queuedTile
          mapPoolMap.loadNextTile();
        }
      });
      map.renderSync();
    },
  });
}

/**
 * Distributor function to get an ideal worker from the pool
 * based on distance of queued tiles
 *
 * @param {*} mapPool - TODO
 * @param {*} tile - TODO
 * @param {*} callback - TODO
 */
export function distributeTileToIdealMap(mapPool, tile, callback) {
  const { x, y, z } = tile;
  const job = {
    tile,
    callback,
  };
  let minDistance = 0;
  let idealMapObj = null;

  for (let i = 0; i < mapPool.length; i++) {
    const mapObj = mapPool[i];
    if (!mapObj.tileQueue.length) {
      // if the worker is idle, use it
      idealMapObj = mapObj;
      break;
    }

    for (let j = 0; j < mapObj.tileQueue.length; j++) {
      const queuedJob = mapObj.tileQueue[j];
      const distance =
        Math.abs(queuedJob.tile.x - x) +
        Math.abs(queuedJob.tile.y - y) +
        Math.abs(queuedJob.tile.z - z);
      if (minDistance === 0 || distance < minDistance) {
        minDistance = distance;
        idealMapObj = mapObj;
        if (i === mapPool.length - 1) {
          // if we are at the last worker, no need to look further
          break;
        }
      }
    }
  }
  idealMapObj.tileQueue.push(job);
  return idealMapObj;
}
