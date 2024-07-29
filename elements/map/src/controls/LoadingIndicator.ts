import { Control } from "ol/control.js";

type LoadingIndicatorType = 'small' | 'fullscreen'

export type LoadingIndicatorOptions = import("ol/control/Control").Options & {
  /**
   * @property {string} spinnerIcon spinner icon
   */
  spinnerIcon?: string;
  /**
   * @property {Opacity} opacity opacity, defaults to 1
   */
  opacity?: number;
    /**
   * @property {LoadingIndicatorType} type type of appearance. Small button style of fullscreen style. Defaults to button style.
   */
  type?: LoadingIndicatorType;
};

export default class LoadingIndicatorControl extends Control {
  /**
   * @param {LoadingIndicatorOptions} [opt_options] Control options.
   */
  constructor(opt_options: LoadingIndicatorControl) {
    const options = (opt_options || {}) as LoadingIndicatorOptions;
    if (options.opacity === undefined) {
      options.opacity = 1;
    }
    if (options.type === undefined) {
      options.type = 'small'
    }

    const element = document.createElement("div");
    element.className = "LoadingIndicator ol-unselectable ol-control";
    element.classList.add('loading-indicator')
    element.style.opacity = String(options.opacity);
    
    if (options.spinnerIcon) {
      element.innerHTML = options.spinnerIcon;
    } else {
      // fallback icon
      element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="164.93361431346415 56.97787143782138" r="35" stroke-width="12" stroke="#1a467c" fill="none" cy="50" cx="50">
  <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="1.2222222222222223s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
  </circle><g></g></g></svg>`;
    }
    if (options.type === 'fullscreen') {
      element.classList.add('fullscreen')
    } else {
      element.classList.add('small')
    }
    super({
      element: element,
    });
  }



  /**
   * Remove the control from its current map and attach it to the new map.
   * Pass `null` to just remove the control from the current map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("ol/Map").default|null} map Map.
   * @api
   */
  setMap(map: import("ol/Map.js").default | null) {
    super.setMap(map);
    if (map) {
      map.on('loadstart', () => {
        this.getElement().style.visibility = 'visible';
      });
      map.on('loadend', () => {
        this.getElement().style.visibility = 'hidden';
      });
    }
  }


  /**
   * returns the geolocation control button
   * @returns
   */
  getElement() {
    return this.element;
  }
}