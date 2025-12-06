// Function to simulate disabling the drag handle for a layer
const disableDrag = () => {
  // Set up the layers in the mock map
  cy.get("mock-map").then(($el) => {
    const mockMap = $el[0]; // Accessing the mock map element

    // Setting layers: one visible and another with layerControlDisable: true
    mockMap.setLayers([
      { properties: { layerControlDisable: true } },
      { visible: true },
    ]);
  });

  // Verify the effect on the LayerControl
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      // Clicking on the summary (representing the disabled layer)
      cy.get("eox-layercontrol-layer-tools")
        .last()
        .shadow()
        .within(() => {
          cy.get("summary").click({ multiple: true, force: true });
        });

      // Verifying the visibility of the drag handle
      // There should be two drag handles, one for the layer title and one for the tools action
      cy.get(".drag-handle.disabled").should("have.length", 1);
      cy.get("eox-layercontrol-layer-tools")
        .last()
        .shadow()
        .within(() => {
          cy.get(".drag-handle.disabled").should("have.length", 1);
        });
    });
};

export default disableDrag;
