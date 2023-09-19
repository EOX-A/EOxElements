import{s as fe,x as k,A as Z}from"./lit-element-c29cbb6b.js";import{n as V,e as oe,t as Me}from"./query-assigned-elements-bec7f9a4.js";import{c as sr,r as nr,s as ar,l as or,n as de,a as lr}from"./checkbox-214f669f.js";import{o as pe,n as Fe,a as Se,b as ft}from"./static-7c848839.js";import"./toolcool-range-slider.min-b4f5b26b.js";import{c as $e,g as et,a as Re}from"./_commonjsHelpers-042e6b4d.js";import{r as cr,T as ur}from"./templateElement-8d2f8dc8.js";import{b as fr}from"./button-65098188.js";import"./directive-12249aa5.js";import"./directive-helpers-2720686e.js";var St={exports:{}};(function(t,e){(function(r,i){t.exports=i()})($e,function(){var r=1e3,i=6e4,s=36e5,n="millisecond",a="second",l="minute",o="hour",c="day",u="week",f="month",g="quarter",m="year",y="date",M="Invalid Date",R=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,A=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,F={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(x){var h=["th","st","nd","rd"],d=x%100;return"["+x+(h[(d-20)%10]||h[d]||h[0])+"]"}},C=function(x,h,d){var v=String(x);return!v||v.length>=h?x:""+Array(h+1-v.length).join(d)+x},D={s:C,z:function(x){var h=-x.utcOffset(),d=Math.abs(h),v=Math.floor(d/60),p=d%60;return(h<=0?"+":"-")+C(v,2,"0")+":"+C(p,2,"0")},m:function x(h,d){if(h.date()<d.date())return-x(d,h);var v=12*(d.year()-h.year())+(d.month()-h.month()),p=h.clone().add(v,f),$=d-p<0,w=h.clone().add(v+($?-1:1),f);return+(-(v+(d-p)/($?p-w:w-p))||0)},a:function(x){return x<0?Math.ceil(x)||0:Math.floor(x)},p:function(x){return{M:f,y:m,w:u,d:c,D:y,h:o,m:l,s:a,ms:n,Q:g}[x]||String(x||"").toLowerCase().replace(/s$/,"")},u:function(x){return x===void 0}},L="en",O={};O[L]=F;var P=function(x){return x instanceof ie},j=function x(h,d,v){var p;if(!h)return L;if(typeof h=="string"){var $=h.toLowerCase();O[$]&&(p=$),d&&(O[$]=d,p=$);var w=h.split("-");if(!p&&w.length>1)return x(w[0])}else{var _=h.name;O[_]=h,p=_}return!v&&p&&(L=p),p||!v&&L},S=function(x,h){if(P(x))return x.clone();var d=typeof h=="object"?h:{};return d.date=x,d.args=arguments,new ie(d)},E=D;E.l=j,E.i=P,E.w=function(x,h){return S(x,{locale:h.$L,utc:h.$u,x:h.$x,$offset:h.$offset})};var ie=function(){function x(d){this.$L=j(d.locale,null,!0),this.parse(d)}var h=x.prototype;return h.parse=function(d){this.$d=function(v){var p=v.date,$=v.utc;if(p===null)return new Date(NaN);if(E.u(p))return new Date;if(p instanceof Date)return new Date(p);if(typeof p=="string"&&!/Z$/i.test(p)){var w=p.match(R);if(w){var _=w[2]-1||0,I=(w[7]||"0").substring(0,3);return $?new Date(Date.UTC(w[1],_,w[3]||1,w[4]||0,w[5]||0,w[6]||0,I)):new Date(w[1],_,w[3]||1,w[4]||0,w[5]||0,w[6]||0,I)}}return new Date(p)}(d),this.$x=d.x||{},this.init()},h.init=function(){var d=this.$d;this.$y=d.getFullYear(),this.$M=d.getMonth(),this.$D=d.getDate(),this.$W=d.getDay(),this.$H=d.getHours(),this.$m=d.getMinutes(),this.$s=d.getSeconds(),this.$ms=d.getMilliseconds()},h.$utils=function(){return E},h.isValid=function(){return this.$d.toString()!==M},h.isSame=function(d,v){var p=S(d);return this.startOf(v)<=p&&p<=this.endOf(v)},h.isAfter=function(d,v){return S(d)<this.startOf(v)},h.isBefore=function(d,v){return this.endOf(v)<S(d)},h.$g=function(d,v,p){return E.u(d)?this[v]:this.set(p,d)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(d,v){var p=this,$=!!E.u(v)||v,w=E.p(d),_=function(he,H){var ne=E.w(p.$u?Date.UTC(p.$y,H,he):new Date(p.$y,H,he),p);return $?ne:ne.endOf(c)},I=function(he,H){return E.w(p.toDate()[he].apply(p.toDate("s"),($?[0,0,0,0]:[23,59,59,999]).slice(H)),p)},T=this.$W,N=this.$M,se=this.$D,X="set"+(this.$u?"UTC":"");switch(w){case m:return $?_(1,0):_(31,11);case f:return $?_(1,N):_(0,N+1);case u:var xe=this.$locale().weekStart||0,we=(T<xe?T+7:T)-xe;return _($?se-we:se+(6-we),N);case c:case y:return I(X+"Hours",0);case o:return I(X+"Minutes",1);case l:return I(X+"Seconds",2);case a:return I(X+"Milliseconds",3);default:return this.clone()}},h.endOf=function(d){return this.startOf(d,!1)},h.$set=function(d,v){var p,$=E.p(d),w="set"+(this.$u?"UTC":""),_=(p={},p[c]=w+"Date",p[y]=w+"Date",p[f]=w+"Month",p[m]=w+"FullYear",p[o]=w+"Hours",p[l]=w+"Minutes",p[a]=w+"Seconds",p[n]=w+"Milliseconds",p)[$],I=$===c?this.$D+(v-this.$W):v;if($===f||$===m){var T=this.clone().set(y,1);T.$d[_](I),T.init(),this.$d=T.set(y,Math.min(this.$D,T.daysInMonth())).$d}else _&&this.$d[_](I);return this.init(),this},h.set=function(d,v){return this.clone().$set(d,v)},h.get=function(d){return this[E.p(d)]()},h.add=function(d,v){var p,$=this;d=Number(d);var w=E.p(v),_=function(N){var se=S($);return E.w(se.date(se.date()+Math.round(N*d)),$)};if(w===f)return this.set(f,this.$M+d);if(w===m)return this.set(m,this.$y+d);if(w===c)return _(1);if(w===u)return _(7);var I=(p={},p[l]=i,p[o]=s,p[a]=r,p)[w]||1,T=this.$d.getTime()+d*I;return E.w(T,this)},h.subtract=function(d,v){return this.add(-1*d,v)},h.format=function(d){var v=this,p=this.$locale();if(!this.isValid())return p.invalidDate||M;var $=d||"YYYY-MM-DDTHH:mm:ssZ",w=E.z(this),_=this.$H,I=this.$m,T=this.$M,N=p.weekdays,se=p.months,X=function(H,ne,je,Ee){return H&&(H[ne]||H(v,$))||je[ne].slice(0,Ee)},xe=function(H){return E.s(_%12||12,H,"0")},we=p.meridiem||function(H,ne,je){var Ee=H<12?"AM":"PM";return je?Ee.toLowerCase():Ee},he={YY:String(this.$y).slice(-2),YYYY:E.s(this.$y,4,"0"),M:T+1,MM:E.s(T+1,2,"0"),MMM:X(p.monthsShort,T,se,3),MMMM:X(se,T),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:X(p.weekdaysMin,this.$W,N,2),ddd:X(p.weekdaysShort,this.$W,N,3),dddd:N[this.$W],H:String(_),HH:E.s(_,2,"0"),h:xe(1),hh:xe(2),a:we(_,I,!0),A:we(_,I,!1),m:String(I),mm:E.s(I,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:w};return $.replace(A,function(H,ne){return ne||he[H]||w.replace(":","")})},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(d,v,p){var $,w=E.p(v),_=S(d),I=(_.utcOffset()-this.utcOffset())*i,T=this-_,N=E.m(this,_);return N=($={},$[m]=N/12,$[f]=N,$[g]=N/3,$[u]=(T-I)/6048e5,$[c]=(T-I)/864e5,$[o]=T/s,$[l]=T/i,$[a]=T/r,$)[w]||T,p?N:E.a(N)},h.daysInMonth=function(){return this.endOf(f).$D},h.$locale=function(){return O[this.$L]},h.locale=function(d,v){if(!d)return this.$L;var p=this.clone(),$=j(d,v,!0);return $&&(p.$L=$),p},h.clone=function(){return E.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},x}(),K=ie.prototype;return S.prototype=K,[["$ms",n],["$s",a],["$m",l],["$H",o],["$W",c],["$M",f],["$y",m],["$D",y]].forEach(function(x){K[x[1]]=function(h){return this.$g(h,x[0],x[1])}}),S.extend=function(x,h){return x.$i||(x(h,ie,S),x.$i=!0),S},S.locale=j,S.isDayjs=P,S.unix=function(x){return S(1e3*x)},S.en=O[L],S.Ls=O,S.p={},S})})(St);var hr=St.exports;const Ae=et(hr),_t=`
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
`,At=`
* {
  font-family: Roboto, sans-serif;
}

${fr}
${sr}
${nr}
${ar}

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
`;var dr=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,tt=(t,e,r,i)=>{for(var s=i>1?void 0:i?mr(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&dr(e,r,s),s};let Pe=class extends fe{handleDetailsToggle(t){this.dispatchEvent(new CustomEvent("details-toggled",{detail:t,bubbles:!0,composed:!0}))}render(){return k`
      <style>
        ${_t}
        ${!this.unstyled&&At}
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
    `}};tt([V({attribute:!1})],Pe.prototype,"filterObject",2);tt([V()],Pe.prototype,"unstyled",2);Pe=tt([oe("eox-itemfilter-expandcontainer")],Pe);var pr=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,Pt=(t,e,r,i)=>{for(var s=i>1?void 0:i?gr(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&pr(e,r,s),s};let Be=class extends fe{reset(){this.renderRoot.querySelectorAll("input[type='checkbox']").forEach(t=>{t instanceof HTMLInputElement&&(t.checked=!1)});for(const t in this.filterObject.state)this.filterObject.state[t]=!1;delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return k`
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
    `}};Pt([V()],Be.prototype,"filterObject",2);Be=Pt([oe("eox-itemfilter-multiselect")],Be);var yr="Expected a function",ht=0/0,vr="[object Symbol]",br=/^\s+|\s+$/g,xr=/^[-+]0x[0-9a-f]+$/i,wr=/^0b[01]+$/i,$r=/^0o[0-7]+$/i,Mr=parseInt,Or=typeof $e=="object"&&$e&&$e.Object===Object&&$e,Er=typeof self=="object"&&self&&self.Object===Object&&self,Sr=Or||Er||Function("return this")(),_r=Object.prototype,Ar=_r.toString,Pr=Math.max,Cr=Math.min,De=function(){return Sr.Date.now()};function Tr(t,e,r){var i,s,n,a,l,o,c=0,u=!1,f=!1,g=!0;if(typeof t!="function")throw new TypeError(yr);e=dt(e)||0,He(r)&&(u=!!r.leading,f="maxWait"in r,n=f?Pr(dt(r.maxWait)||0,e):n,g="trailing"in r?!!r.trailing:g);function m(O){var P=i,j=s;return i=s=void 0,c=O,a=t.apply(j,P),a}function y(O){return c=O,l=setTimeout(A,e),u?m(O):a}function M(O){var P=O-o,j=O-c,S=e-P;return f?Cr(S,n-j):S}function R(O){var P=O-o,j=O-c;return o===void 0||P>=e||P<0||f&&j>=n}function A(){var O=De();if(R(O))return F(O);l=setTimeout(A,M(O))}function F(O){return l=void 0,g&&i?m(O):(i=s=void 0,a)}function C(){l!==void 0&&clearTimeout(l),c=0,i=o=s=l=void 0}function D(){return l===void 0?a:F(De())}function L(){var O=De(),P=R(O);if(i=arguments,s=this,o=O,P){if(l===void 0)return y(o);if(f)return l=setTimeout(A,e),m(o)}return l===void 0&&(l=setTimeout(A,e)),a}return L.cancel=C,L.flush=D,L}function He(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function kr(t){return!!t&&typeof t=="object"}function Lr(t){return typeof t=="symbol"||kr(t)&&Ar.call(t)==vr}function dt(t){if(typeof t=="number")return t;if(Lr(t))return ht;if(He(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=He(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(br,"");var r=wr.test(t);return r||$r.test(t)?Mr(t.slice(2),r?2:8):xr.test(t)?ht:+t}var Ir=Tr;const Ct=et(Ir);var Rr=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,Tt=(t,e,r,i)=>{for(var s=i>1?void 0:i?jr(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Rr(e,r,s),s};let We=class extends fe{constructor(){super(...arguments),this.inputHandler=t=>{let e,r;[e,r]=t.detail.values,(e!==this.filterObject.state.min||r!=this.filterObject.state.max)&&([this.filterObject.state.min,this.filterObject.state.max]=[e,r],this.filterObject.dirty=!0),this.dispatchEvent(new CustomEvent("filter")),this.requestUpdate()},this.debouncedInputHandler=Ct(this.inputHandler,0,{leading:!0})}reset(){this.filterObject.state.min=this.filterObject.min,this.filterObject.state.max=this.filterObject.max,delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return k`
      <div class="range-before">
        ${this.filterObject.format==="date"?Ae.unix(this.filterObject.state.min):this.filterObject.state.min}
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
        ${this.filterObject.format==="date"?Ae.unix(this.filterObject.state.max):this.filterObject.state.max}
      </div>
    `}};Tt([V()],We.prototype,"filterObject",2);We=Tt([oe("eox-itemfilter-range")],We);var Fr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,kt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Dr(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Fr(e,r,s),s};let qe=class extends fe{reset(){this.renderRoot.querySelectorAll("input[type='radio']").forEach(t=>{t instanceof HTMLInputElement&&(t.checked=!1)});for(const t in this.filterObject.state)this.filterObject.state[t]=!1;delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return k`
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
    `}};kt([V()],qe.prototype,"filterObject",2);qe=kt([oe("eox-itemfilter-select")],qe);var B=63710088e-1,rt={centimeters:B*100,centimetres:B*100,degrees:B/111325,feet:B*3.28084,inches:B*39.37,kilometers:B/1e3,kilometres:B/1e3,meters:B,metres:B,miles:B/1609.344,millimeters:B*1e3,millimetres:B*1e3,nauticalmiles:B/1852,radians:1,yards:B*1.0936},Nr={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:1/1e3,kilometres:1/1e3,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/B,yards:1.0936133},Ge={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046};function G(t,e,r){r===void 0&&(r={});var i={type:"Feature"};return(r.id===0||r.id)&&(i.id=r.id),r.bbox&&(i.bbox=r.bbox),i.properties=e||{},i.geometry=t,i}function Br(t,e,r){switch(t){case"Point":return Q(e).geometry;case"LineString":return z(e).geometry;case"Polygon":return it(e).geometry;case"MultiPoint":return Lt(e).geometry;case"MultiLineString":return st(e).geometry;case"MultiPolygon":return It(e).geometry;default:throw new Error(t+" is invalid")}}function Q(t,e,r){if(r===void 0&&(r={}),!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Ce(t[0])||!Ce(t[1]))throw new Error("coordinates must contain numbers");var i={type:"Point",coordinates:t};return G(i,e,r)}function Hr(t,e,r){return r===void 0&&(r={}),ae(t.map(function(i){return Q(i,e)}),r)}function it(t,e,r){r===void 0&&(r={});for(var i=0,s=t;i<s.length;i++){var n=s[i];if(n.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var a=0;a<n[n.length-1].length;a++)if(n[n.length-1][a]!==n[0][a])throw new Error("First and last Position are not equivalent.")}var l={type:"Polygon",coordinates:t};return G(l,e,r)}function Wr(t,e,r){return r===void 0&&(r={}),ae(t.map(function(i){return it(i,e)}),r)}function z(t,e,r){if(r===void 0&&(r={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");var i={type:"LineString",coordinates:t};return G(i,e,r)}function qr(t,e,r){return r===void 0&&(r={}),ae(t.map(function(i){return z(i,e)}),r)}function ae(t,e){e===void 0&&(e={});var r={type:"FeatureCollection"};return e.id&&(r.id=e.id),e.bbox&&(r.bbox=e.bbox),r.features=t,r}function st(t,e,r){r===void 0&&(r={});var i={type:"MultiLineString",coordinates:t};return G(i,e,r)}function Lt(t,e,r){r===void 0&&(r={});var i={type:"MultiPoint",coordinates:t};return G(i,e,r)}function It(t,e,r){r===void 0&&(r={});var i={type:"MultiPolygon",coordinates:t};return G(i,e,r)}function Gr(t,e,r){r===void 0&&(r={});var i={type:"GeometryCollection",geometries:t};return G(i,e,r)}function Vr(t,e){if(e===void 0&&(e=0),e&&!(e>=0))throw new Error("precision must be a positive number");var r=Math.pow(10,e||0);return Math.round(t*r)/r}function Rt(t,e){e===void 0&&(e="kilometers");var r=rt[e];if(!r)throw new Error(e+" units is invalid");return t*r}function nt(t,e){e===void 0&&(e="kilometers");var r=rt[e];if(!r)throw new Error(e+" units is invalid");return t/r}function zr(t,e){return jt(nt(t,e))}function Yr(t){var e=t%360;return e<0&&(e+=360),e}function jt(t){var e=t%(2*Math.PI);return e*180/Math.PI}function Ur(t){var e=t%360;return e*Math.PI/180}function Qr(t,e,r){if(e===void 0&&(e="kilometers"),r===void 0&&(r="kilometers"),!(t>=0))throw new Error("length must be a positive number");return Rt(nt(t,e),r)}function Jr(t,e,r){if(e===void 0&&(e="meters"),r===void 0&&(r="kilometers"),!(t>=0))throw new Error("area must be a positive number");var i=Ge[e];if(!i)throw new Error("invalid original units");var s=Ge[r];if(!s)throw new Error("invalid final units");return t/i*s}function Ce(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}function at(t){return!!t&&t.constructor===Object}function Kr(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(t.length!==4&&t.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach(function(e){if(!Ce(e))throw new Error("bbox must only contain numbers")})}function Xr(t){if(!t)throw new Error("id is required");if(["string","number"].indexOf(typeof t)===-1)throw new Error("id must be a number or a string")}const Zr=Object.freeze(Object.defineProperty({__proto__:null,areaFactors:Ge,bearingToAzimuth:Yr,convertArea:Jr,convertLength:Qr,degreesToRadians:Ur,earthRadius:B,factors:rt,feature:G,featureCollection:ae,geometry:Br,geometryCollection:Gr,isNumber:Ce,isObject:at,lengthToDegrees:zr,lengthToRadians:nt,lineString:z,lineStrings:qr,multiLineString:st,multiPoint:Lt,multiPolygon:It,point:Q,points:Hr,polygon:it,polygons:Wr,radiansToDegrees:jt,radiansToLength:Rt,round:Vr,unitsFactors:Nr,validateBBox:Kr,validateId:Xr},Symbol.toStringTag,{value:"Module"}));function Ft(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return t.geometry.coordinates;if(t.type==="Point")return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function ge(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function ye(t){return t.type==="Feature"?t.geometry:t}function q(t,e,r){if(r===void 0&&(r={}),!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");var i=Ft(t),s=ye(e),n=s.type,a=e.bbox,l=s.coordinates;if(a&&ei(i,a)===!1)return!1;n==="Polygon"&&(l=[l]);for(var o=!1,c=0;c<l.length&&!o;c++)if(mt(i,l[c][0],r.ignoreBoundary)){for(var u=!1,f=1;f<l[c].length&&!u;)mt(i,l[c][f],!r.ignoreBoundary)&&(u=!0),f++;u||(o=!0)}return o}function mt(t,e,r){var i=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var s=0,n=e.length-1;s<e.length;n=s++){var a=e[s][0],l=e[s][1],o=e[n][0],c=e[n][1],u=t[1]*(a-o)+l*(o-t[0])+c*(t[0]-a)===0&&(a-t[0])*(o-t[0])<=0&&(l-t[1])*(c-t[1])<=0;if(u)return!r;var f=l>t[1]!=c>t[1]&&t[0]<(o-a)*(t[1]-l)/(c-l)+a;f&&(i=!i)}return i}function ei(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}function ve(t,e,r){if(t!==null)for(var i,s,n,a,l,o,c,u=0,f=0,g,m=t.type,y=m==="FeatureCollection",M=m==="Feature",R=y?t.features.length:1,A=0;A<R;A++){c=y?t.features[A].geometry:M?t.geometry:t,g=c?c.type==="GeometryCollection":!1,l=g?c.geometries.length:1;for(var F=0;F<l;F++){var C=0,D=0;if(a=g?c.geometries[F]:c,a!==null){o=a.coordinates;var L=a.type;switch(u=r&&(L==="Polygon"||L==="MultiPolygon")?1:0,L){case null:break;case"Point":if(e(o,f,A,C,D)===!1)return!1;f++,C++;break;case"LineString":case"MultiPoint":for(i=0;i<o.length;i++){if(e(o[i],f,A,C,D)===!1)return!1;f++,L==="MultiPoint"&&C++}L==="LineString"&&C++;break;case"Polygon":case"MultiLineString":for(i=0;i<o.length;i++){for(s=0;s<o[i].length-u;s++){if(e(o[i][s],f,A,C,D)===!1)return!1;f++}L==="MultiLineString"&&C++,L==="Polygon"&&D++}L==="Polygon"&&C++;break;case"MultiPolygon":for(i=0;i<o.length;i++){for(D=0,s=0;s<o[i].length;s++){for(n=0;n<o[i][s].length-u;n++){if(e(o[i][s][n],f,A,C,D)===!1)return!1;f++}D++}C++}break;case"GeometryCollection":for(i=0;i<a.geometries.length;i++)if(ve(a.geometries[i],e,r)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function ti(t,e,r,i){var s=r;return ve(t,function(n,a,l,o,c){a===0&&r===void 0?s=n:s=e(s,n,a,l,o,c)},i),s}function Dt(t,e){var r;switch(t.type){case"FeatureCollection":for(r=0;r<t.features.length&&e(t.features[r].properties,r)!==!1;r++);break;case"Feature":e(t.properties,0);break}}function ri(t,e,r){var i=r;return Dt(t,function(s,n){n===0&&r===void 0?i=s:i=e(i,s,n)}),i}function Te(t,e){if(t.type==="Feature")e(t,0);else if(t.type==="FeatureCollection")for(var r=0;r<t.features.length&&e(t.features[r],r)!==!1;r++);}function ii(t,e,r){var i=r;return Te(t,function(s,n){n===0&&r===void 0?i=s:i=e(i,s,n)}),i}function si(t){var e=[];return ve(t,function(r){e.push(r)}),e}function ot(t,e){var r,i,s,n,a,l,o,c,u,f,g=0,m=t.type==="FeatureCollection",y=t.type==="Feature",M=m?t.features.length:1;for(r=0;r<M;r++){for(l=m?t.features[r].geometry:y?t.geometry:t,c=m?t.features[r].properties:y?t.properties:{},u=m?t.features[r].bbox:y?t.bbox:void 0,f=m?t.features[r].id:y?t.id:void 0,o=l?l.type==="GeometryCollection":!1,a=o?l.geometries.length:1,s=0;s<a;s++){if(n=o?l.geometries[s]:l,n===null){if(e(null,g,c,u,f)===!1)return!1;continue}switch(n.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(n,g,c,u,f)===!1)return!1;break}case"GeometryCollection":{for(i=0;i<n.geometries.length;i++)if(e(n.geometries[i],g,c,u,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}g++}}function ni(t,e,r){var i=r;return ot(t,function(s,n,a,l,o){n===0&&r===void 0?i=s:i=e(i,s,n,a,l,o)}),i}function ee(t,e){ot(t,function(r,i,s,n,a){var l=r===null?null:r.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(G(r,s,{bbox:n,id:a}),i,0)===!1?!1:void 0}var o;switch(l){case"MultiPoint":o="Point";break;case"MultiLineString":o="LineString";break;case"MultiPolygon":o="Polygon";break}for(var c=0;c<r.coordinates.length;c++){var u=r.coordinates[c],f={type:o,coordinates:u};if(e(G(f,s),i,c)===!1)return!1}})}function ai(t,e,r){var i=r;return ee(t,function(s,n,a){n===0&&a===0&&r===void 0?i=s:i=e(i,s,n,a)}),i}function Nt(t,e){ee(t,function(r,i,s){var n=0;if(r.geometry){var a=r.geometry.type;if(!(a==="Point"||a==="MultiPoint")){var l,o=0,c=0,u=0;if(ve(r,function(f,g,m,y,M){if(l===void 0||i>o||y>c||M>u){l=f,o=i,c=y,u=M,n=0;return}var R=z([l,f],r.properties);if(e(R,i,s,M,n)===!1)return!1;n++,l=f})===!1)return!1}}})}function oi(t,e,r){var i=r,s=!1;return Nt(t,function(n,a,l,o,c){s===!1&&r===void 0?i=n:i=e(i,n,a,l,o,c),s=!0}),i}function Bt(t,e){if(!t)throw new Error("geojson is required");ee(t,function(r,i,s){if(r.geometry!==null){var n=r.geometry.type,a=r.geometry.coordinates;switch(n){case"LineString":if(e(r,i,s,0,0)===!1)return!1;break;case"Polygon":for(var l=0;l<a.length;l++)if(e(z(a[l],r.properties),i,s,l)===!1)return!1;break}}})}function li(t,e,r){var i=r;return Bt(t,function(s,n,a,l){n===0&&r===void 0?i=s:i=e(i,s,n,a,l)}),i}function ci(t,e){if(e=e||{},!at(e))throw new Error("options is invalid");var r=e.featureIndex||0,i=e.multiFeatureIndex||0,s=e.geometryIndex||0,n=e.segmentIndex||0,a=e.properties,l;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),a=a||t.features[r].properties,l=t.features[r].geometry;break;case"Feature":a=a||t.properties,l=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=t;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var o=l.coordinates;switch(l.type){case"Point":case"MultiPoint":return null;case"LineString":return n<0&&(n=o.length+n-1),z([o[n],o[n+1]],a,e);case"Polygon":return s<0&&(s=o.length+s),n<0&&(n=o[s].length+n-1),z([o[s][n],o[s][n+1]],a,e);case"MultiLineString":return i<0&&(i=o.length+i),n<0&&(n=o[i].length+n-1),z([o[i][n],o[i][n+1]],a,e);case"MultiPolygon":return i<0&&(i=o.length+i),s<0&&(s=o[i].length+s),n<0&&(n=o[i][s].length-n-1),z([o[i][s][n],o[i][s][n+1]],a,e)}throw new Error("geojson is invalid")}function ui(t,e){if(e=e||{},!at(e))throw new Error("options is invalid");var r=e.featureIndex||0,i=e.multiFeatureIndex||0,s=e.geometryIndex||0,n=e.coordIndex||0,a=e.properties,l;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),a=a||t.features[r].properties,l=t.features[r].geometry;break;case"Feature":a=a||t.properties,l=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=t;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var o=l.coordinates;switch(l.type){case"Point":return Q(o,a,e);case"MultiPoint":return i<0&&(i=o.length+i),Q(o[i],a,e);case"LineString":return n<0&&(n=o.length+n),Q(o[n],a,e);case"Polygon":return s<0&&(s=o.length+s),n<0&&(n=o[s].length+n),Q(o[s][n],a,e);case"MultiLineString":return i<0&&(i=o.length+i),n<0&&(n=o[i].length+n),Q(o[i][n],a,e);case"MultiPolygon":return i<0&&(i=o.length+i),s<0&&(s=o[i].length+s),n<0&&(n=o[i][s].length-n),Q(o[i][s][n],a,e)}throw new Error("geojson is invalid")}const fi=Object.freeze(Object.defineProperty({__proto__:null,coordAll:si,coordEach:ve,coordReduce:ti,featureEach:Te,featureReduce:ii,findPoint:ui,findSegment:ci,flattenEach:ee,flattenReduce:ai,geomEach:ot,geomReduce:ni,lineEach:Bt,lineReduce:li,propEach:Dt,propReduce:ri,segmentEach:Nt,segmentReduce:oi},Symbol.toStringTag,{value:"Module"}));function pt(t){if(!t)throw new Error("geojson is required");var e=[];return ee(t,function(r){hi(r,e)}),ae(e)}function hi(t,e){var r=[],i=t.geometry;if(i!==null){switch(i.type){case"Polygon":r=ge(i);break;case"LineString":r=[ge(i)]}r.forEach(function(s){var n=di(s,t.properties);n.forEach(function(a){a.id=e.length,e.push(a)})})}}function di(t,e){var r=[];return t.reduce(function(i,s){var n=z([i,s],e);return n.bbox=mi(i,s),r.push(n),s}),r}function mi(t,e){var r=t[0],i=t[1],s=e[0],n=e[1],a=r<s?r:s,l=i<n?i:n,o=r>s?r:s,c=i>n?i:n;return[a,l,o,c]}var lt={exports:{}};const pi=Re(cr),gi=Re(Zr),yi=Re(fi);function ue(t){var e=[1/0,1/0,-1/0,-1/0];return ve(t,function(r){e[0]>r[0]&&(e[0]=r[0]),e[1]>r[1]&&(e[1]=r[1]),e[2]<r[0]&&(e[2]=r[0]),e[3]<r[1]&&(e[3]=r[1])}),e}ue.default=ue;const vi=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"})),bi=Re(vi);var U=pi,Ht=gi,Wt=yi,me=bi.default,xi=Wt.featureEach;Wt.coordEach;Ht.polygon;var gt=Ht.featureCollection;function qt(t){var e=new U(t);return e.insert=function(r){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:me(r),U.prototype.insert.call(this,r)},e.load=function(r){var i=[];return Array.isArray(r)?r.forEach(function(s){if(s.type!=="Feature")throw new Error("invalid features");s.bbox=s.bbox?s.bbox:me(s),i.push(s)}):xi(r,function(s){if(s.type!=="Feature")throw new Error("invalid features");s.bbox=s.bbox?s.bbox:me(s),i.push(s)}),U.prototype.load.call(this,i)},e.remove=function(r,i){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:me(r),U.prototype.remove.call(this,r,i)},e.clear=function(){return U.prototype.clear.call(this)},e.search=function(r){var i=U.prototype.search.call(this,this.toBBox(r));return gt(i)},e.collides=function(r){return U.prototype.collides.call(this,this.toBBox(r))},e.all=function(){var r=U.prototype.all.call(this);return gt(r)},e.toJSON=function(){return U.prototype.toJSON.call(this)},e.fromJSON=function(r){return U.prototype.fromJSON.call(this,r)},e.toBBox=function(r){var i;if(r.bbox)i=r.bbox;else if(Array.isArray(r)&&r.length===4)i=r;else if(Array.isArray(r)&&r.length===6)i=[r[0],r[1],r[3],r[4]];else if(r.type==="Feature")i=me(r);else if(r.type==="FeatureCollection")i=me(r);else throw new Error("invalid geojson");return{minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}},e}lt.exports=qt;lt.exports.default=qt;var wi=lt.exports;const $i=et(wi);function ct(t,e){var r={},i=[];if(t.type==="LineString"&&(t=G(t)),e.type==="LineString"&&(e=G(e)),t.type==="Feature"&&e.type==="Feature"&&t.geometry!==null&&e.geometry!==null&&t.geometry.type==="LineString"&&e.geometry.type==="LineString"&&t.geometry.coordinates.length===2&&e.geometry.coordinates.length===2){var s=yt(t,e);return s&&i.push(s),ae(i)}var n=$i();return n.load(pt(e)),Te(pt(t),function(a){Te(n.search(a),function(l){var o=yt(a,l);if(o){var c=ge(o).join(",");r[c]||(r[c]=!0,i.push(o))}})}),ae(i)}function yt(t,e){var r=ge(t),i=ge(e);if(r.length!==2)throw new Error("<intersects> line1 must only contain 2 coordinates");if(i.length!==2)throw new Error("<intersects> line2 must only contain 2 coordinates");var s=r[0][0],n=r[0][1],a=r[1][0],l=r[1][1],o=i[0][0],c=i[0][1],u=i[1][0],f=i[1][1],g=(f-c)*(a-s)-(u-o)*(l-n),m=(u-o)*(n-c)-(f-c)*(s-o),y=(a-s)*(n-c)-(l-n)*(s-o);if(g===0)return null;var M=m/g,R=y/g;if(M>=0&&M<=1&&R>=0&&R<=1){var A=s+M*(a-s),F=n+M*(l-n);return Q([A,F])}return null}function Ve(t,e){e===void 0&&(e={});var r=ye(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),r.type){case"Polygon":return Mi(r,e);case"MultiPolygon":return Oi(r,e);default:throw new Error("invalid poly")}}function Mi(t,e){e===void 0&&(e={});var r=ye(t),i=r.coordinates,s=e.properties?e.properties:t.type==="Feature"?t.properties:{};return Gt(i,s)}function Oi(t,e){e===void 0&&(e={});var r=ye(t),i=r.coordinates,s=e.properties?e.properties:t.type==="Feature"?t.properties:{},n=[];return i.forEach(function(a){n.push(Gt(a,s))}),ae(n)}function Gt(t,e){return t.length>1?st(t,e):z(t[0],e)}function Ei(t,e){var r=!0;return ee(t,function(i){ee(e,function(s){if(r===!1)return!1;r=Si(i.geometry,s.geometry)})}),r}function Si(t,e){switch(t.type){case"Point":switch(e.type){case"Point":return!Ci(t.coordinates,e.coordinates);case"LineString":return!vt(e,t);case"Polygon":return!q(t,e)}break;case"LineString":switch(e.type){case"Point":return!vt(t,e);case"LineString":return!_i(t,e);case"Polygon":return!bt(e,t)}break;case"Polygon":switch(e.type){case"Point":return!q(e,t);case"LineString":return!bt(t,e);case"Polygon":return!Ai(e,t)}}return!1}function vt(t,e){for(var r=0;r<t.coordinates.length-1;r++)if(Pi(t.coordinates[r],t.coordinates[r+1],e.coordinates))return!0;return!1}function _i(t,e){var r=ct(t,e);return r.features.length>0}function bt(t,e){for(var r=0,i=e.coordinates;r<i.length;r++){var s=i[r];if(q(s,t))return!0}var n=ct(e,Ve(t));return n.features.length>0}function Ai(t,e){for(var r=0,i=t.coordinates[0];r<i.length;r++){var s=i[r];if(q(s,e))return!0}for(var n=0,a=e.coordinates[0];n<a.length;n++){var l=a[n];if(q(l,t))return!0}var o=ct(Ve(t),Ve(e));return o.features.length>0}function Pi(t,e,r){var i=r[0]-t[0],s=r[1]-t[1],n=e[0]-t[0],a=e[1]-t[1],l=i*a-s*n;return l!==0?!1:Math.abs(n)>=Math.abs(a)?n>0?t[0]<=r[0]&&r[0]<=e[0]:e[0]<=r[0]&&r[0]<=t[0]:a>0?t[1]<=r[1]&&r[1]<=e[1]:e[1]<=r[1]&&r[1]<=t[1]}function Ci(t,e){return t[0]===e[0]&&t[1]===e[1]}function Ti(t,e){var r=!1;return ee(t,function(i){ee(e,function(s){if(r===!0)return!0;r=!Ei(i.geometry,s.geometry)})}),r}function ke(t,e,r){r===void 0&&(r={});for(var i=Ft(t),s=ge(e),n=0;n<s.length-1;n++){var a=!1;if(r.ignoreEndVertices&&(n===0&&(a="start"),n===s.length-2&&(a="end"),n===0&&n+1===s.length-1&&(a="both")),ki(s[n],s[n+1],i,a,typeof r.epsilon>"u"?null:r.epsilon))return!0}return!1}function ki(t,e,r,i,s){var n=r[0],a=r[1],l=t[0],o=t[1],c=e[0],u=e[1],f=r[0]-l,g=r[1]-o,m=c-l,y=u-o,M=f*y-g*m;if(s!==null){if(Math.abs(M)>s)return!1}else if(M!==0)return!1;if(i){if(i==="start")return Math.abs(m)>=Math.abs(y)?m>0?l<n&&n<=c:c<=n&&n<l:y>0?o<a&&a<=u:u<=a&&a<o;if(i==="end")return Math.abs(m)>=Math.abs(y)?m>0?l<=n&&n<c:c<n&&n<=l:y>0?o<=a&&a<u:u<a&&a<=o;if(i==="both")return Math.abs(m)>=Math.abs(y)?m>0?l<n&&n<c:c<n&&n<l:y>0?o<a&&a<u:u<a&&a<o}else return Math.abs(m)>=Math.abs(y)?m>0?l<=n&&n<=c:c<=n&&n<=l:y>0?o<=a&&a<=u:u<=a&&a<=o;return!1}function Li(t,e){var r=ye(t),i=ye(e),s=r.type,n=i.type;switch(s){case"Point":switch(n){case"MultiPoint":return Ii(r,i);case"LineString":return ke(r,i,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return q(r,i,{ignoreBoundary:!0});default:throw new Error("feature2 "+n+" geometry not supported")}case"MultiPoint":switch(n){case"MultiPoint":return Ri(r,i);case"LineString":return ji(r,i);case"Polygon":case"MultiPolygon":return Fi(r,i);default:throw new Error("feature2 "+n+" geometry not supported")}case"LineString":switch(n){case"LineString":return Di(r,i);case"Polygon":case"MultiPolygon":return Ni(r,i);default:throw new Error("feature2 "+n+" geometry not supported")}case"Polygon":switch(n){case"Polygon":case"MultiPolygon":return Bi(r,i);default:throw new Error("feature2 "+n+" geometry not supported")}default:throw new Error("feature1 "+s+" geometry not supported")}}function Ii(t,e){var r,i=!1;for(r=0;r<e.coordinates.length;r++)if(zt(e.coordinates[r],t.coordinates)){i=!0;break}return i}function Ri(t,e){for(var r=0;r<t.coordinates.length;r++){for(var i=!1,s=0;s<e.coordinates.length;s++)zt(t.coordinates[r],e.coordinates[s])&&(i=!0);if(!i)return!1}return!0}function ji(t,e){for(var r=!1,i=0;i<t.coordinates.length;i++){if(!ke(t.coordinates[i],e))return!1;r||(r=ke(t.coordinates[i],e,{ignoreEndVertices:!0}))}return r}function Fi(t,e){for(var r=!0,i=!1,s=0;s<t.coordinates.length;s++){if(i=q(t.coordinates[1],e),!i){r=!1;break}i=q(t.coordinates[1],e,{ignoreBoundary:!0})}return r&&i}function Di(t,e){for(var r=0;r<t.coordinates.length;r++)if(!ke(t.coordinates[r],e))return!1;return!0}function Ni(t,e){var r=ue(e),i=ue(t);if(!Vt(r,i))return!1;for(var s=!1,n=0;n<t.coordinates.length-1;n++){if(!q(t.coordinates[n],e))return!1;if(s||(s=q(t.coordinates[n],e,{ignoreBoundary:!0})),!s){var a=Hi(t.coordinates[n],t.coordinates[n+1]);s=q(a,e,{ignoreBoundary:!0})}}return s}function Bi(t,e){var r=ue(t),i=ue(e);if(!Vt(i,r))return!1;for(var s=0;s<t.coordinates[0].length;s++)if(!q(t.coordinates[0][s],e))return!1;return!0}function Vt(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function zt(t,e){return t[0]===e[0]&&t[1]===e[1]}function Hi(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var Wi=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,Oe=(t,e,r,i)=>{for(var s=i>1?void 0:i?qi(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Wi(e,r,s),s};const Gi=(t,e)=>e?Ti(t,e):!0,Vi=(t,e)=>e?Li(t,e):!0;let ze=class extends fe{reset(){this.filterObject.state.geometry=void 0;const t=this.renderRoot.querySelector("eox-itemfilter-spatial-filter");delete this.filterObject.dirty,t.reset(),this.requestUpdate()}createRenderRoot(){return this}render(){var t;return k`
      <form style="display: inline">
      ${pe(["intersects","within"],e=>k`
          <label>
            <input
              type="radio"
              name="mode"
              .checked="${or(this.filterObject.state.mode===e)}"
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
    `}};Oe([V()],ze.prototype,"filterObject",2);ze=Oe([oe("eox-itemfilter-spatial")],ze);let Le=class extends fe{render(){return k`<eox-map part="map" style="height: 400px"></eox-map>`}firstUpdated(){this.setup()}setup(){const t=[{type:"Vector",id:"draw",source:{type:"Vector",...this.geometry&&{format:"GeoJSON"},...this.geometry&&{url:this.createFeatureUrl(this.geometry)}},zIndex:1},{type:"Tile",source:{type:"XYZ",url:"https://s2maps-tiles.eu/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}];this.eoxMap=this.renderRoot.querySelector("eox-map"),setTimeout(()=>{this.eoxMap.setLayers(t),this.eoxMap.addDraw("draw",{id:"drawInteraction",type:"Polygon"});const e=r=>{const i=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:r.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});this.dispatchEvent(i)};this.eoxMap.interactions.drawInteraction.on("drawend",r=>{e(r.feature),this.eoxMap.removeInteraction("drawInteraction")}),this.eoxMap.interactions.drawInteraction_modify.on("modifyend",r=>{e(r.features.getArray()[0])})})}createFeatureUrl(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}reset(){var e;const t=this.eoxMap.getLayerById("draw").getSource();((e=t.getFeatures())==null?void 0:e.length)>0&&(t.clear(),this.eoxMap.removeInteraction("drawInteraction_modify"),this.setup())}};Oe([V()],Le.prototype,"geometry",2);Oe([Me()],Le.prototype,"eoxMap",2);Le=Oe([oe("eox-itemfilter-spatial-filter")],Le);var zi=Object.defineProperty,Yi=Object.getOwnPropertyDescriptor,Yt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Yi(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&zi(e,r,s),s};let Ye=class extends fe{constructor(){super(...arguments),this.inputHandler=()=>{const t=this.renderRoot.querySelector("input[type='text']");this.filterObject.keys.forEach(e=>{this.filterObject.state[e]=t.value}),this.filterObject.dirty=!0,this.dispatchEvent(new CustomEvent("filter"))},this.debouncedInputHandler=Ct(this.inputHandler,500,{leading:!0})}reset(){const t=this.renderRoot.querySelector("input[type='text']");t.value="",this.filterObject.keys.forEach(e=>{this.filterObject.state[e]=void 0}),delete this.filterObject.dirty,this.requestUpdate()}createRenderRoot(){return this}render(){return k`
      <input
        type="text"
        placeholder="Type something..."
        data-cy="search"
        part="input-search"
        value="${Object.values(this.filterObject.state)[0]}"
        @input="${this.debouncedInputHandler}"
      />
    `}};Yt([V()],Ye.prototype,"filterObject",2);Ye=Yt([oe("eox-itemfilter-text")],Ye);function te(t){return Array.isArray?Array.isArray(t):Jt(t)==="[object Array]"}const Ui=1/0;function Qi(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Ui?"-0":e}function Ji(t){return t==null?"":Qi(t)}function J(t){return typeof t=="string"}function Ut(t){return typeof t=="number"}function Ki(t){return t===!0||t===!1||Xi(t)&&Jt(t)=="[object Boolean]"}function Qt(t){return typeof t=="object"}function Xi(t){return Qt(t)&&t!==null}function W(t){return t!=null}function Ne(t){return!t.trim().length}function Jt(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Zi="Incorrect 'index' type",es=t=>`Invalid value for key ${t}`,ts=t=>`Pattern length exceeds max of ${t}.`,rs=t=>`Missing ${t} property in key`,is=t=>`Property 'weight' in key '${t}' must be a positive integer`,xt=Object.prototype.hasOwnProperty;class ss{constructor(e){this._keys=[],this._keyMap={};let r=0;e.forEach(i=>{let s=Kt(i);r+=s.weight,this._keys.push(s),this._keyMap[s.id]=s,r+=s.weight}),this._keys.forEach(i=>{i.weight/=r})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Kt(t){let e=null,r=null,i=null,s=1,n=null;if(J(t)||te(t))i=t,e=wt(t),r=Ue(t);else{if(!xt.call(t,"name"))throw new Error(rs("name"));const a=t.name;if(i=a,xt.call(t,"weight")&&(s=t.weight,s<=0))throw new Error(is(a));e=wt(a),r=Ue(a),n=t.getFn}return{path:e,id:r,weight:s,src:i,getFn:n}}function wt(t){return te(t)?t:t.split(".")}function Ue(t){return te(t)?t.join("."):t}function ns(t,e){let r=[],i=!1;const s=(n,a,l)=>{if(W(n))if(!a[l])r.push(n);else{let o=a[l];const c=n[o];if(!W(c))return;if(l===a.length-1&&(J(c)||Ut(c)||Ki(c)))r.push(Ji(c));else if(te(c)){i=!0;for(let u=0,f=c.length;u<f;u+=1)s(c[u],a,l+1)}else a.length&&s(c,a,l+1)}};return s(t,J(e)?e.split("."):e,0),i?r:r[0]}const as={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},os={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},ls={location:0,threshold:.6,distance:100},cs={useExtendedSearch:!1,getFn:ns,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var b={...os,...as,...ls,...cs};const us=/[^ ]+/g;function fs(t=1,e=3){const r=new Map,i=Math.pow(10,e);return{get(s){const n=s.match(us).length;if(r.has(n))return r.get(n);const a=1/Math.pow(n,.5*t),l=parseFloat(Math.round(a*i)/i);return r.set(n,l),l},clear(){r.clear()}}}class ut{constructor({getFn:e=b.getFn,fieldNormWeight:r=b.fieldNormWeight}={}){this.norm=fs(r,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((r,i)=>{this._keysMap[r.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,J(this.docs[0])?this.docs.forEach((e,r)=>{this._addString(e,r)}):this.docs.forEach((e,r)=>{this._addObject(e,r)}),this.norm.clear())}add(e){const r=this.size();J(e)?this._addString(e,r):this._addObject(e,r)}removeAt(e){this.records.splice(e,1);for(let r=e,i=this.size();r<i;r+=1)this.records[r].i-=1}getValueForItemAtKeyId(e,r){return e[this._keysMap[r]]}size(){return this.records.length}_addString(e,r){if(!W(e)||Ne(e))return;let i={v:e,i:r,n:this.norm.get(e)};this.records.push(i)}_addObject(e,r){let i={i:r,$:{}};this.keys.forEach((s,n)=>{let a=s.getFn?s.getFn(e):this.getFn(e,s.path);if(W(a)){if(te(a)){let l=[];const o=[{nestedArrIndex:-1,value:a}];for(;o.length;){const{nestedArrIndex:c,value:u}=o.pop();if(W(u))if(J(u)&&!Ne(u)){let f={v:u,i:c,n:this.norm.get(u)};l.push(f)}else te(u)&&u.forEach((f,g)=>{o.push({nestedArrIndex:g,value:f})})}i.$[n]=l}else if(J(a)&&!Ne(a)){let l={v:a,n:this.norm.get(a)};i.$[n]=l}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function Xt(t,e,{getFn:r=b.getFn,fieldNormWeight:i=b.fieldNormWeight}={}){const s=new ut({getFn:r,fieldNormWeight:i});return s.setKeys(t.map(Kt)),s.setSources(e),s.create(),s}function hs(t,{getFn:e=b.getFn,fieldNormWeight:r=b.fieldNormWeight}={}){const{keys:i,records:s}=t,n=new ut({getFn:e,fieldNormWeight:r});return n.setKeys(i),n.setIndexRecords(s),n}function _e(t,{errors:e=0,currentLocation:r=0,expectedLocation:i=0,distance:s=b.distance,ignoreLocation:n=b.ignoreLocation}={}){const a=e/t.length;if(n)return a;const l=Math.abs(i-r);return s?a+l/s:l?1:a}function ds(t=[],e=b.minMatchCharLength){let r=[],i=-1,s=-1,n=0;for(let a=t.length;n<a;n+=1){let l=t[n];l&&i===-1?i=n:!l&&i!==-1&&(s=n-1,s-i+1>=e&&r.push([i,s]),i=-1)}return t[n-1]&&n-i>=e&&r.push([i,n-1]),r}const ce=32;function ms(t,e,r,{location:i=b.location,distance:s=b.distance,threshold:n=b.threshold,findAllMatches:a=b.findAllMatches,minMatchCharLength:l=b.minMatchCharLength,includeMatches:o=b.includeMatches,ignoreLocation:c=b.ignoreLocation}={}){if(e.length>ce)throw new Error(ts(ce));const u=e.length,f=t.length,g=Math.max(0,Math.min(i,f));let m=n,y=g;const M=l>1||o,R=M?Array(f):[];let A;for(;(A=t.indexOf(e,y))>-1;){let P=_e(e,{currentLocation:A,expectedLocation:g,distance:s,ignoreLocation:c});if(m=Math.min(P,m),y=A+u,M){let j=0;for(;j<u;)R[A+j]=1,j+=1}}y=-1;let F=[],C=1,D=u+f;const L=1<<u-1;for(let P=0;P<u;P+=1){let j=0,S=D;for(;j<S;)_e(e,{errors:P,currentLocation:g+S,expectedLocation:g,distance:s,ignoreLocation:c})<=m?j=S:D=S,S=Math.floor((D-j)/2+j);D=S;let E=Math.max(1,g-S+1),ie=a?f:Math.min(g+S,f)+u,K=Array(ie+2);K[ie+1]=(1<<P)-1;for(let h=ie;h>=E;h-=1){let d=h-1,v=r[t.charAt(d)];if(M&&(R[d]=+!!v),K[h]=(K[h+1]<<1|1)&v,P&&(K[h]|=(F[h+1]|F[h])<<1|1|F[h+1]),K[h]&L&&(C=_e(e,{errors:P,currentLocation:d,expectedLocation:g,distance:s,ignoreLocation:c}),C<=m)){if(m=C,y=d,y<=g)break;E=Math.max(1,2*g-y)}}if(_e(e,{errors:P+1,currentLocation:g,expectedLocation:g,distance:s,ignoreLocation:c})>m)break;F=K}const O={isMatch:y>=0,score:Math.max(.001,C)};if(M){const P=ds(R,l);P.length?o&&(O.indices=P):O.isMatch=!1}return O}function ps(t){let e={};for(let r=0,i=t.length;r<i;r+=1){const s=t.charAt(r);e[s]=(e[s]||0)|1<<i-r-1}return e}class Zt{constructor(e,{location:r=b.location,threshold:i=b.threshold,distance:s=b.distance,includeMatches:n=b.includeMatches,findAllMatches:a=b.findAllMatches,minMatchCharLength:l=b.minMatchCharLength,isCaseSensitive:o=b.isCaseSensitive,ignoreLocation:c=b.ignoreLocation}={}){if(this.options={location:r,threshold:i,distance:s,includeMatches:n,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:o,ignoreLocation:c},this.pattern=o?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(g,m)=>{this.chunks.push({pattern:g,alphabet:ps(g),startIndex:m})},f=this.pattern.length;if(f>ce){let g=0;const m=f%ce,y=f-m;for(;g<y;)u(this.pattern.substr(g,ce),g),g+=ce;if(m){const M=f-ce;u(this.pattern.substr(M),M)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:r,includeMatches:i}=this.options;if(r||(e=e.toLowerCase()),this.pattern===e){let y={isMatch:!0,score:0};return i&&(y.indices=[[0,e.length-1]]),y}const{location:s,distance:n,threshold:a,findAllMatches:l,minMatchCharLength:o,ignoreLocation:c}=this.options;let u=[],f=0,g=!1;this.chunks.forEach(({pattern:y,alphabet:M,startIndex:R})=>{const{isMatch:A,score:F,indices:C}=ms(e,y,M,{location:s+R,distance:n,threshold:a,findAllMatches:l,minMatchCharLength:o,includeMatches:i,ignoreLocation:c});A&&(g=!0),f+=F,A&&C&&(u=[...u,...C])});let m={isMatch:g,score:g?f/this.chunks.length:1};return g&&i&&(m.indices=u),m}}class le{constructor(e){this.pattern=e}static isMultiMatch(e){return $t(e,this.multiRegex)}static isSingleMatch(e){return $t(e,this.singleRegex)}search(){}}function $t(t,e){const r=t.match(e);return r?r[1]:null}class gs extends le{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const r=e===this.pattern;return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class ys extends le{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const i=e.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,e.length-1]}}}class vs extends le{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const r=e.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class bs extends le{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const r=!e.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class xs extends le{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const r=e.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ws extends le{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const r=!e.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class er extends le{constructor(e,{location:r=b.location,threshold:i=b.threshold,distance:s=b.distance,includeMatches:n=b.includeMatches,findAllMatches:a=b.findAllMatches,minMatchCharLength:l=b.minMatchCharLength,isCaseSensitive:o=b.isCaseSensitive,ignoreLocation:c=b.ignoreLocation}={}){super(e),this._bitapSearch=new Zt(e,{location:r,threshold:i,distance:s,includeMatches:n,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:o,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class tr extends le{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let r=0,i;const s=[],n=this.pattern.length;for(;(i=e.indexOf(this.pattern,r))>-1;)r=i+n,s.push([i,r-1]);const a=!!s.length;return{isMatch:a,score:a?0:1,indices:s}}}const Qe=[gs,tr,vs,bs,ws,xs,ys,er],Mt=Qe.length,$s=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ms="|";function Os(t,e={}){return t.split(Ms).map(r=>{let i=r.trim().split($s).filter(n=>n&&!!n.trim()),s=[];for(let n=0,a=i.length;n<a;n+=1){const l=i[n];let o=!1,c=-1;for(;!o&&++c<Mt;){const u=Qe[c];let f=u.isMultiMatch(l);f&&(s.push(new u(f,e)),o=!0)}if(!o)for(c=-1;++c<Mt;){const u=Qe[c];let f=u.isSingleMatch(l);if(f){s.push(new u(f,e));break}}}return s})}const Es=new Set([er.type,tr.type]);class Ss{constructor(e,{isCaseSensitive:r=b.isCaseSensitive,includeMatches:i=b.includeMatches,minMatchCharLength:s=b.minMatchCharLength,ignoreLocation:n=b.ignoreLocation,findAllMatches:a=b.findAllMatches,location:l=b.location,threshold:o=b.threshold,distance:c=b.distance}={}){this.query=null,this.options={isCaseSensitive:r,includeMatches:i,minMatchCharLength:s,findAllMatches:a,ignoreLocation:n,location:l,threshold:o,distance:c},this.pattern=r?e:e.toLowerCase(),this.query=Os(this.pattern,this.options)}static condition(e,r){return r.useExtendedSearch}searchIn(e){const r=this.query;if(!r)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:s}=this.options;e=s?e:e.toLowerCase();let n=0,a=[],l=0;for(let o=0,c=r.length;o<c;o+=1){const u=r[o];a.length=0,n=0;for(let f=0,g=u.length;f<g;f+=1){const m=u[f],{isMatch:y,indices:M,score:R}=m.search(e);if(y){if(n+=1,l+=R,i){const A=m.constructor.type;Es.has(A)?a=[...a,...M]:a.push(M)}}else{l=0,n=0,a.length=0;break}}if(n){let f={isMatch:!0,score:l/n};return i&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const Je=[];function _s(...t){Je.push(...t)}function Ke(t,e){for(let r=0,i=Je.length;r<i;r+=1){let s=Je[r];if(s.condition(t,e))return new s(t,e)}return new Zt(t,e)}const Ie={AND:"$and",OR:"$or"},Xe={PATH:"$path",PATTERN:"$val"},Ze=t=>!!(t[Ie.AND]||t[Ie.OR]),As=t=>!!t[Xe.PATH],Ps=t=>!te(t)&&Qt(t)&&!Ze(t),Ot=t=>({[Ie.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function rr(t,e,{auto:r=!0}={}){const i=s=>{let n=Object.keys(s);const a=As(s);if(!a&&n.length>1&&!Ze(s))return i(Ot(s));if(Ps(s)){const o=a?s[Xe.PATH]:n[0],c=a?s[Xe.PATTERN]:s[o];if(!J(c))throw new Error(es(o));const u={keyId:Ue(o),pattern:c};return r&&(u.searcher=Ke(c,e)),u}let l={children:[],operator:n[0]};return n.forEach(o=>{const c=s[o];te(c)&&c.forEach(u=>{l.children.push(i(u))})}),l};return Ze(t)||(t=Ot(t)),i(t)}function Cs(t,{ignoreFieldNorm:e=b.ignoreFieldNorm}){t.forEach(r=>{let i=1;r.matches.forEach(({key:s,norm:n,score:a})=>{const l=s?s.weight:null;i*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:n))}),r.score=i})}function Ts(t,e){const r=t.matches;e.matches=[],W(r)&&r.forEach(i=>{if(!W(i.indices)||!i.indices.length)return;const{indices:s,value:n}=i;let a={indices:s,value:n};i.key&&(a.key=i.key.src),i.idx>-1&&(a.refIndex=i.idx),e.matches.push(a)})}function ks(t,e){e.score=t.score}function Ls(t,e,{includeMatches:r=b.includeMatches,includeScore:i=b.includeScore}={}){const s=[];return r&&s.push(Ts),i&&s.push(ks),t.map(n=>{const{idx:a}=n,l={item:e[a],refIndex:a};return s.length&&s.forEach(o=>{o(n,l)}),l})}class be{constructor(e,r={},i){this.options={...b,...r},this.options.useExtendedSearch,this._keyStore=new ss(this.options.keys),this.setCollection(e,i)}setCollection(e,r){if(this._docs=e,r&&!(r instanceof ut))throw new Error(Zi);this._myIndex=r||Xt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){W(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const r=[];for(let i=0,s=this._docs.length;i<s;i+=1){const n=this._docs[i];e(n,i)&&(this.removeAt(i),i-=1,s-=1,r.push(n))}return r}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:r=-1}={}){const{includeMatches:i,includeScore:s,shouldSort:n,sortFn:a,ignoreFieldNorm:l}=this.options;let o=J(e)?J(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Cs(o,{ignoreFieldNorm:l}),n&&o.sort(a),Ut(r)&&r>-1&&(o=o.slice(0,r)),Ls(o,this._docs,{includeMatches:i,includeScore:s})}_searchStringList(e){const r=Ke(e,this.options),{records:i}=this._myIndex,s=[];return i.forEach(({v:n,i:a,n:l})=>{if(!W(n))return;const{isMatch:o,score:c,indices:u}=r.searchIn(n);o&&s.push({item:n,idx:a,matches:[{score:c,value:n,norm:l,indices:u}]})}),s}_searchLogical(e){const r=rr(e,this.options),i=(l,o,c)=>{if(!l.children){const{keyId:f,searcher:g}=l,m=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(o,f),searcher:g});return m&&m.length?[{idx:c,item:o,matches:m}]:[]}const u=[];for(let f=0,g=l.children.length;f<g;f+=1){const m=l.children[f],y=i(m,o,c);if(y.length)u.push(...y);else if(l.operator===Ie.AND)return[]}return u},s=this._myIndex.records,n={},a=[];return s.forEach(({$:l,i:o})=>{if(W(l)){let c=i(r,l,o);c.length&&(n[o]||(n[o]={idx:o,item:l,matches:[]},a.push(n[o])),c.forEach(({matches:u})=>{n[o].matches.push(...u)}))}}),a}_searchObjectList(e){const r=Ke(e,this.options),{keys:i,records:s}=this._myIndex,n=[];return s.forEach(({$:a,i:l})=>{if(!W(a))return;let o=[];i.forEach((c,u)=>{o.push(...this._findMatches({key:c,value:a[u],searcher:r}))}),o.length&&n.push({idx:l,item:a,matches:o})}),n}_findMatches({key:e,value:r,searcher:i}){if(!W(r))return[];let s=[];if(te(r))r.forEach(({v:n,i:a,n:l})=>{if(!W(n))return;const{isMatch:o,score:c,indices:u}=i.searchIn(n);o&&s.push({score:c,key:e,value:n,idx:a,norm:l,indices:u})});else{const{v:n,n:a}=r,{isMatch:l,score:o,indices:c}=i.searchIn(n);l&&s.push({score:o,key:e,value:n,norm:a,indices:c})}return s}}be.version="6.6.2";be.createIndex=Xt;be.parseIndex=hs;be.config=b;be.parseQuery=rr;_s(Ss);const Is=(t,e="highlight",r="title")=>{const i=(n,a,l)=>{const o=a.split(".");let c;for(c=0;c<o.length-1;c++)n=n[o[c]];n[o[c]]=l},s=(n,a=[])=>{let l="",o=0;return a.forEach(c=>{const u=c[1]+1;l+=[n.substring(o,c[0]),`<mark class="${e}">`,n.substring(c[0],u),"</mark>"].join(""),o=u}),l+=n.substring(o),l};return t.filter(({matches:n})=>n&&n.length).map(({item:n,matches:a})=>{const l={...n};return a.forEach(o=>{o.key===r&&i(l,o.key,s(o.value,o.indices))}),l})};let ir;const Rs=(t,e)=>{ir=new be(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},js=async(t,e,r)=>{const i=Object.entries(e).filter(([l,o])=>o.type==="text"||o.type==="select"||o.type==="multiselect").reduce((l,[o,c])=>{const u="$or",f=[],g=(m,y)=>{const M={};c.type==="text"?M[m]=`${y}`:M[o]=`="${m}"`,f.push(M)};return Object.entries(c.state).filter(([m,y])=>y).forEach(([m,y])=>g(m,y)),f.length>0&&l.push({[u]:f}),l},[]);let s;if(!(i.length>0)&&r.matchAllWhenEmpty!==!1)s=t;else{const l={$and:[...i]},o=ir.search(l);s=r.enableHighlighting?Is(o,"highlight",r.titleProperty):o.map(c=>c.item)}const n=Object.entries(e).filter(([l,o])=>o.type==="range").reduce((l,[o,c])=>(l[o]={min:c.state.min,max:c.state.max,format:c.format},l),{});if(Object.keys(n).length>0){const l=[];for(let o=0;o<s.length;o++){const c={};for(const[u,f]of Object.entries(n)){const g=m=>f.format==="date"?Ae(m).unix():m;s[o].hasOwnProperty(u)?Array.isArray(s[o][u])?c[u]=n[u].min<=g(s[o][u][1])&&g(s[o][u][0])<=n[u].max:g(s[o][u])>=n[u].min&&g(s[o][u])<=n[u].max?c[u]=!0:c[u]=!1:c[u]=!0}Object.values(c).every(u=>!!u)&&l.push(s[o])}s=[...l]}const a=Object.entries(e).filter(([l,o])=>o.type==="spatial").reduce((l,[o,c])=>(l[o]={geometry:c.state.geometry,mode:c.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let o=0;o<s.length;o++){const c={};for(const u of Object.keys(a)){const f=a[u].mode||"within";s[o].hasOwnProperty(u)&&(f==="within"?Vi(s[o][u],a[u].geometry):Gi(s[o][u],a[u].geometry))?c[u]=!0:c[u]=!1}Object.values(c).every(u=>!!u)&&l.push(s[o])}s=[...l]}return s},Fs=async(t,e,r)=>(await(await fetch(`${r.externalFilter(t,e)}`)).json()).features;var Ds=Object.defineProperty,Ns=Object.getOwnPropertyDescriptor,re=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ns(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Ds(e,r,s),s};class Et{constructor(){this.aggregateResults=void 0,this.enableHighlighting=!1,this.filterProperties=[],this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.onFilter=()=>{},this.onSelect=()=>{},this.showResults=!0,this.titleProperty="title",this.expandMultipleFilters=!0,this.expandMultipleResults=!0}}let Y=class extends ur{constructor(){super(...arguments),this._resultAggregation=[],this.filters={},this.items=[],this._config=new Et,this.apply=t=>{this.items=t.map((r,i)=>({id:`item-${i}`,...r})),this._config.filterProperties.length&&this._config.filterProperties.forEach(r=>{const i={},s=n=>r.format==="date"?Ae(n).unix():parseInt(n);this.items.forEach(n=>{if(r.type==="range"){if(Array.isArray(n[r.key])){const a=[s(n[r.key][0]),s(n[r.key][1])];i.min=i.min!==void 0?Math.min(i.min,a[0]):a[0],i.max=i.max!==void 0?Math.max(i.max,a[1]):a[1]}else{const a=s(n[r.key]);i.min=i.min!==void 0?Math.min(i.min,a):a,i.max=i.max!==void 0?Math.max(i.max,a):a}return}Array.isArray(n[r.key])?n[r.key].forEach(a=>{i[a]=void 0}):r.type==="spatial"?(i.geometry=void 0,i.mode=r.mode||"intersects"):i[n[r.key]]=void 0}),this.filters[r.key||r.keys.join("|")]={...r,type:r.type||"multiselect",state:{...i,...r.state},...r.state&&{dirty:!0},...r.type==="range"&&{min:i.min,max:i.max,format:r.format}}}),this._config.matchAllWhenEmpty!==!1&&(this.results=this.sortResults(this.items),this.requestUpdate()),this._config.aggregateResults&&(this._resultAggregation=[...new Set(this.items.reduce((r,i)=>r.concat(i[this._config.aggregateResults]),[]))].sort((r,i)=>r.localeCompare(i)));const e=[];Object.values(this.filters).forEach(r=>{r.type==="text"?r.keys.forEach(i=>{e.includes(i)||e.push(i)}):(r.type==="select"||r.type==="multiselect")&&(e.includes(r.key)||e.push(r.key))}),Rs(this.items,{keys:e,...this._config.fuseConfig}),this.search()}}set config(t){const e=this._config;this._config={...new Et,...t},this.requestUpdate("config",e)}get config(){return this._config}async search(){let t;this.config.externalFilter?t=await Fs(this.items,this.filters,this._config):t=await js(this.items,this.filters,this._config),this.results=this.sortResults(t),this._config.onFilter(this.results,this.filters)}aggregateResults(t,e){return t.filter(r=>{const i=r[this._config.aggregateResults];let s;return this.filters[this._config.aggregateResults]&&(s=Object.keys(this.filters[this._config.aggregateResults]).filter(a=>this.filters[this._config.aggregateResults].state[a])),(s!=null&&s.length?s.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}sortResults(t){return[...t].sort((e,r)=>e[this._config.titleProperty].localeCompare(r[this._config.titleProperty]))}resetFilters(){this.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{t.reset()}),this.search()}toggleAccordion(t){let e;if(t.detail?e=t.detail.target:e=t.target,e.classList.contains("details-filter")){if(!e.open||this.config.expandMultipleFilters)return;this.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const i=r.shadowRoot.querySelector(".details-filter");i&&i!==e&&i.removeAttribute("open")})}else{if(!e.open||this.config.expandMultipleResults)return;this.shadowRoot.querySelectorAll("details").forEach(r=>{r!==e&&r.removeAttribute("open")})}}render(){return k`
      <style>
        ${_t}
        ${!this.unstyled&&At}
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
                ${pe(Object.values(this.filters),t=>Fe`
                  <li>
                    ${t.featured?Fe`
                          <eox-itemfilter-${Se(t.type)}
                            slot="filter"
                            data-type="filter"
                            .filterObject=${t}
                            @filter="${()=>this.search()}"
                          ></eox-itemfilter-${Se(t.type)}>
                        `:Fe`
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
                            ${lr(this.aggregateResults(this.results,t),e=>e.id,e=>{var r,i;return k`
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
                                          >${ft(e[this._config.titleProperty])}</span
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
                                    >${ft(t[this._config.titleProperty])}</span
                                  >
                                `)}
                            </label>
                          </li>`)}
                </ul>
              </div>
            </section>
          `)}
      </form>
    `}};re([Me()],Y.prototype,"filters",2);re([Me()],Y.prototype,"items",2);re([Me()],Y.prototype,"results",2);re([Me()],Y.prototype,"selectedResult",2);re([V({attribute:!1})],Y.prototype,"config",1);re([V()],Y.prototype,"apply",2);re([V({attribute:!1})],Y.prototype,"styleOverride",2);re([V({type:Boolean})],Y.prototype,"unstyled",2);Y=re([oe("eox-itemfilter")],Y);const Bs=[{archived:!1,code:"E10a2",description:"Actively managed total area from Sentinel-2 data",indicator:"Actively managed total area from Sentinel-2 data",themes:["agriculture"],title:"White Asparagus area [%]",name:"Actively managed total area from Sentinel-2 data",year:2e3,likes:4,years:[2e3,2e3],timestamp:"2023-06-14T13:56:38+00:00",datetime:["2023-06-14T10:56:38+00:00","2023-06-14T22:56:38+00:00"],bbox:[-90,60,-20,82],geometry:{type:"Polygon",coordinates:[[[-90,60],[-20,60],[-20,82],[-90,82]]]}},{archived:!1,code:"E10a9",description:"Agricultural Workers",indicator:"Agricultural Workers",themes:["agriculture"],title:"Workers availability [nr]",name:"Agricultural Workers",year:2020,likes:46,years:[2007,2020],timestamp:"2023-06-13T13:56:38+00:00",datetime:["2023-06-13T10:56:38+00:00","2023-06-13T22:56:38+00:00"],bbox:[0,0,10,10],geometry:{type:"Polygon",coordinates:[[[0,0],[10,0],[10,10],[0,10]]]}},{archived:!1,code:"N1",description:"Air Quality",indicator:"Air Quality",themes:["air"],title:"Sea ice freeboard",name:"Sea ice freeboard",year:2023,likes:34,years:[2008,2023],timestamp:"2023-06-12T13:56:38+00:00",datetime:["2023-06-12T10:56:38+00:00","2023-06-12T22:56:38+00:00"],bbox:[-180,-80,180,-61],geometry:{type:"Polygon",coordinates:[[[-180,-80],[180,-80],[180,-61],[-180,-61]]]}},{archived:!1,code:"E13o",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (all) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2022,likes:177,years:[2021,2022],timestamp:"2023-06-11T13:56:38+00:00",datetime:["2023-06-11T10:56:38+00:00","2023-06-11T22:56:38+00:00"]},{archived:!1,code:"E13p",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (cargo) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2016,likes:0,years:[2005,2016],timestamp:"2023-06-10T13:56:38+00:00",datetime:["2023-06-10T10:56:38+00:00","2023-06-10T22:56:38+00:00"]},{archived:!1,code:"E13q",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (tanker) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2017,likes:0,years:[2006,2017],timestamp:"2023-06-09T13:56:38+00:00",datetime:["2023-06-09T10:56:38+00:00","2023-06-09T22:56:38+00:00"]},{archived:!1,code:"E13r",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (others) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2003,likes:2,years:[2001,2003],timestamp:"2023-06-08T13:56:38+00:00",datetime:["2023-06-08T10:56:38+00:00","2023-06-08T22:56:38+00:00"]},{archived:!1,code:"C1",description:"Boat traffic - NO2 level",indicator:"Boat traffic - NO2 level",themes:["economy","air"],title:"Ships - NO2 Correlation",indicatorOverwrite:"Ports and Shipping - impact on air quality",name:"Boat traffic - NO2 level",year:2020,likes:65,years:[2015,2020],timestamp:"2023-06-07T13:56:38+00:00",datetime:["2023-06-07T10:56:38+00:00","2023-06-07T22:56:38+00:00"]},{archived:!1,code:"CDS1",description:"C3S Data",indicator:"C3S Data",themes:["air"],title:"Temperature",name:"C3S Data",year:2021,likes:34,years:[2021,2021],timestamp:"2023-06-06T13:56:38+00:00",datetime:["2023-06-06T10:56:38+00:00","2023-06-06T22:56:38+00:00"]},{archived:!1,code:"N1a",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level PM2.5 (model)",name:"CAMS Air Quality",year:2023,likes:88,years:[2e3,2023],timestamp:"2023-06-05T13:56:38+00:00",datetime:["2023-06-05T10:56:38+00:00","2023-06-05T22:56:38+00:00"]},{archived:!1,code:"N1b",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level NO2 (model)",name:"CAMS Air Quality",year:2022,likes:77,years:[2019,2022],timestamp:"2023-06-04T13:56:38+00:00",datetime:["2023-06-04T10:56:38+00:00","2023-06-04T22:56:38+00:00"]},{archived:!1,code:"N1c",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level PM10 (model)",name:"CAMS Air Quality",year:2018,likes:23,years:[2014,2018],timestamp:"2023-06-03T13:56:38+00:00",datetime:["2023-06-03T10:56:38+00:00","2023-06-03T22:56:38+00:00"]},{archived:!1,code:"N1d",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level O3 (model)",name:"CAMS Air Quality",year:2018,likes:56,years:[2017,2018],timestamp:"2023-06-02T13:56:38+00:00",datetime:["2023-06-02T10:56:38+00:00","2023-06-02T22:56:38+00:00"]},{archived:!1,code:"E13e",description:"Cargo ships in port based on AIS data",indicator:"Cargo ships in port based on AIS data",themes:["economy"],title:"Cargo Ships [nr]",name:"Cargo ships in port based on AIS data",year:2019,likes:11,years:[2018,2019],timestamp:"2023-06-01T13:56:38+00:00",datetime:["2023-06-01T10:56:38+00:00","2023-06-01T22:56:38+00:00"]},{archived:!1,code:"E13n",description:"Changes in traffic based on mobile data",indicator:"Changes in traffic based on mobile data",themes:["economy"],title:"Trucks transiting ports [%]",name:"Changes in traffic based on mobile data",year:2017,likes:8,years:[2015,2017],timestamp:"2023-05-29T13:56:38+00:00",datetime:["2023-05-29T10:56:38+00:00","2023-05-29T22:56:38+00:00"]},{archived:!1,code:"N3c",description:"CMEMS product",indicator:"CMEMS product",themes:["water"],title:"CHL-a concentration (map, 1km)",name:"CMEMS product",year:2015,likes:37,years:[2014,2015],timestamp:"2023-05-28T13:56:38+00:00",datetime:["2023-05-28T10:56:38+00:00","2023-05-28T22:56:38+00:00"]},{archived:!1,code:"CV",description:"Covid-19 cases",indicator:"Covid-19 cases",themes:["health"],title:"Covid-19 cases",name:"Covid-19 cases",year:2013,likes:4,years:[2001,2013],timestamp:"2023-05-27T13:56:38+00:00",datetime:["2023-05-27T10:56:38+00:00","2023-05-27T22:56:38+00:00"]},{archived:!1,code:"OW",description:"Covid-19 vaccinations",indicator:"Covid-19 vaccinations",themes:["health"],title:"Covid-19 vaccinations",name:"Covid-19 vaccinations",year:2016,likes:39,years:[2015,2016],timestamp:"2023-05-26T13:56:38+00:00",datetime:["2023-05-26T10:56:38+00:00","2023-05-26T22:56:38+00:00"]},{archived:!1,code:"E3",description:"Crude Oil and other input materials",indicator:"Crude Oil and other input materials",themes:["economy"],title:"Raw Material Inventory",name:"Crude Oil and other input materials",year:2020,likes:28,years:[2014,2020],timestamp:"2023-05-25T13:56:38+00:00",datetime:["2023-05-25T10:56:38+00:00","2023-05-25T22:56:38+00:00"]},{archived:!1,code:"E13l",description:"Cruise ships in port based on AIS data",indicator:"Cruise ships in port based on AIS data",themes:["economy"],title:"Cruise Ships [nr]",name:"Cruise ships in port based on AIS data",year:1999,likes:17,years:[1998,1999],timestamp:"2023-05-24T13:56:38+00:00",datetime:["2023-05-24T10:56:38+00:00","2023-05-24T22:56:38+00:00"]}],Ks={title:"Elements/eox-itemfilter",tags:["autodocs"],component:"eox-itemfilter",render:t=>{const e=new Y;return e.config=t,e.apply(Bs),e}},Xs={args:{titleProperty:"title",filterProperties:[{keys:["title","themes"],title:"Search",type:"text",expanded:!0,state:{title:"no2",themes:"no2"}},{key:"themes",title:"Theme",type:"multiselect"},{key:"timestamp",type:"range",format:"date"},{key:"geometry",type:"spatial"}],aggregateResults:"themes",enableHighlighting:!0,onSelect:t=>{console.log(t)}}};export{Xs as Primary,Ks as default};
//# sourceMappingURL=stories-75e5c4f6.js.map
