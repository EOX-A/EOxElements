import { html } from "lit";
import "../map/main";
import "./src/main";

const map = html` <eox-map
  style="width: 400px; height: 300px; margin-left: 7px;"
  zoom="3"
  layers='[
  {
    "type": "Group",
    "properties": {
      "id": "group2",
      "title": "Data Layers",
      "layerControlExpand": true,
      "description": "# Hello world"
    },
    "layers": [
      {
        "type": "Tile",
        "properties": {
          "id": "WIND",
          "title": "WIND"
        },
        "source": {
          "type": "TileWMS",
          "url": "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
          "params": {
            "LAYERS": "AWS_VIS_WIND_V_10M"
          }
        }
      },
      {
        "type": "Tile",
        "properties": {
          "id": "NO2",
          "title": "NO2"
        },
        "source": {
          "type": "TileWMS",
          "url": "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
          "params": {
            "LAYERS": "AWS_NO2-VISUALISATION"
          }
        }
      },
      {
        "type": "Vector",
        "properties": {
          "title": "Regions",
          "id": "regions"

        },
        "source": {
          "type": "Vector",
          "url": "https://openlayers.org/data/vector/ecoregions.json",
          "format": "GeoJSON",
          "attributions": "Regions: @ openlayers.org"
        }
      }
    ]
  },
  {
    "type": "Group",
    "properties": {
      "id": "group1",
      "title": "Background Layers"
    },
    "layers": [
      {
        "type": "WebGLTile",
        "properties": {
          "id": "s2",
          "layerControlExclusive": true,
          "title": "s2"
        },
        "style": {
          "variables": {
            "red": 1,
            "green": 2,
            "blue": 3,
            "redMax": 3000,
            "greenMax": 3000,
            "blueMax": 3000
          },
          "color": [
            "array",
            ["/", ["band", ["var", "red"]], ["var", "redMax"]],
            ["/", ["band", ["var", "green"]], ["var", "greenMax"]],
            ["/", ["band", ["var", "blue"]], ["var", "blueMax"]],
            1
          ],
          "gamma": 1.1
        },
        "source": {
          "type": "GeoTIFF",
          "normalize": false,
          "sources": [
            {
              "url": "https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif"
            }
          ]
        }
      },
      {
        "type": "Tile",
        "properties": {
          "id": "osm",
          "title": "Open Street Map",
          "layerControlExclusive": true
        },
        "visible": false,
        "opacity": 0.5,
        "source": {
          "type": "OSM"
        }
      }
    ]
  }
]'
></eox-map>`;

export default {
  title: "Elements/eox-layercontrol",
  tags: ["autodocs"],
  component: "eox-layercontrol",
  parameters: {
    componentSubtitle: "Manage and configure OpenLayers map layers",
    layout: "centered",
  },
};

/**
 * Basic layercontrol setup.
 */
