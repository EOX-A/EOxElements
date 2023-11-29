import{w as Ai,s as F,x as g,T as R}from"./lit-element-Qm8PRmVu.js";import{n as b,t as k,r as G}from"./state-ncEgtE_C.js";import{o as _e,n as _,a as Wt}from"./unsafe-html-rJ1Yvh6P.js";import{e as Ci,i as Mi,t as Ri}from"./directive-xgBC_cM0.js";import{p as Li,v as le,r as Se,h as ut,m as ki}from"./directive-helpers-k6EzVOeb.js";import{n as Ge,i as pe}from"./static-AtHr95xX.js";import"./toolcool-range-slider.min-8Vg52R7B.js";import{d as me}from"./dayjs.min-Sgxub5UU.js";import{r as Ii,T as Ti}from"./main-057hI8GR.js";import{b as Ot}from"./button-KPw86qfe.js";import{c as ji,r as Fi,s as qi}from"./slider-MCblB636.js";import{c as Ie,g as Ur,a as rt}from"./_commonjsHelpers-4gQjN7DL.js";import"./index-EySAwWXj.js";import"./iframe-MmdMPGoO.js";import"../sb-preview/runtime.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=(e,t,r)=>{const i=new Map;for(let s=t;s<=r;s++)i.set(e[s],s);return i},Wr=Ci(class extends Mi{constructor(e){if(super(e),e.type!==Ri.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,t,r){let i;r===void 0?r=t:t!==void 0&&(i=t);const s=[],n=[];let o=0;for(const a of e)s[o]=i?i(a,o):o,n[o]=r(a,o),o++;return{values:n,keys:s}}render(e,t,r){return this.ht(e,t,r).values}update(e,[t,r,i]){const s=Li(e),{values:n,keys:o}=this.ht(t,r,i);if(!Array.isArray(s))return this.dt=o,n;const a=this.dt??(this.dt=[]),l=[];let c,u,h=0,f=s.length-1,d=0,p=n.length-1;for(;h<=f&&d<=p;)if(s[h]===null)h++;else if(s[f]===null)f--;else if(a[h]===o[d])l[d]=le(s[h],n[d]),h++,d++;else if(a[f]===o[p])l[p]=le(s[f],n[p]),f--,p--;else if(a[h]===o[p])l[p]=le(s[h],n[p]),Se(e,l[p+1],s[h]),h++,p--;else if(a[f]===o[d])l[d]=le(s[f],n[d]),Se(e,s[h],s[f]),f--,d++;else if(c===void 0&&(c=Vt(o,d,p),u=Vt(a,h,f)),c.has(a[h]))if(c.has(a[f])){const m=u.get(o[d]),x=m!==void 0?s[m]:null;if(x===null){const y=Se(e,s[h]);le(y,n[d]),l[d]=y}else l[d]=le(x,n[d]),Se(e,s[h],x),s[m]=null;d++}else ut(s[f]),f--;else ut(s[h]),h++;for(;d<=p;){const m=Se(e,l[p+1]);le(m,n[d]),l[d++]=m}for(;h<=f;){const m=s[h++];m!==null&&ut(m)}return this.dt=o,ki(e,l),Ai}}),Pt=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
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

