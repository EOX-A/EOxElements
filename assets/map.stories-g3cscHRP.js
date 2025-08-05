import{x as t}from"./lit-element-L04JKUcP.js";import"./main-et_UZKdf.js";import"./style-CJ_-LPRp.js";const bt={args:{center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}],zoom:7}},Tt={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"#232323","stroke-width":1,"fill-color":["string",["get","COLOR"],"#eee"]}}]}},wt={args:{layers:[{type:"VectorTile",background:"#1a2b39",declutter:!0,properties:{id:"countries"},source:{type:"VectorTile",url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",format:"MVT",tileGrid:{}},style:{"fill-color":"yellow","stroke-color":"#232323","stroke-width":1}}]}},vt={args:{center:[-10997148,4569099],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"}}],zoom:3}},Mt={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTSCapabilities",url:"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",layer:"s2cloudless-2017"}}],zoom:5}},kt={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTS",url:"https://tiles.maps.eox.at/wmts",layer:"s2cloudless-2017_3857",style:"default",matrixSet:"GoogleMapsCompatible",tileGrid:{tileSize:[128,128]}}}],zoom:5}},At={args:{center:[-10997148,4569099],layers:[{type:"Image",properties:{id:"regions"},source:{type:"ImageStatic",imageExtent:[-20037508342789244e-9,-15028131257091934e-9,20037508342789244e-9,15028131257091934e-9],url:"https://imgs.xkcd.com/comics/online_communities.png"}}],zoom:0}},Ct={args:{center:[-122.38,46.1],layers:[{type:"STAC",properties:{id:"stacLayer"},url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:7}},Lt={args:{center:[0,0],layers:[{type:"MapboxStyle",properties:{id:"mapboxStyleGroup",title:"mapboxStyleGroup",mapboxStyle:{version:8,sources:{osm:{type:"raster",tiles:["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],tileSize:256,attribution:"© OpenStreetMap contributors"},pointSource:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]},properties:{}}]}}},layers:[{id:"osm-base",type:"raster",source:"osm",minzoom:0,maxzoom:19},{id:"point-halo",type:"circle",source:"pointSource",paint:{"circle-radius":10,"circle-color":"#0000ff","circle-opacity":.5}},{id:"point-main",type:"circle",source:"pointSource",paint:{"circle-radius":5,"circle-color":"#ff0000"}}]}}}],zoom:0}},It={args:{center:[3737055,1886786],layers:[{type:"WebGLTile",properties:{id:"geotiffLayer"},source:{type:"GeoTIFF",sources:[{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"}]}},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:8}},Ot={args:{layers:[{type:"Group",properties:{id:"group"},layers:[{type:"Vector",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Group",properties:{id:"groupLayerInsideGroup"},layers:[{type:"Tile",properties:{id:"layerInsideGroupInsideGroup"},source:{type:"OSM"}}]}]}]}},Gt={args:{controls:{Zoom:{},Attribution:{},FullScreen:{},OverviewMap:{layers:[{type:"Tile",properties:{id:"overviewMap"},source:{type:"OSM"}}]}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},zt={args:{zoom:7,controls:{Geolocation:{tracking:!0,trackHeading:!0,centerWhenReady:!1,highAccuracy:!0,trackAccuracy:!0,style:{"circle-radius":10,"circle-fill-color":"red","circle-stroke-color":"white","circle-stroke-width":2}},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},jt={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},Vt={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{type:"fullscreen",opacity:.2,spinnerSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="120 50" r="30" stroke-width="22" stroke="#cd4609" fill="none" cy="50" cx="50">
        <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.4s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
            </circle><g></g></g></svg>`},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},$t={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"stroke-color":"red","stroke-width":3}}}}]}]}},Et={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"red"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},_t={args:{controls:{Attribution:{}},layers:[{type:"Vector",properties:{id:"clusterLayer"},interactions:[{type:"clusterExplode",options:{id:"clusterExplodeInteraction",maxZoom:10,fitOptions:{duration:300},style:{"circle-radius":12,"circle-fill-color":"#FFD700","circle-stroke-color":"rgba(255, 255, 255, 0.7)","circle-stroke-width":2,"text-font":"normal 16px","text-value":["get","NAME"],"text-fill-color":"#000","text-offset-y":1}}}],style:[{filter:[">",["get","features","length"],1],style:{"text-value":["to-string",["get","features","length"]],"circle-radius":12,"circle-fill-color":"#FFD700","circle-stroke-color":"rgba(255, 255, 255, 0.7)","circle-stroke-width":2,"text-font":"normal 16px","text-fill-color":"#000","text-offset-y":1}},{else:!0,style:{"circle-radius":12,"circle-fill-color":"#FFD700","circle-stroke-color":"rgba(255, 255, 255, 0.7)","circle-stroke-width":2,"text-font":"normal 16px","text-value":["get","NAME"],"text-fill-color":"#000","text-offset-y":1,"fill-color":"#FFD700","fill-opacity":.5,"stroke-color":"#eeeeee","stroke-width":2}}],source:{type:"Cluster",distance:55,attributions:'Map data © <a href="https://www.naturalearthdata.com">Natural Earth</a> | City points via <a href="https://github.com/drei01/geojson-world-cities">geojson-world-cities</a>',source:{type:"Vector",url:"https://raw.githubusercontent.com/drei01/geojson-world-cities/refs/heads/master/cities.geojson",format:"GeoJSON"}}},{type:"Tile",properties:{id:"OSM"},source:{type:"OSM"}}]}},Ft={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>t`
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
  `},Pt={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>t`
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
  `},Wt={args:{config:{layers:[{type:"Vector",background:"lightgrey",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"darkgrey"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},render:e=>t`
    <eox-map
      id="highlightAndAnimate"
      style="width: 100%; height: 300px;"
      .config=${e.config}
      @loadend=${()=>{document.querySelector("eox-map#highlightAndAnimate").selectInteractions.selectInteraction.highlightById([664,795,789],{duration:400,padding:[50,50,50,50]})}}
    ></eox-map>
  `},Rt={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}]},render:e=>t`
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
  `},Bt={args:{layersA:[{type:"Tile",source:{type:"OSM"}}],layersB:[{type:"Tile",source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}}]},render:e=>t`
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
  `},Ht={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9}}},render:e=>t`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},Nt={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>t`
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
  `},Jt={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>t`
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
  `},Zt={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],animationOptions:{duration:500},center:[16.8,48.2],zoom:7},render:e=>t`
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
  `},qt={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9},preventScroll:!0}},render:e=>t`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},Dt={args:{center:[16.346,48.182],zoom:12.5,layers:[{type:"Vector",properties:{id:"FlatGeoBufLayer",minZoom:12},source:{type:"FlatGeoBuf",url:"https://eox-gtif-public.s3.eu-central-1.amazonaws.com/admin_borders/STATISTIK_AUSTRIA_GEM_20220101.fgb"}},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}};customElements.define("custom-tooltip",class extends HTMLElement{constructor(){super()}set feature(e){this.innerHTML=`
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
    `}});const Ut={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>t`
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
  `},Xt={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map",render:e=>t`
    <eox-map
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    ></eox-map>
  `},r=bt,s=Tt,a=wt,i=vt,c=Mt,n=Dt,p=kt,l=At,d=Ct,m=Lt,y=It,u=Ot,g=Gt,h=zt,S=jt,f=Vt,x=$t,b=Et,T=_t,w=Ft,v=Pt,M=Ut,k=Wt,A=Rt,C=Bt,z=Ht,L=Nt,I=Jt,O=Zt,G=qt;var j,V,$,E,_;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:"PrimaryStory",...($=(V=r.parameters)==null?void 0:V.docs)==null?void 0:$.source},description:{story:"Basic map rendered using `eox-map` configuration",...(_=(E=r.parameters)==null?void 0:E.docs)==null?void 0:_.description}}};var F,P,W,R,B;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:"VectorLayerStory",...(W=(P=s.parameters)==null?void 0:P.docs)==null?void 0:W.source},description:{story:"Basic vector layer map rendered using `GeoJSON`",...(B=(R=s.parameters)==null?void 0:R.docs)==null?void 0:B.description}}};var H,N,J,Z,q;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:"VectorTileLayerStory",...(J=(N=a.parameters)==null?void 0:N.docs)==null?void 0:J.source},description:{story:"Basic vector layer map rendered using `MVT` tiles",...(q=(Z=a.parameters)==null?void 0:Z.docs)==null?void 0:q.description}}};var D,U,Y,Q,K;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:"WMSLayerStory",...(Y=(U=i.parameters)==null?void 0:U.docs)==null?void 0:Y.source},description:{story:"Renders WMS layer using geo-server",...(K=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:K.description}}};var X,ee,oe,te,re;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:"WMTSCapabilitiesLayerStory",...(oe=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:oe.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...(re=(te=c.parameters)==null?void 0:te.docs)==null?void 0:re.description}}};var se,ae,ie,ce,ne;n.parameters={...n.parameters,docs:{...(se=n.parameters)==null?void 0:se.docs,source:{originalSource:"FlatGeoBufStory",...(ie=(ae=n.parameters)==null?void 0:ae.docs)==null?void 0:ie.source},description:{story:"Renders `FlatGeoBuf` layer",...(ne=(ce=n.parameters)==null?void 0:ce.docs)==null?void 0:ne.description}}};var pe,le,de,me,ye;p.parameters={...p.parameters,docs:{...(pe=p.parameters)==null?void 0:pe.docs,source:{originalSource:"WMTSTileGridStory",...(de=(le=p.parameters)==null?void 0:le.docs)==null?void 0:de.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...(ye=(me=p.parameters)==null?void 0:me.docs)==null?void 0:ye.description}}};var ue,ge,he,Se,fe;l.parameters={...l.parameters,docs:{...(ue=l.parameters)==null?void 0:ue.docs,source:{originalSource:"StaticImageLayerStory",...(he=(ge=l.parameters)==null?void 0:ge.docs)==null?void 0:he.source},description:{story:"Renders a static image layer",...(fe=(Se=l.parameters)==null?void 0:Se.docs)==null?void 0:fe.description}}};var xe,be,Te,we,ve;d.parameters={...d.parameters,docs:{...(xe=d.parameters)==null?void 0:xe.docs,source:{originalSource:"STACLayerStory",...(Te=(be=d.parameters)==null?void 0:be.docs)==null?void 0:Te.source},description:{story:"Renders STAC Layer using STAC url json.",...(ve=(we=d.parameters)==null?void 0:we.docs)==null?void 0:ve.description}}};var Me,ke,Ae,Ce,Le;m.parameters={...m.parameters,docs:{...(Me=m.parameters)==null?void 0:Me.docs,source:{originalSource:"MapboxStyleLayerStory",...(Ae=(ke=m.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source},description:{story:"Renders a Layer Composition using Mapbox Styles.\n\nA layer of type `MapboxStyle` can take any Mapbox-Style object or URL to an Mapbox-Style document.\nThe `mapboxStyle` property and the `applyOptions` property of the EOxLayer are mapped to `style`- and `options`-property of `apply` of `ol-mapbox-style` respectively.\n(compare https://openlayers.org/ol-mapbox-style/functions/apply.html)",...(Le=(Ce=m.parameters)==null?void 0:Ce.docs)==null?void 0:Le.description}}};var Ie,Oe,Ge,ze,je;y.parameters={...y.parameters,docs:{...(Ie=y.parameters)==null?void 0:Ie.docs,source:{originalSource:"GeoTIFFLayerStory",...(Ge=(Oe=y.parameters)==null?void 0:Oe.docs)==null?void 0:Ge.source},description:{story:"Renders `GeoTIFF` layer as `WebGLTile`",...(je=(ze=y.parameters)==null?void 0:ze.docs)==null?void 0:je.description}}};var Ve,$e,Ee,_e,Fe;u.parameters={...u.parameters,docs:{...(Ve=u.parameters)==null?void 0:Ve.docs,source:{originalSource:"GroupLayerStory",...(Ee=($e=u.parameters)==null?void 0:$e.docs)==null?void 0:Ee.source},description:{story:"Renders `Group` layer which contains multiple layers in a group",...(Fe=(_e=u.parameters)==null?void 0:_e.docs)==null?void 0:Fe.description}}};var Pe,We,Re,Be,He;g.parameters={...g.parameters,docs:{...(Pe=g.parameters)==null?void 0:Pe.docs,source:{originalSource:"ControlsStory",...(Re=(We=g.parameters)==null?void 0:We.docs)==null?void 0:Re.source},description:{story:"Renders different `Controls` for the `eox-map` using control config",...(He=(Be=g.parameters)==null?void 0:Be.docs)==null?void 0:He.description}}};var Ne,Je,Ze,qe,De;h.parameters={...h.parameters,docs:{...(Ne=h.parameters)==null?void 0:Ne.docs,source:{originalSource:"GeolocationStory",...(Ze=(Je=h.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source},description:{story:"Renders Geolocation Control in `eox-map`",...(De=(qe=h.parameters)==null?void 0:qe.docs)==null?void 0:De.description}}};var Ue,Ye,Qe,Ke,Xe;S.parameters={...S.parameters,docs:{...(Ue=S.parameters)==null?void 0:Ue.docs,source:{originalSource:"StandardLoadingIndicatorStory",...(Qe=(Ye=S.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.source},description:{story:"A simple, unobtrusive loading indicator in the bottom left that appears any time when the map is loading.",...(Xe=(Ke=S.parameters)==null?void 0:Ke.docs)==null?void 0:Xe.description}}};var eo,oo,to,ro,so;f.parameters={...f.parameters,docs:{...(eo=f.parameters)==null?void 0:eo.docs,source:{originalSource:"CustomFullScreenLoadingIndicatorStory",...(to=(oo=f.parameters)==null?void 0:oo.docs)==null?void 0:to.source},description:{story:"Loading Indicators can also be centered over the entire map by setting the option `type` to `'fullscreen'`, adapting the opacity is adviced when doing so.",...(so=(ro=f.parameters)==null?void 0:ro.docs)==null?void 0:so.description}}};var ao,io,co,no,po;x.parameters={...x.parameters,docs:{...(ao=x.parameters)==null?void 0:ao.docs,source:{originalSource:"HoverSelectStory",...(co=(io=x.parameters)==null?void 0:io.docs)==null?void 0:co.source},description:{story:"Renders `eox-map` with `Hover` interaction",...(po=(no=x.parameters)==null?void 0:no.docs)==null?void 0:po.description}}};var lo,mo,yo,uo,go;b.parameters={...b.parameters,docs:{...(lo=b.parameters)==null?void 0:lo.docs,source:{originalSource:"ClickSelectStory",...(yo=(mo=b.parameters)==null?void 0:mo.docs)==null?void 0:yo.source},description:{story:"Renders `eox-map` with `Click` interaction",...(go=(uo=b.parameters)==null?void 0:uo.docs)==null?void 0:go.description}}};var ho,So,fo,xo,bo;T.parameters={...T.parameters,docs:{...(ho=T.parameters)==null?void 0:ho.docs,source:{originalSource:"ClusterExplodeStory",...(fo=(So=T.parameters)==null?void 0:So.docs)==null?void 0:fo.source},description:{story:"Renders `eox-map` with `Cluster-Explode` interaction",...(bo=(xo=T.parameters)==null?void 0:xo.docs)==null?void 0:bo.description}}};var To,wo,vo,Mo,ko;w.parameters={...w.parameters,docs:{...(To=w.parameters)==null?void 0:To.docs,source:{originalSource:"TooltipStory",...(vo=(wo=w.parameters)==null?void 0:wo.docs)==null?void 0:vo.source},description:{story:"`eox-map` offers a built-in tooltip, which needs to be placed inside the default slot:\n```\n<eox-map [...]>\n  <eox-map-tooltip></eox-map-tooltip>\n</eox-map>\n```\nThis renders a list of all feature properties of the currently selected feature.\nNote that if multiple interactions are registered (e.g. `pointermove` and `singleclick`),\nthe `pointermove` interaction will have higher priority for the tooltip.",...(ko=(Mo=w.parameters)==null?void 0:Mo.docs)==null?void 0:ko.description}}};var Ao,Co,Lo,Io,Oo;v.parameters={...v.parameters,docs:{...(Ao=v.parameters)==null?void 0:Ao.docs,source:{originalSource:"TooltipWithPropertyTransformStory",...(Lo=(Co=v.parameters)==null?void 0:Co.docs)==null?void 0:Lo.source},description:{story:'The rendering of feature properties inside the tooltip can be transformed\nby passing a `propertyTransform` function to the tooltip element which applies to each property in the rendering loop:\n```\n<eox-map [...]>\n  <eox-map-tooltip\n    .propertyTransform=${({key, value}, feature) => key.includes("COLOR") ? { key: key.toLowerCase(), value }}\n  ></eox-map-tooltip>\n</eox-map>\n```\n\nThe first argument are `key` and `value` of the current feature property; this object needs to be\nreturned in order to render the property in the list.\nAdditionally, the entire feature is passed as a second argument, for cases of more advanced property\ntransformation in which needs access to the entire feature.',...(Oo=(Io=v.parameters)==null?void 0:Io.docs)==null?void 0:Oo.description}}};var Go,zo,jo,Vo,$o;M.parameters={...M.parameters,docs:{...(Go=M.parameters)==null?void 0:Go.docs,source:{originalSource:"CustomTooltipStory",...(jo=(zo=M.parameters)==null?void 0:zo.docs)==null?void 0:jo.source},description:{story:'Instead of the built-in `eox-map-tooltip`, it is possible to use any other (custom) element as tooltip by setting the `is` attribute:\n```\n<eox-map [...]>\n  <custom-element is="eox-map-tooltip"></custom-element>\n</eox-map>\n```\n\nThis custom tooltip is updated each time a feature is selected by setting its `feature` property; it can also be updated manually by e.g. hooking into the `@select` event.',...($o=(Vo=M.parameters)==null?void 0:Vo.docs)==null?void 0:$o.description}}};var Eo,_o,Fo,Po,Wo;k.parameters={...k.parameters,docs:{...(Eo=k.parameters)==null?void 0:Eo.docs,source:{originalSource:"HighlightFeaturesAndAnimateStory",...(Fo=(_o=k.parameters)==null?void 0:_o.docs)==null?void 0:Fo.source},description:{story:"Select interactions offer a `highlightById` method, with which vector features can be programmatically selected via their id property.\nIt expects an array with a list of ids to be selected.\nOptionally, passing a second argument allows to set the [`fitOptions`](https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions),\nadding view animation to the selection.",...(Wo=(Po=k.parameters)==null?void 0:Po.docs)==null?void 0:Wo.description}}};var Ro,Bo,Ho,No,Jo;A.parameters={...A.parameters,docs:{...(Ro=A.parameters)==null?void 0:Ro.docs,source:{originalSource:"MapSyncStory",...(Ho=(Bo=A.parameters)==null?void 0:Bo.docs)==null?void 0:Ho.source},description:{story:'Sync the views of two maps using the `sync` attribute (e.g. `sync="eox-map#a"`).',...(Jo=(No=A.parameters)==null?void 0:No.docs)==null?void 0:Jo.description}}};var Zo,qo,Do,Uo,Yo;C.parameters={...C.parameters,docs:{...(Zo=C.parameters)==null?void 0:Zo.docs,source:{originalSource:"ABCompareStory",...(Do=(qo=C.parameters)==null?void 0:qo.docs)==null?void 0:Do.source},description:{story:'To compare two maps, wrap them in an `<eox-map-compare>` element and assign them to the slot `first` and `second`.\nAlso use the `sync` attribute so both move their view together.\n\n`eox-map-compare` also takes a `value` property (0 - 100) which determines the position of the comparison slider;\nand an `enabled` attribute, which can be either `"first"` (only left map visible), `"second"` (only second map visible)\nor `undefined` (default, both visible).',...(Yo=(Uo=C.parameters)==null?void 0:Uo.docs)==null?void 0:Yo.description}}};var Qo,Ko,Xo;z.parameters={...z.parameters,docs:{...(Qo=z.parameters)==null?void 0:Qo.docs,source:{originalSource:"ConfigObjectStory",...(Xo=(Ko=z.parameters)==null?void 0:Ko.docs)==null?void 0:Xo.source}}};var et,ot,tt,rt,st;L.parameters={...L.parameters,docs:{...(et=L.parameters)==null?void 0:et.docs,source:{originalSource:"ProjectionStory",...(tt=(ot=L.parameters)==null?void 0:ot.docs)==null?void 0:tt.source},description:{story:"The projection of the view can be changed via the `projection`-attribute.\nOut-of-the-box the projections EPSG:3857 (default) and EPSG:4326 (geographic coordinates)\nare included, additional projections can be used by registering them via the `registerProjection` or\n`registerProjectionFromCode` helper functions beforehand.",...(st=(rt=L.parameters)==null?void 0:rt.docs)==null?void 0:st.description}}};var at,it,ct,nt,pt;I.parameters={...I.parameters,docs:{...(at=I.parameters)==null?void 0:at.docs,source:{originalSource:"ProjectionTransformStory",...(ct=(it=I.parameters)==null?void 0:it.docs)==null?void 0:ct.source},description:{story:"With the convenience functions `transform` and `transformExtent` it is possible to transform coordinates\nand extents from any projection to EPSG.4326 (default) or any other projection.\nBasically, these methods are the `ol/proj` [transform](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transform)\nand [transformExtent](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transformExtent) functions,\nwith the small adaptation that the destination defaults to EPSG:4326 if not defined.",...(pt=(nt=I.parameters)==null?void 0:nt.docs)==null?void 0:pt.description}}};var lt,dt,mt,yt,ut;O.parameters={...O.parameters,docs:{...(lt=O.parameters)==null?void 0:lt.docs,source:{originalSource:"AnimationsStory",...(mt=(dt=O.parameters)==null?void 0:dt.docs)==null?void 0:mt.source},description:{story:"changing the properties `zoom`, `center` or `zoomExtent` will trigger animations, if the\n`animationOptions`-property is set.\nanimation options for `zoom` or `center`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~AnimationOptions\nanimation options for `zoomExtent`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions",...(ut=(yt=O.parameters)==null?void 0:yt.docs)==null?void 0:ut.description}}};var gt,ht,St,ft,xt;G.parameters={...G.parameters,docs:{...(gt=G.parameters)==null?void 0:gt.docs,source:{originalSource:"PreventScrollStory",...(St=(ht=G.parameters)==null?void 0:ht.docs)==null?void 0:St.source},description:{story:"By setting the `prevent-scroll` attribute or by setting `preventScroll` property to `true` (either on the element or within the config object),\nthe map doesnt mouse-scroll (on desktop) or drag-touch (on tab/mobile). Pressing the platform modifier key (ctrl/cmd) will enable scrolling.\nUseful for maps embedded in scrollable websites.",...(xt=(ft=G.parameters)==null?void 0:ft.docs)==null?void 0:xt.description}}};const er=["Primary","VectorLayer","VectorTileLayer","WMSLayer","WMTSCapabilitiesLayer","FlatGeoBuf","WMTSTileGrid","StaticImage","STACLayer","MapboxStyleLayer","GeoTIFFLayer","GroupLayer","Controls","Geolocation","StandardLoadingIndicator","CustomFullScreenLoadingIndicator","HoverSelect","ClickSelect","ClusterExplode","Tooltip","TooltipWithPropertyTransform","CustomTooltip","HighlightFeaturesAndAnimate","MapSync","ABCompare","ConfigObject","Projection","ProjectionTransform","Animations","PreventScroll"];export{C as ABCompare,O as Animations,b as ClickSelect,T as ClusterExplode,z as ConfigObject,g as Controls,f as CustomFullScreenLoadingIndicator,M as CustomTooltip,n as FlatGeoBuf,y as GeoTIFFLayer,h as Geolocation,u as GroupLayer,k as HighlightFeaturesAndAnimate,x as HoverSelect,A as MapSync,m as MapboxStyleLayer,G as PreventScroll,r as Primary,L as Projection,I as ProjectionTransform,d as STACLayer,S as StandardLoadingIndicator,l as StaticImage,w as Tooltip,v as TooltipWithPropertyTransform,s as VectorLayer,a as VectorTileLayer,i as WMSLayer,c as WMTSCapabilitiesLayer,p as WMTSTileGrid,er as __namedExportsOrder,Xt as default};
