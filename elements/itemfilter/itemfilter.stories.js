import { html } from "lit";
import { EOxItemFilter } from "./src/main";
import "./src/main";
import "./src/autocomplete";
import "./src/selectionlist";
import "./src/chips";
import "../map/main";
import items from "./test/testItems.json";

export default {
  title: "Elements/eox-itemfilter",
  tags: ["autodocs"],
  component: "eox-itemfilter",
  render: (args) => {
    const eoxItemFilter = new EOxItemFilter();
    eoxItemFilter.config = args;
    eoxItemFilter.apply(items);
    return eoxItemFilter;
  },
};

export const Primary = {
  args: {
    titleProperty: "title",
    filterProperties: [
      {
        keys: ["title", "themes"],
        title: "Search",
        type: "text",
        expanded: true,
        // state: {
        //   title: "no2",
        //   themes: "no2",
        // },
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
};

export const MultiSelect = {
  args: {
    titleProperty: "title",
    filterProperties: [
      {
        key: "themes",
        title: "Theme",
        type: "multiselect",
        expanded: true,
        state: {
          air: true,
          agriculture: true,
        },
      },
    ],
  },
};

export const SortedMultiSelect = {
  args: {
    titleProperty: "title",
    filterProperties: [
      {
        key: "themes",
        title: "Theme",
        type: "multiselect",
        expanded: true,
        sort: (a, b) => b.localeCompare(a),
        state: {
          air: true,
          agriculture: true,
        },
      },
    ],
  },
};

export const InlineMode = {
  args: {
    inlineMode: true,
    titleProperty: "title",
    filterProperties: [
      {
        key: "themes",
        id: "themes",
        title: "Theme",
        type: "multiselect",
        state: {
          air: null,
          agriculture: null,
        },
      },
      {
        key: "timestamp",
        id: "date",
        title: "Date",
        type: "range",
        format: "date",
        state: {
          min: 1685232950,
          max: 1686454646,
        },
      },
      {
        key: "geometry",
        id: "spatial",
        type: "spatial",
        title: "Spatial",
        state: {
          mode: "intersects",
        },
      },
      {
        key: "code",
        id: "code",
        title: "Code",
        type: "multiselect",
        // state: {
        //   air: true,
        //   agriculture: true,
        // },
      },
      {
        keys: ["title", "themes"],
        title: "Search",
        id: "search",
        type: "text",
        expanded: true,
        state: {
          title: "no2",
          themes: "no2",
        },
      },
    ],
    onFilter: (items) => console.log(items),
  },
};
