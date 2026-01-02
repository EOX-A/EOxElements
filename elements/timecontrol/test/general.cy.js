// Importing necessary modules, test cases, and enums
import "../src/main";
import "../../map/src/main";
import {
  loadOnlyDates,
  loadDateWithInitDate,
  loadDateWithFormat,
} from "./cases";

// Test suite for TimeControl
describe("TimeControl", () => {
  // Test to verify that timecontrol loads with only date component and displays date correctly
  it("loads only dates", () => loadOnlyDates());

  // Test to verify that timecontrol initializes with a specific date when initDate is provided
  it("loads date with init date", () => loadDateWithInitDate());

  // Test to verify that timecontrol-date correctly formats dates using custom format strings
  it("loads date with custom format", () => loadDateWithFormat());
});
