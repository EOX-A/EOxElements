import { LitElement, html, nothing } from "lit";
import { keyed } from "lit/directives/keyed.js";
import { styleEOX } from "../style.eox";

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

  /**
   * @type import("../../../map/src/select").EOxSelectInteraction
   */
  hoverInteraction;

  /**
   * @type import("../../../map/src/select").EOxSelectInteraction
   */
  clickInteraction;

  /**
   * @type string | number
   */
  hoverId;

  /**
   * @type string | number
   */
  clickId;

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
    this.requestUpdate();
  }

  /**
   * Select and Deselect feature from the list
   *
   * @param {import("ol").Feature} feature
   */
  _handleFeatureSelectAndDeselect(feature) {
    const selectedFeatureId = feature.get("id");

    // Deselect selected feature
    if (this.clickId === selectedFeatureId) {
      const newExtent = this.drawLayer.getSource().getExtent();
      this.olMap.getView().fit(newExtent, { duration: 750 });
      this.clickInteraction.highlightById([]);
    }
    // Select the clicked feature
    else {
      this.clickInteraction.highlightById([selectedFeatureId]);
      this.olMap
        .getView()
        .fit(feature.getGeometry().getExtent(), { duration: 750 });
    }

    this.requestUpdate();
  }

  firstUpdated() {
    this.hoverInteraction = this.eoxMap.selectInteractions["selectHover"];
    this.clickInteraction = this.eoxMap.selectInteractions["selectClick"];

    // Event trigger when style change due to interaction
    this.hoverInteraction.selectStyleLayer.on("change", () =>
      this.requestUpdate()
    );
    this.clickInteraction.selectStyleLayer.on("change", () =>
      this.requestUpdate()
    );
  }

  render() {
    this.hoverId = this.hoverInteraction?.selectedFids[0];
    this.clickId = this.clickInteraction?.selectedFids[0];

    return html`
      <style>
        ${!this.unstyled && styleEOX}
      </style>
      <ul>
        ${this.drawnFeatures.map((feature, i) => {
          const featureId = feature.get("id");
          const selected =
            this.hoverId === featureId || this.clickId === featureId;

          return keyed(
            i + 1,
            html`
              <li
                class="${selected ? "selected" : nothing}"
                @mouseover=${() => {
                  if (this.clickId === featureId) return;
                  this.hoverInteraction.highlightById([featureId]);
                }}
                @mouseout=${() => {
                  if (this.clickId === featureId) return;
                  this.hoverInteraction.highlightById([]);
                }}
              >
                <div
                  class="list"
                  @click="${() =>
                    this._handleFeatureSelectAndDeselect(feature)}"
                >
                  <span class="title">Feature #${i + 1}</span>
                  <button
                    index=${i}
                    class="icon small discard"
                    @click="${this._handleDelete}"
                  >
                    ${this.unstyled ? "x" : nothing}
                  </button>
                </div>
              </li>
            `
          );
        })}
      </ul>
    `;
  }
}

customElements.define("eox-drawtools-list", EOxDrawToolsList);
