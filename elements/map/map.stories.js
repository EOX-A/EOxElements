import { html } from "lit";
import "./main";

export default {
  title: "Elements/eox-map",
  tags: ["autodocs"],
  component: "eox-map",
};

export const Primary = {
  args: {
    zoom: 7,
  },
  render: (args) =>
    html`
      <eox-map
        style="width: 100%; height: 300px;"
        zoom="${args.zoom}"
        center="[15, 48]"
        layers='[{"type":"Tile","source":{"type":"OSM"}}]'
      ></eox-map>
    `,
};

export const VectorLayer = {
  render: () =>
    html` <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        layers='[
          {
            "type": "Vector",
            "background": "#1366dd",
            "properties": {
              "id": "regions"
            },
            "source": {
              "type": "Vector",
              "url": "https://openlayers.org/data/vector/ecoregions.json",
              "format": "GeoJSON",
              "attributions": "Regions: @ openlayers.org"
            },
            "style": {
              "stroke-color": "#232323",
              "stroke-width": 1,
              "fill-color": ["string", ["get", "COLOR"], "#eee"]
            }
          }
        ]'
      ></eox-map>`,
};

export const VectorTileLayer = {
  render: () =>
    html` <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        layers='[
          {
            "type": "VectorTile",
            "background": "#1a2b39",
            "declutter": true,
            "properties": {
              "id": "countries"
            },
            "source": {
              "type": "VectorTile",
              "url": "https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",
              "format": "MVT",
              "tileGrid": {}
            },
            "style": {
              "fill-color": "yellow",
              "stroke-color": "#232323",
              "stroke-width": 1
            }
          }
        ]'
      ></eox-map>`,
};

export const WMSLayer = {
  render: () =>
    html` <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        center="[-10997148, 4569099]"
        zoom="3"
        layers='[
          {
            "type": "Tile",
            "properties": {
              "id": "customId"
            },
            "source": {
              "type": "TileWMS",
              "url": "https://ahocevar.com/geoserver/wms",
              "params": { "LAYERS": "topp:states", "TILED": true},
              "ratio": 1,
              "serverType": "geoserver"
            }
          }
        ]
        '
      ></eox-map>`,
};

export const STACLayer = {
  render: () =>
    html` <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        zoom="6"
        center="[-122.38, 46.10]"
        layers='[
          {
            "type": "STAC",
            "properties": {
              "id": "stacLayer"
            },
            "url": "https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"
          },
          {
            "type": "Tile",
            "properties": {
              "id": "customId"
            },
            "source": {
              "type": "OSM"
            }
          }
        ]'
      ></eox-map>`,
};

export const GroupLayer = {
  render: () =>
    html` <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        layers='[
          {
            "type": "Group",
            "properties": {
              "id": "group"
            },
            "layers": [
              {
                "type": "Vector",
                "properties": {
                  "id": "regions"
                },
                "source": {
                  "type": "Vector",
                  "url": "https://openlayers.org/data/vector/ecoregions.json",
                  "format": "GeoJSON"
                }
              },
              {
                "type": "Group",
                "properties": {
                  "id": "groupLayerInsideGroup"
                },
                "layers": [
                  {
                    "type": "Tile",
                    "properties": {
                      "id": "layerInsideGroupInsideGroup"
                    },
                    "source": {
                      "type": "OSM"
                    }
                  }
                ]
              }
            ]
          }
        ]'
      ></eox-map>`,
};

export const Controls = {
  render: () =>
    html`
      <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        controls='{
        "Zoom": {},
        "Attribution": {},
        "FullScreen": {},
        "OverviewMap": {
          "layers":   [
            {
              "type": "Tile",
              "properties": {
                "id": "overviewMap"
              },
              "source": {
                "type": "OSM"
              }
            }
          ]
        }
      }'
        layers='[
        {
          "type": "Tile",
          "properties": {
            "id": "customId"
          },
          "source": {
            "type": "OSM"
          }
        }
      ]'
      ></eox-map>
    `,
};

export const Hover = {
  render: () => html` <style>
      eox-map {
        width: 100%;
        height: 300px;
      }
    </style>
    <eox-map
      layers='[
        {
          "type": "Vector",
          "id": "regions",
          "source": {
            "type": "Vector",
            "url": "https://openlayers.org/data/vector/ecoregions.json",
            "format": "GeoJSON"
          },
          "interactions": [
            {
              "type": "select",
              "options": {
                "id": "selectInteraction",
                "condition": "pointermove",
                "layer": {
                  "type": "Vector",
                  "properties": {
                    "id": "selectLayer"
                  },
                  "source": {
                    "type": "Vector"
                  },
                  "style": {
                    "stroke-color": "red",
                    "stroke-width": 3
                  }
                }
              }
            }
          ]
        }
      ]'
    >
      <eox-map-tooltip></eox-map-tooltip>
    </eox-map>`,
};

export const Select = {
  render: () => html`
    <style>
      eox-map {
        width: 100%;
        height: 300px;
      }
    </style>
    <eox-map
      layers='[
          {
            "type": "Vector",
            "background": "#1366dd",
            "properties": {
              "id": "regions"
            },
            "source": {
              "type": "Vector",
              "url": "https://openlayers.org/data/vector/ecoregions.json",
              "format": "GeoJSON",
              "attributions": "Regions: @ openlayers.org"
            },
            "style": {
              "stroke-color": "black",
              "stroke-width": 1,
              "fill-color": "red"
            },
            "interactions": [{
              "type": "select",
              "options": {
                "id": "selectInteraction",
                "condition": "click",
                "style": {
                  "stroke-color": "white",
                  "stroke-width": 3
                }
              }
            }]
          }
        ]'
    ></eox-map>
    <div id="ecoName"></div>
  `,
};

export const MapSync = {
  render: () =>
    html`
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
        <eox-map
          id="a"
          layers='[{
              "type": "Tile",
              "properties": {
                "id": "osm",
                "title": "Background"
              },
              "source": { "type": "OSM" }
            }]'
        >
        </eox-map>
        <eox-map
          id="b"
          sync="#a"
          layers='[{
              "type": "Tile",
              "properties": {
                "id": "osm",
                "title": "Background"
              },
              "source": { "type": "OSM" }
          }]'
          controls='{
          "Attribution": {}
        }'
        ></eox-map>
      </div>
    `,
};

export const ABCompare = {
  render: () =>
    html`
      <style>
        eox-map-compare,
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map-compare>
        <eox-map
          slot="first"
          id="a"
          layers='[{"type":"Tile","source":{"type":"OSM"}}]'
        ></eox-map>
        <eox-map
          slot="second"
          sync="eox-map#a"
          layers='[
      {
        "type": "Tile",
        "source": {
          "type": "TileWMS",
          "url": "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
          "params": {
            "LAYERS": "AWS_VIS_WIND_V_10M"
          }
        }
      }
    ]'
        ></eox-map>
      </eox-map-compare>
    `,
};
