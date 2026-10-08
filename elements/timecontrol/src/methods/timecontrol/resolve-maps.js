import { getElement } from "@eox/elements-utils";

/**
 * Resolves map selectors, map references, or comparison elements to unique maps.
 * Comparison maps are the light-DOM children assigned to its two slots.
 *
 * @param {import("../../main").EOxTimeControl} EOxTimeControl - The timecontrol instance.
 * @returns {Array<import("@eox/map").EOxMap>} The associated maps in reference order.
 */
export default function resolveMapsMethod(EOxTimeControl) {
  const targets = Array.isArray(EOxTimeControl.for)
    ? EOxTimeControl.for
    : [EOxTimeControl.for];
  const maps = targets.flatMap((target) => {
    const element = getElement(target);
    if (element?.matches("eox-map")) return [element];
    if (element?.matches("eox-map-compare")) {
      return Array.from(element.querySelectorAll("eox-map"));
    }
    return [];
  });
  return /** @type {Array<import("@eox/map").EOxMap>} */ ([...new Set(maps)]);
}
