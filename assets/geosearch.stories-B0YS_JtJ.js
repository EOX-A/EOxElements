import{i as o}from"./iframe-DGGf7EFB.js";import"./preload-helper-PPVm8Dsz.js";const p={args:{endpoint:"/opencage-mock-data.json"},render:e=>o`
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 36px; left: 32px; z-index: 12;"
        .endpoint="${e.endpoint}"
      ></eox-geosearch>

      <eox-map
        id="geosearch-map-primary"
        .animationOptions=${{duration:400,padding:[10,10,10,10]}}
        .config=${{layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[15,48],zoom:3}}}
        style="width: 100%; height: 500px;"
      >
      </eox-map>
    `},c={args:{endpoint:"/opencage-mock-data.json"},render:e=>o`
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 36px; right: 32px; z-index: 12;"
        small
        button
        list-direction="left"
        results-direction="down"
        .endpoint="${e.endpoint}"
      ></eox-geosearch>

      <eox-map
        id="geosearch-map-primary"
        .animationOptions=${{duration:400,padding:[10,10,10,10]}}
        .config=${{layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[15,48],zoom:3}}}
        style="width: 100%; height: 500px;"
      >
      </eox-map>
    `},d={args:{endpoint:"/opencage-mock-data.json"},render:e=>o`
      <!-- Top Right -->
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 36px; right: 32px; z-index: 12;"
        small
        button
        list-direction="left"
        results-direction="down"
        .endpoint="${e.endpoint}"
      ></eox-geosearch>

      <!-- Top Left -->
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 36px; left: 32px; z-index: 12;"
        small
        button
        list-direction="right"
        results-direction="down"
        .onSelect="${t=>document.querySelector("eox-map#geosearch-map-primary").zoomExtent=t.zoomExtent}"
        .endpoint="${e.endpoint}"
      ></eox-geosearch>

      <!-- Bottom Right -->
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 296px; right: 32px; z-index: 12;"
        small
        button
        list-direction="left"
        results-direction="up"
        .onSelect="${t=>document.querySelector("eox-map#geosearch-map-primary").zoomExtent=t.zoomExtent}"
        .endpoint="${e.endpoint}"
      ></eox-geosearch>

      <!-- Bottom Left -->
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 296px; left: 32px; z-index: 12;"
        small
        button
        list-direction="right"
        results-direction="up"
        .onSelect="${t=>document.querySelector("eox-map#geosearch-map-primary").zoomExtent=t.zoomExtent}"
        .endpoint="${e.endpoint}"
      ></eox-geosearch>

      <eox-map
        id="geosearch-map-primary"
        .animationOptions=${{duration:400,padding:[10,10,10,10]}}
        .config=${{layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[15,48],zoom:3}}}
        style="width: 100%; height: 600px;"
      >
      </eox-map>
    `},m={args:{endpoint:"/opencage-mock-data.json",loaderSvg:`
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
    `},render:e=>o`
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 36px; left: 32px; z-index: 12;"
        .endpoint="${e.endpoint}"
        .loaderSvg="${e.loaderSvg}"
      ></eox-geosearch>

      <eox-map
        id="geosearch-map-primary"
        .animationOptions=${{duration:400,padding:[10,10,10,10]}}
        .config=${{layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[15,48],zoom:3}}}
        style="width: 100%; height: 500px;"
      >
      </eox-map>
    `},u={args:{endpoint:"/opencage-mock-data.json",extent:"-125.0,24.0,-66.0,49.0",tooltip:"Search within North America",tooltipDirection:"right"},render:e=>o`
      <eox-geosearch
        label="Search"
        button
        small
        style="position: absolute; top: 36px; left: 32px; z-index: 12;"
        .endpoint="${e.endpoint}"
        .extent="${e.extent}"
        .tooltip="${e.tooltip}"
        .tooltipDirection="${e.tooltipDirection}"
      ></eox-geosearch>

      <eox-map
        id="geosearch-map-extent"
        .animationOptions=${{duration:400,padding:[10,10,10,10]}}
        .config=${{layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[-95,38],zoom:4}}}
        style="width: 100%; height: 500px;"
      >
      </eox-map>
    `},g={...p,args:{...p.args,params:{language:"en",limit:5,countrycode:"us"}}},x=g,S={title:"Elements/eox-geosearch",tags:["autodocs"],component:"eox-geosearch"},r=p,i=c,a=d,n=m,s=u,l=x;r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"PrimaryStory",...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"ButtonModeStory",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"CustomAlignmentsStory",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"CustomLoaderStory",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"ExtentLimitStory",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"AdditionalParametersStory",...l.parameters?.docs?.source}}};const b=["Primary","ButtonMode","CustomAlignments","CustomLoader","ExtentLimit","AdditionalParameters"];export{l as AdditionalParameters,i as ButtonMode,a as CustomAlignments,n as CustomLoader,s as ExtentLimit,r as Primary,b as __namedExportsOrder,S as default};
