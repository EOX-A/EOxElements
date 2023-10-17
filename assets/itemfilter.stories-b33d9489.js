import{T as hr,s as he,x as L,A as Z}from"./lit-element-c29cbb6b.js";import{n as V,e as oe,t as Ee}from"./query-assigned-elements-bec7f9a4.js";import{e as dr,i as mr,t as pr,o as ge,n as me,a as pt}from"./unsafe-html-c0e6b744.js";import{m as gr,f as ce,c as Me,p as Be,a as yr}from"./directive-helpers-2720686e.js";import{n as He,o as Ae}from"./static-9a3d301b.js";import"./toolcool-range-slider.min-a799c142.js";import{c as Oe,g as nt,a as De}from"./_commonjsHelpers-de833af9.js";import{r as vr,T as br}from"./templateElement-8d2f8dc8.js";import{b as xr}from"./button-60c82d2c.js";import{c as wr,r as $r,s as Mr,l as Or}from"./slider-5ac648d2.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=(t,e,r)=>{const i=new Map;for(let n=e;n<=r;n++)i.set(t[n],n);return i},Er=dr(class extends mr{constructor(t){if(super(t),t.type!==pr.CHILD)throw Error("repeat() can only be used in text expressions")}ct(t,e,r){let i;r===void 0?r=e:e!==void 0&&(i=e);const n=[],s=[];let a=0;for(const l of t)n[a]=i?i(l,a):a,s[a]=r(l,a),a++;return{values:s,keys:n}}render(t,e,r){return this.ct(t,e,r).values}update(t,[e,r,i]){var n;const s=gr(t),{values:a,keys:l}=this.ct(e,r,i);if(!Array.isArray(s))return this.ut=l,a;const o=(n=this.ut)!==null&&n!==void 0?n:this.ut=[],c=[];let u,f,d=0,h=s.length-1,m=0,v=a.length-1;for(;d<=h&&m<=v;)if(s[d]===null)d++;else if(s[h]===null)h--;else if(o[d]===l[m])c[m]=ce(s[d],a[m]),d++,m++;else if(o[h]===l[v])c[v]=ce(s[h],a[v]),h--,v--;else if(o[d]===l[v])c[v]=ce(s[d],a[v]),Me(t,c[v+1],s[d]),d++,v--;else if(o[h]===l[m])c[m]=ce(s[h],a[m]),Me(t,s[d],s[h]),h--,m++;else if(u===void 0&&(u=gt(l,m,v),f=gt(o,d,h)),u.has(o[d]))if(u.has(o[h])){const A=f.get(l[m]),S=A!==void 0?s[A]:null;if(S===null){const I=Me(t,s[d]);ce(I,a[m]),c[m]=I}else c[m]=ce(S,a[m]),Me(t,s[d],S),s[A]=null;m++}else Be(s[h]),h--;else Be(s[d]),d++;for(;m<=v;){const A=Me(t,c[v+1]);ce(A,a[m]),c[m++]=A}for(;d<=h;){const A=s[d++];A!==null&&Be(A)}return this.ut=l,yr(t,c),hr}});var It={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(Oe,function(){var r=1e3,i=6e4,n=36e5,s="millisecond",a="second",l="minute",o="hour",c="day",u="week",f="month",d="quarter",h="year",m="date",v="Invalid Date",A=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,S=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,I={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(w){var p=["th","st","nd","rd"],g=w%100;return"["+w+(p[(g-20)%10]||p[g]||p[0])+"]"}},T=function(w,p,g){var b=String(w);return!b||b.length>=p?w:""+Array(p+1-b.length).join(g)+w},D={s:T,z:function(w){var p=-w.utcOffset(),g=Math.abs(p),b=Math.floor(g/60),y=g%60;return(p<=0?"+":"-")+T(b,2,"0")+":"+T(y,2,"0")},m:function w(p,g){if(p.date()<g.date())return-w(g,p);var b=12*(g.year()-p.year())+(g.month()-p.month()),y=p.clone().add(b,f),M=g-y<0,$=p.clone().add(b+(M?-1:1),f);return+(-(b+(g-y)/(M?y-$:$-y))||0)},a:function(w){return w<0?Math.ceil(w)||0:Math.floor(w)},p:function(w){return{M:f,y:h,w:u,d:c,D:m,h:o,m:l,s:a,ms:s,Q:d}[w]||String(w||"").toLowerCase().replace(/s$/,"")},u:function(w){return w===void 0}},R="en",O={};O[R]=I;var C=function(w){return w instanceof ie},F=function w(p,g,b){var y;if(!p)return R;if(typeof p=="string"){var M=p.toLowerCase();O[M]&&(y=M),g&&(O[M]=g,y=M);var $=p.split("-");if(!y&&$.length>1)return w($[0])}else{var P=p.name;O[P]=p,y=P}return!b&&y&&(R=y),y||!b&&R},_=function(w,p){if(C(w))return w.clone();var g=typeof p=="object"?p:{};return g.date=w,g.args=arguments,new ie(g)},E=D;E.l=F,E.i=C,E.w=function(w,p){return _(w,{locale:p.$L,utc:p.$u,x:p.$x,$offset:p.$offset})};var ie=function(){function w(g){this.$L=F(g.locale,null,!0),this.parse(g)}var p=w.prototype;return p.parse=function(g){this.$d=function(b){var y=b.date,M=b.utc;if(y===null)return new Date(NaN);if(E.u(y))return new Date;if(y instanceof Date)return new Date(y);if(typeof y=="string"&&!/Z$/i.test(y)){var $=y.match(A);if($){var P=$[2]-1||0,j=($[7]||"0").substring(0,3);return M?new Date(Date.UTC($[1],P,$[3]||1,$[4]||0,$[5]||0,$[6]||0,j)):new Date($[1],P,$[3]||1,$[4]||0,$[5]||0,$[6]||0,j)}}return new Date(y)}(g),this.$x=g.x||{},this.init()},p.init=function(){var g=this.$d;this.$y=g.getFullYear(),this.$M=g.getMonth(),this.$D=g.getDate(),this.$W=g.getDay(),this.$H=g.getHours(),this.$m=g.getMinutes(),this.$s=g.getSeconds(),this.$ms=g.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return this.$d.toString()!==v},p.isSame=function(g,b){var y=_(g);return this.startOf(b)<=y&&y<=this.endOf(b)},p.isAfter=function(g,b){return _(g)<this.startOf(b)},p.isBefore=function(g,b){return this.endOf(b)<_(g)},p.$g=function(g,b,y){return E.u(g)?this[b]:this.set(y,g)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(g,b){var y=this,M=!!E.u(b)||b,$=E.p(g),P=function(de,H){var se=E.w(y.$u?Date.UTC(y.$y,H,de):new Date(y.$y,H,de),y);return M?se:se.endOf(c)},j=function(de,H){return E.w(y.toDate()[de].apply(y.toDate("s"),(M?[0,0,0,0]:[23,59,59,999]).slice(H)),y)},k=this.$W,N=this.$M,ne=this.$D,X="set"+(this.$u?"UTC":"");switch($){case h:return M?P(1,0):P(31,11);case f:return M?P(1,N):P(0,N+1);case u:var we=this.$locale().weekStart||0,$e=(k<we?k+7:k)-we;return P(M?ne-$e:ne+(6-$e),N);case c:case m:return j(X+"Hours",0);case o:return j(X+"Minutes",1);case l:return j(X+"Seconds",2);case a:return j(X+"Milliseconds",3);default:return this.clone()}},p.endOf=function(g){return this.startOf(g,!1)},p.$set=function(g,b){var y,M=E.p(g),$="set"+(this.$u?"UTC":""),P=(y={},y[c]=$+"Date",y[m]=$+"Date",y[f]=$+"Month",y[h]=$+"FullYear",y[o]=$+"Hours",y[l]=$+"Minutes",y[a]=$+"Seconds",y[s]=$+"Milliseconds",y)[M],j=M===c?this.$D+(b-this.$W):b;if(M===f||M===h){var k=this.clone().set(m,1);k.$d[P](j),k.init(),this.$d=k.set(m,Math.min(this.$D,k.daysInMonth())).$d}else P&&this.$d[P](j);return this.init(),this},p.set=function(g,b){return this.clone().$set(g,b)},p.get=function(g){return this[E.p(g)]()},p.add=function(g,b){var y,M=this;g=Number(g);var $=E.p(b),P=function(N){var ne=_(M);return E.w(ne.date(ne.date()+Math.round(N*g)),M)};if($===f)return this.set(f,this.$M+g);if($===h)return this.set(h,this.$y+g);if($===c)return P(1);if($===u)return P(7);var j=(y={},y[l]=i,y[o]=n,y[a]=r,y)[$]||1,k=this.$d.getTime()+g*j;return E.w(k,this)},p.subtract=function(g,b){return this.add(-1*g,b)},p.format=function(g){var b=this,y=this.$locale();if(!this.isValid())return y.invalidDate||v;var M=g||"YYYY-MM-DDTHH:mm:ssZ",$=E.z(this),P=this.$H,j=this.$m,k=this.$M,N=y.weekdays,ne=y.months,X=function(H,se,Ne,_e){return H&&(H[se]||H(b,M))||Ne[se].slice(0,_e)},we=function(H){return E.s(P%12||12,H,"0")},$e=y.meridiem||function(H,se,Ne){var _e=H<12?"AM":"PM";return Ne?_e.toLowerCase():_e},de={YY:String(this.$y).slice(-2),YYYY:E.s(this.$y,4,"0"),M:k+1,MM:E.s(k+1,2,"0"),MMM:X(y.monthsShort,k,ne,3),MMMM:X(ne,k),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:X(y.weekdaysMin,this.$W,N,2),ddd:X(y.weekdaysShort,this.$W,N,3),dddd:N[this.$W],H:String(P),HH:E.s(P,2,"0"),h:we(1),hh:we(2),a:$e(P,j,!0),A:$e(P,j,!1),m:String(j),mm:E.s(j,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:$};return M.replace(S,function(H,se){return se||de[H]||$.replace(":","")})},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(g,b,y){var M,$=E.p(b),P=_(g),j=(P.utcOffset()-this.utcOffset())*i,k=this-P,N=E.m(this,P);return N=(M={},M[h]=N/12,M[f]=N,M[d]=N/3,M[u]=(k-j)/6048e5,M[c]=(k-j)/864e5,M[o]=k/n,M[l]=k/i,M[a]=k/r,M)[$]||k,y?N:E.a(N)},p.daysInMonth=function(){return this.endOf(f).$D},p.$locale=function(){return O[this.$L]},p.locale=function(g,b){if(!g)return this.$L;var y=this.clone(),M=F(g,b,!0);return M&&(y.$L=M),y},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},w}(),K=ie.prototype;return _.prototype=K,[["$ms",s],["$s",a],["$m",l],["$H",o],["$W",c],["$M",f],["$y",h],["$D",m]].forEach(function(w){K[w[1]]=function(p){return this.$g(p,w[0],w[1])}}),_.extend=function(w,p){return w.$i||(w(p,ie,_),w.$i=!0),_},_.locale=F,_.isDayjs=C,_.unix=function(w){return _(1e3*w)},_.en=O[R],_.Ls=O,_.p={},_})})(It);var Sr=It.exports;const Te=nt(Sr),Rt=`
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
`,jt=`
* {
  font-family: Roboto, sans-serif;
}

