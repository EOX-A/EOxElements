/**
 * Tests that closing the inline dropdown with a click outside clears the search box
 * and shows all filter sections again.
 */
const inlineResetSearchTest = () => {
  // Opening the inline popover can trigger a benign ResizeObserver loop error
  cy.on(
    "uncaught:exception",
    (err) => !err.message.includes("ResizeObserver loop"),
  );
  cy.get("eox-itemfilter").then(($el) => {
    $el[0].inlineMode = true;
  });

  const input = () =>
    cy
      .get("eox-itemfilter")
      .shadow()
      .find("eox-itemfilter-container")
      .shadow()
      .find("#eox-itemfilter-input-search");
  const searchSectionDisplay = () =>
    cy
      .get("eox-itemfilter")
      .shadow()
      .find('[data-details="title|themes"]')
      .parent();

  input().type("them");
  searchSectionDisplay().should("have.css", "display", "none");
  // Dispatch on body directly; Cypress click/trigger would hit the itemfilter covering it
  cy.document().then((doc) =>
    doc.body.dispatchEvent(new MouseEvent("click", { bubbles: true })),
  );
  input().should("have.value", "").click();
  searchSectionDisplay().should("not.have.css", "display", "none");
};

export default inlineResetSearchTest;
