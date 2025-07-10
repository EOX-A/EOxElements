// Function to simulate exclusive layers and groups within the LayerControl
const exclusiveLayers = () => {
  // Set up the layers in the mock map
  cy.get("mock-map").then(($el) => {
    const mockMap = $el[0]; // Accessing the mock map element

    // Setting layers and a group with layerControlExclusive
    mockMap.setLayers([
      { properties: { id: "a", layerControlExclusive: true }, visible: true },
      { properties: { id: "b", layerControlExclusive: true }, visible: false },
      {
        type: "Group",
        properties: {
          id: "c",
          layerControlExclusive: true,
          layerControlExpand: true,
        },
        layers: [
          {
            properties: { id: "d", layerControlExclusive: true },
            visible: false,
          },
          {
            properties: { id: "e", layerControlExclusive: true },
            visible: true,
          },
        ],
        visible: false,
      },
    ]);
  });

  // Verify the effect on the LayerControl
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      // Checking the number of checked radio inputs in the LayerControl
      cy.get("ul").find("input[type=radio]:checked").should("have.length", 2);
      cy.get("ul").find("input[type=radio]").last().should("not.be.checked");
      cy.get("ul")
        .find("input[type=radio]:not(:checked)")
        .last()
        .click({ force: true });
      cy.get("ul").find("input[type=radio]").last().should("be.checked");
      cy.get("ul").find("input[type=radio]:checked").should("have.length", 2);
    });

  // Verify the effect on the LayerControl for globallyExclusiveLayers property
  cy.get("eox-layercontrol")
    .and(($el) => {
      const layerControl = $el[0];
      layerControl.globallyExclusiveLayers = true;
    })
    .shadow()
    .within(() => {
      // Checking the number of checked radio inputs in the LayerControl
      cy.get("ul")
        .find("input[type=radio]:not(:checked)")
        .first()
        .click({ force: true });
      cy.get("ul").find("input[type=radio]:checked").should("have.length", 1);
      cy.get("ul").find("input[type=radio]").last().should("not.be.checked");
    });
};

export default exclusiveLayers;
