var r=Object.freeze,l=Object.defineProperty;var t=(e,d)=>r(l(e,"raw",{value:r(d||e.slice())}));import{k as p}from"./lit-element-CHc5qsYe.js";var s;const u={title:"Elements/eox-chart",tags:["autodocs"],component:"eox-chart",render:()=>p(s||(s=t([`
    <eox-chart></eox-chart>
    <script>
      const data = {
        datasets: [
          {
            type: "bar",
            label: "Bar Dataset",
            data: [1, 2, 3, 4],
          },
          {
            type: "line",
            label: "Line Dataset",
            data: [6, 6, 6, 6],
          },
        ],
        labels: ["January", "February", "March", "April"],
      };
      document.querySelector("eox-chart").setData(data);
    <\/script>
  `])))},a={args:{}};var o,c,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(n=(c=a.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const h=["Primary"];export{a as Primary,h as __namedExportsOrder,u as default};
