import { style } from "./style";
import { styleEOX } from "./style.eox";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

/**
 * @attr {string|null} [unstyled=undefined] - If provided, the element will not be styled with EOX styles.
 */
export class EOxTour extends HTMLElement {
  static observedAttributes = ["unstyled"];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.driver = undefined;
  }

  connectedCallback() {
    this.driver = driver();
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        ${style}
        ${this.getAttribute("unstyled") === null && styleEOX}
        :host {
          display: block;
        }
      </style>
    `;
    this.driver.highlight({
      element: document.querySelector("h1#test"),
      popover: {
        title: "Title",
        description: "Description",
      },
    });
  }
}

customElements.define("eox-tour", EOxTour);
