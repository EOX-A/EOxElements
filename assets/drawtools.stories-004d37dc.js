var U=Object.defineProperty;var T=(r,e,t)=>e in r?U(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(T(r,typeof e!="symbol"?e+"":e,t),t),f=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var o=(r,e,t)=>(f(r,e,"read from private field"),t?t.call(r):e.get(r)),g=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},x=(r,e,t,s)=>(f(r,e,"write to private field"),s?s.call(r,t):e.set(r,t),t);import{s as O,x as d,T as y}from"./lit-element-c498c537.js";import"./main-c7b21470.js";import{i as A}from"./keyed-5cab5044.js";import{b as P}from"./button-f0c29825.js";import"./state-1645c902.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-57fe003b.js";import"../sb-preview/runtime.js";import"./directive-12249aa5.js";import"./directive-helpers-1dda834b.js";const B=`
  * {
    font-family: Roboto, sans-serif;
  }

  ${P}

  button.discard:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FF5252' viewBox='0 0 24 24'%3E%3Ctitle%3Etrash-can-outline%3C/title%3E%3Cpath d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' /%3E%3C/svg%3E")
  }

  button.polygon:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-polygon-plus%3C/title%3E%3Cpath d='M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z' /%3E%3C/svg%3E");
  }
  ul {
    padding: 0;
  }
  ul ul {
    padding-left: 48px;
  }
  li:hover {
    background: #f0f5f9;
  }
  li.selected {
    background: #f0f5f9;
  }
  li {
    list-style: none;
    padding: 4px;
  }
  li {
    border-bottom: 1px solid #0041703a;
  }
  li:first-child {
    border-top: 1px solid #0041703a;
  }
  li.sortable-chosen {
    background: #eeea;
  }
  li.sortable-drag {
    opacity: 0;
  }
  li.sortable-ghost {
  }
  button.small.icon, button.small.icon::before {
    height: 16px;
    width: 16px;
    padding: 0px;
  }
  button.discard.icon {
    opacity: .7;
  }
  button.discard.icon:hover {
    opacity: 1;
  }
  eox-drawtools-list {
    width: 100%;
  }
  .list {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: small;
    gap: 10px;

  }
  label {
    gap: 10px;
  }
  label, span {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: small;
    flex-grow: 1;
  }
`,m=(r,e,t=!1)=>({id:r,condition:e,panIn:t,layer:{type:"Vector",properties:{id:"selectLayer"},source:{type:"Vector"},style:{"fill-color":"rgba(51, 153, 204,0.5)","stroke-color":"#3399CC","stroke-width":2.5}}});class C extends O{constructor(){super();c(this,"hoverInteraction");c(this,"clickInteraction");c(this,"hoverId");c(this,"clickId");this.eoxMap=null,this.olMap=null,this.draw=null,this.layer="draw",this.drawLayer=null,this.drawnFeatures=[],this.modify=null,this.unstyled=!1}_handleDelete(t){t.stopPropagation();const s=t.target.getAttribute("index"),a=this.drawnFeatures[s];this.drawLayer.getSource().removeFeature(a),this.drawnFeatures.splice(s,1),this.requestUpdate()}_handleFeatureSelectAndDeselect(t){const s=t.get("id");if(this.clickId===s){const a=this.drawLayer.getSource().getExtent();this.olMap.getView().fit(a,{duration:750}),this.clickInteraction.highlightById([])}else this.clickInteraction.highlightById([s]),this.olMap.getView().fit(t.getGeometry().getExtent(),{duration:750});this.requestUpdate()}firstUpdated(){var a,l;const t=(a=this.eoxMap)==null?void 0:a.selectInteractions["draw-hover"],s=(l=this.eoxMap)==null?void 0:l.selectInteractions["draw-click"];t||(this.hoverInteraction=this.eoxMap.addSelect(this.layer,m("draw-hover","pointermove"))),s||(this.clickInteraction=this.eoxMap.addSelect(this.layer,m("draw-click","click",!0))),this.hoverInteraction.selectStyleLayer.on("change",()=>this.requestUpdate()),this.clickInteraction.selectStyleLayer.on("change",()=>this.requestUpdate())}render(){var t,s;return this.hoverInteraction=this.eoxMap.selectInteractions["draw-hover"],this.clickInteraction=this.eoxMap.selectInteractions["draw-click"],this.hoverId=(t=this.hoverInteraction)==null?void 0:t.selectedFids[0],this.clickId=(s=this.clickInteraction)==null?void 0:s.selectedFids[0],d`
      <style>
        ${!this.unstyled&&B}
      </style>
      <ul>
        ${this.drawnFeatures.map((a,l)=>{const n=a.get("id"),q=this.hoverId===n||this.clickId===n;return A(l+1,d`
              <li
                class="${q?"selected":y}"
                @mouseover=${()=>{this.clickId!==n&&this.hoverInteraction.highlightById([n])}}
                @mouseout=${()=>{this.clickId!==n&&this.hoverInteraction.highlightById([])}}
              >
                <div
                  class="list"
                  @click="${()=>this._handleFeatureSelectAndDeselect(a)}"
                >
                  <span class="title">Feature #${l+1}</span>
                  <button
                    index=${l}
                    class="icon small discard"
                    @click="${this._handleDelete}"
                  >
                    ${this.unstyled?"x":y}
                  </button>
                </div>
              </li>
            `)})}
      </ul>
    `}}c(C,"properties",{eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},layer:{type:String},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",C);const _=`
:host {
  display: block;
}
`;var i,p;class z extends O{constructor(){super();g(this,i,void 0);g(this,p,void 0);this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.layer="draw",this.modify=null,this.multipleFeatures=!1,this.showList=!1,this.unstyled=!1}static get properties(){return{for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},layer:{type:String},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},showList:{attribute:"show-list",type:Boolean},unstyled:{type:Boolean}}}startDrawing(){var t,s;o(this,i).addDraw(this.layer,{id:"drawInteraction",type:"Polygon",stopClick:!0}),this.draw=o(this,i).interactions.drawInteraction,this.modify=o(this,i).interactions.drawInteractionmodify,(t=this.draw)==null||t.on("drawend",a=>this.onDrawEnd(a)),(s=this.modify)==null||s.on("modifyend",a=>this.onModifyEnd(a)),this.currentlyDrawing=!0,this.requestUpdate()}discardDrawing(){this.drawnFeatures=[],o(this,i).removeInteraction("drawInteraction"),this.drawLayer.getSource().clear(),this.emitDrawnFeatures(),this.currentlyDrawing=!1,this.requestUpdate()}onDrawEnd(){this.emitDrawnFeatures(),o(this,i).removeInteraction("drawInteraction"),this.currentlyDrawing=!1,this.requestUpdate()}onModifyEnd(){this.emitDrawnFeatures()}emitDrawnFeatures(){setTimeout(()=>{this.drawnFeatures=this.drawLayer.getSource().getFeatures(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("drawupdate",{detail:this.drawnFeatures}))},0)}render(){var s,a,l;const t=document.querySelector(this.for);return x(this,i,t),x(this,p,o(this,i).map),this.drawLayer=o(this,p).getLayers().getArray().find(n=>n.get("id")===this.layer),this.requestUpdate(),d`
      <style>
        ${_}
        ${!this.unstyled&&B}
      </style>
      <div>
        <slot></slot>
        <button
          data-cy="drawBtn"
          class="polygon icon"
          disabled="${!this.multipleFeatures&&((s=this.drawnFeatures)==null?void 0:s.length)>0||this.currentlyDrawing||y}"
          @click="${()=>this.startDrawing()}"
        >
          ${this.currentlyDrawing?"drawing":"draw"}
        </button>
        <button
          data-cy="discardBtn"
          class="discard icon"
          disabled="${!((a=this.drawnFeatures)!=null&&a.length)&&!this.currentlyDrawing||y}"
          @click="${()=>this.discardDrawing()}"
        >
          discard
        </button>
      </div>
      ${this.showList&&((l=this.drawnFeatures)!=null&&l.length)?d`<eox-drawtools-list
            .eoxMap=${o(this,i)}
            .olMap=${o(this,p)}
            .draw=${this.draw}
            .layer=${this.layer}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>this.requestUpdate()}
          >
          </eox-drawtools-list>`:y}
    `}}i=new WeakMap,p=new WeakMap;customElements.define("eox-drawtools",z);const tt={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},w={render:()=>d` <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      layers='[
    {"type": "Vector","id": "draw","source": {"type": "Vector"}},
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
    ></eox-map>
    <eox-drawtools for="eox-map#primary" layer="draw"></eox-drawtools>`},u={render:()=>d` <eox-map
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
    ></eox-drawtools>`},h={play:async({canvasElement:r})=>{const e=r.querySelector("eox-map");e.addSelect("draw",m("draw-hover","pointermove")),e.addSelect("draw",m("draw-click","click",!0))},render:()=>d`
    <div style="display: flex">
      <eox-map
        id="list"
        style="width: 500px; height: 300px;"
        layers=${JSON.stringify([{type:"Vector",id:"draw",source:{type:"Vector"}},{type:"Tile",source:{type:"OSM"}}])}
      ></eox-map>
      <eox-drawtools
        for="eox-map#list"
        layer="draw"
        multiple-features
        show-list
      ></eox-drawtools>
    </div>
  `};var b,v,I;w.parameters={...w.parameters,docs:{...(b=w.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\` <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      layers='[
    {"type": "Vector","id": "draw","source": {"type": "Vector"}},
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
    ></eox-map>
    <eox-drawtools for="eox-map#primary" layer="draw"></eox-drawtools>\`
}`,...(I=(v=w.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var M,V,S,k,E;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(S=(V=u.parameters)==null?void 0:V.docs)==null?void 0:S.source},description:{story:"By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,\nmultiple polygons can be drawn.",...(E=(k=u.parameters)==null?void 0:k.docs)==null?void 0:E.description}}};var F,L,$,D,H;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const EOxMap = canvasElement.querySelector("eox-map");
    EOxMap.addSelect("draw", getDefaultSelectedOption("draw-hover", "pointermove"));
    EOxMap.addSelect("draw", getDefaultSelectedOption("draw-click", "click", true));
  },
  render: () => html\`
    <div style="display: flex">
      <eox-map
        id="list"
        style="width: 500px; height: 300px;"
        layers=\${JSON.stringify([{
    type: "Vector",
    id: "draw",
    source: {
      type: "Vector"
    }
  }, {
    type: "Tile",
    source: {
      type: "OSM"
    }
  }])}
      ></eox-map>
      <eox-drawtools
        for="eox-map#list"
        layer="draw"
        multiple-features
        show-list
      ></eox-drawtools>
    </div>
  \`
}`,...($=(L=h.parameters)==null?void 0:L.docs)==null?void 0:$.source},description:{story:"By setting the `show-list` attribute or `showList` property to `true`,\nList of features will be visible",...(H=(D=h.parameters)==null?void 0:D.docs)==null?void 0:H.description}}};const et=["Primary","MultiPolygon","MultiPolygonWithList"];export{u as MultiPolygon,h as MultiPolygonWithList,w as Primary,et as __namedExportsOrder,tt as default};
//# sourceMappingURL=drawtools.stories-004d37dc.js.map
