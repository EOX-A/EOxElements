import { html } from "lit";
import { STORIES_LAYERCONTROL_STYLE, STORIES_MAP_STYLE } from "../src/enums";
import "@eox/jsonform";
import "@eox/timecontrol";

/**
 * Helper function to discover bands from a GeoZarr dataset metadata endpoint from outside EOxElements.
 *
 * @param {string} zarrUrl
 * @returns {Promise<string[]>}
 */
export async function fetchGeoZarrBands(zarrUrl) {
  try {
    const response = await fetch(`${zarrUrl.replace(/\/$/, "")}/zarr.json`);
    const data = await response.json();
    const metadata =
      data.consolidated_metadata?.metadata || data.metadata || data;
    const bands = new Set();
    const ignoreNames = new Set([
      "spatial_ref",
      "crs",
      "time",
      "x",
      "y",
      "lat",
      "lon",
      "latitude",
      "longitude",
      "border_mask",
      "conditions",
    ]);

    for (const key of Object.keys(metadata)) {
      const parts = key.split("/");
      const varName = parts[parts.length - 1];
      if (
        varName &&
        !ignoreNames.has(varName) &&
        !/^\d+$/.test(varName) &&
        !varName.startsWith("r") &&
        metadata[key].node_type === "array"
      ) {
        bands.add(varName);
      }
    }
    const result = Array.from(bands);
    return result.length > 0 ? result : ["vv", "vh"];
  } catch (err) {
    console.warn("Could not fetch GeoZarr bands:", err);
    return ["vv", "vh"];
  }
}

const zarrUrl =
  "https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-1-grd-rtc-staging/s1-rtc-28RBS.zarr/descending";

const channelOptions = {
  enum: [1, 2],
  options: {
    enum_titles: ["VV (Band 1)", "VH (Band 2)"],
  },
};

const rangeOption = {
  type: "number",
  minimum: 0.01,
  maximum: 1,
  default: 0.4,
  step: 0.01,
  format: "range",
};

export const geozarrStory = {
  parameters: {
    layout: "padded",
  },
  args: {
    for: "eox-map#geozarr",
    storyAdditionalComponents: {
      "eox-map": {
        center: [-1989200, 3310600],
        zoom: 9,
        style: STORIES_MAP_STYLE,
        layers: [
          {
            type: "Tile",
            properties: {
              id: "osm",
              title: "OpenStreetMap",
            },
            source: {
              type: "OSM",
            },
          },
          {
            type: "WebGLTile",
            properties: {
              id: "sentinel-1-rtc",
              title: "Sentinel-1 RTC GeoZarr",
              layerControlExpand: true,
              layerControlToolsExpand: true,
              layerConfig: {
                type: "style",
                style: true,
                schema: {
                  type: "object",
                  title: "Visualization Settings",
                  properties: {
                    red: {
                      title: "Red Channel",
                      type: "number",
                      default: 1,
                      ...channelOptions,
                    },
                    green: {
                      title: "Green Channel",
                      type: "number",
                      default: 2,
                      ...channelOptions,
                    },
                    blue: {
                      title: "Blue Channel",
                      type: "number",
                      default: 1,
                      ...channelOptions,
                    },
                    redMax: {
                      title: "Red Max",
                      ...rangeOption,
                      default: 0.4,
                    },
                    greenMax: {
                      title: "Green Max",
                      ...rangeOption,
                      maximum: 0.5,
                      default: 0.1,
                      step: 0.005,
                    },
                    blueMax: {
                      title: "Blue Max",
                      ...rangeOption,
                      default: 0.4,
                    },
                    gamma: {
                      title: "Gamma Correction",
                      type: "number",
                      minimum: 0.5,
                      maximum: 3.0,
                      default: 1.2,
                      step: 0.1,
                      format: "range",
                    },
                  },
                },
              },
            },
            source: {
              type: "GeoZarr",
              url: zarrUrl,
              bands: ["vv", "vh"],
            },
            style: {
              variables: {
                red: 1,
                green: 2,
                blue: 1,
                redMax: 0.4,
                greenMax: 0.1,
                blueMax: 0.4,
                gamma: 1.2,
              },
              gamma: ["var", "gamma"],
              color: [
                "color",
                [
                  "interpolate",
                  ["linear"],
                  ["band", ["var", "red"]],
                  0,
                  0,
                  ["var", "redMax"],
                  255,
                ],
                [
                  "interpolate",
                  ["linear"],
                  ["band", ["var", "green"]],
                  0,
                  0,
                  ["var", "greenMax"],
                  255,
                ],
                [
                  "interpolate",
                  ["linear"],
                  ["band", ["var", "blue"]],
                  0,
                  0,
                  ["var", "blueMax"],
                  255,
                ],
              ],
            },
          },
        ],
        id: "geozarr",
      },
    },
    storyCodeBefore: 'import "@eox/jsonform";\nimport "@eox/timecontrol";',
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

export default geozarrStory;
