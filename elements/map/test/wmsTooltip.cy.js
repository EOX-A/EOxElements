import "../src/main";
import { displayTooltipOnWMS } from "./cases/hover";

/**
 * Test suite for the EOX Map to load Tooltip when selecting a wms feature.
 */
describe("tooltip", () => {
  /**
   * Test case to display a WMS tooltip on a WMS layer
   */
  it("displays a WMS tooltip on a WMS layer", () => displayTooltipOnWMS());
});
