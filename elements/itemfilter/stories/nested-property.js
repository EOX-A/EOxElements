import items from "../test/testItems.json";
import { html } from "lit";

/**
 * Generates a story configuration for the nested property.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
function NestedPropertyStory() {
  return {
    render: (args) =>
      html`<eox-itemfilter
        .items=${args.items}
        .titleProperty=${args.titleProperty}
        .aggregateResults=${args.aggregateResults}
        .filterProperties=${args.filterProperties}
      ></eox-itemfilter>`,
    args: {
      titleProperty: "title",
      aggregateResults: "themes",
      filterProperties: [
        {
          key: "status.code",
          title: "Status",
          type: "multiselect",
          expanded: true,
          inline: true,
        },
      ],
      items,
    },
  };
}

export default NestedPropertyStory;
