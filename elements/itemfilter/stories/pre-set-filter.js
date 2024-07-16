import items from "../test/testItems.json";

/**
 * Generates a story configuration for the pre-set filter state
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
function PreSetFilterStory() {
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

export default PreSetFilterStory;
