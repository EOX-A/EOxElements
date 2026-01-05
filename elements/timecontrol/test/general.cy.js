// Importing necessary modules, test cases, and enums
import "../src/main";
import "../../map/src/main";
import "../../itemfilter/src/main";
import {
  loadOnlyDates,
  loadDateWithInitDate,
  loadDateWithFormat,
  loadDateWithNavigation,
  loadDatePickerPopup,
  loadDatePickerPopupItems,
  loadDatePickerStandalone,
  loadDatePickerSelectEvent,
  loadSlider,
  loadTimeline,
  loadDateFormatInitDate,
  loadDateFormatNavigation,
  loadDateWithSlider,
  loadDateWithTimeline,
  loadDateWithFilter,
  loadNoMapSynchronization,
} from "./cases";

// Test suite for TimeControl
describe("TimeControl", () => {
  // Test to verify that timecontrol loads with only date component and displays date correctly
  it("loads only dates", () => loadOnlyDates());

  // Test to verify that timecontrol initializes with a specific date when initDate is provided
  it("loads date with init date", () => loadDateWithInitDate());

  // Test to verify that timecontrol-date correctly formats dates using custom format strings
  it("loads date with custom format", () => loadDateWithFormat());

  // Test to verify that navigation buttons work correctly and update dates
  it("loads date with navigation", () => loadDateWithNavigation());

  // Test to verify that date picker popup opens and date selection works
  it("loads date picker popup", () => loadDatePickerPopup());

  // Test to verify that date picker shows item popups on hover and correct number of dots
  it("loads date picker popup items", () => loadDatePickerPopupItems());

  // Test to verify that standalone calendar displays inline and date selection updates date component
  it("loads date picker standalone", () => loadDatePickerStandalone());

  // Test to verify that slider component loads with year ticks and custom marks
  it("loads slider", () => loadSlider());

  // Test to verify that timeline component loads with vis-timeline visualization
  it("loads timeline", () => loadTimeline());

  // Test to verify that custom format and init date work together
  it("loads date with format and init date combined", () =>
    loadDateFormatInitDate());

  // Test to verify that custom format and navigation work together
  it("loads date with format and navigation combined", () =>
    loadDateFormatNavigation());

  // Test to verify that date and slider work together - slider selection updates date display
  it("loads date with slider", () => loadDateWithSlider());

  // Test to verify that date and timeline work together - timeline bin clicks update date display
  it("loads date with timeline", () => loadDateWithTimeline());

  // Test to verify that date picker triggers select event when date changes
  it("loads date picker select event", () => loadDatePickerSelectEvent());

  // Test to verify that timecontrol works correctly with eox-itemfilter for filtering timeline items
  it("loads date with filter", () => loadDateWithFilter());

  // Test to verify that timecontrol works without map and all components synchronize date values
  it("loads no map synchronization", () => loadNoMapSynchronization());
});
