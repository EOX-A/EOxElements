// Function to simulate hiding layers within the LayerControl
const hideLayers = () => {
  // Set up the layers in the mock map
  cy.get("mock-map").then(($el) => {
    const mockMap = $el[0]; // Accessing the mock map element

    // Setting layers: one visible and another marked with layerControlHide: true
    mockMap.setLayers([
      { visible: true },
      { properties: { layerControlHide: true } },
    ]);
  });

  // Verify the effect on the LayerControl
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      // Checking the number of list items in the LayerControl
      cy.get("ul").find("li").should("have.length", 1);
    });
};

export default hideLayers;
