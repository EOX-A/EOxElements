import "../src/main";
import "./_mockMap";

describe("LayerControl", () => {
  beforeEach(() => {
    const showLayerZoomState = Cypress.mocha
      .getRunner()
      .suite.ctx.currentTest.title.includes("showLayerZoomState");

    const addLayers = Cypress.mocha
      .getRunner()
      .suite.ctx.currentTest.title.includes("addLayers");

    cy.mount("<mock-map></mock-map>").as("mock-map");
    cy.mount(`<eox-layercontrol for="mock-map"></eox-layercontrol>`, {
      properties: { showLayerZoomState, addLayers },
    }).as("eox-layercontrol");
  });

  it("displays the correct amount of layers after multiple calls of setMap()", () => {
    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0]
        .setLayers([
          { properties: { title: "1st round - foo" } },
          { properties: { title: "1st round - bar" } },
        ]);
    });
    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0]
        .setLayers([]);
    });
    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0]
        .setLayers([
          { properties: { title: "2nd round - baz" } },
          { properties: { title: "2nd round - qux" } },
        ]);
    });
    let numberOfLayers;
    cy.get("mock-map").and(($el) => {
      numberOfLayers = $el /**MockMap*/[0].map
        .getLayers()
        .getArray().length;
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layers").find("li").should("have.length", numberOfLayers);
      });
  });

  it("updates if a layer is pushed to the root collection", () => {
    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0]
        .setLayers([{ properties: { title: "foo" } }]);
    });

    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0].map
        .getLayers()
        .push({ properties: { title: "bar" } });
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layer").find(".title").contains("bar");
      });
  });

  it("updates if a layer is pushed to a group", () => {
    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0]
        .setLayers([
          {
            properties: {
              title: "group",
              layerControlExpand: true,
            },
            layers: [{ properties: { title: "foo" } }],
          },
          { properties: { title: "bar" } },
        ]);
    });

    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0].map
        .getLayers()
        .getArray()[0]
        .getLayers()
        .push({ properties: { title: "baz" } });
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layer").find(".title").contains("baz");
      });
  });

  it("updates if a layer is removed from the root collection", () => {
    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0]
        .setLayers([
          { properties: { id: "foo" } },
          { properties: { id: "bar" } },
        ]);
    });

    const layerToDelete = "foo";

    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(`[data-layer=${layerToDelete}] .tools > summary`).click();
        cy.get("button.remove-icon:visible").last().click();
        cy.get(`[data-layer=${layerToDelete}]`).should("not.exist");
      });

    // new approach is to just hide layers, not delete
    // keeping this as reference if we choose to remove layers in future
    // cy.get("mock-map").then(($el) => {
    //   let layer = $el /**MockMap*/[0].layers
    //     .find((l) => l.id === layerToDelete);
    //   assert.equal(layer, undefined, "deleted layer should not be found");
    // });
  });

  it("updates if a layer is removed from a group", () => {
    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0]
        .setLayers([
          {
            properties: {
              title: "group",
              layerControlExpand: true,
            },
            layers: [{ properties: { title: "baz" } }],
          },
          { title: "bar" },
        ]);
    });

    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0].map
        .getLayers()
        .getArray()[0]
        .getLayers()
        .pop();
    });

    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layer").find(".title").contains("baz").should("not.exist");
      });
  });

  it("adds a layer to a correct group when originally optional", () => {
    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0]
        .setLayers([
          {
            properties: {
              title: "group1",
              layerControlExpand: true,
            },
            layers: [{ properties: { title: "title1" } }],
          },
          {
            properties: {
              title: "group2",
              layerControlExpand: true,
            },
            layers: [
              { properties: { title: "foo" } },
              {
                properties: {
                  id: "title2",
                  title: "title2",
                  layerControlOptional: true,
                },
                visible: false,
              },
            ],
          },
        ]);
    });

    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get("[data-cy='optionalLayers']").select("title2");
        cy.get("[data-cy='optionalLayers']").siblings("button").click();
      });

    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layer")
          .find(".title")
          .contains("title2")
          .should("have.length", 1);
      });
  });

  it("Zoom and check layer state based on min and max zoom - showLayerZoomState", () => {
    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0]
        .setLayers([
          { properties: { id: "foo" }, minZoom: 2 },
          { properties: { id: "bar" }, maxZoom: 9 },
        ]);
    });

    const checkLayerClass = (id, have) => {
      const haveCheck = !have ? "not." : "";
      cy.get(`[data-layer=${id}] .layer`).should(
        `${haveCheck}have.class`,
        "zoom-state-invisible"
      );
    };
    const changeZoom = (zoom) => {
      cy.get("mock-map").and(($el) => {
        $el[0].setZoom(zoom);
        $el[0].map.getEvents()["change:resolution"].map((func) => func());
      });
    };

    // Case 1: Default load with zoom level 1
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        checkLayerClass("foo", true);
        checkLayerClass("bar");
      });

    // Case 2: change zoom level to 3
    changeZoom(3);
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        checkLayerClass("foo");
        checkLayerClass("bar");
      });

    // Case 3: change zoom level to 10
    changeZoom(10);
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        checkLayerClass("foo");
        checkLayerClass("bar", true);
      });
  });

  it("Add new external WMS/XYZ Layer - addLayers", () => {
    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0]
        .setLayers([{ properties: { id: "foo" } }]);
    });

    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get("eox-layercontrol-add-layers")
          .within(() => {
            cy.get(`.add-layer`).should(`have.class`, "add-layer");
            cy.get(`.add-layer-input`).type("foo");
            cy.get(`.add-layer-btn`).should("have.attr", "disabled");
            cy.get(`.add-layer-input`).clear().type(`{
            properties: {
              title: "Bar",
              id: "bar",
            }
          }`);
            cy.get(`.add-layer-btn`).should("not.have.attr", "disabled");
            cy.get(`.add-layer-btn`).click();
          })
          .then(() => {
            cy.get("eox-layercontrol-layer-list")
              .find("li")
              .should("have.attr", "data-layer", "bar");
          });
      });
  });
});
