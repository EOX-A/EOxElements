import { LitElement, html, nothing } from "lit";
import { keyed } from "lit/directives/keyed.js";
import { styleEOX } from "../style.eox";
import {
  deleteFeatureMethod,
  firstUpdatedMethod,
  selectAndDeselectFeatureMethod,
} from "../methods";

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
   * Handles the deletion of an individual feature.
   *
   * @param {Event & { target: HTMLButtonElement }} evt - Event object containing button target.
   */
  _handleDelete = (evt) => deleteFeatureMethod(evt, this);

  /**
   * Handles the selection and deselection of a feature from the list.
   *
   * @param {import("ol").Feature} feature - The selected feature.
   */
  _handleFeatureSelectAndDeselect = (feature) =>
    selectAndDeselectFeatureMethod(feature, this);

  /**
   * Initiates initial settings and event triggers upon the component's first update.
   */
  firstUpdated = () => firstUpdatedMethod(this);

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
                  ></button>
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
