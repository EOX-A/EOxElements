import FEATURE_COLLECTION_LAYER_CROPOMHUSC from "./assets/cropomhusc-feature-collection.json";

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

const STYLES_LAYER_CROPOMHUSC2 = {
  variables: {
    vmin: 0,
    vmax: 500,
    crop: "Maize",
    vstat: "average",
  },
  "fill-color": [
    "case",
    ["==", ["get", "water_need", ["var", "crop"], ["var", "vstat"]], "N/A"],
    [253, 231, 37, 0.25],
    [
      "interpolate",
      ["linear"],
      [
        "/",
        [
          "-",
          ["get", "water_need", ["var", "crop"], ["var", "vstat"]],
          ["var", "vmin"],
        ],
        ["var", "vmax"],
      ],
      0,
      [68, 1, 84, 1],
      0.06666666666666667,
      [70, 23, 103, 1],
      0.13333333333333333,
      [71, 44, 122, 1],
      0.2,
      [65, 63, 131, 1],
      0.26666666666666666,
      [59, 81, 139, 1],
      0.3333333333333333,
      [52, 97, 141, 1],
      0.4,
      [44, 113, 142, 1],
      0.4666666666666667,
      [39, 129, 142, 1],
      0.5333333333333333,
      [33, 144, 141, 1],
      0.6,
      [39, 173, 129, 1],
      0.6666666666666666,
      [66, 187, 114, 1],
      0.7333333333333333,
      [92, 200, 99, 1],
      0.8,
      [131, 210, 75, 1],
      0.8666666666666667,
      [170, 220, 50, 1],
      0.9333333333333333,
      [212, 226, 44, 1],
      1,
      [253, 231, 37, 1],
    ],
  ],
  "stroke-color": "black",
  "stroke-width": 1,
};
const JSONFORM_SCHEMA_LAYER_CROPOMHUSC2 = {
  type: "object",
  title: "Data configuration",
  properties: {
    crop: {
      title: "Crop",
      type: "string",
      enum: ["Maize", "Soybean", "Sunflower", "Wheat"],
      default: "Maize",
    },
    vstat: {
      title: "Statistical value",
      type: "string",
      enum: ["average", "best", "worst"],
      default: "average",
    },
    vminmax: {
      title: "Dynamic range",
      description: "Water need [mm]",
      type: "object",
      properties: {
        vmin: {
          type: "number",
          minimum: 0,
          maximum: 800,
          format: "range",
          default: 0,
        },
        vmax: {
          type: "number",
          minimum: 0,
          maximum: 800,
          format: "range",
          default: 500,
        },
      },
      format: "minmax",
    },
  },
};

export const STORIES_LAYER_CROPOMHUSC2 = {
  type: "Vector",
  source: {
    type: "Vector",
    url:
      "data:," +
      encodeURIComponent(JSON.stringify(FEATURE_COLLECTION_LAYER_CROPOMHUSC)),
    format: "GeoJSON",
  },
  properties: {
    id: "id",
    title: "Crop Yield Vector Example",
    layerConfig: {
      schema: JSONFORM_SCHEMA_LAYER_CROPOMHUSC2,
      style: STYLES_LAYER_CROPOMHUSC2,
    },
  },
};

const LAYERCONFIG_LAYER_SEE = {
  type: "style",
  schema: {
    type: "object",
    title: "Data configuration",
    properties: {
      settlementDistance: {
        type: "number",
        minimum: 0,
        maximum: 5000,
        format: "range",
        default: 0,
      },
      vminmax: {
        title: "Global horizontal irradiation",
        description: "[kWh/m²/day]",
        type: "object",
        properties: {
          vmin: {
            type: "number",
            minimum: 0,
            maximum: 5,
            format: "range",
            default: 2,
          },
          vmax: {
            type: "number",
            minimum: 0,
            maximum: 5,
            format: "range",
            default: 5,
          },
        },
        format: "minmax",
      },
    },
  },
};

