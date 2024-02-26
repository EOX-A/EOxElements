import{s as Y,x as d,T as H,b as _}from"./lit-element-uhisBW42.js";import{G as S}from"./main--0l0WmPb.js";import{r as g,n as p,t as B}from"./state-729Pchtv.js";import"./toolcool-range-slider.min-8Vg52R7B.js";import{b as Z}from"./button--cdmXcoW.js";import{d as P}from"./dayjs.min-Sgxub5UU.js";import{c as N,g as U}from"./_commonjsHelpers-4gQjN7DL.js";import"./index-EySAwWXj.js";const F=`
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
`;var R={exports:{}};(function(e,t){(function(i,r){e.exports=r()})(N,function(){return function(i,r,n){r.prototype.dayOfYear=function(o){var l=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return o==null?l:this.add(o-l,"day")}}})})(R);var X=R.exports;const J=U(X);var G={exports:{}};(function(e,t){(function(i,r){e.exports=r()})(N,function(){var i="day";return function(r,n,o){var l=function(m){return m.add(4-m.isoWeekday(),i)},c=n.prototype;c.isoWeekYear=function(){return l(this).year()},c.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),i);var h,f,y,b,j=l(this),D=(h=this.isoWeekYear(),f=this.$u,y=(f?o.utc:o)().year(h).startOf("year"),b=4-y.isoWeekday(),y.isoWeekday()>4&&(b+=7),y.add(b,i));return j.diff(D,"week")+1},c.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var q=c.startOf;c.startOf=function(m,h){var f=this.$utils(),y=!!f.u(h)||h;return f.p(m)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):q.bind(this)(m,h)}}})})(G);var K=G.exports;const ee=U(K);var te=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,a=(e,t,i,r)=>{for(var n=r>1?void 0:r?ie(t,i):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(r?l(t,i,n):l(n))||n);return r&&n&&te(t,i,n),n};P.extend(J);P.extend(ee);let s=class extends Y{constructor(){super(...arguments),this.animationValues=[],this._newTimeIndex=0}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(e){e?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=e,this.requestUpdate()}setConfig(e){this.layer=e.layer??this.layer,this.animationProperty=e.animationProperty??this.animationProperty,this.animationValues=e.animationValues??this.animationValues,this.requestUpdate(),this._updateStep(0)}get currentTime(){return this.animationValues[this._newTimeIndex]}set currentTime(e){const t=this.animationValues.findIndex(i=>i===e);t>-1?this._newTimeIndex=t:console.error(`Unable to find time "${e}" in available times!`)}_updateStep(e=1){this._newTimeIndex=this._newTimeIndex+e,this._newTimeIndex>this.animationValues.length-1&&(this._newTimeIndex=0),this._newTimeIndex<0&&(this._newTimeIndex=this.animationValues.length-1),this._animationSource.updateParams({[this.animationProperty]:this.animationValues[this._newTimeIndex]}),this.requestUpdate(),this.dispatchEvent(new CustomEvent("timechange",{detail:{currentTime:this.currentTime}}))}getFlatLayersArray(e){const t=[];t.push(...e);let i=t.filter(r=>r instanceof S);for(;i.length;){const r=[];for(let n=0,o=i.length;n<o;n++){const l=i[n].getLayers().getArray();t.push(...l),r.push(...l.filter(c=>c instanceof S))}i=r}return t}render(){const e=document.querySelector(this.for),t=e.map||e;return t.once("loadend",()=>{if(!this._originalParams){const r=this.getFlatLayersArray(t.getLayers().getArray()).find(n=>n.get("id")===this.layer);this._animationSource=r.getSource(),this._originalParams=this._animationSource.getParams()}}),d`
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
                    data="${this.animationValues}"
                    part="slider"
                    value="${this.animationValues[this._newTimeIndex]}"
                    style="display: inline-block;"
                    @change="${i=>this._updateStep(this.animationValues.findIndex(r=>r===i.detail.value)-this._newTimeIndex)}"
                  ></tc-range-slider>

                  <eox-sliderticks
                    width="300"
                    .times="${this.animationValues}"
                  ></eox-sliderticks>
                </div>
              `:""}

          <span part="current"
            >${this.animationValues[this._newTimeIndex]}</span
          >
        </div>
      </main>
    `}};a([p({attribute:"animation-property"})],s.prototype,"animationProperty",2);a([p({attribute:"animation-values",type:Array})],s.prototype,"animationValues",2);a([p()],s.prototype,"for",2);a([p()],s.prototype,"layer",2);a([p({type:Boolean})],s.prototype,"slider",2);a([p()],s.prototype,"_originalParams",2);a([p({attribute:"disable-play",type:Boolean})],s.prototype,"disablePlay",2);a([p({attribute:"current-time"})],s.prototype,"currentTime",1);a([g()],s.prototype,"_animationInterval",2);a([g()],s.prototype,"_animationSource",2);a([g()],s.prototype,"_isAnimationPlaying",2);a([g()],s.prototype,"_newTimeIndex",2);a([p({type:Boolean})],s.prototype,"unstyled",2);s=a([B("eox-timecontrol")],s);let x=class extends Y{constructor(){super(...arguments),this.width=0,this.times=[],this.height=6,this.svgWidth=0}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.handleResize.bind(this)),super.disconnectedCallback()}firstUpdated(){this.handleResize()}handleResize(){this.svgWidth=this.shadowRoot.querySelector("svg").clientWidth,this.height=this.shadowRoot.querySelector("svg").clientHeight}get lines(){const e=this.numLines>this.width/2?this.width/2:this.numLines,t=this.width/(e-1);return Array.from({length:this.numLines},(i,r)=>r*t)}get numLines(){return this.times?this.times.length:0}get yearMarks(){const e=[];let t=null;return this.lines.forEach((i,r)=>{const o=P(this.times[r]).year();(r===0||o!==t)&&e.push({label:o,position:i}),t=o}),e.filter((i,r)=>{const n=e[r+1];return!(n&&n.position-i.position<25)})}isYearLine(e){return this.yearMarks.some(i=>Math.abs(i.position-e)<1)}render(){return d`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; height: 30px;"
          viewBox="-1 0 ${this.width+2} ${this.height}"
        >
          ${this.lines.map((e,t)=>_`
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
          ${this.yearMarks.map((e,t)=>_`
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
    `}};a([p({type:Number})],x.prototype,"width",2);a([p({type:Array})],x.prototype,"times",2);a([g()],x.prototype,"height",2);a([g()],x.prototype,"svgWidth",2);x=a([B("eox-sliderticks")],x);const de={title:"Elements/eox-timecontrol",tags:["autodocs"],component:"eox-timecontrol"},u={args:{for:"eox-map#primary",layer:"AWS_NO2-VISUALISATION",animationProperty:"TIME",animationValues:["2022-12-05","2022-12-12","2022-12-19","2022-12-26","2023-01-16","2023-01-23","2023-01-30","2023-02-06","2023-02-13","2023-02-27","2023-03-06","2023-03-13","2023-03-20","2023-03-27","2023-04-03","2023-04-10","2023-04-17","2023-04-24"],layers:[{type:"Tile",properties:{id:"AWS_NO2-VISUALISATION"},source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_NO2-VISUALISATION",TIME:"2022-12-05"}}},{type:"Tile",properties:{id:"OSM"},source:{type:"OSM"}}],center:[1e6,6e6],zoom:3},render:e=>d`
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
      .animationProperty=${e.animationProperty}
      .animationValues=${e.animationValues}
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
      .animationProperty=${e.animationProperty}
      .animationValues=${e.animationValues}
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
        @click="${()=>{const t=document.getElementById("time").value,i=document.getElementById("programmatic");i.currentTime=t}}"
      >
        Go
      </button>
    </div>
    <eox-timecontrol
      id="programmatic"
      .for=${e.for}
      .layer=${e.layer}
      .animationProperty=${e.animationProperty}
      .animationValues=${e.animationValues}
      .slider=${e.slider}
    ></eox-timecontrol>
  `},w={args:{...u.args,for:"eox-map#disabled-controls",slider:!0,disablePlay:!0},render:e=>d`
    <eox-map
      id="disabled-controls"
      style="width: 400px; height: 300px;"
      .zoom=${e.zoom}
      .center=${e.center}
      .layers=${e.layers}
    ></eox-map>
    <eox-timecontrol
      .for=${e.for}
      .layer=${e.layer}
      .animationProperty=${e.animationProperty}
      .animationValues=${e.animationValues}
      .slider=${e.slider}
      .disablePlay=${e.disablePlay}
    ></eox-timecontrol>
  `};var I,V,T;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    for: "eox-map#primary",
    layer: "AWS_NO2-VISUALISATION",
    animationProperty: "TIME",
    animationValues: ["2022-12-05", "2022-12-12", "2022-12-19", "2022-12-26", "2023-01-16", "2023-01-23", "2023-01-30", "2023-02-06", "2023-02-13", "2023-02-27", "2023-03-06", "2023-03-13", "2023-03-20", "2023-03-27", "2023-04-03", "2023-04-10", "2023-04-17", "2023-04-24"],
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
      .animationProperty=\${args.animationProperty}
      .animationValues=\${args.animationValues}
      .slider=\${args.slider}
    ></eox-timecontrol>
  \`
}`,...(T=(V=u.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var A,E,k;$.parameters={...$.parameters,docs:{...(A=$.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
      .animationProperty=\${args.animationProperty}
      .animationValues=\${args.animationValues}
      .slider=\${args.slider}
    ></eox-timecontrol>
  \`
}`,...(k=(E=$.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var C,L,O;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    timeControl.currentTime = time;
  }}"
      >
        Go
      </button>
    </div>
    <eox-timecontrol
      id="programmatic"
      .for=\${args.for}
      .layer=\${args.layer}
      .animationProperty=\${args.animationProperty}
      .animationValues=\${args.animationValues}
      .slider=\${args.slider}
    ></eox-timecontrol>
  \`
}`,...(O=(L=v.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var M,z,W;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    for: "eox-map#disabled-controls",
    slider: true,
    disablePlay: true
  },
  render: args => html\`
    <eox-map
      id="disabled-controls"
      style="width: 400px; height: 300px;"
      .zoom=\${args.zoom}
      .center=\${args.center}
      .layers=\${args.layers}
    ></eox-map>
    <eox-timecontrol
      .for=\${args.for}
      .layer=\${args.layer}
      .animationProperty=\${args.animationProperty}
      .animationValues=\${args.animationValues}
      .slider=\${args.slider}
      .disablePlay=\${args.disablePlay}
    ></eox-timecontrol>
  \`
}`,...(W=(z=w.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};const ce=["Primary","Slider","ProgrammaticTimeSelection","DisabledControlButtons"];export{w as DisabledControlButtons,u as Primary,v as ProgrammaticTimeSelection,$ as Slider,ce as __namedExportsOrder,de as default};
