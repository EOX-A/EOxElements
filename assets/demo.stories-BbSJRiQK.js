import{m as de,x as me}from"./iframe-B9vLIyn-.js";import"./color-legend-element-BzGDM73u.js";import{i as pe}from"./testItems-BFT0QiSi.js";import"./preload-helper-PPVm8Dsz.js";const B=[];function U(){return window?.matchMedia("(pointer: coarse)").matches}function ge(){return window?.matchMedia("(prefers-color-scheme: dark)").matches}async function Z(e){await new Promise(t=>setTimeout(t,e))}function ve(){return"fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}function f(e,t){try{return typeof e=="string"?(t??document).querySelector(e):e}catch{return null}}function s(e,t){try{return typeof e=="string"?(t??document).querySelectorAll(e):e??B}catch{return B}}function l(e,t){return e?.classList.contains(t)??!1}function g(e,t){var n;return((n=e?.tagName)==null?void 0:n.toLowerCase())===t}function $(e,t){var n;return((n=e?.type)==null?void 0:n.toLowerCase())===t}function v(e,t){if(e instanceof NodeList)for(let n=0;n<e.length;n++)e[n].classList.add(t);else e?.classList.add(t)}function p(e,t){if(e instanceof NodeList)for(let n=0;n<e.length;n++)e[n].classList.remove(t);else e?.classList.remove(t)}function a(e,t,n,o=!0){e!=null&&e.addEventListener&&e.addEventListener(t,n,o)}function M(e,t,n,o=!0){e!=null&&e.removeEventListener&&e.removeEventListener(t,n,o)}function fe(e,t){var n;(n=t?.parentNode)==null||n.insertBefore(e,t)}function D(e){return e?.previousElementSibling}function P(e){return e?.nextElementSibling}function y(e){return e?.parentElement}function ye(e){const t=document.createElement("div");for(let n=0,o=Object.keys(e),c=o.length;n<c;n++){const i=o[n],r=e[i];t.setAttribute(i,r)}return t}function G(){var e;(e=document.activeElement)==null||e.blur()}function xe(e){return s('[data-ui="#'+e+'"]')}function he(e){return f('[data-ui="#'+e+'"]')}function Ce(e){e.id&&l(e,"page")&&(e=he(e.id)??e);const t=y(e);if(!l(t,"tabs")&&!l(t,"tabbed")&&!g(t,"nav"))return;const n=s("a",t);for(let o=0;o<n.length;o++)p(n[o],"active");!g(e,"button")&&!l(e,"button")&&!l(e,"chip")&&v(e,"active")}function Y(e){e.placeholder||(e.placeholder=" ")}function be(e){const t=e.currentTarget,n=y(t),o=f("input:not([type=file], [type=checkbox], [type=radio]), select, textarea",n);o&&o.focus()}function z(e){const t=e.currentTarget;_(t)}function N(e){const t=e.currentTarget;_(t)}function we(e){const t=e.currentTarget;V(t)}function ke(e){const t=e.currentTarget;j(t)}function $e(e){const t=e.currentTarget;V(t,e)}function _e(e){const t=e.currentTarget;j(t,e)}function Se(e){const t=e.currentTarget;J(t)}function Te(e){var t;const n=e.currentTarget,o=f("input",y(n));o&&(t=n.textContent)!=null&&t.includes("visibility")&&(o.type=o.type==="password"?"text":"password")}function Ee(){const e=s(".field > label");for(let t=0;t<e.length;t++)a(e[t],"click",be)}function Ae(){const e=s(".field > input:not([type=file], [type=color], [type=range])");for(let t=0;t<e.length;t++)a(e[t],"focus",z),a(e[t],"blur",N),_(e[t])}function Oe(){const e=s(".field > select");for(let t=0;t<e.length;t++)a(e[t],"focus",z),a(e[t],"blur",N)}function Le(){const e=s(".field > input[type=file]");for(let t=0;t<e.length;t++)a(e[t],"change",we),V(e[t])}function Ie(){const e=s(".field > input[type=color]");for(let t=0;t<e.length;t++)a(e[t],"change",ke),j(e[t])}function Me(){const e=s(".field.textarea > textarea");for(let t=0;t<e.length;t++)a(e[t],"focus",z),a(e[t],"blur",N),a(e[t],"input",Se),J(e[t])}function De(){const e=s("input[type=password] ~ :is(i, a)");for(let t=0;t<e.length;t++)a(e[t],"click",Te)}function _(e){$(e,"number")&&!e.value&&(e.value=""),Y(e)}function V(e,t){if(t?.key==="Enter"){const o=D(e);if(!$(o,"file"))return;o.click();return}const n=P(e);$(n,"text")&&(n.value=e.files?Array.from(e.files).map(o=>o.name).join(", "):"",n.readOnly=!0,a(n,"keydown",$e,!1),_(n))}function j(e,t){if(t?.key==="Enter"){const o=D(e);if(!$(o,"color"))return;o.click();return}const n=P(e);$(n,"text")&&(n.readOnly=!0,n.value=e.value,a(n,"keydown",_e,!1),_(n))}function J(e){Y(e);const t=y(e);t.removeAttribute("style"),l(t,"min")&&t.style.setProperty("--_size",`${Math.max(e.scrollHeight,t.offsetHeight)}px`)}function Pe(){Ee(),Ae(),Oe(),Le(),Ie(),Me(),De()}function q(e){const t=e.target;!g(t,"input")&&!g(t,"select")||(t.type==="range"?(t.focus(),Q(t)):X())}function Ge(e){if(!U())return;const t=e.target,n=y(t);l(n,"vertical")&&document.body.classList.add("no-scroll")}function ze(e){if(!U())return;const t=e.target,n=y(t);l(n,"vertical")&&document.body.classList.remove("no-scroll")}function X(){const e=document.body,t=s(".slider > input[type=range]");t.length?a(e,"input",q,!1):M(e,"input",q,!1);for(let n=0;n<t.length;n++)Q(t[n])}function Ne(){const e=getComputedStyle(document.documentElement).getPropertyValue("--size")||"16px";return e.includes("%")?parseInt(e)*16/100:e.includes("em")?parseInt(e)*16:parseInt(e)}function Q(e){a(e,"focus",Ge),a(e,"blur",ze);const t=y(e),n=f("span",t),o=s("input",t);if(!o.length||!n)return;const c=Ne(),i=l(t,"max")?0:.25*c*100/o[0].offsetWidth,r=[],u=[];for(let h=0,ce=o.length;h<ce;h++){const W=parseFloat(o[h].min)||0,se=parseFloat(o[h].max)||100,R=parseFloat(o[h].value)||0,H=(R-W)*100/(se-W),ue=i/2-i*H/100;r.push(H+ue),u.push(R)}let d=r[0],x=0,S=100-x-d,C=u[0],b=u[1]||0;o.length>1&&(d=Math.abs(r[1]-r[0]),x=r[1]>r[0]?r[0]:r[1],S=100-x-d,b>C&&(C=u[1]||0,b=u[0])),t.style.setProperty("--_start",`${x}%`),t.style.setProperty("--_end",`${S}%`),t.style.setProperty("--_value1",`'${C}'`),t.style.setProperty("--_value2",`'${b}'`)}function Ve(){X()}const m={light:"",dark:""};function I(){var e;return(e=document?.body)!=null&&e.classList.contains("dark")?"dark":"light"}function je(){if(m.light&&m.dark)return m;const e=document.body,t=document.createElement("body");t.className="light",e.appendChild(t);const n=document.createElement("body");n.className="dark",e.appendChild(n);const o=getComputedStyle(t),c=getComputedStyle(n),i=["--primary","--on-primary","--primary-container","--on-primary-container","--secondary","--on-secondary","--secondary-container","--on-secondary-container","--tertiary","--on-tertiary","--tertiary-container","--on-tertiary-container","--error","--on-error","--error-container","--on-error-container","--background","--on-background","--surface","--on-surface","--surface-variant","--on-surface-variant","--outline","--outline-variant","--shadow","--scrim","--inverse-surface","--inverse-on-surface","--inverse-primary","--surface-dim","--surface-bright","--surface-container-lowest","--surface-container-low","--surface-container","--surface-container-high","--surface-container-highest"];for(let r=0,u=i.length;r<u;r++)m.light+=i[r]+":"+o.getPropertyValue(i[r])+";",m.dark+=i[r]+":"+c.getPropertyValue(i[r])+";";return e.removeChild(t),e.removeChild(n),m}function Fe(e){const t=globalThis,n=document.body;if(!e||!t.materialDynamicColors)return je();const o=I();return e.light&&e.dark?(m.light=e.light,m.dark=e.dark,n.setAttribute("style",e[o]),e):t.materialDynamicColors(e).then(c=>{const i=r=>{let u="";for(let d=0,x=Object.keys(r),S=x.length;d<S;d++){const C=x[d],b=r[C],h=C.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase();u+="--"+h+":"+b+";"}return u};return m.light=i(c.light),m.dark=i(c.dark),n.setAttribute("style",m[o]),m})}function ee(e){const t=globalThis,n=document.body;if(!n)return e;if(!e)return I();e==="auto"&&(e=ge()?"dark":"light"),n.classList.remove("light","dark"),n.classList.add(e);const o=e==="light"?m.light:m.dark;return t.materialDynamicColors&&n.setAttribute("style",o),I()}const E=[];function te(e){if(e.key==="Escape"){const t=e.currentTarget;oe(t,t)}}function We(e){(f("[autofocus]",e)??e).focus()}function ne(e,t){p(xe(e.id),"active"),p(e,"active"),p(t,"active"),e.close(),E.pop();const n=E[E.length-1];n&&n.focus()}async function Re(e,t,n,o){!g(o,"button")&&!l(o,"button")&&!l(o,"chip")&&v(o,"active"),v(t,"active"),v(e,"active"),n?e.showModal():e.show(),await Z(90),n||a(e,"keydown",te,!1),E.push(e),We(e)}function He(e){const t=e.currentTarget,n=P(t);g(n,"dialog")&&ne(n,t)}async function oe(e,t){G();let n=D(t);const o=l(t,"active")||t.open,c=l(t,"modal");c||M(t,"keydown",te,!1),l(n,"overlay")||(n=ye({class:"overlay"}),fe(n,t),await Z(90)),c||a(n,"click",He,!1),o?ne(t,n):Re(t,n,c,e)}let A;function ae(e){M(document.body,"click",ae);const t=e.target,n=s("menu.active");for(let o=0;o<n.length;o++)re(t,n[o],e)}function Be(e){setTimeout(()=>{const t=f(".field > input",e);t?t.focus():e.focus()},90)}function re(e,t,n){A&&clearTimeout(A),A=setTimeout(()=>{a(document.body,"click",ae),g(document.activeElement,"input")||G();const o=l(t,"active"),c=n?.target===e,i=!!e.closest("menu");if(!o&&i||o&&c){p(t,"active");return}p(s("menu.active"),"active"),v(t,"active"),Be(t)},90)}let w;function qe(e){const t=e.currentTarget;p(t,"active"),w&&clearTimeout(w)}function Ke(e,t){G();const n=s(".snackbar.active");for(let o=0;o<n.length;o++)p(n[o],"active");v(e,"active"),a(e,"click",qe),w&&clearTimeout(w),t!==-1&&(w=setTimeout(()=>{p(e,"active")},t??6e3))}function Ue(e){const t=y(e);t&&p(s(":scope > .page",t),"active"),v(e,"active")}function Ze(e){Ye(e)}function Ye(e){const t=e.currentTarget,n=t.getBoundingClientRect(),o=Math.max(n.width,n.height),c=o/2,i=e.clientX-n.left-c,r=e.clientY-n.top-c,u=document.createElement("div");u.className="ripple-js";const d=document.createElement("div");d.style.inlineSize=d.style.blockSize=`${o}px`,d.style.left=`${i}px`,d.style.top=`${r}px`,d.addEventListener("animationend",()=>{u.remove()}),u.appendChild(d),t.appendChild(u)}function Je(){const e=s(".slow-ripple, .ripple, .fast-ripple");for(let t=0;t<e.length;t++)a(e[t],"pointerdown",Ze)}const k=globalThis;let O,L;function K(){O&&clearTimeout(O),O=setTimeout(async()=>await le(),180)}async function F(e,t,n,o){if(!t&&(t=f(e.getAttribute("data-ui")),!t)){e.classList.toggle("active");return}if(Ce(e),g(t,"dialog")){await oe(e,t);return}if(g(t,"menu")){re(e,t,o);return}if(l(t,"snackbar")){Ke(t,n);return}if(l(t,"page")){Ue(t);return}if(l(t,"active")){p(e,"active"),p(t,"active");return}v(t,"active")}function Xe(e){F(e.currentTarget,null,null,e)}function Qe(e){e.key==="Enter"&&F(e.currentTarget,null,null,e)}function ie(){k.ui||L||!k.MutationObserver||(L=new MutationObserver(K),L.observe(document.body,{childList:!0,subtree:!0}),K())}function et(){const e=s("[data-ui]");for(let t=0,n=e.length;t<n;t++)a(e[t],"click",Xe),g(e[t],"a")&&!e[t].getAttribute("href")&&a(e[t],"keydown",Qe)}function le(e,t){if(e){if(e==="setup"){ie();return}if(e==="guid")return ve();if(e==="mode")return ee(t);if(e==="theme")return Fe(t);const n=f(e);if(!n)return;F(n,n,t)}et(),Pe(),Ve(),Je()}function tt(){var e;if(k.ui)return;const t=(e=k.document)==null?void 0:e.body;t&&!t.classList.contains("dark")&&!t.classList.contains("light")&&ee("auto"),ie(),k.ui=le}tt();const it={title:"Demo",parameters:{componentSubtitle:"Automatically fetch & display properties of STAC files",layout:"fullscreen"}},T={render:()=>me`
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
          .items=${pe}
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
      ${de} eox-layout {
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
}`,...T.parameters?.docs?.source}}};const lt=["KitchenSink"];export{T as KitchenSink,lt as __namedExportsOrder,it as default};
