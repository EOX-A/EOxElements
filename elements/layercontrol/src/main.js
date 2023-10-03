import { html } from "lit";
import { when } from "lit/directives/when.js";
import { EOxLayerControlBase } from "./components/base";
import "./components/layerList";
import "./components/optionalList";
import { filterLayers } from "./helpers";

/**
 * Display layyers and groups of a connected map
 *
 * @element eox-layercontrol
 */
export class EOxLayerControl extends EOxLayerControlBase {
  static properties = {
    ...super.properties,
    for: { type: String },
  };

  constructor() {
    super();

    /**
     * The map to attach
     * @type {import("../../map/main").EOxMap}
     */
    this.for = "eox-map";
  }

  updated() {
    this.map = document.querySelector(this.for)?.map;
  }

  render() {
    return html`
      <style>
        ${this.styleBasic}
        ${!this.unstyled && this.styleEOX}
      </style>
      ${when(
        this.map,
        () => html`
          <eox-layercontrol-layer-list
            class="layers"
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .map=${this.map}
            .titleProperty=${this.titleProperty}
            .unstyled=${this.unstyled}
            @changed=${() => this.requestUpdate()}
          ></eox-layercontrol-layer-list>
        `
      )}
      ${when(
        this.map &&
          filterLayers(
            this.map.getLayers().getArray(),
            "layerControlOptional",
            true
          )?.length > 0,
        () => html`
          <eox-layercontrol-optional-list
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${() => this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `
      )}
    `;
  }

  styleBasic = ``;

  styleEOX = `
    * {
      font-family: Roboto, sans-serif;
    }
  `;
}

customElements.define("eox-layercontrol", EOxLayerControl);
