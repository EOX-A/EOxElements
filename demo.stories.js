import { LitElement, html, css } from "lit";
import eoxStyle from "@eox/ui/style.css?inline";
import "@eox/ui";
import "color-legend-element";
import items from "./elements/itemfilter/test/testItems.json";
import "./a2ui/src/index.js";
import "./elements/map/src/main.js";
import "./elements/drawtools/src/main.js";
import "./elements/layercontrol/src/main.js";

export default {
  title: "Demo",
  tags: ["autodocs"],
  component: "eox-a2ui-wrapper",
  parameters: {
    componentSubtitle: "A2UI Integration & Kitchen Sink Showcase",
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

export class A2uiStreamingDemo extends LitElement {
  static get properties() {
    return {
      isPlaying: { type: Boolean, state: true },
      currentStep: { type: Number, state: true },
      stream: { type: Array, state: true },
      logMessages: { type: Array, state: true },
      isCollapsed: { type: Boolean, state: true },
    };
  }

  constructor() {
    super();
    this.isPlaying = false;
    this.currentStep = -1;
    this.stream = [];
    this.logMessages = [];
    this.isCollapsed = false;
    this.timer = null;
  }

  get steps() {
    return [
      {
        name: "Create Surface",
        description:
          "Initialize the interactive A2UI surface with the EOxElements catalog.",
        action: {
          createSurface: {
            surfaceId: "demo_surface",
            catalogId:
              "https://eox-a.github.io/EOxElements/a2ui/0_9/combined_catalog.json",
            sendDataModel: true,
          },
        },
      },
      {
        name: "Render Fullscreen Map",
        description:
          "Set up the viewport with a background interactive EOxMap centered on Vienna with terrain-light and NO2 layer.",
        action: {
          updateComponents: {
            surfaceId: "demo_surface",
            components: [
              {
                id: "root",
                component: "Column",
                children: ["workspace"],
                align: "stretch",
                justify: "start",
              },
              {
                id: "workspace",
                component: "Row",
                children: ["my_map"],
                align: "stretch",
                justify: "start",
              },
              {
                id: "my_map",
                component: "EOxMap",
                zoom: 6,
                center: [16.37, 48.21],
                style:
                  "width: 100dvw; height: 100dvh; position: absolute; left: 0; z-index: 0",
                layers: [
                  {
                    type: "Tile",
                    properties: {
                      id: "terrain-light",
                      title: "Terrain Light",
                    },
                    source: {
                      type: "XYZ",
                      url: "//tiles.maps.eox.at/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg",
                    },
                    visible: true,
                  },
                  {
                    type: "Tile",
                    properties: {
                      id: "NO2",
                      title: "NO2",
                    },
                    source: {
                      type: "TileWMS",
                      url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
                      params: {
                        LAYERS: "AWS_NO2-VISUALISATION",
                      },
                    },
                  },
                ],
              },
            ],
          },
        },
      },
      {
        name: "Add Left Sidebar",
        description:
          "Insert a Left Sidebar containing an EOx Card with Title and Subtitle.",
        action: {
          updateComponents: {
            surfaceId: "demo_surface",
            components: [
              {
                id: "workspace",
                component: "Row",
                children: ["my_map", "left_col"],
                align: "stretch",
                justify: "start",
              },
              {
                id: "left_col",
                component: "Column",
                children: ["sidebar_card"],
                align: "stretch",
                justify: "start",
              },
              {
                id: "sidebar_card",
                component: "Card",
                child: "sidebar_card_content",
              },
              {
                id: "sidebar_card_content",
                component: "Column",
                children: ["title", "subtitle"],
                align: "stretch",
                justify: "start",
              },
              {
                id: "title",
                component: "Text",
                text: "EOxElements A2UI Demo",
                variant: "h3",
              },
              {
                id: "subtitle",
                component: "Text",
                text: "A dynamic layout rendered from an [A2UI protocol](https://a2ui.org/) JSON.",
                variant: "body",
              },
            ],
          },
        },
      },
      {
        name: "Inject Tabbed Tools",
        description:
          "Dynamically mount an EOxLayercontrol and EOxDrawtools inside standard Tabs.",
        action: {
          updateComponents: {
            surfaceId: "demo_surface",
            components: [
              {
                id: "sidebar_card_content",
                component: "Column",
                children: ["title", "subtitle", "my_tabs"],
                align: "stretch",
                justify: "start",
              },
              {
                id: "my_tabs",
                component: "Tabs",
                tabs: [
                  {
                    title: "Layers",
                    child: "my_layercontrol",
                  },
                  {
                    title: "Draw",
                    child: "my_drawtools",
                  },
                ],
              },
              {
                id: "my_layercontrol",
                component: "EOxLayercontrol",
              },
              {
                id: "my_drawtools",
                component: "EOxDrawtools",
              },
            ],
          },
        },
      },
      {
        name: "Append Actions Card",
        description:
          "Add a secondary Action card containing an EOx Button for LLM triggers.",
        action: {
          updateComponents: {
            surfaceId: "demo_surface",
            components: [
              {
                id: "left_col",
                component: "Column",
                children: ["sidebar_card", "demo_card"],
                align: "stretch",
                justify: "start",
              },
              {
                id: "demo_card",
                component: "Card",
                child: "demo_card_content",
              },
              {
                id: "demo_card_content",
                component: "Column",
                children: ["demo_card_title", "my_button"],
                align: "stretch",
                justify: "start",
              },
              {
                id: "demo_card_title",
                component: "Text",
                text: "Actions",
                variant: "h4",
              },
              {
                id: "my_button",
                component: "Button",
                child: "my_button_label",
                variant: "primary",
                action: {
                  event: {
                    name: "demo_button_clicked",
                  },
                },
              },
              {
                id: "my_button_label",
                component: "Text",
                text: "Demo Button",
              },
            ],
          },
        },
      },
    ];
  }

  static get styles() {
    return css`
      :host {
        --a2ui-color-primary: #004170;
        --a2ui-button-border-radius: 1.5rem;
        --a2ui-card-border-radius: 1rem;
        --a2ui-card-background: #ffffffee;
        --a2ui-card-border: none;
        --a2ui-card-padding: 1.5rem;
        display: block;
        width: 100dvw;
        height: 100dvh;
        position: relative;
        font-family: Roboto, system-ui, sans-serif;
      }

      .floating-widget {
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 400px;
        max-height: 480px;
        background: rgba(15, 23, 42, 0.9);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 14px;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        z-index: 10000;
        display: flex;
        flex-direction: column;
        color: #f8fafc;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .floating-widget.collapsed {
        height: 52px;
      }

      .widget-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 18px;
        background: rgba(30, 41, 59, 0.85);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        font-size: 14px;
        font-weight: 600;
        user-select: none;
        cursor: pointer;
      }

      .widget-title {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .status-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #94a3b8;
        transition: all 0.3s;
      }

      .status-dot.active {
        background: #10b981;
        box-shadow: 0 0 10px #10b981;
      }

      .toggle-btn {
        background: none;
        border: none;
        color: #94a3b8;
        cursor: pointer;
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      }

      .toggle-btn:hover {
        color: #f1f5f9;
      }

      .widget-content {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 16px;
        gap: 14px;
        overflow: hidden;
      }

      .controls {
        display: flex;
        gap: 10px;
        align-items: center;
      }

      .btn {
        background: #334155;
        color: #f8fafc;
        border: none;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.2s;
      }

      .btn:hover:not(:disabled) {
        background: #475569;
      }

      .btn.primary {
        background: #004170;
      }

      .btn.primary:hover:not(:disabled) {
        background: #025793;
      }

      .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .progress-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        color: #94a3b8;
      }

      .progress-bar {
        flex: 1;
        height: 6px;
        background: #334155;
        border-radius: 3px;
        margin: 0 12px;
        overflow: hidden;
        position: relative;
      }

      .progress-fill {
        height: 100%;
        background: #10b981;
        transition: width 0.3s ease;
      }

      .console-log {
        flex: 1;
        background: #090d16;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        font-family: monospace;
        font-size: 11px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        min-height: 200px;
      }

      .console-header {
        background: #1e293b;
        padding: 8px 12px;
        font-size: 10px;
        font-weight: 700;
        color: #94a3b8;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }

      .console-content {
        padding: 12px;
        overflow-y: auto;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .log-line {
        line-height: 1.5;
        white-space: pre-wrap;
      }

      .log-line.info {
        color: #94a3b8;
      }

      .log-line.step {
        color: #38bdf8;
        font-weight: 600;
      }

      .log-line.success {
        color: #4ade80;
        font-weight: 600;
      }

      .log-line.json {
        color: #e2e8f0;
        background: rgba(255, 255, 255, 0.04);
        padding: 8px;
        border-radius: 6px;
        border-left: 3px solid #004170;
        margin-left: 4px;
        font-size: 10px;
      }

      a2ui-basic-column {
        width: 380px;
        max-width: calc(100% - 32px);
        margin: 16px;
        z-index: 10;
        pointer-events: auto;
      }

      a2ui-basic-card {
        margin-bottom: 12px;
      }

      @media (max-width: 600px) {
        a2ui-basic-column {
          width: calc(100% - 32px) !important;
          margin: 16px !important;
          max-height: 40dvh !important;
          overflow-y: auto !important;
          position: fixed !important;
          top: 16px !important;
          bottom: auto !important;
          left: 0 !important;
          right: 0 !important;
          box-sizing: border-box;
        }

        .floating-widget {
          position: fixed !important;
          bottom: 16px !important;
          top: auto !important;
          right: 16px !important;
          left: 16px !important;
          width: calc(100% - 32px) !important;
          max-height: 38dvh !important;
        }

        .floating-widget.collapsed {
          height: 52px !important;
        }
      }
    `;
  }

  firstUpdated() {
    this.reset();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stop();
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.isPlaying = true;
    if (this.currentStep >= this.steps.length - 1) {
      this.reset();
    }
    this.timer = setInterval(() => {
      this.next();
    }, 2000);
    if (this.currentStep === -1) {
      this.next();
    }
  }

  pause() {
    this.isPlaying = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  stop() {
    this.pause();
  }

  reset() {
    this.stop();
    this.currentStep = -1;
    this.stream = [];
    this.logMessages = [
      {
        type: "info",
        text: "Ready to stream. Click Play to start simulation.",
      },
    ];
  }

  scrollConsole() {
    setTimeout(() => {
      const consoleEl = this.shadowRoot.querySelector(".console-content");
      if (consoleEl) {
        consoleEl.scrollTop = consoleEl.scrollHeight;
      }
    }, 50);
  }

  handleA2uiAction(event) {
    const detail = event.detail;
    if (detail && detail.name === "demo_button_clicked") {
      alert("A2UI Action: Demo Button Clicked!");

      this.logMessages = [
        ...this.logMessages,
        {
          type: "info",
          text: "🖲 User clicked 'Demo Button'. Triggered client-side alert!",
        },
      ];

      this.scrollConsole();
    }
  }

  handleLayerChange(event) {
    this.logMessages = [
      ...this.logMessages,
      {
        type: "info",
        text: "🔄 EOxLayercontrol Fired 'layerchange' Event! Layer states updated.",
      },
    ];
    this.requestUpdate();
    this.scrollConsole();
  }

  handleDrawUpdate(event) {
    this.logMessages = [
      ...this.logMessages,
      {
        type: "info",
        text: "✏️ EOxDrawtools Fired 'drawupdate' Event! Features updated.",
      },
    ];
    this.requestUpdate();
    this.scrollConsole();
  }

  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      const nextStep = this.steps[this.currentStep];
      this.stream = [...this.stream, nextStep.action];
      this.logMessages = [
        ...this.logMessages,
        { type: "step", text: `>>> Stream Event: ${nextStep.name}` },
        { type: "json", text: JSON.stringify(nextStep.action, null, 2) },
      ];

      this.scrollConsole();

      if (this.currentStep === this.steps.length - 1) {
        this.pause();
        this.logMessages = [
          ...this.logMessages,
          { type: "success", text: "✔ Dynamic layout rendering complete." },
        ];
      }
    } else {
      this.pause();
    }
  }

  render() {
    const progressPercent = Math.round(
      ((this.currentStep + 1) / this.steps.length) * 100,
    );

    return html`
      <eox-a2ui-wrapper
        .stream=${this.stream}
        @a2ui-action=${this.handleA2uiAction}
        @layerchange=${this.handleLayerChange}
        @drawupdate=${this.handleDrawUpdate}
      ></eox-a2ui-wrapper>

      <div class="floating-widget ${this.isCollapsed ? "collapsed" : ""}">
        <div
          class="widget-header"
          @click=${() => {
            this.isCollapsed = !this.isCollapsed;
          }}
        >
          <div class="widget-title">
            <div class="status-dot ${this.isPlaying ? "active" : ""}"></div>
            <span>A2UI Streaming Simulator</span>
          </div>
          <button class="toggle-btn">
            ${this.isCollapsed ? html`▲` : html`▼`}
          </button>
        </div>

        <div class="widget-content">
          <div class="controls">
            <button class="btn primary" @click=${this.togglePlay}>
              ${this.isPlaying ? html`⏸ Pause` : html`▶ Play`}
            </button>
            <button class="btn" @click=${this.reset}>↺ Reset</button>
            <button
              class="btn"
              ?disabled=${this.isPlaying ||
              this.currentStep >= this.steps.length - 1}
              @click=${this.next}
            >
              Step ➔
            </button>
          </div>

          <div class="progress-container">
            <span>Step ${this.currentStep + 1} of ${this.steps.length}</span>
            <div class="progress-bar">
              <div
                class="progress-fill"
                style="width: ${progressPercent}%"
              ></div>
            </div>
            <span>${progressPercent}%</span>
          </div>

          <div class="console-log">
            <div class="console-header">A2UI JSON Stream Logs</div>
            <div class="console-content">
              ${this.logMessages.map(
                (msg) => html`
                  <div class="log-line ${msg.type}">${msg.text}</div>
                `,
              )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("a2ui-streaming-demo", A2uiStreamingDemo);

const demoStream = [
  {
    createSurface: {
      surfaceId: "demo_surface",
      catalogId:
        "https://eox-a.github.io/EOxElements/a2ui/0_9/combined_catalog.json",
      sendDataModel: true,
    },
  },
  {
    updateComponents: {
      surfaceId: "demo_surface",
      components: [
        {
          id: "root",
          component: "Column",
          children: ["workspace"],
          align: "stretch",
          justify: "start",
        },
        {
          id: "workspace",
          component: "Row",
          children: ["my_map", "left_col"],
          align: "stretch",
          justify: "start",
        },
        {
          id: "my_map",
          component: "EOxMap",
          zoom: 6,
          center: [16.37, 48.21],
          style:
            "width: 100dvw; height: 100dvh; position: absolute; left: 0; z-index: 0",
          layers: [
            {
              type: "Tile",
              properties: {
                id: "terrain-light",
                title: "Terrain Light",
              },
              source: {
                type: "XYZ",
                url: "//tiles.maps.eox.at/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg",
              },
              visible: true,
            },
            {
              type: "Tile",
              properties: {
                id: "NO2",
                title: "NO2",
              },
              source: {
                type: "TileWMS",
                url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
                params: {
                  LAYERS: "AWS_NO2-VISUALISATION",
                },
              },
            },
          ],
        },
        {
          id: "left_col",
          component: "Column",
          children: ["sidebar_card", "demo_card"],
          align: "stretch",
          justify: "start",
        },
        {
          id: "sidebar_card",
          component: "Card",
          child: "sidebar_card_content",
        },
        {
          id: "sidebar_card_content",
          component: "Column",
          children: ["title", "subtitle", "my_tabs"],
          align: "stretch",
          justify: "start",
        },
        {
          id: "title",
          component: "Text",
          text: "EOxElements A2UI Demo",
          variant: "h3",
        },
        {
          id: "subtitle",
          component: "Text",
          text: "A dynamic layout rendered from an [A2UI protocol](https://a2ui.org/) JSON.",
          variant: "body",
        },
        {
          id: "my_tabs",
          component: "Tabs",
          tabs: [
            {
              title: "Layers",
              child: "my_layercontrol",
            },
            {
              title: "Draw",
              child: "my_drawtools",
            },
          ],
        },
        {
          id: "demo_card",
          component: "Card",
          child: "demo_card_content",
        },
        {
          id: "demo_card_content",
          component: "Column",
          children: ["demo_card_title", "my_button"],
          align: "stretch",
          justify: "start",
        },
        {
          id: "demo_card_title",
          component: "Text",
          text: "Actions",
          variant: "h4",
        },
        {
          id: "my_layercontrol",
          component: "EOxLayercontrol",
        },
        {
          id: "my_drawtools",
          component: "EOxDrawtools",
        },
        {
          id: "my_button",
          component: "Button",
          child: "my_button_label",
          variant: "primary",
          action: {
            event: {
              name: "demo_button_clicked",
            },
          },
        },
        {
          id: "my_button_label",
          component: "Text",
          text: "Demo Button",
        },
      ],
    },
  },
];

/**
 * This demo renders an A2UI JSON stream as dynamic dashboard, allowing to dynamically generate UIs from LLM responses.
 * More information: [a2ui.org](https://a2ui.org/)
 *
 * JSON stream:
 *
 * ```json
 * [
 *   {
 *     "createSurface": {
 *       "surfaceId": "demo_surface",
 *       "catalogId": "https://eox-a.github.io/EOxElements/a2ui/0_9/combined_catalog.json",
 *       "sendDataModel": true
 *     }
 *   },
 *   {
 *     "updateComponents": {
 *       "surfaceId": "demo_surface",
 *       "components": [
 *         {
 *           "id": "root",
 *           "component": "Column",
 *           "children": ["workspace"],
 *           "align": "stretch",
 *           "justify": "start"
 *         },
 *         {
 *           "id": "workspace",
 *           "component": "Row",
 *           "children": ["my_map", "left_col"],
 *           "align": "stretch",
 *           "justify": "start"
 *         },
 *         {
 *           "id": "my_map",
 *           "component": "EOxMap",
 *           "zoom": 6,
 *           "center": [16.37, 48.21],
 *           "style": "width: 100dvw; height: 100dvh; position: absolute; left: 0; z-index: 0",
 *           "layers": [
 *             {
 *               "type": "Tile",
 *               "properties": {
 *                 "id": "terrain-light",
 *                 "title": "Terrain Light"
                  },
 *               "source": {
 *                 "type": "XYZ",
 *                 "url": "//tiles.maps.eox.at/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"
 *               },
 *               "visible": true
 *             },
 *             {
 *               "type": "Tile",
 *               "properties": {
 *                 "id": "NO2",
 *                 "title": "NO2"
 *               },
 *               "source": {
 *                 "type": "TileWMS",
 *                 "url": "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
 *                 "params": {
 *                   "LAYERS": "AWS_NO2-VISUALISATION"
 *                 }
 *               }
 *             }
 *           ]
 *         },
 *         {
 *           "id": "left_col",
 *           "component": "Column",
 *           "children": ["sidebar_card", "demo_card"],
 *           "align": "stretch",
 *           "justify": "start"
 *         },
 *         {
 *           "id": "sidebar_card",
 *           "component": "Card",
 *           "child": "sidebar_card_content"
 *         },
 *         {
 *           "id": "sidebar_card_content",
 *           "component": "Column",
 *           "children": ["title", "subtitle", "my_tabs"],
 *           "align": "stretch",
 *           "justify": "start"
 *         },
 *         {
 *           "id": "title",
 *           "component": "Text",
 *           "text": "EOxElements A2UI Demo",
 *           "variant": "h3"
 *         },
 *         {
 *           "id": "subtitle",
 *           "component": "Text",
 *           "text": "A dynamic layout rendered from an [A2UI protocol](https://a2ui.org/) JSON.",
 *           "variant": "body"
 *         },
 *         {
 *           "id": "my_tabs",
 *           "component": "Tabs",
 *           "tabs": [
 *             {
 *               "title": "Layers",
 *               "child": "my_layercontrol"
 *             },
 *             {
 *               "title": "Draw",
 *               "child": "my_drawtools"
 *             }
 *           ]
 *         },
 *         {
 *           "id": "demo_card",
 *           "component": "Card",
 *           "child": "demo_card_content"
 *         },
 *         {
 *           "id": "demo_card_content",
 *           "component": "Column",
 *           "children": ["demo_card_title", "my_button"],
 *           "align": "stretch",
 *           "justify": "start"
 *         },
 *         {
 *           "id": "demo_card_title",
 *           "component": "Text",
 *           "text": "Actions",
 *           "variant": "h4"
 *         },
 *         {
 *           "id": "my_layercontrol",
 *           "component": "EOxLayercontrol"
 *         },
 *         {
 *           "id": "my_drawtools",
 *           "component": "EOxDrawtools"
 *         },
 *         {
 *           "id": "my_button",
 *           "component": "Button",
 *           "child": "my_button_label",
 *           "variant": "primary",
 *           "action": {
 *             "event": {
 *               "name": "demo_button_clicked"
 *             }
 *           }
 *         },
 *         {
 *           "id": "my_button_label",
 *           "component": "Text",
 *           "text": "Demo Button"
 *         }
 *       ]
 *     }
 *   }
 * ]
 * ```
 */
export const A2uiShowcase = {
  component: "eox-a2ui-wrapper",
  args: {
    stream: demoStream,
  },
  render: () => html`
    <style>
      #root-inner > div {
        background: transparent !important;
        padding: 0 !important;
        width: 100dvw !important;
        height: 100dvh !important;
        position: fixed !important;
        overflow: hidden !important;
      }
    </style>
    <a2ui-streaming-demo></a2ui-streaming-demo>
  `,
};
