import{i as e}from"./iframe-DGGf7EFB.js";import"./preload-helper-PPVm8Dsz.js";const t="width: 100%; height: 400px;",r="background: lightgrey; border: 1px solid darkgrey; border-radius: 4px; padding: 4px 8px;",d={args:{},render:()=>e`
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
  `},n=()=>{let a=[];for(let o=0;o<12;o++)for(let u=0;u<12;u++)a.push([o,u]);return a},c={args:{},render:()=>e`
    <!-- Render eox-layout component -->
    <eox-layout style="${t}">
      ${n().map(([a,o])=>e`<eox-layout-item x="${a}" y="${o}" w="1" h="1"
            >${a}/${o}</eox-layout-item
          >`)}
    </eox-layout>
    <style>
      eox-layout-item {
        ${r}
      }
    </style>
  `},p={args:{},render:()=>e`
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
  `},h={args:{},render:()=>e`
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
  `},w={args:{},render:()=>e`
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
  `},g={args:{},render:()=>e`
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
  `},f={title:"Elements/eox-layout",tags:["autodocs"],component:"eox-layout"},s=d,i=c,y=p,l=h,x=w,m=g;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"PrimaryStory",...s.parameters?.docs?.source},description:{story:"Primary story showcasing basic usage.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"GridStory",...i.parameters?.docs?.source},description:{story:"The layout grid consists of 12x12 slots, where `x` and `y` coordinates are zero-indexed.",...i.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"GapStory",...y.parameters?.docs?.source},description:{story:"When using the `gap` attribute on `eox-layout`, a padding as well as gaps are\ncreated between the individual items. A 1px border was added to demonstrate the padding.",...y.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"ScrollStory",...l.parameters?.docs?.source},description:{story:"By using `row-height` or `column-width` attributes, the total width and/or height can be larger than the grid.\nIn this case, the items will overflow the grid.",...l.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"FillGridStory",...x.parameters?.docs?.source},description:{story:"By using the `fill-grid` attribute on `eox-layout`, the grid will automatically fill the available space.\nThe `row-height` and `column-width` attributes define the minimum size of the grid slots.",...x.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"ResponsiveStory",...m.parameters?.docs?.source},description:{story:"By providing three values instead of one for `x`, `y`, `w` or `h`, items can be rendered differently on different screen sizes (small/medium/large).",...m.parameters?.docs?.description}}};const b=["Primary","Grid","Gap","Scroll","FillGrid","Responsive"];export{x as FillGrid,y as Gap,i as Grid,s as Primary,m as Responsive,l as Scroll,b as __namedExportsOrder,f as default};
