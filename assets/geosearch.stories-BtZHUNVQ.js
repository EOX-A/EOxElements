import{x as o}from"./iframe-BsEDsE6E.js";import"./preload-helper-PPVm8Dsz.js";const p={args:{endpoint:"/opencage-mock-data.json",label:"Search",style:"position: absolute; top: 36px; left: 32px; z-index: 12;",storyAdditionalComponents:{"eox-map":{id:"geosearch-map-primary",animationOptions:{duration:400,padding:[10,10,10,10]},config:{layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[15,48],zoom:3}},style:"width: 100%; height: 500px;"}}},render:e=>o`
      <eox-geosearch
        .endpoint="${e.endpoint}"
        .label="${e.label}"
        style="${e.style}"
      ></eox-geosearch>
      <eox-map
        id="${e.storyAdditionalComponents["eox-map"].id}"
        .animationOptions="${e.storyAdditionalComponents["eox-map"].animationOptions}"
        .config="${e.storyAdditionalComponents["eox-map"].config}"
        style="${e.storyAdditionalComponents["eox-map"].style}"
      ></eox-map>
    `},d={args:{endpoint:"/opencage-mock-data.json",label:"Search",style:"position: absolute; top: 36px; right: 32px; z-index: 12;",small:!0,button:!0,listDirection:"left",resultsDirection:"down",storyAdditionalComponents:{"eox-map":{id:"geosearch-map-primary",animationOptions:{duration:400,padding:[10,10,10,10]},config:{layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[15,48],zoom:3}},style:"width: 100%; height: 500px;"}}},render:e=>o`
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
        id="${e.storyAdditionalComponents["eox-map"].id}"
        .animationOptions="${e.storyAdditionalComponents["eox-map"].animationOptions}"
        .config="${e.storyAdditionalComponents["eox-map"].config}"
        style="${e.storyAdditionalComponents["eox-map"].style}"
      ></eox-map>
    `},c={args:{endpoint:"/opencage-mock-data.json",label:"Search",style:"position: absolute; z-index: 12;",small:!0,button:!0,storyAdditionalComponents:{"eox-map":{id:"geosearch-map-primary",animationOptions:{duration:400,padding:[10,10,10,10]},config:{layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[15,48],zoom:3}},style:"width: 100%; height: 600px;"}}},render:e=>{const l=`item => {
      document.querySelector('eox-map#geosearch-map-primary').zoomExtent = item.zoomExtent;
    }`;return o`
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
        .onSelect="${l}"
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
        .onSelect="${l}"
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
        .onSelect="${l}"
      ></eox-geosearch>
      <eox-map
        id="${e.storyAdditionalComponents["eox-map"].id}"
        .animationOptions="${e.storyAdditionalComponents["eox-map"].animationOptions}"
        .config="${e.storyAdditionalComponents["eox-map"].config}"
        style="${e.storyAdditionalComponents["eox-map"].style}"
      ></eox-map>
    `}},m={args:{endpoint:"/opencage-mock-data.json",label:"Search",style:"position: absolute; top: 36px; left: 32px; z-index: 12;",loaderSvg:`
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
    `,storyAdditionalComponents:{"eox-map":{id:"geosearch-map-primary",animationOptions:{duration:400,padding:[10,10,10,10]},config:{layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[15,48],zoom:3}},style:"width: 100%; height: 500px;"}}},render:e=>o`
      <eox-geosearch
        .endpoint="${e.endpoint}"
        .label="${e.label}"
        style="${e.style}"
        .loaderSvg="${e.loaderSvg}"
      ></eox-geosearch>
      <eox-map
        id="${e.storyAdditionalComponents["eox-map"].id}"
        .animationOptions="${e.storyAdditionalComponents["eox-map"].animationOptions}"
        .config="${e.storyAdditionalComponents["eox-map"].config}"
        style="${e.storyAdditionalComponents["eox-map"].style}"
      ></eox-map>
    `},u={args:{endpoint:"/opencage-mock-data.json",label:"Search",style:"position: absolute; top: 36px; left: 32px; z-index: 12;",button:!0,small:!0,extent:"-125.0,24.0,-66.0,49.0",tooltip:"Search within North America",tooltipDirection:"right",storyAdditionalComponents:{"eox-map":{id:"geosearch-map-extent",animationOptions:{duration:400,padding:[10,10,10,10]},config:{layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[-95,38],zoom:4}},style:"width: 100%; height: 500px;"}}},render:e=>o`
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
        id="${e.storyAdditionalComponents["eox-map"].id}"
        .animationOptions="${e.storyAdditionalComponents["eox-map"].animationOptions}"
        .config="${e.storyAdditionalComponents["eox-map"].config}"
        style="${e.storyAdditionalComponents["eox-map"].style}"
      ></eox-map>
    `},y={...p,args:{...p.args,params:{language:"en",limit:5,countrycode:"us"},storyAdditionalComponents:{"eox-map":{id:"geosearch-map-primary",animationOptions:{duration:400,padding:[10,10,10,10]},config:{layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[15,48],zoom:3}},style:"width: 100%; height: 500px;"}}},render:e=>o`
      <eox-geosearch
        .endpoint="${e.endpoint}"
        .label="${e.label}"
        style="${e.style}"
        .params="${e.params}"
      ></eox-geosearch>
      <eox-map
        id="${e.storyAdditionalComponents["eox-map"].id}"
        .animationOptions="${e.storyAdditionalComponents["eox-map"].animationOptions}"
        .config="${e.storyAdditionalComponents["eox-map"].config}"
        style="${e.storyAdditionalComponents["eox-map"].style}"
      ></eox-map>
    `},g={title:"Elements/eox-geosearch",tags:["autodocs"],component:"eox-geosearch"},t=p,i=d,n=c,a=m,s=u,r=y;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"PrimaryStory",...t.parameters?.docs?.source},description:{story:`Basic usage of eox-geosearch with a default OpenCage endpoint. The search bar is positioned on the map and interacts with the map to zoom to selected results.
Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.`,...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"ButtonModeStory",...i.parameters?.docs?.source},description:{story:`Button mode hides the input field until the button is clicked. Useful for compact map controls.
Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.`,...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"CustomAlignmentsStory",...n.parameters?.docs?.source},description:{story:`Demonstrates multiple eox-geosearch elements with different alignments and directions.
Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.`,...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"CustomLoaderStory",...a.parameters?.docs?.source},description:{story:`Shows how to use a custom SVG loader for the search input.
Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.`,...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"ExtentLimitStory",...s.parameters?.docs?.source},description:{story:`Limits search results to a specified geographic extent. Tooltip and direction are also customizable via attributes.
Note that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).
In order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.`,...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"AdditionalParametersStory",...r.parameters?.docs?.source},description:{story:"Demonstrates passing additional parameters to the OpenCage API, such as language, result limit, and country code, all via the `params` property.\nNote that the endpoint used here is a mock data file for demonstration purposes (it returns a few selected locations and is not a full geocoding service).\nIn order to use a real geocoding service, replace the endpoint with a valid OpenCage API URL along with your API key.",...r.parameters?.docs?.description}}};const $=["Primary","ButtonMode","CustomAlignments","CustomLoader","ExtentLimit","AdditionalParameters"];export{r as AdditionalParameters,i as ButtonMode,n as CustomAlignments,a as CustomLoader,s as ExtentLimit,t as Primary,$ as __namedExportsOrder,g as default};
