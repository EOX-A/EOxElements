import{m as x,n as $,s as A,o as S,p as b,q as E,t as C,v as F,w as _,y as L,z as R,T as D,i as T,A as z,B as y,C as U,D as O,E as I}from"./iframe-C2T8bkSe.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=o=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(o,t)})):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:x},P=(o=M,t,e)=>{const{kind:r,metadata:s}=e;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((o=Object.create(o)).wrapped=!0),i.set(e.name,o),r==="accessor"){const{name:c}=e;return{set(l){const m=t.get.call(this);t.set.call(this,l),this.requestUpdate(c,m,o)},init(l){return l!==void 0&&this.C(c,void 0,o,l),l}}}if(r==="setter"){const{name:c}=e;return function(l){const m=this[c];t.call(this,l),this.requestUpdate(c,m,o)}}throw Error("Unsupported decorator location: "+r)};function h(o){return(t,e)=>typeof e=="object"?P(o,t,e):((r,s,i)=>{const c=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),c?Object.getOwnPropertyDescriptor(s,i):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(o,t){return(e,r,s)=>{const i=c=>{var l;return((l=c.renderRoot)==null?void 0:l.querySelector(o))??null};return B(e,r,{get(){return i(this)}})}}class q{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:e,range:r}=this.cle;this.colorScale=t?A(t).domain(e):S().range(r).domain(e).interpolate(b)}setDiscreteColorScale(){this.colorScale=E().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=C().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=F().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=_(class extends L{constructor(o){var t;if(super(o),o.type!==R.ATTRIBUTE||o.name!=="class"||((t=o.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter((t=>o[t])).join(" ")+" "}update(o,[t]){var r,s;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in t)t[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(t)}const e=o.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const c=!!t[i];c===this.st.has(i)||(s=this.nt)!=null&&s.has(i)||(c?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return D}});class G{constructor(t){this.cle=t}render(){const t=this.cle.titleText?T`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},r={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return T`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <slot name="subtitle"></slot>
      <svg
        class=${v(e)}
        width=${this.cle.width}
        height=${this.cle.height}
      >
        <!-- discrete and threshold -->
        <g class="rects">${this.renderDiscreteThreshold()}</g>
        <!-- continuous -->
        ${this.renderContinuous()}
        <!-- axis ticks -->
        ${this.renderAxis()}
      </svg>
      <ul class=${v(r)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:e,domain:r}=this.cle,s={"legend-item":!0,line:t==="line",circle:t==="circle"};return T`${r.map(i=>T`<li
          class=${v(s)}
          style="--color:${e(i)}"
        >
          ${i}
        </li>`)}`}renderContinuous(){var d;if(this.cle.scaleType!=="continuous"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:e,marginLeft:r,marginRight:s,tickSize:i,width:c,range:l}=this.cle,m=this.cle.marginBottom+i,g=this.cle.height+i,u=((d=t.interpolator)==null?void 0:d.call(t))||z(b,l);return y`<image
      x=${r}
      y=${e}
      width=${c-s-r}
      height=${g-e-m}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:e,marginLeft:r,colorScale:s,xScale:i}=this.cle,c=this.cle.height+t,l=this.cle.marginBottom+t,m=s.range(),g=d=>s.invertExtent(d).map(i)[0]||r,u=d=>{let[f,p]=s.invertExtent(d).map(i);return f=f||0,p=p||i.range()[1],p-f};return y`${m.map(d=>y`<rect x=${g(d)} y=${e} width=${u(d)} height=${c-e-l} fill=${d}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:e,tickFormat:r,tickFormatter:s,tickValues:i,xScale:c,marginTop:l}=this.cle,m=this.cle.height+e,g=this.cle.marginBottom+e,u=i!=null&&i.length?i:c.ticks.apply(c,[t,r]),d=Math.max(e,0)+3,f=()=>u.map(p=>y`<g class="tick" transform='translate(${c(p)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${l+g-m}"></line>
      <text fill="currentColor" y="${d}" dy="0.71em">${s(p)}</text>
      </g>`);return y`<g
      class="x-axis"
      transform="translate(0, ${m-g})"
      text-anchor="middle"
    >${f()}</g>`}getColorRamp(t,e=256){const r=document.createElement("canvas");r.setAttribute("height","1"),r.setAttribute("width",`${e}`);const s=r.getContext("2d");for(let i=0;i<e;i++)s.fillStyle=t(i/(e-1)),s.fillRect(i,0,1,1);return r}}const X=325,H=32,V=6,K=12,W=16,Y=12,w=5,Z=6,k=".1f",J=[0,1],Q=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],tt="Color Legend Element",et="circle",it="continuous",rt=["domain","range","interpolator","scaleType"],ot=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class st{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:e,width:r,marginRight:s}=this.cle;switch(t){case"continuous":this.xScale=S().domain(this.cle.domain).range([e,r-s]);break;case"discrete":case"threshold":this.xScale=S().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,r-s]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){var t,e,r;if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[s,i]=this.xScale.domain();this.cle.tickValues=[s,...((e=(t=this.cle.colorScale)==null?void 0:t.thresholds)==null?void 0:e.call(t))||this.cle.colorScale.domain(),i]}typeof this.cle.tickFormatter!="function"&&((r=this.cle.tickFormat)!=null&&r.length?this.cle.tickFormatter=U(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||w,this.cle.tickFormat||k))}}const ct=O`
  :host {
    --cle-font-family: sans-serif;
    --cle-font-family-title: var(--cle-font-family);
    --cle-font-size: 0.75rem;
    --cle-font-size-title: 0.875rem;
    --cle-letter-spacing: 0.3px;
    --cle-letter-spacing-title: 0.25px;
    --cle-font-weight: 400;
    --cle-font-weight-title: 500;
    --cle-color: currentColor;
    --cle-background: #fff;
    --cle-padding: 0.375rem;
    --cle-border: none;
    --cle-border-radius: 0;
    --cle-box-sizing: content-box;
    --cle-columns: 2;
    --cle-column-width: auto;
    --cle-item-margin: 0.375rem 0.75rem 0 0;
    --cle-line-width: 24px;
    --cle-line-height: 2px;
    --cle-swatch-size: 10px;
    --cle-swatch-width: var(--cle-swatch-size);
    --cle-swatch-height: var(--cle-swatch-size);
    --cle-swatch-margin: 0 0.5rem 0 0;
  }

  :host([hidden]),
  .hidden {
    display: none !important;
  }

  div.cle-container {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    font-weight: var(--cle-font-weight);
    letter-spacing: var(--cle-letter-spacing);
    color: var(--cle-color);
    background: var(--cle-background);
    display: inline-block;
    padding: var(--cle-padding);
    border: var(--cle-border);
    border-radius: var(--cle-border-radius);
    box-sizing: var(--cle-box-sizing);
  }

  svg {
    display: block;
    overflow: visible;
  }

  svg text {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    fill: var(--cle-color);
  }

  p.legend-title {
    margin: 0;
    font-family: var(--cle-font-family-title);
    font-size: var(--cle-font-size-title);
    font-weight: var(--cle-font-weight-title);
    letter-spacing: var(--cle-letter-spacing-title);
  }

  ul.categorical-container {
    padding: 0;
    margin: 0;
    column-count: var(--cle-columns);
    column-width: var(--cle-column-width);
  }

  .legend-item {
    display: inline-flex;
    align-items: center;
    margin: var(--cle-item-margin);
  }

  .legend-item::before {
    content: "";
    width: var(--cle-swatch-width);
    height: var(--cle-swatch-height);
    margin: var(--cle-swatch-margin);
    background: var(--color);
  }

  .legend-item.line::before {
    width: var(--cle-line-width);
    height: var(--cle-line-height);
  }

  .legend-item.circle::before {
    border-radius: 50%;
  }
`;var a=function(o,t,e,r){var s=arguments.length,i=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var l=o.length-1;l>=0;l--)(c=o[l])&&(i=(s<3?c(i):s>3?c(t,e,i):c(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};let n=class extends I{constructor(){super(...arguments),this.titleText=tt,this.width=X,this.height=H,this.marginTop=V,this.marginRight=K,this.marginBottom=W,this.marginLeft=Y,this.scaleType=it,this.domain=J,this.range=Q,this.markType=et,this.ticks=w,this.tickFormat=k,this.tickSize=Z,this.colorScaleSetter=new q(this),this.axisTickSetter=new st(this),this.renderer=new G(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const e=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const e=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){rt.some(e=>t.has(e))&&this.colorScaleSetter.setColorScale(),ot.some(e=>t.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};n.styles=[ct];a([h({type:String})],n.prototype,"titleText",void 0);a([h({type:Number})],n.prototype,"width",void 0);a([h({type:Number})],n.prototype,"height",void 0);a([h({type:Number})],n.prototype,"marginTop",void 0);a([h({type:Number})],n.prototype,"marginRight",void 0);a([h({type:Number})],n.prototype,"marginBottom",void 0);a([h({type:Number})],n.prototype,"marginLeft",void 0);a([h({type:String})],n.prototype,"scaleType",void 0);a([h({type:Array})],n.prototype,"domain",void 0);a([h({type:Array})],n.prototype,"range",void 0);a([h({type:String})],n.prototype,"markType",void 0);a([h({type:Number})],n.prototype,"ticks",void 0);a([h({type:String})],n.prototype,"tickFormat",void 0);a([h({type:Number})],n.prototype,"tickSize",void 0);a([h({type:Array})],n.prototype,"tickValues",void 0);a([j("svg")],n.prototype,"svg",void 0);a([h({attribute:!1})],n.prototype,"interpolator",null);a([h({attribute:!1})],n.prototype,"tickFormatter",null);n=a([N("color-legend")],n);
