import { LitElement, html } from "lit";
import { filterLayers } from "../helpers";

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
            <option
              value="${
                // @ts-ignore
                layer.get(this.idProperty) || layer.ol_uid
              }"
            >
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
              // @ts-ignore
              (l.get(this.idProperty) || l.ol_uid) ===
              /** @type HTMLInputElement*/ (
                this.querySelector("select[name=optional]")
              ).value
            );
          });
          // TODO always set the new layer at the first position
          selectedLayer?.set("layerControlOptional", false);
          selectedLayer?.setVisible(true);
          this.dispatchEvent(new CustomEvent("changed", { bubbles: true }));
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
