import booleanIntersects from "@turf/boolean-intersects";
import booleanWithin from "@turf/boolean-within";
import { Geometry } from "@turf/helpers";
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { EOxMap } from "../../map/main";

export const intersects = (
  itemGeometry: Geometry,
  filterGeometry: Geometry
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

@customElement("eox-itemfilter-spatial-filter")
export class SpatialFilter extends LitElement {
  @state()
  eoxMap: EOxMap;

  render() {
    return html`
      <eox-map
        style="height: 400px"
        layers='[
          {"type": "Vector", "id": "draw", "source": {"type": "Vector"}},
          {
            "type": "Tile",
            "source": {
              "type": "XYZ",
              "url": "https://s2maps-tiles.eu/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",
              "attribution": "{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"
            }
          }
        ]'
      ></eox-map>
    `;
  }

  firstUpdated() {
    this.setup();
  }

  setup() {
    this.eoxMap = this.renderRoot.querySelector("eox-map");
    this.eoxMap.addDraw("draw", {
      id: "drawInteraction",
      type: "Polygon",
    });
    const updateGeometryFilter = (feature: any) => {
      let event = new CustomEvent("filter", {
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
    this.eoxMap.interactions["drawInteraction"].on(
      // @ts-ignore
      "drawend",
      (e: { feature: any }) => {
        updateGeometryFilter(e.feature);
        this.eoxMap.removeInteraction("drawInteraction");
      }
    );
    this.eoxMap.interactions["drawInteraction_modify"].on(
      // @ts-ignore
      "modifyend",
      (e: { features: any }) => {
        updateGeometryFilter(e.features.getArray()[0]);
      }
    );
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
