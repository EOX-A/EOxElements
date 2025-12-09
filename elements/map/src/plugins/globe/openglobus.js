import {
  Globe as OgGlobe,
  LonLat,
  Vec3,
  CanvasTiles,
  XYZ,
  OpenStreetMap,
} from "@openglobus/og";
import { distributeTileToIdealMap } from "./methods.js";
import { transform } from "../../helpers/index.js";
import OSM from "ol/source/OSM.js";
import XYZ_ol from "ol/source/XYZ.js";

class Globe {
  /**
   * @type {OgGlobe}
   */
  #globe;

  /**
   * @param {HTMLElement} target
   */
  constructor(target) {
    this.#globe = new OgGlobe({
      target,
      sun: { active: false },
      atmosphereEnabled: false,
    });

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
  }

  /**
   *
   */
  addLayer(layer) {
    this.#globe.planet.addLayer(layer);
  }

  /**
   * @returns {OgGlobe}
   */
  get globe() {
    return this.#globe;
  }
}

export default Globe;

let globus;

export const createGlobe = ({ EOxMap, target, mapPool }) => {
  globus = new OgGlobe({
    target,
    layers: EOxMap.getFlatLayersArray(EOxMap.map.getLayers().getArray())
      .map((l) => createGlobusLayer(l, mapPool))
      .filter((l) => l !== undefined),
    sun: { active: false },
    atmosphereEnabled: false,
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
