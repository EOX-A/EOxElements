import{x as r}from"./lit-element-Bq1Y8_dt.js";const v="https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",fe=e=>`//s2maps-tiles.eu/wmts/1.0.0/${e}/default/g/{z}/{y}/{x}.jpg`,g=e=>({type:"Tile",properties:{title:`EOxCloudless ${e}`},source:{type:"XYZ",url:fe(`s2cloudless-${e}_3857`)}}),o="width: 400px; height: 300px; margin-left: 7px;",E={wind:{type:"Tile",properties:{id:"WIND",title:"WIND"},source:{type:"TileWMS",url:v,params:{LAYERS:"AWS_VIS_WIND_V_10M"}}},no2:{type:"Tile",properties:{id:"NO2",title:"NO2"},source:{type:"TileWMS",url:v,params:{LAYERS:"AWS_NO2-VISUALISATION"}}}},u={type:"Vector",properties:{title:"Regions",id:"regions",description:"Ecological regions of the earth."},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"}},ve={type:"WebGLTile",properties:{id:"s2",layerControlExclusive:!0,title:"s2"},style:{variables:{red:1,green:2,blue:3,redMax:3e3,greenMax:3e3,blueMax:3e3},color:["array",["/",["band",["var","red"]],["var","redMax"]],["/",["band",["var","green"]],["var","greenMax"]],["/",["band",["var","blue"]],["var","blueMax"]],1],gamma:1.1},source:{type:"GeoTIFF",normalize:!1,sources:[{url:"https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif"}]}},$e={type:"Tile",properties:{id:"osm",title:"Open Street Map",layerControlExclusive:!0},visible:!1,opacity:.5,source:{type:"OSM"}},t={type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:fe("terrain-light_3857")}},he=g("2019"),_e=g("2020"),L=g("2021"),f=[{type:"Group",properties:{id:"group2",title:"Data Layers",layerControlExpand:!0,description:"# Hello world"},layers:[E.wind,E.no2,u]},{type:"Group",properties:{id:"group1",title:"Background Layers"},layers:[ve,$e]}],Oe={type:"Tile",properties:{id:"customId",title:"Tile XYZ",layerControlToolsExpand:!0,layerConfig:{schema:{type:"object",properties:{vminmax:{type:"object",properties:{vmin:{type:"number",minimum:0,maximum:10,format:"range"},vmax:{type:"number",minimum:0,maximum:10,format:"range"}},format:"minmax"},cbar:{type:"string",enum:["rain","temperature"]}}}}},source:{type:"XYZ",url:"https://reccap2.api.dev.brockmann-consult.de/api/tiles/cop28~reccap2-9x108x139-0.0.1.zarr/deforested_biomass/{z}/{y}/{x}?crs=EPSG:3857&time=2018-01-01T00:00:00Z&vmin=0&vmax=3&cbar=rain"}},Te={args:{idProperty:"id",titleProperty:"title",unstyled:!1},render:e=>r`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${e.idProperty}
        .titleProperty=${e.titleProperty}
        .unstyled=${e.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      <eox-map
        .style=${o}
        .zoom=${3}
        .layers=${f}
      ></eox-map>
    </div>
  `},$=(e,x=!0)=>({...e,properties:{...e.properties,layerControlExclusive:!0},visible:x}),be={args:{},render:()=>r`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#exclusive"></eox-layercontrol>
      <eox-map
        id="exclusive"
        .style=${o}
        .layers=${[$(t),$(L,!1)]}
      >
      </eox-map>
    </div>
  `},S=e=>({...e,properties:{...e.properties,layerControlOptional:!0},visible:!1}),Re={args:{},render:()=>r`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#optional"></eox-layercontrol>
      <eox-map
        id="optional"
        .style=${o}
        .layers=${[S(L),S(_e),S(he),t]}
      >
      </eox-map>
    </div>
  `},Ie={args:{},render:()=>r`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#expanded"></eox-layercontrol>
      <eox-map
        id="expanded"
        .style=${o}
        .layers=${[t,{type:"Group",properties:{title:"Layer group",layerControlExpand:!0},layers:[{...L,visible:!1}]}]}
      >
      </eox-map>
    </div>
  `},Ae={args:{},render:()=>r`
    <p>Default tools: info, opacity, config, remove, sort</p>
    <eox-layercontrol for="eox-map#tools"></eox-layercontrol>
    <hr />
    <p>Only one tool: info</p>
    <eox-layercontrol .tools=${["info"]} for="eox-map#tools"></eox-layercontrol>
    <hr />
    <p>Only one tool: sort</p>
    <eox-layercontrol .tools=${["sort"]} for="eox-map#tools"></eox-layercontrol>
    <hr />
    <p>No tools</p>
    <eox-layercontrol .tools=${[]} for="eox-map#tools"></eox-layercontrol>
    <eox-map
      id="tools"
      .style=${o}
      .layers=${[u,t]}
    >
    </eox-map>
  `},Ce={args:{},render:()=>r`
    <eox-layercontrol
      .tools=${["config"]}
      for="eox-map#config"
    ></eox-layercontrol>
    <hr />
    <eox-map
      .center=${[-7e6,-5e5]}
      .zoom=${4}
      id="config"
      .style=${o}
      .layers=${[Oe,t]}
    >
    </eox-map>
  `},Pe=e=>({...e,properties:{...e.properties,layerControlHide:!0}}),Me={args:{},render:()=>r`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#hidden"></eox-layercontrol>
      <eox-map
        id="hidden"
        .style=${o}
        .layers=${[Pe(u),t]}
      >
      </eox-map>
    </div>
  `},Ne={args:{idProperty:"id",titleProperty:"title",unstyled:!1,addExternalLayers:!0},render:e=>r`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${e.idProperty}
        .titleProperty=${e.titleProperty}
        .unstyled=${e.unstyled}
        .addExternalLayers=${e.addExternalLayers}
        for="eox-map"
      ></eox-layercontrol>
      <eox-map
        .style=${o}
        .zoom=${3}
        .layers=${f}
      ></eox-map>
    </div>
  `},h=(e,x)=>({...e,properties:{...e.properties,layerControlExclusive:!0},...x}),Ye={args:{showLayerZoomState:!0},render:e=>r`
    <div style="display: flex">
      <eox-layercontrol
        .showLayerZoomState=${e.showLayerZoomState}
        for="eox-map#zoomstate"
      ></eox-layercontrol>
      <eox-map
        id="zoomstate"
        .style=${o}
        .zoom=${1}
        .layers=${[h(u,{minZoom:2}),h(E.wind,{maxZoom:9})]}
      >
      </eox-map>
    </div>
  `},Ze={args:{unstyled:!0},render:e=>r`
    <div style="display: flex">
      <eox-layercontrol
        .unstyled=${e.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      <eox-map
        .style=${o}
        .zoom=${3}
        .layers=${f}
      ></eox-map>
    </div>
  `},we={title:"Elements/eox-layercontrol",tags:["autodocs"],component:"eox-layercontrol",parameters:{componentSubtitle:"Manage and configure OpenLayers map layers",layout:"centered"}},a=Te,s=be,l=Re,i=Ie,n=Ae,p=Ce,c=Me,d=Ne,y=Ye,m=Ze;var _,O,T,b,R;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:"PrimaryStory",...(T=(O=a.parameters)==null?void 0:O.docs)==null?void 0:T.source},description:{story:"Basic layercontrol setup.",...(R=(b=a.parameters)==null?void 0:b.docs)==null?void 0:R.description}}};var I,A,C,P,M;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:"ExclusiveLayersStory",...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.source},description:{story:"By adding the `layerControlExclusive` property to map layers,\nonly one of them at a time can be visualized.",...(M=(P=s.parameters)==null?void 0:P.docs)==null?void 0:M.description}}};var N,Y,Z,z,w;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:"OptionalLayersStory",...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:`By adding the \`layerControlOptional\` property to map layers,
they are not initially rendered in the layer list, but in a
selection interface. They can be added to the layer list manually.
Removing a layer puts it back into the optional list.`,...(w=(z=l.parameters)==null?void 0:z.docs)==null?void 0:w.description}}};var D,U,H,B,G;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:"ExpandedLayersStory",...(H=(U=i.parameters)==null?void 0:U.docs)==null?void 0:H.source},description:{story:"By adding the `layerControlExpand` property to map layers,\nthey render in the layer control as opened.",...(G=(B=i.parameters)==null?void 0:B.docs)==null?void 0:G.description}}};var W,X,j,k,V;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:"ToolsStory",...(j=(X=n.parameters)==null?void 0:X.docs)==null?void 0:j.source},description:{story:`The layer control accepts a "tools" array, which enable
extra functionalities for layers`,...(V=(k=n.parameters)==null?void 0:k.docs)==null?void 0:V.description}}};var F,J,q,K,Q;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:"LayerConfigStory",...(q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:q.source},description:{story:`The "config" tool reads settings passed via the "layerConfig" property,
e.g. rendering a from from a provided JSON schema that allows updating the
source url parameters.
Needs import of \`@eox/jsonform\` in order to work.`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var ee,re,oe,te,ae;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:"HiddenLayersStory",...(oe=(re=c.parameters)==null?void 0:re.docs)==null?void 0:oe.source},description:{story:"By adding the `layerControlHide` property to map layers,\nthey aren't displayed in the layer control at all (but may\nbe still rendered on the map).",...(ae=(te=c.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};var se,le,ie,ne,pe;d.parameters={...d.parameters,docs:{...(se=d.parameters)==null?void 0:se.docs,source:{originalSource:"addExternalLayerStory",...(ie=(le=d.parameters)==null?void 0:le.docs)==null?void 0:ie.source},description:{story:"Defining the configuration for adding an external layer like WMS/XYZ or import JSON.",...(pe=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:pe.description}}};var ce,de,ye,me,ue;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:"layerZoomStateStory",...(ye=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ye.source},description:{story:"Zoom layer state based on `minZoom` and `maxZoom`.\nThe color change state only visible when `showLayerZoomState` is set inside layer properties.",...(ue=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ue.description}}};var xe,Se,Ee,ge,Le;m.parameters={...m.parameters,docs:{...(xe=m.parameters)==null?void 0:xe.docs,source:{originalSource:"unstyledStory",...(Ee=(Se=m.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source},description:{story:"Unstyled version of the Element",...(Le=(ge=m.parameters)==null?void 0:ge.docs)==null?void 0:Le.description}}};const De=["Primary","ExclusiveLayers","OptionalLayers","ExpandedLayers","Tools","LayerConfig","HiddenLayers","AddExternalLayer","LayerZoomState","Unstyled"];export{d as AddExternalLayer,s as ExclusiveLayers,i as ExpandedLayers,c as HiddenLayers,p as LayerConfig,y as LayerZoomState,l as OptionalLayers,a as Primary,n as Tools,m as Unstyled,De as __namedExportsOrder,we as default};
