import "../src/main";
import {
  setBasicControls,
  setCustomFullScreenLoadingIndicator,
  setDefaultLoadingIndicator,
  setGeoLocationControl,
  setLayoutControls,
  setSlottedControls,
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
   * Test case to configure layout controls via webcomponent properties
   */
  it("Layout configuration of Controls", () => setLayoutControls());

  /**
   * Test case to test custom slotted controls via webcomponent
   */
  it("Custom slotted controls", () => setSlottedControls());

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
