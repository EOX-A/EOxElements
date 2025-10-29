import "../src/main";
import { applyGeojsonFormat, loadVectorLayer } from "./cases/layer-type";
import {
  updateFlatStyleVectorLayer,
  updateStyleExpressionVectorLayer,
} from "./cases/flat-style/index.js";

/**
 * Test suite for the EOX Map to load and test Vector Layer
 */
describe("layers", () => {
  /**
   * Test case to load Vector Layer
   */
  it("loads a Vector Layer", () => loadVectorLayer());

  /**
   * Test case to apply geojson format options
   */
  it("apply geojson format options", () => applyGeojsonFormat());

  /**
   * Test case to correctly update flat style on Vector Layer
   */
  it("correctly applies flat style", () => updateFlatStyleVectorLayer());

  /**
   * Test case to correctly applies style expression on Vector Layer
   */
  it("correctly applies style expression", () =>
    updateStyleExpressionVectorLayer());
});
