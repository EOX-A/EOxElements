/**
 * Renders a layer with FlatGeoBuf-source
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const FlatGeoBufStory = {
  args: {
    center: [-89.378, 43.076],
    zoom: 14.5,
    layers: [
      {
        type: "Vector",
        properties: {
          id: "FlatGeoBufLayer",
          minZoom: 14,
        },
        source: {
          type: "FlatGeoBuf",
          url: "https://flatgeobuf.septima.dk/population_areas.fgb",
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
  },
};

export default FlatGeoBufStory;
