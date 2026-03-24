/**
 * Tests for result sorting logic in the eox-itemfilter component.
 */
export const resultSortingTest = () => {
  // 1. Default alphabetical (ascending by title)
  cy.get("eox-itemfilter")
    .as("itemfilter")
    .then(($el) => {
      const eoxItemFilter = $el[0];
      eoxItemFilter.resultSorting = undefined;
      eoxItemFilter.apply();
    });
  cy.get("eox-itemfilter").then(($el) => {
    const results = $el[0].results;
    const titles = results.map((r) => r.title);
    const sorted = [...titles].sort((a, b) => a.localeCompare(b));
    expect(
      titles,
      "Titles in eoxItemFilter.results should be sorted",
    ).to.deep.equal(sorted);
  });

  // 2. Disabled sorting (resultSorting = false)
  cy.get("eox-itemfilter").then(($el) => {
    const eoxItemFilter = $el[0];
    eoxItemFilter.resultSorting = false;
    eoxItemFilter.apply();
  });
  cy.get("eox-itemfilter").then(($el) => {
    const results = $el[0].results;
    const titles = results.map((r) => r.title);
    const sorted = [...titles].sort((a, b) => a.localeCompare(b));
    expect(titles).to.not.deep.equal(sorted);
  });

  // 3. Sort by custom property (e.g. 'themes')
  cy.get("eox-itemfilter").then(($el) => {
    const eoxItemFilter = $el[0];
    eoxItemFilter.resultSorting = "themes";
    eoxItemFilter.apply();
  });
  cy.get("eox-itemfilter")
    .shadow()
    .find("ul#results li")
    .then(() => {
      // In our test items, we need to find what the 'themes' values are
      // For simplicity, we just check they are in increasing order.
      // We can't easily see hidden 'themes' in the UI without custom template,
      // but we can check the component state.
      cy.get("eox-itemfilter").then(($el) => {
        const results = $el[0].results;
        const themes = results.map((r) => r.themes?.[0] || "");
        const sortedThemes = [...themes].sort((a, b) => a.localeCompare(b));
        expect(themes).to.deep.equal(sortedThemes);
      });
    });

  // 4. Sort by object { key, order: 'desc' }
  cy.get("eox-itemfilter").then(($el) => {
    const eoxItemFilter = $el[0];
    eoxItemFilter.resultSorting = { key: "title", order: "desc" };
    eoxItemFilter.apply();
  });
  cy.get("eox-itemfilter").then(($el) => {
    const results = $el[0].results;
    const titles = results.map((r) => r.title);
    const sortedDesc = [...titles].sort((a, b) => b.localeCompare(a));
    expect(titles).to.deep.equal(sortedDesc);
  });

  // 5. Custom comparator function
  cy.get("eox-itemfilter").then(($el) => {
    const eoxItemFilter = $el[0];
    eoxItemFilter.resultSorting = (a, b) => b.title.localeCompare(a.title);
    eoxItemFilter.apply();
  });
  cy.get("eox-itemfilter").then(($el) => {
    const results = $el[0].results;
    const titles = results.map((r) => r.title);
    const sortedDesc = [...titles].sort((a, b) => b.localeCompare(a));
    expect(titles).to.deep.equal(sortedDesc);
  });

  // 6. Auto-detect skip alphabetical when fuseConfig.shouldSort is true
  cy.get("eox-itemfilter").then(($el) => {
    const eoxItemFilter = $el[0];
    eoxItemFilter.resultSorting = undefined;
    eoxItemFilter.fuseConfig = { shouldSort: true };
    eoxItemFilter.apply();
  });
  cy.get("eox-itemfilter").then(($el) => {
    const results = $el[0].results;
    const titles = results.map((r) => r.title);
    const sorted = [...titles].sort((a, b) => a.localeCompare(b));
    expect(titles).to.not.deep.equal(sorted);
  });
};
