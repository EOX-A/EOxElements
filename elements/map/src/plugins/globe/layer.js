import { CanvasTiles, XYZ, OpenStreetMap, Vector } from "@openglobus/og";
import OSM from "ol/source/OSM.js";
import XYZ_ol from "ol/source/XYZ.js";
import Vector_ol from "ol/source/Vector.js";
import { distributeTileToIdealMap } from "./map-pool.js";

/**
 * @param {import("ol/layer/Layer").default} olLayer
 * @param {Array<any>} mapPool
 */
export const createGlobusLayer = async (olLayer, mapPool) => {
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

  if (source instanceof Vector_ol) {
    const entities = await Promise.all(
      source.getFeatures().map(async (f) => {
        const geojson = JSON.parse(
          new (await import("ol/format/GeoJSON.js")).default().writeFeature(f),
        );

        return {
          ...geojson,

          properties: {
            ...f.getProperties(),
          },
        };
      }),
    );

    return new Vector(id, {
      entities,

      isBaseLayer: olLayer.get("base"),

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
        },
      );

      if (mapPoolCandidate.tileQueue.length === 1) {
        mapPoolCandidate.loadNextTile();
      }
    },
  });
};

/**
 *
 */
export const refreshGlobe = (globe) => {
  if (globe) {
    globe.planet.layers.forEach((l) => {
      if (l instanceof CanvasTiles) {
        l.abortLoading();
        // Force redraw of all tiles by temporarily setting animated flag
        l.animated = true;
        setTimeout(() => (l.animated = false), 200);
      }
    });
  }
};
