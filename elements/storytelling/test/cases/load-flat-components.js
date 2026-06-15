import "../../../map/src/main";
import "../../src/main";

/**
 * Ensure flat components loaded and align with A2UI streaming updates
 */
const loadFlatComponentsTest = () => {
  cy.mount(`
    <eox-storytelling-tour id="maptour" position="left">
      <eox-storytelling-tour-step
        id="step-0"
        title="Step 1 Title"
        description="This is the first step description in **markdown** format."
        config='{"zoom": 3, "center": [0, 0], "layers": []}'
      ></eox-storytelling-tour-step>
      <eox-storytelling-tour-step
        id="step-1"
        title="Step 2 Title"
        description="This is the second step description in *markdown* format."
        config='{"zoom": 6, "center": [10, 10], "layers": []}'
      ></eox-storytelling-tour-step>
    </eox-storytelling-tour>
    <eox-storytelling-text
      id="text-section"
      title="Text Section Title"
      markdown="Standard storytelling **bold text**."
    ></eox-storytelling-text>
  `);

  // Assert correct parsing of markdown parameters
  cy.get("eox-storytelling-text")
    .shadow()
    .within(() => {
      cy.get("h2").should("have.text", "Text Section Title");
      cy.get("strong").should("have.text", "bold text");
    });

  cy.get("eox-storytelling-tour-step")
    .eq(0)
    .shadow()
    .within(() => {
      cy.get("h4").should("have.text", "Step 1 Title");
      cy.get("strong").should("have.text", "markdown");
    });

  // Check map element exists
  cy.get("eox-storytelling-tour")
    .shadow()
    .within(() => {
      cy.get("eox-map").should("exist");
    });

  // Verify that modifying description or config on an active step updates DOM/Map in real-time
  cy.get("eox-storytelling-tour-step")
    .eq(0)
    .then(($el) => {
      const stepEl = /** @type {any} */ ($el[0]);
      stepEl.title = "Updated Title";
      stepEl.description = "Updated **rich** description";
      stepEl.config = { zoom: 8, center: [20, 20], layers: [] };
    });

  cy.get("eox-storytelling-tour-step")
    .eq(0)
    .shadow()
    .within(() => {
      cy.get("h4").should("have.text", "Updated Title");
      cy.get("strong").should("have.text", "rich");
    });

  // Verify map properties got updated reactively
  cy.get("eox-storytelling-tour")
    .shadow()
    .within(() => {
      cy.get("eox-map").should(($map) => {
        const mapEl = /** @type {any} */ ($map[0]);
        expect(mapEl.zoom).to.equal(8);
      });
    });

  // Slotted additions: appending new step elements triggers slot changes and correct intersection observation
  cy.get("eox-storytelling-tour").then(($maptour) => {
    const maptourEl = /** @type {any} */ ($maptour[0]);
    const newStep = document.createElement("eox-storytelling-tour-step");
    newStep.id = "step-2";
    newStep.title = "Step 3 Title";
    // @ts-expect-error setting config
    newStep.config = { zoom: 12, center: [5, 5], layers: [] };
    // @ts-expect-error setting description
    newStep.description = "Dynamic step text";
    maptourEl.appendChild(newStep);
  });

  cy.get("#step-2").should("exist");
  cy.get("#step-2")
    .shadow()
    .within(() => {
      cy.get("h4").should("have.text", "Step 3 Title");
    });
};

export default loadFlatComponentsTest;
