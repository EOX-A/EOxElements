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
     * @type {import("ol").Collection<import("ol/layer").Layer>}
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
          ).find((l) => {
            return (
              l.get(this.idProperty) ===
              /** @type HTMLInputElement*/ (
                this.querySelector("select[name=optional]")
              ).value
            );
          });
          // TODO always set the new layer at the first position
          selectedLayer?.set("layerControlOptional", false);
          selectedLayer?.setVisible(true);
          this.dispatchEvent(new CustomEvent("changed", { bubbles: true }));
          console.log(this.layers.getArray());
          this.renderRoot.parentNode
            .querySelectorAll("eox-layercontrol-layer-list")
            .forEach((layerList) =>
              /** @type {import("lit").LitElement} */ (
                layerList
              ).requestUpdate()
            );
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
