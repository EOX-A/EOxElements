const toolsAutoExpand = () => {
  cy.get("mock-map").then(($el) => {
    const mockMap = $el[0];
    mockMap.setLayers([
      {
        properties: { id: "a", description: "foo" },
        visible: true,
      },
      {
        properties: { id: "b", description: "bar" },
        visible: true,
      },
    ]);
  });
  cy.wait(200);

  cy.get("eox-layercontrol")
    .and(($el) => {
      const layerControl = $el[0];
      layerControl.toolsAutoExpand = true;
      layerControl.tools = ["info"];
    })
    .shadow()
    .within(() => {
      // Layer A (visible): tools should be open
      cy.get("li")
        .first()
        .within(() => {
          cy.get("input[type=checkbox]").should("be.checked");
          cy.get("button.tools").should("not.exist");
          cy.get("eox-layercontrol-layer-tools").should(
            "have.prop",
            "open",
            true,
          );
        });

      // Layer B (visible): tools should be open
      cy.get("li")
        .last()
        .within(() => {
          cy.get("input[type=checkbox]").should("be.checked");
          cy.get("button.tools").should("not.exist");
          cy.get("eox-layercontrol-layer-tools").should(
            "have.prop",
            "open",
            true,
          );
        });

      // Toggle Layer A to invisible
      cy.get("li").first().find("input[type=checkbox]").click({ force: true });
      cy.get("li")
        .first()
        .within(() => {
          cy.get("eox-layercontrol-layer-tools").should(
            "have.prop",
            "open",
            false,
          );
        });

      // Toggle Layer A back to visible
      cy.get("li").first().find("input[type=checkbox]").click({ force: true });
      cy.get("li")
        .first()
        .within(() => {
          cy.get("eox-layercontrol-layer-tools").should(
            "have.prop",
            "open",
            true,
          );
        });
    });
};

export default toolsAutoExpand;
