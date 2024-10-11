import { LitElement, html } from "lit";
import {
  collectionsHandler,
  initializeGlobe,
  createCollectionsManager,
} from "./methods";
//@ts-expect-error
import cesiumStyles from "cesium/Build/Cesium/Widgets/widgets.css?inline";

export class EOxGlobe extends LitElement {
  static properties = {
    layers: { attribute: false, type: Array }, // 2D Layers
    collections: { attribute: false, type: Array },
    config: { attribute: false, type: Object }, // global config
    collectionsManager: { attribute: false, type: Object, state: true }, // globe collcetions manager
  };

  get collections() {
    return this.#collections_;
  }

  /**
   * Description placeholder
   *
   * @param {import("./types").Collections3D[]} val
   */
  set collections(val) {
    this.#collections_ = val;
    if (!this.collectionsManager) {
      return;
    }
    collectionsHandler(val, this.collectionsManager);
  }

  /**
   * Cesium Viewer
   *
   * @type {import("cesium").Viewer}
   */
  #viewer = null;

  /**
   * Description placeholder
   *
   * @type {import("./types").Collections3D[]}
   */
  #collections_ = [];

  /** @type {HTMLDivElement} */
  get #cesiumContainer() {
    return this.shadowRoot.querySelector("div#cesium-container");
  }

  constructor() {
    super();
    /** @type {import("cesium").Viewer.ConstructorOptions} */
    this.config = {
      skyBox: false,
      animation: false,
      baseLayerPicker: false,
      homeButton: false,
      fullscreenButton: false,
      timeline: false,
      contextOptions: {
        webgl: {
          alpha: true,
        },
      },
    };
  }

  /**
   * Description placeholder
   *
   * @param {import("lit").PropertyValues} changedProperties
   */
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.#viewer = initializeGlobe(this.#cesiumContainer, this.config);
    this.collectionsManager = createCollectionsManager(this.#viewer);
    if (this.collections.length) {
      collectionsHandler(this.#collections_, this.collectionsManager);
    }
  }

  render() {
    return html`
      <style>
        ${cesiumStyles}
      </style>
      <div id="cesium-container"></div>
    `;
  }
}

if (!customElements.get("eox-globe")) {
  customElements.define("eox-globe", EOxGlobe);
}
