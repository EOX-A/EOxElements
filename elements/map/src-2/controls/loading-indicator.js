import { Control } from "ol/control.js";

/**
 * @typedef {import("../../types").LoadingIndicatorOptions} LoadingIndicatorOptions
 */

export default class LoadingIndicatorControl extends Control {
  /**
   * @param {LoadingIndicatorOptions} [opt_options] - Control options.
   */
  constructor(opt_options) {
    const options = opt_options || {};
    if (options.opacity === undefined) {
      options.opacity = 1;
    }
    if (options.type === undefined) {
      options.type = "small";
    }

    const element = document.createElement("div");
    element.className = "LoadingIndicator ol-unselectable ol-control";
    element.classList.add("loading-indicator");
    element.style.opacity = String(options.opacity);

    if (options.spinnerSvg) {
      element.innerHTML = options.spinnerSvg;
    } else {
      // Fallback icon
      element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="164.93361431346415 56.97787143782138" r="35" stroke-width="12" stroke="#1a467c" fill="none" cy="50" cx="50">
      <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="1.2222222222222223s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
      </circle></g></svg>`;
    }

    if (options.type === "fullscreen") {
      element.classList.add("fullscreen");
    } else {
      element.classList.add("small");
    }

    super({ element: element });
  }

  /**
   * Remove the control from its current map and attach it to the new map.
   * Pass `null` to just remove the control from the current map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("ol/Map").default|null} map - Map instance.
   * @api
   */
  setMap(map) {
    super.setMap(map);
    if (map) {
      map.on("loadstart", () => {
        this.getElement().style.visibility = "visible";
      });
      map.on("loadend", () => {
        this.getElement().style.visibility = "hidden";
      });
    }
  }

  /**
   * Returns the loading indicator element.
   * @returns {HTMLElement} - The control element.
   */
  getElement() {
    return this.element;
  }
}
