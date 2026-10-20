import{n as e,o as t,r as n,t as r}from"./rolldown-runtime-C0FnF6B9.js";import{a as i,c as a,d as o,h as s,l as c,n as l,o as u,t as d,u as f}from"./lit-D8IuYOuz.js";import{Cn as p,Sn as m,a as h,bn as g,gn as _,r as v,s as y,t as b,xn as x,yn as S}from"./live-CHJmeIfp.js";import{Ar as ee,Ci as te,Di as C,Ei as w,Fr as ne,Gr as re,Hr as ie,Jr as ae,Lr as oe,Oi as se,Pr as ce,Rr as le,Si as ue,Ti as de,Ur as fe,Vr as pe,Wr as me,ai as he,bi as ge,ci as _e,ei as ve,ii as ye,jr as be,li as xe,ni as Se,oi as Ce,or as we,ri as Te,si as Ee,sr as De,ti as Oe,wi as ke,xi as Ae,yi as je,zr as Me}from"./helpers-qJ6KI4_k.js";import{A as Ne,O as Pe,h as Fe,k as Ie,x as Le}from"./proj4-CrYY1hja.js";import{Nn as Re,jn as ze}from"./DataTile-DV2U8rgA.js";import{it as Be,st as Ve}from"./main-BdlCXPot.js";var He;function Ue(){return(Ue=e((()=>{c(),Ae(),S(),He=je(class extends ge{constructor(){super(...arguments),this.key=i}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(g(e),this.key=t),n}})})))()}function We(){return(We=e((()=>{Ue()})))()}var Ge;function Ke(){return(Ke=e((()=>{Ge=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.SelectLayerHoverInteraction,e.clickInteraction=e.eoxMap.selectInteractions.SelectLayerClickInteraction;let t=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on(`change`,t),e.clickInteraction.selectStyleLayer.on(`change`,t)}})))()}var qe;function Je(){return(Je=e((()=>{qe=(e,t,n)=>{if(e.clickId===t)return;let r=n?[]:[t];e.hoverInteraction.highlightById(r)}})))()}var Ye;function Xe(){return(Xe=e((()=>{Ye=(e,t,n)=>{e.stopPropagation();let r=Number(e.target.getAttribute(`index`)),i=t.drawLayer.getSource().getFeatures()[r];t.drawLayer.getSource().removeFeature(i),t.drawnFeatures.splice(r,1),n.emitDrawnFeatures(),t.requestUpdate()}})))()}var Ze,Qe;function $e(){return($e=e((()=>{Ze={duration:750,padding:[20,20,20,20]},Qe={type:`FeatureCollection`,features:[]}})))()}var et;function tt(){return(tt=e((()=>{$e(),et=(e,t)=>{let{clickId:n,drawLayer:r,olMap:i,clickInteraction:a}=t,o=a.getId(e);if(n===o){let e=r.getSource().getExtent();i.getView().fit(e,Ze),a.highlightById([])}else{let n=t.eoxMap.projection||`EPSG:3857`,r=t.eoxDrawTools.projection,s=e.clone().getGeometry().transform(r,n).getExtent();a.highlightById([o]),i.getView().fit(s,Ze)}t.requestUpdate()}})))()}var nt;function rt(){return(rt=e((()=>{d(),We(),Xe(),Ke(),Je(),tt(),nt=class extends l{static properties={eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}};hoverInteraction;clickInteraction;hoverId;clickId;constructor(){super(),this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName=`Feature`,this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(e){Ye(e,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent(`changed`,{bubbles:!0}))}_handleFeatureSelectAndDeselect(e){et(e,this)}_handleHoverFeature(e,t=!1){qe(this,e,t)}firstUpdated(){Ge(this)}createRenderRoot(){return this}render(){this.hoverId=this.hoverInteraction?.selectedFids[0],this.clickId=this.clickInteraction?.selectedFids[0];let e=o`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return o`
      <ul class="list no-space">
        ${this.drawnFeatures.map((t,n)=>{let r=n+1,a=Object.values(this.eoxMap.selectInteractions)[0].getId(t),s=this.hoverId===a,c=this.clickId===a,l=s?`surface-container-low`:c?`fill`:i,u=this.featureNameKey?.split(`.`),d=t.get(this.featureNameKey)||u?.reduce((e,t)=>e?.[t],{...t.getProperties()})||`${this.featureName} ${r}`;return He(r,o`
              <li
                class="${l} no-round"
                @mouseover=${()=>this._handleHoverFeature(a)}
                @mouseout=${()=>this._handleHoverFeature(a,!0)}
                @click="${()=>this._handleFeatureSelectAndDeselect(t)}"
              >
                <div class="max">
                  <span class="title">${d}</span>
                </div>
                <button
                  index=${n}
                  data-cy="deleteFeatureBtn"
                  class="transparent square small error-text front"
                  @click="${this._handleDelete}"
                >
                  ${this.unstyled?`x`:o`<i class="small">${e}</i>`}
                </button>
              </li>
            `)})}
      </ul>
    `}},customElements.define(`eox-drawtools-list`,nt)})))()}var it;function at(){return(at=e((()=>{it=e=>{let{multipleFeatures:t,drawnFeatures:n,currentlyDrawing:r}=e;return{drawDisabled:!t&&n?.length>0||r,discardDisabled:!n?.length&&!r}}})))()}function ot(e){navigator.clipboard.writeText(e).then(function(){},function(e){console.error(`Could not copy text: `,e)})}var st;function ct(){return(ct=e((()=>{be(),st=(e,t)=>new ee().writeFeaturesObject(e,t)})))()}function lt(e){return typeof e==`string`?e:``}var ut;function dt(){return(dt=e((()=>{ne(),Re(),ut=class extends ce{constructor(){super()}getType(){return`text`}readFeature(e,t){return this.readFeatureFromText(lt(e),this.adaptOptions(t))}readFeatureFromText(e,t){return ze()}readFeatures(e,t){return this.readFeaturesFromText(lt(e),this.adaptOptions(t))}readFeaturesFromText(e,t){return ze()}readGeometry(e,t){return this.readGeometryFromText(lt(e),this.adaptOptions(t))}readGeometryFromText(e,t){return ze()}readProjection(e){return this.readProjectionFromText(lt(e))}readProjectionFromText(e){return this.dataProjection}writeFeature(e,t){return this.writeFeatureText(e,this.adaptOptions(t))}writeFeatureText(e,t){return ze()}writeFeatures(e,t){return this.writeFeaturesText(e,this.adaptOptions(t))}writeFeaturesText(e,t){return ze()}writeGeometry(e,t){return this.writeGeometryText(e,this.adaptOptions(t))}writeGeometryText(e,t){return ze()}}})))()}function ft(e){let t=e.getCoordinates();return t.length===0?``:t.join(` `)}function pt(e){let t=[],n=e.getPoints();for(let e=0,r=n.length;e<r;++e)t.push(`(`+ft(n[e])+`)`);return t.join(`,`)}function mt(e){let t=[],n=e.getGeometries();for(let e=0,r=n.length;e<r;++e)t.push(bt(n[e]));return t.join(`,`)}function ht(e){let t=e.getCoordinates(),n=[];for(let e=0,r=t.length;e<r;++e)n.push(t[e].join(` `));return n.join(`,`)}function gt(e){let t=[],n=e.getLineStrings();for(let e=0,r=n.length;e<r;++e)t.push(`(`+ht(n[e])+`)`);return t.join(`,`)}function _t(e){let t=[],n=e.getLinearRings();for(let e=0,r=n.length;e<r;++e)t.push(`(`+ht(n[e])+`)`);return t.join(`,`)}function vt(e){let t=[],n=e.getPolygons();for(let e=0,r=n.length;e<r;++e)t.push(`(`+_t(n[e])+`)`);return t.join(`,`)}function yt(e){let t=e.getLayout(),n=``;return(t===`XYZ`||t===`XYZM`)&&(n+=Ct),(t===`XYM`||t===`XYZM`)&&(n+=wt),n}function bt(e){let t=e.getType(),n=At[t],r=n(e),i=Et[t];if(typeof e.getFlatCoordinates==`function`){let t=yt(e);t.length>0&&(i+=` `+t)}return r.length===0?i+` EMPTY`:i+`(`+r+`)`}var xt,St,Ct,wt,Tt,T,Et,Dt,Ot,kt,At;function jt(){return(jt=e((()=>{xe(),Me(),Ee(),he(),Oe(),me(),Te(),ae(),Le(),ne(),dt(),xt={POINT:Se,LINESTRING:Ce,POLYGON:re,MULTIPOINT:ve,MULTILINESTRING:ye,MULTIPOLYGON:fe},St=`EMPTY`,Ct=`Z`,wt=`M`,Tt=`ZM`,T={START:0,TEXT:1,LEFT_PAREN:2,RIGHT_PAREN:3,NUMBER:4,COMMA:5,EOF:6},Et={Point:`POINT`,LineString:`LINESTRING`,Polygon:`POLYGON`,MultiPoint:`MULTIPOINT`,MultiLineString:`MULTILINESTRING`,MultiPolygon:`MULTIPOLYGON`,GeometryCollection:`GEOMETRYCOLLECTION`,Circle:`CIRCLE`},Dt=class{constructor(e){this.wkt=e,this.index_=-1}isAlpha_(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`}isNumeric_(e,t){return t=t!==void 0&&t,e>=`0`&&e<=`9`||e==`.`&&!t}isWhiteSpace_(e){return e==` `||e==`	`||e==`\r`||e==`
`}nextChar_(){return this.wkt.charAt(++this.index_)}nextToken(){let e=this.nextChar_(),t=this.index_,n=e,r;if(e==`(`)r=T.LEFT_PAREN;else if(e==`,`)r=T.COMMA;else if(e==`)`)r=T.RIGHT_PAREN;else if(this.isNumeric_(e)||e==`-`)r=T.NUMBER,n=this.readNumber_();else if(this.isAlpha_(e))r=T.TEXT,n=this.readText_();else if(this.isWhiteSpace_(e))return this.nextToken();else if(e===``)r=T.EOF;else throw Error(`Unexpected character: `+e);return{position:t,value:n,type:r}}readNumber_(){let e,t=this.index_,n=!1,r=!1;do e==`.`?n=!0:(e==`e`||e==`E`)&&(r=!0),e=this.nextChar_();while(this.isNumeric_(e,n)||!r&&(e==`e`||e==`E`)||r&&(e==`-`||e==`+`));return parseFloat(this.wkt.substring(t,this.index_--))}readText_(){let e,t=this.index_;do e=this.nextChar_();while(this.isAlpha_(e));return this.wkt.substring(t,this.index_--).toUpperCase()}},Ot=class{constructor(e){this.lexer_=e,this.token_={position:0,type:T.START},this.layout_=`XY`}consume_(){this.token_=this.lexer_.nextToken()}isTokenType(e){return this.token_.type==e}match(e){let t=this.isTokenType(e);return t&&this.consume_(),t}parse(){return this.consume_(),this.parseGeometry_()}parseGeometryLayout_(){let e=`XY`,t=this.token_;if(this.isTokenType(T.TEXT)){let n=t.value;n===Ct?e=`XYZ`:n===wt?e=`XYM`:n===Tt&&(e=`XYZM`),e!==`XY`&&this.consume_()}return e}parseGeometryCollectionText_(){if(this.match(T.LEFT_PAREN)){let e=[];do e.push(this.parseGeometry_());while(this.match(T.COMMA));if(this.match(T.RIGHT_PAREN))return e}throw Error(this.formatErrorMessage_())}parsePointText_(){if(this.match(T.LEFT_PAREN)){let e=this.parsePoint_();if(this.match(T.RIGHT_PAREN))return e}throw Error(this.formatErrorMessage_())}parseLineStringText_(){if(this.match(T.LEFT_PAREN)){let e=this.parsePointList_();if(this.match(T.RIGHT_PAREN))return e}throw Error(this.formatErrorMessage_())}parsePolygonText_(){if(this.match(T.LEFT_PAREN)){let e=this.parseLineStringTextList_();if(this.match(T.RIGHT_PAREN))return e}throw Error(this.formatErrorMessage_())}parseMultiPointText_(){if(this.match(T.LEFT_PAREN)){let e;if(e=this.token_.type==T.LEFT_PAREN?this.parsePointTextList_():this.parsePointList_(),this.match(T.RIGHT_PAREN))return e}throw Error(this.formatErrorMessage_())}parseMultiLineStringText_(){if(this.match(T.LEFT_PAREN)){let e=this.parseLineStringTextList_();if(this.match(T.RIGHT_PAREN))return e}throw Error(this.formatErrorMessage_())}parseMultiPolygonText_(){if(this.match(T.LEFT_PAREN)){let e=this.parsePolygonTextList_();if(this.match(T.RIGHT_PAREN))return e}throw Error(this.formatErrorMessage_())}parsePoint_(){let e=[],t=this.layout_.length;for(let n=0;n<t;++n){let t=this.token_;if(this.match(T.NUMBER))e.push(t.value);else break}if(e.length==t)return e;throw Error(this.formatErrorMessage_())}parsePointList_(){let e=[this.parsePoint_()];for(;this.match(T.COMMA);)e.push(this.parsePoint_());return e}parsePointTextList_(){let e=[this.parsePointText_()];for(;this.match(T.COMMA);)e.push(this.parsePointText_());return e}parseLineStringTextList_(){let e=[this.parseLineStringText_()];for(;this.match(T.COMMA);)e.push(this.parseLineStringText_());return e}parsePolygonTextList_(){let e=[this.parsePolygonText_()];for(;this.match(T.COMMA);)e.push(this.parsePolygonText_());return e}isEmptyGeometry_(){let e=this.isTokenType(T.TEXT)&&this.token_.value==St;return e&&this.consume_(),e}formatErrorMessage_(){return"Unexpected `"+this.token_.value+"` at position "+this.token_.position+" in `"+this.lexer_.wkt+"`"}parseGeometry_(){let e=this.token_;if(this.match(T.TEXT)){let t=e.value;this.layout_=this.parseGeometryLayout_();let n=this.isEmptyGeometry_();if(t==`GEOMETRYCOLLECTION`){if(n)return new le([]);let e=this.parseGeometryCollectionText_();return new le(e)}let r=xt[t];if(!r)throw Error(`Invalid geometry type: `+t);let i;if(n)i=t==`POINT`?[NaN,NaN]:[];else switch(t){case`POINT`:i=this.parsePointText_();break;case`LINESTRING`:i=this.parseLineStringText_();break;case`POLYGON`:i=this.parsePolygonText_();break;case`MULTIPOINT`:i=this.parseMultiPointText_();break;case`MULTILINESTRING`:i=this.parseMultiLineStringText_();break;case`MULTIPOLYGON`:i=this.parseMultiPolygonText_()}return new r(i??[],this.layout_)}throw Error(this.formatErrorMessage_())}},kt=class extends ut{constructor(e){super(),e||={},this.splitCollection_=e.splitCollection!==void 0&&e.splitCollection,this.dataProjection=Fe(e.dataProjection)??void 0,this.defaultFeatureProjection=Fe(e.featureProjection)??void 0}parse_(e){let t=new Dt(e);return new Ot(t).parse()}readFeatureFromText(e,t){let n=this.readGeometryFromText(e,t),r=new _e;return r.setGeometry(n),r}readFeaturesFromText(e,t){let n=[],r=this.readGeometryFromText(e,t);n=this.splitCollection_&&r.getType()==`GeometryCollection`?r.getGeometriesArray():[r];let i=[];for(let e=0,t=n.length;e<t;++e){let t=new _e;t.setGeometry(n[e]),i.push(t)}return i}readGeometryFromText(e,t){let n=this.parse_(e);return oe(n,!1,t)}writeFeatureText(e,t){let n=e.getGeometry();return n?this.writeGeometryText(n,t):``}writeFeaturesText(e,t){if(e.length==1)return this.writeFeatureText(e[0],t);let n=[];for(let t=0,r=e.length;t<r;++t){let r=e[t].getGeometry();r&&n.push(r)}let r=new le(n);return this.writeGeometryText(r,t)}writeGeometryText(e,t){return bt(oe(e,!0,t))}},At={Point:ft,LineString:ht,Polygon:_t,MultiPoint:pt,MultiLineString:gt,MultiPolygon:vt,GeometryCollection:mt}})))()}var Mt;function Nt(){return(Nt=e((()=>{jt(),Mt=(e,t)=>new kt().writeFeatures(e,t)})))()}var Pt;function Ft(){return(Ft=e((()=>{d(),at(),Pt=class extends l{static properties={multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:`import-features`,type:Boolean},showEditor:{attribute:`show-editor`,type:Boolean},geoJSON:{attribute:`geo-json`,type:String},type:{attribute:`type`,type:String},unstyled:{type:Boolean}};#e=!0;#t=!0;constructor(){super(),this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON=``,this.type=`Polygon`,this.unstyled=!1,this.select=!1}updateButtonStates(){let{drawDisabled:e,discardDisabled:t}=it(this);this.#e=e,this.#t=t}createRenderRoot(){return this}render(){this.updateButtonStates();let e=this.currentlyDrawing?`drawing`:`draw`,t={Polygon:o`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>shape-polygon-plus</title>
        <path
          d="M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z"
        />
      </svg>`,Point:o`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-point-plus</title>
          <path
            d="M9 9V15H15V9H9M11 11H13V13H11V11M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"
          />
        </svg>
      `,Circle:o`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-circle-plus</title>
          <path
            d="M11,19A6,6 0 0,0 17,13H19A8,8 0 0,1 11,21A8,8 0 0,1 3,13A8,8 0 0,1 11,5V7A6,6 0 0,0 5,13A6,6 0 0,0 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z"
          />
        </svg>
      `,LineString:o`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-polyline-plus</title>
          <path
            d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3H2M4 5H6V7H4V5M18 7H20V9H18V7M18 15V18H15V20H18V23H20V20H23V18H20V15H18M8 17H10V19H8V17Z"
          />
        </svg>
      `,Box:o`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-rectangle-plus</title>
          <path
            d="M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z"
          />
        </svg>
      `},n=o`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>cursor-default-click</title>
      <path
        d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10"
      />
    </svg>`,r=o`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`,a=o`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>pencil-outline</title>
      <path
        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
      />
    </svg>`,s=o`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>import</title>
      <path
        d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"
      />
    </svg>`,c=o`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>content-copy</title>
      <path
        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
      />
    </svg>`;return o`
      <nav>
        <slot></slot>
        <div class="max">
          <!-- Draw Button -->
          <button
            data-cy="drawBtn"
            class="transparent square primary-text no-margin small"
            title="${this.unstyled?this.select?`Select`:`Draw`:``}"
            ?disabled="${this.#e||i}"
            @click="${()=>this.drawFunc.start()}"
          >
            ${this.unstyled?e:o`
                  <i class="small"
                    >${this.select?n:t[this.type]}</i
                  >
                  <span class="tooltip bottom">
                    ${this.select?`Select`:`Draw`}
                  </span>
                `}
          </button>

          <!-- Discard Button -->
          <button
            data-cy="discardBtn"
            class="transparent square error-text no-margin small"
            title="${this.unstyled?`Discard`:``}"
            ?disabled="${this.#t||i}"
            @click="${()=>this.drawFunc.discard()}"
          >
            ${this.unstyled?`discard`:o`
                  <i class="small">${r}</i>
                  <span class="tooltip bottom">Discard</span>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${y(this.showEditor,()=>o`
            <button
              data-cy="editorBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?`Edit features`:``}"
              @click=${()=>this.renderRoot.querySelector(`#editor`).classList.toggle(`hidden`)}
            >
              ${this.unstyled?`import`:o`
                    <i class="small">${a}</i>
                    <span class="tooltip bottom">Edit features</span>
                  `}
            </button>
          `)}

        <!-- Import Button -->
        ${y(this.importFeatures,()=>o`
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
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?`Import features`:``}"
              @click=${()=>this.querySelector(`#import-file`).click()}
            >
              ${this.unstyled?`import`:o`
                    <i class="small">${s}</i>
                    <span class="tooltip bottom">Import features</span>
                  `}
            </button>
          `)}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${y(this.showEditor,()=>o`
          <div id="editor" class="field border extra hidden">
            <!-- Geo JSON Editor -->
            <textarea
              style="font-family: monospace; font-size: small; line-height: 1.4; padding: 0.4rem;"
              @drop=${this.drawFunc.import}
              @input=${this.drawFunc.editor}
              .value=${this.geoJSON}
            ></textarea>

            <!-- Geo JSON Copy Button -->
            <button
              data-cy="copyBtn"
              class="circle absolute bottom right medium-margin aloha"
              style="z-index: 1"
              @click=${()=>ot(this.geoJSON)}
            >
              ${this.unstyled?`copy`:o`
                    <i class="tiny">${c}</i>
                    <span class="tooltip top">Copy</span>
                  `}
            </button>
          </div>
        `)}
    `}},customElements.define(`eox-drawtools-controller`,Pt)})))()}var It;function Lt(){return(Lt=e((()=>{C(),w(),de(),It=`
  ${se}
  :host {
    --padding: 0.5rem;
  }
  .drawtitle {
    padding-left: var(--padding);
    padding-right: var(--padding);
  }
  .hidden {
    display: none;
  }
`})))()}var Rt;function zt(){return(zt=e((()=>{Rt=e=>{(()=>{if(e.emitDrawnFeatures(),!e.multipleFeatures)e.draw?.setActive(!1),e.selectionEvents.removeSelectionEvent(),e.currentlyDrawing=!1;else if(e.continuous){if(!e.layerId)e.drawLayer.getSource().clear(),e.drawnFeatures=[];else{let t=e.drawLayer.getSource().getFeatures().at(-1);if(e.drawLayer.getSource().clear(),!t)return;e.drawLayer.getSource().addFeature(t),e.drawnFeatures=[t]}}})(),e.requestUpdate()}})))()}var Bt;function Vt(){return(Vt=e((()=>{Bt=e=>{e.drawLayer.set(`isDrawingEnabled`,!0),e.draw?.setActive(!0),e.selectionEvents.addSelectionEvent(),e.currentlyDrawing=!0,e.requestUpdate()}})))()}function Ht(e,t,n){let r=e.findIndex(e=>e.properties.id===t);if(r!==-1)return e.splice(r,1,...n),e;for(let r of e)if(r.type===`Group`){let e=Ht(r.layers,t,n);e?.length&&(r.layers=e)}return e}var Ut;function Wt(){return(Wt=e((()=>{Ut=(e,t,n)=>{if(!n||!t)return;let r=t.getLayerById(n),i=r?JSON.parse(JSON.stringify(r.get(`_jsonDefinition`))):null;if(!i){console.error(`Layer with id ${n} not found`);return}i.interactions=[{type:`select`,active:!1,options:{id:`SelectLayerHoverInteraction`,condition:`pointermove`,active:!1,style:e.featureStyles?.hover||{"fill-color":`rgba(0, 0, 0,0.0)`,"stroke-color":`#3399CC`,"stroke-width":2.5}}},{type:`select`,options:{id:`SelectLayerClickInteraction`,condition:`click`,multi:e.multipleFeatures,modify:e.allowModify,active:!1,style:e.featureStyles?.click||{"fill-color":`rgba(0, 0, 0,0.0)`,"stroke-color":`rgba(0, 0, 0,0.0)`}}}],t.addOrUpdateLayer(i),Ht(t.layers,n,[i]);let a=e.draw;e.draw=t.selectInteractions.SelectLayerClickInteraction,a?.setActive(!1),t.selectInteractions.SelectLayerClickInteraction?.setActive(!1),t.selectInteractions.SelectLayerHoverInteraction?.setActive(!1)}})))()}var Gt,Kt;function qt(){return(qt=e((()=>{Ne(),Gt=e=>{let t=e.getGeometry();if(!t)return;let n=``;if(t.getType()===`Polygon`||t.getType()===`MultiPolygon`){let e=Pe(t);n=e>1e6?(e/1e6).toFixed(2)+` km²`:e.toFixed(2)+` m²`}else if(t.getType()===`LineString`||t.getType()===`MultiLineString`){let e=Ie(t);n=e>1e3?(e/1e3).toFixed(2)+` km`:e.toFixed(2)+` m`}else if(t.getType()===`Circle`){let e=t.getRadius(),r=Math.PI*e**2;n=r>1e6?(r/1e6).toFixed(2)+` km²`:r.toFixed(2)+` m²`}n&&e.get(`measure`)!==n&&e.set(`measure`,n)},Kt=e=>{let t=e.drawLayer.getSource();t.on(`addfeature`,e=>{let t=e.feature;t&&(Gt(t),t.getGeometry().on(`change`,()=>Gt(t)))}),t.getFeatures().forEach(e=>{Gt(e),e.getGeometry().on(`change`,()=>Gt(e))})}})))()}var Jt;function Yt(){return(Yt=e((()=>{zt(),Wt(),qt(),ke(),Jt=(e,t)=>{let n=te(e.for),r=n.map,i=`0, 65, 112`;e.drawLayer=n.addOrUpdateLayer({zIndex:100,type:`Vector`,properties:{id:`drawLayer`,layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:t},source:{type:`Vector`},style:e.featureStyles?.layer||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":[`coalesce`,[`get`,`measure`],``],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":`white`,"text-stroke-width":3,"text-font":`bold 14px sans-serif`,"text-overflow":!0}},interactions:[{type:`draw`,options:{active:!1,id:`drawInteraction`,type:e.type,modify:e.allowModify,stopClick:!0,style:e.featureStyles?.layer||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":[`coalesce`,[`get`,`measure`],``],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":`white`,"text-stroke-width":3,"text-font":`bold 14px sans-serif`,"text-overflow":!0}}}},...e.layerId?[]:[{type:`select`,options:{id:`SelectLayerHoverInteraction`,condition:`pointermove`,style:e.featureStyles?.hover||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2},tooltip:!1}},{type:`select`,options:{id:`SelectLayerClickInteraction`,condition:`click`,panIn:!0,style:e.featureStyles?.click||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2}}}]]}),e.draw=n.interactions.drawInteraction,e.modify=n.interactions.drawInteraction_modify,Ut(e,n,e.layerId),e.measure&&Kt(e);let a=()=>e.onModifyEnd(),o=()=>Rt(e);return e.modify?.on(`modifyend`,a),e.measure&&e.draw&&typeof e.draw.on==`function`&&e.draw.on(`drawstart`,e=>{let t=e.feature;Gt(t),t.getGeometry().on(`change`,()=>Gt(t))}),n.addEventListener(`addfeatures`,o),{EoxMap:n,OlMap:r,reset:e=>{e.eoxMap&&e.drawLayer&&(e.drawLayer.getSource().clear(),e.eoxMap.map.removeLayer(e.drawLayer),e.modify?.un(`modifyend`,a),e.eoxMap.removeEventListener(`addfeatures`,o),e.layerId||(e.draw=null),e.modify=null)}}}})))()}var Xt;function Zt(){return(Zt=e((()=>{Xt=e=>{e.drawnFeatures=[],e.draw?.setActive(!1),e.layerId&&e.selectionEvents.removeSelectionEvent(),e.drawLayer.getSource().clear(),e.geoJSON=null,e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()}})))()}var Qt;function $t(){return($t=e((()=>{ct(),Nt(),Qt=(e,t)=>{setTimeout(()=>{let n=e.drawLayer.getSource().getFeatures(),r=e.eoxMap.projection||`EPSG:3857`,i=e.projection,a=i?n.map(e=>{e=e.clone();let t=e.getGeometry().transform(r,i);return e.setGeometry(t),e}):n;e.setDrawnFeaturesInternal?e.setDrawnFeaturesInternal(a):e.drawnFeatures=a;let o;switch(e.format){case`geojson`:o=st(e.drawnFeatures);break;case`wkt`:o=Mt(e.drawnFeatures);break;case`feature`:o=e.drawnFeatures;break;default:o=e.drawnFeatures}e.updateGeoJSON(),e.requestUpdate(),t(o)},0)}})))()}var en;function tn(){return(tn=e((()=>{pe(),en=e=>{let t=t=>{t?.detail.id===`SelectLayerClickInteraction`&&t.detail.feature&&(typeof t.detail.feature.getGeometry().getCoordinates!=`function`&&(t.detail.feature=ie(t.detail.feature)),e.drawLayer.getSource().addFeature(t.detail.feature),e.eoxMap.dispatchEvent(new CustomEvent(`addfeatures`,{detail:t.detail})))};return{addSelectionEvent:()=>{e.layerId&&(e.eoxMap.selectInteractions.SelectLayerHoverInteraction?.setActive(!0),e.eoxMap.addEventListener(`select`,t))},removeSelectionEvent:()=>{let n=e.eoxMap.selectInteractions?.SelectLayerHoverInteraction;n&&(n.selectedFids=[],n?.setActive(!1)),e.eoxMap.removeEventListener(`select`,t)}}}})))()}function nn(e,t){t&&(e.discardDrawing(),e.selectionEvents.removeSelectionEvent(),e.draw=t.interactions.drawInteraction,t.selectInteractions.SelectLayerClickInteraction.remove(),t.selectInteractions.SelectLayerHoverInteraction.remove())}var rn;function an(){return(an=e((()=>{Wt(),rn=(e,t,n,r)=>{if(t){if(n){r&&n!==r&&nn(e,t),Ut(e,t,n);return}if(!n&&r){nn(e,t);return}}}})))()}var on;function sn(){return(sn=e((()=>{on=e=>{e.currentlyDrawing&&(e.draw?.setActive(!1),e.currentlyDrawing=!1,e.requestUpdate())}})))()}var cn;function ln(){return(ln=e((()=>{sn(),cn=(e,t)=>{e.key===`Escape`&&on(t)}})))()}function un(e,t){let n=e.drawnFeatures.indexOf(t);n>-1&&dn(e,n)}function dn(e,t){if(t>-1&&t<e.drawnFeatures.length){let n=[...e.drawnFeatures];n.splice(t,1),e.drawnFeatures=n,e.emitDrawnFeatures()}}function fn(e,t){function n(e){e.preventDefault(),e.stopPropagation()}function r(e){e.srcElement.style.opacity=`0.4`}function i(e){e.srcElement.style.opacity=`1`}[`dragenter`,`dragover`,`dragleave`,`drop`].forEach(e=>{t.addEventListener(e,n,!1),[`dragenter`,`dragover`].includes(e)?t.addEventListener(e,r,!1):t.addEventListener(e,i,!1)}),t.addEventListener(`drop`,t=>mn(t,e),!1)}function pn(e){e.preventDefault(),e.stopPropagation()}function mn(e,t){pn(e);let n;n=`dataTransfer`in e&&e.dataTransfer?e.dataTransfer.files:e.target&&`files`in e.target?e.target.files:[],Array.from(n).forEach(e=>hn(e,t)),e.target&&`value`in e.target&&(e.target.value=``)}function hn(e,t){let n=new FileReader;n.readAsText(e),n.onloadend=function(){typeof n.result==`string`&&t.handleFeatureChange(n.result)}}var gn;function _n(){return(_n=e((()=>{d(),rt(),Ft(),Lt(),Vt(),sn(),Yt(),Zt(),$t(),tn(),an(),ln(),$e(),gn=class extends l{static get properties(){return{allowModify:{attribute:`allow-modify`,type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:`feature-name`,type:String},featureNameKey:{attribute:`feature-name-key`,type:String},layerId:{attribute:`layer-id`,type:String},featureStyles:{type:Object},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:`multiple-features`,type:Boolean},measure:{type:Boolean},importFeatures:{attribute:`import-features`,type:Boolean},showEditor:{attribute:`show-editor`,type:Boolean},showList:{attribute:`show-list`,type:Boolean},projection:{type:String},noShadow:{attribute:`no-shadow`,type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}#e;#t;#n;#r;#i=!1;#a;#o=[];#s=e=>cn(e,this);constructor(){super(),this.allowModify=!1,this.for=`eox-map`,this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId=``,this.featureName=`Feature`,this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.measure=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection=`EPSG:4326`,this.type=`Polygon`,this.selectionEvents=null,this.format=`feature`,this.unstyled=!1,this.noShadow=!1}set continuous(e){this.#a=e,e&&(this.multipleFeatures=!0)}get continuous(){return this.#a}setDrawnFeaturesInternal(e){this.#i=!0,this.drawnFeatures=e,this.#i=!1}set drawnFeatures(e){let t=this.#o;if(this.#o=e,this.drawLayer&&!this.#i){if(this.drawLayer.getSource().clear(),e?.length){let t=this.eoxMap?.projection||`EPSG:3857`,n=this.projection||`EPSG:4326`,r=e;t&&n&&t!==n&&(r=e.map(e=>{e=e.clone();let r=e.getGeometry().transform(n,t);return e.setGeometry(r),e})),this.drawLayer.getSource().addFeatures(r)}this.updateGeoJSON()}this.requestUpdate(`drawnFeatures`,t)}get drawnFeatures(){return this.#o}set layerId(e){rn(this,this.eoxMap,e,this.#r),this.#r=e}get layerId(){return this.#r}startDrawing(){Bt(this)}stopDrawing(){on(this)}discardDrawing(){Xt(this)}removeFeature(e){un(this,e)}removeFeatureByIndex(e){dn(this,e)}handleFeatureChange(e,t=!1,n=!0){this.eoxMap.parseTextToFeature(e||JSON.stringify(Qe),this.drawLayer,this.eoxMap,t,n)}handleFilesChange(e){mn(e,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){this.#n=JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||Qe,void 0,2)}emitDrawnFeatures(){Qt(this,e=>{this.dispatchEvent(new CustomEvent(`drawupdate`,{detail:e}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updateLayer(){this.resetLayer&&this.resetLayer(this);let{EoxMap:e,OlMap:t,reset:n}=Jt(this,this.multipleFeatures);this.resetLayer=n,this.eoxMap=e,this.#t=t}firstUpdated(){this.updateLayer(),this.selectionEvents=en(this),this.importFeatures&&fn(this,this.eoxMap),this.drawnFeatures?.length>0?this.drawnFeatures=[...this.drawnFeatures]:this.updateGeoJSON(),this.requestUpdate()}updated(e){((t=>e.has(t)&&e.get(t)!==void 0)(`for`)||e.has(`type`)&&e.get(`type`)!==this.type||e.has(`measure`)&&e.get(`measure`)!==this.measure)&&(this.updateLayer(),this.currentlyDrawing=!1)}get eoxMap(){return this.#e}set eoxMap(e){let t=this.#e;this.#e=e,this.requestUpdate(`eoxMap`,t)}connectedCallback(){if(super.connectedCallback(),document.addEventListener(`keydown`,this.#s),this.drawLayer&&this.eoxMap){let{reset:e}=Jt(this,this.multipleFeatures);this.resetLayer=e}}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.#s),this.resetLayer?.(this)}render(){return o`
      <style>
        :host { display: block; }
        ${!this.unstyled&&It}
      </style>

      <div class="drawtitle">
        <slot name="drawtitle"
          ><p><strong>Draw</strong></p></slot
        >
      </div>

      <!-- Controller Component -->
      <eox-drawtools-controller
        .drawFunc=${{start:()=>this.startDrawing(),discard:()=>this.discardDrawing(),editor:e=>this.handleFeatureChange(e.target.value,!0),import:e=>this.handleFilesChange(e)}}
        ?select=${!!this.layerId}
        .unstyled=${this.unstyled}
        .drawnFeatures=${this.drawnFeatures}
        .currentlyDrawing=${this.currentlyDrawing}
        .multipleFeatures=${this.multipleFeatures}
        .importFeatures=${this.importFeatures}
        .showEditor=${this.showEditor}
        .geoJSON=${this.#n}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&this.drawnFeatures?.length?o`<eox-drawtools-list
            .eoxDrawTools=${this}
            .eoxMap=${this.eoxMap}
            .olMap=${this.#t}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .featureName=${this.featureName}
            .featureNameKey=${this.featureNameKey}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:i}
    `}},customElements.define(`eox-drawtools`,gn)})))()}var vn=r(((e,t)=>{var n=NaN,r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,s=parseInt,c=typeof global==`object`&&global&&global.Object===Object&&global,l=typeof self==`object`&&self&&self.Object===Object&&self,u=c||l||Function(`return this`)(),d=Object.prototype.toString,f=Math.max,p=Math.min,m=function(){return u.Date.now()};function h(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,h=!0;if(typeof e!=`function`)throw TypeError(`Expected a function`);t=y(t)||0,g(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?f(y(n.maxWait)||0,t):a,h=`trailing`in n?!!n.trailing:h);function _(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function v(e){return l=e,s=setTimeout(S,t),u?_(e):o}function b(e){var n=e-c,r=e-l,i=t-n;return d?p(i,a-r):i}function x(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function S(){var e=m();if(x(e))return ee(e);s=setTimeout(S,b(e))}function ee(e){return s=void 0,h&&r?_(e):(r=i=void 0,o)}function te(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function C(){return s===void 0?o:ee(m())}function w(){var e=m(),n=x(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return v(c);if(d)return s=setTimeout(S,t),_(c)}return s===void 0&&(s=setTimeout(S,t)),o}return w.cancel=te,w.flush=C,w}function g(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}function _(e){return!!e&&typeof e==`object`}function v(e){return typeof e==`symbol`||_(e)&&d.call(e)==`[object Symbol]`}function y(e){if(typeof e==`number`)return e;if(v(e))return n;if(g(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=g(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=e.replace(r,``);var c=a.test(e);return c||o.test(e)?s(e.slice(2),c?2:8):i.test(e)?n:+e}t.exports=h})),yn,bn,xn,Sn,Cn,wn;function Tn(){return(Tn=e((()=>{c(),yn=Symbol.for(``),bn=e=>{if(e?.r===yn)return e?._$litStatic$},xn=e=>({_$litStatic$:e,r:yn}),Sn=new Map,Cn=e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=bn(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Sn.get(e))===void 0&&(o.raw=o,Sn.set(e,t=o)),n=s}return e(t,...n)},wn=Cn(o),Cn(a),Cn(f)})))()}function En(){return(En=e((()=>{Tn()})))()}var Dn,On;function kn(){return(kn=e((()=>{c(),Ae(),S(),Dn=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},On=je(class extends ge{constructor(e){if(super(e),e.type!==ue.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=x(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,d,f=0,h=i.length-1,v=0,y=a.length-1;for(;f<=h&&v<=y;)if(i[f]===null)f++;else if(i[h]===null)h--;else if(s[f]===o[v])c[v]=p(i[f],a[v]),f++,v++;else if(s[h]===o[y])c[y]=p(i[h],a[y]),h--,y--;else if(s[f]===o[y])c[y]=p(i[f],a[y]),m(e,c[y+1],i[f]),f++,y--;else if(s[h]===o[v])c[v]=p(i[h],a[v]),m(e,i[f],i[h]),h--,v++;else if(l===void 0&&(l=Dn(o,v,y),d=Dn(s,f,h)),l.has(s[f])){if(l.has(s[h])){let t=d.get(o[v]),n=t===void 0?null:i[t];if(n===null){let t=m(e,i[f]);p(t,a[v]),c[v]=t}else c[v]=p(n,a[v]),m(e,i[f],n),i[t]=null;v++}else _(i[h]),h--}else _(i[f]),f++;for(;v<=y;){let t=m(e,c[y+1]);p(t,a[v]),c[v++]=t}for(;f<=h;){let e=i[f++];e!==null&&_(e)}return this.ut=o,g(e,c),u}})})))()}function An(){return(An=e((()=>{kn()})))()}function jn(e,t){return Mn(e,t,[]).join(``)}function Mn(e,t,n){if(e.nodeType===_r.CDATA_SECTION||e.nodeType===_r.TEXT)t?n.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,``)):n.push(e.nodeValue);else for(var r=e.firstChild;r;r=r.nextSibling)Mn(r,t,n);return n}function Nn(e,t,n,r){for(var i=Pn(t);i;i=Fn(i)){var a=e[i.namespaceURI||null];if(j(a)){var o=a[i.localName];j(o)&&o.call(r,i,n)}}}function Pn(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==_r.ELEMENT;)t=t.nextSibling;return t}function Fn(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==_r.ELEMENT;)t=t.nextSibling;return t}function E(e,t,n){return In(e,t,n)}function In(e,t,n){for(var r=j(n)?n:{},i=0,a=e.length;i<a;++i)r[e[i]]=t;return r}function Ln(e,t){return(function(n,r){var i=e.call(j(t)?t:this,n,r);j(i)&&r[r.length-1].push(i)})}function D(e,t,n,r,i){return r.push(e),Nn(t,n,r,i),r.pop()}function O(e,t,n){return(function(r,i){let a=e.call(j(n)?n:this,r,i);if(j(a)){var o=i[i.length-1],s=j(t)?t:r.localName;o[s]=a}})}function k(e,t,n){return(function(r,i){var a=e.call(j(n)?n:this,r,i);if(j(a)){var o=i[i.length-1];gr(o,j(t)?t:r.localName,[]).push(a)}})}function Rn(e){return e.replace(yr,``)}function zn(e){let t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return j(t[1])||!1}function Bn(e){return Vn(jn(e,!1))}function Vn(e){let t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function Hn(e){return Un(jn(e,!1))}function Un(e){let t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function A(e){return Rn(jn(e,!1))}function Wn(e){return e.getAttributeNS(br,`href`)}function Gn(e,t){return D({},kr,e,t)}function Kn(e){return[Vn(e.getAttribute(`minx`)),Vn(e.getAttribute(`miny`)),Vn(e.getAttribute(`maxx`)),Vn(e.getAttribute(`maxy`))]}function qn(e,t){let n=Kn(e),r=[Vn(e.getAttribute(`resx`)),Vn(e.getAttribute(`resy`))];return{crs:e.getAttribute(`CRS`)||e.getAttribute(`SRS`),extent:n,res:r}}function Jn(e,t){let n=Kn(e);if(j(n[0])&&j(n[1])&&j(n[2])&&j(n[3]))return n}function Yn(e,t){return{min:parseFloat(e.getAttribute(`min`)),max:parseFloat(e.getAttribute(`max`))}}function Xn(e,t){let n=D({},Ar,e,t);if(!j(n))return;let r=n.westBoundLongitude,i=n.southBoundLatitude,a=n.eastBoundLongitude,o=n.northBoundLatitude;if(j(r)&&j(i)&&j(a)&&j(o))return[r,i,a,o]}function Zn(e,t){return D({},Sr,e,t)}function Qn(e,t){return D({},Cr,e,t)}function $n(e,t){return D({},wr,e,t)}function er(e,t){return D({},Tr,e,t)}function tr(e,t){return D({},Er,e,t)}function nr(e,t){return D([],Dr,e,t)}function rr(e,t){let n=zn(e.getAttribute(`queryable`));return D({queryable:j(n)?n:!1},Or,e,t)}function ir(e,t){var n=t[t.length-1];let r=D({},Or,e,t);if(!j(r))return;let i=zn(e.getAttribute(`queryable`));j(i)||(i=n.queryable),r.queryable=j(i)?i:!1;let a=Un(e.getAttribute(`cascaded`));j(a)||(a=n.cascaded),r.cascaded=a;let o=zn(e.getAttribute(`opaque`));j(o)||(o=n.opaque),r.opaque=j(o)?o:!1;let s=zn(e.getAttribute(`noSubsets`));j(s)||(s=n.noSubsets),r.noSubsets=j(s)?s:!1;let c=Vn(e.getAttribute(`fixedWidth`));j(c)||(c=n.fixedWidth),r.fixedWidth=c;let l=Vn(e.getAttribute(`fixedHeight`));j(l)||(l=n.fixedHeight),r.fixedHeight=l;let u=[`Style`,`CRS`,`AuthorityURL`];for(let e=0,t=u.length;e<t;e++){let t=u[e],i=n[t];if(j(i)){let e=gr(r,t,[]);e=e.concat(i),r[t]=e}}let d=[`EX_GeographicBoundingBox`,`BoundingBox`,`Dimension`,`Attribution`,`MinScaleDenominator`,`MaxScaleDenominator`];for(let e=0,t=d.length;e<t;e++){let t=d[e],i=r[t];j(i)||(r[t]=n[t])}return r}function ar(e,t){return{name:e.getAttribute(`name`),units:e.getAttribute(`units`),unitSymbol:e.getAttribute(`unitSymbol`),default:e.getAttribute(`default`),multipleValues:zn(e.getAttribute(`multipleValues`)),nearestValue:zn(e.getAttribute(`nearestValue`)),current:zn(e.getAttribute(`current`)),values:A(e)}}function or(e,t){return D({},Ir,e,t)}function sr(e,t){return D({},jr,e,t)}function cr(e,t){return D({},Nr,e,t)}function lr(e,t){return D({},Pr,e,t)}function ur(e,t){return D({},Mr,e,t)}function dr(e,t){var n=or(e,t);if(j(n))return n.size=[Un(e.getAttribute(`width`)),Un(e.getAttribute(`height`))],n}function fr(e,t){var n=or(e,t);if(j(n))return n.name=e.getAttribute(`name`),n}function pr(e,t){var n=or(e,t);if(j(n))return n.type=e.getAttribute(`type`),n}function mr(e,t){return D({},Fr,e,t)}function hr(e,t){return D([],Lr,e,t)}var j,gr,_r,vr,yr,br,M,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr;function zr(){return(zr=e((()=>{j=e=>e!==void 0,gr=(e,t,n)=>t in e?e[t]:e[t]=n,_r={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12},vr=class{constructor(e){this._parser=new e}toDocument(e){return this._parser.parseFromString(e,`application/xml`)}getAllTextContent(e,t){return jn(e,t).join(``)}},yr=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,br=`http://www.w3.org/1999/xlink`,M=[null,`http://www.opengis.net/wms`],xr=E(M,{Service:O(Qn),Capability:O(Zn)}),Sr=E(M,{Request:O(sr),Exception:O(nr),Layer:O(rr)}),Cr=E(M,{Name:O(A),Title:O(A),Abstract:O(A),KeywordList:O(hr),OnlineResource:O(Wn),ContactInformation:O($n),Fees:O(A),AccessConstraints:O(A),LayerLimit:O(Hn),MaxWidth:O(Hn),MaxHeight:O(Hn)}),wr=E(M,{ContactPersonPrimary:O(er),ContactPosition:O(A),ContactAddress:O(tr),ContactVoiceTelephone:O(A),ContactFacsimileTelephone:O(A),ContactElectronicMailAddress:O(A)}),Tr=E(M,{ContactPerson:O(A),ContactOrganization:O(A)}),Er=E(M,{AddressType:O(A),Address:O(A),City:O(A),StateOrProvince:O(A),PostCode:O(A),Country:O(A)}),Dr=E(M,{Format:Ln(A)}),Or=E(M,{Name:O(A),Title:O(A),Abstract:O(A),KeywordList:O(hr),CRS:k(A),SRS:k(A),EX_GeographicBoundingBox:O(Xn),LatLonBoundingBox:O(Jn),BoundingBox:k(qn),Dimension:k(ar),Attribution:O(Gn),AuthorityURL:k(fr),Identifier:k(A),MetadataURL:k(pr),DataURL:k(or),FeatureListURL:k(or),Style:k(mr),MinScaleDenominator:O(Bn),MaxScaleDenominator:O(Bn),ScaleHint:O(Yn),Layer:k(ir)}),kr=E(M,{Title:O(A),OnlineResource:O(Wn),LogoURL:O(dr)}),Ar=E(M,{westBoundLongitude:O(Bn),eastBoundLongitude:O(Bn),southBoundLatitude:O(Bn),northBoundLatitude:O(Bn)}),jr=E(M,{GetCapabilities:O(ur),GetMap:O(ur),GetFeatureInfo:O(ur)}),Mr=E(M,{Format:k(A),DCPType:k(cr)}),Nr=E(M,{HTTP:O(lr)}),Pr=E(M,{Get:O(or),Post:O(or)}),Fr=E(M,{Name:O(A),Title:O(A),Abstract:O(A),LegendURL:k(dr),StyleSheetURL:O(or),StyleURL:O(or)}),Ir=E(M,{Format:O(A),OnlineResource:O(Wn)}),Lr=E(M,{Keyword:Ln(A)}),Rr=class{constructor(e,t){!t&&typeof window<`u`&&(t=window.DOMParser),this.version=void 0,this._parser=new vr(t),this._data=e}data(e){return this._data=e,this}toJSON(e){return e||=this._data,this.parse(e)}parse(e){return this.readFromDocument(this._parser.toDocument(e))}readFromDocument(e){for(let t=e.firstChild;t;t=t.nextSibling)if(t.nodeType==_r.ELEMENT)return this.readFromNode(t);return null}readFromNode(e){return this.version=e.getAttribute(`version`),D({version:this.version},xr,e,[])||null}}})))()}async function Br(e){let t=new URL(e),n=t.searchParams;n.set(`SERVICE`,`WMS`),n.set(`REQUEST`,`GetCapabilities`);let r=t.toString(),i=await fetch(r);if(i.ok){let e=await i.text();return new Rr(e).toJSON()}throw Error(`Error: ${i.status}`)}function Vr(){return(Vr=e((()=>{zr()})))()}function Hr(e){return/\b(?:wms|ows)\b/i.test(e)?`TileWMS`:/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i.test(e)?`XYZ`:!1}function Ur(e){let t=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),n=Hr(e);return!!(e&&t&&n)}function Wr(){return(Wr=e((()=>{})))()}function Gr(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,`"$2": `).replace(/,\s*}/g,`}`).replace(/,\s*]/g,`]`).replace(/\s*(\{|}|\[|\]|,)\s*/g,`$1`).replaceAll(`": //`,`://`)}function Kr(e){try{return JSON.parse(Gr(e)),!!e}catch{return!1}}function qr(){return(qr=e((()=>{})))()}function Jr(e,t){let n=new URL(e).searchParams;return Object.entries(t).forEach(([e,t])=>{typeof t==`object`&&!Array.isArray(t)&&t!==null?Object.keys(t).forEach(e=>{n.set(e,t[e])}):Array.isArray(t)?(n.delete(e),t.forEach(t=>{n.append(e,t)})):n.set(e,t)}),`${e.split(`?`)[0]}?${n.toString()}`}function Yr(e,t,n){return(t=ni(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xr(){return Xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xr.apply(null,arguments)}function Zr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Qr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Zr(Object(n),!0).forEach(function(t){Yr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function $r(e,t){if(e==null)return{};var n,r,i=ei(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ei(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function ti(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ni(e){var t=ti(e,`string`);return typeof t==`symbol`?t:t+``}function ri(e){"@babel/helpers - typeof";return ri=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ri(e)}function ii(e){if(typeof window<`u`&&window.navigator)return!!navigator.userAgent.match(e)}function N(e,t,n){e.addEventListener(t,n,!Ki&&Qi)}function P(e,t,n){e.removeEventListener(t,n,!Ki&&Qi)}function ai(e,t){if(t){if(t[0]===`>`&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function oi(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function si(e,t,n,r){if(e){n||=document;do{if(t!=null&&(t[0]===`>`?e.parentNode===n&&ai(e,t):ai(e,t))||r&&e===n)return e;if(e===n)break}while(e=oi(e))}return null}function F(e,t,n){e&&t&&(e.classList?e.classList[n?`add`:`remove`](t):e.className=((` `+e.className+` `).replace($i,` `).replace(` `+t+` `,` `)+(n?` `+t:``)).replace($i,` `))}function I(e,t,n){var r=e&&e.style;if(r){if(n===void 0)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(e,``):e.currentStyle&&(n=e.currentStyle),t===void 0?n:n[t];!(t in r)&&t.indexOf(`webkit`)===-1&&(t=`-webkit-`+t),r[t]=n+(typeof n==`string`?``:`px`)}}function ci(e,t){var n=``;if(typeof e==`string`)n=e;else do{var r=I(e,`transform`);r&&r!==`none`&&(n=r+` `+n)}while(!t&&(e=e.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function li(e,t,n){if(e){var r=e.getElementsByTagName(t),i=0,a=r.length;if(n)for(;i<a;i++)n(r[i],i);return r}return[]}function ui(){return document.scrollingElement||document.documentElement}function L(e,t,n,r,i){if(e.getBoundingClientRect||e===window){var a,o,s,c,l,u,d;if(e!==window&&e.parentNode&&e!==ui()?(a=e.getBoundingClientRect(),o=a.top,s=a.left,c=a.bottom,l=a.right,u=a.height,d=a.width):(o=0,s=0,c=window.innerHeight,l=window.innerWidth,u=window.innerHeight,d=window.innerWidth),(t||n)&&e!==window&&(i||=e.parentNode,!Ki))do if(i&&i.getBoundingClientRect&&(I(i,`transform`)!==`none`||n&&I(i,`position`)!==`static`)){var f=i.getBoundingClientRect();o-=f.top+parseInt(I(i,`border-top-width`)),s-=f.left+parseInt(I(i,`border-left-width`)),c=o+a.height,l=s+a.width;break}while(i=i.parentNode);if(r&&e!==window){var p=ci(i||e),m=p&&p.a,h=p&&p.d;p&&(o/=h,s/=m,d/=m,u/=h,c=o+u,l=s+d)}return{top:o,left:s,bottom:c,right:l,width:d,height:u}}}function di(e,t,n){for(var r=gi(e,!0),i=L(e)[t];r;){var a=L(r)[n],o=void 0;if(o=n===`top`||n===`left`?i>=a:i<=a,!o)return r;if(r===ui())break;r=gi(r,!1)}return!1}function fi(e,t,n,r){for(var i=0,a=0,o=e.children;a<o.length;){if(o[a].style.display!==`none`&&o[a]!==B.ghost&&(r||o[a]!==B.dragged)&&si(o[a],n.draggable,e,!1)){if(i===t)return o[a];i++}a++}return null}function pi(e,t){for(var n=e.lastElementChild;n&&(n===B.ghost||I(n,`display`)===`none`||t&&!ai(n,t));)n=n.previousElementSibling;return n||null}function R(e,t){var n=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!==`TEMPLATE`&&e!==B.clone&&(!t||ai(e,t))&&n++;return n}function mi(e){var t=0,n=0,r=ui();if(e)do{var i=ci(e),a=i.a,o=i.d;t+=e.scrollLeft*a,n+=e.scrollTop*o}while(e!==r&&(e=e.parentNode));return[t,n]}function hi(e,t){for(var n in e)if(e.hasOwnProperty(n)){for(var r in t)if(t.hasOwnProperty(r)&&t[r]===e[n][r])return Number(n)}return-1}function gi(e,t){if(!e||!e.getBoundingClientRect)return ui();var n=e,r=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=I(n);if(n.clientWidth<n.scrollWidth&&(i.overflowX==`auto`||i.overflowX==`scroll`)||n.clientHeight<n.scrollHeight&&(i.overflowY==`auto`||i.overflowY==`scroll`)){if(!n.getBoundingClientRect||n===document.body)return ui();if(r||t)return n;r=!0}}while(n=n.parentNode);return ui()}function _i(e,t){if(e&&t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function vi(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function yi(e,t){return function(){if(!ea){var n=arguments,r=this;n.length===1?e.call(r,n[0]):e.apply(r,n),ea=setTimeout(function(){ea=void 0},t)}}}function bi(){clearTimeout(ea),ea=void 0}function xi(e,t,n){e.scrollLeft+=t,e.scrollTop+=n}function Si(e){var t=window.Polymer,n=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):n?n(e).clone(!0)[0]:e.cloneNode(!0)}function Ci(e,t,n){var r={};return Array.from(e.children).forEach(function(i){if(si(i,t.draggable,e,!1)&&!i.animated&&i!==n){var a=L(i);r.left=Math.min(r.left??1/0,a.left),r.top=Math.min(r.top??1/0,a.top),r.right=Math.max(r.right??-1/0,a.right),r.bottom=Math.max(r.bottom??-1/0,a.bottom)}}),r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}function wi(){var e=[],t;return{captureAnimationState:function(){e=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){if(I(t,`display`)!==`none`&&t!==B.ghost){e.push({target:t,rect:L(t)});var n=Qr({},e[e.length-1].rect);if(t.thisAnimationDuration){var r=ci(t,!0);r&&(n.top-=r.f,n.left-=r.e)}t.fromRect=n}})},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(hi(e,{target:t}),1)},animateAll:function(n){var r=this;if(!this.options.animation){clearTimeout(t),typeof n==`function`&&n();return}var i=!1,a=0;e.forEach(function(e){var t=0,n=e.target,o=n.fromRect,s=L(n),c=n.prevFromRect,l=n.prevToRect,u=e.rect,d=ci(n,!0);d&&(s.top-=d.f,s.left-=d.e),n.toRect=s,n.thisAnimationDuration&&vi(c,s)&&!vi(o,s)&&(u.top-s.top)/(u.left-s.left)===(o.top-s.top)/(o.left-s.left)&&(t=Ei(u,c,l,r.options)),vi(s,o)||(n.prevFromRect=o,n.prevToRect=s,t||=r.options.animation,r.animate(n,u,s,t)),t&&(i=!0,a=Math.max(a,t),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout(function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null},t),n.thisAnimationDuration=t)}),clearTimeout(t),i?t=setTimeout(function(){typeof n==`function`&&n()},a):typeof n==`function`&&n(),e=[]},animate:function(e,t,n,r){if(r){I(e,`transition`,``),I(e,`transform`,``);var i=ci(this.el),a=i&&i.a,o=i&&i.d,s=(t.left-n.left)/(a||1),c=(t.top-n.top)/(o||1);e.animatingX=!!s,e.animatingY=!!c,I(e,`transform`,`translate3d(`+s+`px,`+c+`px,0)`),this.forRepaintDummy=Ti(e),I(e,`transition`,`transform `+r+`ms`+(this.options.easing?` `+this.options.easing:``)),I(e,`transform`,`translate3d(0,0,0)`),typeof e.animated==`number`&&clearTimeout(e.animated),e.animated=setTimeout(function(){I(e,`transition`,``),I(e,`transform`,``),e.animated=!1,e.animatingX=!1,e.animatingY=!1},r)}}}}function Ti(e){return e.offsetWidth}function Ei(e,t,n,r){return Math.sqrt((t.top-e.top)**2+(t.left-e.left)**2)/Math.sqrt((t.top-n.top)**2+(t.left-n.left)**2)*r.animation}function Di(e){var t=e.sortable,n=e.rootEl,r=e.name,i=e.targetEl,a=e.cloneEl,o=e.toEl,s=e.fromEl,c=e.oldIndex,l=e.newIndex,u=e.oldDraggableIndex,d=e.newDraggableIndex,f=e.originalEvent,p=e.putSortable,m=e.extraEventProperties;if(t||=n&&n[V],t){var h,g=t.options,_=`on`+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!Ki&&!qi?h=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(h=document.createEvent(`Event`),h.initEvent(r,!0,!0)),h.to=o||n,h.from=s||n,h.item=i||n,h.clone=a,h.oldIndex=c,h.newIndex=l,h.oldDraggableIndex=u,h.newDraggableIndex=d,h.originalEvent=f,h.pullMode=p?p.lastPutMode:void 0;var v=Qr(Qr({},m),ra.getEventProperties(r,t));for(var y in v)h[y]=v[y];n&&n.dispatchEvent(h),g[_]&&g[_].call(t,h)}}function z(e){Di(Qr({putSortable:Y,cloneEl:q,targetEl:U,rootEl:K,oldIndex:ca,oldDraggableIndex:la,newIndex:J,newDraggableIndex:ua},e))}function B(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw`Sortable: \`el\` must be an HTMLElement, not ${{}.toString.call(e)}`;this.el=e,this.options=t=Xr({},t),e[V]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?`>li`:`>*`,swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Pa(e,this.options)},ghostClass:`sortable-ghost`,chosenClass:`sortable-chosen`,dragClass:`sortable-drag`,ignore:`a, img`,filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData(`Text`,t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:`data-id`,delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:`sortable-fallback`,fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:B.supportPointer!==!1&&`PointerEvent`in window&&(!Yi||Xi),emptyInsertThreshold:5};for(var r in ra.initializePlugins(this,e,n),n)!(r in t)&&(t[r]=n[r]);for(var i in La(t),this)i.charAt(0)===`_`&&typeof this[i]==`function`&&(this[i]=this[i].bind(this));this.nativeDraggable=!t.forceFallback&&Ma,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?N(e,`pointerdown`,this._onTapStart):(N(e,`mousedown`,this._onTapStart),N(e,`touchstart`,this._onTapStart)),this.nativeDraggable&&(N(e,`dragover`,this),N(e,`dragenter`,this)),ma.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),Xr(this,wi())}function Oi(e){e.dataTransfer&&(e.dataTransfer.dropEffect=`move`),e.cancelable&&e.preventDefault()}function ki(e,t,n,r,i,a,o,s){var c,l=e[V],u=l.options.onMove,d;return window.CustomEvent&&!Ki&&!qi?c=new CustomEvent(`move`,{bubbles:!0,cancelable:!0}):(c=document.createEvent(`Event`),c.initEvent(`move`,!0,!0)),c.to=t,c.from=e,c.dragged=n,c.draggedRect=r,c.related=i||t,c.relatedRect=a||L(t),c.willInsertAfter=s,c.originalEvent=o,e.dispatchEvent(c),u&&(d=u.call(l,c,o)),d}function Ai(e){e.draggable=!1}function ji(){Da=!1}function Mi(e,t,n){var r=L(fi(n.el,0,n.options,!0)),i=Ci(n.el,n.options,G),a=10;return t?e.clientX<i.left-a||e.clientY<r.top&&e.clientX<r.right:e.clientY<i.top-a||e.clientY<r.bottom&&e.clientX<r.left}function Ni(e,t,n){var r=L(pi(n.el,n.options.draggable)),i=Ci(n.el,n.options,G),a=10;return t?e.clientX>i.right+a||e.clientY>r.bottom&&e.clientX>r.left:e.clientY>i.bottom+a||e.clientX>r.right&&e.clientY>r.top}function Pi(e,t,n,r,i,a,o,s){var c=r?e.clientY:e.clientX,l=r?n.height:n.width,u=r?n.top:n.left,d=r?n.bottom:n.right,f=!1;if(!o){if(s&&Ta<l*i){if(!Ca&&(Sa===1?c>u+l*a/2:c<d-l*a/2)&&(Ca=!0),Ca)f=!0;else if(Sa===1?c<u+Ta:c>d-Ta)return-Sa}else if(c>u+l*(1-i)/2&&c<d-l*(1-i)/2)return Fi(t)}return f||=o,f&&(c<u+l*a/2||c>d-l*a/2)?c>u+l/2?1:-1:0}function Fi(e){return R(U)<R(e)?1:-1}function Ii(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,n=t.length,r=0;n--;)r+=t.charCodeAt(n);return r.toString(36)}function Li(e){Oa.length=0;for(var t=e.getElementsByTagName(`input`),n=t.length;n--;){var r=t[n];r.checked&&Oa.push(r)}}function Ri(e){return setTimeout(e,0)}function zi(e){return clearTimeout(e)}function Bi(){function e(){for(var e in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)e.charAt(0)===`_`&&typeof this[e]==`function`&&(this[e]=this[e].bind(this))}return e.prototype={dragStarted:function(e){var t=e.originalEvent;this.sortable.nativeDraggable?N(document,`dragover`,this._handleAutoScroll):this.options.supportPointer?N(document,`pointermove`,this._handleFallbackAutoScroll):t.touches?N(document,`touchmove`,this._handleFallbackAutoScroll):N(document,`mousemove`,this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var t=e.originalEvent;!this.options.dragOverBubble&&!t.rootEl&&this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?P(document,`dragover`,this._handleAutoScroll):(P(document,`pointermove`,this._handleFallbackAutoScroll),P(document,`touchmove`,this._handleFallbackAutoScroll),P(document,`mousemove`,this._handleFallbackAutoScroll)),Hi(),Vi(),bi()},nulling:function(){qa=Ua=Ha=Wa=Ja=Ga=Ka=null,Q.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,t){var n=this,r=(e.touches?e.touches[0]:e).clientX,i=(e.touches?e.touches[0]:e).clientY,a=document.elementFromPoint(r,i);if(qa=e,t||this.options.forceAutoScrollFallback||qi||Ki||Yi){Ya(e,this.options,a,t);var o=gi(a,!0);Wa&&(!Ja||r!==Ga||i!==Ka)&&(Ja&&Hi(),Ja=setInterval(function(){var a=gi(document.elementFromPoint(r,i),!0);a!==o&&(o=a,Vi()),Ya(e,n.options,a,t)},10),Ga=r,Ka=i)}else{if(!this.options.bubbleScroll||gi(a,!0)===ui()){Vi();return}Ya(e,this.options,gi(a,!1),!1)}}},Xr(e,{pluginName:`scroll`,initializeByDefault:!0})}function Vi(){Q.forEach(function(e){clearInterval(e.pid)}),Q=[]}function Hi(){clearInterval(Ja)}function Ui(){}function Wi(){}var Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,V,ta,na,ra,ia,H,U,W,G,K,aa,oa,q,sa,ca,J,la,ua,da,Y,fa,pa,ma,ha,X,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Z,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Q,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa;function Za(){return(Za=e((()=>{Gi=`1.15.7`,Ki=ii(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),qi=ii(/Edge/i),Ji=ii(/firefox/i),Yi=ii(/safari/i)&&!ii(/chrome/i)&&!ii(/android/i),Xi=ii(/iP(ad|od|hone)/i),Zi=ii(/chrome/i)&&ii(/android/i),Qi={capture:!1,passive:!1},$i=/\s+/g,V=`Sortable`+new Date().getTime(),ta=[],na={initializeByDefault:!0},ra={mount:function(e){for(var t in na)na.hasOwnProperty(t)&&!(t in e)&&(e[t]=na[t]);ta.forEach(function(t){if(t.pluginName===e.pluginName)throw`Sortable: Cannot mount plugin ${e.pluginName} more than once`}),ta.push(e)},pluginEvent:function(e,t,n){var r=this;this.eventCanceled=!1,n.cancel=function(){r.eventCanceled=!0};var i=e+`Global`;ta.forEach(function(r){t[r.pluginName]&&(t[r.pluginName][i]&&t[r.pluginName][i](Qr({sortable:t},n)),t.options[r.pluginName]&&t[r.pluginName][e]&&t[r.pluginName][e](Qr({sortable:t},n)))})},initializePlugins:function(e,t,n,r){for(var i in ta.forEach(function(r){var i=r.pluginName;if(e.options[i]||r.initializeByDefault){var a=new r(e,t,e.options);a.sortable=e,a.options=e.options,e[i]=a,Xr(n,a.defaults)}}),e.options)if(e.options.hasOwnProperty(i)){var a=this.modifyOption(e,i,e.options[i]);a!==void 0&&(e.options[i]=a)}},getEventProperties:function(e,t){var n={};return ta.forEach(function(r){typeof r.eventProperties==`function`&&Xr(n,r.eventProperties.call(t[r.pluginName],e))}),n},modifyOption:function(e,t,n){var r;return ta.forEach(function(i){e[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[t]==`function`&&(r=i.optionListeners[t].call(e[i.pluginName],n))}),r}},ia=[`evt`],H=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.evt,i=$r(n,ia);ra.pluginEvent.bind(B)(e,t,Qr({dragEl:U,parentEl:W,ghostEl:G,rootEl:K,nextEl:aa,lastDownEl:oa,cloneEl:q,cloneHidden:sa,dragStarted:ba,putSortable:Y,activeSortable:B.active,originalEvent:r,oldIndex:ca,oldDraggableIndex:la,newIndex:J,newDraggableIndex:ua,hideGhostForTarget:Ra,unhideGhostForTarget:za,cloneNowHidden:function(){sa=!0},cloneNowShown:function(){sa=!1},dispatchSortableEvent:function(e){z({sortable:t,name:e,originalEvent:r})}},i))},fa=!1,pa=!1,ma=[],Ca=!1,wa=!1,Ea=[],Da=!1,Oa=[],ka=typeof document<`u`,Aa=Xi,ja=qi||Ki?`cssFloat`:`float`,Ma=ka&&!Zi&&!Xi&&`draggable`in document.createElement(`div`),Na=function(){if(ka){if(Ki)return!1;var e=document.createElement(`x`);return e.style.cssText=`pointer-events:auto`,e.style.pointerEvents===`auto`}}(),Pa=function(e,t){var n=I(e),r=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=fi(e,0,t),a=fi(e,1,t),o=i&&I(i),s=a&&I(a),c=o&&parseInt(o.marginLeft)+parseInt(o.marginRight)+L(i).width,l=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+L(a).width;if(n.display===`flex`)return n.flexDirection===`column`||n.flexDirection===`column-reverse`?`vertical`:`horizontal`;if(n.display===`grid`)return n.gridTemplateColumns.split(` `).length<=1?`vertical`:`horizontal`;if(i&&o.float&&o.float!==`none`){var u=o.float===`left`?`left`:`right`;return a&&(s.clear===`both`||s.clear===u)?`vertical`:`horizontal`}return i&&(o.display===`block`||o.display===`flex`||o.display===`table`||o.display===`grid`||c>=r&&n[ja]===`none`||a&&n[ja]===`none`&&c+l>r)?`vertical`:`horizontal`},Fa=function(e,t,n){var r=n?e.left:e.top,i=n?e.right:e.bottom,a=n?e.width:e.height,o=n?t.left:t.top,s=n?t.right:t.bottom,c=n?t.width:t.height;return r===o||i===s||r+a/2===o+c/2},Ia=function(e,t){var n;return ma.some(function(r){var i=r[V].options.emptyInsertThreshold;if(i&&!pi(r)){var a=L(r),o=e>=a.left-i&&e<=a.right+i,s=t>=a.top-i&&t<=a.bottom+i;if(o&&s)return n=r}}),n},La=function(e){function t(e,n){return function(r,i,a,o){var s=r.options.group.name&&i.options.group.name&&r.options.group.name===i.options.group.name;if(e==null&&(n||s))return!0;if(e==null||e===!1)return!1;if(n&&e===`clone`)return e;if(typeof e==`function`)return t(e(r,i,a,o),n)(r,i,a,o);var c=(n?r:i).options.group.name;return e===!0||typeof e==`string`&&e===c||e.join&&e.indexOf(c)>-1}}var n={},r=e.group;(!r||ri(r)!=`object`)&&(r={name:r}),n.name=r.name,n.checkPull=t(r.pull,!0),n.checkPut=t(r.put),n.revertClone=r.revertClone,e.group=n},Ra=function(){!Na&&G&&I(G,`display`,`none`)},za=function(){!Na&&G&&I(G,`display`,``)},ka&&!Zi&&document.addEventListener(`click`,function(e){if(pa)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),pa=!1,!1},!0),Ba=function(e){if(U){e=e.touches?e.touches[0]:e;var t=Ia(e.clientX,e.clientY);if(t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);n.target=n.rootEl=t,n.preventDefault=void 0,n.stopPropagation=void 0,t[V]._onDragOver(n)}}},Va=function(e){U&&U.parentNode[V]._isOutsideThisEl(e.target)},B.prototype={constructor:B,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(xa=null)},_getDirection:function(e,t){return typeof this.options.direction==`function`?this.options.direction.call(this,e,t,U):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,n=this.el,r=this.options,i=r.preventOnFilter,a=e.type,o=e.touches&&e.touches[0]||e.pointerType&&e.pointerType===`touch`&&e,s=(o||e).target,c=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,l=r.filter;if(Li(n),!U&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||r.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&Yi&&s&&s.tagName.toUpperCase()===`SELECT`)&&(s=si(s,r.draggable,n,!1),!(s&&s.animated)&&oa!==s)){if(ca=R(s),la=R(s,r.draggable),typeof l==`function`){if(l.call(this,e,s,this)){z({sortable:t,rootEl:c,name:`filter`,targetEl:s,toEl:n,fromEl:n}),H(`filter`,t,{evt:e}),i&&e.preventDefault();return}}else if(l&&(l=l.split(`,`).some(function(r){if(r=si(c,r.trim(),n,!1),r)return z({sortable:t,rootEl:r,name:`filter`,targetEl:s,fromEl:n,toEl:n}),H(`filter`,t,{evt:e}),!0}),l)){i&&e.preventDefault();return}(!r.handle||si(c,r.handle,n,!1))&&this._prepareDragStart(e,o,s)}}},_prepareDragStart:function(e,t,n){var r=this,i=r.el,a=r.options,o=i.ownerDocument,s;if(n&&!U&&n.parentNode===i){var c=L(n);if(K=i,U=n,W=U.parentNode,aa=U.nextSibling,oa=n,da=a.group,B.dragged=U,ha={target:U,clientX:(t||e).clientX,clientY:(t||e).clientY},va=ha.clientX-c.left,ya=ha.clientY-c.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,U.style[`will-change`]=`all`,s=function(){if(H(`delayEnded`,r,{evt:e}),B.eventCanceled){r._onDrop();return}r._disableDelayedDragEvents(),!Ji&&r.nativeDraggable&&(U.draggable=!0),r._triggerDragStart(e,t),z({sortable:r,name:`choose`,originalEvent:e}),F(U,a.chosenClass,!0)},a.ignore.split(`,`).forEach(function(e){li(U,e.trim(),Ai)}),N(o,`dragover`,Ba),N(o,`mousemove`,Ba),N(o,`touchmove`,Ba),a.supportPointer?(N(o,`pointerup`,r._onDrop),!this.nativeDraggable&&N(o,`pointercancel`,r._onDrop)):(N(o,`mouseup`,r._onDrop),N(o,`touchend`,r._onDrop),N(o,`touchcancel`,r._onDrop)),Ji&&this.nativeDraggable&&(this.options.touchStartThreshold=4,U.draggable=!0),H(`delayStart`,this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(qi||Ki))){if(B.eventCanceled){this._onDrop();return}a.supportPointer?(N(o,`pointerup`,r._disableDelayedDrag),N(o,`pointercancel`,r._disableDelayedDrag)):(N(o,`mouseup`,r._disableDelayedDrag),N(o,`touchend`,r._disableDelayedDrag),N(o,`touchcancel`,r._disableDelayedDrag)),N(o,`mousemove`,r._delayedDragTouchMoveHandler),N(o,`touchmove`,r._delayedDragTouchMoveHandler),a.supportPointer&&N(o,`pointermove`,r._delayedDragTouchMoveHandler),r._dragStartTimer=setTimeout(s,a.delay)}else s()}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){U&&Ai(U),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;P(e,`mouseup`,this._disableDelayedDrag),P(e,`touchend`,this._disableDelayedDrag),P(e,`touchcancel`,this._disableDelayedDrag),P(e,`pointerup`,this._disableDelayedDrag),P(e,`pointercancel`,this._disableDelayedDrag),P(e,`mousemove`,this._delayedDragTouchMoveHandler),P(e,`touchmove`,this._delayedDragTouchMoveHandler),P(e,`pointermove`,this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t||=e.pointerType==`touch`&&e,!this.nativeDraggable||t?this.options.supportPointer?N(document,`pointermove`,this._onTouchMove):t?N(document,`touchmove`,this._onTouchMove):N(document,`mousemove`,this._onTouchMove):(N(U,`dragend`,this),N(K,`dragstart`,this._onDragStart));try{document.selection?Ri(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,t){if(fa=!1,K&&U){H(`dragStarted`,this,{evt:t}),this.nativeDraggable&&N(document,`dragover`,Va);var n=this.options;!e&&F(U,n.dragClass,!1),F(U,n.ghostClass,!0),B.active=this,e&&this._appendGhost(),z({sortable:this,name:`start`,originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(X){this._lastX=X.clientX,this._lastY=X.clientY,Ra();for(var e=document.elementFromPoint(X.clientX,X.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(X.clientX,X.clientY),e!==t);)t=e;if(U.parentNode[V]._isOutsideThisEl(e),t)do{if(t[V]){var n=void 0;if(n=t[V]._onDragOver({clientX:X.clientX,clientY:X.clientY,target:e,rootEl:t}),n&&!this.options.dragoverBubble)break}e=t}while(t=oi(t));za()}},_onTouchMove:function(e){if(ha){var t=this.options,n=t.fallbackTolerance,r=t.fallbackOffset,i=e.touches?e.touches[0]:e,a=G&&ci(G,!0),o=G&&a&&a.a,s=G&&a&&a.d,c=Aa&&Z&&mi(Z),l=(i.clientX-ha.clientX+r.x)/(o||1)+(c?c[0]-Ea[0]:0)/(o||1),u=(i.clientY-ha.clientY+r.y)/(s||1)+(c?c[1]-Ea[1]:0)/(s||1);if(!B.active&&!fa){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(e,!0)}if(G){a?(a.e+=l-(ga||0),a.f+=u-(_a||0)):a={a:1,b:0,c:0,d:1,e:l,f:u};var d=`matrix(${a.a},${a.b},${a.c},${a.d},${a.e},${a.f})`;I(G,`webkitTransform`,d),I(G,`mozTransform`,d),I(G,`msTransform`,d),I(G,`transform`,d),ga=l,_a=u,X=i}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!G){var e=this.options.fallbackOnBody?document.body:K,t=L(U,!0,Aa,!0,e),n=this.options;if(Aa){for(Z=e;I(Z,`position`)===`static`&&I(Z,`transform`)===`none`&&Z!==document;)Z=Z.parentNode;Z!==document.body&&Z!==document.documentElement?(Z===document&&(Z=ui()),t.top+=Z.scrollTop,t.left+=Z.scrollLeft):Z=ui(),Ea=mi(Z)}G=U.cloneNode(!0),F(G,n.ghostClass,!1),F(G,n.fallbackClass,!0),F(G,n.dragClass,!0),I(G,`transition`,``),I(G,`transform`,``),I(G,`box-sizing`,`border-box`),I(G,`margin`,0),I(G,`top`,t.top),I(G,`left`,t.left),I(G,`width`,t.width),I(G,`height`,t.height),I(G,`opacity`,`0.8`),I(G,`position`,Aa?`absolute`:`fixed`),I(G,`zIndex`,`100000`),I(G,`pointerEvents`,`none`),B.ghost=G,e.appendChild(G),I(G,`transform-origin`,va/parseInt(G.style.width)*100+`% `+ya/parseInt(G.style.height)*100+`%`)}},_onDragStart:function(e,t){var n=this,r=e.dataTransfer,i=n.options;if(H(`dragStart`,this,{evt:e}),B.eventCanceled){this._onDrop();return}H(`setupClone`,this),B.eventCanceled||(q=Si(U),q.removeAttribute(`id`),q.draggable=!1,q.style[`will-change`]=``,this._hideClone(),F(q,this.options.chosenClass,!1),B.clone=q),n.cloneId=Ri(function(){H(`clone`,n),!B.eventCanceled&&(n.options.removeCloneOnHide||K.insertBefore(q,U),n._hideClone(),z({sortable:n,name:`clone`}))}),!t&&F(U,i.dragClass,!0),t?(pa=!0,n._loopId=setInterval(n._emulateDragOver,50)):(P(document,`mouseup`,n._onDrop),P(document,`touchend`,n._onDrop),P(document,`touchcancel`,n._onDrop),r&&(r.effectAllowed=`move`,i.setData&&i.setData.call(n,r,U)),N(document,`drop`,n),I(U,`transform`,`translateZ(0)`)),fa=!0,n._dragStartId=Ri(n._dragStarted.bind(n,t,e)),N(document,`selectstart`,n),ba=!0,window.getSelection().removeAllRanges(),Yi&&I(document.body,`user-select`,`none`)},_onDragOver:function(e){var t=this.el,n=e.target,r,i,a,o=this.options,s=o.group,c=B.active,l=da===s,u=o.sort,d=Y||c,f,p=this,m=!1;if(Da)return;function h(o,s){H(o,p,Qr({evt:e,isOwner:l,axis:f?`vertical`:`horizontal`,revert:a,dragRect:r,targetRect:i,canSort:u,fromSortable:d,target:n,completed:_,onMove:function(n,i){return ki(K,t,U,r,n,L(n),e,i)},changed:v},s))}function g(){h(`dragOverAnimationCapture`),p.captureAnimationState(),p!==d&&d.captureAnimationState()}function _(r){return h(`dragOverCompleted`,{insertion:r}),r&&(l?c._hideClone():c._showClone(p),p!==d&&(F(U,Y?Y.options.ghostClass:c.options.ghostClass,!1),F(U,o.ghostClass,!0)),Y!==p&&p!==B.active?Y=p:p===B.active&&Y&&(Y=null),d===p&&(p._ignoreWhileAnimating=n),p.animateAll(function(){h(`dragOverAnimationComplete`),p._ignoreWhileAnimating=null}),p!==d&&(d.animateAll(),d._ignoreWhileAnimating=null)),(n===U&&!U.animated||n===t&&!n.animated)&&(xa=null),!o.dragoverBubble&&!e.rootEl&&n!==document&&(U.parentNode[V]._isOutsideThisEl(e.target),!r&&Ba(e)),!o.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),m=!0}function v(){J=R(U),ua=R(U,o.draggable),z({sortable:p,name:`change`,toEl:t,newIndex:J,newDraggableIndex:ua,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),n=si(n,o.draggable,t,!0),h(`dragOver`),B.eventCanceled)return m;if(U.contains(e.target)||n.animated&&n.animatingX&&n.animatingY||p._ignoreWhileAnimating===n)return _(!1);if(pa=!1,c&&!o.disabled&&(l?u||(a=W!==K):Y===this||(this.lastPutMode=da.checkPull(this,c,U,e))&&s.checkPut(this,c,U,e))){if(f=this._getDirection(e,n)===`vertical`,r=L(U),h(`dragOverValid`),B.eventCanceled)return m;if(a)return W=K,g(),this._hideClone(),h(`revert`),B.eventCanceled||(aa?K.insertBefore(U,aa):K.appendChild(U)),_(!0);var y=pi(t,o.draggable);if(!y||Ni(e,f,this)&&!y.animated){if(y===U)return _(!1);if(y&&t===e.target&&(n=y),n&&(i=L(n)),ki(K,t,U,r,n,i,e,!!n)!==!1)return g(),y&&y.nextSibling?t.insertBefore(U,y.nextSibling):t.appendChild(U),W=t,v(),_(!0)}else if(y&&Mi(e,f,this)){var b=fi(t,0,o,!0);if(b===U)return _(!1);if(n=b,i=L(n),ki(K,t,U,r,n,i,e,!1)!==!1)return g(),t.insertBefore(U,b),W=t,v(),_(!0)}else if(n.parentNode===t){i=L(n);var x=0,S,ee=U.parentNode!==t,te=!Fa(U.animated&&U.toRect||r,n.animated&&n.toRect||i,f),C=f?`top`:`left`,w=di(n,`top`,`top`)||di(U,`top`,`top`),ne=w?w.scrollTop:void 0;xa!==n&&(S=i[C],Ca=!1,wa=!te&&o.invertSwap||ee),x=Pi(e,n,i,f,te?1:o.swapThreshold,o.invertedSwapThreshold==null?o.swapThreshold:o.invertedSwapThreshold,wa,xa===n);var re;if(x!==0){var ie=R(U);do ie-=x,re=W.children[ie];while(re&&(I(re,`display`)===`none`||re===G))}if(x===0||re===n)return _(!1);xa=n,Sa=x;var ae=n.nextElementSibling,oe=!1;oe=x===1;var se=ki(K,t,U,r,n,i,e,oe);if(se!==!1)return(se===1||se===-1)&&(oe=se===1),Da=!0,setTimeout(ji,30),g(),oe&&!ae?t.appendChild(U):n.parentNode.insertBefore(U,oe?ae:n),w&&xi(w,0,ne-w.scrollTop),W=U.parentNode,S!==void 0&&!wa&&(Ta=Math.abs(S-L(n)[C])),v(),_(!0)}if(t.contains(U))return _(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){P(document,`mousemove`,this._onTouchMove),P(document,`touchmove`,this._onTouchMove),P(document,`pointermove`,this._onTouchMove),P(document,`dragover`,Ba),P(document,`mousemove`,Ba),P(document,`touchmove`,Ba)},_offUpEvents:function(){var e=this.el.ownerDocument;P(e,`mouseup`,this._onDrop),P(e,`touchend`,this._onDrop),P(e,`pointerup`,this._onDrop),P(e,`pointercancel`,this._onDrop),P(e,`touchcancel`,this._onDrop),P(document,`selectstart`,this)},_onDrop:function(e){var t=this.el,n=this.options;if(J=R(U),ua=R(U,n.draggable),H(`drop`,this,{evt:e}),W=U&&U.parentNode,J=R(U),ua=R(U,n.draggable),B.eventCanceled){this._nulling();return}fa=!1,wa=!1,Ca=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),zi(this.cloneId),zi(this._dragStartId),this.nativeDraggable&&(P(document,`drop`,this),P(t,`dragstart`,this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Yi&&I(document.body,`user-select`,``),I(U,`transform`,``),e&&(ba&&(e.cancelable&&e.preventDefault(),!n.dropBubble&&e.stopPropagation()),G&&G.parentNode&&G.parentNode.removeChild(G),(K===W||Y&&Y.lastPutMode!==`clone`)&&q&&q.parentNode&&q.parentNode.removeChild(q),U&&(this.nativeDraggable&&P(U,`dragend`,this),Ai(U),U.style[`will-change`]=``,ba&&!fa&&F(U,Y?Y.options.ghostClass:this.options.ghostClass,!1),F(U,this.options.chosenClass,!1),z({sortable:this,name:`unchoose`,toEl:W,newIndex:null,newDraggableIndex:null,originalEvent:e}),K===W?J!==ca&&J>=0&&(z({sortable:this,name:`update`,toEl:W,originalEvent:e}),z({sortable:this,name:`sort`,toEl:W,originalEvent:e})):(J>=0&&(z({rootEl:W,name:`add`,toEl:W,fromEl:K,originalEvent:e}),z({sortable:this,name:`remove`,toEl:W,originalEvent:e}),z({rootEl:W,name:`sort`,toEl:W,fromEl:K,originalEvent:e}),z({sortable:this,name:`sort`,toEl:W,originalEvent:e})),Y&&Y.save()),B.active&&((J==null||J===-1)&&(J=ca,ua=la),z({sortable:this,name:`end`,toEl:W,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){H(`nulling`,this),K=U=W=G=aa=q=oa=sa=ha=X=ba=J=ua=ca=la=xa=Sa=Y=da=B.dragged=B.ghost=B.clone=B.active=null;var e=this.el;Oa.forEach(function(t){e.contains(t)&&(t.checked=!0)}),Oa.length=ga=_a=0},handleEvent:function(e){switch(e.type){case`drop`:case`dragend`:this._onDrop(e);break;case`dragenter`:case`dragover`:U&&(this._onDragOver(e),Oi(e));break;case`selectstart`:e.preventDefault()}},toArray:function(){for(var e=[],t,n=this.el.children,r=0,i=n.length,a=this.options;r<i;r++)t=n[r],si(t,a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||Ii(t));return e},sort:function(e,t){var n={},r=this.el;this.toArray().forEach(function(e,t){var i=r.children[t];si(i,this.options.draggable,r,!1)&&(n[e]=i)},this),t&&this.captureAnimationState(),e.forEach(function(e){n[e]&&(r.removeChild(n[e]),r.appendChild(n[e]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return si(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var n=this.options;if(t===void 0)return n[e];var r=ra.modifyOption(this,e,t);n[e]=r===void 0?t:r,e===`group`&&La(n)},destroy:function(){H(`destroy`,this);var e=this.el;e[V]=null,P(e,`mousedown`,this._onTapStart),P(e,`touchstart`,this._onTapStart),P(e,`pointerdown`,this._onTapStart),this.nativeDraggable&&(P(e,`dragover`,this),P(e,`dragenter`,this)),Array.prototype.forEach.call(e.querySelectorAll(`[draggable]`),function(e){e.removeAttribute(`draggable`)}),this._onDrop(),this._disableDelayedDragEvents(),ma.splice(ma.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!sa){if(H(`hideClone`,this),B.eventCanceled)return;I(q,`display`,`none`),this.options.removeCloneOnHide&&q.parentNode&&q.parentNode.removeChild(q),sa=!0}},_showClone:function(e){if(e.lastPutMode!==`clone`){this._hideClone();return}if(sa){if(H(`showClone`,this),B.eventCanceled)return;U.parentNode==K&&!this.options.group.revertClone?K.insertBefore(q,U):aa?K.insertBefore(q,aa):K.appendChild(q),this.options.group.revertClone&&this.animate(U,q),I(q,`display`,``),sa=!1}}},ka&&N(document,`touchmove`,function(e){(B.active||fa)&&e.cancelable&&e.preventDefault()}),B.utils={on:N,off:P,css:I,find:li,is:function(e,t){return!!si(e,t,e,!1)},extend:_i,throttle:yi,closest:si,toggleClass:F,clone:Si,index:R,nextTick:Ri,cancelNextTick:zi,detectDirection:Pa,getChild:fi,expando:V},B.get=function(e){return e[V]},B.mount=function(){var e=[...arguments];e[0].constructor===Array&&(e=e[0]),e.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw`Sortable: Mounted plugin must be a constructor function, not ${{}.toString.call(e)}`;e.utils&&(B.utils=Qr(Qr({},B.utils),e.utils)),ra.mount(e)})},B.create=function(e,t){return new B(e,t)},B.version=Gi,Q=[],Wa=!1,Ya=yi(function(e,t,n,r){if(t.scroll){var i=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,o=t.scrollSensitivity,s=t.scrollSpeed,c=ui(),l=!1,u;Ua!==n&&(Ua=n,Vi(),Ha=t.scroll,u=t.scrollFn,Ha===!0&&(Ha=gi(n,!0)));var d=0,f=Ha;do{var p=f,m=L(p),h=m.top,g=m.bottom,_=m.left,v=m.right,y=m.width,b=m.height,x=void 0,S=void 0,ee=p.scrollWidth,te=p.scrollHeight,C=I(p),w=p.scrollLeft,ne=p.scrollTop;p===c?(x=y<ee&&(C.overflowX===`auto`||C.overflowX===`scroll`||C.overflowX===`visible`),S=b<te&&(C.overflowY===`auto`||C.overflowY===`scroll`||C.overflowY===`visible`)):(x=y<ee&&(C.overflowX===`auto`||C.overflowX===`scroll`),S=b<te&&(C.overflowY===`auto`||C.overflowY===`scroll`));var re=x&&(Math.abs(v-i)<=o&&w+y<ee)-(Math.abs(_-i)<=o&&!!w),ie=S&&(Math.abs(g-a)<=o&&ne+b<te)-(Math.abs(h-a)<=o&&!!ne);if(!Q[d])for(var ae=0;ae<=d;ae++)Q[ae]||(Q[ae]={});(Q[d].vx!=re||Q[d].vy!=ie||Q[d].el!==p)&&(Q[d].el=p,Q[d].vx=re,Q[d].vy=ie,clearInterval(Q[d].pid),(re!=0||ie!=0)&&(l=!0,Q[d].pid=setInterval(function(){r&&this.layer===0&&B.active._onTouchMove(qa);var t=Q[this.layer].vy?Q[this.layer].vy*s:0,n=Q[this.layer].vx?Q[this.layer].vx*s:0;(typeof u!=`function`||u.call(B.dragged.parentNode[V],n,t,e,qa,Q[this.layer].el)===`continue`)&&xi(Q[this.layer].el,n,t)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&f!==c&&(f=gi(f,!1)));Wa=l}},30),Xa=function(e){var t=e.originalEvent,n=e.putSortable,r=e.dragEl,i=e.activeSortable,a=e.dispatchSortableEvent,o=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var c=n||i;o();var l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,u=document.elementFromPoint(l.clientX,l.clientY);s(),c&&!c.el.contains(u)&&(a(`spill`),this.onSpill({dragEl:r,putSortable:n}))}},Ui.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,n=e.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var r=fi(this.sortable.el,this.startIndex,this.options);r?this.sortable.el.insertBefore(t,r):this.sortable.el.appendChild(t),this.sortable.animateAll(),n&&n.animateAll()},drop:Xa},Xr(Ui,{pluginName:`revertOnSpill`}),Wi.prototype={onSpill:function(e){var t=e.dragEl,n=e.putSortable||this.sortable;n.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),n.animateAll()},drop:Xa},Xr(Wi,{pluginName:`removeOnSpill`}),B.mount(new Bi),B.mount(Wi,Ui)})))()}function Qa(e,t,n,r){let i=[],a=null;e._sortable=B.create(e,{handle:`.drag-handle`,filter:`.drag-handle.disabled`,swapThreshold:.5,animation:150,easing:`cubic-bezier(1, 0, 0, 1)`,onStart:e=>{console.log(e),i=$a(e)},onMove:e=>{a=e.related},onEnd:e=>eo(e,r,i,t,n,a)})}var $a,eo;function to(){return(to=e((()=>{Za(),$a=e=>{let t=e.item,n=Array.prototype.slice.call(t.parentNode.childNodes);return n=n.filter(e=>e.nodeType!=Node.ELEMENT_NODE||!e.classList.contains(`sortable-fallback`)),n},eo=(e,t,n,r,i,a)=>{let o=e.item.parentNode;for(let e of n)o.appendChild(e);if(e.oldIndex==e.newIndex)return;let s=r.getArray(),c=e.item.querySelector(`eox-layercontrol-layer`).layer.get(i),l=s.find(e=>e.get(i)===c),u=a.dataset.layer,d=s.find(e=>e.get(i)==u),f,p;for(f=0;f<s.length;f++)if(s[f]==l){r.removeAt(f);break}for(p=0;p<s.length;p++)if(s[p]===d){f>p?r.insertAt(p,l):r.insertAt(p+1,l);break}t.requestUpdate()}})))()}function no(e,t,n,r){let i=e.getArray(),a=!1;i.forEach(e=>{let i=e.ol_uid;e.get(t)||(e.set(t,i),a=!0),e.get(n)||(e.set(n,`layer ${i}`),a=!0),a&&r.requestUpdate()})}function ro(e,t,n){let r=[],i=(e,t,n)=>{r=[...r,...e.filter(e=>e.get(t)===n)];let a=e.filter(e=>e.getLayers);return a.length>0&&a.forEach(e=>i(e.getLayers().getArray(),t,n)),r};return i(e,t,n),r}function io(e,t,n){if(!e||!t)return!1;if(!oo(e,n))return!0;let r=e.get(`minZoom`),i=e.get(`maxZoom`),a=t.getView().getZoom();return a>r&&a<i}function ao(){return(ao=e((()=>{$()})))()}function oo(e,t){let n=e.get(`minZoom`),r=e.get(`maxZoom`);return!(!t||n===-1/0&&r===1/0)}function so(e,t){if(e&&t)return e.getLayers?`group`:t.getInteractions().getArray().filter(e=>e.freehand_!==void 0).map(e=>e.source_)?.ol_uid?.includes(e.getSource?e.getSource()?.ol_uid:void 0)?`draw`:e.declutter_!==void 0||e.get(`type`)===`Vector`?`vector`:`raster`}var co;function lo(){return(lo=e((()=>{$(),De(),co=(e,t,n)=>{let r=t,i=n.layer.getSource(),a=n.layerConfig.schema?.options?.removeProperties??[],o={...e};a.forEach(e=>delete o[e]),i.updateParams?i.updateParams(o):i.getTileUrlFunction&&i.getTileUrlFunction()&&(r||=i.getTileUrlFunction(),i instanceof we&&(i._updatedUrl=Jr(i.getUrls()[0],e)),i.setTileUrlFunction((...t)=>{let n=new URL(r(...t));return a.forEach(e=>n.searchParams.delete(e)),Jr(n.href,e)}),i.setKey(new Date().toISOString()));let s=document.querySelector(`eox-map`);if(s){let t=s.globe;if(t){let r=t.planet.layers.filter(e=>e.name==n.layer.get(`id`))[0];r&&r.setUrl(Jr(r.url,e)),window.eoxMapGlobe.refresh()}}return r}})))()}async function uo(e,t,n){let r=`updateStyleVariables`in t,i=`setStyle`in t,a=r?t.style_:n.style,o=po(e);if(a&&(a.variables={...a.variables||{},...o}),r){let r=e?.variable??e?.band;if(r!==void 0&&r!==t.get(`_lastVariable`)){let i=await Io(t,String(r)),s=i?.targetMin??Fo(t,String(r),n).targetMin,c=i?.targetMax??Fo(t,String(r),n).targetMax;(n?.autofill===!0||n?.schema?.autofill===!0||a?.variables?.min!==void 0||a?.variables?.max!==void 0||n?.schema?.properties?.min!==void 0||n?.schema?.properties?.max!==void 0)&&(e&&(`min`in e&&(e.min=s),`max`in e&&(e.max=c)),o.min=s,o.max=c,a?.variables&&(a.variables.min=s,a.variables.max=c))}let i=t.get(`_geozarrDimensions`),s=t.getSource?t.getSource():null;if(s&&typeof s.updateDimensions==`function`&&i){let t={};for(let n of Object.keys(i))e[n]!==void 0&&(t[n]=Number(e[n]));Object.keys(t).length>0&&s.updateDimensions(t)}t.updateStyleVariables(o)}else if(i&&a){let e=fo(a);t.setStyle(e)}}function fo(e){let t=e;if(`variables`in e){let n=JSON.stringify(e),{variables:r}=e;for(let e in r)n=typeof r[e]==`number`?n.replaceAll(`["var","${e}"]`,String(r[e])):n.replaceAll(`["var","${e}"]`,`"${r[e]}"`);t=JSON.parse(n)}return t}var po;function mo(){return(mo=e((()=>{$(),po=e=>{let t={};for(let n in e)if(typeof e[n]==`object`&&e[n]!==null){let r=po(e[n]);for(let e in r)t[e]=r?.[e]}else t[n]=e?.[n];return t}})))()}function ho(){return(ho=e((()=>{lo(),mo()})))()}var go;function _o(){return(_o=e((()=>{ho(),go=(e,t,n)=>{if(!e)return;let r=po(t),i,a;return a=Array.isArray(e)?structuredClone(e):[structuredClone(e)],i=a.filter(e=>{if(!(`boundTo`in e))return!0;let t=e.boundTo.key,n=e.boundTo.value;return t in r&&r[t]==n}),i.length||(i=null),i?.map(e=>{if(delete e.boundTo,e.rangeProperty&&n){let t=r[e.rangeProperty];t&&n[t]?(e.range=n[t],delete e.rangeProperty):t&&(e.range=[`#ffffff`,`#000000`])}return!(`domainProperties`in e)||`domain`in e?e:Object.keys(e)?.reduce((t,n)=>(n===`domainProperties`?t.domain=e[n].map(e=>r[e]):t[n]=e[n],t),{})}).filter(Boolean)}})))()}function vo(e,t){if(!t)return null;let n={},r=`updateStyleVariables`in e?e.styleVariables_||e.style_?.variables||e.get?.(`style`)?.variables:t.style?.variables;if((t.type===`style`||t.style)&&r)n={...r};else if(e.getSource()?.getParams?.())n=e.getSource().getParams();else if(e.getSource()?.getTileUrlFunction?.())try{let t=e.getSource().getTileUrlFunction()([0,0,0]);if(t){let e=new URL(t);n={};for(let[t,r]of e.searchParams.entries()){let i=e.searchParams.getAll(t);n[t]=i.length>1?i:r}}}catch(e){console.error(`Error parsing start values from tile URL`,e)}else return null;let i=t;n.min===void 0&&i.min!==void 0&&(n.min=i.min),n.max===void 0&&i.max!==void 0&&(n.max=i.max),n.bands===void 0&&i.bands!==void 0&&(n.bands=i.bands),n.band===void 0&&i.band!==void 0&&(n.band=i.band),n.variable===void 0&&(n.variable=i.variable??i.band??(Array.isArray(i.bands)&&i.bands.length>0?i.bands[0]:void 0)??e.get?.(`_lastVariable`));let a=yo(t.schema),o=bo(Object.keys(a).length?a:t.schema,n,t.schema,e);return Object.keys(o).length?o:null}function yo(e,t=e,n=new Set){if(!e||typeof e!=`object`)return{};let r={};typeof e.$ref==`string`&&!n.has(e.$ref)&&(n.add(e.$ref),Object.assign(r,yo(xo(e.$ref,t),t,n)));for(let i of[`anyOf`,`oneOf`,`allOf`])if(Array.isArray(e[i]))for(let a of e[i])Object.assign(r,yo(a,t,n));return Object.assign(r,e.properties)}function bo(e,t,n=e,r=null){let i={};for(let a in e){let o=e[a]?.type;if(o&&o!==`object`&&t[a]!==void 0){let e=[`number`,`integer`].includes(o)?Number(t[a]):t[a];i[a]=Number.isNaN(e)?t[a]:e}else if(a===`variable`&&o&&o!==`object`&&r){let t=r.getSource?r.getSource():null,n=r.get?.(`_lastVariable`)||(typeof t?.getBands==`function`?t.getBands():null)||t?.bands_||r.get?.(`_jsonDefinition`)?.source?.bands||r.get?.(`source`)?.bands,o=Array.isArray(n)&&n.length>0?n[0]:typeof n==`string`?n:void 0;o&&(!Array.isArray(e[a]?.enum)||e[a].enum.includes(o))?i[a]=o:e[a]?.default===void 0?Array.isArray(e[a]?.enum)&&e[a].enum.length>0&&(i[a]=e[a].enum[0]):i[a]=e[a].default}else if(o&&o!==`object`&&e[a]?.default!==void 0)i[a]=e[a].default;else if(o&&o!==`object`&&Array.isArray(e[a]?.enum)&&e[a].enum.length>0)i[a]=e[a].enum[0];else{let o=bo(yo(e[a],n),t,n,r);Object.keys(o).length>0&&(i[a]=o)}}return i}function xo(e,t){if(e.startsWith(`#/`))return e.slice(2).split(`/`).reduce((e,t)=>e?.[t.replace(/~1/g,`/`).replace(/~0/g,`~`)],t)}function So(){return{dots:o`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:o`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:o`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:o`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:o`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:o`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:o`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:o`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}var Co,wo,To,Eo,Do;function Oo(){return(Oo=e((()=>{d(),Co=(e,t)=>e?.filter(e=>[`remove`,`sort`].filter(e=>!t?.get(`layerControlDisable`)||e!==`sort`).includes(e)),wo=(e,t)=>e?.filter(e=>{let n=!0;return[`remove`,`sort`].includes(e)&&(n=!1),e===`info`&&(n=t.get(`description`)),e===`config`&&(n=t.get(`layerConfig`)),e===`datetime`&&(n=t.get(`layerDatetime`)),e===`legend`&&(n=t.get(`layerLegend`)),n}),To=(e,t,n)=>o`
  <button
    slot="${e}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${n?e:o`<i class="small primary-text">${t}</i>`}
  </button>
`,Eo=(e,t)=>o`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{let{layer:t}=e;t?.set(`layerControlOptional`,!0),t?.setVisible(!1),e.dispatchEvent(new CustomEvent(`changed`,{detail:t,bubbles:!0}))}}
  >
    ${e.unstyled?`x`:o`<i class="small red-text">${t}</i>`}
  </button>
`,Do=(e,t,n)=>o`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${e.layer.get(`layerControlDisable`)?`disabled`:``}"
    style="cursor: ns-resize;"
  >
    ${n?`═`:o`<i class="small primary-text">${t}</i>`}
  </button>
`})))()}var ko;function Ao(){return(Ao=e((()=>{ko=e=>{let t=[`layerControlHide`,`layerControlOptional`];return e?.getArray()?.filter(e=>t.every(t=>!e.get(t)))}})))()}function jo(e,t){let n=e.get(`layerDatetime`)?.sliceMap;if(!n||!(t in n))return;let r=e.getSource?.();typeof r?.updateDimensions==`function`&&r.updateDimensions({time:n[t]})}function Mo(e,t){t.dispatchEvent(new CustomEvent(`datetime:updated`,{detail:e.detail,bubbles:!0}))}function No(e,t){let n=Math.abs(t-e);return n===0?.01:n<=.01?1e-4:n<=.1?.001:n<=1?.01:n<=10?.1:1}function Po(e,t,n){if(Array.isArray(n)&&n.length===2&&typeof n[0]==`number`&&typeof n[1]==`number`&&!Number.isNaN(n[0])&&!Number.isNaN(n[1])){let r=n[0],i=n[1],a=No(r,i);return{minProp:{type:`number`,format:`number`,title:`Min Value`,default:e===void 0?r:e,minimum:r,maximum:i,step:a},maxProp:{type:`number`,format:`number`,title:`Max Value`,default:t===void 0?i:t,minimum:r,maximum:i,step:a}}}let r=e===void 0?0:e,i=t===void 0?1:t,a=typeof e==`number`?Math.min(0,e):0,o=typeof t==`number`&&t>a?t:a+1,s=No(a,o);return{minProp:{type:`number`,format:`range`,title:`Min Value`,default:r,minimum:a,maximum:o,step:s},maxProp:{type:`number`,format:`range`,title:`Max Value`,default:i,minimum:a,maximum:o,step:s}}}function Fo(e,t,n){let r=(e?.get?e.get(`_geozarrVariables`):e?._geozarrVariables)?.[t]?.valid_range,i,a;return Array.isArray(r)&&r.length===2&&typeof r[0]==`number`&&typeof r[1]==`number`&&!Number.isNaN(r[0])&&!Number.isNaN(r[1])&&(i=r[0],a=r[1]),{targetMin:i===void 0?0:i,targetMax:a===void 0?1:a}}async function Io(e,t){if(!e||!t)return;let n=e.getSource?e.getSource():null,r=e.get(`_geozarrSourceUrl`)||e.get(`_jsonDefinition`)?.source?.url||e.get(`source`)?.url||e.get(`_geozarrRootUrl`),i=n;if(n){if(typeof n.setBands==`function`)n.setBands([t]);else if(r&&n.constructor){let a=n.constructor,o=n.getProjection?.()||e.get(`_mapProjection`)||e.get(`_jsonDefinition`)?.source?.projection,s=new a({url:r,bands:[t],crossOrigin:`anonymous`,...o?{projection:o}:{}});e.setSource(s),i=s}}if(typeof i?.ready==`function`)try{await i.ready()}catch{}e.set(`_lastVariable`,t);let a=e.get(`bands`)||(Array.isArray(e.get(`_jsonDefinition`)?.source?.bands)?e.get(`_jsonDefinition`)?.source?.bands:null),o=Array.isArray(a)&&a.length>1?a:[t];e.get(`bands`)!==void 0&&e.set(`bands`,o),e.get(`band`)!==void 0&&e.set(`band`,t);let s=e.get(`layerConfig`),{targetMin:c,targetMax:l}=Fo(e,t,s),u=(e?.get?e.get(`_geozarrVariables`):e?._geozarrVariables)?.[t]?.valid_range,{minProp:d,maxProp:f}=Po(c,l,u),p=s;if(s){let n=s?.autofill===!0||s?.schema?.autofill===!0,r;s.schema?.properties&&(r={...s.schema.properties},r.variable&&(r.variable={...r.variable,default:t}),r.band&&(r.band={...r.band,default:t}),r.bands&&(r.bands={...r.bands,default:r.bands.type===`array`?o:o[0]}),r.redMax||r.greenMax||r.blueMax||((r.min!==void 0||n)&&(r.min={...r.min||{},...d,default:c}),(r.max!==void 0||n)&&(r.max={...r.max||{},...f,default:l}))),p={...s,bands:o,band:t,...n||s.min!==void 0?{min:c}:{},...n||s.max!==void 0?{max:l}:{},schema:r?{...s.schema,properties:r}:s.schema},e.set(`layerConfig`,p)}if(s?.autofill===!0||s?.schema?.autofill===!0||e.styleVariables_?.min!==void 0||e.styleVariables_?.max!==void 0||e.style_?.variables?.min!==void 0||e.style_?.variables?.max!==void 0||e.get?.(`style`)?.variables?.min!==void 0||e.get?.(`style`)?.variables?.max!==void 0||s?.schema?.properties?.min!==void 0||s?.schema?.properties?.max!==void 0){typeof e.updateStyleVariables==`function`&&e.updateStyleVariables({min:c,max:l}),e.styleVariables_&&(e.styleVariables_.min=c,e.styleVariables_.max=l),e.style_?.variables&&(e.style_.variables.min=c,e.style_.variables.max=l);let t=e.get?.(`style`);t?.variables&&(t.variables.min=c,t.variables.max=l)}if(i&&typeof i.getDimensions==`function`)try{let t=await i.getDimensions();if(t){let n={};for(let[r,a]of Object.entries(t)){if(r===`time`||!a||a.size<=0)continue;n[r]=a;let t=e.get(`layerConfig`)||p,o=t?.autofill===!0||t?.schema?.autofill===!0;if(t?.schema?.properties&&(t.schema.properties[r]!==void 0||o)){let n=a.attributes?.long_name||r.charAt(0).toUpperCase()+r.slice(1),i=a.attributes?.units,o=i?`${n} (${i})`:n,s={...t.schema.properties};s[r]={type:`integer`,title:o,default:0,minimum:0,maximum:a.size-1,step:1,format:`range`,...s[r]||{}},p={...t,schema:{...t.schema,properties:s}},e.set(`layerConfig`,p)}typeof i.updateDimensions==`function`&&i.updateDimensions({[r]:0})}if(e.set(`_geozarrDimensions`,n),t?.time&&t.time.size>0){let n=t.time,{units:r}=n.attributes||{},a=0,o=1e3;if(r&&typeof r==`string`&&r.includes(` since `)){let e=r.split(` since `),t=e[1].trim();!t.includes(`T`)&&!t.includes(`Z`)&&(t=t.replace(` `,`T`)+`Z`),a=Date.parse(t)||0;let n=e[0].toLowerCase();n.includes(`day`)?o=864e5:n.includes(`nanosecond`)?o=1e-6:n.includes(`microsecond`)?o=.001:n.includes(`millisecond`)?o=1:n.includes(`second`)&&(o=1e3)}let s=e=>typeof e==`string`?new Date(e):new Date(a+Number(e)*o),c=await Promise.all([...Array(n.size).keys()].map(async e=>{let t=typeof i.getValue==`function`?await i.getValue(`time`,e):e;return{index:e,date:s(t)}}));c.sort((e,t)=>e.date.getTime()-t.date.getTime());let l={},u=c.map(e=>{let t=e.date.toISOString();return l[t]=e.index,t}),d=e.get(`layerDatetime`)||{},f=d.currentStep&&u.includes(d.currentStep)?d.currentStep:u[0];e.set(`layerDatetime`,{showUTC:!0,slider:!0,navigation:!0,...d,controlValues:u,sliceMap:l,currentStep:f});let p=u.map(e=>({date:e}));e.set(`timeControlValues`,p);let m=l[f]??0;typeof i.updateDimensions==`function`&&i.updateDimensions({time:m})}}}catch(e){console.warn(`Could not refresh GeoZarr dimensions for new band:`,e)}return{targetMin:c,targetMax:l}}function $(){return($=e((()=>{Vr(),Wr(),qr(),to(),ao(),_o(),Oo(),Ao()})))()}var Lo=r(((e,t)=>{var n=`Expected a function`,r=NaN,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,l=typeof global==`object`&&global&&global.Object===Object&&global,u=typeof self==`object`&&self&&self.Object===Object&&self,d=l||u||Function(`return this`)(),f=Object.prototype.toString,p=Math.max,m=Math.min,h=function(){return d.Date.now()};function g(e,t,r){var i,a,o,s,c,l,u=0,d=!1,f=!1,g=!0;if(typeof e!=`function`)throw TypeError(n);t=x(t)||0,v(r)&&(d=!!r.leading,f=`maxWait`in r,o=f?p(x(r.maxWait)||0,t):o,g=`trailing`in r?!!r.trailing:g);function _(t){var n=i,r=a;return i=a=void 0,u=t,s=e.apply(r,n),s}function y(e){return u=e,c=setTimeout(ee,t),d?_(e):s}function b(e){var n=e-l,r=e-u,i=t-n;return f?m(i,o-r):i}function S(e){var n=e-l,r=e-u;return l===void 0||n>=t||n<0||f&&r>=o}function ee(){var e=h();if(S(e))return te(e);c=setTimeout(ee,b(e))}function te(e){return c=void 0,g&&i?_(e):(i=a=void 0,s)}function C(){c!==void 0&&clearTimeout(c),u=0,i=l=a=c=void 0}function w(){return c===void 0?s:te(h())}function ne(){var e=h(),n=S(e);if(i=arguments,a=this,l=e,n){if(c===void 0)return y(l);if(f)return c=setTimeout(ee,t),_(l)}return c===void 0&&(c=setTimeout(ee,t)),s}return ne.cancel=C,ne.flush=w,ne}function _(e,t,r){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(n);return v(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),g(e,t,{leading:i,maxWait:t,trailing:a})}function v(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}function y(e){return!!e&&typeof e==`object`}function b(e){return typeof e==`symbol`||y(e)&&f.call(e)==`[object Symbol]`}function x(e){if(typeof e==`number`)return e;if(b(e))return r;if(v(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=v(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=e.replace(i,``);var n=o.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):a.test(e)?r:+e}t.exports=_})),Ro;function zo(){return(zo=e((()=>{c(),Ro=e=>e??i})))()}function Bo(){return(Bo=e((()=>{zo()})))()}var Vo;function Ho(){return(Ho=e((()=>{d(),Bo(),Vo=class extends l{static properties={unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}};constructor(){super(),this.unstyled=!1,this.noShadow=!1,this.layer=null}#e=[];get layerLegend(){return this.#e?this.#e.length>1?this.#e:this.#e[0]:null}set layerLegend(e){this.#e=e?Array.isArray(e)?e.map((e,t)=>({id:(this.layer?.get(`id`)??``)+t,...e})):[{id:(this.layer?.get(`id`)??``)+0,...e}]:null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{this.#e=this.#e?.map(e=>(this.offsetWidth!==e.width&&(e.width=this.offsetWidth),{...e})),this.requestUpdate()}).observe(this.renderRoot.querySelector(`.legend-container`))}render(){return customElements.get(`color-legend`)||console.error("Please import `color-legend-element` in order to use layerLegend"),o`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#n}
      </style>
      ${y(this.layerLegend,()=>o`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${this.#e.map((e,t,n)=>o`
                <color-legend
                  id="${e.id}"
                  width=${e.width??325}
                  scaleType="${Ro(e.scaleType)}"
                  markType="${Ro(e.markType)}"
                  titleText="${Ro(e.title)}"
                  .range=${e.range}
                  .domain=${e.domain}
                  tickFormat="${Ro(e.tickFormat)}"
                  .ticks=${e.ticks??5}
                  .tickValues=${e.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${t===n.length-1?i:o`<div class="separator"></div>`}
              `)}
          </div>
        `)}
    `}#t=s`
    .separator {
      margin: 0 0 24px 0;
    }
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      --cle-padding: 0;
    }
  `;#n=``},customElements.define(`eox-layercontrol-layer-legend`,Vo)})))()}var Uo,Wo;function Go(){return(Go=e((()=>{d(),$(),ho(),Uo=t(Lo(),1),Ho(),Wo=class extends l{static properties={layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};#e={};#t=null;#n;constructor(){super(),this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=(0,Uo.default)(this.#i,1e3),this.customEditorInterfaces=[],this.colormapRegistry=null}connectedCallback(){super.connectedCallback(),this.layer?.on&&this.layer.on(`propertychange`,this.#r)}disconnectedCallback(){super.disconnectedCallback(),this.layer?.un&&this.layer.un(`propertychange`,this.#r)}#r=e=>{if(e.key===`layerConfig`){this.layerConfig=this.layer.get(`layerConfig`);let e=vo(this.layer,this.layerConfig)||{},t=this.layerConfig?.schema?.properties,n=this.layerConfig?.autofill===!0||this.layerConfig?.schema?.autofill===!0;this.layerConfig?.min!==void 0&&(n||t?.min!==void 0)&&(this.#e.min=this.layerConfig.min),this.layerConfig?.max!==void 0&&(n||t?.max!==void 0)&&(this.#e.max=this.layerConfig.max);let r=this.layer.get(`_lastVariable`)||this.layerConfig?.band||(Array.isArray(this.layerConfig?.bands)?this.layerConfig.bands[0]:void 0);if(r&&(n||t?.variable!==void 0||t?.band!==void 0)&&(t?.band===void 0?this.#e.variable=r:this.#e.band=r),this.#t={...this.#e,...e},t&&!n){let e=new Set(Object.keys(t));for(let t of Object.keys(this.#t))e.has(t)||delete this.#t[t]}this.#e={...this.#t},this.requestUpdate()}};updated(e){if(e.has(`layer`)){let t=e.get(`layer`);t?.un&&t.un(`propertychange`,this.#r),this.layer?.on&&this.layer.on(`propertychange`,this.#r)}if(e.has(`layerConfig`)){let e=this.layerConfig?.type===`style`||this.layerConfig?.style?100:1e3;this.throttleDataChange=(0,Uo.default)(this.#i,e)}}async#i(e){let t=this.#e?.variable??this.#e?.band??this.layer?.get?.(`_lastVariable`)??this.layerConfig?.band??(Array.isArray(this.layerConfig?.bands)?this.layerConfig.bands[0]:void 0),n=e.detail?.variable??e.detail?.band,r=n!==void 0&&t!==void 0&&String(n)!==String(t);if(r){let{targetMin:t,targetMax:r}=Fo(this.layer,String(n),this.layerConfig);e.detail&&((`min`in e.detail||this.layerConfig?.min!==void 0)&&(e.detail.min=t),(`max`in e.detail||this.layerConfig?.max!==void 0)&&(e.detail.max=r))}if(this.#e={...e.detail},this.layerConfig?.type===`style`||this.layerConfig?.style?`setStyle`in this.layer||`updateStyleVariables`in this.layer?await uo(this.#e,this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get(`type`)??``} does not support styles configuration`):this.#n=co(this.#e,this.#n,this),r){this.layerConfig=this.layer?.get?.(`layerConfig`)||this.layerConfig;let e=vo(this.layer,this.layerConfig)||{},t=this.layerConfig?.schema?.properties,r=this.layerConfig?.autofill===!0||this.layerConfig?.schema?.autofill===!0;if(this.#t={...this.#e,...e,...n&&(r||t?.variable!==void 0||t?.band!==void 0)?t?.band===void 0?{variable:n}:{band:n}:{},...this.#e.min!==void 0&&(r||t?.min!==void 0)?{min:this.#e.min}:{},...this.#e.max!==void 0&&(r||t?.max!==void 0)?{max:this.#e.max}:{}},t&&!r){let e=new Set(Object.keys(t));for(let t of Object.keys(this.#t))e.has(t)||delete this.#t[t]}this.#e={...this.#t};let i=this.renderRoot?.querySelector(`eox-jsonform`);i?.editor&&!i.editor.destroyed&&i.editor.ready&&i.editor.setValue(this.#e)}this.dispatchEvent(new CustomEvent(`layerConfig:change`,{bubbles:!0,detail:{jsonformValue:this.#e,layer:this.layer}})),this.requestUpdate()}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){let e=vo(this.layer,this.layerConfig)||{};this.#t={...e,...this.#e};let t=this.layerConfig?.schema?.properties,n=this.layerConfig?.autofill===!0||this.layerConfig?.schema?.autofill===!0;if(t&&!n){let e=new Set(Object.keys(t));for(let t of Object.keys(this.#t))e.has(t)||delete this.#t[t]}this.#e={...this.#t},customElements.get(`eox-jsonform`)||console.error(`Please import @eox/jsonform in order to use layerconfig`);let r={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0,no_additional_properties:!0};return o`
      <style>
        ${this.#a}
        ${!this.unstyled&&this.#o}
      </style>
      ${y(this.layerConfig,()=>o`
          ${y(this.layerConfig.legend,()=>o`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${go(this.layerConfig.legend,this.#t,this.colormapRegistry)}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${this.#t}
            .options=${r}
            .noShadow=${!0}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}#a=s`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      font-size: small;
    }
  `;#o=s`
    input[type="range"],
    eox-jsonform {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
    eox-layercontrol-layer-legend {
      display: block;
      margin-bottom: 1rem;
    }
  `},customElements.define(`eox-layercontrol-layerconfig`,Wo)})))()}var Ko,qo;function Jo(){return(Jo=e((()=>{d(),Ko=t(vn(),1),qo=class extends l{static properties={unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}};constructor(){super(),this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}disconnectedCallback(){this.#e.flush(),super.disconnectedCallback()}#e=(0,Ko.default)(jo,300);#t(e){let t=new Date(e.detail.date[0]),n=this.layerDatetime.controlValues?.some(e=>typeof e==`string`&&e.includes(`T`)),r;r=n?t.toISOString():(e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`)(t),r!==this.layerDatetime.currentStep&&(this.dispatchEvent(new CustomEvent(`datetime:updated`,{bubbles:!0,detail:{datetime:r,layer:this.layer}})),this.#e(this.layer,r),this.layerDatetime.currentStep=r,this.requestUpdate())}render(){return customElements.get(`eox-timecontrol`)||console.error(`Please import @eox/timecontrol in order to use layerDatetime`),o`
      <style>
        ${this.#n}
        ${!this.unstyled&&this.#r}
      </style>
      ${y(this.layerDatetime,()=>o`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get(`id`),name:this.layer.get(`name`)||this.layer.get(`title`),timeControlValues:this.layerDatetime.controlValues.map(e=>({date:e}))}]}
            @select=${this.#t}
            .showUTC=${this.layerDatetime.showUTC||!1}
          >
            <eox-timecontrol-date
              .navigation=${this.layerDatetime.navigation??!1}
              .format=${this.layerDatetime.displayFormat}
            ></eox-timecontrol-date>
            <eox-timecontrol-slider
              animate-onclick-interval="${this.layerDatetime.animateOnClickInterval??`0.3s`}"
            ></eox-timecontrol-slider>
          </eox-timecontrol>
        `)}
    `}#n=``;#r=``},customElements.define(`eox-layercontrol-layer-datetime`,qo)})))()}var Yo;function Xo(){return(Xo=e((()=>{d(),C(),Yo=class extends l{static properties={actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}};constructor(){super(),this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#e=e=>(this.selectedTab===e||this.toolsAsList)&&`highlighted`;render(){let e=this.tabs,t=this.actions,n=t.length+e.length>1;return o`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#n}
      </style>
      <div class="${this.toolsAsList?`listed`:`tabbed`}">
        <!-- Navigation for tabs and actions -->
        ${y(n,()=>o`
            <nav>
              ${y(!this.toolsAsList,()=>o`
                  <div>
                    <!-- Labels for tabs -->
                    ${h(e,(e,t)=>o`
                        <label
                          class=${this.#e(t)}
                          @click=${()=>this.selectedTab=t}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${e}-icon`}>${e}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${h(t,e=>o`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${e}-icon`}>${e}</slot>
                        </span>
                      `)}
                  </div>
                `)}
            </nav>
          `)}
        <figure
          class="no-round small-padding vertical-padding"
          style="overflow: hidden; white-space: normal"
        >
          <!-- Content for each tab -->
          ${h(e,(t,n)=>o`
              ${y(this.toolsAsList,()=>o`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${t}-icon`}>${t}</slot>
                    <span>${t}</span>
                  </label>
                `)}
              <div class="tab ${this.#e(n)}">
                <!-- Content slot for each tab -->
                <slot name=${`${t}-content`}>${t}</slot>
              </div>
              ${y(this.toolsAsList&&n<e.length-1,()=>o`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}#t=`
    .tabbed figure,
    .listed figure {
      margin: 0;
    }
    .tabbed nav,
    .listed nav {
      display: flex;
      justify-content: space-between;
    }
    .tabbed nav div,
    .listed nav div {
      display: flex;
    }
    .tabbed .tab,
    .listed .tab {
      display: none;
    }
    .tabbed .tab.highlighted,
    .listed .tab.highlighted {
      display: block;
    }
    .listed .tab {
      margin-bottom: .5rem;
    }
  `;#n=`
    ${se}
    figure {
      padding: var(--padding-vertical) var(--padding);
    }
    .listed [name*=-icon] {
      display: none;
    }
    .listed [name*=-icon]+span {
      text-transform: capitalize;
      font-weight: bold;
    }
    .tabbed > nav > div > label,
    .tabbed > nav > div > span {
      border-bottom: 1px solid var(--surface-variant);
    }
    .tabbed > nav > div > label.highlighted,
    .tabbed > nav > div > span.highlighted {
      border-bottom: 2px solid var(--outline-variant);
    }
    :host {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
  `},customElements.define(`eox-layercontrol-tools-items`,Yo)})))()}var Zo;function Qo(){return(Qo=e((()=>{d(),Be(),b(),C(),Go(),Jo(),Ho(),Xo(),$(),Zo=class extends l{static properties={layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},open:{type:Boolean,reflect:!0},toolsAutoExpand:{attribute:`tools-auto-expand`,type:Boolean},embedded:{state:!0},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.open=!1,this.toolsAutoExpand=!1,setTimeout(()=>{let e=this.parentElement||this.getRootNode()?.host;this.embedded=e?.tagName===`EOX-LAYERCONTROL-LAYER`,(this.open===void 0||this.open===!1||this.open===null)&&(this.open=this.toolsAutoExpand?!!this.layer?.getVisible():this.embedded===!1||!!this.layer?.get(`layerControlToolsExpand`))}),this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layer?.on?.(`propertychange`,e=>{let t=e;(t.key===`layerConfig`||t.key===`layerDatetime`||t.key===`timeControlValues`)&&this.requestUpdate()})}updated(e){this.toolsAutoExpand&&(e.has(`toolsAutoExpand`)||e.has(`layer`))&&(this.open=!!this.layer?.getVisible())}#e(e){this.dispatchEvent(new CustomEvent(`layerConfig:change`,{bubbles:!0,detail:{jsonformValue:e.detail.jsonformValue,layer:e.detail.layer}}))}_removeButton=e=>Eo(this,e);_sortButton=e=>Do(this,e,this.unstyled);_button=(e,t)=>To(e,t,this.unstyled);_getDefaultTools=e=>o`
      <div slot="info-content">
        ${Ve(this.layer.get(`description`))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${v(this.layer?.getOpacity())}
            class="tiny max"
            @input=${e=>{this.layer.setOpacity(parseFloat(e.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(this.layer?.getOpacity()*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${y(this.layer.get(`layerConfig`),()=>o`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get(`layerConfig`)}
              .colormapRegistry=${this.colormapRegistry}
              .unstyled=${this.unstyled}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
              @layerConfig:change=${this.#e}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${y(this.layer.get(`layerDatetime`),()=>o`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get(`layerDatetime`)}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${e=>Mo(e,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${y(this.layer.get(`layerLegend`),()=>o`
            <eox-layercontrol-layer-legend
              slot="legend-content"
              .noShadow=${!0}
              .layerLegend=${this.layer.get(`layerLegend`)}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-legend>
          `)}
      </div>
      <div slot="remove-icon">${this._removeButton(e.remove)}</div>
      <div slot="sort-icon">${this._sortButton(e.sort)}</div>
    `;render(){let e=Co(this.tools,this.layer),t=wo(this.tools,this.layer),n=e?.length,r=t?.length;return o`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#n}
      </style>
      ${y(n+r>0,()=>o`
          ${y(n!==1||r!==0,()=>o`
              <details
                class="tools"
                .open=${v(this.open)}
                @toggle=${e=>{this.open=e.target.open}}
              >
                <summary></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?`tools-list`:`tools-tab`}"
                  .noShadow=${!1}
                  .actions=${e}
                  .tabs=${t}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${h(t,e=>this._button(e,So()[e]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(So())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}#t=``;#n=`
    ${this.embedded?``:se}
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    .single-action {
      position: relative;
    }
    details.tools summary button {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 1.5rem;
      top: -32px;
      height: 24px;
      cursor: pointer;
      display: var(--layer-tools-button-visibility);
    }
    .single-action,
    details.tools summary {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    .single-action:hover,
    details.tools summary:hover {
      opacity: 1;
    }
    [slot=info-content],
    [slot=opacity-content],
    [slot=config-content],
    [slot=datetime-content],
    [slot=legend-content] {
      padding: 6px 0;
    }
    [slot=info-content] * {
      max-width: 100%;
    }
    /*eox-layercontrol-layerconfig {
      border: 1px solid var(--outline-variant);
      padding: .5rem !important;
      display: block;
    }*/
    :host {
      display: block;
      margin-block: var(--padding-vertical) !important;
    }
    details[open] eox-layercontrol-tools-items {
      display: block;
    }
  `},customElements.define(`eox-layercontrol-layer-tools`,Zo)})))()}var $o;function es(){return(es=e((()=>{$(),$o=e=>{let t=()=>{let t=io(e.layer,e.map,e.showLayerZoomState),n=!1;!t&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,n=!0):t&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,n=!0),n&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent(`change:resolution`,{bubbles:!0})))};oo(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on(`change:resolution`,()=>t())),e.layer?.on?.(`propertychange`,t=>{let n=t;(n.key===`layerDatetime`||n.key===`layerConfig`||n.key===`timeControlValues`)&&e.requestUpdate()})}})))()}var ts;function ns(){return(ns=e((()=>{ts=(e,t)=>{let n=t.layer;if(n.setVisible(e.target.checked),t.toolsAutoExpand){let n=t.renderRoot.querySelector(`eox-layercontrol-layer-tools`);n&&(n.open=e.target.checked)}e.target.checked&&n.get(`layerControlExclusive`)&&t.closest(`${t.globallyExclusiveLayers?`.layers`:`eox-layercontrol-layer-list`} > ul`).querySelectorAll(`eox-layercontrol-layer`).forEach(e=>{if(e.layer!==n&&e.layer?.get(`layerControlExclusive`)){if(e.layer.setVisible(!1),e.toolsAutoExpand){let t=e.renderRoot.querySelector(`eox-layercontrol-layer-tools`);t&&(t.open=!1)}e.requestUpdate()}}),t.dispatchEvent(new CustomEvent(`changed`,{bubbles:!0,detail:n})),t.requestUpdate()}})))()}function rs(){return(rs=e((()=>{es(),ns()})))()}var is;function as(){return(as=e((()=>{d(),b(),Qo(),rs(),Oo(),is=class extends l{static properties={layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:`title-property`,type:String},showLayerZoomState:{attribute:`show-layer-zoom-state`,type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:`tools-auto-expand`,type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};currLayerVisibilityBasedOnZoom=!0;constructor(){super(),this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty=`title`,this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}#e(e){return this.layer?.get(e)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){$o(this)}#t(e){ts(e,this)}render(){let e=this.layer.getVisible(),t=e?`visible`:``,n=this.currLayerVisibilityBasedOnZoom?``:`zoom-state-invisible`,r=this.#e(`layerControlDisable`)?`disabled`:``,a=this.#e(`layerControlExclusive`)?`radio`:`checkbox`,s=Co(this.tools,this.layer)?.length>0,c=wo(this.tools,this.layer)?.length>0,l=document.querySelector(`eox-layercontrol-layer-tools`);return l&&Object.assign(l,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),o`
      <style>
        ${this.#n}
        ${!this.unstyled&&this.#r}
        
        /* Make sure the CSS variable is applied to the layer type icon */
        .small.grey-text {
          display: var(--layer-type-visibility);
        }
      </style>
      ${y(this.layer,()=>o`
          <!-- Render the layer -->
          <nav
            class="layer ${r} ${t} ${n} responsive tiny-space"
          >
            ${y(!this.unstyled,()=>{if(this.#e(`color`))return o`
                  <i class="small" style="color: ${this.#e(`color`)}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case`group`:return o` <i class="small"> </i> `;case`draw`:return o`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-square-edit</title>
                        <path
                          d="M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z"
                        />
                      </svg>
                    </i>
                  `;case`vector`:return o`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-polygon</title>
                        <path
                          d="M2,2V8H4.28L5.57,16H4V22H10V20.06L15,20.05V22H21V16H19.17L20,9H22V3H16V6.53L14.8,8H9.59L8,5.82V2M4,4H6V6H4M18,5H20V7H18M6.31,8H7.11L9,10.59V14H15V10.91L16.57,9H18L17.16,16H15V18.06H10V16H7.6M11,10H13V12H11M6,18H8V20H6M17,18H19V20H17"
                        />
                      </svg>
                    </i>
                  `;case`raster`:return o`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>checkerboard</title>
                        <path
                          d="M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z"
                        />
                      </svg>
                    </i>
                  `;default:return o` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${r}">
              <span class="layertitle truncate"
                >${this.#e(this.titleProperty)}</span
              >
            </div>

            ${y(c&&!this.toolsAutoExpand,()=>o`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:`dots`}"
                  @click=${()=>{let e=this.renderRoot.querySelector(`eox-layercontrol-layer-tools`);e.open=!e.open}}
                >
                  <i class="small">
                    ${So()[this.tools.length>1?`dots`:this.tools[0]]}
                  </i>
                  <!--<span class="tooltip top" style="pointer-events: none">Tools</span>-->
                </button>
              `)}
            ${y(!c&&s,()=>this.tools[0]===`remove`?Eo(this,So()[this.tools[0]]):Do(this,So()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${r} ${a} icon primary-text action visibility small"
            >
              <input
                type=${a}
                .checked=${v(e)}
                @click=${this.#t}
                disabled=${r||i}
              />
              <span>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye-off-outline</title>
                    <path
                      d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
                    />
                  </svg>
                </i>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye</title>
                    <path
                      d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                    />
                  </svg>
                </i>
              </span>
              <!--<span class="tooltip top" style="pointer-events: none">${e?`Hide`:`Show`}</span>-->
            </label>
          </nav>
        `)}

      <!-- Render layer tools -->
      ${y(c&&!l,()=>o`
          <eox-layercontrol-layer-tools
            .noShadow=${!1}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .toolsAutoExpand=${this.toolsAutoExpand}
            .colormapRegistry=${this.colormapRegistry}
            .customEditorInterfaces=${this.customEditorInterfaces}
          ></eox-layercontrol-layer-tools>
        `)}
    `}#n=``;#r=`
    eox-layercontrol-layer {
      width: 100%;
      position: relative;
    }
    eox-layercontrol-layer nav {
      height: 32px;
      margin-block-start: 0 !important;
    }
    eox-layercontrol-layer > nav > .action.tools {
      display: var(--layer-tools-button-visibility);
    }
    eox-layercontrol-layer .action.tools.dots {
      transition: rotate 0s;
    }
    eox-layercontrol-layer:has(eox-layercontrol-layer-tools[open]) .action.tools.dots {
      transform: rotate(180deg);
    }
    eox-layercontrol-layer > nav > .action.visibility {
      padding: .3rem;
      transform: translateX(.3rem);
    }
    eox-layercontrol-layer > nav > .action.visibility span::after {
      border-radius: 0.25rem !important;
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:hover) > nav > .action {
        display: var(--layer-toggle-button-visibility);
      }
    }
    eox-layercontrol-layer nav:has(.action input[type=checkbox]:not(:checked)),
    eox-layercontrol-layer nav:has(.action input[type=radio]:not(:checked)),
    eox-layercontrol-layer:has(.action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer:has(.action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools {
      opacity: .5;
    }
    .tooltip {
      opacity: 1;
    }
    .layer input[type=checkbox],
    .layer input[type=radio] {
      display: var(--layer-input-visibility);
    }
    .layer.zoom-state-invisible {
      opacity: 0.5;
    }
    .layer {
      padding: var(--padding-vertical) 0;
      display: var(--layer-visibility);
      user-select: none;
    }
    .layertitle {
      display: var(--layer-title-visibility);
    }
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    :is(.checkbox,.radio)>span:after {
      transition: none !important;
    }
  `},customElements.define(`eox-layercontrol-layer`,is)})))()}var os;function ss(){return(ss=e((()=>{d(),$(),as(),ps(),os=class extends l{static properties={group:{attribute:!1},idProperty:{attribute:`id-property`},map:{attribute:!1,state:!0},titleProperty:{attribute:`title-property`,type:String},showLayerZoomState:{attribute:`show-layer-zoom-state`,type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:`tools-auto-expand`,type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.group=null,this.idProperty=`id`,this.map=null,this.titleProperty=`title`,this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){let e=!!this.group?.get(`layerControlExpand`),t=ko(this.group.getLayers())?.length;return o`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#t}
      </style>
      ${y(this.group,()=>o`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${e||i}
            data-children-length=${t}
          >
            <summary class="square">
              ${y(t>0,()=>o`
                  <!-- Open/close arrow -->
                  <div class="arrow-container">
                    <i class="small">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>chevron-right</title>
                        <path
                          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                        />
                      </svg>
                    </i>
                  </div>
                `)}

              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .layerType=${`group`}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                .toolsAsList=${this.toolsAsList}
                .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                .toolsAutoExpand=${this.toolsAutoExpand}
                .colormapRegistry=${this.colormapRegistry}
                .customEditorInterfaces=${this.customEditorInterfaces}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${this.noShadow}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              .globallyExclusiveLayers=${this.globallyExclusiveLayers}
              .toolsAutoExpand=${this.toolsAutoExpand}
              .colormapRegistry=${this.colormapRegistry}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}#e=``;#t=`
    details > summary {
      min-block-size: 0rem;
      display: var(--layer-summary-visibility);
      user-select: none;
    }
    details .arrow-container > i {
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary > .arrow-container > i {
      transform: rotate(90deg);
    }
    .arrow-container {
      position: absolute;
      height: 32px;
      display: flex;
      align-items: center;
      left: calc(var(--padding));
      z-index: 1;
    }
    .list li ul.list > li .arrow-container {
      left: calc(var(--padding) + var(--list-padding) - .5rem);
    }
  `},customElements.define(`eox-layercontrol-layer-group`,os)})))()}var cs,ls;function us(){return(us=e((()=>{$(),cs=t(vn(),1),ls=e=>{let{layers:t,idProperty:n,titleProperty:r,renderRoot:i}=e,a=(0,cs.default)(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent(`changed`,{bubbles:!0}))},50),o=()=>a();if(t&&(t.hasListener(`change:length`)&&t?.un(`change:length`,o),t.on(`change:length`,o),t)){let a=i.querySelector(`ul`);no(t,n,r,e),Qa(a,t,n,e)}}})))()}function ds(){return(ds=e((()=>{us()})))()}var fs;function ps(){return(ps=e((()=>{d(),An(),$(),as(),ss(),ds(),fs=class extends l{static properties={idProperty:{attribute:`id-property`},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:`title-property`,type:String},showLayerZoomState:{attribute:`show-layer-zoom-state`,type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:`tools-auto-expand`,type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.idProperty=`id`,this.layers=null,this.map=null,this.tools=void 0,this.titleProperty=`title`,this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){ls(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){let e=this.layers?ko(this.layers).reverse():[];return o`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#t}
      </style>
      <ul class="list no-space">
        ${y(this.layers,()=>o`
            ${On(e,e=>e,e=>o`
                <li
                  data-layer="${e.get(this.idProperty)}"
                  data-type="${so(e,this.map)}"
                  class="square"
                >
                  ${e.getLayers?o`
                          <eox-layercontrol-layer-group
                            .noShadow=${this.noShadow}
                            .group=${e}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .toolsAutoExpand=${this.toolsAutoExpand}
                            .colormapRegistry=${this.colormapRegistry}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:o`
                          <eox-layercontrol-layer
                            .noShadow=${this.noShadow}
                            .layer=${e}
                            .layerType=${so(e,this.map)}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .toolsAutoExpand=${this.toolsAutoExpand}
                            .colormapRegistry=${this.colormapRegistry}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}#e=``;#t=`
    eox-layercontrol-layer-group {
      box-sizing: border-box;
      width: 100%;
    }
    eox-layercontrol-layer.sortable-chosen {
      background: #eeea !important;
    }
    eox-layercontrol-layer.sortable-drag {
      opacity: 0;
    }
    eox-layercontrol-layer.sortable-ghost {
    }
    eox-layercontrol-layer {
      padding: 0 var(--padding);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:has(details[open])):hover {
        background-color: var(--item-hover-color);
      }
    }
    .list li ul.list > li eox-layercontrol-layer {
      padding-left: var(--list-padding);
    }
    .list li ul.list li ul.list > li eox-layercontrol-layer {
      padding-left: calc(var(--list-padding) * 2 - .5rem);
    }
    .list.no-space {
      margin-block: var(--padding-inline) !important;
    }
    .list.no-space li.square {
      padding: 0;
    }
  `},customElements.define(`eox-layercontrol-layer-list`,fs)})))()}var ms;function hs(){return(hs=e((()=>{$(),ms=e=>{let t=e.querySelector(`select[name=optional]`),n=t?t.value:null,r=ro(e.layers.getArray(),`layerControlOptional`,!0).find(t=>(t.get(e.idProperty)||t.ol_uid)===n);r?.set(`layerControlOptional`,!1),r?.setVisible(!0),e.dispatchEvent(new CustomEvent(`changed`,{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll(`eox-layercontrol-layer-list`).forEach(e=>e.requestUpdate()),e.requestUpdate()}})))()}function gs(){return(gs=e((()=>{hs()})))()}var _s;function vs(){return(vs=e((()=>{d(),$(),gs(),_s=class extends l{static properties={idProperty:{attribute:`id-property`},layers:{attribute:!1},titleProperty:{attribute:`title-property`,type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}};constructor(){super(),this.idProperty=`id`,this.layers=null,this.titleProperty=`title`,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#e(){ms(this)}render(){let e=ro(this.layers.getArray(),`layerControlOptional`,!0);return o`
      <nav class="bottom-padding large-padding">
        <div class="field suffix border small max">
          <!-- Dropdown select element -->
          <select
            name="optional"
            data-cy="optionalLayers"
            class="small-padding"
            style="font-size: small"
          >
            <!-- Default placeholder option -->
            <option disabled selected value>-- select --</option>

            <!-- Mapping through filtered layers list to generate dropdown options -->
            ${e.map(e=>{let t=e.get(this.idProperty)||e.ol_uid,n=e.get(this.titleProperty),r=`layer ${e.get(this.idProperty)}`;return o` <option value="${t}">${n||r}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${this.#e}">Add</button>
      </nav>
    `}},customElements.define(`eox-layercontrol-optional-list`,_s)})))()}var ys;function bs(){return(bs=e((()=>{ys=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()}})))()}var xs;function Ss(){return(Ss=e((()=>{$(),xs=e=>{let t=JSON.parse(`{"data":${Gr(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(t=>{e.eoxMap.addOrUpdateLayer(t)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()}})))()}var Cs;function ws(){return(ws=e((()=>{Cs=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()}})))()}async function Ts(e){let t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if(Hr(t)===`XYZ`)return{Name:t};try{e.wmsCapabilities=await Br(t)}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}function Es(){return(Es=e((()=>{$()})))()}var Ds;function Os(){return(Os=e((()=>{$(),Ds=(e,t)=>{let{Name:n}=e,r=Hr(t.urlInput)||`XYZ`,i={type:`Tile`,properties:{id:n,title:n},source:{type:r,url:t.urlInput,params:{LAYERS:n}}};t.jsonInput=JSON.stringify(i)}})))()}var ks;function As(){return(As=e((()=>{ks=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()}})))()}function js(){return(js=e((()=>{bs(),Ss(),ws(),Es(),Os(),As()})))()}var Ms;function Ns(){return(Ns=e((()=>{d(),as(),ss(),$(),js(),Ms=class extends l{static properties={eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}};urlInput=null;jsonInput=null;open=null;searchLoad=!1;wmsCapabilities=null;constructor(){super(),this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#e(e){Cs(e,this)}async#t(){let e=await Ts(this);e&&this.#n(e)}#n(e){Ds(e,this),xs(this)}#r(){xs(this)}#i(e){ys(e,this)}#a(e){ks(e,this)}render(){let e={add:o`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:o`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:o`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},t=this.open?`open`:`close`,n=this.open===`url`,r=this.open===`json`,a=!Ur(this.urlInput)||this.searchLoad?!0:i;return o`
      <style>
        ${this.#o}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${t}"
          >
            <a
              @click=${()=>this.#a(`url`)}
              class="${n?`active`:``}"
            >
              URL
            </a>
            <a
              @click=${()=>this.#a(`json`)}
              class="${r?`active`:``}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>this.#a(this.open?null:`url`)}
          >
            ${this.unstyled?`Add Layer`:o`<i class="small primary-text">${e.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${t}" style="padding: 15px 0">
          ${n?o`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${this.#e}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${a}
                    @click=${this.#t}
                  >
                    ${this.unstyled?`Search`:o`<i class="small">${e.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?o`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(e=>{let t=e.Name;return o`
                            <li class="search-list">
                              ${t}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>this.#n(e)}
                              >
                                ${this.unstyled?`+`:``}
                              </button>
                            </li>
                          `})}
                    </ul>`:i}
              `:o`
                <!-- Textarea for JSON input -->
                <div class="field small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${this.#i}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0; z-index: 1;"
                  disabled=${!Kr(this.jsonInput)||i}
                  @click=${this.#r}
                >
                  ${this.unstyled?`Add JSON`:o`<i class="small">${e.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}#o=`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `},customElements.define(`eox-layercontrol-add-layers`,Ms)})))()}var Ps;function Fs(){return(Fs=e((()=>{Ps=(e,t)=>{t.requestUpdate(),e.target.tagName===`EOX-LAYERCONTROL-LAYER-TOOLS`&&t.renderRoot.querySelector(`eox-layercontrol-optional-list`)?.requestUpdate()}})))()}var Is;function Ls(){return(Ls=e((()=>{ke(),Is=e=>{let t=te(e.for);return t&&t.map!==e.map&&(e.map=t.map),t}})))()}var Rs;function zs(){return(zs=e((()=>{d(),ps(),vs(),Ns(),$(),Ls(),Fs(),C(),w(),mo(),de(),Rs=class extends l{static properties={for:{type:String},idProperty:{attribute:`id-property`},map:{attribute:!1,state:!0},titleProperty:{attribute:`title-property`,type:String},showLayerZoomState:{attribute:`show-layer-zoom-state`,type:Boolean},tools:{type:Array},addExternalLayers:{attribute:`add-external-layers`,type:Boolean},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:`globally-exclusive-layers`,type:Boolean},toolsAutoExpand:{attribute:`tools-auto-expand`,type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{type:Array}};#e;constructor(){super(),this.for=`eox-map`,this.idProperty=`id`,this.map=null,this.titleProperty=`title`,this.showLayerZoomState=!1,this.tools=[`info`,`opacity`,`datetime`,`config`,`remove`,`sort`],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride=``,this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.toolsAutoExpand=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){this.eoxMap=Is(this)}updated(e){e.has(`for`)&&(this.eoxMap=Is(this))}get eoxMap(){return this.#e}set eoxMap(e){let t=this.#e;this.#e=e,this.requestUpdate(`eoxMap`,t)}#t(e){Ps(e,this),this.dispatchEvent(new CustomEvent(`layerchange`,{detail:e.detail}))}#n(e){this.dispatchEvent(new CustomEvent(`layerConfig:change`,{detail:e.detail}))}render(){let e=this.map?.getLayers().getArray(),t=e&&ro(e,`layerControlOptional`,!0)?.length>0;return o`
      <style>
        ${!this.unstyled&&this.#r}
        ${this.styleOverride}
      </style>

      <span class="layerstitle">
        <slot name="layerstitle"
          ><p><strong>Layers</strong></p></slot
        >
      </span>

      <!-- Conditional rendering of add layers component -->
      ${y(this.addExternalLayers&&this.#e?.addOrUpdateLayer,()=>o`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${this.#e}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${y(this.map,()=>o`
          <eox-layercontrol-layer-list
            .noShadow=${!0}
            class="layers"
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .map=${this.map}
            .titleProperty=${this.titleProperty}
            .showLayerZoomState=${this.showLayerZoomState}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
            .toolsAutoExpand=${this.toolsAutoExpand}
            .colormapRegistry=${this.colormapRegistry}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @changed=${this.#t}
            @datetime:updated=${e=>Mo(e,this)}
            @layerConfig:change=${this.#n}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${y(t,()=>o`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}#r=`
    ${se}
    :host, :root {
      --padding: 0.5rem;
      --padding-vertical: .2rem;
      --list-padding: 2rem;
      --layer-input-visibility: flex;
      --layer-summary-visibility: flex;
      --layer-type-visibility: block;
      --layer-title-visibility: inline;
      --layer-visibility: flex;
      --layer-tools-button-visibility: flex;
      --layer-toggle-button-visibility: none;

      --primary-color: var(--primary);
      --secondary-color: var(--secondary);
      --item-color: color-mix(
        in srgb,
        var(--primary-color) 10%,
        transparent
      );
      --item-hover-color: color-mix(
        in srgb,
        var(--surface) 80%,
        transparent
      );

      display: flex;
      flex-direction: column;
      --background-color: var(--eox-background-color, transparent);
      background-color: var(--background-color, transparent);
    }
    
    .layerstitle {
      display: block;
      padding-left: var(--padding);
      padding-right: var(--padding);
    }
    select {
      background-color: var(--background-color);
    }
    summary > * {
      pointer-events: all !important;
    }
  `},customElements.define(`eox-layercontrol`,Rs)})))()}function Bs(e){let t=Hs[e];if(t)return t;t=Hs[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);t.push(n)}for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t[r]=`%`+(`0`+r.toString(16).toUpperCase()).slice(-2)}return t}function Vs(e,t){typeof t!=`string`&&(t=Vs.defaultChars);let n=Bs(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(e){let t=``;for(let r=0,i=e.length;r<i;r+=3){let a=parseInt(e.slice(r+1,r+3),16);if(a<128){t+=n[a];continue}if((a&224)==192&&r+3<i){let n=parseInt(e.slice(r+4,r+6),16);if((n&192)==128){let e=a<<6&1984|n&63;t+=e<128?`��`:String.fromCharCode(e),r+=3;continue}}if((a&240)==224&&r+6<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16);if((n&192)==128&&(i&192)==128){let e=a<<12&61440|n<<6&4032|i&63;t+=e<2048||e>=55296&&e<=57343?`���`:String.fromCharCode(e),r+=6;continue}}if((a&248)==240&&r+9<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),o=parseInt(e.slice(r+10,r+12),16);if((n&192)==128&&(i&192)==128&&(o&192)==128){let e=a<<18&1835008|n<<12&258048|i<<6&4032|o&63;e<65536||e>1114111?t+=`����`:(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(e&1023))),r+=9;continue}}t+=`�`}return t})}var Hs;function Us(){return(Us=e((()=>{Hs={},Vs.defaultChars=`;/?:@&=+$,#`,Vs.componentChars=``})))()}function Ws(e){let t=Ks[e];if(t)return t;t=Ks[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);/^[0-9a-z]$/i.test(n)?t.push(n):t.push(`%`+(`0`+e.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function Gs(e,t,n){typeof t!=`string`&&(n=t,t=Gs.defaultChars),n===void 0&&(n=!0);let r=Ws(t),i=``;for(let t=0,a=e.length;t<a;t++){let o=e.charCodeAt(t);if(n&&o===37&&t+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(t+1,t+3))){i+=e.slice(t,t+3),t+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&t+1<a){let n=e.charCodeAt(t+1);if(n>=56320&&n<=57343){i+=encodeURIComponent(e[t]+e[t+1]),t++;continue}}i+=`%EF%BF%BD`;continue}i+=encodeURIComponent(e[t])}return i}var Ks;function qs(){return(qs=e((()=>{Ks={},Gs.defaultChars=`;/?:@&=+$,-_.!~*'()#`,Gs.componentChars=`-_.!~*'()`})))()}function Js(e){let t=``;return t+=e.protocol||``,t+=e.slashes?`//`:``,t+=e.auth?e.auth+`@`:``,e.hostname&&e.hostname.indexOf(`:`)!==-1?t+=`[`+e.hostname+`]`:t+=e.hostname||``,t+=e.port?`:`+e.port:``,t+=e.pathname||``,t+=e.search||``,t+=e.hash||``,t}function Ys(){return(Ys=e((()=>{})))()}function Xs(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}function Zs(e,t){if(e&&e instanceof Xs)return e;let n=new Xs;return n.parse(e,t),n}var Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc;function uc(){return(uc=e((()=>{Qs=/^([a-z0-9.+-]+:)/i,$s=/:[0-9]*$/,ec=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,tc=[`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],nc=[`'`].concat(tc),rc=[`%`,`/`,`?`,`;`,`#`].concat(nc),ic=[`/`,`?`,`#`],ac=255,oc=/^[+a-z0-9A-Z_-]{0,63}$/,sc=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,cc={javascript:!0,"javascript:":!0},lc={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},Xs.prototype.parse=function(e,t){let n,r,i,a=e;if(a=a.trim(),!t&&e.split(`#`).length===1){let e=ec.exec(a);if(e)return this.pathname=e[1],e[2]&&(this.search=e[2]),this}let o=Qs.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)===`//`,i&&!(o&&cc[o])&&(a=a.substr(2),this.slashes=!0)),!cc[o]&&(i||o&&!lc[o])){let e=-1;for(let t=0;t<ic.length;t++)r=a.indexOf(ic[t]),r!==-1&&(e===-1||r<e)&&(e=r);let t,n;n=e===-1?a.lastIndexOf(`@`):a.lastIndexOf(`@`,e),n!==-1&&(t=a.slice(0,n),a=a.slice(n+1),this.auth=t),e=-1;for(let t=0;t<rc.length;t++)r=a.indexOf(rc[t]),r!==-1&&(e===-1||r<e)&&(e=r);e===-1&&(e=a.length),a[e-1]===`:`&&e--;let i=a.slice(0,e);a=a.slice(e),this.parseHost(i),this.hostname=this.hostname||``;let o=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!o){let e=this.hostname.split(/\./);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n&&!n.match(oc)){let r=``;for(let e=0,t=n.length;e<t;e++)n.charCodeAt(e)>127?r+=`x`:r+=n[e];if(!r.match(oc)){let r=e.slice(0,t),i=e.slice(t+1),o=n.match(sc);o&&(r.push(o[1]),i.unshift(o[2])),i.length&&(a=i.join(`.`)+a),this.hostname=r.join(`.`);break}}}}this.hostname.length>ac&&(this.hostname=``),o&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let s=a.indexOf(`#`);s!==-1&&(this.hash=a.substr(s),a=a.slice(0,s));let c=a.indexOf(`?`);return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),lc[n]&&this.hostname&&!this.pathname&&(this.pathname=``),this},Xs.prototype.parseHost=function(e){let t=$s.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}})))()}var dc=n({decode:()=>Vs,encode:()=>Gs,format:()=>Js,parse:()=>Zs});function fc(){return(fc=e((()=>{Us(),qs(),uc()})))()}function pc(e){throw RangeError(kc[e])}function mc(e,t){let n=[],r=e.length;for(;r--;)n[r]=t(e[r]);return n}function hc(e,t){let n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace(Oc,`.`);let i=mc(e.split(`.`),t).join(`.`);return r+i}function gc(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}var _c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc;function Hc(){return(Hc=e((()=>{_c=2147483647,vc=36,yc=1,bc=26,xc=38,Sc=700,Cc=72,wc=128,Tc=`-`,Ec=/^xn--/,Dc=/[^\0-\x7F]/,Oc=/[\x2E\u3002\uFF0E\uFF61]/g,kc={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},Ac=35,jc=Math.floor,Mc=String.fromCharCode,Nc=e=>String.fromCodePoint(...e),Pc=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:vc},Fc=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Ic=function(e,t,n){let r=0;for(e=n?jc(e/Sc):e>>1,e+=jc(e/t);e>455;r+=vc)e=jc(e/Ac);return jc(r+36*e/(e+xc))},Lc=function(e){let t=[],n=e.length,r=0,i=wc,a=Cc,o=e.lastIndexOf(Tc);o<0&&(o=0);for(let n=0;n<o;++n)e.charCodeAt(n)>=128&&pc(`not-basic`),t.push(e.charCodeAt(n));for(let s=o>0?o+1:0;s<n;){let o=r;for(let t=1,i=vc;;i+=vc){s>=n&&pc(`invalid-input`);let o=Pc(e.charCodeAt(s++));o>=vc&&pc(`invalid-input`),o>jc((_c-r)/t)&&pc(`overflow`),r+=o*t;let c=i<=a?yc:i>=a+bc?bc:i-a;if(o<c)break;let l=vc-c;t>jc(_c/l)&&pc(`overflow`),t*=l}let c=t.length+1;a=Ic(r-o,c,o==0),jc(r/c)>_c-i&&pc(`overflow`),i+=jc(r/c),r%=c,t.splice(r++,0,i)}return String.fromCodePoint(...t)},Rc=function(e){let t=[];e=gc(e);let n=e.length,r=wc,i=0,a=Cc;for(let n of e)n<128&&t.push(Mc(n));let o=t.length,s=o;for(o&&t.push(Tc);s<n;){let n=_c;for(let t of e)t>=r&&t<n&&(n=t);let c=s+1;n-r>jc((_c-i)/c)&&pc(`overflow`),i+=(n-r)*c,r=n;for(let n of e)if(n<r&&++i>_c&&pc(`overflow`),n===r){let e=i;for(let n=vc;;n+=vc){let r=n<=a?yc:n>=a+bc?bc:n-a;if(e<r)break;let i=e-r,o=vc-r;t.push(Mc(Fc(r+i%o,0))),e=jc(i/o)}t.push(Mc(Fc(e,0))),a=Ic(i,c,s===o),i=0,++s}++i,++r}return t.join(``)},zc=function(e){return hc(e,function(e){return Ec.test(e)?Lc(e.slice(4).toLowerCase()):e})},Bc=function(e){return hc(e,function(e){return Dc.test(e)?`xn--`+Rc(e):e})},Vc={version:`2.3.1`,ucs2:{decode:gc,encode:Nc},decode:Lc,encode:Rc,toASCII:Bc,toUnicode:zc}})))()}export{kt as C,dt as E,_n as S,ut as T,En as _,uc as a,wn as b,Ys as c,Vs as d,Us as f,kn as g,On as h,dc as i,Gs as l,An as m,Vc as n,Zs as o,zs as p,fc as r,Js as s,Hc as t,qs as u,Tn as v,jt as w,vn as x,xn as y};