import{k as n}from"./lit-element-CHc5qsYe.js";const b={args:{endpoint:"/opencage-mock-data.json"},render:e=>n`
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
    `},f={args:{endpoint:"/opencage-mock-data.json"},render:e=>n`
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
    `},v={args:{endpoint:"/opencage-mock-data.json"},render:e=>n`
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
        .onSelect="${o=>document.querySelector("eox-map#geosearch-map-primary").zoomExtent=o.zoomExtent}"
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
        .onSelect="${o=>document.querySelector("eox-map#geosearch-map-primary").zoomExtent=o.zoomExtent}"
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
        .onSelect="${o=>document.querySelector("eox-map#geosearch-map-primary").zoomExtent=o.zoomExtent}"
        .endpoint="${e.endpoint}"
      ></eox-geosearch>

      <eox-map
        id="geosearch-map-primary"
        .animationOptions=${{duration:400,padding:[10,10,10,10]}}
        .config=${{layers:[{type:"Tile",source:{type:"OSM"}}],view:{center:[15,48],zoom:3}}}
        style="width: 100%; height: 600px;"
      >
      </eox-map>
    `},z={args:{endpoint:"/opencage-mock-data.json",loaderSvg:`
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
    `},render:e=>n`
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
    `},$={title:"Elements/eox-geosearch",tags:["autodocs"],component:"eox-geosearch"},t=b,r=f,i=v,s=z;var a,l,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"PrimaryStory",...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"ButtonModeStory",...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"CustomAlignmentsStory",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,y,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"CustomLoaderStory",...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const w=["Primary","ButtonMode","CustomAlignments","CustomLoader"];export{r as ButtonMode,i as CustomAlignments,s as CustomLoader,t as Primary,w as __namedExportsOrder,$ as default};
