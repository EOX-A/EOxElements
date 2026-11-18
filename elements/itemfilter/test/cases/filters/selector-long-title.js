const selectorLongTitleTest = () => {
  const longTitleRaw =
    "alpha particles differential directional flux and extended long name";
  const longTitleCapitalized =
    "Alpha Particles Differential Directional Flux And Extended Long Name";
  cy.get("eox-itemfilter").then(($el) => {
    const eoxItemFilter = $el[0];
    eoxItemFilter.style.width = "250px";
    eoxItemFilter.filterProperties = [
      {
        key: "themes",
        type: "multiselect",
        expanded: true,
        filterKeys: [longTitleRaw],
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
          cy.get("ul.multiselect li")
            .first()
            .within(() => {
              cy.get("label").should(
                "have.attr",
                "title",
                longTitleCapitalized,
              );
              cy.get("span.title").should(
                "have.attr",
                "title",
                longTitleCapitalized,
              );
              cy.get("span.title-text")
                .should("have.css", "text-overflow", "ellipsis")
                .should("have.css", "white-space", "nowrap")
                .should(($span) => {
                  const el = $span[0];
                  expect(el.scrollWidth).to.be.greaterThan(el.offsetWidth);
                });
            });
        });
    });
};

export default selectorLongTitleTest;
