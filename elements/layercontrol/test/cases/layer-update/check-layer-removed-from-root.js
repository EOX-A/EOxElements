const checkLayerRemovedFromRoot = () => {
  // Set up the mock map with two layers
  cy.get("mock-map").and(($el) => {
    $el[0].setLayers([
      { properties: { id: "foo" } },
      { properties: { id: "bar" } },
    ]);
  });

  const layerToDelete = "foo"; // Layer to be deleted

  // Perform the UI interactions to remove the specified layer
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      // Click on the 'tools' button of the layer to show additional options
      cy.get(`[data-layer=${layerToDelete}] .tools > summary`).click();

      // Click on the 'remove' icon to delete the layer
      cy.get("button.remove-icon:visible").last().click();

      // Check if the layer UI element is removed from the layer control
      cy.get(`[data-layer=${layerToDelete}]`).should("not.exist");
    });
};

export default checkLayerRemovedFromRoot;
