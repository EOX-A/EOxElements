import{i as t}from"./iframe-DGGf7EFB.js";import"./preload-helper-PPVm8Dsz.js";const r=[{type:"Tile",source:{type:"OSM"}}],g=[{type:"Vector",background:"lightgrey",properties:{id:"regions"},source:{type:"Vector",url:"https://openlayers.org/data/vector/ecoregions.json",format:"GeoJSON",attributions:"Regions: @ openlayers.org"},style:{"stroke-color":"black","stroke-width":1,"fill-color":"darkgrey"}}],o="width: 400px; height: 300px;",$=[{id:"box",type:"Box"},{id:"point",type:"Point"},{id:"circle",type:"Circle"},{id:"linestring",type:"LineString"}],I={args:{allowModify:!1,multipleFeatures:!1,type:"Polygon"},render:e=>t`
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
  `},F={render:()=>t`
    <!-- Render a collection of map instances with different drawing types -->
    <div style="display: flex">
      <!-- Iterating over different drawing types -->
      ${$.map(({id:e,type:a})=>t`
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
  `},b={render:()=>t`
    <!-- Render eox-map component with ID "multi" -->
    <eox-map
      id="multi"
      style=${o}
      .layers=${r}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "multi" -->
    <eox-drawtools for="eox-map#multi" multiple-features />
  `},D={render:()=>t`
    <!-- Render eox-map component with ID "modify" -->
    <eox-map
      id="modify"
      style=${o}
      .layers=${r}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "modify" -->
    <eox-drawtools for="eox-map#modify" multiple-features allow-modify />
  `},P={render:()=>t`
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
      feature-name="Polygon"
    ></eox-drawtools>
  `},j={render:()=>t`
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
  `},M={args:{multipleFeatures:!1,type:"Polygon",layerId:"regions",drawUpdate:e=>{console.log(" drawUpdate: ",e.detail)}},render:e=>t`
    <!-- Render eox-map component with ID "select" -->
    <eox-map
      id="select"
      style=${o}
      .layers=${g}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "select" -->
    <eox-drawtools
      for="eox-map#select"
      .multipleFeatures=${e.multipleFeatures}
      .type=${e.type}
      layer-id=${e.layerId}
      @drawupdate=${e.drawUpdate}
    />
  `},v={args:{allowModify:!1,multipleFeatures:!0,type:"Box",layerId:"regions",showList:!0,featureName:"Region",featureNameKey:"ECO_NAME",featureStyles:{layer:{"fill-color":"#16A105A0","stroke-color":"#16A105","stroke-width":2.5},hover:{"fill-color":"#19B806A0","stroke-color":"#19B806","stroke-width":2.5}},drawUpdate:e=>{console.log("drawUpdate:",e.detail)}},render:e=>t`
    <!-- Render eox-map component with ID "multi-select" -->
    <eox-map
      id="multi-select"
      style=${o}
      .layers=${g}
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
  `};let h=!1;const R={args:{type:"Box",projection:"EPSG:4326",drawUpdate:e=>{console.log(`extent of the created feature in ${e.target?.projection}`,e.detail?.[0]?.getGeometry().getExtent())},changeProjection:async e=>{const a=document.querySelector("eox-drawtools#feature-projection");e.projection=e.projection==="EPSG:4326"?"EPSG:3035":"EPSG:4326";const S=document.querySelector("eox-map#feature-projection");h||(await S.registerProjectionFromCode(e.projection),h=!0),a.setAttribute("projection",e.projection),a.discardDrawing()}},render:e=>t`
    <eox-map
      id="feature-projection"
      projection="EPSG:4326"
      style=${o}
      .layers=${r}
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
  `},E={args:{type:"Box",multipleFeatures:!0,drawUpdate:e=>{console.log(`returned values in ${e.target?.format} format `,e.detail)},changeFormat:e=>{const a=document.querySelector("eox-drawtools#formats");a.setAttribute("format",e),a.emitDrawnFeatures()}},render:e=>t`
    <eox-map
      id="formats"
      style=${o}
      .layers=${r}
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
  `},O={render:()=>t`
    <!-- Render eox-map component with ID "continuous" -->
    <eox-map
      id="continuous"
      style=${o}
      .layers=${r}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "continuous" -->
    <eox-drawtools for="eox-map#continuous" continuous></eox-drawtools>
  `},T={render:()=>t`
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
      eox-drawtools[for="eox-map#css-var-override"] {
        --primary: #ffa55c;
        --error: #00ff00;
      }
    </style>
  `},k={args:{unstyled:!0},render:e=>t`
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
  `},A={title:"Elements/eox-drawtools",tags:["autodocs"],component:"eox-drawtools"},s=I,i=b,l=D,n=F,p=P,d=O,c=j,m=M,u=v,y=R,f=E,w=T,x=k;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"PrimaryStory",...s.parameters?.docs?.source},description:{story:"Primary story showcasing basic usage.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"MultiPolygonStory",...i.parameters?.docs?.source},description:{story:"By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,\nmultiple polygons can be drawn.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"ModifyFeaturesStory",...l.parameters?.docs?.source},description:{story:"By setting the `allow-modify` attribute or `allowModify` property,\nthe user can modify features after drawing.",...l.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"DrawTypeStory",...n.parameters?.docs?.source},description:{story:'The `type` attribute/property controls which drawing type is enabled\n(defaults to "Polygon").',...n.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"MultiPolygonWithListStory",...p.parameters?.docs?.source},description:{story:"By setting the `show-list` attribute or `showList` property to `true`,\na list of the drawn features will be populated.",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"ContinuousDrawingStory",...d.parameters?.docs?.source},description:{story:"By setting the `continuous` attribute/property to `true`,\nthe user can draw continuously one polygon at a time without removing the last polygon manually.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"ImportFeaturesWithEditorStory",...c.parameters?.docs?.source},description:{story:"By setting the `show-editor` attribute or `import-features` property to `true`,\ngenerates an editor to edit features and allow users to drag-drop/upload/paste shape files in\n- GeoJSON, TopoJSON and KML format.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"SelectFeatureStory",...m.parameters?.docs?.source},description:{story:"Setting `layer-id` attribute or `layerId` property enables selection of features on the specified layer.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"MultiFeaturesSelectStory",...u.parameters?.docs?.source},description:{story:"Showcasing the combination of `multiple-features`, `show-list` and `layer-id` attributes or properties, allowing the selection of multiple features.",...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"FeaturesProjectionStory",...y.parameters?.docs?.source},description:{story:"Showcasing the possibilty to emit drawn features in different projections",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"FormatStory",...f.parameters?.docs?.source},description:{story:"Showcasing the possibilty to emit drawn features in different formats",...f.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"CSSVariableOverrideStory",...w.parameters?.docs?.source},description:{story:"Override css variable directly using styles.",...w.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"UnstyledStory",...x.parameters?.docs?.source},description:{story:"By setting the `unstyled` attribute or property, the element has no styling applied.",...x.parameters?.docs?.description}}};const B=["Primary","MultiPolygon","ModifyFeatures","DrawType","MultiPolygonWithList","ContinuousDrawing","ImportFeaturesWithEditor","SelectFeature","MultiFeaturesSelect","FeaturesProjection","Formats","CSSVariableOverride","Unstyled"];export{w as CSSVariableOverride,d as ContinuousDrawing,n as DrawType,y as FeaturesProjection,f as Formats,c as ImportFeaturesWithEditor,l as ModifyFeatures,u as MultiFeaturesSelect,i as MultiPolygon,p as MultiPolygonWithList,s as Primary,m as SelectFeature,x as Unstyled,B as __namedExportsOrder,A as default};
