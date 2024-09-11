import Modify from "ol/interaction/Modify";
import Draw, { createBox } from "ol/interaction/Draw";
import { addNewFeature } from "../helpers";

/**
 * @typedef {import("../../types").DrawOptions} DrawOptions
 * */

/**
 * Adds a `draw`-interaction to the map.
 * Additionally, if {options.modify} is set, it also adds a `modify` interaction. The name `modify`-interaction
 * follows the naming convention `${DrawOptions.id}_modify`
 *
 * @param {import("../main").EOxMap} EOxMap
 * @param {import("ol/layer").Vector} drawLayer
 * @param {DrawOptions} options
 */
export function addDraw(EOxMap, drawLayer, options) {
  const options_ = Object.assign({}, options);
  if (EOxMap.interactions[options_.id]) {
    throw Error(`Interaction with id: ${options_.id} already exists.`);
  }
  options_.modify =
    typeof options_.modify === "boolean" ? options_.modify : true;

  const source = drawLayer.getSource();

  if (options_.type === "Box") {
    options_.geometryFunction = createBox();
    options_.type = "Circle";
  }

  //@ts-expect-error box
  const drawInteraction = new Draw({
    ...options_,
    source,
  });

  // TODO cleaner way of initializing as inactive?
  if (options_.active === false) {
    drawInteraction.setActive(false);
  }

  drawInteraction.on("drawend", (e) => {
    if (!drawLayer.get("isDrawingEnabled")) return;
    addNewFeature(e, drawLayer, EOxMap, true);
  });

  // identifier to retrieve the interaction
  EOxMap.map.addInteraction(drawInteraction);
  EOxMap.interactions[options_.id] = drawInteraction;
  const modifyInteraction = new Modify({
    source,
  });
  modifyInteraction.setActive(options_.modify);
  EOxMap.map.addInteraction(modifyInteraction);
  EOxMap.interactions[`${options_.id}_modify`] = modifyInteraction;

  const removeLayerListener = () => {
    if (!EOxMap.getLayerById(drawLayer.get("id"))) {
      EOxMap.removeInteraction(options_.id);
      EOxMap.removeInteraction(`${options_.id}_modify`);
      EOxMap.map.getLayerGroup().un("change", removeLayerListener);
    }
  };
  EOxMap.map.getLayerGroup().on("change", removeLayerListener);
}
