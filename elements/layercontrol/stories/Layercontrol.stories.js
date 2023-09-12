import "../../map/main";
import "../src/main"
// import { html } from 'lit';
import { configureDocsPage } from '../../../.storybook/docsPageConfig';

export default {
  title: 'Elements/eox-layercontrol',
  tags: ['autodocs'],
  component: 'eox-layercontrol',
  parameters: {
    docs: {
      page: configureDocsPage('EOxLayercontrol'),
    },
    options: { selectedPanel: 'addon-controls' },
  },
  render: (args) => `<eox-map style="width: 400px; height: 300px; zoom="3"
  center="[1000000, 6000000]"
  layers='[
  {
    "type": "Vector",
    "title": "Drawn Points",
    "properties": {
      "id": "drawLayer"
    },
    "source": {
      "type": "Vector"
    },
    "style": {
      "circle-radius": "10",
      "circle-fill-color": "red",
      "circle-stroke-color": "black",
      "circle-stroke-width": "2",
      "stroke-color": "black",
      "stroke-width": "5",
      "fill-color": "red"
    }
  },
  {
    "type": "Group",
    "id": "group2",
    "title": "Data Layers",
    "layers": [
      {
        "type": "Tile",
        "id": "WIND",
        "title": "WIND",
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
        "id": "NO2",
        "title": "NO2",
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
        "background": "#1a2b39",
        "title": "Regions",
        "properties": {
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
    "id": "group1",
    "title": "Background Layers",
    "layers": [
      {
        "type": "WebGLTile",
        "id": "s2",
        "layerControlExclusive": true,
        "title": "s2",
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
        "id": "osm",
        "title": "Open Street Map",
        "layerControlExclusive": true,
        "visible": false,
        "title": "osm",
        "opacity": 0.5,
        "source": {
          "type": "OSM"
        }
      }
    ]
  }
]'></eox-map><eox-layercontrol for="eox-map" layerIdentifier="id">
Basic layer control
</eox-layercontrol>`
}

export const Primary = {
  args: {}
}