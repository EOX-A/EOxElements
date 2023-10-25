import { LitElement, html, nothing } from "lit";
import { keyed } from "lit/directives/keyed.js";
import { styleEOX, styleListEOX } from "../style.eox";
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
     * @type import("../../../map/main").EOxMap
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

  /**
   * Delete individual feature @param {any} evt
   */
  _handleDelete(evt) {
    evt.stopPropagation();
    const index = evt.target.getAttribute("index");
    const feature = this.drawnFeatures[index];
    this.drawLayer.getSource().removeFeature(feature);
    this.drawnFeatures.splice(index, 1);

    // If selected feature gets deletes fit to available bound
    if (this.selectedFeatureIndex === Number(index)) {
      const newExtent = this.drawLayer.getSource().getExtent();
      if (this.drawnFeatures.length) this.olMap.getView().fit(newExtent);
      this.selectedFeatureIndex = null;
    }

    // If selected index is greater than deleted feature index then changing index cursor by 1
    else if (this.selectedFeatureIndex > Number(index)) {
      this.selectedFeatureIndex = this.selectedFeatureIndex - 1;
      this._handleSelectFeature(
        this.selectedFeatureIndex,
        this.drawnFeatures[this.selectedFeatureIndex]
      );
    }
    this.requestUpdate();
  }

  /**
   * Select a feature @param {Number} i
   * Select a feature @param {import("ol").Feature} feature
   */
  _handleSelectFeature(i, feature) {
    if (this.selectedFeatureIndex === i) return;
    if (this.selectedFeatureIndex !== null)
      this.drawnFeatures[this.selectedFeatureIndex].setStyle(
        getDefaultPolygonStyle()
      );
    feature.setStyle(getSelectedPolygonStyle());
    this.olMap.getView().fit(feature.getGeometry().getExtent());
    this.selectedFeatureIndex = i;
    this.requestUpdate();
  }

  render() {
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
              >
                <div
                  class="list"
                  @click="${() => this._handleSelectFeature(i, feature)}"
                >
                  <span class="title">Feature #${i + 1}</span>
                  <button
                    index=${i}
                    class="remove-icon icon"
                    @click="${this._handleDelete}"
                  >
                    ${this.unstyled ? "x" : nothing}
                  </button>
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
