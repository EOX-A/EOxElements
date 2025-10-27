import {
  Globe,
  CanvasTiles,
  quadTreeStrategyType,
  // GlobusRgbTerrain
} from "@openglobus/og";
import { createXYZ } from "ol/tilegrid";

const create = ({ EOxMap, target }) => {
  const tileGrid = createXYZ({
    extent: [-180, -90, 180, 90],
    tileSize: 256,
    maxResolution: 0.6,
    maxZoom: 22,
  });

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

      const mapElement = document.createElement("eox-map");
      Object.assign(mapElement.style, {
        width: `256px`,
        height: `256px`,
        position: "absolute",
        top: `-9999px`,
        left: `-9999px`,
      });
      Object.assign(mapElement, {
        projection: "EPSG:4326",
        layers: EOxMap.layers.reverse(),
      });
      target.appendChild(mapElement);
      const extent = tileGrid.getTileCoordExtent([tile.z, tile.x, tile.y]);

      const renderMap = () => {
        mapElement.map.getView().fit(extent, {
          callback: () => {
            const renderTile = async (e) => {
              const map = mapElement.map;
              map.once("rendercomplete", function () {
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
                      mapContext.globalAlpha =
                        opacity === "" ? 1 : Number(opacity);
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
                      const backgroundColor =
                        canvas.parentNode.style.backgroundColor;
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
                applyCanvas(mapCanvas);
                // mapElement.map.getLayers().getArray().forEach((layer) => {
                //   layer.dispose();
                //   // console.log(layer)
                // });
                target.removeChild(mapElement);
              });
              map.renderSync();
            };
            mapElement.map.once("rendercomplete", (e) => {
              renderTile();
            });
          },
        });
      };
      mapElement.addEventListener("mapmounted", () => {
        EOxMap.map.getTargetElement().style.display = "none";
        renderMap();
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
  globus.planet.renderer.controls.SimpleSkyBackground.colorOne = "rgba(255,255,255)";
  globus.planet.renderer.controls.SimpleSkyBackground.colorTwo = "rgba(255,255,255)";
  return globus
};

window.eoxMapGlobe = {
  create,
};
