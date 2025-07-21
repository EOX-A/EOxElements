import{x as t}from"./lit-element-L04JKUcP.js";import"./main-CI09qXRu.js";import"./style-CJ_-LPRp.js";const ut={args:{center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}],zoom:7}},gt={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"#232323","stroke-width":1,"fill-color":["string",["get","COLOR"],"#eee"]}}]}},ht={args:{layers:[{type:"VectorTile",background:"#1a2b39",declutter:!0,properties:{id:"countries"},source:{type:"VectorTile",url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",format:"MVT",tileGrid:{}},style:{"fill-color":"yellow","stroke-color":"#232323","stroke-width":1}}]}},St={args:{center:[-10997148,4569099],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"}}],zoom:3}},ft={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTSCapabilities",url:"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",layer:"s2cloudless-2017"}}],zoom:5}},xt={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTS",url:"https://tiles.maps.eox.at/wmts",layer:"s2cloudless-2017_3857",style:"default",matrixSet:"GoogleMapsCompatible",tileGrid:{tileSize:[128,128]}}}],zoom:5}},bt={args:{center:[-10997148,4569099],layers:[{type:"Image",properties:{id:"regions"},source:{type:"ImageStatic",imageExtent:[-20037508342789244e-9,-15028131257091934e-9,20037508342789244e-9,15028131257091934e-9],url:"https://imgs.xkcd.com/comics/online_communities.png"}}],zoom:0}},Tt={args:{center:[-122.38,46.1],layers:[{type:"STAC",properties:{id:"stacLayer"},url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:7}},wt={args:{center:[3737055,1886786],layers:[{type:"WebGLTile",properties:{id:"geotiffLayer"},source:{type:"GeoTIFF",sources:[{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"}]}},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:8}},vt={args:{layers:[{type:"Group",properties:{id:"group"},layers:[{type:"Vector",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Group",properties:{id:"groupLayerInsideGroup"},layers:[{type:"Tile",properties:{id:"layerInsideGroupInsideGroup"},source:{type:"OSM"}}]}]}]}},kt={args:{controls:{Zoom:{},Attribution:{},FullScreen:{},OverviewMap:{layers:[{type:"Tile",properties:{id:"overviewMap"},source:{type:"OSM"}}]}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},Mt={args:{zoom:7,controls:{Geolocation:{tracking:!0,trackHeading:!0,centerWhenReady:!1,highAccuracy:!0,trackAccuracy:!0,style:{"circle-radius":10,"circle-fill-color":"red","circle-stroke-color":"white","circle-stroke-width":2}},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},At={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},Ct={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{type:"fullscreen",opacity:.2,spinnerSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="120 50" r="30" stroke-width="22" stroke="#cd4609" fill="none" cy="50" cx="50">
        <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.4s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
            </circle><g></g></g></svg>`},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},Lt={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"stroke-color":"red","stroke-width":3}}}}]}]}},It={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"red"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},Gt={args:{controls:{Attribution:{}},layers:[{type:"Vector",properties:{id:"clusterLayer"},interactions:[{type:"clusterExplode",options:{id:"clusterExplodeInteraction",maxZoom:10,fitOptions:{duration:300},style:{"circle-radius":12,"circle-fill-color":"#FFD700","circle-stroke-color":"rgba(255, 255, 255, 0.7)","circle-stroke-width":2,"text-font":"normal 16px","text-value":["get","NAME"],"text-fill-color":"#000","text-offset-y":1}}}],style:[{filter:[">",["get","features","length"],1],style:{"text-value":["to-string",["get","features","length"]],"circle-radius":12,"circle-fill-color":"#FFD700","circle-stroke-color":"rgba(255, 255, 255, 0.7)","circle-stroke-width":2,"text-font":"normal 16px","text-fill-color":"#000","text-offset-y":1}},{else:!0,style:{"circle-radius":12,"circle-fill-color":"#FFD700","circle-stroke-color":"rgba(255, 255, 255, 0.7)","circle-stroke-width":2,"text-font":"normal 16px","text-value":["get","NAME"],"text-fill-color":"#000","text-offset-y":1,"fill-color":"#FFD700","fill-opacity":.5,"stroke-color":"#eeeeee","stroke-width":2}}],source:{type:"Cluster",distance:55,attributions:'Map data © <a href="https://www.naturalearthdata.com">Natural Earth</a> | City points via <a href="https://github.com/drei01/geojson-world-cities">geojson-world-cities</a>',source:{type:"Vector",url:"https://raw.githubusercontent.com/drei01/geojson-world-cities/refs/heads/master/cities.geojson",format:"GeoJSON"}}},{type:"Tile",properties:{id:"OSM"},source:{type:"OSM"}}]}},Ot={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>t`
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
  `},Vt={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>t`
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
  `},zt={args:{config:{layers:[{type:"Vector",background:"lightgrey",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"darkgrey"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},render:e=>t`
    <eox-map
      id="highlightAndAnimate"
      style="width: 100%; height: 300px;"
      .config=${e.config}
      @loadend=${()=>{document.querySelector("eox-map#highlightAndAnimate").selectInteractions.selectInteraction.highlightById([664,795,789],{duration:400,padding:[50,50,50,50]})}}
    ></eox-map>
  `},$t={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}]},render:e=>t`
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
  `},jt={args:{layersA:[{type:"Tile",source:{type:"OSM"}}],layersB:[{type:"Tile",source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}}]},render:e=>t`
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
  `},Et={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9}}},render:e=>t`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},_t={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>t`
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
  `},Ft={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>t`
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
  `},Pt={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],animationOptions:{duration:500},center:[16.8,48.2],zoom:7},render:e=>t`
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
  `},Wt={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9},preventScroll:!0}},render:e=>t`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},Bt={args:{center:[16.346,48.182],zoom:12.5,layers:[{type:"Vector",properties:{id:"FlatGeoBufLayer",minZoom:12},source:{type:"FlatGeoBuf",url:"https://eox-gtif-public.s3.eu-central-1.amazonaws.com/admin_borders/STATISTIK_AUSTRIA_GEM_20220101.fgb"}},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}};customElements.define("custom-tooltip",class extends HTMLElement{constructor(){super()}set feature(e){this.innerHTML=`
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
    `}});const Rt={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>t`
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
  `},Zt={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map",render:e=>t`
    <eox-map
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    ></eox-map>
  `},r=ut,s=gt,a=ht,i=St,c=ft,n=Bt,p=xt,l=bt,d=Tt,m=wt,y=vt,u=kt,g=Mt,h=At,S=Ct,f=Lt,x=It,b=Gt,T=Ot,w=Vt,v=Rt,k=zt,M=$t,A=jt,O=Et,C=_t,L=Ft,I=Pt,G=Wt;var V,z,$,j,E;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:"PrimaryStory",...($=(z=r.parameters)==null?void 0:z.docs)==null?void 0:$.source},description:{story:"Basic map rendered using `eox-map` configuration",...(E=(j=r.parameters)==null?void 0:j.docs)==null?void 0:E.description}}};var _,F,P,W,B;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:"VectorLayerStory",...(P=(F=s.parameters)==null?void 0:F.docs)==null?void 0:P.source},description:{story:"Basic vector layer map rendered using `GeoJSON`",...(B=(W=s.parameters)==null?void 0:W.docs)==null?void 0:B.description}}};var R,H,N,J,Z;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:"VectorTileLayerStory",...(N=(H=a.parameters)==null?void 0:H.docs)==null?void 0:N.source},description:{story:"Basic vector layer map rendered using `MVT` tiles",...(Z=(J=a.parameters)==null?void 0:J.docs)==null?void 0:Z.description}}};var q,D,Y,Q,U;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:"WMSLayerStory",...(Y=(D=i.parameters)==null?void 0:D.docs)==null?void 0:Y.source},description:{story:"Renders WMS layer using geo-server",...(U=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:U.description}}};var K,X,ee,oe,te;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:"WMTSCapabilitiesLayerStory",...(ee=(X=c.parameters)==null?void 0:X.docs)==null?void 0:ee.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...(te=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:te.description}}};var re,se,ae,ie,ce;n.parameters={...n.parameters,docs:{...(re=n.parameters)==null?void 0:re.docs,source:{originalSource:"FlatGeoBufStory",...(ae=(se=n.parameters)==null?void 0:se.docs)==null?void 0:ae.source},description:{story:"Renders `FlatGeoBuf` layer",...(ce=(ie=n.parameters)==null?void 0:ie.docs)==null?void 0:ce.description}}};var ne,pe,le,de,me;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:"WMTSTileGridStory",...(le=(pe=p.parameters)==null?void 0:pe.docs)==null?void 0:le.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...(me=(de=p.parameters)==null?void 0:de.docs)==null?void 0:me.description}}};var ye,ue,ge,he,Se;l.parameters={...l.parameters,docs:{...(ye=l.parameters)==null?void 0:ye.docs,source:{originalSource:"StaticImageLayerStory",...(ge=(ue=l.parameters)==null?void 0:ue.docs)==null?void 0:ge.source},description:{story:"Renders a static image layer",...(Se=(he=l.parameters)==null?void 0:he.docs)==null?void 0:Se.description}}};var fe,xe,be,Te,we;d.parameters={...d.parameters,docs:{...(fe=d.parameters)==null?void 0:fe.docs,source:{originalSource:"STACLayerStory",...(be=(xe=d.parameters)==null?void 0:xe.docs)==null?void 0:be.source},description:{story:"Renders STAC Layer using STAC url json.",...(we=(Te=d.parameters)==null?void 0:Te.docs)==null?void 0:we.description}}};var ve,ke,Me,Ae,Ce;m.parameters={...m.parameters,docs:{...(ve=m.parameters)==null?void 0:ve.docs,source:{originalSource:"GeoTIFFLayerStory",...(Me=(ke=m.parameters)==null?void 0:ke.docs)==null?void 0:Me.source},description:{story:"Renders `GeoTIFF` layer as `WebGLTile`",...(Ce=(Ae=m.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.description}}};var Le,Ie,Ge,Oe,Ve;y.parameters={...y.parameters,docs:{...(Le=y.parameters)==null?void 0:Le.docs,source:{originalSource:"GroupLayerStory",...(Ge=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:Ge.source},description:{story:"Renders `Group` layer which contains multiple layers in a group",...(Ve=(Oe=y.parameters)==null?void 0:Oe.docs)==null?void 0:Ve.description}}};var ze,$e,je,Ee,_e;u.parameters={...u.parameters,docs:{...(ze=u.parameters)==null?void 0:ze.docs,source:{originalSource:"ControlsStory",...(je=($e=u.parameters)==null?void 0:$e.docs)==null?void 0:je.source},description:{story:"Renders different `Controls` for the `eox-map` using control config",...(_e=(Ee=u.parameters)==null?void 0:Ee.docs)==null?void 0:_e.description}}};var Fe,Pe,We,Be,Re;g.parameters={...g.parameters,docs:{...(Fe=g.parameters)==null?void 0:Fe.docs,source:{originalSource:"GeolocationStory",...(We=(Pe=g.parameters)==null?void 0:Pe.docs)==null?void 0:We.source},description:{story:"Renders Geolocation Control in `eox-map`",...(Re=(Be=g.parameters)==null?void 0:Be.docs)==null?void 0:Re.description}}};var He,Ne,Je,Ze,qe;h.parameters={...h.parameters,docs:{...(He=h.parameters)==null?void 0:He.docs,source:{originalSource:"StandardLoadingIndicatorStory",...(Je=(Ne=h.parameters)==null?void 0:Ne.docs)==null?void 0:Je.source},description:{story:"A simple, unobtrusive loading indicator in the bottom left that appears any time when the map is loading.",...(qe=(Ze=h.parameters)==null?void 0:Ze.docs)==null?void 0:qe.description}}};var De,Ye,Qe,Ue,Ke;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:"CustomFullScreenLoadingIndicatorStory",...(Qe=(Ye=S.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.source},description:{story:"Loading Indicators can also be centered over the entire map by setting the option `type` to `'fullscreen'`, adapting the opacity is adviced when doing so.",...(Ke=(Ue=S.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.description}}};var Xe,eo,oo,to,ro;f.parameters={...f.parameters,docs:{...(Xe=f.parameters)==null?void 0:Xe.docs,source:{originalSource:"HoverSelectStory",...(oo=(eo=f.parameters)==null?void 0:eo.docs)==null?void 0:oo.source},description:{story:"Renders `eox-map` with `Hover` interaction",...(ro=(to=f.parameters)==null?void 0:to.docs)==null?void 0:ro.description}}};var so,ao,io,co,no;x.parameters={...x.parameters,docs:{...(so=x.parameters)==null?void 0:so.docs,source:{originalSource:"ClickSelectStory",...(io=(ao=x.parameters)==null?void 0:ao.docs)==null?void 0:io.source},description:{story:"Renders `eox-map` with `Click` interaction",...(no=(co=x.parameters)==null?void 0:co.docs)==null?void 0:no.description}}};var po,lo,mo,yo,uo;b.parameters={...b.parameters,docs:{...(po=b.parameters)==null?void 0:po.docs,source:{originalSource:"ClusterExplodeStory",...(mo=(lo=b.parameters)==null?void 0:lo.docs)==null?void 0:mo.source},description:{story:"Renders `eox-map` with `Cluster-Explode` interaction",...(uo=(yo=b.parameters)==null?void 0:yo.docs)==null?void 0:uo.description}}};var go,ho,So,fo,xo;T.parameters={...T.parameters,docs:{...(go=T.parameters)==null?void 0:go.docs,source:{originalSource:"TooltipStory",...(So=(ho=T.parameters)==null?void 0:ho.docs)==null?void 0:So.source},description:{story:"`eox-map` offers a built-in tooltip, which needs to be placed inside the default slot:\n```\n<eox-map [...]>\n  <eox-map-tooltip></eox-map-tooltip>\n</eox-map>\n```\nThis renders a list of all feature properties of the currently selected feature.\nNote that if multiple interactions are registered (e.g. `pointermove` and `singleclick`),\nthe `pointermove` interaction will have higher priority for the tooltip.",...(xo=(fo=T.parameters)==null?void 0:fo.docs)==null?void 0:xo.description}}};var bo,To,wo,vo,ko;w.parameters={...w.parameters,docs:{...(bo=w.parameters)==null?void 0:bo.docs,source:{originalSource:"TooltipWithPropertyTransformStory",...(wo=(To=w.parameters)==null?void 0:To.docs)==null?void 0:wo.source},description:{story:'The rendering of feature properties inside the tooltip can be transformed\nby passing a `propertyTransform` function to the tooltip element which applies to each property in the rendering loop:\n```\n<eox-map [...]>\n  <eox-map-tooltip\n    .propertyTransform=${({key, value}, feature) => key.includes("COLOR") ? { key: key.toLowerCase(), value }}\n  ></eox-map-tooltip>\n</eox-map>\n```\n\nThe first argument are `key` and `value` of the current feature property; this object needs to be\nreturned in order to render the property in the list.\nAdditionally, the entire feature is passed as a second argument, for cases of more advanced property\ntransformation in which needs access to the entire feature.',...(ko=(vo=w.parameters)==null?void 0:vo.docs)==null?void 0:ko.description}}};var Mo,Ao,Co,Lo,Io;v.parameters={...v.parameters,docs:{...(Mo=v.parameters)==null?void 0:Mo.docs,source:{originalSource:"CustomTooltipStory",...(Co=(Ao=v.parameters)==null?void 0:Ao.docs)==null?void 0:Co.source},description:{story:'Instead of the built-in `eox-map-tooltip`, it is possible to use any other (custom) element as tooltip by setting the `is` attribute:\n```\n<eox-map [...]>\n  <custom-element is="eox-map-tooltip"></custom-element>\n</eox-map>\n```\n\nThis custom tooltip is updated each time a feature is selected by setting its `feature` property; it can also be updated manually by e.g. hooking into the `@select` event.',...(Io=(Lo=v.parameters)==null?void 0:Lo.docs)==null?void 0:Io.description}}};var Go,Oo,Vo,zo,$o;k.parameters={...k.parameters,docs:{...(Go=k.parameters)==null?void 0:Go.docs,source:{originalSource:"HighlightFeaturesAndAnimateStory",...(Vo=(Oo=k.parameters)==null?void 0:Oo.docs)==null?void 0:Vo.source},description:{story:"Select interactions offer a `highlightById` method, with which vector features can be programmatically selected via their id property.\nIt expects an array with a list of ids to be selected.\nOptionally, passing a second argument allows to set the [`fitOptions`](https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions),\nadding view animation to the selection.",...($o=(zo=k.parameters)==null?void 0:zo.docs)==null?void 0:$o.description}}};var jo,Eo,_o,Fo,Po;M.parameters={...M.parameters,docs:{...(jo=M.parameters)==null?void 0:jo.docs,source:{originalSource:"MapSyncStory",...(_o=(Eo=M.parameters)==null?void 0:Eo.docs)==null?void 0:_o.source},description:{story:'Sync the views of two maps using the `sync` attribute (e.g. `sync="eox-map#a"`).',...(Po=(Fo=M.parameters)==null?void 0:Fo.docs)==null?void 0:Po.description}}};var Wo,Bo,Ro,Ho,No;A.parameters={...A.parameters,docs:{...(Wo=A.parameters)==null?void 0:Wo.docs,source:{originalSource:"ABCompareStory",...(Ro=(Bo=A.parameters)==null?void 0:Bo.docs)==null?void 0:Ro.source},description:{story:'To compare two maps, wrap them in an `<eox-map-compare>` element and assign them to the slot `first` and `second`.\nAlso use the `sync` attribute so both move their view together.\n\n`eox-map-compare` also takes a `value` property (0 - 100) which determines the position of the comparison slider;\nand an `enabled` attribute, which can be either `"first"` (only left map visible), `"second"` (only second map visible)\nor `undefined` (default, both visible).',...(No=(Ho=A.parameters)==null?void 0:Ho.docs)==null?void 0:No.description}}};var Jo,Zo,qo;O.parameters={...O.parameters,docs:{...(Jo=O.parameters)==null?void 0:Jo.docs,source:{originalSource:"ConfigObjectStory",...(qo=(Zo=O.parameters)==null?void 0:Zo.docs)==null?void 0:qo.source}}};var Do,Yo,Qo,Uo,Ko;C.parameters={...C.parameters,docs:{...(Do=C.parameters)==null?void 0:Do.docs,source:{originalSource:"ProjectionStory",...(Qo=(Yo=C.parameters)==null?void 0:Yo.docs)==null?void 0:Qo.source},description:{story:"The projection of the view can be changed via the `projection`-attribute.\nOut-of-the-box the projections EPSG:3857 (default) and EPSG:4326 (geographic coordinates)\nare included, additional projections can be used by registering them via the `registerProjection` or\n`registerProjectionFromCode` helper functions beforehand.",...(Ko=(Uo=C.parameters)==null?void 0:Uo.docs)==null?void 0:Ko.description}}};var Xo,et,ot,tt,rt;L.parameters={...L.parameters,docs:{...(Xo=L.parameters)==null?void 0:Xo.docs,source:{originalSource:"ProjectionTransformStory",...(ot=(et=L.parameters)==null?void 0:et.docs)==null?void 0:ot.source},description:{story:"With the convenience functions `transform` and `transformExtent` it is possible to transform coordinates\nand extents from any projection to EPSG.4326 (default) or any other projection.\nBasically, these methods are the `ol/proj` [transform](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transform)\nand [transformExtent](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transformExtent) functions,\nwith the small adaptation that the destination defaults to EPSG:4326 if not defined.",...(rt=(tt=L.parameters)==null?void 0:tt.docs)==null?void 0:rt.description}}};var st,at,it,ct,nt;I.parameters={...I.parameters,docs:{...(st=I.parameters)==null?void 0:st.docs,source:{originalSource:"AnimationsStory",...(it=(at=I.parameters)==null?void 0:at.docs)==null?void 0:it.source},description:{story:"changing the properties `zoom`, `center` or `zoomExtent` will trigger animations, if the\n`animationOptions`-property is set.\nanimation options for `zoom` or `center`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~AnimationOptions\nanimation options for `zoomExtent`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions",...(nt=(ct=I.parameters)==null?void 0:ct.docs)==null?void 0:nt.description}}};var pt,lt,dt,mt,yt;G.parameters={...G.parameters,docs:{...(pt=G.parameters)==null?void 0:pt.docs,source:{originalSource:"PreventScrollStory",...(dt=(lt=G.parameters)==null?void 0:lt.docs)==null?void 0:dt.source},description:{story:"By setting the `prevent-scroll` attribute or by setting `preventScroll` property to `true` (either on the element or within the config object),\nthe map doesnt mouse-scroll (on desktop) or drag-touch (on tab/mobile). Pressing the platform modifier key (ctrl/cmd) will enable scrolling.\nUseful for maps embedded in scrollable websites.",...(yt=(mt=G.parameters)==null?void 0:mt.docs)==null?void 0:yt.description}}};const qt=["Primary","VectorLayer","VectorTileLayer","WMSLayer","WMTSCapabilitiesLayer","FlatGeoBuf","WMTSTileGrid","StaticImage","STACLayer","GeoTIFFLayer","GroupLayer","Controls","Geolocation","StandardLoadingIndicator","CustomFullScreenLoadingIndicator","HoverSelect","ClickSelect","ClusterExplode","Tooltip","TooltipWithPropertyTransform","CustomTooltip","HighlightFeaturesAndAnimate","MapSync","ABCompare","ConfigObject","Projection","ProjectionTransform","Animations","PreventScroll"];export{A as ABCompare,I as Animations,x as ClickSelect,b as ClusterExplode,O as ConfigObject,u as Controls,S as CustomFullScreenLoadingIndicator,v as CustomTooltip,n as FlatGeoBuf,m as GeoTIFFLayer,g as Geolocation,y as GroupLayer,k as HighlightFeaturesAndAnimate,f as HoverSelect,M as MapSync,G as PreventScroll,r as Primary,C as Projection,L as ProjectionTransform,d as STACLayer,h as StandardLoadingIndicator,l as StaticImage,T as Tooltip,w as TooltipWithPropertyTransform,s as VectorLayer,a as VectorTileLayer,i as WMSLayer,c as WMTSCapabilitiesLayer,p as WMTSTileGrid,qt as __namedExportsOrder,Zt as default};
