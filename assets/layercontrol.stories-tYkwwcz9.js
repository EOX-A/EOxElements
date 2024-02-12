var Un=Object.defineProperty;var Fn=(t,e,o)=>e in t?Un(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var I=(t,e,o)=>(Fn(t,typeof e!="symbol"?e+"":e,o),o),lo=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var $=(t,e,o)=>(lo(t,e,"read from private field"),o?o.call(t):e.get(t)),C=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},ke=(t,e,o,r)=>(lo(t,e,"write to private field"),r?r.call(t,o):e.set(t,o),o);var M=(t,e,o)=>(lo(t,e,"access private method"),o);import"./sources-QzcJWdZ-.js";import"./main-33Oo-lIB.js";import{x as y,T as le,w as yt,s as pe}from"./lit-element-uhisBW42.js";import{n as ee,o as St,a as Zn}from"./unsafe-html-O8CL1HCr.js";import{_ as kn,c as Yn}from"./index-2KC-5ke1.js";import{e as Xn,i as zn,t as _e}from"./directive-xgBC_cM0.js";import{f as jn,m as qn}from"./directive-helpers-qkjFCehB.js";import"./main-YYu38dui.js";import{b as Gn}from"./button-z18YVp5B.js";import{r as Wn,c as jr,s as Jn}from"./slider-MCblB636.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-Pqur26Z-.js";import"../sb-preview/runtime.js";import"./state-729Pchtv.js";import"./index-EySAwWXj.js";import"./toolcool-range-slider.min-8Vg52R7B.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var S=t=>t!==void 0,qr=(t,e,o)=>e in t?t[e]:t[e]=o;const lt={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};class Kn{constructor(e){this._parser=new e}toDocument(e){return this._parser.parseFromString(e,"application/xml")}getAllTextContent(e,o){return io(e,o).join("")}}function io(t,e){return Gr(t,e,[]).join("")}function Gr(t,e,o){if(t.nodeType===lt.CDATA_SECTION||t.nodeType===lt.TEXT)e?o.push(String(t.nodeValue).replace(/(\r\n|\r|\n)/g,"")):o.push(t.nodeValue);else{var r;for(r=t.firstChild;r;r=r.nextSibling)Gr(r,e,o)}return o}function Qn(t,e,o,r){for(var n=ei(e);n;n=ti(n)){var i=n.namespaceURI||null,a=t[i];if(S(a)){var s=a[n.localName];S(s)&&s.call(r,n,o)}}}function ei(t){let e=t.firstElementChild||t.firstChild;for(;e&&e.nodeType!==lt.ELEMENT;)e=e.nextSibling;return e}function ti(t){let e=t.nextElementSibling||t.nextSibling;for(;e&&e.nodeType!==lt.ELEMENT;)e=e.nextSibling;return e}function V(t,e,o){return oi(t,e,o)}function oi(t,e,o){var r=S(o)?o:{},n,i;for(n=0,i=t.length;n<i;++n)r[t[n]]=e;return r}function Wr(t,e){return function(o,r){var n=t.call(S(e)?e:this,o,r);if(S(n)){var i=r[r.length-1];i.push(n)}}}function L(t,e,o,r,n){return r.push(t),Qn(e,o,r,n),r.pop()}function h(t,e,o){return function(r,n){let i=t.call(S(o)?o:this,r,n);if(S(i)){var a=n[n.length-1],s=S(e)?e:r.localName;a[s]=i}}}function Y(t,e,o){return function(r,n){var i=t.call(S(o)?o:this,r,n);if(S(i)){var a=n[n.length-1],s=S(e)?e:r.localName,l=qr(a,s,[]);l.push(i)}}}const ri=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function ni(t){return t.replace(ri,"")}function Te(t){const e=/^\s*(true|1)|(false|0)\s*$/.exec(t);if(e)return S(e[1])||!1}function Oe(t){return se(io(t,!1))}function se(t){const e=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(t);if(e)return parseFloat(e[1])}function uo(t){return Ot(io(t,!1))}function Ot(t){const e=/^\s*(\d+)\s*$/.exec(t);if(e)return parseInt(e[1],10)}function T(t){return ni(io(t,!1))}const ii="http://www.w3.org/1999/xlink";function $o(t){return t.getAttributeNS(ii,"href")}function ai(t,e){return L({},Ii,t,e)}function Jr(t){return[se(t.getAttribute("minx")),se(t.getAttribute("miny")),se(t.getAttribute("maxx")),se(t.getAttribute("maxy"))]}function si(t,e){const o=Jr(t),r=[se(t.getAttribute("resx")),se(t.getAttribute("resy"))];return{crs:t.getAttribute("CRS")||t.getAttribute("SRS"),extent:o,res:r}}function li(t,e){const o=Jr(t);if(!(!S(o[0])||!S(o[1])||!S(o[2])||!S(o[3])))return o}function di(t,e){const o=parseFloat(t.getAttribute("min")),r=parseFloat(t.getAttribute("max"));return{min:o,max:r}}function ui(t,e){const o=L({},Li,t,e);if(!S(o))return;const r=o.westBoundLongitude,n=o.southBoundLatitude,i=o.eastBoundLongitude,a=o.northBoundLatitude;if(!(!S(r)||!S(n)||!S(i)||!S(a)))return[r,n,i,a]}function ci(t,e){return L({},Ai,t,e)}function pi(t,e){return L({},$i,t,e)}function hi(t,e){return L({},Ri,t,e)}function fi(t,e){return L({},Oi,t,e)}function mi(t,e){return L({},Di,t,e)}function gi(t,e){return L([],Pi,t,e)}function yi(t,e){const o=Te(t.getAttribute("queryable"));return L({queryable:S(o)?o:!1},en,t,e)}function bi(t,e){var o=e[e.length-1];const r=L({},en,t,e);if(!S(r))return;let n=Te(t.getAttribute("queryable"));S(n)||(n=o.queryable),r.queryable=S(n)?n:!1;let i=Ot(t.getAttribute("cascaded"));S(i)||(i=o.cascaded),r.cascaded=i;let a=Te(t.getAttribute("opaque"));S(a)||(a=o.opaque),r.opaque=S(a)?a:!1;let s=Te(t.getAttribute("noSubsets"));S(s)||(s=o.noSubsets),r.noSubsets=S(s)?s:!1;let l=se(t.getAttribute("fixedWidth"));S(l)||(l=o.fixedWidth),r.fixedWidth=l;let d=se(t.getAttribute("fixedHeight"));S(d)||(d=o.fixedHeight),r.fixedHeight=d;const p=["Style","CRS","AuthorityURL"];for(let b=0,w=p.length;b<w;b++){const f=p[b],E=o[f];if(S(E)){let N=qr(r,f,[]);N=N.concat(E),r[f]=N}}const c=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let b=0,w=c.length;b<w;b++){const f=c[b],E=r[f];if(!S(E)){const N=o[f];r[f]=N}}return r}function vi(t,e){return{name:t.getAttribute("name"),units:t.getAttribute("units"),unitSymbol:t.getAttribute("unitSymbol"),default:t.getAttribute("default"),multipleValues:Te(t.getAttribute("multipleValues")),nearestValue:Te(t.getAttribute("nearestValue")),current:Te(t.getAttribute("current")),values:T(t)}}function ue(t,e){return L({},Ui,t,e)}function Ei(t,e){return L({},Ni,t,e)}function wi(t,e){return L({},Hi,t,e)}function Si(t,e){return L({},Vi,t,e)}function co(t,e){return L({},Mi,t,e)}function Kr(t,e){var o=ue(t,e);if(S(o)){const r=[Ot(t.getAttribute("width")),Ot(t.getAttribute("height"))];return o.size=r,o}}function xi(t,e){var o=ue(t,e);if(S(o))return o.name=t.getAttribute("name"),o}function Ci(t,e){var o=ue(t,e);if(S(o))return o.type=t.getAttribute("type"),o}function Ti(t,e){return L({},Bi,t,e)}function Qr(t,e){return L([],Fi,t,e)}const B=[null,"http://www.opengis.net/wms"],_i=V(B,{Service:h(pi),Capability:h(ci)}),Ai=V(B,{Request:h(Ei),Exception:h(gi),Layer:h(yi)}),$i=V(B,{Name:h(T),Title:h(T),Abstract:h(T),KeywordList:h(Qr),OnlineResource:h($o),ContactInformation:h(hi),Fees:h(T),AccessConstraints:h(T),LayerLimit:h(uo),MaxWidth:h(uo),MaxHeight:h(uo)}),Ri=V(B,{ContactPersonPrimary:h(fi),ContactPosition:h(T),ContactAddress:h(mi),ContactVoiceTelephone:h(T),ContactFacsimileTelephone:h(T),ContactElectronicMailAddress:h(T)}),Oi=V(B,{ContactPerson:h(T),ContactOrganization:h(T)}),Di=V(B,{AddressType:h(T),Address:h(T),City:h(T),StateOrProvince:h(T),PostCode:h(T),Country:h(T)}),Pi=V(B,{Format:Wr(T)}),en=V(B,{Name:h(T),Title:h(T),Abstract:h(T),KeywordList:h(Qr),CRS:Y(T),SRS:Y(T),EX_GeographicBoundingBox:h(ui),LatLonBoundingBox:h(li),BoundingBox:Y(si),Dimension:Y(vi),Attribution:h(ai),AuthorityURL:Y(xi),Identifier:Y(T),MetadataURL:Y(Ci),DataURL:Y(ue),FeatureListURL:Y(ue),Style:Y(Ti),MinScaleDenominator:h(Oe),MaxScaleDenominator:h(Oe),ScaleHint:h(di),Layer:Y(bi)}),Ii=V(B,{Title:h(T),OnlineResource:h($o),LogoURL:h(Kr)}),Li=V(B,{westBoundLongitude:h(Oe),eastBoundLongitude:h(Oe),southBoundLatitude:h(Oe),northBoundLatitude:h(Oe)}),Ni=V(B,{GetCapabilities:h(co),GetMap:h(co),GetFeatureInfo:h(co)}),Mi=V(B,{Format:Y(T),DCPType:Y(wi)}),Hi=V(B,{HTTP:h(Si)}),Vi=V(B,{Get:h(ue),Post:h(ue)}),Bi=V(B,{Name:h(T),Title:h(T),Abstract:h(T),LegendURL:Y(Kr),StyleSheetURL:h(ue),StyleURL:h(ue)}),Ui=V(B,{Format:h(T),OnlineResource:h($o)}),Fi=V(B,{Keyword:Wr(T)});class Zi{constructor(e,o){!o&&typeof window<"u"&&(o=window.DOMParser),this.version=void 0,this._parser=new Kn(o),this._data=e}data(e){return this._data=e,this}toJSON(e){return e=e||this._data,this.parse(e)}parse(e){return this.readFromDocument(this._parser.toDocument(e))}readFromDocument(e){for(let o=e.firstChild;o;o=o.nextSibling)if(o.nodeType==lt.ELEMENT)return this.readFromNode(o);return null}readFromNode(e){return this.version=e.getAttribute("version"),L({version:this.version},_i,e,[])||null}}async function ki(t){let e=new URL(t),o=e.searchParams;o.set("SERVICE","WMS"),o.set("REQUEST","GetCapabilities");let r=e.toString();const n=await fetch(r);if(n.ok){const i=await n.text();return new Zi(i).toJSON()}else throw new Error(`Error: ${n.status}`)}function Ro(t){const e=/\b(?:wms|ows)\b/i,o=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return e.test(t)?"TileWMS":o.test(t)?"XYZ":!1}function Yi(t){const o=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(t),r=Ro(t);return!!(t&&o&&r)}function tn(t){return t.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function Xi(t){try{return JSON.parse(tn(t)),!!t}catch{return!1}}function zi(t,e){const o=new URL(t).searchParams;Object.entries(e).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{o.set(l,s[l])}):o.set(a,s)});const r=t.split("?")[0],n=o.toString();return`${r}?${n}`}/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Vo(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),o.push.apply(o,r)}return o}function re(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?Vo(Object(o),!0).forEach(function(r){ji(t,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):Vo(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))})}return t}function xt(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xt=function(e){return typeof e}:xt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xt(t)}function ji(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function ce(){return ce=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},ce.apply(this,arguments)}function qi(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}function Gi(t,e){if(t==null)return{};var o=qi(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var Wi="1.15.2";function de(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var he=de(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ft=de(/Edge/i),Bo=de(/firefox/i),rt=de(/safari/i)&&!de(/chrome/i)&&!de(/android/i),on=de(/iP(ad|od|hone)/i),rn=de(/chrome/i)&&de(/android/i),nn={capture:!1,passive:!1};function _(t,e,o){t.addEventListener(e,o,!he&&nn)}function x(t,e,o){t.removeEventListener(e,o,!he&&nn)}function Dt(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function Ji(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function Q(t,e,o,r){if(t){o=o||document;do{if(e!=null&&(e[0]===">"?t.parentNode===o&&Dt(t,e):Dt(t,e))||r&&t===o)return t;if(t===o)break}while(t=Ji(t))}return null}var Uo=/\s+/g;function j(t,e,o){if(t&&e)if(t.classList)t.classList[o?"add":"remove"](e);else{var r=(" "+t.className+" ").replace(Uo," ").replace(" "+e+" "," ");t.className=(r+(o?" "+e:"")).replace(Uo," ")}}function m(t,e,o){var r=t&&t.style;if(r){if(o===void 0)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(o=t.currentStyle),e===void 0?o:o[e];!(e in r)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),r[e]=o+(typeof o=="string"?"":"px")}}function Pe(t,e){var o="";if(typeof t=="string")o=t;else do{var r=m(t,"transform");r&&r!=="none"&&(o=r+" "+o)}while(!e&&(t=t.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(o)}function an(t,e,o){if(t){var r=t.getElementsByTagName(e),n=0,i=r.length;if(o)for(;n<i;n++)o(r[n],n);return r}return[]}function oe(){var t=document.scrollingElement;return t||document.documentElement}function P(t,e,o,r,n){if(!(!t.getBoundingClientRect&&t!==window)){var i,a,s,l,d,p,c;if(t!==window&&t.parentNode&&t!==oe()?(i=t.getBoundingClientRect(),a=i.top,s=i.left,l=i.bottom,d=i.right,p=i.height,c=i.width):(a=0,s=0,l=window.innerHeight,d=window.innerWidth,p=window.innerHeight,c=window.innerWidth),(e||o)&&t!==window&&(n=n||t.parentNode,!he))do if(n&&n.getBoundingClientRect&&(m(n,"transform")!=="none"||o&&m(n,"position")!=="static")){var b=n.getBoundingClientRect();a-=b.top+parseInt(m(n,"border-top-width")),s-=b.left+parseInt(m(n,"border-left-width")),l=a+i.height,d=s+i.width;break}while(n=n.parentNode);if(r&&t!==window){var w=Pe(n||t),f=w&&w.a,E=w&&w.d;w&&(a/=E,s/=f,c/=f,p/=E,l=a+p,d=s+c)}return{top:a,left:s,bottom:l,right:d,width:c,height:p}}}function Fo(t,e,o){for(var r=be(t,!0),n=P(t)[e];r;){var i=P(r)[o],a=void 0;if(o==="top"||o==="left"?a=n>=i:a=n<=i,!a)return r;if(r===oe())break;r=be(r,!1)}return!1}function Me(t,e,o,r){for(var n=0,i=0,a=t.children;i<a.length;){if(a[i].style.display!=="none"&&a[i]!==g.ghost&&(r||a[i]!==g.dragged)&&Q(a[i],o.draggable,t,!1)){if(n===e)return a[i];n++}i++}return null}function Oo(t,e){for(var o=t.lastElementChild;o&&(o===g.ghost||m(o,"display")==="none"||e&&!Dt(o,e));)o=o.previousElementSibling;return o||null}function W(t,e){var o=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==g.clone&&(!e||Dt(t,e))&&o++;return o}function Zo(t){var e=0,o=0,r=oe();if(t)do{var n=Pe(t),i=n.a,a=n.d;e+=t.scrollLeft*i,o+=t.scrollTop*a}while(t!==r&&(t=t.parentNode));return[e,o]}function Ki(t,e){for(var o in t)if(t.hasOwnProperty(o)){for(var r in e)if(e.hasOwnProperty(r)&&e[r]===t[o][r])return Number(o)}return-1}function be(t,e){if(!t||!t.getBoundingClientRect)return oe();var o=t,r=!1;do if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var n=m(o);if(o.clientWidth<o.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||o.clientHeight<o.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!o.getBoundingClientRect||o===document.body)return oe();if(r||e)return o;r=!0}}while(o=o.parentNode);return oe()}function Qi(t,e){if(t&&e)for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);return t}function po(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var nt;function sn(t,e){return function(){if(!nt){var o=arguments,r=this;o.length===1?t.call(r,o[0]):t.apply(r,o),nt=setTimeout(function(){nt=void 0},e)}}}function ea(){clearTimeout(nt),nt=void 0}function ln(t,e,o){t.scrollLeft+=e,t.scrollTop+=o}function dn(t){var e=window.Polymer,o=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):o?o(t).clone(!0)[0]:t.cloneNode(!0)}function un(t,e,o){var r={};return Array.from(t.children).forEach(function(n){var i,a,s,l;if(!(!Q(n,e.draggable,t,!1)||n.animated||n===o)){var d=P(n);r.left=Math.min((i=r.left)!==null&&i!==void 0?i:1/0,d.left),r.top=Math.min((a=r.top)!==null&&a!==void 0?a:1/0,d.top),r.right=Math.max((s=r.right)!==null&&s!==void 0?s:-1/0,d.right),r.bottom=Math.max((l=r.bottom)!==null&&l!==void 0?l:-1/0,d.bottom)}}),r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}var G="Sortable"+new Date().getTime();function ta(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(n){if(!(m(n,"display")==="none"||n===g.ghost)){t.push({target:n,rect:P(n)});var i=re({},t[t.length-1].rect);if(n.thisAnimationDuration){var a=Pe(n,!0);a&&(i.top-=a.f,i.left-=a.e)}n.fromRect=i}})}},addAnimationState:function(r){t.push(r)},removeAnimationState:function(r){t.splice(Ki(t,{target:r}),1)},animateAll:function(r){var n=this;if(!this.options.animation){clearTimeout(e),typeof r=="function"&&r();return}var i=!1,a=0;t.forEach(function(s){var l=0,d=s.target,p=d.fromRect,c=P(d),b=d.prevFromRect,w=d.prevToRect,f=s.rect,E=Pe(d,!0);E&&(c.top-=E.f,c.left-=E.e),d.toRect=c,d.thisAnimationDuration&&po(b,c)&&!po(p,c)&&(f.top-c.top)/(f.left-c.left)===(p.top-c.top)/(p.left-c.left)&&(l=ra(f,b,w,n.options)),po(c,p)||(d.prevFromRect=p,d.prevToRect=c,l||(l=n.options.animation),n.animate(d,f,c,l)),l&&(i=!0,a=Math.max(a,l),clearTimeout(d.animationResetTimer),d.animationResetTimer=setTimeout(function(){d.animationTime=0,d.prevFromRect=null,d.fromRect=null,d.prevToRect=null,d.thisAnimationDuration=null},l),d.thisAnimationDuration=l)}),clearTimeout(e),i?e=setTimeout(function(){typeof r=="function"&&r()},a):typeof r=="function"&&r(),t=[]},animate:function(r,n,i,a){if(a){m(r,"transition",""),m(r,"transform","");var s=Pe(this.el),l=s&&s.a,d=s&&s.d,p=(n.left-i.left)/(l||1),c=(n.top-i.top)/(d||1);r.animatingX=!!p,r.animatingY=!!c,m(r,"transform","translate3d("+p+"px,"+c+"px,0)"),this.forRepaintDummy=oa(r),m(r,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),m(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){m(r,"transition",""),m(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},a)}}}}function oa(t){return t.offsetWidth}function ra(t,e,o,r){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-o.top,2)+Math.pow(e.left-o.left,2))*r.animation}var Ae=[],ho={initializeByDefault:!0},mt={mount:function(e){for(var o in ho)ho.hasOwnProperty(o)&&!(o in e)&&(e[o]=ho[o]);Ae.forEach(function(r){if(r.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),Ae.push(e)},pluginEvent:function(e,o,r){var n=this;this.eventCanceled=!1,r.cancel=function(){n.eventCanceled=!0};var i=e+"Global";Ae.forEach(function(a){o[a.pluginName]&&(o[a.pluginName][i]&&o[a.pluginName][i](re({sortable:o},r)),o.options[a.pluginName]&&o[a.pluginName][e]&&o[a.pluginName][e](re({sortable:o},r)))})},initializePlugins:function(e,o,r,n){Ae.forEach(function(s){var l=s.pluginName;if(!(!e.options[l]&&!s.initializeByDefault)){var d=new s(e,o,e.options);d.sortable=e,d.options=e.options,e[l]=d,ce(r,d.defaults)}});for(var i in e.options)if(e.options.hasOwnProperty(i)){var a=this.modifyOption(e,i,e.options[i]);typeof a<"u"&&(e.options[i]=a)}},getEventProperties:function(e,o){var r={};return Ae.forEach(function(n){typeof n.eventProperties=="function"&&ce(r,n.eventProperties.call(o[n.pluginName],e))}),r},modifyOption:function(e,o,r){var n;return Ae.forEach(function(i){e[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[o]=="function"&&(n=i.optionListeners[o].call(e[i.pluginName],r))}),n}};function na(t){var e=t.sortable,o=t.rootEl,r=t.name,n=t.targetEl,i=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,d=t.newIndex,p=t.oldDraggableIndex,c=t.newDraggableIndex,b=t.originalEvent,w=t.putSortable,f=t.extraEventProperties;if(e=e||o&&o[G],!!e){var E,N=e.options,ie="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!he&&!ft?E=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(E=document.createEvent("Event"),E.initEvent(r,!0,!0)),E.to=a||o,E.from=s||o,E.item=n||o,E.clone=i,E.oldIndex=l,E.newIndex=d,E.oldDraggableIndex=p,E.newDraggableIndex=c,E.originalEvent=b,E.pullMode=w?w.lastPutMode:void 0;var F=re(re({},f),mt.getEventProperties(r,e));for(var J in F)E[J]=F[J];o&&o.dispatchEvent(E),N[ie]&&N[ie].call(e,E)}}var ia=["evt"],k=function(e,o){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.evt,i=Gi(r,ia);mt.pluginEvent.bind(g)(e,o,re({dragEl:u,parentEl:O,ghostEl:v,rootEl:A,nextEl:Ce,lastDownEl:Ct,cloneEl:R,cloneHidden:ye,dragStarted:et,putSortable:H,activeSortable:g.active,originalEvent:n,oldIndex:De,oldDraggableIndex:it,newIndex:q,newDraggableIndex:ge,hideGhostForTarget:fn,unhideGhostForTarget:mn,cloneNowHidden:function(){ye=!0},cloneNowShown:function(){ye=!1},dispatchSortableEvent:function(s){Z({sortable:o,name:s,originalEvent:n})}},i))};function Z(t){na(re({putSortable:H,cloneEl:R,targetEl:u,rootEl:A,oldIndex:De,oldDraggableIndex:it,newIndex:q,newDraggableIndex:ge},t))}var u,O,v,A,Ce,Ct,R,ye,De,q,it,ge,bt,H,Re=!1,Pt=!1,It=[],Se,K,fo,mo,ko,Yo,et,$e,at,st=!1,vt=!1,Tt,U,go=[],So=!1,Lt=[],ao=typeof document<"u",Et=on,Xo=ft||he?"cssFloat":"float",aa=ao&&!rn&&!on&&"draggable"in document.createElement("div"),cn=function(){if(ao){if(he)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),pn=function(e,o){var r=m(e),n=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),i=Me(e,0,o),a=Me(e,1,o),s=i&&m(i),l=a&&m(a),d=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+P(i).width,p=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+P(a).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&s.float&&s.float!=="none"){var c=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===c)?"vertical":"horizontal"}return i&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||d>=n&&r[Xo]==="none"||a&&r[Xo]==="none"&&d+p>n)?"vertical":"horizontal"},sa=function(e,o,r){var n=r?e.left:e.top,i=r?e.right:e.bottom,a=r?e.width:e.height,s=r?o.left:o.top,l=r?o.right:o.bottom,d=r?o.width:o.height;return n===s||i===l||n+a/2===s+d/2},la=function(e,o){var r;return It.some(function(n){var i=n[G].options.emptyInsertThreshold;if(!(!i||Oo(n))){var a=P(n),s=e>=a.left-i&&e<=a.right+i,l=o>=a.top-i&&o<=a.bottom+i;if(s&&l)return r=n}}),r},hn=function(e){function o(i,a){return function(s,l,d,p){var c=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(i==null&&(a||c))return!0;if(i==null||i===!1)return!1;if(a&&i==="clone")return i;if(typeof i=="function")return o(i(s,l,d,p),a)(s,l,d,p);var b=(a?s:l).options.group.name;return i===!0||typeof i=="string"&&i===b||i.join&&i.indexOf(b)>-1}}var r={},n=e.group;(!n||xt(n)!="object")&&(n={name:n}),r.name=n.name,r.checkPull=o(n.pull,!0),r.checkPut=o(n.put),r.revertClone=n.revertClone,e.group=r},fn=function(){!cn&&v&&m(v,"display","none")},mn=function(){!cn&&v&&m(v,"display","")};ao&&!rn&&document.addEventListener("click",function(t){if(Pt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Pt=!1,!1},!0);var xe=function(e){if(u){e=e.touches?e.touches[0]:e;var o=la(e.clientX,e.clientY);if(o){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);r.target=r.rootEl=o,r.preventDefault=void 0,r.stopPropagation=void 0,o[G]._onDragOver(r)}}},da=function(e){u&&u.parentNode[G]._isOutsideThisEl(e.target)};function g(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=ce({},e),t[G]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return pn(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:g.supportPointer!==!1&&"PointerEvent"in window&&!rt,emptyInsertThreshold:5};mt.initializePlugins(this,t,o);for(var r in o)!(r in e)&&(e[r]=o[r]);hn(e);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=e.forceFallback?!1:aa,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?_(t,"pointerdown",this._onTapStart):(_(t,"mousedown",this._onTapStart),_(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(_(t,"dragover",this),_(t,"dragenter",this)),It.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),ce(this,ta())}g.prototype={constructor:g,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&($e=null)},_getDirection:function(e,o){return typeof this.options.direction=="function"?this.options.direction.call(this,e,o,u):this.options.direction},_onTapStart:function(e){if(e.cancelable){var o=this,r=this.el,n=this.options,i=n.preventOnFilter,a=e.type,s=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,l=(s||e).target,d=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,p=n.filter;if(ya(r),!u&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||n.disabled)&&!d.isContentEditable&&!(!this.nativeDraggable&&rt&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=Q(l,n.draggable,r,!1),!(l&&l.animated)&&Ct!==l)){if(De=W(l),it=W(l,n.draggable),typeof p=="function"){if(p.call(this,e,l,this)){Z({sortable:o,rootEl:d,name:"filter",targetEl:l,toEl:r,fromEl:r}),k("filter",o,{evt:e}),i&&e.cancelable&&e.preventDefault();return}}else if(p&&(p=p.split(",").some(function(c){if(c=Q(d,c.trim(),r,!1),c)return Z({sortable:o,rootEl:c,name:"filter",targetEl:l,fromEl:r,toEl:r}),k("filter",o,{evt:e}),!0}),p)){i&&e.cancelable&&e.preventDefault();return}n.handle&&!Q(d,n.handle,r,!1)||this._prepareDragStart(e,s,l)}}},_prepareDragStart:function(e,o,r){var n=this,i=n.el,a=n.options,s=i.ownerDocument,l;if(r&&!u&&r.parentNode===i){var d=P(r);if(A=i,u=r,O=u.parentNode,Ce=u.nextSibling,Ct=r,bt=a.group,g.dragged=u,Se={target:u,clientX:(o||e).clientX,clientY:(o||e).clientY},ko=Se.clientX-d.left,Yo=Se.clientY-d.top,this._lastX=(o||e).clientX,this._lastY=(o||e).clientY,u.style["will-change"]="all",l=function(){if(k("delayEnded",n,{evt:e}),g.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!Bo&&n.nativeDraggable&&(u.draggable=!0),n._triggerDragStart(e,o),Z({sortable:n,name:"choose",originalEvent:e}),j(u,a.chosenClass,!0)},a.ignore.split(",").forEach(function(p){an(u,p.trim(),yo)}),_(s,"dragover",xe),_(s,"mousemove",xe),_(s,"touchmove",xe),_(s,"mouseup",n._onDrop),_(s,"touchend",n._onDrop),_(s,"touchcancel",n._onDrop),Bo&&this.nativeDraggable&&(this.options.touchStartThreshold=4,u.draggable=!0),k("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||o)&&(!this.nativeDraggable||!(ft||he))){if(g.eventCanceled){this._onDrop();return}_(s,"mouseup",n._disableDelayedDrag),_(s,"touchend",n._disableDelayedDrag),_(s,"touchcancel",n._disableDelayedDrag),_(s,"mousemove",n._delayedDragTouchMoveHandler),_(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&_(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(e){var o=e.touches?e.touches[0]:e;Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){u&&yo(u),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;x(e,"mouseup",this._disableDelayedDrag),x(e,"touchend",this._disableDelayedDrag),x(e,"touchcancel",this._disableDelayedDrag),x(e,"mousemove",this._delayedDragTouchMoveHandler),x(e,"touchmove",this._delayedDragTouchMoveHandler),x(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,o){o=o||e.pointerType=="touch"&&e,!this.nativeDraggable||o?this.options.supportPointer?_(document,"pointermove",this._onTouchMove):o?_(document,"touchmove",this._onTouchMove):_(document,"mousemove",this._onTouchMove):(_(u,"dragend",this),_(A,"dragstart",this._onDragStart));try{document.selection?_t(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,o){if(Re=!1,A&&u){k("dragStarted",this,{evt:o}),this.nativeDraggable&&_(document,"dragover",da);var r=this.options;!e&&j(u,r.dragClass,!1),j(u,r.ghostClass,!0),g.active=this,e&&this._appendGhost(),Z({sortable:this,name:"start",originalEvent:o})}else this._nulling()},_emulateDragOver:function(){if(K){this._lastX=K.clientX,this._lastY=K.clientY,fn();for(var e=document.elementFromPoint(K.clientX,K.clientY),o=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(K.clientX,K.clientY),e!==o);)o=e;if(u.parentNode[G]._isOutsideThisEl(e),o)do{if(o[G]){var r=void 0;if(r=o[G]._onDragOver({clientX:K.clientX,clientY:K.clientY,target:e,rootEl:o}),r&&!this.options.dragoverBubble)break}e=o}while(o=o.parentNode);mn()}},_onTouchMove:function(e){if(Se){var o=this.options,r=o.fallbackTolerance,n=o.fallbackOffset,i=e.touches?e.touches[0]:e,a=v&&Pe(v,!0),s=v&&a&&a.a,l=v&&a&&a.d,d=Et&&U&&Zo(U),p=(i.clientX-Se.clientX+n.x)/(s||1)+(d?d[0]-go[0]:0)/(s||1),c=(i.clientY-Se.clientY+n.y)/(l||1)+(d?d[1]-go[1]:0)/(l||1);if(!g.active&&!Re){if(r&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<r)return;this._onDragStart(e,!0)}if(v){a?(a.e+=p-(fo||0),a.f+=c-(mo||0)):a={a:1,b:0,c:0,d:1,e:p,f:c};var b="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");m(v,"webkitTransform",b),m(v,"mozTransform",b),m(v,"msTransform",b),m(v,"transform",b),fo=p,mo=c,K=i}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!v){var e=this.options.fallbackOnBody?document.body:A,o=P(u,!0,Et,!0,e),r=this.options;if(Et){for(U=e;m(U,"position")==="static"&&m(U,"transform")==="none"&&U!==document;)U=U.parentNode;U!==document.body&&U!==document.documentElement?(U===document&&(U=oe()),o.top+=U.scrollTop,o.left+=U.scrollLeft):U=oe(),go=Zo(U)}v=u.cloneNode(!0),j(v,r.ghostClass,!1),j(v,r.fallbackClass,!0),j(v,r.dragClass,!0),m(v,"transition",""),m(v,"transform",""),m(v,"box-sizing","border-box"),m(v,"margin",0),m(v,"top",o.top),m(v,"left",o.left),m(v,"width",o.width),m(v,"height",o.height),m(v,"opacity","0.8"),m(v,"position",Et?"absolute":"fixed"),m(v,"zIndex","100000"),m(v,"pointerEvents","none"),g.ghost=v,e.appendChild(v),m(v,"transform-origin",ko/parseInt(v.style.width)*100+"% "+Yo/parseInt(v.style.height)*100+"%")}},_onDragStart:function(e,o){var r=this,n=e.dataTransfer,i=r.options;if(k("dragStart",this,{evt:e}),g.eventCanceled){this._onDrop();return}k("setupClone",this),g.eventCanceled||(R=dn(u),R.removeAttribute("id"),R.draggable=!1,R.style["will-change"]="",this._hideClone(),j(R,this.options.chosenClass,!1),g.clone=R),r.cloneId=_t(function(){k("clone",r),!g.eventCanceled&&(r.options.removeCloneOnHide||A.insertBefore(R,u),r._hideClone(),Z({sortable:r,name:"clone"}))}),!o&&j(u,i.dragClass,!0),o?(Pt=!0,r._loopId=setInterval(r._emulateDragOver,50)):(x(document,"mouseup",r._onDrop),x(document,"touchend",r._onDrop),x(document,"touchcancel",r._onDrop),n&&(n.effectAllowed="move",i.setData&&i.setData.call(r,n,u)),_(document,"drop",r),m(u,"transform","translateZ(0)")),Re=!0,r._dragStartId=_t(r._dragStarted.bind(r,o,e)),_(document,"selectstart",r),et=!0,rt&&m(document.body,"user-select","none")},_onDragOver:function(e){var o=this.el,r=e.target,n,i,a,s=this.options,l=s.group,d=g.active,p=bt===l,c=s.sort,b=H||d,w,f=this,E=!1;if(So)return;function N(Ze,Vn){k(Ze,f,re({evt:e,isOwner:p,axis:w?"vertical":"horizontal",revert:a,dragRect:n,targetRect:i,canSort:c,fromSortable:b,target:r,completed:F,onMove:function(Ho,Bn){return wt(A,o,u,n,Ho,P(Ho),e,Bn)},changed:J},Vn))}function ie(){N("dragOverAnimationCapture"),f.captureAnimationState(),f!==b&&b.captureAnimationState()}function F(Ze){return N("dragOverCompleted",{insertion:Ze}),Ze&&(p?d._hideClone():d._showClone(f),f!==b&&(j(u,H?H.options.ghostClass:d.options.ghostClass,!1),j(u,s.ghostClass,!0)),H!==f&&f!==g.active?H=f:f===g.active&&H&&(H=null),b===f&&(f._ignoreWhileAnimating=r),f.animateAll(function(){N("dragOverAnimationComplete"),f._ignoreWhileAnimating=null}),f!==b&&(b.animateAll(),b._ignoreWhileAnimating=null)),(r===u&&!u.animated||r===o&&!r.animated)&&($e=null),!s.dragoverBubble&&!e.rootEl&&r!==document&&(u.parentNode[G]._isOutsideThisEl(e.target),!Ze&&xe(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),E=!0}function J(){q=W(u),ge=W(u,s.draggable),Z({sortable:f,name:"change",toEl:o,newIndex:q,newDraggableIndex:ge,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),r=Q(r,s.draggable,o,!0),N("dragOver"),g.eventCanceled)return E;if(u.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||f._ignoreWhileAnimating===r)return F(!1);if(Pt=!1,d&&!s.disabled&&(p?c||(a=O!==A):H===this||(this.lastPutMode=bt.checkPull(this,d,u,e))&&l.checkPut(this,d,u,e))){if(w=this._getDirection(e,r)==="vertical",n=P(u),N("dragOverValid"),g.eventCanceled)return E;if(a)return O=A,ie(),this._hideClone(),N("revert"),g.eventCanceled||(Ce?A.insertBefore(u,Ce):A.appendChild(u)),F(!0);var X=Oo(o,s.draggable);if(!X||ha(e,w,this)&&!X.animated){if(X===u)return F(!1);if(X&&o===e.target&&(r=X),r&&(i=P(r)),wt(A,o,u,n,r,i,e,!!r)!==!1)return ie(),X&&X.nextSibling?o.insertBefore(u,X.nextSibling):o.appendChild(u),O=o,J(),F(!0)}else if(X&&pa(e,w,this)){var ve=Me(o,0,s,!0);if(ve===u)return F(!1);if(r=ve,i=P(r),wt(A,o,u,n,r,i,e,!1)!==!1)return ie(),o.insertBefore(u,ve),O=o,J(),F(!0)}else if(r.parentNode===o){i=P(r);var te=0,Ee,Ve=u.parentNode!==o,z=!sa(u.animated&&u.toRect||n,r.animated&&r.toRect||i,w),Be=w?"top":"left",fe=Fo(r,"top","top")||Fo(u,"top","top"),Ue=fe?fe.scrollTop:void 0;$e!==r&&(Ee=i[Be],st=!1,vt=!z&&s.invertSwap||Ve),te=fa(e,r,i,w,z?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,vt,$e===r);var ae;if(te!==0){var we=W(u);do we-=te,ae=O.children[we];while(ae&&(m(ae,"display")==="none"||ae===v))}if(te===0||ae===r)return F(!1);$e=r,at=te;var Fe=r.nextElementSibling,me=!1;me=te===1;var gt=wt(A,o,u,n,r,i,e,me);if(gt!==!1)return(gt===1||gt===-1)&&(me=gt===1),So=!0,setTimeout(ca,30),ie(),me&&!Fe?o.appendChild(u):r.parentNode.insertBefore(u,me?Fe:r),fe&&ln(fe,0,Ue-fe.scrollTop),O=u.parentNode,Ee!==void 0&&!vt&&(Tt=Math.abs(Ee-P(r)[Be])),J(),F(!0)}if(o.contains(u))return F(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){x(document,"mousemove",this._onTouchMove),x(document,"touchmove",this._onTouchMove),x(document,"pointermove",this._onTouchMove),x(document,"dragover",xe),x(document,"mousemove",xe),x(document,"touchmove",xe)},_offUpEvents:function(){var e=this.el.ownerDocument;x(e,"mouseup",this._onDrop),x(e,"touchend",this._onDrop),x(e,"pointerup",this._onDrop),x(e,"touchcancel",this._onDrop),x(document,"selectstart",this)},_onDrop:function(e){var o=this.el,r=this.options;if(q=W(u),ge=W(u,r.draggable),k("drop",this,{evt:e}),O=u&&u.parentNode,q=W(u),ge=W(u,r.draggable),g.eventCanceled){this._nulling();return}Re=!1,vt=!1,st=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),xo(this.cloneId),xo(this._dragStartId),this.nativeDraggable&&(x(document,"drop",this),x(o,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),rt&&m(document.body,"user-select",""),m(u,"transform",""),e&&(et&&(e.cancelable&&e.preventDefault(),!r.dropBubble&&e.stopPropagation()),v&&v.parentNode&&v.parentNode.removeChild(v),(A===O||H&&H.lastPutMode!=="clone")&&R&&R.parentNode&&R.parentNode.removeChild(R),u&&(this.nativeDraggable&&x(u,"dragend",this),yo(u),u.style["will-change"]="",et&&!Re&&j(u,H?H.options.ghostClass:this.options.ghostClass,!1),j(u,this.options.chosenClass,!1),Z({sortable:this,name:"unchoose",toEl:O,newIndex:null,newDraggableIndex:null,originalEvent:e}),A!==O?(q>=0&&(Z({rootEl:O,name:"add",toEl:O,fromEl:A,originalEvent:e}),Z({sortable:this,name:"remove",toEl:O,originalEvent:e}),Z({rootEl:O,name:"sort",toEl:O,fromEl:A,originalEvent:e}),Z({sortable:this,name:"sort",toEl:O,originalEvent:e})),H&&H.save()):q!==De&&q>=0&&(Z({sortable:this,name:"update",toEl:O,originalEvent:e}),Z({sortable:this,name:"sort",toEl:O,originalEvent:e})),g.active&&((q==null||q===-1)&&(q=De,ge=it),Z({sortable:this,name:"end",toEl:O,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){k("nulling",this),A=u=O=v=Ce=R=Ct=ye=Se=K=et=q=ge=De=it=$e=at=H=bt=g.dragged=g.ghost=g.clone=g.active=null,Lt.forEach(function(e){e.checked=!0}),Lt.length=fo=mo=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":u&&(this._onDragOver(e),ua(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],o,r=this.el.children,n=0,i=r.length,a=this.options;n<i;n++)o=r[n],Q(o,a.draggable,this.el,!1)&&e.push(o.getAttribute(a.dataIdAttr)||ga(o));return e},sort:function(e,o){var r={},n=this.el;this.toArray().forEach(function(i,a){var s=n.children[a];Q(s,this.options.draggable,n,!1)&&(r[i]=s)},this),o&&this.captureAnimationState(),e.forEach(function(i){r[i]&&(n.removeChild(r[i]),n.appendChild(r[i]))}),o&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,o){return Q(e,o||this.options.draggable,this.el,!1)},option:function(e,o){var r=this.options;if(o===void 0)return r[e];var n=mt.modifyOption(this,e,o);typeof n<"u"?r[e]=n:r[e]=o,e==="group"&&hn(r)},destroy:function(){k("destroy",this);var e=this.el;e[G]=null,x(e,"mousedown",this._onTapStart),x(e,"touchstart",this._onTapStart),x(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(x(e,"dragover",this),x(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(o){o.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),It.splice(It.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!ye){if(k("hideClone",this),g.eventCanceled)return;m(R,"display","none"),this.options.removeCloneOnHide&&R.parentNode&&R.parentNode.removeChild(R),ye=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(ye){if(k("showClone",this),g.eventCanceled)return;u.parentNode==A&&!this.options.group.revertClone?A.insertBefore(R,u):Ce?A.insertBefore(R,Ce):A.appendChild(R),this.options.group.revertClone&&this.animate(u,R),m(R,"display",""),ye=!1}}};function ua(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function wt(t,e,o,r,n,i,a,s){var l,d=t[G],p=d.options.onMove,c;return window.CustomEvent&&!he&&!ft?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=e,l.from=t,l.dragged=o,l.draggedRect=r,l.related=n||e,l.relatedRect=i||P(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),p&&(c=p.call(d,l,a)),c}function yo(t){t.draggable=!1}function ca(){So=!1}function pa(t,e,o){var r=P(Me(o.el,0,o.options,!0)),n=un(o.el,o.options,v),i=10;return e?t.clientX<n.left-i||t.clientY<r.top&&t.clientX<r.right:t.clientY<n.top-i||t.clientY<r.bottom&&t.clientX<r.left}function ha(t,e,o){var r=P(Oo(o.el,o.options.draggable)),n=un(o.el,o.options,v),i=10;return e?t.clientX>n.right+i||t.clientY>r.bottom&&t.clientX>r.left:t.clientY>n.bottom+i||t.clientX>r.right&&t.clientY>r.top}function fa(t,e,o,r,n,i,a,s){var l=r?t.clientY:t.clientX,d=r?o.height:o.width,p=r?o.top:o.left,c=r?o.bottom:o.right,b=!1;if(!a){if(s&&Tt<d*n){if(!st&&(at===1?l>p+d*i/2:l<c-d*i/2)&&(st=!0),st)b=!0;else if(at===1?l<p+Tt:l>c-Tt)return-at}else if(l>p+d*(1-n)/2&&l<c-d*(1-n)/2)return ma(e)}return b=b||a,b&&(l<p+d*i/2||l>c-d*i/2)?l>p+d/2?1:-1:0}function ma(t){return W(u)<W(t)?1:-1}function ga(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,o=e.length,r=0;o--;)r+=e.charCodeAt(o);return r.toString(36)}function ya(t){Lt.length=0;for(var e=t.getElementsByTagName("input"),o=e.length;o--;){var r=e[o];r.checked&&Lt.push(r)}}function _t(t){return setTimeout(t,0)}function xo(t){return clearTimeout(t)}ao&&_(document,"touchmove",function(t){(g.active||Re)&&t.cancelable&&t.preventDefault()});g.utils={on:_,off:x,css:m,find:an,is:function(e,o){return!!Q(e,o,e,!1)},extend:Qi,throttle:sn,closest:Q,toggleClass:j,clone:dn,index:W,nextTick:_t,cancelNextTick:xo,detectDirection:pn,getChild:Me};g.get=function(t){return t[G]};g.mount=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];e[0].constructor===Array&&(e=e[0]),e.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(g.utils=re(re({},g.utils),r.utils)),mt.mount(r)})};g.create=function(t,e){return new g(t,e)};g.version=Wi;var D=[],tt,Co,To=!1,bo,vo,Nt,ot;function ba(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(o){var r=o.originalEvent;this.sortable.nativeDraggable?_(document,"dragover",this._handleAutoScroll):this.options.supportPointer?_(document,"pointermove",this._handleFallbackAutoScroll):r.touches?_(document,"touchmove",this._handleFallbackAutoScroll):_(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(o){var r=o.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?x(document,"dragover",this._handleAutoScroll):(x(document,"pointermove",this._handleFallbackAutoScroll),x(document,"touchmove",this._handleFallbackAutoScroll),x(document,"mousemove",this._handleFallbackAutoScroll)),zo(),At(),ea()},nulling:function(){Nt=Co=tt=To=ot=bo=vo=null,D.length=0},_handleFallbackAutoScroll:function(o){this._handleAutoScroll(o,!0)},_handleAutoScroll:function(o,r){var n=this,i=(o.touches?o.touches[0]:o).clientX,a=(o.touches?o.touches[0]:o).clientY,s=document.elementFromPoint(i,a);if(Nt=o,r||this.options.forceAutoScrollFallback||ft||he||rt){Eo(o,this.options,s,r);var l=be(s,!0);To&&(!ot||i!==bo||a!==vo)&&(ot&&zo(),ot=setInterval(function(){var d=be(document.elementFromPoint(i,a),!0);d!==l&&(l=d,At()),Eo(o,n.options,d,r)},10),bo=i,vo=a)}else{if(!this.options.bubbleScroll||be(s,!0)===oe()){At();return}Eo(o,this.options,be(s,!1),!1)}}},ce(t,{pluginName:"scroll",initializeByDefault:!0})}function At(){D.forEach(function(t){clearInterval(t.pid)}),D=[]}function zo(){clearInterval(ot)}var Eo=sn(function(t,e,o,r){if(e.scroll){var n=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,a=e.scrollSensitivity,s=e.scrollSpeed,l=oe(),d=!1,p;Co!==o&&(Co=o,At(),tt=e.scroll,p=e.scrollFn,tt===!0&&(tt=be(o,!0)));var c=0,b=tt;do{var w=b,f=P(w),E=f.top,N=f.bottom,ie=f.left,F=f.right,J=f.width,X=f.height,ve=void 0,te=void 0,Ee=w.scrollWidth,Ve=w.scrollHeight,z=m(w),Be=w.scrollLeft,fe=w.scrollTop;w===l?(ve=J<Ee&&(z.overflowX==="auto"||z.overflowX==="scroll"||z.overflowX==="visible"),te=X<Ve&&(z.overflowY==="auto"||z.overflowY==="scroll"||z.overflowY==="visible")):(ve=J<Ee&&(z.overflowX==="auto"||z.overflowX==="scroll"),te=X<Ve&&(z.overflowY==="auto"||z.overflowY==="scroll"));var Ue=ve&&(Math.abs(F-n)<=a&&Be+J<Ee)-(Math.abs(ie-n)<=a&&!!Be),ae=te&&(Math.abs(N-i)<=a&&fe+X<Ve)-(Math.abs(E-i)<=a&&!!fe);if(!D[c])for(var we=0;we<=c;we++)D[we]||(D[we]={});(D[c].vx!=Ue||D[c].vy!=ae||D[c].el!==w)&&(D[c].el=w,D[c].vx=Ue,D[c].vy=ae,clearInterval(D[c].pid),(Ue!=0||ae!=0)&&(d=!0,D[c].pid=setInterval((function(){r&&this.layer===0&&g.active._onTouchMove(Nt);var Fe=D[this.layer].vy?D[this.layer].vy*s:0,me=D[this.layer].vx?D[this.layer].vx*s:0;typeof p=="function"&&p.call(g.dragged.parentNode[G],me,Fe,t,Nt,D[this.layer].el)!=="continue"||ln(D[this.layer].el,me,Fe)}).bind({layer:c}),24))),c++}while(e.bubbleScroll&&b!==l&&(b=be(b,!1)));To=d}},30),gn=function(e){var o=e.originalEvent,r=e.putSortable,n=e.dragEl,i=e.activeSortable,a=e.dispatchSortableEvent,s=e.hideGhostForTarget,l=e.unhideGhostForTarget;if(o){var d=r||i;s();var p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:o,c=document.elementFromPoint(p.clientX,p.clientY);l(),d&&!d.el.contains(c)&&(a("spill"),this.onSpill({dragEl:n,putSortable:r}))}};function Do(){}Do.prototype={startIndex:null,dragStart:function(e){var o=e.oldDraggableIndex;this.startIndex=o},onSpill:function(e){var o=e.dragEl,r=e.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var n=Me(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(o,n):this.sortable.el.appendChild(o),this.sortable.animateAll(),r&&r.animateAll()},drop:gn};ce(Do,{pluginName:"revertOnSpill"});function Po(){}Po.prototype={onSpill:function(e){var o=e.dragEl,r=e.putSortable,n=r||this.sortable;n.captureAnimationState(),o.parentNode&&o.parentNode.removeChild(o),n.animateAll()},drop:gn};ce(Po,{pluginName:"removeOnSpill"});g.mount(new ba);g.mount(Po,Do);const va=t=>{const e=t.item;let o=Array.prototype.slice.call(e.parentNode.childNodes);return o=o.filter(r=>r.nodeType!=Node.ELEMENT_NODE||!r.classList.contains("sortable-fallback")),o},Ea=(t,e,o,r,n,i)=>{const s=t.item.parentNode;for(const E of o)s.appendChild(E);if(t.oldIndex==t.newIndex)return;const l=r.getArray(),d=t.item.querySelector("eox-layercontrol-layer").layer.get(n),p=l.find(E=>E.get(n)===d),c=i.dataset.layer,b=l.find(E=>E.get(n)==c);let w,f;for(w=0;w<l.length;w++)if(l[w]==p){r.removeAt(w);break}for(f=0;f<l.length;f++)if(l[f]===b){w>f?r.insertAt(f,p):r.insertAt(f+1,p);break}e.requestUpdate()};function wa(t,e,o,r){let n=[],i=null;t._sortable=g.create(t,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>n=va(a),onMove:a=>{i=a.related},onEnd:a=>Ea(a,r,n,e,o,i)})}function Sa(t,e,o,r){const n=t.getArray();let i=!1;n.forEach(a=>{const s=a.ol_uid;a.get(e)||(a.set(e,s),i=!0),a.get(o)||(a.set(o,`layer ${s}`),i=!0),i&&r.requestUpdate()})}function Io(t,e,o){let r=[];const n=(i,a,s)=>{r=[...r,...i.filter(d=>d.get(a)===s)];const l=i.filter(d=>d.getLayers);return l.length>0&&l.forEach(d=>n(d.getLayers().getArray(),a,s)),r};return n(t,e,o),r}function xa(t,e,o){if(!t||!e)return!1;if(!yn(t,o))return!0;const r=t.get("minZoom"),n=t.get("maxZoom"),i=e.getView().getZoom();return i>r&&i<n}function yn(t,e){const o=t.get("minZoom"),r=t.get("maxZoom");return!!(e&&(o!==-1/0||r!==1/0))}function Ca(t,e){var n,i,a;return!t||!e?void 0:t.getLayers?"group":((a=(n=e.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:n.ol_uid)==null?void 0:a.includes(t.getSource?(i=t.getSource())==null?void 0:i.ol_uid:void 0))?"draw":t.declutter_!==void 0?"vector":"raster"}function bn(t,e){var r;let o={};for(const n in t){const i=t[n].type;if(i&&i!=="object")o[n]=i==="number"?Number(e[n]):e[n];else if(typeof t[n]=="object"&&((r=t[n])!=null&&r.properties)){const a=bn(t[n].properties,e);Object.keys(a).length>0&&(o[n]=a)}}return o}function Ta(t,e){var i;if(!e||!t.getSource().getTileUrlFunction())return null;const o=new URL(t.getSource().getTileUrlFunction()([0,0,0])),r=Object.fromEntries(o.searchParams.entries()),n=bn(((i=e.schema)==null?void 0:i.properties)||e.schema,r);return Object.keys(n).length?n:null}const _a=(t,e)=>t==null?void 0:t.filter(o=>["remove","sort"].filter(r=>e!=null&&e.get("layerControlDisable")?r!=="sort":!0).includes(o)),Aa=(t,e)=>t==null?void 0:t.filter(o=>{let r=!0;return["remove","sort"].includes(o)&&(r=!1),o==="info"&&(r=e.get("description")),o==="config"&&(r=e.get("layerConfig")),r}),$a=(t,e)=>y`
  <button slot="${t}-icon" class="icon">${e?t:le}</button>
