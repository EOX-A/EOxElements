var Pr=Object.freeze,Dr=Object.defineProperty;var Fn=(t,e,r)=>e in t?Dr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var P=(t,e,r)=>(Fn(t,typeof e!="symbol"?e+"":e,r),r),ir=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var O=(t,e,r)=>(ir(t,e,"read from private field"),r?r.call(t):e.get(t)),_=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},Ue=(t,e,r,o)=>(ir(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r);var J=(t,e,r)=>(ir(t,e,"access private method"),r);var ar=(t,e)=>Pr(Dr(t,"raw",{value:Pr(e||t.slice())}));import{w as yt,T as te,s as ce,x as m}from"./lit-element-Qm8PRmVu.js";import"./sources-736MaLNM.js";import"./main-8dli0zzw.js";import{n as re,o as St,a as Yn}from"./unsafe-html-ZhFXPF0T.js";import{_ as jn,c as zn}from"./index-HR78oL6N.js";import{e as Xn,i as kn,t as Te}from"./directive-xgBC_cM0.js";import{f as Wn,m as qn}from"./directive-helpers-k6EzVOeb.js";import"./main-X_IRTVp1.js";import{b as Gn}from"./button-KPw86qfe.js";import{r as Jn,c as Qo,s as Kn}from"./slider-MCblB636.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-ieEED-jJ.js";import"../sb-preview/runtime.js";import"./state-ncEgtE_C.js";import"./index-EySAwWXj.js";import"./toolcool-range-slider.min-8Vg52R7B.js";/**!
 * Sortable 1.15.1
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Mr(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function ne(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Mr(Object(r),!0).forEach(function(o){Qn(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Mr(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function Et(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Et=function(e){return typeof e}:Et=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Et(t)}function Qn(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function de(){return de=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},de.apply(this,arguments)}function ei(t,e){if(t==null)return{};var r={},o=Object.keys(t),n,i;for(i=0;i<o.length;i++)n=o[i],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}function ti(t,e){if(t==null)return{};var r=ei(t,e),o,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var ri="1.15.1";function le(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var pe=le(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),pt=le(/Edge/i),Rr=le(/firefox/i),rt=le(/safari/i)&&!le(/chrome/i)&&!le(/android/i),en=le(/iP(ad|od|hone)/i),tn=le(/chrome/i)&&le(/android/i),rn={capture:!1,passive:!1};function T(t,e,r){t.addEventListener(e,r,!pe&&rn)}function E(t,e,r){t.removeEventListener(e,r,!pe&&rn)}function At(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function oi(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function ee(t,e,r,o){if(t){r=r||document;do{if(e!=null&&(e[0]===">"?t.parentNode===r&&At(t,e):At(t,e))||o&&t===r)return t;if(t===r)break}while(t=oi(t))}return null}var Ir=/\s+/g;function X(t,e,r){if(t&&e)if(t.classList)t.classList[r?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(Ir," ").replace(" "+e+" "," ");t.className=(o+(r?" "+e:"")).replace(Ir," ")}}function f(t,e,r){var o=t&&t.style;if(o){if(r===void 0)return document.defaultView&&document.defaultView.getComputedStyle?r=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(r=t.currentStyle),e===void 0?r:r[e];!(e in o)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),o[e]=r+(typeof r=="string"?"":"px")}}function Pe(t,e){var r="";if(typeof t=="string")r=t;else do{var o=f(t,"transform");o&&o!=="none"&&(r=o+" "+r)}while(!e&&(t=t.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(r)}function on(t,e,r){if(t){var o=t.getElementsByTagName(e),n=0,i=o.length;if(r)for(;n<i;n++)r(o[n],n);return o}return[]}function oe(){var t=document.scrollingElement;return t||document.documentElement}function M(t,e,r,o,n){if(!(!t.getBoundingClientRect&&t!==window)){var i,a,s,l,d,p,c;if(t!==window&&t.parentNode&&t!==oe()?(i=t.getBoundingClientRect(),a=i.top,s=i.left,l=i.bottom,d=i.right,p=i.height,c=i.width):(a=0,s=0,l=window.innerHeight,d=window.innerWidth,p=window.innerHeight,c=window.innerWidth),(e||r)&&t!==window&&(n=n||t.parentNode,!pe))do if(n&&n.getBoundingClientRect&&(f(n,"transform")!=="none"||r&&f(n,"position")!=="static")){var y=n.getBoundingClientRect();a-=y.top+parseInt(f(n,"border-top-width")),s-=y.left+parseInt(f(n,"border-left-width")),l=a+i.height,d=s+i.width;break}while(n=n.parentNode);if(o&&t!==window){var x=Pe(n||t),v=x&&x.a,S=x&&x.d;x&&(a/=S,s/=v,c/=v,p/=S,l=a+p,d=s+c)}return{top:a,left:s,bottom:l,right:d,width:c,height:p}}}function nn(t){var e=M(t),r=parseInt(f(t,"padding-left")),o=parseInt(f(t,"padding-top")),n=parseInt(f(t,"padding-right")),i=parseInt(f(t,"padding-bottom"));return e.top+=o+parseInt(f(t,"border-top-width")),e.left+=r+parseInt(f(t,"border-left-width")),e.width=t.clientWidth-r-n,e.height=t.clientHeight-o-i,e.bottom=e.top+e.height,e.right=e.left+e.width,e}function Nr(t,e,r){for(var o=me(t,!0),n=M(t)[e];o;){var i=M(o)[r],a=void 0;if(r==="top"||r==="left"?a=n>=i:a=n<=i,!a)return o;if(o===oe())break;o=me(o,!1)}return!1}function Ie(t,e,r,o){for(var n=0,i=0,a=t.children;i<a.length;){if(a[i].style.display!=="none"&&a[i]!==g.ghost&&(o||a[i]!==g.dragged)&&ee(a[i],r.draggable,t,!1)){if(n===e)return a[i];n++}i++}return null}function Cr(t,e){for(var r=t.lastElementChild;r&&(r===g.ghost||f(r,"display")==="none"||e&&!At(r,e));)r=r.previousElementSibling;return r||null}function q(t,e){var r=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==g.clone&&(!e||At(t,e))&&r++;return r}function Vr(t){var e=0,r=0,o=oe();if(t)do{var n=Pe(t),i=n.a,a=n.d;e+=t.scrollLeft*i,r+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,r]}function ni(t,e){for(var r in t)if(t.hasOwnProperty(r)){for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[r][o])return Number(r)}return-1}function me(t,e){if(!t||!t.getBoundingClientRect)return oe();var r=t,o=!1;do if(r.clientWidth<r.scrollWidth||r.clientHeight<r.scrollHeight){var n=f(r);if(r.clientWidth<r.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||r.clientHeight<r.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!r.getBoundingClientRect||r===document.body)return oe();if(o||e)return r;o=!0}}while(r=r.parentNode);return oe()}function ii(t,e){if(t&&e)for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}function sr(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var ot;function an(t,e){return function(){if(!ot){var r=arguments,o=this;r.length===1?t.call(o,r[0]):t.apply(o,r),ot=setTimeout(function(){ot=void 0},e)}}}function ai(){clearTimeout(ot),ot=void 0}function sn(t,e,r){t.scrollLeft+=e,t.scrollTop+=r}function ln(t){var e=window.Polymer,r=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):r?r(t).clone(!0)[0]:t.cloneNode(!0)}var W="Sortable"+new Date().getTime();function si(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var o=[].slice.call(this.el.children);o.forEach(function(n){if(!(f(n,"display")==="none"||n===g.ghost)){t.push({target:n,rect:M(n)});var i=ne({},t[t.length-1].rect);if(n.thisAnimationDuration){var a=Pe(n,!0);a&&(i.top-=a.f,i.left-=a.e)}n.fromRect=i}})}},addAnimationState:function(o){t.push(o)},removeAnimationState:function(o){t.splice(ni(t,{target:o}),1)},animateAll:function(o){var n=this;if(!this.options.animation){clearTimeout(e),typeof o=="function"&&o();return}var i=!1,a=0;t.forEach(function(s){var l=0,d=s.target,p=d.fromRect,c=M(d),y=d.prevFromRect,x=d.prevToRect,v=s.rect,S=Pe(d,!0);S&&(c.top-=S.f,c.left-=S.e),d.toRect=c,d.thisAnimationDuration&&sr(y,c)&&!sr(p,c)&&(v.top-c.top)/(v.left-c.left)===(p.top-c.top)/(p.left-c.left)&&(l=di(v,y,x,n.options)),sr(c,p)||(d.prevFromRect=p,d.prevToRect=c,l||(l=n.options.animation),n.animate(d,v,c,l)),l&&(i=!0,a=Math.max(a,l),clearTimeout(d.animationResetTimer),d.animationResetTimer=setTimeout(function(){d.animationTime=0,d.prevFromRect=null,d.fromRect=null,d.prevToRect=null,d.thisAnimationDuration=null},l),d.thisAnimationDuration=l)}),clearTimeout(e),i?e=setTimeout(function(){typeof o=="function"&&o()},a):typeof o=="function"&&o(),t=[]},animate:function(o,n,i,a){if(a){f(o,"transition",""),f(o,"transform","");var s=Pe(this.el),l=s&&s.a,d=s&&s.d,p=(n.left-i.left)/(l||1),c=(n.top-i.top)/(d||1);o.animatingX=!!p,o.animatingY=!!c,f(o,"transform","translate3d("+p+"px,"+c+"px,0)"),this.forRepaintDummy=li(o),f(o,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),f(o,"transform","translate3d(0,0,0)"),typeof o.animated=="number"&&clearTimeout(o.animated),o.animated=setTimeout(function(){f(o,"transition",""),f(o,"transform",""),o.animated=!1,o.animatingX=!1,o.animatingY=!1},a)}}}}function li(t){return t.offsetWidth}function di(t,e,r,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-r.top,2)+Math.pow(e.left-r.left,2))*o.animation}var _e=[],lr={initializeByDefault:!0},ht={mount:function(e){for(var r in lr)lr.hasOwnProperty(r)&&!(r in e)&&(e[r]=lr[r]);_e.forEach(function(o){if(o.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),_e.push(e)},pluginEvent:function(e,r,o){var n=this;this.eventCanceled=!1,o.cancel=function(){n.eventCanceled=!0};var i=e+"Global";_e.forEach(function(a){r[a.pluginName]&&(r[a.pluginName][i]&&r[a.pluginName][i](ne({sortable:r},o)),r.options[a.pluginName]&&r[a.pluginName][e]&&r[a.pluginName][e](ne({sortable:r},o)))})},initializePlugins:function(e,r,o,n){_e.forEach(function(s){var l=s.pluginName;if(!(!e.options[l]&&!s.initializeByDefault)){var d=new s(e,r,e.options);d.sortable=e,d.options=e.options,e[l]=d,de(o,d.defaults)}});for(var i in e.options)if(e.options.hasOwnProperty(i)){var a=this.modifyOption(e,i,e.options[i]);typeof a<"u"&&(e.options[i]=a)}},getEventProperties:function(e,r){var o={};return _e.forEach(function(n){typeof n.eventProperties=="function"&&de(o,n.eventProperties.call(r[n.pluginName],e))}),o},modifyOption:function(e,r,o){var n;return _e.forEach(function(i){e[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[r]=="function"&&(n=i.optionListeners[r].call(e[i.pluginName],o))}),n}};function ui(t){var e=t.sortable,r=t.rootEl,o=t.name,n=t.targetEl,i=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,d=t.newIndex,p=t.oldDraggableIndex,c=t.newDraggableIndex,y=t.originalEvent,x=t.putSortable,v=t.extraEventProperties;if(e=e||r&&r[W],!!e){var S,I=e.options,ie="on"+o.charAt(0).toUpperCase()+o.substr(1);window.CustomEvent&&!pe&&!pt?S=new CustomEvent(o,{bubbles:!0,cancelable:!0}):(S=document.createEvent("Event"),S.initEvent(o,!0,!0)),S.to=a||r,S.from=s||r,S.item=n||r,S.clone=i,S.oldIndex=l,S.newIndex=d,S.oldDraggableIndex=p,S.newDraggableIndex=c,S.originalEvent=y,S.pullMode=x?x.lastPutMode:void 0;var Z=ne(ne({},v),ht.getEventProperties(o,e));for(var G in Z)S[G]=Z[G];r&&r.dispatchEvent(S),I[ie]&&I[ie].call(e,S)}}var ci=["evt"],F=function(e,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=o.evt,i=ti(o,ci);ht.pluginEvent.bind(g)(e,r,ne({dragEl:u,parentEl:L,ghostEl:b,rootEl:$,nextEl:Ee,lastDownEl:Ct,cloneEl:A,cloneHidden:ge,dragStarted:Qe,putSortable:N,activeSortable:g.active,originalEvent:n,oldIndex:Ae,oldDraggableIndex:nt,newIndex:k,newDraggableIndex:ye,hideGhostForTarget:pn,unhideGhostForTarget:hn,cloneNowHidden:function(){ge=!0},cloneNowShown:function(){ge=!1},dispatchSortableEvent:function(s){U({sortable:r,name:s,originalEvent:n})}},i))};function U(t){ui(ne({putSortable:N,cloneEl:A,targetEl:u,rootEl:$,oldIndex:Ae,oldDraggableIndex:nt,newIndex:k,newDraggableIndex:ye},t))}var u,L,b,$,Ee,Ct,A,ge,Ae,k,nt,ye,gt,N,$e=!1,Lt=!1,Pt=[],we,K,dr,ur,Hr,Br,Qe,Oe,it,at=!1,mt=!1,Tt,B,cr=[],vr=!1,Dt=[],or=typeof document<"u",vt=en,Zr=pt||pe?"cssFloat":"float",pi=or&&!tn&&!en&&"draggable"in document.createElement("div"),dn=function(){if(or){if(pe)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),un=function(e,r){var o=f(e),n=parseInt(o.width)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth),i=Ie(e,0,r),a=Ie(e,1,r),s=i&&f(i),l=a&&f(a),d=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+M(i).width,p=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+M(a).width;if(o.display==="flex")return o.flexDirection==="column"||o.flexDirection==="column-reverse"?"vertical":"horizontal";if(o.display==="grid")return o.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&s.float&&s.float!=="none"){var c=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===c)?"vertical":"horizontal"}return i&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||d>=n&&o[Zr]==="none"||a&&o[Zr]==="none"&&d+p>n)?"vertical":"horizontal"},hi=function(e,r,o){var n=o?e.left:e.top,i=o?e.right:e.bottom,a=o?e.width:e.height,s=o?r.left:r.top,l=o?r.right:r.bottom,d=o?r.width:r.height;return n===s||i===l||n+a/2===s+d/2},fi=function(e,r){var o;return Pt.some(function(n){var i=n[W].options.emptyInsertThreshold;if(!(!i||Cr(n))){var a=M(n),s=e>=a.left-i&&e<=a.right+i,l=r>=a.top-i&&r<=a.bottom+i;if(s&&l)return o=n}}),o},cn=function(e){function r(i,a){return function(s,l,d,p){var c=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(i==null&&(a||c))return!0;if(i==null||i===!1)return!1;if(a&&i==="clone")return i;if(typeof i=="function")return r(i(s,l,d,p),a)(s,l,d,p);var y=(a?s:l).options.group.name;return i===!0||typeof i=="string"&&i===y||i.join&&i.indexOf(y)>-1}}var o={},n=e.group;(!n||Et(n)!="object")&&(n={name:n}),o.name=n.name,o.checkPull=r(n.pull,!0),o.checkPut=r(n.put),o.revertClone=n.revertClone,e.group=o},pn=function(){!dn&&b&&f(b,"display","none")},hn=function(){!dn&&b&&f(b,"display","")};or&&!tn&&document.addEventListener("click",function(t){if(Lt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Lt=!1,!1},!0);var Se=function(e){if(u){e=e.touches?e.touches[0]:e;var r=fi(e.clientX,e.clientY);if(r){var o={};for(var n in e)e.hasOwnProperty(n)&&(o[n]=e[n]);o.target=o.rootEl=r,o.preventDefault=void 0,o.stopPropagation=void 0,r[W]._onDragOver(o)}}},yi=function(e){u&&u.parentNode[W]._isOutsideThisEl(e.target)};function g(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=de({},e),t[W]=this;var r={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return un(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:g.supportPointer!==!1&&"PointerEvent"in window&&!rt,emptyInsertThreshold:5};ht.initializePlugins(this,t,r);for(var o in r)!(o in e)&&(e[o]=r[o]);cn(e);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=e.forceFallback?!1:pi,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?T(t,"pointerdown",this._onTapStart):(T(t,"mousedown",this._onTapStart),T(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(T(t,"dragover",this),T(t,"dragenter",this)),Pt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),de(this,si())}g.prototype={constructor:g,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(Oe=null)},_getDirection:function(e,r){return typeof this.options.direction=="function"?this.options.direction.call(this,e,r,u):this.options.direction},_onTapStart:function(e){if(e.cancelable){var r=this,o=this.el,n=this.options,i=n.preventOnFilter,a=e.type,s=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,l=(s||e).target,d=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,p=n.filter;if(Ei(o),!u&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||n.disabled)&&!d.isContentEditable&&!(!this.nativeDraggable&&rt&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=ee(l,n.draggable,o,!1),!(l&&l.animated)&&Ct!==l)){if(Ae=q(l),nt=q(l,n.draggable),typeof p=="function"){if(p.call(this,e,l,this)){U({sortable:r,rootEl:d,name:"filter",targetEl:l,toEl:o,fromEl:o}),F("filter",r,{evt:e}),i&&e.cancelable&&e.preventDefault();return}}else if(p&&(p=p.split(",").some(function(c){if(c=ee(d,c.trim(),o,!1),c)return U({sortable:r,rootEl:c,name:"filter",targetEl:l,fromEl:o,toEl:o}),F("filter",r,{evt:e}),!0}),p)){i&&e.cancelable&&e.preventDefault();return}n.handle&&!ee(d,n.handle,o,!1)||this._prepareDragStart(e,s,l)}}},_prepareDragStart:function(e,r,o){var n=this,i=n.el,a=n.options,s=i.ownerDocument,l;if(o&&!u&&o.parentNode===i){var d=M(o);if($=i,u=o,L=u.parentNode,Ee=u.nextSibling,Ct=o,gt=a.group,g.dragged=u,we={target:u,clientX:(r||e).clientX,clientY:(r||e).clientY},Hr=we.clientX-d.left,Br=we.clientY-d.top,this._lastX=(r||e).clientX,this._lastY=(r||e).clientY,u.style["will-change"]="all",l=function(){if(F("delayEnded",n,{evt:e}),g.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!Rr&&n.nativeDraggable&&(u.draggable=!0),n._triggerDragStart(e,r),U({sortable:n,name:"choose",originalEvent:e}),X(u,a.chosenClass,!0)},a.ignore.split(",").forEach(function(p){on(u,p.trim(),pr)}),T(s,"dragover",Se),T(s,"mousemove",Se),T(s,"touchmove",Se),T(s,"mouseup",n._onDrop),T(s,"touchend",n._onDrop),T(s,"touchcancel",n._onDrop),Rr&&this.nativeDraggable&&(this.options.touchStartThreshold=4,u.draggable=!0),F("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||r)&&(!this.nativeDraggable||!(pt||pe))){if(g.eventCanceled){this._onDrop();return}T(s,"mouseup",n._disableDelayedDrag),T(s,"touchend",n._disableDelayedDrag),T(s,"touchcancel",n._disableDelayedDrag),T(s,"mousemove",n._delayedDragTouchMoveHandler),T(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&T(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(e){var r=e.touches?e.touches[0]:e;Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){u&&pr(u),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;E(e,"mouseup",this._disableDelayedDrag),E(e,"touchend",this._disableDelayedDrag),E(e,"touchcancel",this._disableDelayedDrag),E(e,"mousemove",this._delayedDragTouchMoveHandler),E(e,"touchmove",this._delayedDragTouchMoveHandler),E(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,r){r=r||e.pointerType=="touch"&&e,!this.nativeDraggable||r?this.options.supportPointer?T(document,"pointermove",this._onTouchMove):r?T(document,"touchmove",this._onTouchMove):T(document,"mousemove",this._onTouchMove):(T(u,"dragend",this),T($,"dragstart",this._onDragStart));try{document.selection?_t(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,r){if($e=!1,$&&u){F("dragStarted",this,{evt:r}),this.nativeDraggable&&T(document,"dragover",yi);var o=this.options;!e&&X(u,o.dragClass,!1),X(u,o.ghostClass,!0),g.active=this,e&&this._appendGhost(),U({sortable:this,name:"start",originalEvent:r})}else this._nulling()},_emulateDragOver:function(){if(K){this._lastX=K.clientX,this._lastY=K.clientY,pn();for(var e=document.elementFromPoint(K.clientX,K.clientY),r=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(K.clientX,K.clientY),e!==r);)r=e;if(u.parentNode[W]._isOutsideThisEl(e),r)do{if(r[W]){var o=void 0;if(o=r[W]._onDragOver({clientX:K.clientX,clientY:K.clientY,target:e,rootEl:r}),o&&!this.options.dragoverBubble)break}e=r}while(r=r.parentNode);hn()}},_onTouchMove:function(e){if(we){var r=this.options,o=r.fallbackTolerance,n=r.fallbackOffset,i=e.touches?e.touches[0]:e,a=b&&Pe(b,!0),s=b&&a&&a.a,l=b&&a&&a.d,d=vt&&B&&Vr(B),p=(i.clientX-we.clientX+n.x)/(s||1)+(d?d[0]-cr[0]:0)/(s||1),c=(i.clientY-we.clientY+n.y)/(l||1)+(d?d[1]-cr[1]:0)/(l||1);if(!g.active&&!$e){if(o&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<o)return;this._onDragStart(e,!0)}if(b){a?(a.e+=p-(dr||0),a.f+=c-(ur||0)):a={a:1,b:0,c:0,d:1,e:p,f:c};var y="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");f(b,"webkitTransform",y),f(b,"mozTransform",y),f(b,"msTransform",y),f(b,"transform",y),dr=p,ur=c,K=i}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!b){var e=this.options.fallbackOnBody?document.body:$,r=M(u,!0,vt,!0,e),o=this.options;if(vt){for(B=e;f(B,"position")==="static"&&f(B,"transform")==="none"&&B!==document;)B=B.parentNode;B!==document.body&&B!==document.documentElement?(B===document&&(B=oe()),r.top+=B.scrollTop,r.left+=B.scrollLeft):B=oe(),cr=Vr(B)}b=u.cloneNode(!0),X(b,o.ghostClass,!1),X(b,o.fallbackClass,!0),X(b,o.dragClass,!0),f(b,"transition",""),f(b,"transform",""),f(b,"box-sizing","border-box"),f(b,"margin",0),f(b,"top",r.top),f(b,"left",r.left),f(b,"width",r.width),f(b,"height",r.height),f(b,"opacity","0.8"),f(b,"position",vt?"absolute":"fixed"),f(b,"zIndex","100000"),f(b,"pointerEvents","none"),g.ghost=b,e.appendChild(b),f(b,"transform-origin",Hr/parseInt(b.style.width)*100+"% "+Br/parseInt(b.style.height)*100+"%")}},_onDragStart:function(e,r){var o=this,n=e.dataTransfer,i=o.options;if(F("dragStart",this,{evt:e}),g.eventCanceled){this._onDrop();return}F("setupClone",this),g.eventCanceled||(A=ln(u),A.removeAttribute("id"),A.draggable=!1,A.style["will-change"]="",this._hideClone(),X(A,this.options.chosenClass,!1),g.clone=A),o.cloneId=_t(function(){F("clone",o),!g.eventCanceled&&(o.options.removeCloneOnHide||$.insertBefore(A,u),o._hideClone(),U({sortable:o,name:"clone"}))}),!r&&X(u,i.dragClass,!0),r?(Lt=!0,o._loopId=setInterval(o._emulateDragOver,50)):(E(document,"mouseup",o._onDrop),E(document,"touchend",o._onDrop),E(document,"touchcancel",o._onDrop),n&&(n.effectAllowed="move",i.setData&&i.setData.call(o,n,u)),T(document,"drop",o),f(u,"transform","translateZ(0)")),$e=!0,o._dragStartId=_t(o._dragStarted.bind(o,r,e)),T(document,"selectstart",o),Qe=!0,rt&&f(document.body,"user-select","none")},_onDragOver:function(e){var r=this.el,o=e.target,n,i,a,s=this.options,l=s.group,d=g.active,p=gt===l,c=s.sort,y=N||d,x,v=this,S=!1;if(vr)return;function I(Ze,Zn){F(Ze,v,ne({evt:e,isOwner:p,axis:x?"vertical":"horizontal",revert:a,dragRect:n,targetRect:i,canSort:c,fromSortable:y,target:o,completed:Z,onMove:function(Lr,Un){return bt($,r,u,n,Lr,M(Lr),e,Un)},changed:G},Zn))}function ie(){I("dragOverAnimationCapture"),v.captureAnimationState(),v!==y&&y.captureAnimationState()}function Z(Ze){return I("dragOverCompleted",{insertion:Ze}),Ze&&(p?d._hideClone():d._showClone(v),v!==y&&(X(u,N?N.options.ghostClass:d.options.ghostClass,!1),X(u,s.ghostClass,!0)),N!==v&&v!==g.active?N=v:v===g.active&&N&&(N=null),y===v&&(v._ignoreWhileAnimating=o),v.animateAll(function(){I("dragOverAnimationComplete"),v._ignoreWhileAnimating=null}),v!==y&&(y.animateAll(),y._ignoreWhileAnimating=null)),(o===u&&!u.animated||o===r&&!o.animated)&&(Oe=null),!s.dragoverBubble&&!e.rootEl&&o!==document&&(u.parentNode[W]._isOutsideThisEl(e.target),!Ze&&Se(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),S=!0}function G(){k=q(u),ye=q(u,s.draggable),U({sortable:v,name:"change",toEl:r,newIndex:k,newDraggableIndex:ye,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),o=ee(o,s.draggable,r,!0),I("dragOver"),g.eventCanceled)return S;if(u.contains(e.target)||o.animated&&o.animatingX&&o.animatingY||v._ignoreWhileAnimating===o)return Z(!1);if(Lt=!1,d&&!s.disabled&&(p?c||(a=L!==$):N===this||(this.lastPutMode=gt.checkPull(this,d,u,e))&&l.checkPut(this,d,u,e))){if(x=this._getDirection(e,o)==="vertical",n=M(u),I("dragOverValid"),g.eventCanceled)return S;if(a)return L=$,ie(),this._hideClone(),I("revert"),g.eventCanceled||(Ee?$.insertBefore(u,Ee):$.appendChild(u)),Z(!0);var j=Cr(r,s.draggable);if(!j||bi(e,x,this)&&!j.animated){if(j===u)return Z(!1);if(j&&r===e.target&&(o=j),o&&(i=M(o)),bt($,r,u,n,o,i,e,!!o)!==!1)return ie(),j&&j.nextSibling?r.insertBefore(u,j.nextSibling):r.appendChild(u),L=r,G(),Z(!0)}else if(j&&vi(e,x,this)){var ve=Ie(r,0,s,!0);if(ve===u)return Z(!1);if(o=ve,i=M(o),bt($,r,u,n,o,i,e,!1)!==!1)return ie(),r.insertBefore(u,ve),L=r,G(),Z(!0)}else if(o.parentNode===r){i=M(o);var Q=0,be,Ne=u.parentNode!==r,z=!hi(u.animated&&u.toRect||n,o.animated&&o.toRect||i,x),Ve=x?"top":"left",he=Nr(o,"top","top")||Nr(u,"top","top"),He=he?he.scrollTop:void 0;Oe!==o&&(be=i[Ve],at=!1,mt=!z&&s.invertSwap||Ne),Q=xi(e,o,i,x,z?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,mt,Oe===o);var ae;if(Q!==0){var xe=q(u);do xe-=Q,ae=L.children[xe];while(ae&&(f(ae,"display")==="none"||ae===b))}if(Q===0||ae===o)return Z(!1);Oe=o,it=Q;var Be=o.nextElementSibling,fe=!1;fe=Q===1;var ft=bt($,r,u,n,o,i,e,fe);if(ft!==!1)return(ft===1||ft===-1)&&(fe=ft===1),vr=!0,setTimeout(mi,30),ie(),fe&&!Be?r.appendChild(u):o.parentNode.insertBefore(u,fe?Be:o),he&&sn(he,0,He-he.scrollTop),L=u.parentNode,be!==void 0&&!mt&&(Tt=Math.abs(be-M(o)[Ve])),G(),Z(!0)}if(r.contains(u))return Z(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){E(document,"mousemove",this._onTouchMove),E(document,"touchmove",this._onTouchMove),E(document,"pointermove",this._onTouchMove),E(document,"dragover",Se),E(document,"mousemove",Se),E(document,"touchmove",Se)},_offUpEvents:function(){var e=this.el.ownerDocument;E(e,"mouseup",this._onDrop),E(e,"touchend",this._onDrop),E(e,"pointerup",this._onDrop),E(e,"touchcancel",this._onDrop),E(document,"selectstart",this)},_onDrop:function(e){var r=this.el,o=this.options;if(k=q(u),ye=q(u,o.draggable),F("drop",this,{evt:e}),L=u&&u.parentNode,k=q(u),ye=q(u,o.draggable),g.eventCanceled){this._nulling();return}$e=!1,mt=!1,at=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),br(this.cloneId),br(this._dragStartId),this.nativeDraggable&&(E(document,"drop",this),E(r,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),rt&&f(document.body,"user-select",""),f(u,"transform",""),e&&(Qe&&(e.cancelable&&e.preventDefault(),!o.dropBubble&&e.stopPropagation()),b&&b.parentNode&&b.parentNode.removeChild(b),($===L||N&&N.lastPutMode!=="clone")&&A&&A.parentNode&&A.parentNode.removeChild(A),u&&(this.nativeDraggable&&E(u,"dragend",this),pr(u),u.style["will-change"]="",Qe&&!$e&&X(u,N?N.options.ghostClass:this.options.ghostClass,!1),X(u,this.options.chosenClass,!1),U({sortable:this,name:"unchoose",toEl:L,newIndex:null,newDraggableIndex:null,originalEvent:e}),$!==L?(k>=0&&(U({rootEl:L,name:"add",toEl:L,fromEl:$,originalEvent:e}),U({sortable:this,name:"remove",toEl:L,originalEvent:e}),U({rootEl:L,name:"sort",toEl:L,fromEl:$,originalEvent:e}),U({sortable:this,name:"sort",toEl:L,originalEvent:e})),N&&N.save()):k!==Ae&&k>=0&&(U({sortable:this,name:"update",toEl:L,originalEvent:e}),U({sortable:this,name:"sort",toEl:L,originalEvent:e})),g.active&&((k==null||k===-1)&&(k=Ae,ye=nt),U({sortable:this,name:"end",toEl:L,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){F("nulling",this),$=u=L=b=Ee=A=Ct=ge=we=K=Qe=k=ye=Ae=nt=Oe=it=N=gt=g.dragged=g.ghost=g.clone=g.active=null,Dt.forEach(function(e){e.checked=!0}),Dt.length=dr=ur=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":u&&(this._onDragOver(e),gi(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],r,o=this.el.children,n=0,i=o.length,a=this.options;n<i;n++)r=o[n],ee(r,a.draggable,this.el,!1)&&e.push(r.getAttribute(a.dataIdAttr)||Si(r));return e},sort:function(e,r){var o={},n=this.el;this.toArray().forEach(function(i,a){var s=n.children[a];ee(s,this.options.draggable,n,!1)&&(o[i]=s)},this),r&&this.captureAnimationState(),e.forEach(function(i){o[i]&&(n.removeChild(o[i]),n.appendChild(o[i]))}),r&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,r){return ee(e,r||this.options.draggable,this.el,!1)},option:function(e,r){var o=this.options;if(r===void 0)return o[e];var n=ht.modifyOption(this,e,r);typeof n<"u"?o[e]=n:o[e]=r,e==="group"&&cn(o)},destroy:function(){F("destroy",this);var e=this.el;e[W]=null,E(e,"mousedown",this._onTapStart),E(e,"touchstart",this._onTapStart),E(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(E(e,"dragover",this),E(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(r){r.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Pt.splice(Pt.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!ge){if(F("hideClone",this),g.eventCanceled)return;f(A,"display","none"),this.options.removeCloneOnHide&&A.parentNode&&A.parentNode.removeChild(A),ge=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(ge){if(F("showClone",this),g.eventCanceled)return;u.parentNode==$&&!this.options.group.revertClone?$.insertBefore(A,u):Ee?$.insertBefore(A,Ee):$.appendChild(A),this.options.group.revertClone&&this.animate(u,A),f(A,"display",""),ge=!1}}};function gi(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function bt(t,e,r,o,n,i,a,s){var l,d=t[W],p=d.options.onMove,c;return window.CustomEvent&&!pe&&!pt?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=e,l.from=t,l.dragged=r,l.draggedRect=o,l.related=n||e,l.relatedRect=i||M(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),p&&(c=p.call(d,l,a)),c}function pr(t){t.draggable=!1}function mi(){vr=!1}function vi(t,e,r){var o=M(Ie(r.el,0,r.options,!0)),n=nn(r.el),i=10;return e?t.clientX<n.left-i||t.clientY<o.top&&t.clientX<o.right:t.clientY<n.top-i||t.clientY<o.bottom&&t.clientX<o.left}function bi(t,e,r){var o=M(Cr(r.el,r.options.draggable)),n=nn(r.el),i=10;return e?t.clientX>n.right+i||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>n.bottom+i||t.clientX>o.right&&t.clientY>o.top}function xi(t,e,r,o,n,i,a,s){var l=o?t.clientY:t.clientX,d=o?r.height:r.width,p=o?r.top:r.left,c=o?r.bottom:r.right,y=!1;if(!a){if(s&&Tt<d*n){if(!at&&(it===1?l>p+d*i/2:l<c-d*i/2)&&(at=!0),at)y=!0;else if(it===1?l<p+Tt:l>c-Tt)return-it}else if(l>p+d*(1-n)/2&&l<c-d*(1-n)/2)return wi(e)}return y=y||a,y&&(l<p+d*i/2||l>c-d*i/2)?l>p+d/2?1:-1:0}function wi(t){return q(u)<q(t)?1:-1}function Si(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,r=e.length,o=0;r--;)o+=e.charCodeAt(r);return o.toString(36)}function Ei(t){Dt.length=0;for(var e=t.getElementsByTagName("input"),r=e.length;r--;){var o=e[r];o.checked&&Dt.push(o)}}function _t(t){return setTimeout(t,0)}function br(t){return clearTimeout(t)}or&&T(document,"touchmove",function(t){(g.active||$e)&&t.cancelable&&t.preventDefault()});g.utils={on:T,off:E,css:f,find:on,is:function(e,r){return!!ee(e,r,e,!1)},extend:ii,throttle:an,closest:ee,toggleClass:X,clone:ln,index:q,nextTick:_t,cancelNextTick:br,detectDirection:un,getChild:Ie};g.get=function(t){return t[W]};g.mount=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e[0].constructor===Array&&(e=e[0]),e.forEach(function(o){if(!o.prototype||!o.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));o.utils&&(g.utils=ne(ne({},g.utils),o.utils)),ht.mount(o)})};g.create=function(t,e){return new g(t,e)};g.version=ri;var D=[],et,xr,wr=!1,hr,fr,Mt,tt;function Ci(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(r){var o=r.originalEvent;this.sortable.nativeDraggable?T(document,"dragover",this._handleAutoScroll):this.options.supportPointer?T(document,"pointermove",this._handleFallbackAutoScroll):o.touches?T(document,"touchmove",this._handleFallbackAutoScroll):T(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(r){var o=r.originalEvent;!this.options.dragOverBubble&&!o.rootEl&&this._handleAutoScroll(o)},drop:function(){this.sortable.nativeDraggable?E(document,"dragover",this._handleAutoScroll):(E(document,"pointermove",this._handleFallbackAutoScroll),E(document,"touchmove",this._handleFallbackAutoScroll),E(document,"mousemove",this._handleFallbackAutoScroll)),Ur(),Ot(),ai()},nulling:function(){Mt=xr=et=wr=tt=hr=fr=null,D.length=0},_handleFallbackAutoScroll:function(r){this._handleAutoScroll(r,!0)},_handleAutoScroll:function(r,o){var n=this,i=(r.touches?r.touches[0]:r).clientX,a=(r.touches?r.touches[0]:r).clientY,s=document.elementFromPoint(i,a);if(Mt=r,o||this.options.forceAutoScrollFallback||pt||pe||rt){yr(r,this.options,s,o);var l=me(s,!0);wr&&(!tt||i!==hr||a!==fr)&&(tt&&Ur(),tt=setInterval(function(){var d=me(document.elementFromPoint(i,a),!0);d!==l&&(l=d,Ot()),yr(r,n.options,d,o)},10),hr=i,fr=a)}else{if(!this.options.bubbleScroll||me(s,!0)===oe()){Ot();return}yr(r,this.options,me(s,!1),!1)}}},de(t,{pluginName:"scroll",initializeByDefault:!0})}function Ot(){D.forEach(function(t){clearInterval(t.pid)}),D=[]}function Ur(){clearInterval(tt)}var yr=an(function(t,e,r,o){if(e.scroll){var n=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,a=e.scrollSensitivity,s=e.scrollSpeed,l=oe(),d=!1,p;xr!==r&&(xr=r,Ot(),et=e.scroll,p=e.scrollFn,et===!0&&(et=me(r,!0)));var c=0,y=et;do{var x=y,v=M(x),S=v.top,I=v.bottom,ie=v.left,Z=v.right,G=v.width,j=v.height,ve=void 0,Q=void 0,be=x.scrollWidth,Ne=x.scrollHeight,z=f(x),Ve=x.scrollLeft,he=x.scrollTop;x===l?(ve=G<be&&(z.overflowX==="auto"||z.overflowX==="scroll"||z.overflowX==="visible"),Q=j<Ne&&(z.overflowY==="auto"||z.overflowY==="scroll"||z.overflowY==="visible")):(ve=G<be&&(z.overflowX==="auto"||z.overflowX==="scroll"),Q=j<Ne&&(z.overflowY==="auto"||z.overflowY==="scroll"));var He=ve&&(Math.abs(Z-n)<=a&&Ve+G<be)-(Math.abs(ie-n)<=a&&!!Ve),ae=Q&&(Math.abs(I-i)<=a&&he+j<Ne)-(Math.abs(S-i)<=a&&!!he);if(!D[c])for(var xe=0;xe<=c;xe++)D[xe]||(D[xe]={});(D[c].vx!=He||D[c].vy!=ae||D[c].el!==x)&&(D[c].el=x,D[c].vx=He,D[c].vy=ae,clearInterval(D[c].pid),(He!=0||ae!=0)&&(d=!0,D[c].pid=setInterval((function(){o&&this.layer===0&&g.active._onTouchMove(Mt);var Be=D[this.layer].vy?D[this.layer].vy*s:0,fe=D[this.layer].vx?D[this.layer].vx*s:0;typeof p=="function"&&p.call(g.dragged.parentNode[W],fe,Be,t,Mt,D[this.layer].el)!=="continue"||sn(D[this.layer].el,fe,Be)}).bind({layer:c}),24))),c++}while(e.bubbleScroll&&y!==l&&(y=me(y,!1)));wr=d}},30),fn=function(e){var r=e.originalEvent,o=e.putSortable,n=e.dragEl,i=e.activeSortable,a=e.dispatchSortableEvent,s=e.hideGhostForTarget,l=e.unhideGhostForTarget;if(r){var d=o||i;s();var p=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:r,c=document.elementFromPoint(p.clientX,p.clientY);l(),d&&!d.el.contains(c)&&(a("spill"),this.onSpill({dragEl:n,putSortable:o}))}};function Tr(){}Tr.prototype={startIndex:null,dragStart:function(e){var r=e.oldDraggableIndex;this.startIndex=r},onSpill:function(e){var r=e.dragEl,o=e.putSortable;this.sortable.captureAnimationState(),o&&o.captureAnimationState();var n=Ie(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(r,n):this.sortable.el.appendChild(r),this.sortable.animateAll(),o&&o.animateAll()},drop:fn};de(Tr,{pluginName:"revertOnSpill"});function _r(){}_r.prototype={onSpill:function(e){var r=e.dragEl,o=e.putSortable,n=o||this.sortable;n.captureAnimationState(),r.parentNode&&r.parentNode.removeChild(r),n.animateAll()},drop:fn};de(_r,{pluginName:"removeOnSpill"});g.mount(new Ci);g.mount(_r,Tr);/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var w=t=>t!==void 0,yn=(t,e,r)=>e in t?t[e]:t[e]=r;const st={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};class Ti{constructor(e){this._parser=new e}toDocument(e){return this._parser.parseFromString(e,"application/xml")}getAllTextContent(e,r){return nr(e,r).join("")}}function nr(t,e){return gn(t,e,[]).join("")}function gn(t,e,r){if(t.nodeType===st.CDATA_SECTION||t.nodeType===st.TEXT)e?r.push(String(t.nodeValue).replace(/(\r\n|\r|\n)/g,"")):r.push(t.nodeValue);else{var o;for(o=t.firstChild;o;o=o.nextSibling)gn(o,e,r)}return r}function _i(t,e,r,o){for(var n=Oi(e);n;n=$i(n)){var i=n.namespaceURI||null,a=t[i];if(w(a)){var s=a[n.localName];w(s)&&s.call(o,n,r)}}}function Oi(t){let e=t.firstElementChild||t.firstChild;for(;e&&e.nodeType!==st.ELEMENT;)e=e.nextSibling;return e}function $i(t){let e=t.nextElementSibling||t.nextSibling;for(;e&&e.nodeType!==st.ELEMENT;)e=e.nextSibling;return e}function V(t,e,r){return Ai(t,e,r)}function Ai(t,e,r){var o=w(r)?r:{},n,i;for(n=0,i=t.length;n<i;++n)o[t[n]]=e;return o}function mn(t,e){return function(r,o){var n=t.call(w(e)?e:this,r,o);if(w(n)){var i=o[o.length-1];i.push(n)}}}function R(t,e,r,o,n){return o.push(t),_i(e,r,o,n),o.pop()}function h(t,e,r){return function(o,n){let i=t.call(w(r)?r:this,o,n);if(w(i)){var a=n[n.length-1],s=w(e)?e:o.localName;a[s]=i}}}function Y(t,e,r){return function(o,n){var i=t.call(w(r)?r:this,o,n);if(w(i)){var a=n[n.length-1],s=w(e)?e:o.localName,l=yn(a,s,[]);l.push(i)}}}const Li=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function Pi(t){return t.replace(Li,"")}function Ce(t){const e=/^\s*(true|1)|(false|0)\s*$/.exec(t);if(e)return w(e[1])||!1}function Le(t){return se(nr(t,!1))}function se(t){const e=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(t);if(e)return parseFloat(e[1])}function gr(t){return Rt(nr(t,!1))}function Rt(t){const e=/^\s*(\d+)\s*$/.exec(t);if(e)return parseInt(e[1],10)}function C(t){return Pi(nr(t,!1))}const Di="http://www.w3.org/1999/xlink";function Or(t){return t.getAttributeNS(Di,"href")}function Mi(t,e){return R({},aa,t,e)}function vn(t){return[se(t.getAttribute("minx")),se(t.getAttribute("miny")),se(t.getAttribute("maxx")),se(t.getAttribute("maxy"))]}function Ri(t,e){const r=vn(t),o=[se(t.getAttribute("resx")),se(t.getAttribute("resy"))];return{crs:t.getAttribute("CRS")||t.getAttribute("SRS"),extent:r,res:o}}function Ii(t,e){const r=vn(t);if(!(!w(r[0])||!w(r[1])||!w(r[2])||!w(r[3])))return r}function Ni(t,e){const r=parseFloat(t.getAttribute("min")),o=parseFloat(t.getAttribute("max"));return{min:r,max:o}}function Vi(t,e){const r=R({},sa,t,e);if(!w(r))return;const o=r.westBoundLongitude,n=r.southBoundLatitude,i=r.eastBoundLongitude,a=r.northBoundLatitude;if(!(!w(o)||!w(n)||!w(i)||!w(a)))return[o,n,i,a]}function Hi(t,e){return R({},ea,t,e)}function Bi(t,e){return R({},ta,t,e)}function Zi(t,e){return R({},ra,t,e)}function Ui(t,e){return R({},oa,t,e)}function Fi(t,e){return R({},na,t,e)}function Yi(t,e){return R([],ia,t,e)}function ji(t,e){const r=Ce(t.getAttribute("queryable"));return R({queryable:w(r)?r:!1},wn,t,e)}function zi(t,e){var r=e[e.length-1];const o=R({},wn,t,e);if(!w(o))return;let n=Ce(t.getAttribute("queryable"));w(n)||(n=r.queryable),o.queryable=w(n)?n:!1;let i=Rt(t.getAttribute("cascaded"));w(i)||(i=r.cascaded),o.cascaded=i;let a=Ce(t.getAttribute("opaque"));w(a)||(a=r.opaque),o.opaque=w(a)?a:!1;let s=Ce(t.getAttribute("noSubsets"));w(s)||(s=r.noSubsets),o.noSubsets=w(s)?s:!1;let l=se(t.getAttribute("fixedWidth"));w(l)||(l=r.fixedWidth),o.fixedWidth=l;let d=se(t.getAttribute("fixedHeight"));w(d)||(d=r.fixedHeight),o.fixedHeight=d;const p=["Style","CRS","AuthorityURL"];for(let y=0,x=p.length;y<x;y++){const v=p[y],S=r[v];if(w(S)){let I=yn(o,v,[]);I=I.concat(S),o[v]=I}}const c=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let y=0,x=c.length;y<x;y++){const v=c[y],S=o[v];if(!w(S)){const I=r[v];o[v]=I}}return o}function Xi(t,e){return{name:t.getAttribute("name"),units:t.getAttribute("units"),unitSymbol:t.getAttribute("unitSymbol"),default:t.getAttribute("default"),multipleValues:Ce(t.getAttribute("multipleValues")),nearestValue:Ce(t.getAttribute("nearestValue")),current:Ce(t.getAttribute("current")),values:C(t)}}function ue(t,e){return R({},ha,t,e)}function ki(t,e){return R({},la,t,e)}function Wi(t,e){return R({},ua,t,e)}function qi(t,e){return R({},ca,t,e)}function mr(t,e){return R({},da,t,e)}function bn(t,e){var r=ue(t,e);if(w(r)){const o=[Rt(t.getAttribute("width")),Rt(t.getAttribute("height"))];return r.size=o,r}}function Gi(t,e){var r=ue(t,e);if(w(r))return r.name=t.getAttribute("name"),r}function Ji(t,e){var r=ue(t,e);if(w(r))return r.type=t.getAttribute("type"),r}function Ki(t,e){return R({},pa,t,e)}function xn(t,e){return R([],fa,t,e)}const H=[null,"http://www.opengis.net/wms"],Qi=V(H,{Service:h(Bi),Capability:h(Hi)}),ea=V(H,{Request:h(ki),Exception:h(Yi),Layer:h(ji)}),ta=V(H,{Name:h(C),Title:h(C),Abstract:h(C),KeywordList:h(xn),OnlineResource:h(Or),ContactInformation:h(Zi),Fees:h(C),AccessConstraints:h(C),LayerLimit:h(gr),MaxWidth:h(gr),MaxHeight:h(gr)}),ra=V(H,{ContactPersonPrimary:h(Ui),ContactPosition:h(C),ContactAddress:h(Fi),ContactVoiceTelephone:h(C),ContactFacsimileTelephone:h(C),ContactElectronicMailAddress:h(C)}),oa=V(H,{ContactPerson:h(C),ContactOrganization:h(C)}),na=V(H,{AddressType:h(C),Address:h(C),City:h(C),StateOrProvince:h(C),PostCode:h(C),Country:h(C)}),ia=V(H,{Format:mn(C)}),wn=V(H,{Name:h(C),Title:h(C),Abstract:h(C),KeywordList:h(xn),CRS:Y(C),SRS:Y(C),EX_GeographicBoundingBox:h(Vi),LatLonBoundingBox:h(Ii),BoundingBox:Y(Ri),Dimension:Y(Xi),Attribution:h(Mi),AuthorityURL:Y(Gi),Identifier:Y(C),MetadataURL:Y(Ji),DataURL:Y(ue),FeatureListURL:Y(ue),Style:Y(Ki),MinScaleDenominator:h(Le),MaxScaleDenominator:h(Le),ScaleHint:h(Ni),Layer:Y(zi)}),aa=V(H,{Title:h(C),OnlineResource:h(Or),LogoURL:h(bn)}),sa=V(H,{westBoundLongitude:h(Le),eastBoundLongitude:h(Le),southBoundLatitude:h(Le),northBoundLatitude:h(Le)}),la=V(H,{GetCapabilities:h(mr),GetMap:h(mr),GetFeatureInfo:h(mr)}),da=V(H,{Format:Y(C),DCPType:Y(Wi)}),ua=V(H,{HTTP:h(qi)}),ca=V(H,{Get:h(ue),Post:h(ue)}),pa=V(H,{Name:h(C),Title:h(C),Abstract:h(C),LegendURL:Y(bn),StyleSheetURL:h(ue),StyleURL:h(ue)}),ha=V(H,{Format:h(C),OnlineResource:h(Or)}),fa=V(H,{Keyword:mn(C)});class ya{constructor(e,r){!r&&typeof window<"u"&&(r=window.DOMParser),this.version=void 0,this._parser=new Ti(r),this._data=e}data(e){return this._data=e,this}toJSON(e){return e=e||this._data,this.parse(e)}parse(e){return this.readFromDocument(this._parser.toDocument(e))}readFromDocument(e){for(let r=e.firstChild;r;r=r.nextSibling)if(r.nodeType==st.ELEMENT)return this.readFromNode(r);return null}readFromNode(e){return this.version=e.getAttribute("version"),R({version:this.version},Qi,e,[])||null}}const ga=(t,e,r,o)=>{let n=[],i=null;t._sortable=g.create(t,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{const s=a.item;n=Array.prototype.slice.call(s.parentNode.childNodes),n=n.filter(l=>l.nodeType!=Node.ELEMENT_NODE||!l.classList.contains("sortable-fallback"))},onMove(a){i=a.related},onEnd:a=>{const l=a.item.parentNode;for(const v of n)l.appendChild(v);if(a.oldIndex==a.newIndex)return;const d=e.getArray(),p=d.find(v=>v.get(r)===a.item.querySelector("eox-layercontrol-layer").layer.get(r)),c=d.find(v=>v.get(r)==i.dataset.layer);let y,x;for(y=0;y<d.length;y++)if(d[y]==p){e.removeAt(y);break}for(x=0;x<d.length;x++)if(d[x]===c){y>x?e.insertAt(x,p):e.insertAt(x+1,p);break}o.requestUpdate()}})};function ma(t,e,r){t.getArray().forEach(n=>{n.get(e)||n.set(e,n.ol_uid),n.get(r)||n.set(r,`layer ${n.ol_uid}`)})}const Sr=(t,e,r)=>{let o=[];const n=(i,a,s)=>{o=[...o,...i.filter(d=>d.get(a)===s)];const l=i.filter(d=>d.getLayers);return l.length>0&&l.forEach(d=>n(d.getLayers().getArray(),a,s)),o};return n(t,e,r),o},va=(t,e)=>{var r,o,n;if(!(!t||!e))return t.getLayers?"group":(n=(r=e.getInteractions().getArray().filter(i=>i.freehand_!==void 0).map(i=>i.source_))==null?void 0:r.ol_uid)!=null&&n.includes(t.getSource?(o=t.getSource())==null?void 0:o.ol_uid:void 0)?"draw":t.declutter_!==void 0?"vector":"raster"},Sn=(t,e)=>{const r=t.get("minZoom"),o=t.get("maxZoom");return!!(e&&(r!==-1/0||o!==1/0))},ba=(t,e,r)=>{if(!t||!e)return!1;if(!Sn(t,r))return!0;const o=t.get("minZoom"),n=t.get("maxZoom"),i=e.getView().getZoom();return i>o&&i<n};function xa(t,e){const r=new URL(t).searchParams;Object.entries(e).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{r.set(l,s[l])}):r.set(a,s)});const o=t.split("?")[0],n=r.toString();return`${o}?${n}`}function En(t,e){var o;let r={};for(const n in t){const i=t[n].type;if(i&&i!=="object")r[n]=i==="number"?Number(e[n]):e[n];else if(typeof t[n]=="object"&&((o=t[n])!=null&&o.properties)){const a=En(t[n].properties,e);Object.keys(a).length>0&&(r[n]=a)}}return r}function wa(t,e){var i;if(!t.getSource().getTileUrlFunction())return null;const r=new URL(t.getSource().getTileUrlFunction()([0,0,0])),o=Object.fromEntries(r.searchParams.entries()),n=En(((i=e.schema)==null?void 0:i.properties)||e.schema,o);return Object.keys(n).length?n:null}function Sa(t){try{return JSON.parse(Cn(t)),!!t}catch{return!1}}function Ea(t,e){e.jsonInput=t.target.value,e.requestUpdate()}function Cn(t){return t.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function Fr(t){const e=JSON.parse(`{"data":${Cn(t.jsonInput)}}`);Array.isArray(e.data)?e.data.forEach(r=>{t.eoxMap.addOrUpdateLayer(r)}):t.eoxMap.addOrUpdateLayer(e.data),t.jsonInput=null,t.requestUpdate()}function Ca(t,e){e.urlInput=t.target.value,e.requestUpdate()}function Ta(t){const r=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(t),o=$r(t);return!!(t&&r&&o)}function $r(t){const e=/\b(?:wms|ows)\b/i,r=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return e.test(t)?"TileWMS":r.test(t)?"XYZ":!1}async function _a(t){let e=new URL(t),r=e.searchParams;r.set("SERVICE","WMS"),r.set("REQUEST","GetCapabilities");let o=e.toString();const n=await fetch(o);if(n.ok){const i=await n.text();return new ya(i).toJSON()}else throw new Error(`Error: ${n.status}`)}async function Oa(t){const e=t.urlInput;if(t.wmsCapabilities=null,t.searchLoad=!0,t.requestUpdate(),!e)return!1;if($r(e)==="XYZ")return{Name:e};try{const r=await _a(e);t.wmsCapabilities=r}catch{}finally{t.searchLoad=!1,t.requestUpdate()}return!1}function $a(t,e){const{Name:r}=t,o=$r(e.urlInput)||"XYZ",n={type:"Tile",properties:{id:r,title:r},source:{type:o,url:e.urlInput,params:{LAYERS:r}}};e.jsonInput=JSON.stringify(n)}function Aa(t,e){e.open=t||null,e.urlInput=null,e.jsonInput=null,e.wmsCapabilities=null,e.requestUpdate()}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tn=Xn(class extends kn{constructor(t){if(super(t),t.type!==Te.PROPERTY&&t.type!==Te.ATTRIBUTE&&t.type!==Te.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Wn(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===yt||e===te)return e;const r=t.element,o=t.name;if(t.type===Te.PROPERTY){if(e===r[o])return yt}else if(t.type===Te.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(o))return yt}else if(t.type===Te.ATTRIBUTE&&r.getAttribute(o)===e+"")return yt;return qn(t),e}});var lt,dt,De,It,On,Nt,Vt;class _n extends ce{constructor(){super();_(this,It);_(this,lt,{});_(this,dt,null);_(this,De,void 0);_(this,Nt,"");_(this,Vt,"");this.layer=null,this.unstyled=!1,this.noShadow=!0,this.layerConfig=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return this.layerConfig?(Ue(this,dt,wa(this.layer,this.layerConfig)),m`
      <style>
        ${O(this,Nt)}
        ${!this.unstyled&&O(this,Vt)}
      </style>
      <eox-jsonform
        .schema=${this.layerConfig.schema}
        .startVals=${O(this,dt)}
        .options=${{disable_edit_json:!0,disable_collapse:!0,disable_properties:!0}}
        @change=${J(this,It,On)}
      ></eox-jsonform>
    `):""}}lt=new WeakMap,dt=new WeakMap,De=new WeakMap,It=new WeakSet,On=function(r){Ue(this,lt,r.detail),this.layer.getSource().getTileUrlFunction()&&(O(this,De)||Ue(this,De,this.layer.getSource().getTileUrlFunction()),this.layer.getSource().setTileUrlFunction((...o)=>xa(O(this,De).call(this,...o),O(this,lt))),this.layer.getSource().setKey(new Date)),this.requestUpdate()},Nt=new WeakMap,Vt=new WeakMap,P(_n,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1}});customElements.define("eox-layercontrol-layerconfig",_n);var Ht,Bt;class $n extends ce{constructor(){super();_(this,Ht,`
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
  `);_(this,Bt,`
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
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!0}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return m`
      <style>
        ${O(this,Ht)}
        ${!this.unstyled&&O(this,Bt)}
      </style>
      <div class="tabbed">
        ${re(this.actions.length+this.tabs.length>1,()=>m`
            <nav>
              <div>
                ${St(this.tabs,(r,o)=>m`
                    <label
                      class=${this.selectedTab===o&&"highlighted"}
                      @click=${()=>this.selectedTab=o}
                    >
                      <slot name=${r+"-icon"}>${r}</slot>
                    </label>
                  `)}
              </div>
              <div>
                ${St(this.actions,r=>m`
                    <span>
                      <slot name=${r+"-icon"}>${r}</slot>
                    </span>
                  `)}
              </div>
            </nav>
          `)}
        <figure>
          ${St(this.tabs,(r,o)=>m`
              <div class="tab ${this.selectedTab===o&&"highlighted"}">
                <slot name=${r+"-content"}>${r}</slot>
              </div>
            `)}
        </figure>
      </div>
    `}}Ht=new WeakMap,Bt=new WeakMap,P($n,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-tabs",$n);var Zt,Ut;class An extends ce{constructor(){super();P(this,"_parseActions",r=>r==null?void 0:r.filter(o=>["remove","sort"].filter(n=>{var i;return(i=this.layer)!=null&&i.get("layerControlDisable")?n!=="sort":!0}).includes(o)));P(this,"_parseTools",r=>r==null?void 0:r.filter(o=>{let n=!0;return["remove","sort"].includes(o)&&(n=!1),o==="info"&&(n=this.layer.get("description")),o==="config"&&(n=this.layer.get("layerConfig")),n}));P(this,"_removeButton",m`
    <button
      class="remove-icon icon"
      @click=${()=>{var r,o;(r=this.layer)==null||r.set("layerControlOptional",!0),(o=this.layer)==null||o.setVisible(!1),this.dispatchEvent(new CustomEvent("changed",{detail:this.layer,bubbles:!0}))}}
    >
      ${this.unstyled?"x":te}
    </button>
  `);P(this,"_sortButton",m`
    <button class="sort-icon icon drag-handle">
      ${this.unstyled?"sort":te}
    </button>
  `);_(this,Zt,"");_(this,Ut,`
    ${Gn}  
    ${Jn}
    ${Qo}
    ${Kn}
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
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!0}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var r,o;return m`
      <style>
        ${O(this,Zt)}
        ${!this.unstyled&&O(this,Ut)}
      </style>
      ${re(((r=this._parseActions(this.tools))==null?void 0:r.length)+((o=this._parseTools(this.tools))==null?void 0:o.length)>0,()=>{var n,i;return m`
          ${re(((n=this._parseActions(this.tools))==null?void 0:n.length)===1&&((i=this._parseTools(this.tools))==null?void 0:i.length)===0,()=>m`
              <div class="single-action-container">
                <div class="single-action">
                  ${this[`_${this._parseActions(this.tools)[0]}Button`]}
                </div>
              </div>
            `,()=>{var a;return m`
              <details
                class="tools"
                open=${this.layer.get("layerControlToolsExpand")||te}
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
                  ${St(this._parseTools(this.tools),s=>m`
                      <button slot="${s}-icon" class="icon">
                        ${this.unstyled?s:te}
                      </button>
                    `)}

                  <div slot="info-content">
                    ${Yn(this.layer.get("description"))}
                  </div>
                  <div slot="opacity-content">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value=${Tn((a=this.layer)==null?void 0:a.getOpacity())}
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
    `}}Zt=new WeakMap,Ut=new WeakMap,P(An,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer-tools",An);var Ft,Yt;class Ln extends ce{constructor(){super();P(this,"currLayerVisibilityBasedOnZoom",!0);_(this,Ft,"");_(this,Yt,`
    ${Qo}
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
  `);this.layer=null,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!0}updateLayerZoomVisibility(){const r=ba(this.layer,this.map,this.showLayerZoomState);let o=!1;!r&&this.currLayerVisibilityBasedOnZoom?(this.currLayerVisibilityBasedOnZoom=!1,o=!0):r&&!this.currLayerVisibilityBasedOnZoom&&(this.currLayerVisibilityBasedOnZoom=!0,o=!0),o&&(this.requestUpdate(),this.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))}firstUpdated(){Sn(this.layer,this.showLayerZoomState)&&(this.updateLayerZoomVisibility(),this.map.getView().on("change:resolution",()=>this.updateLayerZoomVisibility()))}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return m`
      <style>
        ${O(this,Ft)}
        ${!this.unstyled&&O(this,Yt)}
      </style>
      ${re(this.layer,()=>{var r;return m`
          <div
            class="layer ${this.layer.getVisible()?"visible":""} 
            ${this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible"}"
          >
            <label
              class="${this.layer.get("layerControlDisable")?"disabled":""}"
            >
              <input
                type=${this.layer.get("layerControlExclusive")?"radio":"checkbox"}
                .checked=${Tn(this.layer.getVisible())}
                @click=${o=>{this.layer.setVisible(o.target.checked),o.target.checked&&this.layer.get("layerControlExclusive")&&this.parentNode.parentNode.querySelectorAll("li > eox-layercontrol-layer").forEach(i=>{var a;i.layer!==this.layer&&((a=i.layer)!=null&&a.get("layerControlExclusive"))&&(i.layer.setVisible(!1),i.requestUpdate())}),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),this.requestUpdate()}}
              />
              <span class="title">${this.layer.get(this.titleProperty)}</span>
              ${re(((r=this.tools)==null?void 0:r.length)>0,()=>m`<span class="tools-placeholder"></span>`)}
            </label>
          </div>
          <eox-layercontrol-layer-tools
            .noShadow=${!0}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-layer-tools>
        `})}
    `}}Ft=new WeakMap,Yt=new WeakMap,P(Ln,"properties",{layer:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer",Ln);var jt,zt;class Pn extends ce{constructor(){super();_(this,jt,"");_(this,zt,`
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
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!0}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return m`
      <style>
        ${O(this,jt)}
        ${!this.unstyled&&O(this,zt)}
      </style>
      ${re(this.group,()=>m`
          <details open=${this.group.get("layerControlExpand")||te}>
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
    `}}jt=new WeakMap,zt=new WeakMap,P(Pn,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer-group",Pn);var ut,Xt,kt,Wt;class Dn extends ce{constructor(){super();_(this,ut,()=>{O(this,Xt).call(this)});_(this,Xt,jn(()=>{this.requestUpdate(),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50));_(this,kt,"");_(this,Wt,`
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
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!0}firstUpdated(){this.layers&&(ma(this.layers,this.idProperty,this.titleProperty),ga(this.renderRoot.querySelector("ul"),this.layers,this.idProperty,this))}updated(){var r;this.layers&&(this.layers.hasListener("change:length")&&((r=this.layers)==null||r.un("change:length",O(this,ut))),this.layers.on("change:length",O(this,ut)))}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return m`
      <style>
        ${O(this,kt)}
        ${!this.unstyled&&O(this,Wt)}
      </style>
      <ul>
        ${re(this.layers,()=>m`
            ${zn(this.layers.getArray().filter(r=>!r.get("layerControlHide")&&!r.get("layerControlOptional")).reverse(),r=>r,r=>m`
                <li
                  data-layer="${r.get(this.idProperty)}"
                  data-type="${va(r,this.map)}"
                >
                  ${r.getLayers?m`
                          <eox-layercontrol-layer-group
                            .noShadow=${!0}
                            .group=${r}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:m`
                          <eox-layercontrol-layer
                            .noShadow=${!0}
                            .layer=${r}
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
    `}}ut=new WeakMap,Xt=new WeakMap,kt=new WeakMap,Wt=new WeakMap,P(Dn,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-layer-list",Dn);class Mn extends ce{constructor(){super(),this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!0}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return m`
      <label for="optional">Optional layers</label>

      <select name="optional" data-cy="optionalLayers">
        <option disabled selected value>
          -- select an optional layer to add --
        </option>
        ${Sr(this.layers.getArray(),"layerControlOptional",!0).map(e=>m`
            <option
              value="${e.get(this.idProperty)||e.ol_uid}"
            >
              ${e.get(this.titleProperty)||`layer ${e.get(this.idProperty)}`}
            </option>
          `)}
      </select>
      <button
        @click="${()=>{const e=Sr(this.layers.getArray(),"layerControlOptional",!0).find(r=>(r.get(this.idProperty)||r.ol_uid)===this.querySelector("select[name=optional]").value);e==null||e.set("layerControlOptional",!1),e==null||e.setVisible(!0),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),this.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(r=>r.requestUpdate()),this.requestUpdate()}}"
      >
        add
      </button>
    `}}P(Mn,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Mn);var qt,In,Gt,Nn,ct,Er,Jt,Vn,Kt,Hn,Me,$t,Qt,er;class Rn extends ce{constructor(){super();_(this,qt);_(this,Gt);_(this,ct);_(this,Jt);_(this,Kt);_(this,Me);P(this,"urlInput",null);P(this,"open",null);P(this,"jsonInput",null);P(this,"searchLoad",!1);P(this,"wmsCapabilities",null);_(this,Qt,"");_(this,er,`
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
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!0}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const r=this.open?"open":"close",o=this.open==="url",n=this.open==="json";return m`
      <style>
        ${O(this,Qt)}
        ${!this.unstyled&&O(this,er)}
      </style>
      <div class="eox-add-layer-main">
        <div class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <ul class="eox-add-layer-tab ${r}">
            <li
              @click=${()=>J(this,Me,$t).call(this,"url")}
              class="${o?"active":""}"
            >
              URL
            </li>
            <li
              @click=${()=>J(this,Me,$t).call(this,"json")}
              class="${n?"active":""}"
            >
              JSON
            </li>
          </ul>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon icon"
            @click=${()=>J(this,Me,$t).call(this,this.open?null:"url")}
          ></button>
        </div>
        <div class="eox-add ${r}">
          ${o?m`

            <!-- Input field for URL -->
            <div class="eox-add-layer-col">
              <input type="text" class="add-url" placeholder="Add URL (WMS/XYZ)" .value="${this.urlInput}" @input=${J(this,qt,In)}></input>

              <!-- Search button for URL -->
              <button class="search-icon" disabled=${!Ta(this.urlInput)||this.searchLoad?!0:te} @click=${J(this,Gt,Nn)}></button>
            </div>

            <!-- Display layers for WMS capabilities -->
            ${this.wmsCapabilities?m`<ul class="search-lists">
                    ${this.wmsCapabilities.Capability.Layer.Layer.map(i=>m`
                        <li class="search-list">
                          ${i.Name}
                          <!-- Button to add layer -->
                          <button
                            class="add-layer-icon icon"
                            @click=${()=>J(this,ct,Er).call(this,i)}
                          ></button>
                        </li>
                      `)}
                  </ul>`:te}
            `:m`
                <!-- Textarea for JSON input -->
                <textarea
                  class="add-layer-input"
                  placeholder="Please put a valid eox-map layer JSON."
                  @input=${J(this,Kt,Hn)}
                  .value=${this.jsonInput}
                ></textarea>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer"
                  disabled=${Sa(this.jsonInput)?te:!0}
                  @click=${J(this,Jt,Vn)}
                ></button>
              `}
        </div>
      </div>
    `}}qt=new WeakSet,In=function(r){Ca(r,this)},Gt=new WeakSet,Nn=async function(){const r=await Oa(this);r&&J(this,ct,Er).call(this,r)},ct=new WeakSet,Er=function(r){$a(r,this),Fr(this)},Jt=new WeakSet,Vn=function(){Fr(this)},Kt=new WeakSet,Hn=function(r){Ea(r,this)},Me=new WeakSet,$t=function(r){Aa(r,this)},Qt=new WeakMap,er=new WeakMap,P(Rn,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",Rn);var Re,tr,rr;class Bn extends ce{constructor(){super();_(this,Re,void 0);_(this,tr,"");_(this,rr,`
    * {
      font-family: Roboto, sans-serif;
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride=""}updated(){const r=document.querySelector(this.for);r&&(r==null?void 0:r.map)!==this.map&&(this.map=r.map)}firstUpdated(){const r=document.querySelector(this.for);Ue(this,Re,r)}render(){var r,o;return m`
      <style>
        ${O(this,tr)}
        ${!this.unstyled&&O(this,rr)}
        ${this.styleOverride}
      </style>
      ${this.addExternalLayers?re((r=O(this,Re))==null?void 0:r.addOrUpdateLayer,()=>m`<eox-layercontrol-add-layers
              .noShadow=${!0}
              .eoxMap=${O(this,Re)}
              .unstyled=${this.unstyled}
            ></eox-layercontrol-add-layers>`):te}
      ${re(this.map,()=>m`
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
            @changed=${n=>{if(this.requestUpdate(),n.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const i=this.renderRoot.querySelector("eox-layercontrol-optional-list");i==null||i.requestUpdate()}}}
          ></eox-layercontrol-layer-list>
        `)}
      ${re(this.map&&((o=Sr(this.map.getLayers().getArray(),"layerControlOptional",!0))==null?void 0:o.length)>0,()=>m`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}Re=new WeakMap,tr=new WeakMap,rr=new WeakMap,P(Bn,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String}});customElements.define("eox-layercontrol",Bn);const Ar=m` <eox-map
  style="width: 400px; height: 300px; margin-left: 7px;"
  .zoom=${3}
  .layers=${[{type:"Group",properties:{id:"group2",title:"Data Layers",layerControlExpand:!0,description:"# Hello world"},layers:[{type:"Tile",properties:{id:"WIND",title:"WIND"},source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}},{type:"Tile",properties:{id:"NO2",title:"NO2"},source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_NO2-VISUALISATION"}}},{type:"Vector",properties:{title:"Regions",id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"}}]},{type:"Group",properties:{id:"group1",title:"Background Layers"},layers:[{type:"WebGLTile",properties:{id:"s2",layerControlExclusive:!0,title:"s2"},style:{variables:{red:1,green:2,blue:3,redMax:3e3,greenMax:3e3,blueMax:3e3},color:["array",["/",["band",["var","red"]],["var","redMax"]],["/",["band",["var","green"]],["var","greenMax"]],["/",["band",["var","blue"]],["var","blueMax"]],1],gamma:1.1},source:{type:"GeoTIFF",normalize:!1,sources:[{url:"https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif"}]}},{type:"Tile",properties:{id:"osm",title:"Open Street Map",layerControlExclusive:!0},visible:!1,opacity:.5,source:{type:"OSM"}}]}]}
></eox-map>`,Wa={title:"Elements/eox-layercontrol",tags:["autodocs"],component:"eox-layercontrol",parameters:{componentSubtitle:"Manage and configure OpenLayers map layers",layout:"centered"}},Fe={args:{idProperty:"id",titleProperty:"title",unstyled:!1},render:t=>m`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${t.idProperty}
        .titleProperty=${t.titleProperty}
        .unstyled=${t.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      ${Ar}
    </div>
  `},Ye={args:{},render:()=>m`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#exclusive"></eox-layercontrol>
      <eox-map
        id="exclusive"
        style="width: 400px; height: 300px; margin-left: 7px;"
        .layers=${[{type:"Tile",properties:{title:"Terrain Light",layerControlExclusive:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}},{type:"Tile",properties:{title:"EOxCloudless",layerControlExclusive:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1}]}
      >
      </eox-map>
    </div>
  `},je={args:{},render:()=>m`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#optional"></eox-layercontrol>
      <eox-map
        id="optional"
        style="width: 400px; height: 300px; margin-left: 7px;"
        .layers=${[{type:"Tile",properties:{title:"EOxCloudless 2021",layerControlOptional:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1},{type:"Tile",properties:{title:"EOxCloudless 2020",layerControlOptional:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1},{type:"Tile",properties:{title:"EOxCloudless 2019",layerControlOptional:!0},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2019_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1},{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}}]}
      >
      </eox-map>
    </div>
  `},ze={args:{},render:()=>m`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#expanded"></eox-layercontrol>
      <eox-map
        id="expanded"
        style="width: 400px; height: 300px; margin-left: 7px;"
        .layers=${[{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}},{type:"Group",properties:{title:"Layer group",layerControlExpand:!0},layers:[{type:"Tile",properties:{title:"EOxCloudless"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2021_3857/default/g/{z}/{y}/{x}.jpg"},visible:!1}]}]}
      >
      </eox-map>
    </div>
  `},Xe={args:{},render:()=>m`
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
      .layers=${[{type:"Vector",properties:{title:"Regions",id:"regions",description:"Ecological regions of the earth."},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"}},{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}}]}
    >
    </eox-map>
  `},ke={args:{},render:()=>m`
    <eox-layercontrol
      .tools=${["config"]}
      for="eox-map#config"
    ></eox-layercontrol>
    <hr />
    <eox-map
      .center=${[-7e6,-5e5]}
      .zoom=${4}
      id="config"
      style="width: 400px; height: 300px;"
      .layers=${[{type:"Tile",properties:{id:"customId",title:"Tile XYZ",layerControlToolsExpand:!0,layerConfig:{schema:{type:"object",properties:{vminmax:{type:"object",properties:{vmin:{type:"number",minimum:0,maximum:10,format:"range"},vmax:{type:"number",minimum:0,maximum:10,format:"range"}},format:"minmax"},cbar:{type:"string",enum:["rain","temperature"]}}}}},source:{type:"XYZ",url:"https://reccap2.api.dev.brockmann-consult.de/api/tiles/cop28~reccap2-9x108x139-0.0.1.zarr/deforested_biomass/{z}/{y}/{x}?crs=EPSG:3857&time=2018-01-01T00:00:00Z&vmin=0&vmax=3&cbar=rain"}},{type:"Tile",source:{type:"OSM"},properties:{title:"Base Map"}}]}
    >
    </eox-map>
  `},We={args:{},render:()=>m`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#hidden"></eox-layercontrol>
      <eox-map
        id="hidden"
        style="width: 400px; height: 300px; margin-left: 7px;"
        .layers=${[{type:"Vector",properties:{title:"Regions",id:"regions",layerControlHide:!0},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"}},{type:"Tile",properties:{title:"Terrain Light"},source:{type:"XYZ",url:"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg"}}]}
      >
      </eox-map>
    </div>
  `};var Yr;const xt={args:{idProperty:"id",titleProperty:"title",unstyled:!1,noShadow:!1},render:t=>m(Yr||(Yr=ar([`
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
        .layers=`,`
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
  `])),t.noShadow,t.idProperty,t.titleProperty,t.unstyled,[{type:"Tile",properties:{id:"osm",title:"Open Street Map"},visible:!0,opacity:.5,source:{type:"OSM"}}])};var jr;const wt={args:{unstyled:!1,noShadow:!1},render:t=>m(jr||(jr=ar([`
    <div style="display: flex">
      <eox-layercontrol-layer-list
        .noShadow=`,`
        .unstyled=`,`
      ></eox-layercontrol-layer-list>
      <eox-map
        id="list"
        style="width: 400px; height: 300px;"
        .layers=`,`
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
  `])),t.noShadow,t.unstyled,[{type:"Tile",opacity:.5,visible:!1,properties:{id:"wind",title:"WIND"},source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}}},{type:"Tile",properties:{id:"osm",title:"Open Street Map"},visible:!0,source:{type:"OSM"}},{type:"Tile",properties:{id:"osm2",title:"Another OSM"},visible:!0,source:{type:"OSM"}}])},qe={render:()=>m`
    <eox-layercontrol-tabs
      .noShadow=${!1}
      .actions=${["delete"]}
      .tabs=${["info","opacity","config"]}
    ></eox-layercontrol-tabs>
  `},Ge={args:{idProperty:"id",titleProperty:"title",unstyled:!1,addExternalLayers:!0},render:t=>m`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${t.idProperty}
        .titleProperty=${t.titleProperty}
        .unstyled=${t.unstyled}
        .addExternalLayers=${t.addExternalLayers}
        for="eox-map"
      ></eox-layercontrol>
      ${Ar}
    </div>
  `},Je={args:{showLayerZoomState:!0},render:t=>m`
    <div style="display: flex">
      <eox-layercontrol
        .showLayerZoomState=${t.showLayerZoomState}
        for="eox-map#zoomstate"
      ></eox-layercontrol>
      <eox-map
        id="zoomstate"
        style="width: 600px; height: 300px; margin-left: 7px;"
        .zoom=${1}
        .layers=${[{type:"Vector",properties:{title:"Regions",id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},minZoom:2},{type:"Tile",properties:{id:"WIND",title:"WIND"},source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_VIS_WIND_V_10M"}},maxZoom:9}]}
      >
      </eox-map>
    </div>
  `},Ke={args:{unstyled:!0},render:t=>m`
    <div style="display: flex">
      <eox-layercontrol
        .unstyled=${t.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      ${Ar}
    </div>
  `};var zr,Xr,kr,Wr,qr;Fe.parameters={...Fe.parameters,docs:{...(zr=Fe.parameters)==null?void 0:zr.docs,source:{originalSource:`{
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
}`,...(kr=(Xr=Fe.parameters)==null?void 0:Xr.docs)==null?void 0:kr.source},description:{story:"Basic layercontrol setup.",...(qr=(Wr=Fe.parameters)==null?void 0:Wr.docs)==null?void 0:qr.description}}};var Gr,Jr,Kr,Qr,eo;Ye.parameters={...Ye.parameters,docs:{...(Gr=Ye.parameters)==null?void 0:Gr.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#exclusive"></eox-layercontrol>
      <eox-map
        id="exclusive"
        style="width: 400px; height: 300px; margin-left: 7px;"
        .layers=\${[{
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
  }]}
      >
      </eox-map>
    </div>
  \`
}`,...(Kr=(Jr=Ye.parameters)==null?void 0:Jr.docs)==null?void 0:Kr.source},description:{story:"By adding the `layerControlExclusive` property to map layers,\nonly one of them at a time can be visualized.",...(eo=(Qr=Ye.parameters)==null?void 0:Qr.docs)==null?void 0:eo.description}}};var to,ro,oo,no,io;je.parameters={...je.parameters,docs:{...(to=je.parameters)==null?void 0:to.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#optional"></eox-layercontrol>
      <eox-map
        id="optional"
        style="width: 400px; height: 300px; margin-left: 7px;"
        .layers=\${[{
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
  }]}
      >
      </eox-map>
    </div>
  \`
}`,...(oo=(ro=je.parameters)==null?void 0:ro.docs)==null?void 0:oo.source},description:{story:`By adding the \`layerControlOptional\` property to map layers,
they are not initially rendered in the layer list, but in a
selection interface. They can be added to the layer list manually.
Removing a layer puts it back into the optional list.`,...(io=(no=je.parameters)==null?void 0:no.docs)==null?void 0:io.description}}};var ao,so,lo,uo,co;ze.parameters={...ze.parameters,docs:{...(ao=ze.parameters)==null?void 0:ao.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#expanded"></eox-layercontrol>
      <eox-map
        id="expanded"
        style="width: 400px; height: 300px; margin-left: 7px;"
        .layers=\${[{
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
  }]}
      >
      </eox-map>
    </div>
  \`
}`,...(lo=(so=ze.parameters)==null?void 0:so.docs)==null?void 0:lo.source},description:{story:"By adding the `layerControlExpand` property to map layers,\nthey render in the layer control as opened.",...(co=(uo=ze.parameters)==null?void 0:uo.docs)==null?void 0:co.description}}};var po,ho,fo,yo,go;Xe.parameters={...Xe.parameters,docs:{...(po=Xe.parameters)==null?void 0:po.docs,source:{originalSource:`{
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
      .layers=\${[{
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
  }]}
    >
    </eox-map>
  \`
}`,...(fo=(ho=Xe.parameters)==null?void 0:ho.docs)==null?void 0:fo.source},description:{story:`The layer control accepts a "tools" array, which enable
extra functionalities for layers`,...(go=(yo=Xe.parameters)==null?void 0:yo.docs)==null?void 0:go.description}}};var mo,vo,bo,xo,wo;ke.parameters={...ke.parameters,docs:{...(mo=ke.parameters)==null?void 0:mo.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
    <eox-layercontrol
      .tools=\${["config"]}
      for="eox-map#config"
    ></eox-layercontrol>
    <hr />
    <eox-map
      .center=\${[-7000000, -500000]}
      .zoom=\${4}
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
}`,...(bo=(vo=ke.parameters)==null?void 0:vo.docs)==null?void 0:bo.source},description:{story:`The "config" tool reads settings passed via the "layerConfig" property,
e.g. rendering a from from a provided JSON schema that allows updating the
source url parameters.`,...(wo=(xo=ke.parameters)==null?void 0:xo.docs)==null?void 0:wo.description}}};var So,Eo,Co,To,_o;We.parameters={...We.parameters,docs:{...(So=We.parameters)==null?void 0:So.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#hidden"></eox-layercontrol>
      <eox-map
        id="hidden"
        style="width: 400px; height: 300px; margin-left: 7px;"
        .layers=\${[{
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
  }]}
      >
      </eox-map>
    </div>
  \`
}`,...(Co=(Eo=We.parameters)==null?void 0:Eo.docs)==null?void 0:Co.source},description:{story:"By adding the `layerControlHide` property to map layers,\nthey aren't displayed in the layer control at all (but may\nbe still rendered on the map).",...(_o=(To=We.parameters)==null?void 0:To.docs)==null?void 0:_o.description}}};var Oo,$o,Ao;xt.parameters={...xt.parameters,docs:{...(Oo=xt.parameters)==null?void 0:Oo.docs,source:{originalSource:`{
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
        .layers=\${[{
    type: "Tile",
    properties: {
      id: "osm",
      title: "Open Street Map"
    },
    visible: true,
    opacity: 0.5,
    source: {
      type: "OSM"
    }
  }]}
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
}`,...(Ao=($o=xt.parameters)==null?void 0:$o.docs)==null?void 0:Ao.source}}};var Lo,Po,Do;wt.parameters={...wt.parameters,docs:{...(Lo=wt.parameters)==null?void 0:Lo.docs,source:{originalSource:`{
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
        .layers=\${[{
    type: "Tile",
    opacity: 0.5,
    visible: false,
    properties: {
      id: "wind",
      title: "WIND"
    },
    source: {
      type: "TileWMS",
      url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
      params: {
        LAYERS: "AWS_VIS_WIND_V_10M"
      }
    }
  }, {
    type: "Tile",
    properties: {
      id: "osm",
      title: "Open Street Map"
    },
    visible: true,
    source: {
      type: "OSM"
    }
  }, {
    type: "Tile",
    properties: {
      id: "osm2",
      title: "Another OSM"
    },
    visible: true,
    source: {
      type: "OSM"
    }
  }]}
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
}`,...(Do=(Po=wt.parameters)==null?void 0:Po.docs)==null?void 0:Do.source}}};var Mo,Ro,Io,No,Vo;qe.parameters={...qe.parameters,docs:{...(Mo=qe.parameters)==null?void 0:Mo.docs,source:{originalSource:`{
  render: () => html\`
    <eox-layercontrol-tabs
      .noShadow=\${false}
      .actions=\${["delete"]}
      .tabs=\${["info", "opacity", "config"]}
    ></eox-layercontrol-tabs>
  \`
}`,...(Io=(Ro=qe.parameters)==null?void 0:Ro.docs)==null?void 0:Io.source},description:{story:"Layer control tabs",...(Vo=(No=qe.parameters)==null?void 0:No.docs)==null?void 0:Vo.description}}};var Ho,Bo,Zo,Uo,Fo;Ge.parameters={...Ge.parameters,docs:{...(Ho=Ge.parameters)==null?void 0:Ho.docs,source:{originalSource:`{
  args: {
    idProperty: "id",
    titleProperty: "title",
    unstyled: false,
    addExternalLayers: true
  },
  render: args => html\`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=\${args.idProperty}
        .titleProperty=\${args.titleProperty}
        .unstyled=\${args.unstyled}
        .addExternalLayers=\${args.addExternalLayers}
        for="eox-map"
      ></eox-layercontrol>
      \${map}
    </div>
  \`
}`,...(Zo=(Bo=Ge.parameters)==null?void 0:Bo.docs)==null?void 0:Zo.source},description:{story:"Defining the configuration for adding an external layer like WMS/XYZ or import JSON.",...(Fo=(Uo=Ge.parameters)==null?void 0:Uo.docs)==null?void 0:Fo.description}}};var Yo,jo,zo,Xo,ko;Je.parameters={...Je.parameters,docs:{...(Yo=Je.parameters)==null?void 0:Yo.docs,source:{originalSource:`{
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
        .zoom=\${1}
        .layers=\${[{
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
  }]}
      >
      </eox-map>
    </div>
  \`
}`,...(zo=(jo=Je.parameters)==null?void 0:jo.docs)==null?void 0:zo.source},description:{story:"Zoom layer state based on `minZoom` and `maxZoom`.\nThe color change state only visible when `showLayerZoomState` is set inside layer properties.",...(ko=(Xo=Je.parameters)==null?void 0:Xo.docs)==null?void 0:ko.description}}};var Wo,qo,Go,Jo,Ko;Ke.parameters={...Ke.parameters,docs:{...(Wo=Ke.parameters)==null?void 0:Wo.docs,source:{originalSource:`{
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
}`,...(Go=(qo=Ke.parameters)==null?void 0:qo.docs)==null?void 0:Go.source},description:{story:"Unstyled version of the Element",...(Ko=(Jo=Ke.parameters)==null?void 0:Jo.docs)==null?void 0:Ko.description}}};const qa=["Primary","ExclusiveLayers","OptionalLayers","ExpandedLayers","Tools","LayerConfig","HiddenLayers","SingleLayer","LayerList","Tabs","AddExternalLayer","LayerZoomState","Unstyled"];export{Ge as AddExternalLayer,Ye as ExclusiveLayers,ze as ExpandedLayers,We as HiddenLayers,ke as LayerConfig,wt as LayerList,Je as LayerZoomState,je as OptionalLayers,Fe as Primary,xt as SingleLayer,qe as Tabs,Xe as Tools,Ke as Unstyled,qa as __namedExportsOrder,Wa as default};
