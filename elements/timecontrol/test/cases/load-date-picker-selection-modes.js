import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test to verify that timecontrol-picker calendar correctly applies --primary background fill
 * to selected dates in all selection modes (single, first-and-last, and ranges) along with
 * appropriate availability dot colors.
 */
const loadDatePickerSelectionModes = () => {
  // setup - intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // mount standalone picker in range mode
  cy.mount(html`
    <eox-map
      id="picker-selection-modes-test"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#picker-selection-modes-test">
      <eox-timecontrol-date
        format="${STORY_ARGS.format}"
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        format="${STORY_ARGS.format}"
        .range=${true}
        .showDots=${true}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `);

  // Wait for calendar to be rendered
  cy.get("eox-timecontrol-picker")
    .shadow()
    .within(() => {
      cy.get("#cal .vc-date").should("have.length.gt", 0);

      // 1. First-and-last / single date in range mode
      cy.get(`[data-vc-date="2023-04-10"] .vc-date__btn`).click();
      cy.get(`[data-vc-date="2023-04-10"] .vc-date__btn`).click();

      cy.get(`[data-vc-date="2023-04-10"] .vc-date__btn`)
        .should("have.css", "background-color", "rgb(0, 65, 112)")
        .and("have.css", "color", "rgb(255, 255, 255)");

      cy.get(`[data-vc-date="2023-04-10"] .vc-day__dot`).should(
        "have.css",
        "background-color",
        "rgb(255, 255, 255)",
      );

      // 2. Range mode (start: 2023-04-10, end: 2023-04-12)
      cy.get(`[data-vc-date="2023-04-10"] .vc-date__btn`).click();
      cy.get(`[data-vc-date="2023-04-12"] .vc-date__btn`).click();

      // First day of range
      cy.get(`[data-vc-date="2023-04-10"] .vc-date__btn`)
        .should("have.css", "background-color", "rgb(0, 65, 112)")
        .and("have.css", "color", "rgb(255, 255, 255)");

      // Middle day of range
      cy.get(`[data-vc-date="2023-04-11"] .vc-date__btn`)
        .should("satisfy", ($el) => {
          const bg =
            $el[0].style.backgroundColor ||
            window.getComputedStyle($el[0]).backgroundColor;
          return (
            bg.includes("0.6") ||
            bg === "rgba(0, 65, 112, 0.6)" ||
            bg.startsWith("color(srgb 0 0.254902 0.439216 / 0.6")
          );
        })
        .and("have.css", "color", "rgb(255, 255, 255)");

      // Last day of range
      cy.get(`[data-vc-date="2023-04-12"] .vc-date__btn`)
        .should("have.css", "background-color", "rgb(0, 65, 112)")
        .and("have.css", "color", "rgb(255, 255, 255)");

      // Availability dots on selected range dates are white
      cy.get(`[data-vc-date="2023-04-10"] .vc-day__dot`).should(
        "have.css",
        "background-color",
        "rgb(255, 255, 255)",
      );
    });
};

export default loadDatePickerSelectionModes;
