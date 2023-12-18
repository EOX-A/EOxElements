/**
 * Cleans up the input string to ensure valid JSON format and triggers an update.
 *
 * @param {string} json - JSON Input string
 * @return {string} - Cleaned and valid JSON string
 */
export default function cleanJSONInput(json) {
  // Extracts the value entered in the input field
  // @ts-ignore
  const inputValue = json;

  // Replace single quotes with double quotes, ensuring keys are in double quotes for valid JSON
  const replacedQuotes = inputValue.replace(
    /(['"])?([a-zA-Z0-9_]+)(['"])?:/g,
    '"$2": '
  );

  // Remove trailing commas before closing braces and brackets
  const removedCommas = replacedQuotes
    .replace(/,\s*}/g, "}")
    .replace(/,\s*]/g, "]");

  // Remove extra spaces around braces, brackets, and commas for cleaner JSON
  const cleanedInput = removedCommas
    .replace(/\s*(\{|}|\[|\]|,)\s*/g, "$1")
    .replaceAll(`": //`, `://`);

  return cleanedInput;
}
