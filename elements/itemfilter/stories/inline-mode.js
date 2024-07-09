import items from "../test/testItems.json";

function InlineModeStory() {
  return {
    args: {
      config: {
        inlineMode: true,
        titleProperty: "title",
        aggregateResults: "themes",
        enableHighlighting: true,
        autoSpreadSingle: true,
        showResults: false,
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
            placeholder: "Search codes",
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
          },
          {
            key: "timestamp",
            type: "range",
            format: "date",
            expanded: true,
          },
        ],
      },
      items,
    },
  };
}

export default InlineModeStory;
