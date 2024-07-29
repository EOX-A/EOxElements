import{x as a}from"./lit-element-1x-rNuFE.js";const g={args:{endpoint:"/opencage-mock-data.json"},render:e=>a`
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
    `},h={args:{endpoint:"/opencage-mock-data.json"},render:e=>a`
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
    `},y={args:{endpoint:"/opencage-mock-data.json"},render:e=>a`
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
    `},$={title:"Elements/eox-geosearch",tags:["autodocs"],component:"eox-geosearch"},t=g,r=h,n=y;var s,i,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"PrimaryStory",...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"ButtonModeStory",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,x,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:"CustomAlignmentsStory",...(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const b=["Primary","ButtonMode","CustomAlignments"];export{r as ButtonMode,n as CustomAlignments,t as Primary,b as __namedExportsOrder,$ as default};
