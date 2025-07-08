import "color-legend-element";

export const checkLayerLegend = () => {
  const legendLayer = {
    properties: {
      id: "legend-test-1",
      title: "Legend test 1",
      layerLegend: {
        title: "Legend title",
        range: ["green", "red"],
        domain: [0, 1],
        ticks: 4,
        tickValues: [0, 0.2, 0.4, 0.8],
      },
    },
  };

  const multiLegendsLayer = {
    properties: {
      id: "legend-test-2",
      title: "Legend test 2",
      layerLegend: [
        {
          title: "Legend one",
          range: ["green", "yellow"],
          domain: [0, 1],
          ticks: 4,
          tickValues: [0, 0.2, 0.4, 0.8],
        },
        {
          title: "Legend two",
          range: ["blue", "red"],
          domain: [0, 1],
          ticks: 3,
          tickValues: [0.2, 0.4, 0.8],
        },
      ],
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
    mockMap.setLayers([legendLayer, multiLegendsLayer]);
  });
  const legendConfigs = [
    [legendLayer.properties.layerLegend],
    multiLegendsLayer.properties.layerLegend,
  ];

  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      cy.get("eox-layercontrol-layer-tools").each((t, tix) => {
        cy.wrap(t)
          .shadow()
          .within(() => {
            // check if the legend element exists
            cy.get("color-legend").each((l, lix) => {
              cy.wrap(l)
                .shadow()
                .within(() => {
                  // check if rendered legend title is equal to the configured title
                  cy.get("p.legend-title").then(($el) => {
                    expect($el[0].textContent).to.equal(
                      legendConfigs[tix][lix].title,
                    );
                  });

                  // check if the image (grandient) is rendered
                  cy.get("image").should("exist");

                  // check if the numbers of ticks rendered are equal to the configured ticks
                  cy.get("line").then(($el) => {
                    expect($el.length).equals(legendConfigs[tix][lix].ticks);
                  });

                  // check if the rendered tick values are the same as the values configured
                  const stringTickValues = legendConfigs[tix][
                    lix
                  ].tickValues.map((val) => val.toFixed(1).toString());
                  cy.get("text").then(($el) => {
                    $el.each((_idx, el) => {
                      expect(stringTickValues).include(el.textContent);
                    });
                  });
                });
            });
          });
      });
    });
};

export default checkLayerLegend;
