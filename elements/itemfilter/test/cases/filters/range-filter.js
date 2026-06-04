/**
 * Test case for numeric range filter initialization and dirty state behavior.
 */
export function rangeFilterTest() {
  cy.get("eox-itemfilter").then(($el) => {
    const eoxItemFilter = $el[0];
    eoxItemFilter.items = [
      { title: "Item A", value: 10 },
      { title: "Item B", value: 50 },
      { title: "Item C", value: 100 },
    ];
    eoxItemFilter.filterProperties = [
      {
        key: "value",
        type: "range",
        expanded: true,
      },
    ];
  });

  // Wait for the components to render and verify filter is not dirty on load
  cy.get("eox-itemfilter", { includeShadowDom: true })
    .find("eox-itemfilter-range", { includeShadowDom: true })
    .find("tc-range-slider", { includeShadowDom: true })
    .should("exist")
    .then(() => {
      cy.get("eox-itemfilter").then(($el) => {
        const eoxItemFilter = $el[0];
        const rangeFilter = eoxItemFilter.filters["value"];
        // It shouldn't be dirty initially because the state matches min/max
        expect(rangeFilter.dirty).to.be.undefined;
      });
    });

  // Ensure results length is 3 (unfiltered)
  cy.get("eox-itemfilter")
    .shadow()
    .find("eox-itemfilter-results")
    .find("ul#results")
    .children()
    .should("have.length", 3);
}
