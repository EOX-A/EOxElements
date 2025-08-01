import "../src/plugins/advancedLayersAndSources/index";
import "../src/main";
import { loadMapboxStyleLayer } from "./cases/layer-type";

/**
 * Test suite for the EOX Map to load a mapbox-style layer
 */
describe("layers", () => {
  /**
   * Test case to load a mapbox-style layer
   */
  it("loads a mapbox-style Layer", () => loadMapboxStyleLayer());
});
