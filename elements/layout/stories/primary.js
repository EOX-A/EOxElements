import { html } from "lit";
import items from "../../itemfilter/test/testItems.json";

export const Primary = {
  args: {},
  render: () => html`
    <!-- Render eox-layout component -->
    <eox-map
      .layers=${[
        {
          type: "Tile",
          properties: {
            id: "AWS_NO2-VISUALISATION",
          },
          source: {
            type: "TileWMS",
            url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
            params: {
              LAYERS: "AWS_NO2-VISUALISATION",
              TIME: "2022-12-05",
            },
          },
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
      ]}
      style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;"
    ></eox-map>
    <eox-layout gap="8">
      <eox-layout-item x="0" y="0" w="2" h="12">
        <div class="item-container">
          <eox-itemfilter
            style="height: auto; max-height: 500px; overflow: hidden;"
            .titleProperty=${"title"}
            .aggregateResults=${"themes"}
            .items=${items}
            .enableResultAction=${true}
            .imageProperty=${"img"}
            .filterProperties=${[
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
          <div class="small-space"></div>
          <hr class="medium" />
          <eox-layercontrol></eox-layercontrol>
        </div>
      </eox-layout-item>
      <eox-layout-item x="10" y="0" w="2" h="12">
        <div class="item-container">
          <eox-stacinfo
            .for=${`${window.location.href.split("iframe.html")[0]}/collection.json`}
            .header=${["title"]}
            .tags=${["tags"]}
            .body=${["satellite", "sensor", "agency", "extent"]}
            .featured=${["description", "providers", "assets", "links"]}
            .footer=${["sci:citation"]}
          ></eox-stacinfo>
          <hr class="medium" />
          <p class="small-padding left-padding"><strong>Draw</strong></p>
          <eox-drawtools></eox-drawtools>
          <hr class="medium" />
          <eox-chart
            style="height: 150px"
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
        </div>
      </eox-layout-item>
      <eox-layout-item
        x="5"
        y="11"
        w="3"
        h="1"
        style="display: grid; place-items: center;"
      >
        <div class="item-container">
          <eox-timecontrol
            .layer=${"AWS_NO2-VISUALISATION"}
            .controlProperty=${"TIME"}
            .controlValues=${[
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
            ]}
            .play=${true}
          ></eox-timecontrol>
        </div>
      </eox-layout-item>
    </eox-layout>
    <style>
      html,
      body,
      #storybook-root,
      #root-inner {
        padding: 0 !important;
        height: 100% !important;
      }
      eox-layout {
        width: 100%;
        height: 100%;
        pointer-events: none;
        padding: 8px;
      }
      eox-layout-item {
        pointer-events: all;
      }
      .item-container {
        backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 8px;
        box-shadow:
          0px 0px 1px rgba(24, 39, 75, 0.22),
          0px 6px 12px -6px rgba(24, 39, 75, 0.12),
          0px 8px 24px -4px rgba(24, 39, 75, 0.08);
        padding: 8px;
        overflow-x: hidden;
        overflow-y: auto;
        max-height: 100%;
      }
    </style>
  `,
};

export default Primary;
