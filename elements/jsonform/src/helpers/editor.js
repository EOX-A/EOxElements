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
    if (requiresSimpleMDE(editor)) {
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

  editor.on("change", () => {
    // Adaptations to DOM in order to fit EOxUI
    // Checkboxes are wrapped in a label with a span
    element.renderRoot
      .querySelectorAll("input[type='checkbox']")
      .forEach((input) => {
        const parent = input.parentElement;
        if (
          parent.tagName === "LABEL" &&
          !parent.classList.contains("checkbox")
        ) {
          input.parentElement.classList.add("checkbox");
          const span = document.createElement("span");
          if (
            input.nextSibling &&
            input.nextSibling.nodeType === Node.TEXT_NODE
          ) {
            // If the next sibling is a text node, move it inside the span
            span.appendChild(input.nextSibling);
          }
          input.parentElement.appendChild(span);
        }
      });

    // Apply "link" class to all anchor elements
    element.renderRoot.querySelectorAll("a").forEach((anchor) => {
      anchor.classList.add("link");
    });

    // Button elements
    element.renderRoot.querySelectorAll("button").forEach((button) => {
      if (button.classList.contains("json-editor-btn-")) {
        button.querySelector("i")?.remove();
      } else {
        ["circle", "small", "transparent", "primary-text", "no-margin"].forEach(
          (c) => button.classList.add(c),
        );
        if (button.classList.contains("json-editor-btntype-add")) {
          button.innerHTML = `
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
          </i>`;
        }
        if (button.classList.contains("json-editor-btntype-delete")) {
          button.innerHTML = `
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>
          </i>`;
          button.classList.add("red-text");
        }
        if (button.classList.contains("json-editor-btntype-toggle")) {
          const toggleButton = (state) => {
            button.innerHTML =
              state === "Collapse"
                ? `
            <i class="small">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </i>`
                : `
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </i>
            `;
          };
          button.addEventListener("click", () => {
            toggleButton(button.title);
          });
          toggleButton(button.title);
        }
        if (button.classList.contains("json-editor-btn-moveup")) {
          button.innerHTML = `
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>triangle-small-up</title><path d="M8 15H16L12 8" /></svg>
          </i>`;
        }
        if (button.classList.contains("json-editor-btn-movedown")) {
          button.innerHTML = `
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>triangle-small-down</title><path d="M8 9H16L12 16" /></svg>
          </i>`;
        }
      }
    });
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

// Check if any editor requires SimpleMDE by examining both current editors and schema
function requiresSimpleMDE(editor) {
  // Check current editors first
  if (Object.values(editor.editors).some((e) => e instanceof SimplemdeEditor)) {
    return true;
  }

  // Recursively check schema for potential markdown fields
  function checkSchemaForMarkdown(schema) {
    if (!schema) return false;

    // Check for direct markdown format indication
    if (schema.format === "markdown") return true;

    // Check properties recursively
    if (schema.properties) {
      return Object.values(schema.properties).some(checkSchemaForMarkdown);
    }

    // Check items in arrays
    if (schema.items) {
      return checkSchemaForMarkdown(schema.items);
    }

    // Check anyOf, oneOf, allOf branches
    for (const key of ["anyOf", "oneOf", "allOf"]) {
      if (schema[key] && Array.isArray(schema[key])) {
        if (schema[key].some(checkSchemaForMarkdown)) return true;
      }
    }

    return false;
  }

  return checkSchemaForMarkdown(editor.schema);
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
