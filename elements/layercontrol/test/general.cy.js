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

  it("loads the layercontrol", () => {
    cy.get("eox-layercontrol").shadow();
  });

  it("displays the correct amount of layers", () => {
    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0]
        .setLayers([{ visible: true }, { visible: false }]);
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
      $el /**MockMap*/[0]
        .setLayers([
          { visible: true },
          { properties: { layerControlHide: true } },
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
      $el /**MockMap*/[0]
        .setLayers([
          { visible: true },
          { properties: { layerControlOptional: true } },
        ]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get("[data-cy='optionalLayers']").should("exist");
        cy.get("[data-cy='optionalLayers']")
          .find("option:not([disabled])")
          .should("have.length", 1);
        cy.get("[data-cy='optionalLayers']").siblings("button").should("exist");
      });
  });

  it("disables the drag handle of the disabled layer", () => {
    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0]
        .setLayers([
          { visible: true },
          { properties: { layerControlDisable: true } },
        ]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".tools summary").click({ multiple: true });
        cy.get(".drag-handle:visible").should("have.length", 1);
      });
  });

  it("shows the correct layer titles", () => {
    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0]
        .setLayers([
          { properties: { title: "foo" } },
          { properties: { title: "bar" } },
        ]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layer").find(".title").contains("foo");
        cy.get(".layer").find(".title").contains("bar");
      });
  });

  it("pre-opens a section if layerControlExpand is present", () => {
    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0]
        .setLayers([
          { visible: true },
          {
            properties: { layerControlExpand: true },
            layers: [{ visible: true }],
          },
        ]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get("details[open]").should("exist");
      });
  });
});
