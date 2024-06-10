import { LitElement, html, nothing } from "lit";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import booleanWithin from "@turf/boolean-within";
import "../../../../map/main";
import {
  handleClickSpatialMethod,
  resetSpatialFilterMethod,
  resetSpatialMethod,
  setupSpatialMethod,
} from "../../methods/filters/index.js";

export const within = (itemGeometry, filterGeometry) => {
  if (!filterGeometry) {
    return true;
  }
  return booleanWithin(itemGeometry, filterGeometry);
};

class EOxItemFilterSpatial extends LitElement {
  static get properties() {
    return {
      filterObject: { type: Object },
      tabIndex: { attribute: false, type: Number },
    };
  }

  constructor() {
    super();
    this.filterObject = {};
    this.tabIndex = 0;
  }

  reset() {
    resetSpatialMethod(this);
  }

  createRenderRoot() {
    return this;
  }

  #handleClick(mode) {
    handleClickSpatialMethod(mode, this);
  }

  render() {
    return when(
      this.filterObject,
      () => html`
        <form style="display: inline">
          ${map(
            ["intersects", "within"],
            (mode) => html`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode || "") === mode ||
                  nothing}"
                  value="${mode}"
                  @click=${() => this.#handleClick(mode)}
                />
                <small>${mode} filter geometry</small>
              </label>
            `
          )}
        </form>
        <itemfilter-spatial-filter
          exportparts="map: spatial-filter-map"
          .geometry="${this.filterObject.state?.geometry}"
          @filter="${(e) => {
            this.filterObject.state.geometry = e.detail.geometry;
            this.filterObject.dirty = true;
            this.filterObject.stringifiedState = "Polygon";
            this.dispatchEvent(new CustomEvent("filter"));
          }}"
        ></itemfilter-spatial>
      `
    );
  }
}

customElements.define("itemfilter-spatial", EOxItemFilterSpatial);

class SpatialFilter extends LitElement {
  constructor() {
    super();
    this.geometry = null;
    this.eoxMap = null;
  }

  static get properties() {
    return {
      geometry: { type: Object },
      eoxMap: { type: Object },
    };
  }

  firstUpdated() {
    this.#setup();
  }

  #setup() {
    setupSpatialMethod(this);
  }

  reset() {
    resetSpatialFilterMethod(this);
  }

  render() {
    return html`<div id="eox-map"></div>`;
  }
}

customElements.define("itemfilter-spatial-filter", SpatialFilter);

export { EOxItemFilterSpatial, SpatialFilter };
