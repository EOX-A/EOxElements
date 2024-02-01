import{s as C,x as h,b as S}from"./lit-element-Qm8PRmVu.js";import"./main-Alx_PdZX.js";import{r as x,n as m,t as L}from"./state-ncEgtE_C.js";import"./toolcool-range-slider.min-8Vg52R7B.js";import{b as F}from"./button-z18YVp5B.js";import{d as _}from"./dayjs.min-Sgxub5UU.js";import{c as W,g as M}from"./_commonjsHelpers-4gQjN7DL.js";import"./index-EySAwWXj.js";const R=`
:host {
  display: block;
}
`,q=`
* {
  font-family: Roboto, sans-serif;
}

${F}

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
`;var z={exports:{}};(function(e,i){(function(t,n){e.exports=n()})(W,function(){return function(t,n,r){n.prototype.dayOfYear=function(a){var p=Math.round((r(this).startOf("day")-r(this).startOf("year"))/864e5)+1;return a==null?p:this.add(a-p,"day")}}})})(z);var j=z.exports;const H=M(j);var U={exports:{}};(function(e,i){(function(t,n){e.exports=n()})(W,function(){var t="day";return function(n,r,a){var p=function(l){return l.add(4-l.isoWeekday(),t)},g=r.prototype;g.isoWeekYear=function(){return p(this).year()},g.isoWeek=function(l){if(!this.$utils().u(l))return this.add(7*(l-this.isoWeek()),t);var c,f,d,w,N=p(this),B=(c=this.isoWeekYear(),f=this.$u,d=(f?a.utc:a)().year(c).startOf("year"),w=4-d.isoWeekday(),d.isoWeekday()>4&&(w+=7),d.add(w,t));return N.diff(B,"week")+1},g.isoWeekday=function(l){return this.$utils().u(l)?this.day()||7:this.day(this.day()%7?l:l-7)};var Y=g.startOf;g.startOf=function(l,c){var f=this.$utils(),d=!!f.u(c)||c;return f.p(l)==="isoweek"?d?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):Y.bind(this)(l,c)}}})})(U);var D=U.exports;const Z=M(D);var G=Object.defineProperty,K=Object.getOwnPropertyDescriptor,o=(e,i,t,n)=>{for(var r=n>1?void 0:n?K(i,t):i,a=e.length-1,p;a>=0;a--)(p=e[a])&&(r=(n?p(i,t,r):p(r))||r);return n&&r&&G(i,t,r),r};_.extend(H);_.extend(Z);let s=class extends C{constructor(){super(...arguments),this.animationValues=[],this._newTimeIndex=0}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(e){e?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=e,this.requestUpdate()}setConfig(e){this.layer=e.layer??this.layer,this.animationProperty=e.animationProperty??this.animationProperty,this.animationValues=e.animationValues??this.animationValues,this.requestUpdate(),this._updateStep(0)}get currentTime(){return this.animationValues[this._newTimeIndex]}set currentTime(e){const i=this.animationValues.findIndex(t=>t===e);i>-1?this._newTimeIndex=i:console.error(`Unable to find time "${e}" in available times!`)}_updateStep(e=1){this._newTimeIndex=this._newTimeIndex+e,this._newTimeIndex>this.animationValues.length-1&&(this._newTimeIndex=0),this._newTimeIndex<0&&(this._newTimeIndex=this.animationValues.length-1),this._animationSource.setTileUrlFunction((i,t,n)=>{const r=this._originalTileUrlFunction(i,t,n);if(this.urlFunction)return this.urlFunction(r);const a=new URLSearchParams(r.substring(r.indexOf("?")));return a.set(this.animationProperty,this.animationValues[this._newTimeIndex]),r.substring(0,r.indexOf("?")+1)+a.toString()}),this._animationSource.setKey(new Date),this._animationSource.changed(),this.requestUpdate()}render(){const e=document.querySelector(this.for),i=e.map||e;return i.once("loadend",()=>{if(!this._originalTileUrlFunction){const t=i.getLayers().getArray().find(n=>n.get("id")===this.layer);this._animationSource=t.getSource(),this._originalTileUrlFunction=this._animationSource.getTileUrlFunction()}}),h`
      <style>
        ${R}
        ${!this.unstyled&&q}
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
          <button
            part="play"
            class="icon-text ${this._isAnimationPlaying?"pause":"play"}"
            @click="${()=>this.playAnimation(!this._isAnimationPlaying)}"
          >
            ${this._isAnimationPlaying?"Pause":"Play"}
          </button>

          ${this.slider?h`
                <div class="slider-col">
                  <tc-range-slider
                    data="${this.animationValues}"
                    part="slider"
                    value="${this.animationValues[this._newTimeIndex]}"
                    style="display: inline-block;"
                    @change="${t=>this._updateStep(this.animationValues.findIndex(n=>n===t.detail.value)-this._newTimeIndex)}"
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
    `}};o([m({attribute:"animation-property"})],s.prototype,"animationProperty",2);o([m({attribute:"animation-values",type:Array})],s.prototype,"animationValues",2);o([m()],s.prototype,"for",2);o([m()],s.prototype,"layer",2);o([m({type:Boolean})],s.prototype,"slider",2);o([m()],s.prototype,"urlFunction",2);o([m()],s.prototype,"_originalTileUrlFunction",2);o([m({attribute:"current-time"})],s.prototype,"currentTime",1);o([x()],s.prototype,"_animationInterval",2);o([x()],s.prototype,"_animationSource",2);o([x()],s.prototype,"_isAnimationPlaying",2);o([x()],s.prototype,"_newTimeIndex",2);o([m({type:Boolean})],s.prototype,"unstyled",2);s=o([L("eox-timecontrol")],s);let y=class extends C{constructor(){super(...arguments),this.width=0,this.times=[],this.height=6,this.svgWidth=0}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.handleResize.bind(this)),super.disconnectedCallback()}firstUpdated(){this.handleResize()}handleResize(){this.svgWidth=this.shadowRoot.querySelector("svg").clientWidth,this.height=this.shadowRoot.querySelector("svg").clientHeight}get lines(){const e=this.numLines>this.width/2?this.width/2:this.numLines,i=this.width/(e-1);return Array.from({length:this.numLines},(t,n)=>n*i)}get numLines(){return this.times?this.times.length:0}get yearMarks(){const e=[];let i=null;return this.lines.forEach((t,n)=>{const a=_(this.times[n]).year();(n===0||a!==i)&&e.push({label:a,position:t}),i=a}),e.filter((t,n)=>{const r=e[n+1];return!(r&&r.position-t.position<25)})}isYearLine(e){return this.yearMarks.some(t=>Math.abs(t.position-e)<1)}render(){return h`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; height: 30px;"
          viewBox="-1 0 ${this.width+2} ${this.height}"
        >
          ${this.lines.map((e,i)=>S`
            <line
              key=${i}
              x1=${e}
              y1="0"
              x2=${e}
              y2=${this.isYearLine(e)?12:6}
              stroke=${this.isYearLine(e)?"#222":"#7596A2"}
              stroke-width=${this.isYearLine(e),1}
            ></line>
          `)}
          ${this.yearMarks.map((e,i)=>S`
            <text
              key=${`y${i}`}
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
    `}};o([m({type:Number})],y.prototype,"width",2);o([m({type:Array})],y.prototype,"times",2);o([x()],y.prototype,"height",2);o([x()],y.prototype,"svgWidth",2);y=o([L("eox-sliderticks")],y);const oe={title:"Elements/eox-timecontrol",tags:["autodocs"],component:"eox-timecontrol"},u={args:{for:"eox-map#primary",layer:"AWS_NO2-VISUALISATION",animationProperty:"TIME",animationValues:["2022-12-05","2022-12-12","2022-12-19","2022-12-26","2023-01-16","2023-01-23","2023-01-30","2023-02-06","2023-02-13","2023-02-27","2023-03-06","2023-03-13","2023-03-20","2023-03-27","2023-04-03","2023-04-10","2023-04-17","2023-04-24"],layers:[{type:"Tile",properties:{id:"AWS_NO2-VISUALISATION"},source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_NO2-VISUALISATION"}}},{type:"Tile",properties:{id:"OSM"},source:{type:"OSM"}}],center:[1e6,6e6],zoom:3},render:e=>h`
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
  `},$={args:{...u.args,for:"eox-map#slider",slider:!0},render:e=>h`
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
  `},v={args:{...u.args,for:"eox-map#programmatic-time-selection",slider:!0},render:e=>h`
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
        @click="${()=>{const i=document.getElementById("time").value,t=document.getElementById("programmatic");t.currentTime=i}}"
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
  `};var b,I,T;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
          LAYERS: "AWS_NO2-VISUALISATION"
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
}`,...(T=(I=u.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var V,A,E;$.parameters={...$.parameters,docs:{...(V=$.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(A=$.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var P,O,k;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(k=(O=v.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const ae=["Primary","Slider","ProgrammaticTimeSelection"];export{u as Primary,v as ProgrammaticTimeSelection,$ as Slider,ae as __namedExportsOrder,oe as default};
