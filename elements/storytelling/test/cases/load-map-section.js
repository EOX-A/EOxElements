import "../../../map/src/main";

/**
 * Ensure all the map sections loaded
 */
const loadMapSectionTest = () => {
  const zoom = 10;
  const testText = `
## EOX Map <!--{as=eox-map zoom=${zoom}}-->
`;

  cy.mount(
    `<eox-storytelling id="map-with-loading" show-map-loading-indicator markdown='${testText}'></eox-storytelling>`,
  );

  cy.get("#map-with-loading")
    .shadow()
    .within(() => {
      cy.get("eox-map").should("exist");
      cy.get("eox-map").then(($eoxMap) => {
        const zoom = $eoxMap[0].map.getView().getZoom();
        expect($eoxMap[0].zoom).to.eq(zoom);
        expect($eoxMap[0].controls).to.have.property("LoadingIndicator");
      });
    });

  cy.mount(
    `<eox-storytelling id="map-without-loading" markdown='${testText}'></eox-storytelling>`,
  );

  cy.get("#map-without-loading")
    .shadow()
    .within(() => {
      cy.get("eox-map").should("exist");
      cy.get("eox-map").then(($eoxMap) => {
        const controls = $eoxMap[0].controls;
        if (controls) {
          expect(controls).to.not.have.property("LoadingIndicator");
        } else {
          expect(controls).to.be.undefined;
        }
      });
    });
};

export default loadMapSectionTest;
