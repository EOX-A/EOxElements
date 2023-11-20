import { JSONEditor } from "@json-editor/json-editor/dist/jsoneditor.js";
import { LitElement, html } from "lit";
import { style } from "./style";
import { styleEOX } from "./style.eox";

/**
 * @typedef {JSON & {properties: object}} JsonSchema
 * @element eox-jsonform
 */

export class EOxJSONForm extends LitElement {
  static properties = {
    _data: { attribute: false, state: true },
    _editor: { attribute: false, state: true },
    id: { attribute: "id", type: String },
    schema: { attribute: "schema", type: Object },
    defaultValues: { attribute: "default-values", type: Object },
    options: { attribute: "options", type: Object },
    unstyled: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * Schema for the form editor
     * @type {String}
     */
    this.id;

    /**
     * Schema for the form editor
     * @type {JsonSchema}
     */
    this.schema;

    /**
     * Default values for the form editor
     * @type {JsonSchema}
     */
    this.defaultValues;

    /**
     * Default values for the form editor
     * @type {object}
     */
    this.options = {};

    /**
     * data input by the user
     * @type {{[key: string]: any}}
     */
    this._data = {};

    /**
     * editor instance generated through - JSONEditor
     * @type {{[key: string]: any}}
     */
    this._editor = null;

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;
  }

  /**
   * Get The JSON schema for rendering the form
   */
  getSchema() {
    return this.schema;
  }
  /**
   * @param {JsonSchema} newSchema
   */
  setSchema(newSchema) {
    this.schema = newSchema;
  }

  /**
   * Get default value for rendering the form
   */
  getDefaultValues() {
    return this.defaultValues;
  }
  /**
   * @param {JsonSchema} newVal
   */
  setDefaultValues(newVal) {
    this.defaultValues = newVal;
  }

  /**
   * Get default value for rendering the form
   */
  getValues() {
    return this._data;
  }

  #emitData() {
    /**
     * Data object has been changed
     */
    this.dispatchEvent(
      new CustomEvent(`change:json-form#${this.id}`, {
        detail: this._data,
        bubbles: true,
        composed: true,
      })
    );
    this.requestUpdate();
  }

  firstUpdated() {
    if (!this._editor) {
      const formEle = this.renderRoot.querySelector("form");

      this._editor = new JSONEditor(formEle, {
        schema: this.schema,
        ...(this.defaultValues ? { startval: this.defaultValues } : {}),
        theme: "html",
        ajax: true,
        ...this.options,
      });

      this._editor.on("ready", () => {
        this._data = this._editor.getValue();
        this.#emitData();
      });

      this._editor.on("change", () => {
        this._data = this._editor.getValue();
        this.#emitData();
      });
    }
  }

  render() {
    return html`
      <style>
        ${style}
          ${!this.unstyled && styleEOX}
      </style>
      <form></form>
    `;
  }
}

customElements.define("eox-jsonform", EOxJSONForm);
