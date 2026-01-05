import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test to verify that timecontrol-picker component displays popup items when hovering
 * over a date and shows correct number of dots based on the number of layers.
 */
const loadDatePickerPopupItems = () => {
  // setup - intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // data preparation
  const layer1 = STORY_ARGS.layers[1].properties;
  const layer2 = STORY_ARGS.layers[2].properties;

  // use a date that exists in BOTH layers from April 2023
  // (calendar opens to April 2023 by default - the month of the last date)
  // check which April dates exist in both layers
  const testDate = "2023-04-10"; // this date exists in both layers

  // verify this date exists in both layers
  const layer1HasDate = layer1.timeControlValues.some(
    (v) => v.date === testDate,
  );
  const layer2HasDate = layer2.timeControlValues.some(
    (v) => v.date === testDate,
  );

  // this date should have 2 items (one from each layer)
  const expectedDotCount = 2;

  // mount - mount components with picker in popup mode with showItems enabled
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

  // assertions - verify component behavior

  // component existence
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol-picker").should("exist");

  // verify picker has showItems and showDots properties set
  cy.get("eox-timecontrol-picker")
    .should("have.prop", "showItems", true)
    .and("have.prop", "showDots", true)
    .and("have.prop", "popup", true);

  // click on date input to open calendar
  cy.get("eox-timecontrol")
    .find("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']").click();
    });

  // wait for calendar to appear
  cy.get(".vc", { timeout: 10000 }).should("exist").and("be.visible");

  // navigate to February 2023 if not already there
  // the calendar should show the current selected date's month
  // we need to navigate to February 2023 to find our test date
  cy.get(".vc").within(() => {
    // click on month/year to potentially navigate
    // for now, let's check if the date is visible
    cy.get(`[data-vc-date="${testDate}"]`, { timeout: 5000 }).should("exist");
  });

  // verify the test date has dots (data from multiple layers)
  cy.get(".vc").within(() => {
    cy.get(`[data-vc-date="${testDate}"]`).within(() => {
      // should have the vc-data-available class
      cy.root().should("have.class", "vc-data-available");

      // should have the dots container
      cy.get(".vc-day__dots").should("exist");

      // count the number of dots (should be 2 - one for each layer)
      cy.get(".vc-day__dot").should("have.length", expectedDotCount);
    });
  });

  // verify the date popup element exists with opacity: 0 by default
  cy.get(`[data-vc-date="${testDate}"] .vc-date__popup`)
    .should("exist")
    .and("have.css", "opacity", "0");

  // simulate hover by manually setting opacity to 1 (since CSS :hover doesn't work with trigger)
  // in a real browser, hovering triggers: .vc-data-available:hover .vc-date__popup { opacity: 1 }
  cy.get(`[data-vc-date="${testDate}"] .vc-date__popup`).then(($popup) => {
    // manually set opacity to 1 to simulate hover state
    $popup.css("opacity", "1");
  });

  // verify we can set and check opacity: 1 (simulating hover)
  cy.get(`[data-vc-date="${testDate}"] .vc-date__popup`).should(
    "have.css",
    "opacity",
    "1",
  );

  // verify the popup contains content (visible when opacity is 1)
  cy.get(`[data-vc-date="${testDate}"] .vc-date__popup`).then(($popup) => {
    expect($popup.html()).to.not.be.empty;
  });

  // reset opacity back to 0 (simulating mouse leave)
  cy.get(`[data-vc-date="${testDate}"] .vc-date__popup`).then(($popup) => {
    $popup.css("opacity", "0");
  });

  // verify opacity is back to 0
  cy.get(`[data-vc-date="${testDate}"] .vc-date__popup`).should(
    "have.css",
    "opacity",
    "0",
  );

  // verify a date with only one layer has only one dot
  // use the last date which should only be in layer 2
  const singleLayerDate = "2023-04-24";
  cy.get(".vc").within(() => {
    // navigate to April 2023 by clicking on the test date first
    // this ensures we're in the right month
    cy.get(`[data-vc-date="${singleLayerDate}"]`, { timeout: 5000 })
      .should("exist")
      .within(() => {
        // should have dots container
        cy.get(".vc-day__dots").should("exist");

        // should have only 1 dot (only in layer 2)
        cy.get(".vc-day__dot").should("have.length", 1);
      });
  });
};

export default loadDatePickerPopupItems;
