import{T as dr,s as de,x as L,A as Z}from"./lit-element-c29cbb6b.js";import{n as Y,e as ae,t as Se}from"./query-assigned-elements-bec7f9a4.js";import{e as pr,i as mr,t as gr,o as ye,n as me,a as gt}from"./unsafe-html-c0e6b744.js";import{m as yr,f as ue,c as Oe,p as He,a as vr}from"./directive-helpers-2720686e.js";import{n as We,o as Pe}from"./static-9a3d301b.js";import"./toolcool-range-slider.min-a799c142.js";import{c as Ee,g as st,a as Ne}from"./_commonjsHelpers-de833af9.js";import{r as br,T as xr}from"./templateElement-8d2f8dc8.js";import{b as wr}from"./button-f0c29825.js";import{c as $r,r as Mr,s as Or,l as Er}from"./slider-5ac648d2.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=(t,e,r)=>{const i=new Map;for(let n=e;n<=r;n++)i.set(t[n],n);return i},Sr=pr(class extends mr{constructor(t){if(super(t),t.type!==gr.CHILD)throw Error("repeat() can only be used in text expressions")}ct(t,e,r){let i;r===void 0?r=e:e!==void 0&&(i=e);const n=[],s=[];let a=0;for(const l of t)n[a]=i?i(l,a):a,s[a]=r(l,a),a++;return{values:s,keys:n}}render(t,e,r){return this.ct(t,e,r).values}update(t,[e,r,i]){var n;const s=yr(t),{values:a,keys:l}=this.ct(e,r,i);if(!Array.isArray(s))return this.ut=l,a;const o=(n=this.ut)!==null&&n!==void 0?n:this.ut=[],c=[];let u,f,d=0,h=s.length-1,p=0,x=a.length-1;for(;d<=h&&p<=x;)if(s[d]===null)d++;else if(s[h]===null)h--;else if(o[d]===l[p])c[p]=ue(s[d],a[p]),d++,p++;else if(o[h]===l[x])c[x]=ue(s[h],a[x]),h--,x--;else if(o[d]===l[x])c[x]=ue(s[d],a[x]),Oe(t,c[x+1],s[d]),d++,x--;else if(o[h]===l[p])c[p]=ue(s[h],a[p]),Oe(t,s[d],s[h]),h--,p++;else if(u===void 0&&(u=yt(l,p,x),f=yt(o,d,h)),u.has(o[d]))if(u.has(o[h])){const A=f.get(l[p]),S=A!==void 0?s[A]:null;if(S===null){const I=Oe(t,s[d]);ue(I,a[p]),c[p]=I}else c[p]=ue(S,a[p]),Oe(t,s[d],S),s[A]=null;p++}else He(s[h]),h--;else He(s[d]),d++;for(;p<=x;){const A=Oe(t,c[x+1]);ue(A,a[p]),c[p++]=A}for(;d<=h;){const A=s[d++];A!==null&&He(A)}return this.ut=l,vr(t,c),dr}});var Rt={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(Ee,function(){var r=1e3,i=6e4,n=36e5,s="millisecond",a="second",l="minute",o="hour",c="day",u="week",f="month",d="quarter",h="year",p="date",x="Invalid Date",A=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,S=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,I={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(v){var g=["th","st","nd","rd"],m=v%100;return"["+v+(g[(m-20)%10]||g[m]||g[0])+"]"}},P=function(v,g,m){var b=String(v);return!b||b.length>=g?v:""+Array(g+1-b.length).join(m)+v},D={s:P,z:function(v){var g=-v.utcOffset(),m=Math.abs(g),b=Math.floor(m/60),y=m%60;return(g<=0?"+":"-")+P(b,2,"0")+":"+P(y,2,"0")},m:function v(g,m){if(g.date()<m.date())return-v(m,g);var b=12*(m.year()-g.year())+(m.month()-g.month()),y=g.clone().add(b,f),$=m-y<0,M=g.clone().add(b+($?-1:1),f);return+(-(b+(m-y)/($?y-M:M-y))||0)},a:function(v){return v<0?Math.ceil(v)||0:Math.floor(v)},p:function(v){return{M:f,y:h,w:u,d:c,D:p,h:o,m:l,s:a,ms:s,Q:d}[v]||String(v||"").toLowerCase().replace(/s$/,"")},u:function(v){return v===void 0}},R="en",E={};E[R]=I;var k="$isDayjsObject",j=function(v){return v instanceof U||!(!v||!v[k])},N=function v(g,m,b){var y;if(!g)return R;if(typeof g=="string"){var $=g.toLowerCase();E[$]&&(y=$),m&&(E[$]=m,y=$);var M=g.split("-");if(!y&&M.length>1)return v(M[0])}else{var _=g.name;E[_]=g,y=_}return!b&&y&&(R=y),y||!b&&R},C=function(v,g){if(j(v))return v.clone();var m=typeof g=="object"?g:{};return m.date=v,m.args=arguments,new U(m)},O=D;O.l=N,O.i=j,O.w=function(v,g){return C(v,{locale:g.$L,utc:g.$u,x:g.$x,$offset:g.$offset})};var U=function(){function v(m){this.$L=N(m.locale,null,!0),this.parse(m),this.$x=this.$x||m.x||{},this[k]=!0}var g=v.prototype;return g.parse=function(m){this.$d=function(b){var y=b.date,$=b.utc;if(y===null)return new Date(NaN);if(O.u(y))return new Date;if(y instanceof Date)return new Date(y);if(typeof y=="string"&&!/Z$/i.test(y)){var M=y.match(A);if(M){var _=M[2]-1||0,T=(M[7]||"0").substring(0,3);return $?new Date(Date.UTC(M[1],_,M[3]||1,M[4]||0,M[5]||0,M[6]||0,T)):new Date(M[1],_,M[3]||1,M[4]||0,M[5]||0,M[6]||0,T)}}return new Date(y)}(m),this.init()},g.init=function(){var m=this.$d;this.$y=m.getFullYear(),this.$M=m.getMonth(),this.$D=m.getDate(),this.$W=m.getDay(),this.$H=m.getHours(),this.$m=m.getMinutes(),this.$s=m.getSeconds(),this.$ms=m.getMilliseconds()},g.$utils=function(){return O},g.isValid=function(){return this.$d.toString()!==x},g.isSame=function(m,b){var y=C(m);return this.startOf(b)<=y&&y<=this.endOf(b)},g.isAfter=function(m,b){return C(m)<this.startOf(b)},g.isBefore=function(m,b){return this.endOf(b)<C(m)},g.$g=function(m,b,y){return O.u(m)?this[b]:this.set(y,m)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(m,b){var y=this,$=!!O.u(b)||b,M=O.p(m),_=function(ce,W){var ne=O.w(y.$u?Date.UTC(y.$y,W,ce):new Date(y.$y,W,ce),y);return $?ne:ne.endOf(c)},T=function(ce,W){return O.w(y.toDate()[ce].apply(y.toDate("s"),($?[0,0,0,0]:[23,59,59,999]).slice(W)),y)},F=this.$W,B=this.$M,G=this.$D,pe="set"+(this.$u?"UTC":"");switch(M){case h:return $?_(1,0):_(31,11);case f:return $?_(1,B):_(0,B+1);case u:var le=this.$locale().weekStart||0,$e=(F<le?F+7:F)-le;return _($?G-$e:G+(6-$e),B);case c:case p:return T(pe+"Hours",0);case o:return T(pe+"Minutes",1);case l:return T(pe+"Seconds",2);case a:return T(pe+"Milliseconds",3);default:return this.clone()}},g.endOf=function(m){return this.startOf(m,!1)},g.$set=function(m,b){var y,$=O.p(m),M="set"+(this.$u?"UTC":""),_=(y={},y[c]=M+"Date",y[p]=M+"Date",y[f]=M+"Month",y[h]=M+"FullYear",y[o]=M+"Hours",y[l]=M+"Minutes",y[a]=M+"Seconds",y[s]=M+"Milliseconds",y)[$],T=$===c?this.$D+(b-this.$W):b;if($===f||$===h){var F=this.clone().set(p,1);F.$d[_](T),F.init(),this.$d=F.set(p,Math.min(this.$D,F.daysInMonth())).$d}else _&&this.$d[_](T);return this.init(),this},g.set=function(m,b){return this.clone().$set(m,b)},g.get=function(m){return this[O.p(m)]()},g.add=function(m,b){var y,$=this;m=Number(m);var M=O.p(b),_=function(B){var G=C($);return O.w(G.date(G.date()+Math.round(B*m)),$)};if(M===f)return this.set(f,this.$M+m);if(M===h)return this.set(h,this.$y+m);if(M===c)return _(1);if(M===u)return _(7);var T=(y={},y[l]=i,y[o]=n,y[a]=r,y)[M]||1,F=this.$d.getTime()+m*T;return O.w(F,this)},g.subtract=function(m,b){return this.add(-1*m,b)},g.format=function(m){var b=this,y=this.$locale();if(!this.isValid())return y.invalidDate||x;var $=m||"YYYY-MM-DDTHH:mm:ssZ",M=O.z(this),_=this.$H,T=this.$m,F=this.$M,B=y.weekdays,G=y.months,pe=y.meridiem,le=function(W,ne,Me,_e){return W&&(W[ne]||W(b,$))||Me[ne].slice(0,_e)},$e=function(W){return O.s(_%12||12,W,"0")},ce=pe||function(W,ne,Me){var _e=W<12?"AM":"PM";return Me?_e.toLowerCase():_e};return $.replace(S,function(W,ne){return ne||function(Me){switch(Me){case"YY":return String(b.$y).slice(-2);case"YYYY":return O.s(b.$y,4,"0");case"M":return F+1;case"MM":return O.s(F+1,2,"0");case"MMM":return le(y.monthsShort,F,G,3);case"MMMM":return le(G,F);case"D":return b.$D;case"DD":return O.s(b.$D,2,"0");case"d":return String(b.$W);case"dd":return le(y.weekdaysMin,b.$W,B,2);case"ddd":return le(y.weekdaysShort,b.$W,B,3);case"dddd":return B[b.$W];case"H":return String(_);case"HH":return O.s(_,2,"0");case"h":return $e(1);case"hh":return $e(2);case"a":return ce(_,T,!0);case"A":return ce(_,T,!1);case"m":return String(T);case"mm":return O.s(T,2,"0");case"s":return String(b.$s);case"ss":return O.s(b.$s,2,"0");case"SSS":return O.s(b.$ms,3,"0");case"Z":return M}return null}(W)||M.replace(":","")})},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(m,b,y){var $,M=this,_=O.p(b),T=C(m),F=(T.utcOffset()-this.utcOffset())*i,B=this-T,G=function(){return O.m(M,T)};switch(_){case h:$=G()/12;break;case f:$=G();break;case d:$=G()/3;break;case u:$=(B-F)/6048e5;break;case c:$=(B-F)/864e5;break;case o:$=B/n;break;case l:$=B/i;break;case a:$=B/r;break;default:$=B}return y?$:O.a($)},g.daysInMonth=function(){return this.endOf(f).$D},g.$locale=function(){return E[this.$L]},g.locale=function(m,b){if(!m)return this.$L;var y=this.clone(),$=N(m,b,!0);return $&&(y.$L=$),y},g.clone=function(){return O.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},v}(),Be=U.prototype;return C.prototype=Be,[["$ms",s],["$s",a],["$m",l],["$H",o],["$W",c],["$M",f],["$y",h],["$D",p]].forEach(function(v){Be[v[1]]=function(g){return this.$g(g,v[0],v[1])}}),C.extend=function(v,g){return v.$i||(v(g,U,C),v.$i=!0),C},C.locale=N,C.isDayjs=j,C.unix=function(v){return C(1e3*v)},C.en=E[R],C.Ls=E,C.p={},C})})(Rt);var Ar=Rt.exports;const Te=st(Ar),jt=`
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
`,Ft=`
* {
  font-family: Roboto, sans-serif;
}

