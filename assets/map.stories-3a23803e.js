import{x as m}from"./lit-element-c29cbb6b.js";import"./main-5b16485c.js";import"./query-assigned-elements-bec7f9a4.js";import"./templateElement-8d2f8dc8.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-529228f3.js";import"../sb-preview/runtime.js";const S={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map"},e={args:{zoom:7},render:c=>m`
      <eox-map
        style="width: 400px; height: 300px;"
        zoom="${c.zoom}"
        center="[15, 48]"
        layers='[{"type":"Tile","source":{"type":"OSM"}}]'
      ></eox-map>
    `},o={render:()=>m`
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
    `};var r,a,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    zoom: 7
  },
  render: args => html\`
      <eox-map
        style="width: 400px; height: 300px;"
        zoom="\${args.zoom}"
        center="[15, 48]"
        layers='[{"type":"Tile","source":{"type":"OSM"}}]'
      ></eox-map>
    \`
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var s,t,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
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
    \`
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const g=["Primary","ABCompare"];export{o as ABCompare,e as Primary,g as __namedExportsOrder,S as default};
//# sourceMappingURL=map.stories-3a23803e.js.map
