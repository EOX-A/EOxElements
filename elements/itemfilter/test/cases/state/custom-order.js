const customOrderTest = (customOrder) => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("eox-itemfilter-select")
        .shadow()
        .within(() => {
          Object.keys(customOrder).forEach((state) => {
            cy.get("ul [data-identifier]")
              .eq(customOrder[state])
              .invoke("attr", "data-identifier")
              .should("eq", state);
          });
        });
    });
};

export default customOrderTest;
