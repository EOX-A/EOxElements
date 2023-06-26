import { Draw, Modify } from "ol/interaction";
import { EOxMap } from "../main";
import { getArea, getLength } from "ol/sphere";
import { LineString, Polygon } from "ol/geom";
import GeoJSON from "ol/format/GeoJSON";

export function addDraw(EOxMap: EOxMap, layerId: string, options: any): void {
  if (EOxMap.interactions[options.id]) {
    throw Error(`Interaction with id: ${layerId} already exists.`);
  }

  const map = EOxMap.map;

  const drawLayer = EOxMap.getLayerById(layerId);

  // @ts-ignore
  const source = drawLayer.getSource();

  const drawInteraction = new Draw({
    type: options.type,
    source,
  });

  const modifyInteraction = new Modify({
    source,
  });

  const format = new GeoJSON();
  drawInteraction.on("drawend", (e) => {
    const geom = e.feature.getGeometry();
    if (geom instanceof LineString) {
      length = getLength(geom, { radius: 6378137, projection: "EPSG:3857" });
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
  map.addInteraction(drawInteraction);
  map.addInteraction(modifyInteraction);
  EOxMap.interactions[options.id] = drawInteraction;
  EOxMap.interactions[`${options.id}_modify`] = modifyInteraction;
}
