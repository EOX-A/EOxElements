import{x as t}from"./lit-element-L04JKUcP.js";import"./main-jb6sKcXN.js";import"./style-CJ_-LPRp.js";const ct={args:{center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}],zoom:7}},pt={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"#232323","stroke-width":1,"fill-color":["string",["get","COLOR"],"#eee"]}}]}},lt={args:{layers:[{type:"VectorTile",background:"#1a2b39",declutter:!0,properties:{id:"countries"},source:{type:"VectorTile",url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",format:"MVT",tileGrid:{}},style:{"fill-color":"yellow","stroke-color":"#232323","stroke-width":1}}]}},dt={args:{center:[-10997148,4569099],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"}}],zoom:3}},mt={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTSCapabilities",url:"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",layer:"s2cloudless-2017"}}],zoom:5}},yt={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTS",url:"https://tiles.maps.eox.at/wmts",layer:"s2cloudless-2017_3857",style:"default",matrixSet:"GoogleMapsCompatible",tileGrid:{tileSize:[128,128]}}}],zoom:5}},ut={args:{center:[-10997148,4569099],layers:[{type:"Image",properties:{id:"regions"},source:{type:"ImageStatic",imageExtent:[-20037508342789244e-9,-15028131257091934e-9,20037508342789244e-9,15028131257091934e-9],url:"https://imgs.xkcd.com/comics/online_communities.png"}}],zoom:0}},gt={args:{center:[-122.38,46.1],layers:[{type:"STAC",properties:{id:"stacLayer"},url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:7}},ht={args:{center:[3737055,1886786],layers:[{type:"WebGLTile",properties:{id:"geotiffLayer"},source:{type:"GeoTIFF",sources:[{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"}]}},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:8}},St={args:{layers:[{type:"Group",properties:{id:"group"},layers:[{type:"Vector",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Group",properties:{id:"groupLayerInsideGroup"},layers:[{type:"Tile",properties:{id:"layerInsideGroupInsideGroup"},source:{type:"OSM"}}]}]}]}},ft={args:{controls:{Zoom:{},Attribution:{},FullScreen:{},OverviewMap:{layers:[{type:"Tile",properties:{id:"overviewMap"},source:{type:"OSM"}}]}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},xt={args:{zoom:7,controls:{Geolocation:{tracking:!0,trackHeading:!0,centerWhenReady:!1,highAccuracy:!0,trackAccuracy:!0,style:{"circle-radius":10,"circle-fill-color":"red","circle-stroke-color":"white","circle-stroke-width":2}},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},Tt={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},bt={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{type:"fullscreen",opacity:.2,spinnerSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="120 50" r="30" stroke-width="22" stroke="#cd4609" fill="none" cy="50" cx="50">
        <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.4s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
            </circle><g></g></g></svg>`},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},wt={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"stroke-color":"red","stroke-width":3}}}}]}]}},vt={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"red"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},Mt={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>t`
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
  `},kt={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>t`
    <eox-map
      id="tooltipTest"
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    >
      <eox-map-tooltip
        .propertyTransform=${o=>{if(o.key.includes("COLOR"))return{key:o.key.toLowerCase(),value:o.value}}}
      ></eox-map-tooltip>
    </eox-map>
  `},At={args:{config:{layers:[{type:"Vector",background:"lightgrey",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"darkgrey"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},render:e=>t`
    <eox-map
      id="highlightAndAnimate"
      style="width: 100%; height: 300px;"
      .config=${e.config}
      @loadend=${()=>{document.querySelector("eox-map#highlightAndAnimate").selectInteractions.selectInteraction.highlightById([664,795,789],{duration:400,padding:[50,50,50,50]})}}
    ></eox-map>
  `},Lt={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}]},render:e=>t`
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
  `},Ct={args:{layersA:[{type:"Tile",source:{type:"OSM"}}],layersB:[{type:"Tile",source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}}]},render:e=>t`
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
  `},It={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9}}},render:e=>t`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},Gt={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>t`
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
  `},Ot={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>t`
    <eox-map
      id="transformMap"
      style="width: 100%; height: 300px; display: none"
      .center=${e.center}
      .controls=${e.controls}
      .zoom=${e.zoom}
    >
    </eox-map>
    <button
      @click=${()=>{const o=document.querySelector("#transformMap");o.registerProjection("ESRI:53009","+proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6371000 +b=6371000 +units=m +no_defs"),alert(o.transform([991693,1232660],"ESRI:53009"))}}
    >
      Transform [991693, 1232660] ("ESRI:53009")
    </button>
  `},zt={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],animationOptions:{duration:500},center:[16.8,48.2],zoom:7},render:e=>t`
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
  `},$t={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9},preventScroll:!0}},render:e=>t`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},Vt={args:{center:[16.346,48.182],zoom:12.5,layers:[{type:"Vector",properties:{id:"FlatGeoBufLayer",minZoom:12},source:{type:"FlatGeoBuf",url:"https://eox-gtif-public.s3.eu-central-1.amazonaws.com/admin_borders/STATISTIK_AUSTRIA_GEM_20220101.fgb"}},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}};customElements.define("custom-tooltip",class extends HTMLElement{constructor(){super()}set feature(e){this.innerHTML=`
      <div class="surface-container-lowest large-padding small-round large-elevate">
        <h6 class="small bold">${e.get("ECO_NAME")}</h6>
        <hr class="medium" style="background-color: ${e.get("COLOR_BIO")};" />
        <p class="small-text">
          <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-outline</title><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /></svg></i>
          ${e.get("BIOME_NAME")}
        </p>
        <p class="small-text">
          <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>earth</title><path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg></i>
          ${e.get("REALM")}
        </p>
      </div>
    `}});const jt={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>t`
    <eox-map
      id="customTooltip"
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    >
      <custom-tooltip is="eox-map-tooltip"></custom-tooltip>
    </eox-map>
  `},Wt={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map",render:e=>t`
    <eox-map
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    ></eox-map>
  `},r=ct,s=pt,a=lt,i=dt,n=mt,c=Vt,p=yt,l=ut,d=gt,m=ht,y=St,u=ft,g=xt,h=Tt,S=bt,f=wt,x=vt,T=Mt,b=kt,w=jt,v=At,M=Lt,k=Ct,G=It,A=Gt,L=Ot,C=zt,I=$t;var O,z,$,V,j;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:"PrimaryStory",...($=(z=r.parameters)==null?void 0:z.docs)==null?void 0:$.source},description:{story:"Basic map rendered using `eox-map` configuration",...(j=(V=r.parameters)==null?void 0:V.docs)==null?void 0:j.description}}};var _,E,P,W,B;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:"VectorLayerStory",...(P=(E=s.parameters)==null?void 0:E.docs)==null?void 0:P.source},description:{story:"Basic vector layer map rendered using `GeoJSON`",...(B=(W=s.parameters)==null?void 0:W.docs)==null?void 0:B.description}}};var F,R,H,N,J;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:"VectorTileLayerStory",...(H=(R=a.parameters)==null?void 0:R.docs)==null?void 0:H.source},description:{story:"Basic vector layer map rendered using `MVT` tiles",...(J=(N=a.parameters)==null?void 0:N.docs)==null?void 0:J.description}}};var Z,q,D,Y,Q;i.parameters={...i.parameters,docs:{...(Z=i.parameters)==null?void 0:Z.docs,source:{originalSource:"WMSLayerStory",...(D=(q=i.parameters)==null?void 0:q.docs)==null?void 0:D.source},description:{story:"Renders WMS layer using geo-server",...(Q=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:Q.description}}};var U,K,X,ee,oe;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:"WMTSCapabilitiesLayerStory",...(X=(K=n.parameters)==null?void 0:K.docs)==null?void 0:X.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...(oe=(ee=n.parameters)==null?void 0:ee.docs)==null?void 0:oe.description}}};var te,re,se,ae,ie;c.parameters={...c.parameters,docs:{...(te=c.parameters)==null?void 0:te.docs,source:{originalSource:"FlatGeoBufStory",...(se=(re=c.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:"Renders `FlatGeoBuf` layer",...(ie=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:ie.description}}};var ne,ce,pe,le,de;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:"WMTSTileGridStory",...(pe=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:pe.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...(de=(le=p.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};var me,ye,ue,ge,he;l.parameters={...l.parameters,docs:{...(me=l.parameters)==null?void 0:me.docs,source:{originalSource:"StaticImageLayerStory",...(ue=(ye=l.parameters)==null?void 0:ye.docs)==null?void 0:ue.source},description:{story:"Renders a static image layer",...(he=(ge=l.parameters)==null?void 0:ge.docs)==null?void 0:he.description}}};var Se,fe,xe,Te,be;d.parameters={...d.parameters,docs:{...(Se=d.parameters)==null?void 0:Se.docs,source:{originalSource:"STACLayerStory",...(xe=(fe=d.parameters)==null?void 0:fe.docs)==null?void 0:xe.source},description:{story:"Renders STAC Layer using STAC url json.",...(be=(Te=d.parameters)==null?void 0:Te.docs)==null?void 0:be.description}}};var we,ve,Me,ke,Ae;m.parameters={...m.parameters,docs:{...(we=m.parameters)==null?void 0:we.docs,source:{originalSource:"GeoTIFFLayerStory",...(Me=(ve=m.parameters)==null?void 0:ve.docs)==null?void 0:Me.source},description:{story:"Renders `GeoTIFF` layer as `WebGLTile`",...(Ae=(ke=m.parameters)==null?void 0:ke.docs)==null?void 0:Ae.description}}};var Le,Ce,Ie,Ge,Oe;y.parameters={...y.parameters,docs:{...(Le=y.parameters)==null?void 0:Le.docs,source:{originalSource:"GroupLayerStory",...(Ie=(Ce=y.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source},description:{story:"Renders `Group` layer which contains multiple layers in a group",...(Oe=(Ge=y.parameters)==null?void 0:Ge.docs)==null?void 0:Oe.description}}};var ze,$e,Ve,je,_e;u.parameters={...u.parameters,docs:{...(ze=u.parameters)==null?void 0:ze.docs,source:{originalSource:"ControlsStory",...(Ve=($e=u.parameters)==null?void 0:$e.docs)==null?void 0:Ve.source},description:{story:"Renders different `Controls` for the `eox-map` using control config",...(_e=(je=u.parameters)==null?void 0:je.docs)==null?void 0:_e.description}}};var Ee,Pe,We,Be,Fe;g.parameters={...g.parameters,docs:{...(Ee=g.parameters)==null?void 0:Ee.docs,source:{originalSource:"GeolocationStory",...(We=(Pe=g.parameters)==null?void 0:Pe.docs)==null?void 0:We.source},description:{story:"Renders Geolocation Control in `eox-map`",...(Fe=(Be=g.parameters)==null?void 0:Be.docs)==null?void 0:Fe.description}}};var Re,He,Ne,Je,Ze;h.parameters={...h.parameters,docs:{...(Re=h.parameters)==null?void 0:Re.docs,source:{originalSource:"StandardLoadingIndicatorStory",...(Ne=(He=h.parameters)==null?void 0:He.docs)==null?void 0:Ne.source},description:{story:"A simple, unobtrusive loading indicator in the bottom left that appears any time when the map is loading.",...(Ze=(Je=h.parameters)==null?void 0:Je.docs)==null?void 0:Ze.description}}};var qe,De,Ye,Qe,Ue;S.parameters={...S.parameters,docs:{...(qe=S.parameters)==null?void 0:qe.docs,source:{originalSource:"CustomFullScreenLoadingIndicatorStory",...(Ye=(De=S.parameters)==null?void 0:De.docs)==null?void 0:Ye.source},description:{story:"Loading Indicators can also be centered over the entire map by setting the option `type` to `'fullscreen'`, adapting the opacity is adviced when doing so.",...(Ue=(Qe=S.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.description}}};var Ke,Xe,eo,oo,to;f.parameters={...f.parameters,docs:{...(Ke=f.parameters)==null?void 0:Ke.docs,source:{originalSource:"HoverSelectStory",...(eo=(Xe=f.parameters)==null?void 0:Xe.docs)==null?void 0:eo.source},description:{story:"Renders `eox-map` with `Hover` interaction",...(to=(oo=f.parameters)==null?void 0:oo.docs)==null?void 0:to.description}}};var ro,so,ao,io,no;x.parameters={...x.parameters,docs:{...(ro=x.parameters)==null?void 0:ro.docs,source:{originalSource:"ClickSelectStory",...(ao=(so=x.parameters)==null?void 0:so.docs)==null?void 0:ao.source},description:{story:"Renders `eox-map` with `Click` interaction",...(no=(io=x.parameters)==null?void 0:io.docs)==null?void 0:no.description}}};var co,po,lo,mo,yo;T.parameters={...T.parameters,docs:{...(co=T.parameters)==null?void 0:co.docs,source:{originalSource:"TooltipStory",...(lo=(po=T.parameters)==null?void 0:po.docs)==null?void 0:lo.source},description:{story:"`eox-map` offers a built-in tooltip, which needs to be placed inside the default slot:\n```\n<eox-map [...]>\n  <eox-map-tooltip></eox-map-tooltip>\n</eox-map>\n```\nThis renders a list of all feature properties of the currently selected feature.\nNote that if multiple interactions are registered (e.g. `pointermove` and `singleclick`),\nthe `pointermove` interaction will have higher priority for the tooltip.",...(yo=(mo=T.parameters)==null?void 0:mo.docs)==null?void 0:yo.description}}};var uo,go,ho,So,fo;b.parameters={...b.parameters,docs:{...(uo=b.parameters)==null?void 0:uo.docs,source:{originalSource:"TooltipWithPropertyTransformStory",...(ho=(go=b.parameters)==null?void 0:go.docs)==null?void 0:ho.source},description:{story:'The rendering of feature properties inside the tooltip can be transformed\nby passing a `propertyTransform` function to the tooltip element which applies to each property in the rendering loop:\n```\n<eox-map [...]>\n  <eox-map-tooltip\n    .propertyTransform=${({key, value}, feature) => key.includes("COLOR") ? { key: key.toLowerCase(), value }}\n  ></eox-map-tooltip>\n</eox-map>\n```\n\nThe first argument are `key` and `value` of the current feature property; this object needs to be\nreturned in order to render the property in the list.\nAdditionally, the entire feature is passed as a second argument, for cases of more advanced property\ntransformation in which needs access to the entire feature.',...(fo=(So=b.parameters)==null?void 0:So.docs)==null?void 0:fo.description}}};var xo,To,bo,wo,vo;w.parameters={...w.parameters,docs:{...(xo=w.parameters)==null?void 0:xo.docs,source:{originalSource:"CustomTooltipStory",...(bo=(To=w.parameters)==null?void 0:To.docs)==null?void 0:bo.source},description:{story:'Instead of the built-in `eox-map-tooltip`, it is possible to use any other (custom) element as tooltip by setting the `is` attribute:\n```\n<eox-map [...]>\n  <custom-element is="eox-map-tooltip"></custom-element>\n</eox-map>\n```\n\nThis custom tooltip is updated each time a feature is selected by setting its `feature` property; it can also be updated manually by e.g. hooking into the `@select` event.',...(vo=(wo=w.parameters)==null?void 0:wo.docs)==null?void 0:vo.description}}};var Mo,ko,Ao,Lo,Co;v.parameters={...v.parameters,docs:{...(Mo=v.parameters)==null?void 0:Mo.docs,source:{originalSource:"HighlightFeaturesAndAnimateStory",...(Ao=(ko=v.parameters)==null?void 0:ko.docs)==null?void 0:Ao.source},description:{story:"Select interactions offer a `highlightById` method, with which vector features can be programmatically selected via their id property.\nIt expects an array with a list of ids to be selected.\nOptionally, passing a second argument allows to set the [`fitOptions`](https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions),\nadding view animation to the selection.",...(Co=(Lo=v.parameters)==null?void 0:Lo.docs)==null?void 0:Co.description}}};var Io,Go,Oo,zo,$o;M.parameters={...M.parameters,docs:{...(Io=M.parameters)==null?void 0:Io.docs,source:{originalSource:"MapSyncStory",...(Oo=(Go=M.parameters)==null?void 0:Go.docs)==null?void 0:Oo.source},description:{story:'Sync the views of two maps using the `sync` attribute (e.g. `sync="eox-map#a"`).',...($o=(zo=M.parameters)==null?void 0:zo.docs)==null?void 0:$o.description}}};var Vo,jo,_o,Eo,Po;k.parameters={...k.parameters,docs:{...(Vo=k.parameters)==null?void 0:Vo.docs,source:{originalSource:"ABCompareStory",...(_o=(jo=k.parameters)==null?void 0:jo.docs)==null?void 0:_o.source},description:{story:'To compare two maps, wrap them in an `<eox-map-compare>` element and assign them to the slot `first` and `second`.\nAlso use the `sync` attribute so both move their view together.\n\n`eox-map-compare` also takes a `value` property (0 - 100) which determines the position of the comparison slider;\nand an `enabled` attribute, which can be either `"first"` (only left map visible), `"second"` (only second map visible)\nor `undefined` (default, both visible).',...(Po=(Eo=k.parameters)==null?void 0:Eo.docs)==null?void 0:Po.description}}};var Wo,Bo,Fo;G.parameters={...G.parameters,docs:{...(Wo=G.parameters)==null?void 0:Wo.docs,source:{originalSource:"ConfigObjectStory",...(Fo=(Bo=G.parameters)==null?void 0:Bo.docs)==null?void 0:Fo.source}}};var Ro,Ho,No,Jo,Zo;A.parameters={...A.parameters,docs:{...(Ro=A.parameters)==null?void 0:Ro.docs,source:{originalSource:"ProjectionStory",...(No=(Ho=A.parameters)==null?void 0:Ho.docs)==null?void 0:No.source},description:{story:"The projection of the view can be changed via the `projection`-attribute.\nOut-of-the-box the projections EPSG:3857 (default) and EPSG:4326 (geographic coordinates)\nare included, additional projections can be used by registering them via the `registerProjection` or\n`registerProjectionFromCode` helper functions beforehand.",...(Zo=(Jo=A.parameters)==null?void 0:Jo.docs)==null?void 0:Zo.description}}};var qo,Do,Yo,Qo,Uo;L.parameters={...L.parameters,docs:{...(qo=L.parameters)==null?void 0:qo.docs,source:{originalSource:"ProjectionTransformStory",...(Yo=(Do=L.parameters)==null?void 0:Do.docs)==null?void 0:Yo.source},description:{story:"With the convenience functions `transform` and `transformExtent` it is possible to transform coordinates\nand extents from any projection to EPSG.4326 (default) or any other projection.\nBasically, these methods are the `ol/proj` [transform](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transform)\nand [transformExtent](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transformExtent) functions,\nwith the small adaptation that the destination defaults to EPSG:4326 if not defined.",...(Uo=(Qo=L.parameters)==null?void 0:Qo.docs)==null?void 0:Uo.description}}};var Ko,Xo,et,ot,tt;C.parameters={...C.parameters,docs:{...(Ko=C.parameters)==null?void 0:Ko.docs,source:{originalSource:"AnimationsStory",...(et=(Xo=C.parameters)==null?void 0:Xo.docs)==null?void 0:et.source},description:{story:"changing the properties `zoom`, `center` or `zoomExtent` will trigger animations, if the\n`animationOptions`-property is set.\nanimation options for `zoom` or `center`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~AnimationOptions\nanimation options for `zoomExtent`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions",...(tt=(ot=C.parameters)==null?void 0:ot.docs)==null?void 0:tt.description}}};var rt,st,at,it,nt;I.parameters={...I.parameters,docs:{...(rt=I.parameters)==null?void 0:rt.docs,source:{originalSource:"PreventScrollStory",...(at=(st=I.parameters)==null?void 0:st.docs)==null?void 0:at.source},description:{story:"By setting the `prevent-scroll` attribute or by setting `preventScroll` property to `true` (either on the element or within the config object),\nthe map doesnt mouse-scroll (on desktop) or drag-touch (on tab/mobile). Pressing the platform modifier key (ctrl/cmd) will enable scrolling.\nUseful for maps embedded in scrollable websites.",...(nt=(it=I.parameters)==null?void 0:it.docs)==null?void 0:nt.description}}};const Bt=["Primary","VectorLayer","VectorTileLayer","WMSLayer","WMTSCapabilitiesLayer","FlatGeoBuf","WMTSTileGrid","StaticImage","STACLayer","GeoTIFFLayer","GroupLayer","Controls","Geolocation","StandardLoadingIndicator","CustomFullScreenLoadingIndicator","HoverSelect","ClickSelect","Tooltip","TooltipWithPropertyTransform","CustomTooltip","HighlightFeaturesAndAnimate","MapSync","ABCompare","ConfigObject","Projection","ProjectionTransform","Animations","PreventScroll"];export{k as ABCompare,C as Animations,x as ClickSelect,G as ConfigObject,u as Controls,S as CustomFullScreenLoadingIndicator,w as CustomTooltip,c as FlatGeoBuf,m as GeoTIFFLayer,g as Geolocation,y as GroupLayer,v as HighlightFeaturesAndAnimate,f as HoverSelect,M as MapSync,I as PreventScroll,r as Primary,A as Projection,L as ProjectionTransform,d as STACLayer,h as StandardLoadingIndicator,l as StaticImage,T as Tooltip,b as TooltipWithPropertyTransform,s as VectorLayer,a as VectorTileLayer,i as WMSLayer,n as WMTSCapabilitiesLayer,p as WMTSTileGrid,Bt as __namedExportsOrder,Wt as default};
