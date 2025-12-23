import{u as o,j as e}from"./iframe-gX1JHwau.js";import"./preload-helper-PPVm8Dsz.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"usage-of-eoxelements",children:"Usage of EOxElements"}),`
`,e.jsx(n.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(n.p,{children:["Web components are a set of browser-native technologies that allow you to create reusable, encapsulated HTML tags. Think of them like custom-built LEGO bricks for your website. You define a component once—with its own HTML structure, CSS styles, and JavaScript logic—and then you can use it anywhere on the web, just like a standard ",e.jsx(n.code,{children:"<div>"})," or ",e.jsx(n.code,{children:"<button>"})," tag."]}),`
`,e.jsxs(n.p,{children:["Source: ",e.jsx(n.a,{href:"https://web.dev/articles/web-components-io-2019",rel:"nofollow",children:"web.dev"})]}),`
`,e.jsx(n.h2,{id:"basic-usage-with-vanilla-javascript",children:"Basic usage with Vanilla JavaScript"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div style="display: flex">
  <eox-map style="flex-basis: 70%; height: 300px"></eox-map>
  <eox-layercontrol for="eox-map" style="flex-basis: 30%"></eox-layercontrol>
</div>

<script type="module">
  import "https://cdn.jsdelivr.net/npm/@eox/map/dist/eox-map.js";
  import "https://cdn.jsdelivr.net/npm/@eox/layercontrol/dist/eox-layercontrol.js";

  document.querySelector("eox-map").layers = [
    {
      type: "Tile",
      properties: { id: "NO2", title: "NO2" },
      source: {
        type: "TileWMS",
        url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
        params: { LAYERS: "AWS_NO2-VISUALISATION" },
      },
    },
    {
      type: "Tile",
      properties: { id: "osm", title: "OSM" },
      source: { type: "OSM" },
    },
  ];
<\/script>
`})}),`
`,e.jsx(n.h2,{id:"using-web-components-with-frameworks",children:"Using Web Components with Frameworks"}),`
`,e.jsx(n.p,{children:"Frameworks like React and Vue can easily incorporate web components because, from their perspective, a web component is just another HTML element."}),`
`,e.jsx(n.h3,{id:"in-react",children:"In React"}),`
`,e.jsxs(n.p,{children:["React can render any HTML tag, including custom ones. To use a web component, you simply include it in your JSX. Complex data, like the ",e.jsx(n.code,{children:"layers"})," array, can be passed directly as props."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import "@eox/map";
import "@eox/layercontrol";
import { createRoot } from "react-dom/client";

const App = () => {
  const mapLayers = [
    {
      type: "Tile",
      properties: { id: "NO2", title: "NO2" },
      source: {
        type: "TileWMS",
        url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
        params: { LAYERS: "AWS_NO2-VISUALISATION" },
      },
    },
    {
      type: "Tile",
      properties: { id: "osm", title: "OSM" },
      source: { type: "OSM" },
    },
  ];

  return (
    <div className="App" style={{ display: "flex" }}>
      <eox-map
        style={{ flexBasis: "70%", height: "300px" }}
        layers={mapLayers}
      ></eox-map>
      <eox-layercontrol
        for="eox-map"
        style={{ flexBasis: "30%" }}
      ></eox-layercontrol>
    </div>
  );
};

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
`})}),`
`,e.jsx(n.h3,{id:"in-vue",children:"In Vue"}),`
`,e.jsxs(n.p,{children:["In Vue, you can use web components directly in your templates. To pass complex data, like the ",e.jsx(n.code,{children:"layers"})," array, use Vue's ",e.jsx(n.code,{children:":"})," binding syntax."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
  import "@eox/map";
  import "@eox/layercontrol";
  import { ref } from "vue";

  const mapLayers = ref([
    {
      type: "Tile",
      properties: { id: "NO2", title: "NO2" },
      source: {
        type: "TileWMS",
        url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
        params: { LAYERS: "AWS_NO2-VISUALISATION" },
      },
    },
    {
      type: "Tile",
      properties: { id: "osm", title: "OSM" },
      source: { type: "OSM" },
    },
  ]);
<\/script>

<template>
  <div style="display: flex">
    <eox-map
      style="flex-basis: 70%; height: 300px"
      :layers="mapLayers"
    ></eox-map>
    <eox-layercontrol for="eox-map" style="flex-basis: 30%"></eox-layercontrol>
  </div>
</template>
`})}),`
`,e.jsx(n.h3,{id:"in-svelte",children:"In Svelte"}),`
`,e.jsx(n.p,{children:"Svelte treats custom elements as first-class citizens. You can import and use them just like regular Svelte components, passing props directly."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script>
  import "@eox/map";
  import "@eox/layercontrol";

  const mapLayers = [
    {
      type: "Tile",
      properties: { id: "NO2", title: "NO2" },
      source: {
        type: "TileWMS",
        url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
        params: { LAYERS: "AWS_NO2-VISUALISATION" },
      },
    },
    {
      type: "Tile",
      properties: { id: "osm", title: "OSM" },
      source: { type: "OSM" },
    },
  ];
<\/script>

<div style="display: flex;">
  <eox-map
    style="flex-basis: 70%; height: 300px;"
    layers="{mapLayers}"
  ></eox-map>
  <eox-layercontrol for="eox-map" style="flex-basis: 30%;"></eox-layercontrol>
</div>
`})}),`
`,e.jsx(n.h3,{id:"in-angular",children:"In Angular"}),`
`,e.jsxs(n.p,{children:["To use web components in Angular, you must add ",e.jsx(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," to your ",e.jsx(n.code,{children:"app.module.ts"}),". Afterwards, you can use the custom elements in your component templates and use property binding ",e.jsx(n.code,{children:'[prop]="data"'})," to pass complex data."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  mapLayers = [
    {
      type: "Tile",
      properties: { id: "NO2", title: "NO2" },
      source: {
        type: "TileWMS",
        url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
        params: { LAYERS: "AWS_NO2-VISUALISATION" },
      },
    },
    {
      type: "Tile",
      properties: { id: "osm", title: "OSM" },
      source: { type: "OSM" },
    },
  ];
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div style="display: flex;">
  <eox-map
    style="flex-basis: 70%; height: 300px;"
    [layers]="mapLayers"
  ></eox-map>
  <eox-layercontrol for="eox-map" style="flex-basis: 30%;"></eox-layercontrol>
</div>
`})})]})}function l(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{l as default};
