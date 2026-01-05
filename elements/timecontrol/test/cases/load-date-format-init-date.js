import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test case to verify that custom format and init date work correctly together.
 * Ensures that when both format and initDate are specified, the date is displayed
 * in the custom format AND uses the init date rather than the default last date.
 */
const loadDateFormatInitDate = () => {
  // setup - intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // data preparation - define test data
  const customFormat = "D. MMMM YYYY";
  const initDate = ["2023-02-05"]; // Middle of the date range
  const expectedFormattedDate = "5. February 2023"; // expected output with custom format

  // mount - mount components with both format and initDate
  cy.mount(html`
    <eox-map
      id="format-init-date"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#format-init-date" .initDate=${initDate}>
      <eox-timecontrol-date format="${customFormat}"></eox-timecontrol-date>
    </eox-timecontrol>
  `);

  // assertions - verify component hierarchy
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol-date").should("exist");

  // verify format attribute is set correctly
  cy.get("eox-timecontrol-date")
    .invoke("attr", "format")
    .should("equal", customFormat);

  // verify shadow DOM rendering and date display
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      // verify date container exists
      cy.get("#date-container").should("exist");

      // verify date input field exists and has the formatted init date
      cy.get("#date-container input[type='text']")
        .should("exist")
        .invoke("val")
        .should("equal", expectedFormattedDate);

      // verify it's NOT the default last date (which would be "24. April 2023")
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("not.equal", "24. April 2023");

      // verify it's NOT using ISO format (would be "2023-02-05")
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("not.equal", "2023-02-05");
    });
};

export default loadDateFormatInitDate;
