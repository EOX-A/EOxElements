import { createMap } from "../../src/interface";

describe("general", () => {
  beforeEach(() => {
    cy.visit("../../public/test.html");
  });
  it("loads the map", () => {
    cy.document().then((doc) => {
      const init = async () => {
        const map = await createMap(doc.querySelector("#map"));
        const layers = await map?.getLayers();
        expect(layers).to.have.lengthOf(1);
      };
      init();
    });
    cy.get('[data-cy="map"] > iframe').should("exist");
  });
});
