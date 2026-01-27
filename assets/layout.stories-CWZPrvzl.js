var h=Object.freeze,d=Object.defineProperty;var n=(e,o)=>h(d(e,"raw",{value:h(o||e.slice())}));import{x as y}from"./iframe-CFprW_I1.js";import"./preload-helper-PPVm8Dsz.js";const i="width: 100%; height: 400px;",t="background: lightgrey; border: 1px solid darkgrey; border-radius: 4px; padding: 4px 8px;",c={args:{style:i,storySlotContent:`
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
        ${t}
      }`},render:e=>y`
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
        ${t}
      }
    </style>
  `},p=()=>{let e=[];for(let o=0;o<12;o++)for(let a=0;a<12;a++)e.push([o,a]);return e};var w;const g={args:{style:i,storyCodeAfter:`
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
        ${t}
      }`},render:e=>y(w||(w=n([`
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
  `])),e.storyCodeBefore,e.style,p().map(([o,a])=>y`<eox-layout-item x="${o}" y="${a}" w="1" h="1"
            >${o}/${a}</eox-layout-item
          >`),t)},$={args:{style:`${i}; border: 1px solid darkgrey;`,gap:"8",storySlotContent:`
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
        ${t}
      }`},render:e=>y`
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
        ${t}
      }
    </style>
  `},S={args:{gap:8,"row-height":"3rem",style:i,storySlotContent:`
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
        ${t}
      }`},render:e=>y`
    <!-- Render eox-layout component -->
    <eox-layout
      gap=${e.gap}
      row-height=${e["row-height"]}
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
        ${t}
      }
    </style>
  `},f={args:{"fill-grid":!0,"row-height":"100px","column-width":"200px",style:i,storySlotContent:`
      <eox-layout-item w="2" h="2"> w="2" h="2" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
      <eox-layout-item w="3"> w="3" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
    `,storyStyle:`
      eox-layout-item {
        ${t}
      }`},render:e=>y`
    <!-- Render eox-layout component -->
    <eox-layout
      ?fill-grid=${e["fill-grid"]}
      row-height=${e["row-height"]}
      column-width=${e["column-width"]}
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
        ${t}
      }
    </style>
  `},b={args:{gap:"8",style:i,storySlotContent:`
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
        ${t}
      }`},render:e=>y`
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
        ${t}
      }
    </style>
  `},v={title:"Elements/eox-layout",tags:["autodocs"],component:"eox-layout"},r=c,l=g,x=$,s=S,m=f,u=b;r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"PrimaryStory",...r.parameters?.docs?.source},description:{story:"Primary story showcasing basic usage.",...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"GridStory",...l.parameters?.docs?.source},description:{story:"The layout grid consists of 12x12 slots, where `x` and `y` coordinates are zero-indexed.",...l.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"GapStory",...x.parameters?.docs?.source},description:{story:"When using the `gap` attribute on `eox-layout`, a padding as well as gaps are\ncreated between the individual items. A 1px border was added to demonstrate the padding.",...x.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"ScrollStory",...s.parameters?.docs?.source},description:{story:"By using `row-height` or `column-width` attributes, the total width and/or height can be larger than the grid.\nIn this case, the items will overflow the grid.",...s.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"FillGridStory",...m.parameters?.docs?.source},description:{story:"By using the `fill-grid` attribute on `eox-layout`, the grid will automatically fill the available space.\nThe `row-height` and `column-width` attributes define the minimum size of the grid slots.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"ResponsiveStory",...u.parameters?.docs?.source},description:{story:"By providing three values instead of one for `x`, `y`, `w` or `h`, items can be rendered differently on different screen sizes (small/medium/large).",...u.parameters?.docs?.description}}};const _=["Primary","Grid","Gap","Scroll","FillGrid","Responsive"];export{m as FillGrid,x as Gap,l as Grid,r as Primary,u as Responsive,s as Scroll,_ as __namedExportsOrder,v as default};
