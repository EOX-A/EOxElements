import{n as e,o as t,r as n,t as r}from"./rolldown-runtime-C0FnF6B9.js";import{a as i,c as a,d as o,h as s,l as c,n as l,o as u,s as d,t as f,u as p}from"./lit-D8IuYOuz.js";import{Br as m,Ci as h,Gr as g,Ir as _,Kr as v,Lr as y,Mr as ee,Nr as b,Si as x,Ur as te,Vr as ne,Wr as S,Xr as re,ai as ie,bi as ae,ci as oe,ii as se,li as ce,ni as le,oi as ue,or as de,qr as fe,ri as pe,si as me,sr as he,wi as ge,xi as _e,yi as ve,zr as ye}from"./helpers-DUr2cyRQ.js";import{at as be,ct as xe,dt as Se,lt as Ce,nt as we,ot as Te,st as Ee,ut as De}from"./main-D3oK6QQ7.js";import{Jt as Oe,Xt as ke}from"./DataTile-Db0xzEwD.js";import{D as Ae,E as je,T as Me}from"./proj-CAqW1NIy.js";var Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue;function We(){return(We=e((()=>{c(),{I:Ne}=d,Pe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Fe=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Ie=e=>e.strings===void 0,Le=()=>document.createComment(``),Re=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){let t=r.insertBefore(Le(),i),a=r.insertBefore(Le(),i);n=new Ne(t,a,e,e.options)}else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=e.nextSibling;r.insertBefore(e,i),e=t}}}return n},ze=(e,t,n=e)=>(e._$AI(t,n),e),Be={},Ve=(e,t=Be)=>e._$AH=t,He=e=>e._$AH,Ue=e=>{e._$AR(),e._$AA.remove()}})))()}var Ge;function Ke(){return(Ke=e((()=>{c(),h(),We(),Ge=_e(class extends x{constructor(){super(...arguments),this.key=i}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(Ve(e),this.key=t),n}})})))()}function qe(){return(qe=e((()=>{Ke()})))()}var Je;function Ye(){return(Ye=e((()=>{Je=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.SelectLayerHoverInteraction,e.clickInteraction=e.eoxMap.selectInteractions.SelectLayerClickInteraction;let t=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on(`change`,t),e.clickInteraction.selectStyleLayer.on(`change`,t)}})))()}var Xe;function Ze(){return(Ze=e((()=>{Xe=(e,t,n)=>{if(e.clickId===t)return;let r=n?[]:[t];e.hoverInteraction.highlightById(r)}})))()}var Qe;function $e(){return($e=e((()=>{Qe=(e,t,n)=>{e.stopPropagation();let r=Number(e.target.getAttribute(`index`)),i=t.drawLayer.getSource().getFeatures()[r];t.drawLayer.getSource().removeFeature(i),t.drawnFeatures.splice(r,1),n.emitDrawnFeatures(),t.requestUpdate()}})))()}var et,tt;function nt(){return(nt=e((()=>{et={duration:750,padding:[20,20,20,20]},tt={type:`FeatureCollection`,features:[]}})))()}var rt;function it(){return(it=e((()=>{nt(),rt=(e,t)=>{let{clickId:n,drawLayer:r,olMap:i,clickInteraction:a}=t,o=a.getId(e);if(n===o){let e=r.getSource().getExtent();i.getView().fit(e,et),a.highlightById([])}else{let n=t.eoxMap.projection||`EPSG:3857`,r=t.eoxDrawTools.projection,s=e.clone().getGeometry().transform(r,n).getExtent();a.highlightById([o]),i.getView().fit(s,et)}t.requestUpdate()}})))()}var at;function ot(){return(ot=e((()=>{f(),qe(),$e(),Ye(),Ze(),it(),at=class extends l{static properties={eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}};hoverInteraction;clickInteraction;hoverId;clickId;constructor(){super(),this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName=`Feature`,this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(e){Qe(e,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent(`changed`,{bubbles:!0}))}_handleFeatureSelectAndDeselect(e){rt(e,this)}_handleHoverFeature(e,t=!1){Xe(this,e,t)}firstUpdated(){Je(this)}createRenderRoot(){return this}render(){this.hoverId=this.hoverInteraction?.selectedFids[0],this.clickId=this.clickInteraction?.selectedFids[0];let e=o`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return o`
      <ul class="list no-space">
        ${this.drawnFeatures.map((t,n)=>{let r=n+1,a=Object.values(this.eoxMap.selectInteractions)[0].getId(t),s=this.hoverId===a,c=this.clickId===a,l=s?`surface-container-low`:c?`fill`:i,u=this.featureNameKey?.split(`.`),d=t.get(this.featureNameKey)||u?.reduce((e,t)=>e?.[t],{...t.getProperties()})||`${this.featureName} ${r}`;return Ge(r,o`
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
    `}},customElements.define(`eox-drawtools-list`,at)})))()}var st;function ct(){return(ct=e((()=>{st=e=>{let{multipleFeatures:t,drawnFeatures:n,currentlyDrawing:r}=e;return{drawDisabled:!t&&n?.length>0||r,discardDisabled:!n?.length&&!r}}})))()}function lt(e){navigator.clipboard.writeText(e).then(function(){},function(e){console.error(`Could not copy text: `,e)})}var ut;function dt(){return(dt=e((()=>{b(),ut=(e,t)=>new ee().writeFeaturesObject(e,t)})))()}function ft(e){return typeof e==`string`?e:``}var pt;function mt(){return(mt=e((()=>{y(),ke(),pt=class extends _{constructor(){super()}getType(){return`text`}readFeature(e,t){return this.readFeatureFromText(ft(e),this.adaptOptions(t))}readFeatureFromText(e,t){return Oe()}readFeatures(e,t){return this.readFeaturesFromText(ft(e),this.adaptOptions(t))}readFeaturesFromText(e,t){return Oe()}readGeometry(e,t){return this.readGeometryFromText(ft(e),this.adaptOptions(t))}readGeometryFromText(e,t){return Oe()}readProjection(e){return this.readProjectionFromText(ft(e))}readProjectionFromText(e){return this.dataProjection}writeFeature(e,t){return this.writeFeatureText(e,this.adaptOptions(t))}writeFeatureText(e,t){return Oe()}writeFeatures(e,t){return this.writeFeaturesText(e,this.adaptOptions(t))}writeFeaturesText(e,t){return Oe()}writeGeometry(e,t){return this.writeGeometryText(e,this.adaptOptions(t))}writeGeometryText(e,t){return Oe()}}})))()}function ht(e){let t=e.getCoordinates();return t.length===0?``:t.join(` `)}function gt(e){let t=[],n=e.getPoints();for(let e=0,r=n.length;e<r;++e)t.push(`(`+ht(n[e])+`)`);return t.join(`,`)}function _t(e){let t=[],n=e.getGeometries();for(let e=0,r=n.length;e<r;++e)t.push(Ct(n[e]));return t.join(`,`)}function vt(e){let t=e.getCoordinates(),n=[];for(let e=0,r=t.length;e<r;++e)n.push(t[e].join(` `));return n.join(`,`)}function yt(e){let t=[],n=e.getLineStrings();for(let e=0,r=n.length;e<r;++e)t.push(`(`+vt(n[e])+`)`);return t.join(`,`)}function bt(e){let t=[],n=e.getLinearRings();for(let e=0,r=n.length;e<r;++e)t.push(`(`+vt(n[e])+`)`);return t.join(`,`)}function xt(e){let t=[],n=e.getPolygons();for(let e=0,r=n.length;e<r;++e)t.push(`(`+bt(n[e])+`)`);return t.join(`,`)}function St(e){let t=e.getLayout(),n=``;return(t===`XYZ`||t===`XYZM`)&&(n+=Et),(t===`XYM`||t===`XYZM`)&&(n+=Dt),n}function Ct(e){let t=e.getType(),n=Nt[t],r=n(e),i=kt[t];if(typeof e.getFlatCoordinates==`function`){let t=St(e);t.length>0&&(i+=` `+t)}return r.length===0?i+` EMPTY`:i+`(`+r+`)`}var wt,Tt,Et,Dt,Ot,C,kt,At,jt,Mt,Nt;function Pt(){return(Pt=e((()=>{ae(),ne(),ce(),me(),pe(),v(),ie(),re(),y(),mt(),wt={POINT:se,LINESTRING:oe,POLYGON:fe,MULTIPOINT:le,MULTILINESTRING:ue,MULTIPOLYGON:g},Tt=`EMPTY`,Et=`Z`,Dt=`M`,Ot=`ZM`,C={START:0,TEXT:1,LEFT_PAREN:2,RIGHT_PAREN:3,NUMBER:4,COMMA:5,EOF:6},kt={Point:`POINT`,LineString:`LINESTRING`,Polygon:`POLYGON`,MultiPoint:`MULTIPOINT`,MultiLineString:`MULTILINESTRING`,MultiPolygon:`MULTIPOLYGON`,GeometryCollection:`GEOMETRYCOLLECTION`,Circle:`CIRCLE`},At=class{constructor(e){this.wkt=e,this.index_=-1}isAlpha_(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`}isNumeric_(e,t){return t=t!==void 0&&t,e>=`0`&&e<=`9`||e==`.`&&!t}isWhiteSpace_(e){return e==` `||e==`	`||e==`\r`||e==`
`}nextChar_(){return this.wkt.charAt(++this.index_)}nextToken(){let e=this.nextChar_(),t=this.index_,n=e,r;if(e==`(`)r=C.LEFT_PAREN;else if(e==`,`)r=C.COMMA;else if(e==`)`)r=C.RIGHT_PAREN;else if(this.isNumeric_(e)||e==`-`)r=C.NUMBER,n=this.readNumber_();else if(this.isAlpha_(e))r=C.TEXT,n=this.readText_();else if(this.isWhiteSpace_(e))return this.nextToken();else if(e===``)r=C.EOF;else throw Error(`Unexpected character: `+e);return{position:t,value:n,type:r}}readNumber_(){let e,t=this.index_,n=!1,r=!1;do e==`.`?n=!0:(e==`e`||e==`E`)&&(r=!0),e=this.nextChar_();while(this.isNumeric_(e,n)||!r&&(e==`e`||e==`E`)||r&&(e==`-`||e==`+`));return parseFloat(this.wkt.substring(t,this.index_--))}readText_(){let e,t=this.index_;do e=this.nextChar_();while(this.isAlpha_(e));return this.wkt.substring(t,this.index_--).toUpperCase()}},jt=class{constructor(e){this.lexer_=e,this.token_={position:0,type:C.START},this.layout_=`XY`}consume_(){this.token_=this.lexer_.nextToken()}isTokenType(e){return this.token_.type==e}match(e){let t=this.isTokenType(e);return t&&this.consume_(),t}parse(){return this.consume_(),this.parseGeometry_()}parseGeometryLayout_(){let e=`XY`,t=this.token_;if(this.isTokenType(C.TEXT)){let n=t.value;n===Et?e=`XYZ`:n===Dt?e=`XYM`:n===Ot&&(e=`XYZM`),e!==`XY`&&this.consume_()}return e}parseGeometryCollectionText_(){if(this.match(C.LEFT_PAREN)){let e=[];do e.push(this.parseGeometry_());while(this.match(C.COMMA));if(this.match(C.RIGHT_PAREN))return e}throw Error(this.formatErrorMessage_())}parsePointText_(){if(this.match(C.LEFT_PAREN)){let e=this.parsePoint_();if(this.match(C.RIGHT_PAREN))return e}throw Error(this.formatErrorMessage_())}parseLineStringText_(){if(this.match(C.LEFT_PAREN)){let e=this.parsePointList_();if(this.match(C.RIGHT_PAREN))return e}throw Error(this.formatErrorMessage_())}parsePolygonText_(){if(this.match(C.LEFT_PAREN)){let e=this.parseLineStringTextList_();if(this.match(C.RIGHT_PAREN))return e}throw Error(this.formatErrorMessage_())}parseMultiPointText_(){if(this.match(C.LEFT_PAREN)){let e;if(e=this.token_.type==C.LEFT_PAREN?this.parsePointTextList_():this.parsePointList_(),this.match(C.RIGHT_PAREN))return e}throw Error(this.formatErrorMessage_())}parseMultiLineStringText_(){if(this.match(C.LEFT_PAREN)){let e=this.parseLineStringTextList_();if(this.match(C.RIGHT_PAREN))return e}throw Error(this.formatErrorMessage_())}parseMultiPolygonText_(){if(this.match(C.LEFT_PAREN)){let e=this.parsePolygonTextList_();if(this.match(C.RIGHT_PAREN))return e}throw Error(this.formatErrorMessage_())}parsePoint_(){let e=[],t=this.layout_.length;for(let n=0;n<t;++n){let t=this.token_;if(this.match(C.NUMBER))e.push(t.value);else break}if(e.length==t)return e;throw Error(this.formatErrorMessage_())}parsePointList_(){let e=[this.parsePoint_()];for(;this.match(C.COMMA);)e.push(this.parsePoint_());return e}parsePointTextList_(){let e=[this.parsePointText_()];for(;this.match(C.COMMA);)e.push(this.parsePointText_());return e}parseLineStringTextList_(){let e=[this.parseLineStringText_()];for(;this.match(C.COMMA);)e.push(this.parseLineStringText_());return e}parsePolygonTextList_(){let e=[this.parsePolygonText_()];for(;this.match(C.COMMA);)e.push(this.parsePolygonText_());return e}isEmptyGeometry_(){let e=this.isTokenType(C.TEXT)&&this.token_.value==Tt;return e&&this.consume_(),e}formatErrorMessage_(){return"Unexpected `"+this.token_.value+"` at position "+this.token_.position+" in `"+this.lexer_.wkt+"`"}parseGeometry_(){let e=this.token_;if(this.match(C.TEXT)){let t=e.value;this.layout_=this.parseGeometryLayout_();let n=this.isEmptyGeometry_();if(t==`GEOMETRYCOLLECTION`){if(n)return new m([]);let e=this.parseGeometryCollectionText_();return new m(e)}let r=wt[t];if(!r)throw Error(`Invalid geometry type: `+t);let i;if(n)i=t==`POINT`?[NaN,NaN]:[];else switch(t){case`POINT`:i=this.parsePointText_();break;case`LINESTRING`:i=this.parseLineStringText_();break;case`POLYGON`:i=this.parsePolygonText_();break;case`MULTIPOINT`:i=this.parseMultiPointText_();break;case`MULTILINESTRING`:i=this.parseMultiLineStringText_();break;case`MULTIPOLYGON`:i=this.parseMultiPolygonText_()}return new r(i,this.layout_)}throw Error(this.formatErrorMessage_())}},Mt=class extends pt{constructor(e){super(),e||={},this.splitCollection_=e.splitCollection!==void 0&&e.splitCollection}parse_(e){let t=new At(e);return new jt(t).parse()}readFeatureFromText(e,t){let n=this.readGeometryFromText(e,t),r=new ve;return r.setGeometry(n),r}readFeaturesFromText(e,t){let n=[],r=this.readGeometryFromText(e,t);n=this.splitCollection_&&r.getType()==`GeometryCollection`?r.getGeometriesArray():[r];let i=[];for(let e=0,t=n.length;e<t;++e){let t=new ve;t.setGeometry(n[e]),i.push(t)}return i}readGeometryFromText(e,t){let n=this.parse_(e);return ye(n,!1,t)}writeFeatureText(e,t){let n=e.getGeometry();return n?this.writeGeometryText(n,t):``}writeFeaturesText(e,t){if(e.length==1)return this.writeFeatureText(e[0],t);let n=[];for(let t=0,r=e.length;t<r;++t)n.push(e[t].getGeometry());let r=new m(n);return this.writeGeometryText(r,t)}writeGeometryText(e,t){return Ct(ye(e,!0,t))}},Nt={Point:ht,LineString:vt,Polygon:bt,MultiPoint:gt,MultiLineString:yt,MultiPolygon:xt,GeometryCollection:_t}})))()}var Ft;function It(){return(It=e((()=>{Pt(),Ft=(e,t)=>new Mt().writeFeatures(e,t)})))()}function w(e,t,n){return e?t(e):n?.(e)}function Lt(){return(Lt=e((()=>{})))()}var Rt;function zt(){return(zt=e((()=>{f(),ct(),Rt=class extends l{static properties={multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:`import-features`,type:Boolean},showEditor:{attribute:`show-editor`,type:Boolean},geoJSON:{attribute:`geo-json`,type:String},type:{attribute:`type`,type:String},unstyled:{type:Boolean}};#e=!0;#t=!0;constructor(){super(),this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON=``,this.type=`Polygon`,this.unstyled=!1,this.select=!1}updateButtonStates(){let{drawDisabled:e,discardDisabled:t}=st(this);this.#e=e,this.#t=t}createRenderRoot(){return this}render(){this.updateButtonStates();let e=this.currentlyDrawing?`drawing`:`draw`,t={Polygon:o`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
        ${w(this.showEditor,()=>o`
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
        ${w(this.importFeatures,()=>o`
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
      ${w(this.showEditor,()=>o`
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
              @click=${()=>lt(this.geoJSON)}
            >
              ${this.unstyled?`copy`:o`
                    <i class="tiny">${c}</i>
                    <span class="tooltip top">Copy</span>
                  `}
            </button>
          </div>
        `)}
    `}},customElements.define(`eox-drawtools-controller`,Rt)})))()}var Bt;function Vt(){return(Vt=e((()=>{De(),Ce(),xe(),Bt=`
  ${Se}
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
`})))()}var Ht;function Ut(){return(Ut=e((()=>{Ht=e=>{(()=>{if(e.emitDrawnFeatures(),!e.multipleFeatures)e.draw?.setActive(!1),e.selectionEvents.removeSelectionEvent(),e.currentlyDrawing=!1;else if(e.continuous){if(!e.layerId)e.drawLayer.getSource().clear(),e.drawnFeatures=[];else{let t=e.drawLayer.getSource().getFeatures().at(-1);if(e.drawLayer.getSource().clear(),!t)return;e.drawLayer.getSource().addFeature(t),e.drawnFeatures=[t]}}})(),e.requestUpdate()}})))()}var Wt;function Gt(){return(Gt=e((()=>{Wt=e=>{e.drawLayer.set(`isDrawingEnabled`,!0),e.draw?.setActive(!0),e.selectionEvents.addSelectionEvent(),e.currentlyDrawing=!0,e.requestUpdate()}})))()}function Kt(e,t,n){let r=e.findIndex(e=>e.properties.id===t);if(r!==-1)return e.splice(r,1,...n),e;for(let r of e)if(r.type===`Group`){let e=Kt(r.layers,t,n);e?.length&&(r.layers=e)}return e}var qt;function Jt(){return(Jt=e((()=>{qt=(e,t,n)=>{if(!n||!t)return;let r=t.getLayerById(n),i=r?JSON.parse(JSON.stringify(r.get(`_jsonDefinition`))):null;if(!i){console.error(`Layer with id ${n} not found`);return}i.interactions=[{type:`select`,active:!1,options:{id:`SelectLayerHoverInteraction`,condition:`pointermove`,active:!1,style:e.featureStyles?.hover||{"fill-color":`rgba(0, 0, 0,0.0)`,"stroke-color":`#3399CC`,"stroke-width":2.5}}},{type:`select`,options:{id:`SelectLayerClickInteraction`,condition:`click`,multi:e.multipleFeatures,modify:e.allowModify,active:!1,style:e.featureStyles?.click||{"fill-color":`rgba(0, 0, 0,0.0)`,"stroke-color":`rgba(0, 0, 0,0.0)`}}}],t.addOrUpdateLayer(i),Kt(t.layers,n,[i]);let a=e.draw;e.draw=t.selectInteractions.SelectLayerClickInteraction,a?.setActive(!1),t.selectInteractions.SelectLayerClickInteraction?.setActive(!1),t.selectInteractions.SelectLayerHoverInteraction?.setActive(!1)}})))()}var Yt,Xt;function Zt(){return(Zt=e((()=>{Ae(),Yt=e=>{let t=e.getGeometry();if(!t)return;let n=``;if(t.getType()===`Polygon`||t.getType()===`MultiPolygon`){let e=Me(t);n=e>1e6?(e/1e6).toFixed(2)+` km²`:e.toFixed(2)+` m²`}else if(t.getType()===`LineString`||t.getType()===`MultiLineString`){let e=je(t);n=e>1e3?(e/1e3).toFixed(2)+` km`:e.toFixed(2)+` m`}else if(t.getType()===`Circle`){let e=t.getRadius(),r=Math.PI*e**2;n=r>1e6?(r/1e6).toFixed(2)+` km²`:r.toFixed(2)+` m²`}n&&e.get(`measure`)!==n&&e.set(`measure`,n)},Xt=e=>{let t=e.drawLayer.getSource();t.on(`addfeature`,e=>{let t=e.feature;t&&(Yt(t),t.getGeometry().on(`change`,()=>Yt(t)))}),t.getFeatures().forEach(e=>{Yt(e),e.getGeometry().on(`change`,()=>Yt(e))})}})))()}var Qt;function $t(){return($t=e((()=>{Ut(),Jt(),Zt(),Ee(),Qt=(e,t)=>{let n=Te(e.for),r=n.map,i=`0, 65, 112`;e.drawLayer=n.addOrUpdateLayer({zIndex:100,type:`Vector`,properties:{id:`drawLayer`,layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:t},source:{type:`Vector`},style:e.featureStyles?.layer||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":[`coalesce`,[`get`,`measure`],``],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":`white`,"text-stroke-width":3,"text-font":`bold 14px sans-serif`,"text-overflow":!0}},interactions:[{type:`draw`,options:{active:!1,id:`drawInteraction`,type:e.type,modify:e.allowModify,stopClick:!0,style:e.featureStyles?.layer||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":[`coalesce`,[`get`,`measure`],``],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":`white`,"text-stroke-width":3,"text-font":`bold 14px sans-serif`,"text-overflow":!0}}}},...e.layerId?[]:[{type:`select`,options:{id:`SelectLayerHoverInteraction`,condition:`pointermove`,style:e.featureStyles?.hover||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2},tooltip:!1}},{type:`select`,options:{id:`SelectLayerClickInteraction`,condition:`click`,panIn:!0,style:e.featureStyles?.click||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2}}}]]}),e.draw=n.interactions.drawInteraction,e.modify=n.interactions.drawInteraction_modify,qt(e,n,e.layerId),e.measure&&Xt(e);let a=()=>e.onModifyEnd(),o=()=>Ht(e);return e.modify?.on(`modifyend`,a),e.measure&&e.draw&&typeof e.draw.on==`function`&&e.draw.on(`drawstart`,e=>{let t=e.feature;Yt(t),t.getGeometry().on(`change`,()=>Yt(t))}),n.addEventListener(`addfeatures`,o),{EoxMap:n,OlMap:r,reset:e=>{!e.eoxMap||!e.drawLayer||(e.drawLayer.getSource().clear(),e.eoxMap.map.removeLayer(e.drawLayer),e.modify?.un(`modifyend`,a),e.eoxMap.removeEventListener(`addfeatures`,o),e.layerId||(e.draw=null),e.modify=null)}}}})))()}var en;function tn(){return(tn=e((()=>{en=e=>{e.drawnFeatures=[],e.draw?.setActive(!1),e.layerId&&e.selectionEvents.removeSelectionEvent(),e.drawLayer.getSource().clear(),e.geoJSON=null,e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()}})))()}var nn;function rn(){return(rn=e((()=>{dt(),It(),nn=(e,t)=>{setTimeout(()=>{let n=e.drawLayer.getSource().getFeatures(),r=e.eoxMap.projection||`EPSG:3857`,i=e.projection,a=i?n.map(e=>{e=e.clone();let t=e.getGeometry().transform(r,i);return e.setGeometry(t),e}):n;e.setDrawnFeaturesInternal?e.setDrawnFeaturesInternal(a):e.drawnFeatures=a;let o;switch(e.format){case`geojson`:o=ut(e.drawnFeatures);break;case`wkt`:o=Ft(e.drawnFeatures);break;case`feature`:o=e.drawnFeatures;break;default:o=e.drawnFeatures}e.updateGeoJSON(),e.requestUpdate(),t(o)},0)}})))()}var an;function on(){return(on=e((()=>{te(),an=e=>{let t=t=>{t?.detail.id!==`SelectLayerClickInteraction`||!t.detail.feature||(typeof t.detail.feature.getGeometry().getCoordinates!=`function`&&(t.detail.feature=S(t.detail.feature)),e.drawLayer.getSource().addFeature(t.detail.feature),e.eoxMap.dispatchEvent(new CustomEvent(`addfeatures`,{detail:t.detail})))};return{addSelectionEvent:()=>{e.layerId&&(e.eoxMap.selectInteractions.SelectLayerHoverInteraction?.setActive(!0),e.eoxMap.addEventListener(`select`,t))},removeSelectionEvent:()=>{let n=e.eoxMap.selectInteractions?.SelectLayerHoverInteraction;n&&(n.selectedFids=[],n?.setActive(!1)),e.eoxMap.removeEventListener(`select`,t)}}}})))()}function sn(e,t){t&&(e.discardDrawing(),e.selectionEvents.removeSelectionEvent(),e.draw=t.interactions.drawInteraction,t.selectInteractions.SelectLayerClickInteraction.remove(),t.selectInteractions.SelectLayerHoverInteraction.remove())}var cn;function ln(){return(ln=e((()=>{Jt(),cn=(e,t,n,r)=>{if(t){if(n){r&&n!==r&&sn(e,t),qt(e,t,n);return}if(!n&&r){sn(e,t);return}}}})))()}var un;function dn(){return(dn=e((()=>{un=e=>{e.currentlyDrawing&&(e.draw?.setActive(!1),e.currentlyDrawing=!1,e.requestUpdate())}})))()}var fn;function pn(){return(pn=e((()=>{dn(),fn=(e,t)=>{e.key===`Escape`&&un(t)}})))()}function mn(e,t){let n=e.drawnFeatures.indexOf(t);n>-1&&hn(e,n)}function hn(e,t){if(t>-1&&t<e.drawnFeatures.length){let n=[...e.drawnFeatures];n.splice(t,1),e.drawnFeatures=n,e.emitDrawnFeatures()}}function gn(e,t){function n(e){e.preventDefault(),e.stopPropagation()}function r(e){e.srcElement.style.opacity=`0.4`}function i(e){e.srcElement.style.opacity=`1`}[`dragenter`,`dragover`,`dragleave`,`drop`].forEach(e=>{t.addEventListener(e,n,!1),[`dragenter`,`dragover`].includes(e)?t.addEventListener(e,r,!1):t.addEventListener(e,i,!1)}),t.addEventListener(`drop`,t=>vn(t,e),!1)}function _n(e){e.preventDefault(),e.stopPropagation()}function vn(e,t){_n(e);let n;n=`dataTransfer`in e&&e.dataTransfer?e.dataTransfer.files:e.target&&`files`in e.target?e.target.files:[],Array.from(n).forEach(e=>yn(e,t)),e.target&&`value`in e.target&&(e.target.value=``)}function yn(e,t){let n=new FileReader;n.readAsText(e),n.onloadend=function(){typeof n.result==`string`&&t.handleFeatureChange(n.result)}}var bn;function xn(){return(xn=e((()=>{f(),ot(),zt(),Vt(),Gt(),dn(),$t(),tn(),rn(),on(),ln(),pn(),nt(),bn=class extends l{static get properties(){return{allowModify:{attribute:`allow-modify`,type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:`feature-name`,type:String},featureNameKey:{attribute:`feature-name-key`,type:String},layerId:{attribute:`layer-id`,type:String},featureStyles:{type:Object},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:`multiple-features`,type:Boolean},measure:{type:Boolean},importFeatures:{attribute:`import-features`,type:Boolean},showEditor:{attribute:`show-editor`,type:Boolean},showList:{attribute:`show-list`,type:Boolean},projection:{type:String},noShadow:{attribute:`no-shadow`,type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}#e;#t;#n;#r;#i=!1;#a;#o=[];#s=e=>fn(e,this);constructor(){super(),this.allowModify=!1,this.for=`eox-map`,this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId=``,this.featureName=`Feature`,this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.measure=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection=`EPSG:4326`,this.type=`Polygon`,this.selectionEvents=null,this.format=`feature`,this.unstyled=!1,this.noShadow=!1}set continuous(e){this.#a=e,e&&(this.multipleFeatures=!0)}get continuous(){return this.#a}setDrawnFeaturesInternal(e){this.#i=!0,this.drawnFeatures=e,this.#i=!1}set drawnFeatures(e){let t=this.#o;if(this.#o=e,this.drawLayer&&!this.#i){if(this.drawLayer.getSource().clear(),e?.length){let t=this.eoxMap?.projection||`EPSG:3857`,n=this.projection||`EPSG:4326`,r=e;t&&n&&t!==n&&(r=e.map(e=>{e=e.clone();let r=e.getGeometry().transform(n,t);return e.setGeometry(r),e})),this.drawLayer.getSource().addFeatures(r)}this.updateGeoJSON()}this.requestUpdate(`drawnFeatures`,t)}get drawnFeatures(){return this.#o}set layerId(e){cn(this,this.eoxMap,e,this.#r),this.#r=e}get layerId(){return this.#r}startDrawing(){Wt(this)}stopDrawing(){un(this)}discardDrawing(){en(this)}removeFeature(e){mn(this,e)}removeFeatureByIndex(e){hn(this,e)}handleFeatureChange(e,t=!1,n=!0){this.eoxMap.parseTextToFeature(e||JSON.stringify(tt),this.drawLayer,this.eoxMap,t,n)}handleFilesChange(e){vn(e,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){this.#n=JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||tt,void 0,2)}emitDrawnFeatures(){nn(this,e=>{this.dispatchEvent(new CustomEvent(`drawupdate`,{detail:e}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updateLayer(){this.resetLayer&&this.resetLayer(this);let{EoxMap:e,OlMap:t,reset:n}=Qt(this,this.multipleFeatures);this.resetLayer=n,this.eoxMap=e,this.#t=t}firstUpdated(){this.updateLayer(),this.selectionEvents=an(this),this.importFeatures&&gn(this,this.eoxMap),this.drawnFeatures?.length>0?this.drawnFeatures=[...this.drawnFeatures]:this.updateGeoJSON(),this.requestUpdate()}updated(e){((t=>e.has(t)&&e.get(t)!==void 0)(`for`)||e.has(`type`)&&e.get(`type`)!==this.type||e.has(`measure`)&&e.get(`measure`)!==this.measure)&&(this.updateLayer(),this.currentlyDrawing=!1)}get eoxMap(){return this.#e}set eoxMap(e){let t=this.#e;this.#e=e,this.requestUpdate(`eoxMap`,t)}connectedCallback(){if(super.connectedCallback(),document.addEventListener(`keydown`,this.#s),this.drawLayer&&this.eoxMap){let{reset:e}=Qt(this,this.multipleFeatures);this.resetLayer=e}}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.#s),this.resetLayer?.(this)}render(){return o`
      <style>
        :host { display: block; }
        ${!this.unstyled&&Bt}
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
    `}},customElements.define(`eox-drawtools`,bn)})))()}var Sn=r(((e,t)=>{var n=NaN,r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,s=parseInt,c=typeof global==`object`&&global&&global.Object===Object&&global,l=typeof self==`object`&&self&&self.Object===Object&&self,u=c||l||Function(`return this`)(),d=Object.prototype.toString,f=Math.max,p=Math.min,m=function(){return u.Date.now()};function h(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,h=!0;if(typeof e!=`function`)throw TypeError(`Expected a function`);t=y(t)||0,g(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?f(y(n.maxWait)||0,t):a,h=`trailing`in n?!!n.trailing:h);function _(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function v(e){return l=e,s=setTimeout(x,t),u?_(e):o}function ee(e){var n=e-c,r=e-l,i=t-n;return d?p(i,a-r):i}function b(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function x(){var e=m();if(b(e))return te(e);s=setTimeout(x,ee(e))}function te(e){return s=void 0,h&&r?_(e):(r=i=void 0,o)}function ne(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function S(){return s===void 0?o:te(m())}function re(){var e=m(),n=b(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return v(c);if(d)return s=setTimeout(x,t),_(c)}return s===void 0&&(s=setTimeout(x,t)),o}return re.cancel=ne,re.flush=S,re}function g(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}function _(e){return!!e&&typeof e==`object`}function v(e){return typeof e==`symbol`||_(e)&&d.call(e)==`[object Symbol]`}function y(e){if(typeof e==`number`)return e;if(v(e))return n;if(g(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=g(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=e.replace(r,``);var c=a.test(e);return c||o.test(e)?s(e.slice(2),c?2:8):i.test(e)?n:+e}t.exports=h}));function*Cn(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}function wn(){return(wn=e((()=>{})))()}var Tn,En,Dn,On,kn,An;function jn(){return(jn=e((()=>{c(),Tn=Symbol.for(``),En=e=>{if(e?.r===Tn)return e?._$litStatic$},Dn=e=>({_$litStatic$:e,r:Tn}),On=new Map,kn=e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=En(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=On.get(e))===void 0&&(o.raw=o,On.set(e,t=o)),n=s}return e(t,...n)},An=kn(o),kn(a),kn(p)})))()}function Mn(){return(Mn=e((()=>{jn()})))()}var Nn,Pn;function Fn(){return(Fn=e((()=>{c(),h(),We(),Nn=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Pn=_e(class extends x{constructor(e){if(super(e),e.type!==ge.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=He(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,d,f=0,p=i.length-1,m=0,h=a.length-1;for(;f<=p&&m<=h;)if(i[f]===null)f++;else if(i[p]===null)p--;else if(s[f]===o[m])c[m]=ze(i[f],a[m]),f++,m++;else if(s[p]===o[h])c[h]=ze(i[p],a[h]),p--,h--;else if(s[f]===o[h])c[h]=ze(i[f],a[h]),Re(e,c[h+1],i[f]),f++,h--;else if(s[p]===o[m])c[m]=ze(i[p],a[m]),Re(e,i[f],i[p]),p--,m++;else if(l===void 0&&(l=Nn(o,m,h),d=Nn(s,f,p)),l.has(s[f])){if(l.has(s[p])){let t=d.get(o[m]),n=t===void 0?null:i[t];if(n===null){let t=Re(e,i[f]);ze(t,a[m]),c[m]=t}else c[m]=ze(n,a[m]),Re(e,i[f],n),i[t]=null;m++}else Ue(i[p]),p--}else Ue(i[f]),f++;for(;m<=h;){let t=Re(e,c[h+1]);ze(t,a[m]),c[m++]=t}for(;f<=p;){let e=i[f++];e!==null&&Ue(e)}return this.ut=o,Ve(e,c),u}})})))()}function In(){return(In=e((()=>{Fn()})))()}function Ln(e,t){return Rn(e,t,[]).join(``)}function Rn(e,t,n){if(e.nodeType===Cr.CDATA_SECTION||e.nodeType===Cr.TEXT)t?n.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,``)):n.push(e.nodeValue);else{var r;for(r=e.firstChild;r;r=r.nextSibling)Rn(r,t,n)}return n}function zn(e,t,n,r){for(var i=Bn(t);i;i=Vn(i)){var a=e[i.namespaceURI||null];if(A(a)){var o=a[i.localName];A(o)&&o.call(r,i,n)}}}function Bn(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==Cr.ELEMENT;)t=t.nextSibling;return t}function Vn(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==Cr.ELEMENT;)t=t.nextSibling;return t}function T(e,t,n){return Hn(e,t,n)}function Hn(e,t,n){var r=A(n)?n:{},i,a;for(i=0,a=e.length;i<a;++i)r[e[i]]=t;return r}function Un(e,t){return(function(n,r){var i=e.call(A(t)?t:this,n,r);A(i)&&r[r.length-1].push(i)})}function E(e,t,n,r,i){return r.push(e),zn(t,n,r,i),r.pop()}function D(e,t,n){return(function(r,i){let a=e.call(A(n)?n:this,r,i);if(A(a)){var o=i[i.length-1],s=A(t)?t:r.localName;o[s]=a}})}function O(e,t,n){return(function(r,i){var a=e.call(A(n)?n:this,r,i);if(A(a)){var o=i[i.length-1];Sr(o,A(t)?t:r.localName,[]).push(a)}})}function Wn(e){return e.replace(Tr,``)}function Gn(e){let t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return A(t[1])||!1}function Kn(e){return qn(Ln(e,!1))}function qn(e){let t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function Jn(e){return Yn(Ln(e,!1))}function Yn(e){let t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function k(e){return Wn(Ln(e,!1))}function Xn(e){return e.getAttributeNS(Er,`href`)}function Zn(e,t){return E({},Fr,e,t)}function Qn(e){return[qn(e.getAttribute(`minx`)),qn(e.getAttribute(`miny`)),qn(e.getAttribute(`maxx`)),qn(e.getAttribute(`maxy`))]}function $n(e,t){let n=Qn(e),r=[qn(e.getAttribute(`resx`)),qn(e.getAttribute(`resy`))];return{crs:e.getAttribute(`CRS`)||e.getAttribute(`SRS`),extent:n,res:r}}function er(e,t){let n=Qn(e);if(!(!A(n[0])||!A(n[1])||!A(n[2])||!A(n[3])))return n}function tr(e,t){return{min:parseFloat(e.getAttribute(`min`)),max:parseFloat(e.getAttribute(`max`))}}function nr(e,t){let n=E({},Ir,e,t);if(!A(n))return;let r=n.westBoundLongitude,i=n.southBoundLatitude,a=n.eastBoundLongitude,o=n.northBoundLatitude;if(!(!A(r)||!A(i)||!A(a)||!A(o)))return[r,i,a,o]}function rr(e,t){return E({},Or,e,t)}function ir(e,t){return E({},kr,e,t)}function ar(e,t){return E({},Ar,e,t)}function or(e,t){return E({},jr,e,t)}function sr(e,t){return E({},Mr,e,t)}function cr(e,t){return E([],Nr,e,t)}function lr(e,t){let n=Gn(e.getAttribute(`queryable`));return E({queryable:A(n)?n:!1},Pr,e,t)}function ur(e,t){var n=t[t.length-1];let r=E({},Pr,e,t);if(!A(r))return;let i=Gn(e.getAttribute(`queryable`));A(i)||(i=n.queryable),r.queryable=A(i)?i:!1;let a=Yn(e.getAttribute(`cascaded`));A(a)||(a=n.cascaded),r.cascaded=a;let o=Gn(e.getAttribute(`opaque`));A(o)||(o=n.opaque),r.opaque=A(o)?o:!1;let s=Gn(e.getAttribute(`noSubsets`));A(s)||(s=n.noSubsets),r.noSubsets=A(s)?s:!1;let c=qn(e.getAttribute(`fixedWidth`));A(c)||(c=n.fixedWidth),r.fixedWidth=c;let l=qn(e.getAttribute(`fixedHeight`));A(l)||(l=n.fixedHeight),r.fixedHeight=l;let u=[`Style`,`CRS`,`AuthorityURL`];for(let e=0,t=u.length;e<t;e++){let t=u[e],i=n[t];if(A(i)){let e=Sr(r,t,[]);e=e.concat(i),r[t]=e}}let d=[`EX_GeographicBoundingBox`,`BoundingBox`,`Dimension`,`Attribution`,`MinScaleDenominator`,`MaxScaleDenominator`];for(let e=0,t=d.length;e<t;e++){let t=d[e],i=r[t];A(i)||(r[t]=n[t])}return r}function dr(e,t){return{name:e.getAttribute(`name`),units:e.getAttribute(`units`),unitSymbol:e.getAttribute(`unitSymbol`),default:e.getAttribute(`default`),multipleValues:Gn(e.getAttribute(`multipleValues`)),nearestValue:Gn(e.getAttribute(`nearestValue`)),current:Gn(e.getAttribute(`current`)),values:k(e)}}function fr(e,t){return E({},Hr,e,t)}function pr(e,t){return E({},Lr,e,t)}function mr(e,t){return E({},zr,e,t)}function hr(e,t){return E({},Br,e,t)}function gr(e,t){return E({},Rr,e,t)}function _r(e,t){var n=fr(e,t);if(A(n))return n.size=[Yn(e.getAttribute(`width`)),Yn(e.getAttribute(`height`))],n}function vr(e,t){var n=fr(e,t);if(A(n))return n.name=e.getAttribute(`name`),n}function yr(e,t){var n=fr(e,t);if(A(n))return n.type=e.getAttribute(`type`),n}function br(e,t){return E({},Vr,e,t)}function xr(e,t){return E([],Ur,e,t)}var A,Sr,Cr,wr,Tr,Er,j,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr;function Gr(){return(Gr=e((()=>{A=e=>e!==void 0,Sr=(e,t,n)=>t in e?e[t]:e[t]=n,Cr={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12},wr=class{constructor(e){this._parser=new e}toDocument(e){return this._parser.parseFromString(e,`application/xml`)}getAllTextContent(e,t){return Ln(e,t).join(``)}},Tr=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,Er=`http://www.w3.org/1999/xlink`,j=[null,`http://www.opengis.net/wms`],Dr=T(j,{Service:D(ir),Capability:D(rr)}),Or=T(j,{Request:D(pr),Exception:D(cr),Layer:D(lr)}),kr=T(j,{Name:D(k),Title:D(k),Abstract:D(k),KeywordList:D(xr),OnlineResource:D(Xn),ContactInformation:D(ar),Fees:D(k),AccessConstraints:D(k),LayerLimit:D(Jn),MaxWidth:D(Jn),MaxHeight:D(Jn)}),Ar=T(j,{ContactPersonPrimary:D(or),ContactPosition:D(k),ContactAddress:D(sr),ContactVoiceTelephone:D(k),ContactFacsimileTelephone:D(k),ContactElectronicMailAddress:D(k)}),jr=T(j,{ContactPerson:D(k),ContactOrganization:D(k)}),Mr=T(j,{AddressType:D(k),Address:D(k),City:D(k),StateOrProvince:D(k),PostCode:D(k),Country:D(k)}),Nr=T(j,{Format:Un(k)}),Pr=T(j,{Name:D(k),Title:D(k),Abstract:D(k),KeywordList:D(xr),CRS:O(k),SRS:O(k),EX_GeographicBoundingBox:D(nr),LatLonBoundingBox:D(er),BoundingBox:O($n),Dimension:O(dr),Attribution:D(Zn),AuthorityURL:O(vr),Identifier:O(k),MetadataURL:O(yr),DataURL:O(fr),FeatureListURL:O(fr),Style:O(br),MinScaleDenominator:D(Kn),MaxScaleDenominator:D(Kn),ScaleHint:D(tr),Layer:O(ur)}),Fr=T(j,{Title:D(k),OnlineResource:D(Xn),LogoURL:D(_r)}),Ir=T(j,{westBoundLongitude:D(Kn),eastBoundLongitude:D(Kn),southBoundLatitude:D(Kn),northBoundLatitude:D(Kn)}),Lr=T(j,{GetCapabilities:D(gr),GetMap:D(gr),GetFeatureInfo:D(gr)}),Rr=T(j,{Format:O(k),DCPType:O(mr)}),zr=T(j,{HTTP:D(hr)}),Br=T(j,{Get:D(fr),Post:D(fr)}),Vr=T(j,{Name:D(k),Title:D(k),Abstract:D(k),LegendURL:O(_r),StyleSheetURL:D(fr),StyleURL:D(fr)}),Hr=T(j,{Format:D(k),OnlineResource:D(Xn)}),Ur=T(j,{Keyword:Un(k)}),Wr=class{constructor(e,t){!t&&typeof window<`u`&&(t=window.DOMParser),this.version=void 0,this._parser=new wr(t),this._data=e}data(e){return this._data=e,this}toJSON(e){return e||=this._data,this.parse(e)}parse(e){return this.readFromDocument(this._parser.toDocument(e))}readFromDocument(e){for(let t=e.firstChild;t;t=t.nextSibling)if(t.nodeType==Cr.ELEMENT)return this.readFromNode(t);return null}readFromNode(e){return this.version=e.getAttribute(`version`),E({version:this.version},Dr,e,[])||null}}})))()}async function Kr(e){let t=new URL(e),n=t.searchParams;n.set(`SERVICE`,`WMS`),n.set(`REQUEST`,`GetCapabilities`);let r=t.toString(),i=await fetch(r);if(i.ok){let e=await i.text();return new Wr(e).toJSON()}throw Error(`Error: ${i.status}`)}function qr(){return(qr=e((()=>{Gr()})))()}function Jr(e){return/\b(?:wms|ows)\b/i.test(e)?`TileWMS`:/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i.test(e)?`XYZ`:!1}function Yr(e){let t=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),n=Jr(e);return!!(e&&t&&n)}function Xr(){return(Xr=e((()=>{})))()}function Zr(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,`"$2": `).replace(/,\s*}/g,`}`).replace(/,\s*]/g,`]`).replace(/\s*(\{|}|\[|\]|,)\s*/g,`$1`).replaceAll(`": //`,`://`)}function Qr(e){try{return JSON.parse(Zr(e)),!!e}catch{return!1}}function $r(){return($r=e((()=>{})))()}function ei(e,t){let n=new URL(e).searchParams;return Object.entries(t).forEach(([e,t])=>{typeof t==`object`&&!Array.isArray(t)&&t!==null?Object.keys(t).forEach(e=>{n.set(e,t[e])}):Array.isArray(t)?(n.delete(e),t.forEach(t=>{n.append(e,t)})):n.set(e,t)}),`${e.split(`?`)[0]}?${n.toString()}`}function ti(e,t,n){return(t=ci(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ni.apply(null,arguments)}function ri(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ii(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ri(Object(n),!0).forEach(function(t){ti(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ri(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ai(e,t){if(e==null)return{};var n,r,i=oi(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function oi(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function si(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ci(e){var t=si(e,`string`);return typeof t==`symbol`?t:t+``}function li(e){"@babel/helpers - typeof";return li=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},li(e)}function ui(e){if(typeof window<`u`&&window.navigator)return!!navigator.userAgent.match(e)}function M(e,t,n){e.addEventListener(t,n,!ea&&oa)}function N(e,t,n){e.removeEventListener(t,n,!ea&&oa)}function di(e,t){if(t){if(t[0]===`>`&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function fi(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function pi(e,t,n,r){if(e){n||=document;do{if(t!=null&&(t[0]===`>`?e.parentNode===n&&di(e,t):di(e,t))||r&&e===n)return e;if(e===n)break}while(e=fi(e))}return null}function mi(e,t,n){e&&t&&(e.classList?e.classList[n?`add`:`remove`](t):e.className=((` `+e.className+` `).replace(sa,` `).replace(` `+t+` `,` `)+(n?` `+t:``)).replace(sa,` `))}function P(e,t,n){var r=e&&e.style;if(r){if(n===void 0)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(e,``):e.currentStyle&&(n=e.currentStyle),t===void 0?n:n[t];!(t in r)&&t.indexOf(`webkit`)===-1&&(t=`-webkit-`+t),r[t]=n+(typeof n==`string`?``:`px`)}}function hi(e,t){var n=``;if(typeof e==`string`)n=e;else do{var r=P(e,`transform`);r&&r!==`none`&&(n=r+` `+n)}while(!t&&(e=e.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function gi(e,t,n){if(e){var r=e.getElementsByTagName(t),i=0,a=r.length;if(n)for(;i<a;i++)n(r[i],i);return r}return[]}function _i(){return document.scrollingElement||document.documentElement}function F(e,t,n,r,i){if(!(!e.getBoundingClientRect&&e!==window)){var a,o,s,c,l,u,d;if(e!==window&&e.parentNode&&e!==_i()?(a=e.getBoundingClientRect(),o=a.top,s=a.left,c=a.bottom,l=a.right,u=a.height,d=a.width):(o=0,s=0,c=window.innerHeight,l=window.innerWidth,u=window.innerHeight,d=window.innerWidth),(t||n)&&e!==window&&(i||=e.parentNode,!ea))do if(i&&i.getBoundingClientRect&&(P(i,`transform`)!==`none`||n&&P(i,`position`)!==`static`)){var f=i.getBoundingClientRect();o-=f.top+parseInt(P(i,`border-top-width`)),s-=f.left+parseInt(P(i,`border-left-width`)),c=o+a.height,l=s+a.width;break}while(i=i.parentNode);if(r&&e!==window){var p=hi(i||e),m=p&&p.a,h=p&&p.d;p&&(o/=h,s/=m,d/=m,u/=h,c=o+u,l=s+d)}return{top:o,left:s,bottom:c,right:l,width:d,height:u}}}function vi(e,t,n){for(var r=wi(e,!0),i=F(e)[t];r;){var a=F(r)[n],o=void 0;if(o=n===`top`||n===`left`?i>=a:i<=a,!o)return r;if(r===_i())break;r=wi(r,!1)}return!1}function yi(e,t,n,r){for(var i=0,a=0,o=e.children;a<o.length;){if(o[a].style.display!==`none`&&o[a]!==L.ghost&&(r||o[a]!==L.dragged)&&pi(o[a],n.draggable,e,!1)){if(i===t)return o[a];i++}a++}return null}function bi(e,t){for(var n=e.lastElementChild;n&&(n===L.ghost||P(n,`display`)===`none`||t&&!di(n,t));)n=n.previousElementSibling;return n||null}function xi(e,t){var n=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!==`TEMPLATE`&&e!==L.clone&&(!t||di(e,t))&&n++;return n}function Si(e){var t=0,n=0,r=_i();if(e)do{var i=hi(e),a=i.a,o=i.d;t+=e.scrollLeft*a,n+=e.scrollTop*o}while(e!==r&&(e=e.parentNode));return[t,n]}function Ci(e,t){for(var n in e)if(e.hasOwnProperty(n)){for(var r in t)if(t.hasOwnProperty(r)&&t[r]===e[n][r])return Number(n)}return-1}function wi(e,t){if(!e||!e.getBoundingClientRect)return _i();var n=e,r=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=P(n);if(n.clientWidth<n.scrollWidth&&(i.overflowX==`auto`||i.overflowX==`scroll`)||n.clientHeight<n.scrollHeight&&(i.overflowY==`auto`||i.overflowY==`scroll`)){if(!n.getBoundingClientRect||n===document.body)return _i();if(r||t)return n;r=!0}}while(n=n.parentNode);return _i()}function Ti(e,t){if(e&&t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function Ei(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function Di(e,t){return function(){if(!ca){var n=arguments,r=this;n.length===1?e.call(r,n[0]):e.apply(r,n),ca=setTimeout(function(){ca=void 0},t)}}}function Oi(){clearTimeout(ca),ca=void 0}function ki(e,t,n){e.scrollLeft+=t,e.scrollTop+=n}function Ai(e){var t=window.Polymer,n=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):n?n(e).clone(!0)[0]:e.cloneNode(!0)}function ji(e,t,n){var r={};return Array.from(e.children).forEach(function(i){if(!(!pi(i,t.draggable,e,!1)||i.animated||i===n)){var a=F(i);r.left=Math.min(r.left??1/0,a.left),r.top=Math.min(r.top??1/0,a.top),r.right=Math.max(r.right??-1/0,a.right),r.bottom=Math.max(r.bottom??-1/0,a.bottom)}}),r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}function Mi(){var e=[],t;return{captureAnimationState:function(){e=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){if(P(t,`display`)!==`none`&&t!==L.ghost){e.push({target:t,rect:F(t)});var n=ii({},e[e.length-1].rect);if(t.thisAnimationDuration){var r=hi(t,!0);r&&(n.top-=r.f,n.left-=r.e)}t.fromRect=n}})},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(Ci(e,{target:t}),1)},animateAll:function(n){var r=this;if(!this.options.animation){clearTimeout(t),typeof n==`function`&&n();return}var i=!1,a=0;e.forEach(function(e){var t=0,n=e.target,o=n.fromRect,s=F(n),c=n.prevFromRect,l=n.prevToRect,u=e.rect,d=hi(n,!0);d&&(s.top-=d.f,s.left-=d.e),n.toRect=s,n.thisAnimationDuration&&Ei(c,s)&&!Ei(o,s)&&(u.top-s.top)/(u.left-s.left)===(o.top-s.top)/(o.left-s.left)&&(t=Pi(u,c,l,r.options)),Ei(s,o)||(n.prevFromRect=o,n.prevToRect=s,t||=r.options.animation,r.animate(n,u,s,t)),t&&(i=!0,a=Math.max(a,t),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout(function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null},t),n.thisAnimationDuration=t)}),clearTimeout(t),i?t=setTimeout(function(){typeof n==`function`&&n()},a):typeof n==`function`&&n(),e=[]},animate:function(e,t,n,r){if(r){P(e,`transition`,``),P(e,`transform`,``);var i=hi(this.el),a=i&&i.a,o=i&&i.d,s=(t.left-n.left)/(a||1),c=(t.top-n.top)/(o||1);e.animatingX=!!s,e.animatingY=!!c,P(e,`transform`,`translate3d(`+s+`px,`+c+`px,0)`),this.forRepaintDummy=Ni(e),P(e,`transition`,`transform `+r+`ms`+(this.options.easing?` `+this.options.easing:``)),P(e,`transform`,`translate3d(0,0,0)`),typeof e.animated==`number`&&clearTimeout(e.animated),e.animated=setTimeout(function(){P(e,`transition`,``),P(e,`transform`,``),e.animated=!1,e.animatingX=!1,e.animatingY=!1},r)}}}}function Ni(e){return e.offsetWidth}function Pi(e,t,n,r){return Math.sqrt((t.top-e.top)**2+(t.left-e.left)**2)/Math.sqrt((t.top-n.top)**2+(t.left-n.left)**2)*r.animation}function Fi(e){var t=e.sortable,n=e.rootEl,r=e.name,i=e.targetEl,a=e.cloneEl,o=e.toEl,s=e.fromEl,c=e.oldIndex,l=e.newIndex,u=e.oldDraggableIndex,d=e.newDraggableIndex,f=e.originalEvent,p=e.putSortable,m=e.extraEventProperties;if(t||=n&&n[R],t){var h,g=t.options,_=`on`+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!ea&&!ta?h=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(h=document.createEvent(`Event`),h.initEvent(r,!0,!0)),h.to=o||n,h.from=s||n,h.item=i||n,h.clone=a,h.oldIndex=c,h.newIndex=l,h.oldDraggableIndex=u,h.newDraggableIndex=d,h.originalEvent=f,h.pullMode=p?p.lastPutMode:void 0;var v=ii(ii({},m),da.getEventProperties(r,t));for(var y in v)h[y]=v[y];n&&n.dispatchEvent(h),g[_]&&g[_].call(t,h)}}function I(e){Fi(ii({putSortable:G,cloneEl:W,targetEl:B,rootEl:U,oldIndex:ga,oldDraggableIndex:va,newIndex:_a,newDraggableIndex:ya},e))}function L(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw`Sortable: \`el\` must be an HTMLElement, not ${{}.toString.call(e)}`;this.el=e,this.options=t=ni({},t),e[R]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?`>li`:`>*`,swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Wa(e,this.options)},ghostClass:`sortable-ghost`,chosenClass:`sortable-chosen`,dragClass:`sortable-drag`,ignore:`a, img`,filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData(`Text`,t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:`data-id`,delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:`sortable-fallback`,fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:L.supportPointer!==!1&&`PointerEvent`in window&&(!ra||ia),emptyInsertThreshold:5};for(var r in da.initializePlugins(this,e,n),n)!(r in t)&&(t[r]=n[r]);for(var i in qa(t),this)i.charAt(0)===`_`&&typeof this[i]==`function`&&(this[i]=this[i].bind(this));this.nativeDraggable=!t.forceFallback&&Ha,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?M(e,`pointerdown`,this._onTapStart):(M(e,`mousedown`,this._onTapStart),M(e,`touchstart`,this._onTapStart)),this.nativeDraggable&&(M(e,`dragover`,this),M(e,`dragenter`,this)),Ca.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),ni(this,Mi())}function Ii(e){e.dataTransfer&&(e.dataTransfer.dropEffect=`move`),e.cancelable&&e.preventDefault()}function Li(e,t,n,r,i,a,o,s){var c,l=e[R],u=l.options.onMove,d;return window.CustomEvent&&!ea&&!ta?c=new CustomEvent(`move`,{bubbles:!0,cancelable:!0}):(c=document.createEvent(`Event`),c.initEvent(`move`,!0,!0)),c.to=t,c.from=e,c.dragged=n,c.draggedRect=r,c.related=i||t,c.relatedRect=a||F(t),c.willInsertAfter=s,c.originalEvent=o,e.dispatchEvent(c),u&&(d=u.call(l,c,o)),d}function Ri(e){e.draggable=!1}function zi(){La=!1}function Bi(e,t,n){var r=F(yi(n.el,0,n.options,!0)),i=ji(n.el,n.options,H),a=10;return t?e.clientX<i.left-a||e.clientY<r.top&&e.clientX<r.right:e.clientY<i.top-a||e.clientY<r.bottom&&e.clientX<r.left}function Vi(e,t,n){var r=F(bi(n.el,n.options.draggable)),i=ji(n.el,n.options,H),a=10;return t?e.clientX>i.right+a||e.clientY>r.bottom&&e.clientX>r.left:e.clientY>i.bottom+a||e.clientX>r.right&&e.clientY>r.top}function Hi(e,t,n,r,i,a,o,s){var c=r?e.clientY:e.clientX,l=r?n.height:n.width,u=r?n.top:n.left,d=r?n.bottom:n.right,f=!1;if(!o){if(s&&Fa<l*i){if(!Na&&(Ma===1?c>u+l*a/2:c<d-l*a/2)&&(Na=!0),Na)f=!0;else if(Ma===1?c<u+Fa:c>d-Fa)return-Ma}else if(c>u+l*(1-i)/2&&c<d-l*(1-i)/2)return Ui(t)}return f||=o,f&&(c<u+l*a/2||c>d-l*a/2)?c>u+l/2?1:-1:0}function Ui(e){return xi(B)<xi(e)?1:-1}function Wi(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,n=t.length,r=0;n--;)r+=t.charCodeAt(n);return r.toString(36)}function Gi(e){Ra.length=0;for(var t=e.getElementsByTagName(`input`),n=t.length;n--;){var r=t[n];r.checked&&Ra.push(r)}}function Ki(e){return setTimeout(e,0)}function qi(e){return clearTimeout(e)}function Ji(){function e(){for(var e in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)e.charAt(0)===`_`&&typeof this[e]==`function`&&(this[e]=this[e].bind(this))}return e.prototype={dragStarted:function(e){var t=e.originalEvent;this.sortable.nativeDraggable?M(document,`dragover`,this._handleAutoScroll):this.options.supportPointer?M(document,`pointermove`,this._handleFallbackAutoScroll):t.touches?M(document,`touchmove`,this._handleFallbackAutoScroll):M(document,`mousemove`,this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var t=e.originalEvent;!this.options.dragOverBubble&&!t.rootEl&&this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?N(document,`dragover`,this._handleAutoScroll):(N(document,`pointermove`,this._handleFallbackAutoScroll),N(document,`touchmove`,this._handleFallbackAutoScroll),N(document,`mousemove`,this._handleFallbackAutoScroll)),Xi(),Yi(),Oi()},nulling:function(){ro=$a=Qa=eo=io=to=no=null,q.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,t){var n=this,r=(e.touches?e.touches[0]:e).clientX,i=(e.touches?e.touches[0]:e).clientY,a=document.elementFromPoint(r,i);if(ro=e,t||this.options.forceAutoScrollFallback||ta||ea||ra){ao(e,this.options,a,t);var o=wi(a,!0);eo&&(!io||r!==to||i!==no)&&(io&&Xi(),io=setInterval(function(){var a=wi(document.elementFromPoint(r,i),!0);a!==o&&(o=a,Yi()),ao(e,n.options,a,t)},10),to=r,no=i)}else{if(!this.options.bubbleScroll||wi(a,!0)===_i()){Yi();return}ao(e,this.options,wi(a,!1),!1)}}},ni(e,{pluginName:`scroll`,initializeByDefault:!0})}function Yi(){q.forEach(function(e){clearInterval(e.pid)}),q=[]}function Xi(){clearInterval(io)}function Zi(){}function Qi(){}var $i,ea,ta,na,ra,ia,aa,oa,sa,ca,R,la,ua,da,fa,z,B,V,H,U,pa,ma,W,ha,ga,_a,va,ya,ba,G,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,K,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,q,Qa,$a,eo,to,no,ro,io,ao,oo;function so(){return(so=e((()=>{$i=`1.15.7`,ea=ui(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ta=ui(/Edge/i),na=ui(/firefox/i),ra=ui(/safari/i)&&!ui(/chrome/i)&&!ui(/android/i),ia=ui(/iP(ad|od|hone)/i),aa=ui(/chrome/i)&&ui(/android/i),oa={capture:!1,passive:!1},sa=/\s+/g,R=`Sortable`+new Date().getTime(),la=[],ua={initializeByDefault:!0},da={mount:function(e){for(var t in ua)ua.hasOwnProperty(t)&&!(t in e)&&(e[t]=ua[t]);la.forEach(function(t){if(t.pluginName===e.pluginName)throw`Sortable: Cannot mount plugin ${e.pluginName} more than once`}),la.push(e)},pluginEvent:function(e,t,n){var r=this;this.eventCanceled=!1,n.cancel=function(){r.eventCanceled=!0};var i=e+`Global`;la.forEach(function(r){t[r.pluginName]&&(t[r.pluginName][i]&&t[r.pluginName][i](ii({sortable:t},n)),t.options[r.pluginName]&&t[r.pluginName][e]&&t[r.pluginName][e](ii({sortable:t},n)))})},initializePlugins:function(e,t,n,r){for(var i in la.forEach(function(r){var i=r.pluginName;if(!(!e.options[i]&&!r.initializeByDefault)){var a=new r(e,t,e.options);a.sortable=e,a.options=e.options,e[i]=a,ni(n,a.defaults)}}),e.options)if(e.options.hasOwnProperty(i)){var a=this.modifyOption(e,i,e.options[i]);a!==void 0&&(e.options[i]=a)}},getEventProperties:function(e,t){var n={};return la.forEach(function(r){typeof r.eventProperties==`function`&&ni(n,r.eventProperties.call(t[r.pluginName],e))}),n},modifyOption:function(e,t,n){var r;return la.forEach(function(i){e[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[t]==`function`&&(r=i.optionListeners[t].call(e[i.pluginName],n))}),r}},fa=[`evt`],z=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.evt,i=ai(n,fa);da.pluginEvent.bind(L)(e,t,ii({dragEl:B,parentEl:V,ghostEl:H,rootEl:U,nextEl:pa,lastDownEl:ma,cloneEl:W,cloneHidden:ha,dragStarted:Aa,putSortable:G,activeSortable:L.active,originalEvent:r,oldIndex:ga,oldDraggableIndex:va,newIndex:_a,newDraggableIndex:ya,hideGhostForTarget:Ja,unhideGhostForTarget:Ya,cloneNowHidden:function(){ha=!0},cloneNowShown:function(){ha=!1},dispatchSortableEvent:function(e){I({sortable:t,name:e,originalEvent:r})}},i))},xa=!1,Sa=!1,Ca=[],Na=!1,Pa=!1,Ia=[],La=!1,Ra=[],za=typeof document<`u`,Ba=ia,Va=ta||ea?`cssFloat`:`float`,Ha=za&&!aa&&!ia&&`draggable`in document.createElement(`div`),Ua=function(){if(za){if(ea)return!1;var e=document.createElement(`x`);return e.style.cssText=`pointer-events:auto`,e.style.pointerEvents===`auto`}}(),Wa=function(e,t){var n=P(e),r=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=yi(e,0,t),a=yi(e,1,t),o=i&&P(i),s=a&&P(a),c=o&&parseInt(o.marginLeft)+parseInt(o.marginRight)+F(i).width,l=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+F(a).width;if(n.display===`flex`)return n.flexDirection===`column`||n.flexDirection===`column-reverse`?`vertical`:`horizontal`;if(n.display===`grid`)return n.gridTemplateColumns.split(` `).length<=1?`vertical`:`horizontal`;if(i&&o.float&&o.float!==`none`){var u=o.float===`left`?`left`:`right`;return a&&(s.clear===`both`||s.clear===u)?`vertical`:`horizontal`}return i&&(o.display===`block`||o.display===`flex`||o.display===`table`||o.display===`grid`||c>=r&&n[Va]===`none`||a&&n[Va]===`none`&&c+l>r)?`vertical`:`horizontal`},Ga=function(e,t,n){var r=n?e.left:e.top,i=n?e.right:e.bottom,a=n?e.width:e.height,o=n?t.left:t.top,s=n?t.right:t.bottom,c=n?t.width:t.height;return r===o||i===s||r+a/2===o+c/2},Ka=function(e,t){var n;return Ca.some(function(r){var i=r[R].options.emptyInsertThreshold;if(!(!i||bi(r))){var a=F(r),o=e>=a.left-i&&e<=a.right+i,s=t>=a.top-i&&t<=a.bottom+i;if(o&&s)return n=r}}),n},qa=function(e){function t(e,n){return function(r,i,a,o){var s=r.options.group.name&&i.options.group.name&&r.options.group.name===i.options.group.name;if(e==null&&(n||s))return!0;if(e==null||e===!1)return!1;if(n&&e===`clone`)return e;if(typeof e==`function`)return t(e(r,i,a,o),n)(r,i,a,o);var c=(n?r:i).options.group.name;return e===!0||typeof e==`string`&&e===c||e.join&&e.indexOf(c)>-1}}var n={},r=e.group;(!r||li(r)!=`object`)&&(r={name:r}),n.name=r.name,n.checkPull=t(r.pull,!0),n.checkPut=t(r.put),n.revertClone=r.revertClone,e.group=n},Ja=function(){!Ua&&H&&P(H,`display`,`none`)},Ya=function(){!Ua&&H&&P(H,`display`,``)},za&&!aa&&document.addEventListener(`click`,function(e){if(Sa)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),Sa=!1,!1},!0),Xa=function(e){if(B){e=e.touches?e.touches[0]:e;var t=Ka(e.clientX,e.clientY);if(t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);n.target=n.rootEl=t,n.preventDefault=void 0,n.stopPropagation=void 0,t[R]._onDragOver(n)}}},Za=function(e){B&&B.parentNode[R]._isOutsideThisEl(e.target)},L.prototype={constructor:L,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(ja=null)},_getDirection:function(e,t){return typeof this.options.direction==`function`?this.options.direction.call(this,e,t,B):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,n=this.el,r=this.options,i=r.preventOnFilter,a=e.type,o=e.touches&&e.touches[0]||e.pointerType&&e.pointerType===`touch`&&e,s=(o||e).target,c=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,l=r.filter;if(Gi(n),!B&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||r.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&ra&&s&&s.tagName.toUpperCase()===`SELECT`)&&(s=pi(s,r.draggable,n,!1),!(s&&s.animated)&&ma!==s)){if(ga=xi(s),va=xi(s,r.draggable),typeof l==`function`){if(l.call(this,e,s,this)){I({sortable:t,rootEl:c,name:`filter`,targetEl:s,toEl:n,fromEl:n}),z(`filter`,t,{evt:e}),i&&e.preventDefault();return}}else if(l&&(l=l.split(`,`).some(function(r){if(r=pi(c,r.trim(),n,!1),r)return I({sortable:t,rootEl:r,name:`filter`,targetEl:s,fromEl:n,toEl:n}),z(`filter`,t,{evt:e}),!0}),l)){i&&e.preventDefault();return}r.handle&&!pi(c,r.handle,n,!1)||this._prepareDragStart(e,o,s)}}},_prepareDragStart:function(e,t,n){var r=this,i=r.el,a=r.options,o=i.ownerDocument,s;if(n&&!B&&n.parentNode===i){var c=F(n);if(U=i,B=n,V=B.parentNode,pa=B.nextSibling,ma=n,ba=a.group,L.dragged=B,wa={target:B,clientX:(t||e).clientX,clientY:(t||e).clientY},Oa=wa.clientX-c.left,ka=wa.clientY-c.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,B.style[`will-change`]=`all`,s=function(){if(z(`delayEnded`,r,{evt:e}),L.eventCanceled){r._onDrop();return}r._disableDelayedDragEvents(),!na&&r.nativeDraggable&&(B.draggable=!0),r._triggerDragStart(e,t),I({sortable:r,name:`choose`,originalEvent:e}),mi(B,a.chosenClass,!0)},a.ignore.split(`,`).forEach(function(e){gi(B,e.trim(),Ri)}),M(o,`dragover`,Xa),M(o,`mousemove`,Xa),M(o,`touchmove`,Xa),a.supportPointer?(M(o,`pointerup`,r._onDrop),!this.nativeDraggable&&M(o,`pointercancel`,r._onDrop)):(M(o,`mouseup`,r._onDrop),M(o,`touchend`,r._onDrop),M(o,`touchcancel`,r._onDrop)),na&&this.nativeDraggable&&(this.options.touchStartThreshold=4,B.draggable=!0),z(`delayStart`,this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(ta||ea))){if(L.eventCanceled){this._onDrop();return}a.supportPointer?(M(o,`pointerup`,r._disableDelayedDrag),M(o,`pointercancel`,r._disableDelayedDrag)):(M(o,`mouseup`,r._disableDelayedDrag),M(o,`touchend`,r._disableDelayedDrag),M(o,`touchcancel`,r._disableDelayedDrag)),M(o,`mousemove`,r._delayedDragTouchMoveHandler),M(o,`touchmove`,r._delayedDragTouchMoveHandler),a.supportPointer&&M(o,`pointermove`,r._delayedDragTouchMoveHandler),r._dragStartTimer=setTimeout(s,a.delay)}else s()}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){B&&Ri(B),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;N(e,`mouseup`,this._disableDelayedDrag),N(e,`touchend`,this._disableDelayedDrag),N(e,`touchcancel`,this._disableDelayedDrag),N(e,`pointerup`,this._disableDelayedDrag),N(e,`pointercancel`,this._disableDelayedDrag),N(e,`mousemove`,this._delayedDragTouchMoveHandler),N(e,`touchmove`,this._delayedDragTouchMoveHandler),N(e,`pointermove`,this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t||=e.pointerType==`touch`&&e,!this.nativeDraggable||t?this.options.supportPointer?M(document,`pointermove`,this._onTouchMove):t?M(document,`touchmove`,this._onTouchMove):M(document,`mousemove`,this._onTouchMove):(M(B,`dragend`,this),M(U,`dragstart`,this._onDragStart));try{document.selection?Ki(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,t){if(xa=!1,U&&B){z(`dragStarted`,this,{evt:t}),this.nativeDraggable&&M(document,`dragover`,Za);var n=this.options;!e&&mi(B,n.dragClass,!1),mi(B,n.ghostClass,!0),L.active=this,e&&this._appendGhost(),I({sortable:this,name:`start`,originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(Ta){this._lastX=Ta.clientX,this._lastY=Ta.clientY,Ja();for(var e=document.elementFromPoint(Ta.clientX,Ta.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Ta.clientX,Ta.clientY),e!==t);)t=e;if(B.parentNode[R]._isOutsideThisEl(e),t)do{if(t[R]){var n=void 0;if(n=t[R]._onDragOver({clientX:Ta.clientX,clientY:Ta.clientY,target:e,rootEl:t}),n&&!this.options.dragoverBubble)break}e=t}while(t=fi(t));Ya()}},_onTouchMove:function(e){if(wa){var t=this.options,n=t.fallbackTolerance,r=t.fallbackOffset,i=e.touches?e.touches[0]:e,a=H&&hi(H,!0),o=H&&a&&a.a,s=H&&a&&a.d,c=Ba&&K&&Si(K),l=(i.clientX-wa.clientX+r.x)/(o||1)+(c?c[0]-Ia[0]:0)/(o||1),u=(i.clientY-wa.clientY+r.y)/(s||1)+(c?c[1]-Ia[1]:0)/(s||1);if(!L.active&&!xa){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(e,!0)}if(H){a?(a.e+=l-(Ea||0),a.f+=u-(Da||0)):a={a:1,b:0,c:0,d:1,e:l,f:u};var d=`matrix(${a.a},${a.b},${a.c},${a.d},${a.e},${a.f})`;P(H,`webkitTransform`,d),P(H,`mozTransform`,d),P(H,`msTransform`,d),P(H,`transform`,d),Ea=l,Da=u,Ta=i}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!H){var e=this.options.fallbackOnBody?document.body:U,t=F(B,!0,Ba,!0,e),n=this.options;if(Ba){for(K=e;P(K,`position`)===`static`&&P(K,`transform`)===`none`&&K!==document;)K=K.parentNode;K!==document.body&&K!==document.documentElement?(K===document&&(K=_i()),t.top+=K.scrollTop,t.left+=K.scrollLeft):K=_i(),Ia=Si(K)}H=B.cloneNode(!0),mi(H,n.ghostClass,!1),mi(H,n.fallbackClass,!0),mi(H,n.dragClass,!0),P(H,`transition`,``),P(H,`transform`,``),P(H,`box-sizing`,`border-box`),P(H,`margin`,0),P(H,`top`,t.top),P(H,`left`,t.left),P(H,`width`,t.width),P(H,`height`,t.height),P(H,`opacity`,`0.8`),P(H,`position`,Ba?`absolute`:`fixed`),P(H,`zIndex`,`100000`),P(H,`pointerEvents`,`none`),L.ghost=H,e.appendChild(H),P(H,`transform-origin`,Oa/parseInt(H.style.width)*100+`% `+ka/parseInt(H.style.height)*100+`%`)}},_onDragStart:function(e,t){var n=this,r=e.dataTransfer,i=n.options;if(z(`dragStart`,this,{evt:e}),L.eventCanceled){this._onDrop();return}z(`setupClone`,this),L.eventCanceled||(W=Ai(B),W.removeAttribute(`id`),W.draggable=!1,W.style[`will-change`]=``,this._hideClone(),mi(W,this.options.chosenClass,!1),L.clone=W),n.cloneId=Ki(function(){z(`clone`,n),!L.eventCanceled&&(n.options.removeCloneOnHide||U.insertBefore(W,B),n._hideClone(),I({sortable:n,name:`clone`}))}),!t&&mi(B,i.dragClass,!0),t?(Sa=!0,n._loopId=setInterval(n._emulateDragOver,50)):(N(document,`mouseup`,n._onDrop),N(document,`touchend`,n._onDrop),N(document,`touchcancel`,n._onDrop),r&&(r.effectAllowed=`move`,i.setData&&i.setData.call(n,r,B)),M(document,`drop`,n),P(B,`transform`,`translateZ(0)`)),xa=!0,n._dragStartId=Ki(n._dragStarted.bind(n,t,e)),M(document,`selectstart`,n),Aa=!0,window.getSelection().removeAllRanges(),ra&&P(document.body,`user-select`,`none`)},_onDragOver:function(e){var t=this.el,n=e.target,r,i,a,o=this.options,s=o.group,c=L.active,l=ba===s,u=o.sort,d=G||c,f,p=this,m=!1;if(La)return;function h(o,s){z(o,p,ii({evt:e,isOwner:l,axis:f?`vertical`:`horizontal`,revert:a,dragRect:r,targetRect:i,canSort:u,fromSortable:d,target:n,completed:_,onMove:function(n,i){return Li(U,t,B,r,n,F(n),e,i)},changed:v},s))}function g(){h(`dragOverAnimationCapture`),p.captureAnimationState(),p!==d&&d.captureAnimationState()}function _(r){return h(`dragOverCompleted`,{insertion:r}),r&&(l?c._hideClone():c._showClone(p),p!==d&&(mi(B,G?G.options.ghostClass:c.options.ghostClass,!1),mi(B,o.ghostClass,!0)),G!==p&&p!==L.active?G=p:p===L.active&&G&&(G=null),d===p&&(p._ignoreWhileAnimating=n),p.animateAll(function(){h(`dragOverAnimationComplete`),p._ignoreWhileAnimating=null}),p!==d&&(d.animateAll(),d._ignoreWhileAnimating=null)),(n===B&&!B.animated||n===t&&!n.animated)&&(ja=null),!o.dragoverBubble&&!e.rootEl&&n!==document&&(B.parentNode[R]._isOutsideThisEl(e.target),!r&&Xa(e)),!o.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),m=!0}function v(){_a=xi(B),ya=xi(B,o.draggable),I({sortable:p,name:`change`,toEl:t,newIndex:_a,newDraggableIndex:ya,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),n=pi(n,o.draggable,t,!0),h(`dragOver`),L.eventCanceled)return m;if(B.contains(e.target)||n.animated&&n.animatingX&&n.animatingY||p._ignoreWhileAnimating===n)return _(!1);if(Sa=!1,c&&!o.disabled&&(l?u||(a=V!==U):G===this||(this.lastPutMode=ba.checkPull(this,c,B,e))&&s.checkPut(this,c,B,e))){if(f=this._getDirection(e,n)===`vertical`,r=F(B),h(`dragOverValid`),L.eventCanceled)return m;if(a)return V=U,g(),this._hideClone(),h(`revert`),L.eventCanceled||(pa?U.insertBefore(B,pa):U.appendChild(B)),_(!0);var y=bi(t,o.draggable);if(!y||Vi(e,f,this)&&!y.animated){if(y===B)return _(!1);if(y&&t===e.target&&(n=y),n&&(i=F(n)),Li(U,t,B,r,n,i,e,!!n)!==!1)return g(),y&&y.nextSibling?t.insertBefore(B,y.nextSibling):t.appendChild(B),V=t,v(),_(!0)}else if(y&&Bi(e,f,this)){var ee=yi(t,0,o,!0);if(ee===B)return _(!1);if(n=ee,i=F(n),Li(U,t,B,r,n,i,e,!1)!==!1)return g(),t.insertBefore(B,ee),V=t,v(),_(!0)}else if(n.parentNode===t){i=F(n);var b=0,x,te=B.parentNode!==t,ne=!Ga(B.animated&&B.toRect||r,n.animated&&n.toRect||i,f),S=f?`top`:`left`,re=vi(n,`top`,`top`)||vi(B,`top`,`top`),ie=re?re.scrollTop:void 0;ja!==n&&(x=i[S],Na=!1,Pa=!ne&&o.invertSwap||te),b=Hi(e,n,i,f,ne?1:o.swapThreshold,o.invertedSwapThreshold==null?o.swapThreshold:o.invertedSwapThreshold,Pa,ja===n);var ae;if(b!==0){var oe=xi(B);do oe-=b,ae=V.children[oe];while(ae&&(P(ae,`display`)===`none`||ae===H))}if(b===0||ae===n)return _(!1);ja=n,Ma=b;var se=n.nextElementSibling,ce=!1;ce=b===1;var le=Li(U,t,B,r,n,i,e,ce);if(le!==!1)return(le===1||le===-1)&&(ce=le===1),La=!0,setTimeout(zi,30),g(),ce&&!se?t.appendChild(B):n.parentNode.insertBefore(B,ce?se:n),re&&ki(re,0,ie-re.scrollTop),V=B.parentNode,x!==void 0&&!Pa&&(Fa=Math.abs(x-F(n)[S])),v(),_(!0)}if(t.contains(B))return _(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){N(document,`mousemove`,this._onTouchMove),N(document,`touchmove`,this._onTouchMove),N(document,`pointermove`,this._onTouchMove),N(document,`dragover`,Xa),N(document,`mousemove`,Xa),N(document,`touchmove`,Xa)},_offUpEvents:function(){var e=this.el.ownerDocument;N(e,`mouseup`,this._onDrop),N(e,`touchend`,this._onDrop),N(e,`pointerup`,this._onDrop),N(e,`pointercancel`,this._onDrop),N(e,`touchcancel`,this._onDrop),N(document,`selectstart`,this)},_onDrop:function(e){var t=this.el,n=this.options;if(_a=xi(B),ya=xi(B,n.draggable),z(`drop`,this,{evt:e}),V=B&&B.parentNode,_a=xi(B),ya=xi(B,n.draggable),L.eventCanceled){this._nulling();return}xa=!1,Pa=!1,Na=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),qi(this.cloneId),qi(this._dragStartId),this.nativeDraggable&&(N(document,`drop`,this),N(t,`dragstart`,this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),ra&&P(document.body,`user-select`,``),P(B,`transform`,``),e&&(Aa&&(e.cancelable&&e.preventDefault(),!n.dropBubble&&e.stopPropagation()),H&&H.parentNode&&H.parentNode.removeChild(H),(U===V||G&&G.lastPutMode!==`clone`)&&W&&W.parentNode&&W.parentNode.removeChild(W),B&&(this.nativeDraggable&&N(B,`dragend`,this),Ri(B),B.style[`will-change`]=``,Aa&&!xa&&mi(B,G?G.options.ghostClass:this.options.ghostClass,!1),mi(B,this.options.chosenClass,!1),I({sortable:this,name:`unchoose`,toEl:V,newIndex:null,newDraggableIndex:null,originalEvent:e}),U===V?_a!==ga&&_a>=0&&(I({sortable:this,name:`update`,toEl:V,originalEvent:e}),I({sortable:this,name:`sort`,toEl:V,originalEvent:e})):(_a>=0&&(I({rootEl:V,name:`add`,toEl:V,fromEl:U,originalEvent:e}),I({sortable:this,name:`remove`,toEl:V,originalEvent:e}),I({rootEl:V,name:`sort`,toEl:V,fromEl:U,originalEvent:e}),I({sortable:this,name:`sort`,toEl:V,originalEvent:e})),G&&G.save()),L.active&&((_a==null||_a===-1)&&(_a=ga,ya=va),I({sortable:this,name:`end`,toEl:V,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){z(`nulling`,this),U=B=V=H=pa=W=ma=ha=wa=Ta=Aa=_a=ya=ga=va=ja=Ma=G=ba=L.dragged=L.ghost=L.clone=L.active=null;var e=this.el;Ra.forEach(function(t){e.contains(t)&&(t.checked=!0)}),Ra.length=Ea=Da=0},handleEvent:function(e){switch(e.type){case`drop`:case`dragend`:this._onDrop(e);break;case`dragenter`:case`dragover`:B&&(this._onDragOver(e),Ii(e));break;case`selectstart`:e.preventDefault()}},toArray:function(){for(var e=[],t,n=this.el.children,r=0,i=n.length,a=this.options;r<i;r++)t=n[r],pi(t,a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||Wi(t));return e},sort:function(e,t){var n={},r=this.el;this.toArray().forEach(function(e,t){var i=r.children[t];pi(i,this.options.draggable,r,!1)&&(n[e]=i)},this),t&&this.captureAnimationState(),e.forEach(function(e){n[e]&&(r.removeChild(n[e]),r.appendChild(n[e]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return pi(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var n=this.options;if(t===void 0)return n[e];var r=da.modifyOption(this,e,t);n[e]=r===void 0?t:r,e===`group`&&qa(n)},destroy:function(){z(`destroy`,this);var e=this.el;e[R]=null,N(e,`mousedown`,this._onTapStart),N(e,`touchstart`,this._onTapStart),N(e,`pointerdown`,this._onTapStart),this.nativeDraggable&&(N(e,`dragover`,this),N(e,`dragenter`,this)),Array.prototype.forEach.call(e.querySelectorAll(`[draggable]`),function(e){e.removeAttribute(`draggable`)}),this._onDrop(),this._disableDelayedDragEvents(),Ca.splice(Ca.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!ha){if(z(`hideClone`,this),L.eventCanceled)return;P(W,`display`,`none`),this.options.removeCloneOnHide&&W.parentNode&&W.parentNode.removeChild(W),ha=!0}},_showClone:function(e){if(e.lastPutMode!==`clone`){this._hideClone();return}if(ha){if(z(`showClone`,this),L.eventCanceled)return;B.parentNode==U&&!this.options.group.revertClone?U.insertBefore(W,B):pa?U.insertBefore(W,pa):U.appendChild(W),this.options.group.revertClone&&this.animate(B,W),P(W,`display`,``),ha=!1}}},za&&M(document,`touchmove`,function(e){(L.active||xa)&&e.cancelable&&e.preventDefault()}),L.utils={on:M,off:N,css:P,find:gi,is:function(e,t){return!!pi(e,t,e,!1)},extend:Ti,throttle:Di,closest:pi,toggleClass:mi,clone:Ai,index:xi,nextTick:Ki,cancelNextTick:qi,detectDirection:Wa,getChild:yi,expando:R},L.get=function(e){return e[R]},L.mount=function(){var e=[...arguments];e[0].constructor===Array&&(e=e[0]),e.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw`Sortable: Mounted plugin must be a constructor function, not ${{}.toString.call(e)}`;e.utils&&(L.utils=ii(ii({},L.utils),e.utils)),da.mount(e)})},L.create=function(e,t){return new L(e,t)},L.version=$i,q=[],eo=!1,ao=Di(function(e,t,n,r){if(t.scroll){var i=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,o=t.scrollSensitivity,s=t.scrollSpeed,c=_i(),l=!1,u;$a!==n&&($a=n,Yi(),Qa=t.scroll,u=t.scrollFn,Qa===!0&&(Qa=wi(n,!0)));var d=0,f=Qa;do{var p=f,m=F(p),h=m.top,g=m.bottom,_=m.left,v=m.right,y=m.width,ee=m.height,b=void 0,x=void 0,te=p.scrollWidth,ne=p.scrollHeight,S=P(p),re=p.scrollLeft,ie=p.scrollTop;p===c?(b=y<te&&(S.overflowX===`auto`||S.overflowX===`scroll`||S.overflowX===`visible`),x=ee<ne&&(S.overflowY===`auto`||S.overflowY===`scroll`||S.overflowY===`visible`)):(b=y<te&&(S.overflowX===`auto`||S.overflowX===`scroll`),x=ee<ne&&(S.overflowY===`auto`||S.overflowY===`scroll`));var ae=b&&(Math.abs(v-i)<=o&&re+y<te)-(Math.abs(_-i)<=o&&!!re),oe=x&&(Math.abs(g-a)<=o&&ie+ee<ne)-(Math.abs(h-a)<=o&&!!ie);if(!q[d])for(var se=0;se<=d;se++)q[se]||(q[se]={});(q[d].vx!=ae||q[d].vy!=oe||q[d].el!==p)&&(q[d].el=p,q[d].vx=ae,q[d].vy=oe,clearInterval(q[d].pid),(ae!=0||oe!=0)&&(l=!0,q[d].pid=setInterval(function(){r&&this.layer===0&&L.active._onTouchMove(ro);var t=q[this.layer].vy?q[this.layer].vy*s:0,n=q[this.layer].vx?q[this.layer].vx*s:0;(typeof u!=`function`||u.call(L.dragged.parentNode[R],n,t,e,ro,q[this.layer].el)===`continue`)&&ki(q[this.layer].el,n,t)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&f!==c&&(f=wi(f,!1)));eo=l}},30),oo=function(e){var t=e.originalEvent,n=e.putSortable,r=e.dragEl,i=e.activeSortable,a=e.dispatchSortableEvent,o=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var c=n||i;o();var l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,u=document.elementFromPoint(l.clientX,l.clientY);s(),c&&!c.el.contains(u)&&(a(`spill`),this.onSpill({dragEl:r,putSortable:n}))}},Zi.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,n=e.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var r=yi(this.sortable.el,this.startIndex,this.options);r?this.sortable.el.insertBefore(t,r):this.sortable.el.appendChild(t),this.sortable.animateAll(),n&&n.animateAll()},drop:oo},ni(Zi,{pluginName:`revertOnSpill`}),Qi.prototype={onSpill:function(e){var t=e.dragEl,n=e.putSortable||this.sortable;n.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),n.animateAll()},drop:oo},ni(Qi,{pluginName:`removeOnSpill`}),L.mount(new Ji),L.mount(Qi,Zi)})))()}function co(e,t,n,r){let i=[],a=null;e._sortable=L.create(e,{handle:`.drag-handle`,filter:`.drag-handle.disabled`,swapThreshold:.5,animation:150,easing:`cubic-bezier(1, 0, 0, 1)`,onStart:e=>{console.log(e),i=lo(e)},onMove:e=>{a=e.related},onEnd:e=>uo(e,r,i,t,n,a)})}var lo,uo;function fo(){return(fo=e((()=>{so(),lo=e=>{let t=e.item,n=Array.prototype.slice.call(t.parentNode.childNodes);return n=n.filter(e=>e.nodeType!=Node.ELEMENT_NODE||!e.classList.contains(`sortable-fallback`)),n},uo=(e,t,n,r,i,a)=>{let o=e.item.parentNode;for(let e of n)o.appendChild(e);if(e.oldIndex==e.newIndex)return;let s=r.getArray(),c=e.item.querySelector(`eox-layercontrol-layer`).layer.get(i),l=s.find(e=>e.get(i)===c),u=a.dataset.layer,d=s.find(e=>e.get(i)==u),f,p;for(f=0;f<s.length;f++)if(s[f]==l){r.removeAt(f);break}for(p=0;p<s.length;p++)if(s[p]===d){f>p?r.insertAt(p,l):r.insertAt(p+1,l);break}t.requestUpdate()}})))()}function po(e,t,n,r){let i=e.getArray(),a=!1;i.forEach(e=>{let i=e.ol_uid;e.get(t)||(e.set(t,i),a=!0),e.get(n)||(e.set(n,`layer ${i}`),a=!0),a&&r.requestUpdate()})}function mo(e,t,n){let r=[],i=(e,t,n)=>{r=[...r,...e.filter(e=>e.get(t)===n)];let a=e.filter(e=>e.getLayers);return a.length>0&&a.forEach(e=>i(e.getLayers().getArray(),t,n)),r};return i(e,t,n),r}function ho(e,t,n){if(!e||!t)return!1;if(!_o(e,n))return!0;let r=e.get(`minZoom`),i=e.get(`maxZoom`),a=t.getView().getZoom();return a>r&&a<i}function go(){return(go=e((()=>{J()})))()}function _o(e,t){let n=e.get(`minZoom`),r=e.get(`maxZoom`);return!!(t&&(n!==-1/0||r!==1/0))}function vo(e,t){if(!(!e||!t))return e.getLayers?`group`:t.getInteractions().getArray().filter(e=>e.freehand_!==void 0).map(e=>e.source_)?.ol_uid?.includes(e.getSource?e.getSource()?.ol_uid:void 0)?`draw`:e.declutter_!==void 0||e.get(`type`)===`Vector`?`vector`:`raster`}var yo;function bo(){return(bo=e((()=>{J(),he(),yo=(e,t,n)=>{let r=t,i=n.layer.getSource(),a=n.layerConfig.schema?.options?.removeProperties??[],o={...e};a.forEach(e=>delete o[e]),i.updateParams?i.updateParams(o):i.getTileUrlFunction&&i.getTileUrlFunction()&&(r||=i.getTileUrlFunction(),i instanceof de&&(i._updatedUrl=ei(i.getUrls()[0],e)),i.setTileUrlFunction((...t)=>{let n=new URL(r(...t));return a.forEach(e=>n.searchParams.delete(e)),ei(n.href,e)}),i.setKey(new Date().toISOString()));let s=document.querySelector(`eox-map`);if(s){let t=s.globe;if(t){let r=t.planet.layers.filter(e=>e.name==n.layer.get(`id`))[0];r&&r.setUrl(ei(r.url,e)),window.eoxMapGlobe.refresh()}}return r}})))()}function xo(e,t,n){let r=`updateStyleVariables`in t,i=`setStyle`in t,a=r?t.style_:n.style,o=a?.variables;if(o){let n=Co(e);if(a.variables={...o,...n},r)t.updateStyleVariables(n);else if(i){let e=So(a);t.setStyle(e)}}}function So(e){let t=e;if(`variables`in e){let n=JSON.stringify(e),{variables:r}=e;for(let e in r)n=typeof r[e]==`number`?n.replaceAll(`["var","${e}"]`,String(r[e])):n.replaceAll(`["var","${e}"]`,`"${r[e]}"`);t=JSON.parse(n)}return t}var Co;function wo(){return(wo=e((()=>{Co=e=>{let t={};for(let n in e)if(typeof e[n]==`object`&&e[n]!==null){let r=Co(e[n]);for(let e in r)t[e]=r?.[e]}else t[n]=e?.[n];return t}})))()}function To(){return(To=e((()=>{bo(),wo()})))()}var Eo;function Do(){return(Do=e((()=>{To(),Eo=(e,t,n)=>{if(!e)return;let r=Co(t),i,a;return a=Array.isArray(e)?structuredClone(e):[structuredClone(e)],i=a.filter(e=>{if(!(`boundTo`in e))return!0;let t=e.boundTo.key,n=e.boundTo.value;return t in r&&r[t]==n}),i.length||(i=null),i?.map(e=>{if(delete e.boundTo,e.rangeProperty&&n){let t=r[e.rangeProperty];t&&n[t]?(e.range=n[t],delete e.rangeProperty):t&&(e.range=[`#ffffff`,`#000000`])}return!(`domainProperties`in e)||`domain`in e?e:Object.keys(e)?.reduce((t,n)=>(n===`domainProperties`?t.domain=e[n].map(e=>r[e]):t[n]=e[n],t),{})}).filter(Boolean)}})))()}function Oo(e,t){if(!t)return null;let n={},r=`updateStyleVariables`in e?e.style_?.variables:t.style?.variables;if((t.type===`style`||t.style)&&r)n=r;else if(e.getSource()?.getParams?.())n=e.getSource().getParams();else if(e.getSource()?.getTileUrlFunction?.())try{let t=e.getSource().getTileUrlFunction()([0,0,0]);if(t){let e=new URL(t);n={};for(let[t,r]of e.searchParams.entries()){let i=e.searchParams.getAll(t);n[t]=i.length>1?i:r}}}catch(e){console.error(`Error parsing start values from tile URL`,e)}else return null;let i=ko(t.schema),a=Ao(Object.keys(i).length?i:t.schema,n,t.schema);return Object.keys(a).length?a:null}function ko(e,t=e,n=new Set){if(!e||typeof e!=`object`)return{};let r={};typeof e.$ref==`string`&&!n.has(e.$ref)&&(n.add(e.$ref),Object.assign(r,ko(jo(e.$ref,t),t,n)));for(let i of[`anyOf`,`oneOf`,`allOf`])if(Array.isArray(e[i]))for(let a of e[i])Object.assign(r,ko(a,t,n));return Object.assign(r,e.properties)}function Ao(e,t,n=e){let r={};for(let i in e){let a=e[i]?.type;if(a&&a!==`object`&&t[i]!==void 0){let e=[`number`,`integer`].includes(a)?Number(t[i]):t[i];r[i]=Number.isNaN(e)?t[i]:e}else{let a=Ao(ko(e[i],n),t,n);Object.keys(a).length>0&&(r[i]=a)}}return r}function jo(e,t){if(e.startsWith(`#/`))return e.slice(2).split(`/`).reduce((e,t)=>e?.[t.replace(/~1/g,`/`).replace(/~0/g,`~`)],t)}function Mo(){return{dots:o`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
    </svg>`}}var No,Po,Fo,Io,Lo;function Ro(){return(Ro=e((()=>{f(),No=(e,t)=>e?.filter(e=>[`remove`,`sort`].filter(e=>!t?.get(`layerControlDisable`)||e!==`sort`).includes(e)),Po=(e,t)=>e?.filter(e=>{let n=!0;return[`remove`,`sort`].includes(e)&&(n=!1),e===`info`&&(n=t.get(`description`)),e===`config`&&(n=t.get(`layerConfig`)),e===`datetime`&&(n=t.get(`layerDatetime`)),e===`legend`&&(n=t.get(`layerLegend`)),n}),Fo=(e,t,n)=>o`
  <button
    slot="${e}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${n?e:o`<i class="small primary-text">${t}</i>`}
  </button>
`,Io=(e,t)=>o`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{let{layer:t}=e;t?.set(`layerControlOptional`,!0),t?.setVisible(!1),e.dispatchEvent(new CustomEvent(`changed`,{detail:t,bubbles:!0}))}}
  >
    ${e.unstyled?`x`:o`<i class="small red-text">${t}</i>`}
  </button>
`,Lo=(e,t,n)=>o`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${e.layer.get(`layerControlDisable`)?`disabled`:``}"
    style="cursor: ns-resize;"
  >
    ${n?`═`:o`<i class="small primary-text">${t}</i>`}
  </button>
`})))()}var zo;function Bo(){return(Bo=e((()=>{zo=e=>{let t=[`layerControlHide`,`layerControlOptional`];return e?.getArray()?.filter(e=>t.every(t=>!e.get(t)))}})))()}function Vo(e,t){t.dispatchEvent(new CustomEvent(`datetime:updated`,{detail:e.detail,bubbles:!0}))}function J(){return(J=e((()=>{qr(),Xr(),$r(),fo(),go(),Do(),Ro(),Bo()})))()}var Ho;function Uo(){return(Uo=e((()=>{c(),h(),We(),Ho=_e(class extends x{constructor(e){if(super(e),e.type!==ge.PROPERTY&&e.type!==ge.ATTRIBUTE&&e.type!==ge.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ie(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===u||t===i)return t;let n=e.element,r=e.name;if(e.type===ge.PROPERTY){if(t===n[r])return u}else if(e.type===ge.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return u}else if(e.type===ge.ATTRIBUTE&&n.getAttribute(r)===t+``)return u;return Ve(e),t}})})))()}function Wo(){return(Wo=e((()=>{Uo()})))()}var Go=r(((e,t)=>{var n=`Expected a function`,r=NaN,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,l=typeof global==`object`&&global&&global.Object===Object&&global,u=typeof self==`object`&&self&&self.Object===Object&&self,d=l||u||Function(`return this`)(),f=Object.prototype.toString,p=Math.max,m=Math.min,h=function(){return d.Date.now()};function g(e,t,r){var i,a,o,s,c,l,u=0,d=!1,f=!1,g=!0;if(typeof e!=`function`)throw TypeError(n);t=b(t)||0,v(r)&&(d=!!r.leading,f=`maxWait`in r,o=f?p(b(r.maxWait)||0,t):o,g=`trailing`in r?!!r.trailing:g);function _(t){var n=i,r=a;return i=a=void 0,u=t,s=e.apply(r,n),s}function y(e){return u=e,c=setTimeout(te,t),d?_(e):s}function ee(e){var n=e-l,r=e-u,i=t-n;return f?m(i,o-r):i}function x(e){var n=e-l,r=e-u;return l===void 0||n>=t||n<0||f&&r>=o}function te(){var e=h();if(x(e))return ne(e);c=setTimeout(te,ee(e))}function ne(e){return c=void 0,g&&i?_(e):(i=a=void 0,s)}function S(){c!==void 0&&clearTimeout(c),u=0,i=l=a=c=void 0}function re(){return c===void 0?s:ne(h())}function ie(){var e=h(),n=x(e);if(i=arguments,a=this,l=e,n){if(c===void 0)return y(l);if(f)return c=setTimeout(te,t),_(l)}return c===void 0&&(c=setTimeout(te,t)),s}return ie.cancel=S,ie.flush=re,ie}function _(e,t,r){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(n);return v(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),g(e,t,{leading:i,maxWait:t,trailing:a})}function v(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}function y(e){return!!e&&typeof e==`object`}function ee(e){return typeof e==`symbol`||y(e)&&f.call(e)==`[object Symbol]`}function b(e){if(typeof e==`number`)return e;if(ee(e))return r;if(v(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=v(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=e.replace(i,``);var n=o.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):a.test(e)?r:+e}t.exports=_})),Ko;function qo(){return(qo=e((()=>{c(),Ko=e=>e??i})))()}function Jo(){return(Jo=e((()=>{qo()})))()}var Yo;function Xo(){return(Xo=e((()=>{f(),Jo(),Yo=class extends l{static properties={unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}};constructor(){super(),this.unstyled=!1,this.noShadow=!1,this.layer=null}#e=[];get layerLegend(){return this.#e?this.#e.length>1?this.#e:this.#e[0]:null}set layerLegend(e){this.#e=e?Array.isArray(e)?e.map((e,t)=>({id:(this.layer?.get(`id`)??``)+t,...e})):[{id:(this.layer?.get(`id`)??``)+0,...e}]:null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{this.#e=this.#e?.map(e=>(this.offsetWidth!==e.width&&(e.width=this.offsetWidth),{...e})),this.requestUpdate()}).observe(this.renderRoot.querySelector(`.legend-container`))}render(){return customElements.get(`color-legend`)||console.error("Please import `color-legend-element` in order to use layerLegend"),o`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#n}
      </style>
      ${w(this.layerLegend,()=>o`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${this.#e.map((e,t,n)=>o`
                <color-legend
                  id="${e.id}"
                  width=${e.width??325}
                  scaleType="${Ko(e.scaleType)}"
                  markType="${Ko(e.markType)}"
                  titleText="${Ko(e.title)}"
                  .range=${e.range}
                  .domain=${e.domain}
                  tickFormat="${Ko(e.tickFormat)}"
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
  `;#n=``},customElements.define(`eox-layercontrol-layer-legend`,Yo)})))()}var Zo,Qo;function $o(){return($o=e((()=>{f(),J(),To(),Zo=t(Go(),1),Xo(),Qo=class extends l{static properties={layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};#e={};#t=null;#n;constructor(){super(),this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=(0,Zo.default)(this.#r,1e3),this.customEditorInterfaces=[],this.colormapRegistry=null}updated(e){if(e.has(`layerConfig`)){let e=this.layerConfig?.type===`style`||this.layerConfig?.style?100:1e3;this.throttleDataChange=(0,Zo.default)(this.#r,e),this.requestUpdate()}}#r(e){this.#e=e.detail,this.layerConfig.type===`style`||this.layerConfig.style?`setStyle`in this.layer||`updateStyleVariables`in this.layer?xo(this.#e,this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get(`type`)??``} does not support styles configuration`):this.#n=yo(this.#e,this.#n,this),this.dispatchEvent(new CustomEvent(`layerConfig:change`,{bubbles:!0,detail:{jsonformValue:e.detail,layer:this.layer}})),this.requestUpdate()}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){this.#t=Oo(this.layer,this.layerConfig),Object.keys(this.#e).length!==0&&(this.#t=this.#e),customElements.get(`eox-jsonform`)||console.error(`Please import @eox/jsonform in order to use layerconfig`);let e={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return o`
      <style>
        ${this.#i}
        ${!this.unstyled&&this.#a}
      </style>
      ${w(this.layerConfig,()=>o`
          ${w(this.layerConfig.legend,()=>o`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${Eo(this.layerConfig.legend,this.#t,this.colormapRegistry)}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${this.#t}
            .options=${e}
            .noShadow=${!0}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}#i=s`
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
  `;#a=s`
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
  `},customElements.define(`eox-layercontrol-layerconfig`,Qo)})))()}var es;function ts(){return(ts=e((()=>{f(),es=class extends l{static properties={unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}};constructor(){super(),this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#e(e){let t=new Date(e.detail.date[0]),n=this.layerDatetime.controlValues?.some(e=>typeof e==`string`&&e.includes(`T`)),r;r=n?t.toISOString():(e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`)(t),r!==this.layerDatetime.currentStep&&(this.dispatchEvent(new CustomEvent(`datetime:updated`,{bubbles:!0,detail:{datetime:r,layer:this.layer}})),this.layerDatetime.currentStep=r,this.requestUpdate())}render(){return customElements.get(`eox-timecontrol`)||console.error(`Please import @eox/timecontrol in order to use layerDatetime`),o`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#n}
      </style>
      ${w(this.layerDatetime,()=>o`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get(`id`),name:this.layer.get(`name`)||this.layer.get(`title`),timeControlValues:this.layerDatetime.controlValues.map(e=>({date:e}))}]}
            @select=${this.#e}
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
    `}#t=``;#n=``},customElements.define(`eox-layercontrol-layer-datetime`,es)})))()}var ns;function rs(){return(rs=e((()=>{f(),De(),ns=class extends l{static properties={actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}};constructor(){super(),this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#e=e=>(this.selectedTab===e||this.toolsAsList)&&`highlighted`;render(){let e=this.tabs,t=this.actions,n=t.length+e.length>1;return o`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#n}
      </style>
      <div class="${this.toolsAsList?`listed`:`tabbed`}">
        <!-- Navigation for tabs and actions -->
        ${w(n,()=>o`
            <nav>
              ${w(!this.toolsAsList,()=>o`
                  <div>
                    <!-- Labels for tabs -->
                    ${Cn(e,(e,t)=>o`
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
                    ${Cn(t,e=>o`
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
          ${Cn(e,(t,n)=>o`
              ${w(this.toolsAsList,()=>o`
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
              ${w(this.toolsAsList&&n<e.length-1,()=>o`<hr class="small" />`)}
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
    ${Se}
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
  `},customElements.define(`eox-layercontrol-tools-items`,ns)})))()}var is;function as(){return(as=e((()=>{f(),we(),Wo(),De(),$o(),ts(),Xo(),rs(),J(),is=class extends l{static properties={layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},open:{type:Boolean,reflect:!0},toolsAutoExpand:{attribute:`tools-auto-expand`,type:Boolean},embedded:{state:!0},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.open=!1,this.toolsAutoExpand=!1,setTimeout(()=>{let e=this.parentElement||this.getRootNode()?.host;this.embedded=e?.tagName===`EOX-LAYERCONTROL-LAYER`,(this.open===void 0||this.open===!1||this.open===null)&&(this.open=this.toolsAutoExpand?!!this.layer?.getVisible():this.embedded===!1||!!this.layer?.get(`layerControlToolsExpand`))}),this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updated(e){this.toolsAutoExpand&&(e.has(`toolsAutoExpand`)||e.has(`layer`))&&(this.open=!!this.layer?.getVisible())}#e(e){this.dispatchEvent(new CustomEvent(`layerConfig:change`,{bubbles:!0,detail:{jsonformValue:e.detail.jsonformValue,layer:e.detail.layer}}))}_removeButton=e=>Io(this,e);_sortButton=e=>Lo(this,e,this.unstyled);_button=(e,t)=>Fo(e,t,this.unstyled);_getDefaultTools=e=>o`
      <div slot="info-content">
        ${be(this.layer.get(`description`))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${Ho(this.layer?.getOpacity())}
            class="tiny max"
            @input=${e=>{this.layer.setOpacity(parseFloat(e.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(this.layer?.getOpacity()*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${w(this.layer.get(`layerConfig`),()=>o`
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
        ${w(this.layer.get(`layerDatetime`),()=>o`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get(`layerDatetime`)}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${e=>Vo(e,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${w(this.layer.get(`layerLegend`),()=>o`
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
    `;render(){let e=No(this.tools,this.layer),t=Po(this.tools,this.layer),n=e?.length,r=t?.length;return o`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#n}
      </style>
      ${w(n+r>0,()=>o`
          ${w(n!==1||r!==0,()=>o`
              <details
                class="tools"
                .open=${Ho(this.open)}
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
                  ${Cn(t,e=>this._button(e,Mo()[e]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(Mo())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}#t=``;#n=`
    ${this.embedded?``:Se}
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
  `},customElements.define(`eox-layercontrol-layer-tools`,is)})))()}var os;function ss(){return(ss=e((()=>{J(),os=e=>{let t=()=>{let t=ho(e.layer,e.map,e.showLayerZoomState),n=!1;!t&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,n=!0):t&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,n=!0),n&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent(`change:resolution`,{bubbles:!0})))};_o(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on(`change:resolution`,()=>t()))}})))()}var cs;function ls(){return(ls=e((()=>{cs=(e,t)=>{let n=t.layer;if(n.setVisible(e.target.checked),t.toolsAutoExpand){let n=t.renderRoot.querySelector(`eox-layercontrol-layer-tools`);n&&(n.open=e.target.checked)}e.target.checked&&n.get(`layerControlExclusive`)&&t.closest(`${t.globallyExclusiveLayers?`.layers`:`eox-layercontrol-layer-list`} > ul`).querySelectorAll(`eox-layercontrol-layer`).forEach(e=>{if(e.layer!==n&&e.layer?.get(`layerControlExclusive`)){if(e.layer.setVisible(!1),e.toolsAutoExpand){let t=e.renderRoot.querySelector(`eox-layercontrol-layer-tools`);t&&(t.open=!1)}e.requestUpdate()}}),t.dispatchEvent(new CustomEvent(`changed`,{bubbles:!0,detail:n})),t.requestUpdate()}})))()}function us(){return(us=e((()=>{ss(),ls()})))()}var ds;function fs(){return(fs=e((()=>{f(),Wo(),as(),us(),Ro(),ds=class extends l{static properties={layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:`title-property`,type:String},showLayerZoomState:{attribute:`show-layer-zoom-state`,type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:`tools-auto-expand`,type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};currLayerVisibilityBasedOnZoom=!0;constructor(){super(),this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty=`title`,this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}#e(e){return this.layer?.get(e)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){os(this)}#t(e){cs(e,this)}render(){let e=this.layer.getVisible(),t=e?`visible`:``,n=this.currLayerVisibilityBasedOnZoom?``:`zoom-state-invisible`,r=this.#e(`layerControlDisable`)?`disabled`:``,a=this.#e(`layerControlExclusive`)?`radio`:`checkbox`,s=No(this.tools,this.layer)?.length>0,c=Po(this.tools,this.layer)?.length>0,l=document.querySelector(`eox-layercontrol-layer-tools`);return l&&Object.assign(l,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),o`
      <style>
        ${this.#n}
        ${!this.unstyled&&this.#r}
        
        /* Make sure the CSS variable is applied to the layer type icon */
        .small.grey-text {
          display: var(--layer-type-visibility);
        }
      </style>
      ${w(this.layer,()=>o`
          <!-- Render the layer -->
          <nav
            class="layer ${r} ${t} ${n} responsive tiny-space"
          >
            ${w(!this.unstyled,()=>{if(this.#e(`color`))return o`
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

            ${w(c&&!this.toolsAutoExpand,()=>o`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:`dots`}"
                  @click=${()=>{let e=this.renderRoot.querySelector(`eox-layercontrol-layer-tools`);e.open=!e.open}}
                >
                  <i class="small">
                    ${Mo()[this.tools.length>1?`dots`:this.tools[0]]}
                  </i>
                  <!--<span class="tooltip top" style="pointer-events: none">Tools</span>-->
                </button>
              `)}
            ${w(!c&&s,()=>this.tools[0]===`remove`?Io(this,Mo()[this.tools[0]]):Lo(this,Mo()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${r} ${a} icon primary-text action visibility small"
            >
              <input
                type=${a}
                .checked=${Ho(e)}
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
      ${w(c&&!l,()=>o`
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
  `},customElements.define(`eox-layercontrol-layer`,ds)})))()}var ps;function ms(){return(ms=e((()=>{f(),J(),fs(),bs(),ps=class extends l{static properties={group:{attribute:!1},idProperty:{attribute:`id-property`},map:{attribute:!1,state:!0},titleProperty:{attribute:`title-property`,type:String},showLayerZoomState:{attribute:`show-layer-zoom-state`,type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:`tools-auto-expand`,type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.group=null,this.idProperty=`id`,this.map=null,this.titleProperty=`title`,this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){let e=!!this.group?.get(`layerControlExpand`),t=zo(this.group.getLayers())?.length;return o`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#t}
      </style>
      ${w(this.group,()=>o`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${e||i}
            data-children-length=${t}
          >
            <summary class="square">
              ${w(t>0,()=>o`
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
  `},customElements.define(`eox-layercontrol-layer-group`,ps)})))()}var hs,gs;function _s(){return(_s=e((()=>{J(),hs=t(Sn(),1),gs=e=>{let{layers:t,idProperty:n,titleProperty:r,renderRoot:i}=e,a=(0,hs.default)(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent(`changed`,{bubbles:!0}))},50),o=()=>a();if(t&&(t.hasListener(`change:length`)&&t?.un(`change:length`,o),t.on(`change:length`,o),t)){let a=i.querySelector(`ul`);po(t,n,r,e),co(a,t,n,e)}}})))()}function vs(){return(vs=e((()=>{_s()})))()}var ys;function bs(){return(bs=e((()=>{f(),In(),J(),fs(),ms(),vs(),ys=class extends l{static properties={idProperty:{attribute:`id-property`},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:`title-property`,type:String},showLayerZoomState:{attribute:`show-layer-zoom-state`,type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:`tools-auto-expand`,type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.idProperty=`id`,this.layers=null,this.map=null,this.tools=void 0,this.titleProperty=`title`,this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){gs(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){let e=this.layers?zo(this.layers).reverse():[];return o`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#t}
      </style>
      <ul class="list no-space">
        ${w(this.layers,()=>o`
            ${Pn(e,e=>e,e=>o`
                <li
                  data-layer="${e.get(this.idProperty)}"
                  data-type="${vo(e,this.map)}"
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
                            .layerType=${vo(e,this.map)}
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
  `},customElements.define(`eox-layercontrol-layer-list`,ys)})))()}var xs;function Ss(){return(Ss=e((()=>{J(),xs=e=>{let t=e.querySelector(`select[name=optional]`),n=t?t.value:null,r=mo(e.layers.getArray(),`layerControlOptional`,!0).find(t=>(t.get(e.idProperty)||t.ol_uid)===n);r?.set(`layerControlOptional`,!1),r?.setVisible(!0),e.dispatchEvent(new CustomEvent(`changed`,{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll(`eox-layercontrol-layer-list`).forEach(e=>e.requestUpdate()),e.requestUpdate()}})))()}function Cs(){return(Cs=e((()=>{Ss()})))()}var ws;function Ts(){return(Ts=e((()=>{f(),J(),Cs(),ws=class extends l{static properties={idProperty:{attribute:`id-property`},layers:{attribute:!1},titleProperty:{attribute:`title-property`,type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}};constructor(){super(),this.idProperty=`id`,this.layers=null,this.titleProperty=`title`,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#e(){xs(this)}render(){let e=mo(this.layers.getArray(),`layerControlOptional`,!0);return o`
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
    `}},customElements.define(`eox-layercontrol-optional-list`,ws)})))()}var Es;function Ds(){return(Ds=e((()=>{Es=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()}})))()}var Os;function ks(){return(ks=e((()=>{J(),Os=e=>{let t=JSON.parse(`{"data":${Zr(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(t=>{e.eoxMap.addOrUpdateLayer(t)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()}})))()}var As;function js(){return(js=e((()=>{As=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()}})))()}async function Ms(e){let t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if(Jr(t)===`XYZ`)return{Name:t};try{e.wmsCapabilities=await Kr(t)}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}function Ns(){return(Ns=e((()=>{J()})))()}var Ps;function Fs(){return(Fs=e((()=>{J(),Ps=(e,t)=>{let{Name:n}=e,r=Jr(t.urlInput)||`XYZ`,i={type:`Tile`,properties:{id:n,title:n},source:{type:r,url:t.urlInput,params:{LAYERS:n}}};t.jsonInput=JSON.stringify(i)}})))()}var Is;function Ls(){return(Ls=e((()=>{Is=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()}})))()}function Rs(){return(Rs=e((()=>{Ds(),ks(),js(),Ns(),Fs(),Ls()})))()}var zs;function Bs(){return(Bs=e((()=>{f(),fs(),ms(),J(),Rs(),zs=class extends l{static properties={eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}};urlInput=null;jsonInput=null;open=null;searchLoad=!1;wmsCapabilities=null;constructor(){super(),this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#e(e){As(e,this)}async#t(){let e=await Ms(this);e&&this.#n(e)}#n(e){Ps(e,this),Os(this)}#r(){Os(this)}#i(e){Es(e,this)}#a(e){Is(e,this)}render(){let e={add:o`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
      </svg>`},t=this.open?`open`:`close`,n=this.open===`url`,r=this.open===`json`,a=!Yr(this.urlInput)||this.searchLoad?!0:i;return o`
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
                  disabled=${!Qr(this.jsonInput)||i}
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
  `},customElements.define(`eox-layercontrol-add-layers`,zs)})))()}var Vs;function Hs(){return(Hs=e((()=>{Vs=(e,t)=>{t.requestUpdate(),e.target.tagName===`EOX-LAYERCONTROL-LAYER-TOOLS`&&t.renderRoot.querySelector(`eox-layercontrol-optional-list`)?.requestUpdate()}})))()}var Us;function Ws(){return(Ws=e((()=>{Ee(),Us=e=>{let t=Te(e.for);return t&&t.map!==e.map&&(e.map=t.map),t}})))()}var Gs;function Ks(){return(Ks=e((()=>{f(),bs(),Ts(),Bs(),J(),Ws(),Hs(),De(),Ce(),xe(),Gs=class extends l{static properties={for:{type:String},idProperty:{attribute:`id-property`},map:{attribute:!1,state:!0},titleProperty:{attribute:`title-property`,type:String},showLayerZoomState:{attribute:`show-layer-zoom-state`,type:Boolean},tools:{type:Array},addExternalLayers:{attribute:`add-external-layers`,type:Boolean},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:`globally-exclusive-layers`,type:Boolean},toolsAutoExpand:{attribute:`tools-auto-expand`,type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{type:Array}};#e;constructor(){super(),this.for=`eox-map`,this.idProperty=`id`,this.map=null,this.titleProperty=`title`,this.showLayerZoomState=!1,this.tools=[`info`,`opacity`,`datetime`,`config`,`remove`,`sort`],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride=``,this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.toolsAutoExpand=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){this.eoxMap=Us(this)}updated(e){e.has(`for`)&&(this.eoxMap=Us(this))}get eoxMap(){return this.#e}set eoxMap(e){let t=this.#e;this.#e=e,this.requestUpdate(`eoxMap`,t)}#t(e){Vs(e,this),this.dispatchEvent(new CustomEvent(`layerchange`,{detail:e.detail}))}#n(e){this.dispatchEvent(new CustomEvent(`layerConfig:change`,{detail:e.detail}))}render(){let e=this.map?.getLayers().getArray(),t=e&&mo(e,`layerControlOptional`,!0)?.length>0;return o`
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
      ${w(this.addExternalLayers&&this.#e?.addOrUpdateLayer,()=>o`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${this.#e}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${w(this.map,()=>o`
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
            @datetime:updated=${e=>Vo(e,this)}
            @layerConfig:change=${this.#n}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${w(t,()=>o`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}#r=`
    ${Se}
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
  `},customElements.define(`eox-layercontrol`,Gs)})))()}function qs(e){let t=Ys[e];if(t)return t;t=Ys[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);t.push(n)}for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t[r]=`%`+(`0`+r.toString(16).toUpperCase()).slice(-2)}return t}function Js(e,t){typeof t!=`string`&&(t=Js.defaultChars);let n=qs(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(e){let t=``;for(let r=0,i=e.length;r<i;r+=3){let a=parseInt(e.slice(r+1,r+3),16);if(a<128){t+=n[a];continue}if((a&224)==192&&r+3<i){let n=parseInt(e.slice(r+4,r+6),16);if((n&192)==128){let e=a<<6&1984|n&63;t+=e<128?`��`:String.fromCharCode(e),r+=3;continue}}if((a&240)==224&&r+6<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16);if((n&192)==128&&(i&192)==128){let e=a<<12&61440|n<<6&4032|i&63;t+=e<2048||e>=55296&&e<=57343?`���`:String.fromCharCode(e),r+=6;continue}}if((a&248)==240&&r+9<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),o=parseInt(e.slice(r+10,r+12),16);if((n&192)==128&&(i&192)==128&&(o&192)==128){let e=a<<18&1835008|n<<12&258048|i<<6&4032|o&63;e<65536||e>1114111?t+=`����`:(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(e&1023))),r+=9;continue}}t+=`�`}return t})}var Ys;function Xs(){return(Xs=e((()=>{Ys={},Js.defaultChars=`;/?:@&=+$,#`,Js.componentChars=``})))()}function Zs(e){let t=$s[e];if(t)return t;t=$s[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);/^[0-9a-z]$/i.test(n)?t.push(n):t.push(`%`+(`0`+e.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function Qs(e,t,n){typeof t!=`string`&&(n=t,t=Qs.defaultChars),n===void 0&&(n=!0);let r=Zs(t),i=``;for(let t=0,a=e.length;t<a;t++){let o=e.charCodeAt(t);if(n&&o===37&&t+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(t+1,t+3))){i+=e.slice(t,t+3),t+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&t+1<a){let n=e.charCodeAt(t+1);if(n>=56320&&n<=57343){i+=encodeURIComponent(e[t]+e[t+1]),t++;continue}}i+=`%EF%BF%BD`;continue}i+=encodeURIComponent(e[t])}return i}var $s;function ec(){return(ec=e((()=>{$s={},Qs.defaultChars=`;/?:@&=+$,-_.!~*'()#`,Qs.componentChars=`-_.!~*'()`})))()}function tc(e){let t=``;return t+=e.protocol||``,t+=e.slashes?`//`:``,t+=e.auth?e.auth+`@`:``,e.hostname&&e.hostname.indexOf(`:`)!==-1?t+=`[`+e.hostname+`]`:t+=e.hostname||``,t+=e.port?`:`+e.port:``,t+=e.pathname||``,t+=e.search||``,t+=e.hash||``,t}function nc(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}function rc(e,t){if(e&&e instanceof nc)return e;let n=new nc;return n.parse(e,t),n}var ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc;function gc(){return(gc=e((()=>{ic=/^([a-z0-9.+-]+:)/i,ac=/:[0-9]*$/,oc=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,sc=[`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],cc=[`'`].concat(sc),lc=[`%`,`/`,`?`,`;`,`#`].concat(cc),uc=[`/`,`?`,`#`],dc=255,fc=/^[+a-z0-9A-Z_-]{0,63}$/,pc=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,mc={javascript:!0,"javascript:":!0},hc={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},nc.prototype.parse=function(e,t){let n,r,i,a=e;if(a=a.trim(),!t&&e.split(`#`).length===1){let e=oc.exec(a);if(e)return this.pathname=e[1],e[2]&&(this.search=e[2]),this}let o=ic.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)===`//`,i&&!(o&&mc[o])&&(a=a.substr(2),this.slashes=!0)),!mc[o]&&(i||o&&!hc[o])){let e=-1;for(let t=0;t<uc.length;t++)r=a.indexOf(uc[t]),r!==-1&&(e===-1||r<e)&&(e=r);let t,n;n=e===-1?a.lastIndexOf(`@`):a.lastIndexOf(`@`,e),n!==-1&&(t=a.slice(0,n),a=a.slice(n+1),this.auth=t),e=-1;for(let t=0;t<lc.length;t++)r=a.indexOf(lc[t]),r!==-1&&(e===-1||r<e)&&(e=r);e===-1&&(e=a.length),a[e-1]===`:`&&e--;let i=a.slice(0,e);a=a.slice(e),this.parseHost(i),this.hostname=this.hostname||``;let o=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!o){let e=this.hostname.split(/\./);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n&&!n.match(fc)){let r=``;for(let e=0,t=n.length;e<t;e++)n.charCodeAt(e)>127?r+=`x`:r+=n[e];if(!r.match(fc)){let r=e.slice(0,t),i=e.slice(t+1),o=n.match(pc);o&&(r.push(o[1]),i.unshift(o[2])),i.length&&(a=i.join(`.`)+a),this.hostname=r.join(`.`);break}}}}this.hostname.length>dc&&(this.hostname=``),o&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let s=a.indexOf(`#`);s!==-1&&(this.hash=a.substr(s),a=a.slice(0,s));let c=a.indexOf(`?`);return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),hc[n]&&this.hostname&&!this.pathname&&(this.pathname=``),this},nc.prototype.parseHost=function(e){let t=ac.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}})))()}var _c=n({decode:()=>Js,encode:()=>Qs,format:()=>tc,parse:()=>rc});function vc(){return(vc=e((()=>{Xs(),ec(),gc()})))()}var yc;function bc(){return(bc=e((()=>{yc=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/})))()}var xc;function Sc(){return(Sc=e((()=>{xc=/[\0-\x1F\x7F-\x9F]/})))()}var Cc;function wc(){return(wc=e((()=>{Cc=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/})))()}var Tc;function Ec(){return(Ec=e((()=>{Tc=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/})))()}var Dc;function Oc(){return(Oc=e((()=>{Dc=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/})))()}var kc;function Ac(){return(Ac=e((()=>{kc=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/})))()}var jc=n({Any:()=>yc,Cc:()=>xc,Cf:()=>Cc,P:()=>Tc,S:()=>Dc,Z:()=>kc});function Mc(){return(Mc=e((()=>{bc(),Sc(),wc(),Ec(),Oc(),Ac()})))()}var Nc;function Pc(){return(Pc=e((()=>{Nc=new Uint16Array(`ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌`.split(``).map(e=>e.charCodeAt(0)))})))()}var Fc;function Ic(){return(Ic=e((()=>{Fc=new Uint16Array(`Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢`.split(``).map(e=>e.charCodeAt(0)))})))()}function Lc(e){return e>=55296&&e<=57343||e>1114111?65533:Rc.get(e)??e}var Rc,zc;function Bc(){return(Bc=e((()=>{Rc=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),zc=String.fromCodePoint??function(e){let t=``;return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t}})))()}function Vc(e){return e>=Y.ZERO&&e<=Y.NINE}function Hc(e){return e>=Y.UPPER_A&&e<=Y.UPPER_F||e>=Y.LOWER_A&&e<=Y.LOWER_F}function Uc(e){return e>=Y.UPPER_A&&e<=Y.UPPER_Z||e>=Y.LOWER_A&&e<=Y.LOWER_Z||Vc(e)}function Wc(e){return e===Y.EQUALS||Uc(e)}function Gc(e){let t=``,n=new Qc(e,e=>t+=zc(e));return function(e,r){let i=0,a=0;for(;(a=e.indexOf(`&`,a))>=0;){t+=e.slice(i,a),n.startEntity(r);let o=n.write(e,a+1);if(o<0){i=a+n.end();break}i=a+o,a=o===0?i+1:i}let o=t+e.slice(i);return t=``,o}}function Kc(e,t,n,r){let i=(t&Xc.BRANCH_LENGTH)>>7,a=t&Xc.JUMP_TABLE;if(i===0)return a!==0&&r===a?n:-1;if(a){let t=r-a;return t<0||t>=i?-1:e[n+t]-1}let o=n,s=o+i-1;for(;o<=s;){let t=o+s>>>1,n=e[t];if(n<r)o=t+1;else if(n>r)s=t-1;else return e[t+i]}return-1}function qc(e,t=Zc.Legacy){return $c(e,t)}function Jc(e){return $c(e,Zc.Strict)}var Y,Yc,Xc,X,Zc,Qc,$c;function el(){return(el=e((()=>{Pc(),Ic(),Bc(),(function(e){e[e.NUM=35]=`NUM`,e[e.SEMI=59]=`SEMI`,e[e.EQUALS=61]=`EQUALS`,e[e.ZERO=48]=`ZERO`,e[e.NINE=57]=`NINE`,e[e.LOWER_A=97]=`LOWER_A`,e[e.LOWER_F=102]=`LOWER_F`,e[e.LOWER_X=120]=`LOWER_X`,e[e.LOWER_Z=122]=`LOWER_Z`,e[e.UPPER_A=65]=`UPPER_A`,e[e.UPPER_F=70]=`UPPER_F`,e[e.UPPER_Z=90]=`UPPER_Z`})(Y||={}),Yc=32,(function(e){e[e.VALUE_LENGTH=49152]=`VALUE_LENGTH`,e[e.BRANCH_LENGTH=16256]=`BRANCH_LENGTH`,e[e.JUMP_TABLE=127]=`JUMP_TABLE`})(Xc||={}),(function(e){e[e.EntityStart=0]=`EntityStart`,e[e.NumericStart=1]=`NumericStart`,e[e.NumericDecimal=2]=`NumericDecimal`,e[e.NumericHex=3]=`NumericHex`,e[e.NamedEntity=4]=`NamedEntity`})(X||={}),(function(e){e[e.Legacy=0]=`Legacy`,e[e.Strict=1]=`Strict`,e[e.Attribute=2]=`Attribute`})(Zc||={}),Qc=class{constructor(e,t,n){this.decodeTree=e,this.emitCodePoint=t,this.errors=n,this.state=X.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Zc.Strict}startEntity(e){this.decodeMode=e,this.state=X.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case X.EntityStart:return e.charCodeAt(t)===Y.NUM?(this.state=X.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=X.NamedEntity,this.stateNamedEntity(e,t));case X.NumericStart:return this.stateNumericStart(e,t);case X.NumericDecimal:return this.stateNumericDecimal(e,t);case X.NumericHex:return this.stateNumericHex(e,t);case X.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|Yc)===Y.LOWER_X?(this.state=X.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=X.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,n,r){if(t!==n){let i=n-t;this.result=this.result*r**+i+parseInt(e.substr(t,i),r),this.consumed+=i}}stateNumericHex(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(Vc(r)||Hc(r))t+=1;else return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,n,t,16),-1}stateNumericDecimal(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(Vc(r))t+=1;else return this.addToNumericResult(e,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,n,t,10),-1}emitNumericEntity(e,t){var n;if(this.consumed<=t)return(n=this.errors)==null||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===Y.SEMI)this.consumed+=1;else if(this.decodeMode===Zc.Strict)return 0;return this.emitCodePoint(Lc(this.result),this.consumed),this.errors&&(e!==Y.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){let{decodeTree:n}=this,r=n[this.treeIndex],i=(r&Xc.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){let a=e.charCodeAt(t);if(this.treeIndex=Kc(n,r,this.treeIndex+Math.max(1,i),a),this.treeIndex<0)return this.result===0||this.decodeMode===Zc.Attribute&&(i===0||Wc(a))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&Xc.VALUE_LENGTH)>>14,i!==0){if(a===Y.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==Zc.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;let{result:t,decodeTree:n}=this,r=(n[t]&Xc.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(e=this.errors)==null||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,n){let{decodeTree:r}=this;return this.emitCodePoint(t===1?r[e]&~Xc.VALUE_LENGTH:r[e+1],n),t===3&&this.emitCodePoint(r[e+2],n),n}end(){var e;switch(this.state){case X.NamedEntity:return this.result!==0&&(this.decodeMode!==Zc.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case X.NumericDecimal:return this.emitNumericEntity(0,2);case X.NumericHex:return this.emitNumericEntity(0,3);case X.NumericStart:return(e=this.errors)==null||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case X.EntityStart:return 0}}},$c=Gc(Nc),Gc(Fc)})))()}var tl=n({arrayReplaceAt:()=>ol,asciiTrim:()=>xl,assign:()=>al,escapeHtml:()=>pl,escapeRE:()=>ml,fromCodePoint:()=>cl,has:()=>il,isMdAsciiPunct:()=>vl,isPunctChar:()=>gl,isPunctCharCode:()=>_l,isSpace:()=>Z,isString:()=>rl,isValidEntityCode:()=>sl,isWhiteSpace:()=>hl,lib:()=>Al,normalizeReference:()=>yl,unescapeAll:()=>dl,unescapeMd:()=>ul});function nl(e){return Object.prototype.toString.call(e)}function rl(e){return nl(e)===`[object String]`}function il(e,t){return Sl.call(e,t)}function al(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!=`object`)throw TypeError(t+`must be object`);Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function ol(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function sl(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)==65535||(e&65535)==65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function cl(e){if(e>65535){e-=65536;let t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}function ll(e,t){if(t.charCodeAt(0)===35&&Tl.test(t)){let n=t[1].toLowerCase()===`x`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return sl(n)?cl(n):e}let n=qc(e);return n===e?e:n}function ul(e){return e.indexOf(`\\`)<0?e:e.replace(Cl,`$1`)}function dl(e){return e.indexOf(`\\`)<0&&e.indexOf(`&`)<0?e:e.replace(wl,function(e,t,n){return t||ll(e,n)})}function fl(e){return Ol[e]}function pl(e){return El.test(e)?e.replace(Dl,fl):e}function ml(e){return e.replace(kl,`\\$&`)}function Z(e){switch(e){case 9:case 32:return!0}return!1}function hl(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function gl(e){return Tc.test(e)||Dc.test(e)}function _l(e){return gl(cl(e))}function vl(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function yl(e){return e=e.trim().replace(/\s+/g,` `),e.toLowerCase().toUpperCase()}function bl(e){return e===32||e===9||e===10||e===13}function xl(e){let t=0;for(;t<e.length&&bl(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&bl(e.charCodeAt(n));n--);return e.slice(t,n+1)}var Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al;function Q(){return(Q=e((()=>{vc(),Mc(),el(),Sl=Object.prototype.hasOwnProperty,Cl=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,wl=RegExp(Cl.source+`|&([a-z#][a-z0-9]{1,31});`,`gi`),Tl=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i,El=/[&<>"]/,Dl=/[&<>"]/g,Ol={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`},kl=/[.?*+^$[\]\\(){}|-]/g,Al={mdurl:_c,ucmicro:jc}})))()}function jl(e,t,n){let r,i,a,o,s=e.posMax,c=e.pos;for(e.pos=t+1,r=1;e.pos<s;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(n)return e.pos=c,-1}}let l=-1;return i&&(l=e.pos),e.pos=c,l}function Ml(e,t,n){let r,i=t,a={ok:!1,pos:0,str:``};if(e.charCodeAt(i)===60){for(i++;i<n;){if(r=e.charCodeAt(i),r===10||r===60)return a;if(r===62)return a.pos=i+1,a.str=dl(e.slice(t+1,i)),a.ok=!0,a;if(r===92&&i+1<n){i+=2;continue}i++}return a}let o=0;for(;i<n&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<n){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(o++,o>32))return a;if(r===41){if(o===0)break;o--}i++}return t===i||o!==0?a:(a.str=dl(e.slice(t,i)),a.pos=i,a.ok=!0,a)}function Nl(){return(Nl=e((()=>{Q()})))()}function Pl(e,t,n,r){let i,a=t,o={ok:!1,can_continue:!1,pos:0,str:``,marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(a>=n)return o;let r=e.charCodeAt(a);if(r!==34&&r!==39&&r!==40)return o;t++,a++,r===40&&(r=41),o.marker=r}for(;a<n;){if(i=e.charCodeAt(a),i===o.marker)return o.pos=a+1,o.str+=dl(e.slice(t,a)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&a+1<n&&a++,a++}return o.can_continue=!0,o.str+=dl(e.slice(t,a)),o}function Fl(){return(Fl=e((()=>{Q()})))()}var Il=n({parseLinkDestination:()=>Ml,parseLinkLabel:()=>jl,parseLinkTitle:()=>Pl});function Ll(){return(Ll=e((()=>{Nl(),Fl()})))()}function Rl(){this.rules=al({},zl)}var zl;function Bl(){return(Bl=e((()=>{Q(),zl={},zl.code_inline=function(e,t,n,r,i){let a=e[t];return`<code`+i.renderAttrs(a)+`>`+pl(a.content)+`</code>`},zl.code_block=function(e,t,n,r,i){let a=e[t];return`<pre`+i.renderAttrs(a)+`><code>`+pl(e[t].content)+`</code></pre>
`},zl.fence=function(e,t,n,r,i){let a=e[t],o=a.info?dl(a.info).trim():``,s=``,c=``;if(o){let e=o.split(/(\s+)/g);s=e[0],c=e.slice(2).join(``)}let l;if(l=n.highlight&&n.highlight(a.content,s,c)||pl(a.content),l.indexOf(`<pre`)===0)return l+`
`;if(o){let e=a.attrIndex(`class`),t=a.attrs?a.attrs.slice():[];e<0?t.push([`class`,n.langPrefix+s]):(t[e]=t[e].slice(),t[e][1]+=` `+n.langPrefix+s);let r={attrs:t};return`<pre><code${i.renderAttrs(r)}>${l}</code></pre>\n`}return`<pre><code${i.renderAttrs(a)}>${l}</code></pre>\n`},zl.image=function(e,t,n,r,i){let a=e[t];return a.attrs[a.attrIndex(`alt`)][1]=i.renderInlineAsText(a.children,n,r),i.renderToken(e,t,n)},zl.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},zl.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},zl.text=function(e,t){return pl(e[t].content)},zl.html_block=function(e,t){return e[t].content},zl.html_inline=function(e,t){return e[t].content},Rl.prototype.renderAttrs=function(e){let t,n,r;if(!e.attrs)return``;for(r=``,t=0,n=e.attrs.length;t<n;t++)r+=` `+pl(e.attrs[t][0])+`="`+pl(e.attrs[t][1])+`"`;return r},Rl.prototype.renderToken=function(e,t,n){let r=e[t],i=``;if(r.hidden)return``;r.block&&r.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?`</`:`<`)+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=` /`);let a=!1;if(r.block&&(a=!0,r.nesting===1&&t+1<e.length)){let n=e[t+1];(n.type===`inline`||n.hidden||n.nesting===-1&&n.tag===r.tag)&&(a=!1)}return i+=a?`>
`:`>`,i},Rl.prototype.renderInline=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;i[o]===void 0?r+=this.renderToken(e,a,t):r+=i[o](e,a,t,n,this)}return r},Rl.prototype.renderInlineAsText=function(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)switch(e[i].type){case`text`:r+=e[i].content;break;case`image`:r+=this.renderInlineAsText(e[i].children,t,n);break;case`html_inline`:case`html_block`:r+=e[i].content;break;case`softbreak`:case`hardbreak`:r+=`
`}return r},Rl.prototype.render=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;o===`inline`?r+=this.renderInline(e[a].children,t,n):i[o]===void 0?r+=this.renderToken(e,a,t,n):r+=i[o](e,a,t,n,this)}return r}})))()}function $(){this.__rules__=[],this.__cache__=null}function Vl(){return(Vl=e((()=>{$.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},$.prototype.__compile__=function(){let e=this,t=[``];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},$.prototype.at=function(e,t,n){let r=this.__find__(e),i=n||{};if(r===-1)throw Error(`Parser rule not found: `+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null},$.prototype.before=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},$.prototype.after=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},$.prototype.push=function(e,t,n){let r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},$.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!0,n.push(e)},this),this.__cache__=null,n},$.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,t)},$.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!1,n.push(e)},this),this.__cache__=null,n},$.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]}})))()}function Hl(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content=``,this.markup=``,this.info=``,this.meta=null,this.block=!1,this.hidden=!1}function Ul(){return(Ul=e((()=>{Hl.prototype.attrIndex=function(e){if(!this.attrs)return-1;let t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===e)return n;return-1},Hl.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},Hl.prototype.attrSet=function(e,t){let n=this.attrIndex(e),r=[e,t];n<0?this.attrPush(r):this.attrs[n]=r},Hl.prototype.attrGet=function(e){let t=this.attrIndex(e),n=null;return t>=0&&(n=this.attrs[t][1]),n},Hl.prototype.attrJoin=function(e,t){let n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+` `+t}})))()}function Wl(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}function Gl(){return(Gl=e((()=>{Ul(),Wl.prototype.Token=Hl})))()}function Kl(e){let t;t=e.src.replace(ql,`
`),t=t.replace(Jl,`�`),e.src=t}var ql,Jl;function Yl(){return(Yl=e((()=>{ql=/\r\n?|\n/g,Jl=/\0/g})))()}function Xl(e){let t;e.inlineMode?(t=new e.Token(`inline`,``,0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Zl(e){let t=e.tokens;for(let n=0,r=t.length;n<r;n++){let r=t[n];r.type===`inline`&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function Ql(e){return/^<a[>\s]/i.test(e)}function $l(e){return/^<\/a\s*>/i.test(e)}function eu(e){let t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!==`inline`||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,i=0;for(let a=r.length-1;a>=0;a--){let o=r[a];if(o.type===`link_close`){for(a--;r[a].level!==o.level&&r[a].type!==`link_open`;)a--;continue}if(o.type===`html_inline`&&(Ql(o.content)&&i>0&&i--,$l(o.content)&&i++),!(i>0)&&o.type===`text`&&e.md.linkify.test(o.content)){let i=o.content,s=e.md.linkify.match(i),c=[],l=o.level,u=0;s.length>0&&s[0].index===0&&a>0&&r[a-1].type===`text_special`&&(s=s.slice(1));for(let t=0;t<s.length;t++){let n=s[t].url,r=e.md.normalizeLink(n);if(!e.md.validateLink(r))continue;let a=s[t].text;a=s[t].schema?s[t].schema===`mailto:`&&!/^mailto:/i.test(a)?e.md.normalizeLinkText(`mailto:`+a).replace(/^mailto:/,``):e.md.normalizeLinkText(a):e.md.normalizeLinkText(`http://`+a).replace(/^http:\/\//,``);let o=s[t].index;if(o>u){let t=new e.Token(`text`,``,0);t.content=i.slice(u,o),t.level=l,c.push(t)}let d=new e.Token(`link_open`,`a`,1);d.attrs=[[`href`,r]],d.level=l++,d.markup=`linkify`,d.info=`auto`,c.push(d);let f=new e.Token(`text`,``,0);f.content=a,f.level=l,c.push(f);let p=new e.Token(`link_close`,`a`,-1);p.level=--l,p.markup=`linkify`,p.info=`auto`,c.push(p),u=s[t].lastIndex}if(u<i.length){let t=new e.Token(`text`,``,0);t.content=i.slice(u),t.level=l,c.push(t)}t[n].children=r=ol(r,a,c)}}}}function tu(){return(tu=e((()=>{Q()})))()}function nu(e,t){return lu[t.toLowerCase()]}function ru(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&(r.content=r.content.replace(cu,nu)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function iu(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&ou.test(r.content)&&(r.content=r.content.replace(/\+-/g,`±`).replace(/\.{2,}/g,`…`).replace(/([?!])…/g,`$1..`).replace(/([?!]){4,}/g,`$1$1$1`).replace(/,{2,}/g,`,`).replace(/(^|[^-])---(?=[^-]|$)/gm,`$1—`).replace(/(^|\s)--(?=\s|$)/gm,`$1–`).replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,`$1–`)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function au(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&(su.test(e.tokens[t].content)&&ru(e.tokens[t].children),ou.test(e.tokens[t].content)&&iu(e.tokens[t].children))}var ou,su,cu,lu;function uu(){return(uu=e((()=>{ou=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,su=/\((c|tm|r)\)/i,cu=/\((c|tm|r)\)/gi,lu={c:`©`,r:`®`,tm:`™`}})))()}function du(e,t,n,r){e[t]||(e[t]=[]),e[t].push({pos:n,ch:r})}function fu(e,t){let n=``,r=0;t.sort((e,t)=>e.pos-t.pos);for(let i=0;i<t.length;i++){let a=t[i];n+=e.slice(r,a.pos)+a.ch,r=a.pos+1}return n+e.slice(r)}function pu(e,t){let n,r=[],i={};for(let a=0;a<e.length;a++){let o=e[a],s=e[a].level;for(n=r.length-1;n>=0&&!(r[n].level<=s);n--);if(r.length=n+1,o.type!==`text`)continue;let c=o.content,l=0,u=c.length;OUTER:for(;l<u;){gu.lastIndex=l;let o=gu.exec(c);if(!o)break;let d=!0,f=!0;l=o.index+1;let p=o[0]===`'`,m=32;if(o.index-1>=0)m=c.charCodeAt(o.index-1);else for(n=a-1;n>=0&&e[n].type!==`softbreak`&&e[n].type!==`hardbreak`;n--)if(e[n].content){m=e[n].content.charCodeAt(e[n].content.length-1);break}let h=32;if(l<u)h=c.charCodeAt(l);else for(n=a+1;n<e.length&&e[n].type!==`softbreak`&&e[n].type!==`hardbreak`;n++)if(e[n].content){h=e[n].content.charCodeAt(0);break}let g=vl(m)||_l(m),_=vl(h)||_l(h),v=hl(m),y=hl(h);if(y?d=!1:_&&(v||g||(d=!1)),v?f=!1:g&&(y||_||(f=!1)),h===34&&o[0]===`"`&&m>=48&&m<=57&&(f=d=!1),d&&f&&(d=g,f=_),!d&&!f){p&&du(i,a,o.index,_u);continue}if(f)for(n=r.length-1;n>=0;n--){let e=r[n];if(r[n].level<s)break;if(e.single===p&&r[n].level===s){e=r[n];let s,c;p?(s=t.md.options.quotes[2],c=t.md.options.quotes[3]):(s=t.md.options.quotes[0],c=t.md.options.quotes[1]),du(i,a,o.index,c),du(i,e.token,e.pos,s),r.length=n;continue OUTER}}d?r.push({token:a,pos:o.index,single:p,level:s}):f&&p&&du(i,a,o.index,_u)}}Object.keys(i).forEach(function(t){e[t].content=fu(e[t].content,i[t])})}function mu(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!==`inline`||!hu.test(e.tokens[t].content)||pu(e.tokens[t].children,e)}var hu,gu,_u;function vu(){return(vu=e((()=>{Q(),hu=/['"]/,gu=/['"]/g,_u=`’`})))()}function yu(e){let t,n,r=e.tokens,i=r.length;for(let e=0;e<i;e++){if(r[e].type!==`inline`)continue;let i=r[e].children,a=i.length;for(t=0;t<a;t++)i[t].type===`text_special`&&(i[t].type=`text`);for(t=n=0;t<a;t++)i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}}function bu(){this.ruler=new $;for(let e=0;e<xu.length;e++)this.ruler.push(xu[e][0],xu[e][1])}var xu;function Su(){return(Su=e((()=>{Vl(),Gl(),Yl(),tu(),uu(),vu(),xu=[[`normalize`,Kl],[`block`,Xl],[`inline`,Zl],[`linkify`,eu],[`replacements`,au],[`smartquotes`,mu],[`text_join`,yu]],bu.prototype.process=function(e){let t=this.ruler.getRules(``);for(let n=0,r=t.length;n<r;n++)t[n](e)},bu.prototype.State=Wl})))()}function Cu(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType=`root`,this.level=0;let i=this.src;for(let e=0,t=0,n=0,r=0,a=i.length,o=!1;t<a;t++){let s=i.charCodeAt(t);if(!o){if(Z(s)){n++,s===9?r+=4-r%4:r++;continue}o=!0}(s===10||t===a-1)&&(s!==10&&t++,this.bMarks.push(e),this.eMarks.push(t),this.tShift.push(n),this.sCount.push(r),this.bsCount.push(0),o=!1,n=0,r=0,e=t+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}function wu(){return(wu=e((()=>{Ul(),Q(),Cu.prototype.push=function(e,t,n){let r=new Hl(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r},Cu.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},Cu.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},Cu.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t&&Z(this.src.charCodeAt(e));e++);return e},Cu.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!Z(this.src.charCodeAt(--e)))return e+1;return e},Cu.prototype.skipChars=function(e,t){for(let n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},Cu.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e;for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1;return e},Cu.prototype.getLines=function(e,t,n,r){if(e>=t)return``;let i=Array(t-e);for(let a=0,o=e;o<t;o++,a++){let e=0,s=this.bMarks[o],c=s,l;for(l=o+1<t||r?this.eMarks[o]+1:this.eMarks[o];c<l&&e<n;){let t=this.src.charCodeAt(c);if(Z(t))t===9?e+=4-(e+this.bsCount[o])%4:e++;else if(c-s<this.tShift[o])e++;else break;c++}e>n?i[a]=Array(e-n+1).join(` `)+this.src.slice(c,l):i[a]=this.src.slice(c,l)}return i.join(``)},Cu.prototype.Token=Hl})))()}function Tu(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function Eu(e){let t=[],n=e.length,r=0,i=e.charCodeAt(r),a=!1,o=0,s=``;for(;r<n;)i===124&&(a?(s+=e.substring(o,r-1),o=r):(t.push(s+e.substring(o,r)),s=``,o=r+1)),a=i===92,r++,i=e.charCodeAt(r);return t.push(s+e.substring(o)),t}function Du(e,t,n,r){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let a=e.bMarks[i]+e.tShift[i];if(a>=e.eMarks[i])return!1;let o=e.src.charCodeAt(a++);if(o!==124&&o!==45&&o!==58||a>=e.eMarks[i])return!1;let s=e.src.charCodeAt(a++);if(s!==124&&s!==45&&s!==58&&!Z(s)||o===45&&Z(s))return!1;for(;a<e.eMarks[i];){let t=e.src.charCodeAt(a);if(t!==124&&t!==45&&t!==58&&!Z(t))return!1;a++}let c=Tu(e,t+1),l=c.split(`|`),u=[];for(let e=0;e<l.length;e++){let t=l[e].trim();if(!t){if(e===0||e===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(t))return!1;t.charCodeAt(t.length-1)===58?u.push(t.charCodeAt(0)===58?`center`:`right`):t.charCodeAt(0)===58?u.push(`left`):u.push(``)}if(c=Tu(e,t).trim(),c.indexOf(`|`)===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=Eu(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop();let d=l.length;if(d===0||d!==u.length)return!1;if(r)return!0;let f=e.parentType;e.parentType=`table`;let p=e.md.block.ruler.getRules(`blockquote`),m=e.push(`table_open`,`table`,1),h=[t,0];m.map=h;let g=e.push(`thead_open`,`thead`,1);g.map=[t,t+1];let _=e.push(`tr_open`,`tr`,1);_.map=[t,t+1];for(let t=0;t<l.length;t++){let n=e.push(`th_open`,`th`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t].trim(),r.children=[],e.push(`th_close`,`th`,-1)}e.push(`tr_close`,`tr`,-1),e.push(`thead_close`,`thead`,-1);let v,y=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let r=!1;for(let t=0,a=p.length;t<a;t++)if(p[t](e,i,n,!0)){r=!0;break}if(r||(c=Tu(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(l=Eu(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop(),y+=d-l.length,y>Ou))break;if(i===t+2){let n=e.push(`tbody_open`,`tbody`,1);n.map=v=[t+2,0]}let a=e.push(`tr_open`,`tr`,1);a.map=[i,i+1];for(let t=0;t<d;t++){let n=e.push(`td_open`,`td`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t]?l[t].trim():``,r.children=[],e.push(`td_close`,`td`,-1)}e.push(`tr_close`,`tr`,-1)}return v&&(e.push(`tbody_close`,`tbody`,-1),v[1]=i),e.push(`table_close`,`table`,-1),h[1]=i,e.parentType=f,e.line=i,!0}var Ou;function ku(){return(ku=e((()=>{Q(),Ou=65536})))()}function Au(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;let a=e.push(`code_block`,`code`,0);return a.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0}function ju(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>a)return!1;let o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let c=i-s;if(c<3)return!1;let l=e.src.slice(s,i),u=e.src.slice(i,a);if(o===96&&u.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let d=t,f=!1;for(;d++,!(d>=n||(i=s=e.bMarks[d]+e.tShift[d],a=e.eMarks[d],i<a&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<c)&&(i=e.skipSpaces(i),!(i<a)))){f=!0;break}c=e.sCount[t],e.line=d+ +!!f;let p=e.push(`fence`,`code`,0);return p.info=u,p.content=e.getLines(t+1,d,c,!0),p.markup=l,p.map=[t,e.line],!0}function Mu(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;let s=[],c=[],l=[],u=[],d=e.md.block.ruler.getRules(`blockquote`),f=e.parentType;e.parentType=`blockquote`;let p=!1,m;for(m=t;m<n;m++){let t=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],a=e.eMarks[m],i>=a)break;if(e.src.charCodeAt(i++)===62&&!t){let t=e.sCount[m]+1,n,r;e.src.charCodeAt(i)===32?(i++,t++,r=!1,n=!0):e.src.charCodeAt(i)===9?(n=!0,(e.bsCount[m]+t)%4==3?(i++,t++,r=!1):r=!0):n=!1;let o=t;for(s.push(e.bMarks[m]),e.bMarks[m]=i;i<a;){let t=e.src.charCodeAt(i);if(Z(t))t===9?o+=4-(o+e.bsCount[m]+ +!!r)%4:o++;else break;i++}p=i>=a,c.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+ +!!n,l.push(e.sCount[m]),e.sCount[m]=o-t,u.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let r=!1;for(let t=0,i=d.length;t<i;t++)if(d[t](e,m,n,!0)){r=!0;break}if(r){e.lineMax=m,e.blkIndent!==0&&(s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]=-1}let h=e.blkIndent;e.blkIndent=0;let g=e.push(`blockquote_open`,`blockquote`,1);g.markup=`>`;let _=[t,0];g.map=_,e.md.block.tokenize(e,t,m);let v=e.push(`blockquote_close`,`blockquote`,-1);v.markup=`>`,e.lineMax=o,e.parentType=f,_[1]=e.line;for(let n=0;n<u.length;n++)e.bMarks[n+t]=s[n],e.tShift[n+t]=u[n],e.sCount[n+t]=l[n],e.bsCount[n+t]=c[n];return e.blkIndent=h,!0}function Nu(){return(Nu=e((()=>{Q()})))()}function Pu(e,t,n,r){let i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.bMarks[t]+e.tShift[t],o=e.src.charCodeAt(a++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;a<i;){let t=e.src.charCodeAt(a++);if(t!==o&&!Z(t))return!1;t===o&&s++}if(s<3)return!1;if(r)return!0;e.line=t+1;let c=e.push(`hr`,`hr`,0);return c.map=[t,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function Fu(){return(Fu=e((()=>{Q()})))()}function Iu(e,t){let n=e.eMarks[t],r=e.bMarks[t]+e.tShift[t],i=e.src.charCodeAt(r++);return i!==42&&i!==45&&i!==43||r<n&&!Z(e.src.charCodeAt(r))?-1:r}function Lu(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],i=n;if(i+1>=r)return-1;let a=e.src.charCodeAt(i++);if(a<48||a>57)return-1;for(;;){if(i>=r)return-1;if(a=e.src.charCodeAt(i++),a>=48&&a<=57){if(i-n>=10)return-1;continue}if(a===41||a===46)break;return-1}return i<r&&(a=e.src.charCodeAt(i),!Z(a))?-1:i}function Ru(e,t){let n=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===n&&e.tokens[r].type===`paragraph_open`&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function zu(e,t,n,r){let i,a,o,s,c=t,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let u=!1;r&&e.parentType===`paragraph`&&e.sCount[c]>=e.blkIndent&&(u=!0);let d,f,p;if((p=Lu(e,c))>=0){if(d=!0,o=e.bMarks[c]+e.tShift[c],f=Number(e.src.slice(o,p-1)),u&&f!==1)return!1}else if((p=Iu(e,c))>=0)d=!1;else return!1;if(u&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(r)return!0;let m=e.src.charCodeAt(p-1),h=e.tokens.length;d?(s=e.push(`ordered_list_open`,`ol`,1),f!==1&&(s.attrs=[[`start`,f]])):s=e.push(`bullet_list_open`,`ul`,1);let g=[c,0];s.map=g,s.markup=String.fromCharCode(m);let _=!1,v=e.md.block.ruler.getRules(`list`),y=e.parentType;for(e.parentType=`list`;c<n;){a=p,i=e.eMarks[c];let t=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]),r=t;for(;a<i;){let t=e.src.charCodeAt(a);if(t===9)r+=4-(r+e.bsCount[c])%4;else if(t===32)r++;else break;a++}let u=a,f;f=u>=i?1:r-t,f>4&&(f=1);let h=t+f;s=e.push(`list_item_open`,`li`,1),s.markup=String.fromCharCode(m);let g=[c,0];s.map=g,d&&(s.info=e.src.slice(o,p-1));let y=e.tight,ee=e.tShift[c],b=e.sCount[c],x=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=h,e.tight=!0,e.tShift[c]=u-e.bMarks[c],e.sCount[c]=r,u>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||_)&&(l=!1),_=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=x,e.tShift[c]=ee,e.sCount[c]=b,e.tight=y,s=e.push(`list_item_close`,`li`,-1),s.markup=String.fromCharCode(m),c=e.line,g[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let te=!1;for(let t=0,r=v.length;t<r;t++)if(v[t](e,c,n,!0)){te=!0;break}if(te)break;if(d){if(p=Lu(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=Iu(e,c),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return s=d?e.push(`ordered_list_close`,`ol`,-1):e.push(`bullet_list_close`,`ul`,-1),s.markup=String.fromCharCode(m),g[1]=c,e.line=c,e.parentType=y,l&&Ru(e,h),!0}function Bu(){return(Bu=e((()=>{Q()})))()}function Vu(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(t){let n=e.lineMax;if(t>=n||e.isEmpty(t))return null;let r=!1;if(e.sCount[t]-e.blkIndent>3&&(r=!0),e.sCount[t]<0&&(r=!0),!r){let r=e.md.block.ruler.getRules(`reference`),i=e.parentType;e.parentType=`reference`;let a=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,t,n,!0)){a=!0;break}if(e.parentType=i,a)return null}let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];return e.src.slice(i,a+1)}let c=e.src.slice(i,a+1);a=c.length;let l=-1;for(i=1;i<a;i++){let e=c.charCodeAt(i);if(e===91)return!1;if(e===93){l=i;break}if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(e===92&&(i++,i<a&&c.charCodeAt(i)===10)){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!Z(e))break}let u=e.md.helpers.parseLinkDestination(c,i,a);if(!u.ok)return!1;let d=e.md.normalizeLink(u.str);if(!e.md.validateLink(d))return!1;i=u.pos;let f=i,p=o,m=i;for(;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!Z(e))break}let h=e.md.helpers.parseLinkTitle(c,i,a);for(;h.can_continue;){let t=s(o);if(t===null)break;c+=t,i=a,a=c.length,o++,h=e.md.helpers.parseLinkTitle(c,i,a,h)}let g;for(i<a&&m!==i&&h.ok?(g=h.str,i=h.pos):(g=``,i=f,o=p);i<a&&Z(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10&&g)for(g=``,i=f,o=p;i<a&&Z(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10)return!1;let _=yl(c.slice(1,l));return _?r?!0:(e.env.references===void 0&&(e.env.references={}),e.env.references[_]===void 0&&(e.env.references[_]={title:g,href:d}),e.line=o,!0):!1}function Hu(){return(Hu=e((()=>{Q()})))()}var Uu;function Wu(){return(Wu=e((()=>{Uu=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`)})))()}var Gu,Ku;function qu(){return(qu=e((()=>{Gu=RegExp(`^(?:<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`),Ku=RegExp(`^(?:<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>)`)})))()}function Ju(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,a),s=0;for(;s<Yu.length&&!Yu[s][0].test(o);s++);if(s===Yu.length)return!1;if(r)return Yu[s][2];let c=t+1,l=Yu[s][1].test(``);if(!Yu[s][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent&&(l||!e.isEmpty(c)));c++)if(i=e.bMarks[c]+e.tShift[c],a=e.eMarks[c],o=e.src.slice(i,a),Yu[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;let u=e.push(`html_block`,``,0);return u.map=[t,c],u.content=e.getLines(t,c,e.blkIndent,!0),!0}var Yu;function Xu(){return(Xu=e((()=>{Wu(),qu(),Yu=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[RegExp(`^</?(`+Uu.join(`|`)+`)(?=(\\s|/?>|$))`,`i`),/^$/,!0],[RegExp(Ku.source+`\\s*$`),/^$/,!1]]})))()}function Zu(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=a)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<a&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<a&&!Z(o))return!1;if(r)return!0;a=e.skipSpacesBack(a,i);let c=e.skipCharsBack(a,35,i);c>i&&Z(e.src.charCodeAt(c-1))&&(a=c),e.line=t+1;let l=e.push(`heading_open`,`h`+String(s),1);l.markup=`########`.slice(0,s),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=xl(e.src.slice(i,a)),u.map=[t,e.line],u.children=[];let d=e.push(`heading_close`,`h`+String(s),-1);return d.markup=`########`.slice(0,s),!0}function Qu(){return(Qu=e((()=>{Q()})))()}function $u(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`);if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.parentType;e.parentType=`paragraph`;let a=0,o,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let t=e.bMarks[s]+e.tShift[s],n=e.eMarks[s];if(t<n&&(o=e.src.charCodeAt(t),(o===45||o===61)&&(t=e.skipChars(t,o),t=e.skipSpaces(t),t>=n))){a=o===61?1:2;break}}if(e.sCount[s]<0)continue;let t=!1;for(let i=0,a=r.length;i<a;i++)if(r[i](e,s,n,!0)){t=!0;break}if(t)break}if(!a)return e.parentType=i,!1;let c=xl(e.getLines(t,s,e.blkIndent,!1));e.line=s+1;let l=e.push(`heading_open`,`h`+String(a),1);l.markup=String.fromCharCode(o),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=c,u.map=[t,e.line-1],u.children=[];let d=e.push(`heading_close`,`h`+String(a),-1);return d.markup=String.fromCharCode(o),e.parentType=i,!0}function ed(){return(ed=e((()=>{Q()})))()}function td(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`),i=e.parentType,a=t+1;for(e.parentType=`paragraph`;a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)continue;let t=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,a,n,!0)){t=!0;break}if(t)break}let o=xl(e.getLines(t,a,e.blkIndent,!1));e.line=a;let s=e.push(`paragraph_open`,`p`,1);s.map=[t,e.line];let c=e.push(`inline`,``,0);return c.content=o,c.map=[t,e.line],c.children=[],e.push(`paragraph_close`,`p`,-1),e.parentType=i,!0}function nd(){return(nd=e((()=>{Q()})))()}function rd(){this.ruler=new $;for(let e=0;e<id.length;e++)this.ruler.push(id[e][0],id[e][1],{alt:(id[e][2]||[]).slice()})}var id;function ad(){return(ad=e((()=>{Vl(),wu(),ku(),Nu(),Fu(),Bu(),Hu(),Xu(),Qu(),ed(),nd(),id=[[`table`,Du,[`paragraph`,`reference`]],[`code`,Au],[`fence`,ju,[`paragraph`,`reference`,`blockquote`,`list`]],[`blockquote`,Mu,[`paragraph`,`reference`,`blockquote`,`list`]],[`hr`,Pu,[`paragraph`,`reference`,`blockquote`,`list`]],[`list`,zu,[`paragraph`,`reference`,`blockquote`]],[`reference`,Vu],[`html_block`,Ju,[`paragraph`,`reference`,`blockquote`]],[`heading`,Zu,[`paragraph`,`reference`,`blockquote`]],[`lheading`,$u],[`paragraph`,td]],rd.prototype.tokenize=function(e,t,n){let r=this.ruler.getRules(``),i=r.length,a=e.md.options.maxNesting,o=t,s=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=a){e.line=n;break}let t=e.line,c=!1;for(let a=0;a<i;a++)if(c=r[a](e,o,n,!1),c){if(t>=e.line)throw Error(`block rule didn't increment state.line`);break}if(!c)throw Error(`none of the block rules matched`);e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<n&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},rd.prototype.parse=function(e,t,n,r){if(!e)return;let i=new this.State(e,t,n,r);this.tokenize(i,i.line,i.lineMax)},rd.prototype.State=Cu})))()}function od(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending=``,this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}function sd(){return(sd=e((()=>{Ul(),Q(),od.prototype.pushPending=function(){let e=new Hl(`text`,``,0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending=``,e},od.prototype.push=function(e,t,n){this.pending&&this.pushPending();let r=new Hl(e,t,n),i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r},od.prototype.scanDelims=function(e,t){let n=this.posMax,r=this.src.charCodeAt(e),i;if(e===0)i=32;else if(e===1)i=this.src.charCodeAt(0),(i&63488)==55296&&(i=65533);else if(i=this.src.charCodeAt(e-1),(i&64512)==56320){let t=this.src.charCodeAt(e-2);i=(t&64512)==55296?65536+(t-55296<<10)+(i-56320):65533}else(i&64512)==55296&&(i=65533);let a=e;for(;a<n&&this.src.charCodeAt(a)===r;)a++;let o=a-e,s=a<n?this.src.charCodeAt(a):32;if((s&64512)==55296){let e=this.src.charCodeAt(a+1);s=(e&64512)==56320?65536+(s-55296<<10)+(e-56320):65533}else(s&64512)==56320&&(s=65533);let c=vl(i)||_l(i),l=vl(s)||_l(s),u=hl(i),d=hl(s),f=!d&&(!l||u||c),p=!u&&(!c||d||l);return{can_open:f&&(t||!p||c),can_close:p&&(t||!f||l),length:o}},od.prototype.Token=Hl})))()}function cd(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function ld(e,t){let n=e.pos;for(;n<e.posMax&&!cd(e.src.charCodeAt(n));)n++;return n!==e.pos&&(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}function ud(){return(ud=e((()=>{})))()}function dd(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;let n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;let i=e.pending.match(fd);if(!i)return!1;let a=i[1],o=e.md.linkify.matchAtStart(e.src.slice(n-a.length));if(!o)return!1;let s=o.url;if(s.length<=a.length)return!1;let c=s.length;for(;c>0&&s.charCodeAt(c-1)===42;)c--;c!==s.length&&(s=s.slice(0,c));let l=e.md.normalizeLink(s);if(!e.md.validateLink(l))return!1;if(!t){e.pending=e.pending.slice(0,-a.length);let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,l]],t.markup=`linkify`,t.info=`auto`;let n=e.push(`text`,``,0);n.content=e.md.normalizeLinkText(s);let r=e.push(`link_close`,`a`,-1);r.markup=`linkify`,r.info=`auto`}return e.pos+=s.length-a.length,!0}var fd;function pd(){return(pd=e((()=>{fd=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i})))()}function md(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;let r=e.pending.length-1,i=e.posMax;if(!t){if(r>=0&&e.pending.charCodeAt(r)===32){if(r>=1&&e.pending.charCodeAt(r-1)===32){let t=r-1;for(;t>=1&&e.pending.charCodeAt(t-1)===32;)t--;e.pending=e.pending.slice(0,t),e.push(`hardbreak`,`br`,0)}else e.pending=e.pending.slice(0,-1),e.push(`softbreak`,`br`,0)}else e.push(`softbreak`,`br`,0)}for(n++;n<i&&Z(e.src.charCodeAt(n));)n++;return e.pos=n,!0}function hd(){return(hd=e((()=>{Q()})))()}function gd(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push(`hardbreak`,`br`,0),n++;n<r&&(i=e.src.charCodeAt(n),Z(i));)n++;return e.pos=n,!0}if(i===32){if(!t){let t=e.push(`text_special`,``,0);t.content=`\\`,t.markup=`\\`,t.info=`escape`}return e.pos=n,!0}let a=e.src[n];if(i>=55296&&i<=56319&&n+1<r){let t=e.src.charCodeAt(n+1);t>=56320&&t<=57343&&(a+=e.src[n+1],n++)}let o=`\\`+a;if(!t){let t=e.push(`text_special`,``,0);t.content=i<256&&_d[i]!==0?a:o,t.markup=o,t.info=`escape`}return e.pos=n+1,!0}var _d;function vd(){return(vd=e((()=>{Q(),_d=[];for(let e=0;e<256;e++)_d.push(0);`\\!"#$%&'()*+,./:;<=>?@[]^_\`{|}~-`.split(``).forEach(function(e){_d[e.charCodeAt(0)]=1})})))()}function yd(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;let r=n;n++;let i=e.posMax;for(;n<i&&e.src.charCodeAt(n)===96;)n++;let a=e.src.slice(r,n),o=a.length;if(e.backticksScanned&&(e.backticks[o]||0)<=r)return t||(e.pending+=a),e.pos+=o,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<i&&e.src.charCodeAt(s)===96;)s++;let r=s-c;if(r===o){if(!t){let t=e.push(`code_inline`,`code`,0);t.markup=a,t.content=e.src.slice(n,c).replace(/\n/g,` `).replace(/^ (.+) $/,`$1`)}return e.pos=s,!0}e.backticks[r]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=o,!0}function bd(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;let i=e.scanDelims(e.pos,!0),a=i.length,o=String.fromCharCode(r);if(a<2)return!1;let s;a%2&&(s=e.push(`text`,``,0),s.content=o,a--);for(let t=0;t<a;t+=2)s=e.push(`text`,``,0),s.content=o+o,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function xd(e,t){let n,r=[],i=t.length;for(let a=0;a<i;a++){let i=t[a];if(i.marker!==126||i.end===-1)continue;let o=t[i.end];n=e.tokens[i.token],n.type=`s_open`,n.tag=`s`,n.nesting=1,n.markup=`~~`,n.content=``,n=e.tokens[o.token],n.type=`s_close`,n.tag=`s`,n.nesting=-1,n.markup=`~~`,n.content=``,e.tokens[o.token-1].type===`text`&&e.tokens[o.token-1].content===`~`&&r.push(o.token-1)}for(;r.length;){let t=r.pop(),i=t+1;for(;i<e.tokens.length&&e.tokens[i].type===`s_close`;)i++;i--,t!==i&&(n=e.tokens[i],e.tokens[i]=e.tokens[t],e.tokens[t]=n)}}function Sd(e){let t=e.tokens_meta,n=e.tokens_meta.length;xd(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&xd(e,t[r].delimiters)}var Cd;function wd(){return(wd=e((()=>{Cd={tokenize:bd,postProcess:Sd}})))()}function Td(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;let i=e.scanDelims(e.pos,r===42);for(let t=0;t<i.length;t++){let t=e.push(`text`,``,0);t.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function Ed(e,t){let n=t.length;for(let r=n-1;r>=0;r--){let n=t[r];if(n.marker!==95&&n.marker!==42||n.end===-1)continue;let i=t[n.end],a=r>0&&t[r-1].end===n.end+1&&t[r-1].marker===n.marker&&t[r-1].token===n.token-1&&t[n.end+1].token===i.token+1,o=String.fromCharCode(n.marker),s=e.tokens[n.token];s.type=a?`strong_open`:`em_open`,s.tag=a?`strong`:`em`,s.nesting=1,s.markup=a?o+o:o,s.content=``;let c=e.tokens[i.token];c.type=a?`strong_close`:`em_close`,c.tag=a?`strong`:`em`,c.nesting=-1,c.markup=a?o+o:o,c.content=``,a&&(e.tokens[t[r-1].token].content=``,e.tokens[t[n.end+1].token].content=``,r--)}}function Dd(e){let t=e.tokens_meta,n=e.tokens_meta.length;Ed(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&Ed(e,t[r].delimiters)}var Od;function kd(){return(kd=e((()=>{Od={tokenize:Td,postProcess:Dd}})))()}function Ad(e,t){let n,r,i,a,o=``,s=``,c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;let u=e.pos,d=e.posMax,f=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<d&&e.src.charCodeAt(m)===40){for(l=!1,m++;m<d&&(n=e.src.charCodeAt(m),!(!Z(n)&&n!==10));m++);if(m>=d)return!1;if(c=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?m=i.pos:o=``,c=m;m<d&&(n=e.src.charCodeAt(m),!(!Z(n)&&n!==10));m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<d&&c!==m&&i.ok)for(s=i.str,m=i.pos;m<d&&(n=e.src.charCodeAt(m),!(!Z(n)&&n!==10));m++);}(m>=d||e.src.charCodeAt(m)!==41)&&(l=!0),m++}if(l){if(e.env.references===void 0)return!1;if(m<d&&e.src.charCodeAt(m)===91?(c=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?r=e.src.slice(c,m++):m=p+1):m=p+1,r||=e.src.slice(f,p),a=e.env.references[yl(r)],!a)return e.pos=u,!1;o=a.href,s=a.title}if(!t){e.pos=f,e.posMax=p;let t=e.push(`link_open`,`a`,1),n=[[`href`,o]];t.attrs=n,s&&n.push([`title`,s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push(`link_close`,`a`,-1)}return e.pos=m,e.posMax=d,!0}function jd(){return(jd=e((()=>{Q()})))()}function Md(e,t){let n,r,i,a,o,s,c,l,u=``,d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;let p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(a=m+1,a<f&&e.src.charCodeAt(a)===40){for(a++;a<f&&(n=e.src.charCodeAt(a),!(!Z(n)&&n!==10));a++);if(a>=f)return!1;for(l=a,s=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),s.ok&&(u=e.md.normalizeLink(s.str),e.md.validateLink(u)?a=s.pos:u=``),l=a;a<f&&(n=e.src.charCodeAt(a),!(!Z(n)&&n!==10));a++);if(s=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<f&&l!==a&&s.ok)for(c=s.str,a=s.pos;a<f&&(n=e.src.charCodeAt(a),!(!Z(n)&&n!==10));a++);else c=``;if(a>=f||e.src.charCodeAt(a)!==41)return e.pos=d,!1;a++}else{if(e.env.references===void 0)return!1;if(a<f&&e.src.charCodeAt(a)===91?(l=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?i=e.src.slice(l,a++):a=m+1):a=m+1,i||=e.src.slice(p,m),o=e.env.references[yl(i)],!o)return e.pos=d,!1;u=o.href,c=o.title}if(!t){r=e.src.slice(p,m);let t=[];e.md.inline.parse(r,e.md,e.env,t);let n=e.push(`image`,`img`,0),i=[[`src`,u],[`alt`,``]];n.attrs=i,n.children=t,n.content=r,c&&i.push([`title`,c])}return e.pos=a,e.posMax=f,!0}function Nd(){return(Nd=e((()=>{Q()})))()}function Pd(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;let r=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;let t=e.src.charCodeAt(n);if(t===60)return!1;if(t===62)break}let a=e.src.slice(r+1,n);if(Id.test(a)){let n=e.md.normalizeLink(a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}if(Fd.test(a)){let n=e.md.normalizeLink(`mailto:`+a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}return!1}var Fd,Id;function Ld(){return(Ld=e((()=>{Fd=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Id=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/})))()}function Rd(e){return/^<a[>\s]/i.test(e)}function zd(e){return/^<\/a\s*>/i.test(e)}function Bd(e){let t=e|32;return t>=97&&t<=122}function Vd(e,t){if(!e.md.options.html)return!1;let n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;let i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!Bd(i))return!1;let a=e.src.slice(r).match(Gu);if(!a)return!1;if(!t){let t=e.push(`html_inline`,``,0);t.content=a[0],Rd(t.content)&&e.linkLevel++,zd(t.content)&&e.linkLevel--}return e.pos+=a[0].length,!0}function Hd(){return(Hd=e((()=>{qu()})))()}function Ud(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){let r=e.src.slice(n).match(Wd);if(r){if(!t){let t=r[1][0].toLowerCase()===`x`?parseInt(r[1].slice(1),16):parseInt(r[1],10),n=e.push(`text_special`,``,0);n.content=sl(t)?cl(t):cl(65533),n.markup=r[0],n.info=`entity`}return e.pos+=r[0].length,!0}}else{let r=e.src.slice(n).match(Gd);if(r){let n=Jc(r[0]);if(n!==r[0]){if(!t){let t=e.push(`text_special`,``,0);t.content=n,t.markup=r[0],t.info=`entity`}return e.pos+=r[0].length,!0}}}return!1}var Wd,Gd;function Kd(){return(Kd=e((()=>{el(),Q(),Wd=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Gd=/^&([a-z][a-z0-9]{1,31});/i})))()}function qd(e){let t={},n=e.length;if(!n)return;let r=0,i=-2,a=[];for(let o=0;o<n;o++){let n=e[o];if(a.push(0),(e[r].marker!==n.marker||i!==n.token-1)&&(r=o),i=n.token,n.length=n.length||0,!n.close)continue;t.hasOwnProperty(n.marker)||(t[n.marker]=[-1,-1,-1,-1,-1,-1]);let s=t[n.marker][(n.open?3:0)+n.length%3],c=r-a[r]-1,l=c;for(;c>s;c-=a[c]+1){let t=e[c];if(t.marker===n.marker&&t.open&&t.end<0){let r=!1;if((t.close||n.open)&&(t.length+n.length)%3==0&&(t.length%3!=0||n.length%3!=0)&&(r=!0),!r){let r=c>0&&!e[c-1].open?a[c-1]+1:0;a[o]=o-c+r,a[c]=r,n.open=!1,t.end=o,t.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[n.marker][(n.open?3:0)+(n.length||0)%3]=l)}}function Jd(e){let t=e.tokens_meta,n=e.tokens_meta.length;qd(e.delimiters);for(let e=0;e<n;e++)t[e]&&t[e].delimiters&&qd(t[e].delimiters)}function Yd(){return(Yd=e((()=>{})))()}function Xd(e){let t,n,r=0,i=e.tokens,a=e.tokens.length;for(t=n=0;t<a;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}function Zd(){this.ruler=new $;for(let e=0;e<Qd.length;e++)this.ruler.push(Qd[e][0],Qd[e][1]);this.ruler2=new $;for(let e=0;e<$d.length;e++)this.ruler2.push($d[e][0],$d[e][1])}var Qd,$d;function ef(){return(ef=e((()=>{Vl(),sd(),ud(),pd(),hd(),vd(),wd(),kd(),jd(),Nd(),Ld(),Hd(),Kd(),Yd(),Qd=[[`text`,ld],[`linkify`,dd],[`newline`,md],[`escape`,gd],[`backticks`,yd],[`strikethrough`,Cd.tokenize],[`emphasis`,Od.tokenize],[`link`,Ad],[`image`,Md],[`autolink`,Pd],[`html_inline`,Vd],[`entity`,Ud]],$d=[[`balance_pairs`,Jd],[`strikethrough`,Cd.postProcess],[`emphasis`,Od.postProcess],[`fragments_join`,Xd]],Zd.prototype.skipToken=function(e){let t=e.pos,n=this.ruler.getRules(``),r=n.length,i=e.md.options.maxNesting,a=e.cache;if(a[t]!==void 0){e.pos=a[t];return}let o=!1;if(e.level<i){for(let i=0;i<r;i++)if(e.level++,o=n[i](e,!0),e.level--,o){if(t>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}else e.pos=e.posMax;o||e.pos++,a[t]=e.pos},Zd.prototype.tokenize=function(e){let t=this.ruler.getRules(``),n=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){let a=e.pos,o=!1;if(e.level<i){for(let r=0;r<n;r++)if(o=t[r](e,!1),o){if(a>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}if(o){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},Zd.prototype.parse=function(e,t,n,r){let i=new this.State(e,t,n,r);this.tokenize(i);let a=this.ruler2.getRules(``),o=a.length;for(let e=0;e<o;e++)a[e](i)},Zd.prototype.State=od})))()}function tf(e){let t={};e||={},t.src_Any=yc.source,t.src_Cc=xc.source,t.src_Z=kc.source,t.src_P=Tc.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join(`|`),t.src_ZCc=[t.src_Z,t.src_Cc].join(`|`);let n=`[><｜]`;return t.src_pseudo_letter=`(?:(?!${n}|${t.src_ZPCc})${t.src_Any})`,t.src_ip4=`(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`,t.src_auth=`(?:(?:(?!${t.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,t.src_port=`(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?`,t.src_host_terminator=`(?=$|${n}|${t.src_ZPCc})(?!${e[`---`]?`-(?!--)|`:`-|`}_|:\\d|\\.-|\\.(?!$|${t.src_ZPCc}))`,t.src_path=`(?:[/?#](?:(?!${t.src_ZCc}|${n}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${t.src_ZCc}|\\]).)*\\]|\\((?:(?!${t.src_ZCc}|[)]).)*\\)|\\{(?:(?!${t.src_ZCc}|[}]).)*\\}|\\"(?:(?!${t.src_ZCc}|["]).)+\\"|\\'(?:(?!${t.src_ZCc}|[']).)+\\'|\\'(?=${t.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${t.src_ZCc}|[.]|$)|`+(e[`---`]?`\\-(?!--(?:[^-]|$))(?:-*)|`:`\\-+|`)+`,(?!${t.src_ZCc}|$)|;(?!${t.src_ZCc}|$)|\\!+(?!${t.src_ZCc}|[!]|$)|\\?(?!${t.src_ZCc}|[?]|$))+|\\/)?`,t.src_email_name=`[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}`,t.src_xn=`xn--[a-z0-9\\-]{1,59}`,t.src_domain_root=`(?:`+t.src_xn+`|${t.src_pseudo_letter}{1,63})`,t.src_domain=`(?:`+t.src_xn+`|(?:${t.src_pseudo_letter})|(?:${t.src_pseudo_letter}(?:-|${t.src_pseudo_letter}){0,61}${t.src_pseudo_letter}))`,t.src_host=`(?:(?:(?:(?:${t.src_domain})\\.)*${t.src_domain}))`,t.tpl_host_fuzzy=`(?:`+t.src_ip4+`|(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${t.src_ZPCc}|>|$))`,t.tpl_email_fuzzy=`(^|${n}|"|\\(|${t.src_ZCc})(${t.src_email_name}@${t.tpl_host_fuzzy_strict})`,t.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_fuzzy_strict}${t.src_path})`,t.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_no_ip_fuzzy_strict}${t.src_path})`,t}function nf(){return(nf=e((()=>{Mc()})))()}function rf(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function af(e){return Object.prototype.toString.call(e)}function of(e){return af(e)===`[object String]`}function sf(e){return af(e)===`[object Object]`}function cf(e){return af(e)===`[object RegExp]`}function lf(e){return af(e)===`[object Function]`}function uf(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,`\\$&`)}function df(e){return Object.keys(e||{}).reduce(function(e,t){return e||_f.hasOwnProperty(t)},!1)}function ff(e){return function(t,n){let r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function pf(){return function(e,t){t.normalize(e)}}function mf(e){let t=e.re=tf(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(yf),n.push(t.src_xn),t.src_tlds=n.join(`|`);function r(e){return e.replace(`%TLDS%`,t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),`i`),t.email_fuzzy_global=RegExp(r(t.tpl_email_fuzzy),`ig`),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),`i`),t.link_fuzzy_global=RegExp(r(t.tpl_link_fuzzy),`ig`),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),`i`),t.link_no_ip_fuzzy_global=RegExp(r(t.tpl_link_no_ip_fuzzy),`ig`),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),`i`);let i=[];e.__compiled__={};function a(e,t){throw Error(`(LinkifyIt) Invalid schema "${e}": ${t}`)}Object.keys(e.__schemas__).forEach(function(t){let n=e.__schemas__[t];if(n===null)return;let r={validate:null,link:null};if(e.__compiled__[t]=r,sf(n)){cf(n.validate)?r.validate=ff(n.validate):lf(n.validate)?r.validate=n.validate:a(t,n),lf(n.normalize)?r.normalize=n.normalize:n.normalize?a(t,n):r.normalize=pf();return}if(of(n)){i.push(t);return}a(t,n)}),i.forEach(function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)}),e.__compiled__[``]={validate:null,normalize:pf()};let o=Object.keys(e.__compiled__).filter(function(t){return t.length>0&&e.__compiled__[t]}).map(uf).join(`|`);e.re.schema_test=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`i`),e.re.schema_search=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`ig`),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,`i`),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,`i`)}function hf(e,t,n,r){let i=e.slice(n,r);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=r,this.raw=i,this.text=i,this.url=i}function gf(e,t){if(!(this instanceof gf))return new gf(e,t);t||df(e)&&(t=e,e={}),this.__opts__=rf({},_f,t),this.__schemas__=rf({},vf,e),this.__compiled__={},this.__tlds__=bf,this.__tlds_replaced__=!1,this.re={},mf(this)}var _f,vf,yf,bf;function xf(){return(xf=e((()=>{nf(),_f={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1},vf={"http:":{validate:function(e,t,n){let r=e.slice(t);return n.re.http||(n.re.http=RegExp(`^\\/\\/${n.re.src_auth}${n.re.src_host_port_strict}${n.re.src_path}`,`i`)),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":`http:`,"ftp:":`http:`,"//":{validate:function(e,t,n){let r=e.slice(t);return n.re.no_http||(n.re.no_http=RegExp(`^`+n.re.src_auth+`(?:localhost|(?:(?:${n.re.src_domain})\\.)+${n.re.src_domain_root})`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,`i`)),n.re.no_http.test(r)?t>=3&&e[t-3]===`:`||t>=3&&e[t-3]===`/`?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){let r=e.slice(t);return n.re.mailto||(n.re.mailto=RegExp(`^${n.re.src_email_name}@${n.re.src_host_strict}`,`i`)),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},yf=`a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]`,bf=`biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф`.split(`|`),gf.prototype.add=function(e,t){return this.__schemas__[e]=t,mf(this),this},gf.prototype.set=function(e){return this.__opts__=rf(this.__opts__,e),this},gf.prototype.test=function(e){if(!e.length)return!1;let t,n;if(this.re.schema_test.test(e)){for(n=this.re.schema_search,n.lastIndex=0;(t=n.exec(e))!==null;)if(this.testSchemaAt(e,t[2],n.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__[`http:`]&&e.search(this.re.host_fuzzy_test)>=0&&e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`]&&e.indexOf(`@`)>=0&&e.match(this.re.email_fuzzy)!==null)},gf.prototype.pretest=function(e){return this.re.pretest.test(e)},gf.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},gf.prototype.match=function(e){let t=[],n=[],r=[],i=[],a,o,s;function c(e,t){return e?t?e.index===t.index?e.lastIndex>=t.lastIndex?e:t:e.index<t.index?e:t:e:t}if(!e.length)return null;if(this.re.schema_test.test(e))for(s=this.re.schema_search,s.lastIndex=0;(a=s.exec(e))!==null;)o=this.testSchemaAt(e,a[2],s.lastIndex),o&&n.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+o});if(this.__opts__.fuzzyLink&&this.__compiled__[`http:`])for(s=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)r.push({schema:``,index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`])for(s=this.re.email_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)i.push({schema:`mailto:`,index:a.index+a[1].length,lastIndex:a.index+a[0].length});let l=[0,0,0],u=0;for(;;){let a=[n[l[0]],i[l[1]],r[l[2]]],o=c(c(a[0],a[1]),a[2]);if(!o)break;if(o===a[0]?l[0]++:o===a[1]?l[1]++:l[2]++,o.index<u)continue;let s=new hf(e,o.schema,o.index,o.lastIndex);this.__compiled__[s.schema].normalize(s,this),t.push(s),u=o.lastIndex}return t.length?t:null},gf.prototype.matchAtStart=function(e){if(!e.length)return null;let t=this.re.schema_at_start.exec(e);if(!t)return null;let n=this.testSchemaAt(e,t[2],t[0].length);if(!n)return null;let r=new hf(e,t[2],t.index+t[1].length,t.index+t[0].length+n);return this.__compiled__[r.schema].normalize(r,this),r},gf.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,t,n){return e!==n[t-1]}).reverse(),mf(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,mf(this),this)},gf.prototype.normalize=function(e){e.schema||(e.url=`http://${e.url}`),e.schema===`mailto:`&&!/^mailto:/i.test(e.url)&&(e.url=`mailto:${e.url}`)},gf.prototype.onCompile=function(){}})))()}function Sf(e){throw RangeError(Rf[e])}function Cf(e,t){let n=[],r=e.length;for(;r--;)n[r]=t(e[r]);return n}function wf(e,t){let n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace(Lf,`.`);let i=Cf(e.split(`.`),t).join(`.`);return r+i}function Tf(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}var Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf,Jf,Yf,Xf;function Zf(){return(Zf=e((()=>{Ef=2147483647,Df=36,Of=1,kf=26,Af=38,jf=700,Mf=72,Nf=128,Pf=`-`,Ff=/^xn--/,If=/[^\0-\x7F]/,Lf=/[\x2E\u3002\uFF0E\uFF61]/g,Rf={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},zf=35,Bf=Math.floor,Vf=String.fromCharCode,Hf=e=>String.fromCodePoint(...e),Uf=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Df},Wf=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Gf=function(e,t,n){let r=0;for(e=n?Bf(e/jf):e>>1,e+=Bf(e/t);e>455;r+=Df)e=Bf(e/zf);return Bf(r+36*e/(e+Af))},Kf=function(e){let t=[],n=e.length,r=0,i=Nf,a=Mf,o=e.lastIndexOf(Pf);o<0&&(o=0);for(let n=0;n<o;++n)e.charCodeAt(n)>=128&&Sf(`not-basic`),t.push(e.charCodeAt(n));for(let s=o>0?o+1:0;s<n;){let o=r;for(let t=1,i=Df;;i+=Df){s>=n&&Sf(`invalid-input`);let o=Uf(e.charCodeAt(s++));o>=Df&&Sf(`invalid-input`),o>Bf((Ef-r)/t)&&Sf(`overflow`),r+=o*t;let c=i<=a?Of:i>=a+kf?kf:i-a;if(o<c)break;let l=Df-c;t>Bf(Ef/l)&&Sf(`overflow`),t*=l}let c=t.length+1;a=Gf(r-o,c,o==0),Bf(r/c)>Ef-i&&Sf(`overflow`),i+=Bf(r/c),r%=c,t.splice(r++,0,i)}return String.fromCodePoint(...t)},qf=function(e){let t=[];e=Tf(e);let n=e.length,r=Nf,i=0,a=Mf;for(let n of e)n<128&&t.push(Vf(n));let o=t.length,s=o;for(o&&t.push(Pf);s<n;){let n=Ef;for(let t of e)t>=r&&t<n&&(n=t);let c=s+1;n-r>Bf((Ef-i)/c)&&Sf(`overflow`),i+=(n-r)*c,r=n;for(let n of e)if(n<r&&++i>Ef&&Sf(`overflow`),n===r){let e=i;for(let n=Df;;n+=Df){let r=n<=a?Of:n>=a+kf?kf:n-a;if(e<r)break;let i=e-r,o=Df-r;t.push(Vf(Wf(r+i%o,0))),e=Bf(i/o)}t.push(Vf(Wf(e,0))),a=Gf(i,c,s===o),i=0,++s}++i,++r}return t.join(``)},Jf=function(e){return wf(e,function(e){return Ff.test(e)?Kf(e.slice(4).toLowerCase()):e})},Yf=function(e){return wf(e,function(e){return If.test(e)?`xn--`+qf(e):e})},Xf={version:`2.3.1`,ucs2:{decode:Tf,encode:Hf},decode:Kf,encode:qf,toASCII:Yf,toUnicode:Jf}})))()}var Qf;function $f(){return($f=e((()=>{Qf={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}}})))()}var ep;function tp(){return(tp=e((()=>{ep={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`paragraph`]},inline:{rules:[`text`],rules2:[`balance_pairs`,`fragments_join`]}}}})))()}var np;function rp(){return(rp=e((()=>{np={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`blockquote`,`code`,`fence`,`heading`,`hr`,`html_block`,`lheading`,`list`,`reference`,`paragraph`]},inline:{rules:[`autolink`,`backticks`,`emphasis`,`entity`,`escape`,`html_inline`,`image`,`link`,`newline`,`text`],rules2:[`balance_pairs`,`emphasis`,`fragments_join`]}}}})))()}function ip(e){let t=e.trim().toLowerCase();return!lp.test(t)||up.test(t)}function ap(e){let t=rc(e,!0);if(t.hostname&&(!t.protocol||dp.indexOf(t.protocol)>=0))try{t.hostname=Xf.toASCII(t.hostname)}catch{}return Qs(tc(t))}function op(e){let t=rc(e,!0);if(t.hostname&&(!t.protocol||dp.indexOf(t.protocol)>=0))try{t.hostname=Xf.toUnicode(t.hostname)}catch{}return Js(tc(t),Js.defaultChars+`%`)}function sp(e,t){if(!(this instanceof sp))return new sp(e,t);t||rl(e)||(t=e||{},e=`default`),this.inline=new Zd,this.block=new rd,this.core=new bu,this.renderer=new Rl,this.linkify=new gf,this.validateLink=ip,this.normalizeLink=ap,this.normalizeLinkText=op,this.utils=tl,this.helpers=al({},Il),this.options={},this.configure(e),t&&this.set(t)}var cp,lp,up,dp;function fp(){return(fp=e((()=>{Q(),Ll(),Bl(),Su(),ad(),ef(),xf(),vc(),Zf(),$f(),tp(),rp(),cp={default:Qf,zero:ep,commonmark:np},lp=/^(vbscript|javascript|file|data):/,up=/^data:image\/(gif|png|jpeg|webp);/,dp=[`http:`,`https:`,`mailto:`],sp.prototype.set=function(e){return al(this.options,e),this},sp.prototype.configure=function(e){let t=this;if(rl(e)){let t=e;if(e=cp[t],!e)throw Error('Wrong `markdown-it` preset "'+t+`", check name`)}if(!e)throw Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this},sp.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to enable unknown rule(s): `+r);return this},sp.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to disable unknown rule(s): `+r);return this},sp.prototype.use=function(e){let t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},sp.prototype.parse=function(e,t){if(typeof e!=`string`)throw Error(`Input data should be a String`);let n=new this.core.State(e,this,t);return this.core.process(n),n.tokens},sp.prototype.render=function(e,t){return t||={},this.renderer.render(this.parse(e,t),this.options,t)},sp.prototype.parseInline=function(e,t){let n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens},sp.prototype.renderInline=function(e,t){return t||={},this.renderer.render(this.parseInline(e,t),this.options,t)}})))()}function pp(){return(pp=e((()=>{fp()})))()}export{Ie as C,Fe as S,We as T,w as _,In as a,pt as b,Mn as c,An as d,wn as f,Lt as g,xn as h,Ks as i,jn as l,Sn as m,sp as n,Pn as o,Cn as p,fp as r,Fn as s,pp as t,Dn as u,Mt as v,Pe as w,mt as x,Pt as y};