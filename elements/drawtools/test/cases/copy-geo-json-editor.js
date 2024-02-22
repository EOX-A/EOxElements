import { DUMMY_GEO_JSON, TEST_SELECTORS } from "../../src/enums";

Cypress.Commands.add("getClipboardText", () => {
  return cy.window().then((win) => {
    return win.navigator.clipboard.readText();
  });
});

// Destructure TEST_SELECTORS object
const { drawTools, controller, copyBtn } = TEST_SELECTORS;

/**
 * Check valid geo-json present in the clipboard after copying
 */
const copyGeoJsonEditorTest = () => {
  cy.get(drawTools)
    .shadow()
    .within(() => {
      cy.get(controller).within(() => {
        cy.window().then((win) => {
          cy.stub(win.navigator.clipboard, "writeText").resolves();
        });

        // Click copy button in geo json editor
        cy.get(copyBtn).click();

        // Check whether the copied json matches with `DUMMY_GEO_JSON`
        cy.window().then((win) => {
          expect(win.navigator.clipboard.writeText).to.be.calledWith(
            JSON.stringify(DUMMY_GEO_JSON, undefined, 2)
          );
        });
      });
    });
};

export default copyGeoJsonEditorTest;
