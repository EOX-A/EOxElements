import { html } from "lit";

/**
 * Tests to set geo location control via webcomponent
 */
const setGeoLocationControl = () => {
  cy.mount(
    html`<eox-map
      .zoom=${0}
      .center=${[0, 0]}
      .layers=${[
        {
          type: "Tile",
          properties: {
            id: "customId",
          },
          source: {
            type: "OSM",
          },
        },
      ]}
      .controls=${{
        Geolocation: {},
      }}
    ></eox-map>`
  ).as("eox-map");
  cy.get("eox-map").and(async ($el) => {
    const eoxMap = $el[0];
    expect(eoxMap.map.getControls().getLength()).to.be.equal(1);
    expect(eoxMap.map.getControls().getArray()[0].getElement()).to.exist;
  });
};

export default setGeoLocationControl;
