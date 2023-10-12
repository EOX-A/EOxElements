var Yt=Object.freeze,kt=Object.defineProperty;var br=(o,e,t)=>e in o?kt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var V=(o,e,t)=>(br(o,typeof e!="symbol"?e+"":e,t),t),xr=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)};var M=(o,e,t)=>(xr(o,e,"read from private field"),t?t.call(o):e.get(o)),A=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)};var Et=(o,e)=>Yt(kt(o,"raw",{value:Yt(e||o.slice())}));import{A as qo,s as ae,x as g}from"./lit-element-c29cbb6b.js";import"./main-59383ae6.js";import{e as Er,i as wr,n as K,o as Ge,a as Sr}from"./unsafe-html-c0e6b744.js";import{a as Cr}from"./directive-helpers-2720686e.js";import{l as It,r as _r,c as Zo,s as Tr}from"./slider-5ac648d2.js";import{b as Or}from"./button-60c82d2c.js";import"./query-assigned-elements-bec7f9a4.js";import"./templateElement-8d2f8dc8.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-06bb2dbb.js";import"../sb-preview/runtime.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dr=Er(class extends wr{constructor(){super(...arguments),this.key=qo}render(o,e){return this.key=o,e}update(o,[e,t]){return e!==this.key&&(Cr(o),this.key=e),t}});/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Ft(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})),t.push.apply(t,r)}return t}function Z(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ft(Object(t),!0).forEach(function(r){$r(o,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):Ft(Object(t)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(t,r))})}return o}function Ue(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ue=function(e){return typeof e}:Ue=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ue(o)}function $r(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function Q(){return Q=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])}return o},Q.apply(this,arguments)}function Pr(o,e){if(o==null)return{};var t={},r=Object.keys(o),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(t[n]=o[n]);return t}function Mr(o,e){if(o==null)return{};var t=Pr(o,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(o,r)&&(t[r]=o[r])}return t}var Ar="1.15.0";function J(o){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(o)}var ee=J(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Re=J(/Edge/i),zt=J(/firefox/i),Ne=J(/safari/i)&&!J(/chrome/i)&&!J(/android/i),Go=J(/iP(ad|od|hone)/i),Uo=J(/chrome/i)&&J(/android/i),Jo={capture:!1,passive:!1};function x(o,e,t){o.addEventListener(e,t,!ee&&Jo)}function b(o,e,t){o.removeEventListener(e,t,!ee&&Jo)}function tt(o,e){if(e){if(e[0]===">"&&(e=e.substring(1)),o)try{if(o.matches)return o.matches(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e)}catch{return!1}return!1}}function Hr(o){return o.host&&o!==document&&o.host.nodeType?o.host:o.parentNode}function W(o,e,t,r){if(o){t=t||document;do{if(e!=null&&(e[0]===">"?o.parentNode===t&&tt(o,e):tt(o,e))||r&&o===t)return o;if(o===t)break}while(o=Hr(o))}return null}var jt=/\s+/g;function B(o,e,t){if(o&&e)if(o.classList)o.classList[t?"add":"remove"](e);else{var r=(" "+o.className+" ").replace(jt," ").replace(" "+e+" "," ");o.className=(r+(t?" "+e:"")).replace(jt," ")}}function h(o,e,t){var r=o&&o.style;if(r){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(o,""):o.currentStyle&&(t=o.currentStyle),e===void 0?t:t[e];!(e in r)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),r[e]=t+(typeof t=="string"?"":"px")}}function me(o,e){var t="";if(typeof o=="string")t=o;else do{var r=h(o,"transform");r&&r!=="none"&&(t=r+" "+t)}while(!e&&(o=o.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(t)}function Ko(o,e,t){if(o){var r=o.getElementsByTagName(e),n=0,i=r.length;if(t)for(;n<i;n++)t(r[n],n);return r}return[]}function q(){var o=document.scrollingElement;return o||document.documentElement}function O(o,e,t,r,n){if(!(!o.getBoundingClientRect&&o!==window)){var i,a,l,s,d,c,u;if(o!==window&&o.parentNode&&o!==q()?(i=o.getBoundingClientRect(),a=i.top,l=i.left,s=i.bottom,d=i.right,c=i.height,u=i.width):(a=0,l=0,s=window.innerHeight,d=window.innerWidth,c=window.innerHeight,u=window.innerWidth),(e||t)&&o!==window&&(n=n||o.parentNode,!ee))do if(n&&n.getBoundingClientRect&&(h(n,"transform")!=="none"||t&&h(n,"position")!=="static")){var m=n.getBoundingClientRect();a-=m.top+parseInt(h(n,"border-top-width")),l-=m.left+parseInt(h(n,"border-left-width")),s=a+i.height,d=l+i.width;break}while(n=n.parentNode);if(r&&o!==window){var w=me(n||o),v=w&&w.a,E=w&&w.d;w&&(a/=E,l/=v,u/=v,c/=E,s=a+c,d=l+u)}return{top:a,left:l,bottom:s,right:d,width:u,height:c}}}function Wt(o,e,t){for(var r=ie(o,!0),n=O(o)[e];r;){var i=O(r)[t],a=void 0;if(t==="top"||t==="left"?a=n>=i:a=n<=i,!a)return r;if(r===q())break;r=ie(r,!1)}return!1}function ve(o,e,t,r){for(var n=0,i=0,a=o.children;i<a.length;){if(a[i].style.display!=="none"&&a[i]!==f.ghost&&(r||a[i]!==f.dragged)&&W(a[i],t.draggable,o,!1)){if(n===e)return a[i];n++}i++}return null}function Vt(o,e){for(var t=o.lastElementChild;t&&(t===f.ghost||h(t,"display")==="none"||e&&!tt(t,e));)t=t.previousElementSibling;return t||null}function Y(o,e){var t=0;if(!o||!o.parentNode)return-1;for(;o=o.previousElementSibling;)o.nodeName.toUpperCase()!=="TEMPLATE"&&o!==f.clone&&(!e||tt(o,e))&&t++;return t}function qt(o){var e=0,t=0,r=q();if(o)do{var n=me(o),i=n.a,a=n.d;e+=o.scrollLeft*i,t+=o.scrollTop*a}while(o!==r&&(o=o.parentNode));return[e,t]}function Lr(o,e){for(var t in o)if(o.hasOwnProperty(t)){for(var r in e)if(e.hasOwnProperty(r)&&e[r]===o[t][r])return Number(t)}return-1}function ie(o,e){if(!o||!o.getBoundingClientRect)return q();var t=o,r=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var n=h(t);if(t.clientWidth<t.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return q();if(r||e)return t;r=!0}}while(t=t.parentNode);return q()}function Nr(o,e){if(o&&e)for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o}function wt(o,e){return Math.round(o.top)===Math.round(e.top)&&Math.round(o.left)===Math.round(e.left)&&Math.round(o.height)===Math.round(e.height)&&Math.round(o.width)===Math.round(e.width)}var Ie;function Qo(o,e){return function(){if(!Ie){var t=arguments,r=this;t.length===1?o.call(r,t[0]):o.apply(r,t),Ie=setTimeout(function(){Ie=void 0},e)}}}function Ir(){clearTimeout(Ie),Ie=void 0}function er(o,e,t){o.scrollLeft+=e,o.scrollTop+=t}function tr(o){var e=window.Polymer,t=window.jQuery||window.Zepto;return e&&e.dom?e.dom(o).cloneNode(!0):t?t(o).clone(!0)[0]:o.cloneNode(!0)}var R="Sortable"+new Date().getTime();function Vr(){var o=[],e;return{captureAnimationState:function(){if(o=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(n){if(!(h(n,"display")==="none"||n===f.ghost)){o.push({target:n,rect:O(n)});var i=Z({},o[o.length-1].rect);if(n.thisAnimationDuration){var a=me(n,!0);a&&(i.top-=a.f,i.left-=a.e)}n.fromRect=i}})}},addAnimationState:function(r){o.push(r)},removeAnimationState:function(r){o.splice(Lr(o,{target:r}),1)},animateAll:function(r){var n=this;if(!this.options.animation){clearTimeout(e),typeof r=="function"&&r();return}var i=!1,a=0;o.forEach(function(l){var s=0,d=l.target,c=d.fromRect,u=O(d),m=d.prevFromRect,w=d.prevToRect,v=l.rect,E=me(d,!0);E&&(u.top-=E.f,u.left-=E.e),d.toRect=u,d.thisAnimationDuration&&wt(m,u)&&!wt(c,u)&&(v.top-u.top)/(v.left-u.left)===(c.top-u.top)/(c.left-u.left)&&(s=Xr(v,m,w,n.options)),wt(u,c)||(d.prevFromRect=c,d.prevToRect=u,s||(s=n.options.animation),n.animate(d,v,u,s)),s&&(i=!0,a=Math.max(a,s),clearTimeout(d.animationResetTimer),d.animationResetTimer=setTimeout(function(){d.animationTime=0,d.prevFromRect=null,d.fromRect=null,d.prevToRect=null,d.thisAnimationDuration=null},s),d.thisAnimationDuration=s)}),clearTimeout(e),i?e=setTimeout(function(){typeof r=="function"&&r()},a):typeof r=="function"&&r(),o=[]},animate:function(r,n,i,a){if(a){h(r,"transition",""),h(r,"transform","");var l=me(this.el),s=l&&l.a,d=l&&l.d,c=(n.left-i.left)/(s||1),u=(n.top-i.top)/(d||1);r.animatingX=!!c,r.animatingY=!!u,h(r,"transform","translate3d("+c+"px,"+u+"px,0)"),this.forRepaintDummy=Br(r),h(r,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),h(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){h(r,"transition",""),h(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},a)}}}}function Br(o){return o.offsetWidth}function Xr(o,e,t,r){return Math.sqrt(Math.pow(e.top-o.top,2)+Math.pow(e.left-o.left,2))/Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))*r.animation}var he=[],St={initializeByDefault:!0},Ye={mount:function(e){for(var t in St)St.hasOwnProperty(t)&&!(t in e)&&(e[t]=St[t]);he.forEach(function(r){if(r.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),he.push(e)},pluginEvent:function(e,t,r){var n=this;this.eventCanceled=!1,r.cancel=function(){n.eventCanceled=!0};var i=e+"Global";he.forEach(function(a){t[a.pluginName]&&(t[a.pluginName][i]&&t[a.pluginName][i](Z({sortable:t},r)),t.options[a.pluginName]&&t[a.pluginName][e]&&t[a.pluginName][e](Z({sortable:t},r)))})},initializePlugins:function(e,t,r,n){he.forEach(function(l){var s=l.pluginName;if(!(!e.options[s]&&!l.initializeByDefault)){var d=new l(e,t,e.options);d.sortable=e,d.options=e.options,e[s]=d,Q(r,d.defaults)}});for(var i in e.options)if(e.options.hasOwnProperty(i)){var a=this.modifyOption(e,i,e.options[i]);typeof a<"u"&&(e.options[i]=a)}},getEventProperties:function(e,t){var r={};return he.forEach(function(n){typeof n.eventProperties=="function"&&Q(r,n.eventProperties.call(t[n.pluginName],e))}),r},modifyOption:function(e,t,r){var n;return he.forEach(function(i){e[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[t]=="function"&&(n=i.optionListeners[t].call(e[i.pluginName],r))}),n}};function Rr(o){var e=o.sortable,t=o.rootEl,r=o.name,n=o.targetEl,i=o.cloneEl,a=o.toEl,l=o.fromEl,s=o.oldIndex,d=o.newIndex,c=o.oldDraggableIndex,u=o.newDraggableIndex,m=o.originalEvent,w=o.putSortable,v=o.extraEventProperties;if(e=e||t&&t[R],!!e){var E,k=e.options,G="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!ee&&!Re?E=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(E=document.createEvent("Event"),E.initEvent(r,!0,!0)),E.to=a||t,E.from=l||t,E.item=n||t,E.clone=i,E.oldIndex=s,E.newIndex=d,E.oldDraggableIndex=c,E.newDraggableIndex=u,E.originalEvent=m,E.pullMode=w?w.lastPutMode:void 0;var P=Z(Z({},v),Ye.getEventProperties(r,e));for(var F in P)E[F]=P[F];t&&t.dispatchEvent(E),k[G]&&k[G].call(e,E)}}var Yr=["evt"],L=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.evt,i=Mr(r,Yr);Ye.pluginEvent.bind(f)(e,t,Z({dragEl:p,parentEl:_,ghostEl:y,rootEl:S,nextEl:ce,lastDownEl:Je,cloneEl:C,cloneHidden:ne,dragStarted:Ae,putSortable:D,activeSortable:f.active,originalEvent:n,oldIndex:ge,oldDraggableIndex:Ve,newIndex:X,newDraggableIndex:re,hideGhostForTarget:ir,unhideGhostForTarget:ar,cloneNowHidden:function(){ne=!0},cloneNowShown:function(){ne=!1},dispatchSortableEvent:function(l){H({sortable:t,name:l,originalEvent:n})}},i))};function H(o){Rr(Z({putSortable:D,cloneEl:C,targetEl:p,rootEl:S,oldIndex:ge,oldDraggableIndex:Ve,newIndex:X,newDraggableIndex:re},o))}var p,_,y,S,ce,Je,C,ne,ge,X,Ve,re,Fe,D,ye=!1,ot=!1,rt=[],pe,z,Ct,_t,Zt,Gt,Ae,fe,Be,Xe=!1,ze=!1,Ke,$,Tt=[],Mt=!1,nt=[],xt=typeof document<"u",je=Go,Ut=Re||ee?"cssFloat":"float",kr=xt&&!Uo&&!Go&&"draggable"in document.createElement("div"),or=function(){if(xt){if(ee)return!1;var o=document.createElement("x");return o.style.cssText="pointer-events:auto",o.style.pointerEvents==="auto"}}(),rr=function(e,t){var r=h(e),n=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),i=ve(e,0,t),a=ve(e,1,t),l=i&&h(i),s=a&&h(a),d=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+O(i).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+O(a).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&l.float&&l.float!=="none"){var u=l.float==="left"?"left":"right";return a&&(s.clear==="both"||s.clear===u)?"vertical":"horizontal"}return i&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||d>=n&&r[Ut]==="none"||a&&r[Ut]==="none"&&d+c>n)?"vertical":"horizontal"},Fr=function(e,t,r){var n=r?e.left:e.top,i=r?e.right:e.bottom,a=r?e.width:e.height,l=r?t.left:t.top,s=r?t.right:t.bottom,d=r?t.width:t.height;return n===l||i===s||n+a/2===l+d/2},zr=function(e,t){var r;return rt.some(function(n){var i=n[R].options.emptyInsertThreshold;if(!(!i||Vt(n))){var a=O(n),l=e>=a.left-i&&e<=a.right+i,s=t>=a.top-i&&t<=a.bottom+i;if(l&&s)return r=n}}),r},nr=function(e){function t(i,a){return function(l,s,d,c){var u=l.options.group.name&&s.options.group.name&&l.options.group.name===s.options.group.name;if(i==null&&(a||u))return!0;if(i==null||i===!1)return!1;if(a&&i==="clone")return i;if(typeof i=="function")return t(i(l,s,d,c),a)(l,s,d,c);var m=(a?l:s).options.group.name;return i===!0||typeof i=="string"&&i===m||i.join&&i.indexOf(m)>-1}}var r={},n=e.group;(!n||Ue(n)!="object")&&(n={name:n}),r.name=n.name,r.checkPull=t(n.pull,!0),r.checkPut=t(n.put),r.revertClone=n.revertClone,e.group=r},ir=function(){!or&&y&&h(y,"display","none")},ar=function(){!or&&y&&h(y,"display","")};xt&&!Uo&&document.addEventListener("click",function(o){if(ot)return o.preventDefault(),o.stopPropagation&&o.stopPropagation(),o.stopImmediatePropagation&&o.stopImmediatePropagation(),ot=!1,!1},!0);var ue=function(e){if(p){e=e.touches?e.touches[0]:e;var t=zr(e.clientX,e.clientY);if(t){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);r.target=r.rootEl=t,r.preventDefault=void 0,r.stopPropagation=void 0,t[R]._onDragOver(r)}}},jr=function(e){p&&p.parentNode[R]._isOutsideThisEl(e.target)};function f(o,e){if(!(o&&o.nodeType&&o.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(o));this.el=o,this.options=e=Q({},e),o[R]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(o.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return rr(o,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,l){a.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:f.supportPointer!==!1&&"PointerEvent"in window&&!Ne,emptyInsertThreshold:5};Ye.initializePlugins(this,o,t);for(var r in t)!(r in e)&&(e[r]=t[r]);nr(e);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=e.forceFallback?!1:kr,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?x(o,"pointerdown",this._onTapStart):(x(o,"mousedown",this._onTapStart),x(o,"touchstart",this._onTapStart)),this.nativeDraggable&&(x(o,"dragover",this),x(o,"dragenter",this)),rt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Q(this,Vr())}f.prototype={constructor:f,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(fe=null)},_getDirection:function(e,t){return typeof this.options.direction=="function"?this.options.direction.call(this,e,t,p):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,r=this.el,n=this.options,i=n.preventOnFilter,a=e.type,l=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,s=(l||e).target,d=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,c=n.filter;if(Qr(r),!p&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||n.disabled)&&!d.isContentEditable&&!(!this.nativeDraggable&&Ne&&s&&s.tagName.toUpperCase()==="SELECT")&&(s=W(s,n.draggable,r,!1),!(s&&s.animated)&&Je!==s)){if(ge=Y(s),Ve=Y(s,n.draggable),typeof c=="function"){if(c.call(this,e,s,this)){H({sortable:t,rootEl:d,name:"filter",targetEl:s,toEl:r,fromEl:r}),L("filter",t,{evt:e}),i&&e.cancelable&&e.preventDefault();return}}else if(c&&(c=c.split(",").some(function(u){if(u=W(d,u.trim(),r,!1),u)return H({sortable:t,rootEl:u,name:"filter",targetEl:s,fromEl:r,toEl:r}),L("filter",t,{evt:e}),!0}),c)){i&&e.cancelable&&e.preventDefault();return}n.handle&&!W(d,n.handle,r,!1)||this._prepareDragStart(e,l,s)}}},_prepareDragStart:function(e,t,r){var n=this,i=n.el,a=n.options,l=i.ownerDocument,s;if(r&&!p&&r.parentNode===i){var d=O(r);if(S=i,p=r,_=p.parentNode,ce=p.nextSibling,Je=r,Fe=a.group,f.dragged=p,pe={target:p,clientX:(t||e).clientX,clientY:(t||e).clientY},Zt=pe.clientX-d.left,Gt=pe.clientY-d.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,p.style["will-change"]="all",s=function(){if(L("delayEnded",n,{evt:e}),f.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!zt&&n.nativeDraggable&&(p.draggable=!0),n._triggerDragStart(e,t),H({sortable:n,name:"choose",originalEvent:e}),B(p,a.chosenClass,!0)},a.ignore.split(",").forEach(function(c){Ko(p,c.trim(),Ot)}),x(l,"dragover",ue),x(l,"mousemove",ue),x(l,"touchmove",ue),x(l,"mouseup",n._onDrop),x(l,"touchend",n._onDrop),x(l,"touchcancel",n._onDrop),zt&&this.nativeDraggable&&(this.options.touchStartThreshold=4,p.draggable=!0),L("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(Re||ee))){if(f.eventCanceled){this._onDrop();return}x(l,"mouseup",n._disableDelayedDrag),x(l,"touchend",n._disableDelayedDrag),x(l,"touchcancel",n._disableDelayedDrag),x(l,"mousemove",n._delayedDragTouchMoveHandler),x(l,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&x(l,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(s,a.delay)}else s()}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){p&&Ot(p),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;b(e,"mouseup",this._disableDelayedDrag),b(e,"touchend",this._disableDelayedDrag),b(e,"touchcancel",this._disableDelayedDrag),b(e,"mousemove",this._delayedDragTouchMoveHandler),b(e,"touchmove",this._delayedDragTouchMoveHandler),b(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||e.pointerType=="touch"&&e,!this.nativeDraggable||t?this.options.supportPointer?x(document,"pointermove",this._onTouchMove):t?x(document,"touchmove",this._onTouchMove):x(document,"mousemove",this._onTouchMove):(x(p,"dragend",this),x(S,"dragstart",this._onDragStart));try{document.selection?Qe(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,t){if(ye=!1,S&&p){L("dragStarted",this,{evt:t}),this.nativeDraggable&&x(document,"dragover",jr);var r=this.options;!e&&B(p,r.dragClass,!1),B(p,r.ghostClass,!0),f.active=this,e&&this._appendGhost(),H({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(z){this._lastX=z.clientX,this._lastY=z.clientY,ir();for(var e=document.elementFromPoint(z.clientX,z.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(z.clientX,z.clientY),e!==t);)t=e;if(p.parentNode[R]._isOutsideThisEl(e),t)do{if(t[R]){var r=void 0;if(r=t[R]._onDragOver({clientX:z.clientX,clientY:z.clientY,target:e,rootEl:t}),r&&!this.options.dragoverBubble)break}e=t}while(t=t.parentNode);ar()}},_onTouchMove:function(e){if(pe){var t=this.options,r=t.fallbackTolerance,n=t.fallbackOffset,i=e.touches?e.touches[0]:e,a=y&&me(y,!0),l=y&&a&&a.a,s=y&&a&&a.d,d=je&&$&&qt($),c=(i.clientX-pe.clientX+n.x)/(l||1)+(d?d[0]-Tt[0]:0)/(l||1),u=(i.clientY-pe.clientY+n.y)/(s||1)+(d?d[1]-Tt[1]:0)/(s||1);if(!f.active&&!ye){if(r&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<r)return;this._onDragStart(e,!0)}if(y){a?(a.e+=c-(Ct||0),a.f+=u-(_t||0)):a={a:1,b:0,c:0,d:1,e:c,f:u};var m="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");h(y,"webkitTransform",m),h(y,"mozTransform",m),h(y,"msTransform",m),h(y,"transform",m),Ct=c,_t=u,z=i}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!y){var e=this.options.fallbackOnBody?document.body:S,t=O(p,!0,je,!0,e),r=this.options;if(je){for($=e;h($,"position")==="static"&&h($,"transform")==="none"&&$!==document;)$=$.parentNode;$!==document.body&&$!==document.documentElement?($===document&&($=q()),t.top+=$.scrollTop,t.left+=$.scrollLeft):$=q(),Tt=qt($)}y=p.cloneNode(!0),B(y,r.ghostClass,!1),B(y,r.fallbackClass,!0),B(y,r.dragClass,!0),h(y,"transition",""),h(y,"transform",""),h(y,"box-sizing","border-box"),h(y,"margin",0),h(y,"top",t.top),h(y,"left",t.left),h(y,"width",t.width),h(y,"height",t.height),h(y,"opacity","0.8"),h(y,"position",je?"absolute":"fixed"),h(y,"zIndex","100000"),h(y,"pointerEvents","none"),f.ghost=y,e.appendChild(y),h(y,"transform-origin",Zt/parseInt(y.style.width)*100+"% "+Gt/parseInt(y.style.height)*100+"%")}},_onDragStart:function(e,t){var r=this,n=e.dataTransfer,i=r.options;if(L("dragStart",this,{evt:e}),f.eventCanceled){this._onDrop();return}L("setupClone",this),f.eventCanceled||(C=tr(p),C.removeAttribute("id"),C.draggable=!1,C.style["will-change"]="",this._hideClone(),B(C,this.options.chosenClass,!1),f.clone=C),r.cloneId=Qe(function(){L("clone",r),!f.eventCanceled&&(r.options.removeCloneOnHide||S.insertBefore(C,p),r._hideClone(),H({sortable:r,name:"clone"}))}),!t&&B(p,i.dragClass,!0),t?(ot=!0,r._loopId=setInterval(r._emulateDragOver,50)):(b(document,"mouseup",r._onDrop),b(document,"touchend",r._onDrop),b(document,"touchcancel",r._onDrop),n&&(n.effectAllowed="move",i.setData&&i.setData.call(r,n,p)),x(document,"drop",r),h(p,"transform","translateZ(0)")),ye=!0,r._dragStartId=Qe(r._dragStarted.bind(r,t,e)),x(document,"selectstart",r),Ae=!0,Ne&&h(document.body,"user-select","none")},_onDragOver:function(e){var t=this.el,r=e.target,n,i,a,l=this.options,s=l.group,d=f.active,c=Fe===s,u=l.sort,m=D||d,w,v=this,E=!1;if(Mt)return;function k(Se,mr){L(Se,v,Z({evt:e,isOwner:c,axis:w?"vertical":"horizontal",revert:a,dragRect:n,targetRect:i,canSort:u,fromSortable:m,target:r,completed:P,onMove:function(Rt,vr){return We(S,t,p,n,Rt,O(Rt),e,vr)},changed:F},mr))}function G(){k("dragOverAnimationCapture"),v.captureAnimationState(),v!==m&&m.captureAnimationState()}function P(Se){return k("dragOverCompleted",{insertion:Se}),Se&&(c?d._hideClone():d._showClone(v),v!==m&&(B(p,D?D.options.ghostClass:d.options.ghostClass,!1),B(p,l.ghostClass,!0)),D!==v&&v!==f.active?D=v:v===f.active&&D&&(D=null),m===v&&(v._ignoreWhileAnimating=r),v.animateAll(function(){k("dragOverAnimationComplete"),v._ignoreWhileAnimating=null}),v!==m&&(m.animateAll(),m._ignoreWhileAnimating=null)),(r===p&&!p.animated||r===t&&!r.animated)&&(fe=null),!l.dragoverBubble&&!e.rootEl&&r!==document&&(p.parentNode[R]._isOutsideThisEl(e.target),!Se&&ue(e)),!l.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),E=!0}function F(){X=Y(p),re=Y(p,l.draggable),H({sortable:v,name:"change",toEl:t,newIndex:X,newDraggableIndex:re,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),r=W(r,l.draggable,t,!0),k("dragOver"),f.eventCanceled)return E;if(p.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||v._ignoreWhileAnimating===r)return P(!1);if(ot=!1,d&&!l.disabled&&(c?u||(a=_!==S):D===this||(this.lastPutMode=Fe.checkPull(this,d,p,e))&&s.checkPut(this,d,p,e))){if(w=this._getDirection(e,r)==="vertical",n=O(p),k("dragOverValid"),f.eventCanceled)return E;if(a)return _=S,G(),this._hideClone(),k("revert"),f.eventCanceled||(ce?S.insertBefore(p,ce):S.appendChild(p)),P(!0);var N=Vt(t,l.draggable);if(!N||Gr(e,w,this)&&!N.animated){if(N===p)return P(!1);if(N&&t===e.target&&(r=N),r&&(i=O(r)),We(S,t,p,n,r,i,e,!!r)!==!1)return G(),N&&N.nextSibling?t.insertBefore(p,N.nextSibling):t.appendChild(p),_=t,F(),P(!0)}else if(N&&Zr(e,w,this)){var le=ve(t,0,l,!0);if(le===p)return P(!1);if(r=le,i=O(r),We(S,t,p,n,r,i,e,!1)!==!1)return G(),t.insertBefore(p,le),_=t,F(),P(!0)}else if(r.parentNode===t){i=O(r);var j=0,se,be=p.parentNode!==t,I=!Fr(p.animated&&p.toRect||n,r.animated&&r.toRect||i,w),xe=w?"top":"left",te=Wt(r,"top","top")||Wt(p,"top","top"),Ee=te?te.scrollTop:void 0;fe!==r&&(se=i[xe],Xe=!1,ze=!I&&l.invertSwap||be),j=Ur(e,r,i,w,I?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,ze,fe===r);var U;if(j!==0){var de=Y(p);do de-=j,U=_.children[de];while(U&&(h(U,"display")==="none"||U===y))}if(j===0||U===r)return P(!1);fe=r,Be=j;var we=r.nextElementSibling,oe=!1;oe=j===1;var ke=We(S,t,p,n,r,i,e,oe);if(ke!==!1)return(ke===1||ke===-1)&&(oe=ke===1),Mt=!0,setTimeout(qr,30),G(),oe&&!we?t.appendChild(p):r.parentNode.insertBefore(p,oe?we:r),te&&er(te,0,Ee-te.scrollTop),_=p.parentNode,se!==void 0&&!ze&&(Ke=Math.abs(se-O(r)[xe])),F(),P(!0)}if(t.contains(p))return P(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){b(document,"mousemove",this._onTouchMove),b(document,"touchmove",this._onTouchMove),b(document,"pointermove",this._onTouchMove),b(document,"dragover",ue),b(document,"mousemove",ue),b(document,"touchmove",ue)},_offUpEvents:function(){var e=this.el.ownerDocument;b(e,"mouseup",this._onDrop),b(e,"touchend",this._onDrop),b(e,"pointerup",this._onDrop),b(e,"touchcancel",this._onDrop),b(document,"selectstart",this)},_onDrop:function(e){var t=this.el,r=this.options;if(X=Y(p),re=Y(p,r.draggable),L("drop",this,{evt:e}),_=p&&p.parentNode,X=Y(p),re=Y(p,r.draggable),f.eventCanceled){this._nulling();return}ye=!1,ze=!1,Xe=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),At(this.cloneId),At(this._dragStartId),this.nativeDraggable&&(b(document,"drop",this),b(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ne&&h(document.body,"user-select",""),h(p,"transform",""),e&&(Ae&&(e.cancelable&&e.preventDefault(),!r.dropBubble&&e.stopPropagation()),y&&y.parentNode&&y.parentNode.removeChild(y),(S===_||D&&D.lastPutMode!=="clone")&&C&&C.parentNode&&C.parentNode.removeChild(C),p&&(this.nativeDraggable&&b(p,"dragend",this),Ot(p),p.style["will-change"]="",Ae&&!ye&&B(p,D?D.options.ghostClass:this.options.ghostClass,!1),B(p,this.options.chosenClass,!1),H({sortable:this,name:"unchoose",toEl:_,newIndex:null,newDraggableIndex:null,originalEvent:e}),S!==_?(X>=0&&(H({rootEl:_,name:"add",toEl:_,fromEl:S,originalEvent:e}),H({sortable:this,name:"remove",toEl:_,originalEvent:e}),H({rootEl:_,name:"sort",toEl:_,fromEl:S,originalEvent:e}),H({sortable:this,name:"sort",toEl:_,originalEvent:e})),D&&D.save()):X!==ge&&X>=0&&(H({sortable:this,name:"update",toEl:_,originalEvent:e}),H({sortable:this,name:"sort",toEl:_,originalEvent:e})),f.active&&((X==null||X===-1)&&(X=ge,re=Ve),H({sortable:this,name:"end",toEl:_,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){L("nulling",this),S=p=_=y=ce=C=Je=ne=pe=z=Ae=X=re=ge=Ve=fe=Be=D=Fe=f.dragged=f.ghost=f.clone=f.active=null,nt.forEach(function(e){e.checked=!0}),nt.length=Ct=_t=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":p&&(this._onDragOver(e),Wr(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],t,r=this.el.children,n=0,i=r.length,a=this.options;n<i;n++)t=r[n],W(t,a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||Kr(t));return e},sort:function(e,t){var r={},n=this.el;this.toArray().forEach(function(i,a){var l=n.children[a];W(l,this.options.draggable,n,!1)&&(r[i]=l)},this),t&&this.captureAnimationState(),e.forEach(function(i){r[i]&&(n.removeChild(r[i]),n.appendChild(r[i]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return W(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var r=this.options;if(t===void 0)return r[e];var n=Ye.modifyOption(this,e,t);typeof n<"u"?r[e]=n:r[e]=t,e==="group"&&nr(r)},destroy:function(){L("destroy",this);var e=this.el;e[R]=null,b(e,"mousedown",this._onTapStart),b(e,"touchstart",this._onTapStart),b(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(b(e,"dragover",this),b(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),rt.splice(rt.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!ne){if(L("hideClone",this),f.eventCanceled)return;h(C,"display","none"),this.options.removeCloneOnHide&&C.parentNode&&C.parentNode.removeChild(C),ne=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(ne){if(L("showClone",this),f.eventCanceled)return;p.parentNode==S&&!this.options.group.revertClone?S.insertBefore(C,p):ce?S.insertBefore(C,ce):S.appendChild(C),this.options.group.revertClone&&this.animate(p,C),h(C,"display",""),ne=!1}}};function Wr(o){o.dataTransfer&&(o.dataTransfer.dropEffect="move"),o.cancelable&&o.preventDefault()}function We(o,e,t,r,n,i,a,l){var s,d=o[R],c=d.options.onMove,u;return window.CustomEvent&&!ee&&!Re?s=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(s=document.createEvent("Event"),s.initEvent("move",!0,!0)),s.to=e,s.from=o,s.dragged=t,s.draggedRect=r,s.related=n||e,s.relatedRect=i||O(e),s.willInsertAfter=l,s.originalEvent=a,o.dispatchEvent(s),c&&(u=c.call(d,s,a)),u}function Ot(o){o.draggable=!1}function qr(){Mt=!1}function Zr(o,e,t){var r=O(ve(t.el,0,t.options,!0)),n=10;return e?o.clientX<r.left-n||o.clientY<r.top&&o.clientX<r.right:o.clientY<r.top-n||o.clientY<r.bottom&&o.clientX<r.left}function Gr(o,e,t){var r=O(Vt(t.el,t.options.draggable)),n=10;return e?o.clientX>r.right+n||o.clientX<=r.right&&o.clientY>r.bottom&&o.clientX>=r.left:o.clientX>r.right&&o.clientY>r.top||o.clientX<=r.right&&o.clientY>r.bottom+n}function Ur(o,e,t,r,n,i,a,l){var s=r?o.clientY:o.clientX,d=r?t.height:t.width,c=r?t.top:t.left,u=r?t.bottom:t.right,m=!1;if(!a){if(l&&Ke<d*n){if(!Xe&&(Be===1?s>c+d*i/2:s<u-d*i/2)&&(Xe=!0),Xe)m=!0;else if(Be===1?s<c+Ke:s>u-Ke)return-Be}else if(s>c+d*(1-n)/2&&s<u-d*(1-n)/2)return Jr(e)}return m=m||a,m&&(s<c+d*i/2||s>u-d*i/2)?s>c+d/2?1:-1:0}function Jr(o){return Y(p)<Y(o)?1:-1}function Kr(o){for(var e=o.tagName+o.className+o.src+o.href+o.textContent,t=e.length,r=0;t--;)r+=e.charCodeAt(t);return r.toString(36)}function Qr(o){nt.length=0;for(var e=o.getElementsByTagName("input"),t=e.length;t--;){var r=e[t];r.checked&&nt.push(r)}}function Qe(o){return setTimeout(o,0)}function At(o){return clearTimeout(o)}xt&&x(document,"touchmove",function(o){(f.active||ye)&&o.cancelable&&o.preventDefault()});f.utils={on:x,off:b,css:h,find:Ko,is:function(e,t){return!!W(e,t,e,!1)},extend:Nr,throttle:Qo,closest:W,toggleClass:B,clone:tr,index:Y,nextTick:Qe,cancelNextTick:At,detectDirection:rr,getChild:ve};f.get=function(o){return o[R]};f.mount=function(){for(var o=arguments.length,e=new Array(o),t=0;t<o;t++)e[t]=arguments[t];e[0].constructor===Array&&(e=e[0]),e.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(f.utils=Z(Z({},f.utils),r.utils)),Ye.mount(r)})};f.create=function(o,e){return new f(o,e)};f.version=Ar;var T=[],He,Ht,Lt=!1,Dt,$t,it,Le;function en(){function o(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return o.prototype={dragStarted:function(t){var r=t.originalEvent;this.sortable.nativeDraggable?x(document,"dragover",this._handleAutoScroll):this.options.supportPointer?x(document,"pointermove",this._handleFallbackAutoScroll):r.touches?x(document,"touchmove",this._handleFallbackAutoScroll):x(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var r=t.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?b(document,"dragover",this._handleAutoScroll):(b(document,"pointermove",this._handleFallbackAutoScroll),b(document,"touchmove",this._handleFallbackAutoScroll),b(document,"mousemove",this._handleFallbackAutoScroll)),Jt(),et(),Ir()},nulling:function(){it=Ht=He=Lt=Le=Dt=$t=null,T.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,r){var n=this,i=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,l=document.elementFromPoint(i,a);if(it=t,r||this.options.forceAutoScrollFallback||Re||ee||Ne){Pt(t,this.options,l,r);var s=ie(l,!0);Lt&&(!Le||i!==Dt||a!==$t)&&(Le&&Jt(),Le=setInterval(function(){var d=ie(document.elementFromPoint(i,a),!0);d!==s&&(s=d,et()),Pt(t,n.options,d,r)},10),Dt=i,$t=a)}else{if(!this.options.bubbleScroll||ie(l,!0)===q()){et();return}Pt(t,this.options,ie(l,!1),!1)}}},Q(o,{pluginName:"scroll",initializeByDefault:!0})}function et(){T.forEach(function(o){clearInterval(o.pid)}),T=[]}function Jt(){clearInterval(Le)}var Pt=Qo(function(o,e,t,r){if(e.scroll){var n=(o.touches?o.touches[0]:o).clientX,i=(o.touches?o.touches[0]:o).clientY,a=e.scrollSensitivity,l=e.scrollSpeed,s=q(),d=!1,c;Ht!==t&&(Ht=t,et(),He=e.scroll,c=e.scrollFn,He===!0&&(He=ie(t,!0)));var u=0,m=He;do{var w=m,v=O(w),E=v.top,k=v.bottom,G=v.left,P=v.right,F=v.width,N=v.height,le=void 0,j=void 0,se=w.scrollWidth,be=w.scrollHeight,I=h(w),xe=w.scrollLeft,te=w.scrollTop;w===s?(le=F<se&&(I.overflowX==="auto"||I.overflowX==="scroll"||I.overflowX==="visible"),j=N<be&&(I.overflowY==="auto"||I.overflowY==="scroll"||I.overflowY==="visible")):(le=F<se&&(I.overflowX==="auto"||I.overflowX==="scroll"),j=N<be&&(I.overflowY==="auto"||I.overflowY==="scroll"));var Ee=le&&(Math.abs(P-n)<=a&&xe+F<se)-(Math.abs(G-n)<=a&&!!xe),U=j&&(Math.abs(k-i)<=a&&te+N<be)-(Math.abs(E-i)<=a&&!!te);if(!T[u])for(var de=0;de<=u;de++)T[de]||(T[de]={});(T[u].vx!=Ee||T[u].vy!=U||T[u].el!==w)&&(T[u].el=w,T[u].vx=Ee,T[u].vy=U,clearInterval(T[u].pid),(Ee!=0||U!=0)&&(d=!0,T[u].pid=setInterval((function(){r&&this.layer===0&&f.active._onTouchMove(it);var we=T[this.layer].vy?T[this.layer].vy*l:0,oe=T[this.layer].vx?T[this.layer].vx*l:0;typeof c=="function"&&c.call(f.dragged.parentNode[R],oe,we,o,it,T[this.layer].el)!=="continue"||er(T[this.layer].el,oe,we)}).bind({layer:u}),24))),u++}while(e.bubbleScroll&&m!==s&&(m=ie(m,!1)));Lt=d}},30),lr=function(e){var t=e.originalEvent,r=e.putSortable,n=e.dragEl,i=e.activeSortable,a=e.dispatchSortableEvent,l=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var d=r||i;l();var c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,u=document.elementFromPoint(c.clientX,c.clientY);s(),d&&!d.el.contains(u)&&(a("spill"),this.onSpill({dragEl:n,putSortable:r}))}};function Bt(){}Bt.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,r=e.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var n=ve(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(t,n):this.sortable.el.appendChild(t),this.sortable.animateAll(),r&&r.animateAll()},drop:lr};Q(Bt,{pluginName:"revertOnSpill"});function Xt(){}Xt.prototype={onSpill:function(e){var t=e.dragEl,r=e.putSortable,n=r||this.sortable;n.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),n.animateAll()},drop:lr};Q(Xt,{pluginName:"removeOnSpill"});f.mount(new en);f.mount(Xt,Bt);const tn=(o,e,t)=>{let r=[];o._sortable=f.create(o,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:n=>{const i=n.item;r=Array.prototype.slice.call(i.parentNode.childNodes),r=r.filter(a=>a.nodeType!=Node.ELEMENT_NODE||!a.classList.contains("sortable-fallback"))},onEnd:n=>{const a=n.item.parentNode;for(const s of r)a.appendChild(s);if(n.oldIndex==n.newIndex)return;const l=e.getArray().find(s=>s.ol_uid===n.item.querySelector("eox-layercontrol-layer").layer.ol_uid);e.remove(l),e.insertAt(e.getLength()-n.newIndex,l),t.requestUpdate()}})},Nt=(o,e,t)=>{let r=[];const n=(i,a,l)=>{r=[...r,...i.filter(d=>d.get(a)===l)];const s=i.filter(d=>d.getLayers);return s.length>0&&s.forEach(d=>n(d.getLayers().getArray(),a,l)),r};return n(o,e,t),r},on=(o,e)=>{var t,r,n;if(!(!o||!e))return o.getLayers?"group":(n=(t=e.getInteractions().getArray().filter(i=>i.freehand_!==void 0).map(i=>i.source_))==null?void 0:t.ol_uid)!=null&&n.includes(o.getSource?(r=o.getSource())==null?void 0:r.ol_uid:void 0)?"draw":o.declutter_!==void 0?"vector":"raster"};var at,lt;class sr extends ae{constructor(){super();A(this,at,"");A(this,lt,"");this.layer=null,this.unstyled=!1}render(){var t;return g`
      <style>
        ${M(this,at)}
        ${!this.unstyled&&M(this,lt)}
      </style>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value=${It((t=this.layer)==null?void 0:t.getOpacity())}
        @input=${r=>this.layer.setOpacity(parseFloat(r.target.value))}
      />
      <button
        class="delete"
        @click=${()=>{var r,n;(r=this.layer)==null||r.set("layerControlOptional",!0),(n=this.layer)==null||n.setVisible(!1),this.dispatchEvent(new CustomEvent("changed",{detail:this.layer,bubbles:!0}))}}
      >
        x
      </button>
    `}}at=new WeakMap,lt=new WeakMap,V(sr,"properties",{layer:{attribute:!1},unstyled:{type:Boolean}});customElements.define("eox-layercontrol-layerconfig",sr);var st,dt;class dr extends ae{constructor(){super();A(this,st,`
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
  `);A(this,dt,`
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
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1}render(){return g`
      <style>
        ${M(this,st)}
        ${!this.unstyled&&M(this,dt)}
      </style>
      <div class="tabbed">
        ${K(this.actions.length+this.tabs.length>1,()=>g`
            <nav>
              <div>
                ${Ge(this.tabs,(t,r)=>g`
                    <label
                      class=${this.selectedTab===r&&"highlighted"}
                      @click=${()=>this.selectedTab=r}
                    >
                      <slot name=${t+"-icon"}>${t}</slot>
                    </label>
                  `)}
              </div>
              <div>
                ${Ge(this.actions,t=>g`
                    <span>
                      <slot name=${t+"-icon"}>${t}</slot>
                    </span>
                  `)}
              </div>
            </nav>
          `)}
        <figure>
          ${Ge(this.tabs,(t,r)=>g`
              <div class="tab ${this.selectedTab===r&&"highlighted"}">
                <slot name=${t+"-content"}>${t}</slot>
              </div>
            `)}
        </figure>
      </div>
    `}}st=new WeakMap,dt=new WeakMap,V(dr,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean}});customElements.define("eox-layercontrol-tabs",dr);var pt,ut;class pr extends ae{constructor(){super();V(this,"_parseActions",t=>t==null?void 0:t.filter(r=>["remove","sort"].filter(n=>{var i;return(i=this.layer)!=null&&i.get("layerControlDisable")?n!=="sort":!0}).includes(r)));V(this,"_parseTools",t=>t==null?void 0:t.filter(r=>{var i;let n=!0;return["remove","sort"].includes(r)&&(n=!1),r==="info"&&(n=this.layer.get("description")),r==="config"&&(n=(i=this.layer.style_)==null?void 0:i.color),n}));V(this,"_removeButton",g`
    <button
      class="remove-icon icon"
      @click=${()=>{var t,r;(t=this.layer)==null||t.set("layerControlOptional",!0),(r=this.layer)==null||r.setVisible(!1),this.dispatchEvent(new CustomEvent("changed",{detail:this.layer,bubbles:!0}))}}
    >
      x
    </button>
  `);V(this,"_sortButton",g`
    <button class="sort-icon icon drag-handle">sort</button>
  `);A(this,pt,"");A(this,ut,`
    ${Or}  
    ${_r}
    ${Zo}
    ${Tr}
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
  `);this.layer=null,this.tools=[],this.unstyled=!1}createRenderRoot(){return this}render(){var t,r;return g`
      <style>
        ${M(this,pt)}
        ${!this.unstyled&&M(this,ut)}
      </style>
      ${K(((t=this._parseActions(this.tools))==null?void 0:t.length)+((r=this._parseTools(this.tools))==null?void 0:r.length)>0,()=>{var n,i;return g`
          ${K(((n=this._parseActions(this.tools))==null?void 0:n.length)===1&&((i=this._parseTools(this.tools))==null?void 0:i.length)===0,()=>g`
              <div class="single-action-container">
                <div class="single-action">
                  ${this[`_${this._parseActions(this.tools)[0]}Button`]}
                </div>
              </div>
            `,()=>{var a;return g`
              <details class="tools">
                <summary>
                  <button
                    class="icon ${this.tools.length===1?`${this.tools[0]}-icon`:""}"
                  >
                    Tools
                  </button>
                </summary>
                <eox-layercontrol-tabs
                  .actions=${this._parseActions(this.tools)}
                  .tabs=${this._parseTools(this.tools)}
                  .unstyled=${this.unstyled}
                >
                  ${Ge(this._parseTools(this.tools),l=>g`
                      <button slot="${l}-icon" class="icon">${l}</button>
                    `)}

                  <div slot="info-content">
                    ${Sr(this.layer.get("description"))}
                  </div>
                  <div slot="opacity-content">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value=${It((a=this.layer)==null?void 0:a.getOpacity())}
                      @input=${l=>this.layer.setOpacity(parseFloat(l.target.value))}
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
    `}}pt=new WeakMap,ut=new WeakMap,V(pr,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean}});customElements.define("eox-layercontrol-layer-tools",pr);var ct,ht;class ur extends ae{constructor(){super();A(this,ct,"");A(this,ht,`
    ${Zo}
    eox-layercontrol-layer {
      width: 100%;
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
  `);this.layer=null,this.titleProperty="title",this.tools=[],this.unstyled=!1}createRenderRoot(){return this}render(){return g`
      <style>
        ${M(this,ct)}
        ${!this.unstyled&&M(this,ht)}
      </style>
      ${K(this.layer,()=>{var t;return g`
          <div class="layer ${this.layer.getVisible()?"visible":""}">
            <label
              class="${this.layer.get("layerControlDisable")?"disabled":""}"
            >
              <input
                type=${this.layer.get("layerControlExclusive")?"radio":"checkbox"}
                .checked=${It(this.layer.getVisible())}
                @click=${r=>{this.layer.setVisible(r.target.checked),r.target.checked&&this.layer.get("layerControlExclusive")&&this.parentNode.parentNode.querySelectorAll("li > eox-layercontrol-layer").forEach(i=>{var a;i.layer!==this.layer&&((a=i.layer)!=null&&a.get("layerControlExclusive"))&&(i.layer.setVisible(!1),i.requestUpdate())}),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),this.requestUpdate()}}
              />
              <span class="title">${this.layer.get(this.titleProperty)}</span>
              ${K(((t=this.tools)==null?void 0:t.length)>0,()=>g`<span class="tools-placeholder"></span>`)}
            </label>
          </div>
          <eox-layercontrol-layer-tools
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-layer-tools>
        `})}
    `}}ct=new WeakMap,ht=new WeakMap,V(ur,"properties",{layer:{attribute:!1},titleProperty:{attribute:"title-property",type:String},tools:{attribute:!1},unstyled:{type:Boolean}});customElements.define("eox-layercontrol-layer",ur);var ft,yt;class cr extends ae{constructor(){super();A(this,ft,"");A(this,yt,`
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
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.tools=[],this.unstyled=!1}createRenderRoot(){return this}render(){return g`
      <style>
        ${M(this,ft)}
        ${!this.unstyled&&M(this,yt)}
      </style>
      ${K(this.group,()=>g`
          <details open=${this.group.get("layerControlExpand")||qo}>
            <summary>
              <eox-layercontrol-layer
                .layer=${this.group}
                .titleProperty=${this.titleProperty}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>
            <eox-layercontrol-layer-list
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}ft=new WeakMap,yt=new WeakMap,V(cr,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},tools:{attribute:!1},unstyled:{type:Boolean}});customElements.define("eox-layercontrol-layer-group",cr);var gt,mt;class hr extends ae{constructor(){super();A(this,gt,"");A(this,mt,`
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
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.unstyled=!1}updated(){this.layers&&(this.layers.on("change:length",()=>{this.requestUpdate(),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}),tn(this.renderRoot.querySelector("ul"),this.layers,this))}createRenderRoot(){return this}render(){return g`
      <style>
        ${M(this,gt)}
        ${!this.unstyled&&M(this,mt)}
      </style>
      <ul>
        ${K(this.layers,()=>g`
            ${this.layers.getArray().filter(t=>!t.get("layerControlHide")&&!t.get("layerControlOptional")).reverse().map(t=>Dr(t.get(this.idProperty),g`
                    <li
                      data-layer="${t.get(this.idProperty)}"
                      data-type="${on(t,this.map)}"
                    >
                      ${t.getLayers?g`
                              <eox-layercontrol-layer-group
                                .group=${t}
                                .idProperty=${this.idProperty}
                                .map=${this.map}
                                .titleProperty=${this.titleProperty}
                                .tools=${this.tools}
                                .unstyled=${this.unstyled}
                                @changed=${()=>this.requestUpdate()}
                              >
                              </eox-layercontrol-layer-group>
                            `:g`
                              <eox-layercontrol-layer
                                .layer=${t}
                                .titleProperty=${this.titleProperty}
                                .tools=${this.tools}
                                .unstyled=${this.unstyled}
                                @changed=${()=>{this.requestUpdate()}}
                              ></eox-layercontrol-layer>
                            `}
                    </li>
                  `))}
          `)}
      </ul>
    `}}gt=new WeakMap,mt=new WeakMap,V(hr,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},tools:{attribute:!1},unstyled:{type:Boolean}});customElements.define("eox-layercontrol-layer-list",hr);class fr extends ae{constructor(){super(),this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1}createRenderRoot(){return this}render(){return g`
      <label for="optional">Optional layers</label>

      <select name="optional" data-cy="optionalLayers">
        <option disabled selected value>
          -- select an optional layer to add --
        </option>
        ${Nt(this.layers.getArray(),"layerControlOptional",!0).map(e=>g`
            <option
              value="${e.get(this.idProperty)||e.ol_uid}"
            >
              ${e.get(this.titleProperty)||`layer ${e.get(this.idProperty)}`}
            </option>
          `)}
      </select>
      <button
        @click="${()=>{const e=Nt(this.layers.getArray(),"layerControlOptional",!0).find(t=>(t.get(this.idProperty)||t.ol_uid)===this.querySelector("select[name=optional]").value);e==null||e.set("layerControlOptional",!1),e==null||e.setVisible(!0),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),this.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(t=>t.requestUpdate()),this.requestUpdate()}}"
      >
        add
      </button>
    `}}V(fr,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",fr);var vt,bt;class yr extends ae{constructor(){super();A(this,vt,"");A(this,bt,`
    * {
      font-family: Roboto, sans-serif;
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.tools=["info","opacity","remove","sort"],this.unstyled=!1}updated(){const t=document.querySelector(this.for);t&&(this.map=t.map)}render(){var t;return g`
      <style>
        ${M(this,vt)}
        ${!this.unstyled&&M(this,bt)}
      </style>
      ${K(this.map,()=>g`
          <eox-layercontrol-layer-list
            class="layers"
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .map=${this.map}
            .titleProperty=${this.titleProperty}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-layer-list>
        `)}
      ${K(this.map&&((t=Nt(this.map.getLayers().getArray(),"layerControlOptional",!0))==null?void 0:t.length)>0,()=>g`
          <eox-layercontrol-optional-list
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}vt=new WeakMap,bt=new WeakMap,V(yr,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},tools:{attribute:!1},unstyled:{type:Boolean}});customElements.define("eox-layercontrol",yr);const gr=g` <eox-map
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
></eox-map>`,mn={title:"Elements/eox-layercontrol",tags:["autodocs"],component:"eox-layercontrol",parameters:{componentSubtitle:"Manage and configure OpenLayers map layers",layout:"centered"}},Ce={args:{idProperty:"id",titleProperty:"title",unstyled:!1},render:o=>g`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${o.idProperty}
        .titleProperty=${o.titleProperty}
        .unstyled=${o.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      ${gr}
    </div>
  `},_e={args:{},render:(o,e)=>g`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#exclusive"></eox-layercontrol>
      <eox-map
        id="exclusive"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Tile",properties:{title:"Terrain Light",layerControlExclusive:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}},{type:"Tile",properties:{title:"EOxCloudless",layerControlExclusive:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1}])}
      >
      </eox-map>
    </div>
  `},Te={args:{},render:(o,e)=>g`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#optional"></eox-layercontrol>
      <eox-map
        id="optional"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Tile",properties:{title:"EOxCloudless 2021",layerControlOptional:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1},{type:"Tile",properties:{title:"EOxCloudless 2020",layerControlOptional:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1},{type:"Tile",properties:{title:"EOxCloudless 2019",layerControlOptional:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2019_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1},{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}}])}
      >
      </eox-map>
    </div>
  `},Oe={args:{},render:(o,e)=>g`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#expanded"></eox-layercontrol>
      <eox-map
        id="expanded"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}},{type:"Group",properties:{title:"Layer group",layerControlExpand:!0},layers:[{type:"Tile",properties:{title:"EOxCloudless"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1}]}])}
      >
      </eox-map>
    </div>
  `},De={args:{},render:(o,e)=>g`
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
  `},$e={args:{},render:(o,e)=>g`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#hidden"></eox-layercontrol>
      <eox-map
        id="hidden"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Vector",properties:{title:"Regions",id:"regions",layerControlHide:!0},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"}},{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}}])}
      >
      </eox-map>
    </div>
  `};var Kt;const qe={args:{idProperty:"id",titleProperty:"title",unstyled:!1},render:(o,e)=>g(Kt||(Kt=Et([`
    <div style="display: flex">
      <eox-layercontrol-layer
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
  `])),o.idProperty,o.titleProperty,o.unstyled)};var Qt;const Ze={args:{unstyled:!1},render:(o,e)=>g(Qt||(Qt=Et([`
    <div style="display: flex">
      <eox-layercontrol-layer-list
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
  `])),o.unstyled)},Pe={render:()=>g`
    <eox-layercontrol-tabs
      .actions=${["delete"]}
      .tabs=${["info","opacity","config"]}
    ></eox-layercontrol-tabs>
  `},Me={args:{unstyled:!0},render:o=>g`
    <div style="display: flex">
      <eox-layercontrol
        .unstyled=${o.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      ${gr}
    </div>
  `};var eo,to,oo,ro,no;Ce.parameters={...Ce.parameters,docs:{...(eo=Ce.parameters)==null?void 0:eo.docs,source:{originalSource:`{
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
}`,...(oo=(to=Ce.parameters)==null?void 0:to.docs)==null?void 0:oo.source},description:{story:"Basic layercontrol setup.",...(no=(ro=Ce.parameters)==null?void 0:ro.docs)==null?void 0:no.description}}};var io,ao,lo,so,po;_e.parameters={..._e.parameters,docs:{...(io=_e.parameters)==null?void 0:io.docs,source:{originalSource:`{
  args: {},
  render: (args, test) => html\`
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
}`,...(lo=(ao=_e.parameters)==null?void 0:ao.docs)==null?void 0:lo.source},description:{story:"By adding the `layerControlExclusive` property to map layers,\nonly one of them at a time can be visualized.",...(po=(so=_e.parameters)==null?void 0:so.docs)==null?void 0:po.description}}};var uo,co,ho,fo,yo;Te.parameters={...Te.parameters,docs:{...(uo=Te.parameters)==null?void 0:uo.docs,source:{originalSource:`{
  args: {},
  render: (args, test) => html\`
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
}`,...(ho=(co=Te.parameters)==null?void 0:co.docs)==null?void 0:ho.source},description:{story:`By adding the \`layerControlOptional\` property to map layers,
they are not initially rendered in the layer list, but in a
selection interface. They can be added to the layer list manually.
Removing a layer puts it back into the optional list.`,...(yo=(fo=Te.parameters)==null?void 0:fo.docs)==null?void 0:yo.description}}};var go,mo,vo,bo,xo;Oe.parameters={...Oe.parameters,docs:{...(go=Oe.parameters)==null?void 0:go.docs,source:{originalSource:`{
  args: {},
  render: (args, test) => html\`
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
}`,...(vo=(mo=Oe.parameters)==null?void 0:mo.docs)==null?void 0:vo.source},description:{story:"By adding the `layerControlExpand` property to map layers,\nthey render in the layer control as opened.",...(xo=(bo=Oe.parameters)==null?void 0:bo.docs)==null?void 0:xo.description}}};var Eo,wo,So,Co,_o;De.parameters={...De.parameters,docs:{...(Eo=De.parameters)==null?void 0:Eo.docs,source:{originalSource:`{
  args: {},
  render: (args, test) => html\`
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
}`,...(So=(wo=De.parameters)==null?void 0:wo.docs)==null?void 0:So.source},description:{story:`The layer control accepts a "tools" array, which enable
extra functionalities for layers`,...(_o=(Co=De.parameters)==null?void 0:Co.docs)==null?void 0:_o.description}}};var To,Oo,Do,$o,Po;$e.parameters={...$e.parameters,docs:{...(To=$e.parameters)==null?void 0:To.docs,source:{originalSource:`{
  args: {},
  render: (args, test) => html\`
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
}`,...(Do=(Oo=$e.parameters)==null?void 0:Oo.docs)==null?void 0:Do.source},description:{story:"By adding the `layerControlHide` property to map layers,\nthey aren't displayed in the layer control at all (but may\nbe still rendered on the map).",...(Po=($o=$e.parameters)==null?void 0:$o.docs)==null?void 0:Po.description}}};var Mo,Ao,Ho;qe.parameters={...qe.parameters,docs:{...(Mo=qe.parameters)==null?void 0:Mo.docs,source:{originalSource:`{
  args: {
    idProperty: "id",
    titleProperty: "title",
    unstyled: false
  },
  render: (args, test) => html\`
    <div style="display: flex">
      <eox-layercontrol-layer
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
}`,...(Ho=(Ao=qe.parameters)==null?void 0:Ao.docs)==null?void 0:Ho.source}}};var Lo,No,Io;Ze.parameters={...Ze.parameters,docs:{...(Lo=Ze.parameters)==null?void 0:Lo.docs,source:{originalSource:`{
  args: {
    unstyled: false
  },
  render: (args, test) => html\`
    <div style="display: flex">
      <eox-layercontrol-layer-list
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
}`,...(Io=(No=Ze.parameters)==null?void 0:No.docs)==null?void 0:Io.source}}};var Vo,Bo,Xo,Ro,Yo;Pe.parameters={...Pe.parameters,docs:{...(Vo=Pe.parameters)==null?void 0:Vo.docs,source:{originalSource:`{
  render: () => html\`
    <eox-layercontrol-tabs
      .actions=\${["delete"]}
      .tabs=\${["info", "opacity", "config"]}
    ></eox-layercontrol-tabs>
  \`
}`,...(Xo=(Bo=Pe.parameters)==null?void 0:Bo.docs)==null?void 0:Xo.source},description:{story:"Layer control tabs",...(Yo=(Ro=Pe.parameters)==null?void 0:Ro.docs)==null?void 0:Yo.description}}};var ko,Fo,zo,jo,Wo;Me.parameters={...Me.parameters,docs:{...(ko=Me.parameters)==null?void 0:ko.docs,source:{originalSource:`{
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
}`,...(zo=(Fo=Me.parameters)==null?void 0:Fo.docs)==null?void 0:zo.source},description:{story:"Unstyled version of the Element",...(Wo=(jo=Me.parameters)==null?void 0:jo.docs)==null?void 0:Wo.description}}};const vn=["Primary","ExclusiveLayers","OptionalLayers","ExpandedLayers","Tools","HiddenLayers","SingleLayer","LayerList","Tabs","Unstyled"];export{_e as ExclusiveLayers,Oe as ExpandedLayers,$e as HiddenLayers,Ze as LayerList,Te as OptionalLayers,Ce as Primary,qe as SingleLayer,Pe as Tabs,De as Tools,Me as Unstyled,vn as __namedExportsOrder,mn as default};
//# sourceMappingURL=layercontrol.stories-6eeb41a8.js.map
