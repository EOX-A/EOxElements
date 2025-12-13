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
              padding: 1rem 1rem 1rem 2rem;
              border-radius: 0.5rem;
              max-width: 250px;
              font-size: small;
              background-color: var(--inverse-surface);
              color: var(--inverse-on-surface);
              box-shadow: 0 0.25rem 0.5rem 0 rgb(0 0 0 / 0.4);
              line-height: normal;
              white-space: normal;
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
// We first check if it has already been defined in order to prevent errors
// as the tooltip is imported in helpers.js and thus multiple times
if (!customElements.get("eox-map-tooltip")) {
  customElements.define("eox-map-tooltip", EOxMapTooltip);
}
