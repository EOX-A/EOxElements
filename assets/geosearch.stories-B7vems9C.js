import{h as o}from"./iframe-DC10bgDc.js";import"./preload-helper-C1FmrZbK.js";const p={args:{endpoint:"/opencage-mock-data.json"},render:e=>o`
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
    `},k={args:{endpoint:"/opencage-mock-data.json"},render:e=>o`
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
    `},C={args:{endpoint:"/opencage-mock-data.json"},render:e=>o`
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
    `},O={args:{endpoint:"/opencage-mock-data.json",loaderSvg:`
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
    `},L={args:{endpoint:"/opencage-mock-data.json",extent:"-125.0,24.0,-66.0,49.0",tooltip:"Search within North America",tooltipDirection:"right"},render:e=>o`
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
    `},A={...p,args:{...p.args,params:{language:"en",limit:5,countrycode:"us"}}},T=A,j={title:"Elements/eox-geosearch",tags:["autodocs"],component:"eox-geosearch"},r=p,i=k,a=C,n=O,s=L,l=T;var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"PrimaryStory",...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"ButtonModeStory",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,y,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"CustomAlignmentsStory",...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var b,f,$;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"CustomLoaderStory",...($=(f=n.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var v,z,M;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"ExtentLimitStory",...(M=(z=s.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var w,P,E;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:"AdditionalParametersStory",...(E=(P=l.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const q=["Primary","ButtonMode","CustomAlignments","CustomLoader","ExtentLimit","AdditionalParameters"];export{l as AdditionalParameters,i as ButtonMode,a as CustomAlignments,n as CustomLoader,s as ExtentLimit,r as Primary,q as __namedExportsOrder,j as default};
