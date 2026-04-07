import { html } from "lit";
import eoxStyle from "@eox/ui/style.css?inline";
import "@eox/ui";
import "color-legend-element";

export default {
  title: "Dashboard Demo",
  parameters: {
    layout: "fullscreen",
  },
};

export const DashboardDemo = {
  render: () => html`
    <nav class="small-padding surface-container">
      <div class="max">
        <p>EOxElements Dashboard Demo</p>
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
    <div>
      <div class="overlay blur"></div>
      <dialog id="info-dialog" class="blur">
        <p>
          <eox-stacinfo
            .for=${`${window.location.href.split("iframe.html")[0]}/collection.json`}
            .header=${["title"]}
            .tags=${["tags"]}
            .body=${["satellite", "sensor", "agency", "extent"]}
            .featured=${["description", "providers", "assets", "links"]}
            .footer=${["sci:citation"]}
          ></eox-stacinfo>
        </p>
        <nav>
          <div class="max"></div>
          <button data-ui="#info-dialog" class="primary-text transparent">
            Close
          </button>
        </nav>
      </dialog>
      <eox-map></eox-map>
      <div id="map-controls-left" class="map-controls"></div>
      <div id="map-controls-right" class="map-controls"></div>
      <eox-layout gap="8" class="padding">
        <eox-layout-item x="0" y="0" w="3" h="12" style="padding-bottom: 40px">
          <article class="blur padding scroll">
            <eox-stacinfo
              .for=${`${window.location.href.split("iframe.html")[0]}/collection.json`}
              .header=${["title"]}
              .body=${["description"]}
            ></eox-stacinfo>
            <div class="small-margin horizontal-margin">...</div>
            <a data-ui="#info-dialog" id="show-info" class="link small-margin"
              >Read more</a
            >
            <hr class="top-margin" />
            <eox-layercontrol>
              <span slot="layerstitle"></span>
            </eox-layercontrol>
          </article>
        </eox-layout-item>
        <eox-layout-item
          x="7"
          y="0"
          w="5"
          h="12"
          style="padding-bottom: 40px; display: flex; align-items: flex-start; justify-content: flex-end; "
        >
          <article id="analysis" class="blur padding" style="width: 600px">
            <eox-drawtools measure projection="EPSG:3857">
              <div slot="drawtitle">
                <p><strong>Analyze Area</strong></p>
                <p class="small-text no-margin">
                  Draw a polygon to analyze the area of interest.
                </p>
              </div>
            </eox-drawtools>
            <button
              id="close-analysis"
              class="circle transparent small"
              style="position: absolute; top: 8px; right: 8px;"
            >
              <i class="mdi mdi-close"></i>
            </button>
          </article>
          <button
            id="show-analysis"
            class="primary-text transparent small-margin"
            style="position: absolute; top: 8px; right: 8px; display: none;"
          >
            Analyze Area
          </button>
        </eox-layout-item>
      </eox-layout>
    </div>
    <style>
      ${eoxStyle} [class*="blur"],
      [class*="blur"].light {
        background-color: #ffffffc4 !important;
      }
      eox-map,
      eox-layout {
        width: 100dvw;
        height: calc(100dvh - 48px);
      }
      eox-map {
        position: absolute;
        left: 0;
        top: 0;
      }
      .map-controls {
        position: absolute;
        bottom: 0;
        padding: 1rem;
      }
      #map-controls-left {
        left: 0;
        display: flex;
      }
      #map-controls-right {
        right: 0;
        display: flex;
      }
      #map-controls-right button {
        margin-left: 1rem;
        aspect-ratio: 1;
        padding: 0;
        background: var(--surface-variant);
        color: var(--primary);
        font-weight: bold;
        font-size: 1rem;
      }
      .ol-scale-line {
        border-bottom: var(--outline) 2px solid;
      }
      .ol-attribution {
        display: flex;
        align-items: center;
      }
      .ol-attribution > ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .ol-attribution.ol-collapsed > ul {
        display: none;
      }
      eox-layout,
      eox-layout-item {
        pointer-events: none;
      }
      eox-layout-item > article {
        pointer-events: all;
        width: 280px;
        /* overflow-y: auto; */
        max-height: 100%;
        max-width: 100%;
      }
      article eox-stacinfo {
        max-height: 112px;
        padding-top: 28px;
      }
      eox-layercontrol {
        --item-hover-color: transparent;
      }
      eox-chart {
        height: 300px;
      }
    </style>
    <script>
      document.querySelector("eox-layercontrol").tools = [
        "config",
        "info",
        "opacity",
      ];
      Object.assign(document.querySelector("eox-map"), {
        zoomExtent: [
          1016488.8629933606, 5851374.684177493, 1946783.134700175,
          6278244.086976296,
        ],
        animationOptions: { duration: 500, padding: [20, 20, 20, 300] },
        controls: {
          Attribution: {
            collapsible: true,
            collapsed: true,
            target: document.querySelector("#map-controls-right"),
          },
          GlobeSwitcher: {
            target: document.querySelector("#map-controls-right"),
          },
          Zoom: {
            target: document.querySelector("#map-controls-right"),
          },
          ScaleLine: {
            target: document.querySelector("#map-controls-left"),
          },
        },
        layers: [
          {
            type: "Tile",
            properties: {
              id: "osm",
              layerControlHide: true,
            },
            source: {
              type: "OSM",
            },
          },
          {
            type: "Tile",
            properties: {
              id: "AWS_NO2-VISUALISATION",
              title: "Nitrous Dioxide (NO2)",
              color: "#d75242",
              description:
                "Sentinel-5P satellite data showing NO2 levels. Data source: Sentinel Hub.",
              visible: false,
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
              layerControlToolsExpand: true,
              title: "Solar Potential",
              color: "#37598c",
              description: "Solar energy potential based on satellite data.",
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
        ],
      });

      document
        .querySelector("eox-drawtools")
        .addEventListener("drawupdate", (event) => {
          if (!event.detail[0] && document.querySelector("eox-chart")) {
            document.querySelector("eox-chart").remove();
            return;
          }
          if (document.querySelector("eox-chart")) {
            return;
          }

          const eoxChart = document.createElement("eox-chart");

          eoxChart.spec = {
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
            background: null,
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
          };
          document.querySelector("#analysis").appendChild(eoxChart);
          //document.querySelector("eox-map").animationOptions = {padding: [20, 600, 20, 280]};
          //console.log(document.querySelector("eox-drawtools").drawLayer)
          //document.querySelector("eox-map").interactions.drawInteraction.highlightById([event.detail[0].getId()]);
          //console.log(event.detail[0]);
          //setTimeout(() => {
          document
            .querySelector("eox-map")
            .map.getView()
            .fit(event.detail[0].getGeometry().getExtent(), {
              duration: 650,
              padding: [20, 640, 20, 320],
            });
          //}, 0);

          document
            .querySelector("#close-analysis")
            .addEventListener("click", (event) => {
              console.log(event);
              //document.querySelector("eox-chart").remove();
              event.target.parentElement.style.display = "none";
              document.querySelector("#show-analysis").style.display = "block";
            });

          // document.querySelector("eox-chart").style.visibility = "visible";
        });
    </script>
  `,
};
