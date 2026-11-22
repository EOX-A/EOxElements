/**
 * Computes an appropriate step for number/range inputs based on the range difference.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function computeStep(min, max) {
  const diff = Math.abs(max - min);
  if (diff === 0) return 0.01;
  if (diff <= 0.01) return 0.0001;
  if (diff <= 0.1) return 0.001;
  if (diff <= 1) return 0.01;
  if (diff <= 10) return 0.1;
  return 1;
}

/**
 * Builds schema property definitions for min and max controls based on valid_range.
 * If validRange is available, uses range sliders bounded by valid_range.
 * If no validRange is available, uses number inputs (`format: "number"`).
 *
 * @param {number} [min]
 * @param {number} [max]
 * @param {number[] | null | undefined} [validRange]
 * @returns {{ minProp: Record<string, any>, maxProp: Record<string, any>, hasValidRange: boolean }}
 */
export function buildMinMaxProperties(min, max, validRange) {
  const hasValidRange =
    Array.isArray(validRange) &&
    validRange.length === 2 &&
    typeof validRange[0] === "number" &&
    typeof validRange[1] === "number" &&
    !Number.isNaN(validRange[0]) &&
    !Number.isNaN(validRange[1]);

  if (hasValidRange) {
    const rangeMin = validRange[0];
    const rangeMax = validRange[1];
    const step = computeStep(rangeMin, rangeMax);
    const resolvedMin = min !== undefined ? min : rangeMin;
    const resolvedMax = max !== undefined ? max : rangeMax;
    return {
      hasValidRange: true,
      minProp: {
        type: "number",
        format: "range",
        title: "Min Value",
        default: resolvedMin,
        minimum: rangeMin,
        maximum: rangeMax,
        step,
      },
      maxProp: {
        type: "number",
        format: "range",
        title: "Max Value",
        default: resolvedMax,
        minimum: rangeMin,
        maximum: rangeMax,
        step,
      },
    };
  }

  const resolvedMin = min !== undefined ? min : 0;
  const resolvedMax = max !== undefined ? max : 1;
  const step = computeStep(resolvedMin, resolvedMax);
  return {
    hasValidRange: false,
    minProp: {
      type: "number",
      format: "number",
      title: "Min Value",
      default: resolvedMin,
      step,
    },
    maxProp: {
      type: "number",
      format: "number",
      title: "Max Value",
      default: resolvedMax,
      step,
    },
  };
}

/**
 * Updates `min` / `max` / `minmax` schema properties in-place based on `validRange` and `isAutofill`.
 *
 * @param {Record<string, any>} props
 * @param {number} min
 * @param {number} max
 * @param {number[] | null | undefined} [validRange]
 * @param {boolean} [isAutofill=false]
 * @param {boolean} [overwriteDefaults=false]
 */
export function applyMinMaxToSchemaProperties(
  props,
  min,
  max,
  validRange,
  isAutofill = false,
  overwriteDefaults = false,
) {
  const { minProp, maxProp, hasValidRange } = buildMinMaxProperties(
    min,
    max,
    validRange,
  );
  const resolvedMinDefault = (existing) =>
    overwriteDefaults ? min : (existing?.default ?? min);
  const resolvedMaxDefault = (existing) =>
    overwriteDefaults ? max : (existing?.default ?? max);

  if (props.min !== undefined) {
    props.min = {
      ...minProp,
      ...props.min,
      format: minProp.format,
      ...(minProp.minimum !== undefined && { minimum: minProp.minimum }),
      ...(minProp.maximum !== undefined && { maximum: minProp.maximum }),
      step: minProp.step,
      default: resolvedMinDefault(props.min),
    };
  }
  if (props.max !== undefined) {
    props.max = {
      ...maxProp,
      ...props.max,
      format: maxProp.format,
      ...(maxProp.minimum !== undefined && { minimum: maxProp.minimum }),
      ...(maxProp.maximum !== undefined && { maximum: maxProp.maximum }),
      step: maxProp.step,
      default: resolvedMaxDefault(props.max),
    };
  }
  const useMinMaxObject =
    isAutofill && overwriteDefaults
      ? hasValidRange
      : props.minmax !== undefined ||
        (isAutofill &&
          hasValidRange &&
          props.min === undefined &&
          props.max === undefined);

  if (useMinMaxObject) {
    props.minmax = {
      type: "object",
      title: "Value Range",
      ...(props.minmax || {}),
      properties: {
        min: {
          ...minProp,
          ...(props.minmax?.properties?.min || {}),
          ...(minProp.minimum !== undefined && { minimum: minProp.minimum }),
          ...(minProp.maximum !== undefined && { maximum: minProp.maximum }),
          step: minProp.step,
          default: resolvedMinDefault(props.minmax?.properties?.min),
        },
        max: {
          ...maxProp,
          ...(props.minmax?.properties?.max || {}),
          ...(maxProp.minimum !== undefined && { minimum: maxProp.minimum }),
          ...(maxProp.maximum !== undefined && { maximum: maxProp.maximum }),
          step: maxProp.step,
          default: resolvedMaxDefault(props.minmax?.properties?.max),
        },
      },
      format: "minmax",
    };
    if (isAutofill && overwriteDefaults) {
      delete props.min;
      delete props.max;
    }
  } else if (
    isAutofill &&
    !hasValidRange &&
    (overwriteDefaults || (props.min === undefined && props.max === undefined))
  ) {
    props.min = { ...minProp, default: min };
    props.max = { ...maxProp, default: max };
    if (overwriteDefaults) {
      delete props.minmax;
    }
  }
}

/**
 * Updates WebGL style variables across OpenLayers layer properties and shader state.
 *
 * @param {any} layer
 * @param {Record<string, any>} variables
 */
export function applyLayerStyleVariables(layer, variables) {
  if (!layer || !variables) return;
  if (typeof layer.updateStyleVariables === "function") {
    layer.updateStyleVariables(variables);
  }
  if (layer.styleVariables_) {
    Object.assign(layer.styleVariables_, variables);
  }
  if (layer.style_?.variables) {
    Object.assign(layer.style_.variables, variables);
  }
  const styleObj = layer.get?.("style");
  if (styleObj?.variables) {
    Object.assign(styleObj.variables, variables);
  }
}

/**
 * Syncs `min` / `max` or `minmax` values into a form data object based on schema properties.
 *
 * @param {Record<string, any>} target
 * @param {Record<string, any> | undefined} schemaProps
 * @param {number} min
 * @param {number} max
 * @param {boolean} [isAutofill=false]
 */
export function syncMinMaxFormValues(
  target,
  schemaProps,
  min,
  max,
  isAutofill = false,
) {
  if (!target) return;
  if ("min" in target || schemaProps?.min !== undefined) {
    target.min = min;
  }
  if ("max" in target || schemaProps?.max !== undefined) {
    target.max = max;
  }
  if (
    "minmax" in target ||
    schemaProps?.minmax !== undefined ||
    (isAutofill &&
      schemaProps?.min === undefined &&
      schemaProps?.max === undefined)
  ) {
    target.minmax = { min, max };
  }
}
