import { asArray } from "ol/color.js";
import { buildExpression, newEvaluationContext } from "ol/expr/cpu.js";
import {
  BooleanType,
  ColorType,
  NumberType,
  newParsingContext,
} from "ol/expr/expression.js";
import {
  HIDDEN_PIXEL_VALUE,
  VISIBLE_PIXEL_RANGE,
  OL_ALPHA_VALID,
  OL_RASTER_ADJUSTMENTS,
  OL_INFIX_OPERATORS,
  OL_MATH_FUNCTIONS,
} from "../../enums/index.js";

/**
 * @typedef {[number, string]} ColorStop A color stop defined as [normalizedPosition, colorString]
 */

/**
 * @typedef {object} BandChannelOptions
 * @property {number} band 1-indexed band number
 * @property {number} [min] Minimum channel value
 * @property {number} [max] Maximum channel value
 */

/**
 * @typedef {object} MultiBandRenderOptions
 * @property {BandChannelOptions} [r] Red channel options
 * @property {BandChannelOptions} [g] Green channel options
 * @property {BandChannelOptions} [b] Blue channel options
 */

/**
 * @typedef {import("@openglobus/og").geotiff.ColorScaleName} ColorScaleName
 */

/**
 * @typedef {object} SingleBandRenderOptions
 * @property {number} [band] Band index (1-indexed), defaults to 1
 * @property {ColorScaleName} [colorScale] Built-in colormap name
 * @property {ColorStop[] | string[]} [colors] Custom color stops or color strings
 * @property {[number, number]} [domain] Value domain [min, max] used to scale colors
 * @property {[number, number]} [displayRange] Range of values to render (values outside become transparent)
 * @property {boolean} [clampLow] Whether to clamp values below the domain
 * @property {boolean} [clampHigh] Whether to clamp values above the domain
 * @property {boolean} [useRealValue] If true, custom colors use real data domain values instead of 0..1
 * @property {string} [expression] Math expression across bands (e.g. '(b4 - b3) / (b4 + b3)')
 */

/**
 * @typedef {object} TranslatedColorScaleResult
 * @property {SingleBandRenderOptions} [single] Single-band render options for OpenGlobus GeoTIFFLayer
 * @property {MultiBandRenderOptions} [multi] Multi-band render options for OpenGlobus GeoTIFFLayer
 * @property {boolean} [convertToRGB] Whether to treat multi-band directly as RGB
 * @property {number} [nodata] Detected NoData value
 * @property {ColorStop[]} [colors] Flattened convenience array of color stops
 * @property {[number, number]} [domain] Flattened convenience value domain [min, max]
 * @property {[number, number]} [displayRange] Flattened convenience display range [min, max]
 * @property {number} [band] Flattened convenience band index
 * @property {ColorScaleName} [colorScale] Flattened convenience colormap name
 * @property {string} [expression] Flattened convenience math expression
 */

/**
 * Extracts all band indices referenced in an expression.
 *
 * @param {any} expr The expression to traverse
 * @returns {number[]} Array of unique 1-indexed band numbers
 */
export function extractBands(expr) {
  const bands = new Set();
  const traverse = (node) => {
    if (!Array.isArray(node)) return;
    if (node[0] === "band" && typeof node[1] === "number") {
      bands.add(node[1]);
      return;
    }
    for (let i = 1; i < node.length; i++) {
      traverse(node[i]);
    }
  };
  traverse(expr);
  return Array.from(bands).sort((a, b) => a - b);
}

/**
 * Converts an OpenLayers expression containing bands into an OpenGlobus infix
 * string expression, e.g. "(b4 - b3) / (b4 + b3)". og runs it with `Function`,
 * so only bands, finite numbers and known operators are emitted; anything else throws.
 * Parts without bands are evaluated by OL first.
 *
 * @param {any} expr The expression
 * @param {Record<string, any>} [vars={}] Style variables
 * @param {boolean} [isRoot=true] Whether this is the root of the expression
 * @returns {string} Infix expression string
 */
