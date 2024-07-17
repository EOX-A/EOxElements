// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";

export default {
  title: "Elements/eox-map",
  tags: ["autodocs"],
  component: "eox-map",
  render: (args) => html`
    <eox-map
      style="width: 100%; height: 300px;"
      .center=${args.center}
      .controls=${args.controls}
      .layers=${args.layers}
      .zoom=${args.zoom}
    ></eox-map>
  `,
};

export const Primary = {
  args: {
    center: [15, 48],
    layers: [{ type: "Tile", source: { type: "OSM" } }],
    zoom: 7,
  },
};

export const VectorLayer = {
  args: {
    layers: [
      {
        type: "Vector",
        background: "#1366dd",
        properties: {
          id: "regions",
        },
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
          attributions: "Regions: @ openlayers.org",
        },
        style: {
          "stroke-color": "#232323",
          "stroke-width": 1,
          "fill-color": ["string", ["get", "COLOR"], "#eee"],
        },
      },
    ],
  },
};

export const VectorTileLayer = {
  args: {
    layers: [
      {
        type: "VectorTile",
        background: "#1a2b39",
        declutter: true,
        properties: {
          id: "countries",
        },
        source: {
          type: "VectorTile",
          url: "https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",
          format: "MVT",
          tileGrid: {},
        },
        style: {
          "fill-color": "yellow",
          "stroke-color": "#232323",
          "stroke-width": 1,
        },
      },
    ],
  },
};

export const WMSLayer = {
  args: {
    center: [-10997148, 4569099],
    layers: [
      {
        type: "Tile",
        properties: {
          id: "customId",
        },
        source: {
          type: "TileWMS",
          url: "https://ahocevar.com/geoserver/wms",
          params: { LAYERS: "topp:states", TILED: true },
          ratio: 1,
          serverType: "geoserver",
        },
      },
    ],
    zoom: 3,
  },
};

/**
 * A source with type `WMTSCapabilities` automatically fetches the provided capabilities url
 * and renders the specified layer.
 */
export const WMTSCapabilitiesLayer = {
  args: {
    center: [20, 40],
    layers: [
      {
        type: "Tile",
        properties: {
          id: "customId",
        },
        source: {
          type: "WMTSCapabilities",
          url: "https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",
          layer: "s2cloudless-2017",
        },
      },
    ],
    zoom: 5,
  },
};

/**
 * `WMTS` data can also be accessed directly without the need of fetching the capabilities.
 * A TileGrid can be defined via the `tileGrid`-property of the Source
 */
export const WMTSTileGrid = {
  args: {
    center: [20, 40],
    layers: [
      {
        type: "Tile",
        properties: {
          id: "customId",
        },
        source: {
          type: "WMTS",
          url: "https://tiles.maps.eox.at/wmts",
          layer: "s2cloudless-2017_3857",
          style: "default",
          matrixSet: "GoogleMapsCompatible",
          tileGrid: {
            tileSize: [128, 128],
          },
        },
      },
    ],
    zoom: 5,
  },
};

export const STACLayer = {
  args: {
    center: [-122.38, 46.1],
    layers: [
      {
        type: "STAC",
        properties: {
          id: "stacLayer",
        },
        url: "https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json",
      },
      {
        type: "Tile",
        properties: {
          id: "customId",
        },
        source: {
          type: "OSM",
        },
      },
    ],
    zoom: 7,
  },
};

export const GeoTIFFLayer = {
  args: {
    center: [5, 16.3],
    layers: [
      {
        type: "WebGLTile",
        properties: {
          id: "geotiffLayer",
        },
        source: {
          type: "GeoTIFF",
          sources: [
            {
              url: "https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif",
            },
          ],
        },
      },
      {
        type: "Tile",
        properties: {
          id: "customId",
        },
        source: {
          type: "OSM",
        },
      },
    ],
    zoom: 8,
  },
};

export const GroupLayer = {
  args: {
    layers: [
      {
        type: "Group",
        properties: {
          id: "group",
        },
        layers: [
          {
            type: "Vector",
            properties: {
              id: "regions",
            },
            source: {
              type: "Vector",
              url: "https://openlayers.org/data/vector/ecoregions.json",
              format: "GeoJSON",
            },
          },
          {
            type: "Group",
            properties: {
              id: "groupLayerInsideGroup",
            },
            layers: [
              {
                type: "Tile",
                properties: {
                  id: "layerInsideGroupInsideGroup",
                },
                source: {
                  type: "OSM",
                },
              },
            ],
          },
        ],
      },
    ],
  },
};

export const Controls = {
  args: {
    controls: {
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
    },
    layers: [
      {
        type: "Tile",
        properties: {
          id: "customId",
        },
        source: {
          type: "OSM",
        },
      },
    ],
  },
};

