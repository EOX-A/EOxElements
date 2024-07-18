import items from "../test/testItems.json";

/**
 * Generates a story configuration for the nested property.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
function NestedPropertyStory() {
  return {
    args: {
      config: {
        inlineMode: false,
        titleProperty: "title",
        aggregateResults: "themes",
        enableHighlighting: true,
        autoSpreadSingle: true,
        filterProperties: [
          {
            key: "status.code",
            title: "Status",
            type: "multiselect",
            expanded: true,
            inline: true,
          },
        ],
      },
      items,
    },
  };
}

export default NestedPropertyStory;
