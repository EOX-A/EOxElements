import { LitElement, html, nothing } from "lit";

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

  isLayerJSONValid() {
    try {
      JSON.parse(this.layersInput);

      if (this.layersInput) return true;
      else return false;
    } catch (error) {
      return false;
    }
  }

  #handleAddLayer() {
    /**
     * Converting any array into json and parsing it using JSON.parse
     *
     * @type {{data: []}}
     * */
    const layers = JSON.parse(`{"data":${this.layersInput}}`);

    if (Array.isArray(layers.data))
      layers.data.map((layer) => {
        this.eoxMap.addOrUpdateLayer(layer);
      });
    else this.eoxMap.addOrUpdateLayer(layers.data);
  }

  #handleInputChange(evt) {
    // Convert any js object to JSON
    this.layersInput = evt.target.value
      .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ') // Remove without quote keys to double quote
      .replace(/,\s*}/g, "}") // Remove trailing commas before closing braces
      .replace(/,\s*]/g, "]") // Remove trailing commas before closing brackets
      .replace(/\s*(\{|}|\[|\]|,)\s*/g, "$1"); // Remove extra spaces around braces, brackets, and commas

    this.requestUpdate();
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
            disabled=${this.isLayerJSONValid() ? nothing : true}
            class="small"
            @click=${this.#handleAddLayer}
          >
            Add
          </button>
        </div>
        <textarea
          placeholder="Please put a valid layer json."
          @input=${this.#handleInputChange}
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
