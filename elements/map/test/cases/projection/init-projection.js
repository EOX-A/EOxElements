import { html } from "lit";

/**
 * Tests to set the initial projection of the view
 */
const initProjection = () => {
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });
  cy.mount(
    html`<eox-map
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
      .projection=${"EPSG:4326"}
    ></eox-map>`
  ).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    expect(eoxMap.map.getView().getProjection().getCode()).to.be.equal(
      "EPSG:4326"
    );
  });
};

export default initProjection;
