/**
 * Renders `Group` layer which contains multiple layers in a group
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const GroupLayerStory = {
  args: {
    layers: [
      {
        type: "Group",
        properties: {
          id: "group",
        },
        layers: [
          {
            type: "Vector",
            properties: {
              id: "regions",
            },
            source: {
              type: "Vector",
              url: "https://openlayers.org/data/vector/ecoregions.json",
              format: "GeoJSON",
            },
          },
          {
            type: "Group",
            properties: {
              id: "groupLayerInsideGroup",
            },
            layers: [
              {
                type: "Tile",
                properties: {
                  id: "layerInsideGroupInsideGroup",
                },
                source: {
                  type: "OSM",
                },
              },
            ],
          },
        ],
      },
    ],
  },
};

export default GroupLayerStory;
