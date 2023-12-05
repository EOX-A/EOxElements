import{T as s,w as n}from"./lit-element-Qm8PRmVu.js";import{i as c,t as u,e as a}from"./directive-xgBC_cM0.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function l(i,t,e){return i?t(i):e==null?void 0:e(i)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*d(i,t){if(i!==void 0){let e=0;for(const o of i)yield t(o,e++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class r extends c{constructor(t){if(super(t),this.et=s,t.type!==u.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===s||t==null)return this.vt=void 0,this.et=t;if(t===n)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}r.directiveName="unsafeHTML",r.resultType=1;const v=a(r);export{v as a,l as n,d as o};
