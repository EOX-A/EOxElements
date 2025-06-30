// Function to simulate disabling the drag handle for a layer
const disableDrag = () => {
  // Set up the layers in the mock map
  cy.get("mock-map").then(($el) => {
    const mockMap = $el[0]; // Accessing the mock map element

    // Setting layers: one visible and another with layerControlDisable: true
    mockMap.setLayers([
      { visible: true },
      { properties: { layerControlDisable: true } },
    ]);
  });

  // Verify the effect on the LayerControl
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      // Clicking on the summary (representing the disabled layer)
      cy.get(".tools summary").click({ multiple: true, force: true });

      // Verifying the visibility of the drag handle
      // There shoudl be two drag handles, one for the layer title and one for the tools action
      cy.get(".drag-handle.disabled").should("have.length", 2);
    });
};

export default disableDrag;
