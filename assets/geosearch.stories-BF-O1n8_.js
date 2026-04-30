import{n as e}from"./chunk-jRWAZmH_.js";import{gt as t,xt as n}from"./iframe-CUA5ekX4.js";var r,i=e((()=>{t(),r={args:{endpoint:`/opencage-mock-data.json`,label:`Search`,style:`position: absolute; top: 36px; left: 32px; z-index: 12;`,storyAdditionalComponents:{"eox-map":{id:`geosearch-map-primary`,animationOptions:{duration:400,padding:[10,10,10,10]},config:{layers:[{type:`Tile`,source:{type:`OSM`}}],view:{center:[15,48],zoom:3}},style:`width: 100%; height: 500px;`}}},render:e=>n`
      <eox-geosearch
        .endpoint="${e.endpoint}"
        .label="${e.label}"
        style="${e.style}"
      ></eox-geosearch>
      <eox-map
        id="${e.storyAdditionalComponents[`eox-map`].id}"
        .animationOptions="${e.storyAdditionalComponents[`eox-map`].animationOptions}"
        .config="${e.storyAdditionalComponents[`eox-map`].config}"
        style="${e.storyAdditionalComponents[`eox-map`].style}"
      ></eox-map>
    `}})),a,o=e((()=>{t(),a={args:{endpoint:`/opencage-mock-data.json`,label:`Search`,style:`position: absolute; top: 36px; right: 32px; z-index: 12;`,small:!0,button:!0,listDirection:`left`,resultsDirection:`down`,storyAdditionalComponents:{"eox-map":{id:`geosearch-map-primary`,animationOptions:{duration:400,padding:[10,10,10,10]},config:{layers:[{type:`Tile`,source:{type:`OSM`}}],view:{center:[15,48],zoom:3}},style:`width: 100%; height: 500px;`}}},render:e=>n`
      <eox-geosearch
        .endpoint="${e.endpoint}"
        .label="${e.label}"
        style="${e.style}"
        ?small="${e.small}"
        ?button="${e.button}"
        list-direction="${e.listDirection}"
        results-direction="${e.resultsDirection}"
      ></eox-geosearch>
      <eox-map
        id="${e.storyAdditionalComponents[`eox-map`].id}"
        .animationOptions="${e.storyAdditionalComponents[`eox-map`].animationOptions}"
        .config="${e.storyAdditionalComponents[`eox-map`].config}"
        style="${e.storyAdditionalComponents[`eox-map`].style}"
      ></eox-map>
    `}})),s,c=e((()=>{t(),s={args:{endpoint:`/opencage-mock-data.json`,label:`Search`,style:`position: absolute; z-index: 12;`,small:!0,button:!0,storyAdditionalComponents:{"eox-map":{id:`geosearch-map-primary`,animationOptions:{duration:400,padding:[10,10,10,10]},config:{layers:[{type:`Tile`,source:{type:`OSM`}}],view:{center:[15,48],zoom:3}},style:`width: 100%; height: 600px;`}}},render:e=>{let t=`item => {
      document.querySelector('eox-map#geosearch-map-primary').zoomExtent = item.zoomExtent;
    }`;return n`
      <!-- Top Right -->
      <eox-geosearch
        .endpoint="${e.endpoint}"
        .label="${e.label}"
        style="top: 36px; right: 32px; ${e.style}"
        ?small="${e.small}"
        ?button="${e.button}"
        list-direction="left"
        results-direction="down"
      ></eox-geosearch>
      <!-- Top Left -->
      <eox-geosearch
        .endpoint="${e.endpoint}"
        .label="${e.label}"
        style="top: 36px; left: 32px; ${e.style}"
        ?small="${e.small}"
        ?button="${e.button}"
        list-direction="right"
        results-direction="down"
        .onSelect="${t}"
      ></eox-geosearch>
      <!-- Bottom Right -->
      <eox-geosearch
        .endpoint="${e.endpoint}"
        .label="${e.label}"
        style="top: 296px; right: 32px; ${e.style}"
        ?small="${e.small}"
        ?button="${e.button}"
        list-direction="left"
        results-direction="up"
        .onSelect="${t}"
      ></eox-geosearch>
      <!-- Bottom Left -->
      <eox-geosearch
        .endpoint="${e.endpoint}"
        .label="${e.label}"
        style="top: 296px; left: 32px; ${e.style}"
        ?small="${e.small}"
        ?button="${e.button}"
        list-direction="right"
        results-direction="up"
        .onSelect="${t}"
      ></eox-geosearch>
      <eox-map
        id="${e.storyAdditionalComponents[`eox-map`].id}"
        .animationOptions="${e.storyAdditionalComponents[`eox-map`].animationOptions}"
        .config="${e.storyAdditionalComponents[`eox-map`].config}"
        style="${e.storyAdditionalComponents[`eox-map`].style}"
      ></eox-map>
    `}}})),l,u=e((()=>{t(),l={args:{endpoint:`/opencage-mock-data.json`,label:`Search`,style:`position: absolute; top: 36px; left: 32px; z-index: 12;`,loaderSvg:`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48px"
        height="48px"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="0" fill="currentColor">
          <animate
            id="svgSpinnersPulseMultiple0"
            fill="freeze"
            attributeName="r"
            begin="0;svgSpinnersPulseMultiple2.end"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            values="0;11"
          />
          <animate
            fill="freeze"
            attributeName="opacity"
            begin="0;svgSpinnersPulseMultiple2.end"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            values="1;0"
          />
        </circle>
        <circle cx="12" cy="12" r="0" fill="currentColor">
          <animate
            id="svgSpinnersPulseMultiple1"
            fill="freeze"
            attributeName="r"
            begin="svgSpinnersPulseMultiple0.begin+0.2s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            values="0;11"
          />
          <animate
            fill="freeze"
            attributeName="opacity"
            begin="svgSpinnersPulseMultiple0.begin+0.2s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            values="1;0"
          />
        </circle>
        <circle cx="12" cy="12" r="0" fill="currentColor">
          <animate
            id="svgSpinnersPulseMultiple2"
            fill="freeze"
            attributeName="r"
            begin="svgSpinnersPulseMultiple0.begin+0.4s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            values="0;11"
          />
          <animate
            fill="freeze"
            attributeName="opacity"
            begin="svgSpinnersPulseMultiple0.begin+0.4s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            values="1;0"
          />
        </circle>
      </svg>
    `,storyAdditionalComponents:{"eox-map":{id:`geosearch-map-primary`,animationOptions:{duration:400,padding:[10,10,10,10]},config:{layers:[{type:`Tile`,source:{type:`OSM`}}],view:{center:[15,48],zoom:3}},style:`width: 100%; height: 500px;`}}},render:e=>n`
      <eox-geosearch
        .endpoint="${e.endpoint}"
        .label="${e.label}"
        style="${e.style}"
        .loaderSvg="${e.loaderSvg}"
      ></eox-geosearch>
      <eox-map
        id="${e.storyAdditionalComponents[`eox-map`].id}"
        .animationOptions="${e.storyAdditionalComponents[`eox-map`].animationOptions}"
        .config="${e.storyAdditionalComponents[`eox-map`].config}"
        style="${e.storyAdditionalComponents[`eox-map`].style}"
      ></eox-map>
    `}})),d,f=e((()=>{t(),d={args:{endpoint:`/opencage-mock-data.json`,label:`Search`,style:`position: absolute; top: 36px; left: 32px; z-index: 12;`,button:!0,small:!0,extent:`-125.0,24.0,-66.0,49.0`,tooltip:`Search within North America`,tooltipDirection:`right`,storyAdditionalComponents:{"eox-map":{id:`geosearch-map-extent`,animationOptions:{duration:400,padding:[10,10,10,10]},config:{layers:[{type:`Tile`,source:{type:`OSM`}}],view:{center:[-95,38],zoom:4}},style:`width: 100%; height: 500px;`}}},render:e=>n`
      <eox-geosearch
        .endpoint="${e.endpoint}"
        .label="${e.label}"
        style="${e.style}"
        ?button="${e.button}"
        ?small="${e.small}"
        .extent="${e.extent}"
        .tooltip="${e.tooltip}"
        .tooltipDirection="${e.tooltipDirection}"
      ></eox-geosearch>
      <eox-map
        id="${e.storyAdditionalComponents[`eox-map`].id}"
        .animationOptions="${e.storyAdditionalComponents[`eox-map`].animationOptions}"
        .config="${e.storyAdditionalComponents[`eox-map`].config}"
        style="${e.storyAdditionalComponents[`eox-map`].style}"
      ></eox-map>
    `}})),p,m=e((()=>{t(),i(),p={...r,args:{...r.args,params:{language:`en`,limit:5,countrycode:`us`},storyAdditionalComponents:{"eox-map":{id:`geosearch-map-primary`,animationOptions:{duration:400,padding:[10,10,10,10]},config:{layers:[{type:`Tile`,source:{type:`OSM`}}],view:{center:[15,48],zoom:3}},style:`width: 100%; height: 500px;`}}},render:e=>n`
      <eox-geosearch
        .endpoint="${e.endpoint}"
        .label="${e.label}"
        style="${e.style}"
        .params="${e.params}"
      ></eox-geosearch>
      <eox-map
        id="${e.storyAdditionalComponents[`eox-map`].id}"
        .animationOptions="${e.storyAdditionalComponents[`eox-map`].animationOptions}"
        .config="${e.storyAdditionalComponents[`eox-map`].config}"
        style="${e.storyAdditionalComponents[`eox-map`].style}"
      ></eox-map>
    `}})),h=e((()=>{i(),o(),c(),u(),f(),m()})),g,_,v,y,b,x,S,C;e((()=>{h(),g={title:`Elements/eox-geosearch`,tags:[`autodocs`],component:`eox-geosearch`},_=r,v=a,y=s,b=l,x=d,S=p,_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`PrimaryStory`,..._.parameters?.docs?.source},description:{story:`Basic usage of eox-geosearch with a default OpenCage endpoint. The search bar is positioned on the map and interacts with the map to zoom to selected results.
Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`ButtonModeStory`,...v.parameters?.docs?.source},description:{story:`Button mode hides the input field until the button is clicked. Useful for compact map controls.
Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`CustomAlignmentsStory`,...y.parameters?.docs?.source},description:{story:`Demonstrates multiple eox-geosearch elements with different alignments and directions.
Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`CustomLoaderStory`,...b.parameters?.docs?.source},description:{story:`Shows how to use a custom SVG loader for the search input.
Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`ExtentLimitStory`,...x.parameters?.docs?.source},description:{story:`Limits search results to a specified geographic extent. Tooltip and direction are also customizable via attributes.
Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`AdditionalParametersStory`,...S.parameters?.docs?.source},description:{story:`Demonstrates passing additional parameters to the OpenCage API, such as language, result limit, and country code, all via the \`params\` property.
Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.`,...S.parameters?.docs?.description}}},C=[`Primary`,`ButtonMode`,`CustomAlignments`,`CustomLoader`,`ExtentLimit`,`AdditionalParameters`]}))();export{S as AdditionalParameters,v as ButtonMode,y as CustomAlignments,b as CustomLoader,x as ExtentLimit,_ as Primary,C as __namedExportsOrder,g as default};