export function exprToInfix(expr, vars = {}, isRoot = true) {
  if (!extractBands(expr).length) {
    return numberLiteral(evaluateExpr(expr, vars, NumberType | BooleanType));
  }

  const op = expr[0];
  if (op === "band") {
    if (!Number.isInteger(expr[1]) || expr[1] < 1) {
      throw new Error("Band index must be a positive integer");
    }
    return `b${expr[1]}`;
  }

  /** @param {any} arg */
  const operand = (arg) => exprToInfix(arg, vars, false);
  /** @param {string} infix */
  const group = (infix) => (isRoot ? infix : `(${infix})`);
  const args = expr.slice(1);

  if (op === "!") return group(`!${operand(args[0])}`);
  if (Object.hasOwn(OL_INFIX_OPERATORS, op)) {
    return group(args.map(operand).join(` ${OL_INFIX_OPERATORS[op]} `));
  }
  // OL `atan` with two arguments is atan2
  if (op === "atan" && args.length === 2) {
    return `Math.atan2(${args.map(operand).join(", ")})`;
  }
  if (OL_MATH_FUNCTIONS.includes(op)) return `Math.${op}(${operand(args[0])})`;
  if (op === "clamp") {
    const [value, low, high] = args.map(operand);
    return `Math.min(Math.max(${value}, ${low}), ${high})`;
  }
  if (op === "between") {
    const [value, low, high] = args.map(operand);
    return group(`${value} >= ${low} && ${value} <= ${high}`);
  }
  if (op === "in") {
    const haystack = args[1][0] === "literal" ? args[1][1] : args[1];
    return `[${haystack.map(numberLiteral)}].includes(${operand(args[0])})`;
  }
  if (op === "case" || op === "match") {
    const input = op === "match" ? operand(args.shift()) : "";
    let infix = "";
    for (let i = 0; i < args.length - 1; i += 2) {
      const condition =
        op === "match"
          ? `[${[args[i]].flat().map(numberLiteral)}].includes(${input})`
          : operand(args[i]);
      infix += `${condition} ? ${operand(args[i + 1])} : `;
    }
    return group(infix + operand(args.at(-1)));
  }
  throw new Error(`Unsupported raster expression operator: ${op}`);
}

/**
 * Emits a number for og's expression; anything else throws.
 *
 * @param {any} value Number or boolean
 * @returns {string} JS number literal, negatives in parentheses
 */
function numberLiteral(value) {
  const number = Number(value);
  const isNumeric = typeof value === "number" || typeof value === "boolean";
  if (!isNumeric || !Number.isFinite(number)) {
    throw new Error("Raster expression value is not a finite number");
  }
  return number < 0 ? `(${number})` : String(number);
}

/**
 * Checks if a color value represents transparency (alpha = 0).
 *
 * @param {any} colorVal The color value to check
 * @param {Record<string, any>} [vars={}] Style variables
 * @returns {boolean} True if color is transparent
 */
export function isTransparent(colorVal, vars = {}) {
  if (!colorVal || extractBands(colorVal).length) return false;
  return evaluateColor(colorVal, vars)[3] === 0;
}

/**
 * Formats an OpenLayers color value into a standardized CSS color string
 * (e.g. "rgba(r, g, b, a)" or hex string).
 *
 * @param {any} colorVal The color representation
 * @param {Record<string, any>} [vars={}] Style variables
 * @returns {string} Standardized CSS color string
 */
