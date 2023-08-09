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
      (<MockMap>$el[0]).setLayers([
        {
          id: 1,
          title: "foo",
          visible: true,
        },
        {
          id: 2,
          title: "bar",
          visible: false,
        },
      ]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get("ul").find("li").should("have.length", 2);
      });
  });

  it("hides layers correctly", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        {
          id: 1,
          title: "foo",
          visible: true,
        },
        {
          id: 2,
          title: "bar",
          layerControlHide: true,
        },
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
        {
          id: 1,
          title: "foo",
          visible: true,
        },
        {
          id: 2,
          title: "bar",
          layerControlOptional: true,
        },
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
        {
          id: 1,
          title: "foo",
          visible: true,
        },
        {
          id: 2,
          title: "bar",
          layerControlDisable: true,
        },
      ]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".drag-handle.disabled").should("have.length", 1);
      });
  });
});
