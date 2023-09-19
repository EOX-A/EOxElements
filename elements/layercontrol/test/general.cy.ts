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

  it("pre-opens a section if layerControlExpanded is present", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        { visible: true },
        { layerControlExpanded: true },
      ]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get("details[open]").should("exist");
      });
  });

  it("updates if a layer is pushed to the root collection", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([{ title: "foo" }]);
    });
    cy.wait(100);

    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).map.getLayers().push({ title: "bar" });
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layer").find(".title").contains("bar");
      });
  });

  it("updates if a layer is pushed to a group", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        {
          title: "group",
          layers: [{ title: "foo" }],
          layerControlExpanded: true,
        },
        { title: "bar" },
      ]);
    });
    cy.wait(100);

    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).map
        .getLayers()
        .getArray()[0]
        .getLayers()
        .push({ title: "baz" });
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layer").find(".title").contains("baz");
      });
  });

  it("updates if a layer is removed from a group", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        {
          title: "group",
          layers: [{title: "baz" }],
          layerControlExpanded: true,
        },
        { title: "bar" },
      ]);
    });
    cy.wait(100);

    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).map
        .getLayers()
        .getArray()[0]
        .getLayers()
        .getArray()
        .pop();
    });

    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layer").find(".title").contains("baz").should('not.exist');
      });
  });
});
