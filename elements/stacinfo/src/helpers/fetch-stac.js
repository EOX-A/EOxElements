import { parseSTAC } from "./index.js";

/**
 * Fetches a STAC file, parses its contents, and updates the component's state.
 *
 * @async
 * @param {import("../main.js").EOxStacInfo} that - The component instance.
 * @returns {Promise<void>} A promise that resolves when the STAC data is fetched and processed.
 */
async function fetchSTAC(that) {
  // Fetch the STAC file, appending a timestamp to the URL to prevent caching.
  const response = await fetch(`${that.for}?ts=${Date.now()}`);

  // Parse the fetched JSON response.
  const stac = await response.json();
  that.stacInfo = await parseSTAC(stac);

  // Dispatch a custom "loaded" event to signal that the STAC data has been loaded.
  that.dispatchEvent(new CustomEvent("loaded"));
}

export default fetchSTAC;
