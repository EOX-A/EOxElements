import{w as Kt,s as U,x as w,T as L}from"./lit-element-6d538b77.js";import{n as k,t as H,r as ne}from"./state-31e770db.js";import{e as Ut,i as Jt,t as Xt,o as Z,n as X,a as Xe}from"./unsafe-html-d9d95945.js";import{p as Yt,v as z,r as se,h as we,m as Zt}from"./directive-helpers-4c14bebb.js";import{n as Ee,i as le}from"./static-bde0d4e7.js";import{d as he}from"./dayjs.min-c23fb88c.js";import{r as er,T as tr}from"./main-d54a4cc3.js";import{b as rr}from"./button-f0c29825.js";import{c as ir,r as sr,s as nr}from"./slider-8f351beb.js";import{c as ce,g as gt,a as be}from"./_commonjsHelpers-de833af9.js";import"./iframe-49d22a2d.js";import"../sb-preview/runtime.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=(t,e,r)=>{const i=new Map;for(let s=e;s<=r;s++)i.set(t[s],s);return i},ar=Ut(class extends Jt{constructor(t){if(super(t),t.type!==Xt.CHILD)throw Error("repeat() can only be used in text expressions")}ht(t,e,r){let i;r===void 0?r=e:e!==void 0&&(i=e);const s=[],n=[];let a=0;for(const l of t)s[a]=i?i(l,a):a,n[a]=r(l,a),a++;return{values:n,keys:s}}render(t,e,r){return this.ht(t,e,r).values}update(t,[e,r,i]){const s=Yt(t),{values:n,keys:a}=this.ht(e,r,i);if(!Array.isArray(s))return this.dt=a,n;const l=this.dt??(this.dt=[]),o=[];let c,u,f=0,d=s.length-1,h=0,p=n.length-1;for(;f<=d&&h<=p;)if(s[f]===null)f++;else if(s[d]===null)d--;else if(l[f]===a[h])o[h]=z(s[f],n[h]),f++,h++;else if(l[d]===a[p])o[p]=z(s[d],n[p]),d--,p--;else if(l[f]===a[p])o[p]=z(s[f],n[p]),se(t,o[p+1],s[f]),f++,p--;else if(l[d]===a[h])o[h]=z(s[d],n[h]),se(t,s[f],s[d]),d--,h++;else if(c===void 0&&(c=Ye(a,h,p),u=Ye(l,f,d)),c.has(l[f]))if(c.has(l[d])){const g=u.get(a[h]),b=g!==void 0?s[g]:null;if(b===null){const y=se(t,s[f]);z(y,n[h]),o[h]=y}else o[h]=z(b,n[h]),se(t,s[f],b),s[g]=null;h++}else we(s[d]),d--;else we(s[f]),f++;for(;h<=p;){const g=se(t,o[p+1]);z(g,n[h]),o[h++]=g}for(;f<=d;){const g=s[f++];g!==null&&we(g)}return this.dt=a,Zt(t,o),Kt}}),yt=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
details {
  width: 100%;
}
`,vt=`
* {
  font-family: Roboto, sans-serif;
}

${rr}
${ir}
${sr}
${nr}

ul {
  padding-left: 0;
  margin-top: 0;
}
li {
  list-style: none;
}
li span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
li label {
  display: flex;
  align-items: center;
}
details summary > * {
  display: inline;
}
details summary {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0002;
  padding: .5rem 0;
}

details > summary::-webkit-details-marker {
  display: none;
}

