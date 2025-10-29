const checkLayerSizeAfterMultipleCalls = () => {
  // Set layers in three different rounds
  cy.get("mock-map").then(($el) => {
    $el[0].setLayers([
      { properties: { title: "1st round - foo" } },
      { properties: { title: "1st round - bar" } },
    ]);

    // Clear all layers
    $el[0].setLayers([]);

    // Set new layers in the second round
    $el[0].setLayers([
      { properties: { title: "2nd round - baz" } },
      { properties: { title: "2nd round - qux" } },
    ]);
  });

  let numberOfLayers;

  // Get the number of layers on the map after the operations
  cy.get("mock-map").then(($el) => {
    numberOfLayers = $el[0].map.getLayers().getArray().length;
  });

  // Verify if the layer control UI reflects the correct number of layers
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      cy.get(".layers").find("li").should("have.length", numberOfLayers);
    });
};

export default checkLayerSizeAfterMultipleCalls;
