/**
 * Encode object to base64 string
 * @param {import("vega-embed").VisualizationSpec} chartSpec
 * @returns {string}
 */
const base64EncodeSpec = (chartSpec) => {
  // Function to encode a UTF-8 string to Base64
  const json = JSON.stringify(chartSpec);
  const encoder = new TextEncoder();
  const data = encoder.encode(json);
  // @ts-expect-error Argument of type 'Uint8Array<ArrayBuffer>' is not assignable to parameter of type 'number[]'.
  const binaryString = String.fromCharCode.apply(null, data);
  return btoa(binaryString);
};
export default base64EncodeSpec;
