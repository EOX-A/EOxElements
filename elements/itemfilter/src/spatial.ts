import bboxPolygon from "@turf/bbox-polygon";
import booleanIntersects from "@turf/boolean-intersects";
import booleanWithin from "@turf/boolean-within";
import { BBox } from "@turf/helpers";
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { EOxMap } from "../../map/main";

export const intersects = (itemBbox: BBox, filterBbox: BBox) => {
  return booleanIntersects(bboxPolygon(itemBbox), bboxPolygon(filterBbox));
};

export const within = (itemBbox: BBox, filterBbox: BBox) => {
  return booleanWithin(bboxPolygon(itemBbox), bboxPolygon(filterBbox));
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
    this.eoxMap = this.renderRoot.querySelector("eox-map");
    this.eoxMap.addDraw("draw", {
      id: "drawInteraction",
      type: "Polygon",
    });
    const updateBboxFilter = (feature: any) => {
      let event = new CustomEvent("filter", {
        detail: {
          extent: feature
            .getGeometry()
            .clone()
            .transform("EPSG:3857", "EPSG:4326")
            .getExtent(),
        },
      });
      this.dispatchEvent(event);
    };
    this.eoxMap.interactions["drawInteraction"].on(
      // @ts-ignore
      "drawend",
      (e: { feature: any }) => {
        updateBboxFilter(e.feature);
        this.eoxMap.removeInteraction("drawInteraction");
      }
    );
    this.eoxMap.interactions["drawInteraction_modify"].on(
      // @ts-ignore
      "modifyend",
      (e: { features: any }) => {
        updateBboxFilter(e.features.getArray()[0]);
      }
    );
  }

  reset() {
    this.eoxMap.getLayerById("draw").getSource().clear();
    this.eoxMap.addDraw("draw", {
      id: "drawInteraction",
      type: "Polygon",
    });
  }
}
