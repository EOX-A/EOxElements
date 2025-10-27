import {
  Globe,
  CanvasTiles,
  quadTreeStrategyType,
  // GlobusRgbTerrain
} from "@openglobus/og";
import { createXYZ } from "ol/tilegrid";

const tileGrid = createXYZ({
  extent: [-180, -90, 180, 90],
  tileSize: 256,
  maxResolution: 0.6,
  maxZoom: 22,
});

const maxMaps = navigator.hardwareConcurrency || 4;

let mapPool;
const createMapPool = ({ EOxMap, target }) =>
  Array.from({ length: maxMaps }, (_, i) => {
    EOxMap.addEventListener("mapmounted", () => {
      EOxMap.map.getTargetElement().style.display = "none";
    });
    const tileMap = document.createElement("eox-map");
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

async function requestTileFromMap(tileMap, job, mapPoolMap) {
  const extent = tileGrid.getTileCoordExtent([
    job.tile.z,
    job.tile.x,
    job.tile.y,
  ]);
  const map = tileMap.map;
  map.getView().fit(extent, {
    callback: () => {
      // console.log(extent)
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
 * distributor function to get an ideal worker from the pool
 * based on distance of queued tiles
 */
function distributeTileToIdealMap(tile, callback) {
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

const create = ({ EOxMap, target }) => {
  mapPool = createMapPool({ EOxMap, target });

  const canvasTilesLayer = new CanvasTiles("mainThreadCanvasTilesLayer", {
    visibility: true,
    isBaseLayer: false,
    async drawTile(material, applyCanvas) {
      if (!material.segment) {
        return;
      }
      const tile = {
        x: material.segment.tileX,
        y: material.segment.tileY,
        z: material.segment.tileZoom,
      };

      const mapPoolCandidate = distributeTileToIdealMap(
        tile,
        (renderedMapCanvas) => {
          applyCanvas(renderedMapCanvas);
        },
      );

      // start loading immediately if the worker was idle
      if (mapPoolCandidate.tileQueue.length === 1) {
        mapPoolCandidate.loadNextTile();
      }
    },
  });
  const globus = new Globe({
    // name: 'Globe',
    target,
    layers: [canvasTilesLayer],
    quadTreeStrategyPrototype: quadTreeStrategyType.epsg4326,
    // controls: [],
    sun: { active: false },
    atmosphereEnabled: false,
    // terrain: new GlobusRgbTerrain(),
  });
  globus.planet.renderer.controls.SimpleSkyBackground.colorOne =
    "rgba(255,255,255)";
  globus.planet.renderer.controls.SimpleSkyBackground.colorTwo =
    "rgba(255,255,255)";
  return globus;
};

window.eoxMapGlobe = {
  create,
};
