import items from "../test/testItems.json";

/**
 * Generates a story configuration for the Multi Select item filter with pre-selected items.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
function MultiSelectStory() {
  return {
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
}

export default MultiSelectStory;
