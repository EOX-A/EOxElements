import "color-legend-element";

export const checkLayerLegend = () => {
  const legendTitle = "legend title";

  cy.get("eox-layercontrol").then(($el) => {
    const layerControlEl = $el[0];
    layerControlEl.tools = ["legend"];
  });

  cy.get("mock-map").then(($el) => {
    // Accessing the mock map element
    const mockMap = $el[0];
    // Setting layers
    mockMap.setLayers([
      {
        properties: {
          title: "Legend test",
          layerLegend: {
            title: legendTitle,
            range: ["green", "red"],
            domain: [0, 1],
            ticks: 3,
            width: 460,
          },
        },
      },
    ]);
  });

  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      // check if the legend element exists
      cy.get("color-legend")
        .should("exist")
        .shadow()
        .within(() => {
          cy.get("p.legend-title").then(($el) => {
            // check if rendered legend title is equal to the configured title
            expect($el[0].textContent).equal(legendTitle);
          });
        });
    });
};

export default checkLayerLegend;
