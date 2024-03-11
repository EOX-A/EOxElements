var It=Object.defineProperty;var Mt=(t,r,e)=>r in t?It(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var p=(t,r,e)=>(Mt(t,typeof r!="symbol"?r+"":r,e),e),D=(t,r,e)=>{if(!r.has(t))throw TypeError("Cannot "+e)};var n=(t,r,e)=>(D(t,r,"read from private field"),e?e.call(t):r.get(t)),h=(t,r,e)=>{if(r.has(t))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(t):r.set(t,e)},y=(t,r,e,o)=>(D(t,r,"write to private field"),o?o.call(t,e):r.set(t,e),e);import{T as m,s as V,x as i}from"./lit-element-uhisBW42.js";import"./main-oCk-xVEg.js";import{e as Ct,i as Ht,n as E}from"./when-fh6s5Pmf.js";import{m as kt}from"./directive-helpers-qkjFCehB.js";import{s as Bt}from"./main.style-NA-moo7C.js";import"./state-729Pchtv.js";import"./index-EySAwWXj.js";import"./_commonjsHelpers-4gQjN7DL.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=Ct(class extends Ht{constructor(){super(...arguments),this.key=m}render(t,r){return this.key=t,r}update(t,[r,e]){return r!==this.key&&(kt(t),this.key=r),e}}),Dt=t=>{t.hoverInteraction=t.eoxMap.selectInteractions.selectHover,t.clickInteraction=t.eoxMap.selectInteractions.selectClick;const r=()=>{t.requestUpdate()};t.hoverInteraction.selectStyleLayer.on("change",r),t.clickInteraction.selectStyleLayer.on("change",r)},Et=(t,r,e)=>{if(t.clickId===r)return;const o=e?[]:[r];t.hoverInteraction.highlightById(o)},Ot=(t,r)=>{t.stopPropagation();const e=Number(t.target.getAttribute("index")),o=r.drawnFeatures[e];r.drawLayer.getSource().removeFeature(o),r.drawnFeatures.splice(e,1),r.requestUpdate()},d=[{type:"Tile",source:{type:"OSM"}}],c="width: 400px; height: 300px;",Lt=[{id:"box",type:"Box"},{id:"point",type:"Point"},{id:"circle",type:"Circle"},{id:"linestring",type:"LineString"}],O={duration:750},L={type:"FeatureCollection",features:[]},At=(t,r)=>{const e=t.get("id"),{clickId:o,drawLayer:a,olMap:s,clickInteraction:f}=r,u=o===e,B=t.getGeometry();if(u){const g=a.getSource().getExtent();s.getView().fit(g,O),f.highlightById([])}else{const g=B.getExtent();f.highlightById([e]),s.getView().fit(g,O)}r.requestUpdate()},Rt="ul.list-wrap { padding: 0;}ul.list-wrap li:hover,ul.list-wrap li.selected { background: var(--secondary-bg-color-hover);}ul.list-wrap li { list-style: none; padding: 4px;}ul.list-wrap li { border-bottom: 1.2px solid var(--secondary-color);}ul.list-wrap li:first-child { border-top: 1.2px solid var(--secondary-color);}ul.list-wrap li .list { width: 100%; align-items: center; justify-content: space-between; display: flex; align-items: center; cursor: pointer; font-size: small; gap: 10px;}ul.list-wrap li .list span { display: flex; align-items: center; cursor: pointer; font-size: small; flex-grow: 1;}";class Ft extends V{constructor(){super();p(this,"hoverInteraction");p(this,"clickInteraction");p(this,"hoverId");p(this,"clickId");this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.modify=null,this.unstyled=!1}_handleDelete(e){Ot(e,this),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(e){At(e,this)}_handleHoverFeature(e,o=!1){Et(this,e,o)}firstUpdated(){Dt(this)}createRenderRoot(){return this}render(){var e,o;return this.hoverId=(e=this.hoverInteraction)==null?void 0:e.selectedFids[0],this.clickId=(o=this.clickInteraction)==null?void 0:o.selectedFids[0],i`
      <style>
        ${!this.unstyled&&Rt}
      </style>
      <ul class="list-wrap">
        ${this.drawnFeatures.map((a,s)=>{const f=s+1,u=a.get("id"),B=this.hoverId===u,g=this.clickId===u;return Vt(f,i`
              <li
                class="${B||g?"selected":m}"
                @mouseover=${()=>this._handleHoverFeature(u)}
                @mouseout=${()=>this._handleHoverFeature(u,!0)}
              >
                <div
                  class="list"
                  @click="${()=>this._handleFeatureSelectAndDeselect(a)}"
                >
                  <span class="title">Feature #${f}</span>
                  <button
                    index=${s}
                    class="icon smallest discard"
                    @click="${this._handleDelete}"
                  >
                    x
                  </button>
                </div>
              </li>
            `)})}
      </ul>
    `}}p(Ft,"properties",{eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",Ft);const Pt=t=>{const{multipleFeatures:r,drawnFeatures:e,currentlyDrawing:o}=t,a=!r&&(e==null?void 0:e.length)>0||o,s=!(e!=null&&e.length)&&!o;return{drawDisabled:a,discardDisabled:s}},Ut="button,.button { display: inline-flex; position: relative; align-items: center; color: #fff; border-width: 0; outline: none; border-radius: 4px; padding: 16px; height: 36px; cursor: pointer; font-family: inherit; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 1.25px; font-weight: 500; box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); transition-property: box-shadow, transform, opacity, background; transition-duration: 0.28s; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);}button:hover:not([disabled]):not(.icon),.button:hover:not([disabled]):not(.icon) { box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); background: var(--primary-btn-color-hover);}button,button:active,.button,.button:active { background: var(--primary-color);}button[disabled],.button[disabled] { opacity: 0.5; cursor: not-allowed;}button.outline,.button.outline { background: transparent; box-shadow: none; color: var(--primary-color); outline: 1px solid var(--primary-color);}button.outline:hover,.button.outline:hover { background: transparent;}button.icon,.button.icon { background: transparent; border: none; box-shadow: none; padding: 0; border-radius: 50%; width: 24px; height: 24px; text-indent: -9999px;}button.icon-text,.button.icon-text { text-indent: 26px;}button.icon:before,button.icon-text:before,.button.icon:before,.button.icon-text:before { position: absolute; text-indent: 0; line-height: initial;}button.icon:before,.button.icon:before { width: 24px; height: 24px; margin-right: 0;}button.icon-text:before,.button.icon-text:before { width: 18px; height: 18px;}button.small,.button.small { height: 28px; padding: 12.4px; font-size: 0.75rem;}button.smallest.icon,button.smallest.icon::before { height: 16px; width: 16px; padding: 0px;}",Jt="textarea { height: 90px; resize: none; border-radius: 4px; box-sizing: border-box !important; width: 100%; padding: 5px 7px; border: 1px solid var(--secondary-color); font-size: smaller; background: var(--background-color);}";function Nt(t){navigator.clipboard.writeText(t).then(function(){},function(r){console.error("Could not copy text: ",r)})}var M,C;class St extends V{constructor(){super();h(this,M,!0);h(this,C,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.unstyled=!1}updateButtonStates(){const{drawDisabled:e,discardDisabled:o}=Pt(this);y(this,M,e),y(this,C,o)}createRenderRoot(){return this}render(){this.updateButtonStates();const e=this.currentlyDrawing?"drawing":"draw";return i`
      <style>
        ${!this.unstyled&&Ut}
        ${!this.unstyled&&Jt}
      </style>
      <div class="wrap-btn">
        <slot></slot>
        <div>
          <!-- Draw Button -->
          <button
            data-cy="drawBtn"
            class="polygon icon"
            ?disabled="${n(this,M)||m}"
            @click="${()=>this.drawFunc.start()}"
          >
            ${e}
          </button>

          <!-- Discard Button -->
          <button
            data-cy="discardBtn"
            class="discard icon"
            ?disabled="${n(this,C)||m}"
            @click="${()=>this.drawFunc.discard()}"
          >
            discard
          </button>
        </div>

        <!-- Import Button -->
        ${E(this.importFeatures,()=>i`
            <!-- Import Input Field : Hidden -->
            <input
              type="file"
              id="import-file"
              style="display: none;"
              @change=${this.drawFunc.import}
            />

            <!-- Main Import Button -->
            <button
              data-cy="importBtn"
              class="import icon"
              @click=${()=>this.querySelector("#import-file").click()}
            >
              import
            </button>
          `)}
      </div>

      <!-- Geo JSON Wrapper -->
      ${E(this.showEditor,()=>i`
          <div class="json-wrapper">
            <!-- Geo JSON Editor -->
            <textarea
              @drop=${this.drawFunc.import}
              @input=${this.drawFunc.editor}
              .value=${this.geoJSON}
            ></textarea>

            <!-- Geo JSON Copy Button -->
            <button
              data-cy="copyBtn"
              class="icon-copy"
              @click=${()=>Nt(this.geoJSON)}
            >
              ${this.unstyled?"copy":m}
            </button>
          </div>
        `)}
    `}}M=new WeakMap,C=new WeakMap,p(St,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",St);const _t=`
  button.discard:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FF5252' viewBox='0 0 24 24'%3E%3Ctitle%3Etrash-can-outline%3C/title%3E%3Cpath d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' /%3E%3C/svg%3E")
  }
  button.polygon:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-polygon-plus%3C/title%3E%3Cpath d='M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z' /%3E%3C/svg%3E");
  }
  button.import:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eupload%3C/title%3E%3Cpath fill='%23004170' d='M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z' /%3E%3C/svg%3E");
  }
  .wrap-btn {
    display: flex;
    justify-content: space-between;
  }
  eox-drawtools-list {
    width: 100%;
  }
  .json-wrapper {
    margin: 0.4rem 0rem;
    padding: 0.75rem;
    background: var(--secondary-color-hover);
    position: relative;
  }
  .json-wrapper textarea {
    height: 200px;
  }
  .icon-copy {
    position: absolute;
    bottom: 26px;
    right: 26px;
    border-radius: 4px;
    height: 26px;
    padding: 4px 6px;
  }
  .icon-copy:before {
    width: 14px;
    min-width: 14px;
    height: 14px;
    display: flex margin-right: 6px;
    color: white;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Econtent-copy%3C/title%3E%3Cpath d='M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z' fill='white' /%3E%3C/svg%3E")
   }
