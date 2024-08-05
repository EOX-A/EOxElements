import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html } from "lit";

/**
 * EOxStacInfoShadow is a custom element that safely renders HTML content
 * within a shadow DOM. It ensures that images, videos, and iframes do not
 * exceed the width of their container.
 *
 * @module EOxStacInfoProperties
 * @extends {LitElement}
 */
export class EOxStacInfoShadow extends LitElement {
  static get properties() {
    return {
      content: { type: String },
    };
  }

  constructor() {
    super();

    /**
     * HTML content to be rendered.
     * @type {string|null}
     */
    this.content = null;
  }

  /**
   * Renders the HTML template for the component.
   */
  render() {
    return html`<style>
        img,
        video,
        iframe {
          max-width: 100%;
        }
      </style>
      <div>${unsafeHTML(this.content)}</div>`;
  }
}

customElements.define("eox-stacinfo-shadow", EOxStacInfoShadow);
