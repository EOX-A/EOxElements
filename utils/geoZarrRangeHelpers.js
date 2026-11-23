/**
 * Computes an appropriate step for number/range inputs based on the range difference.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function computeStep(min, max) {
  const diff = Math.abs(max - min);
  if (diff === 0 || !Number.isFinite(diff)) return 0.01;
  if (diff >= 100) return 1;
  return Number((10 ** Math.floor(Math.log10(diff) - 1)).toPrecision(1));
}

/**
 * Returns the number of decimal places for a step (supports scientific notation).
 * @param {number} step
 * @returns {number}
 */
export function getStepDecimals(step) {
  if (!Number.isFinite(step) || step <= 0) return 0;
  const [coeff, exp = 0] = step.toString().toLowerCase().split("e");
  return Math.min(
    20,
    Math.max(0, (coeff.split(".")[1]?.length ?? 0) - Number(exp)),
  );
}

/**
 * Rounds `[min, max]` outward to clean multiples of `computeStep(min, max)`.
 * Ensures the full data range remains covered without floating-point noise.
 *
 * @param {[number, number]} range
 * @returns {[number, number]}
 */
export function roundRangeBounds(range) {
  const [min, max] = range;
  if (!Number.isFinite(min) || !Number.isFinite(max)) return [0, 1];
  const lo = Math.min(min, max);
  const hi = Math.max(min, max);
  const step = computeStep(lo, hi);
  const decimals = getStepDecimals(step);
  // Scale epsilon to the normalized coordinate so micro- and macro-scale ranges behave identically
  const loNorm = lo / step;
  const hiNorm = hi / step;
  const loEps = Math.max(1e-12, Math.abs(loNorm) * 1e-12);
  const hiEps = Math.max(1e-12, Math.abs(hiNorm) * 1e-12);
  const roundedMin = Number(
    (Math.floor(loNorm + loEps) * step).toFixed(decimals),
  );
  const roundedMax = Number(
    (Math.ceil(hiNorm - hiEps) * step).toFixed(decimals),
  );
  return [roundedMin, roundedMax];
}

/**
 * Computes a clean D3 tickFormat string for `color-legend` based on domain span.
 *
 * @param {[number, number]} domain
 * @returns {string}
 */
export function computeLegendTickFormat(domain) {
  const [min, max] = domain;
  const diff = Math.abs(max - min);
  if (!Number.isFinite(diff) || diff === 0) return ".2f";
  if (diff >= 100) return ".0f";
  if (diff >= 1) return ".1f";
  if (diff >= 0.1) return ".2f";
  if (diff >= 0.01) return ".3f";
  if (diff >= 0.001) return ".4f";
  return ".2e";
}

/**
 * Parses a raw Zarr range attribute (array or comma/JSON string) into `[min, max]`, or `null`.
 *
 * @param {unknown} raw
 * @returns {[number, number] | null}
 */
export function parseRangeAttribute(raw) {
  let range = raw;
  if (typeof range === "string") {
    try {
      range = JSON.parse(range);
    } catch {
      const parts = range.split(",").map(Number);
      if (
        parts.length === 2 &&
        !Number.isNaN(parts[0]) &&
        !Number.isNaN(parts[1])
      ) {
        range = parts;
      }
    }
  }
  if (
    Array.isArray(range) &&
    range.length === 2 &&
    Number.isFinite(Number(range[0])) &&
    Number.isFinite(Number(range[1]))
  ) {
    return [Number(range[0]), Number(range[1])];
  }
  return null;
}

/**
 * Resolves slider bounds (`boundsRange`) and initial default `[min, max]` from
 * `valid_range` and optional `visualization_range`.
 * `valid_range` sets the eligible slider `minimum`/`maximum`, while `visualization_range`
 * sets the initial `default` values (rounded to the bounds step and clamped inside bounds).
 *
 * @param {number[] | null | undefined} validRange
 * @param {number[] | null | undefined} [visualizationRange]
 * @returns {{ min: number, max: number, boundsRange: [number, number] | null }}
 */
