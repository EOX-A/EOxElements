import { html } from "lit";

/**
 * Tests to check flat layers array is returned correctly
 */
const getFlatLayersArr = () => {
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });
  cy.mount(
    html`<eox-map
      .layers=${[
        {
          type: "Group",
          properties: { id: "group1" },
          layers: [
            {
              type: "Group",
              properties: { id: "group2" },
              layers: [
                {
                  type: "Tile",
                  properties: { id: "osm" },
                  source: { type: "OSM" },
                },
              ],
            },
          ],
        },
      ]}
    ></eox-map>`,
  ).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    const layersArray = eoxMap.getFlatLayersArray(
      eoxMap.map.getLayers().getArray(),
    );
    expect(layersArray.length).to.equal(3);
    expect(layersArray.find((l) => l.get("id") === "group1")).to.exist;
    expect(layersArray.find((l) => l.get("id") === "group2")).to.exist;
    expect(layersArray.find((l) => l.get("id") === "osm")).to.exist;
  });
};

export default getFlatLayersArr;
