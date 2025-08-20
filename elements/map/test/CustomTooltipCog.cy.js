import "../src/main";
import "../src/plugins/advancedLayersAndSources/index";
import { displayTooltipCogWithCustomTooltip } from "./cases/hover";

/**
 * Test suite for the EOX Map to load Tooltip when selecting a wms feature.
 */
describe("tooltip", () => {
  /**
   * Test case to display a WMS tooltip on a WMS layer
   */
  it("displays a custom tooltip on a COG layer", () =>
    displayTooltipCogWithCustomTooltip());
});
