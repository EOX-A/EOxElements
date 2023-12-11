import{x as m}from"./lit-element-Qm8PRmVu.js";import"./main-79sKhvj0.js";import"./state-ncEgtE_C.js";import"./index-EySAwWXj.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-DrrPtsdZ.js";import"../sb-preview/runtime.js";const X={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map",render:e=>m`
      <eox-map
        style="width: 100%; height: 300px;"
        .center=${e.center}
        .controls=${e.controls}
        .layers=${e.layers}
        .zoom=${e.zoom}
      ></eox-map>
    `},r={args:{center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}],zoom:7}},o={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"#232323","stroke-width":1,"fill-color":["string",["get","COLOR"],"#eee"]}}]}},n={args:{layers:[{type:"VectorTile",background:"#1a2b39",declutter:!0,properties:{id:"countries"},source:{type:"VectorTile",url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",format:"MVT",tileGrid:{}},style:{"fill-color":"yellow","stroke-color":"#232323","stroke-width":1}}]}},t={args:{center:[-10997148,4569099],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"}}],zoom:3}},s={args:{center:[-122.38,46.1],layers:[{type:"STAC",properties:{id:"stacLayer"},url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:7}},a={args:{layers:[{type:"Group",properties:{id:"group"},layers:[{type:"Vector",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Group",properties:{id:"groupLayerInsideGroup"},layers:[{type:"Tile",properties:{id:"layerInsideGroupInsideGroup"},source:{type:"OSM"}}]}]}]}},p={args:{controls:{Zoom:{},Attribution:{},FullScreen:{},OverviewMap:{layers:[{type:"Tile",properties:{id:"overviewMap"},source:{type:"OSM"}}]}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},c={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"stroke-color":"red","stroke-width":3}}}}]}]},render:e=>m`
      <eox-map
        style="width: 100%; height: 300px;"
        .center=${e.center}
        .controls=${e.controls}
        .layers=${e.layers}
        .zoom=${e.zoom}
      >
        <eox-map-tooltip></eox-map-tooltip>
      </eox-map>
    `},i={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"red"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},l={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}]},render:e=>m`
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
        <eox-map id="a" .layers=${e.layers}> </eox-map>
        <eox-map id="b" sync="#a" .layers=${e.layers}></eox-map>
      </div>
    `},y={args:{layersA:[{type:"Tile",source:{type:"OSM"}}],layersB:[{type:"Tile",source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}}]},render:e=>m`
      <style>
        eox-map-compare,
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map-compare>
        <eox-map slot="first" id="compareA" .layers=${e.layersA}></eox-map>
        <eox-map
          slot="second"
          sync="eox-map#compareA"
          .layers=${e.layersB}
        ></eox-map>
      </eox-map-compare>
    `};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    center: [15, 48],
    layers: [{
      type: "Tile",
      source: {
        type: "OSM"
      }
    }],
    zoom: 7
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var S,h,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    layers: [{
      type: "Vector",
      background: "#1366dd",
      properties: {
        id: "regions"
      },
      source: {
        type: "Vector",
        url: "https://openlayers.org/data/vector/ecoregions.json",
        format: "GeoJSON",
        attributions: "Regions: @ openlayers.org"
      },
      style: {
        "stroke-color": "#232323",
        "stroke-width": 1,
        "fill-color": ["string", ["get", "COLOR"], "#eee"]
      }
    }]
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var T,v,w;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    layers: [{
      type: "VectorTile",
      background: "#1a2b39",
      declutter: true,
      properties: {
        id: "countries"
      },
      source: {
        type: "VectorTile",
        url: "https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",
        format: "MVT",
        tileGrid: {}
      },
      style: {
        "fill-color": "yellow",
        "stroke-color": "#232323",
        "stroke-width": 1
      }
    }]
  }
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var _,V,k;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    center: [-10997148, 4569099],
    layers: [{
      type: "Tile",
      properties: {
        id: "customId"
      },
      source: {
        type: "TileWMS",
        url: "https://ahocevar.com/geoserver/wms",
        params: {
          LAYERS: "topp:states",
          TILED: true
        },
        ratio: 1,
        serverType: "geoserver"
      }
    }],
    zoom: 3
  }
}`,...(k=(V=t.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var A,M,O;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    center: [-122.38, 46.1],
    layers: [{
      type: "STAC",
      properties: {
        id: "stacLayer"
      },
      url: "https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"
    }, {
      type: "Tile",
      properties: {
        id: "customId"
      },
      source: {
        type: "OSM"
      }
    }],
    zoom: 7
  }
}`,...(O=(M=s.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var f,L,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    layers: [{
      type: "Group",
      properties: {
        id: "group"
      },
      layers: [{
        type: "Vector",
        properties: {
          id: "regions"
        },
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON"
        }
      }, {
        type: "Group",
        properties: {
          id: "groupLayerInsideGroup"
        },
        layers: [{
          type: "Tile",
          properties: {
            id: "layerInsideGroupInsideGroup"
          },
          source: {
            type: "OSM"
          }
        }]
      }]
    }]
  }
}`,...(b=(L=a.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var G,I,$;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    controls: {
      Zoom: {},
      Attribution: {},
      FullScreen: {},
      OverviewMap: {
        layers: [{
          type: "Tile",
          properties: {
            id: "overviewMap"
          },
          source: {
            type: "OSM"
          }
        }]
      }
    },
    layers: [{
      type: "Tile",
      properties: {
        id: "customId"
      },
      source: {
        type: "OSM"
      }
    }]
  }
}`,...($=(I=p.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var z,E,j;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    layers: [{
      type: "Vector",
      source: {
        type: "Vector",
        url: "https://openlayers.org/data/vector/ecoregions.json",
        format: "GeoJSON"
      },
      interactions: [{
        type: "select",
        options: {
          id: "selectInteraction",
          condition: "pointermove",
          layer: {
            type: "Vector",
            properties: {
              id: "selectLayer"
            },
            source: {
              type: "Vector"
            },
            style: {
              "stroke-color": "red",
              "stroke-width": 3
            }
          }
        }
      }]
    }]
  },
  render: args => html\`
      <eox-map
        style="width: 100%; height: 300px;"
        .center=\${args.center}
        .controls=\${args.controls}
        .layers=\${args.layers}
        .zoom=\${args.zoom}
      >
        <eox-map-tooltip></eox-map-tooltip>
      </eox-map>
    \`
}`,...(j=(E=c.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var C,N,R;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    layers: [{
      type: "Vector",
      background: "#1366dd",
      properties: {
        id: "regions"
      },
      source: {
        type: "Vector",
        url: "https://openlayers.org/data/vector/ecoregions.json",
        format: "GeoJSON",
        attributions: "Regions: @ openlayers.org"
      },
      style: {
        "stroke-color": "black",
        "stroke-width": 1,
        "fill-color": "red"
      },
      interactions: [{
        type: "select",
        options: {
          id: "selectInteraction",
          condition: "click",
          style: {
            "stroke-color": "white",
            "stroke-width": 3
          }
        }
      }]
    }]
  }
}`,...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var W,B,J;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    layers: [{
      type: "Tile",
      properties: {
        id: "osm",
        title: "Background"
      },
      source: {
        type: "OSM"
      }
    }]
  },
  render: args => html\`
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
        <eox-map id="a" .layers=\${args.layers}> </eox-map>
        <eox-map id="b" sync="#a" .layers=\${args.layers}></eox-map>
      </div>
    \`
}`,...(J=(B=l.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var D,P,Y;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    layersA: [{
      type: "Tile",
      source: {
        type: "OSM"
      }
    }],
    layersB: [{
      type: "Tile",
      source: {
        type: "TileWMS",
        url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
        params: {
          LAYERS: "AWS_VIS_WIND_V_10M"
        }
      }
    }]
  },
  render: args => html\`
      <style>
        eox-map-compare,
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map-compare>
        <eox-map slot="first" id="compareA" .layers=\${args.layersA}></eox-map>
        <eox-map
          slot="second"
          sync="eox-map#compareA"
          .layers=\${args.layersB}
        ></eox-map>
      </eox-map-compare>
    \`
}`,...(Y=(P=y.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};const ee=["Primary","VectorLayer","VectorTileLayer","WMSLayer","STACLayer","GroupLayer","Controls","Hover","Select","MapSync","ABCompare"];export{y as ABCompare,p as Controls,a as GroupLayer,c as Hover,l as MapSync,r as Primary,s as STACLayer,i as Select,o as VectorLayer,n as VectorTileLayer,t as WMSLayer,ee as __namedExportsOrder,X as default};
