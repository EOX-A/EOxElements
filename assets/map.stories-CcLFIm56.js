import{x as t}from"./lit-element-1x-rNuFE.js";const fo={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map",render:e=>t`
    <eox-map
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    ></eox-map>
  `},g={args:{center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}],zoom:7}},h={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"#232323","stroke-width":1,"fill-color":["string",["get","COLOR"],"#eee"]}}]}},S={args:{layers:[{type:"VectorTile",background:"#1a2b39",declutter:!0,properties:{id:"countries"},source:{type:"VectorTile",url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",format:"MVT",tileGrid:{}},style:{"fill-color":"yellow","stroke-color":"#232323","stroke-width":1}}]}},x={args:{center:[-10997148,4569099],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"}}],zoom:3}},r={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTSCapabilities",url:"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",layer:"s2cloudless-2017"}}],zoom:5}},n={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTS",url:"https://tiles.maps.eox.at/wmts",layer:"s2cloudless-2017_3857",style:"default",matrixSet:"GoogleMapsCompatible",tileGrid:{tileSize:[128,128]}}}],zoom:5}},f={args:{center:[-122.38,46.1],layers:[{type:"STAC",properties:{id:"stacLayer"},url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:7}},b={args:{center:[5,16.3],layers:[{type:"WebGLTile",properties:{id:"geotiffLayer"},source:{type:"GeoTIFF",sources:[{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"}]}},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:8}},w={args:{layers:[{type:"Group",properties:{id:"group"},layers:[{type:"Vector",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Group",properties:{id:"groupLayerInsideGroup"},layers:[{type:"Tile",properties:{id:"layerInsideGroupInsideGroup"},source:{type:"OSM"}}]}]}]}},k={args:{controls:{Zoom:{},Attribution:{},FullScreen:{},OverviewMap:{layers:[{type:"Tile",properties:{id:"overviewMap"},source:{type:"OSM"}}]}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},T={args:{zoom:7,controls:{Geolocation:{tracking:!0,trackHeading:!0,centerWhenReady:!1,highAccuracy:!0,trackAccuracy:!0,style:{"circle-radius":10,"circle-fill-color":"red","circle-stroke-color":"white","circle-stroke-width":2},buttonIcon:"https://upload.wikimedia.org/wikipedia/commons/7/74/Location_icon_from_Noun_Project.png"},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},s={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},a={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{type:"fullscreen",opacity:.2,spinnerSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="120 50" r="30" stroke-width="22" stroke="#cd4609" fill="none" cy="50" cx="50">
        <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.4s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
            </circle><g></g></g></svg>`},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},v={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"stroke-color":"red","stroke-width":3}}}}]}]}},M={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"red"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},i={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>t`
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
  `},c={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>t`
    <eox-map
      id="tooltipTest"
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    >
      <eox-map-tooltip
        .propertyTransform=${({key:o,value:ho},So)=>{if(console.log(So),o.includes("COLOR"))return{key:o.toLowerCase(),value:ho}}}
      ></eox-map-tooltip>
    </eox-map>
  `},p={args:{config:{layers:[{type:"Vector",background:"lightgrey",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"darkgrey"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},render:e=>t`
    <eox-map
      id="highlightAndAnimate"
      style="width: 100%; height: 300px;"
      .config=${e.config}
      @loadend=${()=>{document.querySelector("eox-map#highlightAndAnimate").selectInteractions.selectInteraction.highlightById([664,795,789],{duration:400,padding:[50,50,50,50]})}}
    ></eox-map>
  `},l={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}]},render:e=>t`
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
  `},d={args:{layersA:[{type:"Tile",source:{type:"OSM"}}],layersB:[{type:"Tile",source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}}]},render:e=>t`
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
  `},O={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9}}},render:e=>t`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},m={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>t`
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
  `},y={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],animationOptions:{duration:500},center:[16.8,48.2],zoom:7},render:e=>t`
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
  `},u={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9},preventScroll:!0}},render:e=>t`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `};var z,A,$;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...($=(A=g.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var I,G,V;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(G=h.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var _,L,j;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(j=(L=S.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var C,W,E;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(W=x.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var P,N,F,B,R;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(N=r.parameters)==null?void 0:N.docs)==null?void 0:F.source},description:{story:"A source with type `WMTSCapabilities` automatically fetches the provided capabilities url\nand renders the specified layer.",...(R=(B=r.parameters)==null?void 0:B.docs)==null?void 0:R.description}}};var J,q,Z,D,H;n.parameters={...n.parameters,docs:{...(J=n.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(q=n.parameters)==null?void 0:q.docs)==null?void 0:Z.source},description:{story:"`WMTS` data can also be accessed directly without the need of fetching the capabilities.\nA TileGrid can be defined via the `tileGrid`-property of the Source",...(H=(D=n.parameters)==null?void 0:D.docs)==null?void 0:H.description}}};var Y,Q,U;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var K,X,ee;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(ee=(X=b.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var oe,te,re;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(te=w.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,se,ae;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,ce,pe;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var le,de,me,ye,ue;s.parameters={...s.parameters,docs:{...(le=s.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(me=(de=s.parameters)==null?void 0:de.docs)==null?void 0:me.source},description:{story:"A simple, unobtrusive loading indicator in the bottom left that appears any time when the map is loading.",...(ue=(ye=s.parameters)==null?void 0:ye.docs)==null?void 0:ue.description}}};var ge,he,Se,xe,fe;a.parameters={...a.parameters,docs:{...(ge=a.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Se=(he=a.parameters)==null?void 0:he.docs)==null?void 0:Se.source},description:{story:"Loading Indicators can also be centered over the entire map by setting the option `type` to `'fullscreen'`, adapting the opacity is adviced when doing so.\n\nCustom rotating SVG-Icons can be used by setting the svg data as the `spinnerSvg`-option.",...(fe=(xe=a.parameters)==null?void 0:xe.docs)==null?void 0:fe.description}}};var be,we,ke;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ke=(we=v.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var Te,ve,Me;M.parameters={...M.parameters,docs:{...(Te=M.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Me=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:Me.source}}};var Oe,ze,Ae,$e,Ie;i.parameters={...i.parameters,docs:{...(Oe=i.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ae=(ze=i.parameters)==null?void 0:ze.docs)==null?void 0:Ae.source},description:{story:"`eox-map` offers a built-in tooltip, which needs to be placed inside the default slot:\n```\n<eox-map [...]>\n  <eox-map-tooltip></eox-map-tooltip>\n</eox-map>\n```\nThis renders a list of all feature properties of the currently selected feature.\nNote that if multiple interactions are registered (e.g. `pointermove` and `singleclick`),\nthe `pointermove` interaction will have higher priority for the tooltip.",...(Ie=($e=i.parameters)==null?void 0:$e.docs)==null?void 0:Ie.description}}};var Ge,Ve,_e,Le,je;c.parameters={...c.parameters,docs:{...(Ge=c.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(_e=(Ve=c.parameters)==null?void 0:Ve.docs)==null?void 0:_e.source},description:{story:'The rendering of feature properties inside the tooltip can be transformed\nby passing a `propertyTransform` function to the tooltip element which applies to each property in the rendering loop:\n```\n<eox-map [...]>\n  <eox-map-tooltip\n    .propertyTransform=${({key, value}, feature) => key.includes("COLOR") ? { key: key.toLowerCase(), value }}\n  ></eox-map-tooltip>\n</eox-map>\n```\n\nThe first argument are `key` and `value` of the current feature property; this object needs to be\nreturned in order to render the property in the list.\nAdditionally, the entire feature is passed as a second argument, for cases of more advanced property\ntransformation in which needs access to the entire feature.',...(je=(Le=c.parameters)==null?void 0:Le.docs)==null?void 0:je.description}}};var Ce,We,Ee,Pe,Ne;p.parameters={...p.parameters,docs:{...(Ce=p.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    config: {
      layers: [{
        type: "Vector",
        background: "lightgrey",
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
          "fill-color": "darkgrey"
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
  },
  render: args => html\`
    <eox-map
      id="highlightAndAnimate"
      style="width: 100%; height: 300px;"
      .config=\${args.config}
      @loadend=\${() => {
    document.querySelector("eox-map#highlightAndAnimate").selectInteractions.selectInteraction.highlightById([664, 795, 789], {
      duration: 400,
      padding: [50, 50, 50, 50]
    });
  }}
    ></eox-map>
  \`
}`,...(Ee=(We=p.parameters)==null?void 0:We.docs)==null?void 0:Ee.source},description:{story:"Select interactions offer a `highlightById` method, with which vector features can be programmatically selected via their id property.\nIt expects an array with a list of ids to be selected.\nOptionally, passing a second argument allows to set the [`fitOptions`](https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions),\nadding view animation to the selection.",...(Ne=(Pe=p.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.description}}};var Fe,Be,Re,Je,qe;l.parameters={...l.parameters,docs:{...(Fe=l.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Re=(Be=l.parameters)==null?void 0:Be.docs)==null?void 0:Re.source},description:{story:'Sync the views of two maps using the `sync` attribute (e.g. `sync="eox-map#a"`).',...(qe=(Je=l.parameters)==null?void 0:Je.docs)==null?void 0:qe.description}}};var Ze,De,He,Ye,Qe;d.parameters={...d.parameters,docs:{...(Ze=d.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(He=(De=d.parameters)==null?void 0:De.docs)==null?void 0:He.source},description:{story:'To compare two maps, wrap them in an `<eox-map-compare>` element and assign them to the slot `first` and `second`.\nAlso use the `sync` attribute so both move their view together.\n\n`eox-map-compare` also takes a `value` property (0 - 100) which determines the position of the comparison slider;\nand an `enabled` attribute, which can be either `"first"` (only left map visible), `"second"` (only second map visible)\nor `undefined` (default, both visible).',...(Qe=(Ye=d.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.description}}};var Ue,Ke,Xe;O.parameters={...O.parameters,docs:{...(Ue=O.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Xe=(Ke=O.parameters)==null?void 0:Ke.docs)==null?void 0:Xe.source}}};var eo,oo,to,ro,no;m.parameters={...m.parameters,docs:{...(eo=m.parameters)==null?void 0:eo.docs,source:{originalSource:`{
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
}`,...(to=(oo=m.parameters)==null?void 0:oo.docs)==null?void 0:to.source},description:{story:"The projection of the view can be changed via the `projection`-attribute.\nOut-of-the-box the projections EPSG:3857 (default) and EPSG:4326 (geographic coordinates)\nare included, additional projections can be used by registering them via the `registerProjection` or\n`registerProjectionFromCode` helper functions beforehand.",...(no=(ro=m.parameters)==null?void 0:ro.docs)==null?void 0:no.description}}};var so,ao,io,co,po;y.parameters={...y.parameters,docs:{...(so=y.parameters)==null?void 0:so.docs,source:{originalSource:`{
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
}`,...(io=(ao=y.parameters)==null?void 0:ao.docs)==null?void 0:io.source},description:{story:"changing the properties `zoom`, `center` or `zoomExtent` will trigger animations, if the\n`animationOptions`-property is set.\nanimation options for `zoom` or `center`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~AnimationOptions\nanimation options for `zoomExtent`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions",...(po=(co=y.parameters)==null?void 0:co.docs)==null?void 0:po.description}}};var lo,mo,yo,uo,go;u.parameters={...u.parameters,docs:{...(lo=u.parameters)==null?void 0:lo.docs,source:{originalSource:`{
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
}`,...(yo=(mo=u.parameters)==null?void 0:mo.docs)==null?void 0:yo.source},description:{story:"By setting the `prevent-scroll` attribute or by setting `preventScroll` property to `true` (either on the element or within the config object),\nthe map doesnt mouse-scroll (on desktop) or drag-touch (on tab/mobile). Pressing the platform modifier key (ctrl/cmd) will enable scrolling.\nUseful for maps embedded in scrollable websites.",...(go=(uo=u.parameters)==null?void 0:uo.docs)==null?void 0:go.description}}};const bo=["Primary","VectorLayer","VectorTileLayer","WMSLayer","WMTSCapabilitiesLayer","WMTSTileGrid","STACLayer","GeoTIFFLayer","GroupLayer","Controls","Geolocation","StandardLoadingIndicator","CustomFullScreenLoadingIndicator","HoverSelect","ClickSelect","Tooltip","TooltipWithPropertyTransform","HighlightFeaturesAndAnimate","MapSync","ABCompare","ConfigObject","Projection","Animations","PreventScroll"];export{d as ABCompare,y as Animations,M as ClickSelect,O as ConfigObject,k as Controls,a as CustomFullScreenLoadingIndicator,b as GeoTIFFLayer,T as Geolocation,w as GroupLayer,p as HighlightFeaturesAndAnimate,v as HoverSelect,l as MapSync,u as PreventScroll,g as Primary,m as Projection,f as STACLayer,s as StandardLoadingIndicator,i as Tooltip,c as TooltipWithPropertyTransform,h as VectorLayer,S as VectorTileLayer,x as WMSLayer,r as WMTSCapabilitiesLayer,n as WMTSTileGrid,bo as __namedExportsOrder,fo as default};
