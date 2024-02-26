var It=Object.defineProperty;var Mt=(t,r,e)=>r in t?It(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var c=(t,r,e)=>(Mt(t,typeof r!="symbol"?r+"":r,e),e),D=(t,r,e)=>{if(!r.has(t))throw TypeError("Cannot "+e)};var n=(t,r,e)=>(D(t,r,"read from private field"),e?e.call(t):r.get(t)),h=(t,r,e)=>{if(r.has(t))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(t):r.set(t,e)},y=(t,r,e,o)=>(D(t,r,"write to private field"),o?o.call(t,e):r.set(t,e),e);import{T as m,s as V,x as i}from"./lit-element-uhisBW42.js";import"./main--0l0WmPb.js";import{e as Ct,i as kt,n as E}from"./when-fh6s5Pmf.js";import{m as Ht}from"./directive-helpers-qkjFCehB.js";import"./state-729Pchtv.js";import"./index-EySAwWXj.js";import"./_commonjsHelpers-4gQjN7DL.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=Ct(class extends kt{constructor(){super(...arguments),this.key=m}render(t,r){return this.key=t,r}update(t,[r,e]){return r!==this.key&&(Ht(t),this.key=r),e}}),Vt=t=>{t.hoverInteraction=t.eoxMap.selectInteractions.selectHover,t.clickInteraction=t.eoxMap.selectInteractions.selectClick;const r=()=>{t.requestUpdate()};t.hoverInteraction.selectStyleLayer.on("change",r),t.clickInteraction.selectStyleLayer.on("change",r)},Dt=(t,r,e)=>{if(t.clickId===r)return;const o=e?[]:[r];t.hoverInteraction.highlightById(o)},Et=(t,r)=>{t.stopPropagation();const e=Number(t.target.getAttribute("index")),o=r.drawnFeatures[e];r.drawLayer.getSource().removeFeature(o),r.drawnFeatures.splice(e,1),r.requestUpdate()},d=[{type:"Tile",source:{type:"OSM"}}],p="width: 400px; height: 300px;",Ot=[{id:"box",type:"Box"},{id:"point",type:"Point"},{id:"circle",type:"Circle"},{id:"linestring",type:"LineString"}],O={duration:750},L={type:"FeatureCollection",features:[]},Lt=(t,r)=>{const e=t.get("id"),{clickId:o,drawLayer:s,olMap:a,clickInteraction:g}=r,u=o===e,B=t.getGeometry();if(u){const f=s.getSource().getExtent();a.getView().fit(f,O),g.highlightById([])}else{const f=B.getExtent();g.highlightById([e]),a.getView().fit(f,O)}r.requestUpdate()},Rt="ul.list-wrap { padding: 0;}ul.list-wrap li:hover,ul.list-wrap li.selected { background: var(--secondary-bg-color-hover);}ul.list-wrap li { list-style: none; padding: 4px;}ul.list-wrap li { border-bottom: 1.2px solid var(--secondary-color);}ul.list-wrap li:first-child { border-top: 1.2px solid var(--secondary-color);}ul.list-wrap li .list { width: 100%; align-items: center; justify-content: space-between; display: flex; align-items: center; cursor: pointer; font-size: small; gap: 10px;}ul.list-wrap li .list span { display: flex; align-items: center; cursor: pointer; font-size: small; flex-grow: 1;}";class Ft extends V{constructor(){super();c(this,"hoverInteraction");c(this,"clickInteraction");c(this,"hoverId");c(this,"clickId");this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.modify=null,this.unstyled=!1}_handleDelete(e){Et(e,this),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(e){Lt(e,this)}_handleHoverFeature(e,o=!1){Dt(this,e,o)}firstUpdated(){Vt(this)}createRenderRoot(){return this}render(){var e,o;return this.hoverId=(e=this.hoverInteraction)==null?void 0:e.selectedFids[0],this.clickId=(o=this.clickInteraction)==null?void 0:o.selectedFids[0],i`
      <style>
        ${!this.unstyled&&Rt}
      </style>
      <ul class="list-wrap">
        ${this.drawnFeatures.map((s,a)=>{const g=a+1,u=s.get("id"),B=this.hoverId===u,f=this.clickId===u;return Bt(g,i`
              <li
                class="${B||f?"selected":m}"
                @mouseover=${()=>this._handleHoverFeature(u)}
                @mouseout=${()=>this._handleHoverFeature(u,!0)}
              >
                <div
                  class="list"
                  @click="${()=>this._handleFeatureSelectAndDeselect(s)}"
                >
                  <span class="title">Feature #${g}</span>
                  <button
                    index=${a}
                    class="icon smallest discard"
                    @click="${this._handleDelete}"
                  >
                    x
                  </button>
                </div>
              </li>
            `)})}
      </ul>
    `}}c(Ft,"properties",{eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",Ft);const At=t=>{const{multipleFeatures:r,drawnFeatures:e,currentlyDrawing:o}=t,s=!r&&(e==null?void 0:e.length)>0||o,a=!(e!=null&&e.length)&&!o;return{drawDisabled:s,discardDisabled:a}},zt="button,.button { display: inline-flex; position: relative; align-items: center; color: #fff; border-width: 0; outline: none; border-radius: 4px; padding: 16px; height: 36px; cursor: pointer; font-family: inherit; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 1.25px; font-weight: 500; box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); transition-property: box-shadow, transform, opacity, background; transition-duration: 0.28s; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);}button:hover:not([disabled]):not(.icon),.button:hover:not([disabled]):not(.icon) { box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); background: var(--primary-btn-color-hover);}button,button:active,.button,.button:active { background: var(--primary-color);}button[disabled],.button[disabled] { opacity: 0.5; cursor: not-allowed;}button.outline,.button.outline { background: transparent; box-shadow: none; color: var(--primary-color); outline: 1px solid var(--primary-color);}button.outline:hover,.button.outline:hover { background: transparent;}button.icon,.button.icon { background: transparent; border: none; box-shadow: none; padding: 0; border-radius: 50%; width: 24px; height: 24px; text-indent: -9999px;}button.icon-text,.button.icon-text { text-indent: 26px;}button.icon:before,button.icon-text:before,.button.icon:before,.button.icon-text:before { position: absolute; text-indent: 0; line-height: initial;}button.icon:before,.button.icon:before { width: 24px; height: 24px; margin-right: 0;}button.icon-text:before,.button.icon-text:before { width: 18px; height: 18px;}button.small,.button.small { height: 28px; padding: 12.4px; font-size: 0.75rem;}button.smallest.icon,button.smallest.icon::before { height: 16px; width: 16px; padding: 0px;}",Pt="textarea { height: 90px; resize: none; border-radius: 4px; box-sizing: border-box !important; width: 100%; padding: 5px 7px; border: 1px solid var(--secondary-color); font-size: smaller; background: var(--background-color);}";function Ut(t){navigator.clipboard.writeText(t).then(function(){},function(r){console.error("Could not copy text: ",r)})}var M,C;class St extends V{constructor(){super();h(this,M,!0);h(this,C,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.unstyled=!1}updateButtonStates(){const{drawDisabled:e,discardDisabled:o}=At(this);y(this,M,e),y(this,C,o)}createRenderRoot(){return this}render(){this.updateButtonStates();const e=this.currentlyDrawing?"drawing":"draw";return i`
      <style>
        ${!this.unstyled&&zt}
        ${!this.unstyled&&Pt}
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
              @click=${()=>Ut(this.geoJSON)}
            >
              ${this.unstyled?"copy":m}
            </button>
          </div>
        `)}
    `}}M=new WeakMap,C=new WeakMap,c(St,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",St);const Jt=`
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
`,Nt=t=>{(()=>{t.emitDrawnFeatures(),t.multipleFeatures||(t.draw.setActive(!1),t.currentlyDrawing=!1)})(),t.requestUpdate()},_t=t=>{const r=()=>{t.drawLayer.set("isDrawingEnabled",!0),t.draw.setActive(!0)},e=()=>{t.currentlyDrawing=!0,t.requestUpdate()};r(),e()},qt=(t,r)=>{var a;const o=document.querySelector(t.for),s=o.map;return t.drawLayer=o.addOrUpdateLayer({type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:r},source:{type:"Vector"},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:t.type,modify:t.allowModify,stopClick:!0}},{type:"select",options:{id:"selectHover",condition:"pointermove",style:{"fill-color":"rgba(51, 153, 204,0.5)","stroke-color":"#3399CC","stroke-width":2.5}}},{type:"select",options:{id:"selectClick",condition:"click",panIn:!0,style:{"fill-color":"rgba(51, 153, 204,0.5)","stroke-color":"#3399CC","stroke-width":2.5}}}]}),t.draw=o.interactions.drawInteraction,t.modify=o.interactions.drawInteractionmodify,(a=t.modify)==null||a.on("modifyend",()=>t.onModifyEnd()),o.addEventListener("addfeatures",()=>Nt(t)),{EoxMap:o,OlMap:s}},Gt=t=>{const r=()=>{t.drawnFeatures=[],t.draw.setActive(!1),t.drawLayer.getSource().clear(),t.geoJSON=null},e=()=>{t.emitDrawnFeatures(),t.currentlyDrawing=!1,t.requestUpdate()};r(),e()},Wt=(t,r)=>{setTimeout(()=>{t.drawnFeatures=t.drawLayer.getSource().getFeatures(),t.updateGeoJSON(),t.requestUpdate(),r()},0)},jt=':root,:host { --spacing: 1rem; --block-spacing-vertical: calc(var(--spacing) * 2); --block-spacing-horizontal: var(--spacing); --background-color: var(--eox-background-color, white); --color: var(--eox-color, #2c3d49); --h-color: var(--eox-h-color, var(--color)); --hover-transparency: var(--eox-hover-transparency, 20%); --bg-hover-transparency: var(--eox-bg-hover-transparency, 40%); --btn-hover-transparency: var(--eox-btn-hover-transparency, 80%); --primary-color: var(--eox-primary-color, #004170); --primary-color-hover: color-mix( in srgb, var(--primary-color) var(--hover-transparency), transparent ); --primary-bg-color-hover: color-mix( in srgb, var(--primary-color) var(--bg-hover-transparency), transparent ); --primary-btn-color-hover: color-mix( in srgb, var(--primary-color) var(--btn-hover-transparency), transparent ); --secondary-color: var(--eox-secondary-color, #c6d4df); --secondary-color-hover: color-mix( in srgb, var(--secondary-color) var(--hover-transparency), transparent ); --secondary-bg-color-hover: color-mix( in srgb, var(--secondary-color) var(--bg-hover-transparency), transparent ); --secondary-btn-color-hover: color-mix( in srgb, var(--secondary-color) var(--btn-hover-transparency), transparent ); --success: var(--eox-success, #26cc0f); --warning: var(--eox-warning, #f18e32); --error: var(--eox-error, #ff5252); --header-font-family: var(--eox-header-font-family, "Roboto", sans-serif); --body-font-family: var(--eox-body-font-family, "Roboto", sans-serif);}* { font-family: var(--body-font-family); color: var(--eox-color);}h1,h2,h3,h4,h5,h6 { font-family: var(--header-font-family);}span,p,div,main,label { font-family: var(--body-font-family);}@media (min-width: 576px) { .container { max-width: 510px; padding-right: 0; padding-left: 0; --block-spacing-vertical: calc(var(--spacing) * 2.5); }}@media (min-width: 768px) { .container { max-width: 700px; --block-spacing-vertical: calc(var(--spacing) * 3); }}@media (min-width: 992px) { .container { max-width: 920px; --block-spacing-vertical: calc(var(--spacing) * 3.5); }}@media (min-width: 1200px) { .container { max-width: 1130px; --block-spacing-vertical: calc(var(--spacing) * 4); }}.container { width: 100%; margin-right: auto; margin-left: auto; display: block; padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);}h1,h2,h3 { line-height: 120%; margin-top: 0.8rem; margin-bottom: 0.8rem;}p { font-weight: 400; line-height: 170%; margin-top: 0.8rem; margin-bottom: 1.6rem;}body { padding: 0; margin: 0;}.sb-show-main.sb-main-padded { padding: 0;}h1,h2,h3,h4,h5,h6 { --font-weight: 700;}h1 { --font-size: 3rem; --typography-spacing-vertical: 0.5rem;}h2 { --font-size: 2rem; --typography-spacing-vertical: 0.5rem;}h3 { --font-size: 1.75rem; --typography-spacing-vertical: 0.5rem;}h4 { --font-size: 1.5rem; --typography-spacing-vertical: 0.5rem;}h5 { --font-size: 1.25rem; --typography-spacing-vertical: 0.5rem;}h1,h2,h3,h4,h5,h6 { margin-top: 0; margin-bottom: var(--typography-spacing-vertical); color: var(--h-color); font-weight: var(--font-weight); font-size: var(--font-size); font-family: var(--header-font-family);}';function Yt(t,r){function e(a){a.preventDefault(),a.stopPropagation()}function o(a){a.srcElement.style.opacity="0.4"}function s(a){a.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(a=>{r.addEventListener(a,e,!1),["dragenter","dragover"].includes(a)?r.addEventListener(a,o,!1):r.addEventListener(a,s,!1)}),r.addEventListener("drop",a=>$t(a,t),!1)}function Zt(t){t.preventDefault(),t.stopPropagation()}function $t(t,r){Zt(t);const e=t.dataTransfer?t.dataTransfer.files:t.target.files;Array.from(e).forEach(o=>Qt(o,r))}function Qt(t,r){const e=new FileReader;e.readAsText(t),e.onloadend=function(){typeof e.result=="string"&&r.handleFeatureChange(e.result)}}var l,k,H;class Kt extends V{constructor(){super();h(this,l,void 0);h(this,k,void 0);h(this,H,void 0);this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.modify=null,this.multipleFeatures=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.type="Polygon",this.unstyled=!1,this.noShadow=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},noShadow:{type:Boolean},type:{type:String},unstyled:{type:Boolean}}}handleStartDrawing(){_t(this)}handleDiscardDrawing(){Gt(this)}handleFeatureChange(e,o=!1){n(this,l).parseTextToFeature(e||JSON.stringify(L),this.drawLayer,o)}handleFilesChange(e){$t(e,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){y(this,H,JSON.stringify(n(this,l).parseFeature(this.drawnFeatures)||L,void 0,2))}emitDrawnFeatures(){Wt(this,()=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:this.drawnFeatures}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){const{EoxMap:e,OlMap:o}=qt(this,this.multipleFeatures);y(this,l,e),y(this,k,o),this.importFeatures&&Yt(this,n(this,l)),this.updateGeoJSON(),this.requestUpdate()}render(){var e;return i`
      <style>
        :host { display: block; }
        ${!this.unstyled&&jt}
        ${!this.unstyled&&Jt}
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
        .geoJSON=${n(this,H)}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&((e=this.drawnFeatures)!=null&&e.length)?i`<eox-drawtools-list
            .eoxMap=${n(this,l)}
            .olMap=${n(this,k)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:m}
    `}}l=new WeakMap,k=new WeakMap,H=new WeakMap;customElements.define("eox-drawtools",Kt);const Xt={args:{allowModify:!1,multipleFeatures:!1,type:"Polygon"},render:t=>i`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${p}
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
      ${Ot.map(({id:t,type:r})=>i`
          <div>
            <!-- Displaying an instance of eox-map -->
            <eox-map
              id=${t}
              style=${p}
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
      style=${p}
      .layers=${d}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "multi" -->
    <eox-drawtools for="eox-map#multi" multiple-features />
  `},ee={render:()=>i`
    <!-- Render eox-map component with ID "modify" -->
    <eox-map
      id="modify"
      style=${p}
      .layers=${d}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "modify" -->
    <eox-drawtools for="eox-map#modify" multiple-features allow-modify />
  `},re={render:()=>i`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="list"
      style=${p}
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
  `},ae={args:{unstyled:!0},render:t=>i`
    <!-- Render eox-map component with ID "unstyled" -->
    <eox-map
      id="unstyled"
      style=${p}
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
      style=${p}
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
  `},ge={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},w=Xt,b=te,x=ee,v=Tt,F=re,S=oe,$=ie,I=ae;var R,A,z,P,U;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:"PrimaryStory",...(z=(A=w.parameters)==null?void 0:A.docs)==null?void 0:z.source},description:{story:"Primary story showcasing basic usage.",...(U=(P=w.parameters)==null?void 0:P.docs)==null?void 0:U.description}}};var J,N,_,q,G;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:"MultiPolygonStory",...(_=(N=b.parameters)==null?void 0:N.docs)==null?void 0:_.source},description:{story:"By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,\nmultiple polygons can be drawn.",...(G=(q=b.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};var W,j,Y,Z,Q;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:"ModifyFeaturesStory",...(Y=(j=x.parameters)==null?void 0:j.docs)==null?void 0:Y.source},description:{story:"By setting the `allow-modify` attribute or `allowModify` property,\nthe user can modify features after drawing.",...(Q=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:Q.description}}};var K,X,T,tt,et;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:"DrawTypeStory",...(T=(X=v.parameters)==null?void 0:X.docs)==null?void 0:T.source},description:{story:'The `type` attribute/property controls which drawing type is enabled\n(defaults to "Polygon").',...(et=(tt=v.parameters)==null?void 0:tt.docs)==null?void 0:et.description}}};var rt,ot,at,it,st;F.parameters={...F.parameters,docs:{...(rt=F.parameters)==null?void 0:rt.docs,source:{originalSource:"MultiPolygonWithListStory",...(at=(ot=F.parameters)==null?void 0:ot.docs)==null?void 0:at.source},description:{story:"By setting the `show-list` attribute or `showList` property to `true`,\na list of the drawn features will be populated.",...(st=(it=F.parameters)==null?void 0:it.docs)==null?void 0:st.description}}};var nt,lt,dt,ct,pt;S.parameters={...S.parameters,docs:{...(nt=S.parameters)==null?void 0:nt.docs,source:{originalSource:"ImportFeaturesWithEditorStory",...(dt=(lt=S.parameters)==null?void 0:lt.docs)==null?void 0:dt.source},description:{story:"By setting the `show-editor` attribute or `import-features` property to `true`,\ngenerates an editor to edit features and allow users to drag-drop/upload/paste shape files in\n- GeoJSON, TopoJSON and KML format.",...(pt=(ct=S.parameters)==null?void 0:ct.docs)==null?void 0:pt.description}}};var ut,ht,yt,mt,gt;$.parameters={...$.parameters,docs:{...(ut=$.parameters)==null?void 0:ut.docs,source:{originalSource:"CSSVariableOverrideStory",...(yt=(ht=$.parameters)==null?void 0:ht.docs)==null?void 0:yt.source},description:{story:"Override css variable directly using styles.",...(gt=(mt=$.parameters)==null?void 0:mt.docs)==null?void 0:gt.description}}};var ft,wt,bt,xt,vt;I.parameters={...I.parameters,docs:{...(ft=I.parameters)==null?void 0:ft.docs,source:{originalSource:"UnstyledStory",...(bt=(wt=I.parameters)==null?void 0:wt.docs)==null?void 0:bt.source},description:{story:"By setting the `unstyled` attribute or property, the element has no styling applied.",...(vt=(xt=I.parameters)==null?void 0:xt.docs)==null?void 0:vt.description}}};const fe=["Primary","MultiPolygon","ModifyFeatures","DrawType","MultiPolygonWithList","ImportFeaturesWithEditor","CSSVariableOverride","Unstyled"];export{$ as CSSVariableOverride,v as DrawType,S as ImportFeaturesWithEditor,x as ModifyFeatures,b as MultiPolygon,F as MultiPolygonWithList,w as Primary,I as Unstyled,fe as __namedExportsOrder,ge as default};
