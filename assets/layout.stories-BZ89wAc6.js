import{x as y}from"./lit-element-L04JKUcP.js";const i="width: 100%; height: 400px;",l="background: lightgrey; border: 1px solid darkgrey; border-radius: 4px; padding: 4px 8px;",P={args:{},render:()=>y`
    <!-- Render eox-layout component -->
    <eox-layout style="${i}">
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
    <style>
      eox-layout-item {
        ${l}
      }
    </style>
  `},L=()=>{let o=[];for(let e=0;e<12;e++)for(let x=0;x<12;x++)o.push([e,x]);return o},Y={args:{},render:()=>y`
    <!-- Render eox-layout component -->
    <eox-layout style="${i}">
      ${L().map(([o,e])=>y`<eox-layout-item x="${o}" y="${e}" w="1" h="1"
            >${o}/${e}</eox-layout-item
          >`)}
    </eox-layout>
    <style>
      eox-layout-item {
        ${l}
      }
    </style>
  `},k={args:{},render:()=>y`
    <!-- Render eox-layout component -->
    <eox-layout
      gap="8"
      style="${i}; border: 1px solid darkgrey"
    >
      <eox-layout-item x="0" y="0" w="3" h="2"></eox-layout-item>
      <eox-layout-item x="0" y="2" w="2" h="10"></eox-layout-item>
      <eox-layout-item x="10" y="0" w="2" h="12"></eox-layout-item>
      <eox-layout-item x="4" y="10" w="4" h="2"></eox-layout-item>
    </eox-layout>
    <style>
      eox-layout-item {
        ${l}
      }
    </style>
  `},A={args:{},render:()=>y`
    <!-- Render eox-layout component -->
    <eox-layout gap="8" row-height="3rem" style="${i}">
      <eox-layout-item x="0" y="0" w="4" h="4">
        x="0" y="0" w="4" h="4"
      </eox-layout-item>
      <eox-layout-item x="4" y="0" w="4" h="4">
        x="4" y="0" w="4" h="4"
      </eox-layout-item>
      <eox-layout-item x="8" y="0" w="4" h="4">
        x="8" y="0" w="4" h="4"
      </eox-layout-item>
      <eox-layout-item x="0" y="4" w="4" h="4">
        x="0" y="4" w="4" h="4"
      </eox-layout-item>
      <eox-layout-item x="4" y="4" w="4" h="4">
        x="4" y="4" w="4" h="4"
      </eox-layout-item>
      <eox-layout-item x="8" y="4" w="4" h="4">
        x="8" y="4" w="4" h="4"
      </eox-layout-item>
      <eox-layout-item x="0" y="8" w="4" h="4">
        x="0" y="8" w="4" h="4"
      </eox-layout-item>
    </eox-layout>
    <style>
      eox-layout-item {
        ${l}
      }
    </style>
  `},U={title:"Elements/eox-layout",tags:["autodocs"],component:"eox-layout"},t=P,r=Y,a=k,s=A;var m,u,d,n,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"PrimaryStory",...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source},description:{story:"Primary story showcasing basic usage.",...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.description}}};var p,h,w,g,S;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"GridStory",...(w=(h=r.parameters)==null?void 0:h.docs)==null?void 0:w.source},description:{story:"The layout grid consists of 12x12 slots, where `x` and `y` coordinates are zero-indexed.",...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.description}}};var $,b,G,T,_;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:"GapStory",...(G=(b=a.parameters)==null?void 0:b.docs)==null?void 0:G.source},description:{story:"When using the `gap` attribute on `eox-layout`, a padding as well as gaps are\ncreated between the individual items. A 1px border was added to demonstrate the padding.",...(_=(T=a.parameters)==null?void 0:T.docs)==null?void 0:_.description}}};var E,f,R,I,O;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:"ScrollStory",...(R=(f=s.parameters)==null?void 0:f.docs)==null?void 0:R.source},description:{story:"By using `row-height` or `column-width` attributes, the total width and/or height can be larger than the grid.\nIn this case, the items will overflow the grid.",...(O=(I=s.parameters)==null?void 0:I.docs)==null?void 0:O.description}}};const z=["Primary","Grid","Gap","Scroll"];export{a as Gap,r as Grid,t as Primary,s as Scroll,z as __namedExportsOrder,U as default};
