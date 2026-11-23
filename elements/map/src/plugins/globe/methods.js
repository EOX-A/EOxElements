import View from "ol/View";
import { createXYZ } from "ol/tilegrid";
import {
  Projection,
  addProjection,
  addCoordinateTransforms,
  get as getProjection,
  toLonLat,
  fromLonLat,
} from "ol/proj";
import { getFlatLayersArray, getLayerById } from "../../helpers/layer.js";
import {
  isGeoZarrLayer,
  getGeoZarrSourceBands,
} from "../../helpers/geozarr.js";

/** @typedef {import("./types").ExtendedOLLayer} ExtendedOLLayer */

/**
 * Scaled polar equirectangular projection code used to render OpenGlobus
 * polar `SegmentLonLat` tiles (`±85.05112877980659°..±90°`) onto square
 * 256×256 offscreen `CanvasTiles` viewports with a 1:1 aspect ratio.
 */
export const GLOBE_POLE_PROJECTION = "EOX:GLOBE_POLE";
export const GLOBE_POLE_LAT_MIN = 85.05112877980659;
export const GLOBE_POLE_SCALE = 360 / (90 - GLOBE_POLE_LAT_MIN);

/**
 * Registers `EOX:GLOBE_POLE` once in OpenLayers' projection registry.
 * Uses `"m"` units so `ol/reproj` computes true spherical meters-per-pixel
 * via `toEPSG4326` when selecting pyramid levels from projected data sources
 * (e.g. `EPSG:6932` EASE-Grid 2.0 GeoZarr cubes).
 */
export function ensureGlobePoleProjection() {
  if (getProjection(GLOBE_POLE_PROJECTION)) return;

  const poleProjection = new Projection({
    code: GLOBE_POLE_PROJECTION,
    units: "m",
    extent: [-180, -90 * GLOBE_POLE_SCALE, 180, 90 * GLOBE_POLE_SCALE],
    worldExtent: [-180, -90, 180, 90],
    global: false,
  });

  addProjection(poleProjection);
  addCoordinateTransforms(
    "EPSG:4326",
    poleProjection,
    (coord) => [coord[0], coord[1] * GLOBE_POLE_SCALE],
    (coord) => [coord[0], coord[1] / GLOBE_POLE_SCALE],
  );
  addCoordinateTransforms(
    "EPSG:3857",
    poleProjection,
    (coord) => {
      const lonLat = toLonLat(coord, "EPSG:3857");
      return [lonLat[0], lonLat[1] * GLOBE_POLE_SCALE];
    },
    (coord) => fromLonLat([coord[0], coord[1] / GLOBE_POLE_SCALE], "EPSG:3857"),
  );
}

// Offscreen maps are an implementation detail, not additional public map sources.
const INTERNAL_MAP_EVENTS = [
  "layerschanged",
  "mapmounted",
  "loadend",
  "resize",
  "select",
  "clusterSelect",
  "drawend",
  "addfeatures",
  "eox:activity",
];

/**
 * Returns the serializable definitions of all (non-group) layers of the main map,
 * enriched with live runtime state (such as resolved GeoZarr bands/dimensions and
 * WebGL style variables) for offscreen `CanvasTiles` pool maps.
 *
 * Sources default to `crossOrigin: "anonymous"` and `transition: 0`: the rendered
 * pool canvases are uploaded to WebGL by OpenGlobus without fade-in alpha frames.
 *
 * @param {import("../../main").EOxMap} EOxMap - Instance of EOxMap class.
 * @returns {Array<import("../../layers").EoxLayer>} The layer definitions.
 */