`,Ra=t=>y`
  <button
    class="remove-icon icon"
    @click=${()=>{const{layer:e}=t;e==null||e.set("layerControlOptional",!0),e==null||e.setVisible(!1),t.dispatchEvent(new CustomEvent("changed",{detail:e,bubbles:!0}))}}
  >
    ${t.unstyled?"x":le}
  </button>
`,Oa=t=>y`
  <span class="button sort-icon icon drag-handle">
    ${t?"═":le}
  </span>
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vn=Xn(class extends zn{constructor(t){if(super(t),t.type!==_e.PROPERTY&&t.type!==_e.ATTRIBUTE&&t.type!==_e.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!jn(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===yt||e===le)return e;const o=t.element,r=t.name;if(t.type===_e.PROPERTY){if(e===o[r])return yt}else if(t.type===_e.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(r))return yt}else if(t.type===_e.ATTRIBUTE&&o.getAttribute(r)===e+"")return yt;return qn(t),e}}),Da=(t,e,o)=>{let r=e;return o.layer.getSource().getTileUrlFunction()&&(r||(r=o.layer.getSource().getTileUrlFunction()),o.layer.getSource().setTileUrlFunction((...n)=>zi(r(...n),t)),o.layer.getSource().setKey(new Date)),r};var dt,ut,ct,Mt,wn,Ht,Vt;class En extends pe{constructor(){super();C(this,Mt);C(this,dt,{});C(this,ut,null);C(this,ct,void 0);C(this,Ht,"");C(this,Vt,"");this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){ke(this,ut,Ta(this.layer,this.layerConfig));const o={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return y`
      <style>
        ${$(this,Ht)}
        ${!this.unstyled&&$(this,Vt)}
      </style>
      ${ee(this.layerConfig,()=>y`
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .startVals=${$(this,ut)}
            .options=${o}
            @change=${M(this,Mt,wn)}
          ></eox-jsonform>
        `)}
    `}}dt=new WeakMap,ut=new WeakMap,ct=new WeakMap,Mt=new WeakSet,wn=function(o){ke(this,dt,o.detail),ke(this,ct,Da($(this,dt),$(this,ct),this)),this.requestUpdate()},Ht=new WeakMap,Vt=new WeakMap,I(En,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1}});customElements.define("eox-layercontrol-layerconfig",En);var pt,Bt,Ut;class Sn extends pe{constructor(){super();C(this,pt,o=>this.selectedTab===o&&"highlighted");C(this,Bt,`
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
  `);C(this,Ut,`
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
        ${$(this,Bt)}
        ${!this.unstyled&&$(this,Ut)}
      </style>
      <div class="tabbed">
        <!-- Navigation for tabs and actions -->
        ${ee(n,()=>y`
            <nav>
              <div>
                <!-- Labels for tabs -->
                ${St(o,(i,a)=>y`
                      <label
                        class=${$(this,pt).call(this,a)}
                        @click=${()=>this.selectedTab=a}
                      >
                        <!-- Customizable icon for each tab -->
                        <slot name=${`${i}-icon`}>${i}</slot>
                      </label>
                    `)}
              </div>
              <div>
                <!-- Icons for actions -->
                ${St(r,i=>y`
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
          ${St(o,(i,a)=>y`
              <div class="tab ${$(this,pt).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${i}-content`}>${i}</slot>
              </div>
            `)}
        </figure>
      </div>
    `}}pt=new WeakMap,Bt=new WeakMap,Ut=new WeakMap,I(Sn,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-tabs",Sn);var Ft,Zt;class xn extends pe{constructor(){super();I(this,"_removeButton",()=>Ra(this));I(this,"_sortButton",()=>Oa(this.unstyled));I(this,"_button",o=>$a(o,this.unstyled));C(this,Ft,"");C(this,Zt,`
    ${Gn}  
    ${Wn}
    ${jr}
    ${Jn}
    .drag-handle {
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
    eox-layercontrol-tabs button.icon,
    eox-layercontrol-tabs .button.icon {
      display: flex;
      justify-content: center;
    }
    eox-layercontrol-tabs button.icon::before,
    eox-layercontrol-tabs .button.icon::before {
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
    [slot=sort-icon] .button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edrag-horizontal-variant%3C/title%3E%3Cpath d='M21 11H3V9H21V11M21 13H3V15H21V13Z' /%3E%3C/svg%3E");
    }
    [slot=info-content],
    [slot=opacity-content] {
      padding: 12px 6px;
    }
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var l;const o=_a(this.tools,this.layer),r=Aa(this.tools,this.layer),n=this[`_${o==null?void 0:o[0]}Button`]?this[`_${o==null?void 0:o[0]}Button`]():le,i=((l=this.tools)==null?void 0:l.length)===1?`${this.tools[0]}-icon`:"",a=o==null?void 0:o.length,s=r==null?void 0:r.length;return y`
      <style>
        ${$(this,Ft)}
        ${!this.unstyled&&$(this,Zt)}
      </style>
      ${ee(a+s>0,()=>y`
          ${ee(a===1&&s===0,()=>y`
              <div class="single-action-container">
                <div class="single-action">${n}</div>
              </div>
            `,()=>{var d;return y`
              <details
                class="tools"
                open=${this.layer.get("layerControlToolsExpand")||le}
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
                  ${St(r,p=>this._button(p))}

                  <div slot="info-content">
                    ${Zn(this.layer.get("description"))}
                  </div>
                  <div slot="opacity-content">
                    <!-- Input for opacity -->
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value=${vn((d=this.layer)==null?void 0:d.getOpacity())}
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
                  <div slot="remove-icon">${this._removeButton()}</div>
                  <div slot="sort-icon">${this._sortButton()}</div>
                </eox-layercontrol-tabs>
              </details>
            `})}
        `)}
    `}}Ft=new WeakMap,Zt=new WeakMap,I(xn,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer-tools",xn);const Pa=t=>{const e=()=>{const o=xa(t.layer,t.map,t.showLayerZoomState);let r=!1;!o&&t.currLayerVisibilityBasedOnZoom?(t.currLayerVisibilityBasedOnZoom=!1,r=!0):o&&!t.currLayerVisibilityBasedOnZoom&&(t.currLayerVisibilityBasedOnZoom=!0,r=!0),r&&(t.requestUpdate(),t.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};yn(t.layer,t.showLayerZoomState)&&(e(),t.map.getView().on("change:resolution",()=>e()))},Ia=(t,e)=>{const o=e.layer;o.setVisible(t.target.checked),t.target.checked&&o.get("layerControlExclusive")&&e.parentNode.parentNode.querySelectorAll("li > eox-layercontrol-layer").forEach(n=>{var i;n.layer!==o&&((i=n.layer)!=null&&i.get("layerControlExclusive"))&&(n.layer.setVisible(!1),n.requestUpdate())}),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.requestUpdate()};var Ie,$t,kt,Tn,Yt,Xt;class Cn extends pe{constructor(){super();C(this,Ie);C(this,kt);I(this,"currLayerVisibilityBasedOnZoom",!0);C(this,Yt,"");C(this,Xt,`
    ${jr}
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
  `);this.layer=null,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){Pa(this)}render(){var l;const o=this.layer.getVisible(),r=o?"visible":"",n=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",i=M(this,Ie,$t).call(this,"layerControlDisable")?"disabled":"",a=M(this,Ie,$t).call(this,"layerControlExclusive")?"radio":"checkbox",s=((l=this.tools)==null?void 0:l.length)>0;return y`
      <style>
        ${$(this,Yt)}
        ${!this.unstyled&&$(this,Xt)}
      </style>
      ${ee(this.layer,()=>y`
          <!-- Render the layer -->
          <div class="layer ${r} ${n}">
            <label class="drag-handle ${i}">
              <!-- Input element for layer visibility -->
              <input
                type=${a}
                .checked=${vn(o)}
                @click=${M(this,kt,Tn)}
              />

              <!-- Layer title -->
              <span class="title">${M(this,Ie,$t).call(this,this.titleProperty)}</span>
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
    `}}Ie=new WeakSet,$t=function(o){var r;return(r=this.layer)==null?void 0:r.get(o)},kt=new WeakSet,Tn=function(o){Ia(o,this)},Yt=new WeakMap,Xt=new WeakMap,I(Cn,"properties",{layer:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer",Cn);var zt,jt;class _n extends pe{constructor(){super();C(this,zt,"");C(this,jt,`
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
        ${$(this,zt)}
        ${!this.unstyled&&$(this,jt)}
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
    `}}zt=new WeakMap,jt=new WeakMap,I(_n,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer-group",_n);const La=t=>{const{layers:e,idProperty:o,titleProperty:r,renderRoot:n}=t;if(e){const i=n.querySelector("ul");Sa(e,o,r,t),wa(i,e,o,t)}},Na=t=>{const{layers:e}=t,o=kn(()=>{t.requestUpdate(),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),r=()=>o();e&&(e.hasListener("change:length")&&(e==null||e.un("change:length",r)),e.on("change:length",r))};var qt,Gt;class An extends pe{constructor(){super();C(this,qt,"");C(this,Gt,`
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
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1}firstUpdated(){La(this)}updated(){Na(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var r,n;const o=(n=(r=this.layers)==null?void 0:r.getArray())==null?void 0:n.filter(i=>!i.get("layerControlHide")&&!i.get("layerControlOptional")).reverse();return y`
      <style>
        ${$(this,qt)}
        ${!this.unstyled&&$(this,Gt)}
      </style>
      <ul>
        ${ee(this.layers,()=>y`
            ${Yn(o,i=>i,i=>y`
                <li
                  data-layer="${i.get(this.idProperty)}"
                  data-type="${Ca(i,this.map)}"
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
    `}}qt=new WeakMap,Gt=new WeakMap,I(An,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer-list",An);const Ma=t=>{const e=t.querySelector("select[name=optional]"),o=e?e.value:null,r=Io(t.layers.getArray(),"layerControlOptional",!0).find(n=>(n.get(t.idProperty)||n.ol_uid)===o);r==null||r.set("layerControlOptional",!1),r==null||r.setVisible(!0),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),t.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(n=>n.requestUpdate()),t.requestUpdate()};var Wt,Rn;class $n extends pe{constructor(){super();C(this,Wt);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=Io(this.layers.getArray(),"layerControlOptional",!0);return y`
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
      <button @click="${M(this,Wt,Rn)}">add</button>
    `}}Wt=new WeakSet,Rn=function(){Ma(this)},I($n,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",$n);const Ha=(t,e)=>{e.jsonInput=t.target.value,e.requestUpdate()},jo=t=>{const e=JSON.parse(`{"data":${tn(t.jsonInput)}}`);Array.isArray(e.data)?e.data.forEach(o=>{t.eoxMap.addOrUpdateLayer(o)}):t.eoxMap.addOrUpdateLayer(e.data),t.jsonInput=null,t.requestUpdate()},Va=(t,e)=>{e.urlInput=t.target.value,e.requestUpdate()};async function Ba(t){const e=t.urlInput;if(t.wmsCapabilities=null,t.searchLoad=!0,t.requestUpdate(),!e)return!1;if(Ro(e)==="XYZ")return{Name:e};try{const o=await ki(e);t.wmsCapabilities=o}catch{}finally{t.searchLoad=!1,t.requestUpdate()}return!1}const Ua=(t,e)=>{const{Name:o}=t,r=Ro(e.urlInput)||"XYZ",n={type:"Tile",properties:{id:o,title:o},source:{type:r,url:e.urlInput,params:{LAYERS:o}}};e.jsonInput=JSON.stringify(n)},Fa=(t,e)=>{e.open=t||null,e.urlInput=null,e.jsonInput=null,e.wmsCapabilities=null,e.requestUpdate()};var Jt,Dn,Kt,Pn,ht,_o,Qt,In,eo,Ln,Le,Rt,to,oo;class On extends pe{constructor(){super();C(this,Jt);C(this,Kt);C(this,ht);C(this,Qt);C(this,eo);C(this,Le);I(this,"urlInput",null);I(this,"jsonInput",null);I(this,"open",null);I(this,"searchLoad",!1);I(this,"wmsCapabilities",null);C(this,to,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
  `);C(this,oo,`
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
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=this.open?"open":"close",r=this.open==="url",n=this.open==="json",i=!Yi(this.urlInput)||this.searchLoad?!0:le;return y`
      <style>
        ${$(this,to)}
        ${!this.unstyled&&$(this,oo)}
      </style>
      <div class="eox-add-layer-main">
        <div class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <ul class="eox-add-layer-tab ${o}">
            <li
              @click=${()=>M(this,Le,Rt).call(this,"url")}
              class="${r?"active":""}"
            >
              URL
            </li>
            <li
              @click=${()=>M(this,Le,Rt).call(this,"json")}
              class="${n?"active":""}"
            >
              JSON
            </li>
          </ul>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon icon"
            @click=${()=>M(this,Le,Rt).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":""}
          </button>
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
                  @input=${M(this,Jt,Dn)}
                >
                </input>
                <!-- Search button for URL -->
                <button 
                  class="search-icon" 
                  disabled=${i} 
                  @click=${M(this,Kt,Pn)}
                >
                  ${this.unstyled?"Search":""}
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
                                @click=${()=>M(this,ht,_o).call(this,a)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:le}
            `:y`
                <!-- Textarea for JSON input -->
                <textarea
                  class="add-layer-input"
                  placeholder="Please put a valid eox-map layer JSON."
                  @input=${M(this,eo,Ln)}
                  .value=${this.jsonInput}
                ></textarea>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer"
                  disabled=${Xi(this.jsonInput)?le:!0}
                  @click=${M(this,Qt,In)}
                >
                  ${this.unstyled?"Add JSON":""}
                </button>
              `}
        </div>
      </div>
    `}}Jt=new WeakSet,Dn=function(o){Va(o,this)},Kt=new WeakSet,Pn=async function(){const o=await Ba(this);o&&M(this,ht,_o).call(this,o)},ht=new WeakSet,_o=function(o){Ua(o,this),jo(this)},Qt=new WeakSet,In=function(){jo(this)},eo=new WeakSet,Ln=function(o){Ha(o,this)},Le=new WeakSet,Rt=function(o){Fa(o,this)},to=new WeakMap,oo=new WeakMap,I(On,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",On);const Za=(t,e)=>{if(e.requestUpdate(),t.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const o=e.renderRoot.querySelector("eox-layercontrol-optional-list");o==null||o.requestUpdate()}},ka=t=>{const e=t.for;return document.querySelector(e)},Ya=t=>{const e=document.querySelector(t.for);e&&e.map!==t.map&&(t.map=e.map)};var Ne,ro,Mn,no;class Nn extends pe{constructor(){super();C(this,ro);C(this,Ne,void 0);C(this,no,"* { font-family: Roboto, sans-serif; }");this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride=""}updated(){Ya(this)}firstUpdated(){ke(this,Ne,ka(this))}render(){var n,i,a;const o=(n=this.map)==null?void 0:n.getLayers().getArray(),r=o&&((i=Io(o,"layerControlOptional",!0))==null?void 0:i.length)>0;return y`
      <style>
        ${!this.unstyled&&$(this,no)}
        ${this.styleOverride}
      </style>

      <!-- Conditional rendering of add layers component -->
      ${ee(this.addExternalLayers&&((a=$(this,Ne))==null?void 0:a.addOrUpdateLayer),()=>y`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${$(this,Ne)}
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
            @changed=${M(this,ro,Mn)}
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
    `}}Ne=new WeakMap,ro=new WeakSet,Mn=function(o){Za(o,this)},no=new WeakMap,I(Nn,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String}});customElements.define("eox-layercontrol",Nn);const qo="https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",Hn=t=>`//s2maps-tiles.eu/wmts/1.0.0/${t}/default/g/{z}/{y}/{x}.jpg`,Lo=t=>({type:"Tile",properties:{title:`EOxCloudless ${t}`},source:{type:"XYZ",url:Hn(`s2cloudless-${t}_3857`)}}),ne="width: 400px; height: 300px; margin-left: 7px;",Ao={wind:{type:"Tile",properties:{id:"WIND",title:"WIND"},source:{type:"TileWMS",url:qo,params:{LAYERS:"AWS_VIS_WIND_V_10M"}}},no2:{type:"Tile",properties:{id:"NO2",title:"NO2"},source:{type:"TileWMS",url:qo,params:{LAYERS:"AWS_NO2-VISUALISATION"}}}},so={type:"Vector",properties:{title:"Regions",id:"regions",description:"Ecological regions of the earth."},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"}},Xa={type:"WebGLTile",properties:{id:"s2",layerControlExclusive:!0,title:"s2"},style:{variables:{red:1,green:2,blue:3,redMax:3e3,greenMax:3e3,blueMax:3e3},color:["array",["/",["band",["var","red"]],["var","redMax"]],["/",["band",["var","green"]],["var","greenMax"]],["/",["band",["var","blue"]],["var","blueMax"]],1],gamma:1.1},source:{type:"GeoTIFF",normalize:!1,sources:[{url:"https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif"}]}},za={type:"Tile",properties:{id:"osm",title:"Open Street Map",layerControlExclusive:!0},visible:!1,opacity:.5,source:{type:"OSM"}},He={type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:Hn("terrain-light_3857")}},ja=Lo("2019"),qa=Lo("2020"),No=Lo("2021"),Mo=[{type:"Group",properties:{id:"group2",title:"Data Layers",layerControlExpand:!0,description:"# Hello world"},layers:[Ao.wind,Ao.no2,so]},{type:"Group",properties:{id:"group1",title:"Background Layers"},layers:[Xa,za]}],Ga={type:"Tile",properties:{id:"customId",title:"Tile XYZ",layerControlToolsExpand:!0,layerConfig:{schema:{type:"object",properties:{vminmax:{type:"object",properties:{vmin:{type:"number",minimum:0,maximum:10,format:"range"},vmax:{type:"number",minimum:0,maximum:10,format:"range"}},format:"minmax"},cbar:{type:"string",enum:["rain","temperature"]}}}}},source:{type:"XYZ",url:"https://reccap2.api.dev.brockmann-consult.de/api/tiles/cop28~reccap2-9x108x139-0.0.1.zarr/deforested_biomass/{z}/{y}/{x}?crs=EPSG:3857&time=2018-01-01T00:00:00Z&vmin=0&vmax=3&cbar=rain"}},Wa={args:{idProperty:"id",titleProperty:"title",unstyled:!1},render:t=>y`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${t.idProperty}
        .titleProperty=${t.titleProperty}
        .unstyled=${t.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      <eox-map
        .style=${ne}
        .zoom=${3}
        .layers=${Mo}
      ></eox-map>
    </div>
  `},Go=(t,e=!0)=>({...t,properties:{...t.properties,layerControlExclusive:!0},visible:e}),Ja={args:{},render:()=>y`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#exclusive"></eox-layercontrol>
      <eox-map
        id="exclusive"
        .style=${ne}
        .layers=${[Go(He),Go(No,!1)]}
      >
      </eox-map>
    </div>
  `},wo=t=>({...t,properties:{...t.properties,layerControlOptional:!0},visible:!1}),Ka={args:{},render:()=>y`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#optional"></eox-layercontrol>
      <eox-map
        id="optional"
        .style=${ne}
        .layers=${[wo(No),wo(qa),wo(ja),He]}
      >
      </eox-map>
    </div>
  `},Qa={args:{},render:()=>y`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#expanded"></eox-layercontrol>
      <eox-map
        id="expanded"
        .style=${ne}
        .layers=${[He,{type:"Group",properties:{title:"Layer group",layerControlExpand:!0},layers:[{...No,visible:!1}]}]}
      >
      </eox-map>
    </div>
  `},es={args:{},render:()=>y`
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
      .style=${ne}
      .layers=${[so,He]}
    >
    </eox-map>
  `},ts={args:{},render:()=>y`
    <eox-layercontrol
      .tools=${["config"]}
      for="eox-map#config"
    ></eox-layercontrol>
    <hr />
    <eox-map
      .center=${[-7e6,-5e5]}
      .zoom=${4}
      id="config"
      .style=${ne}
      .layers=${[Ga,He]}
    >
    </eox-map>
  `},os=t=>({...t,properties:{...t.properties,layerControlHide:!0}}),rs={args:{},render:()=>y`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#hidden"></eox-layercontrol>
      <eox-map
        id="hidden"
        .style=${ne}
        .layers=${[os(so),He]}
      >
      </eox-map>
    </div>
  `},ns={args:{idProperty:"id",titleProperty:"title",unstyled:!1,addExternalLayers:!0},render:t=>y`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${t.idProperty}
        .titleProperty=${t.titleProperty}
        .unstyled=${t.unstyled}
        .addExternalLayers=${t.addExternalLayers}
        for="eox-map"
      ></eox-layercontrol>
      <eox-map
        .style=${ne}
        .zoom=${3}
        .layers=${Mo}
      ></eox-map>
    </div>
  `},Wo=(t,e)=>({...t,properties:{...t.properties,layerControlExclusive:!0},...e}),is={args:{showLayerZoomState:!0},render:t=>y`
    <div style="display: flex">
      <eox-layercontrol
        .showLayerZoomState=${t.showLayerZoomState}
        for="eox-map#zoomstate"
      ></eox-layercontrol>
      <eox-map
        id="zoomstate"
        .style=${ne}
        .zoom=${1}
        .layers=${[Wo(so,{minZoom:2}),Wo(Ao.wind,{maxZoom:9})]}
      >
      </eox-map>
    </div>
  `},as={args:{unstyled:!0},render:t=>y`
    <div style="display: flex">
      <eox-layercontrol
        .unstyled=${t.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      <eox-map
        .style=${ne}
        .zoom=${3}
        .layers=${Mo}
      ></eox-map>
    </div>
  `},Ts={title:"Elements/eox-layercontrol",tags:["autodocs"],component:"eox-layercontrol",parameters:{componentSubtitle:"Manage and configure OpenLayers map layers",layout:"centered"}},Ye=Wa,Xe=Ja,ze=Ka,je=Qa,qe=es,Ge=ts,We=rs,Je=ns,Ke=is,Qe=as;var Jo,Ko,Qo,er,tr;Ye.parameters={...Ye.parameters,docs:{...(Jo=Ye.parameters)==null?void 0:Jo.docs,source:{originalSource:"PrimaryStory",...(Qo=(Ko=Ye.parameters)==null?void 0:Ko.docs)==null?void 0:Qo.source},description:{story:"Basic layercontrol setup.",...(tr=(er=Ye.parameters)==null?void 0:er.docs)==null?void 0:tr.description}}};var or,rr,nr,ir,ar;Xe.parameters={...Xe.parameters,docs:{...(or=Xe.parameters)==null?void 0:or.docs,source:{originalSource:"ExclusiveLayersStory",...(nr=(rr=Xe.parameters)==null?void 0:rr.docs)==null?void 0:nr.source},description:{story:"By adding the `layerControlExclusive` property to map layers,\nonly one of them at a time can be visualized.",...(ar=(ir=Xe.parameters)==null?void 0:ir.docs)==null?void 0:ar.description}}};var sr,lr,dr,ur,cr;ze.parameters={...ze.parameters,docs:{...(sr=ze.parameters)==null?void 0:sr.docs,source:{originalSource:"OptionalLayersStory",...(dr=(lr=ze.parameters)==null?void 0:lr.docs)==null?void 0:dr.source},description:{story:`By adding the \`layerControlOptional\` property to map layers,
they are not initially rendered in the layer list, but in a
selection interface. They can be added to the layer list manually.
Removing a layer puts it back into the optional list.`,...(cr=(ur=ze.parameters)==null?void 0:ur.docs)==null?void 0:cr.description}}};var pr,hr,fr,mr,gr;je.parameters={...je.parameters,docs:{...(pr=je.parameters)==null?void 0:pr.docs,source:{originalSource:"ExpandedLayersStory",...(fr=(hr=je.parameters)==null?void 0:hr.docs)==null?void 0:fr.source},description:{story:"By adding the `layerControlExpand` property to map layers,\nthey render in the layer control as opened.",...(gr=(mr=je.parameters)==null?void 0:mr.docs)==null?void 0:gr.description}}};var yr,br,vr,Er,wr;qe.parameters={...qe.parameters,docs:{...(yr=qe.parameters)==null?void 0:yr.docs,source:{originalSource:"ToolsStory",...(vr=(br=qe.parameters)==null?void 0:br.docs)==null?void 0:vr.source},description:{story:`The layer control accepts a "tools" array, which enable
extra functionalities for layers`,...(wr=(Er=qe.parameters)==null?void 0:Er.docs)==null?void 0:wr.description}}};var Sr,xr,Cr,Tr,_r;Ge.parameters={...Ge.parameters,docs:{...(Sr=Ge.parameters)==null?void 0:Sr.docs,source:{originalSource:"LayerConfigStory",...(Cr=(xr=Ge.parameters)==null?void 0:xr.docs)==null?void 0:Cr.source},description:{story:`The "config" tool reads settings passed via the "layerConfig" property,
e.g. rendering a from from a provided JSON schema that allows updating the
source url parameters.`,...(_r=(Tr=Ge.parameters)==null?void 0:Tr.docs)==null?void 0:_r.description}}};var Ar,$r,Rr,Or,Dr;We.parameters={...We.parameters,docs:{...(Ar=We.parameters)==null?void 0:Ar.docs,source:{originalSource:"HiddenLayersStory",...(Rr=($r=We.parameters)==null?void 0:$r.docs)==null?void 0:Rr.source},description:{story:"By adding the `layerControlHide` property to map layers,\nthey aren't displayed in the layer control at all (but may\nbe still rendered on the map).",...(Dr=(Or=We.parameters)==null?void 0:Or.docs)==null?void 0:Dr.description}}};var Pr,Ir,Lr,Nr,Mr;Je.parameters={...Je.parameters,docs:{...(Pr=Je.parameters)==null?void 0:Pr.docs,source:{originalSource:"addExternalLayerStory",...(Lr=(Ir=Je.parameters)==null?void 0:Ir.docs)==null?void 0:Lr.source},description:{story:"Defining the configuration for adding an external layer like WMS/XYZ or import JSON.",...(Mr=(Nr=Je.parameters)==null?void 0:Nr.docs)==null?void 0:Mr.description}}};var Hr,Vr,Br,Ur,Fr;Ke.parameters={...Ke.parameters,docs:{...(Hr=Ke.parameters)==null?void 0:Hr.docs,source:{originalSource:"layerZoomStateStory",...(Br=(Vr=Ke.parameters)==null?void 0:Vr.docs)==null?void 0:Br.source},description:{story:"Zoom layer state based on `minZoom` and `maxZoom`.\nThe color change state only visible when `showLayerZoomState` is set inside layer properties.",...(Fr=(Ur=Ke.parameters)==null?void 0:Ur.docs)==null?void 0:Fr.description}}};var Zr,kr,Yr,Xr,zr;Qe.parameters={...Qe.parameters,docs:{...(Zr=Qe.parameters)==null?void 0:Zr.docs,source:{originalSource:"unstyledStory",...(Yr=(kr=Qe.parameters)==null?void 0:kr.docs)==null?void 0:Yr.source},description:{story:"Unstyled version of the Element",...(zr=(Xr=Qe.parameters)==null?void 0:Xr.docs)==null?void 0:zr.description}}};const _s=["Primary","ExclusiveLayers","OptionalLayers","ExpandedLayers","Tools","LayerConfig","HiddenLayers","AddExternalLayer","LayerZoomState","Unstyled"];export{Je as AddExternalLayer,Xe as ExclusiveLayers,je as ExpandedLayers,We as HiddenLayers,Ge as LayerConfig,Ke as LayerZoomState,ze as OptionalLayers,Ye as Primary,qe as Tools,Qe as Unstyled,_s as __namedExportsOrder,Ts as default};
