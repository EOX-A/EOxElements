import items from "../test/testItems.json";

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
