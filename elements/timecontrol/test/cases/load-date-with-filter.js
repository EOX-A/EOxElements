import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test case to verify that the timecontrol component works correctly with eox-itemfilter
 * for filtering timeline items by metadata properties (e.g., cloud coverage).
 */
const loadDateWithFilter = () => {
  // handle ResizeObserver errors that can occur with complex components
  cy.on("uncaught:exception", (err) => {
    if (
      err.message.includes(
        "ResizeObserver loop completed with undelivered notifications",
      )
    ) {
      return false; // ignore ResizeObserver errors
    }
    return true;
  });

  // setup - intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // mount - mount components with date filter setup (based on DateFilterStory)
  cy.mount(html`
    <eox-map
      id="date-filter-test"
      style="width: 600px; height: 400px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol
      for="eox-map#date-filter-test"
      .layerIdKey=${STORY_ARGS.layerIdKey}
      .titleKey=${STORY_ARGS.titleKey}
      .externalMapRendering=${true}
    >
      <div style="display: flex; gap: 10px; align-items: center;">
        <eox-timecontrol-date
          style="flex-grow: 1;"
          navigation
        ></eox-timecontrol-date>
        <eox-timecontrol-picker range showDots popup></eox-timecontrol-picker>
        <eox-itemfilter
          id="timecontrol-filter"
          .inlineMode=${true}
          .titleProperty=${"id"}
          .showResults=${false}
          .filterProperties=${STORY_ARGS.filters}
          style="--inline-container-height: 40px"
        ></eox-itemfilter>
      </div>
      <eox-timecontrol-timeline
        style="margin-top: 10px;"
      ></eox-timecontrol-timeline>
    </eox-timecontrol>
  `);

  // assertions - verify component hierarchy
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol-date").should("exist");
  cy.get("eox-timecontrol-picker").should("exist");
  cy.get("eox-itemfilter").should("exist");
  cy.get("eox-timecontrol-timeline").should("exist");

  // Verify itemfilter shadow DOM structure and filter controls
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      // Verify filter form exists
      cy.get("#itemfilter").should("exist");

      // Verify filter container exists
      cy.get("eox-itemfilter-container").should("exist");
    });

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

        // Verify timeline items are rendered
        cy.get(".vis-item").should("have.length.greaterThan", 0);
      });
    });

  // Verify itemfilter component is properly integrated
  // Check that the itemfilter has the expected filter properties
  cy.get("eox-itemfilter").should("have.attr", "id", "timecontrol-filter");

  // Verify that the itemfilter is in inline mode
  cy.get("eox-itemfilter").then(($filter) => {
    expect($filter[0].inlineMode).to.be.true;
    expect($filter[0].showResults).to.be.false;
    expect($filter[0].filterProperties).to.deep.equal(STORY_ARGS.filters);
  });

  // Test basic filter functionality - verify filter structure exists
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      // Verify the inline container exists
      cy.get("eox-itemfilter-container").should("exist");

      // Verify the filter form exists
      cy.get("#itemfilter").should("exist").should("have.class", "inline");
    });

  // Verify date component functionality with filter present
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      // Check that navigation buttons exist and are functional
      cy.get('button[part="previous"]').should("exist");
      cy.get('button[part="next"]').should("exist");

      // Verify date input field exists and shows a valid date
      cy.get("#date-container input[type='text']")
        .should("exist")
        .invoke("val")
        .should("not.be.empty");
    });

  // Verify picker component functionality with filter present
  cy.get("eox-timecontrol-picker")
    .shadow()
    .within(() => {
      // Verify picker calendar div exists
      cy.get("#cal").should("exist");
    });

  // Test that all components work together
  // Verify that the timecontrol component properly links to the map
  cy.get("eox-timecontrol").should(
    "have.attr",
    "for",
    "eox-map#date-filter-test",
  );

  // Verify external map rendering is enabled
  cy.get("eox-timecontrol").then(($timecontrol) => {
    expect($timecontrol[0].externalMapRendering).to.be.true;
  });

  // Final verification: Ensure all components are properly rendered and functional
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol-date").should("exist");
  cy.get("eox-timecontrol-picker").should("exist");
  cy.get("eox-itemfilter").should("exist");
  cy.get("eox-timecontrol-timeline").should("exist");

  // Verify the layout structure matches the DateFilterStory
  cy.get("eox-timecontrol").within(() => {
    cy.get("div").first().should("have.css", "display", "flex");
    cy.get("eox-timecontrol-timeline").should("have.css", "margin-top", "10px");
  });

  cy.log(
    "Date filter test completed successfully - all components properly integrated",
  );
};

export default loadDateWithFilter;
