import{n as e}from"./rolldown-runtime-CMxvf4Kt.js";import{d as t,t as n}from"./lit-Blt270FX.js";import{l as ee,m as te}from"./iframe-CTn6_3QT.js";import{t as ne}from"./color-legend-element-DCZqNcQx.js";var re,r,ie=e((()=>{re={ship_class:`nis`,type_of_ice:`standard`,type_of_visualisation:`polaris`,combined_prop:`polaris_standard_pc_nis_rio`},r={variables:re,"fill-color":[`case`,[`==`,[`var`,`type_of_visualisation`],`WMO Concentration`],[`match`,[`get`,`wmo_concentration`],`Ice Free`,[0,100,255,1],`Open Water (< 1/10 ice)`,[150,200,255,1],`Bergy Water`,[150,200,255,1],`1/10`,[140,255,159,1],`2/10`,[140,255,159,1],`3/10`,[140,255,159,1],`4/10`,[255,255,0,1],`5/10`,[255,255,0,1],`6/10`,[255,255,0,1],`7/10`,[255,125,7,1],`8/10`,[255,125,7,1],`9/10`,[255,0,0,1],`10/10`,[255,0,0,1],`9/10 to 10/10 ice, 9+/10`,[255,0,0,1],`Unknown/Undetermined`,[255,255,255,1],[255,255,255,1]],[`==`,[`var`,`type_of_visualisation`],`WMO Stage of Development`],[`match`,[`get`,`wmo_stage_of_development`],`Ice Free`,[0,100,255,1],`Brash Ice`,[0,0,0,0],`No stage of development`,[0,0,0,0],`New Ice`,[240,210,250,1],`Nilas Ice Rind (<10 cm)`,[255,100,255,1],`Young Ice (10 to 30 cm)`,[0,0,0,0],`Grey Ice`,[135,60,215,1],`Grey-White Ice`,[220,80,235,1],`First Year Ice (>30 cm) or Brash Ice`,[255,255,0,1],`Thin First Year Ice (30 to 70 cm)`,[155,210,0,1],`Medium First Year Ice (70 to 120 cm)`,[0,200,20,1],`Thick First Year Ice (>120 cm)`,[0,120,0,1],`Old Ice`,[180,100,50,1],`Second-Year Ice`,[255,120,10,1],`Multi-Year Ice`,[200,0,0,1],`Bergy Water`,[255,255,255,1],`Unknown/Undetermined`,[255,255,255,1],[0,0,0,0]],[`==`,[`var`,`type_of_visualisation`],`polaris`],[`case`,[`==`,[`get`,`polygon_type`],`Ice Free`],[0,100,255],[`==`,[`get`,[`var`,`combined_prop`]],`RIO > 20: Normal Operation`],[54,122,74,1],[`==`,[`get`,[`var`,`combined_prop`]],`>= 10 RIO < 20: Normal Operation`],[62,150,85,1],[`==`,[`get`,[`var`,`combined_prop`]],`>= 0 RIO < 10: Normal Operation`],[102,188,118,1],[`==`,[`get`,[`var`,`combined_prop`]],`>= -10 RIO < 0: Operation subject to special consideration`],[252,251,1,1],[`==`,[`get`,[`var`,`combined_prop`]],`>= -20 RIO < -10: Operation subject to special consideration`],[227,108,9,1],[`==`,[`get`,[`var`,`combined_prop`]],`RIO < -20: Operation subject to special consideration`],[188,1,6,1],[`==`,[`get`,[`var`,`combined_prop`]],`<= -10 RIO < 0: Elevated operational risk`],[252,251,1,1],[0,0,0,1]],[0,0,0,0]],"stroke-color":`black`,"stroke-width":1}})),i,a,o,s,c,l,u,d,f,p,ae,oe,m,h,g,se,ce,le,ue,de,fe,pe,_,v=e((()=>{ie(),i=`https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54`,a=e=>`//tiles.maps.eox.at/wmts/1.0.0/${e}/default/g/{z}/{y}/{x}.jpg`,o=e=>({type:`Tile`,properties:{title:`EOxCloudless ${e}`},source:{type:`XYZ`,url:a(`s2cloudless-${e}_3857`)}}),s=`width: 240px;`,c=`width: 400px; height: 300px; margin-left: 7px;`,l={wind:{type:`Tile`,properties:{id:`WIND`,title:`WIND`},source:{type:`TileWMS`,url:i,params:{LAYERS:`AWS_VIS_WIND_V_10M`}}},no2:{type:`Tile`,properties:{id:`NO2`,title:`NO2`},source:{type:`TileWMS`,url:i,params:{LAYERS:`AWS_NO2-VISUALISATION`}}}},u={type:`Vector`,properties:{title:`Regions`,id:`regions`,description:`Ecological regions of the earth.`},source:{type:`Vector`,url:`https://openlayers.org/data/vector/ecoregions.json`,format:`GeoJSON`,attributions:`Regions: @ openlayers.org`}},d={type:`WebGLTile`,properties:{id:`s2`,layerControlExclusive:!0,title:`s2`},style:{variables:{red:1,green:2,blue:3,redMax:3e3,greenMax:3e3,blueMax:3e3},color:[`array`,[`/`,[`band`,[`var`,`red`]],[`var`,`redMax`]],[`/`,[`band`,[`var`,`green`]],[`var`,`greenMax`]],[`/`,[`band`,[`var`,`blue`]],[`var`,`blueMax`]],1],gamma:1.1},source:{type:`GeoTIFF`,normalize:!1,sources:[{url:`https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif`}]}},f={type:`Tile`,properties:{id:`osm`,title:`Open Street Map`,layerControlExclusive:!0},visible:!1,opacity:.5,source:{type:`OSM`}},p={type:`Tile`,properties:{id:`terrain-light`,title:`Terrain Light`},source:{type:`XYZ`,url:a(`terrain-light_3857`)}},ae=o(`2019`),oe=o(`2020`),m=o(`2021`),h=[{type:`Group`,properties:{id:`group1`,title:`Background Layers`},layers:[f,d]},{type:`Group`,properties:{id:`group2`,title:`Data Layers`,layerControlExpand:!0,description:`# Hello world`},layers:[l.wind,l.no2,u]}],g={type:`Tile`,properties:{id:`customId`,title:`Tile XYZ`,layerControlToolsExpand:!0,layerConfig:{schema:{type:`object`,properties:{vminmax:{type:`object`,properties:{vmin:{type:`number`,minimum:0,maximum:10,format:`range`},vmax:{type:`number`,minimum:0,maximum:10,format:`range`}},format:`minmax`},cbar:{type:`string`,enum:[`rain`,`temperature`]}}}}},source:{type:`XYZ`,url:`https://reccap2.api.brockmann-consult.de/api/tiles/cop28~reccap2-9x108x139-0.0.1.zarr/deforested_biomass/{z}/{y}/{x}?crs=EPSG:3857&time=2018-01-01T00:00:00Z&vmin=0&vmax=3&cbar=rain`}},se={variables:{vmin:0,vmax:500,crop:`Maize`,vstat:`average`},"fill-color":[`case`,[`==`,[`get`,`water_need`,[`var`,`crop`],[`var`,`vstat`]],`N/A`],[253,231,37,.25],[`interpolate`,[`linear`],[`/`,[`-`,[`get`,`water_need`,[`var`,`crop`],[`var`,`vstat`]],[`var`,`vmin`]],[`var`,`vmax`]],0,[68,1,84,1],.06666666666666667,[70,23,103,1],.13333333333333333,[71,44,122,1],.2,[65,63,131,1],.26666666666666666,[59,81,139,1],.3333333333333333,[52,97,141,1],.4,[44,113,142,1],.4666666666666667,[39,129,142,1],.5333333333333333,[33,144,141,1],.6,[39,173,129,1],.6666666666666666,[66,187,114,1],.7333333333333333,[92,200,99,1],.8,[131,210,75,1],.8666666666666667,[170,220,50,1],.9333333333333333,[212,226,44,1],1,[253,231,37,1]]],"stroke-color":`black`,"stroke-width":1},ce={type:`object`,title:`Data configuration`,properties:{crop:{title:`Crop`,type:`string`,enum:[`Maize`,`Soybean`,`Sunflower`,`Wheat`],default:`Maize`},vstat:{title:`Statistical value`,type:`string`,enum:[`average`,`best`,`worst`],default:`average`},vminmax:{title:`Dynamic range`,description:`Water need [mm]`,type:`object`,properties:{vmin:{type:`number`,minimum:0,maximum:800,format:`range`,default:0},vmax:{type:`number`,minimum:0,maximum:800,format:`range`,default:500}},format:`minmax`}}},le={type:`Vector`,source:{type:`Vector`,url:`/cropomhusc.json`,format:{type:`GeoJSON`,dataProjection:`EPSG:3035`}},properties:{id:`id`,title:`Crop Yield Vector Example`,layerConfig:{schema:ce,style:se}}},ue={type:`style`,legend:{title:`Global horizontal irradiation`,range:[`rgba(253, 231, 37, 1)`,`rgba(33, 144, 141, 1)`,`rgba(68, 1, 84, 1)`],domainProperties:[`vmin`,`vmax`]},schema:{type:`object`,title:`Data configuration`,properties:{settlementDistance:{type:`number`,minimum:0,maximum:5e3,format:`range`,default:0},vminmax:{title:`Global horizontal irradiation`,description:`[kWh/m²/day]`,type:`object`,properties:{vmin:{type:`number`,minimum:0,maximum:5,format:`range`,default:2},vmax:{type:`number`,minimum:0,maximum:5,format:`range`,default:5}},format:`minmax`}}}},de={variables:{vmin:2,vmax:5,settlementDistance:0},color:[`case`,[`all`,[`>`,[`band`,1],1],[`>=`,[`band`,2],[`var`,`settlementDistance`]]],[`interpolate`,[`linear`],[`/`,[`-`,[`band`,1],[`var`,`vmin`]],[`-`,[`var`,`vmax`],[`var`,`vmin`]]],0,[68,1,84,1],.067,[70,23,103,1],.133,[71,44,122,1],.2,[65,63,131,1],.266,[59,81,139,1],.333,[52,97,141,1],.4,[44,113,142,1],.467,[39,129,142,1],.533,[33,144,141,1],.6,[39,173,129,1],.666,[66,187,114,1],.733,[92,200,99,1],.8,[131,210,75,1],.867,[170,220,50,1],.933,[212,226,44,1],1,[253,231,37,1]],[`color`,0,0,0,0]]},fe={type:`Vector`,source:{type:`FlatGeoBuf`,url:`https://eox-gtif-public.s3.eu-central-1.amazonaws.com/EOX/polaris/202408131425_CapeFarewell_RIC-processed.fgb`,format:`GeoJSON`},properties:{id:`Polaris_algorithm_dmi_demo;:;2024-08-13T00:00:00Z;:;0`,title:`Polaris Results demo`,layerConfig:{schema:{type:`object`,title:`Data configuration`,properties:{type_of_visualisation:{title:`Type of Visualisation`,type:`string`,enum:[`polaris`,`WMO Concentration`,`WMO Stage of Development`,`AIRSS Ice Numeral Go/No Go`],options:{enum_titles:[`POLARIS`,`WMO Concentration`,`WMO Stage of Development`,`AIRSS Ice Numeral Go/No Go`]},default:`polaris`},ship_class:{title:`Ship Class`,type:`string`,enum:[`pc_1`,`pc_2`,`pc_3`,`pc_4`,`pc_5`,`pc_6`,`pc_7`,`pc_ias`,`pc_ia`,`pc_ib`,`pc_ic`,`pc_nis`],options:{enum_titles:[`PC1`,`PC2`,`PC3`,`PC4`,`PC5`,`PC6`,`PC7`,`PC IA Super`,`PC IA`,`PC IB`,`PC IC`,`PC NIS`]},default:`pc_nis`},type_of_ice:{title:`Type of Ice (decayed/standard)`,type:`string`,enum:[`standard`,`decayed`],default:`standard`},combined_prop:{type:`string`,template:`{{vis}}_{{ice}}_{{ship}}_rio`,options:{hidden:!0},watch:{vis:`type_of_visualisation`,ice:`type_of_ice`,ship:`ship_class`}}}},type:`style`,legend:[{title:`Total concentration colour code standard`,range:[`#367a4a`,`#3e9655`,`#66bc76`,`#fcfb01`,`#e36c09`,`#bc0106`,`#fcfb01`],domain:[`RIO > 20: Normal Operation`,`>= 10 RIO < 20: Normal Operation`,`>= 0 RIO < 10: Normal Operation`,`>= -10 RIO < 0: Operation subject to special consideration`,`>= -20 RIO < -10: Operation subject to special consideration`,`RIO < -20: Operation subject to special consideration`,`<= -10 RIO < 0: Elevated operational risk`],scaleType:`categorical`,markType:`circle`,boundTo:{key:`type_of_visualisation`,value:`polaris`}},{title:`WMO Concentration`,range:[`#8cff9f`,`#ffff00`,`#ff7d07`,`#ff0000`],domain:[`1 - 3`,`4 - 6`,`7 - 9`,`10`],scaleType:`categorical`,markType:`circle`,boundTo:{key:`type_of_visualisation`,value:`WMO Concentration`}}],style:r,layerLegend:{title:`Total concentration colour code standard`,range:[`#367a4a`,`#3e9655`,`#66bc76`,`#fcfb01`,`#e36c09`,`#bc0106`,`#fcfb01`],domain:[`RIO > 20: Normal Operation`,`>= 10 RIO < 20: Normal Operation`,`>= 0 RIO < 10: Normal Operation`,`>= -10 RIO < 0: Operation subject to special consideration`,`>= -20 RIO < -10: Operation subject to special consideration`,`RIO < -20: Operation subject to special consideration`,`<= -10 RIO < 0: Elevated operational risk`],scaleType:`categorical`,markType:`circle`}}}},pe={type:`WebGLTile`,style:de,properties:{id:Symbol(),title:`Solar Energy COG Example`,layerConfig:ue},source:{type:`GeoTIFF`,normalize:!1,sources:[{url:`https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/v2/SolarPowerPotential_Annual_COG_clipped_3857_fixed.tif`},{url:`https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/WSF_EucDist_Austria_3857_COG_fix.tif`}]}},_={type:`Tile`,properties:{id:`lz83t24tf72212zcxq6`,title:`vessel_density_cargo`,layerControlExpand:!0,layerControlToolsExpand:!0,layerLegend:{title:`total ships presence time per squared km`,domain:[.5,150],range:[`#C3EBDC`,`#0ADC00`,`#FEF500`,`#F29300`,`#800303`]},layerDatetime:{play:!1,slider:!0,currentStep:`2021-03-01`,displayFormat:`DD.MM.YYYY`,showUTC:!0,controlValues:`2022-12-01.2022-11-01.2022-10-01.2022-09-01.2022-08-01.2022-07-01.2022-06-01.2022-05-01.2022-04-01.2022-03-01.2022-02-01.2022-01-01.2021-12-01.2021-11-01.2021-10-01.2021-09-01.2021-08-01.2021-07-01.2021-06-01.2021-05-01.2021-04-01.2021-03-01.2021-02-01.2021-01-01.2020-12-01.2020-11-01.2020-10-01.2020-09-01.2020-08-01.2020-07-01.2020-06-01.2020-05-01.2020-04-01.2020-03-01.2020-02-01.2020-01-01.2019-12-01.2019-11-01.2019-10-01.2019-09-01.2019-08-01.2019-07-01.2019-06-01.2019-05-01.2019-04-01.2019-03-01.2019-02-01.2019-01-01.2018-12-01.2018-11-01.2018-10-01.2018-09-01.2018-08-01.2018-07-01.2018-06-01.2018-05-01.2018-04-01.2018-03-01.2018-02-01.2018-01-01.2017-12-01.2017-11-01.2017-10-01.2017-09-01.2017-08-01.2017-07-01.2017-06-01.2017-05-01.2017-04-01.2017-03-01.2017-02-01.2017-01-01`.split(`.`)}},source:{type:`TileWMS`,url:`https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54`,params:{LAYERS:[`AWS_VIS_VESSELDENSITY_CARGO`],TILED:!0,TIME:`2021-03-01T00:00:00Z`}}}})),y=e((()=>{v()})),me,he=e((()=>{n(),y(),me={args:{style:s,storyAdditionalComponents:{"eox-map":{style:c,zoom:3,layers:h}}},render:e=>t`
    <div style="display: flex">
      <eox-layercontrol .style=${e.style}></eox-layercontrol>
      <eox-map
        .style=${e.storyAdditionalComponents[`eox-map`].style}
        .zoom=${e.storyAdditionalComponents[`eox-map`].zoom}
        .layers=${e.storyAdditionalComponents[`eox-map`].layers}
      ></eox-map>
    </div>
  `}})),b,ge,_e=e((()=>{n(),v(),b=(e,t=!0)=>({...e,properties:{...e.properties,layerControlExclusive:!0},visible:t}),ge={args:{style:s,for:`eox-map#exclusive`,storyAdditionalComponents:{"eox-map":{style:c,layers:[b(m,!1),b(p)],id:`exclusive`}}},render:e=>t`
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
  `}})),x,S,ve=e((()=>{n(),y(),x=e=>({...e,properties:{...e.properties,layerControlOptional:!0},visible:!1}),S={args:{style:s,for:`eox-map#optional`,storyAdditionalComponents:{"eox-map":{style:c,layers:[p,x(ae),x(oe),x(m)],id:`optional`}}},render:e=>t`
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
  `}})),C,ye=e((()=>{n(),v(),C={args:{for:`eox-map#expanded`,storyAdditionalComponents:{"eox-map":{style:c,layers:[{type:`Group`,properties:{title:`Layer group`,layerControlExpand:!0},layers:[{...m,visible:!1}]},p],id:`expanded`}},style:s},render:e=>t`
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
  `}})),w,be=e((()=>{n(),y(),w={args:{for:`eox-map#tools`,tools:[`info`],storyAdditionalComponents:{"eox-map":{style:c,layers:[p,g,u,_],id:`tools`}},style:s},render:e=>t`
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
  `}})),T,xe=e((()=>{n(),y(),T={args:{tools:[`config`],for:`eox-map#config`,storyAdditionalComponents:{"eox-map":{center:[-7e6,-5e5],zoom:4,style:c,layers:[p,g],id:`config`}},storyCodeBefore:`import "@eox/jsonform"`,style:s},render:e=>t`
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
  `}})),E,Se=e((()=>{n(),ne(),ee(),y(),te(`EPSG:3035`,`+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs`),E={args:{tools:[`config`],for:`eox-map#config-styles`,storyAdditionalComponents:{"eox-map":{center:[-1856051,8501749],zoom:3,style:c,layers:[p,fe,le,pe],id:`config-styles`}},style:s},render:e=>t`
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
  `}})),D,Ce=e((()=>{n(),y(),D={args:{for:`eox-map#datetime`,"datetime:updated":e=>{e.detail.layer.getSource().updateParams({TIME:e.detail.datetime})},additionalComponents:{"eox-map":{center:[2e6,8e6],zoom:4,style:c,layers:[p,_],id:`datetime`}},style:s,tools:[`datetime`]},render:e=>t`
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
  `}})),O,we=e((()=>{n(),ne(),y(),O={args:{additionalComponents:{"eox-map":{center:[2e6,8e6],zoom:4,style:c,layers:[p,_],id:`legend`}},style:s,tools:[`legend`],for:`eox-map#legend`},render:e=>t`
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
  `}})),k,A,Te=e((()=>{n(),y(),k=e=>({...e,properties:{...e.properties,layerControlHide:!0}}),A={args:{for:`eox-map#hidden`,storyAdditionalComponents:{"eox-map":{style:c,layers:[p,k(u)],id:`hidden`}},style:s},render:e=>t`
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
  `}})),j,Ee=e((()=>{n(),y(),j={args:{idProperty:`id`,titleProperty:`title`,unstyled:!1,addExternalLayers:!0,for:`eox-map#external`,additionalComponents:{"eox-map":{style:c,zoom:3,layers:h,id:`external`}},style:s},render:e=>t`
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
  `}})),M,N,De=e((()=>{n(),y(),M=(e,t)=>({...e,properties:{...e.properties,layerControlExclusive:!0},...t}),N={args:{for:`eox-map#zoomstate`,showLayerZoomState:!0,additionalComponents:{"eox-map":{style:c,zoom:1,layers:[M(l.wind,{maxZoom:9}),M(u,{minZoom:2})],id:`zoomstate`}},style:s},render:e=>t`
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
  `}})),P,Oe=e((()=>{n(),y(),P={args:{for:`eox-map#unstyled`,unstyled:!0,additionalComponents:{"eox-map":{style:c,zoom:3,layers:h,id:`unstyled`}},style:s},render:e=>t`
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
  `}})),F,ke=e((()=>{n(),y(),F={args:{idProperty:`id`,titleProperty:`title`,toolsAsList:!0,for:`eox-map#tools-as-list`,storyAdditionalComponents:{"eox-map":{style:c,zoom:3,layers:h},id:`tools-as-list`},style:s},render:e=>t`
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
  `}})),I,Ae=e((()=>{n(),y(),I={args:{for:`eox-map#tools-auto-expand`,tools:[`info`,`opacity`],toolsAutoExpand:!0,storyAdditionalComponents:{"eox-map":{style:c,layers:[p,g,u],id:`tools-auto-expand`}},style:s},render:e=>t`
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
  `}})),L,je,Me=e((()=>{n(),y(),L=[{type:`Group`,properties:{id:`group1`,title:`Background Layers`},layers:[f,d]},{type:`Group`,properties:{id:`group2`,title:`Data Layers`,layerControlExpand:!0,description:`# Hello world`},layers:[{...u,color:`#007bcb`},{...l.no2,color:`#008397`},{...l.wind,color:`#008955`}]}],je={args:{idProperty:`id`,titleProperty:`title`,unstyled:!1,for:`epxmap#color`,additionalComponents:{"eox-map":{style:c,zoom:3,layers:L,id:`color`}},style:s},render:e=>t`
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
  `}})),Ne=e((()=>{he(),_e(),ve(),ye(),be(),xe(),Se(),Ce(),we(),Te(),Ee(),De(),Oe(),ke(),Ae(),Me()})),Pe,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Fe;e((()=>{Ne(),Pe={title:`Elements/eox-layercontrol`,tags:[`autodocs`],component:`eox-layercontrol`,parameters:{componentSubtitle:`Manage and configure OpenLayers map layers`,layout:`centered`},argTypes:{tools:{control:{type:`multi-select`},options:[`info`,`opacity`,`datetime`,`config`,`remove`,`sort`]}}},R=me,z=ge,B=S,V=C,H=w,U=T,W=E,G=D,K=O,q=A,J=j,Y=N,X=F,Z=I,Q=je,$=P,R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`PrimaryStory`,...R.parameters?.docs?.source},description:{story:"Basic usage of eox-layercontrol. It shows that also with a `for` attribute,\nit automatically connects to the first `eox-map` it finds in the DOM.",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`ExclusiveLayersStory`,...z.parameters?.docs?.source},description:{story:"Demonstrates mutually exclusive layers. By setting the `layerControlExclusive` property on map layers, only one layer can be visualized at a time. Useful for toggling between base layers or other exclusive datasets. The example shows two layers, only one of which can be active at a time.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`OptionalLayersStory`,...B.parameters?.docs?.source},description:{story:"Demonstrates optional layers. By setting the `layerControlOptional` property, layers are initially hidden from the main layer list and appear in a selection interface. Users can add optional layers to the list manually, and removing a layer returns it to the optional pool. This is useful for large datasets or overlays that should not clutter the main view.",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`ExpandedLayersStory`,...V.parameters?.docs?.source},description:{story:"Shows how to pre-expand layers in the control. By setting the `layerControlExpand` property, the corresponding layer dropdown is opened by default, making its details and tools immediately visible. This is useful for highlighting important layers or groups.",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`ToolsStory`,...H.parameters?.docs?.source},description:{story:"Demonstrates the use of layer tools. The layer control accepts a `tools` array, enabling extra functionalities such as info, opacity, datetime, config, remove, and sort. This example shows how to configure and display these tools for each layer.\nIn the Controls panel, try toggling different combinations of tools to see how the layer control adapts.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`LayerConfigStory`,...U.parameters?.docs?.source},description:{story:'Shows the config tool in action. The "config" tool reads settings from the `layerConfig` property and renders a form based on a provided JSON schema, allowing users to update source URL parameters and other settings. Requires the `@eox/jsonform` package for form rendering.',...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`LayerStylesConfigStory`,...W.parameters?.docs?.source},description:{story:`Demonstrates layer style configuration. The "styles" tool allows users to modify layer appearance, such as color and opacity, using a dedicated interface. Useful for customizing the look and feel of map layers interactively.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`layerDatetimeStory`,...G.parameters?.docs?.source},description:{story:'Shows how to modify layer time properties. By adding the "datetime" tool, users can interact with time-based layers, adjusting the current step, available values, and playback controls. The `layerDatetime` property passes configuration options to the time control.',...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`layerLegendStory`,...K.parameters?.docs?.source},description:{story:'Demonstrates dynamic color legends for layers. The "legend" tool reads configuration from the `layerLegend` property and creates a color legend based on value ranges and domains. Supports partial configuration of the color-legend-element. Useful for visualizing data ranges and categories.',...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`HiddenLayersStory`,...q.parameters?.docs?.source},description:{story:"Shows how to hide layers from the control. By setting the `layerControlHide` property, layers are excluded from the layer control UI but may still be rendered on the map. Useful for background or technical layers that should not be user-managed.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`addExternalLayerStory`,...J.parameters?.docs?.source},description:{story:`Demonstrates adding external layers. The control can be configured to allow users to add WMS, XYZ, or import JSON layers dynamically. This example shows the interface for external layer addition and integration.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`layerZoomStateStory`,...Y.parameters?.docs?.source},description:{story:"Shows zoom-based layer state. Layers can be configured with `minZoom` and `maxZoom` properties, and the control will indicate their visibility state based on the current map zoom. The color change state is visible when `showLayerZoomState` is enabled.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`toolsAsListStory`,...X.parameters?.docs?.source},description:{story:"Shows tools rendered as a list instead of tabs. By enabling the `toolsAsList` property, the tools section is displayed as a vertical list, which can be useful for compact or mobile layouts.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`toolsAutoExpandStory`,...Z.parameters?.docs?.source},description:{story:"Demonstrates the `toolsAutoExpand` property. When enabled, toggling a layer's visibility automatically expands or collapses its tools section. Additionally, the manual tools toggle button is hidden, as the visibility checkbox takes over its role.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`layerColorStory`,...Q.parameters?.docs?.source},description:{story:`Demonstrates color swatches for layers. Shows how to define and display custom colors for layers, useful for thematic mapping and visual differentiation of datasets.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`unstyledStory`,...$.parameters?.docs?.source},description:{story:"Demonstrates the unstyled version of the element. By setting the `unstyled` property, the layer control is rendered without default styles, allowing for custom styling and integration into different design systems.",...$.parameters?.docs?.description}}},Fe=[`Primary`,`ExclusiveLayers`,`OptionalLayers`,`ExpandedLayers`,`Tools`,`LayerConfig`,`LayerStylesConfig`,`LayerDateTime`,`LayerLegend`,`HiddenLayers`,`AddExternalLayer`,`LayerZoomState`,`ToolsAsList`,`ToolsAutoExpand`,`ColoredLayers`,`Unstyled`]}))();export{J as AddExternalLayer,Q as ColoredLayers,z as ExclusiveLayers,V as ExpandedLayers,q as HiddenLayers,U as LayerConfig,G as LayerDateTime,K as LayerLegend,W as LayerStylesConfig,Y as LayerZoomState,B as OptionalLayers,R as Primary,H as Tools,X as ToolsAsList,Z as ToolsAutoExpand,$ as Unstyled,Fe as __namedExportsOrder,Pe as default};