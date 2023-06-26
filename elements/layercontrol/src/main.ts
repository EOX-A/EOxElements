import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { Map, Collection } from "ol";
import { Layer } from "ol/layer";
// @ts-ignore
import Sortable from "sortablejs/modular/sortable.core.esm.js";
import { style } from "./style";

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
@customElement("eox-layercontrol")
export class EOxLayerControl extends LitElement {
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
    this._updateControl(collection);
    collection.on("change:length", () => {
      if (!this._currentlySorting) {
        this._updateControl(collection);
      }
    });
    this.render();
  };

  private _updateControl(layerCollection: Collection<any>) {
    this.layerCollection = layerCollection;
    const initialLayers = [...layerCollection.getArray()].filter(
      (l) => l.get("displayInLayerControl") !== false
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

  changeStyleProperty(targetLayer: Layer, property: string, value: number) {
    // @ts-ignore
    targetLayer.updateStyleVariables({
      // @ts-ignore
      ...targetLayer.style_,
      [property]: value,
    });
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
                ${this.layerConfig
                  ? html`
                      <eox-layerconfig
                        .layerConfig="${this.layerConfig}"
                        .layerControl="${this}"
                        .layer=${layer}
                        .external=${this.externalLayerConfig}
                      ></eox-layerconfig>
                    `
                  : nothing}
                ${
                  // @ts-ignore
                  this.externalLayerConfig && layer.style_
                    ? html`
                        <button @click=${() => this._emitLayerconfig(layer)}>
                          configure
                        </button>
                      `
                    : nothing
                }
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
          const controlOrder = Array.from(
            this.renderRoot.querySelectorAll("li")
          )
            .map((item) => item.getAttribute("layerId"))
            .reverse();
          // current state of layers
          this._currentlySorting = true;
          const layers = this.layerCollection.getArray();
          for (const [index, layerId] of controlOrder.entries()) {
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
  layerControl: HTMLElement;

  @property({ type: Object, attribute: false })
  layer: Layer;

  @property({ type: Boolean })
  external: Boolean;

  private _layerControlElement: HTMLElement;

  @state()
  private _currentLayer: Layer;

  @state()
  private _configList: Object = {};

  private _handleInput(
    evt: HTMLElementEvent<HTMLInputElement>,
    property: string
  ) {
    console.log(property, evt.target.value);
    if (property === "opacity") {
      // @ts-ignore
      this._layerControlElement.changeOpacity(
        this._currentLayer,
        parseInt(evt.target.value)
      );
    } else {
      // @ts-ignore
      this._layerControlElement.changeStyleProperty(
        this._currentLayer,
        property,
        parseInt(evt.target.value)
      );
    }
  }

  private _parseConfigs(currentLayer: Layer) {
    if (!currentLayer) {
      return;
    }
    // @ts-ignore
    const styleConfig = currentLayer.style_;
    if (styleConfig) {
      if (styleConfig.color && styleConfig.color[0] === "array") {
        this._configList = styleConfig.variables;
      }
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (!this.layerConfig && !this.layerControl) {
      // "external" mode, i.e. rendered in separate div
      this._layerControlElement = document.querySelector(`#${this.for}`);
      // @ts-ignore
      this.layerConfig = this._layerControlElement.layerConfig;
      if (this._layerControlElement) {
        this._layerControlElement.addEventListener("layerconfig", (evt) => {
          // @ts-ignore
          this._currentLayer = evt.detail.layer;
          this._parseConfigs(this._currentLayer);
          this.requestUpdate();
        });
      }
    } else {
      // "internal" mode, i.e. embedded in layercontrol
      this._layerControlElement = this.layerControl;
      this._currentLayer = this.layer;
      this._parseConfigs(this._currentLayer);
    }
  }
  render() {
    return html`
      <style>
        ${style}
      </style>
      ${when(
        this._currentLayer,
        () => html`
          <div>
            <slot></slot>
            ${this.for
              ? html`layer: ${this._currentLayer.get("name")}`
              : nothing}
            ${map(
              this.layerConfig.filter((lC) =>
                this.for ? lC !== "opacity" : true
              ),
              (property) => html`
                <div>${property}</div>
                <input
                  type="range"
                  value="100"
                  @input=${(evt: HTMLElementEvent<HTMLInputElement>) =>
                    this._handleInput(evt, property)}
                />
              `
            )}
            ${Object.keys(this._configList).length > 0 && !this.external
              ? html`
                  <details open="${this.for ? true : nothing}">
                    <summary>Layer config</summary>
                    <ul>
                      ${map(
                        Object.keys(this._configList),
                        (property) => html` <li>
                          <div>${property}</div>
                          <input
                            type="range"
                            min="${["red", "green", "blue"].includes(property)
                              ? 1
                              : 2000}"
                            max="${["red", "green", "blue"].includes(property)
                              ? 4
                              : 5000}"
                            value="${
                              // @ts-ignore
                              this._configList[property]
                            }"
                            @input=${(
                              evt: HTMLElementEvent<HTMLInputElement>
                            ) => this._handleInput(evt, property)}
                          />
                        </li>`
                      )}
                    </ul>
                  </details>
                `
              : nothing}
          </div>
        `
      )}
    `;
  }
}
