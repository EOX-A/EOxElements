var p=Object.freeze,re=Object.defineProperty;var l=(e,ee)=>p(re(e,"raw",{value:p(ee||e.slice())}));import{k as Z}from"./lit-element-CHc5qsYe.js";const d={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,header:["title"],tags:["tags"],body:["satellite","sensor","agency","extent"],featured:["description","providers","assets","links"],footer:["sci:citation"]}},te={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,body:["description"]}},oe={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,header:["title"]}},se={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,tags:["themes"]}},ae={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,featured:["description","extent"]}},ie={args:{for:`${window.location.href.split("iframe.html")[0]}/collection.json`,footer:["sci:citation"]}};var m;const ne={args:{...d.args},render:e=>Z(m||(m=l([`
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
    `])),e.for,e.header,e.body,e.featured,e.footer,e.unstyled)},ce={args:{...d.args,unstyled:!0}},le={title:"Elements/eox-stacinfo",tags:["autodocs"],component:"eox-stacinfo",parameters:{componentSubtitle:"Automatically fetch & display properties of STAC files",layout:"fullscreen"},render:e=>Z`
      <eox-stacinfo
        for=${e.for}
        .header=${e.header}
        .tags="${e.tags}"
        .body="${e.body}"
        .featured=${e.featured}
        .footer=${e.footer}
        ?unstyled=${e.unstyled}
      ></eox-stacinfo>
    `},r=d,t=te,o=oe,s=se,a=ae,i=ie,n=ne,c=ce;var u,y,f,h,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"PrimaryStory",...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:"In its most basic form, the element fetches a STAC file and displays its properties.",...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var S,b,$,w,P;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:"SinglePropertyStory",...($=(b=t.parameters)==null?void 0:b.docs)==null?void 0:$.source},description:{story:"If only one body property is whitelisted, then it renders the content full-width and without the key.",...(P=(w=t.parameters)==null?void 0:w.docs)==null?void 0:P.description}}};var x,C,T,v,A;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:"HeaderPropertiesStory",...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"Individual STAC properties can be rendered in the header by using the `header` property.",...(A=(v=o.parameters)==null?void 0:v.docs)==null?void 0:A.description}}};var F,I,j,k,H;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:"TagsStory",...(j=(I=s.parameters)==null?void 0:I.docs)==null?void 0:j.source},description:{story:"Individual STAC properties can be rendered as tags by using the `tags` property.",...(H=(k=s.parameters)==null?void 0:k.docs)==null?void 0:H.description}}};var U,E,_,q,L;a.parameters={...a.parameters,docs:{...(U=a.parameters)==null?void 0:U.docs,source:{originalSource:"FeaturedPropertiesStory",...(_=(E=a.parameters)==null?void 0:E.docs)==null?void 0:_.source},description:{story:"Individual STAC properties can be rendered in a more prominent way by using the `featured` property.",...(L=(q=a.parameters)==null?void 0:q.docs)==null?void 0:L.description}}};var B,M,O,z,D;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:"FooterStory",...(O=(M=i.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:"The `footer` allows to highlight one or more properties in a dedicated section.",...(D=(z=i.parameters)==null?void 0:z.docs)==null?void 0:D.description}}};var G,J,K,N,Q;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:"CustomSlotContentStory",...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Custom rendering of properties can be achieved using `slots`.\nAutomatically generated slots are provided for body properties, featured properties, featured summaries, header and footer.",...(Q=(N=n.parameters)==null?void 0:N.docs)==null?void 0:Q.description}}};var R,V,W,X,Y;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:"UnstyledStory",...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.source},description:{story:"By using the `unstyled` attribute, only the bare minimum styles are applied to the element.",...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};const me=["Primary","SingleProperty","Header","Tags","FeaturedProperties","Footer","CustomSlotContent","Unstyled"];export{n as CustomSlotContent,a as FeaturedProperties,i as Footer,o as Header,r as Primary,t as SingleProperty,s as Tags,c as Unstyled,me as __namedExportsOrder,le as default};
