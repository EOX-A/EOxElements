import{x as r}from"./lit-element-DBwSto7d.js";const Ye={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map",render:e=>r`
    <eox-map
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    ></eox-map>
  `},l={args:{center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}],zoom:7}},m={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"#232323","stroke-width":1,"fill-color":["string",["get","COLOR"],"#eee"]}}]}},d={args:{layers:[{type:"VectorTile",background:"#1a2b39",declutter:!0,properties:{id:"countries"},source:{type:"VectorTile",url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",format:"MVT",tileGrid:{}},style:{"fill-color":"yellow","stroke-color":"#232323","stroke-width":1}}]}},y={args:{center:[-10997148,4569099],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"}}],zoom:3}},t={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTSCapabilities",url:"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",layer:"s2cloudless-2017"}}],zoom:5}},n={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTS",url:"https://tiles.maps.eox.at/wmts",layer:"s2cloudless-2017_3857",style:"default",matrixSet:"GoogleMapsCompatible",tileGrid:{tileSize:[128,128]}}}],zoom:5}},u={args:{center:[-122.38,46.1],layers:[{type:"STAC",properties:{id:"stacLayer"},url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:7}},g={args:{center:[5,16.3],layers:[{type:"WebGLTile",properties:{id:"geotiffLayer"},source:{type:"GeoTIFF",sources:[{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"}]}},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:8}},h={args:{layers:[{type:"Group",properties:{id:"group"},layers:[{type:"Vector",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Group",properties:{id:"groupLayerInsideGroup"},layers:[{type:"Tile",properties:{id:"layerInsideGroupInsideGroup"},source:{type:"OSM"}}]}]}]}},S={args:{controls:{Zoom:{},Attribution:{},FullScreen:{},OverviewMap:{layers:[{type:"Tile",properties:{id:"overviewMap"},source:{type:"OSM"}}]}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},x={args:{zoom:7,controls:{Geolocation:{tracking:!0,trackHeading:!0,centerWhenReady:!1,highAccuracy:!0,trackAccuracy:!0,style:{"circle-radius":10,"circle-fill-color":"red","circle-stroke-color":"white","circle-stroke-width":2},buttonIcon:"https://upload.wikimedia.org/wikipedia/commons/7/74/Location_icon_from_Noun_Project.png"},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},f={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"stroke-color":"red","stroke-width":3}}}}]}]}},T={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"red"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},s={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>r`
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
  `},a={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>r`
    <eox-map
      id="tooltipTest"
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    >
      <eox-map-tooltip
        .propertyTransform=${({key:o,value:qe},He)=>{if(console.log(He),o.includes("COLOR"))return{key:o.toLowerCase(),value:qe}}}
      ></eox-map-tooltip>
    </eox-map>
  `},w={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}]},render:e=>r`
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
  `},b={args:{layersA:[{type:"Tile",source:{type:"OSM"}}],layersB:[{type:"Tile",source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}}]},render:e=>r`
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
  `},k={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9}}},render:e=>r`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},i={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>r`
    <eox-map
      id="projectionMap"
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    >
    </eox-map>
    <button
      @click=${()=>{const o=document.querySelector("#projectionMap");o.setAttribute("projection",o.map.getView().getProjection().getCode()==="EPSG:4326"?"EPSG:3857":"EPSG:4326")}}
    >
      change projection
    </button>
  `},c={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],animationOptions:{duration:500},center:[16.8,48.2],zoom:7},render:e=>r`
    <eox-map
      id="animationMap"
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .layers=${e.layers}
      .zoom=${e.zoom}
      .animationOptions=${e.animationOptions}
    >
    </eox-map>
    <button
      @click=${()=>{const o=document.querySelector("#animationMap");o.zoom=o.zoom+1}}
    >
      zoom in animation
    </button>
    <button
      @click=${()=>{const o=document.querySelector("#animationMap");o.zoom=o.zoom-1}}
    >
      zoom out animation
    </button>
  `},p={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9},preventScroll:!0}},render:e=>r`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `};var M,v,z;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(v=l.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var O,$,G;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=($=m.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var _,V,A;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(A=(V=d.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var L,I,j;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(I=y.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var C,W,E,P,N;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    center: [20, 40],
    layers: [{
      type: "Tile",
      properties: {
        id: "customId"
      },
      source: {
        type: "WMTSCapabilities",
        url: "https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",
        layer: "s2cloudless-2017"
      }
    }],
    zoom: 5
  }
}`,...(E=(W=t.parameters)==null?void 0:W.docs)==null?void 0:E.source},description:{story:"A source with type `WMTSCapabilities` automatically fetches the provided capabilities url\nand renders the specified layer.",...(N=(P=t.parameters)==null?void 0:P.docs)==null?void 0:N.description}}};var R,F,J,B,D;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    center: [20, 40],
    layers: [{
      type: "Tile",
      properties: {
        id: "customId"
      },
      source: {
        type: "WMTS",
        url: "https://tiles.maps.eox.at/wmts",
        layer: "s2cloudless-2017_3857",
        style: "default",
        matrixSet: "GoogleMapsCompatible",
        tileGrid: {
          tileSize: [128, 128]
        }
      }
    }],
    zoom: 5
  }
}`,...(J=(F=n.parameters)==null?void 0:F.docs)==null?void 0:J.source},description:{story:"`WMTS` data can also be accessed directly without the need of fetching the capabilities.\nA TileGrid can be defined via the `tileGrid`-property of the Source",...(D=(B=n.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var Z,q,H;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(H=(q=u.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var Q,Y,U;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    center: [5, 16.3],
    layers: [{
      type: "WebGLTile",
      properties: {
        id: "geotiffLayer"
      },
      source: {
        type: "GeoTIFF",
        sources: [{
          url: "https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"
        }]
      }
    }, {
      type: "Tile",
      properties: {
        id: "customId"
      },
      source: {
        type: "OSM"
      }
    }],
    zoom: 8
  }
}`,...(U=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var K,X,ee;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(ee=(X=h.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var oe,re,te;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(te=(re=S.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,se,ae;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    zoom: 7,
    controls: {
      Geolocation: {
        tracking: true,
        trackHeading: true,
        centerWhenReady: false,
        highAccuracy: true,
        trackAccuracy: true,
        style: {
          "circle-radius": 10,
          "circle-fill-color": "red",
          "circle-stroke-color": "white",
          "circle-stroke-width": 2
        },
        buttonIcon: "https://upload.wikimedia.org/wikipedia/commons/7/74/Location_icon_from_Noun_Project.png"
      },
      Zoom: {}
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
}`,...(ae=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,ce,pe;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var le,me,de;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(me=T.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ye,ue,ge,he,Se;s.parameters={...s.parameters,docs:{...(ye=s.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(ue=s.parameters)==null?void 0:ue.docs)==null?void 0:ge.source},description:{story:"`eox-map` offers a built-in tooltip, which needs to be placed inside the default slot:\n```\n<eox-map [...]>\n  <eox-map-tooltip></eox-map-tooltip>\n</eox-map>\n```\nThis renders a list of all feature properties of the currently selected feature.\nNote that if multiple interactions are registered (e.g. `pointermove` and `singleclick`),\nthe `pointermove` interaction will have higher priority for the tooltip.",...(Se=(he=s.parameters)==null?void 0:he.docs)==null?void 0:Se.description}}};var xe,fe,Te,we,be;a.parameters={...a.parameters,docs:{...(xe=a.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Te=(fe=a.parameters)==null?void 0:fe.docs)==null?void 0:Te.source},description:{story:'The rendering of feature properties inside the tooltip can be transformed\nby passing a `propertyTransform` function to the tooltip element which applies to each property in the rendering loop:\n```\n<eox-map [...]>\n  <eox-map-tooltip\n    .propertyTransform=${({key, value}, feature) => key.includes("COLOR") ? { key: key.toLowerCase(), value }}\n  ></eox-map-tooltip>\n</eox-map>\n```\n\nThe first argument are `key` and `value` of the current feature property; this object needs to be\nreturned in order to render the property in the list.\nAdditionally, the entire feature is passed as a second argument, for cases of more advanced property\ntransformation in which needs access to the entire feature.',...(be=(we=a.parameters)==null?void 0:we.docs)==null?void 0:be.description}}};var ke,Me,ve;w.parameters={...w.parameters,docs:{...(ke=w.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(ve=(Me=w.parameters)==null?void 0:Me.docs)==null?void 0:ve.source}}};var ze,Oe,$e;b.parameters={...b.parameters,docs:{...(ze=b.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...($e=(Oe=b.parameters)==null?void 0:Oe.docs)==null?void 0:$e.source}}};var Ge,_e,Ve;k.parameters={...k.parameters,docs:{...(Ge=k.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ve=(_e=k.parameters)==null?void 0:_e.docs)==null?void 0:Ve.source}}};var Ae,Le,Ie,je,Ce;i.parameters={...i.parameters,docs:{...(Ae=i.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    layers: [{
      type: "Vector",
      source: {
        type: "Vector",
        url: "https://openlayers.org/data/vector/ecoregions.json",
        format: "GeoJSON"
      }
    }, {
      type: "Tile",
      properties: {
        id: "osm",
        title: "Background"
      },
      source: {
        type: "OSM"
      }
    }],
    center: [16.8, 48.2],
    zoom: 7
  },
  render: args => html\`
    <eox-map
      id="projectionMap"
      style="width: 100%; height: 300px;"
      .center=\${args.center}
      .controls=\${args.controls}
      .layers=\${args.layers}
      .zoom=\${args.zoom}
    >
    </eox-map>
    <button
      @click=\${() => {
    const eoxMap = document.querySelector("#projectionMap");
    eoxMap.setAttribute("projection", eoxMap.map.getView().getProjection().getCode() === "EPSG:4326" ? "EPSG:3857" : "EPSG:4326");
  }}
    >
      change projection
    </button>
  \`
}`,...(Ie=(Le=i.parameters)==null?void 0:Le.docs)==null?void 0:Ie.source},description:{story:"The projection of the view can be changed via the `projection`-attribute.\nOut-of-the-box the projections EPSG:3857 (default) and EPSG:4326 (geographic coordinates)\nare included, additional projections can be used by registering them via the `registerProjection` or\n`registerProjectionFromCode` helper functions beforehand.",...(Ce=(je=i.parameters)==null?void 0:je.docs)==null?void 0:Ce.description}}};var We,Ee,Pe,Ne,Re;c.parameters={...c.parameters,docs:{...(We=c.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
    }],
    animationOptions: {
      duration: 500
    },
    center: [16.8, 48.2],
    zoom: 7
  },
  render: args => html\`
    <eox-map
      id="animationMap"
      style="width: 100%; height: 300px;"
      .center=\${args.center}
      .layers=\${args.layers}
      .zoom=\${args.zoom}
      .animationOptions=\${args.animationOptions}
    >
    </eox-map>
    <button
      @click=\${() => {
    const eoxMap = document.querySelector("#animationMap");
    eoxMap.zoom = eoxMap.zoom + 1;
  }}
    >
      zoom in animation
    </button>
    <button
      @click=\${() => {
    const eoxMap = document.querySelector("#animationMap");
    eoxMap.zoom = eoxMap.zoom - 1;
  }}
    >
      zoom out animation
    </button>
  \`
}`,...(Pe=(Ee=c.parameters)==null?void 0:Ee.docs)==null?void 0:Pe.source},description:{story:"changing the properties `zoom`, `center` or `zoomExtent` will trigger animations, if the\n`animationOptions`-property is set.\nanimation options for `zoom` or `center`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~AnimationOptions\nanimation options for `zoomExtent`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions",...(Re=(Ne=c.parameters)==null?void 0:Ne.docs)==null?void 0:Re.description}}};var Fe,Je,Be,De,Ze;p.parameters={...p.parameters,docs:{...(Fe=p.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Be=(Je=p.parameters)==null?void 0:Je.docs)==null?void 0:Be.source},description:{story:"By setting the `prevent-scroll` attribute or by setting `preventScroll` property to `true` (either on the element or within the config object),\nthe map doesnt mouse-scroll (on desktop) or drag-touch (on tab/mobile). Pressing the platform modifier key (ctrl/cmd) will enable scrolling.\nUseful for maps embedded in scrollable websites.",...(Ze=(De=p.parameters)==null?void 0:De.docs)==null?void 0:Ze.description}}};const Ue=["Primary","VectorLayer","VectorTileLayer","WMSLayer","WMTSCapabilitiesLayer","WMTSTileGrid","STACLayer","GeoTIFFLayer","GroupLayer","Controls","Geolocation","HoverSelect","ClickSelect","Tooltip","TooltipWithPropertyTransform","MapSync","ABCompare","ConfigObject","Projection","Animations","PreventScroll"];export{b as ABCompare,c as Animations,T as ClickSelect,k as ConfigObject,S as Controls,g as GeoTIFFLayer,x as Geolocation,h as GroupLayer,f as HoverSelect,w as MapSync,p as PreventScroll,l as Primary,i as Projection,u as STACLayer,s as Tooltip,a as TooltipWithPropertyTransform,m as VectorLayer,d as VectorTileLayer,y as WMSLayer,t as WMTSCapabilitiesLayer,n as WMTSTileGrid,Ue as __namedExportsOrder,Ye as default};
