import items from "../test/testItems.json";
import { html } from "lit";

/**
 * Generates a story configuration for the Auto Spread result.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
function AutoSpreadStory() {
  return {
    render: (args) =>
      html`<eox-itemfilter
        .items=${args.items}
        .titleProperty=${args.titleProperty}
        .aggregateResults=${args.aggregateResults}
        .autoSpreadSingle=${args.autoSpreadSingle}
        .filterProperties=${args.filterProperties}
      ></eox-itemfilter>`,
    args: {
      titleProperty: "title",
      aggregateResults: "themes",
      autoSpreadSingle: true,
      filterProperties: [
        {
          key: "themes",
          title: "Theme",
          type: "select",
          placeholder: "Select a theme",
          expanded: true,
          inline: false,
          state: {
            air: true,
          },
        },
      ],
      items,
    },
  };
}

export default AutoSpreadStory;
