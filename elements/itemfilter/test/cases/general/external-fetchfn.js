import testItems from "../../testItems.json";

/**
 * Tests the external filtering functionality with fetchFn in the eox-itemfilter component.
 */
const externalFetchFnTest = () => {
  cy.intercept("https://external-api-url.com", [{ ...testItems[3] }]);

  cy.get("eox-itemfilter").then(($el) => {
    $el[0].externalFilter = () => ({
      url: "https://external-api-url.com",
      fetchFn: async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      },
    });
  });

  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("[data-details=themes]").within(() => {
        cy.get("eox-itemfilter-select").within(() => {
          cy.get("[data-title=agriculture]").click();
        });
      });
      cy.get("eox-itemfilter-results summary .title")
        .first()
        .contains(testItems[3].themes[0]);
      cy.get("eox-itemfilter-results li .title")
        .first()
        .contains(testItems[3].title);
    });
};

export default externalFetchFnTest;
