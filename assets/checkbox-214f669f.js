import{T as m,A as M}from"./lit-element-c29cbb6b.js";import{e as C,i as T,t as f}from"./directive-12249aa5.js";import{m as L,f as x,c as b,p as A,a as B,e as R}from"./directive-helpers-2720686e.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=(e,r,o)=>{const p=new Map;for(let d=r;d<=o;d++)p.set(e[d],d);return p},V=C(class extends T{constructor(e){if(super(e),e.type!==f.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,r,o){let p;o===void 0?o=r:r!==void 0&&(p=r);const d=[],t=[];let a=0;for(const c of e)d[a]=p?p(c,a):a,t[a]=o(c,a),a++;return{values:t,keys:d}}render(e,r,o){return this.ct(e,r,o).values}update(e,[r,o,p]){var d;const t=L(e),{values:a,keys:c}=this.ct(r,o,p);if(!Array.isArray(t))return this.ut=c,a;const h=(d=this.ut)!==null&&d!==void 0?d:this.ut=[],u=[];let w,k,n=0,s=t.length-1,i=0,l=a.length-1;for(;n<=s&&i<=l;)if(t[n]===null)n++;else if(t[s]===null)s--;else if(h[n]===c[i])u[i]=x(t[n],a[i]),n++,i++;else if(h[s]===c[l])u[l]=x(t[s],a[l]),s--,l--;else if(h[n]===c[l])u[l]=x(t[n],a[l]),b(e,u[l+1],t[n]),n++,l--;else if(h[s]===c[i])u[i]=x(t[s],a[i]),b(e,t[n],t[s]),s--,i++;else if(w===void 0&&(w=E(c,i,l),k=E(h,n,s)),w.has(h[n]))if(w.has(h[s])){const g=k.get(c[i]),v=g!==void 0?t[g]:null;if(v===null){const y=b(e,t[n]);x(y,a[i]),u[i]=y}else u[i]=x(v,a[i]),b(e,t[n],v),t[g]=null;i++}else A(t[s]),s--;else A(t[n]),n++;for(;i<=l;){const g=b(e,u[l+1]);x(g,a[i]),u[i++]=g}for(;n<=s;){const g=t[n++];g!==null&&A(g)}return this.ut=c,B(e,u),m}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=C(class extends T{constructor(e){if(super(e),e.type!==f.PROPERTY&&e.type!==f.ATTRIBUTE&&e.type!==f.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!R(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[r]){if(r===m||r===M)return r;const o=e.element,p=e.name;if(e.type===f.PROPERTY){if(r===o[p])return m}else if(e.type===f.BOOLEAN_ATTRIBUTE){if(!!r===o.hasAttribute(p))return m}else if(e.type===f.ATTRIBUTE&&o.getAttribute(p)===r+"")return m;return B(e),r}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(e,r,o){return e?r():o==null?void 0:o()}const I=`
input[type="range"] {
  -webkit-appearance: none;
  width: 90%;
  margin-left: 5%;
  height: 6px;
  border-radius: 5px;
  background: #d7dcdf;
  outline: none;
  padding: 0;
}
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #2c3e50;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}
.range-slider {
  margin: 60px 0 0 0;
}
.range-slider {
  width: 100%;
}
input[type="range"]::-webkit-slider-thumb:hover {
  background: #00416F;
}
input[type="range"]:active::-webkit-slider-thumb {
  background: #00416F;
}
input[type="range"]::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border: 0;
  border-radius: 50%;
  background: #2c3e50;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}
input[type="range"]::-moz-range-thumb:hover {
  background: #00416F;
}
input[type="range"]:active::-moz-range-thumb {
  background: #00416F;
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 3px #fff0, 0 0 0 6px #00416F00;
}
.range-slider__value {
  display: inline-block;
  position: relative;
  width: 60px;
  color: #fff;
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
  background: #2c3e50;
  padding: 5px 10px;
  margin-left: 8px;
}
.range-slider__value:after {
  position: absolute;
  top: 8px;
  left: -7px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-right: 7px solid #2c3e50;
  border-bottom: 7px solid transparent;
  content: '';
}

input::-moz-focus-inner, input::-moz-focus-outer {
  border: 0;
}
`,P=`
input[type=radio] {
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 24px;
  height: 24px;
}

label span {
  font-size: small;
}

input[type=radio]:after {
  display: block;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-blank%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /%3E%3C/svg%3E");
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
input[type=radio]:checked:after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-marked%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z' /%3E%3C/svg%3E");

}
`,U=`
input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 24px;
  height: 24px;
}
input[type=checkbox]:after {
  display: block;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-blank-outline%3C/title%3E%3Cpath d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z' /%3E%3C/svg%3E");
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
input[type=checkbox]:checked:after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-marked%3C/title%3E%3Cpath d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' /%3E%3C/svg%3E");

}
`;export{V as a,U as c,_ as l,F as n,P as r,I as s};
//# sourceMappingURL=checkbox-214f669f.js.map
