/**
 * Tests the image functionality. If the config option `imageProperty` is set,
 * then an additional image is rendered.
 */
const imageTest = () => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("eox-itemfilter-results").within(() => {
        cy.get(".title").parent().siblings("i").find("img").should("exist");
      });
    });
};

export default imageTest;
