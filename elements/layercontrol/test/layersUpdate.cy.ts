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

  it("displays the correct amount of layers after multiple calls of setMap()", () => {
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

  it("updates if a layer is removed from the root collection", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        { id: "foo", layerControlExpanded: true },
        { id: "bar" },
      ]);
    });

    const layerToDelete = "foo";

    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(`[data-layer=${layerToDelete}] eox-layerconfig`)
          .shadow()
          .within(() => {
            cy.get("div button.delete").should("be.visible").click();
          });
        cy.get(`[data-layer=${layerToDelete}]`).should("not.exist");
      });

    cy.get("mock-map").then(($el) => {
      let layer = (<MockMap>$el[0]).layers.find(
        (l) => l.id === layerToDelete
      );
      assert.equal(layer, undefined, "deleted layer should not be found");
    });
  });

  it("updates if a layer is removed from a group", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        {
          title: "group",
          layers: [{ title: "baz" }],
          layerControlExpanded: true,
        },
        { title: "bar" },
      ]);
    });
    cy.wait(100);

    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).map.getLayers().getArray()[0].getLayers().pop();
    });

    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layer").find(".title").contains("baz").should("not.exist");
      });
  });

  it("adds a layer to a correct group when originally optional", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        {
          title: "group1",
          layers: [{ title: "title1" }],
          layerControlExpanded: true,
        },
        {
          title: "group2",
          layers: [
            { title: "foo" },
            { title: "title2", layerControlOptional: true, visible: false },
          ],
          layerControlExpanded: true,
        },
      ]);
    });
    cy.wait(100);

    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get("[data-cy='optionalLayers']").select("title2");
        cy.get("[data-cy='optionalLayers']").siblings("button").click();
      });
    cy.wait(50);

    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layer")
          .find(".title")
          .contains("title2")
          .should("have.length", 1);
      });
  });
});
