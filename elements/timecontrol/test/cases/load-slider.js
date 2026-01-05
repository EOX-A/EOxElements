import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test case to verify that the timecontrol slider component loads correctly
 * and displays the range slider with year ticks and custom marks.
 */
const loadSlider = () => {
  // SETUP - Intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // MOUNT - Mount components with slider
  cy.mount(html`
    <eox-map
      id="slider"
      style="width: 600px; height: 400px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#slider">
      <eox-timecontrol-slider style="width: 600px;"></eox-timecontrol-slider>
    </eox-timecontrol>
  `);

  // ASSERTIONS - Verify component hierarchy
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol-slider").should("exist");

  // Verify slider shadow DOM structure
  cy.get("eox-timecontrol-slider")
    .shadow()
    .within(() => {
      // Verify slider wrapper exists
      cy.get(".date-range-slider-wrapper").should("exist");

      // Verify toolcool-range-slider component exists
      cy.get("tc-range-slider").should("exist");

      // Verify custom marks container exists
      cy.get(".custom-marks-container").should("exist");

      // Verify year ticks exist (should have at least one)
      cy.get(".custom-mark-year").should("have.length.greaterThan", 0);

      // Verify year labels exist
      cy.get(".custom-mark-year-label").should("have.length.greaterThan", 0);

      // Verify empty ticks exist (for spacing between years)
      cy.get(".custom-mark-empty").should("exist");

      // Verify first year label is "2022" or "2023" (from test data)
      cy.get(".custom-mark-year-label")
        .first()
        .invoke("text")
        .should("match", /2022|2023/);
    });
};

export default loadSlider;
