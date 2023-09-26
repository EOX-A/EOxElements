import{s as D,x as u,A as w}from"./lit-element-c29cbb6b.js";import"./main-b6236e63.js";import{t as s,n as p,e as M}from"./query-assigned-elements-bec7f9a4.js";import{b as v}from"./button-d0379260.js";import"./templateElement-8d2f8dc8.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-606e2b24.js";import"../sb-preview/runtime.js";const V=`
:host {
  display: block;
}
`,b=`
* {
  font-family: Roboto, sans-serif;
}

${v}

button.discard {
  background: var(--error-color);
}

button.polygon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-polygon-plus%3C/title%3E%3Cpath d='M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z' /%3E%3C/svg%3E");
}
`;var E=Object.defineProperty,F=Object.getOwnPropertyDescriptor,r=(t,a,l,i)=>{for(var o=i>1?void 0:i?F(a,l):a,y=t.length-1,c;y>=0;y--)(c=t[y])&&(o=(i?c(a,l,o):c(o))||o);return i&&o&&E(a,l,o),o};let e=class extends D{constructor(){super(...arguments),this._drawnFeatures=[]}_startDrawing(){this._eoxMap.addDraw(this._layerId,{id:"drawInteraction",type:"Polygon"}),this._draw=this._eoxMap.interactions.drawInteraction,this._modify=this._eoxMap.interactions.drawInteraction_modify,this._draw.on("drawend",t=>this._onDrawEnd(t)),this._modify.on("modifyend",t=>this._onModifyEnd(t)),this._currentlyDrawing=!0,this.requestUpdate()}_discardDrawing(){this._drawnFeatures=[],this._eoxMap.removeInteraction("drawInteraction"),this._drawLayer.getSource().clear(),this._currentlyDrawing=!1,this.requestUpdate()}_onDrawEnd(t){console.log(t),this._emitDrawnFeatures(),this._eoxMap.removeInteraction("drawInteraction"),this._currentlyDrawing=!1,this.requestUpdate()}_onModifyEnd(t){console.log(t),this._emitDrawnFeatures()}_emitDrawnFeatures(){setTimeout(()=>{this._drawnFeatures=this._drawLayer.getSource().getFeatures(),this.requestUpdate();const t=new CustomEvent("drawupdate",{detail:this._drawnFeatures});this.dispatchEvent(t)},0)}render(){const t=document.querySelector(this.for);return this._eoxMap=t,this._olMap=t.map,this._layerId=this.layer,this._drawLayer=this._olMap.getLayers().getArray().find(a=>a.get("id")===this._layerId),this.requestUpdate(),u`
      <style>
        ${V}
        ${!this.unstyled&&b}
      </style>
      <div>
        <slot></slot>
        <button
          data-cy="drawBtn"
          class="icon-text polygon"
          disabled="${!this.multipleFeatures&&this._drawnFeatures.length||this._currentlyDrawing||w}"
          @click="${()=>this._startDrawing()}"
        >
          ${this._currentlyDrawing?"drawing":"draw"}
        </button>
        <button
          data-cy="discardBtn"
          class="discard"
          disabled="${!this._drawnFeatures.length&&!this._currentlyDrawing||w}"
          @click="${()=>this._discardDrawing()}"
        >
          discard
        </button>
      </div>
    `}};r([s()],e.prototype,"_layerId",2);r([s()],e.prototype,"_eoxMap",2);r([s()],e.prototype,"_olMap",2);r([s()],e.prototype,"_drawLayer",2);r([s()],e.prototype,"_drawnFeatures",2);r([s()],e.prototype,"_currentlyDrawing",2);r([p({type:Boolean})],e.prototype,"multipleFeatures",2);r([p()],e.prototype,"for",2);r([p()],e.prototype,"layer",2);r([p({type:Boolean})],e.prototype,"unstyled",2);e=r([M("eox-drawtools")],e);const q={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},n={render:()=>u` <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      layers='[
    {"type": "Vector","id": "draw","source": {"type": "Vector"}},
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
    ></eox-map>
    <eox-drawtools for="eox-map#primary" layer="draw"></eox-drawtools>`},d={render:()=>u` <eox-map
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
    ></eox-drawtools>`};var m,h,_;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\` <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      layers='[
    {"type": "Vector","id": "draw","source": {"type": "Vector"}},
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
    ></eox-map>
    <eox-drawtools for="eox-map#primary" layer="draw"></eox-drawtools>\`
}`,...(_=(h=n.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var x,g,f;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\` <eox-map
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
    ></eox-drawtools>\`
}`,...(f=(g=d.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const T=["Primary","MultiPolygon"];export{d as MultiPolygon,n as Primary,T as __namedExportsOrder,q as default};
//# sourceMappingURL=drawtools.stories-adbd06dc.js.map
