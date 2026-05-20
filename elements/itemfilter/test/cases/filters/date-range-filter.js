/**
 * Test case for date range filter integration
 */
export function dateRangeFilterTest() {
  cy.get("eox-itemfilter").then(($el) => {
    const eoxItemFilter = $el[0];
    eoxItemFilter.items = [
      { title: "Old", timestamp: "2021-01-01" },
      { title: "New", timestamp: "2023-01-01" },
    ];
    eoxItemFilter.filterProperties = [
      {
        key: "timestamp",
        type: "range",
        format: "date",
        expanded: true,
      },
    ];
  });

  cy.get("eox-itemfilter", { includeShadowDom: true })
    .find("eox-itemfilter-range", { includeShadowDom: true })
    .find("eox-timecontrol", { includeShadowDom: true })
    .should("exist");

  cy.get("eox-itemfilter", { includeShadowDom: true })
    .find("eox-itemfilter-range", { includeShadowDom: true })
    .find("eox-timecontrol-picker", { includeShadowDom: true })
    .should("exist");

  // Check initial results (both items should be visible as filter covers all)
  cy.get("eox-itemfilter")
    .shadow()
    .find("eox-itemfilter-results")
    .find("ul#results")
    .children()
    .should("have.length", 2);

  // Manually trigger a change from the timecontrol to simulate a user selection
  cy.get("eox-itemfilter", { includeShadowDom: true })
    .find("eox-itemfilter-range", { includeShadowDom: true })
    .find("eox-timecontrol", { includeShadowDom: true })
    .then(($timecontrol) => {
      // Simulate selecting a range that only includes the "New" item
      // New item is 2023-01-01
      // Range: 2022-01-01 to 2024-01-01
      const startDate = new Date("2022-01-01T00:00:00Z");
      const endDate = new Date("2024-01-01T00:00:00Z");

      $timecontrol[0].dispatchEvent(
        new CustomEvent("select", {
          detail: {
            date: [startDate, endDate],
          },
        }),
      );
    });

  // Check results after filtering
  cy.get("eox-itemfilter")
    .shadow()
    .find("eox-itemfilter-results")
    .find("ul#results")
    .within(() => {
      cy.get("li").should("have.length", 1);
      cy.contains("New");
      cy.contains("Old").should("not.exist");
    });
}
