import{x as i}from"./lit-element-DBwSto7d.js";const a={layer:"AWS_NO2-VISUALISATION",controlProperty:"TIME",controlValues:["2022-12-05","2022-12-12","2022-12-19","2022-12-26","2023-01-16","2023-01-23","2023-01-30","2023-02-06","2023-02-13","2023-02-27","2023-03-06","2023-03-13","2023-03-20","2023-03-27","2023-04-03","2023-04-10","2023-04-17","2023-04-24"],layers:[{type:"Tile",properties:{id:"AWS_NO2-VISUALISATION"},source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_NO2-VISUALISATION",TIME:"2022-12-05"}}},{type:"Tile",properties:{id:"OSM"},source:{type:"OSM"}}],center:[1e6,6e6],zoom:3},I={args:{...a,for:"eox-map#primary"},render:e=>i`
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
  `},T={args:{...a,for:"eox-map#slider",slider:!0},render:e=>i`
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
  `},b={args:{...a,for:"eox-map#programmatic-time-selection",slider:!0},render:e=>i`
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
        @click="${()=>{const f=document.getElementById("time").value,h=document.getElementById("programmatic");h.currentStep=f}}"
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
  `},A={args:{...a,for:"eox-map#disabled-play",disablePlay:!0},render:e=>i`
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
  `},z={title:"Elements/eox-timecontrol",tags:["autodocs"],component:"eox-timecontrol"},o=I,r=T,t=b,l=A;var c,m,s;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"PrimaryStory",...(s=(m=o.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var n,p,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"SliderStory",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var y,u,$;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:"ProgrammaticTimeSelectionStory",...($=(u=t.parameters)==null?void 0:u.docs)==null?void 0:$.source}}};var x,S,P;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:"DisabledPlayButtonStory",...(P=(S=l.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const O=["Primary","Slider","ProgrammaticTimeSelection","DisabledPlayButton"];export{l as DisabledPlayButton,o as Primary,t as ProgrammaticTimeSelection,r as Slider,O as __namedExportsOrder,z as default};
