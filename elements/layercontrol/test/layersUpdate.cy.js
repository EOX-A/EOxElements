import "../src/main";
import "./_mockMap";

describe("LayerControl", () => {
  beforeEach(() => {
    const showLayerZoomState = Cypress.mocha
      .getRunner()
      .suite.ctx.currentTest.title.includes("showLayerZoomState");

    const addExternalLayers = Cypress.mocha
      .getRunner()
      .suite.ctx.currentTest.title.includes("addExternalLayers");

    cy.mount("<mock-map></mock-map>").as("mock-map");
    cy.mount(`<eox-layercontrol for="mock-map"></eox-layercontrol>`, {
      properties: { showLayerZoomState, addExternalLayers },
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

  it("Add new external WMS/XYZ and JSON Layer - addExternalLayers", () => {
    cy.get("mock-map").and(($el) => {
      $el /**MockMap*/[0]
        .setLayers([{ properties: { id: "foo" } }]);
    });

    let mapTile = "";

    cy.get("eox-layercontrol")
      .shadow()
      .find("eox-layercontrol-add-layers")
      .then(($el) => {
        cy.wrap($el).within(() => {
          cy.get(".eox-add-layer-main").should(
            `have.class`,
            "eox-add-layer-main"
          );
          cy.get(".add-icon").click();
          cy.get(".eox-add").should("have.class", "open");
          cy.get(".add-url").type("https://ows.mundialis.de/services/service");

          cy.get(".search-icon").as("apibtn").click();
          cy.get("@apibtn").should("not.be.disabled");

          cy.get(".add-layer-icon").first().click();
          cy.get(".search-list")
            .first()
            .invoke("text")
            .then((text) => {
              mapTile = text.trim();
            });
        });
      });

    cy.get("eox-layercontrol")
      .shadow()
      .find("eox-layercontrol-layer-list")
      .then(($el) => {
        cy.wrap($el).find("li").should("have.attr", "data-layer", mapTile);
      });

    cy.get("eox-layercontrol")
      .shadow()
      .find("eox-layercontrol-add-layers")
      .then(($el) => {
        cy.wrap($el).within(() => {
          cy.get(".eox-add-layer-tab li").last().click();
          cy.get("textarea").type(
            `{ type: "Tile", properties: { id: "WIND", title: "WIND", }, source: { type: "TileWMS", url: "//services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54", params: { LAYERS: "AWS_VIS_WIND_V_10M", }, }, maxZoom: 9, }`,
            { parseSpecialCharSequences: false }
          );
          cy.get(".json-add-layer").click();
        });
      });

    cy.get("eox-layercontrol")
      .shadow()
      .find("eox-layercontrol-layer-list")
      .then(($el) => {
        cy.wrap($el).find("li").should("have.attr", "data-layer", "WIND");
      });
  });
});
