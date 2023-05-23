import { EOxLayerSwitcher } from "../src/main";

describe("Layer Switcher", () => {
  beforeEach(() => {
    cy.visit("/elements/layerswitcher/test/general.html");
  });

  it("loads the layerswitcher", () => {
    cy.get("eox-layerswitcher").should(($el) => {
      const eoxLayerSwitcher = <EOxLayerSwitcher>$el[0];
      console.log(eoxLayerSwitcher);
    });
  });
});
