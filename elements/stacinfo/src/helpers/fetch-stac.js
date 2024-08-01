import { parseSTAC } from "./index.js";

/**
 *
 */
async function fetchSTAC(that) {
  const response = await fetch(`${that.for}?ts=${Date.now()}`);
  const stac = await response.json();
  that.stacInfo = await parseSTAC(stac);
  that.dispatchEvent(new CustomEvent("loaded"));
}

export default fetchSTAC;
