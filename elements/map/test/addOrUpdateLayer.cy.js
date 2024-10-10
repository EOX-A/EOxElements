import "../src/main.js";
import { addAndUpdateLayer } from "./cases/add-update-layer/";

/**
 * Test suite for the EOX Map to add and update layers.
 */
describe("Map", () => {
  /**
   * Test case to add a layer and update the layer inside a `eox-map` component
   */
  it("add and update layer", () => addAndUpdateLayer());
});
