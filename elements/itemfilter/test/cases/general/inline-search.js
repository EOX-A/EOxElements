/**
 * Tests the inline search box with an `inlineSearch` text filter: typing matches filter
 * names and offers a search action, the action or Enter adds the text to the filter,
 * and the resulting chip can be removed again.
 */
const inlineSearchTest = () => {
  // Opening the inline popover can trigger a benign ResizeObserver loop error
  cy.on(
    "uncaught:exception",
    (err) => !err.message.includes("ResizeObserver loop"),
  );
  cy.get("eox-itemfilter").then(($el) => {
    Object.assign($el[0], {
      inlineMode: true,
      filterProperties: [
        {
          // Three keys produce a filter id containing "|"
          keys: ["title", "description", "themes"],
          title: "Search",
          type: "text",
          inlineSearch: true,
        },
        { key: "code", title: "Codes" },
      ],
    });
  });

  const searchSection = '[data-details="title|description|themes"]';
  const codesSection = '[data-details="code"]';
  const container = () => cy.get("eox-itemfilter-container").shadow();
  const inlineInput = () => container().find("#eox-itemfilter-input-search");
  const searchAction = () =>
    container().find("[data-cy='inline-search-action']");
  const popoverOpen = (open) =>
    container()
      .find("[popover]")
      .should(($popover) =>
        expect($popover[0].matches(":popover-open")).to.equal(open),
      );

  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("ul#results > li")
        .its("length")
        .then((totalResults) => {
          // The inlineSearch filter section is hidden, even when its title matches
          inlineInput().click();
          cy.get(searchSection).parent().should("have.css", "display", "none");
          inlineInput().type("search");
          cy.get(searchSection).parent().should("have.css", "display", "none");
          inlineInput().clear();

          // Unrelated words do not match filter titles, partial titles do
          inlineInput().type("cargo");
          cy.get(codesSection).parent().should("have.css", "display", "none");
          inlineInput().clear();
          inlineInput().type("cod");
          cy.get(codesSection)
            .parent()
            .should("not.have.css", "display", "none");
          inlineInput().clear();

          // Whitespace-only text offers no search action
          inlineInput().type("   ");
          searchAction().should("not.exist");
          inlineInput().clear();

          // A click outside clears the text and the search action
          inlineInput().type("foo");
          searchAction().should("exist");
          cy.document().then((doc) =>
            doc.body.dispatchEvent(new MouseEvent("click", { bubbles: true })),
          );
          searchAction().should("not.exist");

          // Typing (including spaces) offers the search action but does not apply the text
          inlineInput().type("white asparagus");
          searchAction().should("contain.text", 'Search for "white asparagus"');
          cy.get(searchSection).parent().should("have.css", "display", "none");
          cy.get(`${searchSection} [data-cy='search']`).should(
            "have.value",
            "",
          );
          container().find(".chip-title").should("not.exist");

          // The search action applies the text, clears the box and closes the dropdown
          searchAction().click();
          inlineInput().should("have.value", "");
          popoverOpen(false);
          cy.get("ul#results > li")
            .should("have.length.lessThan", totalResults)
            .and("contain.text", "White Asparagus");
          container()
            .find(".chip-title")
            .should("contain.text", "Search:")
            .and("contain.text", "white asparagus");

          // Focus returns to the box, and typing again reopens the dropdown
          inlineInput().should("have.focus");
          inlineInput().type("x");
          popoverOpen(true);
          cy.get(searchSection).parent().should("have.css", "display", "none");
          inlineInput().clear();
          searchAction().should("not.exist");

          // Removing the chip resets the filter
          container().find(".chip-item-close").click({ force: true });
          container().find(".chip-title").should("not.exist");
          cy.get("ul#results > li").should("have.length", totalResults);

          // Each Enter adds to the text, even when pressed faster than the text filter debounce (500ms)
          inlineInput().type("vessel{enter}cargo{enter}density{enter}", {
            delay: 0,
          });
          container()
            .find(".chip-title")
            .should("contain.text", "vessel cargo density");
          cy.get("ul#results")
            .should("contain.text", "Vessel Density (cargo)")
            .and("not.contain.text", "Vessel Density (all)")
            .and("not.contain.text", "Cargo Ships");
        });
    });
};

export default inlineSearchTest;
