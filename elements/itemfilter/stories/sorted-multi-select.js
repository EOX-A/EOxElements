import items from "../test/testItems.json";

/**
 * Generates a story configuration for the Sorted Multi Select item filter with pre-selected items.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
function SortedMultiSelectStory() {
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
            sort: (a, b) => b.localeCompare(a),
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

export default SortedMultiSelectStory;
