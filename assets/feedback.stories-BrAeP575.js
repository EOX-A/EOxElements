import{n as e}from"./chunk-jRWAZmH_.js";import{gt as t,xt as n}from"./iframe-BMv-nNQE.js";var r,i=e((()=>{t(),r={args:{endpoint:`/fake/endpoint`,style:`position: relative !important; height: 250px;`,unstyled:void 0,submit:e=>console.log(`Feedback submitted`,e.detail),close:()=>console.log(`Feedback closed`)},render:e=>n`
    <div style="${e.style}">
      <eox-feedback
        endpoint="${e.endpoint}"
        ?unstyled="${e.unstyled}"
        @submit="${e.submit}"
        @close="${e.close}"
      ></eox-feedback>
    </div>
  `}})),a,o=e((()=>{t(),a={args:{endpoint:`/fake/endpoint`,position:`bottom-left`,click:e=>console.log(`Feedback button clicked`,e)},render:e=>n`
    <eox-feedback-button
      endpoint="${e.endpoint}"
      position="${e.position}"
      @click="${e.click}"
    ></eox-feedback-button>
  `}})),s,c,l=e((()=>{t(),s={type:`object`,properties:{email:{type:`string`,format:`email`,title:`Email`,description:`Your email address`,options:{inputAttributes:{placeholder:`Include your email address (optional).`}}},message:{type:`string`,format:`textarea`,title:`Message`,description:`Your feedback`,options:{inputAttributes:{placeholder:`Type your feedback here!`}},minLength:1},hidden_field:{type:`string`,options:{hidden:!0},default:`some-hidden-value`}},required:[`message`]},c={args:{storyCodeBefore:`import "@eox/jsonform"`,endpoint:`https://jsonplaceholder.typicode.com/posts`,schema:s,style:`position: relative !important; height: 400px;`,submit:e=>console.log(`Feedback submitted`,e.detail),close:()=>console.log(`Feedback closed`)},render:e=>n`
    <div style="${e.style}">
      <eox-feedback
        endpoint="${e.endpoint}"
        .schema=${e.schema}
        @submit="${e.submit}"
        @close="${e.close}"
      ></eox-feedback>
    </div>
  `}})),u=e((()=>{i(),o(),l()})),d,f,p,m,h;e((()=>{u(),d={title:`Elements/eox-feedback`,tags:[`autodocs`],component:`eox-feedback`},f=r,p=a,m=c,f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`PrimaryStory`,...f.parameters?.docs?.source},description:{story:"Primary story showcasing basic usage. The `endpoint` is set to a fake URL for demonstration purposes.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`ButtonStory`,...p.parameters?.docs?.source},description:{story:"Triggering of eox-feeback modal via button. The button can be positioned on the page using the `position` attribute.\nCan be `top-left`, `top-right`, `bottom-left`, or `bottom-right`.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`CustomFormStory`,...m.parameters?.docs?.source},description:{story:"Custom form schema for eox-feedback.\nBy passing a JSON schema to the `schema` property, the form can be fully customized.\nThis functionality is powered by [eox-jsonform](https://github.com/EOX-A/EOxElements/tree/main/elements/jsonform).\n\nFields can be hidden by setting `options: { hidden: true }` in the schema property.\nValues can be passed programmatically by setting the `default` property in the schema.",...m.parameters?.docs?.description}}},h=[`Primary`,`Button`,`CustomForm`]}))();export{p as Button,m as CustomForm,f as Primary,h as __namedExportsOrder,d as default};