export const Geolocation = {
  args: {
    zoom: 7,
    controls: {
      Geolocation: {
        tracking: true,
        trackHeading: true,
        centerWhenReady: false,
        highAccuracy: true,
        trackAccuracy: true,
        style: {
          "circle-radius": 10,
          "circle-fill-color": "red",
          "circle-stroke-color": "white",
          "circle-stroke-width": 2,
        },
        buttonIcon:
          "https://upload.wikimedia.org/wikipedia/commons/7/74/Location_icon_from_Noun_Project.png",
      },
      Zoom: {},
    },
    layers: [
      {
        type: "Tile",
        properties: {
          id: "customId",
        },
        source: {
          type: "OSM",
        },
      },
    ],
  },
};

export const HoverSelect = {
  args: {
    layers: [
      {
        type: "Vector",
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
        },
        interactions: [
          {
            type: "select",
            options: {
              id: "selectInteraction",
              condition: "pointermove",
              layer: {
                type: "Vector",
                properties: {
                  id: "selectLayer",
                },
                source: {
                  type: "Vector",
                },
                style: {
                  "stroke-color": "red",
                  "stroke-width": 3,
                },
              },
            },
          },
        ],
      },
    ],
  },
};

export const ClickSelect = {
  args: {
    layers: [
      {
        type: "Vector",
        background: "#1366dd",
        properties: {
          id: "regions",
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
          "fill-color": "red",
        },
        interactions: [
          {
            type: "select",
            options: {
              id: "selectInteraction",
              condition: "click",
              style: {
                "stroke-color": "white",
                "stroke-width": 3,
              },
            },
          },
        ],
      },
    ],
  },
};

/**
 * `eox-map` offers a built-in tooltip, which needs to be placed inside the default slot:
 * ```
 * <eox-map [...]>
 *   <eox-map-tooltip></eox-map-tooltip>
 * </eox-map>
 * ```
 * This renders a list of all feature properties of the currently selected feature.
 * Note that if multiple interactions are registered (e.g. `pointermove` and `singleclick`),
 * the `pointermove` interaction will have higher priority for the tooltip.
 */
export const Tooltip = {
  args: {
    layers: [
      {
        type: "Vector",
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
        },
        interactions: [
          {
            type: "select",
            options: {
              id: "selectInteraction",
              condition: "pointermove",
              style: {
                "stroke-color": "red",
                "stroke-width": 3,
              },
            },
          },
        ],
      },
    ],
    center: [15, 48],
    zoom: 4,
  },
  render: (args) => html`
    <eox-map
      id="tooltipTest"
      style="width: 100%; height: 300px;"
      .center=${args.center}
      .controls=${args.controls}
      .layers=${args.layers}
      .zoom=${args.zoom}
    >
      <eox-map-tooltip></eox-map-tooltip>
    </eox-map>
  `,
};

/**
 * The rendering of feature properties inside the tooltip can be transformed
 * by passing a `propertyTransform` function to the tooltip element which applies to each property in the rendering loop:
 * ```
 * <eox-map [...]>
 *   <eox-map-tooltip
 *     .propertyTransform=${({key, value}, feature) => key.includes("COLOR") ? { key: key.toLowerCase(), value }}
 *   ></eox-map-tooltip>
 * </eox-map>
 * ```
 *
 * The first argument are `key` and `value` of the current feature property; this object needs to be
 * returned in order to render the property in the list.
 * Additionally, the entire feature is passed as a second argument, for cases of more advanced property
 * transformation in which needs access to the entire feature.
 */
export const TooltipWithPropertyTransform = {
  args: {
    layers: [
      {
        type: "Vector",
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
        },
        interactions: [
          {
            type: "select",
            options: {
              id: "selectInteraction",
              condition: "pointermove",
              style: {
                "stroke-color": "red",
                "stroke-width": 3,
              },
            },
          },
        ],
      },
    ],
    center: [15, 48],
    zoom: 4,
  },
  render: (args) => html`
    <eox-map
      id="tooltipTest"
      style="width: 100%; height: 300px;"
      .center=${args.center}
      .controls=${args.controls}
      .layers=${args.layers}
      .zoom=${args.zoom}
    >
      <eox-map-tooltip
        .propertyTransform=${({ key, value }, hoverFeature) => {
          console.log(hoverFeature);
          if (key.includes("COLOR")) {
            return { key: key.toLowerCase(), value };
          }
        }}
      ></eox-map-tooltip>
    </eox-map>
  `,
};