export const getPoolLayerDefs = (EOxMap) =>
  getFlatLayersArray(EOxMap.map.getLayers().getArray())
    .filter((l) => l.get("type") !== "Group")
    .map((olLayer) => {
      const def = olLayer.get("_jsonDefinition");
      if (!def) return null;

      const layerAny = /** @type {any} */ (olLayer);
      const liveStyleVars = layerAny.styleVariables_;
      const cleanProperties = def.properties
        ? { ...def.properties }
        : undefined;
      if (cleanProperties && "_geozarrReady" in cleanProperties) {
        delete cleanProperties._geozarrReady;
      }

      const nextDef = {
        ...def,
        ...(cleanProperties ? { properties: cleanProperties } : {}),
        ...(def.style || liveStyleVars
          ? {
              style: {
                ...(def.style || {}),
                ...(liveStyleVars
                  ? {
                      variables: {
                        ...(def.style?.variables || {}),
                        ...liveStyleVars,
                      },
                    }
                  : {}),
              },
            }
          : {}),
      };

      if (!def.source) {
        return nextDef;
      }

      /** @type {Record<string, any>} */
      const nextSource = {
        ...def.source,
        crossOrigin: def.source.crossOrigin ?? "anonymous",
        transition: 0,
      };

      if (isGeoZarrLayer(olLayer)) {
        const liveSource = /** @type {any} */ (layerAny.getSource?.());
        const liveBands = getGeoZarrSourceBands(liveSource);
        const liveUrl = liveSource?.url_ || liveSource?.url || def.source.url;
        const liveVar = liveSource?.variable_ || def.source.variable;
        const liveDims =
          liveSource?.dimensions_ &&
          Object.keys(liveSource.dimensions_).length > 0
            ? { ...liveSource.dimensions_ }
            : def.source.dimensions;

        if (liveUrl) nextSource.url = liveUrl;
        if (liveVar) {
          nextSource.variable = liveVar;
        } else if (liveBands.length > 0) {
          nextSource.bands = liveBands;
        }
        if (liveDims) {
          nextSource.dimensions = { ...liveDims };
        }

        // Prevent each pool map from running duplicate .zmetadata & time-slice discovery;
        // requestTileFromMap awaits mainLayer._geozarrReady and syncs resolved state.
        nextDef.properties = {
          ...(nextDef.properties || {}),
          _geozarrInitialized: true,
          layerDatetime: false,
          timeControlValues: false,
        };
      }

      nextDef.source = /** @type {any} */ (nextSource);
      return nextDef;
    })
    .filter(Boolean);

/**
 * Synchronizes a GeoZarr layer in an offscreen pool map with the live state
 * of its counterpart on the main map (bands, URL, dimensions, style variables).
 *
 * @param {import("ol/layer/Base").default|any} mainLayer
 * @param {import("ol/layer/Base").default|any} poolLayer
 * @returns {boolean} Whether any source or style state was updated.
 */
