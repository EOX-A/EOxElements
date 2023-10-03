import { html } from "lit";
import { when } from "lit/directives/when.js";
import { keyed } from "lit/directives/keyed.js";
import { EOxLayerControlBase } from "./base";
import { createSortable, getLayerType } from "../helpers";
import "./layer";
import "./layerGroup";

/**
 * Display of a list of layers
 *
 * @element eox-layercontrol-layer-list
 */
export class EOxLayerControlLayerList extends EOxLayerControlBase {
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

  updated() {
    if (!this.layers || this.layers.listeners_?.["change:length"]) {
      return;
    }
    this.layers.on("change:length", () => {
      this.requestUpdate();
      this.dispatchEvent(new CustomEvent("changed", { bubbles: true }));
    });
    createSortable(this.renderRoot.querySelector("ul"), this.layers, this);
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        ${this.styleBasic}
        ${!this.unstyled && this.styleEOX}
      </style>
      <ul>
        ${when(
          this.layers,
          () => html`
            ${[...this.layers.getArray()]
              .filter(
                (l) =>
                  !l.get("layerControlHide") && !l.get("layerControlOptional")
              )
              .reverse()
              .map((layer) =>
                keyed(
                  layer.get(this.idProperty),
                  html`
                    <li
                      data-layer="${layer.get(this.idProperty)}"
                      data-type="${getLayerType(layer, this.map)}"
                    >
                      ${layer.getLayers
                        ? html`
                            <eox-layercontrol-layer-group
                              .group=${layer}
                              .idProperty=${this.idProperty}
                              .map=${this.map}
                              .titleProperty=${this.titleProperty}
                              .unstyled=${this.unstyled}
                              @changed=${() => this.requestUpdate()}
                            >
                            </eox-layercontrol-layer-group>
                          `
                        : html`
                            <eox-layercontrol-layer
                              .layer=${layer}
                              .titleProperty=${this.titleProperty}
                              .unstyled=${this.unstyled}
                              @changed=${() => this.requestUpdate()}
                            ></eox-layercontrol-layer>
                          `}
                    </li>
                  `
                )
              )}
          `
        )}
      </ul>
    `;
  }

  styleBasic = ``;

  styleEOX = `
    ul {
      padding: 0;
    }
    ul ul {
      padding-left: 48px;
    }
    li {
      list-style: none;
    }
    li {
      border-bottom: 1px solid #0041703a;
    }
    li:first-child {
      border-top: 1px solid #0041703a;
    }
    li:last-child {
      border: none;
    }
  `;
}

customElements.define("eox-layercontrol-layer-list", EOxLayerControlLayerList);
