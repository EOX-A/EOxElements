import { JSONEditor } from "@json-editor/json-editor/src/core.js";
import { SimplemdeEditor } from "@json-editor/json-editor/src/editors/simplemde.js";
import EasyMDE from "easymde/dist/easymde.min.js";
import AceEditor from "ace-builds";
import addCustomInputs from "../custom-inputs";
import { FALLBACK_SCHEMA } from "../enums";

const inputHandlerMap = new WeakMap();

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
      .querySelectorAll("input[type='checkbox']:not(.je-modal input)")
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
        if (button.classList.contains("json-editor-btn-edit")) {
          button.innerHTML = `
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>
          </i>`;
        }
        if (button.classList.contains("json-editor-btn-edit_properties")) {
          button.innerHTML = `
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-list-bulleted</title><path d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" /></svg>
          </i>`;
        }
        if (button.classList.contains("json-editor-btn-save")) {
          button.innerHTML = `
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>
          </i>`;
        }
        if (button.classList.contains("json-editor-btn-copy")) {
          button.innerHTML = `
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-copy</title><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" /></svg>
          </i>`;
        }
        if (button.classList.contains("json-editor-btn-cancel")) {
          button.innerHTML = `
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cancel</title><path d="M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z" /></svg>
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

/**
 * Initialize the opt-in properties element
 * disabled inputs are enabled and
 * change event is added to toggle the opt-in checkbox
 *
 * @param {import("../main").EOxJSONForm} element - The eox-jsonform instance
 */
export const initShowOptInElement = (element) => {
  /** @type {NodeListOf<HTMLButtonElement>} */
  const buttons = element.renderRoot.querySelectorAll(
    ".je-indented-panel .row button.json-editor-btn-add:disabled",
  );

  // Enable all add buttons in the opt-in properties
  buttons.forEach((button) => {
    button.disabled = false;
  });

  /** @type {NodeListOf<HTMLInputElement>} */
  const optInElements = element.renderRoot.querySelectorAll(
    ".json-editor-opt-in",
  );

  // Enable all opt-in checkboxes
  optInElements.forEach((optInEle) => {
    /** @type {NodeListOf<HTMLInputElement>} */
    const inputs = optInEle
      .closest(".row")
      .querySelectorAll(
        ".form-control input[name^='root']:not(.json-editor-opt-in)",
      );

    inputs.forEach((input) => {
      const oldHandler = inputHandlerMap.get(input);
      if (oldHandler) {
        // Remove old handler if it exists
        input.removeEventListener("change", oldHandler);
      }

      // Create a new handler for the input change event
      const newHandler = (e) => {
        let isEveryInputNull = true;

        inputs.forEach((inputEle) => {
          if (inputEle.value) isEveryInputNull = false;
        });

        // If all inputs are null and opt-in is checked, click the opt-in checkbox
        if (isEveryInputNull && optInEle.checked) {
          optInEle.click();
          inputs.forEach((inputEle) => (inputEle.disabled = false));
        }
        // If not all inputs are null and opt-in is unchecked, click the opt-in checkbox
        else if (!isEveryInputNull && !optInEle.checked) {
          optInEle.click();
        }
        e.target.focus();
      };

      const deleteBtn = input
        .closest(".je-indented-panel")
        .querySelector(".json-editor-btn-delete:not([style*='display: none'])");

      // Add the new handler to the input
      if (deleteBtn) {
        const deleteHandler = () => {
          let isEveryInputNull = true;

          inputs.forEach((inputEle) => {
            if (inputEle.id !== input.id && inputEle.value)
              isEveryInputNull = false;
          });

          // If all inputs are null and opt-in is checked, click the opt-in checkbox
          if (isEveryInputNull && optInEle.checked) {
            optInEle.click();
            inputs.forEach((inputEle) => (inputEle.disabled = false));
          }
        };
        deleteBtn.addEventListener("click", deleteHandler);
      }

      // Store the new handler in the map
      inputHandlerMap.set(input, newHandler);
      input.removeEventListener("change", newHandler);
      input.addEventListener("change", newHandler);
      input.disabled = false;
    });
  });
};
