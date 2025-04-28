import { JSONEditor } from "@json-editor/json-editor/src/core.js";
import { SimplemdeEditor } from "@json-editor/json-editor/src/editors/simplemde.js";
import EasyMDE from "easymde/dist/easymde.min.js";
import AceEditor from "ace-builds";
import addCustomInputs from "../custom-inputs";
import { FALLBACK_SCHEMA } from "../enums";

// using a drop-in replacement for EasyMDE,
// see https://github.com/json-editor/json-editor/issues/1093
window.SimpleMDE = EasyMDE;

// using Ace editor for code
// see https://github.com/json-editor/json-editor/tree/master?tab=readme-ov-file#specialized-string-editors
window.ace = AceEditor;
//@ts-expect-error - useWorker is not defined in the ace-builds config keys
window.ace.config.set("useWorker", false);
window.ace.config.set(
  "basePath",
  "https://cdn.jsdelivr.net/npm/ace-builds/src-min-noconflict/",
);

/**
 * Create the editor instance
 *
 * @param {import("../main").EOxJSONForm} element - The eox-jsonform instance
 * @returns {JSONEditor} - The initialized JSONEditor instance
 */
export const createEditor = (element) => {
  // Add custom inputs if any
  addCustomInputs(element.value || {}, element.customEditorInterfaces || []);

  // Get the form element from the shadow DOM
  const formEle = element.renderRoot.querySelector("form");
  while (formEle.firstChild) formEle.removeChild(formEle.firstChild);

  // Add default button callback for submit
  // see https://github.com/json-editor/json-editor?tab=readme-ov-file#button-editor
  JSONEditor.defaults.callbacks = {
    button: {
      onSubmit: function () {
        element.dispatchEvent(
          new CustomEvent(`submit`, {
            detail: element.value,
            bubbles: true,
            composed: true,
          }),
        );
      },
    },
  };

  // Allow overriding the resolver
  // TEMP - see open issue at https://github.com/json-editor/json-editor/issues/1647
  JSONEditor.defaults.resolvers.unshift(
    (schema) => schema.options?.resolver && schema.options.resolver,
  );

  // Initialize the JSONEditor with the given schema, value, and options
  const initEditor = () =>
    new JSONEditor(formEle, {
      schema: element.schema || FALLBACK_SCHEMA,
      ...(element.value ? { startval: element.value } : {}),
      theme: "html",
      iconlib: "fontawesome5", // necessary to get information about expand/collapse state
      ajax: true,
      disable_collapse: true,
      disable_edit_json: true,
      disable_properties: true,
      disable_array_delete_all_rows: true,
      disable_array_delete_last_row: true,
      array_controls_top: true,
      ...element.options,
    });

  // Create the editor instance
  let editor = initEditor();

  // Event listener for the 'ready' event
  editor.on("ready", () => {
    //
    element.renderRoot.querySelector("form").dataset.themeCustom = "eox";

    // Workaround to hide tabs where property has `options.hiden`
    // TEMP - see https://github.com/json-editor/json-editor/issues/1577
    const tabsTitles = Array.from(
      element.renderRoot.querySelectorAll(
        ".tabs.je-tabholder--top > .je-tab--top > span",
      ),
    );
    const hideTabsIfPropertiesHidden = (properties) => {
      // Find tabs for hidden properties and set data-hidden
      // in order to hide them with CSS
      Object.entries(properties)
        .filter(([_, property]) => property.options?.hidden)
        .map(([key, property]) => property.title || key)
        .forEach((title) => {
          const tabTitle = tabsTitles.find(
            (tabTitle) => tabTitle.textContent === title,
          );
          if (tabTitle) {
            tabTitle.parentElement.dataset.hidden = "";
          }
        });

      // Recursively go through nested child objects with properties
      Object.values(properties).forEach((property) => {
        if (property.properties) {
          hideTabsIfPropertiesHidden(property.properties);
        }
      });
    };
    hideTabsIfPropertiesHidden(editor.expandSchema(editor.schema).properties);

    // Workaround to emit "change" event also from text inputs
    // TEMP - see https://github.com/json-editor/json-editor/issues/1445
    /** @type {NodeListOf<HTMLInputElement>} */
    const inputElements = element.renderRoot.querySelectorAll(
      "[data-schematype=string] input",
    );
    inputElements.forEach((element) => {
      element.addEventListener("input", () => {
        element.dispatchEvent(
          new CustomEvent("change", { detail: element.value }),
        );
      });
    });

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

    // Check if any editor requires AceEditor
    const aceUsed = Object.values(editor.editors).find((e) => e?.ace_container);
    if (aceUsed && !element.noShadow) {
      // https://github.com/ajaxorg/ace/wiki/Configuring-Ace
      aceUsed.ace_editor_instance.setOptions({
        showPrintMargin: false,
        useSoftTabs: true,
        wrap: true,
      });
      // Attach to shadow root
      aceUsed.ace_editor_instance.renderer.attachToShadowRoot();
      aceUsed.ace_editor_instance.resize();
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

/**
 * Check all links in the form and set target="_blank" and rel="noopener noreferrer"
 * for external ones
 * 
 @param {import("../main").EOxJSONForm} element - The eox-jsonform instance
 */
export const transformLinks = (element) => {
  setTimeout(() => {
    element.renderRoot.querySelectorAll("a").forEach((a) => {
      if (a.getAttribute("href") === null) return;
      if (a.getAttribute("href").startsWith("http")) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      }
    });
  });
};
