/**
 * Renders `WMTS` layer.
 * `WMTS` data can also be accessed directly without the need of fetching the capabilities.
 * A TileGrid can be defined via the `tileGrid`-property of the Source
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const WMTSTileGridStory = {
  args: {
    center: [20, 40],
    layers: [
      {
        type: "Tile",
        properties: {
          id: "customId",
        },
        source: {
          type: "WMTS",
          url: "https://tiles.maps.eox.at/wmts",
          layer: "s2cloudless-2025_3857",
          attribution:
            'EOxCloudless <a href="https://cloudless.eox.at" target="_blank" rel="noreferrer">https://cloudless.eox.at</a> by <a href="https://eox.at" target="_blank">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2025)',
          style: "default",
          matrixSet: "GoogleMapsCompatible",
          tileGrid: {
            tileSize: [128, 128],
          },
        },
      },
    ],
    zoom: 5,
  },
};

export default WMTSTileGridStory;
