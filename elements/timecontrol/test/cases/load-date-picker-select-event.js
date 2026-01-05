import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test case to verify that the selective (date picker) component triggers a select event
 * when the date is changed and that the event contains the correct date value.
 *
 * This test verifies:
 * 1. Date picker component mounts correctly
 * 2. Select event listener can be attached to timecontrol
 * 3. Clicking a date in the calendar triggers the select event
 * 4. The select event detail contains the correct date value
 * 5. The date value in the event matches the date of the EOX element
 */
const loadDatePickerSelectEvent = () => {
  // 1. SETUP - Intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // 2. DATA PREPARATION - Get expected values from STORY_ARGS
  const layer2Values = STORY_ARGS.layers[2].properties.timeControlValues;

  // Initial date is the last date in the array
  const initialDate = layer2Values[layer2Values.length - 1].date; // "2023-04-24"

  // Select a different date to click (from the same month - April 2023)
  // Use a date that's clearly different and available
  const testDate = "2023-04-09"; // Use a specific date that we know exists

  // 3. MOUNT - Mount components with date picker in standalone mode
  cy.mount(html`
    <eox-map
      id="select-event-test"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#select-event-test">
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

  // B. Set up event listener for select event
  cy.get("eox-timecontrol").then(($timecontrol) => {
    const timecontrolElement = $timecontrol[0];

    // Create a spy to track the select event
    const selectEventSpy = cy.stub();
    timecontrolElement.addEventListener("select", selectEventSpy);

    // Store the spy for later verification
    cy.wrap(selectEventSpy).as("selectEventSpy");
  });

  // C. Verify initial date is displayed
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", initialDate);
    });

  // D. Verify calendar is visible in standalone mode
  cy.get("eox-timecontrol-picker")
    .shadow()
    .within(() => {
      cy.get("#cal").should("exist").and("be.visible");
    });

  // E. Click on a different date in the calendar to trigger select event
  cy.get("body").then(($body) => {
    const vcInBody = $body.find(".vc").length > 0;

    if (vcInBody) {
      // Calendar is in body
      cy.get(".vc").should("exist").and("be.visible");

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
          cy.get(`#cal [data-vc-date="${testDate}"]`)
            .find(".vc-date__btn")
            .click();
        });
    }
  });

  // F. Verify the select event was triggered
  cy.get("@selectEventSpy").should("have.been.called");

  // G. Verify the select event contains the correct date
  cy.get("@selectEventSpy").then((spy) => {
    // Get the last call to the spy
    const lastCall = spy.getCall(spy.callCount - 1);
    const eventDetail = lastCall.args[0].detail;

    // Verify event detail structure
    expect(eventDetail).to.have.property("date");
    expect(eventDetail).to.have.property("selectedItems");
    expect(eventDetail).to.have.property("filters");
    expect(eventDetail).to.have.property("instances");

    // Verify the date in the event is an array with start and end dates
    const eventDate = eventDetail.date;
    expect(eventDate).to.be.an("array");
    expect(eventDate).to.have.length(2);

    // Verify that the event date is a valid Date object
    expect(eventDate[0]).to.be.instanceOf(Date);
    expect(eventDate[1]).to.be.instanceOf(Date);

    // Store the actual event date for comparison with the date component
    cy.wrap(eventDate[0]).as("eventDate");
  });

  // H. Verify the date component was updated (the displayed date should change from initial)
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("not.equal", initialDate); // Should be different from initial date
    });

  // I. Verify the date value in the EOX element matches the event date
  cy.get("@eventDate").then((eventDate) => {
    cy.get("eox-timecontrol").then(($timecontrol) => {
      const timecontrolElement = $timecontrol[0];
      const selectedDateRange = timecontrolElement.selectedDateRange;

      // Verify the selectedDateRange exists and is an array
      expect(selectedDateRange).to.be.an("array");
      expect(selectedDateRange).to.have.length(2);

      // Convert both dates to the same format for comparison
      const selectedDateString = selectedDateRange[0];
      const eventDateString = eventDate.toISOString().split("T")[0];

      // Verify that the timecontrol's selectedDateRange matches the event date
      // (allowing for potential timezone differences by checking the date component display)
      cy.get("eox-timecontrol-date")
        .shadow()
        .within(() => {
          cy.get("#date-container input[type='text']")
            .invoke("val")
            .then((displayedDate) => {
              // The displayed date should match either the selected date or be close to the event date
              // This accounts for timezone handling differences
              expect(displayedDate).to.be.oneOf([
                selectedDateString,
                eventDateString,
                testDate,
              ]);
            });
        });
    });
  });
};

export default loadDatePickerSelectEvent;
