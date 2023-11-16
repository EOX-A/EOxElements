import { JSONEditor } from "@json-editor/json-editor/dist/jsoneditor.js";

/**
 * @typedef {JSON & {properties: object}} JsonSchema
 */

customElements.define(
  "eox-jsonform",
  class extends HTMLElement {
    #schema = JSON.parse(this.getAttribute("schema"));
    #startval = JSON.parse(this.getAttribute("startval"));
    /**
     * @type {{[key: string]: any}}
     */
    #data = {};
    #editor;

    /**
     * The JSON schema for rendering the form
     */
    get schema() {
      return this.#schema;
    }
    /**
     * @param {JsonSchema} newSchema
     */
    set schema(newSchema) {
      this.#schema = newSchema;
      this.render();
    }

    /**
     * The start value of the form
     */
    get startval() {
      return this.#startval;
    }
    /**
     * @param {JSON} newVal
     */
    set startval(newVal) {
      this.#startval = newVal;
      this.render();
    }

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }

    render() {
      if (!this.#schema) {
        return;
      }
      this.shadowRoot.innerHTML = `
        <style>
          * {
            --primary-color: #004170;
          }
        </style>
        <form>
        <form>
      `;
      this.#editor = new JSONEditor(this.shadowRoot.querySelector("form"), {
        schema: this.#schema,
        ...(this.#startval ? { startval: this.#startval } : {}),
        // disable_collapse: true,
        // disable_edit_json: true,
        // disable_properties: true,
        theme: "html",
        ajax: true,
      });
      this.#editor.on("change", () => {
        this.#data = this.#editor.getValue();
        this.#emitData();
      });
    }

    #emitData() {
      /**
       * Data object has been changed
       */
      this.dispatchEvent(
        new CustomEvent("change", {
          detail: this.#data,
        })
      );
    }
  }
);