`,zt=t=>{(()=>{t.emitDrawnFeatures(),t.multipleFeatures||(t.draw.setActive(!1),t.currentlyDrawing=!1)})(),t.requestUpdate()},qt=t=>{const r=()=>{t.drawLayer.set("isDrawingEnabled",!0),t.draw.setActive(!0)},e=()=>{t.currentlyDrawing=!0,t.requestUpdate()};r(),e()},Gt=(t,r)=>{var s;const o=document.querySelector(t.for),a=o.map;return t.drawLayer=o.addOrUpdateLayer({type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:r},source:{type:"Vector"},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:t.type,modify:t.allowModify,stopClick:!0}},{type:"select",options:{id:"selectHover",condition:"pointermove",style:{"fill-color":"rgba(51, 153, 204,0.5)","stroke-color":"#3399CC","stroke-width":2.5}}},{type:"select",options:{id:"selectClick",condition:"click",panIn:!0,style:{"fill-color":"rgba(51, 153, 204,0.5)","stroke-color":"#3399CC","stroke-width":2.5}}}]}),t.draw=o.interactions.drawInteraction,t.modify=o.interactions.drawInteractionmodify,(s=t.modify)==null||s.on("modifyend",()=>t.onModifyEnd()),o.addEventListener("addfeatures",()=>zt(t)),{EoxMap:o,OlMap:a}},Wt=t=>{const r=()=>{t.drawnFeatures=[],t.draw.setActive(!1),t.drawLayer.getSource().clear(),t.geoJSON=null},e=()=>{t.emitDrawnFeatures(),t.currentlyDrawing=!1,t.requestUpdate()};r(),e()},jt=(t,r)=>{setTimeout(()=>{t.drawnFeatures=t.drawLayer.getSource().getFeatures(),t.updateGeoJSON(),t.requestUpdate(),r()},0)};function Yt(t,r){function e(s){s.preventDefault(),s.stopPropagation()}function o(s){s.srcElement.style.opacity="0.4"}function a(s){s.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(s=>{r.addEventListener(s,e,!1),["dragenter","dragover"].includes(s)?r.addEventListener(s,o,!1):r.addEventListener(s,a,!1)}),r.addEventListener("drop",s=>$t(s,t),!1)}function Zt(t){t.preventDefault(),t.stopPropagation()}function $t(t,r){Zt(t);const e=t.dataTransfer?t.dataTransfer.files:t.target.files;Array.from(e).forEach(o=>Qt(o,r))}function Qt(t,r){const e=new FileReader;e.readAsText(t),e.onloadend=function(){typeof e.result=="string"&&r.handleFeatureChange(e.result)}}var l,H,k;class Kt extends V{constructor(){super();h(this,l,void 0);h(this,H,void 0);h(this,k,void 0);this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.modify=null,this.multipleFeatures=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.type="Polygon",this.unstyled=!1,this.noShadow=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},noShadow:{type:Boolean},type:{type:String},unstyled:{type:Boolean}}}handleStartDrawing(){qt(this)}handleDiscardDrawing(){Wt(this)}handleFeatureChange(e,o=!1){n(this,l).parseTextToFeature(e||JSON.stringify(L),this.drawLayer,o)}handleFilesChange(e){$t(e,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){y(this,k,JSON.stringify(n(this,l).parseFeature(this.drawnFeatures)||L,void 0,2))}emitDrawnFeatures(){jt(this,()=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:this.drawnFeatures}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){const{EoxMap:e,OlMap:o}=Gt(this,this.multipleFeatures);y(this,l,e),y(this,H,o),this.importFeatures&&Yt(this,n(this,l)),this.updateGeoJSON(),this.requestUpdate()}render(){var e;return i`
      <style>
        :host { display: block; }
        ${!this.unstyled&&Bt}
        ${!this.unstyled&&_t}
      </style>

      <!-- Controller Component -->
      <eox-drawtools-controller
        .drawFunc=${{start:()=>this.handleStartDrawing(),discard:()=>this.handleDiscardDrawing(),editor:o=>this.handleFeatureChange(o.target.value,!0),import:o=>this.handleFilesChange(o)}}
        .unstyled=${this.unstyled}
        .drawnFeatures=${this.drawnFeatures}
        .currentlyDrawing=${this.currentlyDrawing}
        .multipleFeatures=${this.multipleFeatures}
        .importFeatures=${this.importFeatures}
        .showEditor=${this.showEditor}
        .geoJSON=${n(this,k)}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&((e=this.drawnFeatures)!=null&&e.length)?i`<eox-drawtools-list
            .eoxMap=${n(this,l)}
            .olMap=${n(this,H)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:m}
    `}}l=new WeakMap,H=new WeakMap,k=new WeakMap;customElements.define("eox-drawtools",Kt);const Xt={args:{allowModify:!1,multipleFeatures:!1,type:"Polygon"},render:t=>i`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${c}
      .layers=${d}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "primary" -->
    <eox-drawtools
      for="eox-map#primary"
      .allowModify=${t.allowModify}
      .multipleFeatures=${t.multipleFeatures}
      .type=${t.type}
    />
  `},Tt={render:()=>i`
    <!-- Render a collection of map instances with different drawing types -->
    <div style="display: flex">
      <!-- Iterating over different drawing types -->
      ${Lt.map(({id:t,type:r})=>i`
          <div>
            <!-- Displaying an instance of eox-map -->
            <eox-map
              id=${t}
              style=${c}
              .layers=${d}
            />
            <!-- Displaying the current drawing type -->
            ${r}
            <!-- Configuring eox-drawtools with specified parameters -->
            <eox-drawtools
              for="eox-map#${t}"
              multiple-features
              allow-modify
              type="${r}"
            />
          </div>
        `)}
    </div>
  `},te={render:()=>i`
    <!-- Render eox-map component with ID "multi" -->
    <eox-map
      id="multi"
      style=${c}
      .layers=${d}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "multi" -->
    <eox-drawtools for="eox-map#multi" multiple-features />
  `},ee={render:()=>i`
    <!-- Render eox-map component with ID "modify" -->
    <eox-map
      id="modify"
      style=${c}
      .layers=${d}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "modify" -->
    <eox-drawtools for="eox-map#modify" multiple-features allow-modify />
  `},re={render:()=>i`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="list"
      style=${c}
      .layers=${d}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list" -->
    <eox-drawtools
      for="eox-map#list"
      multiple-features
      show-list
    ></eox-drawtools>
  `},oe={render:()=>i`
    <!-- Render eox-map component with ID "import" -->
    <eox-map
      id="import"
      style="width:100%; height:400px;"
      .layers=${d}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list". "editor" and "import" features -->
    <eox-drawtools
      for="eox-map#import"
      multiple-features
      import-features
      show-editor
      show-list
    ></eox-drawtools>
  `},se={args:{unstyled:!0},render:t=>i`
    <!-- Render eox-map component with ID "unstyled" -->
    <eox-map
      id="unstyled"
      style=${c}
      .layers=${d}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "unstyled" -->
    <eox-drawtools
      for="eox-map#unstyled"
      multiple-features
      show-list
      .unstyled=${t.unstyled}
    />
  `},ie={render:()=>i`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="css-var-override"
      style=${c}
      .layers=${d}
    ></eox-map>
    <eox-drawtools
      for="eox-map#css-var-override"
      multiple-features
      show-list
    ></eox-drawtools>

    <!-- Style overrides -->
    <style>
      html,
      :host,
      :root {
        --eox-secondary-color: #ffa55c;
        --eox-bg-hover-transparency: 20%;
        --eox-color: #ffa55c;
        --eox-body-font-family: "Comic Sans MS", cursive;
      }
    </style>
  `},ge={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},w=Xt,b=te,x=ee,v=Tt,F=re,S=oe,$=ie,I=se;var A,R,P,U,J;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:"PrimaryStory",...(P=(R=w.parameters)==null?void 0:R.docs)==null?void 0:P.source},description:{story:"Primary story showcasing basic usage.",...(J=(U=w.parameters)==null?void 0:U.docs)==null?void 0:J.description}}};var N,_,z,q,G;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:"MultiPolygonStory",...(z=(_=b.parameters)==null?void 0:_.docs)==null?void 0:z.source},description:{story:"By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,\nmultiple polygons can be drawn.",...(G=(q=b.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};var W,j,Y,Z,Q;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:"ModifyFeaturesStory",...(Y=(j=x.parameters)==null?void 0:j.docs)==null?void 0:Y.source},description:{story:"By setting the `allow-modify` attribute or `allowModify` property,\nthe user can modify features after drawing.",...(Q=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:Q.description}}};var K,X,T,tt,et;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:"DrawTypeStory",...(T=(X=v.parameters)==null?void 0:X.docs)==null?void 0:T.source},description:{story:'The `type` attribute/property controls which drawing type is enabled\n(defaults to "Polygon").',...(et=(tt=v.parameters)==null?void 0:tt.docs)==null?void 0:et.description}}};var rt,ot,st,it,at;F.parameters={...F.parameters,docs:{...(rt=F.parameters)==null?void 0:rt.docs,source:{originalSource:"MultiPolygonWithListStory",...(st=(ot=F.parameters)==null?void 0:ot.docs)==null?void 0:st.source},description:{story:"By setting the `show-list` attribute or `showList` property to `true`,\na list of the drawn features will be populated.",...(at=(it=F.parameters)==null?void 0:it.docs)==null?void 0:at.description}}};var nt,lt,dt,pt,ct;S.parameters={...S.parameters,docs:{...(nt=S.parameters)==null?void 0:nt.docs,source:{originalSource:"ImportFeaturesWithEditorStory",...(dt=(lt=S.parameters)==null?void 0:lt.docs)==null?void 0:dt.source},description:{story:"By setting the `show-editor` attribute or `import-features` property to `true`,\ngenerates an editor to edit features and allow users to drag-drop/upload/paste shape files in\n- GeoJSON, TopoJSON and KML format.",...(ct=(pt=S.parameters)==null?void 0:pt.docs)==null?void 0:ct.description}}};var ut,ht,yt,mt,ft;$.parameters={...$.parameters,docs:{...(ut=$.parameters)==null?void 0:ut.docs,source:{originalSource:"CSSVariableOverrideStory",...(yt=(ht=$.parameters)==null?void 0:ht.docs)==null?void 0:yt.source},description:{story:"Override css variable directly using styles.",...(ft=(mt=$.parameters)==null?void 0:mt.docs)==null?void 0:ft.description}}};var gt,wt,bt,xt,vt;I.parameters={...I.parameters,docs:{...(gt=I.parameters)==null?void 0:gt.docs,source:{originalSource:"UnstyledStory",...(bt=(wt=I.parameters)==null?void 0:wt.docs)==null?void 0:bt.source},description:{story:"By setting the `unstyled` attribute or property, the element has no styling applied.",...(vt=(xt=I.parameters)==null?void 0:xt.docs)==null?void 0:vt.description}}};const we=["Primary","MultiPolygon","ModifyFeatures","DrawType","MultiPolygonWithList","ImportFeaturesWithEditor","CSSVariableOverride","Unstyled"];export{$ as CSSVariableOverride,v as DrawType,S as ImportFeaturesWithEditor,x as ModifyFeatures,b as MultiPolygon,F as MultiPolygonWithList,w as Primary,I as Unstyled,we as __namedExportsOrder,ge as default};
