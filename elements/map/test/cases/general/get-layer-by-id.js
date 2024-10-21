import { html } from "lit";

/**
 * Tests to check a layer is returned via `id`
 */
const getLayerById = () => {
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });
  cy.mount(
    html`<eox-map
      .layers=${[
        { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
      ]}
    ></eox-map>`,
  ).as("eox-map");
  cy.get("eox-map").and(($el) => {
    expect($el[0].getLayerById("osm").get("id") === "osm").to.exist;
  });
};

export default getLayerById;
