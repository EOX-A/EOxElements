import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html } from "lit";

/**
 *
 *
 */
export class EOxStacInfoShadow extends LitElement {
  static get properties() {
    return {
      content: { type: String },
    };
  }

  constructor() {
    super();
    this.content = null;
  }

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
