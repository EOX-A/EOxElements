import { LitElement, html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { renderAndSanitizeMarkdown } from "../helpers/index.js";
import styleEOX from "../style.eox.js";

/**
 * @element eox-storytelling-tour-step
 */
export class EOxStoryTellingTourStep extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      config: { type: Object },
      unstyled: { type: Boolean },
      noShadow: { type: Boolean, attribute: "no-shadow" },
    };
  }

  constructor() {
    super();
    /**
     * @type {string}
     */
    this.title = "";
    /**
     * @type {string}
     */
    this._description = "";
    /**
     * @type {any}
     */
    this._config = {};
    /**
     * @type {boolean}
     */
    this.unstyled = false;
    /**
     * @type {boolean}
     */
    this.noShadow = false;
  }

  get description() {
    return this._description;
  }

  set description(val) {
    const old = this._description;
    this._description = val;
    this.requestUpdate("description", old);
    this.dispatchEvent(
      new CustomEvent("step-update", { bubbles: true, composed: true }),
    );
  }

  get config() {
    return this._config;
  }

  set config(val) {
    const old = this._config;
    this._config = val;
    this.requestUpdate("config", old);
    this.dispatchEvent(
      new CustomEvent("step-update", { bubbles: true, composed: true }),
    );
  }

  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  render() {
    const sanitizedHtml = renderAndSanitizeMarkdown(this.description);

    return html`
      <style>
        ${!this.unstyled && styleEOX} :host {
          display: block;
          z-index: 1;
          max-width: 25%;
          min-height: 8vh;
          margin: 1rem 10% 120vh 10% !important;
          transform: translateY(-20dvh);
          background: rgb(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          box-shadow: var(--elevate2);
          border-radius: 0.5rem;
          box-sizing: border-box;
        }
        @media screen and (max-width: 1024px) {
          :host {
            max-width: 100%;
            margin: 1rem 1rem 120vh 1rem !important;
          }
        }
      </style>
      <div class="story-telling">
        ${this.title ? html`<h4>${this.title}</h4>` : ""}
        ${unsafeHTML(sanitizedHtml)}
      </div>
    `;
  }
}

customElements.define("eox-storytelling-tour-step", EOxStoryTellingTourStep);
