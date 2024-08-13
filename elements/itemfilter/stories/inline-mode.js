import items from "../test/testItems.json";
import { html } from "lit";

/**
 * Generates a story configuration for the InlineMode item filter.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
function InlineModeStory() {
  return {
    render: (args) =>
      html`<eox-itemfilter
        .items=${args.items}
        .inlineMode=${args.inlineMode}
        .titleProperty=${args.titleProperty}
        .aggregateResults=${args.aggregateResults}
        .showResults=${args.showResults}
        .filterProperties=${args.filterProperties}
      ></eox-itemfilter>`,
    args: {
      inlineMode: true,
      titleProperty: "title",
      aggregateResults: "themes",
      showResults: false,
      filterProperties: [
        {
          keys: ["title", "themes"],
          title: "Search",
          type: "text",
          placeholder: "Type Something...",
          expanded: true,
        },
        {
          key: "code",
          title: "Codes",
          type: "multiselect",
          placeholder: "Search codes",
          expanded: true,
        },
        {
          key: "themes",
          title: "Theme",
          type: "select",
          placeholder: "Select a theme",
          expanded: true,
        },
        {
          key: "timestamp",
          type: "range",
          title: "Timestamp",
          format: "date",
          expanded: true,
        },
        {
          key: "range",
          title: "Range",
          type: "range",
          expanded: true,
          min: -100,
          max: 100,
          step: 10
        }
      ],
      items,
    },
  };
}

export default InlineModeStory;
