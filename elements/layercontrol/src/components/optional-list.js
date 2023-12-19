import { LitElement, html } from "lit";
import { filterLayers } from "../helpers";
import { addToListMethod } from "../methods/optional-list";

/**
 * EOxLayerControlOptionalList is a component that renders a dropdown menu to select optional layers. It manages the presentation of a list of layers,
 * allowing users to choose and add specific layers to a selection. The class provides properties to configure the behavior and appearance of the rendered dropdown.
 * It offers the ability to filter layers based on specific properties and provides a method to handle the addition of selected layers to a list.
 *
 * @element eox-layercontrol-optional-list
 * @extends LitElement
 */
export class EOxLayerControlOptionalList extends LitElement {
  // Define static properties for the component
  static properties = {
    idProperty: { attribute: "id-property" },
    layers: { attribute: false },
    titleProperty: { attribute: "title-property", type: String },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * The layer id property
     *
     * @type {String}
     */
    this.idProperty = "id";

    /**
     * The OL layer collection
     *
     * @type {import("ol").Collection<import("ol/layer").Layer>}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html}
     */
    this.layers = null;

    /**
     * The layer title property
     *
     * @type {String}
     */
    this.titleProperty = "title";

    /**
     * Render the element without additional styles
     *
     * @type {Boolean}
     */
    this.unstyled = false;

    /**
     * Renders the element without a shadow root
     *
     * @type {Boolean}
     */
    this.noShadow = true;
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /**
   * Handles the addition of selected layers to a list.
   * Invokes the 'addToListMethod' with the current context.
   */
  #handleAddToList() {
    addToListMethod(this);
  }

  /**
   * Renders a dropdown menu to select optional layers. Filters the layers list based on the 'layerControlOptional' property,
   * generates a dropdown list of filtered layers, and provides a button to add selected layers. Utilizes 'filterLayers' to obtain a filtered list and extracts necessary data for each layer.
   * Generates dropdown options based on the extracted layer information.
   */
  render() {
    // Filter the layers list based on the 'layerControlOptional' property
    const filteredLayersList = filterLayers(
      this.layers.getArray(),
      "layerControlOptional",
      true
    );

    return html`
      <!-- Label for the dropdown -->
      <label for="optional">Optional layers</label>

      <!-- Dropdown select element -->
      <select name="optional" data-cy="optionalLayers">
        <!-- Default placeholder option -->
        <option disabled selected value>
          -- select an optional layer to add --
        </option>

        <!-- Mapping through filtered layers list to generate dropdown options -->
        ${filteredLayersList.map((layer) => {
          // @ts-ignore
          const value = layer.get(this.idProperty) || layer.ol_uid;
          const title = layer.get(this.titleProperty);
          const id = `layer ${layer.get(this.idProperty)}`;
          const label = title || id;

          // Generating options for the dropdown
          return html` <option value="${value}">${label}</option> `;
        })}
      </select>

      <!-- Button to handle adding layers -->
      <button @click="${this.#handleAddToList}">add</button>
    `;
  }
}

customElements.define(
  "eox-layercontrol-optional-list",
  EOxLayerControlOptionalList
);
