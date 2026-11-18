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

/**
 * Test case for date range filter initialization with pre-set state as strings
 */
export function preSetDateRangeFilterTest() {
  cy.get("eox-itemfilter").then(($el) => {
    const eoxItemFilter = $el[0];
    eoxItemFilter.items = [
      { title: "Item 1", timestamp: "2021-01-01" },
      { title: "Item 2", timestamp: "2021-01-10" },
      { title: "Item 3", timestamp: "2021-01-20" },
      { title: "Item 4", timestamp: "2021-01-30" },
    ];
    eoxItemFilter.filterProperties = [
      {
        key: "timestamp",
        title: "Date Range",
        type: "range",
        format: "date",
        expanded: true,
        min: "2020-12-31",
        max: "2021-01-10",
        state: {
          min: "2020-12-31",
          max: "2021-01-10",
        },
      },
    ];
  });

  // Check results: only first two items should be visible
  cy.get("eox-itemfilter")
    .shadow()
    .find("eox-itemfilter-results")
    .find("ul#results")
    .within(() => {
      cy.get("li").should("have.length", 2);
      cy.contains("Item 1");
      cy.contains("Item 2");
      cy.contains("Item 3").should("not.exist");
      cy.contains("Item 4").should("not.exist");
    });
}

/**
 * Test case for date range filter integration with external search
 */
export function externalDateRangeFilterTest() {
  cy.get("eox-itemfilter").then(($el) => {
    const eoxItemFilter = $el[0];
    eoxItemFilter.items = [];
    eoxItemFilter.externalFilter = (items, filters) => {
      const dummyItems = [
        { title: "Old", timestamp: "2021-01-01" },
        { title: "New", timestamp: "2023-01-01" },
      ];
      return {
        url: "fake-endpoint",
        fetchFn: () => {
          const dateFilter = filters.timestamp;
          if (
            dateFilter &&
            dateFilter.state &&
            (dateFilter.state.min || dateFilter.state.max)
          ) {
            const minVal = dateFilter.state.min
              ? new Date(dateFilter.state.min).getTime()
              : -Infinity;
            const maxVal = dateFilter.state.max
              ? new Date(dateFilter.state.max).getTime()
              : Infinity;
            return dummyItems.filter((item) => {
              const itemTime = new Date(item.timestamp).getTime();
              return itemTime >= minVal && itemTime <= maxVal;
            });
          }
          return dummyItems;
        },
      };
    };
    eoxItemFilter.filterProperties = [
      {
        key: "timestamp",
        type: "range",
        format: "date",
        expanded: true,
        min: "2020-01-01",
        max: "2024-12-31",
      },
    ];
  });

  cy.get("eox-itemfilter", { includeShadowDom: true })
    .find("eox-itemfilter-range", { includeShadowDom: true })
    .find("eox-timecontrol", { includeShadowDom: true })
    .should("exist");

  // Manually trigger a change from the timecontrol to simulate a user selection
  cy.get("eox-itemfilter", { includeShadowDom: true })
    .find("eox-itemfilter-range", { includeShadowDom: true })
    .find("eox-timecontrol", { includeShadowDom: true })
    .then(($timecontrol) => {
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

  // Check results after filtering: only "New" (2023-01-01) should exist, not "Old" (2021-01-01)
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
