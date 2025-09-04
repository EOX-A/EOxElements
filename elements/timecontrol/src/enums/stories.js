export const DEFAULT_ARGS = {
  layer: "AWS_VIS_WIND_V_10M",
  controlProperty: "TIME",
  controlValues: [
    "2022-12-05",
    "2022-12-12",
    "2022-12-19",
    "2022-12-26",
    "2023-01-16",
    "2023-01-23",
    "2023-01-30",
    "2023-02-06",
    "2023-02-13",
    "2023-02-27",
    "2023-03-06",
    "2023-03-13",
    "2023-03-20",
    "2023-03-27",
    "2023-04-03",
    "2023-04-10",
    "2023-04-17",
    "2023-04-24",
  ],
  navigation: true,
  play: true,
  // map
  layers: [
    {
      type: "Tile",
      properties: {
        id: "AWS_VIS_WIND_V_10M",
      },
      source: {
        type: "TileWMS",
        url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
        params: {
          LAYERS: "AWS_VIS_WIND_V_10M",
          TIME: "2022-12-05",
        },
      },
    },
    {
      type: "Tile",
      properties: {
        id: "OSM",
      },
      source: {
        type: "OSM",
      },
    },
  ],
  center: [1000000, 6000000],
  zoom: 3,
};
