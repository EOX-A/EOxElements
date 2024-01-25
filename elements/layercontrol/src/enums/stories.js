const SENTINEL_HUB_URL =
  "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54";

const S2MAP_URL = (id) =>
  `//s2maps-tiles.eu/wmts/1.0.0/${id}/default/g/{z}/{y}/{x}.jpg`;

const LAYER_EOX_CLOUDLESS = (year) => ({
  type: "Tile",
  properties: { title: `EOxCloudless ${year}` },
  source: {
    type: "XYZ",
    url: S2MAP_URL(`s2cloudless-${year}_3857`),
  },
});

export const STORIES_MAP_STYLE =
  "width: 400px; height: 300px; margin-left: 7px;";

export const STORIES_LAYER_SENTINEL_HUB = {
  wind: {
    type: "Tile",
    properties: { id: "WIND", title: "WIND" },
    source: {
      type: "TileWMS",
      url: SENTINEL_HUB_URL,
      params: { LAYERS: "AWS_VIS_WIND_V_10M" },
    },
  },
  no2: {
    type: "Tile",
    properties: { id: "NO2", title: "NO2" },
    source: {
      type: "TileWMS",
      url: SENTINEL_HUB_URL,
      params: { LAYERS: "AWS_NO2-VISUALISATION" },
    },
  },
};

export const STORIES_LAYER_REGION = {
  type: "Vector",
  properties: {
    title: "Regions",
    id: "regions",
    description: "Ecological regions of the earth.",
  },
  source: {
    type: "Vector",
    url: "https://openlayers.org/data/vector/ecoregions.json",
    format: "GeoJSON",
    attributions: "Regions: @ openlayers.org",
  },
};

export const STORIES_LAYER_S2 = {
  type: "WebGLTile",
  properties: {
    id: "s2",
    layerControlExclusive: true,
    title: "s2",
  },
  style: {
    variables: {
      red: 1,
      green: 2,
      blue: 3,
      redMax: 3000,
      greenMax: 3000,
      blueMax: 3000,
    },
    color: [
      "array",
      ["/", ["band", ["var", "red"]], ["var", "redMax"]],
      ["/", ["band", ["var", "green"]], ["var", "greenMax"]],
      ["/", ["band", ["var", "blue"]], ["var", "blueMax"]],
      1,
    ],
    gamma: 1.1,
  },
  source: {
    type: "GeoTIFF",
    normalize: false,
    sources: [
      {
        url: "https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif",
      },
    ],
  },
};

export const STORIES_LAYER_OSM = {
  type: "Tile",
  properties: {
    id: "osm",
    title: "Open Street Map",
    layerControlExclusive: true,
  },
  visible: false,
  opacity: 0.5,
  source: {
    type: "OSM",
  },
};

export const STORIES_LAYER_TERRAIN_LIGHT = {
  type: "Tile",
  properties: { title: "Terrain Light" },
  source: {
    type: "XYZ",
    url: S2MAP_URL("terrain-light_3857"),
  },
};

export const STORIES_LAYER_EOX_CLOUDLESS_2019 = LAYER_EOX_CLOUDLESS("2019");
export const STORIES_LAYER_EOX_CLOUDLESS_2020 = LAYER_EOX_CLOUDLESS("2020");
export const STORIES_LAYER_EOX_CLOUDLESS_2021 = LAYER_EOX_CLOUDLESS("2021");

export const STORIES_MAIN_MAP_LAYERS = [
  {
    type: "Group",
    properties: {
      id: "group2",
      title: "Data Layers",
      layerControlExpand: true,
      description: "# Hello world",
    },
    layers: [
      STORIES_LAYER_SENTINEL_HUB.wind,
      STORIES_LAYER_SENTINEL_HUB.no2,
      STORIES_LAYER_REGION,
    ],
  },
  {
    type: "Group",
    properties: {
      id: "group1",
      title: "Background Layers",
    },
    layers: [STORIES_LAYER_S2, STORIES_LAYER_OSM],
  },
];

export const STORIES_LAYER_DEFORESTED_BIOMASS = {
  type: "Tile",
  properties: {
    id: "customId",
    title: "Tile XYZ",
    layerControlToolsExpand: true,
    layerConfig: {
      schema: {
        type: "object",
        properties: {
          vminmax: {
            type: "object",
            properties: {
              vmin: {
                type: "number",
                minimum: 0,
                maximum: 10,
                format: "range",
              },
              vmax: {
                type: "number",
                minimum: 0,
                maximum: 10,
                format: "range",
              },
            },
            format: "minmax",
          },
          cbar: {
            type: "string",
            enum: ["rain", "temperature"],
          },
        },
      },
    },
  },
  source: {
    type: "XYZ",
    url: "https://reccap2.api.dev.brockmann-consult.de/api/tiles/cop28~reccap2-9x108x139-0.0.1.zarr/deforested_biomass/{z}/{y}/{x}?crs=EPSG:3857&time=2018-01-01T00:00:00Z&vmin=0&vmax=3&cbar=rain",
  },
};

export const STORIES_HIDDEN_GROUP_LAYERS = [
  {
    type: "Group",
    properties: {
      id: "group-normal",
      title: "Layer group (normal)",
    },
    layers: [STORIES_LAYER_SENTINEL_HUB.no2, STORIES_LAYER_TERRAIN_LIGHT],
  },
  {
    type: "Group",
    properties: {
      id: "group-hidden",
      title: "Layer group (hidden)",
      layerControlHideGroup: true,
    },
    layers: [STORIES_LAYER_SENTINEL_HUB.no2, STORIES_LAYER_TERRAIN_LIGHT],
  },
];
