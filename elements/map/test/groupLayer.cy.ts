import "../main";

describe("layers", () => {
  it("loads a Vector Layer", () => {
    cy.mount(
      `<eox-map layers='[
        {
          "type": "Group",
          "id": "group",
          "layers": [
            {
              "type": "Vector",
              "id": "regions",
              "source": {
                "type": "Vector",
                "url": "https://openlayers.org/data/vector/ecoregions.json",
                "format": "GeoJSON"
              }
            },
            {
              "type": "Group",
              "id": "groupLayerInsideGroup",
              "layers": [
                {
                  "type": "Tile",
                  "id": "layerInsideGroupInsideGroup",
                  "source": {
                    "type": "OSM"
                  }
                }
              ]
            }
          ]
        }
      ]'></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];

      const groupLayer = eoxMap.getLayerById("group");
      expect(groupLayer, "find group layer").to.exist;

      const layerInsideGroup = eoxMap.getLayerById("regions");
      expect(layerInsideGroup, "find layer inside group").to.exist;

      const groupLayerInsideGroup = eoxMap.getLayerById(
        "groupLayerInsideGroup"
      );
      expect(groupLayerInsideGroup, "find group layer inside group").to.exist;

      const layerInsideGroupInsideGroup = eoxMap.getLayerById(
        "layerInsideGroupInsideGroup"
      );
      expect(
        layerInsideGroupInsideGroup,
        "find layer inside group inside group"
      ).to.exist;
    });
  });
});
