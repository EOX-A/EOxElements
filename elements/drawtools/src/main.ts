import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { Map } from "ol";
import { Draw, Modify, Select, Snap } from "ol/interaction";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { style } from "./style";

@customElement("eox-drawtools")
export class EOxDrawTools extends LitElement {
  @state()
  _olMap: Map;

  @state()
  _drawLayer: VectorLayer<VectorSource>;

  @state()
  _drawnFeatures: Array<VectorLayer<VectorSource>> = [];

  @state()
  _currentlyDrawing: Boolean;

  @property({ type: Boolean })
  multipleFeatures: Boolean = true;

  @property()
  attachTo = (
    olMap: Map,
    layerIdentifier: {
      property: string;
      value: string;
    }
  ) => {
    this._olMap = olMap;
    const layers = this._olMap.getLayers().getArray();
    this._drawLayer = layers.find(
      (l) => l.get(layerIdentifier.property) === layerIdentifier.value
    ) as VectorLayer<VectorSource>;
    this._drawLayer.setStyle({
      "fill-color": "#00417044",
      "stroke-color": "white",
      "stroke-width": 4,
    });
    this.requestUpdate();
    this._dynamicImport();
  };

  _draw: Draw;
  _modify: Modify;
  _select: Select;
  _snap: Snap;

  async _dynamicImport() {
    const source = this._drawLayer.getSource();
    const {
      Draw: importedDraw,
      Modify: importedModify,
      Select: importedSelect,
      Snap: importedSnap,
    } = await import(
      // @ts-ignore
      "https://cdn.skypack.dev/ol/interaction.js"
    );
    this._draw = new importedDraw({
      source,
      type: "Polygon",
    });
    this._draw.on("drawend", (evt) => this._onDrawEnd(evt));
    this._modify = new importedModify({ source });
    this._select = new importedSelect({ style: "click" });
    this._select.on("select", (evt) => this._onFeatureSelect(evt));
    this._snap = new importedSnap({ source });

    this.requestUpdate();
  }

  _startDrawing() {
    if (!this._olMap || !this._draw) {
      return;
    }
    this._olMap.addInteraction(this._draw);
    this._olMap.addInteraction(this._modify);
    this._olMap.addInteraction(this._select);
    this._olMap.addInteraction(this._snap);
    this._currentlyDrawing = true;
    this.requestUpdate();
  }

  _discardDrawing() {
    this._drawnFeatures = [];
    this._olMap.removeInteraction(this._draw);
    this._olMap.removeInteraction(this._modify);
    this._olMap.removeInteraction(this._snap);
    this._drawLayer.getSource().clear();
    this._currentlyDrawing = false;
    this.requestUpdate();
  }

  _onDrawEnd(evt: any) {
    const feature = evt.feature;
    feature.on;
    this._drawnFeatures.push(feature);
    const drawEvt = new CustomEvent("drawend", { detail: this._drawnFeatures });
    this.dispatchEvent(drawEvt);

    this._olMap.removeInteraction(this._draw);
    this._olMap.removeInteraction(this._snap);
    this._currentlyDrawing = false;
    this.requestUpdate();
  }

  _onFeatureSelect(evt: any) {
    console.log(evt);
  }

  render() {
    return html`
      <style>
        ${style}
      </style>
      <div>
        <slot></slot>
        <div>
          <small>
            ${when(
              this._drawLayer,
              () => html`layer id: ${this._drawLayer.get("mapbox-source")}`
            )}
          </small>
        </div>
        <button
          disabled="${!this._draw ||
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
