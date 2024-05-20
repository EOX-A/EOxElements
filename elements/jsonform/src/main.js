import { LitElement, html } from "lit";
import { createEditor, parseProperty } from "./helpers";
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
    this.schema;

    /**
     * Default values for the form editor
     *
     * @type {JsonSchema}
     */
    this.value;

    /**
     * Default values for the form editor
     *
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
     *
     * @type {Boolean}
     */
    this.unstyled = false;
  }

  /**
   * Getter for the JSONEditor instance
   */
  get editor() {
    return this.#editor;
  }

  /**
   * Getter for the JSON schema used to render the form
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
   * Getter for the default values to fill the form
   */
  get value() {
    return this._value;
  }

  /**
   *  Setter for the default values to fill the form
   *
   * @param {JsonSchema} newVal
   */
  set value(newVal) {
    if (this.#editor && this.#editor.ready && !isEqual(this._value, newVal))
      this.#editor.setValue(this.value);

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

  /**
   * Lifecycle method called when the element is updated
   *
   * @param {Object} changedProperties
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
    }
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
      </style>
      <form></form>
    `;
  }
}

customElements.define("eox-jsonform", EOxJSONForm);
