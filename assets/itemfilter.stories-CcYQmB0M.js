import{s as T,x as m,T as O}from"./lit-element-Bq1Y8_dt.js";import{n as v,t as L,r as X}from"./state-DQZYXMyu.js";import{n as S}from"./when-BR7zwNJC.js";import{o as Se,a as kt}from"./unsafe-html-BGxJvhrT.js";import{c as hr,_ as dr}from"./index-DLQSxQ6n.js";import{n as De,i as fe}from"./static-ytOqqRfN.js";import"./toolcool-range-slider.min-BBXDELo7.js";import{d as pe}from"./dayjs.min-BIwLhz4I.js";import{r as Xr,T as Yr}from"./main-BYQt9p7Q.js";import{b as gt}from"./button-BLuGcwvd.js";import{c as Jr,r as Zr,s as ei}from"./slider-CDd1jv7H.js";import{a as Ge,g as ti}from"./_commonjsHelpers-BosuxZz1.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-CJWBCwlQ.js";import"./index-CBTDJjUK.js";const mt=`
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
`,yt=`
* {
  font-family: Roboto, sans-serif;
}

${gt}
${Jr}
${Zr}
${ei}

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

button.reset-icon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
eox-itemfilter-expandcontainer button.reset-icon {
  margin-left: 4px;
  margin-top: 1px;
}
eox-itemfilter-expandcontainer button.reset-icon:before {
  height: 16px;
  width: 16px;
}
  `;var ri=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,vt=(e,t,r,i)=>{for(var s=i>1?void 0:i?ii(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&ri(t,r,s),s};let Be=class extends T{handleDetailsToggle(e){this.dispatchEvent(new CustomEvent("details-toggled",{detail:e,bubbles:!0,composed:!0}))}_resetFilter(){this.querySelector("[slot='filter']").reset()}render(){return m`
      <style>
        ${mt}
        ${!this.unstyled&&yt}
      </style>
      <details
        @toggle="${this.handleDetailsToggle}"
        class="details-filter"
        part="details-filter"
        ?open=${this.filterObject.expanded||O}
      >
        <summary>
          <span
            class="title"
            style="${!this.filterObject.title&&"text-transform: capitalize"}"
          >
            ${this.filterObject.title||this.filterObject.key||"Filter"}
            <slot name="reset-button"></slot>
          </span>
        </summary>
        <div class="scroll">
          <slot name="filter"></slot>
        </div>
      </details>
    `}};vt([v({attribute:!1})],Be.prototype,"filterObject",2);vt([v()],Be.prototype,"unstyled",2);Be=vt([L("eox-itemfilter-expandcontainer")],Be);const xe=e=>{if(!e.dirty)return null;switch(e.type){case"multiselect":for(const r in e.state)e.state[r]=!1;break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const r in e.state)e.state[r]=!1;break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(r=>{e.state[r]=void 0});break}return delete e.stringifiedState,delete e.dirty,e},it=Math.min,ge=Math.max,He=Math.round,ke=Math.floor,te=e=>({x:e,y:e});function fr(e){return e.split("-")[0]}function si(e){return e.split("-")[1]}function ni(e){return e==="x"?"y":"x"}function oi(e){return e==="y"?"height":"width"}function pr(e){return["top","bottom"].includes(fr(e))?"y":"x"}function li(e){return ni(pr(e))}function gr(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function It(e,t,r){let{reference:i,floating:s}=e;const n=pr(t),o=li(t),a=oi(o),l=fr(t),c=n==="y",u=i.x+i.width/2-s.width/2,h=i.y+i.height/2-s.height/2,f=i[a]/2-s[a]/2;let d;switch(l){case"top":d={x:u,y:i.y-s.height};break;case"bottom":d={x:u,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:h};break;case"left":d={x:i.x-s.width,y:h};break;default:d={x:i.x,y:i.y}}switch(si(t)){case"start":d[o]-=f*(r&&c?-1:1);break;case"end":d[o]+=f*(r&&c?-1:1);break}return d}const ai=async(e,t,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:o}=r,a=n.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:s}),{x:u,y:h}=It(c,i,l),f=i,d={},p=0;for(let g=0;g<a.length;g++){const{name:x,fn:b}=a[g],{x:E,y:w,data:$,reset:_}=await b({x:u,y:h,initialPlacement:i,placement:f,strategy:s,middlewareData:d,rects:c,platform:o,elements:{reference:e,floating:t}});u=E??u,h=w??h,d={...d,[x]:{...d[x],...$}},_&&p<=50&&(p++,typeof _=="object"&&(_.placement&&(f=_.placement),_.rects&&(c=_.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:s}):_.rects),{x:u,y:h}=It(c,f,l)),g=-1)}return{x:u,y:h,placement:f,strategy:s,middlewareData:d}};function re(e){return mr(e)?(e.nodeName||"").toLowerCase():"#document"}function M(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Y(e){var t;return(t=(mr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function mr(e){return e instanceof Node||e instanceof M(e).Node}function K(e){return e instanceof Element||e instanceof M(e).Element}function U(e){return e instanceof HTMLElement||e instanceof M(e).HTMLElement}function Tt(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof M(e).ShadowRoot}function Me(e){const{overflow:t,overflowX:r,overflowY:i,display:s}=k(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+r)&&!["inline","contents"].includes(s)}function ci(e){return["table","td","th"].includes(re(e))}function bt(e){const t=xt(),r=k(e);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function ui(e){let t=ye(e);for(;U(t)&&!Qe(t);){if(bt(t))return t;t=ye(t)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Qe(e){return["html","body","#document"].includes(re(e))}function k(e){return M(e).getComputedStyle(e)}function Xe(e){return K(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ye(e){if(re(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Tt(e)&&e.host||Y(e);return Tt(t)?t.host:t}function yr(e){const t=ye(e);return Qe(t)?e.ownerDocument?e.ownerDocument.body:e.body:U(t)&&Me(t)?t:yr(t)}function _e(e,t,r){var i;t===void 0&&(t=[]),r===void 0&&(r=!0);const s=yr(e),n=s===((i=e.ownerDocument)==null?void 0:i.body),o=M(s);return n?t.concat(o,o.visualViewport||[],Me(s)?s:[],o.frameElement&&r?_e(o.frameElement):[]):t.concat(s,_e(s,[],r))}function vr(e){const t=k(e);let r=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=U(e),n=s?e.offsetWidth:r,o=s?e.offsetHeight:i,a=He(r)!==n||He(i)!==o;return a&&(r=n,i=o),{width:r,height:i,$:a}}function wt(e){return K(e)?e:e.contextElement}function me(e){const t=wt(e);if(!U(t))return te(1);const r=t.getBoundingClientRect(),{width:i,height:s,$:n}=vr(t);let o=(n?He(r.width):r.width)/i,a=(n?He(r.height):r.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const hi=te(0);function br(e){const t=M(e);return!xt()||!t.visualViewport?hi:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function di(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==M(e)?!1:t}function ae(e,t,r,i){t===void 0&&(t=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect(),n=wt(e);let o=te(1);t&&(i?K(i)&&(o=me(i)):o=me(e));const a=di(n,r,i)?br(n):te(0);let l=(s.left+a.x)/o.x,c=(s.top+a.y)/o.y,u=s.width/o.x,h=s.height/o.y;if(n){const f=M(n),d=i&&K(i)?M(i):i;let p=f,g=p.frameElement;for(;g&&i&&d!==p;){const x=me(g),b=g.getBoundingClientRect(),E=k(g),w=b.left+(g.clientLeft+parseFloat(E.paddingLeft))*x.x,$=b.top+(g.clientTop+parseFloat(E.paddingTop))*x.y;l*=x.x,c*=x.y,u*=x.x,h*=x.y,l+=w,c+=$,p=M(g),g=p.frameElement}}return gr({width:u,height:h,x:l,y:c})}const fi=[":popover-open",":modal"];function xr(e){return fi.some(t=>{try{return e.matches(t)}catch{return!1}})}function pi(e){let{elements:t,rect:r,offsetParent:i,strategy:s}=e;const n=s==="fixed",o=Y(i),a=t?xr(t.floating):!1;if(i===o||a&&n)return r;let l={scrollLeft:0,scrollTop:0},c=te(1);const u=te(0),h=U(i);if((h||!h&&!n)&&((re(i)!=="body"||Me(o))&&(l=Xe(i)),U(i))){const f=ae(i);c=me(i),u.x=f.x+i.clientLeft,u.y=f.y+i.clientTop}return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-l.scrollLeft*c.x+u.x,y:r.y*c.y-l.scrollTop*c.y+u.y}}function gi(e){return Array.from(e.getClientRects())}function wr(e){return ae(Y(e)).left+Xe(e).scrollLeft}function mi(e){const t=Y(e),r=Xe(e),i=e.ownerDocument.body,s=ge(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),n=ge(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let o=-r.scrollLeft+wr(e);const a=-r.scrollTop;return k(i).direction==="rtl"&&(o+=ge(t.clientWidth,i.clientWidth)-s),{width:s,height:n,x:o,y:a}}function yi(e,t){const r=M(e),i=Y(e),s=r.visualViewport;let n=i.clientWidth,o=i.clientHeight,a=0,l=0;if(s){n=s.width,o=s.height;const c=xt();(!c||c&&t==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:n,height:o,x:a,y:l}}function vi(e,t){const r=ae(e,!0,t==="fixed"),i=r.top+e.clientTop,s=r.left+e.clientLeft,n=U(e)?me(e):te(1),o=e.clientWidth*n.x,a=e.clientHeight*n.y,l=s*n.x,c=i*n.y;return{width:o,height:a,x:l,y:c}}function Ft(e,t,r){let i;if(t==="viewport")i=yi(e,r);else if(t==="document")i=mi(Y(e));else if(K(t))i=vi(t,r);else{const s=br(e);i={...t,x:t.x-s.x,y:t.y-s.y}}return gr(i)}function Er(e,t){const r=ye(e);return r===t||!K(r)||Qe(r)?!1:k(r).position==="fixed"||Er(r,t)}function bi(e,t){const r=t.get(e);if(r)return r;let i=_e(e,[],!1).filter(a=>K(a)&&re(a)!=="body"),s=null;const n=k(e).position==="fixed";let o=n?ye(e):e;for(;K(o)&&!Qe(o);){const a=k(o),l=bt(o);!l&&a.position==="fixed"&&(s=null),(n?!l&&!s:!l&&a.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Me(o)&&!l&&Er(e,o))?i=i.filter(u=>u!==o):s=a,o=ye(o)}return t.set(e,i),i}function xi(e){let{element:t,boundary:r,rootBoundary:i,strategy:s}=e;const o=[...r==="clippingAncestors"?bi(t,this._c):[].concat(r),i],a=o[0],l=o.reduce((c,u)=>{const h=Ft(t,u,s);return c.top=ge(h.top,c.top),c.right=it(h.right,c.right),c.bottom=it(h.bottom,c.bottom),c.left=ge(h.left,c.left),c},Ft(t,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function wi(e){const{width:t,height:r}=vr(e);return{width:t,height:r}}function Ei(e,t,r){const i=U(t),s=Y(t),n=r==="fixed",o=ae(e,!0,n,t);let a={scrollLeft:0,scrollTop:0};const l=te(0);if(i||!i&&!n)if((re(t)!=="body"||Me(s))&&(a=Xe(t)),i){const h=ae(t,!0,n,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else s&&(l.x=wr(s));const c=o.left+a.scrollLeft-l.x,u=o.top+a.scrollTop-l.y;return{x:c,y:u,width:o.width,height:o.height}}function qt(e,t){return!U(e)||k(e).position==="fixed"?null:t?t(e):e.offsetParent}function Sr(e,t){const r=M(e);if(!U(e)||xr(e))return r;let i=qt(e,t);for(;i&&ci(i)&&k(i).position==="static";)i=qt(i,t);return i&&(re(i)==="html"||re(i)==="body"&&k(i).position==="static"&&!bt(i))?r:i||ui(e)||r}const Si=async function(e){const t=this.getOffsetParent||Sr,r=this.getDimensions;return{reference:Ei(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await r(e.floating)}}};function _i(e){return k(e).direction==="rtl"}const $i={convertOffsetParentRelativeRectToViewportRelativeRect:pi,getDocumentElement:Y,getClippingRect:xi,getOffsetParent:Sr,getElementRects:Si,getClientRects:gi,getDimensions:wi,getScale:me,isElement:K,isRTL:_i};function Pi(e,t){let r=null,i;const s=Y(e);function n(){var a;clearTimeout(i),(a=r)==null||a.disconnect(),r=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();const{left:c,top:u,width:h,height:f}=e.getBoundingClientRect();if(a||t(),!h||!f)return;const d=ke(u),p=ke(s.clientWidth-(c+h)),g=ke(s.clientHeight-(u+f)),x=ke(c),E={rootMargin:-d+"px "+-p+"px "+-g+"px "+-x+"px",threshold:ge(0,it(1,l))||1};let w=!0;function $(_){const oe=_[0].intersectionRatio;if(oe!==l){if(!w)return o();oe?o(!1,oe):i=setTimeout(()=>{o(!1,1e-7)},100)}w=!1}try{r=new IntersectionObserver($,{...E,root:s.ownerDocument})}catch{r=new IntersectionObserver($,E)}r.observe(e)}return o(!0),n}function Oi(e,t,r,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:n=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=wt(e),u=s||n?[...c?_e(c):[],..._e(t)]:[];u.forEach(b=>{s&&b.addEventListener("scroll",r,{passive:!0}),n&&b.addEventListener("resize",r)});const h=c&&a?Pi(c,r):null;let f=-1,d=null;o&&(d=new ResizeObserver(b=>{let[E]=b;E&&E.target===c&&d&&(d.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var w;(w=d)==null||w.observe(t)})),r()}),c&&!l&&d.observe(c),d.observe(t));let p,g=l?ae(e):null;l&&x();function x(){const b=ae(e);g&&(b.x!==g.x||b.y!==g.y||b.width!==g.width||b.height!==g.height)&&r(),g=b,p=requestAnimationFrame(x)}return r(),()=>{var b;u.forEach(E=>{s&&E.removeEventListener("scroll",r),n&&E.removeEventListener("resize",r)}),h==null||h(),(b=d)==null||b.disconnect(),d=null,l&&cancelAnimationFrame(p)}}const Ri=(e,t,r)=>{const i=new Map,s={platform:$i,...r},n={...s.platform,_c:i};return ai(e,t,{...s,platform:n})};var Mi=Object.defineProperty,Li=Object.getOwnPropertyDescriptor,Ye=(e,t,r,i)=>{for(var s=i>1?void 0:i?Li(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Mi(t,r,s),s};let $e=class extends T{constructor(){super(...arguments),this.open=!1,this.parent=null,this.unstyled=!1,this._clickEventListener=()=>{this.open=!1},this._keyboardEventListener=e=>{const{code:t}=e;["Escape"].includes(t)&&this._handleKeyboard(t)}}_handleKeyboard(e){this.clientHeight}_overlayCleanup(){}connectedCallback(){super.connectedCallback(),this.unstyled||setTimeout(()=>{const e=this.parent||this.renderRoot.querySelector("[name=trigger]").assignedNodes()[0],t=this.renderRoot.querySelector("#dropdown"),r=()=>{t.classList.contains("open")&&Ri(e,t,{strategy:"fixed"}).then(({x:i,y:s})=>{Object.assign(t.style,{left:`${i}px`,top:`${s}px`,width:`${e.getBoundingClientRect().width}px`})})};this._overlayCleanup=Oi(e,t,r)})}disconnectedCallback(){super.disconnectedCallback(),this._overlayCleanup(),this.getRootNode().removeEventListener("keydown",this._keyboardEventListener),window.removeEventListener("click",this._clickEventListener)}render(){return m`
      <style>
        #dropdown {
          display: none;
        }
        #dropdown.open {
          display: block;
        }
        ${this.unstyled?O:m`
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
    `}updated(e){if(e.has("open")){const t=this.renderRoot.querySelector("#dropdown");this.open?t.classList.add("open"):t.classList.remove("open"),this.requestUpdate()}}firstUpdated(){window.addEventListener("click",this._clickEventListener),this.getRootNode().addEventListener("keydown",this._keyboardEventListener),this.renderRoot.querySelector("[name=trigger]").assignedNodes()[0].addEventListener("focus",()=>{this.open=!0})}};Ye([v({type:Boolean})],$e.prototype,"open",2);Ye([v()],$e.prototype,"parent",2);Ye([v({type:Boolean})],$e.prototype,"unstyled",2);$e=Ye([L("eox-dropdown")],$e);var Ci=Object.defineProperty,Ai=Object.getOwnPropertyDescriptor,Je=(e,t,r,i)=>{for(var s=i>1?void 0:i?Ai(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Ci(t,r,s),s};let Pe=class extends T{constructor(){super(...arguments),this.items=[],this.titleProperty="title",this.unstyled=!1,this._keyboardEventListener=e=>{const{code:t}=e;this.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(t)||(t==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(t)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(t)&&this._handleKeyboard(t,e.target.value??""))}}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}_handleKeyboard(e,t){const r=this.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&r&&r.classList.remove("highlighted"),e==="Backspace"&&!t){if(this.items.length){r&&this.items.splice(Array.from(this.renderRoot.querySelectorAll(".chip")).indexOf(r),1);const i=this.renderRoot.querySelectorAll(".chip")[this.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),this.requestUpdate()}this._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(this.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const s=this.renderRoot.querySelector(".chip.highlighted");s&&(i=Array.from(this.renderRoot.querySelectorAll(".chip")).indexOf(s),s.classList.remove("highlighted")),i=i+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&i<0&&(i=this.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&i>this.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(this.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",this._keyboardEventListener)}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this._keyboardEventListener)}render(){return m`
      <style>
        .chip.highlighted {
          background: lightgrey;
        }
        .chip-title {
          pointer-events: none;
        }
        ${this.unstyled?O:m`
              .chip-container { display: flex; flex: 0; } .chip { display: flex;
              align-items: center; background: #00417022; border-radius: 4px;
              margin-right: 4px; padding: 5px 10px; font-size: small; cursor:
              default; white-space: nowrap; } .chip.highlighted { background:
              #004170; color: white; } .chip-close { cursor: pointer;
              margin-left: 4px; }
            `}
      </style>
      <span class="chip-container">
        ${Se(this.items,e=>m`
            <span
              class="chip"
              @click=${t=>{this.renderRoot.querySelectorAll(".chip").forEach(r=>{r.classList.remove("highlighted")}),t.target.classList.add("highlighted"),this.requestUpdate()}}
            >
              <span class="chip-title"
                >${e[this.titleProperty]}</span
              >
              ${S(e._inProgress,()=>e.stringifiedState?"":m` ... `)}
              ${S(e.stringifiedState,()=>m`: ${e.stringifiedState}`)}
              <span
                class="chip-close"
                @click=${t=>{t.stopPropagation(),this.items.splice(this.items.indexOf(e),1),this._dispatchEvent(),this.requestUpdate()}}
                >✕</span
              >
            </span>
          `)}
      </span>
    `}};Je([v({type:Array})],Pe.prototype,"items",2);Je([v()],Pe.prototype,"titleProperty",2);Je([v({type:Boolean})],Pe.prototype,"unstyled",2);Pe=Je([L("eox-itemfilter-chips")],Pe);var ki=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,z=(e,t,r,i)=>{for(var s=i>1?void 0:i?Ii(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&ki(t,r,s),s};let j=class extends T{constructor(){super(...arguments),this.idProperty="id",this.items=[],this.titleProperty="title",this.itemTitleProperty=this.titleProperty,this.multiple=!1,this.unstyled=!1,this.multiStep=!1,this.inputText="",this.selectedItems=[],this._keyboardEventListener=e=>{const{code:t}=e;["ArrowUp","ArrowDown","Escape","Backspace"].includes(t)&&this._handleKeyboard(t)}}_handleKeyboard(e){var t,r,i,s;if(this.clientHeight!==0){if(e==="Escape"){if(this.selectedItems.length<1||this.multiple){this.renderRoot.querySelector("input").value!==""?this.renderRoot.querySelector("input").value="":this.renderRoot.querySelector("eox-dropdown").open=!1;return}this.multiple||(this.renderRoot.querySelector("input").value!==this.selectedItems[0][this.titleProperty]?this.renderRoot.querySelector("input").value=this.selectedItems[0][this.titleProperty]:this.renderRoot.querySelector("eox-dropdown").open=!1);return}(e==="ArrowDown"||e==="ArrowUp")&&(this.renderRoot.querySelector("eox-dropdown").open=!0,(t=this.parentElement)!=null&&t.inline&&this.renderRoot.querySelector("eox-selectionlist")._handleKeyboard(e)),this.renderRoot.querySelector("input").select(),(r=this.parentElement)!=null&&r.inline&&(["ArrowUp","ArrowDown"].includes(e)||((s=(i=this.parentElement.parentElement)==null?void 0:i.parentElement)==null?void 0:s.querySelector("#inline-input")).focus())}}_handleHighlight(e){e[0]._inProgress||(this.renderRoot.querySelector("input").value=e[0][this.titleProperty]||"",this.renderRoot.querySelector("input").select())}_handleSelect(e){var t;e.length>0&&this.multiStep&&e.forEach(r=>{this.selectedItems.includes(r)||(r._inProgress=!0)}),this.selectedItems=e,e.length>0?this.multiple?(this.renderRoot.querySelector("input").value="",this.renderRoot.querySelector("input").focus()):(this.renderRoot.querySelector("input").value=e[0][this.titleProperty],e[0]._inProgress||(this.renderRoot.querySelector("eox-dropdown").open=!1)):(this.renderRoot.querySelector("input").select(),this.renderRoot.querySelector("input").focus()),this._dispatchEvent(),this.requestUpdate(),(t=this.renderRoot.querySelector("eox-itemfilter-chips"))==null||t.requestUpdate()}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.selectedItems}))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this._keyboardEventListener)}firstUpdated(){this.getRootNode().addEventListener("keydown",this._keyboardEventListener)}updated(e){e.has("selectedItems")&&this._handleSelect(this.selectedItems)}render(){return m`
      <style>
        :host,
        .container {
          display: flex;
        }
        #dropdown {
          display: none;
        }
        ${this.unstyled?O:m`
              ${gt} :host { position: relative; } .container { width: 100%;
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
        ${S(this.multiple,()=>m`
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
            ${S(this.items.length>0,()=>m`
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
      ${S(this.selectedItems.length>0,()=>m`
          <div class="button-container">
            <button
              class="icon"
              @click=${()=>{this._handleSelect([])}}
            >
              ✕
            </button>
          </div>
        `)}
    `}};z([v()],j.prototype,"idProperty",2);z([v()],j.prototype,"items",2);z([v()],j.prototype,"titleProperty",2);z([v()],j.prototype,"itemTitleProperty",2);z([v({type:Boolean})],j.prototype,"multiple",2);z([v({type:Boolean})],j.prototype,"unstyled",2);z([v({type:Boolean})],j.prototype,"multiStep",2);z([X()],j.prototype,"inputText",2);z([X()],j.prototype,"selectedItems",2);j=z([L("eox-autocomplete")],j);var Ti=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,V=(e,t,r,i)=>{for(var s=i>1?void 0:i?Fi(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Ti(t,r,s),s};let N=class extends T{constructor(){super(...arguments),this.filter="",this.idProperty="id",this.items=[],this.titleProperty="title",this.multiple=!1,this.selectedItems=[],this.unstyled=!1,this.noShadow=!1,this._currentHighlight=null,this._keyboardEventListener=e=>{["ArrowDown","ArrowUp","Enter","Escape"].includes(e.code)&&this._handleKeyboard(e.code)}}_handleKeyboard(e){if(this.clientHeight===0)return;const t=this.renderRoot.querySelector("li.highlighted");if(e==="Escape"){this._currentHighlight&&(this._currentHighlight=null);return}if(e==="Enter"){if(t){const n=this.items.find(o=>o[this.idProperty]===t.dataset.identifier);this._handleSelect(n),this.requestUpdate()}return}const r=this.renderRoot.querySelectorAll("li");let i=-1;t&&(delete t.dataset.highlighted,i=Array.from(r).indexOf(t)),e==="ArrowDown"&&(i++,i>r.length-1&&(i=0)),e==="ArrowUp"&&(i--,i<0&&(i=r.length-1));const s=Array.from(r)[i];s&&(this._currentHighlight=this.items.find(n=>n[this.idProperty]===s.dataset.identifier)),this.dispatchEvent(new CustomEvent("items-highlighted",{detail:[this._currentHighlight]}))}_handleSelect(e){if(e)if(this.multiple){const t=this.selectedItems.find(r=>r[this.idProperty]===e[this.idProperty]);t?this.selectedItems.splice(this.selectedItems.indexOf(t),1):this.selectedItems.push(e)}else this.selectedItems=[e];else this.selectedItems=[],this._currentHighlight=null;this._dispatchEvent()}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.selectedItems}))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this._keyboardEventListener)}firstUpdated(){this.getRootNode().addEventListener("keydown",this._keyboardEventListener)}updated(e){e.has("filter")&&(this.filter.length>0?setTimeout(()=>{const t=this.renderRoot.querySelectorAll("li")[0];t&&(this._currentHighlight=this.items.find(r=>r[this.idProperty]===t.dataset.identifier))}):this._currentHighlight=null)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return m`
      <style>
        ${mt}
        :host {
          height: auto;
        }
        ul {
          width: 100%;
        }
        li.highlighted {
          background: lightgrey;
        }
        ${!this.unstyled&&yt}
      </style>
      <ul>
        ${hr(this.items.filter(e=>this.filter?e[this.titleProperty].toLowerCase().includes(this.filter.toLowerCase()):!0),e=>e[this.idProperty],e=>m`
            <li
              class=${this._currentHighlight===e?"highlighted":O}
              data-identifier=${e[this.idProperty]}
              data-title=${e[this.titleProperty]}
              @mouseenter=${()=>{this._currentHighlight=e}}
              @mouseleave=${()=>{this._currentHighlight=null}}
            >
              <label>
                <input
                  type="${this.multiple?"checkbox":"radio"}"
                  .checked=${!!this.selectedItems.find(t=>t[this.idProperty]===e[this.idProperty])||O}
                  @change=${()=>this._handleSelect(e)}
                />
                <span class="title"
                  >${e[this.titleProperty]}</span
                >
              </label>
            </li>
          `)}
      </ul>
    `}};V([v()],N.prototype,"filter",2);V([v()],N.prototype,"idProperty",2);V([v()],N.prototype,"items",2);V([v()],N.prototype,"titleProperty",2);V([v({type:Boolean})],N.prototype,"multiple",2);V([v()],N.prototype,"selectedItems",2);V([v({type:Boolean})],N.prototype,"unstyled",2);V([v({type:Boolean})],N.prototype,"noShadow",2);V([X()],N.prototype,"_currentHighlight",2);N=V([L("eox-selectionlist")],N);var qi=Object.defineProperty,ji=Object.getOwnPropertyDescriptor,Ze=(e,t,r,i)=>{for(var s=i>1?void 0:i?ji(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&qi(t,r,s),s};let Oe=class extends T{constructor(){super(...arguments),this.inline=!1,this.unstyled=!1}reset(){this.renderRoot.querySelectorAll("input[type='checkbox']").forEach(e=>{e instanceof HTMLInputElement&&(e.checked=!1)}),xe(this.filterObject),this.requestUpdate()}createRenderRoot(){return this}_getItems(){const e="sort"in this.filterObject?this.filterObject.sort:(t,r)=>t.localeCompare(r);return Object.keys(this.filterObject.state).sort(e).map(t=>({id:t,title:t.replace(/^./,t[0].toUpperCase())}))}_getSelectedItems(){return Object.keys(this.filterObject.state).filter(e=>this.filterObject.state[e]).map(e=>({id:e,title:e.replace(/^./,e[0].toUpperCase())}))}_handleSelected(e){var t;Object.keys(this.filterObject.state).forEach(r=>{this.filterObject.state[r]=e.map(i=>i.id).includes(r)}),this.filterObject.stringifiedState=Object.keys(this.filterObject.state).filter(r=>this.filterObject.state[r]).join(", "),((t=this.filterObject.stringifiedState)==null?void 0:t.length)>0&&(this.filterObject.dirty=!0),this.dispatchEvent(new CustomEvent("filter"))}render(){return S(this.filterObject,()=>m`
        ${S(this.inline||Object.keys(this.filterObject.state).length>10,()=>m`
            <eox-autocomplete
              multiple
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${e=>this._handleSelected(e.detail)}
            >
            </eox-autocomplete>
          `,()=>m`
            <eox-selectionlist
              .noShadow=${!this.inline}
              multiple
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${e=>this._handleSelected(e.detail)}
            ></eox-selectionlist>
          `)}
      `)}};Ze([v()],Oe.prototype,"filterObject",2);Ze([v({type:Boolean})],Oe.prototype,"inline",2);Ze([v({type:Boolean})],Oe.prototype,"unstyled",2);Oe=Ze([L("eox-itemfilter-multiselect")],Oe);var Ni=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,_r=(e,t,r,i)=>{for(var s=i>1?void 0:i?Di(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Ni(t,r,s),s};let st=class extends T{constructor(){super(...arguments),this.inputHandler=e=>{const[t,r]=e.detail.values;(t!==this.filterObject.state.min||r!=this.filterObject.state.max)&&([this.filterObject.state.min,this.filterObject.state.max]=[t,r],this.filterObject.dirty=!0),this.filterObject.dirty&&(this.filterObject.stringifiedState=`${pe(t)} - ${pe(r)}`),this.dispatchEvent(new CustomEvent("filter")),this.requestUpdate()},this.debouncedInputHandler=dr(this.inputHandler,0,{leading:!0})}reset(){xe(this.filterObject),this.requestUpdate()}createRenderRoot(){return this}render(){return S(this.filterObject,()=>m`
        <div class="range-before">
          ${this.filterObject.format==="date"?pe.unix(this.filterObject.state.min):this.filterObject.state.min}
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
          ${this.filterObject.format==="date"?pe.unix(this.filterObject.state.max):this.filterObject.state.max}
        </div>
      `)}};_r([v()],st.prototype,"filterObject",2);st=_r([L("eox-itemfilter-range")],st);var Bi=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,et=(e,t,r,i)=>{for(var s=i>1?void 0:i?Hi(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Bi(t,r,s),s};let Re=class extends T{constructor(){super(...arguments),this.inline=!1,this.unstyled=!1}reset(){this.renderRoot.querySelectorAll("input[type='radio']").forEach(e=>{e instanceof HTMLInputElement&&(e.checked=!1)}),xe(this.filterObject),this.requestUpdate()}createRenderRoot(){return this}_getItems(){const e="sort"in this.filterObject?this.filterObject.sort:(t,r)=>t.localeCompare(r);return Object.keys(this.filterObject.state).sort(e).map(t=>({id:t,title:t.replace(/^./,t[0].toUpperCase())}))}_getSelectedItems(){return Object.keys(this.filterObject.state).filter(e=>this.filterObject.state[e]).map(e=>({id:e,title:e.replace(/^./,e[0].toUpperCase())}))}_handleSelected(e){var t;Object.keys(this.filterObject.state).forEach(r=>{this.filterObject.state[r]=e.detail.map(i=>i.id).includes(r)}),this.filterObject.stringifiedState=Object.keys(this.filterObject.state).filter(r=>this.filterObject.state[r])[0],((t=this.filterObject.stringifiedState)==null?void 0:t.length)>0&&(this.filterObject.dirty=!0),this.dispatchEvent(new CustomEvent("filter"))}render(){return S(this.filterObject,()=>m`
        ${S(this.inline||Object.keys(this.filterObject.state).length>10,()=>m`
            <eox-autocomplete
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${e=>this._handleSelected(e)}
            >
            </eox-autocomplete>
          `,()=>m`
            <eox-selectionlist
              .noShadow=${!this.inline}
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${e=>this._handleSelected(e)}
            ></eox-selectionlist>
          `)}
      `)}};et([v()],Re.prototype,"filterObject",2);et([v({type:Boolean})],Re.prototype,"inline",2);et([v({type:Boolean})],Re.prototype,"unstyled",2);Re=et([L("eox-itemfilter-select")],Re);var P=63710088e-1,Et={centimeters:P*100,centimetres:P*100,degrees:P/111325,feet:P*3.28084,inches:P*39.37,kilometers:P/1e3,kilometres:P/1e3,meters:P,metres:P,miles:P/1609.344,millimeters:P*1e3,millimetres:P*1e3,nauticalmiles:P/1852,radians:1,yards:P*1.0936},Ui={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:1/1e3,kilometres:1/1e3,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/P,yards:1.0936133},nt={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046};function I(e,t,r){r===void 0&&(r={});var i={type:"Feature"};return(r.id===0||r.id)&&(i.id=r.id),r.bbox&&(i.bbox=r.bbox),i.properties=t||{},i.geometry=e,i}function Wi(e,t,r){switch(e){case"Point":return B(t).geometry;case"LineString":return q(t).geometry;case"Polygon":return St(t).geometry;case"MultiPoint":return $r(t).geometry;case"MultiLineString":return _t(t).geometry;case"MultiPolygon":return Pr(t).geometry;default:throw new Error(e+" is invalid")}}function B(e,t,r){if(r===void 0&&(r={}),!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Ue(e[0])||!Ue(e[1]))throw new Error("coordinates must contain numbers");var i={type:"Point",coordinates:e};return I(i,t,r)}function zi(e,t,r){return r===void 0&&(r={}),ie(e.map(function(i){return B(i,t)}),r)}function St(e,t,r){r===void 0&&(r={});for(var i=0,s=e;i<s.length;i++){var n=s[i];if(n.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var o=0;o<n[n.length-1].length;o++)if(n[n.length-1][o]!==n[0][o])throw new Error("First and last Position are not equivalent.")}var a={type:"Polygon",coordinates:e};return I(a,t,r)}function Vi(e,t,r){return r===void 0&&(r={}),ie(e.map(function(i){return St(i,t)}),r)}function q(e,t,r){if(r===void 0&&(r={}),e.length<2)throw new Error("coordinates must be an array of two or more positions");var i={type:"LineString",coordinates:e};return I(i,t,r)}function Ki(e,t,r){return r===void 0&&(r={}),ie(e.map(function(i){return q(i,t)}),r)}function ie(e,t){t===void 0&&(t={});var r={type:"FeatureCollection"};return t.id&&(r.id=t.id),t.bbox&&(r.bbox=t.bbox),r.features=e,r}function _t(e,t,r){r===void 0&&(r={});var i={type:"MultiLineString",coordinates:e};return I(i,t,r)}function $r(e,t,r){r===void 0&&(r={});var i={type:"MultiPoint",coordinates:e};return I(i,t,r)}function Pr(e,t,r){r===void 0&&(r={});var i={type:"MultiPolygon",coordinates:e};return I(i,t,r)}function Gi(e,t,r){r===void 0&&(r={});var i={type:"GeometryCollection",geometries:e};return I(i,t,r)}function Qi(e,t){if(t===void 0&&(t=0),t&&!(t>=0))throw new Error("precision must be a positive number");var r=Math.pow(10,t||0);return Math.round(e*r)/r}function Or(e,t){t===void 0&&(t="kilometers");var r=Et[t];if(!r)throw new Error(t+" units is invalid");return e*r}function $t(e,t){t===void 0&&(t="kilometers");var r=Et[t];if(!r)throw new Error(t+" units is invalid");return e/r}function Xi(e,t){return Rr($t(e,t))}function Yi(e){var t=e%360;return t<0&&(t+=360),t}function Rr(e){var t=e%(2*Math.PI);return t*180/Math.PI}function Ji(e){var t=e%360;return t*Math.PI/180}function Zi(e,t,r){if(t===void 0&&(t="kilometers"),r===void 0&&(r="kilometers"),!(e>=0))throw new Error("length must be a positive number");return Or($t(e,t),r)}function es(e,t,r){if(t===void 0&&(t="meters"),r===void 0&&(r="kilometers"),!(e>=0))throw new Error("area must be a positive number");var i=nt[t];if(!i)throw new Error("invalid original units");var s=nt[r];if(!s)throw new Error("invalid final units");return e/i*s}function Ue(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}function Pt(e){return!!e&&e.constructor===Object}function ts(e){if(!e)throw new Error("bbox is required");if(!Array.isArray(e))throw new Error("bbox must be an Array");if(e.length!==4&&e.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");e.forEach(function(t){if(!Ue(t))throw new Error("bbox must only contain numbers")})}function rs(e){if(!e)throw new Error("id is required");if(["string","number"].indexOf(typeof e)===-1)throw new Error("id must be a number or a string")}const is=Object.freeze(Object.defineProperty({__proto__:null,areaFactors:nt,bearingToAzimuth:Yi,convertArea:es,convertLength:Zi,degreesToRadians:Ji,earthRadius:P,factors:Et,feature:I,featureCollection:ie,geometry:Wi,geometryCollection:Gi,isNumber:Ue,isObject:Pt,lengthToDegrees:Xi,lengthToRadians:$t,lineString:q,lineStrings:Ki,multiLineString:_t,multiPoint:$r,multiPolygon:Pr,point:B,points:zi,polygon:St,polygons:Vi,radiansToDegrees:Rr,radiansToLength:Or,round:Qi,unitsFactors:Ui,validateBBox:ts,validateId:rs},Symbol.toStringTag,{value:"Module"}));function Mr(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return e.geometry.coordinates;if(e.type==="Point")return e.coordinates}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return e;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function ve(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function be(e){return e.type==="Feature"?e.geometry:e}function A(e,t,r){if(r===void 0&&(r={}),!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");var i=Mr(e),s=be(t),n=s.type,o=t.bbox,a=s.coordinates;if(o&&ss(i,o)===!1)return!1;n==="Polygon"&&(a=[a]);for(var l=!1,c=0;c<a.length&&!l;c++)if(jt(i,a[c][0],r.ignoreBoundary)){for(var u=!1,h=1;h<a[c].length&&!u;)jt(i,a[c][h],!r.ignoreBoundary)&&(u=!0),h++;u||(l=!0)}return l}function jt(e,t,r){var i=!1;t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]&&(t=t.slice(0,t.length-1));for(var s=0,n=t.length-1;s<t.length;n=s++){var o=t[s][0],a=t[s][1],l=t[n][0],c=t[n][1],u=e[1]*(o-l)+a*(l-e[0])+c*(e[0]-o)===0&&(o-e[0])*(l-e[0])<=0&&(a-e[1])*(c-e[1])<=0;if(u)return!r;var h=a>e[1]!=c>e[1]&&e[0]<(l-o)*(e[1]-a)/(c-a)+o;h&&(i=!i)}return i}function ss(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}function we(e,t,r){if(e!==null)for(var i,s,n,o,a,l,c,u=0,h=0,f,d=e.type,p=d==="FeatureCollection",g=d==="Feature",x=p?e.features.length:1,b=0;b<x;b++){c=p?e.features[b].geometry:g?e.geometry:e,f=c?c.type==="GeometryCollection":!1,a=f?c.geometries.length:1;for(var E=0;E<a;E++){var w=0,$=0;if(o=f?c.geometries[E]:c,o!==null){l=o.coordinates;var _=o.type;switch(u=r&&(_==="Polygon"||_==="MultiPolygon")?1:0,_){case null:break;case"Point":if(t(l,h,b,w,$)===!1)return!1;h++,w++;break;case"LineString":case"MultiPoint":for(i=0;i<l.length;i++){if(t(l[i],h,b,w,$)===!1)return!1;h++,_==="MultiPoint"&&w++}_==="LineString"&&w++;break;case"Polygon":case"MultiLineString":for(i=0;i<l.length;i++){for(s=0;s<l[i].length-u;s++){if(t(l[i][s],h,b,w,$)===!1)return!1;h++}_==="MultiLineString"&&w++,_==="Polygon"&&$++}_==="Polygon"&&w++;break;case"MultiPolygon":for(i=0;i<l.length;i++){for($=0,s=0;s<l[i].length;s++){for(n=0;n<l[i][s].length-u;n++){if(t(l[i][s][n],h,b,w,$)===!1)return!1;h++}$++}w++}break;case"GeometryCollection":for(i=0;i<o.geometries.length;i++)if(we(o.geometries[i],t,r)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function ns(e,t,r,i){var s=r;return we(e,function(n,o,a,l,c){o===0&&r===void 0?s=n:s=t(s,n,o,a,l,c)},i),s}function Lr(e,t){var r;switch(e.type){case"FeatureCollection":for(r=0;r<e.features.length&&t(e.features[r].properties,r)!==!1;r++);break;case"Feature":t(e.properties,0);break}}function os(e,t,r){var i=r;return Lr(e,function(s,n){n===0&&r===void 0?i=s:i=t(i,s,n)}),i}function We(e,t){if(e.type==="Feature")t(e,0);else if(e.type==="FeatureCollection")for(var r=0;r<e.features.length&&t(e.features[r],r)!==!1;r++);}function ls(e,t,r){var i=r;return We(e,function(s,n){n===0&&r===void 0?i=s:i=t(i,s,n)}),i}function as(e){var t=[];return we(e,function(r){t.push(r)}),t}function Ot(e,t){var r,i,s,n,o,a,l,c,u,h,f=0,d=e.type==="FeatureCollection",p=e.type==="Feature",g=d?e.features.length:1;for(r=0;r<g;r++){for(a=d?e.features[r].geometry:p?e.geometry:e,c=d?e.features[r].properties:p?e.properties:{},u=d?e.features[r].bbox:p?e.bbox:void 0,h=d?e.features[r].id:p?e.id:void 0,l=a?a.type==="GeometryCollection":!1,o=l?a.geometries.length:1,s=0;s<o;s++){if(n=l?a.geometries[s]:a,n===null){if(t(null,f,c,u,h)===!1)return!1;continue}switch(n.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(n,f,c,u,h)===!1)return!1;break}case"GeometryCollection":{for(i=0;i<n.geometries.length;i++)if(t(n.geometries[i],f,c,u,h)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}f++}}function cs(e,t,r){var i=r;return Ot(e,function(s,n,o,a,l){n===0&&r===void 0?i=s:i=t(i,s,n,o,a,l)}),i}function G(e,t){Ot(e,function(r,i,s,n,o){var a=r===null?null:r.type;switch(a){case null:case"Point":case"LineString":case"Polygon":return t(I(r,s,{bbox:n,id:o}),i,0)===!1?!1:void 0}var l;switch(a){case"MultiPoint":l="Point";break;case"MultiLineString":l="LineString";break;case"MultiPolygon":l="Polygon";break}for(var c=0;c<r.coordinates.length;c++){var u=r.coordinates[c],h={type:l,coordinates:u};if(t(I(h,s),i,c)===!1)return!1}})}function us(e,t,r){var i=r;return G(e,function(s,n,o){n===0&&o===0&&r===void 0?i=s:i=t(i,s,n,o)}),i}function Cr(e,t){G(e,function(r,i,s){var n=0;if(r.geometry){var o=r.geometry.type;if(!(o==="Point"||o==="MultiPoint")){var a,l=0,c=0,u=0;if(we(r,function(h,f,d,p,g){if(a===void 0||i>l||p>c||g>u){a=h,l=i,c=p,u=g,n=0;return}var x=q([a,h],r.properties);if(t(x,i,s,g,n)===!1)return!1;n++,a=h})===!1)return!1}}})}function hs(e,t,r){var i=r,s=!1;return Cr(e,function(n,o,a,l,c){s===!1&&r===void 0?i=n:i=t(i,n,o,a,l,c),s=!0}),i}function Ar(e,t){if(!e)throw new Error("geojson is required");G(e,function(r,i,s){if(r.geometry!==null){var n=r.geometry.type,o=r.geometry.coordinates;switch(n){case"LineString":if(t(r,i,s,0,0)===!1)return!1;break;case"Polygon":for(var a=0;a<o.length;a++)if(t(q(o[a],r.properties),i,s,a)===!1)return!1;break}}})}function ds(e,t,r){var i=r;return Ar(e,function(s,n,o,a){n===0&&r===void 0?i=s:i=t(i,s,n,o,a)}),i}function fs(e,t){if(t=t||{},!Pt(t))throw new Error("options is invalid");var r=t.featureIndex||0,i=t.multiFeatureIndex||0,s=t.geometryIndex||0,n=t.segmentIndex||0,o=t.properties,a;switch(e.type){case"FeatureCollection":r<0&&(r=e.features.length+r),o=o||e.features[r].properties,a=e.features[r].geometry;break;case"Feature":o=o||e.properties,a=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":a=e;break;default:throw new Error("geojson is invalid")}if(a===null)return null;var l=a.coordinates;switch(a.type){case"Point":case"MultiPoint":return null;case"LineString":return n<0&&(n=l.length+n-1),q([l[n],l[n+1]],o,t);case"Polygon":return s<0&&(s=l.length+s),n<0&&(n=l[s].length+n-1),q([l[s][n],l[s][n+1]],o,t);case"MultiLineString":return i<0&&(i=l.length+i),n<0&&(n=l[i].length+n-1),q([l[i][n],l[i][n+1]],o,t);case"MultiPolygon":return i<0&&(i=l.length+i),s<0&&(s=l[i].length+s),n<0&&(n=l[i][s].length-n-1),q([l[i][s][n],l[i][s][n+1]],o,t)}throw new Error("geojson is invalid")}function ps(e,t){if(t=t||{},!Pt(t))throw new Error("options is invalid");var r=t.featureIndex||0,i=t.multiFeatureIndex||0,s=t.geometryIndex||0,n=t.coordIndex||0,o=t.properties,a;switch(e.type){case"FeatureCollection":r<0&&(r=e.features.length+r),o=o||e.features[r].properties,a=e.features[r].geometry;break;case"Feature":o=o||e.properties,a=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":a=e;break;default:throw new Error("geojson is invalid")}if(a===null)return null;var l=a.coordinates;switch(a.type){case"Point":return B(l,o,t);case"MultiPoint":return i<0&&(i=l.length+i),B(l[i],o,t);case"LineString":return n<0&&(n=l.length+n),B(l[n],o,t);case"Polygon":return s<0&&(s=l.length+s),n<0&&(n=l[s].length+n),B(l[s][n],o,t);case"MultiLineString":return i<0&&(i=l.length+i),n<0&&(n=l[i].length+n),B(l[i][n],o,t);case"MultiPolygon":return i<0&&(i=l.length+i),s<0&&(s=l[i].length+s),n<0&&(n=l[i][s].length-n),B(l[i][s][n],o,t)}throw new Error("geojson is invalid")}const gs=Object.freeze(Object.defineProperty({__proto__:null,coordAll:as,coordEach:we,coordReduce:ns,featureEach:We,featureReduce:ls,findPoint:ps,findSegment:fs,flattenEach:G,flattenReduce:us,geomEach:Ot,geomReduce:cs,lineEach:Ar,lineReduce:ds,propEach:Lr,propReduce:os,segmentEach:Cr,segmentReduce:hs},Symbol.toStringTag,{value:"Module"}));function Nt(e){if(!e)throw new Error("geojson is required");var t=[];return G(e,function(r){ms(r,t)}),ie(t)}function ms(e,t){var r=[],i=e.geometry;if(i!==null){switch(i.type){case"Polygon":r=ve(i);break;case"LineString":r=[ve(i)]}r.forEach(function(s){var n=ys(s,e.properties);n.forEach(function(o){o.id=t.length,t.push(o)})})}}function ys(e,t){var r=[];return e.reduce(function(i,s){var n=q([i,s],t);return n.bbox=vs(i,s),r.push(n),s}),r}function vs(e,t){var r=e[0],i=e[1],s=t[0],n=t[1],o=r<s?r:s,a=i<n?i:n,l=r>s?r:s,c=i>n?i:n;return[o,a,l,c]}var Rt={exports:{}};const bs=Ge(Xr),xs=Ge(is),ws=Ge(gs);function ce(e){var t=[1/0,1/0,-1/0,-1/0];return we(e,function(r){t[0]>r[0]&&(t[0]=r[0]),t[1]>r[1]&&(t[1]=r[1]),t[2]<r[0]&&(t[2]=r[0]),t[3]<r[1]&&(t[3]=r[1])}),t}ce.default=ce;const Es=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"})),Ss=Ge(Es);var D=bs,kr=xs,Ir=ws,de=Ss.default,_s=Ir.featureEach;Ir.coordEach;kr.polygon;var Dt=kr.featureCollection;function Tr(e){var t=new D(e);return t.insert=function(r){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:de(r),D.prototype.insert.call(this,r)},t.load=function(r){var i=[];return Array.isArray(r)?r.forEach(function(s){if(s.type!=="Feature")throw new Error("invalid features");s.bbox=s.bbox?s.bbox:de(s),i.push(s)}):_s(r,function(s){if(s.type!=="Feature")throw new Error("invalid features");s.bbox=s.bbox?s.bbox:de(s),i.push(s)}),D.prototype.load.call(this,i)},t.remove=function(r,i){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:de(r),D.prototype.remove.call(this,r,i)},t.clear=function(){return D.prototype.clear.call(this)},t.search=function(r){var i=D.prototype.search.call(this,this.toBBox(r));return Dt(i)},t.collides=function(r){return D.prototype.collides.call(this,this.toBBox(r))},t.all=function(){var r=D.prototype.all.call(this);return Dt(r)},t.toJSON=function(){return D.prototype.toJSON.call(this)},t.fromJSON=function(r){return D.prototype.fromJSON.call(this,r)},t.toBBox=function(r){var i;if(r.bbox)i=r.bbox;else if(Array.isArray(r)&&r.length===4)i=r;else if(Array.isArray(r)&&r.length===6)i=[r[0],r[1],r[3],r[4]];else if(r.type==="Feature")i=de(r);else if(r.type==="FeatureCollection")i=de(r);else throw new Error("invalid geojson");return{minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}},t}Rt.exports=Tr;Rt.exports.default=Tr;var $s=Rt.exports;const Ps=ti($s);function Mt(e,t){var r={},i=[];if(e.type==="LineString"&&(e=I(e)),t.type==="LineString"&&(t=I(t)),e.type==="Feature"&&t.type==="Feature"&&e.geometry!==null&&t.geometry!==null&&e.geometry.type==="LineString"&&t.geometry.type==="LineString"&&e.geometry.coordinates.length===2&&t.geometry.coordinates.length===2){var s=Bt(e,t);return s&&i.push(s),ie(i)}var n=Ps();return n.load(Nt(t)),We(Nt(e),function(o){We(n.search(o),function(a){var l=Bt(o,a);if(l){var c=ve(l).join(",");r[c]||(r[c]=!0,i.push(l))}})}),ie(i)}function Bt(e,t){var r=ve(e),i=ve(t);if(r.length!==2)throw new Error("<intersects> line1 must only contain 2 coordinates");if(i.length!==2)throw new Error("<intersects> line2 must only contain 2 coordinates");var s=r[0][0],n=r[0][1],o=r[1][0],a=r[1][1],l=i[0][0],c=i[0][1],u=i[1][0],h=i[1][1],f=(h-c)*(o-s)-(u-l)*(a-n),d=(u-l)*(n-c)-(h-c)*(s-l),p=(o-s)*(n-c)-(a-n)*(s-l);if(f===0)return null;var g=d/f,x=p/f;if(g>=0&&g<=1&&x>=0&&x<=1){var b=s+g*(o-s),E=n+g*(a-n);return B([b,E])}return null}function ot(e,t){t===void 0&&(t={});var r=be(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),r.type){case"Polygon":return Os(r,t);case"MultiPolygon":return Rs(r,t);default:throw new Error("invalid poly")}}function Os(e,t){t===void 0&&(t={});var r=be(e),i=r.coordinates,s=t.properties?t.properties:e.type==="Feature"?e.properties:{};return Fr(i,s)}function Rs(e,t){t===void 0&&(t={});var r=be(e),i=r.coordinates,s=t.properties?t.properties:e.type==="Feature"?e.properties:{},n=[];return i.forEach(function(o){n.push(Fr(o,s))}),ie(n)}function Fr(e,t){return e.length>1?_t(e,t):q(e[0],t)}function Ms(e,t){var r=!0;return G(e,function(i){G(t,function(s){if(r===!1)return!1;r=Ls(i.geometry,s.geometry)})}),r}function Ls(e,t){switch(e.type){case"Point":switch(t.type){case"Point":return!Is(e.coordinates,t.coordinates);case"LineString":return!Ht(t,e);case"Polygon":return!A(e,t)}break;case"LineString":switch(t.type){case"Point":return!Ht(e,t);case"LineString":return!Cs(e,t);case"Polygon":return!Ut(t,e)}break;case"Polygon":switch(t.type){case"Point":return!A(t,e);case"LineString":return!Ut(e,t);case"Polygon":return!As(t,e)}}return!1}function Ht(e,t){for(var r=0;r<e.coordinates.length-1;r++)if(ks(e.coordinates[r],e.coordinates[r+1],t.coordinates))return!0;return!1}function Cs(e,t){var r=Mt(e,t);return r.features.length>0}function Ut(e,t){for(var r=0,i=t.coordinates;r<i.length;r++){var s=i[r];if(A(s,e))return!0}var n=Mt(t,ot(e));return n.features.length>0}function As(e,t){for(var r=0,i=e.coordinates[0];r<i.length;r++){var s=i[r];if(A(s,t))return!0}for(var n=0,o=t.coordinates[0];n<o.length;n++){var a=o[n];if(A(a,e))return!0}var l=Mt(ot(e),ot(t));return l.features.length>0}function ks(e,t,r){var i=r[0]-e[0],s=r[1]-e[1],n=t[0]-e[0],o=t[1]-e[1],a=i*o-s*n;return a!==0?!1:Math.abs(n)>=Math.abs(o)?n>0?e[0]<=r[0]&&r[0]<=t[0]:t[0]<=r[0]&&r[0]<=e[0]:o>0?e[1]<=r[1]&&r[1]<=t[1]:t[1]<=r[1]&&r[1]<=e[1]}function Is(e,t){return e[0]===t[0]&&e[1]===t[1]}function Ts(e,t){var r=!1;return G(e,function(i){G(t,function(s){if(r===!0)return!0;r=!Ms(i.geometry,s.geometry)})}),r}function ze(e,t,r){r===void 0&&(r={});for(var i=Mr(e),s=ve(t),n=0;n<s.length-1;n++){var o=!1;if(r.ignoreEndVertices&&(n===0&&(o="start"),n===s.length-2&&(o="end"),n===0&&n+1===s.length-1&&(o="both")),Fs(s[n],s[n+1],i,o,typeof r.epsilon>"u"?null:r.epsilon))return!0}return!1}function Fs(e,t,r,i,s){var n=r[0],o=r[1],a=e[0],l=e[1],c=t[0],u=t[1],h=r[0]-a,f=r[1]-l,d=c-a,p=u-l,g=h*p-f*d;if(s!==null){if(Math.abs(g)>s)return!1}else if(g!==0)return!1;if(i){if(i==="start")return Math.abs(d)>=Math.abs(p)?d>0?a<n&&n<=c:c<=n&&n<a:p>0?l<o&&o<=u:u<=o&&o<l;if(i==="end")return Math.abs(d)>=Math.abs(p)?d>0?a<=n&&n<c:c<n&&n<=a:p>0?l<=o&&o<u:u<o&&o<=l;if(i==="both")return Math.abs(d)>=Math.abs(p)?d>0?a<n&&n<c:c<n&&n<a:p>0?l<o&&o<u:u<o&&o<l}else return Math.abs(d)>=Math.abs(p)?d>0?a<=n&&n<=c:c<=n&&n<=a:p>0?l<=o&&o<=u:u<=o&&o<=l;return!1}function qs(e,t){var r=be(e),i=be(t),s=r.type,n=i.type;switch(s){case"Point":switch(n){case"MultiPoint":return js(r,i);case"LineString":return ze(r,i,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return A(r,i,{ignoreBoundary:!0});default:throw new Error("feature2 "+n+" geometry not supported")}case"MultiPoint":switch(n){case"MultiPoint":return Ns(r,i);case"LineString":return Ds(r,i);case"Polygon":case"MultiPolygon":return Bs(r,i);default:throw new Error("feature2 "+n+" geometry not supported")}case"LineString":switch(n){case"LineString":return Hs(r,i);case"Polygon":case"MultiPolygon":return Us(r,i);default:throw new Error("feature2 "+n+" geometry not supported")}case"Polygon":switch(n){case"Polygon":case"MultiPolygon":return Ws(r,i);default:throw new Error("feature2 "+n+" geometry not supported")}default:throw new Error("feature1 "+s+" geometry not supported")}}function js(e,t){var r,i=!1;for(r=0;r<t.coordinates.length;r++)if(jr(t.coordinates[r],e.coordinates)){i=!0;break}return i}function Ns(e,t){for(var r=0;r<e.coordinates.length;r++){for(var i=!1,s=0;s<t.coordinates.length;s++)jr(e.coordinates[r],t.coordinates[s])&&(i=!0);if(!i)return!1}return!0}function Ds(e,t){for(var r=!1,i=0;i<e.coordinates.length;i++){if(!ze(e.coordinates[i],t))return!1;r||(r=ze(e.coordinates[i],t,{ignoreEndVertices:!0}))}return r}function Bs(e,t){for(var r=!0,i=!1,s=0;s<e.coordinates.length;s++){if(i=A(e.coordinates[1],t),!i){r=!1;break}i=A(e.coordinates[1],t,{ignoreBoundary:!0})}return r&&i}function Hs(e,t){for(var r=0;r<e.coordinates.length;r++)if(!ze(e.coordinates[r],t))return!1;return!0}function Us(e,t){var r=ce(t),i=ce(e);if(!qr(r,i))return!1;for(var s=!1,n=0;n<e.coordinates.length-1;n++){if(!A(e.coordinates[n],t))return!1;if(s||(s=A(e.coordinates[n],t,{ignoreBoundary:!0})),!s){var o=zs(e.coordinates[n],e.coordinates[n+1]);s=A(o,t,{ignoreBoundary:!0})}}return s}function Ws(e,t){var r=ce(e),i=ce(t);if(!qr(i,r))return!1;for(var s=0;s<e.coordinates[0].length;s++)if(!A(e.coordinates[0][s],t))return!1;return!0}function qr(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function jr(e,t){return e[0]===t[0]&&e[1]===t[1]}function zs(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var Vs=Object.defineProperty,Ks=Object.getOwnPropertyDescriptor,Le=(e,t,r,i)=>{for(var s=i>1?void 0:i?Ks(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Vs(t,r,s),s};const Gs=(e,t)=>t?Ts(e,t):!0,Qs=(e,t)=>t?qs(e,t):!0;let lt=class extends T{reset(){xe(this.filterObject),this.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),this.requestUpdate()}createRenderRoot(){return this}render(){return S(this.filterObject,()=>{var e;return m`
      <form style="display: inline">
      ${Se(["intersects","within"],t=>m`
          <label>
            <input
              type="radio"
              name="mode"
              .checked="${this.filterObject.state.mode===t||O}
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
    `})}};Le([v()],lt.prototype,"filterObject",2);lt=Le([L("eox-itemfilter-spatial")],lt);let Ve=class extends T{render(){return m`<eox-map part="map" style="height: 400px"></eox-map>`}firstUpdated(){this.setup()}setup(){const e=[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...this.geometry&&{format:"GeoJSON"},...this.geometry&&{url:this.createFeatureUrl(this.geometry)}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://s2maps-tiles.eu/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}];this.eoxMap=this.renderRoot.querySelector("eox-map"),setTimeout(()=>{this.eoxMap.layers=e;const t=r=>{const i=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:r.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});this.dispatchEvent(i)};this.eoxMap.interactions.drawInteraction.on("drawend",r=>{t(r.feature),this.eoxMap.removeInteraction("drawInteraction")}),this.eoxMap.interactions.drawInteraction_modify.on("modifyend",r=>{t(r.features.getArray()[0])})},1e3)}createFeatureUrl(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}reset(){var t;const e=this.eoxMap.getLayerById("draw").getSource();((t=e.getFeatures())==null?void 0:t.length)>0&&(e.clear(),this.eoxMap.removeInteraction("drawInteraction_modify"),this.setup())}};Le([v()],Ve.prototype,"geometry",2);Le([X()],Ve.prototype,"eoxMap",2);Ve=Le([L("eox-itemfilter-spatial-filter")],Ve);var Xs=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,Nr=(e,t,r,i)=>{for(var s=i>1?void 0:i?Ys(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Xs(t,r,s),s};let at=class extends T{constructor(){super(...arguments),this.inputHandler=()=>{const e=this.renderRoot.querySelector("input[type='text']");this.filterObject.keys.forEach(t=>{this.filterObject.state[t]=e.value}),this.filterObject.dirty=!0,this.filterObject.stringifiedState=e.value,this.dispatchEvent(new CustomEvent("filter"))},this.debouncedInputHandler=dr(this.inputHandler,500,{leading:!0})}reset(){const e=this.renderRoot.querySelector("input[type='text']");e.value="",xe(this.filterObject),this.filterObject.dirty=!1,this.requestUpdate()}createRenderRoot(){return this}render(){return S(this.filterObject,()=>m`
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
      `)}};Nr([v()],at.prototype,"filterObject",2);at=Nr([L("eox-itemfilter-text")],at);var Js=Object.defineProperty,Zs=Object.getOwnPropertyDescriptor,ue=(e,t,r,i)=>{for(var s=i>1?void 0:i?Zs(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&Js(t,r,s),s};let se=class extends T{constructor(){super(...arguments),this.idProperty="id",this.items=[],this.titleProperty="title",this.unstyled=!1,this.inputText="",this.replaceInput=null,this._clickOutsideListener=()=>{this.items.forEach(e=>{delete e._inProgress}),this.requestUpdate()},this._keyboardEventListener=e=>{["Enter","Escape","Space"].includes(e.code)&&this._handleKeyboard(e.code)}}_handleKeyboard(e){var n,o,a,l,c,u;if(this.clientHeight===0)return;const t=this.items.find(h=>h._inProgress),r=(t==null?void 0:t.type)==="text"&&(t==null?void 0:t.dirty),i=this.renderRoot.querySelector("#inline-input"),s=(u=(c=(l=(a=(o=(n=this.renderRoot)==null?void 0:n.querySelector("[data-filter]"))==null?void 0:o.querySelector("eox-autocomplete"))==null?void 0:a.renderRoot)==null?void 0:l.querySelector("eox-selectionlist"))==null?void 0:c.renderRoot)==null?void 0:u.querySelector("li.highlighted");if(e=="Enter"&&s&&i.selectionStart&&(s.querySelector("input[type=checkbox]").dispatchEvent(new Event("change")),i.selectionStart=0,i.value="",i.focus()),["Escape","Space"].includes(e)||e=="Enter"&&r){t&&(delete t._inProgress,this.requestUpdate(),this.inputText="",this.renderRoot.querySelector("input").value="",this.renderRoot.querySelector("input").focus()),this.renderRoot.querySelector("[slot=content]").classList.remove("hidden");return}}_handleReset(e){e.forEach(t=>{xe(t),delete t._inProgress,delete t.stringifiedState}),this.renderRoot.querySelector("[slot=content]").classList.remove("hidden"),this.requestUpdate(),this.dispatchEvent(new CustomEvent("filter"))}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",this._keyboardEventListener),window.addEventListener("click",this._clickOutsideListener)}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this._keyboardEventListener),window.removeEventListener("click",this._clickOutsideListener)}render(){return m`
      <style>
        :host,
        .container {
          display: flex;
        }
        ${this.unstyled?O:m`
              ${gt} :host { position: relative; } .container { width: 100%;
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
              ${S(!this.items.find(e=>e._inProgress),()=>m`
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
              ${S(this.items.find(e=>e._inProgress),()=>De`
            <eox-itemfilter-${fe(this.items.find(e=>e._inProgress).type)}
              data-filter=${this.items.find(e=>e._inProgress).id}
              slot="dropdown"
              .filterObject=${this.items.find(e=>e._inProgress)}
              .unstyled=${this.unstyled}
              .inline=${!0}
              @filter=${()=>{this.dispatchEvent(new CustomEvent("filter"))}}
              @click=${e=>{e.stopPropagation()}}
            ></eox-itemfilter-${fe(this.items.find(e=>e._inProgress).type)}>
  `)}
            </div>
          </eox-dropdown>
        </div>
      </div>
      ${S(this.items.filter(e=>e.stringifiedState||e._inProgress).length>0,()=>m`
          <div class="button-container">
            <button
              class="icon"
              @click=${()=>{this._handleReset(this.items.filter(e=>e.stringifiedState||e._inProgress))}}
            >
              ✕
            </button>
          </div>
        `)}
    `}};ue([v()],se.prototype,"idProperty",2);ue([v()],se.prototype,"items",2);ue([v()],se.prototype,"titleProperty",2);ue([v()],se.prototype,"unstyled",2);ue([X()],se.prototype,"inputText",2);ue([X()],se.prototype,"replaceInput",2);se=ue([L("eox-itemfilter-inline")],se);function Q(e){return Array.isArray?Array.isArray(e):Hr(e)==="[object Array]"}const en=1/0;function tn(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-en?"-0":t}function rn(e){return e==null?"":tn(e)}function H(e){return typeof e=="string"}function Dr(e){return typeof e=="number"}function sn(e){return e===!0||e===!1||nn(e)&&Hr(e)=="[object Boolean]"}function Br(e){return typeof e=="object"}function nn(e){return Br(e)&&e!==null}function R(e){return e!=null}function rt(e){return!e.trim().length}function Hr(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const on="Incorrect 'index' type",ln=e=>`Invalid value for key ${e}`,an=e=>`Pattern length exceeds max of ${e}.`,cn=e=>`Missing ${e} property in key`,un=e=>`Property 'weight' in key '${e}' must be a positive integer`,Wt=Object.prototype.hasOwnProperty;class hn{constructor(t){this._keys=[],this._keyMap={};let r=0;t.forEach(i=>{let s=Ur(i);this._keys.push(s),this._keyMap[s.id]=s,r+=s.weight}),this._keys.forEach(i=>{i.weight/=r})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ur(e){let t=null,r=null,i=null,s=1,n=null;if(H(e)||Q(e))i=e,t=zt(e),r=ct(e);else{if(!Wt.call(e,"name"))throw new Error(cn("name"));const o=e.name;if(i=o,Wt.call(e,"weight")&&(s=e.weight,s<=0))throw new Error(un(o));t=zt(o),r=ct(o),n=e.getFn}return{path:t,id:r,weight:s,src:i,getFn:n}}function zt(e){return Q(e)?e:e.split(".")}function ct(e){return Q(e)?e.join("."):e}function dn(e,t){let r=[],i=!1;const s=(n,o,a)=>{if(R(n))if(!o[a])r.push(n);else{let l=o[a];const c=n[l];if(!R(c))return;if(a===o.length-1&&(H(c)||Dr(c)||sn(c)))r.push(rn(c));else if(Q(c)){i=!0;for(let u=0,h=c.length;u<h;u+=1)s(c[u],o,a+1)}else o.length&&s(c,o,a+1)}};return s(e,H(t)?t.split("."):t,0),i?r:r[0]}const fn={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},pn={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},gn={location:0,threshold:.6,distance:100},mn={useExtendedSearch:!1,getFn:dn,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var y={...pn,...fn,...gn,...mn};const yn=/[^ ]+/g;function vn(e=1,t=3){const r=new Map,i=Math.pow(10,t);return{get(s){const n=s.match(yn).length;if(r.has(n))return r.get(n);const o=1/Math.pow(n,.5*e),a=parseFloat(Math.round(o*i)/i);return r.set(n,a),a},clear(){r.clear()}}}class Lt{constructor({getFn:t=y.getFn,fieldNormWeight:r=y.fieldNormWeight}={}){this.norm=vn(r,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((r,i)=>{this._keysMap[r.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,H(this.docs[0])?this.docs.forEach((t,r)=>{this._addString(t,r)}):this.docs.forEach((t,r)=>{this._addObject(t,r)}),this.norm.clear())}add(t){const r=this.size();H(t)?this._addString(t,r):this._addObject(t,r)}removeAt(t){this.records.splice(t,1);for(let r=t,i=this.size();r<i;r+=1)this.records[r].i-=1}getValueForItemAtKeyId(t,r){return t[this._keysMap[r]]}size(){return this.records.length}_addString(t,r){if(!R(t)||rt(t))return;let i={v:t,i:r,n:this.norm.get(t)};this.records.push(i)}_addObject(t,r){let i={i:r,$:{}};this.keys.forEach((s,n)=>{let o=s.getFn?s.getFn(t):this.getFn(t,s.path);if(R(o)){if(Q(o)){let a=[];const l=[{nestedArrIndex:-1,value:o}];for(;l.length;){const{nestedArrIndex:c,value:u}=l.pop();if(R(u))if(H(u)&&!rt(u)){let h={v:u,i:c,n:this.norm.get(u)};a.push(h)}else Q(u)&&u.forEach((h,f)=>{l.push({nestedArrIndex:f,value:h})})}i.$[n]=a}else if(H(o)&&!rt(o)){let a={v:o,n:this.norm.get(o)};i.$[n]=a}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function Wr(e,t,{getFn:r=y.getFn,fieldNormWeight:i=y.fieldNormWeight}={}){const s=new Lt({getFn:r,fieldNormWeight:i});return s.setKeys(e.map(Ur)),s.setSources(t),s.create(),s}function bn(e,{getFn:t=y.getFn,fieldNormWeight:r=y.fieldNormWeight}={}){const{keys:i,records:s}=e,n=new Lt({getFn:t,fieldNormWeight:r});return n.setKeys(i),n.setIndexRecords(s),n}function Ie(e,{errors:t=0,currentLocation:r=0,expectedLocation:i=0,distance:s=y.distance,ignoreLocation:n=y.ignoreLocation}={}){const o=t/e.length;if(n)return o;const a=Math.abs(i-r);return s?o+a/s:a?1:o}function xn(e=[],t=y.minMatchCharLength){let r=[],i=-1,s=-1,n=0;for(let o=e.length;n<o;n+=1){let a=e[n];a&&i===-1?i=n:!a&&i!==-1&&(s=n-1,s-i+1>=t&&r.push([i,s]),i=-1)}return e[n-1]&&n-i>=t&&r.push([i,n-1]),r}const le=32;function wn(e,t,r,{location:i=y.location,distance:s=y.distance,threshold:n=y.threshold,findAllMatches:o=y.findAllMatches,minMatchCharLength:a=y.minMatchCharLength,includeMatches:l=y.includeMatches,ignoreLocation:c=y.ignoreLocation}={}){if(t.length>le)throw new Error(an(le));const u=t.length,h=e.length,f=Math.max(0,Math.min(i,h));let d=n,p=f;const g=a>1||l,x=g?Array(h):[];let b;for(;(b=e.indexOf(t,p))>-1;){let C=Ie(t,{currentLocation:b,expectedLocation:f,distance:s,ignoreLocation:c});if(d=Math.min(C,d),p=b+u,g){let Z=0;for(;Z<u;)x[b+Z]=1,Z+=1}}p=-1;let E=[],w=1,$=u+h;const _=1<<u-1;for(let C=0;C<u;C+=1){let Z=0,ee=$;for(;Z<ee;)Ie(t,{errors:C,currentLocation:f+ee,expectedLocation:f,distance:s,ignoreLocation:c})<=d?Z=ee:$=ee,ee=Math.floor(($-Z)/2+Z);$=ee;let Ct=Math.max(1,f-ee+1),tt=o?h:Math.min(f+ee,h)+u,he=Array(tt+2);he[tt+1]=(1<<C)-1;for(let F=tt;F>=Ct;F-=1){let Ae=F-1,At=r[e.charAt(Ae)];if(g&&(x[Ae]=+!!At),he[F]=(he[F+1]<<1|1)&At,C&&(he[F]|=(E[F+1]|E[F])<<1|1|E[F+1]),he[F]&_&&(w=Ie(t,{errors:C,currentLocation:Ae,expectedLocation:f,distance:s,ignoreLocation:c}),w<=d)){if(d=w,p=Ae,p<=f)break;Ct=Math.max(1,2*f-p)}}if(Ie(t,{errors:C+1,currentLocation:f,expectedLocation:f,distance:s,ignoreLocation:c})>d)break;E=he}const oe={isMatch:p>=0,score:Math.max(.001,w)};if(g){const C=xn(x,a);C.length?l&&(oe.indices=C):oe.isMatch=!1}return oe}function En(e){let t={};for(let r=0,i=e.length;r<i;r+=1){const s=e.charAt(r);t[s]=(t[s]||0)|1<<i-r-1}return t}class zr{constructor(t,{location:r=y.location,threshold:i=y.threshold,distance:s=y.distance,includeMatches:n=y.includeMatches,findAllMatches:o=y.findAllMatches,minMatchCharLength:a=y.minMatchCharLength,isCaseSensitive:l=y.isCaseSensitive,ignoreLocation:c=y.ignoreLocation}={}){if(this.options={location:r,threshold:i,distance:s,includeMatches:n,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(f,d)=>{this.chunks.push({pattern:f,alphabet:En(f),startIndex:d})},h=this.pattern.length;if(h>le){let f=0;const d=h%le,p=h-d;for(;f<p;)u(this.pattern.substr(f,le),f),f+=le;if(d){const g=h-le;u(this.pattern.substr(g),g)}}else u(this.pattern,0)}searchIn(t){const{isCaseSensitive:r,includeMatches:i}=this.options;if(r||(t=t.toLowerCase()),this.pattern===t){let p={isMatch:!0,score:0};return i&&(p.indices=[[0,t.length-1]]),p}const{location:s,distance:n,threshold:o,findAllMatches:a,minMatchCharLength:l,ignoreLocation:c}=this.options;let u=[],h=0,f=!1;this.chunks.forEach(({pattern:p,alphabet:g,startIndex:x})=>{const{isMatch:b,score:E,indices:w}=wn(t,p,g,{location:s+x,distance:n,threshold:o,findAllMatches:a,minMatchCharLength:l,includeMatches:i,ignoreLocation:c});b&&(f=!0),h+=E,b&&w&&(u=[...u,...w])});let d={isMatch:f,score:f?h/this.chunks.length:1};return f&&i&&(d.indices=u),d}}class ne{constructor(t){this.pattern=t}static isMultiMatch(t){return Vt(t,this.multiRegex)}static isSingleMatch(t){return Vt(t,this.singleRegex)}search(){}}function Vt(e,t){const r=e.match(t);return r?r[1]:null}class Sn extends ne{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const r=t===this.pattern;return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class _n extends ne{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const i=t.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,t.length-1]}}}class $n extends ne{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const r=t.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class Pn extends ne{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const r=!t.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class On extends ne{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const r=t.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Rn extends ne{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const r=!t.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class Vr extends ne{constructor(t,{location:r=y.location,threshold:i=y.threshold,distance:s=y.distance,includeMatches:n=y.includeMatches,findAllMatches:o=y.findAllMatches,minMatchCharLength:a=y.minMatchCharLength,isCaseSensitive:l=y.isCaseSensitive,ignoreLocation:c=y.ignoreLocation}={}){super(t),this._bitapSearch=new zr(t,{location:r,threshold:i,distance:s,includeMatches:n,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Kr extends ne{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let r=0,i;const s=[],n=this.pattern.length;for(;(i=t.indexOf(this.pattern,r))>-1;)r=i+n,s.push([i,r-1]);const o=!!s.length;return{isMatch:o,score:o?0:1,indices:s}}}const ut=[Sn,Kr,$n,Pn,Rn,On,_n,Vr],Kt=ut.length,Mn=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ln="|";function Cn(e,t={}){return e.split(Ln).map(r=>{let i=r.trim().split(Mn).filter(n=>n&&!!n.trim()),s=[];for(let n=0,o=i.length;n<o;n+=1){const a=i[n];let l=!1,c=-1;for(;!l&&++c<Kt;){const u=ut[c];let h=u.isMultiMatch(a);h&&(s.push(new u(h,t)),l=!0)}if(!l)for(c=-1;++c<Kt;){const u=ut[c];let h=u.isSingleMatch(a);if(h){s.push(new u(h,t));break}}}return s})}const An=new Set([Vr.type,Kr.type]);class kn{constructor(t,{isCaseSensitive:r=y.isCaseSensitive,includeMatches:i=y.includeMatches,minMatchCharLength:s=y.minMatchCharLength,ignoreLocation:n=y.ignoreLocation,findAllMatches:o=y.findAllMatches,location:a=y.location,threshold:l=y.threshold,distance:c=y.distance}={}){this.query=null,this.options={isCaseSensitive:r,includeMatches:i,minMatchCharLength:s,findAllMatches:o,ignoreLocation:n,location:a,threshold:l,distance:c},this.pattern=r?t:t.toLowerCase(),this.query=Cn(this.pattern,this.options)}static condition(t,r){return r.useExtendedSearch}searchIn(t){const r=this.query;if(!r)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:s}=this.options;t=s?t:t.toLowerCase();let n=0,o=[],a=0;for(let l=0,c=r.length;l<c;l+=1){const u=r[l];o.length=0,n=0;for(let h=0,f=u.length;h<f;h+=1){const d=u[h],{isMatch:p,indices:g,score:x}=d.search(t);if(p){if(n+=1,a+=x,i){const b=d.constructor.type;An.has(b)?o=[...o,...g]:o.push(g)}}else{a=0,n=0,o.length=0;break}}if(n){let h={isMatch:!0,score:a/n};return i&&(h.indices=o),h}}return{isMatch:!1,score:1}}}const ht=[];function In(...e){ht.push(...e)}function dt(e,t){for(let r=0,i=ht.length;r<i;r+=1){let s=ht[r];if(s.condition(e,t))return new s(e,t)}return new zr(e,t)}const Ke={AND:"$and",OR:"$or"},ft={PATH:"$path",PATTERN:"$val"},pt=e=>!!(e[Ke.AND]||e[Ke.OR]),Tn=e=>!!e[ft.PATH],Fn=e=>!Q(e)&&Br(e)&&!pt(e),Gt=e=>({[Ke.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Gr(e,t,{auto:r=!0}={}){const i=s=>{let n=Object.keys(s);const o=Tn(s);if(!o&&n.length>1&&!pt(s))return i(Gt(s));if(Fn(s)){const l=o?s[ft.PATH]:n[0],c=o?s[ft.PATTERN]:s[l];if(!H(c))throw new Error(ln(l));const u={keyId:ct(l),pattern:c};return r&&(u.searcher=dt(c,t)),u}let a={children:[],operator:n[0]};return n.forEach(l=>{const c=s[l];Q(c)&&c.forEach(u=>{a.children.push(i(u))})}),a};return pt(e)||(e=Gt(e)),i(e)}function qn(e,{ignoreFieldNorm:t=y.ignoreFieldNorm}){e.forEach(r=>{let i=1;r.matches.forEach(({key:s,norm:n,score:o})=>{const a=s?s.weight:null;i*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(t?1:n))}),r.score=i})}function jn(e,t){const r=e.matches;t.matches=[],R(r)&&r.forEach(i=>{if(!R(i.indices)||!i.indices.length)return;const{indices:s,value:n}=i;let o={indices:s,value:n};i.key&&(o.key=i.key.src),i.idx>-1&&(o.refIndex=i.idx),t.matches.push(o)})}function Nn(e,t){t.score=e.score}function Dn(e,t,{includeMatches:r=y.includeMatches,includeScore:i=y.includeScore}={}){const s=[];return r&&s.push(jn),i&&s.push(Nn),e.map(n=>{const{idx:o}=n,a={item:t[o],refIndex:o};return s.length&&s.forEach(l=>{l(n,a)}),a})}class Ee{constructor(t,r={},i){this.options={...y,...r},this.options.useExtendedSearch,this._keyStore=new hn(this.options.keys),this.setCollection(t,i)}setCollection(t,r){if(this._docs=t,r&&!(r instanceof Lt))throw new Error(on);this._myIndex=r||Wr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){R(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const r=[];for(let i=0,s=this._docs.length;i<s;i+=1){const n=this._docs[i];t(n,i)&&(this.removeAt(i),i-=1,s-=1,r.push(n))}return r}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:r=-1}={}){const{includeMatches:i,includeScore:s,shouldSort:n,sortFn:o,ignoreFieldNorm:a}=this.options;let l=H(t)?H(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return qn(l,{ignoreFieldNorm:a}),n&&l.sort(o),Dr(r)&&r>-1&&(l=l.slice(0,r)),Dn(l,this._docs,{includeMatches:i,includeScore:s})}_searchStringList(t){const r=dt(t,this.options),{records:i}=this._myIndex,s=[];return i.forEach(({v:n,i:o,n:a})=>{if(!R(n))return;const{isMatch:l,score:c,indices:u}=r.searchIn(n);l&&s.push({item:n,idx:o,matches:[{score:c,value:n,norm:a,indices:u}]})}),s}_searchLogical(t){const r=Gr(t,this.options),i=(a,l,c)=>{if(!a.children){const{keyId:h,searcher:f}=a,d=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(l,h),searcher:f});return d&&d.length?[{idx:c,item:l,matches:d}]:[]}const u=[];for(let h=0,f=a.children.length;h<f;h+=1){const d=a.children[h],p=i(d,l,c);if(p.length)u.push(...p);else if(a.operator===Ke.AND)return[]}return u},s=this._myIndex.records,n={},o=[];return s.forEach(({$:a,i:l})=>{if(R(a)){let c=i(r,a,l);c.length&&(n[l]||(n[l]={idx:l,item:a,matches:[]},o.push(n[l])),c.forEach(({matches:u})=>{n[l].matches.push(...u)}))}}),o}_searchObjectList(t){const r=dt(t,this.options),{keys:i,records:s}=this._myIndex,n=[];return s.forEach(({$:o,i:a})=>{if(!R(o))return;let l=[];i.forEach((c,u)=>{l.push(...this._findMatches({key:c,value:o[u],searcher:r}))}),l.length&&n.push({idx:a,item:o,matches:l})}),n}_findMatches({key:t,value:r,searcher:i}){if(!R(r))return[];let s=[];if(Q(r))r.forEach(({v:n,i:o,n:a})=>{if(!R(n))return;const{isMatch:l,score:c,indices:u}=i.searchIn(n);l&&s.push({score:c,key:t,value:n,idx:o,norm:a,indices:u})});else{const{v:n,n:o}=r,{isMatch:a,score:l,indices:c}=i.searchIn(n);a&&s.push({score:l,key:t,value:n,norm:o,indices:c})}return s}}Ee.version="7.0.0";Ee.createIndex=Wr;Ee.parseIndex=bn;Ee.config=y;Ee.parseQuery=Gr;In(kn);const Bn=(e,t="highlight",r="title")=>{const i=(n,o,a)=>{const l=o.split(".");let c;for(c=0;c<l.length-1;c++)n=n[l[c]];n[l[c]]=a},s=(n,o=[])=>{let a="",l=0;return o.forEach(c=>{const u=c[1]+1;a+=[n.substring(l,c[0]),`<mark class="${t}">`,n.substring(c[0],u),"</mark>"].join(""),l=u}),a+=n.substring(l),a};return e.filter(({matches:n})=>n&&n.length).map(({item:n,matches:o})=>{const a={};for(const[l,c]of Object.entries(n))a[l]=c;return o.forEach(l=>{l.key===r&&i(a,l.key,s(l.value,l.indices))}),a})};let Qr;const Hn=(e,t)=>{Qr=new Ee(e,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...t})},Un=async(e,t,r)=>{const i=Object.entries(t).filter(([,a])=>a.type==="text"||a.type==="select"||a.type==="multiselect").reduce((a,[l,c])=>{const u="$or",h=[],f=(d,p)=>{const g={};c.type==="text"?g[d]=`${p}`:g[l]=`="${d}"`,h.push(g)};return Object.entries(c.state).filter(([,d])=>d).forEach(([d,p])=>f(d,p)),h.length>0&&a.push({[u]:h}),a},[]);let s;if(!(i.length>0)&&r.matchAllWhenEmpty!==!1)s=e;else{const a={$and:[...i]},l=Qr.search(a);s=r.enableHighlighting?Bn(l,"highlight",r.titleProperty):l.map(c=>c.item)}const n=Object.entries(t).filter(([,a])=>a.type==="range").reduce((a,[l,c])=>(a[l]={min:c.state.min,max:c.state.max,format:c.format},a),{});if(Object.keys(n).length>0){const a=[];for(let l=0;l<s.length;l++){const c={};for(const[u,h]of Object.entries(n)){const f=d=>h.format==="date"?pe(d).unix():d;Object.prototype.hasOwnProperty.call(s[l],u)?Array.isArray(s[l][u])?c[u]=n[u].min<=f(s[l][u][1])&&f(s[l][u][0])<=n[u].max:f(s[l][u])>=n[u].min&&f(s[l][u])<=n[u].max?c[u]=!0:c[u]=!1:c[u]=!0}Object.values(c).every(u=>!!u)&&a.push(s[l])}s=[...a]}const o=Object.entries(t).filter(([,a])=>a.type==="spatial").reduce((a,[l,c])=>(a[l]={geometry:c.state.geometry,mode:c.state.mode},a),{});if(Object.values(o).map(a=>a.geometry).filter(a=>!!a).length>0){const a=[];for(let l=0;l<s.length;l++){const c={};for(const u of Object.keys(o)){const h=o[u].mode||"within";Object.prototype.hasOwnProperty.call(s[l],u)&&(h==="within"?Qs(s[l][u],o[u].geometry):Gs(s[l][u],o[u].geometry))?c[u]=!0:c[u]=!1}Object.values(c).every(u=>!!u)&&a.push(s[l])}s=[...a]}return s},Wn=async(e,t,r)=>(await(await fetch(`${r.externalFilter(e,t)}`)).json()).features;var zn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,J=(e,t,r,i)=>{for(var s=i>1?void 0:i?Vn(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&zn(t,r,s),s};class Qt{constructor(){this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.filterProperties=[],this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.onFilter=()=>{},this.onSelect=()=>{},this.showResults=!0,this.titleProperty="title",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0}}let W=class extends Yr{constructor(){super(...arguments),this._resultAggregation=[],this._items=[],this.filters={},this._config=new Qt,this.apply=e=>{this._items=e.map((r,i)=>({id:`item-${i}`,...r})),this._config.filterProperties.length&&this._config.filterProperties.forEach(r=>{const i={},s=n=>r.format==="date"?pe(n).unix():parseInt(n);this._items.forEach(n=>{if(r.type==="range"){if(Array.isArray(n[r.key])){const o=[s(n[r.key][0]),s(n[r.key][1])];i.min=i.min!==void 0?Math.min(i.min,o[0]):o[0],i.max=i.max!==void 0?Math.max(i.max,o[1]):o[1]}else{const o=s(n[r.key]);i.min=i.min!==void 0?Math.min(i.min,o):o,i.max=i.max!==void 0?Math.max(i.max,o):o}return}Array.isArray(n[r.key])?n[r.key].forEach(o=>{i[o]=void 0}):r.type==="spatial"?(i.geometry=void 0,i.mode=r.mode||"intersects"):i[n[r.key]]=void 0}),this.filters[r.key||r.keys.join("|")]={...r,type:r.type||"multiselect",state:{...i,...r.state},...r.state&&{dirty:!1},...r.type==="range"&&{min:i.min,max:i.max,format:r.format}}}),this._config.matchAllWhenEmpty!==!1&&(this.results=this.sortResults(this._items),this.requestUpdate()),this._config.aggregateResults&&(this._resultAggregation=[...new Set(this._items.reduce((r,i)=>r.concat(i[this._config.aggregateResults]),[]))].sort((r,i)=>r.localeCompare(i)));const t=[];Object.values(this.filters).forEach(r=>{r.type==="text"?r.keys.forEach(i=>{t.includes(i)||t.push(i)}):(r.type==="select"||r.type==="multiselect")&&(t.includes(r.key)||t.push(r.key))}),Hn(this._items,{keys:t,...this._config.fuseConfig}),this.search()}}set items(e){this.apply(e)}get items(){return this._items}set config(e){const t=this._config;this._config={...new Qt,...e},this.requestUpdate("config",t)}get config(){return this._config}async search(){let e;this.config.externalFilter?e=await Wn(this._items,this.filters,this._config):e=await Un(this._items,this.filters,this._config),this.results=this.sortResults(e),this._config.onFilter(this.results,this.filters)}aggregateResults(e,t){return e.filter(r=>{const i=r[this._config.aggregateResults];let s;return this.filters[this._config.aggregateResults]&&(s=Object.keys(this.filters[this._config.aggregateResults]).filter(o=>this.filters[this._config.aggregateResults].state[o])),(s!=null&&s.length?s.includes(t):!0)&&Array.isArray(i)?i.includes(t):i===t})}createItemList(e){return m`
      <ul>
        ${hr(this.aggregateResults(this.results,e),t=>t.id,t=>{var r,i;return m`
            <li
              class=${((r=this.selectedResult)==null?void 0:r[this._config.titleProperty])===t[this._config.titleProperty]?"highlighted":O}
            >
              <label>
                <input
                  data-cy="result-radio"
                  type="radio"
                  class="result-radio"
                  name="result"
                  id="${t.id}"
                  ?checked=${((i=this.selectedResult)==null?void 0:i[this._config.titleProperty])===t[this._config.titleProperty]||O}
                  @click=${()=>{this.selectedResult=t,this._config.onSelect(t)}}
                />
                ${S(this.hasTemplate("result"),()=>this.renderTemplate("result",t,`result-${t.id}`),()=>m`
                    <span class="title"
                      >${kt(t[this._config.titleProperty])}</span
                    >
                  `)}
              </label>
            </li>
          `})}
      </ul>
    `}sortResults(e){return[...e].sort((t,r)=>t[this._config.titleProperty].localeCompare(r[this._config.titleProperty]))}resetFilters(){this.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{e.reset()}),this.search()}toggleAccordion(e){let t;if(e.detail?t=e.detail.target:t=e.target,t.classList.contains("details-filter")){if(!t.open||this.config.expandMultipleFilters)return;this.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const i=r.shadowRoot.querySelector(".details-filter");i&&i!==t&&i.removeAttribute("open")})}else{if(!t.open||this.config.expandMultipleResults)return;this.shadowRoot.querySelectorAll("details").forEach(r=>{r!==t&&r.removeAttribute("open")})}}render(){return m`
      <style>
        ${mt}
        ${!this.unstyled&&yt}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        @submit="${e=>e.preventDefault()}"
      >
        ${S(this._config.inlineMode,()=>m`
            <eox-itemfilter-inline
              .items=${Object.values(this.filters)}
              .unstyled=${this.unstyled}
              @filter=${()=>this.search()}
            >
            </eox-itemfilter-inline>
          `,()=>m`
            ${S(this._config.filterProperties.length,()=>m`
                <section
                  class="${this.config.inlineMode?"inline":O}"
                >
                  ${S(!this.config.inlineMode,()=>m`
                        <slot name="filterstitle"
                          ><h4 style="margin-top: 8px">Filters</h4></slot
                        >
                      `)}
                  <ul id="filters">
                    ${Se(Object.values(this.filters),e=>De`
                    <li>
                      ${e.featured?De`
                            <eox-itemfilter-${fe(e.type)}
                              slot="filter"
                              data-type="filter"
                              .filterObject=${e}
                              .unstyled=${this.unstyled}
                              @filter="${()=>this.search()}"
                            ></eox-itemfilter-${fe(e.type)}>
                          `:De`
                            <eox-itemfilter-expandcontainer
                              .filterObject=${e}
                              .unstyled=${this.unstyled}
                              @details-toggled=${this.toggleAccordion}
                            >
                            ${S(e.dirty,()=>m`
                                <button
                                  slot="reset-button"
                                  class="reset-icon icon"
                                  @click=${t=>{t.target.parentElement.querySelector("[slot=filter]").reset(),this.search(),this.requestUpdate()}}
                                >
                                  ${this.unstyled?"Reset":O}
                                </button>
                              `)}
                              <eox-itemfilter-${fe(e.type)}
                                slot="filter"
                                data-type="filter"
                                data-filter="${e.key}"
                                .filterObject=${e}
                                .unstyled=${this.unstyled}
                                @filter="${()=>this.search()}"
                              ></eox-itemfilter-${fe(e.type)}>
                            </eox-itemfilter-expandcontainer>
                        `}
                    </li>
                  `)}
                  </ul>
                  ${S(this._config.filterProperties&&Object.values(this.filters).map(e=>e.dirty).filter(e=>e).length>0,()=>m`
                    <button
                      id="filter-reset"
                      class="outline small icon-text reset-icon"
                      data-cy="filter-reset"
                      @click=${()=>this.resetFilters()}
                    >
                      Reset all
                    </a>
                  `)}
                </section>
              `)}
            ${S(this.config.showResults&&this.results,()=>m`
                <section id="section-results">
                  <div>
                    <slot name="resultstitle"
                      ><h4 style="margin-top: 8px">Results</h4></slot
                    >
                  </div>
                  <div id="container-results" class="scroll">
                    ${this.results.length<1?m`
                          <small class="no-results">No matching items</small>
                        `:O}
                    <ul id="results" part="results">
                      ${this._config.aggregateResults?Se(this._resultAggregation.filter(e=>this.aggregateResults(this.results,e).length),e=>m` ${S(this.aggregateResults(this.results,e).length===1&&this.config.autoSpreadSingle,()=>m` <div style="margin-left: -8px">
                                  ${this.createItemList(e)}
                                </div>`,()=>m`
                                  <details
                                    class="details-results"
                                    @toggle=${this.toggleAccordion}
                                    ?open=${this._config.expandResults||O}
                                  >
                                    <summary>
                                      <span class="title">
                                        ${e}
                                        <span class="count"
                                          >${this.aggregateResults(this.results,e).length}</span
                                        >
                                      </span>
                                    </summary>
                                    <div>
                                      ${this.createItemList(e)}
                                    </div>
                                  </details>
                                `)}`):Se(this.results,e=>m`<li part="result">
                                <label>
                                  <input
                                    type="radio"
                                    name="result"
                                    id="${e.id}"
                                    @click=${()=>{this.selectedResult=e,this._config.onSelect(e)}}
                                  />
                                  ${S(this.hasTemplate("result"),()=>this.renderTemplate("result",e,`result-${e.id}`),()=>m`
                                      <span class="title"
                                        >${kt(e[this._config.titleProperty])}</span
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
    `}};J([X()],W.prototype,"filters",2);J([X()],W.prototype,"results",2);J([X()],W.prototype,"selectedResult",2);J([v({attribute:!1})],W.prototype,"items",1);J([v({attribute:!1})],W.prototype,"config",1);J([v()],W.prototype,"apply",2);J([v({attribute:!1})],W.prototype,"styleOverride",2);J([v({type:Boolean})],W.prototype,"unstyled",2);W=J([L("eox-itemfilter")],W);const Ce=[{archived:!1,code:"E10a2",description:"Actively managed total area from Sentinel-2 data",indicator:"Actively managed total area from Sentinel-2 data",themes:["agriculture"],title:"White Asparagus area [%]",name:"Actively managed total area from Sentinel-2 data",year:2e3,likes:4,years:[2e3,2e3],timestamp:"2023-06-14T13:56:38+00:00",datetime:["2023-06-14T10:56:38+00:00","2023-06-14T22:56:38+00:00"],bbox:[-90,60,-20,82],geometry:{type:"Polygon",coordinates:[[[-90,60],[-20,60],[-20,82],[-90,82]]]}},{archived:!1,code:"E10a9",description:"Agricultural Workers",indicator:"Agricultural Workers",themes:["agriculture"],title:"Workers availability [nr]",name:"Agricultural Workers",year:2020,likes:46,years:[2007,2020],timestamp:"2023-06-13T13:56:38+00:00",datetime:["2023-06-13T10:56:38+00:00","2023-06-13T22:56:38+00:00"],bbox:[0,0,10,10],geometry:{type:"Polygon",coordinates:[[[0,0],[10,0],[10,10],[0,10]]]}},{archived:!1,code:"N1",description:"Air Quality",indicator:"Air Quality",themes:["air"],title:"Sea ice freeboard",name:"Sea ice freeboard",year:2023,likes:34,years:[2008,2023],timestamp:"2023-06-12T13:56:38+00:00",datetime:["2023-06-12T10:56:38+00:00","2023-06-12T22:56:38+00:00"],bbox:[-180,-80,180,-61],geometry:{type:"Polygon",coordinates:[[[-180,-80],[180,-80],[180,-61],[-180,-61]]]}},{archived:!1,code:"E13o",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (all) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2022,likes:177,years:[2021,2022],timestamp:"2023-06-11T13:56:38+00:00",datetime:["2023-06-11T10:56:38+00:00","2023-06-11T22:56:38+00:00"]},{archived:!1,code:"E13p",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (cargo) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2016,likes:0,years:[2005,2016],timestamp:"2023-06-10T13:56:38+00:00",datetime:["2023-06-10T10:56:38+00:00","2023-06-10T22:56:38+00:00"]},{archived:!1,code:"E13q",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (tanker) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2017,likes:0,years:[2006,2017],timestamp:"2023-06-09T13:56:38+00:00",datetime:["2023-06-09T10:56:38+00:00","2023-06-09T22:56:38+00:00"]},{archived:!1,code:"E13r",description:"Average number of vessels in a km2 cell in a given period",indicator:"Average number of vessels in a km2 cell in a given period",themes:["economy"],title:"Vessel density (others) [h/sqkm]",name:"Average number of vessels in a km2 cell in a given period",year:2003,likes:2,years:[2001,2003],timestamp:"2023-06-08T13:56:38+00:00",datetime:["2023-06-08T10:56:38+00:00","2023-06-08T22:56:38+00:00"]},{archived:!1,code:"C1",description:"Boat traffic - NO2 level",indicator:"Boat traffic - NO2 level",themes:["economy","air"],title:"Ships - NO2 Correlation",indicatorOverwrite:"Ports and Shipping - impact on air quality",name:"Boat traffic - NO2 level",year:2020,likes:65,years:[2015,2020],timestamp:"2023-06-07T13:56:38+00:00",datetime:["2023-06-07T10:56:38+00:00","2023-06-07T22:56:38+00:00"]},{archived:!1,code:"CDS1",description:"C3S Data",indicator:"C3S Data",themes:["air"],title:"Temperature",name:"C3S Data",year:2021,likes:34,years:[2021,2021],timestamp:"2023-06-06T13:56:38+00:00",datetime:["2023-06-06T10:56:38+00:00","2023-06-06T22:56:38+00:00"]},{archived:!1,code:"N1a",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level PM2.5 (model)",name:"CAMS Air Quality",year:2023,likes:88,years:[2e3,2023],timestamp:"2023-06-05T13:56:38+00:00",datetime:["2023-06-05T10:56:38+00:00","2023-06-05T22:56:38+00:00"]},{archived:!1,code:"N1b",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level NO2 (model)",name:"CAMS Air Quality",year:2022,likes:77,years:[2019,2022],timestamp:"2023-06-04T13:56:38+00:00",datetime:["2023-06-04T10:56:38+00:00","2023-06-04T22:56:38+00:00"]},{archived:!1,code:"N1c",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level PM10 (model)",name:"CAMS Air Quality",year:2018,likes:23,years:[2014,2018],timestamp:"2023-06-03T13:56:38+00:00",datetime:["2023-06-03T10:56:38+00:00","2023-06-03T22:56:38+00:00"]},{archived:!1,code:"N1d",description:"CAMS Air Quality",indicator:"CAMS Air Quality",themes:["air"],title:"City level O3 (model)",name:"CAMS Air Quality",year:2018,likes:56,years:[2017,2018],timestamp:"2023-06-02T13:56:38+00:00",datetime:["2023-06-02T10:56:38+00:00","2023-06-02T22:56:38+00:00"]},{archived:!1,code:"E13e",description:"Cargo ships in port based on AIS data",indicator:"Cargo ships in port based on AIS data",themes:["economy"],title:"Cargo Ships [nr]",name:"Cargo ships in port based on AIS data",year:2019,likes:11,years:[2018,2019],timestamp:"2023-06-01T13:56:38+00:00",datetime:["2023-06-01T10:56:38+00:00","2023-06-01T22:56:38+00:00"]},{archived:!1,code:"E13n",description:"Changes in traffic based on mobile data",indicator:"Changes in traffic based on mobile data",themes:["economy"],title:"Trucks transiting ports [%]",name:"Changes in traffic based on mobile data",year:2017,likes:8,years:[2015,2017],timestamp:"2023-05-29T13:56:38+00:00",datetime:["2023-05-29T10:56:38+00:00","2023-05-29T22:56:38+00:00"]},{archived:!1,code:"N3c",description:"CMEMS product",indicator:"CMEMS product",themes:["water"],title:"CHL-a concentration (map, 1km)",name:"CMEMS product",year:2015,likes:37,years:[2014,2015],timestamp:"2023-05-28T13:56:38+00:00",datetime:["2023-05-28T10:56:38+00:00","2023-05-28T22:56:38+00:00"]},{archived:!1,code:"CV",description:"Covid-19 cases",indicator:"Covid-19 cases",themes:["health"],title:"Covid-19 cases",name:"Covid-19 cases",year:2013,likes:4,years:[2001,2013],timestamp:"2023-05-27T13:56:38+00:00",datetime:["2023-05-27T10:56:38+00:00","2023-05-27T22:56:38+00:00"]},{archived:!1,code:"OW",description:"Covid-19 vaccinations",indicator:"Covid-19 vaccinations",themes:["health"],title:"Covid-19 vaccinations",name:"Covid-19 vaccinations",year:2016,likes:39,years:[2015,2016],timestamp:"2023-05-26T13:56:38+00:00",datetime:["2023-05-26T10:56:38+00:00","2023-05-26T22:56:38+00:00"]},{archived:!1,code:"E3",description:"Crude Oil and other input materials",indicator:"Crude Oil and other input materials",themes:["economy"],title:"Raw Material Inventory",name:"Crude Oil and other input materials",year:2020,likes:28,years:[2014,2020],timestamp:"2023-05-25T13:56:38+00:00",datetime:["2023-05-25T10:56:38+00:00","2023-05-25T22:56:38+00:00"]},{archived:!1,code:"E13l",description:"Cruise ships in port based on AIS data",indicator:"Cruise ships in port based on AIS data",themes:["economy"],title:"Cruise Ships [nr]",name:"Cruise ships in port based on AIS data",year:1999,likes:17,years:[1998,1999],timestamp:"2023-05-24T13:56:38+00:00",datetime:["2023-05-24T10:56:38+00:00","2023-05-24T22:56:38+00:00"]}],co={title:"Elements/eox-itemfilter",tags:["autodocs"],component:"eox-itemfilter",render:e=>m`<eox-itemfilter
      .config=${e.config}
      .items=${e.items}
    ></eox-itemfilter>`},Te={args:{config:{titleProperty:"title",filterProperties:[{keys:["title","themes"],title:"Search",type:"text",expanded:!0},{key:"themes",title:"Theme",type:"multiselect"},{key:"timestamp",type:"range",format:"date"},{key:"geometry",type:"spatial"}],aggregateResults:"themes",enableHighlighting:!0,onSelect:e=>{console.log(e)}},items:Ce}},Fe={args:{config:{titleProperty:"title",filterProperties:[{keys:["title","themes"],title:"Search",type:"text",expanded:!0},{key:"themes",title:"Theme",type:"multiselect"},{key:"timestamp",type:"range",format:"date"},{key:"geometry",type:"spatial"}],aggregateResults:"themes",autoSpreadSingle:!0,enableHighlighting:!0,onSelect:e=>{console.log(e)}},items:Ce}},qe={args:{config:{titleProperty:"title",filterProperties:[{key:"themes",title:"Theme",type:"multiselect",expanded:!0,state:{air:!0,agriculture:!0}}]},items:Ce}},je={args:{config:{titleProperty:"title",filterProperties:[{key:"themes",title:"Theme",type:"multiselect",expanded:!0,sort:(e,t)=>t.localeCompare(e),state:{air:!0,agriculture:!0}}]},items:Ce}},Ne={args:{config:{inlineMode:!0,titleProperty:"title",filterProperties:[{key:"themes",id:"themes",title:"Theme",type:"multiselect",state:{air:null,agriculture:null}},{key:"timestamp",id:"date",title:"Date",type:"range",format:"date",state:{min:1685232950,max:1686454646}},{key:"geometry",id:"spatial",type:"spatial",title:"Spatial",state:{mode:"intersects"}},{key:"code",id:"code",title:"Code",type:"multiselect"},{keys:["title","themes"],title:"Search",id:"search",type:"text",expanded:!0,state:{title:"no2",themes:"no2"}}],onFilter:e=>console.log(e)},items:Ce}};var Xt,Yt,Jt;Te.parameters={...Te.parameters,docs:{...(Xt=Te.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
  args: {
    config: {
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
    },
    items
  }
}`,...(Jt=(Yt=Te.parameters)==null?void 0:Yt.docs)==null?void 0:Jt.source}}};var Zt,er,tr;Fe.parameters={...Fe.parameters,docs:{...(Zt=Fe.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  args: {
    config: {
      titleProperty: "title",
      filterProperties: [{
        keys: ["title", "themes"],
        title: "Search",
        type: "text",
        expanded: true
      }, {
        key: "themes",
        title: "Theme",
        type: "multiselect"
      }, {
        key: "timestamp",
        type: "range",
        format: "date"
      }, {
        key: "geometry",
        type: "spatial"
      }],
      aggregateResults: "themes",
      autoSpreadSingle: true,
      enableHighlighting: true,
      onSelect: item => {
        console.log(item);
      }
    },
    items
  }
}`,...(tr=(er=Fe.parameters)==null?void 0:er.docs)==null?void 0:tr.source}}};var rr,ir,sr;qe.parameters={...qe.parameters,docs:{...(rr=qe.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    config: {
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
    },
    items
  }
}`,...(sr=(ir=qe.parameters)==null?void 0:ir.docs)==null?void 0:sr.source}}};var nr,or,lr;je.parameters={...je.parameters,docs:{...(nr=je.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    config: {
      titleProperty: "title",
      filterProperties: [{
        key: "themes",
        title: "Theme",
        type: "multiselect",
        expanded: true,
        sort: (a, b) => b.localeCompare(a),
        state: {
          air: true,
          agriculture: true
        }
      }]
    },
    items
  }
}`,...(lr=(or=je.parameters)==null?void 0:or.docs)==null?void 0:lr.source}}};var ar,cr,ur;Ne.parameters={...Ne.parameters,docs:{...(ar=Ne.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    config: {
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
    },
    items
  }
}`,...(ur=(cr=Ne.parameters)==null?void 0:cr.docs)==null?void 0:ur.source}}};const uo=["Primary","AutoSpread","MultiSelect","SortedMultiSelect","InlineMode"];export{Fe as AutoSpread,Ne as InlineMode,qe as MultiSelect,Te as Primary,je as SortedMultiSelect,uo as __namedExportsOrder,co as default};