const STYLES_LAYER_SEE = {
  variables: {
    vmin: 2,
    vmax: 5,
    settlementDistance: 0,
  },
  color: [
    "case",
    [
      "all",
      [">", ["band", 1], 1],
      [">=", ["band", 2], ["var", "settlementDistance"]],
    ],
    [
      "interpolate",
      ["linear"],
      [
        "/",
        ["-", ["band", 1], ["var", "vmin"]],
        ["-", ["var", "vmax"], ["var", "vmin"]],
      ],
      0,
      [68, 1, 84, 1],
      0.067,
      [70, 23, 103, 1],
      0.133,
      [71, 44, 122, 1],
      0.2,
      [65, 63, 131, 1],
      0.266,
      [59, 81, 139, 1],
      0.333,
      [52, 97, 141, 1],
      0.4,
      [44, 113, 142, 1],
      0.467,
      [39, 129, 142, 1],
      0.533,
      [33, 144, 141, 1],
      0.6,
      [39, 173, 129, 1],
      0.666,
      [66, 187, 114, 1],
      0.733,
      [92, 200, 99, 1],
      0.8,
      [131, 210, 75, 1],
      0.867,
      [170, 220, 50, 1],
      0.933,
      [212, 226, 44, 1],
      1,
      [253, 231, 37, 1],
    ],
    ["color", 0, 0, 0, 0],
  ],
};

export const STORIES_LAYER_SEE = {
  type: "WebGLTile",
  style: STYLES_LAYER_SEE,
  properties: {
    id: Symbol(),
    title: "Solar Energy COG Example",
    layerConfig: LAYERCONFIG_LAYER_SEE,
  },
  source: {
    type: "GeoTIFF",
    normalize: false,
    sources: [
      {
        url: "https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/v2/SolarPowerPotential_Annual_COG_clipped_3857_fixed.tif",
      },
      {
        url: "https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/WSF_EucDist_Austria_3857_COG_fix.tif",
      },
    ],
  },
};

export const STORIES_LAYER_VESSEL_DENSITY_CARGO = {
  type: "Tile",
  properties: {
    id: "lz83t24tf72212zcxq6",
    title: "vessel_density_cargo",
    layerControlExpand: true,
    layerControlToolsExpand: true,
    layerDatetime: {
      disablePlay: true,
      slider: true,
      current: "2021-03-01",
      values: [
        "2022-12-01",
        "2022-11-01",
        "2022-10-01",
        "2022-09-01",
        "2022-08-01",
        "2022-07-01",
        "2022-06-01",
        "2022-05-01",
        "2022-04-01",
        "2022-03-01",
        "2022-02-01",
        "2022-01-01",
        "2021-12-01",
        "2021-11-01",
        "2021-10-01",
        "2021-09-01",
        "2021-08-01",
        "2021-07-01",
        "2021-06-01",
        "2021-05-01",
        "2021-04-01",
        "2021-03-01",
        "2021-02-01",
        "2021-01-01",
        "2020-12-01",
        "2020-11-01",
        "2020-10-01",
        "2020-09-01",
        "2020-08-01",
        "2020-07-01",
        "2020-06-01",
        "2020-05-01",
        "2020-04-01",
        "2020-03-01",
        "2020-02-01",
        "2020-01-01",
        "2019-12-01",
        "2019-11-01",
        "2019-10-01",
        "2019-09-01",
        "2019-08-01",
        "2019-07-01",
        "2019-06-01",
        "2019-05-01",
        "2019-04-01",
        "2019-03-01",
        "2019-02-01",
        "2019-01-01",
        "2018-12-01",
        "2018-11-01",
        "2018-10-01",
        "2018-09-01",
        "2018-08-01",
        "2018-07-01",
        "2018-06-01",
        "2018-05-01",
        "2018-04-01",
        "2018-03-01",
        "2018-02-01",
        "2018-01-01",
        "2017-12-01",
        "2017-11-01",
        "2017-10-01",
        "2017-09-01",
        "2017-08-01",
        "2017-07-01",
        "2017-06-01",
        "2017-05-01",
        "2017-04-01",
        "2017-03-01",
        "2017-02-01",
        "2017-01-01",
      ],
    },
  },
  source: {
    type: "TileWMS",
    url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
    params: {
      LAYERS: ["AWS_VIS_VESSELDENSITY_CARGO"],
      TILED: true,
      TIME: "2021-03-01T00:00:00Z",
    },
  },
};
