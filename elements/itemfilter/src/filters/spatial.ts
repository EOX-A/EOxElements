import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import booleanIntersects from "@turf/boolean-intersects";
import booleanWithin from "@turf/boolean-within";
import { Geometry } from "@turf/helpers";
import { EOxMap } from "../../../map/main";
import { resetFilter } from "../reset";
import { EoxLayer } from "../../../map/src/generate";
import { Vector as VectorSource } from "ol/source";

export const intersects = (
  itemGeometry: Geometry,
  filterGeometry: Geometry,
) => {
  if (!filterGeometry) {
    return true;
  }
  return booleanIntersects(itemGeometry, filterGeometry);
};

export const within = (itemGeometry: Geometry, filterGeometry: Geometry) => {
  if (!filterGeometry) {
    return true;
  }
  return booleanWithin(itemGeometry, filterGeometry);
};
@customElement("eox-itemfilter-spatial")
export class EOxItemFilterSpatial extends LitElement {
  @property()
  filterObject: SpatialFilterObject;

  public reset() {
    resetFilter(this.filterObject);

    const spatialFilter: SpatialFilter = this.renderRoot.querySelector(
      "eox-itemfilter-spatial-filter",
    );
    spatialFilter.reset();
    this.requestUpdate();
  }

  // skip shadow root creation
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
        (mode: string) => html`
          <label>
            <input
              type="radio"
              name="mode"
              .checked="${(this.filterObject.state
                .mode as unknown as string) === mode || nothing}
              "
              value="${mode}"
              @click="${() => {
                /* @ts-ignore */
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
        `,
      )}
      </form>
      <eox-itemfilter-spatial-filter
        exportparts="map: spatial-filter-map"
        .geometry=${this.filterObject.state?.geometry}
        @filter="${(e: Event) => {
          this.filterObject.state.geometry = (<CustomEvent>e).detail.geometry;
          this.filterObject.dirty = true;
          this.filterObject.stringifiedState = "Polygon";
          this.dispatchEvent(new CustomEvent("filter"));
        }}"
      ></eox-itemfilter-spatial>
    `,
    );
  }
}

@customElement("eox-itemfilter-spatial-filter")
export class SpatialFilter extends LitElement {
  @property()
  geometry: Geometry;

  @state()
  eoxMap: EOxMap;

  render() {
    return html`<eox-map part="map" style="height: 400px"></eox-map>`;
  }

  firstUpdated() {
    this.setup();
  }

  setup() {
    const mapLayers = [
      {
        type: "Vector",
        properties: {
          id: "draw",
        },
        source: {
          type: "Vector",
          ...(this.geometry && { format: "GeoJSON" }),
          ...(this.geometry && { url: this.createFeatureUrl(this.geometry) }),
        },
        zIndex: 1,
        interactions: [
          {
            type: "draw",
            options: {
              id: "drawInteraction",
              type: "Box",
              modify: true,
            },
          },
        ],
      },
      {
        type: "Tile",
        source: {
          type: "XYZ",
          url: "https://s2maps-tiles.eu/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",
          attribution:
            "{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }",
        },
      },
    ];

    this.eoxMap = this.renderRoot.querySelector("eox-map");
    setTimeout(() => {
      this.eoxMap.layers = mapLayers as EoxLayer[];
      const updateGeometryFilter = (feature: unknown) => {
        const event = new CustomEvent("filter", {
          detail: {
            geometry: {
              type: "Polygon",
              coordinates: feature
                // @ts-ignore
                .getGeometry()
                .clone()
                .transform("EPSG:3857", "EPSG:4326")
                .getCoordinates(),
            },
          },
        });
        this.dispatchEvent(event);
      };
      this.eoxMap.interactions["drawInteraction"].on(
        // @ts-ignore
        "drawend",
        (e: { feature: unknown }) => {
          updateGeometryFilter(e.feature);
          this.eoxMap.removeInteraction("drawInteraction");
        },
      );
      this.eoxMap.interactions["drawInteraction_modify"].on(
        // @ts-ignore
        "modifyend",
        (e: { features: unknown }) => {
          // @ts-ignore
          updateGeometryFilter(e.features.getArray()[0]);
        },
      );
      // TODO remove
    }, 1000);
  }

  // TODO move to epx-map helper function?
  createFeatureUrl(geometry: Geometry) {
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
      }),
    );
    return `data:text/json,${featureString}`;
  }

  reset() {
    const source = this.eoxMap.getLayerById("draw").getSource();
    if ((source as unknown as VectorSource).getFeatures()?.length > 0) {
      (source as unknown as VectorSource).clear();
      this.eoxMap.removeInteraction("drawInteraction_modify");
      this.setup();
    }
  }
}
