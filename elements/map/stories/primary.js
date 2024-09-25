/**
 * Basic map rendered using `eox-map` configuration
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const PrimaryStory = {
  args: {
    center: [15, 48],
    layers: [{ type: "Tile", source: { type: "OSM" } }],
    zoom: 7,
  },
};

export default PrimaryStory;
