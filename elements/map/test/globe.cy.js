import "../src/main";
import "../src/plugins/advancedLayersAndSources/index";
import "../src/plugins/globe/index";
import { isGlobeExist } from "./cases/general";
/**
 * Test suite for the EOX Map to load a globe when the projection is set to "globe".
 */
describe("globe", () => {
  /**
   * Test case to display a globe with layers
   */
  it("displays a globe with layers", () => isGlobeExist());
});
