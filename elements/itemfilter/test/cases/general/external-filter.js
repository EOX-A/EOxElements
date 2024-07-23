import testItems from "../../testItems.json";

/**
 * Tests the external filtering functionality in the eox-itemfilter component.
 */
const externalFilterTest = () => {
  cy.intercept("https://external-api-url.com", [{ ...testItems[5] }]);

  cy.get("eox-itemfilter").then(($el) => {
    $el[0].externalFilter = (items, filter) => {
      expect(filter.themes.dirty).to.be.equal($el[0].filters.themes.dirty);
      return "https://external-api-url.com";
    };
  });

  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("[data-details=themes]").within(() => {
        cy.get("eox-itemfilter-select")
          .shadow()
          .within(() => {
            cy.get("[data-title=agriculture]").click();
          });
      });
      cy.get("eox-itemfilter-results summary .title")
        .first()
        .contains(testItems[5].themes[0]);
      cy.get("eox-itemfilter-results label .title")
        .first()
        .contains(testItems[5].title);
    });
};

export default externalFilterTest;
