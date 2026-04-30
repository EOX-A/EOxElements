import{n as e}from"./chunk-jRWAZmH_.js";import{gt as t,xt as n}from"./iframe-DnIjDLS9.js";import{n as r,t as i}from"./taggedTemplateLiteral-bYsn3Ild.js";var a,o,s=e((()=>{a=`width: 100%; height: 400px;`,o=`background: lightgrey; border: 1px solid darkgrey; border-radius: 4px; padding: 4px 8px;`})),c=e((()=>{s()})),l,u=e((()=>{t(),c(),l={args:{style:a,storySlotContent:`
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
        ${o}
      }`},render:e=>n`
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
        ${o}
      }
    </style>
  `}})),d,f,p,m=e((()=>{t(),c(),r(),f=()=>{let e=[];for(let t=0;t<12;t++)for(let n=0;n<12;n++)e.push([t,n]);return e},p={args:{style:a,storyCodeAfter:`
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
        ${o}
      }`},render:e=>n(d||=i([`
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
  `]),e.storyCodeBefore,e.style,f().map(([e,t])=>n`<eox-layout-item x="${e}" y="${t}" w="1" h="1"
            >${e}/${t}</eox-layout-item
          >`),o)}})),h,g=e((()=>{t(),c(),h={args:{style:`${a}; border: 1px solid darkgrey;`,gap:`8`,storySlotContent:`
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
        ${o}
      }`},render:e=>n`
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
        ${o}
      }
    </style>
  `}})),_,v=e((()=>{t(),c(),_={args:{gap:8,"row-height":`3rem`,style:a,storySlotContent:`
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
        ${o}
      }`},render:e=>n`
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
        ${o}
      }
    </style>
  `}})),y,b=e((()=>{t(),c(),y={args:{"fill-grid":!0,"row-height":`100px`,"column-width":`200px`,style:a,storySlotContent:`
      <eox-layout-item w="2" h="2"> w="2" h="2" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
      <eox-layout-item w="3"> w="3" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
    `,storyStyle:`
      eox-layout-item {
        ${o}
      }`},render:e=>n`
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
        ${o}
      }
    </style>
  `}})),x,S=e((()=>{t(),c(),x={args:{gap:`8`,style:a,storySlotContent:`
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
        ${o}
      }`},render:e=>n`
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
        ${o}
      }
    </style>
  `}})),C=e((()=>{u(),m(),g(),v(),b(),S()})),w,T,E,D,O,k,A,j;e((()=>{C(),w={title:`Elements/eox-layout`,tags:[`autodocs`],component:`eox-layout`},T=l,E=p,D=h,O=_,k=y,A=x,T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`PrimaryStory`,...T.parameters?.docs?.source},description:{story:`Primary story showcasing basic usage.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`GridStory`,...E.parameters?.docs?.source},description:{story:"The layout grid consists of 12x12 slots, where `x` and `y` coordinates are zero-indexed.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`GapStory`,...D.parameters?.docs?.source},description:{story:"When using the `gap` attribute on `eox-layout`, a padding as well as gaps are\ncreated between the individual items. A 1px border was added to demonstrate the padding.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`ScrollStory`,...O.parameters?.docs?.source},description:{story:"By using `row-height` or `column-width` attributes, the total width and/or height can be larger than the grid.\nIn this case, the items will overflow the grid.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`FillGridStory`,...k.parameters?.docs?.source},description:{story:"By using the `fill-grid` attribute on `eox-layout`, the grid will automatically fill the available space.\nThe `row-height` and `column-width` attributes define the minimum size of the grid slots.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`ResponsiveStory`,...A.parameters?.docs?.source},description:{story:"By providing three values instead of one for `x`, `y`, `w` or `h`, items can be rendered differently on different screen sizes (small/medium/large).",...A.parameters?.docs?.description}}},j=[`Primary`,`Grid`,`Gap`,`Scroll`,`FillGrid`,`Responsive`]}))();export{k as FillGrid,D as Gap,E as Grid,T as Primary,A as Responsive,O as Scroll,j as __namedExportsOrder,w as default};