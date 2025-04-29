import { driver } from "driver.js";
import "./style.css";

/**
 * @property {Object} config - Configuration object for the driver.js tour.
 * @attr {string|null} [unstyled=undefined] - If provided, the element will not be styled with EOX styles.
 */
export class EOxTour extends HTMLElement {
  static observedAttributes = ["unstyled"];

  defaultConfig = {
    onPopoverRender: (popover, { config }) => {
      // Replace button icons
      popover.previousButton.innerHTML = `
      <i class="mdi mdi-arrow-left small responsive"></i>
      <span>${config.prevBtnText || "Previous"}</span>
      `;
      popover.previousButton.style = config.showButtons.includes("previous")
        ? "display: flex"
        : "display: none;";
      popover.previousButton.classList.add("small");

      popover.nextButton.innerHTML = `
        <span>${config.nextBtnText || "Next"}</span>
        <i class="mdi mdi-arrow-right small responsive"></i>
      `;
      popover.nextButton.style = config.showButtons.includes("next")
        ? "display: flex"
        : "display: none;";
      popover.nextButton.classList.add("small");

      popover.closeButton.innerHTML = `
        <i class="mdi mdi-close small"></i>
      `;
      popover.closeButton.style = config.showButtons.includes("close")
        ? "display: flex"
        : "display: none;";
      popover.closeButton.classList.add("transparent");
      popover.closeButton.classList.add("circle");
      popover.closeButton.classList.add("small");

      popover.progress.style =
        config.showButtons.showProgress === undefined ||
        !config.showButtons.showProgress
          ? "display: flex"
          : "display: none;";

      // Replace footerButton with <nav> tag
      const nav = document.createElement("nav");
      nav.innerHTML = popover.footerButtons.innerHTML;
      popover.footerButtons.parentElement.replaceChild(
        nav,
        popover.footerButtons,
      );

      const title = document.createElement("h6");
      title.innerHTML = popover.title.innerHTML;
      popover.title.parentElement.replaceChild(title, popover.title);
      title.classList.add("no-margin");
    },
  };

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this._config = undefined;
    this.driver = undefined;
  }

  set config(val) {
    this._config = {
      ...this.defaultConfig,
      ...val,
    };
    this.driver?.setConfig(this._config);
    this.driver?.drive();
  }

  get config() {
    return this._config;
  }

  connectedCallback() {
    this.driver = driver(this._config);
    // this.render();
    this.driver.drive();
  }

  // render() {
  //   this.shadowRoot.innerHTML = `
  //     <style>
  //       ${style}
  //       ${this.getAttribute("unstyled") === null && styleEOX}
  //       :host {
  //         display: block;
  //       }
  //     </style>
  //   `;
  //   this.driver.highlight({
  //     element: document.querySelector("h1#test"),
  //     popover: {
  //       title: "Title",
  //       description: "Description",
  //     },
  //   });
  // }
}

customElements.define("eox-tour", EOxTour);
