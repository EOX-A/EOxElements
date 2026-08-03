const resultsTitleTest = () => {
  const longTitleRaw =
    "alpha particles differential directional flux and extended long result name";
  const longTitleCapitalized =
    "Alpha Particles Differential Directional Flux And Extended Long Result Name";
  cy.get("eox-itemfilter").then(($el) => {
    const eoxItemFilter = $el[0];
    eoxItemFilter.style.width = "250px";
    eoxItemFilter.items = [
      {
        id: "long-item-1",
        title: longTitleRaw,
      },
    ];
    eoxItemFilter.titleProperty = "title";
    eoxItemFilter.requestUpdate();
  });

  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("ul#results li")
        .first()
        .within(() => {
          cy.get("span.title").should(
            "have.attr",
            "title",
            longTitleCapitalized,
          );
        });
    });
};

export default resultsTitleTest;
