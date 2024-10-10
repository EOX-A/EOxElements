/**
 * Renders different `Controls` for the `eox-map` using control config
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const ControlsStory = {
  args: {
    controls: {
      Zoom: {},
      Attribution: {},
      FullScreen: {},
      OverviewMap: {
        layers: [
          {
            type: "Tile",
            properties: {
              id: "overviewMap",
            },
            source: {
              type: "OSM",
            },
          },
        ],
      },
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

export default ControlsStory;
