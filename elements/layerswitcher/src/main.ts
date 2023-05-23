import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { Map, Collection } from "ol";
import { Layer } from "ol/layer";
// @ts-ignore
import Sortable from "sortablejs/modular/sortable.core.esm.js";
import { style } from "./style";

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
@customElement("eox-layerswitcher")
export class EOxLayerSwitcher extends LitElement {
  private _currentlySorting: Boolean;

  @state()
  olMap: Map;

  @state()
  layerCollection: Collection<Layer>;

  @state()
  layerArray: Array<Layer>;

  @property()
  layerIdentifier = "id";

  @property()
  layerTitle = "title";

  @property()
  sortBy = "layerOrder";

  @property({ type: Array })
  layerConfig: Array<string> = ["opacity"];

  @property({ type: Boolean })
  externalLayerConfig: Boolean = undefined;

  @property()
  attachTo = (olMap: Map) => {
    this.olMap = olMap;
    const collection = olMap.getLayers();
    this._updateSwitcher(collection);
    collection.on("change:length", () => {
      if (!this._currentlySorting) {
        this._updateSwitcher(collection);
      }
    });
    this.render();
  };

  private _updateSwitcher(layerCollection: Collection<any>) {
    this.layerCollection = layerCollection;
    const initialLayers = [...layerCollection.getArray()].filter(
      (l) => l.get("displayInLayerSwitcher") !== false
    );
    const zIndexSorting = this.getAttribute("sortBy") === "zIndex";
    if (zIndexSorting) {
      initialLayers.sort((lA, lB) => {
        return lA.get("zIndex")
          ? lA.get("zIndex") < lB.get("zIndex")
            ? 1
            : -1
          : 1;
      });
    } else {
      initialLayers.reverse();
    }
    this.layerArray = initialLayers;
    this.requestUpdate();
  }

  private _emitLayerconfig(layer: Layer) {
    const options = {
      detail: {
        layer,
      },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent("layerconfig", options));
  }

  changeOpacity(targetLayer: Layer, value: number) {
    targetLayer.setOpacity(value / 100);
  }

  render() {
    return html`
      <style>
        ${style}
      </style>
      <div>
        <slot></slot>
        <ul>
          ${map(
            this.layerArray,
            (layer) => html`
              <li layerid="${layer.get(this.layerIdentifier)}">
                <label>
                  <input
                    type="checkbox"
                    checked="${layer.getVisible() || nothing}"
                    @click=${() => layer.setVisible(!layer.getVisible())}
                  />
                  <span class="title">${layer.get(this.layerTitle)}</span>
                </label>
                ${this.sortBy === "layerOrder"
                  ? html` <span class="dragHandle">=</span> `
                  : nothing}
                ${this.layerConfig && !this.externalLayerConfig
                  ? html`
                      <details>
                        <summary>Layer config</summary>
                        <eox-layerconfig
                          .layerConfig="${this.layerConfig}"
                          .layerSwitcher="${this}"
                          .layer=${layer}
                        ></eox-layerconfig>
                      </details>
                    `
                  : this.externalLayerConfig
                  ? html`
                      <button @click=${() => this._emitLayerconfig(layer)}>
                        configure
                      </button>
                    `
                  : nothing}
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }

  updated() {
    // TODO implement zIndex sorting logic
    if (this.sortBy == "layerOrder") {
      Sortable.create(this.renderRoot.querySelector("ul"), {
        handle: ".dragHandle",
        onChange: () => {
          const switcherOrder = Array.from(
            this.renderRoot.querySelectorAll("li")
          )
            .map((item) => item.getAttribute("layerId"))
            .reverse();
          // current state of layers
          this._currentlySorting = true;
          const layers = this.layerCollection.getArray();
          for (const [index, layerId] of switcherOrder.entries()) {
            const layer = layers.find(
              (layer) => layer.get(this.layerIdentifier) === layerId
            );
            this.layerCollection.remove(layer);
            this.layerCollection.insertAt(index, layer);
          }
          this._currentlySorting = false;
        },
      });
    }
  }
}

@customElement("eox-layerconfig")
export class EOxLayerConfig extends LitElement {
  @property()
  for: string;

  @property({ type: Array })
  layerConfig: Array<string>;

  @property({ type: Object, attribute: false })
  layerSwitcher: HTMLElement;

  @property({ type: Object, attribute: false })
  layer: Layer;

  private _layerSwitcherElement: HTMLElement;

  @state()
  private _currentLayer: Layer;

  private _handleInput(evt: HTMLElementEvent<HTMLInputElement>) {
    // @ts-ignore
    this._layerSwitcherElement.changeOpacity(
      this._currentLayer,
      evt.target.value
    );
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (!this.layerConfig && !this.layerSwitcher) {
      // "external" mode, i.e. rendered in separate div
      this._layerSwitcherElement = document.querySelector(`#${this.for}`);
      console.log(this._layerSwitcherElement);
      // @ts-ignore
      this.layerConfig = this._layerSwitcherElement.layerConfig;
      if (this._layerSwitcherElement) {
        this._layerSwitcherElement.addEventListener("layerconfig", (evt) => {
          // @ts-ignore
          this._currentLayer = evt.detail.layer;
          this.requestUpdate();
        });
      }
    } else {
      // "internal" mode, i.e. embedded in layerswitcher
      this._layerSwitcherElement = this.layerSwitcher;
      this._currentLayer = this.layer;
    }
  }
  render() {
    return html`
      <style>
        ${style}
      </style>
      <div>
        <slot></slot>
        layer: ${this._currentLayer.get("name")}
        ${map(
          this.layerConfig,
          (property) => html`
            <div>${property}</div>
            <input
              type="range"
              value="100"
              @input=${(evt: HTMLElementEvent<HTMLInputElement>) =>
                this._handleInput(evt)}
            />
          `
        )}
      </div>
    `;
  }
}