.title {
  font-size: small;
  align-items: center;
}
details summary .title {
  display: flex;
  font-weight: 500;
}
details.details-filter summary::after,
details.details-results summary::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  height: 24px;
  width: 24px;
}
details.details-filter summary::after {
  position: absolute;
  right: 8px;
  transform: rotate(90deg);
}
details[open] summary::before {
  transform: rotate(90deg);
}
details[open] summary::after {
  transform: rotate(270deg);
}
eox-itemfilter-expandcontainer {
  max-height: 200px;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
}
[data-type=filter] .title,
details summary {
  text-transform: capitalize;
}
li,
label,
details,
input[type="checkbox"],
input[type="radio"] {
  cursor: pointer;
}
input[type="checkbox"],
input[type="radio"] {
  margin: 0;
}
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 5px 7px;
  border-radius: 4px;
  border: 1px solid #0004;
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
ul li {
  padding-left: 0;
}
eox-itemfilter-expandcontainer ul li,
details ul li {
  padding: 0.2rem;
}
li.highlighted {
  background: #00417011;
}
section {
  position: relative;
}
button#filter-reset {
  position: absolute;
  top: 4px;
  right: 0;
  text-indent: -9999px;
  line-height: 0;
}
button#filter-reset:after {
  content: "Reset";
  text-indent: 0px;
  line-height: initial;
}
.scroll {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00417044;
  padding: 0 12px;
  height: 20px;
  border-radius: 10px;
  color: #004170;
  font-weight: 500;
  margin-left: 9px;
}
eox-itemfilter-range {
  display: flex;
  align-items: center;
  padding: .5rem 0;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before {
  margin-right: .5rem;
}
.range-after {
  margin-left: .5rem;
}
`;var or=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,De=(t,e,r,i)=>{for(var s=i>1?void 0:i?lr(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&or(e,r,s),s};let de=class extends U{handleDetailsToggle(t){this.dispatchEvent(new CustomEvent("details-toggled",{detail:t,bubbles:!0,composed:!0}))}render(){return w`
      <style>
        ${yt}
        ${!this.unstyled&&vt}
      </style>
      <details
        @toggle="${this.handleDetailsToggle}"
        class="details-filter"
        part="details-filter"
        open=${this.filterObject.expanded||L}
      >
        <summary>
          <span
            class="title"
            style="${!this.filterObject.title&&"text-transform: capitalize"}"
          >
            ${this.filterObject.title||this.filterObject.key||"Filter"}
          </span>
        </summary>
        <div class="scroll">
          <slot name="filter"></slot>
        </div>
      </details>
    `}};De([k({attribute:!1})],de.prototype,"filterObject",2);De([k()],de.prototype,"unstyled",2);de=De([H("eox-itemfilter-expandcontainer")],de);var cr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,bt=(t,e,r,i)=>{for(var s=i>1?void 0:i?ur(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&cr(e,r,s),s};let $e=class extends U{reset(){this.renderRoot.querySelectorAll("input[type='checkbox']").forEach(t=>{t instanceof HTMLInputElement&&(t.checked=!1)});for(const t in this.filterObject.state)this.filterObject.state[t]=!1;delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return w`
      <ul>
        ${Z(Object.keys(this.filterObject.state).sort((t,e)=>t.localeCompare(e)),t=>w`
            <li class=${this.filterObject.state[t]?"highlighted":L}>
              <label>
                <input
                  data-cy="multiselect-checkbox"
                  name="selection"
                  type="checkbox"
                  class="multiselect-checkbox"
                  id=${t}
                  checked="${this.filterObject.state[t]||L}"
                  @click=${()=>{this.filterObject.state[t]=!this.filterObject.state[t],this.filterObject.dirty=!0,this.dispatchEvent(new CustomEvent("filter")),this.requestUpdate()}}
                />
                <span class="title">${t}</span>
              </label>
            </li>
          `)}
      </ul>
    `}};bt([k()],$e.prototype,"filterObject",2);$e=bt([H("eox-itemfilter-multiselect")],$e);var fr="Expected a function",Ze=0/0,hr="[object Symbol]",dr=/^\s+|\s+$/g,pr=/^[-+]0x[0-9a-f]+$/i,mr=/^0b[01]+$/i,gr=/^0o[0-7]+$/i,yr=parseInt,vr=typeof ce=="object"&&ce&&ce.Object===Object&&ce,br=typeof self=="object"&&self&&self.Object===Object&&self,xr=vr||br||Function("return this")(),wr=Object.prototype,Er=wr.toString,Mr=Math.max,Or=Math.min,Me=function(){return xr.Date.now()};function $r(t,e,r){var i,s,n,a,l,o,c=0,u=!1,f=!1,d=!0;if(typeof t!="function")throw new TypeError(fr);e=et(e)||0,Ae(r)&&(u=!!r.leading,f="maxWait"in r,n=f?Mr(et(r.maxWait)||0,e):n,d="trailing"in r?!!r.trailing:d);function h(v){var x=i,P=s;return i=s=void 0,c=v,a=t.apply(P,x),a}function p(v){return c=v,l=setTimeout(y,e),u?h(v):a}function g(v){var x=v-o,P=v-c,T=e-x;return f?Or(T,n-P):T}function b(v){var x=v-o,P=v-c;return o===void 0||x>=e||x<0||f&&P>=n}function y(){var v=Me();if(b(v))return O(v);l=setTimeout(y,g(v))}function O(v){return l=void 0,d&&i?h(v):(i=s=void 0,a)}function E(){l!==void 0&&clearTimeout(l),c=0,i=o=s=l=void 0}function $(){return l===void 0?a:O(Me())}function A(){var v=Me(),x=b(v);if(i=arguments,s=this,o=v,x){if(l===void 0)return p(o);if(f)return l=setTimeout(y,e),h(o)}return l===void 0&&(l=setTimeout(y,e)),a}return A.cancel=E,A.flush=$,A}function Ae(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Ar(t){return!!t&&typeof t=="object"}function Pr(t){return typeof t=="symbol"||Ar(t)&&Er.call(t)==hr}function et(t){if(typeof t=="number")return t;if(Pr(t))return Ze;if(Ae(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Ae(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(dr,"");var r=mr.test(t);return r||gr.test(t)?yr(t.slice(2),r?2:8):pr.test(t)?Ze:+t}var Sr=$r;const xt=gt(Sr);var _r=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,wt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Cr(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&_r(e,r,s),s};let Pe=class extends U{constructor(){super(...arguments),this.inputHandler=t=>{const[e,r]=t.detail.values;(e!==this.filterObject.state.min||r!=this.filterObject.state.max)&&([this.filterObject.state.min,this.filterObject.state.max]=[e,r],this.filterObject.dirty=!0),this.dispatchEvent(new CustomEvent("filter")),this.requestUpdate()},this.debouncedInputHandler=xt(this.inputHandler,0,{leading:!0})}reset(){this.filterObject.state.min=this.filterObject.min,this.filterObject.state.max=this.filterObject.max,delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return w`
      <div class="range-before">
        ${this.filterObject.format==="date"?he.unix(this.filterObject.state.min):this.filterObject.state.min}
      </div>
      <tc-range-slider
        min="${this.filterObject.min}"
        max="${this.filterObject.max}"
        value1="${this.filterObject.state.min}"
        value2="${this.filterObject.state.max}"
        step="1"
        @change="${this.debouncedInputHandler}"
      ></tc-range-slider>
      <div class="range-after">
        ${this.filterObject.format==="date"?he.unix(this.filterObject.state.max):this.filterObject.state.max}
      </div>
    `}};wt([k()],Pe.prototype,"filterObject",2);Pe=wt([H("eox-itemfilter-range")],Pe);var kr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,Et=(t,e,r,i)=>{for(var s=i>1?void 0:i?Tr(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&kr(e,r,s),s};let Se=class extends U{reset(){this.renderRoot.querySelectorAll("input[type='radio']").forEach(t=>{t instanceof HTMLInputElement&&(t.checked=!1)});for(const t in this.filterObject.state)this.filterObject.state[t]=!1;delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return w`
      <ul>
        ${Z(Object.keys(this.filterObject.state).sort((t,e)=>t.localeCompare(e)),t=>w`
            <li class=${this.filterObject.state[t]?"highlighted":L}>
              <label>
                <input
                  name="selection"
                  type="radio"
                  class="select-radio"
                  id=${t}
                  checked="${this.filterObject.state[t]||L}"
                  @click=${()=>{for(const e in this.filterObject.state)this.filterObject.state[e]=e===t;this.filterObject.dirty=!0,this.dispatchEvent(new CustomEvent("filter")),this.requestUpdate()}}
                />
                <span class="title">${t}</span>
              </label>
            </li>
          `)}
      </ul>
    `}};Et([k()],Se.prototype,"filterObject",2);Se=Et([H("eox-itemfilter-select")],Se);var M=63710088e-1,Be={centimeters:M*100,centimetres:M*100,degrees:M/111325,feet:M*3.28084,inches:M*39.37,kilometers:M/1e3,kilometres:M/1e3,meters:M,metres:M,miles:M/1609.344,millimeters:M*1e3,millimetres:M*1e3,nauticalmiles:M/1852,radians:1,yards:M*1.0936},Ir={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:1/1e3,kilometres:1/1e3,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/M,yards:1.0936133},_e={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046};function C(t,e,r){r===void 0&&(r={});var i={type:"Feature"};return(r.id===0||r.id)&&(i.id=r.id),r.bbox&&(i.bbox=r.bbox),i.properties=e||{},i.geometry=t,i}function Lr(t,e,r){switch(t){case"Point":return N(e).geometry;case"LineString":return R(e).geometry;case"Polygon":return qe(e).geometry;case"MultiPoint":return Mt(e).geometry;case"MultiLineString":return Ge(e).geometry;case"MultiPolygon":return Ot(e).geometry;default:throw new Error(t+" is invalid")}}function N(t,e,r){if(r===void 0&&(r={}),!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!pe(t[0])||!pe(t[1]))throw new Error("coordinates must contain numbers");var i={type:"Point",coordinates:t};return C(i,e,r)}function Rr(t,e,r){return r===void 0&&(r={}),W(t.map(function(i){return N(i,e)}),r)}function qe(t,e,r){r===void 0&&(r={});for(var i=0,s=t;i<s.length;i++){var n=s[i];if(n.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var a=0;a<n[n.length-1].length;a++)if(n[n.length-1][a]!==n[0][a])throw new Error("First and last Position are not equivalent.")}var l={type:"Polygon",coordinates:t};return C(l,e,r)}function jr(t,e,r){return r===void 0&&(r={}),W(t.map(function(i){return qe(i,e)}),r)}function R(t,e,r){if(r===void 0&&(r={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");var i={type:"LineString",coordinates:t};return C(i,e,r)}function Fr(t,e,r){return r===void 0&&(r={}),W(t.map(function(i){return R(i,e)}),r)}function W(t,e){e===void 0&&(e={});var r={type:"FeatureCollection"};return e.id&&(r.id=e.id),e.bbox&&(r.bbox=e.bbox),r.features=t,r}function Ge(t,e,r){r===void 0&&(r={});var i={type:"MultiLineString",coordinates:t};return C(i,e,r)}function Mt(t,e,r){r===void 0&&(r={});var i={type:"MultiPoint",coordinates:t};return C(i,e,r)}function Ot(t,e,r){r===void 0&&(r={});var i={type:"MultiPolygon",coordinates:t};return C(i,e,r)}function Nr(t,e,r){r===void 0&&(r={});var i={type:"GeometryCollection",geometries:t};return C(i,e,r)}function Dr(t,e){if(e===void 0&&(e=0),e&&!(e>=0))throw new Error("precision must be a positive number");var r=Math.pow(10,e||0);return Math.round(t*r)/r}function $t(t,e){e===void 0&&(e="kilometers");var r=Be[e];if(!r)throw new Error(e+" units is invalid");return t*r}function We(t,e){e===void 0&&(e="kilometers");var r=Be[e];if(!r)throw new Error(e+" units is invalid");return t/r}function Br(t,e){return At(We(t,e))}function qr(t){var e=t%360;return e<0&&(e+=360),e}function At(t){var e=t%(2*Math.PI);return e*180/Math.PI}function Gr(t){var e=t%360;return e*Math.PI/180}function Wr(t,e,r){if(e===void 0&&(e="kilometers"),r===void 0&&(r="kilometers"),!(t>=0))throw new Error("length must be a positive number");return $t(We(t,e),r)}function Hr(t,e,r){if(e===void 0&&(e="meters"),r===void 0&&(r="kilometers"),!(t>=0))throw new Error("area must be a positive number");var i=_e[e];if(!i)throw new Error("invalid original units");var s=_e[r];if(!s)throw new Error("invalid final units");return t/i*s}function pe(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}function He(t){return!!t&&t.constructor===Object}function Vr(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(t.length!==4&&t.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach(function(e){if(!pe(e))throw new Error("bbox must only contain numbers")})}function zr(t){if(!t)throw new Error("id is required");if(["string","number"].indexOf(typeof t)===-1)throw new Error("id must be a number or a string")}const Qr=Object.freeze(Object.defineProperty({__proto__:null,areaFactors:_e,bearingToAzimuth:qr,convertArea:Hr,convertLength:Wr,degreesToRadians:Gr,earthRadius:M,factors:Be,feature:C,featureCollection:W,geometry:Lr,geometryCollection:Nr,isNumber:pe,isObject:He,lengthToDegrees:Br,lengthToRadians:We,lineString:R,lineStrings:Fr,multiLineString:Ge,multiPoint:Mt,multiPolygon:Ot,point:N,points:Rr,polygon:qe,polygons:jr,radiansToDegrees:At,radiansToLength:$t,round:Dr,unitsFactors:Ir,validateBBox:Vr,validateId:zr},Symbol.toStringTag,{value:"Module"}));function Pt(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return t.geometry.coordinates;if(t.type==="Point")return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function ee(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function te(t){return t.type==="Feature"?t.geometry:t}function _(t,e,r){if(r===void 0&&(r={}),!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");var i=Pt(t),s=te(e),n=s.type,a=e.bbox,l=s.coordinates;if(a&&Kr(i,a)===!1)return!1;n==="Polygon"&&(l=[l]);for(var o=!1,c=0;c<l.length&&!o;c++)if(tt(i,l[c][0],r.ignoreBoundary)){for(var u=!1,f=1;f<l[c].length&&!u;)tt(i,l[c][f],!r.ignoreBoundary)&&(u=!0),f++;u||(o=!0)}return o}function tt(t,e,r){var i=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var s=0,n=e.length-1;s<e.length;n=s++){var a=e[s][0],l=e[s][1],o=e[n][0],c=e[n][1],u=t[1]*(a-o)+l*(o-t[0])+c*(t[0]-a)===0&&(a-t[0])*(o-t[0])<=0&&(l-t[1])*(c-t[1])<=0;if(u)return!r;var f=l>t[1]!=c>t[1]&&t[0]<(o-a)*(t[1]-l)/(c-l)+a;f&&(i=!i)}return i}function Kr(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}function re(t,e,r){if(t!==null)for(var i,s,n,a,l,o,c,u=0,f=0,d,h=t.type,p=h==="FeatureCollection",g=h==="Feature",b=p?t.features.length:1,y=0;y<b;y++){c=p?t.features[y].geometry:g?t.geometry:t,d=c?c.type==="GeometryCollection":!1,l=d?c.geometries.length:1;for(var O=0;O<l;O++){var E=0,$=0;if(a=d?c.geometries[O]:c,a!==null){o=a.coordinates;var A=a.type;switch(u=r&&(A==="Polygon"||A==="MultiPolygon")?1:0,A){case null:break;case"Point":if(e(o,f,y,E,$)===!1)return!1;f++,E++;break;case"LineString":case"MultiPoint":for(i=0;i<o.length;i++){if(e(o[i],f,y,E,$)===!1)return!1;f++,A==="MultiPoint"&&E++}A==="LineString"&&E++;break;case"Polygon":case"MultiLineString":for(i=0;i<o.length;i++){for(s=0;s<o[i].length-u;s++){if(e(o[i][s],f,y,E,$)===!1)return!1;f++}A==="MultiLineString"&&E++,A==="Polygon"&&$++}A==="Polygon"&&E++;break;case"MultiPolygon":for(i=0;i<o.length;i++){for($=0,s=0;s<o[i].length;s++){for(n=0;n<o[i][s].length-u;n++){if(e(o[i][s][n],f,y,E,$)===!1)return!1;f++}$++}E++}break;case"GeometryCollection":for(i=0;i<a.geometries.length;i++)if(re(a.geometries[i],e,r)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Ur(t,e,r,i){var s=r;return re(t,function(n,a,l,o,c){a===0&&r===void 0?s=n:s=e(s,n,a,l,o,c)},i),s}function St(t,e){var r;switch(t.type){case"FeatureCollection":for(r=0;r<t.features.length&&e(t.features[r].properties,r)!==!1;r++);break;case"Feature":e(t.properties,0);break}}function Jr(t,e,r){var i=r;return St(t,function(s,n){n===0&&r===void 0?i=s:i=e(i,s,n)}),i}function me(t,e){if(t.type==="Feature")e(t,0);else if(t.type==="FeatureCollection")for(var r=0;r<t.features.length&&e(t.features[r],r)!==!1;r++);}function Xr(t,e,r){var i=r;return me(t,function(s,n){n===0&&r===void 0?i=s:i=e(i,s,n)}),i}function Yr(t){var e=[];return re(t,function(r){e.push(r)}),e}function Ve(t,e){var r,i,s,n,a,l,o,c,u,f,d=0,h=t.type==="FeatureCollection",p=t.type==="Feature",g=h?t.features.length:1;for(r=0;r<g;r++){for(l=h?t.features[r].geometry:p?t.geometry:t,c=h?t.features[r].properties:p?t.properties:{},u=h?t.features[r].bbox:p?t.bbox:void 0,f=h?t.features[r].id:p?t.id:void 0,o=l?l.type==="GeometryCollection":!1,a=o?l.geometries.length:1,s=0;s<a;s++){if(n=o?l.geometries[s]:l,n===null){if(e(null,d,c,u,f)===!1)return!1;continue}switch(n.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(n,d,c,u,f)===!1)return!1;break}case"GeometryCollection":{for(i=0;i<n.geometries.length;i++)if(e(n.geometries[i],d,c,u,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}d++}}function Zr(t,e,r){var i=r;return Ve(t,function(s,n,a,l,o){n===0&&r===void 0?i=s:i=e(i,s,n,a,l,o)}),i}function B(t,e){Ve(t,function(r,i,s,n,a){var l=r===null?null:r.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(C(r,s,{bbox:n,id:a}),i,0)===!1?!1:void 0}var o;switch(l){case"MultiPoint":o="Point";break;case"MultiLineString":o="LineString";break;case"MultiPolygon":o="Polygon";break}for(var c=0;c<r.coordinates.length;c++){var u=r.coordinates[c],f={type:o,coordinates:u};if(e(C(f,s),i,c)===!1)return!1}})}function ei(t,e,r){var i=r;return B(t,function(s,n,a){n===0&&a===0&&r===void 0?i=s:i=e(i,s,n,a)}),i}function _t(t,e){B(t,function(r,i,s){var n=0;if(r.geometry){var a=r.geometry.type;if(!(a==="Point"||a==="MultiPoint")){var l,o=0,c=0,u=0;if(re(r,function(f,d,h,p,g){if(l===void 0||i>o||p>c||g>u){l=f,o=i,c=p,u=g,n=0;return}var b=R([l,f],r.properties);if(e(b,i,s,g,n)===!1)return!1;n++,l=f})===!1)return!1}}})}function ti(t,e,r){var i=r,s=!1;return _t(t,function(n,a,l,o,c){s===!1&&r===void 0?i=n:i=e(i,n,a,l,o,c),s=!0}),i}function Ct(t,e){if(!t)throw new Error("geojson is required");B(t,function(r,i,s){if(r.geometry!==null){var n=r.geometry.type,a=r.geometry.coordinates;switch(n){case"LineString":if(e(r,i,s,0,0)===!1)return!1;break;case"Polygon":for(var l=0;l<a.length;l++)if(e(R(a[l],r.properties),i,s,l)===!1)return!1;break}}})}function ri(t,e,r){var i=r;return Ct(t,function(s,n,a,l){n===0&&r===void 0?i=s:i=e(i,s,n,a,l)}),i}function ii(t,e){if(e=e||{},!He(e))throw new Error("options is invalid");var r=e.featureIndex||0,i=e.multiFeatureIndex||0,s=e.geometryIndex||0,n=e.segmentIndex||0,a=e.properties,l;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),a=a||t.features[r].properties,l=t.features[r].geometry;break;case"Feature":a=a||t.properties,l=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=t;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var o=l.coordinates;switch(l.type){case"Point":case"MultiPoint":return null;case"LineString":return n<0&&(n=o.length+n-1),R([o[n],o[n+1]],a,e);case"Polygon":return s<0&&(s=o.length+s),n<0&&(n=o[s].length+n-1),R([o[s][n],o[s][n+1]],a,e);case"MultiLineString":return i<0&&(i=o.length+i),n<0&&(n=o[i].length+n-1),R([o[i][n],o[i][n+1]],a,e);case"MultiPolygon":return i<0&&(i=o.length+i),s<0&&(s=o[i].length+s),n<0&&(n=o[i][s].length-n-1),R([o[i][s][n],o[i][s][n+1]],a,e)}throw new Error("geojson is invalid")}function si(t,e){if(e=e||{},!He(e))throw new Error("options is invalid");var r=e.featureIndex||0,i=e.multiFeatureIndex||0,s=e.geometryIndex||0,n=e.coordIndex||0,a=e.properties,l;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),a=a||t.features[r].properties,l=t.features[r].geometry;break;case"Feature":a=a||t.properties,l=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=t;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var o=l.coordinates;switch(l.type){case"Point":return N(o,a,e);case"MultiPoint":return i<0&&(i=o.length+i),N(o[i],a,e);case"LineString":return n<0&&(n=o.length+n),N(o[n],a,e);case"Polygon":return s<0&&(s=o.length+s),n<0&&(n=o[s].length+n),N(o[s][n],a,e);case"MultiLineString":return i<0&&(i=o.length+i),n<0&&(n=o[i].length+n),N(o[i][n],a,e);case"MultiPolygon":return i<0&&(i=o.length+i),s<0&&(s=o[i].length+s),n<0&&(n=o[i][s].length-n),N(o[i][s][n],a,e)}throw new Error("geojson is invalid")}const ni=Object.freeze(Object.defineProperty({__proto__:null,coordAll:Yr,coordEach:re,coordReduce:Ur,featureEach:me,featureReduce:Xr,findPoint:si,findSegment:ii,flattenEach:B,flattenReduce:ei,geomEach:Ve,geomReduce:Zr,lineEach:Ct,lineReduce:ri,propEach:St,propReduce:Jr,segmentEach:_t,segmentReduce:ti},Symbol.toStringTag,{value:"Module"}));function rt(t){if(!t)throw new Error("geojson is required");var e=[];return B(t,function(r){ai(r,e)}),W(e)}function ai(t,e){var r=[],i=t.geometry;if(i!==null){switch(i.type){case"Polygon":r=ee(i);break;case"LineString":r=[ee(i)]}r.forEach(function(s){var n=oi(s,t.properties);n.forEach(function(a){a.id=e.length,e.push(a)})})}}function oi(t,e){var r=[];return t.reduce(function(i,s){var n=R([i,s],e);return n.bbox=li(i,s),r.push(n),s}),r}function li(t,e){var r=t[0],i=t[1],s=e[0],n=e[1],a=r<s?r:s,l=i<n?i:n,o=r>s?r:s,c=i>n?i:n;return[a,l,o,c]}var ze={exports:{}};const ci=be(er),ui=be(Qr),fi=be(ni);function K(t){var e=[1/0,1/0,-1/0,-1/0];return re(t,function(r){e[0]>r[0]&&(e[0]=r[0]),e[1]>r[1]&&(e[1]=r[1]),e[2]<r[0]&&(e[2]=r[0]),e[3]<r[1]&&(e[3]=r[1])}),e}K.default=K;const hi=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),di=be(hi);var F=ci,kt=ui,Tt=fi,Y=di.default,pi=Tt.featureEach;Tt.coordEach;kt.polygon;var it=kt.featureCollection;function It(t){var e=new F(t);return e.insert=function(r){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:Y(r),F.prototype.insert.call(this,r)},e.load=function(r){var i=[];return Array.isArray(r)?r.forEach(function(s){if(s.type!=="Feature")throw new Error("invalid features");s.bbox=s.bbox?s.bbox:Y(s),i.push(s)}):pi(r,function(s){if(s.type!=="Feature")throw new Error("invalid features");s.bbox=s.bbox?s.bbox:Y(s),i.push(s)}),F.prototype.load.call(this,i)},e.remove=function(r,i){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:Y(r),F.prototype.remove.call(this,r,i)},e.clear=function(){return F.prototype.clear.call(this)},e.search=function(r){var i=F.prototype.search.call(this,this.toBBox(r));return it(i)},e.collides=function(r){return F.prototype.collides.call(this,this.toBBox(r))},e.all=function(){var r=F.prototype.all.call(this);return it(r)},e.toJSON=function(){return F.prototype.toJSON.call(this)},e.fromJSON=function(r){return F.prototype.fromJSON.call(this,r)},e.toBBox=function(r){var i;if(r.bbox)i=r.bbox;else if(Array.isArray(r)&&r.length===4)i=r;else if(Array.isArray(r)&&r.length===6)i=[r[0],r[1],r[3],r[4]];else if(r.type==="Feature")i=Y(r);else if(r.type==="FeatureCollection")i=Y(r);else throw new Error("invalid geojson");return{minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}},e}ze.exports=It;ze.exports.default=It;var mi=ze.exports;const gi=gt(mi);function Qe(t,e){var r={},i=[];if(t.type==="LineString"&&(t=C(t)),e.type==="LineString"&&(e=C(e)),t.type==="Feature"&&e.type==="Feature"&&t.geometry!==null&&e.geometry!==null&&t.geometry.type==="LineString"&&e.geometry.type==="LineString"&&t.geometry.coordinates.length===2&&e.geometry.coordinates.length===2){var s=st(t,e);return s&&i.push(s),W(i)}var n=gi();return n.load(rt(e)),me(rt(t),function(a){me(n.search(a),function(l){var o=st(a,l);if(o){var c=ee(o).join(",");r[c]||(r[c]=!0,i.push(o))}})}),W(i)}function st(t,e){var r=ee(t),i=ee(e);if(r.length!==2)throw new Error("<intersects> line1 must only contain 2 coordinates");if(i.length!==2)throw new Error("<intersects> line2 must only contain 2 coordinates");var s=r[0][0],n=r[0][1],a=r[1][0],l=r[1][1],o=i[0][0],c=i[0][1],u=i[1][0],f=i[1][1],d=(f-c)*(a-s)-(u-o)*(l-n),h=(u-o)*(n-c)-(f-c)*(s-o),p=(a-s)*(n-c)-(l-n)*(s-o);if(d===0)return null;var g=h/d,b=p/d;if(g>=0&&g<=1&&b>=0&&b<=1){var y=s+g*(a-s),O=n+g*(l-n);return N([y,O])}return null}function Ce(t,e){e===void 0&&(e={});var r=te(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),r.type){case"Polygon":return yi(r,e);case"MultiPolygon":return vi(r,e);default:throw new Error("invalid poly")}}function yi(t,e){e===void 0&&(e={});var r=te(t),i=r.coordinates,s=e.properties?e.properties:t.type==="Feature"?t.properties:{};return Lt(i,s)}function vi(t,e){e===void 0&&(e={});var r=te(t),i=r.coordinates,s=e.properties?e.properties:t.type==="Feature"?t.properties:{},n=[];return i.forEach(function(a){n.push(Lt(a,s))}),W(n)}function Lt(t,e){return t.length>1?Ge(t,e):R(t[0],e)}function bi(t,e){var r=!0;return B(t,function(i){B(e,function(s){if(r===!1)return!1;r=xi(i.geometry,s.geometry)})}),r}function xi(t,e){switch(t.type){case"Point":switch(e.type){case"Point":return!Oi(t.coordinates,e.coordinates);case"LineString":return!nt(e,t);case"Polygon":return!_(t,e)}break;case"LineString":switch(e.type){case"Point":return!nt(t,e);case"LineString":return!wi(t,e);case"Polygon":return!at(e,t)}break;case"Polygon":switch(e.type){case"Point":return!_(e,t);case"LineString":return!at(t,e);case"Polygon":return!Ei(e,t)}}return!1}function nt(t,e){for(var r=0;r<t.coordinates.length-1;r++)if(Mi(t.coordinates[r],t.coordinates[r+1],e.coordinates))return!0;return!1}function wi(t,e){var r=Qe(t,e);return r.features.length>0}function at(t,e){for(var r=0,i=e.coordinates;r<i.length;r++){var s=i[r];if(_(s,t))return!0}var n=Qe(e,Ce(t));return n.features.length>0}function Ei(t,e){for(var r=0,i=t.coordinates[0];r<i.length;r++){var s=i[r];if(_(s,e))return!0}for(var n=0,a=e.coordinates[0];n<a.length;n++){var l=a[n];if(_(l,t))return!0}var o=Qe(Ce(t),Ce(e));return o.features.length>0}function Mi(t,e,r){var i=r[0]-t[0],s=r[1]-t[1],n=e[0]-t[0],a=e[1]-t[1],l=i*a-s*n;return l!==0?!1:Math.abs(n)>=Math.abs(a)?n>0?t[0]<=r[0]&&r[0]<=e[0]:e[0]<=r[0]&&r[0]<=t[0]:a>0?t[1]<=r[1]&&r[1]<=e[1]:e[1]<=r[1]&&r[1]<=t[1]}function Oi(t,e){return t[0]===e[0]&&t[1]===e[1]}function $i(t,e){var r=!1;return B(t,function(i){B(e,function(s){if(r===!0)return!0;r=!bi(i.geometry,s.geometry)})}),r}function ge(t,e,r){r===void 0&&(r={});for(var i=Pt(t),s=ee(e),n=0;n<s.length-1;n++){var a=!1;if(r.ignoreEndVertices&&(n===0&&(a="start"),n===s.length-2&&(a="end"),n===0&&n+1===s.length-1&&(a="both")),Ai(s[n],s[n+1],i,a,typeof r.epsilon>"u"?null:r.epsilon))return!0}return!1}function Ai(t,e,r,i,s){var n=r[0],a=r[1],l=t[0],o=t[1],c=e[0],u=e[1],f=r[0]-l,d=r[1]-o,h=c-l,p=u-o,g=f*p-d*h;if(s!==null){if(Math.abs(g)>s)return!1}else if(g!==0)return!1;if(i){if(i==="start")return Math.abs(h)>=Math.abs(p)?h>0?l<n&&n<=c:c<=n&&n<l:p>0?o<a&&a<=u:u<=a&&a<o;if(i==="end")return Math.abs(h)>=Math.abs(p)?h>0?l<=n&&n<c:c<n&&n<=l:p>0?o<=a&&a<u:u<a&&a<=o;if(i==="both")return Math.abs(h)>=Math.abs(p)?h>0?l<n&&n<c:c<n&&n<l:p>0?o<a&&a<u:u<a&&a<o}else return Math.abs(h)>=Math.abs(p)?h>0?l<=n&&n<=c:c<=n&&n<=l:p>0?o<=a&&a<=u:u<=a&&a<=o;return!1}function Pi(t,e){var r=te(t),i=te(e),s=r.type,n=i.type;switch(s){case"Point":switch(n){case"MultiPoint":return Si(r,i);case"LineString":return ge(r,i,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return _(r,i,{ignoreBoundary:!0});default:throw new Error("feature2 "+n+" geometry not supported")}case"MultiPoint":switch(n){case"MultiPoint":return _i(r,i);case"LineString":return Ci(r,i);case"Polygon":case"MultiPolygon":return ki(r,i);default:throw new Error("feature2 "+n+" geometry not supported")}case"LineString":switch(n){case"LineString":return Ti(r,i);case"Polygon":case"MultiPolygon":return Ii(r,i);default:throw new Error("feature2 "+n+" geometry not supported")}case"Polygon":switch(n){case"Polygon":case"MultiPolygon":return Li(r,i);default:throw new Error("feature2 "+n+" geometry not supported")}default:throw new Error("feature1 "+s+" geometry not supported")}}function Si(t,e){var r,i=!1;for(r=0;r<e.coordinates.length;r++)if(jt(e.coordinates[r],t.coordinates)){i=!0;break}return i}function _i(t,e){for(var r=0;r<t.coordinates.length;r++){for(var i=!1,s=0;s<e.coordinates.length;s++)jt(t.coordinates[r],e.coordinates[s])&&(i=!0);if(!i)return!1}return!0}function Ci(t,e){for(var r=!1,i=0;i<t.coordinates.length;i++){if(!ge(t.coordinates[i],e))return!1;r||(r=ge(t.coordinates[i],e,{ignoreEndVertices:!0}))}return r}function ki(t,e){for(var r=!0,i=!1,s=0;s<t.coordinates.length;s++){if(i=_(t.coordinates[1],e),!i){r=!1;break}i=_(t.coordinates[1],e,{ignoreBoundary:!0})}return r&&i}function Ti(t,e){for(var r=0;r<t.coordinates.length;r++)if(!ge(t.coordinates[r],e))return!1;return!0}function Ii(t,e){var r=K(e),i=K(t);if(!Rt(r,i))return!1;for(var s=!1,n=0;n<t.coordinates.length-1;n++){if(!_(t.coordinates[n],e))return!1;if(s||(s=_(t.coordinates[n],e,{ignoreBoundary:!0})),!s){var a=Ri(t.coordinates[n],t.coordinates[n+1]);s=_(a,e,{ignoreBoundary:!0})}}return s}function Li(t,e){var r=K(t),i=K(e);if(!Rt(i,r))return!1;for(var s=0;s<t.coordinates[0].length;s++)if(!_(t.coordinates[0][s],e))return!1;return!0}function Rt(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function jt(t,e){return t[0]===e[0]&&t[1]===e[1]}function Ri(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var ji=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,ae=(t,e,r,i)=>{for(var s=i>1?void 0:i?Fi(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ji(e,r,s),s};const Ni=(t,e)=>e?$i(t,e):!0,Di=(t,e)=>e?Pi(t,e):!0;let ke=class extends U{reset(){this.filterObject.state.geometry=void 0;const t=this.renderRoot.querySelector("eox-itemfilter-spatial-filter");delete this.filterObject.dirty,t.reset(),this.requestUpdate()}createRenderRoot(){return this}render(){var t;return w`
      <form style="display: inline">
      ${Z(["intersects","within"],e=>w`
          <label>
            <input
              type="radio"
              name="mode"
              .checked="${this.filterObject.state.mode===e||L}
              "
              value="${e}"
              @click="${()=>{this.filterObject.state.mode=e;const r=new CustomEvent("filter",{detail:{[this.filterObject.key]:{}}});this.dispatchEvent(r)}}"
            />
            <small>${e} filter geometry</small>
          </label>
        `)}
      </form>
      <eox-itemfilter-spatial-filter
        exportparts="map: spatial-filter-map"
        .geometry=${(t=this.filterObject.state)==null?void 0:t.geometry}
        @filter="${e=>{this.filterObject.state.geometry=e.detail.geometry,this.filterObject.dirty=!0,this.dispatchEvent(new CustomEvent("filter"))}}"
      ></eox-itemfilter-spatial>
    `}};ae([k()],ke.prototype,"filterObject",2);ke=ae([H("eox-itemfilter-spatial")],ke);let ye=class extends U{render(){return w`<eox-map part="map" style="height: 400px"></eox-map>`}firstUpdated(){this.setup()}setup(){const t=[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...this.geometry&&{format:"GeoJSON"},...this.geometry&&{url:this.createFeatureUrl(this.geometry)}},zIndex:1},{type:"Tile",source:{type:"XYZ",url:"https://s2maps-tiles.eu/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}];this.eoxMap=this.renderRoot.querySelector("eox-map"),setTimeout(()=>{this.eoxMap.setLayers(t),this.eoxMap.addDraw("draw",{id:"drawInteraction",type:"Polygon"});const e=r=>{const i=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:r.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});this.dispatchEvent(i)};this.eoxMap.interactions.drawInteraction.on("drawend",r=>{e(r.feature),this.eoxMap.removeInteraction("drawInteraction")}),this.eoxMap.interactions.drawInteraction_modify.on("modifyend",r=>{e(r.features.getArray()[0])})})}createFeatureUrl(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}reset(){var e;const t=this.eoxMap.getLayerById("draw").getSource();((e=t.getFeatures())==null?void 0:e.length)>0&&(t.clear(),this.eoxMap.removeInteraction("drawInteraction_modify"),this.setup())}};ae([k()],ye.prototype,"geometry",2);ae([ne()],ye.prototype,"eoxMap",2);ye=ae([H("eox-itemfilter-spatial-filter")],ye);var Bi=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,Ft=(t,e,r,i)=>{for(var s=i>1?void 0:i?qi(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Bi(e,r,s),s};let Te=class extends U{constructor(){super(...arguments),this.inputHandler=()=>{const t=this.renderRoot.querySelector("input[type='text']");this.filterObject.keys.forEach(e=>{this.filterObject.state[e]=t.value}),this.filterObject.dirty=!0,this.dispatchEvent(new CustomEvent("filter"))},this.debouncedInputHandler=xt(this.inputHandler,500,{leading:!0})}reset(){const t=this.renderRoot.querySelector("input[type='text']");t.value="",this.filterObject.keys.forEach(e=>{this.filterObject.state[e]=void 0}),delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return w`
      <input
        type="text"
        placeholder="Type something..."
        data-cy="search"
        part="input-search"
        value="${Object.values(this.filterObject.state)[0]}"
        @input="${this.debouncedInputHandler}"
      />
    `}};Ft([k()],Te.prototype,"filterObject",2);Te=Ft([H("eox-itemfilter-text")],Te);function q(t){return Array.isArray?Array.isArray(t):Bt(t)==="[object Array]"}const Gi=1/0;function Wi(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Gi?"-0":e}function Hi(t){return t==null?"":Wi(t)}function D(t){return typeof t=="string"}function Nt(t){return typeof t=="number"}function Vi(t){return t===!0||t===!1||zi(t)&&Bt(t)=="[object Boolean]"}function Dt(t){return typeof t=="object"}function zi(t){return Dt(t)&&t!==null}function S(t){return t!=null}function Oe(t){return!t.trim().length}function Bt(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Qi="Incorrect 'index' type",Ki=t=>`Invalid value for key ${t}`,Ui=t=>`Pattern length exceeds max of ${t}.`,Ji=t=>`Missing ${t} property in key`,Xi=t=>`Property 'weight' in key '${t}' must be a positive integer`,ot=Object.prototype.hasOwnProperty;class Yi{constructor(e){this._keys=[],this._keyMap={};let r=0;e.forEach(i=>{let s=qt(i);this._keys.push(s),this._keyMap[s.id]=s,r+=s.weight}),this._keys.forEach(i=>{i.weight/=r})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function qt(t){let e=null,r=null,i=null,s=1,n=null;if(D(t)||q(t))i=t,e=lt(t),r=Ie(t);else{if(!ot.call(t,"name"))throw new Error(Ji("name"));const a=t.name;if(i=a,ot.call(t,"weight")&&(s=t.weight,s<=0))throw new Error(Xi(a));e=lt(a),r=Ie(a),n=t.getFn}return{path:e,id:r,weight:s,src:i,getFn:n}}function lt(t){return q(t)?t:t.split(".")}function Ie(t){return q(t)?t.join("."):t}function Zi(t,e){let r=[],i=!1;const s=(n,a,l)=>{if(S(n))if(!a[l])r.push(n);else{let o=a[l];const c=n[o];if(!S(c))return;if(l===a.length-1&&(D(c)||Nt(c)||Vi(c)))r.push(Hi(c));else if(q(c)){i=!0;for(let u=0,f=c.length;u<f;u+=1)s(c[u],a,l+1)}else a.length&&s(c,a,l+1)}};return s(t,D(e)?e.split("."):e,0),i?r:r[0]}const es={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ts={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},rs={location:0,threshold:.6,distance:100},is={useExtendedSearch:!1,getFn:Zi,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var m={...ts,...es,...rs,...is};const ss=/[^ ]+/g;function ns(t=1,e=3){const r=new Map,i=Math.pow(10,e);return{get(s){const n=s.match(ss).length;if(r.has(n))return r.get(n);const a=1/Math.pow(n,.5*t),l=parseFloat(Math.round(a*i)/i);return r.set(n,l),l},clear(){r.clear()}}}class Ke{constructor({getFn:e=m.getFn,fieldNormWeight:r=m.fieldNormWeight}={}){this.norm=ns(r,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((r,i)=>{this._keysMap[r.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,D(this.docs[0])?this.docs.forEach((e,r)=>{this._addString(e,r)}):this.docs.forEach((e,r)=>{this._addObject(e,r)}),this.norm.clear())}add(e){const r=this.size();D(e)?this._addString(e,r):this._addObject(e,r)}removeAt(e){this.records.splice(e,1);for(let r=e,i=this.size();r<i;r+=1)this.records[r].i-=1}getValueForItemAtKeyId(e,r){return e[this._keysMap[r]]}size(){return this.records.length}_addString(e,r){if(!S(e)||Oe(e))return;let i={v:e,i:r,n:this.norm.get(e)};this.records.push(i)}_addObject(e,r){let i={i:r,$:{}};this.keys.forEach((s,n)=>{let a=s.getFn?s.getFn(e):this.getFn(e,s.path);if(S(a)){if(q(a)){let l=[];const o=[{nestedArrIndex:-1,value:a}];for(;o.length;){const{nestedArrIndex:c,value:u}=o.pop();if(S(u))if(D(u)&&!Oe(u)){let f={v:u,i:c,n:this.norm.get(u)};l.push(f)}else q(u)&&u.forEach((f,d)=>{o.push({nestedArrIndex:d,value:f})})}i.$[n]=l}else if(D(a)&&!Oe(a)){let l={v:a,n:this.norm.get(a)};i.$[n]=l}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function Gt(t,e,{getFn:r=m.getFn,fieldNormWeight:i=m.fieldNormWeight}={}){const s=new Ke({getFn:r,fieldNormWeight:i});return s.setKeys(t.map(qt)),s.setSources(e),s.create(),s}function as(t,{getFn:e=m.getFn,fieldNormWeight:r=m.fieldNormWeight}={}){const{keys:i,records:s}=t,n=new Ke({getFn:e,fieldNormWeight:r});return n.setKeys(i),n.setIndexRecords(s),n}function ue(t,{errors:e=0,currentLocation:r=0,expectedLocation:i=0,distance:s=m.distance,ignoreLocation:n=m.ignoreLocation}={}){const a=e/t.length;if(n)return a;const l=Math.abs(i-r);return s?a+l/s:l?1:a}function os(t=[],e=m.minMatchCharLength){let r=[],i=-1,s=-1,n=0;for(let a=t.length;n<a;n+=1){let l=t[n];l&&i===-1?i=n:!l&&i!==-1&&(s=n-1,s-i+1>=e&&r.push([i,s]),i=-1)}return t[n-1]&&n-i>=e&&r.push([i,n-1]),r}const Q=32;function ls(t,e,r,{location:i=m.location,distance:s=m.distance,threshold:n=m.threshold,findAllMatches:a=m.findAllMatches,minMatchCharLength:l=m.minMatchCharLength,includeMatches:o=m.includeMatches,ignoreLocation:c=m.ignoreLocation}={}){if(e.length>Q)throw new Error(Ui(Q));const u=e.length,f=t.length,d=Math.max(0,Math.min(i,f));let h=n,p=d;const g=l>1||o,b=g?Array(f):[];let y;for(;(y=t.indexOf(e,p))>-1;){let x=ue(e,{currentLocation:y,expectedLocation:d,distance:s,ignoreLocation:c});if(h=Math.min(x,h),p=y+u,g){let P=0;for(;P<u;)b[y+P]=1,P+=1}}p=-1;let O=[],E=1,$=u+f;const A=1<<u-1;for(let x=0;x<u;x+=1){let P=0,T=$;for(;P<T;)ue(e,{errors:x,currentLocation:d+T,expectedLocation:d,distance:s,ignoreLocation:c})<=h?P=T:$=T,T=Math.floor(($-P)/2+P);$=T;let Ue=Math.max(1,d-T+1),xe=a?f:Math.min(d+T,f)+u,J=Array(xe+2);J[xe+1]=(1<<x)-1;for(let I=xe;I>=Ue;I-=1){let oe=I-1,Je=r[t.charAt(oe)];if(g&&(b[oe]=+!!Je),J[I]=(J[I+1]<<1|1)&Je,x&&(J[I]|=(O[I+1]|O[I])<<1|1|O[I+1]),J[I]&A&&(E=ue(e,{errors:x,currentLocation:oe,expectedLocation:d,distance:s,ignoreLocation:c}),E<=h)){if(h=E,p=oe,p<=d)break;Ue=Math.max(1,2*d-p)}}if(ue(e,{errors:x+1,currentLocation:d,expectedLocation:d,distance:s,ignoreLocation:c})>h)break;O=J}const v={isMatch:p>=0,score:Math.max(.001,E)};if(g){const x=os(b,l);x.length?o&&(v.indices=x):v.isMatch=!1}return v}function cs(t){let e={};for(let r=0,i=t.length;r<i;r+=1){const s=t.charAt(r);e[s]=(e[s]||0)|1<<i-r-1}return e}class Wt{constructor(e,{location:r=m.location,threshold:i=m.threshold,distance:s=m.distance,includeMatches:n=m.includeMatches,findAllMatches:a=m.findAllMatches,minMatchCharLength:l=m.minMatchCharLength,isCaseSensitive:o=m.isCaseSensitive,ignoreLocation:c=m.ignoreLocation}={}){if(this.options={location:r,threshold:i,distance:s,includeMatches:n,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:o,ignoreLocation:c},this.pattern=o?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(d,h)=>{this.chunks.push({pattern:d,alphabet:cs(d),startIndex:h})},f=this.pattern.length;if(f>Q){let d=0;const h=f%Q,p=f-h;for(;d<p;)u(this.pattern.substr(d,Q),d),d+=Q;if(h){const g=f-Q;u(this.pattern.substr(g),g)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:r,includeMatches:i}=this.options;if(r||(e=e.toLowerCase()),this.pattern===e){let p={isMatch:!0,score:0};return i&&(p.indices=[[0,e.length-1]]),p}const{location:s,distance:n,threshold:a,findAllMatches:l,minMatchCharLength:o,ignoreLocation:c}=this.options;let u=[],f=0,d=!1;this.chunks.forEach(({pattern:p,alphabet:g,startIndex:b})=>{const{isMatch:y,score:O,indices:E}=ls(e,p,g,{location:s+b,distance:n,threshold:a,findAllMatches:l,minMatchCharLength:o,includeMatches:i,ignoreLocation:c});y&&(d=!0),f+=O,y&&E&&(u=[...u,...E])});let h={isMatch:d,score:d?f/this.chunks.length:1};return d&&i&&(h.indices=u),h}}class V{constructor(e){this.pattern=e}static isMultiMatch(e){return ct(e,this.multiRegex)}static isSingleMatch(e){return ct(e,this.singleRegex)}search(){}}function ct(t,e){const r=t.match(e);return r?r[1]:null}class us extends V{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const r=e===this.pattern;return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class fs extends V{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const i=e.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,e.length-1]}}}class hs extends V{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const r=e.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class ds extends V{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const r=!e.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class ps extends V{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const r=e.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ms extends V{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const r=!e.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Ht extends V{constructor(e,{location:r=m.location,threshold:i=m.threshold,distance:s=m.distance,includeMatches:n=m.includeMatches,findAllMatches:a=m.findAllMatches,minMatchCharLength:l=m.minMatchCharLength,isCaseSensitive:o=m.isCaseSensitive,ignoreLocation:c=m.ignoreLocation}={}){super(e),this._bitapSearch=new Wt(e,{location:r,threshold:i,distance:s,includeMatches:n,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:o,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Vt extends V{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let r=0,i;const s=[],n=this.pattern.length;for(;(i=e.indexOf(this.pattern,r))>-1;)r=i+n,s.push([i,r-1]);const a=!!s.length;return{isMatch:a,score:a?0:1,indices:s}}}const Le=[us,Vt,hs,ds,ms,ps,fs,Ht],ut=Le.length,gs=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ys="|";function vs(t,e={}){return t.split(ys).map(r=>{let i=r.trim().split(gs).filter(n=>n&&!!n.trim()),s=[];for(let n=0,a=i.length;n<a;n+=1){const l=i[n];let o=!1,c=-1;for(;!o&&++c<ut;){const u=Le[c];let f=u.isMultiMatch(l);f&&(s.push(new u(f,e)),o=!0)}if(!o)for(c=-1;++c<ut;){const u=Le[c];let f=u.isSingleMatch(l);if(f){s.push(new u(f,e));break}}}return s})}const bs=new Set([Ht.type,Vt.type]);class xs{constructor(e,{isCaseSensitive:r=m.isCaseSensitive,includeMatches:i=m.includeMatches,minMatchCharLength:s=m.minMatchCharLength,ignoreLocation:n=m.ignoreLocation,findAllMatches:a=m.findAllMatches,location:l=m.location,threshold:o=m.threshold,distance:c=m.distance}={}){this.query=null,this.options={isCaseSensitive:r,includeMatches:i,minMatchCharLength:s,findAllMatches:a,ignoreLocation:n,location:l,threshold:o,distance:c},this.pattern=r?e:e.toLowerCase(),this.query=vs(this.pattern,this.options)}static condition(e,r){return r.useExtendedSearch}searchIn(e){const r=this.query;if(!r)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:s}=this.options;e=s?e:e.toLowerCase();let n=0,a=[],l=0;for(let o=0,c=r.length;o<c;o+=1){const u=r[o];a.length=0,n=0;for(let f=0,d=u.length;f<d;f+=1){const h=u[f],{isMatch:p,indices:g,score:b}=h.search(e);if(p){if(n+=1,l+=b,i){const y=h.constructor.type;bs.has(y)?a=[...a,...g]:a.push(g)}}else{l=0,n=0,a.length=0;break}}if(n){let f={isMatch:!0,score:l/n};return i&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const Re=[];function ws(...t){Re.push(...t)}function je(t,e){for(let r=0,i=Re.length;r<i;r+=1){let s=Re[r];if(s.condition(t,e))return new s(t,e)}return new Wt(t,e)}const ve={AND:"$and",OR:"$or"},Fe={PATH:"$path",PATTERN:"$val"},Ne=t=>!!(t[ve.AND]||t[ve.OR]),Es=t=>!!t[Fe.PATH],Ms=t=>!q(t)&&Dt(t)&&!Ne(t),ft=t=>({[ve.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function zt(t,e,{auto:r=!0}={}){const i=s=>{let n=Object.keys(s);const a=Es(s);if(!a&&n.length>1&&!Ne(s))return i(ft(s));if(Ms(s)){const o=a?s[Fe.PATH]:n[0],c=a?s[Fe.PATTERN]:s[o];if(!D(c))throw new Error(Ki(o));const u={keyId:Ie(o),pattern:c};return r&&(u.searcher=je(c,e)),u}let l={children:[],operator:n[0]};return n.forEach(o=>{const c=s[o];q(c)&&c.forEach(u=>{l.children.push(i(u))})}),l};return Ne(t)||(t=ft(t)),i(t)}function Os(t,{ignoreFieldNorm:e=m.ignoreFieldNorm}){t.forEach(r=>{let i=1;r.matches.forEach(({key:s,norm:n,score:a})=>{const l=s?s.weight:null;i*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:n))}),r.score=i})}function $s(t,e){const r=t.matches;e.matches=[],S(r)&&r.forEach(i=>{if(!S(i.indices)||!i.indices.length)return;const{indices:s,value:n}=i;let a={indices:s,value:n};i.key&&(a.key=i.key.src),i.idx>-1&&(a.refIndex=i.idx),e.matches.push(a)})}function As(t,e){e.score=t.score}function Ps(t,e,{includeMatches:r=m.includeMatches,includeScore:i=m.includeScore}={}){const s=[];return r&&s.push($s),i&&s.push(As),t.map(n=>{const{idx:a}=n,l={item:e[a],refIndex:a};return s.length&&s.forEach(o=>{o(n,l)}),l})}class ie{constructor(e,r={},i){this.options={...m,...r},this.options.useExtendedSearch,this._keyStore=new Yi(this.options.keys),this.setCollection(e,i)}setCollection(e,r){if(this._docs=e,r&&!(r instanceof Ke))throw new Error(Qi);this._myIndex=r||Gt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){S(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const r=[];for(let i=0,s=this._docs.length;i<s;i+=1){const n=this._docs[i];e(n,i)&&(this.removeAt(i),i-=1,s-=1,r.push(n))}return r}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:r=-1}={}){const{includeMatches:i,includeScore:s,shouldSort:n,sortFn:a,ignoreFieldNorm:l}=this.options;let o=D(e)?D(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Os(o,{ignoreFieldNorm:l}),n&&o.sort(a),Nt(r)&&r>-1&&(o=o.slice(0,r)),Ps(o,this._docs,{includeMatches:i,includeScore:s})}_searchStringList(e){const r=je(e,this.options),{records:i}=this._myIndex,s=[];return i.forEach(({v:n,i:a,n:l})=>{if(!S(n))return;const{isMatch:o,score:c,indices:u}=r.searchIn(n);o&&s.push({item:n,idx:a,matches:[{score:c,value:n,norm:l,indices:u}]})}),s}_searchLogical(e){const r=zt(e,this.options),i=(l,o,c)=>{if(!l.children){const{keyId:f,searcher:d}=l,h=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(o,f),searcher:d});return h&&h.length?[{idx:c,item:o,matches:h}]:[]}const u=[];for(let f=0,d=l.children.length;f<d;f+=1){const h=l.children[f],p=i(h,o,c);if(p.length)u.push(...p);else if(l.operator===ve.AND)return[]}return u},s=this._myIndex.records,n={},a=[];return s.forEach(({$:l,i:o})=>{if(S(l)){let c=i(r,l,o);c.length&&(n[o]||(n[o]={idx:o,item:l,matches:[]},a.push(n[o])),c.forEach(({matches:u})=>{n[o].matches.push(...u)}))}}),a}_searchObjectList(e){const r=je(e,this.options),{keys:i,records:s}=this._myIndex,n=[];return s.forEach(({$:a,i:l})=>{if(!S(a))return;let o=[];i.forEach((c,u)=>{o.push(...this._findMatches({key:c,value:a[u],searcher:r}))}),o.length&&n.push({idx:l,item:a,matches:o})}),n}_findMatches({key:e,value:r,searcher:i}){if(!S(r))return[];let s=[];if(q(r))r.forEach(({v:n,i:a,n:l})=>{if(!S(n))return;const{isMatch:o,score:c,indices:u}=i.searchIn(n);o&&s.push({score:c,key:e,value:n,idx:a,norm:l,indices:u})});else{const{v:n,n:a}=r,{isMatch:l,score:o,indices:c}=i.searchIn(n);l&&s.push({score:o,key:e,value:n,norm:a,indices:c})}return s}}ie.version="7.0.0";ie.createIndex=Gt;ie.parseIndex=as;ie.config=m;ie.parseQuery=zt;ws(xs);const Ss=(t,e="highlight",r="title")=>{const i=(n,a,l)=>{const o=a.split(".");let c;for(c=0;c<o.length-1;c++)n=n[o[c]];n[o[c]]=l},s=(n,a=[])=>{let l="",o=0;return a.forEach(c=>{const u=c[1]+1;l+=[n.substring(o,c[0]),`<mark class="${e}">`,n.substring(c[0],u),"</mark>"].join(""),o=u}),l+=n.substring(o),l};return t.filter(({matches:n})=>n&&n.length).map(({item:n,matches:a})=>{const l={};for(const[o,c]of Object.entries(n))l[o]=c;return a.forEach(o=>{o.key===r&&i(l,o.key,s(o.value,o.indices))}),l})};let Qt;const _s=(t,e)=>{Qt=new ie(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},Cs=async(t,e,r)=>{const i=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[o,c])=>{const u="$or",f=[],d=(h,p)=>{const g={};c.type==="text"?g[h]=`${p}`:g[o]=`="${h}"`,f.push(g)};return Object.entries(c.state).filter(([,h])=>h).forEach(([h,p])=>d(h,p)),f.length>0&&l.push({[u]:f}),l},[]);let s;if(!(i.length>0)&&r.matchAllWhenEmpty!==!1)s=t;else{const l={$and:[...i]},o=Qt.search(l);s=r.enableHighlighting?Ss(o,"highlight",r.titleProperty):o.map(c=>c.item)}const n=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[o,c])=>(l[o]={min:c.state.min,max:c.state.max,format:c.format},l),{});if(Object.keys(n).length>0){const l=[];for(let o=0;o<s.length;o++){const c={};for(const[u,f]of Object.entries(n)){const d=h=>f.format==="date"?he(h).unix():h;Object.prototype.hasOwnProperty.call(s[o],u)?Array.isArray(s[o][u])?c[u]=n[u].min<=d(s[o][u][1])&&d(s[o][u][0])<=n[u].max:d(s[o][u])>=n[u].min&&d(s[o][u])<=n[u].max?c[u]=!0:c[u]=!1:c[u]=!0}Object.values(c).every(u=>!!u)&&l.push(s[o])}s=[...l]}const a=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[o,c])=>(l[o]={geometry:c.state.geometry,mode:c.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let o=0;o<s.length;o++){const c={};for(const u of Object.keys(a)){const f=a[u].mode||"within";Object.prototype.hasOwnProperty.call(s[o],u)&&(f==="within"?Di(s[o][u],a[u].geometry):Ni(s[o][u],a[u].geometry))?c[u]=!0:c[u]=!1}Object.values(c).every(u=>!!u)&&l.push(s[o])}s=[...l]}return s},ks=async(t,e,r)=>(await(await fetch(`${r.externalFilter(t,e)}`)).json()).features;var Ts=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,G=(t,e,r,i)=>{for(var s=i>1?void 0:i?Is(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Ts(e,r,s),s};class ht{constructor(){this.aggregateResults=void 0,this.enableHighlighting=!1,this.filterProperties=[],this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.onFilter=()=>{},this.onSelect=()=>{},this.showResults=!0,this.titleProperty="title",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0}}let j=class extends tr{constructor(){super(...arguments),this._resultAggregation=[],this.filters={},this.items=[],this._config=new ht,this.apply=t=>{this.items=t.map((r,i)=>({id:`item-${i}`,...r})),this._config.filterProperties.length&&this._config.filterProperties.forEach(r=>{const i={},s=n=>r.format==="date"?he(n).unix():parseInt(n);this.items.forEach(n=>{if(r.type==="range"){if(Array.isArray(n[r.key])){const a=[s(n[r.key][0]),s(n[r.key][1])];i.min=i.min!==void 0?Math.min(i.min,a[0]):a[0],i.max=i.max!==void 0?Math.max(i.max,a[1]):a[1]}else{const a=s(n[r.key]);i.min=i.min!==void 0?Math.min(i.min,a):a,i.max=i.max!==void 0?Math.max(i.max,a):a}return}Array.isArray(n[r.key])?n[r.key].forEach(a=>{i[a]=void 0}):r.type==="spatial"?(i.geometry=void 0,i.mode=r.mode||"intersects"):i[n[r.key]]=void 0}),this.filters[r.key||r.keys.join("|")]={...r,type:r.type||"multiselect",state:{...i,...r.state},...r.state&&{dirty:!0},...r.type==="range"&&{min:i.min,max:i.max,format:r.format}}}),this._config.matchAllWhenEmpty!==!1&&(this.results=this.sortResults(this.items),this.requestUpdate()),this._config.aggregateResults&&(this._resultAggregation=[...new Set(this.items.reduce((r,i)=>r.concat(i[this._config.aggregateResults]),[]))].sort((r,i)=>r.localeCompare(i)));const e=[];Object.values(this.filters).forEach(r=>{r.type==="text"?r.keys.forEach(i=>{e.includes(i)||e.push(i)}):(r.type==="select"||r.type==="multiselect")&&(e.includes(r.key)||e.push(r.key))}),_s(this.items,{keys:e,...this._config.fuseConfig}),this.search()}}set config(t){const e=this._config;this._config={...new ht,...t},this.requestUpdate("config",e)}get config(){return this._config}async search(){let t;this.config.externalFilter?t=await ks(this.items,this.filters,this._config):t=await Cs(this.items,this.filters,this._config),this.results=this.sortResults(t),this._config.onFilter(this.results,this.filters)}aggregateResults(t,e){return t.filter(r=>{const i=r[this._config.aggregateResults];let s;return this.filters[this._config.aggregateResults]&&(s=Object.keys(this.filters[this._config.aggregateResults]).filter(a=>this.filters[this._config.aggregateResults].state[a])),(s!=null&&s.length?s.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}sortResults(t){return[...t].sort((e,r)=>e[this._config.titleProperty].localeCompare(r[this._config.titleProperty]))}resetFilters(){this.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{t.reset()}),this.search()}toggleAccordion(t){let e;if(t.detail?e=t.detail.target:e=t.target,e.classList.contains("details-filter")){if(!e.open||this.config.expandMultipleFilters)return;this.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const i=r.shadowRoot.querySelector(".details-filter");i&&i!==e&&i.removeAttribute("open")})}else{if(!e.open||this.config.expandMultipleResults)return;this.shadowRoot.querySelectorAll("details").forEach(r=>{r!==e&&r.removeAttribute("open")})}}render(){return w`
      <style>
        ${yt}
        ${!this.unstyled&&vt}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        @submit="${t=>t.preventDefault()}"
      >
        ${X(this._config.filterProperties.length,()=>w`
            <section class="${this.config.inlineMode?"inline":L}">
              ${X(!this.config.inlineMode,()=>w`
                    <slot name="filterstitle"
                      ><h4 style="margin-top: 8px">Filters</h4></slot
                    >
                  `)}
              <ul id="filters">
                ${Z(Object.values(this.filters),t=>Ee`
                  <li>
                    ${t.featured?Ee`
                          <eox-itemfilter-${le(t.type)}
                            slot="filter"
                            data-type="filter"
                            .filterObject=${t}
                            @filter="${()=>this.search()}"
                          ></eox-itemfilter-${le(t.type)}>
                        `:Ee`
                          <eox-itemfilter-expandcontainer
                            .filterObject=${t}
                            .unstyled=${this.unstyled}
                            @details-toggled=${this.toggleAccordion}
                          >
                            <eox-itemfilter-${le(t.type)}
                              slot="filter"
                              data-type="filter"
                              data-filter="${t.key}"
                              .filterObject=${t}
                              @filter="${()=>this.search()}"
                            ></eox-itemfilter-${le(t.type)}>
                          </eox-itemfilter-expandcontainer>
                      `}
                  </li>
                `)}
              </ul>
              ${X(this._config.filterProperties&&Object.values(this.filters).map(t=>t.dirty).filter(t=>t).length>0,()=>w`
                  <button
                    id="filter-reset"
                    class="outline small"
                    data-cy="filter-reset"
                    @click=${()=>this.resetFilters()}
                  >
                    Reset filters
                  </a>
                `)}
            </section>
          `)}
        ${X(this.config.showResults&&this.results,()=>w`
            <section id="section-results">
              <div>
                <slot name="resultstitle"
                  ><h4 style="margin-top: 8px">Results</h4></slot
                >
              </div>
              <div id="container-results" class="scroll">
                ${this.results.length<1?w` <small class="no-results">No matching items</small> `:L}
                <ul id="results" part="results">
                  ${this._config.aggregateResults?Z(this._resultAggregation.filter(t=>this.aggregateResults(this.results,t).length),t=>w`<details
                          class="details-results"
                          @toggle=${this.toggleAccordion}
                          open=${this._config.expandResults||L}
                        >
                          <summary>
                            <span class="title">
                              ${t}
                              <span class="count"
                                >${this.aggregateResults(this.results,t).length}</span
                              >
                            </span>
                          </summary>
                          <ul>
                            ${ar(this.aggregateResults(this.results,t),e=>e.id,e=>{var r,i;return w`
                                <li
                                  class=${((r=this.selectedResult)==null?void 0:r[this._config.titleProperty])===e[this._config.titleProperty]?"highlighted":L}
                                >
                                  <label>
                                    <input
                                      data-cy="result-radio"
                                      type="radio"
                                      class="result-radio"
                                      name="result"
                                      id="${e.id}"
                                      checked=${((i=this.selectedResult)==null?void 0:i[this._config.titleProperty])===e[this._config.titleProperty]||L}
                                      @click=${()=>{this.selectedResult=e,this._config.onSelect(e)}}
                                    />
                                    ${X(this.hasTemplate("result"),()=>this.renderTemplate("result",e,`result-${e.id}`),()=>w`
                                        <span class="title"
                                          >${Xe(e[this._config.titleProperty])}</span
                                        >
                                      `)}
                                  </label>
                                </li>
                              `})}
                          </ul>
                        </details>`):Z(this.results,t=>w`<li part="result">
                            <label>
                              <input
                                type="radio"
                                name="result"
                                id="${t.id}"
                                @click=${()=>{this.selectedResult=t,this._config.onSelect(t)}}
                              />
                              ${X(this.hasTemplate("result"),()=>this.renderTemplate("result",t,`result-${t.id}`),()=>w`
                                  <span class="title"
                                    >${Xe(t[this._config.titleProperty])}</span
                                  >
                                `)}
                            </label>
                          </li>`)}
                </ul>
              </div>
            </section>
          `)}
      </form>
    `}};G([ne()],j.prototype,"filters",2);G([ne()],j.prototype,"items",2);G([ne()],j.prototype,"results",2);G([ne()],j.prototype,"selectedResult",2);G([k({attribute:!1})],j.prototype,"config",1);G([k()],j.prototype,"apply",2);G([k({attribute:!1})],j.prototype,"styleOverride",2);G([k({type:Boolean})],j.prototype,"unstyled",2);j=G([H("eox-itemfilter")],j);const Ls=[{archived:!1,code:"E10a2",description:"Actively managed total area from Sentinel-2 data",indicator:"Actively managed total area from Sentinel-2 data",themes:["agriculture"],title:"White Asparagus area [%]",name:"Actively managed total area from Sentinel-2 data",year:2e3,likes:4,years:[2e3,2e3],timestamp:"2023-06-14T13:56:38+00:00",datetime:["2023-06-14T10:56:38+00:00","2023-06-14T22:56:38+00:00"],bbox:[-90,60,-20,82],geometry:{type:"Polygon",coordinates:[[[-90,60],[-20,60],[-20,82],[-90,82]]]}},{archived:!1,code:"E10a9",description:"Agricultural Workers",indicator:"Agricultural Workers",themes:["agriculture"],title:"Workers availability [nr]",name:"Agricultural Workers",year:2020,likes:46,years:[2007,2020],timestamp:"2023-06-13T13:56:38+00:00",datetime:["2023-06-13T10:56:38+00:00","2023-06-13T22:56:38+00:00"],bbox:[0,0,10,10],geometry:{type:"Polygon",coordinates:[[[0,0],[10,0],[10,10],[0,10]]]}},{archived:!1,code:"N1",description:"Air Quality",indicator:"Air Quality",themes:["air"],title:"Sea ice freeboard",name:"Sea ice freeboard",year:2023,likes:34,years:[2008,2023],timestamp:"2023-06-12T13:56:38+00:00",datetime:["2023-06-12T10:56:38+00:00","2023-06-12T22:56:38+00:00"],bbox:[-180,-80,180,-61],geometry:{type:"Polygon",coordinates:[[[-180,-80],[180,-80],[180,-61],[-180,-61]]]}},{archived:!1,code:"E13o",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (all) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2022,likes:177,years:[2021,2022],timestamp:"2023-06-11T13:56:38+00:00",datetime:["2023-06-11T10:56:38+00:00","2023-06-11T22:56:38+00:00"]},{archived:!1,code:"E13p",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (cargo) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2016,likes:0,years:[2005,2016],timestamp:"2023-06-10T13:56:38+00:00",datetime:["2023-06-10T10:56:38+00:00","2023-06-10T22:56:38+00:00"]},{archived:!1,code:"E13q",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (tanker) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2017,likes:0,years:[2006,2017],timestamp:"2023-06-09T13:56:38+00:00",datetime:["2023-06-09T10:56:38+00:00","2023-06-09T22:56:38+00:00"]},{archived:!1,code:"E13r",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (others) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2003,likes:2,years:[2001,2003],timestamp:"2023-06-08T13:56:38+00:00",datetime:["2023-06-08T10:56:38+00:00","2023-06-08T22:56:38+00:00"]},{archived:!1,code:"C1",description:"Boat traffic - NO2 level",indicator:"Boat traffic - NO2 level",themes:["economy","air"],title:"Ships - NO2 Correlation",indicatorOverwrite:"Ports and Shipping - impact on air quality",name:"Boat traffic - NO2 level",year:2020,likes:65,years:[2015,2020],timestamp:"2023-06-07T13:56:38+00:00",datetime:["2023-06-07T10:56:38+00:00","2023-06-07T22:56:38+00:00"]},{archived:!1,code:"CDS1",description:"C3S Data",indicator:"C3S Data",themes:["air"],title:"Temperature",name:"C3S Data",year:2021,likes:34,years:[2021,2021],timestamp:"2023-06-06T13:56:38+00:00",datetime:["2023-06-06T10:56:38+00:00","2023-06-06T22:56:38+00:00"]},{archived:!1,code:"N1a",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level PM2.5 (model)",name:"CAMS Air Quality",year:2023,likes:88,years:[2e3,2023],timestamp:"2023-06-05T13:56:38+00:00",datetime:["2023-06-05T10:56:38+00:00","2023-06-05T22:56:38+00:00"]},{archived:!1,code:"N1b",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level NO2 (model)",name:"CAMS Air Quality",year:2022,likes:77,years:[2019,2022],timestamp:"2023-06-04T13:56:38+00:00",datetime:["2023-06-04T10:56:38+00:00","2023-06-04T22:56:38+00:00"]},{archived:!1,code:"N1c",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level PM10 (model)",name:"CAMS Air Quality",year:2018,likes:23,years:[2014,2018],timestamp:"2023-06-03T13:56:38+00:00",datetime:["2023-06-03T10:56:38+00:00","2023-06-03T22:56:38+00:00"]},{archived:!1,code:"N1d",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level O3 (model)",name:"CAMS Air Quality",year:2018,likes:56,years:[2017,2018],timestamp:"2023-06-02T13:56:38+00:00",datetime:["2023-06-02T10:56:38+00:00","2023-06-02T22:56:38+00:00"]},{archived:!1,code:"E13e",description:"Cargo ships in port based on AIS data",indicator:"Cargo ships in port based on AIS data",themes:["economy"],title:"Cargo Ships [nr]",name:"Cargo ships in port based on AIS data",year:2019,likes:11,years:[2018,2019],timestamp:"2023-06-01T13:56:38+00:00",datetime:["2023-06-01T10:56:38+00:00","2023-06-01T22:56:38+00:00"]},{archived:!1,code:"E13n",description:"Changes in traffic based on mobile data",indicator:"Changes in traffic based on mobile data",themes:["economy"],title:"Trucks transiting ports [%]",name:"Changes in traffic based on mobile data",year:2017,likes:8,years:[2015,2017],timestamp:"2023-05-29T13:56:38+00:00",datetime:["2023-05-29T10:56:38+00:00","2023-05-29T22:56:38+00:00"]},{archived:!1,code:"N3c",description:"CMEMS product",indicator:"CMEMS product",themes:["water"],title:"CHL-a concentration (map, 1km)",name:"CMEMS product",year:2015,likes:37,years:[2014,2015],timestamp:"2023-05-28T13:56:38+00:00",datetime:["2023-05-28T10:56:38+00:00","2023-05-28T22:56:38+00:00"]},{archived:!1,code:"CV",description:"Covid-19 cases",indicator:"Covid-19 cases",themes:["health"],title:"Covid-19 cases",name:"Covid-19 cases",year:2013,likes:4,years:[2001,2013],timestamp:"2023-05-27T13:56:38+00:00",datetime:["2023-05-27T10:56:38+00:00","2023-05-27T22:56:38+00:00"]},{archived:!1,code:"OW",description:"Covid-19 vaccinations",indicator:"Covid-19 vaccinations",themes:["health"],title:"Covid-19 vaccinations",name:"Covid-19 vaccinations",year:2016,likes:39,years:[2015,2016],timestamp:"2023-05-26T13:56:38+00:00",datetime:["2023-05-26T10:56:38+00:00","2023-05-26T22:56:38+00:00"]},{archived:!1,code:"E3",description:"Crude Oil and other input materials",indicator:"Crude Oil and other input materials",themes:["economy"],title:"Raw Material Inventory",name:"Crude Oil and other input materials",year:2020,likes:28,years:[2014,2020],timestamp:"2023-05-25T13:56:38+00:00",datetime:["2023-05-25T10:56:38+00:00","2023-05-25T22:56:38+00:00"]},{archived:!1,code:"E13l",description:"Cruise ships in port based on AIS data",indicator:"Cruise ships in port based on AIS data",themes:["economy"],title:"Cruise Ships [nr]",name:"Cruise ships in port based on AIS data",year:1999,likes:17,years:[1998,1999],timestamp:"2023-05-24T13:56:38+00:00",datetime:["2023-05-24T10:56:38+00:00","2023-05-24T22:56:38+00:00"]}],Ks={title:"Elements/eox-itemfilter",tags:["autodocs"],component:"eox-itemfilter",render:t=>{const e=new j;return e.config=t,e.apply(Ls),e}},fe={args:{titleProperty:"title",filterProperties:[{keys:["title","themes"],title:"Search",type:"text",expanded:!0},{key:"themes",title:"Theme",type:"multiselect"},{key:"timestamp",type:"range",format:"date"},{key:"geometry",type:"spatial"}],aggregateResults:"themes",enableHighlighting:!0,onSelect:t=>{console.log(t)}}};var dt,pt,mt;fe.parameters={...fe.parameters,docs:{...(dt=fe.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    titleProperty: "title",
    filterProperties: [{
      keys: ["title", "themes"],
      title: "Search",
      type: "text",
      expanded: true
      // state: {
      //   title: "no2",
      //   themes: "no2",
      // },
    }, {
      key: "themes",
      title: "Theme",
      type: "multiselect"
      // state: {
      //   air: true,
      //   agriculture: true,
      // },
    }, {
      key: "timestamp",
      type: "range",
      format: "date"
      // state: {
      //   min: 1685232950,
      //   max: 1686454646,
      // },
    }, {
      key: "geometry",
      type: "spatial"
      // state: {
      //   mode: "within",
      //   geometry: {
      //     type: "Polygon",
      //     coordinates: [
      //       [
      //         [-97.71428571428572, 38.00407795331557],
      //         [-102.00000000000001, -40.329636215359066],
      //         [81.85714285714282, -47.42214099287611],
      //         [50.57142857142855, 51.0574434128921],
      //         [-97.71428571428572, 38.00407795331557],
      //       ],
      //     ],
      //   },
      // },
    }],

    aggregateResults: "themes",
    enableHighlighting: true,
    onSelect: item => {
      console.log(item);
    }
  }
}`,...(mt=(pt=fe.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};const Us=["Primary"];export{fe as Primary,Us as __namedExportsOrder,Ks as default};
//# sourceMappingURL=itemfilter.stories-e7cca685.js.map
