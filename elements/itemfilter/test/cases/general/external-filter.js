import testItems from "../../testItems.json";

/**
 * Tests the external filtering functionality in the eox-itemfilter component.
 */
const externalFilterTest = () => {
  cy.intercept("https://test.com", [{ ...testItems[5] }]);

  cy.get("eox-itemfilter").then(($el) => {
    $el[0].config = {
      ...$el[0].config,
      externalFilter: () => {
        return `https://test.com`;
      },
    };
  });

  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("eox-itemfilter-results summary .title").contains(
        testItems[5].themes[0]
      );
      cy.get("eox-itemfilter-results label .title").contains(
        testItems[5].title
      );
    });
};

export default externalFilterTest;
