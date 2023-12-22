import{x as r}from"./lit-element-Qm8PRmVu.js";import"./sources-ZrwUl-nJ.js";import"./main-THjY6tgQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe--5qCyCRY.js";import"../sb-preview/runtime.js";import"./state-ncEgtE_C.js";import"./index-EySAwWXj.js";const fe={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map",render:e=>r`
      <eox-map
        style="width: 100%; height: 300px;"
        .center=${e.center}
        .controls=${e.controls}
        .layers=${e.layers}
        .zoom=${e.zoom}
      ></eox-map>
    `},n={args:{center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}],zoom:7}},s={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"#232323","stroke-width":1,"fill-color":["string",["get","COLOR"],"#eee"]}}]}},a={args:{layers:[{type:"VectorTile",background:"#1a2b39",declutter:!0,properties:{id:"countries"},source:{type:"VectorTile",url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",format:"MVT",tileGrid:{}},style:{"fill-color":"yellow","stroke-color":"#232323","stroke-width":1}}]}},p={args:{center:[-10997148,4569099],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"}}],zoom:3}},i={args:{center:[-122.38,46.1],layers:[{type:"STAC",properties:{id:"stacLayer"},url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:7}},c={args:{layers:[{type:"Group",properties:{id:"group"},layers:[{type:"Vector",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Group",properties:{id:"groupLayerInsideGroup"},layers:[{type:"Tile",properties:{id:"layerInsideGroupInsideGroup"},source:{type:"OSM"}}]}]}]}},l={args:{controls:{Zoom:{},Attribution:{},FullScreen:{},OverviewMap:{layers:[{type:"Tile",properties:{id:"overviewMap"},source:{type:"OSM"}}]}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},y={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"stroke-color":"red","stroke-width":3}}}}]}]}},m={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"red"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},o={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}]},render:e=>r`
      <eox-map
        id="tooltipTest"
        style="width: 100%; height: 300px;"
        .center=${e.center}
        .controls=${e.controls}
        .layers=${e.layers}
        .zoom=${e.zoom}
      >
        <eox-map-tooltip></eox-map-tooltip>
      </eox-map>
    `},t={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}]},render:e=>r`
      <eox-map
        id="tooltipTest"
        style="width: 100%; height: 300px;"
        .center=${e.center}
        .controls=${e.controls}
        .layers=${e.layers}
        .zoom=${e.zoom}
      >
        <eox-map-tooltip
          .propertyTransform=${({key:h,value:ce},le)=>{if(console.log(le),h.includes("COLOR"))return{key:h.toLowerCase(),value:ce}}}
        ></eox-map-tooltip>
      </eox-map>
    `},d={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}]},render:e=>r`
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
    `},u={args:{layersA:[{type:"Tile",source:{type:"OSM"}}],layersB:[{type:"Tile",source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}}]},render:e=>r`
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
    `},g={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9}}},render:e=>r`
      <eox-map
        style="width: 100%; height: 300px;"
        .config=${e.config}
      ></eox-map>
    `};var x,S,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var T,v,k;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var w,O,V;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(V=(O=a.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var _,L,A;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(A=(L=p.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var $,b,M;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(M=(b=i.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var G,I,z;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(z=(I=c.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var C,j,E;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(j=l.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var N,R,J;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
  }
}`,...(J=(R=y.parameters)==null?void 0:R.docs)==null?void 0:J.source}}};var W,B,P;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(B=m.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var D,F,Y,Z,H;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
          style: {
            "stroke-color": "red",
            "stroke-width": 3
          }
        }
      }]
    }]
  },
  render: args => html\`
      <eox-map
        id="tooltipTest"
        style="width: 100%; height: 300px;"
        .center=\${args.center}
        .controls=\${args.controls}
        .layers=\${args.layers}
        .zoom=\${args.zoom}
      >
        <eox-map-tooltip></eox-map-tooltip>
      </eox-map>
    \`
}`,...(Y=(F=o.parameters)==null?void 0:F.docs)==null?void 0:Y.source},description:{story:"`eox-map` offers a built-in tooltip, which needs to be placed inside the default slot:\n```\n<eox-map [...]>\n  <eox-map-tooltip></eox-map-tooltip>\n</eox-map>\n```\nThis renders a list of all feature properties of the currently selected feature.\nNote that if multiple interactions are registered (e.g. `pointermove` and `singleclick`),\nonly the first one will trigger the tooltip.",...(H=(Z=o.parameters)==null?void 0:Z.docs)==null?void 0:H.description}}};var q,K,Q,U,X;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
          style: {
            "stroke-color": "red",
            "stroke-width": 3
          }
        }
      }]
    }]
  },
  render: args => html\`
      <eox-map
        id="tooltipTest"
        style="width: 100%; height: 300px;"
        .center=\${args.center}
        .controls=\${args.controls}
        .layers=\${args.layers}
        .zoom=\${args.zoom}
      >
        <eox-map-tooltip
          .propertyTransform=\${({
    key,
    value
  }, hoverFeature) => {
    console.log(hoverFeature);
    if (key.includes("COLOR")) {
      return {
        key: key.toLowerCase(),
        value
      };
    }
  }}
        ></eox-map-tooltip>
      </eox-map>
    \`
}`,...(Q=(K=t.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:'The rendering of feature properties inside the tooltip can be transformed\nby passing a `propertyTransform` function to the tooltip element which applies to each property in the rendering loop:\n```\n<eox-map [...]>\n  <eox-map-tooltip\n    .propertyTransform=${({key, value}, feature) => key.includes("COLOR") ? { key: key.toLowerCase(), value }}\n  ></eox-map-tooltip>\n</eox-map>\n```\n\nThe first argument are `key` and `value` of the current feature property; this object needs to be\nreturned in order to render the property in the list.\nAdditionally, the entire feature is passed as a second argument, for cases of more advanced property\ntransformation in which needs access to the entire feature.',...(X=(U=t.parameters)==null?void 0:U.docs)==null?void 0:X.description}}};var ee,re,oe;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(oe=(re=d.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var te,ne,se;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,pe,ie;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    config: {
      controls: {
        Zoom: {}
      },
      layers: [{
        type: "Tile",
        source: {
          type: "OSM"
        }
      }],
      view: {
        center: [16.8, 48.2],
        zoom: 9
      }
    }
  },
  render: args => html\`
      <eox-map
        style="width: 100%; height: 300px;"
        .config=\${args.config}
      ></eox-map>
    \`
}`,...(ie=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:ie.source}}};const Te=["Primary","VectorLayer","VectorTileLayer","WMSLayer","STACLayer","GroupLayer","Controls","HoverSelect","ClickSelect","Tooltip","TooltipWithPropertyTransform","MapSync","ABCompare","ConfigObject"];export{u as ABCompare,m as ClickSelect,g as ConfigObject,l as Controls,c as GroupLayer,y as HoverSelect,d as MapSync,n as Primary,i as STACLayer,o as Tooltip,t as TooltipWithPropertyTransform,s as VectorLayer,a as VectorTileLayer,p as WMSLayer,Te as __namedExportsOrder,fe as default};
