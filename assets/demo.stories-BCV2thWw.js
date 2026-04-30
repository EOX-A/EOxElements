import{n as e}from"./chunk-jRWAZmH_.js";import{B as t,V as n,gt as r,xt as i}from"./iframe-CCuLJKK5.js";import{t as a}from"./color-legend-element-DUk7O84m.js";import{n as o,t as s}from"./testItems-CXH9Ttl1.js";function c(){return window==null?void 0:window.matchMedia(`(prefers-color-scheme: dark)`).matches}async function l(e){await new Promise(t=>setTimeout(t,e))}function u(){return`fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})}function d(e,t){try{return typeof e==`string`?(t??document).querySelector(e):e}catch{return null}}function f(e,t){try{return typeof e==`string`?(t??document).querySelectorAll(e):e??B}catch{return B}}function p(e,t){return e?.classList.contains(t)??!1}function m(e,t){return(e?.tagName)?.toLowerCase()===t}function h(e,t){return(e?.type)?.toLowerCase()===t}function g(e,t){if(e instanceof NodeList)for(let n=0;n<e.length;n++)e[n].classList.add(t);else e?.classList.add(t)}function _(e,t){if(e instanceof NodeList)for(let n=0;n<e.length;n++)e[n].classList.remove(t);else e?.classList.remove(t)}function v(e,t,n,r=!0){e!=null&&e.addEventListener&&e.addEventListener(t,n,r)}function y(e,t,n,r=!0){ae(e),v(e,t,n,r)}function b(e,t,n,r=!0){e!=null&&e.removeEventListener&&e.removeEventListener(t,n,r)}function ee(e,t){var n;(n=t?.parentNode)==null||n.insertBefore(e,t)}function x(e){return e?.previousElementSibling}function S(e){return e?.nextElementSibling}function C(e){return e?.parentElement}function te(e){let t=document.createElement(`div`);for(let n=0,r=Object.keys(e),i=r.length;n<i;n++){let i=r[n],a=e[i];t.setAttribute(i,a)}return t}function w(){var e;(e=document.activeElement)==null||e.blur()}function ne(e){return f(`[data-ui="#`+e+`"]`)}function re(e){return d(`[data-ui="#`+e+`"]`)}function ie(e){e.id&&p(e,`page`)&&(e=re(e.id)??e);let t=C(e);if(!p(t,`tabs`)&&!p(t,`tabbed`)&&!m(t,`nav`))return;let n=f(`a`,t);for(let e=0;e<n.length;e++)_(n[e],`active`);!m(e,`button`)&&!p(e,`button`)&&!p(e,`chip`)&&g(e,`active`)}function ae(e){V.has(e)||V.add(e)}function oe(){let e=getComputedStyle(document.documentElement).getPropertyValue(`--size`)||`16px`;return e.includes(`%`)?parseInt(e)*16/100:e.includes(`em`)?parseInt(e)*16:parseInt(e)}function T(e){e.placeholder||=` `}function se(e){let t=e.currentTarget,n=d(`input:not([type=file], [type=checkbox], [type=radio]), select, textarea`,C(t));n&&n.focus()}function E(e){let t=e.currentTarget;O(t)}function D(e){let t=e.currentTarget;O(t)}function ce(e){let t=e.currentTarget;k(t)}function le(e){let t=e.currentTarget;A(t)}function ue(e){let t=e.currentTarget;k(t,e)}function de(e){let t=e.currentTarget;A(t,e)}function fe(e){var t;let n=e.currentTarget,r=d(`input`,C(n));r&&(t=n.textContent)!=null&&t.includes(`visibility`)&&(r.type===`password`?(r.type=`text`,n.textContent=`visibility_off`):(r.type=`password`,n.textContent=`visibility`))}function pe(e){let t=e.currentTarget;j(t)}function me(){let e=f(`.field > label`);for(let t=0;t<e.length;t++)y(e[t],`click`,se)}function he(){let e=f(`.field > input:not([type=file], [type=color], [type=range])`);for(let t=0;t<e.length;t++)y(e[t],`focus`,E),y(e[t],`blur`,D),O(e[t])}function ge(){let e=f(`.field > select`);for(let t=0;t<e.length;t++)y(e[t],`focus`,E),y(e[t],`blur`,D)}function _e(){let e=f(`.field > input[type=file]`);for(let t=0;t<e.length;t++)y(e[t],`change`,ce),k(e[t])}function ve(){let e=f(`.field > input[type=color]`);for(let t=0;t<e.length;t++)y(e[t],`change`,le),A(e[t])}function ye(){let e=f(`.field > textarea`);for(let t=0;t<e.length;t++)y(e[t],`focus`,E),y(e[t],`blur`,D),!(H&&!U&&!W)&&(y(e[t],`input`,pe),j(e[t]))}function be(){let e=f(`.field:has(> input[type=password]) > i, a`);for(let t=0;t<e.length;t++)y(e[t],`click`,fe)}function O(e){h(e,`number`)&&!e.value&&(e.value=``),T(e)}function k(e,t){if(t?.key===`Enter`){let t=x(e);if(!h(t,`file`))return;t.click();return}let n=S(e);h(n,`text`)&&(n.value=e.files?Array.from(e.files).map(e=>e.name).join(`, `):``,n.readOnly=!0,y(n,`keydown`,ue,!1),O(n))}function A(e,t){if(t?.key===`Enter`){let t=x(e);if(!h(t,`color`))return;t.click();return}let n=S(e);h(n,`text`)&&(n.readOnly=!0,n.value=e.value,y(n,`keydown`,de,!1),O(n))}function j(e){if(T(e),e.hasAttribute(`rows`))return;let t=oe();e.style.blockSize=`auto`,e.style.blockSize=`${e.scrollHeight-t}px`}function xe(){me(),he(),ge(),_e(),ve(),ye(),be()}function M(e){let t=e.target;!m(t,`input`)&&!m(t,`select`)||(t.type===`range`?(t.focus(),P(t)):N())}function Se(e){window.matchMedia(`(pointer: coarse)`).matches&&e.target.blur()}function N(){let e=document.body,t=f(`.slider > input[type=range]`);t.length?v(e,`input`,M,!1):b(e,`input`,M,!1);for(let e=0;e<t.length;e++)P(t[e])}function P(e){y(e,`change`,Se);let t=C(e),n=d(`span`,t),r=f(`input`,t);if(!r.length||!n)return;let i=oe(),a=p(t,`max`)?0:.25*i*100/r[0].offsetWidth,o=[],s=[];for(let e=0,t=r.length;e<t;e++){let t=parseFloat(r[e].min)||0,n=parseFloat(r[e].max)||100,i=parseFloat(r[e].value)||0,c=(i-t)*100/(n-t),l=a/2-a*c/100;o.push(c+l),s.push(i)}let c=o[0],l=0,u=100-l-c,m=s[0],h=s[1]||0;r.length>1&&(c=Math.abs(o[1]-o[0]),l=o[1]>o[0]?o[0]:o[1],u=100-l-c,h>m&&(m=s[1]||0,h=s[0])),requestAnimationFrame(()=>t.style.cssText=`--_start: ${l}%; --_end: ${u}%; --_value1: '${m}'; --_value2: '${h}';`)}function Ce(){N()}function F(){var e;return(e=document==null?void 0:document.body)!=null&&e.classList.contains(`dark`)?`dark`:`light`}function we(){if(G.light&&G.dark)return G;let e=document.body,t=document.createElement(`body`);t.className=`light`,e.appendChild(t);let n=document.createElement(`body`);n.className=`dark`,e.appendChild(n);let r=getComputedStyle(t),i=getComputedStyle(n),a=`--primary.--on-primary.--primary-container.--on-primary-container.--secondary.--on-secondary.--secondary-container.--on-secondary-container.--tertiary.--on-tertiary.--tertiary-container.--on-tertiary-container.--error.--on-error.--error-container.--on-error-container.--background.--on-background.--surface.--on-surface.--surface-variant.--on-surface-variant.--outline.--outline-variant.--shadow.--scrim.--inverse-surface.--inverse-on-surface.--inverse-primary.--surface-dim.--surface-bright.--surface-container-lowest.--surface-container-low.--surface-container.--surface-container-high.--surface-container-highest`.split(`.`);for(let e=0,t=a.length;e<t;e++)G.light+=a[e]+`:`+r.getPropertyValue(a[e])+`;`,G.dark+=a[e]+`:`+i.getPropertyValue(a[e])+`;`;return e.removeChild(t),e.removeChild(n),G}async function Te(e){let t=globalThis,n=document.body;if(!e||!t.materialDynamicColors)return we();let r=F();return e.light&&e.dark?(G.light=e.light,G.dark=e.dark,n.setAttribute(`style`,e[r]),e):t.materialDynamicColors(e).then(e=>{let t=e=>{let t=``;for(let n=0,r=Object.keys(e),i=r.length;n<i;n++){let i=r[n],a=e[i],o=i.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,`$1-$2`).toLowerCase();t+=`--`+o+`:`+a+`;`}return t};return G.light=t(e.light),G.dark=t(e.dark),n.setAttribute(`style`,G[r]),G})}function I(e){let t=globalThis,n=document.body;if(!n)return e;if(!e)return F();e===`auto`&&(e=c()?`dark`:`light`),n.classList.remove(`light`,`dark`),n.classList.add(e);let r=e===`light`?G.light:G.dark;return t.materialDynamicColors&&n.setAttribute(`style`,r),F()}function L(e){if(e.key===`Escape`){let t=e.currentTarget;R(t,t)}}function Ee(e){(d(`[autofocus]`,e)??e).focus()}function De(e,t){_(ne(e.id),`active`),_(e,`active`),_(t,`active`),e.close(),K.pop();let n=K[K.length-1];n&&n.focus()}async function Oe(e,t,n,r){!m(r,`button`)&&!p(r,`button`)&&!p(r,`chip`)&&g(r,`active`),g(t,`active`),g(e,`active`),n?e.showModal():e.show(),await l(90),n||v(e,`keydown`,L,!1),K.push(e),Ee(e)}function ke(e){let t=e.currentTarget,n=S(t);m(n,`dialog`)&&De(n,t)}async function R(e,t){w();let n=x(t),r=p(t,`active`)||t.open,i=p(t,`modal`);i||b(t,`keydown`,L,!1),p(n,`overlay`)||(n=te({class:`overlay`}),ee(n,t),await l(90)),i||y(n,`click`,ke,!1),r?De(t,n):Oe(t,n,i,e)}function Ae(e){b(document.body,`click`,Ae);let t=e.target,n=f(`menu.active`);for(let r=0;r<n.length;r++)Me(t,n[r],e)}function je(e){setTimeout(()=>{let t=d(`.field > input`,e);t?t.focus():e.focus()},90)}function Me(e,t,n){q&&clearTimeout(q),q=setTimeout(()=>{v(document.body,`click`,Ae),m(document.activeElement,`input`)||w();let r=p(t,`active`),i=n?.target===e,a=!!e.closest(`menu`);if(!r&&a||r&&i){_(t,`active`);return}_(f(`menu.active`),`active`),g(t,`active`),je(t)},90)}function Ne(e){let t=e.currentTarget;_(t,`active`),J&&clearTimeout(J)}function Pe(e,t){w();let n=f(`.snackbar.active`);for(let e=0;e<n.length;e++)_(n[e],`active`);g(e,`active`),y(e,`click`,Ne),J&&clearTimeout(J),t!==-1&&(J=setTimeout(()=>{_(e,`active`)},t??6e3))}function Fe(e){let t=C(e);t&&_(f(`:scope > .page`,t),`active`),g(e,`active`)}function Ie(e){Le(e)}function Le(e){let t=e.currentTarget,n=t.getBoundingClientRect(),r=Math.max(n.width,n.height),i=r/2,a=e.clientX-n.left-i,o=e.clientY-n.top-i,s=document.createElement(`div`);s.className=`ripple-js`;let c=document.createElement(`div`);c.style.inlineSize=c.style.blockSize=`${r}px`,c.style.left=`${a}px`,c.style.top=`${o}px`,y(c,`animationend`,()=>{s.remove()}),s.appendChild(c),t.appendChild(s)}function Re(){let e=f(`.slow-ripple, .ripple, .fast-ripple`);for(let t=0;t<e.length;t++)y(e[t],`pointerdown`,Ie)}function ze(e){let t=e.target;m(t,`progress`)?Be(t):Ve()}function Be(e){requestAnimationFrame(()=>{if(!e.hasAttribute(`value`)&&!e.hasAttribute(`max`)){let t=p(e,`circle`)?`50`:`100`;e.style.setProperty(`--_value`,t),e.setAttribute(`value`,t),e.setAttribute(`max`,`100`),e.classList.add(`indeterminate`)}else e.style.setProperty(`--_value`,String(e.value))})}function Ve(){if(H&&!U&&!W)return;let e=document.body,t=f(`progress`);t.length?v(e,`input`,ze,!1):b(e,`input`,ze,!1);for(let e=0;e<t.length;e++)Be(t[e])}function He(){X&&clearTimeout(X),X=setTimeout(async()=>await qe(),180)}async function z(e,t,n,r){if(!t&&(t=d(e.getAttribute(`data-ui`)),!t)){e.classList.toggle(`active`);return}if(ie(e),m(t,`dialog`)){requestAnimationFrame(()=>R(e,t));return}if(m(t,`menu`)){requestAnimationFrame(()=>Me(e,t,r));return}if(p(t,`snackbar`)){requestAnimationFrame(()=>Pe(t,n));return}if(p(t,`page`)){requestAnimationFrame(()=>Fe(t));return}if(p(t,`active`)){_(e,`active`),_(t,`active`);return}g(t,`active`)}function Ue(e){z(e.currentTarget,null,null,e)}function We(e){e.key===`Enter`&&z(e.currentTarget,null,null,e)}function Ge(){Y.ui||Z||!Y.MutationObserver||(Z=new MutationObserver(He),Z.observe(document.body,{childList:!0,subtree:!0}),He())}function Ke(){let e=f(`[data-ui]`);for(let t=0,n=e.length;t<n;t++)y(e[t],`click`,Ue),m(e[t],`a`)&&!e[t].getAttribute(`href`)&&y(e[t],`keydown`,We)}function qe(e,t){if(e){if(e===`setup`){Ge();return}if(e===`guid`)return u();if(e===`mode`)return I(t);if(e===`theme`)return Te(t);let n=d(e);if(!n)return;z(n,n,t)}Ke(),xe(),Ce(),Re(),Ve()}function Je(){if(Y.ui)return;let e=Y.document?.body;e&&!e.classList.contains(`dark`)&&!e.classList.contains(`light`)&&I(`auto`),Ge(),Y.ui=qe}function Ye(){document.addEventListener(`click`,e=>{let t=e.target.closest(`summary`);if(!t)return;let n=t.parentElement;if(!(!n||n.tagName!==`DETAILS`)){if(n.dataset.animating){e.preventDefault();return}if(!n.hasAttribute(`open`)&&n.hasAttribute(`name`)){let e=n.getAttribute(`name`);document.querySelectorAll(`details[name="${e}"][open]`).forEach(t=>{t!==n&&(t.removeAttribute(`name`),Xe(t,!1).then(()=>{t.setAttribute(`name`,e)}))})}e.preventDefault(),Xe(n,!n.hasAttribute(`open`))}})}function Xe(e,t){e.dataset.animating=`true`;let n=300;e.classList.contains(`fast-animate`)?n=150:e.classList.contains(`slow-animate`)?n=500:e.classList.contains(`no-animate`)&&(n=0);let r=`${e.offsetHeight}px`;t?e.setAttribute(`open`,``):e.removeAttribute(`open`);let i=`${e.offsetHeight}px`;t||(e.setAttribute(`open`,``),e.classList.add(`is-closing`));let a=e.animate({height:[r,i]},{duration:n,easing:`ease-out`});return e.style.overflow=`hidden`,new Promise(n=>{a.onfinish=()=>{e.style.height=``,e.style.overflow=``,t||(e.removeAttribute(`open`),e.classList.remove(`is-closing`)),delete e.dataset.animating,n()},a.oncancel=()=>{e.style.height=``,e.style.overflow=``,t||e.classList.remove(`is-closing`),delete e.dataset.animating,n()}})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Ze=e((()=>{B=[],V=new WeakSet,H=navigator.userAgent.includes(`Chrome`),navigator.userAgent.includes(`Firefox`),navigator.userAgent.includes(`Safari`),navigator.userAgent.includes(`Windows`),U=navigator.userAgent.includes(`Macintosh`),navigator.userAgent.includes(`Linux`),navigator.userAgent.includes(`Android`),W=/iPad|iPhone|iPod/.test(navigator.userAgent),G={light:``,dark:``},K=[],Y=globalThis,Je(),Ye()})),Qe,Q,$;e((()=>{r(),t(),Ze(),a(),s(),Qe={title:`Demo`,parameters:{componentSubtitle:`Automatically fetch & display properties of STAC files`,layout:`fullscreen`}},Q={render:()=>i`
    <nav class="small-padding surface-container">
      <div class="max">
        <p>EOxElements Demo</p>
      </div>
      <label class="switch icon small">
        <input
          type="checkbox"
          .checked=${window.ui(`mode`)===`dark`}
          @input=${e=>{window.ui(`mode`,e.target.checked?`dark`:`light`)}}
        />
        <span>
          <i class="mdi mdi-brightness-7"></i>
          <i class="mdi mdi-brightness-2"></i>
        </span>
      </label>
    </nav>
    <eox-layout gap="8" fill-grid row-height="200px" column-width="200px">
      <eox-layout-item w="2">
        <eox-chart
          style="height: 100%"
          .spec=${{$schema:`https://vega.github.io/schema/vega-lite/v5.json`,description:`A chart visualizing data fetched from a geoDB endpoint`,data:{url:`https://xcube-geodb.brockmann-consult.de/gtif/f0ad1e25-98fa-4b82-9228-815ab24f5dd1/GTIF_no2_data?and=(date.gte.2022-01-01,date.lte.2022-01-05)&select=no2_ec_station_ppbv,date`,parse:{no2_ec_station_ppbv:`number`,date:`date`}},encoding:{x:{field:`date`,type:`temporal`}},layer:[{encoding:{y:{field:`no2_ec_station_ppbv`,type:`quantitative`}},layer:[{mark:`line`},{transform:[{filter:{param:`hover`,empty:!1}}],mark:`point`}]},{mark:`rule`,encoding:{opacity:{condition:{value:.3,param:`hover`,empty:!1},value:0},tooltip:[{field:`no2_ec_station_ppbv`,type:`quantitative`}]},params:[{name:`hover`,select:{type:`point`,fields:[`date`],nearest:!0,on:`pointerover`,clear:`pointerout`}}]}]}}
        ></eox-chart>
      </eox-layout-item>
      <eox-layout-item>
        <eox-drawtools multiple-features show-list></eox-drawtools>
      </eox-layout-item>
      <eox-layout-item>
        <eox-geosearch
          style="grid-column: 6 / span 3; pointer-events: all"
        ></eox-geosearch>
        <eox-geosearch
          small
          button
          style="grid-column: 6 / span 3; pointer-events: all"
        ></eox-geosearch>
      </eox-layout-item>
      <eox-layout-item h="2">
        <eox-itemfilter
          .titleProperty=${`title`}
          .aggregateResults=${`themes`}
          .items=${o}
          .enableResultAction=${!0}
          .imageProperty=${`img`}
          .enableHighlighting=${!0}
          .filterProperties=${[{keys:[`title`,`themes`],title:`Search`,type:`text`,placeholder:`Type Something...`,expanded:!0,validation:{pattern:`.{0,10}`,message:`Maximum 10 characters`}},{key:`completed`,title:`Completed`,type:`multiselect`,filterKeys:[!0,!1]},{key:`userId`,title:`User ID`,type:`multiselect`,filterKeys:[1,2,3]}]}
        ></eox-itemfilter>
      </eox-layout-item>
      <eox-layout-item h="2">
        <eox-layercontrol .toolsAsList=${!0}></eox-layercontrol>
      </eox-layout-item>
      <eox-layout-item w="2" h="2">
        <eox-map
          .controls=${{Zoom:{},Attribution:{},FullScreen:{},OverviewMap:{layers:[{type:`Tile`,properties:{id:`overviewMap`},source:{type:`OSM`}}]}}}
          .layers=${[{type:`Group`,properties:{id:`group1`,title:`Background Layers`},layers:[{type:`Tile`,source:{type:`OSM`},properties:{title:`OSM`}}]},{type:`WebGLTile`,style:{variables:{vmin:2,vmax:5,settlementDistance:0},color:[`case`,[`all`,[`>`,[`band`,1],1],[`>=`,[`band`,2],[`var`,`settlementDistance`]]],[`interpolate`,[`linear`],[`/`,[`-`,[`band`,1],[`var`,`vmin`]],[`-`,[`var`,`vmax`],[`var`,`vmin`]]],0,[68,1,84,1],.067,[70,23,103,1],.133,[71,44,122,1],.2,[65,63,131,1],.266,[59,81,139,1],.333,[52,97,141,1],.4,[44,113,142,1],.467,[39,129,142,1],.533,[33,144,141,1],.6,[39,173,129,1],.666,[66,187,114,1],.733,[92,200,99,1],.8,[131,210,75,1],.867,[170,220,50,1],.933,[212,226,44,1],1,[253,231,37,1]],[`color`,0,0,0,0]]},properties:{id:Symbol(),title:`Solar Energy COG Example`,layerConfig:{type:`style`,legend:{title:`Global horizontal irradiation`,range:[`rgba(253, 231, 37, 1)`,`rgba(33, 144, 141, 1)`,`rgba(68, 1, 84, 1)`],domainProperties:[`vmin`,`vmax`]},schema:{type:`object`,title:`Data configuration`,properties:{settlementDistance:{type:`number`,minimum:0,maximum:5e3,format:`range`,default:0},vminmax:{title:`Global horizontal irradiation`,description:`[kWh/m²/day]`,type:`object`,properties:{vmin:{type:`number`,minimum:0,maximum:5,format:`range`,default:2},vmax:{type:`number`,minimum:0,maximum:5,format:`range`,default:5}},format:`minmax`}}}}},source:{type:`GeoTIFF`,normalize:!1,sources:[{url:`https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/v2/SolarPowerPotential_Annual_COG_clipped_3857_fixed.tif`},{url:`https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/WSF_EucDist_Austria_3857_COG_fix.tif`}]}},{type:`Tile`,properties:{id:`AWS_NO2-VISUALISATION`,name:`NO2 Visualisation`,timeControlValues:[{date:`2022-12-05`,cloudCoverage:20},{date:`2022-12-06`,cloudCoverage:18},{date:`2022-12-07`,cloudCoverage:22},{date:`2022-12-08`,cloudCoverage:25},{date:`2022-12-09`,cloudCoverage:19},{date:`2022-12-10`,cloudCoverage:16},{date:`2022-12-11`,cloudCoverage:21},{date:`2022-12-12`,cloudCoverage:15},{date:`2022-12-19`,cloudCoverage:35},{date:`2022-12-26`,cloudCoverage:8},{date:`2023-01-16`,cloudCoverage:42},{date:`2023-01-17`,cloudCoverage:38},{date:`2023-01-18`,cloudCoverage:45},{date:`2023-01-19`,cloudCoverage:41},{date:`2023-01-20`,cloudCoverage:39},{date:`2023-01-21`,cloudCoverage:43},{date:`2023-01-22`,cloudCoverage:37},{date:`2023-01-23`,cloudCoverage:28},{date:`2023-01-24`,cloudCoverage:31},{date:`2023-01-25`,cloudCoverage:26},{date:`2023-01-26`,cloudCoverage:29},{date:`2023-01-27`,cloudCoverage:24},{date:`2023-01-28`,cloudCoverage:32},{date:`2023-01-29`,cloudCoverage:27},{date:`2023-01-30`,cloudCoverage:12},{date:`2023-01-31`,cloudCoverage:14},{date:`2023-02-01`,cloudCoverage:11},{date:`2023-02-02`,cloudCoverage:16},{date:`2023-02-03`,cloudCoverage:13},{date:`2023-02-04`,cloudCoverage:18},{date:`2023-02-05`,cloudCoverage:15},{date:`2023-02-06`,cloudCoverage:55},{date:`2023-02-13`,cloudCoverage:33},{date:`2023-02-14`,cloudCoverage:36},{date:`2023-02-15`,cloudCoverage:30},{date:`2023-02-16`,cloudCoverage:38},{date:`2023-02-17`,cloudCoverage:34},{date:`2023-02-18`,cloudCoverage:31},{date:`2023-02-19`,cloudCoverage:35},{date:`2023-02-20`,cloudCoverage:29},{date:`2023-02-21`,cloudCoverage:32},{date:`2023-02-22`,cloudCoverage:27},{date:`2023-02-23`,cloudCoverage:33},{date:`2023-02-24`,cloudCoverage:25},{date:`2023-02-25`,cloudCoverage:28},{date:`2023-02-26`,cloudCoverage:22},{date:`2023-02-27`,cloudCoverage:18},{date:`2023-03-06`,cloudCoverage:47},{date:`2023-03-13`,cloudCoverage:25},{date:`2023-03-14`,cloudCoverage:28},{date:`2023-03-15`,cloudCoverage:23},{date:`2023-03-16`,cloudCoverage:26},{date:`2023-03-17`,cloudCoverage:21},{date:`2023-03-18`,cloudCoverage:24},{date:`2023-03-19`,cloudCoverage:19},{date:`2023-03-20`,cloudCoverage:9},{date:`2023-03-27`,cloudCoverage:38},{date:`2023-04-03`,cloudCoverage:22},{date:`2023-04-10`,cloudCoverage:51},{date:`2023-04-17`,cloudCoverage:14},{date:`2023-04-24`,cloudCoverage:29}],timeControlProperty:`TIME`},source:{type:`TileWMS`,url:`https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54`,params:{LAYERS:`AWS_NO2-VISUALISATION`,TIME:`2022-12-05`},crossOrigin:`anonymous`}},{type:`Vector`,properties:{title:`Regions`,id:`regions`,description:`Ecological regions of the earth.`},source:{type:`Vector`,url:`https://openlayers.org/data/vector/ecoregions.json`,format:`GeoJSON`,attributions:`Regions: @ openlayers.org`}}]}
          .zoomExtent=${[-133286.98347565567,5318575.418328699,2215737.538674842,7354396.67085913]}
          style="width: 100%; height: 100%;"
        ></eox-map>
      </eox-layout-item>
      <eox-layout-item h="3">
        <eox-stacinfo
          .for=${`${window.location.href.split(`iframe.html`)[0]}/collection.json`}
          .header=${[`title`]}
          .tags=${[`tags`]}
          .body=${[`satellite`,`sensor`,`agency`,`extent`]}
          .featured=${[`description`,`providers`,`assets`,`links`]}
          .footer=${[`sci:citation`]}
        ></eox-stacinfo>
      </eox-layout-item>
      <eox-layout-item w="3" h="2">
        <eox-timecontrol .for=${`eox-map`}>
          <div style="display: flex; gap: 10px;align-items: center;">
            <eox-timecontrol-date .navigation=${!0}></eox-timecontrol-date>
            <eox-timecontrol-picker
              .showDots=${!0}
              .popup=${!0}
            ></eox-timecontrol-picker>
          </div>
          <eox-timecontrol-slider
            style="width: 600px;"
          ></eox-timecontrol-slider>
          <eox-timecontrol-timeline
            style="margin-top: 10px;"
          ></eox-timecontrol-timeline>
        </eox-timecontrol>
      </eox-layout-item>
    </eox-layout>
    <style>
      ${n} eox-layout {
        padding: 8px !important;
      }
      eox-layout-item {
        border: 1px solid lightgrey;
        border-radius: 8px;
        background: var(--surface-container-lowest);
        overflow-y: auto;
        padding: 0.5rem;
      }
    </style>
  `},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <nav class="small-padding surface-container">
      <div class="max">
        <p>EOxElements Demo</p>
      </div>
      <label class="switch icon small">
        <input
          type="checkbox"
          .checked=\${window.ui("mode") === "dark"}
          @input=\${e => {
    window.ui("mode", e.target.checked ? "dark" : "light");
  }}
        />
        <span>
          <i class="mdi mdi-brightness-7"></i>
          <i class="mdi mdi-brightness-2"></i>
        </span>
      </label>
    </nav>
    <eox-layout gap="8" fill-grid row-height="200px" column-width="200px">
      <eox-layout-item w="2">
        <eox-chart
          style="height: 100%"
          .spec=\${{
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "A chart visualizing data fetched from a geoDB endpoint",
    data: {
      url: "https://xcube-geodb.brockmann-consult.de/gtif/f0ad1e25-98fa-4b82-9228-815ab24f5dd1/GTIF_no2_data?and=(date.gte.2022-01-01,date.lte.2022-01-05)&select=no2_ec_station_ppbv,date",
      parse: {
        no2_ec_station_ppbv: "number",
        date: "date"
      }
    },
    encoding: {
      x: {
        field: "date",
        type: "temporal"
      }
    },
    layer: [{
      encoding: {
        y: {
          field: "no2_ec_station_ppbv",
          type: "quantitative"
        }
      },
      layer: [{
        mark: "line"
      }, {
        transform: [{
          filter: {
            param: "hover",
            empty: false
          }
        }],
        mark: "point"
      }]
    }, {
      mark: "rule",
      encoding: {
        opacity: {
          condition: {
            value: 0.3,
            param: "hover",
            empty: false
          },
          value: 0
        },
        tooltip: [{
          field: "no2_ec_station_ppbv",
          type: "quantitative"
        }]
      },
      params: [{
        name: "hover",
        select: {
          type: "point",
          fields: ["date"],
          nearest: true,
          on: "pointerover",
          clear: "pointerout"
        }
      }]
    }]
  }}
        ></eox-chart>
      </eox-layout-item>
      <eox-layout-item>
        <eox-drawtools multiple-features show-list></eox-drawtools>
      </eox-layout-item>
      <eox-layout-item>
        <eox-geosearch
          style="grid-column: 6 / span 3; pointer-events: all"
        ></eox-geosearch>
        <eox-geosearch
          small
          button
          style="grid-column: 6 / span 3; pointer-events: all"
        ></eox-geosearch>
      </eox-layout-item>
      <eox-layout-item h="2">
        <eox-itemfilter
          .titleProperty=\${"title"}
          .aggregateResults=\${"themes"}
          .items=\${items}
          .enableResultAction=\${true}
          .imageProperty=\${"img"}
          .enableHighlighting=\${true}
          .filterProperties=\${[{
    keys: ["title", "themes"],
    title: "Search",
    type: "text",
    placeholder: "Type Something...",
    expanded: true,
    validation: {
      pattern: ".{0,10}",
      message: "Maximum 10 characters"
    }
  }, {
    key: "completed",
    title: "Completed",
    type: "multiselect",
    filterKeys: [true, false]
  }, {
    key: "userId",
    title: "User ID",
    type: "multiselect",
    filterKeys: [1, 2, 3]
  }]}
        ></eox-itemfilter>
      </eox-layout-item>
      <eox-layout-item h="2">
        <eox-layercontrol .toolsAsList=\${true}></eox-layercontrol>
      </eox-layout-item>
      <eox-layout-item w="2" h="2">
        <eox-map
          .controls=\${{
    Zoom: {},
    Attribution: {},
    FullScreen: {},
    OverviewMap: {
      layers: [{
        type: "Tile",
        properties: {
          id: "overviewMap"
        },
        source: {
          type: "OSM"
        }
      }]
    }
  }}
          .layers=\${[{
    type: "Group",
    properties: {
      id: "group1",
      title: "Background Layers"
    },
    layers: [{
      type: "Tile",
      source: {
        type: "OSM"
      },
      properties: {
        title: "OSM"
      }
    }]
  }, {
    type: "WebGLTile",
    style: {
      variables: {
        vmin: 2,
        vmax: 5,
        settlementDistance: 0
      },
      color: ["case", ["all", [">", ["band", 1], 1], [">=", ["band", 2], ["var", "settlementDistance"]]], ["interpolate", ["linear"], ["/", ["-", ["band", 1], ["var", "vmin"]], ["-", ["var", "vmax"], ["var", "vmin"]]], 0, [68, 1, 84, 1], 0.067, [70, 23, 103, 1], 0.133, [71, 44, 122, 1], 0.2, [65, 63, 131, 1], 0.266, [59, 81, 139, 1], 0.333, [52, 97, 141, 1], 0.4, [44, 113, 142, 1], 0.467, [39, 129, 142, 1], 0.533, [33, 144, 141, 1], 0.6, [39, 173, 129, 1], 0.666, [66, 187, 114, 1], 0.733, [92, 200, 99, 1], 0.8, [131, 210, 75, 1], 0.867, [170, 220, 50, 1], 0.933, [212, 226, 44, 1], 1, [253, 231, 37, 1]], ["color", 0, 0, 0, 0]]
    },
    properties: {
      id: Symbol(),
      title: "Solar Energy COG Example",
      layerConfig: {
        type: "style",
        legend: {
          title: "Global horizontal irradiation",
          range: ["rgba(253, 231, 37, 1)", "rgba(33, 144, 141, 1)", "rgba(68, 1, 84, 1)"],
          domainProperties: ["vmin", "vmax"]
        },
        schema: {
          type: "object",
          title: "Data configuration",
          properties: {
            settlementDistance: {
              type: "number",
              minimum: 0,
              maximum: 5000,
              format: "range",
              default: 0
            },
            vminmax: {
              title: "Global horizontal irradiation",
              description: "[kWh/m²/day]",
              type: "object",
              properties: {
                vmin: {
                  type: "number",
                  minimum: 0,
                  maximum: 5,
                  format: "range",
                  default: 2
                },
                vmax: {
                  type: "number",
                  minimum: 0,
                  maximum: 5,
                  format: "range",
                  default: 5
                }
              },
              format: "minmax"
            }
          }
        }
      }
    },
    source: {
      type: "GeoTIFF",
      normalize: false,
      sources: [{
        url: "https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/v2/SolarPowerPotential_Annual_COG_clipped_3857_fixed.tif"
      }, {
        url: "https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/WSF_EucDist_Austria_3857_COG_fix.tif"
      }]
    }
  }, {
    type: "Tile",
    properties: {
      id: "AWS_NO2-VISUALISATION",
      name: "NO2 Visualisation",
      timeControlValues: [{
        date: "2022-12-05",
        cloudCoverage: 20
      }, {
        date: "2022-12-06",
        cloudCoverage: 18
      }, {
        date: "2022-12-07",
        cloudCoverage: 22
      }, {
        date: "2022-12-08",
        cloudCoverage: 25
      }, {
        date: "2022-12-09",
        cloudCoverage: 19
      }, {
        date: "2022-12-10",
        cloudCoverage: 16
      }, {
        date: "2022-12-11",
        cloudCoverage: 21
      }, {
        date: "2022-12-12",
        cloudCoverage: 15
      }, {
        date: "2022-12-19",
        cloudCoverage: 35
      }, {
        date: "2022-12-26",
        cloudCoverage: 8
      }, {
        date: "2023-01-16",
        cloudCoverage: 42
      }, {
        date: "2023-01-17",
        cloudCoverage: 38
      }, {
        date: "2023-01-18",
        cloudCoverage: 45
      }, {
        date: "2023-01-19",
        cloudCoverage: 41
      }, {
        date: "2023-01-20",
        cloudCoverage: 39
      }, {
        date: "2023-01-21",
        cloudCoverage: 43
      }, {
        date: "2023-01-22",
        cloudCoverage: 37
      }, {
        date: "2023-01-23",
        cloudCoverage: 28
      }, {
        date: "2023-01-24",
        cloudCoverage: 31
      }, {
        date: "2023-01-25",
        cloudCoverage: 26
      }, {
        date: "2023-01-26",
        cloudCoverage: 29
      }, {
        date: "2023-01-27",
        cloudCoverage: 24
      }, {
        date: "2023-01-28",
        cloudCoverage: 32
      }, {
        date: "2023-01-29",
        cloudCoverage: 27
      }, {
        date: "2023-01-30",
        cloudCoverage: 12
      }, {
        date: "2023-01-31",
        cloudCoverage: 14
      }, {
        date: "2023-02-01",
        cloudCoverage: 11
      }, {
        date: "2023-02-02",
        cloudCoverage: 16
      }, {
        date: "2023-02-03",
        cloudCoverage: 13
      }, {
        date: "2023-02-04",
        cloudCoverage: 18
      }, {
        date: "2023-02-05",
        cloudCoverage: 15
      }, {
        date: "2023-02-06",
        cloudCoverage: 55
      }, {
        date: "2023-02-13",
        cloudCoverage: 33
      }, {
        date: "2023-02-14",
        cloudCoverage: 36
      }, {
        date: "2023-02-15",
        cloudCoverage: 30
      }, {
        date: "2023-02-16",
        cloudCoverage: 38
      }, {
        date: "2023-02-17",
        cloudCoverage: 34
      }, {
        date: "2023-02-18",
        cloudCoverage: 31
      }, {
        date: "2023-02-19",
        cloudCoverage: 35
      }, {
        date: "2023-02-20",
        cloudCoverage: 29
      }, {
        date: "2023-02-21",
        cloudCoverage: 32
      }, {
        date: "2023-02-22",
        cloudCoverage: 27
      }, {
        date: "2023-02-23",
        cloudCoverage: 33
      }, {
        date: "2023-02-24",
        cloudCoverage: 25
      }, {
        date: "2023-02-25",
        cloudCoverage: 28
      }, {
        date: "2023-02-26",
        cloudCoverage: 22
      }, {
        date: "2023-02-27",
        cloudCoverage: 18
      }, {
        date: "2023-03-06",
        cloudCoverage: 47
      }, {
        date: "2023-03-13",
        cloudCoverage: 25
      }, {
        date: "2023-03-14",
        cloudCoverage: 28
      }, {
        date: "2023-03-15",
        cloudCoverage: 23
      }, {
        date: "2023-03-16",
        cloudCoverage: 26
      }, {
        date: "2023-03-17",
        cloudCoverage: 21
      }, {
        date: "2023-03-18",
        cloudCoverage: 24
      }, {
        date: "2023-03-19",
        cloudCoverage: 19
      }, {
        date: "2023-03-20",
        cloudCoverage: 9
      }, {
        date: "2023-03-27",
        cloudCoverage: 38
      }, {
        date: "2023-04-03",
        cloudCoverage: 22
      }, {
        date: "2023-04-10",
        cloudCoverage: 51
      }, {
        date: "2023-04-17",
        cloudCoverage: 14
      }, {
        date: "2023-04-24",
        cloudCoverage: 29
      }],
      timeControlProperty: "TIME"
    },
    source: {
      type: "TileWMS",
      url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
      params: {
        LAYERS: "AWS_NO2-VISUALISATION",
        TIME: "2022-12-05"
      },
      crossOrigin: "anonymous"
    }
  }, {
    type: "Vector",
    properties: {
      title: "Regions",
      id: "regions",
      description: "Ecological regions of the earth."
    },
    source: {
      type: "Vector",
      url: "https://openlayers.org/data/vector/ecoregions.json",
      format: "GeoJSON",
      attributions: "Regions: @ openlayers.org"
    }
  }]}
          .zoomExtent=\${[-133286.98347565567, 5318575.418328699, 2215737.538674842, 7354396.67085913]}
          style="width: 100%; height: 100%;"
        ></eox-map>
      </eox-layout-item>
      <eox-layout-item h="3">
        <eox-stacinfo
          .for=\${\`\${window.location.href.split("iframe.html")[0]}/collection.json\`}
          .header=\${["title"]}
          .tags=\${["tags"]}
          .body=\${["satellite", "sensor", "agency", "extent"]}
          .featured=\${["description", "providers", "assets", "links"]}
          .footer=\${["sci:citation"]}
        ></eox-stacinfo>
      </eox-layout-item>
      <eox-layout-item w="3" h="2">
        <eox-timecontrol .for=\${"eox-map"}>
          <div style="display: flex; gap: 10px;align-items: center;">
            <eox-timecontrol-date .navigation=\${true}></eox-timecontrol-date>
            <eox-timecontrol-picker
              .showDots=\${true}
              .popup=\${true}
            ></eox-timecontrol-picker>
          </div>
          <eox-timecontrol-slider
            style="width: 600px;"
          ></eox-timecontrol-slider>
          <eox-timecontrol-timeline
            style="margin-top: 10px;"
          ></eox-timecontrol-timeline>
        </eox-timecontrol>
      </eox-layout-item>
    </eox-layout>
    <style>
      \${eoxStyle} eox-layout {
        padding: 8px !important;
      }
      eox-layout-item {
        border: 1px solid lightgrey;
        border-radius: 8px;
        background: var(--surface-container-lowest);
        overflow-y: auto;
        padding: 0.5rem;
      }
    </style>
  \`
}`,...Q.parameters?.docs?.source}}},$=[`KitchenSink`]}))();export{Q as KitchenSink,$ as __namedExportsOrder,Qe as default};