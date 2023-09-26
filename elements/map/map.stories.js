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
        style="width: 400px; height: 300px;"
        zoom="${args.zoom}"
        center="[15, 48]"
        layers='[{"type":"Tile","source":{"type":"OSM"}}]'
      ></eox-map>
    `,
};

export const ABCompare = {
  render: () =>
    html`
      <style>
        eox-map-compare,
        eox-map {
          width: 400px;
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
