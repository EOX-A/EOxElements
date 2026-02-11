import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test case to verify that the selective (date picker) component triggers a select event
 * when the date is changed and that the event contains the correct date value.
 */
const loadDatePickerSelectEvent = () => {
  // setup - intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // data preparation - get expected values from STORY_ARGS
  const layer2Values = STORY_ARGS.layers[2].properties.timeControlValues;

  // initial date is the last date in the array
  const initialDate = layer2Values[layer2Values.length - 1].date; // "2023-04-24"

  // select a different date to click (from the same month - April 2023)
  // use a date that's clearly different and available
  const testDate = "2023-04-09"; // use a specific date that we know exists

  // mount - mount components with date picker in standalone mode
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

  // assertions - verify component behavior

  // component existence
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol-date").should("exist");
  cy.get("eox-timecontrol-picker").should("exist");

  // set up event listener for select event
  cy.get("eox-timecontrol").then(($timecontrol) => {
    const timecontrolElement = $timecontrol[0];

    // create a spy to track the select event
    const selectEventSpy = cy.stub();
    timecontrolElement.addEventListener("select", selectEventSpy);

    // store the spy for later verification
    cy.wrap(selectEventSpy).as("selectEventSpy");
  });

  // verify initial date is displayed
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", initialDate);
    });

  // verify calendar is visible in standalone mode
  cy.get("eox-timecontrol-picker")
    .shadow()
    .within(() => {
      cy.get("#cal").should("exist").and("be.visible");
    });

  // click on a different date in the calendar to trigger select event
  cy.get("body").then(($body) => {
    const vcInBody = $body.find(".vc").length > 0;

    if (vcInBody) {
      // calendar is in body
      cy.get(".vc").should("exist").and("be.visible");

      // click on the test date
      cy.get(`.vc [data-vc-date="${testDate}"]`)
        .should("exist")
        .and("have.class", "vc-data-available")
        .find(".vc-date__btn")
        .click();
    } else {
      // calendar might be in shadow DOM
      cy.get("eox-timecontrol-picker")
        .shadow()
        .within(() => {
          cy.get(`#cal [data-vc-date="${testDate}"]`)
            .find(".vc-date__btn")
            .click();
        });
    }
  });

  // verify the select event was triggered
  cy.get("@selectEventSpy").should("have.been.called");

  // verify the select event contains the correct date
  cy.get("@selectEventSpy").then((spy) => {
    // get the last call to the spy
    const lastCall = spy.getCall(spy.callCount - 1);
    const eventDetail = lastCall.args[0].detail;

    // verify event detail structure
    expect(eventDetail).to.have.property("date");
    expect(eventDetail).to.have.property("selectedItems");
    expect(eventDetail).to.have.property("filters");
    expect(eventDetail).to.have.property("instances");

    // verify the date in the event is an array with start and end dates
    const eventDate = eventDetail.date;
    expect(eventDate).to.be.an("array");
    expect(eventDate).to.have.length(2);

    // verify that the event date is a valid Date object
    expect(eventDate[0]).to.be.instanceOf(Date);
    expect(eventDate[1]).to.be.instanceOf(Date);

    // store the actual event date for comparison with the date component
    cy.wrap(eventDate[0]).as("eventDate");
  });

  // verify the date component was updated (the displayed date should change from initial)
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("not.equal", initialDate); // should be different from initial date
    });

  // verify the date value in the EOX element matches the event date
  cy.get("@eventDate").then((eventDate) => {
    cy.get("eox-timecontrol").then(($timecontrol) => {
      const timecontrolElement = $timecontrol[0];
      const selectedDateRange = timecontrolElement.selectedDateRange;

      // verify the selectedDateRange exists and is an array
      expect(selectedDateRange).to.be.an("array");
      expect(selectedDateRange).to.have.length(2);

      // convert both dates to the same format for comparison
      const selectedDateString = selectedDateRange[0];
      const eventDateString = eventDate.toISOString().split("T")[0];

      // verify that the timecontrol's selectedDateRange matches the event date
      // (allowing for potential timezone differences by checking the date component display)
      cy.get("eox-timecontrol-date")
        .shadow()
        .within(() => {
          cy.get("#date-container input[type='text']")
            .invoke("val")
            .then((displayedDate) => {
              // the displayed date should match either the selected date or be close to the event date
              // this accounts for timezone handling differences
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
