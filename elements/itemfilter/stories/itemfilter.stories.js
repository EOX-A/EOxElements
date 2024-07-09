// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";

import items from "../test/testItems.json";
import { AutoSpreadStory, InlineModeStory, PrimaryStory } from "./index.js";

export default {
  title: "Elements/eox-itemfilter",
  tags: ["autodocs"],
  component: "eox-itemfilter",
  render: (args) =>
    html`<eox-itemfilter
      .config=${args.config}
      .items=${args.items}
    ></eox-itemfilter>`,
};

export const Primary = PrimaryStory();

const AutoSpread2 = {
  args: {
    config: {
      titleProperty: "title",
      filterProperties: [
        {
          keys: ["title", "themes"],
          title: "Search",
          type: "text",
          expanded: true,
        },
        {
          key: "themes",
          title: "Theme",
          type: "multiselect",
        },
        {
          key: "timestamp",
          type: "range",
          format: "date",
        },
        {
          key: "geometry",
          type: "spatial",
        },
      ],
      aggregateResults: "themes",
      autoSpreadSingle: true,
      enableHighlighting: true,
      onSelect: () => {},
    },
    items,
  },
};

const MultiSelect = {
  args: {
    config: {
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
    items,
  },
};

const SortedMultiSelect = {
  args: {
    config: {
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
    items,
  },
};

const InlineMode2 = {
  args: {
    config: {
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
      onFilter: () => {},
    },
    items,
  },
};

export const AutoSpread = AutoSpreadStory();

export const InlineMode = InlineModeStory();
