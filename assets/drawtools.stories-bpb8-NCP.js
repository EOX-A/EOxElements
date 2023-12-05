var ie=Object.defineProperty;var oe=(e,r,t)=>r in e?ie(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var n=(e,r,t)=>(oe(e,typeof r!="symbol"?r+"":r,t),t),H=(e,r,t)=>{if(!r.has(e))throw TypeError("Cannot "+t)};var l=(e,r,t)=>(H(e,r,"read from private field"),t?t.call(e):r.get(e)),h=(e,r,t)=>{if(r.has(e))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(e):r.set(e,t)},m=(e,r,t,s)=>(H(e,r,"write to private field"),s?s.call(e,t):r.set(e,t),t);import{T as x,s as k,x as i}from"./lit-element-Qm8PRmVu.js";import"./main-IEUMOTb0.js";import{e as ne,i as le}from"./directive-xgBC_cM0.js";import{m as de}from"./directive-helpers-k6EzVOeb.js";import{b as ce}from"./button-KPw86qfe.js";import"./state-ncEgtE_C.js";import"./index-EySAwWXj.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-HtYaXRZM.js";import"../sb-preview/runtime.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=ne(class extends le{constructor(){super(...arguments),this.key=x}render(e,r){return this.key=e,r}update(e,[r,t]){return r!==this.key&&(de(e),this.key=r),t}}),D=`
  * {
    font-family: Roboto, sans-serif;
  }

  ${ce}

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
`,pe=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.selectHover,e.clickInteraction=e.eoxMap.selectInteractions.selectClick;const r=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on("change",r),e.clickInteraction.selectStyleLayer.on("change",r)},ye=(e,r,t)=>{if(e.clickId===r)return;const s=t?[]:[r];e.hoverInteraction.highlightById(s)},he=(e,r)=>{e.stopPropagation();const t=Number(e.target.getAttribute("index")),s=r.drawnFeatures[t];r.drawLayer.getSource().removeFeature(s),r.drawnFeatures.splice(t,1),r.requestUpdate()},v=[{type:"Tile",source:{type:"OSM"}}],I="width: 400px; height: 300px;",me=[{id:"box",type:"Box"},{id:"point",type:"Point"},{id:"circle",type:"Circle"},{id:"linestring",type:"LineString"}],L={duration:750},we=(e,r)=>{const t=e.get("id"),{clickId:s,drawLayer:a,olMap:o,clickInteraction:p}=r,d=s===t,S=e.getGeometry();if(d){const y=a.getSource().getExtent();o.getView().fit(y,L),p.highlightById([])}else{const y=S.getExtent();p.highlightById([t]),o.getView().fit(y,L)}r.requestUpdate()};class re extends k{constructor(){super();n(this,"hoverInteraction");n(this,"clickInteraction");n(this,"hoverId");n(this,"clickId");this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.modify=null,this.unstyled=!1}_handleDelete(t){he(t,this)}_handleFeatureSelectAndDeselect(t){we(t,this)}_handleHoverFeature(t,s=!1){ye(this,t,s)}firstUpdated(){pe(this)}render(){var t,s;return this.hoverId=(t=this.hoverInteraction)==null?void 0:t.selectedFids[0],this.clickId=(s=this.clickInteraction)==null?void 0:s.selectedFids[0],i`
      <style>
        ${!this.unstyled&&D}
      </style>
      <ul>
        ${this.drawnFeatures.map((a,o)=>{const p=o+1,d=a.get("id"),S=this.hoverId===d,y=this.clickId===d;return ue(p,i`
              <li
                class="${S||y?"selected":x}"
                @mouseover=${()=>this._handleHoverFeature(d)}
                @mouseout=${()=>this._handleHoverFeature(d,!0)}
              >
                <div
                  class="list"
                  @click="${()=>this._handleFeatureSelectAndDeselect(a)}"
                >
                  <span class="title">Feature #${p}</span>
                  <button
                    index=${o}
                    class="icon small discard"
                    @click="${this._handleDelete}"
                  ></button>
                </div>
              </li>
            `)})}
      </ul>
    `}}n(re,"properties",{eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",re);const fe=e=>{const{multipleFeatures:r,drawnFeatures:t,currentlyDrawing:s}=e,a=!r&&(t==null?void 0:t.length)>0||s,o=!(t!=null&&t.length)&&!s;return{drawDisabled:a,discardDisabled:o}};var $,M;class se extends k{constructor(){super();h(this,$,!0);h(this,M,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.currentlyDrawing=!1,this.drawFunc=null,this.unstyled=!1}updateButtonStates(){const{drawDisabled:t,discardDisabled:s}=fe(this);m(this,$,t),m(this,M,s)}render(){this.updateButtonStates();const t=this.currentlyDrawing?"drawing":"draw";return i`
      <style>
        ${!this.unstyled&&D}
      </style>
      <div>
        <slot></slot>

        <!-- Draw Button -->
        <button
          data-cy="drawBtn"
          class="polygon icon"
          ?disabled="${l(this,$)||x}"
          @click="${()=>this.drawFunc.start()}"
        >
          ${t}
        </button>

        <!-- Discard Button -->
        <button
          data-cy="discardBtn"
          class="discard icon"
          ?disabled="${l(this,M)||x}"
          @click="${()=>this.drawFunc.discard()}"
        >
          discard
        </button>
      </div>
    `}}$=new WeakMap,M=new WeakMap,n(se,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",se);const ge=`
:host {
  display: block;
}
`,ae=e=>{(()=>{e.emitDrawnFeatures(),e.draw.setActive(!1),e.currentlyDrawing=!1})(),e.requestUpdate()},be=e=>{const r=()=>{e.initDrawLayer(),e.draw.setActive(!0)},t=()=>{e.currentlyDrawing=!0,e.requestUpdate()};r(),t()},Fe=e=>{var a,o;const t=document.querySelector(e.for),s=t.map;return e.drawLayer=t.addOrUpdateLayer({type:"Vector",properties:{id:"drawLayer",layerControlHide:!0},source:{type:"Vector"},...t.interactions.drawInteraction?{}:{interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:e.type,modify:e.allowModify,stopClick:!0}},{type:"select",options:{id:"selectHover",condition:"pointermove",style:{"fill-color":"rgba(51, 153, 204,0.5)","stroke-color":"#3399CC","stroke-width":2.5}}},{type:"select",options:{id:"selectClick",condition:"click",panIn:!0,style:{"fill-color":"rgba(51, 153, 204,0.5)","stroke-color":"#3399CC","stroke-width":2.5}}}]}}),e.draw=t.interactions.drawInteraction,e.modify=t.interactions.drawInteractionmodify,(a=e.draw)==null||a.on("drawend",()=>ae(e)),(o=e.modify)==null||o.on("modifyend",()=>e.emitDrawnFeatures()),{EoxMap:t,OlMap:s}},xe=(e,r,t)=>{const s=()=>{e.drawnFeatures=[],e.draw.setActive(!1),e.drawLayer.getSource().clear(),r.removeInteraction("drawInteraction"),t.removeLayer(e.drawLayer)},a=()=>{e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()};s(),a()},$e=(e,r)=>{setTimeout(()=>{e.drawnFeatures=e.drawLayer.getSource().getFeatures(),e.requestUpdate(),r()},0)};var c,u;class Me extends k{constructor(){super();h(this,c,void 0);h(this,u,void 0);this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.modify=null,this.multipleFeatures=!1,this.showList=!1,this.type="Polygon",this.unstyled=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},showList:{attribute:"show-list",type:Boolean},type:{type:String},unstyled:{type:Boolean}}}initDrawLayer(){const{EoxMap:t,OlMap:s}=Fe(this);m(this,c,t),m(this,u,s)}handleStartDrawing(){be(this)}handleDiscardDrawing(){xe(this,l(this,c),l(this,u))}onDrawEnd(){ae(this)}onModifyEnd(){this.emitDrawnFeatures()}emitDrawnFeatures(){$e(this,()=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:this.drawnFeatures}))})}render(){var t;return i`
      <style>
        ${ge}
        ${!this.unstyled&&D}
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
      ${this.showList&&((t=this.drawnFeatures)!=null&&t.length)?i`<eox-drawtools-list
            .eoxMap=${l(this,c)}
            .olMap=${l(this,u)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>this.requestUpdate()}
          ></eox-drawtools-list>`:x}
    `}}c=new WeakMap,u=new WeakMap;customElements.define("eox-drawtools",Me);const ve={args:{allowModify:!1,multipleFeatures:!1,type:"Polygon"},render:e=>i`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${I}
      .layers=${v}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "primary" -->
    <eox-drawtools
      for="eox-map#primary"
      .allowModify=${e.allowModify}
      .multipleFeatures=${e.multipleFeatures}
      .type=${e.type}
    />
  `},Ie={render:()=>i`
    <!-- Render a collection of map instances with different drawing types -->
    <div style="display: flex">
      <!-- Iterating over different drawing types -->
      ${me.map(({id:e,type:r})=>i`
          <div>
            <!-- Displaying an instance of eox-map -->
            <eox-map
              id=${e}
              style=${I}
              .layers=${v}
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
  `},Se={render:()=>i`
    <!-- Render eox-map component with ID "multi" -->
    <eox-map
      id="multi"
      style=${I}
      .layers=${v}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "multi" -->
    <eox-drawtools for="eox-map#multi" multiple-features />
  `},ke={render:()=>i`
    <!-- Render eox-map component with ID "modify" -->
    <eox-map
      id="modify"
      style=${I}
      .layers=${v}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "modify" -->
    <eox-drawtools for="eox-map#modify" multiple-features allow-modify />
  `},De={render:()=>i`
    <!-- Render eox-map component with ID "list" -->
    <div style="display: flex">
      <eox-map
        id="list"
        style=${I}
        .layers=${v}
      ></eox-map>

      <!-- Initialize eox-drawtools for the eox-map with ID "list" -->
      <eox-drawtools
        for="eox-map#list"
        layer="draw"
        multiple-features
        show-list
      ></eox-drawtools>
    </div>
  `},We={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},w=ve,f=Se,g=ke,b=Ie,F=De;var C,B,V,P,A;w.parameters={...w.parameters,docs:{...(C=w.parameters)==null?void 0:C.docs,source:{originalSource:"PrimaryStory",...(V=(B=w.parameters)==null?void 0:B.docs)==null?void 0:V.source},description:{story:"Primary story showcasing basic usage.",...(A=(P=w.parameters)==null?void 0:P.docs)==null?void 0:A.description}}};var _,U,O,R,q;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:"MultiPolygonStory",...(O=(U=f.parameters)==null?void 0:U.docs)==null?void 0:O.source},description:{story:"By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,\nmultiple polygons can be drawn.",...(q=(R=f.parameters)==null?void 0:R.docs)==null?void 0:q.description}}};var z,W,E,Y,N;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:"ModifyFeaturesStory",...(E=(W=g.parameters)==null?void 0:W.docs)==null?void 0:E.source},description:{story:"By setting the `allow-modify` attribute or `allowModify` property,\nthe user can modify features after drawing",...(N=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:N.description}}};var j,G,Q,Z,X;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:"DrawTypeStory",...(Q=(G=b.parameters)==null?void 0:G.docs)==null?void 0:Q.source},description:{story:'The `type` attribute/property controls which drawing type is enabled\n(defaults to "Polygon")',...(X=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:X.description}}};var J,K,T,ee,te;F.parameters={...F.parameters,docs:{...(J=F.parameters)==null?void 0:J.docs,source:{originalSource:"MultiPolygonWithListStory",...(T=(K=F.parameters)==null?void 0:K.docs)==null?void 0:T.source},description:{story:"By setting the `show-list` attribute or `showList` property to `true`,\nList of features will be visible",...(te=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};const Ee=["Primary","MultiPolygon","ModifyFeatures","DrawType","MultiPolygonWithList"];export{b as DrawType,g as ModifyFeatures,f as MultiPolygon,F as MultiPolygonWithList,w as Primary,Ee as __namedExportsOrder,We as default};
