export const STORIES_MAP_STYLE =
  "width: 100%; height: 300px; margin: 7px;";

export const STORIES_GREY_VECTOR_LAYERS = [
    {
      type: "Vector",
      background: "lightgrey",
      properties: {
        id: "regions-grey",
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

  export const STORIES_BlUE_VECTOR_LAYERS = [
    {
      type: "Vector",
      background: "lightgrey",
      properties: {
        id: "regions-blue",
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
        "fill-color": "lightblue",
      },
    },
  ];