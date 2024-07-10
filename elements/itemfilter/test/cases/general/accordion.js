const accordionTest = () => {
  cy.get("eox-itemfilter").then(($el) => {
    $el[0].config.expandMultipleFilters = false;
    $el[0].config.expandMultipleResults = false;
  });

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

            console.log(accordionToClick);

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

                console.log(isSubcomponent);

                accordionToCheck.should("not.have.attr", "open");
              }
            }
          }
        });
      });
  };

  checkExclusiveOpen("ul#filters", true);
  checkExclusiveOpen("ul#results");
};

export default accordionTest;
