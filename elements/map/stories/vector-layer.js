/**
 * Renders basic vector layer using `GeoJSON`
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const VectorLayerStory = {
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
          "stroke-color": "#232323",
          "stroke-width": 1,
          "fill-color": ["string", ["get", "COLOR"], "#eee"],
        },
      },
    ],
  },
};

export default VectorLayerStory;
