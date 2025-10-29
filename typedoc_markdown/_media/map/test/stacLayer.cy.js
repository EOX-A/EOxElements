import "../src/plugins/advancedLayersAndSources/index";
import "../src/main";
import { loadStacLayer } from "./cases/layer-type";

/**
 * Test suite for the EOX Map to load STAC layer
 */
describe("layers", () => {
  /**
   * Test case to load STAC Vector Layer
   */
  it("loads a Vector Layer", () => loadStacLayer());
});
