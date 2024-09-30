import "../src/main";
import { updateFlatStyle } from "./cases/flat-style";

/**
 * Test suite for the EOX Map to load flat style
 */
describe("layers", () => {
  /**
   * Test case to correctly update flat style
   */
  it("correctly updates applies flat style", () => updateFlatStyle());
});
