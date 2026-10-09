import { html } from "lit";
import { STORIES_LAYERCONTROL_STYLE, STORIES_MAP_STYLE } from "../src/enums";
import { registerProjection } from "@eox/map/src/helpers";
import "@eox/jsonform";
import "@eox/timecontrol";

// Register custom Polar Stereographic projection (EPSG:6932)
const crs =
  "+proj=laea +lat_0=-90 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs +type=crs";
registerProjection("EPSG:6932", crs, [-4450000, -4450000, 4450000, 4450000]);

const zarrUrl =
  "https://s3.waw4-1.cloudferro.com/EarthCODE/OSCAssets/med_cubes/ocean-med-biophysics.zarr";

const secondQ = [
  "+",
  ["var", "min"],
  ["*", ["-", ["var", "max"], ["var", "min"]], 1 / 3],
];
const thirdQ = [
  "+",
  ["var", "min"],
  ["*", ["-", ["var", "max"], ["var", "min"]], 2 / 3],
];

const tileStyle = {
  variables: { min: 0, max: 40 },
  color: [
    "interpolate",
    ["linear"],
    ["band", 1],
    ["var", "min"],
    ["color", 0, 210, 255, ["band", 2]],
    secondQ,
    ["color", 254, 217, 118, ["band", 2]],
    thirdQ,
    ["color", 253, 141, 60, ["band", 2]],
    ["var", "max"],
    ["color", 189, 0, 38, ["band", 2]],
  ],
};

// const variableBands = [
//   "sss",
//   "floes_density",
//   "freeboard",
//   "ice_conc",
//   "lead_fraction",
//   "radar_freeboard",
//   "sea_ice_thickness",
//   "snow_depth",
//   "surfacetype",
// ];

// const variableTitles = [
//   "sss (Sea Surface Salinity)",
//   "floes_density (Floes Density)",
//   "freeboard (Sea Ice Freeboard)",
//   "ice_conc (Sea Ice Concentration)",
//   "lead_fraction (Lead Fraction)",
//   "radar_freeboard (Radar Freeboard)",
//   "sea_ice_thickness (Sea Ice Thickness)",
//   "snow_depth (Snow Depth)",
//   "surfacetype (Surface Type)",
// ];

export const geozarrMultibandStory = {
  parameters: {
    layout: "padded",
  },
  args: {
    for: "eox-map#geozarr-multiband",
    storyAdditionalComponents: {
      "eox-map": {
        center: [0, 0],
        zoom: 2,
        //projection: "EPSG:6932",
        style: STORIES_MAP_STYLE,
        layers: [
          {
            type: "Tile",
            properties: {
              id: "arctic-basemap",
              title: "Natural Earth I Shaded Relief (Arctic Portal WMS)",
              role: "base",
            },
            source: {
              type: "TileWMS",
              url: "https://geoserver.arcticportal.org/geoserver/ows",
              params: {
                LAYERS: "basemap:NE_Drape",
                TILED: true,
                VERSION: "1.1.1",
                TRANSPARENT: true,
                SRS: "EPSG:4326",
              },
              serverType: "geoserver",
              crossOrigin: "anonymous",
            },
          },
          {
            type: "WebGLTile",
            properties: {
              id: "sea-ice-cube",
              title: "Mediterranean Biophysics GeoZarr",
              layerControlExpand: true,
              layerControlToolsExpand: true,
              layerConfig: {
                type: "style",
                style: true,
                autofill: true,
                // schema: {
                //   type: "object",
                //   title: "Visualization Settings",
                //   properties: {
                //     variable: {
                //       title: "Variable",
                //       type: "string",
                //       default: "sss",
                //       enum: variableBands,
                //       options: {
                //         enum_titles: variableTitles,
                //       },
                //     },
                //     min: {
                //       title: "Min Value",
                //       default: 0,
                //       type: "number",
                //     },
                //     max: {
                //       title: "Max Value",
                //       default: 40,
                //       type: "number",
                //     },
                //   },
                // },
              },
            },
            source: {
              type: "GeoZarr",
              crossOrigin: "anonymous",
              url: zarrUrl,
              bands: [],
            },
            style: tileStyle,
          },
        ],
        id: "geozarr-multiband",
      },
    },
    storyCodeBefore: `import "@eox/jsonform";
import "@eox/timecontrol";
import { registerProjection } from "@eox/map/src/helpers";

const crs = "+proj=laea +lat_0=-90 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs +type=crs";
registerProjection("EPSG:6932", crs, [
  -4450000,
  -4450000,
  4450000,
  4450000,
]);`,
    style: STORIES_LAYERCONTROL_STYLE,
    tools: ["datetime", "config", "opacity"],
    initDate: ["first"],
  },
  render: (args) => html`
    <div style="display: flex; gap: 16px; width: 100%;">
      <eox-layercontrol
        .tools=${args.tools}
        for=${args.for}
        .style=${args.style}
      ></eox-layercontrol>
      <div style="flex: 1; display: flex; flex-direction: column; gap: 10px;">
        <eox-map
          id=${args.storyAdditionalComponents["eox-map"].id}
          .center=${args.storyAdditionalComponents["eox-map"].center}
          .zoom=${args.storyAdditionalComponents["eox-map"].zoom}
          .projection=${args.storyAdditionalComponents["eox-map"].projection}
          style="width: 100%; height: 500px;"
          .layers=${args.storyAdditionalComponents["eox-map"].layers}
        ></eox-map>
        <eox-timecontrol .initDate=${args.initDate} for=${args.for}>
          <eox-timecontrol-date .navigation=${true}></eox-timecontrol-date>
          <eox-timecontrol-picker
            .showDots=${true}
            .popup=${true}
          ></eox-timecontrol-picker>
          <eox-timecontrol-slider style="width: 100%;"></eox-timecontrol-slider>
        </eox-timecontrol>
      </div>
    </div>
  `,
};

export default geozarrMultibandStory;
