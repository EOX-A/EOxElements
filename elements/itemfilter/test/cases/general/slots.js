/**
 * Tests the available slots to correctly render
 */
const slotRenderTest = () => {
  const filtersTitle = "Foo";
  const resultsTitle = "Bar";
  cy.mount(
    `
    <eox-itemfilter>
      <p slot="filterstitle">${filtersTitle}</p>
      <p slot="resultstitle">${resultsTitle}</p>
    </eox-itemfilter>`,
  ).as("eox-itemfilter");
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get('slot[name="filterstitle"]').and(($el) => {
        expect($el[0].assignedNodes()[0].textContent).to.equal(filtersTitle);
      });
      cy.get('slot[name="resultstitle"]').and(($el) => {
        expect($el[0].assignedNodes()[0].textContent).to.equal(resultsTitle);
      });
    });
};

export default slotRenderTest;
