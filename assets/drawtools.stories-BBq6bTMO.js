import{i as o}from"./iframe-DOVtqiKp.js";import"./preload-helper-Dp1pzeXC.js";const a=[{type:"Tile",source:{type:"OSM"}}],Oe=[{type:"Vector",background:"lightgrey",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"darkgrey"}}],r="width: 400px; height: 300px;",Te=[{id:"box",type:"Box"},{id:"point",type:"Point"},{id:"circle",type:"Circle"},{id:"linestring",type:"LineString"}],ke={args:{allowModify:!1,multipleFeatures:!1,type:"Polygon"},render:e=>o`
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
  `},Ce={render:()=>o`
    <!-- Render a collection of map instances with different drawing types -->
    <div style="display: flex">
      <!-- Iterating over different drawing types -->
      ${Te.map(({id:e,type:t})=>o`
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
  `},Ue={render:()=>o`
    <!-- Render eox-map component with ID "multi" -->
    <eox-map
      id="multi"
      style=${r}
      .layers=${a}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "multi" -->
    <eox-drawtools for="eox-map#multi" multiple-features />
  `},Ae={render:()=>o`
    <!-- Render eox-map component with ID "modify" -->
    <eox-map
      id="modify"
      style=${r}
      .layers=${a}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "modify" -->
    <eox-drawtools for="eox-map#modify" multiple-features allow-modify />
  `},Be={render:()=>o`
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
      feature-name="Polygon"
    ></eox-drawtools>
  `},Le={render:()=>o`
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
  `},_e={args:{multipleFeatures:!1,type:"Polygon",layerId:"regions",drawUpdate:e=>{console.log(" drawUpdate: ",e.detail)}},render:e=>o`
    <!-- Render eox-map component with ID "select" -->
    <eox-map
      id="select"
      style=${r}
      .layers=${Oe}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "select" -->
    <eox-drawtools
      for="eox-map#select"
      .multipleFeatures=${e.multipleFeatures}
      .type=${e.type}
      layer-id=${e.layerId}
      @drawupdate=${e.drawUpdate}
    />
  `},ze={args:{allowModify:!1,multipleFeatures:!0,type:"Box",layerId:"regions",showList:!0,featureName:"Region",featureNameKey:"ECO_NAME",featureStyles:{layer:{"fill-color":"#16A105A0","stroke-color":"#16A105","stroke-width":2.5},hover:{"fill-color":"#19B806A0","stroke-color":"#19B806","stroke-width":2.5}},drawUpdate:e=>{console.log("drawUpdate:",e.detail)}},render:e=>o`
    <!-- Render eox-map component with ID "multi-select" -->
    <eox-map
      id="multi-select"
      style=${r}
      .layers=${Oe}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "multi-select" -->
    <eox-drawtools
      for="eox-map#multi-select"
      .allowModify=${e.allowModify}
      .multipleFeatures=${e.multipleFeatures}
      .type=${e.type}
      layer-id=${e.layerId}
      ?show-list=${e.showList}
      .featureStyles=${e.featureStyles}
      .featureName=${e.featureName}
      .featureNameKey=${e.featureNameKey}
      @drawupdate=${e.drawUpdate}
    />
  `};let S=!1;const Ne={args:{type:"Box",projection:"EPSG:4326",drawUpdate:e=>{var t,h,g;console.log(`extent of the created feature in ${(t=e.target)==null?void 0:t.projection}`,(g=(h=e.detail)==null?void 0:h[0])==null?void 0:g.getGeometry().getExtent())},changeProjection:async e=>{const t=document.querySelector("eox-drawtools#feature-projection");e.projection=e.projection==="EPSG:4326"?"EPSG:3035":"EPSG:4326";const h=document.querySelector("eox-map#feature-projection");S||(await h.registerProjectionFromCode(e.projection),S=!0),t.setAttribute("projection",e.projection),t.discardDrawing()}},render:e=>o`
    <eox-map
      id="feature-projection"
      projection="EPSG:4326"
      style=${r}
      .layers=${a}
    ></eox-map>
    <button
      id="feature-projection"
      class="small no-margin"
      @click=${()=>e.changeProjection(e)}
    >
      Change projection
    </button>
    <p>Refer to the console for the emitted extent</p>

    <!-- Initialize eox-drawtools for the eox-map with ID "feature-projection" -->
    <eox-drawtools
      id="feature-projection"
      for="eox-map#feature-projection"
      projection=${e.projection}
      type=${e.type}
      @drawupdate=${e.drawUpdate}
    />
  `},We={args:{type:"Box",multipleFeatures:!0,drawUpdate:e=>{var t;console.log(`returned values in ${(t=e.target)==null?void 0:t.format} format `,e.detail)},changeFormat:e=>{const t=document.querySelector("eox-drawtools#formats");t.setAttribute("format",e),t.emitDrawnFeatures()}},render:e=>o`
    <eox-map
      id="formats"
      style=${r}
      .layers=${a}
    ></eox-map>
    <nav>
      <button
        id="formats"
        class="small"
        @click=${()=>e.changeFormat("geojson")}
      >
        GeoJSON
      </button>
      <button
        id="formats"
        class="small"
        @click=${()=>e.changeFormat("wkt")}
      >
        WKT
      </button>
      <button
        id="formats"
        class="small"
        @click=${()=>e.changeFormat("feature")}
      >
        Feature
      </button>
    </nav>
    <p>Refer to the console for the emitted values</p>

    <!-- Initialize eox-drawtools for the eox-map with ID "formats" -->
    <eox-drawtools
      id="formats"
      for="eox-map#formats"
      ?multiple-features=${e.multipleFeatures}
      type=${e.type}
      @drawupdate=${e.drawUpdate}
    />
  `},Ge={render:()=>o`
    <!-- Render eox-map component with ID "continuous" -->
    <eox-map
      id="continuous"
      style=${r}
      .layers=${a}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "continuous" -->
    <eox-drawtools for="eox-map#continuous" continuous></eox-drawtools>
  `},Ve={render:()=>o`
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
      eox-drawtools[for="eox-map#css-var-override"] {
        --primary: #ffa55c;
        --error: #00ff00;
      }
    </style>
  `},Ke={args:{unstyled:!0},render:e=>o`
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
  `},qe={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},s=ke,i=Ue,l=Ae,n=Ce,p=Be,d=Ge,c=Le,m=_e,u=ze,y=Ne,f=We,w=Ve,x=Ke;var $,I,F,b,D;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:"PrimaryStory",...(F=(I=s.parameters)==null?void 0:I.docs)==null?void 0:F.source},description:{story:"Primary story showcasing basic usage.",...(D=(b=s.parameters)==null?void 0:b.docs)==null?void 0:D.description}}};var P,j,M,v,R;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:"MultiPolygonStory",...(M=(j=i.parameters)==null?void 0:j.docs)==null?void 0:M.source},description:{story:"By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,\nmultiple polygons can be drawn.",...(R=(v=i.parameters)==null?void 0:v.docs)==null?void 0:R.description}}};var E,O,T,k,C;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:"ModifyFeaturesStory",...(T=(O=l.parameters)==null?void 0:O.docs)==null?void 0:T.source},description:{story:"By setting the `allow-modify` attribute or `allowModify` property,\nthe user can modify features after drawing.",...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.description}}};var U,A,B,L,_;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:"DrawTypeStory",...(B=(A=n.parameters)==null?void 0:A.docs)==null?void 0:B.source},description:{story:'The `type` attribute/property controls which drawing type is enabled\n(defaults to "Polygon").',...(_=(L=n.parameters)==null?void 0:L.docs)==null?void 0:_.description}}};var z,N,W,G,V;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:"MultiPolygonWithListStory",...(W=(N=p.parameters)==null?void 0:N.docs)==null?void 0:W.source},description:{story:"By setting the `show-list` attribute or `showList` property to `true`,\na list of the drawn features will be populated.",...(V=(G=p.parameters)==null?void 0:G.docs)==null?void 0:V.description}}};var K,Y,J,q,H;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:"ContinuousDrawingStory",...(J=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"By setting the `continuous` attribute/property to `true`,\nthe user can draw continuously one polygon at a time without removing the last polygon manually.",...(H=(q=d.parameters)==null?void 0:q.docs)==null?void 0:H.description}}};var Q,X,Z,ee,te;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:"ImportFeaturesWithEditorStory",...(Z=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"By setting the `show-editor` attribute or `import-features` property to `true`,\ngenerates an editor to edit features and allow users to drag-drop/upload/paste shape files in\n- GeoJSON, TopoJSON and KML format.",...(te=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var oe,re,ae,se,ie;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:"SelectFeatureStory",...(ae=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ae.source},description:{story:"Setting `layer-id` attribute or `layerId` property enables selection of features on the specified layer.",...(ie=(se=m.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var le,ne,pe,de,ce;u.parameters={...u.parameters,docs:{...(le=u.parameters)==null?void 0:le.docs,source:{originalSource:"MultiFeaturesSelectStory",...(pe=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:pe.source},description:{story:"Showcasing the combination of `multiple-features`, `show-list` and `layer-id` attributes or properties, allowing the selection of multiple features.",...(ce=(de=u.parameters)==null?void 0:de.docs)==null?void 0:ce.description}}};var me,ue,ye,fe,we;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:"FeaturesProjectionStory",...(ye=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:ye.source},description:{story:"Showcasing the possibilty to emit drawn features in different projections",...(we=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:we.description}}};var xe,he,ge,Se,$e;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:"FormatStory",...(ge=(he=f.parameters)==null?void 0:he.docs)==null?void 0:ge.source},description:{story:"Showcasing the possibilty to emit drawn features in different formats",...($e=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:$e.description}}};var Ie,Fe,be,De,Pe;w.parameters={...w.parameters,docs:{...(Ie=w.parameters)==null?void 0:Ie.docs,source:{originalSource:"CSSVariableOverrideStory",...(be=(Fe=w.parameters)==null?void 0:Fe.docs)==null?void 0:be.source},description:{story:"Override css variable directly using styles.",...(Pe=(De=w.parameters)==null?void 0:De.docs)==null?void 0:Pe.description}}};var je,Me,ve,Re,Ee;x.parameters={...x.parameters,docs:{...(je=x.parameters)==null?void 0:je.docs,source:{originalSource:"UnstyledStory",...(ve=(Me=x.parameters)==null?void 0:Me.docs)==null?void 0:ve.source},description:{story:"By setting the `unstyled` attribute or property, the element has no styling applied.",...(Ee=(Re=x.parameters)==null?void 0:Re.docs)==null?void 0:Ee.description}}};const He=["Primary","MultiPolygon","ModifyFeatures","DrawType","MultiPolygonWithList","ContinuousDrawing","ImportFeaturesWithEditor","SelectFeature","MultiFeaturesSelect","FeaturesProjection","Formats","CSSVariableOverride","Unstyled"];export{w as CSSVariableOverride,d as ContinuousDrawing,n as DrawType,y as FeaturesProjection,f as Formats,c as ImportFeaturesWithEditor,l as ModifyFeatures,u as MultiFeaturesSelect,i as MultiPolygon,p as MultiPolygonWithList,s as Primary,m as SelectFeature,x as Unstyled,He as __namedExportsOrder,qe as default};
