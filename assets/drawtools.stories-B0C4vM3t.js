import{x as e}from"./lit-element-DBwSto7d.js";const t=[{type:"Tile",source:{type:"OSM"}}],r="width: 400px; height: 300px;",Z=[{id:"box",type:"Box"},{id:"point",type:"Point"},{id:"circle",type:"Circle"},{id:"linestring",type:"LineString"}],ee={args:{allowModify:!1,multipleFeatures:!1,type:"Polygon"},render:o=>e`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${r}
      .layers=${t}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "primary" -->
    <eox-drawtools
      for="eox-map#primary"
      .allowModify=${o.allowModify}
      .multipleFeatures=${o.multipleFeatures}
      .type=${o.type}
    />
  `},oe={render:()=>e`
    <!-- Render a collection of map instances with different drawing types -->
    <div style="display: flex">
      <!-- Iterating over different drawing types -->
      ${Z.map(({id:o,type:c})=>e`
          <div>
            <!-- Displaying an instance of eox-map -->
            <eox-map
              id=${o}
              style=${r}
              .layers=${t}
            />
            <!-- Displaying the current drawing type -->
            ${c}
            <!-- Configuring eox-drawtools with specified parameters -->
            <eox-drawtools
              for="eox-map#${o}"
              multiple-features
              allow-modify
              type="${c}"
            />
          </div>
        `)}
    </div>
  `},te={render:()=>e`
    <!-- Render eox-map component with ID "multi" -->
    <eox-map
      id="multi"
      style=${r}
      .layers=${t}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "multi" -->
    <eox-drawtools for="eox-map#multi" multiple-features />
  `},re={render:()=>e`
    <!-- Render eox-map component with ID "modify" -->
    <eox-map
      id="modify"
      style=${r}
      .layers=${t}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "modify" -->
    <eox-drawtools for="eox-map#modify" multiple-features allow-modify />
  `},se={render:()=>e`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="list"
      style=${r}
      .layers=${t}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list" -->
    <eox-drawtools
      for="eox-map#list"
      multiple-features
      show-list
    ></eox-drawtools>
  `},ae={render:()=>e`
    <!-- Render eox-map component with ID "import" -->
    <eox-map
      id="import"
      style="width:100%; height:400px;"
      .layers=${t}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list". "editor" and "import" features -->
    <eox-drawtools
      for="eox-map#import"
      multiple-features
      import-features
      show-editor
      show-list
    ></eox-drawtools>
  `},ie={args:{unstyled:!0},render:o=>e`
    <!-- Render eox-map component with ID "unstyled" -->
    <eox-map
      id="unstyled"
      style=${r}
      .layers=${t}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "unstyled" -->
    <eox-drawtools
      for="eox-map#unstyled"
      multiple-features
      show-list
      .unstyled=${o.unstyled}
    />
  `},pe={render:()=>e`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="css-var-override"
      style=${r}
      .layers=${t}
    ></eox-map>
    <eox-drawtools
      for="eox-map#css-var-override"
      multiple-features
      show-list
    ></eox-drawtools>

    <!-- Style overrides -->
    <style>
      html,
      :host,
      :root {
        --eox-secondary-color: #ffa55c;
        --eox-bg-hover-transparency: 20%;
        --eox-color: #ffa55c;
        --eox-body-font-family: "Comic Sans MS", cursive;
      }
    </style>
  `},de={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},s=ee,a=te,i=re,p=oe,l=se,d=ae,n=pe,m=ie;var y,u,x,f,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"PrimaryStory",...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source},description:{story:"Primary story showcasing basic usage.",...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.description}}};var h,g,S,$,I;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"MultiPolygonStory",...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source},description:{story:"By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,\nmultiple polygons can be drawn.",...(I=($=a.parameters)==null?void 0:$.docs)==null?void 0:I.description}}};var D,M,b,v,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:"ModifyFeaturesStory",...(b=(M=i.parameters)==null?void 0:M.docs)==null?void 0:b.source},description:{story:"By setting the `allow-modify` attribute or `allowModify` property,\nthe user can modify features after drawing.",...(P=(v=i.parameters)==null?void 0:v.docs)==null?void 0:P.description}}};var R,E,F,O,T;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:"DrawTypeStory",...(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.source},description:{story:'The `type` attribute/property controls which drawing type is enabled\n(defaults to "Polygon").',...(T=(O=p.parameters)==null?void 0:O.docs)==null?void 0:T.description}}};var L,W,_,C,z;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:"MultiPolygonWithListStory",...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source},description:{story:"By setting the `show-list` attribute or `showList` property to `true`,\na list of the drawn features will be populated.",...(z=(C=l.parameters)==null?void 0:C.docs)==null?void 0:z.description}}};var B,A,U,V,Y;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:"ImportFeaturesWithEditorStory",...(U=(A=d.parameters)==null?void 0:A.docs)==null?void 0:U.source},description:{story:"By setting the `show-editor` attribute or `import-features` property to `true`,\ngenerates an editor to edit features and allow users to drag-drop/upload/paste shape files in\n- GeoJSON, TopoJSON and KML format.",...(Y=(V=d.parameters)==null?void 0:V.docs)==null?void 0:Y.description}}};var J,N,G,K,j;n.parameters={...n.parameters,docs:{...(J=n.parameters)==null?void 0:J.docs,source:{originalSource:"CSSVariableOverrideStory",...(G=(N=n.parameters)==null?void 0:N.docs)==null?void 0:G.source},description:{story:"Override css variable directly using styles.",...(j=(K=n.parameters)==null?void 0:K.docs)==null?void 0:j.description}}};var k,q,H,Q,X;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:"UnstyledStory",...(H=(q=m.parameters)==null?void 0:q.docs)==null?void 0:H.source},description:{story:"By setting the `unstyled` attribute or property, the element has no styling applied.",...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};const ne=["Primary","MultiPolygon","ModifyFeatures","DrawType","MultiPolygonWithList","ImportFeaturesWithEditor","CSSVariableOverride","Unstyled"];export{n as CSSVariableOverride,p as DrawType,d as ImportFeaturesWithEditor,i as ModifyFeatures,a as MultiPolygon,l as MultiPolygonWithList,s as Primary,m as Unstyled,ne as __namedExportsOrder,de as default};
