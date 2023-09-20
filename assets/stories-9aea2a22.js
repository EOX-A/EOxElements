import{s as u,x as y,A as c}from"./lit-element-c29cbb6b.js";import"./main-a1926f63.js";import{t as s,n,e as w}from"./query-assigned-elements-bec7f9a4.js";import{b as h}from"./button-d0379260.js";import"./templateElement-8d2f8dc8.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-86a8b0bd.js";import"../sb-preview/runtime.js";const _=`
:host {
  display: block;
}
`,m=`
* {
  font-family: Roboto, sans-serif;
}

${h}

button.discard {
  background: var(--error-color);
}

button.polygon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-polygon-plus%3C/title%3E%3Cpath d='M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z' /%3E%3C/svg%3E");
}
`;var g=Object.defineProperty,x=Object.getOwnPropertyDescriptor,r=(t,a,d,i)=>{for(var o=i>1?void 0:i?x(a,d):a,l=t.length-1,p;l>=0;l--)(p=t[l])&&(o=(i?p(a,d,o):p(o))||o);return i&&o&&g(a,d,o),o};let e=class extends u{constructor(){super(...arguments),this._drawnFeatures=[]}_startDrawing(){this._eoxMap.addDraw(this._layerId,{id:"drawInteraction",type:"Polygon"}),this._draw=this._eoxMap.interactions.drawInteraction,this._modify=this._eoxMap.interactions.drawInteraction_modify,this._draw.on("drawend",t=>this._onDrawEnd(t)),this._modify.on("modifyend",t=>this._onModifyEnd(t)),this._currentlyDrawing=!0,this.requestUpdate()}_discardDrawing(){this._drawnFeatures=[],this._eoxMap.removeInteraction("drawInteraction"),this._drawLayer.getSource().clear(),this._currentlyDrawing=!1,this.requestUpdate()}_onDrawEnd(t){console.log(t),this._emitDrawnFeatures(),this._eoxMap.removeInteraction("drawInteraction"),this._currentlyDrawing=!1,this.requestUpdate()}_onModifyEnd(t){console.log(t),this._emitDrawnFeatures()}_emitDrawnFeatures(){setTimeout(()=>{this._drawnFeatures=this._drawLayer.getSource().getFeatures(),this.requestUpdate();const t=new CustomEvent("drawupdate",{detail:this._drawnFeatures});this.dispatchEvent(t)},0)}render(){const t=document.querySelector(this.for);return this._eoxMap=t,this._olMap=t.map,this._layerId=this.layer,this._drawLayer=this._olMap.getLayers().getArray().find(a=>a.get("id")===this._layerId),this.requestUpdate(),y`
      <style>
        ${_}
        ${!this.unstyled&&m}
      </style>
      <div>
        <slot></slot>
        <button
          data-cy="drawBtn"
          class="icon-text polygon"
          disabled="${!this.multipleFeatures&&this._drawnFeatures.length||this._currentlyDrawing||c}"
          @click="${()=>this._startDrawing()}"
        >
          ${this._currentlyDrawing?"drawing":"draw"}
        </button>
        <button
          data-cy="discardBtn"
          class="discard"
          disabled="${!this._drawnFeatures.length&&!this._currentlyDrawing||c}"
          @click="${()=>this._discardDrawing()}"
        >
          discard
        </button>
      </div>
    `}};r([s()],e.prototype,"_layerId",2);r([s()],e.prototype,"_eoxMap",2);r([s()],e.prototype,"_olMap",2);r([s()],e.prototype,"_drawLayer",2);r([s()],e.prototype,"_drawnFeatures",2);r([s()],e.prototype,"_currentlyDrawing",2);r([n({type:Boolean})],e.prototype,"multipleFeatures",2);r([n()],e.prototype,"for",2);r([n()],e.prototype,"layer",2);r([n({type:Boolean})],e.prototype,"unstyled",2);e=r([w("eox-drawtools")],e);const I={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},L={render:()=>y` <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      layers='[
    {"type": "Vector","id": "draw","source": {"type": "Vector"}},
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
    ></eox-map>
    <eox-drawtools for="eox-map#primary" layer="draw"></eox-drawtools>`},H={render:()=>y` <eox-map
      id="multi"
      style="width: 400px; height: 300px;"
      layers='[
      {"type": "Vector","id": "draw","source": {"type": "Vector"}},
      {"type":"Tile","source":{"type":"OSM"}}
    ]'
    ></eox-map>
    <eox-drawtools
      for="eox-map#multi"
      layer="draw"
      multiplefeatures
    ></eox-drawtools>`};export{H as MultiPolygon,L as Primary,I as default};
//# sourceMappingURL=stories-9aea2a22.js.map
