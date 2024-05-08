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