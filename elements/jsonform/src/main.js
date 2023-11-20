import { JSONEditor } from "@json-editor/json-editor/dist/jsoneditor.js";
import { LitElement, html } from "lit";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import addCustomInputs from "./custom-inputs";

/**
 * @typedef {JSON & {properties: object}} JsonSchema
 * @element eox-jsonform
 */

export class EOxJSONForm extends LitElement {
  static properties = {
    schema: { attribute: false, type: Object },
    startVals: { attribute: false, type: Object },
    options: { attribute: false, type: Object },
    unstyled: { type: Boolean },
  };

  /**
   * data input by the user
   * @type {{[key: string]: any}}
   */
  #data = {};

  /**
   * editor instance generated through - JSONEditor
   * @type {{[key: string]: any}}
   */
  #editor = null;

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
    this.startVals;

    /**
     * Default values for the form editor
     * @type {object}
     */
    this.options = {};

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
    return this.startVals;
  }
  /**
   * @param {JsonSchema} newVal
   */
  setDefaultValues(newVal) {
    this.startVals = newVal;
  }

  /**
   * Get default value for rendering the form
   */
  getValues() {
    return this.#data;
  }

  #emitData() {
    /**
     * Data object has been changed
     */
    this.dispatchEvent(
      new CustomEvent(`change`, {
        detail: this.#data,
        bubbles: true,
        composed: true,
      })
    );
    this.requestUpdate();
  }

  firstUpdated() {
    if (!this.#editor) {
      addCustomInputs();

      const formEle = this.renderRoot.querySelector("form");

      this.#editor = new JSONEditor(formEle, {
        schema: this.schema,
        ...(this.startVals ? { startval: this.startVals } : {}),
        theme: "html",
        ajax: true,
        ...this.options,
      });

      this.#editor.on("ready", () => {
        this.#data = this.#editor.getValue();
        this.#emitData();
      });

      this.#editor.on("change", () => {
        this.#data = this.#editor.getValue();
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
