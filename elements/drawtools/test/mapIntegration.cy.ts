import "../src/main";
import "../../map/main"

describe("Drawtools", () => {
  beforeEach(() => {
    // @ts-ignore
    cy.mount(`<eox-map
      zoom="3"
      center="[1000000, 6000000]"
      layers='[
        {"type": "Vector","id": "draw","source": {"type": "Vector"}},
        {"type":"Tile","source":{"type":"OSM"}}
      ]'
    ></eox-map>`).as(
      "eox-map"
    )
    // @ts-ignore
    cy.mount(`
      <eox-drawtools for="eox-map" layer="draw"></eox-drawtools>`
    ).as(
      "eox-drawtools"
    );
  })

  it("loads the drawtools", () => {
    cy.get("eox-drawtools")
      .shadow()
      .within(() => {
        cy.get("[data-cy='drawBtn']").click();
      });
    cy.get("eox-map")
      .shadow()
      .within(() => {
        cy.get("canvas").click(20, 20);
        cy.get("canvas").click(20, 50);
        cy.get("canvas").click(100, 50);
        cy.get("canvas").click(100, 20);
        cy.get("canvas").click(20, 20);
      })
  });
});
