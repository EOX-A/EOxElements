import{q as x,t as $,v as E,w as S,y as b,z as A,C,D as F,E as _,G as L,H as R,T as D,x as T,I as z,J as y,K as U,N as O,O as I}from"./iframe-B4qxdt9d.js";const N=r=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(r,t)})):customElements.define(r,t)};const M={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:x},P=(r=M,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),i==="accessor"){const{name:c}=e;return{set(a){const d=t.get.call(this);t.set.call(this,a),this.requestUpdate(c,d,r)},init(a){return a!==void 0&&this.C(c,void 0,r,a),a}}}if(i==="setter"){const{name:c}=e;return function(a){const d=this[c];t.call(this,a),this.requestUpdate(c,d,r)}}throw Error("Unsupported decorator location: "+i)};function h(r){return(t,e)=>typeof e=="object"?P(r,t,e):((i,s,o)=>{const c=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),c?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}const j=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function B(r,t){return(e,i,s)=>{const o=c=>c.renderRoot?.querySelector(r)??null;return j(e,i,{get(){return o(this)}})}}class q{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:e,range:i}=this.cle;this.colorScale=t?E(t).domain(e):S().range(i).domain(e).interpolate(b)}setDiscreteColorScale(){this.colorScale=A().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=C().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=F().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}const v=_(class extends L{constructor(r){if(super(r),r.type!==R.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter((t=>r[t])).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const e=r.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const s=!!t[i];s===this.st.has(i)||this.nt?.has(i)||(s?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return D}});class G{constructor(t){this.cle=t}render(){const t=this.cle.titleText?T`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},i={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return T`<div
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
      <ul class=${v(i)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:e,domain:i}=this.cle,s={"legend-item":!0,line:t==="line",circle:t==="circle"};return T`${i.map(o=>T`<li
          class=${v(s)}
          style="--color:${e(o)}"
        >
          ${o}
        </li>`)}`}renderContinuous(){if(this.cle.scaleType!=="continuous"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:e,marginLeft:i,marginRight:s,tickSize:o,width:c,range:a}=this.cle,d=this.cle.marginBottom+o,g=this.cle.height+o,u=t.interpolator?.()||z(b,a);return y`<image
      x=${i}
      y=${e}
      width=${c-s-i}
      height=${g-e-d}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:e,marginLeft:i,colorScale:s,xScale:o}=this.cle,c=this.cle.height+t,a=this.cle.marginBottom+t,d=s.range(),g=m=>s.invertExtent(m).map(o)[0]||i,u=m=>{let[f,p]=s.invertExtent(m).map(o);return f=f||0,p=p||o.range()[1],p-f};return y`${d.map(m=>y`<rect x=${g(m)} y=${e} width=${u(m)} height=${c-e-a} fill=${m}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:e,tickFormat:i,tickFormatter:s,tickValues:o,xScale:c,marginTop:a}=this.cle,d=this.cle.height+e,g=this.cle.marginBottom+e,u=o?.length?o:c.ticks.apply(c,[t,i]),m=Math.max(e,0)+3,f=()=>u.map(p=>y`<g class="tick" transform='translate(${c(p)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${a+g-d}"></line>
      <text fill="currentColor" y="${m}" dy="0.71em">${s(p)}</text>
      </g>`);return y`<g
      class="x-axis"
      transform="translate(0, ${d-g})"
      text-anchor="middle"
    >${f()}</g>`}getColorRamp(t,e=256){const i=document.createElement("canvas");i.setAttribute("height","1"),i.setAttribute("width",`${e}`);const s=i.getContext("2d");for(let o=0;o<e;o++)s.fillStyle=t(o/(e-1)),s.fillRect(o,0,1,1);return i}}const V=325,H=32,X=6,K=12,W=16,Y=12,k=5,J=6,w=".1f",Z=[0,1],Q=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],tt="Color Legend Element",et="circle",it="continuous",rt=["domain","range","interpolator","scaleType"],ot=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class st{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:e,width:i,marginRight:s}=this.cle;switch(t){case"continuous":this.xScale=S().domain(this.cle.domain).range([e,i-s]);break;case"discrete":case"threshold":this.xScale=S().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,i-s]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[t,e]=this.xScale.domain();this.cle.tickValues=[t,...this.cle.colorScale?.thresholds?.()||this.cle.colorScale.domain(),e]}typeof this.cle.tickFormatter!="function"&&(this.cle.tickFormat?.length?this.cle.tickFormatter=U(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||k,this.cle.tickFormat||w))}}const ct=O`
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
`;var l=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(c=r[a])&&(o=(s<3?c(o):s>3?c(t,e,o):c(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o};let n=class extends I{constructor(){super(...arguments),this.titleText=tt,this.width=V,this.height=H,this.marginTop=X,this.marginRight=K,this.marginBottom=W,this.marginLeft=Y,this.scaleType=it,this.domain=Z,this.range=Q,this.markType=et,this.ticks=k,this.tickFormat=w,this.tickSize=J,this.colorScaleSetter=new q(this),this.axisTickSetter=new st(this),this.renderer=new G(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const e=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const e=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){rt.some(e=>t.has(e))&&this.colorScaleSetter.setColorScale(),ot.some(e=>t.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};n.styles=[ct];l([h({type:String})],n.prototype,"titleText",void 0);l([h({type:Number})],n.prototype,"width",void 0);l([h({type:Number})],n.prototype,"height",void 0);l([h({type:Number})],n.prototype,"marginTop",void 0);l([h({type:Number})],n.prototype,"marginRight",void 0);l([h({type:Number})],n.prototype,"marginBottom",void 0);l([h({type:Number})],n.prototype,"marginLeft",void 0);l([h({type:String})],n.prototype,"scaleType",void 0);l([h({type:Array})],n.prototype,"domain",void 0);l([h({type:Array})],n.prototype,"range",void 0);l([h({type:String})],n.prototype,"markType",void 0);l([h({type:Number})],n.prototype,"ticks",void 0);l([h({type:String})],n.prototype,"tickFormat",void 0);l([h({type:Number})],n.prototype,"tickSize",void 0);l([h({type:Array})],n.prototype,"tickValues",void 0);l([B("svg")],n.prototype,"svg",void 0);l([h({attribute:!1})],n.prototype,"interpolator",null);l([h({attribute:!1})],n.prototype,"tickFormatter",null);n=l([N("color-legend")],n);
