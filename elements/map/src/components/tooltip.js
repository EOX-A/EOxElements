import { LitElement, html, nothing } from "lit";

/**
 * A custom element that serves as a tooltip for the map.
 * Displays information about map features in a styled format.
 */
export class EOxMapTooltip extends LitElement {
  static get properties() {
    return {
      feature: { attribute: false, property: true, type: Object },
      propertyTransform: { attribute: false, property: true, type: Function },
    };
  }

  constructor() {
    super();

    /**
     * The rendered feature.
     *
     * @type {import("ol/Feature").default | import("ol/render/Feature").default}
     */
    this.feature = null;

    /**
     * A function to transform properties before rendering.
     *
     * @type {Function}
     * @param {{ key: string; value: unknown }} property
     * @param {import("ol/Feature").default | import("ol/render/Feature").default} _feature
     */
    this.propertyTransform = (property, _feature) => property;
  }

  render() {
    return this.feature
      ? html` <style>
            ul {
              margin: 0;
              padding: 15px 15px 15px 30px;
              background: #0008;
              border-radius: 15px;
              color: white;
              max-width: 250px;
              font-size: small;
            }
            span {
              font-weight: bold;
            }
          </style>
          <ul>
            ${Object.entries(this.feature.getProperties())
              .map(([key, value]) =>
                this.propertyTransform({ key, value }, this.feature),
              )
              .filter((v) => v)
              .map(
                ({ key, value }) =>
                  html`<li><span>${key}</span>: ${value}</li>`,
              )}
          </ul>`
      : nothing;
  }
}

// Define the custom element
customElements.define("eox-map-tooltip", EOxMapTooltip);
