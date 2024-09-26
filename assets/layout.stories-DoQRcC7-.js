import{k as s}from"./lit-element-CHc5qsYe.js";const i="width: 100%; height: 400px;",d="background: lightgrey; border: 1px solid darkgrey; border-radius: 4px; padding: 4px 8px;",_={args:{},render:()=>s`
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
        ${d}
      }
    </style>
  `},E=()=>{let o=[];for(let e=0;e<12;e++)for(let y=0;y<12;y++)o.push([e,y]);return o},f={args:{},render:()=>s`
    <!-- Render eox-layout component -->
    <eox-layout style="${i}">
      ${E().map(([o,e])=>s`<eox-layout-item x="${o}" y="${e}" w="1" h="1"
            >${o}/${e}</eox-layout-item
          >`)}
    </eox-layout>
    <style>
      eox-layout-item {
        ${d}
      }
    </style>
  `},k={args:{},render:()=>s`
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
        ${d}
      }
    </style>
  `},P={title:"Elements/eox-layout",tags:["autodocs"],component:"eox-layout"},t=_,r=f,a=k;var l,x,m,n,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"PrimaryStory",...(m=(x=t.parameters)==null?void 0:x.docs)==null?void 0:m.source},description:{story:"Primary story showcasing basic usage.",...(u=(n=t.parameters)==null?void 0:n.docs)==null?void 0:u.description}}};var c,p,h,g,w;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"GridStory",...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:"The layout grid consists of 12x12 slots, where `x` and `y` coordinates are zero-indexed.",...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.description}}};var S,$,b,G,T;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"GapStory",...(b=($=a.parameters)==null?void 0:$.docs)==null?void 0:b.source},description:{story:"When using the `gap` attribute on `eox-layout`, a padding as well as gaps are\ncreated between the individual items. A 1px border was added to demonstrate the padding.",...(T=(G=a.parameters)==null?void 0:G.docs)==null?void 0:T.description}}};const R=["Primary","Grid","Gap"];export{a as Gap,r as Grid,t as Primary,R as __namedExportsOrder,P as default};
