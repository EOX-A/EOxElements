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
 * @property {number | null} [nodata] Detected NoData value
 * @property {ColorStop[]} [colors] Flattened convenience array of color stops
 * @property {[number, number]} [domain] Flattened convenience value domain [min, max]
 * @property {[number, number]} [displayRange] Flattened convenience display range [min, max]
 * @property {number} [band] Flattened convenience band index
 * @property {ColorScaleName} [colorScale] Flattened convenience colormap name
 * @property {string} [expression] Flattened convenience math expression
 */

/**
 * Evaluates an OpenLayers expression that resolves to a numeric value,
 * resolving any variables against the provided variables dictionary.
 *
 * @param {any} expr The expression or literal to evaluate
 * @param {Record<string, number>} [vars={}] Variables dictionary
 * @returns {number} The evaluated numeric result
 */
export function evaluateNumeric(expr, vars = {}) {
  if (typeof expr === "number") return expr;
  if (typeof expr === "string") {
    const n = Number(expr);
    if (!Number.isNaN(n)) return n;
    if (vars && vars[expr] !== undefined) return vars[expr];
    return 0;
  }
  if (!Array.isArray(expr) || expr.length === 0) return 0;

  const op = expr[0];
  if (op === "var") {
    const varName = expr[1];
    return vars && vars[varName] !== undefined ? vars[varName] : 0;
  }
  if (op === "number") {
    return evaluateNumeric(expr[1], vars);
  }
  if (op === "+") {
    return expr
      .slice(1)
      .reduce(
        (acc, item) =>
          /** @type {number} */ (acc) + evaluateNumeric(item, vars),
        0,
      );
  }
  if (op === "-") {
    if (expr.length === 2) return -evaluateNumeric(expr[1], vars);
    return evaluateNumeric(expr[1], vars) - evaluateNumeric(expr[2], vars);
  }
  if (op === "*") {
    return expr
      .slice(1)
      .reduce(
        (acc, item) =>
          /** @type {number} */ (acc) * evaluateNumeric(item, vars),
        1,
      );
  }
  if (op === "/") {
    const denom = evaluateNumeric(expr[2], vars);
    return denom !== 0 ? evaluateNumeric(expr[1], vars) / denom : 0;
  }
  if (op === "^") {
    return Math.pow(
      evaluateNumeric(expr[1], vars),
      evaluateNumeric(expr[2], vars),
    );
  }
  if (op === "%") {
    return evaluateNumeric(expr[1], vars) % evaluateNumeric(expr[2], vars);
  }
  if (op === "abs") {
    return Math.abs(evaluateNumeric(expr[1], vars));
  }
  if (op === "clamp") {
    const val = evaluateNumeric(expr[1], vars);
    const low = evaluateNumeric(expr[2], vars);
    const high = evaluateNumeric(expr[3], vars);
    return Math.min(Math.max(val, low), high);
  }
  if (op === "floor") return Math.floor(evaluateNumeric(expr[1], vars));
  if (op === "ceil") return Math.ceil(evaluateNumeric(expr[1], vars));
  if (op === "round") return Math.round(evaluateNumeric(expr[1], vars));

  return 0;
}

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
 * Converts an OpenLayers math expression containing bands and variables into
 * an OpenGlobus infix string expression, e.g. "(b4 - b3) / (b4 + b3)".
 *
 * @param {any} expr The expression
 * @param {Record<string, number>} [vars={}] Variables dictionary
 * @param {boolean} [isRoot=true] Whether this is the root of the expression
 * @returns {string} Infix expression string
 */
export function exprToInfix(expr, vars = {}, isRoot = true) {
  if (typeof expr === "number") return expr.toString();
  if (typeof expr === "string") return expr;
  if (!Array.isArray(expr) || expr.length === 0) return "";

  const op = expr[0];
  if (op === "band") {
    return `b${expr[1]}`;
  }
  if (op === "var") {
    return vars && vars[expr[1]] !== undefined
      ? vars[expr[1]].toString()
      : expr[1];
  }
  if (op === "+" || op === "-" || op === "*" || op === "/") {
    if (expr.length === 2 && op === "-") {
      return `-${exprToInfix(expr[1], vars, false)}`;
    }
    const left = exprToInfix(expr[1], vars, false);
    const right = exprToInfix(expr[2], vars, false);
    const str = `${left} ${op} ${right}`;
    return isRoot ? str : `(${str})`;
  }
  return "";
}

/**
 * Checks if a color value represents transparency (alpha = 0).
 *
 * @param {any} colorVal The color value to check
 * @param {Record<string, number>} [vars={}] Variables dictionary
 * @returns {boolean} True if color is transparent
 */
