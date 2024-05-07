import { default as EOxGeoSearch } from './index';

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
  render: () => '<eox-geosearch></eox-geosearch>',
};