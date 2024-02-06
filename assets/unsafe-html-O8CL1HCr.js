import{T as s,w as n}from"./lit-element-uhisBW42.js";import{i as c,t as u,e as a}from"./directive-xgBC_cM0.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function l(e,t,i){return e?t(e):i==null?void 0:i(e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*d(e,t){if(e!==void 0){let i=0;for(const o of e)yield t(o,i++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class r extends c{constructor(t){if(super(t),this.it=s,t.type!==u.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===s||t==null)return this._t=void 0,this.it=t;if(t===n)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}r.directiveName="unsafeHTML",r.resultType=1;const p=a(r);export{p as a,l as n,d as o};
