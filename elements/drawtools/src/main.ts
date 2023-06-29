import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { EOxMap } from "../../map/main";
import { Map } from "ol";
import { Draw, Modify } from "ol/interaction";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { style } from "./style";
import Feature from "ol/Feature.js";
import { Geometry } from "ol/geom";

@customElement("eox-drawtools")
export class EOxDrawTools extends LitElement {
  @state()
  _legacyMode: Boolean;

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
  _currentlyDrawing: Boolean;

  @property({ type: Boolean })
  multipleFeatures: Boolean;

  /**
   * The query selector for the map
   */
  @property()
  for: string;

  @property()
  layer: string;

  _draw: Draw;
  _modify: Modify;

  async _dynamicImport() {
    const source = this._drawLayer.getSource();
    const { Draw: importedDraw, Modify: importedModify } = await import(
      // @ts-ignore
      "https://cdn.skypack.dev/ol/interaction.js"
    );
    this._draw = new importedDraw({
      source,
      type: "Polygon",
    });

    this._modify = new importedModify({ source });

    this.requestUpdate();
  }

  _startDrawing() {
    if (!this._legacyMode) {
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
      // this._olMap.addEventListener('drawend', (evt) => this._onDrawEnd(evt))
    } else {
      this._olMap.addInteraction(this._draw);
      this._olMap.addInteraction(this._modify);
    }
    this._draw.on("drawend", (evt) => this._onDrawEnd(evt));
    this._modify.on("modifyend", (evt) => this._onModifyEnd(evt));
    this._currentlyDrawing = true;
    this.requestUpdate();
  }

  _discardDrawing() {
    this._drawnFeatures = [];
    if (!this._legacyMode) {
      this._eoxMap.removeInteraction("drawInteraction");
    } else {
      this._olMap.removeInteraction(this._draw);
      // this._olMap.removeInteraction(this._modify);
    }
    this._drawLayer.getSource().clear();
    this._currentlyDrawing = false;
    this.requestUpdate();
  }

  _onDrawEnd(evt: any) {
    console.log(evt);
    this._emitDrawnFeatures();

    if (!this._legacyMode) {
      this._eoxMap.removeInteraction("drawInteraction");
    } else {
      this._olMap.removeInteraction(this._draw);
    }
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
    const map = document.querySelector(this.for as string);
    // // @ts-ignore
    // const olMap: Map = mapQuery.map || mapQuery;

    this._layerId = this.layer;

    // @ts-ignore
    if (!map.addDraw) {
      this._legacyMode = true;
      // @ts-ignore
      this._olMap = map;
    } else {
      // @ts-ignore
      this._eoxMap = map;
      // @ts-ignore
      this._olMap = map.map;
    }

    let layers;
    layers = this._olMap.getLayers().getArray();
    this._drawLayer =
      (layers.find(
        (l) => l.get("id") === this._layerId
      ) as VectorLayer<VectorSource>) ||
      (layers
        .filter((l) => l.get("mapbox-layers"))
        .find((l) =>
          l.get("mapbox-layers").includes(this._layerId)
        ) as VectorLayer<VectorSource>);
    if (this._legacyMode) {
      this._dynamicImport();
    }
    this.requestUpdate();

    return html`
      <style>
        ${style}
      </style>
      <div>
        <slot></slot>
        <button
          disabled="${(this._legacyMode && !this._draw) ||
          (!this.multipleFeatures && this._drawnFeatures.length) ||
          this._currentlyDrawing ||
          nothing}"
          @click="${() => this._startDrawing()}"
        >
          ${this._currentlyDrawing ? "drawing" : "draw"}
        </button>
        <button
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
