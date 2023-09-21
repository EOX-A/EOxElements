import{s as tr,A as X,x as _}from"./lit-element-c29cbb6b.js";import"./main-6c93d451.js";import{t as $e,n as B,e as rr}from"./query-assigned-elements-bec7f9a4.js";import{s as Er,r as wr,c as Cr,a as pt,l as ct}from"./checkbox-dea1b0c1.js";import{n as nr}from"./directive-1613be6b.js";import{b as _r}from"./button-d0379260.js";import"./templateElement-8d2f8dc8.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-44a46949.js";import"../sb-preview/runtime.js";import"./directive-helpers-2720686e.js";/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Et(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function q(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Et(Object(r),!0).forEach(function(n){Sr(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Et(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Re(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Re=function(e){return typeof e}:Re=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Re(t)}function Sr(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ee(){return ee=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},ee.apply(this,arguments)}function Dr(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,o;for(o=0;o<n.length;o++)i=n[o],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}function Tr(t,e){if(t==null)return{};var r=Dr(t,e),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var Or="1.15.0";function Q(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var te=Q(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Fe=Q(/Edge/i),wt=Q(/firefox/i),He=Q(/safari/i)&&!Q(/chrome/i)&&!Q(/android/i),ir=Q(/iP(ad|od|hone)/i),or=Q(/chrome/i)&&Q(/android/i),ar={capture:!1,passive:!1};function b(t,e,r){t.addEventListener(e,r,!te&&ar)}function v(t,e,r){t.removeEventListener(e,r,!te&&ar)}function Je(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function Lr(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function Z(t,e,r,n){if(t){r=r||document;do{if(e!=null&&(e[0]===">"?t.parentNode===r&&Je(t,e):Je(t,e))||n&&t===r)return t;if(t===r)break}while(t=Lr(t))}return null}var Ct=/\s+/g;function P(t,e,r){if(t&&e)if(t.classList)t.classList[r?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(Ct," ").replace(" "+e+" "," ");t.className=(n+(r?" "+e:"")).replace(Ct," ")}}function f(t,e,r){var n=t&&t.style;if(n){if(r===void 0)return document.defaultView&&document.defaultView.getComputedStyle?r=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(r=t.currentStyle),e===void 0?r:r[e];!(e in n)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),n[e]=r+(typeof r=="string"?"":"px")}}function ye(t,e){var r="";if(typeof t=="string")r=t;else do{var n=f(t,"transform");n&&n!=="none"&&(r=n+" "+r)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(r)}function lr(t,e,r){if(t){var n=t.getElementsByTagName(e),i=0,o=n.length;if(r)for(;i<o;i++)r(n[i],i);return n}return[]}function G(){var t=document.scrollingElement;return t||document.documentElement}function O(t,e,r,n,i){if(!(!t.getBoundingClientRect&&t!==window)){var o,l,a,s,d,c,p;if(t!==window&&t.parentNode&&t!==G()?(o=t.getBoundingClientRect(),l=o.top,a=o.left,s=o.bottom,d=o.right,c=o.height,p=o.width):(l=0,a=0,s=window.innerHeight,d=window.innerWidth,c=window.innerHeight,p=window.innerWidth),(e||r)&&t!==window&&(i=i||t.parentNode,!te))do if(i&&i.getBoundingClientRect&&(f(i,"transform")!=="none"||r&&f(i,"position")!=="static")){var m=i.getBoundingClientRect();l-=m.top+parseInt(f(i,"border-top-width")),a-=m.left+parseInt(f(i,"border-left-width")),s=l+o.height,d=a+o.width;break}while(i=i.parentNode);if(n&&t!==window){var E=ye(i||t),y=E&&E.a,x=E&&E.d;E&&(l/=x,a/=y,p/=y,c/=x,s=l+c,d=a+p)}return{top:l,left:a,bottom:s,right:d,width:p,height:c}}}function _t(t,e,r){for(var n=ae(t,!0),i=O(t)[e];n;){var o=O(n)[r],l=void 0;if(r==="top"||r==="left"?l=i>=o:l=i<=o,!l)return n;if(n===G())break;n=ae(n,!1)}return!1}function ve(t,e,r,n){for(var i=0,o=0,l=t.children;o<l.length;){if(l[o].style.display!=="none"&&l[o]!==h.ghost&&(n||l[o]!==h.dragged)&&Z(l[o],r.draggable,t,!1)){if(i===e)return l[o];i++}o++}return null}function yt(t,e){for(var r=t.lastElementChild;r&&(r===h.ghost||f(r,"display")==="none"||e&&!Je(r,e));)r=r.previousElementSibling;return r||null}function Y(t,e){var r=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==h.clone&&(!e||Je(t,e))&&r++;return r}function St(t){var e=0,r=0,n=G();if(t)do{var i=ye(t),o=i.a,l=i.d;e+=t.scrollLeft*o,r+=t.scrollTop*l}while(t!==n&&(t=t.parentNode));return[e,r]}function Ar(t,e){for(var r in t)if(t.hasOwnProperty(r)){for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[r][n])return Number(r)}return-1}function ae(t,e){if(!t||!t.getBoundingClientRect)return G();var r=t,n=!1;do if(r.clientWidth<r.scrollWidth||r.clientHeight<r.scrollHeight){var i=f(r);if(r.clientWidth<r.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||r.clientHeight<r.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!r.getBoundingClientRect||r===document.body)return G();if(n||e)return r;n=!0}}while(r=r.parentNode);return G()}function Ir(t,e){if(t&&e)for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}function rt(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var Me;function sr(t,e){return function(){if(!Me){var r=arguments,n=this;r.length===1?t.call(n,r[0]):t.apply(n,r),Me=setTimeout(function(){Me=void 0},e)}}}function Hr(){clearTimeout(Me),Me=void 0}function dr(t,e,r){t.scrollLeft+=e,t.scrollTop+=r}function ur(t){var e=window.Polymer,r=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):r?r(t).clone(!0)[0]:t.cloneNode(!0)}var F="Sortable"+new Date().getTime();function Mr(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(i){if(!(f(i,"display")==="none"||i===h.ghost)){t.push({target:i,rect:O(i)});var o=q({},t[t.length-1].rect);if(i.thisAnimationDuration){var l=ye(i,!0);l&&(o.top-=l.f,o.left-=l.e)}i.fromRect=o}})}},addAnimationState:function(n){t.push(n)},removeAnimationState:function(n){t.splice(Ar(t,{target:n}),1)},animateAll:function(n){var i=this;if(!this.options.animation){clearTimeout(e),typeof n=="function"&&n();return}var o=!1,l=0;t.forEach(function(a){var s=0,d=a.target,c=d.fromRect,p=O(d),m=d.prevFromRect,E=d.prevToRect,y=a.rect,x=ye(d,!0);x&&(p.top-=x.f,p.left-=x.e),d.toRect=p,d.thisAnimationDuration&&rt(m,p)&&!rt(c,p)&&(y.top-p.top)/(y.left-p.left)===(c.top-p.top)/(c.left-p.left)&&(s=Nr(y,m,E,i.options)),rt(p,c)||(d.prevFromRect=c,d.prevToRect=p,s||(s=i.options.animation),i.animate(d,y,p,s)),s&&(o=!0,l=Math.max(l,s),clearTimeout(d.animationResetTimer),d.animationResetTimer=setTimeout(function(){d.animationTime=0,d.prevFromRect=null,d.fromRect=null,d.prevToRect=null,d.thisAnimationDuration=null},s),d.thisAnimationDuration=s)}),clearTimeout(e),o?e=setTimeout(function(){typeof n=="function"&&n()},l):typeof n=="function"&&n(),t=[]},animate:function(n,i,o,l){if(l){f(n,"transition",""),f(n,"transform","");var a=ye(this.el),s=a&&a.a,d=a&&a.d,c=(i.left-o.left)/(s||1),p=(i.top-o.top)/(d||1);n.animatingX=!!c,n.animatingY=!!p,f(n,"transform","translate3d("+c+"px,"+p+"px,0)"),this.forRepaintDummy=Vr(n),f(n,"transition","transform "+l+"ms"+(this.options.easing?" "+this.options.easing:"")),f(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){f(n,"transition",""),f(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},l)}}}}function Vr(t){return t.offsetWidth}function Nr(t,e,r,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-r.top,2)+Math.pow(e.left-r.left,2))*n.animation}var fe=[],nt={initializeByDefault:!0},Be={mount:function(e){for(var r in nt)nt.hasOwnProperty(r)&&!(r in e)&&(e[r]=nt[r]);fe.forEach(function(n){if(n.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),fe.push(e)},pluginEvent:function(e,r,n){var i=this;this.eventCanceled=!1,n.cancel=function(){i.eventCanceled=!0};var o=e+"Global";fe.forEach(function(l){r[l.pluginName]&&(r[l.pluginName][o]&&r[l.pluginName][o](q({sortable:r},n)),r.options[l.pluginName]&&r[l.pluginName][e]&&r[l.pluginName][e](q({sortable:r},n)))})},initializePlugins:function(e,r,n,i){fe.forEach(function(a){var s=a.pluginName;if(!(!e.options[s]&&!a.initializeByDefault)){var d=new a(e,r,e.options);d.sortable=e,d.options=e.options,e[s]=d,ee(n,d.defaults)}});for(var o in e.options)if(e.options.hasOwnProperty(o)){var l=this.modifyOption(e,o,e.options[o]);typeof l<"u"&&(e.options[o]=l)}},getEventProperties:function(e,r){var n={};return fe.forEach(function(i){typeof i.eventProperties=="function"&&ee(n,i.eventProperties.call(r[i.pluginName],e))}),n},modifyOption:function(e,r,n){var i;return fe.forEach(function(o){e[o.pluginName]&&o.optionListeners&&typeof o.optionListeners[r]=="function"&&(i=o.optionListeners[r].call(e[o.pluginName],n))}),i}};function Pr(t){var e=t.sortable,r=t.rootEl,n=t.name,i=t.targetEl,o=t.cloneEl,l=t.toEl,a=t.fromEl,s=t.oldIndex,d=t.newIndex,c=t.oldDraggableIndex,p=t.newDraggableIndex,m=t.originalEvent,E=t.putSortable,y=t.extraEventProperties;if(e=e||r&&r[F],!!e){var x,z=e.options,U="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!te&&!Fe?x=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(x=document.createEvent("Event"),x.initEvent(n,!0,!0)),x.to=l||r,x.from=a||r,x.item=i||r,x.clone=o,x.oldIndex=s,x.newIndex=d,x.oldDraggableIndex=c,x.newDraggableIndex=p,x.originalEvent=m,x.pullMode=E?E.lastPutMode:void 0;var I=q(q({},y),Be.getEventProperties(n,e));for(var j in I)x[j]=I[j];r&&r.dispatchEvent(x),z[U]&&z[U].call(e,x)}}var $r=["evt"],M=function(e,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.evt,o=Tr(n,$r);Be.pluginEvent.bind(h)(e,r,q({dragEl:u,parentEl:S,ghostEl:g,rootEl:w,nextEl:ce,lastDownEl:We,cloneEl:C,cloneHidden:oe,dragStarted:Le,putSortable:L,activeSortable:h.active,originalEvent:i,oldIndex:me,oldDraggableIndex:Ve,newIndex:$,newDraggableIndex:ie,hideGhostForTarget:hr,unhideGhostForTarget:gr,cloneNowHidden:function(){oe=!0},cloneNowShown:function(){oe=!1},dispatchSortableEvent:function(a){H({sortable:r,name:a,originalEvent:i})}},o))};function H(t){Pr(q({putSortable:L,cloneEl:C,targetEl:u,rootEl:w,oldIndex:me,oldDraggableIndex:Ve,newIndex:$,newDraggableIndex:ie},t))}var u,S,g,w,ce,We,C,oe,me,$,Ve,ie,Ye,L,ge=!1,Ue=!1,Ke=[],ue,R,it,ot,Dt,Tt,Le,he,Ne,Pe=!1,ke=!1,Ze,A,at=[],ft=!1,Qe=[],tt=typeof document<"u",ze=ir,Ot=Fe||te?"cssFloat":"float",Fr=tt&&!or&&!ir&&"draggable"in document.createElement("div"),pr=function(){if(tt){if(te)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),cr=function(e,r){var n=f(e),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),o=ve(e,0,r),l=ve(e,1,r),a=o&&f(o),s=l&&f(l),d=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+O(o).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+O(l).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&a.float&&a.float!=="none"){var p=a.float==="left"?"left":"right";return l&&(s.clear==="both"||s.clear===p)?"vertical":"horizontal"}return o&&(a.display==="block"||a.display==="flex"||a.display==="table"||a.display==="grid"||d>=i&&n[Ot]==="none"||l&&n[Ot]==="none"&&d+c>i)?"vertical":"horizontal"},Br=function(e,r,n){var i=n?e.left:e.top,o=n?e.right:e.bottom,l=n?e.width:e.height,a=n?r.left:r.top,s=n?r.right:r.bottom,d=n?r.width:r.height;return i===a||o===s||i+l/2===a+d/2},Xr=function(e,r){var n;return Ke.some(function(i){var o=i[F].options.emptyInsertThreshold;if(!(!o||yt(i))){var l=O(i),a=e>=l.left-o&&e<=l.right+o,s=r>=l.top-o&&r<=l.bottom+o;if(a&&s)return n=i}}),n},fr=function(e){function r(o,l){return function(a,s,d,c){var p=a.options.group.name&&s.options.group.name&&a.options.group.name===s.options.group.name;if(o==null&&(l||p))return!0;if(o==null||o===!1)return!1;if(l&&o==="clone")return o;if(typeof o=="function")return r(o(a,s,d,c),l)(a,s,d,c);var m=(l?a:s).options.group.name;return o===!0||typeof o=="string"&&o===m||o.join&&o.indexOf(m)>-1}}var n={},i=e.group;(!i||Re(i)!="object")&&(i={name:i}),n.name=i.name,n.checkPull=r(i.pull,!0),n.checkPut=r(i.put),n.revertClone=i.revertClone,e.group=n},hr=function(){!pr&&g&&f(g,"display","none")},gr=function(){!pr&&g&&f(g,"display","")};tt&&!or&&document.addEventListener("click",function(t){if(Ue)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Ue=!1,!1},!0);var pe=function(e){if(u){e=e.touches?e.touches[0]:e;var r=Xr(e.clientX,e.clientY);if(r){var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);n.target=n.rootEl=r,n.preventDefault=void 0,n.stopPropagation=void 0,r[F]._onDragOver(n)}}},Yr=function(e){u&&u.parentNode[F]._isOutsideThisEl(e.target)};function h(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=ee({},e),t[F]=this;var r={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return cr(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(l,a){l.setData("Text",a.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:h.supportPointer!==!1&&"PointerEvent"in window&&!He,emptyInsertThreshold:5};Be.initializePlugins(this,t,r);for(var n in r)!(n in e)&&(e[n]=r[n]);fr(e);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=e.forceFallback?!1:Fr,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?b(t,"pointerdown",this._onTapStart):(b(t,"mousedown",this._onTapStart),b(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(b(t,"dragover",this),b(t,"dragenter",this)),Ke.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),ee(this,Mr())}h.prototype={constructor:h,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(he=null)},_getDirection:function(e,r){return typeof this.options.direction=="function"?this.options.direction.call(this,e,r,u):this.options.direction},_onTapStart:function(e){if(e.cancelable){var r=this,n=this.el,i=this.options,o=i.preventOnFilter,l=e.type,a=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,s=(a||e).target,d=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,c=i.filter;if(qr(n),!u&&!(/mousedown|pointerdown/.test(l)&&e.button!==0||i.disabled)&&!d.isContentEditable&&!(!this.nativeDraggable&&He&&s&&s.tagName.toUpperCase()==="SELECT")&&(s=Z(s,i.draggable,n,!1),!(s&&s.animated)&&We!==s)){if(me=Y(s),Ve=Y(s,i.draggable),typeof c=="function"){if(c.call(this,e,s,this)){H({sortable:r,rootEl:d,name:"filter",targetEl:s,toEl:n,fromEl:n}),M("filter",r,{evt:e}),o&&e.cancelable&&e.preventDefault();return}}else if(c&&(c=c.split(",").some(function(p){if(p=Z(d,p.trim(),n,!1),p)return H({sortable:r,rootEl:p,name:"filter",targetEl:s,fromEl:n,toEl:n}),M("filter",r,{evt:e}),!0}),c)){o&&e.cancelable&&e.preventDefault();return}i.handle&&!Z(d,i.handle,n,!1)||this._prepareDragStart(e,a,s)}}},_prepareDragStart:function(e,r,n){var i=this,o=i.el,l=i.options,a=o.ownerDocument,s;if(n&&!u&&n.parentNode===o){var d=O(n);if(w=o,u=n,S=u.parentNode,ce=u.nextSibling,We=n,Ye=l.group,h.dragged=u,ue={target:u,clientX:(r||e).clientX,clientY:(r||e).clientY},Dt=ue.clientX-d.left,Tt=ue.clientY-d.top,this._lastX=(r||e).clientX,this._lastY=(r||e).clientY,u.style["will-change"]="all",s=function(){if(M("delayEnded",i,{evt:e}),h.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!wt&&i.nativeDraggable&&(u.draggable=!0),i._triggerDragStart(e,r),H({sortable:i,name:"choose",originalEvent:e}),P(u,l.chosenClass,!0)},l.ignore.split(",").forEach(function(c){lr(u,c.trim(),lt)}),b(a,"dragover",pe),b(a,"mousemove",pe),b(a,"touchmove",pe),b(a,"mouseup",i._onDrop),b(a,"touchend",i._onDrop),b(a,"touchcancel",i._onDrop),wt&&this.nativeDraggable&&(this.options.touchStartThreshold=4,u.draggable=!0),M("delayStart",this,{evt:e}),l.delay&&(!l.delayOnTouchOnly||r)&&(!this.nativeDraggable||!(Fe||te))){if(h.eventCanceled){this._onDrop();return}b(a,"mouseup",i._disableDelayedDrag),b(a,"touchend",i._disableDelayedDrag),b(a,"touchcancel",i._disableDelayedDrag),b(a,"mousemove",i._delayedDragTouchMoveHandler),b(a,"touchmove",i._delayedDragTouchMoveHandler),l.supportPointer&&b(a,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(s,l.delay)}else s()}},_delayedDragTouchMoveHandler:function(e){var r=e.touches?e.touches[0]:e;Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){u&&lt(u),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;v(e,"mouseup",this._disableDelayedDrag),v(e,"touchend",this._disableDelayedDrag),v(e,"touchcancel",this._disableDelayedDrag),v(e,"mousemove",this._delayedDragTouchMoveHandler),v(e,"touchmove",this._delayedDragTouchMoveHandler),v(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,r){r=r||e.pointerType=="touch"&&e,!this.nativeDraggable||r?this.options.supportPointer?b(document,"pointermove",this._onTouchMove):r?b(document,"touchmove",this._onTouchMove):b(document,"mousemove",this._onTouchMove):(b(u,"dragend",this),b(w,"dragstart",this._onDragStart));try{document.selection?Ge(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,r){if(ge=!1,w&&u){M("dragStarted",this,{evt:r}),this.nativeDraggable&&b(document,"dragover",Yr);var n=this.options;!e&&P(u,n.dragClass,!1),P(u,n.ghostClass,!0),h.active=this,e&&this._appendGhost(),H({sortable:this,name:"start",originalEvent:r})}else this._nulling()},_emulateDragOver:function(){if(R){this._lastX=R.clientX,this._lastY=R.clientY,hr();for(var e=document.elementFromPoint(R.clientX,R.clientY),r=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(R.clientX,R.clientY),e!==r);)r=e;if(u.parentNode[F]._isOutsideThisEl(e),r)do{if(r[F]){var n=void 0;if(n=r[F]._onDragOver({clientX:R.clientX,clientY:R.clientY,target:e,rootEl:r}),n&&!this.options.dragoverBubble)break}e=r}while(r=r.parentNode);gr()}},_onTouchMove:function(e){if(ue){var r=this.options,n=r.fallbackTolerance,i=r.fallbackOffset,o=e.touches?e.touches[0]:e,l=g&&ye(g,!0),a=g&&l&&l.a,s=g&&l&&l.d,d=ze&&A&&St(A),c=(o.clientX-ue.clientX+i.x)/(a||1)+(d?d[0]-at[0]:0)/(a||1),p=(o.clientY-ue.clientY+i.y)/(s||1)+(d?d[1]-at[1]:0)/(s||1);if(!h.active&&!ge){if(n&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<n)return;this._onDragStart(e,!0)}if(g){l?(l.e+=c-(it||0),l.f+=p-(ot||0)):l={a:1,b:0,c:0,d:1,e:c,f:p};var m="matrix(".concat(l.a,",").concat(l.b,",").concat(l.c,",").concat(l.d,",").concat(l.e,",").concat(l.f,")");f(g,"webkitTransform",m),f(g,"mozTransform",m),f(g,"msTransform",m),f(g,"transform",m),it=c,ot=p,R=o}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!g){var e=this.options.fallbackOnBody?document.body:w,r=O(u,!0,ze,!0,e),n=this.options;if(ze){for(A=e;f(A,"position")==="static"&&f(A,"transform")==="none"&&A!==document;)A=A.parentNode;A!==document.body&&A!==document.documentElement?(A===document&&(A=G()),r.top+=A.scrollTop,r.left+=A.scrollLeft):A=G(),at=St(A)}g=u.cloneNode(!0),P(g,n.ghostClass,!1),P(g,n.fallbackClass,!0),P(g,n.dragClass,!0),f(g,"transition",""),f(g,"transform",""),f(g,"box-sizing","border-box"),f(g,"margin",0),f(g,"top",r.top),f(g,"left",r.left),f(g,"width",r.width),f(g,"height",r.height),f(g,"opacity","0.8"),f(g,"position",ze?"absolute":"fixed"),f(g,"zIndex","100000"),f(g,"pointerEvents","none"),h.ghost=g,e.appendChild(g),f(g,"transform-origin",Dt/parseInt(g.style.width)*100+"% "+Tt/parseInt(g.style.height)*100+"%")}},_onDragStart:function(e,r){var n=this,i=e.dataTransfer,o=n.options;if(M("dragStart",this,{evt:e}),h.eventCanceled){this._onDrop();return}M("setupClone",this),h.eventCanceled||(C=ur(u),C.removeAttribute("id"),C.draggable=!1,C.style["will-change"]="",this._hideClone(),P(C,this.options.chosenClass,!1),h.clone=C),n.cloneId=Ge(function(){M("clone",n),!h.eventCanceled&&(n.options.removeCloneOnHide||w.insertBefore(C,u),n._hideClone(),H({sortable:n,name:"clone"}))}),!r&&P(u,o.dragClass,!0),r?(Ue=!0,n._loopId=setInterval(n._emulateDragOver,50)):(v(document,"mouseup",n._onDrop),v(document,"touchend",n._onDrop),v(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",o.setData&&o.setData.call(n,i,u)),b(document,"drop",n),f(u,"transform","translateZ(0)")),ge=!0,n._dragStartId=Ge(n._dragStarted.bind(n,r,e)),b(document,"selectstart",n),Le=!0,He&&f(document.body,"user-select","none")},_onDragOver:function(e){var r=this.el,n=e.target,i,o,l,a=this.options,s=a.group,d=h.active,c=Ye===s,p=a.sort,m=L||d,E,y=this,x=!1;if(ft)return;function z(Ce,br){M(Ce,y,q({evt:e,isOwner:c,axis:E?"vertical":"horizontal",revert:l,dragRect:i,targetRect:o,canSort:p,fromSortable:m,target:n,completed:I,onMove:function(xt,xr){return je(w,r,u,i,xt,O(xt),e,xr)},changed:j},br))}function U(){z("dragOverAnimationCapture"),y.captureAnimationState(),y!==m&&m.captureAnimationState()}function I(Ce){return z("dragOverCompleted",{insertion:Ce}),Ce&&(c?d._hideClone():d._showClone(y),y!==m&&(P(u,L?L.options.ghostClass:d.options.ghostClass,!1),P(u,a.ghostClass,!0)),L!==y&&y!==h.active?L=y:y===h.active&&L&&(L=null),m===y&&(y._ignoreWhileAnimating=n),y.animateAll(function(){z("dragOverAnimationComplete"),y._ignoreWhileAnimating=null}),y!==m&&(m.animateAll(),m._ignoreWhileAnimating=null)),(n===u&&!u.animated||n===r&&!n.animated)&&(he=null),!a.dragoverBubble&&!e.rootEl&&n!==document&&(u.parentNode[F]._isOutsideThisEl(e.target),!Ce&&pe(e)),!a.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),x=!0}function j(){$=Y(u),ie=Y(u,a.draggable),H({sortable:y,name:"change",toEl:r,newIndex:$,newDraggableIndex:ie,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),n=Z(n,a.draggable,r,!0),z("dragOver"),h.eventCanceled)return x;if(u.contains(e.target)||n.animated&&n.animatingX&&n.animatingY||y._ignoreWhileAnimating===n)return I(!1);if(Ue=!1,d&&!a.disabled&&(c?p||(l=S!==w):L===this||(this.lastPutMode=Ye.checkPull(this,d,u,e))&&s.checkPut(this,d,u,e))){if(E=this._getDirection(e,n)==="vertical",i=O(u),z("dragOverValid"),h.eventCanceled)return x;if(l)return S=w,U(),this._hideClone(),z("revert"),h.eventCanceled||(ce?w.insertBefore(u,ce):w.appendChild(u)),I(!0);var V=yt(r,a.draggable);if(!V||Rr(e,E,this)&&!V.animated){if(V===u)return I(!1);if(V&&r===e.target&&(n=V),n&&(o=O(n)),je(w,r,u,i,n,o,e,!!n)!==!1)return U(),V&&V.nextSibling?r.insertBefore(u,V.nextSibling):r.appendChild(u),S=r,j(),I(!0)}else if(V&&jr(e,E,this)){var le=ve(r,0,a,!0);if(le===u)return I(!1);if(n=le,o=O(n),je(w,r,u,i,n,o,e,!1)!==!1)return U(),r.insertBefore(u,le),S=r,j(),I(!0)}else if(n.parentNode===r){o=O(n);var W=0,se,be=u.parentNode!==r,N=!Br(u.animated&&u.toRect||i,n.animated&&n.toRect||o,E),xe=E?"top":"left",re=_t(n,"top","top")||_t(u,"top","top"),Ee=re?re.scrollTop:void 0;he!==n&&(se=o[xe],Pe=!1,ke=!N&&a.invertSwap||be),W=Wr(e,n,o,E,N?1:a.swapThreshold,a.invertedSwapThreshold==null?a.swapThreshold:a.invertedSwapThreshold,ke,he===n);var K;if(W!==0){var de=Y(u);do de-=W,K=S.children[de];while(K&&(f(K,"display")==="none"||K===g))}if(W===0||K===n)return I(!1);he=n,Ne=W;var we=n.nextElementSibling,ne=!1;ne=W===1;var Xe=je(w,r,u,i,n,o,e,ne);if(Xe!==!1)return(Xe===1||Xe===-1)&&(ne=Xe===1),ft=!0,setTimeout(zr,30),U(),ne&&!we?r.appendChild(u):n.parentNode.insertBefore(u,ne?we:n),re&&dr(re,0,Ee-re.scrollTop),S=u.parentNode,se!==void 0&&!ke&&(Ze=Math.abs(se-O(n)[xe])),j(),I(!0)}if(r.contains(u))return I(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){v(document,"mousemove",this._onTouchMove),v(document,"touchmove",this._onTouchMove),v(document,"pointermove",this._onTouchMove),v(document,"dragover",pe),v(document,"mousemove",pe),v(document,"touchmove",pe)},_offUpEvents:function(){var e=this.el.ownerDocument;v(e,"mouseup",this._onDrop),v(e,"touchend",this._onDrop),v(e,"pointerup",this._onDrop),v(e,"touchcancel",this._onDrop),v(document,"selectstart",this)},_onDrop:function(e){var r=this.el,n=this.options;if($=Y(u),ie=Y(u,n.draggable),M("drop",this,{evt:e}),S=u&&u.parentNode,$=Y(u),ie=Y(u,n.draggable),h.eventCanceled){this._nulling();return}ge=!1,ke=!1,Pe=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),ht(this.cloneId),ht(this._dragStartId),this.nativeDraggable&&(v(document,"drop",this),v(r,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),He&&f(document.body,"user-select",""),f(u,"transform",""),e&&(Le&&(e.cancelable&&e.preventDefault(),!n.dropBubble&&e.stopPropagation()),g&&g.parentNode&&g.parentNode.removeChild(g),(w===S||L&&L.lastPutMode!=="clone")&&C&&C.parentNode&&C.parentNode.removeChild(C),u&&(this.nativeDraggable&&v(u,"dragend",this),lt(u),u.style["will-change"]="",Le&&!ge&&P(u,L?L.options.ghostClass:this.options.ghostClass,!1),P(u,this.options.chosenClass,!1),H({sortable:this,name:"unchoose",toEl:S,newIndex:null,newDraggableIndex:null,originalEvent:e}),w!==S?($>=0&&(H({rootEl:S,name:"add",toEl:S,fromEl:w,originalEvent:e}),H({sortable:this,name:"remove",toEl:S,originalEvent:e}),H({rootEl:S,name:"sort",toEl:S,fromEl:w,originalEvent:e}),H({sortable:this,name:"sort",toEl:S,originalEvent:e})),L&&L.save()):$!==me&&$>=0&&(H({sortable:this,name:"update",toEl:S,originalEvent:e}),H({sortable:this,name:"sort",toEl:S,originalEvent:e})),h.active&&(($==null||$===-1)&&($=me,ie=Ve),H({sortable:this,name:"end",toEl:S,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){M("nulling",this),w=u=S=g=ce=C=We=oe=ue=R=Le=$=ie=me=Ve=he=Ne=L=Ye=h.dragged=h.ghost=h.clone=h.active=null,Qe.forEach(function(e){e.checked=!0}),Qe.length=it=ot=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":u&&(this._onDragOver(e),kr(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],r,n=this.el.children,i=0,o=n.length,l=this.options;i<o;i++)r=n[i],Z(r,l.draggable,this.el,!1)&&e.push(r.getAttribute(l.dataIdAttr)||Gr(r));return e},sort:function(e,r){var n={},i=this.el;this.toArray().forEach(function(o,l){var a=i.children[l];Z(a,this.options.draggable,i,!1)&&(n[o]=a)},this),r&&this.captureAnimationState(),e.forEach(function(o){n[o]&&(i.removeChild(n[o]),i.appendChild(n[o]))}),r&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,r){return Z(e,r||this.options.draggable,this.el,!1)},option:function(e,r){var n=this.options;if(r===void 0)return n[e];var i=Be.modifyOption(this,e,r);typeof i<"u"?n[e]=i:n[e]=r,e==="group"&&fr(n)},destroy:function(){M("destroy",this);var e=this.el;e[F]=null,v(e,"mousedown",this._onTapStart),v(e,"touchstart",this._onTapStart),v(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(v(e,"dragover",this),v(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(r){r.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Ke.splice(Ke.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!oe){if(M("hideClone",this),h.eventCanceled)return;f(C,"display","none"),this.options.removeCloneOnHide&&C.parentNode&&C.parentNode.removeChild(C),oe=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(oe){if(M("showClone",this),h.eventCanceled)return;u.parentNode==w&&!this.options.group.revertClone?w.insertBefore(C,u):ce?w.insertBefore(C,ce):w.appendChild(C),this.options.group.revertClone&&this.animate(u,C),f(C,"display",""),oe=!1}}};function kr(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function je(t,e,r,n,i,o,l,a){var s,d=t[F],c=d.options.onMove,p;return window.CustomEvent&&!te&&!Fe?s=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(s=document.createEvent("Event"),s.initEvent("move",!0,!0)),s.to=e,s.from=t,s.dragged=r,s.draggedRect=n,s.related=i||e,s.relatedRect=o||O(e),s.willInsertAfter=a,s.originalEvent=l,t.dispatchEvent(s),c&&(p=c.call(d,s,l)),p}function lt(t){t.draggable=!1}function zr(){ft=!1}function jr(t,e,r){var n=O(ve(r.el,0,r.options,!0)),i=10;return e?t.clientX<n.left-i||t.clientY<n.top&&t.clientX<n.right:t.clientY<n.top-i||t.clientY<n.bottom&&t.clientX<n.left}function Rr(t,e,r){var n=O(yt(r.el,r.options.draggable)),i=10;return e?t.clientX>n.right+i||t.clientX<=n.right&&t.clientY>n.bottom&&t.clientX>=n.left:t.clientX>n.right&&t.clientY>n.top||t.clientX<=n.right&&t.clientY>n.bottom+i}function Wr(t,e,r,n,i,o,l,a){var s=n?t.clientY:t.clientX,d=n?r.height:r.width,c=n?r.top:r.left,p=n?r.bottom:r.right,m=!1;if(!l){if(a&&Ze<d*i){if(!Pe&&(Ne===1?s>c+d*o/2:s<p-d*o/2)&&(Pe=!0),Pe)m=!0;else if(Ne===1?s<c+Ze:s>p-Ze)return-Ne}else if(s>c+d*(1-i)/2&&s<p-d*(1-i)/2)return Zr(e)}return m=m||l,m&&(s<c+d*o/2||s>p-d*o/2)?s>c+d/2?1:-1:0}function Zr(t){return Y(u)<Y(t)?1:-1}function Gr(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,r=e.length,n=0;r--;)n+=e.charCodeAt(r);return n.toString(36)}function qr(t){Qe.length=0;for(var e=t.getElementsByTagName("input"),r=e.length;r--;){var n=e[r];n.checked&&Qe.push(n)}}function Ge(t){return setTimeout(t,0)}function ht(t){return clearTimeout(t)}tt&&b(document,"touchmove",function(t){(h.active||ge)&&t.cancelable&&t.preventDefault()});h.utils={on:b,off:v,css:f,find:lr,is:function(e,r){return!!Z(e,r,e,!1)},extend:Ir,throttle:sr,closest:Z,toggleClass:P,clone:ur,index:Y,nextTick:Ge,cancelNextTick:ht,detectDirection:cr,getChild:ve};h.get=function(t){return t[F]};h.mount=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e[0].constructor===Array&&(e=e[0]),e.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(h.utils=q(q({},h.utils),n.utils)),Be.mount(n)})};h.create=function(t,e){return new h(t,e)};h.version=Or;var D=[],Ae,gt,mt=!1,st,dt,et,Ie;function Jr(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(r){var n=r.originalEvent;this.sortable.nativeDraggable?b(document,"dragover",this._handleAutoScroll):this.options.supportPointer?b(document,"pointermove",this._handleFallbackAutoScroll):n.touches?b(document,"touchmove",this._handleFallbackAutoScroll):b(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(r){var n=r.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?v(document,"dragover",this._handleAutoScroll):(v(document,"pointermove",this._handleFallbackAutoScroll),v(document,"touchmove",this._handleFallbackAutoScroll),v(document,"mousemove",this._handleFallbackAutoScroll)),Lt(),qe(),Hr()},nulling:function(){et=gt=Ae=mt=Ie=st=dt=null,D.length=0},_handleFallbackAutoScroll:function(r){this._handleAutoScroll(r,!0)},_handleAutoScroll:function(r,n){var i=this,o=(r.touches?r.touches[0]:r).clientX,l=(r.touches?r.touches[0]:r).clientY,a=document.elementFromPoint(o,l);if(et=r,n||this.options.forceAutoScrollFallback||Fe||te||He){ut(r,this.options,a,n);var s=ae(a,!0);mt&&(!Ie||o!==st||l!==dt)&&(Ie&&Lt(),Ie=setInterval(function(){var d=ae(document.elementFromPoint(o,l),!0);d!==s&&(s=d,qe()),ut(r,i.options,d,n)},10),st=o,dt=l)}else{if(!this.options.bubbleScroll||ae(a,!0)===G()){qe();return}ut(r,this.options,ae(a,!1),!1)}}},ee(t,{pluginName:"scroll",initializeByDefault:!0})}function qe(){D.forEach(function(t){clearInterval(t.pid)}),D=[]}function Lt(){clearInterval(Ie)}var ut=sr(function(t,e,r,n){if(e.scroll){var i=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,l=e.scrollSensitivity,a=e.scrollSpeed,s=G(),d=!1,c;gt!==r&&(gt=r,qe(),Ae=e.scroll,c=e.scrollFn,Ae===!0&&(Ae=ae(r,!0)));var p=0,m=Ae;do{var E=m,y=O(E),x=y.top,z=y.bottom,U=y.left,I=y.right,j=y.width,V=y.height,le=void 0,W=void 0,se=E.scrollWidth,be=E.scrollHeight,N=f(E),xe=E.scrollLeft,re=E.scrollTop;E===s?(le=j<se&&(N.overflowX==="auto"||N.overflowX==="scroll"||N.overflowX==="visible"),W=V<be&&(N.overflowY==="auto"||N.overflowY==="scroll"||N.overflowY==="visible")):(le=j<se&&(N.overflowX==="auto"||N.overflowX==="scroll"),W=V<be&&(N.overflowY==="auto"||N.overflowY==="scroll"));var Ee=le&&(Math.abs(I-i)<=l&&xe+j<se)-(Math.abs(U-i)<=l&&!!xe),K=W&&(Math.abs(z-o)<=l&&re+V<be)-(Math.abs(x-o)<=l&&!!re);if(!D[p])for(var de=0;de<=p;de++)D[de]||(D[de]={});(D[p].vx!=Ee||D[p].vy!=K||D[p].el!==E)&&(D[p].el=E,D[p].vx=Ee,D[p].vy=K,clearInterval(D[p].pid),(Ee!=0||K!=0)&&(d=!0,D[p].pid=setInterval(function(){n&&this.layer===0&&h.active._onTouchMove(et);var we=D[this.layer].vy?D[this.layer].vy*a:0,ne=D[this.layer].vx?D[this.layer].vx*a:0;typeof c=="function"&&c.call(h.dragged.parentNode[F],ne,we,t,et,D[this.layer].el)!=="continue"||dr(D[this.layer].el,ne,we)}.bind({layer:p}),24))),p++}while(e.bubbleScroll&&m!==s&&(m=ae(m,!1)));mt=d}},30),mr=function(e){var r=e.originalEvent,n=e.putSortable,i=e.dragEl,o=e.activeSortable,l=e.dispatchSortableEvent,a=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(r){var d=n||o;a();var c=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:r,p=document.elementFromPoint(c.clientX,c.clientY);s(),d&&!d.el.contains(p)&&(l("spill"),this.onSpill({dragEl:i,putSortable:n}))}};function vt(){}vt.prototype={startIndex:null,dragStart:function(e){var r=e.oldDraggableIndex;this.startIndex=r},onSpill:function(e){var r=e.dragEl,n=e.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var i=ve(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(r,i):this.sortable.el.appendChild(r),this.sortable.animateAll(),n&&n.animateAll()},drop:mr};ee(vt,{pluginName:"revertOnSpill"});function bt(){}bt.prototype={onSpill:function(e){var r=e.dragEl,n=e.putSortable,i=n||this.sortable;i.captureAnimationState(),r.parentNode&&r.parentNode.removeChild(r),i.animateAll()},drop:mr};ee(bt,{pluginName:"removeOnSpill"});h.mount(new Jr);h.mount(bt,vt);const yr=`
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
`,vr=`
* {
  font-family: Roboto, sans-serif;
}

${_r}
${Er}
${wr}
${Cr}

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
`;var Ur=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,T=(t,e,r,n)=>{for(var i=n>1?void 0:n?Kr(e,r):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(i=(n?l(e,r,i):l(i))||i);return n&&i&&Ur(e,r,i),i};let k=class extends tr{constructor(){super(...arguments),this.for="eox-map",this.layerIdentifier="id",this.layerTitle="title",this.sortBy="layerOrder",this.layerConfig=["opacity"],this.externalLayerConfig=void 0,this.filterLayers=(t,e,r)=>{let n=[];const i=(o,l,a)=>{n=[...n,...o.filter(d=>d.get(l)===a)];const s=o.filter(d=>d.getLayers);return s.length>0&&s.forEach(d=>i(d.getLayers().getArray(),l,a)),n};return i(t,e,r),n},this.findLayerById=(t,e)=>this.filterLayers(t,"id",e)[0],this.getLayerType=(t,e)=>{var r;return t.getLayers?"group":e.getInteractions().getArray().filter(n=>n.freehand_!==void 0).map(n=>{var i;return(i=n.source_)==null?void 0:i.ol_uid}).includes(t.getSource?(r=t.getSource())==null?void 0:r.ol_uid:void 0)?"draw":t.declutter_!==void 0?"vector":"raster"}}_updateControl(t){const e=(r,n)=>{r.forEach(i=>{n&&i.set("_group_id",n),i.get(this.layerIdentifier)||i.set(this.layerIdentifier,i.ol_uid),i.get(this.layerTitle)||i.set(this.layerTitle,`layer ${i.ol_uid}`),i.getLayers&&e(i.getLayers().getArray(),i.get("id")||i.ol_uid)})};e(t.getArray()),this.layerCollection=t,this.optionalLayerArray=this.filterLayers(t.getArray(),"layerControlOptional",!0)}_emitLayerconfig(t){const e={detail:{layer:t},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("layerconfig",e))}changeOpacity(t,e){t.setOpacity(e)}changeStyleProperty(t,e,r){t.updateStyleVariables({...t.style_,[e]:r})}preFilterLayers(t){return[...t].filter(e=>e.get("layerControlHide")!==!0&&e.get("layerControlOptional")!==!0)}toggleLayerVisibility(t,e){if(t.setVisible(!t.getVisible()),t.get("layerControlExclusive")){let r=[];e?r=this.findLayerById(this.layerCollection.getArray(),e).getLayers().getArray().filter(i=>i.get(this.layerIdentifier)!==t.get(this.layerIdentifier)&&i.get("layerControlExclusive")):r=this.layerCollection.getArray().filter(n=>n.get(this.layerIdentifier)!==t.get(this.layerIdentifier)&&n.get("layerControlExclusive")),r.forEach(n=>{n.setVisible(!1)}),this.requestUpdate()}}render(){var l;const t=document.querySelector(this.for);if(t&&(t.map?this.olMap=t.map:this.olMap=t),!this.olMap)return X;const e=this.olMap.getLayers();this._updateControl(e);const r=a=>{a.on("change:length",()=>{this._currentlySorting||setTimeout(()=>{this._updateControl(a)})})};r(e);const n=a=>{a.getArray().forEach(s=>{if(s.getLayers){const d=s.getLayers();r(d),n(d)}})};n(e);const i=(a,s,d)=>{var c;return _`
      <details open="${a.get("layerControlExpand")?!0:X}">
        <summary>
          <div class="layer">
            <div class="left">
              <input
                type="${a.get("layerControlExclusive")?"radio":"checkbox"}"
                .checked="${ct(a.getVisible())}"
                @click=${()=>{this.toggleLayerVisibility(a,s)}}
              />
              <span class="title"
                ><span
                  >${a.get(this.layerTitle)||`${a.get(this.layerIdentifier)}`}</span
                >
              </span>
            </div>
            <div class="right">
              ${this.sortBy==="layerOrder"&&!this.unstyled?_` <div
                    class="drag-handle ${a.get("layerControlDisable")?"disabled":""}"
                  >
                    <span>=</span>
                  </div>`:X}
            </div>
          </div>
        </summary>
        ${this.layerConfig?_`
              <eox-layerconfig
                .layerConfig="${this.layerConfig}"
                .layerControl="${this}"
                .layer=${a}
                .external=${this.externalLayerConfig}
                .unstyled="${this.unstyled}"
                @removeLayer=${()=>{var m;((m=this.optionalLayerArray)==null?void 0:m.length)>0?(a.set("layerControlOptional",!0),a.setVisible(!1),this.requestUpdate()):d.remove(a);const p=this.renderRoot.querySelector(`[data-layer='${a.get(this.layerIdentifier)}'`);p.parentNode.removeChild(p)}}
              ></eox-layerconfig>
            `:X}
        ${this.externalLayerConfig&&((c=a.style_)!=null&&c.color)?_`
              <button @click=${()=>this._emitLayerconfig(a)}>
                configure
              </button>
            `:X}
        ${a.getLayers?_`
              ${o(this.preFilterLayers([...a.getLayers().getArray()].reverse()),a.get(this.layerIdentifier),a.getLayers())}
            `:X}
      </details>
    `},o=(a,s,d)=>_`
      <ul data-group="${s??X}">
        ${pt(a,c=>c.get(this.layerIdentifier),c=>{var p;return _`
            <li
              data-layer="${c.get(this.layerIdentifier)}"
              data-disabled="${c.get("layerControlDisable")||X}"
              data-type="${this.getLayerType(c,this.olMap)}"
              data-layerconfig="${((p=this.layerConfig)==null?void 0:p.length)>0}"
            >
              ${i(c,s,d)}
            </li>
          `})}
      </ul>
    `;return _`
      <style>
        ${yr}
        ${!this.unstyled&&vr}
      </style>
      <div>
        <slot></slot>
        ${this.layerCollection.getArray().length>10?_`<input type="text" placeholder="Find layer" />`:X}
        <div class="layers">
          ${o(this.preFilterLayers(e.getArray()),null,this.layerCollection)}
        </div>
        ${nr(((l=this.optionalLayerArray)==null?void 0:l.length)>0,()=>_`
            <label for="optional">Optional layers</label>

            <select name="optional" data-cy="optionalLayers">
              <option disabled selected value>
                -- select an optional layer to add --
              </option>
              ${this.optionalLayerArray.map(a=>_`
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
    `}updated(){this.sortBy=="layerOrder"&&this.renderRoot.querySelectorAll("ul").forEach(e=>{const r=e.dataset.group;h.create(e,{handle:this.unstyled?"summary":".drag-handle",dataIdAttr:"data-layer",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",store:{get:()=>{if(r){const n=this.findLayerById(this.layerCollection.getArray(),r);return n?[...n.getLayers().getArray().map(o=>o.get(this.layerIdentifier))].reverse():void 0}else return[...this.layerCollection.getArray().map(n=>n.get(this.layerIdentifier))].reverse()},set:n=>{n.toArray().reverse().forEach((o,l)=>{if(r){const a=this.findLayerById(this.layerCollection.getArray(),r);if(!a)return;const s=a.getLayers(),d=this.findLayerById(s.getArray(),o);s.remove(d),s.insertAt(l,d)}else{const a=this.findLayerById(this.layerCollection.getArray(),o);this.layerCollection.remove(a),this.layerCollection.insertAt(l,a)}})}},onMove:n=>!n.related.dataset.disabled})})}};T([$e()],k.prototype,"olMap",2);T([$e()],k.prototype,"layerCollection",2);T([$e()],k.prototype,"optionalLayerArray",2);T([B()],k.prototype,"for",2);T([B()],k.prototype,"layerIdentifier",2);T([B()],k.prototype,"layerTitle",2);T([B()],k.prototype,"sortBy",2);T([B({type:Array})],k.prototype,"layerConfig",2);T([B({type:Boolean})],k.prototype,"externalLayerConfig",2);T([B({type:Boolean})],k.prototype,"unstyled",2);k=T([rr("eox-layercontrol")],k);let J=class extends tr{constructor(){super(...arguments),this._configList={}}_handleInput(t,e){e==="opacity"?this._layerControlElement.changeOpacity(this._currentLayer,parseFloat(t.target.value)):this._layerControlElement.changeStyleProperty(this._currentLayer,e,parseFloat(t.target.value))}_parseConfigs(t){if(!t)return;const e=t.style_;e&&e.color&&e.color[0]==="array"&&(this._configList=e.variables)}connectedCallback(){super.connectedCallback(),!this.layerConfig&&!this.layerControl?(this._layerControlElement=document.querySelector(this.for),this._layerControlElement&&(this.layerConfig=this._layerControlElement.layerConfig,this._layerControlElement.addEventListener("layerconfig",t=>{this._currentLayer=t.detail.layer,this._parseConfigs(this._currentLayer),this.requestUpdate()}))):(this._layerControlElement=this.layerControl,this._currentLayer=this.layer,this._parseConfigs(this._currentLayer))}render(){return _`
      <style>
        ${yr}
        ${!this.unstyled&&vr}
      </style>
      ${nr(this._currentLayer,()=>_`
          <div>
            <slot></slot>
            <div class="slider-control">
              <div class="slider-property">Remove</div>
              <button
                class="delete"
                @click="${()=>this.dispatchEvent(new CustomEvent("removeLayer"))}"
              ></button>
            </div>
            ${this.for?_`layer: ${this._currentLayer.get("name")}`:X}
            ${pt(this.layerConfig.filter(t=>this.for?t!=="opacity":!0),t=>t,t=>_`
                <div class="slider-control">
                  <div class="slider-property">${t}</div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value="${ct(this._currentLayer.getOpacity())}"
                    @input=${e=>this._handleInput(e,t)}
                  />
                </div>
              `)}
            ${Object.keys(this._configList).length>0&&!this.external?_`
                  <details open="${this.for?!0:X}">
                    <summary>Layer config</summary>
                    <ul>
                      ${pt(Object.keys(this._configList),t=>t,t=>_` <li>
                          <div>${t}</div>
                          <input
                            type="range"
                            min="${["red","green","blue"].includes(t)?1:2e3}"
                            max="${["red","green","blue"].includes(t)?4:5e3}"
                            value="${ct(this._configList[t])}"
                            @input=${e=>this._handleInput(e,t)}
                          />
                        </li>`)}
                    </ul>
                  </details>
                `:X}
          </div>
        `)}
    `}};T([B()],J.prototype,"for",2);T([B({type:Array})],J.prototype,"layerConfig",2);T([B({type:Object,attribute:!1})],J.prototype,"layerControl",2);T([B({type:Object,attribute:!1})],J.prototype,"layer",2);T([B({type:Boolean})],J.prototype,"external",2);T([B({type:Boolean})],J.prototype,"unstyled",2);T([$e()],J.prototype,"_currentLayer",2);T([$e()],J.prototype,"_configList",2);J=T([rr("eox-layerconfig")],J);const Qr=_` <eox-map
  style="width: 400px; height: 300px; margin-left: 7px;"
  zoom="3"
  layers='[
  {
    "type": "Group",
    "properties": {
      "id": "group2",
      "title": "Data Layers",
      "layerControlExpand": true
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
></eox-map>`,fn={title:"Elements/eox-layercontrol",tags:["autodocs"],component:"eox-layercontrol",parameters:{componentSubtitle:"Manage and configure OpenLayers map layers",layout:"centered"}},_e={args:{},render:(t,e)=>_`
    <div style="display: flex">
      <eox-layercontrol for="eox-map"></eox-layercontrol>
      ${Qr}
    </div>
  `},Se={args:{},render:(t,e)=>_`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#exclusive"></eox-layercontrol>
      <eox-map
        id="exclusive"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Tile",properties:{title:"Terrain Light",layerControlExclusive:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}},{type:"Tile",properties:{title:"EOxCloudless",layerControlExclusive:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1}])}
      >
      </eox-map>
    </div>
  `},De={args:{},render:(t,e)=>_`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#optional"></eox-layercontrol>
      <eox-map
        id="optional"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}},{type:"Tile",properties:{title:"EOxCloudless 2021",layerControlOptional:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1},{type:"Tile",properties:{title:"EOxCloudless 2020",layerControlOptional:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1},{type:"Tile",properties:{title:"EOxCloudless 2019",layerControlOptional:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2019_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1}])}
      >
      </eox-map>
    </div>
  `},Te={args:{},render:(t,e)=>_`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#expanded"></eox-layercontrol>
      <eox-map
        id="expanded"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}},{type:"Tile",properties:{title:"EOxCloudless",layerControlExpand:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1}])}
      >
      </eox-map>
    </div>
  `},Oe={args:{},render:(t,e)=>_`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#hidden"></eox-layercontrol>
      <eox-map
        id="hidden"
        style="width: 400px; height: 300px; margin-left: 7px;"
        layers=${JSON.stringify([{type:"Vector",properties:{title:"Regions",id:"regions",layerControlHide:!0},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"}},{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}}])}
      >
      </eox-map>
    </div>
  `};var At,It,Ht,Mt,Vt;_e.parameters={..._e.parameters,docs:{...(At=_e.parameters)==null?void 0:At.docs,source:{originalSource:`{
  args: {},
  render: (args, test) => html\`
    <div style="display: flex">
      <eox-layercontrol for="eox-map"></eox-layercontrol>
      \${map}
    </div>
  \`
}`,...(Ht=(It=_e.parameters)==null?void 0:It.docs)==null?void 0:Ht.source},description:{story:"Basic layercontrol setup.",...(Vt=(Mt=_e.parameters)==null?void 0:Mt.docs)==null?void 0:Vt.description}}};var Nt,Pt,$t,Ft,Bt;Se.parameters={...Se.parameters,docs:{...(Nt=Se.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...($t=(Pt=Se.parameters)==null?void 0:Pt.docs)==null?void 0:$t.source},description:{story:"By adding the `layerControlExclusive` property to map layers,\nonly one of them at a time can be visualized.",...(Bt=(Ft=Se.parameters)==null?void 0:Ft.docs)==null?void 0:Bt.description}}};var Xt,Yt,kt,zt,jt;De.parameters={...De.parameters,docs:{...(Xt=De.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
      title: "Terrain Light"
    },
    source: {
      type: "XYZ",
      url: "//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"
    }
  }, {
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
  }])}
      >
      </eox-map>
    </div>
  \`
}`,...(kt=(Yt=De.parameters)==null?void 0:Yt.docs)==null?void 0:kt.source},description:{story:`By adding the \`layerControlOptional\` property to map layers,
they are not initially rendered in the layer list, but in a
selection interface. They can be added to the layer list manually.
Removing a layer puts it back into the optional list.`,...(jt=(zt=De.parameters)==null?void 0:zt.docs)==null?void 0:jt.description}}};var Rt,Wt,Zt,Gt,qt;Te.parameters={...Te.parameters,docs:{...(Rt=Te.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
    type: "Tile",
    properties: {
      title: "EOxCloudless",
      layerControlExpand: true
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
}`,...(Zt=(Wt=Te.parameters)==null?void 0:Wt.docs)==null?void 0:Zt.source},description:{story:"By adding the `layerControlExpand` property to map layers,\nthey render in the layer control as opened.",...(qt=(Gt=Te.parameters)==null?void 0:Gt.docs)==null?void 0:qt.description}}};var Jt,Ut,Kt,Qt,er;Oe.parameters={...Oe.parameters,docs:{...(Jt=Oe.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Kt=(Ut=Oe.parameters)==null?void 0:Ut.docs)==null?void 0:Kt.source},description:{story:"By adding the `layerControlHide` property to map layers,\nthey aren't displayed in the layer control at all (but may\nbe still rendered on the map).",...(er=(Qt=Oe.parameters)==null?void 0:Qt.docs)==null?void 0:er.description}}};const hn=["Primary","ExclusiveLayers","OptionalLayers","ExpandedLayers","HiddenLayers"];export{Se as ExclusiveLayers,Te as ExpandedLayers,Oe as HiddenLayers,De as OptionalLayers,_e as Primary,hn as __namedExportsOrder,fn as default};
//# sourceMappingURL=layercontrol.stories-af217a59.js.map
