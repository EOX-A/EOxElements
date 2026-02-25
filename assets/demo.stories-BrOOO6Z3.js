import{m as xe,x as Ce}from"./iframe-DtBl5b7O.js";import"./color-legend-element-DdAGR26e.js";import{i as be}from"./testItems-BFT0QiSi.js";import"./preload-helper-PPVm8Dsz.js";const H=[],K=new WeakSet,J=navigator.userAgent.includes("Chrome");navigator.userAgent.includes("Firefox");navigator.userAgent.includes("Safari");navigator.userAgent.includes("Windows");const X=navigator.userAgent.includes("Macintosh");navigator.userAgent.includes("Linux");navigator.userAgent.includes("Android");const Q=/iPad|iPhone|iPod/.test(navigator.userAgent);function we(){return window?.matchMedia("(prefers-color-scheme: dark)").matches}async function ee(e){await new Promise(t=>setTimeout(t,e))}function ke(){return"fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}function f(e,t){try{return typeof e=="string"?(t??document).querySelector(e):e}catch{return null}}function l(e,t){try{return typeof e=="string"?(t??document).querySelectorAll(e):e??H}catch{return H}}function s(e,t){return e?.classList.contains(t)??!1}function p(e,t){var n;return((n=e?.tagName)==null?void 0:n.toLowerCase())===t}function k(e,t){var n;return((n=e?.type)==null?void 0:n.toLowerCase())===t}function v(e,t){if(e instanceof NodeList)for(let n=0;n<e.length;n++)e[n].classList.add(t);else e?.classList.add(t)}function g(e,t){if(e instanceof NodeList)for(let n=0;n<e.length;n++)e[n].classList.remove(t);else e?.classList.remove(t)}function $(e,t,n,o=!0){e!=null&&e.addEventListener&&e.addEventListener(t,n,o)}function r(e,t,n,o=!0){Ee(e),$(e,t,n,o)}function O(e,t,n,o=!0){e!=null&&e.removeEventListener&&e.removeEventListener(t,n,o)}function $e(e,t){var n;(n=t?.parentNode)==null||n.insertBefore(e,t)}function P(e){return e?.previousElementSibling}function z(e){return e?.nextElementSibling}function _(e){return e?.parentElement}function _e(e){const t=document.createElement("div");for(let n=0,o=Object.keys(e),c=o.length;n<c;n++){const i=o[n],a=e[i];t.setAttribute(i,a)}return t}function F(){var e;(e=document.activeElement)==null||e.blur()}function Se(e){return l('[data-ui="#'+e+'"]')}function Ae(e){return f('[data-ui="#'+e+'"]')}function Te(e){e.id&&s(e,"page")&&(e=Ae(e.id)??e);const t=_(e);if(!s(t,"tabs")&&!s(t,"tabbed")&&!p(t,"nav"))return;const n=l("a",t);for(let o=0;o<n.length;o++)g(n[o],"active");!p(e,"button")&&!s(e,"button")&&!s(e,"chip")&&v(e,"active")}function Ee(e){K.has(e)||K.add(e)}function te(){const e=getComputedStyle(document.documentElement).getPropertyValue("--size")||"16px";return e.includes("%")?parseInt(e)*16/100:e.includes("em")?parseInt(e)*16:parseInt(e)}function ne(e){e.placeholder||(e.placeholder=" ")}function Oe(e){const t=e.currentTarget,n=_(t),o=f("input:not([type=file], [type=checkbox], [type=radio]), select, textarea",n);o&&o.focus()}function G(e){const t=e.currentTarget;S(t)}function N(e){const t=e.currentTarget;S(t)}function Le(e){const t=e.currentTarget;V(t)}function Ie(e){const t=e.currentTarget;W(t)}function Me(e){const t=e.currentTarget;V(t,e)}function De(e){const t=e.currentTarget;W(t,e)}function Pe(e){var t;const n=e.currentTarget,o=f("input",_(n));o&&(t=n.textContent)!=null&&t.includes("visibility")&&(o.type=o.type==="password"?"text":"password")}function ze(e){const t=e.currentTarget;oe(t)}function Fe(){const e=l(".field > label");for(let t=0;t<e.length;t++)r(e[t],"click",Oe)}function Ge(){const e=l(".field > input:not([type=file], [type=color], [type=range])");for(let t=0;t<e.length;t++)r(e[t],"focus",G),r(e[t],"blur",N),S(e[t])}function Ne(){const e=l(".field > select");for(let t=0;t<e.length;t++)r(e[t],"focus",G),r(e[t],"blur",N)}function Ve(){const e=l(".field > input[type=file]");for(let t=0;t<e.length;t++)r(e[t],"change",Le),V(e[t])}function We(){const e=l(".field > input[type=color]");for(let t=0;t<e.length;t++)r(e[t],"change",Ie),W(e[t])}function je(){const e=l(".field > textarea");for(let t=0;t<e.length;t++)r(e[t],"focus",G),r(e[t],"blur",N),!(J&&!X&&!Q)&&(r(e[t],"input",ze),oe(e[t]))}function qe(){const e=l("input[type=password] ~ :is(i, a)");for(let t=0;t<e.length;t++)r(e[t],"click",Pe)}function S(e){k(e,"number")&&!e.value&&(e.value=""),ne(e)}function V(e,t){if(t?.key==="Enter"){const o=P(e);if(!k(o,"file"))return;o.click();return}const n=z(e);k(n,"text")&&(n.value=e.files?Array.from(e.files).map(o=>o.name).join(", "):"",n.readOnly=!0,r(n,"keydown",Me,!1),S(n))}function W(e,t){if(t?.key==="Enter"){const o=P(e);if(!k(o,"color"))return;o.click();return}const n=z(e);k(n,"text")&&(n.readOnly=!0,n.value=e.value,r(n,"keydown",De,!1),S(n))}function oe(e){if(ne(e),e.hasAttribute("rows"))return;const t=te();e.style.blockSize="auto",e.style.blockSize=`${e.scrollHeight-t}px`}function Re(){Fe(),Ge(),Ne(),Ve(),We(),je(),qe()}function U(e){const t=e.target;!p(t,"input")&&!p(t,"select")||(t.type==="range"?(t.focus(),re(t)):ae())}function Be(e){window.matchMedia("(pointer: coarse)").matches&&e.target.blur()}function ae(){const e=document.body,t=l(".slider > input[type=range]");t.length?$(e,"input",U,!1):O(e,"input",U,!1);for(let n=0;n<t.length;n++)re(t[n])}function re(e){r(e,"change",Be);const t=_(e),n=f("span",t),o=l("input",t);if(!o.length||!n)return;const c=te(),i=s(t,"max")?0:.25*c*100/o[0].offsetWidth,a=[],u=[];for(let h=0,fe=o.length;h<fe;h++){const q=parseFloat(o[h].min)||0,ye=parseFloat(o[h].max)||100,R=parseFloat(o[h].value)||0,B=(R-q)*100/(ye-q),he=i/2-i*B/100;a.push(B+he),u.push(R)}let d=a[0],y=0,A=100-y-d,x=u[0],C=u[1]||0;o.length>1&&(d=Math.abs(a[1]-a[0]),y=a[1]>a[0]?a[0]:a[1],A=100-y-d,C>x&&(x=u[1]||0,C=u[0])),requestAnimationFrame(()=>t.style.cssText=`--_start: ${y}%; --_end: ${A}%; --_value1: '${x}'; --_value2: '${C}';`)}function He(){ae()}const m={light:"",dark:""};function D(){var e;return(e=document?.body)!=null&&e.classList.contains("dark")?"dark":"light"}function Ke(){if(m.light&&m.dark)return m;const e=document.body,t=document.createElement("body");t.className="light",e.appendChild(t);const n=document.createElement("body");n.className="dark",e.appendChild(n);const o=getComputedStyle(t),c=getComputedStyle(n),i=["--primary","--on-primary","--primary-container","--on-primary-container","--secondary","--on-secondary","--secondary-container","--on-secondary-container","--tertiary","--on-tertiary","--tertiary-container","--on-tertiary-container","--error","--on-error","--error-container","--on-error-container","--background","--on-background","--surface","--on-surface","--surface-variant","--on-surface-variant","--outline","--outline-variant","--shadow","--scrim","--inverse-surface","--inverse-on-surface","--inverse-primary","--surface-dim","--surface-bright","--surface-container-lowest","--surface-container-low","--surface-container","--surface-container-high","--surface-container-highest"];for(let a=0,u=i.length;a<u;a++)m.light+=i[a]+":"+o.getPropertyValue(i[a])+";",m.dark+=i[a]+":"+c.getPropertyValue(i[a])+";";return e.removeChild(t),e.removeChild(n),m}async function Ue(e){const t=globalThis,n=document.body;if(!e||!t.materialDynamicColors)return Ke();const o=D();return e.light&&e.dark?(m.light=e.light,m.dark=e.dark,n.setAttribute("style",e[o]),e):t.materialDynamicColors(e).then(c=>{const i=a=>{let u="";for(let d=0,y=Object.keys(a),A=y.length;d<A;d++){const x=y[d],C=a[x],h=x.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase();u+="--"+h+":"+C+";"}return u};return m.light=i(c.light),m.dark=i(c.dark),n.setAttribute("style",m[o]),m})}function ie(e){const t=globalThis,n=document.body;if(!n)return e;if(!e)return D();e==="auto"&&(e=we()?"dark":"light"),n.classList.remove("light","dark"),n.classList.add(e);const o=e==="light"?m.light:m.dark;return t.materialDynamicColors&&n.setAttribute("style",o),D()}const E=[];function le(e){if(e.key==="Escape"){const t=e.currentTarget;se(t,t)}}function Ze(e){(f("[autofocus]",e)??e).focus()}function ce(e,t){g(Se(e.id),"active"),g(e,"active"),g(t,"active"),e.close(),E.pop();const n=E[E.length-1];n&&n.focus()}async function Ye(e,t,n,o){!p(o,"button")&&!s(o,"button")&&!s(o,"chip")&&v(o,"active"),v(t,"active"),v(e,"active"),n?e.showModal():e.show(),await ee(90),n||$(e,"keydown",le,!1),E.push(e),Ze(e)}function Je(e){const t=e.currentTarget,n=z(t);p(n,"dialog")&&ce(n,t)}async function se(e,t){F();let n=P(t);const o=s(t,"active")||t.open,c=s(t,"modal");c||O(t,"keydown",le,!1),s(n,"overlay")||(n=_e({class:"overlay"}),$e(n,t),await ee(90)),c||r(n,"click",Je,!1),o?ce(t,n):Ye(t,n,c,e)}let L;function ue(e){O(document.body,"click",ue);const t=e.target,n=l("menu.active");for(let o=0;o<n.length;o++)de(t,n[o],e)}function Xe(e){setTimeout(()=>{const t=f(".field > input",e);t?t.focus():e.focus()},90)}function de(e,t,n){L&&clearTimeout(L),L=setTimeout(()=>{$(document.body,"click",ue),p(document.activeElement,"input")||F();const o=s(t,"active"),c=n?.target===e,i=!!e.closest("menu");if(!o&&i||o&&c){g(t,"active");return}g(l("menu.active"),"active"),v(t,"active"),Xe(t)},90)}let b;function Qe(e){const t=e.currentTarget;g(t,"active"),b&&clearTimeout(b)}function et(e,t){F();const n=l(".snackbar.active");for(let o=0;o<n.length;o++)g(n[o],"active");v(e,"active"),r(e,"click",Qe),b&&clearTimeout(b),t!==-1&&(b=setTimeout(()=>{g(e,"active")},t??6e3))}function tt(e){const t=_(e);t&&g(l(":scope > .page",t),"active"),v(e,"active")}function nt(e){ot(e)}function ot(e){const t=e.currentTarget,n=t.getBoundingClientRect(),o=Math.max(n.width,n.height),c=o/2,i=e.clientX-n.left-c,a=e.clientY-n.top-c,u=document.createElement("div");u.className="ripple-js";const d=document.createElement("div");d.style.inlineSize=d.style.blockSize=`${o}px`,d.style.left=`${i}px`,d.style.top=`${a}px`,r(d,"animationend",()=>{u.remove()}),u.appendChild(d),t.appendChild(u)}function at(){const e=l(".slow-ripple, .ripple, .fast-ripple");for(let t=0;t<e.length;t++)r(e[t],"pointerdown",nt)}function Z(e){const t=e.target;p(t,"progress")?me(t):ge()}function me(e){requestAnimationFrame(()=>{if(!e.hasAttribute("value")&&!e.hasAttribute("max")){const t=s(e,"circle")?"50":"100";e.style.setProperty("--_value",t),e.setAttribute("value",t),e.setAttribute("max","100"),e.classList.add("indeterminate")}else e.style.setProperty("--_value",String(e.value))})}function ge(){if(J&&!X&&!Q)return;const e=document.body,t=l("progress");t.length?$(e,"input",Z,!1):O(e,"input",Z,!1);for(let n=0;n<t.length;n++)me(t[n])}const w=globalThis;let I,M;function Y(){I&&clearTimeout(I),I=setTimeout(async()=>await ve(),180)}async function j(e,t,n,o){if(!t&&(t=f(e.getAttribute("data-ui")),!t)){e.classList.toggle("active");return}if(Te(e),p(t,"dialog")){requestAnimationFrame(()=>se(e,t));return}if(p(t,"menu")){requestAnimationFrame(()=>de(e,t,o));return}if(s(t,"snackbar")){requestAnimationFrame(()=>et(t,n));return}if(s(t,"page")){requestAnimationFrame(()=>tt(t));return}if(s(t,"active")){g(e,"active"),g(t,"active");return}v(t,"active")}function rt(e){j(e.currentTarget,null,null,e)}function it(e){e.key==="Enter"&&j(e.currentTarget,null,null,e)}function pe(){w.ui||M||!w.MutationObserver||(M=new MutationObserver(Y),M.observe(document.body,{childList:!0,subtree:!0}),Y())}function lt(){const e=l("[data-ui]");for(let t=0,n=e.length;t<n;t++)r(e[t],"click",rt),p(e[t],"a")&&!e[t].getAttribute("href")&&r(e[t],"keydown",it)}function ve(e,t){if(e){if(e==="setup"){pe();return}if(e==="guid")return ke();if(e==="mode")return ie(t);if(e==="theme")return Ue(t);const n=f(e);if(!n)return;j(n,n,t)}lt(),Re(),He(),at(),ge()}function ct(){var e;if(w.ui)return;const t=(e=w.document)==null?void 0:e.body;t&&!t.classList.contains("dark")&&!t.classList.contains("light")&&ie("auto"),pe(),w.ui=ve}ct();const gt={title:"Demo",parameters:{componentSubtitle:"Automatically fetch & display properties of STAC files",layout:"fullscreen"}},T={render:()=>Ce`
    <nav class="small-padding surface-container">
      <div class="max">
        <p>EOxElements Demo</p>
      </div>
      <label class="switch icon small">
        <input
          type="checkbox"
          .checked=${window.ui("mode")==="dark"}
          @input=${e=>{window.ui("mode",e.target.checked?"dark":"light")}}
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
          .spec=${{$schema:"https://vega.github.io/schema/vega-lite/v5.json",description:"A chart visualizing data fetched from a geoDB endpoint",data:{url:"https://xcube-geodb.brockmann-consult.de/gtif/f0ad1e25-98fa-4b82-9228-815ab24f5dd1/GTIF_no2_data?and=(date.gte.2022-01-01,date.lte.2022-01-05)&select=no2_ec_station_ppbv,date",parse:{no2_ec_station_ppbv:"number",date:"date"}},encoding:{x:{field:"date",type:"temporal"}},layer:[{encoding:{y:{field:"no2_ec_station_ppbv",type:"quantitative"}},layer:[{mark:"line"},{transform:[{filter:{param:"hover",empty:!1}}],mark:"point"}]},{mark:"rule",encoding:{opacity:{condition:{value:.3,param:"hover",empty:!1},value:0},tooltip:[{field:"no2_ec_station_ppbv",type:"quantitative"}]},params:[{name:"hover",select:{type:"point",fields:["date"],nearest:!0,on:"pointerover",clear:"pointerout"}}]}]}}
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
          .titleProperty=${"title"}
          .aggregateResults=${"themes"}
          .items=${be}
          .enableResultAction=${!0}
          .imageProperty=${"img"}
          .enableHighlighting=${!0}
          .filterProperties=${[{keys:["title","themes"],title:"Search",type:"text",placeholder:"Type Something...",expanded:!0,validation:{pattern:".{0,10}",message:"Maximum 10 characters"}},{key:"completed",title:"Completed",type:"multiselect",filterKeys:[!0,!1]},{key:"userId",title:"User ID",type:"multiselect",filterKeys:[1,2,3]}]}
        ></eox-itemfilter>
      </eox-layout-item>
      <eox-layout-item h="2">
        <eox-layercontrol .toolsAsList=${!0}></eox-layercontrol>
      </eox-layout-item>
      <eox-layout-item w="2" h="2">
        <eox-map
          .controls=${{Zoom:{},Attribution:{},FullScreen:{},OverviewMap:{layers:[{type:"Tile",properties:{id:"overviewMap"},source:{type:"OSM"}}]}}}
          .layers=${[{type:"Group",properties:{id:"group1",title:"Background Layers"},layers:[{type:"Tile",source:{type:"OSM"},properties:{title:"OSM"}}]},{type:"WebGLTile",style:{variables:{vmin:2,vmax:5,settlementDistance:0},color:["case",["all",[">",["band",1],1],[">=",["band",2],["var","settlementDistance"]]],["interpolate",["linear"],["/",["-",["band",1],["var","vmin"]],["-",["var","vmax"],["var","vmin"]]],0,[68,1,84,1],.067,[70,23,103,1],.133,[71,44,122,1],.2,[65,63,131,1],.266,[59,81,139,1],.333,[52,97,141,1],.4,[44,113,142,1],.467,[39,129,142,1],.533,[33,144,141,1],.6,[39,173,129,1],.666,[66,187,114,1],.733,[92,200,99,1],.8,[131,210,75,1],.867,[170,220,50,1],.933,[212,226,44,1],1,[253,231,37,1]],["color",0,0,0,0]]},properties:{id:Symbol(),title:"Solar Energy COG Example",layerConfig:{type:"style",legend:{title:"Global horizontal irradiation",range:["rgba(253, 231, 37, 1)","rgba(33, 144, 141, 1)","rgba(68, 1, 84, 1)"],domainProperties:["vmin","vmax"]},schema:{type:"object",title:"Data configuration",properties:{settlementDistance:{type:"number",minimum:0,maximum:5e3,format:"range",default:0},vminmax:{title:"Global horizontal irradiation",description:"[kWh/m²/day]",type:"object",properties:{vmin:{type:"number",minimum:0,maximum:5,format:"range",default:2},vmax:{type:"number",minimum:0,maximum:5,format:"range",default:5}},format:"minmax"}}}}},source:{type:"GeoTIFF",normalize:!1,sources:[{url:"https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/v2/SolarPowerPotential_Annual_COG_clipped_3857_fixed.tif"},{url:"https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/WSF_EucDist_Austria_3857_COG_fix.tif"}]}},{type:"Tile",properties:{id:"AWS_NO2-VISUALISATION",name:"NO2 Visualisation",timeControlValues:[{date:"2022-12-05",cloudCoverage:20},{date:"2022-12-06",cloudCoverage:18},{date:"2022-12-07",cloudCoverage:22},{date:"2022-12-08",cloudCoverage:25},{date:"2022-12-09",cloudCoverage:19},{date:"2022-12-10",cloudCoverage:16},{date:"2022-12-11",cloudCoverage:21},{date:"2022-12-12",cloudCoverage:15},{date:"2022-12-19",cloudCoverage:35},{date:"2022-12-26",cloudCoverage:8},{date:"2023-01-16",cloudCoverage:42},{date:"2023-01-17",cloudCoverage:38},{date:"2023-01-18",cloudCoverage:45},{date:"2023-01-19",cloudCoverage:41},{date:"2023-01-20",cloudCoverage:39},{date:"2023-01-21",cloudCoverage:43},{date:"2023-01-22",cloudCoverage:37},{date:"2023-01-23",cloudCoverage:28},{date:"2023-01-24",cloudCoverage:31},{date:"2023-01-25",cloudCoverage:26},{date:"2023-01-26",cloudCoverage:29},{date:"2023-01-27",cloudCoverage:24},{date:"2023-01-28",cloudCoverage:32},{date:"2023-01-29",cloudCoverage:27},{date:"2023-01-30",cloudCoverage:12},{date:"2023-01-31",cloudCoverage:14},{date:"2023-02-01",cloudCoverage:11},{date:"2023-02-02",cloudCoverage:16},{date:"2023-02-03",cloudCoverage:13},{date:"2023-02-04",cloudCoverage:18},{date:"2023-02-05",cloudCoverage:15},{date:"2023-02-06",cloudCoverage:55},{date:"2023-02-13",cloudCoverage:33},{date:"2023-02-14",cloudCoverage:36},{date:"2023-02-15",cloudCoverage:30},{date:"2023-02-16",cloudCoverage:38},{date:"2023-02-17",cloudCoverage:34},{date:"2023-02-18",cloudCoverage:31},{date:"2023-02-19",cloudCoverage:35},{date:"2023-02-20",cloudCoverage:29},{date:"2023-02-21",cloudCoverage:32},{date:"2023-02-22",cloudCoverage:27},{date:"2023-02-23",cloudCoverage:33},{date:"2023-02-24",cloudCoverage:25},{date:"2023-02-25",cloudCoverage:28},{date:"2023-02-26",cloudCoverage:22},{date:"2023-02-27",cloudCoverage:18},{date:"2023-03-06",cloudCoverage:47},{date:"2023-03-13",cloudCoverage:25},{date:"2023-03-14",cloudCoverage:28},{date:"2023-03-15",cloudCoverage:23},{date:"2023-03-16",cloudCoverage:26},{date:"2023-03-17",cloudCoverage:21},{date:"2023-03-18",cloudCoverage:24},{date:"2023-03-19",cloudCoverage:19},{date:"2023-03-20",cloudCoverage:9},{date:"2023-03-27",cloudCoverage:38},{date:"2023-04-03",cloudCoverage:22},{date:"2023-04-10",cloudCoverage:51},{date:"2023-04-17",cloudCoverage:14},{date:"2023-04-24",cloudCoverage:29}],timeControlProperty:"TIME"},source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_NO2-VISUALISATION",TIME:"2022-12-05"},crossOrigin:"anonymous"}},{type:"Vector",properties:{title:"Regions",id:"regions",description:"Ecological regions of the earth."},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"}}]}
          .zoomExtent=${[-133286.98347565567,5318575418328699e-9,2215737538674842e-9,735439667085913e-8]}
          style="width: 100%; height: 100%;"
        ></eox-map>
      </eox-layout-item>
      <eox-layout-item h="3">
        <eox-stacinfo
          .for=${`${window.location.href.split("iframe.html")[0]}/collection.json`}
          .header=${["title"]}
          .tags=${["tags"]}
          .body=${["satellite","sensor","agency","extent"]}
          .featured=${["description","providers","assets","links"]}
          .footer=${["sci:citation"]}
        ></eox-stacinfo>
      </eox-layout-item>
      <eox-layout-item w="3" h="2">
        <eox-timecontrol .for=${"eox-map"}>
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
      ${xe} eox-layout {
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
  `};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const pt=["KitchenSink"];export{T as KitchenSink,pt as __namedExportsOrder,gt as default};
