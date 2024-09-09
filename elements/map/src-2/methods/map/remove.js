export function removeInteractionMethod(id, EOxMap) {
  EOxMap.map.removeInteraction(EOxMap.interactions[id]);
  delete EOxMap.interactions[id];
  if (EOxMap.interactions[`${id}_modify`]) {
    EOxMap.map.removeInteraction(EOxMap.interactions[`${id}_modify`]);
    delete EOxMap.interactions[`${id}_modify`];
  }
}

export function removeSelectMethod(id, EOxMap) {
  EOxMap.selectInteractions[id].remove();
  delete EOxMap.selectInteractions[id];
}

export function removeControlMethod(id, EOxMap) {
  EOxMap.map.removeControl(EOxMap.mapControls[id]);
  delete EOxMap.mapControls[id];
}
