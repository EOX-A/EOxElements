import items from "../test/testItems.json";

/**
 * Generates a story configuration for the Auto Spread result.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
function AutoSpreadStory() {
  return {
    args: {
      config: {
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
      },
      items,
    },
  };
}

export default AutoSpreadStory;
