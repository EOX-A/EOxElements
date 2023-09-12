import "../src/main"
import { configureDocsPage } from '../../../.storybook/docsPageConfig';

export default {
  title: 'Elements/eox-stacinfo',
  tags: ['autodocs'],
  component: 'eox-stacinfo',
  parameters: {
    docs: {
      page: configureDocsPage('EOxDrawtools'),
    },
    options: { selectedPanel: 'addon-controls' },
  },
  render: (args) => `<eox-stacinfo
  for="https://metadata.opensciencedata.esa.int/open-science-catalog-metadata/products/aerosol-pure-dust-op-livas/collection.json"
  properties='["title", "osc:missions", "osc:project", "osc:region", "osc:status", "osc:themes", "osc:type"]'
  featured='["description"]'
></eox-stacinfo>`
}

export const Primary = {
  args: {}
}