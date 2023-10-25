import { LitElement, html, nothing } from "lit";
import { keyed } from "lit/directives/keyed.js";
import { styleEOX, styleListEOX } from "../style.eox";
import * as ol from "ol/style.js";
import { getDefaultPolygonStyle, getSelectedPolygonStyle } from "../helpers";

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

    /**
     * Index of selected feature
     * @type Number || null
     */
    this.selectedFeatureIndex = null;
  }

  render() {
    console.log(this.drawLayer.getStyle());
    console.log(this.drawnFeatures[0]?.getProperties());
    console.log(this.drawnFeatures[0]?.get("ol_uid"));
    console.log(this.drawnFeatures[0]?.getGeometry().getExtent());
    console.log(this.olMap.getView());

    return html`
      <style>
        ${!this.unstyled && styleEOX}
        ${!this.unstyled && styleListEOX}
      </style>
      <ul>
        ${this.drawnFeatures.map((feature, i) =>
          keyed(
            i + 1,
            html`
              <li
                class="${this.selectedFeatureIndex === i
                  ? "selected"
                  : nothing}"
                @mouseover=${() => {
                  if (this.selectedFeatureIndex === i) return;
                  feature.setStyle(getSelectedPolygonStyle());
                }}
                @mouseout=${() => {
                  if (this.selectedFeatureIndex === i) return;
                  feature.setStyle(getDefaultPolygonStyle());
                }}
                @click=${() => {
                  if (this.selectedFeatureIndex === i) return;
                  if (this.selectedFeatureIndex !== null)
                    this.drawnFeatures[this.selectedFeatureIndex].setStyle(
                      getDefaultPolygonStyle()
                    );
                  feature.setStyle(getSelectedPolygonStyle());
                  this.olMap.getView().fit(feature.getGeometry().getExtent());
                  this.selectedFeatureIndex = i;
                  this.requestUpdate();
                }}
              >
                <div class="list">
                  <label>
                    <span class="title">Feature #${i + 1}</span>
                    <button class="remove-icon icon" @click=${() => {}}>
                      ${this.unstyled ? "x" : nothing}
                    </button>
                  </label>
                </div>
              </li>
            `
          )
        )}
      </ul>
    `;
  }
}

customElements.define("eox-drawtools-list", EOxDrawToolsList);
