/**
 * Updates the layer's URL using input values and returns the modified URL.
 *
 * @param {String} url - The original URL to be updated.
 * @param {Object} values - The key-value pairs to update in the URL.
 * @returns {String} - The updated URL based on the provided values.
 */
export default function updateUrl(url, values) {
  // Create a search params object from the URL
  const searchParams = new URL(url).searchParams;

  // Loop through each key-value pair in the input values
  Object.entries(values).forEach(([key, value]) => {
    // If the value is an object (and not an array or null), set its properties as search parameters
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      Object.keys(value).forEach((k) => {
        searchParams.set(k, value[k]);
      });
    } else searchParams.set(key, value); // Set the key-value pair as a search parameter
  });

  // Extract the URL without query parameters
  const urlWithPath = url.split("?")[0];

  // Convert the modified search params back to a string
  const searchParamsStr = searchParams.toString();

  // Combine the URL path with the updated search parameters to get the new URL
  const newUrl = `${urlWithPath}?${searchParamsStr}`;

  return newUrl;
}
