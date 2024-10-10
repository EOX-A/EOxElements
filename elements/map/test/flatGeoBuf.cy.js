import "../src/main";
import "../src/plugins/advancedLayersAndSources/index";
import { flatGeoBufLayer } from "./cases/layer-type";

/**
 * Test suite for the EOX Map to load a layer with a  FlatGeoBuf source
 */
describe("FlatGeoBuf Source", () => {
  /**
   * Test case to load flatgeobuf source
   */
  it("loads a FlatGeoBuf source", () => flatGeoBufLayer());
});
