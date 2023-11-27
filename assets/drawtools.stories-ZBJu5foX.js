var G=Object.defineProperty;var Q=(t,r,e)=>r in t?G(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var n=(t,r,e)=>(Q(t,typeof r!="symbol"?r+"":r,e),e),b=(t,r,e)=>{if(!r.has(t))throw TypeError("Cannot "+e)};var a=(t,r,e)=>(b(t,r,"read from private field"),e?e.call(t):r.get(t)),f=(t,r,e)=>{if(r.has(t))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(t):r.set(t,e)},g=(t,r,e,i)=>(b(t,r,"write to private field"),i?i.call(t,e):r.set(t,e),e);import{s as N,x as l,T as m}from"./lit-element-Qm8PRmVu.js";import"./main-IBuaBjw3.js";import{i as R}from"./keyed-GB4NtsQP.js";import{b as X}from"./button-KPw86qfe.js";import"./state-ncEgtE_C.js";import"./index-EySAwWXj.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-vum_0Zii.js";import"../sb-preview/runtime.js";import"./directive-xgBC_cM0.js";import"./directive-helpers-k6EzVOeb.js";const W=`
  * {
    font-family: Roboto, sans-serif;
  }

  ${X}

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
`;class Z extends N{constructor(){super();n(this,"hoverInteraction");n(this,"clickInteraction");n(this,"hoverId");n(this,"clickId");this.eoxMap=null,this.olMap=null,this.draw=null,this.layer="draw",this.drawLayer=null,this.drawnFeatures=[],this.modify=null,this.unstyled=!1}_handleDelete(e){e.stopPropagation();const i=e.target.getAttribute("index"),o=this.drawnFeatures[i];this.drawLayer.getSource().removeFeature(o),this.drawnFeatures.splice(i,1),this.requestUpdate()}_handleFeatureSelectAndDeselect(e){const i=e.get("id");if(this.clickId===i){const o=this.drawLayer.getSource().getExtent();this.olMap.getView().fit(o,{duration:750}),this.clickInteraction.highlightById([])}else this.clickInteraction.highlightById([i]),this.olMap.getView().fit(e.getGeometry().getExtent(),{duration:750});this.requestUpdate()}firstUpdated(){this.hoverInteraction=this.eoxMap.selectInteractions.selectHover,this.clickInteraction=this.eoxMap.selectInteractions.selectClick,this.hoverInteraction.selectStyleLayer.on("change",()=>this.requestUpdate()),this.clickInteraction.selectStyleLayer.on("change",()=>this.requestUpdate())}render(){var e,i;return this.hoverId=(e=this.hoverInteraction)==null?void 0:e.selectedFids[0],this.clickId=(i=this.clickInteraction)==null?void 0:i.selectedFids[0],l`
      <style>
        ${!this.unstyled&&W}
      </style>
      <ul>
        ${this.drawnFeatures.map((o,x)=>{const p=o.get("id"),j=this.hoverId===p||this.clickId===p;return R(x+1,l`
              <li
                class="${j?"selected":m}"
                @mouseover=${()=>{this.clickId!==p&&this.hoverInteraction.highlightById([p])}}
                @mouseout=${()=>{this.clickId!==p&&this.hoverInteraction.highlightById([])}}
              >
                <div
                  class="list"
                  @click="${()=>this._handleFeatureSelectAndDeselect(o)}"
                >
                  <span class="title">Feature #${x+1}</span>
                  <button
                    index=${x}
                    class="icon small discard"
                    @click="${this._handleDelete}"
                  >
                    ${this.unstyled?"x":m}
                  </button>
                </div>
              </li>
            `)})}
      </ul>
    `}}n(Z,"properties",{eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},layer:{type:String},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",Z);const K=`
:host {
  display: block;
}
`;var s,d;class Y extends N{constructor(){super();f(this,s,void 0);f(this,d,void 0);this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.modify=null,this.multipleFeatures=!1,this.showList=!1,this.type="Polygon",this.unstyled=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},showList:{attribute:"show-list",type:Boolean},type:{type:String},unstyled:{type:Boolean}}}initDrawLayer(){var i,o;const e=document.querySelector(this.for);g(this,s,e),g(this,d,a(this,s).map),this.drawLayer=a(this,s).addOrUpdateLayer({type:"Vector",properties:{id:"drawLayer",layerControlHide:!0},source:{type:"Vector"},...a(this,s).interactions.drawInteraction?{}:{interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:this.type,modify:this.allowModify,stopClick:!0}},{type:"select",options:{id:"selectHover",condition:"pointermove",style:{"fill-color":"rgba(51, 153, 204,0.5)","stroke-color":"#3399CC","stroke-width":2.5}}},{type:"select",options:{id:"selectClick",condition:"click",panIn:!0,style:{"fill-color":"rgba(51, 153, 204,0.5)","stroke-color":"#3399CC","stroke-width":2.5}}}]}}),this.draw=a(this,s).interactions.drawInteraction,this.modify=a(this,s).interactions.drawInteractionmodify,(i=this.draw)==null||i.on("drawend",()=>this.onDrawEnd()),(o=this.modify)==null||o.on("modifyend",()=>this.onModifyEnd())}startDrawing(){this.initDrawLayer(),this.draw.setActive(!0),this.currentlyDrawing=!0,this.requestUpdate()}discardDrawing(){this.drawnFeatures=[],this.draw.setActive(!1),this.drawLayer.getSource().clear(),a(this,s).removeInteraction("drawInteraction"),a(this,d).removeLayer(this.drawLayer),this.emitDrawnFeatures(),this.currentlyDrawing=!1,this.requestUpdate()}onDrawEnd(){this.emitDrawnFeatures(),this.draw.setActive(!1),this.currentlyDrawing=!1,this.requestUpdate()}onModifyEnd(){this.emitDrawnFeatures()}emitDrawnFeatures(){setTimeout(()=>{this.drawnFeatures=this.drawLayer.getSource().getFeatures(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("drawupdate",{detail:this.drawnFeatures}))},0)}render(){var e,i,o;return l`
      <style>
        ${K}
        ${!this.unstyled&&W}
      </style>
      <div>
        <slot></slot>
        <button
          data-cy="drawBtn"
          class="polygon icon"
          disabled="${!this.multipleFeatures&&((e=this.drawnFeatures)==null?void 0:e.length)>0||this.currentlyDrawing||m}"
          @click="${()=>this.startDrawing()}"
        >
          ${this.currentlyDrawing?"drawing":"draw"}
        </button>
        <button
          data-cy="discardBtn"
          class="discard icon"
          disabled="${!((i=this.drawnFeatures)!=null&&i.length)&&!this.currentlyDrawing||m}"
          @click="${()=>this.discardDrawing()}"
        >
          discard
        </button>
      </div>
      ${this.showList&&((o=this.drawnFeatures)!=null&&o.length)?l`<eox-drawtools-list
            .eoxMap=${a(this,s)}
            .olMap=${a(this,d)}
            .draw=${this.draw}
            .layer=${this.layer}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>this.requestUpdate()}
          >
          </eox-drawtools-list>`:m}
    `}}s=new WeakMap,d=new WeakMap;customElements.define("eox-drawtools",Y);const ye={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},w={args:{allowModify:!1,multipleFeatures:!1,type:"Polygon"},render:t=>l` <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      layers='[
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
    ></eox-map>
    <eox-drawtools
      for="eox-map#primary"
      .allowModify=${t.allowModify}
      .multipleFeatures=${t.multipleFeatures}
      .type=${t.type}
    >
    </eox-drawtools>`},c={render:()=>l` <eox-map
      id="multi"
      style="width: 400px; height: 300px;"
      layers='[
      {"type":"Tile","source":{"type":"OSM"}}
    ]'
    ></eox-map>
    <eox-drawtools for="eox-map#multi" multiple-features></eox-drawtools>`},y={render:()=>l` <eox-map
      id="modify"
      style="width: 400px; height: 300px;"
      layers='[
      {"type":"Tile","source":{"type":"OSM"}}
    ]'
    ></eox-map>
    <eox-drawtools
      for="eox-map#modify"
      multiple-features
      allow-modify
    ></eox-drawtools>`},u={render:()=>l` <div style="display: flex">
    <div>
      <eox-map
        id="box"
        style="width: 400px; height: 300px;"
        layers='[
        {"type":"Tile","source":{"type":"OSM"}}
      ]'
      ></eox-map>
      Box
      <eox-drawtools
        for="eox-map#box"
        multiple-features
        allow-modify
        type="Box"
      ></eox-drawtools>
    </div>
    <div>
      <eox-map
        id="point"
        style="width: 400px; height: 300px;"
        layers='[
        {"type":"Tile","source":{"type":"OSM"}}
      ]'
      ></eox-map>
      Point
      <eox-drawtools
        for="eox-map#point"
        multiple-features
        allow-modify
        type="Point"
      ></eox-drawtools>
    </div>
    <div>
      <eox-map
        id="circle"
        style="width: 400px; height: 300px;"
        layers='[
        {"type":"Tile","source":{"type":"OSM"}}
      ]'
      ></eox-map>
      Circle
      <eox-drawtools
        for="eox-map#circle"
        multiple-features
        allow-modify
        type="Circle"
      ></eox-drawtools>
    </div>
    <div>
      <eox-map
        id="linestring"
        style="width: 400px; height: 300px;"
        layers='[
        {"type":"Tile","source":{"type":"OSM"}}
      ]'
      ></eox-map>
      LineString
      <eox-drawtools
        for="eox-map#linestring"
        multiple-features
        allow-modify
        type="LineString"
      ></eox-drawtools>
    </div>
  </div>`},h={render:()=>l`
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
  `};var v,M,F;w.parameters={...w.parameters,docs:{...(v=w.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    allowModify: false,
    multipleFeatures: false,
    type: "Polygon"
  },
  render: args => html\` <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      layers='[
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
    ></eox-map>
    <eox-drawtools
      for="eox-map#primary"
      .allowModify=\${args.allowModify}
      .multipleFeatures=\${args.multipleFeatures}
      .type=\${args.type}
    >
    </eox-drawtools>\`
}`,...(F=(M=w.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var S,I,L,$,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\` <eox-map
      id="multi"
      style="width: 400px; height: 300px;"
      layers='[
      {"type":"Tile","source":{"type":"OSM"}}
    ]'
    ></eox-map>
    <eox-drawtools for="eox-map#multi" multiple-features></eox-drawtools>\`
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source},description:{story:"By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,\nmultiple polygons can be drawn.",...(k=($=c.parameters)==null?void 0:$.docs)==null?void 0:k.description}}};var D,E,V,H,C;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\` <eox-map
      id="modify"
      style="width: 400px; height: 300px;"
      layers='[
      {"type":"Tile","source":{"type":"OSM"}}
    ]'
    ></eox-map>
    <eox-drawtools
      for="eox-map#modify"
      multiple-features
      allow-modify
    ></eox-drawtools>\`
}`,...(V=(E=y.parameters)==null?void 0:E.docs)==null?void 0:V.source},description:{story:"By setting the `allow-modify` attribute or `allowModify` property,\nthe user can modify features after drawing",...(C=(H=y.parameters)==null?void 0:H.docs)==null?void 0:C.description}}};var O,T,B,P,U;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex">
    <div>
      <eox-map
        id="box"
        style="width: 400px; height: 300px;"
        layers='[
        {"type":"Tile","source":{"type":"OSM"}}
      ]'
      ></eox-map>
      Box
      <eox-drawtools
        for="eox-map#box"
        multiple-features
        allow-modify
        type="Box"
      ></eox-drawtools>
    </div>
    <div>
      <eox-map
        id="point"
        style="width: 400px; height: 300px;"
        layers='[
        {"type":"Tile","source":{"type":"OSM"}}
      ]'
      ></eox-map>
      Point
      <eox-drawtools
        for="eox-map#point"
        multiple-features
        allow-modify
        type="Point"
      ></eox-drawtools>
    </div>
    <div>
      <eox-map
        id="circle"
        style="width: 400px; height: 300px;"
        layers='[
        {"type":"Tile","source":{"type":"OSM"}}
      ]'
      ></eox-map>
      Circle
      <eox-drawtools
        for="eox-map#circle"
        multiple-features
        allow-modify
        type="Circle"
      ></eox-drawtools>
    </div>
    <div>
      <eox-map
        id="linestring"
        style="width: 400px; height: 300px;"
        layers='[
        {"type":"Tile","source":{"type":"OSM"}}
      ]'
      ></eox-map>
      LineString
      <eox-drawtools
        for="eox-map#linestring"
        multiple-features
        allow-modify
        type="LineString"
      ></eox-drawtools>
    </div>
  </div>\`
}`,...(B=(T=u.parameters)==null?void 0:T.docs)==null?void 0:B.source},description:{story:'The `type` attribute/property controls which drawing type is enabled\n(defaults to "Polygon")',...(U=(P=u.parameters)==null?void 0:P.docs)==null?void 0:U.description}}};var q,A,_,z,J;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(_=(A=h.parameters)==null?void 0:A.docs)==null?void 0:_.source},description:{story:"By setting the `show-list` attribute or `showList` property to `true`,\nList of features will be visible",...(J=(z=h.parameters)==null?void 0:z.docs)==null?void 0:J.description}}};const ue=["Primary","MultiPolygon","ModifyFeatures","DrawType","MultiPolygonWithList"];export{u as DrawType,y as ModifyFeatures,c as MultiPolygon,h as MultiPolygonWithList,w as Primary,ue as __namedExportsOrder,ye as default};
//# sourceMappingURL=drawtools.stories-ZBJu5foX.js.map
