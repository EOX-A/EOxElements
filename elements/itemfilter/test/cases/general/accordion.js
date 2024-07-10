/**
 * Tests the accordion functionality of the eox-itemfilter component to ensure only one accordion is open at a time.
 */
const accordionTest = () => {
  // Set the configuration to disable multiple filters and results expansion
  cy.get("eox-itemfilter").then(($el) => {
    $el[0].config.expandMultipleFilters = false;
    $el[0].config.expandMultipleResults = false;
  });

  /**
   * Checks that only one accordion is open at a time for the given selector.
   *
   * @param {string} selector - The CSS selector for the accordion elements.
   * @param {boolean} isSubcomponent - Flag indicating if the selector targets subcomponents.
   */
  const checkExclusiveOpen = (selector, isSubcomponent) => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get(selector).then((accordions) => {
          for (let i = 0; i < accordions.length; i++) {
            const accordionToClick = isSubcomponent
              ? cy
                  .get(selector)
                  .eq(i)
                  .find("eox-itemfilter-expandcontainer")
                  .shadow()
                  .find("details")
              : cy.get(selector).eq(i).find("details");

            accordionToClick.click({ multiple: true, force: true });
            accordionToClick.should("have.attr", "open");

            // Check that all other accordions are closed
            for (let j = 0; j < accordions.length; j++) {
              if (i !== j) {
                const accordionToCheck = isSubcomponent
                  ? cy
                      .get(selector)
                      .eq(j)
                      .find("eox-itemfilter-expandcontainer")
                      .shadow()
                      .find("details")
                  : cy.get(selector).eq(j).find("details");

                accordionToCheck.should("not.have.attr", "open");
              }
            }
          }
        });
      });
  };

  // Check exclusive open behavior for filters and results
  checkExclusiveOpen("ul#filters", true);
  checkExclusiveOpen("ul#results");
};

export default accordionTest;
