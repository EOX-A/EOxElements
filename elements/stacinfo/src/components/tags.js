import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html } from "lit";
import { map } from "lit/directives/map.js";

/**
 *
 *
 */
export class EOxStacInfoTags extends LitElement {
  static get properties() {
    return {
      tags: { attribute: false, type: Array },
    };
  }

  constructor() {
    super();
    this.tags = [];
  }

  /**
   * Override createRenderRoot to use LitElement as the render root
   */
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="tags">
        ${map(this.tags, ([, value]) => html`${unsafeHTML(value.formatted)}`)}
      </section>
    `;
  }
}

customElements.define("eox-stacinfo-tags", EOxStacInfoTags);
