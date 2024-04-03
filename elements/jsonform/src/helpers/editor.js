import { JSONEditor } from "@json-editor/json-editor/src/core.js";
import { SimplemdeEditor } from "@json-editor/json-editor/src/editors/simplemde.js";
import addCustomInputs from "../custom-inputs";

/**
 * Create the editor instance
 * @param element the eox-jsonform instance
 */
export const createEditor = (element) => {
  return new Promise((resolve) => {
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
      // Check if one of the editors requires SimpleMDE and it's not yet installed.
      // If so, destroy the editor instance, load SimpleMDE and re-init the editor.
      if (
        Object.values(editor.editors).some(
          (e) => e instanceof SimplemdeEditor
        ) &&
        !window.SimpleMDE
      ) {
        editor.destroy();

        // Add SimpleMDE styles
        const style = element.renderRoot.querySelector("style");
        style.innerHTML = `
          @import url("https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css");
          @import url("https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css");
          ${style.innerHTML}
        `;

        // Add SimpleMDE bundle
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js";
        script.addEventListener("load", () => {
          // Create new editor, this time already using SimpleMDE
          editor = initEditor();
          resolve(editor);
        });
        element.renderRoot.appendChild(script);
      } else {
        resolve(editor);
      }
    });

    return editor;
  });
};
