import { TEST_SELECTORS } from "../../src/enums";
const { drawTools, controller, drawBtn } = TEST_SELECTORS;

const clickDrawBtnTest = () =>
  it("clicks the draw button", () => {
    cy.get(drawTools)
      .shadow()
      .within(() => {
        cy.get(controller)
          .shadow()
          .within(() => {
            cy.get(drawBtn).contains("draw");
            cy.get(drawBtn).should("not.contain", "drawing");
            cy.get(drawBtn).click();
            cy.get(drawBtn).contains("drawing");
          });
      });
    // TODO simulate drawing and add drawn features
  });
export default clickDrawBtnTest;
