import { EOxLayerControl } from "../src/main";

describe("Layer Control", () => {
  beforeEach(() => {
    cy.visit("/elements/layercontrol/test/general.html");
  });

  it("loads the layercontrol", () => {
    cy.get("eox-layercontrol").should(($el) => {
      const eoxLayerControl = <EOxLayerControl>$el[0];
      console.log(eoxLayerControl);
    });
  });
});
