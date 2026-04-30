import{n as e}from"./chunk-jRWAZmH_.js";import{r as t}from"./react-BNqnctKb.js";import{it as n,nt as r}from"./iframe-DkROvfT5.js";function i(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:`usage-of-eoxelements`,children:`Usage of EOxElements`}),`
`,(0,o.jsx)(n.h2,{id:`introduction`,children:`Introduction`}),`
`,(0,o.jsxs)(n.p,{children:[`Web components are a set of browser-native technologies that allow you to create reusable, encapsulated HTML tags. Think of them like custom-built LEGO bricks for your website. You define a component once—with its own HTML structure, CSS styles, and JavaScript logic—and then you can use it anywhere on the web, just like a standard `,(0,o.jsx)(n.code,{children:`<div>`}),` or `,(0,o.jsx)(n.code,{children:`<button>`}),` tag.`]}),`
`,(0,o.jsxs)(n.p,{children:[`Source: `,(0,o.jsx)(n.a,{href:`https://web.dev/articles/web-components-io-2019`,rel:`nofollow`,children:`web.dev`})]}),`
`,(0,o.jsx)(n.h2,{id:`basic-usage-with-vanilla-javascript`,children:`Basic usage with Vanilla JavaScript`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-html`,children:`<div style="display: flex">
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
`,(0,o.jsx)(n.h2,{id:`using-web-components-with-frameworks`,children:`Using Web Components with Frameworks`}),`
`,(0,o.jsx)(n.p,{children:`Frameworks like React and Vue can easily incorporate web components because, from their perspective, a web component is just another HTML element.`}),`
`,(0,o.jsx)(n.h3,{id:`in-react`,children:`In React`}),`
`,(0,o.jsxs)(n.p,{children:[`React can render any HTML tag, including custom ones. To use a web component, you simply include it in your JSX. Complex data, like the `,(0,o.jsx)(n.code,{children:`layers`}),` array, can be passed directly as props.`]}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-js`,children:`import "@eox/map";
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
`,(0,o.jsx)(n.h3,{id:`in-vue`,children:`In Vue`}),`
`,(0,o.jsxs)(n.p,{children:[`In Vue, you can use web components directly in your templates. To pass complex data, like the `,(0,o.jsx)(n.code,{children:`layers`}),` array, use Vue's `,(0,o.jsx)(n.code,{children:`:`}),` binding syntax.`]}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-html`,children:`<script setup>
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
`,(0,o.jsx)(n.h3,{id:`in-svelte`,children:`In Svelte`}),`
`,(0,o.jsx)(n.p,{children:`Svelte treats custom elements as first-class citizens. You can import and use them just like regular Svelte components, passing props directly.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-html`,children:`<script>
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
`,(0,o.jsx)(n.h3,{id:`in-angular`,children:`In Angular`}),`
`,(0,o.jsxs)(n.p,{children:[`To use web components in Angular, you must add `,(0,o.jsx)(n.code,{children:`CUSTOM_ELEMENTS_SCHEMA`}),` to your `,(0,o.jsx)(n.code,{children:`app.module.ts`}),`. Afterwards, you can use the custom elements in your component templates and use property binding `,(0,o.jsx)(n.code,{children:`[prop]="data"`}),` to pass complex data.`]}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-js`,children:`import { Component } from "@angular/core";

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
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-html`,children:`<div style="display: flex;">
  <eox-map
    style="flex-basis: 70%; height: 300px;"
    [layers]="mapLayers"
  ></eox-map>
  <eox-layercontrol for="eox-map" style="flex-basis: 30%;"></eox-layercontrol>
</div>
`})})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;e((()=>{o=n(),r()}))();export{a as default};