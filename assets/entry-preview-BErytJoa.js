import{Z as u,B as m}from"./lit-element-Dh4_iwrW.js";import{d as y}from"./index-DrFu-skq.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:g}=u,O=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,x=e=>e.strings===void 0,p=()=>document.createComment(""),w=(e,t,r)=>{var d;const n=e._$AA.parentNode,_=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=n.insertBefore(p(),_),o=n.insertBefore(p(),_);r=new g(i,o,e,e.options)}else{const i=r._$AB.nextSibling,o=r._$AM,f=o!==e;if(f){let s;(d=r._$AQ)==null||d.call(r,e),r._$AM=e,r._$AP!==void 0&&(s=e._$AU)!==o._$AU&&r._$AP(s)}if(i!==_||f){let s=r._$AA;for(;s!==i;){const a=s.nextSibling;n.insertBefore(s,_),s=a}}}return r},H=(e,t,r=e)=>(e._$AI(t,r),e),b={},C=(e,t=b)=>e._$AH=t,U=e=>e._$AH,D=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const _=t.nextSibling;t.remove(),t=_}},{simulatePageLoad:l,simulateDOMContentLoaded:v}=__STORYBOOK_MODULE_PREVIEW_API__,{global:M}=__STORYBOOK_MODULE_GLOBAL__;var T=Object.defineProperty,h=(e,t)=>{for(var r in t)T(e,r,{get:t[r],enumerable:!0})},L={};h(L,{parameters:()=>c,render:()=>$,renderToCanvas:()=>A});var{Node:B}=M,$=(e,t)=>{let{id:r,component:n}=t;if(!n)throw new Error(`Unable to render story ${r} as the component annotation is missing from the default export`);let _=document.createElement(n);return Object.entries(e).forEach(([d,i])=>{_[d]=i}),_};function A({storyFn:e,kind:t,name:r,showMain:n,showError:_,forceRemount:d},i){let o=e();if(n(),O(o)){(d||!i.querySelector('[id="root-inner"]'))&&(i.innerHTML='<div id="root-inner"></div>');let f=i.querySelector('[id="root-inner"]');m(o,f),l(i)}else if(typeof o=="string")i.innerHTML=o,l(i);else if(o instanceof B){if(i.firstChild===o&&!d)return;i.innerHTML="",i.appendChild(o),v()}else _({title:`Expecting an HTML snippet or DOM node from the story: "${r}" of "${t}".`,description:y`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}var c={renderer:"web-components"};const j=Object.freeze(Object.defineProperty({__proto__:null,parameters:c,render:$,renderToCanvas:A},Symbol.toStringTag,{value:"Module"}));export{D as M,j as e,x as f,C as m,U as p,w as r,H as v};