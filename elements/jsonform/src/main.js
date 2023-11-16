import { JSONEditor } from "@json-editor/json-editor/dist/jsoneditor.js";
import { LitElement, html } from "lit";

/**
 * @typedef {JSON & {properties: object}} JsonSchema
 * @element eox-jsonform
 */

class EOxJSONForm extends LitElement {
  static properties = {
    _data: { attribute: false, state: true },
    _editor: { attribute: false, state: true },
    schema: { attribute: "schema", type: Object },
    defaultValues: { attribute: "default-values", type: Object },
  };

  constructor() {
    super();

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
     * data input by the user
     * @type {{[key: string]: any}}
     */
    this._data = {};

    /**
     * editor instance generated through - JSONEditor
     * @type {{[key: string]: any}}
     */
    this._editor = null;
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

  #emitData() {
    /**
     * Data object has been changed
     */
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: this._data,
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
        * {
          --primary-color: #004170;
        }
      </style>
      <form></form>
    `;
  }
}

customElements.define("eox-jsonform", EOxJSONForm);
