import { LitElement, html } from "lit";
import { style } from "./style.js";
import { styleEOX } from "./style.eox.js";
import { DataSet } from "vis-timeline/standalone";
import visTimelineCSS from "vis-timeline/styles/vis-timeline-graph2d.css?inline";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeek from "dayjs/plugin/isoWeek";
import minMax from "dayjs/plugin/minMax";
import { when } from "lit/directives/when.js";
import { map } from "lit/directives/map.js";
import {
  firstUpdatedMethod,
  filterHandler as handleFilter,
  dateChangeHandler as handleDateChange,
  exportHandler,
} from "./methods/timeslider";
import {
  injectCalendarStyles,
  cleanCalendarStyles,
  snapshotGenerator,
  exportAnimation,
} from "./helpers";

dayjs.extend(dayOfYear);
dayjs.extend(isoWeek);
dayjs.extend(minMax);

/**
 * @element eox-timeslider
 */
//@ts-expect-error property animate is conflicting with HTMLElement animate https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
export default class EOxTimeSlider extends LitElement {
  static get properties() {
    return {
      for: { type: String },
      unstyled: { type: Boolean },
      titleKey: { type: String, attribute: "title-key" },
      layerIdKey: { type: String, attribute: "layer-id-key" },
      filters: { type: Array, attribute: "filter" },
      selectedDate: { type: String, attribute: "selected-date" },
      animate: { type: Boolean, attribute: "animate" },
      externalMapRendering: {
        type: Boolean,
        attribute: "external-map-rendering",
      },
    };
  }

