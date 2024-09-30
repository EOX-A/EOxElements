import "../src/main";
import {
  setBasicControls,
  setCustomFullScreenLoadingIndicator,
  setDefaultLoadingIndicator,
  setGeoLocationControl,
} from "./cases/controls/index.js";

/**
 * Test suite for the EOX Map to set controls via webcomponent
 */
describe("webcomponent property parsing", () => {
  /**
   * Test case to set basic controls via webcomponent
   */
  it("set controls via webcomponent properties", () => setBasicControls());

  /**
   * Test case to set geo location control via webcomponent
   */
  it("Geolocation Control", () => setGeoLocationControl());

  /**
   * Test case to set default loading indicator control via webcomponent
   */
  it("Default Loading Indicator Control", () => setDefaultLoadingIndicator());

  /**
   * Test case to set custom fullscreen loading indicator control via webcomponent
   */
  it("Custom Full Screen Loading Indicator Control", () =>
    setCustomFullScreenLoadingIndicator());
});
