const selectorSearchTest = () => {
  cy.get("eox-itemfilter").then(($el) => {
    const eoxItemFilter = $el[0];
    eoxItemFilter.filterProperties = [
      {
        key: "themes",
        type: "multiselect",
        expanded: true,
        filterKeys: [
          "optionA",
          "optionB",
          "optionC",
          "optionD",
          "optionE",
          "optionF",
          "optionG",
          "optionH",
          "optionI",
          "This is an extremely long option name that has many words and finally ends with a search term like banana",
        ],
      },
    ];
    eoxItemFilter.requestUpdate();
  });

  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("eox-itemfilter-select")
        .should("be.visible")
        .within(() => {
          // Check that there are 10 suggestions initially
          cy.get("ul.multiselect li").should("have.length", 10);

          // Type "banana" (at the end of the long string) into the input
          cy.get(".autocomplete-input").type("banana");

          // Check that only 1 suggestion remains (the long one)
          cy.get("ul.multiselect li")
            .should("have.length", 1)
            .and("contain", "banana");
        });
    });
};

export default selectorSearchTest;
