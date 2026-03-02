import "../src/main";
import "../src/plugins/advancedLayersAndSources/index";
import { flatGeoBufLayer } from "./cases/layer-type";
import { flatGeoBufLayerCombined } from "./cases/layer-type";

/**
 * Test suite for the EOX Map to load a layer with a  FlatGeoBuf source
 */
describe("FlatGeoBuf Source", () => {
  /**
   * Test case to load flatgeobuf source
   */
  it("loads a FlatGeoBuf source", () => flatGeoBufLayer());
});

/**
 * Test suite for the EOX Map to load a layer with a FlatGeoBuf source with two urls
 */
describe("FlatGeoBuf Source with url array", () => {
  /**
   * Test case to load flatgeobuf source with two urls
   */
  it("loads a FlatGeoBuf source with two urls", () =>
    flatGeoBufLayerCombined());
});
