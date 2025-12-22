/**
 * Return if string looks like base64 encoded
 * @param {string } input
 * @returns { boolean }
 */
function looksLikeBase64Url(input) {
  return (
    typeof input === "string" &&
    input.length % 4 !== 1 &&
    /^[A-Za-z0-9+/]+[=]{0,2}$/.test(input)
  );
}

/**
 * @param {unknown} value
 * @returns {value is import("vega-embed").VisualizationSpec}
 */
function returnDirectly(value) {
  return typeof value === "object" || value === undefined;
}

/**
 * Decode base64 endoded spec into Vega spec object
 * @param {string} base64Spec
 * @returns {import("vega-embed").VisualizationSpec} spec
 */
const base64DecodeSpec = (base64Spec) => {
  const binaryString = atob(base64Spec);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const decoder = new TextDecoder();
  const decoded = decoder.decode(bytes);
  const vegaSpec = JSON.parse(decoded);
  return vegaSpec;
};

/**
 * Parses spec which can be either a base64 encoded string, JSON string or an object
 * @param {string | import("vega-embed").VisualizationSpec} specInput
 * @returns {import("vega-embed").VisualizationSpec} spec
 */
function parseSpec(specInput) {
  if (returnDirectly(specInput)) {
    return specInput;
  }
  const spec = specInput;
  if (looksLikeBase64Url(spec)) {
    try {
      const decoded = base64DecodeSpec(spec);
      if (typeof decoded === "object") return decoded;
    } catch {}
  }

  try {
    return JSON.parse(spec);
  } catch {
    throw new Error("Invalid spec format");
  }
}

export default parseSpec;
