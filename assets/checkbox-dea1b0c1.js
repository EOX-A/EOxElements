import{T as m,A as M}from"./lit-element-c29cbb6b.js";import{e as C,i as T,t as f}from"./directive-1613be6b.js";import{m as L,f as x,c as b,p as A,a as B,e as R}from"./directive-helpers-2720686e.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=(e,n,s)=>{const p=new Map;for(let d=n;d<=s;d++)p.set(e[d],d);return p},V=C(class extends T{constructor(e){if(super(e),e.type!==f.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,n,s){let p;s===void 0?s=n:n!==void 0&&(p=n);const d=[],t=[];let o=0;for(const c of e)d[o]=p?p(c,o):o,t[o]=s(c,o),o++;return{values:t,keys:d}}render(e,n,s){return this.ct(e,n,s).values}update(e,[n,s,p]){var d;const t=L(e),{values:o,keys:c}=this.ct(n,s,p);if(!Array.isArray(t))return this.ut=c,o;const h=(d=this.ut)!==null&&d!==void 0?d:this.ut=[],u=[];let w,k,r=0,a=t.length-1,i=0,l=o.length-1;for(;r<=a&&i<=l;)if(t[r]===null)r++;else if(t[a]===null)a--;else if(h[r]===c[i])u[i]=x(t[r],o[i]),r++,i++;else if(h[a]===c[l])u[l]=x(t[a],o[l]),a--,l--;else if(h[r]===c[l])u[l]=x(t[r],o[l]),b(e,u[l+1],t[r]),r++,l--;else if(h[a]===c[i])u[i]=x(t[a],o[i]),b(e,t[r],t[a]),a--,i++;else if(w===void 0&&(w=E(c,i,l),k=E(h,r,a)),w.has(h[r]))if(w.has(h[a])){const g=k.get(c[i]),v=g!==void 0?t[g]:null;if(v===null){const y=b(e,t[r]);x(y,o[i]),u[i]=y}else u[i]=x(v,o[i]),b(e,t[r],v),t[g]=null;i++}else A(t[a]),a--;else A(t[r]),r++;for(;i<=l;){const g=b(e,u[l+1]);x(g,o[i]),u[i++]=g}for(;r<=a;){const g=t[r++];g!==null&&A(g)}return this.ut=c,B(e,u),m}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=C(class extends T{constructor(e){if(super(e),e.type!==f.PROPERTY&&e.type!==f.ATTRIBUTE&&e.type!==f.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!R(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[n]){if(n===m||n===M)return n;const s=e.element,p=e.name;if(e.type===f.PROPERTY){if(n===s[p])return m}else if(e.type===f.BOOLEAN_ATTRIBUTE){if(!!n===s.hasAttribute(p))return m}else if(e.type===f.ATTRIBUTE&&s.getAttribute(p)===n+"")return m;return B(e),n}}),F=`
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
`,I=`
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
`,P=`
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
`;export{V as a,P as c,_ as l,I as r,F as s};
//# sourceMappingURL=checkbox-dea1b0c1.js.map
