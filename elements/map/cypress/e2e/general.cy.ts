import { createMap } from "../../src/interface";

describe("general", () => {
  beforeEach(() => {
    cy.visit("../../public/test.html");
  });
  it("loads the map", () => {
    cy.document().then((doc) => {
      const init = async () => {
        const map = await createMap(doc.querySelector("#map"));
        map?.setLayers([]);
        const test = await map?.getLayers();
        console.log(test);
      };
      init();
    });
    cy.get('[data-cy="map"] > iframe').should("exist");
  });
});
