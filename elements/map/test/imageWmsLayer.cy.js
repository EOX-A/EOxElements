import "../src/main";
import { loadImageWmsLayer } from "./cases/layer-type/index.js";

// fixme: imageWMS is identical to tileWMS
/**
 * Test suite for the EOX Map to load WMS layer
 */
describe("layers", () => {
  /**
   * Test case to load Image WMS Layer
   */
  it("loads a WMS Layer", () => loadImageWmsLayer());
});
