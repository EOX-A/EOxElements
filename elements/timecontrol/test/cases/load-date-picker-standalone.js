import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test to verify that timecontrol-picker component displays as a standalone inline calendar
 * (not in popup mode) and that clicking a date updates the eox-timecontrol-date component.
 *
 * This test verifies:
 * 1. Picker is in standalone mode (popup = false, default)
 * 2. Calendar is visible immediately without clicking
 * 3. Calendar element exists in picker's shadow DOM
 * 4. Clicking a date in the calendar updates the date component
 * 5. The displayed date matches the clicked date
 */
const loadDatePickerStandalone = () => {
  // 1. SETUP - Intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // 2. DATA PREPARATION
  const layer2Values = STORY_ARGS.layers[2].properties.timeControlValues;

  // Initial date is the last date in the array
  const initialDate = layer2Values[layer2Values.length - 1].date; // "2023-04-24"

  // Select a different date to click (from the same month - April 2023)
  const testDate = layer2Values[layer2Values.length - 3].date; // "2023-04-10"

  // 3. MOUNT - Mount components with standalone picker (popup NOT set, defaults to false)
  cy.mount(html`
    <eox-map
      id="picker-standalone-test"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#picker-standalone-test">
      <eox-timecontrol-date
        format="${STORY_ARGS.format}"
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        format="${STORY_ARGS.format}"
        .showDots=${true}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `);

  // 4. ASSERTIONS - Verify component behavior

  // A. Component existence
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol-date").should("exist");
  cy.get("eox-timecontrol-picker").should("exist");

  // B. Verify picker does NOT have popup property set (defaults to false = standalone)
  cy.get("eox-timecontrol-picker").should("have.prop", "popup", false);

  // C. Verify initial date is displayed in the date component
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", initialDate); // "2023-04-24"
    });

  // D. Verify standalone calendar container exists in picker's shadow DOM
  cy.get("eox-timecontrol-picker")
    .shadow()
    .within(() => {
      // In standalone mode, #cal container exists in shadow root
      cy.get("#cal").should("exist").and("be.visible");
    });

  // E. Verify the vanilla calendar is rendered (might be in body or in #cal)
  // Check if .vc exists either in shadow DOM or in body
  cy.get("body").then(($body) => {
    const vcInBody = $body.find(".vc").length > 0;

    if (vcInBody) {
      // Calendar is in body (like popup mode)
      cy.get(".vc").should("exist").and("be.visible");

      // Verify calendar has dates
      cy.get(".vc .vc-date").should("have.length.gt", 0);
      cy.get(".vc .vc-date.vc-data-available").should("have.length.gt", 0);

      // Click on the test date
      cy.get(`.vc [data-vc-date="${testDate}"]`)
        .should("exist")
        .and("have.class", "vc-data-available")
        .find(".vc-date__btn")
        .click();
    } else {
      // Calendar might be in shadow DOM
      cy.get("eox-timecontrol-picker")
        .shadow()
        .within(() => {
          cy.get("#cal .vc-date").should("have.length.gt", 0);
          cy.get(`#cal [data-vc-date="${testDate}"]`)
            .find(".vc-date__btn")
            .click();
        });
    }
  });

  // G. Verify the date component updated to the clicked date
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", testDate); // "2023-04-10"
    });

  // H. Verify the date changed from initial value
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("not.equal", initialDate); // Should NOT be "2023-04-24"
    });

  // I. Verify calendar is still visible after date selection (doesn't close)
  cy.get("body").then(($body) => {
    const vcInBody = $body.find(".vc").length > 0;
    if (vcInBody) {
      cy.get(".vc").should("exist").and("be.visible");
    }
  });
};

export default loadDatePickerStandalone;
