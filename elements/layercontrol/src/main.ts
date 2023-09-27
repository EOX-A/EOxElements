import { LitElement, html, css, nothing, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { live } from "lit/directives/live.js";
import { when } from "lit/directives/when.js";
import { Map, Collection } from "ol";
import { Group, Layer } from "ol/layer";
import BaseLayer from "ol/layer/Base";
import { Source } from "ol/source";
import LayerGroup from "ol/layer/Group";
import WebGLTileLayer from "ol/layer/WebGLTile";
import Sortable from "sortablejs";
import { EOxMap } from "../../map/main";
import { style } from "./style";
import { styleEOX } from "./style.eox";

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

type OlLayer = Layer & {
  declutter_: boolean;
  ol_uid: string;
  style_: {
    [x: string]: any;
  };
};

type OlSource = Source & {
  ol_uid: string;
};
@customElement("eox-layercontrol")
export class EOxLayerControl extends LitElement {
  private _currentlySorting: boolean;

  @state()
  olMap: Map;

  @state()
  layerCollection: Collection<BaseLayer>;

  @state()
  layerArray: Array<BaseLayer>;

  @state()
  optionalLayerArray: Array<BaseLayer>;

  @state()
  resizeObserver: ResizeObserver;

  @state()
  // Keep track of individually expanded LayerConfigs
  isLayerConfigExpanded: { [key: string]: boolean } = {};

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

  private _updateControl(layerCollection: Collection<BaseLayer>) {
    // initially check if all layers have an id and title,
    // fill in some backup in case they haven't
    const checkProperties = (layerArray: Array<BaseLayer>) => {
      layerArray.forEach((layer) => {
        if (!layer.get(this.layerIdentifier)) {
          layer.set(this.layerIdentifier, (<OlLayer>layer).ol_uid);
        }
        if (!layer.get(this.layerTitle)) {
          layer.set(this.layerTitle, `layer ${(<OlLayer>layer).ol_uid}`);
        }
        if ((<LayerGroup>layer).getLayers) {
          checkProperties((<LayerGroup>layer).getLayers().getArray());
        }
      });
    };
    checkProperties(layerCollection.getArray());
    this.layerCollection = layerCollection;
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

  private _onLayerConfigToggle(event: Event, layerId: string) {
    const currentState = this.isLayerConfigExpanded[layerId] || false;

    // Open our details section if it's closed to reveal our layer config
    this.shadowRoot
      .querySelector(`[data-layer=${layerId}] details`)
      .setAttribute('open', '');

    // Prevent closing the surrounding dropdown if both the layer and its config are closed.
    event.preventDefault();

    this.isLayerConfigExpanded[layerId] = !currentState;
    this.requestUpdate();
  }

  changeOpacity(targetLayer: Layer, value: number) {
    targetLayer.setOpacity(value);
  }

  changeStyleProperty(targetLayer: OlLayer, property: string, value: number) {
    (<WebGLTileLayer>(<unknown>targetLayer)).updateStyleVariables({
      ...targetLayer.style_,
      [property]: value,
    });
  }

  private preFilterLayers(layerArray: Array<BaseLayer>) {
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
      otherExclusiveLayers.forEach((layer: BaseLayer) => {
        layer.setVisible(false);
      });
    }
    this.requestUpdate();
  }

  // Set up Resize Observer
  firstUpdated() {
    this.resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // Ensure we're observing the correct element
        if (entry.target === this) {
          this.style.setProperty(
            "--container-height",
            `${entry.contentRect.height}px`
          );
          this.requestUpdate();
        }
      }
    });
    this.resizeObserver.observe(this);
  }

  // Deinitialize Resize Observer
  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    super.disconnectedCallback();
  }

  render() {
    const mapQuery = document.querySelector(this.for as string);
    if (mapQuery) {
      if ((<EOxMap>mapQuery).map) {
        this.olMap = <Map>(<EOxMap>mapQuery).map;
      } else {
        this.olMap = <Map>(<unknown>mapQuery);
      }
    }

    if (!this.olMap) {
      return nothing;
    }

    const collection = this.olMap.getLayers();
    this._updateControl(collection);

    const listenForCollectionChange = (
      layerCollection: Collection<BaseLayer>
    ) => {
      layerCollection.on("change:length", () => {
        if (!this._currentlySorting) {
          this._updateControl(layerCollection);
        }
      });
    };

    // root collection
    listenForCollectionChange(collection);

    // recursively add listener to all group and sub-group collections
    const checkCollection = (layerCollection: Collection<BaseLayer>) => {
      layerCollection.getArray().forEach((layer) => {
        if ((<Group>layer).getLayers) {
          const coll = (<Group>layer).getLayers();
          listenForCollectionChange(coll);
          checkCollection(coll);
        }
      });
    };
    checkCollection(collection);

    const singleLayer = (
      layer: Layer,
      groupId: string,
      collection: Collection<BaseLayer>
    ) => html`
      <details open="${layer.get("layerControlExpanded") ? true : nothing}">
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
                ><span
                  >${layer.get(this.layerTitle) ||
                  `${layer.get(this.layerIdentifier)}`}</span
                >
              </span>
            </div>
            <div class="right">
              <span class="menu-icon" @click="${(event: Event) => this._onLayerConfigToggle(event, layer.get("id"))}"></span>
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
                .unstyled="${this.unstyled}
                style="max-height: ${this.isLayerConfigExpanded[layer.get("id")] ? 999 : 0}px"
                @removeLayer=${() => {
                  collection.remove(layer);
                  const listitem = this.renderRoot.querySelector(
                    `[data-layer='${layer.get(this.layerIdentifier)}'`
                  );
                  listitem.parentNode.removeChild(listitem);
                }}
              ></eox-layerconfig>
            `
          : nothing}
        ${this.externalLayerConfig && (<OlLayer>layer).style_?.color
          ? html`
              <button @click=${() => this._emitLayerconfig(layer as Layer)}>
                configure
              </button>
            `
          : nothing}
        ${(<LayerGroup>(<unknown>layer)).getLayers
          ? html`
              ${listItems(
                this.preFilterLayers(
                  [
                    ...(<LayerGroup>(<unknown>layer)).getLayers().getArray(),
                  ].reverse()
                ),
                layer.get(this.layerIdentifier),
                (<LayerGroup>(<unknown>layer)).getLayers()
              )}
            `
          : nothing}
      </details>
    `;

    const listItems = (
      layers: Array<BaseLayer>,
      group?: string,
      collection?: Collection<BaseLayer>
    ): TemplateResult => html`
      <ul data-group="${group ?? nothing}">
        ${repeat(
          layers,
          (layer) => layer.get(this.layerIdentifier),
          (layer) => html`
            <li
              data-layer="${layer.get(this.layerIdentifier)}"
              data-disabled="${layer.get("layerControlDisable") || nothing}"
              data-type="${this.getLayerType(layer as Layer, this.olMap)}"
              data-layerconfig="${this.layerConfig?.length > 0}"
            >
              ${singleLayer(layer as Layer, group, collection)}
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
            this.preFilterLayers(collection.getArray() as Array<BaseLayer>),
            null,
            this.layerCollection
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
                  <option value="${layer.get(this.layerIdentifier)}">
                    ${layer.get(this.layerTitle) ||
                    `layer ${layer.get(this.layerIdentifier)}`}
                  </option>
                `
              )}
            </select>
            <button
              @click="${() => {
                const selectedLayer = this.optionalLayerArray.find(
                  (l) =>
                    l.get(this.layerIdentifier) ===
                    (<HTMLInputElement>(
                      this.shadowRoot.querySelector("select[name=optional]")
                    )).value
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
                if (!group) {
                  return undefined;
                }
                const groupCollection = (<LayerGroup>group).getLayers();
                return [
                  ...groupCollection
                    .getArray()
                    .map((l: BaseLayer) => l.get(this.layerIdentifier)),
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
                  if (!group) {
                    return undefined;
                  }
                  const groupCollection = (<LayerGroup>group).getLayers();
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

  filterLayers = (layers: Array<BaseLayer>, key: string, value: any) => {
    let found: Array<BaseLayer> = [];
    const search = (
      searchLayers: Array<BaseLayer>,
      key: string,
      value: any
    ) => {
      found = [...found, ...searchLayers.filter((l) => l.get(key) === value)];
      const groups = searchLayers.filter((l) => (<LayerGroup>l).getLayers);
      if (groups.length > 0) {
        groups.forEach((group) =>
          search((<LayerGroup>group).getLayers().getArray(), key, value)
        );
      }
      return found;
    };
    search(layers, key, value);
    return found;
  };

  findLayerById = (layers: Array<BaseLayer>, id: string) => {
    return this.filterLayers(layers, "id", id)[0];
  };

  getLayerType = (layer: Layer, map: Map) => {
    // trying to guess the layer type from certain properties.
    // the proper way would be to use instanceOf, but for this
    // we'd need OL as a dependency, which we're trying to avoid
    return (<LayerGroup>(<unknown>layer)).getLayers
      ? "group"
      : map
          .getInteractions()
          .getArray()
          .filter(
            (i) =>
              (<{ [x: string]: object }>(<unknown>i)).freehand_ !== undefined
          )
          .map(
            (i) =>
              (<OlSource>(<{ [x: string]: object }>(<unknown>i)).source_)
                ?.ol_uid
          )
          .includes(
            layer.getSource ? (<OlSource>layer.getSource())?.ol_uid : undefined
          )
      ? "draw"
      : (<OlLayer>layer).declutter_ !== undefined
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
  layerControl: EOxLayerControl;

  @property({ type: Object, attribute: false })
  layer: OlLayer;

  @property({ type: Boolean })
  external: boolean;

  @property({ type: Boolean })
  unstyled: boolean;

  private _layerControlElement: EOxLayerControl;

  @state()
  private _currentLayer: OlLayer;

  @state()
  private _configList: { [x: string]: number | Array<string> } = {};

  private _handleInput(
    evt: HTMLElementEvent<HTMLInputElement>,
    property: string
  ) {
    if (property === "opacity") {
      this._layerControlElement.changeOpacity(
        this._currentLayer,
        parseFloat(evt.target.value)
      );
    } else {
      this._layerControlElement.changeStyleProperty(
        this._currentLayer,
        property,
        parseFloat(evt.target.value)
      );
    }
  }

  private _parseConfigs(currentLayer: OlLayer) {
    if (!currentLayer) {
      return;
    }
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
        this.layerConfig = this._layerControlElement.layerConfig;
        this._layerControlElement.addEventListener("layerconfig", (evt) => {
          this._currentLayer = (<CustomEvent>evt).detail.layer;
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
            <eox-tabs
              .layer="${this._currentLayer}"
            />
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
                            value="${live(this._configList[property])}"
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

@customElement("eox-tabs")
class EOxTabs extends LitElement {

  @property({ type: BaseLayer })
  layer: BaseLayer;

  @property({ type: Number }) selectedTabIndex = 0; // By default, the first tab is selected
  @property({ type: Array }) tabs = [
    {
      label: 'info',
      content: html`<p>This data is made available by the Climate Data Store of the Copernicus Climate Change Service</p>`,
    },

    {
      label: 'opacity',
      content: 'Content for Tab 2',
    },

    {
      label: 'settings',
      content: 'Content for Tab 3',
    }
  ];

  static styles = css`
    .tabs {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      cursor: pointer;
      background-color: #fff;
      border-top: 1px solid #00417033;
      margin-left: 40px;
      height: 30px;
    }
    p {
      margin: 0;
      padding: 12px;
      font-size: 14px;
    }
    .tabs > * {
      display: flex;
    }
    .tabs .left {
      justify-content: flex-start;
      align-items: center;
    }
    .tabs .right {
      justify-content: flex-end;
      align-items: center;
    }
    .tab {
      flex: 1;
      display: flex;
      align-items: center;
      justify-items: center;
      text-align: center;
      width: 20px;
      height: 30px;
      max-width: 30px;
    }
    .tab::before {
      margin-left: 5px;
    }
    .tab.info::before {
      width: 20px;
      display: flex;
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Einformation-outline%3C/title%3E%3Cpath d='M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z' /%3E%3C/svg%3E");
    }
    .tab.opacity::before {
      width: 20px;
      display: flex;
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eopacity%3C/title%3E%3Cpath d='M17.66,8L12,2.35L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8M6,14C6,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 18,12 18,14H6Z' /%3E%3C/svg%3E");
    }
    .tab.settings::before {
      width: 20px;
      display: flex;
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Etune%3C/title%3E%3Cpath d='M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z' /%3E%3C/svg%3E");    }
    .tab.selected {
      background-color: #e0e0e0;
    }
    .tab-content {
      display: none;
      margin-left: 40px;
      background-color: #e3e3ea;
    }
    .tab-content[selected] {
      display: block;
    }

    .drag-handle {
      cursor: ns-resize;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eunfold-more-horizontal%3C/title%3E%3Cpath d='M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z' /%3E%3C/svg%3E");
      width: 24px;
      height: 24px;
    }
    .drag-handle.disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }
  `;

  render() {
    return html`
      <div class="tabs">
        <div class="left">
          ${this.tabs.map((tab, index) => html`
          <div
            class="tab ${tab.label} ${this.selectedTabIndex === index ? 'selected' : ''}"
            @click=${() => this.selectedTabIndex = index}
          ></div>
        `)}
        </div>

        <div class="right">
          <div
            class="drag-handle ${this.layer.get("layerControlDisable")
              ? "disabled"
              : ""}"
          >
          </div>
        </div>
      </div>
      ${this.tabs.map((tab, index) => html`
        <div class="tab-content" ?selected=${this.selectedTabIndex === index}>${tab.content}</div>
      `)}
    `;
  }
}
