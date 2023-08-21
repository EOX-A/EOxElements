import { LitElement, html, nothing, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { live } from "lit/directives/live.js";
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
  private _currentlySorting: boolean;

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
  for = "eox-map";

  @property()
  layerIdentifier = "id";

  @property()
  layerTitle = "title";

  @property()
  sortBy = "layerOrder";

  @property({ type: Array })
  layerConfig: Array<string> = ["opacity"];

  @property({ type: Boolean })
  externalLayerConfig: boolean = undefined;

  @property({ type: Boolean })
  unstyled: boolean;

  private _updateControl(layerCollection: Collection<any>) {
    // initially check if all layers have an id and title,
    // fill in some backup in case they haven't
    const checkProperties = (layerArray: Array<Layer | LayerGroup>) => {
      layerArray.forEach((layer) => {
        if (!layer.get(this.layerIdentifier)) {
          // @ts-ignore
          layer.set(this.layerIdentifier, layer.ol_uid);
        }
        if (!layer.get(this.layerTitle)) {
          // @ts-ignore
          layer.set(this.layerTitle, `layer ${layer.ol_uid}`);
        }
        // @ts-ignore
        if (layer.getLayers) {
          // @ts-ignore
          checkProperties(layer.getLayers().getArray());
        }
      });
    };
    checkProperties(layerCollection.getArray());
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

  toggleLayerVisibility(layer: Layer, groupId?: string) {
    layer.setVisible(!layer.getVisible());
    if (layer.get("layerControlExclusive")) {
      let otherExclusiveLayers = [];
      // check if layer is in group
      if (groupId) {
        const group = this.findLayerById(
          this.layerCollection.getArray(),
          groupId
        ) as LayerGroup;
        otherExclusiveLayers = group
          .getLayers()
          .getArray()
          .filter(
            (l) =>
              l.get(this.layerIdentifier) !== layer.get(this.layerIdentifier) &&
              l.get("layerControlExclusive")
          );
      } else {
        otherExclusiveLayers = this.layerCollection
          .getArray()
          .filter(
            (l) =>
              l.get(this.layerIdentifier) !== layer.get(this.layerIdentifier) &&
              l.get("layerControlExclusive")
          );
      }
      // @ts-ignore
      otherExclusiveLayers.forEach((layer: Layer) => {
        layer.setVisible(false);
      });
    }
    this.requestUpdate();
  }

  render() {
    const mapQuery = document.querySelector(this.for as string);
    if (mapQuery) {
      // @ts-ignore
      this.olMap = mapQuery?.map || mapQuery;
    }

    if (!this.olMap) {
      return nothing;
    }

    const collection = this.olMap.getLayers();
    this._updateControl(collection);
    collection.on("change:length", () => {
      if (!this._currentlySorting) {
        this._updateControl(collection);
      }
    });

    const singleLayer = (layer: Layer, groupId: string) => html`
      <details>
        <summary>
          <div class="layer">
            <div class="left">
              <input
                type="${layer.get("layerControlExclusive")
                  ? "radio"
                  : "checkbox"}"
                .checked="${live(layer.getVisible())}"
                @click=${() => {
                  this.toggleLayerVisibility(layer as Layer, groupId);
                }}
              />
              <span class="title"
                >${layer.get(this.layerTitle) ||
                `${layer.get(this.layerIdentifier)}`}
              </span>
            </div>
            <div class="right">
              ${this.sortBy === "layerOrder" && !this.unstyled
                ? html` <div
                    class="drag-handle ${layer.get("layerControlDisable")
                      ? "disabled"
                      : ""}"
                  >
                    <span>=</span>
                  </div>`
                : nothing}
            </div>
          </div>
        </summary>
        ${this.layerConfig
          ? html`
              <eox-layerconfig
                .layerConfig="${this.layerConfig}"
                .layerControl="${this}"
                .layer=${layer}
                .external=${this.externalLayerConfig}
                .unstyled="${this.unstyled}"
              ></eox-layerconfig>
            `
          : nothing}
        ${
          // @ts-ignore
          this.externalLayerConfig && layer.style_?.color
            ? html`
                <button @click=${() => this._emitLayerconfig(layer as Layer)}>
                  configure
                </button>
              `
            : nothing
        }
        ${
          // @ts-ignore
          layer.getLayers
            ? html`
                ${listItems(
                  this.preFilterLayers(
                    // @ts-ignore
                    [...layer.getLayers().getArray()].reverse()
                  ),
                  layer.get(this.layerIdentifier)
                )}
              `
            : nothing
        }
      </details>
    `;

    const listItems = (
      layers: Array<Layer | LayerGroup>,
      group?: string
    ): TemplateResult => html`
      <ul data-group="${group ?? nothing}">
        ${repeat(
          layers,
          (layer) => layer.get(this.layerIdentifier),
          (layer) => html`
            <li
              data-layer="${
                //@ts-ignore
                layer.get(this.layerIdentifier)
              }"
              data-disabled="${layer.get("layerControlDisable") || nothing}"
              data-type="${this.getLayerType(layer as Layer, this.olMap)}"
              data-layerconfig="${this.layerConfig?.length > 0}"
            >
              ${singleLayer(layer as Layer, group)}
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
        ${this.layerCollection.getArray().length > 10
          ? html`<input type="text" placeholder="Find layer" />`
          : nothing}
        <div class="layers">
          ${listItems(
            this.preFilterLayers(collection.getArray() as Array<Layer>)
          )}
        </div>
        ${when(
          this.optionalLayerArray?.length > 0,
          () => html`
            <label for="optional">Optional layers</label>

            <select name="optional" data-cy="optionalLayers">
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
                  if (selectedLayer.get("group")) {
                    const group = this.findLayerById(
                      this.layerCollection.getArray(),
                      selectedLayer.get("group")
                    ) as LayerGroup;
                    group.getLayers().remove(selectedLayer);
                    group
                      .getLayers()
                      .insertAt(group.getLayers().getLength(), selectedLayer);
                  } else {
                    this.layerCollection.remove(selectedLayer);
                    this.layerCollection.insertAt(
                      this.layerCollection.getLength(),
                      selectedLayer
                    );
                  }
                }
                selectedLayer.set("layerControlOptional", false);
                selectedLayer.setVisible(true);
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
          handle: this.unstyled ? "summary" : ".drag-handle",
          dataIdAttr: "data-layer",
          filter: ".drag-handle.disabled",
          swapThreshold: 0.5,
          animation: 150,
          easing: "cubic-bezier(1, 0, 0, 1)",
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
              const order = sortable.toArray().reverse();

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
          onMove: (e: any) => {
            // disallow disabled items to be dragged over
            return !e.related.dataset.disabled;
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

  getLayerType = (layer: Layer, map: Map) => {
    // trying to guess the layer type from certain properties.
    // the proper way would be to use instanceOf, but for this
    // we'd need OL as a dependency, which we're trying to avoid
    // @ts-ignore
    return layer.getLayers
      ? "group"
      : map
          .getInteractions()
          .getArray()
          // @ts-ignore
          .filter((i) => i.freehand_ !== undefined)
          // @ts-ignore
          .map((i) => i.source_?.ol_uid)
          // @ts-ignore
          .includes(layer.getSource ? layer.getSource()?.ol_uid : false)
      ? "draw"
      : // @ts-ignore
      layer.declutter_ !== undefined
      ? "vector"
      : "raster";
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
  external: boolean;

  @property({ type: Boolean })
  unstyled: boolean;

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
      if (this._layerControlElement) {
        // @ts-ignore
        this.layerConfig = this._layerControlElement.layerConfig;
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
        ${!this.unstyled && styleEOX}
      </style>
      ${when(
        this._currentLayer,
        () => html`
          <div>
            <slot></slot>
            ${this.for
              ? html`layer: ${this._currentLayer.get("name")}`
              : nothing}
            ${repeat(
              this.layerConfig.filter((lC) =>
                this.for ? lC !== "opacity" : true
              ),
              (property) => property,
              (property) => html`
                <div class="slider-control">
                  <div class="slider-property">${property}</div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value="${live(this._currentLayer.getOpacity())}"
                    @input=${(evt: HTMLElementEvent<HTMLInputElement>) =>
                      this._handleInput(evt, property)}
                  />
                </div>
              `
            )}
            ${Object.keys(this._configList).length > 0 && !this.external
              ? html`
                  <details open="${this.for ? true : nothing}">
                    <summary>Layer config</summary>
                    <ul>
                      ${repeat(
                        Object.keys(this._configList),
                        (property) => property,
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
                            value="${live(
                              // @ts-ignore
                              this._configList[property]
                            )}"
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
