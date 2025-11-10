var p=Object.freeze,f=Object.defineProperty;var l=(e,y)=>p(f(e,"raw",{value:p(y||e.slice())}));import{i as u}from"./iframe-DGGf7EFB.js";import"./preload-helper-PPVm8Dsz.js";const d={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,header:["title"],tags:["tags"],body:["satellite","sensor","agency","extent"],featured:["description","providers","assets","links"],footer:["sci:citation"]}},h={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,body:["description"]}},g={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,header:["title"]}},S={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,tags:["themes"]}},b={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,featured:["description","extent"]}},$={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,footer:["sci:citation"]}};var m;const w={args:{...d.args},render:e=>u(m||(m=l([`
      <eox-stacinfo
        id="slot"
        for=`,`
        .header=`,`
        .body="`,`"
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
    `])),e.for,e.header,e.body,e.featured,e.footer,e.unstyled)},x={args:{...d.args,unstyled:!0}},v={title:"Elements/eox-stacinfo",tags:["autodocs"],component:"eox-stacinfo",parameters:{componentSubtitle:"Automatically fetch & display properties of STAC files",layout:"fullscreen"},render:e=>u`
      <eox-stacinfo
        for=${e.for}
        .header=${e.header}
        .tags="${e.tags}"
        .body="${e.body}"
        .featured=${e.featured}
        .footer=${e.footer}
        ?unstyled=${e.unstyled}
      ></eox-stacinfo>
    `},r=d,t=h,o=g,s=S,a=b,i=$,n=w,c=x;r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"PrimaryStory",...r.parameters?.docs?.source},description:{story:"In its most basic form, the element fetches a STAC file and displays its properties.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"SinglePropertyStory",...t.parameters?.docs?.source},description:{story:"If only one body property is whitelisted, then it renders the content full-width and without the key.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"HeaderPropertiesStory",...o.parameters?.docs?.source},description:{story:"Individual STAC properties can be rendered in the header by using the `header` property.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"TagsStory",...s.parameters?.docs?.source},description:{story:"Individual STAC properties can be rendered as tags by using the `tags` property.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"FeaturedPropertiesStory",...a.parameters?.docs?.source},description:{story:"Individual STAC properties can be rendered in a more prominent way by using the `featured` property.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"FooterStory",...i.parameters?.docs?.source},description:{story:"The `footer` allows to highlight one or more properties in a dedicated section.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"CustomSlotContentStory",...n.parameters?.docs?.source},description:{story:"Custom rendering of properties can be achieved using `slots`.\nAutomatically generated slots are provided for body properties, featured properties, featured summaries, header and footer.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"UnstyledStory",...c.parameters?.docs?.source},description:{story:"By using the `unstyled` attribute, only the bare minimum styles are applied to the element.",...c.parameters?.docs?.description}}};const A=["Primary","SingleProperty","Header","Tags","FeaturedProperties","Footer","CustomSlotContent","Unstyled"];export{n as CustomSlotContent,a as FeaturedProperties,i as Footer,o as Header,r as Primary,t as SingleProperty,s as Tags,c as Unstyled,A as __namedExportsOrder,v as default};
