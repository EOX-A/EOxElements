import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Map } from "ol";
import Layer from "ol/layer/Layer";
import TileSource from "ol/source/Tile";
import "toolcool-range-slider";
import { style } from "./style";
import { styleEOX } from "./style.eox";

@customElement("eox-timecontrol")
export class EOxDrawTools extends LitElement {
  /**
   * The WMS parameter to update
   */
  @property({ attribute: "animation-property" })
  animationProperty?: string;

  /**
   * The list of available values for the animation property
   */
  @property({ attribute: "animation-values", type: Array })
  animationValues: Array<string> = [];

  /**
   * The query selector for the map
   */
  @property()
  for: string;

  /**
   * The layerid of the animated layer
   */
  @property()
  layer: string;

  /**
   * Display a slider for the values
   */
  @property({ type: Boolean })
  slider: boolean;

  /**
   * Custom url function to manually override the url creation. Receives the current url as property.
   * @param url the current url function output
   * @returns url the new url string
   * @example ```
   * document.querySelector("eox-timecontrol").urlFunction = (url) => {
   *   // do something with the url
   *   const newUrl = url.replace('foo', 'bar');
   *   return newUrl;
   *};
   * ```
   */
  @property()
  urlFunction: Function;

  /**
   * Go to next step
   */
  next() {
    this._updateStep(+1);
  }

  /**
   * Go to previous step
   */
  previous() {
    this._updateStep(-1);
  }

  /**
   * Toggle play animation
   * @param on animation on/off
   */
  playAnimation(on: boolean) {
    if (on) {
      this._animationInterval = setInterval(() => this._updateStep(1), 500);
    } else {
      clearInterval(this._animationInterval);
    }
    this._isAnimationPlaying = on;
    this.requestUpdate();
  }

  /**
   * Set the config at a later point
   * @param config
   */
  setConfig(config: {
    layer: string;
    animationProperty: string;
    animationValues: Array<string>;
  }) {
    this.layer = config.layer ?? this.layer;
    this.animationProperty = config.animationProperty ?? this.animationProperty;
    this.animationValues = config.animationValues ?? this.animationValues;
    this.requestUpdate();
    this._updateStep(0);
  }

  @state()
  private _animationInterval: ReturnType<typeof setInterval>;

  @state()
  private _animationSource: TileSource;

  @state()
  private _isAnimationPlaying: boolean;

  @state()
  private _newTimeIndex: number = 0;

  @property({ type: Boolean })
  unstyled: Boolean;

  private _updateStep(step = 1) {
    this._newTimeIndex = this._newTimeIndex + step;
    if (this._newTimeIndex > this.animationValues.length - 1) {
      this._newTimeIndex = 0;
    }
    if (this._newTimeIndex < 0) {
      this._newTimeIndex = this.animationValues.length - 1;
    }

    //@ts-ignore
    const originalTileUrlFunction = this._animationSource.getTileUrlFunction();
    //@ts-ignore
    this._animationSource.setTileUrlFunction(
      //@ts-ignore
      (tileCoord, pixelRatio, projection) => {
        let src = originalTileUrlFunction(tileCoord, pixelRatio, projection);
        if (this.urlFunction) {
          return this.urlFunction(src);
        }
        const searchParams = new URLSearchParams(
          src.substring(src.indexOf("?"))
        );
        searchParams.set(
          this.animationProperty,
          this.animationValues[this._newTimeIndex]
        );

        return src.substring(0, src.indexOf("?") + 1) + searchParams.toString();
      }
    );
    //@ts-ignore
    this._animationSource.setKey(new Date());
    this._animationSource.changed();
    this.requestUpdate();
  }

  render() {
    const mapQuery = document.querySelector(this.for as string);
    // @ts-ignore
    const olMap: Map = mapQuery.map || mapQuery;

    olMap.once("loadend", () => {
      const animationLayer = olMap
        .getLayers()
        .getArray()
        .find(
          (l) =>
            l.get("id") === this.layer ||
            l.get("mapbox-layers")?.includes(this.layer)
        ) as Layer;
      this._animationSource = animationLayer.getSource() as TileSource;
    });

    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <main>
        <div id="controls" part="controls">
          <button
            part="previous"
            class="icon previous"
            @click="${() => this.previous()}"
          >
            <
          </button>
          <button part="next" class="icon next" @click="${() => this.next()}">
            >
          </button>
          <button
            part="play"
            class="icon-text ${this._isAnimationPlaying ? "pause" : "play"}"
            @click="${() =>
              this.playAnimation(this._isAnimationPlaying ? false : true)}"
          >
            ${this._isAnimationPlaying ? "Pause" : "Play"}
          </button>

          ${this.slider
            ? html`
                <tc-range-slider
                  data="${this.animationValues}"
                  part="slider"
                  value="${this.animationValues[this._newTimeIndex]}"
                  style="display: inline-block;"
                  @change="${(evt: { detail: { value: string } }) =>
                    this._updateStep(
                      this.animationValues.findIndex(
                        (v) => v === evt.detail.value
                      ) - this._newTimeIndex
                    )}"
                ></tc-range-slider>
              `
            : ""}

          <span part="current"
            >${this.animationValues[this._newTimeIndex]}</span
          >
        </div>
      </main>
    `;
  }
}
