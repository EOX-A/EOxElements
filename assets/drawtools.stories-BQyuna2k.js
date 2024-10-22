import{x as t}from"./lit-element-Dh4_iwrW.js";const o=[{type:"Tile",source:{type:"OSM"}}],me=[{type:"Vector",background:"lightgrey",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"darkgrey"}}],r="width: 400px; height: 300px;",ce=[{id:"box",type:"Box"},{id:"point",type:"Point"},{id:"circle",type:"Circle"},{id:"linestring",type:"LineString"}],ye={args:{allowModify:!1,multipleFeatures:!1,type:"Polygon"},render:e=>t`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${r}
      .layers=${o}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "primary" -->
    <eox-drawtools
      for="eox-map#primary"
      .allowModify=${e.allowModify}
      .multipleFeatures=${e.multipleFeatures}
      .type=${e.type}
    />
  `},ue={render:()=>t`
    <!-- Render a collection of map instances with different drawing types -->
    <div style="display: flex">
      <!-- Iterating over different drawing types -->
      ${ce.map(({id:e,type:u})=>t`
          <div>
            <!-- Displaying an instance of eox-map -->
            <eox-map
              id=${e}
              style=${r}
              .layers=${o}
            />
            <!-- Displaying the current drawing type -->
            ${u}
            <!-- Configuring eox-drawtools with specified parameters -->
            <eox-drawtools
              for="eox-map#${e}"
              multiple-features
              allow-modify
              type="${u}"
            />
          </div>
        `)}
    </div>
  `},we={render:()=>t`
    <!-- Render eox-map component with ID "multi" -->
    <eox-map
      id="multi"
      style=${r}
      .layers=${o}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "multi" -->
    <eox-drawtools for="eox-map#multi" multiple-features />
  `},fe={render:()=>t`
    <!-- Render eox-map component with ID "modify" -->
    <eox-map
      id="modify"
      style=${r}
      .layers=${o}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "modify" -->
    <eox-drawtools for="eox-map#modify" multiple-features allow-modify />
  `},xe={render:()=>t`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="list"
      style=${r}
      .layers=${o}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list" -->
    <eox-drawtools
      for="eox-map#list"
      multiple-features
      show-list
    ></eox-drawtools>
  `},he={render:()=>t`
    <!-- Render eox-map component with ID "import" -->
    <eox-map
      id="import"
      style="width:100%; height:400px;"
      .layers=${o}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list". "editor" and "import" features -->
    <eox-drawtools
      for="eox-map#import"
      multiple-features
      import-features
      show-editor
      show-list
    ></eox-drawtools>
  `},ge={args:{unstyled:!0},render:e=>t`
    <!-- Render eox-map component with ID "unstyled" -->
    <eox-map
      id="unstyled"
      style=${r}
      .layers=${o}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "unstyled" -->
    <eox-drawtools
      for="eox-map#unstyled"
      multiple-features
      show-list
      .unstyled=${e.unstyled}
    />
  `},Se={render:()=>t`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="css-var-override"
      style=${r}
      .layers=${o}
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
  `},$e={args:{multipleFeatures:!1,type:"Polygon",layerId:"regions",drawUpdate:e=>{console.log(" drawUpdate: ",e.detail)}},render:e=>t`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${r}
      .layers=${me}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "primary" -->
    <eox-drawtools
      for="eox-map#primary"
      .multipleFeatures=${e.multipleFeatures}
      .type=${e.type}
      layer-id=${e.layerId}
      @drawupdate=${e.drawUpdate}
    />
  `},Ie={args:{allowModify:!1,multipleFeatures:!0,type:"Box",layerId:"regions",showList:!0,drawUpdate:e=>{console.log("drawUpdate:",e.detail)}},render:e=>t`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${r}
      .layers=${me}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "primary" -->
    <eox-drawtools
      for="eox-map#primary"
      .allowModify=${e.allowModify}
      .multipleFeatures=${e.multipleFeatures}
      .type=${e.type}
      layer-id=${e.layerId}
      ?show-list=${e.showList}
      @drawupdate=${e.drawUpdate}
    />
  `},Fe={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},a=ye,s=we,i=fe,l=ue,p=xe,d=he,n=$e,m=Ie,c=Se,y=ge;var w,f,x,h,g;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:"PrimaryStory",...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"Primary story showcasing basic usage.",...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var S,$,I,M,F;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:"MultiPolygonStory",...(I=($=s.parameters)==null?void 0:$.docs)==null?void 0:I.source},description:{story:"By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,\nmultiple polygons can be drawn.",...(F=(M=s.parameters)==null?void 0:M.docs)==null?void 0:F.description}}};var b,D,R,v,P;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"ModifyFeaturesStory",...(R=(D=i.parameters)==null?void 0:D.docs)==null?void 0:R.source},description:{story:"By setting the `allow-modify` attribute or `allowModify` property,\nthe user can modify features after drawing.",...(P=(v=i.parameters)==null?void 0:v.docs)==null?void 0:P.description}}};var E,O,T,L,_;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:"DrawTypeStory",...(T=(O=l.parameters)==null?void 0:O.docs)==null?void 0:T.source},description:{story:'The `type` attribute/property controls which drawing type is enabled\n(defaults to "Polygon").',...(_=(L=l.parameters)==null?void 0:L.docs)==null?void 0:_.description}}};var U,W,z,C,B;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:"MultiPolygonWithListStory",...(z=(W=p.parameters)==null?void 0:W.docs)==null?void 0:z.source},description:{story:"By setting the `show-list` attribute or `showList` property to `true`,\na list of the drawn features will be populated.",...(B=(C=p.parameters)==null?void 0:C.docs)==null?void 0:B.description}}};var V,A,k,Y,J;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:"ImportFeaturesWithEditorStory",...(k=(A=d.parameters)==null?void 0:A.docs)==null?void 0:k.source},description:{story:"By setting the `show-editor` attribute or `import-features` property to `true`,\ngenerates an editor to edit features and allow users to drag-drop/upload/paste shape files in\n- GeoJSON, TopoJSON and KML format.",...(J=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:J.description}}};var N,G,j,K,q;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:"SelectFeatureStory",...(j=(G=n.parameters)==null?void 0:G.docs)==null?void 0:j.source},description:{story:"Setting `layer-id` attribute or `layerId` property enables selection of features on the specified layer.",...(q=(K=n.parameters)==null?void 0:K.docs)==null?void 0:q.description}}};var H,Q,X,Z,ee;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:"MultiFeaturesSelectStory",...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Showcasing the combination of `multiple-features`, `show-list` and `layer-id` attributes or properties, allowing the selection of multiple features.",...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,re,oe,ae,se;c.parameters={...c.parameters,docs:{...(te=c.parameters)==null?void 0:te.docs,source:{originalSource:"CSSVariableOverrideStory",...(oe=(re=c.parameters)==null?void 0:re.docs)==null?void 0:oe.source},description:{story:"Override css variable directly using styles.",...(se=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:se.description}}};var ie,le,pe,de,ne;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:"UnstyledStory",...(pe=(le=y.parameters)==null?void 0:le.docs)==null?void 0:pe.source},description:{story:"By setting the `unstyled` attribute or property, the element has no styling applied.",...(ne=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ne.description}}};const be=["Primary","MultiPolygon","ModifyFeatures","DrawType","MultiPolygonWithList","ImportFeaturesWithEditor","SelectFeature","MultiFeaturesSelect","CSSVariableOverride","Unstyled"];export{c as CSSVariableOverride,l as DrawType,d as ImportFeaturesWithEditor,i as ModifyFeatures,m as MultiFeaturesSelect,s as MultiPolygon,p as MultiPolygonWithList,a as Primary,n as SelectFeature,y as Unstyled,be as __namedExportsOrder,Fe as default};
