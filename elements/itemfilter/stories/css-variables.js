import items from "../test/testItems.json";
import { html } from "lit";

/**
 * Generates a story configuration for showcasing the CSS variables
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
function CSSVariablesStory() {
  return {
    render: (args) =>
      html`<eox-itemfilter
        .aggregateResults=${args.aggregateResults}
        .items=${args.items}
        .titleProperty=${args.titleProperty}
        .subTitleProperty=${args.subTitleProperty}
        .filterProperties=${args.filterProperties}
        style=${args.style}
      ></eox-itemfilter>`,
    args: {
      aggregateResults: "themes",
      titleProperty: "title",
      subTitleProperty: "description",
      filterProperties: [
        {
          key: "themes",
          title: "Theme",
          type: "multiselect",
        },
      ],
      items,
      style: "--form-flex-direction: row",
    },
  };
}

export default CSSVariablesStory;
