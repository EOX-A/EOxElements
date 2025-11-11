import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import {
  createEditor,
  parseProperty,
  transformLinks,
  initShowOptInElement,
} from "./helpers";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import isEqual from "lodash.isequal";
import _DOMPurify from "isomorphic-dompurify"; // required for allowing HTML in jsonform-rendered titles & descriptions

/**
 * `eox-jsonform` is a flexible and extensible web component for rendering dynamic forms based on JSON schema definitions.
 * It is based on [JSON Editor](https://github.com/json-editor/json-editor) and extends its functionality to support various advanced features.
 * Also check out the [JSON Editor documentation](https://github.com/json-editor/json-editor?tab=readme-ov-file#options) for more details on the available options and configurations.
 *
 * Features:
 * - Renders forms from JSON schema, supporting complex nested structures and custom validation.
 * - All properties and event handlers are passed via args, enabling dynamic configuration and integration.
 * - Supports custom editor interfaces for advanced input types and external editor integration (e.g., Ace, Markdown, spatial drawtools).
 * - Handles spatial inputs (bounding box, polygons, points, lines) and outputs in various formats (GeoJSON, WKT).
 * - Allows toggling and opt-in/optional properties, with dynamic visibility and value updates.
 * - Can load schema and values from external URLs, supporting async loading and ready events.
 * - Integrates with `eox-map` for spatial feature selection when required.
 * - Supports unstyled rendering for custom design integration.
 *
 * See the stories for usage examples covering validation, custom editors, spatial inputs, opt-in/optional properties, external loading, and more.
 *
 * @typedef {JSON & {properties: object}} JsonSchema
 * @element eox-jsonform
 */
export class EOxJSONForm extends LitElement {
  static properties = {
    schema: { attribute: false, type: Object },
    value: { attribute: false, type: Object },
    options: { attribute: false, type: Object },
    customEditorInterfaces: { attribute: false, type: Array },
    noShadow: { attribute: "no-shadow", type: Boolean },
    propertiesToggle: { attribute: "properties-toggle", type: Boolean },
    unstyled: { type: Boolean },
  };

  /**
   * editor instance generated through - JSONEditor
   *
   * @type {{[key: string]: any}}
   */
  #editor = null;
  constructor() {
    super();

    /**
     * Schema for the form editor
     *
     * @type {JsonSchema}
     */
    this.schema = null;

    /**
     * JSON value of the form editor
     *
     * @type {JsonSchema}
     */
    this.value = null;

    /**
     * Options for the form editor
     *
     * @type {object}
     */
    this.options = {};

    /**
     * Renders the element without a shadow root
     *
     * @type {Boolean}
     */
    this.noShadow = false;

    /**
     * Shows a toggle for showing/hiding object properties editing buttons
     * To be used in combination with `options.disable_properties = false`
     *
     * @type {Boolean}
     */
    this.propertiesToggle = false;

    /**
     * Render the element without additional styles
     *
     * @type {Boolean}
     */
    this.unstyled = false;

    /**
     * List of custom editor interface
     * Read more about the implementation of custom editor interfaces here:
     * https://github.com/json-editor/json-editor/blob/master/docs/custom-editor.html
     *
     * @type {Array}
     */
    this.customEditorInterfaces = [];
  }

  /**
   * Getter for the JSONEditor instance
   */
  get editor() {
    return this.#editor;
  }

  /**
   * Getter for the JSON schema used to render the form
   *
   * @return {JsonSchema | String}
   */
  get schema() {
    return this._schema;
  }

  /**
   * Setter for the JSON schema used to render the form
   *
   * @param {JsonSchema} newSchema
   */
  set schema(newSchema) {
    if (this.#editor && !isEqual(this._schema, newSchema)) {
      this.#editor.destroy();
    }
    this._schema = newSchema;
  }

  /**
   * Getter for the JSON value of the form
   */
  get value() {
    return this._value;
  }

  /**
   *  Setter for the JSON value of the form
   *
   * @param {JsonSchema} newVal
   */
  set value(newVal) {
    if (this.#editor && this.#editor.ready && !isEqual(this._value, newVal))
      this.#editor.setValue(newVal);

    this._value = newVal;
  }

  #emitReady() {
    /**
     * Editor has loaded schema and API is ready to be used
     */
    this.dispatchEvent(new Event("ready"));
  }

  /**
   * Value object has been changed
   */
  #emitValue() {
    if (this.options?.show_opt_in) setTimeout(() => initShowOptInElement(this));

    /**
     * The value of the form has changed. Event detail includes the new value
     */
    this.dispatchEvent(
      new CustomEvent(`change`, {
        detail: this.value,
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * Dispatch same function for multiple event type
   */
  #dispatchEvent() {
    const events = ["ready", "change"];

    events.map((evt) => {
      this.#editor.on(evt, () => {
        if (evt === "ready") {
          this.#emitReady();
        }
        this._value = this.#editor.getValue();
        this.#emitValue();
      });
    });
  }

