import{x as r}from"./lit-element-1x-rNuFE.js";const yo={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map",render:e=>r`
    <eox-map
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    ></eox-map>
  `},u={args:{center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}],zoom:7}},g={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"#232323","stroke-width":1,"fill-color":["string",["get","COLOR"],"#eee"]}}]}},h={args:{layers:[{type:"VectorTile",background:"#1a2b39",declutter:!0,properties:{id:"countries"},source:{type:"VectorTile",url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",format:"MVT",tileGrid:{}},style:{"fill-color":"yellow","stroke-color":"#232323","stroke-width":1}}]}},S={args:{center:[-10997148,4569099],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"}}],zoom:3}},t={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTSCapabilities",url:"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",layer:"s2cloudless-2017"}}],zoom:5}},n={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTS",url:"https://tiles.maps.eox.at/wmts",layer:"s2cloudless-2017_3857",style:"default",matrixSet:"GoogleMapsCompatible",tileGrid:{tileSize:[128,128]}}}],zoom:5}},x={args:{center:[-122.38,46.1],layers:[{type:"STAC",properties:{id:"stacLayer"},url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:7}},f={args:{center:[5,16.3],layers:[{type:"WebGLTile",properties:{id:"geotiffLayer"},source:{type:"GeoTIFF",sources:[{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"}]}},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:8}},b={args:{layers:[{type:"Group",properties:{id:"group"},layers:[{type:"Vector",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Group",properties:{id:"groupLayerInsideGroup"},layers:[{type:"Tile",properties:{id:"layerInsideGroupInsideGroup"},source:{type:"OSM"}}]}]}]}},w={args:{controls:{Zoom:{},Attribution:{},FullScreen:{},OverviewMap:{layers:[{type:"Tile",properties:{id:"overviewMap"},source:{type:"OSM"}}]}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},T={args:{zoom:7,controls:{Geolocation:{tracking:!0,trackHeading:!0,centerWhenReady:!1,highAccuracy:!0,trackAccuracy:!0,style:{"circle-radius":10,"circle-fill-color":"red","circle-stroke-color":"white","circle-stroke-width":2},buttonIcon:"https://upload.wikimedia.org/wikipedia/commons/7/74/Location_icon_from_Noun_Project.png"},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},s={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},a={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{type:"fullscreen",opacity:.2,spinnerSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="120 50" r="30" stroke-width="22" stroke="#cd4609" fill="none" cy="50" cx="50">
        <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.4s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
            </circle><g></g></g></svg>`},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},v={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"stroke-color":"red","stroke-width":3}}}}]}]}},k={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"red"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},i={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>r`
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
  `},c={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>r`
    <eox-map
      id="tooltipTest"
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    >
      <eox-map-tooltip
        .propertyTransform=${({key:o,value:po},lo)=>{if(console.log(lo),o.includes("COLOR"))return{key:o.toLowerCase(),value:po}}}
      ></eox-map-tooltip>
    </eox-map>
  `},p={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}]},render:e=>r`
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
  `},l={args:{layersA:[{type:"Tile",source:{type:"OSM"}}],layersB:[{type:"Tile",source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}}]},render:e=>r`
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
    <button
      @click=${()=>document.querySelector("eox-map-compare").setAttribute("enabled","first")}
    >
      First
    </button>
    <button
      @click=${()=>document.querySelector("eox-map-compare").setAttribute("enabled","second")}
    >
      Second
    </button>
    <button
      @click=${()=>document.querySelector("eox-map-compare").removeAttribute("enabled")}
    >
      Both (default)
    </button>
  `},M={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9}}},render:e=>r`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},m={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>r`
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
  `},d={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],animationOptions:{duration:500},center:[16.8,48.2],zoom:7},render:e=>r`
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
  `},y={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9},preventScroll:!0}},render:e=>r`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `};var z,O,$;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...($=(O=u.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var A,G,I;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(G=g.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var L,_,V;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(V=(_=h.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var j,C,W;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(W=(C=S.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var E,P,N,F,B;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(P=t.parameters)==null?void 0:P.docs)==null?void 0:N.source},description:{story:"A source with type `WMTSCapabilities` automatically fetches the provided capabilities url\nand renders the specified layer.",...(B=(F=t.parameters)==null?void 0:F.docs)==null?void 0:B.description}}};var R,J,q,Z,D;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(q=(J=n.parameters)==null?void 0:J.docs)==null?void 0:q.source},description:{story:"`WMTS` data can also be accessed directly without the need of fetching the capabilities.\nA TileGrid can be defined via the `tileGrid`-property of the Source",...(D=(Z=n.parameters)==null?void 0:Z.docs)==null?void 0:D.description}}};var Y,H,Q;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(H=x.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var U,K,X;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(X=(K=f.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var ee,oe,re;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var te,ne,se;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,ie,ce;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ce=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var pe,le,me,de,ye;s.parameters={...s.parameters,docs:{...(pe=s.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    zoom: 9,
    center: [0, 51.5],
    controls: {
      LoadingIndicator: {},
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
}`,...(me=(le=s.parameters)==null?void 0:le.docs)==null?void 0:me.source},description:{story:"A simple, unobtrusive loading indicator in the bottom left that appears any time when the map is loading.",...(ye=(de=s.parameters)==null?void 0:de.docs)==null?void 0:ye.description}}};var ue,ge,he,Se,xe;a.parameters={...a.parameters,docs:{...(ue=a.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    zoom: 9,
    center: [0, 51.5],
    controls: {
      LoadingIndicator: {
        type: "fullscreen",
        opacity: 0.2,
        spinnerSvg: \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="120 50" r="30" stroke-width="22" stroke="#cd4609" fill="none" cy="50" cx="50">
        <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.4s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
            </circle><g></g></g></svg>\`
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
}`,...(he=(ge=a.parameters)==null?void 0:ge.docs)==null?void 0:he.source},description:{story:"Loading Indicators can also be centered over the entire map by setting the option `type` to `'fullscreen'`, adapting the opacity is adviced when doing so.\n\nCustom rotating SVG-Icons can be used by setting the svg data as the `spinnerSvg`-option.",...(xe=(Se=a.parameters)==null?void 0:Se.docs)==null?void 0:xe.description}}};var fe,be,we;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(we=(be=v.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var Te,ve,ke;k.parameters={...k.parameters,docs:{...(Te=k.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(ke=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var Me,ze,Oe,$e,Ae;i.parameters={...i.parameters,docs:{...(Me=i.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Oe=(ze=i.parameters)==null?void 0:ze.docs)==null?void 0:Oe.source},description:{story:"`eox-map` offers a built-in tooltip, which needs to be placed inside the default slot:\n```\n<eox-map [...]>\n  <eox-map-tooltip></eox-map-tooltip>\n</eox-map>\n```\nThis renders a list of all feature properties of the currently selected feature.\nNote that if multiple interactions are registered (e.g. `pointermove` and `singleclick`),\nthe `pointermove` interaction will have higher priority for the tooltip.",...(Ae=($e=i.parameters)==null?void 0:$e.docs)==null?void 0:Ae.description}}};var Ge,Ie,Le,_e,Ve;c.parameters={...c.parameters,docs:{...(Ge=c.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Le=(Ie=c.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source},description:{story:'The rendering of feature properties inside the tooltip can be transformed\nby passing a `propertyTransform` function to the tooltip element which applies to each property in the rendering loop:\n```\n<eox-map [...]>\n  <eox-map-tooltip\n    .propertyTransform=${({key, value}, feature) => key.includes("COLOR") ? { key: key.toLowerCase(), value }}\n  ></eox-map-tooltip>\n</eox-map>\n```\n\nThe first argument are `key` and `value` of the current feature property; this object needs to be\nreturned in order to render the property in the list.\nAdditionally, the entire feature is passed as a second argument, for cases of more advanced property\ntransformation in which needs access to the entire feature.',...(Ve=(_e=c.parameters)==null?void 0:_e.docs)==null?void 0:Ve.description}}};var je,Ce,We,Ee,Pe;p.parameters={...p.parameters,docs:{...(je=p.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(We=(Ce=p.parameters)==null?void 0:Ce.docs)==null?void 0:We.source},description:{story:'Sync the views of two maps using the `sync` attribute (e.g. `sync="eox-map#a"`).',...(Pe=(Ee=p.parameters)==null?void 0:Ee.docs)==null?void 0:Pe.description}}};var Ne,Fe,Be,Re,Je;l.parameters={...l.parameters,docs:{...(Ne=l.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
    <button
      @click=\${() => document.querySelector("eox-map-compare").setAttribute("enabled", "first")}
    >
      First
    </button>
    <button
      @click=\${() => document.querySelector("eox-map-compare").setAttribute("enabled", "second")}
    >
      Second
    </button>
    <button
      @click=\${() => document.querySelector("eox-map-compare").removeAttribute("enabled")}
    >
      Both (default)
    </button>
  \`
}`,...(Be=(Fe=l.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source},description:{story:'To compare two maps, wrap them in an `<eox-map-compare>` element and assign them to the slot `first` and `second`.\nAlso use the `sync` attribute so both move their view together.\n\n`eox-map-compare` also takes a `value` property (0 - 100) which determines the position of the comparison slider;\nand an `enabled` attribute, which can be either `"first"` (only left map visible), `"second"` (only second map visible)\nor `undefined` (default, both visible).',...(Je=(Re=l.parameters)==null?void 0:Re.docs)==null?void 0:Je.description}}};var qe,Ze,De;M.parameters={...M.parameters,docs:{...(qe=M.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(De=(Ze=M.parameters)==null?void 0:Ze.docs)==null?void 0:De.source}}};var Ye,He,Qe,Ue,Ke;m.parameters={...m.parameters,docs:{...(Ye=m.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Qe=(He=m.parameters)==null?void 0:He.docs)==null?void 0:Qe.source},description:{story:"The projection of the view can be changed via the `projection`-attribute.\nOut-of-the-box the projections EPSG:3857 (default) and EPSG:4326 (geographic coordinates)\nare included, additional projections can be used by registering them via the `registerProjection` or\n`registerProjectionFromCode` helper functions beforehand.",...(Ke=(Ue=m.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.description}}};var Xe,eo,oo,ro,to;d.parameters={...d.parameters,docs:{...(Xe=d.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(oo=(eo=d.parameters)==null?void 0:eo.docs)==null?void 0:oo.source},description:{story:"changing the properties `zoom`, `center` or `zoomExtent` will trigger animations, if the\n`animationOptions`-property is set.\nanimation options for `zoom` or `center`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~AnimationOptions\nanimation options for `zoomExtent`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions",...(to=(ro=d.parameters)==null?void 0:ro.docs)==null?void 0:to.description}}};var no,so,ao,io,co;y.parameters={...y.parameters,docs:{...(no=y.parameters)==null?void 0:no.docs,source:{originalSource:`{
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
}`,...(ao=(so=y.parameters)==null?void 0:so.docs)==null?void 0:ao.source},description:{story:"By setting the `prevent-scroll` attribute or by setting `preventScroll` property to `true` (either on the element or within the config object),\nthe map doesnt mouse-scroll (on desktop) or drag-touch (on tab/mobile). Pressing the platform modifier key (ctrl/cmd) will enable scrolling.\nUseful for maps embedded in scrollable websites.",...(co=(io=y.parameters)==null?void 0:io.docs)==null?void 0:co.description}}};const uo=["Primary","VectorLayer","VectorTileLayer","WMSLayer","WMTSCapabilitiesLayer","WMTSTileGrid","STACLayer","GeoTIFFLayer","GroupLayer","Controls","Geolocation","StandardLoadingIndicator","CustomFullScreenLoadingIndicator","HoverSelect","ClickSelect","Tooltip","TooltipWithPropertyTransform","MapSync","ABCompare","ConfigObject","Projection","Animations","PreventScroll"];export{l as ABCompare,d as Animations,k as ClickSelect,M as ConfigObject,w as Controls,a as CustomFullScreenLoadingIndicator,f as GeoTIFFLayer,T as Geolocation,b as GroupLayer,v as HoverSelect,p as MapSync,y as PreventScroll,u as Primary,m as Projection,x as STACLayer,s as StandardLoadingIndicator,i as Tooltip,c as TooltipWithPropertyTransform,g as VectorLayer,h as VectorTileLayer,S as WMSLayer,t as WMTSCapabilitiesLayer,n as WMTSTileGrid,uo as __namedExportsOrder,yo as default};
