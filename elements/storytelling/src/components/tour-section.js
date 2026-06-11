import { LitElement } from "lit";
import { unsafeStatic, html } from "lit/static-html.js";
import { assignNewAttrValue, preloadMapTiles } from "../helpers/index.js";
import styleEOX from "../style.eox.js";

/**
 * Traverse up the DOM tree (including across shadow boundaries) to find the nearest scrollable parent.
 * @param {any} node
 * @returns {HTMLElement | null}
 */
function getScrollParent(node) {
  if (node == null) {
    return null;
  }
  if (node.scrollHeight > node.clientHeight) {
    const overflowY = window.getComputedStyle(node).overflowY;
    if (overflowY === "auto" || overflowY === "scroll") {
      return node;
    }
  }
  return getScrollParent(node.parentNode || node.host);
}

/**
 * @element eox-storytelling-tour
 * @property {Array<any>} [children] - Slotted storytelling tour steps
 */
export class EOxStoryTellingTour extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      position: { type: String },
      as: { type: String },
      unstyled: { type: Boolean },
      noShadow: { type: Boolean, attribute: "no-shadow" },
    };
  }

  constructor() {
    super();
    /**
     * @type {string}
     */
    this.title = "";
    /**
     * @type {string}
     */
    this.position = "left";
    /**
     * @type {string}
     */
    this.as = "eox-map";
    /**
     * @type {boolean}
     */
    this.unstyled = false;
    /**
     * @type {boolean}
     */
    this.noShadow = false;

    /**
     * @type {Array<any>}
     * @private
     */
    this._stepElements = [];

    /**
     * @type {Array<any>}
     * @private
     */
    this._sectionSteps = [];

    /**
     * @type {Array<any>}
     * @private
     */
    this._allLayers = [];

    /**
     * @type {number}
     * @private
     */
    this._activeIndex = -1;

    /**
     * @type {IntersectionObserver | null}
     * @private
     */
    this._observer = null;
  }

  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /**
   * Processes slotted step configurations to build combined state
   * @private
   */
  _processSteps() {
    const slot = this.shadowRoot.querySelector("slot");
    let elementsChanged = false;
    if (slot) {
      const newStepElements = slot
        .assignedElements({ flatten: true })
        .map((el) => {
          if (el.tagName.toLowerCase() === "eox-a2ui-element") {
            return el.querySelector("eox-storytelling-tour-step");
          }
          return el.tagName.toLowerCase() === "eox-storytelling-tour-step"
            ? el
            : null;
        })
        .filter(Boolean);

      if (
        newStepElements.length !== this._stepElements.length ||
        newStepElements.some((el, idx) => el !== this._stepElements[idx])
      ) {
        this._stepElements = newStepElements;
        elementsChanged = true;
      }
    }

    if (!this._stepElements || !this._stepElements.length) {
      this._sectionSteps = [];
      this._allLayers = [];
      return;
    }

    const steps = this._stepElements.map((el) =>
      el.config ? JSON.parse(JSON.stringify(el.config)) : {},
    );

    const layerRegistry = new Map();
    const idCounters = new Map();

    steps.forEach((step) => {
      if (step.animationOptions === undefined) {
        step.animationOptions = { duration: 500 };
      }
      if (step.layers) {
        step.layers.forEach((layer) => {
          if (layer.properties && layer.properties.id) {
            const originalId = layer.properties.id;
            const sourceFingerprint = layer.source
              ? JSON.stringify(layer.source)
              : "null";
            const registryKey = `${originalId}::${sourceFingerprint}`;

            if (!layerRegistry.has(registryKey)) {
              let newId = originalId;
              if (idCounters.has(originalId)) {
                const count = idCounters.get(originalId) + 1;
                idCounters.set(originalId, count);
                newId = `${originalId}_${count}`;
              } else {
                idCounters.set(originalId, 0);
              }
              layerRegistry.set(registryKey, newId);
            }

            const assignedId = layerRegistry.get(registryKey);
            layer.properties.id = assignedId;
          }
        });
      }
    });

    const layerMap = new Map();
    steps.forEach((step) => {
      if (step.layers) {
        step.layers.forEach((layer) => {
          if (layer.properties && layer.properties.id) {
            layerMap.set(layer.properties.id, layer);
          }
        });
      }
    });

    this._sectionSteps = steps;
    this._allLayers = Array.from(layerMap.values());

    if (elementsChanged) {
      this._updateObserver();
    }
  }

  /**
   * Initializes or updates observer on slotted step elements
   * @private
   */
  _updateObserver() {
    if (this._observer) {
      this._observer.disconnect();
    }

    const scrollParent = getScrollParent(this);

    this._observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = this._stepElements.indexOf(entry.target);
            if (index !== -1) {
              this._activeIndex = index;
              const mapElement = this.shadowRoot.getElementById("map");
              const parent = /** @type {any} */ (this.shadowRoot);
              if (mapElement && parent) {
                assignNewAttrValue(
                  { steps: this._sectionSteps },
                  index,
                  mapElement,
                  parent,
                  this._allLayers,
                );
              }
            }
          }
        });
      },
      {
        root: scrollParent,
        rootMargin: "-50% 0px",
      },
    );

    this._stepElements.forEach((el, index) => {
      el.setAttribute("key", String(index));
      this._observer.observe(el);
    });
  }

  /**
   * React to steps config or description changes
   * @private
   */
  _handleStepUpdate() {
    this._processSteps();
    if (this._activeIndex !== -1) {
      const mapElement = this.shadowRoot.getElementById("map");
      const parent = /** @type {any} */ (this.shadowRoot);
      if (mapElement && parent) {
        assignNewAttrValue(
          { steps: this._sectionSteps },
          this._activeIndex,
          mapElement,
          parent,
          this._allLayers,
        );
      }
    }
  }

  /**
   * Handles slot changes and initializes observer on slotted step elements
   * @private
   */
  _handleSlotChange() {
    this._processSteps();

    if (this._stepElements.length > 0 && this._activeIndex === -1) {
      this._activeIndex = 0;
      setTimeout(() => {
        const mapElement = this.shadowRoot.getElementById("map");
        const parent = /** @type {any} */ (this.shadowRoot);
        if (mapElement && parent) {
          assignNewAttrValue(
            { steps: this._sectionSteps },
            0,
            mapElement,
            parent,
            this._allLayers,
          );
          preloadMapTiles(mapElement, this._sectionSteps);
        }
      }, 500);
    }
  }

  disconnectedCallback() {
    if (this._observer) {
      this._observer.disconnect();
    }
    super.disconnectedCallback();
  }

  render() {
    const tagName = unsafeStatic(this.as || "eox-map");

    return html`
      <style>
        ${!this.unstyled && styleEOX}
        ::slotted(:not(eox-storytelling-tour-step)) {
          display: block;
          width: 100%;
        }
      </style>
      <div class="story-telling">
        <div
          class="section-wrap tour ${this.position}"
          @step-update=${this._handleStepUpdate}
        >
          <${tagName}
            id="map"
            class="section-custom"
            mode="tour"
            prevent-scroll
            .position=${this.position}
          ></${tagName}>
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("eox-storytelling-tour", EOxStoryTellingTour);
