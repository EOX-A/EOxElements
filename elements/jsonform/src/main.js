import { LitElement, html } from "lit";
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

  /**
   * Editor has loaded schema and API is ready to be used
   */
  #emitReady() {
    this.dispatchEvent(new Event("ready"));
  }

  /**
   * Value object has been changed
   */
  #emitValue() {
    if (this.options?.show_opt_in) setTimeout(() => initShowOptInElement(this));

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
      </style>
      <form></form>
    `;
  }
}

customElements.define("eox-jsonform", EOxJSONForm);
