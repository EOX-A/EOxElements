import "../src/main";
import { loadTileWmsLayer } from "./cases/layer-type";

/**
 * Test suite for the EOX Map to load Tile WMS layer
 */
describe("layers", () => {
  /**
   * Test case to load Tile WMS Layer
   */
  it("loads a tiled WMS Layer", () => loadTileWmsLayer());
});
