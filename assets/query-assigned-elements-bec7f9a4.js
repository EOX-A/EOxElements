/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=t=>e=>typeof e=="function"?((i,n)=>(customElements.define(i,n),n))(t,e):((i,n)=>{const{kind:o,elements:s}=n;return{kind:o,elements:s,finisher(l){customElements.define(i,l)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},c=(t,e,i)=>{e.constructor.createProperty(i,t)};function a(t){return(e,i)=>i!==void 0?c(t,e,i):d(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function f(t){return a({...t,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r;((r=window.HTMLSlotElement)===null||r===void 0?void 0:r.prototype.assignedElements)!=null;export{y as e,a as n,f as t};
//# sourceMappingURL=query-assigned-elements-bec7f9a4.js.map