export const MapSync = {
  args: {
    layers: [
      {
        type: "Tile",
        properties: {
          id: "osm",
          title: "Background",
        },
        source: { type: "OSM" },
      },
    ],
  },
  render: (args) => html`
    <style>
      eox-map-compare,
      eox-map {
        width: 50%;
        height: 300px;
      }
      .container {
        display: flex;
      }
    </style>
    <div class="container">
      <eox-map id="a" .layers=${args.layers}> </eox-map>
      <eox-map id="b" sync="#a" .layers=${args.layers}></eox-map>
    </div>
  `,
};

export const ABCompare = {
  args: {
    layersA: [{ type: "Tile", source: { type: "OSM" } }],
    layersB: [
      {
        type: "Tile",
        source: {
          type: "TileWMS",
          url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
          params: {
            LAYERS: "AWS_VIS_WIND_V_10M",
          },
        },
      },
    ],
  },
  render: (args) => html`
    <style>
      eox-map-compare,
      eox-map {
        width: 100%;
        height: 300px;
      }
    </style>
    <eox-map-compare>
      <eox-map slot="first" id="compareA" .layers=${args.layersA}></eox-map>
      <eox-map
        slot="second"
        sync="eox-map#compareA"
        .layers=${args.layersB}
      ></eox-map>
    </eox-map-compare>
    <button
      @click=${() => {
        const compareContainer = document.querySelector("eox-map-compare");
        compareContainer.disabled = !compareContainer.disabled;
      }}
    >
      toggle
    </button>
  `,
};

export const ConfigObject = {
  args: {
    config: {
      controls: {
        Zoom: {},
      },
      layers: [{ type: "Tile", source: { type: "OSM" } }],
      view: {
        center: [16.8, 48.2],
        zoom: 9,
      },
    },
  },
  render: (args) => html`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${args.config}
    ></eox-map>
  `,
};

/**
 * The projection of the view can be changed via the `projection`-attribute.
 * Out-of-the-box the projections EPSG:3857 (default) and EPSG:4326 (geographic coordinates)
 * are included, additional projections can be used by registering them via the `registerProjection` or
 * `registerProjectionFromCode` helper functions beforehand.
 */
export const Projection = {
  args: {
    layers: [
      {
        type: "Vector",
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
        },
      },
      {
        type: "Tile",
        properties: {
          id: "osm",
          title: "Background",
        },
        source: { type: "OSM" },
      },
    ],
    center: [16.8, 48.2],
    zoom: 7,
  },
  render: (args) => html`
    <eox-map
      id="projectionMap"
      style="width: 100%; height: 300px;"
      .center=${args.center}
      .controls=${args.controls}
      .layers=${args.layers}
      .zoom=${args.zoom}
    >
    </eox-map>
    <button
      @click=${() => {
        const eoxMap = document.querySelector("#projectionMap");
        eoxMap.setAttribute(
          "projection",
          eoxMap.map.getView().getProjection().getCode() === "EPSG:4326"
            ? "EPSG:3857"
            : "EPSG:4326"
        );
      }}
    >
      change projection
    </button>
  `,
};

/**
 * changing the properties `zoom`, `center` or `zoomExtent` will trigger animations, if the
 * `animationOptions`-property is set.
 * animation options for `zoom` or `center`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~AnimationOptions
 * animation options for `zoomExtent`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions
 */
export const Animations = {
  args: {
    layers: [
      {
        type: "Tile",
        properties: {
          id: "osm",
          title: "Background",
        },
        source: { type: "OSM" },
      },
    ],
    animationOptions: {
      duration: 500,
    },
    center: [16.8, 48.2],
    zoom: 7,
  },
  render: (args) => html`
    <eox-map
      id="animationMap"
      style="width: 100%; height: 300px;"
      .center=${args.center}
      .layers=${args.layers}
      .zoom=${args.zoom}
      .animationOptions=${args.animationOptions}
    >
    </eox-map>
    <button
      @click=${() => {
        const eoxMap = document.querySelector("#animationMap");
        eoxMap.zoom = eoxMap.zoom + 1;
      }}
    >
      zoom in animation
    </button>
    <button
      @click=${() => {
        const eoxMap = document.querySelector("#animationMap");
        eoxMap.zoom = eoxMap.zoom - 1;
      }}
    >
      zoom out animation
    </button>
  `,
};

/**
 * By setting the `prevent-scroll` attribute or by setting `preventScroll` property to `true` (either on the element or within the config object),
 * the map doesnt mouse-scroll (on desktop) or drag-touch (on tab/mobile). Pressing the platform modifier key (ctrl/cmd) will enable scrolling.
 * Useful for maps embedded in scrollable websites.
 */
export const PreventScroll = {
  args: {
    config: {
      controls: {
        Zoom: {},
      },
      layers: [{ type: "Tile", source: { type: "OSM" } }],
      view: {
        center: [16.8, 48.2],
        zoom: 9,
      },
      preventScroll: true,
    },
  },
  render: (args) => html`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${args.config}
    ></eox-map>
  `,
};
