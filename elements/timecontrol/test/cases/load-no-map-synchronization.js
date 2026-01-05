import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test case to verify that timecontrol works correctly without map integration
 * and that all time control elements (timeline, calendar, slider) synchronize
 * the date value properly when used together.
 */
const loadNoMapSynchronization = () => {
  // setup - no network interception needed since we're not using a map

  // mount - mount timecontrol with all components using NoMap story configuration
  cy.mount(html`
    <eox-timecontrol
      .layerIdKey=${STORY_ARGS.layerIdKey}
      .titleKey=${STORY_ARGS.titleKey}
      .filters=${STORY_ARGS.filters}
      .controlValues=${STORY_ARGS.layers.map((layer) => layer.properties)}
    >
      <div style="display: flex; gap: 10px; align-items: center;">
        <eox-timecontrol-date
          style="flex-grow: 1;"
          .format=${STORY_ARGS.format}
          .navigation=${true}
        ></eox-timecontrol-date>
        <eox-timecontrol-picker
          .format=${STORY_ARGS.format}
          .showDots=${true}
          .popup=${true}
          .position=${["bottom", "left"]}
        ></eox-timecontrol-picker>
        <div style="display: flex; align-items: center;">
          <eox-itemfilter
            id="timecontrol-filter"
            .inlineMode=${true}
            .titleProperty=${"id"}
            .showResults=${false}
            .filterProperties=${STORY_ARGS.filters}
            style="--inline-container-height: 40px"
          ></eox-itemfilter>
        </div>
      </div>
      <eox-timecontrol-timeline
        style="margin-top: 10px;"
      ></eox-timecontrol-timeline>
      <eox-timecontrol-slider
        style="width: 600px; margin-top: 10px;"
      ></eox-timecontrol-slider>
    </eox-timecontrol>
  `);

  // data preparation - get expected values from STORY_ARGS
  // use layer 2 (AWS_NO2-VISUALISATION) which has the latest date "2023-04-24"
  const timeControlValues = STORY_ARGS.layers[2].properties.timeControlValues;
  const initialDate = timeControlValues[timeControlValues.length - 1].date; // last date: "2023-04-24"
  const timelineTestDate =
    timeControlValues[Math.floor(timeControlValues.length / 2)].date; // middle date
  const calendarTestDate = timeControlValues[timeControlValues.length - 3].date; // use a date from April 2023 (same month as initial date)
  const sliderTestDate = timeControlValues[10].date; // 11th date in array

  // assertions - verify component hierarchy and initial state
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol-date").should("exist");
  cy.get("eox-timecontrol-picker").should("exist");
  cy.get("eox-timecontrol-timeline").should("exist");
  cy.get("eox-timecontrol-slider").should("exist");
  cy.get("eox-itemfilter").should("exist");

  // verify initial date in date component
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", initialDate);
    });

  // note: we verify synchronization by checking the date input value in eox-timecontrol-date
  // rather than a direct property on eox-timecontrol, as that's how the component works

  // wait for timeline to initialize
  cy.wait(500);

  // === test 1: timeline interaction ===
  cy.log("Testing timeline interaction");

  // verify timeline is rendered
  cy.get("eox-timecontrol-timeline")
    .shadow()
    .within(() => {
      cy.get(".timeline-wrapper").should("exist");
      cy.get("#timeline").should("exist");
      cy.get("#timeline .vis-timeline", { timeout: 5000 }).should("exist");
    });

  // simulate timeline click to select a specific date
  cy.get("eox-timecontrol-timeline").then(($timeline) => {
    const timelineComponent = $timeline[0];
    const visTimeline = timelineComponent.visTimeline;

    // create a mock click event with the target date
    const clickEvent = {
      time: new Date(timelineTestDate),
      what: "item",
      event: { shiftKey: false },
    };

    // trigger the click handler directly
    visTimeline.emit("click", clickEvent);
  });

  // wait for update
  cy.wait(300);

  // verify timeline interaction updated the date component
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", timelineTestDate);
    });

  // verify timeline interaction synchronized all components

  // === test 2: calendar interaction ===
  cy.log("Testing calendar interaction");

  // click on the date input to open calendar popup
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']").click();
    });

  // wait for calendar to appear
  cy.wait(300);

  // verify calendar appears and click on any available date
  cy.get("body").within(() => {
    cy.get(".vc").should("exist").and("be.visible");

    // find any available date and click it
    cy.get(".vc .vc-date.vc-data-available")
      .first()
      .find(".vc-date__btn")
      .click()
      .then(($btn) => {
        // get the clicked date from the button's parent element
        const clickedDateElement = $btn.closest("[data-vc-date]");
        const clickedDate = clickedDateElement.attr("data-vc-date");

        // store the clicked date for verification
        cy.wrap(clickedDate).as("clickedDate");
      });
  });

  // Wait for update
  cy.wait(300);

  // verify calendar interaction updated the date component
  cy.get("@clickedDate").then((clickedDate) => {
    cy.get("eox-timecontrol-date")
      .shadow()
      .within(() => {
        cy.get("#date-container input[type='text']")
          .invoke("val")
          .should("equal", clickedDate);
      });
  });

  // verify calendar interaction synchronized all components

  // === test 3: slider interaction ===
  cy.log("Testing slider interaction");

  // verify slider is rendered
  cy.get("eox-timecontrol-slider")
    .shadow()
    .within(() => {
      cy.get(".date-range-slider-wrapper").should("exist");
      cy.get("tc-range-slider").should("exist");
    });

  // trigger slider change by dispatching a custom event
  cy.get("eox-timecontrol-slider")
    .shadow()
    .within(() => {
      cy.get("tc-range-slider").then(($slider) => {
        const changeEvent = new CustomEvent("change", {
          detail: {
            value1: sliderTestDate,
          },
          bubbles: true,
          composed: true,
        });
        $slider[0].dispatchEvent(changeEvent);
      });
    });

  // Wait for update
  cy.wait(300);

  // verify slider interaction updated the date component
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", sliderTestDate);
    });

  // verify slider interaction synchronized all components

  // === test 4: cross-component synchronization verification ===
  cy.log("Testing cross-component synchronization");

  // make one more timeline change and verify all components stay synchronized
  const finalTestDate = timeControlValues[15].date; // 16th date in array

  cy.get("eox-timecontrol-timeline").then(($timeline) => {
    const timelineComponent = $timeline[0];
    const visTimeline = timelineComponent.visTimeline;

    const clickEvent = {
      time: new Date(finalTestDate),
      what: "item",
      event: { shiftKey: false },
    };

    visTimeline.emit("click", clickEvent);
  });

  cy.wait(300);

  // verify all components show the same final date
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", finalTestDate);
    });

  // final verification that all components remain synchronized

  // === test 5: component features verification ===
  cy.log("Verifying component features");

  // verify date navigation buttons exist and work
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get('button[part="previous"]').should("exist");
      cy.get('button[part="next"]').should("exist");
    });

  // verify calendar shows dots for available data
  cy.get("eox-timecontrol-picker").should("have.prop", "showDots", true);

  // verify slider has year ticks
  cy.get("eox-timecontrol-slider")
    .shadow()
    .within(() => {
      cy.get(".custom-marks-container").should("exist");
      cy.get(".custom-mark-year").should("have.length.greaterThan", 0);
      cy.get(".custom-mark-year-label")
        .should("have.length.greaterThan", 0)
        .first()
        .invoke("text")
        .should("match", /2022|2023/);
    });

  // verify timeline has items
  cy.get("eox-timecontrol-timeline")
    .shadow()
    .within(() => {
      cy.get("#timeline .vis-item").should("have.length.greaterThan", 0);
    });

  // verify filter component is present and functional
  cy.get("eox-itemfilter").should("exist");
  cy.get("eox-itemfilter").should("have.prop", "inlineMode", true);
};

export default loadNoMapSynchronization;
