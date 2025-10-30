import{i as e}from"./iframe-BXeLpWAm.js";import"./preload-helper-Dp1pzeXC.js";const t="width: 100%; height: 400px;",r="background: lightgrey; border: 1px solid darkgrey; border-radius: 4px; padding: 4px 8px;",j={args:{},render:()=>e`
    <!-- Render eox-layout component -->
    <eox-layout style="${t}">
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
        ${r}
      }
    </style>
  `},q=()=>{let a=[];for(let o=0;o<12;o++)for(let u=0;u<12;u++)a.push([o,u]);return a},C={args:{},render:()=>e`
    <!-- Render eox-layout component -->
    <eox-layout style="${t}">
      ${q().map(([a,o])=>e`<eox-layout-item x="${a}" y="${o}" w="1" h="1"
            >${a}/${o}</eox-layout-item
          >`)}
    </eox-layout>
    <style>
      eox-layout-item {
        ${r}
      }
    </style>
  `},D={args:{},render:()=>e`
    <!-- Render eox-layout component -->
    <eox-layout
      gap="8"
      style="${t}; border: 1px solid darkgrey"
    >
      <eox-layout-item x="0" y="0" w="3" h="2"></eox-layout-item>
      <eox-layout-item x="0" y="2" w="2" h="10"></eox-layout-item>
      <eox-layout-item x="10" y="0" w="2" h="12"></eox-layout-item>
      <eox-layout-item x="4" y="10" w="4" h="2"></eox-layout-item>
    </eox-layout>
    <style>
      eox-layout-item {
        ${r}
      }
    </style>
  `},H={args:{},render:()=>e`
    <!-- Render eox-layout component -->
    <eox-layout gap="8" row-height="3rem" style="${t}">
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
        ${r}
      }
    </style>
  `},J={args:{},render:()=>e`
    <!-- Render eox-layout component -->
    <eox-layout
      fill-grid
      row-height="100px"
      column-width="200px"
      style="${t}"
    >
      <eox-layout-item w="2" h="2"> w="2" h="2" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
      <eox-layout-item w="3"> w="3" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
    </eox-layout>
    <style>
      eox-layout-item {
        ${r}
      }
    </style>
  `},K={args:{},render:()=>e`
    <!-- Render eox-layout component -->
    <eox-layout style="${t}" gap="8">
      <eox-layout-item x="0" y="0" w="12/1/1" h="1/11/12">
        x="0" y="0" w="12/1/1" h="1/11/12"
      </eox-layout-item>
      <eox-layout-item x="0/1/1" y="1/0/0" w="12/11/10" h="10/11/12">
        x="0/1/1" y="1/0/0" w="12/11/11" h="11/11/12"
      </eox-layout-item>
      <eox-layout-item x="0/0/11" y="11/11/0" w="12/12/1" h="1/1/12">
        x="0/0/11" y="11/11/0" w="12/12/1" h="1/1/12"
      </eox-layout-item>
    </eox-layout>
    <style>
      eox-layout-item {
        ${r}
      }
    </style>
  `},V={title:"Elements/eox-layout",tags:["autodocs"],component:"eox-layout"},s=j,i=C,y=D,l=H,x=J,m=K;var d,n,c,p,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"PrimaryStory",...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source},description:{story:"Primary story showcasing basic usage.",...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.description}}};var w,g,S,$,f;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"GridStory",...(S=(g=i.parameters)==null?void 0:g.docs)==null?void 0:S.source},description:{story:"The layout grid consists of 12x12 slots, where `x` and `y` coordinates are zero-indexed.",...(f=($=i.parameters)==null?void 0:$.docs)==null?void 0:f.description}}};var b,G,R,v,T;y.parameters={...y.parameters,docs:{...(b=y.parameters)==null?void 0:b.docs,source:{originalSource:"GapStory",...(R=(G=y.parameters)==null?void 0:G.docs)==null?void 0:R.source},description:{story:"When using the `gap` attribute on `eox-layout`, a padding as well as gaps are\ncreated between the individual items. A 1px border was added to demonstrate the padding.",...(T=(v=y.parameters)==null?void 0:v.docs)==null?void 0:T.description}}};var _,E,I,O,P;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:"ScrollStory",...(I=(E=l.parameters)==null?void 0:E.docs)==null?void 0:I.source},description:{story:"By using `row-height` or `column-width` attributes, the total width and/or height can be larger than the grid.\nIn this case, the items will overflow the grid.",...(P=(O=l.parameters)==null?void 0:O.docs)==null?void 0:P.description}}};var F,L,Y,k,z;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:"FillGridStory",...(Y=(L=x.parameters)==null?void 0:L.docs)==null?void 0:Y.source},description:{story:"By using the `fill-grid` attribute on `eox-layout`, the grid will automatically fill the available space.\nThe `row-height` and `column-width` attributes define the minimum size of the grid slots.",...(z=(k=x.parameters)==null?void 0:k.docs)==null?void 0:z.description}}};var A,B,U,M,W;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:"ResponsiveStory",...(U=(B=m.parameters)==null?void 0:B.docs)==null?void 0:U.source},description:{story:"By providing three values instead of one for `x`, `y`, `w` or `h`, items can be rendered differently on different screen sizes (small/medium/large).",...(W=(M=m.parameters)==null?void 0:M.docs)==null?void 0:W.description}}};const X=["Primary","Grid","Gap","Scroll","FillGrid","Responsive"];export{x as FillGrid,y as Gap,i as Grid,s as Primary,m as Responsive,l as Scroll,X as __namedExportsOrder,V as default};
