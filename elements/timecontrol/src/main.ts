import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Map, Tile } from "ol";
import { isStringColor } from "ol/color";
import Layer from "ol/layer/Layer";
import TileSource from "ol/source/Tile";
import { style } from "./style";

@customElement("eox-timecontrol")
export class EOxDrawTools extends LitElement {
  @property({ attribute: "animation-property" })
  animationProperty: string;

  @property({ attribute: "animation-values", type: Array })
  animationValues: Array<string>;

  @property()
  /**
   * The query selector for the map
   */
  for: string;

  @property()
  /**
   * The layerid of the animated layer
   */
  layer: string;

  @property()
  transformFunction: Function = (url: string) => url;

  @state()
  private _animationInterval: ReturnType<typeof setInterval>;

  @state()
  private _animationSource: TileSource;

  @state()
  private _isAnimationPlaying: boolean;

  @state()
  private _newTimeIndex: number = 0;

  next() {
    this._updateTime(+1);
  }

  previous() {
    this._updateTime(-1);
  }

  playAnimation(on: boolean) {
    if (on) {
      this._animationInterval = setInterval(() => this._updateTime(1), 500);
    } else {
      clearInterval(this._animationInterval);
    }
    this._isAnimationPlaying = on;
    this.requestUpdate();
  }

  private _updateTime(go = 1) {
    this._newTimeIndex = this._newTimeIndex + go;
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
      </style>
      <main>
        <div part="controls">
          <span part="current">${this.animationValues[this._newTimeIndex]}</span>
          <button part="next" @click="${() => this.next()}"><</button>
          <button part="previous" @click="${() => this.previous()}">></button>
          <button
            part="play"
            @click="${() =>
              this.playAnimation(this._isAnimationPlaying ? false : true)}"
          >
            ${this._isAnimationPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </main>
    `;
  }
}