export function isTransparent(colorVal, vars = {}) {
  if (!colorVal) return false;
  if (colorVal === "transparent" || colorVal === "#00000000") return true;

  if (typeof colorVal === "string") {
    const trimmed = colorVal.trim().toLowerCase();
    if (trimmed.startsWith("#") && trimmed.length === 9) {
      return trimmed.endsWith("00");
    }
    if (trimmed.startsWith("rgba")) {
      const match = trimmed.match(
        /rgba\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([\d.]+)\s*\)/,
      );
      if (match && parseFloat(match[1]) === 0) return true;
    }
    return false;
  }

  if (Array.isArray(colorVal)) {
    const op = colorVal[0];
    if (op === "color" || op === "array") {
      const alphaIdx = colorVal.length === 3 ? 2 : colorVal.length > 4 ? 4 : 3;
      return evaluateNumeric(colorVal[alphaIdx], vars) === 0;
    }
    if (colorVal.length === 4) {
      return evaluateNumeric(colorVal[3], vars) === 0;
    }
  }

  return false;
}

/**
 * Formats an OpenLayers color value into a standardized CSS color string
 * (e.g. "rgba(r, g, b, a)" or hex string).
 *
 * @param {any} colorVal The color representation
 * @param {Record<string, number>} [vars={}] Variables dictionary
 * @returns {string} Standardized CSS color string
 */
