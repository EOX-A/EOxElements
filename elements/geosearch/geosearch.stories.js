import { EOxGeoSearch } from './main';
import { html } from 'lit';

export default {
    title: "Elements/eox-geosearch",
    tags: ["autodocs"],
    component: "eox-geosearch",
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: () => html`<eox-geosearch></eox-geosearch>`,
};

export const ButtonMode = {
  render: () => html`
    <eox-geosearch
      label="Search"
      button
    ></eox-geosearch>
  `,
};

export const CustomDirection = {
  render: () => html`
    <h1>Open to left</h1>
    <eox-geosearch
      label="Geosearch"
      direction="left"
      button
    ></eox-geosearch>

    <h1>Open to top</h1>
    <eox-geosearch
      label="Geosearch"
      direction="top"
      button
    ></eox-geosearch>

    <h1>Open to right (default)</h1>
    <eox-geosearch
      label="Geosearch"
      button
    ></eox-geosearch>

    <h1>Open to bottom</h1>
    <eox-geosearch
      label="Geosearch"
      direction="bottom"
      button
    ></eox-geosearch>
  `,
};

export const MapSearch = {
  args: {
    center: [15.0, 48.0],
  },
  render: (args) => {
    return html`
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 36px; right: 24px; z-index: 12;"
        button
        small
        direction="left"
        .onSelect="${(item) => args.center = [item.geometry.lng, item.geometry.lat]}"
      ></eox-geosearch>

      <eox-map
        id="geosearch-map"
        .center='${args.center}'
        .layers='${[{"type":"Tile","source":{"type":"OSM"}}]}'
        .zoom='${7}'
        style="width: 100%; height: 500px;">
      </eox-map>
    `
  },
};