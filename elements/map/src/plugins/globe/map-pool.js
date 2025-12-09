import { createXYZ } from "ol/tilegrid";
import { getFlatLayersArray } from "../../helpers";

export const createMapPool = (EOxMap, target) => {
  const maxMaps = navigator.hardwareConcurrency || 4;
  // Get the serializable definitions of all layers on the main map.
  const allMainLayers = getFlatLayersArray(EOxMap.map.getLayers());
  const layerDefs = allMainLayers
    .map((l) => l.get("_jsonDefinition"))
    .filter(Boolean);

  // Hide the main 2D map when the globe is active
  EOxMap.addEventListener("mapmounted", () => {
    EOxMap.map.getTargetElement().style.display = "none";
  });

  return Array.from({ length: maxMaps }, () => {
    const tileMap = /** @type {import("../../main").EOxMap} **/ (
      document.createElement("eox-map")
    );
    Object.assign(tileMap.style, {
      width: `256px`,
      height: `256px`,
      position: "absolute",
      top: `-9999px`,
      left: `-9999px`,
    });

    // Initialize the tileMap with its own instances of all layers
    Object.assign(tileMap, {
      projection: "EPSG:3857",
      layers: layerDefs,
    });

    target.appendChild(tileMap);
    return {
      tileMap,
      tileQueue: [],
      loadNextTile() {
        const job = this.tileQueue[0];
        requestTileFromMap(tileMap, job.layerId, job, this);
      },
    };
  });
};

async function requestTileFromMap(tileMap, layerId, job, mapPoolMap) {
  const map = tileMap.map;

  // Wait for the map to be mounted before proceeding
  if (!map) {
    tileMap.addEventListener(
      "mapmounted",
      () => requestTileFromMap(tileMap, layerId, job, mapPoolMap),
      { once: true },
    );
    return;
  }

  // Instead of re-creating the layer, make sure only the target layer is visible
  map.getLayers().forEach((l) => {
    l.setVisible(l.get("id") === layerId);
  });

  const tileGrid = createXYZ();
  const extent = tileGrid.getTileCoordExtent([
    job.tile.z,
    job.tile.x,
    job.tile.y,
  ]);

  map.getView().fit(extent, {
    callback: () => {
      map.once("rendercomplete", function () {
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
          mapPoolMap.loadNextTile();
        }
      });
      map.renderSync();
    },
  });
}

export function distributeTileToIdealMap(mapPool, layerId, tile, callback) {
  const { x, y, z } = tile;
  const job = {
    layerId, // The ID of the layer to render
    tile,
    callback,
  };
  let minDistance = 0;
  let idealMapObj = null;

  for (let i = 0; i < mapPool.length; i++) {
    const mapObj = mapPool[i];
    if (!mapObj.tileQueue.length) {
      idealMapObj = mapObj;
      break;
    }

    const lastQueuedJob = mapObj.tileQueue[mapObj.tileQueue.length - 1];
    const distance =
      Math.abs(lastQueuedJob.tile.x - x) +
      Math.abs(lastQueuedJob.tile.y - y) +
      Math.abs(lastQueuedJob.tile.z - z);
    if (minDistance === 0 || distance < minDistance) {
      minDistance = distance;
      idealMapObj = mapObj;
    }
  }
  idealMapObj.tileQueue.push(job);
  return idealMapObj;
}
