export const STORIES_LAYERS_ARRAY = [
  {
    type: "Tile",
    source: {
      type: "OSM",
    },
  },
];

export const STORIES_VECTOR_LAYERS = [
  {
    type: "Vector",
    background: "lightgrey",
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
      "fill-color": "darkgrey",
    },
  },
];

export const STORIES_MAP_STYLE = "width: 400px; height: 300px;";
