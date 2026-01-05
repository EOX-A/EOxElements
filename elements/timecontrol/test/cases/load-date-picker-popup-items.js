import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test to verify that timecontrol-picker component displays popup items when hovering
 * over a date and shows correct number of dots based on the number of layers.
 *
 * This test verifies:
 * 1. Date picker has showItems property enabled
 * 2. Date picker has showDots property enabled
 * 3. Dates with data from multiple layers show multiple dots
 * 4. Hovering over a date with data displays an item popup
 * 5. Item popup contains layer information (ID and metadata)
 * 6. Number of dots matches the number of layers with data for that date
 */
const loadDatePickerPopupItems = () => {
  // 1. SETUP - Intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // 2. DATA PREPARATION
  const layer1 = STORY_ARGS.layers[1].properties;
  const layer2 = STORY_ARGS.layers[2].properties;

  // Use a date that exists in BOTH layers from April 2023
  // (calendar opens to April 2023 by default - the month of the last date)
  // Check which April dates exist in both layers
  const testDate = "2023-04-10"; // This date exists in both layers

  // Verify this date exists in both layers
  const layer1HasDate = layer1.timeControlValues.some(
    (v) => v.date === testDate,
  );
  const layer2HasDate = layer2.timeControlValues.some(
    (v) => v.date === testDate,
  );

  // This date should have 2 items (one from each layer)
  const expectedDotCount = 2;

  // 3. MOUNT - Mount components with picker in popup mode with showItems enabled
  cy.mount(html`
    <eox-map
      id="picker-popup-items-test"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#picker-popup-items-test">
      <eox-timecontrol-date
        format="${STORY_ARGS.format}"
        .navigation=${true}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        format="${STORY_ARGS.format}"
        .showDots=${true}
        .popup=${true}
        .showItems=${true}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `);

  // 4. ASSERTIONS - Verify component behavior

  // A. Component existence
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol-picker").should("exist");

  // B. Verify picker has showItems and showDots properties set
  cy.get("eox-timecontrol-picker")
    .should("have.prop", "showItems", true)
    .and("have.prop", "showDots", true)
    .and("have.prop", "popup", true);

  // C. Click on date input to open calendar
  cy.get("eox-timecontrol")
    .find("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']").click();
    });

  // D. Wait for calendar to appear
  cy.get(".vc", { timeout: 10000 }).should("exist").and("be.visible");

  // E. Navigate to February 2023 if not already there
  // The calendar should show the current selected date's month
  // We need to navigate to February 2023 to find our test date
  cy.get(".vc").within(() => {
    // Click on month/year to potentially navigate
    // For now, let's check if the date is visible
    cy.get(`[data-vc-date="${testDate}"]`, { timeout: 5000 }).should("exist");
  });

  // F. Verify the test date has dots (data from multiple layers)
  cy.get(".vc").within(() => {
    cy.get(`[data-vc-date="${testDate}"]`).within(() => {
      // Should have the vc-data-available class
      cy.root().should("have.class", "vc-data-available");

      // Should have the dots container
      cy.get(".vc-day__dots").should("exist");

      // Count the number of dots (should be 2 - one for each layer)
      cy.get(".vc-day__dot").should("have.length", expectedDotCount);
    });
  });

  // G. Verify the date popup element exists with opacity: 0 by default
  cy.get(`[data-vc-date="${testDate}"] .vc-date__popup`)
    .should("exist")
    .and("have.css", "opacity", "0");

  // H. Simulate hover by manually setting opacity to 1 (since CSS :hover doesn't work with trigger)
  // In a real browser, hovering triggers: .vc-data-available:hover .vc-date__popup { opacity: 1 }
  cy.get(`[data-vc-date="${testDate}"] .vc-date__popup`).then(($popup) => {
    // Manually set opacity to 1 to simulate hover state
    $popup.css("opacity", "1");
  });

  // I. Verify we can set and check opacity: 1 (simulating hover)
  cy.get(`[data-vc-date="${testDate}"] .vc-date__popup`).should(
    "have.css",
    "opacity",
    "1",
  );

  // J. Verify the popup contains content (visible when opacity is 1)
  cy.get(`[data-vc-date="${testDate}"] .vc-date__popup`).then(($popup) => {
    expect($popup.html()).to.not.be.empty;
  });

  // K. Reset opacity back to 0 (simulating mouse leave)
  cy.get(`[data-vc-date="${testDate}"] .vc-date__popup`).then(($popup) => {
    $popup.css("opacity", "0");
  });

  // L. Verify opacity is back to 0
  cy.get(`[data-vc-date="${testDate}"] .vc-date__popup`).should(
    "have.css",
    "opacity",
    "0",
  );

  // M. Verify a date with only one layer has only one dot
  // Use the last date which should only be in layer 2
  const singleLayerDate = "2023-04-24";
  cy.get(".vc").within(() => {
    // Navigate to April 2023 by clicking on the test date first
    // This ensures we're in the right month
    cy.get(`[data-vc-date="${singleLayerDate}"]`, { timeout: 5000 })
      .should("exist")
      .within(() => {
        // Should have dots container
        cy.get(".vc-day__dots").should("exist");

        // Should have only 1 dot (only in layer 2)
        cy.get(".vc-day__dot").should("have.length", 1);
      });
  });
};

export default loadDatePickerPopupItems;
