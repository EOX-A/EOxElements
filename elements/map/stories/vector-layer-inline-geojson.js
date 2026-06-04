/**
 * Renders vector layer using inline GeoJSON features
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const VectorLayerInlineGeojsonStory = {
  args: {
    center: [16.37, 48.2],
    zoom: 12,
    layers: [
      {
        type: "Tile",
        properties: {
          id: "osm",
        },
        source: {
          type: "OSM",
        },
      },
      {
        type: "Vector",
        properties: {
          id: "inlineGeojson",
        },
        source: {
          type: "Vector",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [16.37, 48.2],
              },
              properties: {
                name: "Vienna",
              },
            },
          ],
        },
        style: {
          "circle-radius": 10,
          "circle-fill-color": "red",
          "circle-stroke-color": "white",
          "circle-stroke-width": 2,
        },
      },
    ],
  },
};

export default VectorLayerInlineGeojsonStory;
