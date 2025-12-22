import { html } from "lit";
import eoxStyle from "@eox/ui/style.css?inline";
import "@eox/ui";
import "color-legend-element";
import items from "./elements/itemfilter/test/testItems.json";

export default {
  title: "Demo",
  parameters: {
    componentSubtitle: "Automatically fetch & display properties of STAC files",
    layout: "fullscreen",
  },
};

export const KitchenSink = {
  render: () => html`
    <nav class="small-padding surface-container">
      <div class="max">
        <p>EOxElements Demo</p>
      </div>
      <label class="switch icon small">
        <input
          type="checkbox"
          .checked=${window.ui("mode") === "dark"}
          @input=${(e) => {
            window.ui("mode", e.target.checked ? "dark" : "light");
          }}
        />
        <span>
          <i class="mdi mdi-brightness-7"></i>
          <i class="mdi mdi-brightness-2"></i>
        </span>
      </label>
    </nav>
    <eox-layout gap="8" fill-grid row-height="200px" column-width="200px">
      <eox-layout-item w="2">
        <eox-chart
          style="height: 100%"
          .spec=${{
            $schema: "https://vega.github.io/schema/vega-lite/v5.json",
            description:
              "A chart visualizing data fetched from a geoDB endpoint",
            data: {
              url: "https://xcube-geodb.brockmann-consult.de/gtif/f0ad1e25-98fa-4b82-9228-815ab24f5dd1/GTIF_no2_data?and=(date.gte.2022-01-01,date.lte.2022-01-05)&select=no2_ec_station_ppbv,date",
              parse: {
                no2_ec_station_ppbv: "number",
                date: "date",
              },
            },
            encoding: {
              x: { field: "date", type: "temporal" },
            },
            layer: [
              {
                encoding: {
                  y: {
                    field: "no2_ec_station_ppbv",
                    type: "quantitative",
                  },
                },
                layer: [
                  { mark: "line" },
                  {
                    transform: [{ filter: { param: "hover", empty: false } }],
                    mark: "point",
                  },
                ],
              },
              {
                mark: "rule",
                encoding: {
                  opacity: {
                    condition: { value: 0.3, param: "hover", empty: false },
                    value: 0,
                  },
                  tooltip: [
                    {
                      field: "no2_ec_station_ppbv",
                      type: "quantitative",
                    },
                  ],
                },
                params: [
                  {
                    name: "hover",
                    select: {
                      type: "point",
                      fields: ["date"],
                      nearest: true,
                      on: "pointerover",
                      clear: "pointerout",
                    },
                  },
                ],
              },
            ],
          }}
        ></eox-chart>
      </eox-layout-item>
      <eox-layout-item>
        <eox-drawtools multiple-features show-list></eox-drawtools>
      </eox-layout-item>
      <eox-layout-item>
        <eox-geosearch
          style="grid-column: 6 / span 3; pointer-events: all"
        ></eox-geosearch>
        <eox-geosearch
          small
          button
          style="grid-column: 6 / span 3; pointer-events: all"
        ></eox-geosearch>
      </eox-layout-item>
      <eox-layout-item h="2">
        <eox-itemfilter
          .titleProperty=${"title"}
          .aggregateResults=${"themes"}
          .items=${items}
          .enableResultAction=${true}
          .imageProperty=${"img"}
          .enableHighlighting=${true}
          .filterProperties=${[
            {
              keys: ["title", "themes"],
              title: "Search",
              type: "text",
              placeholder: "Type Something...",
              expanded: true,
              validation: {
                pattern: ".{0,10}",
                message: "Maximum 10 characters",
              },
            },
            {
              key: "completed",
              title: "Completed",
              type: "multiselect",
              filterKeys: [true, false],
            },
            {
              key: "userId",
              title: "User ID",
              type: "multiselect",
              filterKeys: [1, 2, 3],
            },
          ]}
        ></eox-itemfilter>
      </eox-layout-item>
      <eox-layout-item h="2">
        <eox-layercontrol .toolsAsList=${true}></eox-layercontrol>
      </eox-layout-item>
      <eox-layout-item w="2" h="2">
        <eox-map
          .controls=${{
            Zoom: {},
            Attribution: {},
            FullScreen: {},
            OverviewMap: {
              layers: [
                {
                  type: "Tile",
                  properties: {
                    id: "overviewMap",
                  },
                  source: {
                    type: "OSM",
                  },
                },
              ],
            },
          }}
          .layers=${[
            {
              type: "Group",
              properties: {
                id: "group1",
                title: "Background Layers",
              },
              layers: [
                {
                  type: "Tile",
                  source: { type: "OSM" },
                  properties: { title: "OSM" },
                },
              ],
            },
            {
              type: "WebGLTile",
              style: {
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
              },
              properties: {
                id: Symbol(),
                title: "Solar Energy COG Example",
                layerConfig: {
                  type: "style",
                  legend: {
                    title: "Global horizontal irradiation",
                    range: [
                      "rgba(253, 231, 37, 1)",
                      "rgba(33, 144, 141, 1)",
                      "rgba(68, 1, 84, 1)",
                    ],
                    domainProperties: ["vmin", "vmax"],
                  },
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
                },
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
            },
            {
              type: "Tile",
              properties: {
                id: "AWS_NO2-VISUALISATION",
                name: "NO2 Visualisation",
                timeControlValues: [
                  {
                    date: "2022-12-05",
                    cloudCoverage: 20,
                  },
                  {
                    date: "2022-12-06",
                    cloudCoverage: 18,
                  },
                  {
                    date: "2022-12-07",
                    cloudCoverage: 22,
                  },
                  {
                    date: "2022-12-08",
                    cloudCoverage: 25,
                  },
                  {
                    date: "2022-12-09",
                    cloudCoverage: 19,
                  },
                  {
                    date: "2022-12-10",
                    cloudCoverage: 16,
                  },
                  {
                    date: "2022-12-11",
                    cloudCoverage: 21,
                  },
                  {
                    date: "2022-12-12",
                    cloudCoverage: 15,
                  },
                  {
                    date: "2022-12-19",
                    cloudCoverage: 35,
                  },
                  {
                    date: "2022-12-26",
                    cloudCoverage: 8,
                  },
                  {
                    date: "2023-01-16",
                    cloudCoverage: 42,
                  },
                  {
                    date: "2023-01-17",
                    cloudCoverage: 38,
                  },
                  {
                    date: "2023-01-18",
                    cloudCoverage: 45,
                  },
                  {
                    date: "2023-01-19",
                    cloudCoverage: 41,
                  },
                  {
                    date: "2023-01-20",
                    cloudCoverage: 39,
                  },
                  {
                    date: "2023-01-21",
                    cloudCoverage: 43,
                  },
                  {
                    date: "2023-01-22",
                    cloudCoverage: 37,
                  },
                  {
                    date: "2023-01-23",
                    cloudCoverage: 28,
                  },
                  {
                    date: "2023-01-24",
                    cloudCoverage: 31,
                  },
                  {
                    date: "2023-01-25",
                    cloudCoverage: 26,
                  },
                  {
                    date: "2023-01-26",
                    cloudCoverage: 29,
                  },
                  {
                    date: "2023-01-27",
                    cloudCoverage: 24,
                  },
                  {
                    date: "2023-01-28",
                    cloudCoverage: 32,
                  },
                  {
                    date: "2023-01-29",
                    cloudCoverage: 27,
                  },
                  {
                    date: "2023-01-30",
                    cloudCoverage: 12,
                  },
                  {
                    date: "2023-01-31",
                    cloudCoverage: 14,
                  },
                  {
                    date: "2023-02-01",
                    cloudCoverage: 11,
                  },
                  {
                    date: "2023-02-02",
                    cloudCoverage: 16,
                  },
                  {
                    date: "2023-02-03",
                    cloudCoverage: 13,
                  },
                  {
                    date: "2023-02-04",
                    cloudCoverage: 18,
                  },
                  {
                    date: "2023-02-05",
                    cloudCoverage: 15,
                  },
                  {
                    date: "2023-02-06",
                    cloudCoverage: 55,
                  },
                  {
                    date: "2023-02-13",
                    cloudCoverage: 33,
                  },
                  {
                    date: "2023-02-14",
                    cloudCoverage: 36,
                  },
                  {
                    date: "2023-02-15",
                    cloudCoverage: 30,
                  },
                  {
                    date: "2023-02-16",
                    cloudCoverage: 38,
                  },
                  {
                    date: "2023-02-17",
                    cloudCoverage: 34,
                  },
                  {
                    date: "2023-02-18",
                    cloudCoverage: 31,
                  },
                  {
                    date: "2023-02-19",
                    cloudCoverage: 35,
                  },
                  {
                    date: "2023-02-20",
                    cloudCoverage: 29,
                  },
                  {
                    date: "2023-02-21",
                    cloudCoverage: 32,
                  },
                  {
                    date: "2023-02-22",
                    cloudCoverage: 27,
                  },
                  {
                    date: "2023-02-23",
                    cloudCoverage: 33,
                  },
                  {
                    date: "2023-02-24",
                    cloudCoverage: 25,
                  },
                  {
                    date: "2023-02-25",
                    cloudCoverage: 28,
                  },
                  {
                    date: "2023-02-26",
                    cloudCoverage: 22,
                  },
                  {
                    date: "2023-02-27",
                    cloudCoverage: 18,
                  },
                  {
                    date: "2023-03-06",
                    cloudCoverage: 47,
                  },
                  {
                    date: "2023-03-13",
                    cloudCoverage: 25,
                  },
                  {
                    date: "2023-03-14",
                    cloudCoverage: 28,
                  },
                  {
                    date: "2023-03-15",
                    cloudCoverage: 23,
                  },
                  {
                    date: "2023-03-16",
                    cloudCoverage: 26,
                  },
                  {
                    date: "2023-03-17",
                    cloudCoverage: 21,
                  },
                  {
                    date: "2023-03-18",
                    cloudCoverage: 24,
                  },
                  {
                    date: "2023-03-19",
                    cloudCoverage: 19,
                  },
                  {
                    date: "2023-03-20",
                    cloudCoverage: 9,
                  },
                  {
                    date: "2023-03-27",
                    cloudCoverage: 38,
                  },
                  {
                    date: "2023-04-03",
                    cloudCoverage: 22,
                  },
                  {
                    date: "2023-04-10",
                    cloudCoverage: 51,
                  },
                  {
                    date: "2023-04-17",
                    cloudCoverage: 14,
                  },
                  {
                    date: "2023-04-24",
                    cloudCoverage: 29,
                  },
                ],
                timeControlProperty: "TIME",
              },
              source: {
                type: "TileWMS",
                url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
                params: {
                  LAYERS: "AWS_NO2-VISUALISATION",
                  TIME: "2022-12-05",
                },
                crossOrigin: "anonymous",
              },
            },
            {
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
            },
          ]}
          .zoomExtent=${[
            -133286.98347565567, 5318575.418328699, 2215737.538674842,
            7354396.67085913,
          ]}
          style="width: 100%; height: 100%;"
        ></eox-map>
      </eox-layout-item>
      <eox-layout-item h="3">
        <eox-stacinfo
          .for=${`${window.location.href.split("iframe.html")[0]}/collection.json`}
          .header=${["title"]}
          .tags=${["tags"]}
          .body=${["satellite", "sensor", "agency", "extent"]}
          .featured=${["description", "providers", "assets", "links"]}
          .footer=${["sci:citation"]}
        ></eox-stacinfo>
      </eox-layout-item>
      <eox-layout-item w="3" h="2">
        <eox-timecontrol .for=${"eox-map"}>
          <div style="display: flex; gap: 10px;align-items: center;">
            <eox-timecontrol-date .navigation=${true}></eox-timecontrol-date>
            <eox-timecontrol-picker
              .showDots=${true}
              .popup=${true}
            ></eox-timecontrol-picker>
          </div>
          <eox-timecontrol-slider
            style="width: 600px;"
          ></eox-timecontrol-slider>
          <eox-timecontrol-timeline
            style="margin-top: 10px;"
          ></eox-timecontrol-timeline>
        </eox-timecontrol>
      </eox-layout-item>
    </eox-layout>
    <style>
      ${eoxStyle} eox-layout {
        padding: 8px !important;
      }
      eox-layout-item {
        border: 1px solid lightgrey;
        border-radius: 8px;
        background: var(--surface-container-lowest);
        overflow-y: auto;
        padding: 0.5rem;
      }
    </style>
  `,
};
