import{A as d,T as v,x as m}from"./lit-element-c29cbb6b.js";import{e as y,i as g,t as w}from"./directive-12249aa5.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*S(i,t){if(i!==void 0){let e=0;for(const s of i)yield t(s,e++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let c=class extends g{constructor(t){if(super(t),this.et=d,t.type!==w.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===d||t==null)return this.ft=void 0,this.et=t;if(t===v)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}};c.directiveName="unsafeHTML",c.resultType=1;const E=y(c);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=Symbol.for(""),T=i=>{if((i==null?void 0:i.r)===p)return i==null?void 0:i._$litStatic$},H=i=>({_$litStatic$:i,r:p}),$=new Map,b=i=>(t,...e)=>{const s=e.length;let u,r;const n=[],a=[];let l,o=0,f=!1;for(;o<s;){for(l=t[o];o<s&&(r=e[o],(u=T(r))!==void 0);)l+=u+t[++o],f=!0;o!==s&&a.push(r),n.push(l),o++}if(o===s&&n.push(t[s]),f){const h=n.join("$$lit$$");(t=$.get(h))===void 0&&(n.raw=n,$.set(h,t=n)),e=a}return i(t,...e)},L=b(m);export{H as a,E as b,L as n,S as o};
//# sourceMappingURL=static-7c848839.js.map