export function syncGeoZarrPoolLayer(mainLayer, poolLayer) {
  if (!mainLayer || !poolLayer || !isGeoZarrLayer(mainLayer)) return false;

  let changed = false;
  const mainAny = /** @type {any} */ (mainLayer);
  const poolAny = /** @type {any} */ (poolLayer);

  if (
    mainAny.styleVariables_ &&
    typeof poolAny.updateStyleVariables === "function"
  ) {
    const prevVars = poolAny.styleVariables_ || {};
    const nextVars = mainAny.styleVariables_;
    const varsDiffer = Object.keys(nextVars).some(
      (k) => prevVars[k] !== nextVars[k],
    );
    if (varsDiffer) {
      poolAny.updateStyleVariables({ ...nextVars });
      changed = true;
    }
  }

  const mainSource = mainAny.getSource?.();
  const poolSource = poolAny.getSource?.();
  if (!mainSource) return changed;

  const mainUrl = mainSource.url_ || mainSource.url;
  const poolUrl = poolSource?.url_ || poolSource?.url;
  const mainBands = getGeoZarrSourceBands(mainSource);
  const poolBands = getGeoZarrSourceBands(poolSource);
  const mainVar = mainSource.variable_;
  const poolVar = poolSource?.variable_;
  const mainDims =
    mainSource.dimensions_ && Object.keys(mainSource.dimensions_).length > 0
      ? { ...mainSource.dimensions_ }
      : null;

  const isPoolErrored =
    typeof poolSource?.getState === "function" &&
    poolSource.getState() === "error";
  const hasValidMainSelection = Boolean(mainVar || mainBands.length > 0);
  const needsSourceRecreate =
    hasValidMainSelection &&
    Boolean(mainUrl && mainSource.constructor) &&
    (isPoolErrored ||
      !poolSource ||
      mainUrl !== poolUrl ||
      mainVar !== poolVar ||
      JSON.stringify(mainBands) !== JSON.stringify(poolBands));

  if (needsSourceRecreate) {
    const GeoZarrClass = /** @type {any} */ (mainSource.constructor);
    const proj =
      mainSource.getProjection?.() ||
      mainLayer.get?.("_mapProjection") ||
      mainLayer.get?.("_jsonDefinition")?.source?.projection;
    const newPoolSource = new GeoZarrClass({
      url: mainUrl,
      ...(mainVar ? { variable: mainVar } : { bands: mainBands }),
      ...(mainDims ? { dimensions: mainDims } : {}),
      ...(proj ? { projection: proj } : {}),
      crossOrigin: "anonymous",
      transition: 0,
    });
    if (mainDims) {
      newPoolSource._syncedDimensionsJson = JSON.stringify(mainDims);
    }
    poolAny.setSource(newPoolSource);
    return true;
  }

  if (mainDims && poolSource) {
    const targetJson = JSON.stringify(mainDims);
    const currentJson =
      poolSource._syncedDimensionsJson ??
      JSON.stringify(poolSource.dimensions_ || {});
    const needsDimUpdate =
      targetJson !== currentJson ||
      (Array.isArray(mainSource.bandExtraSelection_) &&
        Array.isArray(poolSource.bandExtraSelection_) &&
        JSON.stringify(mainSource.bandExtraSelection_) !==
          JSON.stringify(poolSource.bandExtraSelection_));

    if (needsDimUpdate) {
      if (
        typeof poolSource.updateDimensions === "function" &&
        (!poolSource.getState || poolSource.getState() === "ready")
      ) {
        try {
          poolSource.updateDimensions(mainDims);
          poolSource._syncedDimensionsJson = targetJson;
          changed = true;
        } catch {
          // Dimension metadata may still be resolving; will retry once ready.
        }
      } else {
        poolSource.dimensions_ = { ...mainDims };
      }
    }
  }

  return changed;
}

/**
 * Waits for an OpenLayers source in `"loading"` state (such as `GeoZarr` or `DataTile`)
 * to transition to `"ready"` or `"error"`.
 *
 * @param {any} source
 * @returns {Promise<void>}
 */
async function waitForSourceReady(source) {
  if (!source) return;
  if (typeof source.ready === "function") {
    try {
      await source.ready();
    } catch {
      // Handled via source.getState()
    }
  }
  if (
    typeof source.getState === "function" &&
    source.getState() === "loading"
  ) {
    await new Promise((resolve) => {
      const checkState = () => {
        if (source.getState() !== "loading") {
          source.un?.("change", checkState);
          resolve(undefined);
        }
      };
      if (typeof source.on === "function") {
        source.on("change", checkState);
        checkState();
      } else {
        resolve(undefined);
      }
    });
  }
}

/**
 * Ensures both the main map layer's async initialization (e.g. `_geozarrReady`)
 * and the pool map layer's source are ready before fitting and rendering a tile.
 *
 * @param {import("ol/layer/Base").default|any} targetLayer
 * @param {import("ol/layer/Base").default|any} [mainLayer]
 * @returns {Promise<void>}
 */
async function waitForLayerReady(targetLayer, mainLayer) {
  const mainReady = mainLayer?.get?.("_geozarrReady");
  if (mainReady) {
    try {
      await mainReady;
    } catch {
      // Ignore setup failure; source state check handles errors
    }
  }

  if (mainLayer && targetLayer && isGeoZarrLayer(mainLayer)) {
    syncGeoZarrPoolLayer(mainLayer, targetLayer);
  }

  const targetReady = targetLayer?.get?.("_geozarrReady");
  if (targetReady) {
    try {
      await targetReady;
    } catch {
      // Ignore
    }
  }

  const source = /** @type {any} */ (targetLayer)?.getSource?.();
  await waitForSourceReady(source);

  // Apply any dimension slice that could only be resolved once pool source reached "ready".
  if (mainLayer && targetLayer && isGeoZarrLayer(mainLayer)) {
    syncGeoZarrPoolLayer(mainLayer, targetLayer);
  }
}

