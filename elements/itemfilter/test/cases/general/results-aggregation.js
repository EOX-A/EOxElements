/**
 * Tests the result aggregation to ensure:
 * 1. Empty strings in property arrays do not create "ghost" categories.
 * 2. Missing properties (undefined/null) do not cause crashes.
 * 3. Items are not duplicated in the results list.
 */
const resultAggregationTest = () => {
  const dirtyItems = [
    { id: "foo", title: "Foo Item", themes: ["", "B"] },
    { id: "bar", title: "Bar Item", themes: ["C"] },
    { id: "baz", title: "Baz Item" }, // Missing property
  ];

  cy.get("eox-itemfilter").then(($el) => {
    $el[0].items = dirtyItems;
    $el[0].config = { ...$el[0].config, aggregateResults: "themes" };
    $el[0].requestUpdate();
  });

  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      // Assert correct number of categories (no "ghost category")
      cy.get("#section-results details").should("have.length", 2);

      // Assert categories are correct
      cy.contains("summary", "B").should("exist");
      cy.contains("summary", "C").should("exist");

      // Assert item exists strictly once (no duplicate items)
      cy.get("#section-results li, #section-results .result-item")
        .filter(":contains('Foo Item')")
        .should("have.length", 1);

      // Assert item handling for missing property
      cy.contains("Bar Item").should("be.visible");
    });
};

export default resultAggregationTest;
