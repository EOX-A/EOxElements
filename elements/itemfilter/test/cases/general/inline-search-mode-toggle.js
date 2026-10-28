/**
 * Tests that an `inlineSearch` text filter is shown like a normal text filter
 * after switching inline mode off.
 */
const inlineSearchModeToggleTest = () => {
  cy.get("eox-itemfilter").then(($el) => {
    Object.assign($el[0], {
      inlineMode: true,
      filterProperties: [
        {
          keys: ["title", "description", "themes"],
          title: "Search",
          type: "text",
          inlineSearch: true,
        },
      ],
    });
  });
  const searchSection = () =>
    cy
      .get("eox-itemfilter")
      .shadow()
      .find('[data-details="title|description|themes"]')
      .parent();

  searchSection().should("have.css", "display", "none");
  cy.get("eox-itemfilter").then(($el) => {
    $el[0].inlineMode = false;
  });
  searchSection().should("not.have.css", "display", "none");
};

export default inlineSearchModeToggleTest;
