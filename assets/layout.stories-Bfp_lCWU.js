import{x as o}from"./lit-element-L04JKUcP.js";const y="width: 100%; height: 400px;",x="background: lightgrey; border: 1px solid darkgrey; border-radius: 4px; padding: 4px 8px;",A={args:{},render:()=>o`
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
    <style>
      eox-layout-item {
        ${x}
      }
    </style>
  `},z=()=>{let t=[];for(let e=0;e<12;e++)for(let u=0;u<12;u++)t.push([e,u]);return t},B={args:{},render:()=>o`
    <!-- Render eox-layout component -->
    <eox-layout style="${y}">
      ${z().map(([t,e])=>o`<eox-layout-item x="${t}" y="${e}" w="1" h="1"
            >${t}/${e}</eox-layout-item
          >`)}
    </eox-layout>
    <style>
      eox-layout-item {
        ${x}
      }
    </style>
  `},U={args:{},render:()=>o`
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
    <style>
      eox-layout-item {
        ${x}
      }
    </style>
  `},M={args:{},render:()=>o`
    <!-- Render eox-layout component -->
    <eox-layout gap="8" row-height="3rem" style="${y}">
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
        ${x}
      }
    </style>
  `},W={args:{},render:()=>o`
    <!-- Render eox-layout component -->
    <eox-layout
      fill-grid
      row-height="100px"
      column-width="200px"
      style="${y}"
    >
      <eox-layout-item w="2" h="2"> w="2" h="2" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
      <eox-layout-item w="3"> w="3" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
    </eox-layout>
    <style>
      eox-layout-item {
        ${x}
      }
    </style>
  `},q={title:"Elements/eox-layout",tags:["autodocs"],component:"eox-layout"},r=A,a=B,i=U,s=M,l=W;var m,d,n,c,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"PrimaryStory",...(n=(d=r.parameters)==null?void 0:d.docs)==null?void 0:n.source},description:{story:"Primary story showcasing basic usage.",...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.description}}};var p,w,g,S,$;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"GridStory",...(g=(w=a.parameters)==null?void 0:w.docs)==null?void 0:g.source},description:{story:"The layout grid consists of 12x12 slots, where `x` and `y` coordinates are zero-indexed.",...($=(S=a.parameters)==null?void 0:S.docs)==null?void 0:$.description}}};var b,G,f,T,_;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"GapStory",...(f=(G=i.parameters)==null?void 0:G.docs)==null?void 0:f.source},description:{story:"When using the `gap` attribute on `eox-layout`, a padding as well as gaps are\ncreated between the individual items. A 1px border was added to demonstrate the padding.",...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.description}}};var E,R,I,O,P;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:"ScrollStory",...(I=(R=s.parameters)==null?void 0:R.docs)==null?void 0:I.source},description:{story:"By using `row-height` or `column-width` attributes, the total width and/or height can be larger than the grid.\nIn this case, the items will overflow the grid.",...(P=(O=s.parameters)==null?void 0:O.docs)==null?void 0:P.description}}};var F,L,Y,k,v;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"FillGridStory",...(Y=(L=l.parameters)==null?void 0:L.docs)==null?void 0:Y.source},description:{story:"By using the `fill-grid` attribute on `eox-layout`, the grid will automatically fill the available space.\nThe `row-height` and `column-width` attributes define the minimum size of the grid slots.",...(v=(k=l.parameters)==null?void 0:k.docs)==null?void 0:v.description}}};const C=["Primary","Grid","Gap","Scroll","FillGrid"];export{l as FillGrid,i as Gap,a as Grid,r as Primary,s as Scroll,C as __namedExportsOrder,q as default};
