import {
  importMdFile,
  exportMdFile,
  toggleComments,
} from "../helpers/editor.js";
import { getSectionIndexes } from "../helpers";

const addCustomTool = (name, output, className, title, action) => ({
  name,
  action:
    action ||
    function customFunction({ codemirror }) {
      const startPoint = codemirror.getCursor("start");
      const endPoint = codemirror.getCursor("end");
      codemirror.replaceRange(output, startPoint, endPoint);
    },
  className,
  title,
});

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
            "link",
            "|",
            addCustomTool(
              "import",
              null,
              "fa fa-upload",
              "Import Markdown File",
              importMdFile
            ),
            addCustomTool(
              "export",
              null,
              "fa fa-download",
              "Export Markdown File",
              exportMdFile
            ),
            "|",
            addCustomTool(
              "comments",
              null,
              "fa fa-eye-slash",
              "Preview markdown with (or without) comments",
              toggleComments
            ),
            addCustomTool(
              "add-custom-section",
              null,
              "fa fa-plus",
              "Add custom section",
              () => {
                const element = document.querySelector("eox-storytelling");
                const markdownArr = element.markdown.split("\n");
                const sectionIndexes = getSectionIndexes(markdownArr);

                if (element) {
                  element.addCustomSectionIndex = sectionIndexes.length;
                  element.requestUpdate();
                }
              }
            ),
          ],
          spellChecker: false,
          autofocus: true,
        },
      },
    },
  },
};
