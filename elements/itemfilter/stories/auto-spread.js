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
        inlineMode: false,
        titleProperty: "title",
        aggregateResults: "themes",
        enableHighlighting: true,
        autoSpreadSingle: true,
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
            placeholder: "Search Codes",
            expanded: true,
            inline: true,
          },
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
          {
            key: "tags",
            title: "Tags",
            type: "multiselect",
            placeholder: "Select tags",
            expanded: true,
            inline: false,
          },
          {
            key: "timestamp",
            type: "range",
            format: "date",
            expanded: true,
          },
          {
            key: "geometry",
            type: "spatial",
          },
        ],
      },
      items,
    },
  };
}

export default AutoSpreadStory;
