/**
 * Loads Markdown content from a given URL.
 *
 * @param {string} url - The URL from which to load markdown content.
 * @return {Promise<string|null>} A promise that resolves with the markdown content as a string, or null if an error occurs.
 */
async function loadMarkdownURL(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.text();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    return null;
  }
}

export default loadMarkdownURL;
