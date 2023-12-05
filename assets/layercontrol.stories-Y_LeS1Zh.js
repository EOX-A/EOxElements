var Qt=Object.freeze,eo=Object.defineProperty;var Fr=(o,e,t)=>e in o?eo(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var V=(o,e,t)=>(Fr(o,typeof e!="symbol"?e+"":e,t),t),Mt=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)};var _=(o,e,t)=>(Mt(o,e,"read from private field"),t?t.call(o):e.get(o)),O=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)},Je=(o,e,t,r)=>(Mt(o,e,"write to private field"),r?r.call(o,t):e.set(o,t),t);var to=(o,e,t)=>(Mt(o,e,"access private method"),t);var Vt=(o,e)=>Qt(eo(o,"raw",{value:Qt(e||o.slice())}));import{w as Ke,T as ge,s as ae,x as g}from"./lit-element-Qm8PRmVu.js";import"./main-zXmMRlXR.js";import{n as K,o as it,a as Wr}from"./unsafe-html-ZhFXPF0T.js";import{_ as Ur,c as qr}from"./index-HR78oL6N.js";import{e as Gr,i as Jr,t as he}from"./directive-xgBC_cM0.js";import{f as Kr,m as Qr}from"./directive-helpers-k6EzVOeb.js";import"./main-X_IRTVp1.js";import{b as en}from"./button-KPw86qfe.js";import{r as tn,c as mr,s as on}from"./slider-MCblB636.js";import"./state-ncEgtE_C.js";import"./index-EySAwWXj.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-unmrmfYJ.js";import"../sb-preview/runtime.js";import"./toolcool-range-slider.min-8Vg52R7B.js";/**!
 * Sortable 1.15.1
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function oo(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})),t.push.apply(t,r)}return t}function U(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?oo(Object(t),!0).forEach(function(r){rn(o,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):oo(Object(t)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(t,r))})}return o}function at(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?at=function(e){return typeof e}:at=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},at(o)}function rn(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function Q(){return Q=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])}return o},Q.apply(this,arguments)}function nn(o,e){if(o==null)return{};var t={},r=Object.keys(o),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(t[n]=o[n]);return t}function an(o,e){if(o==null)return{};var t=nn(o,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(o,r)&&(t[r]=o[r])}return t}var sn="1.15.1";function J(o){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(o)}var ee=J(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Ue=J(/Edge/i),ro=J(/firefox/i),Be=J(/safari/i)&&!J(/chrome/i)&&!J(/android/i),gr=J(/iP(ad|od|hone)/i),vr=J(/chrome/i)&&J(/android/i),br={capture:!1,passive:!1};function w(o,e,t){o.addEventListener(e,t,!ee&&br)}function x(o,e,t){o.removeEventListener(e,t,!ee&&br)}function ct(o,e){if(e){if(e[0]===">"&&(e=e.substring(1)),o)try{if(o.matches)return o.matches(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e)}catch{return!1}return!1}}function ln(o){return o.host&&o!==document&&o.host.nodeType?o.host:o.parentNode}function F(o,e,t,r){if(o){t=t||document;do{if(e!=null&&(e[0]===">"?o.parentNode===t&&ct(o,e):ct(o,e))||r&&o===t)return o;if(o===t)break}while(o=ln(o))}return null}var no=/\s+/g;function R(o,e,t){if(o&&e)if(o.classList)o.classList[t?"add":"remove"](e);else{var r=(" "+o.className+" ").replace(no," ").replace(" "+e+" "," ");o.className=(r+(t?" "+e:"")).replace(no," ")}}function h(o,e,t){var r=o&&o.style;if(r){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(o,""):o.currentStyle&&(t=o.currentStyle),e===void 0?t:t[e];!(e in r)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),r[e]=t+(typeof t=="string"?"":"px")}}function be(o,e){var t="";if(typeof o=="string")t=o;else do{var r=h(o,"transform");r&&r!=="none"&&(t=r+" "+t)}while(!e&&(o=o.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(t)}function xr(o,e,t){if(o){var r=o.getElementsByTagName(e),n=0,i=r.length;if(t)for(;n<i;n++)t(r[n],n);return r}return[]}function W(){var o=document.scrollingElement;return o||document.documentElement}function D(o,e,t,r,n){if(!(!o.getBoundingClientRect&&o!==window)){var i,a,s,l,d,u,c;if(o!==window&&o.parentNode&&o!==W()?(i=o.getBoundingClientRect(),a=i.top,s=i.left,l=i.bottom,d=i.right,u=i.height,c=i.width):(a=0,s=0,l=window.innerHeight,d=window.innerWidth,u=window.innerHeight,c=window.innerWidth),(e||t)&&o!==window&&(n=n||o.parentNode,!ee))do if(n&&n.getBoundingClientRect&&(h(n,"transform")!=="none"||t&&h(n,"position")!=="static")){var m=n.getBoundingClientRect();a-=m.top+parseInt(h(n,"border-top-width")),s-=m.left+parseInt(h(n,"border-left-width")),l=a+i.height,d=s+i.width;break}while(n=n.parentNode);if(r&&o!==window){var b=be(n||o),v=b&&b.a,E=b&&b.d;b&&(a/=E,s/=v,c/=v,u/=E,l=a+u,d=s+c)}return{top:a,left:s,bottom:l,right:d,width:c,height:u}}}function wr(o){var e=D(o),t=parseInt(h(o,"padding-left")),r=parseInt(h(o,"padding-top")),n=parseInt(h(o,"padding-right")),i=parseInt(h(o,"padding-bottom"));return e.top+=r+parseInt(h(o,"border-top-width")),e.left+=t+parseInt(h(o,"border-left-width")),e.width=o.clientWidth-t-n,e.height=o.clientHeight-r-i,e.bottom=e.top+e.height,e.right=e.left+e.width,e}function io(o,e,t){for(var r=ie(o,!0),n=D(o)[e];r;){var i=D(r)[t],a=void 0;if(t==="top"||t==="left"?a=n>=i:a=n<=i,!a)return r;if(r===W())break;r=ie(r,!1)}return!1}function we(o,e,t,r){for(var n=0,i=0,a=o.children;i<a.length;){if(a[i].style.display!=="none"&&a[i]!==f.ghost&&(r||a[i]!==f.dragged)&&F(a[i],t.draggable,o,!1)){if(n===e)return a[i];n++}i++}return null}function qt(o,e){for(var t=o.lastElementChild;t&&(t===f.ghost||h(t,"display")==="none"||e&&!ct(t,e));)t=t.previousElementSibling;return t||null}function Y(o,e){var t=0;if(!o||!o.parentNode)return-1;for(;o=o.previousElementSibling;)o.nodeName.toUpperCase()!=="TEMPLATE"&&o!==f.clone&&(!e||ct(o,e))&&t++;return t}function ao(o){var e=0,t=0,r=W();if(o)do{var n=be(o),i=n.a,a=n.d;e+=o.scrollLeft*i,t+=o.scrollTop*a}while(o!==r&&(o=o.parentNode));return[e,t]}function dn(o,e){for(var t in o)if(o.hasOwnProperty(t)){for(var r in e)if(e.hasOwnProperty(r)&&e[r]===o[t][r])return Number(t)}return-1}function ie(o,e){if(!o||!o.getBoundingClientRect)return W();var t=o,r=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var n=h(t);if(t.clientWidth<t.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return W();if(r||e)return t;r=!0}}while(t=t.parentNode);return W()}function pn(o,e){if(o&&e)for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o}function It(o,e){return Math.round(o.top)===Math.round(e.top)&&Math.round(o.left)===Math.round(e.left)&&Math.round(o.height)===Math.round(e.height)&&Math.round(o.width)===Math.round(e.width)}var Ye;function Er(o,e){return function(){if(!Ye){var t=arguments,r=this;t.length===1?o.call(r,t[0]):o.apply(r,t),Ye=setTimeout(function(){Ye=void 0},e)}}}function cn(){clearTimeout(Ye),Ye=void 0}function Sr(o,e,t){o.scrollLeft+=e,o.scrollTop+=t}function Cr(o){var e=window.Polymer,t=window.jQuery||window.Zepto;return e&&e.dom?e.dom(o).cloneNode(!0):t?t(o).clone(!0)[0]:o.cloneNode(!0)}var B="Sortable"+new Date().getTime();function un(){var o=[],e;return{captureAnimationState:function(){if(o=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(n){if(!(h(n,"display")==="none"||n===f.ghost)){o.push({target:n,rect:D(n)});var i=U({},o[o.length-1].rect);if(n.thisAnimationDuration){var a=be(n,!0);a&&(i.top-=a.f,i.left-=a.e)}n.fromRect=i}})}},addAnimationState:function(r){o.push(r)},removeAnimationState:function(r){o.splice(dn(o,{target:r}),1)},animateAll:function(r){var n=this;if(!this.options.animation){clearTimeout(e),typeof r=="function"&&r();return}var i=!1,a=0;o.forEach(function(s){var l=0,d=s.target,u=d.fromRect,c=D(d),m=d.prevFromRect,b=d.prevToRect,v=s.rect,E=be(d,!0);E&&(c.top-=E.f,c.left-=E.e),d.toRect=c,d.thisAnimationDuration&&It(m,c)&&!It(u,c)&&(v.top-c.top)/(v.left-c.left)===(u.top-c.top)/(u.left-c.left)&&(l=fn(v,m,b,n.options)),It(c,u)||(d.prevFromRect=u,d.prevToRect=c,l||(l=n.options.animation),n.animate(d,v,c,l)),l&&(i=!0,a=Math.max(a,l),clearTimeout(d.animationResetTimer),d.animationResetTimer=setTimeout(function(){d.animationTime=0,d.prevFromRect=null,d.fromRect=null,d.prevToRect=null,d.thisAnimationDuration=null},l),d.thisAnimationDuration=l)}),clearTimeout(e),i?e=setTimeout(function(){typeof r=="function"&&r()},a):typeof r=="function"&&r(),o=[]},animate:function(r,n,i,a){if(a){h(r,"transition",""),h(r,"transform","");var s=be(this.el),l=s&&s.a,d=s&&s.d,u=(n.left-i.left)/(l||1),c=(n.top-i.top)/(d||1);r.animatingX=!!u,r.animatingY=!!c,h(r,"transform","translate3d("+u+"px,"+c+"px,0)"),this.forRepaintDummy=hn(r),h(r,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),h(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){h(r,"transition",""),h(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},a)}}}}function hn(o){return o.offsetWidth}function fn(o,e,t,r){return Math.sqrt(Math.pow(e.top-o.top,2)+Math.pow(e.left-o.left,2))/Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))*r.animation}var fe=[],Nt={initializeByDefault:!0},qe={mount:function(e){for(var t in Nt)Nt.hasOwnProperty(t)&&!(t in e)&&(e[t]=Nt[t]);fe.forEach(function(r){if(r.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),fe.push(e)},pluginEvent:function(e,t,r){var n=this;this.eventCanceled=!1,r.cancel=function(){n.eventCanceled=!0};var i=e+"Global";fe.forEach(function(a){t[a.pluginName]&&(t[a.pluginName][i]&&t[a.pluginName][i](U({sortable:t},r)),t.options[a.pluginName]&&t[a.pluginName][e]&&t[a.pluginName][e](U({sortable:t},r)))})},initializePlugins:function(e,t,r,n){fe.forEach(function(s){var l=s.pluginName;if(!(!e.options[l]&&!s.initializeByDefault)){var d=new s(e,t,e.options);d.sortable=e,d.options=e.options,e[l]=d,Q(r,d.defaults)}});for(var i in e.options)if(e.options.hasOwnProperty(i)){var a=this.modifyOption(e,i,e.options[i]);typeof a<"u"&&(e.options[i]=a)}},getEventProperties:function(e,t){var r={};return fe.forEach(function(n){typeof n.eventProperties=="function"&&Q(r,n.eventProperties.call(t[n.pluginName],e))}),r},modifyOption:function(e,t,r){var n;return fe.forEach(function(i){e[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[t]=="function"&&(n=i.optionListeners[t].call(e[i.pluginName],r))}),n}};function yn(o){var e=o.sortable,t=o.rootEl,r=o.name,n=o.targetEl,i=o.cloneEl,a=o.toEl,s=o.fromEl,l=o.oldIndex,d=o.newIndex,u=o.oldDraggableIndex,c=o.newDraggableIndex,m=o.originalEvent,b=o.putSortable,v=o.extraEventProperties;if(e=e||t&&t[B],!!e){var E,z=e.options,q="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!ee&&!Ue?E=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(E=document.createEvent("Event"),E.initEvent(r,!0,!0)),E.to=a||t,E.from=s||t,E.item=n||t,E.clone=i,E.oldIndex=l,E.newIndex=d,E.oldDraggableIndex=u,E.newDraggableIndex=c,E.originalEvent=m,E.pullMode=b?b.lastPutMode:void 0;var P=U(U({},v),qe.getEventProperties(r,e));for(var X in P)E[X]=P[X];t&&t.dispatchEvent(E),z[q]&&z[q].call(e,E)}}var mn=["evt"],I=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.evt,i=an(r,mn);qe.pluginEvent.bind(f)(e,t,U({dragEl:p,parentEl:T,ghostEl:y,rootEl:S,nextEl:ue,lastDownEl:st,cloneEl:C,cloneHidden:ne,dragStarted:He,putSortable:L,activeSortable:f.active,originalEvent:n,oldIndex:ve,oldDraggableIndex:ze,newIndex:Z,newDraggableIndex:re,hideGhostForTarget:$r,unhideGhostForTarget:Dr,cloneNowHidden:function(){ne=!0},cloneNowShown:function(){ne=!1},dispatchSortableEvent:function(s){M({sortable:t,name:s,originalEvent:n})}},i))};function M(o){yn(U({putSortable:L,cloneEl:C,targetEl:p,rootEl:S,oldIndex:ve,oldDraggableIndex:ze,newIndex:Z,newDraggableIndex:re},o))}var p,T,y,S,ue,st,C,ne,ve,Z,ze,re,Qe,L,me=!1,ut=!1,ht=[],pe,k,Ht,Rt,so,lo,He,ye,Xe,ke=!1,et=!1,lt,A,Zt=[],kt=!1,ft=[],Pt=typeof document<"u",tt=gr,po=Ue||ee?"cssFloat":"float",gn=Pt&&!vr&&!gr&&"draggable"in document.createElement("div"),_r=function(){if(Pt){if(ee)return!1;var o=document.createElement("x");return o.style.cssText="pointer-events:auto",o.style.pointerEvents==="auto"}}(),Tr=function(e,t){var r=h(e),n=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),i=we(e,0,t),a=we(e,1,t),s=i&&h(i),l=a&&h(a),d=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+D(i).width,u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+D(a).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&s.float&&s.float!=="none"){var c=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===c)?"vertical":"horizontal"}return i&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||d>=n&&r[po]==="none"||a&&r[po]==="none"&&d+u>n)?"vertical":"horizontal"},vn=function(e,t,r){var n=r?e.left:e.top,i=r?e.right:e.bottom,a=r?e.width:e.height,s=r?t.left:t.top,l=r?t.right:t.bottom,d=r?t.width:t.height;return n===s||i===l||n+a/2===s+d/2},bn=function(e,t){var r;return ht.some(function(n){var i=n[B].options.emptyInsertThreshold;if(!(!i||qt(n))){var a=D(n),s=e>=a.left-i&&e<=a.right+i,l=t>=a.top-i&&t<=a.bottom+i;if(s&&l)return r=n}}),r},Or=function(e){function t(i,a){return function(s,l,d,u){var c=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(i==null&&(a||c))return!0;if(i==null||i===!1)return!1;if(a&&i==="clone")return i;if(typeof i=="function")return t(i(s,l,d,u),a)(s,l,d,u);var m=(a?s:l).options.group.name;return i===!0||typeof i=="string"&&i===m||i.join&&i.indexOf(m)>-1}}var r={},n=e.group;(!n||at(n)!="object")&&(n={name:n}),r.name=n.name,r.checkPull=t(n.pull,!0),r.checkPut=t(n.put),r.revertClone=n.revertClone,e.group=r},$r=function(){!_r&&y&&h(y,"display","none")},Dr=function(){!_r&&y&&h(y,"display","")};Pt&&!vr&&document.addEventListener("click",function(o){if(ut)return o.preventDefault(),o.stopPropagation&&o.stopPropagation(),o.stopImmediatePropagation&&o.stopImmediatePropagation(),ut=!1,!1},!0);var ce=function(e){if(p){e=e.touches?e.touches[0]:e;var t=bn(e.clientX,e.clientY);if(t){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);r.target=r.rootEl=t,r.preventDefault=void 0,r.stopPropagation=void 0,t[B]._onDragOver(r)}}},xn=function(e){p&&p.parentNode[B]._isOutsideThisEl(e.target)};function f(o,e){if(!(o&&o.nodeType&&o.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(o));this.el=o,this.options=e=Q({},e),o[B]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(o.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Tr(o,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:f.supportPointer!==!1&&"PointerEvent"in window&&!Be,emptyInsertThreshold:5};qe.initializePlugins(this,o,t);for(var r in t)!(r in e)&&(e[r]=t[r]);Or(e);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=e.forceFallback?!1:gn,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?w(o,"pointerdown",this._onTapStart):(w(o,"mousedown",this._onTapStart),w(o,"touchstart",this._onTapStart)),this.nativeDraggable&&(w(o,"dragover",this),w(o,"dragenter",this)),ht.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Q(this,un())}f.prototype={constructor:f,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(ye=null)},_getDirection:function(e,t){return typeof this.options.direction=="function"?this.options.direction.call(this,e,t,p):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,r=this.el,n=this.options,i=n.preventOnFilter,a=e.type,s=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,l=(s||e).target,d=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,u=n.filter;if($n(r),!p&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||n.disabled)&&!d.isContentEditable&&!(!this.nativeDraggable&&Be&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=F(l,n.draggable,r,!1),!(l&&l.animated)&&st!==l)){if(ve=Y(l),ze=Y(l,n.draggable),typeof u=="function"){if(u.call(this,e,l,this)){M({sortable:t,rootEl:d,name:"filter",targetEl:l,toEl:r,fromEl:r}),I("filter",t,{evt:e}),i&&e.cancelable&&e.preventDefault();return}}else if(u&&(u=u.split(",").some(function(c){if(c=F(d,c.trim(),r,!1),c)return M({sortable:t,rootEl:c,name:"filter",targetEl:l,fromEl:r,toEl:r}),I("filter",t,{evt:e}),!0}),u)){i&&e.cancelable&&e.preventDefault();return}n.handle&&!F(d,n.handle,r,!1)||this._prepareDragStart(e,s,l)}}},_prepareDragStart:function(e,t,r){var n=this,i=n.el,a=n.options,s=i.ownerDocument,l;if(r&&!p&&r.parentNode===i){var d=D(r);if(S=i,p=r,T=p.parentNode,ue=p.nextSibling,st=r,Qe=a.group,f.dragged=p,pe={target:p,clientX:(t||e).clientX,clientY:(t||e).clientY},so=pe.clientX-d.left,lo=pe.clientY-d.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,p.style["will-change"]="all",l=function(){if(I("delayEnded",n,{evt:e}),f.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!ro&&n.nativeDraggable&&(p.draggable=!0),n._triggerDragStart(e,t),M({sortable:n,name:"choose",originalEvent:e}),R(p,a.chosenClass,!0)},a.ignore.split(",").forEach(function(u){xr(p,u.trim(),Bt)}),w(s,"dragover",ce),w(s,"mousemove",ce),w(s,"touchmove",ce),w(s,"mouseup",n._onDrop),w(s,"touchend",n._onDrop),w(s,"touchcancel",n._onDrop),ro&&this.nativeDraggable&&(this.options.touchStartThreshold=4,p.draggable=!0),I("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(Ue||ee))){if(f.eventCanceled){this._onDrop();return}w(s,"mouseup",n._disableDelayedDrag),w(s,"touchend",n._disableDelayedDrag),w(s,"touchcancel",n._disableDelayedDrag),w(s,"mousemove",n._delayedDragTouchMoveHandler),w(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&w(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){p&&Bt(p),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;x(e,"mouseup",this._disableDelayedDrag),x(e,"touchend",this._disableDelayedDrag),x(e,"touchcancel",this._disableDelayedDrag),x(e,"mousemove",this._delayedDragTouchMoveHandler),x(e,"touchmove",this._delayedDragTouchMoveHandler),x(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||e.pointerType=="touch"&&e,!this.nativeDraggable||t?this.options.supportPointer?w(document,"pointermove",this._onTouchMove):t?w(document,"touchmove",this._onTouchMove):w(document,"mousemove",this._onTouchMove):(w(p,"dragend",this),w(S,"dragstart",this._onDragStart));try{document.selection?dt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,t){if(me=!1,S&&p){I("dragStarted",this,{evt:t}),this.nativeDraggable&&w(document,"dragover",xn);var r=this.options;!e&&R(p,r.dragClass,!1),R(p,r.ghostClass,!0),f.active=this,e&&this._appendGhost(),M({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(k){this._lastX=k.clientX,this._lastY=k.clientY,$r();for(var e=document.elementFromPoint(k.clientX,k.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(k.clientX,k.clientY),e!==t);)t=e;if(p.parentNode[B]._isOutsideThisEl(e),t)do{if(t[B]){var r=void 0;if(r=t[B]._onDragOver({clientX:k.clientX,clientY:k.clientY,target:e,rootEl:t}),r&&!this.options.dragoverBubble)break}e=t}while(t=t.parentNode);Dr()}},_onTouchMove:function(e){if(pe){var t=this.options,r=t.fallbackTolerance,n=t.fallbackOffset,i=e.touches?e.touches[0]:e,a=y&&be(y,!0),s=y&&a&&a.a,l=y&&a&&a.d,d=tt&&A&&ao(A),u=(i.clientX-pe.clientX+n.x)/(s||1)+(d?d[0]-Zt[0]:0)/(s||1),c=(i.clientY-pe.clientY+n.y)/(l||1)+(d?d[1]-Zt[1]:0)/(l||1);if(!f.active&&!me){if(r&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<r)return;this._onDragStart(e,!0)}if(y){a?(a.e+=u-(Ht||0),a.f+=c-(Rt||0)):a={a:1,b:0,c:0,d:1,e:u,f:c};var m="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");h(y,"webkitTransform",m),h(y,"mozTransform",m),h(y,"msTransform",m),h(y,"transform",m),Ht=u,Rt=c,k=i}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!y){var e=this.options.fallbackOnBody?document.body:S,t=D(p,!0,tt,!0,e),r=this.options;if(tt){for(A=e;h(A,"position")==="static"&&h(A,"transform")==="none"&&A!==document;)A=A.parentNode;A!==document.body&&A!==document.documentElement?(A===document&&(A=W()),t.top+=A.scrollTop,t.left+=A.scrollLeft):A=W(),Zt=ao(A)}y=p.cloneNode(!0),R(y,r.ghostClass,!1),R(y,r.fallbackClass,!0),R(y,r.dragClass,!0),h(y,"transition",""),h(y,"transform",""),h(y,"box-sizing","border-box"),h(y,"margin",0),h(y,"top",t.top),h(y,"left",t.left),h(y,"width",t.width),h(y,"height",t.height),h(y,"opacity","0.8"),h(y,"position",tt?"absolute":"fixed"),h(y,"zIndex","100000"),h(y,"pointerEvents","none"),f.ghost=y,e.appendChild(y),h(y,"transform-origin",so/parseInt(y.style.width)*100+"% "+lo/parseInt(y.style.height)*100+"%")}},_onDragStart:function(e,t){var r=this,n=e.dataTransfer,i=r.options;if(I("dragStart",this,{evt:e}),f.eventCanceled){this._onDrop();return}I("setupClone",this),f.eventCanceled||(C=Cr(p),C.removeAttribute("id"),C.draggable=!1,C.style["will-change"]="",this._hideClone(),R(C,this.options.chosenClass,!1),f.clone=C),r.cloneId=dt(function(){I("clone",r),!f.eventCanceled&&(r.options.removeCloneOnHide||S.insertBefore(C,p),r._hideClone(),M({sortable:r,name:"clone"}))}),!t&&R(p,i.dragClass,!0),t?(ut=!0,r._loopId=setInterval(r._emulateDragOver,50)):(x(document,"mouseup",r._onDrop),x(document,"touchend",r._onDrop),x(document,"touchcancel",r._onDrop),n&&(n.effectAllowed="move",i.setData&&i.setData.call(r,n,p)),w(document,"drop",r),h(p,"transform","translateZ(0)")),me=!0,r._dragStartId=dt(r._dragStarted.bind(r,t,e)),w(document,"selectstart",r),He=!0,Be&&h(document.body,"user-select","none")},_onDragOver:function(e){var t=this.el,r=e.target,n,i,a,s=this.options,l=s.group,d=f.active,u=Qe===l,c=s.sort,m=L||d,b,v=this,E=!1;if(kt)return;function z(Te,kr){I(Te,v,U({evt:e,isOwner:u,axis:b?"vertical":"horizontal",revert:a,dragRect:n,targetRect:i,canSort:c,fromSortable:m,target:r,completed:P,onMove:function(Kt,jr){return ot(S,t,p,n,Kt,D(Kt),e,jr)},changed:X},kr))}function q(){z("dragOverAnimationCapture"),v.captureAnimationState(),v!==m&&m.captureAnimationState()}function P(Te){return z("dragOverCompleted",{insertion:Te}),Te&&(u?d._hideClone():d._showClone(v),v!==m&&(R(p,L?L.options.ghostClass:d.options.ghostClass,!1),R(p,s.ghostClass,!0)),L!==v&&v!==f.active?L=v:v===f.active&&L&&(L=null),m===v&&(v._ignoreWhileAnimating=r),v.animateAll(function(){z("dragOverAnimationComplete"),v._ignoreWhileAnimating=null}),v!==m&&(m.animateAll(),m._ignoreWhileAnimating=null)),(r===p&&!p.animated||r===t&&!r.animated)&&(ye=null),!s.dragoverBubble&&!e.rootEl&&r!==document&&(p.parentNode[B]._isOutsideThisEl(e.target),!Te&&ce(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),E=!0}function X(){Z=Y(p),re=Y(p,s.draggable),M({sortable:v,name:"change",toEl:t,newIndex:Z,newDraggableIndex:re,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),r=F(r,s.draggable,t,!0),z("dragOver"),f.eventCanceled)return E;if(p.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||v._ignoreWhileAnimating===r)return P(!1);if(ut=!1,d&&!s.disabled&&(u?c||(a=T!==S):L===this||(this.lastPutMode=Qe.checkPull(this,d,p,e))&&l.checkPut(this,d,p,e))){if(b=this._getDirection(e,r)==="vertical",n=D(p),z("dragOverValid"),f.eventCanceled)return E;if(a)return T=S,q(),this._hideClone(),z("revert"),f.eventCanceled||(ue?S.insertBefore(p,ue):S.appendChild(p)),P(!0);var N=qt(t,s.draggable);if(!N||Cn(e,b,this)&&!N.animated){if(N===p)return P(!1);if(N&&t===e.target&&(r=N),r&&(i=D(r)),ot(S,t,p,n,r,i,e,!!r)!==!1)return q(),N&&N.nextSibling?t.insertBefore(p,N.nextSibling):t.appendChild(p),T=t,X(),P(!0)}else if(N&&Sn(e,b,this)){var se=we(t,0,s,!0);if(se===p)return P(!1);if(r=se,i=D(r),ot(S,t,p,n,r,i,e,!1)!==!1)return q(),t.insertBefore(p,se),T=t,X(),P(!0)}else if(r.parentNode===t){i=D(r);var j=0,le,Ee=p.parentNode!==t,H=!vn(p.animated&&p.toRect||n,r.animated&&r.toRect||i,b),Se=b?"top":"left",te=io(r,"top","top")||io(p,"top","top"),Ce=te?te.scrollTop:void 0;ye!==r&&(le=i[Se],ke=!1,et=!H&&s.invertSwap||Ee),j=_n(e,r,i,b,H?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,et,ye===r);var G;if(j!==0){var de=Y(p);do de-=j,G=T.children[de];while(G&&(h(G,"display")==="none"||G===y))}if(j===0||G===r)return P(!1);ye=r,Xe=j;var _e=r.nextElementSibling,oe=!1;oe=j===1;var Ge=ot(S,t,p,n,r,i,e,oe);if(Ge!==!1)return(Ge===1||Ge===-1)&&(oe=Ge===1),kt=!0,setTimeout(En,30),q(),oe&&!_e?t.appendChild(p):r.parentNode.insertBefore(p,oe?_e:r),te&&Sr(te,0,Ce-te.scrollTop),T=p.parentNode,le!==void 0&&!et&&(lt=Math.abs(le-D(r)[Se])),X(),P(!0)}if(t.contains(p))return P(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){x(document,"mousemove",this._onTouchMove),x(document,"touchmove",this._onTouchMove),x(document,"pointermove",this._onTouchMove),x(document,"dragover",ce),x(document,"mousemove",ce),x(document,"touchmove",ce)},_offUpEvents:function(){var e=this.el.ownerDocument;x(e,"mouseup",this._onDrop),x(e,"touchend",this._onDrop),x(e,"pointerup",this._onDrop),x(e,"touchcancel",this._onDrop),x(document,"selectstart",this)},_onDrop:function(e){var t=this.el,r=this.options;if(Z=Y(p),re=Y(p,r.draggable),I("drop",this,{evt:e}),T=p&&p.parentNode,Z=Y(p),re=Y(p,r.draggable),f.eventCanceled){this._nulling();return}me=!1,et=!1,ke=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),jt(this.cloneId),jt(this._dragStartId),this.nativeDraggable&&(x(document,"drop",this),x(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Be&&h(document.body,"user-select",""),h(p,"transform",""),e&&(He&&(e.cancelable&&e.preventDefault(),!r.dropBubble&&e.stopPropagation()),y&&y.parentNode&&y.parentNode.removeChild(y),(S===T||L&&L.lastPutMode!=="clone")&&C&&C.parentNode&&C.parentNode.removeChild(C),p&&(this.nativeDraggable&&x(p,"dragend",this),Bt(p),p.style["will-change"]="",He&&!me&&R(p,L?L.options.ghostClass:this.options.ghostClass,!1),R(p,this.options.chosenClass,!1),M({sortable:this,name:"unchoose",toEl:T,newIndex:null,newDraggableIndex:null,originalEvent:e}),S!==T?(Z>=0&&(M({rootEl:T,name:"add",toEl:T,fromEl:S,originalEvent:e}),M({sortable:this,name:"remove",toEl:T,originalEvent:e}),M({rootEl:T,name:"sort",toEl:T,fromEl:S,originalEvent:e}),M({sortable:this,name:"sort",toEl:T,originalEvent:e})),L&&L.save()):Z!==ve&&Z>=0&&(M({sortable:this,name:"update",toEl:T,originalEvent:e}),M({sortable:this,name:"sort",toEl:T,originalEvent:e})),f.active&&((Z==null||Z===-1)&&(Z=ve,re=ze),M({sortable:this,name:"end",toEl:T,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){I("nulling",this),S=p=T=y=ue=C=st=ne=pe=k=He=Z=re=ve=ze=ye=Xe=L=Qe=f.dragged=f.ghost=f.clone=f.active=null,ft.forEach(function(e){e.checked=!0}),ft.length=Ht=Rt=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":p&&(this._onDragOver(e),wn(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],t,r=this.el.children,n=0,i=r.length,a=this.options;n<i;n++)t=r[n],F(t,a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||On(t));return e},sort:function(e,t){var r={},n=this.el;this.toArray().forEach(function(i,a){var s=n.children[a];F(s,this.options.draggable,n,!1)&&(r[i]=s)},this),t&&this.captureAnimationState(),e.forEach(function(i){r[i]&&(n.removeChild(r[i]),n.appendChild(r[i]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return F(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var r=this.options;if(t===void 0)return r[e];var n=qe.modifyOption(this,e,t);typeof n<"u"?r[e]=n:r[e]=t,e==="group"&&Or(r)},destroy:function(){I("destroy",this);var e=this.el;e[B]=null,x(e,"mousedown",this._onTapStart),x(e,"touchstart",this._onTapStart),x(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(x(e,"dragover",this),x(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ht.splice(ht.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!ne){if(I("hideClone",this),f.eventCanceled)return;h(C,"display","none"),this.options.removeCloneOnHide&&C.parentNode&&C.parentNode.removeChild(C),ne=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(ne){if(I("showClone",this),f.eventCanceled)return;p.parentNode==S&&!this.options.group.revertClone?S.insertBefore(C,p):ue?S.insertBefore(C,ue):S.appendChild(C),this.options.group.revertClone&&this.animate(p,C),h(C,"display",""),ne=!1}}};function wn(o){o.dataTransfer&&(o.dataTransfer.dropEffect="move"),o.cancelable&&o.preventDefault()}function ot(o,e,t,r,n,i,a,s){var l,d=o[B],u=d.options.onMove,c;return window.CustomEvent&&!ee&&!Ue?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=e,l.from=o,l.dragged=t,l.draggedRect=r,l.related=n||e,l.relatedRect=i||D(e),l.willInsertAfter=s,l.originalEvent=a,o.dispatchEvent(l),u&&(c=u.call(d,l,a)),c}function Bt(o){o.draggable=!1}function En(){kt=!1}function Sn(o,e,t){var r=D(we(t.el,0,t.options,!0)),n=wr(t.el),i=10;return e?o.clientX<n.left-i||o.clientY<r.top&&o.clientX<r.right:o.clientY<n.top-i||o.clientY<r.bottom&&o.clientX<r.left}function Cn(o,e,t){var r=D(qt(t.el,t.options.draggable)),n=wr(t.el),i=10;return e?o.clientX>n.right+i||o.clientY>r.bottom&&o.clientX>r.left:o.clientY>n.bottom+i||o.clientX>r.right&&o.clientY>r.top}function _n(o,e,t,r,n,i,a,s){var l=r?o.clientY:o.clientX,d=r?t.height:t.width,u=r?t.top:t.left,c=r?t.bottom:t.right,m=!1;if(!a){if(s&&lt<d*n){if(!ke&&(Xe===1?l>u+d*i/2:l<c-d*i/2)&&(ke=!0),ke)m=!0;else if(Xe===1?l<u+lt:l>c-lt)return-Xe}else if(l>u+d*(1-n)/2&&l<c-d*(1-n)/2)return Tn(e)}return m=m||a,m&&(l<u+d*i/2||l>c-d*i/2)?l>u+d/2?1:-1:0}function Tn(o){return Y(p)<Y(o)?1:-1}function On(o){for(var e=o.tagName+o.className+o.src+o.href+o.textContent,t=e.length,r=0;t--;)r+=e.charCodeAt(t);return r.toString(36)}function $n(o){ft.length=0;for(var e=o.getElementsByTagName("input"),t=e.length;t--;){var r=e[t];r.checked&&ft.push(r)}}function dt(o){return setTimeout(o,0)}function jt(o){return clearTimeout(o)}Pt&&w(document,"touchmove",function(o){(f.active||me)&&o.cancelable&&o.preventDefault()});f.utils={on:w,off:x,css:h,find:xr,is:function(e,t){return!!F(e,t,e,!1)},extend:pn,throttle:Er,closest:F,toggleClass:R,clone:Cr,index:Y,nextTick:dt,cancelNextTick:jt,detectDirection:Tr,getChild:we};f.get=function(o){return o[B]};f.mount=function(){for(var o=arguments.length,e=new Array(o),t=0;t<o;t++)e[t]=arguments[t];e[0].constructor===Array&&(e=e[0]),e.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(f.utils=U(U({},f.utils),r.utils)),qe.mount(r)})};f.create=function(o,e){return new f(o,e)};f.version=sn;var $=[],Re,Ft,Wt=!1,Yt,zt,yt,Ze;function Dn(){function o(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return o.prototype={dragStarted:function(t){var r=t.originalEvent;this.sortable.nativeDraggable?w(document,"dragover",this._handleAutoScroll):this.options.supportPointer?w(document,"pointermove",this._handleFallbackAutoScroll):r.touches?w(document,"touchmove",this._handleFallbackAutoScroll):w(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var r=t.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?x(document,"dragover",this._handleAutoScroll):(x(document,"pointermove",this._handleFallbackAutoScroll),x(document,"touchmove",this._handleFallbackAutoScroll),x(document,"mousemove",this._handleFallbackAutoScroll)),co(),pt(),cn()},nulling:function(){yt=Ft=Re=Wt=Ze=Yt=zt=null,$.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,r){var n=this,i=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=document.elementFromPoint(i,a);if(yt=t,r||this.options.forceAutoScrollFallback||Ue||ee||Be){Xt(t,this.options,s,r);var l=ie(s,!0);Wt&&(!Ze||i!==Yt||a!==zt)&&(Ze&&co(),Ze=setInterval(function(){var d=ie(document.elementFromPoint(i,a),!0);d!==l&&(l=d,pt()),Xt(t,n.options,d,r)},10),Yt=i,zt=a)}else{if(!this.options.bubbleScroll||ie(s,!0)===W()){pt();return}Xt(t,this.options,ie(s,!1),!1)}}},Q(o,{pluginName:"scroll",initializeByDefault:!0})}function pt(){$.forEach(function(o){clearInterval(o.pid)}),$=[]}function co(){clearInterval(Ze)}var Xt=Er(function(o,e,t,r){if(e.scroll){var n=(o.touches?o.touches[0]:o).clientX,i=(o.touches?o.touches[0]:o).clientY,a=e.scrollSensitivity,s=e.scrollSpeed,l=W(),d=!1,u;Ft!==t&&(Ft=t,pt(),Re=e.scroll,u=e.scrollFn,Re===!0&&(Re=ie(t,!0)));var c=0,m=Re;do{var b=m,v=D(b),E=v.top,z=v.bottom,q=v.left,P=v.right,X=v.width,N=v.height,se=void 0,j=void 0,le=b.scrollWidth,Ee=b.scrollHeight,H=h(b),Se=b.scrollLeft,te=b.scrollTop;b===l?(se=X<le&&(H.overflowX==="auto"||H.overflowX==="scroll"||H.overflowX==="visible"),j=N<Ee&&(H.overflowY==="auto"||H.overflowY==="scroll"||H.overflowY==="visible")):(se=X<le&&(H.overflowX==="auto"||H.overflowX==="scroll"),j=N<Ee&&(H.overflowY==="auto"||H.overflowY==="scroll"));var Ce=se&&(Math.abs(P-n)<=a&&Se+X<le)-(Math.abs(q-n)<=a&&!!Se),G=j&&(Math.abs(z-i)<=a&&te+N<Ee)-(Math.abs(E-i)<=a&&!!te);if(!$[c])for(var de=0;de<=c;de++)$[de]||($[de]={});($[c].vx!=Ce||$[c].vy!=G||$[c].el!==b)&&($[c].el=b,$[c].vx=Ce,$[c].vy=G,clearInterval($[c].pid),(Ce!=0||G!=0)&&(d=!0,$[c].pid=setInterval((function(){r&&this.layer===0&&f.active._onTouchMove(yt);var _e=$[this.layer].vy?$[this.layer].vy*s:0,oe=$[this.layer].vx?$[this.layer].vx*s:0;typeof u=="function"&&u.call(f.dragged.parentNode[B],oe,_e,o,yt,$[this.layer].el)!=="continue"||Sr($[this.layer].el,oe,_e)}).bind({layer:c}),24))),c++}while(e.bubbleScroll&&m!==l&&(m=ie(m,!1)));Wt=d}},30),Lr=function(e){var t=e.originalEvent,r=e.putSortable,n=e.dragEl,i=e.activeSortable,a=e.dispatchSortableEvent,s=e.hideGhostForTarget,l=e.unhideGhostForTarget;if(t){var d=r||i;s();var u=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,c=document.elementFromPoint(u.clientX,u.clientY);l(),d&&!d.el.contains(c)&&(a("spill"),this.onSpill({dragEl:n,putSortable:r}))}};function Gt(){}Gt.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,r=e.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var n=we(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(t,n):this.sortable.el.appendChild(t),this.sortable.animateAll(),r&&r.animateAll()},drop:Lr};Q(Gt,{pluginName:"revertOnSpill"});function Jt(){}Jt.prototype={onSpill:function(e){var t=e.dragEl,r=e.putSortable,n=r||this.sortable;n.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),n.animateAll()},drop:Lr};Q(Jt,{pluginName:"removeOnSpill"});f.mount(new Dn);f.mount(Jt,Gt);const Ln=(o,e,t,r)=>{let n=[],i=null;o._sortable=f.create(o,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{const s=a.item;n=Array.prototype.slice.call(s.parentNode.childNodes),n=n.filter(l=>l.nodeType!=Node.ELEMENT_NODE||!l.classList.contains("sortable-fallback"))},onMove(a){i=a.related},onEnd:a=>{const l=a.item.parentNode;for(const v of n)l.appendChild(v);if(a.oldIndex==a.newIndex)return;const d=e.getArray(),u=d.find(v=>v.get(t)===a.item.querySelector("eox-layercontrol-layer").layer.get(t)),c=d.find(v=>v.get(t)==i.dataset.layer);let m,b;for(m=0;m<d.length;m++)if(d[m]==u){e.removeAt(m);break}for(b=0;b<d.length;b++)if(d[b]===c){m>b?e.insertAt(b,u):e.insertAt(b+1,u);break}r.requestUpdate()}})};function An(o,e,t){o.getArray().forEach(n=>{n.get(e)||n.set(e,n.ol_uid),n.get(t)||n.set(t,`layer ${n.ol_uid}`)})}const Ut=(o,e,t)=>{let r=[];const n=(i,a,s)=>{r=[...r,...i.filter(d=>d.get(a)===s)];const l=i.filter(d=>d.getLayers);return l.length>0&&l.forEach(d=>n(d.getLayers().getArray(),a,s)),r};return n(o,e,t),r},Pn=(o,e)=>{var t,r,n;if(!(!o||!e))return o.getLayers?"group":(n=(t=e.getInteractions().getArray().filter(i=>i.freehand_!==void 0).map(i=>i.source_))==null?void 0:t.ol_uid)!=null&&n.includes(o.getSource?(r=o.getSource())==null?void 0:r.ol_uid:void 0)?"draw":o.declutter_!==void 0?"vector":"raster"},Ar=(o,e)=>{const t=o.get("minZoom"),r=o.get("maxZoom");return!!(e&&(t!==-1/0||r!==1/0))},Mn=(o,e,t)=>{if(!o||!e)return!1;if(!Ar(o,t))return!0;const r=o.get("minZoom"),n=o.get("maxZoom"),i=e.getView().getZoom();return i>r&&i<n};function Vn(o,e){const t=new URL(o).searchParams;Object.entries(e).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{t.set(l,s[l])}):t.set(a,s)});const r=o.split("?")[0],n=t.toString();return`${r}?${n}`}function Pr(o,e){var r;let t={};for(const n in o){const i=o[n].type;if(i&&i!=="object")t[n]=i==="number"?Number(e[n]):e[n];else if(typeof o[n]=="object"&&((r=o[n])!=null&&r.properties)){const a=Pr(o[n].properties,e);Object.keys(a).length>0&&(t[n]=a)}}return t}function In(o,e){var i;if(!o.getSource().getTileUrlFunction())return null;const t=new URL(o.getSource().getTileUrlFunction()([0,0,0])),r=Object.fromEntries(t.searchParams.entries()),n=Pr(((i=e.schema)==null?void 0:i.properties)||e.schema,r);return Object.keys(n).length?n:null}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mr=Gr(class extends Jr{constructor(o){if(super(o),o.type!==he.PROPERTY&&o.type!==he.ATTRIBUTE&&o.type!==he.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Kr(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[e]){if(e===Ke||e===ge)return e;const t=o.element,r=o.name;if(o.type===he.PROPERTY){if(e===t[r])return Ke}else if(o.type===he.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(r))return Ke}else if(o.type===he.ATTRIBUTE&&t.getAttribute(r)===e+"")return Ke;return Qr(o),e}});var je,Fe,xe,mt,Ir,gt,vt;class Vr extends ae{constructor(){super();O(this,mt);O(this,je,{});O(this,Fe,null);O(this,xe,void 0);O(this,gt,"");O(this,vt,"");this.layer=null,this.unstyled=!1,this.noShadow=!0,this.layerConfig=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return this.layerConfig?(Je(this,Fe,In(this.layer,this.layerConfig)),g`
      <style>
        ${_(this,gt)}
        ${!this.unstyled&&_(this,vt)}
      </style>
      <eox-jsonform
        .schema=${this.layerConfig.schema}
        .startVals=${_(this,Fe)}
        .options=${{disable_edit_json:!0,disable_collapse:!0,disable_properties:!0}}
        @change=${to(this,mt,Ir)}
      ></eox-jsonform>
    `):""}}je=new WeakMap,Fe=new WeakMap,xe=new WeakMap,mt=new WeakSet,Ir=function(t){Je(this,je,t.detail),this.layer.getSource().getTileUrlFunction()&&(_(this,xe)||Je(this,xe,this.layer.getSource().getTileUrlFunction()),this.layer.getSource().setTileUrlFunction((...r)=>Vn(_(this,xe).call(this,...r),_(this,je))),this.layer.getSource().setKey(new Date)),this.requestUpdate()},gt=new WeakMap,vt=new WeakMap,V(Vr,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1}});customElements.define("eox-layercontrol-layerconfig",Vr);var bt,xt;class Nr extends ae{constructor(){super();O(this,bt,`
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
  `);O(this,xt,`
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
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!0}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return g`
      <style>
        ${_(this,bt)}
        ${!this.unstyled&&_(this,xt)}
      </style>
      <div class="tabbed">
        ${K(this.actions.length+this.tabs.length>1,()=>g`
            <nav>
              <div>
                ${it(this.tabs,(t,r)=>g`
                    <label
                      class=${this.selectedTab===r&&"highlighted"}
                      @click=${()=>this.selectedTab=r}
                    >
                      <slot name=${t+"-icon"}>${t}</slot>
                    </label>
                  `)}
              </div>
              <div>
                ${it(this.actions,t=>g`
                    <span>
                      <slot name=${t+"-icon"}>${t}</slot>
                    </span>
                  `)}
              </div>
            </nav>
          `)}
        <figure>
          ${it(this.tabs,(t,r)=>g`
              <div class="tab ${this.selectedTab===r&&"highlighted"}">
                <slot name=${t+"-content"}>${t}</slot>
              </div>
            `)}
        </figure>
      </div>
    `}}bt=new WeakMap,xt=new WeakMap,V(Nr,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-tabs",Nr);var wt,Et;class Hr extends ae{constructor(){super();V(this,"_parseActions",t=>t==null?void 0:t.filter(r=>["remove","sort"].filter(n=>{var i;return(i=this.layer)!=null&&i.get("layerControlDisable")?n!=="sort":!0}).includes(r)));V(this,"_parseTools",t=>t==null?void 0:t.filter(r=>{let n=!0;return["remove","sort"].includes(r)&&(n=!1),r==="info"&&(n=this.layer.get("description")),r==="config"&&(n=this.layer.get("layerConfig")),n}));V(this,"_removeButton",g`
    <button
      class="remove-icon icon"
      @click=${()=>{var t,r;(t=this.layer)==null||t.set("layerControlOptional",!0),(r=this.layer)==null||r.setVisible(!1),this.dispatchEvent(new CustomEvent("changed",{detail:this.layer,bubbles:!0}))}}
    >
      ${this.unstyled?"x":ge}
    </button>
  `);V(this,"_sortButton",g`
    <button class="sort-icon icon drag-handle">
      ${this.unstyled?"sort":ge}
    </button>
  `);O(this,wt,"");O(this,Et,`
    ${en}  
    ${tn}
    ${mr}
    ${on}
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
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!0}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var t,r;return g`
      <style>
        ${_(this,wt)}
        ${!this.unstyled&&_(this,Et)}
      </style>
      ${K(((t=this._parseActions(this.tools))==null?void 0:t.length)+((r=this._parseTools(this.tools))==null?void 0:r.length)>0,()=>{var n,i;return g`
          ${K(((n=this._parseActions(this.tools))==null?void 0:n.length)===1&&((i=this._parseTools(this.tools))==null?void 0:i.length)===0,()=>g`
              <div class="single-action-container">
                <div class="single-action">
                  ${this[`_${this._parseActions(this.tools)[0]}Button`]}
                </div>
              </div>
            `,()=>{var a;return g`
              <details
                class="tools"
                open=${this.layer.get("layerControlToolsExpand")||ge}
              >
                <summary>
                  <button
                    class="icon ${this.tools.length===1?`${this.tools[0]}-icon`:""}"
                  >
                    Tools
                  </button>
                </summary>
                <eox-layercontrol-tabs
                  .noShadow=${!1}
                  .actions=${this._parseActions(this.tools)}
                  .tabs=${this._parseTools(this.tools)}
                  .unstyled=${this.unstyled}
                >
                  ${it(this._parseTools(this.tools),s=>g`
                      <button slot="${s}-icon" class="icon">
                        ${this.unstyled?s:ge}
                      </button>
                    `)}

                  <div slot="info-content">
                    ${Wr(this.layer.get("description"))}
                  </div>
                  <div slot="opacity-content">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value=${Mr((a=this.layer)==null?void 0:a.getOpacity())}
                      @input=${s=>this.layer.setOpacity(parseFloat(s.target.value))}
                    />
                  </div>
                  <div slot="config-content">
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
        `})}
    `}}wt=new WeakMap,Et=new WeakMap,V(Hr,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer-tools",Hr);var St,Ct;class Rr extends ae{constructor(){super();V(this,"currLayerVisibilityBasedOnZoom",!0);O(this,St,"");O(this,Ct,`
    ${mr}
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
  `);this.layer=null,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!0}updateLayerZoomVisibility(){const t=Mn(this.layer,this.map,this.showLayerZoomState);let r=!1;!t&&this.currLayerVisibilityBasedOnZoom?(this.currLayerVisibilityBasedOnZoom=!1,r=!0):t&&!this.currLayerVisibilityBasedOnZoom&&(this.currLayerVisibilityBasedOnZoom=!0,r=!0),r&&(this.requestUpdate(),this.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))}firstUpdated(){Ar(this.layer,this.showLayerZoomState)&&(this.updateLayerZoomVisibility(),this.map.getView().on("change:resolution",()=>this.updateLayerZoomVisibility()))}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return g`
      <style>
        ${_(this,St)}
        ${!this.unstyled&&_(this,Ct)}
      </style>
      ${K(this.layer,()=>{var t;return g`
          <div
            class="layer ${this.layer.getVisible()?"visible":""} 
            ${this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible"}"
          >
            <label
              class="${this.layer.get("layerControlDisable")?"disabled":""}"
            >
              <input
                type=${this.layer.get("layerControlExclusive")?"radio":"checkbox"}
                .checked=${Mr(this.layer.getVisible())}
                @click=${r=>{this.layer.setVisible(r.target.checked),r.target.checked&&this.layer.get("layerControlExclusive")&&this.parentNode.parentNode.querySelectorAll("li > eox-layercontrol-layer").forEach(i=>{var a;i.layer!==this.layer&&((a=i.layer)!=null&&a.get("layerControlExclusive"))&&(i.layer.setVisible(!1),i.requestUpdate())}),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),this.requestUpdate()}}
              />
              <span class="title">${this.layer.get(this.titleProperty)}</span>
              ${K(((t=this.tools)==null?void 0:t.length)>0,()=>g`<span class="tools-placeholder"></span>`)}
            </label>
          </div>
          <eox-layercontrol-layer-tools
            .noShadow=${!0}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-layer-tools>
        `})}
    `}}St=new WeakMap,Ct=new WeakMap,V(Rr,"properties",{layer:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer",Rr);var _t,Tt;class Zr extends ae{constructor(){super();O(this,_t,"");O(this,Tt,`
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
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!0}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return g`
      <style>
        ${_(this,_t)}
        ${!this.unstyled&&_(this,Tt)}
      </style>
      ${K(this.group,()=>g`
          <details open=${this.group.get("layerControlExpand")||ge}>
            <summary>
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
    `}}_t=new WeakMap,Tt=new WeakMap,V(Zr,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer-group",Zr);var We,Ot,$t,Dt;class Br extends ae{constructor(){super();O(this,We,()=>{_(this,Ot).call(this)});O(this,Ot,Ur(()=>{this.requestUpdate(),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50));O(this,$t,"");O(this,Dt,`
    ul {
      padding: 0;
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
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!0}firstUpdated(){this.layers&&(An(this.layers,this.idProperty,this.titleProperty),Ln(this.renderRoot.querySelector("ul"),this.layers,this.idProperty,this))}updated(){var t;this.layers&&(this.layers.hasListener("change:length")&&((t=this.layers)==null||t.un("change:length",_(this,We))),this.layers.on("change:length",_(this,We)))}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return g`
      <style>
        ${_(this,$t)}
        ${!this.unstyled&&_(this,Dt)}
      </style>
      <ul>
        ${K(this.layers,()=>g`
            ${qr(this.layers.getArray().filter(t=>!t.get("layerControlHide")&&!t.get("layerControlOptional")).reverse(),t=>t,t=>g`
                <li
                  data-layer="${t.get(this.idProperty)}"
                  data-type="${Pn(t,this.map)}"
                >
                  ${t.getLayers?g`
                          <eox-layercontrol-layer-group
                            .noShadow=${!0}
                            .group=${t}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:g`
                          <eox-layercontrol-layer
                            .noShadow=${!0}
                            .layer=${t}
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
    `}}We=new WeakMap,Ot=new WeakMap,$t=new WeakMap,Dt=new WeakMap,V(Br,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer-list",Br);class Yr extends ae{constructor(){super(),this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!0}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return g`
      <label for="optional">Optional layers</label>

      <select name="optional" data-cy="optionalLayers">
        <option disabled selected value>
          -- select an optional layer to add --
        </option>
        ${Ut(this.layers.getArray(),"layerControlOptional",!0).map(e=>g`
            <option
              value="${e.get(this.idProperty)||e.ol_uid}"
            >
              ${e.get(this.titleProperty)||`layer ${e.get(this.idProperty)}`}
            </option>
          `)}
      </select>
      <button
        @click="${()=>{const e=Ut(this.layers.getArray(),"layerControlOptional",!0).find(t=>(t.get(this.idProperty)||t.ol_uid)===this.querySelector("select[name=optional]").value);e==null||e.set("layerControlOptional",!1),e==null||e.setVisible(!0),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),this.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(t=>t.requestUpdate()),this.requestUpdate()}}"
      >
        add
      </button>
    `}}V(Yr,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Yr);var Lt,At;class zr extends ae{constructor(){super();O(this,Lt,"");O(this,At,`
    * {
      font-family: Roboto, sans-serif;
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","config","remove","sort"],this.unstyled=!1,this.styleOverride=""}updated(){const t=document.querySelector(this.for);t&&(t==null?void 0:t.map)!==this.map&&(this.map=t.map)}render(){var t;return g`
      <style>
        ${_(this,Lt)}
        ${!this.unstyled&&_(this,At)}
        ${this.styleOverride}
      </style>
      ${K(this.map,()=>g`
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
            @changed=${r=>{if(this.requestUpdate(),r.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const n=this.renderRoot.querySelector("eox-layercontrol-optional-list");n==null||n.requestUpdate()}}}
          ></eox-layercontrol-layer-list>
        `)}
      ${K(this.map&&((t=Ut(this.map.getLayers().getArray(),"layerControlOptional",!0))==null?void 0:t.length)>0,()=>g`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}Lt=new WeakMap,At=new WeakMap,V(zr,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String}});customElements.define("eox-layercontrol",zr);const Xr=g` <eox-map
  style="width: 400px; height: 300px; margin-left: 7px;"
  zoom="3"
  layers='[
  {
    "type": "Group",
    "properties": {
      "id": "group2",
      "title": "Data Layers",
      "layerControlExpand": true,
      "description": "# Hello world"
    },
    "layers": [
      {
        "type": "Tile",
        "properties": {
          "id": "WIND",
          "title": "WIND"
        },
        "source": {
          "type": "TileWMS",
          "url": "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
          "params": {
            "LAYERS": "AWS_VIS_WIND_V_10M"
          }
        }
      },
      {
        "type": "Tile",
        "properties": {
          "id": "NO2",
          "title": "NO2"
        },
        "source": {
          "type": "TileWMS",
          "url": "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
          "params": {
            "LAYERS": "AWS_NO2-VISUALISATION"
          }
        }
      },
      {
        "type": "Vector",
        "properties": {
          "title": "Regions",
          "id": "regions"

        },
        "source": {
          "type": "Vector",
          "url": "https://openlayers.org/data/vector/ecoregions.json",
          "format": "GeoJSON",
          "attributions": "Regions: @ openlayers.org"
        }
      }
    ]
  },
  {
    "type": "Group",
    "properties": {
      "id": "group1",
      "title": "Background Layers"
    },
    "layers": [
      {
        "type": "WebGLTile",
        "properties": {
          "id": "s2",
          "layerControlExclusive": true,
          "title": "s2"
        },
        "style": {
          "variables": {
            "red": 1,
            "green": 2,
            "blue": 3,
            "redMax": 3000,
            "greenMax": 3000,
            "blueMax": 3000
          },
          "color": [
            "array",
            ["/", ["band", ["var", "red"]], ["var", "redMax"]],
            ["/", ["band", ["var", "green"]], ["var", "greenMax"]],
            ["/", ["band", ["var", "blue"]], ["var", "blueMax"]],
            1
          ],
          "gamma": 1.1
        },
        "source": {
          "type": "GeoTIFF",
          "normalize": false,
          "sources": [
            {
              "url": "https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif"
            }
          ]
        }
      },
      {
        "type": "Tile",
        "properties": {
          "id": "osm",
          "title": "Open Street Map",
          "layerControlExclusive": true
        },
        "visible": false,
        "opacity": 0.5,
        "source": {
          "type": "OSM"
        }
      }
    ]
  }
]'
></eox-map>`,Qn={title:"Elements/eox-layercontrol",tags:["autodocs"],component:"eox-layercontrol",parameters:{componentSubtitle:"Manage and configure OpenLayers map layers",layout:"centered"}},Oe={args:{idProperty:"id",titleProperty:"title",unstyled:!1},render:o=>g`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${o.idProperty}
        .titleProperty=${o.titleProperty}
        .unstyled=${o.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      ${Xr}
    </div>
  `},$e={args:{},render:()=>g`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#exclusive"></eox-layercontrol>
      <eox-map
        id="exclusive"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Tile",properties:{title:"Terrain Light",layerControlExclusive:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}},{type:"Tile",properties:{title:"EOxCloudless",layerControlExclusive:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1}])}
      >
      </eox-map>
    </div>
  `},De={args:{},render:()=>g`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#optional"></eox-layercontrol>
      <eox-map
        id="optional"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Tile",properties:{title:"EOxCloudless 2021",layerControlOptional:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1},{type:"Tile",properties:{title:"EOxCloudless 2020",layerControlOptional:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1},{type:"Tile",properties:{title:"EOxCloudless 2019",layerControlOptional:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2019_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1},{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}}])}
      >
      </eox-map>
    </div>
  `},Le={args:{},render:()=>g`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#expanded"></eox-layercontrol>
      <eox-map
        id="expanded"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}},{type:"Group",properties:{title:"Layer group",layerControlExpand:!0},layers:[{type:"Tile",properties:{title:"EOxCloudless"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1}]}])}
      >
      </eox-map>
    </div>
  `},Ae={args:{},render:()=>g`
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
      style="width: 400px; height: 300px; margin-left: 7px;"
      layers=${JSON.stringify([{type:"Vector",properties:{title:"Regions",id:"regions",description:"Ecological regions of the earth."},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"}},{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}}])}
    >
    </eox-map>
  `},Pe={args:{},render:()=>g`
    <eox-layercontrol
      .tools=${["config"]}
      for="eox-map#config"
    ></eox-layercontrol>
    <hr />
    <eox-map
      center="[-7000000, -500000]"
      zoom="4"
      id="config"
      style="width: 400px; height: 300px;"
      .layers=${[{type:"Tile",properties:{id:"customId",title:"Tile XYZ",layerControlToolsExpand:!0,layerConfig:{schema:{type:"object",properties:{vminmax:{type:"object",properties:{vmin:{type:"number",minimum:0,maximum:10,format:"range"},vmax:{type:"number",minimum:0,maximum:10,format:"range"}},format:"minmax"},cbar:{type:"string",enum:["rain","temperature"]}}}}},source:{type:"XYZ",url:"https://reccap2.api.dev.brockmann-consult.de/api/tiles/cop28~reccap2-9x108x139-0.0.1.zarr/deforested_biomass/{z}/{y}/{x}?crs=EPSG:3857&time=2018-01-01T00:00:00Z&vmin=0&vmax=3&cbar=rain"}},{type:"Tile",source:{type:"OSM"},properties:{title:"Base Map"}}]}
    >
    </eox-map>
  `},Me={args:{},render:()=>g`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#hidden"></eox-layercontrol>
      <eox-map
        id="hidden"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Vector",properties:{title:"Regions",id:"regions",layerControlHide:!0},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"}},{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}}])}
      >
      </eox-map>
    </div>
  `};var uo;const rt={args:{idProperty:"id",titleProperty:"title",unstyled:!1,noShadow:!1},render:o=>g(uo||(uo=Vt([`
    <div style="display: flex">
      <eox-layercontrol-layer
        .noShadow=`,`
        .idProperty=`,`
        .titleProperty=`,`
        .unstyled=`,`
      ></eox-layercontrol-layer>
      <eox-map
        id="single"
        style="width: 400px; height: 300px;"
        layers='[
          {
            "type": "Tile",
            "properties": {
              "id": "osm",
              "title": "Open Street Map"
            },
            "visible": true,
            "opacity": 0.5,
            "source": {
              "type": "OSM"
            }
          }
        ]'
      ></eox-map>
    </div>
    <script>
      const olMap = document.querySelector("eox-map#single").map;
      olMap.on("loadend", () => {
        const firstLayer = olMap.getLayers().getArray()[0];
        document.querySelector("eox-layercontrol-layer").layer = firstLayer;
        document.querySelector("eox-layercontrol-layer").olMap = olMap;
      });
    <\/script>
  `])),o.noShadow,o.idProperty,o.titleProperty,o.unstyled)};var ho;const nt={args:{unstyled:!1,noShadow:!1},render:o=>g(ho||(ho=Vt([`
    <div style="display: flex">
      <eox-layercontrol-layer-list
        .noShadow=`,`
        .unstyled=`,`
      ></eox-layercontrol-layer-list>
      <eox-map
        id="list"
        style="width: 400px; height: 300px;"
        layers='[
          {
            "type": "Tile",
            "opacity": 0.5,
            "visible": false,
            "properties": {
              "id": "wind",
              "title": "WIND"
            },
            "source": {
              "type": "TileWMS",
              "url": "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
              "params": {
                "LAYERS": "AWS_VIS_WIND_V_10M"
              }
            }
          },
          {
            "type": "Tile",
            "properties": {
              "id": "osm",
              "title": "Open Street Map"
            },
            "visible": true,
            "source": {
              "type": "OSM"
            }
          },
          {
            "type": "Tile",
            "properties": {
              "id": "osm2",
              "title": "Another OSM"
            },
            "visible": true,
            "source": {
              "type": "OSM"
            }
          }
        ]'
      ></eox-map>
    </div>
    <script>
      const olMapList = document.querySelector("eox-map#list").map;
      olMapList.once("loadend", () => {
        const layerCollection = olMapList.getLayers();
        document.querySelector("eox-layercontrol-layer-list").layers =
          layerCollection;
        document.querySelector("eox-layercontrol-layer-list").olMapList =
          olMapList;
      });
    <\/script>
  `])),o.noShadow,o.unstyled)},Ve={render:()=>g`
    <eox-layercontrol-tabs
      .noShadow=${!1}
      .actions=${["delete"]}
      .tabs=${["info","opacity","config"]}
    ></eox-layercontrol-tabs>
  `},Ie={args:{showLayerZoomState:!0},render:o=>g`
    <div style="display: flex">
      <eox-layercontrol
        .showLayerZoomState=${o.showLayerZoomState}
        for="eox-map#zoomstate"
      ></eox-layercontrol>
      <eox-map
        id="zoomstate"
        style="width: 600px; height: 300px; margin-left: 7px;"
        zoom="1"
        layers=${JSON.stringify([{type:"Vector",properties:{title:"Regions",id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},minZoom:2},{type:"Tile",properties:{id:"WIND",title:"WIND"},source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}},maxZoom:9}])}
      >
      </eox-map>
    </div>
  `},Ne={args:{unstyled:!0},render:o=>g`
    <div style="display: flex">
      <eox-layercontrol
        .unstyled=${o.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      ${Xr}
    </div>
  `};var fo,yo,mo,go,vo;Oe.parameters={...Oe.parameters,docs:{...(fo=Oe.parameters)==null?void 0:fo.docs,source:{originalSource:`{
  args: {
    idProperty: "id",
    titleProperty: "title",
    unstyled: false
  },
  render: args => html\`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=\${args.idProperty}
        .titleProperty=\${args.titleProperty}
        .unstyled=\${args.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      \${map}
    </div>
  \`
}`,...(mo=(yo=Oe.parameters)==null?void 0:yo.docs)==null?void 0:mo.source},description:{story:"Basic layercontrol setup.",...(vo=(go=Oe.parameters)==null?void 0:go.docs)==null?void 0:vo.description}}};var bo,xo,wo,Eo,So;$e.parameters={...$e.parameters,docs:{...(bo=$e.parameters)==null?void 0:bo.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#exclusive"></eox-layercontrol>
      <eox-map
        id="exclusive"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=\${JSON.stringify([{
    type: "Tile",
    properties: {
      title: "Terrain Light",
      layerControlExclusive: true
    },
    source: {
      type: "XYZ",
      url: "//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"
    }
  }, {
    type: "Tile",
    properties: {
      title: "EOxCloudless",
      layerControlExclusive: true
    },
    source: {
      type: "XYZ",
      url: "//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"
    },
    visible: false
  }])}
      >
      </eox-map>
    </div>
  \`
}`,...(wo=(xo=$e.parameters)==null?void 0:xo.docs)==null?void 0:wo.source},description:{story:"By adding the `layerControlExclusive` property to map layers,\nonly one of them at a time can be visualized.",...(So=(Eo=$e.parameters)==null?void 0:Eo.docs)==null?void 0:So.description}}};var Co,_o,To,Oo,$o;De.parameters={...De.parameters,docs:{...(Co=De.parameters)==null?void 0:Co.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#optional"></eox-layercontrol>
      <eox-map
        id="optional"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=\${JSON.stringify([{
    type: "Tile",
    properties: {
      title: "EOxCloudless 2021",
      layerControlOptional: true
    },
    source: {
      type: "XYZ",
      url: "//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"
    },
    visible: false
  }, {
    type: "Tile",
    properties: {
      title: "EOxCloudless 2020",
      layerControlOptional: true
    },
    source: {
      type: "XYZ",
      url: "//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg"
    },
    visible: false
  }, {
    type: "Tile",
    properties: {
      title: "EOxCloudless 2019",
      layerControlOptional: true
    },
    source: {
      type: "XYZ",
      url: "//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2019_3857/default/g/{z}/{y}/{x}.jpg"
    },
    visible: false
  }, {
    type: "Tile",
    properties: {
      title: "Terrain Light"
    },
    source: {
      type: "XYZ",
      url: "//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"
    }
  }])}
      >
      </eox-map>
    </div>
  \`
}`,...(To=(_o=De.parameters)==null?void 0:_o.docs)==null?void 0:To.source},description:{story:`By adding the \`layerControlOptional\` property to map layers,
they are not initially rendered in the layer list, but in a
selection interface. They can be added to the layer list manually.
Removing a layer puts it back into the optional list.`,...($o=(Oo=De.parameters)==null?void 0:Oo.docs)==null?void 0:$o.description}}};var Do,Lo,Ao,Po,Mo;Le.parameters={...Le.parameters,docs:{...(Do=Le.parameters)==null?void 0:Do.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#expanded"></eox-layercontrol>
      <eox-map
        id="expanded"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=\${JSON.stringify([{
    type: "Tile",
    properties: {
      title: "Terrain Light"
    },
    source: {
      type: "XYZ",
      url: "//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"
    }
  }, {
    type: "Group",
    properties: {
      title: "Layer group",
      layerControlExpand: true
    },
    layers: [{
      type: "Tile",
      properties: {
        title: "EOxCloudless"
      },
      source: {
        type: "XYZ",
        url: "//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"
      },
      visible: false
    }]
  }])}
      >
      </eox-map>
    </div>
  \`
}`,...(Ao=(Lo=Le.parameters)==null?void 0:Lo.docs)==null?void 0:Ao.source},description:{story:"By adding the `layerControlExpand` property to map layers,\nthey render in the layer control as opened.",...(Mo=(Po=Le.parameters)==null?void 0:Po.docs)==null?void 0:Mo.description}}};var Vo,Io,No,Ho,Ro;Ae.parameters={...Ae.parameters,docs:{...(Vo=Ae.parameters)==null?void 0:Vo.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
    <p>Default tools: info, opacity, config, remove, sort</p>
    <eox-layercontrol for="eox-map#tools"></eox-layercontrol>
    <hr />
    <p>Only one tool: info</p>
    <eox-layercontrol .tools=\${["info"]} for="eox-map#tools"></eox-layercontrol>
    <hr />
    <p>Only one tool: sort</p>
    <eox-layercontrol .tools=\${["sort"]} for="eox-map#tools"></eox-layercontrol>
    <hr />
    <p>No tools</p>
    <eox-layercontrol .tools=\${[]} for="eox-map#tools"></eox-layercontrol>
    <eox-map
      id="tools"
      style="width: 400px; height: 300px; margin-left: 7px;"
      layers=\${JSON.stringify([{
    type: "Vector",
    properties: {
      title: "Regions",
      id: "regions",
      description: "Ecological regions of the earth."
    },
    source: {
      type: "Vector",
      url: "https://openlayers.org/data/vector/ecoregions.json",
      format: "GeoJSON",
      attributions: "Regions: @ openlayers.org"
    }
  }, {
    type: "Tile",
    properties: {
      title: "Terrain Light"
    },
    source: {
      type: "XYZ",
      url: "//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"
    }
  }])}
    >
    </eox-map>
  \`
}`,...(No=(Io=Ae.parameters)==null?void 0:Io.docs)==null?void 0:No.source},description:{story:`The layer control accepts a "tools" array, which enable
extra functionalities for layers`,...(Ro=(Ho=Ae.parameters)==null?void 0:Ho.docs)==null?void 0:Ro.description}}};var Zo,Bo,Yo,zo,Xo;Pe.parameters={...Pe.parameters,docs:{...(Zo=Pe.parameters)==null?void 0:Zo.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
    <eox-layercontrol
      .tools=\${["config"]}
      for="eox-map#config"
    ></eox-layercontrol>
    <hr />
    <eox-map
      center="[-7000000, -500000]"
      zoom="4"
      id="config"
      style="width: 400px; height: 300px;"
      .layers=\${[{
    type: "Tile",
    properties: {
      id: "customId",
      title: "Tile XYZ",
      layerControlToolsExpand: true,
      layerConfig: {
        schema: {
          type: "object",
          properties: {
            vminmax: {
              type: "object",
              properties: {
                vmin: {
                  type: "number",
                  minimum: 0,
                  maximum: 10,
                  format: "range"
                },
                vmax: {
                  type: "number",
                  minimum: 0,
                  maximum: 10,
                  format: "range"
                }
              },
              format: "minmax"
            },
            cbar: {
              type: "string",
              enum: ["rain", "temperature"]
            }
          }
        }
      }
    },
    source: {
      type: "XYZ",
      url: "https://reccap2.api.dev.brockmann-consult.de/api/tiles/cop28~reccap2-9x108x139-0.0.1.zarr/deforested_biomass/{z}/{y}/{x}?crs=EPSG:3857&time=2018-01-01T00:00:00Z&vmin=0&vmax=3&cbar=rain"
      // tileUrlFunction: (tileCoord) => {
      //   const url =
      //     "https://reccap2.api.dev.brockmann-consult.de/api/tiles/cop28~reccap2-9x108x139-0.0.1.zarr/deforested_biomass/{z}/{y}/{x}?crs=EPSG%3A3857&time=2018-01-01T00%3A00%3A00Z&vmin=0&vmax=3&cbar=rain";
      //   return url
      //     .replace("{z}", tileCoord[0])
      //     .replace("{x}", tileCoord[1])
      //     .replace("{y}", tileCoord[2]);
      // },
    }
  }, {
    type: "Tile",
    source: {
      type: "OSM"
    },
    properties: {
      title: "Base Map"
    }
  }]}
    >
    </eox-map>
  \`
}`,...(Yo=(Bo=Pe.parameters)==null?void 0:Bo.docs)==null?void 0:Yo.source},description:{story:`The "config" tool reads settings passed via the "layerConfig" property,
e.g. rendering a from from a provided JSON schema that allows updating the
source url parameters.`,...(Xo=(zo=Pe.parameters)==null?void 0:zo.docs)==null?void 0:Xo.description}}};var ko,jo,Fo,Wo,Uo;Me.parameters={...Me.parameters,docs:{...(ko=Me.parameters)==null?void 0:ko.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#hidden"></eox-layercontrol>
      <eox-map
        id="hidden"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=\${JSON.stringify([{
    type: "Vector",
    properties: {
      title: "Regions",
      id: "regions",
      layerControlHide: true
    },
    source: {
      type: "Vector",
      url: "https://openlayers.org/data/vector/ecoregions.json",
      format: "GeoJSON",
      attributions: "Regions: @ openlayers.org"
    }
  }, {
    type: "Tile",
    properties: {
      title: "Terrain Light"
    },
    source: {
      type: "XYZ",
      url: "//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"
    }
  }])}
      >
      </eox-map>
    </div>
  \`
}`,...(Fo=(jo=Me.parameters)==null?void 0:jo.docs)==null?void 0:Fo.source},description:{story:"By adding the `layerControlHide` property to map layers,\nthey aren't displayed in the layer control at all (but may\nbe still rendered on the map).",...(Uo=(Wo=Me.parameters)==null?void 0:Wo.docs)==null?void 0:Uo.description}}};var qo,Go,Jo;rt.parameters={...rt.parameters,docs:{...(qo=rt.parameters)==null?void 0:qo.docs,source:{originalSource:`{
  args: {
    idProperty: "id",
    titleProperty: "title",
    unstyled: false,
    noShadow: false
  },
  render: args => html\`
    <div style="display: flex">
      <eox-layercontrol-layer
        .noShadow=\${args.noShadow}
        .idProperty=\${args.idProperty}
        .titleProperty=\${args.titleProperty}
        .unstyled=\${args.unstyled}
      ></eox-layercontrol-layer>
      <eox-map
        id="single"
        style="width: 400px; height: 300px;"
        layers='[
          {
            "type": "Tile",
            "properties": {
              "id": "osm",
              "title": "Open Street Map"
            },
            "visible": true,
            "opacity": 0.5,
            "source": {
              "type": "OSM"
            }
          }
        ]'
      ></eox-map>
    </div>
    <script>
      const olMap = document.querySelector("eox-map#single").map;
      olMap.on("loadend", () => {
        const firstLayer = olMap.getLayers().getArray()[0];
        document.querySelector("eox-layercontrol-layer").layer = firstLayer;
        document.querySelector("eox-layercontrol-layer").olMap = olMap;
      });
    <\/script>
  \`
}`,...(Jo=(Go=rt.parameters)==null?void 0:Go.docs)==null?void 0:Jo.source}}};var Ko,Qo,er;nt.parameters={...nt.parameters,docs:{...(Ko=nt.parameters)==null?void 0:Ko.docs,source:{originalSource:`{
  args: {
    unstyled: false,
    noShadow: false
  },
  render: args => html\`
    <div style="display: flex">
      <eox-layercontrol-layer-list
        .noShadow=\${args.noShadow}
        .unstyled=\${args.unstyled}
      ></eox-layercontrol-layer-list>
      <eox-map
        id="list"
        style="width: 400px; height: 300px;"
        layers='[
          {
            "type": "Tile",
            "opacity": 0.5,
            "visible": false,
            "properties": {
              "id": "wind",
              "title": "WIND"
            },
            "source": {
              "type": "TileWMS",
              "url": "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
              "params": {
                "LAYERS": "AWS_VIS_WIND_V_10M"
              }
            }
          },
          {
            "type": "Tile",
            "properties": {
              "id": "osm",
              "title": "Open Street Map"
            },
            "visible": true,
            "source": {
              "type": "OSM"
            }
          },
          {
            "type": "Tile",
            "properties": {
              "id": "osm2",
              "title": "Another OSM"
            },
            "visible": true,
            "source": {
              "type": "OSM"
            }
          }
        ]'
      ></eox-map>
    </div>
    <script>
      const olMapList = document.querySelector("eox-map#list").map;
      olMapList.once("loadend", () => {
        const layerCollection = olMapList.getLayers();
        document.querySelector("eox-layercontrol-layer-list").layers =
          layerCollection;
        document.querySelector("eox-layercontrol-layer-list").olMapList =
          olMapList;
      });
    <\/script>
  \`
}`,...(er=(Qo=nt.parameters)==null?void 0:Qo.docs)==null?void 0:er.source}}};var tr,or,rr,nr,ir;Ve.parameters={...Ve.parameters,docs:{...(tr=Ve.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  render: () => html\`
    <eox-layercontrol-tabs
      .noShadow=\${false}
      .actions=\${["delete"]}
      .tabs=\${["info", "opacity", "config"]}
    ></eox-layercontrol-tabs>
  \`
}`,...(rr=(or=Ve.parameters)==null?void 0:or.docs)==null?void 0:rr.source},description:{story:"Layer control tabs",...(ir=(nr=Ve.parameters)==null?void 0:nr.docs)==null?void 0:ir.description}}};var ar,sr,lr,dr,pr;Ie.parameters={...Ie.parameters,docs:{...(ar=Ie.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    showLayerZoomState: true
  },
  render: args => html\`
    <div style="display: flex">
      <eox-layercontrol
        .showLayerZoomState=\${args.showLayerZoomState}
        for="eox-map#zoomstate"
      ></eox-layercontrol>
      <eox-map
        id="zoomstate"
        style="width: 600px; height: 300px; margin-left: 7px;"
        zoom="1"
        layers=\${JSON.stringify([{
    type: "Vector",
    properties: {
      title: "Regions",
      id: "regions"
    },
    source: {
      type: "Vector",
      url: "https://openlayers.org/data/vector/ecoregions.json",
      format: "GeoJSON",
      attributions: "Regions: @ openlayers.org"
    },
    minZoom: 2
  }, {
    type: "Tile",
    properties: {
      id: "WIND",
      title: "WIND"
    },
    source: {
      type: "TileWMS",
      url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
      params: {
        LAYERS: "AWS_VIS_WIND_V_10M"
      }
    },
    maxZoom: 9
  }])}
      >
      </eox-map>
    </div>
  \`
}`,...(lr=(sr=Ie.parameters)==null?void 0:sr.docs)==null?void 0:lr.source},description:{story:"Zoom layer state based on `minZoom` and `maxZoom`.\nThe color change state only visible when `showLayerZoomState` is set inside layer properties.",...(pr=(dr=Ie.parameters)==null?void 0:dr.docs)==null?void 0:pr.description}}};var cr,ur,hr,fr,yr;Ne.parameters={...Ne.parameters,docs:{...(cr=Ne.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: {
    unstyled: true
  },
  render: args => html\`
    <div style="display: flex">
      <eox-layercontrol
        .unstyled=\${args.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      \${map}
    </div>
  \`
}`,...(hr=(ur=Ne.parameters)==null?void 0:ur.docs)==null?void 0:hr.source},description:{story:"Unstyled version of the Element",...(yr=(fr=Ne.parameters)==null?void 0:fr.docs)==null?void 0:yr.description}}};const ei=["Primary","ExclusiveLayers","OptionalLayers","ExpandedLayers","Tools","LayerConfig","HiddenLayers","SingleLayer","LayerList","Tabs","LayerZoomState","Unstyled"];export{$e as ExclusiveLayers,Le as ExpandedLayers,Me as HiddenLayers,Pe as LayerConfig,nt as LayerList,Ie as LayerZoomState,De as OptionalLayers,Oe as Primary,rt as SingleLayer,Ve as Tabs,Ae as Tools,Ne as Unstyled,ei as __namedExportsOrder,Qn as default};
