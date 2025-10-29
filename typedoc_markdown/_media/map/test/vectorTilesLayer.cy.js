import "../src/main";
import { loadVectorTileLayer } from "./cases/layer-type";

/**
 * Test suite for the EOX Map to load Vector Tile layer
 */
describe("VectorTile Layer", () => {
  /**
   * Test case to load Vector Tile Layer and applies flat style
   */
  it("loads a Vector Tile Layer, applies flat style", () =>
    loadVectorTileLayer());
});
