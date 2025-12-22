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

export default base64DecodeSpec;
