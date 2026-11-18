// Function to check that a layer whose layerDatetime has no controlValues gets no datetime tool
const hideDatetimeWithoutControlValues = () => {
  cy.get("mock-map").then(($el) => {
    const mockMap = $el[0];
    // e.g. a GeoZarr layer before the map has read its time axis
    mockMap.setLayers([
      {
        properties: {
          id: "datetime-without-values",
          title: "Datetime without values",
          layerDatetime: { currentStep: "2024-01-01" },
        },
      },
    ]);
  });

  cy.get("eox-layercontrol")
    .shadow()
    .find("eox-layercontrol-layer-tools")
    .shadow()
    .within(() => {
      // the opacity tab proves the tools rendered
      cy.get("eox-layercontrol-tools-items")
        .should("have.prop", "tabs")
        .and("deep.equal", ["opacity"]);
      cy.get("eox-timecontrol").should("not.exist");
    });
};

export default hideDatetimeWithoutControlValues;
