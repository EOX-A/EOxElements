const CHUNK_SIZE = 8192;

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
  let binaryString = "";
  for (let i = 0; i < data.length; i += CHUNK_SIZE) {
    const chunk = data.subarray(i, i + CHUNK_SIZE);
    // @ts-expect-error Argument of type 'Uint8Array' is not assignable to parameter of type 'number[]'.
    binaryString += String.fromCharCode.apply(null, chunk);
  }
  return btoa(binaryString);
};
export default base64EncodeSpec;
