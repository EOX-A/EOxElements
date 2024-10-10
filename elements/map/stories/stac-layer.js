/**
 * Renders STAC (SpatioTemporal Asset Catalogs) Layer using STAC url json.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const STACLayerStory = {
  args: {
    center: [-122.38, 46.1],
    layers: [
      {
        type: "STAC",
        properties: {
          id: "stacLayer",
        },
        url: "https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json",
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
    zoom: 7,
  },
};

export default STACLayerStory;
