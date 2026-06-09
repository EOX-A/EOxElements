import "color-legend-element";

export const checkLayerLegendDynamic = () => {
  const COLORMAPS = {
    magma: [
      "#000004",
      "#180f3d",
      "#440f76",
      "#721f81",
      "#9e2f7f",
      "#cd4071",
      "#f1605d",
      "#fd9567",
      "#fec98d",
      "#fcfdbf",
    ],
    viridis: [
      "#440154",
      "#482878",
      "#3e4989",
      "#31688e",
      "#26828e",
      "#1f9e89",
      "#35b779",
      "#6ece58",
      "#b5de2b",
      "#fde725",
    ],
  };

  const dynamicLayer = {
    properties: {
      id: "dynamic-test",
      title: "Dynamic test",
      layerControlToolsExpand: true,
      colormapRegistry: COLORMAPS,
      layerConfig: {
        type: "tileUrl",
        legend: {
          title: "Dynamic Legend",
          rangeProperty: "cbar",
          domainProperties: ["vmin", "vmax"],
        },
        schema: {
          type: "object",
          properties: {
            vminmax: {
              type: "object",
              properties: {
                vmin: { type: "number", default: 0 },
                vmax: { type: "number", default: 100 },
              },
            },
            cbar: {
              type: "string",
              enum: ["magma", "viridis"],
              default: "viridis",
            },
          },
        },
      },
    },
    getSource: () => ({
      getTileUrlFunction: () => () =>
        "https://example.com/tiles?vmin=0&vmax=100&cbar=viridis",
      setTileUrlFunction: () => {},
      setKey: () => {},
      on: () => {},
      un: () => {},
    }),
    on: () => {},
    un: () => {},
  };

  cy.get("eox-layercontrol").then(($el) => {
    const el = $el[0];
    el.tools = ["config"];
    el.colormapRegistry = COLORMAPS;
  });

  cy.get("mock-map").then(($el) => {
    $el[0].setLayers([dynamicLayer]);
  });

  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      cy.get("eox-layercontrol-layer-tools", { timeout: 10000 })
        .should("exist")
        .shadow()
        .within(() => {
          cy.get("eox-layercontrol-layerconfig", { timeout: 10000 })
            .should("exist")
            .within(() => {
              // 1. Initial Legend check
              cy.get("eox-layercontrol-layer-legend")
                .should("exist")
                .within(() => {
                  cy.get("color-legend")
                    .should("exist")
                    .then(($el) => {
                      return new Promise((resolve) => {
                        if ($el[0].shadowRoot) resolve();
                        else
                          customElements
                            .whenDefined("color-legend")
                            .then(resolve);
                      });
                    });
                  cy.get("color-legend")
                    .shadow()
                    .within(() => {
                      cy.get(".legend-title").should(
                        "contain",
                        "Dynamic Legend",
                      );
                      cy.get("text").first().should("contain", "0");
                      cy.get("text").last().should("contain", "100");
                    });
                });

              // 2. Update configuration
              cy.get("eox-jsonform")
                .should("exist")
                .within(() => {
                  cy.get('select[name*="cbar"]', { timeout: 15000 }).should(
                    "be.visible",
                  );
                  cy.get('select[name*="cbar"]').first().select("magma");
                  cy.get('input[name*="vmin"]').first().clear();
                  cy.get('input[name*="vmin"]').first().type("20");
                  cy.get('input[name*="vmax"]').first().clear();
                  cy.get('input[name*="vmax"]').first().type("80");
                  cy.get('input[name*="vmax"]').first().trigger("change");
                });

              // 3. Verify reactive update
              cy.get("eox-layercontrol-layer-legend").within(() => {
                cy.get("color-legend")
                  .shadow()
                  .within(() => {
                    cy.get("text", { timeout: 10000 })
                      .first()
                      .should("contain", "20");
                    cy.get("text").last().should("contain", "80");
                  });
              });
            });
        });
    });
};

export default checkLayerLegendDynamic;
