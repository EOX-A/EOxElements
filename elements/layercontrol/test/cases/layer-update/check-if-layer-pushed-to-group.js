const checkLayerPushedToGroup = () => {
  // Setting up the mock map with layers and a group
  cy.get("mock-map").and(($el) => {
    $el[0].setLayers([
      {
        properties: {
          title: "group",
          layerControlExpand: true,
        },
        layers: [{ properties: { title: "foo" } }], // Adding a layer to a group
      },
      { properties: { title: "bar" } }, // Adding a standalone layer
    ]);
  });

  // Pushing a new layer to the group
  cy.get("mock-map").and(($el) => {
    $el[0].map // Accessing the map
      .getLayers() // Getting all layers
      .getArray()[0] // Accessing the first layer (group)
      .getLayers() // Getting layers within the group
      .push({ properties: { title: "baz" } }); // Pushing a new layer
  });

  // Verifying if the added layer appears in the layer control
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      cy.get(".layer").find(".title").contains("baz"); // Checking if the title of the added layer is displayed
    });
};

export default checkLayerPushedToGroup;
