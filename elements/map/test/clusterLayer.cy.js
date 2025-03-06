import "../src/main";
import "../src/plugins/advancedLayersAndSources/index";
import { loadClusterLayer } from "./cases/layer-type";

/**
 * Test suite for the EOX Map to load and test Vector Layer
 */
describe("cluster layer", () => {
  /**
   * Test case to load Cluster Layer
   */
  it("loads a Cluster Layer", () => loadClusterLayer());
});
