/**
 * Decode base64 endoded spec into Vega spec object
 * @param {string} base64Spec
 * @returns {import("vega-embed").VisualizationSpec} spec
 */
const base64DecodeSpec = (base64Spec) => {
  const base64 = base64Spec
    .replace(/-/g, "+")
    .replace(/_/g, "/")
    .padEnd(base64Spec.length + (4 - base64Spec.length % 4) % 4, "=");

  const binary = atob(base64);
  const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
};

export default base64DecodeSpec;
