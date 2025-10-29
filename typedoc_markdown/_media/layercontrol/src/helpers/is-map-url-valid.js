import detectMapURLType from "./detect-map-url-type";

/**
 * Checks if the given URL is a valid map URL based on specified criteria.
 *
 * @param {string} url - The URL to validate.
 * @returns {boolean} - Indicates whether the URL is a valid map URL.
 */
export default function isMapUrlValid(url) {
  // Regular expression pattern to match URLs with localhost, domain, and IP addresses
  const urlRegex =
    /^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/;

  // Check if the URL matches the defined pattern
  const urlMatchesPattern = urlRegex.test(url);

  // Detect the type of map URL using the provided function
  const mapUrlType = detectMapURLType(url);

  // Return true if the URL is not empty and matches the pattern and has a valid map URL type, otherwise false
  return !!(url && urlMatchesPattern && mapUrlType);
}
