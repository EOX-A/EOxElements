import { html } from "lit";
import { getDate } from "../utils.js";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test case to verify that date is displayed in UTC format when showUTC is true.
 * Ensures that the date is displayed in the UTC format and not the local timezone format.
 */
const loadDateInUTC = () => {
  // setup - intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // data preparation - define test data
  const customFormat = "D. MMMM YYYY";
  const initDate = ["2023-02-05"]; // Middle of the date range
  const expectedFormattedDate = getDate(initDate[0], customFormat, true);

  // mount - mount components with both format and initDate
  cy.mount(html`
    <eox-map
      id="format-init-date"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol
      .showUTC=${true}
      for="eox-map#format-init-date"
      .initDate=${initDate}
    >
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
        .should("not.equal", getDate("2023-02-05"));
    });
};

export default loadDateInUTC;
