var D=Object.freeze,Q=Object.defineProperty;var W=(e,r)=>D(Q(e,"raw",{value:D(r||e.slice())}));import{U as Y,x as o,V as q,W as X,X as K}from"./iframe-CC-01m5r.js";import"./preload-helper-PPVm8Dsz.js";const ee={args:{center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}],zoom:7}},oe={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"#232323","stroke-width":1,"fill-color":["string",["get","COLOR"],"#eee"]}}]}},te={args:{layers:[{type:"VectorTile",background:"#1a2b39",declutter:!0,properties:{id:"countries"},source:{type:"VectorTile",url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",format:"MVT",tileGrid:{}},style:{"fill-color":"yellow","stroke-color":"#232323","stroke-width":1}}]}},re={args:{center:[-10997148,4569099],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"}}],zoom:3}},se={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTSCapabilities",url:"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",layer:"s2cloudless-2017"}}],zoom:5,storyCodeBefore:'import "@eox/map/src/plugins/advancedLayersAndSources"'}},ae={args:{center:[20,40],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"WMTS",url:"https://tiles.maps.eox.at/wmts",layer:"s2cloudless-2017_3857",style:"default",matrixSet:"GoogleMapsCompatible",tileGrid:{tileSize:[128,128]}}}],zoom:5}},ie={args:{center:[-10997148,4569099],layers:[{type:"Image",properties:{id:"regions"},source:{type:"ImageStatic",imageExtent:[-20037508342789244e-9,-15028131257091934e-9,20037508342789244e-9,15028131257091934e-9],url:"https://imgs.xkcd.com/comics/online_communities.png"}}],zoom:0}},ne={args:{center:[-122.38,46.1],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}},{type:"STAC",properties:{id:"stacLayer"},url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"}],zoom:7,storyCodeBefore:'import "@eox/map/src/plugins/advancedLayersAndSources"'}},le={args:{center:[0,0],layers:[{type:"MapboxStyle",properties:{id:"mapboxStyleGroup",title:"mapboxStyleGroup",mapboxStyle:{version:8,sources:{osm:{type:"raster",tiles:["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],tileSize:256,attribution:"© OpenStreetMap contributors"},pointSource:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]},properties:{}}]}}},layers:[{id:"osm-base",type:"raster",source:"osm",minzoom:0,maxzoom:19},{id:"point-halo",type:"circle",source:"pointSource",paint:{"circle-radius":10,"circle-color":"#0000ff","circle-opacity":.5}},{id:"point-main",type:"circle",source:"pointSource",paint:{"circle-radius":5,"circle-color":"#ff0000"}}]}}}],zoom:0,storyCodeBefore:'import "@eox/map/src/plugins/advancedLayersAndSources"'}},ce={args:{center:[3737055,1886786],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}},{type:"WebGLTile",properties:{id:"geotiffLayer"},source:{type:"GeoTIFF",sources:[{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"}]}}],zoom:8,storyCodeBefore:'import "@eox/map/src/plugins/advancedLayersAndSources"'}},pe={args:{center:[1407372,5701616],layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}},{type:"WebGLTile",properties:{id:"geozarrLayer"},source:{type:"GeoZarr",url:"https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2A_MSIL2A_20251107T100231_N0511_R122_T32TQR_20251107T115310.zarr",group:"measurements/reflectance",bands:["b04","b03","b02","b05"]},style:{gamma:1.5,color:["color",["interpolate",["linear"],["band",1],0,0,.5,255],["interpolate",["linear"],["band",2],0,0,.5,255],["interpolate",["linear"],["band",3],0,0,.5,255],["case",["==",["+",["band",1],["band",2],["band",3]],0],0,1]]}}],zoom:9,storyCodeBefore:'import "@eox/map/src/plugins/advancedLayersAndSources"'}},de={args:{layers:[{type:"Group",properties:{id:"group"},layers:[{type:"Group",properties:{id:"groupLayerInsideGroup"},layers:[{type:"Tile",properties:{id:"layerInsideGroupInsideGroup"},source:{type:"OSM"}}]},{type:"Vector",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}}]}]}},me={args:{storyStyle:`
      .custom-btn {
        background: var(--map-controls-bg, white);
        color: var(--map-controls-color, black);
        backdrop-filter: var(--map-controls-backdrop-filter, none);
        -webkit-backdrop-filter: var(--map-controls-backdrop-filter, none);
        border: none;
        border-radius: 16px;
        padding: 4px 8px;
        height: 32px;
        box-shadow: var(--map-controls-box-shadow, none);
        cursor: pointer;
        opacity: 1;
        font-family: sans-serif;
        font-size: 12px;
      }
      .custom-btn:hover {
        opacity: .9;
      }
      eox-map#customized-controls {
        --map-controls-bg: rgba(255, 255, 255, 0.8);
        --map-controls-color: var(--primary);
        --map-controls-bg-surface: rgba(255, 255, 255, 0.8);
        --map-controls-color-surface: var(--on-surface);
        --map-controls-backdrop-filter: blur(10px);
      }
      eox-map#customized-controls.dark {
        --map-controls-bg: rgba(0, 0, 0, 0.2);
        --map-controls-color: white;
        --map-controls-bg-surface: rgba(0, 0, 0, 0.3);
        --map-controls-color-surface: white;
      }
    `,storySlotContent:`
      <button
        class="custom-btn"
        slot="top-right"
        onclick="const map = document.querySelector('#customized-controls'); map.classList.toggle('dark'); map.classList.toggle('light', !map.classList.contains('dark'));"
      >
        🌓 Toggle Theme
      </button>
      <button
        class="custom-btn"
        slot="top-right"
        onclick="alert('Custom control clicked!')"
      >
        Alert
      </button>
      <button
        class="custom-btn custom-tool"
        slot="center-left"
        onclick="alert('Custom tool')"
      >
        🔧 Custom Button
      </button>
      <button
        class="custom-btn custom-tool"
        slot="center-left"
        onclick="alert('Another tool')"
      >
        🔧 Another one
      </button>
      <button
        class="custom-btn custom-slot-content"
        slot="top-center"
        style="width: 150px; cursor: default !important;"
      >
        🌍 Custom Slot Content
      </button>
    `,storyCodeAfter:`
const map = document.querySelector('eox-map#customized-controls');
map.addEventListener('resize', (e) => {
  const { isSmall } = e.detail;

  // Apply dynamic styling for touch targets via CSS Variables
  map.style.setProperty("--map-control-size", isSmall ? "44px" : "32px");
  map.style.setProperty("--map-control-font-size", isSmall ? "1.25rem" : "1rem");
  
  const controlsOverlay = map.shadowRoot.querySelector(".eox-map-controls-overlay");
  if (controlsOverlay) {
    controlsOverlay.style.padding = isSmall ? "4px" : "10px";
  }

  // Style updates for our custom story controls
  map.querySelectorAll(".custom-btn").forEach((btn) => {
    if (isSmall) {
      btn.style.height = "44px";
      btn.style.padding = "8px 16px";
      btn.style.fontSize = "14px";
      btn.style.borderRadius = "22px";
    } else {
      btn.style.height = "32px";
      btn.style.padding = "4px 8px";
      btn.style.fontSize = "12px";
      btn.style.borderRadius = "16px";
    }
  });

  // Toggle custom slot visibility
  const customSlotContent = map.querySelector(".custom-slot-content");
  if (customSlotContent) {
    customSlotContent.style.display = isSmall ? "none" : "block";
  }

  // Alter native controls based on breakpoint
  const controls = JSON.parse(JSON.stringify(map.controls));
  if (isSmall) {
    // Collapse the overview map
    if (controls.OverviewMap) controls.OverviewMap.collapsed = true;

    // Clean up state
    delete controls.Zoom;
    delete controls.GlobeSwitcher;
  } else {
    // Ensure correct desktop state
    if (!controls.Zoom) controls.Zoom = { position: "bottom-right", target: "zoom-hz", orientation: "horizontal" };
    if (!controls.GlobeSwitcher) controls.GlobeSwitcher = { position: "bottom-center", target: "bottom-tools", orientation: "horizontal" };
    if (controls.OverviewMap) controls.OverviewMap.collapsed = false;
  }

  map.controls = controls;
});
`,controls:{FullScreen:{position:"top-right",target:"fs-attribution",orientation:"vertical"},Attribution:{position:"bottom-right",target:"zoom-hz",orientation:"horizontal",collapsible:!0},Zoom:{position:"bottom-right",target:"zoom-hz",orientation:"horizontal"},Rotate:{position:"bottom-center",target:"bottom-tools",orientation:"horizontal"},GlobeSwitcher:{position:"bottom-center",target:"bottom-tools",orientation:"horizontal"},ScaleLine:{position:"bottom-left",target:"scale-line",orientation:"horizontal"},MousePosition:{position:"bottom-left",target:"scale-line",orientation:"horizontal"},OverviewMap:{position:"top-left",collapsed:!1,layers:[{type:"Tile",source:{type:"OSM"}}]}},layers:[{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2024_3857/default/g/{z}/{y}/{x}.jpg",attributions:'<a xmlns:dct="http://purl.org/dc/terms/" href="https://s2maps.eu" property="dct:title">Sentinel-2 cloudless - https://s2maps.eu</a> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://eox.at" property="cc:attributionName" rel="cc:attributionURL">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2024) released under <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>. For commercial usage please see <a href="https://cloudless.eox.at">https://cloudless.eox.at</a>'}}],zoom:4,center:[10,50]},render:e=>o`
    <style>
      ${e.storyStyle}
    </style>
    <eox-map
      id="customized-controls"
      .layers=${e.layers}
      .zoom=${e.zoom}
      .center=${e.center}
      .controls=${e.controls}
      @resize=${r=>{const{isSmall:s}=r.detail,a=r.target;a.style.setProperty("--map-control-size",s?"44px":"32px"),a.style.setProperty("--map-control-font-size",s?"1.25rem":"1rem"),a.shadowRoot.querySelector(".eox-map-controls-overlay").style.padding=s?"4px":"10px",a.querySelectorAll(".custom-btn").forEach(t=>{s?(t.style.height="44px",t.style.padding="8px 16px",t.style.fontSize="14px",t.style.borderRadius="22px"):(t.style.height="32px",t.style.padding="4px 8px",t.style.fontSize="12px",t.style.borderRadius="16px")});const N=a.querySelector(".custom-slot-content");N&&(N.style.display=s?"none":"block");const i=JSON.parse(JSON.stringify(e.controls));s?(i.OverviewMap.collapsed=!0,delete i.Zoom,delete i.GlobeSwitcher,delete i.MousePosition):i.OverviewMap.collapsed=!1,a.controls=i}}
    >
      ${Y(e.storySlotContent)}
    </eox-map>
  `},ye={args:{controls:{GlobeSwitcher:{},Zoom:{},Attribution:{},FullScreen:{},Rotate:{},OverviewMap:{layers:[{type:"Tile",properties:{id:"overviewMap"},source:{type:"OSM"}}]},MousePosition:{},ScaleLine:{},Geolocation:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},ue={args:{zoom:7,controls:{Geolocation:{tracking:!0,trackHeading:!0,centerWhenReady:!1,highAccuracy:!0,trackAccuracy:!0,style:{"circle-radius":10,"circle-fill-color":"red","circle-stroke-color":"white","circle-stroke-width":2}}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},ge={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},he={args:{zoom:9,center:[0,51.5],controls:{LoadingIndicator:{type:"fullscreen",opacity:.2,spinnerSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="120 50" r="30" stroke-width="22" stroke="#cd4609" fill="none" cy="50" cx="50">
        <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.4s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
            </circle><g></g></g></svg>`},Zoom:{}},layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}}]}},fe={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"stroke-color":"red","stroke-width":3}}}}]}]}},be={args:{layers:[{type:"Vector",background:"#1366dd",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"red"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]}},Se={args:{controls:{Attribution:{}},layers:[{type:"Tile",properties:{id:"OSM"},source:{type:"OSM"}},{type:"Vector",properties:{id:"clusterLayer"},interactions:[{type:"clusterExplode",options:{id:"clusterExplodeInteraction",maxZoom:10,fitOptions:{duration:300},style:{"circle-radius":12,"circle-fill-color":"#FFD700","circle-stroke-color":"rgba(255, 255, 255, 0.7)","circle-stroke-width":2,"text-font":"normal 16px","text-value":["get","NAME"],"text-fill-color":"#000","text-offset-y":1}}}],style:[{filter:[">",["get","features","length"],1],style:{"text-value":["to-string",["get","features","length"]],"circle-radius":12,"circle-fill-color":"#FFD700","circle-stroke-color":"rgba(255, 255, 255, 0.7)","circle-stroke-width":2,"text-font":"normal 16px","text-fill-color":"#000","text-offset-y":1}},{else:!0,style:{"circle-radius":12,"circle-fill-color":"#FFD700","circle-stroke-color":"rgba(255, 255, 255, 0.7)","circle-stroke-width":2,"text-font":"normal 16px","text-value":["get","NAME"],"text-fill-color":"#000","text-offset-y":1,"fill-color":"#FFD700","fill-opacity":.5,"stroke-color":"#eeeeee","stroke-width":2}}],source:{type:"Cluster",distance:55,attributions:'Map data © <a href="https://www.naturalearthdata.com">Natural Earth</a> | City points via <a href="https://github.com/drei01/geojson-world-cities">geojson-world-cities</a>',source:{type:"Vector",url:"https://raw.githubusercontent.com/drei01/geojson-world-cities/refs/heads/master/cities.geojson",format:"GeoJSON"}}}],storyCodeBefore:'import "@eox/map/src/plugins/advancedLayersAndSources"'}},xe={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4,storySlotContent:"<eox-map-tooltip></eox-map-tooltip>"},render:e=>o`
    <eox-map
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    >
      <eox-map-tooltip></eox-map-tooltip>
    </eox-map>
  `},we={args:{layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4,storyAdditionalComponents:{"eox-map-tooltip":{storyImport:!1,storySlot:!0,propertyTransform:e=>{if(e.key.includes("COLOR"))return{key:e.key.toLowerCase(),value:e.value}}}}},render:e=>o`
    <eox-map
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    >
      <eox-map-tooltip
        .propertyTransform=${e.storyAdditionalComponents["eox-map-tooltip"].propertyTransform}
      ></eox-map-tooltip>
    </eox-map>
  `},ve={args:{id:"highlightAndAnimate",config:{layers:[{type:"Vector",background:"lightgrey",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"darkgrey"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click",style:{"stroke-color":"white","stroke-width":3}}}]}]},loadend:()=>{document.querySelector("eox-map#highlightAndAnimate").selectInteractions.selectInteraction.highlightById([664,795,789],{duration:400,padding:[50,50,50,50]})}},render:e=>o`
    <eox-map
      id=${e.id}
      .config=${e.config}
      @loadend=${e.loadend}
    ></eox-map>
  `},Ce={args:{id:"a",layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],storyAdditionalComponents:{"eox-map":{id:"b",sync:"#a",layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}]}}},render:e=>o`
    <style>
      eox-map {
        width: 50%;
      }
      .container {
        display: flex;
        height: 100%;
      }
    </style>
    <div class="container">
      <eox-map id=${e.id} .layers=${e.layers}></eox-map>
      <eox-map
        id=${e.storyAdditionalComponents["eox-map"].id}
        sync=${e.storyAdditionalComponents["eox-map"].sync}
        .layers=${e.storyAdditionalComponents["eox-map"].layers}
      ></eox-map>
    </div>
  `},Ae={argTypes:{enabled:{control:{type:"select"},options:[void 0,"first","second"]}},args:{layers:[{type:"Tile",source:{type:"OSM"}}],slot:"first",id:"compareA",storyAdditionalComponents:{"eox-map":{layers:[{type:"Tile",source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}}],id:"compareB",slot:"second",sync:"eox-map#compareA"},"eox-map-compare":{enabled:void 0,storyImport:!1,storyWrap:!0}},storyStyle:`
      eox-map-compare,
      eox-map {
        width: 100%;
        height: 100%;
      }
    `},render:e=>o`
    <style>
      eox-map-compare,
      eox-map {
        width: 100%;
        height: 100%;
      }
    </style>
    <eox-map-compare
      enabled=${e.storyAdditionalComponents["eox-map-compare"].enabled}
    >
      <eox-map slot=${e.slot} id=${e.id} .layers=${e.layers}></eox-map>
      <eox-map
        id=${e.storyAdditionalComponents["eox-map"].id}
        slot=${e.storyAdditionalComponents["eox-map"].slot}
        sync=${e.storyAdditionalComponents["eox-map"].sync}
        .layers=${e.storyAdditionalComponents["eox-map"].layers}
      ></eox-map>
    </eox-map-compare>
  `},Te={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9}}},render:e=>o`
    <eox-map .config=${e.config}></eox-map>
  `},Me={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}},{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}}],center:[16.8,48.2],zoom:7,projection:"EPSG:3857"},render:e=>o`
    <eox-map
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
      .projection=${e.projection}
    >
    </eox-map>
  `},Le={args:{layers:[{type:"Tile",properties:{id:"osm",title:"Background"},source:{type:"OSM"}}],animationOptions:{duration:500},center:[16.8,48.2],zoom:7},render:e=>o`
    <eox-map
      .center=${e.center}
      .layers=${e.layers}
      .zoom=${e.zoom}
      .animationOptions=${e.animationOptions}
    >
    </eox-map>
  `},ze={args:{config:{controls:{Zoom:{}},layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[16.8,48.2],zoom:9},preventScroll:!0}},render:e=>o`
    <eox-map .config=${e.config}></eox-map>
  `},Ge={args:{center:[16.346,48.182],zoom:12.5,layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}},{type:"Vector",properties:{id:"FlatGeoBufLayer",minZoom:12},source:{type:"FlatGeoBuf",url:"https://eox-gtif-public.s3.eu-central-1.amazonaws.com/admin_borders/STATISTIK_AUSTRIA_GEM_20220101.fgb"}}],storyCodeBefore:'import "@eox/map/src/plugins/advancedLayersAndSources"'}},ke={args:{center:[-30,64],zoom:3,layers:[{type:"Tile",properties:{id:"customId"},source:{type:"OSM"}},{type:"Vector",properties:{id:"FlatGeoBufLayer"},source:{type:"FlatGeoBuf",url:["https://eox-gtif-public.s3.eu-central-1.amazonaws.com/test_data_polartep/202602041015_CentralWest_RIC.fgb","https://eox-gtif-public.s3.eu-central-1.amazonaws.com/test_data_polartep/202602040840_SouthEast_RIC.fgb"]}}],storyCodeBefore:'import "@eox/map/src/plugins/advancedLayersAndSources"'}};var J;const Oe={args:{storySlotContent:'<custom-tooltip is="eox-map-tooltip"></custom-tooltip>',storyCodeBefore:`// Create custom-tooltip element 
 customElements.define(
      "custom-tooltip",
      class extends HTMLElement {
        constructor() {
          super();
        }
        set feature(newFeature) {
          this.innerHTML = \`
          <div class="surface-container-lowest large-padding small-round large-elevate">
            <h6 class="small bold">\${newFeature.get("ECO_NAME")}</h6>
            <hr class="medium" style="background-color: \${newFeature.get("COLOR_BIO")};" />
            <p class="small-text">
              <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-outline</title><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /></svg></i>
              \${newFeature.get("BIOME_NAME")}
            </p>
            <p class="small-text">
              <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>earth</title><path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg></i>
              \${newFeature.get("REALM")}
            </p>
          </div>
        \`;
        }
      },
    )`,layers:[{type:"Vector",source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",style:{"stroke-color":"red","stroke-width":3}}}]}],center:[15,48],zoom:4},render:e=>o(J||(J=W([`
    <script>
      `,`;
    <\/script>
    <eox-map
      .center=`,`
      .controls=`,`
      .layers=`,`
      .zoom=`,`
    >
      <custom-tooltip is="eox-map-tooltip"></custom-tooltip>
    </eox-map>
  `])),e.storyCodeBefore,e.center,e.controls,e.layers,e.zoom)},Ve={args:{layers:[{type:"Tile",properties:{title:"Terrain Light",id:"terrain-light"},source:{type:"XYZ",url:"//tiles.maps.eox.at/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}},{type:"Tile",properties:{id:"wmsLayer"},source:{type:"TileWMS",url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},ratio:1,serverType:"geoserver"},interactions:[{type:"select",options:{id:"selectInteraction",condition:"click"}}]}],center:[-10997148,4569099],zoom:4,storySlotContent:"<eox-map-tooltip></eox-map-tooltip>"},render:e=>o`
    <eox-map
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
`}});const Z=(e,r=1)=>["/",e,r],Ie=Z(["band",1],4462),_e=Z(["band",2],2820),He=Z(["band",4],6214),$e={color:["case",["any",["==",["band",1],0],["==",["band",2],0],["==",["band",3],0],["==",["band",4],0]],"#00000000",["array",He,Ie,_e,1]]},Be={args:{layers:[{type:"Tile",properties:{title:"Terrain Light",id:"terrain-light"},source:{type:"XYZ",url:"//tiles.maps.eox.at/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}},{type:"WebGLTile",properties:{id:"multipleCOGs"},style:$e,source:{type:"GeoTIFF",normalize:!1,sources:[{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/B04.tif",max:4462},{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/B03.tif",max:2820},{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/B02.tif",max:2170},{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/B08.tif",max:6214}]},interactions:[{type:"select",options:{id:"selectInteraction",condition:"pointermove",precision:2,coordinates:!0,projection:{name:"EPSG:19869",proj4_string:"+proj=cea +R_A +lat_ts=30 +lon_0=0 +x_0=0 +y_0=0"}}}]}],center:[3735055,1886786],zoom:8,storySlotContent:'<custom-coordinates-tooltip is="eox-map-tooltip"></custom-coordinates-tooltip>',storyCodeBefore:`customElements.define(
  "custom-coordinates-tooltip",
  class extends HTMLElement {
    constructor() {
      super();
    }
    set feature(newFeature) {
      this.innerHTML = \`
<div class="surface-container-lowest small-padding small-round large-elevate">
  <h6 class="small bold" style="color:#024170;">Bands</h6>
  <hr class="small" style="background-color: black;" />

    <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-outline</title><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /></svg></i>
    <b>Band 1:</b> \${newFeature.get("band1")}
  <br>
    <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-outline</title><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /></svg></i>
    <b>Band 2:</b> \${newFeature.get("band2")}
  <br>
    <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-outline</title><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /></svg></i>
    <b>Band 3:</b> \${newFeature.get("band3")}
  <br>
    <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-outline</title><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /></svg></i>
     <b>Band 4:</b> \${newFeature.get("band4")}
  <h6 class="small bold" style="color:#024170;">Coordinates</h6>
  <hr class="small" style="background-color: black;" />

    <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>earth</title><path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg></i>
    <b>LON:</b> \${newFeature.get("lon")}
  <br>
    <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>earth</title><path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg></i>
    <b>LAT:</b> \${newFeature.get("lat")}


</div>
\`;
    }
  },
);

/// Utility function to normalize values for color rendering
const normalize = (value, max = 1) => ["/", value, max];

const falseRed = normalize(["band", 1], 4462);
const falseGreen = normalize(["band", 2], 2820);
const falseNir = normalize(["band", 4], 6214);
// Utility function to create a color array for false color rendering style
const falseColor = {
  color: [
    "case",
    [
      "any",
      ["==", ["band", 1], 0],
      ["==", ["band", 2], 0],
      ["==", ["band", 3], 0],
      ["==", ["band", 4], 0],
    ],
    "#00000000",
    ["array", falseNir, falseRed, falseGreen, 1],
  ],
};`},render:e=>o`
    <eox-map
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .zoom=${e.zoom}
    >
      <custom-coordinates-tooltip
        is="eox-map-tooltip"
      ></custom-coordinates-tooltip>
    </eox-map>
  `};window.buffer=q;window.transform=X;window.transformExtent=K;var U;const Fe={args:{layers:[{type:"Tile",properties:{id:"osm"},source:{type:"OSM"}},{type:"Vector",properties:{id:"vector"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON"}}],storyCodeBefore:'import { buffer, transform, transformExtent } from "@eox/map";',storyCodeAfter:`
    // Register projection via proj4 with name and definition
eoxMap.registerProjection(
  'EPSG:21781',
  '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 ' +
    '+x_0=600000 +y_0=200000 +ellps=bessel ' +
    '+towgs84=660.077,13.551,369.344,2.484,1.783,2.939,5.66 +units=m +no_defs',
);

// Register projection from EPSG code
eoxMap.registerProjectionFromCode(3035);

// Get layer by id from map
console.log(eoxMap.getLayerById("osm"));

// Get flat layers array from map
console.log(eoxMap.getFlatLayersArray(eoxMap.layers));

// Parse feature
eoxMap.addEventListener("loadend", () => {
  console.log(eoxMap.parseFeature(eoxMap.getLayerById("vector").getSource().getFeatures()));

  eoxMap.parseTextToFeature(
    JSON.stringify({ type: "FeatureCollection", features: [{"type": "Feature", "geometry": {"type": "Polygon", "coordinates": [[[146.9, -2], [146.7, -2], [146.6, -2], [146.7, -2.2], [146.8, -2.2], [146.9, -2.2], [147.2, -2.2], [147.3, -2], [147.1, -2], [146.9, -2]]]}, "id": 135, "properties": {}}] }),
    eoxMap.getLayerById("vector"),
    eoxMap,
    true,
    true,
  );
  
  // Create buffer around extent
  console.log(buffer(eoxMap.map.getView().calculateExtent(), 100))

  // Transform
  console.log(transform([100000, 100000], "EPSG:3857", "EPSG:4326"));

  // Transform extent
  console.log(transformExtent(eoxMap.map.getView().calculateExtent(), "EPSG:3857", "EPSG:4326"));
})

    `},render:e=>o(U||(U=W([`
    <eox-map .layers=`,`></eox-map>
    <script type="module">
      const eoxMap = document.querySelector("eox-map");
      `,`;
    <\/script>
  `])),e.layers,e.storyCodeAfter)},Ee={args:{center:[15,48],projection:"globe",globeConfig:{terrain:!0,useHighLOD:!0},layers:[{type:"Tile",properties:{id:"cloudless",title:"Sentinel-2 Cloudless 2024"},source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2024_3857/default/g/{z}/{y}/{x}.jpg",crossOrigin:"anonymous"}},{type:"WebGLTile",style:{variables:{vmin:2,vmax:5,settlementDistance:0},color:["case",["all",[">",["band",1],1],[">=",["band",2],["var","settlementDistance"]]],["interpolate",["linear"],["/",["-",["band",1],["var","vmin"]],["-",["var","vmax"],["var","vmin"]]],0,[68,1,84,1],.067,[70,23,103,1],.133,[71,44,122,1],.2,[65,63,131,1],.266,[59,81,139,1],.333,[52,97,141,1],.4,[44,113,142,1],.467,[39,129,142,1],.533,[33,144,141,1],.6,[39,173,129,1],.666,[66,187,114,1],.733,[92,200,99,1],.8,[131,210,75,1],.867,[170,220,50,1],.933,[212,226,44,1],1,[253,231,37,1]],["color",0,0,0,0]]},properties:{id:"tile",title:"Solar Energy COG Example",layerConfig:{type:"style",legend:{title:"Global horizontal irradiation",range:["rgba(253, 231, 37, 1)","rgba(33, 144, 141, 1)","rgba(68, 1, 84, 1)"],domainProperties:["vmin","vmax"]},schema:{type:"object",title:"Data configuration",properties:{settlementDistance:{type:"number",minimum:0,maximum:5e3,format:"range",default:0},vminmax:{title:"Global horizontal irradiation",description:"[kWh/m²/day]",type:"object",properties:{vmin:{type:"number",minimum:0,maximum:5,format:"range",default:2},vmax:{type:"number",minimum:0,maximum:5,format:"range",default:5}},format:"minmax"}}}}},source:{type:"GeoTIFF",normalize:!1,sources:[{url:"https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/v2/SolarPowerPotential_Annual_COG_clipped_3857_fixed.tif"},{url:"https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/WSF_EucDist_Austria_3857_COG_fix.tif"}]}}],zoom:4}},We={title:"Elements/eox-map",tags:["autodocs"],component:"eox-map",render:e=>o`
    <style>
      #story--elements-eox-map--primary--primary-inner eox-map {
        height: 300px;
      }
    </style>
    <eox-map
      .center=${e.center}
      .controls=${e.controls}
      .layers=${e.layers}
      .projection=${e.projection}
      .zoom=${e.zoom}
      .globeConfig=${e.globeConfig}
    ></eox-map>
  `},n=ee,l=Te,c=oe,p=te,d=re,m=se,y=Ge,u=ke,g=ae,h=ie,f=ne,b=le,S=ce,x=pe,w=de,v=ye,C=me,A=ue,T=ge,M=he,L=fe,z=be,G=Se,k=xe,O=Ve,V=we,I=Oe,_=Be,H=ve,$=Ce,B=Ae,F=Me,E=Le,j=ze,P=Fe,R=Ee;n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"PrimaryStory",...n.parameters?.docs?.source},description:{story:'Basic map rendered using `eox-map` configuration\n\nThis renders a map centered on Austria (`lon` of `15`, and `lat` of `48`), with a `zoom` of `7`. The `layers` property allows creating one or multiple layers, in this case it is creating one layer of type `Tile` (analog to OpenLayers `Tile` layer), with a source of type `OSM`(analog to Openlayers `OSM` source).\n\nNote that `properties.id` has been set. It is strongly recommended to always set a `properties.id` so that `eox-map` can perform smart layer updates (in essence, checking if the layer type is compatible, then keep it and switch out the source, or replacing the entire layer if the id is the same, or discarding the layer if the id is not present any longer after a property update).\n\nThe `properties` passed in this object are passed along to the OpenLayers layer, so they are available there via the `get("<property>")` syntax, e.g. `eoxMap.map.getLayers().getArray()[0].get("id")`. `eox-map` also offers a helper function to get a layer by id: `eoxMap.getLayerById("<id>")`; this helper function also works recursively, so it finds layers inside groups as well.\n\nNotice that the `eox-map` DOM element has a property `map` which stores a reference to the actual OpenLayers map instance, so one could do e.g. `eoxMap.map.getView().getCenter()`, and other native OpenLayers things.',...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"ConfigObjectStory",...l.parameters?.docs?.source},description:{story:`Instead of passing each property individually, one can also pass a \`config\` property:
Note two things here: when using the \`config\` property, then \`center\` and \`zoom\` are nested inside the \`view\` property. Secondly, this example includes \`controls\`: by passing \`Zoom: {}\` this enables the OpenLayers \`Zoom\` control, without any options (which could be passed inside the object).
\`config\` supports the following properties:

\`\`\`ts
export type ConfigObject = {
  controls: ControlDictionary;
  layers: EoxLayers;
  view: {
    center: Array<number>;
    zoom: number;
    zoomExtent?: import("ol/extent").Extent;
    projection?: ProjectionLike;
    minZoom?: number;
    maxZoom?: number;
  };
  preventScroll: boolean;
  animationOptions?: EOxAnimationOptions;
};
\`\`\`

\`\`\`ts
export type ControlDictionary = {
  Zoom?: ConstructorParameters<typeof import("ol/control/Zoom").default>[0];
  ScaleLine?: ConstructorParameters<
    typeof import("ol/control/ScaleLine").default
  >[0];
  Rotate?: ConstructorParameters<typeof import("ol/control/Rotate").default>[0];
  FullScreen?: ConstructorParameters<
    typeof import("ol/control/FullScreen").default
  >[0];
  ZoomSlider?: ConstructorParameters<
    typeof import("ol/control/ZoomSlider").default
  >[0];
  Attribution?: ConstructorParameters<
    typeof import("ol/control/Attribution").default
  >[0];
  OverviewMap?: Override<
    ConstructorParameters<typeof import("ol/control/OverviewMap").default>[0],
    { layers?: EoxLayer[] | AnyLayer[] }
  >;
  ZoomToExtent?: ConstructorParameters<
    typeof import("ol/control/ZoomToExtent").default
  >[0];
  MousePosition?: ConstructorParameters<
    typeof import("ol/control/MousePosition").default
  >[0];
  Geolocation?: ConstructorParameters<
    typeof import("./controls/geo-location").default
  >[0];
  LoadingIndicator?: ConstructorParameters<
    typeof import("./controls/loading-indicator").default
  >[0];
};
\`\`\`

\`\`\`ts
export type ProjectionLike = import("ol/proj").ProjectionLike;
\`\`\`

\`\`\`ts
export type EOxAnimationOptions = import("ol/View").AnimationOptions &
import("ol/View").FitOptions;
\`\`\``,...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"VectorLayerStory",...c.parameters?.docs?.source},description:{story:"Basic vector layer map rendered using `GeoJSON`\nThis example also shows how to pass multiple layers (two objects in the layers array).\nNotice that no zoom or center are set; they default to center `[0, 0]` and `zoom`of `0`.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"VectorTileLayerStory",...p.parameters?.docs?.source},description:{story:"Basic vector layer map rendered using `MVT` tiles",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"WMSLayerStory",...d.parameters?.docs?.source},description:{story:"Renders WMS layer using geo-server",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"WMTSCapabilitiesLayerStory",...m.parameters?.docs?.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...m.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"FlatGeoBufStory",...y.parameters?.docs?.source},description:{story:"Renders `FlatGeoBuf` layer",...y.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"FlatGeoBufStoryMultipleUrls",...u.parameters?.docs?.source},description:{story:"Renders `FlatGeoBuf` layer",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"WMTSTileGridStory",...g.parameters?.docs?.source},description:{story:"Renders `WMTSCapabilities` layer and fetches the provided capabilities url",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"StaticImageLayerStory",...h.parameters?.docs?.source},description:{story:"Renders a static image layer",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"STACLayerStory",...f.parameters?.docs?.source},description:{story:"Renders STAC Layer using STAC url json.",...f.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"MapboxStyleLayerStory",...b.parameters?.docs?.source},description:{story:"Renders a Layer Composition using Mapbox Styles.\n\nA layer of type `MapboxStyle` can take any Mapbox-Style object or URL to an Mapbox-Style document.\nThe `mapboxStyle` property and the `applyOptions` property of the EOxLayer are mapped to `style`- and `options`-property of `apply` of `ol-mapbox-style` respectively.\n(compare https://openlayers.org/ol-mapbox-style/functions/apply.html)",...b.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"GeoTIFFLayerStory",...S.parameters?.docs?.source},description:{story:"Renders `GeoTIFF` layer as `WebGLTile`",...S.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"GeoZarrLayerStory",...x.parameters?.docs?.source},description:{story:"Renders `GeoZarr` layer as `WebGLTile`",...x.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"GroupLayerStory",...w.parameters?.docs?.source},description:{story:"Renders `Group` layer which contains multiple layers in a group",...w.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"ControlsStory",...v.parameters?.docs?.source},description:{story:"Renders different `Controls` for the `eox-map` using control config",...v.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"ControlsLayoutStory",...C.parameters?.docs?.source},description:{story:'Renders different `Controls` for the `eox-map` using layout API with `position`, `target` and `orientation` options, and demonstrates how to slot in custom HTML elements as controls in the different regions.\n\nYou can customize the position, grouping, and orientation of map controls.\nBy combining `position`, `target` and `orientation` (`horizontal`|`vertical`), you\ncan flexibly lay out controls to match your UI needs.\nCustom controls can also be passed directly to the map via `<slot>`s targeted\nto specific regions (e.g. `<div slot="top-right">...</div>`).\n\n**Mobile Support**: The \\`eox-map\\` component emits a \\`resize\\` event with the width and height\nof its container. Developers can leverage this event to modify the controls object being passed down,\nand adjust CSS sizing properties (like \\`--map-control-size\\`) on the fly to support narrow screens.',...C.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"GeolocationStory",...A.parameters?.docs?.source},description:{story:"Renders Geolocation Control in `eox-map`",...A.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"StandardLoadingIndicatorStory",...T.parameters?.docs?.source},description:{story:"A simple, unobtrusive loading indicator in the bottom left that appears any time when the map is loading.",...T.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"CustomFullScreenLoadingIndicatorStory",...M.parameters?.docs?.source},description:{story:"Loading Indicators can also be centered over the entire map by setting the option `type` to `'fullscreen'`, adapting the opacity is adviced when doing so.",...M.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"HoverSelectStory",...L.parameters?.docs?.source},description:{story:"Renders `eox-map` with `Hover` interaction",...L.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"ClickSelectStory",...z.parameters?.docs?.source},description:{story:"Renders `eox-map` with `Click` interaction",...z.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:"ClusterExplodeStory",...G.parameters?.docs?.source},description:{story:"Renders `eox-map` with `Cluster-Explode` interaction",...G.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"TooltipStory",...k.parameters?.docs?.source},description:{story:"`eox-map` offers a built-in tooltip, which needs to be placed inside the default slot:\n```\n<eox-map [...]>\n  <eox-map-tooltip></eox-map-tooltip>\n</eox-map>\n```\nThe tooltip feature supports Vector, VectorTile, WebGLTile, and (wms) Tile layers.\nwhen hovering or clicking a feature, the tooltip will be updated with the feature properties.\nThis renders a list of all feature properties of the currently selected feature.\nNote that if multiple interactions are registered (e.g. `pointermove` and `singleclick`),\nthe `pointermove` interaction will have higher priority for the tooltip.",...k.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"GetFeatureInfoTooltipStory",...O.parameters?.docs?.source},description:{story:"* The `eox-map` tooltip can also be used to display information about a feature in a (wms) Tile layers on click",...O.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:"TooltipWithPropertyTransformStory",...V.parameters?.docs?.source},description:{story:'The rendering of feature properties inside the tooltip can be transformed\nby passing a `propertyTransform` function to the tooltip element which applies to each property in the rendering loop:\n```\n<eox-map [...]>\n  <eox-map-tooltip\n    .propertyTransform=${({key, value}, feature) => key.includes("COLOR") ? { key: key.toLowerCase(), value }}\n  ></eox-map-tooltip>\n</eox-map>\n```\n\nThe first argument are `key` and `value` of the current feature property; this object needs to be\nreturned in order to render the property in the list.\nAdditionally, the entire feature is passed as a second argument, for cases of more advanced property\ntransformation in which needs access to the entire feature.',...V.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"CustomTooltipStory",...I.parameters?.docs?.source},description:{story:'Instead of the built-in `eox-map-tooltip`, it is possible to use any other (custom) element as tooltip by setting the `is` attribute:\n```\n<eox-map [...]>\n  <custom-element is="eox-map-tooltip"></custom-element>\n</eox-map>\n```\n\nThis custom tooltip is updated each time a feature is selected by setting its `feature` property; it can also be updated manually by e.g. hooking into the `@select` event.',...I.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"CoordinatesCustomTooltipsStory",..._.parameters?.docs?.source},description:{story:"* The `eox-map` tooltip can also be used to display information about a COG's pixel.\nThe tooltip will then display the bands values of the hovered/clicked feature.\nThe tooltip can also provide coordinates of the clicked/selected pixel, it will show it in WGS84 by default.\nThe coordinates can be transformed to any other projection by setting the `projection` property of the tooltip.\nThe displayed coordinates decimal places can be set via the `precision` property.",..._.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:"HighlightFeaturesAndAnimateStory",...H.parameters?.docs?.source},description:{story:"Select interactions offer a `highlightById` method, with which vector features can be programmatically selected via their id property.\nIt expects an array with a list of ids to be selected.\nOptionally, passing a second argument allows to set the [`fitOptions`](https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions),\nadding view animation to the selection.",...H.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"MapSyncStory",...$.parameters?.docs?.source},description:{story:'Sync the views of two maps using the `sync` attribute (e.g. `sync="eox-map#a"`).',...$.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:"ABCompareStory",...B.parameters?.docs?.source},description:{story:'To compare two maps, wrap them in an `<eox-map-compare>` element and assign them to the slot `first` and `second`.\nAlso use the `sync` attribute so both move their view together.\n\n`eox-map-compare` also takes a `value` property (0 - 100) which determines the position of the comparison slider;\nand an `enabled` attribute, which can be either `"first"` (only left map visible), `"second"` (only second map visible)\nor `undefined` (default, both visible).\n\nIn the Controls panel, try changing the `enabled` attribute to `"first"` or `"second"` and see how only one map is visible.',...B.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:"ProjectionStory",...F.parameters?.docs?.source},description:{story:"The projection of the view can be changed via the `projection`-attribute/property.\nOut-of-the-box the projections EPSG:3857 (default) and EPSG:4326 (geographic coordinates)\nare included, additional projections can be used by registering them via the `registerProjection` or\n`registerProjectionFromCode` helper functions beforehand.\nIn the Controls panel, try changing the projection from the default `EPSG:3857` to `EPSG:4326` and see\nhow the map instantly updates.",...F.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"AnimationsStory",...E.parameters?.docs?.source},description:{story:"changing the properties `zoom`, `center` or `zoomExtent` will trigger animations, if the\n`animationOptions`-property is set.\nanimation options for `zoom` or `center`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~AnimationOptions\nanimation options for `zoomExtent`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions\nIn the Controls panel, try changing the `zoom` or `center` properties and see how the map animates to the new view.",...E.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"PreventScrollStory",...j.parameters?.docs?.source},description:{story:"By setting the `prevent-scroll` attribute or by setting `preventScroll` property to `true` (either on the element or within the config object),\nthe map doesnt mouse-scroll (on desktop) or drag-touch (on tab/mobile). Pressing the platform modifier key (ctrl/cmd) will enable scrolling.\nUseful for maps embedded in scrollable websites.",...j.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:"HelperMethodsStory",...P.parameters?.docs?.source},description:{story:`The \`eox-map\` offers a number of maprelated and map-unrelated helper methods. The map-related ones directly affect (or read from) the
map state, whereas the unrelated ones are general helper methods.

In this story, an example for each helper method is shown - please refer to the console to read the outputs.`,...P.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"GlobeStory",...R.parameters?.docs?.source},description:{story:'Basic Globe rendered using `projection: "globe"`, and OpenGlobus as globe renderer.\nWhen the projection of the view can is set to "globe", the map will render as a 3D globe.\nThe `globeConfig` property allows to configure the globe, e.g. setting `terrain` to `true` to enable terrain rendering, or `useHighLOD` to `true` for higher level of detail.\nThis example renders a globe centered on Austria, with 2 layers: an XYZ tile layer as base layer, and a GeoTiff layer on top.\nThe GeoTiff layer is rendered as a CanvasTiles layer in OpenGlobus, while the XYZ layer is rendered natively in the OpenGlobus.',...R.parameters?.docs?.description}}};const Ze=["Primary","ConfigObject","VectorLayer","VectorTileLayer","WMSLayer","WMTSCapabilitiesLayer","FlatGeoBuf","FlatGeoBufTwoUrls","WMTSTileGrid","StaticImage","STACLayer","MapboxStyleLayer","GeoTIFFLayer","GeoZarrLayer","GroupLayer","Controls","ControlsLayout","Geolocation","StandardLoadingIndicator","CustomFullScreenLoadingIndicator","HoverSelect","ClickSelect","ClusterExplode","Tooltip","GetFeatureInfoTooltip","TooltipWithPropertyTransform","CustomTooltip","CoordinatesCustomTooltips","HighlightFeaturesAndAnimate","MapSync","ABCompare","Projection","Animations","PreventScroll","HelperMethods","Globe"];export{B as ABCompare,E as Animations,z as ClickSelect,G as ClusterExplode,l as ConfigObject,v as Controls,C as ControlsLayout,_ as CoordinatesCustomTooltips,M as CustomFullScreenLoadingIndicator,I as CustomTooltip,y as FlatGeoBuf,u as FlatGeoBufTwoUrls,S as GeoTIFFLayer,x as GeoZarrLayer,A as Geolocation,O as GetFeatureInfoTooltip,R as Globe,w as GroupLayer,P as HelperMethods,H as HighlightFeaturesAndAnimate,L as HoverSelect,$ as MapSync,b as MapboxStyleLayer,j as PreventScroll,n as Primary,F as Projection,f as STACLayer,T as StandardLoadingIndicator,h as StaticImage,k as Tooltip,V as TooltipWithPropertyTransform,c as VectorLayer,p as VectorTileLayer,d as WMSLayer,m as WMTSCapabilitiesLayer,g as WMTSTileGrid,Ze as __namedExportsOrder,We as default};
