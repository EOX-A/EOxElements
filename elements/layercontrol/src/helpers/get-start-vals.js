/**
 * Retrieves startVals from Query Params or style variables based on layer configuration.
 *
 * @param {import("ol/layer").Layer} layer - The layer object.
 * @param {import("../components/layer-config").EOxLayerControlLayerConfig['layerConfig']} layerConfig - Configuration object for the layer.
 * @returns {object | null} - Object containing the startVals or null if not found.
 */
export function getStartVals(layer, layerConfig) {
  // Check for layer configuration and tile URL function availability
  if (!layerConfig) return null;

  /** @type {Record<string,unknown>}*/
  let nestedValues = {};
  // extract style variables from layer
  let styleVars =
    "updateStyleVariables" in layer
      ? /** @type {import("ol/layer/WebGLTile").default} */
        (layer)["style_"]?.variables
      : layerConfig.style?.variables;
  if ((layerConfig.type === "style" || layerConfig.style) && styleVars) {
    nestedValues = styleVars;
  } else if (/** @type {any} */ (layer.getSource())?.getParams?.()) {
    nestedValues = /** @type {any} */ (layer.getSource()).getParams();
  } else if (
    /** @type {import("ol/source").Source & { getTileUrlFunction: Function }} */ (
      layer.getSource()
    )?.getTileUrlFunction?.()
  ) {
    // Extract query parameters from tile URL
    try {
      const tileUrl =
        /** @type {import("ol/source").Source & { getTileUrlFunction: Function }} */ (
          layer.getSource()
        ).getTileUrlFunction()([0, 0, 0]);
      if (tileUrl) {
        const url = new URL(tileUrl);
        // Retrieve startVals based on schema and query parameters
        nestedValues = {};
        for (const [key, value] of url.searchParams.entries()) {
          const allValues = url.searchParams.getAll(key);
          nestedValues[key] = allValues.length > 1 ? allValues : value;
        }
      }
    } catch (e) {
      console.error("Error parsing start values from tile URL", e);
    }
  } else return null;

  // fall back for schemas passed as a bare map of field definitions
  const fieldSchemas = collectFieldSchemas(layerConfig.schema);
  const startVals = getNestedStartVals(
    Object.keys(fieldSchemas).length ? fieldSchemas : layerConfig.schema,
    nestedValues,
    layerConfig.schema,
  );

  return Object.keys(startVals).length ? startVals : null;
}

/**
 * Collects a schema's field definitions from `properties` and from `anyOf`/`oneOf`/`allOf`
 * branches, resolving `$ref` branches against the root schema. json-editor uses those
 * combinators for "pick one variant" forms, where `properties` alone is empty.
 *
 * @param {{[key: string]: any}} schema - The schema object to collect fields from.
 * @param {{[key: string]: any}} [rootSchema] - The root schema `$ref`s resolve against.
 * @param {Set<string>} [seenRefs] - Already-resolved refs, guards against circular `$ref`s.
 * @returns {{[key: string]: any}} - Field definitions keyed by property name.
 */
function collectFieldSchemas(
  schema,
  rootSchema = schema,
  seenRefs = new Set(),
) {
  if (!schema || typeof schema !== "object") return {};

  const fields = {};
  if (typeof schema.$ref === "string" && !seenRefs.has(schema.$ref)) {
    seenRefs.add(schema.$ref);
    Object.assign(
      fields,
      collectFieldSchemas(
        resolveLocalRef(schema.$ref, rootSchema),
        rootSchema,
        seenRefs,
      ),
    );
  }
  for (const key of ["anyOf", "oneOf", "allOf"]) {
    if (Array.isArray(schema[key])) {
      for (const branch of schema[key]) {
        Object.assign(
          fields,
          collectFieldSchemas(branch, rootSchema, seenRefs),
        );
      }
    }
  }
  // `properties` overlays last so constraint-only branch entries can't shadow real fields
  return Object.assign(fields, schema.properties);
}

/**
 * Recursively traverses the schema object to extract startVals based on values of nested properties.
 *
 * @param {{[key: string]: any}} schema - The schema object to traverse.
 * @param {{[key: string]: any}} nestedValues - values of nested properties to extract startVals.
 * @param {{[key: string]: any}} [rootSchema] - The root schema `$ref`s resolve against.
 * @returns {object} - Object containing the startVals.
 */
export function getNestedStartVals(schema, nestedValues, rootSchema = schema) {
  let startVals = {};

  for (const key in schema) {
    const type = schema[key]?.type;
    // Extract startVal based on type
    if (type && type !== "object" && nestedValues[key] !== undefined) {
      const value = ["number", "integer"].includes(type)
        ? Number(nestedValues[key])
        : nestedValues[key];
      // keep the raw URL value instead of NaN (e.g. "auto" on a number field)
      startVals[key] = Number.isNaN(value) ? nestedValues[key] : value;
    } else {
      // Recursively traverse nested properties
      const nestedStartVals = getNestedStartVals(
        collectFieldSchemas(schema[key], rootSchema),
        nestedValues,
        rootSchema,
      );
      if (Object.keys(nestedStartVals).length > 0) {
        startVals[key] = nestedStartVals;
      }
    }
  }
  return startVals;
}

/**
 * Resolves a local `$ref` pointer (e.g. `#/definitions/foo`) against the root schema.
 *
 * @param {string} ref - The `$ref` value.
 * @param {{[key: string]: any}} rootSchema - The schema holding `definitions`/`$defs`.
 * @returns {{[key: string]: any} | undefined} - The referenced schema, or undefined for external/unresolvable refs.
 */
function resolveLocalRef(ref, rootSchema) {
  if (!ref.startsWith("#/")) return undefined;
  return ref
    .slice(2)
    .split("/")
    .reduce(
      (node, part) => node?.[part.replace(/~1/g, "/").replace(/~0/g, "~")],
      rootSchema,
    );
}