${Ot}
${ji}
${Fi}
${qi}

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
  padding: 5px 10px;
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
  max-height: calc(100% - 30px);
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
`;var Ni=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,Ct=(e,t,r,i)=>{for(var s=i>1?void 0:i?Bi(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Ni(t,r,s),s};let Qe=class extends F{handleDetailsToggle(e){this.dispatchEvent(new CustomEvent("details-toggled",{detail:e,bubbles:!0,composed:!0}))}render(){return g`
      <style>
        ${Pt}
        ${!this.unstyled&&At}
      </style>
      <details
        @toggle="${this.handleDetailsToggle}"
        class="details-filter"
        part="details-filter"
        ?open=${this.filterObject.expanded||R}
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
    `}};Ct([b({attribute:!1})],Qe.prototype,"filterObject",2);Ct([b()],Qe.prototype,"unstyled",2);Qe=Ct([k("eox-itemfilter-expandcontainer")],Qe);const we=e=>{if(!e.dirty)return null;switch(e.type){case"multiselect":for(const r in e.state)e.state[r]=!1;break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const r in e.state)e.state[r]=!1;break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(r=>{e.state[r]=void 0});break}return delete e.stringifiedState,delete e.dirty,e},ft=Math.min,ge=Math.max,Xe=Math.round,Te=Math.floor,re=e=>({x:e,y:e});function Vr(e){return e.split("-")[0]}function Di(e){return e.split("-")[1]}function Hi(e){return e==="x"?"y":"x"}function Ui(e){return e==="y"?"height":"width"}function zr(e){return["top","bottom"].includes(Vr(e))?"y":"x"}function Wi(e){return Hi(zr(e))}function Kr(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function zt(e,t,r){let{reference:i,floating:s}=e;const n=zr(t),o=Wi(t),a=Ui(o),l=Vr(t),c=n==="y",u=i.x+i.width/2-s.width/2,h=i.y+i.height/2-s.height/2,f=i[a]/2-s[a]/2;let d;switch(l){case"top":d={x:u,y:i.y-s.height};break;case"bottom":d={x:u,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:h};break;case"left":d={x:i.x-s.width,y:h};break;default:d={x:i.x,y:i.y}}switch(Di(t)){case"start":d[o]-=f*(r&&c?-1:1);break;case"end":d[o]+=f*(r&&c?-1:1);break}return d}const Vi=async(e,t,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:o}=r,a=n.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:s}),{x:u,y:h}=zt(c,i,l),f=i,d={},p=0;for(let m=0;m<a.length;m++){const{name:x,fn:y}=a[m],{x:$,y:w,data:P,reset:S}=await y({x:u,y:h,initialPlacement:i,placement:f,strategy:s,middlewareData:d,rects:c,platform:o,elements:{reference:e,floating:t}});if(u=$??u,h=w??h,d={...d,[x]:{...d[x],...P}},S&&p<=50){p++,typeof S=="object"&&(S.placement&&(f=S.placement),S.rects&&(c=S.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:s}):S.rects),{x:u,y:h}=zt(c,f,l)),m=-1;continue}}return{x:u,y:h,placement:f,strategy:s,middlewareData:d}};function ie(e){return Gr(e)?(e.nodeName||"").toLowerCase():"#document"}function L(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Z(e){var t;return(t=(Gr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Gr(e){return e instanceof Node||e instanceof L(e).Node}function X(e){return e instanceof Element||e instanceof L(e).Element}function z(e){return e instanceof HTMLElement||e instanceof L(e).HTMLElement}function Kt(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof L(e).ShadowRoot}function Re(e){const{overflow:t,overflowX:r,overflowY:i,display:s}=T(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+r)&&!["inline","contents"].includes(s)}function zi(e){return["table","td","th"].includes(ie(e))}function Mt(e){const t=Rt(),r=T(e);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function Ki(e){let t=ve(e);for(;z(t)&&!it(t);){if(Mt(t))return t;t=ve(t)}return null}function Rt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function it(e){return["html","body","#document"].includes(ie(e))}function T(e){return L(e).getComputedStyle(e)}function st(e){return X(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ve(e){if(ie(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Kt(e)&&e.host||Z(e);return Kt(t)?t.host:t}function Qr(e){const t=ve(e);return it(t)?e.ownerDocument?e.ownerDocument.body:e.body:z(t)&&Re(t)?t:Qr(t)}function Oe(e,t,r){var i;t===void 0&&(t=[]),r===void 0&&(r=!0);const s=Qr(e),n=s===((i=e.ownerDocument)==null?void 0:i.body),o=L(s);return n?t.concat(o,o.visualViewport||[],Re(s)?s:[],o.frameElement&&r?Oe(o.frameElement):[]):t.concat(s,Oe(s,[],r))}function Xr(e){const t=T(e);let r=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=z(e),n=s?e.offsetWidth:r,o=s?e.offsetHeight:i,a=Xe(r)!==n||Xe(i)!==o;return a&&(r=n,i=o),{width:r,height:i,$:a}}function Lt(e){return X(e)?e:e.contextElement}function ye(e){const t=Lt(e);if(!z(t))return re(1);const r=t.getBoundingClientRect(),{width:i,height:s,$:n}=Xr(t);let o=(n?Xe(r.width):r.width)/i,a=(n?Xe(r.height):r.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Gi=re(0);function Yr(e){const t=L(e);return!Rt()||!t.visualViewport?Gi:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Qi(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==L(e)?!1:t}function ce(e,t,r,i){t===void 0&&(t=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect(),n=Lt(e);let o=re(1);t&&(i?X(i)&&(o=ye(i)):o=ye(e));const a=Qi(n,r,i)?Yr(n):re(0);let l=(s.left+a.x)/o.x,c=(s.top+a.y)/o.y,u=s.width/o.x,h=s.height/o.y;if(n){const f=L(n),d=i&&X(i)?L(i):i;let p=f.frameElement;for(;p&&i&&d!==f;){const m=ye(p),x=p.getBoundingClientRect(),y=T(p),$=x.left+(p.clientLeft+parseFloat(y.paddingLeft))*m.x,w=x.top+(p.clientTop+parseFloat(y.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,h*=m.y,l+=$,c+=w,p=L(p).frameElement}}return Kr({width:u,height:h,x:l,y:c})}function Xi(e){let{rect:t,offsetParent:r,strategy:i}=e;const s=z(r),n=Z(r);if(r===n)return t;let o={scrollLeft:0,scrollTop:0},a=re(1);const l=re(0);if((s||!s&&i!=="fixed")&&((ie(r)!=="body"||Re(n))&&(o=st(r)),z(r))){const c=ce(r);a=ye(r),l.x=c.x+r.clientLeft,l.y=c.y+r.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-o.scrollLeft*a.x+l.x,y:t.y*a.y-o.scrollTop*a.y+l.y}}function Yi(e){return Array.from(e.getClientRects())}function Jr(e){return ce(Z(e)).left+st(e).scrollLeft}function Ji(e){const t=Z(e),r=st(e),i=e.ownerDocument.body,s=ge(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),n=ge(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let o=-r.scrollLeft+Jr(e);const a=-r.scrollTop;return T(i).direction==="rtl"&&(o+=ge(t.clientWidth,i.clientWidth)-s),{width:s,height:n,x:o,y:a}}function Zi(e,t){const r=L(e),i=Z(e),s=r.visualViewport;let n=i.clientWidth,o=i.clientHeight,a=0,l=0;if(s){n=s.width,o=s.height;const c=Rt();(!c||c&&t==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:n,height:o,x:a,y:l}}function es(e,t){const r=ce(e,!0,t==="fixed"),i=r.top+e.clientTop,s=r.left+e.clientLeft,n=z(e)?ye(e):re(1),o=e.clientWidth*n.x,a=e.clientHeight*n.y,l=s*n.x,c=i*n.y;return{width:o,height:a,x:l,y:c}}function Gt(e,t,r){let i;if(t==="viewport")i=Zi(e,r);else if(t==="document")i=Ji(Z(e));else if(X(t))i=es(t,r);else{const s=Yr(e);i={...t,x:t.x-s.x,y:t.y-s.y}}return Kr(i)}function Zr(e,t){const r=ve(e);return r===t||!X(r)||it(r)?!1:T(r).position==="fixed"||Zr(r,t)}function ts(e,t){const r=t.get(e);if(r)return r;let i=Oe(e,[],!1).filter(a=>X(a)&&ie(a)!=="body"),s=null;const n=T(e).position==="fixed";let o=n?ve(e):e;for(;X(o)&&!it(o);){const a=T(o),l=Mt(o);!l&&a.position==="fixed"&&(s=null),(n?!l&&!s:!l&&a.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Re(o)&&!l&&Zr(e,o))?i=i.filter(u=>u!==o):s=a,o=ve(o)}return t.set(e,i),i}function rs(e){let{element:t,boundary:r,rootBoundary:i,strategy:s}=e;const o=[...r==="clippingAncestors"?ts(t,this._c):[].concat(r),i],a=o[0],l=o.reduce((c,u)=>{const h=Gt(t,u,s);return c.top=ge(h.top,c.top),c.right=ft(h.right,c.right),c.bottom=ft(h.bottom,c.bottom),c.left=ge(h.left,c.left),c},Gt(t,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function is(e){return Xr(e)}function ss(e,t,r){const i=z(t),s=Z(t),n=r==="fixed",o=ce(e,!0,n,t);let a={scrollLeft:0,scrollTop:0};const l=re(0);if(i||!i&&!n)if((ie(t)!=="body"||Re(s))&&(a=st(t)),i){const c=ce(t,!0,n,t);l.x=c.x+t.clientLeft,l.y=c.y+t.clientTop}else s&&(l.x=Jr(s));return{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function Qt(e,t){return!z(e)||T(e).position==="fixed"?null:t?t(e):e.offsetParent}function ei(e,t){const r=L(e);if(!z(e))return r;let i=Qt(e,t);for(;i&&zi(i)&&T(i).position==="static";)i=Qt(i,t);return i&&(ie(i)==="html"||ie(i)==="body"&&T(i).position==="static"&&!Mt(i))?r:i||Ki(e)||r}const ns=async function(e){let{reference:t,floating:r,strategy:i}=e;const s=this.getOffsetParent||ei,n=this.getDimensions;return{reference:ss(t,await s(r),i),floating:{x:0,y:0,...await n(r)}}};function os(e){return T(e).direction==="rtl"}const ls={convertOffsetParentRelativeRectToViewportRelativeRect:Xi,getDocumentElement:Z,getClippingRect:rs,getOffsetParent:ei,getElementRects:ns,getClientRects:Yi,getDimensions:is,getScale:ye,isElement:X,isRTL:os};function as(e,t){let r=null,i;const s=Z(e);function n(){clearTimeout(i),r&&r.disconnect(),r=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();const{left:c,top:u,width:h,height:f}=e.getBoundingClientRect();if(a||t(),!h||!f)return;const d=Te(u),p=Te(s.clientWidth-(c+h)),m=Te(s.clientHeight-(u+f)),x=Te(c),$={rootMargin:-d+"px "+-p+"px "+-m+"px "+-x+"px",threshold:ge(0,ft(1,l))||1};let w=!0;function P(S){const E=S[0].intersectionRatio;if(E!==l){if(!w)return o();E?o(!1,E):i=setTimeout(()=>{o(!1,1e-7)},100)}w=!1}try{r=new IntersectionObserver(P,{...$,root:s.ownerDocument})}catch{r=new IntersectionObserver(P,$)}r.observe(e)}return o(!0),n}function cs(e,t,r,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:n=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Lt(e),u=s||n?[...c?Oe(c):[],...Oe(t)]:[];u.forEach(y=>{s&&y.addEventListener("scroll",r,{passive:!0}),n&&y.addEventListener("resize",r)});const h=c&&a?as(c,r):null;let f=-1,d=null;o&&(d=new ResizeObserver(y=>{let[$]=y;$&&$.target===c&&d&&(d.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{d&&d.observe(t)})),r()}),c&&!l&&d.observe(c),d.observe(t));let p,m=l?ce(e):null;l&&x();function x(){const y=ce(e);m&&(y.x!==m.x||y.y!==m.y||y.width!==m.width||y.height!==m.height)&&r(),m=y,p=requestAnimationFrame(x)}return r(),()=>{u.forEach(y=>{s&&y.removeEventListener("scroll",r),n&&y.removeEventListener("resize",r)}),h&&h(),d&&d.disconnect(),d=null,l&&cancelAnimationFrame(p)}}const us=(e,t,r)=>{const i=new Map,s={platform:ls,...r},n={...s.platform,_c:i};return Vi(e,t,{...s,platform:n})};var hs=Object.defineProperty,ds=Object.getOwnPropertyDescriptor,nt=(e,t,r,i)=>{for(var s=i>1?void 0:i?ds(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&hs(t,r,s),s};let Pe=class extends F{constructor(){super(...arguments),this.open=!1,this.parent=null,this.unstyled=!1,this._clickEventListener=()=>{this.open=!1},this._keyboardEventListener=e=>{const{code:t}=e;["Escape"].includes(t)&&this._handleKeyboard(t)}}_handleKeyboard(e){this.clientHeight}_overlayCleanup(){}connectedCallback(){super.connectedCallback(),this.unstyled||setTimeout(()=>{const e=this.parent||this.renderRoot.querySelector("[name=trigger]").assignedNodes()[0],t=this.renderRoot.querySelector("#dropdown"),r=()=>{t.classList.contains("open")&&us(e,t,{strategy:"fixed"}).then(({x:i,y:s})=>{Object.assign(t.style,{left:`${i}px`,top:`${s}px`,width:`${e.getBoundingClientRect().width}px`})})};this._overlayCleanup=cs(e,t,r)})}disconnectedCallback(){super.disconnectedCallback(),this._overlayCleanup(),this.getRootNode().removeEventListener("keydown",this._keyboardEventListener),window.removeEventListener("click",this._clickEventListener)}render(){return g`
      <style>
        #dropdown {
          display: none;
        }
        #dropdown.open {
          display: block;
        }
        ${this.unstyled?R:g`
              eox-dropdown { height: 100%;} #dropdown { position: fixed; top:
              0px; left: 0; width: 100%; margin: 0; padding: 0; background:
              white; border-bottom-left-radius: 4px; border-bottom-right-radius:
              4px; box-shadow: 0 4px 4px #0007; cursor: default; max-height:
              200px; overflow-y: auto; z-index: 99;}
            `}
      </style>
      <slot name="trigger"></slot>
      <div id="dropdown">
        <slot name="content"></slot>
      </div>
    `}updated(e){if(e.has("open")){const t=this.renderRoot.querySelector("#dropdown");this.open?t.classList.add("open"):t.classList.remove("open"),this.requestUpdate()}}firstUpdated(){window.addEventListener("click",this._clickEventListener),this.getRootNode().addEventListener("keydown",this._keyboardEventListener),this.renderRoot.querySelector("[name=trigger]").assignedNodes()[0].addEventListener("focus",()=>{this.open=!0})}};nt([b({type:Boolean})],Pe.prototype,"open",2);nt([b()],Pe.prototype,"parent",2);nt([b({type:Boolean})],Pe.prototype,"unstyled",2);Pe=nt([k("eox-dropdown")],Pe);var fs=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,ot=(e,t,r,i)=>{for(var s=i>1?void 0:i?ps(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&fs(t,r,s),s};let Ae=class extends F{constructor(){super(...arguments),this.items=[],this.titleProperty="title",this.unstyled=!1,this._keyboardEventListener=e=>{const{code:t}=e;this.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(t)||(t==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(t)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(t)&&this._handleKeyboard(t,e.target.value??""))}}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}_handleKeyboard(e,t){const r=this.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&r&&r.classList.remove("highlighted"),e==="Backspace"&&!t){if(this.items.length){r&&this.items.splice(Array.from(this.renderRoot.querySelectorAll(".chip")).indexOf(r),1);const i=this.renderRoot.querySelectorAll(".chip")[this.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),this.requestUpdate()}this._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(this.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const s=this.renderRoot.querySelector(".chip.highlighted");s&&(i=Array.from(this.renderRoot.querySelectorAll(".chip")).indexOf(s),s.classList.remove("highlighted")),i=i+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&i<0&&(i=this.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&i>this.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(this.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",this._keyboardEventListener)}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this._keyboardEventListener)}render(){return g`
      <style>
        .chip.highlighted {
          background: lightgrey;
        }
        .chip-title {
          pointer-events: none;
        }
        ${this.unstyled?R:g`
              .chip-container { display: flex; flex: 0; } .chip { display: flex;
              align-items: center; background: #00417022; border-radius: 4px;
              margin-right: 4px; padding: 5px 10px; font-size: small; cursor:
              default; white-space: nowrap; } .chip.highlighted { background:
              #004170; color: white; } .chip-close { cursor: pointer;
              margin-left: 4px; }
            `}
      </style>
      <span class="chip-container">
        ${_e(this.items,e=>g`
            <span
              class="chip"
              @click=${t=>{this.renderRoot.querySelectorAll(".chip").forEach(r=>{r.classList.remove("highlighted")}),t.target.classList.add("highlighted"),this.requestUpdate()}}
            >
              <span class="chip-title"
                >${e[this.titleProperty]}</span
              >
              ${_(e._inProgress,()=>e.stringifiedState?"":g` ... `)}
              ${_(e.stringifiedState,()=>g`: ${e.stringifiedState}`)}
              <span
                class="chip-close"
                @click=${t=>{t.stopPropagation(),this.items.splice(this.items.indexOf(e),1),this._dispatchEvent(),this.requestUpdate()}}
                >✕</span
              >
            </span>
          `)}
      </span>
    `}};ot([b({type:Array})],Ae.prototype,"items",2);ot([b()],Ae.prototype,"titleProperty",2);ot([b({type:Boolean})],Ae.prototype,"unstyled",2);Ae=ot([k("eox-itemfilter-chips")],Ae);var ms=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,Q=(e,t,r,i)=>{for(var s=i>1?void 0:i?gs(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&ms(t,r,s),s};let D=class extends F{constructor(){super(...arguments),this.idProperty="id",this.items=[],this.titleProperty="title",this.itemTitleProperty=this.titleProperty,this.multiple=!1,this.unstyled=!1,this.multiStep=!1,this.inputText="",this.selectedItems=[],this._keyboardEventListener=e=>{const{code:t}=e;["ArrowUp","ArrowDown","Escape","Backspace"].includes(t)&&this._handleKeyboard(t)}}_handleKeyboard(e){var t,r,i,s;if(this.clientHeight!==0){if(e==="Escape"){if(this.selectedItems.length<1||this.multiple){this.renderRoot.querySelector("input").value!==""?this.renderRoot.querySelector("input").value="":this.renderRoot.querySelector("eox-dropdown").open=!1;return}this.multiple||(this.renderRoot.querySelector("input").value!==this.selectedItems[0][this.titleProperty]?this.renderRoot.querySelector("input").value=this.selectedItems[0][this.titleProperty]:this.renderRoot.querySelector("eox-dropdown").open=!1);return}(e==="ArrowDown"||e==="ArrowUp")&&(this.renderRoot.querySelector("eox-dropdown").open=!0,(t=this.parentElement)!=null&&t.inline&&this.renderRoot.querySelector("eox-selectionlist")._handleKeyboard(e)),this.renderRoot.querySelector("input").select(),(r=this.parentElement)!=null&&r.inline&&(["ArrowUp","ArrowDown"].includes(e)||((s=(i=this.parentElement.parentElement)==null?void 0:i.parentElement)==null?void 0:s.querySelector("#inline-input")).focus())}}_handleHighlight(e){e[0]._inProgress||(this.renderRoot.querySelector("input").value=e[0][this.titleProperty]||"",this.renderRoot.querySelector("input").select())}_handleSelect(e){var t;e.length>0&&this.multiStep&&e.forEach(r=>{this.selectedItems.includes(r)||(r._inProgress=!0)}),this.selectedItems=e,e.length>0?this.multiple?(this.renderRoot.querySelector("input").value="",this.renderRoot.querySelector("input").focus()):(this.renderRoot.querySelector("input").value=e[0][this.titleProperty],e[0]._inProgress||(this.renderRoot.querySelector("eox-dropdown").open=!1)):(this.renderRoot.querySelector("input").select(),this.renderRoot.querySelector("input").focus()),this._dispatchEvent(),this.requestUpdate(),(t=this.renderRoot.querySelector("eox-itemfilter-chips"))==null||t.requestUpdate()}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.selectedItems}))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this._keyboardEventListener)}firstUpdated(){this.getRootNode().addEventListener("keydown",this._keyboardEventListener)}updated(e){e.has("selectedItems")&&this._handleSelect(this.selectedItems)}render(){return g`
      <style>
        :host,
        .container {
          display: flex;
        }
        #dropdown {
          display: none;
        }
        ${this.unstyled?R:g`
              ${Ot} :host { position: relative; } .container { width: 100%;
              position: relative; border: 1px solid #00417066; border-radius:
              4px; height: 24px; padding: 5px; flex: 1; justify-content:
              space-between; cursor: text; overflow-x: auto; } .container:hover
              { border: 1px solid #004170; } .input-container { display: flex;
              flex: 1; align-items: center; } input, input:focus { height: 100%;
              border: none; outline: none; } .button-container { display: flex;
              align-items: center; justify-content: center; position: absolute;
              right: 1px; top: 5px; height: calc(100% - 10px); width: 34px;
              background: white; } button.icon { color: #004170; height: 24px;
              font-size: large; width: unset; } .container::-webkit-scrollbar {
              height: 2px; } .container::-webkit-scrollbar-thumb { background:
              lightgrey; border-radius: 2px;} .hidden {height: 1px; padding: 0;
              border: none;} .hidden:hover {border: none} .hidden input {
              opacity: 0% }
            `}
      </style>
      <div
        class="container"
        part="container"
        @click=${e=>{e.stopPropagation(),this.renderRoot.querySelector("input[type=text]").focus()}}
      >
        ${_(this.multiple,()=>g`
            <eox-itemfilter-chips
              .items=${this.selectedItems}
              .titleProperty=${this.titleProperty}
              .unstyled=${this.unstyled}
            ></eox-itemfilter-chips>
          `)}
        <div class="input-container">
          <eox-dropdown
            .parent=${this.parentNode.parentNode}
            .unstyled=${this.unstyled}
          >
            <input
              slot="trigger"
              type="text"
              @focus=${()=>{this.inputText="",this.requestUpdate()}}
              @input=${e=>{this.inputText=e.target.value.toLowerCase()}}
            />
            ${_(this.items.length>0,()=>g`
                <eox-selectionlist
                  slot="content"
                  .filter=${this.inputText}
                  .idProperty=${this.idProperty}
                  .titleProperty=${this.titleProperty}
                  .items=${this.items.filter(e=>this.multiStep?!e.stringifiedState:!0).filter(e=>this.inputText?e[this.titleProperty].toLowerCase().includes(this.inputText.toLowerCase()):!0)}
                  .multiple=${this.multiStep?!0:this.multiple}
                  .disableKeyboardEvents=${this.multiStep}
                  .selectedItems=${this.multiStep?this.selectedItems.filter(e=>e.stringifiedState):this.selectedItems}
                  .unstyled=${this.unstyled}
                  @items-highlighted=${e=>{this._handleHighlight(e.detail)}}
                  @items-selected=${e=>{this._handleSelect(e.detail)}}
                >
                </eox-selectionlist>
              `)}
          </eox-dropdown>
        </div>
      </div>
      ${_(this.selectedItems.length>0,()=>g`
          <div class="button-container">
            <button
              class="icon"
              @click=${()=>{this._handleSelect([])}}
            >
              ✕
            </button>
          </div>
        `)}
    `}};Q([b()],D.prototype,"idProperty",2);Q([b()],D.prototype,"items",2);Q([b()],D.prototype,"titleProperty",2);Q([b()],D.prototype,"itemTitleProperty",2);Q([b({type:Boolean})],D.prototype,"multiple",2);Q([b({type:Boolean})],D.prototype,"unstyled",2);Q([b({type:Boolean})],D.prototype,"multiStep",2);Q([G()],D.prototype,"inputText",2);Q([G()],D.prototype,"selectedItems",2);D=Q([k("eox-autocomplete")],D);var ys=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,ee=(e,t,r,i)=>{for(var s=i>1?void 0:i?vs(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&ys(t,r,s),s};let K=class extends F{constructor(){super(...arguments),this.filter="",this.idProperty="id",this.items=[],this.titleProperty="title",this.multiple=!1,this.selectedItems=[],this.unstyled=!1,this._currentHighlight=null,this._keyboardEventListener=e=>{["ArrowDown","ArrowUp","Enter","Escape"].includes(e.code)&&this._handleKeyboard(e.code)}}_handleKeyboard(e){if(this.clientHeight===0)return;const t=this.renderRoot.querySelector("li.highlighted");if(e==="Escape"){this._currentHighlight&&(this._currentHighlight=null);return}if(e==="Enter"){if(t){const n=this.items.find(o=>o[this.idProperty]===t.dataset.identifier);this._handleSelect(n),this.requestUpdate()}return}const r=this.renderRoot.querySelectorAll("li");let i=-1;t&&(delete t.dataset.highlighted,i=Array.from(r).indexOf(t)),e==="ArrowDown"&&(i++,i>r.length-1&&(i=0)),e==="ArrowUp"&&(i--,i<0&&(i=r.length-1));const s=Array.from(r)[i];s&&(this._currentHighlight=this.items.find(n=>n[this.idProperty]===s.dataset.identifier)),this.dispatchEvent(new CustomEvent("items-highlighted",{detail:[this._currentHighlight]}))}_handleSelect(e){if(e)if(this.multiple){const t=this.selectedItems.find(r=>r[this.idProperty]===e[this.idProperty]);t?this.selectedItems.splice(this.selectedItems.indexOf(t),1):this.selectedItems.push(e)}else this.selectedItems=[e];else this.selectedItems=[],this._currentHighlight=null;this._dispatchEvent()}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.selectedItems}))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this._keyboardEventListener)}firstUpdated(){this.getRootNode().addEventListener("keydown",this._keyboardEventListener)}updated(e){e.has("filter")&&(this.filter.length>0?setTimeout(()=>{const t=this.renderRoot.querySelectorAll("li")[0];t&&(this._currentHighlight=this.items.find(r=>r[this.idProperty]===t.dataset.identifier))}):this._currentHighlight=null)}render(){return g`
      <style>
        ${Pt}
        :host {
          height: auto;
        }
        ul {
          width: 100%;
        }
        li.highlighted {
          background: lightgrey;
        }
        ${!this.unstyled&&At}
      </style>
      <ul>
        ${Wr(this.items.filter(e=>this.filter?e[this.titleProperty].toLowerCase().includes(this.filter.toLowerCase()):!0),e=>e[this.idProperty],e=>g`
            <li
              class=${this._currentHighlight===e?"highlighted":R}
              data-identifier=${e[this.idProperty]}
              data-title=${e[this.titleProperty]}
              @mouseenter=${()=>{this._currentHighlight=e}}
              @mouseleave=${()=>{this._currentHighlight=null}}
            >
              <label>
                <input
                  type="${this.multiple?"checkbox":"radio"}"
                  .checked=${!!this.selectedItems.find(t=>t[this.idProperty]===e[this.idProperty])||R}
                  @change=${()=>this._handleSelect(e)}
                />
                <span class="title"
                  >${e[this.titleProperty]}</span
                >
              </label>
            </li>
          `)}
      </ul>
    `}};ee([b()],K.prototype,"filter",2);ee([b()],K.prototype,"idProperty",2);ee([b()],K.prototype,"items",2);ee([b()],K.prototype,"titleProperty",2);ee([b({type:Boolean})],K.prototype,"multiple",2);ee([b()],K.prototype,"selectedItems",2);ee([b({type:Boolean})],K.prototype,"unstyled",2);ee([G()],K.prototype,"_currentHighlight",2);K=ee([k("eox-selectionlist")],K);var bs=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,lt=(e,t,r,i)=>{for(var s=i>1?void 0:i?xs(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&bs(t,r,s),s};let Ce=class extends F{constructor(){super(...arguments),this.inline=!1,this.unstyled=!1}reset(){this.renderRoot.querySelectorAll("input[type='checkbox']").forEach(e=>{e instanceof HTMLInputElement&&(e.checked=!1)}),we(this.filterObject),this.requestUpdate()}createRenderRoot(){return this}_getItems(){return Object.keys(this.filterObject.state).sort((e,t)=>e.localeCompare(t)).map(e=>({id:e,title:e.replace(/^./,e[0].toUpperCase())}))}_getSelectedItems(){return Object.keys(this.filterObject.state).filter(e=>this.filterObject.state[e]).map(e=>({id:e,title:e.replace(/^./,e[0].toUpperCase())}))}_handleSelected(e){Object.keys(this.filterObject.state).forEach(t=>{this.filterObject.state[t]=e.map(r=>r.id).includes(t)}),this.filterObject.stringifiedState=Object.keys(this.filterObject.state).filter(t=>this.filterObject.state[t]).join(", "),this.filterObject.dirty=!0,this.dispatchEvent(new CustomEvent("filter"))}render(){return _(this.filterObject,()=>g`
        ${_(this.inline||Object.keys(this.filterObject.state).length>10,()=>g`
            <eox-autocomplete
              multiple
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${e=>this._handleSelected(e.detail)}
            >
            </eox-autocomplete>
          `,()=>g`
            <eox-selectionlist
              multiple
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${e=>this._handleSelected(e.detail)}
            ></eox-selectionlist>
          `)}
      `)}};lt([b()],Ce.prototype,"filterObject",2);lt([b({type:Boolean})],Ce.prototype,"inline",2);lt([b({type:Boolean})],Ce.prototype,"unstyled",2);Ce=lt([k("eox-itemfilter-multiselect")],Ce);var ws="Expected a function",Xt=NaN,Es="[object Symbol]",$s=/^\s+|\s+$/g,Ss=/^[-+]0x[0-9a-f]+$/i,_s=/^0b[01]+$/i,Os=/^0o[0-7]+$/i,Ps=parseInt,As=typeof Ie=="object"&&Ie&&Ie.Object===Object&&Ie,Cs=typeof self=="object"&&self&&self.Object===Object&&self,Ms=As||Cs||Function("return this")(),Rs=Object.prototype,Ls=Rs.toString,ks=Math.max,Is=Math.min,ht=function(){return Ms.Date.now()};function Ts(e,t,r){var i,s,n,o,a,l,c=0,u=!1,h=!1,f=!0;if(typeof e!="function")throw new TypeError(ws);t=Yt(t)||0,pt(r)&&(u=!!r.leading,h="maxWait"in r,n=h?ks(Yt(r.maxWait)||0,t):n,f="trailing"in r?!!r.trailing:f);function d(E){var O=i,C=s;return i=s=void 0,c=E,o=e.apply(C,O),o}function p(E){return c=E,a=setTimeout(y,t),u?d(E):o}function m(E){var O=E-l,C=E-c,q=t-O;return h?Is(q,n-C):q}function x(E){var O=E-l,C=E-c;return l===void 0||O>=t||O<0||h&&C>=n}function y(){var E=ht();if(x(E))return $(E);a=setTimeout(y,m(E))}function $(E){return a=void 0,f&&i?d(E):(i=s=void 0,o)}function w(){a!==void 0&&clearTimeout(a),c=0,i=l=s=a=void 0}function P(){return a===void 0?o:$(ht())}function S(){var E=ht(),O=x(E);if(i=arguments,s=this,l=E,O){if(a===void 0)return p(l);if(h)return a=setTimeout(y,t),d(l)}return a===void 0&&(a=setTimeout(y,t)),o}return S.cancel=w,S.flush=P,S}function pt(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function js(e){return!!e&&typeof e=="object"}function Fs(e){return typeof e=="symbol"||js(e)&&Ls.call(e)==Es}function Yt(e){if(typeof e=="number")return e;if(Fs(e))return Xt;if(pt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=pt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace($s,"");var r=_s.test(e);return r||Os.test(e)?Ps(e.slice(2),r?2:8):Ss.test(e)?Xt:+e}var qs=Ts;const ti=Ur(qs);var Ns=Object.defineProperty,Bs=Object.getOwnPropertyDescriptor,ri=(e,t,r,i)=>{for(var s=i>1?void 0:i?Bs(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Ns(t,r,s),s};let mt=class extends F{constructor(){super(...arguments),this.inputHandler=e=>{const[t,r]=e.detail.values;(t!==this.filterObject.state.min||r!=this.filterObject.state.max)&&([this.filterObject.state.min,this.filterObject.state.max]=[t,r],this.filterObject.dirty=!0),this.filterObject.dirty&&(this.filterObject.stringifiedState=`${me(t)} - ${me(r)}`),this.dispatchEvent(new CustomEvent("filter")),this.requestUpdate()},this.debouncedInputHandler=ti(this.inputHandler,0,{leading:!0})}reset(){we(this.filterObject),this.requestUpdate()}createRenderRoot(){return this}render(){return _(this.filterObject,()=>g`
        <div class="range-before">
          ${this.filterObject.format==="date"?me.unix(this.filterObject.state.min):this.filterObject.state.min}
        </div>
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min}"
          value2="${this.filterObject.state.max}"
          step="1"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        <div class="range-after">
          ${this.filterObject.format==="date"?me.unix(this.filterObject.state.max):this.filterObject.state.max}
        </div>
      `)}};ri([b()],mt.prototype,"filterObject",2);mt=ri([k("eox-itemfilter-range")],mt);var Ds=Object.defineProperty,Hs=Object.getOwnPropertyDescriptor,at=(e,t,r,i)=>{for(var s=i>1?void 0:i?Hs(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Ds(t,r,s),s};let Me=class extends F{constructor(){super(...arguments),this.inline=!1,this.unstyled=!1}reset(){this.renderRoot.querySelectorAll("input[type='radio']").forEach(e=>{e instanceof HTMLInputElement&&(e.checked=!1)}),we(this.filterObject),this.requestUpdate()}createRenderRoot(){return this}_getItems(){return Object.keys(this.filterObject.state).sort((e,t)=>e.localeCompare(t)).map(e=>({id:e,title:e.replace(/^./,e[0].toUpperCase())}))}_getSelectedItems(){return Object.keys(this.filterObject.state).filter(e=>this.filterObject.state[e]).map(e=>({id:e,title:e.replace(/^./,e[0].toUpperCase())}))}_handleSelected(e){Object.keys(this.filterObject.state).forEach(t=>{this.filterObject.state[t]=e.detail.map(r=>r.id).includes(t)}),this.filterObject.stringifiedState=Object.keys(this.filterObject.state).filter(t=>this.filterObject.state[t])[0],this.filterObject.dirty=!0,this.dispatchEvent(new CustomEvent("filter"))}render(){return _(this.filterObject,()=>g`
        ${_(this.inline||Object.keys(this.filterObject.state).length>1,()=>g`
            <eox-autocomplete
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${e=>this._handleSelected(e)}
            >
            </eox-autocomplete>
          `,()=>g`
            <eox-selectionlist
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${e=>this._handleSelected(e)}
            ></eox-selectionlist>
          `)}
      `)}};at([b()],Me.prototype,"filterObject",2);at([b({type:Boolean})],Me.prototype,"inline",2);at([b({type:Boolean})],Me.prototype,"unstyled",2);Me=at([k("eox-itemfilter-select")],Me);var A=63710088e-1,kt={centimeters:A*100,centimetres:A*100,degrees:A/111325,feet:A*3.28084,inches:A*39.37,kilometers:A/1e3,kilometres:A/1e3,meters:A,metres:A,miles:A/1609.344,millimeters:A*1e3,millimetres:A*1e3,nauticalmiles:A/1852,radians:1,yards:A*1.0936},Us={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:1/1e3,kilometres:1/1e3,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/A,yards:1.0936133},gt={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046};function j(e,t,r){r===void 0&&(r={});var i={type:"Feature"};return(r.id===0||r.id)&&(i.id=r.id),r.bbox&&(i.bbox=r.bbox),i.properties=t||{},i.geometry=e,i}function Ws(e,t,r){switch(e){case"Point":return W(t).geometry;case"LineString":return B(t).geometry;case"Polygon":return It(t).geometry;case"MultiPoint":return ii(t).geometry;case"MultiLineString":return Tt(t).geometry;case"MultiPolygon":return si(t).geometry;default:throw new Error(e+" is invalid")}}function W(e,t,r){if(r===void 0&&(r={}),!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Ye(e[0])||!Ye(e[1]))throw new Error("coordinates must contain numbers");var i={type:"Point",coordinates:e};return j(i,t,r)}function Vs(e,t,r){return r===void 0&&(r={}),se(e.map(function(i){return W(i,t)}),r)}function It(e,t,r){r===void 0&&(r={});for(var i=0,s=e;i<s.length;i++){var n=s[i];if(n.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var o=0;o<n[n.length-1].length;o++)if(n[n.length-1][o]!==n[0][o])throw new Error("First and last Position are not equivalent.")}var a={type:"Polygon",coordinates:e};return j(a,t,r)}function zs(e,t,r){return r===void 0&&(r={}),se(e.map(function(i){return It(i,t)}),r)}function B(e,t,r){if(r===void 0&&(r={}),e.length<2)throw new Error("coordinates must be an array of two or more positions");var i={type:"LineString",coordinates:e};return j(i,t,r)}function Ks(e,t,r){return r===void 0&&(r={}),se(e.map(function(i){return B(i,t)}),r)}function se(e,t){t===void 0&&(t={});var r={type:"FeatureCollection"};return t.id&&(r.id=t.id),t.bbox&&(r.bbox=t.bbox),r.features=e,r}function Tt(e,t,r){r===void 0&&(r={});var i={type:"MultiLineString",coordinates:e};return j(i,t,r)}function ii(e,t,r){r===void 0&&(r={});var i={type:"MultiPoint",coordinates:e};return j(i,t,r)}function si(e,t,r){r===void 0&&(r={});var i={type:"MultiPolygon",coordinates:e};return j(i,t,r)}function Gs(e,t,r){r===void 0&&(r={});var i={type:"GeometryCollection",geometries:e};return j(i,t,r)}function Qs(e,t){if(t===void 0&&(t=0),t&&!(t>=0))throw new Error("precision must be a positive number");var r=Math.pow(10,t||0);return Math.round(e*r)/r}function ni(e,t){t===void 0&&(t="kilometers");var r=kt[t];if(!r)throw new Error(t+" units is invalid");return e*r}function jt(e,t){t===void 0&&(t="kilometers");var r=kt[t];if(!r)throw new Error(t+" units is invalid");return e/r}function Xs(e,t){return oi(jt(e,t))}function Ys(e){var t=e%360;return t<0&&(t+=360),t}function oi(e){var t=e%(2*Math.PI);return t*180/Math.PI}function Js(e){var t=e%360;return t*Math.PI/180}function Zs(e,t,r){if(t===void 0&&(t="kilometers"),r===void 0&&(r="kilometers"),!(e>=0))throw new Error("length must be a positive number");return ni(jt(e,t),r)}function en(e,t,r){if(t===void 0&&(t="meters"),r===void 0&&(r="kilometers"),!(e>=0))throw new Error("area must be a positive number");var i=gt[t];if(!i)throw new Error("invalid original units");var s=gt[r];if(!s)throw new Error("invalid final units");return e/i*s}function Ye(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}function Ft(e){return!!e&&e.constructor===Object}function tn(e){if(!e)throw new Error("bbox is required");if(!Array.isArray(e))throw new Error("bbox must be an Array");if(e.length!==4&&e.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");e.forEach(function(t){if(!Ye(t))throw new Error("bbox must only contain numbers")})}function rn(e){if(!e)throw new Error("id is required");if(["string","number"].indexOf(typeof e)===-1)throw new Error("id must be a number or a string")}const sn=Object.freeze(Object.defineProperty({__proto__:null,areaFactors:gt,bearingToAzimuth:Ys,convertArea:en,convertLength:Zs,degreesToRadians:Js,earthRadius:A,factors:kt,feature:j,featureCollection:se,geometry:Ws,geometryCollection:Gs,isNumber:Ye,isObject:Ft,lengthToDegrees:Xs,lengthToRadians:jt,lineString:B,lineStrings:Ks,multiLineString:Tt,multiPoint:ii,multiPolygon:si,point:W,points:Vs,polygon:It,polygons:zs,radiansToDegrees:oi,radiansToLength:ni,round:Qs,unitsFactors:Us,validateBBox:tn,validateId:rn},Symbol.toStringTag,{value:"Module"}));function li(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return e.geometry.coordinates;if(e.type==="Point")return e.coordinates}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return e;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function be(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function xe(e){return e.type==="Feature"?e.geometry:e}function I(e,t,r){if(r===void 0&&(r={}),!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");var i=li(e),s=xe(t),n=s.type,o=t.bbox,a=s.coordinates;if(o&&nn(i,o)===!1)return!1;n==="Polygon"&&(a=[a]);for(var l=!1,c=0;c<a.length&&!l;c++)if(Jt(i,a[c][0],r.ignoreBoundary)){for(var u=!1,h=1;h<a[c].length&&!u;)Jt(i,a[c][h],!r.ignoreBoundary)&&(u=!0),h++;u||(l=!0)}return l}function Jt(e,t,r){var i=!1;t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]&&(t=t.slice(0,t.length-1));for(var s=0,n=t.length-1;s<t.length;n=s++){var o=t[s][0],a=t[s][1],l=t[n][0],c=t[n][1],u=e[1]*(o-l)+a*(l-e[0])+c*(e[0]-o)===0&&(o-e[0])*(l-e[0])<=0&&(a-e[1])*(c-e[1])<=0;if(u)return!r;var h=a>e[1]!=c>e[1]&&e[0]<(l-o)*(e[1]-a)/(c-a)+o;h&&(i=!i)}return i}function nn(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}function Ee(e,t,r){if(e!==null)for(var i,s,n,o,a,l,c,u=0,h=0,f,d=e.type,p=d==="FeatureCollection",m=d==="Feature",x=p?e.features.length:1,y=0;y<x;y++){c=p?e.features[y].geometry:m?e.geometry:e,f=c?c.type==="GeometryCollection":!1,a=f?c.geometries.length:1;for(var $=0;$<a;$++){var w=0,P=0;if(o=f?c.geometries[$]:c,o!==null){l=o.coordinates;var S=o.type;switch(u=r&&(S==="Polygon"||S==="MultiPolygon")?1:0,S){case null:break;case"Point":if(t(l,h,y,w,P)===!1)return!1;h++,w++;break;case"LineString":case"MultiPoint":for(i=0;i<l.length;i++){if(t(l[i],h,y,w,P)===!1)return!1;h++,S==="MultiPoint"&&w++}S==="LineString"&&w++;break;case"Polygon":case"MultiLineString":for(i=0;i<l.length;i++){for(s=0;s<l[i].length-u;s++){if(t(l[i][s],h,y,w,P)===!1)return!1;h++}S==="MultiLineString"&&w++,S==="Polygon"&&P++}S==="Polygon"&&w++;break;case"MultiPolygon":for(i=0;i<l.length;i++){for(P=0,s=0;s<l[i].length;s++){for(n=0;n<l[i][s].length-u;n++){if(t(l[i][s][n],h,y,w,P)===!1)return!1;h++}P++}w++}break;case"GeometryCollection":for(i=0;i<o.geometries.length;i++)if(Ee(o.geometries[i],t,r)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function on(e,t,r,i){var s=r;return Ee(e,function(n,o,a,l,c){o===0&&r===void 0?s=n:s=t(s,n,o,a,l,c)},i),s}function ai(e,t){var r;switch(e.type){case"FeatureCollection":for(r=0;r<e.features.length&&t(e.features[r].properties,r)!==!1;r++);break;case"Feature":t(e.properties,0);break}}function ln(e,t,r){var i=r;return ai(e,function(s,n){n===0&&r===void 0?i=s:i=t(i,s,n)}),i}function Je(e,t){if(e.type==="Feature")t(e,0);else if(e.type==="FeatureCollection")for(var r=0;r<e.features.length&&t(e.features[r],r)!==!1;r++);}function an(e,t,r){var i=r;return Je(e,function(s,n){n===0&&r===void 0?i=s:i=t(i,s,n)}),i}function cn(e){var t=[];return Ee(e,function(r){t.push(r)}),t}function qt(e,t){var r,i,s,n,o,a,l,c,u,h,f=0,d=e.type==="FeatureCollection",p=e.type==="Feature",m=d?e.features.length:1;for(r=0;r<m;r++){for(a=d?e.features[r].geometry:p?e.geometry:e,c=d?e.features[r].properties:p?e.properties:{},u=d?e.features[r].bbox:p?e.bbox:void 0,h=d?e.features[r].id:p?e.id:void 0,l=a?a.type==="GeometryCollection":!1,o=l?a.geometries.length:1,s=0;s<o;s++){if(n=l?a.geometries[s]:a,n===null){if(t(null,f,c,u,h)===!1)return!1;continue}switch(n.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(n,f,c,u,h)===!1)return!1;break}case"GeometryCollection":{for(i=0;i<n.geometries.length;i++)if(t(n.geometries[i],f,c,u,h)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}f++}}function un(e,t,r){var i=r;return qt(e,function(s,n,o,a,l){n===0&&r===void 0?i=s:i=t(i,s,n,o,a,l)}),i}function Y(e,t){qt(e,function(r,i,s,n,o){var a=r===null?null:r.type;switch(a){case null:case"Point":case"LineString":case"Polygon":return t(j(r,s,{bbox:n,id:o}),i,0)===!1?!1:void 0}var l;switch(a){case"MultiPoint":l="Point";break;case"MultiLineString":l="LineString";break;case"MultiPolygon":l="Polygon";break}for(var c=0;c<r.coordinates.length;c++){var u=r.coordinates[c],h={type:l,coordinates:u};if(t(j(h,s),i,c)===!1)return!1}})}function hn(e,t,r){var i=r;return Y(e,function(s,n,o){n===0&&o===0&&r===void 0?i=s:i=t(i,s,n,o)}),i}function ci(e,t){Y(e,function(r,i,s){var n=0;if(r.geometry){var o=r.geometry.type;if(!(o==="Point"||o==="MultiPoint")){var a,l=0,c=0,u=0;if(Ee(r,function(h,f,d,p,m){if(a===void 0||i>l||p>c||m>u){a=h,l=i,c=p,u=m,n=0;return}var x=B([a,h],r.properties);if(t(x,i,s,m,n)===!1)return!1;n++,a=h})===!1)return!1}}})}function dn(e,t,r){var i=r,s=!1;return ci(e,function(n,o,a,l,c){s===!1&&r===void 0?i=n:i=t(i,n,o,a,l,c),s=!0}),i}function ui(e,t){if(!e)throw new Error("geojson is required");Y(e,function(r,i,s){if(r.geometry!==null){var n=r.geometry.type,o=r.geometry.coordinates;switch(n){case"LineString":if(t(r,i,s,0,0)===!1)return!1;break;case"Polygon":for(var a=0;a<o.length;a++)if(t(B(o[a],r.properties),i,s,a)===!1)return!1;break}}})}function fn(e,t,r){var i=r;return ui(e,function(s,n,o,a){n===0&&r===void 0?i=s:i=t(i,s,n,o,a)}),i}function pn(e,t){if(t=t||{},!Ft(t))throw new Error("options is invalid");var r=t.featureIndex||0,i=t.multiFeatureIndex||0,s=t.geometryIndex||0,n=t.segmentIndex||0,o=t.properties,a;switch(e.type){case"FeatureCollection":r<0&&(r=e.features.length+r),o=o||e.features[r].properties,a=e.features[r].geometry;break;case"Feature":o=o||e.properties,a=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":a=e;break;default:throw new Error("geojson is invalid")}if(a===null)return null;var l=a.coordinates;switch(a.type){case"Point":case"MultiPoint":return null;case"LineString":return n<0&&(n=l.length+n-1),B([l[n],l[n+1]],o,t);case"Polygon":return s<0&&(s=l.length+s),n<0&&(n=l[s].length+n-1),B([l[s][n],l[s][n+1]],o,t);case"MultiLineString":return i<0&&(i=l.length+i),n<0&&(n=l[i].length+n-1),B([l[i][n],l[i][n+1]],o,t);case"MultiPolygon":return i<0&&(i=l.length+i),s<0&&(s=l[i].length+s),n<0&&(n=l[i][s].length-n-1),B([l[i][s][n],l[i][s][n+1]],o,t)}throw new Error("geojson is invalid")}function mn(e,t){if(t=t||{},!Ft(t))throw new Error("options is invalid");var r=t.featureIndex||0,i=t.multiFeatureIndex||0,s=t.geometryIndex||0,n=t.coordIndex||0,o=t.properties,a;switch(e.type){case"FeatureCollection":r<0&&(r=e.features.length+r),o=o||e.features[r].properties,a=e.features[r].geometry;break;case"Feature":o=o||e.properties,a=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":a=e;break;default:throw new Error("geojson is invalid")}if(a===null)return null;var l=a.coordinates;switch(a.type){case"Point":return W(l,o,t);case"MultiPoint":return i<0&&(i=l.length+i),W(l[i],o,t);case"LineString":return n<0&&(n=l.length+n),W(l[n],o,t);case"Polygon":return s<0&&(s=l.length+s),n<0&&(n=l[s].length+n),W(l[s][n],o,t);case"MultiLineString":return i<0&&(i=l.length+i),n<0&&(n=l[i].length+n),W(l[i][n],o,t);case"MultiPolygon":return i<0&&(i=l.length+i),s<0&&(s=l[i].length+s),n<0&&(n=l[i][s].length-n),W(l[i][s][n],o,t)}throw new Error("geojson is invalid")}const gn=Object.freeze(Object.defineProperty({__proto__:null,coordAll:cn,coordEach:Ee,coordReduce:on,featureEach:Je,featureReduce:an,findPoint:mn,findSegment:pn,flattenEach:Y,flattenReduce:hn,geomEach:qt,geomReduce:un,lineEach:ui,lineReduce:fn,propEach:ai,propReduce:ln,segmentEach:ci,segmentReduce:dn},Symbol.toStringTag,{value:"Module"}));function Zt(e){if(!e)throw new Error("geojson is required");var t=[];return Y(e,function(r){yn(r,t)}),se(t)}function yn(e,t){var r=[],i=e.geometry;if(i!==null){switch(i.type){case"Polygon":r=be(i);break;case"LineString":r=[be(i)]}r.forEach(function(s){var n=vn(s,e.properties);n.forEach(function(o){o.id=t.length,t.push(o)})})}}function vn(e,t){var r=[];return e.reduce(function(i,s){var n=B([i,s],t);return n.bbox=bn(i,s),r.push(n),s}),r}function bn(e,t){var r=e[0],i=e[1],s=t[0],n=t[1],o=r<s?r:s,a=i<n?i:n,l=r>s?r:s,c=i>n?i:n;return[o,a,l,c]}var Nt={exports:{}};const xn=rt(Ii),wn=rt(sn),En=rt(gn);function ue(e){var t=[1/0,1/0,-1/0,-1/0];return Ee(e,function(r){t[0]>r[0]&&(t[0]=r[0]),t[1]>r[1]&&(t[1]=r[1]),t[2]<r[0]&&(t[2]=r[0]),t[3]<r[1]&&(t[3]=r[1])}),t}ue.default=ue;const $n=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"})),Sn=rt($n);var U=xn,hi=wn,di=En,fe=Sn.default,_n=di.featureEach;di.coordEach;hi.polygon;var er=hi.featureCollection;function fi(e){var t=new U(e);return t.insert=function(r){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:fe(r),U.prototype.insert.call(this,r)},t.load=function(r){var i=[];return Array.isArray(r)?r.forEach(function(s){if(s.type!=="Feature")throw new Error("invalid features");s.bbox=s.bbox?s.bbox:fe(s),i.push(s)}):_n(r,function(s){if(s.type!=="Feature")throw new Error("invalid features");s.bbox=s.bbox?s.bbox:fe(s),i.push(s)}),U.prototype.load.call(this,i)},t.remove=function(r,i){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:fe(r),U.prototype.remove.call(this,r,i)},t.clear=function(){return U.prototype.clear.call(this)},t.search=function(r){var i=U.prototype.search.call(this,this.toBBox(r));return er(i)},t.collides=function(r){return U.prototype.collides.call(this,this.toBBox(r))},t.all=function(){var r=U.prototype.all.call(this);return er(r)},t.toJSON=function(){return U.prototype.toJSON.call(this)},t.fromJSON=function(r){return U.prototype.fromJSON.call(this,r)},t.toBBox=function(r){var i;if(r.bbox)i=r.bbox;else if(Array.isArray(r)&&r.length===4)i=r;else if(Array.isArray(r)&&r.length===6)i=[r[0],r[1],r[3],r[4]];else if(r.type==="Feature")i=fe(r);else if(r.type==="FeatureCollection")i=fe(r);else throw new Error("invalid geojson");return{minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}},t}Nt.exports=fi;Nt.exports.default=fi;var On=Nt.exports;const Pn=Ur(On);function Bt(e,t){var r={},i=[];if(e.type==="LineString"&&(e=j(e)),t.type==="LineString"&&(t=j(t)),e.type==="Feature"&&t.type==="Feature"&&e.geometry!==null&&t.geometry!==null&&e.geometry.type==="LineString"&&t.geometry.type==="LineString"&&e.geometry.coordinates.length===2&&t.geometry.coordinates.length===2){var s=tr(e,t);return s&&i.push(s),se(i)}var n=Pn();return n.load(Zt(t)),Je(Zt(e),function(o){Je(n.search(o),function(a){var l=tr(o,a);if(l){var c=be(l).join(",");r[c]||(r[c]=!0,i.push(l))}})}),se(i)}function tr(e,t){var r=be(e),i=be(t);if(r.length!==2)throw new Error("<intersects> line1 must only contain 2 coordinates");if(i.length!==2)throw new Error("<intersects> line2 must only contain 2 coordinates");var s=r[0][0],n=r[0][1],o=r[1][0],a=r[1][1],l=i[0][0],c=i[0][1],u=i[1][0],h=i[1][1],f=(h-c)*(o-s)-(u-l)*(a-n),d=(u-l)*(n-c)-(h-c)*(s-l),p=(o-s)*(n-c)-(a-n)*(s-l);if(f===0)return null;var m=d/f,x=p/f;if(m>=0&&m<=1&&x>=0&&x<=1){var y=s+m*(o-s),$=n+m*(a-n);return W([y,$])}return null}function yt(e,t){t===void 0&&(t={});var r=xe(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),r.type){case"Polygon":return An(r,t);case"MultiPolygon":return Cn(r,t);default:throw new Error("invalid poly")}}function An(e,t){t===void 0&&(t={});var r=xe(e),i=r.coordinates,s=t.properties?t.properties:e.type==="Feature"?e.properties:{};return pi(i,s)}function Cn(e,t){t===void 0&&(t={});var r=xe(e),i=r.coordinates,s=t.properties?t.properties:e.type==="Feature"?e.properties:{},n=[];return i.forEach(function(o){n.push(pi(o,s))}),se(n)}function pi(e,t){return e.length>1?Tt(e,t):B(e[0],t)}function Mn(e,t){var r=!0;return Y(e,function(i){Y(t,function(s){if(r===!1)return!1;r=Rn(i.geometry,s.geometry)})}),r}function Rn(e,t){switch(e.type){case"Point":switch(t.type){case"Point":return!Tn(e.coordinates,t.coordinates);case"LineString":return!rr(t,e);case"Polygon":return!I(e,t)}break;case"LineString":switch(t.type){case"Point":return!rr(e,t);case"LineString":return!Ln(e,t);case"Polygon":return!ir(t,e)}break;case"Polygon":switch(t.type){case"Point":return!I(t,e);case"LineString":return!ir(e,t);case"Polygon":return!kn(t,e)}}return!1}function rr(e,t){for(var r=0;r<e.coordinates.length-1;r++)if(In(e.coordinates[r],e.coordinates[r+1],t.coordinates))return!0;return!1}function Ln(e,t){var r=Bt(e,t);return r.features.length>0}function ir(e,t){for(var r=0,i=t.coordinates;r<i.length;r++){var s=i[r];if(I(s,e))return!0}var n=Bt(t,yt(e));return n.features.length>0}function kn(e,t){for(var r=0,i=e.coordinates[0];r<i.length;r++){var s=i[r];if(I(s,t))return!0}for(var n=0,o=t.coordinates[0];n<o.length;n++){var a=o[n];if(I(a,e))return!0}var l=Bt(yt(e),yt(t));return l.features.length>0}function In(e,t,r){var i=r[0]-e[0],s=r[1]-e[1],n=t[0]-e[0],o=t[1]-e[1],a=i*o-s*n;return a!==0?!1:Math.abs(n)>=Math.abs(o)?n>0?e[0]<=r[0]&&r[0]<=t[0]:t[0]<=r[0]&&r[0]<=e[0]:o>0?e[1]<=r[1]&&r[1]<=t[1]:t[1]<=r[1]&&r[1]<=e[1]}function Tn(e,t){return e[0]===t[0]&&e[1]===t[1]}function jn(e,t){var r=!1;return Y(e,function(i){Y(t,function(s){if(r===!0)return!0;r=!Mn(i.geometry,s.geometry)})}),r}function Ze(e,t,r){r===void 0&&(r={});for(var i=li(e),s=be(t),n=0;n<s.length-1;n++){var o=!1;if(r.ignoreEndVertices&&(n===0&&(o="start"),n===s.length-2&&(o="end"),n===0&&n+1===s.length-1&&(o="both")),Fn(s[n],s[n+1],i,o,typeof r.epsilon>"u"?null:r.epsilon))return!0}return!1}function Fn(e,t,r,i,s){var n=r[0],o=r[1],a=e[0],l=e[1],c=t[0],u=t[1],h=r[0]-a,f=r[1]-l,d=c-a,p=u-l,m=h*p-f*d;if(s!==null){if(Math.abs(m)>s)return!1}else if(m!==0)return!1;if(i){if(i==="start")return Math.abs(d)>=Math.abs(p)?d>0?a<n&&n<=c:c<=n&&n<a:p>0?l<o&&o<=u:u<=o&&o<l;if(i==="end")return Math.abs(d)>=Math.abs(p)?d>0?a<=n&&n<c:c<n&&n<=a:p>0?l<=o&&o<u:u<o&&o<=l;if(i==="both")return Math.abs(d)>=Math.abs(p)?d>0?a<n&&n<c:c<n&&n<a:p>0?l<o&&o<u:u<o&&o<l}else return Math.abs(d)>=Math.abs(p)?d>0?a<=n&&n<=c:c<=n&&n<=a:p>0?l<=o&&o<=u:u<=o&&o<=l;return!1}function qn(e,t){var r=xe(e),i=xe(t),s=r.type,n=i.type;switch(s){case"Point":switch(n){case"MultiPoint":return Nn(r,i);case"LineString":return Ze(r,i,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return I(r,i,{ignoreBoundary:!0});default:throw new Error("feature2 "+n+" geometry not supported")}case"MultiPoint":switch(n){case"MultiPoint":return Bn(r,i);case"LineString":return Dn(r,i);case"Polygon":case"MultiPolygon":return Hn(r,i);default:throw new Error("feature2 "+n+" geometry not supported")}case"LineString":switch(n){case"LineString":return Un(r,i);case"Polygon":case"MultiPolygon":return Wn(r,i);default:throw new Error("feature2 "+n+" geometry not supported")}case"Polygon":switch(n){case"Polygon":case"MultiPolygon":return Vn(r,i);default:throw new Error("feature2 "+n+" geometry not supported")}default:throw new Error("feature1 "+s+" geometry not supported")}}function Nn(e,t){var r,i=!1;for(r=0;r<t.coordinates.length;r++)if(gi(t.coordinates[r],e.coordinates)){i=!0;break}return i}function Bn(e,t){for(var r=0;r<e.coordinates.length;r++){for(var i=!1,s=0;s<t.coordinates.length;s++)gi(e.coordinates[r],t.coordinates[s])&&(i=!0);if(!i)return!1}return!0}function Dn(e,t){for(var r=!1,i=0;i<e.coordinates.length;i++){if(!Ze(e.coordinates[i],t))return!1;r||(r=Ze(e.coordinates[i],t,{ignoreEndVertices:!0}))}return r}function Hn(e,t){for(var r=!0,i=!1,s=0;s<e.coordinates.length;s++){if(i=I(e.coordinates[1],t),!i){r=!1;break}i=I(e.coordinates[1],t,{ignoreBoundary:!0})}return r&&i}function Un(e,t){for(var r=0;r<e.coordinates.length;r++)if(!Ze(e.coordinates[r],t))return!1;return!0}function Wn(e,t){var r=ue(t),i=ue(e);if(!mi(r,i))return!1;for(var s=!1,n=0;n<e.coordinates.length-1;n++){if(!I(e.coordinates[n],t))return!1;if(s||(s=I(e.coordinates[n],t,{ignoreBoundary:!0})),!s){var o=zn(e.coordinates[n],e.coordinates[n+1]);s=I(o,t,{ignoreBoundary:!0})}}return s}function Vn(e,t){var r=ue(e),i=ue(t);if(!mi(i,r))return!1;for(var s=0;s<e.coordinates[0].length;s++)if(!I(e.coordinates[0][s],t))return!1;return!0}function mi(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function gi(e,t){return e[0]===t[0]&&e[1]===t[1]}function zn(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var Kn=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,Le=(e,t,r,i)=>{for(var s=i>1?void 0:i?Gn(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Kn(t,r,s),s};const Qn=(e,t)=>t?jn(e,t):!0,Xn=(e,t)=>t?qn(e,t):!0;let vt=class extends F{reset(){we(this.filterObject),this.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),this.requestUpdate()}createRenderRoot(){return this}render(){return _(this.filterObject,()=>{var e;return g`
      <form style="display: inline">
      ${_e(["intersects","within"],t=>g`
          <label>
            <input
              type="radio"
              name="mode"
              .checked="${this.filterObject.state.mode===t||R}
              "
              value="${t}"
              @click="${()=>{this.filterObject.state.mode=t;const r=new CustomEvent("filter",{detail:{[this.filterObject.key]:{}}});this.dispatchEvent(r)}}"
            />
            <small>${t} filter geometry</small>
          </label>
        `)}
      </form>
      <eox-itemfilter-spatial-filter
        exportparts="map: spatial-filter-map"
        .geometry=${(e=this.filterObject.state)==null?void 0:e.geometry}
        @filter="${t=>{this.filterObject.state.geometry=t.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
      ></eox-itemfilter-spatial>
    `})}};Le([b()],vt.prototype,"filterObject",2);vt=Le([k("eox-itemfilter-spatial")],vt);let et=class extends F{render(){return g`<eox-map part="map" style="height: 400px"></eox-map>`}firstUpdated(){this.setup()}setup(){const e=[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...this.geometry&&{format:"GeoJSON"},...this.geometry&&{url:this.createFeatureUrl(this.geometry)}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://s2maps-tiles.eu/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}];this.eoxMap=this.renderRoot.querySelector("eox-map"),setTimeout(()=>{this.eoxMap.setLayers(e);const t=r=>{const i=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:r.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});this.dispatchEvent(i)};this.eoxMap.interactions.drawInteraction.on("drawend",r=>{t(r.feature),this.eoxMap.removeInteraction("drawInteraction")}),this.eoxMap.interactions.drawInteraction_modify.on("modifyend",r=>{t(r.features.getArray()[0])})},1e3)}createFeatureUrl(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}reset(){var t;const e=this.eoxMap.getLayerById("draw").getSource();((t=e.getFeatures())==null?void 0:t.length)>0&&(e.clear(),this.eoxMap.removeInteraction("drawInteraction_modify"),this.setup())}};Le([b()],et.prototype,"geometry",2);Le([G()],et.prototype,"eoxMap",2);et=Le([k("eox-itemfilter-spatial-filter")],et);var Yn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,yi=(e,t,r,i)=>{for(var s=i>1?void 0:i?Jn(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Yn(t,r,s),s};let bt=class extends F{constructor(){super(...arguments),this.inputHandler=()=>{const e=this.renderRoot.querySelector("input[type='text']");this.filterObject.keys.forEach(t=>{this.filterObject.state[t]=e.value}),this.filterObject.dirty=!0,this.filterObject.stringifiedState=e.value,this.dispatchEvent(new CustomEvent("filter"))},this.debouncedInputHandler=ti(this.inputHandler,500,{leading:!0})}reset(){const e=this.renderRoot.querySelector("input[type='text']");e.value="",we(this.filterObject),this.filterObject.dirty=!1,this.requestUpdate()}createRenderRoot(){return this}render(){return _(this.filterObject,()=>g`
        <style>
          input {
            max-height: 100%;
          }
        </style>
        <input
          type="text"
          placeholder="Type something..."
          data-cy="search"
          part="input-search"
          value="${Object.values(this.filterObject.state)[0]}"
          @input="${this.debouncedInputHandler}"
          @click=${e=>{e.stopPropagation()}}
        />
      `)}};yi([b()],bt.prototype,"filterObject",2);bt=yi([k("eox-itemfilter-text")],bt);var Zn=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,he=(e,t,r,i)=>{for(var s=i>1?void 0:i?eo(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Zn(t,r,s),s};let ne=class extends F{constructor(){super(...arguments),this.idProperty="id",this.items=[],this.titleProperty="title",this.unstyled=!1,this.inputText="",this.replaceInput=null,this._clickOutsideListener=()=>{this.items.forEach(e=>{delete e._inProgress}),this.requestUpdate()},this._keyboardEventListener=e=>{["Enter","Escape","Space"].includes(e.code)&&this._handleKeyboard(e.code)}}_handleKeyboard(e){var n,o,a,l,c,u;if(this.clientHeight===0)return;const t=this.items.find(h=>h._inProgress),r=(t==null?void 0:t.type)==="text"&&(t==null?void 0:t.dirty),i=this.renderRoot.querySelector("#inline-input"),s=(u=(c=(l=(a=(o=(n=this.renderRoot)==null?void 0:n.querySelector("[data-filter]"))==null?void 0:o.querySelector("eox-autocomplete"))==null?void 0:a.renderRoot)==null?void 0:l.querySelector("eox-selectionlist"))==null?void 0:c.renderRoot)==null?void 0:u.querySelector("li.highlighted");if(e=="Enter"&&s&&i.selectionStart&&(s.querySelector("input[type=checkbox]").dispatchEvent(new Event("change")),i.selectionStart=0,i.value="",i.focus()),["Escape","Space"].includes(e)||e=="Enter"&&r){t&&(delete t._inProgress,this.requestUpdate(),this.inputText="",this.renderRoot.querySelector("input").value="",this.renderRoot.querySelector("input").focus()),this.renderRoot.querySelector("[slot=content]").classList.remove("hidden");return}}_handleReset(e){e.forEach(t=>{we(t),delete t._inProgress,delete t.stringifiedState}),this.renderRoot.querySelector("[slot=content]").classList.remove("hidden"),this.requestUpdate(),this.dispatchEvent(new CustomEvent("filter"))}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",this._keyboardEventListener),window.addEventListener("click",this._clickOutsideListener)}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this._keyboardEventListener),window.removeEventListener("click",this._clickOutsideListener)}render(){return g`
      <style>
        :host,
        .container {
          display: flex;
        }
        ${this.unstyled?R:g`
              ${Ot} :host { position: relative; } .container { width: 100%;
              position: relative; border: 1px solid #00417066; border-radius:
              4px; height: 24px; padding: 5px; flex: 1; justify-content:
              space-between; cursor: text; transition: all 0.2s ease-in-out;
              overflow-x: auto; } .container:hover { border: 1px solid #004170;
              } .input-container { display: flex; flex: 1; align-items: center;
              } input, input:focus { height: 100%; border: none; outline: none;
              } .button-container { display: flex; align-items: center;
              justify-content: center; position: absolute; right: 1px; top: 5px;
              height: calc(100% - 10px); width: 34px; background: white; }
              button.icon { color: #004170; height: 24px; font-size: large;
              width: unset; } .container::-webkit-scrollbar { height: 2px; }
              .container::-webkit-scrollbar-thumb { background: lightgrey;
              border-radius: 2px; } .hidden {height: 0; padding: 0; border:
              none;} .hidden:hover {border: none}
            `}
      </style>
      <div
        class="container"
        part="container"
        @click=${e=>{var t;e.stopPropagation(),(t=this.renderRoot.querySelector("input[type=text]"))==null||t.focus()}}
      >
        <eox-itemfilter-chips
          .items=${this.items.filter(e=>e._inProgress||e.stringifiedState)}
          .titleProperty=${this.titleProperty}
          .unstyled=${this.unstyled}
          @items-selected=${e=>{this.items.forEach(t=>{e.detail.find(r=>r.id===t.id)||this._handleReset([t])})}}
          @click=${e=>{e.stopPropagation()}}
        ></eox-itemfilter-chips>
        <div class="input-container">
          <eox-dropdown .parent=${this} .unstyled=${this.unstyled}>
            <input
              id="inline-input"
              slot="trigger"
              type="text"
              placeholder="Type something..."
              @focus=${()=>{this.inputText="",this.requestUpdate()}}
              @input=${e=>{if(this.inputText=e.target.value.toLowerCase(),this.replaceInput){const t=this.renderRoot.querySelector("[data-filter]").renderRoot.querySelector("input")||this.renderRoot.querySelector("[data-filter]").renderRoot.querySelector("eox-autocomplete").renderRoot.querySelector("input");t&&(t.value=this.inputText,t.dispatchEvent(new Event("input")))}}}
            />
            <div slot="content">
              ${_(!this.items.find(e=>e._inProgress),()=>g`
                  <eox-selectionlist
                    .filter=${this.inputText}
                    .idProperty=${this.idProperty}
                    .titleProperty=${this.titleProperty}
                    .items=${this.items.filter(e=>!e.stringifiedState)}
                    .multiple=${!1}
                    .selectedItems=${this.items.filter(e=>e.stringifiedState)}
                    .unstyled=${this.unstyled}
                    @click=${e=>{e.stopPropagation()}}
                    @items-highlighted=${()=>{}}
                    @items-selected=${e=>{const t=e.detail;t.length>0&&(t[t.length-1]._inProgress=!0,this.renderRoot.querySelector("input[slot=trigger]").value="",this.inputText="",this.requestUpdate());const r=this.items.find(i=>i._inProgress);(r&&r.type==="text"||r.type==="multiselect"||r.type==="select")&&(this.replaceInput=!0),this.replaceInput&&(setTimeout(()=>{if(r.type==="text")this.renderRoot.querySelector("[slot=content]").classList.add("hidden");else if(r.type==="multiselect"||r.type==="select"){const i=this.renderRoot.querySelector("[data-filter]").renderRoot.querySelector("eox-autocomplete");i.renderRoot.querySelector("eox-dropdown").open=!0,i.renderRoot.querySelector(".container").classList.add("hidden")}}),this.renderRoot.querySelector("input").select(),this.renderRoot.querySelector("input").focus())}}
                  >
                  </eox-selectionlist>
                `)}
              ${_(this.items.find(e=>e._inProgress),()=>Ge`
            <eox-itemfilter-${pe(this.items.find(e=>e._inProgress).type)}
              data-filter=${this.items.find(e=>e._inProgress).id}
              slot="dropdown"
              .filterObject=${this.items.find(e=>e._inProgress)}
              .unstyled=${this.unstyled}
              .inline=${!0}
              @filter=${()=>{this.dispatchEvent(new CustomEvent("filter"))}}
              @click=${e=>{e.stopPropagation()}}
            ></eox-itemfilter-${pe(this.items.find(e=>e._inProgress).type)}>
  `)}
            </div>
          </eox-dropdown>
        </div>
      </div>
      ${_(this.items.filter(e=>e.stringifiedState||e._inProgress).length>0,()=>g`
          <div class="button-container">
            <button
              class="icon"
              @click=${()=>{this._handleReset(this.items.filter(e=>e.stringifiedState||e._inProgress))}}
            >
              ✕
            </button>
          </div>
        `)}
    `}};he([b()],ne.prototype,"idProperty",2);he([b()],ne.prototype,"items",2);he([b()],ne.prototype,"titleProperty",2);he([b()],ne.prototype,"unstyled",2);he([G()],ne.prototype,"inputText",2);he([G()],ne.prototype,"replaceInput",2);ne=he([k("eox-itemfilter-inline")],ne);function J(e){return Array.isArray?Array.isArray(e):xi(e)==="[object Array]"}const to=1/0;function ro(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-to?"-0":t}function io(e){return e==null?"":ro(e)}function V(e){return typeof e=="string"}function vi(e){return typeof e=="number"}function so(e){return e===!0||e===!1||no(e)&&xi(e)=="[object Boolean]"}function bi(e){return typeof e=="object"}function no(e){return bi(e)&&e!==null}function M(e){return e!=null}function dt(e){return!e.trim().length}function xi(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const oo="Incorrect 'index' type",lo=e=>`Invalid value for key ${e}`,ao=e=>`Pattern length exceeds max of ${e}.`,co=e=>`Missing ${e} property in key`,uo=e=>`Property 'weight' in key '${e}' must be a positive integer`,sr=Object.prototype.hasOwnProperty;class ho{constructor(t){this._keys=[],this._keyMap={};let r=0;t.forEach(i=>{let s=wi(i);this._keys.push(s),this._keyMap[s.id]=s,r+=s.weight}),this._keys.forEach(i=>{i.weight/=r})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function wi(e){let t=null,r=null,i=null,s=1,n=null;if(V(e)||J(e))i=e,t=nr(e),r=xt(e);else{if(!sr.call(e,"name"))throw new Error(co("name"));const o=e.name;if(i=o,sr.call(e,"weight")&&(s=e.weight,s<=0))throw new Error(uo(o));t=nr(o),r=xt(o),n=e.getFn}return{path:t,id:r,weight:s,src:i,getFn:n}}function nr(e){return J(e)?e:e.split(".")}function xt(e){return J(e)?e.join("."):e}function fo(e,t){let r=[],i=!1;const s=(n,o,a)=>{if(M(n))if(!o[a])r.push(n);else{let l=o[a];const c=n[l];if(!M(c))return;if(a===o.length-1&&(V(c)||vi(c)||so(c)))r.push(io(c));else if(J(c)){i=!0;for(let u=0,h=c.length;u<h;u+=1)s(c[u],o,a+1)}else o.length&&s(c,o,a+1)}};return s(e,V(t)?t.split("."):t,0),i?r:r[0]}const po={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},mo={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},go={location:0,threshold:.6,distance:100},yo={useExtendedSearch:!1,getFn:fo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var v={...mo,...po,...go,...yo};const vo=/[^ ]+/g;function bo(e=1,t=3){const r=new Map,i=Math.pow(10,t);return{get(s){const n=s.match(vo).length;if(r.has(n))return r.get(n);const o=1/Math.pow(n,.5*e),a=parseFloat(Math.round(o*i)/i);return r.set(n,a),a},clear(){r.clear()}}}class Dt{constructor({getFn:t=v.getFn,fieldNormWeight:r=v.fieldNormWeight}={}){this.norm=bo(r,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((r,i)=>{this._keysMap[r.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,V(this.docs[0])?this.docs.forEach((t,r)=>{this._addString(t,r)}):this.docs.forEach((t,r)=>{this._addObject(t,r)}),this.norm.clear())}add(t){const r=this.size();V(t)?this._addString(t,r):this._addObject(t,r)}removeAt(t){this.records.splice(t,1);for(let r=t,i=this.size();r<i;r+=1)this.records[r].i-=1}getValueForItemAtKeyId(t,r){return t[this._keysMap[r]]}size(){return this.records.length}_addString(t,r){if(!M(t)||dt(t))return;let i={v:t,i:r,n:this.norm.get(t)};this.records.push(i)}_addObject(t,r){let i={i:r,$:{}};this.keys.forEach((s,n)=>{let o=s.getFn?s.getFn(t):this.getFn(t,s.path);if(M(o)){if(J(o)){let a=[];const l=[{nestedArrIndex:-1,value:o}];for(;l.length;){const{nestedArrIndex:c,value:u}=l.pop();if(M(u))if(V(u)&&!dt(u)){let h={v:u,i:c,n:this.norm.get(u)};a.push(h)}else J(u)&&u.forEach((h,f)=>{l.push({nestedArrIndex:f,value:h})})}i.$[n]=a}else if(V(o)&&!dt(o)){let a={v:o,n:this.norm.get(o)};i.$[n]=a}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function Ei(e,t,{getFn:r=v.getFn,fieldNormWeight:i=v.fieldNormWeight}={}){const s=new Dt({getFn:r,fieldNormWeight:i});return s.setKeys(e.map(wi)),s.setSources(t),s.create(),s}function xo(e,{getFn:t=v.getFn,fieldNormWeight:r=v.fieldNormWeight}={}){const{keys:i,records:s}=e,n=new Dt({getFn:t,fieldNormWeight:r});return n.setKeys(i),n.setIndexRecords(s),n}function je(e,{errors:t=0,currentLocation:r=0,expectedLocation:i=0,distance:s=v.distance,ignoreLocation:n=v.ignoreLocation}={}){const o=t/e.length;if(n)return o;const a=Math.abs(i-r);return s?o+a/s:a?1:o}function wo(e=[],t=v.minMatchCharLength){let r=[],i=-1,s=-1,n=0;for(let o=e.length;n<o;n+=1){let a=e[n];a&&i===-1?i=n:!a&&i!==-1&&(s=n-1,s-i+1>=t&&r.push([i,s]),i=-1)}return e[n-1]&&n-i>=t&&r.push([i,n-1]),r}const ae=32;function Eo(e,t,r,{location:i=v.location,distance:s=v.distance,threshold:n=v.threshold,findAllMatches:o=v.findAllMatches,minMatchCharLength:a=v.minMatchCharLength,includeMatches:l=v.includeMatches,ignoreLocation:c=v.ignoreLocation}={}){if(t.length>ae)throw new Error(ao(ae));const u=t.length,h=e.length,f=Math.max(0,Math.min(i,h));let d=n,p=f;const m=a>1||l,x=m?Array(h):[];let y;for(;(y=e.indexOf(t,p))>-1;){let O=je(t,{currentLocation:y,expectedLocation:f,distance:s,ignoreLocation:c});if(d=Math.min(O,d),p=y+u,m){let C=0;for(;C<u;)x[y+C]=1,C+=1}}p=-1;let $=[],w=1,P=u+h;const S=1<<u-1;for(let O=0;O<u;O+=1){let C=0,q=P;for(;C<q;)je(t,{errors:O,currentLocation:f+q,expectedLocation:f,distance:s,ignoreLocation:c})<=d?C=q:P=q,q=Math.floor((P-C)/2+C);P=q;let Ht=Math.max(1,f-q+1),ct=o?h:Math.min(f+q,h)+u,de=Array(ct+2);de[ct+1]=(1<<O)-1;for(let N=ct;N>=Ht;N-=1){let ke=N-1,Ut=r[e.charAt(ke)];if(m&&(x[ke]=+!!Ut),de[N]=(de[N+1]<<1|1)&Ut,O&&(de[N]|=($[N+1]|$[N])<<1|1|$[N+1]),de[N]&S&&(w=je(t,{errors:O,currentLocation:ke,expectedLocation:f,distance:s,ignoreLocation:c}),w<=d)){if(d=w,p=ke,p<=f)break;Ht=Math.max(1,2*f-p)}}if(je(t,{errors:O+1,currentLocation:f,expectedLocation:f,distance:s,ignoreLocation:c})>d)break;$=de}const E={isMatch:p>=0,score:Math.max(.001,w)};if(m){const O=wo(x,a);O.length?l&&(E.indices=O):E.isMatch=!1}return E}function $o(e){let t={};for(let r=0,i=e.length;r<i;r+=1){const s=e.charAt(r);t[s]=(t[s]||0)|1<<i-r-1}return t}class $i{constructor(t,{location:r=v.location,threshold:i=v.threshold,distance:s=v.distance,includeMatches:n=v.includeMatches,findAllMatches:o=v.findAllMatches,minMatchCharLength:a=v.minMatchCharLength,isCaseSensitive:l=v.isCaseSensitive,ignoreLocation:c=v.ignoreLocation}={}){if(this.options={location:r,threshold:i,distance:s,includeMatches:n,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(f,d)=>{this.chunks.push({pattern:f,alphabet:$o(f),startIndex:d})},h=this.pattern.length;if(h>ae){let f=0;const d=h%ae,p=h-d;for(;f<p;)u(this.pattern.substr(f,ae),f),f+=ae;if(d){const m=h-ae;u(this.pattern.substr(m),m)}}else u(this.pattern,0)}searchIn(t){const{isCaseSensitive:r,includeMatches:i}=this.options;if(r||(t=t.toLowerCase()),this.pattern===t){let p={isMatch:!0,score:0};return i&&(p.indices=[[0,t.length-1]]),p}const{location:s,distance:n,threshold:o,findAllMatches:a,minMatchCharLength:l,ignoreLocation:c}=this.options;let u=[],h=0,f=!1;this.chunks.forEach(({pattern:p,alphabet:m,startIndex:x})=>{const{isMatch:y,score:$,indices:w}=Eo(t,p,m,{location:s+x,distance:n,threshold:o,findAllMatches:a,minMatchCharLength:l,includeMatches:i,ignoreLocation:c});y&&(f=!0),h+=$,y&&w&&(u=[...u,...w])});let d={isMatch:f,score:f?h/this.chunks.length:1};return f&&i&&(d.indices=u),d}}class oe{constructor(t){this.pattern=t}static isMultiMatch(t){return or(t,this.multiRegex)}static isSingleMatch(t){return or(t,this.singleRegex)}search(){}}function or(e,t){const r=e.match(t);return r?r[1]:null}class So extends oe{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const r=t===this.pattern;return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class _o extends oe{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const i=t.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,t.length-1]}}}class Oo extends oe{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const r=t.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class Po extends oe{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const r=!t.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class Ao extends oe{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const r=t.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Co extends oe{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const r=!t.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class Si extends oe{constructor(t,{location:r=v.location,threshold:i=v.threshold,distance:s=v.distance,includeMatches:n=v.includeMatches,findAllMatches:o=v.findAllMatches,minMatchCharLength:a=v.minMatchCharLength,isCaseSensitive:l=v.isCaseSensitive,ignoreLocation:c=v.ignoreLocation}={}){super(t),this._bitapSearch=new $i(t,{location:r,threshold:i,distance:s,includeMatches:n,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class _i extends oe{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let r=0,i;const s=[],n=this.pattern.length;for(;(i=t.indexOf(this.pattern,r))>-1;)r=i+n,s.push([i,r-1]);const o=!!s.length;return{isMatch:o,score:o?0:1,indices:s}}}const wt=[So,_i,Oo,Po,Co,Ao,_o,Si],lr=wt.length,Mo=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ro="|";function Lo(e,t={}){return e.split(Ro).map(r=>{let i=r.trim().split(Mo).filter(n=>n&&!!n.trim()),s=[];for(let n=0,o=i.length;n<o;n+=1){const a=i[n];let l=!1,c=-1;for(;!l&&++c<lr;){const u=wt[c];let h=u.isMultiMatch(a);h&&(s.push(new u(h,t)),l=!0)}if(!l)for(c=-1;++c<lr;){const u=wt[c];let h=u.isSingleMatch(a);if(h){s.push(new u(h,t));break}}}return s})}const ko=new Set([Si.type,_i.type]);class Io{constructor(t,{isCaseSensitive:r=v.isCaseSensitive,includeMatches:i=v.includeMatches,minMatchCharLength:s=v.minMatchCharLength,ignoreLocation:n=v.ignoreLocation,findAllMatches:o=v.findAllMatches,location:a=v.location,threshold:l=v.threshold,distance:c=v.distance}={}){this.query=null,this.options={isCaseSensitive:r,includeMatches:i,minMatchCharLength:s,findAllMatches:o,ignoreLocation:n,location:a,threshold:l,distance:c},this.pattern=r?t:t.toLowerCase(),this.query=Lo(this.pattern,this.options)}static condition(t,r){return r.useExtendedSearch}searchIn(t){const r=this.query;if(!r)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:s}=this.options;t=s?t:t.toLowerCase();let n=0,o=[],a=0;for(let l=0,c=r.length;l<c;l+=1){const u=r[l];o.length=0,n=0;for(let h=0,f=u.length;h<f;h+=1){const d=u[h],{isMatch:p,indices:m,score:x}=d.search(t);if(p){if(n+=1,a+=x,i){const y=d.constructor.type;ko.has(y)?o=[...o,...m]:o.push(m)}}else{a=0,n=0,o.length=0;break}}if(n){let h={isMatch:!0,score:a/n};return i&&(h.indices=o),h}}return{isMatch:!1,score:1}}}const Et=[];function To(...e){Et.push(...e)}function $t(e,t){for(let r=0,i=Et.length;r<i;r+=1){let s=Et[r];if(s.condition(e,t))return new s(e,t)}return new $i(e,t)}const tt={AND:"$and",OR:"$or"},St={PATH:"$path",PATTERN:"$val"},_t=e=>!!(e[tt.AND]||e[tt.OR]),jo=e=>!!e[St.PATH],Fo=e=>!J(e)&&bi(e)&&!_t(e),ar=e=>({[tt.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Oi(e,t,{auto:r=!0}={}){const i=s=>{let n=Object.keys(s);const o=jo(s);if(!o&&n.length>1&&!_t(s))return i(ar(s));if(Fo(s)){const l=o?s[St.PATH]:n[0],c=o?s[St.PATTERN]:s[l];if(!V(c))throw new Error(lo(l));const u={keyId:xt(l),pattern:c};return r&&(u.searcher=$t(c,t)),u}let a={children:[],operator:n[0]};return n.forEach(l=>{const c=s[l];J(c)&&c.forEach(u=>{a.children.push(i(u))})}),a};return _t(e)||(e=ar(e)),i(e)}function qo(e,{ignoreFieldNorm:t=v.ignoreFieldNorm}){e.forEach(r=>{let i=1;r.matches.forEach(({key:s,norm:n,score:o})=>{const a=s?s.weight:null;i*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(t?1:n))}),r.score=i})}function No(e,t){const r=e.matches;t.matches=[],M(r)&&r.forEach(i=>{if(!M(i.indices)||!i.indices.length)return;const{indices:s,value:n}=i;let o={indices:s,value:n};i.key&&(o.key=i.key.src),i.idx>-1&&(o.refIndex=i.idx),t.matches.push(o)})}function Bo(e,t){t.score=e.score}function Do(e,t,{includeMatches:r=v.includeMatches,includeScore:i=v.includeScore}={}){const s=[];return r&&s.push(No),i&&s.push(Bo),e.map(n=>{const{idx:o}=n,a={item:t[o],refIndex:o};return s.length&&s.forEach(l=>{l(n,a)}),a})}class $e{constructor(t,r={},i){this.options={...v,...r},this.options.useExtendedSearch,this._keyStore=new ho(this.options.keys),this.setCollection(t,i)}setCollection(t,r){if(this._docs=t,r&&!(r instanceof Dt))throw new Error(oo);this._myIndex=r||Ei(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){M(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const r=[];for(let i=0,s=this._docs.length;i<s;i+=1){const n=this._docs[i];t(n,i)&&(this.removeAt(i),i-=1,s-=1,r.push(n))}return r}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:r=-1}={}){const{includeMatches:i,includeScore:s,shouldSort:n,sortFn:o,ignoreFieldNorm:a}=this.options;let l=V(t)?V(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return qo(l,{ignoreFieldNorm:a}),n&&l.sort(o),vi(r)&&r>-1&&(l=l.slice(0,r)),Do(l,this._docs,{includeMatches:i,includeScore:s})}_searchStringList(t){const r=$t(t,this.options),{records:i}=this._myIndex,s=[];return i.forEach(({v:n,i:o,n:a})=>{if(!M(n))return;const{isMatch:l,score:c,indices:u}=r.searchIn(n);l&&s.push({item:n,idx:o,matches:[{score:c,value:n,norm:a,indices:u}]})}),s}_searchLogical(t){const r=Oi(t,this.options),i=(a,l,c)=>{if(!a.children){const{keyId:h,searcher:f}=a,d=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(l,h),searcher:f});return d&&d.length?[{idx:c,item:l,matches:d}]:[]}const u=[];for(let h=0,f=a.children.length;h<f;h+=1){const d=a.children[h],p=i(d,l,c);if(p.length)u.push(...p);else if(a.operator===tt.AND)return[]}return u},s=this._myIndex.records,n={},o=[];return s.forEach(({$:a,i:l})=>{if(M(a)){let c=i(r,a,l);c.length&&(n[l]||(n[l]={idx:l,item:a,matches:[]},o.push(n[l])),c.forEach(({matches:u})=>{n[l].matches.push(...u)}))}}),o}_searchObjectList(t){const r=$t(t,this.options),{keys:i,records:s}=this._myIndex,n=[];return s.forEach(({$:o,i:a})=>{if(!M(o))return;let l=[];i.forEach((c,u)=>{l.push(...this._findMatches({key:c,value:o[u],searcher:r}))}),l.length&&n.push({idx:a,item:o,matches:l})}),n}_findMatches({key:t,value:r,searcher:i}){if(!M(r))return[];let s=[];if(J(r))r.forEach(({v:n,i:o,n:a})=>{if(!M(n))return;const{isMatch:l,score:c,indices:u}=i.searchIn(n);l&&s.push({score:c,key:t,value:n,idx:o,norm:a,indices:u})});else{const{v:n,n:o}=r,{isMatch:a,score:l,indices:c}=i.searchIn(n);a&&s.push({score:l,key:t,value:n,norm:o,indices:c})}return s}}$e.version="7.0.0";$e.createIndex=Ei;$e.parseIndex=xo;$e.config=v;$e.parseQuery=Oi;To(Io);const Ho=(e,t="highlight",r="title")=>{const i=(n,o,a)=>{const l=o.split(".");let c;for(c=0;c<l.length-1;c++)n=n[l[c]];n[l[c]]=a},s=(n,o=[])=>{let a="",l=0;return o.forEach(c=>{const u=c[1]+1;a+=[n.substring(l,c[0]),`<mark class="${t}">`,n.substring(c[0],u),"</mark>"].join(""),l=u}),a+=n.substring(l),a};return e.filter(({matches:n})=>n&&n.length).map(({item:n,matches:o})=>{const a={};for(const[l,c]of Object.entries(n))a[l]=c;return o.forEach(l=>{l.key===r&&i(a,l.key,s(l.value,l.indices))}),a})};let Pi;const Uo=(e,t)=>{Pi=new $e(e,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...t})},Wo=async(e,t,r)=>{const i=Object.entries(t).filter(([,a])=>a.type==="text"||a.type==="select"||a.type==="multiselect").reduce((a,[l,c])=>{const u="$or",h=[],f=(d,p)=>{const m={};c.type==="text"?m[d]=`${p}`:m[l]=`="${d}"`,h.push(m)};return Object.entries(c.state).filter(([,d])=>d).forEach(([d,p])=>f(d,p)),h.length>0&&a.push({[u]:h}),a},[]);let s;if(!(i.length>0)&&r.matchAllWhenEmpty!==!1)s=e;else{const a={$and:[...i]},l=Pi.search(a);s=r.enableHighlighting?Ho(l,"highlight",r.titleProperty):l.map(c=>c.item)}const n=Object.entries(t).filter(([,a])=>a.type==="range").reduce((a,[l,c])=>(a[l]={min:c.state.min,max:c.state.max,format:c.format},a),{});if(Object.keys(n).length>0){const a=[];for(let l=0;l<s.length;l++){const c={};for(const[u,h]of Object.entries(n)){const f=d=>h.format==="date"?me(d).unix():d;Object.prototype.hasOwnProperty.call(s[l],u)?Array.isArray(s[l][u])?c[u]=n[u].min<=f(s[l][u][1])&&f(s[l][u][0])<=n[u].max:f(s[l][u])>=n[u].min&&f(s[l][u])<=n[u].max?c[u]=!0:c[u]=!1:c[u]=!0}Object.values(c).every(u=>!!u)&&a.push(s[l])}s=[...a]}const o=Object.entries(t).filter(([,a])=>a.type==="spatial").reduce((a,[l,c])=>(a[l]={geometry:c.state.geometry,mode:c.state.mode},a),{});if(Object.values(o).map(a=>a.geometry).filter(a=>!!a).length>0){const a=[];for(let l=0;l<s.length;l++){const c={};for(const u of Object.keys(o)){const h=o[u].mode||"within";Object.prototype.hasOwnProperty.call(s[l],u)&&(h==="within"?Xn(s[l][u],o[u].geometry):Qn(s[l][u],o[u].geometry))?c[u]=!0:c[u]=!1}Object.values(c).every(u=>!!u)&&a.push(s[l])}s=[...a]}return s},Vo=async(e,t,r)=>(await(await fetch(`${r.externalFilter(e,t)}`)).json()).features;var zo=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,te=(e,t,r,i)=>{for(var s=i>1?void 0:i?Ko(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&zo(t,r,s),s};class cr{constructor(){this.aggregateResults=void 0,this.enableHighlighting=!1,this.filterProperties=[],this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.onFilter=()=>{},this.onSelect=()=>{},this.showResults=!0,this.titleProperty="title",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0}}let H=class extends Ti{constructor(){super(...arguments),this._resultAggregation=[],this.filters={},this.items=[],this._config=new cr,this.apply=e=>{this.items=e.map((r,i)=>({id:`item-${i}`,...r})),this._config.filterProperties.length&&this._config.filterProperties.forEach(r=>{const i={},s=n=>r.format==="date"?me(n).unix():parseInt(n);this.items.forEach(n=>{if(r.type==="range"){if(Array.isArray(n[r.key])){const o=[s(n[r.key][0]),s(n[r.key][1])];i.min=i.min!==void 0?Math.min(i.min,o[0]):o[0],i.max=i.max!==void 0?Math.max(i.max,o[1]):o[1]}else{const o=s(n[r.key]);i.min=i.min!==void 0?Math.min(i.min,o):o,i.max=i.max!==void 0?Math.max(i.max,o):o}return}Array.isArray(n[r.key])?n[r.key].forEach(o=>{i[o]=void 0}):r.type==="spatial"?(i.geometry=void 0,i.mode=r.mode||"intersects"):i[n[r.key]]=void 0}),this.filters[r.key||r.keys.join("|")]={...r,type:r.type||"multiselect",state:{...i,...r.state},...r.state&&{dirty:!1},...r.type==="range"&&{min:i.min,max:i.max,format:r.format}}}),this._config.matchAllWhenEmpty!==!1&&(this.results=this.sortResults(this.items),this.requestUpdate()),this._config.aggregateResults&&(this._resultAggregation=[...new Set(this.items.reduce((r,i)=>r.concat(i[this._config.aggregateResults]),[]))].sort((r,i)=>r.localeCompare(i)));const t=[];Object.values(this.filters).forEach(r=>{r.type==="text"?r.keys.forEach(i=>{t.includes(i)||t.push(i)}):(r.type==="select"||r.type==="multiselect")&&(t.includes(r.key)||t.push(r.key))}),Uo(this.items,{keys:t,...this._config.fuseConfig}),this.search()}}set config(e){const t=this._config;this._config={...new cr,...e},this.requestUpdate("config",t)}get config(){return this._config}async search(){let e;this.config.externalFilter?e=await Vo(this.items,this.filters,this._config):e=await Wo(this.items,this.filters,this._config),this.results=this.sortResults(e),this._config.onFilter(this.results,this.filters)}aggregateResults(e,t){return e.filter(r=>{const i=r[this._config.aggregateResults];let s;return this.filters[this._config.aggregateResults]&&(s=Object.keys(this.filters[this._config.aggregateResults]).filter(o=>this.filters[this._config.aggregateResults].state[o])),(s!=null&&s.length?s.includes(t):!0)&&Array.isArray(i)?i.includes(t):i===t})}sortResults(e){return[...e].sort((t,r)=>t[this._config.titleProperty].localeCompare(r[this._config.titleProperty]))}resetFilters(){this.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{e.reset()}),this.search()}toggleAccordion(e){let t;if(e.detail?t=e.detail.target:t=e.target,t.classList.contains("details-filter")){if(!t.open||this.config.expandMultipleFilters)return;this.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const i=r.shadowRoot.querySelector(".details-filter");i&&i!==t&&i.removeAttribute("open")})}else{if(!t.open||this.config.expandMultipleResults)return;this.shadowRoot.querySelectorAll("details").forEach(r=>{r!==t&&r.removeAttribute("open")})}}render(){return g`
      <style>
        ${Pt}
        ${!this.unstyled&&At}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        @submit="${e=>e.preventDefault()}"
      >
        ${_(this._config.inlineMode,()=>g`
            <eox-itemfilter-inline
              .items=${Object.values(this.filters)}
              .unstyled=${this.unstyled}
              @filter=${()=>this.search()}
            >
            </eox-itemfilter-inline>
          `,()=>g`
            ${_(this._config.filterProperties.length,()=>g`
                <section
                  class="${this.config.inlineMode?"inline":R}"
                >
                  ${_(!this.config.inlineMode,()=>g`
                        <slot name="filterstitle"
                          ><h4 style="margin-top: 8px">Filters</h4></slot
                        >
                      `)}
                  <ul id="filters">
                    ${_e(Object.values(this.filters),e=>Ge`
                    <li>
                      ${e.featured?Ge`
                            <eox-itemfilter-${pe(e.type)}
                              slot="filter"
                              data-type="filter"
                              .filterObject=${e}
                              .unstyled=${this.unstyled}
                              @filter="${()=>this.search()}"
                            ></eox-itemfilter-${pe(e.type)}>
                          `:Ge`
                            <eox-itemfilter-expandcontainer
                              .filterObject=${e}
                              .unstyled=${this.unstyled}
                              @details-toggled=${this.toggleAccordion}
                            >
                              <eox-itemfilter-${pe(e.type)}
                                slot="filter"
                                data-type="filter"
                                data-filter="${e.key}"
                                .filterObject=${e}
                                .unstyled=${this.unstyled}
                                @filter="${()=>this.search()}"
                              ></eox-itemfilter-${pe(e.type)}>
                            </eox-itemfilter-expandcontainer>
                        `}
                    </li>
                  `)}
                  </ul>
                  ${_(this._config.filterProperties&&Object.values(this.filters).map(e=>e.dirty).filter(e=>e).length>0,()=>g`
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
            ${_(this.config.showResults&&this.results,()=>g`
                <section id="section-results">
                  <div>
                    <slot name="resultstitle"
                      ><h4 style="margin-top: 8px">Results</h4></slot
                    >
                  </div>
                  <div id="container-results" class="scroll">
                    ${this.results.length<1?g`
                          <small class="no-results">No matching items</small>
                        `:R}
                    <ul id="results" part="results">
                      ${this._config.aggregateResults?_e(this._resultAggregation.filter(e=>this.aggregateResults(this.results,e).length),e=>g`<details
                              class="details-results"
                              @toggle=${this.toggleAccordion}
                              ?open=${this._config.expandResults||R}
                            >
                              <summary>
                                <span class="title">
                                  ${e}
                                  <span class="count"
                                    >${this.aggregateResults(this.results,e).length}</span
                                  >
                                </span>
                              </summary>
                              <ul>
                                ${Wr(this.aggregateResults(this.results,e),t=>t.id,t=>{var r,i;return g`
                                    <li
                                      class=${((r=this.selectedResult)==null?void 0:r[this._config.titleProperty])===t[this._config.titleProperty]?"highlighted":R}
                                    >
                                      <label>
                                        <input
                                          data-cy="result-radio"
                                          type="radio"
                                          class="result-radio"
                                          name="result"
                                          id="${t.id}"
                                          ?checked=${((i=this.selectedResult)==null?void 0:i[this._config.titleProperty])===t[this._config.titleProperty]||R}
                                          @click=${()=>{this.selectedResult=t,this._config.onSelect(t)}}
                                        />
                                        ${_(this.hasTemplate("result"),()=>this.renderTemplate("result",t,`result-${t.id}`),()=>g`
                                            <span class="title"
                                              >${Wt(t[this._config.titleProperty])}</span
                                            >
                                          `)}
                                      </label>
                                    </li>
                                  `})}
                              </ul>
                            </details>`):_e(this.results,e=>g`<li part="result">
                                <label>
                                  <input
                                    type="radio"
                                    name="result"
                                    id="${e.id}"
                                    @click=${()=>{this.selectedResult=e,this._config.onSelect(e)}}
                                  />
                                  ${_(this.hasTemplate("result"),()=>this.renderTemplate("result",e,`result-${e.id}`),()=>g`
                                      <span class="title"
                                        >${Wt(e[this._config.titleProperty])}</span
                                      >
                                    `)}
                                </label>
                              </li>`)}
                    </ul>
                  </div>
                </section>
              `)}
          `)}
      </form>
    `}};te([G()],H.prototype,"filters",2);te([G()],H.prototype,"items",2);te([G()],H.prototype,"results",2);te([G()],H.prototype,"selectedResult",2);te([b({attribute:!1})],H.prototype,"config",1);te([b()],H.prototype,"apply",2);te([b({attribute:!1})],H.prototype,"styleOverride",2);te([b({type:Boolean})],H.prototype,"unstyled",2);H=te([k("eox-itemfilter")],H);const Go=[{archived:!1,code:"E10a2",description:"Actively managed total area from Sentinel-2 data",indicator:"Actively managed total area from Sentinel-2 data",themes:["agriculture"],title:"White Asparagus area [%]",name:"Actively managed total area from Sentinel-2 data",year:2e3,likes:4,years:[2e3,2e3],timestamp:"2023-06-14T13:56:38+00:00",datetime:["2023-06-14T10:56:38+00:00","2023-06-14T22:56:38+00:00"],bbox:[-90,60,-20,82],geometry:{type:"Polygon",coordinates:[[[-90,60],[-20,60],[-20,82],[-90,82]]]}},{archived:!1,code:"E10a9",description:"Agricultural Workers",indicator:"Agricultural Workers",themes:["agriculture"],title:"Workers availability [nr]",name:"Agricultural Workers",year:2020,likes:46,years:[2007,2020],timestamp:"2023-06-13T13:56:38+00:00",datetime:["2023-06-13T10:56:38+00:00","2023-06-13T22:56:38+00:00"],bbox:[0,0,10,10],geometry:{type:"Polygon",coordinates:[[[0,0],[10,0],[10,10],[0,10]]]}},{archived:!1,code:"N1",description:"Air Quality",indicator:"Air Quality",themes:["air"],title:"Sea ice freeboard",name:"Sea ice freeboard",year:2023,likes:34,years:[2008,2023],timestamp:"2023-06-12T13:56:38+00:00",datetime:["2023-06-12T10:56:38+00:00","2023-06-12T22:56:38+00:00"],bbox:[-180,-80,180,-61],geometry:{type:"Polygon",coordinates:[[[-180,-80],[180,-80],[180,-61],[-180,-61]]]}},{archived:!1,code:"E13o",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (all) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2022,likes:177,years:[2021,2022],timestamp:"2023-06-11T13:56:38+00:00",datetime:["2023-06-11T10:56:38+00:00","2023-06-11T22:56:38+00:00"]},{archived:!1,code:"E13p",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (cargo) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2016,likes:0,years:[2005,2016],timestamp:"2023-06-10T13:56:38+00:00",datetime:["2023-06-10T10:56:38+00:00","2023-06-10T22:56:38+00:00"]},{archived:!1,code:"E13q",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (tanker) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2017,likes:0,years:[2006,2017],timestamp:"2023-06-09T13:56:38+00:00",datetime:["2023-06-09T10:56:38+00:00","2023-06-09T22:56:38+00:00"]},{archived:!1,code:"E13r",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (others) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2003,likes:2,years:[2001,2003],timestamp:"2023-06-08T13:56:38+00:00",datetime:["2023-06-08T10:56:38+00:00","2023-06-08T22:56:38+00:00"]},{archived:!1,code:"C1",description:"Boat traffic - NO2 level",indicator:"Boat traffic - NO2 level",themes:["economy","air"],title:"Ships - NO2 Correlation",indicatorOverwrite:"Ports and Shipping - impact on air quality",name:"Boat traffic - NO2 level",year:2020,likes:65,years:[2015,2020],timestamp:"2023-06-07T13:56:38+00:00",datetime:["2023-06-07T10:56:38+00:00","2023-06-07T22:56:38+00:00"]},{archived:!1,code:"CDS1",description:"C3S Data",indicator:"C3S Data",themes:["air"],title:"Temperature",name:"C3S Data",year:2021,likes:34,years:[2021,2021],timestamp:"2023-06-06T13:56:38+00:00",datetime:["2023-06-06T10:56:38+00:00","2023-06-06T22:56:38+00:00"]},{archived:!1,code:"N1a",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level PM2.5 (model)",name:"CAMS Air Quality",year:2023,likes:88,years:[2e3,2023],timestamp:"2023-06-05T13:56:38+00:00",datetime:["2023-06-05T10:56:38+00:00","2023-06-05T22:56:38+00:00"]},{archived:!1,code:"N1b",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level NO2 (model)",name:"CAMS Air Quality",year:2022,likes:77,years:[2019,2022],timestamp:"2023-06-04T13:56:38+00:00",datetime:["2023-06-04T10:56:38+00:00","2023-06-04T22:56:38+00:00"]},{archived:!1,code:"N1c",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level PM10 (model)",name:"CAMS Air Quality",year:2018,likes:23,years:[2014,2018],timestamp:"2023-06-03T13:56:38+00:00",datetime:["2023-06-03T10:56:38+00:00","2023-06-03T22:56:38+00:00"]},{archived:!1,code:"N1d",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level O3 (model)",name:"CAMS Air Quality",year:2018,likes:56,years:[2017,2018],timestamp:"2023-06-02T13:56:38+00:00",datetime:["2023-06-02T10:56:38+00:00","2023-06-02T22:56:38+00:00"]},{archived:!1,code:"E13e",description:"Cargo ships in port based on AIS data",indicator:"Cargo ships in port based on AIS data",themes:["economy"],title:"Cargo Ships [nr]",name:"Cargo ships in port based on AIS data",year:2019,likes:11,years:[2018,2019],timestamp:"2023-06-01T13:56:38+00:00",datetime:["2023-06-01T10:56:38+00:00","2023-06-01T22:56:38+00:00"]},{archived:!1,code:"E13n",description:"Changes in traffic based on mobile data",indicator:"Changes in traffic based on mobile data",themes:["economy"],title:"Trucks transiting ports [%]",name:"Changes in traffic based on mobile data",year:2017,likes:8,years:[2015,2017],timestamp:"2023-05-29T13:56:38+00:00",datetime:["2023-05-29T10:56:38+00:00","2023-05-29T22:56:38+00:00"]},{archived:!1,code:"N3c",description:"CMEMS product",indicator:"CMEMS product",themes:["water"],title:"CHL-a concentration (map, 1km)",name:"CMEMS product",year:2015,likes:37,years:[2014,2015],timestamp:"2023-05-28T13:56:38+00:00",datetime:["2023-05-28T10:56:38+00:00","2023-05-28T22:56:38+00:00"]},{archived:!1,code:"CV",description:"Covid-19 cases",indicator:"Covid-19 cases",themes:["health"],title:"Covid-19 cases",name:"Covid-19 cases",year:2013,likes:4,years:[2001,2013],timestamp:"2023-05-27T13:56:38+00:00",datetime:["2023-05-27T10:56:38+00:00","2023-05-27T22:56:38+00:00"]},{archived:!1,code:"OW",description:"Covid-19 vaccinations",indicator:"Covid-19 vaccinations",themes:["health"],title:"Covid-19 vaccinations",name:"Covid-19 vaccinations",year:2016,likes:39,years:[2015,2016],timestamp:"2023-05-26T13:56:38+00:00",datetime:["2023-05-26T10:56:38+00:00","2023-05-26T22:56:38+00:00"]},{archived:!1,code:"E3",description:"Crude Oil and other input materials",indicator:"Crude Oil and other input materials",themes:["economy"],title:"Raw Material Inventory",name:"Crude Oil and other input materials",year:2020,likes:28,years:[2014,2020],timestamp:"2023-05-25T13:56:38+00:00",datetime:["2023-05-25T10:56:38+00:00","2023-05-25T22:56:38+00:00"]},{archived:!1,code:"E13l",description:"Cruise ships in port based on AIS data",indicator:"Cruise ships in port based on AIS data",themes:["economy"],title:"Cruise Ships [nr]",name:"Cruise ships in port based on AIS data",year:1999,likes:17,years:[1998,1999],timestamp:"2023-05-24T13:56:38+00:00",datetime:["2023-05-24T10:56:38+00:00","2023-05-24T22:56:38+00:00"]}],hl={title:"Elements/eox-itemfilter",tags:["autodocs"],component:"eox-itemfilter",render:e=>{const t=new H;return t.config=e,t.apply(Go),t}},Fe={args:{titleProperty:"title",filterProperties:[{keys:["title","themes"],title:"Search",type:"text",expanded:!0},{key:"themes",title:"Theme",type:"multiselect"},{key:"timestamp",type:"range",format:"date"},{key:"geometry",type:"spatial"}],aggregateResults:"themes",enableHighlighting:!0,onSelect:e=>{console.log(e)}}},qe={args:{titleProperty:"title",filterProperties:[{key:"themes",title:"Theme",type:"multiselect",expanded:!0,state:{air:!0,agriculture:!0}}]}},Ne={args:{inlineMode:!0,titleProperty:"title",filterProperties:[{key:"themes",id:"themes",title:"Theme",type:"multiselect",state:{air:null,agriculture:null}},{key:"timestamp",id:"date",title:"Date",type:"range",format:"date",state:{min:1685232950,max:1686454646}},{key:"geometry",id:"spatial",type:"spatial",title:"Spatial",state:{mode:"intersects"}},{key:"code",id:"code",title:"Code",type:"multiselect"},{keys:["title","themes"],title:"Search",id:"search",type:"text",expanded:!0,state:{title:"no2",themes:"no2"}}],onFilter:e=>console.log(e)}},Be={render:()=>g`
    <eox-autocomplete
      .items=${[{id:"a",title:"Autobus"},{id:"b",title:"Bicycle"},{id:"c",title:"Catalog"}]}
      @items-selected=${e=>{console.log(e.detail)}}
    ></eox-autocomplete>
  `},De={render:()=>g`
    <eox-autocomplete
      unstyled
      .items=${[{id:"a",title:"Autobus"},{id:"b",title:"Bicycle"},{id:"c",title:"Catalog"}]}
      @items-selected=${e=>{console.log(e.detail)}}
    ></eox-autocomplete>
  `},He={render:()=>g`
    <eox-autocomplete
      multiple
      .items=${[{id:"a",title:"Autobus"},{id:"b",title:"Bicycle"},{id:"c",title:"Catalog"}]}
      @items-selected=${e=>{console.log(e.detail)}}
    ></eox-autocomplete>
  `},Ue={render:()=>g`
    <eox-autocomplete
      multiple
      unstyled
      .items=${[{id:"a",title:"Autobus"},{id:"b",title:"Bicycle"},{id:"c",title:"Catalog"}]}
      @items-selected=${e=>{console.log(e.detail)}}
    ></eox-autocomplete>
  `},We={render:()=>g`
    <eox-itemfilter-chips
      .items=${[{id:"a",title:"Autobus"},{id:"b",title:"Bicycle"},{id:"c",title:"Catalog"}]}
      @items-selected=${e=>{console.log(e.detail)}}
    ></eox-itemfilter-chips>
  `},Ve={render:()=>g`
    <eox-itemfilter-chips
      .items=${[{id:"a",title:"Autobus"},{id:"b",title:"Bicycle"},{id:"c",title:"Catalog"}]}
      unstyled
      @items-selected=${e=>{console.log(e.detail)}}
    ></eox-itemfilter-chips>
  `},ze={render:()=>g`
    <eox-selectionlist
      .items=${[{id:"a",title:"Autobus"},{id:"b",title:"Bicycle"},{id:"c",title:"Catalog"}]}
      @items-selected=${e=>{console.log(e.detail)}}
    ></eox-selectionlist>
  `},Ke={render:()=>g`
    <eox-selectionlist
      multiple
      .items=${[{id:"a",title:"Autobus"},{id:"b",title:"Bicycle"},{id:"c",title:"Catalog"}]}
      .selectedItems=${[{id:"b",title:"Bicycle"}]}
      @items-selected=${e=>{console.log(e.detail)}}
    ></eox-selectionlist>
  `};var ur,hr,dr;Fe.parameters={...Fe.parameters,docs:{...(ur=Fe.parameters)==null?void 0:ur.docs,source:{originalSource:`{
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
}`,...(dr=(hr=Fe.parameters)==null?void 0:hr.docs)==null?void 0:dr.source}}};var fr,pr,mr;qe.parameters={...qe.parameters,docs:{...(fr=qe.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  args: {
    titleProperty: "title",
    filterProperties: [{
      key: "themes",
      title: "Theme",
      type: "multiselect",
      expanded: true,
      state: {
        air: true,
        agriculture: true
      }
    }]
  }
}`,...(mr=(pr=qe.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var gr,yr,vr;Ne.parameters={...Ne.parameters,docs:{...(gr=Ne.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: {
    inlineMode: true,
    titleProperty: "title",
    filterProperties: [{
      key: "themes",
      id: "themes",
      title: "Theme",
      type: "multiselect",
      state: {
        air: null,
        agriculture: null
      }
    }, {
      key: "timestamp",
      id: "date",
      title: "Date",
      type: "range",
      format: "date",
      state: {
        min: 1685232950,
        max: 1686454646
      }
    }, {
      key: "geometry",
      id: "spatial",
      type: "spatial",
      title: "Spatial",
      state: {
        mode: "intersects"
      }
    }, {
      key: "code",
      id: "code",
      title: "Code",
      type: "multiselect"
      // state: {
      //   air: true,
      //   agriculture: true,
      // },
    }, {
      keys: ["title", "themes"],
      title: "Search",
      id: "search",
      type: "text",
      expanded: true,
      state: {
        title: "no2",
        themes: "no2"
      }
    }],
    onFilter: items => console.log(items)
  }
}`,...(vr=(yr=Ne.parameters)==null?void 0:yr.docs)==null?void 0:vr.source}}};var br,xr,wr;Be.parameters={...Be.parameters,docs:{...(br=Be.parameters)==null?void 0:br.docs,source:{originalSource:`{
  render: () => html\`
    <eox-autocomplete
      .items=\${[{
    id: "a",
    title: "Autobus"
  }, {
    id: "b",
    title: "Bicycle"
  }, {
    id: "c",
    title: "Catalog"
  }]}
      @items-selected=\${evt => {
    console.log(evt.detail);
  }}
    ></eox-autocomplete>
  \`
}`,...(wr=(xr=Be.parameters)==null?void 0:xr.docs)==null?void 0:wr.source}}};var Er,$r,Sr;De.parameters={...De.parameters,docs:{...(Er=De.parameters)==null?void 0:Er.docs,source:{originalSource:`{
  render: () => html\`
    <eox-autocomplete
      unstyled
      .items=\${[{
    id: "a",
    title: "Autobus"
  }, {
    id: "b",
    title: "Bicycle"
  }, {
    id: "c",
    title: "Catalog"
  }]}
      @items-selected=\${evt => {
    console.log(evt.detail);
  }}
    ></eox-autocomplete>
  \`
}`,...(Sr=($r=De.parameters)==null?void 0:$r.docs)==null?void 0:Sr.source}}};var _r,Or,Pr;He.parameters={...He.parameters,docs:{...(_r=He.parameters)==null?void 0:_r.docs,source:{originalSource:`{
  render: () => html\`
    <eox-autocomplete
      multiple
      .items=\${[{
    id: "a",
    title: "Autobus"
  }, {
    id: "b",
    title: "Bicycle"
  }, {
    id: "c",
    title: "Catalog"
  }]}
      @items-selected=\${evt => {
    console.log(evt.detail);
  }}
    ></eox-autocomplete>
  \`
}`,...(Pr=(Or=He.parameters)==null?void 0:Or.docs)==null?void 0:Pr.source}}};var Ar,Cr,Mr;Ue.parameters={...Ue.parameters,docs:{...(Ar=Ue.parameters)==null?void 0:Ar.docs,source:{originalSource:`{
  render: () => html\`
    <eox-autocomplete
      multiple
      unstyled
      .items=\${[{
    id: "a",
    title: "Autobus"
  }, {
    id: "b",
    title: "Bicycle"
  }, {
    id: "c",
    title: "Catalog"
  }]}
      @items-selected=\${evt => {
    console.log(evt.detail);
  }}
    ></eox-autocomplete>
  \`
}`,...(Mr=(Cr=Ue.parameters)==null?void 0:Cr.docs)==null?void 0:Mr.source}}};var Rr,Lr,kr;We.parameters={...We.parameters,docs:{...(Rr=We.parameters)==null?void 0:Rr.docs,source:{originalSource:`{
  render: () => html\`
    <eox-itemfilter-chips
      .items=\${[{
    id: "a",
    title: "Autobus"
  }, {
    id: "b",
    title: "Bicycle"
  }, {
    id: "c",
    title: "Catalog"
  }]}
      @items-selected=\${evt => {
    console.log(evt.detail);
  }}
    ></eox-itemfilter-chips>
  \`
}`,...(kr=(Lr=We.parameters)==null?void 0:Lr.docs)==null?void 0:kr.source}}};var Ir,Tr,jr;Ve.parameters={...Ve.parameters,docs:{...(Ir=Ve.parameters)==null?void 0:Ir.docs,source:{originalSource:`{
  render: () => html\`
    <eox-itemfilter-chips
      .items=\${[{
    id: "a",
    title: "Autobus"
  }, {
    id: "b",
    title: "Bicycle"
  }, {
    id: "c",
    title: "Catalog"
  }]}
      unstyled
      @items-selected=\${evt => {
    console.log(evt.detail);
  }}
    ></eox-itemfilter-chips>
  \`
}`,...(jr=(Tr=Ve.parameters)==null?void 0:Tr.docs)==null?void 0:jr.source}}};var Fr,qr,Nr;ze.parameters={...ze.parameters,docs:{...(Fr=ze.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
  render: () => html\`
    <eox-selectionlist
      .items=\${[{
    id: "a",
    title: "Autobus"
  }, {
    id: "b",
    title: "Bicycle"
  }, {
    id: "c",
    title: "Catalog"
  }]}
      @items-selected=\${evt => {
    console.log(evt.detail);
  }}
    ></eox-selectionlist>
  \`
}`,...(Nr=(qr=ze.parameters)==null?void 0:qr.docs)==null?void 0:Nr.source}}};var Br,Dr,Hr;Ke.parameters={...Ke.parameters,docs:{...(Br=Ke.parameters)==null?void 0:Br.docs,source:{originalSource:`{
  render: () => html\`
    <eox-selectionlist
      multiple
      .items=\${[{
    id: "a",
    title: "Autobus"
  }, {
    id: "b",
    title: "Bicycle"
  }, {
    id: "c",
    title: "Catalog"
  }]}
      .selectedItems=\${[{
    id: "b",
    title: "Bicycle"
  }]}
      @items-selected=\${evt => {
    console.log(evt.detail);
  }}
    ></eox-selectionlist>
  \`
}`,...(Hr=(Dr=Ke.parameters)==null?void 0:Dr.docs)==null?void 0:Hr.source}}};const dl=["Primary","MultiSelect","InlineMode","Autocomplete","AutocompleteUnstyled","AutocompleteMultiple","AutocompleteMultipleUnstyled","Chips","ChipsUnstyled","SelectionList","SelectionListMultiple"];export{Be as Autocomplete,He as AutocompleteMultiple,Ue as AutocompleteMultipleUnstyled,De as AutocompleteUnstyled,We as Chips,Ve as ChipsUnstyled,Ne as InlineMode,qe as MultiSelect,Fe as Primary,ze as SelectionList,Ke as SelectionListMultiple,dl as __namedExportsOrder,hl as default};
//# sourceMappingURL=itemfilter.stories-5Fwa08o5.js.map
