import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{d as t,t as n}from"./lit-Dt0tyVZI.js";var r;function i(){return(i=e((()=>{r={args:{spec:{$schema:`https://vega.github.io/schema/vega-lite/v5.json`,description:`A simple bar chart with embedded data.`,data:{values:[{a:`A`,b:28},{a:`B`,b:55},{a:`C`,b:43},{a:`D`,b:91},{a:`E`,b:81},{a:`F`,b:53},{a:`G`,b:19},{a:`H`,b:87},{a:`I`,b:52}]},mark:{type:`bar`,tooltip:!0,fill:`#004170`},encoding:{x:{field:`a`,type:`ordinal`},y:{field:`b`,type:`quantitative`}}},"pointermove:item":e=>console.log(`Chart hovered! Hovered item: `,e.detail.item),"click:item":e=>console.log(`Chart clicked! Clicked item: `,e.detail.item)}}})))()}var a;function o(){return(o=e((()=>{a={args:{spec:{$schema:`https://vega.github.io/schema/vega-lite/v5.json`,description:`A simple bar chart with data passed from external property.`,data:{name:`myData`},mark:{type:`bar`,tooltip:!0,fill:`#004170`},encoding:{x:{field:`a`,type:`ordinal`},y:{field:`b`,type:`quantitative`}}},dataValues:{myData:[{a:`A`,b:28},{a:`B`,b:55},{a:`C`,b:43},{a:`D`,b:91},{a:`E`,b:81},{a:`F`,b:53},{a:`G`,b:19},{a:`H`,b:87},{a:`I`,b:52}]}}}})))()}var s;function c(){return(c=e((()=>{s={args:{spec:{$schema:`https://vega.github.io/schema/vega-lite/v5.json`,description:`A chart visualizing data fetched from a geoDB endpoint`,data:{url:`https://xcube-geodb.brockmann-consult.de/gtif/f0ad1e25-98fa-4b82-9228-815ab24f5dd1/GTIF_no2_data?and=(date.gte.2022-01-01,date.lte.2022-01-05)&select=no2_ec_station_ppbv,date`,parse:{no2_ec_station_ppbv:`number`,date:`date`}},encoding:{x:{field:`date`,type:`temporal`}},layer:[{encoding:{y:{field:`no2_ec_station_ppbv`,type:`quantitative`}},layer:[{mark:`line`},{transform:[{filter:{param:`hover`,empty:!1}}],mark:`point`}]},{mark:`rule`,encoding:{opacity:{condition:{value:.3,param:`hover`,empty:!1},value:0},tooltip:[{field:`no2_ec_station_ppbv`,type:`quantitative`}]},params:[{name:`hover`,select:{type:`point`,fields:[`date`],nearest:!0,on:`pointerover`,clear:`pointerout`}}]}]}}}})))()}var l;function u(){return(u=e((()=>{l={args:{spec:`eyIkc2NoZW1hIjoiaHR0cHM6Ly92ZWdhLmdpdGh1Yi5pby9zY2hlbWEvdmVnYS1saXRlL3Y1Lmpzb24iLCJkZXNjcmlwdGlvbiI6IlZlcnRpY2FsIGRlZmxlY3Rpb24gb3ZlciB0aW1lIiwiZGF0YSI6eyJuYW1lIjoidGltZXNlcmllcyIsInVybCI6Imh0dHBzOi8vd29ya3NwYWNlLXVpLXB1YmxpYy5ndGlmLWF1c3RyaWEuaHViLW90Yy5lb3guYXQvYXBpL3B1YmxpYy9zaGFyZS9wdWJsaWMtNHdhemVpM3ktMDIvV1ItMTAtVHJhbnNwb3J0LUluZnJhc3RydWN0dXJlLVByZWRpY3RpdmUtTWFpbnRlbmFuY2UvdjIvY3N2X3NpbmdsZS96b25lXzc1NDsga20gMjMuNTUuY3N2In0sInRyYW5zZm9ybSI6W3siY2FsY3VsYXRlIjoieWVhcihkYXR1bS5kYXRlKSIsImFzIjoieWVhciJ9XSwibGF5ZXIiOlt7Im1hcmsiOnsidHlwZSI6ImxpbmUiLCJzdHJva2UiOiIjMWY3N2I0In0sImVuY29kaW5nIjp7IngiOnsiZmllbGQiOiJkYXRlIiwidHlwZSI6InRlbXBvcmFsIiwiYXhpcyI6eyJ0aXRsZSI6IlllYXIiLCJmb3JtYXQiOiIlWSIsInRpY2tDb3VudCI6eyJpbnRlcnZhbCI6InllYXIiLCJzdGVwIjoxfX19LCJ5Ijp7InRpdGxlIjoiVmVydGljYWwgZGVmbGVjdGlvbiBbbW1dIiwiZmllbGQiOiJ2ZXJ0aWNhbCBkZWZsZWN0aW9uIGluIG1tIiwidHlwZSI6InF1YW50aXRhdGl2ZSJ9fX0seyJtYXJrIjp7InR5cGUiOiJsaW5lIiwic3Ryb2tlIjoiI2U3NGMzYyIsInN0cm9rZURhc2giOls1LDVdLCJzdHJva2VXaWR0aCI6Mn0sInRyYW5zZm9ybSI6W3sicmVncmVzc2lvbiI6InZlcnRpY2FsIGRlZmxlY3Rpb24gaW4gbW0iLCJvbiI6ImRhdGUiLCJtZXRob2QiOiJsaW5lYXIifV0sImVuY29kaW5nIjp7IngiOnsiZmllbGQiOiJkYXRlIiwidHlwZSI6InRlbXBvcmFsIn0sInkiOnsiZmllbGQiOiJ2ZXJ0aWNhbCBkZWZsZWN0aW9uIGluIG1tIiwidHlwZSI6InF1YW50aXRhdGl2ZSJ9fX0seyJ0cmFuc2Zvcm0iOlt7InJlZ3Jlc3Npb24iOiJ2ZXJ0aWNhbCBkZWZsZWN0aW9uIGluIG1tIiwib24iOiJkYXRlIiwibWV0aG9kIjoibGluZWFyIiwicGFyYW1zIjp0cnVlfSx7ImNhbGN1bGF0ZSI6IidUcmVuZDogJyArIGZvcm1hdChkYXR1bS5jb2VmWzFdICogMzY1LjI1ICogMjQgKiA2MCAqIDYwICogMTAwMCwgJy4zZicpICsgJyBtbS95ZWFyJyIsImFzIjoiZXF1YXRpb24ifSx7ImNhbGN1bGF0ZSI6IidSwrIgPSAnICsgZm9ybWF0KGRhdHVtLnJTcXVhcmVkLCAnLjRmJykiLCJhcyI6InIyIn1dLCJtYXJrIjp7InR5cGUiOiJ0ZXh0IiwiYWxpZ24iOiJyaWdodCIsImJhc2VsaW5lIjoidG9wIiwiZHgiOi01LCJkeSI6NSwiZm9udFNpemUiOjExLCJmb250V2VpZ2h0Ijoibm9ybWFsIn0sImVuY29kaW5nIjp7IngiOnsidmFsdWUiOiJ3aWR0aCJ9LCJ5Ijp7InZhbHVlIjoxMH0sInRleHQiOnsiZmllbGQiOiJlcXVhdGlvbiIsInR5cGUiOiJub21pbmFsIn19fSx7InRyYW5zZm9ybSI6W3sicmVncmVzc2lvbiI6InZlcnRpY2FsIGRlZmxlY3Rpb24gaW4gbW0iLCJvbiI6ImRhdGUiLCJtZXRob2QiOiJsaW5lYXIiLCJwYXJhbXMiOnRydWV9LHsiY2FsY3VsYXRlIjoiJ1LCsiA9ICcgKyBmb3JtYXQoZGF0dW0uclNxdWFyZWQsICcuNGYnKSIsImFzIjoicjIifV0sIm1hcmsiOnsidHlwZSI6InRleHQiLCJhbGlnbiI6InJpZ2h0IiwiYmFzZWxpbmUiOiJ0b3AiLCJkeCI6LTUsImR5IjoyMCwiZm9udFNpemUiOjExLCJmb250V2VpZ2h0Ijoibm9ybWFsIn0sImVuY29kaW5nIjp7IngiOnsidmFsdWUiOiJ3aWR0aCJ9LCJ5Ijp7InZhbHVlIjoxMH0sInRleHQiOnsiZmllbGQiOiJyMiIsInR5cGUiOiJub21pbmFsIn19fSx7InBhcmFtcyI6W3sibmFtZSI6ImhvdmVyIiwic2VsZWN0Ijp7InR5cGUiOiJwb2ludCIsImZpZWxkcyI6WyJkYXRlIl0sIm5lYXJlc3QiOnRydWUsIm9uIjoibW91c2VvdmVyIiwiY2xlYXIiOiJtb3VzZW91dCJ9fV0sInRyYW5zZm9ybSI6W10sIm1hcmsiOnsidHlwZSI6InJ1bGUiLCJjb2xvciI6ImdyZXkifSwiZW5jb2RpbmciOnsieCI6eyJmaWVsZCI6ImRhdGUiLCJ0eXBlIjoidGVtcG9yYWwifSwib3BhY2l0eSI6eyJjb25kaXRpb24iOnsicGFyYW0iOiJob3ZlciIsInZhbHVlIjowLjUsImVtcHR5IjpmYWxzZX0sInZhbHVlIjowfSwidG9vbHRpcCI6W3siZmllbGQiOiJkYXRlIiwidHlwZSI6InRlbXBvcmFsIiwidGl0bGUiOiJEYXRlIn0seyJmaWVsZCI6InZlcnRpY2FsIGRlZmxlY3Rpb24gaW4gbW0iLCJ0eXBlIjoicXVhbnRpdGF0aXZlIiwidGl0bGUiOiJWYWx1ZSIsImZvcm1hdCI6IiJ9XX19LHsidHJhbnNmb3JtIjpbeyJmaWx0ZXIiOnsicGFyYW0iOiJob3ZlciJ9fV0sIm1hcmsiOnsidHlwZSI6InBvaW50IiwiZmlsbGVkIjp0cnVlLCJzaXplIjo5MH0sImVuY29kaW5nIjp7IngiOnsiZmllbGQiOiJkYXRlIiwidHlwZSI6InRlbXBvcmFsIn0sInkiOnsiZmllbGQiOiJ2ZXJ0aWNhbCBkZWZsZWN0aW9uIGluIG1tIiwidHlwZSI6InF1YW50aXRhdGl2ZSJ9LCJvcGFjaXR5Ijp7ImNvbmRpdGlvbiI6eyJwYXJhbSI6ImhvdmVyIiwidmFsdWUiOjAuNSwiZW1wdHkiOmZhbHNlfSwidmFsdWUiOjB9fX1dLCJiYWNrZ3JvdW5kIjoidHJhbnNwYXJlbnQifQ==`}}})))()}var d;function f(){return(f=e((()=>{d={args:{style:`width: 100%; height: 450px;`,opt:{renderer:`svg`},spec:{$schema:`https://vega.github.io/schema/vega/v5.json`,description:`Overview + detail chart with individually draggable left and right zoom handles, styled consistently with eox-timecontrol and supporting dark mode.`,width:640,height:350,padding:10,autosize:`pad`,data:[{name:`sp500`,url:`https://cdn.jsdelivr.net/npm/vega-datasets@v1.29.0/data/sp500.csv`,format:{type:`csv`,parse:{price:`number`,date:`date`}}}],scales:[{name:`xOverview`,type:`time`,range:[0,640],domain:{data:`sp500`,field:`date`}}],signals:[{name:`brush`,value:[220,440],on:[{events:`@overviewBg:pointerdown`,update:`[clamp(x(), 0, 640), clamp(x(), 0, 640)]`},{events:`[@overviewBg:pointerdown, window:pointerup] > window:pointermove!`,update:`[min(bgAnchor[0], clamp(x(), 0, 640)), max(bgAnchor[0], clamp(x(), 0, 640))]`},{events:`[@handleLeft:pointerdown, window:pointerup] > window:pointermove!`,update:`[min(clamp(x(), 0, 640), brush[1] - 10), brush[1]]`},{events:`[@handleRight:pointerdown, window:pointerup] > window:pointermove!`,update:`[brush[0], max(clamp(x(), 0, 640), brush[0] + 10)]`},{events:{signal:`panDelta`},update:`clampRange([panAnchor[0] + panDelta, panAnchor[1] + panDelta], 0, 640)`},{events:{signal:`zoomDelta`},update:`clampRange(zoomLinear(brush, zoomAnchor, zoomDelta), 0, 640)`}]},{name:`bgAnchor`,value:[0,0],on:[{events:`@overviewBg:pointerdown`,update:`[clamp(x(), 0, 640), clamp(x(), 0, 640)]`}]},{name:`panAnchor`,value:null,on:[{events:`@brushBody:pointerdown`,update:`slice(brush)`}]},{name:`panDownX`,value:0,on:[{events:`@brushBody:pointerdown`,update:`x()`}]},{name:`panDelta`,value:0,on:[{events:`[@brushBody:pointerdown, window:pointerup] > window:pointermove!`,update:`x() - panDownX`}]},{name:`zoomAnchor`,value:0,on:[{events:`@brushBody:wheel`,update:`x()`}]},{name:`zoomDelta`,on:[{events:`@brushBody:wheel`,consume:!0,force:!0,update:`pow(1.001, event.deltaY * pow(16, event.deltaMode))`}]},{name:`detailDomain`,init:`invert("xOverview", [220, 440])`,on:[{events:{signal:`brush`},update:`span(brush) ? invert("xOverview", brush) : null`}]}],marks:[{type:`group`,name:`detail`,encode:{enter:{x:{value:0},y:{value:0},height:{value:230},width:{value:640}}},scales:[{name:`xDetail`,type:`time`,range:`width`,domain:{data:`sp500`,field:`date`},domainRaw:{signal:`detailDomain`}},{name:`yDetail`,type:`linear`,range:[230,0],domain:{data:`sp500`,field:`price`},nice:!0,zero:!0}],axes:[{orient:`bottom`,scale:`xDetail`,domainColor:`var(--outline, #74777f)`,tickColor:`var(--outline, #74777f)`,labelColor:`var(--on-surface, #1a1c1e)`,titleColor:`var(--on-surface, #1a1c1e)`},{orient:`left`,scale:`yDetail`,title:`Price ($)`,domainColor:`var(--outline, #74777f)`,tickColor:`var(--outline, #74777f)`,labelColor:`var(--on-surface, #1a1c1e)`,titleColor:`var(--on-surface, #1a1c1e)`,gridColor:`var(--outline-variant, #e0e2ec)`}],marks:[{type:`group`,encode:{enter:{height:{field:{group:`height`}},width:{field:{group:`width`}},clip:{value:!0}}},marks:[{type:`area`,from:{data:`sp500`},encode:{update:{x:{scale:`xDetail`,field:`date`},y:{scale:`yDetail`,field:`price`},y2:{scale:`yDetail`,value:0},fill:{value:`var(--primary, #004170)`}}}}]}]},{type:`group`,name:`overview`,encode:{enter:{x:{value:0},y:{value:275},height:{value:70},width:{value:640}}},scales:[{name:`yOverview`,type:`linear`,range:[70,0],domain:{data:`sp500`,field:`price`},nice:!0,zero:!0}],axes:[{orient:`bottom`,scale:`xOverview`,title:`Date`,domainColor:`var(--outline, #74777f)`,tickColor:`var(--outline, #74777f)`,labelColor:`var(--on-surface, #1a1c1e)`,titleColor:`var(--on-surface, #1a1c1e)`}],marks:[{type:`rect`,name:`overviewBg`,encode:{enter:{x:{value:0},y:{value:0},width:{field:{group:`width`}},height:{field:{group:`height`}},fill:{value:`transparent`},cursor:{value:`crosshair`}}}},{type:`area`,interactive:!1,from:{data:`sp500`},encode:{update:{x:{scale:`xOverview`,field:`date`},y:{scale:`yOverview`,field:`price`},y2:{scale:`yOverview`,value:0},fill:{value:`var(--primary-container, #94b8d7)`},opacity:{value:.7}}}},{type:`rect`,name:`brushBody`,encode:{enter:{y:{value:0},height:{field:{group:`height`}},fill:{value:`var(--primary, #004170)`},fillOpacity:{value:.2},cursor:{value:`grab`}},update:{x:{signal:`brush[0]`},x2:{signal:`brush[1]`}}}},{type:`rect`,interactive:!1,encode:{enter:{y:{value:0},height:{field:{group:`height`}},width:{value:3},fill:{value:`var(--primary, #004170)`}},update:{x:{signal:`brush[0]`}}}},{type:`rect`,interactive:!1,encode:{enter:{y:{value:0},height:{field:{group:`height`}},width:{value:3},fill:{value:`var(--primary, #004170)`}},update:{x:{signal:`brush[1] - 3`}}}},{type:`rect`,name:`handleLeft`,encode:{enter:{y:{value:21},width:{value:10},height:{value:28},cornerRadius:{value:5},fill:{value:`var(--surface, #ffffff)`},stroke:{value:`var(--primary, #004170)`},strokeWidth:{value:2},cursor:{value:`w-resize`}},update:{x:{signal:`brush[0] - 5`}}}},{type:`rect`,name:`handleRight`,encode:{enter:{y:{value:21},width:{value:10},height:{value:28},cornerRadius:{value:5},fill:{value:`var(--surface, #ffffff)`},stroke:{value:`var(--primary, #004170)`},strokeWidth:{value:2},cursor:{value:`e-resize`}},update:{x:{signal:`brush[1] - 5`}}}}]}]}}}})))()}var p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),i(),o(),c(),u(),f(),p={title:`Elements/eox-chart`,tags:[`autodocs`],component:`eox-chart`,args:{style:`width:100%; height: 400px;`},render:e=>t`
    <eox-chart
      .spec=${e.spec}
      .specbase64=${e.specbase64}
      .dataValues=${e.dataValues}
      .opt=${e.opt}
      .noShadow=${e.noShadow}
      .unstyled=${e.unstyled}
      .style=${e.style}
      @pointermove:item=${e[`pointermove:item`]}
      @click:item=${e[`click:item`]}
    ></eox-chart>
  `},m=r,h=a,g=s,_=l,v=d,y=[`Primary`,`DataValues`,`GeoDB`,`Base64EncodedSpec`,`OverviewZoom`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`PrimaryStory`,...m.parameters?.docs?.source},description:{story:"Basic chart example. It sets a simple Vega-Lite spec including data values\nas the `spec` property of eox-chart and renders a bar chart. In this example, the `pointermove:item`\nand `click:item` events of `eox-chart` are console logged.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`DataValuesStory`,...h.parameters?.docs?.source},description:{story:'Set the data values manually after chart initialization: this example demonstrates\nhow data can be set independently of the `spec`. This is handy if the `spec` should\nstay the same, while the data updates at a later point. For this to work,\nthe `spec` needs to include a named data source inside `data.name`, in this case set to "myData", and inside the\npassed `dataValues` property there needs to be a key also called "myData". Thus, the\ndata values of `dataValues.myData` are applied to the chart independently of the `spec`.',...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`GeoDBStory`,...g.parameters?.docs?.source},description:{story:`Retrieve and display data from geoDB endpoint. This example shows a Vega-Lite spec
that fetches data from a live endpoint and renders it as a line chart.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`Base64EncodedStory`,..._.parameters?.docs?.source},description:{story:`Passing Vega specification as base64 encoded string. This example shows use case where spec
contains both single quote and double quote which can not be passed as HTML attribute.
EOxChart exports util function \`base64EncodeSpec\` so that parent application can create the base64 encoded spec.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`OverviewZoomStory`,...v.parameters?.docs?.source},description:{story:`Overview + detail (focus + context) chart with interactive zoom brush and individually draggable handles.

This example demonstrates a dual-view time series chart:
- **Detail View (top)**: A detailed area chart showing the zoomed time range, with its x-axis domain dynamically bound to the overview brush selection.
- **Overview View (bottom)**: A compact summary timeline displaying the full dataset extent with a draggable zoom window.
- **Individually Draggable Handles**: The left and right handles can be dragged individually to adjust the zoom range boundaries from either side (\`w-resize\` / \`e-resize\` cursor, consistent with \`eox-timecontrol\`).
- **Panning & Redrawing**: The central shaded area can be dragged to pan the active window across time (\`grab\` cursor), and clicking/dragging on the overview background creates a new zoom window (\`crosshair\` cursor). Mouse wheel scrolling over the active window also zooms the range.
- **Dark Mode & EOxUI Theme Support**: Rendered via SVG (\`opt: { renderer: "svg" }\`) using EOxUI CSS custom properties (\`--primary\`, \`--primary-container\`, \`--surface\`, \`--on-surface\`, \`--outline\`) with fallbacks so the chart, handles, text, and axes dynamically respond to dark mode.

Fully functional example:

\`\`\`html
<eox-chart
  style="width: 100%; height: 450px;"
  .opt=\${{ renderer: "svg" }}
  .spec=\${{
    $schema: "https://vega.github.io/schema/vega/v5.json",
    description:
      "Overview + detail chart with individually draggable left and right zoom handles.",
    width: 640,
    height: 350,
    padding: 10,
    autosize: "pad",
    data: [
      {
        name: "sp500",
        url: "https://cdn.jsdelivr.net/npm/vega-datasets@v1.29.0/data/sp500.csv",
        format: { type: "csv", parse: { price: "number", date: "date" } },
      },
    ],
    scales: [
      {
        name: "xOverview",
        type: "time",
        range: [0, 640],
        domain: { data: "sp500", field: "date" },
      },
    ],
    signals: [
      {
        name: "brush",
        value: [220, 440],
        on: [
          {
            events: "@overviewBg:pointerdown",
            update: "[clamp(x(), 0, 640), clamp(x(), 0, 640)]",
          },
          {
            events:
              "[@overviewBg:pointerdown, window:pointerup] > window:pointermove!",
            update:
              "[min(bgAnchor[0], clamp(x(), 0, 640)), max(bgAnchor[0], clamp(x(), 0, 640))]",
          },
          {
            events:
              "[@handleLeft:pointerdown, window:pointerup] > window:pointermove!",
            update: "[min(clamp(x(), 0, 640), brush[1] - 10), brush[1]]",
          },
          {
            events:
              "[@handleRight:pointerdown, window:pointerup] > window:pointermove!",
            update: "[brush[0], max(clamp(x(), 0, 640), brush[0] + 10)]",
          },
          {
            events: { signal: "panDelta" },
            update:
              "clampRange([panAnchor[0] + panDelta, panAnchor[1] + panDelta], 0, 640)",
          },
          {
            events: { signal: "zoomDelta" },
            update:
              "clampRange(zoomLinear(brush, zoomAnchor, zoomDelta), 0, 640)",
          },
        ],
      },
      {
        name: "bgAnchor",
        value: [0, 0],
        on: [
          {
            events: "@overviewBg:pointerdown",
            update: "[clamp(x(), 0, 640), clamp(x(), 0, 640)]",
          },
        ],
      },
      {
        name: "panAnchor",
        value: null,
        on: [{ events: "@brushBody:pointerdown", update: "slice(brush)" }],
      },
      {
        name: "panDownX",
        value: 0,
        on: [{ events: "@brushBody:pointerdown", update: "x()" }],
      },
      {
        name: "panDelta",
        value: 0,
        on: [
          {
            events:
              "[@brushBody:pointerdown, window:pointerup] > window:pointermove!",
            update: "x() - panDownX",
          },
        ],
      },
      {
        name: "zoomAnchor",
        value: 0,
        on: [{ events: "@brushBody:wheel", update: "x()" }],
      },
      {
        name: "zoomDelta",
        on: [
          {
            events: "@brushBody:wheel",
            consume: true,
            force: true,
            update: "pow(1.001, event.deltaY * pow(16, event.deltaMode))",
          },
        ],
      },
      {
        name: "detailDomain",
        init: 'invert("xOverview", [220, 440])',
        on: [
          {
            events: { signal: "brush" },
            update: 'span(brush) ? invert("xOverview", brush) : null',
          },
        ],
      },
    ],
    marks: [
      {
        type: "group",
        name: "detail",
        encode: {
          enter: {
            x: { value: 0 },
            y: { value: 0 },
            height: { value: 230 },
            width: { value: 640 },
          },
        },
        scales: [
          {
            name: "xDetail",
            type: "time",
            range: "width",
            domain: { data: "sp500", field: "date" },
            domainRaw: { signal: "detailDomain" },
          },
          {
            name: "yDetail",
            type: "linear",
            range: [230, 0],
            domain: { data: "sp500", field: "price" },
            nice: true,
            zero: true,
          },
        ],
        axes: [
          {
            orient: "bottom",
            scale: "xDetail",
            domainColor: "var(--outline, #74777f)",
            tickColor: "var(--outline, #74777f)",
            labelColor: "var(--on-surface, #1a1c1e)",
            titleColor: "var(--on-surface, #1a1c1e)",
          },
          {
            orient: "left",
            scale: "yDetail",
            title: "Price ($)",
            domainColor: "var(--outline, #74777f)",
            tickColor: "var(--outline, #74777f)",
            labelColor: "var(--on-surface, #1a1c1e)",
            titleColor: "var(--on-surface, #1a1c1e)",
            gridColor: "var(--outline-variant, #e0e2ec)",
          },
        ],
        marks: [
          {
            type: "group",
            encode: {
              enter: {
                height: { field: { group: "height" } },
                width: { field: { group: "width" } },
                clip: { value: true },
              },
            },
            marks: [
              {
                type: "area",
                from: { data: "sp500" },
                encode: {
                  update: {
                    x: { scale: "xDetail", field: "date" },
                    y: { scale: "yDetail", field: "price" },
                    y2: { scale: "yDetail", value: 0 },
                    fill: { value: "var(--primary, #004170)" },
                  },
                },
              },
            ],
          },
        ],
      },
      {
        type: "group",
        name: "overview",
        encode: {
          enter: {
            x: { value: 0 },
            y: { value: 275 },
            height: { value: 70 },
            width: { value: 640 },
          },
        },
        scales: [
          {
            name: "yOverview",
            type: "linear",
            range: [70, 0],
            domain: { data: "sp500", field: "price" },
            nice: true,
            zero: true,
          },
        ],
        axes: [
          {
            orient: "bottom",
            scale: "xOverview",
            title: "Date",
            domainColor: "var(--outline, #74777f)",
            tickColor: "var(--outline, #74777f)",
            labelColor: "var(--on-surface, #1a1c1e)",
            titleColor: "var(--on-surface, #1a1c1e)",
          },
        ],
        marks: [
          {
            type: "rect",
            name: "overviewBg",
            encode: {
              enter: {
                x: { value: 0 },
                y: { value: 0 },
                width: { field: { group: "width" } },
                height: { field: { group: "height" } },
                fill: { value: "transparent" },
                cursor: { value: "crosshair" },
              },
            },
          },
          {
            type: "area",
            interactive: false,
            from: { data: "sp500" },
            encode: {
              update: {
                x: { scale: "xOverview", field: "date" },
                y: { scale: "yOverview", field: "price" },
                y2: { scale: "yOverview", value: 0 },
                fill: { value: "var(--primary-container, #94b8d7)" },
                opacity: { value: 0.7 },
              },
            },
          },
          {
            type: "rect",
            name: "brushBody",
            encode: {
              enter: {
                y: { value: 0 },
                height: { field: { group: "height" } },
                fill: { value: "var(--primary, #004170)" },
                fillOpacity: { value: 0.2 },
                cursor: { value: "grab" },
              },
              update: {
                x: { signal: "brush[0]" },
                x2: { signal: "brush[1]" },
              },
            },
          },
          {
            type: "rect",
            interactive: false,
            encode: {
              enter: {
                y: { value: 0 },
                height: { field: { group: "height" } },
                width: { value: 3 },
                fill: { value: "var(--primary, #004170)" },
              },
              update: {
                x: { signal: "brush[0]" },
              },
            },
          },
          {
            type: "rect",
            interactive: false,
            encode: {
              enter: {
                y: { value: 0 },
                height: { field: { group: "height" } },
                width: { value: 3 },
                fill: { value: "var(--primary, #004170)" },
              },
              update: {
                x: { signal: "brush[1] - 3" },
              },
            },
          },
          {
            type: "rect",
            name: "handleLeft",
            encode: {
              enter: {
                y: { value: 21 },
                width: { value: 10 },
                height: { value: 28 },
                cornerRadius: { value: 5 },
                fill: { value: "var(--surface, #ffffff)" },
                stroke: { value: "var(--primary, #004170)" },
                strokeWidth: { value: 2 },
                cursor: { value: "w-resize" },
              },
              update: {
                x: { signal: "brush[0] - 5" },
              },
            },
          },
          {
            type: "rect",
            name: "handleRight",
            encode: {
              enter: {
                y: { value: 21 },
                width: { value: 10 },
                height: { value: 28 },
                cornerRadius: { value: 5 },
                fill: { value: "var(--surface, #ffffff)" },
                stroke: { value: "var(--primary, #004170)" },
                strokeWidth: { value: 2 },
                cursor: { value: "e-resize" },
              },
              update: {
                x: { signal: "brush[1] - 5" },
              },
            },
          },
        ],
      },
    ],
  }}
></eox-chart>
\`\`\``,...v.parameters?.docs?.description}}}})))()}b();export{_ as Base64EncodedSpec,h as DataValues,g as GeoDB,v as OverviewZoom,m as Primary,y as __namedExportsOrder,p as default};