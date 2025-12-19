/**
 * Decode base64 endoded spec into Vega spec object
 * @param {import("vega-embed").VisualizationSpec} chartSpec
 * @returns {string}
 */
const base64EncodeSpec = (chartSpec) => {
  const json = JSON.stringify(chartSpec);
  const bytes = new TextEncoder().encode(json);

  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};
export default base64EncodeSpec;
