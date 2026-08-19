import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{d as t,t as n}from"./lit-D8IuYOuz.js";import{t as r}from"./taggedTemplateLiteral-D3OAzLWD.js";var i,a;function o(){return(o=e((()=>{i=`width: 100%; height: 400px;`,a=`background: lightgrey; border: 1px solid darkgrey; border-radius: 4px; padding: 4px 8px;`})))()}var s;function c(){return(c=e((()=>{n(),o(),s={args:{style:i,storySlotContent:`
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
      `,storyStyle:`eox-layout-item {
        ${a}
      }`},render:e=>t`
    <!-- Render eox-layout component -->
    <eox-layout style=${e.style}>
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
        ${a}
      }
    </style>
  `}})))()}var l,u,d;function f(){return(f=e((()=>{n(),o(),u=()=>{let e=[];for(let t=0;t<12;t++)for(let n=0;n<12;n++)e.push([t,n]);return e},d={args:{style:i,storyCodeAfter:`
    // Generate one [x,y] array for each slot in a 12x12 grid
    const renderItems = () => {
      let items = [];
      for (let x = 0; x < 12; x++) {
        for (let y = 0; y < 12; y++) {
          items.push([x, y]);
        }
      }
      return items;
    };
    eoxLayout.innerHTML = renderItems().map(
      ([x, y]) =>
        \`<eox-layout-item x="\${x}" y="\${y}" w="1" h="1">\${x}/\${y}</eox-layout-item>\`
    ).join("");
    `,storyStyle:`eox-layout-item {
        ${a}
      }`},render:e=>t(l||=r([`
    <script>
      `,`;
    <\/script>
    <eox-layout style=`,`>
      `,`
    </eox-layout>
    <style>
      eox-layout-item {
        `,`
      }
    </style>
  `]),e.storyCodeBefore,e.style,u().map(([e,n])=>t`<eox-layout-item x="${e}" y="${n}" w="1" h="1"
            >${e}/${n}</eox-layout-item
          >`),a)}})))()}var p;function m(){return(m=e((()=>{n(),o(),p={args:{style:`${i}; border: 1px solid darkgrey;`,gap:`8`,storySlotContent:`
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
    `,storyStyle:`eox-layout-item {
        ${a}
      }`},render:e=>t`
    <eox-layout gap="${e.gap}" style="${e.style}">
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
        ${a}
      }
    </style>
  `}})))()}var h;function g(){return(g=e((()=>{n(),o(),h={args:{gap:8,"row-height":`3rem`,style:i,storySlotContent:`
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
    `,storyStyle:`
      eox-layout-item {
        ${a}
      }`},render:e=>t`
    <!-- Render eox-layout component -->
    <eox-layout
      gap=${e.gap}
      row-height=${e[`row-height`]}
      style=${e.style}
    >
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
        ${a}
      }
    </style>
  `}})))()}var _;function v(){return(v=e((()=>{n(),o(),_={args:{"fill-grid":!0,"row-height":`100px`,"column-width":`200px`,style:i,storySlotContent:`
      <eox-layout-item w="2" h="2"> w="2" h="2" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
      <eox-layout-item w="3"> w="3" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
    `,storyStyle:`
      eox-layout-item {
        ${a}
      }`},render:e=>t`
    <!-- Render eox-layout component -->
    <eox-layout
      ?fill-grid=${e[`fill-grid`]}
      row-height=${e[`row-height`]}
      column-width=${e[`column-width`]}
      style="${e.style}"
    >
      <eox-layout-item w="2" h="2"> w="2" h="2" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
      <eox-layout-item w="3"> w="3" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
    </eox-layout>
    <style>
      eox-layout-item {
        ${a}
      }
    </style>
  `}})))()}var y;function b(){return(b=e((()=>{n(),o(),y={args:{gap:`8`,style:i,storySlotContent:`
      <eox-layout-item x="0" y="0" w="12/1/1" h="1/11/12">
        x="0" y="0" w="12/1/1" h="1/11/12"
      </eox-layout-item>
      <eox-layout-item x="0/1/1" y="1/0/0" w="12/11/10" h="10/11/12">
        x="0/1/1" y="1/0/0" w="12/11/11" h="11/11/12"
      </eox-layout-item>
      <eox-layout-item x="0/0/11" y="11/11/0" w="12/12/1" h="1/1/12">
        x="0/0/11" y="11/11/0" w="12/12/1" h="1/1/12"
      </eox-layout-item>
      `,storyStyle:`
      eox-layout-item {
        ${a}
      }`},render:e=>t`
    <!-- Render eox-layout component -->
    <eox-layout style=${e.style} gap=${e.gap}>
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
        ${a}
      }
    </style>
  `}})))()}function x(){return(x=e((()=>{c(),f(),m(),g(),v(),b()})))()}var S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{x(),S={title:`Elements/eox-layout`,tags:[`autodocs`],component:`eox-layout`},C=s,w=d,T=p,E=h,D=_,O=y,C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`PrimaryStory`,...C.parameters?.docs?.source},description:{story:`Primary story showcasing basic usage.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`GridStory`,...w.parameters?.docs?.source},description:{story:"The layout grid consists of 12x12 slots, where `x` and `y` coordinates are zero-indexed.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`GapStory`,...T.parameters?.docs?.source},description:{story:"When using the `gap` attribute on `eox-layout`, a padding as well as gaps are\ncreated between the individual items. A 1px border was added to demonstrate the padding.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`ScrollStory`,...E.parameters?.docs?.source},description:{story:"By using `row-height` or `column-width` attributes, the total width and/or height can be larger than the grid.\nIn this case, the items will overflow the grid.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`FillGridStory`,...D.parameters?.docs?.source},description:{story:"By using the `fill-grid` attribute on `eox-layout`, the grid will automatically fill the available space.\nThe `row-height` and `column-width` attributes define the minimum size of the grid slots.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`ResponsiveStory`,...O.parameters?.docs?.source},description:{story:"By providing three values instead of one for `x`, `y`, `w` or `h`, items can be rendered differently on different screen sizes (small/medium/large).",...O.parameters?.docs?.description}}},k=[`Primary`,`Grid`,`Gap`,`Scroll`,`FillGrid`,`Responsive`]})))()}A();export{D as FillGrid,T as Gap,w as Grid,C as Primary,O as Responsive,E as Scroll,k as __namedExportsOrder,S as default};