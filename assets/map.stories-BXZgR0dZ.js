import{x as r}from"./lit-element-Dh4_iwrW.js";import"./main-C0Ebn2kd.js";const rr={args:{center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}],zoom:7}},tr={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"#232323","stroke-width":1,"fill-color":["string",["get","COLOR"],"#eee"]}}]}},sr={args:{layers:[{type:"VectorTile",background:"#1a2b39",declutter:!0,properties:{id:"countries"},source:{type:"VectorTile",url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",format:"MVT",tileGrid:{}},style:{"fill-color":"yellow","stroke-color":"#232323","stroke-width":1}}]}},ar={args:{center:[-10997148,4569099],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"}}],zoom:3}},ir={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTSCapabilities",url:"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",layer:"s2cloudless-2017"}}],zoom:5}},nr={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTS",url:"https://tiles.maps.eox.at/wmts",layer:"s2cloudless-2017_3857",style:"default",matrixSet:"GoogleMapsCompatible",tileGrid:{tileSize:[128,128]}}}],zoom:5}},cr={args:{center:[-10997148,4569099],layers:[{type:"Image",properties:{id:"regions"},source:{type:"ImageStatic",imageExtent:[-20037508342789244e-9,-15028131257091934e-9,20037508342789244e-9,15028131257091934e-9],url:"https://imgs.xkcd.com/comics/online_communities.png"}}],zoom:0}},pr={args:{center:[-122.38,46.1],layers:[{type:"STAC",properties:{id:"stacLayer"},url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:7}},lr={args:{center:[5,16.3],layers:[{type:"WebGLTile",properties:{id:"geotiffLayer"},source:{type:"GeoTIFF",sources:[{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"}]}},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:8}},dr={args:{layers:[{type:"Group",properties:{id:"group"},layers:[{type:"Vector",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Group",properties:{id:"groupLayerInsideGroup"},layers:[{type:"Tile",properties:{id:"layerInsideGroupInsideGroup"},source:{type:"OSM"}}]}]}]}},mr={args:{controls:{Zoom:{},Attribution:{},FullScreen:{},OverviewMap:{layers:[{type:"Tile",properties:{id:"overviewMap"},source:{type:"OSM"}}]}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},yr={args:{zoom:7,controls:{Geolocation:{tracking:!0,trackHeading:!0,centerWhenReady:!1,highAccuracy:!0,trackAccuracy:!0,style:{"circle-radius":10,"circle-fill-color":"red","circle-stroke-color":"white","circle-stroke-width":2},buttonIcon:"https://upload.wikimedia.org/wikipedia/commons/7/74/Location_icon_from_Noun_Project.png"},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},ur={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},gr={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{type:"fullscreen",opacity:.2,spinnerSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="120 50" r="30" stroke-width="22" stroke="#cd4609" fill="none" cy="50" cx="50">
        <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.4s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
            </circle><g></g></g></svg>`},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},hr={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"stroke-color":"red","stroke-width":3}}}}]}]}},Sr={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"red"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},fr={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>r`
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
  `},xr={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>r`
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
  `},Tr={args:{config:{layers:[{type:"Vector",background:"lightgrey",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"darkgrey"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},render:e=>r`
    <eox-map
      id="highlightAndAnimate"
      style="width: 100%; height: 300px;"
      .config=${e.config}
      @loadend=${()=>{document.querySelector("eox-map#highlightAndAnimate").selectInteractions.selectInteraction.highlightById([664,795,789],{duration:400,padding:[50,50,50,50]})}}
    ></eox-map>
  `},br={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}]},render:e=>r`
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
  `},wr={args:{layersA:[{type:"Tile",source:{type:"OSM"}}],layersB:[{type:"Tile",source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}}]},render:e=>r`
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
  `},vr={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9}}},render:e=>r`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},kr={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>r`
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
  `},Lr={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>r`
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
  `},Mr={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],animationOptions:{duration:500},center:[16.8,48.2],zoom:7},render:e=>r`
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
  `},Ir={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9},preventScroll:!0}},render:e=>r`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},Ar={args:{center:[16.346,48.182],zoom:12.5,layers:[{type:"Vector",properties:{id:"FlatGeoBufLayer",minZoom:12},source:{type:"FlatGeoBuf",url:"https://eox-gtif-public.s3.eu-central-1.amazonaws.com/admin_borders/STATISTIK_AUSTRIA_GEM_20220101.fgb"}},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},Or={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map",render:e=>r`
    <eox-map
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    ></eox-map>
    <eox-map-2
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    ></eox-map-2>
  `},t=rr,s=tr,a=sr,i=ar,n=ir,c=Ar,p=nr,l=cr,d=pr,m=lr,y=dr,u=mr,g=yr,h=ur,S=gr,f=hr,x=Sr,T=fr,b=xr,w=Tr,v=br,k=wr,G=vr,L=kr,M=Lr,I=Mr,A=Ir;var C,O,z,$,j;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:"PrimaryStory",...(z=(O=t.parameters)==null?void 0:O.docs)==null?void 0:z.source},description:{story:"Basic map rendered using `eox-map` configuration",...(j=($=t.parameters)==null?void 0:$.docs)==null?void 0:j.description}}};var _,V,P,F,W;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:"VectorLayerStory",...(P=(V=s.parameters)==null?void 0:V.docs)==null?void 0:P.source},description:{story:"Basic vector layer map rendered using `GeoJSON`",...(W=(F=s.parameters)==null?void 0:F.docs)==null?void 0:W.description}}};var B,E,R,N,H;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:"VectorTileLayerStory",...(R=(E=a.parameters)==null?void 0:E.docs)==null?void 0:R.source},description:{story:"Basic vector layer map rendered using `MVT` tiles",...(H=(N=a.parameters)==null?void 0:N.docs)==null?void 0:H.description}}};var J,q,Z,D,Y;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:"WMSLayerStory",...(Z=(q=i.parameters)==null?void 0:q.docs)==null?void 0:Z.source},description:{story:"Renders WMS layer using geo-server",...(Y=(D=i.parameters)==null?void 0:D.docs)==null?void 0:Y.description}}};var Q,U,K,X,ee;n.parameters={...n.parameters,docs:{...(Q=n.parameters)==null?void 0:Q.docs,source:{originalSource:"WMTSCapabilitiesLayerStory",...(K=(U=n.parameters)==null?void 0:U.docs)==null?void 0:K.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...(ee=(X=n.parameters)==null?void 0:X.docs)==null?void 0:ee.description}}};var oe,re,te,se,ae;c.parameters={...c.parameters,docs:{...(oe=c.parameters)==null?void 0:oe.docs,source:{originalSource:"FlatGeoBufStory",...(te=(re=c.parameters)==null?void 0:re.docs)==null?void 0:te.source},description:{story:"Renders `FlatGeoBuf` layer",...(ae=(se=c.parameters)==null?void 0:se.docs)==null?void 0:ae.description}}};var ie,ne,ce,pe,le;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:"WMTSTileGridStory",...(ce=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:ce.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...(le=(pe=p.parameters)==null?void 0:pe.docs)==null?void 0:le.description}}};var de,me,ye,ue,ge;l.parameters={...l.parameters,docs:{...(de=l.parameters)==null?void 0:de.docs,source:{originalSource:"StaticImageLayerStory",...(ye=(me=l.parameters)==null?void 0:me.docs)==null?void 0:ye.source},description:{story:"Renders a static image layer",...(ge=(ue=l.parameters)==null?void 0:ue.docs)==null?void 0:ge.description}}};var he,Se,fe,xe,Te;d.parameters={...d.parameters,docs:{...(he=d.parameters)==null?void 0:he.docs,source:{originalSource:"STACLayerStory",...(fe=(Se=d.parameters)==null?void 0:Se.docs)==null?void 0:fe.source},description:{story:"Renders STAC Layer using STAC url json.",...(Te=(xe=d.parameters)==null?void 0:xe.docs)==null?void 0:Te.description}}};var be,we,ve,ke,Le;m.parameters={...m.parameters,docs:{...(be=m.parameters)==null?void 0:be.docs,source:{originalSource:"GeoTIFFLayerStory",...(ve=(we=m.parameters)==null?void 0:we.docs)==null?void 0:ve.source},description:{story:"Renders `GeoTIFF` layer as `WebGLTile`",...(Le=(ke=m.parameters)==null?void 0:ke.docs)==null?void 0:Le.description}}};var Me,Ie,Ae,Ge,Ce;y.parameters={...y.parameters,docs:{...(Me=y.parameters)==null?void 0:Me.docs,source:{originalSource:"GroupLayerStory",...(Ae=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.source},description:{story:"Renders `Group` layer which contains multiple layers in a group",...(Ce=(Ge=y.parameters)==null?void 0:Ge.docs)==null?void 0:Ce.description}}};var Oe,ze,$e,je,_e;u.parameters={...u.parameters,docs:{...(Oe=u.parameters)==null?void 0:Oe.docs,source:{originalSource:"ControlsStory",...($e=(ze=u.parameters)==null?void 0:ze.docs)==null?void 0:$e.source},description:{story:"Renders different `Controls` for the `eox-map` using control config",...(_e=(je=u.parameters)==null?void 0:je.docs)==null?void 0:_e.description}}};var Ve,Pe,Fe,We,Be;g.parameters={...g.parameters,docs:{...(Ve=g.parameters)==null?void 0:Ve.docs,source:{originalSource:"GeolocationStory",...(Fe=(Pe=g.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source},description:{story:"Renders Geolocation Control in `eox-map`",...(Be=(We=g.parameters)==null?void 0:We.docs)==null?void 0:Be.description}}};var Ee,Re,Ne,He,Je;h.parameters={...h.parameters,docs:{...(Ee=h.parameters)==null?void 0:Ee.docs,source:{originalSource:"StandardLoadingIndicatorStory",...(Ne=(Re=h.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source},description:{story:"A simple, unobtrusive loading indicator in the bottom left that appears any time when the map is loading.",...(Je=(He=h.parameters)==null?void 0:He.docs)==null?void 0:Je.description}}};var qe,Ze,De,Ye,Qe;S.parameters={...S.parameters,docs:{...(qe=S.parameters)==null?void 0:qe.docs,source:{originalSource:"CustomFullScreenLoadingIndicatorStory",...(De=(Ze=S.parameters)==null?void 0:Ze.docs)==null?void 0:De.source},description:{story:"Loading Indicators can also be centered over the entire map by setting the option `type` to `'fullscreen'`, adapting the opacity is adviced when doing so.",...(Qe=(Ye=S.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.description}}};var Ue,Ke,Xe,eo,oo;f.parameters={...f.parameters,docs:{...(Ue=f.parameters)==null?void 0:Ue.docs,source:{originalSource:"HoverSelectStory",...(Xe=(Ke=f.parameters)==null?void 0:Ke.docs)==null?void 0:Xe.source},description:{story:"Renders `eox-map` with `Hover` interaction",...(oo=(eo=f.parameters)==null?void 0:eo.docs)==null?void 0:oo.description}}};var ro,to,so,ao,io;x.parameters={...x.parameters,docs:{...(ro=x.parameters)==null?void 0:ro.docs,source:{originalSource:"ClickSelectStory",...(so=(to=x.parameters)==null?void 0:to.docs)==null?void 0:so.source},description:{story:"Renders `eox-map` with `Click` interaction",...(io=(ao=x.parameters)==null?void 0:ao.docs)==null?void 0:io.description}}};var no,co,po,lo,mo;T.parameters={...T.parameters,docs:{...(no=T.parameters)==null?void 0:no.docs,source:{originalSource:"TooltipStory",...(po=(co=T.parameters)==null?void 0:co.docs)==null?void 0:po.source},description:{story:"`eox-map` offers a built-in tooltip, which needs to be placed inside the default slot:\n```\n<eox-map [...]>\n  <eox-map-tooltip></eox-map-tooltip>\n</eox-map>\n```\nThis renders a list of all feature properties of the currently selected feature.\nNote that if multiple interactions are registered (e.g. `pointermove` and `singleclick`),\nthe `pointermove` interaction will have higher priority for the tooltip.",...(mo=(lo=T.parameters)==null?void 0:lo.docs)==null?void 0:mo.description}}};var yo,uo,go,ho,So;b.parameters={...b.parameters,docs:{...(yo=b.parameters)==null?void 0:yo.docs,source:{originalSource:"TooltipWithPropertyTransformStory",...(go=(uo=b.parameters)==null?void 0:uo.docs)==null?void 0:go.source},description:{story:'The rendering of feature properties inside the tooltip can be transformed\nby passing a `propertyTransform` function to the tooltip element which applies to each property in the rendering loop:\n```\n<eox-map [...]>\n  <eox-map-tooltip\n    .propertyTransform=${({key, value}, feature) => key.includes("COLOR") ? { key: key.toLowerCase(), value }}\n  ></eox-map-tooltip>\n</eox-map>\n```\n\nThe first argument are `key` and `value` of the current feature property; this object needs to be\nreturned in order to render the property in the list.\nAdditionally, the entire feature is passed as a second argument, for cases of more advanced property\ntransformation in which needs access to the entire feature.',...(So=(ho=b.parameters)==null?void 0:ho.docs)==null?void 0:So.description}}};var fo,xo,To,bo,wo;w.parameters={...w.parameters,docs:{...(fo=w.parameters)==null?void 0:fo.docs,source:{originalSource:"HighlightFeaturesAndAnimateStory",...(To=(xo=w.parameters)==null?void 0:xo.docs)==null?void 0:To.source},description:{story:"Select interactions offer a `highlightById` method, with which vector features can be programmatically selected via their id property.\nIt expects an array with a list of ids to be selected.\nOptionally, passing a second argument allows to set the [`fitOptions`](https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions),\nadding view animation to the selection.",...(wo=(bo=w.parameters)==null?void 0:bo.docs)==null?void 0:wo.description}}};var vo,ko,Lo,Mo,Io;v.parameters={...v.parameters,docs:{...(vo=v.parameters)==null?void 0:vo.docs,source:{originalSource:"MapSyncStory",...(Lo=(ko=v.parameters)==null?void 0:ko.docs)==null?void 0:Lo.source},description:{story:'Sync the views of two maps using the `sync` attribute (e.g. `sync="eox-map#a"`).',...(Io=(Mo=v.parameters)==null?void 0:Mo.docs)==null?void 0:Io.description}}};var Ao,Go,Co,Oo,zo;k.parameters={...k.parameters,docs:{...(Ao=k.parameters)==null?void 0:Ao.docs,source:{originalSource:"ABCompareStory",...(Co=(Go=k.parameters)==null?void 0:Go.docs)==null?void 0:Co.source},description:{story:'To compare two maps, wrap them in an `<eox-map-compare>` element and assign them to the slot `first` and `second`.\nAlso use the `sync` attribute so both move their view together.\n\n`eox-map-compare` also takes a `value` property (0 - 100) which determines the position of the comparison slider;\nand an `enabled` attribute, which can be either `"first"` (only left map visible), `"second"` (only second map visible)\nor `undefined` (default, both visible).',...(zo=(Oo=k.parameters)==null?void 0:Oo.docs)==null?void 0:zo.description}}};var $o,jo,_o;G.parameters={...G.parameters,docs:{...($o=G.parameters)==null?void 0:$o.docs,source:{originalSource:"ConfigObjectStory",...(_o=(jo=G.parameters)==null?void 0:jo.docs)==null?void 0:_o.source}}};var Vo,Po,Fo,Wo,Bo;L.parameters={...L.parameters,docs:{...(Vo=L.parameters)==null?void 0:Vo.docs,source:{originalSource:"ProjectionStory",...(Fo=(Po=L.parameters)==null?void 0:Po.docs)==null?void 0:Fo.source},description:{story:"The projection of the view can be changed via the `projection`-attribute.\nOut-of-the-box the projections EPSG:3857 (default) and EPSG:4326 (geographic coordinates)\nare included, additional projections can be used by registering them via the `registerProjection` or\n`registerProjectionFromCode` helper functions beforehand.",...(Bo=(Wo=L.parameters)==null?void 0:Wo.docs)==null?void 0:Bo.description}}};var Eo,Ro,No,Ho,Jo;M.parameters={...M.parameters,docs:{...(Eo=M.parameters)==null?void 0:Eo.docs,source:{originalSource:"ProjectionTransformStory",...(No=(Ro=M.parameters)==null?void 0:Ro.docs)==null?void 0:No.source},description:{story:"With the convenience functions `transform` and `transformExtent` it is possible to transform coordinates\nand extents from any projection to EPSG.4326 (default) or any other projection.\nBasically, these methods are the `ol/proj` [transform](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transform)\nand [transformExtent](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transformExtent) functions,\nwith the small adaptation that the destination defaults to EPSG:4326 if not defined.",...(Jo=(Ho=M.parameters)==null?void 0:Ho.docs)==null?void 0:Jo.description}}};var qo,Zo,Do,Yo,Qo;I.parameters={...I.parameters,docs:{...(qo=I.parameters)==null?void 0:qo.docs,source:{originalSource:"AnimationsStory",...(Do=(Zo=I.parameters)==null?void 0:Zo.docs)==null?void 0:Do.source},description:{story:"changing the properties `zoom`, `center` or `zoomExtent` will trigger animations, if the\n`animationOptions`-property is set.\nanimation options for `zoom` or `center`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~AnimationOptions\nanimation options for `zoomExtent`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions",...(Qo=(Yo=I.parameters)==null?void 0:Yo.docs)==null?void 0:Qo.description}}};var Uo,Ko,Xo,er,or;A.parameters={...A.parameters,docs:{...(Uo=A.parameters)==null?void 0:Uo.docs,source:{originalSource:"PreventScrollStory",...(Xo=(Ko=A.parameters)==null?void 0:Ko.docs)==null?void 0:Xo.source},description:{story:"By setting the `prevent-scroll` attribute or by setting `preventScroll` property to `true` (either on the element or within the config object),\nthe map doesnt mouse-scroll (on desktop) or drag-touch (on tab/mobile). Pressing the platform modifier key (ctrl/cmd) will enable scrolling.\nUseful for maps embedded in scrollable websites.",...(or=(er=A.parameters)==null?void 0:er.docs)==null?void 0:or.description}}};const zr=["Primary","VectorLayer","VectorTileLayer","WMSLayer","WMTSCapabilitiesLayer","FlatGeoBuf","WMTSTileGrid","StaticImage","STACLayer","GeoTIFFLayer","GroupLayer","Controls","Geolocation","StandardLoadingIndicator","CustomFullScreenLoadingIndicator","HoverSelect","ClickSelect","Tooltip","TooltipWithPropertyTransform","HighlightFeaturesAndAnimate","MapSync","ABCompare","ConfigObject","Projection","ProjectionTransform","Animations","PreventScroll"];export{k as ABCompare,I as Animations,x as ClickSelect,G as ConfigObject,u as Controls,S as CustomFullScreenLoadingIndicator,c as FlatGeoBuf,m as GeoTIFFLayer,g as Geolocation,y as GroupLayer,w as HighlightFeaturesAndAnimate,f as HoverSelect,v as MapSync,A as PreventScroll,t as Primary,L as Projection,M as ProjectionTransform,d as STACLayer,h as StandardLoadingIndicator,l as StaticImage,T as Tooltip,b as TooltipWithPropertyTransform,s as VectorLayer,a as VectorTileLayer,i as WMSLayer,n as WMTSCapabilitiesLayer,p as WMTSTileGrid,zr as __namedExportsOrder,Or as default};
