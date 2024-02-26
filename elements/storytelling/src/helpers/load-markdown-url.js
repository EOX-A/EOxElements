/**
 * Loads Markdown content from a given URL.
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
  }
}

export default loadMarkdownURL;
