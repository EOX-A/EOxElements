var d=Object.freeze,ee=Object.defineProperty;var p=(e,Z)=>d(ee(e,"raw",{value:d(Z||e.slice())}));import{x as Y}from"./lit-element-Bq1Y8_dt.js";const oe={title:"Elements/eox-stacinfo",tags:["autodocs"],component:"eox-stacinfo",parameters:{componentSubtitle:"Automatically fetch & display properties of STAC files",layout:"centered"},render:e=>Y`
    <eox-stacinfo
      for=${e.for}
      .header=${e.header}
      .properties="${e.properties}"
      .featured=${e.featured}
      .footer=${e.footer}
      ?unstyled=${e.unstyled}
      style="width: 400px"
    ></eox-stacinfo>
  `},r={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,header:["title"],properties:["osc:region","osc:status","osc:missions","created"],footer:["osc:project"]}},o={args:{...r.args,properties:["title","description","osc:missions","osc:project","osc:region","osc:status","osc:themes","osc:type"]}},s={args:{...r.args,properties:void 0,featured:void 0,footer:void 0}},n={args:{...r.args,header:[],subheader:[],properties:["description"],featured:[],footer:[]}},a={args:{...r.args,featured:["description","extent"],footer:void 0}},t={args:{...r.args,featured:["description","extent"],footer:["osc:project"]}};var l;const i={args:{...r.args},render:e=>Y(l||(l=p([`
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
        slot="region"
        style="background: lightgrey; width: 100%; padding: 10px 20px; border-radius: 4px;"
      >
        <p>
          Replacing the "region" property slot to render it in a custom manner:
        </p>
        <p>--> <strong>Region:</strong> <span class="content"></span>!</p>
      </div>
    </eox-stacinfo>
    <script>
      const stacInfo = document.querySelector("eox-stacinfo#slot");
      stacInfo.addEventListener("loaded", () => {
        setTimeout(() => {
          const value = stacInfo.stacProperties["osc:region"];
          document.querySelector(".content").innerHTML = value.formatted;
        });
      });
    <\/script>
  `])),e.for,e.header,e.properties,e.featured,e.footer,e.unstyled)},c={args:{...t.args,unstyled:!0}};var u,f,m,g,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    for: \`\${window.location.href.split("iframe.html")[0]}/collection.json\`,
    header: ["title"],
    properties: ["osc:region", "osc:status", "osc:missions", "created"],
    footer: ["osc:project"]
  }
}`,...(m=(f=r.parameters)==null?void 0:f.docs)==null?void 0:m.source},description:{story:"In its most basic form, the element fetches a STAC file and displays its properties.",...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var y,x,S,$,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    properties: ["title", "description", "osc:missions", "osc:project", "osc:region", "osc:status", "osc:themes", "osc:type"]
  }
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source},description:{story:"The rendered STAC properties can be whitelisted to show only certain properties (by setting the `properties` array). By default, title and description are always rendered at the top.",...(w=($=o.parameters)==null?void 0:$.docs)==null?void 0:w.description}}};var b,v,T,B,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    // @ts-ignore
    properties: undefined,
    featured: undefined,
    footer: undefined
  }
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source},description:{story:"If no `properties` whitelist is defined, all properties from the STAC JSON are rendered.",...(C=(B=s.parameters)==null?void 0:B.docs)==null?void 0:C.description}}};var I,P,A,j,F;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    header: [],
    subheader: [],
    properties: ["description"],
    featured: [],
    footer: []
  }
}`,...(A=(P=n.parameters)==null?void 0:P.docs)==null?void 0:A.source},description:{story:"If only one property is whitelisted, then it renders the content full-width and without the key.",...(F=(j=n.parameters)==null?void 0:j.docs)==null?void 0:F.description}}};var q,E,L,R,k;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    featured: ["description", "extent"],
    footer: undefined
  }
}`,...(L=(E=a.parameters)==null?void 0:E.docs)==null?void 0:L.source},description:{story:"Individual STAC properties can be rendered in a more prominent way by using the `featured` property.",...(k=(R=a.parameters)==null?void 0:R.docs)==null?void 0:k.description}}};var _,H,M,O,U;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    featured: ["description", "extent"],
    footer: ["osc:project"]
  }
}`,...(M=(H=t.parameters)==null?void 0:H.docs)==null?void 0:M.source},description:{story:"The footer allows to highlight one or more properties.",...(U=(O=t.parameters)==null?void 0:O.docs)==null?void 0:U.description}}};var W,J,N,z,D;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        slot="region"
        style="background: lightgrey; width: 100%; padding: 10px 20px; border-radius: 4px;"
      >
        <p>
          Replacing the "region" property slot to render it in a custom manner:
        </p>
        <p>--> <strong>Region:</strong> <span class="content"></span>!</p>
      </div>
    </eox-stacinfo>
    <script>
      const stacInfo = document.querySelector("eox-stacinfo#slot");
      stacInfo.addEventListener("loaded", () => {
        setTimeout(() => {
          const value = stacInfo.stacProperties["osc:region"];
          document.querySelector(".content").innerHTML = value.formatted;
        });
      });
    <\/script>
  \`
}`,...(N=(J=i.parameters)==null?void 0:J.docs)==null?void 0:N.source},description:{story:"Custom rendering of properties can be achieved using `slots`. Automatically generated slots are provided for properties, featured properties, featured summaries, header and footer.",...(D=(z=i.parameters)==null?void 0:z.docs)==null?void 0:D.description}}};var G,K,Q,V,X;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Footer.args,
    unstyled: true
  }
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"By using the `unstyled` attribute, only the bare minimum styles are applied to the element.",...(X=(V=c.parameters)==null?void 0:V.docs)==null?void 0:X.description}}};const se=["Basic","PropertiesWhitelist","AllProperties","SingleProperty","FeaturedProperties","Footer","CustomSlotContent","Unstyled"];export{s as AllProperties,r as Basic,i as CustomSlotContent,a as FeaturedProperties,t as Footer,o as PropertiesWhitelist,n as SingleProperty,c as Unstyled,se as __namedExportsOrder,oe as default};
