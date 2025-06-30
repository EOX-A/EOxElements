import { driver } from "driver.js";
import { TOUR_KEY } from "./enums";
import "./style.css";

/**
 * @property {Object} config - Configuration object for the driver.js tour.
 * @attr {boolean} show-every-time=false - If true, the tour will be shown every time the page is loaded.
 * @attr {string|null} [unstyled=undefined] - If provided, the element will not be styled with EOX styles.
 */
export class EOxTour extends HTMLElement {
  static observedAttributes = ["unstyled", "show-every-time"];

  defaultConfig = {
    onPopoverRender: (popover, { config }) => {
      // Replace button icons
      popover.previousButton.innerHTML = `
      <i style="pointer-events: none" class="mdi mdi-arrow-left small responsive"></i>
      <span style="pointer-events: none">${config.prevBtnText || "Previous"}</span>
      `;
      popover.previousButton.style = config.showButtons.includes("previous")
        ? "display: flex"
        : "display: none;";
      popover.previousButton.classList.add("small");

      popover.nextButton.innerHTML = `
        <span style="pointer-events: none">${config.nextBtnText || "Next"}</span>
        <i style="pointer-events: none" class="mdi mdi-arrow-right small responsive"></i>
      `;
      popover.nextButton.style = config.showButtons.includes("next")
        ? "display: flex"
        : "display: none;";
      popover.nextButton.classList.add("small");

      popover.closeButton.innerHTML = `
        <i style="pointer-events: none" class="mdi mdi-close small"></i>
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
          ? "display: flex; align-items: center;"
          : "display: none;";

      // Replace footerButton with <nav> tag
      const nav = document.createElement("nav");
      nav.style = "display: flex; align-items: center;";
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

  // Show tour or not
  showTourOrNot() {
    // If show-every-time is not set, show tour only if it's not in localStorage
    if (this.getAttribute("show-every-time") === null) {
      if (!this._config) return;

      const stored = localStorage.getItem(TOUR_KEY);
      let parsed;

      try {
        parsed = stored ? JSON.parse(stored) : null;
      } catch {
        parsed = null;
      }

      // If tour has been shown before but the new config have id, then reset the tour for the tour localstorage
      if (typeof parsed === "boolean" && parsed === true && this._config.id) {
        localStorage.removeItem(TOUR_KEY);
        this.showTourOrNot();
        return;
      }

      // Decision logic if tour should be shown or not
      // If tour has been shown before or if it is an object and id is matched to the tour, skip tour
      // `id` based based match helps to control multiple tours on the same page or different pages
      const shouldSkip =
        parsed === true ||
        (typeof parsed === "object" &&
          parsed !== null &&
          this._config.id &&
          parsed[this._config.id]);

      if (shouldSkip) return;
      this.driver.drive();

      // Update localStorage
      if (this._config.id) {
        const updated =
          typeof parsed === "object" && parsed !== null ? parsed : {};
        updated[this._config.id] = true;
        localStorage.setItem(TOUR_KEY, JSON.stringify(updated));
      } else {
        localStorage.setItem(TOUR_KEY, "true");
      }
    } else {
      // If show-every-time is set, show tour every time the page is loaded
      this.driver.drive();
    }
  }

  set config(val) {
    this._config = {
      ...this.defaultConfig,
      ...val,
    };
    if (this.driver) {
      this.driver.setConfig(this._config);
      this.showTourOrNot();
    }
  }

  get config() {
    return this._config;
  }

  connectedCallback() {
    this.driver = driver(this._config);
    this.showTourOrNot();
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
