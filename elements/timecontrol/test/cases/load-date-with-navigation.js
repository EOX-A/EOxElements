import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test to verify that timecontrol-date component correctly displays navigation buttons
 * and that clicking next/previous buttons updates the displayed date correctly.
 */
const loadDateWithNavigation = () => {
  // setup - intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // data preparation - get expected dates from STORY_ARGS
  const layer2Values = STORY_ARGS.layers[2].properties.timeControlValues;

  // initial date is the last date in the array
  const initialDate = layer2Values[layer2Values.length - 1].date; // "2023-04-24"

  // previous date (when clicking previous from last date, wraps to first)
  const firstDate = layer2Values[0].date; // "2022-12-05"

  // next date (when clicking next from last date, wraps to first, then advances)
  const secondDate = layer2Values[1].date; // "2022-12-06"

  // previous to initial (second-to-last date)
  const previousDate = layer2Values[layer2Values.length - 2].date; // "2023-04-17"

  // mount - mount components with navigation enabled
  cy.mount(html`
    <eox-map
      id="navigation-test"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#navigation-test">
      <eox-timecontrol-date
        format="${STORY_ARGS.format}"
        .navigation=${true}
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `);

  // assertions - verify component behavior

  // component existence
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol").find("eox-timecontrol-date").should("exist");

  // verify navigation property is set
  cy.get("eox-timecontrol")
    .find("eox-timecontrol-date")
    .should("have.prop", "navigation", true);

  // all shadow DOM tests in a single .within() block
  cy.get("eox-timecontrol")
    .find("eox-timecontrol-date")
    .shadow()
    .within(() => {
      // verify navigation buttons exist
      cy.get('button[part="previous"]').should("exist");
      cy.get('button[part="next"]').should("exist");
      cy.get("#date-container").should("exist");
      cy.get("#date-container input[type='text']").should("exist");

      // verify initial date is displayed (last date in timeControlValues)
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", initialDate); // "2023-04-24"

      // click PREVIOUS button and verify date changes
      cy.get('button[part="previous"]').click();
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", previousDate); // "2023-04-17"

      // click NEXT button and verify date advances back to initial
      cy.get('button[part="next"]').click();
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", initialDate); // "2023-04-24"

      // test wrap-around: click NEXT from last date (should wrap to first)
      cy.get('button[part="next"]').click();
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", firstDate); // "2022-12-05"

      // click NEXT again to advance to second date
      cy.get('button[part="next"]').click();
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", secondDate); // "2022-12-06"
    });
};

export default loadDateWithNavigation;