export function formatColor(colorVal, vars = {}) {
  if (typeof colorVal === "string") {
    if (colorVal.toLowerCase() === "transparent") {
      return "rgba(0, 0, 0, 0)";
    }
    return colorVal;
  }

  if (Array.isArray(colorVal)) {
    const op = colorVal[0];
    if (op === "color") {
      if (colorVal.length === 3) {
        // ['color', shade, alpha]
        const shade = Math.round(evaluateNumeric(colorVal[1], vars));
        const alpha = evaluateNumeric(colorVal[2], vars);
        return `rgba(${shade}, ${shade}, ${shade}, ${alpha <= 1 ? alpha : alpha / 255})`;
      }
      const r = Math.round(evaluateNumeric(colorVal[1], vars));
      const g = Math.round(evaluateNumeric(colorVal[2], vars));
      const b = Math.round(evaluateNumeric(colorVal[3], vars));
      const a = colorVal.length > 4 ? evaluateNumeric(colorVal[4], vars) : 1;
      return `rgba(${r}, ${g}, ${b}, ${a <= 1 ? a : a / 255})`;
    }

    if (op === "array") {
      const r = Math.round(evaluateNumeric(colorVal[1], vars));
      const g = Math.round(evaluateNumeric(colorVal[2], vars));
      const b = Math.round(evaluateNumeric(colorVal[3], vars));
      const a = colorVal.length > 4 ? evaluateNumeric(colorVal[4], vars) : 1;
      return `rgba(${r}, ${g}, ${b}, ${a <= 1 ? a : a / 255})`;
    }

    if (colorVal.length === 4) {
      const r = Math.round(evaluateNumeric(colorVal[0], vars));
      const g = Math.round(evaluateNumeric(colorVal[1], vars));
      const b = Math.round(evaluateNumeric(colorVal[2], vars));
      const a = evaluateNumeric(colorVal[3], vars);
      return `rgba(${r}, ${g}, ${b}, ${a <= 1 ? a : a / 255})`;
    }

    if (colorVal.length === 3) {
      const r = Math.round(evaluateNumeric(colorVal[0], vars));
      const g = Math.round(evaluateNumeric(colorVal[1], vars));
      const b = Math.round(evaluateNumeric(colorVal[2], vars));
      return `rgba(${r}, ${g}, ${b}, 1)`;
    }
  }

  return "rgba(0, 0, 0, 1)";
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
 *
 * @param {any} inputExpr Input expression (e.g. from an interpolate or channel)
 * @param {Record<string, number>} [vars={}] Variables dictionary
 * @returns {{ band: number, domain?: [number, number], expression?: string, isNormalized: boolean }}
 */
function analyzeInputExpression(inputExpr, vars = {}) {
  if (!Array.isArray(inputExpr)) {
    return { band: 1, isNormalized: false };
  }

  const bands = extractBands(inputExpr);

  // Cross-band math expression (e.g. NDVI: (b4 - b3) / (b4 + b3))
  if (bands.length > 1) {
    return {
      band: bands[0],
      expression: exprToInfix(inputExpr, vars, true),
      isNormalized: false,
    };
  }

  const band = bands.length === 1 ? bands[0] : 1;
  const op = inputExpr[0];

  // Normalized band expression: ['/', ['-', ['band', b], minExpr], ['-', maxExpr, minExpr2]]
  // or ['/', ['-', ['band', b], minExpr], rangeExpr]
  if (op === "/") {
    const num = inputExpr[1];
    const denom = inputExpr[2];

    if (Array.isArray(num) && num[0] === "-") {
      const minVal = evaluateNumeric(num[2], vars);

      if (Array.isArray(denom) && denom[0] === "-") {
        const maxVal = evaluateNumeric(denom[1], vars);
        return { band, domain: [minVal, maxVal], isNormalized: true };
      }

      const rangeVal = evaluateNumeric(denom, vars);
      return {
        band,
        domain: [minVal, minVal + rangeVal],
        isNormalized: true,
      };
    }

    if (Array.isArray(num) && num[0] === "band") {
      const maxVal = evaluateNumeric(denom, vars);
      return { band, domain: [0, maxVal], isNormalized: true };
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
 * @param {Record<string, number>} [vars={}] Variables dictionary
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
        bandOperand[1] === targetBand
      ) {
        if (subOp === ">" || subOp === ">=") {
          min = Math.max(min, evaluateNumeric(sub[2], vars));
          hasRange = true;
        } else if (subOp === "<" || subOp === "<=") {
          max = Math.min(max, evaluateNumeric(sub[2], vars));
          hasRange = true;
        } else if (subOp === "between") {
          min = Math.max(min, evaluateNumeric(sub[2], vars));
          max = Math.min(max, evaluateNumeric(sub[3], vars));
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
 * @param {Record<string, number>} [extraVariables={}] Additional style variables
 * @returns {TranslatedColorScaleResult} The translated OpenGlobus color scale and render options
 */
export function translateOLColorExpression(colorOrStyle, extraVariables = {}) {
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
      return {
        colorScale: scaleName,
        domain: [0, 1],
        single: { colorScale: scaleName, domain: [0, 1] },
      };
    }

    const col = formatColor(trimmed, variables);
    /** @type {ColorStop[]} */
    const stops = [
      [0, col],
      [1, col],
    ];
    return {
      colors: stops,
      domain: [0, 1],
      single: { colors: stops, domain: [0, 1] },
    };
  }

  if (!Array.isArray(colorExpr) || colorExpr.length === 0) {
    return {
      colors: [],
      domain: [0, 1],
      single: { colors: [], domain: [0, 1] },
    };
  }

  let nodata = null;
  let activeExpr = colorExpr;

  // Unpack 'case' expressions to extract nodata and displayRange
  /** @type {any[]} */
  const positiveConditions = [];

  if (activeExpr[0] === "case") {
    for (let i = 1; i < activeExpr.length - 1; i += 2) {
      const cond = activeExpr[i];
      const out = activeExpr[i + 1];

      if (isTransparent(out, variables)) {
        // Condition matches nodata or out-of-range masking
        if (Array.isArray(cond)) {
          const condOp = cond[0];
          if (condOp === "==") {
            const val = cond[1] && cond[1][0] === "band" ? cond[2] : cond[1];
            nodata = evaluateNumeric(val, variables);
          } else if (condOp === "any") {
            for (let j = 1; j < cond.length; j++) {
              const sub = cond[j];
              if (Array.isArray(sub) && sub[0] === "==") {
                const val = sub[1] && sub[1][0] === "band" ? sub[2] : sub[1];
                nodata = evaluateNumeric(val, variables);
                break;
              }
            }
          }
        }
      } else {
        // Valid data branch! Collect conditions
        if (Array.isArray(cond)) {
          positiveConditions.push(cond);
        }
        activeExpr = out;
        break;
      }
    }

    if (activeExpr[0] === "case") {
      const fallback = activeExpr[activeExpr.length - 1];
      if (!isTransparent(fallback, variables)) {
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
    const rInfo = analyzeInputExpression(activeExpr[1], variables);
    const gInfo = analyzeInputExpression(activeExpr[2], variables);
    const bInfo = analyzeInputExpression(activeExpr[3], variables);

    const rMin = rInfo.domain ? rInfo.domain[0] : 0;
    const rMax = rInfo.domain ? rInfo.domain[1] : 255;
    const gMin = gInfo.domain ? gInfo.domain[0] : 0;
    const gMax = gInfo.domain ? gInfo.domain[1] : 255;
    const bMin = bInfo.domain ? bInfo.domain[0] : 0;
    const bMax = bInfo.domain ? bInfo.domain[1] : 255;

    /** @type {MultiBandRenderOptions} */
    const multi = {
      r: { band: rInfo.band || 1, min: rMin, max: rMax },
      g: { band: gInfo.band || 2, min: gMin, max: gMax },
      b: { band: bInfo.band || 3, min: bMin, max: bMax },
    };

    const isDirectRGB =
      multi.r?.band === 1 &&
      multi.g?.band === 2 &&
      multi.b?.band === 3 &&
      rMin === 0 &&
      rMax === 255;

    return {
      multi,
      convertToRGB: isDirectRGB,
      nodata,
    };
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
      positiveConditions,
      band,
      variables,
    );

    /** @type {SingleBandRenderOptions} */
    const single = {
      band,
      colors: stops,
      domain: /** @type {[number, number]} */ (domain),
      ...(colorScale && { colorScale }),
      ...(displayRange && { displayRange }),
    };

    return {
      single,
      colors: stops,
      domain: /** @type {[number, number]} */ (domain),
      band,
      nodata,
      ...(colorScale && { colorScale }),
      ...(displayRange && { displayRange }),
    };
  }

  // Handle 'match' expression (['match', ['band', 1], val1, color1, ..., fallback])
  if (
    Array.isArray(activeExpr) &&
    activeExpr[0] === "match" &&
    activeExpr.length >= 4
  ) {
    const bandInfo = analyzeInputExpression(activeExpr[1], variables);
    /** @type {{ val: number, color: string }[]} */
    const matches = [];

    for (let i = 2; i < activeExpr.length - 1; i += 2) {
      matches.push({
        val: evaluateNumeric(activeExpr[i], variables),
        color: formatColor(activeExpr[i + 1], variables),
      });
    }

    matches.sort((a, b) => a.val - b.val);
    const minVal = matches[0]?.val ?? 0;
    const maxVal = matches[matches.length - 1]?.val ?? 1;
    const range = maxVal - minVal || 1;

    /** @type {ColorStop[]} */
    const stops = matches.map((m) => [(m.val - minVal) / range, m.color]);

    const band = bandInfo.band || 1;
    const displayRange = extractDisplayRangeForBand(
      positiveConditions,
      band,
      variables,
    );

    /** @type {SingleBandRenderOptions} */
    const single = {
      band,
      colors: stops,
      domain: [minVal, maxVal],
      ...(displayRange && { displayRange }),
    };

    return {
      single,
      colors: stops,
      domain: [minVal, maxVal],
      band,
      nodata,
      ...(displayRange && { displayRange }),
    };
  }

  // Handle 'interpolate' expression
  // ['interpolate', ['linear'], input, stop0, color0, stop1, color1, ..., stopN, colorN]
  if (
    Array.isArray(activeExpr) &&
    activeExpr[0] === "interpolate" &&
    activeExpr.length >= 5
  ) {
    const inputExpr = activeExpr[2];
    const inputInfo = analyzeInputExpression(inputExpr, variables);

    /** @type {{ stop: number, color: string }[]} */
    const parsedStops = [];
    for (let i = 3; i < activeExpr.length - 1; i += 2) {
      parsedStops.push({
        stop: evaluateNumeric(activeExpr[i], variables),
        color: formatColor(activeExpr[i + 1], variables),
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
      stops = parsedStops.map((s) => [
        Math.max(0, Math.min(1, s.stop)),
        s.color,
      ]);
    } else {
      const [dMin, dMax] = domain;
      const dRange = dMax - dMin || 1;
      stops = parsedStops.map((s) => [
        Math.max(0, Math.min(1, (s.stop - dMin) / dRange)),
        s.color,
      ]);
    }

    const detectedScale = detectColorScale(stops);
    const band = inputInfo.band || 1;
    const displayRange = extractDisplayRangeForBand(
      positiveConditions,
      band,
      variables,
    );

    /** @type {SingleBandRenderOptions} */
    const single = {
      band,
      colors: stops,
      domain,
      ...(detectedScale && { colorScale: detectedScale }),
      ...(inputInfo.expression && { expression: inputInfo.expression }),
      ...(displayRange && { displayRange }),
    };

    return {
      single,
      colors: stops,
      domain,
      band,
      nodata,
      ...(detectedScale && { colorScale: detectedScale }),
      ...(inputInfo.expression && { expression: inputInfo.expression }),
      ...(displayRange && { displayRange }),
    };
  }

  // Fallback: return default grayscale or empty
  return {
    colors: [
      [0, "rgba(0, 0, 0, 1)"],
      [1, "rgba(255, 255, 255, 1)"],
    ],
    domain: [0, 1],
    single: {
      colors: [
        [0, "rgba(0, 0, 0, 1)"],
        [1, "rgba(255, 255, 255, 1)"],
      ],
      domain: [0, 1],
    },
    nodata,
  };
}

/**
 * Alias for translateOLColorExpression.
 */
export const translateOLColorScale = translateOLColorExpression;
