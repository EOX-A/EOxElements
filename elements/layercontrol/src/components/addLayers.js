import { LitElement, html } from "lit";

export class EOxLayerControlAddLayers extends LitElement {
  static properties = {
    idProperty: { attribute: "id-property" },
    titleProperty: { attribute: "title-property", type: String },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * The layer id property
     */
    this.idProperty = "id";

    /**
     * The layer title property
     */
    this.titleProperty = "title";

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;

    /**
     * Renders the element without a shadow root
     */
    this.noShadow = true;
  }

  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  render() {
    return html`
      <style>
        ${!this.unstyled && this.#styleEOX}
      </style>
      <div class="add-layer">
        <div class="main-label">
          <label>Add WMS/XYZ Layer JSON</label>
          <button disabled class="small">Add</button>
        </div>
        <textarea placeholder="Please put a valid layer json."></textarea>
      </div>
    `;
  }

  #styleEOX = `
      * {
        font-family: Roboto, sans-serif;
      }
      .add-layer .main-label {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .add-layer label {
        display: block;
        font-size: small;
        align-items: center;
        align-items: center;
        padding: 0.5rem 0;
        font-weight: 500 !important;
        margin-bottom: 0px !important;
      }
      .add-layer textarea {
        box-sizing: border-box !important;
        width: 240px;
        height: 150px;
        margin: 0.5rem 0rem !important;
        padding: 5px 7px !important;
        border-radius: 4px !important;
        border: 1px solid #0004 !important;
      }
      button[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `;
}

customElements.define("eox-layercontrol-add-layers", EOxLayerControlAddLayers);
