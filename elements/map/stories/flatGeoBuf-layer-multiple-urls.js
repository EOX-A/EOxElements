/**
 * Renders a layer with FlatGeoBuf-source with one or more urls
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const FlatGeoBufStoryMultipleUrls = {
  args: {
    center: [-30, 64],
    zoom: 3,
    layers: [
      {
        type: "Tile",
        properties: {
          id: "customId",
        },
        source: {
          type: "OSM",
        },
      },
      {
        type: "Vector",
        properties: {
          id: "FlatGeoBufLayer",
        },
        source: {
          type: "FlatGeoBuf",
          url: [
            "https://eox-gtif-public.s3.eu-central-1.amazonaws.com/test_data_polartep/202602041015_CentralWest_RIC.fgb",
            "https://eox-gtif-public.s3.eu-central-1.amazonaws.com/test_data_polartep/202602040840_SouthEast_RIC.fgb",
          ],
        },
      },
    ],
    storyCodeBefore: `import "@eox/map/src/plugins/advancedLayersAndSources"`,
  },
};

export default FlatGeoBufStoryMultipleUrls;
