import{n as e}from"./rolldown-runtime-CMxvf4Kt.js";import{c as t,d as n,f as r,h as i,l as a,m as o,n as s,o as c,p as l,t as u}from"./lit-Blt270FX.js";import{G as d,K as f,Q as p,U as ee,W as m,X as te,Y as h,at as g,ct as _,dt as ne,et as re,ft as v,it as y,nt as b,pt as ie,q as x,st as S}from"./iframe-gxPVjrQ_.js";var C,w=e((()=>{C=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))}}));function T(e){return(t,n)=>typeof n==`object`?D(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var E,D,O=e((()=>{l(),E={attribute:!0,type:String,converter:o,reflect:!1,hasChanged:r},D=(e=E,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)}}));function k(e){return T({...e,state:!0,attribute:!1})}var A=e((()=>{O()})),ae=e((()=>{})),j,oe=e((()=>{j=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n)}));function M(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return j(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return j(n,r,{get(){return a(this)}})}}var N=e((()=>{oe()})),se=e((()=>{})),ce=e((()=>{})),le=e((()=>{})),ue=e((()=>{})),P=e((()=>{w(),O(),A(),ae(),N(),se(),ce(),le(),ue()})),F,I=e((()=>{x(),g(),F=class{constructor(e){this.cle=e}setColorScale(){switch(this.cle.scaleType){case`continuous`:this.setContinousColorScale();break;case`log10`:this.setLogColorScale();break;case`discrete`:this.setDiscreteColorScale();break;case`threshold`:this.setThresholdColorScale();break;case`categorical`:this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){let{interpolator:e,domain:t,range:n}=this.cle;this.colorScale=e?h(e).domain(t):y().range(n).domain(t).interpolate(_)}setLogColorScale(){let{interpolator:e,domain:t,range:n}=this.cle;this.colorScale=e?te(e).domain(t):b().range(n).domain(t).interpolate(_)}setDiscreteColorScale(){this.colorScale=re().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){let e=this.cle.domain;this.colorScale=p().domain(e.slice(1,e.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=ne().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(e){throw Error(`invalid property scaletype: ${e}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}})),L,R=e((()=>{a(),d(),L=ee(class extends m{constructor(e){if(super(e),e.type!==f.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``))));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return c}})})),z=e((()=>{R()})),B,V=e((()=>{u(),z(),g(),B=class{constructor(e){this.cle=e}render(){let e=this.cle.titleText?n`<p class="legend-title">${this.cle.titleText}</p>`:``,t={hidden:this.cle.scaleType===`categorical`},r={hidden:this.cle.scaleType!==`categorical`,"categorical-container":!0};return n`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${e}
      <slot name="subtitle"></slot>
      <svg
        class=${L(t)}
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
      <ul class=${L(r)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!==`categorical`)return``;let{markType:e,colorScale:t,domain:r}=this.cle,i={"legend-item":!0,line:e===`line`,circle:e===`circle`};return n`${r.map(e=>n`<li
          class=${L(i)}
          style="--color:${t(e)}"
        >
          ${e}
        </li>`)}`}renderContinuous(){if(this.cle.scaleType!==`continuous`&&this.cle.scaleType!==`log10`||this.cle.colorScale===null)return``;let{colorScale:e,marginTop:n,marginLeft:r,marginRight:i,tickSize:a,width:o,range:s}=this.cle,c=this.cle.marginBottom+a,l=this.cle.height+a,u=e.interpolator?.()||S(_,s);return t`<image
      x=${r}
      y=${n}
      width=${o-i-r}
      height=${l-n-c}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!==`discrete`&&this.cle.scaleType!==`threshold`)return``;let{tickSize:e,marginTop:n,marginLeft:r,colorScale:i,xScale:a}=this.cle,o=this.cle.height+e,s=this.cle.marginBottom+e,c=i.range(),l=e=>i.invertExtent(e).map(a)[0]||r,u=e=>{let[t,n]=i.invertExtent(e).map(a);return t||=0,n||=a.range()[1],n-t};return t`${c.map(e=>t`<rect x=${l(e)} y=${n} width=${u(e)} height=${o-n-s} fill=${e}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType===`categorical`)return``;let{ticks:e,tickSize:n,tickFormat:r,tickFormatter:i,tickValues:a,xScale:o,marginTop:s}=this.cle,c=this.cle.height+n,l=this.cle.marginBottom+n,u=a?.length?a:o.ticks.apply(o,[e,r]),d=Math.max(n,0)+3;return t`<g
      class="x-axis"
      transform="translate(0, ${c-l})"
      text-anchor="middle"
    >${u.map(e=>t`<g class="tick" transform='translate(${o(e)},0)'>
      <line stroke="currentColor" y2="${n}" y1="${s+l-c}"></line>
      <text fill="currentColor" y="${d}" dy="0.71em">${i(e)}</text>
      </g>`)}</g>`}getColorRamp(e,t=256){let n=document.createElement(`canvas`);n.setAttribute(`height`,`1`),n.setAttribute(`width`,`${t}`);let r=n.getContext(`2d`);for(let n=0;n<t;n++)r.fillStyle=e(n/(t-1)),r.fillRect(n,0,1,1);return n}}})),H,U,W,G,K,q,J,Y=e((()=>{H=[0,1],U=[`#ffffcc`,`#a1dab4`,`#41b6c4`,`#2c7fb8`,`#253494`],W=`Color Legend Element`,G=`circle`,K=`continuous`,q=[`domain`,`range`,`interpolator`,`scaleType`],J=[`scaleType`,`ticks`,`tickSize`,`tickValues`,`tickFormat`,`tickFormatter`,`domain`,`range`,`marginLeft`,`marginRight`,`marginBottom`,`marginTop`,`width`,`height`]})),X,de=e((()=>{x(),v(),Y(),X=class{constructor(e){this.cle=e}setXScale(){let{scaleType:e,marginLeft:t,width:n,marginRight:r}=this.cle;switch(e){case`continuous`:this.xScale=y().domain(this.cle.domain).range([t,n-r]);break;case`log10`:this.xScale=b().domain(this.cle.domain).range([t,n-r]).nice();break;case`discrete`:case`threshold`:this.xScale=y().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([t,n-r]);break;case`categorical`:this.xScale=null;break;default:throw Error(`Unrecognized scaleType: ${e}`)}}handleAxisTicks(){if(this.cle.scaleType===`log10`&&!this.cle.tickValues)this.cle.tickValues=this.xScale.ticks(this.cle.ticks||5);else if((this.cle.scaleType===`discrete`||this.cle.scaleType===`threshold`)&&!this.cle.tickValues){let[e,t]=this.xScale.domain();this.cle.tickValues=[e,...this.cle.colorScale?.thresholds?.()||this.cle.colorScale.domain(),t]}typeof this.cle.tickFormatter!=`function`&&(this.cle.tickFormat?.length&&this.cle.scaleType!==`log10`?this.cle.tickFormatter=ie(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||5,this.cle.tickFormat||`.1f`))}}})),Z,fe=e((()=>{u(),Z=i`
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
`})),Q,$,pe=e((()=>{u(),P(),I(),V(),de(),fe(),Y(),Q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$=class extends s{constructor(){super(...arguments),this.titleText=W,this.width=325,this.height=32,this.marginTop=6,this.marginRight=12,this.marginBottom=16,this.marginLeft=12,this.scaleType=K,this.domain=H,this.range=U,this.markType=G,this.ticks=5,this.tickFormat=`.1f`,this.tickSize=6,this.colorScaleSetter=new F(this),this.axisTickSetter=new X(this),this.renderer=new B(this)}get interpolator(){return this._interpolator}set interpolator(e){if(typeof e==`function`){let t=this.interpolator;this._interpolator=e,this.requestUpdate(`interpolator`,t)}else throw Error(`interpolator must be a function.`)}get tickFormatter(){return this._tickFormatter}set tickFormatter(e){if(typeof e==`function`){let t=this.tickFormatter;this._tickFormatter=e,this.requestUpdate(`tickFormatter`,t)}else throw Error(`tickFormatter must be a function.`)}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(e){q.some(t=>e.has(t))&&this.colorScaleSetter.setColorScale(),J.some(t=>e.has(t))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}},$.styles=[Z],Q([T({type:String})],$.prototype,`titleText`,void 0),Q([T({type:Number})],$.prototype,`width`,void 0),Q([T({type:Number})],$.prototype,`height`,void 0),Q([T({type:Number})],$.prototype,`marginTop`,void 0),Q([T({type:Number})],$.prototype,`marginRight`,void 0),Q([T({type:Number})],$.prototype,`marginBottom`,void 0),Q([T({type:Number})],$.prototype,`marginLeft`,void 0),Q([T({type:String})],$.prototype,`scaleType`,void 0),Q([T({type:Array})],$.prototype,`domain`,void 0),Q([T({type:Array})],$.prototype,`range`,void 0),Q([T({type:String})],$.prototype,`markType`,void 0),Q([T({type:Number})],$.prototype,`ticks`,void 0),Q([T({type:String})],$.prototype,`tickFormat`,void 0),Q([T({type:Number})],$.prototype,`tickSize`,void 0),Q([T({type:Array})],$.prototype,`tickValues`,void 0),Q([M(`svg`)],$.prototype,`svg`,void 0),Q([T({attribute:!1})],$.prototype,`interpolator`,null),Q([T({attribute:!1})],$.prototype,`tickFormatter`,null),$=Q([C(`color-legend`)],$)})),me=e((()=>{pe()}));export{P as a,A as c,T as d,w as f,R as i,k as l,z as n,M as o,C as p,L as r,N as s,me as t,O as u};