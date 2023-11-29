import { TEST_SELECTORS } from "../../src/enums";
const { drawTools, controller, drawBtn, discardBtn } = TEST_SELECTORS;

const clickDiscardBtnTest = () =>
  it("clicks the discard button and clears drawn features", () => {
    cy.get(drawTools)
      .shadow()
      .within(() => {
        cy.get(controller)
          .shadow()
          .within(() => {
            cy.get(drawBtn).click();
            cy.get(drawBtn).contains("drawing");
            cy.get(discardBtn).click();
            cy.get(drawBtn).should("not.contain", "drawing");
          });
      });
    cy.get(drawTools).should(($el) => {
      expect($el[0].drawnFeatures).to.have.length(0);
    });
  });

export default clickDiscardBtnTest;
