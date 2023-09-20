import{s as Lt,A as k,x as A}from"./lit-element-c29cbb6b.js";import"./main-31de532a.js";import{t as He,n as B,e as Ot}from"./query-assigned-elements-bec7f9a4.js";import{s as Zt,r as Ut,c as Kt,a as lt,l as st}from"./checkbox-dea1b0c1.js";import{n as It}from"./directive-1613be6b.js";import{b as Qt}from"./button-d0379260.js";import"./templateElement-8d2f8dc8.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-1505bf51.js";import"../sb-preview/runtime.js";import"./directive-helpers-2720686e.js";/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function yt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,i)}return r}function Z(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?yt(Object(r),!0).forEach(function(i){Jt(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):yt(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function Re(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Re=function(e){return typeof e}:Re=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Re(t)}function Jt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ee(){return ee=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},ee.apply(this,arguments)}function er(t,e){if(t==null)return{};var r={},i=Object.keys(t),n,o;for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}function tr(t,e){if(t==null)return{};var r=er(t,e),i,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var rr="1.15.0";function J(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var te=J(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Me=J(/Edge/i),vt=J(/firefox/i),Te=J(/safari/i)&&!J(/chrome/i)&&!J(/android/i),Ht=J(/iP(ad|od|hone)/i),Mt=J(/chrome/i)&&J(/android/i),Vt={capture:!1,passive:!1};function b(t,e,r){t.addEventListener(e,r,!te&&Vt)}function v(t,e,r){t.removeEventListener(e,r,!te&&Vt)}function Ge(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function ir(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function j(t,e,r,i){if(t){r=r||document;do{if(e!=null&&(e[0]===">"?t.parentNode===r&&Ge(t,e):Ge(t,e))||i&&t===r)return t;if(t===r)break}while(t=ir(t))}return null}var bt=/\s+/g;function N(t,e,r){if(t&&e)if(t.classList)t.classList[r?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(bt," ").replace(" "+e+" "," ");t.className=(i+(r?" "+e:"")).replace(bt," ")}}function h(t,e,r){var i=t&&t.style;if(i){if(r===void 0)return document.defaultView&&document.defaultView.getComputedStyle?r=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(r=t.currentStyle),e===void 0?r:r[e];!(e in i)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),i[e]=r+(typeof r=="string"?"":"px")}}function ye(t,e){var r="";if(typeof t=="string")r=t;else do{var i=h(t,"transform");i&&i!=="none"&&(r=i+" "+r)}while(!e&&(t=t.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(r)}function Pt(t,e,r){if(t){var i=t.getElementsByTagName(e),n=0,o=i.length;if(r)for(;n<o;n++)r(i[n],n);return i}return[]}function q(){var t=document.scrollingElement;return t||document.documentElement}function T(t,e,r,i,n){if(!(!t.getBoundingClientRect&&t!==window)){var o,l,a,s,d,f,c;if(t!==window&&t.parentNode&&t!==q()?(o=t.getBoundingClientRect(),l=o.top,a=o.left,s=o.bottom,d=o.right,f=o.height,c=o.width):(l=0,a=0,s=window.innerHeight,d=window.innerWidth,f=window.innerHeight,c=window.innerWidth),(e||r)&&t!==window&&(n=n||t.parentNode,!te))do if(n&&n.getBoundingClientRect&&(h(n,"transform")!=="none"||r&&h(n,"position")!=="static")){var m=n.getBoundingClientRect();l-=m.top+parseInt(h(n,"border-top-width")),a-=m.left+parseInt(h(n,"border-left-width")),s=l+o.height,d=a+o.width;break}while(n=n.parentNode);if(i&&t!==window){var w=ye(n||t),y=w&&w.a,E=w&&w.d;w&&(l/=E,a/=y,c/=y,f/=E,s=l+f,d=a+c)}return{top:l,left:a,bottom:s,right:d,width:c,height:f}}}function Et(t,e,r){for(var i=ae(t,!0),n=T(t)[e];i;){var o=T(i)[r],l=void 0;if(r==="top"||r==="left"?l=n>=o:l=n<=o,!l)return i;if(i===q())break;i=ae(i,!1)}return!1}function ve(t,e,r,i){for(var n=0,o=0,l=t.children;o<l.length;){if(l[o].style.display!=="none"&&l[o]!==p.ghost&&(i||l[o]!==p.dragged)&&j(l[o],r.draggable,t,!1)){if(n===e)return l[o];n++}o++}return null}function ht(t,e){for(var r=t.lastElementChild;r&&(r===p.ghost||h(r,"display")==="none"||e&&!Ge(r,e));)r=r.previousElementSibling;return r||null}function R(t,e){var r=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==p.clone&&(!e||Ge(t,e))&&r++;return r}function wt(t){var e=0,r=0,i=q();if(t)do{var n=ye(t),o=n.a,l=n.d;e+=t.scrollLeft*o,r+=t.scrollTop*l}while(t!==i&&(t=t.parentNode));return[e,r]}function nr(t,e){for(var r in t)if(t.hasOwnProperty(r)){for(var i in e)if(e.hasOwnProperty(i)&&e[i]===t[r][i])return Number(r)}return-1}function ae(t,e){if(!t||!t.getBoundingClientRect)return q();var r=t,i=!1;do if(r.clientWidth<r.scrollWidth||r.clientHeight<r.scrollHeight){var n=h(r);if(r.clientWidth<r.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||r.clientHeight<r.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!r.getBoundingClientRect||r===document.body)return q();if(i||e)return r;i=!0}}while(r=r.parentNode);return q()}function or(t,e){if(t&&e)for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}function Qe(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var Ae;function Nt(t,e){return function(){if(!Ae){var r=arguments,i=this;r.length===1?t.call(i,r[0]):t.apply(i,r),Ae=setTimeout(function(){Ae=void 0},e)}}}function ar(){clearTimeout(Ae),Ae=void 0}function $t(t,e,r){t.scrollLeft+=e,t.scrollTop+=r}function Ft(t){var e=window.Polymer,r=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):r?r(t).clone(!0)[0]:t.cloneNode(!0)}var F="Sortable"+new Date().getTime();function lr(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var i=[].slice.call(this.el.children);i.forEach(function(n){if(!(h(n,"display")==="none"||n===p.ghost)){t.push({target:n,rect:T(n)});var o=Z({},t[t.length-1].rect);if(n.thisAnimationDuration){var l=ye(n,!0);l&&(o.top-=l.f,o.left-=l.e)}n.fromRect=o}})}},addAnimationState:function(i){t.push(i)},removeAnimationState:function(i){t.splice(nr(t,{target:i}),1)},animateAll:function(i){var n=this;if(!this.options.animation){clearTimeout(e),typeof i=="function"&&i();return}var o=!1,l=0;t.forEach(function(a){var s=0,d=a.target,f=d.fromRect,c=T(d),m=d.prevFromRect,w=d.prevToRect,y=a.rect,E=ye(d,!0);E&&(c.top-=E.f,c.left-=E.e),d.toRect=c,d.thisAnimationDuration&&Qe(m,c)&&!Qe(f,c)&&(y.top-c.top)/(y.left-c.left)===(f.top-c.top)/(f.left-c.left)&&(s=dr(y,m,w,n.options)),Qe(c,f)||(d.prevFromRect=f,d.prevToRect=c,s||(s=n.options.animation),n.animate(d,y,c,s)),s&&(o=!0,l=Math.max(l,s),clearTimeout(d.animationResetTimer),d.animationResetTimer=setTimeout(function(){d.animationTime=0,d.prevFromRect=null,d.fromRect=null,d.prevToRect=null,d.thisAnimationDuration=null},s),d.thisAnimationDuration=s)}),clearTimeout(e),o?e=setTimeout(function(){typeof i=="function"&&i()},l):typeof i=="function"&&i(),t=[]},animate:function(i,n,o,l){if(l){h(i,"transition",""),h(i,"transform","");var a=ye(this.el),s=a&&a.a,d=a&&a.d,f=(n.left-o.left)/(s||1),c=(n.top-o.top)/(d||1);i.animatingX=!!f,i.animatingY=!!c,h(i,"transform","translate3d("+f+"px,"+c+"px,0)"),this.forRepaintDummy=sr(i),h(i,"transition","transform "+l+"ms"+(this.options.easing?" "+this.options.easing:"")),h(i,"transform","translate3d(0,0,0)"),typeof i.animated=="number"&&clearTimeout(i.animated),i.animated=setTimeout(function(){h(i,"transition",""),h(i,"transform",""),i.animated=!1,i.animatingX=!1,i.animatingY=!1},l)}}}}function sr(t){return t.offsetWidth}function dr(t,e,r,i){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-r.top,2)+Math.pow(e.left-r.left,2))*i.animation}var he=[],Je={initializeByDefault:!0},Ve={mount:function(e){for(var r in Je)Je.hasOwnProperty(r)&&!(r in e)&&(e[r]=Je[r]);he.forEach(function(i){if(i.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),he.push(e)},pluginEvent:function(e,r,i){var n=this;this.eventCanceled=!1,i.cancel=function(){n.eventCanceled=!0};var o=e+"Global";he.forEach(function(l){r[l.pluginName]&&(r[l.pluginName][o]&&r[l.pluginName][o](Z({sortable:r},i)),r.options[l.pluginName]&&r[l.pluginName][e]&&r[l.pluginName][e](Z({sortable:r},i)))})},initializePlugins:function(e,r,i,n){he.forEach(function(a){var s=a.pluginName;if(!(!e.options[s]&&!a.initializeByDefault)){var d=new a(e,r,e.options);d.sortable=e,d.options=e.options,e[s]=d,ee(i,d.defaults)}});for(var o in e.options)if(e.options.hasOwnProperty(o)){var l=this.modifyOption(e,o,e.options[o]);typeof l<"u"&&(e.options[o]=l)}},getEventProperties:function(e,r){var i={};return he.forEach(function(n){typeof n.eventProperties=="function"&&ee(i,n.eventProperties.call(r[n.pluginName],e))}),i},modifyOption:function(e,r,i){var n;return he.forEach(function(o){e[o.pluginName]&&o.optionListeners&&typeof o.optionListeners[r]=="function"&&(n=o.optionListeners[r].call(e[o.pluginName],i))}),n}};function ur(t){var e=t.sortable,r=t.rootEl,i=t.name,n=t.targetEl,o=t.cloneEl,l=t.toEl,a=t.fromEl,s=t.oldIndex,d=t.newIndex,f=t.oldDraggableIndex,c=t.newDraggableIndex,m=t.originalEvent,w=t.putSortable,y=t.extraEventProperties;if(e=e||r&&r[F],!!e){var E,Y=e.options,K="on"+i.charAt(0).toUpperCase()+i.substr(1);window.CustomEvent&&!te&&!Me?E=new CustomEvent(i,{bubbles:!0,cancelable:!0}):(E=document.createEvent("Event"),E.initEvent(i,!0,!0)),E.to=l||r,E.from=a||r,E.item=n||r,E.clone=o,E.oldIndex=s,E.newIndex=d,E.oldDraggableIndex=f,E.newDraggableIndex=c,E.originalEvent=m,E.pullMode=w?w.lastPutMode:void 0;var I=Z(Z({},y),Ve.getEventProperties(i,e));for(var z in I)E[z]=I[z];r&&r.dispatchEvent(E),Y[K]&&Y[K].call(e,E)}}var cr=["evt"],M=function(e,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=i.evt,o=tr(i,cr);Ve.pluginEvent.bind(p)(e,r,Z({dragEl:u,parentEl:x,ghostEl:g,rootEl:C,nextEl:fe,lastDownEl:Xe,cloneEl:_,cloneHidden:oe,dragStarted:xe,putSortable:L,activeSortable:p.active,originalEvent:n,oldIndex:me,oldDraggableIndex:Le,newIndex:$,newDraggableIndex:ne,hideGhostForTarget:Xt,unhideGhostForTarget:Yt,cloneNowHidden:function(){oe=!0},cloneNowShown:function(){oe=!1},dispatchSortableEvent:function(a){H({sortable:r,name:a,originalEvent:n})}},o))};function H(t){ur(Z({putSortable:L,cloneEl:_,targetEl:u,rootEl:C,oldIndex:me,oldDraggableIndex:Le,newIndex:$,newDraggableIndex:ne},t))}var u,x,g,C,fe,Xe,_,oe,me,$,Le,ne,Ne,L,ge=!1,je=!1,qe=[],ue,W,et,tt,Ct,_t,xe,pe,Oe,Ie=!1,$e=!1,Ye,O,rt=[],dt=!1,Ze=[],Ke=typeof document<"u",Fe=Ht,xt=Me||te?"cssFloat":"float",fr=Ke&&!Mt&&!Ht&&"draggable"in document.createElement("div"),Bt=function(){if(Ke){if(te)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),kt=function(e,r){var i=h(e),n=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=ve(e,0,r),l=ve(e,1,r),a=o&&h(o),s=l&&h(l),d=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+T(o).width,f=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+T(l).width;if(i.display==="flex")return i.flexDirection==="column"||i.flexDirection==="column-reverse"?"vertical":"horizontal";if(i.display==="grid")return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&a.float&&a.float!=="none"){var c=a.float==="left"?"left":"right";return l&&(s.clear==="both"||s.clear===c)?"vertical":"horizontal"}return o&&(a.display==="block"||a.display==="flex"||a.display==="table"||a.display==="grid"||d>=n&&i[xt]==="none"||l&&i[xt]==="none"&&d+f>n)?"vertical":"horizontal"},hr=function(e,r,i){var n=i?e.left:e.top,o=i?e.right:e.bottom,l=i?e.width:e.height,a=i?r.left:r.top,s=i?r.right:r.bottom,d=i?r.width:r.height;return n===a||o===s||n+l/2===a+d/2},pr=function(e,r){var i;return qe.some(function(n){var o=n[F].options.emptyInsertThreshold;if(!(!o||ht(n))){var l=T(n),a=e>=l.left-o&&e<=l.right+o,s=r>=l.top-o&&r<=l.bottom+o;if(a&&s)return i=n}}),i},Rt=function(e){function r(o,l){return function(a,s,d,f){var c=a.options.group.name&&s.options.group.name&&a.options.group.name===s.options.group.name;if(o==null&&(l||c))return!0;if(o==null||o===!1)return!1;if(l&&o==="clone")return o;if(typeof o=="function")return r(o(a,s,d,f),l)(a,s,d,f);var m=(l?a:s).options.group.name;return o===!0||typeof o=="string"&&o===m||o.join&&o.indexOf(m)>-1}}var i={},n=e.group;(!n||Re(n)!="object")&&(n={name:n}),i.name=n.name,i.checkPull=r(n.pull,!0),i.checkPut=r(n.put),i.revertClone=n.revertClone,e.group=i},Xt=function(){!Bt&&g&&h(g,"display","none")},Yt=function(){!Bt&&g&&h(g,"display","")};Ke&&!Mt&&document.addEventListener("click",function(t){if(je)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),je=!1,!1},!0);var ce=function(e){if(u){e=e.touches?e.touches[0]:e;var r=pr(e.clientX,e.clientY);if(r){var i={};for(var n in e)e.hasOwnProperty(n)&&(i[n]=e[n]);i.target=i.rootEl=r,i.preventDefault=void 0,i.stopPropagation=void 0,r[F]._onDragOver(i)}}},gr=function(e){u&&u.parentNode[F]._isOutsideThisEl(e.target)};function p(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=ee({},e),t[F]=this;var r={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return kt(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(l,a){l.setData("Text",a.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:p.supportPointer!==!1&&"PointerEvent"in window&&!Te,emptyInsertThreshold:5};Ve.initializePlugins(this,t,r);for(var i in r)!(i in e)&&(e[i]=r[i]);Rt(e);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=e.forceFallback?!1:fr,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?b(t,"pointerdown",this._onTapStart):(b(t,"mousedown",this._onTapStart),b(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(b(t,"dragover",this),b(t,"dragenter",this)),qe.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),ee(this,lr())}p.prototype={constructor:p,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(pe=null)},_getDirection:function(e,r){return typeof this.options.direction=="function"?this.options.direction.call(this,e,r,u):this.options.direction},_onTapStart:function(e){if(e.cancelable){var r=this,i=this.el,n=this.options,o=n.preventOnFilter,l=e.type,a=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,s=(a||e).target,d=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,f=n.filter;if(_r(i),!u&&!(/mousedown|pointerdown/.test(l)&&e.button!==0||n.disabled)&&!d.isContentEditable&&!(!this.nativeDraggable&&Te&&s&&s.tagName.toUpperCase()==="SELECT")&&(s=j(s,n.draggable,i,!1),!(s&&s.animated)&&Xe!==s)){if(me=R(s),Le=R(s,n.draggable),typeof f=="function"){if(f.call(this,e,s,this)){H({sortable:r,rootEl:d,name:"filter",targetEl:s,toEl:i,fromEl:i}),M("filter",r,{evt:e}),o&&e.cancelable&&e.preventDefault();return}}else if(f&&(f=f.split(",").some(function(c){if(c=j(d,c.trim(),i,!1),c)return H({sortable:r,rootEl:c,name:"filter",targetEl:s,fromEl:i,toEl:i}),M("filter",r,{evt:e}),!0}),f)){o&&e.cancelable&&e.preventDefault();return}n.handle&&!j(d,n.handle,i,!1)||this._prepareDragStart(e,a,s)}}},_prepareDragStart:function(e,r,i){var n=this,o=n.el,l=n.options,a=o.ownerDocument,s;if(i&&!u&&i.parentNode===o){var d=T(i);if(C=o,u=i,x=u.parentNode,fe=u.nextSibling,Xe=i,Ne=l.group,p.dragged=u,ue={target:u,clientX:(r||e).clientX,clientY:(r||e).clientY},Ct=ue.clientX-d.left,_t=ue.clientY-d.top,this._lastX=(r||e).clientX,this._lastY=(r||e).clientY,u.style["will-change"]="all",s=function(){if(M("delayEnded",n,{evt:e}),p.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!vt&&n.nativeDraggable&&(u.draggable=!0),n._triggerDragStart(e,r),H({sortable:n,name:"choose",originalEvent:e}),N(u,l.chosenClass,!0)},l.ignore.split(",").forEach(function(f){Pt(u,f.trim(),it)}),b(a,"dragover",ce),b(a,"mousemove",ce),b(a,"touchmove",ce),b(a,"mouseup",n._onDrop),b(a,"touchend",n._onDrop),b(a,"touchcancel",n._onDrop),vt&&this.nativeDraggable&&(this.options.touchStartThreshold=4,u.draggable=!0),M("delayStart",this,{evt:e}),l.delay&&(!l.delayOnTouchOnly||r)&&(!this.nativeDraggable||!(Me||te))){if(p.eventCanceled){this._onDrop();return}b(a,"mouseup",n._disableDelayedDrag),b(a,"touchend",n._disableDelayedDrag),b(a,"touchcancel",n._disableDelayedDrag),b(a,"mousemove",n._delayedDragTouchMoveHandler),b(a,"touchmove",n._delayedDragTouchMoveHandler),l.supportPointer&&b(a,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(s,l.delay)}else s()}},_delayedDragTouchMoveHandler:function(e){var r=e.touches?e.touches[0]:e;Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){u&&it(u),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;v(e,"mouseup",this._disableDelayedDrag),v(e,"touchend",this._disableDelayedDrag),v(e,"touchcancel",this._disableDelayedDrag),v(e,"mousemove",this._delayedDragTouchMoveHandler),v(e,"touchmove",this._delayedDragTouchMoveHandler),v(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,r){r=r||e.pointerType=="touch"&&e,!this.nativeDraggable||r?this.options.supportPointer?b(document,"pointermove",this._onTouchMove):r?b(document,"touchmove",this._onTouchMove):b(document,"mousemove",this._onTouchMove):(b(u,"dragend",this),b(C,"dragstart",this._onDragStart));try{document.selection?ze(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,r){if(ge=!1,C&&u){M("dragStarted",this,{evt:r}),this.nativeDraggable&&b(document,"dragover",gr);var i=this.options;!e&&N(u,i.dragClass,!1),N(u,i.ghostClass,!0),p.active=this,e&&this._appendGhost(),H({sortable:this,name:"start",originalEvent:r})}else this._nulling()},_emulateDragOver:function(){if(W){this._lastX=W.clientX,this._lastY=W.clientY,Xt();for(var e=document.elementFromPoint(W.clientX,W.clientY),r=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(W.clientX,W.clientY),e!==r);)r=e;if(u.parentNode[F]._isOutsideThisEl(e),r)do{if(r[F]){var i=void 0;if(i=r[F]._onDragOver({clientX:W.clientX,clientY:W.clientY,target:e,rootEl:r}),i&&!this.options.dragoverBubble)break}e=r}while(r=r.parentNode);Yt()}},_onTouchMove:function(e){if(ue){var r=this.options,i=r.fallbackTolerance,n=r.fallbackOffset,o=e.touches?e.touches[0]:e,l=g&&ye(g,!0),a=g&&l&&l.a,s=g&&l&&l.d,d=Fe&&O&&wt(O),f=(o.clientX-ue.clientX+n.x)/(a||1)+(d?d[0]-rt[0]:0)/(a||1),c=(o.clientY-ue.clientY+n.y)/(s||1)+(d?d[1]-rt[1]:0)/(s||1);if(!p.active&&!ge){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(e,!0)}if(g){l?(l.e+=f-(et||0),l.f+=c-(tt||0)):l={a:1,b:0,c:0,d:1,e:f,f:c};var m="matrix(".concat(l.a,",").concat(l.b,",").concat(l.c,",").concat(l.d,",").concat(l.e,",").concat(l.f,")");h(g,"webkitTransform",m),h(g,"mozTransform",m),h(g,"msTransform",m),h(g,"transform",m),et=f,tt=c,W=o}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!g){var e=this.options.fallbackOnBody?document.body:C,r=T(u,!0,Fe,!0,e),i=this.options;if(Fe){for(O=e;h(O,"position")==="static"&&h(O,"transform")==="none"&&O!==document;)O=O.parentNode;O!==document.body&&O!==document.documentElement?(O===document&&(O=q()),r.top+=O.scrollTop,r.left+=O.scrollLeft):O=q(),rt=wt(O)}g=u.cloneNode(!0),N(g,i.ghostClass,!1),N(g,i.fallbackClass,!0),N(g,i.dragClass,!0),h(g,"transition",""),h(g,"transform",""),h(g,"box-sizing","border-box"),h(g,"margin",0),h(g,"top",r.top),h(g,"left",r.left),h(g,"width",r.width),h(g,"height",r.height),h(g,"opacity","0.8"),h(g,"position",Fe?"absolute":"fixed"),h(g,"zIndex","100000"),h(g,"pointerEvents","none"),p.ghost=g,e.appendChild(g),h(g,"transform-origin",Ct/parseInt(g.style.width)*100+"% "+_t/parseInt(g.style.height)*100+"%")}},_onDragStart:function(e,r){var i=this,n=e.dataTransfer,o=i.options;if(M("dragStart",this,{evt:e}),p.eventCanceled){this._onDrop();return}M("setupClone",this),p.eventCanceled||(_=Ft(u),_.removeAttribute("id"),_.draggable=!1,_.style["will-change"]="",this._hideClone(),N(_,this.options.chosenClass,!1),p.clone=_),i.cloneId=ze(function(){M("clone",i),!p.eventCanceled&&(i.options.removeCloneOnHide||C.insertBefore(_,u),i._hideClone(),H({sortable:i,name:"clone"}))}),!r&&N(u,o.dragClass,!0),r?(je=!0,i._loopId=setInterval(i._emulateDragOver,50)):(v(document,"mouseup",i._onDrop),v(document,"touchend",i._onDrop),v(document,"touchcancel",i._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(i,n,u)),b(document,"drop",i),h(u,"transform","translateZ(0)")),ge=!0,i._dragStartId=ze(i._dragStarted.bind(i,r,e)),b(document,"selectstart",i),xe=!0,Te&&h(document.body,"user-select","none")},_onDragOver:function(e){var r=this.el,i=e.target,n,o,l,a=this.options,s=a.group,d=p.active,f=Ne===s,c=a.sort,m=L||d,w,y=this,E=!1;if(dt)return;function Y(_e,jt){M(_e,y,Z({evt:e,isOwner:f,axis:w?"vertical":"horizontal",revert:l,dragRect:n,targetRect:o,canSort:c,fromSortable:m,target:i,completed:I,onMove:function(mt,qt){return Be(C,r,u,n,mt,T(mt),e,qt)},changed:z},jt))}function K(){Y("dragOverAnimationCapture"),y.captureAnimationState(),y!==m&&m.captureAnimationState()}function I(_e){return Y("dragOverCompleted",{insertion:_e}),_e&&(f?d._hideClone():d._showClone(y),y!==m&&(N(u,L?L.options.ghostClass:d.options.ghostClass,!1),N(u,a.ghostClass,!0)),L!==y&&y!==p.active?L=y:y===p.active&&L&&(L=null),m===y&&(y._ignoreWhileAnimating=i),y.animateAll(function(){Y("dragOverAnimationComplete"),y._ignoreWhileAnimating=null}),y!==m&&(m.animateAll(),m._ignoreWhileAnimating=null)),(i===u&&!u.animated||i===r&&!i.animated)&&(pe=null),!a.dragoverBubble&&!e.rootEl&&i!==document&&(u.parentNode[F]._isOutsideThisEl(e.target),!_e&&ce(e)),!a.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),E=!0}function z(){$=R(u),ne=R(u,a.draggable),H({sortable:y,name:"change",toEl:r,newIndex:$,newDraggableIndex:ne,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),i=j(i,a.draggable,r,!0),Y("dragOver"),p.eventCanceled)return E;if(u.contains(e.target)||i.animated&&i.animatingX&&i.animatingY||y._ignoreWhileAnimating===i)return I(!1);if(je=!1,d&&!a.disabled&&(f?c||(l=x!==C):L===this||(this.lastPutMode=Ne.checkPull(this,d,u,e))&&s.checkPut(this,d,u,e))){if(w=this._getDirection(e,i)==="vertical",n=T(u),Y("dragOverValid"),p.eventCanceled)return E;if(l)return x=C,K(),this._hideClone(),Y("revert"),p.eventCanceled||(fe?C.insertBefore(u,fe):C.appendChild(u)),I(!0);var V=ht(r,a.draggable);if(!V||br(e,w,this)&&!V.animated){if(V===u)return I(!1);if(V&&r===e.target&&(i=V),i&&(o=T(i)),Be(C,r,u,n,i,o,e,!!i)!==!1)return K(),V&&V.nextSibling?r.insertBefore(u,V.nextSibling):r.appendChild(u),x=r,z(),I(!0)}else if(V&&vr(e,w,this)){var le=ve(r,0,a,!0);if(le===u)return I(!1);if(i=le,o=T(i),Be(C,r,u,n,i,o,e,!1)!==!1)return K(),r.insertBefore(u,le),x=r,z(),I(!0)}else if(i.parentNode===r){o=T(i);var G=0,se,be=u.parentNode!==r,P=!hr(u.animated&&u.toRect||n,i.animated&&i.toRect||o,w),Ee=w?"top":"left",re=Et(i,"top","top")||Et(u,"top","top"),we=re?re.scrollTop:void 0;pe!==i&&(se=o[Ee],Ie=!1,$e=!P&&a.invertSwap||be),G=Er(e,i,o,w,P?1:a.swapThreshold,a.invertedSwapThreshold==null?a.swapThreshold:a.invertedSwapThreshold,$e,pe===i);var Q;if(G!==0){var de=R(u);do de-=G,Q=x.children[de];while(Q&&(h(Q,"display")==="none"||Q===g))}if(G===0||Q===i)return I(!1);pe=i,Oe=G;var Ce=i.nextElementSibling,ie=!1;ie=G===1;var Pe=Be(C,r,u,n,i,o,e,ie);if(Pe!==!1)return(Pe===1||Pe===-1)&&(ie=Pe===1),dt=!0,setTimeout(yr,30),K(),ie&&!Ce?r.appendChild(u):i.parentNode.insertBefore(u,ie?Ce:i),re&&$t(re,0,we-re.scrollTop),x=u.parentNode,se!==void 0&&!$e&&(Ye=Math.abs(se-T(i)[Ee])),z(),I(!0)}if(r.contains(u))return I(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){v(document,"mousemove",this._onTouchMove),v(document,"touchmove",this._onTouchMove),v(document,"pointermove",this._onTouchMove),v(document,"dragover",ce),v(document,"mousemove",ce),v(document,"touchmove",ce)},_offUpEvents:function(){var e=this.el.ownerDocument;v(e,"mouseup",this._onDrop),v(e,"touchend",this._onDrop),v(e,"pointerup",this._onDrop),v(e,"touchcancel",this._onDrop),v(document,"selectstart",this)},_onDrop:function(e){var r=this.el,i=this.options;if($=R(u),ne=R(u,i.draggable),M("drop",this,{evt:e}),x=u&&u.parentNode,$=R(u),ne=R(u,i.draggable),p.eventCanceled){this._nulling();return}ge=!1,$e=!1,Ie=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),ut(this.cloneId),ut(this._dragStartId),this.nativeDraggable&&(v(document,"drop",this),v(r,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Te&&h(document.body,"user-select",""),h(u,"transform",""),e&&(xe&&(e.cancelable&&e.preventDefault(),!i.dropBubble&&e.stopPropagation()),g&&g.parentNode&&g.parentNode.removeChild(g),(C===x||L&&L.lastPutMode!=="clone")&&_&&_.parentNode&&_.parentNode.removeChild(_),u&&(this.nativeDraggable&&v(u,"dragend",this),it(u),u.style["will-change"]="",xe&&!ge&&N(u,L?L.options.ghostClass:this.options.ghostClass,!1),N(u,this.options.chosenClass,!1),H({sortable:this,name:"unchoose",toEl:x,newIndex:null,newDraggableIndex:null,originalEvent:e}),C!==x?($>=0&&(H({rootEl:x,name:"add",toEl:x,fromEl:C,originalEvent:e}),H({sortable:this,name:"remove",toEl:x,originalEvent:e}),H({rootEl:x,name:"sort",toEl:x,fromEl:C,originalEvent:e}),H({sortable:this,name:"sort",toEl:x,originalEvent:e})),L&&L.save()):$!==me&&$>=0&&(H({sortable:this,name:"update",toEl:x,originalEvent:e}),H({sortable:this,name:"sort",toEl:x,originalEvent:e})),p.active&&(($==null||$===-1)&&($=me,ne=Le),H({sortable:this,name:"end",toEl:x,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){M("nulling",this),C=u=x=g=fe=_=Xe=oe=ue=W=xe=$=ne=me=Le=pe=Oe=L=Ne=p.dragged=p.ghost=p.clone=p.active=null,Ze.forEach(function(e){e.checked=!0}),Ze.length=et=tt=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":u&&(this._onDragOver(e),mr(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],r,i=this.el.children,n=0,o=i.length,l=this.options;n<o;n++)r=i[n],j(r,l.draggable,this.el,!1)&&e.push(r.getAttribute(l.dataIdAttr)||Cr(r));return e},sort:function(e,r){var i={},n=this.el;this.toArray().forEach(function(o,l){var a=n.children[l];j(a,this.options.draggable,n,!1)&&(i[o]=a)},this),r&&this.captureAnimationState(),e.forEach(function(o){i[o]&&(n.removeChild(i[o]),n.appendChild(i[o]))}),r&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,r){return j(e,r||this.options.draggable,this.el,!1)},option:function(e,r){var i=this.options;if(r===void 0)return i[e];var n=Ve.modifyOption(this,e,r);typeof n<"u"?i[e]=n:i[e]=r,e==="group"&&Rt(i)},destroy:function(){M("destroy",this);var e=this.el;e[F]=null,v(e,"mousedown",this._onTapStart),v(e,"touchstart",this._onTapStart),v(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(v(e,"dragover",this),v(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(r){r.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),qe.splice(qe.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!oe){if(M("hideClone",this),p.eventCanceled)return;h(_,"display","none"),this.options.removeCloneOnHide&&_.parentNode&&_.parentNode.removeChild(_),oe=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(oe){if(M("showClone",this),p.eventCanceled)return;u.parentNode==C&&!this.options.group.revertClone?C.insertBefore(_,u):fe?C.insertBefore(_,fe):C.appendChild(_),this.options.group.revertClone&&this.animate(u,_),h(_,"display",""),oe=!1}}};function mr(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function Be(t,e,r,i,n,o,l,a){var s,d=t[F],f=d.options.onMove,c;return window.CustomEvent&&!te&&!Me?s=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(s=document.createEvent("Event"),s.initEvent("move",!0,!0)),s.to=e,s.from=t,s.dragged=r,s.draggedRect=i,s.related=n||e,s.relatedRect=o||T(e),s.willInsertAfter=a,s.originalEvent=l,t.dispatchEvent(s),f&&(c=f.call(d,s,l)),c}function it(t){t.draggable=!1}function yr(){dt=!1}function vr(t,e,r){var i=T(ve(r.el,0,r.options,!0)),n=10;return e?t.clientX<i.left-n||t.clientY<i.top&&t.clientX<i.right:t.clientY<i.top-n||t.clientY<i.bottom&&t.clientX<i.left}function br(t,e,r){var i=T(ht(r.el,r.options.draggable)),n=10;return e?t.clientX>i.right+n||t.clientX<=i.right&&t.clientY>i.bottom&&t.clientX>=i.left:t.clientX>i.right&&t.clientY>i.top||t.clientX<=i.right&&t.clientY>i.bottom+n}function Er(t,e,r,i,n,o,l,a){var s=i?t.clientY:t.clientX,d=i?r.height:r.width,f=i?r.top:r.left,c=i?r.bottom:r.right,m=!1;if(!l){if(a&&Ye<d*n){if(!Ie&&(Oe===1?s>f+d*o/2:s<c-d*o/2)&&(Ie=!0),Ie)m=!0;else if(Oe===1?s<f+Ye:s>c-Ye)return-Oe}else if(s>f+d*(1-n)/2&&s<c-d*(1-n)/2)return wr(e)}return m=m||l,m&&(s<f+d*o/2||s>c-d*o/2)?s>f+d/2?1:-1:0}function wr(t){return R(u)<R(t)?1:-1}function Cr(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,r=e.length,i=0;r--;)i+=e.charCodeAt(r);return i.toString(36)}function _r(t){Ze.length=0;for(var e=t.getElementsByTagName("input"),r=e.length;r--;){var i=e[r];i.checked&&Ze.push(i)}}function ze(t){return setTimeout(t,0)}function ut(t){return clearTimeout(t)}Ke&&b(document,"touchmove",function(t){(p.active||ge)&&t.cancelable&&t.preventDefault()});p.utils={on:b,off:v,css:h,find:Pt,is:function(e,r){return!!j(e,r,e,!1)},extend:or,throttle:Nt,closest:j,toggleClass:N,clone:Ft,index:R,nextTick:ze,cancelNextTick:ut,detectDirection:kt,getChild:ve};p.get=function(t){return t[F]};p.mount=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e[0].constructor===Array&&(e=e[0]),e.forEach(function(i){if(!i.prototype||!i.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));i.utils&&(p.utils=Z(Z({},p.utils),i.utils)),Ve.mount(i)})};p.create=function(t,e){return new p(t,e)};p.version=rr;var S=[],Se,ct,ft=!1,nt,ot,Ue,De;function xr(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(r){var i=r.originalEvent;this.sortable.nativeDraggable?b(document,"dragover",this._handleAutoScroll):this.options.supportPointer?b(document,"pointermove",this._handleFallbackAutoScroll):i.touches?b(document,"touchmove",this._handleFallbackAutoScroll):b(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(r){var i=r.originalEvent;!this.options.dragOverBubble&&!i.rootEl&&this._handleAutoScroll(i)},drop:function(){this.sortable.nativeDraggable?v(document,"dragover",this._handleAutoScroll):(v(document,"pointermove",this._handleFallbackAutoScroll),v(document,"touchmove",this._handleFallbackAutoScroll),v(document,"mousemove",this._handleFallbackAutoScroll)),St(),We(),ar()},nulling:function(){Ue=ct=Se=ft=De=nt=ot=null,S.length=0},_handleFallbackAutoScroll:function(r){this._handleAutoScroll(r,!0)},_handleAutoScroll:function(r,i){var n=this,o=(r.touches?r.touches[0]:r).clientX,l=(r.touches?r.touches[0]:r).clientY,a=document.elementFromPoint(o,l);if(Ue=r,i||this.options.forceAutoScrollFallback||Me||te||Te){at(r,this.options,a,i);var s=ae(a,!0);ft&&(!De||o!==nt||l!==ot)&&(De&&St(),De=setInterval(function(){var d=ae(document.elementFromPoint(o,l),!0);d!==s&&(s=d,We()),at(r,n.options,d,i)},10),nt=o,ot=l)}else{if(!this.options.bubbleScroll||ae(a,!0)===q()){We();return}at(r,this.options,ae(a,!1),!1)}}},ee(t,{pluginName:"scroll",initializeByDefault:!0})}function We(){S.forEach(function(t){clearInterval(t.pid)}),S=[]}function St(){clearInterval(De)}var at=Nt(function(t,e,r,i){if(e.scroll){var n=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,l=e.scrollSensitivity,a=e.scrollSpeed,s=q(),d=!1,f;ct!==r&&(ct=r,We(),Se=e.scroll,f=e.scrollFn,Se===!0&&(Se=ae(r,!0)));var c=0,m=Se;do{var w=m,y=T(w),E=y.top,Y=y.bottom,K=y.left,I=y.right,z=y.width,V=y.height,le=void 0,G=void 0,se=w.scrollWidth,be=w.scrollHeight,P=h(w),Ee=w.scrollLeft,re=w.scrollTop;w===s?(le=z<se&&(P.overflowX==="auto"||P.overflowX==="scroll"||P.overflowX==="visible"),G=V<be&&(P.overflowY==="auto"||P.overflowY==="scroll"||P.overflowY==="visible")):(le=z<se&&(P.overflowX==="auto"||P.overflowX==="scroll"),G=V<be&&(P.overflowY==="auto"||P.overflowY==="scroll"));var we=le&&(Math.abs(I-n)<=l&&Ee+z<se)-(Math.abs(K-n)<=l&&!!Ee),Q=G&&(Math.abs(Y-o)<=l&&re+V<be)-(Math.abs(E-o)<=l&&!!re);if(!S[c])for(var de=0;de<=c;de++)S[de]||(S[de]={});(S[c].vx!=we||S[c].vy!=Q||S[c].el!==w)&&(S[c].el=w,S[c].vx=we,S[c].vy=Q,clearInterval(S[c].pid),(we!=0||Q!=0)&&(d=!0,S[c].pid=setInterval(function(){i&&this.layer===0&&p.active._onTouchMove(Ue);var Ce=S[this.layer].vy?S[this.layer].vy*a:0,ie=S[this.layer].vx?S[this.layer].vx*a:0;typeof f=="function"&&f.call(p.dragged.parentNode[F],ie,Ce,t,Ue,S[this.layer].el)!=="continue"||$t(S[this.layer].el,ie,Ce)}.bind({layer:c}),24))),c++}while(e.bubbleScroll&&m!==s&&(m=ae(m,!1)));ft=d}},30),zt=function(e){var r=e.originalEvent,i=e.putSortable,n=e.dragEl,o=e.activeSortable,l=e.dispatchSortableEvent,a=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(r){var d=i||o;a();var f=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:r,c=document.elementFromPoint(f.clientX,f.clientY);s(),d&&!d.el.contains(c)&&(l("spill"),this.onSpill({dragEl:n,putSortable:i}))}};function pt(){}pt.prototype={startIndex:null,dragStart:function(e){var r=e.oldDraggableIndex;this.startIndex=r},onSpill:function(e){var r=e.dragEl,i=e.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var n=ve(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(r,n):this.sortable.el.appendChild(r),this.sortable.animateAll(),i&&i.animateAll()},drop:zt};ee(pt,{pluginName:"revertOnSpill"});function gt(){}gt.prototype={onSpill:function(e){var r=e.dragEl,i=e.putSortable,n=i||this.sortable;n.captureAnimationState(),r.parentNode&&r.parentNode.removeChild(r),n.animateAll()},drop:zt};ee(gt,{pluginName:"removeOnSpill"});p.mount(new xr);p.mount(gt,pt);const Wt=`
:host {
  display: block;
  overflow-y: auto;
  height: 100%;
}
.layer {
  display: inline-flex;
  justify-content: space-between;
}
ul[data-group] {
  padding-inline-start: 40px;
}
`,Gt=`
* {
  font-family: Roboto, sans-serif;
}

${Qt}
${Zt}
${Ut}
${Kt}

summary > .layer {
  min-height: 36px;
  display: flex;
  align-items: flex-start;
  padding-right: 12px;
  padding-top: 0px;
}

ul[data-group] {
  overflow-y: auto;
}

[data-type=group] .title {
  display: flex;
  align-items: flex-start;
  font-style: italic;
  line-height: 1.3rem;
}

[data-type] .title span {
  margin-bottom: 8px;
}


[data-type] .title::before {
  width: 24px;
  min-width: 24px;
  height: 24px;
  margin-right: 6px;
  margin-left: -1px;
  transform: translateY(-2px);
}

[data-layerconfig] button {
  margin-left: 64px;
  margin-bottom: 21px;
  margin-top: 9px;
}

button.delete {
  height: 24px;
  width: 32px;
  padding: 0;
  display: flex;
  justify-content: center;
  font-size: 13px;
  margin-left: 5%;
  background: #fdd;
  color: white;
}

button.delete::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23a22' viewBox='0 0 24 24'%3E%3Ctitle%3Edelete-outline%3C/title%3E%3Cpath d='M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z' /%3E%3C/svg%3E");
  height: 20px;
  width: 20px;
}

label[for=optional] {
  font-size: 21px;
  font-weight: 400;
  margin-bottom: 9px;
  display: block;
}
select[name=optional] {
  margin-right: 6px;
  margin-bottom: 18px;
  height: 36px;
}

// Style adjacent button
select[name=optional] + button {
  width: 20px;
}

.slider-control + details {
  margin-left: 60px;
}

.slider-control + details summary {
  color: #3B6289;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  margin-bottom: 15px;
}

.slider-control + details li {
  display: flex;
  height: 30px;
  flex-direction: row;
  align-items: center;
  border-top: none;
}

.slider-control + details li > div {
  width: 124px;
}

.slider-control + details summary::before {
  display: block;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  font-size: 13px;
  width: 24px;
  height: 24px;
  transform-origin: center;
}
.slider-control + details[open] > summary:before {
  transform: rotate(90deg);
}

[data-type=group] .title::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236889A0' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-outline%3C/title%3E%3Cpath d='M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z' /%3E%3C/svg%3E");
}

li[data-type=raster] .title::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236889A0' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckerboard%3C/title%3E%3Cpath d='M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z' /%3E%3C/svg%3E");
}

li[data-type=vector] .title::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236889A0' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-outline%3C/title%3E%3Cpath d='M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15A2.5,2.5 0 0,0 15,17.5A2.5,2.5 0 0,0 17.5,20A2.5,2.5 0 0,0 20,17.5A2.5,2.5 0 0,0 17.5,15Z' /%3E%3C/svg%3E");
}

li[data-type=draw] .title::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236889A0' viewBox='0 0 24 24'%3E%3Ctitle%3Evector-square-edit%3C/title%3E%3Cpath d='M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z' /%3E%3C/svg%3E");
}

[data-type]:not([data-type=group]) .title {
  font-style: normal;
}

details summary { list-style-type: none; } /* Firefox */
details summary::-webkit-details-marker { display: none; } /* Chrome */
details summary::marker { display: none; }

.layers > ul > li {
  background: #F1F5F900;
}

summary {
  position: relative;
}
summary details, summary li, summary ul {
  width: 100%;
}

input[type="text"] {
  --search-padding-left: 32px;
  width: calc(100% - var(--search-padding-left) - 4px);
  height: 32px;
  padding-left: var(--search-padding-left);
  font-size: 15px;
}

input[type="text"]::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /%3E%3C/svg%3E");
}

ul {
  padding: 0;
  background: #D7E2EE;
  background: #CFDDEB00;
}
li {
  list-style: none;
  cursor: pointer;
  background: #CFDDEB00;
  border-top: 1px solid #00417033;
}
li summary {
  display: flex;
}

.slider-control {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 9px;
  margin-left: 64px;
  margin-bottom: 12px;
}

.slider-control input[type=range] {
  max-width: 120px;
}

.slider-control .slider-property {
  width: 80px;
  color: #3B6289;
  font-size: 14px;
}

.slider-control > * {
  text-transform: capitalize;
}

/* Expansible Section Chevron */
li summary:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  font-size: 13px;
  width: 24px;
  height: 24px;
  margin-right: 6px;
  margin-left: -1px;

  margin-top: 5px;
}
li details[open] > summary:before {
  transform: rotate(90deg);
}
li[data-layerconfig=false]:not([data-type=group]) summary:before {
  display: none;
}
li .layer {
  width: 100%;
}
li .layer .left,
li .layer .right {
  display: flex;
  align-items: flex-start;
}
li .layer .left .title {
  cursor: pointer;
  display: flex;
  margin-left: 6px;
}
li .layer .left {
  margin-top: 7px;
}
li .layer .right {
  margin-top: 5px;
}
.drag-handle span {
  display: none;
}
.drag-handle {
  cursor: ns-resize;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Edrag%3C/title%3E%3Cpath fill='%23004170' d='M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z' /%3E%3C/svg%3E");
  width: 24px;
  height: 24px;
}
.drag-handle.disabled {
  cursor: not-allowed;
  opacity: 0.3;
}
li.sortable-chosen {
  background: #eeea;
}
li.sortable-drag {
  opacity: 0;
}
li.sortable-ghost {
}
`;var Sr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,D=(t,e,r,i)=>{for(var n=i>1?void 0:i?Dr(e,r):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(n=(i?l(e,r,n):l(n))||n);return i&&n&&Sr(e,r,n),n};let X=class extends Lt{constructor(){super(...arguments),this.for="eox-map",this.layerIdentifier="id",this.layerTitle="title",this.sortBy="layerOrder",this.layerConfig=["opacity"],this.externalLayerConfig=void 0,this.filterLayers=(t,e,r)=>{let i=[];const n=(o,l,a)=>{i=[...i,...o.filter(d=>d.get(l)===a)];const s=o.filter(d=>d.getLayers);return s.length>0&&s.forEach(d=>n(d.getLayers().getArray(),l,a)),i};return n(t,e,r),i},this.findLayerById=(t,e)=>this.filterLayers(t,"id",e)[0],this.getLayerType=(t,e)=>{var r;return t.getLayers?"group":e.getInteractions().getArray().filter(i=>i.freehand_!==void 0).map(i=>{var n;return(n=i.source_)==null?void 0:n.ol_uid}).includes(t.getSource?(r=t.getSource())==null?void 0:r.ol_uid:void 0)?"draw":t.declutter_!==void 0?"vector":"raster"}}_updateControl(t){const e=(r,i)=>{r.forEach(n=>{i&&n.set("_group_id",i),n.get(this.layerIdentifier)||n.set(this.layerIdentifier,n.ol_uid),n.get(this.layerTitle)||n.set(this.layerTitle,`layer ${n.ol_uid}`),n.getLayers&&e(n.getLayers().getArray(),n.get("id")||n.ol_uid)})};e(t.getArray()),this.layerCollection=t,this.optionalLayerArray=this.filterLayers(t.getArray(),"layerControlOptional",!0)}_emitLayerconfig(t){const e={detail:{layer:t},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("layerconfig",e))}changeOpacity(t,e){t.setOpacity(e)}changeStyleProperty(t,e,r){t.updateStyleVariables({...t.style_,[e]:r})}preFilterLayers(t){return[...t].filter(e=>e.get("layerControlHide")!==!0&&e.get("layerControlOptional")!==!0)}toggleLayerVisibility(t,e){if(t.setVisible(!t.getVisible()),t.get("layerControlExclusive")){let r=[];e?r=this.findLayerById(this.layerCollection.getArray(),e).getLayers().getArray().filter(n=>n.get(this.layerIdentifier)!==t.get(this.layerIdentifier)&&n.get("layerControlExclusive")):r=this.layerCollection.getArray().filter(i=>i.get(this.layerIdentifier)!==t.get(this.layerIdentifier)&&i.get("layerControlExclusive")),r.forEach(i=>{i.setVisible(!1)}),this.requestUpdate()}}render(){var l;const t=document.querySelector(this.for);if(t&&(t.map?this.olMap=t.map:this.olMap=t),!this.olMap)return k;const e=this.olMap.getLayers();this._updateControl(e);const r=a=>{a.on("change:length",()=>{this._currentlySorting||setTimeout(()=>{this._updateControl(a)})})};r(e);const i=a=>{a.getArray().forEach(s=>{if(s.getLayers){const d=s.getLayers();r(d),i(d)}})};i(e);const n=(a,s,d)=>{var f;return A`
      <details open="${a.get("layerControlExpanded")?!0:k}">
        <summary>
          <div class="layer">
            <div class="left">
              <input
                type="${a.get("layerControlExclusive")?"radio":"checkbox"}"
                .checked="${st(a.getVisible())}"
                @click=${()=>{this.toggleLayerVisibility(a,s)}}
              />
              <span class="title"
                ><span
                  >${a.get(this.layerTitle)||`${a.get(this.layerIdentifier)}`}</span
                >
              </span>
            </div>
            <div class="right">
              ${this.sortBy==="layerOrder"&&!this.unstyled?A` <div
                    class="drag-handle ${a.get("layerControlDisable")?"disabled":""}"
                  >
                    <span>=</span>
                  </div>`:k}
            </div>
          </div>
        </summary>
        ${this.layerConfig?A`
              <eox-layerconfig
                .layerConfig="${this.layerConfig}"
                .layerControl="${this}"
                .layer=${a}
                .external=${this.externalLayerConfig}
                .unstyled="${this.unstyled}"
                @removeLayer=${()=>{d.remove(a);const c=this.renderRoot.querySelector(`[data-layer='${a.get(this.layerIdentifier)}'`);c.parentNode.removeChild(c)}}
              ></eox-layerconfig>
            `:k}
        ${this.externalLayerConfig&&((f=a.style_)!=null&&f.color)?A`
              <button @click=${()=>this._emitLayerconfig(a)}>
                configure
              </button>
            `:k}
        ${a.getLayers?A`
              ${o(this.preFilterLayers([...a.getLayers().getArray()].reverse()),a.get(this.layerIdentifier),a.getLayers())}
            `:k}
      </details>
    `},o=(a,s,d)=>A`
      <ul data-group="${s??k}">
        ${lt(a,f=>f.get(this.layerIdentifier),f=>{var c;return A`
            <li
              data-layer="${f.get(this.layerIdentifier)}"
              data-disabled="${f.get("layerControlDisable")||k}"
              data-type="${this.getLayerType(f,this.olMap)}"
              data-layerconfig="${((c=this.layerConfig)==null?void 0:c.length)>0}"
            >
              ${n(f,s,d)}
            </li>
          `})}
      </ul>
    `;return A`
      <style>
        ${Wt}
        ${!this.unstyled&&Gt}
      </style>
      <div>
        <slot></slot>
        ${this.layerCollection.getArray().length>10?A`<input type="text" placeholder="Find layer" />`:k}
        <div class="layers">
          ${o(this.preFilterLayers(e.getArray()),null,this.layerCollection)}
        </div>
        ${It(((l=this.optionalLayerArray)==null?void 0:l.length)>0,()=>A`
            <label for="optional">Optional layers</label>

            <select name="optional" data-cy="optionalLayers">
              <option disabled selected value>
                -- select an optional layer to add --
              </option>
              ${this.optionalLayerArray.map(a=>A`
                  <option value="${a.get(this.layerIdentifier)}">
                    ${a.get(this.layerTitle)||`layer ${a.get(this.layerIdentifier)}`}
                  </option>
                `)}
            </select>
            <button
              @click="${()=>{const a=this.optionalLayerArray.find(s=>s.get(this.layerIdentifier)===this.shadowRoot.querySelector("select[name=optional]").value);if(a.get("_group_id")){const s=this.findLayerById(this.layerCollection.getArray(),a.get("_group_id"));s.getLayers().remove(a),s.getLayers().insertAt(s.getLayers().getLength(),a)}else this.layerCollection.remove(a),this.layerCollection.insertAt(this.layerCollection.getLength(),a);a.set("layerControlOptional",!1),a.setVisible(!0)}}"
            >
              add
            </button>
          `)}
      </div>
    `}updated(){this.sortBy=="layerOrder"&&this.renderRoot.querySelectorAll("ul").forEach(e=>{const r=e.dataset.group;p.create(e,{handle:this.unstyled?"summary":".drag-handle",dataIdAttr:"data-layer",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",store:{get:()=>{if(r){const i=this.findLayerById(this.layerCollection.getArray(),r);return i?[...i.getLayers().getArray().map(o=>o.get(this.layerIdentifier))].reverse():void 0}else return[...this.layerCollection.getArray().map(i=>i.get(this.layerIdentifier))].reverse()},set:i=>{i.toArray().reverse().forEach((o,l)=>{if(r){const a=this.findLayerById(this.layerCollection.getArray(),r);if(!a)return;const s=a.getLayers(),d=this.findLayerById(s.getArray(),o);s.remove(d),s.insertAt(l,d)}else{const a=this.findLayerById(this.layerCollection.getArray(),o);this.layerCollection.remove(a),this.layerCollection.insertAt(l,a)}})}},onMove:i=>!i.related.dataset.disabled})})}};D([He()],X.prototype,"olMap",2);D([He()],X.prototype,"layerCollection",2);D([He()],X.prototype,"optionalLayerArray",2);D([B()],X.prototype,"for",2);D([B()],X.prototype,"layerIdentifier",2);D([B()],X.prototype,"layerTitle",2);D([B()],X.prototype,"sortBy",2);D([B({type:Array})],X.prototype,"layerConfig",2);D([B({type:Boolean})],X.prototype,"externalLayerConfig",2);D([B({type:Boolean})],X.prototype,"unstyled",2);X=D([Ot("eox-layercontrol")],X);let U=class extends Lt{constructor(){super(...arguments),this._configList={}}_handleInput(t,e){e==="opacity"?this._layerControlElement.changeOpacity(this._currentLayer,parseFloat(t.target.value)):this._layerControlElement.changeStyleProperty(this._currentLayer,e,parseFloat(t.target.value))}_parseConfigs(t){if(!t)return;const e=t.style_;e&&e.color&&e.color[0]==="array"&&(this._configList=e.variables)}connectedCallback(){super.connectedCallback(),!this.layerConfig&&!this.layerControl?(this._layerControlElement=document.querySelector(this.for),this._layerControlElement&&(this.layerConfig=this._layerControlElement.layerConfig,this._layerControlElement.addEventListener("layerconfig",t=>{this._currentLayer=t.detail.layer,this._parseConfigs(this._currentLayer),this.requestUpdate()}))):(this._layerControlElement=this.layerControl,this._currentLayer=this.layer,this._parseConfigs(this._currentLayer))}render(){return A`
      <style>
        ${Wt}
        ${!this.unstyled&&Gt}
      </style>
      ${It(this._currentLayer,()=>A`
          <div>
            <slot></slot>
            <div class="slider-control">
              <div class="slider-property">Remove</div>
              <button
                class="delete"
                @click="${()=>this.dispatchEvent(new CustomEvent("removeLayer"))}"
              ></button>
            </div>
            ${this.for?A`layer: ${this._currentLayer.get("name")}`:k}
            ${lt(this.layerConfig.filter(t=>this.for?t!=="opacity":!0),t=>t,t=>A`
                <div class="slider-control">
                  <div class="slider-property">${t}</div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value="${st(this._currentLayer.getOpacity())}"
                    @input=${e=>this._handleInput(e,t)}
                  />
                </div>
              `)}
            ${Object.keys(this._configList).length>0&&!this.external?A`
                  <details open="${this.for?!0:k}">
                    <summary>Layer config</summary>
                    <ul>
                      ${lt(Object.keys(this._configList),t=>t,t=>A` <li>
                          <div>${t}</div>
                          <input
                            type="range"
                            min="${["red","green","blue"].includes(t)?1:2e3}"
                            max="${["red","green","blue"].includes(t)?4:5e3}"
                            value="${st(this._configList[t])}"
                            @input=${e=>this._handleInput(e,t)}
                          />
                        </li>`)}
                    </ul>
                  </details>
                `:k}
          </div>
        `)}
    `}};D([B()],U.prototype,"for",2);D([B({type:Array})],U.prototype,"layerConfig",2);D([B({type:Object,attribute:!1})],U.prototype,"layerControl",2);D([B({type:Object,attribute:!1})],U.prototype,"layer",2);D([B({type:Boolean})],U.prototype,"external",2);D([B({type:Boolean})],U.prototype,"unstyled",2);D([He()],U.prototype,"_currentLayer",2);D([He()],U.prototype,"_configList",2);U=D([Ot("eox-layerconfig")],U);const Br={title:"Elements/eox-layercontrol",tags:["autodocs"],component:"eox-layercontrol",parameters:{componentSubtitle:"Manage and configure OpenLayers map layers",layout:"centered"},render:()=>A`
<eox-map
  style="width: 400px; height: 300px; zoom="3"
  layers='[
    {
      "type": "Group",
      "properties": {
        "id": "group2",
        "title": "Data Layers"
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
></eox-map>
<eox-layercontrol for="eox-map" layerIdentifier="id"></eox-layercontrol>`},ke={args:{}};var Dt,Tt,At;ke.parameters={...ke.parameters,docs:{...(Dt=ke.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  args: {}
}`,...(At=(Tt=ke.parameters)==null?void 0:Tt.docs)==null?void 0:At.source}}};const kr=["Primary"];export{ke as Primary,kr as __namedExportsOrder,Br as default};
//# sourceMappingURL=layercontrol.stories-609726f4.js.map
