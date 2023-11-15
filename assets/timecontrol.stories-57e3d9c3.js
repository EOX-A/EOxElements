import{s as V,x as g,b as _}from"./lit-element-6d538b77.js";import"./main-a7642125.js";import{r as c,n as p,t as E}from"./state-31e770db.js";import{d as S}from"./dayjs.min-c23fb88c.js";import{b as U}from"./button-f0c29825.js";import{c as k,g as L}from"./_commonjsHelpers-de833af9.js";import"./iframe-53aae24b.js";import"../sb-preview/runtime.js";const Y=`
:host {
  display: block;
}
`,R=`
* {
  font-family: Roboto, sans-serif;
}

${U}

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
`;var P={exports:{}};(function(t,r){(function(i,e){t.exports=e()})(k,function(){return function(i,e,n){e.prototype.dayOfYear=function(a){var h=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return a==null?h:this.add(a-h,"day")}}})})(P);var z=P.exports;const F=L(z);var W={exports:{}};(function(t,r){(function(i,e){t.exports=e()})(k,function(){var i="day";return function(e,n,a){var h=function(l){return l.add(4-l.isoWeekday(),i)},y=n.prototype;y.isoWeekYear=function(){return h(this).year()},y.isoWeek=function(l){if(!this.$utils().u(l))return this.add(7*(l-this.isoWeek()),i);var m,x,d,w,M=h(this),N=(m=this.isoWeekYear(),x=this.$u,d=(x?a.utc:a)().year(m).startOf("year"),w=4-d.isoWeekday(),d.isoWeekday()>4&&(w+=7),d.add(w,i));return M.diff(N,"week")+1},y.isoWeekday=function(l){return this.$utils().u(l)?this.day()||7:this.day(this.day()%7?l:l-7)};var C=y.startOf;y.startOf=function(l,m){var x=this.$utils(),d=!!x.u(m)||m;return x.p(l)==="isoweek"?d?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):C.bind(this)(l,m)}}})})(W);var B=W.exports;const q=L(B);var j=Object.defineProperty,H=Object.getOwnPropertyDescriptor,s=(t,r,i,e)=>{for(var n=e>1?void 0:e?H(r,i):r,a=t.length-1,h;a>=0;a--)(h=t[a])&&(n=(e?h(r,i,n):h(n))||n);return e&&n&&j(r,i,n),n};S.extend(F);S.extend(q);let o=class extends V{constructor(){super(...arguments),this.animationValues=[],this._newTimeIndex=0}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(t){t?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=t,this.requestUpdate()}setConfig(t){this.layer=t.layer??this.layer,this.animationProperty=t.animationProperty??this.animationProperty,this.animationValues=t.animationValues??this.animationValues,this.requestUpdate(),this._updateStep(0)}_updateStep(t=1){this._newTimeIndex=this._newTimeIndex+t,this._newTimeIndex>this.animationValues.length-1&&(this._newTimeIndex=0),this._newTimeIndex<0&&(this._newTimeIndex=this.animationValues.length-1),this._animationSource.setTileUrlFunction((r,i,e)=>{const n=this._originalTileUrlFunction(r,i,e);if(this.urlFunction)return this.urlFunction(n);const a=new URLSearchParams(n.substring(n.indexOf("?")));return a.set(this.animationProperty,this.animationValues[this._newTimeIndex]),n.substring(0,n.indexOf("?")+1)+a.toString()}),this._animationSource.setKey(new Date),this._animationSource.changed(),this.requestUpdate()}render(){const t=document.querySelector(this.for),r=t.map||t;return r.once("loadend",()=>{if(!this._originalTileUrlFunction){const i=r.getLayers().getArray().find(e=>e.get("id")===this.layer);this._animationSource=i.getSource(),this._originalTileUrlFunction=this._animationSource.getTileUrlFunction()}}),g`
      <style>
        ${Y}
        ${!this.unstyled&&R}
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

          ${this.slider?g`
                <div class="slider-col">
                  <tc-range-slider
                    data="${this.animationValues}"
                    part="slider"
                    value="${this.animationValues[this._newTimeIndex]}"
                    style="display: inline-block;"
                    @change="${i=>this._updateStep(this.animationValues.findIndex(e=>e===i.detail.value)-this._newTimeIndex)}"
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
    `}};s([p({attribute:"animation-property"})],o.prototype,"animationProperty",2);s([p({attribute:"animation-values",type:Array})],o.prototype,"animationValues",2);s([p()],o.prototype,"for",2);s([p()],o.prototype,"layer",2);s([p({type:Boolean})],o.prototype,"slider",2);s([p()],o.prototype,"urlFunction",2);s([p()],o.prototype,"_originalTileUrlFunction",2);s([c()],o.prototype,"_animationInterval",2);s([c()],o.prototype,"_animationSource",2);s([c()],o.prototype,"_isAnimationPlaying",2);s([c()],o.prototype,"_newTimeIndex",2);s([p({type:Boolean})],o.prototype,"unstyled",2);o=s([E("eox-timecontrol")],o);let u=class extends V{constructor(){super(...arguments),this.width=0,this.times=[],this.height=6,this.svgWidth=0}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.handleResize.bind(this)),super.disconnectedCallback()}firstUpdated(){this.handleResize()}handleResize(){this.svgWidth=this.shadowRoot.querySelector("svg").clientWidth,this.height=this.shadowRoot.querySelector("svg").clientHeight}get lines(){const t=this.numLines>this.width/2?this.width/2:this.numLines,r=this.width/(t-1);return Array.from({length:this.numLines},(i,e)=>e*r)}get numLines(){return this.times?this.times.length:0}get yearMarks(){const t=[];let r=null;return this.lines.forEach((i,e)=>{const a=S(this.times[e]).year();(e===0||a!==r)&&t.push({label:a,position:i}),r=a}),t.filter((i,e)=>{const n=t[e+1];return!(n&&n.position-i.position<25)})}isYearLine(t){return this.yearMarks.some(i=>Math.abs(i.position-t)<1)}render(){return g`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; height: 30px;"
          viewBox="-1 0 ${this.width+2} ${this.height}"
        >
          ${this.lines.map((t,r)=>_`
            <line
              key=${r}
              x1=${t}
              y1="0"
              x2=${t}
              y2=${this.isYearLine(t)?12:6}
              stroke=${this.isYearLine(t)?"#222":"#7596A2"}
              stroke-width=${this.isYearLine(t),1}
            ></line>
          `)}
          ${this.yearMarks.map((t,r)=>_`
            <text
              key=${`y${r}`}
              x=${t.position}
              y=${this.height-1}
              fill="#555"
              font-size="13"
              font-weight="500"
            >
              ${t.label}
            </text>
          `)}
        </svg>
      </div>
    `}};s([p({type:Number})],u.prototype,"width",2);s([p({type:Array})],u.prototype,"times",2);s([c()],u.prototype,"height",2);s([c()],u.prototype,"svgWidth",2);u=s([E("eox-sliderticks")],u);const et={title:"Elements/eox-timecontrol",tags:["autodocs"],component:"eox-timecontrol"},f={args:{for:"eox-map#primary",layer:"AWS_NO2-VISUALISATION",animationProperty:"TIME",animationValues:["2022-12-05","2022-12-12","2022-12-19","2022-12-26","2023-01-16","2023-01-23","2023-01-30","2023-02-06","2023-02-13","2023-02-27","2023-03-06","2023-03-13","2023-03-20","2023-03-27","2023-04-03","2023-04-10","2023-04-17","2023-04-24"]},render:t=>g`
    <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      zoom="3"
      center="[1000000, 6000000]"
      layers='[
    {
      "type": "Tile",
      "properties": {
        "id":"AWS_NO2-VISUALISATION"
      },
      "source": {
        "type": "TileWMS",
        "url": "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
        "params": {
          "LAYERS": "AWS_NO2-VISUALISATION"
        }
      }
    },
    {
      "type":"Tile",
      "source":{
        "type":"OSM"
      }
    }
  ]'
    ></eox-map>
    <eox-timecontrol
      .for=${t.for}
      .layer=${t.layer}
      .animationProperty=${t.animationProperty}
      .animationValues=${t.animationValues}
      .slider=${t.slider}
    ></eox-timecontrol>
  `},v={args:{...f.args,for:"eox-map#slider",slider:!0},render:t=>g`
    <eox-map
      id="slider"
      style="width: 400px; height: 300px;"
      zoom="3"
      center="[1000000, 6000000]"
      layers='[
{
  "type": "Tile",
  "properties": {
    "id":"AWS_NO2-VISUALISATION"
  },
  "source": {
    "type": "TileWMS",
    "url": "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
    "params": {
      "LAYERS": "AWS_NO2-VISUALISATION"
    }
  }
},
{
  "type":"Tile",
  "source":{
    "type":"OSM"
  }
}
]'
    ></eox-map>
    <eox-timecontrol
      .for=${t.for}
      .layer=${t.layer}
      .animationProperty=${t.animationProperty}
      .animationValues=${t.animationValues}
      .slider=${t.slider}
    ></eox-timecontrol>
  `};var $,A,I;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    for: "eox-map#primary",
    layer: "AWS_NO2-VISUALISATION",
    animationProperty: "TIME",
    animationValues: ["2022-12-05", "2022-12-12", "2022-12-19", "2022-12-26", "2023-01-16", "2023-01-23", "2023-01-30", "2023-02-06", "2023-02-13", "2023-02-27", "2023-03-06", "2023-03-13", "2023-03-20", "2023-03-27", "2023-04-03", "2023-04-10", "2023-04-17", "2023-04-24"]
  },
  render: args => html\`
    <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      zoom="3"
      center="[1000000, 6000000]"
      layers='[
    {
      "type": "Tile",
      "properties": {
        "id":"AWS_NO2-VISUALISATION"
      },
      "source": {
        "type": "TileWMS",
        "url": "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
        "params": {
          "LAYERS": "AWS_NO2-VISUALISATION"
        }
      }
    },
    {
      "type":"Tile",
      "source":{
        "type":"OSM"
      }
    }
  ]'
    ></eox-map>
    <eox-timecontrol
      .for=\${args.for}
      .layer=\${args.layer}
      .animationProperty=\${args.animationProperty}
      .animationValues=\${args.animationValues}
      .slider=\${args.slider}
    ></eox-timecontrol>
  \`
}`,...(I=(A=f.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var T,O,b;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    for: "eox-map#slider",
    slider: true
  },
  render: args => html\`
    <eox-map
      id="slider"
      style="width: 400px; height: 300px;"
      zoom="3"
      center="[1000000, 6000000]"
      layers='[
{
  "type": "Tile",
  "properties": {
    "id":"AWS_NO2-VISUALISATION"
  },
  "source": {
    "type": "TileWMS",
    "url": "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
    "params": {
      "LAYERS": "AWS_NO2-VISUALISATION"
    }
  }
},
{
  "type":"Tile",
  "source":{
    "type":"OSM"
  }
}
]'
    ></eox-map>
    <eox-timecontrol
      .for=\${args.for}
      .layer=\${args.layer}
      .animationProperty=\${args.animationProperty}
      .animationValues=\${args.animationValues}
      .slider=\${args.slider}
    ></eox-timecontrol>
  \`
}`,...(b=(O=v.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};const it=["Primary","Slider"];export{f as Primary,v as Slider,it as __namedExportsOrder,et as default};
//# sourceMappingURL=timecontrol.stories-57e3d9c3.js.map
