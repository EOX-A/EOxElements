import "../src/main";
import "../src/plugins/advancedLayersAndSources/index";
import { loadWmtsCapabilitiesLayer } from "./cases/layer-type";

/**
 * Test suite for the EOX Map to load WMTS layer with Capabilities
 */
describe("WMTS Capabilities Source", () => {
  /**
   * Test case to load WMTS Layer with Capabilities
   */
  it("loads a layer from WMTS capabilities", () => loadWmtsCapabilitiesLayer());
});
