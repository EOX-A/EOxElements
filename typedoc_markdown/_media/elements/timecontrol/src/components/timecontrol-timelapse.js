import { LitElement, html, render } from "lit";
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

/**
 * @typedef {import("../types").DateRange} DateRange
 * @typedef {import("../types").ExportConfig} ExportConfig
 * @typedef {import("../main").EOxTimeControl} EOxTimeControl
 */

/**
 * The `eox-timecontrol-timelapse` component provides functionality to export time series data as animated GIFs or MP4s.
 * It allows users to preview map layers at different time steps and export them as animations with configurable speed.
 * The component generates snapshots of map layers for each selected time step and combines them into an animation.
 *
 * @element eox-timecontrol-timelapse
 */
export class EOxTimeControlTimelapse extends LitElement {
  /**
   * Defines the component's reactive properties.
   *
   * @returns {Object} Property definitions.
   */
  static get properties() {
    return {
      unstyled: { type: Boolean, attribute: "unstyled" },
      speed: { type: Number, attribute: "speed" },
      format: { type: String, attribute: "format" },
    };
  }

  /**
   * Configuration object for the export process.
   *
   * @type {ExportConfig | null}
   */
  #exportConfig = null;

  /**
   * The currently selected date range.
   *
   * @type {DateRange | null}
   */
  #selectedDateRange = null;

  /**
   * Reference to the timelapse component DOM element (export dialog).
   *
   * @type {HTMLElement | null}
   */
  #timelapseComponent = null;

  /**
   * Loading state indicator for export operations.
   *
   * @type {boolean}
   */
  #loading = false;

  /**
   * Creates a new EOxTimeControlTimelapse instance.
   */
  constructor() {
    super();

    /**
     * Whether default styling is disabled.
     *
     * @type {boolean}
     */
    this.unstyled = false;

    /**
     * Legacy property (not used).
     *
     * @type {null}
     */
    this.visTimeline = null;

    /**
     * Animation speed in frames per second (default: 1).
     *
     * @type {number}
     */
    this.speed = 1;

    /**
     * Export format: "gif" or "mp4" (default: "gif").
     *
     * @type {"gif" | "mp4"}
     */
    this.format = "gif";
  }

  /**
   * Gets the export configuration object.
   *
   * @type {ExportConfig | null}
   * @returns {ExportConfig | null} The export configuration.
   */
  get exportConfig() {
    return this.#exportConfig;
  }

  /**
   * Sets the export configuration object.
   *
   * @param {ExportConfig | null} value - The export configuration.
   */
  set exportConfig(value) {
    this.#exportConfig = value;
  }

  /**
   * Gets the timelapse component DOM element.
   *
   * @type {HTMLElement | null}
   * @returns {HTMLElement | null} The timelapse component element.
   */
  get timelapseComponent() {
    return this.#timelapseComponent;
  }

  /**
   * Sets the date range and triggers a re-render.
   *
   * @param {DateRange} dateRange - The date range as [startDate, endDate] in ISO format.
   */
  setDateRange(dateRange) {
    this.#selectedDateRange = dateRange;
    this.requestUpdate();
  }

  /**
   * Gets the container element (legacy method, not used).
   *
   * @returns {HTMLElement | null} The container element.
   */
  getContainer() {
    return /** @type {HTMLElement} */ (
      this.renderRoot.querySelector("#timeline")
    );
  }

  /**
   * Closes the export dialog and cleans up resources.
   */
  handleExportClose() {
    this.exportConfig = null;
    this.#loading = false;
    if (this.#timelapseComponent) {
      this.#timelapseComponent.remove();
      this.#timelapseComponent = null;
    }
    this.requestUpdate();
  }

