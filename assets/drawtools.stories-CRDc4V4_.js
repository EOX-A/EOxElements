import{x as t}from"./lit-element-Dh4_iwrW.js";const r=[{type:"Tile",source:{type:"OSM"}}],ge=[{type:"Vector",background:"lightgrey",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"darkgrey"}}],o="width: 400px; height: 300px;",$e=[{id:"box",type:"Box"},{id:"point",type:"Point"},{id:"circle",type:"Circle"},{id:"linestring",type:"LineString"}],Ie={args:{allowModify:!1,multipleFeatures:!1,type:"Polygon"},render:e=>t`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${o}
      .layers=${r}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "primary" -->
    <eox-drawtools
      for="eox-map#primary"
      .allowModify=${e.allowModify}
      .multipleFeatures=${e.multipleFeatures}
      .type=${e.type}
    />
  `},Fe={render:()=>t`
    <!-- Render a collection of map instances with different drawing types -->
    <div style="display: flex">
      <!-- Iterating over different drawing types -->
      ${$e.map(({id:e,type:a})=>t`
          <div>
            <!-- Displaying an instance of eox-map -->
            <eox-map
              id=${e}
              style=${o}
              .layers=${r}
            />
            <!-- Displaying the current drawing type -->
            ${a}
            <!-- Configuring eox-drawtools with specified parameters -->
            <eox-drawtools
              for="eox-map#${e}"
              multiple-features
              allow-modify
              type="${a}"
            />
          </div>
        `)}
    </div>
  `},Pe={render:()=>t`
    <!-- Render eox-map component with ID "multi" -->
    <eox-map
      id="multi"
      style=${o}
      .layers=${r}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "multi" -->
    <eox-drawtools for="eox-map#multi" multiple-features />
  `},be={render:()=>t`
    <!-- Render eox-map component with ID "modify" -->
    <eox-map
      id="modify"
      style=${o}
      .layers=${r}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "modify" -->
    <eox-drawtools for="eox-map#modify" multiple-features allow-modify />
  `},je={render:()=>t`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="list"
      style=${o}
      .layers=${r}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list" -->
    <eox-drawtools
      for="eox-map#list"
      multiple-features
      show-list
    ></eox-drawtools>
  `},Me={render:()=>t`
    <!-- Render eox-map component with ID "import" -->
    <eox-map
      id="import"
      style="width:100%; height:400px;"
      .layers=${r}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list". "editor" and "import" features -->
    <eox-drawtools
      for="eox-map#import"
      multiple-features
      import-features
      show-editor
      show-list
    ></eox-drawtools>
  `},De={args:{multipleFeatures:!1,type:"Polygon",layerId:"regions",drawUpdate:e=>{console.log(" drawUpdate: ",e.detail)}},render:e=>t`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${o}
      .layers=${ge}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "primary" -->
    <eox-drawtools
      for="eox-map#primary"
      .multipleFeatures=${e.multipleFeatures}
      .type=${e.type}
      layer-id=${e.layerId}
      @drawupdate=${e.drawUpdate}
    />
  `},Re={args:{allowModify:!1,multipleFeatures:!0,type:"Box",layerId:"regions",showList:!0,drawUpdate:e=>{console.log("drawUpdate:",e.detail)}},render:e=>t`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${o}
      .layers=${ge}
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
  `};let h=!1;const Ee={args:{type:"Box",projection:"EPSG:4326",drawUpdate:e=>{var a,f,x;console.log(`extent of the created feature in ${(a=e.target)==null?void 0:a.projection}`,(x=(f=e.detail)==null?void 0:f[0])==null?void 0:x.getGeometry().getExtent())},changeProjection:async e=>{const a=document.querySelector("eox-drawtools#feature-projection");e.projection=e.projection==="EPSG:4326"?"EPSG:3035":"EPSG:4326";const f=document.querySelector("eox-map#feature-projection");h||(await f.registerProjectionFromCode(e.projection),h=!0),a.setAttribute("projection",e.projection),a.discardDrawing()}},render:e=>t`
    <eox-map
      id="feature-projection"
      projection="EPSG:4326"
      style=${o}
      .layers=${r}
    ></eox-map>
    <p>Refer to the console for the emitted extent</p>
    <button id="feature-projection" @click=${()=>e.changeProjection(e)}>
      change projection
    </button>

    <!-- Initialize eox-drawtools for the eox-map with ID "feature-projection" -->
    <eox-drawtools
      id="feature-projection"
      for="eox-map#feature-projection"
      projection=${e.projection}
      type=${e.type}
      @drawupdate=${e.drawUpdate}
    />
  `},ve={render:()=>t`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="css-var-override"
      style=${o}
      .layers=${r}
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
  `},Oe={args:{unstyled:!0},render:e=>t`
    <!-- Render eox-map component with ID "unstyled" -->
    <eox-map
      id="unstyled"
      style=${o}
      .layers=${r}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "unstyled" -->
    <eox-drawtools
      for="eox-map#unstyled"
      multiple-features
      show-list
      .unstyled=${e.unstyled}
    />
  `},Le={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},s=Ie,i=Pe,p=be,l=Fe,d=je,n=Me,c=De,m=Re,y=Ee,u=ve,w=Oe;var S,g,$,I,F;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:"PrimaryStory",...($=(g=s.parameters)==null?void 0:g.docs)==null?void 0:$.source},description:{story:"Primary story showcasing basic usage.",...(F=(I=s.parameters)==null?void 0:I.docs)==null?void 0:F.description}}};var P,b,j,M,D;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:"MultiPolygonStory",...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.source},description:{story:"By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,\nmultiple polygons can be drawn.",...(D=(M=i.parameters)==null?void 0:M.docs)==null?void 0:D.description}}};var R,E,v,O,T;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:"ModifyFeaturesStory",...(v=(E=p.parameters)==null?void 0:E.docs)==null?void 0:v.source},description:{story:"By setting the `allow-modify` attribute or `allowModify` property,\nthe user can modify features after drawing.",...(T=(O=p.parameters)==null?void 0:O.docs)==null?void 0:T.description}}};var L,U,_,z,C;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:"DrawTypeStory",...(_=(U=l.parameters)==null?void 0:U.docs)==null?void 0:_.source},description:{story:'The `type` attribute/property controls which drawing type is enabled\n(defaults to "Polygon").',...(C=(z=l.parameters)==null?void 0:z.docs)==null?void 0:C.description}}};var W,B,G,A,V;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:"MultiPolygonWithListStory",...(G=(B=d.parameters)==null?void 0:B.docs)==null?void 0:G.source},description:{story:"By setting the `show-list` attribute or `showList` property to `true`,\na list of the drawn features will be populated.",...(V=(A=d.parameters)==null?void 0:A.docs)==null?void 0:V.description}}};var k,Y,J,N,q;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:"ImportFeaturesWithEditorStory",...(J=(Y=n.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"By setting the `show-editor` attribute or `import-features` property to `true`,\ngenerates an editor to edit features and allow users to drag-drop/upload/paste shape files in\n- GeoJSON, TopoJSON and KML format.",...(q=(N=n.parameters)==null?void 0:N.docs)==null?void 0:q.description}}};var K,H,Q,X,Z;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:"SelectFeatureStory",...(Q=(H=c.parameters)==null?void 0:H.docs)==null?void 0:Q.source},description:{story:"Setting `layer-id` attribute or `layerId` property enables selection of features on the specified layer.",...(Z=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,te,oe,re,ae;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:"MultiFeaturesSelectStory",...(oe=(te=m.parameters)==null?void 0:te.docs)==null?void 0:oe.source},description:{story:"Showcasing the combination of `multiple-features`, `show-list` and `layer-id` attributes or properties, allowing the selection of multiple features.",...(ae=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};var se,ie,pe,le,de;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:"FeaturesProjectionStory",...(pe=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:pe.source},description:{story:"Showcasing the possibilty to emit drawn features in different projections",...(de=(le=y.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};var ne,ce,me,ye,ue;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:"CSSVariableOverrideStory",...(me=(ce=u.parameters)==null?void 0:ce.docs)==null?void 0:me.source},description:{story:"Override css variable directly using styles.",...(ue=(ye=u.parameters)==null?void 0:ye.docs)==null?void 0:ue.description}}};var we,fe,xe,he,Se;w.parameters={...w.parameters,docs:{...(we=w.parameters)==null?void 0:we.docs,source:{originalSource:"UnstyledStory",...(xe=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:xe.source},description:{story:"By setting the `unstyled` attribute or property, the element has no styling applied.",...(Se=(he=w.parameters)==null?void 0:he.docs)==null?void 0:Se.description}}};const Ue=["Primary","MultiPolygon","ModifyFeatures","DrawType","MultiPolygonWithList","ImportFeaturesWithEditor","SelectFeature","MultiFeaturesSelect","FeaturesProjection","CSSVariableOverride","Unstyled"];export{u as CSSVariableOverride,l as DrawType,y as FeaturesProjection,n as ImportFeaturesWithEditor,p as ModifyFeatures,m as MultiFeaturesSelect,i as MultiPolygon,d as MultiPolygonWithList,s as Primary,c as SelectFeature,w as Unstyled,Ue as __namedExportsOrder,Le as default};
