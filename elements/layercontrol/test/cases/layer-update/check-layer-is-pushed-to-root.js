const checkLayerIsPushedToRoot = () => {
  // Set up the mock map with an initial layer
  cy.get("mock-map").and(($el) => {
    $el[0].setLayers([{ properties: { title: "foo" } }]);
  });

  // Pushing a new layer to the root level of the map
  cy.get("mock-map").and(($el) => {
    $el[0].map // Accessing the map
      .getLayers() // Getting all layers
      .push({ properties: { title: "bar" } }); // Pushing a new layer
  });

  // Verify if the added layer appears in the layer control
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      cy.get(".layer").find(".title").contains("bar"); // Checking if the title of the added layer is displayed
    });
};

export default checkLayerIsPushedToRoot;
