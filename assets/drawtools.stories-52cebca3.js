var y=(e,r,t)=>{if(!r.has(e))throw TypeError("Cannot "+t)};var o=(e,r,t)=>(y(e,r,"read from private field"),t?t.call(e):r.get(e)),u=(e,r,t)=>{if(r.has(e))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(e):r.set(e,t)},p=(e,r,t,s)=>(y(e,r,"write to private field"),s?s.call(e,t):r.set(e,t),t);import{s as E,x as c,A as w}from"./lit-element-c29cbb6b.js";import"./main-84afb516.js";import{b as V}from"./button-c70cd850.js";import"./query-assigned-elements-bec7f9a4.js";import"./templateElement-8d2f8dc8.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-9b725aee.js";import"../sb-preview/runtime.js";const F=`
:host {
  display: block;
}
`,v=`
* {
  font-family: Roboto, sans-serif;
}

${V}

button.discard {
  background: var(--error-color);
}

button.polygon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-polygon-plus%3C/title%3E%3Cpath d='M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z' /%3E%3C/svg%3E");
}
`;var a,n;class L extends E{constructor(){super();u(this,a,void 0);u(this,n,void 0);this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.layer="draw",this.modify=null,this.multipleFeatures=!1,this.unstyled=!1}static get properties(){return{for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},layer:{type:String},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},unstyled:{type:Boolean}}}startDrawing(){var t,s;o(this,a).addDraw(this.layer,{id:"drawInteraction",type:"Polygon",stopClick:!0}),this.draw=o(this,a).interactions.drawInteraction,this.modify=o(this,a).interactions.drawInteractionmodify,(t=this.draw)==null||t.on("drawend",i=>this.onDrawEnd(i)),(s=this.modify)==null||s.on("modifyend",i=>this.onModifyEnd(i)),this.currentlyDrawing=!0,this.requestUpdate()}discardDrawing(){this.drawnFeatures=[],o(this,a).removeInteraction("drawInteraction"),this.drawLayer.getSource().clear(),this.currentlyDrawing=!1,this.requestUpdate()}onDrawEnd(t){console.log(t.target),this.emitDrawnFeatures(),o(this,a).removeInteraction("drawInteraction"),this.currentlyDrawing=!1,this.requestUpdate()}onModifyEnd(t){console.log(t),this.emitDrawnFeatures()}emitDrawnFeatures(){setTimeout(()=>{this.drawnFeatures=this.drawLayer.getSource().getFeatures(),this.requestUpdate();const t=new CustomEvent("drawupdate",{detail:this.drawnFeatures});this.dispatchEvent(t)},0)}render(){var s,i;const t=document.querySelector(this.for);return p(this,a,t),p(this,n,o(this,a).map),this.drawLayer=o(this,n).getLayers().getArray().find(D=>D.get("id")===this.layer),this.requestUpdate(),c`
      <style>
        ${F}
        ${!this.unstyled&&v}
      </style>
      <div>
        <slot></slot>
        <button
          data-cy="drawBtn"
          class="icon-text polygon"
          disabled="${!this.multipleFeatures&&((s=this.drawnFeatures)==null?void 0:s.length)>0||this.currentlyDrawing||w}"
          @click="${()=>this.startDrawing()}"
        >
          ${this.currentlyDrawing?"drawing":"draw"}
        </button>
        <button
          data-cy="discardBtn"
          class="discard"
          disabled="${!((i=this.drawnFeatures)!=null&&i.length)&&!this.currentlyDrawing||w}"
          @click="${()=>this.discardDrawing()}"
        >
          discard
        </button>
      </div>
    `}}a=new WeakMap,n=new WeakMap;customElements.define("eox-drawtools",L);const T={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},d={render:()=>c` <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      layers='[
    {"type": "Vector","id": "draw","source": {"type": "Vector"}},
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
    ></eox-map>
    <eox-drawtools for="eox-map#primary" layer="draw"></eox-drawtools>`},l={render:()=>c` <eox-map
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
      multiple-features
    ></eox-drawtools>`};var h,m,g;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\` <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      layers='[
    {"type": "Vector","id": "draw","source": {"type": "Vector"}},
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
    ></eox-map>
    <eox-drawtools for="eox-map#primary" layer="draw"></eox-drawtools>\`
}`,...(g=(m=d.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,f,b;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      multiple-features
    ></eox-drawtools>\`
}`,...(b=(f=l.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const k=["Primary","MultiPolygon"];export{l as MultiPolygon,d as Primary,k as __namedExportsOrder,T as default};
//# sourceMappingURL=drawtools.stories-52cebca3.js.map
