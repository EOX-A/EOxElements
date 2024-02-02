import{x as r}from"./lit-element-Qm8PRmVu.js";import"./sources-VpHagBpB.js";import"./main-Alx_PdZX.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-Sgd6oz8i.js";import"../sb-preview/runtime.js";import"./state-ncEgtE_C.js";import"./index-EySAwWXj.js";const Ve={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map",render:e=>r`
      <eox-map
        style="width: 100%; height: 300px;"
        .center=${e.center}
        .controls=${e.controls}
        .layers=${e.layers}
        .zoom=${e.zoom}
      ></eox-map>
    `},s={args:{center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}],zoom:7}},a={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"#232323","stroke-width":1,"fill-color":["string",["get","COLOR"],"#eee"]}}]}},p={args:{layers:[{type:"VectorTile",background:"#1a2b39",declutter:!0,properties:{id:"countries"},source:{type:"VectorTile",url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",format:"MVT",tileGrid:{}},style:{"fill-color":"yellow","stroke-color":"#232323","stroke-width":1}}]}},c={args:{center:[-10997148,4569099],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"}}],zoom:3}},i={args:{center:[-122.38,46.1],layers:[{type:"STAC",properties:{id:"stacLayer"},url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:7}},l={args:{layers:[{type:"Group",properties:{id:"group"},layers:[{type:"Vector",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Group",properties:{id:"groupLayerInsideGroup"},layers:[{type:"Tile",properties:{id:"layerInsideGroupInsideGroup"},source:{type:"OSM"}}]}]}]}},m={args:{controls:{Zoom:{},Attribution:{},FullScreen:{},OverviewMap:{layers:[{type:"Tile",properties:{id:"overviewMap"},source:{type:"OSM"}}]}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},y={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"stroke-color":"red","stroke-width":3}}}}]}]}},d={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"red"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},o={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>r`
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
    `},n={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>r`
      <eox-map
        id="tooltipTest"
        style="width: 100%; height: 300px;"
        .center=${e.center}
        .controls=${e.controls}
        .layers=${e.layers}
        .zoom=${e.zoom}
      >
        <eox-map-tooltip
          .propertyTransform=${({key:S,value:ge},he)=>{if(console.log(he),S.includes("COLOR"))return{key:S.toLowerCase(),value:ge}}}
        ></eox-map-tooltip>
      </eox-map>
    `},u={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}]},render:e=>r`
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
    `},g={args:{layersA:[{type:"Tile",source:{type:"OSM"}}],layersB:[{type:"Tile",source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}}]},render:e=>r`
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
    `},h={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9}}},render:e=>r`
      <eox-map
        style="width: 100%; height: 300px;"
        .config=${e.config}
      ></eox-map>
    `},t={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9},preventScroll:!0}},render:e=>r`
      <eox-map
        style="width: 100%; height: 300px;"
        .config=${e.config}
      ></eox-map>
    `};var x,f,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var T,w,k;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(w=a.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var O,V,b;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(b=(V=p.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var _,$,L;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(L=($=c.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var M,A,z;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(A=i.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var G,I,C;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(C=(I=l.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var j,E,N;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(E=m.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var R,J,W;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(J=y.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var B,P,Z;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(Z=(P=d.parameters)==null?void 0:P.docs)==null?void 0:Z.source}}};var D,F,Y,H,U;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    }],
    center: [15, 48],
    zoom: 4
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
}`,...(Y=(F=o.parameters)==null?void 0:F.docs)==null?void 0:Y.source},description:{story:"`eox-map` offers a built-in tooltip, which needs to be placed inside the default slot:\n```\n<eox-map [...]>\n  <eox-map-tooltip></eox-map-tooltip>\n</eox-map>\n```\nThis renders a list of all feature properties of the currently selected feature.\nNote that if multiple interactions are registered (e.g. `pointermove` and `singleclick`),\nthe `pointermove` interaction will have higher priority for the tooltip.",...(U=(H=o.parameters)==null?void 0:H.docs)==null?void 0:U.description}}};var q,K,Q,X,ee;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
    }],
    center: [15, 48],
    zoom: 4
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
}`,...(Q=(K=n.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:'The rendering of feature properties inside the tooltip can be transformed\nby passing a `propertyTransform` function to the tooltip element which applies to each property in the rendering loop:\n```\n<eox-map [...]>\n  <eox-map-tooltip\n    .propertyTransform=${({key, value}, feature) => key.includes("COLOR") ? { key: key.toLowerCase(), value }}\n  ></eox-map-tooltip>\n</eox-map>\n```\n\nThe first argument are `key` and `value` of the current feature property; this object needs to be\nreturned in order to render the property in the list.\nAdditionally, the entire feature is passed as a second argument, for cases of more advanced property\ntransformation in which needs access to the entire feature.',...(ee=(X=n.parameters)==null?void 0:X.docs)==null?void 0:ee.description}}};var re,oe,ne;u.parameters={...u.parameters,docs:{...(re=u.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ne=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var te,se,ae;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var pe,ce,ie;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ie=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var le,me,ye,de,ue;t.parameters={...t.parameters,docs:{...(le=t.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
      },
      preventScroll: true
    }
  },
  render: args => html\`
      <eox-map
        style="width: 100%; height: 300px;"
        .config=\${args.config}
      ></eox-map>
    \`
}`,...(ye=(me=t.parameters)==null?void 0:me.docs)==null?void 0:ye.source},description:{story:"By setting the `prevent-scroll` attribute or by setting `preventScroll` property to `true` (either on the element or within the config object),\nthe map doesnt mouse-scroll (on desktop) or drag-touch (on tab/mobile). Pressing the platform modifier key (ctrl/cmd) will enable scrolling.\nUseful for maps embedded in scrollable websites.",...(ue=(de=t.parameters)==null?void 0:de.docs)==null?void 0:ue.description}}};const be=["Primary","VectorLayer","VectorTileLayer","WMSLayer","STACLayer","GroupLayer","Controls","HoverSelect","ClickSelect","Tooltip","TooltipWithPropertyTransform","MapSync","ABCompare","ConfigObject","PreventScroll"];export{g as ABCompare,d as ClickSelect,h as ConfigObject,m as Controls,l as GroupLayer,y as HoverSelect,u as MapSync,t as PreventScroll,s as Primary,i as STACLayer,o as Tooltip,n as TooltipWithPropertyTransform,a as VectorLayer,p as VectorTileLayer,c as WMSLayer,be as __namedExportsOrder,Ve as default};
