import{x as o}from"./lit-element-Dh4_iwrW.js";const r={layer:"AWS_NO2-VISUALISATION",controlProperty:"TIME",controlValues:["2022-12-05","2022-12-12","2022-12-19","2022-12-26","2023-01-16","2023-01-23","2023-01-30","2023-02-06","2023-02-13","2023-02-27","2023-03-06","2023-03-13","2023-03-20","2023-03-27","2023-04-03","2023-04-10","2023-04-17","2023-04-24"],layers:[{type:"Tile",properties:{id:"AWS_NO2-VISUALISATION"},source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_NO2-VISUALISATION",TIME:"2022-12-05"}}},{type:"Tile",properties:{id:"OSM"},source:{type:"OSM"}}],center:[1e6,6e6],zoom:3},F={args:{...r,for:"eox-map#primary"},render:e=>o`
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
      style="margin-top: 8px"
    ></eox-timecontrol>
  `},D={args:{...r,for:"eox-map#slider",slider:!0},render:e=>o`
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
      style="margin-top: 8px"
    ></eox-timecontrol>
  `},_={args:{...r,for:"eox-map#programmatic-time-selection",slider:!0},render:e=>o`
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
        @click="${()=>{const O=document.getElementById("time").value,E=document.getElementById("programmatic");E.currentStep=O}}"
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
      style="margin-top: 8px"
    ></eox-timecontrol>
  `},w={args:{...r,for:"eox-map#disabled-play",disablePlay:!0},render:e=>o`
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
      style="margin-top: 8px"
    ></eox-timecontrol>
  `},B={args:{...r,disablePlay:!0,layer:void 0,for:void 0,controlProperty:void 0,slider:!0,onStepChange:e=>{console.log("stepchange",e.detail)}},render:e=>o`
    <eox-timecontrol
      .for=${e.for}
      .layer=${e.layer}
      .controlProperty=${e.controlProperty}
      .controlValues=${e.controlValues}
      .slider=${e.slider}
      .disablePlay=${e.disablePlay}
      @stepchange=${e.onStepChange}
    ></eox-timecontrol>
  `},v={args:{...r,for:"eox-map#primary",displayFormat:"MMMM DD, YYYY"},render:e=>o`
    <eox-map
      id="primary"
      style="width: 1005; height: 300px;"
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
      style="margin-top: 10px;"
      .displayFormat=${e.displayFormat}
    ></eox-timecontrol>
  `},Y={title:"Elements/eox-timecontrol",tags:["autodocs"],component:"eox-timecontrol"},l=F,a=D,i=_,c=w,s=B,t=v;var n,m,p;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:"PrimaryStory",...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,y,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"SliderStory",...(u=(y=a.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var $,x,S;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:"ProgrammaticTimeSelectionStory",...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var P,f,h;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:"DisabledPlayButtonStory",...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,V,I;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:"NoMapStory",...(I=(V=s.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var M,T,A,z,N;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:"FormatStory",...(A=(T=t.parameters)==null?void 0:T.docs)==null?void 0:A.source},description:{story:"Passing the `format` property/attribute, the displayed format can be changed.\nSupports [dayjs format token strings](https://day.js.org/docs/en/display/format)",...(N=(z=t.parameters)==null?void 0:z.docs)==null?void 0:N.description}}};const U=["Primary","Slider","ProgrammaticTimeSelection","DisabledPlayButton","NoMap","Format"];export{c as DisabledPlayButton,t as Format,s as NoMap,l as Primary,i as ProgrammaticTimeSelection,a as Slider,U as __namedExportsOrder,Y as default};
