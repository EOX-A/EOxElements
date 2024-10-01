/**
 * A simple, unobtrusive loading indicator in the bottom left that appears any time when the map is loading.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const StandardLoadingIndicatorStory = {
  args: {
    zoom: 9,
    center: [0, 51.5],
    controls: {
      LoadingIndicator: {},
      Zoom: {},
    },
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
    ],
  },
};

export default StandardLoadingIndicatorStory;
