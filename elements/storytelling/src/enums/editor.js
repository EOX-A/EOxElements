export const EDITOR_SCHEMA = {
  properties: {
    Story: {
      type: "string",
      format: "markdown",
      options: {
        simplemde: {
          toolbar: [
            "bold",
            "italic",
            "strikethrough",
            "heading",
            "|",
            "unordered-list",
            "ordered-list",
            "|",
            "link",
            "image",
            "table",
          ],
          spellChecker: false,
          autofocus: true,
        },
      },
    },
  },
};
