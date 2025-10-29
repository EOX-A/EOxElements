import{i as o}from"./iframe-CBe8Aa5m.js";import"./preload-helper-Dp1pzeXC.js";const t={layer:"AWS_NO2-VISUALISATION",controlProperty:"TIME",controlValues:["2022-12-05","2022-12-12","2022-12-19","2022-12-26","2023-01-16","2023-01-23","2023-01-30","2023-02-06","2023-02-13","2023-02-27","2023-03-06","2023-03-13","2023-03-20","2023-03-27","2023-04-03","2023-04-10","2023-04-17","2023-04-24"],navigation:!0,play:!0,layers:[{type:"Tile",properties:{id:"AWS_NO2-VISUALISATION"},source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_NO2-VISUALISATION",TIME:"2022-12-05"}}},{type:"Tile",properties:{id:"OSM"},source:{type:"OSM"}}],center:[1e6,6e6],zoom:3},E={args:{...t,for:"eox-map#primary"},render:e=>o`
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
      .navigation=${e.navigation}
      .play=${e.play}
      .slider=${e.slider}
      style="margin-top: 8px"
    ></eox-timecontrol>
  `},F={args:{...t,for:"eox-map#slider",slider:!0,navigation:!1,play:!1},render:e=>o`
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
      .navigation=${e.navigation}
      .play=${e.play}
      .slider=${e.slider}
      style="margin-top: 8px"
    ></eox-timecontrol>
  `},D={args:{...t,for:"eox-map#programmatic-time-selection",slider:!0,navigation:!1,play:!1},render:e=>o`
    <eox-map
      id="programmatic-time-selection"
      style="width: 400px; height: 300px;"
      .zoom=${e.zoom}
      .center=${e.center}
      .layers=${e.layers}
    ></eox-map>
    <div>
      <nav>
        <div class="field border">
          <input type="text" id="time" value="2022-12-26" />
        </div>
        <button
          @click="${()=>{const N=document.getElementById("time").value,O=document.getElementById("programmatic");O.currentStep=N}}"
        >
          Go
        </button>
      </nav>
    </div>
    <eox-timecontrol
      id="programmatic"
      .for=${e.for}
      .layer=${e.layer}
      .controlProperty=${e.controlProperty}
      .controlValues=${e.controlValues}
      .navigation=${e.navigation}
      .play=${e.play}
      .slider=${e.slider}
      style="margin-top: 8px"
    ></eox-timecontrol>
  `},_={args:{...t,for:"eox-map#disabled-play",play:!1,navigation:!1},render:e=>o`
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
      .navigation=${e.navigation}
      .slider=${e.slider}
      .play=${e.play}
      style="margin-top: 8px"
    ></eox-timecontrol>
  `},g={args:{...t,play:!0,layer:void 0,for:void 0,controlProperty:void 0,slider:!0,onStepChange:e=>{console.log("stepchange",e.detail)}},render:e=>o`
    <eox-timecontrol
      .for=${e.for}
      .layer=${e.layer}
      .controlProperty=${e.controlProperty}
      .controlValues=${e.controlValues}
      .navigation=${e.navigation}
      .slider=${e.slider}
      .play=${e.play}
      @stepchange=${e.onStepChange}
    ></eox-timecontrol>
  `},w={args:{...t,for:"eox-map#format",displayFormat:"MMMM DD, YYYY",play:!1},render:e=>o`
    <eox-map
      id="format"
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
      .navigation=${e.navigation}
      .play=${e.play}
      .slider=${e.slider}
      style="margin-top: 10px;"
      .displayFormat=${e.displayFormat}
    ></eox-timecontrol>
  `},Y={title:"Elements/eox-timecontrol",tags:["autodocs"],component:"eox-timecontrol"},a=E,l=F,i=D,n=_,c=g,r=w;var p,s,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"PrimaryStory",...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var d,y,$;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:"SliderStory",...($=(y=l.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};var u,x,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"ProgrammaticTimeSelectionStory",...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,h,v;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"DisabledButtonsStory",...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var P,V,I;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:"NoMapStory",...(I=(V=c.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var M,T,b,A,z;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:"FormatStory",...(b=(T=r.parameters)==null?void 0:T.docs)==null?void 0:b.source},description:{story:"Passing the `format` property/attribute, the displayed format can be changed.\nSupports [dayjs format token strings](https://day.js.org/docs/en/display/format)",...(z=(A=r.parameters)==null?void 0:A.docs)==null?void 0:z.description}}};const U=["Primary","Slider","ProgrammaticTimeSelection","DisabledButtons","NoMap","Format"];export{n as DisabledButtons,r as Format,c as NoMap,a as Primary,i as ProgrammaticTimeSelection,l as Slider,U as __namedExportsOrder,Y as default};
