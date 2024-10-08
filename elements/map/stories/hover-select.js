/**
 * Renders `eox-map` with `Hover` interaction
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const HoverSelectStory = {
  args: {
    layers: [
      {
        type: "Vector",
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
        },
        interactions: [
          {
            type: "select",
            options: {
              id: "selectInteraction",
              condition: "pointermove",
              layer: {
                type: "Vector",
                properties: {
                  id: "selectLayer",
                },
                source: {
                  type: "Vector",
                },
                style: {
                  "stroke-color": "red",
                  "stroke-width": 3,
                },
              },
            },
          },
        ],
      },
    ],
  },
};

export default HoverSelectStory;
