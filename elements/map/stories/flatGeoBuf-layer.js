/**
 * Renders a layer with FlatGeoBuf-source
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const FlatGeoBufStory = {
  args: {
    center: [16.346, 48.182],
    zoom: 12.5,
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
          minZoom: 12,
        },
        source: {
          type: "FlatGeoBuf",
          url: "https://eox-gtif-public.s3.eu-central-1.amazonaws.com/admin_borders/STATISTIK_AUSTRIA_GEM_20220101.fgb",
        },
      },
    ],
    storyCodeBefore: `import "@eox/map/src/plugins/advancedLayersAndSources"`,
  },
};

export default FlatGeoBufStory;
