import "../src/main";
import {
  addSelectInteraction,
  selectAfterReArrangingLayers,
} from "./cases/hover/index.js";

/**
 * Test suite for the EOX Map to test hover interaction
 */
describe("select interaction with hover", () => {
  /**
   * Test case to add select interaction in EOx Map
   */
  it("adds a select interaction", () => addSelectInteraction());

  /**
   * Test case to check select interaction work after layers re-arranging
   */
  it("working selection after re-arranging layers", () =>
    selectAfterReArrangingLayers());
});
