/**
 * Renders `GeoTIFF` layer as `WebGLTile`
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const GeoTIFFLayerStory = {
  args: {
    center: [5, 16.3],
    layers: [
      {
        type: "WebGLTile",
        properties: {
          id: "geotiffLayer",
        },
        source: {
          type: "GeoTIFF",
          sources: [
            {
              url: "https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif",
            },
          ],
        },
      },
      {
        type: "Tile",
        properties: {
          id: "customId",
        },
        source: {
          type: "OSM",
        },
      },
    ],
    zoom: 8,
  },
};

export default GeoTIFFLayerStory;
