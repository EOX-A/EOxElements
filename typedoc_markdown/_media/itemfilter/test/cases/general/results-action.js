const resultsActionTest = () => {
  cy.window().then((win) => {
    cy.spy(win, "alert").as("alertSpy");
  });
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get(".result-action").first().click({ force: true });
    });
  cy.get("@alertSpy").should(
    "have.been.calledWith",
    "White Asparagus area [%] clicked!",
  );
};

export default resultsActionTest;
