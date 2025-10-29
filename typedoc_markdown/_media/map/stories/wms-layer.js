/**
 * Renders WMS layer using geo-server
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const WMSLayerStory = {
  args: {
    center: [-10997148, 4569099],
    layers: [
      {
        type: "Tile",
        properties: {
          id: "customId",
        },
        source: {
          type: "TileWMS",
          url: "https://ahocevar.com/geoserver/wms",
          params: { LAYERS: "topp:states", TILED: true },
          ratio: 1,
          serverType: "geoserver",
        },
      },
    ],
    zoom: 3,
  },
};

export default WMSLayerStory;
