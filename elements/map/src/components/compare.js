import { html } from "lit";
import { choose } from "lit/directives/choose.js";
import { TemplateElement } from "../../../../utils/templateElement";

/**
 * A custom element for comparing two map layers or images using a slider.
 * This component creates a split-screen view with an adjustable slider to compare two images or layers.
 */
export class EOxMapCompare extends TemplateElement {
  static get properties() {
    return {
      value: { attribute: "value", type: Number },
      enabled: { attribute: "enabled", type: String },
    };
  }

  constructor() {
    super();

    /**
     * The current position of the comparison slider (0 to 100).
     * @type {Number}
     */
    this.value = 50;

    /**
     * Whether the comparison is enabled and which part is visible.
     * Accepts values: "first", "second", or "true" (default).
     * @type {String}
     */
    this.enabled = "true";
  }

  /**
   * Handles input events on the slider to update the comparison value.
   *
   * @param {Event & {target: { value: string } }} evt - input event
   **/
  #handleInput(evt) {
    this.value = parseInt(evt.target.value);
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
        }
        /* Inspired by https://www.codehim.com/html5-css3/html-css-image-comparison-slider/ */
        .eox-map-compare {
          --thumb-bgc: #fff;
          --thumb-w: 0.2rem;

          position: relative;
          height: 100%;
        }
        .eox-map-compare::after {
          content: "";
          display: block;
        }
        .eox-map-compare__first,
        .eox-map-compare__second {
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          width: 100%;
        }
        .eox-map-compare__first {
          clip-path: polygon(
            0% 0%,
            ${this.value}% 0%,
            ${this.value}% 100%,
            0% 100%
          );
        }
        .eox-map-compare__second {
          clip-path: polygon(
            100% 0%,
            ${this.value}% 0%,
            ${this.value}% 100%,
            100% 100%
          );
        }
        .eox-map-compare__range {
          background-color: transparent;
          box-sizing: border-box;
          font-family: inherit;
          height: 100%;
          margin: 0;
          outline: none;
          position: absolute;
          top: 0;
          width: 100%;
          pointer-events: none;
        }
        .eox-map-compare__range::-moz-range-thumb {
          background-color: var(--thumb-bgc);
          cursor: ew-resize;
          height: 100%;
          width: var(--thumb-w);
          pointer-events: all;
          box-shadow: 0 0 5px black;
          clip-path: inset(0 -5px 0 -5px);
        }
        .eox-map-compare__range::-webkit-slider-thumb {
          background-color: var(--thumb-bgc);
          cursor: ew-resize;
          height: 100%;
          width: var(--thumb-w);
          pointer-events: all;
          position: relative;
          box-shadow: 0 0 5px black;
          -webkit-clip-path: inset(0 -5px 0 -5px);
          clip-path: inset(0 -5px 0 -5px);
        }
        .eox-map-compare__range::-moz-range-track {
          background: transparent;
          background-size: 100%;
          box-sizing: border-box;
        }
        .eox-map-compare__range::-webkit-slider-runnable-track {
          background: transparent;
          background-size: 100%;
          box-sizing: border-box;
          height: 100%;
        }
        .eox-map-compare__range,
        .eox-map-compare__range::-webkit-slider-runnable-track,
        .eox-map-compare__range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
        }
      </style>
      ${choose(
        this.enabled,
        [
          ["first", () => html`<slot name="first"></slot>`],
          ["second", () => html`<slot name="second"></slot>`],
        ],
        () => html`
          <div class="eox-map-compare">
            <div class="eox-map-compare__first">
              <slot name="first">hujhjjh</slot>
            </div>
            <div class="eox-map-compare__second">
              <slot name="second"></slot>
            </div>
            <input
              type="range"
              class="eox-map-compare__range"
              min="0"
              max="100"
              value=${this.value}
              @input=${this.#handleInput}
            />
          </div>
        `
      )}
    `;
  }
}

// Define the custom element
customElements.define("eox-map-compare", EOxMapCompare);
