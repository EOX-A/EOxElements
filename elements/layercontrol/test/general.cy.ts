import { html } from "lit";
import "../src/main";
import { MockMap } from "./_mockMap";

describe("LayerControl", () => {
  beforeEach(() => {
    cy.mount(html`${new MockMap()}`).as("mock-map");
    cy.mount(
      `
      <eox-layercontrol for="mock-map"></eox-layercontrol>`
    ).as("eox-layercontrol");
  });

  it("loads the layercontrol", () => {
    cy.get("eox-layercontrol").shadow();
  });

  it("displays the correct amount of layers", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([{ visible: true }, { visible: false }]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layers").find("li").should("have.length", 2);
        cy.get(".layers")
          .find("input[type=checkbox]:checked")
          .should("have.length", 1);
      });
  });

  it("hides layers correctly", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        { visible: true },
        { layerControlHide: true },
      ]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get("ul").find("li").should("have.length", 1);
      });
  });

  it("renders the optional layer selection", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        { visible: true },
        { layerControlOptional: true },
      ]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get("[data-cy='optionalLayers']").should("exist");
        cy.get("[data-cy='optionalLayers']")
          .find("option:not([disabled])")
          .should("have.length", 1);
      });
  });

  it("disables the drag handle of the disabled layer", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        { visible: true },
        { layerControlDisable: true },
      ]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".drag-handle.disabled").should("have.length", 1);
      });
  });

  it("shows the correct layer titles", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([{ title: "foo" }, { title: "bar" }]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layer").find(".title").contains("foo");
        cy.get(".layer").find(".title").contains("bar");
      });
  });
});