export const Primary = {
  args: {
    idProperty: "id",
    titleProperty: "title",
    unstyled: false,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${args.idProperty}
        .titleProperty=${args.titleProperty}
        .unstyled=${args.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      ${map}
    </div>
  `,
};

/**
 * By adding the `layerControlExclusive` property to map layers,
 * only one of them at a time can be visualized.
 */
export const ExclusiveLayers = {
  args: {},
  render: () => html`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#exclusive"></eox-layercontrol>
      <eox-map
        id="exclusive"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([
          {
            type: "Tile",
            properties: {
              title: "Terrain Light",
              layerControlExclusive: true,
            },
            source: {
              type: "XYZ",
              url: "//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg",
            },
          },
          {
            type: "Tile",
            properties: {
              title: "EOxCloudless",
              layerControlExclusive: true,
            },
            source: {
              type: "XYZ",
              url: "//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg",
            },
            visible: false,
          },
        ])}
      >
      </eox-map>
    </div>
  `,
};

/**
 * By adding the `layerControlOptional` property to map layers,
 * they are not initially rendered in the layer list, but in a
 * selection interface. They can be added to the layer list manually.
 * Removing a layer puts it back into the optional list.
 */
export const OptionalLayers = {
  args: {},
  render: () => html`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#optional"></eox-layercontrol>
      <eox-map
        id="optional"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([
          {
            type: "Tile",
            properties: {
              title: "EOxCloudless 2021",
              layerControlOptional: true,
            },
            source: {
              type: "XYZ",
              url: "//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg",
            },
            visible: false,
          },
          {
            type: "Tile",
            properties: {
              title: "EOxCloudless 2020",
              layerControlOptional: true,
            },
            source: {
              type: "XYZ",
              url: "//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg",
            },
            visible: false,
          },
          {
            type: "Tile",
            properties: {
              title: "EOxCloudless 2019",
              layerControlOptional: true,
            },
            source: {
              type: "XYZ",
              url: "//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2019_3857/default/g/{z}/{y}/{x}.jpg",
            },
            visible: false,
          },
          {
            type: "Tile",
            properties: {
              title: "Terrain Light",
            },
            source: {
              type: "XYZ",
              url: "//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg",
            },
          },
        ])}
      >
      </eox-map>
    </div>
  `,
};

/**
 * By adding the `layerControlExpand` property to map layers,
 * they render in the layer control as opened.
 */
export const ExpandedLayers = {
  args: {},
  render: () => html`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#expanded"></eox-layercontrol>
      <eox-map
        id="expanded"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([
          {
            type: "Tile",
            properties: {
              title: "Terrain Light",
            },
            source: {
              type: "XYZ",
              url: "//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg",
            },
          },
          {
            type: "Group",
            properties: {
              title: "Layer group",
              layerControlExpand: true,
            },
            layers: [
              {
                type: "Tile",
                properties: {
                  title: "EOxCloudless",
                },
                source: {
                  type: "XYZ",
                  url: "//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg",
                },
                visible: false,
              },
            ],
          },
        ])}
      >
      </eox-map>
    </div>
  `,
};

/**
 * The layer control accepts a "tools" array, which enable
 * extra functionalities for layers
 */
export const Tools = {
  args: {},
  render: () => html`
    <p>Default tools: info, opacity, remove, sort</p>
    <eox-layercontrol for="eox-map#tools"></eox-layercontrol>
    <hr />
    <p>Only one tool: info</p>
    <eox-layercontrol .tools=${["info"]} for="eox-map#tools"></eox-layercontrol>
    <hr />
    <p>Only one tool: sort</p>
    <eox-layercontrol .tools=${["sort"]} for="eox-map#tools"></eox-layercontrol>
    <hr />
    <p>No tools</p>
    <eox-layercontrol .tools=${[]} for="eox-map#tools"></eox-layercontrol>
    <eox-map
      id="tools"
      style="width: 400px; height: 300px; margin-left: 7px;"
      layers=${JSON.stringify([
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
        {
          type: "Tile",
          properties: {
            title: "Terrain Light",
          },
          source: {
            type: "XYZ",
            url: "//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg",
          },
        },
      ])}
    >
    </eox-map>
  `,
};

/**
 * By adding the `layerControlHide` property to map layers,
 * they aren't displayed in the layer control at all (but may
 * be still rendered on the map).
 */
export const HiddenLayers = {
  args: {},
  render: () => html`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#hidden"></eox-layercontrol>
      <eox-map
        id="hidden"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([
          {
            type: "Vector",
            properties: {
              title: "Regions",
              id: "regions",
              layerControlHide: true,
            },
            source: {
              type: "Vector",
              url: "https://openlayers.org/data/vector/ecoregions.json",
              format: "GeoJSON",
              attributions: "Regions: @ openlayers.org",
            },
          },
          {
            type: "Tile",
            properties: {
              title: "Terrain Light",
            },
            source: {
              type: "XYZ",
              url: "//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg",
            },
          },
        ])}
      >
      </eox-map>
    </div>
  `,
};

export const SingleLayer = {
  args: {
    idProperty: "id",
    titleProperty: "title",
    unstyled: false,
    noShadow: false,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol-layer
        .noShadow=${args.noShadow}
        .idProperty=${args.idProperty}
        .titleProperty=${args.titleProperty}
        .unstyled=${args.unstyled}
      ></eox-layercontrol-layer>
      <eox-map
        id="single"
        style="width: 400px; height: 300px;"
        layers='[
          {
            "type": "Tile",
            "properties": {
              "id": "osm",
              "title": "Open Street Map"
            },
            "visible": true,
            "opacity": 0.5,
            "source": {
              "type": "OSM"
            }
          }
        ]'
      ></eox-map>
    </div>
    <script>
      const olMap = document.querySelector("eox-map#single").map;
      olMap.on("loadend", () => {
        const firstLayer = olMap.getLayers().getArray()[0];
        document.querySelector("eox-layercontrol-layer").layer = firstLayer;
        document.querySelector("eox-layercontrol-layer").olMap = olMap;
      });
    </script>
  `,
};

