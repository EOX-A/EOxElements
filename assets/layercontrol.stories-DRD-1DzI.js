import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{d as t,t as n}from"./lit-D8IuYOuz.js";import{Y as ee,t as te}from"./helpers-DUr2cyRQ.js";import{t as r}from"./color-legend-element-C-fBQVnz.js";var ne,re;function ie(){return(ie=e((()=>{ne={ship_class:`nis`,type_of_ice:`standard`,type_of_visualisation:`polaris`,combined_prop:`polaris_standard_pc_nis_rio`},re={variables:ne,"fill-color":[`case`,[`==`,[`var`,`type_of_visualisation`],`WMO Concentration`],[`match`,[`get`,`wmo_concentration`],`Ice Free`,[0,100,255,1],`Open Water (< 1/10 ice)`,[150,200,255,1],`Bergy Water`,[150,200,255,1],`1/10`,[140,255,159,1],`2/10`,[140,255,159,1],`3/10`,[140,255,159,1],`4/10`,[255,255,0,1],`5/10`,[255,255,0,1],`6/10`,[255,255,0,1],`7/10`,[255,125,7,1],`8/10`,[255,125,7,1],`9/10`,[255,0,0,1],`10/10`,[255,0,0,1],`9/10 to 10/10 ice, 9+/10`,[255,0,0,1],`Unknown/Undetermined`,[255,255,255,1],[255,255,255,1]],[`==`,[`var`,`type_of_visualisation`],`WMO Stage of Development`],[`match`,[`get`,`wmo_stage_of_development`],`Ice Free`,[0,100,255,1],`Brash Ice`,[0,0,0,0],`No stage of development`,[0,0,0,0],`New Ice`,[240,210,250,1],`Nilas Ice Rind (<10 cm)`,[255,100,255,1],`Young Ice (10 to 30 cm)`,[0,0,0,0],`Grey Ice`,[135,60,215,1],`Grey-White Ice`,[220,80,235,1],`First Year Ice (>30 cm) or Brash Ice`,[255,255,0,1],`Thin First Year Ice (30 to 70 cm)`,[155,210,0,1],`Medium First Year Ice (70 to 120 cm)`,[0,200,20,1],`Thick First Year Ice (>120 cm)`,[0,120,0,1],`Old Ice`,[180,100,50,1],`Second-Year Ice`,[255,120,10,1],`Multi-Year Ice`,[200,0,0,1],`Bergy Water`,[255,255,255,1],`Unknown/Undetermined`,[255,255,255,1],[0,0,0,0]],[`==`,[`var`,`type_of_visualisation`],`polaris`],[`case`,[`==`,[`get`,`polygon_type`],`Ice Free`],[0,100,255],[`==`,[`get`,[`var`,`combined_prop`]],`RIO > 20: Normal Operation`],[54,122,74,1],[`==`,[`get`,[`var`,`combined_prop`]],`>= 10 RIO < 20: Normal Operation`],[62,150,85,1],[`==`,[`get`,[`var`,`combined_prop`]],`>= 0 RIO < 10: Normal Operation`],[102,188,118,1],[`==`,[`get`,[`var`,`combined_prop`]],`>= -10 RIO < 0: Operation subject to special consideration`],[252,251,1,1],[`==`,[`get`,[`var`,`combined_prop`]],`>= -20 RIO < -10: Operation subject to special consideration`],[227,108,9,1],[`==`,[`get`,[`var`,`combined_prop`]],`RIO < -20: Operation subject to special consideration`],[188,1,6,1],[`==`,[`get`,[`var`,`combined_prop`]],`<= -10 RIO < 0: Elevated operational risk`],[252,251,1,1],[0,0,0,1]],[0,0,0,0]],"stroke-color":`black`,"stroke-width":1}})))()}var i,a,o,s,c,l,u,d,f,p,ae,oe,m,h,g,se,ce,le,ue,de,fe,pe,me,he,_,ge;function v(){return(v=e((()=>{ie(),i=`https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54`,a=e=>`//tiles.maps.eox.at/wmts/1.0.0/${e}/default/g/{z}/{y}/{x}.jpg`,o=e=>({type:`Tile`,properties:{title:`EOxCloudless ${e}`},source:{type:`XYZ`,url:a(`s2cloudless-${e}_3857`),attribution:`EOxCloudless <a href="https://cloudless.eox.at" target="_blank" rel="noreferrer">https://cloudless.eox.at</a> by <a href="https://eox.at" target="_blank">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data ${e})`}}),s=`width: 350px;`,c=`width: 400px; height: 300px; margin-left: 7px;`,l={wind:{type:`Tile`,properties:{id:`WIND`,title:`WIND`},source:{type:`TileWMS`,url:i,params:{LAYERS:`AWS_VIS_WIND_V_10M`}}},no2:{type:`Tile`,properties:{id:`NO2`,title:`NO2`},source:{type:`TileWMS`,url:i,params:{LAYERS:`AWS_NO2-VISUALISATION`}}}},u={type:`Vector`,properties:{title:`Regions`,id:`regions`,description:`Ecological regions of the earth.`},source:{type:`Vector`,url:`https://openlayers.org/data/vector/ecoregions.json`,format:`GeoJSON`,attributions:`Regions: @ openlayers.org`}},d={type:`WebGLTile`,properties:{id:`s2`,layerControlExclusive:!0,title:`EOxCloudless 2024 Exploitation Ready`},style:{variables:{red:1,green:2,blue:3,redMax:3e3,greenMax:3e3,blueMax:3e3},color:[`array`,[`/`,[`band`,[`var`,`red`]],[`var`,`redMax`]],[`/`,[`band`,[`var`,`green`]],[`var`,`greenMax`]],[`/`,[`band`,[`var`,`blue`]],[`var`,`blueMax`]],1],gamma:1.1},source:{type:`GeoTIFF`,normalize:!1,attributions:`EOxCloudless <a href="https://cloudless.eox.at" target="_blank" rel="noreferrer">https://cloudless.eox.at</a> by <a href="https://eox.at" target="_blank">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2024)`,sources:[{url:`https://cloudlessdownloads.eox.at/api/public/dl/jvu06wnt/exploitation-ready-epsg-4326/exploitation-ready_eoxcloudless-sentinel-2-2024_zoom-1_4bands_16bit.tif`}]}},f={type:`Tile`,properties:{id:`osm`,title:`Open Street Map`,layerControlExclusive:!0},visible:!1,opacity:.5,source:{type:`OSM`}},p={type:`Tile`,properties:{id:`terrain-light`,title:`Terrain Light`},source:{type:`XYZ`,url:a(`terrain-light_3857`)}},ae=o(`2019`),oe=o(`2020`),m=o(`2021`),h=[{type:`Group`,properties:{id:`group1`,title:`Background Layers`},layers:[f,d]},{type:`Group`,properties:{id:`group2`,title:`Data Layers`,layerControlExpand:!0,description:`# Hello world`},layers:[l.wind,l.no2,u]}],g={type:`Tile`,properties:{id:`customId`,title:`Tile XYZ`,layerControlToolsExpand:!0,layerConfig:{schema:{type:`object`,properties:{vminmax:{type:`object`,properties:{vmin:{type:`number`,minimum:0,maximum:10,format:`range`},vmax:{type:`number`,minimum:0,maximum:10,format:`range`}},format:`minmax`},cbar:{type:`string`,enum:[`rain`,`temperature`]}}}}},source:{type:`XYZ`,url:`https://reccap2.api.brockmann-consult.de/api/tiles/cop28~reccap2-9x108x139-0.0.1.zarr/deforested_biomass/{z}/{y}/{x}?crs=EPSG:3857&time=2018-01-01T00:00:00Z&vmin=0&vmax=3&cbar=rain`}},se={variables:{vmin:0,vmax:500,crop:`Maize`,vstat:`average`},"fill-color":[`case`,[`==`,[`get`,`water_need`,[`var`,`crop`],[`var`,`vstat`]],`N/A`],[253,231,37,.25],[`interpolate`,[`linear`],[`/`,[`-`,[`get`,`water_need`,[`var`,`crop`],[`var`,`vstat`]],[`var`,`vmin`]],[`var`,`vmax`]],0,[68,1,84,1],.06666666666666667,[70,23,103,1],.13333333333333333,[71,44,122,1],.2,[65,63,131,1],.26666666666666666,[59,81,139,1],.3333333333333333,[52,97,141,1],.4,[44,113,142,1],.4666666666666667,[39,129,142,1],.5333333333333333,[33,144,141,1],.6,[39,173,129,1],.6666666666666666,[66,187,114,1],.7333333333333333,[92,200,99,1],.8,[131,210,75,1],.8666666666666667,[170,220,50,1],.9333333333333333,[212,226,44,1],1,[253,231,37,1]]],"stroke-color":`black`,"stroke-width":1},ce={type:`object`,title:`Data configuration`,properties:{crop:{title:`Crop`,type:`string`,enum:[`Maize`,`Soybean`,`Sunflower`,`Wheat`],default:`Maize`},vstat:{title:`Statistical value`,type:`string`,enum:[`average`,`best`,`worst`],default:`average`},vminmax:{title:`Dynamic range`,description:`Water need [mm]`,type:`object`,properties:{vmin:{type:`number`,minimum:0,maximum:800,format:`range`,default:0},vmax:{type:`number`,minimum:0,maximum:800,format:`range`,default:500}},format:`minmax`}}},le={type:`Vector`,source:{type:`Vector`,url:`/cropomhusc.json`,format:{type:`GeoJSON`,dataProjection:`EPSG:3035`}},properties:{id:`id`,title:`Crop Yield Vector Example`,layerConfig:{schema:ce,style:se}}},ue={type:`style`,legend:{title:`Global horizontal irradiation`,range:[`rgba(253, 231, 37, 1)`,`rgba(33, 144, 141, 1)`,`rgba(68, 1, 84, 1)`],domainProperties:[`vmin`,`vmax`]},schema:{type:`object`,title:`Data configuration`,properties:{settlementDistance:{type:`number`,minimum:0,maximum:5e3,format:`range`,default:0},vminmax:{title:`Global horizontal irradiation`,description:`[kWh/m²/day]`,type:`object`,properties:{vmin:{type:`number`,minimum:0,maximum:5,format:`range`,default:2,step:.001},vmax:{type:`number`,minimum:0,maximum:5,format:`range`,default:5}},format:`minmax`}}}},de={variables:{vmin:2,vmax:5,settlementDistance:0},color:[`case`,[`all`,[`>`,[`band`,1],1],[`>=`,[`band`,2],[`var`,`settlementDistance`]]],[`interpolate`,[`linear`],[`/`,[`-`,[`band`,1],[`var`,`vmin`]],[`-`,[`var`,`vmax`],[`var`,`vmin`]]],0,[68,1,84,1],.067,[70,23,103,1],.133,[71,44,122,1],.2,[65,63,131,1],.266,[59,81,139,1],.333,[52,97,141,1],.4,[44,113,142,1],.467,[39,129,142,1],.533,[33,144,141,1],.6,[39,173,129,1],.666,[66,187,114,1],.733,[92,200,99,1],.8,[131,210,75,1],.867,[170,220,50,1],.933,[212,226,44,1],1,[253,231,37,1]],[`color`,0,0,0,0]]},fe={type:`Vector`,source:{type:`FlatGeoBuf`,url:`https://eox-gtif-public.s3.eu-central-1.amazonaws.com/EOX/polaris/202408131425_CapeFarewell_RIC-processed.fgb`,format:`GeoJSON`},properties:{id:`Polaris_algorithm_dmi_demo;:;2024-08-13T00:00:00Z;:;0`,title:`Polaris Results demo`,layerConfig:{schema:{type:`object`,title:`Data configuration`,properties:{type_of_visualisation:{title:`Type of Visualisation`,type:`string`,enum:[`polaris`,`WMO Concentration`,`WMO Stage of Development`,`AIRSS Ice Numeral Go/No Go`],options:{enum_titles:[`POLARIS`,`WMO Concentration`,`WMO Stage of Development`,`AIRSS Ice Numeral Go/No Go`]},default:`polaris`},ship_class:{title:`Ship Class`,type:`string`,enum:[`pc_1`,`pc_2`,`pc_3`,`pc_4`,`pc_5`,`pc_6`,`pc_7`,`pc_ias`,`pc_ia`,`pc_ib`,`pc_ic`,`pc_nis`],options:{enum_titles:[`PC1`,`PC2`,`PC3`,`PC4`,`PC5`,`PC6`,`PC7`,`PC IA Super`,`PC IA`,`PC IB`,`PC IC`,`PC NIS`]},default:`pc_nis`},type_of_ice:{title:`Type of Ice (decayed/standard)`,type:`string`,enum:[`standard`,`decayed`],default:`standard`},combined_prop:{type:`string`,template:`{{vis}}_{{ice}}_{{ship}}_rio`,options:{hidden:!0},watch:{vis:`type_of_visualisation`,ice:`type_of_ice`,ship:`ship_class`}}}},type:`style`,legend:[{title:`Total concentration colour code standard`,range:[`#367a4a`,`#3e9655`,`#66bc76`,`#fcfb01`,`#e36c09`,`#bc0106`,`#fcfb01`],domain:[`RIO > 20: Normal Operation`,`>= 10 RIO < 20: Normal Operation`,`>= 0 RIO < 10: Normal Operation`,`>= -10 RIO < 0: Operation subject to special consideration`,`>= -20 RIO < -10: Operation subject to special consideration`,`RIO < -20: Operation subject to special consideration`,`<= -10 RIO < 0: Elevated operational risk`],scaleType:`categorical`,markType:`circle`,boundTo:{key:`type_of_visualisation`,value:`polaris`}},{title:`WMO Concentration`,range:[`#8cff9f`,`#ffff00`,`#ff7d07`,`#ff0000`],domain:[`1 - 3`,`4 - 6`,`7 - 9`,`10`],scaleType:`categorical`,markType:`circle`,boundTo:{key:`type_of_visualisation`,value:`WMO Concentration`}}],style:re,layerLegend:{title:`Total concentration colour code standard`,range:[`#367a4a`,`#3e9655`,`#66bc76`,`#fcfb01`,`#e36c09`,`#bc0106`,`#fcfb01`],domain:[`RIO > 20: Normal Operation`,`>= 10 RIO < 20: Normal Operation`,`>= 0 RIO < 10: Normal Operation`,`>= -10 RIO < 0: Operation subject to special consideration`,`>= -20 RIO < -10: Operation subject to special consideration`,`RIO < -20: Operation subject to special consideration`,`<= -10 RIO < 0: Elevated operational risk`],scaleType:`categorical`,markType:`circle`}}}},pe={type:`Tile`,properties:{id:`jaxa-wms-smc`,title:`JAXA WMS`,layerControlToolsExpand:!0,layerConfig:{legend:{domain:[0,300,600,750,900,1200,1500],range:[`#9f409f`,`#2187f9`,`#76f6ff`,`#99e599`,`#f6fc81`,`#ff8a7f`,`#8b0b0b`],scaleType:`continuous`,tickFormat:`.0f`,title:`mgC/m²/day`},schema:{type:`object`,properties:{TIME:{type:`string`,title:`Time`,enum:[`2022-01-01T00:00:00.000Z`,`2022-02-01T00:00:00.000Z`,`2022-03-01T00:00:00.000Z`,`2022-04-01T00:00:00.000Z`,`2022-05-01T00:00:00.000Z`,`2022-06-01T00:00:00.000Z`],default:`2022-01-01T00:00:00.000Z`}}}}},source:{type:`TileWMS`,url:`https://gpwmap.jaxa.jp/wms`,params:{LAYERS:`EODASH:SMC-GCOMW-World-Monthly`,TIME:`2022-01-01T00:00:00.000Z`}}},me={type:`Tile`,properties:{id:`copernicus-wmts`,title:`Copernicus Marine WMTS`,layerControlToolsExpand:!0,layerConfig:{schema:{type:`object`,properties:{cmap:{type:`string`,title:`Colormap`,enum:[`speed`,`thermal`,`ice`],default:`speed`},vminmax:{type:`object`,title:`Range`,properties:{vmin:{type:`number`,title:`Min`,default:0,format:`range`},vmax:{type:`number`,title:`Max`,default:24,format:`range`}},format:`minmax`},style:{type:`string`,template:`cmap:{{cmap}},vectorStyle:solidAndVector,range:{{vminmax.vmin}}/{{vminmax.vmax}}`,watch:{cmap:`cmap`,vminmax:`vminmax`},options:{hidden:!0}}},options:{removeProperties:[`cmap`,`vminmax`]}}}},source:{type:`WMTSCapabilities`,url:`https://wmts.marine.copernicus.eu/teroWmts/WIND_GLO_PHY_CLIMATE_L4_MY_012_003/cmems_obs-wind_glo_phy_my_l4_P1M_202411?request=GetCapabilities&service=WMTS`,layer:`WIND_GLO_PHY_CLIMATE_L4_MY_012_003/cmems_obs-wind_glo_phy_my_l4_P1M_202411/wind`,dimensions:{elevation:0,style:`cmap:speed,vectorStyle:solidAndVector,range:0/24`}}},he={type:`WebGLTile`,style:de,properties:{id:Symbol(),title:`Solar Energy COG Example`,layerConfig:ue},source:{type:`GeoTIFF`,normalize:!1,sources:[{url:`https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/v2/SolarPowerPotential_Annual_COG_clipped_3857_fixed.tif`},{url:`https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/WSF_EucDist_Austria_3857_COG_fix.tif`}]}},_={type:`Tile`,properties:{id:`lz83t24tf72212zcxq6`,title:`vessel_density_cargo`,layerControlExpand:!0,layerControlToolsExpand:!0,layerLegend:{title:`total ships presence time per squared km`,domain:[.5,150],range:[`#C3EBDC`,`#0ADC00`,`#FEF500`,`#F29300`,`#800303`]},layerDatetime:{play:!1,slider:!0,currentStep:`2021-03-01`,displayFormat:`DD.MM.YYYY`,showUTC:!0,controlValues:`2022-12-01.2022-11-01.2022-10-01.2022-09-01.2022-08-01.2022-07-01.2022-06-01.2022-05-01.2022-04-01.2022-03-01.2022-02-01.2022-01-01.2021-12-01.2021-11-01.2021-10-01.2021-09-01.2021-08-01.2021-07-01.2021-06-01.2021-05-01.2021-04-01.2021-03-01.2021-02-01.2021-01-01.2020-12-01.2020-11-01.2020-10-01.2020-09-01.2020-08-01.2020-07-01.2020-06-01.2020-05-01.2020-04-01.2020-03-01.2020-02-01.2020-01-01.2019-12-01.2019-11-01.2019-10-01.2019-09-01.2019-08-01.2019-07-01.2019-06-01.2019-05-01.2019-04-01.2019-03-01.2019-02-01.2019-01-01.2018-12-01.2018-11-01.2018-10-01.2018-09-01.2018-08-01.2018-07-01.2018-06-01.2018-05-01.2018-04-01.2018-03-01.2018-02-01.2018-01-01.2017-12-01.2017-11-01.2017-10-01.2017-09-01.2017-08-01.2017-07-01.2017-06-01.2017-05-01.2017-04-01.2017-03-01.2017-02-01.2017-01-01`.split(`.`)}},source:{type:`TileWMS`,url:`https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54`,params:{LAYERS:[`AWS_VIS_VESSELDENSITY_CARGO`],TILED:!0,TIME:`2021-03-01T00:00:00Z`}}},ge={type:`Tile`,properties:{id:`esdl-dynamic`,title:`Dynamic Legends Layer`,layerControlExpand:!0,layerControlToolsExpand:!0,layerConfig:{type:`tileUrl`,legend:{title:`Dynamic Legend`,rangeProperty:`cbar`,domainProperties:[`vmin`,`vmax`],tickFormat:`.2f`},schema:{type:`object`,properties:{vminmax:{title:`Range`,type:`object`,properties:{vmin:{type:`number`,minimum:0,maximum:1,step:.01,format:`range`,default:0},vmax:{type:`number`,minimum:0,maximum:1,step:.01,format:`range`,default:1}},format:`minmax`},cbar:{title:`Colormap`,type:`string`,enum:[`magma`,`viridis`,`plasma`,`plasma_r`],default:`plasma_r`}}}}},source:{type:`XYZ`,url:`https://api.earthsystemdatalab.net/api/tiles/hydrology/SM/{z}/{y}/{x}?crs=EPSG:3857&time=2022-06-15T00:00:00Z&vmin=0&vmax=1&cbar=plasma_r`}}})))()}function y(){return(y=e((()=>{v()})))()}var _e;function ve(){return(ve=e((()=>{n(),y(),_e={args:{style:s,storyAdditionalComponents:{"eox-map":{style:c,zoom:3,layers:h}}},render:e=>t`
    <div style="display: flex">
      <eox-layercontrol .style=${e.style}></eox-layercontrol>
      <eox-map
        .style=${e.storyAdditionalComponents[`eox-map`].style}
        .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
        .layers=${e.storyAdditionalComponents[`eox-map`].layers}
      ></eox-map>
    </div>
  `}})))()}var b,ye;function be(){return(be=e((()=>{n(),v(),b=(e,t=!0)=>({...e,properties:{...e.properties,layerControlExclusive:!0},visible:t}),ye={args:{style:s,for:`eox-map#exclusive`,storyAdditionalComponents:{"eox-map":{style:c,layers:[b(m,!1),b(p)],id:`exclusive`}}},render:e=>t`
    <div style="display: flex">
      <eox-layercontrol
        .for=${e.for}
        .style=${e.style}
      ></eox-layercontrol>
      <eox-map
        id=${e.storyAdditionalComponents[`eox-map`].id}
        .style=${e.storyAdditionalComponents[`eox-map`].style}
        .layers=${e.storyAdditionalComponents[`eox-map`].layers}
      ></eox-map>
    </div>
  `}})))()}var x,S;function C(){return(C=e((()=>{n(),y(),x=e=>({...e,properties:{...e.properties,layerControlOptional:!0},visible:!1}),S={args:{style:s,for:`eox-map#optional`,storyAdditionalComponents:{"eox-map":{style:c,layers:[p,x(ae),x(oe),x(m)],id:`optional`}}},render:e=>t`
    <div style="display: flex">
      <eox-layercontrol
        .for=${e.for}
        .style=${e.style}
      ></eox-layercontrol>
      <eox-map
        id=${e.storyAdditionalComponents[`eox-map`].id}
        .style=${e.storyAdditionalComponents[`eox-map`].style}
        .layers=${e.storyAdditionalComponents[`eox-map`].layers}
      ></eox-map>
    </div>
  `}})))()}var w;function T(){return(T=e((()=>{n(),v(),w={args:{for:`eox-map#expanded`,storyAdditionalComponents:{"eox-map":{style:c,layers:[{type:`Group`,properties:{title:`Layer group`,layerControlExpand:!0},layers:[{...m,visible:!1}]},p],id:`expanded`}},style:s},render:e=>t`
    <div style="display: flex">
      <eox-layercontrol
        .for=${e.for}
        .style=${e.style}
      ></eox-layercontrol>
      <eox-map
        id=${e.storyAdditionalComponents[`eox-map`].id}
        .style=${e.storyAdditionalComponents[`eox-map`].style}
        .layers=${e.storyAdditionalComponents[`eox-map`].layers}
      ></eox-map>
    </div>
  `}})))()}var E;function D(){return(D=e((()=>{n(),y(),E={args:{for:`eox-map#tools`,tools:[`info`],storyAdditionalComponents:{"eox-map":{style:c,layers:[p,g,u,_],id:`tools`}},style:s},render:e=>t`
    <p>Default tools: info, opacity, config, remove, sort</p>
    <p>Toggle tools using the Controls panel.</p>
    <eox-layercontrol
      .for=${e.for}
      .tools=${e.tools}
      .style=${e.style}
    ></eox-layercontrol>
    <eox-map
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .style=${e.storyAdditionalComponents[`eox-map`].style}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
    ></eox-map>
  `}})))()}var O;function k(){return(k=e((()=>{n(),y(),O={args:{tools:[`config`],for:`eox-map#config`,storyAdditionalComponents:{"eox-map":{center:[-7e6,-5e5],zoom:4,style:c,layers:[p,me,pe,g],id:`config`}},storyCodeBefore:`import "@eox/jsonform"`,style:s},render:e=>t`
    <eox-layercontrol
      .tools=${e.tools}
      .for=${e.for}
      .style=${e.style}
    ></eox-layercontrol>
    <eox-map
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .center=${e.storyAdditionalComponents[`eox-map`].center}
      .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
      .style=${e.storyAdditionalComponents[`eox-map`].style}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
    ></eox-map>
  `}})))()}var A;function j(){return(j=e((()=>{n(),r(),te(),y(),ee(`EPSG:3035`,`+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs`),A={args:{tools:[`config`],for:`eox-map#config-styles`,storyAdditionalComponents:{"eox-map":{center:[-1856051,8501749],zoom:3,style:c,layers:[p,fe,le,he],id:`config-styles`}},style:s},render:e=>t`
    <eox-layercontrol
      .tools=${e.tools}
      .for=${e.for}
      .style=${e.style}
    ></eox-layercontrol>
    <hr />
    <eox-map
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .center=${e.storyAdditionalComponents[`eox-map`].center}
      .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
      .style=${e.storyAdditionalComponents[`eox-map`].style}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
    ></eox-map>
  `}})))()}var M;function N(){return(N=e((()=>{n(),y(),M={args:{for:`eox-map#datetime`,"datetime:updated":e=>{e.detail.layer.getSource().updateParams({TIME:e.detail.datetime})},additionalComponents:{"eox-map":{center:[2e6,8e6],zoom:4,style:c,layers:[p,_],id:`datetime`}},style:s,tools:[`datetime`]},render:e=>t`
    <eox-layercontrol
      .tools=${e.tools}
      for=${e.for}
      .style=${e.style}
      @datetime:updated=${e[`datetime:updated`]}
    ></eox-layercontrol>
    <hr />
    <eox-map
      id=${e.additionalComponents[`eox-map`].id}
      .center=${e.additionalComponents[`eox-map`].center}
      .zoom=${e.additionalComponents[`eox-map`].zoom}
      .style=${e.additionalComponents[`eox-map`].style}
      .layers=${e.additionalComponents[`eox-map`].layers}
    ></eox-map>
  `}})))()}var P;function xe(){return(xe=e((()=>{n(),r(),y(),P={args:{additionalComponents:{"eox-map":{center:[2e6,8e6],zoom:4,style:c,layers:[p,_],id:`legend`}},style:s,tools:[`legend`],for:`eox-map#legend`},render:e=>t`
    <eox-layercontrol
      .tools=${e.tools}
      for=${e.for}
      .style=${e.style}
    ></eox-layercontrol>
    <hr />
    <eox-map
      id=${e.additionalComponents[`eox-map`].id}
      .center=${e.additionalComponents[`eox-map`].center}
      .zoom=${e.additionalComponents[`eox-map`].zoom}
      .style=${e.additionalComponents[`eox-map`].style}
      .layers=${e.additionalComponents[`eox-map`].layers}
    ></eox-map>
  `}})))()}var Se,Ce,we,Te,Ee;function De(){return(De=e((()=>{Se=[`#000004`,`#180f3d`,`#440f76`,`#721f81`,`#9e2f7f`,`#cd4071`,`#f1605d`,`#fd9567`,`#fec98d`,`#fcfdbf`],Ce=[`#440154`,`#482878`,`#3e4989`,`#31688e`,`#26828e`,`#1f9e89`,`#35b779`,`#6ece58`,`#b5de2b`,`#fde725`],we=[`#0d0887`,`#46039f`,`#7201a8`,`#9c179e`,`#bd3786`,`#d8576b`,`#ed7953`,`#fb9f3a`,`#fdca26`,`#f0f921`],Te=[`#f0f921`,`#fdca26`,`#fb9f3a`,`#ed7953`,`#d8576b`,`#bd3786`,`#9c179e`,`#721f81`,`#46039f`,`#0d0887`],Ee={magma:Se,viridis:Ce,plasma:we,plasma_r:Te}})))()}var Oe;function ke(){return(ke=e((()=>{n(),r(),De(),y(),Oe={args:{additionalComponents:{"eox-map":{center:[0,48e5],zoom:6,style:c,layers:[p,ge],id:`legend-dynamic`}},style:s,colormapRegistry:Ee,tools:[`legend`,`config`],for:`eox-map#legend-dynamic`},render:e=>t`
    <eox-layercontrol
      .tools=${e.tools}
      for=${e.for}
      .style=${e.style}
      .colormapRegistry=${e.colormapRegistry}
    ></eox-layercontrol>
    <hr />
    <eox-map
      id=${e.additionalComponents[`eox-map`].id}
      .center=${e.additionalComponents[`eox-map`].center}
      .zoom=${e.additionalComponents[`eox-map`].zoom}
      .style=${e.additionalComponents[`eox-map`].style}
      .layers=${e.additionalComponents[`eox-map`].layers}
    ></eox-map>
  `}})))()}var Ae,je;function Me(){return(Me=e((()=>{n(),y(),Ae=e=>({...e,properties:{...e.properties,layerControlHide:!0}}),je={args:{for:`eox-map#hidden`,storyAdditionalComponents:{"eox-map":{style:c,layers:[p,Ae(u)],id:`hidden`}},style:s},render:e=>t`
    <div style="display: flex">
      <eox-layercontrol
        .for=${e.for}
        .style=${e.style}
      ></eox-layercontrol>
      <eox-map
        id=${e.storyAdditionalComponents[`eox-map`].id}
        .style=${e.storyAdditionalComponents[`eox-map`].style}
        .layers=${e.storyAdditionalComponents[`eox-map`].layers}
      ></eox-map>
    </div>
  `}})))()}var Ne;function Pe(){return(Pe=e((()=>{n(),y(),Ne={args:{idProperty:`id`,titleProperty:`title`,unstyled:!1,addExternalLayers:!0,for:`eox-map#external`,additionalComponents:{"eox-map":{style:c,zoom:3,layers:h,id:`external`}},style:s},render:e=>t`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${e.idProperty}
        .titleProperty=${e.titleProperty}
        .unstyled=${e.unstyled}
        .addExternalLayers=${e.addExternalLayers}
        for=${e.for}
        .style=${e.style}
      ></eox-layercontrol>
      <eox-map
        .id=${e.additionalComponents[`eox-map`].id}
        .style=${e.additionalComponents[`eox-map`].style}
        .zoom=${e.additionalComponents[`eox-map`].zoom}
        .layers=${e.additionalComponents[`eox-map`].layers}
      ></eox-map>
    </div>
  `}})))()}var F,Fe;function Ie(){return(Ie=e((()=>{n(),y(),F=(e,t)=>({...e,properties:{...e.properties,layerControlExclusive:!0},...t}),Fe={args:{for:`eox-map#zoomstate`,showLayerZoomState:!0,additionalComponents:{"eox-map":{style:c,zoom:1,layers:[F(l.wind,{maxZoom:9}),F(u,{minZoom:2})],id:`zoomstate`}},style:s},render:e=>t`
    <div style="display: flex">
      <eox-layercontrol
        .showLayerZoomState=${e.showLayerZoomState}
        for=${e.for}
        .style=${e.style}
      ></eox-layercontrol>
      <eox-map
        id=${e.additionalComponents[`eox-map`].id}
        .style=${e.additionalComponents[`eox-map`].style}
        .zoom=${e.additionalComponents[`eox-map`].zoom}
        .layers=${e.additionalComponents[`eox-map`].layers}
      ></eox-map>
    </div>
  `}})))()}var Le;function Re(){return(Re=e((()=>{n(),y(),Le={args:{for:`eox-map#unstyled`,unstyled:!0,additionalComponents:{"eox-map":{style:c,zoom:3,layers:h,id:`unstyled`}},style:s},render:e=>t`
    <div style="display: flex">
      <eox-layercontrol
        .unstyled=${e.unstyled}
        for=${e.for}
        .style=${e.style}
      ></eox-layercontrol>
      <eox-map
        id=${e.additionalComponents[`eox-map`].id}
        .style=${e.additionalComponents[`eox-map`].style}
        .zoom=${e.additionalComponents[`eox-map`].zoom}
        .layers=${e.additionalComponents[`eox-map`].layers}
      ></eox-map>
    </div>
  `}})))()}var ze;function Be(){return(Be=e((()=>{n(),y(),ze={args:{idProperty:`id`,titleProperty:`title`,toolsAsList:!0,for:`eox-map#tools-as-list`,storyAdditionalComponents:{"eox-map":{style:c,zoom:3,layers:h},id:`tools-as-list`},style:s},render:e=>t`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${e.idProperty}
        .titleProperty=${e.titleProperty}
        .toolsAsList=${e.toolsAsList}
        .for=${e.for}
        .style=${e.style}
      ></eox-layercontrol>
      <eox-map
        id=${e.storyAdditionalComponents[`eox-map`].id}
        .style=${e.storyAdditionalComponents[`eox-map`].style}
        .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
        .layers=${e.storyAdditionalComponents[`eox-map`].layers}
      ></eox-map>
    </div>
  `}})))()}var Ve;function He(){return(He=e((()=>{n(),y(),Ve={args:{for:`eox-map#tools-auto-expand`,tools:[`info`,`opacity`],toolsAutoExpand:!0,storyAdditionalComponents:{"eox-map":{style:c,layers:[p,g,u],id:`tools-auto-expand`}},style:s},render:e=>t`
    <eox-layercontrol
      .for=${e.for}
      .tools=${e.tools}
      .toolsAutoExpand=${e.toolsAutoExpand}
      .style=${e.style}
    ></eox-layercontrol>
    <eox-map
      id=${e.storyAdditionalComponents[`eox-map`].id}
      .style=${e.storyAdditionalComponents[`eox-map`].style}
      .layers=${e.storyAdditionalComponents[`eox-map`].layers}
    ></eox-map>
  `}})))()}var Ue,We;function Ge(){return(Ge=e((()=>{n(),y(),Ue=[{type:`Group`,properties:{id:`group1`,title:`Background Layers`},layers:[f,d]},{type:`Group`,properties:{id:`group2`,title:`Data Layers`,layerControlExpand:!0,description:`# Hello world`},layers:[{...u,color:`#007bcb`},{...l.no2,color:`#008397`},{...l.wind,color:`#008955`}]}],We={args:{idProperty:`id`,titleProperty:`title`,unstyled:!1,for:`epxmap#color`,additionalComponents:{"eox-map":{style:c,zoom:3,layers:Ue,id:`color`}},style:s},render:e=>t`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${e.idProperty}
        .titleProperty=${e.titleProperty}
        .unstyled=${e.unstyled}
        for=${e.for}
        .style=${e.style}
      ></eox-layercontrol>
      <eox-map
        id=${e.additionalComponents[`eox-map`].id}
        .style=${e.additionalComponents[`eox-map`].style}
        .zoom=${e.additionalComponents[`eox-map`].zoom}
        .layers=${e.additionalComponents[`eox-map`].layers}
      ></eox-map>
    </div>
  `}})))()}function Ke(){return(Ke=e((()=>{ve(),be(),C(),T(),D(),k(),j(),N(),xe(),ke(),Me(),Pe(),Ie(),Re(),Be(),He(),Ge()})))()}var qe,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,Je;function $(){return($=e((()=>{Ke(),qe={title:`Elements/eox-layercontrol`,tags:[`autodocs`],component:`eox-layercontrol`,parameters:{componentSubtitle:`Manage and configure OpenLayers map layers`,layout:`centered`},argTypes:{tools:{control:{type:`multi-select`},options:[`info`,`opacity`,`datetime`,`config`,`remove`,`sort`]}}},I=_e,L=ye,R=S,z=w,B=E,V=O,H=A,U=M,W=P,G=Oe,K=je,q=Ne,J=Fe,Y=ze,X=Ve,Z=We,Q=Le,I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`PrimaryStory`,...I.parameters?.docs?.source},description:{story:"Basic usage of eox-layercontrol. It shows that also with a `for` attribute,\nit automatically connects to the first `eox-map` it finds in the DOM.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`ExclusiveLayersStory`,...L.parameters?.docs?.source},description:{story:"Demonstrates mutually exclusive layers. By setting the `layerControlExclusive` property on map layers, only one layer can be visualized at a time. Useful for toggling between base layers or other exclusive datasets. The example shows two layers, only one of which can be active at a time.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`OptionalLayersStory`,...R.parameters?.docs?.source},description:{story:"Demonstrates optional layers. By setting the `layerControlOptional` property, layers are initially hidden from the main layer list and appear in a selection interface. Users can add optional layers to the list manually, and removing a layer returns it to the optional pool. This is useful for large datasets or overlays that should not clutter the main view.",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`ExpandedLayersStory`,...z.parameters?.docs?.source},description:{story:"Shows how to pre-expand layers in the control. By setting the `layerControlExpand` property, the corresponding layer dropdown is opened by default, making its details and tools immediately visible. This is useful for highlighting important layers or groups.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`ToolsStory`,...B.parameters?.docs?.source},description:{story:"Demonstrates the use of layer tools. The layer control accepts a `tools` array, enabling extra functionalities such as info, opacity, datetime, config, remove, and sort. This example shows how to configure and display these tools for each layer.\nIn the Controls panel, try toggling different combinations of tools to see how the layer control adapts.",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`LayerConfigStory`,...V.parameters?.docs?.source},description:{story:'Shows the config tool in action. The "config" tool reads settings from the `layerConfig` property and renders a form based on a provided JSON schema, allowing users to update source URL parameters and other settings. Requires the `@eox/jsonform` package for form rendering.\nThis example demonstrates `layerConfig.type: "tileUrl"` , with a top level special option `removeProperties` in the schema that describes a list of parameter keys whose initial tile URL values are dropped, so they are not carried over as start values into the form updates.',...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`LayerStylesConfigStory`,...H.parameters?.docs?.source},description:{story:`Demonstrates layer style configuration. The "styles" tool allows users to modify layer appearance, such as color and opacity, using a dedicated interface. Useful for customizing the look and feel of map layers interactively.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`layerDatetimeStory`,...U.parameters?.docs?.source},description:{story:'Shows how to modify layer time properties. By adding the "datetime" tool, users can interact with time-based layers, adjusting the current step, available values, and playback controls. The `layerDatetime` property passes configuration options to the time control.',...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`layerLegendStory`,...W.parameters?.docs?.source},description:{story:'Demonstrates dynamic color legends for layers. The "legend" tool reads configuration from the `layerLegend` property and creates a color legend based on value ranges and domains. Supports partial configuration of the color-legend-element. Useful for visualizing data ranges and categories.',...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`layerLegendDynamicStory`,...G.parameters?.docs?.source},description:{story:"Demonstrates dynamic color legends that update when the layer configuration changes. Using `rangeProperty` and `domainProperties`, the legend reacts to slider changes and colormap selection. Also defines the property `colormapRegistry` on the LayerControl with externally supplied ranges for given colormap.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`HiddenLayersStory`,...K.parameters?.docs?.source},description:{story:"Shows how to hide layers from the control. By setting the `layerControlHide` property, layers are excluded from the layer control UI but may still be rendered on the map. Useful for background or technical layers that should not be user-managed.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`addExternalLayerStory`,...q.parameters?.docs?.source},description:{story:`Demonstrates adding external layers. The control can be configured to allow users to add WMS, XYZ, or import JSON layers dynamically. This example shows the interface for external layer addition and integration.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`layerZoomStateStory`,...J.parameters?.docs?.source},description:{story:"Shows zoom-based layer state. Layers can be configured with `minZoom` and `maxZoom` properties, and the control will indicate their visibility state based on the current map zoom. The color change state is visible when `showLayerZoomState` is enabled.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`toolsAsListStory`,...Y.parameters?.docs?.source},description:{story:"Shows tools rendered as a list instead of tabs. By enabling the `toolsAsList` property, the tools section is displayed as a vertical list, which can be useful for compact or mobile layouts.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`toolsAutoExpandStory`,...X.parameters?.docs?.source},description:{story:"Demonstrates the `toolsAutoExpand` property. When enabled, toggling a layer's visibility automatically expands or collapses its tools section. Additionally, the manual tools toggle button is hidden, as the visibility checkbox takes over its role.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`layerColorStory`,...Z.parameters?.docs?.source},description:{story:`Demonstrates color swatches for layers. Shows how to define and display custom colors for layers, useful for thematic mapping and visual differentiation of datasets.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`unstyledStory`,...Q.parameters?.docs?.source},description:{story:"Demonstrates the unstyled version of the element. By setting the `unstyled` property, the layer control is rendered without default styles, allowing for custom styling and integration into different design systems.",...Q.parameters?.docs?.description}}},Je=[`Primary`,`ExclusiveLayers`,`OptionalLayers`,`ExpandedLayers`,`Tools`,`LayerConfig`,`LayerStylesConfig`,`LayerDateTime`,`LayerLegend`,`LayerLegendDynamic`,`HiddenLayers`,`AddExternalLayer`,`LayerZoomState`,`ToolsAsList`,`ToolsAutoExpand`,`ColoredLayers`,`Unstyled`]})))()}$();export{q as AddExternalLayer,Z as ColoredLayers,L as ExclusiveLayers,z as ExpandedLayers,K as HiddenLayers,V as LayerConfig,U as LayerDateTime,W as LayerLegend,G as LayerLegendDynamic,H as LayerStylesConfig,J as LayerZoomState,R as OptionalLayers,I as Primary,B as Tools,Y as ToolsAsList,X as ToolsAutoExpand,Q as Unstyled,Je as __namedExportsOrder,qe as default};