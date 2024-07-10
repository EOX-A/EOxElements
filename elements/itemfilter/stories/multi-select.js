import items from "../test/testItems.json";

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
