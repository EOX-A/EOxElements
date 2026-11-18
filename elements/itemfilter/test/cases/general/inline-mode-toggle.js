/**
 * Tests that currently selected filters are preserved when toggling inlineMode back and forth.
 */
const inlineModeToggleTest = () => {
  cy.get("eox-itemfilter").then(($el) => {
    const eoxItemFilter = $el[0];

    // Interact with filters to change state
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("eox-itemfilter-select").within(() => {
          cy.get('[type="checkbox"]').first().check({ force: true });
        });
      });

    // Verify checkbox is checked
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("eox-itemfilter-select").within(() => {
          cy.get('[type="checkbox"]').first().should("be.checked");
        });
      });

    // Toggle inline mode to true
    cy.wrap(eoxItemFilter).then((el) => {
      el.inlineMode = true;
    });

    // Manually trigger change in filterProperties (which happens in many frameworks on re-render)
    cy.wrap(eoxItemFilter).then((el) => {
      el.filterProperties = [
        {
          keys: ["title", "themes"],
          title: "Search",
          type: "text",
          expanded: true,
          validation: {
            pattern: ".{0,10}",
            message: "Maximum 10 characters",
          },
        },
        { key: "themes", expanded: true },
      ];
    });

    // Toggle inline mode back to false
    cy.wrap(eoxItemFilter).then((el) => {
      el.inlineMode = false;
    });

    // Verify the checkbox is still checked (the filter was not lost)
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("eox-itemfilter-select").within(() => {
          cy.get('[type="checkbox"]').first().should("be.checked");
        });
      });
  });
};

export default inlineModeToggleTest;
