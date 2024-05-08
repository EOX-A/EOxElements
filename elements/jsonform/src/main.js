import { LitElement, html } from "lit";
import { createEditor } from "./helpers";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import isEqual from "lodash.isequal";

/**
 * @typedef {JSON & {properties: object}} JsonSchema
 * @element eox-jsonform
 */

export class EOxJSONForm extends LitElement {
  static properties = {
    schema: { attribute: false, type: Object },
    value: { attribute: false, type: Object },
    options: { attribute: false, type: Object },
    noShadow: { attribute: "no-shadow", type: Boolean },
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
     * Renders the element without a shadow root
     *
     * @type {Boolean}
     */
    this.noShadow = false;

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
   * The JSONEditor instance
   */
  get editor() {
    return this.#editor;
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
    if (this.#editor && !isEqual(this._schema, newSchema)) {
      this.#editor.destroy();
    }
    this._schema = newSchema;
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
    if (this.#editor && this.#editor.ready && !isEqual(this._value, newVal)) {
      this.#editor.setValue(this.value);
    }
    this._value = newVal;
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
      this.#editor.on(evt, () => {
        this._value = this.#editor.getValue();
        this.#emitValue();
      });
    });
  }

  async updated(changedProperties) {
    this._value = await this.parseProperty(this.value);
    // check if schema has been changed to prevent useless parsing
    if (changedProperties.has("schema")) {
      this._schema = await this.parseProperty(this.schema);
      if (!this.#editor || this.#editor.destroyed) {
        this.#editor = await createEditor(this);
        this.#dispatchEvent();
      }
    }
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
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
