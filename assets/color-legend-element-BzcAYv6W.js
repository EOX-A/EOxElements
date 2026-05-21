import{n as e}from"./chunk-jRWAZmH_.js";import{a as t,c as n,d as r,f as i,m as a,n as o,p as s,s as c,t as l,u}from"./lit-BtOHfmSb.js";import{A as d,C as ee,D as f,E as p,F as m,I as te,L as ne,M as h,N as g,O as _,P as re,R as v,S as y,T as ie,j as b,k as ae,w as x}from"./iframe-3WGFGJaX.js";var S,C=e((()=>{S=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))}}));function w(e){return(t,n)=>typeof n==`object`?E(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var T,E,D=e((()=>{i(),T={attribute:!0,type:String,converter:s,reflect:!1,hasChanged:r},E=(e=T,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)}})),oe=e((()=>{D()})),se=e((()=>{})),O,ce=e((()=>{O=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n)}));function le(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return O(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return O(n,r,{get(){return a(this)}})}}var ue=e((()=>{ce()})),k=e((()=>{})),A=e((()=>{})),j=e((()=>{})),M=e((()=>{})),N=e((()=>{C(),D(),oe(),se(),ue(),k(),A(),j(),M()})),P,F=e((()=>{p(),g(),P=class{constructor(e){this.cle=e}setColorScale(){switch(this.cle.scaleType){case`continuous`:this.setContinousColorScale();break;case`log10`:this.setLogColorScale();break;case`discrete`:this.setDiscreteColorScale();break;case`threshold`:this.setThresholdColorScale();break;case`categorical`:this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){let{interpolator:e,domain:t,range:n}=this.cle;this.colorScale=e?f(e).domain(t):h().range(n).domain(t).interpolate(m)}setLogColorScale(){let{interpolator:e,domain:t,range:n}=this.cle;this.colorScale=e?_(e).domain(t):b().range(n).domain(t).interpolate(m)}setDiscreteColorScale(){this.colorScale=d().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){let e=this.cle.domain;this.colorScale=ae().domain(e.slice(1,e.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=te().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(e){throw Error(`invalid property scaletype: ${e}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}})),I,L=e((()=>{n(),x(),I=y(class extends ee{constructor(e){if(super(e),e.type!==ie.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[n]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``))));for(let e in n)n[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(n)}let r=e.element.classList;for(let e of this.st)e in n||(r.remove(e),this.st.delete(e));for(let e in n){let t=!!n[e];t===this.st.has(e)||this.nt?.has(e)||(t?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return t}})})),R=e((()=>{L()})),z,B=e((()=>{l(),R(),g(),z=class{constructor(e){this.cle=e}render(){let e=this.cle.titleText?u`<p class="legend-title">${this.cle.titleText}</p>`:``,t={hidden:this.cle.scaleType===`categorical`},n={hidden:this.cle.scaleType!==`categorical`,"categorical-container":!0};return u`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${e}
      <slot name="subtitle"></slot>
      <svg
        class=${I(t)}
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
      <ul class=${I(n)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!==`categorical`)return``;let{markType:e,colorScale:t,domain:n}=this.cle,r={"legend-item":!0,line:e===`line`,circle:e===`circle`};return u`${n.map(e=>u`<li
          class=${I(r)}
          style="--color:${t(e)}"
        >
          ${e}
        </li>`)}`}renderContinuous(){if(this.cle.scaleType!==`continuous`&&this.cle.scaleType!==`log10`||this.cle.colorScale===null)return``;let{colorScale:e,marginTop:t,marginLeft:n,marginRight:r,tickSize:i,width:a,range:o}=this.cle,s=this.cle.marginBottom+i,l=this.cle.height+i,u=e.interpolator?.()||re(m,o);return c`<image
      x=${n}
      y=${t}
      width=${a-r-n}
      height=${l-t-s}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!==`discrete`&&this.cle.scaleType!==`threshold`)return``;let{tickSize:e,marginTop:t,marginLeft:n,colorScale:r,xScale:i}=this.cle,a=this.cle.height+e,o=this.cle.marginBottom+e,s=r.range(),l=e=>r.invertExtent(e).map(i)[0]||n,u=e=>{let[t,n]=r.invertExtent(e).map(i);return t||=0,n||=i.range()[1],n-t};return c`${s.map(e=>c`<rect x=${l(e)} y=${t} width=${u(e)} height=${a-t-o} fill=${e}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType===`categorical`)return``;let{ticks:e,tickSize:t,tickFormat:n,tickFormatter:r,tickValues:i,xScale:a,marginTop:o}=this.cle,s=this.cle.height+t,l=this.cle.marginBottom+t,u=i?.length?i:a.ticks.apply(a,[e,n]),d=Math.max(t,0)+3;return c`<g
      class="x-axis"
      transform="translate(0, ${s-l})"
      text-anchor="middle"
    >${u.map(e=>c`<g class="tick" transform='translate(${a(e)},0)'>
      <line stroke="currentColor" y2="${t}" y1="${o+l-s}"></line>
      <text fill="currentColor" y="${d}" dy="0.71em">${r(e)}</text>
      </g>`)}</g>`}getColorRamp(e,t=256){let n=document.createElement(`canvas`);n.setAttribute(`height`,`1`),n.setAttribute(`width`,`${t}`);let r=n.getContext(`2d`);for(let n=0;n<t;n++)r.fillStyle=e(n/(t-1)),r.fillRect(n,0,1,1);return n}}})),V,H,U,W,G,K,q,J=e((()=>{V=[0,1],H=[`#ffffcc`,`#a1dab4`,`#41b6c4`,`#2c7fb8`,`#253494`],U=`Color Legend Element`,W=`circle`,G=`continuous`,K=[`domain`,`range`,`interpolator`,`scaleType`],q=[`scaleType`,`ticks`,`tickSize`,`tickValues`,`tickFormat`,`tickFormatter`,`domain`,`range`,`marginLeft`,`marginRight`,`marginBottom`,`marginTop`,`width`,`height`]})),Y,X=e((()=>{p(),ne(),J(),Y=class{constructor(e){this.cle=e}setXScale(){let{scaleType:e,marginLeft:t,width:n,marginRight:r}=this.cle;switch(e){case`continuous`:this.xScale=h().domain(this.cle.domain).range([t,n-r]);break;case`log10`:this.xScale=b().domain(this.cle.domain).range([t,n-r]).nice();break;case`discrete`:case`threshold`:this.xScale=h().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([t,n-r]);break;case`categorical`:this.xScale=null;break;default:throw Error(`Unrecognized scaleType: ${e}`)}}handleAxisTicks(){if(this.cle.scaleType===`log10`&&!this.cle.tickValues)this.cle.tickValues=this.xScale.ticks(this.cle.ticks||5);else if((this.cle.scaleType===`discrete`||this.cle.scaleType===`threshold`)&&!this.cle.tickValues){let[e,t]=this.xScale.domain();this.cle.tickValues=[e,...this.cle.colorScale?.thresholds?.()||this.cle.colorScale.domain(),t]}typeof this.cle.tickFormatter!=`function`&&(this.cle.tickFormat?.length&&this.cle.scaleType!==`log10`?this.cle.tickFormatter=v(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||5,this.cle.tickFormat||`.1f`))}}})),Z,de=e((()=>{l(),Z=a`
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
`})),Q,$,fe=e((()=>{l(),N(),F(),B(),X(),de(),J(),Q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$=class extends o{constructor(){super(...arguments),this.titleText=U,this.width=325,this.height=32,this.marginTop=6,this.marginRight=12,this.marginBottom=16,this.marginLeft=12,this.scaleType=G,this.domain=V,this.range=H,this.markType=W,this.ticks=5,this.tickFormat=`.1f`,this.tickSize=6,this.colorScaleSetter=new P(this),this.axisTickSetter=new Y(this),this.renderer=new z(this)}get interpolator(){return this._interpolator}set interpolator(e){if(typeof e==`function`){let t=this.interpolator;this._interpolator=e,this.requestUpdate(`interpolator`,t)}else throw Error(`interpolator must be a function.`)}get tickFormatter(){return this._tickFormatter}set tickFormatter(e){if(typeof e==`function`){let t=this.tickFormatter;this._tickFormatter=e,this.requestUpdate(`tickFormatter`,t)}else throw Error(`tickFormatter must be a function.`)}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(e){K.some(t=>e.has(t))&&this.colorScaleSetter.setColorScale(),q.some(t=>e.has(t))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}},$.styles=[Z],Q([w({type:String})],$.prototype,`titleText`,void 0),Q([w({type:Number})],$.prototype,`width`,void 0),Q([w({type:Number})],$.prototype,`height`,void 0),Q([w({type:Number})],$.prototype,`marginTop`,void 0),Q([w({type:Number})],$.prototype,`marginRight`,void 0),Q([w({type:Number})],$.prototype,`marginBottom`,void 0),Q([w({type:Number})],$.prototype,`marginLeft`,void 0),Q([w({type:String})],$.prototype,`scaleType`,void 0),Q([w({type:Array})],$.prototype,`domain`,void 0),Q([w({type:Array})],$.prototype,`range`,void 0),Q([w({type:String})],$.prototype,`markType`,void 0),Q([w({type:Number})],$.prototype,`ticks`,void 0),Q([w({type:String})],$.prototype,`tickFormat`,void 0),Q([w({type:Number})],$.prototype,`tickSize`,void 0),Q([w({type:Array})],$.prototype,`tickValues`,void 0),Q([le(`svg`)],$.prototype,`svg`,void 0),Q([w({attribute:!1})],$.prototype,`interpolator`,null),Q([w({attribute:!1})],$.prototype,`tickFormatter`,null),$=Q([S(`color-legend`)],$)})),pe=e((()=>{fe()}));export{pe as t};