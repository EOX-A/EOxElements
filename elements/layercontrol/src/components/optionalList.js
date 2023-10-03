import { html } from "lit";
import { EOxLayerControlBase } from "./base";
import { filterLayers } from "../helpers";

export class EOxLayerControlOptionalList extends EOxLayerControlBase {
  static properties = {
    ...super.properties,
    layers: { attribute: false },
  };

  constructor() {
    super();

    /**
     * The OL layer collection
     * @type {import("ol").Collection<import("ol/layer").Layer | import("ol/layer").Group>}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html}
     */
    this.layers = null;
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <label for="optional">Optional layers</label>

      <select name="optional" data-cy="optionalLayers">
        <option disabled selected value>
          -- select an optional layer to add --
        </option>
        ${filterLayers(
          this.layers.getArray(),
          "layerControlOptional",
          true
        ).map(
          (layer) => html`
            <option value="${layer.get(this.idProperty)}">
              ${layer.get(this.titleProperty) ||
              `layer ${layer.get(this.idProperty)}`}
            </option>
          `
        )}
      </select>
      <button
        @click="${() => {
          const selectedLayer = filterLayers(
            this.layers.getArray(),
            "layerControlOptional",
            true
          ).find(
            (l) =>
              l.get(this.idProperty) ===
              this.querySelector("select[name=optional]").value
          );
          // TODO always set the new layer at the first position
          selectedLayer.set("layerControlOptional", false);
          selectedLayer.setVisible(true);
          this.dispatchEvent(new CustomEvent("changed", { bubbles: true }));
          this.renderRoot.parentNode
            .querySelectorAll("eox-layercontrol-layer-list")
            .forEach((layerList) => layerList.requestUpdate());
          this.requestUpdate();
        }}"
      >
        add
      </button>
    `;
  }
}

customElements.define(
  "eox-layercontrol-optional-list",
  EOxLayerControlOptionalList
);
