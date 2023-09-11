import "../src/main";
import "./_mockMap";

describe("LayerControl", () => {
  beforeEach(() => {
    cy.mount("<mock-map></mock-map>").as("mock-map");
    cy.mount(
      `
      <eox-layercontrol for="mock-map"></eox-layercontrol>`
    ).as("eox-layercontrol");
  });

  it("displays the correct amount of layers after a setMap()", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        { title: "1st round - foo" },
        { title: "1st round - bar" },
      ]);
    });
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([]);
    });
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        { title: "2nd round - baz" },
        { title: "2nd round - qux" },
      ]);
    });
    let numberOfLayers: number;
    cy.get("mock-map").and(($el) => {
      numberOfLayers = (<MockMap>$el[0]).map.getLayers().getArray().length;
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layers").find("li").should("have.length", numberOfLayers);
      });
  });
});
