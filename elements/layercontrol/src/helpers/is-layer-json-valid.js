import cleanJSONInput from "./clean-json-input";

/**
 * Checks if the stored 'jsonInput' is a valid JSON string.
 * @param {string} str
 * @returns {boolean} - Returns true if the 'jsonInput' is a valid JSON, otherwise false.
 */
export default function isLayerJSONValid(str) {
  try {
    // Parsing the jsonInput to test if it's a valid JSON
    JSON.parse(cleanJSONInput(str));

    // Returning true if 'jsonInput' is not empty
    return !!str;
  } catch (error) {
    // Returning false if there's an error parsing or if 'jsonInput' is empty
    return false;
  }
}