export function resolveRangeDefaults(validRange, visualizationRange) {
  const valid = parseRangeAttribute(validRange);
  const vis = parseRangeAttribute(visualizationRange);
  const boundsSource = valid ?? vis;

  if (!boundsSource) {
    return { min: 0, max: 1, boundsRange: null };
  }

  const boundsRange = roundRangeBounds(boundsSource);
  if (!vis) {
    return { min: boundsRange[0], max: boundsRange[1], boundsRange };
  }

  const step = computeStep(boundsRange[0], boundsRange[1]);
  const decimals = getStepDecimals(step);
  const clampAndRound = (v) =>
    Math.max(
      boundsRange[0],
      Math.min(boundsRange[1], Number(v.toFixed(decimals))),
    );
  const visLo = clampAndRound(Math.min(vis[0], vis[1]));
  const visHi = clampAndRound(Math.max(vis[0], vis[1]));

  return {
    min: visLo,
    max: visHi,
    boundsRange,
  };
}

/**
 * Builds schema property definitions for min and max controls based on valid_range.
 * If validRange is available, uses range sliders bounded by rounded valid_range.
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
    const [rangeMin, rangeMax] = roundRangeBounds([
      validRange[0],
      validRange[1],
    ]);
    const step = computeStep(rangeMin, rangeMax);
    const decimals = getStepDecimals(step);
    const roundVal = (v) => Number(v.toFixed(decimals));
    const resolvedMin =
      min !== undefined
        ? Math.max(rangeMin, Math.min(rangeMax, roundVal(min)))
        : rangeMin;
    const resolvedMax =
      max !== undefined
        ? Math.max(rangeMin, Math.min(rangeMax, roundVal(max)))
        : rangeMax;
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

/**
 * Converts raw Zarr coordinate values (including BigInt) into finite numbers.
 *
 * @param {any[] | undefined} rawCoords
 * @returns {number[]}
 */
function toNumericCoords(rawCoords) {
  if (!Array.isArray(rawCoords)) return [];
  return rawCoords.map((c) => Number(c)).filter(Number.isFinite);
}

/**
 * Builds a JSONForm schema property for a non-temporal GeoZarr dimension (e.g. `depth`).
 * Uses an `enum` dropdown of exact physical coordinate values when available,
 * and falls back to `0 .. size - 1` indices when coordinate values are unavailable.
 *
 * @param {string} dimName
 * @param {{ size: number, attributes?: Record<string, any>, coordinates?: any[] }} dimMeta
 * @returns {Record<string, any>}
 */
export function buildDimensionProperty(dimName, dimMeta) {
  const title =
    dimMeta?.attributes?.long_name ||
    dimName.charAt(0).toUpperCase() + dimName.slice(1);
  const units = dimMeta?.attributes?.units;
  const displayTitle = units ? `${title} (${units})` : title;

  const coords = toNumericCoords(dimMeta?.coordinates);
  if (coords.length === dimMeta?.size && coords.length > 0) {
    return {
      type: "number",
      title: displayTitle,
      default: coords[0],
      enum: coords,
    };
  }

  return {
    type: "integer",
    title: displayTitle,
    default: 0,
    minimum: 0,
    maximum: Math.max(0, (dimMeta?.size ?? 1) - 1),
    step: 1,
    format: "range",
  };
}

/**
 * Resolves a physical coordinate value (or index) from the form into a 0-based
 * integer slice index for `GeoZarr.prototype.updateDimensions()`.
 *
 * @param {{ size?: number, coordinates?: any[] } | undefined} dimMeta
 * @param {number | string} value
 * @returns {number}
 */
export function resolveDimensionIndex(dimMeta, value) {
  const numVal = Number(value);
  if (!Number.isFinite(numVal)) return 0;

  const coords = toNumericCoords(dimMeta?.coordinates);
  if (coords.length > 0) {
    const exactIdx = coords.indexOf(numVal);
    if (exactIdx !== -1) return exactIdx;

    let bestIdx = 0;
    let bestDist = Math.abs(coords[0] - numVal);
    for (let i = 1; i < coords.length; i++) {
      const dist = Math.abs(coords[i] - numVal);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = i;
      }
    }
    return bestIdx;
  }

  const maxIdx = Math.max(0, (dimMeta?.size ?? 1) - 1);
  return Math.max(0, Math.min(maxIdx, Math.round(numVal)));
}
