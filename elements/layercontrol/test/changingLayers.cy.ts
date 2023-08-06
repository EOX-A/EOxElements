import "../../map/main";
import "../src/main"
import mapIntegrationJson from "./mapIntegration.json";
import { Map } from "ol";

describe("Layer Control", () => {
  beforeEach(() => {
    // @ts-ignore
    cy.mount(`<eox-map
    zoom="3"
    center="[1000000, 6000000]"
    layers='[
    {
      "type": "WebGLTile",
      "id":"s2",
      "layerControlOptional": true,
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
        "id": "WIND",
        "layerControlOptional": true,
        "visible": false,
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
        "layerControlOptional": true,
        "visible": false,
        "source": {
          "type": "TileWMS",
          "url": "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
          "params": {
            "LAYERS": "AWS_NO2-VISUALISATION"
          }
        }
      },
      {
        "type": "Tile",
        "id": "osm",
        "opacity": 0.5,
        "source": {
          "type": "OSM"
        }
      }
    ]'
  ></eox-map>`).as(
      "eox-map"
    )
  //@ts-ignore
  cy.mount(` <eox-layercontrol
  for="eox-map"
  layerTitle="mapbox-source"
  layerIdentifier="id"
></eox-layercontrol>`).as(
  'eox-layercontrol'
)
  });

  it("loads the layercontrol", () => {
    let eoxMap: EOxMap;
    let olMap: Map;
    cy.get("eox-map").should(($el) => {
      eoxMap = <EOxMap>$el[0];
      // @ts-ignore
      olMap = eoxMap.map;
      const applyLayers = () => {
        eoxMap.setLayers(mapIntegrationJson);
        olMap
          .getLayers()
          .getArray()
          .forEach((layer, index) => {
            layer.set("name", "Layer " + index);
            layer.set("id", "layer" + index);
          });
      };
      applyLayers();
      const layers = olMap.getLayers();

      setTimeout(() => {
        eoxMap.setLayers(layers.removeAt(layers.getArray().length - 1));
      }, 2000);
      setTimeout(() => {
        eoxMap.setLayers(layers.removeAt(layers.getArray().length - 1));
      }, 4000);
      setTimeout(() => {
        eoxMap.setLayers(layers.removeAt(layers.getArray().length - 1));
      }, 6000);
      setTimeout(() => {
        applyLayers();
      }, 8000);
    });
  });
});
