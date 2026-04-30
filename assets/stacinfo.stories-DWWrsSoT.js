import{n as e}from"./chunk-jRWAZmH_.js";import{gt as t,xt as n}from"./iframe-CM4xu8r8.js";import{n as r,t as i}from"./taggedTemplateLiteral-bYsn3Ild.js";var a,o=e((()=>{a={args:{for:`${window.location.href.split(`iframe.html`)[0]}/collection.json`,header:[`title`],tags:[`tags`],body:[`satellite`,`sensor`,`agency`,`extent`],featured:[`description`,`providers`,`assets`,`links`],footer:[`sci:citation`]}}})),s,c=e((()=>{s={args:{for:`${window.location.href.split(`iframe.html`)[0]}/collection.json`,body:[`description`]}}})),l,u=e((()=>{l={args:{for:`${window.location.href.split(`iframe.html`)[0]}/collection.json`,header:[`title`]}}})),d,f=e((()=>{d={args:{for:`${window.location.href.split(`iframe.html`)[0]}/collection.json`,tags:[`themes`]}}})),p,m=e((()=>{p={args:{for:`${window.location.href.split(`iframe.html`)[0]}/collection.json`,featured:[`description`,`extent`]}}})),h,g=e((()=>{h={args:{for:`${window.location.href.split(`iframe.html`)[0]}/collection.json`,footer:[`sci:citation`]}}})),_,v,y=e((()=>{t(),w(),r(),v={args:{...a.args,id:`slot`,storySlotContent:`
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
    `},render:e=>n(_||=i([`
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
  `]),e.id,e.for,e.header,e.body,e.featured,e.footer,e.unstyled)}})),b,x=e((()=>{w(),b={args:{...a.args,unstyled:!0}}})),S,C=e((()=>{S={args:{for:`${window.location.href.split(`iframe.html`)[0]}/ports_cars_aq/2020/Genoa.json`,header:[`id`,`title`],tags:[`platform`,`instruments`,`constellation`],body:[`description`,`sci:citation`,`processing:software`,`eopf:instrument_mode`,`eo:cloud_cover`,`view:sun_elevation`],featured:[{key:`assets`,filter:e=>e.type?.includes(`image/tiff`)},{key:`links`,filter:e=>e.type?.includes(`text/html`)}],footer:[`start_datetime`,`end_datetime`]}}})),w=e((()=>{o(),c(),u(),f(),m(),g(),y(),x(),C()})),T,E,D,O,k,A,j,M,N,P,F;e((()=>{t(),w(),T={title:`Elements/eox-stacinfo`,tags:[`autodocs`],component:`eox-stacinfo`,parameters:{componentSubtitle:`Automatically fetch & display properties of STAC files`,layout:`fullscreen`},render:e=>n`
      <eox-stacinfo
        for=${e.for}
        .header=${e.header}
        .tags="${e.tags}"
        .body="${e.body}"
        .featured=${e.featured}
        .footer=${e.footer}
        ?unstyled=${e.unstyled}
      ></eox-stacinfo>
    `},E=a,D=s,O=l,k=d,A=p,j=h,M=v,N=S,P=b,E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`PrimaryStory`,...E.parameters?.docs?.source},description:{story:"Basic usage of eox-stacinfo. Automatically fetches a STAC file and displays its properties in configurable sections (header, tags, body, featured, footer).\nThe `for` attribute/property should point to a valid STAC resource URL.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`SinglePropertyStory`,...D.parameters?.docs?.source},description:{story:`Renders only a single body property. When only one property is whitelisted in the body, the content is shown full-width and without a key label, for a cleaner look.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`HeaderPropertiesStory`,...O.parameters?.docs?.source},description:{story:"Displays selected STAC properties in the header section using the `header` attribute/property. Useful for highlighting key metadata at the top of the info panel.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`TagsStory`,...k.parameters?.docs?.source},description:{story:"Renders selected STAC properties as tags using the `tags` attribute/property. This is useful for visualizing categorical or thematic metadata as compact tags.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`FeaturedPropertiesStory`,...A.parameters?.docs?.source},description:{story:"Highlights important STAC properties in a prominent featured section using the `featured` attribute/property. This section is ideal for drawing attention to key dataset attributes.",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`FooterStory`,...j.parameters?.docs?.source},description:{story:"Displays one or more STAC properties in a dedicated footer section using the `footer` attribute/property. Useful for citations or additional metadata at the bottom of the info panel.",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`CustomSlotContentStory`,...M.parameters?.docs?.source},description:{story:`Demonstrates custom slot rendering for properties. Slots can be used to override the default rendering of any property, enabling advanced customization and integration with application-specific UI.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`FilterStory`,...N.parameters?.docs?.source},description:{story:"Shows a STAC Item properties. By setting the `for` attribute/property to an item URL, the element will display the item's properties.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`UnstyledStory`,...P.parameters?.docs?.source},description:{story:"Shows the unstyled version of the element. By setting the `unstyled` attribute/property, only minimal styles are applied, allowing for full custom styling and integration into different design systems.",...P.parameters?.docs?.description}}},F=[`Primary`,`SingleProperty`,`Header`,`Tags`,`FeaturedProperties`,`Footer`,`CustomSlotContent`,`Filter`,`Unstyled`]}))();export{M as CustomSlotContent,A as FeaturedProperties,N as Filter,j as Footer,O as Header,E as Primary,D as SingleProperty,k as Tags,P as Unstyled,F as __namedExportsOrder,T as default};