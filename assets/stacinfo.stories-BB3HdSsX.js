var d=Object.freeze,ee=Object.defineProperty;var p=(e,Z)=>d(ee(e,"raw",{value:d(Z||e.slice())}));import{x as Y}from"./lit-element-Bq1Y8_dt.js";const se={title:"Elements/eox-stacinfo",tags:["autodocs"],component:"eox-stacinfo",parameters:{componentSubtitle:"Automatically fetch & display properties of STAC files",layout:"fullscreen"},render:e=>Y`
    <eox-stacinfo
      for=${e.for}
      .header=${e.header}
      .tags="${e.tags}"
      .properties="${e.properties}"
      .featured=${e.featured}
      .footer=${e.footer}
      ?unstyled=${e.unstyled}
    ></eox-stacinfo>
  `},r={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,header:["title"],tags:["tags"],properties:["satellite","sensor","agency","extent"],featured:["description","providers","assets","links"],footer:["sci:citation"]}},s={args:{...r.args,properties:["title","description","osc:missions","osc:project","osc:region","osc:status","osc:themes","osc:type"]}},o={args:{...r.args,properties:void 0,featured:void 0,footer:void 0}},n={args:{...r.args,header:[],subheader:[],properties:["description"],featured:[],footer:[]}},a={args:{...r.args,featured:["description","extent"],footer:void 0}},t={args:{...r.args,featured:["description","extent"],footer:["osc:project"]}};var l;const i={args:{...r.args},render:e=>Y(l||(l=p([`
    <eox-stacinfo
      id="slot"
      for=`,`
      .header=`,`
      .properties="`,`"
      .featured=`,`
      .footer=`,`
      ?unstyled=`,`
      style="width: 400px"
    >
      <div
        slot="agency"
        style="background: lightgrey; width: 100%; padding: 10px 20px; border-radius: 4px;"
      >
        <p>--> <strong>Agency:</strong> <span class="content"></span>!</p>
      </div>
    </eox-stacinfo>
    <script>
      const stacInfo = document.querySelector("eox-stacinfo#slot");
      stacInfo.addEventListener("loaded", () => {
        setTimeout(() => {
          const value = stacInfo.stacProperties["agency"];
          document.querySelector(".content").innerHTML = value.formatted;
        });
      });
    <\/script>
  `])),e.for,e.header,e.properties,e.featured,e.footer,e.unstyled)},c={args:{...t.args,unstyled:!0}};var u,f,m,g,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    for: \`\${window.location.href.split("iframe.html")[0]}/collection.json\`,
    header: ["title"],
    tags: ["tags"],
    properties: ["satellite", "sensor", "agency", "extent"],
    featured: ["description", "providers", "assets", "links"],
    footer: ["sci:citation"]
  }
}`,...(m=(f=r.parameters)==null?void 0:f.docs)==null?void 0:m.source},description:{story:"In its most basic form, the element fetches a STAC file and displays its properties.",...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};var h,x,S,$,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    properties: ["title", "description", "osc:missions", "osc:project", "osc:region", "osc:status", "osc:themes", "osc:type"]
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source},description:{story:"The rendered STAC properties can be whitelisted to show only certain properties (by setting the `properties` array). By default, title and description are always rendered at the top.",...(w=($=s.parameters)==null?void 0:$.docs)==null?void 0:w.description}}};var b,v,A,T,B;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    // @ts-ignore
    properties: undefined,
    featured: undefined,
    footer: undefined
  }
}`,...(A=(v=o.parameters)==null?void 0:v.docs)==null?void 0:A.source},description:{story:"If no `properties` whitelist is defined, all properties from the STAC JSON are rendered.",...(B=(T=o.parameters)==null?void 0:T.docs)==null?void 0:B.description}}};var C,I,P,j,k;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    header: [],
    subheader: [],
    properties: ["description"],
    featured: [],
    footer: []
  }
}`,...(P=(I=n.parameters)==null?void 0:I.docs)==null?void 0:P.source},description:{story:"If only one property is whitelisted, then it renders the content full-width and without the key.",...(k=(j=n.parameters)==null?void 0:j.docs)==null?void 0:k.description}}};var F,q,E,L,_;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    featured: ["description", "extent"],
    footer: undefined
  }
}`,...(E=(q=a.parameters)==null?void 0:q.docs)==null?void 0:E.source},description:{story:"Individual STAC properties can be rendered in a more prominent way by using the `featured` property.",...(_=(L=a.parameters)==null?void 0:L.docs)==null?void 0:_.description}}};var H,M,O,U,W;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    featured: ["description", "extent"],
    footer: ["osc:project"]
  }
}`,...(O=(M=t.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:"The footer allows to highlight one or more properties.",...(W=(U=t.parameters)==null?void 0:U.docs)==null?void 0:W.description}}};var J,N,z,D,G;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Basic.args
  },
  render: args => html\`
    <eox-stacinfo
      id="slot"
      for=\${args.for}
      .header=\${args.header}
      .properties="\${args.properties}"
      .featured=\${args.featured}
      .footer=\${args.footer}
      ?unstyled=\${args.unstyled}
      style="width: 400px"
    >
      <div
        slot="agency"
        style="background: lightgrey; width: 100%; padding: 10px 20px; border-radius: 4px;"
      >
        <p>--> <strong>Agency:</strong> <span class="content"></span>!</p>
      </div>
    </eox-stacinfo>
    <script>
      const stacInfo = document.querySelector("eox-stacinfo#slot");
      stacInfo.addEventListener("loaded", () => {
        setTimeout(() => {
          const value = stacInfo.stacProperties["agency"];
          document.querySelector(".content").innerHTML = value.formatted;
        });
      });
    <\/script>
  \`
}`,...(z=(N=i.parameters)==null?void 0:N.docs)==null?void 0:z.source},description:{story:"Custom rendering of properties can be achieved using `slots`. Automatically generated slots are provided for properties, featured properties, featured summaries, header and footer.",...(G=(D=i.parameters)==null?void 0:D.docs)==null?void 0:G.description}}};var K,Q,R,V,X;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Footer.args,
    unstyled: true
  }
}`,...(R=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:R.source},description:{story:"By using the `unstyled` attribute, only the bare minimum styles are applied to the element.",...(X=(V=c.parameters)==null?void 0:V.docs)==null?void 0:X.description}}};const oe=["Basic","PropertiesWhitelist","AllProperties","SingleProperty","FeaturedProperties","Footer","CustomSlotContent","Unstyled"];export{o as AllProperties,r as Basic,i as CustomSlotContent,a as FeaturedProperties,t as Footer,s as PropertiesWhitelist,n as SingleProperty,c as Unstyled,oe as __namedExportsOrder,se as default};
