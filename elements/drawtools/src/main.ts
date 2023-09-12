import { LitElement, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { EOxMap } from "../../map/main";
import { Map } from "ol";
import { Draw, Modify } from "ol/interaction";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import Feature from "ol/Feature.js";
import { Geometry } from "ol/geom";

export class EOxDrawTools extends LitElement {
  @state()
  _layerId: string;

  @state()
  _eoxMap: EOxMap;

  @state()
  _olMap: Map;

  @state()
  _drawLayer: VectorLayer<VectorSource>;

  @state()
  _drawnFeatures: Array<Feature<Geometry>> = [];

  @state()
  _currentlyDrawing: boolean;

  @property({ type: Boolean })
  multipleFeatures: boolean;

  /**
   * The query selector for the map
   */
  @property()
  for: string;

  @property()
  layer: string;

  @property({ type: Boolean })
  unstyled: boolean;

  _draw: Draw;
  _modify: Modify;

  _startDrawing() {
    this._eoxMap.addDraw(this._layerId, {
      id: "drawInteraction",
      type: "Polygon",
    });
    // @ts-ignore
    this._draw = this._eoxMap.interactions["drawInteraction"] as Draw;
    // @ts-ignore
    this._modify = this._eoxMap.interactions[
      "drawInteraction_modify"
    ] as Modify;
    this._draw.on("drawend", (evt) => this._onDrawEnd(evt));
    this._modify.on("modifyend", (evt) => this._onModifyEnd(evt));
    this._currentlyDrawing = true;
    this.requestUpdate();
  }

  _discardDrawing() {
    this._drawnFeatures = [];
    this._eoxMap.removeInteraction("drawInteraction");
    this._drawLayer.getSource().clear();
    this._currentlyDrawing = false;
    this.requestUpdate();
  }

  _onDrawEnd(evt: any) {
    console.log(evt);
    this._emitDrawnFeatures();
    this._eoxMap.removeInteraction("drawInteraction");
    this._currentlyDrawing = false;
    this.requestUpdate();
  }

  _onModifyEnd(evt: any) {
    console.log(evt);
    this._emitDrawnFeatures();
  }

  _emitDrawnFeatures() {
    setTimeout(() => {
      this._drawnFeatures = this._drawLayer.getSource().getFeatures();
      this.requestUpdate();
      const drawEvt = new CustomEvent("drawupdate", {
        detail: this._drawnFeatures,
      });
      this.dispatchEvent(drawEvt);
    }, 0);
  }

  render() {
    const mapQuery = document.querySelector(this.for as string);

    // @ts-ignore
    this._eoxMap = mapQuery;
    // @ts-ignore
    this._olMap = mapQuery.map;

    this._layerId = this.layer;

    this._drawLayer = this._olMap
      .getLayers()
      .getArray()
      .find((l) => l.get("id") === this._layerId) as VectorLayer<VectorSource>;
    this.requestUpdate();

    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <div>
        <slot></slot>
        <button
          data-cy="drawBtn"
          class="icon-text polygon"
          disabled="${(!this.multipleFeatures && this._drawnFeatures.length) ||
          this._currentlyDrawing ||
          nothing}"
          @click="${() => this._startDrawing()}"
        >
          ${this._currentlyDrawing ? "drawing" : "draw"}
        </button>
        <button
          data-cy="discardBtn"
          class="discard"
          disabled="${(!this._drawnFeatures.length &&
            !this._currentlyDrawing) ||
          nothing}"
          @click="${() => this._discardDrawing()}"
        >
          discard
        </button>
      </div>
    `;
  }
}

customElements.define("eox-drawtools", EOxDrawTools)