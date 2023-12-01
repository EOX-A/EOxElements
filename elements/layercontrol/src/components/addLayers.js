import { LitElement, html, nothing } from "lit";
import { isLayerJSONValid } from "../helpers";

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
   * Parses the layers input into JSON format and adds or updates the layers accordingly.
   * Supports both single and multiple layer additions.
   */
  #handleAddLayer() {
    /**
     * @type {{data: []}} Converting any array into json and parsing it using JSON.parse
     **/
    const layers = JSON.parse(`{"data":${this.layersInput}}`);

    // Check if the parsed data is an array
    if (Array.isArray(layers.data)) {
      // Iterate over each layer in the array and add/update it in the map
      layers.data.forEach((layer) => {
        this.eoxMap.addOrUpdateLayer(layer);
      });
    } else {
      // If the parsed data is not an array, directly add/update the layer in the map
      this.eoxMap.addOrUpdateLayer(layers.data);
    }
  }

  /**
   * Handles changes in the input field, parsing entered data into JSON format.
   * Cleans up the input string to ensure valid JSON format and triggers an update.
   *
   * @param {Event} evt - The input change event.
   */
  #handleInputChange(evt) {
    // Extracts the value entered in the input field
    const inputValue = evt.target.value;

    // Replace single quotes with double quotes, ensuring keys are in double quotes for valid JSON
    const replacedQuotes = inputValue.replace(
      /(['"])?([a-zA-Z0-9_]+)(['"])?:/g,
      '"$2": '
    );

    // Remove trailing commas before closing braces and brackets
    const removedCommas = replacedQuotes
      .replace(/,\s*}/g, "}")
      .replace(/,\s*]/g, "]");

    // Remove extra spaces around braces, brackets, and commas for cleaner JSON
    const cleanedInput = removedCommas.replace(/\s*(\{|}|\[|\]|,)\s*/g, "$1");

    // Update the stored layers input with the cleaned JSON data
    this.layersInput = cleanedInput;

    // Request a UI update to reflect changes
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
            disabled=${isLayerJSONValid(this.layersInput) ? nothing : true}
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
