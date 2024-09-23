/**
 * Removes an interaction from the map and deletes it from the interaction list in EOxMap.
 *
 * @param {string | number} id - The identifier for the interaction to be removed.
 * @param {import("../../main").EOxMap} EOxMap - The map object containing the map instance and interactions list.
 */
export function removeInteractionMethod(id, EOxMap) {
  // Remove the interaction from the map using the provided ID
  EOxMap.map.removeInteraction(EOxMap.interactions[id]);

  // Delete the interaction from the EOxMap interactions list
  delete EOxMap.interactions[id];

  // If a corresponding modify interaction exists, remove and delete it as well
  if (EOxMap.interactions[`${id}_modify`]) {
    EOxMap.map.removeInteraction(EOxMap.interactions[`${id}_modify`]);
    delete EOxMap.interactions[`${id}_modify`];
  }
}

/**
 * Removes a select interaction from the map and deletes it from the select interactions list in EOxMap.
 *
 * @param {string} id - The identifier for the select interaction to be removed.
 * @param {import("../../main").EOxMap} EOxMap - The map object containing the select interactions list.
 */
export function removeSelectMethod(id, EOxMap) {
  // Remove the select interaction using the provided ID
  EOxMap.selectInteractions[id].remove();

  // Delete the select interaction from the EOxMap select interactions list
  delete EOxMap.selectInteractions[id];
}

/**
 * Removes a control from the map and deletes it from the map controls list in EOxMap.
 *
 * @param {string} id - The identifier for the control to be removed.
 * @param {import("../../main").EOxMap} EOxMap - The map object containing the map instance and controls list.
 */
export function removeControlMethod(id, EOxMap) {
  // Remove the control from the map using the provided ID
  EOxMap.map.removeControl(EOxMap.mapControls[id]);

  // Delete the control from the EOxMap map controls list
  delete EOxMap.mapControls[id];
}
