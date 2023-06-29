import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { Map, Collection } from "ol";
import { Layer } from "ol/layer";
// @ts-ignore
import Sortable from "sortablejs/modular/sortable.core.esm.js";
import { style } from "./style";
// @ts-ignore
import iconChecked from "../assets/icon-checked.svg";
// @ts-ignore
import iconUnchecked from "../assets/icon-unchecked.svg";
// @ts-ignore
import iconDrag from "../assets/icon-drag.svg";

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

  @state()
  optionalLayerArray: Array<Layer>;

  /**
   * The query selector for the map
   */
  @property()
  for: string;

  @property()
  layerIdentifier = "ol_uid";

  @property()
  layerTitle = "title";

  @property()
  sortBy = "layerOrder";

  @property({ type: Array })
  layerConfig: Array<string> = ["opacity"];

  @property({ type: Boolean })
  externalLayerConfig: Boolean = undefined;

  private _updateControl(layerCollection: Collection<any>) {
    this.layerCollection = layerCollection;
    const initialLayers = [...layerCollection.getArray()].filter(
      (l) =>
        l.get("layerControlHide") !== true &&
        l.get("layerControlOptional") !== true
    );
    const optionalLayers = [...layerCollection.getArray()].filter(
      (l) => l.get("layerControlOptional") === true
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
    this.optionalLayerArray = optionalLayers;
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

  private hideConfigs = false;
  private resetLayerConfig() {
    this.hideConfigs = true;
    setTimeout(() => {
      this.hideConfigs = false;
      this.requestUpdate();
    }, 0);
  }

  render() {
    const mapQuery = document.querySelector(this.for as string);
    // @ts-ignore
    const olMap: Map = mapQuery.map || mapQuery;

    const collection = olMap.getLayers();
    this._updateControl(collection);
    collection.on("change:length", () => {
      if (!this._currentlySorting) {
        this._updateControl(collection);
      }
    });

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
              <li
                layerid="${
                  //@ts-ignore
                  layer.get(this.layerIdentifier)
                }"
              >
                <div class="layer">
                  <label>
                    ${when(
                      layer.getVisible(),
                      () =>
                        html`<img
                          src="${iconChecked}"
                          width="24"
                          height="24"
                        />`,
                      () =>
                        html`<img
                          src="${iconUnchecked}"
                          width="24"
                          height="24"
                        />`
                    )}
                    <input
                      type="checkbox"
                      checked="${layer.getVisible() || nothing}"
                      style="display: none"
                      @click=${() => {
                        layer.setVisible(!layer.getVisible());
                        this.requestUpdate();
                      }}
                    />
                    <span class="title"
                      >${layer.get(this.layerTitle) ||
                      `layer ${
                        // @ts-ignore
                        layer.get(this.layerIdentifier)
                      }`}</span
                    >
                  </label>
                  ${this.sortBy === "layerOrder"
                    ? html`<img
                        class="dragHandle"
                        src="${iconDrag}"
                        width="24"
                        height="24"
                      />`
                    : nothing}
                </div>
                ${this.layerConfig && !this.hideConfigs
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
        ${when(
          this.optionalLayerArray?.length > 0,
          () => html`
            <label for="optional">Optional layers</label>

            <select name="optional">
              <option disabled selected value>
                -- select an optional layer to add --
              </option>
              ${this.optionalLayerArray.map(
                (layer) => html`
                  <option
                    value="${
                      // @ts-ignore
                      layer.get(this.layerIdentifier)
                    }"
                  >
                    ${layer.get(this.layerTitle) ||
                    `layer ${
                      // @ts-ignore
                      layer.get(this.layerIdentifier)
                    }`}
                  </option>
                `
              )}
            </select>
            <button
              @click="${() => {
                const selectedLayer = this.optionalLayerArray.find(
                  // @ts-ignore
                  (l) =>
                    l.get(this.layerIdentifier) ===
                    // @ts-ignore
                    this.shadowRoot.querySelector("select[name=optional]").value
                );
                selectedLayer.set("layerControlOptional", false);
                selectedLayer.setVisible(true);
                this.resetLayerConfig();
              }}"
            >
              add
            </button>
          `
        )}
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
              // @ts-ignore
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
    console.log(this._currentLayer.get("id"), property, evt.target.value);
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
      this._layerControlElement = document.querySelector(this.for);
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
