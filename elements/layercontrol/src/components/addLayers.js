import { LitElement, html, nothing } from "lit";
import {
  handleAddLayerMethod,
  handleInputChangeMethod,
  isLayerJSONValid,
} from "../helpers";

export class EOxLayerControlAddLayers extends LitElement {
  static properties = {
    eoxMap: { attribute: false, state: true },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
  };

  /**
   * @type string
   */
  layersInput = null;
  constructor() {
    super();

    /**
     * @type import("../../../map/main").EOxMap
     */
    this.eoxMap = null;

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

  /**
   * Handles the addition of one or multiple layers to the map based on the input.
   */
  #handleAddLayer() {
    handleAddLayerMethod(this);
  }

  /**
   * Handles changes in the input field
   *
   * @param {Event} evt - The input change event.
   */
  #handleInputChange(evt) {
    handleInputChangeMethod(evt, this);
  }

  render() {
    return html`
      <style>
        ${!this.unstyled && this.#styleEOX}
      </style>
      <div class="add-layer">
        <div class="main-label">
          <label>Add WMS/XYZ Layer JSON</label>
          <button
            disabled=${isLayerJSONValid(this.layersInput) ? nothing : true}
            class="small add-layer-btn"
            @click=${this.#handleAddLayer}
          >
            Add
          </button>
        </div>
        <textarea
          class="add-layer-input"
          placeholder="Please put a valid layer json."
          @input=${this.#handleInputChange}
          .value=${this.layersInput}
        ></textarea>
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
