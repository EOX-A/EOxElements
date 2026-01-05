import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";
import dayjs from "dayjs";

/**
 * Test case to verify that the date component and slider work together correctly.
 * This test verifies that moving the slider to select a particular date updates
 * the date display component and both values match.
 */
const loadDateWithSlider = () => {
  // SETUP - Intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // MOUNT - Mount components with both date and slider
  cy.mount(html`
    <eox-map
      id="date-slider"
      style="width: 600px; height: 400px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#date-slider">
      <eox-timecontrol-date
        format="${STORY_ARGS.format}"
        navigation
      ></eox-timecontrol-date>
      <eox-timecontrol-slider style="width: 600px;"></eox-timecontrol-slider>
    </eox-timecontrol>
  `);

  // ASSERTIONS - Verify component hierarchy
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol-date").should("exist");
  cy.get("eox-timecontrol-slider").should("exist");

  // Get the last date from timeControlValues (initial/default date)
  const lastDateEntry =
    STORY_ARGS.layers[2].properties.timeControlValues[
      STORY_ARGS.layers[2].properties.timeControlValues.length - 1
    ];
  const initialDate = lastDateEntry.date;

  // Verify initial date in date component
  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", initialDate);
    });

  // Now test slider interaction
  cy.get("eox-timecontrol-slider")
    .shadow()
    .within(() => {
      // Verify slider elements exist
      cy.get(".date-range-slider-wrapper").should("exist");
      cy.get("tc-range-slider").should("exist");

      // Get the slider element and trigger a change event to select a specific date
      // We'll select a date from the middle of the date range
      const targetDateIndex = Math.floor(
        STORY_ARGS.layers[2].properties.timeControlValues.length / 2,
      );
      const targetDateEntry =
        STORY_ARGS.layers[2].properties.timeControlValues[targetDateIndex];
      const targetDate = targetDateEntry.date;

      // Trigger slider change by dispatching a custom event
      // The slider uses the 'change' event with detail.value1
      cy.get("tc-range-slider").then(($slider) => {
        const changeEvent = new CustomEvent("change", {
          detail: {
            value1: targetDate,
          },
          bubbles: true,
          composed: true,
        });
        $slider[0].dispatchEvent(changeEvent);
      });
    });

  // Wait for the date component to update
  cy.wait(300);

  // Verify that the date component now shows the selected date from slider
  const targetDateIndex = Math.floor(
    STORY_ARGS.layers[2].properties.timeControlValues.length / 2,
  );
  const targetDateEntry =
    STORY_ARGS.layers[2].properties.timeControlValues[targetDateIndex];
  const targetDate = targetDateEntry.date;

  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", targetDate);
    });

  // Test another slider change - select a different date
  cy.get("eox-timecontrol-slider")
    .shadow()
    .within(() => {
      // Select a date near the beginning of the range
      const anotherTargetDateIndex = 5; // 6th date in the array
      const anotherTargetDateEntry =
        STORY_ARGS.layers[2].properties.timeControlValues[
          anotherTargetDateIndex
        ];
      const anotherTargetDate = anotherTargetDateEntry.date;

      cy.get("tc-range-slider").then(($slider) => {
        const changeEvent = new CustomEvent("change", {
          detail: {
            value1: anotherTargetDate,
          },
          bubbles: true,
          composed: true,
        });
        $slider[0].dispatchEvent(changeEvent);
      });
    });

  // Wait for update
  cy.wait(300);

  // Verify the date component updated to the new slider selection
  const anotherTargetDateIndex = 5;
  const anotherTargetDateEntry =
    STORY_ARGS.layers[2].properties.timeControlValues[anotherTargetDateIndex];
  const anotherTargetDate = anotherTargetDateEntry.date;

  cy.get("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']")
        .invoke("val")
        .should("equal", anotherTargetDate);
    });

  // Verify year ticks are displayed correctly on slider
  cy.get("eox-timecontrol-slider")
    .shadow()
    .within(() => {
      // Verify custom marks container exists
      cy.get(".custom-marks-container").should("exist");

      // Verify year ticks exist
      cy.get(".custom-mark-year").should("have.length.greaterThan", 0);

      // Verify year labels exist and show correct years
      cy.get(".custom-mark-year-label")
        .should("have.length.greaterThan", 0)
        .first()
        .invoke("text")
        .should("match", /2022|2023/);
    });
};

export default loadDateWithSlider;
