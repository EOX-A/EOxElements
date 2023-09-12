import { EOxItemFilter } from "../src/main";
import "../src/main";
// import { html } from 'lit';
import items from "../examples/items.json"
import { configureDocsPage } from '../../../.storybook/docsPageConfig';

export default {
  title: 'Elements/eox-itemfilter',
  tags: ['autodocs'],
  component: 'eox-itemfilter',
  parameters: {
    docs: {
      page: configureDocsPage('EOxItemFilter'),
    },
    options: { selectedPanel: 'addon-controls' },
  },
  render: (args) => {
    const eoxItemFilter = new EOxItemFilter()
    eoxItemFilter.config = args
    eoxItemFilter.apply(items);
    return eoxItemFilter
  }
}

export const Primary = {
  args: {
    titleProperty: "title",
    filterProperties: [
      {
        keys: ["title", "themes"],
        title: "Search",
        type: "text",
        expanded: true,
        state: {
          title: "no2",
          themes: "no2",
        },
      },
      {
        key: "themes",
        title: "Theme",
        type: "multiselect",
        // state: {
        //   air: true,
        //   agriculture: true,
        // },
      },
      {
        key: "timestamp",
        type: "range",
        format: "date",
        // state: {
        //   min: 1685232950,
        //   max: 1686454646,
        // },
      },
      {
        key: "geometry",
        type: "spatial",
        // state: {
        //   mode: "within",
        //   geometry: {
        //     type: "Polygon",
        //     coordinates: [
        //       [
        //         [-97.71428571428572, 38.00407795331557],
        //         [-102.00000000000001, -40.329636215359066],
        //         [81.85714285714282, -47.42214099287611],
        //         [50.57142857142855, 51.0574434128921],
        //         [-97.71428571428572, 38.00407795331557],
        //       ],
        //     ],
        //   },
        // },
      },
    ],
    aggregateResults: "themes",
    enableHighlighting: true,
    onSelect: (item) => {
      console.log(item);
    },
  },
}