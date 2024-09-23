import { html, render } from "lit";
import { TemplateElement } from "../../../../utils/templateElement";

/**
 * A custom element that serves as a tooltip for the map.
 * Displays information about map features in a styled format.
 */
export class EOxMapTooltip extends TemplateElement {
  static get properties() {
    return {
      propertyTransform: { attribute: false, property: true, type: Function },
    };
  }

  constructor() {
    super();

    /**
     * A function to transform properties before rendering.
     *
     * @type {Function}
     * @param {{ key: string; value: unknown }} property
     * @param {import("ol/Feature").default | import("ol/render/Feature").default} _feature
     */
    this.propertyTransform = (property, _feature) => property;
  }

  /**
   * @param {import("ol/Feature").default | import("ol/render/Feature").default} feature
   */
  renderContent(feature) {
    render(
      // Check if a custom template named "properties" is available
      this.hasTemplate("properties")
        ? html`${this.renderTemplate(
            // Render the custom template
            "properties",
            feature.getProperties(),
            // `tooltip-${this.content.id}`
            "tooltip-1"
          )}`
        : html` <style>
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
              ${Object.entries(feature.getProperties())
                .map(([key, value]) =>
                  this.propertyTransform({ key, value }, feature)
                )
                .filter((v) => v)
                .map(
                  ({ key, value }) =>
                    html`<li><span>${key}</span>: ${value}</li>`
                )}
            </ul>`,
      this.shadowRoot
    );
  }
}

// Define the custom element
customElements.define("eox-map-tooltip", EOxMapTooltip);
