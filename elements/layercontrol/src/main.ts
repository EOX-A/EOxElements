import { LitElement, html, nothing, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { Map, Collection } from "ol";
import { Layer } from "ol/layer";
import LayerGroup from "ol/layer/Group";
// @ts-ignore
import Sortable from "sortablejs/modular/sortable.core.esm.js";
import { style } from "./style";
import { styleEOX } from "./style.eox";

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

  @property({ type: Boolean })
  unstyled: Boolean;

  private _updateControl(layerCollection: Collection<any>) {
    this.layerCollection = layerCollection;
    // @ts-ignore
    this.optionalLayerArray = this.filterLayers(
      layerCollection.getArray(),
      "layerControlOptional",
      true
    );
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
    targetLayer.setOpacity(value);
  }

  changeStyleProperty(targetLayer: Layer, property: string, value: number) {
    // @ts-ignore
    targetLayer.updateStyleVariables({
      // @ts-ignore
      ...targetLayer.style_,
      [property]: value,
    });
  }

  private preFilterLayers(layerArray: Array<Layer>) {
    return [...layerArray].filter(
      (l) =>
        l.get("layerControlHide") !== true &&
        l.get("layerControlOptional") !== true
    );
  }

  /**
   * Hack to force re-rendering of entire list.
   * TODO better way to force refresh?
   */
  hideList: Boolean;
  private resetLayerConfig() {
    const originalConfig = this.layerConfig;
    this.layerConfig = [];
    this.hideList = true;
    setTimeout(() => {
      this.layerConfig = originalConfig;
      this.hideList = false;
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

    const listItems = (
      layers: Array<Layer | LayerGroup>,
      group?: string
    ): TemplateResult => html`
      <ul data-group="${group ?? nothing}">
        ${map(
          layers,
          (layer) => html`
            <li
              data-layer="${
                //@ts-ignore
                layer.get(this.layerIdentifier)
              }"
            >
              <div class="layer">
                <label>
                  <input
                    type="checkbox"
                    checked="${layer.getVisible() || nothing}"
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
                  ? html`<div class="dragHandle">
                      <span>=</span>
                    </div>`
                  : nothing}
              </div>
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
                      <button
                        @click=${() => this._emitLayerconfig(layer as Layer)}
                      >
                        configure
                      </button>
                    `
                  : nothing
              }
              ${
                // @ts-ignore
                layer.getLayers
                  ? listItems(
                      this.preFilterLayers(
                        // @ts-ignore
                        [...layer.getLayers().getArray()].reverse()
                      ),
                      layer.get("id")
                    )
                  : nothing
              }
            </li>
          `
        )}
      </ul>
    `;

    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <div>
        <slot></slot>
        <div>
          ${!this.hideList &&
          listItems(
            this.preFilterLayers(collection.getArray() as Array<Layer>)
          )}
        </div>
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
                // always set the new layer at the first position
                // TODO make configurable?
                const firstPosition = true;
                if (firstPosition) {
                  this.layerCollection.remove(selectedLayer);
                  this.layerCollection.insertAt(
                    this.layerCollection.getLength(),
                    selectedLayer
                  );
                }
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
      const lists = this.renderRoot.querySelectorAll("ul");
      lists.forEach((list) => {
        const inGroup = list.dataset.group;
        Sortable.create(list, {
          handle: ".dragHandle",
          dataIdAttr: "data-layer",
          store: {
            get: () => {
              if (inGroup) {
                const group = this.findLayerById(
                  this.layerCollection.getArray(),
                  inGroup
                );
                // @ts-ignore
                const groupCollection = group.getLayers();
                return [
                  ...groupCollection
                    .getArray()
                    .map((l: Layer) => l.get(this.layerIdentifier)),
                ].reverse();
              } else {
                return [
                  ...this.layerCollection
                    .getArray()
                    .map((l) => l.get(this.layerIdentifier)),
                ].reverse();
              }
            },

            set: (sortable: Sortable) => {
              var order = sortable.toArray().reverse();

              order.forEach((layerId: string, index: number) => {
                if (inGroup) {
                  const group = this.findLayerById(
                    this.layerCollection.getArray(),
                    inGroup
                  );
                  // @ts-ignore
                  const groupCollection = group.getLayers();
                  const layer = this.findLayerById(
                    groupCollection.getArray(),
                    layerId
                  );
                  groupCollection.remove(layer);
                  groupCollection.insertAt(index, layer);
                } else {
                  const layer = this.findLayerById(
                    this.layerCollection.getArray(),
                    layerId
                  ) as Layer;
                  this.layerCollection.remove(layer);
                  this.layerCollection.insertAt(index, layer);
                }
              });
            },
          },
          onSort: () => {
            this.resetLayerConfig();
          },
        });
      });
    }
  }

  filterLayers = (
    layers: Array<Layer | LayerGroup>,
    key: string,
    value: any
  ) => {
    let found: Array<Layer | LayerGroup> = [];
    const search = (
      searchLayers: Array<Layer | LayerGroup>,
      key: string,
      value: any
    ) => {
      found = [...found, ...searchLayers.filter((l) => l.get(key) === value)];
      // @ts-ignore
      const groups = searchLayers.filter((l) => l.getLayers);
      if (groups.length > 0) {
        groups.forEach((group) =>
          // @ts-ignore
          search(group.getLayers().getArray(), key, value)
        );
      }
      return found;
    };
    search(layers, key, value);
    return found;
  };

  findLayerById = (layers: Array<Layer | LayerGroup>, id: string) => {
    return this.filterLayers(layers, "id", id)[0];
  };
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
    if (property === "opacity") {
      // @ts-ignore
      this._layerControlElement.changeOpacity(
        this._currentLayer,
        parseFloat(evt.target.value)
      );
    } else {
      // @ts-ignore
      this._layerControlElement.changeStyleProperty(
        this._currentLayer,
        property,
        parseFloat(evt.target.value)
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
                  min="0"
                  max="1"
                  step="0.01"
                  value="${this._currentLayer.getOpacity()}"
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
