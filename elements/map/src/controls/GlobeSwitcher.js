import Control from "ol/control/Control";

/**
 * A control to switch between 2D and 3D views.
 * @param {Object} [opt_options] Control options.
 * @param {import("../main").EOxMap} opt_options.eoxMap
 */
export class GlobeSwitcher extends Control {
  /**
   * @param {Object} [options] Control options.
   * @param {import("../main").EOxMap} options.eoxMap
   */
  constructor(options) {
    const button = document.createElement("button");
    button.className = "globe-switcher  button ";
    button.innerHTML = "3D"; // Initial state

    const element = document.createElement("div");
    //const fas = options.map.shadowRoot.querySelector("ol-zoom");
    element.className = "ol-unselectable globe-switcher-container ol-control";
    element.appendChild(button);

    super({
      element: element,
      // @ts-expect-error TODO
      target: options.target,
    });

    this.eoxMap = options.eoxMap;
    this.button = button;

    button.addEventListener("click", this.handleClick.bind(this), false);
  }

  handleClick() {
    if (this.eoxMap.projection === "globe") {
      this.eoxMap.projection = this.eoxMap.last2dProjection || "EPSG:3857";
      this.button.innerHTML = "3D";
    } else {
      this.eoxMap.last2dProjection = this.eoxMap.OLprojection;
      this.eoxMap.projection = "globe";
      this.button.innerHTML = "2D";
    }
  }
}
