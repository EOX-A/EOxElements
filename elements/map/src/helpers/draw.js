import Modify from "ol/interaction/Modify";
import Draw, { createBox } from "ol/interaction/Draw";
import { addNewFeature } from "../helpers";

/**
 * @typedef {import("../../types").DrawOptions} DrawOptions
 * @typedef {import("../../types").SelectOptions} SelectOptions
 * @typedef {import("../../types").SelectLayer} SelectLayer
 * @typedef {import("ol/layer").Vector} VectorLayer
 * */

/**
 * Adds a `draw` interaction to the map. If `options.modify` is set, it also adds a `modify` interaction.
 * The `modify` interaction's name follows the convention `${DrawOptions.id}_modify`.
 *
 * @param {import("../main").EOxMap} EOxMap - The map object where the interactions will be added.
 * @param {import("ol/layer").Vector<import("ol/source").Vector>} drawLayer - The map object where the interactions will be added.
 * @param {DrawOptions} options - The map object where the interactions will be added.
 *
 * @throws Will throw an error if an interaction with the given ID already exists.
 */
export function addDraw(EOxMap, drawLayer, options) {
  // Create a shallow copy of the options to avoid modifying the original object
  const options_ = Object.assign({}, options);

  // Check if an interaction with the specified ID already exists
  if (EOxMap.interactions[options_.id])
    throw Error(`Interaction with id: ${options_.id} already exists.`);

  options_.modify =
    typeof options_.modify === "boolean" ? options_.modify : true;

  const source = drawLayer.getSource();

  // Handle the "Box" type drawing, using a circle with a geometry function to create a box
  if (options_.type === "Box") {
    options_.geometryFunction = createBox();
    options_.type = "Circle";
  }

  //@ts-expect-error box
  const drawInteraction = new Draw({
    ...options_,
    source,
  });

  // Set the draw interaction to inactive if `options.active` is explicitly set to false
  if (options_.active === false) {
    drawInteraction.setActive(false);
  }

  // Listen for the 'drawend' event to handle the addition of new features to the layer
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

  // Listener function to remove interactions when the associated layer is removed
  const removeLayerListener = () => {
    if (!EOxMap.getLayerById(drawLayer.get("id"))) {
      EOxMap.removeInteraction(options_.id);
      EOxMap.removeInteraction(`${options_.id}_modify`);
      EOxMap.map.getLayerGroup().un("change", removeLayerListener);
    }
  };

  // Subscribe to the 'change' event on the layer group to detect when layers are removed
  EOxMap.map.getLayerGroup().on("change", removeLayerListener);
}
