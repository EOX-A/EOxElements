import {
  Globe as OgGlobe,
  LonLat,
  Vec3,
  CanvasTiles,
  XYZ,
  WMS,
  OpenStreetMap,
  Vector,
  Entity,
} from "@openglobus/og";
import { distributeTileToIdealMap } from "./methods.js";
import { transform } from "../../helpers/index.js";
import OSM from "ol/source/OSM.js";
import XYZ_ol from "ol/source/XYZ.js";
import WMS_ol from "ol/source/TileWMS.js";
import Vector_ol from "ol/source/Vector.js";
import { getLayerById } from "../../helpers/layer.js";

/** @typedef {import("./types").ExtendedOLLayer} ExtendedOLLayer */

let globus;

export const createGlobe = ({ EOxMap, target, mapPool }) => {
  globus = new OgGlobe({
    target,
    layers: EOxMap.getFlatLayersArray(EOxMap.map.getLayers().getArray())
      .filter((l) => l.get("type") !== "Group")
      .map((l) => createGlobusLayer(l, mapPool))
      .filter((l) => l !== undefined),
    sun: { active: false },
    atmosphereEnabled: false,
    transparentBackground: true,
    resourcesSrc: "https://cdn.jsdelivr.net/npm/@openglobus/og@0.27.21/lib/res",
    fontsSrc:
      "https://cdn.jsdelivr.net/npm/@openglobus/og@0.27.21/lib/res/fonts",
  });

  const height = 21050000 / Math.pow(2, EOxMap.map.getView().getZoom() - 1);
  const center = EOxMap.map.getView().getCenter();
  const newCenter = transform(
    center,
    EOxMap.map.getView().getProjection().getCode(),
    "EPSG:4326",
  );
  globus.planet.camera.setLonLat(
    new LonLat(newCenter[0], newCenter[1], height),
    new LonLat(newCenter[0], newCenter[1], 0),
    Vec3.NORTH,
  );

  const style = document.createElement("style");
  style.textContent = `
    .og-inner {
      height: 100%;
    }
    .og-inner *:not(canvas) {
      display: none !important;
    }
  `;
  target.appendChild(style);
  return globus;
};

export const refreshGlobe = () => {
  if (globus) {
    globus.planet.layers.forEach((l) => {
      if (l instanceof CanvasTiles) {
        l.abortLoading();
        // Force redraw of all tiles by temporarily setting animated flag
        l.animated = true;
        setTimeout(() => (l.animated = false), 200);
      }
    });
  }
};

export const createGlobusLayer = (olLayer, mapPool) => {
  const source = olLayer.getSource && olLayer.getSource();
  const id = olLayer.get("id");

  if (source instanceof OSM) {
    return new OpenStreetMap(id, {
      isBaseLayer: olLayer.get("base"),
      visibility: olLayer.getVisible(),
      opacity: olLayer.getOpacity(),
    });
  }

  if (source instanceof XYZ_ol) {
    return new XYZ(id, {
      isBaseLayer: olLayer.get("base"),
      url: source.getUrls()[0],
      visibility: olLayer.getVisible(),
      opacity: olLayer.getOpacity(),
    });
  }
  if (source instanceof WMS_ol) {
    // Construct WMS URL with parameters
    const wmsParams = source.getParams();
    const baseUrl = source.getUrls()[0];
    const wmsUrl = baseUrl;
    const wmsLayerNames = wmsParams.LAYERS || wmsParams.layers || "default";

    return new WMS(id, {
      isBaseLayer: olLayer.get("base"),
      layers: wmsLayerNames,
      url: wmsUrl,
      visibility: olLayer.getVisible(),
      opacity: olLayer.getOpacity(),
      version: wmsParams.VERSION || wmsParams.Version || "1.1.1",
      extra: {
        ...wmsParams,
      },
    });
  }
  if (source instanceof Vector_ol) {
    fetch(source.getUrl().toString())
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        const vectorLayer = new Vector(id, {
          visibility: olLayer.getVisible(),
          opacity: olLayer.getOpacity(),
          isBaseLayer: olLayer.get("base"),
        });

        vectorLayer.addTo(globus.planet);

        var f = data.features;
        for (let i = 0; i < f.length; i++) {
          var fi = f[i];
          vectorLayer.add(
            new Entity({
              geometry: {
                type: fi.geometry.type,
                coordinates: fi.geometry.coordinates,
              },
            }),
          );
        }
        return vectorLayer;
      });

    return undefined;
  }

  // Fallback to CanvasTiles for other layer types
  return new CanvasTiles(id, {
    opacity: olLayer.getOpacity(),
    visibility: olLayer.getVisible(),
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
        mapPool,
        olLayer.get("id"), // Pass the layer ID to identify the correct layer in the pool
        tile,
        (renderedMapCanvas) => {
          if (!material.segment?.initialized) {
            return;
          }
          applyCanvas(renderedMapCanvas);
        },
      );

      if (mapPoolCandidate.tileQueue.length === 1) {
        mapPoolCandidate.loadNextTile();
      }
    },
  });
};

