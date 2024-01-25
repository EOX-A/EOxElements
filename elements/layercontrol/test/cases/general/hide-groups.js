// Function to simulate hiding layers within the LayerControl
const hideLayers = () => {
  // Set up the layers in the mock map
  cy.get("mock-map").then(($el) => {
    const mockMap = $el[0]; // Accessing the mock map element

    // Setting layers: one visible and another marked with layerControlHide: true
    mockMap.setLayers([
      {
        properties: { layerControlHideGroup: true },
        layers: [{ visible: true }],
      },
      { layers: [{ visible: true }] },
    ]);
  });

  // Verify the effect on the LayerControl
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      cy.get("ul").find("li[data-type=group]").should("have.length", 2);
      // Checking the number of list items in the LayerControl
      cy.get("ul").find("li").should("have.length", 3);
    });
};

export default hideLayers;
