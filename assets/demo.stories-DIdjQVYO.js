import{b as fe,c as ye}from"./iframe-B3F1frjp.js";import"./color-legend-element-DHgIdVPK.js";import{i as ge}from"./testItems-BFT0QiSi.js";import"./preload-helper-C1FmrZbK.js";const B=[];function L(){return window==null?void 0:window.matchMedia("(pointer: coarse)").matches}function he(){return window==null?void 0:window.matchMedia("(prefers-color-scheme: dark)").matches}async function X(e){await new Promise(t=>setTimeout(t,e))}function ve(){return"fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}function g(e,t){try{return typeof e=="string"?(t??document).querySelector(e):e}catch{return null}}function c(e,t){try{return typeof e=="string"?(t??document).querySelectorAll(e):e??B}catch{return B}}function l(e,t){return(e==null?void 0:e.classList.contains(t))??!1}function f(e,t){var n;return((n=e==null?void 0:e.tagName)==null?void 0:n.toLowerCase())===t}function S(e,t){var n;return((n=e==null?void 0:e.type)==null?void 0:n.toLowerCase())===t}function y(e,t){if(e instanceof NodeList)for(let n=0;n<e.length;n++)e[n].classList.add(t);else e==null||e.classList.add(t)}function p(e,t){if(e instanceof NodeList)for(let n=0;n<e.length;n++)e[n].classList.remove(t);else e==null||e.classList.remove(t)}function i(e,t,n,o=!0){e!=null&&e.addEventListener&&e.addEventListener(t,n,o)}function D(e,t,n,o=!0){e!=null&&e.removeEventListener&&e.removeEventListener(t,n,o)}function xe(e,t){var n;(n=t==null?void 0:t.parentNode)==null||n.insertBefore(e,t)}function N(e){return e==null?void 0:e.previousElementSibling}function P(e){return e==null?void 0:e.nextElementSibling}function h(e){return e==null?void 0:e.parentElement}function be(e){const t=document.createElement("div");for(let n=0,o=Object.keys(e),s=o.length;n<s;n++){const a=o[n],r=e[a];t.setAttribute(a,r)}return t}function G(){var e;(e=document.activeElement)==null||e.blur()}function we(e){return c('[data-ui="#'+e+'"]')}function ke(e){return g('[data-ui="#'+e+'"]')}function $e(e){e.id&&l(e,"page")&&(e=ke(e.id)??e);const t=h(e);if(!l(t,"tabs")&&!l(t,"tabbed")&&!f(t,"nav"))return;const n=c("a",t);for(let o=0;o<n.length;o++)p(n[o],"active");!f(e,"button")&&!l(e,"button")&&!l(e,"chip")&&y(e,"active")}function Q(e){e.placeholder||(e.placeholder=" ")}function Se(e){const t=e.currentTarget,n=h(t),o=g("input:not([type=file], [type=checkbox], [type=radio]), select, textarea",n);o&&o.focus()}function z(e){const t=e.currentTarget;_(t)}function V(e){const t=e.currentTarget;_(t)}function _e(e){const t=e.currentTarget;W(t)}function Te(e){const t=e.currentTarget;j(t)}function Ae(e){const t=e.currentTarget;W(t,e)}function Ee(e){const t=e.currentTarget;j(t,e)}function Le(e){const t=e.currentTarget;ee(t)}function Oe(e){var t;const n=e.currentTarget,o=g("input",h(n));o&&(t=n.textContent)!=null&&t.includes("visibility")&&(o.type=o.type==="password"?"text":"password")}function Ie(){const e=c(".field > label");for(let t=0;t<e.length;t++)i(e[t],"click",Se)}function Ce(){const e=c(".field > input:not([type=file], [type=color], [type=range])");for(let t=0;t<e.length;t++)i(e[t],"focus",z),i(e[t],"blur",V),_(e[t])}function Me(){const e=c(".field > select");for(let t=0;t<e.length;t++)i(e[t],"focus",z),i(e[t],"blur",V)}function De(){const e=c(".field > input[type=file]");for(let t=0;t<e.length;t++)i(e[t],"change",_e),W(e[t])}function Ne(){const e=c(".field > input[type=color]");for(let t=0;t<e.length;t++)i(e[t],"change",Te),j(e[t])}function Pe(){const e=c(".field.textarea > textarea");for(let t=0;t<e.length;t++)i(e[t],"focus",z),i(e[t],"blur",V),i(e[t],"input",Le),ee(e[t])}function Ge(){const e=c("input[type=password] ~ :is(i, a)");for(let t=0;t<e.length;t++)i(e[t],"click",Oe)}function _(e){S(e,"number")&&!e.value&&(e.value=""),Q(e)}function W(e,t){if((t==null?void 0:t.key)==="Enter"){const o=N(e);if(!S(o,"file"))return;o.click();return}const n=P(e);S(n,"text")&&(n.value=e.files?Array.from(e.files).map(o=>o.name).join(", "):"",n.readOnly=!0,i(n,"keydown",Ae,!1),_(n))}function j(e,t){if((t==null?void 0:t.key)==="Enter"){const o=N(e);if(!S(o,"color"))return;o.click();return}const n=P(e);S(n,"text")&&(n.readOnly=!0,n.value=e.value,i(n,"keydown",Ee,!1),_(n))}function ee(e){Q(e);const t=h(e);t.removeAttribute("style"),l(t,"min")&&t.style.setProperty("--_size",`${Math.min(192,Math.max(e.scrollHeight,t.offsetHeight))}px`)}function ze(){Ie(),Ce(),Me(),De(),Ne(),Pe(),Ge()}function q(e){const t=e.target;!f(t,"input")&&!f(t,"select")||(t.type==="range"?(t.focus(),ne(t)):te())}function Ve(e){if(!L())return;const t=e.target,n=h(t);l(n,"vertical")&&document.body.classList.add("no-scroll")}function We(e){if(!L())return;const t=e.target,n=h(t);l(n,"vertical")&&document.body.classList.remove("no-scroll")}function te(){const e=document.body,t=c(".slider > input[type=range]");t.length?i(e,"input",q,!1):D(e,"input",q,!1);for(let n=0;n<t.length;n++)ne(t[n])}function je(){const e=getComputedStyle(document.documentElement).getPropertyValue("--size")||"16px";return e.includes("%")?parseInt(e)*16/100:e.includes("em")?parseInt(e)*16:parseInt(e)}function ne(e){i(e,"focus",Ve),i(e,"blur",We);const t=h(e),n=g("span",t),o=c("input",t);if(!o.length||!n)return;const s=je(),a=l(t,"max")?0:.25*s*100/o[0].offsetWidth,r=[],u=[];for(let x=0,me=o.length;x<me;x++){const R=parseFloat(o[x].min)||0,de=parseFloat(o[x].max)||100,H=parseFloat(o[x].value)||0,U=(H-R)*100/(de-R),pe=a/2-a*U/100;r.push(U+pe),u.push(H)}let m=r[0],v=0,T=100-v-m,b=u[0],w=u[1]||0;o.length>1&&(m=Math.abs(r[1]-r[0]),v=r[1]>r[0]?r[0]:r[1],T=100-v-m,w>b&&(b=u[1]||0,w=u[0])),t.style.setProperty("--_start",`${v}%`),t.style.setProperty("--_end",`${T}%`),t.style.setProperty("--_value1",`'${b}'`),t.style.setProperty("--_value2",`'${w}'`)}function Fe(){te()}const d={light:"",dark:""};function M(){var e;return(e=document==null?void 0:document.body)!=null&&e.classList.contains("dark")?"dark":"light"}function Re(){if(d.light&&d.dark)return d;const e=document.body,t=document.createElement("body");t.className="light",e.appendChild(t);const n=document.createElement("body");n.className="dark",e.appendChild(n);const o=getComputedStyle(t),s=getComputedStyle(n),a=["--primary","--on-primary","--primary-container","--on-primary-container","--secondary","--on-secondary","--secondary-container","--on-secondary-container","--tertiary","--on-tertiary","--tertiary-container","--on-tertiary-container","--error","--on-error","--error-container","--on-error-container","--background","--on-background","--surface","--on-surface","--surface-variant","--on-surface-variant","--outline","--outline-variant","--shadow","--scrim","--inverse-surface","--inverse-on-surface","--inverse-primary","--surface-dim","--surface-bright","--surface-container-lowest","--surface-container-low","--surface-container","--surface-container-high","--surface-container-highest"];for(let r=0,u=a.length;r<u;r++)d.light+=a[r]+":"+o.getPropertyValue(a[r])+";",d.dark+=a[r]+":"+s.getPropertyValue(a[r])+";";return e.removeChild(t),e.removeChild(n),d}function He(e){const t=globalThis,n=document.body;if(!e||!t.materialDynamicColors)return Re();const o=M();return e.light&&e.dark?(d.light=e.light,d.dark=e.dark,n.setAttribute("style",e[o]),e):t.materialDynamicColors(e).then(s=>{const a=r=>{let u="";for(let m=0,v=Object.keys(r),T=v.length;m<T;m++){const b=v[m],w=r[b],x=b.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase();u+="--"+x+":"+w+";"}return u};return d.light=a(s.light),d.dark=a(s.dark),n.setAttribute("style",d[o]),d})}function oe(e){const t=globalThis,n=document.body;if(!n)return e;if(!e)return M();e==="auto"&&(e=he()?"dark":"light"),n.classList.remove("light","dark"),n.classList.add(e);const o=e==="light"?d.light:d.dark;return t.materialDynamicColors&&n.setAttribute("style",o),M()}const E=[];function ie(e){if(e.key==="Escape"){const t=e.currentTarget;ae(t,t)}}function Ue(e){(g("[autofocus]",e)??e).focus()}function re(e,t){p(we(e.id),"active"),p(e,"active"),p(t,"active"),e.close(),E.pop();const n=E[E.length-1];n?n.focus():L()&&document.body.classList.remove("no-scroll")}async function Be(e,t,n,o){!f(o,"button")&&!l(o,"button")&&!l(o,"chip")&&y(o,"active"),y(t,"active"),y(e,"active"),n?e.showModal():e.show(),await X(90),n||i(e,"keydown",ie,!1),E.push(e),L()&&document.body.classList.add("no-scroll"),Ue(e)}function qe(e){const t=e.currentTarget,n=P(t);f(n,"dialog")&&re(n,t)}async function ae(e,t){G();let n=N(t);const o=l(t,"active")||t.open,s=l(t,"modal");s||D(t,"keydown",ie,!1),l(n,"overlay")||(n=be({class:"overlay"}),xe(n,t),await X(90)),s||i(n,"click",qe,!1),o?re(t,n):Be(t,n,s,e)}let O;function le(e){D(document.body,"click",le);const t=e.target,n=c("menu.active");for(let o=0;o<n.length;o++)se(t,n[o],e)}function Ke(e){setTimeout(()=>{const t=g(".field > input",e);t?t.focus():e.focus()},90)}function se(e,t,n){O&&clearTimeout(O),O=setTimeout(()=>{i(document.body,"click",le),f(document.activeElement,"input")||G();const o=l(t,"active"),s=(n==null?void 0:n.target)===e,a=!!e.closest("menu");if(!o&&a||o&&s){p(t,"active");return}p(c("menu.active"),"active"),y(t,"active"),Ke(t)},90)}let k;function Ze(e){const t=e.currentTarget;p(t,"active"),k&&clearTimeout(k)}function Ye(e,t){G();const n=c(".snackbar.active");for(let o=0;o<n.length;o++)p(n[o],"active");y(e,"active"),i(e,"click",Ze),k&&clearTimeout(k),t!==-1&&(k=setTimeout(()=>{p(e,"active")},t??6e3))}function Je(e){const t=h(e);t&&p(c(":scope > .page",t),"active"),y(e,"active")}function Xe(e){Qe(e)}function Qe(e){const t=e.currentTarget,n=t.getBoundingClientRect(),o=Math.max(n.width,n.height),s=o/2,a=e.clientX-n.left-s,r=e.clientY-n.top-s,u=document.createElement("div");u.className="ripple-js";const m=document.createElement("div");m.style.inlineSize=m.style.blockSize=`${o}px`,m.style.left=`${a}px`,m.style.top=`${r}px`,m.addEventListener("animationend",()=>{u.remove()}),u.appendChild(m),t.appendChild(u)}function et(){const e=c(".slow-ripple, .ripple, .fast-ripple");for(let t=0;t<e.length;t++)i(e[t],"pointerdown",Xe)}const $=globalThis;let I,C;function K(){I&&clearTimeout(I),I=setTimeout(async()=>await ue(),180)}async function F(e,t,n,o){if(!(!t&&(t=g(e.getAttribute("data-ui")),!t))){if($e(e),f(t,"dialog")){await ae(e,t);return}if(f(t,"menu")){se(e,t,o);return}if(l(t,"snackbar")){Ye(t,n);return}if(l(t,"page")){Je(t);return}if(l(t,"active")){p(e,"active"),p(t,"active");return}y(t,"active")}}function tt(e){F(e.currentTarget,null,null,e)}function nt(e){e.key==="Enter"&&F(e.currentTarget,null,null,e)}function ce(){$.ui||C||!$.MutationObserver||(C=new MutationObserver(K),C.observe(document.body,{childList:!0,subtree:!0}),K())}function ot(){const e=c("[data-ui]");for(let t=0,n=e.length;t<n;t++)i(e[t],"click",tt),f(e[t],"a")&&!e[t].getAttribute("href")&&i(e[t],"keydown",nt)}function ue(e,t){if(e){if(e==="setup"){ce();return}if(e==="guid")return ve();if(e==="mode")return oe(t);if(e==="theme")return He(t);const n=g(e);if(!n)return;F(n,n,t)}ot(),ze(),Fe(),et()}function it(){var e;if($.ui)return;const t=(e=$.document)==null?void 0:e.body;t&&!t.classList.contains("dark")&&!t.classList.contains("light")&&oe("auto"),ce(),$.ui=ue}it();const ct={title:"Demo",parameters:{componentSubtitle:"Automatically fetch & display properties of STAC files",layout:"fullscreen"}},A={render:()=>fe`
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
          .items=${ge}
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
          .layers=${[{type:"Vector",properties:{title:"Regions",id:"regions",description:"Ecological regions of the earth."},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"}},{type:"Tile",properties:{id:"AWS_NO2-VISUALISATION",title:"AWS NO2 Visualisation"},source:{type:"TileWMS",url:"https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",params:{LAYERS:"AWS_NO2-VISUALISATION",TIME:"2022-12-05"}}},{type:"WebGLTile",style:{variables:{vmin:2,vmax:5,settlementDistance:0},color:["case",["all",[">",["band",1],1],[">=",["band",2],["var","settlementDistance"]]],["interpolate",["linear"],["/",["-",["band",1],["var","vmin"]],["-",["var","vmax"],["var","vmin"]]],0,[68,1,84,1],.067,[70,23,103,1],.133,[71,44,122,1],.2,[65,63,131,1],.266,[59,81,139,1],.333,[52,97,141,1],.4,[44,113,142,1],.467,[39,129,142,1],.533,[33,144,141,1],.6,[39,173,129,1],.666,[66,187,114,1],.733,[92,200,99,1],.8,[131,210,75,1],.867,[170,220,50,1],.933,[212,226,44,1],1,[253,231,37,1]],["color",0,0,0,0]]},properties:{id:Symbol(),title:"Solar Energy COG Example",layerConfig:{type:"style",legend:{title:"Global horizontal irradiation",range:["rgba(253, 231, 37, 1)","rgba(33, 144, 141, 1)","rgba(68, 1, 84, 1)"],domainProperties:["vmin","vmax"]},schema:{type:"object",title:"Data configuration",properties:{settlementDistance:{type:"number",minimum:0,maximum:5e3,format:"range",default:0},vminmax:{title:"Global horizontal irradiation",description:"[kWh/m²/day]",type:"object",properties:{vmin:{type:"number",minimum:0,maximum:5,format:"range",default:2},vmax:{type:"number",minimum:0,maximum:5,format:"range",default:5}},format:"minmax"}}}}},source:{type:"GeoTIFF",normalize:!1,sources:[{url:"https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/v2/SolarPowerPotential_Annual_COG_clipped_3857_fixed.tif"},{url:"https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/WSF_EucDist_Austria_3857_COG_fix.tif"}]}},{type:"Group",properties:{id:"group1",title:"Background Layers"},layers:[{type:"Tile",source:{type:"OSM"},properties:{title:"OSM"}}]}]}
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
      <eox-layout-item w="2">
        <eox-timecontrol
          .layer=${"AWS_NO2-VISUALISATION"}
          .controlProperty=${"TIME"}
          .controlValues=${["2022-12-05","2022-12-12","2022-12-19","2022-12-26","2023-01-16","2023-01-23","2023-01-30","2023-02-06","2023-02-13","2023-02-27","2023-03-06","2023-03-13","2023-03-20","2023-03-27","2023-04-03","2023-04-10","2023-04-17","2023-04-24"]}
          .play=${!0}
          .slider=${!0}
        ></eox-timecontrol>
      </eox-layout-item>
    </eox-layout>
    <style>
      ${ye} eox-layout {
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
  `};var Z,Y,J;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
  }, {
    type: "Tile",
    properties: {
      id: "AWS_NO2-VISUALISATION",
      title: "AWS NO2 Visualisation"
    },
    source: {
      type: "TileWMS",
      url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
      params: {
        LAYERS: "AWS_NO2-VISUALISATION",
        TIME: "2022-12-05"
      }
    }
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
      <eox-layout-item w="2">
        <eox-timecontrol
          .layer=\${"AWS_NO2-VISUALISATION"}
          .controlProperty=\${"TIME"}
          .controlValues=\${["2022-12-05", "2022-12-12", "2022-12-19", "2022-12-26", "2023-01-16", "2023-01-23", "2023-01-30", "2023-02-06", "2023-02-13", "2023-02-27", "2023-03-06", "2023-03-13", "2023-03-20", "2023-03-27", "2023-04-03", "2023-04-10", "2023-04-17", "2023-04-24"]}
          .play=\${true}
          .slider=\${true}
        ></eox-timecontrol>
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
}`,...(J=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};const ut=["KitchenSink"];export{A as KitchenSink,ut as __namedExportsOrder,ct as default};
