// Function to check if a section opens when 'layerControlExpand' is true
const checkPreOpenSection = () => {
  // Set up the layers in the mock map
  cy.get("mock-map").then(($el) => {
    const mockMap = $el[0]; // Accessing the mock map element

    // Setting layers: one visible and another with layerControlExpand: true
    mockMap.setLayers([
      {
        properties: { layerControlExpand: undefined },
        layers: [{ visible: true }],
      },
      {
        properties: { layerControlExpand: true },
        layers: [{ visible: true }],
      },
    ]);
  });

  // Verify if the section opens within the LayerControl component
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      // Checking if a details tag (any open section) exists
      cy.get("details[open]").should("have.length", 1);
    });
};

export default checkPreOpenSection;
