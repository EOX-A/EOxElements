import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test to verify that timecontrol loads with only the date display component
 * and correctly displays the selected date matching the expected data
 */
const loadOnlyDates = () => {
  // Intercept OSM tile requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // Mounting eox-map and timecontrol components for testing
  cy.mount(html`
    <eox-map
      id="only-date"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#only-date">
      <eox-timecontrol-date
        format="${STORY_ARGS.format}"
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `);

  // Get the expected date from STORY_ARGS.layers[2].timeControlValues last value
  const expectedDate =
    STORY_ARGS.layers[2].properties.timeControlValues[
      STORY_ARGS.layers[2].properties.timeControlValues.length - 1
    ].date;

  // Verify eox-map exists
  cy.get("eox-map").should("exist");

  // Verify timecontrol exists
  cy.get("eox-timecontrol").should("exist");

  // Verify eox-timecontrol-date component exists
  cy.get("eox-timecontrol").find("eox-timecontrol-date").should("exist");

  // Verify that the date component has rendered its shadow DOM and displays a date
  cy.get("eox-timecontrol")
    .find("eox-timecontrol-date")
    .shadow()
    .within(() => {
      // Check that the date container span exists
      cy.get("#date-container").should("exist");
      // Check that the date input field exists and has a value
      cy.get("#date-container input[type='text']").should("exist");
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("not.be.empty");
      // Verify the date matches the expected format (YYYY-MM-DD by default)
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("match", /^\d{4}-\d{2}-\d{2}$/);
      // Verify the date matches the expected value from STORY_ARGS (2023-04-24)
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", expectedDate);
    });
};

export default loadOnlyDates;
