import{x as s}from"./iframe-DvnkcL6h.js";import"./preload-helper-PPVm8Dsz.js";const n={args:{endpoint:"/fake/endpoint",style:"position: relative !important; height: 250px;",unstyled:void 0,submit:e=>console.log("Feedback submitted",e.detail),close:()=>console.log("Feedback closed")},render:e=>s`
    <div style="${e.style}">
      <eox-feedback
        endpoint="${e.endpoint}"
        ?unstyled="${e.unstyled}"
        @submit="${e.submit}"
        @close="${e.close}"
      ></eox-feedback>
    </div>
  `},i={args:{endpoint:"/fake/endpoint",position:"bottom-left",click:e=>console.log("Feedback button clicked",e)},render:e=>s`
    <eox-feedback-button
      endpoint="${e.endpoint}"
      position="${e.position}"
      @click="${e.click}"
    ></eox-feedback-button>
  `},c={title:"Elements/eox-feedback",tags:["autodocs"],component:"eox-feedback"},o=n,t=i;o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"PrimaryStory",...o.parameters?.docs?.source},description:{story:"Primary story showcasing basic usage. The `endpoint` is set to a fake URL for demonstration purposes.",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"ButtonStory",...t.parameters?.docs?.source},description:{story:"Triggering of eox-feeback modal via button. The button can be positioned on the page using the `position` attribute.\nCan be `top-left`, `top-right`, `bottom-left`, or `bottom-right`.",...t.parameters?.docs?.description}}};const d=["Primary","Button"];export{t as Button,o as Primary,d as __namedExportsOrder,c as default};
