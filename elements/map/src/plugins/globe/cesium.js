export const createGlobe = ({ target, renderTile }) => {
  const style = document.createElement("style");
  style.textContent = `
    .cesium-viewer,
    .cesium-viewer-cesiumWidgetContainer,
    .cesium-widget,
    canvas {
      height: 100%;
      width: 100%;
    }
    .cesium-viewer > *:not(.cesium-viewer-cesiumWidgetContainer),
    .cesium-widget > *:not(canvas) {
      display: none !important;
    }
  `;
  target.appendChild(style);

  class WorkerCanvasImageryProvider {
    constructor() {
      this.tileWidth = 256;
      this.tileHeight = 256;
      this.maximumLevel = 18;
      this.minimumLevel = 0;
      // Use GeographicTilingScheme to match OpenGlobus's EPSG:4326
      this.tilingScheme = new Cesium.GeographicTilingScheme();
      this.rectangle = this.tilingScheme.rectangle;
      this.errorEvent = new Cesium.Event();
      this.ready = true;
      this.readyPromise = Promise.resolve(true);
    }

    /**
     * This is the core method, called by Cesium for each tile.
     * It's the equivalent of the `drawTile` function in the OpenGlobus example.
     * @param {number} x The tile X coordinate.
     * @param {number} y The tile Y coordinate.
     * @param {number} level The zoom level.
     * @returns {Promise<HTMLCanvasElement>} A promise that resolves with the canvas for the tile.
     */
    requestImage(x, y, level) {
      const tile = { x, y, z: level };

      return new Promise((resolve) => {
        renderTile(tile, (renderedMapCanvas) => {
          // Resolve the promise with the final canvas. Cesium will then use it as the tile texture.
          resolve(renderedMapCanvas);
        });
      });
    }
  }

  // Initialize the Cesium Viewer
  const viewer = new Cesium.Viewer(target, {
    // Set imageryProvider to false to prevent the default Bing Maps layer
    // imageryProvider: false,
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    animation: false,
    timeline: false,
    fullscreenButton: false,
  });

  // Create an instance of our custom provider
  const customImageryProvider = new WorkerCanvasImageryProvider();

  // Add the custom layer to the globe
  viewer.imageryLayers.addImageryProvider(customImageryProvider);

  return viewer
};
