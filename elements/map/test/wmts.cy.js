import "../src/main";
import { loadWmtsWithTileGrid } from "./cases/layer-type";

/**
 * Test suite for the EOX Map to load WMTS layer
 */
describe("layers", () => {
  /**
   * Test case to load WMTS Layer with Tile Grid
   */
  it("create wmts with tile grid", () => loadWmtsWithTileGrid());
});
