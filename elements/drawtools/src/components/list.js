import { LitElement, html, nothing } from "lit";
import { styleEOX, styleListEOX } from "../style.eox";

/**
 * Display list of features
 *
 * @element eox-drawtools-list
 */
export class EOxDrawToolsList extends LitElement {
  static properties = {
    eoxMap: { attribute: false, state: true },
    olMap: { attribute: false, state: true },
    draw: { attribute: false, state: true },
    drawLayer: { attribute: false, state: true },
    drawnFeatures: { attribute: false, state: true, type: Array },
    modify: { attribute: false, state: true },
    unstyled: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * @type import("../../map/main").EOxMap
     */
    this.eoxMap = null;

    /**
     * @type import("ol").Map
     */
    this.olMap = null;

    /**
     * The current native OpenLayers `draw` interaction
     * @type import("ol/interaction").Draw
     */

    this.draw = null;

    /**
     * The current native OpenLayers draw `layer`
     * @type import("ol/layer").Vector<import("ol/source").Vector>
     */

    this.drawLayer = null;

    /**
     * The array of drawn native OpenLayers features. Normally includes only one feature, until multiple feature drawing is enabled.
     * @type Array<import("ol").Feature>
     */
    this.drawnFeatures = [];

    /**
     * The current native OpenLayers `modify` interaction
     * @type import("ol/interaction").Modify
     */

    this.modify = null;

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;
  }

  render() {
    console.log(this.drawLayer);
    console.log(this.drawnFeatures[0]?.getProperties());

    return html`
      <style>
        ${!this.unstyled && styleEOX}
        ${!this.unstyled && styleListEOX}
      </style>
      <ul>
        <li>
          <div class="list">
            <label>
              <span class="title">Feature #1</span>
              <button class="remove-icon icon" @click=${() => {}}>
                ${this.unstyled ? "x" : nothing}
              </button>
            </label>
          </div>
        </li>
        <li>
          <div class="list">
            <label>
              <span class="title">Feature #1234</span>
              <button class="remove-icon icon" @click=${() => {}}>
                ${this.unstyled ? "x" : nothing}
              </button>
            </label>
          </div>
        </li>
      </ul>
    `;
  }
}

customElements.define("eox-drawtools-list", EOxDrawToolsList);
