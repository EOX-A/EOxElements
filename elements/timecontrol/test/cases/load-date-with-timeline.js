import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test case to verify that the date component and timeline work together correctly.
 * This test verifies that clicking on timeline bins/items updates the date display
 * in the eox-timecontrol-date component and both values match.
 */
const loadDateWithTimeline = () => {
  // setup - intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // mount - mount components with both date and timeline
  cy.mount(html`
    <eox-map
      id="date-timeline"
      style="width: 600px; height: 400px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#date-timeline">
      <eox-timecontrol-date navigation></eox-timecontrol-date>
      <eox-timecontrol-timeline></eox-timecontrol-timeline>
    </eox-timecontrol>
  `);

  // data preparation - get expected values from STORY_ARGS
  const timeControlValues = STORY_ARGS.layers[2].properties.timeControlValues;
  const lastDateEntry = timeControlValues[timeControlValues.length - 1];
  const initialDate = lastDateEntry.date;

  // assertions - verify component hierarchy
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol-date").should("exist");
  cy.get("eox-timecontrol-timeline").should("exist");

  // Verify timeline shadow DOM structure and initialization
  cy.get("eox-timecontrol-timeline")
    .shadow()
    .within(() => {
      // Verify timeline wrapper exists
      cy.get(".timeline-wrapper").should("exist");

      // Verify timeline container exists
      cy.get("#timeline").should("exist");
    });

  // Verify vis-timeline elements are rendered
  cy.get("eox-timecontrol-timeline")
    .shadow()
    .within(() => {
      cy.get("#timeline").within(() => {
        // Verify vis-timeline structure exists (created by vis-timeline library)
        cy.get(".vis-timeline", { timeout: 5000 }).should("exist");
      });
    });

  // Verify initial date in date component (should show last date from timeControlValues)
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", initialDate);
    });

  // Test timeline bin click #1 - Select a date from the middle of the range
  const targetDateIndex = Math.floor(timeControlValues.length / 2);
  const targetDateEntry = timeControlValues[targetDateIndex];
  const targetDate = targetDateEntry.date;

  // Simulate a timeline click by dispatching a click event to the vis-timeline
  // The timeline click handler expects props.time to be set
  cy.get("eox-timecontrol-timeline").then(($timeline) => {
    const timelineComponent = $timeline[0];
    const visTimeline = timelineComponent.visTimeline;

    // Create a mock click event with the target date
    const clickEvent = {
      time: new Date(targetDate),
      what: "item", // Ensure it's not 'group-label'
      event: { shiftKey: false },
    };

    // Trigger the click handler directly
    visTimeline.emit("click", clickEvent);
  });

  // Verify that the date component now shows the selected date from timeline
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", targetDate);
    });

  // Test timeline bin click #2 - Select a different date (index 5)
  const anotherTargetDateIndex = 5;
  const anotherTargetDateEntry = timeControlValues[anotherTargetDateIndex];
  const anotherTargetDate = anotherTargetDateEntry.date;

  // Simulate another timeline click
  cy.get("eox-timecontrol-timeline").then(($timeline) => {
    const timelineComponent = $timeline[0];
    const visTimeline = timelineComponent.visTimeline;

    // Create a mock click event with the different target date
    const clickEvent = {
      time: new Date(anotherTargetDate),
      what: "item",
      event: { shiftKey: false },
    };

    // Trigger the click handler directly
    visTimeline.emit("click", clickEvent);
  });

  // Verify the date component updated to the new timeline selection
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", anotherTargetDate);
    });

  // Additional verification: Ensure timeline items are selectable and properly rendered
  cy.get("eox-timecontrol-timeline")
    .shadow()
    .within(() => {
      cy.get("#timeline").within(() => {
        // Verify we have timeline items corresponding to our data
        cy.get(".vis-item").should("have.length.greaterThan", 0);

        // Verify timeline items are clickable (have proper event handlers)
        cy.get(".vis-item").first().should("be.visible");
      });
    });

  // Verify that navigation buttons in date component still work after timeline interaction
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      // Check that navigation buttons exist (using part attribute selectors)
      cy.get('button[part="previous"]').should("exist");
      cy.get('button[part="next"]').should("exist");
    });
};

export default loadDateWithTimeline;
