import{x as o}from"./lit-element-L04JKUcP.js";const a=[{type:"Tile",source:{type:"OSM"}}],je=[{type:"Vector",background:"lightgrey",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"darkgrey"}}],r="width: 400px; height: 300px;",De=[{id:"box",type:"Box"},{id:"point",type:"Point"},{id:"circle",type:"Circle"},{id:"linestring",type:"LineString"}],Me={args:{allowModify:!1,multipleFeatures:!1,type:"Polygon"},render:e=>o`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${r}
      .layers=${a}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "primary" -->
    <eox-drawtools
      for="eox-map#primary"
      .allowModify=${e.allowModify}
      .multipleFeatures=${e.multipleFeatures}
      .type=${e.type}
    />
  `},Re={render:()=>o`
    <!-- Render a collection of map instances with different drawing types -->
    <div style="display: flex">
      <!-- Iterating over different drawing types -->
      ${De.map(({id:e,type:t})=>o`
          <div>
            <!-- Displaying an instance of eox-map -->
            <eox-map
              id=${e}
              style=${r}
              .layers=${a}
            />
            <!-- Displaying the current drawing type -->
            ${t}
            <!-- Configuring eox-drawtools with specified parameters -->
            <eox-drawtools
              for="eox-map#${e}"
              multiple-features
              allow-modify
              type="${t}"
            />
          </div>
        `)}
    </div>
  `},ve={render:()=>o`
    <!-- Render eox-map component with ID "multi" -->
    <eox-map
      id="multi"
      style=${r}
      .layers=${a}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "multi" -->
    <eox-drawtools for="eox-map#multi" multiple-features />
  `},Ee={render:()=>o`
    <!-- Render eox-map component with ID "modify" -->
    <eox-map
      id="modify"
      style=${r}
      .layers=${a}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "modify" -->
    <eox-drawtools for="eox-map#modify" multiple-features allow-modify />
  `},Oe={render:()=>o`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="list"
      style=${r}
      .layers=${a}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list" -->
    <eox-drawtools
      for="eox-map#list"
      multiple-features
      show-list
    ></eox-drawtools>
  `},Te={render:()=>o`
    <!-- Render eox-map component with ID "import" -->
    <eox-map
      id="import"
      style="width:100%; height:400px;"
      .layers=${a}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list". "editor" and "import" features -->
    <eox-drawtools
      for="eox-map#import"
      multiple-features
      import-features
      show-editor
      show-list
    ></eox-drawtools>
  `},Ue={args:{multipleFeatures:!1,type:"Polygon",layerId:"regions",drawUpdate:e=>{console.log(" drawUpdate: ",e.detail)}},render:e=>o`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${r}
      .layers=${je}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "primary" -->
    <eox-drawtools
      for="eox-map#primary"
      .multipleFeatures=${e.multipleFeatures}
      .type=${e.type}
      layer-id=${e.layerId}
      @drawupdate=${e.drawUpdate}
    />
  `},Le={args:{allowModify:!1,multipleFeatures:!0,type:"Box",layerId:"regions",showList:!0,drawUpdate:e=>{console.log("drawUpdate:",e.detail)}},render:e=>o`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${r}
      .layers=${je}
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
  `};let S=!1;const _e={args:{type:"Box",projection:"EPSG:4326",drawUpdate:e=>{var t,x,h;console.log(`extent of the created feature in ${(t=e.target)==null?void 0:t.projection}`,(h=(x=e.detail)==null?void 0:x[0])==null?void 0:h.getGeometry().getExtent())},changeProjection:async e=>{const t=document.querySelector("eox-drawtools#feature-projection");e.projection=e.projection==="EPSG:4326"?"EPSG:3035":"EPSG:4326";const x=document.querySelector("eox-map#feature-projection");S||(await x.registerProjectionFromCode(e.projection),S=!0),t.setAttribute("projection",e.projection),t.discardDrawing()}},render:e=>o`
    <eox-map
      id="feature-projection"
      projection="EPSG:4326"
      style=${r}
      .layers=${a}
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
  `},ke={args:{type:"Box",multipleFeatures:!0,drawUpdate:e=>{var t;console.log(`returned values in ${(t=e.target)==null?void 0:t.format} format `,e.detail)},changeFormat:e=>{const t=document.querySelector("eox-drawtools#formats");t.setAttribute("format",e),t.emitDrawnFeatures()}},render:e=>o`
    <eox-map
      id="formats"
      style=${r}
      .layers=${a}
    ></eox-map>
    <button id="formats" @click=${()=>e.changeFormat("geojson")}>
      geoJson
    </button>
    <button id="formats" @click=${()=>e.changeFormat("wkt")}>WKT</button>
    <button id="formats" @click=${()=>e.changeFormat("feature")}>
      feature
    </button>
    <p>Refer to the console for the emitted values</p>

    <!-- Initialize eox-drawtools for the eox-map with ID "formats" -->
    <eox-drawtools
      id="formats"
      for="eox-map#formats"
      ?multiple-features=${e.multipleFeatures}
      type=${e.type}
      @drawupdate=${e.drawUpdate}
    />
  `},ze={render:()=>o`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="css-var-override"
      style=${r}
      .layers=${a}
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
  `},We={args:{unstyled:!0},render:e=>o`
    <!-- Render eox-map component with ID "unstyled" -->
    <eox-map
      id="unstyled"
      style=${r}
      .layers=${a}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "unstyled" -->
    <eox-drawtools
      for="eox-map#unstyled"
      multiple-features
      show-list
      .unstyled=${e.unstyled}
    />
  `},Ce={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},s=Me,i=ve,p=Ee,l=Re,n=Oe,d=Te,c=Ue,m=Le,u=_e,y=ke,f=ze,w=We;var g,$,I,F,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"PrimaryStory",...(I=($=s.parameters)==null?void 0:$.docs)==null?void 0:I.source},description:{story:"Primary story showcasing basic usage.",...(b=(F=s.parameters)==null?void 0:F.docs)==null?void 0:b.description}}};var P,j,D,M,R;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:"MultiPolygonStory",...(D=(j=i.parameters)==null?void 0:j.docs)==null?void 0:D.source},description:{story:"By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,\nmultiple polygons can be drawn.",...(R=(M=i.parameters)==null?void 0:M.docs)==null?void 0:R.description}}};var v,E,O,T,U;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:"ModifyFeaturesStory",...(O=(E=p.parameters)==null?void 0:E.docs)==null?void 0:O.source},description:{story:"By setting the `allow-modify` attribute or `allowModify` property,\nthe user can modify features after drawing.",...(U=(T=p.parameters)==null?void 0:T.docs)==null?void 0:U.description}}};var L,_,k,z,W;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:"DrawTypeStory",...(k=(_=l.parameters)==null?void 0:_.docs)==null?void 0:k.source},description:{story:'The `type` attribute/property controls which drawing type is enabled\n(defaults to "Polygon").',...(W=(z=l.parameters)==null?void 0:z.docs)==null?void 0:W.description}}};var B,C,A,G,V;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:"MultiPolygonWithListStory",...(A=(C=n.parameters)==null?void 0:C.docs)==null?void 0:A.source},description:{story:"By setting the `show-list` attribute or `showList` property to `true`,\na list of the drawn features will be populated.",...(V=(G=n.parameters)==null?void 0:G.docs)==null?void 0:V.description}}};var Y,J,q,N,K;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:"ImportFeaturesWithEditorStory",...(q=(J=d.parameters)==null?void 0:J.docs)==null?void 0:q.source},description:{story:"By setting the `show-editor` attribute or `import-features` property to `true`,\ngenerates an editor to edit features and allow users to drag-drop/upload/paste shape files in\n- GeoJSON, TopoJSON and KML format.",...(K=(N=d.parameters)==null?void 0:N.docs)==null?void 0:K.description}}};var H,Q,X,Z,ee;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:"SelectFeatureStory",...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Setting `layer-id` attribute or `layerId` property enables selection of features on the specified layer.",...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,oe,re,ae,se;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:"MultiFeaturesSelectStory",...(re=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:re.source},description:{story:"Showcasing the combination of `multiple-features`, `show-list` and `layer-id` attributes or properties, allowing the selection of multiple features.",...(se=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:se.description}}};var ie,pe,le,ne,de;u.parameters={...u.parameters,docs:{...(ie=u.parameters)==null?void 0:ie.docs,source:{originalSource:"FeaturesProjectionStory",...(le=(pe=u.parameters)==null?void 0:pe.docs)==null?void 0:le.source},description:{story:"Showcasing the possibilty to emit drawn features in different projections",...(de=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:de.description}}};var ce,me,ue,ye,fe;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:"FormatStory",...(ue=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ue.source},description:{story:"Showcasing the possibilty to emit drawn features in different formats",...(fe=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:fe.description}}};var we,xe,he,Se,ge;f.parameters={...f.parameters,docs:{...(we=f.parameters)==null?void 0:we.docs,source:{originalSource:"CSSVariableOverrideStory",...(he=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:he.source},description:{story:"Override css variable directly using styles.",...(ge=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:ge.description}}};var $e,Ie,Fe,be,Pe;w.parameters={...w.parameters,docs:{...($e=w.parameters)==null?void 0:$e.docs,source:{originalSource:"UnstyledStory",...(Fe=(Ie=w.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source},description:{story:"By setting the `unstyled` attribute or property, the element has no styling applied.",...(Pe=(be=w.parameters)==null?void 0:be.docs)==null?void 0:Pe.description}}};const Ae=["Primary","MultiPolygon","ModifyFeatures","DrawType","MultiPolygonWithList","ImportFeaturesWithEditor","SelectFeature","MultiFeaturesSelect","FeaturesProjection","Formats","CSSVariableOverride","Unstyled"];export{f as CSSVariableOverride,l as DrawType,u as FeaturesProjection,y as Formats,d as ImportFeaturesWithEditor,p as ModifyFeatures,m as MultiFeaturesSelect,i as MultiPolygon,n as MultiPolygonWithList,s as Primary,c as SelectFeature,w as Unstyled,Ae as __namedExportsOrder,Ce as default};
