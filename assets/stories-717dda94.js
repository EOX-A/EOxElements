import{x as e}from"./lit-element-c29cbb6b.js";import"./main-ea9f3606.js";import"./query-assigned-elements-bec7f9a4.js";import"./templateElement-8d2f8dc8.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-c395b1c2.js";import"../sb-preview/runtime.js";const x={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map"},c={args:{zoom:7},render:o=>e`
      <eox-map
        style="width: 400px; height: 300px;"
        zoom="${o.zoom}"
        center="[15, 48]"
        layers='[{"type":"Tile","source":{"type":"OSM"}}]'
      ></eox-map>
    `},l={render:()=>e`
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
    `};export{l as ABCompare,c as Primary,x as default};
//# sourceMappingURL=stories-717dda94.js.map
