import { html } from "lit";
import dayjs from "dayjs";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test to verify that timecontrol-date component correctly formats dates
 * using a custom format string instead of the default YYYY-MM-DD format.
 *
 * This test uses the format "D. MMMM YYYY" which displays dates like "24. April 2023".
 */
const loadDateWithFormat = () => {
  // 1. SETUP - Intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // 2. DATA PREPARATION - Define custom format and expected values
  const customFormat = "D. MMMM YYYY";

  // Get the expected date (last date from STORY_ARGS)
  const expectedISODate =
    STORY_ARGS.layers[2].properties.timeControlValues[
      STORY_ARGS.layers[2].properties.timeControlValues.length - 1
    ].date;

  // Calculate the expected formatted display value
  const expectedFormattedDate = dayjs(expectedISODate).format(customFormat);
  // expectedFormattedDate = "24. April 2023"

  // 3. MOUNT - Mount components with custom format
  cy.mount(html`
    <eox-map
      id="custom-format-test"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#custom-format-test">
      <eox-timecontrol-date format="${customFormat}"></eox-timecontrol-date>
    </eox-timecontrol>
  `);

  // 4. ASSERTIONS - Verify component behavior

  // A. Component existence
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol").find("eox-timecontrol-date").should("exist");

  // B. Verify the format property is set correctly on the component
  cy.get("eox-timecontrol")
    .find("eox-timecontrol-date")
    .should("have.attr", "format", customFormat);

  // C. Shadow DOM and date container
  cy.get("eox-timecontrol")
    .find("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container").should("exist");
      cy.get("#date-container input[type='text']").should("exist");
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("not.be.empty");

      // D. CRITICAL: Custom format validation - verify displayed value
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", expectedFormattedDate); // "24. April 2023"

      // Verify it does NOT use the default ISO format
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("not.equal", expectedISODate); // NOT "2023-04-24"
    });
};

export default loadDateWithFormat;
