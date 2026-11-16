import { createGlobe, refreshGlobe } from "./openglobus.js";
import { createMapPool, syncMapPoolLayers } from "./methods.js";
import {
  setupLayerListeners,
  createGlobusLayer,
  syncGlobeLayerOrder,
  watchGlobeLayerOrder,
} from "./openglobus.js";
import {
  registerGlobeSynchronization,
  connectGlobeSynchronization,
} from "./lifecycle.js";
import { unByKey } from "ol/Observable";
import TileSource from "ol/source/Tile.js";

/**
 * @typedef {import("../../main").EOxMap} EOxMap
 * @typedef {import("@openglobus/og").Globe} Globe
 * @typedef {import("./types").ExtendedOLLayer} OLLayer
 * @typedef {ReturnType<typeof createMapPool>} MapPool
 */

/**
 * Owns layer synchronization for a globe, including reconnectable subscriptions.
 *
 * @param {EOxMap} EOxMap - The root map element.
 * @param {Globe} globe - The globe belonging to this map.
 * @param {MapPool} mapPool - Its offscreen tile maps.
 */
export function registerGlobeLayerSynchronization(EOxMap, globe, mapPool) {
  let renderedLayers = new Set(EOxMap.map.getAllLayers());
  // Sources are replaced (`updateLayer`) or edited in place (new key).
  /** @type {WeakMap<OLLayer, import("./types").BuiltSource>} */
  const builtSources = new WeakMap(
    EOxMap.map.getAllLayers().map((layer) => [layer, getBuiltSource(layer)]),
  );
  /** @param {OLLayer} layer */
  const isOutdated = (layer) => {
    const built = builtSources.get(layer);
    const { source, key } = getBuiltSource(layer);
    return built?.source !== source || built.key !== key;
  };

  registerGlobeSynchronization(globe, () => {
    const controller = new AbortController();
    /** @type {Map<OLLayer, () => void>} */
    const subscriptions = new Map();
    let synchronizeQueued = false;

    /** @param {OLLayer} layer - The OL layer to observe. */
    const subscribe = (layer) => {
      if (!subscriptions.has(layer)) {
        subscriptions.set(layer, setupLayerListeners(layer, globe, mapPool));
      }
    };

    // The layer group also changes on visibility, opacity and vector data,
    // which the per-layer listeners already mirror.
    const layersOutOfSync = () => {
      const layers = EOxMap.map.getAllLayers();
      return (
        layers.length !== renderedLayers.size ||
        layers.some((layer) => !renderedLayers.has(layer) || isOutdated(layer))
      );
    };

    // `addOrUpdateLayer` changes layers without `layerschanged`, and `set layers`
    // calls it once per layer: one check per microtask covers the batch.
    const scheduleSynchronize = () => {
      if (synchronizeQueued) return;
      synchronizeQueued = true;
      queueMicrotask(() => {
        synchronizeQueued = false;
        if (!controller.signal.aborted && layersOutOfSync()) synchronize();
      });
    };

    const synchronize = () => {
      if (!EOxMap.globeEnabled || EOxMap.globe !== globe) return;

      const currentLayers = EOxMap.map.getAllLayers();
      const currentLayerSet = new Set(currentLayers);
      const currentIds = new Set(currentLayers.map((layer) => layer.get("id")));

      // Subscription and selection ownership follow OL instances, not layer IDs.
      subscriptions.forEach((release, layer) => {
        if (!currentLayerSet.has(layer)) {
          release();
          subscriptions.delete(layer);
        }
      });
      renderedLayers.forEach((layer) => {
        if (!currentLayerSet.has(layer)) {
          const previous = globe.planet.getLayerByName(layer.get("id"));
          if (previous) globe.planet.removeLayer(previous);
        }
      });

      syncMapPoolLayers(mapPool, EOxMap);

      globe.planet.layers.slice().forEach((layer) => {
        if (!currentIds.has(layer.name)) globe.planet.removeLayer(layer);
      });

      currentLayers.forEach((layer) => {
        let existing = globe.planet.getLayerByName(layer.get("id"));
        if (existing && isOutdated(layer)) {
          globe.planet.removeLayer(existing);
          existing = undefined;
        }
        if (!existing) {
          const globeLayer = createGlobusLayer(layer, mapPool, EOxMap);
          if (globeLayer) globe.planet.addLayer(globeLayer);
          builtSources.set(layer, getBuiltSource(layer));
        } else {
          existing.setVisibility(layer.getVisible());
          existing.opacity = layer.getOpacity();
        }
        subscribe(layer);
      });

      renderedLayers = currentLayerSet;
      syncGlobeLayerOrder(EOxMap, globe);
    };

    EOxMap.map.getAllLayers().forEach(subscribe);
    EOxMap.addEventListener(
      "layerschanged",
      (event) => {
        // event.target is retargeted to this host for nested shadow-DOM maps.
        if (event.composedPath()[0] === EOxMap) synchronize();
      },
      { signal: controller.signal },
    );
    watchGlobeLayerOrder(EOxMap, globe, controller.signal);
    // Covers nested group children and source swaps on the same OL layer.
    const groupKey = EOxMap.map
      .getLayerGroup()
      .on("change", scheduleSynchronize);

    // Reconcile changes made while the host was disconnected.
    synchronize();

    return () => {
      unByKey(groupKey);
      controller.abort();
      subscriptions.forEach((release) => release());
      subscriptions.clear();
    };
  });
  if (EOxMap.isConnected) connectGlobeSynchronization(globe);
}

/**
 * Creates a globe and registers the synchronization owned by its map.
 *
 * @param {{ EOxMap: EOxMap, target: HTMLElement }} options - The map and globe container.
 * @returns {Globe} The created globe.
 */
export const create = ({ EOxMap, target }) => {
  const poolSize = Math.min(navigator.hardwareConcurrency || 4, 4);
  const mapPool = createMapPool(poolSize, EOxMap, target);
  const globe = createGlobe({ EOxMap, target, mapPool });
  /** @type {any} */ (globe)._mapPool = mapPool;
  EOxMap.globe = globe;

  syncGlobeLayerOrder(EOxMap, globe);
  registerGlobeLayerSynchronization(EOxMap, globe, mapPool);

  return globe;
};

window.eoxMapGlobe = {
  create,
  refresh: refreshGlobe,
};

/**
 * The source of an OL layer and its revision key (tile sources only).
 *
 * @param {import("./types").ExtendedOLLayer} layer
 * @returns {import("./types").BuiltSource}
 */
function getBuiltSource(layer) {
  const source = layer.getSource();
  return {
    source,
    // getKey is not @api in OL; it changes on in-place URL/param edits.
    key: source instanceof TileSource ? source.getKey() : undefined,
  };
}
