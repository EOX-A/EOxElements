import { LitElement, html } from "lit";
import { filterLayers } from "../helpers";
import { addToListMethod } from "../methods/optional-list";

export class EOxLayerControlOptionalList extends LitElement {
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
     */
    this.idProperty = "id";

    /**
     * The OL layer collection
     * @type {import("ol").Collection<import("ol/layer").Layer>}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html}
     */
    this.layers = null;

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

  #handleAddToList() {
    addToListMethod(this);
  }

  render() {
    const filteredLayersList = filterLayers(
      this.layers.getArray(),
      "layerControlOptional",
      true
    );
    return html`
      <label for="optional">Optional layers</label>

      <select name="optional" data-cy="optionalLayers">
        <option disabled selected value>
          -- select an optional layer to add --
        </option>
        ${filteredLayersList.map((layer) => {
          // @ts-ignore
          const value = layer.get(this.idProperty) || layer.ol_uid;
          const title = layer.get(this.titleProperty);
          const id = `layer ${layer.get(this.idProperty)}`;
          const label = title || id;

          return html` <option value="${value}">${label}</option> `;
        })}
      </select>
      <button @click="${this.#handleAddToList}">add</button>
    `;
  }
}

customElements.define(
  "eox-layercontrol-optional-list",
  EOxLayerControlOptionalList
);