/**
 * Aborts all queued (non-active) tile jobs in a pool item and marks any in-flight
 * active job as cancelled so OpenGlobus request counters never leak.
 *
 * @param {any} poolItem
 */
export const clearPoolQueue = (poolItem) => {
  if (!poolItem) return;
  while (poolItem.tileQueue?.length) {
    const queuedJob = poolItem.tileQueue.shift();
    queuedJob?.abort?.();
  }
  if (poolItem.activeJob) {
    poolItem.activeJob.cancelled = true;
  }
};

/**
 * Disposes offscreen pool maps and releases their WebGL contexts when leaving globe mode.
 *
 * @param {Array<any> | undefined | null} mapPool
 */
export const disposeMapPool = (mapPool) => {
  if (!Array.isArray(mapPool)) return;
  mapPool.forEach((poolItem) => {
    clearPoolQueue(poolItem);
    poolItem.disposed = true;
    try {
      poolItem.tileMap?.map?.setTarget(null);
      poolItem.tileMap?.map?.dispose?.();
      poolItem.tileMap?.remove?.();
    } catch {
      // Ignore disposal errors
    }
  });
};

/**
 * Syncs the layers of the offscreen tile maps in the pool with the layers of
 * the main map, so that layers added later (e.g. in a new storytelling tour
 * step) can be rendered as globe tiles.
 *
 * @param {Array<any>} mapPool - The pool of offscreen maps used for CanvasTiles rendering.
 * @param {import("../../main").EOxMap} EOxMap - Instance of EOxMap class.
 */
export const syncMapPoolLayers = (mapPool, EOxMap) => {
  const layerDefs = getPoolLayerDefs(EOxMap);
  mapPool.forEach((poolItem) => {
    clearPoolQueue(poolItem);
    poolItem.tileMap.layers = layerDefs;
  });
};

/**
 * Creates a pool of offscreen `eox-map` instances for rendering `CanvasTiles` on the globe.
 *
 * @param {number} maxMaps
 * @param {import("../../main").EOxMap} EOxMap
 * @param {HTMLElement} target
 */
export const createMapPool = (maxMaps, EOxMap, target) => {
  ensureGlobePoleProjection();
  const layerDefs = getPoolLayerDefs(EOxMap);

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

    INTERNAL_MAP_EVENTS.forEach((type) => {
      tileMap.addEventListener(type, (event) => event.stopPropagation());
    });

    Object.assign(tileMap, {
      projection: "EPSG:3857",
      layers: layerDefs,
    });

    target.appendChild(tileMap);
    return {
      mainMap: EOxMap,
      tileMap,
      /** @type {any} */
      activeJob: null,
      /** @type {Array<any>} */
      tileQueue: [],
      disposed: false,
      loadNextTile() {
        if (this.disposed || this.activeJob || !this.tileQueue.length) return;
        const job = this.tileQueue.shift();
        this.activeJob = job;
        requestTileFromMap(tileMap, job.layerId, job, this);
      },
    };
  });
};

/**
 * Renders a single XYZ (`EPSG:3857`) or polar (`EOX:GLOBE_POLE`) tile on an offscreen
 * pool map and delivers the composited 256×256 canvas to OpenGlobus.
 *
 * @param {import("../../main").EOxMap} tileMap
 * @param {string} layerId
 * @param {any} job
 * @param {any} mapPoolMap
 */
