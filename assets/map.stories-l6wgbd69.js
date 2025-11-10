import{i as t}from"./iframe-DGGf7EFB.js";import"./preload-helper-PPVm8Dsz.js";const j={args:{center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}],zoom:7}},E={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"#232323","stroke-width":1,"fill-color":["string",["get","COLOR"],"#eee"]}}]}},H={args:{layers:[{type:"VectorTile",background:"#1a2b39",declutter:!0,properties:{id:"countries"},source:{type:"VectorTile",url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",format:"MVT",tileGrid:{}},style:{"fill-color":"yellow","stroke-color":"#232323","stroke-width":1}}]}},B={args:{center:[-10997148,4569099],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"}}],zoom:3}},W={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTSCapabilities",url:"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",layer:"s2cloudless-2017"}}],zoom:5}},F={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTS",url:"https://tiles.maps.eox.at/wmts",layer:"s2cloudless-2017_3857",style:"default",matrixSet:"GoogleMapsCompatible",tileGrid:{tileSize:[128,128]}}}],zoom:5}},P={args:{center:[-10997148,4569099],layers:[{type:"Image",properties:{id:"regions"},source:{type:"ImageStatic",imageExtent:[-20037508342789244e-9,-15028131257091934e-9,20037508342789244e-9,15028131257091934e-9],url:"https://imgs.xkcd.com/comics/online_communities.png"}}],zoom:0}},R={args:{center:[-122.38,46.1],layers:[{type:"STAC",properties:{id:"stacLayer"},url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:7}},N={args:{center:[0,0],layers:[{type:"MapboxStyle",properties:{id:"mapboxStyleGroup",title:"mapboxStyleGroup",mapboxStyle:{version:8,sources:{osm:{type:"raster",tiles:["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],tileSize:256,attribution:"© OpenStreetMap contributors"},pointSource:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]},properties:{}}]}}},layers:[{id:"osm-base",type:"raster",source:"osm",minzoom:0,maxzoom:19},{id:"point-halo",type:"circle",source:"pointSource",paint:{"circle-radius":10,"circle-color":"#0000ff","circle-opacity":.5}},{id:"point-main",type:"circle",source:"pointSource",paint:{"circle-radius":5,"circle-color":"#ff0000"}}]}}}],zoom:0}},Z={args:{center:[3737055,1886786],layers:[{type:"WebGLTile",properties:{id:"geotiffLayer"},source:{type:"GeoTIFF",sources:[{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"}]}},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}],zoom:8}},D={args:{layers:[{type:"Group",properties:{id:"group"},layers:[{type:"Vector",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Group",properties:{id:"groupLayerInsideGroup"},layers:[{type:"Tile",properties:{id:"layerInsideGroupInsideGroup"},source:{type:"OSM"}}]}]}]}},J={args:{controls:{Zoom:{},Attribution:{},FullScreen:{},OverviewMap:{layers:[{type:"Tile",properties:{id:"overviewMap"},source:{type:"OSM"}}]}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},Q={args:{zoom:7,controls:{Geolocation:{tracking:!0,trackHeading:!0,centerWhenReady:!1,highAccuracy:!0,trackAccuracy:!0,style:{"circle-radius":10,"circle-fill-color":"red","circle-stroke-color":"white","circle-stroke-width":2}},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},q={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},Y={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{type:"fullscreen",opacity:.2,spinnerSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="120 50" r="30" stroke-width="22" stroke="#cd4609" fill="none" cy="50" cx="50">
        <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.4s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
            </circle><g></g></g></svg>`},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},U={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"stroke-color":"red","stroke-width":3}}}}]}]}},X={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"red"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},K={args:{controls:{Attribution:{}},layers:[{type:"Vector",properties:{id:"clusterLayer"},interactions:[{type:"clusterExplode",options:{id:"clusterExplodeInteraction",maxZoom:10,fitOptions:{duration:300},style:{"circle-radius":12,"circle-fill-color":"#FFD700","circle-stroke-color":"rgba(255, 255, 255, 0.7)","circle-stroke-width":2,"text-font":"normal 16px","text-value":["get","NAME"],"text-fill-color":"#000","text-offset-y":1}}}],style:[{filter:[">",["get","features","length"],1],style:{"text-value":["to-string",["get","features","length"]],"circle-radius":12,"circle-fill-color":"#FFD700","circle-stroke-color":"rgba(255, 255, 255, 0.7)","circle-stroke-width":2,"text-font":"normal 16px","text-fill-color":"#000","text-offset-y":1}},{else:!0,style:{"circle-radius":12,"circle-fill-color":"#FFD700","circle-stroke-color":"rgba(255, 255, 255, 0.7)","circle-stroke-width":2,"text-font":"normal 16px","text-value":["get","NAME"],"text-fill-color":"#000","text-offset-y":1,"fill-color":"#FFD700","fill-opacity":.5,"stroke-color":"#eeeeee","stroke-width":2}}],source:{type:"Cluster",distance:55,attributions:'Map data © <a href="https://www.naturalearthdata.com">Natural Earth</a> | City points via <a href="https://github.com/drei01/geojson-world-cities">geojson-world-cities</a>',source:{type:"Vector",url:"https://raw.githubusercontent.com/drei01/geojson-world-cities/refs/heads/master/cities.geojson",format:"GeoJSON"}}},{type:"Tile",properties:{id:"OSM"},source:{type:"OSM"}}]}},ee={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>t`
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
  `},oe={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>t`
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
  `},te={args:{config:{layers:[{type:"Vector",background:"lightgrey",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"darkgrey"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},render:e=>t`
    <eox-map
      id="highlightAndAnimate"
      style="width: 100%; height: 300px;"
      .config=${e.config}
      @loadend=${()=>{document.querySelector("eox-map#highlightAndAnimate").selectInteractions.selectInteraction.highlightById([664,795,789],{duration:400,padding:[50,50,50,50]})}}
    ></eox-map>
  `},re={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}]},render:e=>t`
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
  `},se={args:{layersA:[{type:"Tile",source:{type:"OSM"}}],layersB:[{type:"Tile",source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}}]},render:e=>t`
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
  `},ae={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9}}},render:e=>t`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},ie={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}},{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>t`
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
  `},ne={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],center:[16.8,48.2],zoom:7},render:e=>t`
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
  `},ce={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],animationOptions:{duration:500},center:[16.8,48.2],zoom:7},render:e=>t`
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
  `},pe={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9},preventScroll:!0}},render:e=>t`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${e.config}
    ></eox-map>
  `},le={args:{center:[16.346,48.182],zoom:12.5,layers:[{type:"Vector",properties:{id:"FlatGeoBufLayer",minZoom:12},source:{type:"FlatGeoBuf",url:"https://eox-gtif-public.s3.eu-central-1.amazonaws.com/admin_borders/STATISTIK_AUSTRIA_GEM_20220101.fgb"}},{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}};customElements.define("custom-tooltip",class extends HTMLElement{constructor(){super()}set feature(e){this.innerHTML=`
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
    `}});const de={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>t`
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
  `},me={args:{layers:[{type:"Tile",properties:{id:"wmsLayer"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click"}}]},{type:"Tile",properties:{title:"Terrain Light",id:"terrain-light"},source:{type:"XYZ",url:"//tiles.maps.eox.at/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}}],center:[-10997148,4569099],zoom:4},render:e=>t`
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
  `};customElements.define("custom-coordinates-tooltip",class extends HTMLElement{constructor(){super()}set feature(e){this.innerHTML=`
<div class="surface-container-lowest small-padding small-round large-elevate">
  <h6 class="small bold" style="color:#024170;">Bands</h6>
  <hr class="small" style="background-color: black;" />

    <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-outline</title><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /></svg></i>
    <b>Band 1:</b> ${e.get("band1")}
  <br>
    <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-outline</title><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /></svg></i>
    <b>Band 2:</b> ${e.get("band2")}
  <br>
    <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-outline</title><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /></svg></i>
    <b>Band 3:</b> ${e.get("band3")}
  <br>
    <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-outline</title><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /></svg></i>
     <b>Band 4:</b> ${e.get("band4")}
  <h6 class="small bold" style="color:#024170;">Coordinates</h6>
  <hr class="small" style="background-color: black;" />

    <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>earth</title><path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg></i>
    <b>LON:</b> ${e.get("lon")}
  <br>
    <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>earth</title><path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg></i>
    <b>LAT:</b> ${e.get("lat")}


</div>
`}});const $=(e,o=1)=>["/",e,o],ye=$(["band",1],4462),ue=$(["band",2],2820),ge=$(["band",4],6214),he={color:["case",["any",["==",["band",1],0],["==",["band",2],0],["==",["band",3],0],["==",["band",4],0]],"#00000000",["array",ge,ye,ue,1]]},Se={args:{layers:[{type:"WebGLTile",properties:{id:"multipleCOGs"},style:he,source:{type:"GeoTIFF",normalize:!1,sources:[{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/B04.tif",max:4462},{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/B03.tif",max:2820},{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/B02.tif",max:2170},{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/B08.tif",max:6214}]},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",precision:2,coordinates:!0,projection:{name:"EPSG:19869",proj4_string:"+proj=cea +R_A +lat_ts=30 +lon_0=0 +x_0=0 +y_0=0"}}}]},{type:"Tile",properties:{title:"Terrain Light",id:"terrain-light"},source:{type:"XYZ",url:"//tiles.maps.eox.at/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}}],center:[3735055,1886786],zoom:8},render:e=>t`
    <eox-map
      id="tooltipTest"
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    >
      <custom-coordinates-tooltip
        is="eox-map-tooltip"
      ></custom-coordinates-tooltip>
    </eox-map>
  `},be={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map",render:e=>t`
    <eox-map
      style="width: 100%; height: 300px;"
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    ></eox-map>
  `},r=j,s=E,a=H,i=B,n=W,c=le,p=F,l=P,d=R,m=N,y=Z,u=D,g=J,h=Q,S=q,f=Y,x=U,b=X,w=K,T=ee,v=me,A=oe,M=de,C=Se,k=te,L=re,V=se,O=ae,G=ie,I=ne,z=ce,_=pe;r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"PrimaryStory",...r.parameters?.docs?.source},description:{story:"Basic map rendered using `eox-map` configuration",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"VectorLayerStory",...s.parameters?.docs?.source},description:{story:"Basic vector layer map rendered using `GeoJSON`",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"VectorTileLayerStory",...a.parameters?.docs?.source},description:{story:"Basic vector layer map rendered using `MVT` tiles",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"WMSLayerStory",...i.parameters?.docs?.source},description:{story:"Renders WMS layer using geo-server",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"WMTSCapabilitiesLayerStory",...n.parameters?.docs?.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"FlatGeoBufStory",...c.parameters?.docs?.source},description:{story:"Renders `FlatGeoBuf` layer",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"WMTSTileGridStory",...p.parameters?.docs?.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"StaticImageLayerStory",...l.parameters?.docs?.source},description:{story:"Renders a static image layer",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"STACLayerStory",...d.parameters?.docs?.source},description:{story:"Renders STAC Layer using STAC url json.",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"MapboxStyleLayerStory",...m.parameters?.docs?.source},description:{story:"Renders a Layer Composition using Mapbox Styles.\n\nA layer of type `MapboxStyle` can take any Mapbox-Style object or URL to an Mapbox-Style document.\nThe `mapboxStyle` property and the `applyOptions` property of the EOxLayer are mapped to `style`- and `options`-property of `apply` of `ol-mapbox-style` respectively.\n(compare https://openlayers.org/ol-mapbox-style/functions/apply.html)",...m.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"GeoTIFFLayerStory",...y.parameters?.docs?.source},description:{story:"Renders `GeoTIFF` layer as `WebGLTile`",...y.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"GroupLayerStory",...u.parameters?.docs?.source},description:{story:"Renders `Group` layer which contains multiple layers in a group",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"ControlsStory",...g.parameters?.docs?.source},description:{story:"Renders different `Controls` for the `eox-map` using control config",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"GeolocationStory",...h.parameters?.docs?.source},description:{story:"Renders Geolocation Control in `eox-map`",...h.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"StandardLoadingIndicatorStory",...S.parameters?.docs?.source},description:{story:"A simple, unobtrusive loading indicator in the bottom left that appears any time when the map is loading.",...S.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"CustomFullScreenLoadingIndicatorStory",...f.parameters?.docs?.source},description:{story:"Loading Indicators can also be centered over the entire map by setting the option `type` to `'fullscreen'`, adapting the opacity is adviced when doing so.",...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"HoverSelectStory",...x.parameters?.docs?.source},description:{story:"Renders `eox-map` with `Hover` interaction",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"ClickSelectStory",...b.parameters?.docs?.source},description:{story:"Renders `eox-map` with `Click` interaction",...b.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"ClusterExplodeStory",...w.parameters?.docs?.source},description:{story:"Renders `eox-map` with `Cluster-Explode` interaction",...w.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"TooltipStory",...T.parameters?.docs?.source},description:{story:"`eox-map` offers a built-in tooltip, which needs to be placed inside the default slot:\n```\n<eox-map [...]>\n  <eox-map-tooltip></eox-map-tooltip>\n</eox-map>\n```\nThe tooltip feature supports Vector, VectorTile, WebGLTile, and (wms) Tile layers.\nwhen hovering or clicking a feature, the tooltip will be updated with the feature properties.\nThis renders a list of all feature properties of the currently selected feature.\nNote that if multiple interactions are registered (e.g. `pointermove` and `singleclick`),\nthe `pointermove` interaction will have higher priority for the tooltip.",...T.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"GetFeatureInfoTooltipStory",...v.parameters?.docs?.source},description:{story:"* The `eox-map` tooltip can also be used to display information about a feature in a (wms) Tile layers on click",...v.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"TooltipWithPropertyTransformStory",...A.parameters?.docs?.source},description:{story:'The rendering of feature properties inside the tooltip can be transformed\nby passing a `propertyTransform` function to the tooltip element which applies to each property in the rendering loop:\n```\n<eox-map [...]>\n  <eox-map-tooltip\n    .propertyTransform=${({key, value}, feature) => key.includes("COLOR") ? { key: key.toLowerCase(), value }}\n  ></eox-map-tooltip>\n</eox-map>\n```\n\nThe first argument are `key` and `value` of the current feature property; this object needs to be\nreturned in order to render the property in the list.\nAdditionally, the entire feature is passed as a second argument, for cases of more advanced property\ntransformation in which needs access to the entire feature.',...A.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"CustomTooltipStory",...M.parameters?.docs?.source},description:{story:'Instead of the built-in `eox-map-tooltip`, it is possible to use any other (custom) element as tooltip by setting the `is` attribute:\n```\n<eox-map [...]>\n  <custom-element is="eox-map-tooltip"></custom-element>\n</eox-map>\n```\n\nThis custom tooltip is updated each time a feature is selected by setting its `feature` property; it can also be updated manually by e.g. hooking into the `@select` event.',...M.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"CoordinatesCustomTooltipsStory",...C.parameters?.docs?.source},description:{story:"* The `eox-map` tooltip can also be used to display information about a COG's pixel.\nThe tooltip will then display the bands values of the hovered/clicked feature.\nThe tooltip can also provide coordinates of the clicked/selected pixel, it will show it in WGS84 by default.\nThe coordinates can be transformed to any other projection by setting the `projection` property of the tooltip.\nThe displayed coordinates decimal places can be set via the `precision` property.",...C.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"HighlightFeaturesAndAnimateStory",...k.parameters?.docs?.source},description:{story:"Select interactions offer a `highlightById` method, with which vector features can be programmatically selected via their id property.\nIt expects an array with a list of ids to be selected.\nOptionally, passing a second argument allows to set the [`fitOptions`](https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions),\nadding view animation to the selection.",...k.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"MapSyncStory",...L.parameters?.docs?.source},description:{story:'Sync the views of two maps using the `sync` attribute (e.g. `sync="eox-map#a"`).',...L.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:"ABCompareStory",...V.parameters?.docs?.source},description:{story:'To compare two maps, wrap them in an `<eox-map-compare>` element and assign them to the slot `first` and `second`.\nAlso use the `sync` attribute so both move their view together.\n\n`eox-map-compare` also takes a `value` property (0 - 100) which determines the position of the comparison slider;\nand an `enabled` attribute, which can be either `"first"` (only left map visible), `"second"` (only second map visible)\nor `undefined` (default, both visible).',...V.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"ConfigObjectStory",...O.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:"ProjectionStory",...G.parameters?.docs?.source},description:{story:"The projection of the view can be changed via the `projection`-attribute.\nOut-of-the-box the projections EPSG:3857 (default) and EPSG:4326 (geographic coordinates)\nare included, additional projections can be used by registering them via the `registerProjection` or\n`registerProjectionFromCode` helper functions beforehand.",...G.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"ProjectionTransformStory",...I.parameters?.docs?.source},description:{story:"With the convenience functions `transform` and `transformExtent` it is possible to transform coordinates\nand extents from any projection to EPSG.4326 (default) or any other projection.\nBasically, these methods are the `ol/proj` [transform](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transform)\nand [transformExtent](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transformExtent) functions,\nwith the small adaptation that the destination defaults to EPSG:4326 if not defined.",...I.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"AnimationsStory",...z.parameters?.docs?.source},description:{story:"changing the properties `zoom`, `center` or `zoomExtent` will trigger animations, if the\n`animationOptions`-property is set.\nanimation options for `zoom` or `center`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~AnimationOptions\nanimation options for `zoomExtent`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions",...z.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"PreventScrollStory",..._.parameters?.docs?.source},description:{story:"By setting the `prevent-scroll` attribute or by setting `preventScroll` property to `true` (either on the element or within the config object),\nthe map doesnt mouse-scroll (on desktop) or drag-touch (on tab/mobile). Pressing the platform modifier key (ctrl/cmd) will enable scrolling.\nUseful for maps embedded in scrollable websites.",..._.parameters?.docs?.description}}};const we=["Primary","VectorLayer","VectorTileLayer","WMSLayer","WMTSCapabilitiesLayer","FlatGeoBuf","WMTSTileGrid","StaticImage","STACLayer","MapboxStyleLayer","GeoTIFFLayer","GroupLayer","Controls","Geolocation","StandardLoadingIndicator","CustomFullScreenLoadingIndicator","HoverSelect","ClickSelect","ClusterExplode","Tooltip","GetFeatureInfoTooltip","TooltipWithPropertyTransform","CustomTooltip","CoordinatesCustomTooltips","HighlightFeaturesAndAnimate","MapSync","ABCompare","ConfigObject","Projection","ProjectionTransform","Animations","PreventScroll"];export{V as ABCompare,z as Animations,b as ClickSelect,w as ClusterExplode,O as ConfigObject,g as Controls,C as CoordinatesCustomTooltips,f as CustomFullScreenLoadingIndicator,M as CustomTooltip,c as FlatGeoBuf,y as GeoTIFFLayer,h as Geolocation,v as GetFeatureInfoTooltip,u as GroupLayer,k as HighlightFeaturesAndAnimate,x as HoverSelect,L as MapSync,m as MapboxStyleLayer,_ as PreventScroll,r as Primary,G as Projection,I as ProjectionTransform,d as STACLayer,S as StandardLoadingIndicator,l as StaticImage,T as Tooltip,A as TooltipWithPropertyTransform,s as VectorLayer,a as VectorTileLayer,i as WMSLayer,n as WMTSCapabilitiesLayer,p as WMTSTileGrid,we as __namedExportsOrder,be as default};
