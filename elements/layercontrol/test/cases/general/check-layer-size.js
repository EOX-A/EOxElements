// Function to check the rendered size and visibility of layers in the LayerControl
const checkLayerSize = () => {
  // Set up the layers in the mock map - visibility: true, visibility: false
  cy.get("mock-map").then(($el) => {
    const mockMap = $el[0]; // Accessing the mock map element

    // Setting layers, one visible and one hidden
    mockMap.setLayers([{ visible: true }, { visible: false }]);
  });

  // Verifying layer rendering in the LayerControl component
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      // Checking if the correct number of layers are rendered
      cy.get(".layers").find("li").should("have.length", 2);

      // Verifying the number of checked checkboxes (visible layers)
      cy.get(".layers")
        .find("input[type=checkbox]:checked")
        .should("have.length", 1);
    });
};

export default checkLayerSize;