export const LayerList = {
  args: { unstyled: false, noShadow: false },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol-layer-list
        .noShadow=${args.noShadow}
        .unstyled=${args.unstyled}
      ></eox-layercontrol-layer-list>
      <eox-map
        id="list"
        style="width: 400px; height: 300px;"
        layers='[
          {
            "type": "Tile",
            "opacity": 0.5,
            "visible": false,
            "properties": {
              "id": "wind",
              "title": "WIND"
            },
            "source": {
              "type": "TileWMS",
              "url": "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
              "params": {
                "LAYERS": "AWS_VIS_WIND_V_10M"
              }
            }
          },
          {
            "type": "Tile",
            "properties": {
              "id": "osm",
              "title": "Open Street Map"
            },
            "visible": true,
            "source": {
              "type": "OSM"
            }
          },
          {
            "type": "Tile",
            "properties": {
              "id": "osm2",
              "title": "Another OSM"
            },
            "visible": true,
            "source": {
              "type": "OSM"
            }
          }
        ]'
      ></eox-map>
    </div>
    <script>
      const olMapList = document.querySelector("eox-map#list").map;
      olMapList.once("loadend", () => {
        const layerCollection = olMapList.getLayers();
        document.querySelector("eox-layercontrol-layer-list").layers =
          layerCollection;
        document.querySelector("eox-layercontrol-layer-list").olMapList =
          olMapList;
      });
    </script>
  `,
};

/**
 * Layer control tabs
 */
export const Tabs = {
  render: () => html`
    <eox-layercontrol-tabs
      .noShadow=${false}
      .actions=${["delete"]}
      .tabs=${["info", "opacity", "config"]}
    ></eox-layercontrol-tabs>
  `,
};

/**
 * Zoom layer state based on `minZoom` and `maxZoom`.
 * The color change state only visible when `showLayerZoomState` is set inside layer properties.
 */
export const LayerZoomState = {
  args: {
    showLayerZoomState: true,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol
        .showLayerZoomState=${args.showLayerZoomState}
        for="eox-map#zoomstate"
      ></eox-layercontrol>
      <eox-map
        id="zoomstate"
        style="width: 600px; height: 300px; margin-left: 7px;"
        zoom="1"
        layers=${JSON.stringify([
          {
            type: "Vector",
            properties: {
              title: "Regions",
              id: "regions",
            },
            source: {
              type: "Vector",
              url: "https://openlayers.org/data/vector/ecoregions.json",
              format: "GeoJSON",
              attributions: "Regions: @ openlayers.org",
            },
            minZoom: 2,
          },
          {
            type: "Tile",
            properties: {
              id: "WIND",
              title: "WIND",
            },
            source: {
              type: "TileWMS",
              url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
              params: {
                LAYERS: "AWS_VIS_WIND_V_10M",
              },
            },
            maxZoom: 9,
          },
        ])}
      >
      </eox-map>
    </div>
  `,
};

/**
 * Unstyled version of the Element
 */
export const Unstyled = {
  args: {
    unstyled: true,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol
        .unstyled=${args.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      ${map}
    </div>
  `,
};
