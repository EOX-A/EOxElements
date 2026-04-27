import { html } from "lit";

/**
 * Test case to configure layout controls via webcomponent properties
 */
const setLayoutControls = () => {
  cy.mount(html`<eox-map></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = /** @type {import("../../../src/main").EOxMap} */ ($el[0]);

    eoxMap.controls = {
      Zoom: {
        position: "top-right",
        target: "zoom-group",
        orientation: "vertical",
      },
      FullScreen: { position: "top-right", target: "zoom-group" },
      Rotate: { position: "bottom-center", orientation: "horizontal" },
      ScaleLine: { position: "bottom-left" },
    };
  });

  cy.get("eox-map")
    .shadow()
    .within(() => {
      // Check top-right region and the zoom-group
      cy.get(".eox-map-controls-region.top-right")
        .find("#zoom-group.vertical")
        .should("exist");
      cy.get(".eox-map-controls-region.top-right")
        .find("#zoom-group")
        .find(".ol-zoom")
        .should("exist");
      cy.get(".eox-map-controls-region.top-right")
        .find("#zoom-group")
        .find(".ol-full-screen")
        .should("exist");

      // Check bottom-center region and orientation
      cy.get(".eox-map-controls-region.bottom-center")
        .find(".eox-map-controls-group.horizontal")
        .find(".ol-rotate")
        .should("exist");

      // Check bottom-left region
      cy.get(".eox-map-controls-region.bottom-left")
        .find(".ol-scale-line")
        .should("exist");
    });
};

export default setLayoutControls;
