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
    this.requestUpdate("schema", oldValue);
  }

  /**
   * Default values to fill the form
   */
  get startVals() {
    return this._startVals;
  }
  /**
   * @param {JsonSchema} newVal
   */
  set startVals(newVal) {
    let oldValue = this._startVals;
    this._startVals = newVal;
    this.requestUpdate("startVals", oldValue);
  }

  /**
   * Data object has been changed
   */
  #emitData() {
    this.dispatchEvent(
      new CustomEvent(`change`, {
        detail: this.#data,
        bubbles: true,
        composed: true,
      })
    );
    this.requestUpdate();
  }

  /**
   * Dispatch same function for multiple event type
   */
  #dispatchEvent() {
    const events = ["ready", "change"];

    events.map((evt) => {
      this.#editor.on(evt, () => {
        this.#data = this.#editor.getValue();
        this.#emitData();
      });
    });
  }

  async updated(changedProperties) {
    if (changedProperties.has("schema")) {
      this.schema = await this.parseProperty(this.schema);
    }
    // if startVals is a string it means the component just
    // got created or the prop got changed => we need to parse it,
    // otherwise we prevent needlessly parsing it
    if (typeof this.startVals == "string") {
      this.startVals = await this.parseProperty(this.startVals);
    }

    if (!this.#editor) {
      addCustomInputs(this.startVals || {});

      const formEle = this.renderRoot.querySelector("form");

      this.#editor = new JSONEditor(formEle, {
        schema: this.schema,
        ...(this.startVals ? { startval: this.startVals } : {}),
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