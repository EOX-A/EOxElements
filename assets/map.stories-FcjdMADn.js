import{k as r}from"./lit-element-C80UzK4d.js";import"./main-DrfYOv0K.js";const Qo={args:{center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}],zoom:7}},Uo={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"#232323","stroke-width":1,"fill-color":["string",["get","COLOR"],"#eee"]}}]}},Ko={args:{layers:[{type:"VectorTile",background:"#1a2b39",declutter:!0,properties:{id:"countries"},source:{type:"VectorTile",url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",format:"MVT",tileGrid:{}},style:{"fill-color":"yellow","stroke-color":"#232323","stroke-width":1}}]}},Xo={args:{center:[-10997148,4569099],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"}}],zoom:3}},er={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTSCapabilities",url:"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",layer:"s2cloudless-2017"}}],zoom:5}},or={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTS",url:"https://tiles.maps.eox.at/wmts",layer:"s2cloudless-2017_3857",style:"default",matrixSet:"GoogleMapsCompatible",tileGrid:{tileSize:[128,128]}}}],zoom:5}},rr={args:{center:[-10997148,4569099],layers:[{type:"Image",properties:{id:"regions"},source:{type:"ImageStatic",imageExtent:[-20037508342789244e-9,-15028131257091934e-9,20037508342789244e-9,15028131257091934e-9],url:"https://imgs.xkcd.com/comics/online_communities.png"}}],zoom:0}},tr={args:{center:[-122.38,46.1],layers:[{type:"STAC",properties:{id:"stacLayer"},url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:7}},sr={args:{center:[5,16.3],layers:[{type:"WebGLTile",properties:{id:"geotiffLayer"},source:{type:"GeoTIFF",sources:[{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"}]}},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:8}},ar={args:{layers:[{type:"Group",properties:{id:"group"},layers:[{type:"Vector",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Group",properties:{id:"groupLayerInsideGroup"},layers:[{type:"Tile",properties:{id:"layerInsideGroupInsideGroup"},source:{type:"OSM"}}]}]}]}},ir={args:{controls:{Zoom:{},Attribution:{},FullScreen:{},OverviewMap:{layers:[{type:"Tile",properties:{id:"overviewMap"},source:{type:"OSM"}}]}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},nr={args:{zoom:7,controls:{Geolocation:{tracking:!0,trackHeading:!0,centerWhenReady:!1,highAccuracy:!0,trackAccuracy:!0,style:{"circle-radius":10,"circle-fill-color":"red","circle-stroke-color":"white","circle-stroke-width":2},buttonIcon:"https://upload.wikimedia.org/wikipedia/commons/7/74/Location_icon_from_Noun_Project.png"},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},cr={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},pr={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{type:"fullscreen",opacity:.2,spinnerSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="120 50" r="30" stroke-width="22" stroke="#cd4609" fill="none" cy="50" cx="50">
        <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.4s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
            </circle><g></g></g></svg>`},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},lr={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"stroke-color":"red","stroke-width":3}}}}]}]}},dr={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"red"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},mr={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>r`
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
  `},yr={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>r`
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
  `},ur={args:{config:{layers:[{type:"Vector",background:"lightgrey",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"darkgrey"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},render:e=>r`
    <eox-map
      id="highlightAndAnimate"
      style="width: 100%; height: 300px;"
      .config=${e.config}
      @loadend=${()=>{document.querySelector("eox-map#highlightAndAnimate").selectInteractions.selectInteraction.highlightById([664,795,789],{duration:400,padding:[50,50,50,50]})}}
    ></eox-map>
  `},gr={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}]},render:e=>r`
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
  `},hr={args:{layersA:[{type:"Tile",source:{type:"OSM"}}],layersB:[{type:"Tile",source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}}]},render:e=>r`
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
  `},Sr={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9}}},render:e=>r`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},fr={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>r`
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
  `},xr={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>r`
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
  `},Tr={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],animationOptions:{duration:500},center:[16.8,48.2],zoom:7},render:e=>r`
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
  `},br={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9},preventScroll:!0}},render:e=>r`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},kr={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map",render:e=>r`
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
  `},t=Qo,s=Uo,a=Ko,i=Xo,n=er,c=or,p=rr,l=tr,d=sr,m=ar,y=ir,u=nr,g=cr,h=pr,S=lr,f=dr,x=mr,T=yr,b=ur,w=gr,v=hr,I=Sr,k=fr,L=xr,M=Tr,A=br;var C,G,O,z,$;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:"PrimaryStory",...(O=(G=t.parameters)==null?void 0:G.docs)==null?void 0:O.source},description:{story:"Basic map rendered using `eox-map` configuration",...($=(z=t.parameters)==null?void 0:z.docs)==null?void 0:$.description}}};var j,_,V,P,W;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:"VectorLayerStory",...(V=(_=s.parameters)==null?void 0:_.docs)==null?void 0:V.source},description:{story:"Basic vector layer map rendered using `GeoJSON`",...(W=(P=s.parameters)==null?void 0:P.docs)==null?void 0:W.description}}};var E,F,R,B,N;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:"VectorTileLayerStory",...(R=(F=a.parameters)==null?void 0:F.docs)==null?void 0:R.source},description:{story:"Basic vector layer map rendered using `MVT` tiles",...(N=(B=a.parameters)==null?void 0:B.docs)==null?void 0:N.description}}};var H,J,q,Z,D;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:"WMSLayerStory",...(q=(J=i.parameters)==null?void 0:J.docs)==null?void 0:q.source},description:{story:"Renders WMS layer using geo-server",...(D=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:D.description}}};var Y,Q,U,K,X;n.parameters={...n.parameters,docs:{...(Y=n.parameters)==null?void 0:Y.docs,source:{originalSource:"WMTSCapabilitiesLayerStory",...(U=(Q=n.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...(X=(K=n.parameters)==null?void 0:K.docs)==null?void 0:X.description}}};var ee,oe,re,te,se;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:"WMTSTileGridStory",...(re=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:re.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...(se=(te=c.parameters)==null?void 0:te.docs)==null?void 0:se.description}}};var ae,ie,ne,ce,pe;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:"StaticImageLayerStory",...(ne=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:ne.source},description:{story:"Renders a static image layer",...(pe=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:pe.description}}};var le,de,me,ye,ue;l.parameters={...l.parameters,docs:{...(le=l.parameters)==null?void 0:le.docs,source:{originalSource:"STACLayerStory",...(me=(de=l.parameters)==null?void 0:de.docs)==null?void 0:me.source},description:{story:"Renders STAC Layer using STAC url json.",...(ue=(ye=l.parameters)==null?void 0:ye.docs)==null?void 0:ue.description}}};var ge,he,Se,fe,xe;d.parameters={...d.parameters,docs:{...(ge=d.parameters)==null?void 0:ge.docs,source:{originalSource:"GeoTIFFLayerStory",...(Se=(he=d.parameters)==null?void 0:he.docs)==null?void 0:Se.source},description:{story:"Renders `GeoTIFF` layer as `WebGLTile`",...(xe=(fe=d.parameters)==null?void 0:fe.docs)==null?void 0:xe.description}}};var Te,be,we,ve,ke;m.parameters={...m.parameters,docs:{...(Te=m.parameters)==null?void 0:Te.docs,source:{originalSource:"GroupLayerStory",...(we=(be=m.parameters)==null?void 0:be.docs)==null?void 0:we.source},description:{story:"Renders `Group` layer which contains multiple layers in a group",...(ke=(ve=m.parameters)==null?void 0:ve.docs)==null?void 0:ke.description}}};var Le,Me,Ae,Ie,Ce;y.parameters={...y.parameters,docs:{...(Le=y.parameters)==null?void 0:Le.docs,source:{originalSource:"ControlsStory",...(Ae=(Me=y.parameters)==null?void 0:Me.docs)==null?void 0:Ae.source},description:{story:"Renders different `Controls` for the `eox-map` using control config",...(Ce=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.description}}};var Ge,Oe,ze,$e,je;u.parameters={...u.parameters,docs:{...(Ge=u.parameters)==null?void 0:Ge.docs,source:{originalSource:"GeolocationStory",...(ze=(Oe=u.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source},description:{story:"Renders Geolocation Control in `eox-map`",...(je=($e=u.parameters)==null?void 0:$e.docs)==null?void 0:je.description}}};var _e,Ve,Pe,We,Ee;g.parameters={...g.parameters,docs:{...(_e=g.parameters)==null?void 0:_e.docs,source:{originalSource:"StandardLoadingIndicatorStory",...(Pe=(Ve=g.parameters)==null?void 0:Ve.docs)==null?void 0:Pe.source},description:{story:"A simple, unobtrusive loading indicator in the bottom left that appears any time when the map is loading.",...(Ee=(We=g.parameters)==null?void 0:We.docs)==null?void 0:Ee.description}}};var Fe,Re,Be,Ne,He;h.parameters={...h.parameters,docs:{...(Fe=h.parameters)==null?void 0:Fe.docs,source:{originalSource:"CustomFullScreenLoadingIndicatorStory",...(Be=(Re=h.parameters)==null?void 0:Re.docs)==null?void 0:Be.source},description:{story:"Loading Indicators can also be centered over the entire map by setting the option `type` to `'fullscreen'`, adapting the opacity is adviced when doing so.",...(He=(Ne=h.parameters)==null?void 0:Ne.docs)==null?void 0:He.description}}};var Je,qe,Ze,De,Ye;S.parameters={...S.parameters,docs:{...(Je=S.parameters)==null?void 0:Je.docs,source:{originalSource:"HoverSelectStory",...(Ze=(qe=S.parameters)==null?void 0:qe.docs)==null?void 0:Ze.source},description:{story:"Renders `eox-map` with `Hover` interaction",...(Ye=(De=S.parameters)==null?void 0:De.docs)==null?void 0:Ye.description}}};var Qe,Ue,Ke,Xe,eo;f.parameters={...f.parameters,docs:{...(Qe=f.parameters)==null?void 0:Qe.docs,source:{originalSource:"ClickSelectStory",...(Ke=(Ue=f.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source},description:{story:"Renders `eox-map` with `Click` interaction",...(eo=(Xe=f.parameters)==null?void 0:Xe.docs)==null?void 0:eo.description}}};var oo,ro,to,so,ao;x.parameters={...x.parameters,docs:{...(oo=x.parameters)==null?void 0:oo.docs,source:{originalSource:"TooltipStory",...(to=(ro=x.parameters)==null?void 0:ro.docs)==null?void 0:to.source},description:{story:"`eox-map` offers a built-in tooltip, which needs to be placed inside the default slot:\n```\n<eox-map [...]>\n  <eox-map-tooltip></eox-map-tooltip>\n</eox-map>\n```\nThis renders a list of all feature properties of the currently selected feature.\nNote that if multiple interactions are registered (e.g. `pointermove` and `singleclick`),\nthe `pointermove` interaction will have higher priority for the tooltip.",...(ao=(so=x.parameters)==null?void 0:so.docs)==null?void 0:ao.description}}};var io,no,co,po,lo;T.parameters={...T.parameters,docs:{...(io=T.parameters)==null?void 0:io.docs,source:{originalSource:"TooltipWithPropertyTransformStory",...(co=(no=T.parameters)==null?void 0:no.docs)==null?void 0:co.source},description:{story:'The rendering of feature properties inside the tooltip can be transformed\nby passing a `propertyTransform` function to the tooltip element which applies to each property in the rendering loop:\n```\n<eox-map [...]>\n  <eox-map-tooltip\n    .propertyTransform=${({key, value}, feature) => key.includes("COLOR") ? { key: key.toLowerCase(), value }}\n  ></eox-map-tooltip>\n</eox-map>\n```\n\nThe first argument are `key` and `value` of the current feature property; this object needs to be\nreturned in order to render the property in the list.\nAdditionally, the entire feature is passed as a second argument, for cases of more advanced property\ntransformation in which needs access to the entire feature.',...(lo=(po=T.parameters)==null?void 0:po.docs)==null?void 0:lo.description}}};var mo,yo,uo,go,ho;b.parameters={...b.parameters,docs:{...(mo=b.parameters)==null?void 0:mo.docs,source:{originalSource:"HighlightFeaturesAndAnimateStory",...(uo=(yo=b.parameters)==null?void 0:yo.docs)==null?void 0:uo.source},description:{story:"Select interactions offer a `highlightById` method, with which vector features can be programmatically selected via their id property.\nIt expects an array with a list of ids to be selected.\nOptionally, passing a second argument allows to set the [`fitOptions`](https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions),\nadding view animation to the selection.",...(ho=(go=b.parameters)==null?void 0:go.docs)==null?void 0:ho.description}}};var So,fo,xo,To,bo;w.parameters={...w.parameters,docs:{...(So=w.parameters)==null?void 0:So.docs,source:{originalSource:"MapSyncStory",...(xo=(fo=w.parameters)==null?void 0:fo.docs)==null?void 0:xo.source},description:{story:'Sync the views of two maps using the `sync` attribute (e.g. `sync="eox-map#a"`).',...(bo=(To=w.parameters)==null?void 0:To.docs)==null?void 0:bo.description}}};var wo,vo,ko,Lo,Mo;v.parameters={...v.parameters,docs:{...(wo=v.parameters)==null?void 0:wo.docs,source:{originalSource:"ABCompareStory",...(ko=(vo=v.parameters)==null?void 0:vo.docs)==null?void 0:ko.source},description:{story:'To compare two maps, wrap them in an `<eox-map-compare>` element and assign them to the slot `first` and `second`.\nAlso use the `sync` attribute so both move their view together.\n\n`eox-map-compare` also takes a `value` property (0 - 100) which determines the position of the comparison slider;\nand an `enabled` attribute, which can be either `"first"` (only left map visible), `"second"` (only second map visible)\nor `undefined` (default, both visible).',...(Mo=(Lo=v.parameters)==null?void 0:Lo.docs)==null?void 0:Mo.description}}};var Ao,Io,Co;I.parameters={...I.parameters,docs:{...(Ao=I.parameters)==null?void 0:Ao.docs,source:{originalSource:"ConfigObjectStory",...(Co=(Io=I.parameters)==null?void 0:Io.docs)==null?void 0:Co.source}}};var Go,Oo,zo,$o,jo;k.parameters={...k.parameters,docs:{...(Go=k.parameters)==null?void 0:Go.docs,source:{originalSource:"ProjectionStory",...(zo=(Oo=k.parameters)==null?void 0:Oo.docs)==null?void 0:zo.source},description:{story:"The projection of the view can be changed via the `projection`-attribute.\nOut-of-the-box the projections EPSG:3857 (default) and EPSG:4326 (geographic coordinates)\nare included, additional projections can be used by registering them via the `registerProjection` or\n`registerProjectionFromCode` helper functions beforehand.",...(jo=($o=k.parameters)==null?void 0:$o.docs)==null?void 0:jo.description}}};var _o,Vo,Po,Wo,Eo;L.parameters={...L.parameters,docs:{...(_o=L.parameters)==null?void 0:_o.docs,source:{originalSource:"ProjectionTransformStory",...(Po=(Vo=L.parameters)==null?void 0:Vo.docs)==null?void 0:Po.source},description:{story:"With the convenience functions `transform` and `transformExtent` it is possible to transform coordinates\nand extents from any projection to EPSG.4326 (default) or any other projection.\nBasically, these methods are the `ol/proj` [transform](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transform)\nand [transformExtent](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transformExtent) functions,\nwith the small adaptation that the destination defaults to EPSG:4326 if not defined.",...(Eo=(Wo=L.parameters)==null?void 0:Wo.docs)==null?void 0:Eo.description}}};var Fo,Ro,Bo,No,Ho;M.parameters={...M.parameters,docs:{...(Fo=M.parameters)==null?void 0:Fo.docs,source:{originalSource:"AnimationsStory",...(Bo=(Ro=M.parameters)==null?void 0:Ro.docs)==null?void 0:Bo.source},description:{story:"changing the properties `zoom`, `center` or `zoomExtent` will trigger animations, if the\n`animationOptions`-property is set.\nanimation options for `zoom` or `center`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~AnimationOptions\nanimation options for `zoomExtent`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions",...(Ho=(No=M.parameters)==null?void 0:No.docs)==null?void 0:Ho.description}}};var Jo,qo,Zo,Do,Yo;A.parameters={...A.parameters,docs:{...(Jo=A.parameters)==null?void 0:Jo.docs,source:{originalSource:"PreventScrollStory",...(Zo=(qo=A.parameters)==null?void 0:qo.docs)==null?void 0:Zo.source},description:{story:"By setting the `prevent-scroll` attribute or by setting `preventScroll` property to `true` (either on the element or within the config object),\nthe map doesnt mouse-scroll (on desktop) or drag-touch (on tab/mobile). Pressing the platform modifier key (ctrl/cmd) will enable scrolling.\nUseful for maps embedded in scrollable websites.",...(Yo=(Do=A.parameters)==null?void 0:Do.docs)==null?void 0:Yo.description}}};const Lr=["Primary","VectorLayer","VectorTileLayer","WMSLayer","WMTSCapabilitiesLayer","WMTSTileGrid","StaticImage","STACLayer","GeoTIFFLayer","GroupLayer","Controls","Geolocation","StandardLoadingIndicator","CustomFullScreenLoadingIndicator","HoverSelect","ClickSelect","Tooltip","TooltipWithPropertyTransform","HighlightFeaturesAndAnimate","MapSync","ABCompare","ConfigObject","Projection","ProjectionTransform","Animations","PreventScroll"];export{v as ABCompare,M as Animations,f as ClickSelect,I as ConfigObject,y as Controls,h as CustomFullScreenLoadingIndicator,d as GeoTIFFLayer,u as Geolocation,m as GroupLayer,b as HighlightFeaturesAndAnimate,S as HoverSelect,w as MapSync,A as PreventScroll,t as Primary,k as Projection,L as ProjectionTransform,l as STACLayer,g as StandardLoadingIndicator,p as StaticImage,x as Tooltip,T as TooltipWithPropertyTransform,s as VectorLayer,a as VectorTileLayer,i as WMSLayer,n as WMTSCapabilitiesLayer,c as WMTSTileGrid,Lr as __namedExportsOrder,kr as default};
