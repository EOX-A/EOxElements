import "../src/main";
import { displayTooltip, displayTooltipOneLayerVisible } from "./cases/hover";

/**
 * Test suite for the EOX Map to load Tooltip
 */
describe("tooltip", () => {
  /**
   * Test case to display tooltip on hover
   */
  it("displays a tooltip on hover", () => displayTooltip());

  /**
   * Test case to displays a tooltip on hover when multiple layers are initialized and only one visible
   */
  it("displays a tooltip on hover when multiple layers are initialized and only one visible", () =>
    displayTooltipOneLayerVisible());
});
