import{x as e}from"./lit-element-Qm8PRmVu.js";import"./main-zXmMRlXR.js";import"./state-ncEgtE_C.js";import"./index-EySAwWXj.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-unmrmfYJ.js";import"../sb-preview/runtime.js";const X={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map"},r={args:{zoom:7},render:y=>e`
      <eox-map
        style="width: 100%; height: 300px;"
        zoom="${y.zoom}"
        center="[15, 48]"
        layers='[{"type":"Tile","source":{"type":"OSM"}}]'
      ></eox-map>
    `},o={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"#232323","stroke-width":1,"fill-color":["string",["get","COLOR"],"#eee"]}}]},render:y=>e` <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map layers="${JSON.stringify(y.layers)}"></eox-map>`},n={render:()=>e` <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        layers='[
          {
            "type": "VectorTile",
            "background": "#1a2b39",
            "declutter": true,
            "properties": {
              "id": "countries"
            },
            "source": {
              "type": "VectorTile",
              "url": "https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",
              "format": "MVT",
              "tileGrid": {}
            },
            "style": {
              "fill-color": "yellow",
              "stroke-color": "#232323",
              "stroke-width": 1
            }
          }
        ]'
      ></eox-map>`},t={render:()=>e` <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        center="[-10997148, 4569099]"
        zoom="3"
        layers='[
          {
            "type": "Tile",
            "properties": {
              "id": "customId"
            },
            "source": {
              "type": "TileWMS",
              "url": "https://ahocevar.com/geoserver/wms",
              "params": { "LAYERS": "topp:states", "TILED": true},
              "ratio": 1,
              "serverType": "geoserver"
            }
          }
        ]
        '
      ></eox-map>`},s={render:()=>e` <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        zoom="6"
        center="[-122.38, 46.10]"
        layers='[
          {
            "type": "STAC",
            "properties": {
              "id": "stacLayer"
            },
            "url": "https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"
          },
          {
            "type": "Tile",
            "properties": {
              "id": "customId"
            },
            "source": {
              "type": "OSM"
            }
          }
        ]'
      ></eox-map>`},a={render:()=>e` <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        layers='[
          {
            "type": "Group",
            "properties": {
              "id": "group"
            },
            "layers": [
              {
                "type": "Vector",
                "properties": {
                  "id": "regions"
                },
                "source": {
                  "type": "Vector",
                  "url": "https://openlayers.org/data/vector/ecoregions.json",
                  "format": "GeoJSON"
                }
              },
              {
                "type": "Group",
                "properties": {
                  "id": "groupLayerInsideGroup"
                },
                "layers": [
                  {
                    "type": "Tile",
                    "properties": {
                      "id": "layerInsideGroupInsideGroup"
                    },
                    "source": {
                      "type": "OSM"
                    }
                  }
                ]
              }
            ]
          }
        ]'
      ></eox-map>`},p={render:()=>e`
      <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        controls='{
        "Zoom": {},
        "Attribution": {},
        "FullScreen": {},
        "OverviewMap": {
          "layers":   [
            {
              "type": "Tile",
              "properties": {
                "id": "overviewMap"
              },
              "source": {
                "type": "OSM"
              }
            }
          ]
        }
      }'
        layers='[
        {
          "type": "Tile",
          "properties": {
            "id": "customId"
          },
          "source": {
            "type": "OSM"
          }
        }
      ]'
      ></eox-map>
    `},i={render:()=>e` <style>
      eox-map {
        width: 100%;
        height: 300px;
      }
    </style>
    <eox-map
      layers='[
        {
          "type": "Vector",
          "id": "regions",
          "source": {
            "type": "Vector",
            "url": "https://openlayers.org/data/vector/ecoregions.json",
            "format": "GeoJSON"
          },
          "interactions": [
            {
              "type": "select",
              "options": {
                "id": "selectInteraction",
                "condition": "pointermove",
                "layer": {
                  "type": "Vector",
                  "properties": {
                    "id": "selectLayer"
                  },
                  "source": {
                    "type": "Vector"
                  },
                  "style": {
                    "stroke-color": "red",
                    "stroke-width": 3
                  }
                }
              }
            }
          ]
        }
      ]'
    >
      <eox-map-tooltip></eox-map-tooltip>
    </eox-map>`},c={render:()=>e`
    <style>
      eox-map {
        width: 100%;
        height: 300px;
      }
    </style>
    <eox-map
      layers='[
          {
            "type": "Vector",
            "background": "#1366dd",
            "properties": {
              "id": "regions"
            },
            "source": {
              "type": "Vector",
              "url": "https://openlayers.org/data/vector/ecoregions.json",
              "format": "GeoJSON",
              "attributions": "Regions: @ openlayers.org"
            },
            "style": {
              "stroke-color": "black",
              "stroke-width": 1,
              "fill-color": "red"
            },
            "interactions": [{
              "type": "select",
              "options": {
                "id": "selectInteraction",
                "condition": "click",
                "style": {
                  "stroke-color": "white",
                  "stroke-width": 3
                }
              }
            }]
          }
        ]'
    ></eox-map>
    <div id="ecoName"></div>
  `},l={render:()=>e`
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
        <eox-map
          id="a"
          layers='[{
              "type": "Tile",
              "properties": {
                "id": "osm",
                "title": "Background"
              },
              "source": { "type": "OSM" }
            }]'
        >
        </eox-map>
        <eox-map
          id="b"
          sync="#a"
          layers='[{
              "type": "Tile",
              "properties": {
                "id": "osm",
                "title": "Background"
              },
              "source": { "type": "OSM" }
          }]'
          controls='{
          "Attribution": {}
        }'
        ></eox-map>
      </div>
    `},m={render:()=>e`
      <style>
        eox-map-compare,
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map-compare>
        <eox-map
          slot="first"
          id="compareA"
          layers='[{"type":"Tile","source":{"type":"OSM"}}]'
        ></eox-map>
        <eox-map
          slot="second"
          sync="eox-map#compareA"
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
    `};var d,u,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    zoom: 7
  },
  render: args => html\`
      <eox-map
        style="width: 100%; height: 300px;"
        zoom="\${args.zoom}"
        center="[15, 48]"
        layers='[{"type":"Tile","source":{"type":"OSM"}}]'
      ></eox-map>
    \`
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,g,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
  },
  render: args => html\` <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map layers="\${JSON.stringify(args.layers)}"></eox-map>\`
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var w,T,v;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\` <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        layers='[
          {
            "type": "VectorTile",
            "background": "#1a2b39",
            "declutter": true,
            "properties": {
              "id": "countries"
            },
            "source": {
              "type": "VectorTile",
              "url": "https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",
              "format": "MVT",
              "tileGrid": {}
            },
            "style": {
              "fill-color": "yellow",
              "stroke-color": "#232323",
              "stroke-width": 1
            }
          }
        ]'
      ></eox-map>\`
}`,...(v=(T=n.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var _,k,V;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\` <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        center="[-10997148, 4569099]"
        zoom="3"
        layers='[
          {
            "type": "Tile",
            "properties": {
              "id": "customId"
            },
            "source": {
              "type": "TileWMS",
              "url": "https://ahocevar.com/geoserver/wms",
              "params": { "LAYERS": "topp:states", "TILED": true},
              "ratio": 1,
              "serverType": "geoserver"
            }
          }
        ]
        '
      ></eox-map>\`
}`,...(V=(k=t.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var O,M,f;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => html\` <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        zoom="6"
        center="[-122.38, 46.10]"
        layers='[
          {
            "type": "STAC",
            "properties": {
              "id": "stacLayer"
            },
            "url": "https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"
          },
          {
            "type": "Tile",
            "properties": {
              "id": "customId"
            },
            "source": {
              "type": "OSM"
            }
          }
        ]'
      ></eox-map>\`
}`,...(f=(M=s.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var A,L,b;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => html\` <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        layers='[
          {
            "type": "Group",
            "properties": {
              "id": "group"
            },
            "layers": [
              {
                "type": "Vector",
                "properties": {
                  "id": "regions"
                },
                "source": {
                  "type": "Vector",
                  "url": "https://openlayers.org/data/vector/ecoregions.json",
                  "format": "GeoJSON"
                }
              },
              {
                "type": "Group",
                "properties": {
                  "id": "groupLayerInsideGroup"
                },
                "layers": [
                  {
                    "type": "Tile",
                    "properties": {
                      "id": "layerInsideGroupInsideGroup"
                    },
                    "source": {
                      "type": "OSM"
                    }
                  }
                ]
              }
            ]
          }
        ]'
      ></eox-map>\`
}`,...(b=(L=a.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var G,I,E;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => html\`
      <style>
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map
        controls='{
        "Zoom": {},
        "Attribution": {},
        "FullScreen": {},
        "OverviewMap": {
          "layers":   [
            {
              "type": "Tile",
              "properties": {
                "id": "overviewMap"
              },
              "source": {
                "type": "OSM"
              }
            }
          ]
        }
      }'
        layers='[
        {
          "type": "Tile",
          "properties": {
            "id": "customId"
          },
          "source": {
            "type": "OSM"
          }
        }
      ]'
      ></eox-map>
    \`
}`,...(E=(I=p.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var z,N,j;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\` <style>
      eox-map {
        width: 100%;
        height: 300px;
      }
    </style>
    <eox-map
      layers='[
        {
          "type": "Vector",
          "id": "regions",
          "source": {
            "type": "Vector",
            "url": "https://openlayers.org/data/vector/ecoregions.json",
            "format": "GeoJSON"
          },
          "interactions": [
            {
              "type": "select",
              "options": {
                "id": "selectInteraction",
                "condition": "pointermove",
                "layer": {
                  "type": "Vector",
                  "properties": {
                    "id": "selectLayer"
                  },
                  "source": {
                    "type": "Vector"
                  },
                  "style": {
                    "stroke-color": "red",
                    "stroke-width": 3
                  }
                }
              }
            }
          ]
        }
      ]'
    >
      <eox-map-tooltip></eox-map-tooltip>
    </eox-map>\`
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var C,J,R;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      eox-map {
        width: 100%;
        height: 300px;
      }
    </style>
    <eox-map
      layers='[
          {
            "type": "Vector",
            "background": "#1366dd",
            "properties": {
              "id": "regions"
            },
            "source": {
              "type": "Vector",
              "url": "https://openlayers.org/data/vector/ecoregions.json",
              "format": "GeoJSON",
              "attributions": "Regions: @ openlayers.org"
            },
            "style": {
              "stroke-color": "black",
              "stroke-width": 1,
              "fill-color": "red"
            },
            "interactions": [{
              "type": "select",
              "options": {
                "id": "selectInteraction",
                "condition": "click",
                "style": {
                  "stroke-color": "white",
                  "stroke-width": 3
                }
              }
            }]
          }
        ]'
    ></eox-map>
    <div id="ecoName"></div>
  \`
}`,...(R=(J=c.parameters)==null?void 0:J.docs)==null?void 0:R.source}}};var W,B,D;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => html\`
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
        <eox-map
          id="a"
          layers='[{
              "type": "Tile",
              "properties": {
                "id": "osm",
                "title": "Background"
              },
              "source": { "type": "OSM" }
            }]'
        >
        </eox-map>
        <eox-map
          id="b"
          sync="#a"
          layers='[{
              "type": "Tile",
              "properties": {
                "id": "osm",
                "title": "Background"
              },
              "source": { "type": "OSM" }
          }]'
          controls='{
          "Attribution": {}
        }'
        ></eox-map>
      </div>
    \`
}`,...(D=(B=l.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var P,Y,$;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
      <style>
        eox-map-compare,
        eox-map {
          width: 100%;
          height: 300px;
        }
      </style>
      <eox-map-compare>
        <eox-map
          slot="first"
          id="compareA"
          layers='[{"type":"Tile","source":{"type":"OSM"}}]'
        ></eox-map>
        <eox-map
          slot="second"
          sync="eox-map#compareA"
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
}`,...($=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};const ee=["Primary","VectorLayer","VectorTileLayer","WMSLayer","STACLayer","GroupLayer","Controls","Hover","Select","MapSync","ABCompare"];export{m as ABCompare,p as Controls,a as GroupLayer,i as Hover,l as MapSync,r as Primary,s as STACLayer,c as Select,o as VectorLayer,n as VectorTileLayer,t as WMSLayer,ee as __namedExportsOrder,X as default};
