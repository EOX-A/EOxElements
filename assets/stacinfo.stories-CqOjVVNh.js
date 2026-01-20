var p=Object.freeze,f=Object.defineProperty;var l=(e,y)=>p(f(e,"raw",{value:p(y||e.slice())}));import{x as m}from"./iframe-DMgoEFh3.js";import"./preload-helper-PPVm8Dsz.js";const d={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,header:["title"],tags:["tags"],body:["satellite","sensor","agency","extent"],featured:["description","providers","assets","links"],footer:["sci:citation"]}},g={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,body:["description"]}},h={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,header:["title"]}},S={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,tags:["themes"]}},b={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,featured:["description","extent"]}},w={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,footer:["sci:citation"]}};var u;const x={args:{...d.args,id:"slot",storySlotContent:`
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
    `},render:e=>m(u||(u=l([`
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
  `])),e.id,e.for,e.header,e.body,e.featured,e.footer,e.unstyled)},T={args:{...d.args,unstyled:!0}},P={title:"Elements/eox-stacinfo",tags:["autodocs"],component:"eox-stacinfo",parameters:{componentSubtitle:"Automatically fetch & display properties of STAC files",layout:"fullscreen"},render:e=>m`
      <eox-stacinfo
        for=${e.for}
        .header=${e.header}
        .tags="${e.tags}"
        .body="${e.body}"
        .featured=${e.featured}
        .footer=${e.footer}
        ?unstyled=${e.unstyled}
      ></eox-stacinfo>
    `},t=d,o=g,r=h,s=S,a=b,i=w,n=x,c=T;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"PrimaryStory",...t.parameters?.docs?.source},description:{story:"Basic usage of eox-stacinfo. Automatically fetches a STAC file and displays its properties in configurable sections (header, tags, body, featured, footer).\nThe `for` attribute/property should point to a valid STAC resource URL.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"SinglePropertyStory",...o.parameters?.docs?.source},description:{story:"Renders only a single body property. When only one property is whitelisted in the body, the content is shown full-width and without a key label, for a cleaner look.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"HeaderPropertiesStory",...r.parameters?.docs?.source},description:{story:"Displays selected STAC properties in the header section using the `header` attribute/property. Useful for highlighting key metadata at the top of the info panel.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"TagsStory",...s.parameters?.docs?.source},description:{story:"Renders selected STAC properties as tags using the `tags` attribute/property. This is useful for visualizing categorical or thematic metadata as compact tags.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"FeaturedPropertiesStory",...a.parameters?.docs?.source},description:{story:"Highlights important STAC properties in a prominent featured section using the `featured` attribute/property. This section is ideal for drawing attention to key dataset attributes.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"FooterStory",...i.parameters?.docs?.source},description:{story:"Displays one or more STAC properties in a dedicated footer section using the `footer` attribute/property. Useful for citations or additional metadata at the bottom of the info panel.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"CustomSlotContentStory",...n.parameters?.docs?.source},description:{story:"Demonstrates custom slot rendering for properties. Slots can be used to override the default rendering of any property, enabling advanced customization and integration with application-specific UI.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"UnstyledStory",...c.parameters?.docs?.source},description:{story:"Shows the unstyled version of the element. By setting the `unstyled` attribute/property, only minimal styles are applied, allowing for full custom styling and integration into different design systems.",...c.parameters?.docs?.description}}};const A=["Primary","SingleProperty","Header","Tags","FeaturedProperties","Footer","CustomSlotContent","Unstyled"];export{n as CustomSlotContent,a as FeaturedProperties,i as Footer,r as Header,t as Primary,o as SingleProperty,s as Tags,c as Unstyled,A as __namedExportsOrder,P as default};
