import{k as o}from"./lit-element-CHc5qsYe.js";const r={layer:"AWS_NO2-VISUALISATION",controlProperty:"TIME",controlValues:["2022-12-05","2022-12-12","2022-12-19","2022-12-26","2023-01-16","2023-01-23","2023-01-30","2023-02-06","2023-02-13","2023-02-27","2023-03-06","2023-03-13","2023-03-20","2023-03-27","2023-04-03","2023-04-10","2023-04-17","2023-04-24"],layers:[{type:"Tile",properties:{id:"AWS_NO2-VISUALISATION"},source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_NO2-VISUALISATION",TIME:"2022-12-05"}}},{type:"Tile",properties:{id:"OSM"},source:{type:"OSM"}}],center:[1e6,6e6],zoom:3},A={args:{...r,for:"eox-map#primary"},render:e=>o`
    <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      .zoom=${e.zoom}
      .center=${e.center}
      .layers=${e.layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layer=${e.layer}
      .controlProperty=${e.controlProperty}
      .controlValues=${e.controlValues}
      .slider=${e.slider}
    ></eox-timecontrol>
  `},N={args:{...r,for:"eox-map#slider",slider:!0},render:e=>o`
    <eox-map
      id="slider"
      style="width: 400px; height: 300px;"
      .zoom=${e.zoom}
      .center=${e.center}
      .layers=${e.layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layer=${e.layer}
      .controlProperty=${e.controlProperty}
      .controlValues=${e.controlValues}
      .slider=${e.slider}
    ></eox-timecontrol>
  `},z={args:{...r,for:"eox-map#programmatic-time-selection",slider:!0},render:e=>o`
    <eox-map
      id="programmatic-time-selection"
      style="width: 400px; height: 300px;"
      .zoom=${e.zoom}
      .center=${e.center}
      .layers=${e.layers}
    ></eox-map>
    <div>
      <input type="text" id="time" value="2022-12-26" />
      <button
        @click="${()=>{const I=document.getElementById("time").value,T=document.getElementById("programmatic");T.currentStep=I}}"
      >
        Go
      </button>
    </div>
    <eox-timecontrol
      id="programmatic"
      .for=${e.for}
      .layer=${e.layer}
      .controlProperty=${e.controlProperty}
      .controlValues=${e.controlValues}
      .slider=${e.slider}
    ></eox-timecontrol>
  `},M={args:{...r,for:"eox-map#disabled-play",disablePlay:!0},render:e=>o`
    <eox-map
      id="disabled-play"
      style="width: 400px; height: 300px;"
      .zoom=${e.zoom}
      .center=${e.center}
      .layers=${e.layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layer=${e.layer}
      .controlProperty=${e.controlProperty}
      .controlValues=${e.controlValues}
      .slider=${e.slider}
      .disablePlay=${e.disablePlay}
    ></eox-timecontrol>
  `},O={args:{...r,disablePlay:!0,layer:void 0,for:void 0,controlProperty:void 0,slider:!0,onStepChange:e=>{console.log("stepchange",e.detail)}},render:e=>o`
    <eox-timecontrol
      .for=${e.for}
      .layer=${e.layer}
      .controlProperty=${e.controlProperty}
      .controlValues=${e.controlValues}
      .slider=${e.slider}
      .disablePlay=${e.disablePlay}
      @stepchange=${e.onStepChange}
    ></eox-timecontrol>
  `},_={title:"Elements/eox-timecontrol",tags:["autodocs"],component:"eox-timecontrol"},t=A,l=N,a=z,c=M,i=O;var n,s,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"PrimaryStory",...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,d,y;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:"SliderStory",...(y=(d=l.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,$,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"ProgrammaticTimeSelectionStory",...(x=($=a.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var S,P,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:"DisabledPlayButtonStory",...(f=(P=c.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var h,b,V;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:"NoMapStory",...(V=(b=i.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};const B=["Primary","Slider","ProgrammaticTimeSelection","DisabledPlayButton","NoMap"];export{c as DisabledPlayButton,i as NoMap,t as Primary,a as ProgrammaticTimeSelection,l as Slider,B as __namedExportsOrder,_ as default};
