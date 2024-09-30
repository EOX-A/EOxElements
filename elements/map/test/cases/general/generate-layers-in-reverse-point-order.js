import { html } from "lit";

/**
 * Tests to check whether layers is generated in reverse point order
 */
const generateLayersInReversePointOrder = () => {
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });
  cy.mount(html`<eox-map></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const layersArray = [
      { type: "Tile", properties: { id: "1" }, source: { type: "OSM" } },
      { type: "Tile", properties: { id: "2" }, source: { type: "OSM" } },
      { type: "Tile", properties: { id: "3" }, source: { type: "OSM" } },
    ];
    const eoxMap = $el[0];
    eoxMap.layers = layersArray;
    expect(layersArray.map((l) => l.properties.id).join("")).to.eq("123");
    expect(layersArray.map((l) => l.properties.id).join("")).to.not.eq("321");
    expect(
      eoxMap.map
        .getLayers()
        .getArray()
        .map((l) => l.get("id"))
        .join(""),
      "generate layers in reverse painters order"
    ).to.eq("321");
  });
};

export default generateLayersInReversePointOrder;
