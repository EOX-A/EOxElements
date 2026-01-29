import{x as i}from"./iframe-HaHy1GEz.js";import"./preload-helper-PPVm8Dsz.js";const r={args:{endpoint:"/fake/endpoint",style:"position: relative !important; height: 250px;",unstyled:void 0,submit:e=>console.log("Feedback submitted",e.detail),close:()=>console.log("Feedback closed")},render:e=>i`
    <div style="${e.style}">
      <eox-feedback
        endpoint="${e.endpoint}"
        ?unstyled="${e.unstyled}"
        @submit="${e.submit}"
        @close="${e.close}"
      ></eox-feedback>
    </div>
  `},n={args:{endpoint:"/fake/endpoint",position:"bottom-left",click:e=>console.log("Feedback button clicked",e)},render:e=>i`
    <eox-feedback-button
      endpoint="${e.endpoint}"
      position="${e.position}"
      @click="${e.click}"
    ></eox-feedback-button>
  `},a={type:"object",properties:{email:{type:"string",format:"email",title:"Email",description:"Your email address",options:{inputAttributes:{placeholder:"Include your email address (optional)."}}},message:{type:"string",format:"textarea",title:"Message",description:"Your feedback",options:{inputAttributes:{placeholder:"Type your feedback here!"}},minLength:1},hidden_field:{type:"string",options:{hidden:!0},default:"some-hidden-value"}},required:["message"]},c={args:{storyCodeBefore:'import "@eox/jsonform"',endpoint:"https://jsonplaceholder.typicode.com/posts",schema:a,style:"position: relative !important; height: 400px;",submit:e=>console.log("Feedback submitted",e.detail),close:()=>console.log("Feedback closed")},render:e=>i`
    <div style="${e.style}">
      <eox-feedback
        endpoint="${e.endpoint}"
        .schema=${e.schema}
        @submit="${e.submit}"
        @close="${e.close}"
      ></eox-feedback>
    </div>
  `},m={title:"Elements/eox-feedback",tags:["autodocs"],component:"eox-feedback"},t=r,o=n,s=c;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"PrimaryStory",...t.parameters?.docs?.source},description:{story:"Primary story showcasing basic usage. The `endpoint` is set to a fake URL for demonstration purposes.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"ButtonStory",...o.parameters?.docs?.source},description:{story:"Triggering of eox-feeback modal via button. The button can be positioned on the page using the `position` attribute.\nCan be `top-left`, `top-right`, `bottom-left`, or `bottom-right`.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"CustomFormStory",...s.parameters?.docs?.source},description:{story:"Custom form schema for eox-feedback.\nBy passing a JSON schema to the `schema` property, the form can be fully customized.\nThis functionality is powered by [eox-jsonform](https://github.com/EOX-A/EOxElements/tree/main/elements/jsonform).\n\nFields can be hidden by setting `options: { hidden: true }` in the schema property.\nValues can be passed programmatically by setting the `default` property in the schema.",...s.parameters?.docs?.description}}};const l=["Primary","Button","CustomForm"];export{o as Button,s as CustomForm,t as Primary,l as __namedExportsOrder,m as default};