export async function requestTileFromMap(tileMap, layerId, job, mapPoolMap) {
  const finishJob = (
    /** @type {HTMLCanvasElement | null} */ canvas,
    failed = false,
  ) => {
    if (mapPoolMap.activeJob === job) {
      mapPoolMap.activeJob = null;
    }
    if (job.cancelled || mapPoolMap.disposed) {
      job.abort?.();
    } else if (failed || !canvas) {
      if (job.fail) {
        job.fail();
      } else {
        job.abort?.();
      }
    } else {
      job.callback(canvas);
    }
    if (!mapPoolMap.disposed && mapPoolMap.tileQueue.length) {
      mapPoolMap.loadNextTile();
    }
  };

  if (job.cancelled || mapPoolMap.disposed) {
    finishJob(null);
    return;
  }

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

  const targetLayer = getLayerById(tileMap, layerId);
  if (!targetLayer) {
    finishJob(null, true);
    return;
  }

  const mainLayer = mapPoolMap.mainMap
    ? getLayerById(mapPoolMap.mainMap, layerId)
    : null;

  await waitForLayerReady(targetLayer, mainLayer);

  if (job.cancelled || mapPoolMap.disposed) {
    finishJob(null);
    return;
  }

  const refreshedTarget = getLayerById(tileMap, layerId);
  const sourceState = /** @type {any} */ (refreshedTarget)
    ?.getSource?.()
    ?.getState?.();
  if (!refreshedTarget || sourceState === "error") {
    finishJob(null, true);
    return;
  }

  // Make sure only the target layer is visible
  getFlatLayersArray(map.getLayers().getArray()).forEach((l) => {
    if (l.get("type") !== "Group") {
      l.setVisible(l.get("id") === layerId);
    }
  });

  const isPolarTile =
    job.tile.projection === "EPSG:4326" &&
    Array.isArray(job.tile.extent) &&
    job.tile.extent.length === 4;
  const targetProjectionCode = isPolarTile
    ? GLOBE_POLE_PROJECTION
    : "EPSG:3857";

  if (isPolarTile) {
    ensureGlobePoleProjection();
  }

  let view = map.getView();
  if (view.getProjection().getCode() !== targetProjectionCode) {
    view = new View({
      projection: targetProjectionCode,
      center: [0, 0],
      zoom: 0,
      multiWorld: true,
    });
    map.setView(view);
  }

  let size = map.getSize();
  if (!size || !size[0] || !size[1]) {
    map.updateSize();
    size = map.getSize();
    if (!size || !size[0] || !size[1]) {
      map.setSize([256, 256]);
      size = [256, 256];
    }
  }

  const extent = isPolarTile
    ? [
        job.tile.extent[0],
        job.tile.extent[1] * GLOBE_POLE_SCALE,
        job.tile.extent[2],
        job.tile.extent[3] * GLOBE_POLE_SCALE,
      ]
    : createXYZ().getTileCoordExtent([job.tile.z, job.tile.x, job.tile.y]);

  view.fit(extent, {
    size,
    padding: [0, 0, 0, 0],
    callback: () => {
      if (job.cancelled || mapPoolMap.disposed) {
        finishJob(null);
        return;
      }
      map.once("rendercomplete", function () {
        if (job.cancelled || mapPoolMap.disposed) {
          finishJob(null);
          return;
        }
        const mapCanvas = document.createElement("canvas");
        const renderSize = map.getSize() || size;
        mapCanvas.width = renderSize[0] || 256;
        mapCanvas.height = renderSize[1] || 256;
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
                  .match(/^matrix\(([^(]*)\)$/)[1]
                  .split(",")
                  .map(Number);
              } else {
                matrix = [
                  (parseFloat(canvas.style.width) || canvas.width) /
                    canvas.width,
                  0,
                  0,
                  (parseFloat(canvas.style.height) || canvas.height) /
                    canvas.height,
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
        finishJob(mapCanvas);
      });
      map.renderSync();
    },
  });
}

/**
 * Enqueues a tile rendering job onto the most suitable offscreen map in the pool.
 *
 * @param {Array<any>} mapPool
 * @param {string} layerId
 * @param {{ x: number, y: number, z: number, projection?: string, extent?: number[] }} tile
 * @param {(canvas: HTMLCanvasElement) => void} callback
 * @param {{ abort?: () => void, fail?: () => void }} [handlers]
 */
export function distributeTileToIdealMap(
  mapPool,
  layerId,
  tile,
  callback,
  handlers,
) {
  const { x, y, z } = tile;
  const job = {
    layerId,
    tile,
    callback,
    abort: handlers?.abort,
    fail: handlers?.fail,
    cancelled: false,
  };
  let minDistance = 0;
  let idealMapObj = mapPool[0];

  for (let i = 0; i < mapPool.length; i++) {
    const mapObj = mapPool[i];
    if (!mapObj.activeJob && !mapObj.tileQueue.length) {
      idealMapObj = mapObj;
      break;
    }

    const lastQueuedJob =
      mapObj.tileQueue[mapObj.tileQueue.length - 1] || mapObj.activeJob;
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
