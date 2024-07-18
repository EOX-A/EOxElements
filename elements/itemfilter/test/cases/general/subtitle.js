/**
 * Tests the subtitle functionality. If the confif option `subTitleProperty` is set,
 * then an additional subtitle is rendered.
 */
const subtitleTest = () => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("eox-itemfilter-results").within(() => {
        cy.get(".title").siblings(".subtitle").should("exist");
      });
    });
};

export default subtitleTest;
