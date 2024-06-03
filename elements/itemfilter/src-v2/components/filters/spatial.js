import { LitElement, html, nothing } from "lit";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import booleanWithin from "@turf/boolean-within";
import "../../../../map/main";
import { getMapLayers } from "../../helpers/";
// import { resetFilter } from "../reset";

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
    };
  }

  constructor() {
    super();
    this.filterObject = {};
  }

  reset() {
    // resetFilter(this.filterObject);

    const spatialFilter = this.renderRoot.querySelector(
      "eox-itemfilter-spatial-filter"
    );
    spatialFilter.reset();
    this.requestUpdate();
  }

  createRenderRoot() {
    return this;
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
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode || "") === mode ||
                  nothing}"
                  value="${mode}"
                  @click="${() => {
                    this.filterObject.state.mode = mode;
                    const event = new CustomEvent("filter", {
                      detail: {
                        [this.filterObject.key]: {},
                      },
                    });
                    this.dispatchEvent(event);
                  }}"
                />
                <small>${mode} filter geometry</small>
              </label>
            `
          )}
        </form>
        <eox-itemfilter-spatial-filter
          exportparts="map: spatial-filter-map"
          .geometry="${this.filterObject.state?.geometry}"
          @filter="${(e) => {
            this.filterObject.state.geometry = e.detail.geometry;
            this.filterObject.dirty = true;
            this.filterObject.stringifiedState = "Polygon";
            this.dispatchEvent(new CustomEvent("filter"));
          }}"
        ></eox-itemfilter-spatial>
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

  render() {
    return html`<eox-map part="map" style="height: 400px"></eox-map>`;
  }

  firstUpdated() {
    this.setup();
  }

  setup() {
    const url = this.geometry && this.createFeatureUrl(this.geometry);
    const mapLayers = getMapLayers(this.geometry, url);

    this.eoxMap = this.renderRoot.querySelector("eox-map");
    setTimeout(() => {
      this.eoxMap.layers = mapLayers;
      const updateGeometryFilter = (feature) => {
        const event = new CustomEvent("filter", {
          detail: {
            geometry: {
              type: "Polygon",
              coordinates: feature
                .getGeometry()
                .clone()
                .transform("EPSG:3857", "EPSG:4326")
                .getCoordinates(),
            },
          },
        });
        this.dispatchEvent(event);
      };
      this.eoxMap.interactions["drawInteraction"].on("drawend", (e) => {
        updateGeometryFilter(e.feature);
        this.eoxMap.removeInteraction("drawInteraction");
      });
      this.eoxMap.interactions["drawInteraction_modify"].on(
        "modifyend",
        (e) => {
          updateGeometryFilter(e.features.getArray()[0]);
        }
      );
    }, 1000);
  }

  createFeatureUrl(geometry) {
    const featureString = encodeURIComponent(
      JSON.stringify({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: null,
            geometry,
          },
        ],
      })
    );
    return `data:text/json,${featureString}`;
  }

  reset() {
    const source = this.eoxMap.getLayerById("draw").getSource();
    if (source.getFeatures()?.length > 0) {
      source.clear();
      this.eoxMap.removeInteraction("drawInteraction_modify");
      this.setup();
    }
  }
}

customElements.define("itemfilter-spatial-filter", SpatialFilter);

export { EOxItemFilterSpatial, SpatialFilter };
