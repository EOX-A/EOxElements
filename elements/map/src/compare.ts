import { html } from "lit";
import { property } from "lit/decorators.js";
import { TemplateElement } from "../../../utils/templateElement";

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
export class EOxMapCompare extends TemplateElement {
  @property()
  value: number = 50;

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
        }
        .eox-map-compare::after {
          content: "";
          display: block;
          padding-bottom: 50%;
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
          @input=${(evt: HTMLElementEvent<HTMLInputElement>) =>
            (this.value = parseInt(evt.target.value))}
        />
      </div>
    `;
  }
}

customElements.define("eox-map-compare", EOxMapCompare);
