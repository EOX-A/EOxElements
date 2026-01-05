import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test case to verify that custom format and navigation work correctly together.
 * Ensures that when both format and navigation are enabled, the date is displayed
 * in the custom format AND the navigation buttons update the date correctly.
 */
const loadDateFormatNavigation = () => {
  // setup - intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // data preparation - define test data
  const customFormat = "D. MMMM YYYY";
  const navigation = true;

  // get dates from timeControlValues (last 3 dates)
  const dates = STORY_ARGS.layers[2].properties.timeControlValues.map(
    (item) => item.date,
  );
  const lastDate = dates[dates.length - 1]; // "2023-04-24"
  const secondLastDate = dates[dates.length - 2]; // "2023-04-17"

  // expected formatted dates
  const expectedLastDate = "24. April 2023";
  const expectedSecondLastDate = "17. April 2023";

  // mount - mount components with both format and navigation
  cy.mount(html`
    <eox-map
      id="format-navigation"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#format-navigation">
      <eox-timecontrol-date
        format="${customFormat}"
        .navigation=${navigation}
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `);

  // assertions - verify component hierarchy
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol-date").should("exist");

  // Verify format and navigation attributes
  cy.get("eox-timecontrol-date")
    .invoke("attr", "format")
    .should("equal", customFormat);

  // Verify shadow DOM rendering
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      // Verify initial date is in custom format
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", expectedLastDate);

      // Verify navigation buttons exist
      cy.get('button[part="previous"]').should("exist");
      cy.get('button[part="next"]').should("exist");

      // Click previous button
      cy.get('button[part="previous"]').click();

      // Verify date changed to previous date in custom format
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", expectedSecondLastDate);

      // Verify it's NOT in ISO format
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("not.equal", secondLastDate);

      // Click next button to go back
      cy.get('button[part="next"]').click();

      // Verify date is back to last date in custom format
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", expectedLastDate);
    });
};

export default loadDateFormatNavigation;
