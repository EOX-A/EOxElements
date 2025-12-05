import {
  Globe,
  CanvasTiles,
  XYZ,
  OpenStreetMap,
} from "@openglobus/og";
import { distributeTileToIdealMap } from "./methods.js";
import OSM from "ol/source/OSM.js";
import XYZ_ol from "ol/source/XYZ.js";

let globus;

export const createGlobe = ({ EOxMap, target, mapPool }) => {
  globus = new Globe({
    target,
    layers: EOxMap.map
      .getLayers()
      .getArray()
      .map((l) => createGlobusLayer(l, mapPool))
      .filter((l) => l !== undefined),
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
  const source = olLayer.getSource();
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
    visibility: olLayer.getVisible(),
    isBaseLayer: olLayer.get("base"),
    opacity: olLayer.getOpacity(),
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
        }
      );

      if (mapPoolCandidate.tileQueue.length === 1) {
        mapPoolCandidate.loadNextTile();
      }
    },
  });
};
