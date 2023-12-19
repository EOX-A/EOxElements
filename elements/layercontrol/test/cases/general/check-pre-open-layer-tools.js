// Function to check if the layer tools section opens when 'layerControlToolsExpand' is true
const checkPreOpenLayerTools = () => {
  // Set up the layers in the mock map
  cy.get("mock-map").then(($el) => {
    const mockMap = $el[0]; // Accessing the mock map element

    // Setting layers: one visible and another with layerControlToolsExpand: true
    mockMap.setLayers([
      { visible: true },
      {
        properties: { layerControlToolsExpand: true },
        layers: [{ visible: true }],
      },
    ]);
  });

  // Verify if the tools section opens within the LayerControl component
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      // Checking if the details tag with class 'tools' is visible (open)
      cy.get("details[open].tools").should("be.visible");
    });
};

export default checkPreOpenLayerTools;
