import "../src/main";
import "../src/plugins/advancedLayersAndSources/index";
import "../src/plugins/globe/index";
import { isGlobeExist } from "./cases/general";
import {
  testTranslateColorExpression,
  testGlobeSelect,
  testGlobeSelectStyle,
  testGeoTIFFSourceOptions,
} from "./cases/globe";

/**
 * Test suite for the EOX Map to load a globe when the projection is set to "globe".
 */
describe("globe", () => {
  /**
   * Test case to display a globe with layers
   */
  it("displays a globe with layers", () => isGlobeExist());

  /**
   * Test case to translate OpenLayers color expressions into OpenGlobus ColorScale and renderOptions
   */
  it("translates OpenLayers color expressions into OpenGlobus ColorScale and renderOptions", () =>
    testTranslateColorExpression());

  /**
   * Test case to pick GeoTIFF band values and parse GetFeatureInfo responses for globe tooltips
   */
  it("picks GeoTIFF values and feature info for globe tooltips", () =>
    testGlobeSelect());

  /**
   * Test case to apply and reset the select interaction style on globe vector entities
   */
  it("applies the select interaction style to globe vector entities", () =>
    testGlobeSelectStyle());

  /**
   * Test case to translate single url and multi source COG definitions into OpenGlobus GeoTIFFLayer options
   */
  it("accepts single url and multi source COGs for native globe rendering", () =>
    testGeoTIFFSourceOptions());
});
