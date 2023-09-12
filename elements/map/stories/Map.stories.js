import { EOxMap } from "../main";
import "../main";
// import { html } from 'lit';
import { configureDocsPage } from '../../../.storybook/docsPageConfig';

export default {
  title: 'Elements/eox-map',
  tags: ['autodocs'],
  component: 'eox-map',
  parameters: {
    docs: {
      page: configureDocsPage('EOxMap'),
    },
    options: { selectedPanel: 'addon-controls' },
  },
  render: (args) => `<eox-map style="width: 400px; height: 300px;"zoom="7" center="[1800000, 6150000]" layers='[{"type":"Tile","source":{"type":"OSM"}}]'></eox-map>`
}

export const Primary = {
  args: {}
}