${wr}
${$r}
${Mr}
${Or}

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
`;var _r=Object.defineProperty,Pr=Object.getOwnPropertyDescriptor,at=(t,e,r,i)=>{for(var n=i>1?void 0:i?Pr(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&_r(e,r,n),n};let Le=class extends de{handleDetailsToggle(t){this.dispatchEvent(new CustomEvent("details-toggled",{detail:t,bubbles:!0,composed:!0}))}render(){return L`
      <style>
        ${jt}
        ${!this.unstyled&&Ft}
      </style>
      <details
        @toggle="${this.handleDetailsToggle}"
        class="details-filter"
        part="details-filter"
        open=${this.filterObject.expanded||Z}
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
    `}};at([Y({attribute:!1})],Le.prototype,"filterObject",2);at([Y()],Le.prototype,"unstyled",2);Le=at([ae("eox-itemfilter-expandcontainer")],Le);var kr=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Dt=(t,e,r,i)=>{for(var n=i>1?void 0:i?Cr(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&kr(e,r,n),n};let Ve=class extends de{reset(){this.renderRoot.querySelectorAll("input[type='checkbox']").forEach(t=>{t instanceof HTMLInputElement&&(t.checked=!1)});for(const t in this.filterObject.state)this.filterObject.state[t]=!1;delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return L`
      <ul>
        ${ye(Object.keys(this.filterObject.state).sort((t,e)=>t.localeCompare(e)),t=>L`
            <li class=${this.filterObject.state[t]?"highlighted":Z}>
              <label>
                <input
                  data-cy="multiselect-checkbox"
                  name="selection"
                  type="checkbox"
                  class="multiselect-checkbox"
                  id=${t}
                  checked="${this.filterObject.state[t]||Z}"
                  @click=${()=>{this.filterObject.state[t]=!this.filterObject.state[t],this.filterObject.dirty=!0,this.dispatchEvent(new CustomEvent("filter")),this.requestUpdate()}}
                />
                <span class="title">${t}</span>
              </label>
            </li>
          `)}
      </ul>
    `}};Dt([Y()],Ve.prototype,"filterObject",2);Ve=Dt([ae("eox-itemfilter-multiselect")],Ve);var Tr="Expected a function",vt=0/0,Lr="[object Symbol]",Ir=/^\s+|\s+$/g,Rr=/^[-+]0x[0-9a-f]+$/i,jr=/^0b[01]+$/i,Fr=/^0o[0-7]+$/i,Dr=parseInt,Nr=typeof Ee=="object"&&Ee&&Ee.Object===Object&&Ee,Br=typeof self=="object"&&self&&self.Object===Object&&self,Hr=Nr||Br||Function("return this")(),Wr=Object.prototype,qr=Wr.toString,Gr=Math.max,Vr=Math.min,qe=function(){return Hr.Date.now()};function zr(t,e,r){var i,n,s,a,l,o,c=0,u=!1,f=!1,d=!0;if(typeof t!="function")throw new TypeError(Tr);e=bt(e)||0,ze(r)&&(u=!!r.leading,f="maxWait"in r,s=f?Gr(bt(r.maxWait)||0,e):s,d="trailing"in r?!!r.trailing:d);function h(E){var k=i,j=n;return i=n=void 0,c=E,a=t.apply(j,k),a}function p(E){return c=E,l=setTimeout(S,e),u?h(E):a}function x(E){var k=E-o,j=E-c,N=e-k;return f?Vr(N,s-j):N}function A(E){var k=E-o,j=E-c;return o===void 0||k>=e||k<0||f&&j>=s}function S(){var E=qe();if(A(E))return I(E);l=setTimeout(S,x(E))}function I(E){return l=void 0,d&&i?h(E):(i=n=void 0,a)}function P(){l!==void 0&&clearTimeout(l),c=0,i=o=n=l=void 0}function D(){return l===void 0?a:I(qe())}function R(){var E=qe(),k=A(E);if(i=arguments,n=this,o=E,k){if(l===void 0)return p(o);if(f)return l=setTimeout(S,e),h(o)}return l===void 0&&(l=setTimeout(S,e)),a}return R.cancel=P,R.flush=D,R}function ze(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Yr(t){return!!t&&typeof t=="object"}function Ur(t){return typeof t=="symbol"||Yr(t)&&qr.call(t)==Lr}function bt(t){if(typeof t=="number")return t;if(Ur(t))return vt;if(ze(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=ze(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Ir,"");var r=jr.test(t);return r||Fr.test(t)?Dr(t.slice(2),r?2:8):Rr.test(t)?vt:+t}var Qr=zr;const Nt=st(Qr);var Jr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,Bt=(t,e,r,i)=>{for(var n=i>1?void 0:i?Kr(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Jr(e,r,n),n};let Ye=class extends de{constructor(){super(...arguments),this.inputHandler=t=>{const[e,r]=t.detail.values;(e!==this.filterObject.state.min||r!=this.filterObject.state.max)&&([this.filterObject.state.min,this.filterObject.state.max]=[e,r],this.filterObject.dirty=!0),this.dispatchEvent(new CustomEvent("filter")),this.requestUpdate()},this.debouncedInputHandler=Nt(this.inputHandler,0,{leading:!0})}reset(){this.filterObject.state.min=this.filterObject.min,this.filterObject.state.max=this.filterObject.max,delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return L`
      <div class="range-before">
        ${this.filterObject.format==="date"?Te.unix(this.filterObject.state.min):this.filterObject.state.min}
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
        ${this.filterObject.format==="date"?Te.unix(this.filterObject.state.max):this.filterObject.state.max}
      </div>
    `}};Bt([Y()],Ye.prototype,"filterObject",2);Ye=Bt([ae("eox-itemfilter-range")],Ye);var Xr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,Ht=(t,e,r,i)=>{for(var n=i>1?void 0:i?Zr(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Xr(e,r,n),n};let Ue=class extends de{reset(){this.renderRoot.querySelectorAll("input[type='radio']").forEach(t=>{t instanceof HTMLInputElement&&(t.checked=!1)});for(const t in this.filterObject.state)this.filterObject.state[t]=!1;delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return L`
      <ul>
        ${ye(Object.keys(this.filterObject.state).sort((t,e)=>t.localeCompare(e)),t=>L`
            <li class=${this.filterObject.state[t]?"highlighted":Z}>
              <label>
                <input
                  name="selection"
                  type="radio"
                  class="select-radio"
                  id=${t}
                  checked="${this.filterObject.state[t]||Z}"
                  @click=${()=>{for(const e in this.filterObject.state)this.filterObject.state[e]=e===t;this.filterObject.dirty=!0,this.dispatchEvent(new CustomEvent("filter")),this.requestUpdate()}}
                />
                <span class="title">${t}</span>
              </label>
            </li>
          `)}
      </ul>
    `}};Ht([Y()],Ue.prototype,"filterObject",2);Ue=Ht([ae("eox-itemfilter-select")],Ue);var H=63710088e-1,ot={centimeters:H*100,centimetres:H*100,degrees:H/111325,feet:H*3.28084,inches:H*39.37,kilometers:H/1e3,kilometres:H/1e3,meters:H,metres:H,miles:H/1609.344,millimeters:H*1e3,millimetres:H*1e3,nauticalmiles:H/1852,radians:1,yards:H*1.0936},ei={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:1/1e3,kilometres:1/1e3,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/H,yards:1.0936133},Qe={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046};function z(t,e,r){r===void 0&&(r={});var i={type:"Feature"};return(r.id===0||r.id)&&(i.id=r.id),r.bbox&&(i.bbox=r.bbox),i.properties=e||{},i.geometry=t,i}function ti(t,e,r){switch(t){case"Point":return X(e).geometry;case"LineString":return Q(e).geometry;case"Polygon":return lt(e).geometry;case"MultiPoint":return Wt(e).geometry;case"MultiLineString":return ct(e).geometry;case"MultiPolygon":return qt(e).geometry;default:throw new Error(t+" is invalid")}}function X(t,e,r){if(r===void 0&&(r={}),!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Ie(t[0])||!Ie(t[1]))throw new Error("coordinates must contain numbers");var i={type:"Point",coordinates:t};return z(i,e,r)}function ri(t,e,r){return r===void 0&&(r={}),se(t.map(function(i){return X(i,e)}),r)}function lt(t,e,r){r===void 0&&(r={});for(var i=0,n=t;i<n.length;i++){var s=n[i];if(s.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var a=0;a<s[s.length-1].length;a++)if(s[s.length-1][a]!==s[0][a])throw new Error("First and last Position are not equivalent.")}var l={type:"Polygon",coordinates:t};return z(l,e,r)}function ii(t,e,r){return r===void 0&&(r={}),se(t.map(function(i){return lt(i,e)}),r)}function Q(t,e,r){if(r===void 0&&(r={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");var i={type:"LineString",coordinates:t};return z(i,e,r)}function ni(t,e,r){return r===void 0&&(r={}),se(t.map(function(i){return Q(i,e)}),r)}function se(t,e){e===void 0&&(e={});var r={type:"FeatureCollection"};return e.id&&(r.id=e.id),e.bbox&&(r.bbox=e.bbox),r.features=t,r}function ct(t,e,r){r===void 0&&(r={});var i={type:"MultiLineString",coordinates:t};return z(i,e,r)}function Wt(t,e,r){r===void 0&&(r={});var i={type:"MultiPoint",coordinates:t};return z(i,e,r)}function qt(t,e,r){r===void 0&&(r={});var i={type:"MultiPolygon",coordinates:t};return z(i,e,r)}function si(t,e,r){r===void 0&&(r={});var i={type:"GeometryCollection",geometries:t};return z(i,e,r)}function ai(t,e){if(e===void 0&&(e=0),e&&!(e>=0))throw new Error("precision must be a positive number");var r=Math.pow(10,e||0);return Math.round(t*r)/r}function Gt(t,e){e===void 0&&(e="kilometers");var r=ot[e];if(!r)throw new Error(e+" units is invalid");return t*r}function ut(t,e){e===void 0&&(e="kilometers");var r=ot[e];if(!r)throw new Error(e+" units is invalid");return t/r}function oi(t,e){return Vt(ut(t,e))}function li(t){var e=t%360;return e<0&&(e+=360),e}function Vt(t){var e=t%(2*Math.PI);return e*180/Math.PI}function ci(t){var e=t%360;return e*Math.PI/180}function ui(t,e,r){if(e===void 0&&(e="kilometers"),r===void 0&&(r="kilometers"),!(t>=0))throw new Error("length must be a positive number");return Gt(ut(t,e),r)}function fi(t,e,r){if(e===void 0&&(e="meters"),r===void 0&&(r="kilometers"),!(t>=0))throw new Error("area must be a positive number");var i=Qe[e];if(!i)throw new Error("invalid original units");var n=Qe[r];if(!n)throw new Error("invalid final units");return t/i*n}function Ie(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}function ft(t){return!!t&&t.constructor===Object}function hi(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(t.length!==4&&t.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach(function(e){if(!Ie(e))throw new Error("bbox must only contain numbers")})}function di(t){if(!t)throw new Error("id is required");if(["string","number"].indexOf(typeof t)===-1)throw new Error("id must be a number or a string")}const pi=Object.freeze(Object.defineProperty({__proto__:null,areaFactors:Qe,bearingToAzimuth:li,convertArea:fi,convertLength:ui,degreesToRadians:ci,earthRadius:H,factors:ot,feature:z,featureCollection:se,geometry:ti,geometryCollection:si,isNumber:Ie,isObject:ft,lengthToDegrees:oi,lengthToRadians:ut,lineString:Q,lineStrings:ni,multiLineString:ct,multiPoint:Wt,multiPolygon:qt,point:X,points:ri,polygon:lt,polygons:ii,radiansToDegrees:Vt,radiansToLength:Gt,round:ai,unitsFactors:ei,validateBBox:hi,validateId:di},Symbol.toStringTag,{value:"Module"}));function zt(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return t.geometry.coordinates;if(t.type==="Point")return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function ve(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function be(t){return t.type==="Feature"?t.geometry:t}function V(t,e,r){if(r===void 0&&(r={}),!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");var i=zt(t),n=be(e),s=n.type,a=e.bbox,l=n.coordinates;if(a&&mi(i,a)===!1)return!1;s==="Polygon"&&(l=[l]);for(var o=!1,c=0;c<l.length&&!o;c++)if(xt(i,l[c][0],r.ignoreBoundary)){for(var u=!1,f=1;f<l[c].length&&!u;)xt(i,l[c][f],!r.ignoreBoundary)&&(u=!0),f++;u||(o=!0)}return o}function xt(t,e,r){var i=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var n=0,s=e.length-1;n<e.length;s=n++){var a=e[n][0],l=e[n][1],o=e[s][0],c=e[s][1],u=t[1]*(a-o)+l*(o-t[0])+c*(t[0]-a)===0&&(a-t[0])*(o-t[0])<=0&&(l-t[1])*(c-t[1])<=0;if(u)return!r;var f=l>t[1]!=c>t[1]&&t[0]<(o-a)*(t[1]-l)/(c-l)+a;f&&(i=!i)}return i}function mi(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}function xe(t,e,r){if(t!==null)for(var i,n,s,a,l,o,c,u=0,f=0,d,h=t.type,p=h==="FeatureCollection",x=h==="Feature",A=p?t.features.length:1,S=0;S<A;S++){c=p?t.features[S].geometry:x?t.geometry:t,d=c?c.type==="GeometryCollection":!1,l=d?c.geometries.length:1;for(var I=0;I<l;I++){var P=0,D=0;if(a=d?c.geometries[I]:c,a!==null){o=a.coordinates;var R=a.type;switch(u=r&&(R==="Polygon"||R==="MultiPolygon")?1:0,R){case null:break;case"Point":if(e(o,f,S,P,D)===!1)return!1;f++,P++;break;case"LineString":case"MultiPoint":for(i=0;i<o.length;i++){if(e(o[i],f,S,P,D)===!1)return!1;f++,R==="MultiPoint"&&P++}R==="LineString"&&P++;break;case"Polygon":case"MultiLineString":for(i=0;i<o.length;i++){for(n=0;n<o[i].length-u;n++){if(e(o[i][n],f,S,P,D)===!1)return!1;f++}R==="MultiLineString"&&P++,R==="Polygon"&&D++}R==="Polygon"&&P++;break;case"MultiPolygon":for(i=0;i<o.length;i++){for(D=0,n=0;n<o[i].length;n++){for(s=0;s<o[i][n].length-u;s++){if(e(o[i][n][s],f,S,P,D)===!1)return!1;f++}D++}P++}break;case"GeometryCollection":for(i=0;i<a.geometries.length;i++)if(xe(a.geometries[i],e,r)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function gi(t,e,r,i){var n=r;return xe(t,function(s,a,l,o,c){a===0&&r===void 0?n=s:n=e(n,s,a,l,o,c)},i),n}function Yt(t,e){var r;switch(t.type){case"FeatureCollection":for(r=0;r<t.features.length&&e(t.features[r].properties,r)!==!1;r++);break;case"Feature":e(t.properties,0);break}}function yi(t,e,r){var i=r;return Yt(t,function(n,s){s===0&&r===void 0?i=n:i=e(i,n,s)}),i}function Re(t,e){if(t.type==="Feature")e(t,0);else if(t.type==="FeatureCollection")for(var r=0;r<t.features.length&&e(t.features[r],r)!==!1;r++);}function vi(t,e,r){var i=r;return Re(t,function(n,s){s===0&&r===void 0?i=n:i=e(i,n,s)}),i}function bi(t){var e=[];return xe(t,function(r){e.push(r)}),e}function ht(t,e){var r,i,n,s,a,l,o,c,u,f,d=0,h=t.type==="FeatureCollection",p=t.type==="Feature",x=h?t.features.length:1;for(r=0;r<x;r++){for(l=h?t.features[r].geometry:p?t.geometry:t,c=h?t.features[r].properties:p?t.properties:{},u=h?t.features[r].bbox:p?t.bbox:void 0,f=h?t.features[r].id:p?t.id:void 0,o=l?l.type==="GeometryCollection":!1,a=o?l.geometries.length:1,n=0;n<a;n++){if(s=o?l.geometries[n]:l,s===null){if(e(null,d,c,u,f)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(s,d,c,u,f)===!1)return!1;break}case"GeometryCollection":{for(i=0;i<s.geometries.length;i++)if(e(s.geometries[i],d,c,u,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}d++}}function xi(t,e,r){var i=r;return ht(t,function(n,s,a,l,o){s===0&&r===void 0?i=n:i=e(i,n,s,a,l,o)}),i}function te(t,e){ht(t,function(r,i,n,s,a){var l=r===null?null:r.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(z(r,n,{bbox:s,id:a}),i,0)===!1?!1:void 0}var o;switch(l){case"MultiPoint":o="Point";break;case"MultiLineString":o="LineString";break;case"MultiPolygon":o="Polygon";break}for(var c=0;c<r.coordinates.length;c++){var u=r.coordinates[c],f={type:o,coordinates:u};if(e(z(f,n),i,c)===!1)return!1}})}function wi(t,e,r){var i=r;return te(t,function(n,s,a){s===0&&a===0&&r===void 0?i=n:i=e(i,n,s,a)}),i}function Ut(t,e){te(t,function(r,i,n){var s=0;if(r.geometry){var a=r.geometry.type;if(!(a==="Point"||a==="MultiPoint")){var l,o=0,c=0,u=0;if(xe(r,function(f,d,h,p,x){if(l===void 0||i>o||p>c||x>u){l=f,o=i,c=p,u=x,s=0;return}var A=Q([l,f],r.properties);if(e(A,i,n,x,s)===!1)return!1;s++,l=f})===!1)return!1}}})}function $i(t,e,r){var i=r,n=!1;return Ut(t,function(s,a,l,o,c){n===!1&&r===void 0?i=s:i=e(i,s,a,l,o,c),n=!0}),i}function Qt(t,e){if(!t)throw new Error("geojson is required");te(t,function(r,i,n){if(r.geometry!==null){var s=r.geometry.type,a=r.geometry.coordinates;switch(s){case"LineString":if(e(r,i,n,0,0)===!1)return!1;break;case"Polygon":for(var l=0;l<a.length;l++)if(e(Q(a[l],r.properties),i,n,l)===!1)return!1;break}}})}function Mi(t,e,r){var i=r;return Qt(t,function(n,s,a,l){s===0&&r===void 0?i=n:i=e(i,n,s,a,l)}),i}function Oi(t,e){if(e=e||{},!ft(e))throw new Error("options is invalid");var r=e.featureIndex||0,i=e.multiFeatureIndex||0,n=e.geometryIndex||0,s=e.segmentIndex||0,a=e.properties,l;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),a=a||t.features[r].properties,l=t.features[r].geometry;break;case"Feature":a=a||t.properties,l=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=t;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var o=l.coordinates;switch(l.type){case"Point":case"MultiPoint":return null;case"LineString":return s<0&&(s=o.length+s-1),Q([o[s],o[s+1]],a,e);case"Polygon":return n<0&&(n=o.length+n),s<0&&(s=o[n].length+s-1),Q([o[n][s],o[n][s+1]],a,e);case"MultiLineString":return i<0&&(i=o.length+i),s<0&&(s=o[i].length+s-1),Q([o[i][s],o[i][s+1]],a,e);case"MultiPolygon":return i<0&&(i=o.length+i),n<0&&(n=o[i].length+n),s<0&&(s=o[i][n].length-s-1),Q([o[i][n][s],o[i][n][s+1]],a,e)}throw new Error("geojson is invalid")}function Ei(t,e){if(e=e||{},!ft(e))throw new Error("options is invalid");var r=e.featureIndex||0,i=e.multiFeatureIndex||0,n=e.geometryIndex||0,s=e.coordIndex||0,a=e.properties,l;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),a=a||t.features[r].properties,l=t.features[r].geometry;break;case"Feature":a=a||t.properties,l=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=t;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var o=l.coordinates;switch(l.type){case"Point":return X(o,a,e);case"MultiPoint":return i<0&&(i=o.length+i),X(o[i],a,e);case"LineString":return s<0&&(s=o.length+s),X(o[s],a,e);case"Polygon":return n<0&&(n=o.length+n),s<0&&(s=o[n].length+s),X(o[n][s],a,e);case"MultiLineString":return i<0&&(i=o.length+i),s<0&&(s=o[i].length+s),X(o[i][s],a,e);case"MultiPolygon":return i<0&&(i=o.length+i),n<0&&(n=o[i].length+n),s<0&&(s=o[i][n].length-s),X(o[i][n][s],a,e)}throw new Error("geojson is invalid")}const Si=Object.freeze(Object.defineProperty({__proto__:null,coordAll:bi,coordEach:xe,coordReduce:gi,featureEach:Re,featureReduce:vi,findPoint:Ei,findSegment:Oi,flattenEach:te,flattenReduce:wi,geomEach:ht,geomReduce:xi,lineEach:Qt,lineReduce:Mi,propEach:Yt,propReduce:yi,segmentEach:Ut,segmentReduce:$i},Symbol.toStringTag,{value:"Module"}));function wt(t){if(!t)throw new Error("geojson is required");var e=[];return te(t,function(r){Ai(r,e)}),se(e)}function Ai(t,e){var r=[],i=t.geometry;if(i!==null){switch(i.type){case"Polygon":r=ve(i);break;case"LineString":r=[ve(i)]}r.forEach(function(n){var s=_i(n,t.properties);s.forEach(function(a){a.id=e.length,e.push(a)})})}}function _i(t,e){var r=[];return t.reduce(function(i,n){var s=Q([i,n],e);return s.bbox=Pi(i,n),r.push(s),n}),r}function Pi(t,e){var r=t[0],i=t[1],n=e[0],s=e[1],a=r<n?r:n,l=i<s?i:s,o=r>n?r:n,c=i>s?i:s;return[a,l,o,c]}var dt={exports:{}};const ki=Ne(br),Ci=Ne(pi),Ti=Ne(Si);function he(t){var e=[1/0,1/0,-1/0,-1/0];return xe(t,function(r){e[0]>r[0]&&(e[0]=r[0]),e[1]>r[1]&&(e[1]=r[1]),e[2]<r[0]&&(e[2]=r[0]),e[3]<r[1]&&(e[3]=r[1])}),e}he.default=he;const Li=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"})),Ii=Ne(Li);var K=ki,Jt=Ci,Kt=Ti,ge=Ii.default,Ri=Kt.featureEach;Kt.coordEach;Jt.polygon;var $t=Jt.featureCollection;function Xt(t){var e=new K(t);return e.insert=function(r){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:ge(r),K.prototype.insert.call(this,r)},e.load=function(r){var i=[];return Array.isArray(r)?r.forEach(function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:ge(n),i.push(n)}):Ri(r,function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:ge(n),i.push(n)}),K.prototype.load.call(this,i)},e.remove=function(r,i){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:ge(r),K.prototype.remove.call(this,r,i)},e.clear=function(){return K.prototype.clear.call(this)},e.search=function(r){var i=K.prototype.search.call(this,this.toBBox(r));return $t(i)},e.collides=function(r){return K.prototype.collides.call(this,this.toBBox(r))},e.all=function(){var r=K.prototype.all.call(this);return $t(r)},e.toJSON=function(){return K.prototype.toJSON.call(this)},e.fromJSON=function(r){return K.prototype.fromJSON.call(this,r)},e.toBBox=function(r){var i;if(r.bbox)i=r.bbox;else if(Array.isArray(r)&&r.length===4)i=r;else if(Array.isArray(r)&&r.length===6)i=[r[0],r[1],r[3],r[4]];else if(r.type==="Feature")i=ge(r);else if(r.type==="FeatureCollection")i=ge(r);else throw new Error("invalid geojson");return{minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}},e}dt.exports=Xt;dt.exports.default=Xt;var ji=dt.exports;const Fi=st(ji);function pt(t,e){var r={},i=[];if(t.type==="LineString"&&(t=z(t)),e.type==="LineString"&&(e=z(e)),t.type==="Feature"&&e.type==="Feature"&&t.geometry!==null&&e.geometry!==null&&t.geometry.type==="LineString"&&e.geometry.type==="LineString"&&t.geometry.coordinates.length===2&&e.geometry.coordinates.length===2){var n=Mt(t,e);return n&&i.push(n),se(i)}var s=Fi();return s.load(wt(e)),Re(wt(t),function(a){Re(s.search(a),function(l){var o=Mt(a,l);if(o){var c=ve(o).join(",");r[c]||(r[c]=!0,i.push(o))}})}),se(i)}function Mt(t,e){var r=ve(t),i=ve(e);if(r.length!==2)throw new Error("<intersects> line1 must only contain 2 coordinates");if(i.length!==2)throw new Error("<intersects> line2 must only contain 2 coordinates");var n=r[0][0],s=r[0][1],a=r[1][0],l=r[1][1],o=i[0][0],c=i[0][1],u=i[1][0],f=i[1][1],d=(f-c)*(a-n)-(u-o)*(l-s),h=(u-o)*(s-c)-(f-c)*(n-o),p=(a-n)*(s-c)-(l-s)*(n-o);if(d===0)return null;var x=h/d,A=p/d;if(x>=0&&x<=1&&A>=0&&A<=1){var S=n+x*(a-n),I=s+x*(l-s);return X([S,I])}return null}function Je(t,e){e===void 0&&(e={});var r=be(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),r.type){case"Polygon":return Di(r,e);case"MultiPolygon":return Ni(r,e);default:throw new Error("invalid poly")}}function Di(t,e){e===void 0&&(e={});var r=be(t),i=r.coordinates,n=e.properties?e.properties:t.type==="Feature"?t.properties:{};return Zt(i,n)}function Ni(t,e){e===void 0&&(e={});var r=be(t),i=r.coordinates,n=e.properties?e.properties:t.type==="Feature"?t.properties:{},s=[];return i.forEach(function(a){s.push(Zt(a,n))}),se(s)}function Zt(t,e){return t.length>1?ct(t,e):Q(t[0],e)}function Bi(t,e){var r=!0;return te(t,function(i){te(e,function(n){if(r===!1)return!1;r=Hi(i.geometry,n.geometry)})}),r}function Hi(t,e){switch(t.type){case"Point":switch(e.type){case"Point":return!Vi(t.coordinates,e.coordinates);case"LineString":return!Ot(e,t);case"Polygon":return!V(t,e)}break;case"LineString":switch(e.type){case"Point":return!Ot(t,e);case"LineString":return!Wi(t,e);case"Polygon":return!Et(e,t)}break;case"Polygon":switch(e.type){case"Point":return!V(e,t);case"LineString":return!Et(t,e);case"Polygon":return!qi(e,t)}}return!1}function Ot(t,e){for(var r=0;r<t.coordinates.length-1;r++)if(Gi(t.coordinates[r],t.coordinates[r+1],e.coordinates))return!0;return!1}function Wi(t,e){var r=pt(t,e);return r.features.length>0}function Et(t,e){for(var r=0,i=e.coordinates;r<i.length;r++){var n=i[r];if(V(n,t))return!0}var s=pt(e,Je(t));return s.features.length>0}function qi(t,e){for(var r=0,i=t.coordinates[0];r<i.length;r++){var n=i[r];if(V(n,e))return!0}for(var s=0,a=e.coordinates[0];s<a.length;s++){var l=a[s];if(V(l,t))return!0}var o=pt(Je(t),Je(e));return o.features.length>0}function Gi(t,e,r){var i=r[0]-t[0],n=r[1]-t[1],s=e[0]-t[0],a=e[1]-t[1],l=i*a-n*s;return l!==0?!1:Math.abs(s)>=Math.abs(a)?s>0?t[0]<=r[0]&&r[0]<=e[0]:e[0]<=r[0]&&r[0]<=t[0]:a>0?t[1]<=r[1]&&r[1]<=e[1]:e[1]<=r[1]&&r[1]<=t[1]}function Vi(t,e){return t[0]===e[0]&&t[1]===e[1]}function zi(t,e){var r=!1;return te(t,function(i){te(e,function(n){if(r===!0)return!0;r=!Bi(i.geometry,n.geometry)})}),r}function je(t,e,r){r===void 0&&(r={});for(var i=zt(t),n=ve(e),s=0;s<n.length-1;s++){var a=!1;if(r.ignoreEndVertices&&(s===0&&(a="start"),s===n.length-2&&(a="end"),s===0&&s+1===n.length-1&&(a="both")),Yi(n[s],n[s+1],i,a,typeof r.epsilon>"u"?null:r.epsilon))return!0}return!1}function Yi(t,e,r,i,n){var s=r[0],a=r[1],l=t[0],o=t[1],c=e[0],u=e[1],f=r[0]-l,d=r[1]-o,h=c-l,p=u-o,x=f*p-d*h;if(n!==null){if(Math.abs(x)>n)return!1}else if(x!==0)return!1;if(i){if(i==="start")return Math.abs(h)>=Math.abs(p)?h>0?l<s&&s<=c:c<=s&&s<l:p>0?o<a&&a<=u:u<=a&&a<o;if(i==="end")return Math.abs(h)>=Math.abs(p)?h>0?l<=s&&s<c:c<s&&s<=l:p>0?o<=a&&a<u:u<a&&a<=o;if(i==="both")return Math.abs(h)>=Math.abs(p)?h>0?l<s&&s<c:c<s&&s<l:p>0?o<a&&a<u:u<a&&a<o}else return Math.abs(h)>=Math.abs(p)?h>0?l<=s&&s<=c:c<=s&&s<=l:p>0?o<=a&&a<=u:u<=a&&a<=o;return!1}function Ui(t,e){var r=be(t),i=be(e),n=r.type,s=i.type;switch(n){case"Point":switch(s){case"MultiPoint":return Qi(r,i);case"LineString":return je(r,i,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return V(r,i,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return Ji(r,i);case"LineString":return Ki(r,i);case"Polygon":case"MultiPolygon":return Xi(r,i);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return Zi(r,i);case"Polygon":case"MultiPolygon":return en(r,i);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return tn(r,i);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+n+" geometry not supported")}}function Qi(t,e){var r,i=!1;for(r=0;r<e.coordinates.length;r++)if(tr(e.coordinates[r],t.coordinates)){i=!0;break}return i}function Ji(t,e){for(var r=0;r<t.coordinates.length;r++){for(var i=!1,n=0;n<e.coordinates.length;n++)tr(t.coordinates[r],e.coordinates[n])&&(i=!0);if(!i)return!1}return!0}function Ki(t,e){for(var r=!1,i=0;i<t.coordinates.length;i++){if(!je(t.coordinates[i],e))return!1;r||(r=je(t.coordinates[i],e,{ignoreEndVertices:!0}))}return r}function Xi(t,e){for(var r=!0,i=!1,n=0;n<t.coordinates.length;n++){if(i=V(t.coordinates[1],e),!i){r=!1;break}i=V(t.coordinates[1],e,{ignoreBoundary:!0})}return r&&i}function Zi(t,e){for(var r=0;r<t.coordinates.length;r++)if(!je(t.coordinates[r],e))return!1;return!0}function en(t,e){var r=he(e),i=he(t);if(!er(r,i))return!1;for(var n=!1,s=0;s<t.coordinates.length-1;s++){if(!V(t.coordinates[s],e))return!1;if(n||(n=V(t.coordinates[s],e,{ignoreBoundary:!0})),!n){var a=rn(t.coordinates[s],t.coordinates[s+1]);n=V(a,e,{ignoreBoundary:!0})}}return n}function tn(t,e){var r=he(t),i=he(e);if(!er(i,r))return!1;for(var n=0;n<t.coordinates[0].length;n++)if(!V(t.coordinates[0][n],e))return!1;return!0}function er(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function tr(t,e){return t[0]===e[0]&&t[1]===e[1]}function rn(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var nn=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,Ae=(t,e,r,i)=>{for(var n=i>1?void 0:i?sn(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&nn(e,r,n),n};const an=(t,e)=>e?zi(t,e):!0,on=(t,e)=>e?Ui(t,e):!0;let Ke=class extends de{reset(){this.filterObject.state.geometry=void 0;const t=this.renderRoot.querySelector("eox-itemfilter-spatial-filter");delete this.filterObject.dirty,t.reset(),this.requestUpdate()}createRenderRoot(){return this}render(){var t;return L`
      <form style="display: inline">
      ${ye(["intersects","within"],e=>L`
          <label>
            <input
              type="radio"
              name="mode"
              .checked="${Er(this.filterObject.state.mode===e)}
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
    `}};Ae([Y()],Ke.prototype,"filterObject",2);Ke=Ae([ae("eox-itemfilter-spatial")],Ke);let Fe=class extends de{render(){return L`<eox-map part="map" style="height: 400px"></eox-map>`}firstUpdated(){this.setup()}setup(){const t=[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...this.geometry&&{format:"GeoJSON"},...this.geometry&&{url:this.createFeatureUrl(this.geometry)}},zIndex:1},{type:"Tile",source:{type:"XYZ",url:"https://s2maps-tiles.eu/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}];this.eoxMap=this.renderRoot.querySelector("eox-map"),setTimeout(()=>{this.eoxMap.setLayers(t),this.eoxMap.addDraw("draw",{id:"drawInteraction",type:"Polygon"});const e=r=>{const i=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:r.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});this.dispatchEvent(i)};this.eoxMap.interactions.drawInteraction.on("drawend",r=>{e(r.feature),this.eoxMap.removeInteraction("drawInteraction")}),this.eoxMap.interactions.drawInteraction_modify.on("modifyend",r=>{e(r.features.getArray()[0])})})}createFeatureUrl(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}reset(){var e;const t=this.eoxMap.getLayerById("draw").getSource();((e=t.getFeatures())==null?void 0:e.length)>0&&(t.clear(),this.eoxMap.removeInteraction("drawInteraction_modify"),this.setup())}};Ae([Y()],Fe.prototype,"geometry",2);Ae([Se()],Fe.prototype,"eoxMap",2);Fe=Ae([ae("eox-itemfilter-spatial-filter")],Fe);var ln=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,rr=(t,e,r,i)=>{for(var n=i>1?void 0:i?cn(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&ln(e,r,n),n};let Xe=class extends de{constructor(){super(...arguments),this.inputHandler=()=>{const t=this.renderRoot.querySelector("input[type='text']");this.filterObject.keys.forEach(e=>{this.filterObject.state[e]=t.value}),this.filterObject.dirty=!0,this.dispatchEvent(new CustomEvent("filter"))},this.debouncedInputHandler=Nt(this.inputHandler,500,{leading:!0})}reset(){const t=this.renderRoot.querySelector("input[type='text']");t.value="",this.filterObject.keys.forEach(e=>{this.filterObject.state[e]=void 0}),delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return L`
      <input
        type="text"
        placeholder="Type something..."
        data-cy="search"
        part="input-search"
        value="${Object.values(this.filterObject.state)[0]}"
        @input="${this.debouncedInputHandler}"
      />
    `}};rr([Y()],Xe.prototype,"filterObject",2);Xe=rr([ae("eox-itemfilter-text")],Xe);function re(t){return Array.isArray?Array.isArray(t):sr(t)==="[object Array]"}const un=1/0;function fn(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-un?"-0":e}function hn(t){return t==null?"":fn(t)}function ee(t){return typeof t=="string"}function ir(t){return typeof t=="number"}function dn(t){return t===!0||t===!1||pn(t)&&sr(t)=="[object Boolean]"}function nr(t){return typeof t=="object"}function pn(t){return nr(t)&&t!==null}function q(t){return t!=null}function Ge(t){return!t.trim().length}function sr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const mn="Incorrect 'index' type",gn=t=>`Invalid value for key ${t}`,yn=t=>`Pattern length exceeds max of ${t}.`,vn=t=>`Missing ${t} property in key`,bn=t=>`Property 'weight' in key '${t}' must be a positive integer`,St=Object.prototype.hasOwnProperty;class xn{constructor(e){this._keys=[],this._keyMap={};let r=0;e.forEach(i=>{let n=ar(i);this._keys.push(n),this._keyMap[n.id]=n,r+=n.weight}),this._keys.forEach(i=>{i.weight/=r})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ar(t){let e=null,r=null,i=null,n=1,s=null;if(ee(t)||re(t))i=t,e=At(t),r=Ze(t);else{if(!St.call(t,"name"))throw new Error(vn("name"));const a=t.name;if(i=a,St.call(t,"weight")&&(n=t.weight,n<=0))throw new Error(bn(a));e=At(a),r=Ze(a),s=t.getFn}return{path:e,id:r,weight:n,src:i,getFn:s}}function At(t){return re(t)?t:t.split(".")}function Ze(t){return re(t)?t.join("."):t}function wn(t,e){let r=[],i=!1;const n=(s,a,l)=>{if(q(s))if(!a[l])r.push(s);else{let o=a[l];const c=s[o];if(!q(c))return;if(l===a.length-1&&(ee(c)||ir(c)||dn(c)))r.push(hn(c));else if(re(c)){i=!0;for(let u=0,f=c.length;u<f;u+=1)n(c[u],a,l+1)}else a.length&&n(c,a,l+1)}};return n(t,ee(e)?e.split("."):e,0),i?r:r[0]}const $n={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Mn={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},On={location:0,threshold:.6,distance:100},En={useExtendedSearch:!1,getFn:wn,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var w={...Mn,...$n,...On,...En};const Sn=/[^ ]+/g;function An(t=1,e=3){const r=new Map,i=Math.pow(10,e);return{get(n){const s=n.match(Sn).length;if(r.has(s))return r.get(s);const a=1/Math.pow(s,.5*t),l=parseFloat(Math.round(a*i)/i);return r.set(s,l),l},clear(){r.clear()}}}class mt{constructor({getFn:e=w.getFn,fieldNormWeight:r=w.fieldNormWeight}={}){this.norm=An(r,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((r,i)=>{this._keysMap[r.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ee(this.docs[0])?this.docs.forEach((e,r)=>{this._addString(e,r)}):this.docs.forEach((e,r)=>{this._addObject(e,r)}),this.norm.clear())}add(e){const r=this.size();ee(e)?this._addString(e,r):this._addObject(e,r)}removeAt(e){this.records.splice(e,1);for(let r=e,i=this.size();r<i;r+=1)this.records[r].i-=1}getValueForItemAtKeyId(e,r){return e[this._keysMap[r]]}size(){return this.records.length}_addString(e,r){if(!q(e)||Ge(e))return;let i={v:e,i:r,n:this.norm.get(e)};this.records.push(i)}_addObject(e,r){let i={i:r,$:{}};this.keys.forEach((n,s)=>{let a=n.getFn?n.getFn(e):this.getFn(e,n.path);if(q(a)){if(re(a)){let l=[];const o=[{nestedArrIndex:-1,value:a}];for(;o.length;){const{nestedArrIndex:c,value:u}=o.pop();if(q(u))if(ee(u)&&!Ge(u)){let f={v:u,i:c,n:this.norm.get(u)};l.push(f)}else re(u)&&u.forEach((f,d)=>{o.push({nestedArrIndex:d,value:f})})}i.$[s]=l}else if(ee(a)&&!Ge(a)){let l={v:a,n:this.norm.get(a)};i.$[s]=l}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function or(t,e,{getFn:r=w.getFn,fieldNormWeight:i=w.fieldNormWeight}={}){const n=new mt({getFn:r,fieldNormWeight:i});return n.setKeys(t.map(ar)),n.setSources(e),n.create(),n}function _n(t,{getFn:e=w.getFn,fieldNormWeight:r=w.fieldNormWeight}={}){const{keys:i,records:n}=t,s=new mt({getFn:e,fieldNormWeight:r});return s.setKeys(i),s.setIndexRecords(n),s}function ke(t,{errors:e=0,currentLocation:r=0,expectedLocation:i=0,distance:n=w.distance,ignoreLocation:s=w.ignoreLocation}={}){const a=e/t.length;if(s)return a;const l=Math.abs(i-r);return n?a+l/n:l?1:a}function Pn(t=[],e=w.minMatchCharLength){let r=[],i=-1,n=-1,s=0;for(let a=t.length;s<a;s+=1){let l=t[s];l&&i===-1?i=s:!l&&i!==-1&&(n=s-1,n-i+1>=e&&r.push([i,n]),i=-1)}return t[s-1]&&s-i>=e&&r.push([i,s-1]),r}const fe=32;function kn(t,e,r,{location:i=w.location,distance:n=w.distance,threshold:s=w.threshold,findAllMatches:a=w.findAllMatches,minMatchCharLength:l=w.minMatchCharLength,includeMatches:o=w.includeMatches,ignoreLocation:c=w.ignoreLocation}={}){if(e.length>fe)throw new Error(yn(fe));const u=e.length,f=t.length,d=Math.max(0,Math.min(i,f));let h=s,p=d;const x=l>1||o,A=x?Array(f):[];let S;for(;(S=t.indexOf(e,p))>-1;){let k=ke(e,{currentLocation:S,expectedLocation:d,distance:n,ignoreLocation:c});if(h=Math.min(k,h),p=S+u,x){let j=0;for(;j<u;)A[S+j]=1,j+=1}}p=-1;let I=[],P=1,D=u+f;const R=1<<u-1;for(let k=0;k<u;k+=1){let j=0,N=D;for(;j<N;)ke(e,{errors:k,currentLocation:d+N,expectedLocation:d,distance:n,ignoreLocation:c})<=h?j=N:D=N,N=Math.floor((D-j)/2+j);D=N;let C=Math.max(1,d-N+1),O=a?f:Math.min(d+N,f)+u,U=Array(O+2);U[O+1]=(1<<k)-1;for(let v=O;v>=C;v-=1){let g=v-1,m=r[t.charAt(g)];if(x&&(A[g]=+!!m),U[v]=(U[v+1]<<1|1)&m,k&&(U[v]|=(I[v+1]|I[v])<<1|1|I[v+1]),U[v]&R&&(P=ke(e,{errors:k,currentLocation:g,expectedLocation:d,distance:n,ignoreLocation:c}),P<=h)){if(h=P,p=g,p<=d)break;C=Math.max(1,2*d-p)}}if(ke(e,{errors:k+1,currentLocation:d,expectedLocation:d,distance:n,ignoreLocation:c})>h)break;I=U}const E={isMatch:p>=0,score:Math.max(.001,P)};if(x){const k=Pn(A,l);k.length?o&&(E.indices=k):E.isMatch=!1}return E}function Cn(t){let e={};for(let r=0,i=t.length;r<i;r+=1){const n=t.charAt(r);e[n]=(e[n]||0)|1<<i-r-1}return e}class lr{constructor(e,{location:r=w.location,threshold:i=w.threshold,distance:n=w.distance,includeMatches:s=w.includeMatches,findAllMatches:a=w.findAllMatches,minMatchCharLength:l=w.minMatchCharLength,isCaseSensitive:o=w.isCaseSensitive,ignoreLocation:c=w.ignoreLocation}={}){if(this.options={location:r,threshold:i,distance:n,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:o,ignoreLocation:c},this.pattern=o?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(d,h)=>{this.chunks.push({pattern:d,alphabet:Cn(d),startIndex:h})},f=this.pattern.length;if(f>fe){let d=0;const h=f%fe,p=f-h;for(;d<p;)u(this.pattern.substr(d,fe),d),d+=fe;if(h){const x=f-fe;u(this.pattern.substr(x),x)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:r,includeMatches:i}=this.options;if(r||(e=e.toLowerCase()),this.pattern===e){let p={isMatch:!0,score:0};return i&&(p.indices=[[0,e.length-1]]),p}const{location:n,distance:s,threshold:a,findAllMatches:l,minMatchCharLength:o,ignoreLocation:c}=this.options;let u=[],f=0,d=!1;this.chunks.forEach(({pattern:p,alphabet:x,startIndex:A})=>{const{isMatch:S,score:I,indices:P}=kn(e,p,x,{location:n+A,distance:s,threshold:a,findAllMatches:l,minMatchCharLength:o,includeMatches:i,ignoreLocation:c});S&&(d=!0),f+=I,S&&P&&(u=[...u,...P])});let h={isMatch:d,score:d?f/this.chunks.length:1};return d&&i&&(h.indices=u),h}}class oe{constructor(e){this.pattern=e}static isMultiMatch(e){return _t(e,this.multiRegex)}static isSingleMatch(e){return _t(e,this.singleRegex)}search(){}}function _t(t,e){const r=t.match(e);return r?r[1]:null}class Tn extends oe{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const r=e===this.pattern;return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class Ln extends oe{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const i=e.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,e.length-1]}}}class In extends oe{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const r=e.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class Rn extends oe{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const r=!e.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class jn extends oe{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const r=e.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Fn extends oe{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const r=!e.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class cr extends oe{constructor(e,{location:r=w.location,threshold:i=w.threshold,distance:n=w.distance,includeMatches:s=w.includeMatches,findAllMatches:a=w.findAllMatches,minMatchCharLength:l=w.minMatchCharLength,isCaseSensitive:o=w.isCaseSensitive,ignoreLocation:c=w.ignoreLocation}={}){super(e),this._bitapSearch=new lr(e,{location:r,threshold:i,distance:n,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:o,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class ur extends oe{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let r=0,i;const n=[],s=this.pattern.length;for(;(i=e.indexOf(this.pattern,r))>-1;)r=i+s,n.push([i,r-1]);const a=!!n.length;return{isMatch:a,score:a?0:1,indices:n}}}const et=[Tn,ur,In,Rn,Fn,jn,Ln,cr],Pt=et.length,Dn=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Nn="|";function Bn(t,e={}){return t.split(Nn).map(r=>{let i=r.trim().split(Dn).filter(s=>s&&!!s.trim()),n=[];for(let s=0,a=i.length;s<a;s+=1){const l=i[s];let o=!1,c=-1;for(;!o&&++c<Pt;){const u=et[c];let f=u.isMultiMatch(l);f&&(n.push(new u(f,e)),o=!0)}if(!o)for(c=-1;++c<Pt;){const u=et[c];let f=u.isSingleMatch(l);if(f){n.push(new u(f,e));break}}}return n})}const Hn=new Set([cr.type,ur.type]);class Wn{constructor(e,{isCaseSensitive:r=w.isCaseSensitive,includeMatches:i=w.includeMatches,minMatchCharLength:n=w.minMatchCharLength,ignoreLocation:s=w.ignoreLocation,findAllMatches:a=w.findAllMatches,location:l=w.location,threshold:o=w.threshold,distance:c=w.distance}={}){this.query=null,this.options={isCaseSensitive:r,includeMatches:i,minMatchCharLength:n,findAllMatches:a,ignoreLocation:s,location:l,threshold:o,distance:c},this.pattern=r?e:e.toLowerCase(),this.query=Bn(this.pattern,this.options)}static condition(e,r){return r.useExtendedSearch}searchIn(e){const r=this.query;if(!r)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let s=0,a=[],l=0;for(let o=0,c=r.length;o<c;o+=1){const u=r[o];a.length=0,s=0;for(let f=0,d=u.length;f<d;f+=1){const h=u[f],{isMatch:p,indices:x,score:A}=h.search(e);if(p){if(s+=1,l+=A,i){const S=h.constructor.type;Hn.has(S)?a=[...a,...x]:a.push(x)}}else{l=0,s=0,a.length=0;break}}if(s){let f={isMatch:!0,score:l/s};return i&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const tt=[];function qn(...t){tt.push(...t)}function rt(t,e){for(let r=0,i=tt.length;r<i;r+=1){let n=tt[r];if(n.condition(t,e))return new n(t,e)}return new lr(t,e)}const De={AND:"$and",OR:"$or"},it={PATH:"$path",PATTERN:"$val"},nt=t=>!!(t[De.AND]||t[De.OR]),Gn=t=>!!t[it.PATH],Vn=t=>!re(t)&&nr(t)&&!nt(t),kt=t=>({[De.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function fr(t,e,{auto:r=!0}={}){const i=n=>{let s=Object.keys(n);const a=Gn(n);if(!a&&s.length>1&&!nt(n))return i(kt(n));if(Vn(n)){const o=a?n[it.PATH]:s[0],c=a?n[it.PATTERN]:n[o];if(!ee(c))throw new Error(gn(o));const u={keyId:Ze(o),pattern:c};return r&&(u.searcher=rt(c,e)),u}let l={children:[],operator:s[0]};return s.forEach(o=>{const c=n[o];re(c)&&c.forEach(u=>{l.children.push(i(u))})}),l};return nt(t)||(t=kt(t)),i(t)}function zn(t,{ignoreFieldNorm:e=w.ignoreFieldNorm}){t.forEach(r=>{let i=1;r.matches.forEach(({key:n,norm:s,score:a})=>{const l=n?n.weight:null;i*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:s))}),r.score=i})}function Yn(t,e){const r=t.matches;e.matches=[],q(r)&&r.forEach(i=>{if(!q(i.indices)||!i.indices.length)return;const{indices:n,value:s}=i;let a={indices:n,value:s};i.key&&(a.key=i.key.src),i.idx>-1&&(a.refIndex=i.idx),e.matches.push(a)})}function Un(t,e){e.score=t.score}function Qn(t,e,{includeMatches:r=w.includeMatches,includeScore:i=w.includeScore}={}){const n=[];return r&&n.push(Yn),i&&n.push(Un),t.map(s=>{const{idx:a}=s,l={item:e[a],refIndex:a};return n.length&&n.forEach(o=>{o(s,l)}),l})}class we{constructor(e,r={},i){this.options={...w,...r},this.options.useExtendedSearch,this._keyStore=new xn(this.options.keys),this.setCollection(e,i)}setCollection(e,r){if(this._docs=e,r&&!(r instanceof mt))throw new Error(mn);this._myIndex=r||or(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){q(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const r=[];for(let i=0,n=this._docs.length;i<n;i+=1){const s=this._docs[i];e(s,i)&&(this.removeAt(i),i-=1,n-=1,r.push(s))}return r}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:r=-1}={}){const{includeMatches:i,includeScore:n,shouldSort:s,sortFn:a,ignoreFieldNorm:l}=this.options;let o=ee(e)?ee(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return zn(o,{ignoreFieldNorm:l}),s&&o.sort(a),ir(r)&&r>-1&&(o=o.slice(0,r)),Qn(o,this._docs,{includeMatches:i,includeScore:n})}_searchStringList(e){const r=rt(e,this.options),{records:i}=this._myIndex,n=[];return i.forEach(({v:s,i:a,n:l})=>{if(!q(s))return;const{isMatch:o,score:c,indices:u}=r.searchIn(s);o&&n.push({item:s,idx:a,matches:[{score:c,value:s,norm:l,indices:u}]})}),n}_searchLogical(e){const r=fr(e,this.options),i=(l,o,c)=>{if(!l.children){const{keyId:f,searcher:d}=l,h=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(o,f),searcher:d});return h&&h.length?[{idx:c,item:o,matches:h}]:[]}const u=[];for(let f=0,d=l.children.length;f<d;f+=1){const h=l.children[f],p=i(h,o,c);if(p.length)u.push(...p);else if(l.operator===De.AND)return[]}return u},n=this._myIndex.records,s={},a=[];return n.forEach(({$:l,i:o})=>{if(q(l)){let c=i(r,l,o);c.length&&(s[o]||(s[o]={idx:o,item:l,matches:[]},a.push(s[o])),c.forEach(({matches:u})=>{s[o].matches.push(...u)}))}}),a}_searchObjectList(e){const r=rt(e,this.options),{keys:i,records:n}=this._myIndex,s=[];return n.forEach(({$:a,i:l})=>{if(!q(a))return;let o=[];i.forEach((c,u)=>{o.push(...this._findMatches({key:c,value:a[u],searcher:r}))}),o.length&&s.push({idx:l,item:a,matches:o})}),s}_findMatches({key:e,value:r,searcher:i}){if(!q(r))return[];let n=[];if(re(r))r.forEach(({v:s,i:a,n:l})=>{if(!q(s))return;const{isMatch:o,score:c,indices:u}=i.searchIn(s);o&&n.push({score:c,key:e,value:s,idx:a,norm:l,indices:u})});else{const{v:s,n:a}=r,{isMatch:l,score:o,indices:c}=i.searchIn(s);l&&n.push({score:o,key:e,value:s,norm:a,indices:c})}return n}}we.version="7.0.0";we.createIndex=or;we.parseIndex=_n;we.config=w;we.parseQuery=fr;qn(Wn);const Jn=(t,e="highlight",r="title")=>{const i=(s,a,l)=>{const o=a.split(".");let c;for(c=0;c<o.length-1;c++)s=s[o[c]];s[o[c]]=l},n=(s,a=[])=>{let l="",o=0;return a.forEach(c=>{const u=c[1]+1;l+=[s.substring(o,c[0]),`<mark class="${e}">`,s.substring(c[0],u),"</mark>"].join(""),o=u}),l+=s.substring(o),l};return t.filter(({matches:s})=>s&&s.length).map(({item:s,matches:a})=>{const l={};for(const[o,c]of Object.entries(s))l[o]=c;return a.forEach(o=>{o.key===r&&i(l,o.key,n(o.value,o.indices))}),l})};let hr;const Kn=(t,e)=>{hr=new we(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},Xn=async(t,e,r)=>{const i=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[o,c])=>{const u="$or",f=[],d=(h,p)=>{const x={};c.type==="text"?x[h]=`${p}`:x[o]=`="${h}"`,f.push(x)};return Object.entries(c.state).filter(([,h])=>h).forEach(([h,p])=>d(h,p)),f.length>0&&l.push({[u]:f}),l},[]);let n;if(!(i.length>0)&&r.matchAllWhenEmpty!==!1)n=t;else{const l={$and:[...i]},o=hr.search(l);n=r.enableHighlighting?Jn(o,"highlight",r.titleProperty):o.map(c=>c.item)}const s=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[o,c])=>(l[o]={min:c.state.min,max:c.state.max,format:c.format},l),{});if(Object.keys(s).length>0){const l=[];for(let o=0;o<n.length;o++){const c={};for(const[u,f]of Object.entries(s)){const d=h=>f.format==="date"?Te(h).unix():h;Object.prototype.hasOwnProperty.call(n[o],u)?Array.isArray(n[o][u])?c[u]=s[u].min<=d(n[o][u][1])&&d(n[o][u][0])<=s[u].max:d(n[o][u])>=s[u].min&&d(n[o][u])<=s[u].max?c[u]=!0:c[u]=!1:c[u]=!0}Object.values(c).every(u=>!!u)&&l.push(n[o])}n=[...l]}const a=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[o,c])=>(l[o]={geometry:c.state.geometry,mode:c.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let o=0;o<n.length;o++){const c={};for(const u of Object.keys(a)){const f=a[u].mode||"within";Object.prototype.hasOwnProperty.call(n[o],u)&&(f==="within"?on(n[o][u],a[u].geometry):an(n[o][u],a[u].geometry))?c[u]=!0:c[u]=!1}Object.values(c).every(u=>!!u)&&l.push(n[o])}n=[...l]}return n},Zn=async(t,e,r)=>(await(await fetch(`${r.externalFilter(t,e)}`)).json()).features;var es=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,ie=(t,e,r,i)=>{for(var n=i>1?void 0:i?ts(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&es(e,r,n),n};class Ct{constructor(){this.aggregateResults=void 0,this.enableHighlighting=!1,this.filterProperties=[],this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.onFilter=()=>{},this.onSelect=()=>{},this.showResults=!0,this.titleProperty="title",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0}}let J=class extends xr{constructor(){super(...arguments),this._resultAggregation=[],this.filters={},this.items=[],this._config=new Ct,this.apply=t=>{this.items=t.map((r,i)=>({id:`item-${i}`,...r})),this._config.filterProperties.length&&this._config.filterProperties.forEach(r=>{const i={},n=s=>r.format==="date"?Te(s).unix():parseInt(s);this.items.forEach(s=>{if(r.type==="range"){if(Array.isArray(s[r.key])){const a=[n(s[r.key][0]),n(s[r.key][1])];i.min=i.min!==void 0?Math.min(i.min,a[0]):a[0],i.max=i.max!==void 0?Math.max(i.max,a[1]):a[1]}else{const a=n(s[r.key]);i.min=i.min!==void 0?Math.min(i.min,a):a,i.max=i.max!==void 0?Math.max(i.max,a):a}return}Array.isArray(s[r.key])?s[r.key].forEach(a=>{i[a]=void 0}):r.type==="spatial"?(i.geometry=void 0,i.mode=r.mode||"intersects"):i[s[r.key]]=void 0}),this.filters[r.key||r.keys.join("|")]={...r,type:r.type||"multiselect",state:{...i,...r.state},...r.state&&{dirty:!0},...r.type==="range"&&{min:i.min,max:i.max,format:r.format}}}),this._config.matchAllWhenEmpty!==!1&&(this.results=this.sortResults(this.items),this.requestUpdate()),this._config.aggregateResults&&(this._resultAggregation=[...new Set(this.items.reduce((r,i)=>r.concat(i[this._config.aggregateResults]),[]))].sort((r,i)=>r.localeCompare(i)));const e=[];Object.values(this.filters).forEach(r=>{r.type==="text"?r.keys.forEach(i=>{e.includes(i)||e.push(i)}):(r.type==="select"||r.type==="multiselect")&&(e.includes(r.key)||e.push(r.key))}),Kn(this.items,{keys:e,...this._config.fuseConfig}),this.search()}}set config(t){const e=this._config;this._config={...new Ct,...t},this.requestUpdate("config",e)}get config(){return this._config}async search(){let t;this.config.externalFilter?t=await Zn(this.items,this.filters,this._config):t=await Xn(this.items,this.filters,this._config),this.results=this.sortResults(t),this._config.onFilter(this.results,this.filters)}aggregateResults(t,e){return t.filter(r=>{const i=r[this._config.aggregateResults];let n;return this.filters[this._config.aggregateResults]&&(n=Object.keys(this.filters[this._config.aggregateResults]).filter(a=>this.filters[this._config.aggregateResults].state[a])),(n!=null&&n.length?n.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}sortResults(t){return[...t].sort((e,r)=>e[this._config.titleProperty].localeCompare(r[this._config.titleProperty]))}resetFilters(){this.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{t.reset()}),this.search()}toggleAccordion(t){let e;if(t.detail?e=t.detail.target:e=t.target,e.classList.contains("details-filter")){if(!e.open||this.config.expandMultipleFilters)return;this.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const i=r.shadowRoot.querySelector(".details-filter");i&&i!==e&&i.removeAttribute("open")})}else{if(!e.open||this.config.expandMultipleResults)return;this.shadowRoot.querySelectorAll("details").forEach(r=>{r!==e&&r.removeAttribute("open")})}}render(){return L`
      <style>
        ${jt}
        ${!this.unstyled&&Ft}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        @submit="${t=>t.preventDefault()}"
      >
        ${me(this._config.filterProperties.length,()=>L`
            <section class="${this.config.inlineMode?"inline":Z}">
              ${me(!this.config.inlineMode,()=>L`
                    <slot name="filterstitle"
                      ><h4 style="margin-top: 8px">Filters</h4></slot
                    >
                  `)}
              <ul id="filters">
                ${ye(Object.values(this.filters),t=>We`
                  <li>
                    ${t.featured?We`
                          <eox-itemfilter-${Pe(t.type)}
                            slot="filter"
                            data-type="filter"
                            .filterObject=${t}
                            @filter="${()=>this.search()}"
                          ></eox-itemfilter-${Pe(t.type)}>
                        `:We`
                          <eox-itemfilter-expandcontainer
                            .filterObject=${t}
                            .unstyled=${this.unstyled}
                            @details-toggled=${this.toggleAccordion}
                          >
                            <eox-itemfilter-${Pe(t.type)}
                              slot="filter"
                              data-type="filter"
                              data-filter="${t.key}"
                              .filterObject=${t}
                              @filter="${()=>this.search()}"
                            ></eox-itemfilter-${Pe(t.type)}>
                          </eox-itemfilter-expandcontainer>
                      `}
                  </li>
                `)}
              </ul>
              ${me(this._config.filterProperties&&Object.values(this.filters).map(t=>t.dirty).filter(t=>t).length>0,()=>L`
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
        ${me(this.config.showResults&&this.results,()=>L`
            <section id="section-results">
              <div>
                <slot name="resultstitle"
                  ><h4 style="margin-top: 8px">Results</h4></slot
                >
              </div>
              <div id="container-results" class="scroll">
                ${this.results.length<1?L` <small class="no-results">No matching items</small> `:Z}
                <ul id="results" part="results">
                  ${this._config.aggregateResults?ye(this._resultAggregation.filter(t=>this.aggregateResults(this.results,t).length),t=>L`<details
                          class="details-results"
                          @toggle=${this.toggleAccordion}
                          open=${this._config.expandResults||Z}
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
                            ${Sr(this.aggregateResults(this.results,t),e=>e.id,e=>{var r,i;return L`
                                <li
                                  class=${((r=this.selectedResult)==null?void 0:r[this._config.titleProperty])===e[this._config.titleProperty]?"highlighted":Z}
                                >
                                  <label>
                                    <input
                                      data-cy="result-radio"
                                      type="radio"
                                      class="result-radio"
                                      name="result"
                                      id="${e.id}"
                                      checked=${((i=this.selectedResult)==null?void 0:i[this._config.titleProperty])===e[this._config.titleProperty]||Z}
                                      @click=${()=>{this.selectedResult=e,this._config.onSelect(e)}}
                                    />
                                    ${me(this.hasTemplate("result"),()=>this.renderTemplate("result",e,`result-${e.id}`),()=>L`
                                        <span class="title"
                                          >${gt(e[this._config.titleProperty])}</span
                                        >
                                      `)}
                                  </label>
                                </li>
                              `})}
                          </ul>
                        </details>`):ye(this.results,t=>L`<li part="result">
                            <label>
                              <input
                                type="radio"
                                name="result"
                                id="${t.id}"
                                @click=${()=>{this.selectedResult=t,this._config.onSelect(t)}}
                              />
                              ${me(this.hasTemplate("result"),()=>this.renderTemplate("result",t,`result-${t.id}`),()=>L`
                                  <span class="title"
                                    >${gt(t[this._config.titleProperty])}</span
                                  >
                                `)}
                            </label>
                          </li>`)}
                </ul>
              </div>
            </section>
          `)}
      </form>
    `}};ie([Se()],J.prototype,"filters",2);ie([Se()],J.prototype,"items",2);ie([Se()],J.prototype,"results",2);ie([Se()],J.prototype,"selectedResult",2);ie([Y({attribute:!1})],J.prototype,"config",1);ie([Y()],J.prototype,"apply",2);ie([Y({attribute:!1})],J.prototype,"styleOverride",2);ie([Y({type:Boolean})],J.prototype,"unstyled",2);J=ie([ae("eox-itemfilter")],J);const rs=[{archived:!1,code:"E10a2",description:"Actively managed total area from Sentinel-2 data",indicator:"Actively managed total area from Sentinel-2 data",themes:["agriculture"],title:"White Asparagus area [%]",name:"Actively managed total area from Sentinel-2 data",year:2e3,likes:4,years:[2e3,2e3],timestamp:"2023-06-14T13:56:38+00:00",datetime:["2023-06-14T10:56:38+00:00","2023-06-14T22:56:38+00:00"],bbox:[-90,60,-20,82],geometry:{type:"Polygon",coordinates:[[[-90,60],[-20,60],[-20,82],[-90,82]]]}},{archived:!1,code:"E10a9",description:"Agricultural Workers",indicator:"Agricultural Workers",themes:["agriculture"],title:"Workers availability [nr]",name:"Agricultural Workers",year:2020,likes:46,years:[2007,2020],timestamp:"2023-06-13T13:56:38+00:00",datetime:["2023-06-13T10:56:38+00:00","2023-06-13T22:56:38+00:00"],bbox:[0,0,10,10],geometry:{type:"Polygon",coordinates:[[[0,0],[10,0],[10,10],[0,10]]]}},{archived:!1,code:"N1",description:"Air Quality",indicator:"Air Quality",themes:["air"],title:"Sea ice freeboard",name:"Sea ice freeboard",year:2023,likes:34,years:[2008,2023],timestamp:"2023-06-12T13:56:38+00:00",datetime:["2023-06-12T10:56:38+00:00","2023-06-12T22:56:38+00:00"],bbox:[-180,-80,180,-61],geometry:{type:"Polygon",coordinates:[[[-180,-80],[180,-80],[180,-61],[-180,-61]]]}},{archived:!1,code:"E13o",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (all) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2022,likes:177,years:[2021,2022],timestamp:"2023-06-11T13:56:38+00:00",datetime:["2023-06-11T10:56:38+00:00","2023-06-11T22:56:38+00:00"]},{archived:!1,code:"E13p",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (cargo) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2016,likes:0,years:[2005,2016],timestamp:"2023-06-10T13:56:38+00:00",datetime:["2023-06-10T10:56:38+00:00","2023-06-10T22:56:38+00:00"]},{archived:!1,code:"E13q",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (tanker) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2017,likes:0,years:[2006,2017],timestamp:"2023-06-09T13:56:38+00:00",datetime:["2023-06-09T10:56:38+00:00","2023-06-09T22:56:38+00:00"]},{archived:!1,code:"E13r",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (others) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2003,likes:2,years:[2001,2003],timestamp:"2023-06-08T13:56:38+00:00",datetime:["2023-06-08T10:56:38+00:00","2023-06-08T22:56:38+00:00"]},{archived:!1,code:"C1",description:"Boat traffic - NO2 level",indicator:"Boat traffic - NO2 level",themes:["economy","air"],title:"Ships - NO2 Correlation",indicatorOverwrite:"Ports and Shipping - impact on air quality",name:"Boat traffic - NO2 level",year:2020,likes:65,years:[2015,2020],timestamp:"2023-06-07T13:56:38+00:00",datetime:["2023-06-07T10:56:38+00:00","2023-06-07T22:56:38+00:00"]},{archived:!1,code:"CDS1",description:"C3S Data",indicator:"C3S Data",themes:["air"],title:"Temperature",name:"C3S Data",year:2021,likes:34,years:[2021,2021],timestamp:"2023-06-06T13:56:38+00:00",datetime:["2023-06-06T10:56:38+00:00","2023-06-06T22:56:38+00:00"]},{archived:!1,code:"N1a",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level PM2.5 (model)",name:"CAMS Air Quality",year:2023,likes:88,years:[2e3,2023],timestamp:"2023-06-05T13:56:38+00:00",datetime:["2023-06-05T10:56:38+00:00","2023-06-05T22:56:38+00:00"]},{archived:!1,code:"N1b",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level NO2 (model)",name:"CAMS Air Quality",year:2022,likes:77,years:[2019,2022],timestamp:"2023-06-04T13:56:38+00:00",datetime:["2023-06-04T10:56:38+00:00","2023-06-04T22:56:38+00:00"]},{archived:!1,code:"N1c",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level PM10 (model)",name:"CAMS Air Quality",year:2018,likes:23,years:[2014,2018],timestamp:"2023-06-03T13:56:38+00:00",datetime:["2023-06-03T10:56:38+00:00","2023-06-03T22:56:38+00:00"]},{archived:!1,code:"N1d",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level O3 (model)",name:"CAMS Air Quality",year:2018,likes:56,years:[2017,2018],timestamp:"2023-06-02T13:56:38+00:00",datetime:["2023-06-02T10:56:38+00:00","2023-06-02T22:56:38+00:00"]},{archived:!1,code:"E13e",description:"Cargo ships in port based on AIS data",indicator:"Cargo ships in port based on AIS data",themes:["economy"],title:"Cargo Ships [nr]",name:"Cargo ships in port based on AIS data",year:2019,likes:11,years:[2018,2019],timestamp:"2023-06-01T13:56:38+00:00",datetime:["2023-06-01T10:56:38+00:00","2023-06-01T22:56:38+00:00"]},{archived:!1,code:"E13n",description:"Changes in traffic based on mobile data",indicator:"Changes in traffic based on mobile data",themes:["economy"],title:"Trucks transiting ports [%]",name:"Changes in traffic based on mobile data",year:2017,likes:8,years:[2015,2017],timestamp:"2023-05-29T13:56:38+00:00",datetime:["2023-05-29T10:56:38+00:00","2023-05-29T22:56:38+00:00"]},{archived:!1,code:"N3c",description:"CMEMS product",indicator:"CMEMS product",themes:["water"],title:"CHL-a concentration (map, 1km)",name:"CMEMS product",year:2015,likes:37,years:[2014,2015],timestamp:"2023-05-28T13:56:38+00:00",datetime:["2023-05-28T10:56:38+00:00","2023-05-28T22:56:38+00:00"]},{archived:!1,code:"CV",description:"Covid-19 cases",indicator:"Covid-19 cases",themes:["health"],title:"Covid-19 cases",name:"Covid-19 cases",year:2013,likes:4,years:[2001,2013],timestamp:"2023-05-27T13:56:38+00:00",datetime:["2023-05-27T10:56:38+00:00","2023-05-27T22:56:38+00:00"]},{archived:!1,code:"OW",description:"Covid-19 vaccinations",indicator:"Covid-19 vaccinations",themes:["health"],title:"Covid-19 vaccinations",name:"Covid-19 vaccinations",year:2016,likes:39,years:[2015,2016],timestamp:"2023-05-26T13:56:38+00:00",datetime:["2023-05-26T10:56:38+00:00","2023-05-26T22:56:38+00:00"]},{archived:!1,code:"E3",description:"Crude Oil and other input materials",indicator:"Crude Oil and other input materials",themes:["economy"],title:"Raw Material Inventory",name:"Crude Oil and other input materials",year:2020,likes:28,years:[2014,2020],timestamp:"2023-05-25T13:56:38+00:00",datetime:["2023-05-25T10:56:38+00:00","2023-05-25T22:56:38+00:00"]},{archived:!1,code:"E13l",description:"Cruise ships in port based on AIS data",indicator:"Cruise ships in port based on AIS data",themes:["economy"],title:"Cruise Ships [nr]",name:"Cruise ships in port based on AIS data",year:1999,likes:17,years:[1998,1999],timestamp:"2023-05-24T13:56:38+00:00",datetime:["2023-05-24T10:56:38+00:00","2023-05-24T22:56:38+00:00"]}],ds={title:"Elements/eox-itemfilter",tags:["autodocs"],component:"eox-itemfilter",render:t=>{const e=new J;return e.config=t,e.apply(rs),e}},Ce={args:{titleProperty:"title",filterProperties:[{keys:["title","themes"],title:"Search",type:"text",expanded:!0,state:{title:"no2",themes:"no2"}},{key:"themes",title:"Theme",type:"multiselect"},{key:"timestamp",type:"range",format:"date"},{key:"geometry",type:"spatial"}],aggregateResults:"themes",enableHighlighting:!0,onSelect:t=>{console.log(t)}}};var Tt,Lt,It;Ce.parameters={...Ce.parameters,docs:{...(Tt=Ce.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  args: {
    titleProperty: "title",
    filterProperties: [{
      keys: ["title", "themes"],
      title: "Search",
      type: "text",
      expanded: true,
      state: {
        title: "no2",
        themes: "no2"
      }
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
}`,...(It=(Lt=Ce.parameters)==null?void 0:Lt.docs)==null?void 0:It.source}}};const ps=["Primary"];export{Ce as Primary,ps as __namedExportsOrder,ds as default};
//# sourceMappingURL=itemfilter.stories-8f45ca6b.js.map
