import { Control } from "ol/control.js";

/**
 * @typedef {import("../../types").LoadingIndicatorOptions} LoadingIndicatorOptions
 */

export default class LoadingIndicatorControl extends Control {
  /**
   * Creates a loading indicator control to show when map loading events occur.
   *
   * @param {LoadingIndicatorOptions} [opt_options] - Options for configuring the loading indicator control.
   */
  constructor(opt_options) {
    const options = opt_options || {};

    // Set default options if not provided
    if (options.opacity === undefined) {
      options.opacity = 1;
    }
    if (options.type === undefined) {
      options.type = "small";
    }

    // Create the main control element
    const element = document.createElement("div");
    element.className = "LoadingIndicator ol-unselectable ol-control";
    element.classList.add("loading-indicator");
    element.style.opacity = String(options.opacity);

    // Set the spinner icon; use a default SVG icon if none is provided
    if (options.spinnerSvg) {
      element.innerHTML = options.spinnerSvg;
    } else {
      // Fallback SVG spinner icon
      element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="164.93361431346415 56.97787143782138" r="35" stroke-width="12" stroke="#1a467c" fill="none" cy="50" cx="50">
      <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="1.2222222222222223s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
      </circle></g></svg>`;
    }

    // Add the appropriate CSS class based on the type of loading indicator
    if (options.type === "fullscreen") {
      element.classList.add("fullscreen");
    } else {
      element.classList.add("small");
    }

    // Call the superclass constructor to set up the control
    super({ element: element });
  }

  /**
   * Attaches the control to a map and sets up event listeners to show/hide the loading indicator based on map load events.
   *
   * @param {import("ol/Map").default|null} map - The map instance to attach the control to, or `null` to remove it.
   * @api
   */
  setMap(map) {
    super.setMap(map);
    if (map) {
      // Show the loading indicator when map loading starts
      map.on("loadstart", () => {
        this.getElement().style.visibility = "visible";
      });

      // Hide the loading indicator when map loading ends
      map.on("loadend", () => {
        this.getElement().style.visibility = "hidden";
      });
    }
  }

  /**
   * Returns the loading indicator element.
   *
   * @returns {HTMLElement} - The control element.
   */
  getElement() {
    return this.element;
  }
}
