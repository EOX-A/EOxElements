var c=(e,r,t)=>{if(!r.has(e))throw TypeError("Cannot "+t)};var o=(e,r,t)=>(c(e,r,"read from private field"),t?t.call(e):r.get(e)),u=(e,r,t)=>{if(r.has(e))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(e):r.set(e,t)},p=(e,r,t,s)=>(c(e,r,"write to private field"),s?s.call(e,t):r.set(e,t),t);import{s as D,x as y,T as w}from"./lit-element-10b89e96.js";import"./main-16636182.js";import{b as F}from"./button-f0c29825.js";import"./state-2f6736ea.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-1ab3a927.js";import"../sb-preview/runtime.js";const v=`
:host {
  display: block;
}
`,M=`
* {
  font-family: Roboto, sans-serif;
}

${F}

button.discard:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FF5252' viewBox='0 0 24 24'%3E%3Ctitle%3Etrash-can-outline%3C/title%3E%3Cpath d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' /%3E%3C/svg%3E")
}

button.polygon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-polygon-plus%3C/title%3E%3Cpath d='M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z' /%3E%3C/svg%3E");
}
`;var a,l;class C extends D{constructor(){super();u(this,a,void 0);u(this,l,void 0);this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.layer="draw",this.modify=null,this.multipleFeatures=!1,this.unstyled=!1}static get properties(){return{for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},layer:{type:String},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},unstyled:{type:Boolean}}}startDrawing(){var t,s;o(this,a).addDraw(this.layer,{id:"drawInteraction",type:"Polygon",stopClick:!0}),this.draw=o(this,a).interactions.drawInteraction,this.modify=o(this,a).interactions.drawInteractionmodify,(t=this.draw)==null||t.on("drawend",i=>this.onDrawEnd(i)),(s=this.modify)==null||s.on("modifyend",i=>this.onModifyEnd(i)),this.currentlyDrawing=!0,this.requestUpdate()}discardDrawing(){this.drawnFeatures=[],o(this,a).removeInteraction("drawInteraction"),this.drawLayer.getSource().clear(),this.emitDrawnFeatures(),this.currentlyDrawing=!1,this.requestUpdate()}onDrawEnd(){this.emitDrawnFeatures(),o(this,a).removeInteraction("drawInteraction"),this.currentlyDrawing=!1,this.requestUpdate()}onModifyEnd(){this.emitDrawnFeatures()}emitDrawnFeatures(){setTimeout(()=>{this.drawnFeatures=this.drawLayer.getSource().getFeatures(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("drawupdate",{detail:this.drawnFeatures}))},0)}render(){var s,i;const t=document.querySelector(this.for);return p(this,a,t),p(this,l,o(this,a).map),this.drawLayer=o(this,l).getLayers().getArray().find(H=>H.get("id")===this.layer),this.requestUpdate(),y`
      <style>
        ${v}
        ${!this.unstyled&&M}
      </style>
      <div>
        <slot></slot>
        <button
          data-cy="drawBtn"
          class="polygon icon"
          disabled="${!this.multipleFeatures&&((s=this.drawnFeatures)==null?void 0:s.length)>0||this.currentlyDrawing||w}"
          @click="${()=>this.startDrawing()}"
        >
          ${this.currentlyDrawing?"drawing":"draw"}
        </button>
        <button
          data-cy="discardBtn"
          class="discard icon"
          disabled="${!((i=this.drawnFeatures)!=null&&i.length)&&!this.currentlyDrawing||w}"
          @click="${()=>this.discardDrawing()}"
        >
          discard
        </button>
      </div>
    `}}a=new WeakMap,l=new WeakMap;customElements.define("eox-drawtools",C);const P={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},d={render:()=>y` <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      layers='[
    {"type": "Vector","id": "draw","source": {"type": "Vector"}},
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
    ></eox-map>
    <eox-drawtools for="eox-map#primary" layer="draw"></eox-drawtools>`},n={render:()=>y` <eox-map
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
    ></eox-drawtools>`};var m,h,g;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\` <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      layers='[
    {"type": "Vector","id": "draw","source": {"type": "Vector"}},
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
    ></eox-map>
    <eox-drawtools for="eox-map#primary" layer="draw"></eox-drawtools>\`
}`,...(g=(h=d.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,f,V,b,E;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(V=(f=n.parameters)==null?void 0:f.docs)==null?void 0:V.source},description:{story:"By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,\nmultiple polygons can be drawn.",...(E=(b=n.parameters)==null?void 0:b.docs)==null?void 0:E.description}}};const U=["Primary","MultiPolygon"];export{n as MultiPolygon,d as Primary,U as __namedExportsOrder,P as default};
//# sourceMappingURL=drawtools.stories-4d89e1ae.js.map
