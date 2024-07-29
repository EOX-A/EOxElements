/**
 * Tests the behavior of the eox-itemfilter when it has nested property as a key
 */
const nestedPropertyTest = () => {
  cy.get("eox-itemfilter").then(($el) => {
    $el[0].filterProperties = [
      ...$el[0].filterProperties,
      { key: "status.code", title: "Status", expanded: true },
    ];
  });

  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("[id='filter-status.code']")
        .shadow()
        .within(() => {
          cy.get('[type="checkbox"]').first().check();
          cy.get(".title").first().contains("active");
          cy.get(".title").last().contains("inactive");
        });
    });
};

export default nestedPropertyTest;
