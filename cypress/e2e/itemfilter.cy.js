describe("Itemfilter", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=elements-eox-itemfilter--primary"
    );
  });
  it("Should select geometry", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("ul#filters>li").last().click();
        cy.get("eox-map");
      });
  });
});
