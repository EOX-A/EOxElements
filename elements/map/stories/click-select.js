/**
 * Renders `eox-map` with `Click` interaction
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const ClickSelectStory = {
  args: {
    layers: [
      {
        type: "Vector",
        background: "#1366dd",
        properties: {
          id: "regions",
        },
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
          attributions: "Regions: @ openlayers.org",
        },
        style: {
          "stroke-color": "black",
          "stroke-width": 1,
          "fill-color": "red",
        },
        interactions: [
          {
            type: "select",
            options: {
              id: "selectInteraction",
              condition: "click",
              style: {
                "stroke-color": "white",
                "stroke-width": 3,
              },
            },
          },
        ],
      },
    ],
  },
};

export default ClickSelectStory;
