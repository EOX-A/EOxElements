/**
 * Tests the validation option of the text input.
 */
const validationTest = () => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("[data-cy='text-filter']").then(($elList) => {
        const el = $elList[0];
        cy.get(".error-validation").should("not.have.text");
        cy.get("[data-cy='search']").type("abcdefghijk");
        cy.get(".error-validation").should(
          "have.text",
          el.filterObject.validation.message,
        );
        cy.get("[data-cy='search']").clear();
        cy.get(".error-validation").should("not.have.text");
      });
    });
};

export default validationTest;
