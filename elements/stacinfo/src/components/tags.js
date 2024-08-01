import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html } from "lit";
import { map } from "lit/directives/map.js";

/**
 * EOxStacInfoTags is a custom element that displays tags for STAC items.
 * This element filters, formats, and displays tags in a structured layout.
 *
 * @extends LitElement
 */
export class EOxStacInfoTags extends LitElement {
  static get properties() {
    return {
      tags: { attribute: false, type: Array },
    };
  }

  constructor() {
    super();

    /**
     * Array of tags to display.
     * @type {Array}
     */
    this.tags = [];
  }

  /**
   * Override createRenderRoot to use LitElement as the render root
   */
  createRenderRoot() {
    return this;
  }

  /**
   * Renders the HTML template for the component.
   */
  render() {
    return html`
      <section id="tags">
        ${map(this.tags, ([, value]) => html`${unsafeHTML(value.formatted)}`)}
      </section>
    `;
  }
}

customElements.define("eox-stacinfo-tags", EOxStacInfoTags);
