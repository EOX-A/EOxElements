import{s as fe,x as k,A as Z}from"./lit-element-c29cbb6b.js";import{n as V,e as oe,t as Me}from"./query-assigned-elements-bec7f9a4.js";import{n as de}from"./directive-1613be6b.js";import{o as pe,n as De,a as Se,b as ht}from"./static-f1bf9d2f.js";import{c as lr,r as cr,s as ur,l as fr,a as hr}from"./checkbox-dea1b0c1.js";import"./toolcool-range-slider.min-b4f5b26b.js";import{c as $e,g as tt,a as je}from"./_commonjsHelpers-042e6b4d.js";import{r as dr,T as mr}from"./templateElement-8d2f8dc8.js";import{b as pr}from"./button-d0379260.js";import"./directive-helpers-2720686e.js";var Ct={exports:{}};(function(t,e){(function(r,i){t.exports=i()})($e,function(){var r=1e3,i=6e4,n=36e5,s="millisecond",a="second",l="minute",o="hour",c="day",u="week",f="month",g="quarter",m="year",y="date",M="Invalid Date",R=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,A=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,F={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(x){var h=["th","st","nd","rd"],d=x%100;return"["+x+(h[(d-20)%10]||h[d]||h[0])+"]"}},C=function(x,h,d){var v=String(x);return!v||v.length>=h?x:""+Array(h+1-v.length).join(d)+x},D={s:C,z:function(x){var h=-x.utcOffset(),d=Math.abs(h),v=Math.floor(d/60),p=d%60;return(h<=0?"+":"-")+C(v,2,"0")+":"+C(p,2,"0")},m:function x(h,d){if(h.date()<d.date())return-x(d,h);var v=12*(d.year()-h.year())+(d.month()-h.month()),p=h.clone().add(v,f),$=d-p<0,w=h.clone().add(v+($?-1:1),f);return+(-(v+(d-p)/($?p-w:w-p))||0)},a:function(x){return x<0?Math.ceil(x)||0:Math.floor(x)},p:function(x){return{M:f,y:m,w:u,d:c,D:y,h:o,m:l,s:a,ms:s,Q:g}[x]||String(x||"").toLowerCase().replace(/s$/,"")},u:function(x){return x===void 0}},L="en",O={};O[L]=F;var P=function(x){return x instanceof ie},j=function x(h,d,v){var p;if(!h)return L;if(typeof h=="string"){var $=h.toLowerCase();O[$]&&(p=$),d&&(O[$]=d,p=$);var w=h.split("-");if(!p&&w.length>1)return x(w[0])}else{var _=h.name;O[_]=h,p=_}return!v&&p&&(L=p),p||!v&&L},S=function(x,h){if(P(x))return x.clone();var d=typeof h=="object"?h:{};return d.date=x,d.args=arguments,new ie(d)},E=D;E.l=j,E.i=P,E.w=function(x,h){return S(x,{locale:h.$L,utc:h.$u,x:h.$x,$offset:h.$offset})};var ie=function(){function x(d){this.$L=j(d.locale,null,!0),this.parse(d)}var h=x.prototype;return h.parse=function(d){this.$d=function(v){var p=v.date,$=v.utc;if(p===null)return new Date(NaN);if(E.u(p))return new Date;if(p instanceof Date)return new Date(p);if(typeof p=="string"&&!/Z$/i.test(p)){var w=p.match(R);if(w){var _=w[2]-1||0,I=(w[7]||"0").substring(0,3);return $?new Date(Date.UTC(w[1],_,w[3]||1,w[4]||0,w[5]||0,w[6]||0,I)):new Date(w[1],_,w[3]||1,w[4]||0,w[5]||0,w[6]||0,I)}}return new Date(p)}(d),this.$x=d.x||{},this.init()},h.init=function(){var d=this.$d;this.$y=d.getFullYear(),this.$M=d.getMonth(),this.$D=d.getDate(),this.$W=d.getDay(),this.$H=d.getHours(),this.$m=d.getMinutes(),this.$s=d.getSeconds(),this.$ms=d.getMilliseconds()},h.$utils=function(){return E},h.isValid=function(){return this.$d.toString()!==M},h.isSame=function(d,v){var p=S(d);return this.startOf(v)<=p&&p<=this.endOf(v)},h.isAfter=function(d,v){return S(d)<this.startOf(v)},h.isBefore=function(d,v){return this.endOf(v)<S(d)},h.$g=function(d,v,p){return E.u(d)?this[v]:this.set(p,d)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(d,v){var p=this,$=!!E.u(v)||v,w=E.p(d),_=function(he,H){var se=E.w(p.$u?Date.UTC(p.$y,H,he):new Date(p.$y,H,he),p);return $?se:se.endOf(c)},I=function(he,H){return E.w(p.toDate()[he].apply(p.toDate("s"),($?[0,0,0,0]:[23,59,59,999]).slice(H)),p)},T=this.$W,N=this.$M,ne=this.$D,X="set"+(this.$u?"UTC":"");switch(w){case m:return $?_(1,0):_(31,11);case f:return $?_(1,N):_(0,N+1);case u:var xe=this.$locale().weekStart||0,we=(T<xe?T+7:T)-xe;return _($?ne-we:ne+(6-we),N);case c:case y:return I(X+"Hours",0);case o:return I(X+"Minutes",1);case l:return I(X+"Seconds",2);case a:return I(X+"Milliseconds",3);default:return this.clone()}},h.endOf=function(d){return this.startOf(d,!1)},h.$set=function(d,v){var p,$=E.p(d),w="set"+(this.$u?"UTC":""),_=(p={},p[c]=w+"Date",p[y]=w+"Date",p[f]=w+"Month",p[m]=w+"FullYear",p[o]=w+"Hours",p[l]=w+"Minutes",p[a]=w+"Seconds",p[s]=w+"Milliseconds",p)[$],I=$===c?this.$D+(v-this.$W):v;if($===f||$===m){var T=this.clone().set(y,1);T.$d[_](I),T.init(),this.$d=T.set(y,Math.min(this.$D,T.daysInMonth())).$d}else _&&this.$d[_](I);return this.init(),this},h.set=function(d,v){return this.clone().$set(d,v)},h.get=function(d){return this[E.p(d)]()},h.add=function(d,v){var p,$=this;d=Number(d);var w=E.p(v),_=function(N){var ne=S($);return E.w(ne.date(ne.date()+Math.round(N*d)),$)};if(w===f)return this.set(f,this.$M+d);if(w===m)return this.set(m,this.$y+d);if(w===c)return _(1);if(w===u)return _(7);var I=(p={},p[l]=i,p[o]=n,p[a]=r,p)[w]||1,T=this.$d.getTime()+d*I;return E.w(T,this)},h.subtract=function(d,v){return this.add(-1*d,v)},h.format=function(d){var v=this,p=this.$locale();if(!this.isValid())return p.invalidDate||M;var $=d||"YYYY-MM-DDTHH:mm:ssZ",w=E.z(this),_=this.$H,I=this.$m,T=this.$M,N=p.weekdays,ne=p.months,X=function(H,se,Fe,Ee){return H&&(H[se]||H(v,$))||Fe[se].slice(0,Ee)},xe=function(H){return E.s(_%12||12,H,"0")},we=p.meridiem||function(H,se,Fe){var Ee=H<12?"AM":"PM";return Fe?Ee.toLowerCase():Ee},he={YY:String(this.$y).slice(-2),YYYY:E.s(this.$y,4,"0"),M:T+1,MM:E.s(T+1,2,"0"),MMM:X(p.monthsShort,T,ne,3),MMMM:X(ne,T),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:X(p.weekdaysMin,this.$W,N,2),ddd:X(p.weekdaysShort,this.$W,N,3),dddd:N[this.$W],H:String(_),HH:E.s(_,2,"0"),h:xe(1),hh:xe(2),a:we(_,I,!0),A:we(_,I,!1),m:String(I),mm:E.s(I,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:w};return $.replace(A,function(H,se){return se||he[H]||w.replace(":","")})},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(d,v,p){var $,w=E.p(v),_=S(d),I=(_.utcOffset()-this.utcOffset())*i,T=this-_,N=E.m(this,_);return N=($={},$[m]=N/12,$[f]=N,$[g]=N/3,$[u]=(T-I)/6048e5,$[c]=(T-I)/864e5,$[o]=T/n,$[l]=T/i,$[a]=T/r,$)[w]||T,p?N:E.a(N)},h.daysInMonth=function(){return this.endOf(f).$D},h.$locale=function(){return O[this.$L]},h.locale=function(d,v){if(!d)return this.$L;var p=this.clone(),$=j(d,v,!0);return $&&(p.$L=$),p},h.clone=function(){return E.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},x}(),K=ie.prototype;return S.prototype=K,[["$ms",s],["$s",a],["$m",l],["$H",o],["$W",c],["$M",f],["$y",m],["$D",y]].forEach(function(x){K[x[1]]=function(h){return this.$g(h,x[0],x[1])}}),S.extend=function(x,h){return x.$i||(x(h,ie,S),x.$i=!0),S},S.locale=j,S.isDayjs=P,S.unix=function(x){return S(1e3*x)},S.en=O[L],S.Ls=O,S.p={},S})})(Ct);var gr=Ct.exports;const Pe=tt(gr),Tt=`
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
`,kt=`
* {
  font-family: Roboto, sans-serif;
}

${pr}
${lr}
${cr}
${ur}

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
`;var yr=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,rt=(t,e,r,i)=>{for(var n=i>1?void 0:i?vr(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&yr(e,r,n),n};let Ce=class extends fe{handleDetailsToggle(t){this.dispatchEvent(new CustomEvent("details-toggled",{detail:t,bubbles:!0,composed:!0}))}render(){return k`
      <style>
        ${Tt}
        ${!this.unstyled&&kt}
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
    `}};rt([V({attribute:!1})],Ce.prototype,"filterObject",2);rt([V()],Ce.prototype,"unstyled",2);Ce=rt([oe("eox-itemfilter-expandcontainer")],Ce);var br=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,Lt=(t,e,r,i)=>{for(var n=i>1?void 0:i?xr(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&br(e,r,n),n};let He=class extends fe{reset(){this.renderRoot.querySelectorAll("input[type='checkbox']").forEach(t=>{t instanceof HTMLInputElement&&(t.checked=!1)});for(const t in this.filterObject.state)this.filterObject.state[t]=!1;delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return k`
      <ul>
        ${pe(Object.keys(this.filterObject.state).sort((t,e)=>t.localeCompare(e)),t=>k`
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
    `}};Lt([V()],He.prototype,"filterObject",2);He=Lt([oe("eox-itemfilter-multiselect")],He);var wr="Expected a function",dt=0/0,$r="[object Symbol]",Mr=/^\s+|\s+$/g,Or=/^[-+]0x[0-9a-f]+$/i,Er=/^0b[01]+$/i,Sr=/^0o[0-7]+$/i,_r=parseInt,Ar=typeof $e=="object"&&$e&&$e.Object===Object&&$e,Pr=typeof self=="object"&&self&&self.Object===Object&&self,Cr=Ar||Pr||Function("return this")(),Tr=Object.prototype,kr=Tr.toString,Lr=Math.max,Ir=Math.min,Ne=function(){return Cr.Date.now()};function Rr(t,e,r){var i,n,s,a,l,o,c=0,u=!1,f=!1,g=!0;if(typeof t!="function")throw new TypeError(wr);e=mt(e)||0,We(r)&&(u=!!r.leading,f="maxWait"in r,s=f?Lr(mt(r.maxWait)||0,e):s,g="trailing"in r?!!r.trailing:g);function m(O){var P=i,j=n;return i=n=void 0,c=O,a=t.apply(j,P),a}function y(O){return c=O,l=setTimeout(A,e),u?m(O):a}function M(O){var P=O-o,j=O-c,S=e-P;return f?Ir(S,s-j):S}function R(O){var P=O-o,j=O-c;return o===void 0||P>=e||P<0||f&&j>=s}function A(){var O=Ne();if(R(O))return F(O);l=setTimeout(A,M(O))}function F(O){return l=void 0,g&&i?m(O):(i=n=void 0,a)}function C(){l!==void 0&&clearTimeout(l),c=0,i=o=n=l=void 0}function D(){return l===void 0?a:F(Ne())}function L(){var O=Ne(),P=R(O);if(i=arguments,n=this,o=O,P){if(l===void 0)return y(o);if(f)return l=setTimeout(A,e),m(o)}return l===void 0&&(l=setTimeout(A,e)),a}return L.cancel=C,L.flush=D,L}function We(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function jr(t){return!!t&&typeof t=="object"}function Fr(t){return typeof t=="symbol"||jr(t)&&kr.call(t)==$r}function mt(t){if(typeof t=="number")return t;if(Fr(t))return dt;if(We(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=We(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Mr,"");var r=Er.test(t);return r||Sr.test(t)?_r(t.slice(2),r?2:8):Or.test(t)?dt:+t}var Dr=Rr;const It=tt(Dr);var Nr=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,Rt=(t,e,r,i)=>{for(var n=i>1?void 0:i?Br(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Nr(e,r,n),n};let qe=class extends fe{constructor(){super(...arguments),this.inputHandler=t=>{let e,r;[e,r]=t.detail.values,(e!==this.filterObject.state.min||r!=this.filterObject.state.max)&&([this.filterObject.state.min,this.filterObject.state.max]=[e,r],this.filterObject.dirty=!0),this.dispatchEvent(new CustomEvent("filter")),this.requestUpdate()},this.debouncedInputHandler=It(this.inputHandler,0,{leading:!0})}reset(){this.filterObject.state.min=this.filterObject.min,this.filterObject.state.max=this.filterObject.max,delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return k`
      <div class="range-before">
        ${this.filterObject.format==="date"?Pe.unix(this.filterObject.state.min):this.filterObject.state.min}
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
        ${this.filterObject.format==="date"?Pe.unix(this.filterObject.state.max):this.filterObject.state.max}
      </div>
    `}};Rt([V()],qe.prototype,"filterObject",2);qe=Rt([oe("eox-itemfilter-range")],qe);var Hr=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,jt=(t,e,r,i)=>{for(var n=i>1?void 0:i?Wr(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Hr(e,r,n),n};let Ge=class extends fe{reset(){this.renderRoot.querySelectorAll("input[type='radio']").forEach(t=>{t instanceof HTMLInputElement&&(t.checked=!1)});for(const t in this.filterObject.state)this.filterObject.state[t]=!1;delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return k`
      <ul>
        ${pe(Object.keys(this.filterObject.state).sort((t,e)=>t.localeCompare(e)),t=>k`
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
    `}};jt([V()],Ge.prototype,"filterObject",2);Ge=jt([oe("eox-itemfilter-select")],Ge);var B=63710088e-1,it={centimeters:B*100,centimetres:B*100,degrees:B/111325,feet:B*3.28084,inches:B*39.37,kilometers:B/1e3,kilometres:B/1e3,meters:B,metres:B,miles:B/1609.344,millimeters:B*1e3,millimetres:B*1e3,nauticalmiles:B/1852,radians:1,yards:B*1.0936},qr={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:1/1e3,kilometres:1/1e3,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/B,yards:1.0936133},Ve={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046};function G(t,e,r){r===void 0&&(r={});var i={type:"Feature"};return(r.id===0||r.id)&&(i.id=r.id),r.bbox&&(i.bbox=r.bbox),i.properties=e||{},i.geometry=t,i}function Gr(t,e,r){switch(t){case"Point":return Q(e).geometry;case"LineString":return z(e).geometry;case"Polygon":return nt(e).geometry;case"MultiPoint":return Ft(e).geometry;case"MultiLineString":return st(e).geometry;case"MultiPolygon":return Dt(e).geometry;default:throw new Error(t+" is invalid")}}function Q(t,e,r){if(r===void 0&&(r={}),!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Te(t[0])||!Te(t[1]))throw new Error("coordinates must contain numbers");var i={type:"Point",coordinates:t};return G(i,e,r)}function Vr(t,e,r){return r===void 0&&(r={}),ae(t.map(function(i){return Q(i,e)}),r)}function nt(t,e,r){r===void 0&&(r={});for(var i=0,n=t;i<n.length;i++){var s=n[i];if(s.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var a=0;a<s[s.length-1].length;a++)if(s[s.length-1][a]!==s[0][a])throw new Error("First and last Position are not equivalent.")}var l={type:"Polygon",coordinates:t};return G(l,e,r)}function zr(t,e,r){return r===void 0&&(r={}),ae(t.map(function(i){return nt(i,e)}),r)}function z(t,e,r){if(r===void 0&&(r={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");var i={type:"LineString",coordinates:t};return G(i,e,r)}function Yr(t,e,r){return r===void 0&&(r={}),ae(t.map(function(i){return z(i,e)}),r)}function ae(t,e){e===void 0&&(e={});var r={type:"FeatureCollection"};return e.id&&(r.id=e.id),e.bbox&&(r.bbox=e.bbox),r.features=t,r}function st(t,e,r){r===void 0&&(r={});var i={type:"MultiLineString",coordinates:t};return G(i,e,r)}function Ft(t,e,r){r===void 0&&(r={});var i={type:"MultiPoint",coordinates:t};return G(i,e,r)}function Dt(t,e,r){r===void 0&&(r={});var i={type:"MultiPolygon",coordinates:t};return G(i,e,r)}function Ur(t,e,r){r===void 0&&(r={});var i={type:"GeometryCollection",geometries:t};return G(i,e,r)}function Qr(t,e){if(e===void 0&&(e=0),e&&!(e>=0))throw new Error("precision must be a positive number");var r=Math.pow(10,e||0);return Math.round(t*r)/r}function Nt(t,e){e===void 0&&(e="kilometers");var r=it[e];if(!r)throw new Error(e+" units is invalid");return t*r}function at(t,e){e===void 0&&(e="kilometers");var r=it[e];if(!r)throw new Error(e+" units is invalid");return t/r}function Jr(t,e){return Bt(at(t,e))}function Kr(t){var e=t%360;return e<0&&(e+=360),e}function Bt(t){var e=t%(2*Math.PI);return e*180/Math.PI}function Xr(t){var e=t%360;return e*Math.PI/180}function Zr(t,e,r){if(e===void 0&&(e="kilometers"),r===void 0&&(r="kilometers"),!(t>=0))throw new Error("length must be a positive number");return Nt(at(t,e),r)}function ei(t,e,r){if(e===void 0&&(e="meters"),r===void 0&&(r="kilometers"),!(t>=0))throw new Error("area must be a positive number");var i=Ve[e];if(!i)throw new Error("invalid original units");var n=Ve[r];if(!n)throw new Error("invalid final units");return t/i*n}function Te(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}function ot(t){return!!t&&t.constructor===Object}function ti(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(t.length!==4&&t.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach(function(e){if(!Te(e))throw new Error("bbox must only contain numbers")})}function ri(t){if(!t)throw new Error("id is required");if(["string","number"].indexOf(typeof t)===-1)throw new Error("id must be a number or a string")}const ii=Object.freeze(Object.defineProperty({__proto__:null,areaFactors:Ve,bearingToAzimuth:Kr,convertArea:ei,convertLength:Zr,degreesToRadians:Xr,earthRadius:B,factors:it,feature:G,featureCollection:ae,geometry:Gr,geometryCollection:Ur,isNumber:Te,isObject:ot,lengthToDegrees:Jr,lengthToRadians:at,lineString:z,lineStrings:Yr,multiLineString:st,multiPoint:Ft,multiPolygon:Dt,point:Q,points:Vr,polygon:nt,polygons:zr,radiansToDegrees:Bt,radiansToLength:Nt,round:Qr,unitsFactors:qr,validateBBox:ti,validateId:ri},Symbol.toStringTag,{value:"Module"}));function Ht(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return t.geometry.coordinates;if(t.type==="Point")return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function ge(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function ye(t){return t.type==="Feature"?t.geometry:t}function q(t,e,r){if(r===void 0&&(r={}),!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");var i=Ht(t),n=ye(e),s=n.type,a=e.bbox,l=n.coordinates;if(a&&ni(i,a)===!1)return!1;s==="Polygon"&&(l=[l]);for(var o=!1,c=0;c<l.length&&!o;c++)if(pt(i,l[c][0],r.ignoreBoundary)){for(var u=!1,f=1;f<l[c].length&&!u;)pt(i,l[c][f],!r.ignoreBoundary)&&(u=!0),f++;u||(o=!0)}return o}function pt(t,e,r){var i=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var n=0,s=e.length-1;n<e.length;s=n++){var a=e[n][0],l=e[n][1],o=e[s][0],c=e[s][1],u=t[1]*(a-o)+l*(o-t[0])+c*(t[0]-a)===0&&(a-t[0])*(o-t[0])<=0&&(l-t[1])*(c-t[1])<=0;if(u)return!r;var f=l>t[1]!=c>t[1]&&t[0]<(o-a)*(t[1]-l)/(c-l)+a;f&&(i=!i)}return i}function ni(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}function ve(t,e,r){if(t!==null)for(var i,n,s,a,l,o,c,u=0,f=0,g,m=t.type,y=m==="FeatureCollection",M=m==="Feature",R=y?t.features.length:1,A=0;A<R;A++){c=y?t.features[A].geometry:M?t.geometry:t,g=c?c.type==="GeometryCollection":!1,l=g?c.geometries.length:1;for(var F=0;F<l;F++){var C=0,D=0;if(a=g?c.geometries[F]:c,a!==null){o=a.coordinates;var L=a.type;switch(u=r&&(L==="Polygon"||L==="MultiPolygon")?1:0,L){case null:break;case"Point":if(e(o,f,A,C,D)===!1)return!1;f++,C++;break;case"LineString":case"MultiPoint":for(i=0;i<o.length;i++){if(e(o[i],f,A,C,D)===!1)return!1;f++,L==="MultiPoint"&&C++}L==="LineString"&&C++;break;case"Polygon":case"MultiLineString":for(i=0;i<o.length;i++){for(n=0;n<o[i].length-u;n++){if(e(o[i][n],f,A,C,D)===!1)return!1;f++}L==="MultiLineString"&&C++,L==="Polygon"&&D++}L==="Polygon"&&C++;break;case"MultiPolygon":for(i=0;i<o.length;i++){for(D=0,n=0;n<o[i].length;n++){for(s=0;s<o[i][n].length-u;s++){if(e(o[i][n][s],f,A,C,D)===!1)return!1;f++}D++}C++}break;case"GeometryCollection":for(i=0;i<a.geometries.length;i++)if(ve(a.geometries[i],e,r)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function si(t,e,r,i){var n=r;return ve(t,function(s,a,l,o,c){a===0&&r===void 0?n=s:n=e(n,s,a,l,o,c)},i),n}function Wt(t,e){var r;switch(t.type){case"FeatureCollection":for(r=0;r<t.features.length&&e(t.features[r].properties,r)!==!1;r++);break;case"Feature":e(t.properties,0);break}}function ai(t,e,r){var i=r;return Wt(t,function(n,s){s===0&&r===void 0?i=n:i=e(i,n,s)}),i}function ke(t,e){if(t.type==="Feature")e(t,0);else if(t.type==="FeatureCollection")for(var r=0;r<t.features.length&&e(t.features[r],r)!==!1;r++);}function oi(t,e,r){var i=r;return ke(t,function(n,s){s===0&&r===void 0?i=n:i=e(i,n,s)}),i}function li(t){var e=[];return ve(t,function(r){e.push(r)}),e}function lt(t,e){var r,i,n,s,a,l,o,c,u,f,g=0,m=t.type==="FeatureCollection",y=t.type==="Feature",M=m?t.features.length:1;for(r=0;r<M;r++){for(l=m?t.features[r].geometry:y?t.geometry:t,c=m?t.features[r].properties:y?t.properties:{},u=m?t.features[r].bbox:y?t.bbox:void 0,f=m?t.features[r].id:y?t.id:void 0,o=l?l.type==="GeometryCollection":!1,a=o?l.geometries.length:1,n=0;n<a;n++){if(s=o?l.geometries[n]:l,s===null){if(e(null,g,c,u,f)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(s,g,c,u,f)===!1)return!1;break}case"GeometryCollection":{for(i=0;i<s.geometries.length;i++)if(e(s.geometries[i],g,c,u,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}g++}}function ci(t,e,r){var i=r;return lt(t,function(n,s,a,l,o){s===0&&r===void 0?i=n:i=e(i,n,s,a,l,o)}),i}function ee(t,e){lt(t,function(r,i,n,s,a){var l=r===null?null:r.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(G(r,n,{bbox:s,id:a}),i,0)===!1?!1:void 0}var o;switch(l){case"MultiPoint":o="Point";break;case"MultiLineString":o="LineString";break;case"MultiPolygon":o="Polygon";break}for(var c=0;c<r.coordinates.length;c++){var u=r.coordinates[c],f={type:o,coordinates:u};if(e(G(f,n),i,c)===!1)return!1}})}function ui(t,e,r){var i=r;return ee(t,function(n,s,a){s===0&&a===0&&r===void 0?i=n:i=e(i,n,s,a)}),i}function qt(t,e){ee(t,function(r,i,n){var s=0;if(r.geometry){var a=r.geometry.type;if(!(a==="Point"||a==="MultiPoint")){var l,o=0,c=0,u=0;if(ve(r,function(f,g,m,y,M){if(l===void 0||i>o||y>c||M>u){l=f,o=i,c=y,u=M,s=0;return}var R=z([l,f],r.properties);if(e(R,i,n,M,s)===!1)return!1;s++,l=f})===!1)return!1}}})}function fi(t,e,r){var i=r,n=!1;return qt(t,function(s,a,l,o,c){n===!1&&r===void 0?i=s:i=e(i,s,a,l,o,c),n=!0}),i}function Gt(t,e){if(!t)throw new Error("geojson is required");ee(t,function(r,i,n){if(r.geometry!==null){var s=r.geometry.type,a=r.geometry.coordinates;switch(s){case"LineString":if(e(r,i,n,0,0)===!1)return!1;break;case"Polygon":for(var l=0;l<a.length;l++)if(e(z(a[l],r.properties),i,n,l)===!1)return!1;break}}})}function hi(t,e,r){var i=r;return Gt(t,function(n,s,a,l){s===0&&r===void 0?i=n:i=e(i,n,s,a,l)}),i}function di(t,e){if(e=e||{},!ot(e))throw new Error("options is invalid");var r=e.featureIndex||0,i=e.multiFeatureIndex||0,n=e.geometryIndex||0,s=e.segmentIndex||0,a=e.properties,l;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),a=a||t.features[r].properties,l=t.features[r].geometry;break;case"Feature":a=a||t.properties,l=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=t;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var o=l.coordinates;switch(l.type){case"Point":case"MultiPoint":return null;case"LineString":return s<0&&(s=o.length+s-1),z([o[s],o[s+1]],a,e);case"Polygon":return n<0&&(n=o.length+n),s<0&&(s=o[n].length+s-1),z([o[n][s],o[n][s+1]],a,e);case"MultiLineString":return i<0&&(i=o.length+i),s<0&&(s=o[i].length+s-1),z([o[i][s],o[i][s+1]],a,e);case"MultiPolygon":return i<0&&(i=o.length+i),n<0&&(n=o[i].length+n),s<0&&(s=o[i][n].length-s-1),z([o[i][n][s],o[i][n][s+1]],a,e)}throw new Error("geojson is invalid")}function mi(t,e){if(e=e||{},!ot(e))throw new Error("options is invalid");var r=e.featureIndex||0,i=e.multiFeatureIndex||0,n=e.geometryIndex||0,s=e.coordIndex||0,a=e.properties,l;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),a=a||t.features[r].properties,l=t.features[r].geometry;break;case"Feature":a=a||t.properties,l=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=t;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var o=l.coordinates;switch(l.type){case"Point":return Q(o,a,e);case"MultiPoint":return i<0&&(i=o.length+i),Q(o[i],a,e);case"LineString":return s<0&&(s=o.length+s),Q(o[s],a,e);case"Polygon":return n<0&&(n=o.length+n),s<0&&(s=o[n].length+s),Q(o[n][s],a,e);case"MultiLineString":return i<0&&(i=o.length+i),s<0&&(s=o[i].length+s),Q(o[i][s],a,e);case"MultiPolygon":return i<0&&(i=o.length+i),n<0&&(n=o[i].length+n),s<0&&(s=o[i][n].length-s),Q(o[i][n][s],a,e)}throw new Error("geojson is invalid")}const pi=Object.freeze(Object.defineProperty({__proto__:null,coordAll:li,coordEach:ve,coordReduce:si,featureEach:ke,featureReduce:oi,findPoint:mi,findSegment:di,flattenEach:ee,flattenReduce:ui,geomEach:lt,geomReduce:ci,lineEach:Gt,lineReduce:hi,propEach:Wt,propReduce:ai,segmentEach:qt,segmentReduce:fi},Symbol.toStringTag,{value:"Module"}));function gt(t){if(!t)throw new Error("geojson is required");var e=[];return ee(t,function(r){gi(r,e)}),ae(e)}function gi(t,e){var r=[],i=t.geometry;if(i!==null){switch(i.type){case"Polygon":r=ge(i);break;case"LineString":r=[ge(i)]}r.forEach(function(n){var s=yi(n,t.properties);s.forEach(function(a){a.id=e.length,e.push(a)})})}}function yi(t,e){var r=[];return t.reduce(function(i,n){var s=z([i,n],e);return s.bbox=vi(i,n),r.push(s),n}),r}function vi(t,e){var r=t[0],i=t[1],n=e[0],s=e[1],a=r<n?r:n,l=i<s?i:s,o=r>n?r:n,c=i>s?i:s;return[a,l,o,c]}var ct={exports:{}};const bi=je(dr),xi=je(ii),wi=je(pi);function ue(t){var e=[1/0,1/0,-1/0,-1/0];return ve(t,function(r){e[0]>r[0]&&(e[0]=r[0]),e[1]>r[1]&&(e[1]=r[1]),e[2]<r[0]&&(e[2]=r[0]),e[3]<r[1]&&(e[3]=r[1])}),e}ue.default=ue;const $i=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"})),Mi=je($i);var U=bi,Vt=xi,zt=wi,me=Mi.default,Oi=zt.featureEach;zt.coordEach;Vt.polygon;var yt=Vt.featureCollection;function Yt(t){var e=new U(t);return e.insert=function(r){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:me(r),U.prototype.insert.call(this,r)},e.load=function(r){var i=[];return Array.isArray(r)?r.forEach(function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:me(n),i.push(n)}):Oi(r,function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:me(n),i.push(n)}),U.prototype.load.call(this,i)},e.remove=function(r,i){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:me(r),U.prototype.remove.call(this,r,i)},e.clear=function(){return U.prototype.clear.call(this)},e.search=function(r){var i=U.prototype.search.call(this,this.toBBox(r));return yt(i)},e.collides=function(r){return U.prototype.collides.call(this,this.toBBox(r))},e.all=function(){var r=U.prototype.all.call(this);return yt(r)},e.toJSON=function(){return U.prototype.toJSON.call(this)},e.fromJSON=function(r){return U.prototype.fromJSON.call(this,r)},e.toBBox=function(r){var i;if(r.bbox)i=r.bbox;else if(Array.isArray(r)&&r.length===4)i=r;else if(Array.isArray(r)&&r.length===6)i=[r[0],r[1],r[3],r[4]];else if(r.type==="Feature")i=me(r);else if(r.type==="FeatureCollection")i=me(r);else throw new Error("invalid geojson");return{minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}},e}ct.exports=Yt;ct.exports.default=Yt;var Ei=ct.exports;const Si=tt(Ei);function ut(t,e){var r={},i=[];if(t.type==="LineString"&&(t=G(t)),e.type==="LineString"&&(e=G(e)),t.type==="Feature"&&e.type==="Feature"&&t.geometry!==null&&e.geometry!==null&&t.geometry.type==="LineString"&&e.geometry.type==="LineString"&&t.geometry.coordinates.length===2&&e.geometry.coordinates.length===2){var n=vt(t,e);return n&&i.push(n),ae(i)}var s=Si();return s.load(gt(e)),ke(gt(t),function(a){ke(s.search(a),function(l){var o=vt(a,l);if(o){var c=ge(o).join(",");r[c]||(r[c]=!0,i.push(o))}})}),ae(i)}function vt(t,e){var r=ge(t),i=ge(e);if(r.length!==2)throw new Error("<intersects> line1 must only contain 2 coordinates");if(i.length!==2)throw new Error("<intersects> line2 must only contain 2 coordinates");var n=r[0][0],s=r[0][1],a=r[1][0],l=r[1][1],o=i[0][0],c=i[0][1],u=i[1][0],f=i[1][1],g=(f-c)*(a-n)-(u-o)*(l-s),m=(u-o)*(s-c)-(f-c)*(n-o),y=(a-n)*(s-c)-(l-s)*(n-o);if(g===0)return null;var M=m/g,R=y/g;if(M>=0&&M<=1&&R>=0&&R<=1){var A=n+M*(a-n),F=s+M*(l-s);return Q([A,F])}return null}function ze(t,e){e===void 0&&(e={});var r=ye(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),r.type){case"Polygon":return _i(r,e);case"MultiPolygon":return Ai(r,e);default:throw new Error("invalid poly")}}function _i(t,e){e===void 0&&(e={});var r=ye(t),i=r.coordinates,n=e.properties?e.properties:t.type==="Feature"?t.properties:{};return Ut(i,n)}function Ai(t,e){e===void 0&&(e={});var r=ye(t),i=r.coordinates,n=e.properties?e.properties:t.type==="Feature"?t.properties:{},s=[];return i.forEach(function(a){s.push(Ut(a,n))}),ae(s)}function Ut(t,e){return t.length>1?st(t,e):z(t[0],e)}function Pi(t,e){var r=!0;return ee(t,function(i){ee(e,function(n){if(r===!1)return!1;r=Ci(i.geometry,n.geometry)})}),r}function Ci(t,e){switch(t.type){case"Point":switch(e.type){case"Point":return!Ii(t.coordinates,e.coordinates);case"LineString":return!bt(e,t);case"Polygon":return!q(t,e)}break;case"LineString":switch(e.type){case"Point":return!bt(t,e);case"LineString":return!Ti(t,e);case"Polygon":return!xt(e,t)}break;case"Polygon":switch(e.type){case"Point":return!q(e,t);case"LineString":return!xt(t,e);case"Polygon":return!ki(e,t)}}return!1}function bt(t,e){for(var r=0;r<t.coordinates.length-1;r++)if(Li(t.coordinates[r],t.coordinates[r+1],e.coordinates))return!0;return!1}function Ti(t,e){var r=ut(t,e);return r.features.length>0}function xt(t,e){for(var r=0,i=e.coordinates;r<i.length;r++){var n=i[r];if(q(n,t))return!0}var s=ut(e,ze(t));return s.features.length>0}function ki(t,e){for(var r=0,i=t.coordinates[0];r<i.length;r++){var n=i[r];if(q(n,e))return!0}for(var s=0,a=e.coordinates[0];s<a.length;s++){var l=a[s];if(q(l,t))return!0}var o=ut(ze(t),ze(e));return o.features.length>0}function Li(t,e,r){var i=r[0]-t[0],n=r[1]-t[1],s=e[0]-t[0],a=e[1]-t[1],l=i*a-n*s;return l!==0?!1:Math.abs(s)>=Math.abs(a)?s>0?t[0]<=r[0]&&r[0]<=e[0]:e[0]<=r[0]&&r[0]<=t[0]:a>0?t[1]<=r[1]&&r[1]<=e[1]:e[1]<=r[1]&&r[1]<=t[1]}function Ii(t,e){return t[0]===e[0]&&t[1]===e[1]}function Ri(t,e){var r=!1;return ee(t,function(i){ee(e,function(n){if(r===!0)return!0;r=!Pi(i.geometry,n.geometry)})}),r}function Le(t,e,r){r===void 0&&(r={});for(var i=Ht(t),n=ge(e),s=0;s<n.length-1;s++){var a=!1;if(r.ignoreEndVertices&&(s===0&&(a="start"),s===n.length-2&&(a="end"),s===0&&s+1===n.length-1&&(a="both")),ji(n[s],n[s+1],i,a,typeof r.epsilon>"u"?null:r.epsilon))return!0}return!1}function ji(t,e,r,i,n){var s=r[0],a=r[1],l=t[0],o=t[1],c=e[0],u=e[1],f=r[0]-l,g=r[1]-o,m=c-l,y=u-o,M=f*y-g*m;if(n!==null){if(Math.abs(M)>n)return!1}else if(M!==0)return!1;if(i){if(i==="start")return Math.abs(m)>=Math.abs(y)?m>0?l<s&&s<=c:c<=s&&s<l:y>0?o<a&&a<=u:u<=a&&a<o;if(i==="end")return Math.abs(m)>=Math.abs(y)?m>0?l<=s&&s<c:c<s&&s<=l:y>0?o<=a&&a<u:u<a&&a<=o;if(i==="both")return Math.abs(m)>=Math.abs(y)?m>0?l<s&&s<c:c<s&&s<l:y>0?o<a&&a<u:u<a&&a<o}else return Math.abs(m)>=Math.abs(y)?m>0?l<=s&&s<=c:c<=s&&s<=l:y>0?o<=a&&a<=u:u<=a&&a<=o;return!1}function Fi(t,e){var r=ye(t),i=ye(e),n=r.type,s=i.type;switch(n){case"Point":switch(s){case"MultiPoint":return Di(r,i);case"LineString":return Le(r,i,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return q(r,i,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return Ni(r,i);case"LineString":return Bi(r,i);case"Polygon":case"MultiPolygon":return Hi(r,i);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return Wi(r,i);case"Polygon":case"MultiPolygon":return qi(r,i);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return Gi(r,i);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+n+" geometry not supported")}}function Di(t,e){var r,i=!1;for(r=0;r<e.coordinates.length;r++)if(Jt(e.coordinates[r],t.coordinates)){i=!0;break}return i}function Ni(t,e){for(var r=0;r<t.coordinates.length;r++){for(var i=!1,n=0;n<e.coordinates.length;n++)Jt(t.coordinates[r],e.coordinates[n])&&(i=!0);if(!i)return!1}return!0}function Bi(t,e){for(var r=!1,i=0;i<t.coordinates.length;i++){if(!Le(t.coordinates[i],e))return!1;r||(r=Le(t.coordinates[i],e,{ignoreEndVertices:!0}))}return r}function Hi(t,e){for(var r=!0,i=!1,n=0;n<t.coordinates.length;n++){if(i=q(t.coordinates[1],e),!i){r=!1;break}i=q(t.coordinates[1],e,{ignoreBoundary:!0})}return r&&i}function Wi(t,e){for(var r=0;r<t.coordinates.length;r++)if(!Le(t.coordinates[r],e))return!1;return!0}function qi(t,e){var r=ue(e),i=ue(t);if(!Qt(r,i))return!1;for(var n=!1,s=0;s<t.coordinates.length-1;s++){if(!q(t.coordinates[s],e))return!1;if(n||(n=q(t.coordinates[s],e,{ignoreBoundary:!0})),!n){var a=Vi(t.coordinates[s],t.coordinates[s+1]);n=q(a,e,{ignoreBoundary:!0})}}return n}function Gi(t,e){var r=ue(t),i=ue(e);if(!Qt(i,r))return!1;for(var n=0;n<t.coordinates[0].length;n++)if(!q(t.coordinates[0][n],e))return!1;return!0}function Qt(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function Jt(t,e){return t[0]===e[0]&&t[1]===e[1]}function Vi(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var zi=Object.defineProperty,Yi=Object.getOwnPropertyDescriptor,Oe=(t,e,r,i)=>{for(var n=i>1?void 0:i?Yi(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&zi(e,r,n),n};const Ui=(t,e)=>e?Ri(t,e):!0,Qi=(t,e)=>e?Fi(t,e):!0;let Ye=class extends fe{reset(){this.filterObject.state.geometry=void 0;const t=this.renderRoot.querySelector("eox-itemfilter-spatial-filter");delete this.filterObject.dirty,t.reset(),this.requestUpdate()}createRenderRoot(){return this}render(){var t;return k`
      <form style="display: inline">
      ${pe(["intersects","within"],e=>k`
          <label>
            <input
              type="radio"
              name="mode"
              .checked="${fr(this.filterObject.state.mode===e)}"
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
    `}};Oe([V()],Ye.prototype,"filterObject",2);Ye=Oe([oe("eox-itemfilter-spatial")],Ye);let Ie=class extends fe{render(){return k`<eox-map part="map" style="height: 400px"></eox-map>`}firstUpdated(){this.setup()}setup(){const t=[{type:"Vector",id:"draw",source:{type:"Vector",...this.geometry&&{format:"GeoJSON"},...this.geometry&&{url:this.createFeatureUrl(this.geometry)}},zIndex:1},{type:"Tile",source:{type:"XYZ",url:"https://s2maps-tiles.eu/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}];this.eoxMap=this.renderRoot.querySelector("eox-map"),setTimeout(()=>{this.eoxMap.setLayers(t),this.eoxMap.addDraw("draw",{id:"drawInteraction",type:"Polygon"});const e=r=>{const i=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:r.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});this.dispatchEvent(i)};this.eoxMap.interactions.drawInteraction.on("drawend",r=>{e(r.feature),this.eoxMap.removeInteraction("drawInteraction")}),this.eoxMap.interactions.drawInteraction_modify.on("modifyend",r=>{e(r.features.getArray()[0])})})}createFeatureUrl(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}reset(){var e;const t=this.eoxMap.getLayerById("draw").getSource();((e=t.getFeatures())==null?void 0:e.length)>0&&(t.clear(),this.eoxMap.removeInteraction("drawInteraction_modify"),this.setup())}};Oe([V()],Ie.prototype,"geometry",2);Oe([Me()],Ie.prototype,"eoxMap",2);Ie=Oe([oe("eox-itemfilter-spatial-filter")],Ie);var Ji=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,Kt=(t,e,r,i)=>{for(var n=i>1?void 0:i?Ki(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Ji(e,r,n),n};let Ue=class extends fe{constructor(){super(...arguments),this.inputHandler=()=>{const t=this.renderRoot.querySelector("input[type='text']");this.filterObject.keys.forEach(e=>{this.filterObject.state[e]=t.value}),this.filterObject.dirty=!0,this.dispatchEvent(new CustomEvent("filter"))},this.debouncedInputHandler=It(this.inputHandler,500,{leading:!0})}reset(){const t=this.renderRoot.querySelector("input[type='text']");t.value="",this.filterObject.keys.forEach(e=>{this.filterObject.state[e]=void 0}),delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return k`
      <input
        type="text"
        placeholder="Type something..."
        data-cy="search"
        part="input-search"
        value="${Object.values(this.filterObject.state)[0]}"
        @input="${this.debouncedInputHandler}"
      />
    `}};Kt([V()],Ue.prototype,"filterObject",2);Ue=Kt([oe("eox-itemfilter-text")],Ue);function te(t){return Array.isArray?Array.isArray(t):er(t)==="[object Array]"}const Xi=1/0;function Zi(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Xi?"-0":e}function en(t){return t==null?"":Zi(t)}function J(t){return typeof t=="string"}function Xt(t){return typeof t=="number"}function tn(t){return t===!0||t===!1||rn(t)&&er(t)=="[object Boolean]"}function Zt(t){return typeof t=="object"}function rn(t){return Zt(t)&&t!==null}function W(t){return t!=null}function Be(t){return!t.trim().length}function er(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const nn="Incorrect 'index' type",sn=t=>`Invalid value for key ${t}`,an=t=>`Pattern length exceeds max of ${t}.`,on=t=>`Missing ${t} property in key`,ln=t=>`Property 'weight' in key '${t}' must be a positive integer`,wt=Object.prototype.hasOwnProperty;class cn{constructor(e){this._keys=[],this._keyMap={};let r=0;e.forEach(i=>{let n=tr(i);r+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,r+=n.weight}),this._keys.forEach(i=>{i.weight/=r})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function tr(t){let e=null,r=null,i=null,n=1,s=null;if(J(t)||te(t))i=t,e=$t(t),r=Qe(t);else{if(!wt.call(t,"name"))throw new Error(on("name"));const a=t.name;if(i=a,wt.call(t,"weight")&&(n=t.weight,n<=0))throw new Error(ln(a));e=$t(a),r=Qe(a),s=t.getFn}return{path:e,id:r,weight:n,src:i,getFn:s}}function $t(t){return te(t)?t:t.split(".")}function Qe(t){return te(t)?t.join("."):t}function un(t,e){let r=[],i=!1;const n=(s,a,l)=>{if(W(s))if(!a[l])r.push(s);else{let o=a[l];const c=s[o];if(!W(c))return;if(l===a.length-1&&(J(c)||Xt(c)||tn(c)))r.push(en(c));else if(te(c)){i=!0;for(let u=0,f=c.length;u<f;u+=1)n(c[u],a,l+1)}else a.length&&n(c,a,l+1)}};return n(t,J(e)?e.split("."):e,0),i?r:r[0]}const fn={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},hn={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},dn={location:0,threshold:.6,distance:100},mn={useExtendedSearch:!1,getFn:un,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var b={...hn,...fn,...dn,...mn};const pn=/[^ ]+/g;function gn(t=1,e=3){const r=new Map,i=Math.pow(10,e);return{get(n){const s=n.match(pn).length;if(r.has(s))return r.get(s);const a=1/Math.pow(s,.5*t),l=parseFloat(Math.round(a*i)/i);return r.set(s,l),l},clear(){r.clear()}}}class ft{constructor({getFn:e=b.getFn,fieldNormWeight:r=b.fieldNormWeight}={}){this.norm=gn(r,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((r,i)=>{this._keysMap[r.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,J(this.docs[0])?this.docs.forEach((e,r)=>{this._addString(e,r)}):this.docs.forEach((e,r)=>{this._addObject(e,r)}),this.norm.clear())}add(e){const r=this.size();J(e)?this._addString(e,r):this._addObject(e,r)}removeAt(e){this.records.splice(e,1);for(let r=e,i=this.size();r<i;r+=1)this.records[r].i-=1}getValueForItemAtKeyId(e,r){return e[this._keysMap[r]]}size(){return this.records.length}_addString(e,r){if(!W(e)||Be(e))return;let i={v:e,i:r,n:this.norm.get(e)};this.records.push(i)}_addObject(e,r){let i={i:r,$:{}};this.keys.forEach((n,s)=>{let a=n.getFn?n.getFn(e):this.getFn(e,n.path);if(W(a)){if(te(a)){let l=[];const o=[{nestedArrIndex:-1,value:a}];for(;o.length;){const{nestedArrIndex:c,value:u}=o.pop();if(W(u))if(J(u)&&!Be(u)){let f={v:u,i:c,n:this.norm.get(u)};l.push(f)}else te(u)&&u.forEach((f,g)=>{o.push({nestedArrIndex:g,value:f})})}i.$[s]=l}else if(J(a)&&!Be(a)){let l={v:a,n:this.norm.get(a)};i.$[s]=l}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function rr(t,e,{getFn:r=b.getFn,fieldNormWeight:i=b.fieldNormWeight}={}){const n=new ft({getFn:r,fieldNormWeight:i});return n.setKeys(t.map(tr)),n.setSources(e),n.create(),n}function yn(t,{getFn:e=b.getFn,fieldNormWeight:r=b.fieldNormWeight}={}){const{keys:i,records:n}=t,s=new ft({getFn:e,fieldNormWeight:r});return s.setKeys(i),s.setIndexRecords(n),s}function _e(t,{errors:e=0,currentLocation:r=0,expectedLocation:i=0,distance:n=b.distance,ignoreLocation:s=b.ignoreLocation}={}){const a=e/t.length;if(s)return a;const l=Math.abs(i-r);return n?a+l/n:l?1:a}function vn(t=[],e=b.minMatchCharLength){let r=[],i=-1,n=-1,s=0;for(let a=t.length;s<a;s+=1){let l=t[s];l&&i===-1?i=s:!l&&i!==-1&&(n=s-1,n-i+1>=e&&r.push([i,n]),i=-1)}return t[s-1]&&s-i>=e&&r.push([i,s-1]),r}const ce=32;function bn(t,e,r,{location:i=b.location,distance:n=b.distance,threshold:s=b.threshold,findAllMatches:a=b.findAllMatches,minMatchCharLength:l=b.minMatchCharLength,includeMatches:o=b.includeMatches,ignoreLocation:c=b.ignoreLocation}={}){if(e.length>ce)throw new Error(an(ce));const u=e.length,f=t.length,g=Math.max(0,Math.min(i,f));let m=s,y=g;const M=l>1||o,R=M?Array(f):[];let A;for(;(A=t.indexOf(e,y))>-1;){let P=_e(e,{currentLocation:A,expectedLocation:g,distance:n,ignoreLocation:c});if(m=Math.min(P,m),y=A+u,M){let j=0;for(;j<u;)R[A+j]=1,j+=1}}y=-1;let F=[],C=1,D=u+f;const L=1<<u-1;for(let P=0;P<u;P+=1){let j=0,S=D;for(;j<S;)_e(e,{errors:P,currentLocation:g+S,expectedLocation:g,distance:n,ignoreLocation:c})<=m?j=S:D=S,S=Math.floor((D-j)/2+j);D=S;let E=Math.max(1,g-S+1),ie=a?f:Math.min(g+S,f)+u,K=Array(ie+2);K[ie+1]=(1<<P)-1;for(let h=ie;h>=E;h-=1){let d=h-1,v=r[t.charAt(d)];if(M&&(R[d]=+!!v),K[h]=(K[h+1]<<1|1)&v,P&&(K[h]|=(F[h+1]|F[h])<<1|1|F[h+1]),K[h]&L&&(C=_e(e,{errors:P,currentLocation:d,expectedLocation:g,distance:n,ignoreLocation:c}),C<=m)){if(m=C,y=d,y<=g)break;E=Math.max(1,2*g-y)}}if(_e(e,{errors:P+1,currentLocation:g,expectedLocation:g,distance:n,ignoreLocation:c})>m)break;F=K}const O={isMatch:y>=0,score:Math.max(.001,C)};if(M){const P=vn(R,l);P.length?o&&(O.indices=P):O.isMatch=!1}return O}function xn(t){let e={};for(let r=0,i=t.length;r<i;r+=1){const n=t.charAt(r);e[n]=(e[n]||0)|1<<i-r-1}return e}class ir{constructor(e,{location:r=b.location,threshold:i=b.threshold,distance:n=b.distance,includeMatches:s=b.includeMatches,findAllMatches:a=b.findAllMatches,minMatchCharLength:l=b.minMatchCharLength,isCaseSensitive:o=b.isCaseSensitive,ignoreLocation:c=b.ignoreLocation}={}){if(this.options={location:r,threshold:i,distance:n,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:o,ignoreLocation:c},this.pattern=o?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(g,m)=>{this.chunks.push({pattern:g,alphabet:xn(g),startIndex:m})},f=this.pattern.length;if(f>ce){let g=0;const m=f%ce,y=f-m;for(;g<y;)u(this.pattern.substr(g,ce),g),g+=ce;if(m){const M=f-ce;u(this.pattern.substr(M),M)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:r,includeMatches:i}=this.options;if(r||(e=e.toLowerCase()),this.pattern===e){let y={isMatch:!0,score:0};return i&&(y.indices=[[0,e.length-1]]),y}const{location:n,distance:s,threshold:a,findAllMatches:l,minMatchCharLength:o,ignoreLocation:c}=this.options;let u=[],f=0,g=!1;this.chunks.forEach(({pattern:y,alphabet:M,startIndex:R})=>{const{isMatch:A,score:F,indices:C}=bn(e,y,M,{location:n+R,distance:s,threshold:a,findAllMatches:l,minMatchCharLength:o,includeMatches:i,ignoreLocation:c});A&&(g=!0),f+=F,A&&C&&(u=[...u,...C])});let m={isMatch:g,score:g?f/this.chunks.length:1};return g&&i&&(m.indices=u),m}}class le{constructor(e){this.pattern=e}static isMultiMatch(e){return Mt(e,this.multiRegex)}static isSingleMatch(e){return Mt(e,this.singleRegex)}search(){}}function Mt(t,e){const r=t.match(e);return r?r[1]:null}class wn extends le{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const r=e===this.pattern;return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class $n extends le{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const i=e.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,e.length-1]}}}class Mn extends le{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const r=e.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class On extends le{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const r=!e.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class En extends le{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const r=e.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Sn extends le{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const r=!e.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class nr extends le{constructor(e,{location:r=b.location,threshold:i=b.threshold,distance:n=b.distance,includeMatches:s=b.includeMatches,findAllMatches:a=b.findAllMatches,minMatchCharLength:l=b.minMatchCharLength,isCaseSensitive:o=b.isCaseSensitive,ignoreLocation:c=b.ignoreLocation}={}){super(e),this._bitapSearch=new ir(e,{location:r,threshold:i,distance:n,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:o,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class sr extends le{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let r=0,i;const n=[],s=this.pattern.length;for(;(i=e.indexOf(this.pattern,r))>-1;)r=i+s,n.push([i,r-1]);const a=!!n.length;return{isMatch:a,score:a?0:1,indices:n}}}const Je=[wn,sr,Mn,On,Sn,En,$n,nr],Ot=Je.length,_n=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,An="|";function Pn(t,e={}){return t.split(An).map(r=>{let i=r.trim().split(_n).filter(s=>s&&!!s.trim()),n=[];for(let s=0,a=i.length;s<a;s+=1){const l=i[s];let o=!1,c=-1;for(;!o&&++c<Ot;){const u=Je[c];let f=u.isMultiMatch(l);f&&(n.push(new u(f,e)),o=!0)}if(!o)for(c=-1;++c<Ot;){const u=Je[c];let f=u.isSingleMatch(l);if(f){n.push(new u(f,e));break}}}return n})}const Cn=new Set([nr.type,sr.type]);class Tn{constructor(e,{isCaseSensitive:r=b.isCaseSensitive,includeMatches:i=b.includeMatches,minMatchCharLength:n=b.minMatchCharLength,ignoreLocation:s=b.ignoreLocation,findAllMatches:a=b.findAllMatches,location:l=b.location,threshold:o=b.threshold,distance:c=b.distance}={}){this.query=null,this.options={isCaseSensitive:r,includeMatches:i,minMatchCharLength:n,findAllMatches:a,ignoreLocation:s,location:l,threshold:o,distance:c},this.pattern=r?e:e.toLowerCase(),this.query=Pn(this.pattern,this.options)}static condition(e,r){return r.useExtendedSearch}searchIn(e){const r=this.query;if(!r)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let s=0,a=[],l=0;for(let o=0,c=r.length;o<c;o+=1){const u=r[o];a.length=0,s=0;for(let f=0,g=u.length;f<g;f+=1){const m=u[f],{isMatch:y,indices:M,score:R}=m.search(e);if(y){if(s+=1,l+=R,i){const A=m.constructor.type;Cn.has(A)?a=[...a,...M]:a.push(M)}}else{l=0,s=0,a.length=0;break}}if(s){let f={isMatch:!0,score:l/s};return i&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const Ke=[];function kn(...t){Ke.push(...t)}function Xe(t,e){for(let r=0,i=Ke.length;r<i;r+=1){let n=Ke[r];if(n.condition(t,e))return new n(t,e)}return new ir(t,e)}const Re={AND:"$and",OR:"$or"},Ze={PATH:"$path",PATTERN:"$val"},et=t=>!!(t[Re.AND]||t[Re.OR]),Ln=t=>!!t[Ze.PATH],In=t=>!te(t)&&Zt(t)&&!et(t),Et=t=>({[Re.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function ar(t,e,{auto:r=!0}={}){const i=n=>{let s=Object.keys(n);const a=Ln(n);if(!a&&s.length>1&&!et(n))return i(Et(n));if(In(n)){const o=a?n[Ze.PATH]:s[0],c=a?n[Ze.PATTERN]:n[o];if(!J(c))throw new Error(sn(o));const u={keyId:Qe(o),pattern:c};return r&&(u.searcher=Xe(c,e)),u}let l={children:[],operator:s[0]};return s.forEach(o=>{const c=n[o];te(c)&&c.forEach(u=>{l.children.push(i(u))})}),l};return et(t)||(t=Et(t)),i(t)}function Rn(t,{ignoreFieldNorm:e=b.ignoreFieldNorm}){t.forEach(r=>{let i=1;r.matches.forEach(({key:n,norm:s,score:a})=>{const l=n?n.weight:null;i*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:s))}),r.score=i})}function jn(t,e){const r=t.matches;e.matches=[],W(r)&&r.forEach(i=>{if(!W(i.indices)||!i.indices.length)return;const{indices:n,value:s}=i;let a={indices:n,value:s};i.key&&(a.key=i.key.src),i.idx>-1&&(a.refIndex=i.idx),e.matches.push(a)})}function Fn(t,e){e.score=t.score}function Dn(t,e,{includeMatches:r=b.includeMatches,includeScore:i=b.includeScore}={}){const n=[];return r&&n.push(jn),i&&n.push(Fn),t.map(s=>{const{idx:a}=s,l={item:e[a],refIndex:a};return n.length&&n.forEach(o=>{o(s,l)}),l})}class be{constructor(e,r={},i){this.options={...b,...r},this.options.useExtendedSearch,this._keyStore=new cn(this.options.keys),this.setCollection(e,i)}setCollection(e,r){if(this._docs=e,r&&!(r instanceof ft))throw new Error(nn);this._myIndex=r||rr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){W(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const r=[];for(let i=0,n=this._docs.length;i<n;i+=1){const s=this._docs[i];e(s,i)&&(this.removeAt(i),i-=1,n-=1,r.push(s))}return r}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:r=-1}={}){const{includeMatches:i,includeScore:n,shouldSort:s,sortFn:a,ignoreFieldNorm:l}=this.options;let o=J(e)?J(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Rn(o,{ignoreFieldNorm:l}),s&&o.sort(a),Xt(r)&&r>-1&&(o=o.slice(0,r)),Dn(o,this._docs,{includeMatches:i,includeScore:n})}_searchStringList(e){const r=Xe(e,this.options),{records:i}=this._myIndex,n=[];return i.forEach(({v:s,i:a,n:l})=>{if(!W(s))return;const{isMatch:o,score:c,indices:u}=r.searchIn(s);o&&n.push({item:s,idx:a,matches:[{score:c,value:s,norm:l,indices:u}]})}),n}_searchLogical(e){const r=ar(e,this.options),i=(l,o,c)=>{if(!l.children){const{keyId:f,searcher:g}=l,m=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(o,f),searcher:g});return m&&m.length?[{idx:c,item:o,matches:m}]:[]}const u=[];for(let f=0,g=l.children.length;f<g;f+=1){const m=l.children[f],y=i(m,o,c);if(y.length)u.push(...y);else if(l.operator===Re.AND)return[]}return u},n=this._myIndex.records,s={},a=[];return n.forEach(({$:l,i:o})=>{if(W(l)){let c=i(r,l,o);c.length&&(s[o]||(s[o]={idx:o,item:l,matches:[]},a.push(s[o])),c.forEach(({matches:u})=>{s[o].matches.push(...u)}))}}),a}_searchObjectList(e){const r=Xe(e,this.options),{keys:i,records:n}=this._myIndex,s=[];return n.forEach(({$:a,i:l})=>{if(!W(a))return;let o=[];i.forEach((c,u)=>{o.push(...this._findMatches({key:c,value:a[u],searcher:r}))}),o.length&&s.push({idx:l,item:a,matches:o})}),s}_findMatches({key:e,value:r,searcher:i}){if(!W(r))return[];let n=[];if(te(r))r.forEach(({v:s,i:a,n:l})=>{if(!W(s))return;const{isMatch:o,score:c,indices:u}=i.searchIn(s);o&&n.push({score:c,key:e,value:s,idx:a,norm:l,indices:u})});else{const{v:s,n:a}=r,{isMatch:l,score:o,indices:c}=i.searchIn(s);l&&n.push({score:o,key:e,value:s,norm:a,indices:c})}return n}}be.version="6.6.2";be.createIndex=rr;be.parseIndex=yn;be.config=b;be.parseQuery=ar;kn(Tn);const Nn=(t,e="highlight",r="title")=>{const i=(s,a,l)=>{const o=a.split(".");let c;for(c=0;c<o.length-1;c++)s=s[o[c]];s[o[c]]=l},n=(s,a=[])=>{let l="",o=0;return a.forEach(c=>{const u=c[1]+1;l+=[s.substring(o,c[0]),`<mark class="${e}">`,s.substring(c[0],u),"</mark>"].join(""),o=u}),l+=s.substring(o),l};return t.filter(({matches:s})=>s&&s.length).map(({item:s,matches:a})=>{const l={...s};return a.forEach(o=>{o.key===r&&i(l,o.key,n(o.value,o.indices))}),l})};let or;const Bn=(t,e)=>{or=new be(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},Hn=async(t,e,r)=>{const i=Object.entries(e).filter(([l,o])=>o.type==="text"||o.type==="select"||o.type==="multiselect").reduce((l,[o,c])=>{const u="$or",f=[],g=(m,y)=>{const M={};c.type==="text"?M[m]=`${y}`:M[o]=`="${m}"`,f.push(M)};return Object.entries(c.state).filter(([m,y])=>y).forEach(([m,y])=>g(m,y)),f.length>0&&l.push({[u]:f}),l},[]);let n;if(!(i.length>0)&&r.matchAllWhenEmpty!==!1)n=t;else{const l={$and:[...i]},o=or.search(l);n=r.enableHighlighting?Nn(o,"highlight",r.titleProperty):o.map(c=>c.item)}const s=Object.entries(e).filter(([l,o])=>o.type==="range").reduce((l,[o,c])=>(l[o]={min:c.state.min,max:c.state.max,format:c.format},l),{});if(Object.keys(s).length>0){const l=[];for(let o=0;o<n.length;o++){const c={};for(const[u,f]of Object.entries(s)){const g=m=>f.format==="date"?Pe(m).unix():m;n[o].hasOwnProperty(u)?Array.isArray(n[o][u])?c[u]=s[u].min<=g(n[o][u][1])&&g(n[o][u][0])<=s[u].max:g(n[o][u])>=s[u].min&&g(n[o][u])<=s[u].max?c[u]=!0:c[u]=!1:c[u]=!0}Object.values(c).every(u=>!!u)&&l.push(n[o])}n=[...l]}const a=Object.entries(e).filter(([l,o])=>o.type==="spatial").reduce((l,[o,c])=>(l[o]={geometry:c.state.geometry,mode:c.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let o=0;o<n.length;o++){const c={};for(const u of Object.keys(a)){const f=a[u].mode||"within";n[o].hasOwnProperty(u)&&(f==="within"?Qi(n[o][u],a[u].geometry):Ui(n[o][u],a[u].geometry))?c[u]=!0:c[u]=!1}Object.values(c).every(u=>!!u)&&l.push(n[o])}n=[...l]}return n},Wn=async(t,e,r)=>(await(await fetch(`${r.externalFilter(t,e)}`)).json()).features;var qn=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,re=(t,e,r,i)=>{for(var n=i>1?void 0:i?Gn(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&qn(e,r,n),n};class St{constructor(){this.aggregateResults=void 0,this.enableHighlighting=!1,this.filterProperties=[],this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.onFilter=()=>{},this.onSelect=()=>{},this.showResults=!0,this.titleProperty="title",this.expandMultipleFilters=!0,this.expandMultipleResults=!0}}let Y=class extends mr{constructor(){super(...arguments),this._resultAggregation=[],this.filters={},this.items=[],this._config=new St,this.apply=t=>{this.items=t.map((r,i)=>({id:`item-${i}`,...r})),this._config.filterProperties.length&&this._config.filterProperties.forEach(r=>{const i={},n=s=>r.format==="date"?Pe(s).unix():parseInt(s);this.items.forEach(s=>{if(r.type==="range"){if(Array.isArray(s[r.key])){const a=[n(s[r.key][0]),n(s[r.key][1])];i.min=i.min!==void 0?Math.min(i.min,a[0]):a[0],i.max=i.max!==void 0?Math.max(i.max,a[1]):a[1]}else{const a=n(s[r.key]);i.min=i.min!==void 0?Math.min(i.min,a):a,i.max=i.max!==void 0?Math.max(i.max,a):a}return}Array.isArray(s[r.key])?s[r.key].forEach(a=>{i[a]=void 0}):r.type==="spatial"?(i.geometry=void 0,i.mode=r.mode||"intersects"):i[s[r.key]]=void 0}),this.filters[r.key||r.keys.join("|")]={...r,type:r.type||"multiselect",state:{...i,...r.state},...r.state&&{dirty:!0},...r.type==="range"&&{min:i.min,max:i.max,format:r.format}}}),this._config.matchAllWhenEmpty!==!1&&(this.results=this.sortResults(this.items),this.requestUpdate()),this._config.aggregateResults&&(this._resultAggregation=[...new Set(this.items.reduce((r,i)=>r.concat(i[this._config.aggregateResults]),[]))].sort((r,i)=>r.localeCompare(i)));const e=[];Object.values(this.filters).forEach(r=>{r.type==="text"?r.keys.forEach(i=>{e.includes(i)||e.push(i)}):(r.type==="select"||r.type==="multiselect")&&(e.includes(r.key)||e.push(r.key))}),Bn(this.items,{keys:e,...this._config.fuseConfig}),this.search()}}set config(t){const e=this._config;this._config={...new St,...t},this.requestUpdate("config",e)}get config(){return this._config}async search(){let t;this.config.externalFilter?t=await Wn(this.items,this.filters,this._config):t=await Hn(this.items,this.filters,this._config),this.results=this.sortResults(t),this._config.onFilter(this.results,this.filters)}aggregateResults(t,e){return t.filter(r=>{const i=r[this._config.aggregateResults];let n;return this.filters[this._config.aggregateResults]&&(n=Object.keys(this.filters[this._config.aggregateResults]).filter(a=>this.filters[this._config.aggregateResults].state[a])),(n!=null&&n.length?n.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}sortResults(t){return[...t].sort((e,r)=>e[this._config.titleProperty].localeCompare(r[this._config.titleProperty]))}resetFilters(){this.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{t.reset()}),this.search()}toggleAccordion(t){let e;if(t.detail?e=t.detail.target:e=t.target,e.classList.contains("details-filter")){if(!e.open||this.config.expandMultipleFilters)return;this.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const i=r.shadowRoot.querySelector(".details-filter");i&&i!==e&&i.removeAttribute("open")})}else{if(!e.open||this.config.expandMultipleResults)return;this.shadowRoot.querySelectorAll("details").forEach(r=>{r!==e&&r.removeAttribute("open")})}}render(){return k`
      <style>
        ${Tt}
        ${!this.unstyled&&kt}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        @submit="${t=>t.preventDefault()}"
      >
        ${de(this._config.filterProperties.length,()=>k`
            <section class="${this.config.inlineMode?"inline":Z}">
              ${de(!this.config.inlineMode,()=>k`
                    <slot name="filterstitle"
                      ><h4 style="margin-top: 8px">Filters</h4></slot
                    >
                  `)}
              <ul id="filters">
                ${pe(Object.values(this.filters),t=>De`
                  <li>
                    ${t.featured?De`
                          <eox-itemfilter-${Se(t.type)}
                            slot="filter"
                            data-type="filter"
                            .filterObject=${t}
                            @filter="${()=>this.search()}"
                          ></eox-itemfilter-${Se(t.type)}>
                        `:De`
                          <eox-itemfilter-expandcontainer
                            .filterObject=${t}
                            .unstyled=${this.unstyled}
                            @details-toggled=${this.toggleAccordion}
                          >
                            <eox-itemfilter-${Se(t.type)}
                              slot="filter"
                              data-type="filter"
                              data-filter="${t.key}"
                              .filterObject=${t}
                              @filter="${()=>this.search()}"
                            ></eox-itemfilter-${Se(t.type)}>
                          </eox-itemfilter-expandcontainer>
                      `}
                  </li>
                `)}
              </ul>
              ${de(this._config.filterProperties&&Object.values(this.filters).map(t=>t.dirty).filter(t=>t).length>0,()=>k`
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
        ${de(this.config.showResults&&this.results,()=>k`
            <section id="section-results">
              <div>
                <slot name="resultstitle"
                  ><h4 style="margin-top: 8px">Results</h4></slot
                >
              </div>
              <div id="container-results" class="scroll">
                ${this.results.length<1?k` <small class="no-results">No matching items</small> `:Z}
                <ul id="results" part="results">
                  ${this._config.aggregateResults?pe(this._resultAggregation.filter(t=>this.aggregateResults(this.results,t).length),t=>k`<details
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
                            ${hr(this.aggregateResults(this.results,t),e=>e.id,e=>{var r,i;return k`
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
                                    ${de(this.hasTemplate("result"),()=>this.renderTemplate("result",e,`result-${e.id}`),()=>k`
                                        <span class="title"
                                          >${ht(e[this._config.titleProperty])}</span
                                        >
                                      `)}
                                  </label>
                                </li>
                              `})}
                          </ul>
                        </details>`):pe(this.results,t=>k`<li part="result">
                            <label>
                              <input
                                type="radio"
                                name="result"
                                id="${t.id}"
                                @click=${()=>{this.selectedResult=t,this._config.onSelect(t)}}
                              />
                              ${de(this.hasTemplate("result"),()=>this.renderTemplate("result",t,`result-${t.id}`),()=>k`
                                  <span class="title"
                                    >${ht(t[this._config.titleProperty])}</span
                                  >
                                `)}
                            </label>
                          </li>`)}
                </ul>
              </div>
            </section>
          `)}
      </form>
    `}};re([Me()],Y.prototype,"filters",2);re([Me()],Y.prototype,"items",2);re([Me()],Y.prototype,"results",2);re([Me()],Y.prototype,"selectedResult",2);re([V({attribute:!1})],Y.prototype,"config",1);re([V()],Y.prototype,"apply",2);re([V({attribute:!1})],Y.prototype,"styleOverride",2);re([V({type:Boolean})],Y.prototype,"unstyled",2);Y=re([oe("eox-itemfilter")],Y);const Vn=[{archived:!1,code:"E10a2",description:"Actively managed total area from Sentinel-2 data",indicator:"Actively managed total area from Sentinel-2 data",themes:["agriculture"],title:"White Asparagus area [%]",name:"Actively managed total area from Sentinel-2 data",year:2e3,likes:4,years:[2e3,2e3],timestamp:"2023-06-14T13:56:38+00:00",datetime:["2023-06-14T10:56:38+00:00","2023-06-14T22:56:38+00:00"],bbox:[-90,60,-20,82],geometry:{type:"Polygon",coordinates:[[[-90,60],[-20,60],[-20,82],[-90,82]]]}},{archived:!1,code:"E10a9",description:"Agricultural Workers",indicator:"Agricultural Workers",themes:["agriculture"],title:"Workers availability [nr]",name:"Agricultural Workers",year:2020,likes:46,years:[2007,2020],timestamp:"2023-06-13T13:56:38+00:00",datetime:["2023-06-13T10:56:38+00:00","2023-06-13T22:56:38+00:00"],bbox:[0,0,10,10],geometry:{type:"Polygon",coordinates:[[[0,0],[10,0],[10,10],[0,10]]]}},{archived:!1,code:"N1",description:"Air Quality",indicator:"Air Quality",themes:["air"],title:"Sea ice freeboard",name:"Sea ice freeboard",year:2023,likes:34,years:[2008,2023],timestamp:"2023-06-12T13:56:38+00:00",datetime:["2023-06-12T10:56:38+00:00","2023-06-12T22:56:38+00:00"],bbox:[-180,-80,180,-61],geometry:{type:"Polygon",coordinates:[[[-180,-80],[180,-80],[180,-61],[-180,-61]]]}},{archived:!1,code:"E13o",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (all) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2022,likes:177,years:[2021,2022],timestamp:"2023-06-11T13:56:38+00:00",datetime:["2023-06-11T10:56:38+00:00","2023-06-11T22:56:38+00:00"]},{archived:!1,code:"E13p",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (cargo) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2016,likes:0,years:[2005,2016],timestamp:"2023-06-10T13:56:38+00:00",datetime:["2023-06-10T10:56:38+00:00","2023-06-10T22:56:38+00:00"]},{archived:!1,code:"E13q",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (tanker) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2017,likes:0,years:[2006,2017],timestamp:"2023-06-09T13:56:38+00:00",datetime:["2023-06-09T10:56:38+00:00","2023-06-09T22:56:38+00:00"]},{archived:!1,code:"E13r",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (others) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2003,likes:2,years:[2001,2003],timestamp:"2023-06-08T13:56:38+00:00",datetime:["2023-06-08T10:56:38+00:00","2023-06-08T22:56:38+00:00"]},{archived:!1,code:"C1",description:"Boat traffic - NO2 level",indicator:"Boat traffic - NO2 level",themes:["economy","air"],title:"Ships - NO2 Correlation",indicatorOverwrite:"Ports and Shipping - impact on air quality",name:"Boat traffic - NO2 level",year:2020,likes:65,years:[2015,2020],timestamp:"2023-06-07T13:56:38+00:00",datetime:["2023-06-07T10:56:38+00:00","2023-06-07T22:56:38+00:00"]},{archived:!1,code:"CDS1",description:"C3S Data",indicator:"C3S Data",themes:["air"],title:"Temperature",name:"C3S Data",year:2021,likes:34,years:[2021,2021],timestamp:"2023-06-06T13:56:38+00:00",datetime:["2023-06-06T10:56:38+00:00","2023-06-06T22:56:38+00:00"]},{archived:!1,code:"N1a",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level PM2.5 (model)",name:"CAMS Air Quality",year:2023,likes:88,years:[2e3,2023],timestamp:"2023-06-05T13:56:38+00:00",datetime:["2023-06-05T10:56:38+00:00","2023-06-05T22:56:38+00:00"]},{archived:!1,code:"N1b",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level NO2 (model)",name:"CAMS Air Quality",year:2022,likes:77,years:[2019,2022],timestamp:"2023-06-04T13:56:38+00:00",datetime:["2023-06-04T10:56:38+00:00","2023-06-04T22:56:38+00:00"]},{archived:!1,code:"N1c",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level PM10 (model)",name:"CAMS Air Quality",year:2018,likes:23,years:[2014,2018],timestamp:"2023-06-03T13:56:38+00:00",datetime:["2023-06-03T10:56:38+00:00","2023-06-03T22:56:38+00:00"]},{archived:!1,code:"N1d",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level O3 (model)",name:"CAMS Air Quality",year:2018,likes:56,years:[2017,2018],timestamp:"2023-06-02T13:56:38+00:00",datetime:["2023-06-02T10:56:38+00:00","2023-06-02T22:56:38+00:00"]},{archived:!1,code:"E13e",description:"Cargo ships in port based on AIS data",indicator:"Cargo ships in port based on AIS data",themes:["economy"],title:"Cargo Ships [nr]",name:"Cargo ships in port based on AIS data",year:2019,likes:11,years:[2018,2019],timestamp:"2023-06-01T13:56:38+00:00",datetime:["2023-06-01T10:56:38+00:00","2023-06-01T22:56:38+00:00"]},{archived:!1,code:"E13n",description:"Changes in traffic based on mobile data",indicator:"Changes in traffic based on mobile data",themes:["economy"],title:"Trucks transiting ports [%]",name:"Changes in traffic based on mobile data",year:2017,likes:8,years:[2015,2017],timestamp:"2023-05-29T13:56:38+00:00",datetime:["2023-05-29T10:56:38+00:00","2023-05-29T22:56:38+00:00"]},{archived:!1,code:"N3c",description:"CMEMS product",indicator:"CMEMS product",themes:["water"],title:"CHL-a concentration (map, 1km)",name:"CMEMS product",year:2015,likes:37,years:[2014,2015],timestamp:"2023-05-28T13:56:38+00:00",datetime:["2023-05-28T10:56:38+00:00","2023-05-28T22:56:38+00:00"]},{archived:!1,code:"CV",description:"Covid-19 cases",indicator:"Covid-19 cases",themes:["health"],title:"Covid-19 cases",name:"Covid-19 cases",year:2013,likes:4,years:[2001,2013],timestamp:"2023-05-27T13:56:38+00:00",datetime:["2023-05-27T10:56:38+00:00","2023-05-27T22:56:38+00:00"]},{archived:!1,code:"OW",description:"Covid-19 vaccinations",indicator:"Covid-19 vaccinations",themes:["health"],title:"Covid-19 vaccinations",name:"Covid-19 vaccinations",year:2016,likes:39,years:[2015,2016],timestamp:"2023-05-26T13:56:38+00:00",datetime:["2023-05-26T10:56:38+00:00","2023-05-26T22:56:38+00:00"]},{archived:!1,code:"E3",description:"Crude Oil and other input materials",indicator:"Crude Oil and other input materials",themes:["economy"],title:"Raw Material Inventory",name:"Crude Oil and other input materials",year:2020,likes:28,years:[2014,2020],timestamp:"2023-05-25T13:56:38+00:00",datetime:["2023-05-25T10:56:38+00:00","2023-05-25T22:56:38+00:00"]},{archived:!1,code:"E13l",description:"Cruise ships in port based on AIS data",indicator:"Cruise ships in port based on AIS data",themes:["economy"],title:"Cruise Ships [nr]",name:"Cruise ships in port based on AIS data",year:1999,likes:17,years:[1998,1999],timestamp:"2023-05-24T13:56:38+00:00",datetime:["2023-05-24T10:56:38+00:00","2023-05-24T22:56:38+00:00"]}],rs={title:"Elements/eox-itemfilter",tags:["autodocs"],component:"eox-itemfilter",render:t=>{const e=new Y;return e.config=t,e.apply(Vn),e}},Ae={args:{titleProperty:"title",filterProperties:[{keys:["title","themes"],title:"Search",type:"text",expanded:!0,state:{title:"no2",themes:"no2"}},{key:"themes",title:"Theme",type:"multiselect"},{key:"timestamp",type:"range",format:"date"},{key:"geometry",type:"spatial"}],aggregateResults:"themes",enableHighlighting:!0,onSelect:t=>{console.log(t)}}};var _t,At,Pt;Ae.parameters={...Ae.parameters,docs:{...(_t=Ae.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Pt=(At=Ae.parameters)==null?void 0:At.docs)==null?void 0:Pt.source}}};const is=["Primary"];export{Ae as Primary,is as __namedExportsOrder,rs as default};
//# sourceMappingURL=itemfilter.stories-318a9ad3.js.map
