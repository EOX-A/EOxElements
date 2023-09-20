import { html } from "lit";
import "../map/main";
import "./src/main";

export default {
  title: "Elements/eox-layercontrol",
  tags: ["autodocs"],
  component: "eox-layercontrol",
  parameters: {
    componentSubtitle: "Manage and configure OpenLayers map layers",
    layout: "centered",
  },
  render: () => html`
<eox-map
  style="width: 400px; height: 300px; zoom="3"
  layers='[
    {
      "type": "Group",
      "properties": {
        "id": "group2",
        "title": "Data Layers"
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
></eox-map>
<eox-layercontrol for="eox-map" layerIdentifier="id"></eox-layercontrol>`,
};

export const Primary = {
  args: {},
};
