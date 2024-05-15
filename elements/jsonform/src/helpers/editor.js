import { JSONEditor } from "@json-editor/json-editor/src/core.js";
import { SimplemdeEditor } from "@json-editor/json-editor/src/editors/simplemde.js";
import EasyMDE from "easymde/dist/easymde.min.js";
import addCustomInputs from "../custom-inputs";

// using a drop-in replacement for EasyMDE,
// see https://github.com/json-editor/json-editor/issues/1093
window.SimpleMDE = EasyMDE;

/**
 * Create the editor instance
 * @param element the eox-jsonform instance
 */
export const createEditor = (element) => {
  addCustomInputs(element.value || {});

  const formEle = element.renderRoot.querySelector("form");

  const initEditor = () =>
    new JSONEditor(formEle, {
      schema: element.schema,
      ...(element.value ? { startval: element.value } : {}),
      theme: "html",
      ajax: true,
      ...element.options,
    });

  let editor = initEditor();

  editor.on("ready", () => {
    // Check if one of the editors requires SimpleMDE.
    // If so, load the required stylesheets for SimpleMDE.
    if (
      Object.values(editor.editors).some((e) => e instanceof SimplemdeEditor)
    ) {
      // Add SimpleMDE styles
      const style = document.createElement("style");
      style.innerHTML = `
          @import url("https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css");
          @import url("https://unpkg.com/easymde/dist/easymde.min.css");
        `;
      element.renderRoot.appendChild(style);
    }
  });
  return editor;
};
