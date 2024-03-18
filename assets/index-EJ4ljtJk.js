import{w as N}from"./lit-element-uhisBW42.js";import{e as W,i as B,t as D}from"./when-fh6s5Pmf.js";import{p as R,v,r as T,h as k,m as G}from"./directive-helpers-qkjFCehB.js";import{c as I,g as H}from"./_commonjsHelpers-4gQjN7DL.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=(e,n,s)=>{const d=new Map;for(let t=n;t<=s;t++)d.set(e[t],t);return d},ce=W(class extends B{constructor(e){if(super(e),e.type!==D.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,n,s){let d;s===void 0?s=n:n!==void 0&&(d=n);const t=[],l=[];let o=0;for(const f of e)t[o]=d?d(f,o):o,l[o]=s(f,o),o++;return{values:l,keys:t}}render(e,n,s){return this.dt(e,n,s).values}update(e,[n,s,d]){const t=R(e),{values:l,keys:o}=this.dt(n,s,d);if(!Array.isArray(t))return this.ut=o,l;const f=this.ut??(this.ut=[]),c=[];let p,j,r=0,a=t.length-1,i=0,m=l.length-1;for(;r<=a&&i<=m;)if(t[r]===null)r++;else if(t[a]===null)a--;else if(f[r]===o[i])c[i]=v(t[r],l[i]),r++,i++;else if(f[a]===o[m])c[m]=v(t[a],l[m]),a--,m--;else if(f[r]===o[m])c[m]=v(t[r],l[m]),T(e,c[m+1],t[r]),r++,m--;else if(f[a]===o[i])c[i]=v(t[a],l[i]),T(e,t[r],t[a]),a--,i++;else if(p===void 0&&(p=L(o,i,m),j=L(f,r,a)),p.has(f[r]))if(p.has(f[a])){const b=j.get(o[i]),h=b!==void 0?t[b]:null;if(h===null){const y=T(e,t[r]);v(y,l[i]),c[i]=y}else c[i]=v(h,l[i]),T(e,t[r],h),t[b]=null;i++}else k(t[a]),a--;else k(t[r]),r++;for(;i<=m;){const b=T(e,c[m+1]);v(b,l[i]),c[i++]=b}for(;r<=a;){const b=t[r++];b!==null&&k(b)}return this.ut=o,G(e,c),N}});var P="Expected a function",A=NaN,w="[object Symbol]",U=/^\s+|\s+$/g,X=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,z=/^0o[0-7]+$/i,J=parseInt,K=typeof I=="object"&&I&&I.Object===Object&&I,Q=typeof self=="object"&&self&&self.Object===Object&&self,V=K||Q||Function("return this")(),Y=Object.prototype,Z=Y.toString,ee=Math.max,te=Math.min,E=function(){return V.Date.now()};function ne(e,n,s){var d,t,l,o,f,c,p=0,j=!1,r=!1,a=!0;if(typeof e!="function")throw new TypeError(P);n=M(n)||0,S(s)&&(j=!!s.leading,r="maxWait"in s,l=r?ee(M(s.maxWait)||0,n):l,a="trailing"in s?!!s.trailing:a);function i(u){var g=d,x=t;return d=t=void 0,p=u,o=e.apply(x,g),o}function m(u){return p=u,f=setTimeout(y,n),j?i(u):o}function b(u){var g=u-c,x=u-p,C=n-g;return r?te(C,l-x):C}function h(u){var g=u-c,x=u-p;return c===void 0||g>=n||g<0||r&&x>=l}function y(){var u=E();if(h(u))return $(u);f=setTimeout(y,b(u))}function $(u){return f=void 0,a&&d?i(u):(d=t=void 0,o)}function _(){f!==void 0&&clearTimeout(f),p=0,d=c=t=f=void 0}function F(){return f===void 0?o:$(E())}function O(){var u=E(),g=h(u);if(d=arguments,t=this,c=u,g){if(f===void 0)return m(c);if(r)return f=setTimeout(y,n),i(c)}return f===void 0&&(f=setTimeout(y,n)),o}return O.cancel=_,O.flush=F,O}function S(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function re(e){return!!e&&typeof e=="object"}function ie(e){return typeof e=="symbol"||re(e)&&Z.call(e)==w}function M(e){if(typeof e=="number")return e;if(ie(e))return A;if(S(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=S(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(U,"");var s=q.test(e);return s||z.test(e)?J(e.slice(2),s?2:8):X.test(e)?A:+e}var oe=ne;const le=H(oe);export{le as _,ce as c};