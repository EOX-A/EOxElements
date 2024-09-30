import { html } from "lit";

/**
 * Tests to check whether map exist or not
 */
const isMapExist = () => {
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });
  cy.mount(
    html`<eox-map
      .layers=${[
        { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
      ]}
    ></eox-map>`
  ).as("eox-map");
  cy.get("eox-map").and(($el) => {
    expect($el[0].map).to.exist;
  });
};

export default isMapExist;
