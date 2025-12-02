import {
  Globe,
  CanvasTiles,
  quadTreeStrategyType,
  Vec3,
  LonLat,
} from "@openglobus/og";

import { transform as olTransform } from "ol/proj";

// The central canvas tile layer
let canvasTilesLayer;

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
  }
  canvasTilesLayer = new CanvasTiles("mainThreadCanvasTilesLayer", {
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
        // og could dismiss the canvas in the meantime because of user interactions
        if (!material.segment?.initialized) {
          return;
        }
        applyCanvas(renderedMapCanvas);
      });
    },
  });
  if (globus) {
    const oldLayer = globus.planet.layers[0];
    globus.planet.addLayer(canvasTilesLayer);
    setTimeout(() => {
      globus.planet.removeLayer(oldLayer);
    }, 1000);
  } else {
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

let timer;
export const refreshGlobe = () => {
  canvasTilesLayer.abortLoading();
  // globus.planet.quadTreeStrategy.clearLayerMaterial(tg, true);
  canvasTilesLayer.animated = true; // temporarily mark as animated to force redraw without dismissing existing tiles
  timer = window.setTimeout(() => {
    timer = undefined;
    canvasTilesLayer.animated = false;
  }, 500); // wait for a timeout then remove the "animated" flag, because it makes user interactions laggy.
};
