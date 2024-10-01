import{k as r}from"./lit-element-C80UzK4d.js";import"./main-D2VNTtlA.js";const Ho={args:{center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}],zoom:7}},Jo={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"#232323","stroke-width":1,"fill-color":["string",["get","COLOR"],"#eee"]}}]}},qo={args:{layers:[{type:"VectorTile",background:"#1a2b39",declutter:!0,properties:{id:"countries"},source:{type:"VectorTile",url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",format:"MVT",tileGrid:{}},style:{"fill-color":"yellow","stroke-color":"#232323","stroke-width":1}}]}},Zo={args:{center:[-10997148,4569099],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"}}],zoom:3}},Do={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTSCapabilities",url:"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",layer:"s2cloudless-2017"}}],zoom:5}},Yo={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTS",url:"https://tiles.maps.eox.at/wmts",layer:"s2cloudless-2017_3857",style:"default",matrixSet:"GoogleMapsCompatible",tileGrid:{tileSize:[128,128]}}}],zoom:5}},Qo={args:{center:[-122.38,46.1],layers:[{type:"STAC",properties:{id:"stacLayer"},url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:7}},Uo={args:{center:[5,16.3],layers:[{type:"WebGLTile",properties:{id:"geotiffLayer"},source:{type:"GeoTIFF",sources:[{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"}]}},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:8}},Ko={args:{layers:[{type:"Group",properties:{id:"group"},layers:[{type:"Vector",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Group",properties:{id:"groupLayerInsideGroup"},layers:[{type:"Tile",properties:{id:"layerInsideGroupInsideGroup"},source:{type:"OSM"}}]}]}]}},Xo={args:{controls:{Zoom:{},Attribution:{},FullScreen:{},OverviewMap:{layers:[{type:"Tile",properties:{id:"overviewMap"},source:{type:"OSM"}}]}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},er={args:{zoom:7,controls:{Geolocation:{tracking:!0,trackHeading:!0,centerWhenReady:!1,highAccuracy:!0,trackAccuracy:!0,style:{"circle-radius":10,"circle-fill-color":"red","circle-stroke-color":"white","circle-stroke-width":2},buttonIcon:"https://upload.wikimedia.org/wikipedia/commons/7/74/Location_icon_from_Noun_Project.png"},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},or={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},rr={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{type:"fullscreen",opacity:.2,spinnerSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="120 50" r="30" stroke-width="22" stroke="#cd4609" fill="none" cy="50" cx="50">
        <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.4s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
            </circle><g></g></g></svg>`},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},tr={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"stroke-color":"red","stroke-width":3}}}}]}]}},sr={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"red"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},ar={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>r`
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
  `},ir={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>r`
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
  `},nr={args:{config:{layers:[{type:"Vector",background:"lightgrey",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"darkgrey"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},render:e=>r`
    <eox-map
      id="highlightAndAnimate"
      style="width: 100%; height: 300px;"
      .config=${e.config}
      @loadend=${()=>{document.querySelector("eox-map#highlightAndAnimate").selectInteractions.selectInteraction.highlightById([664,795,789],{duration:400,padding:[50,50,50,50]})}}
    ></eox-map>
  `},cr={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}]},render:e=>r`
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
  `},pr={args:{layersA:[{type:"Tile",source:{type:"OSM"}}],layersB:[{type:"Tile",source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}}]},render:e=>r`
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
  `},lr={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9}}},render:e=>r`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},dr={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>r`
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
  `},mr={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>r`
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
  `},yr={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],animationOptions:{duration:500},center:[16.8,48.2],zoom:7},render:e=>r`
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
  `},ur={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9},preventScroll:!0}},render:e=>r`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},Sr={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map",render:e=>r`
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
  `},t=Ho,s=Jo,a=qo,i=Zo,n=Do,c=Yo,p=Qo,l=Uo,d=Ko,m=Xo,y=er,u=or,h=rr,g=tr,S=sr,f=ar,x=ir,T=nr,b=cr,w=pr,A=lr,v=dr,k=mr,M=yr,L=ur;var C,G,I,O,z;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:"PrimaryStory",...(I=(G=t.parameters)==null?void 0:G.docs)==null?void 0:I.source},description:{story:"Basic map rendered using `eox-map` configuration",...(z=(O=t.parameters)==null?void 0:O.docs)==null?void 0:z.description}}};var $,j,_,V,P;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:"VectorLayerStory",...(_=(j=s.parameters)==null?void 0:j.docs)==null?void 0:_.source},description:{story:"Basic vector layer map rendered using `GeoJSON`",...(P=(V=s.parameters)==null?void 0:V.docs)==null?void 0:P.description}}};var W,F,E,R,B;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:"VectorTileLayerStory",...(E=(F=a.parameters)==null?void 0:F.docs)==null?void 0:E.source},description:{story:"Basic vector layer map rendered using `MVT` tiles",...(B=(R=a.parameters)==null?void 0:R.docs)==null?void 0:B.description}}};var N,H,J,q,Z;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:"WMSLayerStory",...(J=(H=i.parameters)==null?void 0:H.docs)==null?void 0:J.source},description:{story:"Renders WMS layer using geo-server",...(Z=(q=i.parameters)==null?void 0:q.docs)==null?void 0:Z.description}}};var D,Y,Q,U,K;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:"WMTSCapabilitiesLayerStory",...(Q=(Y=n.parameters)==null?void 0:Y.docs)==null?void 0:Q.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...(K=(U=n.parameters)==null?void 0:U.docs)==null?void 0:K.description}}};var X,ee,oe,re,te;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:"WMTSTileGridStory",...(oe=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:oe.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...(te=(re=c.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};var se,ae,ie,ne,ce;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:"STACLayerStory",...(ie=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:ie.source},description:{story:"Renders STAC Layer using STAC url json.",...(ce=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:ce.description}}};var pe,le,de,me,ye;l.parameters={...l.parameters,docs:{...(pe=l.parameters)==null?void 0:pe.docs,source:{originalSource:"GeoTIFFLayerStory",...(de=(le=l.parameters)==null?void 0:le.docs)==null?void 0:de.source},description:{story:"Renders `GeoTIFF` layer as `WebGLTile`",...(ye=(me=l.parameters)==null?void 0:me.docs)==null?void 0:ye.description}}};var ue,he,ge,Se,fe;d.parameters={...d.parameters,docs:{...(ue=d.parameters)==null?void 0:ue.docs,source:{originalSource:"GroupLayerStory",...(ge=(he=d.parameters)==null?void 0:he.docs)==null?void 0:ge.source},description:{story:"Renders `Group` layer which contains multiple layers in a group",...(fe=(Se=d.parameters)==null?void 0:Se.docs)==null?void 0:fe.description}}};var xe,Te,be,we,ve;m.parameters={...m.parameters,docs:{...(xe=m.parameters)==null?void 0:xe.docs,source:{originalSource:"ControlsStory",...(be=(Te=m.parameters)==null?void 0:Te.docs)==null?void 0:be.source},description:{story:"Renders different `Controls` for the `eox-map` using control config",...(ve=(we=m.parameters)==null?void 0:we.docs)==null?void 0:ve.description}}};var ke,Me,Le,Ae,Ce;y.parameters={...y.parameters,docs:{...(ke=y.parameters)==null?void 0:ke.docs,source:{originalSource:"GeolocationStory",...(Le=(Me=y.parameters)==null?void 0:Me.docs)==null?void 0:Le.source},description:{story:"Renders Geolocation Control in `eox-map`",...(Ce=(Ae=y.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.description}}};var Ge,Ie,Oe,ze,$e;u.parameters={...u.parameters,docs:{...(Ge=u.parameters)==null?void 0:Ge.docs,source:{originalSource:"StandardLoadingIndicatorStory",...(Oe=(Ie=u.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source},description:{story:"A simple, unobtrusive loading indicator in the bottom left that appears any time when the map is loading.",...($e=(ze=u.parameters)==null?void 0:ze.docs)==null?void 0:$e.description}}};var je,_e,Ve,Pe,We;h.parameters={...h.parameters,docs:{...(je=h.parameters)==null?void 0:je.docs,source:{originalSource:"CustomFullScreenLoadingIndicatorStory",...(Ve=(_e=h.parameters)==null?void 0:_e.docs)==null?void 0:Ve.source},description:{story:"Loading Indicators can also be centered over the entire map by setting the option `type` to `'fullscreen'`, adapting the opacity is adviced when doing so.",...(We=(Pe=h.parameters)==null?void 0:Pe.docs)==null?void 0:We.description}}};var Fe,Ee,Re,Be,Ne;g.parameters={...g.parameters,docs:{...(Fe=g.parameters)==null?void 0:Fe.docs,source:{originalSource:"HoverSelectStory",...(Re=(Ee=g.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source},description:{story:"Renders `eox-map` with `Hover` interaction",...(Ne=(Be=g.parameters)==null?void 0:Be.docs)==null?void 0:Ne.description}}};var He,Je,qe,Ze,De;S.parameters={...S.parameters,docs:{...(He=S.parameters)==null?void 0:He.docs,source:{originalSource:"ClickSelectStory",...(qe=(Je=S.parameters)==null?void 0:Je.docs)==null?void 0:qe.source},description:{story:"Renders `eox-map` with `Click` interaction",...(De=(Ze=S.parameters)==null?void 0:Ze.docs)==null?void 0:De.description}}};var Ye,Qe,Ue,Ke,Xe;f.parameters={...f.parameters,docs:{...(Ye=f.parameters)==null?void 0:Ye.docs,source:{originalSource:"TooltipStory",...(Ue=(Qe=f.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source},description:{story:"`eox-map` offers a built-in tooltip, which needs to be placed inside the default slot:\n```\n<eox-map [...]>\n  <eox-map-tooltip></eox-map-tooltip>\n</eox-map>\n```\nThis renders a list of all feature properties of the currently selected feature.\nNote that if multiple interactions are registered (e.g. `pointermove` and `singleclick`),\nthe `pointermove` interaction will have higher priority for the tooltip.",...(Xe=(Ke=f.parameters)==null?void 0:Ke.docs)==null?void 0:Xe.description}}};var eo,oo,ro,to,so;x.parameters={...x.parameters,docs:{...(eo=x.parameters)==null?void 0:eo.docs,source:{originalSource:"TooltipWithPropertyTransformStory",...(ro=(oo=x.parameters)==null?void 0:oo.docs)==null?void 0:ro.source},description:{story:'The rendering of feature properties inside the tooltip can be transformed\nby passing a `propertyTransform` function to the tooltip element which applies to each property in the rendering loop:\n```\n<eox-map [...]>\n  <eox-map-tooltip\n    .propertyTransform=${({key, value}, feature) => key.includes("COLOR") ? { key: key.toLowerCase(), value }}\n  ></eox-map-tooltip>\n</eox-map>\n```\n\nThe first argument are `key` and `value` of the current feature property; this object needs to be\nreturned in order to render the property in the list.\nAdditionally, the entire feature is passed as a second argument, for cases of more advanced property\ntransformation in which needs access to the entire feature.',...(so=(to=x.parameters)==null?void 0:to.docs)==null?void 0:so.description}}};var ao,io,no,co,po;T.parameters={...T.parameters,docs:{...(ao=T.parameters)==null?void 0:ao.docs,source:{originalSource:"HighlightFeaturesAndAnimateStory",...(no=(io=T.parameters)==null?void 0:io.docs)==null?void 0:no.source},description:{story:"Select interactions offer a `highlightById` method, with which vector features can be programmatically selected via their id property.\nIt expects an array with a list of ids to be selected.\nOptionally, passing a second argument allows to set the [`fitOptions`](https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions),\nadding view animation to the selection.",...(po=(co=T.parameters)==null?void 0:co.docs)==null?void 0:po.description}}};var lo,mo,yo,uo,ho;b.parameters={...b.parameters,docs:{...(lo=b.parameters)==null?void 0:lo.docs,source:{originalSource:"MapSyncStory",...(yo=(mo=b.parameters)==null?void 0:mo.docs)==null?void 0:yo.source},description:{story:'Sync the views of two maps using the `sync` attribute (e.g. `sync="eox-map#a"`).',...(ho=(uo=b.parameters)==null?void 0:uo.docs)==null?void 0:ho.description}}};var go,So,fo,xo,To;w.parameters={...w.parameters,docs:{...(go=w.parameters)==null?void 0:go.docs,source:{originalSource:"ABCompareStory",...(fo=(So=w.parameters)==null?void 0:So.docs)==null?void 0:fo.source},description:{story:'To compare two maps, wrap them in an `<eox-map-compare>` element and assign them to the slot `first` and `second`.\nAlso use the `sync` attribute so both move their view together.\n\n`eox-map-compare` also takes a `value` property (0 - 100) which determines the position of the comparison slider;\nand an `enabled` attribute, which can be either `"first"` (only left map visible), `"second"` (only second map visible)\nor `undefined` (default, both visible).',...(To=(xo=w.parameters)==null?void 0:xo.docs)==null?void 0:To.description}}};var bo,wo,vo;A.parameters={...A.parameters,docs:{...(bo=A.parameters)==null?void 0:bo.docs,source:{originalSource:"ConfigObjectStory",...(vo=(wo=A.parameters)==null?void 0:wo.docs)==null?void 0:vo.source}}};var ko,Mo,Lo,Ao,Co;v.parameters={...v.parameters,docs:{...(ko=v.parameters)==null?void 0:ko.docs,source:{originalSource:"ProjectionStory",...(Lo=(Mo=v.parameters)==null?void 0:Mo.docs)==null?void 0:Lo.source},description:{story:"The projection of the view can be changed via the `projection`-attribute.\nOut-of-the-box the projections EPSG:3857 (default) and EPSG:4326 (geographic coordinates)\nare included, additional projections can be used by registering them via the `registerProjection` or\n`registerProjectionFromCode` helper functions beforehand.",...(Co=(Ao=v.parameters)==null?void 0:Ao.docs)==null?void 0:Co.description}}};var Go,Io,Oo,zo,$o;k.parameters={...k.parameters,docs:{...(Go=k.parameters)==null?void 0:Go.docs,source:{originalSource:"ProjectionTransformStory",...(Oo=(Io=k.parameters)==null?void 0:Io.docs)==null?void 0:Oo.source},description:{story:"With the convenience functions `transform` and `transformExtent` it is possible to transform coordinates\nand extents from any projection to EPSG.4326 (default) or any other projection.\nBasically, these methods are the `ol/proj` [transform](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transform)\nand [transformExtent](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transformExtent) functions,\nwith the small adaptation that the destination defaults to EPSG:4326 if not defined.",...($o=(zo=k.parameters)==null?void 0:zo.docs)==null?void 0:$o.description}}};var jo,_o,Vo,Po,Wo;M.parameters={...M.parameters,docs:{...(jo=M.parameters)==null?void 0:jo.docs,source:{originalSource:"AnimationsStory",...(Vo=(_o=M.parameters)==null?void 0:_o.docs)==null?void 0:Vo.source},description:{story:"changing the properties `zoom`, `center` or `zoomExtent` will trigger animations, if the\n`animationOptions`-property is set.\nanimation options for `zoom` or `center`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~AnimationOptions\nanimation options for `zoomExtent`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions",...(Wo=(Po=M.parameters)==null?void 0:Po.docs)==null?void 0:Wo.description}}};var Fo,Eo,Ro,Bo,No;L.parameters={...L.parameters,docs:{...(Fo=L.parameters)==null?void 0:Fo.docs,source:{originalSource:"PreventScrollStory",...(Ro=(Eo=L.parameters)==null?void 0:Eo.docs)==null?void 0:Ro.source},description:{story:"By setting the `prevent-scroll` attribute or by setting `preventScroll` property to `true` (either on the element or within the config object),\nthe map doesnt mouse-scroll (on desktop) or drag-touch (on tab/mobile). Pressing the platform modifier key (ctrl/cmd) will enable scrolling.\nUseful for maps embedded in scrollable websites.",...(No=(Bo=L.parameters)==null?void 0:Bo.docs)==null?void 0:No.description}}};const fr=["Primary","VectorLayer","VectorTileLayer","WMSLayer","WMTSCapabilitiesLayer","WMTSTileGrid","STACLayer","GeoTIFFLayer","GroupLayer","Controls","Geolocation","StandardLoadingIndicator","CustomFullScreenLoadingIndicator","HoverSelect","ClickSelect","Tooltip","TooltipWithPropertyTransform","HighlightFeaturesAndAnimate","MapSync","ABCompare","ConfigObject","Projection","ProjectionTransform","Animations","PreventScroll"];export{w as ABCompare,M as Animations,S as ClickSelect,A as ConfigObject,m as Controls,h as CustomFullScreenLoadingIndicator,l as GeoTIFFLayer,y as Geolocation,d as GroupLayer,T as HighlightFeaturesAndAnimate,g as HoverSelect,b as MapSync,L as PreventScroll,t as Primary,v as Projection,k as ProjectionTransform,p as STACLayer,u as StandardLoadingIndicator,f as Tooltip,x as TooltipWithPropertyTransform,s as VectorLayer,a as VectorTileLayer,i as WMSLayer,n as WMTSCapabilitiesLayer,c as WMTSTileGrid,fr as __namedExportsOrder,Sr as default};
