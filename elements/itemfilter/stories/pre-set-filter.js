import items from "../test/testItems.json";
import { html } from "lit";

/**
 * Generates a story configuration for the pre-set filter state
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
function PreSetFilterStory() {
  return {
    render: (args) =>
      html`<eox-itemfilter
        .items=${args.items}
        .titleProperty=${args.titleProperty}
        .filterProperties=${args.filterProperties}
      ></eox-itemfilter>`,
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
      items,
    },
  };
}

export default PreSetFilterStory;
