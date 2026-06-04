import { html } from "lit";

/**
 * Story for the Date Range Filter.
 * Demonstrates the integration of `eox-timecontrol` within `eox-itemfilter`
 * when a filter property has `type: "range"` and `format: "date"`.
 *
 * @returns {Object} The story configuration.
 */
function DateRangeFilterStory() {
  const items = [
    { title: "Item 1", timestamp: "2021-01-01" },
    { title: "Item 2", timestamp: "2021-01-10" },
    { title: "Item 3", timestamp: "2021-01-20" },
    { title: "Item 4", timestamp: "2021-01-30" },
  ];

  return {
    render: (args) =>
      html`<eox-itemfilter
        .items=${args.items}
        .filterProperties=${args.filterProperties}
      ></eox-itemfilter>`,
    args: {
      storyCodeBefore: `import "@eox/timecontrol/dist/eox-timecontrol.js";`,
      filterProperties: [
        {
          key: "timestamp",
          title: "Date Range",
          type: "range",
          format: "date",
          expanded: true,
        },
      ],
      items,
    },
  };
}

export default DateRangeFilterStory;
