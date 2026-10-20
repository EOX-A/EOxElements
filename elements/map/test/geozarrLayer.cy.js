import "../src/plugins/advancedLayersAndSources/index";
import "../src/main";
import {
  fillTimePropertiesFromStore,
  openClientCurrentStep,
  openFirstSliceWithoutExactMatch,
  skipTimePropertySetToFalse,
  keepClientTimeControlValues,
  keepSliceOnUpdate,
  openCurrentStepOnEarlyUpdate,
  openNewCurrentStepOnUpdate,
  skipSetupOnUnrelatedUpdate,
} from "./cases/geozarr/index.js";

/**
 * Test suite for the EOX Map to set up `layerDatetime` and `timeControlValues`
 * of GeoZarr layers from the store's time axis
 */
describe("GeoZarr time properties", () => {
  /**
   * Test case to fill time properties the client did not set
   */
  it("fills layerDatetime and timeControlValues from the store when the client set neither", () =>
    fillTimePropertiesFromStore());

  /**
   * Test case to open the slice of the client currentStep
   */
  it("opens the slice matching the client currentStep", () =>
    openClientCurrentStep());

  /**
   * Test case to open the first slice when currentStep has no exact match
   */
  it("opens the first slice when the client currentStep matches no store date exactly", () =>
    openFirstSliceWithoutExactMatch());

  /**
   * Test case to skip layerDatetime set to false
   */
  it("keeps layerDatetime: false when the store has a time axis", () =>
    skipTimePropertySetToFalse("layerDatetime"));

  /**
   * Test case to skip timeControlValues set to false
   */
  it("keeps timeControlValues: false when the store has a time axis", () =>
    skipTimePropertySetToFalse("timeControlValues"));

  /**
   * Test case to keep timeControlValues set by the client
   */
  it("keeps a client timeControlValues list instead of the store dates", () =>
    keepClientTimeControlValues());

  /**
   * Test case to open a new source at the current slice when an update changes the bands
   */
  it("loads only the stepped slice when an update changes the bands", () =>
    keepSliceOnUpdate());

  /**
   * Test case to open the client currentStep when the bands change before the time setup finished
   */
  it("opens the client currentStep when an update changes the bands before the time setup finished", () =>
    openCurrentStepOnEarlyUpdate());

  /**
   * Test case to open a new currentStep passed with an update
   */
  it("opens the slice of a new currentStep passed with an update", () =>
    openNewCurrentStepOnUpdate());

  /**
   * Test case to skip the time setup on an update that changes no time property
   */
  it("does not repeat the time setup when an update only changes another property", () =>
    skipSetupOnUnrelatedUpdate());
});
