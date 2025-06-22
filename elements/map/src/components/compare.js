import { LitElement, html } from "lit";
import { choose } from "lit/directives/choose.js";

/**
 * A custom element for comparing two map layers or images using a slider.
 * This component creates a split-screen view with an adjustable slider to compare two images or layers.
 */
export class EOxMapCompare extends LitElement {
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
     * @type {number}
     */
    this.value = 50;

    /**
     * Whether the comparison is enabled and which part is visible.
     * Accepts values: "first", "second", or "true" (default).
     * @type {string}
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
          --thumb-size: 3rem;
        }
        .eox-map-compare {
          --thumb-bgc: #fff;
          --thumb-w: var(--thumb-size);

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
          cursor: ew-resize;
          height: 100%;
          width: var(--thumb-w);
          pointer-events: all;
        }
        .eox-map-compare__range::-webkit-slider-thumb {
          cursor: ew-resize;
          height: 100%;
          width: var(--thumb-w);
          pointer-events: all;
          position: relative;
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
        .slider-bar,
        .slider-thumb {
          position: absolute;
          box-shadow: 0 0.125rem 0.125rem 0 rgb(0 0 0 / 0.32);
        }
        .slider-bar {
          pointer-events: none;
          top: 0;
          width: 0.3rem;
          height: 100%;
          background-color: var(--thumb-bgc);
          z-index: 2;
          left: calc(${this.value}% - 0.15rem);
          -webkit-clip-path: inset(0 -5px 0 -5px);
          clip-path: inset(0 -5px 0 -5px);
        }
        .slider-thumb {
          pointer-events: none;
          top: calc(50% - var(--thumb-size) / 2);
          background: var(--primary);
          z-index: 3;
          width: var(--thumb-size);
          aspect-ratio: 1;
          left: calc(${this.value}% - var(--thumb-size) / 2);
          border-radius: 50%;
          padding: 0.7rem;
          color: var(--on-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }
        .slider-thumb svg {
          fill: currentColor;
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
              <slot name="first"></slot>
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
            <div class="slider-bar"></div>
            <div class="slider-thumb">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>arrow-left-right</title>
                <path
                  d="M6.45,17.45L1,12L6.45,6.55L7.86,7.96L4.83,11H19.17L16.14,7.96L17.55,6.55L23,12L17.55,17.45L16.14,16.04L19.17,13H4.83L7.86,16.04L6.45,17.45Z"
                />
              </svg>
            </div>
          </div>
        `,
      )}
    `;
  }
}

// Define the custom element
customElements.define("eox-map-compare", EOxMapCompare);
