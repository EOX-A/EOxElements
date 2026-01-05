import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test to verify that timecontrol-picker component displays a popup calendar
 * when the date input is clicked, and that selecting a date updates the input field.
 */
const loadDatePickerPopup = () => {
  // setup - intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // data preparation - get expected dates from STORY_ARGS
  const layer2Values = STORY_ARGS.layers[2].properties.timeControlValues;

  // initial date is the last date in the array
  const initialDate = layer2Values[layer2Values.length - 1].date; // "2023-04-24"

  // select a different date from the same month (April 2023) for testing
  const testDate = layer2Values[layer2Values.length - 2].date; // "2023-04-17"

  // mount - mount components with date picker in popup mode
  cy.mount(html`
    <eox-map
      id="picker-popup-test"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#picker-popup-test">
      <eox-timecontrol-date
        format="${STORY_ARGS.format}"
        .navigation=${true}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        format="${STORY_ARGS.format}"
        .showDots=${true}
        .popup=${true}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `);

  // assertions - verify component behavior

  // component existence
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol").find("eox-timecontrol-date").should("exist");
  cy.get("eox-timecontrol").find("eox-timecontrol-picker").should("exist");

  // verify picker has popup property set
  cy.get("eox-timecontrol")
    .find("eox-timecontrol-picker")
    .should("have.prop", "popup", true);

  // verify initial date is displayed in the date component
  // click on the date input field to open the calendar popup
  cy.get("eox-timecontrol")
    .find("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", initialDate);
      cy.get("#date-container input[type='text']").click();
    });

  // wait for calendar to initialize and verify it appears in the DOM
  // the vanilla-calendar creates a .vc element
  cy.get(".vc", { timeout: 10000 }).should("exist").and("be.visible");

  // verify calendar has dates rendered
  cy.get(".vc").within(() => {
    // check that dates are rendered
    cy.get(".vc-date").should("have.length.gt", 0);

    // check that some dates have the data-available class
    cy.get(".vc-date.vc-data-available").should("have.length.gt", 0);
  });

  // click on a specific available date (2023-02-05)
  // format: data-vc-date="YYYY-MM-DD"
  cy.get(".vc").within(() => {
    cy.get(`[data-vc-date="${testDate}"]`)
      .should("exist")
      .and("have.class", "vc-data-available")
      .find(".vc-date__btn")
      .click();
  });

  // verify the date input field updated to the selected date
  cy.get("eox-timecontrol")
    .find("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", testDate); // "2023-04-17"
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("not.equal", initialDate); // should NOT be "2023-04-24"
    });
};

export default loadDatePickerPopup;
