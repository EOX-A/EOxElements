import { LitElement, html } from "lit";
import { style } from "../styles/style.js";
import { styleEOX } from "../styles/style.eox.js";
import { styleTimelapse } from "../styles/style.timelapse.js";
import { exportAnimation, snapshotGenerator } from "../helpers/index.js";
import { when } from "lit/directives/when.js";
import { map } from "lit/directives/map.js";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeek from "dayjs/plugin/isoWeek";
import minMax from "dayjs/plugin/minMax";
import { exportHandlerMethod } from "../methods/timelapse/";

dayjs.extend(dayOfYear);
dayjs.extend(isoWeek);
dayjs.extend(minMax);

export class EOxTimeControlTimelapse extends LitElement {
  static get properties() {
    return {
      unstyled: { type: Boolean, attribute: "unstyled" },
      speed: { type: Number, attribute: "speed" },
      format: { type: String, attribute: "format" },
    };
  }

  #isExport = false;
  #exportConfig = null;
  #selectedDateRange = null;
  constructor() {
    super();
    this.unstyled = false;
    this.visTimeline = null;
    this.speed = 1;
    this.format = "gif";
  }

  get exportConfig() {
    return this.#exportConfig;
  }

  set exportConfig(value) {
    this.#exportConfig = value;
  }

  setDateRange(dateRange) {
    this.#selectedDateRange = dateRange;
    this.requestUpdate();
  }

  getContainer() {
    return /** @type {HTMLElement} */ (
      this.renderRoot.querySelector("#timeline")
    );
  }

  handleExportClose() {
    this.#isExport = false;
    this.exportConfig = null;
    this.requestUpdate();
  }

  export() {
    exportAnimation(this.exportConfig.mapLayers, this.format, this.speed, this);
  }

  handleSelectedPreview(index) {
    this.exportConfig.selectedPreview = index;
    this.requestUpdate();
  }

  getEOxTimeControl() {
    return /** @type {import("../main.js").EOxTimeControl} */ (
      this.closest("eox-timecontrol")
    );
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

  handlePlayPause() {
    if (!this.exportConfig.play) {
      this.exportConfig.play = true;
      const playNext = (init) => {
        if (this.exportConfig.play) {
          if (!init) {
            if (
              this.exportConfig.selectedPreview + 1 !==
              this.exportConfig.mapLayers?.length
            )
              this.handleSelectedPreview(this.exportConfig.selectedPreview + 1);
            else this.handleSelectedPreview(0);
          }
          setTimeout(playNext, 1000 / this.speed);
        }
      };
      playNext(true);
    } else {
      this.exportConfig.play = false;
    }
    this.requestUpdate();
  }

  handleExport() {
    this.#isExport = true;
    const detail = exportHandlerMethod(this);
    if (detail) {
      if (this.getEOxTimeControl().externalMapRendering) {
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

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
        ${styleTimelapse}
      </style>
      <button
        ?disabled=${this.#selectedDateRange?.length === 2 ? false : true}
        @click=${() => this.handleExport()}
        class="export-btn border small flex-center"
      >
        <i class="icon export-icon"></i><span>Export</span>
      </button>
      ${when(
        this.#isExport && this.exportConfig,
        () => html`
          <div class="timeslider-export">
            <div
              @click=${() => this.handleExportClose()}
              class="timeslider-export-overlay"
            ></div>
            <div class="timeslider-export-container">
              <div class="timeslider-export-content">
                ${when(
                  this.exportConfig && this.exportConfig.mapLayers?.length,
                  () => html`
                    <div class="export-images">
                      ${map(this.exportConfig.mapLayers, (layer, index) =>
                        layer.img
                          ? html`<div
                              @click=${() => this.handleSelectedPreview(index)}
                              class=${this.exportConfig.selectedPreview ===
                              index
                                ? "selected-preview"
                                : ""}
                            >
                              <img
                                src=${layer.img}
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
                        class="icon ${this.exportConfig.play
                          ? "pause"
                          : "play"}-icon"
                      ></i>
                    </span>
                  </div>
                  ${when(
                    this.exportConfig && this.exportConfig.mapLayers?.length,
                    () => html`
                      ${map(
                        this.exportConfig.mapLayers,
                        (layer, index) => html`
                          <eox-map
                            class="map-view-item ${this.exportConfig
                              .selectedPreview === index
                              ? "selected-map"
                              : ""}"
                            data-index=${index}
                            .layers=${layer.layers}
                            .center=${layer.center ||
                            this.getEOxTimeControl()
                              .eoxMap.map.getView()
                              .getCenter()}
                            .zoom=${layer.zoom ||
                            this.getEOxTimeControl()
                              .eoxMap.map.getView()
                              .getZoom()}
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
                          value=${this.speed}
                          min="1"
                          max="5"
                          @change=${(e) => (this.speed = e.target.value)}
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
                          value=${Array.isArray(this.#selectedDateRange) &&
                          this.#selectedDateRange.length === 2
                            ? `${dayjs(this.#selectedDateRange[0]).format("MMM DD, 'YY")} - ${dayjs(this.#selectedDateRange[1]).format("MMM DD, 'YY")}`
                            : "Select daterange"}
                          @change=${(e) => (this.dateRange = e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="setting-menu-content">
                    <span>Format</span>
                    <div class="setting-menu-content-value">
                      <div class="field border fill small">
                        <select
                          value=${this.format}
                          @change=${(e) => (this.format = e.target.value)}
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
customElements.define("eox-timecontrol-timelapse", EOxTimeControlTimelapse);
