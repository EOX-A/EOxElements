var U=Object.defineProperty;var q=(r,e,t)=>e in r?U(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var n=(r,e,t)=>(q(r,typeof e!="symbol"?e+"":e,t),t),f=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var o=(r,e,t)=>(f(r,e,"read from private field"),t?t.call(r):e.get(r)),m=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},g=(r,e,t,s)=>(f(r,e,"write to private field"),s?s.call(r,t):e.set(r,t),t);import{s as S,x as l,T as h}from"./lit-element-Qm8PRmVu.js";import"./main-8nKzfucJ.js";import{i as A}from"./keyed-GB4NtsQP.js";import{b as T}from"./button-KPw86qfe.js";import"./state-ncEgtE_C.js";import"./index-EySAwWXj.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-OEoLUvD_.js";import"../sb-preview/runtime.js";import"./directive-xgBC_cM0.js";import"./directive-helpers-k6EzVOeb.js";const C=`
  * {
    font-family: Roboto, sans-serif;
  }

  ${T}

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
`;class B extends S{constructor(){super();n(this,"hoverInteraction");n(this,"clickInteraction");n(this,"hoverId");n(this,"clickId");this.eoxMap=null,this.olMap=null,this.draw=null,this.layer="draw",this.drawLayer=null,this.drawnFeatures=[],this.modify=null,this.unstyled=!1}_handleDelete(t){t.stopPropagation();const s=t.target.getAttribute("index"),i=this.drawnFeatures[s];this.drawLayer.getSource().removeFeature(i),this.drawnFeatures.splice(s,1),this.requestUpdate()}_handleFeatureSelectAndDeselect(t){const s=t.get("id");if(this.clickId===s){const i=this.drawLayer.getSource().getExtent();this.olMap.getView().fit(i,{duration:750}),this.clickInteraction.highlightById([])}else this.clickInteraction.highlightById([s]),this.olMap.getView().fit(t.getGeometry().getExtent(),{duration:750});this.requestUpdate()}firstUpdated(){this.hoverInteraction=this.eoxMap.selectInteractions.selectHover,this.clickInteraction=this.eoxMap.selectInteractions.selectClick,this.hoverInteraction.selectStyleLayer.on("change",()=>this.requestUpdate()),this.clickInteraction.selectStyleLayer.on("change",()=>this.requestUpdate())}render(){var t,s;return this.hoverId=(t=this.hoverInteraction)==null?void 0:t.selectedFids[0],this.clickId=(s=this.clickInteraction)==null?void 0:s.selectedFids[0],l`
      <style>
        ${!this.unstyled&&C}
      </style>
      <ul>
        ${this.drawnFeatures.map((i,w)=>{const c=i.get("id"),O=this.hoverId===c||this.clickId===c;return A(w+1,l`
              <li
                class="${O?"selected":h}"
                @mouseover=${()=>{this.clickId!==c&&this.hoverInteraction.highlightById([c])}}
                @mouseout=${()=>{this.clickId!==c&&this.hoverInteraction.highlightById([])}}
              >
                <div
                  class="list"
                  @click="${()=>this._handleFeatureSelectAndDeselect(i)}"
                >
                  <span class="title">Feature #${w+1}</span>
                  <button
                    index=${w}
                    class="icon small discard"
                    @click="${this._handleDelete}"
                  >
                    ${this.unstyled?"x":h}
                  </button>
                </div>
              </li>
            `)})}
      </ul>
    `}}n(B,"properties",{eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},layer:{type:String},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",B);const P=`
:host {
  display: block;
}
`;var a,d;class _ extends S{constructor(){super();m(this,a,void 0);m(this,d,void 0);this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.modify=null,this.multipleFeatures=!1,this.showList=!1,this.unstyled=!1}static get properties(){return{for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},showList:{attribute:"show-list",type:Boolean},unstyled:{type:Boolean}}}initDrawLayer(){var s,i;const t=document.querySelector(this.for);g(this,a,t),g(this,d,o(this,a).map),this.drawLayer=o(this,a).addOrUpdateLayer({type:"Vector",properties:{id:"drawLayer",layerControlHide:!0},source:{type:"Vector"},...o(this,a).interactions.drawInteraction?{}:{interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:"Polygon",modify:!0,stopClick:!0}},{type:"select",options:{id:"selectHover",condition:"pointermove",style:{"fill-color":"rgba(51, 153, 204,0.5)","stroke-color":"#3399CC","stroke-width":2.5}}},{type:"select",options:{id:"selectClick",condition:"click",panIn:!0,style:{"fill-color":"rgba(51, 153, 204,0.5)","stroke-color":"#3399CC","stroke-width":2.5}}}]}}),this.draw=o(this,a).interactions.drawInteraction,this.modify=o(this,a).interactions.drawInteractionmodify,(s=this.draw)==null||s.on("drawend",()=>this.onDrawEnd()),(i=this.modify)==null||i.on("modifyend",()=>this.onModifyEnd())}startDrawing(){this.initDrawLayer(),this.draw.setActive(!0),this.currentlyDrawing=!0,this.requestUpdate()}discardDrawing(){this.drawnFeatures=[],this.draw.setActive(!1),this.drawLayer.getSource().clear(),o(this,a).removeInteraction("drawInteraction"),o(this,d).removeLayer(this.drawLayer),this.emitDrawnFeatures(),this.currentlyDrawing=!1,this.requestUpdate()}onDrawEnd(){this.emitDrawnFeatures(),this.draw.setActive(!1),this.currentlyDrawing=!1,this.requestUpdate()}onModifyEnd(){this.emitDrawnFeatures()}emitDrawnFeatures(){setTimeout(()=>{this.drawnFeatures=this.drawLayer.getSource().getFeatures(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("drawupdate",{detail:this.drawnFeatures}))},0)}render(){var t,s,i;return l`
      <style>
        ${P}
        ${!this.unstyled&&C}
      </style>
      <div>
        <slot></slot>
        <button
          data-cy="drawBtn"
          class="polygon icon"
          disabled="${!this.multipleFeatures&&((t=this.drawnFeatures)==null?void 0:t.length)>0||this.currentlyDrawing||h}"
          @click="${()=>this.startDrawing()}"
        >
          ${this.currentlyDrawing?"drawing":"draw"}
        </button>
        <button
          data-cy="discardBtn"
          class="discard icon"
          disabled="${!((s=this.drawnFeatures)!=null&&s.length)&&!this.currentlyDrawing||h}"
          @click="${()=>this.discardDrawing()}"
        >
          discard
        </button>
      </div>
      ${this.showList&&((i=this.drawnFeatures)!=null&&i.length)?l`<eox-drawtools-list
            .eoxMap=${o(this,a)}
            .olMap=${o(this,d)}
            .draw=${this.draw}
            .layer=${this.layer}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>this.requestUpdate()}
          >
          </eox-drawtools-list>`:h}
    `}}a=new WeakMap,d=new WeakMap;customElements.define("eox-drawtools",_);const tt={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},y={render:()=>l` <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      layers='[
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
    ></eox-map>
    <eox-drawtools for="eox-map#primary"></eox-drawtools>`},u={render:()=>l` <eox-map
      id="multi"
      style="width: 400px; height: 300px;"
      layers='[
      {"type":"Tile","source":{"type":"OSM"}}
    ]'
    ></eox-map>
    <eox-drawtools for="eox-map#multi" multiple-features></eox-drawtools>`},p={render:()=>l`
    <div style="display: flex">
      <eox-map
        id="list"
        style="width: 500px; height: 300px;"
        layers=${JSON.stringify([{type:"Tile",source:{type:"OSM"}}])}
      ></eox-map>
      <eox-drawtools
        for="eox-map#list"
        multiple-features
        show-list
      ></eox-drawtools>
    </div>
  `};var x,b,v;y.parameters={...y.parameters,docs:{...(x=y.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\` <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      layers='[
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
    ></eox-map>
    <eox-drawtools for="eox-map#primary"></eox-drawtools>\`
}`,...(v=(b=y.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var I,F,L,M,k;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => html\` <eox-map
      id="multi"
      style="width: 400px; height: 300px;"
      layers='[
      {"type":"Tile","source":{"type":"OSM"}}
    ]'
    ></eox-map>
    <eox-drawtools for="eox-map#multi" multiple-features></eox-drawtools>\`
}`,...(L=(F=u.parameters)==null?void 0:F.docs)==null?void 0:L.source},description:{story:"By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,\nmultiple polygons can be drawn.",...(k=(M=u.parameters)==null?void 0:M.docs)==null?void 0:k.description}}};var $,D,E,V,H;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex">
      <eox-map
        id="list"
        style="width: 500px; height: 300px;"
        layers=\${JSON.stringify([{
    type: "Tile",
    source: {
      type: "OSM"
    }
  }])}
      ></eox-map>
      <eox-drawtools
        for="eox-map#list"
        multiple-features
        show-list
      ></eox-drawtools>
    </div>
  \`
}`,...(E=(D=p.parameters)==null?void 0:D.docs)==null?void 0:E.source},description:{story:"By setting the `show-list` attribute or `showList` property to `true`,\nList of features will be visible",...(H=(V=p.parameters)==null?void 0:V.docs)==null?void 0:H.description}}};const et=["Primary","MultiPolygon","MultiPolygonWithList"];export{u as MultiPolygon,p as MultiPolygonWithList,y as Primary,et as __namedExportsOrder,tt as default};
//# sourceMappingURL=drawtools.stories-08NhjNhq.js.map