export function formatColor(colorVal, vars = {}) {
  // og parses hex and rgb(a) itself; other colours, e.g. named ones, render black.
  if (typeof colorVal === "string" && /^\s*(#|rgb)/i.test(colorVal)) {
    return colorVal;
  }
  const [r, g, b, a] = evaluateColor(colorVal, vars);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/**
 * Evaluates an OL colour, also from variables, to `[r, g, b, a]`.
 *
 * @param {any} colorVal OL colour or colour expression
 * @param {Record<string, any>} vars Style variables
 * @returns {number[]} `[r, g, b, a]`, rgb 0..255 and alpha 0..1
 */
function evaluateColor(colorVal, vars) {
  const color = evaluateExpr(colorVal, vars, ColorType);
  return typeof color === "string" ? asArray(color) : color;
}

/**
 * Detects whether color stops closely resemble a known OpenGlobus colormap.
 *
 * @param {ColorStop[]} stops Array of [position, colorString] stops
 * @returns {ColorScaleName | undefined} Colormap name if recognized, or undefined
 */
export function detectColorScale(stops) {
  if (!stops || stops.length < 2) return undefined;

  const firstColor = stops[0][1];
  const lastColor = stops[stops.length - 1][1];

  // Helper to extract [r, g, b]
  const toRgb = (str) => {
    const match = str.match(/\d+/g);
    return match ? match.slice(0, 3).map(Number) : [0, 0, 0];
  };

  const [r0, g0, b0] = toRgb(firstColor);
  const [r1, g1, b1] = toRgb(lastColor);

  // Viridis signature: [68, 1, 84] -> [253, 231, 37]
  if (
    Math.abs(r0 - 68) < 10 &&
    Math.abs(g0 - 1) < 10 &&
    Math.abs(b0 - 84) < 10 &&
    Math.abs(r1 - 253) < 10 &&
    Math.abs(g1 - 231) < 10 &&
    Math.abs(b1 - 37) < 10
  ) {
    return "viridis";
  }

  // Inferno signature: [0, 0, 4] -> [252, 255, 164] or [248, 251, 144]
  if (
    Math.abs(r0 - 0) < 10 &&
    Math.abs(g0 - 0) < 10 &&
    Math.abs(b0 - 4) < 10 &&
    Math.abs(r1 - 250) < 15 &&
    Math.abs(g1 - 250) < 15
  ) {
    return "inferno";
  }

  // Turbo signature: [48, 18, 59] -> [122, 4, 2] or [144, 12, 0]
  if (
    Math.abs(r0 - 48) < 10 &&
    Math.abs(g0 - 18) < 10 &&
    Math.abs(b0 - 59) < 10
  ) {
    return "turbo";
  }

  // Greys signature: [0, 0, 0] -> [255, 255, 255]
  if (
    r0 === 0 &&
    g0 === 0 &&
    b0 === 0 &&
    r1 === 255 &&
    g1 === 255 &&
    b1 === 255
  ) {
    return "greys";
  }

  return undefined;
}

/**
 * Analyzes the input expression to determine band, domain, and normalization parameters.
 * For a normalized input, `value` is the input before normalization, e.g. `["-", ["band", 1], 273.15]`.
 *
 * @param {any} inputExpr Input expression (e.g. from an interpolate or channel)
 * @param {Record<string, any>} [vars={}] Style variables
 * @returns {{ band: number, domain?: [number, number], isNormalized: boolean, value?: any }}
 */
function analyzeInputExpression(inputExpr, vars = {}) {
  if (!Array.isArray(inputExpr)) {
    return { band: 1, isNormalized: false };
  }

  const bands = extractBands(inputExpr);

  // Cross-band math expression (e.g. NDVI: (b4 - b3) / (b4 + b3))
  if (bands.length > 1) {
    return { band: bands[0], isNormalized: false };
  }

  const band = bands.length === 1 ? bands[0] : 1;
  const op = inputExpr[0];

  // Normalized band expression: ['/', ['-', ['band', b], minExpr], ['-', maxExpr, minExpr2]]
  // or ['/', ['-', ['band', b], minExpr], rangeExpr]
  if (op === "/") {
    const num = inputExpr[1];
    const denom = inputExpr[2];

    if (Array.isArray(num) && num[0] === "-" && extractBands(num[1]).length) {
      const minVal = evaluateExpr(num[2], vars);

      if (Array.isArray(denom) && denom[0] === "-") {
        const maxVal = evaluateExpr(denom[1], vars);
        return {
          band,
          domain: [minVal, maxVal],
          isNormalized: true,
          value: num[1],
        };
      }

      const rangeVal = evaluateExpr(denom, vars);
      return {
        band,
        domain: [minVal, minVal + rangeVal],
        isNormalized: true,
        value: num[1],
      };
    }

    if (Array.isArray(num) && num[0] === "band") {
      const maxVal = evaluateExpr(denom, vars);
      return { band, domain: [0, maxVal], isNormalized: true, value: num };
    }
  }

  if (op === "band") {
    return { band: inputExpr[1], isNormalized: false };
  }

  return { band, isNormalized: false };
}

/**
 * Extracts displayRange [min, max] specifically for the target band from positive conditions.
 *
 * @param {any[]} conditions Collected positive condition expressions
 * @param {number} targetBand Target band index (1-indexed)
 * @param {Record<string, any>} [vars={}] Style variables
 * @returns {[number, number] | undefined} Resolved display range or undefined
 */
function extractDisplayRangeForBand(conditions, targetBand, vars = {}) {
  let min = -Infinity;
  let max = Infinity;
  let hasRange = false;

  for (const cond of conditions) {
    if (!Array.isArray(cond)) continue;
    const condOp = cond[0];
    const subConditions = condOp === "all" ? cond.slice(1) : [cond];

    for (const sub of subConditions) {
      if (!Array.isArray(sub)) continue;
      const subOp = sub[0];
      const bandOperand = sub[1];

      if (
        Array.isArray(bandOperand) &&
        bandOperand[0] === "band" &&
        bandOperand[1] === targetBand &&
        sub.slice(2).every((limit) => !extractBands(limit).length)
      ) {
        if (subOp === ">" || subOp === ">=") {
          min = Math.max(min, evaluateExpr(sub[2], vars));
          hasRange = true;
        } else if (subOp === "<" || subOp === "<=") {
          max = Math.min(max, evaluateExpr(sub[2], vars));
          hasRange = true;
        } else if (subOp === "between") {
          min = Math.max(min, evaluateExpr(sub[2], vars));
          max = Math.min(max, evaluateExpr(sub[3], vars));
          hasRange = true;
        }
      }
    }
  }

  return hasRange ? [min, max] : undefined;
}

/**
 * Translates an OpenLayers WebGLTile/GeoTIFF color expression or style object
 * into OpenGlobus ColorScale and GeoTIFF render options.
 *
 * @param {any} colorOrStyle OpenLayers style object, color expression array, or color string
 * @param {Record<string, any>} [extraVariables={}] Additional style variables
 * @param {number} [nodataBandIndex] Index of the alpha band OL adds for nodata
 * @returns {TranslatedColorScaleResult} The translated OpenGlobus color scale and render options
 */
export function translateOLColorExpression(
  colorOrStyle,
  extraVariables = {},
  nodataBandIndex,
) {
  let variables = { ...extraVariables };
  let colorExpr = colorOrStyle;

  if (!colorOrStyle || Object.keys(colorOrStyle).length === 0) {
    return {};
  }

  // Handle OpenLayers Layer instance or Layer JSON definition
  if (typeof colorOrStyle === "object" && !Array.isArray(colorOrStyle)) {
    if (colorOrStyle.styleVariables_) {
      variables = { ...colorOrStyle.styleVariables_, ...variables };
    }
    if (colorOrStyle.variables) {
      variables = { ...colorOrStyle.variables, ...variables };
    }

    if (colorOrStyle.style) {
      if (typeof colorOrStyle.style === "object") {
        if (colorOrStyle.style.variables) {
          variables = { ...colorOrStyle.style.variables, ...variables };
        }
        colorExpr = colorOrStyle.style.color || colorOrStyle.style;
      }
    } else if (colorOrStyle.color) {
      colorExpr = colorOrStyle.color;
    } else if (colorOrStyle.style_) {
      if (colorOrStyle.style_.variables) {
        variables = { ...colorOrStyle.style_.variables, ...variables };
      }
      colorExpr = colorOrStyle.style_.color;
    } else if (colorOrStyle.single || colorOrStyle.multi) {
      // Already an OpenGlobus render options object!
      return {
        ...colorOrStyle,
        colors: colorOrStyle.single?.colors || colorOrStyle.colors,
        domain: colorOrStyle.single?.domain || colorOrStyle.domain,
        band: colorOrStyle.single?.band || colorOrStyle.band,
      };
    }

    const style = colorOrStyle.style_ ?? colorOrStyle.style ?? colorOrStyle;
    const ignored = OL_RASTER_ADJUSTMENTS.filter((key) => key in Object(style));
    if (ignored.length) {
      console.warn(
        `Globe: raster style ${ignored.join(", ")} not supported, ignored.`,
      );
    }
  }

  // If a string was provided (e.g. colormap name or single color)
  if (typeof colorExpr === "string") {
    const trimmed = colorExpr.trim();
    const knownScales = [
      "viridis",
      "inferno",
      "turbo",
      "magma",
      "plasma",
      "rainbow",
      "jet",
      "hsv",
      "hot",
      "cool",
      "spring",
      "summer",
      "autumn",
      "winter",
      "bone",
      "copper",
      "greys",
      "ylgnbu",
      "greens",
      "ylorrd",
      "bluered",
      "rdbu",
      "picnic",
      "portland",
      "blackbody",
      "earth",
      "electric",
      "redblue",
      "coolwarm",
    ];

    if (knownScales.includes(trimmed.toLowerCase())) {
      const scaleName = /** @type {ColorScaleName} */ (trimmed.toLowerCase());
      return singleBandResult({ colorScale: scaleName, domain: [0, 1] });
    }

    const col = formatColor(trimmed, variables);
    return singleBandResult({
      colors: [
        [0, col],
        [1, col],
      ],
      domain: [0, 1],
    });
  }

  if (!Array.isArray(colorExpr) || colorExpr.length === 0) {
    return singleBandResult({ colors: [], domain: [0, 1] });
  }

  /** @type {number | undefined} */
  let nodata;
  const resolvedExpr =
    translateOrWarn(() =>
      resolveBands(colorExpr, variables, nodataBandIndex),
    ) ?? colorExpr;
  let activeExpr = resolvedExpr;
  let ignoresMask = false;
  /** @type {any} */
  let validCondition;

  // Unpack 'case' expressions to find an RGB composite and its nodata
  if (activeExpr[0] === "case") {
    for (let i = 1; i < activeExpr.length - 1; i += 2) {
      const cond = activeExpr[i];
      const out = activeExpr[i + 1];

      if (translateOrWarn(() => isTransparent(out, variables))) {
        // og masks RGB only by nodata; band-free conditions (resolved alpha) are none
        if (Array.isArray(cond)) {
          const condOp = cond[0];
          if (condOp === "==" && extractBands(cond).length) {
            const val = cond[1] && cond[1][0] === "band" ? cond[2] : cond[1];
            nodata = evaluateExpr(val, variables);
          } else if (condOp === "any") {
            for (let j = 1; j < cond.length; j++) {
              const sub = cond[j];
              if (sub?.[0] === "==" && extractBands(sub).length) {
                const val = sub[1] && sub[1][0] === "band" ? sub[2] : sub[1];
                nodata = evaluateExpr(val, variables);
                break;
              }
            }
          } else if (extractBands(cond).length) {
            ignoresMask = true;
          }
        }
      } else {
        ignoresMask ||= extractBands(cond).length > 0;
        validCondition = cond;
        activeExpr = out;
        break;
      }
    }

    if (activeExpr[0] === "case") {
      const fallback = activeExpr[activeExpr.length - 1];
      if (!translateOrWarn(() => isTransparent(fallback, variables))) {
        activeExpr = fallback;
      }
    }
  }

  // Handle Multi-band RGB composite (['array', r, g, b, 1] or ['color', r, g, b, 1])
  if (
    Array.isArray(activeExpr) &&
    (activeExpr[0] === "array" || activeExpr[0] === "color") &&
    activeExpr.length >= 4 &&
    (Array.isArray(activeExpr[1]) || Array.isArray(activeExpr[2]))
  ) {
    // `color` channels are 0..255, `array` channels 0..1
    const channelMax = activeExpr[0] === "color" ? 255 : 1;
    const channels = translateOrWarn(() =>
      [1, 2, 3].map((i) =>
        channelOptions(activeExpr[i], channelMax, variables),
      ),
    );
    if (channels) {
      if (ignoresMask) {
        console.warn(
          "Globe: RGB styles can only hide nodata, other masks are ignored.",
        );
      }
      const [r, g, b] = channels;
      const isDirectRGB =
        r.band === 1 &&
        g.band === 2 &&
        b.band === 3 &&
        r.min === 0 &&
        r.max === 255;
      return {
        multi: { r, g, b },
        convertToRGB: isDirectRGB,
        ...(nodata !== undefined && { nodata }),
      };
    }
  }

  // Handle 'palette' expression (['palette', ['band', 1], ['#000', '#fff']])
  if (
    Array.isArray(activeExpr) &&
    activeExpr[0] === "palette" &&
    activeExpr.length >= 3
  ) {
    const bandInfo = analyzeInputExpression(activeExpr[1], variables);
    const rawColors = activeExpr[2];
    /** @type {ColorStop[]} */
    const stops = [];

    if (Array.isArray(rawColors)) {
      const len = rawColors.length;
      for (let i = 0; i < len; i++) {
        const pos = len > 1 ? i / (len - 1) : 0;
        stops.push([pos, formatColor(rawColors[i], variables)]);
      }
    }

    const domain = [0, Math.max(1, (rawColors?.length || 1) - 1)];
    const colorScale = detectColorScale(stops);
    const band = bandInfo.band || 1;
    const displayRange = extractDisplayRangeForBand(
      [validCondition],
      band,
      variables,
    );
    return {
      ...singleBandResult({
        band,
        colors: stops,
        domain: /** @type {[number, number]} */ (domain),
        ...(colorScale && { colorScale }),
        ...(displayRange && { displayRange }),
      }),
      ...(nodata !== undefined && { nodata }),
    };
  }

  const single = translateOrWarn(() =>
    singleBandOptions(resolvedExpr, variables),
  );
  if (single) return singleBandResult(single);

  // Fallback: return default grayscale
  return singleBandResult({
    colors: [
      [0, "rgba(0, 0, 0, 1)"],
      [1, "rgba(255, 255, 255, 1)"],
    ],
    domain: [0, 1],
  });
}

/**
 * Alias for translateOLColorExpression.
 */
export const translateOLColorScale = translateOLColorExpression;

/**
 * Resolves band indices set by variables, replaces the OL alpha band with its
 * valid value, since og has no alpha band, and picks the `case`/`match` branch
 * when its conditions have no bands.
 *
 * @param {any} expr OL expression
 * @param {Record<string, any>} vars Style variables
 * @param {number} [nodataBandIndex] Index of the OL alpha band
 * @returns {any} Expression with literal band indices
 */
function resolveBands(expr, vars, nodataBandIndex) {
  if (!Array.isArray(expr)) return expr;
  if (expr[0] === "band") {
    // Other non-numbers stay, so the expression translation rejects them.
    const band = Array.isArray(expr[1]) ? evaluateExpr(expr[1], vars) : expr[1];
    const isAlphaBand =
      nodataBandIndex !== undefined && band === nodataBandIndex;
    return isAlphaBand ? OL_ALPHA_VALID : ["band", band];
  }
  const resolved = expr.map((item) =>
    resolveBands(item, vars, nodataBandIndex),
  );
  const selectors =
    expr[0] === "match"
      ? [resolved[1]]
      : expr[0] === "case" &&
        resolved.filter((_, i) => i % 2 && i < resolved.length - 1);
  if (selectors && selectors.every((s) => !extractBands(s).length)) {
    return selectedBranch(resolved, vars);
  }
  return resolved;
}

/**
 * Picks the output of a `case`/`match` without bands in its conditions, by
 * letting OL evaluate the expression with each output replaced by its index.
 *
 * @param {any[]} expr OL `case` or `match` expression
 * @param {Record<string, any>} vars Style variables
 * @returns {any} The selected output
 */
function selectedBranch(expr, vars) {
  const outputs = [];
  const indexed = expr.map((item, i) =>
    isBranchOutput(expr, i) ? outputs.push(item) - 1 : item,
  );
  return outputs[evaluateExpr(indexed, vars)];
}

/**
 * Translates a single-band colour expression. `case`/`match` branches become an
 * og ternary whose outputs are the hidden pixel value (transparent), a class
 * index (constant colour) or the value of one colour ramp.
 *
 * @param {any} expr OL color expression with resolved bands
 * @param {Record<string, any>} vars Style variables
 * @returns {SingleBandRenderOptions}
 */
function singleBandOptions(expr, vars) {
  /** @type {string[]} */
  const classColors = [];
  const hidden = [];
  /** @type {any} */
  let rampNode;
  /** @type {{ single: SingleBandRenderOptions, value: any } | undefined} */
  let ramp;

  /** @param {any} node */
  function valueOf(node) {
    if (node?.[0] === "case" || node?.[0] === "match") {
      return node.map((item, i) =>
        isBranchOutput(node, i) ? valueOf(item) : item,
      );
    }
    if (isTransparent(node, vars)) {
      hidden.push(node);
      return HIDDEN_PIXEL_VALUE;
    }
    if (node?.[0] === "interpolate" && !ramp && !classColors.length) {
      rampNode = node;
      ramp = rampOptions(node, vars);
      return ramp.value;
    }
    if (ramp || extractBands(node).length) {
      throw new Error("Only one colour ramp or constant colours are supported");
    }
    // Classes start at 1: og also hides an output equal to nodata, often 0.
    return classColors.push(formatColor(node, vars));
  }

  const expression = exprToInfix(valueOf(expr), vars);
  const hidesPixels = hidden.length > 0;
  const [visibleLow, visibleHigh] = VISIBLE_PIXEL_RANGE;

  if (!ramp) {
    // Integer steps in og's 256-entry colour table keep classes from blending.
    const step = Math.max(1, Math.floor(255 / (classColors.length - 1 || 1)));
    return {
      band: extractBands(expr)[0] ?? 1,
      expression,
      colors: classColors.map(
        (color, i) => /** @type {ColorStop} */ ([(i * step) / 255, color]),
      ),
      domain: [1, 1 + 255 / step],
      ...(hidesPixels && { displayRange: [visibleLow, visibleHigh] }),
    };
  }

  const { single, value } = ramp;
  // Kept for main's displayRange; the expression already applies the band range.
  const rampIndex = expr[0] === "case" ? expr.indexOf(rampNode) : -1;
  const bandRange =
    value?.[0] === "band" &&
    rampIndex > 0 &&
    rampIndex < expr.length - 1 &&
    extractDisplayRangeForBand([expr[rampIndex - 1]], single.band, vars);
  const [low, high] = bandRange || [visibleLow, visibleHigh];
  return {
    ...single,
    ...(expression !== `b${single.band}` && { expression }),
    ...(hidesPixels && { displayRange: [Math.max(low, visibleLow), high] }),
  };
}

/**
 * Whether index `i` of a `case` or `match` expression holds a branch output.
 *
 * @param {any[]} expr OL `case` or `match` expression
 * @param {number} i Index in the expression
 * @returns {boolean} True for outputs, false for the operator, input, conditions and labels
 */
function isBranchOutput(expr, i) {
  const firstOutput = expr[0] === "match" ? 3 : 2;
  return (
    i >= firstOutput && ((i - firstOutput) % 2 === 0 || i === expr.length - 1)
  );
}

/**
 * Translates an `interpolate` colour ramp into og stops and domain, and the
 * OL expression of the value the ramp colours.
 *
 * @param {any} ramp OL `interpolate` expression
 * @param {Record<string, any>} vars Style variables
 * @returns {{ single: SingleBandRenderOptions, value: any }}
 */
function rampOptions(ramp, vars) {
  const inputExpr = ramp[2];
  const inputInfo = analyzeInputExpression(inputExpr, vars);

  /** @type {{ stop: number, color: string }[]} */
  const parsedStops = [];
  for (let i = 3; i < ramp.length - 1; i += 2) {
    parsedStops.push({
      stop: evaluateExpr(ramp[i], vars),
      color: formatColor(ramp[i + 1], vars),
    });
  }

  parsedStops.sort((a, b) => a.stop - b.stop);

  let domain = inputInfo.domain;
  if (!domain) {
    const minStop = parsedStops[0]?.stop ?? 0;
    const maxStop = parsedStops[parsedStops.length - 1]?.stop ?? 1;
    domain = [minStop, maxStop];
  }

  /** @type {ColorStop[]} */
  let stops = [];
  if (inputInfo.isNormalized) {
    // Stops are already in normalized 0..1 space
    stops = parsedStops.map((s) => [Math.max(0, Math.min(1, s.stop)), s.color]);
  } else {
    const [dMin, dMax] = domain;
    const dRange = dMax - dMin || 1;
    stops = parsedStops.map((s) => [
      Math.max(0, Math.min(1, (s.stop - dMin) / dRange)),
      s.color,
    ]);
  }

  if (ramp[1]?.[0] !== "linear") {
    console.warn(
      "Globe: only linear interpolation is supported, rendering linearly.",
    );
  }
  const detectedScale = detectColorScale(stops);
  return {
    single: {
      band: inputInfo.band || 1,
      colors: stops,
      domain,
      ...(detectedScale && { colorScale: detectedScale }),
    },
    value: inputInfo.value ?? inputExpr,
  };
}

/**
 * Builds the result from single-band options, also flattened for convenience.
 *
 * @param {SingleBandRenderOptions} single Single-band options
 * @returns {TranslatedColorScaleResult}
 */
function singleBandResult(single) {
  return /** @type {TranslatedColorScaleResult} */ ({ single, ...single });
}

/**
 * Runs a translation step; an expression og can't run warns and yields undefined,
 * so the rest of the style still renders.
 *
 * @template T
 * @param {() => T} step Translation that may throw
 * @returns {T | undefined} The step's result, or undefined when it threw
 */
function translateOrWarn(step) {
  try {
    return step();
  } catch (error) {
    console.warn("Globe: raster style part not supported, ignored.", error);
    return undefined;
  }
}

/**
 * Translates an RGB channel into the band range og stretches to 0..255.
 * Affine channels and 2-stop ramps are solved for the band values giving 0 and full.
 *
 * @param {any} channel OL channel expression
 * @param {number} channelMax Full channel value, 255 for `color`, 1 for `array`
 * @param {Record<string, any>} vars Style variables
 * @returns {BandChannelOptions}
 */
function channelOptions(channel, channelMax, vars) {
  const { band, domain, value } = analyzeInputExpression(channel, vars);
  const isPlainBand = domain ? value[0] === "band" : channel?.[0] === "band";
  if (isPlainBand || !Array.isArray(channel)) {
    const [min, max] = domain ?? [0, 255];
    return { band, min, max };
  }
  if (extractBands(channel).length > 1) {
    throw new Error("og RGB channels can only use one band");
  }
  const isRamp = channel[0] === "interpolate";
  const input = isRamp ? channel[2] : channel;
  // og stretches linearly, so a ramp spans its first to its last stop.
  const [s0, o0, s1, o1] = isRamp
    ? [channel[3], channel[4], channel.at(-2), channel.at(-1)].map((v) =>
        evaluateExpr(v, vars),
      )
    : [0, 0, 1, 1];
  /** @param {number} bandValue */
  const valueAt = (bandValue) => {
    const x = evaluateExpr(substituteBand(input, bandValue), vars);
    return o0 + ((x - s0) * (o1 - o0)) / (s1 - s0);
  };
  const offset = valueAt(0);
  const slope = valueAt(1) - offset;
  const isLinear =
    !(isRamp && channel.length > 7) &&
    Math.abs(valueAt(2) - offset - 2 * slope) <= 1e-9 * Math.abs(slope);
  if (!isLinear) {
    console.warn(
      "Globe: non-linear RGB channel, rendered as a linear stretch.",
    );
  }
  /** @param {number} channelValue */
  const bandAt = (channelValue) => (channelValue - offset) / slope;
  return { band, min: bandAt(0), max: bandAt(channelMax) };
}

/**
 * Replaces every band in an expression with a value, to evaluate it.
 *
 * @param {any} expr OL expression
 * @param {number} value Band value
 * @returns {any} Expression without bands
 */
function substituteBand(expr, value) {
  if (!Array.isArray(expr)) return expr;
  if (expr[0] === "band") return value;
  return expr.map((item) => substituteBand(item, value));
}

/**
 * Evaluates an expression without bands with OL's own evaluator.
 *
 * @param {any} expr OL expression without bands
 * @param {Record<string, any>} vars Style variables
 * @param {number} [type] OL value type, number by default
 * @returns {any}
 */
function evaluateExpr(expr, vars, type = NumberType) {
  const context = newEvaluationContext();
  context.variables = vars;
  return buildExpression(expr, type, newParsingContext())(context);
}
