import { html, LitElement } from "lit";
import olCss from "ol/ol.css?inline";
import controlCss from "./controls/controls.css?inline";

export class EOxMap extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
        }
        .eox-map-tooltip {
          pointer-events: none !important;
        }
        ${olCss}
        ${controlCss}
      </style>
      <div style="width: 100%; height: 100%"></div>
      <slot></slot>
    `;
  }
}

customElements.define("eox-map-2", EOxMap);
