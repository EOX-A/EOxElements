import{x as e}from"./lit-element-Qm8PRmVu.js";import"./main-OscHSsq_.js";import"./state-ncEgtE_C.js";import"./index-EySAwWXj.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-Yoa6AmMY.js";import"../sb-preview/runtime.js";const ne={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map"},o={args:{zoom:7},render:r=>e`
      <eox-map
        style="width: 100%; height: 300px;"
        zoom="${r.zoom}"
        center="[15, 48]"
        layers='[{"type":"Tile","source":{"type":"OSM"}}]'
      ></eox-map>
    `},n={render:()=>e` <style>
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
              "stroke-color": "#232323",
              "stroke-width": 1,
              "fill-color": ["string", ["get", "COLOR"], "#eee"]
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
      ></eox-map>`},s={render:()=>e` <style>
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
      ></eox-map>`},a={render:()=>e` <style>
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
      ></eox-map>`},p={render:()=>e` <style>
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
      ></eox-map>`},i={render:()=>e`
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
    `},c={play:async({canvasElement:r})=>{r.querySelector("eox-map").addSelect("regions",{id:"myHover",condition:"pointermove",layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"stroke-color":"red","stroke-width":3}}})},render:()=>e` <style>
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
            }
          }
        ]'
    >
      <eox-map-tooltip></eox-map-tooltip>
    </eox-map>`},l={play:async({canvasElement:r})=>{const d=r.querySelector("eox-map");d.addSelect("regions",{id:"mySelection",condition:"click",style:{"stroke-color":"white","stroke-width":3}}),d.addEventListener("select",u=>{var x,g;r.querySelector("#ecoName").innerHTML=(x=u.detail.feature)==null?void 0:x.get("ECO_NAME"),console.log((g=u.detail.feature)==null?void 0:g.get("ECO_NAME"))})},render:()=>e`
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
            }
          }
        ]
        '
    ></eox-map>
    <div id="ecoName"></div>
  `},m={render:()=>e`
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
    `},y={render:()=>e`
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
    `};var h,S,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var w,T,M;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
              "stroke-color": "#232323",
              "stroke-width": 1,
              "fill-color": ["string", ["get", "COLOR"], "#eee"]
            }
          }
        ]'
      ></eox-map>\`
}`,...(M=(T=n.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var O,_,k;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(k=(_=t.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var E,V,f;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(f=(V=s.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var L,A,b;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(b=(A=a.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var G,I,N;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(N=(I=p.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var z,C,j;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var R,W,J;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector("eox-map").addSelect("regions", {
      id: "myHover",
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
    });
  },
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
            }
          }
        ]'
    >
      <eox-map-tooltip></eox-map-tooltip>
    </eox-map>\`
}`,...(J=(W=c.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var q,B,H;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const EOxMap = canvasElement.querySelector("eox-map");
    EOxMap.addSelect("regions", {
      id: "mySelection",
      condition: "click",
      //@ts-ignore
      style: {
        "stroke-color": "white",
        "stroke-width": 3
      }
    });
    EOxMap.addEventListener("select", e => {
      canvasElement.querySelector("#ecoName").innerHTML = e.detail.feature?.get("ECO_NAME");
      console.log(e.detail.feature?.get("ECO_NAME"));
    });
  },
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
            }
          }
        ]
        '
    ></eox-map>
    <div id="ecoName"></div>
  \`
}`,...(H=(B=l.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var D,P,Y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(Y=(P=m.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var F,Z,$;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...($=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const te=["Primary","VectorLayer","VectorTileLayer","WMSLayer","STACLayer","GroupLayer","Controls","Hover","Select","MapSync","ABCompare"];export{y as ABCompare,i as Controls,p as GroupLayer,c as Hover,m as MapSync,o as Primary,a as STACLayer,l as Select,n as VectorLayer,t as VectorTileLayer,s as WMSLayer,te as __namedExportsOrder,ne as default};
//# sourceMappingURL=map.stories-5gxvXLJe.js.map
