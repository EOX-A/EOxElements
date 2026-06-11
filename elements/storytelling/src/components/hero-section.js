import { LitElement, html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { renderAndSanitizeMarkdown } from "../helpers/index.js";
import styleEOX from "../style.eox.js";

/**
 * @element eox-storytelling-hero
 */
export class EOxStoryTellingHero extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      background: { type: String },
      as: { type: String },
      position: { type: String },
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
    this.description = "";
    /**
     * @type {string}
     */
    this.background = "";
    /**
     * @type {string}
     */
    this.as = "img";
    /**
     * @type {string}
     */
    this.position = "center";
    /**
     * @type {boolean}
     */
    this.unstyled = false;
    /**
     * @type {boolean}
     */
    this.noShadow = false;
  }

  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          width: 100%;
        }
        ${!this.unstyled && styleEOX}
      </style>
      <div class="story-telling">
        <div class="section-wrap hero section-start ${this.position}">
          ${this.background
            ? html`
                ${this.as === "video"
                  ? html`<video
                      src="${this.background}"
                      autoplay
                      loop
                      muted
                    ></video>`
                  : html`<img src="${this.background}" />`}
              `
            : ""}
          <div class="hero-content">
            ${this.title ? html`<h1>${this.title}</h1>` : ""}
            ${this.description
              ? html`<div class="markdown-content">
                  ${unsafeHTML(renderAndSanitizeMarkdown(this.description))}
                </div>`
              : ""}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("eox-storytelling-hero", EOxStoryTellingHero);
