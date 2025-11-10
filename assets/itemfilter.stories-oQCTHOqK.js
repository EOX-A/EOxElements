import{i as r}from"./testItems-BFT0QiSi.js";import{i as t}from"./iframe-DGGf7EFB.js";import"./preload-helper-PPVm8Dsz.js";function y(){return{render:e=>t`<eox-itemfilter
        .items=${e.items}
        .inlineMode=${e.inlineMode}
        .titleProperty=${e.titleProperty}
        .aggregateResults=${e.aggregateResults}
        .enableHighlighting=${e.enableHighlighting}
        .filterProperties=${e.filterProperties}
      ></eox-itemfilter>`,args:{inlineMode:!1,titleProperty:"title",aggregateResults:"themes",subTitleProperty:"description",enableHighlighting:!0,filterProperties:[{keys:["title","themes"],title:"Search",type:"text",placeholder:"Type Something...",expanded:!0,validation:{pattern:".{0,10}",message:"Maximum 10 characters"}},{key:"code",title:"Codes",type:"multiselect",placeholder:"Search Codes"},{key:"themes",title:"Theme",type:"select",placeholder:"Select a theme",inline:!1},{key:"tags",title:"Tags",type:"multiselect",placeholder:"Select tags",inline:!1},{key:"timestamp",type:"range",format:"date"},{key:"correlation",title:"Correlation",type:"range",step:.1},{key:"geometry",type:"spatial"}],items:r}}}function g(){return{render:e=>t`<eox-itemfilter
        .items=${e.items}
        .inlineMode=${e.inlineMode}
        .titleProperty=${e.titleProperty}
        .aggregateResults=${e.aggregateResults}
        .showResults=${e.showResults}
        .filterProperties=${e.filterProperties}
      ></eox-itemfilter>`,args:{inlineMode:!0,titleProperty:"title",aggregateResults:"themes",showResults:!1,filterProperties:[{keys:["title","themes"],title:"Search",type:"text",placeholder:"Type Something...",expanded:!0},{key:"code",title:"Codes",type:"multiselect",placeholder:"Search codes",expanded:!0},{key:"themes",title:"Theme",type:"select",placeholder:"Select a theme",expanded:!0},{key:"timestamp",type:"range",title:"Timestamp",format:"date",expanded:!0},{key:"rating",title:"Rating",type:"range",expanded:!0,min:-100,max:100,step:10}],items:r}}}function f(){return{render:e=>t`<eox-itemfilter
        .items=${e.items}
        .titleProperty=${e.titleProperty}
        .aggregateResults=${e.aggregateResults}
        .autoSpreadSingle=${e.autoSpreadSingle}
        .filterProperties=${e.filterProperties}
      ></eox-itemfilter>`,args:{titleProperty:"title",aggregateResults:"themes",autoSpreadSingle:!0,filterProperties:[{key:"themes",title:"Theme",type:"select",placeholder:"Select a theme",expanded:!0,inline:!1,state:{air:!0}}],items:r}}}function h(){return{render:e=>t`<eox-itemfilter
        .items=${e.items}
        .titleProperty=${e.titleProperty}
        .filterProperties=${e.filterProperties}
      ></eox-itemfilter>`,args:{titleProperty:"title",filterProperties:[{key:"themes",title:"Theme",type:"multiselect",expanded:!0,state:{air:!0,agriculture:!0}}],items:r}}}function P(){return{render:e=>t`<eox-itemfilter
        .items=${e.items}
        .titleProperty=${e.titleProperty}
        .aggregateResults=${e.aggregateResults}
        .filterProperties=${e.filterProperties}
      ></eox-itemfilter>`,args:{titleProperty:"title",aggregateResults:"themes",filterProperties:[{key:"status.code",title:"Status",type:"multiselect",expanded:!0},{key:"properties.started",title:"Started",type:"range",format:"date",expanded:!0},{key:"properties.geometry",title:"Spatial",type:"spatial",expanded:!1}],items:r}}}function x(){return{render:e=>t`<eox-itemfilter
        .titleProperty=${e.titleProperty}
        .externalFilter=${e.externalFilter}
        .filterProperties=${e.filterProperties}
      ></eox-itemfilter>`,args:{titleProperty:"title",externalFilter:(e,s)=>`https://jsonplaceholder.typicode.com/todos?${Object.keys(s.completed.state).filter(i=>!!s.completed.state[i]).map(i=>`completed=${i}`).join("&")}&${Object.keys(s.userId.state).filter(i=>!!s.userId.state[i]).map(i=>`userId=${i}`).join("&")}`,filterProperties:[{key:"completed",title:"Completed",type:"multiselect",expanded:!0,filterKeys:[!0,!1],state:{true:!0}},{key:"userId",title:"User ID",type:"multiselect",expanded:!0,filterKeys:[1,2,3,4,5,6,7,8,9,10]}]}}}function S(){return{render:e=>t`<eox-itemfilter
        .aggregateResults=${e.aggregateResults}
        .items=${e.items}
        .titleProperty=${e.titleProperty}
        .imageProperty=${e.imageProperty}
        .subTitleProperty=${e.subTitleProperty}
        .filterProperties=${e.filterProperties}
        .resultType=${e.resultType}
        style="height: 500px; --card-gap: 16px; --card-width: 300px; --card-height: 200px; --card-border-radius: 8px; --form-flex-direction: row;
        --card-title-font: Arial, sans-serif; --card-transition: all 0.35s ease; --card-hover-transform: translateY(-10px); --card-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        --padding: 40px; --padding-vertical: 40px;
      "
      ></eox-itemfilter>`,args:{aggregateResults:"themes",titleProperty:"title",subTitleProperty:"description",imageProperty:"assets.thumbnail.href",resultType:"cards",filterProperties:[{key:"themes",title:"Theme",type:"multiselect"}],items:r}}}function $(){return{render:e=>t`<eox-itemfilter
        .aggregateResults=${e.aggregateResults}
        .items=${e.items}
        .titleProperty=${e.titleProperty}
        .subTitleProperty=${e.subTitleProperty}
        .filterProperties=${e.filterProperties}
        style="--form-flex-direction: row"
      ></eox-itemfilter>`,args:{aggregateResults:"themes",titleProperty:"title",subTitleProperty:"description",filterProperties:[{key:"themes",title:"Theme",type:"multiselect"}],items:r}}}function k(){return{render:e=>t`<eox-itemfilter
        id="result-action"
        .items=${e.items}
        .titleProperty=${e.titleProperty}
        .aggregateResults=${e.aggregateResults}
        .filterProperties=${e.filterProperties}
        .enableResultAction=${e.enableResultAction}
        .resultType=${e.resultType}
        .imageProperty=${e.imageProperty}
        @click:result-action=${s=>alert(`${s.detail.title} clicked!`)}
      ></eox-itemfilter>`,args:{inlineMode:!1,titleProperty:"title",aggregateResults:"themes",subTitleProperty:"description",enableResultAction:"true",imageProperty:"assets.thumbnail.href",resultType:"list",resultActionIcon:'<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="#004170" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',filterProperties:[{keys:["title","themes"],title:"Search",type:"text",placeholder:"Type Something...",expanded:!0,validation:{pattern:".{0,10}",message:"Maximum 10 characters"}},{key:"code",title:"Codes",type:"multiselect",placeholder:"Search Codes"},{key:"themes",title:"Theme",type:"select",placeholder:"Select a theme",inline:!1},{key:"tags",title:"Tags",type:"multiselect",placeholder:"Select tags",inline:!1},{key:"timestamp",type:"range",format:"date"},{key:"correlation",title:"Correlation",type:"range",step:.1},{key:"geometry",type:"spatial"}],items:r}}}const T={title:"Elements/eox-itemfilter",tags:["autodocs"],component:"eox-itemfilter"},o=y(),l=g(),a=h(),p=P(),n=x(),c=f(),d=S(),m=$(),u=k();o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"PrimaryStory()",...o.parameters?.docs?.source},description:{story:"A basic example for an item filter configuration.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"InlineModeStory()",...l.parameters?.docs?.source},description:{story:"Using `inlineMode`, the itemfilter is rendered in a single input field.",...l.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"PreSetFilterStory()",...a.parameters?.docs?.source},description:{story:"By using `state` inside the `filterProperties', it is possible to start the itemfilter.\nwith a pre-defined state.",...a.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"NestedPropertyStory()",...p.parameters?.docs?.source},description:{story:"By using dots (`.`) a nested property can be used as key.",...p.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"ExternalStory()",...n.parameters?.docs?.source},description:{story:"Example showcasing how to use an external API endpoint",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"AutoSpreadStory()",...c.parameters?.docs?.source},description:{story:"When using the config option `autoSpreadSingle`, then result aggregations that have only one item.\nget spread to the root level",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"CardDisplayStory()",...d.parameters?.docs?.source},description:{story:"When using `result-type` property with value `cards`, the results are not rendered in a list,\nbut in a responsive card grid",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"CSSVariablesStory()",...m.parameters?.docs?.source},description:{story:"CSS variables can be used to modify the styling and layout of itemfilter: e.g. the `--form-flex-direction`\nvariable set to `row` instead of `column` (default)",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"ResultActionStory()",...u.parameters?.docs?.source},description:{story:"The `click:result-action` event is triggered when a result action is clicked. You can enable this event with `enableResultAction`. The icon can be configered with the\n`resultActionIcon` property.",...u.parameters?.docs?.description}}};const C=["Primary","InlineMode","PreSetFilter","NestedProperty","External","AutoSpread","CardDisplay","CSSVariables","ResultAction"];export{c as AutoSpread,m as CSSVariables,d as CardDisplay,n as External,l as InlineMode,p as NestedProperty,a as PreSetFilter,o as Primary,u as ResultAction,C as __namedExportsOrder,T as default};
