const checkLayerRemovedFromGroup = () => {
  // Set up the mock map with a group containing a layer
  cy.get("mock-map").and(($el) => {
    $el[0].setLayers([
      { title: "bar" }, // Another separate layer outside the group
      {
        properties: {
          title: "group",
          layerControlExpand: true,
        },
        layers: [{ properties: { title: "baz" } }], // Initial layer in the group
      },
    ]);
  });

  // Remove the last layer from the group
  cy.get("mock-map").and(($el) => {
    $el[0].map
      .getLayers() // Get all layers
      .getArray()[0] // Access the group layer
      .getLayers() // Get layers within the group
      .pop(); // Remove the last layer
  });

  // Verify if the removed layer does not exist in the layer control
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      cy.get(".layer").find(".title").contains("baz").should("not.exist"); // Check if the removed layer is not present
    });
};

export default checkLayerRemovedFromGroup;
