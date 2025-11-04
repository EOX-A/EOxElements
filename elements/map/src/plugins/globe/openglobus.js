import {
  Globe,
  CanvasTiles,
  quadTreeStrategyType,
  Vec3,
  LonLat,
} from "@openglobus/og";

import { transform as olTransform } from "ol/proj";

export const createGlobe = ({ map, target, renderTile }) => {
  const height = 27050000 / Math.pow(2, map.map.getView().getZoom() - 1);
  const mapExtent = map.map.getView().calculateExtent();
  const center = map.map.getView().getCenter();
  const newCenter = olTransform(
    center,
    map.map.getView().getProjection().getCode(),
    "EPSG:4326",
  );
  let globus = map.globe;
  if (globus) {
    const globeDiv = map.renderRoot.querySelector("#globe");
    globeDiv.style.display = "";
    // set up the zoom level
    globus.planet.camera.setLonLat(
      new LonLat(newCenter[0], newCenter[1], height),
      new LonLat(newCenter[0], newCenter[1], 0),
      Vec3.NORTH,
    );
  } else {
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

        renderTile(tile, (renderedMapCanvas) => {
          applyCanvas(renderedMapCanvas);
        });
      },
    });
    globus = new Globe({
      target,
      layers: [canvasTilesLayer],
      quadTreeStrategyPrototype: quadTreeStrategyType.epsg4326,
      sun: { active: false },
      atmosphereEnabled: false,
      viewExtent: mapExtent,
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
    globus.planet.renderer.controls.SimpleSkyBackground.colorOne =
      "rgba(255,255,255)";
    globus.planet.renderer.controls.SimpleSkyBackground.colorTwo =
      "rgba(255,255,255)";
    // set up the zoom level
    globus.planet.camera.setLonLat(
      new LonLat(newCenter[0], newCenter[1], height),
      new LonLat(newCenter[0], newCenter[1], 0),
      Vec3.NORTH,
    );
  }
  return globus;
};
