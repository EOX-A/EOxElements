/**
 * Safely deep-clones values, including objects with custom .clone() methods
 * (such as OpenLayers Features/Geometries), arrays, and nested objects,
 * falling back to recursive copying if structuredClone throws.
 *
 * @template T
 * @param {T} val - Value to clone
 * @returns {T} Cloned value
 */
export const safeCloneValue = (val) => {
  if (val === null || typeof val !== "object") return val;
  // @ts-expect-error - supports OL features or objects with .clone()
  if (typeof val.clone === "function") return val.clone();
  if (Array.isArray(val)) return /** @type {any} */ (val.map(safeCloneValue));
  try {
    return structuredClone(val);
  } catch {
    /** @type {Record<string, unknown>} */
    const copy = {};
    for (const key of Object.keys(val)) {
      // @ts-expect-error - key indexing
      copy[key] = safeCloneValue(val[key]);
    }
    return /** @type {T} */ (copy);
  }
};
