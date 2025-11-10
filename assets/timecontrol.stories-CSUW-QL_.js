import{i as o}from"./iframe-DGGf7EFB.js";import"./preload-helper-PPVm8Dsz.js";const t={layer:"AWS_NO2-VISUALISATION",controlProperty:"TIME",controlValues:["2022-12-05","2022-12-12","2022-12-19","2022-12-26","2023-01-16","2023-01-23","2023-01-30","2023-02-06","2023-02-13","2023-02-27","2023-03-06","2023-03-13","2023-03-20","2023-03-27","2023-04-03","2023-04-10","2023-04-17","2023-04-24"],navigation:!0,play:!0,layers:[{type:"Tile",properties:{id:"AWS_NO2-VISUALISATION"},source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_NO2-VISUALISATION",TIME:"2022-12-05"}}},{type:"Tile",properties:{id:"OSM"},source:{type:"OSM"}}],center:[1e6,6e6],zoom:3},m={args:{...t,for:"eox-map#primary"},render:e=>o`
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
  `},d={args:{...t,for:"eox-map#slider",slider:!0,navigation:!1,play:!1},render:e=>o`
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
  `},y={args:{...t,for:"eox-map#programmatic-time-selection",slider:!0,navigation:!1,play:!1},render:e=>o`
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
          @click="${()=>{const p=document.getElementById("time").value,s=document.getElementById("programmatic");s.currentStep=p}}"
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
  `},$={args:{...t,for:"eox-map#disabled-play",play:!1,navigation:!1},render:e=>o`
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
  `},u={args:{...t,play:!0,layer:void 0,for:void 0,controlProperty:void 0,slider:!0,onStepChange:e=>{console.log("stepchange",e.detail)}},render:e=>o`
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
  `},x={args:{...t,for:"eox-map#format",displayFormat:"MMMM DD, YYYY",play:!1},render:e=>o`
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
  `},h={title:"Elements/eox-timecontrol",tags:["autodocs"],component:"eox-timecontrol"},a=m,l=d,i=y,n=$,c=u,r=x;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"PrimaryStory",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"SliderStory",...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"ProgrammaticTimeSelectionStory",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"DisabledButtonsStory",...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"NoMapStory",...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"FormatStory",...r.parameters?.docs?.source},description:{story:"Passing the `format` property/attribute, the displayed format can be changed.\nSupports [dayjs format token strings](https://day.js.org/docs/en/display/format)",...r.parameters?.docs?.description}}};const v=["Primary","Slider","ProgrammaticTimeSelection","DisabledButtons","NoMap","Format"];export{n as DisabledButtons,r as Format,c as NoMap,a as Primary,i as ProgrammaticTimeSelection,l as Slider,v as __namedExportsOrder,h as default};
