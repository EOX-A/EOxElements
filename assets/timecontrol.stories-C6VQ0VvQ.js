import{s as Y,x as d,T as H,b as P}from"./lit-element-Bq1Y8_dt.js";import{L as _}from"./main-BrEl8cA_.js";import{r as g,n as c,t as B}from"./state-DQZYXMyu.js";import"./toolcool-range-slider.min-BBXDELo7.js";import{b as Z}from"./button-BLuGcwvd.js";import{d as b}from"./dayjs.min-BIwLhz4I.js";import{c as N,g as U}from"./_commonjsHelpers-BosuxZz1.js";import"./index-CBTDJjUK.js";const F=`
:host {
  display: block;
}
`,Q=`
* {
  font-family: Roboto, sans-serif;
}

${Z}

button.icon-text.play:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplay%3C/title%3E%3Cpath d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='%23fff' /%3E%3C/svg%3E");
}

button.icon-text.pause:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Epause%3C/title%3E%3Cpath d='M14,19H18V5H14M6,19H10V5H6V19Z' fill='%23fff' /%3E%3C/svg%3E");
}

button.icon.previous:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Earrow-left-drop-circle%3C/title%3E%3Cpath d='M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M14,7L9,12L14,17V7Z' fill='%23004170' /%3E%3C/svg%3E");
}

button.icon.next:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Earrow-right-drop-circle%3C/title%3E%3Cpath d='M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M10,17L15,12L10,7V17Z' fill='%23004170' /%3E%3C/svg%3E");
}
`;var R={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(N,function(){return function(r,o,n){o.prototype.dayOfYear=function(i){var l=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return i==null?l:this.add(i-l,"day")}}})})(R);var X=R.exports;const J=U(X);var q={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(N,function(){var r="day";return function(o,n,i){var l=function(p){return p.add(4-p.isoWeekday(),r)},y=n.prototype;y.isoWeekYear=function(){return l(this).year()},y.isoWeek=function(p){if(!this.$utils().u(p))return this.add(7*(p-this.isoWeek()),r);var m,f,h,S,j=l(this),D=(m=this.isoWeekYear(),f=this.$u,h=(f?i.utc:i)().year(m).startOf("year"),S=4-h.isoWeekday(),h.isoWeekday()>4&&(S+=7),h.add(S,r));return j.diff(D,"week")+1},y.isoWeekday=function(p){return this.$utils().u(p)?this.day()||7:this.day(this.day()%7?p:p-7)};var G=y.startOf;y.startOf=function(p,m){var f=this.$utils(),h=!!f.u(m)||m;return f.p(p)==="isoweek"?h?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):G.bind(this)(p,m)}}})})(q);var K=q.exports;const ee=U(K);var te=Object.defineProperty,re=Object.getOwnPropertyDescriptor,s=(e,t,r,o)=>{for(var n=o>1?void 0:o?re(t,r):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(n=(o?l(t,r,n):l(n))||n);return o&&n&&te(t,r,n),n};b.extend(J);b.extend(ee);let a=class extends Y{constructor(){super(...arguments),this.controlValues=[],this._newStepIndex=0}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(e){e?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=e,this.requestUpdate()}setConfig(e){this.layer=e.layer??this.layer,this.controlProperty=e.controlProperty??this.controlProperty,this.controlValues=e.controlValues??this.controlValues,this.requestUpdate(),this._updateStep(0)}get currentStep(){return this.controlValues[this._newStepIndex]}set currentStep(e){const t=this.controlValues.findIndex(r=>r===e);t>-1?this._newStepIndex=t:console.error(`Unable to find step "${e}" in available times!`)}_updateStep(e=1){var t;this._newStepIndex=this._newStepIndex+e,this._newStepIndex>this.controlValues.length-1&&(this._newStepIndex=0),this._newStepIndex<0&&(this._newStepIndex=this.controlValues.length-1),(t=this._controlSource)==null||t.updateParams({[this.controlProperty]:this.controlValues[this._newStepIndex]}),this.requestUpdate(),this.dispatchEvent(new CustomEvent("stepchange",{detail:{currentStep:this.currentStep}}))}getFlatLayersArray(e){const t=[];t.push(...e);let r=t.filter(o=>o instanceof _);for(;r.length;){const o=[];for(let n=0,i=r.length;n<i;n++){const l=r[n].getLayers().getArray();t.push(...l),o.push(...l.filter(y=>y instanceof _))}r=o}return t}render(){const e=document.querySelector(this.for),t=e.map||e;return t.once("loadend",()=>{if(!this._originalParams){const o=this.getFlatLayersArray(t.getLayers().getArray()).find(n=>n.get("id")===this.layer);this._controlSource=o.getSource(),this._originalParams=this._controlSource.getParams()}}),d`
      <style>
        ${F}
        ${!this.unstyled&&Q}
      </style>
      <main>
        <div id="controls" part="controls">
          <button
            part="previous"
            class="icon previous"
            @click="${()=>this.previous()}"
          >
            <
          </button>
          <button part="next" class="icon next" @click="${()=>this.next()}">
            >
          </button>
          ${this.disablePlay?H:d`
                <button
                  part="play"
                  class="icon-text ${this._isAnimationPlaying?"pause":"play"}"
                  @click="${()=>this.playAnimation(!this._isAnimationPlaying)}"
                >
                  ${this._isAnimationPlaying?"Pause":"Play"}
                </button>
              `}
          ${this.slider?d`
                <div class="slider-col">
                  <tc-range-slider
                    data="${this.controlValues}"
                    part="slider"
                    value="${this.controlValues[this._newStepIndex]}"
                    style="display: inline-block;"
                    @change="${r=>this._updateStep(this.controlValues.findIndex(o=>o===r.detail.value)-this._newStepIndex)}"
                  ></tc-range-slider>

                  <eox-sliderticks
                    width="300"
                    .steps="${this.controlValues}"
                  ></eox-sliderticks>
                </div>
              `:""}

          <span part="current">${this.controlValues[this._newStepIndex]}</span>
        </div>
      </main>
    `}};s([c({attribute:"control-property"})],a.prototype,"controlProperty",2);s([c({attribute:"control-values",type:Array})],a.prototype,"controlValues",2);s([c()],a.prototype,"for",2);s([c()],a.prototype,"layer",2);s([c({type:Boolean})],a.prototype,"slider",2);s([c()],a.prototype,"_originalParams",2);s([c({attribute:"disable-play",type:Boolean})],a.prototype,"disablePlay",2);s([c({attribute:"current-step"})],a.prototype,"currentStep",1);s([g()],a.prototype,"_animationInterval",2);s([g()],a.prototype,"_controlSource",2);s([g()],a.prototype,"_isAnimationPlaying",2);s([g()],a.prototype,"_newStepIndex",2);s([c({type:Boolean})],a.prototype,"unstyled",2);a=s([B("eox-timecontrol")],a);let x=class extends Y{constructor(){super(...arguments),this.width=0,this.steps=[],this.height=6,this.svgWidth=0}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.handleResize.bind(this)),super.disconnectedCallback()}firstUpdated(){this.handleResize()}handleResize(){this.svgWidth=this.shadowRoot.querySelector("svg").clientWidth,this.height=this.shadowRoot.querySelector("svg").clientHeight}get lines(){const e=this.numLines>this.width/2?this.width/2:this.numLines,t=this.width/(e-1);return Array.from({length:this.numLines},(r,o)=>o*t)}get numLines(){return this.steps?this.steps.length:0}get yearMarks(){const e=[];let t=null;return this.lines.forEach((r,o)=>{const i=b(this.steps[o]).year();(o===0||i!==t)&&e.push({label:i,position:r}),t=i}),e.filter((r,o)=>{const n=e[o+1];return!(n&&n.position-r.position<25)})}isYearLine(e){return this.yearMarks.some(r=>Math.abs(r.position-e)<1)}render(){return d`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; height: 30px;"
          viewBox="-1 0 ${this.width+2} ${this.height}"
        >
          ${this.lines.map((e,t)=>P`
            <line
              key=${t}
              x1=${e}
              y1="0"
              x2=${e}
              y2=${this.isYearLine(e)?12:6}
              stroke=${this.isYearLine(e)?"#222":"#7596A2"}
              stroke-width=${this.isYearLine(e),1}
            ></line>
          `)}
          ${this.yearMarks.map((e,t)=>P`
            <text
              key=${`y${t}`}
              x=${e.position}
              y=${this.height-1}
              fill="#555"
              font-size="13"
              font-weight="500"
            >
              ${e.label}
            </text>
          `)}
        </svg>
      </div>
    `}};s([c({type:Number})],x.prototype,"width",2);s([c({type:Array})],x.prototype,"steps",2);s([g()],x.prototype,"height",2);s([g()],x.prototype,"svgWidth",2);x=s([B("eox-sliderticks")],x);const de={title:"Elements/eox-timecontrol",tags:["autodocs"],component:"eox-timecontrol"},u={args:{for:"eox-map#primary",layer:"AWS_NO2-VISUALISATION",controlProperty:"TIME",controlValues:["2022-12-05","2022-12-12","2022-12-19","2022-12-26","2023-01-16","2023-01-23","2023-01-30","2023-02-06","2023-02-13","2023-02-27","2023-03-06","2023-03-13","2023-03-20","2023-03-27","2023-04-03","2023-04-10","2023-04-17","2023-04-24"],layers:[{type:"Tile",properties:{id:"AWS_NO2-VISUALISATION"},source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_NO2-VISUALISATION",TIME:"2022-12-05"}}},{type:"Tile",properties:{id:"OSM"},source:{type:"OSM"}}],center:[1e6,6e6],zoom:3},render:e=>d`
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
  `},$={args:{...u.args,for:"eox-map#slider",slider:!0},render:e=>d`
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
  `},v={args:{...u.args,for:"eox-map#programmatic-time-selection",slider:!0},render:e=>d`
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
        @click="${()=>{const t=document.getElementById("time").value,r=document.getElementById("programmatic");r.currentStep=t}}"
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
  `},w={args:{...u.args,for:"eox-map#disabled-play",disablePlay:!0},render:e=>d`
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
  `};var I,V,A;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    for: "eox-map#primary",
    layer: "AWS_NO2-VISUALISATION",
    controlProperty: "TIME",
    controlValues: ["2022-12-05", "2022-12-12", "2022-12-19", "2022-12-26", "2023-01-16", "2023-01-23", "2023-01-30", "2023-02-06", "2023-02-13", "2023-02-27", "2023-03-06", "2023-03-13", "2023-03-20", "2023-03-27", "2023-04-03", "2023-04-10", "2023-04-17", "2023-04-24"],
    // map
    layers: [{
      type: "Tile",
      properties: {
        id: "AWS_NO2-VISUALISATION"
      },
      source: {
        type: "TileWMS",
        url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
        params: {
          LAYERS: "AWS_NO2-VISUALISATION",
          TIME: "2022-12-05"
        }
      }
    }, {
      type: "Tile",
      properties: {
        id: "OSM"
      },
      source: {
        type: "OSM"
      }
    }],
    center: [1000000, 6000000],
    zoom: 3
  },
  render: args => html\`
    <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      .zoom=\${args.zoom}
      .center=\${args.center}
      .layers=\${args.layers}
    ></eox-map>
    <eox-timecontrol
      .for=\${args.for}
      .layer=\${args.layer}
      .controlProperty=\${args.controlProperty}
      .controlValues=\${args.controlValues}
      .slider=\${args.slider}
    ></eox-timecontrol>
  \`
}`,...(A=(V=u.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var E,L,k;$.parameters={...$.parameters,docs:{...(E=$.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    for: "eox-map#slider",
    slider: true
  },
  render: args => html\`
    <eox-map
      id="slider"
      style="width: 400px; height: 300px;"
      .zoom=\${args.zoom}
      .center=\${args.center}
      .layers=\${args.layers}
    ></eox-map>
    <eox-timecontrol
      .for=\${args.for}
      .layer=\${args.layer}
      .controlProperty=\${args.controlProperty}
      .controlValues=\${args.controlValues}
      .slider=\${args.slider}
    ></eox-timecontrol>
  \`
}`,...(k=(L=$.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var O,C,M;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    for: "eox-map#programmatic-time-selection",
    slider: true
  },
  render: args => html\`
    <eox-map
      id="programmatic-time-selection"
      style="width: 400px; height: 300px;"
      .zoom=\${args.zoom}
      .center=\${args.center}
      .layers=\${args.layers}
    ></eox-map>
    <div>
      <input type="text" id="time" value="2022-12-26" />
      <button
        @click="\${() => {
    const time = document.getElementById("time").value;
    const timeControl = document.getElementById("programmatic");
    timeControl.currentStep = time;
  }}"
      >
        Go
      </button>
    </div>
    <eox-timecontrol
      id="programmatic"
      .for=\${args.for}
      .layer=\${args.layer}
      .controlProperty=\${args.controlProperty}
      .controlValues=\${args.controlValues}
      .slider=\${args.slider}
    ></eox-timecontrol>
  \`
}`,...(M=(C=v.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var z,W,T;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    for: "eox-map#disabled-play",
    disablePlay: true
  },
  render: args => html\`
    <eox-map
      id="disabled-play"
      style="width: 400px; height: 300px;"
      .zoom=\${args.zoom}
      .center=\${args.center}
      .layers=\${args.layers}
    ></eox-map>
    <eox-timecontrol
      .for=\${args.for}
      .layer=\${args.layer}
      .controlProperty=\${args.controlProperty}
      .controlValues=\${args.controlValues}
      .slider=\${args.slider}
      .disablePlay=\${args.disablePlay}
    ></eox-timecontrol>
  \`
}`,...(T=(W=w.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};const ye=["Primary","Slider","ProgrammaticTimeSelection","DisabledPlayButton"];export{w as DisabledPlayButton,u as Primary,v as ProgrammaticTimeSelection,$ as Slider,ye as __namedExportsOrder,de as default};
