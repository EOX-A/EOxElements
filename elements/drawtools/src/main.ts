import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { Map } from "ol";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { style } from "./style";

@customElement("eox-drawtools")
export class EOxDrawTools extends LitElement {
  @state()
  _olMap: Map;

  @state()
  _drawLayer: VectorLayer<VectorSource>;

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
    console.log(this._drawLayer);
    console.log(this._drawLayer.getSource());
    this.requestUpdate();
  };

  _startDrawing() {
    // either use an existing drawing interaction here
    // or trigger the map to create a new draw interaction
  }

  render() {
    return html`
      <style>
        ${style}
      </style>
      <div>
        <slot></slot>
        <h1>
          ${when(
            this._drawLayer,
            () => html`layer id: ${this._drawLayer.get("mapbox-source")}`
          )}
        </h1>
        <button @click="${this._startDrawing()}">draw</button>
      </div>
    `;
  }
}
