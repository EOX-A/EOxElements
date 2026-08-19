import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{d as t,t as n}from"./lit-D8IuYOuz.js";import{t as r}from"./taggedTemplateLiteral-D3OAzLWD.js";var i;function a(){return(a=e((()=>{i={args:{for:`${window.location.href.split(`iframe.html`)[0]}/collection.json`,header:[`title`],tags:[`tags`],body:[`satellite`,`sensor`,`agency`,`extent`],featured:[`description`,`providers`,`assets`,`links`],footer:[`sci:citation`]}}})))()}var o;function s(){return(s=e((()=>{o={args:{for:`${window.location.href.split(`iframe.html`)[0]}/collection.json`,body:[`description`]}}})))()}var c;function l(){return(l=e((()=>{c={args:{for:`${window.location.href.split(`iframe.html`)[0]}/collection.json`,header:[`title`]}}})))()}var u;function d(){return(d=e((()=>{u={args:{for:`${window.location.href.split(`iframe.html`)[0]}/collection.json`,tags:[`themes`]}}})))()}var f;function p(){return(p=e((()=>{f={args:{for:`${window.location.href.split(`iframe.html`)[0]}/collection.json`,featured:[`description`,`extent`]}}})))()}var m;function h(){return(h=e((()=>{m={args:{for:`${window.location.href.split(`iframe.html`)[0]}/collection.json`,footer:[`sci:citation`]}}})))()}var g,_;function v(){return(v=e((()=>{n(),C(),_={args:{...i.args,id:`slot`,storySlotContent:`
      <div
        slot="agency"
        style="background: lightgrey; width: 100%; padding: 10px 20px; border-radius: 4px;"
      >
        <p><strong>Agency:</strong> <span class="content"></span>!</p>
      </div>
    `,storyCodeAfter:`
      globalThis.stacInfo = document.querySelector("eox-stacinfo#slot");
      stacInfo.addEventListener("loaded", () => {
        setTimeout(() => {
          const value = stacInfo.stacProperties["agency"];
          document.querySelector(".content").innerHTML = value.formatted;
        });
      });
    `},render:e=>t(g||=r([`
    <eox-stacinfo
      id=`,`
      for=`,`
      .header=`,`
      .body=`,`
      .featured=`,`
      .footer=`,`
      ?unstyled=`,`
    >
      <div
        slot="agency"
        style="background: lightgrey; width: 100%; padding: 10px 20px; border-radius: 4px;"
      >
        <p><strong>Agency:</strong> <span class="content"></span>!</p>
      </div>
    </eox-stacinfo>
    <script>
      globalThis.stacInfo = document.querySelector("eox-stacinfo#slot");
      stacInfo.addEventListener("loaded", () => {
        setTimeout(() => {
          const value = stacInfo.stacProperties["agency"];
          document.querySelector(".content").innerHTML = value.formatted;
        });
      });
    <\/script>
  `]),e.id,e.for,e.header,e.body,e.featured,e.footer,e.unstyled)}})))()}var y;function b(){return(b=e((()=>{C(),y={args:{...i.args,unstyled:!0}}})))()}var x;function S(){return(S=e((()=>{x={args:{for:`${window.location.href.split(`iframe.html`)[0]}/ports_cars_aq/2020/Genoa.json`,header:[`id`,`title`],tags:[`platform`,`instruments`,`constellation`],body:[`description`,`sci:citation`,`processing:software`,`eopf:instrument_mode`,`eo:cloud_cover`,`view:sun_elevation`],featured:[{key:`assets`,filter:e=>e.type?.includes(`image/tiff`)},{key:`links`,filter:e=>e.type?.includes(`text/html`)}],footer:[`start_datetime`,`end_datetime`]}}})))()}function C(){return(C=e((()=>{a(),s(),l(),d(),p(),h(),v(),b(),S()})))()}var w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{n(),C(),w={title:`Elements/eox-stacinfo`,tags:[`autodocs`],component:`eox-stacinfo`,parameters:{componentSubtitle:`Automatically fetch & display properties of STAC files`,layout:`fullscreen`},render:e=>t`
      <eox-stacinfo
        for=${e.for}
        .header=${e.header}
        .tags="${e.tags}"
        .body="${e.body}"
        .featured=${e.featured}
        .footer=${e.footer}
        ?unstyled=${e.unstyled}
      ></eox-stacinfo>
    `},T=i,E=o,D=c,O=u,k=f,A=m,j=_,M=x,N=y,T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`PrimaryStory`,...T.parameters?.docs?.source},description:{story:"Basic usage of eox-stacinfo. Automatically fetches a STAC file and displays its properties in configurable sections (header, tags, body, featured, footer).\nThe `for` attribute/property should point to a valid STAC resource URL.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`SinglePropertyStory`,...E.parameters?.docs?.source},description:{story:`Renders only a single body property. When only one property is whitelisted in the body, the content is shown full-width and without a key label, for a cleaner look.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`HeaderPropertiesStory`,...D.parameters?.docs?.source},description:{story:"Displays selected STAC properties in the header section using the `header` attribute/property. Useful for highlighting key metadata at the top of the info panel.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`TagsStory`,...O.parameters?.docs?.source},description:{story:"Renders selected STAC properties as tags using the `tags` attribute/property. This is useful for visualizing categorical or thematic metadata as compact tags.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`FeaturedPropertiesStory`,...k.parameters?.docs?.source},description:{story:"Highlights important STAC properties in a prominent featured section using the `featured` attribute/property. This section is ideal for drawing attention to key dataset attributes.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`FooterStory`,...A.parameters?.docs?.source},description:{story:"Displays one or more STAC properties in a dedicated footer section using the `footer` attribute/property. Useful for citations or additional metadata at the bottom of the info panel.",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`CustomSlotContentStory`,...j.parameters?.docs?.source},description:{story:`Demonstrates custom slot rendering for properties. Slots can be used to override the default rendering of any property, enabling advanced customization and integration with application-specific UI.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`FilterStory`,...M.parameters?.docs?.source},description:{story:"Shows a STAC Item properties. By setting the `for` attribute/property to an item URL, the element will display the item's properties.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`UnstyledStory`,...N.parameters?.docs?.source},description:{story:"Shows the unstyled version of the element. By setting the `unstyled` attribute/property, only minimal styles are applied, allowing for full custom styling and integration into different design systems.",...N.parameters?.docs?.description}}},P=[`Primary`,`SingleProperty`,`Header`,`Tags`,`FeaturedProperties`,`Footer`,`CustomSlotContent`,`Filter`,`Unstyled`]})))()}F();export{j as CustomSlotContent,k as FeaturedProperties,M as Filter,A as Footer,D as Header,T as Primary,E as SingleProperty,O as Tags,N as Unstyled,P as __namedExportsOrder,w as default};