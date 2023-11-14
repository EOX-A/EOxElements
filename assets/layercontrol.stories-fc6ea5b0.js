var Ft=Object.freeze,Wt=Object.defineProperty;var Pr=(o,e,t)=>e in o?Wt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var V=(o,e,t)=>(Pr(o,typeof e!="symbol"?e+"":e,t),t),Ar=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)};var P=(o,e,t)=>(Ar(o,e,"read from private field"),t?t.call(o):e.get(o)),A=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)};var _t=(o,e)=>Ft(Wt(o,"raw",{value:Ft(e||o.slice())}));import{T as he,w as We,s as ae,x as g}from"./lit-element-10b89e96.js";import"./main-2b2fe3fe.js";import{e as or,i as rr,t as fe,n as K,o as Qe,a as Mr}from"./unsafe-html-786c6b69.js";import{m as nr,f as Vr}from"./directive-helpers-4f2bc21b.js";import{b as Nr}from"./button-f0c29825.js";import{r as Hr,c as ir,s as Ir}from"./slider-8f351beb.js";import"./state-2f6736ea.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2a993550.js";import"../sb-preview/runtime.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rr=or(class extends rr{constructor(){super(...arguments),this.key=he}render(o,e){return this.key=o,e}update(o,[e,t]){return e!==this.key&&(nr(o),this.key=e),t}});/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function jt(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})),t.push.apply(t,r)}return t}function q(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?jt(Object(t),!0).forEach(function(r){Zr(o,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):jt(Object(t)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(t,r))})}return o}function et(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?et=function(e){return typeof e}:et=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},et(o)}function Zr(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function Q(){return Q=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])}return o},Q.apply(this,arguments)}function Br(o,e){if(o==null)return{};var t={},r=Object.keys(o),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(t[n]=o[n]);return t}function Xr(o,e){if(o==null)return{};var t=Br(o,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(o,r)&&(t[r]=o[r])}return t}var Yr="1.15.0";function J(o){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(o)}var ee=J(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ke=J(/Edge/i),qt=J(/firefox/i),Re=J(/safari/i)&&!J(/chrome/i)&&!J(/android/i),ar=J(/iP(ad|od|hone)/i),sr=J(/chrome/i)&&J(/android/i),lr={capture:!1,passive:!1};function x(o,e,t){o.addEventListener(e,t,!ee&&lr)}function b(o,e,t){o.removeEventListener(e,t,!ee&&lr)}function it(o,e){if(e){if(e[0]===">"&&(e=e.substring(1)),o)try{if(o.matches)return o.matches(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e)}catch{return!1}return!1}}function kr(o){return o.host&&o!==document&&o.host.nodeType?o.host:o.parentNode}function W(o,e,t,r){if(o){t=t||document;do{if(e!=null&&(e[0]===">"?o.parentNode===t&&it(o,e):it(o,e))||r&&o===t)return o;if(o===t)break}while(o=kr(o))}return null}var Gt=/\s+/g;function R(o,e,t){if(o&&e)if(o.classList)o.classList[t?"add":"remove"](e);else{var r=(" "+o.className+" ").replace(Gt," ").replace(" "+e+" "," ");o.className=(r+(t?" "+e:"")).replace(Gt," ")}}function h(o,e,t){var r=o&&o.style;if(r){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(o,""):o.currentStyle&&(t=o.currentStyle),e===void 0?t:t[e];!(e in r)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),r[e]=t+(typeof t=="string"?"":"px")}}function be(o,e){var t="";if(typeof o=="string")t=o;else do{var r=h(o,"transform");r&&r!=="none"&&(t=r+" "+t)}while(!e&&(o=o.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(t)}function dr(o,e,t){if(o){var r=o.getElementsByTagName(e),n=0,i=r.length;if(t)for(;n<i;n++)t(r[n],n);return r}return[]}function j(){var o=document.scrollingElement;return o||document.documentElement}function O(o,e,t,r,n){if(!(!o.getBoundingClientRect&&o!==window)){var i,a,s,l,d,c,u;if(o!==window&&o.parentNode&&o!==j()?(i=o.getBoundingClientRect(),a=i.top,s=i.left,l=i.bottom,d=i.right,c=i.height,u=i.width):(a=0,s=0,l=window.innerHeight,d=window.innerWidth,c=window.innerHeight,u=window.innerWidth),(e||t)&&o!==window&&(n=n||o.parentNode,!ee))do if(n&&n.getBoundingClientRect&&(h(n,"transform")!=="none"||t&&h(n,"position")!=="static")){var m=n.getBoundingClientRect();a-=m.top+parseInt(h(n,"border-top-width")),s-=m.left+parseInt(h(n,"border-left-width")),l=a+i.height,d=s+i.width;break}while(n=n.parentNode);if(r&&o!==window){var E=be(n||o),v=E&&E.a,w=E&&E.d;E&&(a/=w,s/=v,u/=v,c/=w,l=a+c,d=s+u)}return{top:a,left:s,bottom:l,right:d,width:u,height:c}}}function Ut(o,e,t){for(var r=ie(o,!0),n=O(o)[e];r;){var i=O(r)[t],a=void 0;if(t==="top"||t==="left"?a=n>=i:a=n<=i,!a)return r;if(r===j())break;r=ie(r,!1)}return!1}function xe(o,e,t,r){for(var n=0,i=0,a=o.children;i<a.length;){if(a[i].style.display!=="none"&&a[i]!==f.ghost&&(r||a[i]!==f.dragged)&&W(a[i],t.draggable,o,!1)){if(n===e)return a[i];n++}i++}return null}function Bt(o,e){for(var t=o.lastElementChild;t&&(t===f.ghost||h(t,"display")==="none"||e&&!it(t,e));)t=t.previousElementSibling;return t||null}function X(o,e){var t=0;if(!o||!o.parentNode)return-1;for(;o=o.previousElementSibling;)o.nodeName.toUpperCase()!=="TEMPLATE"&&o!==f.clone&&(!e||it(o,e))&&t++;return t}function Jt(o){var e=0,t=0,r=j();if(o)do{var n=be(o),i=n.a,a=n.d;e+=o.scrollLeft*i,t+=o.scrollTop*a}while(o!==r&&(o=o.parentNode));return[e,t]}function zr(o,e){for(var t in o)if(o.hasOwnProperty(t)){for(var r in e)if(e.hasOwnProperty(r)&&e[r]===o[t][r])return Number(t)}return-1}function ie(o,e){if(!o||!o.getBoundingClientRect)return j();var t=o,r=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var n=h(t);if(t.clientWidth<t.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return j();if(r||e)return t;r=!0}}while(t=t.parentNode);return j()}function Fr(o,e){if(o&&e)for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o}function Tt(o,e){return Math.round(o.top)===Math.round(e.top)&&Math.round(o.left)===Math.round(e.left)&&Math.round(o.height)===Math.round(e.height)&&Math.round(o.width)===Math.round(e.width)}var Ze;function pr(o,e){return function(){if(!Ze){var t=arguments,r=this;t.length===1?o.call(r,t[0]):o.apply(r,t),Ze=setTimeout(function(){Ze=void 0},e)}}}function Wr(){clearTimeout(Ze),Ze=void 0}function ur(o,e,t){o.scrollLeft+=e,o.scrollTop+=t}function cr(o){var e=window.Polymer,t=window.jQuery||window.Zepto;return e&&e.dom?e.dom(o).cloneNode(!0):t?t(o).clone(!0)[0]:o.cloneNode(!0)}var B="Sortable"+new Date().getTime();function jr(){var o=[],e;return{captureAnimationState:function(){if(o=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(n){if(!(h(n,"display")==="none"||n===f.ghost)){o.push({target:n,rect:O(n)});var i=q({},o[o.length-1].rect);if(n.thisAnimationDuration){var a=be(n,!0);a&&(i.top-=a.f,i.left-=a.e)}n.fromRect=i}})}},addAnimationState:function(r){o.push(r)},removeAnimationState:function(r){o.splice(zr(o,{target:r}),1)},animateAll:function(r){var n=this;if(!this.options.animation){clearTimeout(e),typeof r=="function"&&r();return}var i=!1,a=0;o.forEach(function(s){var l=0,d=s.target,c=d.fromRect,u=O(d),m=d.prevFromRect,E=d.prevToRect,v=s.rect,w=be(d,!0);w&&(u.top-=w.f,u.left-=w.e),d.toRect=u,d.thisAnimationDuration&&Tt(m,u)&&!Tt(c,u)&&(v.top-u.top)/(v.left-u.left)===(c.top-u.top)/(c.left-u.left)&&(l=Gr(v,m,E,n.options)),Tt(u,c)||(d.prevFromRect=c,d.prevToRect=u,l||(l=n.options.animation),n.animate(d,v,u,l)),l&&(i=!0,a=Math.max(a,l),clearTimeout(d.animationResetTimer),d.animationResetTimer=setTimeout(function(){d.animationTime=0,d.prevFromRect=null,d.fromRect=null,d.prevToRect=null,d.thisAnimationDuration=null},l),d.thisAnimationDuration=l)}),clearTimeout(e),i?e=setTimeout(function(){typeof r=="function"&&r()},a):typeof r=="function"&&r(),o=[]},animate:function(r,n,i,a){if(a){h(r,"transition",""),h(r,"transform","");var s=be(this.el),l=s&&s.a,d=s&&s.d,c=(n.left-i.left)/(l||1),u=(n.top-i.top)/(d||1);r.animatingX=!!c,r.animatingY=!!u,h(r,"transform","translate3d("+c+"px,"+u+"px,0)"),this.forRepaintDummy=qr(r),h(r,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),h(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){h(r,"transition",""),h(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},a)}}}}function qr(o){return o.offsetWidth}function Gr(o,e,t,r){return Math.sqrt(Math.pow(e.top-o.top,2)+Math.pow(e.left-o.left,2))/Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))*r.animation}var ye=[],Ot={initializeByDefault:!0},ze={mount:function(e){for(var t in Ot)Ot.hasOwnProperty(t)&&!(t in e)&&(e[t]=Ot[t]);ye.forEach(function(r){if(r.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),ye.push(e)},pluginEvent:function(e,t,r){var n=this;this.eventCanceled=!1,r.cancel=function(){n.eventCanceled=!0};var i=e+"Global";ye.forEach(function(a){t[a.pluginName]&&(t[a.pluginName][i]&&t[a.pluginName][i](q({sortable:t},r)),t.options[a.pluginName]&&t[a.pluginName][e]&&t[a.pluginName][e](q({sortable:t},r)))})},initializePlugins:function(e,t,r,n){ye.forEach(function(s){var l=s.pluginName;if(!(!e.options[l]&&!s.initializeByDefault)){var d=new s(e,t,e.options);d.sortable=e,d.options=e.options,e[l]=d,Q(r,d.defaults)}});for(var i in e.options)if(e.options.hasOwnProperty(i)){var a=this.modifyOption(e,i,e.options[i]);typeof a<"u"&&(e.options[i]=a)}},getEventProperties:function(e,t){var r={};return ye.forEach(function(n){typeof n.eventProperties=="function"&&Q(r,n.eventProperties.call(t[n.pluginName],e))}),r},modifyOption:function(e,t,r){var n;return ye.forEach(function(i){e[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[t]=="function"&&(n=i.optionListeners[t].call(e[i.pluginName],r))}),n}};function Ur(o){var e=o.sortable,t=o.rootEl,r=o.name,n=o.targetEl,i=o.cloneEl,a=o.toEl,s=o.fromEl,l=o.oldIndex,d=o.newIndex,c=o.oldDraggableIndex,u=o.newDraggableIndex,m=o.originalEvent,E=o.putSortable,v=o.extraEventProperties;if(e=e||t&&t[B],!!e){var w,Y=e.options,G="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!ee&&!ke?w=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(w=document.createEvent("Event"),w.initEvent(r,!0,!0)),w.to=a||t,w.from=s||t,w.item=n||t,w.clone=i,w.oldIndex=l,w.newIndex=d,w.oldDraggableIndex=c,w.newDraggableIndex=u,w.originalEvent=m,w.pullMode=E?E.lastPutMode:void 0;var L=q(q({},v),ze.getEventProperties(r,e));for(var k in L)w[k]=L[k];t&&t.dispatchEvent(w),Y[G]&&Y[G].call(e,w)}}var Jr=["evt"],N=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.evt,i=Xr(r,Jr);ze.pluginEvent.bind(f)(e,t,q({dragEl:p,parentEl:_,ghostEl:y,rootEl:S,nextEl:ce,lastDownEl:tt,cloneEl:C,cloneHidden:ne,dragStarted:Ne,putSortable:$,activeSortable:f.active,originalEvent:n,oldIndex:ve,oldDraggableIndex:Be,newIndex:Z,newDraggableIndex:re,hideGhostForTarget:gr,unhideGhostForTarget:mr,cloneNowHidden:function(){ne=!0},cloneNowShown:function(){ne=!1},dispatchSortableEvent:function(s){M({sortable:t,name:s,originalEvent:n})}},i))};function M(o){Ur(q({putSortable:$,cloneEl:C,targetEl:p,rootEl:S,oldIndex:ve,oldDraggableIndex:Be,newIndex:Z,newDraggableIndex:re},o))}var p,_,y,S,ce,tt,C,ne,ve,Z,Be,re,je,$,me=!1,at=!1,st=[],pe,z,$t,Dt,Kt,Qt,Ne,ge,Xe,Ye=!1,qe=!1,ot,D,Lt=[],Nt=!1,lt=[],Ct=typeof document<"u",Ge=ar,eo=ke||ee?"cssFloat":"float",Kr=Ct&&!sr&&!ar&&"draggable"in document.createElement("div"),hr=function(){if(Ct){if(ee)return!1;var o=document.createElement("x");return o.style.cssText="pointer-events:auto",o.style.pointerEvents==="auto"}}(),fr=function(e,t){var r=h(e),n=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),i=xe(e,0,t),a=xe(e,1,t),s=i&&h(i),l=a&&h(a),d=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+O(i).width,c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+O(a).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&s.float&&s.float!=="none"){var u=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===u)?"vertical":"horizontal"}return i&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||d>=n&&r[eo]==="none"||a&&r[eo]==="none"&&d+c>n)?"vertical":"horizontal"},Qr=function(e,t,r){var n=r?e.left:e.top,i=r?e.right:e.bottom,a=r?e.width:e.height,s=r?t.left:t.top,l=r?t.right:t.bottom,d=r?t.width:t.height;return n===s||i===l||n+a/2===s+d/2},en=function(e,t){var r;return st.some(function(n){var i=n[B].options.emptyInsertThreshold;if(!(!i||Bt(n))){var a=O(n),s=e>=a.left-i&&e<=a.right+i,l=t>=a.top-i&&t<=a.bottom+i;if(s&&l)return r=n}}),r},yr=function(e){function t(i,a){return function(s,l,d,c){var u=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(i==null&&(a||u))return!0;if(i==null||i===!1)return!1;if(a&&i==="clone")return i;if(typeof i=="function")return t(i(s,l,d,c),a)(s,l,d,c);var m=(a?s:l).options.group.name;return i===!0||typeof i=="string"&&i===m||i.join&&i.indexOf(m)>-1}}var r={},n=e.group;(!n||et(n)!="object")&&(n={name:n}),r.name=n.name,r.checkPull=t(n.pull,!0),r.checkPut=t(n.put),r.revertClone=n.revertClone,e.group=r},gr=function(){!hr&&y&&h(y,"display","none")},mr=function(){!hr&&y&&h(y,"display","")};Ct&&!sr&&document.addEventListener("click",function(o){if(at)return o.preventDefault(),o.stopPropagation&&o.stopPropagation(),o.stopImmediatePropagation&&o.stopImmediatePropagation(),at=!1,!1},!0);var ue=function(e){if(p){e=e.touches?e.touches[0]:e;var t=en(e.clientX,e.clientY);if(t){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);r.target=r.rootEl=t,r.preventDefault=void 0,r.stopPropagation=void 0,t[B]._onDragOver(r)}}},tn=function(e){p&&p.parentNode[B]._isOutsideThisEl(e.target)};function f(o,e){if(!(o&&o.nodeType&&o.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(o));this.el=o,this.options=e=Q({},e),o[B]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(o.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return fr(o,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:f.supportPointer!==!1&&"PointerEvent"in window&&!Re,emptyInsertThreshold:5};ze.initializePlugins(this,o,t);for(var r in t)!(r in e)&&(e[r]=t[r]);yr(e);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=e.forceFallback?!1:Kr,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?x(o,"pointerdown",this._onTapStart):(x(o,"mousedown",this._onTapStart),x(o,"touchstart",this._onTapStart)),this.nativeDraggable&&(x(o,"dragover",this),x(o,"dragenter",this)),st.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Q(this,jr())}f.prototype={constructor:f,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(ge=null)},_getDirection:function(e,t){return typeof this.options.direction=="function"?this.options.direction.call(this,e,t,p):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,r=this.el,n=this.options,i=n.preventOnFilter,a=e.type,s=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,l=(s||e).target,d=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,c=n.filter;if(pn(r),!p&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||n.disabled)&&!d.isContentEditable&&!(!this.nativeDraggable&&Re&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=W(l,n.draggable,r,!1),!(l&&l.animated)&&tt!==l)){if(ve=X(l),Be=X(l,n.draggable),typeof c=="function"){if(c.call(this,e,l,this)){M({sortable:t,rootEl:d,name:"filter",targetEl:l,toEl:r,fromEl:r}),N("filter",t,{evt:e}),i&&e.cancelable&&e.preventDefault();return}}else if(c&&(c=c.split(",").some(function(u){if(u=W(d,u.trim(),r,!1),u)return M({sortable:t,rootEl:u,name:"filter",targetEl:l,fromEl:r,toEl:r}),N("filter",t,{evt:e}),!0}),c)){i&&e.cancelable&&e.preventDefault();return}n.handle&&!W(d,n.handle,r,!1)||this._prepareDragStart(e,s,l)}}},_prepareDragStart:function(e,t,r){var n=this,i=n.el,a=n.options,s=i.ownerDocument,l;if(r&&!p&&r.parentNode===i){var d=O(r);if(S=i,p=r,_=p.parentNode,ce=p.nextSibling,tt=r,je=a.group,f.dragged=p,pe={target:p,clientX:(t||e).clientX,clientY:(t||e).clientY},Kt=pe.clientX-d.left,Qt=pe.clientY-d.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,p.style["will-change"]="all",l=function(){if(N("delayEnded",n,{evt:e}),f.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!qt&&n.nativeDraggable&&(p.draggable=!0),n._triggerDragStart(e,t),M({sortable:n,name:"choose",originalEvent:e}),R(p,a.chosenClass,!0)},a.ignore.split(",").forEach(function(c){dr(p,c.trim(),Pt)}),x(s,"dragover",ue),x(s,"mousemove",ue),x(s,"touchmove",ue),x(s,"mouseup",n._onDrop),x(s,"touchend",n._onDrop),x(s,"touchcancel",n._onDrop),qt&&this.nativeDraggable&&(this.options.touchStartThreshold=4,p.draggable=!0),N("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(ke||ee))){if(f.eventCanceled){this._onDrop();return}x(s,"mouseup",n._disableDelayedDrag),x(s,"touchend",n._disableDelayedDrag),x(s,"touchcancel",n._disableDelayedDrag),x(s,"mousemove",n._delayedDragTouchMoveHandler),x(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&x(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){p&&Pt(p),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;b(e,"mouseup",this._disableDelayedDrag),b(e,"touchend",this._disableDelayedDrag),b(e,"touchcancel",this._disableDelayedDrag),b(e,"mousemove",this._delayedDragTouchMoveHandler),b(e,"touchmove",this._delayedDragTouchMoveHandler),b(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||e.pointerType=="touch"&&e,!this.nativeDraggable||t?this.options.supportPointer?x(document,"pointermove",this._onTouchMove):t?x(document,"touchmove",this._onTouchMove):x(document,"mousemove",this._onTouchMove):(x(p,"dragend",this),x(S,"dragstart",this._onDragStart));try{document.selection?rt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,t){if(me=!1,S&&p){N("dragStarted",this,{evt:t}),this.nativeDraggable&&x(document,"dragover",tn);var r=this.options;!e&&R(p,r.dragClass,!1),R(p,r.ghostClass,!0),f.active=this,e&&this._appendGhost(),M({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(z){this._lastX=z.clientX,this._lastY=z.clientY,gr();for(var e=document.elementFromPoint(z.clientX,z.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(z.clientX,z.clientY),e!==t);)t=e;if(p.parentNode[B]._isOutsideThisEl(e),t)do{if(t[B]){var r=void 0;if(r=t[B]._onDragOver({clientX:z.clientX,clientY:z.clientY,target:e,rootEl:t}),r&&!this.options.dragoverBubble)break}e=t}while(t=t.parentNode);mr()}},_onTouchMove:function(e){if(pe){var t=this.options,r=t.fallbackTolerance,n=t.fallbackOffset,i=e.touches?e.touches[0]:e,a=y&&be(y,!0),s=y&&a&&a.a,l=y&&a&&a.d,d=Ge&&D&&Jt(D),c=(i.clientX-pe.clientX+n.x)/(s||1)+(d?d[0]-Lt[0]:0)/(s||1),u=(i.clientY-pe.clientY+n.y)/(l||1)+(d?d[1]-Lt[1]:0)/(l||1);if(!f.active&&!me){if(r&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<r)return;this._onDragStart(e,!0)}if(y){a?(a.e+=c-($t||0),a.f+=u-(Dt||0)):a={a:1,b:0,c:0,d:1,e:c,f:u};var m="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");h(y,"webkitTransform",m),h(y,"mozTransform",m),h(y,"msTransform",m),h(y,"transform",m),$t=c,Dt=u,z=i}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!y){var e=this.options.fallbackOnBody?document.body:S,t=O(p,!0,Ge,!0,e),r=this.options;if(Ge){for(D=e;h(D,"position")==="static"&&h(D,"transform")==="none"&&D!==document;)D=D.parentNode;D!==document.body&&D!==document.documentElement?(D===document&&(D=j()),t.top+=D.scrollTop,t.left+=D.scrollLeft):D=j(),Lt=Jt(D)}y=p.cloneNode(!0),R(y,r.ghostClass,!1),R(y,r.fallbackClass,!0),R(y,r.dragClass,!0),h(y,"transition",""),h(y,"transform",""),h(y,"box-sizing","border-box"),h(y,"margin",0),h(y,"top",t.top),h(y,"left",t.left),h(y,"width",t.width),h(y,"height",t.height),h(y,"opacity","0.8"),h(y,"position",Ge?"absolute":"fixed"),h(y,"zIndex","100000"),h(y,"pointerEvents","none"),f.ghost=y,e.appendChild(y),h(y,"transform-origin",Kt/parseInt(y.style.width)*100+"% "+Qt/parseInt(y.style.height)*100+"%")}},_onDragStart:function(e,t){var r=this,n=e.dataTransfer,i=r.options;if(N("dragStart",this,{evt:e}),f.eventCanceled){this._onDrop();return}N("setupClone",this),f.eventCanceled||(C=cr(p),C.removeAttribute("id"),C.draggable=!1,C.style["will-change"]="",this._hideClone(),R(C,this.options.chosenClass,!1),f.clone=C),r.cloneId=rt(function(){N("clone",r),!f.eventCanceled&&(r.options.removeCloneOnHide||S.insertBefore(C,p),r._hideClone(),M({sortable:r,name:"clone"}))}),!t&&R(p,i.dragClass,!0),t?(at=!0,r._loopId=setInterval(r._emulateDragOver,50)):(b(document,"mouseup",r._onDrop),b(document,"touchend",r._onDrop),b(document,"touchcancel",r._onDrop),n&&(n.effectAllowed="move",i.setData&&i.setData.call(r,n,p)),x(document,"drop",r),h(p,"transform","translateZ(0)")),me=!0,r._dragStartId=rt(r._dragStarted.bind(r,t,e)),x(document,"selectstart",r),Ne=!0,Re&&h(document.body,"user-select","none")},_onDragOver:function(e){var t=this.el,r=e.target,n,i,a,s=this.options,l=s.group,d=f.active,c=je===l,u=s.sort,m=$||d,E,v=this,w=!1;if(Nt)return;function Y(_e,Dr){N(_e,v,q({evt:e,isOwner:c,axis:E?"vertical":"horizontal",revert:a,dragRect:n,targetRect:i,canSort:u,fromSortable:m,target:r,completed:L,onMove:function(zt,Lr){return Ue(S,t,p,n,zt,O(zt),e,Lr)},changed:k},Dr))}function G(){Y("dragOverAnimationCapture"),v.captureAnimationState(),v!==m&&m.captureAnimationState()}function L(_e){return Y("dragOverCompleted",{insertion:_e}),_e&&(c?d._hideClone():d._showClone(v),v!==m&&(R(p,$?$.options.ghostClass:d.options.ghostClass,!1),R(p,s.ghostClass,!0)),$!==v&&v!==f.active?$=v:v===f.active&&$&&($=null),m===v&&(v._ignoreWhileAnimating=r),v.animateAll(function(){Y("dragOverAnimationComplete"),v._ignoreWhileAnimating=null}),v!==m&&(m.animateAll(),m._ignoreWhileAnimating=null)),(r===p&&!p.animated||r===t&&!r.animated)&&(ge=null),!s.dragoverBubble&&!e.rootEl&&r!==document&&(p.parentNode[B]._isOutsideThisEl(e.target),!_e&&ue(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),w=!0}function k(){Z=X(p),re=X(p,s.draggable),M({sortable:v,name:"change",toEl:t,newIndex:Z,newDraggableIndex:re,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),r=W(r,s.draggable,t,!0),Y("dragOver"),f.eventCanceled)return w;if(p.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||v._ignoreWhileAnimating===r)return L(!1);if(at=!1,d&&!s.disabled&&(c?u||(a=_!==S):$===this||(this.lastPutMode=je.checkPull(this,d,p,e))&&l.checkPut(this,d,p,e))){if(E=this._getDirection(e,r)==="vertical",n=O(p),Y("dragOverValid"),f.eventCanceled)return w;if(a)return _=S,G(),this._hideClone(),Y("revert"),f.eventCanceled||(ce?S.insertBefore(p,ce):S.appendChild(p)),L(!0);var H=Bt(t,s.draggable);if(!H||an(e,E,this)&&!H.animated){if(H===p)return L(!1);if(H&&t===e.target&&(r=H),r&&(i=O(r)),Ue(S,t,p,n,r,i,e,!!r)!==!1)return G(),H&&H.nextSibling?t.insertBefore(p,H.nextSibling):t.appendChild(p),_=t,k(),L(!0)}else if(H&&nn(e,E,this)){var se=xe(t,0,s,!0);if(se===p)return L(!1);if(r=se,i=O(r),Ue(S,t,p,n,r,i,e,!1)!==!1)return G(),t.insertBefore(p,se),_=t,k(),L(!0)}else if(r.parentNode===t){i=O(r);var F=0,le,we=p.parentNode!==t,I=!Qr(p.animated&&p.toRect||n,r.animated&&r.toRect||i,E),Ee=E?"top":"left",te=Ut(r,"top","top")||Ut(p,"top","top"),Se=te?te.scrollTop:void 0;ge!==r&&(le=i[Ee],Ye=!1,qe=!I&&s.invertSwap||we),F=sn(e,r,i,E,I?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,qe,ge===r);var U;if(F!==0){var de=X(p);do de-=F,U=_.children[de];while(U&&(h(U,"display")==="none"||U===y))}if(F===0||U===r)return L(!1);ge=r,Xe=F;var Ce=r.nextElementSibling,oe=!1;oe=F===1;var Fe=Ue(S,t,p,n,r,i,e,oe);if(Fe!==!1)return(Fe===1||Fe===-1)&&(oe=Fe===1),Nt=!0,setTimeout(rn,30),G(),oe&&!Ce?t.appendChild(p):r.parentNode.insertBefore(p,oe?Ce:r),te&&ur(te,0,Se-te.scrollTop),_=p.parentNode,le!==void 0&&!qe&&(ot=Math.abs(le-O(r)[Ee])),k(),L(!0)}if(t.contains(p))return L(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){b(document,"mousemove",this._onTouchMove),b(document,"touchmove",this._onTouchMove),b(document,"pointermove",this._onTouchMove),b(document,"dragover",ue),b(document,"mousemove",ue),b(document,"touchmove",ue)},_offUpEvents:function(){var e=this.el.ownerDocument;b(e,"mouseup",this._onDrop),b(e,"touchend",this._onDrop),b(e,"pointerup",this._onDrop),b(e,"touchcancel",this._onDrop),b(document,"selectstart",this)},_onDrop:function(e){var t=this.el,r=this.options;if(Z=X(p),re=X(p,r.draggable),N("drop",this,{evt:e}),_=p&&p.parentNode,Z=X(p),re=X(p,r.draggable),f.eventCanceled){this._nulling();return}me=!1,qe=!1,Ye=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Ht(this.cloneId),Ht(this._dragStartId),this.nativeDraggable&&(b(document,"drop",this),b(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Re&&h(document.body,"user-select",""),h(p,"transform",""),e&&(Ne&&(e.cancelable&&e.preventDefault(),!r.dropBubble&&e.stopPropagation()),y&&y.parentNode&&y.parentNode.removeChild(y),(S===_||$&&$.lastPutMode!=="clone")&&C&&C.parentNode&&C.parentNode.removeChild(C),p&&(this.nativeDraggable&&b(p,"dragend",this),Pt(p),p.style["will-change"]="",Ne&&!me&&R(p,$?$.options.ghostClass:this.options.ghostClass,!1),R(p,this.options.chosenClass,!1),M({sortable:this,name:"unchoose",toEl:_,newIndex:null,newDraggableIndex:null,originalEvent:e}),S!==_?(Z>=0&&(M({rootEl:_,name:"add",toEl:_,fromEl:S,originalEvent:e}),M({sortable:this,name:"remove",toEl:_,originalEvent:e}),M({rootEl:_,name:"sort",toEl:_,fromEl:S,originalEvent:e}),M({sortable:this,name:"sort",toEl:_,originalEvent:e})),$&&$.save()):Z!==ve&&Z>=0&&(M({sortable:this,name:"update",toEl:_,originalEvent:e}),M({sortable:this,name:"sort",toEl:_,originalEvent:e})),f.active&&((Z==null||Z===-1)&&(Z=ve,re=Be),M({sortable:this,name:"end",toEl:_,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){N("nulling",this),S=p=_=y=ce=C=tt=ne=pe=z=Ne=Z=re=ve=Be=ge=Xe=$=je=f.dragged=f.ghost=f.clone=f.active=null,lt.forEach(function(e){e.checked=!0}),lt.length=$t=Dt=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":p&&(this._onDragOver(e),on(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],t,r=this.el.children,n=0,i=r.length,a=this.options;n<i;n++)t=r[n],W(t,a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||dn(t));return e},sort:function(e,t){var r={},n=this.el;this.toArray().forEach(function(i,a){var s=n.children[a];W(s,this.options.draggable,n,!1)&&(r[i]=s)},this),t&&this.captureAnimationState(),e.forEach(function(i){r[i]&&(n.removeChild(r[i]),n.appendChild(r[i]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return W(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var r=this.options;if(t===void 0)return r[e];var n=ze.modifyOption(this,e,t);typeof n<"u"?r[e]=n:r[e]=t,e==="group"&&yr(r)},destroy:function(){N("destroy",this);var e=this.el;e[B]=null,b(e,"mousedown",this._onTapStart),b(e,"touchstart",this._onTapStart),b(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(b(e,"dragover",this),b(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),st.splice(st.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!ne){if(N("hideClone",this),f.eventCanceled)return;h(C,"display","none"),this.options.removeCloneOnHide&&C.parentNode&&C.parentNode.removeChild(C),ne=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(ne){if(N("showClone",this),f.eventCanceled)return;p.parentNode==S&&!this.options.group.revertClone?S.insertBefore(C,p):ce?S.insertBefore(C,ce):S.appendChild(C),this.options.group.revertClone&&this.animate(p,C),h(C,"display",""),ne=!1}}};function on(o){o.dataTransfer&&(o.dataTransfer.dropEffect="move"),o.cancelable&&o.preventDefault()}function Ue(o,e,t,r,n,i,a,s){var l,d=o[B],c=d.options.onMove,u;return window.CustomEvent&&!ee&&!ke?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=e,l.from=o,l.dragged=t,l.draggedRect=r,l.related=n||e,l.relatedRect=i||O(e),l.willInsertAfter=s,l.originalEvent=a,o.dispatchEvent(l),c&&(u=c.call(d,l,a)),u}function Pt(o){o.draggable=!1}function rn(){Nt=!1}function nn(o,e,t){var r=O(xe(t.el,0,t.options,!0)),n=10;return e?o.clientX<r.left-n||o.clientY<r.top&&o.clientX<r.right:o.clientY<r.top-n||o.clientY<r.bottom&&o.clientX<r.left}function an(o,e,t){var r=O(Bt(t.el,t.options.draggable)),n=10;return e?o.clientX>r.right+n||o.clientX<=r.right&&o.clientY>r.bottom&&o.clientX>=r.left:o.clientX>r.right&&o.clientY>r.top||o.clientX<=r.right&&o.clientY>r.bottom+n}function sn(o,e,t,r,n,i,a,s){var l=r?o.clientY:o.clientX,d=r?t.height:t.width,c=r?t.top:t.left,u=r?t.bottom:t.right,m=!1;if(!a){if(s&&ot<d*n){if(!Ye&&(Xe===1?l>c+d*i/2:l<u-d*i/2)&&(Ye=!0),Ye)m=!0;else if(Xe===1?l<c+ot:l>u-ot)return-Xe}else if(l>c+d*(1-n)/2&&l<u-d*(1-n)/2)return ln(e)}return m=m||a,m&&(l<c+d*i/2||l>u-d*i/2)?l>c+d/2?1:-1:0}function ln(o){return X(p)<X(o)?1:-1}function dn(o){for(var e=o.tagName+o.className+o.src+o.href+o.textContent,t=e.length,r=0;t--;)r+=e.charCodeAt(t);return r.toString(36)}function pn(o){lt.length=0;for(var e=o.getElementsByTagName("input"),t=e.length;t--;){var r=e[t];r.checked&&lt.push(r)}}function rt(o){return setTimeout(o,0)}function Ht(o){return clearTimeout(o)}Ct&&x(document,"touchmove",function(o){(f.active||me)&&o.cancelable&&o.preventDefault()});f.utils={on:x,off:b,css:h,find:dr,is:function(e,t){return!!W(e,t,e,!1)},extend:Fr,throttle:pr,closest:W,toggleClass:R,clone:cr,index:X,nextTick:rt,cancelNextTick:Ht,detectDirection:fr,getChild:xe};f.get=function(o){return o[B]};f.mount=function(){for(var o=arguments.length,e=new Array(o),t=0;t<o;t++)e[t]=arguments[t];e[0].constructor===Array&&(e=e[0]),e.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(f.utils=q(q({},f.utils),r.utils)),ze.mount(r)})};f.create=function(o,e){return new f(o,e)};f.version=Yr;var T=[],He,It,Rt=!1,At,Mt,dt,Ie;function un(){function o(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return o.prototype={dragStarted:function(t){var r=t.originalEvent;this.sortable.nativeDraggable?x(document,"dragover",this._handleAutoScroll):this.options.supportPointer?x(document,"pointermove",this._handleFallbackAutoScroll):r.touches?x(document,"touchmove",this._handleFallbackAutoScroll):x(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var r=t.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?b(document,"dragover",this._handleAutoScroll):(b(document,"pointermove",this._handleFallbackAutoScroll),b(document,"touchmove",this._handleFallbackAutoScroll),b(document,"mousemove",this._handleFallbackAutoScroll)),to(),nt(),Wr()},nulling:function(){dt=It=He=Rt=Ie=At=Mt=null,T.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,r){var n=this,i=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=document.elementFromPoint(i,a);if(dt=t,r||this.options.forceAutoScrollFallback||ke||ee||Re){Vt(t,this.options,s,r);var l=ie(s,!0);Rt&&(!Ie||i!==At||a!==Mt)&&(Ie&&to(),Ie=setInterval(function(){var d=ie(document.elementFromPoint(i,a),!0);d!==l&&(l=d,nt()),Vt(t,n.options,d,r)},10),At=i,Mt=a)}else{if(!this.options.bubbleScroll||ie(s,!0)===j()){nt();return}Vt(t,this.options,ie(s,!1),!1)}}},Q(o,{pluginName:"scroll",initializeByDefault:!0})}function nt(){T.forEach(function(o){clearInterval(o.pid)}),T=[]}function to(){clearInterval(Ie)}var Vt=pr(function(o,e,t,r){if(e.scroll){var n=(o.touches?o.touches[0]:o).clientX,i=(o.touches?o.touches[0]:o).clientY,a=e.scrollSensitivity,s=e.scrollSpeed,l=j(),d=!1,c;It!==t&&(It=t,nt(),He=e.scroll,c=e.scrollFn,He===!0&&(He=ie(t,!0)));var u=0,m=He;do{var E=m,v=O(E),w=v.top,Y=v.bottom,G=v.left,L=v.right,k=v.width,H=v.height,se=void 0,F=void 0,le=E.scrollWidth,we=E.scrollHeight,I=h(E),Ee=E.scrollLeft,te=E.scrollTop;E===l?(se=k<le&&(I.overflowX==="auto"||I.overflowX==="scroll"||I.overflowX==="visible"),F=H<we&&(I.overflowY==="auto"||I.overflowY==="scroll"||I.overflowY==="visible")):(se=k<le&&(I.overflowX==="auto"||I.overflowX==="scroll"),F=H<we&&(I.overflowY==="auto"||I.overflowY==="scroll"));var Se=se&&(Math.abs(L-n)<=a&&Ee+k<le)-(Math.abs(G-n)<=a&&!!Ee),U=F&&(Math.abs(Y-i)<=a&&te+H<we)-(Math.abs(w-i)<=a&&!!te);if(!T[u])for(var de=0;de<=u;de++)T[de]||(T[de]={});(T[u].vx!=Se||T[u].vy!=U||T[u].el!==E)&&(T[u].el=E,T[u].vx=Se,T[u].vy=U,clearInterval(T[u].pid),(Se!=0||U!=0)&&(d=!0,T[u].pid=setInterval((function(){r&&this.layer===0&&f.active._onTouchMove(dt);var Ce=T[this.layer].vy?T[this.layer].vy*s:0,oe=T[this.layer].vx?T[this.layer].vx*s:0;typeof c=="function"&&c.call(f.dragged.parentNode[B],oe,Ce,o,dt,T[this.layer].el)!=="continue"||ur(T[this.layer].el,oe,Ce)}).bind({layer:u}),24))),u++}while(e.bubbleScroll&&m!==l&&(m=ie(m,!1)));Rt=d}},30),vr=function(e){var t=e.originalEvent,r=e.putSortable,n=e.dragEl,i=e.activeSortable,a=e.dispatchSortableEvent,s=e.hideGhostForTarget,l=e.unhideGhostForTarget;if(t){var d=r||i;s();var c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,u=document.elementFromPoint(c.clientX,c.clientY);l(),d&&!d.el.contains(u)&&(a("spill"),this.onSpill({dragEl:n,putSortable:r}))}};function Xt(){}Xt.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,r=e.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var n=xe(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(t,n):this.sortable.el.appendChild(t),this.sortable.animateAll(),r&&r.animateAll()},drop:vr};Q(Xt,{pluginName:"revertOnSpill"});function Yt(){}Yt.prototype={onSpill:function(e){var t=e.dragEl,r=e.putSortable,n=r||this.sortable;n.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),n.animateAll()},drop:vr};Q(Yt,{pluginName:"removeOnSpill"});f.mount(new un);f.mount(Yt,Xt);const cn=(o,e,t)=>{let r=[];o._sortable=f.create(o,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:n=>{const i=n.item;r=Array.prototype.slice.call(i.parentNode.childNodes),r=r.filter(a=>a.nodeType!=Node.ELEMENT_NODE||!a.classList.contains("sortable-fallback"))},onEnd:n=>{const a=n.item.parentNode;for(const l of r)a.appendChild(l);if(n.oldIndex==n.newIndex)return;const s=e.getArray().find(l=>l.ol_uid===n.item.querySelector("eox-layercontrol-layer").layer.ol_uid);e.remove(s),e.insertAt(e.getLength()-n.newIndex,s),t.requestUpdate()}})},Zt=(o,e,t)=>{let r=[];const n=(i,a,s)=>{r=[...r,...i.filter(d=>d.get(a)===s)];const l=i.filter(d=>d.getLayers);return l.length>0&&l.forEach(d=>n(d.getLayers().getArray(),a,s)),r};return n(o,e,t),r},hn=(o,e)=>{var t,r,n;if(!(!o||!e))return o.getLayers?"group":(n=(t=e.getInteractions().getArray().filter(i=>i.freehand_!==void 0).map(i=>i.source_))==null?void 0:t.ol_uid)!=null&&n.includes(o.getSource?(r=o.getSource())==null?void 0:r.ol_uid:void 0)?"draw":o.declutter_!==void 0?"vector":"raster"},br=(o,e)=>{const t=o.get("minZoom"),r=o.get("maxZoom");return!!(e&&(t!==-1/0||r!==1/0))},fn=(o,e,t)=>{if(!o||!e)return!1;if(!br(o,t))return!0;const r=o.get("minZoom"),n=o.get("maxZoom"),i=e.getView().getZoom();return i>r&&i<n};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=or(class extends rr{constructor(o){if(super(o),o.type!==fe.PROPERTY&&o.type!==fe.ATTRIBUTE&&o.type!==fe.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Vr(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[e]){if(e===We||e===he)return e;const t=o.element,r=o.name;if(o.type===fe.PROPERTY){if(e===t[r])return We}else if(o.type===fe.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(r))return We}else if(o.type===fe.ATTRIBUTE&&t.getAttribute(r)===e+"")return We;return nr(o),e}});var pt,ut;class xr extends ae{constructor(){super();A(this,pt,"");A(this,ut,"");this.layer=null,this.unstyled=!1,this.noShadow=!0}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var t;return g`
      <style>
        ${P(this,pt)}
        ${!this.unstyled&&P(this,ut)}
      </style>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value=${kt((t=this.layer)==null?void 0:t.getOpacity())}
        @input=${r=>this.layer.setOpacity(parseFloat(r.target.value))}
      />
      <button
        class="delete"
        @click=${()=>{var r,n;(r=this.layer)==null||r.set("layerControlOptional",!0),(n=this.layer)==null||n.setVisible(!1),this.dispatchEvent(new CustomEvent("changed",{detail:this.layer,bubbles:!0}))}}
      >
        x
      </button>
    `}}pt=new WeakMap,ut=new WeakMap,V(xr,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layerconfig",xr);var ct,ht;class wr extends ae{constructor(){super();A(this,ct,`
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
  `);A(this,ht,`
    .tabbed {
      font-size: small;
    }
    .tabbed label.highlighted {
      background: #00417011;
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
        ${P(this,ct)}
        ${!this.unstyled&&P(this,ht)}
      </style>
      <div class="tabbed">
        ${K(this.actions.length+this.tabs.length>1,()=>g`
            <nav>
              <div>
                ${Qe(this.tabs,(t,r)=>g`
                    <label
                      class=${this.selectedTab===r&&"highlighted"}
                      @click=${()=>this.selectedTab=r}
                    >
                      <slot name=${t+"-icon"}>${t}</slot>
                    </label>
                  `)}
              </div>
              <div>
                ${Qe(this.actions,t=>g`
                    <span>
                      <slot name=${t+"-icon"}>${t}</slot>
                    </span>
                  `)}
              </div>
            </nav>
          `)}
        <figure>
          ${Qe(this.tabs,(t,r)=>g`
              <div class="tab ${this.selectedTab===r&&"highlighted"}">
                <slot name=${t+"-content"}>${t}</slot>
              </div>
            `)}
        </figure>
      </div>
    `}}ct=new WeakMap,ht=new WeakMap,V(wr,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-tabs",wr);var ft,yt;class Er extends ae{constructor(){super();V(this,"_parseActions",t=>t==null?void 0:t.filter(r=>["remove","sort"].filter(n=>{var i;return(i=this.layer)!=null&&i.get("layerControlDisable")?n!=="sort":!0}).includes(r)));V(this,"_parseTools",t=>t==null?void 0:t.filter(r=>{var i;let n=!0;return["remove","sort"].includes(r)&&(n=!1),r==="info"&&(n=this.layer.get("description")),r==="config"&&(n=(i=this.layer.style_)==null?void 0:i.color),n}));V(this,"_removeButton",g`
    <button
      class="remove-icon icon"
      @click=${()=>{var t,r;(t=this.layer)==null||t.set("layerControlOptional",!0),(r=this.layer)==null||r.setVisible(!1),this.dispatchEvent(new CustomEvent("changed",{detail:this.layer,bubbles:!0}))}}
    >
      ${this.unstyled?"x":he}
    </button>
  `);V(this,"_sortButton",g`
    <button class="sort-icon icon drag-handle">
      ${this.unstyled?"sort":he}
    </button>
  `);A(this,ft,"");A(this,yt,`
    ${Nr}  
    ${Hr}
    ${ir}
    ${Ir}
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
        ${P(this,ft)}
        ${!this.unstyled&&P(this,yt)}
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
                open=${this.layer.get("layerControlToolsExpand")||he}
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
                  ${Qe(this._parseTools(this.tools),s=>g`
                      <button slot="${s}-icon" class="icon">
                        ${this.unstyled?s:he}
                      </button>
                    `)}

                  <div slot="info-content">
                    ${Mr(this.layer.get("description"))}
                  </div>
                  <div slot="opacity-content">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value=${kt((a=this.layer)==null?void 0:a.getOpacity())}
                      @input=${s=>this.layer.setOpacity(parseFloat(s.target.value))}
                    />
                  </div>
                  <div slot="config-content"></div>
                  <!--<eox-layercontrol-layerconfig
                      slot="config-content"
                      .layer=${this.layer}
                      .unstyled=${this.unstyled}
                      @changed=${()=>this.requestUpdate()}
                    ></eox-layercontrol-layerconfig>-->
                  <div slot="remove-icon">${this._removeButton}</div>
                  <div slot="sort-icon">${this._sortButton}</div>
                </eox-layercontrol-tabs>
              </details>
            `})}
        `})}
    `}}ft=new WeakMap,yt=new WeakMap,V(Er,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer-tools",Er);var gt,mt;class Sr extends ae{constructor(){super();V(this,"currLayerVisibilityBasedOnZoom",!0);A(this,gt,"");A(this,mt,`
    ${ir}
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
  `);this.layer=null,this.map=null,this.titleProperty="title",this.showZoomLayerState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!0}updateLayerZoomVisibility(){const t=fn(this.layer,this.map,this.showZoomLayerState);let r=!1;!t&&this.currLayerVisibilityBasedOnZoom?(this.currLayerVisibilityBasedOnZoom=!1,r=!0):t&&!this.currLayerVisibilityBasedOnZoom&&(this.currLayerVisibilityBasedOnZoom=!0,r=!0),r&&(this.requestUpdate(),this.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))}firstUpdated(){br(this.layer,this.showZoomLayerState)&&(this.updateLayerZoomVisibility(),this.map.getView().on("change:resolution",()=>this.updateLayerZoomVisibility()))}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return g`
      <style>
        ${P(this,gt)}
        ${!this.unstyled&&P(this,mt)}
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
                .checked=${kt(this.layer.getVisible())}
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
    `}}gt=new WeakMap,mt=new WeakMap,V(Sr,"properties",{layer:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showZoomLayerState:{attribute:!1,type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer",Sr);var vt,bt;class Cr extends ae{constructor(){super();A(this,vt,"");A(this,bt,`
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
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showZoomLayerState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!0}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return g`
      <style>
        ${P(this,vt)}
        ${!this.unstyled&&P(this,bt)}
      </style>
      ${K(this.group,()=>g`
          <details open=${this.group.get("layerControlExpand")||he}>
            <summary>
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showZoomLayerState=${this.showZoomLayerState}
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
              .showZoomLayerState=${this.showZoomLayerState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}vt=new WeakMap,bt=new WeakMap,V(Cr,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showZoomLayerState:{attribute:!1,type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer-group",Cr);var xt,wt;class _r extends ae{constructor(){super();A(this,xt,"");A(this,wt,`
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
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showZoomLayerState=!1,this.unstyled=!1,this.noShadow=!0}updated(){this.layers&&(this.layers.on("change:length",()=>{this.requestUpdate(),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}),cn(this.renderRoot.querySelector("ul"),this.layers,this))}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return g`
      <style>
        ${P(this,xt)}
        ${!this.unstyled&&P(this,wt)}
      </style>
      <ul>
        ${K(this.layers,()=>g`
            ${this.layers.getArray().filter(t=>!t.get("layerControlHide")&&!t.get("layerControlOptional")).reverse().map(t=>Rr(t.get(this.idProperty),g`
                    <li
                      data-layer="${t.get(this.idProperty)}"
                      data-type="${hn(t,this.map)}"
                    >
                      ${t.getLayers?g`
                              <eox-layercontrol-layer-group
                                .noShadow=${!0}
                                .group=${t}
                                .idProperty=${this.idProperty}
                                .map=${this.map}
                                .titleProperty=${this.titleProperty}
                                .showZoomLayerState=${this.showZoomLayerState}
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
                                .showZoomLayerState=${this.showZoomLayerState}
                                .tools=${this.tools}
                                .unstyled=${this.unstyled}
                                @changed=${()=>{this.requestUpdate()}}
                              ></eox-layercontrol-layer>
                            `}
                    </li>
                  `))}
          `)}
      </ul>
    `}}xt=new WeakMap,wt=new WeakMap,V(_r,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showZoomLayerState:{attribute:!1,type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer-list",_r);class Tr extends ae{constructor(){super(),this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!0}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return g`
      <label for="optional">Optional layers</label>

      <select name="optional" data-cy="optionalLayers">
        <option disabled selected value>
          -- select an optional layer to add --
        </option>
        ${Zt(this.layers.getArray(),"layerControlOptional",!0).map(e=>g`
            <option
              value="${e.get(this.idProperty)||e.ol_uid}"
            >
              ${e.get(this.titleProperty)||`layer ${e.get(this.idProperty)}`}
            </option>
          `)}
      </select>
      <button
        @click="${()=>{const e=Zt(this.layers.getArray(),"layerControlOptional",!0).find(t=>(t.get(this.idProperty)||t.ol_uid)===this.querySelector("select[name=optional]").value);e==null||e.set("layerControlOptional",!1),e==null||e.setVisible(!0),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),this.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(t=>t.requestUpdate()),this.requestUpdate()}}"
      >
        add
      </button>
    `}}V(Tr,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Tr);var Et,St;class Or extends ae{constructor(){super();A(this,Et,"");A(this,St,`
    * {
      font-family: Roboto, sans-serif;
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showZoomLayerState=!1,this.tools=["info","opacity","remove","sort"],this.unstyled=!1,this.styleOverride=""}updated(){const t=document.querySelector(this.for);t&&(this.map=t.map)}render(){var t;return g`
      <style>
        ${P(this,Et)}
        ${!this.unstyled&&P(this,St)}
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
            .showZoomLayerState=${this.showZoomLayerState}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            @changed=${r=>{if(this.requestUpdate(),r.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const n=this.renderRoot.querySelector("eox-layercontrol-optional-list");n==null||n.requestUpdate()}}}
          ></eox-layercontrol-layer-list>
        `)}
      ${K(this.map&&((t=Zt(this.map.getLayers().getArray(),"layerControlOptional",!0))==null?void 0:t.length)>0,()=>g`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}Et=new WeakMap,St=new WeakMap,V(Or,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showZoomLayerState:{attribute:!1,type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String}});customElements.define("eox-layercontrol",Or);const $r=g` <eox-map
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
></eox-map>`,On={title:"Elements/eox-layercontrol",tags:["autodocs"],component:"eox-layercontrol",parameters:{componentSubtitle:"Manage and configure OpenLayers map layers",layout:"centered"}},Te={args:{idProperty:"id",titleProperty:"title",unstyled:!1},render:o=>g`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${o.idProperty}
        .titleProperty=${o.titleProperty}
        .unstyled=${o.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      ${$r}
    </div>
  `},Oe={args:{},render:()=>g`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#exclusive"></eox-layercontrol>
      <eox-map
        id="exclusive"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Tile",properties:{title:"Terrain Light",layerControlExclusive:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}},{type:"Tile",properties:{title:"EOxCloudless",layerControlExclusive:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1}])}
      >
      </eox-map>
    </div>
  `},$e={args:{},render:()=>g`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#optional"></eox-layercontrol>
      <eox-map
        id="optional"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Tile",properties:{title:"EOxCloudless 2021",layerControlOptional:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1},{type:"Tile",properties:{title:"EOxCloudless 2020",layerControlOptional:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1},{type:"Tile",properties:{title:"EOxCloudless 2019",layerControlOptional:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2019_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1},{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}}])}
      >
      </eox-map>
    </div>
  `},De={args:{},render:()=>g`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#expanded"></eox-layercontrol>
      <eox-map
        id="expanded"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}},{type:"Group",properties:{title:"Layer group",layerControlExpand:!0},layers:[{type:"Tile",properties:{title:"EOxCloudless"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1}]}])}
      >
      </eox-map>
    </div>
  `},Le={args:{},render:()=>g`
    <p>Default tools: info, opacity, remove, sort</p>
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
    <div style="display: flex">
      <eox-layercontrol for="eox-map#hidden"></eox-layercontrol>
      <eox-map
        id="hidden"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Vector",properties:{title:"Regions",id:"regions",layerControlHide:!0},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"}},{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}}])}
      >
      </eox-map>
    </div>
  `};var oo;const Je={args:{idProperty:"id",titleProperty:"title",unstyled:!1,noShadow:!1},render:o=>g(oo||(oo=_t([`
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
  `])),o.noShadow,o.idProperty,o.titleProperty,o.unstyled)};var ro;const Ke={args:{unstyled:!1,noShadow:!1},render:o=>g(ro||(ro=_t([`
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
  `])),o.noShadow,o.unstyled)},Ae={render:()=>g`
    <eox-layercontrol-tabs
      .noShadow=${!1}
      .actions=${["delete"]}
      .tabs=${["info","opacity","config"]}
    ></eox-layercontrol-tabs>
  `},Me={args:{showZoomLayerState:!0},render:o=>g`
    <div style="display: flex">
      <eox-layercontrol
        .showZoomLayerState=${o.showZoomLayerState}
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
  `},Ve={args:{unstyled:!0},render:o=>g`
    <div style="display: flex">
      <eox-layercontrol
        .unstyled=${o.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      ${$r}
    </div>
  `};var no,io,ao,so,lo;Te.parameters={...Te.parameters,docs:{...(no=Te.parameters)==null?void 0:no.docs,source:{originalSource:`{
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
}`,...(ao=(io=Te.parameters)==null?void 0:io.docs)==null?void 0:ao.source},description:{story:"Basic layercontrol setup.",...(lo=(so=Te.parameters)==null?void 0:so.docs)==null?void 0:lo.description}}};var po,uo,co,ho,fo;Oe.parameters={...Oe.parameters,docs:{...(po=Oe.parameters)==null?void 0:po.docs,source:{originalSource:`{
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
}`,...(co=(uo=Oe.parameters)==null?void 0:uo.docs)==null?void 0:co.source},description:{story:"By adding the `layerControlExclusive` property to map layers,\nonly one of them at a time can be visualized.",...(fo=(ho=Oe.parameters)==null?void 0:ho.docs)==null?void 0:fo.description}}};var yo,go,mo,vo,bo;$e.parameters={...$e.parameters,docs:{...(yo=$e.parameters)==null?void 0:yo.docs,source:{originalSource:`{
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
}`,...(mo=(go=$e.parameters)==null?void 0:go.docs)==null?void 0:mo.source},description:{story:`By adding the \`layerControlOptional\` property to map layers,
they are not initially rendered in the layer list, but in a
selection interface. They can be added to the layer list manually.
Removing a layer puts it back into the optional list.`,...(bo=(vo=$e.parameters)==null?void 0:vo.docs)==null?void 0:bo.description}}};var xo,wo,Eo,So,Co;De.parameters={...De.parameters,docs:{...(xo=De.parameters)==null?void 0:xo.docs,source:{originalSource:`{
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
}`,...(Eo=(wo=De.parameters)==null?void 0:wo.docs)==null?void 0:Eo.source},description:{story:"By adding the `layerControlExpand` property to map layers,\nthey render in the layer control as opened.",...(Co=(So=De.parameters)==null?void 0:So.docs)==null?void 0:Co.description}}};var _o,To,Oo,$o,Do;Le.parameters={...Le.parameters,docs:{...(_o=Le.parameters)==null?void 0:_o.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
    <p>Default tools: info, opacity, remove, sort</p>
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
}`,...(Oo=(To=Le.parameters)==null?void 0:To.docs)==null?void 0:Oo.source},description:{story:`The layer control accepts a "tools" array, which enable
extra functionalities for layers`,...(Do=($o=Le.parameters)==null?void 0:$o.docs)==null?void 0:Do.description}}};var Lo,Po,Ao,Mo,Vo;Pe.parameters={...Pe.parameters,docs:{...(Lo=Pe.parameters)==null?void 0:Lo.docs,source:{originalSource:`{
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
}`,...(Ao=(Po=Pe.parameters)==null?void 0:Po.docs)==null?void 0:Ao.source},description:{story:"By adding the `layerControlHide` property to map layers,\nthey aren't displayed in the layer control at all (but may\nbe still rendered on the map).",...(Vo=(Mo=Pe.parameters)==null?void 0:Mo.docs)==null?void 0:Vo.description}}};var No,Ho,Io;Je.parameters={...Je.parameters,docs:{...(No=Je.parameters)==null?void 0:No.docs,source:{originalSource:`{
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
}`,...(Io=(Ho=Je.parameters)==null?void 0:Ho.docs)==null?void 0:Io.source}}};var Ro,Zo,Bo;Ke.parameters={...Ke.parameters,docs:{...(Ro=Ke.parameters)==null?void 0:Ro.docs,source:{originalSource:`{
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
}`,...(Bo=(Zo=Ke.parameters)==null?void 0:Zo.docs)==null?void 0:Bo.source}}};var Xo,Yo,ko,zo,Fo;Ae.parameters={...Ae.parameters,docs:{...(Xo=Ae.parameters)==null?void 0:Xo.docs,source:{originalSource:`{
  render: () => html\`
    <eox-layercontrol-tabs
      .noShadow=\${false}
      .actions=\${["delete"]}
      .tabs=\${["info", "opacity", "config"]}
    ></eox-layercontrol-tabs>
  \`
}`,...(ko=(Yo=Ae.parameters)==null?void 0:Yo.docs)==null?void 0:ko.source},description:{story:"Layer control tabs",...(Fo=(zo=Ae.parameters)==null?void 0:zo.docs)==null?void 0:Fo.description}}};var Wo,jo,qo,Go,Uo;Me.parameters={...Me.parameters,docs:{...(Wo=Me.parameters)==null?void 0:Wo.docs,source:{originalSource:`{
  args: {
    showZoomLayerState: true
  },
  render: args => html\`
    <div style="display: flex">
      <eox-layercontrol
        .showZoomLayerState=\${args.showZoomLayerState}
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
}`,...(qo=(jo=Me.parameters)==null?void 0:jo.docs)==null?void 0:qo.source},description:{story:"Zoom layer state based on `minZoom` and `maxZoom`.\nThe color change state only visible when `showZoomLayerState` is set inside layer properties.",...(Uo=(Go=Me.parameters)==null?void 0:Go.docs)==null?void 0:Uo.description}}};var Jo,Ko,Qo,er,tr;Ve.parameters={...Ve.parameters,docs:{...(Jo=Ve.parameters)==null?void 0:Jo.docs,source:{originalSource:`{
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
}`,...(Qo=(Ko=Ve.parameters)==null?void 0:Ko.docs)==null?void 0:Qo.source},description:{story:"Unstyled version of the Element",...(tr=(er=Ve.parameters)==null?void 0:er.docs)==null?void 0:tr.description}}};const $n=["Primary","ExclusiveLayers","OptionalLayers","ExpandedLayers","Tools","HiddenLayers","SingleLayer","LayerList","Tabs","ZoomLayerState","Unstyled"];export{Oe as ExclusiveLayers,De as ExpandedLayers,Pe as HiddenLayers,Ke as LayerList,$e as OptionalLayers,Te as Primary,Je as SingleLayer,Ae as Tabs,Le as Tools,Ve as Unstyled,Me as ZoomLayerState,$n as __namedExportsOrder,On as default};
//# sourceMappingURL=layercontrol.stories-fc6ea5b0.js.map