${xr}
${wr}
${$r}
${Mr}

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
`;var _r=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,st=(t,e,r,i)=>{for(var n=i>1?void 0:i?Ar(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&_r(e,r,n),n};let ke=class extends he{handleDetailsToggle(t){this.dispatchEvent(new CustomEvent("details-toggled",{detail:t,bubbles:!0,composed:!0}))}render(){return L`
      <style>
        ${Rt}
        ${!this.unstyled&&jt}
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
    `}};st([V({attribute:!1})],ke.prototype,"filterObject",2);st([V()],ke.prototype,"unstyled",2);ke=st([oe("eox-itemfilter-expandcontainer")],ke);var Pr=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Ft=(t,e,r,i)=>{for(var n=i>1?void 0:i?Cr(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Pr(e,r,n),n};let Ge=class extends he{reset(){this.renderRoot.querySelectorAll("input[type='checkbox']").forEach(t=>{t instanceof HTMLInputElement&&(t.checked=!1)});for(const t in this.filterObject.state)this.filterObject.state[t]=!1;delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return L`
      <ul>
        ${ge(Object.keys(this.filterObject.state).sort((t,e)=>t.localeCompare(e)),t=>L`
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
    `}};Ft([V()],Ge.prototype,"filterObject",2);Ge=Ft([oe("eox-itemfilter-multiselect")],Ge);var Tr="Expected a function",yt=0/0,kr="[object Symbol]",Lr=/^\s+|\s+$/g,Ir=/^[-+]0x[0-9a-f]+$/i,Rr=/^0b[01]+$/i,jr=/^0o[0-7]+$/i,Fr=parseInt,Dr=typeof Oe=="object"&&Oe&&Oe.Object===Object&&Oe,Nr=typeof self=="object"&&self&&self.Object===Object&&self,Br=Dr||Nr||Function("return this")(),Hr=Object.prototype,Wr=Hr.toString,qr=Math.max,Gr=Math.min,We=function(){return Br.Date.now()};function Vr(t,e,r){var i,n,s,a,l,o,c=0,u=!1,f=!1,d=!0;if(typeof t!="function")throw new TypeError(Tr);e=vt(e)||0,Ve(r)&&(u=!!r.leading,f="maxWait"in r,s=f?qr(vt(r.maxWait)||0,e):s,d="trailing"in r?!!r.trailing:d);function h(O){var C=i,F=n;return i=n=void 0,c=O,a=t.apply(F,C),a}function m(O){return c=O,l=setTimeout(S,e),u?h(O):a}function v(O){var C=O-o,F=O-c,_=e-C;return f?Gr(_,s-F):_}function A(O){var C=O-o,F=O-c;return o===void 0||C>=e||C<0||f&&F>=s}function S(){var O=We();if(A(O))return I(O);l=setTimeout(S,v(O))}function I(O){return l=void 0,d&&i?h(O):(i=n=void 0,a)}function T(){l!==void 0&&clearTimeout(l),c=0,i=o=n=l=void 0}function D(){return l===void 0?a:I(We())}function R(){var O=We(),C=A(O);if(i=arguments,n=this,o=O,C){if(l===void 0)return m(o);if(f)return l=setTimeout(S,e),h(o)}return l===void 0&&(l=setTimeout(S,e)),a}return R.cancel=T,R.flush=D,R}function Ve(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function zr(t){return!!t&&typeof t=="object"}function Yr(t){return typeof t=="symbol"||zr(t)&&Wr.call(t)==kr}function vt(t){if(typeof t=="number")return t;if(Yr(t))return yt;if(Ve(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Ve(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Lr,"");var r=Rr.test(t);return r||jr.test(t)?Fr(t.slice(2),r?2:8):Ir.test(t)?yt:+t}var Ur=Vr;const Dt=nt(Ur);var Qr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,Nt=(t,e,r,i)=>{for(var n=i>1?void 0:i?Jr(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Qr(e,r,n),n};let ze=class extends he{constructor(){super(...arguments),this.inputHandler=t=>{let e,r;[e,r]=t.detail.values,(e!==this.filterObject.state.min||r!=this.filterObject.state.max)&&([this.filterObject.state.min,this.filterObject.state.max]=[e,r],this.filterObject.dirty=!0),this.dispatchEvent(new CustomEvent("filter")),this.requestUpdate()},this.debouncedInputHandler=Dt(this.inputHandler,0,{leading:!0})}reset(){this.filterObject.state.min=this.filterObject.min,this.filterObject.state.max=this.filterObject.max,delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return L`
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
    `}};Nt([V()],ze.prototype,"filterObject",2);ze=Nt([oe("eox-itemfilter-range")],ze);var Kr=Object.defineProperty,Xr=Object.getOwnPropertyDescriptor,Bt=(t,e,r,i)=>{for(var n=i>1?void 0:i?Xr(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Kr(e,r,n),n};let Ye=class extends he{reset(){this.renderRoot.querySelectorAll("input[type='radio']").forEach(t=>{t instanceof HTMLInputElement&&(t.checked=!1)});for(const t in this.filterObject.state)this.filterObject.state[t]=!1;delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return L`
      <ul>
        ${ge(Object.keys(this.filterObject.state).sort((t,e)=>t.localeCompare(e)),t=>L`
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
    `}};Bt([V()],Ye.prototype,"filterObject",2);Ye=Bt([oe("eox-itemfilter-select")],Ye);var B=63710088e-1,at={centimeters:B*100,centimetres:B*100,degrees:B/111325,feet:B*3.28084,inches:B*39.37,kilometers:B/1e3,kilometres:B/1e3,meters:B,metres:B,miles:B/1609.344,millimeters:B*1e3,millimetres:B*1e3,nauticalmiles:B/1852,radians:1,yards:B*1.0936},Zr={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:1/1e3,kilometres:1/1e3,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/B,yards:1.0936133},Ue={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046};function G(t,e,r){r===void 0&&(r={});var i={type:"Feature"};return(r.id===0||r.id)&&(i.id=r.id),r.bbox&&(i.bbox=r.bbox),i.properties=e||{},i.geometry=t,i}function ei(t,e,r){switch(t){case"Point":return Q(e).geometry;case"LineString":return z(e).geometry;case"Polygon":return ot(e).geometry;case"MultiPoint":return Ht(e).geometry;case"MultiLineString":return lt(e).geometry;case"MultiPolygon":return Wt(e).geometry;default:throw new Error(t+" is invalid")}}function Q(t,e,r){if(r===void 0&&(r={}),!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Le(t[0])||!Le(t[1]))throw new Error("coordinates must contain numbers");var i={type:"Point",coordinates:t};return G(i,e,r)}function ti(t,e,r){return r===void 0&&(r={}),ae(t.map(function(i){return Q(i,e)}),r)}function ot(t,e,r){r===void 0&&(r={});for(var i=0,n=t;i<n.length;i++){var s=n[i];if(s.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var a=0;a<s[s.length-1].length;a++)if(s[s.length-1][a]!==s[0][a])throw new Error("First and last Position are not equivalent.")}var l={type:"Polygon",coordinates:t};return G(l,e,r)}function ri(t,e,r){return r===void 0&&(r={}),ae(t.map(function(i){return ot(i,e)}),r)}function z(t,e,r){if(r===void 0&&(r={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");var i={type:"LineString",coordinates:t};return G(i,e,r)}function ii(t,e,r){return r===void 0&&(r={}),ae(t.map(function(i){return z(i,e)}),r)}function ae(t,e){e===void 0&&(e={});var r={type:"FeatureCollection"};return e.id&&(r.id=e.id),e.bbox&&(r.bbox=e.bbox),r.features=t,r}function lt(t,e,r){r===void 0&&(r={});var i={type:"MultiLineString",coordinates:t};return G(i,e,r)}function Ht(t,e,r){r===void 0&&(r={});var i={type:"MultiPoint",coordinates:t};return G(i,e,r)}function Wt(t,e,r){r===void 0&&(r={});var i={type:"MultiPolygon",coordinates:t};return G(i,e,r)}function ni(t,e,r){r===void 0&&(r={});var i={type:"GeometryCollection",geometries:t};return G(i,e,r)}function si(t,e){if(e===void 0&&(e=0),e&&!(e>=0))throw new Error("precision must be a positive number");var r=Math.pow(10,e||0);return Math.round(t*r)/r}function qt(t,e){e===void 0&&(e="kilometers");var r=at[e];if(!r)throw new Error(e+" units is invalid");return t*r}function ct(t,e){e===void 0&&(e="kilometers");var r=at[e];if(!r)throw new Error(e+" units is invalid");return t/r}function ai(t,e){return Gt(ct(t,e))}function oi(t){var e=t%360;return e<0&&(e+=360),e}function Gt(t){var e=t%(2*Math.PI);return e*180/Math.PI}function li(t){var e=t%360;return e*Math.PI/180}function ci(t,e,r){if(e===void 0&&(e="kilometers"),r===void 0&&(r="kilometers"),!(t>=0))throw new Error("length must be a positive number");return qt(ct(t,e),r)}function ui(t,e,r){if(e===void 0&&(e="meters"),r===void 0&&(r="kilometers"),!(t>=0))throw new Error("area must be a positive number");var i=Ue[e];if(!i)throw new Error("invalid original units");var n=Ue[r];if(!n)throw new Error("invalid final units");return t/i*n}function Le(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}function ut(t){return!!t&&t.constructor===Object}function fi(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(t.length!==4&&t.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach(function(e){if(!Le(e))throw new Error("bbox must only contain numbers")})}function hi(t){if(!t)throw new Error("id is required");if(["string","number"].indexOf(typeof t)===-1)throw new Error("id must be a number or a string")}const di=Object.freeze(Object.defineProperty({__proto__:null,areaFactors:Ue,bearingToAzimuth:oi,convertArea:ui,convertLength:ci,degreesToRadians:li,earthRadius:B,factors:at,feature:G,featureCollection:ae,geometry:ei,geometryCollection:ni,isNumber:Le,isObject:ut,lengthToDegrees:ai,lengthToRadians:ct,lineString:z,lineStrings:ii,multiLineString:lt,multiPoint:Ht,multiPolygon:Wt,point:Q,points:ti,polygon:ot,polygons:ri,radiansToDegrees:Gt,radiansToLength:qt,round:si,unitsFactors:Zr,validateBBox:fi,validateId:hi},Symbol.toStringTag,{value:"Module"}));function Vt(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return t.geometry.coordinates;if(t.type==="Point")return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function ye(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function ve(t){return t.type==="Feature"?t.geometry:t}function q(t,e,r){if(r===void 0&&(r={}),!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");var i=Vt(t),n=ve(e),s=n.type,a=e.bbox,l=n.coordinates;if(a&&mi(i,a)===!1)return!1;s==="Polygon"&&(l=[l]);for(var o=!1,c=0;c<l.length&&!o;c++)if(bt(i,l[c][0],r.ignoreBoundary)){for(var u=!1,f=1;f<l[c].length&&!u;)bt(i,l[c][f],!r.ignoreBoundary)&&(u=!0),f++;u||(o=!0)}return o}function bt(t,e,r){var i=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var n=0,s=e.length-1;n<e.length;s=n++){var a=e[n][0],l=e[n][1],o=e[s][0],c=e[s][1],u=t[1]*(a-o)+l*(o-t[0])+c*(t[0]-a)===0&&(a-t[0])*(o-t[0])<=0&&(l-t[1])*(c-t[1])<=0;if(u)return!r;var f=l>t[1]!=c>t[1]&&t[0]<(o-a)*(t[1]-l)/(c-l)+a;f&&(i=!i)}return i}function mi(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}function be(t,e,r){if(t!==null)for(var i,n,s,a,l,o,c,u=0,f=0,d,h=t.type,m=h==="FeatureCollection",v=h==="Feature",A=m?t.features.length:1,S=0;S<A;S++){c=m?t.features[S].geometry:v?t.geometry:t,d=c?c.type==="GeometryCollection":!1,l=d?c.geometries.length:1;for(var I=0;I<l;I++){var T=0,D=0;if(a=d?c.geometries[I]:c,a!==null){o=a.coordinates;var R=a.type;switch(u=r&&(R==="Polygon"||R==="MultiPolygon")?1:0,R){case null:break;case"Point":if(e(o,f,S,T,D)===!1)return!1;f++,T++;break;case"LineString":case"MultiPoint":for(i=0;i<o.length;i++){if(e(o[i],f,S,T,D)===!1)return!1;f++,R==="MultiPoint"&&T++}R==="LineString"&&T++;break;case"Polygon":case"MultiLineString":for(i=0;i<o.length;i++){for(n=0;n<o[i].length-u;n++){if(e(o[i][n],f,S,T,D)===!1)return!1;f++}R==="MultiLineString"&&T++,R==="Polygon"&&D++}R==="Polygon"&&T++;break;case"MultiPolygon":for(i=0;i<o.length;i++){for(D=0,n=0;n<o[i].length;n++){for(s=0;s<o[i][n].length-u;s++){if(e(o[i][n][s],f,S,T,D)===!1)return!1;f++}D++}T++}break;case"GeometryCollection":for(i=0;i<a.geometries.length;i++)if(be(a.geometries[i],e,r)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function pi(t,e,r,i){var n=r;return be(t,function(s,a,l,o,c){a===0&&r===void 0?n=s:n=e(n,s,a,l,o,c)},i),n}function zt(t,e){var r;switch(t.type){case"FeatureCollection":for(r=0;r<t.features.length&&e(t.features[r].properties,r)!==!1;r++);break;case"Feature":e(t.properties,0);break}}function gi(t,e,r){var i=r;return zt(t,function(n,s){s===0&&r===void 0?i=n:i=e(i,n,s)}),i}function Ie(t,e){if(t.type==="Feature")e(t,0);else if(t.type==="FeatureCollection")for(var r=0;r<t.features.length&&e(t.features[r],r)!==!1;r++);}function yi(t,e,r){var i=r;return Ie(t,function(n,s){s===0&&r===void 0?i=n:i=e(i,n,s)}),i}function vi(t){var e=[];return be(t,function(r){e.push(r)}),e}function ft(t,e){var r,i,n,s,a,l,o,c,u,f,d=0,h=t.type==="FeatureCollection",m=t.type==="Feature",v=h?t.features.length:1;for(r=0;r<v;r++){for(l=h?t.features[r].geometry:m?t.geometry:t,c=h?t.features[r].properties:m?t.properties:{},u=h?t.features[r].bbox:m?t.bbox:void 0,f=h?t.features[r].id:m?t.id:void 0,o=l?l.type==="GeometryCollection":!1,a=o?l.geometries.length:1,n=0;n<a;n++){if(s=o?l.geometries[n]:l,s===null){if(e(null,d,c,u,f)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(s,d,c,u,f)===!1)return!1;break}case"GeometryCollection":{for(i=0;i<s.geometries.length;i++)if(e(s.geometries[i],d,c,u,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}d++}}function bi(t,e,r){var i=r;return ft(t,function(n,s,a,l,o){s===0&&r===void 0?i=n:i=e(i,n,s,a,l,o)}),i}function ee(t,e){ft(t,function(r,i,n,s,a){var l=r===null?null:r.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(G(r,n,{bbox:s,id:a}),i,0)===!1?!1:void 0}var o;switch(l){case"MultiPoint":o="Point";break;case"MultiLineString":o="LineString";break;case"MultiPolygon":o="Polygon";break}for(var c=0;c<r.coordinates.length;c++){var u=r.coordinates[c],f={type:o,coordinates:u};if(e(G(f,n),i,c)===!1)return!1}})}function xi(t,e,r){var i=r;return ee(t,function(n,s,a){s===0&&a===0&&r===void 0?i=n:i=e(i,n,s,a)}),i}function Yt(t,e){ee(t,function(r,i,n){var s=0;if(r.geometry){var a=r.geometry.type;if(!(a==="Point"||a==="MultiPoint")){var l,o=0,c=0,u=0;if(be(r,function(f,d,h,m,v){if(l===void 0||i>o||m>c||v>u){l=f,o=i,c=m,u=v,s=0;return}var A=z([l,f],r.properties);if(e(A,i,n,v,s)===!1)return!1;s++,l=f})===!1)return!1}}})}function wi(t,e,r){var i=r,n=!1;return Yt(t,function(s,a,l,o,c){n===!1&&r===void 0?i=s:i=e(i,s,a,l,o,c),n=!0}),i}function Ut(t,e){if(!t)throw new Error("geojson is required");ee(t,function(r,i,n){if(r.geometry!==null){var s=r.geometry.type,a=r.geometry.coordinates;switch(s){case"LineString":if(e(r,i,n,0,0)===!1)return!1;break;case"Polygon":for(var l=0;l<a.length;l++)if(e(z(a[l],r.properties),i,n,l)===!1)return!1;break}}})}function $i(t,e,r){var i=r;return Ut(t,function(n,s,a,l){s===0&&r===void 0?i=n:i=e(i,n,s,a,l)}),i}function Mi(t,e){if(e=e||{},!ut(e))throw new Error("options is invalid");var r=e.featureIndex||0,i=e.multiFeatureIndex||0,n=e.geometryIndex||0,s=e.segmentIndex||0,a=e.properties,l;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),a=a||t.features[r].properties,l=t.features[r].geometry;break;case"Feature":a=a||t.properties,l=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=t;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var o=l.coordinates;switch(l.type){case"Point":case"MultiPoint":return null;case"LineString":return s<0&&(s=o.length+s-1),z([o[s],o[s+1]],a,e);case"Polygon":return n<0&&(n=o.length+n),s<0&&(s=o[n].length+s-1),z([o[n][s],o[n][s+1]],a,e);case"MultiLineString":return i<0&&(i=o.length+i),s<0&&(s=o[i].length+s-1),z([o[i][s],o[i][s+1]],a,e);case"MultiPolygon":return i<0&&(i=o.length+i),n<0&&(n=o[i].length+n),s<0&&(s=o[i][n].length-s-1),z([o[i][n][s],o[i][n][s+1]],a,e)}throw new Error("geojson is invalid")}function Oi(t,e){if(e=e||{},!ut(e))throw new Error("options is invalid");var r=e.featureIndex||0,i=e.multiFeatureIndex||0,n=e.geometryIndex||0,s=e.coordIndex||0,a=e.properties,l;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),a=a||t.features[r].properties,l=t.features[r].geometry;break;case"Feature":a=a||t.properties,l=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=t;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var o=l.coordinates;switch(l.type){case"Point":return Q(o,a,e);case"MultiPoint":return i<0&&(i=o.length+i),Q(o[i],a,e);case"LineString":return s<0&&(s=o.length+s),Q(o[s],a,e);case"Polygon":return n<0&&(n=o.length+n),s<0&&(s=o[n].length+s),Q(o[n][s],a,e);case"MultiLineString":return i<0&&(i=o.length+i),s<0&&(s=o[i].length+s),Q(o[i][s],a,e);case"MultiPolygon":return i<0&&(i=o.length+i),n<0&&(n=o[i].length+n),s<0&&(s=o[i][n].length-s),Q(o[i][n][s],a,e)}throw new Error("geojson is invalid")}const Ei=Object.freeze(Object.defineProperty({__proto__:null,coordAll:vi,coordEach:be,coordReduce:pi,featureEach:Ie,featureReduce:yi,findPoint:Oi,findSegment:Mi,flattenEach:ee,flattenReduce:xi,geomEach:ft,geomReduce:bi,lineEach:Ut,lineReduce:$i,propEach:zt,propReduce:gi,segmentEach:Yt,segmentReduce:wi},Symbol.toStringTag,{value:"Module"}));function xt(t){if(!t)throw new Error("geojson is required");var e=[];return ee(t,function(r){Si(r,e)}),ae(e)}function Si(t,e){var r=[],i=t.geometry;if(i!==null){switch(i.type){case"Polygon":r=ye(i);break;case"LineString":r=[ye(i)]}r.forEach(function(n){var s=_i(n,t.properties);s.forEach(function(a){a.id=e.length,e.push(a)})})}}function _i(t,e){var r=[];return t.reduce(function(i,n){var s=z([i,n],e);return s.bbox=Ai(i,n),r.push(s),n}),r}function Ai(t,e){var r=t[0],i=t[1],n=e[0],s=e[1],a=r<n?r:n,l=i<s?i:s,o=r>n?r:n,c=i>s?i:s;return[a,l,o,c]}var ht={exports:{}};const Pi=De(vr),Ci=De(di),Ti=De(Ei);function fe(t){var e=[1/0,1/0,-1/0,-1/0];return be(t,function(r){e[0]>r[0]&&(e[0]=r[0]),e[1]>r[1]&&(e[1]=r[1]),e[2]<r[0]&&(e[2]=r[0]),e[3]<r[1]&&(e[3]=r[1])}),e}fe.default=fe;const ki=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"})),Li=De(ki);var U=Pi,Qt=Ci,Jt=Ti,pe=Li.default,Ii=Jt.featureEach;Jt.coordEach;Qt.polygon;var wt=Qt.featureCollection;function Kt(t){var e=new U(t);return e.insert=function(r){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:pe(r),U.prototype.insert.call(this,r)},e.load=function(r){var i=[];return Array.isArray(r)?r.forEach(function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:pe(n),i.push(n)}):Ii(r,function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:pe(n),i.push(n)}),U.prototype.load.call(this,i)},e.remove=function(r,i){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:pe(r),U.prototype.remove.call(this,r,i)},e.clear=function(){return U.prototype.clear.call(this)},e.search=function(r){var i=U.prototype.search.call(this,this.toBBox(r));return wt(i)},e.collides=function(r){return U.prototype.collides.call(this,this.toBBox(r))},e.all=function(){var r=U.prototype.all.call(this);return wt(r)},e.toJSON=function(){return U.prototype.toJSON.call(this)},e.fromJSON=function(r){return U.prototype.fromJSON.call(this,r)},e.toBBox=function(r){var i;if(r.bbox)i=r.bbox;else if(Array.isArray(r)&&r.length===4)i=r;else if(Array.isArray(r)&&r.length===6)i=[r[0],r[1],r[3],r[4]];else if(r.type==="Feature")i=pe(r);else if(r.type==="FeatureCollection")i=pe(r);else throw new Error("invalid geojson");return{minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}},e}ht.exports=Kt;ht.exports.default=Kt;var Ri=ht.exports;const ji=nt(Ri);function dt(t,e){var r={},i=[];if(t.type==="LineString"&&(t=G(t)),e.type==="LineString"&&(e=G(e)),t.type==="Feature"&&e.type==="Feature"&&t.geometry!==null&&e.geometry!==null&&t.geometry.type==="LineString"&&e.geometry.type==="LineString"&&t.geometry.coordinates.length===2&&e.geometry.coordinates.length===2){var n=$t(t,e);return n&&i.push(n),ae(i)}var s=ji();return s.load(xt(e)),Ie(xt(t),function(a){Ie(s.search(a),function(l){var o=$t(a,l);if(o){var c=ye(o).join(",");r[c]||(r[c]=!0,i.push(o))}})}),ae(i)}function $t(t,e){var r=ye(t),i=ye(e);if(r.length!==2)throw new Error("<intersects> line1 must only contain 2 coordinates");if(i.length!==2)throw new Error("<intersects> line2 must only contain 2 coordinates");var n=r[0][0],s=r[0][1],a=r[1][0],l=r[1][1],o=i[0][0],c=i[0][1],u=i[1][0],f=i[1][1],d=(f-c)*(a-n)-(u-o)*(l-s),h=(u-o)*(s-c)-(f-c)*(n-o),m=(a-n)*(s-c)-(l-s)*(n-o);if(d===0)return null;var v=h/d,A=m/d;if(v>=0&&v<=1&&A>=0&&A<=1){var S=n+v*(a-n),I=s+v*(l-s);return Q([S,I])}return null}function Qe(t,e){e===void 0&&(e={});var r=ve(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),r.type){case"Polygon":return Fi(r,e);case"MultiPolygon":return Di(r,e);default:throw new Error("invalid poly")}}function Fi(t,e){e===void 0&&(e={});var r=ve(t),i=r.coordinates,n=e.properties?e.properties:t.type==="Feature"?t.properties:{};return Xt(i,n)}function Di(t,e){e===void 0&&(e={});var r=ve(t),i=r.coordinates,n=e.properties?e.properties:t.type==="Feature"?t.properties:{},s=[];return i.forEach(function(a){s.push(Xt(a,n))}),ae(s)}function Xt(t,e){return t.length>1?lt(t,e):z(t[0],e)}function Ni(t,e){var r=!0;return ee(t,function(i){ee(e,function(n){if(r===!1)return!1;r=Bi(i.geometry,n.geometry)})}),r}function Bi(t,e){switch(t.type){case"Point":switch(e.type){case"Point":return!Gi(t.coordinates,e.coordinates);case"LineString":return!Mt(e,t);case"Polygon":return!q(t,e)}break;case"LineString":switch(e.type){case"Point":return!Mt(t,e);case"LineString":return!Hi(t,e);case"Polygon":return!Ot(e,t)}break;case"Polygon":switch(e.type){case"Point":return!q(e,t);case"LineString":return!Ot(t,e);case"Polygon":return!Wi(e,t)}}return!1}function Mt(t,e){for(var r=0;r<t.coordinates.length-1;r++)if(qi(t.coordinates[r],t.coordinates[r+1],e.coordinates))return!0;return!1}function Hi(t,e){var r=dt(t,e);return r.features.length>0}function Ot(t,e){for(var r=0,i=e.coordinates;r<i.length;r++){var n=i[r];if(q(n,t))return!0}var s=dt(e,Qe(t));return s.features.length>0}function Wi(t,e){for(var r=0,i=t.coordinates[0];r<i.length;r++){var n=i[r];if(q(n,e))return!0}for(var s=0,a=e.coordinates[0];s<a.length;s++){var l=a[s];if(q(l,t))return!0}var o=dt(Qe(t),Qe(e));return o.features.length>0}function qi(t,e,r){var i=r[0]-t[0],n=r[1]-t[1],s=e[0]-t[0],a=e[1]-t[1],l=i*a-n*s;return l!==0?!1:Math.abs(s)>=Math.abs(a)?s>0?t[0]<=r[0]&&r[0]<=e[0]:e[0]<=r[0]&&r[0]<=t[0]:a>0?t[1]<=r[1]&&r[1]<=e[1]:e[1]<=r[1]&&r[1]<=t[1]}function Gi(t,e){return t[0]===e[0]&&t[1]===e[1]}function Vi(t,e){var r=!1;return ee(t,function(i){ee(e,function(n){if(r===!0)return!0;r=!Ni(i.geometry,n.geometry)})}),r}function Re(t,e,r){r===void 0&&(r={});for(var i=Vt(t),n=ye(e),s=0;s<n.length-1;s++){var a=!1;if(r.ignoreEndVertices&&(s===0&&(a="start"),s===n.length-2&&(a="end"),s===0&&s+1===n.length-1&&(a="both")),zi(n[s],n[s+1],i,a,typeof r.epsilon>"u"?null:r.epsilon))return!0}return!1}function zi(t,e,r,i,n){var s=r[0],a=r[1],l=t[0],o=t[1],c=e[0],u=e[1],f=r[0]-l,d=r[1]-o,h=c-l,m=u-o,v=f*m-d*h;if(n!==null){if(Math.abs(v)>n)return!1}else if(v!==0)return!1;if(i){if(i==="start")return Math.abs(h)>=Math.abs(m)?h>0?l<s&&s<=c:c<=s&&s<l:m>0?o<a&&a<=u:u<=a&&a<o;if(i==="end")return Math.abs(h)>=Math.abs(m)?h>0?l<=s&&s<c:c<s&&s<=l:m>0?o<=a&&a<u:u<a&&a<=o;if(i==="both")return Math.abs(h)>=Math.abs(m)?h>0?l<s&&s<c:c<s&&s<l:m>0?o<a&&a<u:u<a&&a<o}else return Math.abs(h)>=Math.abs(m)?h>0?l<=s&&s<=c:c<=s&&s<=l:m>0?o<=a&&a<=u:u<=a&&a<=o;return!1}function Yi(t,e){var r=ve(t),i=ve(e),n=r.type,s=i.type;switch(n){case"Point":switch(s){case"MultiPoint":return Ui(r,i);case"LineString":return Re(r,i,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return q(r,i,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return Qi(r,i);case"LineString":return Ji(r,i);case"Polygon":case"MultiPolygon":return Ki(r,i);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return Xi(r,i);case"Polygon":case"MultiPolygon":return Zi(r,i);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return en(r,i);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+n+" geometry not supported")}}function Ui(t,e){var r,i=!1;for(r=0;r<e.coordinates.length;r++)if(er(e.coordinates[r],t.coordinates)){i=!0;break}return i}function Qi(t,e){for(var r=0;r<t.coordinates.length;r++){for(var i=!1,n=0;n<e.coordinates.length;n++)er(t.coordinates[r],e.coordinates[n])&&(i=!0);if(!i)return!1}return!0}function Ji(t,e){for(var r=!1,i=0;i<t.coordinates.length;i++){if(!Re(t.coordinates[i],e))return!1;r||(r=Re(t.coordinates[i],e,{ignoreEndVertices:!0}))}return r}function Ki(t,e){for(var r=!0,i=!1,n=0;n<t.coordinates.length;n++){if(i=q(t.coordinates[1],e),!i){r=!1;break}i=q(t.coordinates[1],e,{ignoreBoundary:!0})}return r&&i}function Xi(t,e){for(var r=0;r<t.coordinates.length;r++)if(!Re(t.coordinates[r],e))return!1;return!0}function Zi(t,e){var r=fe(e),i=fe(t);if(!Zt(r,i))return!1;for(var n=!1,s=0;s<t.coordinates.length-1;s++){if(!q(t.coordinates[s],e))return!1;if(n||(n=q(t.coordinates[s],e,{ignoreBoundary:!0})),!n){var a=tn(t.coordinates[s],t.coordinates[s+1]);n=q(a,e,{ignoreBoundary:!0})}}return n}function en(t,e){var r=fe(t),i=fe(e);if(!Zt(i,r))return!1;for(var n=0;n<t.coordinates[0].length;n++)if(!q(t.coordinates[0][n],e))return!1;return!0}function Zt(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function er(t,e){return t[0]===e[0]&&t[1]===e[1]}function tn(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var rn=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,Se=(t,e,r,i)=>{for(var n=i>1?void 0:i?nn(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&rn(e,r,n),n};const sn=(t,e)=>e?Vi(t,e):!0,an=(t,e)=>e?Yi(t,e):!0;let Je=class extends he{reset(){this.filterObject.state.geometry=void 0;const t=this.renderRoot.querySelector("eox-itemfilter-spatial-filter");delete this.filterObject.dirty,t.reset(),this.requestUpdate()}createRenderRoot(){return this}render(){var t;return L`
      <form style="display: inline">
      ${ge(["intersects","within"],e=>L`
          <label>
            <input
              type="radio"
              name="mode"
              .checked="${Or(this.filterObject.state.mode===e)}"
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
    `}};Se([V()],Je.prototype,"filterObject",2);Je=Se([oe("eox-itemfilter-spatial")],Je);let je=class extends he{render(){return L`<eox-map part="map" style="height: 400px"></eox-map>`}firstUpdated(){this.setup()}setup(){const t=[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...this.geometry&&{format:"GeoJSON"},...this.geometry&&{url:this.createFeatureUrl(this.geometry)}},zIndex:1},{type:"Tile",source:{type:"XYZ",url:"https://s2maps-tiles.eu/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}];this.eoxMap=this.renderRoot.querySelector("eox-map"),setTimeout(()=>{this.eoxMap.setLayers(t),this.eoxMap.addDraw("draw",{id:"drawInteraction",type:"Polygon"});const e=r=>{const i=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:r.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});this.dispatchEvent(i)};this.eoxMap.interactions.drawInteraction.on("drawend",r=>{e(r.feature),this.eoxMap.removeInteraction("drawInteraction")}),this.eoxMap.interactions.drawInteraction_modify.on("modifyend",r=>{e(r.features.getArray()[0])})})}createFeatureUrl(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}reset(){var e;const t=this.eoxMap.getLayerById("draw").getSource();((e=t.getFeatures())==null?void 0:e.length)>0&&(t.clear(),this.eoxMap.removeInteraction("drawInteraction_modify"),this.setup())}};Se([V()],je.prototype,"geometry",2);Se([Ee()],je.prototype,"eoxMap",2);je=Se([oe("eox-itemfilter-spatial-filter")],je);var on=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,tr=(t,e,r,i)=>{for(var n=i>1?void 0:i?ln(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&on(e,r,n),n};let Ke=class extends he{constructor(){super(...arguments),this.inputHandler=()=>{const t=this.renderRoot.querySelector("input[type='text']");this.filterObject.keys.forEach(e=>{this.filterObject.state[e]=t.value}),this.filterObject.dirty=!0,this.dispatchEvent(new CustomEvent("filter"))},this.debouncedInputHandler=Dt(this.inputHandler,500,{leading:!0})}reset(){const t=this.renderRoot.querySelector("input[type='text']");t.value="",this.filterObject.keys.forEach(e=>{this.filterObject.state[e]=void 0}),delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return L`
      <input
        type="text"
        placeholder="Type something..."
        data-cy="search"
        part="input-search"
        value="${Object.values(this.filterObject.state)[0]}"
        @input="${this.debouncedInputHandler}"
      />
    `}};tr([V()],Ke.prototype,"filterObject",2);Ke=tr([oe("eox-itemfilter-text")],Ke);function te(t){return Array.isArray?Array.isArray(t):nr(t)==="[object Array]"}const cn=1/0;function un(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-cn?"-0":e}function fn(t){return t==null?"":un(t)}function J(t){return typeof t=="string"}function rr(t){return typeof t=="number"}function hn(t){return t===!0||t===!1||dn(t)&&nr(t)=="[object Boolean]"}function ir(t){return typeof t=="object"}function dn(t){return ir(t)&&t!==null}function W(t){return t!=null}function qe(t){return!t.trim().length}function nr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const mn="Incorrect 'index' type",pn=t=>`Invalid value for key ${t}`,gn=t=>`Pattern length exceeds max of ${t}.`,yn=t=>`Missing ${t} property in key`,vn=t=>`Property 'weight' in key '${t}' must be a positive integer`,Et=Object.prototype.hasOwnProperty;class bn{constructor(e){this._keys=[],this._keyMap={};let r=0;e.forEach(i=>{let n=sr(i);r+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,r+=n.weight}),this._keys.forEach(i=>{i.weight/=r})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function sr(t){let e=null,r=null,i=null,n=1,s=null;if(J(t)||te(t))i=t,e=St(t),r=Xe(t);else{if(!Et.call(t,"name"))throw new Error(yn("name"));const a=t.name;if(i=a,Et.call(t,"weight")&&(n=t.weight,n<=0))throw new Error(vn(a));e=St(a),r=Xe(a),s=t.getFn}return{path:e,id:r,weight:n,src:i,getFn:s}}function St(t){return te(t)?t:t.split(".")}function Xe(t){return te(t)?t.join("."):t}function xn(t,e){let r=[],i=!1;const n=(s,a,l)=>{if(W(s))if(!a[l])r.push(s);else{let o=a[l];const c=s[o];if(!W(c))return;if(l===a.length-1&&(J(c)||rr(c)||hn(c)))r.push(fn(c));else if(te(c)){i=!0;for(let u=0,f=c.length;u<f;u+=1)n(c[u],a,l+1)}else a.length&&n(c,a,l+1)}};return n(t,J(e)?e.split("."):e,0),i?r:r[0]}const wn={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},$n={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Mn={location:0,threshold:.6,distance:100},On={useExtendedSearch:!1,getFn:xn,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var x={...$n,...wn,...Mn,...On};const En=/[^ ]+/g;function Sn(t=1,e=3){const r=new Map,i=Math.pow(10,e);return{get(n){const s=n.match(En).length;if(r.has(s))return r.get(s);const a=1/Math.pow(s,.5*t),l=parseFloat(Math.round(a*i)/i);return r.set(s,l),l},clear(){r.clear()}}}class mt{constructor({getFn:e=x.getFn,fieldNormWeight:r=x.fieldNormWeight}={}){this.norm=Sn(r,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((r,i)=>{this._keysMap[r.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,J(this.docs[0])?this.docs.forEach((e,r)=>{this._addString(e,r)}):this.docs.forEach((e,r)=>{this._addObject(e,r)}),this.norm.clear())}add(e){const r=this.size();J(e)?this._addString(e,r):this._addObject(e,r)}removeAt(e){this.records.splice(e,1);for(let r=e,i=this.size();r<i;r+=1)this.records[r].i-=1}getValueForItemAtKeyId(e,r){return e[this._keysMap[r]]}size(){return this.records.length}_addString(e,r){if(!W(e)||qe(e))return;let i={v:e,i:r,n:this.norm.get(e)};this.records.push(i)}_addObject(e,r){let i={i:r,$:{}};this.keys.forEach((n,s)=>{let a=n.getFn?n.getFn(e):this.getFn(e,n.path);if(W(a)){if(te(a)){let l=[];const o=[{nestedArrIndex:-1,value:a}];for(;o.length;){const{nestedArrIndex:c,value:u}=o.pop();if(W(u))if(J(u)&&!qe(u)){let f={v:u,i:c,n:this.norm.get(u)};l.push(f)}else te(u)&&u.forEach((f,d)=>{o.push({nestedArrIndex:d,value:f})})}i.$[s]=l}else if(J(a)&&!qe(a)){let l={v:a,n:this.norm.get(a)};i.$[s]=l}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function ar(t,e,{getFn:r=x.getFn,fieldNormWeight:i=x.fieldNormWeight}={}){const n=new mt({getFn:r,fieldNormWeight:i});return n.setKeys(t.map(sr)),n.setSources(e),n.create(),n}function _n(t,{getFn:e=x.getFn,fieldNormWeight:r=x.fieldNormWeight}={}){const{keys:i,records:n}=t,s=new mt({getFn:e,fieldNormWeight:r});return s.setKeys(i),s.setIndexRecords(n),s}function Pe(t,{errors:e=0,currentLocation:r=0,expectedLocation:i=0,distance:n=x.distance,ignoreLocation:s=x.ignoreLocation}={}){const a=e/t.length;if(s)return a;const l=Math.abs(i-r);return n?a+l/n:l?1:a}function An(t=[],e=x.minMatchCharLength){let r=[],i=-1,n=-1,s=0;for(let a=t.length;s<a;s+=1){let l=t[s];l&&i===-1?i=s:!l&&i!==-1&&(n=s-1,n-i+1>=e&&r.push([i,n]),i=-1)}return t[s-1]&&s-i>=e&&r.push([i,s-1]),r}const ue=32;function Pn(t,e,r,{location:i=x.location,distance:n=x.distance,threshold:s=x.threshold,findAllMatches:a=x.findAllMatches,minMatchCharLength:l=x.minMatchCharLength,includeMatches:o=x.includeMatches,ignoreLocation:c=x.ignoreLocation}={}){if(e.length>ue)throw new Error(gn(ue));const u=e.length,f=t.length,d=Math.max(0,Math.min(i,f));let h=s,m=d;const v=l>1||o,A=v?Array(f):[];let S;for(;(S=t.indexOf(e,m))>-1;){let C=Pe(e,{currentLocation:S,expectedLocation:d,distance:n,ignoreLocation:c});if(h=Math.min(C,h),m=S+u,v){let F=0;for(;F<u;)A[S+F]=1,F+=1}}m=-1;let I=[],T=1,D=u+f;const R=1<<u-1;for(let C=0;C<u;C+=1){let F=0,_=D;for(;F<_;)Pe(e,{errors:C,currentLocation:d+_,expectedLocation:d,distance:n,ignoreLocation:c})<=h?F=_:D=_,_=Math.floor((D-F)/2+F);D=_;let E=Math.max(1,d-_+1),ie=a?f:Math.min(d+_,f)+u,K=Array(ie+2);K[ie+1]=(1<<C)-1;for(let p=ie;p>=E;p-=1){let g=p-1,b=r[t.charAt(g)];if(v&&(A[g]=+!!b),K[p]=(K[p+1]<<1|1)&b,C&&(K[p]|=(I[p+1]|I[p])<<1|1|I[p+1]),K[p]&R&&(T=Pe(e,{errors:C,currentLocation:g,expectedLocation:d,distance:n,ignoreLocation:c}),T<=h)){if(h=T,m=g,m<=d)break;E=Math.max(1,2*d-m)}}if(Pe(e,{errors:C+1,currentLocation:d,expectedLocation:d,distance:n,ignoreLocation:c})>h)break;I=K}const O={isMatch:m>=0,score:Math.max(.001,T)};if(v){const C=An(A,l);C.length?o&&(O.indices=C):O.isMatch=!1}return O}function Cn(t){let e={};for(let r=0,i=t.length;r<i;r+=1){const n=t.charAt(r);e[n]=(e[n]||0)|1<<i-r-1}return e}class or{constructor(e,{location:r=x.location,threshold:i=x.threshold,distance:n=x.distance,includeMatches:s=x.includeMatches,findAllMatches:a=x.findAllMatches,minMatchCharLength:l=x.minMatchCharLength,isCaseSensitive:o=x.isCaseSensitive,ignoreLocation:c=x.ignoreLocation}={}){if(this.options={location:r,threshold:i,distance:n,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:o,ignoreLocation:c},this.pattern=o?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(d,h)=>{this.chunks.push({pattern:d,alphabet:Cn(d),startIndex:h})},f=this.pattern.length;if(f>ue){let d=0;const h=f%ue,m=f-h;for(;d<m;)u(this.pattern.substr(d,ue),d),d+=ue;if(h){const v=f-ue;u(this.pattern.substr(v),v)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:r,includeMatches:i}=this.options;if(r||(e=e.toLowerCase()),this.pattern===e){let m={isMatch:!0,score:0};return i&&(m.indices=[[0,e.length-1]]),m}const{location:n,distance:s,threshold:a,findAllMatches:l,minMatchCharLength:o,ignoreLocation:c}=this.options;let u=[],f=0,d=!1;this.chunks.forEach(({pattern:m,alphabet:v,startIndex:A})=>{const{isMatch:S,score:I,indices:T}=Pn(e,m,v,{location:n+A,distance:s,threshold:a,findAllMatches:l,minMatchCharLength:o,includeMatches:i,ignoreLocation:c});S&&(d=!0),f+=I,S&&T&&(u=[...u,...T])});let h={isMatch:d,score:d?f/this.chunks.length:1};return d&&i&&(h.indices=u),h}}class le{constructor(e){this.pattern=e}static isMultiMatch(e){return _t(e,this.multiRegex)}static isSingleMatch(e){return _t(e,this.singleRegex)}search(){}}function _t(t,e){const r=t.match(e);return r?r[1]:null}class Tn extends le{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const r=e===this.pattern;return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class kn extends le{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const i=e.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,e.length-1]}}}class Ln extends le{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const r=e.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class In extends le{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const r=!e.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Rn extends le{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const r=e.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class jn extends le{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const r=!e.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class lr extends le{constructor(e,{location:r=x.location,threshold:i=x.threshold,distance:n=x.distance,includeMatches:s=x.includeMatches,findAllMatches:a=x.findAllMatches,minMatchCharLength:l=x.minMatchCharLength,isCaseSensitive:o=x.isCaseSensitive,ignoreLocation:c=x.ignoreLocation}={}){super(e),this._bitapSearch=new or(e,{location:r,threshold:i,distance:n,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:o,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class cr extends le{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let r=0,i;const n=[],s=this.pattern.length;for(;(i=e.indexOf(this.pattern,r))>-1;)r=i+s,n.push([i,r-1]);const a=!!n.length;return{isMatch:a,score:a?0:1,indices:n}}}const Ze=[Tn,cr,Ln,In,jn,Rn,kn,lr],At=Ze.length,Fn=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Dn="|";function Nn(t,e={}){return t.split(Dn).map(r=>{let i=r.trim().split(Fn).filter(s=>s&&!!s.trim()),n=[];for(let s=0,a=i.length;s<a;s+=1){const l=i[s];let o=!1,c=-1;for(;!o&&++c<At;){const u=Ze[c];let f=u.isMultiMatch(l);f&&(n.push(new u(f,e)),o=!0)}if(!o)for(c=-1;++c<At;){const u=Ze[c];let f=u.isSingleMatch(l);if(f){n.push(new u(f,e));break}}}return n})}const Bn=new Set([lr.type,cr.type]);class Hn{constructor(e,{isCaseSensitive:r=x.isCaseSensitive,includeMatches:i=x.includeMatches,minMatchCharLength:n=x.minMatchCharLength,ignoreLocation:s=x.ignoreLocation,findAllMatches:a=x.findAllMatches,location:l=x.location,threshold:o=x.threshold,distance:c=x.distance}={}){this.query=null,this.options={isCaseSensitive:r,includeMatches:i,minMatchCharLength:n,findAllMatches:a,ignoreLocation:s,location:l,threshold:o,distance:c},this.pattern=r?e:e.toLowerCase(),this.query=Nn(this.pattern,this.options)}static condition(e,r){return r.useExtendedSearch}searchIn(e){const r=this.query;if(!r)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let s=0,a=[],l=0;for(let o=0,c=r.length;o<c;o+=1){const u=r[o];a.length=0,s=0;for(let f=0,d=u.length;f<d;f+=1){const h=u[f],{isMatch:m,indices:v,score:A}=h.search(e);if(m){if(s+=1,l+=A,i){const S=h.constructor.type;Bn.has(S)?a=[...a,...v]:a.push(v)}}else{l=0,s=0,a.length=0;break}}if(s){let f={isMatch:!0,score:l/s};return i&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const et=[];function Wn(...t){et.push(...t)}function tt(t,e){for(let r=0,i=et.length;r<i;r+=1){let n=et[r];if(n.condition(t,e))return new n(t,e)}return new or(t,e)}const Fe={AND:"$and",OR:"$or"},rt={PATH:"$path",PATTERN:"$val"},it=t=>!!(t[Fe.AND]||t[Fe.OR]),qn=t=>!!t[rt.PATH],Gn=t=>!te(t)&&ir(t)&&!it(t),Pt=t=>({[Fe.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function ur(t,e,{auto:r=!0}={}){const i=n=>{let s=Object.keys(n);const a=qn(n);if(!a&&s.length>1&&!it(n))return i(Pt(n));if(Gn(n)){const o=a?n[rt.PATH]:s[0],c=a?n[rt.PATTERN]:n[o];if(!J(c))throw new Error(pn(o));const u={keyId:Xe(o),pattern:c};return r&&(u.searcher=tt(c,e)),u}let l={children:[],operator:s[0]};return s.forEach(o=>{const c=n[o];te(c)&&c.forEach(u=>{l.children.push(i(u))})}),l};return it(t)||(t=Pt(t)),i(t)}function Vn(t,{ignoreFieldNorm:e=x.ignoreFieldNorm}){t.forEach(r=>{let i=1;r.matches.forEach(({key:n,norm:s,score:a})=>{const l=n?n.weight:null;i*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:s))}),r.score=i})}function zn(t,e){const r=t.matches;e.matches=[],W(r)&&r.forEach(i=>{if(!W(i.indices)||!i.indices.length)return;const{indices:n,value:s}=i;let a={indices:n,value:s};i.key&&(a.key=i.key.src),i.idx>-1&&(a.refIndex=i.idx),e.matches.push(a)})}function Yn(t,e){e.score=t.score}function Un(t,e,{includeMatches:r=x.includeMatches,includeScore:i=x.includeScore}={}){const n=[];return r&&n.push(zn),i&&n.push(Yn),t.map(s=>{const{idx:a}=s,l={item:e[a],refIndex:a};return n.length&&n.forEach(o=>{o(s,l)}),l})}class xe{constructor(e,r={},i){this.options={...x,...r},this.options.useExtendedSearch,this._keyStore=new bn(this.options.keys),this.setCollection(e,i)}setCollection(e,r){if(this._docs=e,r&&!(r instanceof mt))throw new Error(mn);this._myIndex=r||ar(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){W(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const r=[];for(let i=0,n=this._docs.length;i<n;i+=1){const s=this._docs[i];e(s,i)&&(this.removeAt(i),i-=1,n-=1,r.push(s))}return r}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:r=-1}={}){const{includeMatches:i,includeScore:n,shouldSort:s,sortFn:a,ignoreFieldNorm:l}=this.options;let o=J(e)?J(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Vn(o,{ignoreFieldNorm:l}),s&&o.sort(a),rr(r)&&r>-1&&(o=o.slice(0,r)),Un(o,this._docs,{includeMatches:i,includeScore:n})}_searchStringList(e){const r=tt(e,this.options),{records:i}=this._myIndex,n=[];return i.forEach(({v:s,i:a,n:l})=>{if(!W(s))return;const{isMatch:o,score:c,indices:u}=r.searchIn(s);o&&n.push({item:s,idx:a,matches:[{score:c,value:s,norm:l,indices:u}]})}),n}_searchLogical(e){const r=ur(e,this.options),i=(l,o,c)=>{if(!l.children){const{keyId:f,searcher:d}=l,h=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(o,f),searcher:d});return h&&h.length?[{idx:c,item:o,matches:h}]:[]}const u=[];for(let f=0,d=l.children.length;f<d;f+=1){const h=l.children[f],m=i(h,o,c);if(m.length)u.push(...m);else if(l.operator===Fe.AND)return[]}return u},n=this._myIndex.records,s={},a=[];return n.forEach(({$:l,i:o})=>{if(W(l)){let c=i(r,l,o);c.length&&(s[o]||(s[o]={idx:o,item:l,matches:[]},a.push(s[o])),c.forEach(({matches:u})=>{s[o].matches.push(...u)}))}}),a}_searchObjectList(e){const r=tt(e,this.options),{keys:i,records:n}=this._myIndex,s=[];return n.forEach(({$:a,i:l})=>{if(!W(a))return;let o=[];i.forEach((c,u)=>{o.push(...this._findMatches({key:c,value:a[u],searcher:r}))}),o.length&&s.push({idx:l,item:a,matches:o})}),s}_findMatches({key:e,value:r,searcher:i}){if(!W(r))return[];let n=[];if(te(r))r.forEach(({v:s,i:a,n:l})=>{if(!W(s))return;const{isMatch:o,score:c,indices:u}=i.searchIn(s);o&&n.push({score:c,key:e,value:s,idx:a,norm:l,indices:u})});else{const{v:s,n:a}=r,{isMatch:l,score:o,indices:c}=i.searchIn(s);l&&n.push({score:o,key:e,value:s,norm:a,indices:c})}return n}}xe.version="6.6.2";xe.createIndex=ar;xe.parseIndex=_n;xe.config=x;xe.parseQuery=ur;Wn(Hn);const Qn=(t,e="highlight",r="title")=>{const i=(s,a,l)=>{const o=a.split(".");let c;for(c=0;c<o.length-1;c++)s=s[o[c]];s[o[c]]=l},n=(s,a=[])=>{let l="",o=0;return a.forEach(c=>{const u=c[1]+1;l+=[s.substring(o,c[0]),`<mark class="${e}">`,s.substring(c[0],u),"</mark>"].join(""),o=u}),l+=s.substring(o),l};return t.filter(({matches:s})=>s&&s.length).map(({item:s,matches:a})=>{const l={...s};return a.forEach(o=>{o.key===r&&i(l,o.key,n(o.value,o.indices))}),l})};let fr;const Jn=(t,e)=>{fr=new xe(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},Kn=async(t,e,r)=>{const i=Object.entries(e).filter(([l,o])=>o.type==="text"||o.type==="select"||o.type==="multiselect").reduce((l,[o,c])=>{const u="$or",f=[],d=(h,m)=>{const v={};c.type==="text"?v[h]=`${m}`:v[o]=`="${h}"`,f.push(v)};return Object.entries(c.state).filter(([h,m])=>m).forEach(([h,m])=>d(h,m)),f.length>0&&l.push({[u]:f}),l},[]);let n;if(!(i.length>0)&&r.matchAllWhenEmpty!==!1)n=t;else{const l={$and:[...i]},o=fr.search(l);n=r.enableHighlighting?Qn(o,"highlight",r.titleProperty):o.map(c=>c.item)}const s=Object.entries(e).filter(([l,o])=>o.type==="range").reduce((l,[o,c])=>(l[o]={min:c.state.min,max:c.state.max,format:c.format},l),{});if(Object.keys(s).length>0){const l=[];for(let o=0;o<n.length;o++){const c={};for(const[u,f]of Object.entries(s)){const d=h=>f.format==="date"?Te(h).unix():h;n[o].hasOwnProperty(u)?Array.isArray(n[o][u])?c[u]=s[u].min<=d(n[o][u][1])&&d(n[o][u][0])<=s[u].max:d(n[o][u])>=s[u].min&&d(n[o][u])<=s[u].max?c[u]=!0:c[u]=!1:c[u]=!0}Object.values(c).every(u=>!!u)&&l.push(n[o])}n=[...l]}const a=Object.entries(e).filter(([l,o])=>o.type==="spatial").reduce((l,[o,c])=>(l[o]={geometry:c.state.geometry,mode:c.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let o=0;o<n.length;o++){const c={};for(const u of Object.keys(a)){const f=a[u].mode||"within";n[o].hasOwnProperty(u)&&(f==="within"?an(n[o][u],a[u].geometry):sn(n[o][u],a[u].geometry))?c[u]=!0:c[u]=!1}Object.values(c).every(u=>!!u)&&l.push(n[o])}n=[...l]}return n},Xn=async(t,e,r)=>(await(await fetch(`${r.externalFilter(t,e)}`)).json()).features;var Zn=Object.defineProperty,es=Object.getOwnPropertyDescriptor,re=(t,e,r,i)=>{for(var n=i>1?void 0:i?es(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Zn(e,r,n),n};class Ct{constructor(){this.aggregateResults=void 0,this.enableHighlighting=!1,this.filterProperties=[],this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.onFilter=()=>{},this.onSelect=()=>{},this.showResults=!0,this.titleProperty="title",this.expandMultipleFilters=!0,this.expandMultipleResults=!0}}let Y=class extends br{constructor(){super(...arguments),this._resultAggregation=[],this.filters={},this.items=[],this._config=new Ct,this.apply=t=>{this.items=t.map((r,i)=>({id:`item-${i}`,...r})),this._config.filterProperties.length&&this._config.filterProperties.forEach(r=>{const i={},n=s=>r.format==="date"?Te(s).unix():parseInt(s);this.items.forEach(s=>{if(r.type==="range"){if(Array.isArray(s[r.key])){const a=[n(s[r.key][0]),n(s[r.key][1])];i.min=i.min!==void 0?Math.min(i.min,a[0]):a[0],i.max=i.max!==void 0?Math.max(i.max,a[1]):a[1]}else{const a=n(s[r.key]);i.min=i.min!==void 0?Math.min(i.min,a):a,i.max=i.max!==void 0?Math.max(i.max,a):a}return}Array.isArray(s[r.key])?s[r.key].forEach(a=>{i[a]=void 0}):r.type==="spatial"?(i.geometry=void 0,i.mode=r.mode||"intersects"):i[s[r.key]]=void 0}),this.filters[r.key||r.keys.join("|")]={...r,type:r.type||"multiselect",state:{...i,...r.state},...r.state&&{dirty:!0},...r.type==="range"&&{min:i.min,max:i.max,format:r.format}}}),this._config.matchAllWhenEmpty!==!1&&(this.results=this.sortResults(this.items),this.requestUpdate()),this._config.aggregateResults&&(this._resultAggregation=[...new Set(this.items.reduce((r,i)=>r.concat(i[this._config.aggregateResults]),[]))].sort((r,i)=>r.localeCompare(i)));const e=[];Object.values(this.filters).forEach(r=>{r.type==="text"?r.keys.forEach(i=>{e.includes(i)||e.push(i)}):(r.type==="select"||r.type==="multiselect")&&(e.includes(r.key)||e.push(r.key))}),Jn(this.items,{keys:e,...this._config.fuseConfig}),this.search()}}set config(t){const e=this._config;this._config={...new Ct,...t},this.requestUpdate("config",e)}get config(){return this._config}async search(){let t;this.config.externalFilter?t=await Xn(this.items,this.filters,this._config):t=await Kn(this.items,this.filters,this._config),this.results=this.sortResults(t),this._config.onFilter(this.results,this.filters)}aggregateResults(t,e){return t.filter(r=>{const i=r[this._config.aggregateResults];let n;return this.filters[this._config.aggregateResults]&&(n=Object.keys(this.filters[this._config.aggregateResults]).filter(a=>this.filters[this._config.aggregateResults].state[a])),(n!=null&&n.length?n.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}sortResults(t){return[...t].sort((e,r)=>e[this._config.titleProperty].localeCompare(r[this._config.titleProperty]))}resetFilters(){this.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{t.reset()}),this.search()}toggleAccordion(t){let e;if(t.detail?e=t.detail.target:e=t.target,e.classList.contains("details-filter")){if(!e.open||this.config.expandMultipleFilters)return;this.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const i=r.shadowRoot.querySelector(".details-filter");i&&i!==e&&i.removeAttribute("open")})}else{if(!e.open||this.config.expandMultipleResults)return;this.shadowRoot.querySelectorAll("details").forEach(r=>{r!==e&&r.removeAttribute("open")})}}render(){return L`
      <style>
        ${Rt}
        ${!this.unstyled&&jt}
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
                ${ge(Object.values(this.filters),t=>He`
                  <li>
                    ${t.featured?He`
                          <eox-itemfilter-${Ae(t.type)}
                            slot="filter"
                            data-type="filter"
                            .filterObject=${t}
                            @filter="${()=>this.search()}"
                          ></eox-itemfilter-${Ae(t.type)}>
                        `:He`
                          <eox-itemfilter-expandcontainer
                            .filterObject=${t}
                            .unstyled=${this.unstyled}
                            @details-toggled=${this.toggleAccordion}
                          >
                            <eox-itemfilter-${Ae(t.type)}
                              slot="filter"
                              data-type="filter"
                              data-filter="${t.key}"
                              .filterObject=${t}
                              @filter="${()=>this.search()}"
                            ></eox-itemfilter-${Ae(t.type)}>
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
                  ${this._config.aggregateResults?ge(this._resultAggregation.filter(t=>this.aggregateResults(this.results,t).length),t=>L`<details
                          class="details-results"
                          @toggle=${this.toggleAccordion}
                          open
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
                            ${Er(this.aggregateResults(this.results,t),e=>e.id,e=>{var r,i;return L`
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
                                          >${pt(e[this._config.titleProperty])}</span
                                        >
                                      `)}
                                  </label>
                                </li>
                              `})}
                          </ul>
                        </details>`):ge(this.results,t=>L`<li part="result">
                            <label>
                              <input
                                type="radio"
                                name="result"
                                id="${t.id}"
                                @click=${()=>{this.selectedResult=t,this._config.onSelect(t)}}
                              />
                              ${me(this.hasTemplate("result"),()=>this.renderTemplate("result",t,`result-${t.id}`),()=>L`
                                  <span class="title"
                                    >${pt(t[this._config.titleProperty])}</span
                                  >
                                `)}
                            </label>
                          </li>`)}
                </ul>
              </div>
            </section>
          `)}
      </form>
    `}};re([Ee()],Y.prototype,"filters",2);re([Ee()],Y.prototype,"items",2);re([Ee()],Y.prototype,"results",2);re([Ee()],Y.prototype,"selectedResult",2);re([V({attribute:!1})],Y.prototype,"config",1);re([V()],Y.prototype,"apply",2);re([V({attribute:!1})],Y.prototype,"styleOverride",2);re([V({type:Boolean})],Y.prototype,"unstyled",2);Y=re([oe("eox-itemfilter")],Y);const ts=[{archived:!1,code:"E10a2",description:"Actively managed total area from Sentinel-2 data",indicator:"Actively managed total area from Sentinel-2 data",themes:["agriculture"],title:"White Asparagus area [%]",name:"Actively managed total area from Sentinel-2 data",year:2e3,likes:4,years:[2e3,2e3],timestamp:"2023-06-14T13:56:38+00:00",datetime:["2023-06-14T10:56:38+00:00","2023-06-14T22:56:38+00:00"],bbox:[-90,60,-20,82],geometry:{type:"Polygon",coordinates:[[[-90,60],[-20,60],[-20,82],[-90,82]]]}},{archived:!1,code:"E10a9",description:"Agricultural Workers",indicator:"Agricultural Workers",themes:["agriculture"],title:"Workers availability [nr]",name:"Agricultural Workers",year:2020,likes:46,years:[2007,2020],timestamp:"2023-06-13T13:56:38+00:00",datetime:["2023-06-13T10:56:38+00:00","2023-06-13T22:56:38+00:00"],bbox:[0,0,10,10],geometry:{type:"Polygon",coordinates:[[[0,0],[10,0],[10,10],[0,10]]]}},{archived:!1,code:"N1",description:"Air Quality",indicator:"Air Quality",themes:["air"],title:"Sea ice freeboard",name:"Sea ice freeboard",year:2023,likes:34,years:[2008,2023],timestamp:"2023-06-12T13:56:38+00:00",datetime:["2023-06-12T10:56:38+00:00","2023-06-12T22:56:38+00:00"],bbox:[-180,-80,180,-61],geometry:{type:"Polygon",coordinates:[[[-180,-80],[180,-80],[180,-61],[-180,-61]]]}},{archived:!1,code:"E13o",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (all) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2022,likes:177,years:[2021,2022],timestamp:"2023-06-11T13:56:38+00:00",datetime:["2023-06-11T10:56:38+00:00","2023-06-11T22:56:38+00:00"]},{archived:!1,code:"E13p",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (cargo) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2016,likes:0,years:[2005,2016],timestamp:"2023-06-10T13:56:38+00:00",datetime:["2023-06-10T10:56:38+00:00","2023-06-10T22:56:38+00:00"]},{archived:!1,code:"E13q",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (tanker) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2017,likes:0,years:[2006,2017],timestamp:"2023-06-09T13:56:38+00:00",datetime:["2023-06-09T10:56:38+00:00","2023-06-09T22:56:38+00:00"]},{archived:!1,code:"E13r",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (others) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2003,likes:2,years:[2001,2003],timestamp:"2023-06-08T13:56:38+00:00",datetime:["2023-06-08T10:56:38+00:00","2023-06-08T22:56:38+00:00"]},{archived:!1,code:"C1",description:"Boat traffic - NO2 level",indicator:"Boat traffic - NO2 level",themes:["economy","air"],title:"Ships - NO2 Correlation",indicatorOverwrite:"Ports and Shipping - impact on air quality",name:"Boat traffic - NO2 level",year:2020,likes:65,years:[2015,2020],timestamp:"2023-06-07T13:56:38+00:00",datetime:["2023-06-07T10:56:38+00:00","2023-06-07T22:56:38+00:00"]},{archived:!1,code:"CDS1",description:"C3S Data",indicator:"C3S Data",themes:["air"],title:"Temperature",name:"C3S Data",year:2021,likes:34,years:[2021,2021],timestamp:"2023-06-06T13:56:38+00:00",datetime:["2023-06-06T10:56:38+00:00","2023-06-06T22:56:38+00:00"]},{archived:!1,code:"N1a",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level PM2.5 (model)",name:"CAMS Air Quality",year:2023,likes:88,years:[2e3,2023],timestamp:"2023-06-05T13:56:38+00:00",datetime:["2023-06-05T10:56:38+00:00","2023-06-05T22:56:38+00:00"]},{archived:!1,code:"N1b",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level NO2 (model)",name:"CAMS Air Quality",year:2022,likes:77,years:[2019,2022],timestamp:"2023-06-04T13:56:38+00:00",datetime:["2023-06-04T10:56:38+00:00","2023-06-04T22:56:38+00:00"]},{archived:!1,code:"N1c",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level PM10 (model)",name:"CAMS Air Quality",year:2018,likes:23,years:[2014,2018],timestamp:"2023-06-03T13:56:38+00:00",datetime:["2023-06-03T10:56:38+00:00","2023-06-03T22:56:38+00:00"]},{archived:!1,code:"N1d",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level O3 (model)",name:"CAMS Air Quality",year:2018,likes:56,years:[2017,2018],timestamp:"2023-06-02T13:56:38+00:00",datetime:["2023-06-02T10:56:38+00:00","2023-06-02T22:56:38+00:00"]},{archived:!1,code:"E13e",description:"Cargo ships in port based on AIS data",indicator:"Cargo ships in port based on AIS data",themes:["economy"],title:"Cargo Ships [nr]",name:"Cargo ships in port based on AIS data",year:2019,likes:11,years:[2018,2019],timestamp:"2023-06-01T13:56:38+00:00",datetime:["2023-06-01T10:56:38+00:00","2023-06-01T22:56:38+00:00"]},{archived:!1,code:"E13n",description:"Changes in traffic based on mobile data",indicator:"Changes in traffic based on mobile data",themes:["economy"],title:"Trucks transiting ports [%]",name:"Changes in traffic based on mobile data",year:2017,likes:8,years:[2015,2017],timestamp:"2023-05-29T13:56:38+00:00",datetime:["2023-05-29T10:56:38+00:00","2023-05-29T22:56:38+00:00"]},{archived:!1,code:"N3c",description:"CMEMS product",indicator:"CMEMS product",themes:["water"],title:"CHL-a concentration (map, 1km)",name:"CMEMS product",year:2015,likes:37,years:[2014,2015],timestamp:"2023-05-28T13:56:38+00:00",datetime:["2023-05-28T10:56:38+00:00","2023-05-28T22:56:38+00:00"]},{archived:!1,code:"CV",description:"Covid-19 cases",indicator:"Covid-19 cases",themes:["health"],title:"Covid-19 cases",name:"Covid-19 cases",year:2013,likes:4,years:[2001,2013],timestamp:"2023-05-27T13:56:38+00:00",datetime:["2023-05-27T10:56:38+00:00","2023-05-27T22:56:38+00:00"]},{archived:!1,code:"OW",description:"Covid-19 vaccinations",indicator:"Covid-19 vaccinations",themes:["health"],title:"Covid-19 vaccinations",name:"Covid-19 vaccinations",year:2016,likes:39,years:[2015,2016],timestamp:"2023-05-26T13:56:38+00:00",datetime:["2023-05-26T10:56:38+00:00","2023-05-26T22:56:38+00:00"]},{archived:!1,code:"E3",description:"Crude Oil and other input materials",indicator:"Crude Oil and other input materials",themes:["economy"],title:"Raw Material Inventory",name:"Crude Oil and other input materials",year:2020,likes:28,years:[2014,2020],timestamp:"2023-05-25T13:56:38+00:00",datetime:["2023-05-25T10:56:38+00:00","2023-05-25T22:56:38+00:00"]},{archived:!1,code:"E13l",description:"Cruise ships in port based on AIS data",indicator:"Cruise ships in port based on AIS data",themes:["economy"],title:"Cruise Ships [nr]",name:"Cruise ships in port based on AIS data",year:1999,likes:17,years:[1998,1999],timestamp:"2023-05-24T13:56:38+00:00",datetime:["2023-05-24T10:56:38+00:00","2023-05-24T22:56:38+00:00"]}],hs={title:"Elements/eox-itemfilter",tags:["autodocs"],component:"eox-itemfilter",render:t=>{const e=new Y;return e.config=t,e.apply(ts),e}},Ce={args:{titleProperty:"title",filterProperties:[{keys:["title","themes"],title:"Search",type:"text",expanded:!0,state:{title:"no2",themes:"no2"}},{key:"themes",title:"Theme",type:"multiselect"},{key:"timestamp",type:"range",format:"date"},{key:"geometry",type:"spatial"}],aggregateResults:"themes",enableHighlighting:!0,onSelect:t=>{console.log(t)}}};var Tt,kt,Lt;Ce.parameters={...Ce.parameters,docs:{...(Tt=Ce.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Lt=(kt=Ce.parameters)==null?void 0:kt.docs)==null?void 0:Lt.source}}};const ds=["Primary"];export{Ce as Primary,ds as __namedExportsOrder,hs as default};
//# sourceMappingURL=itemfilter.stories-b33d9489.js.map
