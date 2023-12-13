var ue=Object.defineProperty;var pe=(e,r,t)=>r in e?ue(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var n=(e,r,t)=>(pe(e,typeof r!="symbol"?r+"":r,t),t),C=(e,r,t)=>{if(!r.has(e))throw TypeError("Cannot "+t)};var l=(e,r,t)=>(C(e,r,"read from private field"),t?t.call(e):r.get(e)),w=(e,r,t)=>{if(r.has(e))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(e):r.set(e,t)},f=(e,r,t,s)=>(C(e,r,"write to private field"),s?s.call(e,t):r.set(e,t),t);import{T as M,s as k,x as a}from"./lit-element-Qm8PRmVu.js";import"./main-pe-rRQFz.js";import{e as ye,i as he}from"./directive-xgBC_cM0.js";import{m as me}from"./directive-helpers-k6EzVOeb.js";import{b as we}from"./button-KPw86qfe.js";import"./state-ncEgtE_C.js";import"./index-EySAwWXj.js";import"./_commonjsHelpers-4gQjN7DL.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=ye(class extends he{constructor(){super(...arguments),this.key=M}render(e,r){return this.key=e,r}update(e,[r,t]){return r!==this.key&&(me(e),this.key=r),t}}),H=`
  * {
    font-family: Roboto, sans-serif;
  }

  ${we}

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
`,ge=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.selectHover,e.clickInteraction=e.eoxMap.selectInteractions.selectClick;const r=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on("change",r),e.clickInteraction.selectStyleLayer.on("change",r)},be=(e,r,t)=>{if(e.clickId===r)return;const s=t?[]:[r];e.hoverInteraction.highlightById(s)},xe=(e,r)=>{e.stopPropagation();const t=Number(e.target.getAttribute("index")),s=r.drawnFeatures[t];r.drawLayer.getSource().removeFeature(s),r.drawnFeatures.splice(t,1),r.requestUpdate()},p=[{type:"Tile",source:{type:"OSM"}}],y="width: 400px; height: 300px;",Fe=[{id:"box",type:"Box"},{id:"point",type:"Point"},{id:"circle",type:"Circle"},{id:"linestring",type:"LineString"}],L={duration:750},$e=(e,r)=>{const t=e.get("id"),{clickId:s,drawLayer:i,olMap:o,clickInteraction:h}=r,d=s===t,D=e.getGeometry();if(d){const m=i.getSource().getExtent();o.getView().fit(m,L),h.highlightById([])}else{const m=D.getExtent();h.highlightById([t]),o.getView().fit(m,L)}r.requestUpdate()};class le extends k{constructor(){super();n(this,"hoverInteraction");n(this,"clickInteraction");n(this,"hoverId");n(this,"clickId");this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.modify=null,this.unstyled=!1}_handleDelete(t){xe(t,this)}_handleFeatureSelectAndDeselect(t){$e(t,this)}_handleHoverFeature(t,s=!1){be(this,t,s)}firstUpdated(){ge(this)}render(){var t,s;return this.hoverId=(t=this.hoverInteraction)==null?void 0:t.selectedFids[0],this.clickId=(s=this.clickInteraction)==null?void 0:s.selectedFids[0],a`
      <style>
        ${!this.unstyled&&H}
      </style>
      <ul>
        ${this.drawnFeatures.map((i,o)=>{const h=o+1,d=i.get("id"),D=this.hoverId===d,m=this.clickId===d;return fe(h,a`
              <li
                class="${D||m?"selected":M}"
                @mouseover=${()=>this._handleHoverFeature(d)}
                @mouseout=${()=>this._handleHoverFeature(d,!0)}
              >
                <div
                  class="list"
                  @click="${()=>this._handleFeatureSelectAndDeselect(i)}"
                >
                  <span class="title">Feature #${h}</span>
                  <button
                    index=${o}
                    class="icon small discard"
                    @click="${this._handleDelete}"
                  >
                    x
                  </button>
                </div>
              </li>
            `)})}
      </ul>
    `}}n(le,"properties",{eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",le);const Ie=e=>{const{multipleFeatures:r,drawnFeatures:t,currentlyDrawing:s}=e,i=!r&&(t==null?void 0:t.length)>0||s,o=!(t!=null&&t.length)&&!s;return{drawDisabled:i,discardDisabled:o}};var v,S;class de extends k{constructor(){super();w(this,v,!0);w(this,S,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.currentlyDrawing=!1,this.drawFunc=null,this.unstyled=!1}updateButtonStates(){const{drawDisabled:t,discardDisabled:s}=Ie(this);f(this,v,t),f(this,S,s)}render(){this.updateButtonStates();const t=this.currentlyDrawing?"drawing":"draw";return a`
      <style>
        ${!this.unstyled&&H}
      </style>
      <div>
        <slot></slot>

        <!-- Draw Button -->
        <button
          data-cy="drawBtn"
          class="polygon icon"
          ?disabled="${l(this,v)||M}"
          @click="${()=>this.drawFunc.start()}"
        >
          ${t}
        </button>

        <!-- Discard Button -->
        <button
          data-cy="discardBtn"
          class="discard icon"
          ?disabled="${l(this,S)||M}"
          @click="${()=>this.drawFunc.discard()}"
        >
          discard
        </button>
      </div>
    `}}v=new WeakMap,S=new WeakMap,n(de,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",de);const Me=`
:host {
  display: block;
}
`,ce=e=>{(()=>{e.emitDrawnFeatures(),e.draw.setActive(!1),e.currentlyDrawing=!1})(),e.requestUpdate()},ve=e=>{const r=()=>{e.initDrawLayer(),e.draw.setActive(!0)},t=()=>{e.currentlyDrawing=!0,e.requestUpdate()};r(),t()},Se=e=>{var i,o;const t=document.querySelector(e.for),s=t.map;return e.drawLayer=t.addOrUpdateLayer({type:"Vector",properties:{id:"drawLayer",layerControlHide:!0},source:{type:"Vector"},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:e.type,modify:e.allowModify,stopClick:!0}},{type:"select",options:{id:"selectHover",condition:"pointermove",style:{"fill-color":"rgba(51, 153, 204,0.5)","stroke-color":"#3399CC","stroke-width":2.5}}},{type:"select",options:{id:"selectClick",condition:"click",panIn:!0,style:{"fill-color":"rgba(51, 153, 204,0.5)","stroke-color":"#3399CC","stroke-width":2.5}}}]}),e.draw=t.interactions.drawInteraction,e.modify=t.interactions.drawInteractionmodify,(i=e.draw)==null||i.on("drawend",()=>ce(e)),(o=e.modify)==null||o.on("modifyend",()=>e.emitDrawnFeatures()),{EoxMap:t,OlMap:s}},De=(e,r,t)=>{const s=()=>{e.drawnFeatures=[],e.draw.setActive(!1),e.drawLayer.getSource().clear(),r.removeInteraction("drawInteraction"),t.removeLayer(e.drawLayer)},i=()=>{e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()};s(),i()},ke=(e,r)=>{setTimeout(()=>{e.drawnFeatures=e.drawLayer.getSource().getFeatures(),e.requestUpdate(),r()},0)};var c,u;class He extends k{constructor(){super();w(this,c,void 0);w(this,u,void 0);this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.modify=null,this.multipleFeatures=!1,this.showList=!1,this.type="Polygon",this.unstyled=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},showList:{attribute:"show-list",type:Boolean},type:{type:String},unstyled:{type:Boolean}}}initDrawLayer(){const{EoxMap:t,OlMap:s}=Se(this);f(this,c,t),f(this,u,s)}handleStartDrawing(){ve(this)}handleDiscardDrawing(){De(this,l(this,c),l(this,u))}onDrawEnd(){ce(this)}onModifyEnd(){this.emitDrawnFeatures()}emitDrawnFeatures(){ke(this,()=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:this.drawnFeatures}))})}render(){var t;return a`
      <style>
        ${Me}
        ${!this.unstyled&&H}
      </style>

      <!-- Controller Component -->
      <eox-drawtools-controller
        .drawFunc=${{start:()=>this.handleStartDrawing(),discard:()=>this.handleDiscardDrawing()}}
        .unstyled=${this.unstyled}
        .drawnFeatures=${this.drawnFeatures}
        .currentlyDrawing=${this.currentlyDrawing}
        .multipleFeatures=${this.multipleFeatures}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&((t=this.drawnFeatures)!=null&&t.length)?a`<eox-drawtools-list
            .eoxMap=${l(this,c)}
            .olMap=${l(this,u)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>this.requestUpdate()}
          ></eox-drawtools-list>`:M}
    `}}c=new WeakMap,u=new WeakMap;customElements.define("eox-drawtools",He);const Ce={args:{allowModify:!1,multipleFeatures:!1,type:"Polygon"},render:e=>a`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${y}
      .layers=${p}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "primary" -->
    <eox-drawtools
      for="eox-map#primary"
      .allowModify=${e.allowModify}
      .multipleFeatures=${e.multipleFeatures}
      .type=${e.type}
    />
  `},Le={render:()=>a`
    <!-- Render a collection of map instances with different drawing types -->
    <div style="display: flex">
      <!-- Iterating over different drawing types -->
      ${Fe.map(({id:e,type:r})=>a`
          <div>
            <!-- Displaying an instance of eox-map -->
            <eox-map
              id=${e}
              style=${y}
              .layers=${p}
            />
            <!-- Displaying the current drawing type -->
            ${r}
            <!-- Configuring eox-drawtools with specified parameters -->
            <eox-drawtools
              for="eox-map#${e}"
              multiple-features
              allow-modify
              type="${r}"
            />
          </div>
        `)}
    </div>
  `},Be={render:()=>a`
    <!-- Render eox-map component with ID "multi" -->
    <eox-map
      id="multi"
      style=${y}
      .layers=${p}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "multi" -->
    <eox-drawtools for="eox-map#multi" multiple-features />
  `},Ve={render:()=>a`
    <!-- Render eox-map component with ID "modify" -->
    <eox-map
      id="modify"
      style=${y}
      .layers=${p}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "modify" -->
    <eox-drawtools for="eox-map#modify" multiple-features allow-modify />
  `},Pe={render:()=>a`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="list"
      style=${y}
      .layers=${p}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list" -->
    <eox-drawtools
      for="eox-map#list"
      multiple-features
      show-list
    ></eox-drawtools>
  `},Ae={args:{unstyled:!0},render:e=>a`
    <!-- Render eox-map component with ID "unstyled" -->
    <eox-map
      id="unstyled"
      style=${y}
      .layers=${p}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "unstyled" -->
    <eox-drawtools
      for="eox-map#unstyled"
      multiple-features
      show-list
      .unstyled=${e.unstyled}
    />
  `},Ge={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},g=Ce,b=Be,x=Ve,F=Le,$=Pe,I=Ae;var B,V,P,A,U;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:"PrimaryStory",...(P=(V=g.parameters)==null?void 0:V.docs)==null?void 0:P.source},description:{story:"Primary story showcasing basic usage.",...(U=(A=g.parameters)==null?void 0:A.docs)==null?void 0:U.description}}};var _,R,O,q,z;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:"MultiPolygonStory",...(O=(R=b.parameters)==null?void 0:R.docs)==null?void 0:O.source},description:{story:"By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,\nmultiple polygons can be drawn.",...(z=(q=b.parameters)==null?void 0:q.docs)==null?void 0:z.description}}};var W,E,Y,N,j;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:"ModifyFeaturesStory",...(Y=(E=x.parameters)==null?void 0:E.docs)==null?void 0:Y.source},description:{story:"By setting the `allow-modify` attribute or `allowModify` property,\nthe user can modify features after drawing.",...(j=(N=x.parameters)==null?void 0:N.docs)==null?void 0:j.description}}};var G,Q,Z,X,J;F.parameters={...F.parameters,docs:{...(G=F.parameters)==null?void 0:G.docs,source:{originalSource:"DrawTypeStory",...(Z=(Q=F.parameters)==null?void 0:Q.docs)==null?void 0:Z.source},description:{story:'The `type` attribute/property controls which drawing type is enabled\n(defaults to "Polygon").',...(J=(X=F.parameters)==null?void 0:X.docs)==null?void 0:J.description}}};var K,T,ee,te,re;$.parameters={...$.parameters,docs:{...(K=$.parameters)==null?void 0:K.docs,source:{originalSource:"MultiPolygonWithListStory",...(ee=(T=$.parameters)==null?void 0:T.docs)==null?void 0:ee.source},description:{story:"By setting the `show-list` attribute or `showList` property to `true`,\na list of the drawn features will be populated.",...(re=(te=$.parameters)==null?void 0:te.docs)==null?void 0:re.description}}};var se,ae,ie,oe,ne;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:"UnstyledStory",...(ie=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:ie.source},description:{story:"By setting the `unstyled` attribute or property, the element has no styling applied.",...(ne=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};const Qe=["Primary","MultiPolygon","ModifyFeatures","DrawType","MultiPolygonWithList","Unstyled"];export{F as DrawType,x as ModifyFeatures,b as MultiPolygon,$ as MultiPolygonWithList,g as Primary,I as Unstyled,Qe as __namedExportsOrder,Ge as default};
