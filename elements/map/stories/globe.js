/**
 * Basic Globe rendered using `eox-map` configuration
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const GlobeStory = {
  args: {
    center: [15, 48],
    projection: "globe",
    layers: [{ type: "Tile", source: { type: "OSM" } }],
    zoom: 7,
  },
};

export default GlobeStory;
