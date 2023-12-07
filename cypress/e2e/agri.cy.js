describe("Layer Switcher", () => {
  beforeEach(() => {
    cy.visit("/cypress/e2e/agri.html");
  });

  it("draws on the map", () => {
    cy.fixture("agri.json").then((layers) => {
      cy.get("eox-map").then(($el) => {
        const eoxMap = $el[0];
        eoxMap.layers = layers;
        cy.get("eox-drawtools")
          .shadow()
          .within(() => {
            cy.get("eox-drawtools-controller")
              .shadow()
              .within(() => cy.get("[data-cy='drawBtn']").click());
          });
        cy.get("eox-map")
          .shadow()
          .within(() => {
            cy.get("canvas").click(20, 20);
            cy.get("canvas").click(20, 50);
            cy.get("canvas").click(100, 50);
            cy.get("canvas").click(100, 20);
            cy.get("canvas").click(20, 20);
          })
          .then(() => {
            const drawLayer = eoxMap.getLayerById("drawLayer");
            const features = drawLayer.getSource().getFeatures();
            const geometry = features[0].getGeometry();
            expect(features).to.have.length(1);
            expect(geometry.getCoordinates()[0].length).to.be.equal(5);
          });
      });
    });
  });

  it("adapts to changed layers property with changed layer id", () => {
    cy.fixture("agri.json").then((layers) => {
      layers[0].properties.id = "changedId";

      cy.get("eox-map").then(($el) => {
        const eoxMap = $el[0];
        eoxMap.layers = layers;

        cy.get("eox-layercontrol")
          .shadow()
          .within(() => {
            cy.get("[data-layer=changedId]")
              .parent()
              .children()
              .should("have.length", 2);
          });
      });
    });
  });

  it("adapts to changed layers property with changed layer id inside group", () => {
    cy.fixture("agri.json").then((layers) => {
      const groupLayerIndex = layers.findIndex(
        (layer) => layer.type === "Group"
      );
      layers[groupLayerIndex].layers[0].properties.id = "changed-nested-Id";

      cy.get("eox-map").then(($el) => {
        const eoxMap = $el[0];
        eoxMap.layers = layers;

        cy.get("eox-layercontrol")
          .shadow()
          .within(() => {
            cy.get("[data-layer=changed-nested-Id]")
              .parent()
              .children()
              .should("have.length", 2);
          });
      });
    });
  });
});
