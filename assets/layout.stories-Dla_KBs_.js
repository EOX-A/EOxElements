import{k as s}from"./lit-element-CHc5qsYe.js";const y="width: 100%; height: 400px;",f={args:{},render:()=>s`
    <!-- Render eox-layout component -->
    <eox-layout style="${y}">
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
  `},P=()=>{let o=[];for(let e=0;e<12;e++)for(let i=0;i<12;i++)o.push([e,i]);return o},_={args:{},render:()=>s`
    <!-- Render eox-layout component -->
    <eox-layout style="${y}">
      ${P().map(([o,e])=>s`<eox-layout-item x="${o}" y="${e}" w="1" h="1"
            >${o}/${e}</eox-layout-item
          >`)}
    </eox-layout>
  `},E={args:{},render:()=>s`
    <!-- Render eox-layout component -->
    <eox-layout
      gap="8"
      style="${y}; border: 1px solid darkgrey"
    >
      <eox-layout-item x="0" y="0" w="3" h="2"></eox-layout-item>
      <eox-layout-item x="0" y="2" w="2" h="10"></eox-layout-item>
      <eox-layout-item x="10" y="0" w="2" h="12"></eox-layout-item>
      <eox-layout-item x="4" y="10" w="4" h="2"></eox-layout-item>
    </eox-layout>
  `},T={title:"Elements/eox-layout",tags:["autodocs"],component:"eox-layout"},t=f,r=_,a=E;var d,m,n,x,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"PrimaryStory",...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source},description:{story:"Primary story showcasing basic usage.",...(l=(x=t.parameters)==null?void 0:x.docs)==null?void 0:l.description}}};var u,c,p,h,w;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"GridStory",...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:"The layout grid consists of 12x12 slots, where `x` and `y` coordinates are zero-indexed.",...(w=(h=r.parameters)==null?void 0:h.docs)==null?void 0:w.description}}};var g,S,$,G,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"GapStory",...($=(S=a.parameters)==null?void 0:S.docs)==null?void 0:$.source},description:{story:"When using the `gap` attribute on `eox-layout`, a padding as well as gaps are\ncreated between the individual items. A 1px border was added to demonstrate the padding.",...(b=(G=a.parameters)==null?void 0:G.docs)==null?void 0:b.description}}};const k=["Primary","Grid","Gap"];export{a as Gap,r as Grid,t as Primary,k as __namedExportsOrder,T as default};
