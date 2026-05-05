import { html } from "lit";

/**
 * Test case to test custom slotted controls via webcomponent
 */
const setSlottedControls = () => {
  cy.mount(html`<eox-map></eox-map>`).as("eox-map");

  cy.get("eox-map").then(($el) => {
    const eoxMap = /** @type {import("../../../src/main").EOxMap} */ ($el[0]);

    // Provide at least one valid control config in order to trigger the container logic
    eoxMap.controls = {
      Zoom: { position: "top-left" },
    };

    const customBtn = document.createElement("button");
    customBtn.slot = "top-left";
    customBtn.className = "my-custom-btn";
    customBtn.innerText = "Custom slot button";

    eoxMap.appendChild(customBtn);
  });

  // Verify the slotted component injected properly
  cy.get("eox-map")
    .shadow()
    .within(() => {
      cy.get(".eox-map-controls-region.top-left")
        .find("slot[name='top-left']")
        .should("exist");
    });

  // Verify it correctly renders on the root node
  cy.get("eox-map").find(".my-custom-btn").should("exist");
};

export default setSlottedControls;
