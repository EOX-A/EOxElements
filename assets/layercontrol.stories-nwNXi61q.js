var Fo=Object.freeze,Zo=Object.defineProperty;var ii=(t,e,o)=>e in t?Zo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var P=(t,e,o)=>(ii(t,typeof e!="symbol"?e+"":e,o),o),ho=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var A=(t,e,o)=>(ho(t,e,"read from private field"),o?o.call(t):e.get(t)),C=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},ke=(t,e,o,r)=>(ho(t,e,"write to private field"),r?r.call(t,o):e.set(t,o),o);var M=(t,e,o)=>(ho(t,e,"access private method"),o);var ko=(t,e)=>Fo(Zo(t,"raw",{value:Fo(e||t.slice())}));import"./sources-THApo_UP.js";import"./main-7OiawLgd.js";import{x as y,T as be,w as bt,s as ue}from"./lit-element-Qm8PRmVu.js";import{n as ee,o as Tt,a as ai}from"./unsafe-html-ZhFXPF0T.js";import{_ as si,c as li}from"./index-HR78oL6N.js";import{e as di,i as ci,t as $e}from"./directive-xgBC_cM0.js";import{f as ui,m as pi}from"./directive-helpers-k6EzVOeb.js";import"./main-W6pHctbP.js";import{b as hi}from"./button-KPw86qfe.js";import{r as fi,c as pn,s as mi}from"./slider-MCblB636.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-O88xfFMZ.js";import"../sb-preview/runtime.js";import"./state-ncEgtE_C.js";import"./index-EySAwWXj.js";import"./toolcool-range-slider.min-8Vg52R7B.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var E=t=>t!==void 0,hn=(t,e,o)=>e in t?t[e]:t[e]=o;const dt={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};class gi{constructor(e){this._parser=new e}toDocument(e){return this._parser.parseFromString(e,"application/xml")}getAllTextContent(e,o){return co(e,o).join("")}}function co(t,e){return fn(t,e,[]).join("")}function fn(t,e,o){if(t.nodeType===dt.CDATA_SECTION||t.nodeType===dt.TEXT)e?o.push(String(t.nodeValue).replace(/(\r\n|\r|\n)/g,"")):o.push(t.nodeValue);else{var r;for(r=t.firstChild;r;r=r.nextSibling)fn(r,e,o)}return o}function yi(t,e,o,r){for(var n=bi(e);n;n=vi(n)){var i=n.namespaceURI||null,a=t[i];if(E(a)){var s=a[n.localName];E(s)&&s.call(r,n,o)}}}function bi(t){let e=t.firstElementChild||t.firstChild;for(;e&&e.nodeType!==dt.ELEMENT;)e=e.nextSibling;return e}function vi(t){let e=t.nextElementSibling||t.nextSibling;for(;e&&e.nodeType!==dt.ELEMENT;)e=e.nextSibling;return e}function V(t,e,o){return Si(t,e,o)}function Si(t,e,o){var r=E(o)?o:{},n,i;for(n=0,i=t.length;n<i;++n)r[t[n]]=e;return r}function mn(t,e){return function(o,r){var n=t.call(E(e)?e:this,o,r);if(E(n)){var i=r[r.length-1];i.push(n)}}}function I(t,e,o,r,n){return r.push(t),yi(e,o,r,n),r.pop()}function h(t,e,o){return function(r,n){let i=t.call(E(o)?o:this,r,n);if(E(i)){var a=n[n.length-1],s=E(e)?e:r.localName;a[s]=i}}}function Y(t,e,o){return function(r,n){var i=t.call(E(o)?o:this,r,n);if(E(i)){var a=n[n.length-1],s=E(e)?e:r.localName,l=hn(a,s,[]);l.push(i)}}}const wi=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function Ei(t){return t.replace(wi,"")}function _e(t){const e=/^\s*(true|1)|(false|0)\s*$/.exec(t);if(e)return E(e[1])||!1}function De(t){return se(co(t,!1))}function se(t){const e=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(t);if(e)return parseFloat(e[1])}function fo(t){return Pt(co(t,!1))}function Pt(t){const e=/^\s*(\d+)\s*$/.exec(t);if(e)return parseInt(e[1],10)}function T(t){return Ei(co(t,!1))}const xi="http://www.w3.org/1999/xlink";function Do(t){return t.getAttributeNS(xi,"href")}function Ci(t,e){return I({},Ji,t,e)}function gn(t){return[se(t.getAttribute("minx")),se(t.getAttribute("miny")),se(t.getAttribute("maxx")),se(t.getAttribute("maxy"))]}function Ti(t,e){const o=gn(t),r=[se(t.getAttribute("resx")),se(t.getAttribute("resy"))];return{crs:t.getAttribute("CRS")||t.getAttribute("SRS"),extent:o,res:r}}function _i(t,e){const o=gn(t);if(!(!E(o[0])||!E(o[1])||!E(o[2])||!E(o[3])))return o}function $i(t,e){const o=parseFloat(t.getAttribute("min")),r=parseFloat(t.getAttribute("max"));return{min:o,max:r}}function Ai(t,e){const o=I({},Ki,t,e);if(!E(o))return;const r=o.westBoundLongitude,n=o.southBoundLatitude,i=o.eastBoundLongitude,a=o.northBoundLatitude;if(!(!E(r)||!E(n)||!E(i)||!E(a)))return[r,n,i,a]}function Ri(t,e){return I({},Xi,t,e)}function Oi(t,e){return I({},zi,t,e)}function Di(t,e){return I({},ji,t,e)}function Li(t,e){return I({},qi,t,e)}function Pi(t,e){return I({},Wi,t,e)}function Ii(t,e){return I([],Gi,t,e)}function Ni(t,e){const o=_e(t.getAttribute("queryable"));return I({queryable:E(o)?o:!1},vn,t,e)}function Mi(t,e){var o=e[e.length-1];const r=I({},vn,t,e);if(!E(r))return;let n=_e(t.getAttribute("queryable"));E(n)||(n=o.queryable),r.queryable=E(n)?n:!1;let i=Pt(t.getAttribute("cascaded"));E(i)||(i=o.cascaded),r.cascaded=i;let a=_e(t.getAttribute("opaque"));E(a)||(a=o.opaque),r.opaque=E(a)?a:!1;let s=_e(t.getAttribute("noSubsets"));E(s)||(s=o.noSubsets),r.noSubsets=E(s)?s:!1;let l=se(t.getAttribute("fixedWidth"));E(l)||(l=o.fixedWidth),r.fixedWidth=l;let d=se(t.getAttribute("fixedHeight"));E(d)||(d=o.fixedHeight),r.fixedHeight=d;const p=["Style","CRS","AuthorityURL"];for(let b=0,w=p.length;b<w;b++){const m=p[b],S=o[m];if(E(S)){let N=hn(r,m,[]);N=N.concat(S),r[m]=N}}const u=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let b=0,w=u.length;b<w;b++){const m=u[b],S=r[m];if(!E(S)){const N=o[m];r[m]=N}}return r}function Hi(t,e){return{name:t.getAttribute("name"),units:t.getAttribute("units"),unitSymbol:t.getAttribute("unitSymbol"),default:t.getAttribute("default"),multipleValues:_e(t.getAttribute("multipleValues")),nearestValue:_e(t.getAttribute("nearestValue")),current:_e(t.getAttribute("current")),values:T(t)}}function de(t,e){return I({},na,t,e)}function Vi(t,e){return I({},Qi,t,e)}function Bi(t,e){return I({},ta,t,e)}function Ui(t,e){return I({},oa,t,e)}function mo(t,e){return I({},ea,t,e)}function yn(t,e){var o=de(t,e);if(E(o)){const r=[Pt(t.getAttribute("width")),Pt(t.getAttribute("height"))];return o.size=r,o}}function Fi(t,e){var o=de(t,e);if(E(o))return o.name=t.getAttribute("name"),o}function Zi(t,e){var o=de(t,e);if(E(o))return o.type=t.getAttribute("type"),o}function ki(t,e){return I({},ra,t,e)}function bn(t,e){return I([],ia,t,e)}const B=[null,"http://www.opengis.net/wms"],Yi=V(B,{Service:h(Oi),Capability:h(Ri)}),Xi=V(B,{Request:h(Vi),Exception:h(Ii),Layer:h(Ni)}),zi=V(B,{Name:h(T),Title:h(T),Abstract:h(T),KeywordList:h(bn),OnlineResource:h(Do),ContactInformation:h(Di),Fees:h(T),AccessConstraints:h(T),LayerLimit:h(fo),MaxWidth:h(fo),MaxHeight:h(fo)}),ji=V(B,{ContactPersonPrimary:h(Li),ContactPosition:h(T),ContactAddress:h(Pi),ContactVoiceTelephone:h(T),ContactFacsimileTelephone:h(T),ContactElectronicMailAddress:h(T)}),qi=V(B,{ContactPerson:h(T),ContactOrganization:h(T)}),Wi=V(B,{AddressType:h(T),Address:h(T),City:h(T),StateOrProvince:h(T),PostCode:h(T),Country:h(T)}),Gi=V(B,{Format:mn(T)}),vn=V(B,{Name:h(T),Title:h(T),Abstract:h(T),KeywordList:h(bn),CRS:Y(T),SRS:Y(T),EX_GeographicBoundingBox:h(Ai),LatLonBoundingBox:h(_i),BoundingBox:Y(Ti),Dimension:Y(Hi),Attribution:h(Ci),AuthorityURL:Y(Fi),Identifier:Y(T),MetadataURL:Y(Zi),DataURL:Y(de),FeatureListURL:Y(de),Style:Y(ki),MinScaleDenominator:h(De),MaxScaleDenominator:h(De),ScaleHint:h($i),Layer:Y(Mi)}),Ji=V(B,{Title:h(T),OnlineResource:h(Do),LogoURL:h(yn)}),Ki=V(B,{westBoundLongitude:h(De),eastBoundLongitude:h(De),southBoundLatitude:h(De),northBoundLatitude:h(De)}),Qi=V(B,{GetCapabilities:h(mo),GetMap:h(mo),GetFeatureInfo:h(mo)}),ea=V(B,{Format:Y(T),DCPType:Y(Bi)}),ta=V(B,{HTTP:h(Ui)}),oa=V(B,{Get:h(de),Post:h(de)}),ra=V(B,{Name:h(T),Title:h(T),Abstract:h(T),LegendURL:Y(yn),StyleSheetURL:h(de),StyleURL:h(de)}),na=V(B,{Format:h(T),OnlineResource:h(Do)}),ia=V(B,{Keyword:mn(T)});class aa{constructor(e,o){!o&&typeof window<"u"&&(o=window.DOMParser),this.version=void 0,this._parser=new gi(o),this._data=e}data(e){return this._data=e,this}toJSON(e){return e=e||this._data,this.parse(e)}parse(e){return this.readFromDocument(this._parser.toDocument(e))}readFromDocument(e){for(let o=e.firstChild;o;o=o.nextSibling)if(o.nodeType==dt.ELEMENT)return this.readFromNode(o);return null}readFromNode(e){return this.version=e.getAttribute("version"),I({version:this.version},Yi,e,[])||null}}async function sa(t){let e=new URL(t),o=e.searchParams;o.set("SERVICE","WMS"),o.set("REQUEST","GetCapabilities");let r=e.toString();const n=await fetch(r);if(n.ok){const i=await n.text();return new aa(i).toJSON()}else throw new Error(`Error: ${n.status}`)}function Lo(t){const e=/\b(?:wms|ows)\b/i,o=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return e.test(t)?"TileWMS":o.test(t)?"XYZ":!1}function la(t){const o=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(t),r=Lo(t);return!!(t&&o&&r)}function Sn(t){return t.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function da(t){try{return JSON.parse(Sn(t)),!!t}catch{return!1}}function ca(t,e){const o=new URL(t).searchParams;Object.entries(e).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{o.set(l,s[l])}):o.set(a,s)});const r=t.split("?")[0],n=o.toString();return`${r}?${n}`}/**!
 * Sortable 1.15.1
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Yo(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),o.push.apply(o,r)}return o}function ne(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?Yo(Object(o),!0).forEach(function(r){ua(t,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):Yo(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))})}return t}function _t(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_t=function(e){return typeof e}:_t=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_t(t)}function ua(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function ce(){return ce=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},ce.apply(this,arguments)}function pa(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}function ha(t,e){if(t==null)return{};var o=pa(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var fa="1.15.1";function le(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var pe=le(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),mt=le(/Edge/i),Xo=le(/firefox/i),nt=le(/safari/i)&&!le(/chrome/i)&&!le(/android/i),wn=le(/iP(ad|od|hone)/i),En=le(/chrome/i)&&le(/android/i),xn={capture:!1,passive:!1};function _(t,e,o){t.addEventListener(e,o,!pe&&xn)}function x(t,e,o){t.removeEventListener(e,o,!pe&&xn)}function It(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function ma(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function oe(t,e,o,r){if(t){o=o||document;do{if(e!=null&&(e[0]===">"?t.parentNode===o&&It(t,e):It(t,e))||r&&t===o)return t;if(t===o)break}while(t=ma(t))}return null}var zo=/\s+/g;function j(t,e,o){if(t&&e)if(t.classList)t.classList[o?"add":"remove"](e);else{var r=(" "+t.className+" ").replace(zo," ").replace(" "+e+" "," ");t.className=(r+(o?" "+e:"")).replace(zo," ")}}function f(t,e,o){var r=t&&t.style;if(r){if(o===void 0)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(o=t.currentStyle),e===void 0?o:o[e];!(e in r)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),r[e]=o+(typeof o=="string"?"":"px")}}function Pe(t,e){var o="";if(typeof t=="string")o=t;else do{var r=f(t,"transform");r&&r!=="none"&&(o=r+" "+o)}while(!e&&(t=t.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(o)}function Cn(t,e,o){if(t){var r=t.getElementsByTagName(e),n=0,i=r.length;if(o)for(;n<i;n++)o(r[n],n);return r}return[]}function re(){var t=document.scrollingElement;return t||document.documentElement}function L(t,e,o,r,n){if(!(!t.getBoundingClientRect&&t!==window)){var i,a,s,l,d,p,u;if(t!==window&&t.parentNode&&t!==re()?(i=t.getBoundingClientRect(),a=i.top,s=i.left,l=i.bottom,d=i.right,p=i.height,u=i.width):(a=0,s=0,l=window.innerHeight,d=window.innerWidth,p=window.innerHeight,u=window.innerWidth),(e||o)&&t!==window&&(n=n||t.parentNode,!pe))do if(n&&n.getBoundingClientRect&&(f(n,"transform")!=="none"||o&&f(n,"position")!=="static")){var b=n.getBoundingClientRect();a-=b.top+parseInt(f(n,"border-top-width")),s-=b.left+parseInt(f(n,"border-left-width")),l=a+i.height,d=s+i.width;break}while(n=n.parentNode);if(r&&t!==window){var w=Pe(n||t),m=w&&w.a,S=w&&w.d;w&&(a/=S,s/=m,u/=m,p/=S,l=a+p,d=s+u)}return{top:a,left:s,bottom:l,right:d,width:u,height:p}}}function Tn(t){var e=L(t),o=parseInt(f(t,"padding-left")),r=parseInt(f(t,"padding-top")),n=parseInt(f(t,"padding-right")),i=parseInt(f(t,"padding-bottom"));return e.top+=r+parseInt(f(t,"border-top-width")),e.left+=o+parseInt(f(t,"border-left-width")),e.width=t.clientWidth-o-n,e.height=t.clientHeight-r-i,e.bottom=e.top+e.height,e.right=e.left+e.width,e}function jo(t,e,o){for(var r=ye(t,!0),n=L(t)[e];r;){var i=L(r)[o],a=void 0;if(o==="top"||o==="left"?a=n>=i:a=n<=i,!a)return r;if(r===re())break;r=ye(r,!1)}return!1}function He(t,e,o,r){for(var n=0,i=0,a=t.children;i<a.length;){if(a[i].style.display!=="none"&&a[i]!==g.ghost&&(r||a[i]!==g.dragged)&&oe(a[i],o.draggable,t,!1)){if(n===e)return a[i];n++}i++}return null}function Po(t,e){for(var o=t.lastElementChild;o&&(o===g.ghost||f(o,"display")==="none"||e&&!It(o,e));)o=o.previousElementSibling;return o||null}function G(t,e){var o=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==g.clone&&(!e||It(t,e))&&o++;return o}function qo(t){var e=0,o=0,r=re();if(t)do{var n=Pe(t),i=n.a,a=n.d;e+=t.scrollLeft*i,o+=t.scrollTop*a}while(t!==r&&(t=t.parentNode));return[e,o]}function ga(t,e){for(var o in t)if(t.hasOwnProperty(o)){for(var r in e)if(e.hasOwnProperty(r)&&e[r]===t[o][r])return Number(o)}return-1}function ye(t,e){if(!t||!t.getBoundingClientRect)return re();var o=t,r=!1;do if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var n=f(o);if(o.clientWidth<o.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||o.clientHeight<o.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!o.getBoundingClientRect||o===document.body)return re();if(r||e)return o;r=!0}}while(o=o.parentNode);return re()}function ya(t,e){if(t&&e)for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);return t}function go(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var it;function _n(t,e){return function(){if(!it){var o=arguments,r=this;o.length===1?t.call(r,o[0]):t.apply(r,o),it=setTimeout(function(){it=void 0},e)}}}function ba(){clearTimeout(it),it=void 0}function $n(t,e,o){t.scrollLeft+=e,t.scrollTop+=o}function An(t){var e=window.Polymer,o=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):o?o(t).clone(!0)[0]:t.cloneNode(!0)}var W="Sortable"+new Date().getTime();function va(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(n){if(!(f(n,"display")==="none"||n===g.ghost)){t.push({target:n,rect:L(n)});var i=ne({},t[t.length-1].rect);if(n.thisAnimationDuration){var a=Pe(n,!0);a&&(i.top-=a.f,i.left-=a.e)}n.fromRect=i}})}},addAnimationState:function(r){t.push(r)},removeAnimationState:function(r){t.splice(ga(t,{target:r}),1)},animateAll:function(r){var n=this;if(!this.options.animation){clearTimeout(e),typeof r=="function"&&r();return}var i=!1,a=0;t.forEach(function(s){var l=0,d=s.target,p=d.fromRect,u=L(d),b=d.prevFromRect,w=d.prevToRect,m=s.rect,S=Pe(d,!0);S&&(u.top-=S.f,u.left-=S.e),d.toRect=u,d.thisAnimationDuration&&go(b,u)&&!go(p,u)&&(m.top-u.top)/(m.left-u.left)===(p.top-u.top)/(p.left-u.left)&&(l=wa(m,b,w,n.options)),go(u,p)||(d.prevFromRect=p,d.prevToRect=u,l||(l=n.options.animation),n.animate(d,m,u,l)),l&&(i=!0,a=Math.max(a,l),clearTimeout(d.animationResetTimer),d.animationResetTimer=setTimeout(function(){d.animationTime=0,d.prevFromRect=null,d.fromRect=null,d.prevToRect=null,d.thisAnimationDuration=null},l),d.thisAnimationDuration=l)}),clearTimeout(e),i?e=setTimeout(function(){typeof r=="function"&&r()},a):typeof r=="function"&&r(),t=[]},animate:function(r,n,i,a){if(a){f(r,"transition",""),f(r,"transform","");var s=Pe(this.el),l=s&&s.a,d=s&&s.d,p=(n.left-i.left)/(l||1),u=(n.top-i.top)/(d||1);r.animatingX=!!p,r.animatingY=!!u,f(r,"transform","translate3d("+p+"px,"+u+"px,0)"),this.forRepaintDummy=Sa(r),f(r,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),f(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){f(r,"transition",""),f(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},a)}}}}function Sa(t){return t.offsetWidth}function wa(t,e,o,r){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-o.top,2)+Math.pow(e.left-o.left,2))*r.animation}var Ae=[],yo={initializeByDefault:!0},gt={mount:function(e){for(var o in yo)yo.hasOwnProperty(o)&&!(o in e)&&(e[o]=yo[o]);Ae.forEach(function(r){if(r.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),Ae.push(e)},pluginEvent:function(e,o,r){var n=this;this.eventCanceled=!1,r.cancel=function(){n.eventCanceled=!0};var i=e+"Global";Ae.forEach(function(a){o[a.pluginName]&&(o[a.pluginName][i]&&o[a.pluginName][i](ne({sortable:o},r)),o.options[a.pluginName]&&o[a.pluginName][e]&&o[a.pluginName][e](ne({sortable:o},r)))})},initializePlugins:function(e,o,r,n){Ae.forEach(function(s){var l=s.pluginName;if(!(!e.options[l]&&!s.initializeByDefault)){var d=new s(e,o,e.options);d.sortable=e,d.options=e.options,e[l]=d,ce(r,d.defaults)}});for(var i in e.options)if(e.options.hasOwnProperty(i)){var a=this.modifyOption(e,i,e.options[i]);typeof a<"u"&&(e.options[i]=a)}},getEventProperties:function(e,o){var r={};return Ae.forEach(function(n){typeof n.eventProperties=="function"&&ce(r,n.eventProperties.call(o[n.pluginName],e))}),r},modifyOption:function(e,o,r){var n;return Ae.forEach(function(i){e[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[o]=="function"&&(n=i.optionListeners[o].call(e[i.pluginName],r))}),n}};function Ea(t){var e=t.sortable,o=t.rootEl,r=t.name,n=t.targetEl,i=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,d=t.newIndex,p=t.oldDraggableIndex,u=t.newDraggableIndex,b=t.originalEvent,w=t.putSortable,m=t.extraEventProperties;if(e=e||o&&o[W],!!e){var S,N=e.options,ie="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!pe&&!mt?S=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(S=document.createEvent("Event"),S.initEvent(r,!0,!0)),S.to=a||o,S.from=s||o,S.item=n||o,S.clone=i,S.oldIndex=l,S.newIndex=d,S.oldDraggableIndex=p,S.newDraggableIndex=u,S.originalEvent=b,S.pullMode=w?w.lastPutMode:void 0;var F=ne(ne({},m),gt.getEventProperties(r,e));for(var K in F)S[K]=F[K];o&&o.dispatchEvent(S),N[ie]&&N[ie].call(e,S)}}var xa=["evt"],k=function(e,o){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.evt,i=ha(r,xa);gt.pluginEvent.bind(g)(e,o,ne({dragEl:c,parentEl:O,ghostEl:v,rootEl:$,nextEl:Te,lastDownEl:$t,cloneEl:R,cloneHidden:ge,dragStarted:tt,putSortable:H,activeSortable:g.active,originalEvent:n,oldIndex:Le,oldDraggableIndex:at,newIndex:q,newDraggableIndex:me,hideGhostForTarget:Ln,unhideGhostForTarget:Pn,cloneNowHidden:function(){ge=!0},cloneNowShown:function(){ge=!1},dispatchSortableEvent:function(s){Z({sortable:o,name:s,originalEvent:n})}},i))};function Z(t){Ea(ne({putSortable:H,cloneEl:R,targetEl:c,rootEl:$,oldIndex:Le,oldDraggableIndex:at,newIndex:q,newDraggableIndex:me},t))}var c,O,v,$,Te,$t,R,ge,Le,q,at,me,vt,H,Oe=!1,Nt=!1,Mt=[],xe,Q,bo,vo,Wo,Go,tt,Re,st,lt=!1,St=!1,At,U,So=[],_o=!1,Ht=[],uo=typeof document<"u",wt=wn,Jo=mt||pe?"cssFloat":"float",Ca=uo&&!En&&!wn&&"draggable"in document.createElement("div"),Rn=function(){if(uo){if(pe)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),On=function(e,o){var r=f(e),n=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),i=He(e,0,o),a=He(e,1,o),s=i&&f(i),l=a&&f(a),d=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+L(i).width,p=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+L(a).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&s.float&&s.float!=="none"){var u=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===u)?"vertical":"horizontal"}return i&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||d>=n&&r[Jo]==="none"||a&&r[Jo]==="none"&&d+p>n)?"vertical":"horizontal"},Ta=function(e,o,r){var n=r?e.left:e.top,i=r?e.right:e.bottom,a=r?e.width:e.height,s=r?o.left:o.top,l=r?o.right:o.bottom,d=r?o.width:o.height;return n===s||i===l||n+a/2===s+d/2},_a=function(e,o){var r;return Mt.some(function(n){var i=n[W].options.emptyInsertThreshold;if(!(!i||Po(n))){var a=L(n),s=e>=a.left-i&&e<=a.right+i,l=o>=a.top-i&&o<=a.bottom+i;if(s&&l)return r=n}}),r},Dn=function(e){function o(i,a){return function(s,l,d,p){var u=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(i==null&&(a||u))return!0;if(i==null||i===!1)return!1;if(a&&i==="clone")return i;if(typeof i=="function")return o(i(s,l,d,p),a)(s,l,d,p);var b=(a?s:l).options.group.name;return i===!0||typeof i=="string"&&i===b||i.join&&i.indexOf(b)>-1}}var r={},n=e.group;(!n||_t(n)!="object")&&(n={name:n}),r.name=n.name,r.checkPull=o(n.pull,!0),r.checkPut=o(n.put),r.revertClone=n.revertClone,e.group=r},Ln=function(){!Rn&&v&&f(v,"display","none")},Pn=function(){!Rn&&v&&f(v,"display","")};uo&&!En&&document.addEventListener("click",function(t){if(Nt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Nt=!1,!1},!0);var Ce=function(e){if(c){e=e.touches?e.touches[0]:e;var o=_a(e.clientX,e.clientY);if(o){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);r.target=r.rootEl=o,r.preventDefault=void 0,r.stopPropagation=void 0,o[W]._onDragOver(r)}}},$a=function(e){c&&c.parentNode[W]._isOutsideThisEl(e.target)};function g(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=ce({},e),t[W]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return On(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:g.supportPointer!==!1&&"PointerEvent"in window&&!nt,emptyInsertThreshold:5};gt.initializePlugins(this,t,o);for(var r in o)!(r in e)&&(e[r]=o[r]);Dn(e);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=e.forceFallback?!1:Ca,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?_(t,"pointerdown",this._onTapStart):(_(t,"mousedown",this._onTapStart),_(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(_(t,"dragover",this),_(t,"dragenter",this)),Mt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),ce(this,va())}g.prototype={constructor:g,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(Re=null)},_getDirection:function(e,o){return typeof this.options.direction=="function"?this.options.direction.call(this,e,o,c):this.options.direction},_onTapStart:function(e){if(e.cancelable){var o=this,r=this.el,n=this.options,i=n.preventOnFilter,a=e.type,s=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,l=(s||e).target,d=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,p=n.filter;if(Na(r),!c&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||n.disabled)&&!d.isContentEditable&&!(!this.nativeDraggable&&nt&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=oe(l,n.draggable,r,!1),!(l&&l.animated)&&$t!==l)){if(Le=G(l),at=G(l,n.draggable),typeof p=="function"){if(p.call(this,e,l,this)){Z({sortable:o,rootEl:d,name:"filter",targetEl:l,toEl:r,fromEl:r}),k("filter",o,{evt:e}),i&&e.cancelable&&e.preventDefault();return}}else if(p&&(p=p.split(",").some(function(u){if(u=oe(d,u.trim(),r,!1),u)return Z({sortable:o,rootEl:u,name:"filter",targetEl:l,fromEl:r,toEl:r}),k("filter",o,{evt:e}),!0}),p)){i&&e.cancelable&&e.preventDefault();return}n.handle&&!oe(d,n.handle,r,!1)||this._prepareDragStart(e,s,l)}}},_prepareDragStart:function(e,o,r){var n=this,i=n.el,a=n.options,s=i.ownerDocument,l;if(r&&!c&&r.parentNode===i){var d=L(r);if($=i,c=r,O=c.parentNode,Te=c.nextSibling,$t=r,vt=a.group,g.dragged=c,xe={target:c,clientX:(o||e).clientX,clientY:(o||e).clientY},Wo=xe.clientX-d.left,Go=xe.clientY-d.top,this._lastX=(o||e).clientX,this._lastY=(o||e).clientY,c.style["will-change"]="all",l=function(){if(k("delayEnded",n,{evt:e}),g.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!Xo&&n.nativeDraggable&&(c.draggable=!0),n._triggerDragStart(e,o),Z({sortable:n,name:"choose",originalEvent:e}),j(c,a.chosenClass,!0)},a.ignore.split(",").forEach(function(p){Cn(c,p.trim(),wo)}),_(s,"dragover",Ce),_(s,"mousemove",Ce),_(s,"touchmove",Ce),_(s,"mouseup",n._onDrop),_(s,"touchend",n._onDrop),_(s,"touchcancel",n._onDrop),Xo&&this.nativeDraggable&&(this.options.touchStartThreshold=4,c.draggable=!0),k("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||o)&&(!this.nativeDraggable||!(mt||pe))){if(g.eventCanceled){this._onDrop();return}_(s,"mouseup",n._disableDelayedDrag),_(s,"touchend",n._disableDelayedDrag),_(s,"touchcancel",n._disableDelayedDrag),_(s,"mousemove",n._delayedDragTouchMoveHandler),_(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&_(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(e){var o=e.touches?e.touches[0]:e;Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){c&&wo(c),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;x(e,"mouseup",this._disableDelayedDrag),x(e,"touchend",this._disableDelayedDrag),x(e,"touchcancel",this._disableDelayedDrag),x(e,"mousemove",this._delayedDragTouchMoveHandler),x(e,"touchmove",this._delayedDragTouchMoveHandler),x(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,o){o=o||e.pointerType=="touch"&&e,!this.nativeDraggable||o?this.options.supportPointer?_(document,"pointermove",this._onTouchMove):o?_(document,"touchmove",this._onTouchMove):_(document,"mousemove",this._onTouchMove):(_(c,"dragend",this),_($,"dragstart",this._onDragStart));try{document.selection?Rt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,o){if(Oe=!1,$&&c){k("dragStarted",this,{evt:o}),this.nativeDraggable&&_(document,"dragover",$a);var r=this.options;!e&&j(c,r.dragClass,!1),j(c,r.ghostClass,!0),g.active=this,e&&this._appendGhost(),Z({sortable:this,name:"start",originalEvent:o})}else this._nulling()},_emulateDragOver:function(){if(Q){this._lastX=Q.clientX,this._lastY=Q.clientY,Ln();for(var e=document.elementFromPoint(Q.clientX,Q.clientY),o=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Q.clientX,Q.clientY),e!==o);)o=e;if(c.parentNode[W]._isOutsideThisEl(e),o)do{if(o[W]){var r=void 0;if(r=o[W]._onDragOver({clientX:Q.clientX,clientY:Q.clientY,target:e,rootEl:o}),r&&!this.options.dragoverBubble)break}e=o}while(o=o.parentNode);Pn()}},_onTouchMove:function(e){if(xe){var o=this.options,r=o.fallbackTolerance,n=o.fallbackOffset,i=e.touches?e.touches[0]:e,a=v&&Pe(v,!0),s=v&&a&&a.a,l=v&&a&&a.d,d=wt&&U&&qo(U),p=(i.clientX-xe.clientX+n.x)/(s||1)+(d?d[0]-So[0]:0)/(s||1),u=(i.clientY-xe.clientY+n.y)/(l||1)+(d?d[1]-So[1]:0)/(l||1);if(!g.active&&!Oe){if(r&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<r)return;this._onDragStart(e,!0)}if(v){a?(a.e+=p-(bo||0),a.f+=u-(vo||0)):a={a:1,b:0,c:0,d:1,e:p,f:u};var b="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");f(v,"webkitTransform",b),f(v,"mozTransform",b),f(v,"msTransform",b),f(v,"transform",b),bo=p,vo=u,Q=i}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!v){var e=this.options.fallbackOnBody?document.body:$,o=L(c,!0,wt,!0,e),r=this.options;if(wt){for(U=e;f(U,"position")==="static"&&f(U,"transform")==="none"&&U!==document;)U=U.parentNode;U!==document.body&&U!==document.documentElement?(U===document&&(U=re()),o.top+=U.scrollTop,o.left+=U.scrollLeft):U=re(),So=qo(U)}v=c.cloneNode(!0),j(v,r.ghostClass,!1),j(v,r.fallbackClass,!0),j(v,r.dragClass,!0),f(v,"transition",""),f(v,"transform",""),f(v,"box-sizing","border-box"),f(v,"margin",0),f(v,"top",o.top),f(v,"left",o.left),f(v,"width",o.width),f(v,"height",o.height),f(v,"opacity","0.8"),f(v,"position",wt?"absolute":"fixed"),f(v,"zIndex","100000"),f(v,"pointerEvents","none"),g.ghost=v,e.appendChild(v),f(v,"transform-origin",Wo/parseInt(v.style.width)*100+"% "+Go/parseInt(v.style.height)*100+"%")}},_onDragStart:function(e,o){var r=this,n=e.dataTransfer,i=r.options;if(k("dragStart",this,{evt:e}),g.eventCanceled){this._onDrop();return}k("setupClone",this),g.eventCanceled||(R=An(c),R.removeAttribute("id"),R.draggable=!1,R.style["will-change"]="",this._hideClone(),j(R,this.options.chosenClass,!1),g.clone=R),r.cloneId=Rt(function(){k("clone",r),!g.eventCanceled&&(r.options.removeCloneOnHide||$.insertBefore(R,c),r._hideClone(),Z({sortable:r,name:"clone"}))}),!o&&j(c,i.dragClass,!0),o?(Nt=!0,r._loopId=setInterval(r._emulateDragOver,50)):(x(document,"mouseup",r._onDrop),x(document,"touchend",r._onDrop),x(document,"touchcancel",r._onDrop),n&&(n.effectAllowed="move",i.setData&&i.setData.call(r,n,c)),_(document,"drop",r),f(c,"transform","translateZ(0)")),Oe=!0,r._dragStartId=Rt(r._dragStarted.bind(r,o,e)),_(document,"selectstart",r),tt=!0,nt&&f(document.body,"user-select","none")},_onDragOver:function(e){var o=this.el,r=e.target,n,i,a,s=this.options,l=s.group,d=g.active,p=vt===l,u=s.sort,b=H||d,w,m=this,S=!1;if(_o)return;function N(Ze,ri){k(Ze,m,ne({evt:e,isOwner:p,axis:w?"vertical":"horizontal",revert:a,dragRect:n,targetRect:i,canSort:u,fromSortable:b,target:r,completed:F,onMove:function(Uo,ni){return Et($,o,c,n,Uo,L(Uo),e,ni)},changed:K},ri))}function ie(){N("dragOverAnimationCapture"),m.captureAnimationState(),m!==b&&b.captureAnimationState()}function F(Ze){return N("dragOverCompleted",{insertion:Ze}),Ze&&(p?d._hideClone():d._showClone(m),m!==b&&(j(c,H?H.options.ghostClass:d.options.ghostClass,!1),j(c,s.ghostClass,!0)),H!==m&&m!==g.active?H=m:m===g.active&&H&&(H=null),b===m&&(m._ignoreWhileAnimating=r),m.animateAll(function(){N("dragOverAnimationComplete"),m._ignoreWhileAnimating=null}),m!==b&&(b.animateAll(),b._ignoreWhileAnimating=null)),(r===c&&!c.animated||r===o&&!r.animated)&&(Re=null),!s.dragoverBubble&&!e.rootEl&&r!==document&&(c.parentNode[W]._isOutsideThisEl(e.target),!Ze&&Ce(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),S=!0}function K(){q=G(c),me=G(c,s.draggable),Z({sortable:m,name:"change",toEl:o,newIndex:q,newDraggableIndex:me,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),r=oe(r,s.draggable,o,!0),N("dragOver"),g.eventCanceled)return S;if(c.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||m._ignoreWhileAnimating===r)return F(!1);if(Nt=!1,d&&!s.disabled&&(p?u||(a=O!==$):H===this||(this.lastPutMode=vt.checkPull(this,d,c,e))&&l.checkPut(this,d,c,e))){if(w=this._getDirection(e,r)==="vertical",n=L(c),N("dragOverValid"),g.eventCanceled)return S;if(a)return O=$,ie(),this._hideClone(),N("revert"),g.eventCanceled||(Te?$.insertBefore(c,Te):$.appendChild(c)),F(!0);var X=Po(o,s.draggable);if(!X||Da(e,w,this)&&!X.animated){if(X===c)return F(!1);if(X&&o===e.target&&(r=X),r&&(i=L(r)),Et($,o,c,n,r,i,e,!!r)!==!1)return ie(),X&&X.nextSibling?o.insertBefore(c,X.nextSibling):o.appendChild(c),O=o,K(),F(!0)}else if(X&&Oa(e,w,this)){var Se=He(o,0,s,!0);if(Se===c)return F(!1);if(r=Se,i=L(r),Et($,o,c,n,r,i,e,!1)!==!1)return ie(),o.insertBefore(c,Se),O=o,K(),F(!0)}else if(r.parentNode===o){i=L(r);var te=0,we,Ve=c.parentNode!==o,z=!Ta(c.animated&&c.toRect||n,r.animated&&r.toRect||i,w),Be=w?"top":"left",he=jo(r,"top","top")||jo(c,"top","top"),Ue=he?he.scrollTop:void 0;Re!==r&&(we=i[Be],lt=!1,St=!z&&s.invertSwap||Ve),te=La(e,r,i,w,z?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,St,Re===r);var ae;if(te!==0){var Ee=G(c);do Ee-=te,ae=O.children[Ee];while(ae&&(f(ae,"display")==="none"||ae===v))}if(te===0||ae===r)return F(!1);Re=r,st=te;var Fe=r.nextElementSibling,fe=!1;fe=te===1;var yt=Et($,o,c,n,r,i,e,fe);if(yt!==!1)return(yt===1||yt===-1)&&(fe=yt===1),_o=!0,setTimeout(Ra,30),ie(),fe&&!Fe?o.appendChild(c):r.parentNode.insertBefore(c,fe?Fe:r),he&&$n(he,0,Ue-he.scrollTop),O=c.parentNode,we!==void 0&&!St&&(At=Math.abs(we-L(r)[Be])),K(),F(!0)}if(o.contains(c))return F(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){x(document,"mousemove",this._onTouchMove),x(document,"touchmove",this._onTouchMove),x(document,"pointermove",this._onTouchMove),x(document,"dragover",Ce),x(document,"mousemove",Ce),x(document,"touchmove",Ce)},_offUpEvents:function(){var e=this.el.ownerDocument;x(e,"mouseup",this._onDrop),x(e,"touchend",this._onDrop),x(e,"pointerup",this._onDrop),x(e,"touchcancel",this._onDrop),x(document,"selectstart",this)},_onDrop:function(e){var o=this.el,r=this.options;if(q=G(c),me=G(c,r.draggable),k("drop",this,{evt:e}),O=c&&c.parentNode,q=G(c),me=G(c,r.draggable),g.eventCanceled){this._nulling();return}Oe=!1,St=!1,lt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),$o(this.cloneId),$o(this._dragStartId),this.nativeDraggable&&(x(document,"drop",this),x(o,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),nt&&f(document.body,"user-select",""),f(c,"transform",""),e&&(tt&&(e.cancelable&&e.preventDefault(),!r.dropBubble&&e.stopPropagation()),v&&v.parentNode&&v.parentNode.removeChild(v),($===O||H&&H.lastPutMode!=="clone")&&R&&R.parentNode&&R.parentNode.removeChild(R),c&&(this.nativeDraggable&&x(c,"dragend",this),wo(c),c.style["will-change"]="",tt&&!Oe&&j(c,H?H.options.ghostClass:this.options.ghostClass,!1),j(c,this.options.chosenClass,!1),Z({sortable:this,name:"unchoose",toEl:O,newIndex:null,newDraggableIndex:null,originalEvent:e}),$!==O?(q>=0&&(Z({rootEl:O,name:"add",toEl:O,fromEl:$,originalEvent:e}),Z({sortable:this,name:"remove",toEl:O,originalEvent:e}),Z({rootEl:O,name:"sort",toEl:O,fromEl:$,originalEvent:e}),Z({sortable:this,name:"sort",toEl:O,originalEvent:e})),H&&H.save()):q!==Le&&q>=0&&(Z({sortable:this,name:"update",toEl:O,originalEvent:e}),Z({sortable:this,name:"sort",toEl:O,originalEvent:e})),g.active&&((q==null||q===-1)&&(q=Le,me=at),Z({sortable:this,name:"end",toEl:O,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){k("nulling",this),$=c=O=v=Te=R=$t=ge=xe=Q=tt=q=me=Le=at=Re=st=H=vt=g.dragged=g.ghost=g.clone=g.active=null,Ht.forEach(function(e){e.checked=!0}),Ht.length=bo=vo=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":c&&(this._onDragOver(e),Aa(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],o,r=this.el.children,n=0,i=r.length,a=this.options;n<i;n++)o=r[n],oe(o,a.draggable,this.el,!1)&&e.push(o.getAttribute(a.dataIdAttr)||Ia(o));return e},sort:function(e,o){var r={},n=this.el;this.toArray().forEach(function(i,a){var s=n.children[a];oe(s,this.options.draggable,n,!1)&&(r[i]=s)},this),o&&this.captureAnimationState(),e.forEach(function(i){r[i]&&(n.removeChild(r[i]),n.appendChild(r[i]))}),o&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,o){return oe(e,o||this.options.draggable,this.el,!1)},option:function(e,o){var r=this.options;if(o===void 0)return r[e];var n=gt.modifyOption(this,e,o);typeof n<"u"?r[e]=n:r[e]=o,e==="group"&&Dn(r)},destroy:function(){k("destroy",this);var e=this.el;e[W]=null,x(e,"mousedown",this._onTapStart),x(e,"touchstart",this._onTapStart),x(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(x(e,"dragover",this),x(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(o){o.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Mt.splice(Mt.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!ge){if(k("hideClone",this),g.eventCanceled)return;f(R,"display","none"),this.options.removeCloneOnHide&&R.parentNode&&R.parentNode.removeChild(R),ge=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(ge){if(k("showClone",this),g.eventCanceled)return;c.parentNode==$&&!this.options.group.revertClone?$.insertBefore(R,c):Te?$.insertBefore(R,Te):$.appendChild(R),this.options.group.revertClone&&this.animate(c,R),f(R,"display",""),ge=!1}}};function Aa(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function Et(t,e,o,r,n,i,a,s){var l,d=t[W],p=d.options.onMove,u;return window.CustomEvent&&!pe&&!mt?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=e,l.from=t,l.dragged=o,l.draggedRect=r,l.related=n||e,l.relatedRect=i||L(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),p&&(u=p.call(d,l,a)),u}function wo(t){t.draggable=!1}function Ra(){_o=!1}function Oa(t,e,o){var r=L(He(o.el,0,o.options,!0)),n=Tn(o.el),i=10;return e?t.clientX<n.left-i||t.clientY<r.top&&t.clientX<r.right:t.clientY<n.top-i||t.clientY<r.bottom&&t.clientX<r.left}function Da(t,e,o){var r=L(Po(o.el,o.options.draggable)),n=Tn(o.el),i=10;return e?t.clientX>n.right+i||t.clientY>r.bottom&&t.clientX>r.left:t.clientY>n.bottom+i||t.clientX>r.right&&t.clientY>r.top}function La(t,e,o,r,n,i,a,s){var l=r?t.clientY:t.clientX,d=r?o.height:o.width,p=r?o.top:o.left,u=r?o.bottom:o.right,b=!1;if(!a){if(s&&At<d*n){if(!lt&&(st===1?l>p+d*i/2:l<u-d*i/2)&&(lt=!0),lt)b=!0;else if(st===1?l<p+At:l>u-At)return-st}else if(l>p+d*(1-n)/2&&l<u-d*(1-n)/2)return Pa(e)}return b=b||a,b&&(l<p+d*i/2||l>u-d*i/2)?l>p+d/2?1:-1:0}function Pa(t){return G(c)<G(t)?1:-1}function Ia(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,o=e.length,r=0;o--;)r+=e.charCodeAt(o);return r.toString(36)}function Na(t){Ht.length=0;for(var e=t.getElementsByTagName("input"),o=e.length;o--;){var r=e[o];r.checked&&Ht.push(r)}}function Rt(t){return setTimeout(t,0)}function $o(t){return clearTimeout(t)}uo&&_(document,"touchmove",function(t){(g.active||Oe)&&t.cancelable&&t.preventDefault()});g.utils={on:_,off:x,css:f,find:Cn,is:function(e,o){return!!oe(e,o,e,!1)},extend:ya,throttle:_n,closest:oe,toggleClass:j,clone:An,index:G,nextTick:Rt,cancelNextTick:$o,detectDirection:On,getChild:He};g.get=function(t){return t[W]};g.mount=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];e[0].constructor===Array&&(e=e[0]),e.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(g.utils=ne(ne({},g.utils),r.utils)),gt.mount(r)})};g.create=function(t,e){return new g(t,e)};g.version=fa;var D=[],ot,Ao,Ro=!1,Eo,xo,Vt,rt;function Ma(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(o){var r=o.originalEvent;this.sortable.nativeDraggable?_(document,"dragover",this._handleAutoScroll):this.options.supportPointer?_(document,"pointermove",this._handleFallbackAutoScroll):r.touches?_(document,"touchmove",this._handleFallbackAutoScroll):_(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(o){var r=o.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?x(document,"dragover",this._handleAutoScroll):(x(document,"pointermove",this._handleFallbackAutoScroll),x(document,"touchmove",this._handleFallbackAutoScroll),x(document,"mousemove",this._handleFallbackAutoScroll)),Ko(),Ot(),ba()},nulling:function(){Vt=Ao=ot=Ro=rt=Eo=xo=null,D.length=0},_handleFallbackAutoScroll:function(o){this._handleAutoScroll(o,!0)},_handleAutoScroll:function(o,r){var n=this,i=(o.touches?o.touches[0]:o).clientX,a=(o.touches?o.touches[0]:o).clientY,s=document.elementFromPoint(i,a);if(Vt=o,r||this.options.forceAutoScrollFallback||mt||pe||nt){Co(o,this.options,s,r);var l=ye(s,!0);Ro&&(!rt||i!==Eo||a!==xo)&&(rt&&Ko(),rt=setInterval(function(){var d=ye(document.elementFromPoint(i,a),!0);d!==l&&(l=d,Ot()),Co(o,n.options,d,r)},10),Eo=i,xo=a)}else{if(!this.options.bubbleScroll||ye(s,!0)===re()){Ot();return}Co(o,this.options,ye(s,!1),!1)}}},ce(t,{pluginName:"scroll",initializeByDefault:!0})}function Ot(){D.forEach(function(t){clearInterval(t.pid)}),D=[]}function Ko(){clearInterval(rt)}var Co=_n(function(t,e,o,r){if(e.scroll){var n=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,a=e.scrollSensitivity,s=e.scrollSpeed,l=re(),d=!1,p;Ao!==o&&(Ao=o,Ot(),ot=e.scroll,p=e.scrollFn,ot===!0&&(ot=ye(o,!0)));var u=0,b=ot;do{var w=b,m=L(w),S=m.top,N=m.bottom,ie=m.left,F=m.right,K=m.width,X=m.height,Se=void 0,te=void 0,we=w.scrollWidth,Ve=w.scrollHeight,z=f(w),Be=w.scrollLeft,he=w.scrollTop;w===l?(Se=K<we&&(z.overflowX==="auto"||z.overflowX==="scroll"||z.overflowX==="visible"),te=X<Ve&&(z.overflowY==="auto"||z.overflowY==="scroll"||z.overflowY==="visible")):(Se=K<we&&(z.overflowX==="auto"||z.overflowX==="scroll"),te=X<Ve&&(z.overflowY==="auto"||z.overflowY==="scroll"));var Ue=Se&&(Math.abs(F-n)<=a&&Be+K<we)-(Math.abs(ie-n)<=a&&!!Be),ae=te&&(Math.abs(N-i)<=a&&he+X<Ve)-(Math.abs(S-i)<=a&&!!he);if(!D[u])for(var Ee=0;Ee<=u;Ee++)D[Ee]||(D[Ee]={});(D[u].vx!=Ue||D[u].vy!=ae||D[u].el!==w)&&(D[u].el=w,D[u].vx=Ue,D[u].vy=ae,clearInterval(D[u].pid),(Ue!=0||ae!=0)&&(d=!0,D[u].pid=setInterval((function(){r&&this.layer===0&&g.active._onTouchMove(Vt);var Fe=D[this.layer].vy?D[this.layer].vy*s:0,fe=D[this.layer].vx?D[this.layer].vx*s:0;typeof p=="function"&&p.call(g.dragged.parentNode[W],fe,Fe,t,Vt,D[this.layer].el)!=="continue"||$n(D[this.layer].el,fe,Fe)}).bind({layer:u}),24))),u++}while(e.bubbleScroll&&b!==l&&(b=ye(b,!1)));Ro=d}},30),In=function(e){var o=e.originalEvent,r=e.putSortable,n=e.dragEl,i=e.activeSortable,a=e.dispatchSortableEvent,s=e.hideGhostForTarget,l=e.unhideGhostForTarget;if(o){var d=r||i;s();var p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:o,u=document.elementFromPoint(p.clientX,p.clientY);l(),d&&!d.el.contains(u)&&(a("spill"),this.onSpill({dragEl:n,putSortable:r}))}};function Io(){}Io.prototype={startIndex:null,dragStart:function(e){var o=e.oldDraggableIndex;this.startIndex=o},onSpill:function(e){var o=e.dragEl,r=e.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var n=He(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(o,n):this.sortable.el.appendChild(o),this.sortable.animateAll(),r&&r.animateAll()},drop:In};ce(Io,{pluginName:"revertOnSpill"});function No(){}No.prototype={onSpill:function(e){var o=e.dragEl,r=e.putSortable,n=r||this.sortable;n.captureAnimationState(),o.parentNode&&o.parentNode.removeChild(o),n.animateAll()},drop:In};ce(No,{pluginName:"removeOnSpill"});g.mount(new Ma);g.mount(No,Io);const Ha=t=>{const e=t.item;let o=Array.prototype.slice.call(e.parentNode.childNodes);return o=o.filter(r=>r.nodeType!=Node.ELEMENT_NODE||!r.classList.contains("sortable-fallback")),o},Va=(t,e,o,r,n,i)=>{const s=t.item.parentNode;for(const S of o)s.appendChild(S);if(t.oldIndex==t.newIndex)return;const l=r.getArray(),d=t.item.querySelector("eox-layercontrol-layer").layer.get(n),p=l.find(S=>S.get(n)===d),u=i.dataset.layer,b=l.find(S=>S.get(n)==u);let w,m;for(w=0;w<l.length;w++)if(l[w]==p){r.removeAt(w);break}for(m=0;m<l.length;m++)if(l[m]===b){w>m?r.insertAt(m,p):r.insertAt(m+1,p);break}e.requestUpdate()};function Ba(t,e,o,r){let n=[],i=null;t._sortable=g.create(t,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>n=Ha(a),onMove:a=>{i=a.related},onEnd:a=>Va(a,r,n,e,o,i)})}function Ua(t,e,o){t.getArray().forEach(n=>{const i=n.ol_uid;n.get(e)||n.set(e,i),n.get(o)||n.set(o,`layer ${i}`)})}function Mo(t,e,o){let r=[];const n=(i,a,s)=>{r=[...r,...i.filter(d=>d.get(a)===s)];const l=i.filter(d=>d.getLayers);return l.length>0&&l.forEach(d=>n(d.getLayers().getArray(),a,s)),r};return n(t,e,o),r}function Fa(t,e,o){if(!t||!e)return!1;if(!Nn(t,o))return!0;const r=t.get("minZoom"),n=t.get("maxZoom"),i=e.getView().getZoom();return i>r&&i<n}function Nn(t,e){const o=t.get("minZoom"),r=t.get("maxZoom");return!!(e&&(o!==-1/0||r!==1/0))}function Za(t,e){var n,i,a;return!t||!e?void 0:t.getLayers?"group":((a=(n=e.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:n.ol_uid)==null?void 0:a.includes(t.getSource?(i=t.getSource())==null?void 0:i.ol_uid:void 0))?"draw":t.declutter_!==void 0?"vector":"raster"}function Mn(t,e){var r;let o={};for(const n in t){const i=t[n].type;if(i&&i!=="object")o[n]=i==="number"?Number(e[n]):e[n];else if(typeof t[n]=="object"&&((r=t[n])!=null&&r.properties)){const a=Mn(t[n].properties,e);Object.keys(a).length>0&&(o[n]=a)}}return o}function ka(t,e){var i;if(!e||!t.getSource().getTileUrlFunction())return null;const o=new URL(t.getSource().getTileUrlFunction()([0,0,0])),r=Object.fromEntries(o.searchParams.entries()),n=Mn(((i=e.schema)==null?void 0:i.properties)||e.schema,r);return Object.keys(n).length?n:null}const Ya=(t,e)=>t==null?void 0:t.filter(o=>["remove","sort"].filter(r=>e!=null&&e.get("layerControlDisable")?r!=="sort":!0).includes(o)),Xa=(t,e)=>t==null?void 0:t.filter(o=>{let r=!0;return["remove","sort"].includes(o)&&(r=!1),o==="info"&&(r=e.get("description")),o==="config"&&(r=e.get("layerConfig")),r}),za=(t,e)=>y`
  <button slot="${t}-icon" class="icon">${e?t:be}</button>
`,ja=t=>y`
  <button
    class="remove-icon icon"
    @click=${()=>{const{layer:e}=t;e==null||e.set("layerControlOptional",!0),e==null||e.setVisible(!1),t.dispatchEvent(new CustomEvent("changed",{detail:e,bubbles:!0}))}}
  >
    ${t.unstyled?"x":be}
  </button>
`,qa=t=>y`
  <button class="sort-icon icon drag-handle">
    ${t?"sort":be}
  </button>
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hn=di(class extends ci{constructor(t){if(super(t),t.type!==$e.PROPERTY&&t.type!==$e.ATTRIBUTE&&t.type!==$e.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ui(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===bt||e===be)return e;const o=t.element,r=t.name;if(t.type===$e.PROPERTY){if(e===o[r])return bt}else if(t.type===$e.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(r))return bt}else if(t.type===$e.ATTRIBUTE&&o.getAttribute(r)===e+"")return bt;return pi(t),e}}),Wa=(t,e,o)=>{let r=e;return o.layer.getSource().getTileUrlFunction()&&(r||(r=o.layer.getSource().getTileUrlFunction()),o.layer.getSource().setTileUrlFunction((...n)=>ca(r(...n),t)),o.layer.getSource().setKey(new Date)),r};var ct,ut,pt,Ut,Bn,Ft,Zt;class Vn extends ue{constructor(){super();C(this,Ut);C(this,ct,{});C(this,ut,null);C(this,pt,void 0);C(this,Ft,"");C(this,Zt,"");this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){ke(this,ut,ka(this.layer,this.layerConfig));const o={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return y`
      <style>
        ${A(this,Ft)}
        ${!this.unstyled&&A(this,Zt)}
      </style>
      ${ee(this.layerConfig,()=>y`
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .startVals=${A(this,ut)}
            .options=${o}
            @change=${M(this,Ut,Bn)}
          ></eox-jsonform>
        `)}
    `}}ct=new WeakMap,ut=new WeakMap,pt=new WeakMap,Ut=new WeakSet,Bn=function(o){ke(this,ct,o.detail),ke(this,pt,Wa(A(this,ct),A(this,pt),this)),this.requestUpdate()},Ft=new WeakMap,Zt=new WeakMap,P(Vn,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1}});customElements.define("eox-layercontrol-layerconfig",Vn);var ht,kt,Yt;class Un extends ue{constructor(){super();C(this,ht,o=>this.selectedTab===o&&"highlighted");C(this,kt,`
    .tabbed figure {
      margin: 0;
    }
    .tabbed nav {
      display: flex;
      justify-content: space-between;
    }
    .tabbed nav div {
      display: flex;
    }
    .tabbed .tab {
      display: none;
    }
    .tabbed .tab.highlighted {
      display: block;
    }
    .tabbed label.highlighted {
      background: lightgrey;
    }
  `);C(this,Yt,`
    .tabbed {
      font-size: small;
    }
    .tabbed label.highlighted {
      background: #00417011;
      pointer-events: none;
    }
    nav div label,
    nav div span {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    figure {
      background: #00417011;
      border-top: 1px solid #0041701a;
    }
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=this.tabs,r=this.actions,n=r.length+o.length>1;return y`
      <style>
        ${A(this,kt)}
        ${!this.unstyled&&A(this,Yt)}
      </style>
      <div class="tabbed">
        <!-- Navigation for tabs and actions -->
        ${ee(n,()=>y`
            <nav>
              <div>
                <!-- Labels for tabs -->
                ${Tt(o,(i,a)=>y`
                      <label
                        class=${A(this,ht).call(this,a)}
                        @click=${()=>this.selectedTab=a}
                      >
                        <!-- Customizable icon for each tab -->
                        <slot name=${`${i}-icon`}>${i}</slot>
                      </label>
                    `)}
              </div>
              <div>
                <!-- Icons for actions -->
                ${Tt(r,i=>y`
                      <span>
                        <!-- Customizable icon for each action -->
                        <slot name=${`${i}-icon`}>${i}</slot>
                      </span>
                    `)}
              </div>
            </nav>
          `)}
        <figure>
          <!-- Content for each tab -->
          ${Tt(o,(i,a)=>y`
              <div class="tab ${A(this,ht).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${i}-content`}>${i}</slot>
              </div>
            `)}
        </figure>
      </div>
    `}}ht=new WeakMap,kt=new WeakMap,Yt=new WeakMap,P(Un,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-tabs",Un);var Xt,zt;class Fn extends ue{constructor(){super();P(this,"_removeButton",ja(this));P(this,"_sortButton",qa(this.unstyled));P(this,"_button",o=>za(o,this.unstyled));C(this,Xt,"");C(this,zt,`
    ${hi}  
    ${fi}
    ${pn}
    ${mi}
    button.icon.drag-handle {
      cursor: n-resize;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    eox-layercontrol-layer details summary::before {
      content: "";
    }
    details.tools[open] {
      /*border-top: 1px solid #0041703a;*/
    }
    .single-action {
      position: relative;
    }
    details.tools summary .icon {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 0;
      top: -24px;
      display: flex;
      border-radius: 4px;
      cursor: pointer;
    }
    .single-action .icon::before,
    details.tools summary .icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edots-vertical%3C/title%3E%3Cpath d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' /%3E%3C/svg%3E");
    }
    .single-action,
    details.tools summary,
    eox-layercontrol-tabs button.icon {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    eox-layercontrol-tabs button.icon {
      opacity: .7;
    }
    .single-action:hover,
    details.tools summary:hover,
    eox-layercontrol-tabs button.icon:hover {
      opacity: 1;
    }
    .tools-placeholder,
    .single-action .icon,
    .single-action .icon::before,
    details.tools summary .icon,
    details.tools summary .icon::before {
      height: 16px;
      width: 16px;
    }
    eox-layercontrol-tabs button.icon {
      display: flex;
      justify-content: center;
    }
    eox-layercontrol-tabs .icon::before {
      width: 16px;
      height: 16px;
    }
    details.tools summary .info-icon,
    button.icon[slot=info-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Einformation-outline%3C/title%3E%3Cpath d='M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z' /%3E%3C/svg%3E");
    }
    details.tools summary .opacity-icon,
    button.icon[slot=opacity-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eopacity%3C/title%3E%3Cpath d='M17.66,8L12,2.35L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8M6,14C6,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 18,12 18,14H6Z' /%3E%3C/svg%3E");
    }
    details.tools summary .config-icon,
    button.icon[slot=config-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Etune%3C/title%3E%3Cpath d='M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z' /%3E%3C/svg%3E");
    }
    .single-action .remove-icon::before,
    [slot=remove-icon] button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' viewBox='0 0 24 24'%3E%3Ctitle%3Edelete-outline%3C/title%3E%3Cpath d='M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z' /%3E%3C/svg%3E");
    }
    .single-action .sort-icon::before,
    [slot=sort-icon] button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edrag-horizontal-variant%3C/title%3E%3Cpath d='M21 11H3V9H21V11M21 13H3V15H21V13Z' /%3E%3C/svg%3E");
    }
    [slot=info-content],
    [slot=opacity-content] {
      padding: 12px 6px;
    }
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var l;const o=Ya(this.tools,this.layer),r=Xa(this.tools,this.layer),n=this[`_${o==null?void 0:o[0]}Button`],i=((l=this.tools)==null?void 0:l.length)===1?`${this.tools[0]}-icon`:"",a=o==null?void 0:o.length,s=r==null?void 0:r.length;return y`
      <style>
        ${A(this,Xt)}
        ${!this.unstyled&&A(this,zt)}
      </style>
      ${ee(a+s>0,()=>y`
          ${ee(a===1&&s===0,()=>y`
              <div class="single-action-container">
                <div class="single-action">${n}</div>
              </div>
            `,()=>{var d;return y`
              <details
                class="tools"
                open=${this.layer.get("layerControlToolsExpand")||be}
              >
                <summary>
                  <button class="icon ${i}">Tools</button>
                </summary>
                <eox-layercontrol-tabs
                  .noShadow=${!1}
                  .actions=${o}
                  .tabs=${r}
                  .unstyled=${this.unstyled}
                >
                  <!-- Rendering tabs and content -->
                  ${Tt(r,p=>this._button(p))}

                  <div slot="info-content">
                    ${ai(this.layer.get("description"))}
                  </div>
                  <div slot="opacity-content">
                    <!-- Input for opacity -->
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value=${Hn((d=this.layer)==null?void 0:d.getOpacity())}
                      @input=${p=>this.layer.setOpacity(parseFloat(p.target.value))}
                    />
                  </div>
                  <div slot="config-content">
                    <!-- Layer configuration -->
                    <eox-layercontrol-layerconfig
                      slot="config-content"
                      .layer=${this.layer}
                      .noShadow=${!0}
                      .layerConfig=${this.layer.get("layerConfig")}
                      .unstyled=${this.unstyled}
                      @changed=${()=>this.requestUpdate()}
                    ></eox-layercontrol-layerconfig>
                  </div>
                  <div slot="remove-icon">${this._removeButton}</div>
                  <div slot="sort-icon">${this._sortButton}</div>
                </eox-layercontrol-tabs>
              </details>
            `})}
        `)}
    `}}Xt=new WeakMap,zt=new WeakMap,P(Fn,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer-tools",Fn);const Ga=t=>{const e=()=>{const o=Fa(t.layer,t.map,t.showLayerZoomState);let r=!1;!o&&t.currLayerVisibilityBasedOnZoom?(t.currLayerVisibilityBasedOnZoom=!1,r=!0):o&&!t.currLayerVisibilityBasedOnZoom&&(t.currLayerVisibilityBasedOnZoom=!0,r=!0),r&&(t.requestUpdate(),t.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};Nn(t.layer,t.showLayerZoomState)&&(e(),t.map.getView().on("change:resolution",()=>e()))},Ja=(t,e)=>{const o=e.layer;o.setVisible(t.target.checked),t.target.checked&&o.get("layerControlExclusive")&&e.parentNode.parentNode.querySelectorAll("li > eox-layercontrol-layer").forEach(n=>{var i;n.layer!==o&&((i=n.layer)!=null&&i.get("layerControlExclusive"))&&(n.layer.setVisible(!1),n.requestUpdate())}),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.requestUpdate()};var Ie,Dt,jt,kn,qt,Wt;class Zn extends ue{constructor(){super();C(this,Ie);C(this,jt);P(this,"currLayerVisibilityBasedOnZoom",!0);C(this,qt,"");C(this,Wt,`
    ${pn}
    eox-layercontrol-layer {
      width: 100%;
    }
    .layer.zoom-state-invisible {
      background: #d2e2ee;
      opacity: 0.3;
    }
    .layer {
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 4px 0;
    }
    label, span {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    [data-type] .title::before {
      width: 20px;
      min-width: 20px;
      height: 20px;
      margin-right: 6px;
    }
    [data-type=group] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-outline%3C/title%3E%3Cpath d='M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z' /%3E%3C/svg%3E");
    }
    [data-type=group] > eox-layercontrol-layer-group > details[open] > summary > eox-layercontrol-layer > .layer > label > .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-open-outline%3C/title%3E%3Cpath d='M6.1,10L4,18V8H21A2,2 0 0,0 19,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H19C19.9,20 20.7,19.4 20.9,18.5L23.2,10H6.1M19,18H6L7.6,12H20.6L19,18Z' /%3E%3C/svg%3E");
    }
    [data-type=raster] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckerboard%3C/title%3E%3Cpath d='M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z' /%3E%3C/svg%3E");
    }
    [data-type=vector] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-outline%3C/title%3E%3Cpath d='M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15A2.5,2.5 0 0,0 15,17.5A2.5,2.5 0 0,0 17.5,20A2.5,2.5 0 0,0 20,17.5A2.5,2.5 0 0,0 17.5,15Z' /%3E%3C/svg%3E");
    }
    [data-type=draw] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Evector-square-edit%3C/title%3E%3Cpath d='M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z' /%3E%3C/svg%3E");
    }
  `);this.layer=null,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){Ga(this)}render(){var l;const o=this.layer.getVisible(),r=o?"visible":"",n=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",i=M(this,Ie,Dt).call(this,"layerControlDisable")?"disabled":"",a=M(this,Ie,Dt).call(this,"layerControlExclusive")?"radio":"checkbox",s=((l=this.tools)==null?void 0:l.length)>0;return y`
      <style>
        ${A(this,qt)}
        ${!this.unstyled&&A(this,Wt)}
      </style>
      ${ee(this.layer,()=>y`
          <!-- Render the layer -->
          <div class="layer ${r} ${n}">
            <label class="${i}">
              <!-- Input element for layer visibility -->
              <input
                type=${a}
                .checked=${Hn(o)}
                @click=${M(this,jt,kn)}
              />

              <!-- Layer title -->
              <span class="title">${M(this,Ie,Dt).call(this,this.titleProperty)}</span>
              ${ee(s,()=>y`<span class="tools-placeholder"></span>`)}
            </label>
          </div>

          <!-- Render layer tools -->
          <eox-layercontrol-layer-tools
            .noShadow=${!0}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}Ie=new WeakSet,Dt=function(o){var r;return(r=this.layer)==null?void 0:r.get(o)},jt=new WeakSet,kn=function(o){Ja(o,this)},qt=new WeakMap,Wt=new WeakMap,P(Zn,"properties",{layer:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer",Zn);var Gt,Jt;class Yn extends ue{constructor(){super();C(this,Gt,"");C(this,Jt,`
    details summary {
      cursor: pointer;
      display: flex;
    }
    details summary { list-style-type: none; } /* Firefox */
    details summary::-webkit-details-marker { display: none; } /* Chrome */
    details summary::marker { display: none; }
    details summary::before {
      display: block;
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
      font-size: 13px;
      width: 24px;
      height: 24px;
      margin: 4px 0;
      transform-origin: center;
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary:before {
      transform: rotate(90deg);
    }
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var r;const o=!!((r=this.group)!=null&&r.get("layerControlExpand"));return y`
      <style>
        ${A(this,Gt)}
        ${!this.unstyled&&A(this,Jt)}
      </style>
      ${ee(this.group,()=>y`
          <!-- Render the details element with the layer control -->
          <details open=${o}>
            <summary>
              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${!0}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}Gt=new WeakMap,Jt=new WeakMap,P(Yn,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer-group",Yn);const Ka=t=>{const{layers:e,idProperty:o,titleProperty:r,renderRoot:n}=t;if(e){const i=n.querySelector("ul");Ua(e,o,r),Ba(i,e,o,t)}},Qa=t=>{const{layers:e}=t,o=si(()=>{t.requestUpdate(),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),r=()=>o();e&&(e.hasListener("change:length")&&(e==null||e.un("change:length",r)),e.on("change:length",r))};var Kt,Qt;class Xn extends ue{constructor(){super();C(this,Kt,"");C(this,Qt,`
    ul {
      padding: 0;
      margin: 0;
    }
    ul ul {
      padding-left: 48px;
    }
    li {
      list-style: none;
    }
    li {
      border-bottom: 1px solid #0041703a;
    }
    li:first-child {
      border-top: 1px solid #0041703a;
    }
    li:last-child {
      border: none;
    }
    li.sortable-chosen {
      background: #eeea;
    }
    li.sortable-drag {
      opacity: 0;
    }
    li.sortable-ghost {
    }
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1}firstUpdated(){Ka(this)}updated(){Qa(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var r,n;const o=(n=(r=this.layers)==null?void 0:r.getArray())==null?void 0:n.filter(i=>!i.get("layerControlHide")&&!i.get("layerControlOptional")).reverse();return y`
      <style>
        ${A(this,Kt)}
        ${!this.unstyled&&A(this,Qt)}
      </style>
      <ul>
        ${ee(this.layers,()=>y`
            ${li(o,i=>i,i=>y`
                <li
                  data-layer="${i.get(this.idProperty)}"
                  data-type="${Za(i,this.map)}"
                >
                  ${i.getLayers?y`
                          <eox-layercontrol-layer-group
                            .noShadow=${!0}
                            .group=${i}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:y`
                          <eox-layercontrol-layer
                            .noShadow=${!0}
                            .layer=${i}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}}Kt=new WeakMap,Qt=new WeakMap,P(Xn,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer-list",Xn);const es=t=>{const e=t.querySelector("select[name=optional]"),o=e?e.value:null,r=Mo(t.layers.getArray(),"layerControlOptional",!0).find(n=>(n.get(t.idProperty)||n.ol_uid)===o);r==null||r.set("layerControlOptional",!1),r==null||r.setVisible(!0),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),t.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(n=>n.requestUpdate()),t.requestUpdate()};var eo,jn;class zn extends ue{constructor(){super();C(this,eo);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=Mo(this.layers.getArray(),"layerControlOptional",!0);return y`
      <!-- Label for the dropdown -->
      <label for="optional">Optional layers</label>

      <!-- Dropdown select element -->
      <select name="optional" data-cy="optionalLayers">
        <!-- Default placeholder option -->
        <option disabled selected value>
          -- select an optional layer to add --
        </option>

        <!-- Mapping through filtered layers list to generate dropdown options -->
        ${o.map(r=>{const n=r.get(this.idProperty)||r.ol_uid,i=r.get(this.titleProperty),a=`layer ${r.get(this.idProperty)}`;return y` <option value="${n}">${i||a}</option> `})}
      </select>

      <!-- Button to handle adding layers -->
      <button @click="${M(this,eo,jn)}">add</button>
    `}}eo=new WeakSet,jn=function(){es(this)},P(zn,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",zn);const ts=(t,e)=>{e.jsonInput=t.target.value,e.requestUpdate()},Qo=t=>{const e=JSON.parse(`{"data":${Sn(t.jsonInput)}}`);Array.isArray(e.data)?e.data.forEach(o=>{t.eoxMap.addOrUpdateLayer(o)}):t.eoxMap.addOrUpdateLayer(e.data),t.jsonInput=null,t.requestUpdate()},os=(t,e)=>{e.urlInput=t.target.value,e.requestUpdate()};async function rs(t){const e=t.urlInput;if(t.wmsCapabilities=null,t.searchLoad=!0,t.requestUpdate(),!e)return!1;if(Lo(e)==="XYZ")return{Name:e};try{const o=await sa(e);t.wmsCapabilities=o}catch{}finally{t.searchLoad=!1,t.requestUpdate()}return!1}const ns=(t,e)=>{const{Name:o}=t,r=Lo(e.urlInput)||"XYZ",n={type:"Tile",properties:{id:o,title:o},source:{type:r,url:e.urlInput,params:{LAYERS:o}}};e.jsonInput=JSON.stringify(n)},is=(t,e)=>{e.open=t||null,e.urlInput=null,e.jsonInput=null,e.wmsCapabilities=null,e.requestUpdate()};var to,Wn,oo,Gn,ft,Oo,ro,Jn,no,Kn,Ne,Lt,io,ao;class qn extends ue{constructor(){super();C(this,to);C(this,oo);C(this,ft);C(this,ro);C(this,no);C(this,Ne);P(this,"urlInput",null);P(this,"jsonInput",null);P(this,"open",null);P(this,"searchLoad",!1);P(this,"wmsCapabilities",null);C(this,io,"");C(this,ao,`
    .eox-add {
      background: #f0f2f5;
      border-top: 1px solid #0041701a;
      padding: 0.5rem;
      font-size: small;
    }
    .eox-add-layer-col, .eox-add-layer-tab {
      display: flex;
      width: 100%;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .eox-add-layer-main .open {
      position: relative;
    }
    button.icon.add-icon {
      flex-grow: 1;
    }
    .eox-add-layer-tab li {
      border: 0 !important;
      font-size: smaller;
      padding: 0.2rem 0.7rem;
      background: #f0f2f5;
      border-radius: 4px 4px 0px 0px;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
    }
    .eox-add-layer-tab li.active {
      background: #204270;
      color: white;
      font-weight: 700;
    }
    .relative {
      position: relative
    }
    .eox-add-layer-col.justify-end {
      justify-content: end;
    }
    .eox-add ul {
      max-height: 120px;
      overflow: scroll;
    }
    .eox-add ul li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 0.2rem;
    }
    button.icon {
      justify-content: end;
      transition: opacity .2s;
      opacity: .7;
    }
    button.icon:hover {
      opacity: 1;
    }
    button.icon.add-layer-icon::before {
      width: 16px;
      min-width: 16px;
      height: 16px;
    }
    button.icon.add-icon::before {
      width: 18px;
      min-width: 18px;
      height: 18px;
    }
    .add-icon.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath xmlns='http://www.w3.org/2000/svg' d='M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z' fill='%23004270'/%3E%3C/svg%3E");
    }
    .add-layer-icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplus-thick%3C/title%3E%3Cpath fill='%23004270' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
    }
    .json-add-layer {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplus-thick%3C/title%3E%3Cpath fill='white' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
    }
    .search-icon::after {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' fill='white' /%3E%3C/svg%3E");
    }
    .search-icon::after, .json-add-layer::before {
      width: 14px;
      min-width: 14px;
      height: 14px;
      display:flex
      margin-right: 6px;
      color: white;
    }
    .search-icon, .json-add-layer {
      padding: 4px 6px;
      height: 28px;
      border-radius: 0px 4px 4px 0px;
      box-shadow: none;
    }
    .json-add-layer {
      position: absolute;
      bottom: 16px;
      right: 14px;
      border-radius: 4px;
      height: 24px;
      padding: 4px;
    }
    input.add-url, textarea.add-layer-input {
      box-sizing: border-box !important;
      width: 100%;
      height: 28px;
      padding: 5px 7px !important;
      border: 1px solid #0004 !important;
      font-size: smaller;
      border-radius: 4px 0px 0px 4px;
    }
    textarea.add-layer-input {
      height: 90px;
      resize: none;
      border-radius: 4px;
    }
    .divider {
      margin: 1rem 0px;
      height: 1px;
      border-top: 1.5px solid #00417059;
      text-align: center;
      position: relative;
    }
    .divider span {
      position: relative;
      top: -.6em;
      padding: 0px 0.5rem;
      background: #f0f2f5;
      color: #00417059;
      font-weight: bold;
      display: inline-block;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=this.open?"open":"close",r=this.open==="url",n=this.open==="json",i=!la(this.urlInput)||this.searchLoad?!0:be;return y`
      <style>
        ${A(this,io)}
        ${!this.unstyled&&A(this,ao)}
      </style>
      <div class="eox-add-layer-main">
        <div class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <ul class="eox-add-layer-tab ${o}">
            <li
              @click=${()=>M(this,Ne,Lt).call(this,"url")}
              class="${r?"active":""}"
            >
              URL
            </li>
            <li
              @click=${()=>M(this,Ne,Lt).call(this,"json")}
              class="${n?"active":""}"
            >
              JSON
            </li>
          </ul>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon icon"
            @click=${()=>M(this,Ne,Lt).call(this,this.open?null:"url")}
          ></button>
        </div>
        <div class="eox-add ${o}">
          ${r?y`
              <!-- Input field for URL -->
              <div class="eox-add-layer-col">
                <input 
                  type="text" 
                  class="add-url" 
                  placeholder="Add URL (WMS/XYZ)" 
                  .value="${this.urlInput}" 
                  @input=${M(this,to,Wn)}
                >
                </input>
                <!-- Search button for URL -->
                <button 
                  class="search-icon" 
                  disabled=${i} 
                  @click=${M(this,oo,Gn)}
                >
                </button>
              </div>

              <!-- Display layers for WMS capabilities -->
              ${this.wmsCapabilities?y`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(a=>{const s=a.Name;return y`
                            <li class="search-list">
                              ${s}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>M(this,ft,Oo).call(this,a)}
                              ></button>
                            </li>
                          `})}
                    </ul>`:be}
            `:y`
                <!-- Textarea for JSON input -->
                <textarea
                  class="add-layer-input"
                  placeholder="Please put a valid eox-map layer JSON."
                  @input=${M(this,no,Kn)}
                  .value=${this.jsonInput}
                ></textarea>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer"
                  disabled=${da(this.jsonInput)?be:!0}
                  @click=${M(this,ro,Jn)}
                ></button>
              `}
        </div>
      </div>
    `}}to=new WeakSet,Wn=function(o){os(o,this)},oo=new WeakSet,Gn=async function(){const o=await rs(this);o&&M(this,ft,Oo).call(this,o)},ft=new WeakSet,Oo=function(o){ns(o,this),Qo(this)},ro=new WeakSet,Jn=function(){Qo(this)},no=new WeakSet,Kn=function(o){ts(o,this)},Ne=new WeakSet,Lt=function(o){is(o,this)},io=new WeakMap,ao=new WeakMap,P(qn,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",qn);const as=(t,e)=>{if(e.requestUpdate(),t.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const o=e.renderRoot.querySelector("eox-layercontrol-optional-list");o==null||o.requestUpdate()}},ss=t=>{const e=t.for;return document.querySelector(e)},ls=t=>{const e=document.querySelector(t.for);e&&e.map!==t.map&&(t.map=e.map)};var Me,so,ei,lo;class Qn extends ue{constructor(){super();C(this,so);C(this,Me,void 0);C(this,lo,"* { font-family: Roboto, sans-serif; }");this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride=""}updated(){ls(this)}firstUpdated(){ke(this,Me,ss(this))}render(){var n,i,a;const o=(n=this.map)==null?void 0:n.getLayers().getArray(),r=o&&((i=Mo(o,"layerControlOptional",!0))==null?void 0:i.length)>0;return y`
      <style>
        ${!this.unstyled&&A(this,lo)}
        ${this.styleOverride}
      </style>

      <!-- Conditional rendering of add layers component -->
      ${ee(this.addExternalLayers&&((a=A(this,Me))==null?void 0:a.addOrUpdateLayer),()=>y`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${A(this,Me)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${ee(this.map,()=>y`
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
            @changed=${M(this,so,ei)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${ee(r,()=>y`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}Me=new WeakMap,so=new WeakSet,ei=function(o){as(o,this)},lo=new WeakMap,P(Qn,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String}});customElements.define("eox-layercontrol",Qn);const er="https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",ti=t=>`//s2maps-tiles.eu/wmts/1.0.0/${t}/default/g/{z}/{y}/{x}.jpg`,Ho=t=>({type:"Tile",properties:{title:`EOxCloudless ${t}`},source:{type:"XYZ",url:ti(`s2cloudless-${t}_3857`)}}),J="width: 400px; height: 300px; margin-left: 7px;",Bt={wind:{type:"Tile",properties:{id:"WIND",title:"WIND"},source:{type:"TileWMS",url:er,params:{LAYERS:"AWS_VIS_WIND_V_10M"}}},no2:{type:"Tile",properties:{id:"NO2",title:"NO2"},source:{type:"TileWMS",url:er,params:{LAYERS:"AWS_NO2-VISUALISATION"}}}},po={type:"Vector",properties:{title:"Regions",id:"regions",description:"Ecological regions of the earth."},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"}},ds={type:"WebGLTile",properties:{id:"s2",layerControlExclusive:!0,title:"s2"},style:{variables:{red:1,green:2,blue:3,redMax:3e3,greenMax:3e3,blueMax:3e3},color:["array",["/",["band",["var","red"]],["var","redMax"]],["/",["band",["var","green"]],["var","greenMax"]],["/",["band",["var","blue"]],["var","blueMax"]],1],gamma:1.1},source:{type:"GeoTIFF",normalize:!1,sources:[{url:"https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif"}]}},oi={type:"Tile",properties:{id:"osm",title:"Open Street Map",layerControlExclusive:!0},visible:!1,opacity:.5,source:{type:"OSM"}},ve={type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:ti("terrain-light_3857")}},cs=Ho("2019"),us=Ho("2020"),Vo=Ho("2021"),Bo=[{type:"Group",properties:{id:"group2",title:"Data Layers",layerControlExpand:!0,description:"# Hello world"},layers:[Bt.wind,Bt.no2,po]},{type:"Group",properties:{id:"group1",title:"Background Layers"},layers:[ds,oi]}],ps={type:"Tile",properties:{id:"customId",title:"Tile XYZ",layerControlToolsExpand:!0,layerConfig:{schema:{type:"object",properties:{vminmax:{type:"object",properties:{vmin:{type:"number",minimum:0,maximum:10,format:"range"},vmax:{type:"number",minimum:0,maximum:10,format:"range"}},format:"minmax"},cbar:{type:"string",enum:["rain","temperature"]}}}}},source:{type:"XYZ",url:"https://reccap2.api.dev.brockmann-consult.de/api/tiles/cop28~reccap2-9x108x139-0.0.1.zarr/deforested_biomass/{z}/{y}/{x}?crs=EPSG:3857&time=2018-01-01T00:00:00Z&vmin=0&vmax=3&cbar=rain"}},hs={args:{idProperty:"id",titleProperty:"title",unstyled:!1},render:t=>y`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${t.idProperty}
        .titleProperty=${t.titleProperty}
        .unstyled=${t.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      <eox-map
        .style=${J}
        .zoom=${3}
        .layers=${Bo}
      ></eox-map>
    </div>
  `},tr=(t,e=!0)=>({...t,properties:{...t.properties,layerControlExclusive:!0},visible:e}),fs={args:{},render:()=>y`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#exclusive"></eox-layercontrol>
      <eox-map
        id="exclusive"
        .style=${J}
        .layers=${[tr(ve),tr(Vo,!1)]}
      >
      </eox-map>
    </div>
  `},To=t=>({...t,properties:{...t.properties,layerControlOptional:!0},visible:!1}),ms={args:{},render:()=>y`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#optional"></eox-layercontrol>
      <eox-map
        id="optional"
        .style=${J}
        .layers=${[To(Vo),To(us),To(cs),ve]}
      >
      </eox-map>
    </div>
  `},gs={args:{},render:()=>y`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#expanded"></eox-layercontrol>
      <eox-map
        id="expanded"
        .style=${J}
        .layers=${[ve,{type:"Group",properties:{title:"Layer group",layerControlExpand:!0},layers:[{...Vo,visible:!1}]}]}
      >
      </eox-map>
    </div>
  `},ys={args:{},render:()=>y`
    <p>Default tools: info, opacity, config, remove, sort</p>
    <eox-layercontrol for="eox-map#tools"></eox-layercontrol>
    <hr />
    <p>Only one tool: info</p>
    <eox-layercontrol .tools=${["info"]} for="eox-map#tools"></eox-layercontrol>
    <hr />
    <p>Only one tool: sort</p>
    <eox-layercontrol .tools=${["sort"]} for="eox-map#tools"></eox-layercontrol>
    <hr />
    <p>No tools</p>
    <eox-layercontrol .tools=${[]} for="eox-map#tools"></eox-layercontrol>
    <eox-map
      id="tools"
      .style=${J}
      .layers=${[po,ve]}
    >
    </eox-map>
  `},bs={args:{},render:()=>y`
    <eox-layercontrol
      .tools=${["config"]}
      for="eox-map#config"
    ></eox-layercontrol>
    <hr />
    <eox-map
      .center=${[-7e6,-5e5]}
      .zoom=${4}
      id="config"
      .style=${J}
      .layers=${[ps,ve]}
    >
    </eox-map>
  `},vs=t=>({...t,properties:{...t.properties,layerControlHide:!0}}),Ss={args:{},render:()=>y`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#hidden"></eox-layercontrol>
      <eox-map
        id="hidden"
        .style=${J}
        .layers=${[vs(po),ve]}
      >
      </eox-map>
    </div>
  `},ws={args:{idProperty:"id",titleProperty:"title",unstyled:!1,noShadow:!1},render:t=>y`
    <div style="display: flex">
      <eox-layercontrol
        .noShadow=${t.noShadow}
        .idProperty=${t.idProperty}
        .titleProperty=${t.titleProperty}
        .unstyled=${t.unstyled}
      ></eox-layercontrol>
      <eox-map
        id="single"
        .style=${J}
        .layers=${[ve]}
      ></eox-map>
    </div>
  `};var rr;const Es={args:{unstyled:!1,noShadow:!1},render:t=>y(rr||(rr=ko([`
    <div style="display: flex">
      <eox-layercontrol-layer-list
        .noShadow=`,`
        .unstyled=`,`
      ></eox-layercontrol-layer-list>
      <eox-map
        id="list"
        .style=`,`
        .layers=`,`
      ></eox-map>
    </div>
    <script>
      olMapList = document.querySelector("eox-map#list").map;
      olMapList.once("loadend", () => {
        const layerCollection = olMapList.getLayers();
        document.querySelector("eox-layercontrol-layer-list").layers =
          layerCollection;
        document.querySelector("eox-layercontrol-layer-list").olMapList =
          olMapList;
      });
    <\/script>
  `])),t.noShadow,t.unstyled,J,[Bt.wind,oi,ve])},xs={render:()=>y`
    <eox-layercontrol-tabs
      .noShadow=${!1}
      .actions=${["delete"]}
      .tabs=${["info","opacity","config"]}
    ></eox-layercontrol-tabs>
  `},Cs={args:{idProperty:"id",titleProperty:"title",unstyled:!1,addExternalLayers:!0},render:t=>y`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${t.idProperty}
        .titleProperty=${t.titleProperty}
        .unstyled=${t.unstyled}
        .addExternalLayers=${t.addExternalLayers}
        for="eox-map"
      ></eox-layercontrol>
      <eox-map
        .style=${J}
        .zoom=${3}
        .layers=${Bo}
      ></eox-map>
    </div>
  `},or=(t,e)=>({...t,properties:{...t.properties,layerControlExclusive:!0},...e}),Ts={args:{showLayerZoomState:!0},render:t=>y`
    <div style="display: flex">
      <eox-layercontrol
        .showLayerZoomState=${t.showLayerZoomState}
        for="eox-map#zoomstate"
      ></eox-layercontrol>
      <eox-map
        id="zoomstate"
        .style=${J}
        .zoom=${1}
        .layers=${[or(po,{minZoom:2}),or(Bt.wind,{maxZoom:9})]}
      >
      </eox-map>
    </div>
  `},_s={args:{unstyled:!0},render:t=>y`
    <div style="display: flex">
      <eox-layercontrol
        .unstyled=${t.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      <eox-map
        .style=${J}
        .zoom=${3}
        .layers=${Bo}
      ></eox-map>
    </div>
  `},Xs={title:"Elements/eox-layercontrol",tags:["autodocs"],component:"eox-layercontrol",parameters:{componentSubtitle:"Manage and configure OpenLayers map layers",layout:"centered"}},Ye=hs,Xe=fs,ze=ms,je=gs,qe=ys,We=bs,Ge=Ss,xt=ws,Ct=Es,Je=xs,Ke=Cs,Qe=Ts,et=_s;var nr,ir,ar,sr,lr;Ye.parameters={...Ye.parameters,docs:{...(nr=Ye.parameters)==null?void 0:nr.docs,source:{originalSource:"PrimaryStory",...(ar=(ir=Ye.parameters)==null?void 0:ir.docs)==null?void 0:ar.source},description:{story:"Basic layercontrol setup.",...(lr=(sr=Ye.parameters)==null?void 0:sr.docs)==null?void 0:lr.description}}};var dr,cr,ur,pr,hr;Xe.parameters={...Xe.parameters,docs:{...(dr=Xe.parameters)==null?void 0:dr.docs,source:{originalSource:"ExclusiveLayersStory",...(ur=(cr=Xe.parameters)==null?void 0:cr.docs)==null?void 0:ur.source},description:{story:"By adding the `layerControlExclusive` property to map layers,\nonly one of them at a time can be visualized.",...(hr=(pr=Xe.parameters)==null?void 0:pr.docs)==null?void 0:hr.description}}};var fr,mr,gr,yr,br;ze.parameters={...ze.parameters,docs:{...(fr=ze.parameters)==null?void 0:fr.docs,source:{originalSource:"OptionalLayersStory",...(gr=(mr=ze.parameters)==null?void 0:mr.docs)==null?void 0:gr.source},description:{story:`By adding the \`layerControlOptional\` property to map layers,
they are not initially rendered in the layer list, but in a
selection interface. They can be added to the layer list manually.
Removing a layer puts it back into the optional list.`,...(br=(yr=ze.parameters)==null?void 0:yr.docs)==null?void 0:br.description}}};var vr,Sr,wr,Er,xr;je.parameters={...je.parameters,docs:{...(vr=je.parameters)==null?void 0:vr.docs,source:{originalSource:"ExpandedLayersStory",...(wr=(Sr=je.parameters)==null?void 0:Sr.docs)==null?void 0:wr.source},description:{story:"By adding the `layerControlExpand` property to map layers,\nthey render in the layer control as opened.",...(xr=(Er=je.parameters)==null?void 0:Er.docs)==null?void 0:xr.description}}};var Cr,Tr,_r,$r,Ar;qe.parameters={...qe.parameters,docs:{...(Cr=qe.parameters)==null?void 0:Cr.docs,source:{originalSource:"ToolsStory",...(_r=(Tr=qe.parameters)==null?void 0:Tr.docs)==null?void 0:_r.source},description:{story:`The layer control accepts a "tools" array, which enable
extra functionalities for layers`,...(Ar=($r=qe.parameters)==null?void 0:$r.docs)==null?void 0:Ar.description}}};var Rr,Or,Dr,Lr,Pr;We.parameters={...We.parameters,docs:{...(Rr=We.parameters)==null?void 0:Rr.docs,source:{originalSource:"LayerConfigStory",...(Dr=(Or=We.parameters)==null?void 0:Or.docs)==null?void 0:Dr.source},description:{story:`The "config" tool reads settings passed via the "layerConfig" property,
e.g. rendering a from from a provided JSON schema that allows updating the
source url parameters.`,...(Pr=(Lr=We.parameters)==null?void 0:Lr.docs)==null?void 0:Pr.description}}};var Ir,Nr,Mr,Hr,Vr;Ge.parameters={...Ge.parameters,docs:{...(Ir=Ge.parameters)==null?void 0:Ir.docs,source:{originalSource:"HiddenLayersStory",...(Mr=(Nr=Ge.parameters)==null?void 0:Nr.docs)==null?void 0:Mr.source},description:{story:"By adding the `layerControlHide` property to map layers,\nthey aren't displayed in the layer control at all (but may\nbe still rendered on the map).",...(Vr=(Hr=Ge.parameters)==null?void 0:Hr.docs)==null?void 0:Vr.description}}};var Br,Ur,Fr;xt.parameters={...xt.parameters,docs:{...(Br=xt.parameters)==null?void 0:Br.docs,source:{originalSource:"SingleLayerStory",...(Fr=(Ur=xt.parameters)==null?void 0:Ur.docs)==null?void 0:Fr.source}}};var Zr,kr,Yr;Ct.parameters={...Ct.parameters,docs:{...(Zr=Ct.parameters)==null?void 0:Zr.docs,source:{originalSource:"LayerListStory",...(Yr=(kr=Ct.parameters)==null?void 0:kr.docs)==null?void 0:Yr.source}}};var Xr,zr,jr,qr,Wr;Je.parameters={...Je.parameters,docs:{...(Xr=Je.parameters)==null?void 0:Xr.docs,source:{originalSource:"TabsStory",...(jr=(zr=Je.parameters)==null?void 0:zr.docs)==null?void 0:jr.source},description:{story:"Layer control tabs",...(Wr=(qr=Je.parameters)==null?void 0:qr.docs)==null?void 0:Wr.description}}};var Gr,Jr,Kr,Qr,en;Ke.parameters={...Ke.parameters,docs:{...(Gr=Ke.parameters)==null?void 0:Gr.docs,source:{originalSource:"addExternalLayerStory",...(Kr=(Jr=Ke.parameters)==null?void 0:Jr.docs)==null?void 0:Kr.source},description:{story:"Defining the configuration for adding an external layer like WMS/XYZ or import JSON.",...(en=(Qr=Ke.parameters)==null?void 0:Qr.docs)==null?void 0:en.description}}};var tn,on,rn,nn,an;Qe.parameters={...Qe.parameters,docs:{...(tn=Qe.parameters)==null?void 0:tn.docs,source:{originalSource:"layerZoomStateStory",...(rn=(on=Qe.parameters)==null?void 0:on.docs)==null?void 0:rn.source},description:{story:"Zoom layer state based on `minZoom` and `maxZoom`.\nThe color change state only visible when `showLayerZoomState` is set inside layer properties.",...(an=(nn=Qe.parameters)==null?void 0:nn.docs)==null?void 0:an.description}}};var sn,ln,dn,cn,un;et.parameters={...et.parameters,docs:{...(sn=et.parameters)==null?void 0:sn.docs,source:{originalSource:"unstyledStory",...(dn=(ln=et.parameters)==null?void 0:ln.docs)==null?void 0:dn.source},description:{story:"Unstyled version of the Element",...(un=(cn=et.parameters)==null?void 0:cn.docs)==null?void 0:un.description}}};const zs=["Primary","ExclusiveLayers","OptionalLayers","ExpandedLayers","Tools","LayerConfig","HiddenLayers","SingleLayer","LayerList","Tabs","AddExternalLayer","LayerZoomState","Unstyled"];export{Ke as AddExternalLayer,Xe as ExclusiveLayers,je as ExpandedLayers,Ge as HiddenLayers,We as LayerConfig,Ct as LayerList,Qe as LayerZoomState,ze as OptionalLayers,Ye as Primary,xt as SingleLayer,Je as Tabs,qe as Tools,et as Unstyled,zs as __namedExportsOrder,Xs as default};
