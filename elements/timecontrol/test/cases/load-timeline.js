import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test case to verify that the timecontrol timeline component loads correctly
 * and displays the vis-timeline visualization with timeline items.
 */
const loadTimeline = () => {
  // SETUP - Intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // MOUNT - Mount components with timeline
  cy.mount(html`
    <eox-map
      id="timeline"
      style="width: 600px; height: 400px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#timeline">
      <eox-timecontrol-timeline></eox-timecontrol-timeline>
    </eox-timecontrol>
  `);

  // ASSERTIONS - Verify component hierarchy
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol-timeline").should("exist");

  // Verify timeline shadow DOM structure
  cy.get("eox-timecontrol-timeline")
    .shadow()
    .within(() => {
      // Verify timeline wrapper exists
      cy.get(".timeline-wrapper").should("exist");

      // Verify timeline container exists
      cy.get("#timeline").should("exist");

      // Wait for timeline to initialize and render
      cy.wait(500);

      // Verify vis-timeline elements are rendered
      cy.get("#timeline")
        .should("exist")
        .within(() => {
          // Verify vis-timeline structure exists (created by vis-timeline library)
          cy.get(".vis-timeline", { timeout: 2000 }).should("exist");
        });
    });
};

export default loadTimeline;
