import { JSONEditor } from "@json-editor/json-editor/src/core.js";
import { SimplemdeEditor } from "@json-editor/json-editor/src/editors/simplemde.js";
import EasyMDE from "easymde/dist/easymde.min.js";
import addCustomInputs from "../custom-inputs";

// using a drop-in replacement for EasyMDE,
// see https://github.com/json-editor/json-editor/issues/1093
window.SimpleMDE = EasyMDE;

/**
 * Create the editor instance
 *
 * @param {HTMLElement} element - The eox-jsonform instance
 * @returns {JSONEditor} - The initialized JSONEditor instance
 */
export const createEditor = (element) => {
  // Add custom inputs if any
  addCustomInputs(element.value || {});

  // Get the form element from the shadow DOM
  const formEle = element.renderRoot.querySelector("form");

  // Initialize the JSONEditor with the given schema, value, and options
  const initEditor = () =>
    new JSONEditor(formEle, {
      schema: element.schema,
      ...(element.value ? { startval: element.value } : {}),
      theme: "html",
      ajax: true,
      ...element.options,
    });

  // Create the editor instance
  let editor = initEditor();

  // Event listener for the 'ready' event
  editor.on("ready", () => {
    /// Check if any editor requires SimpleMDE and load necessary stylesheets
    if (
      Object.values(editor.editors).some((e) => e instanceof SimplemdeEditor)
    ) {
      // Add SimpleMDE styles
      const style = document.createElement("style");
      style.innerHTML = `
          @import url("https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css");
          @import url("https://unpkg.com/easymde/dist/easymde.min.css");
        `;
      element.renderRoot.insertBefore(style, element.renderRoot.firstChild);
    }
  });
  return editor;
};

/**
 * Fetch properties from a URL and return them
 *
 * @typedef {JSON & {properties: object}} JsonSchema
 * @param {JsonSchema | String} property - The property to fetch or parse
 * @returns {Promise<JsonSchema | String>} - The parsed property or fetched schema
 */
export async function parseProperty(property) {
  if (property) {
    if (typeof property !== "object") {
      // Property is a URL so we need to fetch it
      try {
        const response = await fetch(property);
        if (response.ok) return await response.json();
        else
          console.error("Failed to fetch schema from URL: ", response.status);
      } catch (error) {
        console.error("Error fetching schema: ", error);
      }
    }
  }
  return property;
}
