/**
 * Tests the result aggregation to ensure:
 * 1. Empty strings in property arrays do not create "ghost" categories.
 * 2. Missing or falsy properties are grouped into "No category".
 * 3. Items are not duplicated in the results list.
 * 4. The "No category" group appears last.
 */
const resultAggregationTest = () => {
  const dirtyItems = [
    { id: "foo", title: "Foo Item", themes: ["", "B"] }, // Has category "B"
    { id: "bar", title: "Bar Item", themes: ["C"] }, // Has category "C"
    { id: "baz", title: "Baz Item" }, // Missing `themes`, so no category
    { id: "qux", title: "Qux Item", themes: [""] }, // Empty string in array, so no category
    { id: "quux", title: "Quux Item", themes: [] }, // Empty array, so no category
    { id: "corge", title: "Corge Item", themes: "" }, // Empty string, so no category
    { id: "grault", title: "Grault Item", themes: null }, // Null, so no category
  ];

  cy.get("eox-itemfilter").then(($el) => {
    $el[0].items = dirtyItems;
    $el[0].requestUpdate();
  });

  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      // Assert correct number of categories (B, C, and No category)
      cy.get("#section-results details").should("have.length", 3);

      // Assert categories are correct and in order
      cy.get("details summary").eq(0).should("contain", "B");
      cy.get("details summary").eq(1).should("contain", "C");
      cy.get("details summary").eq(2).should("contain", "No category");

      // Assert item exists strictly once (no duplicate items)
      cy.get("#section-results li, #section-results .result-item")
        .filter(":contains('Foo Item')")
        .should("have.length", 1);

      // Assert item handling for missing or falsy properties
      cy.contains("details", "No category").within(() => {
        cy.contains("Baz Item").should("be.visible");
        cy.contains("Qux Item").should("be.visible");
        cy.contains("Quux Item").should("be.visible");
        cy.contains("Corge Item").should("be.visible");
        cy.contains("Grault Item").should("be.visible");
      });

      // Check other item visibility
      cy.contains("details", "B").within(() => {
        cy.contains("Foo Item").should("be.visible");
      });
      cy.contains("details", "C").within(() => {
        cy.contains("Bar Item").should("be.visible");
      });
    });
};

export default resultAggregationTest;
