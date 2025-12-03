import { LitElement, html, nothing } from "lit";
import { keyed } from "lit/directives/keyed.js";
import {
  deleteFeatureMethod,
  firstUpdatedMethod,
  hoverFeatureMethod,
  selectAndDeselectFeatureMethod,
} from "../methods/list";

/**
 * Display list of features
 *
 * @element eox-drawtools-list
 */
export class EOxDrawToolsList extends LitElement {
  static properties = {
    eoxDrawTools: { attribute: false, state: true },
    eoxMap: { attribute: false, state: true },
    olMap: { attribute: false, state: true },
    draw: { attribute: false, state: true },
    drawLayer: { attribute: false, state: true },
    drawnFeatures: { attribute: false, state: true, type: Array },
    featureName: { attribute: false, state: true, type: String },
    featureNameKey: { attribute: false, state: true, type: String },
    modify: { attribute: false, state: true },
    unstyled: { type: Boolean },
  };

  /**
   * @type {import("@eox/map").EOxMap["selectInteractions"][string]}
   */
  hoverInteraction;

  /**
   * @type {import("@eox/map").EOxMap["selectInteractions"][string]}
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
     * @type import("../main").EOxDrawTools;
     */
    this.eoxDrawTools = null;

    /**
     * @type import("@eox/map").EOxMap
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
     * The array of drawn native OpenLayers features. Normally includes only one feature,
     * until multiple feature drawing is enabled.
     *
     * @type Array<import("ol").Feature>
     */
    this.drawnFeatures = [];

    /**
     * Default display name for features
     */
    this.featureName = "Feature";

    /**
     * The key of the property to display in the feature list.
     */
    this.featureNameKey = null;

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
  _handleDelete(evt) {
    deleteFeatureMethod(evt, this, this.eoxDrawTools);
    this.dispatchEvent(new CustomEvent("changed", { bubbles: true }));
  }

  /**
   * Handles the selection and deselection of a feature from the list.
   *
   * @param {import("ol").Feature} feature - The selected feature.
   */
  _handleFeatureSelectAndDeselect(feature) {
    selectAndDeselectFeatureMethod(feature, this);
  }

  /**
   *
   * @param {number | string | undefined} featureId - The ID of the feature to hover.
   * @param {Boolean} mouseOut - Flag indicating mouse out event.
   */
  _handleHoverFeature(featureId, mouseOut = false) {
    hoverFeatureMethod(this, featureId, mouseOut);
  }

  /**
   * Initiates initial settings and event triggers upon the component's first update.
   */
  firstUpdated() {
    firstUpdatedMethod(this);
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM.
   */
  createRenderRoot() {
    return this;
  }

  render() {
    // Update hover and click IDs
    this.hoverId = this.hoverInteraction?.selectedFids[0];
    this.clickId = this.clickInteraction?.selectedFids[0];

    const discardIcon = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;

    return html`
      <ul class="list no-space">
        ${this.drawnFeatures.map((feature, i) => {
          // Determine feature number and ID
          const featureNumber = i + 1;
          const featureId = Object.values(
            this.eoxMap.selectInteractions,
          )[0].getId(feature);

          // Check if the feature is hovered or clicked
          const isFeatureHovered = this.hoverId === featureId;
          const isFeatureClicked = this.clickId === featureId;
          const selectionClass = isFeatureHovered
            ? "surface-container-low"
            : isFeatureClicked
              ? "fill"
              : nothing;

          const pathParts = this.featureNameKey?.split(".");
          const propertyName =
            feature.get(this.featureNameKey) ||
            pathParts?.reduce((obj, part) => obj?.[part], {
              ...feature.getProperties(),
            });

          const title = propertyName
            ? propertyName
            : `${this.featureName} ${featureNumber}`;

          return keyed(
            featureNumber,
            html`
              <li
                class="${selectionClass} no-round"
                @mouseover=${() => this._handleHoverFeature(featureId)}
                @mouseout=${() => this._handleHoverFeature(featureId, true)}
                @click=${() => this._handleFeatureSelectAndDeselect(feature)}
              >
                <div class="max">
                  <span class="title">${title}</span>
                </div>
                <button
                  index=${i}
                  data-cy="deleteFeatureBtn"
                  class="transparent square small error-text front"
                  @click=${this._handleDelete}
                >
                  ${this.unstyled
                    ? "x"
                    : html`<i class="small">${discardIcon}</i>`}
                </button>
              </li>
            `,
          );
        })}
      </ul>
    `;
  }
}

customElements.define("eox-drawtools-list", EOxDrawToolsList);
