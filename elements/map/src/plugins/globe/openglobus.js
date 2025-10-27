import {
  Globe,
  CanvasTiles,
  quadTreeStrategyType,
  // GlobusRgbTerrain
} from "@openglobus/og";

export const createGlobe = ({ target, renderTile }) => {
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
  return globus;
};
