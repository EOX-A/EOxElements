import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html } from "lit";
import { styleEOX } from "../style.eox.js";

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
        ${styleEOX} img,
        video,
        iframe {
          max-width: 100%;
        }
        :host {
          font-size: 0.875rem;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: bold;
        }
        h1 {
          font-size: 1.5rem;
        }
        h2 {
          font-size: 1.25rem;
        }
        h3 {
          font-size: 1rem;
        }
        h4 {
          font-size: 0.9rem;
        }
        h5 {
          font-size: 0.875rem;
        }
        h6 {
          font-size: 0.75rem;
        }
      </style>
      <div>${unsafeHTML(this.content)}</div>`;
  }
}

customElements.define("eox-stacinfo-shadow", EOxStacInfoShadow);
