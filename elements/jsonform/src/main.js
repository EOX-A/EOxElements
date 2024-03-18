import { JSONEditor } from "@json-editor/json-editor/src/core.js";
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
    value: { attribute: false, type: Object },
    options: { attribute: false, type: Object },
    unstyled: { type: Boolean },
  };

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
    this.value;

    /**
     * Default values for the form editor
     * @type {object}
     */
    this.options = {
      show_opt_in: false,
      disable_collapse: true,
      disable_edit_json: true,
      disable_properties: true,
      disable_array_delete_all_rows: true,
      disable_array_delete_last_row: true,
      array_controls_top: true,
    };

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;
  }
  /**
   * @param {JsonSchema | String} property
   */
  async parseProperty(property) {
    if (property) {
      if (typeof property !== "object") {
        // Property is a URL so we need to fetch it
        try {
          const response = await fetch(property);
          if (response.ok) {
            const json = await response.json();
            return json;
          } else {
            console.error("Failed to fetch schema from URL: ", response.status);
          }
        } catch (error) {
          console.error("Error fetching schema: ", error);
        }
      }
    }
    return property;
  }
  /**
   * JSON schema used to render the form
   */
  get schema() {
    return this._schema;
  }
  /**
   * @param {JsonSchema} newSchema
   */

  set schema(newSchema) {
    let oldValue = this._schema;
    this._schema = newSchema;
    if (this.#editor) {
      this.#editor.destroy();
      addCustomInputs(this.value || {});

      const formEle = this.renderRoot.querySelector("form");

      this.#editor = new JSONEditor(formEle, {
        schema: this.schema,
        ...(this.value ? { startval: this.value } : {}),
        theme: "html",
        ajax: true,
        ...this.options,
      });

      this.#dispatchEvent();
    }
    this.requestUpdate("schema", oldValue);
  }

  /**
   * Default values to fill the form
   */
  get value() {
    return this._value;
  }
  /**
   * @param {JsonSchema} newVal
   */
  set value(newVal) {
    let oldValue = this._value;
    this._value = newVal;
    if (this.#editor && this.#editor.ready) {
      this.#editor.setValue(this.value);
    }
    this.requestUpdate("value", oldValue);
  }

  /**
   * Value object has been changed
   */
  #emitValue() {
    this.dispatchEvent(
      new CustomEvent(`change`, {
        detail: this.value,
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * Dispatch same function for multiple event type
   */
  #dispatchEvent() {
    const events = ["ready", "change"];

    events.map((evt) => {
      this.#editor.on(evt, async () => {
        if (evt == "ready") {
          this.#editor.setValue(await this.parseProperty(this.value));
        }

        this._value = this.#editor.getValue();
        this.#emitValue();
      });
    });
  }

  async updated(changedProperties) {
    // check if schema or startVals has been changed to prevent useless parsing
    if (changedProperties.has("schema")) {
      this.schema = await this.parseProperty(this.schema);
    }
    this.value = await this.parseProperty(this.value);

    if (!this.#editor) {
      addCustomInputs(this.value || {});

      const formEle = this.renderRoot.querySelector("form");

      this.#editor = new JSONEditor(formEle, {
        schema: this.schema,
        ...(this.value ? { startval: this.value } : {}),
        theme: "html",
        ajax: true,
        ...this.options,
      });

      this.#dispatchEvent();
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
