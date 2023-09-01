import Modify from "ol/interaction/Modify";
import Draw, { createBox } from "ol/interaction/Draw";
import { EOxMap } from "../main";
import { getArea, getLength } from "ol/sphere";
import { LineString, Polygon } from "ol/geom";
import GeoJSON from "ol/format/GeoJSON";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";

export type DrawOptions = Omit<
  import("ol/interaction/Draw").Options,
  "type"
> & {
  id: string | number;
  type: "Point" | "LineString" | "Polygon" | "Circle" | "Box";
  modify?: boolean;
};

export function addDraw(
  EOxMap: EOxMap,
  layerId: string,
  options: DrawOptions
): void {
  const options_ = Object.assign({}, options);
  if (EOxMap.interactions[options_.id]) {
    throw Error(`Interaction with id: ${options_.id} already exists.`);
  }
  options_.modify =
    typeof options_.modify === "boolean" ? options_.modify : true;

  const map = EOxMap.map;

  const drawLayer = EOxMap.getLayerById(layerId) as VectorLayer<VectorSource>;

  const source = drawLayer.getSource();

  if (options_.type === "Box") {
    options_.geometryFunction = createBox();
    options_.type = "Circle";
  }

  const drawInteraction = new Draw({
    ...options_,
    source,
  } as import("ol/interaction/Draw").Options);

  const format = new GeoJSON();
  drawInteraction.on("drawend", (e) => {
    const geom = e.feature.getGeometry();
    if (geom instanceof LineString) {
      const length = getLength(geom, {
        radius: 6378137,
        projection: "EPSG:3857",
      });
      e.feature.set("measure", length);
    } else if (geom instanceof Polygon) {
      const area = getArea(geom, { radius: 6378137, projection: "EPSG:3857" });
      e.feature.set("measure", area);
    }
    const geoJsonObject = format.writeFeatureObject(e.feature);
    const drawendEvt = new CustomEvent("drawend", {
      detail: {
        originalEvent: e,
        geojson: geoJsonObject,
      },
    });
    EOxMap.dispatchEvent(drawendEvt);
  });

  // identifier to retrieve the interaction
  //@ts-ignore
  map.addInteraction(drawInteraction);
  EOxMap.interactions[options_.id] = drawInteraction;

  if (options_.modify) {
    const modifyInteraction = new Modify({
      source,
    });
    //@ts-ignore
    map.addInteraction(modifyInteraction);
    EOxMap.interactions[`${options_.id}_modify`] = modifyInteraction;
  }
}
