import "color-legend-element";

export const checkLayerLegend = () => {
  const legendLayer = {
    properties: {
      title: "Legend test",
      layerLegend: {
        title: "Legend title",
        range: ["green", "red"],
        domain: [0, 1],
        ticks: 4,
        tickValues: [0, 0.2, 0.4, 0.8],
        width: 460,
      },
    },
  };

  cy.get("eox-layercontrol").then(($el) => {
    const layerControlEl = $el[0];
    layerControlEl.tools = ["legend"];
  });

  cy.get("mock-map").then(($el) => {
    // Accessing the mock map element
    const mockMap = $el[0];
    // Setting layers
    mockMap.setLayers([legendLayer]);
  });

  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      // check if the legend element exists
      cy.get("color-legend")
        .should("exist")
        .shadow()
        .within(() => {
          // check if rendered legend title is equal to the configured title
          cy.get("p.legend-title").then(($el) => {
            expect($el[0].textContent).equal(
              legendLayer.properties.layerLegend.title
            );
          });

          // check if the image (grandient) is rendered
          cy.get("image").should("exist");

          // check if the numbers of ticks rendered are equal to the configured ticks
          cy.get("line").then(($el) => {
            expect($el.length).equals(legendLayer.properties.layerLegend.ticks);
          });

          // check if the rendered tick values are the same as the values configured
          const stringTickValues =
            legendLayer.properties.layerLegend.tickValues.map((val) =>
              val.toFixed(1).toString()
            );
          cy.get("text").then(($el) => {
            $el.each((_idx, el) => {
              expect(stringTickValues).include(el.textContent);
            });
          });
        });
    });
};

export default checkLayerLegend;
