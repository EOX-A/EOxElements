import{s as g,x as c}from"./lit-element-c29cbb6b.js";import"./main-fdcc7aea.js";import{t as m,n as r,e as x}from"./query-assigned-elements-bec7f9a4.js";import"./toolcool-range-slider.min-b4f5b26b.js";import{b as _}from"./button-60c82d2c.js";import"./templateElement-8d2f8dc8.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8187346b.js";import"../sb-preview/runtime.js";const v=`
:host {
  display: block;
}
`,f=`
* {
  font-family: Roboto, sans-serif;
}

${_}

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
`;var w=Object.defineProperty,S=Object.getOwnPropertyDescriptor,n=(t,a,s,o)=>{for(var i=o>1?void 0:o?S(a,s):a,l=t.length-1,u;l>=0;l--)(u=t[l])&&(i=(o?u(a,s,i):u(i))||i);return o&&i&&w(a,s,i),i};let e=class extends g{constructor(){super(...arguments),this.animationValues=[],this._newTimeIndex=0}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(t){t?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=t,this.requestUpdate()}setConfig(t){this.layer=t.layer??this.layer,this.animationProperty=t.animationProperty??this.animationProperty,this.animationValues=t.animationValues??this.animationValues,this.requestUpdate(),this._updateStep(0)}_updateStep(t=1){this._newTimeIndex=this._newTimeIndex+t,this._newTimeIndex>this.animationValues.length-1&&(this._newTimeIndex=0),this._newTimeIndex<0&&(this._newTimeIndex=this.animationValues.length-1),this._animationSource.setTileUrlFunction((a,s,o)=>{const i=this._originalTileUrlFunction(a,s,o);if(this.urlFunction)return this.urlFunction(i);const l=new URLSearchParams(i.substring(i.indexOf("?")));return l.set(this.animationProperty,this.animationValues[this._newTimeIndex]),i.substring(0,i.indexOf("?")+1)+l.toString()}),this._animationSource.setKey(new Date),this._animationSource.changed(),this.requestUpdate()}render(){const t=document.querySelector(this.for),a=t.map||t;return a.once("loadend",()=>{if(!this._originalTileUrlFunction){const s=a.getLayers().getArray().find(o=>o.get("id")===this.layer);this._animationSource=s.getSource(),this._originalTileUrlFunction=this._animationSource.getTileUrlFunction()}}),c`
      <style>
        ${v}
        ${!this.unstyled&&f}
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

          ${this.slider?c`
                <tc-range-slider
                  data="${this.animationValues}"
                  part="slider"
                  value="${this.animationValues[this._newTimeIndex]}"
                  style="display: inline-block;"
                  @change="${s=>this._updateStep(this.animationValues.findIndex(o=>o===s.detail.value)-this._newTimeIndex)}"
                ></tc-range-slider>
              `:""}

          <span part="current"
            >${this.animationValues[this._newTimeIndex]}</span
          >
        </div>
      </main>
    `}};n([r({attribute:"animation-property"})],e.prototype,"animationProperty",2);n([r({attribute:"animation-values",type:Array})],e.prototype,"animationValues",2);n([r()],e.prototype,"for",2);n([r()],e.prototype,"layer",2);n([r({type:Boolean})],e.prototype,"slider",2);n([r()],e.prototype,"urlFunction",2);n([r()],e.prototype,"_originalTileUrlFunction",2);n([m()],e.prototype,"_animationInterval",2);n([m()],e.prototype,"_animationSource",2);n([m()],e.prototype,"_isAnimationPlaying",2);n([m()],e.prototype,"_newTimeIndex",2);n([r({type:Boolean})],e.prototype,"unstyled",2);e=n([x("eox-timecontrol")],e);const L={title:"Elements/eox-timecontrol",tags:["autodocs"],component:"eox-timecontrol",render:()=>c`
    <eox-map
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
      for="eox-map"
      layer="AWS_NO2-VISUALISATION"
      animation-property="TIME"
      animation-values='[
    "2023-01-16",
    "2023-01-23",
    "2023-01-30",
    "2023-02-06",
    "2023-02-13",
    "2023-02-27",
    "2023-03-06",
    "2023-03-13",
    "2023-03-20",
    "2023-03-27",
    "2023-04-03",
    "2023-04-10",
    "2023-04-17",
    "2023-04-24"
  ]'
    ></eox-timecontrol>
  `},p={args:{}};var h,d,y;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(y=(d=p.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const U=["Primary"];export{p as Primary,U as __namedExportsOrder,L as default};
//# sourceMappingURL=timecontrol.stories-d8c9a056.js.map
