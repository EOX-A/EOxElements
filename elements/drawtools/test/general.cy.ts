import "../src/main";
import { EOxDrawTools } from "../src/main";
import "./_mockMap";

describe("Drawtools", () => {
  beforeEach(() => {
    cy.mount("<mock-map></mock-map>");
    cy.mount(
      `
      <eox-drawtools for="mock-map" layer="draw"></eox-drawtools>`
    ).as("eox-drawtools");
  });

  it("loads the drawtools", () => {
    cy.get("eox-drawtools").shadow();
  });

  it("clicks the draw button", () => {
    cy.get("eox-drawtools")
      .shadow()
      .within(() => {
        cy.get("[data-cy='drawBtn']").contains("draw");
        cy.get("[data-cy='drawBtn']").should("not.contain", "drawing");
        cy.get("[data-cy='drawBtn']").click();
        cy.get("[data-cy='drawBtn']").contains("drawing");
      });
    cy.get("eox-drawtools").should(($el) => {
      const drawTools = <EOxDrawTools>$el[0];
      expect(drawTools._drawnFeatures).to.have.length(1);
    });
  });

  it("clicks the discard button and clears drawn features", () => {
    cy.get("eox-drawtools")
      .shadow()
      .within(() => {
        cy.get("[data-cy='drawBtn']").click();
        cy.get("[data-cy='drawBtn']").contains("drawing");
        cy.get("[data-cy='discardBtn']").click();
        cy.get("[data-cy='drawBtn']").should("not.contain", "drawing");
      });
    cy.get("eox-drawtools").should(($el) => {
      const drawTools = <EOxDrawTools>$el[0];
      expect(drawTools._drawnFeatures).to.have.length(0);
    });
  });
});
