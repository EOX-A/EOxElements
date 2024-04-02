import{x as d}from"./lit-element-Bq1Y8_dt.js";class E extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      :host {
        display: grid;
        padding: ${this.getAttribute("gap")||0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap")||"0"}px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
      }
    </style>
    <slot></slot>
  `}attributeChangedCallback(e,o,r){o!==r&&(this[e]=r),this.render()}}class G extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          background: lightgrey;
          border: 1px solid darkgrey;
          border-radius: 4px;
          padding: 4px 8px;
          overflow: hidden;


          grid-column: ${parseInt(this.getAttribute("x"))+1} / span ${this.getAttribute("w")};
          grid-row: ${parseInt(this.getAttribute("y"))+1} / span ${this.getAttribute("h")};
        }
      </style>
      <slot></slot>
    `}attributeChangedCallback(e,o,r){o!==r&&(this[e]=r),this.render()}}customElements.define("eox-layout",E);customElements.define("eox-layout-item",G);const n="width: 100%; height: 400px;",L={args:{},render:()=>d`
    <!-- Render eox-layout component -->
    <eox-layout style="${n}">
      <eox-layout-item x="0" y="0" w="3" h="2">
        x="0" y="0" w="3" h="2"
      </eox-layout-item>
      <eox-layout-item x="0" y="2" w="2" h="10">
        x="0" y="2" w="2" h="10"
      </eox-layout-item>
      <eox-layout-item x="10" y="0" w="2" h="12">
        x="10" y="0" w="2" h="12"
      </eox-layout-item>
      <eox-layout-item x="4" y="10" w="4" h="2">
        x="4" y="10" w="4" h="2"
      </eox-layout-item>
    </eox-layout>
  `},T=()=>{let t=[];for(let e=0;e<12;e++)for(let o=0;o<12;o++)t.push([e,o]);return t},R={args:{},render:()=>d`
    <!-- Render eox-layout component -->
    <eox-layout style="${n}">
      ${T().map(([t,e])=>d`<eox-layout-item x="${t}" y="${e}" w="1" h="1"
            >${t}/${e}</eox-layout-item
          >`)}
    </eox-layout>
  `},k={args:{},render:()=>d`
    <!-- Render eox-layout component -->
    <eox-layout
      gap="8"
      style="${n}; border: 1px solid darkgrey"
    >
      <eox-layout-item x="0" y="0" w="3" h="2"></eox-layout-item>
      <eox-layout-item x="0" y="2" w="2" h="10"></eox-layout-item>
      <eox-layout-item x="10" y="0" w="2" h="12"></eox-layout-item>
      <eox-layout-item x="4" y="10" w="4" h="2"></eox-layout-item>
    </eox-layout>
  `},O={title:"Elements/eox-layout",tags:["autodocs"],component:"eox-layout"},a=L,s=R,i=k;var y,l,u,x,p;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:"PrimaryStory",...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:"Primary story showcasing basic usage.",...(p=(x=a.parameters)==null?void 0:x.docs)==null?void 0:p.description}}};var m,c,h,g,w;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"GridStory",...(h=(c=s.parameters)==null?void 0:c.docs)==null?void 0:h.source},description:{story:"The layout grid consists of 12x12 slots, where `x` and `y` coordinates are zero-indexed.",...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.description}}};var b,$,f,S,A;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"GapStory",...(f=($=i.parameters)==null?void 0:$.docs)==null?void 0:f.source},description:{story:"When using the `gap` attribute on `eox-layout`, a padding as well as gaps are\ncreated between the individual items. A 1px border was added to demonstrate the padding.",...(A=(S=i.parameters)==null?void 0:S.docs)==null?void 0:A.description}}};const P=["Primary","Grid","Gap"];export{i as Gap,s as Grid,a as Primary,P as __namedExportsOrder,O as default};