export const enableGlobe = (map) => {
  if (map.shadowRoot) {
    /** @type {HTMLElement} */
    let globeDiv = map.shadowRoot.querySelector("#globe");
    if (!globeDiv) {
      globeDiv = document.createElement("div");
      globeDiv.id = "globe";
      globeDiv.style.width = "100%";
      globeDiv.style.height = "100%";
      globeDiv.style.display = "block"; // Ensure the globe div is visible
      map.renderRoot?.appendChild(globeDiv);
    }

    map.registerProjectionFromCode("EPSG:3857"); // Ensure projection is registered for OL, globe uses its own.

    // Store the globe instance returned by create, if any.
    map.globe = window.eoxMapGlobe.create({
      EOxMap: map,
      target: globeDiv,
    });

    /** @type {HTMLElement} */
    (map.shadowRoot.querySelector("#map")).style.display = "none";
    map.globeEnabled = true;
  }
};

export const disableGlobe = (map) => {
  if (map.globe) {
    const globe = map.globe;
    const planet = globe.planet;

    // 1. Determine the target point on the terrain at the center of the viewport
    let c = planet.getCartesianFromPixelTerrain(
      globe.renderer.handler.getCenter(),
    );

    // Fallback: If no terrain is found at the center, just use the current camera eye position
    const targetCartesian = c
      ? c.normal().scaleTo(c.length() + c.distance(planet.camera.eye))
      : planet.camera.eye;

    planet.flyCartesian(targetCartesian, {
      amplitude: 0,
      // The critical part: all final calculations and view settings
      // MUST happen inside the completeCallback.
      completeCallback: () => {
        // If a target (c) was found, make the camera look at it (straight down)
        if (c) {
          planet.camera.look(c);
        }

        // Recalculate the camera position AFTER the flight and 'look' adjustments are complete
        const finalCameraPosition = globe.planet.camera.getLonLat();

        // Calculate the OpenLayers zoom level using the camera's final height
        const zoomFromGlobe =
          Math.log2(21050000 / finalCameraPosition.height) + 1;

        // Calculate the OpenLayers center coordinates
        const centerFromGlobe = [
          finalCameraPosition.lon,
          finalCameraPosition.lat,
        ];
        // Transform from EPSG:4326 (globe's projection) to the OL map's current projection
        const newCenter = map.transform(
          centerFromGlobe,
          "EPSG:4326",
          map.OLprojection, // Use the internal OL projection here
        );

        // Apply the calculated center and zoom to the OpenLayers map view
        map.map.getView().setCenter(newCenter);
        map.map.getView().setZoom(zoomFromGlobe);

        map.globe = null;

        // Hide the globe and show the map immediately after initiating the fly animation
        const globeElement = map.shadowRoot.querySelector("#globe");
        if (globeElement) {
          /** @type {HTMLElement} */ (globeElement).style.display = "none";
          globeElement.remove(); // Remove the element from the DOM
        }
        const mapElement = map.shadowRoot.querySelector("#map");
        if (mapElement) {
          /** @type {HTMLElement} */ (mapElement).style.display = ""; // Show the map
        }
        map.globeEnabled = false;
      },
    });
  }
};

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
 * @param {ExtendedOLLayer} olLayer
 * @param {import("@openglobus/og").Globe} globe
 * @param {Array<any>} mapPool
 */
export const setupLayerListeners = (olLayer, globe, mapPool) => {
  const debouncedRefresh = debounce(() => {
    refreshGlobe();
  }, 200);

  olLayer.on("change", () => {
    if (olLayer.styleVariables_) {
      const layerId = olLayer.get("id");
      const newStyleVariables = /** @type {Record<string, number>} */ (
        olLayer.styleVariables_
      );
      if (!layerId || !newStyleVariables) return;

      mapPool.forEach((poolItem) => {
        poolItem.tileQueue.length = 0;
        const layerInTileMap =
          /** @type {import("ol/layer/WebGLTile.js").default} */ (
            /** @type {unknown} */ (getLayerById(poolItem.tileMap, layerId))
          );
        if (layerInTileMap && layerInTileMap.updateStyleVariables) {
          layerInTileMap.updateStyleVariables(newStyleVariables);
        }
      });
      debouncedRefresh();
    }
  });

  olLayer.on("propertychange", ({ key }) => {
    const globusLayer = globe.planet.getLayerByName(olLayer.get("id"));
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

/**
 * @param {import("ol/Collection").default<import("ol/layer/Base").default>} layers
 * @param {import("@openglobus/og").Globe} globe
 * @param {Array<any>} mapPool
 */
export const processLayers = (layers, globe, mapPool) => {
  layers.forEach((olLayer) => {
    if (olLayer.get("id")) {
      setupLayerListeners(
        /** @type {ExtendedOLLayer} */ (olLayer),
        globe,
        mapPool,
      );
    }
    if (/** @type {any} */ (olLayer).getLayers) {
      processLayers(
        /** @type {any} */ (olLayer).getLayers().getArray(),
        globe,
        mapPool,
      );
    }
  });
};
