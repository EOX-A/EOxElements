import{q as $,t as C,v as E,w as S,y as k,z as A,C as w,D as F,E as _,G as L,H as R,I as D,J as z,T as U,x as T,K as O,N as y,O as I,Q as N,U as M}from"./iframe-BZyiZ5id.js";const P=r=>(e,t)=>{t!==void 0?t.addInitializer((()=>{customElements.define(r,e)})):customElements.define(r,e)};const j={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:$},B=(r=j,e,t)=>{const{kind:i,metadata:s}=t;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),i==="accessor"){const{name:c}=t;return{set(n){const d=e.get.call(this);e.set.call(this,n),this.requestUpdate(c,d,r)},init(n){return n!==void 0&&this.C(c,void 0,r,n),n}}}if(i==="setter"){const{name:c}=t;return function(n){const d=this[c];e.call(this,n),this.requestUpdate(c,d,r)}}throw Error("Unsupported decorator location: "+i)};function h(r){return(e,t)=>typeof t=="object"?B(r,e,t):((i,s,o)=>{const c=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),c?Object.getOwnPropertyDescriptor(s,o):void 0})(r,e,t)}const q=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);function V(r,e){return(t,i,s)=>{const o=c=>c.renderRoot?.querySelector(r)??null;return q(t,i,{get(){return o(this)}})}}class G{constructor(e){this.cle=e}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"log10":this.setLogColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:e,domain:t,range:i}=this.cle;this.colorScale=e?E(e).domain(t):S().range(i).domain(t).interpolate(k)}setLogColorScale(){const{interpolator:e,domain:t,range:i}=this.cle;this.colorScale=e?A(e).domain(t):w().range(i).domain(t).interpolate(k)}setDiscreteColorScale(){this.colorScale=F().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const e=this.cle.domain;this.colorScale=_().domain(e.slice(1,e.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=L().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(e){throw new Error(`invalid property scaletype: ${e}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}const v=R(class extends D{constructor(r){if(super(r),r.type!==z.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter((e=>r[e])).join(" ")+" "}update(r,[e]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const t=r.element.classList;for(const i of this.st)i in e||(t.remove(i),this.st.delete(i));for(const i in e){const s=!!e[i];s===this.st.has(i)||this.nt?.has(i)||(s?(t.add(i),this.st.add(i)):(t.remove(i),this.st.delete(i)))}return U}});class H{constructor(e){this.cle=e}render(){const e=this.cle.titleText?T`<p class="legend-title">${this.cle.titleText}</p>`:"",t={hidden:this.cle.scaleType==="categorical"},i={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return T`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${e}
      <slot name="subtitle"></slot>
      <svg
        class=${v(t)}
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
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:e,colorScale:t,domain:i}=this.cle,s={"legend-item":!0,line:e==="line",circle:e==="circle"};return T`${i.map(o=>T`<li
          class=${v(s)}
          style="--color:${t(o)}"
        >
          ${o}
        </li>`)}`}renderContinuous(){if(this.cle.scaleType!=="continuous"&&this.cle.scaleType!=="log10"||this.cle.colorScale===null)return"";const{colorScale:e,marginTop:t,marginLeft:i,marginRight:s,tickSize:o,width:c,range:n}=this.cle,d=this.cle.marginBottom+o,m=this.cle.height+o,u=e.interpolator?.()||O(k,n);return y`<image
      x=${i}
      y=${t}
      width=${c-s-i}
      height=${m-t-d}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:e,marginTop:t,marginLeft:i,colorScale:s,xScale:o}=this.cle,c=this.cle.height+e,n=this.cle.marginBottom+e,d=s.range(),m=g=>s.invertExtent(g).map(o)[0]||i,u=g=>{let[f,p]=s.invertExtent(g).map(o);return f=f||0,p=p||o.range()[1],p-f};return y`${d.map(g=>y`<rect x=${m(g)} y=${t} width=${u(g)} height=${c-t-n} fill=${g}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:e,tickSize:t,tickFormat:i,tickFormatter:s,tickValues:o,xScale:c,marginTop:n}=this.cle,d=this.cle.height+t,m=this.cle.marginBottom+t,u=o?.length?o:c.ticks.apply(c,[e,i]),g=Math.max(t,0)+3,f=()=>u.map(p=>y`<g class="tick" transform='translate(${c(p)},0)'>
      <line stroke="currentColor" y2="${t}" y1="${n+m-d}"></line>
      <text fill="currentColor" y="${g}" dy="0.71em">${s(p)}</text>
      </g>`);return y`<g
      class="x-axis"
      transform="translate(0, ${d-m})"
      text-anchor="middle"
    >${f()}</g>`}getColorRamp(e,t=256){const i=document.createElement("canvas");i.setAttribute("height","1"),i.setAttribute("width",`${t}`);const s=i.getContext("2d");for(let o=0;o<t;o++)s.fillStyle=e(o/(t-1)),s.fillRect(o,0,1,1);return i}}const X=325,K=32,W=6,Y=12,J=16,Q=12,b=5,Z=6,x=".1f",ee=[0,1],te=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],ie="Color Legend Element",re="circle",oe="continuous",se=["domain","range","interpolator","scaleType"],ce=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class le{constructor(e){this.cle=e}setXScale(){const{scaleType:e,marginLeft:t,width:i,marginRight:s}=this.cle;switch(e){case"continuous":this.xScale=S().domain(this.cle.domain).range([t,i-s]);break;case"log10":this.xScale=w().domain(this.cle.domain).range([t,i-s]).nice();break;case"discrete":case"threshold":this.xScale=S().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([t,i-s]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${e}`)}}handleAxisTicks(){if(this.cle.scaleType==="log10"&&!this.cle.tickValues)this.cle.tickValues=this.xScale.ticks(this.cle.ticks||b);else if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[e,t]=this.xScale.domain();this.cle.tickValues=[e,...this.cle.colorScale?.thresholds?.()||this.cle.colorScale.domain(),t]}typeof this.cle.tickFormatter!="function"&&(this.cle.tickFormat?.length&&this.cle.scaleType!=="log10"?this.cle.tickFormatter=I(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||b,this.cle.tickFormat||x))}}const ae=N`
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
`;var a=function(r,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,t,i);else for(var n=r.length-1;n>=0;n--)(c=r[n])&&(o=(s<3?c(o):s>3?c(e,t,o):c(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let l=class extends M{constructor(){super(...arguments),this.titleText=ie,this.width=X,this.height=K,this.marginTop=W,this.marginRight=Y,this.marginBottom=J,this.marginLeft=Q,this.scaleType=oe,this.domain=ee,this.range=te,this.markType=re,this.ticks=b,this.tickFormat=x,this.tickSize=Z,this.colorScaleSetter=new G(this),this.axisTickSetter=new le(this),this.renderer=new H(this)}get interpolator(){return this._interpolator}set interpolator(e){if(typeof e=="function"){const t=this.interpolator;this._interpolator=e,this.requestUpdate("interpolator",t)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(e){if(typeof e=="function"){const t=this.tickFormatter;this._tickFormatter=e,this.requestUpdate("tickFormatter",t)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(e){se.some(t=>e.has(t))&&this.colorScaleSetter.setColorScale(),ce.some(t=>e.has(t))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};l.styles=[ae];a([h({type:String})],l.prototype,"titleText",void 0);a([h({type:Number})],l.prototype,"width",void 0);a([h({type:Number})],l.prototype,"height",void 0);a([h({type:Number})],l.prototype,"marginTop",void 0);a([h({type:Number})],l.prototype,"marginRight",void 0);a([h({type:Number})],l.prototype,"marginBottom",void 0);a([h({type:Number})],l.prototype,"marginLeft",void 0);a([h({type:String})],l.prototype,"scaleType",void 0);a([h({type:Array})],l.prototype,"domain",void 0);a([h({type:Array})],l.prototype,"range",void 0);a([h({type:String})],l.prototype,"markType",void 0);a([h({type:Number})],l.prototype,"ticks",void 0);a([h({type:String})],l.prototype,"tickFormat",void 0);a([h({type:Number})],l.prototype,"tickSize",void 0);a([h({type:Array})],l.prototype,"tickValues",void 0);a([V("svg")],l.prototype,"svg",void 0);a([h({attribute:!1})],l.prototype,"interpolator",null);a([h({attribute:!1})],l.prototype,"tickFormatter",null);l=a([P("color-legend")],l);