  /**
   * Dummy placeholder for submit event dispatching
   * as it is actually displatched from ./helpers/editor.js
   */
  #dispatchSubmit() {
    /**
     * Form has been submitted (if a submit button is present). Event detail includes the current value
     */
    this.dispatchEvent(
      new CustomEvent("submit", {
        detail: "dummy",
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * Lifecycle method called when the element is updated
   *
   * @param {import("lit").PropertyValues} changedProperties
   */
  async updated(changedProperties) {
    this._value = await parseProperty(this.value);
    // check if schema has been changed to prevent useless parsing
    if (changedProperties.has("schema")) {
      this._schema = await parseProperty(this.schema);

      if (!this.#editor || this.#editor.destroyed) {
        this.#editor = await createEditor(this);
        this.#dispatchEvent();
      }
    } else if (changedProperties.has("customEditorInterfaces")) {
      if (this.customEditorInterfaces) {
        this.#editor = await createEditor(this);
        this.#dispatchEvent();
      }
    }
    transformLinks(this);
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /**
   * Renders the component's HTML and CSS
   */
  render() {
    return html`
      <style>
        ${style}
          ${!this.unstyled && styleEOX}
          ${this.options?.disable_properties === false
            ? ``
            : `
          form[data-theme="html"][data-theme-custom="eox"] > [data-schemaid="root"] > .je-header,
          form[data-theme="html"][data-theme-custom="eox"] > [data-schemaid="root"] > .je-object__controls {
            display: none;
          }
        `}
          input[type="checkbox"].json-editor-opt-in {
          display: none !important;
        }
        #properties-editing-switch {
          position: absolute;
          bottom: 2rem;
          right: 3rem;
          z-index: 5;
          transform: scale(1.25);
        }
        #properties-editing-switch i > svg {
          padding: 0.3rem;
          border-radius: 0;
        }
        @media screen and (max-width: 1024px) {
          #properties-editing-switch {
            right: 20px;
          }
        }
      </style>
      <div class="form-container">
        <form></form>
      </div>
      <!-- Shows a switch/toggle for all the object editing buttons
      If unchecked, the editing buttons are not shown, if checked, they are shown -->
      ${when(
        this.options?.disable_properties === false && this.propertiesToggle,
        () => html`
          <label class="switch icon" id="properties-editing-switch">
            <input
              type="checkbox"
              @input=${(e) => {
                this.renderRoot
                  .querySelectorAll(".json-editor-btn-edit_properties")
                  .forEach((b) =>
                    e.target.checked
                      ? b.classList.remove("hidden")
                      : b.classList.add("hidden"),
                  );
              }}
            />
            <span>
              <i class="small">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>Show/hide properties editor</title>
                  <path
                    d="M3 3H17C18.11 3 19 3.9 19 5V12.08C17.45 11.82 15.92 12.18 14.68 13H11V17H12.08C11.97 17.68 11.97 18.35 12.08 19H3C1.9 19 1 18.11 1 17V5C1 3.9 1.9 3 3 3M3 7V11H9V7H3M11 7V11H17V7H11M3 13V17H9V13H3M22.78 19.32L21.71 18.5C21.73 18.33 21.75 18.17 21.75 18S21.74 17.67 21.71 17.5L22.77 16.68C22.86 16.6 22.89 16.47 22.83 16.36L21.83 14.63C21.77 14.5 21.64 14.5 21.5 14.5L20.28 15C20 14.82 19.74 14.65 19.43 14.53L19.24 13.21C19.23 13.09 19.12 13 19 13H17C16.88 13 16.77 13.09 16.75 13.21L16.56 14.53C16.26 14.66 15.97 14.82 15.71 15L14.47 14.5C14.36 14.5 14.23 14.5 14.16 14.63L13.16 16.36C13.1 16.47 13.12 16.6 13.22 16.68L14.28 17.5C14.26 17.67 14.25 17.83 14.25 18S14.26 18.33 14.28 18.5L13.22 19.32C13.13 19.4 13.1 19.53 13.16 19.64L14.16 21.37C14.22 21.5 14.35 21.5 14.47 21.5L15.71 21C15.97 21.18 16.25 21.35 16.56 21.47L16.75 22.79C16.77 22.91 16.87 23 17 23H19C19.12 23 19.23 22.91 19.25 22.79L19.44 21.47C19.74 21.34 20 21.18 20.28 21L21.5 21.5C21.64 21.5 21.77 21.5 21.84 21.37L22.84 19.64C22.9 19.53 22.87 19.4 22.78 19.32M18 19.5C17.17 19.5 16.5 18.83 16.5 18S17.18 16.5 18 16.5 19.5 17.17 19.5 18 18.84 19.5 18 19.5Z"
                  />
                </svg>
              </i>
            </span>
            <div class="tooltip left">Enable properties editing</div>
          </label>
        `,
      )}
    `;
  }
}

customElements.define("eox-jsonform", EOxJSONForm);