  #visTimeline = null;
  #eoxMap = null;
  #groups = new DataSet([]);
  #items = new DataSet([]);
  #sliderValues = [];
  #isSettingsEnabled = false;
  #settings = {
    speed: 1,
    dateRange: [],
    format: "gif",
  };
  #isExport = false;
  #loading = false;
  #exportConfig = null;

  constructor() {
    super();
    /** @type {boolean} */
    this.unstyled = false;

    /**
     * Query selector of an `eox-map` (`String`, passed as an attribute or property)
     * or an `eox-map` DOM element (`HTMLElement`, passed as property)
     *
     * @type {String|HTMLElement}
     */
    this.for = "eox-map";

    this.filters = [];

    this.selectedDate = null;

    this.titleKey = "name";

    this.layerIdKey = "id";

    this.externalMapRendering = false;

    this.selectedRange = [];

    this.animate = false;
  }

  getContainer() {
    return this.renderRoot.querySelector("#timeslider");
  }

  get visTimeline() {
    return this.#visTimeline;
  }

  set visTimeline(value) {
    this.#visTimeline = value;
  }

  get sliderValues() {
    return this.#sliderValues;
  }

  set sliderValues(value) {
    this.#sliderValues = value;
  }

  get eoxMap() {
    return this.#eoxMap;
  }

  set eoxMap(value) {
    this.#eoxMap = value;
  }

  get groups() {
    return this.#groups;
  }

  set groups(value) {
    this.#groups = value;
  }

  get items() {
    return this.#items;
  }

  set items(value) {
    this.#items = value;
  }

  get exportConfig() {
    return this.#exportConfig;
  }

  set exportConfig(value) {
    this.#exportConfig = value;
  }

  setLoading(value) {
    this.#loading = value;
    this.requestUpdate();
  }

  firstUpdated() {
    firstUpdatedMethod(this);
    injectCalendarStyles();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    cleanCalendarStyles();
  }

  filterHandler(e) {
    handleFilter(e, this);
  }

  dateChangeHandler(e) {
    handleDateChange(e.target.value, this);
  }

  handleSettingsToggle() {
    this.#isSettingsEnabled = !this.#isSettingsEnabled;
    this.requestUpdate();
  }

  handleSettingsChange(value, key) {
    this.#settings = {
      ...this.#settings,
      [key]: value,
    };
    this.requestUpdate();
  }

  async generateExport(config) {
    this.exportConfig = {
      ...config,
      selectedPreview: 0,
    };
    setTimeout(() => {
      snapshotGenerator(this);
    }, 1000);
    this.requestUpdate();
  }

  handleExport() {
    this.#isExport = true;
    const detail = exportHandler(this);
    if (detail) {
      if (this.externalMapRendering) {
        this.dispatchEvent(
          new CustomEvent("export", {
            detail: {
              ...detail,
              generate: async (config) => await this.generateExport(config),
            },
          }),
        );
      } else {
        const mapLayers = [];
        for (const dateKey in detail.selectedRangeItems) {
          const date = detail.selectedRangeItems[dateKey];
          const layers = [];
          for (const itemKey in date) {
            let layer = detail.eoxMapConfig.layers.find(
              (item) => item.properties.id === date[itemKey].group,
            );
            layer.source.params[date[itemKey].property] = date[itemKey].date;
            layers.push(layer);
          }
          layers.push(detail.eoxMapConfig.layers[0]);
          mapLayers.push({
            layers,
            center: detail.eoxMapConfig.center,
            zoom: detail.eoxMapConfig.zoom,
          });
        }
        this.generateExport({
          mapLayers,
        });
      }
      this.requestUpdate();
      // Add ResizeObserver to .map-view-item and sync height to .export-images
      if (this.#isExport) {
        // Wait a tick for render
        setTimeout(() => {
          /** @type {HTMLElement} */
          const mapViewItem = this.renderRoot.querySelector(".map-view-item");
          /** @type {HTMLElement} */
          const exportImages = this.renderRoot.querySelector(".export-images");
          if (mapViewItem && exportImages) {
            // Clean up any previous observer
            if (this._exportMapResizeObserver) {
              this._exportMapResizeObserver.disconnect();
              this._exportMapResizeObserver = null;
            }
            // Observer callback
            const resizeHandler = (entries) => {
              for (const entry of entries) {
                if (entry.target === mapViewItem) {
                  const height = mapViewItem.offsetHeight;
                  exportImages.style.height = `${height}px`;
                }
              }
            };
            // Create and attach observer
            this._exportMapResizeObserver = new ResizeObserver(resizeHandler);
            this._exportMapResizeObserver.observe(mapViewItem);

            // Set initial height
            exportImages.style.height = `${mapViewItem.offsetHeight}px`;
          }
        }, 0);
      }
    }
  }

  handleSelectedPreview(index) {
    this.#exportConfig.selectedPreview = index;
    this.requestUpdate();
  }

  handleExportClose() {
    this.#isExport = false;
    this.exportConfig = null;
    this.requestUpdate();
  }

  handlePlayPause() {
    if (!this.#exportConfig.play) {
      this.#exportConfig.play = true;
      const playNext = (init) => {
        if (this.#exportConfig.play) {
          if (!init) {
            if (
              this.#exportConfig.selectedPreview + 1 !==
              this.#exportConfig.mapLayers?.length
            )
              this.handleSelectedPreview(
                this.#exportConfig.selectedPreview + 1,
              );
            else this.handleSelectedPreview(0);
          }
          setTimeout(playNext, 1000 / this.#settings.speed);
        }
      };
      playNext(true);
    } else {
      this.#exportConfig.play = false;
    }
    this.requestUpdate();
  }

  export() {
    exportAnimation(
      this.#exportConfig.mapLayers,
      this.#settings.format,
      this.#settings.speed,
      this,
    );
  }

  render() {
    return html`
      <style>
        ${visTimelineCSS}
        ${!this.unstyled && styleEOX}
        ${style}
      </style>
      <div class="timeslider-container">
        <div class="timeslider-header flex-center">
          <i class="icon calendar-icon"></i>
          <div class="timeslider-calendar field border small">
            <input
              type="text"
              id="cal"
              class="timeslider-calendar-input"
              readonly
              value=${this.selectedDate?.format("MMM DD, 'YY") || ""}
            />
          </div>
          ${when(
            this.filters.length && this.#visTimeline,
            () =>
              html`<eox-itemfilter
                id="timeslider-filter"
                .items=${this.#items}
                .inlineMode=${true}
                .titleProperty=${"id"}
                .showResults=${false}
                @filter=${this.filterHandler}
                .filterProperties=${this.filters}
                style="--inline-container-height: 40px"
              ></eox-itemfilter>`,
          )}
          ${when(
            this.animate,
            () => html`
              <button
                ?disabled=${this.selectedRange.length === 2 ? false : true}
                @click=${() => this.handleExport()}
                class="export-btn border small flex-center"
              >
                <i class="icon export-icon"></i><span>Export</span>
              </button>
            `,
          )}
        </div>
        <div class="timeslider-wrapper">
          <div id="timeslider"></div>
          ${when(
            this.#loading,
            () => html`
              <div class="load-wrapper-container">
                <div class="load-wrapper">
                  <div class="shimmer"></div>
                </div>
              </div>
            `,
          )}
          </div>
        </div>
      </div>
      ${when(
        this.#isExport,
        () => html`
          <div class="timeslider-export">
            <div
              @click=${() => this.handleExportClose()}
              class="timeslider-export-overlay"
            ></div>
            <div class="timeslider-export-container">
              <div class="timeslider-export-content">
                ${when(
                  this.#exportConfig && this.#exportConfig.mapLayers?.length,
                  () => html`
                    <div class="export-images">
                      ${map(this.#exportConfig.mapLayers, (layer, index) =>
                        layer.img
                          ? html`<div
                              @click=${() => this.handleSelectedPreview(index)}
                              class="${this.#exportConfig.selectedPreview ===
                              index
                                ? "selected-preview"
                                : ""}"
                            >
                              <img
                                src="${layer.img}"
                                alt="Exported map ${index + 1}"
                              />
                              ${when(
                                layer.date,
                                () =>
                                  html`<span
                                    >${dayjs(layer.date).format(
                                      "MMM DD, 'YY",
                                    )}</span
                                  >`,
                              )}
                            </div>`
                          : html`<div class="loader-image">
                              <div class="shimmer-image"></div>
                            </div>`,
                      )}
                    </div>
                  `,
                )}
                <div class="map-view">
                  <div
                    @click=${() => this.handlePlayPause()}
                    class="timeslider-export-play-pause"
                  >
                    <span>
                      <i
                        class="icon ${this.#exportConfig.play
                          ? "pause"
                          : "play"}-icon"
                      ></i>
                    </span>
                  </div>
                  ${when(
                    this.#exportConfig && this.#exportConfig.mapLayers?.length,
                    () => html`
                      ${map(
                        this.#exportConfig.mapLayers,
                        (layer, index) => html`
                          <eox-map
                            class="map-view-item ${this.#exportConfig
                              .selectedPreview === index
                              ? "selected-map"
                              : ""}"
                            data-index="${index}"
                            .layers=${layer.layers}
                            .center=${layer.center ||
                            this.eoxMap.map.getView().getCenter()}
                            .zoom=${layer.zoom ||
                            this.eoxMap.map.getView().getZoom()}
                            prevent-scroll
                          ></eox-map>
                        `,
                      )}
                    `,
                  )}
                </div>
              </div>
              <div class="timeslider-export-footer flex-center">
                <div class="setting-menu">
                  <div class="setting-menu-content">
                    <span>Speed</span>
                    <div class="setting-menu-content-value">
                      <span>(frames/sec)</span>
                      <div class="field border small fill">
                        <input
                          value=${this.#settings.speed}
                          min="1"
                          max="5"
                          @change=${(e) =>
                            this.handleSettingsChange(e.target.value, "speed")}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="setting-menu-content">
                    <span>Daterange</span>
                    <div class="setting-menu-content-value">
                      <div class="field border small fill">
                        <input
                          id="setting-date-range"
                          type="text"
                          readonly
                          value=${Array.isArray(this.selectedRange) &&
                          this.selectedRange.length === 2
                            ? `${this.selectedRange[0].format("MMM DD, 'YY")} - ${this.selectedRange[1].format("MMM DD, 'YY")}`
                            : "Select daterange"}
                          value="Sep 22, 2025 - Oct 16, 2025"
                          @change=${(e) =>
                            this.handleSettingsChange(
                              e.target.value,
                              "dateRange",
                            )}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="setting-menu-content">
                    <span>Format</span>
                    <div class="setting-menu-content-value">
                      <div class="field border fill small">
                        <select
                          value=${this.#settings.format}
                          @change=${(e) =>
                            this.handleSettingsChange(e.target.value, "format")}
                        >
                          <option value="gif">GIF</option>
                          <option value="mp4">MP4</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  @click=${() => this.export()}
                  class="export-btn border small flex-center"
                >
                  <i class="icon export-icon"></i><span>Export</span>
                </button>
              </div>
            </div>
          </div>
        `,
      )}
    `;
  }
}
//@ts-expect-error property animate is conflicting with HTMLElement animate https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
customElements.define("eox-timeslider", EOxTimeSlider);