  /**
   * Exports the animation using the current export configuration.
   * Calls the exportAnimation helper function to generate the GIF or MP4 file.
   */
  export() {
    this.#loading = true;
    this.timelapseComponent
      .querySelector(".export-btn i")
      .classList.remove("export-icon");
    this.timelapseComponent
      .querySelector(".export-btn i")
      .classList.add("export-icon-loading");
    const setLoading = () => {
      this.#loading = false;
      this.timelapseComponent
        .querySelector(".export-btn i")
        .classList.add("export-icon");
      this.timelapseComponent
        .querySelector(".export-btn i")
        .classList.remove("export-icon-loading");
      this.requestUpdate();
    };
    exportAnimation(
      this.exportConfig.mapLayers,
      this.format,
      this.speed,
      setLoading,
      this,
    );
  }

  /**
   * Handles selection of a preview image/map in the export dialog.
   *
   * @param {number} index - Index of the selected preview.
   */
  handleSelectedPreview(index) {
    this.exportConfig.selectedPreview = index;
    const eoxMaps = this.timelapseComponent.querySelectorAll(".map-view-item");
    eoxMaps.forEach((eoxMap) => {
      eoxMap.classList.remove("selected-map");
    });
    eoxMaps[index]?.classList.add("selected-map");

    const previewImg =
      this.timelapseComponent.querySelector(".export-images").children;
    Array.from(previewImg).forEach((img) => {
      img.classList.remove("selected-preview");
    });
    previewImg[index]?.classList.add("selected-preview");
    this.requestUpdate();
  }

  /**
   * Gets the parent EOxTimeControl component instance.
   *
   * @returns {EOxTimeControl | null} The parent timecontrol instance or null if not found.
   */
  getEOxTimeControl() {
    return /** @type {EOxTimeControl} */ (this.closest("eox-timecontrol"));
  }

  /**
   * Generates the export dialog and starts the snapshot generation process.
   *
   * @param {ExportConfig} config - Export configuration containing map layers and settings.
   * @returns {Promise<void>} Promise that resolves when the export dialog is generated.
   */
  async generateExport(config) {
    if (config && config.mapLayers && config.mapLayers.length) {
      this.exportConfig = {
        ...config,
        selectedPreview: 0,
      };

      this.#timelapseComponent = document.createElement("div");
      this.#timelapseComponent.classList.add("timelapse-component");

      render(
        html`
          <style>
            ${style}
            ${!this.unstyled && styleEOX}
            ${styleTimelapse}
          </style>
          <div class="timecontrol-export">
            <div
              @click=${() => this.handleExportClose()}
              class="timecontrol-export-overlay"
            ></div>
            <div class="timecontrol-export-container">
              <div class="timecontrol-export-content">
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
                    class="timecontrol-export-play-pause"
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
              <div class="timecontrol-export-footer flex-center">
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
        this.#timelapseComponent,
      );

      document.body.appendChild(this.#timelapseComponent);

      setTimeout(() => {
        snapshotGenerator(this);
      });
    }
    this.#loading = false;
    this.requestUpdate();
  }

  /**
   * Handles play/pause functionality for previewing the animation.
   * Cycles through preview images at the configured speed.
   */
  handlePlayPause() {
    const element = this.timelapseComponent.querySelector(
      ".timecontrol-export-play-pause span i",
    );
    if (!this.exportConfig.play) {
      element.classList.add("pause-icon");
      element.classList.remove("play-icon");
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
      element.classList.add("play-icon");
      element.classList.remove("pause-icon");
      this.exportConfig.play = false;
    }
    this.requestUpdate();
  }

  /**
   * Handles the export button click event.
   * Collects selected timeline items and either dispatches an export event (for external rendering)
   * or generates the export directly using the associated map.
   */
  handleExport() {
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
      this.#loading = true;
      this.requestUpdate();
    }
  }

  /**
   * Lifecycle method called when the component is disconnected from the DOM.
   * Cleans up the timelapse component element to prevent memory leaks.
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.#timelapseComponent) {
      this.#timelapseComponent.remove();
      this.#timelapseComponent = null;
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
        <i
          class="icon ${this.#loading ? "export-icon-loading" : "export-icon"}"
        ></i
        ><span>Timelapse</span>
      </button>
    `;
  }
}
customElements.define("eox-timecontrol-timelapse", EOxTimeControlTimelapse);
