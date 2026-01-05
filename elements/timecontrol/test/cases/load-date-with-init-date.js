import { html } from "lit";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { STORY_ARGS } from "../../src/enums.js";

dayjs.extend(utc);

/**
 * Test to verify that timecontrol correctly initializes with a specific date
 * when the initDate property is provided, rather than defaulting to the last date.
 *
 * This test uses "2023-02-05" as the init date, which exists in both time-enabled
 * layers and is different from the default last date "2023-04-24".
 */
const loadDateWithInitDate = () => {
  // setup - intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // data preparation - define init date and expected values
  const initDate = ["2023-02-05"];
  const expectedDisplayDate = "2023-02-05";

  // mount - mount components with initDate property
  cy.mount(html`
    <eox-map
      id="init-date-test"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#init-date-test" .initDate=${initDate}>
      <eox-timecontrol-date
        format="${STORY_ARGS.format}"
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `);

  // assertions - verify component behavior

  // component existence
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol").find("eox-timecontrol-date").should("exist");

  // shadow DOM and date container
  cy.get("eox-timecontrol")
    .find("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container").should("exist");
      cy.get("#date-container input[type='text']").should("exist");
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("not.be.empty");

      // date format validation
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("match", /^\d{4}-\d{2}-\d{2}$/);

      // critical: init date value validation
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", expectedDisplayDate);

      // additional assertion: NOT the default last date
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("not.equal", "2023-04-24");
    });
};

export default loadDateWithInitDate;
